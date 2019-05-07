import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthenticationService, private http: HttpClient, private router: Router) {
    console.log(auth.adminRole);
    // this.loginService.authenticate(undefined, undefined);
  }
  logout() {
    this.auth.logOut();
    this.router.navigate(['/home']);
    this.auth.setLogoutAlert();
  }

  ngOnInit() {
  }

}
