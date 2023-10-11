import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './actionPages/log-in/log-in.component';
import { RegisterComponent } from './actionPages/register/register.component';
import { ForgotPasswordComponent } from './actionPages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './actionPages/reset-password/reset-password.component';

const routes: Routes = [
  {path:'login', component:LogInComponent},
  {path:'register', component:RegisterComponent},
  {path:'forgotpassword', component:ForgotPasswordComponent},
  {path:'resetpassword',component:ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
