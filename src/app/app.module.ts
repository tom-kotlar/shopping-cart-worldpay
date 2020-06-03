import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from "@angular/common/http"

//stylyng 
import { MaterialModule } from './materials/material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
//Components
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { PlanListComponent, ShareComponent, ChatComponent } from './plans/plan-list/plan-list.component';
import { PlanDetailsComponent, BottomSheet } from './plans/plan-details/plan-details.component';
import { CartComponent } from './cart/cart.component';
import { PlanService } from './plans/plan.service';




@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    PlanListComponent,
    PlanDetailsComponent,
    CartComponent,
    ShareComponent,
    ChatComponent,
    BottomSheet,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    
    
  ],
  providers: [PlanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
