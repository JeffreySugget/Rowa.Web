import { Component, OnInit } from '@angular/core';
import { MembersService } from '../members.service';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private membersService: MembersService,
              private commonService: CommonService) { }

  members: string[];

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
    
  }

}
