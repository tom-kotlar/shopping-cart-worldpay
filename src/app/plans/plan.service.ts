import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  plans = []
  
  constructor() { }


  addToCart(item) {
    this.plans.push(item)
  }

  getItems() {
    return this.plans
  }

  clearCart() {
    this.plans = []
    return this.plans
  }
}
