import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';

import { BackendService } from "../../services/backend.service";

import { first } from "rxjs/operators";

import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { AdminDelDialogComponent } from '../admin-del-dialog/admin-del-dialog.component';

@Component({
  selector: 'app-admin-delete-products',
  templateUrl: './admin-delete-products.component.html',
  styleUrls: ['./admin-delete-products.component.scss']
})
export class AdminDeleteProductsComponent implements OnInit {

  products: Product[];

  constructor(
    private backendService: BackendService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.backendService.getProducts().subscribe((result: Product[]) => {
      this.products = result;
    });
  }

  deleteProduct(id: number) {
    this.backendService.deleteProduct(id).pipe(first()).subscribe(() => {
      this.loadAllProducts();
    });
  }

  private loadAllProducts() {
    this.backendService.getProducts().pipe(first()).subscribe(products => {
      this.products = products;
    });
  }

  openDialog(product: Product): void {
    let dialogRef = this.dialog.open(AdminDelDialogComponent, {
      data: { product }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == "Yes") {
        this.deleteProduct(product.id);
        const snackBarRef = this.snackBar.open('Product Deleted');

        setTimeout(() => {
          snackBarRef.dismiss();
        }, 777)

      }
    });
  }


}
