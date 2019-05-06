import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { MyEvent } from '../model/myevent';
import { HttpClient } from '@angular/common/http';
import { MyUser } from '../model/myuser';
import { UserService } from '../services/user.service';
import { Roles } from '../model/roles.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: MyUser = {userName: 'user', password: 'user', roles: [Roles.USER]};
  emp: MyUser = {userName: 'emp', password: 'emp', roles: [Roles.USER, Roles.EMPLOYEE]};
  admin: MyUser = {userName: 'admin', password: 'admin', roles: [Roles.USER, Roles.EMPLOYEE, Roles.ADMIN]};
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  public createTestAccounts() {
    this.userService.addUser(this.user).subscribe();
    this.userService.addUser(this.emp).subscribe();
    this.userService.addUser(this.admin).subscribe();
  }

}
