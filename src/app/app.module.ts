import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//stylyng 
import { MaterialModule } from './materials/material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
//Components
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { PlanListComponent } from './plans/plan-list/plan-list.component';
import { PlanDetailsComponent } from './plans/plan-details/plan-details.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    PlanListComponent,
    PlanDetailsComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
