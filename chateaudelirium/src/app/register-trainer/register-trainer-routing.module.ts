import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { AuthUIComponent } from './auth-ui/auth-ui.component';

const routes: Routes = [{ path: '', component: AuthUIComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegisterTrainerRoutingModule {}