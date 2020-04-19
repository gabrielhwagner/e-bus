import axios from './api';
import { URL_API } from '~/utils';

class ItineraryService {
  searchLocationDriver(itinerary, day) {
    const url = `${URL_API}/itinerary/1/location?day=2020-04-14`;
    return axios.get(url);
  }
}

export default new ItineraryService();
