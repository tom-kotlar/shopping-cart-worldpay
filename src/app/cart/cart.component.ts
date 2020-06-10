import { Component, OnInit, ViewChild } from '@angular/core';
import { PlanService } from '../plans/plan.service';
import { FormGroup } from '@angular/forms';
import { Payment } from './payment.class';
import { Router } from "@angular/router";

import { HttpHeaders, HttpClient } from '@angular/common/http';

declare var Worldpay: any;


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items
  token: string;
  reusable: string
  total
  cartTotal: string
  keyToken: string

  @ViewChild('paymentForm') form;
  readonly worldpayClientKey = 'T_C_b078627d-3008-4478-b6e1-0258aaac8e71';
  //client key
  paymentForm: FormGroup
  // payment: Payment

  constructor(private planService: PlanService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.items = this.planService.getItems()
    console.log(this.items)
    this.loadScript('https://cdn.worldpay.com/v1/worldpay.js', this.init);
    this.total = this.planService.totalCart(this.items)
     console.log(this.total)
//the function goes 2x - check the console
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
    this.reusable = status.reusable
    this.keyToken = this.token
    this.cartTotal = this.total.toString().replace('.', '')
    // console.log(`Token: ${this.token}`);
    this.makePayment(this.keyToken, this.cartTotal )
  }

  
  
  private loadScript(url: string, callbackFunction: (any) = undefined) {
    const node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    node.onload = callbackFunction;
    document.getElementsByTagName('body')[0].appendChild(node);
  }
  
  
 
  postURL= "https://wrldpayapi.azurewebsites.net/api/worldPayTrig?name=tomas&code=mGUbiIYR7Nw3ykaR1Z6OJLCePaanhUwwaYKF3knWQsCbPSN6ZChr4w=="

  
  worldPostHeaders = { 
    'Authorization': 'T_S_fbdbb773-f051-466d-82c8-d97176ae5954',
    'Content-Type' : 'application/json',
    'Access-Control-Allow-Origin': '*',
    //service key
  }
  requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.worldPostHeaders), 
  };

  
  makePayment(token, amount) {
    console.log( this.keyToken, this.cartTotal, '<<<<<<')
    return this.http.post(this.postURL, {
      "token" :  token,
      "orderDescription" : "paying for electric", 
      "amount" : amount, 
      "currencyCode" : "GBP"
    }).subscribe(value => {
      console.log(value, '<----payment')
    })
  }

}