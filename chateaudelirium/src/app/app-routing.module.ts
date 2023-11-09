import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home', 
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },
  {
    path:'trainer', 
    loadChildren: () => import('./trainer/trainer.module').then(m => m.TrainerModule)
  },
  {
    path:'register-trainer', 
    loadChildren: () => import('./register-trainer/register-trainer.module').then(m => m.RegisterTrainerModule)
  },

  {
    path:'', 
    redirectTo: 'home',
    pathMatch: 'full'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
