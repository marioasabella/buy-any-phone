import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[];

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.getProducts();
  }
 
  getProducts(): void {
    this.backendService.getProducts().subscribe((result: Product[]) => {
      this.products = result;
   });

  }

}
