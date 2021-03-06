import { Component, OnInit } from '@angular/core';
import { MyEvent } from '../model/myevent';
import { HttpClient } from '@angular/common/http';
import { EventsSerivce } from '../services/events.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NewEventDialogComponent } from '../new-event-dialog/new-event-dialog.component';
import { EditEventDialogComponent } from '../edit-event-dialog/edit-event-dialog.component';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {

  selectedEvent: MyEvent;
  detailedView: boolean;

  events: MyEvent[];

  constructor(private http: HttpClient,
              private eventsService: EventsSerivce,
              private userService: UserService,
              public auth: AuthenticationService,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.eventsService.getEvents().subscribe((response) => {
      this.events = response; });
  }

  public showWhenLoggedAs(role: string) {
    return this.auth.userHasRole(role);
  }

  isFull(event: MyEvent): boolean{
    let isFull = false;
    if (event.users.length >= event.seats) {
      isFull = true;
    }
    return isFull;
  }

  isActualUserSigned(event: MyEvent) {

  }

  signIn() {
    if (this.auth.isUserLoggedIn()) {
      var loggedUserName = this.auth.getLoggedUserUserName();
      this.userService.getUser(loggedUserName).subscribe( result => {
        var loggedUser = result;
        loggedUser.events.push(this.selectedEvent);
        this.userService.updateUser(loggedUserName, loggedUser).subscribe();
      });

    } else {
      this.router.navigateByUrl('/login')
    }
  }

  public createEvent() {
    const dialogRef = this.dialog.open(NewEventDialogComponent, {
      width: '900px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  public editEvent(event: MyEvent) {
    const dialogRef = this.dialog.open(EditEventDialogComponent, {
      width: '900px',
       data: {id: event.id, name: event.name, price: event.price, description: event.description,
        shortDescription: event.shortDescription, lessons: event.lessons, timetable: event.timetable, imgPath: event.imgPath}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  public deleteEvent(event: MyEvent) {
    this.eventsService.deleteEvent(event.id);
  }

  showDetails(event: MyEvent) {
    this.selectedEvent = event;
    this.detailedView = true;
  }
  showList() {
    this.selectedEvent = null;
    this.detailedView = false;
  }


}
