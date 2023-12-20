import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardUserComponent } from './layout/board-user/board-user.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './layout/login/login.component';
import { AuthGuard } from './_service/auth.guard';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: BoardUserComponent,
    canActivate: [AuthGuard],

  },
  {
    path: 'add-new-user',
    component: FormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-new-user/:id',
    component: FormComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
