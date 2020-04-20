import { observable, action } from 'mobx';

import ItineraryService from '~/services/ItineraryService';
import { getDateNow } from '~/utils';

export class PassengerStore {
  @observable itineraries = [];

  @action
  async searchItineraryService() {
    try {
      const date = getDateNow();
      const { data } = await ItineraryService.searchItineraryPassenger(date);
      this.itineraries = data;
      return;
    } catch (err) {}
  }
}
