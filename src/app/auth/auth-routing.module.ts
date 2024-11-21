import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
        {
          path: 'login',
          component: LoginComponent
        },
        {
          path: 'create-account',
          component: CreateAccountComponent
        },
        {
          path: '**',
          redirectTo: 'login'
        }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
