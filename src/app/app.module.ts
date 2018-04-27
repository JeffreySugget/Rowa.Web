import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { SignupComponent } from './signup/signup.component';
import { UserService } from './user.service';
import { AlertService } from './alert.service';
import { CommonService } from './common.service';
import { ProfileService } from './profile.service';
import { MembersService } from './members.service';
import { AuthenticationService } from './authentication.service';
import { HttpInterceptorService } from './http-interceptor.service';
import { AlertsComponent } from './alerts/alerts.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { MembersComponent } from './members/members.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AlertsComponent,
    ForgotPasswordComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, HttpClientModule, AlertService, AuthenticationService, CommonService, ProfileService, MembersService, { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
