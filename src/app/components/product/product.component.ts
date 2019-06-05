import { Component, OnInit, Input } from '@angular/core';
import { Product } from "../../models/Product";
import { ProductsService } from '../../services/products.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

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

  constructor(private products: ProductsService) { }

  ngOnInit() {
  }

  
  showDetails(): void{
    
    this.details = !this.details;
    this.state = (this.state === 'small'?'large':'small');
  }

  animateMe() {
    
  }

}
