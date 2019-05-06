import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyEvent } from '../model/myevent';

@Injectable({
  providedIn: 'root'
})
export class EventsSerivce {

  constructor(private http: HttpClient) { }

  public getEvents() {
   return this.http.get<Array<MyEvent>>(`http://localhost:4200/api/events`);
  }

  public addEvent(event: MyEvent) {
    return this.http.post<MyEvent>(`http://localhost:4200/api/events`, event);
  }

  public updateEvent(event: MyEvent) {
    return this.http.put<MyEvent>(`http://localhost:4200/api/events/${event.id}`, event);
  }

  public deleteEvent(id: number) {
    this.http.delete(`http://localhost:4200/api/events/${id}`).subscribe();
  }
}
