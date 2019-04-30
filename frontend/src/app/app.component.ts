import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private loggedInAlert = false;
  private loggedOutAlert = false;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: NavigationStart) => {
      this.loggedOutAlert = false;
      this.loggedInAlert = false;
    });
   }

  ngOnInit() {
    this.authenticationService.getLoginAlert().subscribe(showAlert => {
      this.loggedInAlert = showAlert;
      });
    this.authenticationService.getLogoutAlert().subscribe(showAlert => {
      this.loggedOutAlert = showAlert;
      });
  }

  public showLoggedInAlert() {
    return this.loggedInAlert;
  }
  public showLoggedOutAlert() {
    return this.loggedOutAlert;
  }
}
