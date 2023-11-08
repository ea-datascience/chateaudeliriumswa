import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PublicRoutingModule } from './public-routing.module';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class PublicModule { }
