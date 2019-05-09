import { Component, OnInit, Inject } from '@angular/core';
import { MyUser } from '../model/myuser';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from '../services/user.service';
import { Role } from '../model/role';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.css']
})
export class EditUserDialogComponent implements OnInit {

  selectedUser:string;
  roles: Role[] = [];

  user = true;
  employee = false;
  admin = false;

  constructor(public dialogRef: MatDialogRef<EditUserDialogComponent>,
              private userService: UserService,
              @Inject(MAT_DIALOG_DATA) public editUser: any) {
                
                this.selectedUser = editUser.userName;
                editUser.roles.forEach(element => {
                  if (element.roleName === 'ROLE_EMPLOYEE') {this.employee = true; }
                  if (element.roleName === 'ROLE_ADMIN') {this.admin = true; }
                  if (element.roleName === 'ROLE_USER') {this.user = true; }
                });
              }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateUser() {
    if ( this.user ) {this.roles.push({roleName: 'ROLE_USER'});}
    if ( this.employee ) { this.roles.push({roleName: 'ROLE_EMPLOYEE'}); }
    if ( this.admin ) { this.roles.push({roleName: 'ROLE_ADMIN'}); }
    this.editUser.roles = this.roles;
    this.userService.updateUser(this.selectedUser, this.editUser).subscribe();
  }
}
