import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientXsrfModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { BasicAuthHtppInterceptorService } from './services/basic-auth-htpp-interceptor.service';
import { XhrInterceptorService } from './services/xhr-interceptor.service';
import { AuthenticationService } from './services/authentication.service';
import { XSRFInterceptorService } from './services/xsrfinterceptor.service';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'events', component: EventsComponent},// canActivate:[AuthGuardService]},
  { path: 'access-denied', component: AccessDeniedComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    EventsComponent,
    AccessDeniedComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: XhrInterceptorService, multi: true
    }
    ,
    {
      provide: HTTP_INTERCEPTORS, useClass: XSRFInterceptorService, multi: true
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }

