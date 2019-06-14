import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


// Material Components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { UserComponent } from './components/user/user.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AlertComponent } from './components/alert/alert.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';

import { LoginNewComponent } from './components/login-new/login-new.component';
import { DelDialogComponent } from './components/del-dialog/del-dialog.component';
import { AnimateComponent } from './components/animate/animate.component';
import { CartComponent } from './components/cart/cart.component';

import { StoreModule } from '@ngrx/store';
import { cartReducer } from './reducers/cart.reducer';
import { AdminAddProductsComponent } from './components/admin-add-products/admin-add-products.component';
import { AdminAddUsersComponent } from './components/admin-add-users/admin-add-users.component';
import { AdminDeleteProductsComponent } from './components/admin-delete-products/admin-delete-products.component';
import { AdminDeleteProductComponent } from './components/admin-delete-product/admin-delete-product.component';
import { AdminDelDialogComponent } from './components/admin-del-dialog/admin-del-dialog.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SearchComponent } from './components/search/search.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { AdminEditProductComponent } from './components/admin-edit-product/admin-edit-product.component';
import { AdminEditUserComponent } from './components/admin-edit-user/admin-edit-user.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { PaymentInfoComponent } from './components/payment-info/payment-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsListComponent,
    UserComponent,
    UsersListComponent,
    AlertComponent,
    HomeComponent,
    RegisterComponent,
    LoginNewComponent,
    DelDialogComponent,
    AnimateComponent,
    CartComponent,
    AdminAddProductsComponent,
    AdminAddUsersComponent,
    AdminDeleteProductsComponent,
    AdminDeleteProductComponent,
    AdminDelDialogComponent,
    ProductDetailComponent,
    SearchComponent,
    ProductFilterPipe,
    AdminEditProductComponent,
    AdminEditUserComponent,
    ShippingComponent,
    PaymentInfoComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    StoreModule.forRoot({
      order: cartReducer
    }),

    // Material Components
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule
  ],
  providers: [],
  entryComponents: [ 
    DelDialogComponent,
    AdminDelDialogComponent 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
