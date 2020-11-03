import { Component, Inject} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition  } from '@angular/material/snack-bar';

import * as moment from 'moment';

import { AddTimeDialogComponent } from './add-time.dialog';
import { SchedulerModel, SchedulerTZModel } from './scheduler.model';
import { AppService } from '../app.service';

@Component({
    selector: 'app-updateschedule-dialog',
    templateUrl: 'update-schedule.dialog.html',
    styleUrls: ['update-schedule.dialog.css']
  })

export class UpdateScheduleDialogComponent {
  serviceResponseProgress = false;
  srpColor = 'primary';
  srpMode = 'indeterminate';
  srpValue = 60;

  snackHPos: MatSnackBarHorizontalPosition = 'center';
  snackVPos: MatSnackBarVerticalPosition = 'top';

  scheduleInit: SchedulerModel;

  showEditSegment = false;
  updateScheduleForm: FormGroup;
  timezoneInit: SchedulerTZModel;

  sundayStartTime = '';
  sundayEndTime = '';
  mondayStartTime = '';
  mondayEndTime = '';
  tuesdayStartTime = '';
  tuesdayEndTime = '';
  wednesdayStartTime = '';
  wednesdayEndTime = '';
  thursdayStartTime = '';
  thursdayEndTime = '';
  fridayStartTime = '';
  fridayEndTime = '';
  saturdayStartTime = '';
  saturdayEndTime = '';

  userId: string;
  startTime = '';
  endTime = '';

  constructor(private fb: FormBuilder, private appService: AppService, private snackBar: MatSnackBar,
              private dialogref: MatDialogRef<UpdateScheduleDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              private dialog: MatDialog) {
    this.scheduleInit = data.selectedScheduleData as SchedulerModel;
    this.userId = data.userId;
  }

  eventCallUpdate() {
    this.showEditSegment = true;
    this.scheduleForm();

    this.appService.retrieveAllSchedulerTZ().subscribe((data) => {
      this.timezoneInit = data as any as SchedulerTZModel;
    });

    if (this.scheduleInit.sunday_time_range.start !== undefined) {
      this.sundayStartTime = this.scheduleInit.sunday_time_range.start;
      this.sundayEndTime = this.scheduleInit.sunday_time_range.end;
    }
    if (this.scheduleInit.monday_time_range.start !== undefined) {
      this.mondayStartTime = this.scheduleInit.monday_time_range.start;
      this.mondayEndTime = this.scheduleInit.monday_time_range.end;
    }
    if (this.scheduleInit.tuesday_time_range.start !== undefined) {
      this.tuesdayStartTime = this.scheduleInit.tuesday_time_range.start;
      this.tuesdayEndTime = this.scheduleInit.tuesday_time_range.end;
    }
    if (this.scheduleInit.wednesday_time_range.start !== undefined) {
      this.wednesdayStartTime = this.scheduleInit.wednesday_time_range.start;
      this.wednesdayEndTime = this.scheduleInit.wednesday_time_range.end;
    }
    if (this.scheduleInit.thursday_time_range.start !== undefined) {
      this.thursdayStartTime = this.scheduleInit.thursday_time_range.start;
      this.thursdayEndTime = this.scheduleInit.thursday_time_range.end;
    }
    if (this.scheduleInit.friday_time_range.start !== undefined) {
      this.fridayStartTime = this.scheduleInit.friday_time_range.start;
      this.fridayEndTime = this.scheduleInit.friday_time_range.end;
    }
    if (this.scheduleInit.saturday_time_range.start !== undefined) {
      this.saturdayStartTime = this.scheduleInit.saturday_time_range.start;
      this.saturdayEndTime = this.scheduleInit.saturday_time_range.end;
    }
  }

  scheduleForm() {
    this.updateScheduleForm = this.fb.group({
      name: new FormControl({value: this.scheduleInit.name, disabled: true}, Validators.required),
      timezone: new FormControl(this.scheduleInit.timezone.id, Validators.required)
    });
  }

  addTimeDialog(selectedDay: string) {
    if (selectedDay === 'Sunday' && this.sundayStartTime !== '') {
      this.startTime = moment(this.sundayStartTime, 'HH:mm:ss').format('h:mm a');
      this.endTime = moment(this.sundayEndTime, 'HH:mm:ss').format('h:mm a');
    } else if (selectedDay === 'Monday' && this.mondayStartTime !== '') {
      this.startTime = moment(this.mondayStartTime, 'HH:mm:ss').format('h:mm a');
      this.endTime = moment(this.mondayEndTime, 'HH:mm:ss').format('h:mm a');
    } else if (selectedDay === 'Tuesday' && this.tuesdayStartTime !== '') {
      this.startTime = moment(this.tuesdayStartTime, 'HH:mm:ss').format('h:mm a');
      this.endTime = moment(this.tuesdayEndTime, 'HH:mm:ss').format('h:mm a');
    } else if (selectedDay === 'Wednesday' && this.wednesdayStartTime !== '') {
      this.startTime = moment(this.wednesdayStartTime, 'HH:mm:ss').format('h:mm a');
      this.endTime = moment(this.wednesdayEndTime, 'HH:mm:ss').format('h:mm a');
    } else if (selectedDay === 'Thursday' && this.thursdayStartTime !== '') {
      this.startTime = moment(this.thursdayStartTime, 'HH:mm:ss').format('h:mm a');
      this.endTime = moment(this.thursdayEndTime, 'HH:mm:ss').format('h:mm a');
    } else if (selectedDay === 'Friday' && this.fridayStartTime !== '') {
      this.startTime = moment(this.fridayStartTime, 'HH:mm:ss').format('h:mm a');
      this.endTime = moment(this.fridayEndTime, 'HH:mm:ss').format('h:mm a');
    } else if (selectedDay === 'Saturday' && this.saturdayStartTime !== '') {
      this.startTime = moment(this.saturdayStartTime, 'HH:mm:ss').format('h:mm a');
      this.endTime = moment(this.saturdayEndTime, 'HH:mm:ss').format('h:mm a');
    } else {
      this.startTime = '';
      this.endTime = '';
    }

    const dialogconfig = new MatDialogConfig();
    dialogconfig.width = '50%';
    // dialogconfig.height = '40%';
    dialogconfig.data = {selectedDay, startTime: this.startTime, endTime: this.endTime};

    const addTimeScheduleRef = this.dialog.open(AddTimeDialogComponent, dialogconfig);
    addTimeScheduleRef.afterClosed().subscribe((data) => {
      if (data) {
        this.startTime = data.startTime;
        this.endTime = data.endTime;

        if (this.startTime !== '' && this.endTime !== '') {
          const st = moment(this.startTime, 'h:mm a').format('HH:mm:ss');
          const et = moment(this.endTime, 'h:mm a').format('HH:mm:ss');
          switch (selectedDay) {
            case 'Sunday':
              this.sundayStartTime = st;
              this.sundayEndTime = et;
              break;
            case 'Monday':
              this.mondayStartTime = st;
              this.mondayEndTime = et;
              break;
            case 'Tuesday':
              this.tuesdayStartTime = st;
              this.tuesdayEndTime = et;
              break;
            case 'Wednesday':
              this.wednesdayStartTime = st;
              this.wednesdayEndTime = et;
              break;
            case 'Thursday':
              this.thursdayStartTime = st;
              this.thursdayEndTime = et;
              break;
            case 'Friday':
              this.fridayStartTime = st;
              this.fridayEndTime = et;
              break;
            case 'Saturday':
              this.saturdayStartTime = st;
              this.saturdayEndTime = et;
              break;
          }
        }
      }
    });
  }

  removeSelectedTime(selectedDay: string) {
    switch (selectedDay) {
      case 'Sunday':
        this.sundayStartTime = '';
        this.sundayEndTime = '';
        break;
      case 'Monday':
        this.mondayStartTime = '';
        this.mondayEndTime = '';
        break;
      case 'Tuesday':
        this.tuesdayStartTime = '';
        this.tuesdayEndTime = '';
        break;
      case 'Wednesday':
        this.wednesdayStartTime = '';
        this.wednesdayEndTime = '';
        break;
      case 'Thursday':
        this.thursdayStartTime = '';
        this.thursdayEndTime = '';
        break;
      case 'Friday':
        this.fridayStartTime = '';
        this.fridayEndTime = '';
        break;
      case 'Saturday':
        this.saturdayStartTime = '';
        this.saturdayEndTime = '';
        break;
    }
  }

  eventCallSubmit() {
    if (!this.updateScheduleForm.valid) {
      this.snackBar.open('One or More madatory fields are missing', '', {
        duration: 5000,
        horizontalPosition: this.snackHPos,
        verticalPosition: this.snackVPos,
        panelClass: ['danger-snackbar'],
      });
    } else if (this.sundayStartTime === '' && this.mondayStartTime === '' && this.tuesdayStartTime === ''
                && this.wednesdayStartTime === '' && this.thursdayStartTime === '' && this.fridayStartTime === ''
                && this.saturdayStartTime === '') {
      this.snackBar.open('No time range provided in Schedule', '', {
        duration: 5000,
        horizontalPosition: this.snackHPos,
        verticalPosition: this.snackVPos,
        panelClass: ['danger-snackbar'],
      });
    } else {
      this.serviceResponseProgress = true;

      const updatedSchedule = new SchedulerModel();
      updatedSchedule.name = this.scheduleInit.name;
      updatedSchedule.created_by = this.scheduleInit.created_by;
      updatedSchedule.modified_by = Number(this.userId);
      updatedSchedule.modified_at = new Date();
      if (this.sundayStartTime !== '') {
        updatedSchedule.sunday_time_range = {start: this.sundayStartTime, end: this.sundayEndTime};
      } else {
        updatedSchedule.sunday_time_range = {start: undefined, end: undefined};
      }
      if (this.mondayStartTime !== '') {
        updatedSchedule.monday_time_range = {start: this.mondayStartTime, end: this.mondayEndTime};
      } else {
        updatedSchedule.monday_time_range = {start: undefined, end: undefined};
      }
      if (this.tuesdayStartTime !== '') {
        updatedSchedule.tuesday_time_range = {start: this.tuesdayStartTime, end: this.tuesdayEndTime};
      } else {
        updatedSchedule.tuesday_time_range = {start: undefined, end: undefined};
      }
      if (this.wednesdayStartTime !== '') {
        updatedSchedule.wednesday_time_range = {start: this.wednesdayStartTime, end: this.wednesdayEndTime};
      }  else {
        updatedSchedule.wednesday_time_range = {start: undefined, end: undefined};
      }
      if (this.thursdayStartTime !== '') {
        updatedSchedule.thursday_time_range = {start: this.thursdayStartTime, end: this.thursdayEndTime};
      } else {
        updatedSchedule.thursday_time_range = {start: undefined, end: undefined};
      }
      if (this.fridayStartTime !== '') {
        updatedSchedule.friday_time_range = {start: this.fridayStartTime, end: this.fridayEndTime};
      } else {
        updatedSchedule.friday_time_range = {start: undefined, end: undefined};
      }
      if (this.saturdayStartTime !== '') {
        updatedSchedule.saturday_time_range = {start: this.saturdayStartTime, end: this.saturdayEndTime};
      } else {
        updatedSchedule.saturday_time_range = {start: undefined, end: undefined};
      }
      updatedSchedule.timezone_id = this.updateScheduleForm.value.timezone;

      this.appService.updateScheduler(String(this.scheduleInit.id), updatedSchedule).subscribe((data) => {
        this.serviceResponseProgress = false;
        this.dialogref.close({message: 'success'});
      });
    }
  }
}
