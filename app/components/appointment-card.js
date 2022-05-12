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
      console.log(this.isLaptop);
    } else {
      this.isLaptop = false;
      console.log(this.isLaptop);
    }
  }

  @action
  addEventListener() {
    this.resizeWindow();
    window.addEventListener('resize', this.resizeWindow);
  }

  @action
  updateService(service) {
    this.appointment.setAppointmentService(service);
  }
}
