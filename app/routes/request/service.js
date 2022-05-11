import Route from '@ember/routing/route';
import { data } from '../../data/services';

export default class RequestServiceRoute extends Route {
  model() {
    const services = data.map((item) => item.attributes);
    return services;
  }
}
