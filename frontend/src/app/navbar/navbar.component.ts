import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loginService: LoginService, private http: HttpClient, private router: Router) {
    // this.loginService.authenticate(undefined, undefined);
  }
  logout() {
    this.http.post('logout', {}).pipe(finalize(() => {
        this.loginService.authenticated = false;
        this.router.navigateByUrl('/login');
    })).subscribe();
  }

  ngOnInit() {
  }

}
