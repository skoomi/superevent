import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  succesfullLoginAlert = false;
  private loginAlert = new Subject<boolean>();

  isUserLoggedIn() {
    let user = sessionStorage.getItem('user');
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('user');
  }

  constructor(private http: HttpClient, private router: Router) {
  }

  authenticate(credentials, callback) {
    this.succesfullLoginAlert = true;
    this.loginAlert.next(this.succesfullLoginAlert);
    const headers = new HttpHeaders(credentials ? {
        authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('http://localhost:8080/login', {headers: headers}).subscribe(response => {
        if (response['name']) {
            sessionStorage.setItem('user', response['name']);
            sessionStorage.setItem('role', response['authorities']);
            // this.authenticated = true;
        } else {
            // this.authenticated = false;
        }
        return callback && callback();
    });
  }

  getLoginAlert(): Observable<boolean>{
    return this.loginAlert.asObservable();
  }
}
