import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './component/login/login.component';
import { SigninComponent } from './component/signin/signin.component';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from '../ui/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangesPasswordComponent } from './component/changes-password/changes-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent,
    ChangesPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    FormsModule,    MaterialModule
  ]
})
export class AuthenticationModule { }
