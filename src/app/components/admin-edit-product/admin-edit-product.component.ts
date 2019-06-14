import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from "../../services/backend.service";

import { MatSnackBar } from '@angular/material';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
import { first } from 'rxjs/operators';
import { AlertService } from '../../services/alert.service';


@Component({
  selector: 'app-admin-edit-product',
  templateUrl: './admin-edit-product.component.html',
  styleUrls: ['./admin-edit-product.component.scss']
})
export class AdminEditProductComponent implements OnInit {

  product: Product;
  registerForm: FormGroup; 
  loading = false;
  submitted = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private backEndService: BackendService,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
    this.getProduct();
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      details: ['', Validators.required],
      imageUrl: ['', [Validators.required]],
      quantity: ['', [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  getProduct(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.backEndService.getProductById(id)
      .subscribe(product => this.product = product);
  } 

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }


    this.loading = true;
    this.openSnackBar();
    this.backEndService.updateProduct(this.product)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Update successful', true);
          this.loading = false;
          this.router.navigate(['/productsList']);
          //this.router.navigate(['/login-new']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

  openSnackBar() {
    const snackBarRef = this.snackBar.open('Product Updated');

    setTimeout(() => {
      snackBarRef.dismiss();
    }, 777)

  }
}
