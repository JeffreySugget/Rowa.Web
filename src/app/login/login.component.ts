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
  }

  model: any = {};

  login() {
    var user = new User();
    user.userName = this.model.username;
    user.password = this.model.password;

    this.authenticationService.login(user).subscribe(data => {
      this.router.navigate(['/home']);
    },
    error => {

    });
  }

}
