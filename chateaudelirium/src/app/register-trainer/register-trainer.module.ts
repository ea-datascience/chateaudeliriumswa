import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthUIComponent } from './auth-ui/auth-ui.component';
import { RegisterTrainerRoutingModule } from './register-trainer-routing.module';



@NgModule({
  declarations: [
    AuthUIComponent
  ],
  imports: [
    CommonModule,
    RegisterTrainerRoutingModule,
  ]
})
export class RegisterTrainerModule { }
