import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../app/user';
import 'rxjs/add/operator/map'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json;' })
};

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  addUser(user: User) {
    return this.http.post('http://localhost:54551/api/user', user);
  }

  checkUser(userName: string, email: string) {
    return this.http.get<boolean>('http://localhost:54551/api/user', {
      params: {
        userName: userName,
        emailAddress: email
      }
    });
  }

  resetPassword(userName: string, password: string) {
    return this.http.get('http://localhost:54551/api/user', {
      params: {
        userName: userName,
        password: password
      }
    })
  }
}
