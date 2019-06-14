import { Component, OnInit, Input } from '@angular/core';
import { Product } from "../../models/Product";
import { ProductsService } from '../../services/products.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Order } from '../../models/order';
import * as CartActions from '../../actions/cart.actions';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { CartService } from "../../services/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [
    trigger('myfirstanimation',[
      state('small', style({ height : '0px' })),
      state('large', style({ height : '*' })),

      transition('small <=> large', animate('400ms ease-in'))
    ])
  ]
})
export class ProductComponent implements OnInit {

 @Input() product: Product;
  state: string = 'small';
  details: boolean = false;
  


  constructor(
    private products: ProductsService,
    private store: Store<AppState>,
    private snackBar: MatSnackBar,
    private cartService: CartService
    ) { }

  ngOnInit() {
  }

  
  showDetails(): void{
    
    this.details = !this.details;
    this.state = (this.state === 'small'?'large':'small');
  }

  animateMe() { 
    
  }

  addToCart() {
    this.store.dispatch(new CartActions.AddOrder({id: this.product.id, name: this.product.name , price: this.product.price, quantity: this.product.quantity}));
    const snackBarRef = this.snackBar.open('ADDED TO CART');
    
    setTimeout(()=>{
      snackBarRef.dismiss();
    },777)
  }

  doNothing() {
    
  }

  addedToCart(product): boolean {
    return this.cartService.addedToCart(product);
  }

}
