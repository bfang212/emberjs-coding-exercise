import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AppointmentCardComponent extends Component {
  @tracked isLaptop = false;

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
}
