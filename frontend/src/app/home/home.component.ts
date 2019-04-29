import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { MyEvent } from '../model/myevent';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(private http: HttpClient) {}
  addMyEvent(newMyEvent: MyEvent) {
    this.http.post<MyEvent>('http://localhost:4200/api/events', newMyEvent).subscribe();
  }
  addEvents() {
    let eventToAdd = {id: 0, name: 'Kurs Java SE - Podstawy', price: 1234, lessons: 12, timetable: "pn,sr,czw 8:00 - 17:00", description: 'Opis musi byc', shortDescription: 'Krótki opis kursu, informacje ogólne,', imgPath: 'assets/img/java-logo.jpg'};
    this.addMyEvent(eventToAdd);
  }
}
