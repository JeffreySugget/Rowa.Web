import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Riders of Western Australia';
  message = 'Please sign in to continue';

  login() {
    this.title = 'logged in!';
  }

  signUp() {
    this.title = 'signUp button clicked!';
  }

  forgotPassword() {
    this.title = 'forgotPassword button clicked!';
  }
}
