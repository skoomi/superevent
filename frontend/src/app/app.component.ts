import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private successfullyLoggedAlert = false;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    console.log("home ngoninit");
    this.authenticationService.getLoginAlert().subscribe(showAlert => {
    console.log("testngoninit");
    console.log(this.successfullyLoggedAlert);
    console.log(showAlert); 
    this.successfullyLoggedAlert = showAlert;
    console.log(this.successfullyLoggedAlert);});

  }
}
