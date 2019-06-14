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
import { componentFactoryName } from '@angular/compiler';
import { CartComponent } from './components/cart/cart.component';
import { AdminAddProductsComponent } from './components/admin-add-products/admin-add-products.component';
import { AdminAddUsersComponent } from './components/admin-add-users/admin-add-users.component';
import { AdminDeleteProductsComponent } from './components/admin-delete-products/admin-delete-products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SearchComponent } from './components/search/search.component';
import { AdminEditProductComponent } from './components/admin-edit-product/admin-edit-product.component';
import { AdminEditUserComponent } from './components/admin-edit-user/admin-edit-user.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { PaymentInfoComponent } from './components/payment-info/payment-info.component';


const routes: Routes = [
  {
    path:'',
    component: ProductsListComponent//LoginNewComponent//AppComponent
  },
  {
    path: 'productsList',
    component: ProductsListComponent,
    
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
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'addProducts',
    component: AdminAddProductsComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'addUsers',
    component: AdminAddUsersComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'deleteProducts',
    component: AdminDeleteProductsComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'editProduct/:id',
    component: AdminEditProductComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'editUser/:id',
    component: AdminEditUserComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'shipping',
    component: ShippingComponent
  },
  {
    path: 'payment-info',
    component: PaymentInfoComponent
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
