import { Component, OnInit, ViewChild } from '@angular/core';
import { PlanService } from '../plans/plan.service';
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
  
  constructor(private planService: PlanService) { }

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
  }

  private loadScript(url: string, callbackFunction: (any) = undefined) {
    const node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    node.onload = callbackFunction;
    document.getElementsByTagName('body')[0].appendChild(node);
  }

}
