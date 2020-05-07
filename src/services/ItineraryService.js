import axios from './api';
import { URL_API } from '~/utils';

class ItineraryService {
  searchItineraryPassenger(day) {
    const url = `${URL_API}/passenger/itinerary?day=${day}`;
    return axios.get(url);
  }

  searchItineraryDriver(day) {
    const url = `${URL_API}/itinerary?day=2020-05-04`;
    return axios.get(url);
  }

  searchPassengerItinerary(id, day) {
    const url = `${URL_API}/itinerary/${id}/passenger?day=${day}`;
    return axios.get(url);
  }

  removePassengerItinerary(id, idPassenger, author, data) {
    const url = `${URL_API}/itinerary/${id}/passenger/${idPassenger}/remove`;
    const body = {
      data,
      author,
    };
    return axios.post(url, body);
  }

  removePassengerItineraryOfPassenger(id, author, data) {
    const url = `${URL_API}/passenger/itinerary/${id}/remove`;
    const body = {
      data,
      author,
    };
    return axios.post(url, body);
  }

  searchPointsItinerary(id, day) {
    const url = `${URL_API}/itinerary/${id}/points?day=${day}`;
    return axios.get(url);
  }

  startItinerary(itinerary, data) {
    const url = `${URL_API}/go/${itinerary}/start`;
    return axios.post(url, { data });
  }

  saveLocationDriver(location, data, itineraryStart) {
    const url = `${URL_API}/go/${itineraryStart}/location`;
    const body = {
      data,
      latitude: location.latitude,
      longitude: location.longitude,
    };
    return axios.post(url, body);
  }

  saveStorePassenger(passenger, itineraryStart, status, data) {
    const url = `${URL_API}/go/${itineraryStart}/passenger/${passenger}`;
    const body = {
      data,
      status,
    };
    return axios.post(url, body);
  }

  finishItinerary(id, data) {
    const url = `${URL_API}/go/${id}/finish`;
    return axios.post(url, { data });
  }

  searchLocationDriver(itinerary, day) {
    const url = `${URL_API}/itinerary/${itinerary}/location?day=${day}`;
    return axios.get(url);
  }
}

export default new ItineraryService();
