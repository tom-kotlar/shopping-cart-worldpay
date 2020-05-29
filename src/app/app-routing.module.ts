import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanListComponent } from './plans/plan-list/plan-list.component';
import { PlanDetailsComponent } from './plans/plan-details/plan-details.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {path: '', component: PlanListComponent},
  {path: 'planList/:planId', component: PlanDetailsComponent},
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
