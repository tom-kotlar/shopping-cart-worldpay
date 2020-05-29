import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanListComponent } from './plans/plan-list/plan-list.component';
import { PlanDetailsComponent } from './plans/plan-details/plan-details.component';


const routes: Routes = [
  {path: '', component: PlanListComponent},
  {path: 'planList/:planId', component: PlanDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
