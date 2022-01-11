import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEnvironmentComponent } from './components/create-environment/create-environment.component';
import { OverviewComponent } from './components/dashboard/components/overview/overview.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
 {
   path:"",
   component:SignupComponent
 },
 {
   path:"create-environment",
   component:CreateEnvironmentComponent
 },{
   path:"dashboard",
   component:DashboardComponent,
   children:[
     {
       path:"",
       component: OverviewComponent
     }
   ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
