import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../models/user-info';

@Component({
  selector: 'app-auth-ui',
  templateUrl: './auth-ui.component.html',
  styleUrls: ['./auth-ui.component.css']
})
export class AuthUIComponent implements OnInit{

  redirect = window.location.pathname;

  constructor(private http:HttpClient) { }

  async ngOnInit() {
    console.log(this.redirect);
    this.userInfo = await this.getUserInfo();
    console.log(this.userInfo);
  }

  githubLogin(){
    window.open('/.auth/login/github?post_login_redirect_uri=' + this.redirect, '_self');
  }
  
  googleLogin(){
  }
  
  appleLogin(){
  }
  
  emailLogin(email:string, password:string){
  }
  
 
  microsoftLogin(){
    window.open('/.auth/login/aad', '_self');
  }

  //------------------------------------------------------------

  userInfo!: UserInfo | undefined;


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
