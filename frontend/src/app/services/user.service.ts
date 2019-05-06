import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyUser } from '../model/myuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public addUser(user: MyUser) {
    return this.http.post<MyUser>(`http://localhost:4200/api/users`, user);
  }

}
