import { Component, OnInit, ViewChild } from '@angular/core';
import { PlanService } from '../plans/plan.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CartService } from './cart.service';
import { Payment } from './payment.class';
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

  paymentForm: FormGroup
  payment: Payment

  constructor(private planService: PlanService, private cartService: CartService) { }

  ngOnInit() {
    this.items = this.planService.getItems()
    console.log(this.items)
    this.loadScript('https://cdn.worldpay.com/v1/worldpay.js', this.init);

    this.paymentForm = new FormGroup({
      name: new FormControl('', { validators: [Validators.required ] }),
      cardNumber: new FormControl('', { validators: [Validators.required] }),
      expirationMonth: new FormControl('', { validators: [Validators.required] }),
      expirationYear: new FormControl('', { validators: [Validators.required] }),
      cvc: new FormControl('', { validators: [Validators.required] }),
    })
  }

  onSubmit() {
 this.payment = new Payment(
this.paymentForm.value.name,
this.paymentForm.value.cardNumber,
this.paymentForm.value.expirationMonth,
this.paymentForm.value.expirationYear,
this.paymentForm.value.cvc,
 )
 console.log(this.payment, '----', this.paymentForm)
}
  

  init = (): void => {
    console.log(this.paymentForm, '<<<<<');
    Worldpay.useOwnForm({
      'clientKey': this.worldpayClientKey,
      'form': this.paymentForm,
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
    Worldpay.formBuilder(this.paymentForm, 'input', 'hidden', 'token', this.token);
               this.onSubmit();
    
  }


  private loadScript(url: string, callbackFunction: (any) = undefined) {
  const node = document.createElement('script');
  node.src = url;
  node.type = 'text/javascript';
  node.onload = callbackFunction;
  document.getElementsByTagName('body')[0].appendChild(node);
}

}
