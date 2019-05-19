import { Component, OnInit } from '@angular/core';
import { MyUser } from '../model/myuser';
import { MatDialogRef } from '@angular/material';
import { UserService } from '../services/user.service';
import { Role } from '../model/role';

@Component({
  selector: 'app-new-user-dialog',
  templateUrl: './new-user-dialog.component.html',
  styleUrls: ['./new-user-dialog.component.css']
})
export class NewUserDialogComponent implements OnInit {

  newUser: MyUser = {};
  roles: Role[] = [];

  user = true;
  employee = false;
  admin = false;
  constructor(public dialogRef: MatDialogRef<NewUserDialogComponent>, private userService: UserService) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addEvent() {
    this.roles.push({roleName: 'ROLE_USER'});
    if ( this.employee ) { this.roles.push({roleName: 'ROLE_EMPLOYEE'}); }
    if ( this.admin ) { this.roles.push({roleName: 'ROLE_ADMIN'}); }
    this.newUser.roles = this.roles;
    this.newUser.events = [];
    this.userService.addUser(this.newUser).subscribe();
  }
}
