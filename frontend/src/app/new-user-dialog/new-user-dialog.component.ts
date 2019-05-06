import { Component, OnInit } from '@angular/core';
import { MyUser } from '../model/myuser';
import { MatDialogRef } from '@angular/material';
import { UserService } from '../services/user.service';
import { Roles } from '../model/roles.enum';

@Component({
  selector: 'app-new-user-dialog',
  templateUrl: './new-user-dialog.component.html',
  styleUrls: ['./new-user-dialog.component.css']
})
export class NewUserDialogComponent implements OnInit {

  newUser: MyUser = {};
  rolesString: string;
  constructor(public dialogRef: MatDialogRef<NewUserDialogComponent>, private userService: UserService) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addEvent() {
    console.log(this.newUser);
    console.log(this.rolesString);
    this.newUser.roles[0] = Roles[this.rolesString];
    // this.userService.addUser(this.newUser).subscribe();
  }
}
