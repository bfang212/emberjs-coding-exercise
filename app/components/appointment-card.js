import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
export default class AppointmentCardComponent extends Component {
  @tracked isLaptop = false;
  @service('appointment-info') info;

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

  @action
  updateService(service) {
    this.info.setAppointmentService(service);
    window.localStorage.setItem('service', JSON.stringify(service));
  }
}
