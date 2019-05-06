import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { MyUser } from '../model/myuser';
import { Roles } from '../model/roles.enum';
import { MatDialog } from '@angular/material';
import { NewUserDialogComponent } from '../new-user-dialog/new-user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: MyUser[];
  constructor(private userService: UserService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((response) => {
      this.users = response; });
  }

  public createUser() {
    const dialogRef = this.dialog.open(NewUserDialogComponent, {
      width: '400px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  public deleteUser(user: MyUser) {
    this.userService.deleteEvent(user.id);
  }

}
