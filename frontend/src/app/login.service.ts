import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authenticated = false;

  constructor(private http: HttpClient, private router: Router) {
  }

  authenticate(credentials, callback) {

        const headers = new HttpHeaders(credentials ? {
            authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        } : {});

        this.http.get('http://localhost:8080/login', {headers: headers}).subscribe(response => {
          console.log(response['authorities']);
            if (response['name']) {
                this.authenticated = true;
            } else {
                this.authenticated = false;
            }
            return callback && callback();
        });

    }
    test() {
      this.http.get<String>('http://localhost:8080/home/ho').subscribe(() => {
        console.log("asd"); });
      }
}
