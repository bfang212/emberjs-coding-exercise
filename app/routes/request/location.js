import Route from '@ember/routing/route';
import { data } from '../../data/location-1';

export default class RequestLocationRoute extends Route {
  model() {
    const location = data.map((item) => item.attributes);
    return location;
  }
}
