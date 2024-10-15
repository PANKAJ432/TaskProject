import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangesPasswordComponent } from './component/changes-password/changes-password.component';
import { LoginComponent } from './component/login/login.component';
import { SigninComponent } from './component/signin/signin.component';

const routes: Routes = [

      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path:'signup',
        component:SigninComponent
      },
      {
        path:'changepassword',
        component:ChangesPasswordComponent
      }
      // {
      //   path: 'login',
      //   redirectTo: 'login'
      // }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
