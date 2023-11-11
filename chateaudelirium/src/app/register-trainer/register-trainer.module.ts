import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { AuthUIComponent } from './auth-ui/auth-ui.component';
import { RegisterTrainerRoutingModule } from './register-trainer-routing.module';



@NgModule({
  declarations: [
    AuthUIComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RegisterTrainerRoutingModule,
  ]
})
export class RegisterTrainerModule { }
