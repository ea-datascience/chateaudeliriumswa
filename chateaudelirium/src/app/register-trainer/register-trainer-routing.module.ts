import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { AuthUIComponent } from './auth-ui/auth-ui.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

const routes: Routes = [
  { path: '', component: AuthUIComponent },
  { path: 'signup', component: SignUpFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterTrainerRoutingModule {}
