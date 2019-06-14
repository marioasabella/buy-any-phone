import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from "../../services/backend.service";

import { MatSnackBar } from '@angular/material';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
import { first } from 'rxjs/operators';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-admin-edit-user',
  templateUrl: './admin-edit-user.component.html',
  styleUrls: ['./admin-edit-user.component.scss']
})
export class AdminEditUserComponent implements OnInit {

  user: User;
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
    this.getUser();
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

  get f() { return this.registerForm.controls; }

  getUser(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.backEndService.getUserById(id)
      .subscribe(user => this.user = user);
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }


    this.loading = true;
    this.openSnackBar();
    this.backEndService.updateUser(this.user)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Update successful', true);
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
    const snackBarRef = this.snackBar.open('User Updated');

    setTimeout(() => {
      snackBarRef.dismiss();
    }, 777)

  }
}
