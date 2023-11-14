import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../models/user-info';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit{
  userInfo!: UserInfo | undefined;

  constructor() { }

  async ngOnInit() {
    this.userInfo = await this.getUserInfo();
  }

  async getUserInfo(): Promise<UserInfo | undefined> {
    try {
      const response = await fetch('/.auth/me');
      const payload = await response.json();
      const { clientPrincipal } = payload;
      return clientPrincipal;
    } catch (err) {
      console.error('Failed to get user information', err);
      return undefined;
    }
  }
}
