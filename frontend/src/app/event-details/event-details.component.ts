import { Component, OnInit, Input } from '@angular/core';
import { MyEvent } from '../model/myevent';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() event: MyEvent;
}
