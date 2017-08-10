import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.get(1)
      .subscribe(user => this.user = user);
  }

}
