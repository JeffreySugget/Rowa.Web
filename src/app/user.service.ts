import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../app/user';
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  addUser(user: User) {
    return this.http.post('http://localhost:54551/api/user/createuser', user);
  }

  checkUser(user: User) {
    return this.http.post<boolean>('http://localhost:54551/api/user/checkuser', user);
  }

  resetPassword(user: User) {
    return this.http.post('http://localhost:54551/api/user/resetpassword', user);
  }
}
