import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationServiceService {

  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post<any>('http://localhost:54551/api/user/loginuser', user);
  }

}
