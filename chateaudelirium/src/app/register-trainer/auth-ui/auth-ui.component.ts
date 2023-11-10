import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-ui',
  templateUrl: './auth-ui.component.html',
  styleUrls: ['./auth-ui.component.css']
})
export class AuthUIComponent {
  googleLogin(){
  }

  appleLogin(){
  }

  emailLogin(email:string, password:string){
  }
}
