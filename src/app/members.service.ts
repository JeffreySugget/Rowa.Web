import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MembersService {

  constructor(private http: HttpClient) { }

  getMembers(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:54551/api/members/getmembers');
  }
}
