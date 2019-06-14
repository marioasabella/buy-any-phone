import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { BackendService } from "../../services/backend.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  products: Product[];
  searchTerm: string = '';

  constructor(
    private backend: BackendService
  ) {
    this.backend.getProducts().subscribe( products => {
      this.products = products;
    });
   }

  ngOnInit() {
  }

}
