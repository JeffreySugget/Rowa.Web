import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { AlertService } from '../alert.service';

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
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  user: User = new User();

  register() {
    if (this.checkTextBoxes()) {
      var user = new User();
      user.userName = this.model.userName;
      user.password = this.model.password;
      user.firstName = this.model.firstName;
      user.lastName = this.model.lastName;
      user.emailAddress = this.model.emailAddress;

      this.userService.addUser(user).subscribe(data => {
        this.alertService.createAccountSuccess('Created user account');
        this.router.navigate(['/login']);
      },
      error => {
        this.alertService.error(error);
      });
    }
  }

  cancel(){
    this.router.navigate(['/login']);
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
