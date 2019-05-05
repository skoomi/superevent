import { Component, OnInit } from '@angular/core';
import { MyEvent } from '../model/myevent';
import { HttpClient } from '@angular/common/http';
import { EventsSerivce } from '../services/events.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { Roles } from '../model/roles.enum';
import { MatDialog } from '@angular/material';
import { NewEventDialogComponent } from '../new-event-dialog/new-event-dialog.component';



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  employeeRole = Roles.EMPLOYEE;
  userRole = Roles.USER;

  selectedEvent: MyEvent;
  detailedView: boolean;

  events: MyEvent[];

  constructor(private http: HttpClient,
              private eventsService: EventsSerivce,
              private authenticationService: AuthenticationService,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.eventsService.getEvents().subscribe((response) => {
      this.events = response; });
  }

  public showSignInButton() {
    return this.authenticationService.hasRole(Roles.USER) && this.detailedView;
  }
  public showWhenLoggedAs(role: Roles) {
    return this.authenticationService.hasRole(role);
  }
  public showCreateEventButton() {
    return this.authenticationService.hasRole(Roles.EMPLOYEE);
  }
  public showEditButton() {
    return this.authenticationService.hasRole(Roles.EMPLOYEE)
  }
  public showDeleteButton() {
    return this.authenticationService.hasRole(Roles.EMPLOYEE)
  }

  isFull(): boolean{
    return true;
  }

  signIn() {
    if (this.authenticationService.isUserLoggedIn()) {
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

  showDetails(event: MyEvent) {
    this.selectedEvent = event;
    this.detailedView = true;
  }
  showList() {
    this.selectedEvent = null;
    this.detailedView = false;
  }

  public editEvent(event: MyEvent) {

  }

  public deleteEvent(event: MyEvent) {
    this.eventsService.deleteEvent(event.id);
  }
}
