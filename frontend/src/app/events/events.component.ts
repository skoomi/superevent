import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MyEvent } from '../model/myevent';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {

  events: MyEvent[];
  // = [{id: 0, name: 'Kurs Java SE - Podstawy', price: 1234, startDate: new Date('12-03-2019'),endDate: new Date('12-04-2019'), lessons: 12, timetable: "pn,sr,czw 8:00 - 17:00", description: 'Opis musi byc', shortDescription: 'Krótki opis kursu, informacje ogólne,', imgPath: 'assets/img/java-logo.jpg'},
  // {id: 1, name: 'Kurs Java SE - Zaawansowany', price: 5678, startDate: new Date('06-05-2019'), endDate: new Date('06-07-2019'), lessons: 28, timetable: "pn,sr,czw 8:00 - 17:00", description: 'Opis musi byc', shortDescription: 'Krótki opis kursu drugiego, informacje ogólne,', imgPath: 'https://4.imimg.com/data4/JH/GT/GLADMIN-10326294/wp-content-uploads-2015-11-advance-java-affy-250x250.jpg'}];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log("ngOnInit events");
    this.http.get<Array<MyEvent>>('http://localhost:4200/api/events').subscribe((response) => {
      this.events = response;});
  }

  isFull(): boolean{
    return true;
  }

  addMyEvent(newMyEvent: MyEvent) {
    this.http.post<MyEvent>('http://localhost:4200/api/events', newMyEvent).subscribe();
  }



  addTestEvents() {this.http.post<MyEvent>('http://localhost:4200/api/events/secret',"asd").subscribe();

  }
}
