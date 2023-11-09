import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PublicModule } from './public/public.module';
import { TrainerModule } from './trainer/trainer.module';
import { RegisterTrainerModule } from './register-trainer/register-trainer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PublicModule,
    TrainerModule,
    RegisterTrainerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
