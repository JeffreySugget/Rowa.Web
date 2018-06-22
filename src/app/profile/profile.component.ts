import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { ProfileService } from '../profile.service';
import { CommonService } from '../common.service';
import { AlertService } from '../alert.service';
import { User } from '../user';
import { debug } from 'util';
import { Userprofile } from '../userprofile';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: User = JSON.parse(localStorage.getItem('currentUser'));
  model: Userprofile = new Userprofile();
  changing: boolean = false;
  userName: any;

  constructor(private userService: UserService,
              private commonService: CommonService,
              private alertService: AlertService,
              private profileService: ProfileService,
              private route: ActivatedRoute) {
                this.route.params.subscribe(params => this.userName = params);
               }

  ngOnInit() {
    this.getuserProfile();
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

  getuserProfile() {
    this.profileService.getUserProfile().subscribe(data => {
      this.model = data;
    },
    error => {
      this.commonService.processHttpError(error);
    });
  }

  getProfilePic() {
    this.profileService.getProfilePicture().subscribe(data => {
      if (data.size === 0) {
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
    this.profileService.updateUserProfile(this.model).subscribe(data => {
      this.getuserProfile();
      this.alertService.success('Updated profile');
      this.changing = false;
    },
    error => {
      this.commonService.processHttpError(error);
    });
  }

  cancel() {
    this.changing = false;
  }
}
