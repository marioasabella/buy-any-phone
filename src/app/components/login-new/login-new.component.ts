import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { User } from '../../models/user';
import { AuthenticationService } from '../../services/authentication.service';
import { AlertService } from '../../services/alert.service';

@Component({ 
  selector: 'app-login-new',
  templateUrl: './login-new.component.html',
  styleUrls: ['./login-new.component.scss']
})
export class LoginNewComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  found: User;
  error:string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) {

    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }

    this.authenticationService.currentUser.subscribe(x => {
      this.found = x;
      console.log(this.found); 
    });
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });


  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
     this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          if(JSON.parse(localStorage.getItem('currentUser'))) {
            this.router.navigate(['/productsList']);
          }
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
        );
       window.setTimeout(() => {
        console.log(JSON.parse(localStorage.getItem('currentUser')));
        if(!JSON.parse(localStorage.getItem('currentUser'))) {
          this.error = 'The username or password you’ve entered doesn’t match any account. Sign Up an account.';
          this.loading = false;
          return;
        }
       },355);
  }


}
