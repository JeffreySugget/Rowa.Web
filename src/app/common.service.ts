import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../app/alert.service'
import { debug } from 'util';

@Injectable()
export class CommonService {

  constructor(private router: Router, private alertService: AlertService) { }

  processHttpError(error: any) {
    if (error.status === 401) {
      this.expireSession();
    } else {
      this.alertService.errorKeep(error.message);
    }
  }

  checkToken() {
    var token = JSON.parse(localStorage.getItem('token'));
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');

    var decoded = JSON.parse(atob(base64));
    var ms = (new Date).getTime();

    debugger;
    if (ms < decoded.exp) {
      this.expireSession();
    }
  }

  expireSession() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.alertService.errorKeep('Session Expired please log in again');
    this.router.navigate(['/login']);
  }
}
