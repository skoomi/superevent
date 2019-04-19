import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isUserLoggedIn() {
    let user = sessionStorage.getItem('user');
    console.log(!(user === null));
    return !(user === null);
  }
  logOut() {
    sessionStorage.removeItem('user');
  }

  constructor(private http: HttpClient, private router: Router) {
  }

  authenticate(credentials, callback) {
    console.log('authenticate: ');
    console.log(credentials);

        const headers = new HttpHeaders(credentials ? {
            authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        } : {});

        this.http.get('http://localhost:8080/login', {headers: headers}).subscribe(response => {
          console.log(response);
          console.log(response['authorities']);
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
    test() {
      this.http.get<String>('http://localhost:8080/home/ho').subscribe(() => {
        console.log('asd'); });
      }
}
