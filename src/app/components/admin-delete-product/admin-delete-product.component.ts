import { Component, OnInit, Input } from '@angular/core';
import { Product } from "../../models/Product";


@Component({
  selector: 'app-admin-delete-product',
  templateUrl: './admin-delete-product.component.html',
  styleUrls: ['./admin-delete-product.component.scss']
})
export class AdminDeleteProductComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
 