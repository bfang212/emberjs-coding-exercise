import Route from '@ember/routing/route';
import fetch from 'fetch';
import { data } from '../../data/services';

const API =
  'https://johnny-appleseed.clientsecure.me/client-portal-api/cpt-codes?filter%5BclinicianId%5D=2';
export default class RequestServiceRoute extends Route {
  async model() {
    try {
      const response = await fetch(API, {
        method: 'GET',
        mode: 'cors',
        headers: {
          Accept: 'application/vnd.api+json',
          'Api-Version': '2020-01-01',
          'Application-Build-Version': '0.0.1',
          'Application-Platform': 'web',
        },
      });
      const data = await response.json();
      const services = data.map((item) => item.attributes);
      return services;
    } catch (err) {
      const services = data.map(({ id, type, attributes }) => ({
        id,
        type,
        ...attributes,
      }));
      return services;
    }
  }
}
