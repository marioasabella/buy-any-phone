import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  user: User = {
    id: 1,
    username: " ",
    password: " ",
    firstName: "",
    lastName: "",
    email: " ",
    role: " "
  };
  registerForm: FormGroup;
  

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
  ) { 
    
  }

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(x => {
      if(x !== null) {
        this.user = x;
      }
      
    });
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', [Validators.required]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      country: ['', [Validators.required]],
      zipcode: ['', [Validators.required]]

    });
  }

}
