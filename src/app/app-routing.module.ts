import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ClientListComponent } from './components/client-list/client-list.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path : "login" , component: LoginComponent},
  {path: "", pathMatch:"full", redirectTo:"login"},
  {path:"list", component:ClientListComponent, canActivate:[AuthGuard]},
  {path:"**", redirectTo:"login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
