import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private http: HttpClient, private router: Router) {
    // this.loginService.authenticate(undefined, undefined);
  }
  logout() {
    console.log("logout test");
    this.authenticationService.logOut();
    // this.http.post('logout', {}).pipe(finalize(() => {
    //     // this.authenticationService.authenticated = false;
    //     this.router.navigateByUrl('/login');
    // })).subscribe();
  }

  ngOnInit() {
  }

}
