import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { MyEvent } from '../model/myevent';
import { HttpClient } from '@angular/common/http';
import { MyUser } from '../model/myuser';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: MyUser = {userName: 'user', password: 'user', roles: [{roleName: 'Role_USER'}]};
  emp: MyUser = {userName: 'emp', password: 'emp', roles: [{roleName: 'Role_USER'}, {roleName: 'Role_EMPLOYEE'}]};
  admin: MyUser = {userName: 'admin', password: 'admin', roles: [{roleName: 'Role_USER'}, {roleName: 'Role_EMPLOYEE'}, {roleName: 'Role_AMIN'}]};
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  public createTestAccounts() {
    this.userService.addUser(this.user).subscribe();
    this.userService.addUser(this.emp).subscribe();
    this.userService.addUser(this.admin).subscribe();
  }

}
