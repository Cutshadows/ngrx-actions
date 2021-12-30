import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'auth', loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'dashboard',
    loadChildren:()=>import('./staradmin/staradmin.module').then(m=>m.StarAdminModule)
  },
  {
    path:'**', 
    redirectTo:'dashboard'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
