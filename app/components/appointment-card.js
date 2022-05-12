import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
export default class AppointmentCardComponent extends Component {
  @tracked isLaptop = false;
  @service('appointment-info') appointment;

  @action
  resizeWindow() {
    if (window.innerWidth >= 1000) {
      this.isLaptop = true;
    } else {
      this.isLaptop = false;
    }
  }

  @action
  addEventListener() {
    this.resizeWindow();
    window.addEventListener('resize', this.resizeWindow);
  }

  // @action
  // updateService(service) {
  //   // depending on the use case, we can use global or localStorage
  //   // to preserve state as we switch page
  //   this.appointment.setAppointmentService(service);
  //   window.localStorage.setItem('service', JSON.stringify(service));
  // }
}
