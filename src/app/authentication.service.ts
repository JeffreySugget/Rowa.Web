import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post<any>('http://localhost:54551/api/user/loginuser', user)
        .map(user => {
          if (user && user.Token) {            
            localStorage.setItem('currentUser', JSON.stringify(user));
            localStorage.setItem('token', JSON.stringify(user.Token));
          }

          return user;
        });
  }

}
