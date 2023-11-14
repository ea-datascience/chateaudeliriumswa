import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { AuthUIComponent } from './auth-ui/auth-ui.component';
import { RegisterTrainerRoutingModule } from './register-trainer-routing.module';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';



@NgModule({
  declarations: [
    AuthUIComponent,
    SignUpFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RegisterTrainerRoutingModule,
  ]
})
export class RegisterTrainerModule { }
