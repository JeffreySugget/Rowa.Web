import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../app/alert.service'

@Injectable()
export class CommonService {

  constructor(private router: Router, private alertService: AlertService) { }

  processHttpError(error: any) {
    if (error.status === 401) {
      debugger
      localStorage.removeItem('currentUser');
      localStorage.removeItem('token');
      this.alertService.errorKeep('Session Expired please log in again');
      this.router.navigate(['/login']);
    } else {
      this.alertService.errorKeep(error.message);
    }
  }
}
