import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { ProfileService } from '../profile.service';
import { CommonService } from '../common.service';
import { AlertService } from '../alert.service';
import { User } from '../user';
import { debug } from 'util';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: User = JSON.parse(localStorage.getItem('currentUser'));
  model: any = {};
  changing: boolean = false;

  constructor(private userService: UserService,
              private commonService: CommonService,
              private alertService: AlertService,
              private profileService: ProfileService) { }

  ngOnInit() {
    this.getProfilePic();
  }

  picToUpload: File = null;
  profilePicSource: any = '/assets/images/giphy.gif';

  updateProfilePic(files: FileList) {
    this.picToUpload = files.item(0);

    this.profileService.updateProfilePicture(this.picToUpload).subscribe(data => {
      this.getProfilePic();
    },
    error => {
      this.commonService.processHttpError(error);
    });
  }

  getProfilePic() {
    this.profileService.getProfilePicture().subscribe(data => {
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

  editProfile() {
    this.changing = true;
  }

  updateProfile() {

  }

  cancel() {
    this.changing = false;
  }
}
