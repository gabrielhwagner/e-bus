import axios from './api';

class ItineraryService {
  searchLocationDriver(itinerary, day) {
    const url =
      'https://ebus-backend.herokuapp.com/itinerary/1/location?day=2020-04-14';
    return axios.get(url);
  }
}

export default new ItineraryService();
