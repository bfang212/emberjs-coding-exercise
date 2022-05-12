import Component from '@glimmer/component';
import { data as serviceData } from '../data/services';
import { data as locationData } from '../data/location';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AppointmentComponent extends Component {
  @service('appointment-info') appointment;

  clientBaseUrl = this.args.clientBaseUrl;
  clientId = this.args.clientId;
  clinician = 'Rob Gross, MFT';
  practice = 'The Therapy Center';

  get services() {
    // make the API Request with CLIENT_PORTAL_BASED_URL and CLIENT_ID
    // return services;
    return serviceData.map(({ id, type, attributes }) => ({
      id,
      type,
      ...attributes,
    }));
  }

  get locations() {
    // make the API Request with cptCodeId to get back office data
    return locationData.map(({ id, type, attributes }) => ({
      id,
      type,
      ...attributes,
    }));
  }

  @action
  updateService(service) {
    // depending on the use case, we can use global or localStorage
    // to preserve state as we switch page
    this.appointment.setAppointmentService(service);
    window.localStorage.setItem('service', JSON.stringify(service));
  }

  @action
  updateLocation(location) {
    // depending on the use case, we can use global or localStorage
    // to preserve state as we switch page
    this.appointment.setAppointmentLocation(location);
    window.localStorage.setItem('location', JSON.stringify(location));
    console.log(location);
  }
}
