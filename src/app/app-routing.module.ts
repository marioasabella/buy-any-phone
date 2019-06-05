import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/not-auth.guard';
import { RegisterComponent } from './components/register/register.component';
//import { AppComponent } from './app.component';
import { LoginNewComponent } from './components/login-new/login-new.component';
import { Role } from './models/role';


const routes: Routes = [
  {
    path:'',
    component: LoginNewComponent//AppComponent
  },
  {
    path: 'productsList',
    component: ProductsListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'usersList',
    component: UsersListComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] } 
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login-new',
    component: LoginNewComponent,
    canActivate: [NotAuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NotAuthGuard]
  }
  // otherwise redirect to home
  /*
  {
    path: '**',
    redirectTo: ''
  }
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
