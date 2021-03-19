import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SignUp';
  hideRegister = "block";
  hideLogin="block";

  toggle() {
    this.hideLogin = "none";
    this.hideRegister = "none";
  }
}
