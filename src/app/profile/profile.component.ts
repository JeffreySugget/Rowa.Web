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

  constructor(private userService: UserService,
              private commonService: CommonService,
              private alertService: AlertService) { }

  ngOnInit() {
  }

  picToUpload: File = null;

  updateProfilePic(files: FileList) {
    this.picToUpload = files.item(0);
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.userService.updateProfilePicture(this.picToUpload, currentUser.Username).subscribe(data => {
      
    },
    error => {
      this.commonService.processHttpError(error);
    });
  }

}
