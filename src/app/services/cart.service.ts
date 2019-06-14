import { Injectable } from '@angular/core';

import { BackendService } from "../services/backend.service";
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Order } from '../models/order';
import { AppState } from '../app.state';
import * as CartActions from '../actions/cart.actions';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  orders: Observable<Order[]>;
  cartArray: Order[];
  products: Product[];

  constructor(
    private store: Store<AppState>,
    private backend: BackendService,
    
  ) { 
    this.orders = store.select('order');
    this.orders.subscribe( (items = []) => {
      this.cartArray = items;
    });
    this.backend.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  addedToCart(product: Product): boolean {
    for(let i = 0; i < this.cartArray.length; i++) {
      if(this.cartArray[i].name === product.name){
        return true;
      }
    }
  }
}
