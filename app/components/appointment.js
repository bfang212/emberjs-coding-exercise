import Component from '@glimmer/component';
import { data } from '../data/services';
import { action } from '@ember/object';
import { data as locationData } from '../data/location-1';
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
    return data.map(({ id, type, attributes }) => ({
      id,
      type,
      ...attributes,
    }));
  }

  get locations() {
    return locationData.map(({ id, type, attributes }) => ({
      id,
      type,
      ...attributes,
    }));
  }

  @action
  setAppointmentService(service) {
    this.appointment = {
      ...this.appointment,
      service,
    };
  }

  @action
  setAppointmentLocation(location) {
    this.appointment = {
      ...this.appointment,
      location,
    };
  }
}
