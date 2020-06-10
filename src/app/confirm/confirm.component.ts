import { Component, OnInit } from '@angular/core';
import { PlanService } from "../plans/plan.service";

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
items
total
  constructor( private planService: PlanService) { }

  ngOnInit(): void {
    this.items = this.planService.getItems()
    this.total = this.planService.totalCart(this.items)
    console.log(this.items, "from confirm")
  }

}
