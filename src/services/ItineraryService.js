import axios from './api';
import { URL_API } from '~/utils';

class ItineraryService {
  searchItineraryPassenger(day) {
    const url = `${URL_API}/passenger/itinerary?day=${day}`;
    return axios.get(url);
  }

  searchLocationDriver(itinerary, day) {
    const url = `${URL_API}/itinerary/1/location?day=2020-04-14`;
    return axios.get(url);
  }
}

export default new ItineraryService();
