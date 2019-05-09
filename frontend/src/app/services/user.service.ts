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
  public getUser(userName: string) {
    return this.http.get<MyUser>(`http://localhost:4200/api/users/${userName}`);
  }
  public addUser(user: MyUser) {
    return this.http.post<MyUser>(`http://localhost:4200/api/users`, user);
  }
  public deleteUser(userName: string) {
    return this.http.delete(`http://localhost:4200/api/users/${userName}`);
  }
  public updateUser(userName: string, user: MyUser) {
    return this.http.put<MyUser>(`http://localhost:4200/api/users/${userName}`, user);
  }
}
