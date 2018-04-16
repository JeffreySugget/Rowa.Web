import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentPage: string;

  constructor(private router: Router) { 
    router.events.subscribe((val) => {
      this.currentPage = val['url']
    });
  }

  ngOnInit() {
  }

}
