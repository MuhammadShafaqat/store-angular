import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './actionPages/log-in/log-in.component';
import { RegisterComponent } from './actionPages/register/register.component';

const routes: Routes = [
  {path:'login', component:LogInComponent},
  {path:'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
