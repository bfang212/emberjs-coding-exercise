import EmberRouter from '@ember/routing/router';
import config from 'coding-exercise/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login');
  this.route('not-found', { path: '/*path' });
  this.route('request', function () {
    this.route('service');
    this.route('location');
  });
});
