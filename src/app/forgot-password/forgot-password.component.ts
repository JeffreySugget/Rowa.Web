import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { User } from '../user';
import { AlertService } from '../alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  constructor(private userService: UserService,
              private alertService: AlertService,
              private router: Router) { }

  ngOnInit() {
  }

  model: any = {};
  userExists: boolean;
  userNameValid = false;
  emailAddressValid = false;
  newPasswordValid = false;
  confirmPasswordValid = false;

  checkUser() {
    if (this.checkUserTextBoxes()) {
      this.userService.checkUser(this.model.userName, this.model.emailAddress).subscribe(data => {
        if (data) {
          this.userExists = true;
        } else {
          this.userExists = false;
        }
      },
      error => {
        this.alertService.error(error);
      });
    }
  }

  resetPassword() {
    if (this.checkPasswordTextBoxes()) {
      this.userService.resetPassword(this.model.userName, this.model.password).subscribe(data => {
        this.alertService.successKeep('Reset password for ' + this.model.userName);
        this.router.navigate[('/login')];
      },
      error => {
        this.alertService.error(error);
      });
    }
  }

  cancel() {
    this.router.navigate(['/login'])
  }

  checkUserTextBoxes(): boolean {
    var returnVal = true;

    if (this.model.userName != undefined) {
      this.userNameValid = true;
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

  checkPasswordTextBoxes(): boolean {
    var returnVal = true;

    if (this.model.newPassword) {
      this.newPasswordValid = true;
    } else {
      returnVal = false;
    }

    if (this.model.password) {
      this.confirmPasswordValid = true;
    } else {
      returnVal = false;
    }

    return returnVal;
  }
}
