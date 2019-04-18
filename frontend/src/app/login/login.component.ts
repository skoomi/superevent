import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';


@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  credentials = {username: '', password: ''};

  constructor(private authenticationService: AuthenticationService, private http: HttpClient, private router: Router) {
  }

  login() {
    console.log(this.credentials);
    this.authenticationService.authenticate(this.credentials, () => {
        this.router.navigateByUrl('/');
    });
    return false;
  }
  but() {
    this.authenticationService.test();
  }
}
