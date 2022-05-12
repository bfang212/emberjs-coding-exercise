import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class AppointmentInfoService extends Service {
  @tracked appointment = {
    service: { id: '5' },
    location: {},
    schedule: {},
    userInfo: {},
  };

  setAppointmentService(service) {
    console.log(service);
    this.appointment = {
      ...this.appointment,
      service,
    };
  }

  setAppointmentLocation(location) {
    this.appointment = {
      ...this.appointment,
      location,
    };
  }
}
