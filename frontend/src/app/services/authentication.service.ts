import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs';
import { Roles } from '../model/roles.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router) {
  }

  private loginAlert = new Subject<boolean>();
  private logoutAlert = new Subject<boolean>();
  private userLoggedIn = new Subject<boolean>();

  hasRole(role: Roles) {
    let roles = sessionStorage.getItem('roles');
    if (roles !== null) {
      return sessionStorage.getItem('roles').includes(role);
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logOut() {
    this.http.post('http://localhost:4200/api/logout', {}).subscribe( res => {
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('roles');
      sessionStorage.removeItem('basicauth');
    });
  }



  authenticate(credentials, callback) {
  console.log("authenticate");
    const headers = new HttpHeaders(credentials ? {
        authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('http://localhost:4200/api/login', {headers: headers}).subscribe(response => {
        if (response['name']) {
            let authString = 'Basic ' + btoa(credentials.username + ':' + credentials.password);
            sessionStorage.setItem('basicauth', authString);
            sessionStorage.setItem('username', response['name']);
            sessionStorage.setItem('roles', JSON.stringify(response['authorities']));
            this.setLoginAlert();

        } else {
            // this.authenticated = false;
        }
        return callback && callback();
    });
  }

  getLoginAlert(): Observable<boolean> {
    return this.loginAlert.asObservable();
  }

  getLogoutAlert(): Observable<boolean> {
    return this.logoutAlert.asObservable();
  }

  setLoginAlert() {
    this.loginAlert.next(true);
  }

  setLogoutAlert() {
    this.logoutAlert.next(true);
  }

  setUserLoggedIn() {
    this.userLoggedIn.next(true);
  }

  getUserLoggedIn() {
    return this.userLoggedIn.asObservable();
  }
}
