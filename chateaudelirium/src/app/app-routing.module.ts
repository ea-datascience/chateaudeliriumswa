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
    path:'**', 
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
