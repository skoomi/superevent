import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { MyEvent } from '../model/myevent';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(private http: HttpClient) {}

}
