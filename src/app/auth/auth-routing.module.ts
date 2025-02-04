import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path: 'login',component: LoginComponent },
      { path: 'registro',component: RegistroComponent },
      { path: '**', redirectTo: 'registro'},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AuthRoutingModule { }
