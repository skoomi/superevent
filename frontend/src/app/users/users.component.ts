import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { MyUser } from '../model/myuser';
import { Roles } from '../model/roles.enum';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  newUser: MyUser = {userName: 'zxc', password: 'zxc', roles: [Roles.USER, Roles.EMPLOYEE]};
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  public addUser() {
    this.userService.addUser(this.newUser).subscribe();
  }

}
