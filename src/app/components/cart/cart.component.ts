import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";


import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Order } from '../../models/order';
import { AppState } from '../../app.state';
import * as CartActions from '../../actions/cart.actions';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  orders: Observable<Order[]>;
  cartArray: Order[];
  products: Product[];
  cartTotal: number;
  

  constructor(
    private store: Store<AppState>,
    private backend: BackendService
    ) { 
    this.orders = store.select('order');
  }

  ngOnInit() {
    this.orders.subscribe( (items = []) => {
      this.cartArray = items;
    });

    this.backend.getProducts().subscribe(products => {
      this.products = products;
    });
  }



  delOrder(index) {
    this.store.dispatch(new CartActions.RemoveOrder(index));
  }

  getProductQuantity(name: string): number {
    for(let i = 0;i < this.products.length; i++) {
      if(this.products[i].name === name) {
        return this.products[i].quantity;
      }
    }
  }

  calculateCartTotal(orders: Order[]): number {
    let cartTotal = 0;
    for(var f = 0; f < orders.length; f++) {
      cartTotal += orders[f].quantity * orders[f].price;
    }
    return cartTotal;

  }
 
}
