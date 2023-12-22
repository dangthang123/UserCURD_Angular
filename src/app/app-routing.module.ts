import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardUserComponent } from './layout/board-user/board-user.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './layout/login/login.component';
import { AuthGuard } from './_core/service/auth.guard';
import { HomeComponent } from './layout/home/home.component';
import { RoleGuard } from './_core/service/role.guard';
import { NotFoundPageComponent } from './layout/not-found-page/not-found-page.component';

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
    canActivate: [RoleGuard],
    data: {
      expectedRole: ['admin'],
    },
  },
  {
    path: 'add-new-user/:id',
    component: FormComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: ['admin'],
    },
  },
  {
    path: 'page-not-found',
    component: NotFoundPageComponent
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
