import { Component, OnInit } from '@angular/core';
import { MembersService } from '../members.service';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private membersService: MembersService,
            private commonService: CommonService,
            private router: Router) { }

  members: any[];

  ngOnInit() {
    this.getCurrentMembers();
  }

  getCurrentMembers() {
    this.membersService.getMembers().subscribe(data => {
      this.members = data;
    },
    error => {
      this.commonService.processHttpError(error);
    })
  }

  profileNameClicked(name:string) {
    this.router.navigate(['/profile', name]);
  }

}
