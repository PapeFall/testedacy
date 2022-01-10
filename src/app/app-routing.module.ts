import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEnvironmentComponent } from './components/create-environment/create-environment.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
 {
   path:"",
   component:SignupComponent
 },
 {
   path:"create-environment",
   component:CreateEnvironmentComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
