import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { RegistrationComponent } from './registration/registration.component';
import { ShowflightsComponent } from './showflights/showflights.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
/*
http://localhost:4200
http://localhost:4200/home
http://localhost:4200/home/register
http://localhost:4200/home/login
http://localhost:4200/home/login/forgot
http://localhost:4200/home/login/forgot/reset
http://localhost:4200/home/login/dashboard


const routes: Routes = [
  {path:'**', component: PageNotFoundComponent},
  {path: '',redirectTo:'home',pathMatch:'full'},
  {path: 'home', component: HomeComponent,
    children:[
      {path: 'showFlights', component: ShowflightsComponent },
      {path: 'register', component: RegistrationComponent },
      {path: 'login', component: LoginComponent,
        children: [
          {path:'dashboard', component: UserDashboardComponent},
          {path:'forgot', component: ForgotpasswordComponent,
           children:[
             {path:'reset', component: ForgotpasswordComponent},
           ]
        },
        ]
    },
    ]
}   //we are creating route name i.e home
];
*/
const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path : 'registration', component: RegistrationComponent },
  { path : 'showFlights', component: ShowflightsComponent },
  { path : 'login', component: LoginComponent,
  children: [
    {path: 'forget', component: ForgotpasswordComponent},
    { path:'reset', component: ForgotpasswordComponent}
  ]
},
  { path: 'dashboard', component: UserDashboardComponent},
  
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
