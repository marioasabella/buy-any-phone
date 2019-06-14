import { Component, OnInit } from '@angular/core';

import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
import { first } from 'rxjs/operators';

import { AlertService } from '../../services/alert.service';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { BackendService } from "../../services/backend.service";

import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-admin-add-products',
  templateUrl: './admin-add-products.component.html',
  styleUrls: ['./admin-add-products.component.scss']
})
export class AdminAddProductsComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService,
    private snackBar: MatSnackBar,
    private backend: BackendService
  ) { }

  ngOnInit() {
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

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }


    this.loading = true;
    this.openSnackBar();
    this.backend.registerProduct(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
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
    const snackBarRef = this.snackBar.open('Product added');

    setTimeout(() => {
      snackBarRef.dismiss();
    }, 777)

  }
}
