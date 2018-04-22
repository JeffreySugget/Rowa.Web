import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: User;

  constructor(private userService: UserService, 
    private router: Router, 
    private alertService: AlertService, 
    private commonService: CommonService) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    if (localStorage.getItem('token') === null) {
      this.router.navigate(['/login']);
    }
  }

  test() {
    this.userService.testAuth().subscribe(data => {

    },
    error => {
      this.commonService.processHttpError(error);
    });
  }
}
