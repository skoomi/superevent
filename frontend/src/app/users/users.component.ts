import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { MyUser } from '../model/myuser';
import { MatDialog } from '@angular/material';
import { NewUserDialogComponent } from '../new-user-dialog/new-user-dialog.component';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // users: MyUser[] = [{userName:'asd',password:'fgh',roles:[{roleName:'r1'},{roleName:'r2'}],events:[{name:'ev1'},{name:'ev2'}]}];
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

  public editUser(user: MyUser) {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      width: '400px',
       data: {userName: user.userName, password: user.password, roles: user.roles, events: user.events}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  public deleteUser(user: MyUser) {
    this.userService.deleteUser(user.userName).subscribe();
  }

}
