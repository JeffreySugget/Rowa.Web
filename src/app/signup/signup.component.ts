import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model: any = {};
  loading = false;
  userNameValid = false;
  passwordValid = false;
  firstNameValid = false;
  lastNameValid = false;
  emailAddressValid = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  register() {
    if (this.checkTextBoxes()) {

    }
  }
  
  checkTextBoxes(): boolean {
    var returnVal = true;

    if (this.model.userName != undefined) {
      //TODO: Check if username exists
      this.userNameValid = true;
    } else {
      returnVal = false;
    }

    if (this.model.password != undefined) {
      this.passwordValid = true;
    } else {
      returnVal = false;
    }

    if (this.model.firstName != undefined) {
      this.firstNameValid = true;
    } else {
      returnVal = false;
    }

    if (this.model.lastName != undefined) {
      this.lastNameValid = true;
    } else {
      returnVal = false;
    }

    if (this.model.emailAddress != undefined) {
      this.emailAddressValid = true;
    } else {
      returnVal = false;
    }

    return returnVal;
  }
}
