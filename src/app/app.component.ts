import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { User } from './models/user';
import { Role } from './models/role';
import { first } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Order } from './models/order';
import { AppState } from './app.state';
import * as CartActions from './actions/cart.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BuyAnyPhone';
  //loggedIn: Boolean;
  currentUser: User;
  orders: Observable<Order[]>;
  cartItems: number;

  constructor(
    private authenticationService: AuthenticationService,
    private store: Store<AppState>
    ) {
    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x;
      //console.log(this.currentUser); 
    });
    this.orders = store.select('order');

  }

  ngOnInit() {
    this.orders.subscribe((items = []) => {
      this.cartItems = items.length;
    }); 
  } 


  ngDoCheck() {
    // this.loggedIn = this.authenticationService.found;
  }

  isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }

  logout() {
    this.authenticationService.logout();
  }

}
