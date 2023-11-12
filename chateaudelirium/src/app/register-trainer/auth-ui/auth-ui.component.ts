import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-ui',
  templateUrl: './auth-ui.component.html',
  styleUrls: ['./auth-ui.component.css']
})
export class AuthUIComponent {

  constructor(private http:HttpClient) { }

  githubLogin(){
    window.open('/.auth/login/github', '_self');
  }
  
  googleLogin(){
  }
  
  appleLogin(){
  }
  
  emailLogin(email:string, password:string){
  }
  
  // https://black-tree-0badee803.4.azurestaticapps.net/home
  
  microsoftLogin(){
    window.open('/.auth/login/aad', '_self');
  }
  
}
