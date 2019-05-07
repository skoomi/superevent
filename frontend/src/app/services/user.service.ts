import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyUser } from '../model/myuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers() {
    return this.http.get<Array<MyUser>>(`http://localhost:4200/api/users`);
  }
  public addUser(user: MyUser) {
    return this.http.post<MyUser>(`http://localhost:4200/api/users`, user);
  }
  public deleteEvent(id: number) {
    this.http.delete(`http://localhost:4200/api/users/${id}`).subscribe();
  }
}