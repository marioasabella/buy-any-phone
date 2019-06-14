import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
import { first } from 'rxjs/operators';

import { AlertService } from '../../services/alert.service';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';


import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-admin-add-users',
  templateUrl: './admin-add-users.component.html',
  styleUrls: ['./admin-add-users.component.scss']
})
export class AdminAddUsersComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(

    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService,
    private snackBar: MatSnackBar
  ) {
    // redirect to home if already logged in
    /*if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }*/
  }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [
        Validators.required,
        Validators.email
      ]]
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
    this.userService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.loading = false;
          this.router.navigate(['/usersList']);
          //this.router.navigate(['/login-new']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

  openSnackBar() {
    const snackBarRef = this.snackBar.open('User added');
    
    setTimeout(()=>{
      snackBarRef.dismiss();
    },777)

  }
}
