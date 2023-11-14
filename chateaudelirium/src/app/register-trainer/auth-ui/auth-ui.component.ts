import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-ui',
  templateUrl: './auth-ui.component.html',
  styleUrls: ['./auth-ui.component.css']
})
export class AuthUIComponent implements OnInit{

  redirect = window.location.pathname;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    console.log(this.redirect);
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
  
}
