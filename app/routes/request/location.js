import Route from '@ember/routing/route';

export default class RequestLocationRoute extends Route {
  model() {
    const currentService = window.localStorage.getItem('service');
    window.localStorage.removeItem('service');
    return JSON.parse(currentService);
  }
}
