import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from "../../services/backend.service";
import { Location } from '@angular/common';

import { CartService } from "../../services/cart.service";
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as CartActions from '../../actions/cart.actions';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  quantity: number;
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private backEndService: BackendService,
    private location: Location,
    private store: Store<AppState>,
    private snackBar: MatSnackBar,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.backEndService.getProductById(id)
      .subscribe(product => this.product = product);
  } 

  addToCart() {
    
    this.store.dispatch(new CartActions.AddOrder({ id: this.product.id, name: this.product.name, price: this.product.price, quantity: this.quantity }));
    
    const snackBarRef = this.snackBar.open('ADDED TO CART');

    setTimeout(() => {
      snackBarRef.dismiss();
    }, 777)
  }
  
  addedToCart(product): boolean {
    return this.cartService.addedToCart(product);
  }


}
