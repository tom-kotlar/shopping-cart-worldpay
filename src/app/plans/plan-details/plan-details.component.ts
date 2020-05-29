import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanService } from '../plan.service';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { planList } from 'src/assets/plan-list';

@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.scss']
})
export class PlanDetailsComponent implements OnInit {
  plan
  constructor(private route: ActivatedRoute, private planService: PlanService, private _bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params, "index of planId")
      this.plan = planList[+params.get('planId')]
      console.log(this.plan)
    })
  }
  share() {
    window.alert('Share your Plan on social Media');
  }
  addToCart(plan) {
    this.planService.addToCart(plan)
    window.alert('Your plan has been added to the cart!');
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheet);
  }
}

@Component({
  selector: 'bottom-sheet',
  templateUrl: 'bottom-sheet.html',
})
export class BottomSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}