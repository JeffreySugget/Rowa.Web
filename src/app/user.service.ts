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

/*   addUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:54551/api/user', user, httpOptions);
  }  */

  addUser(user: User) {
    return this.http.post('http://localhost:54551/api/user', user);
  }
}
