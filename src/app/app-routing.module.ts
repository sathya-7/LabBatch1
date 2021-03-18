import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { LoginAccountComponent } from './login-account/login-account.component';
import { RegisterAnAccountComponent } from './register-an-account/register-an-account.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {path:"register",component:RegisterAnAccountComponent},
  {path:"login",component:LoginAccountComponent},
  {path:"",redirectTo:"/login", pathMatch:"full"},
  {path:"userDetails", component:UsersListComponent,
canActivate:[AuthGuard]},
  {path:"userDetails/addUser",component:AddUserComponent},
  {path:"userDetails/:id",component:AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
