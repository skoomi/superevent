import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientXsrfModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { BasicAuthHtppInterceptorService } from './services/basic-auth-htpp-interceptor.service';
import { XhrInterceptorService } from './services/xhr-interceptor.service';
import { AuthenticationService } from './services/authentication.service';
import { XSRFInterceptorService } from './services/xsrfinterceptor.service';
import { AuthGuardService } from './services/authguard.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventsSerivce } from './services/events.service';
import { NewEventDialogComponent } from './new-event-dialog/new-event-dialog.component';
import { MaterialModule } from './material';
import { EditEventDialogComponent } from './edit-event-dialog/edit-event-dialog.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'events', component: EventsComponent},// canActivate:[AuthGuardService]},
  { path: 'access-denied', component: AccessDeniedComponent},
  { path: 'users', component: UsersComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    EventsComponent,
    AccessDeniedComponent,
    EventDetailsComponent,
    NewEventDialogComponent,
    EditEventDialogComponent,
    UsersComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    AuthenticationService,
    EventsSerivce,
    {
      provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: XhrInterceptorService, multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: XSRFInterceptorService, multi: true
    },
],
entryComponents: [
  NewEventDialogComponent,
  EditEventDialogComponent
],
  bootstrap: [AppComponent]
})
export class AppModule { }

