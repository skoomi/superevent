import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsSerivce {

  constructor(private http: HttpClient) { }


  public deleteEvent(id: number) {

    this.http.delete(`http://localhost:4200/api/events/${id}`).subscribe();
  }
}
