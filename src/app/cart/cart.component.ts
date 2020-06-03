import { Component, OnInit, ViewChild } from '@angular/core';
import { PlanService } from '../plans/plan.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CartService } from './cart.service';
import { Payment } from './payment.class';

import { HttpHeaders, HttpClient } from '@angular/common/http';

declare var Worldpay: any;


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items
  token: string = null;

  @ViewChild('paymentForm') form;
  readonly worldpayClientKey = 'T_C_b078627d-3008-4478-b6e1-0258aaac8e71';
  //client key
  paymentForm: FormGroup
  // payment: Payment

  constructor(private planService: PlanService, private cartService: CartService, private http: HttpClient) { }

  ngOnInit() {
    this.items = this.planService.getItems()
    console.log(this.items)
    this.loadScript('https://cdn.worldpay.com/v1/worldpay.js', this.init);

   
  }

  
  init = (): void => {
    console.log(this.form);
    Worldpay.useTemplateForm({
      'clientKey': this.worldpayClientKey,
      'form': this.form.nativeElement,
      'paymentSection': 'paymentSection',
      'display': 'inline',
      'type': 'card',
      'reusable': true,
      'callback': this.worldpayCallback
    });
  }
  
  
  worldpayCallback = (status): void => {
    console.log(status)
    this.token = status.token
    console.log(`Token: ${this.token}`);
    this.makePayment()
  }
  
  private loadScript(url: string, callbackFunction: (any) = undefined) {
    const node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    node.onload = callbackFunction;
    document.getElementsByTagName('body')[0].appendChild(node);
  }
  
  
 
  postURL= "https://api.worldpay.com/v1/orders"

  
  worldPostHeaders = { 
    'Authorization': 'T_S_fbdbb773-f051-466d-82c8-d97176ae5954',
    'Content-Type' : 'application/json',
     'Access-Control-Allow-Origin': '*',
    //service key
  }
  requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.worldPostHeaders), 
  };

  data = {
    "token" : `${this.token}`, 
    "orderDescription" : "paying for electric", 
    "amount" : 500, 
    "currencyCode" : "GBP"
};
  
  
  
  makePayment() {
    return this.http.post(this.postURL, this.data, this.requestOptions).subscribe(value => {
      console.log(value, '<----payment')
    })
  }

  
  
  
  // this.paymentForm = new FormGroup({
  //   name: new FormControl('', { validators: [Validators.required ] }),
  //   cardNumber: new FormControl('', { validators: [Validators.required] }),
  //   expirationMonth: new FormControl('', { validators: [Validators.required] }),
  //   expirationYear: new FormControl('', { validators: [Validators.required] }),
  //   cvc: new FormControl('', { validators: [Validators.required] }),
  // })


//   onSubmit() {
//  this.payment = new Payment(
// this.paymentForm.value.name,
// this.paymentForm.value.cardNumber,
// this.paymentForm.value.expirationMonth,
// this.paymentForm.value.expirationYear,
// this.paymentForm.value.cvc,
//  )
//  console.log(this.payment, '----', this.paymentForm)
// }


// let form = this.paymentForm
// Worldpay.useOwnForm({
//    'clientKey': this.worldpayClientKey,
//    'form': this.paymentForm,
//    'reusable': true,
//    'callback': function(status, response) {
//    let element =   document.getElementById('paymentErrors').innerHTML = '';
//    console.log("this is element",element)

//       if (response.error) {
//          Worldpay.handleError(form, document.getElementById('paymentErrors'), response.error);
//       } else {
//         let token = response.token;
//          console.log(token)
//          Worldpay.formBuilder(form, 'input', 'hidden', 'token', token);
//         this.onSubmit()
//       }
//    }
// });
}
