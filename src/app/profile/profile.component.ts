import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { CommonService } from '../common.service';
import { AlertService } from '../alert.service';
import { debug } from 'util';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any = JSON.parse(localStorage.getItem('currentUser'));

  constructor(private userService: UserService,
              private commonService: CommonService,
              private alertService: AlertService) { }

  ngOnInit() {
    this.getProfilePic();
  }

  picToUpload: File = null;
  profilePicSource: any;

  updateProfilePic(files: FileList) {
    this.picToUpload = files.item(0);

    this.userService.updateProfilePicture(this.picToUpload).subscribe(data => {
      this.getProfilePic();
    },
    error => {
      this.commonService.processHttpError(error);
    });
  }

  getProfilePic() {
    this.userService.getProfilePicture().subscribe(data => {
      if (data === null) {
        this.profilePicSource = '/assets/images/blank-profile.jpeg';
        return;
      }
      
      let reader = new FileReader();
      reader.addEventListener("load", () => {
        this.profilePicSource = reader.result;

      }, false);

      reader.readAsDataURL(data);
    },
    error => {
      this.commonService.processHttpError(error);
    })
  }
}
