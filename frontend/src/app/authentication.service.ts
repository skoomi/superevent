import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loginAlert = new Subject<boolean>();
  private logoutAlert = new Subject<boolean>();

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('role');
    sessionStorage.removeItem('basicauth');
  }

  constructor(private http: HttpClient, private router: Router) {
  }

  authenticate(credentials, callback) {

    const headers = new HttpHeaders(credentials ? {
        authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('http://localhost:8080/login', {headers: headers}).subscribe(response => {
        if (response['name']) {
            let authString = 'Basic ' + btoa(credentials.username + ':' + credentials.password);
            sessionStorage.setItem('basicauth', authString);
            sessionStorage.setItem('username', response['name']);
            sessionStorage.setItem('role', response['authorities']);

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
}
