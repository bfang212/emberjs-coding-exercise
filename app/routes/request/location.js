import Route from '@ember/routing/route';

export default class RequestLocationRoute extends Route {
  model() {
    const currentService = window.localStorage.getItem('service');
    return JSON.parse(currentService);
  }
}
