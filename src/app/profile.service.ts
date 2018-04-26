import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Userprofile } from './userprofile';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient) { }

  updateProfilePicture(picToUpload: File) {
    const formData: FormData = new FormData();
    formData.append('profilePic', picToUpload, picToUpload.name);

    return this.http.post<any>('http://localhost:54551/api/profile/updateprofilepic', formData);
  }

  getProfilePicture(): Observable<Blob> {
    return this.http.get('http://localhost:54551/api/profile/getprofilepic', { responseType: "blob" });
  }

  getUserProfile() {
    return this.http.get<Userprofile>('http://localhost:54551/api/profile/getuserprofile');
  }
}