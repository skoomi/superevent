import { Component, OnInit } from '@angular/core';
import { MyEvent } from '../model/myevent';
import { HttpClient } from '@angular/common/http';
import { EventsSerivce } from '../services/events.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { Roles } from '../model/roles.enum';
import { MatDialog } from '@angular/material';
import { NewEventDialogComponent } from '../new-event-dialog/new-event-dialog.component';
import { EditEventDialogComponent } from '../edit-event-dialog/edit-event-dialog.component';



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
              public auth: AuthenticationService,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.eventsService.getEvents().subscribe((response) => {
      this.events = response; });
  }

  public showWhenLoggedAs(role: Roles) {
    return this.auth.userHasRole(role);
  }

  isFull(): boolean{
    return true;
  }

  signIn() {
    if (this.auth.isUserLoggedIn()) {
      //sign
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
