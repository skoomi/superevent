import { Component, OnInit, Inject } from '@angular/core';
import { EventsSerivce } from '../services/events.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MyEvent } from '../model/myevent';

@Component({
  selector: 'app-edit-event-dialog',
  templateUrl: './edit-event-dialog.component.html',
  styleUrls: ['./edit-event-dialog.component.css']
})
export class EditEventDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditEventDialogComponent>,
              private eventsService: EventsSerivce,
              @Inject(MAT_DIALOG_DATA) public event: any) {
                // this.myname = this.myEvent.name;
              }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editEvent() {
    this.eventsService.updateEvent(this.event).subscribe();
  }

}
