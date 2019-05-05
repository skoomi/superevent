import { MatDialogRef } from '@angular/material';
import { OnInit, Component } from '@angular/core';
import { MyEvent } from './../model/myevent';
import { EventsSerivce } from '../services/events.service';

@Component({
  selector: 'app-new-event-dialog',
  templateUrl: './new-event-dialog.component.html',
  styleUrls: ['./new-event-dialog.component.css']
})
export class NewEventDialogComponent implements OnInit {

  newEvent: MyEvent = {};

  constructor(public dialogRef: MatDialogRef<NewEventDialogComponent>, private eventsService: EventsSerivce) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addEvent() {
    this.eventsService.addEvent(this.newEvent).subscribe();
  }
}
