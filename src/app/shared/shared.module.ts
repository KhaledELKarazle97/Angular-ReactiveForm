import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DATE_LOCALE,MatDatepickerModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RouterModule } from '@angular/router';
import {CheckIfExist} from '../validators/EmailExistence.validator';
import { UserDetailsComponent } from '../user-details/user-details.component'
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [HomeComponent,LoginComponent,UserDetailsComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    RouterModule,
    HomeComponent,
    UserDetailsComponent,
    LoginComponent,
    HttpClientModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
  ]
})
export class SharedModule { }
