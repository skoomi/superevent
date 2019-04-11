import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  credentials = {username: '', password: ''};

  constructor(private loginService: LoginService, private http: HttpClient, private router: Router) {
  }

  login() {
    this.loginService.authenticate(this.credentials, () => {
        this.router.navigateByUrl('/');
    });
    return false;
  }

}
