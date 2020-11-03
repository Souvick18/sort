import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { MaterialModule } from '../material.module';
import { SidenavModule } from '../sidenav/sidenav.module';
// import { SourceCodeModule } from '../source-code/source-code.module';
import { PipesModule } from '../pipes/pipes.module';

import { SettingsComponentRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';

import { UpdateScheduleDialogComponent } from './update-schedule.dialog';
import { AddScheduleDialogComponent } from './add-schedule.dialog';
import { AddTimeDialogComponent } from './add-time.dialog';
// import { AddNewDNCDialogComponent } from './add-new-dnc.dialog';


@NgModule({
    declarations: [ SettingsComponent, UpdateScheduleDialogComponent, AddScheduleDialogComponent,
                    AddTimeDialogComponent ],
    imports:      [ SettingsComponentRoutingModule, CommonModule, MaterialModule, ReactiveFormsModule,
                    SidenavModule, NgxMaterialTimepickerModule, CKEditorModule, PipesModule ],
    entryComponents: [ UpdateScheduleDialogComponent, AddScheduleDialogComponent, AddTimeDialogComponent ]
})

export class SettingsModule {}
