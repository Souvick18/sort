import { Component, Inject} from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';

@Component({
    selector: 'app-time-dialog',
    templateUrl: 'add-time.dialog.html',
    styleUrls: ['add-time.dialog.css']
})

export class AddTimeDialogComponent {
  selectedDay: string;
  startTime = new FormControl('');
  endTime = new FormControl('');

  schdPickerTheme: NgxMaterialTimepickerTheme = {
    container: {
      bodyBackgroundColor: '#fff',
      buttonColor: '#4e9691'
    },
    dial: {
      dialBackgroundColor: '#4e9691',
    },
    clockFace: {
      clockFaceBackgroundColor: '#4e969159',
      clockHandColor: '#4e9691',
      clockFaceTimeInactiveColor: '#fff'
    }
  };

  constructor(private fb: FormBuilder, private dialogref: MatDialogRef<AddTimeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.selectedDay = data.selectedDay;
    this.startTime = new FormControl(data.startTime);
    this.endTime = new FormControl(data.endTime);
  }

  eventCallConfirm() {
    this.dialogref.close({startTime: this.startTime.value, endTime: this.endTime.value});
  }

  eventCallReset() {
    this.startTime = new FormControl('');
    this.endTime = new FormControl('');
  }
}
