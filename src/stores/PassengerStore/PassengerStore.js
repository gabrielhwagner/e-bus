import { observable, action } from 'mobx';

import ItineraryService from '~/services/ItineraryService';
import { getDateNow } from '~/utils';

export class PassengerStore {
  @observable itineraries = [];
  @observable itinerarySelected;

  @action
  async searchItineraryService() {
    try {
      const date = getDateNow();
      const { data } = await ItineraryService.searchItineraryPassenger(date);
      this.itineraries = [];
      this.itineraries = data;
      return;
    } catch (err) {}
  }

  @action
  setItinerarySelected(id) {
    this.itinerarySelected = this.itineraries.find(iti => (iti.id = id));
  }
}
