import { NgModule } from "@angular/core";

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from "@angular/material/list"
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatDialogModule } from '@angular/material/dialog'
import { MatChipsModule } from '@angular/material/chips'
import { MatBottomSheetModule } from '@angular/material/bottom-sheet'

@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatSidenavModule,
        MatListModule,
        MatSnackBarModule,
        MatDialogModule,
        MatChipsModule,
        MatBottomSheetModule,

    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatSidenavModule,
        MatListModule,
        MatSnackBarModule,
        MatDialogModule,
        MatChipsModule,
        MatBottomSheetModule,

    ]
})

export class MaterialModule { }