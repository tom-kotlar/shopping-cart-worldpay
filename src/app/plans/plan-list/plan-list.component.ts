import { Component, OnInit } from '@angular/core';
import { planList } from "src/assets/plan-list";

import {
  MatSnackBar, MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';


import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.scss']
})
export class PlanListComponent implements OnInit {

  planList = planList
  durationInSeconds = 2;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  call() {
    window.alert('You callling the customer service!');
  }

  openSnackBar() {
    this._snackBar.openFromComponent(ChatComponent, {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  openDialog() {
    this.dialog.open(ShareComponent);
  }

}


@Component({
  selector: 'app-plan-list',
  templateUrl: './dialog-element.html',
})
export class ShareComponent { }

@Component({
  selector: 'app-plan-list',
  templateUrl: './chat-element.html',
})
export class ChatComponent { }