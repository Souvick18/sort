import { NgModule } from '@angular/core';

import { MatFormFieldModule, MatSidenavModule, MatInputModule, MatSelectModule, MatTableModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';


const ArrayName = [ MatFormFieldModule, MatSidenavModule, MatInputModule,
                    MatSelectModule, MatSlideToggleModule, MatButtonModule,
                    MatIconModule, MatSnackBarModule, MatTabsModule,
                    MatListModule, MatCardModule, MatProgressSpinnerModule,
                    MatTableModule, MatDialogModule, MatDatepickerModule,
                    MatNativeDateModule, MatSortModule ];
@NgModule({
imports: [ArrayName],
exports: [ArrayName]
})

export class MaterialModule {}
