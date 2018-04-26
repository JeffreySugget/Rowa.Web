import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentPage: string;
  currentUser: User;

  constructor(private router: Router) { 
    router.events.subscribe((val) => {
      this.currentPage = val['url']
    });
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  signOut() {
    debugger;
    var temp = 0;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
  }

}
