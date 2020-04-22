import { observable, action, computed } from 'mobx';

import DirectionsService from '~/services/DirectionsService';
import ItineraryService from '~/services/ItineraryService';
import { getDateNow, getDateTimeNow } from '~/utils';

export class DriverStore {
  @observable itineraries = [];

  @observable itinerarySelected;

  @observable itineraryStart = {};

  @action
  async searchItineraryService() {
    try {
      const date = getDateNow();
      const { data } = await ItineraryService.searchItineraryDriver(date);
      this.itineraries = [];
      this.itineraries = data;
      return;
    } catch (err) {}
  }

  @action
  async searchPassengerService() {
    try {
      const date = getDateNow();
      const { id } = this.itinerarySelected;
      const { data } = await ItineraryService.searchPassengerItinerary(
        id,
        date,
      );
      this.itinerarySelected.passengers = data;
      return;
    } catch (err) {}
  }

  @action
  async removePassengerService(idPassenger, author) {
    try {
      const date = getDateNow();
      const { id } = this.itinerarySelected;
      const { data } = await ItineraryService.removePassengerItinerary(
        id,
        idPassenger,
        author,
        date,
      );
      this.itinerarySelected.passengers = data;
      return;
    } catch (err) {}
  }

  @action
  async searchItineraryPointsService() {
    try {
      const date = getDateNow();
      const { id } = this.itinerarySelected;
      const { data } = await ItineraryService.searchPointsItinerary(id, date);
      const finalLocation = data.pop();
      this.itinerarySelected.points = data;
      this.itinerarySelected.finalPoint = finalLocation;
      return;
    } catch (err) {}
  }

  @action
  async startItinerary() {
    try {
      const date = getDateTimeNow();
      const { id } = this.itinerarySelected;
      const { data } = await ItineraryService.startItinerary(id, date);
      this.itineraryStart.id = data.startItinerary;
      // this.itineraryStart.id = 121;
      return;
    } catch (err) {}
  }

  @action
  async orderPoints(userLocation) {
    const { latitude, longitude } = this.itinerarySelected.finalPoint.endereco;
    const destination = {
      latitude,
      longitude,
    };
    const waypoints = this.itinerarySelected.points.map(({ endereco }) => {
      return {
        latitude: endereco.latitude,
        longitude: endereco.longitude,
      };
    });

    const { data } = await DirectionsService.searchOrderWaypoints(
      userLocation,
      destination,
      waypoints,
    );
    this.setOrderWaypoints(
      this.itinerarySelected.points,
      data.routes[0].waypoint_order,
      this.itinerarySelected.finalPoint,
    );
  }

  @action
  setItinerarySelected(id) {
    this.itinerarySelected = this.itineraries.find(iti => (iti.id = id));
  }

  @action
  setOrderWaypoints(itinerary, order, finalLocation) {
    const itineraryOrder = order.map((point, index) => {
      return {
        ...itinerary[point],
        active: index === 0,
      };
    });
    itineraryOrder.push({ ...finalLocation, active: false });
    this.itineraryStart.points = itineraryOrder;
    console.log(this.itineraryStart);
  }

  get passengerActive() {
    return this.itineraryStart.points.find(point => point.active);
  }

  get isLastPoint() {
    const pointActiveIndex = this.itineraryStart.points.findIndex(
      point => point.active,
    );
    return pointActiveIndex === this.itineraryStart.points.length - 1;
  }

  @action
  async saveStorePassenger(status) {
    await ItineraryService.saveStorePassenger(
      this.passengerActive.id,
      this.itineraryStart.id,
      status,
      getDateTimeNow(),
    );
    const pointActiveIndex = this.itineraryStart.points.findIndex(
      point => point.active,
    );

    if (pointActiveIndex === this.itineraryStart.points.length - 1) {
      return;
    }

    const itineraryStart = { ...this.itineraryStart };
    itineraryStart.points[pointActiveIndex + 1].active = true;
    itineraryStart.points[pointActiveIndex].active = false;

    this.itineraryStart = itineraryStart;
  }
}
