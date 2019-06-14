import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.scss']
})
export class PaymentInfoComponent implements OnInit {

  payment;

  

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { 
    this.payment = {
      creditCardNumber: '999999999999',
      ccv: '0973',
      date: '12/10/2019'
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      creditCardNumber: ['', Validators.required],
      ccv: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

}
