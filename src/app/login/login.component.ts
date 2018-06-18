import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('token') !== null) {
      this.router.navigate(['home']);
    }
  }

  model: any = {};

  login() {
    var user = new User();
    user.emailAddress = this.model.emailAddress;
    user.password = this.model.password;

    this.authenticationService.login(user).subscribe(data => {
      this.router.navigate(['/home']);
    },
    error => {

    });
  }

}
