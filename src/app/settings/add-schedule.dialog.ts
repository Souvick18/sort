import { Component} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition  } from '@angular/material/snack-bar';

import * as moment from 'moment';

import { AddTimeDialogComponent } from './add-time.dialog';
import { AppService } from '../app.service';
import { SchedulerModel, SchedulerTZModel } from './scheduler.model';


@Component({
    selector: 'app-addschedule-dialog',
    templateUrl: 'add-schedule.dialog.html',
    styleUrls: ['add-schedule.dialog.css']
  })

export class AddScheduleDialogComponent {
  serviceResponseProgress = false;
  srpColor = 'primary';
  srpMode = 'indeterminate';
  srpValue = 60;

  snackHPos: MatSnackBarHorizontalPosition = 'center';
  snackVPos: MatSnackBarVerticalPosition = 'top';

  addScheduleForm: FormGroup;
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
              private dialog: MatDialog, private dialogref: MatDialogRef<AddScheduleDialogComponent>) {
    this.appService.retrieveAllSchedulerTZ().subscribe((data) => {
      this.timezoneInit = data as any as SchedulerTZModel;
    });
    this.scheduleForm();
    this.userId = localStorage.getItem('bfs_map_uid');
  }

  scheduleForm() {
    this.addScheduleForm = this.fb.group({
      name: new FormControl('', Validators.required),
      timezone: new FormControl('', Validators.required)
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
    if (!this.addScheduleForm.valid) {
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

      const newSchedule = new SchedulerModel();
      newSchedule.name = this.addScheduleForm.value.name;
      newSchedule.created_by = Number(this.userId);
      if (this.sundayStartTime !== '') {
        newSchedule.sunday_time_range = {start: this.sundayStartTime, end: this.sundayEndTime};
      }
      if (this.mondayStartTime !== '') {
        newSchedule.monday_time_range = {start: this.mondayStartTime, end: this.mondayEndTime};
      }
      if (this.tuesdayStartTime !== '') {
        newSchedule.tuesday_time_range = {start: this.tuesdayStartTime, end: this.tuesdayEndTime};
      }
      if (this.wednesdayStartTime !== '') {
        newSchedule.wednesday_time_range = {start: this.wednesdayStartTime, end: this.wednesdayEndTime};
      }
      if (this.thursdayStartTime !== '') {
        newSchedule.thursday_time_range = {start: this.thursdayStartTime, end: this.thursdayEndTime};
      }
      if (this.fridayStartTime !== '') {
        newSchedule.friday_time_range = {start: this.fridayStartTime, end: this.fridayEndTime};
      }
      if (this.saturdayStartTime !== '') {
        newSchedule.saturday_time_range = {start: this.saturdayStartTime, end: this.saturdayEndTime};
      }
      newSchedule.timezone_id = this.addScheduleForm.value.timezone;

      this.appService.createScheduler(newSchedule).subscribe((data) => {
        this.serviceResponseProgress = false;
        this.dialogref.close({message: 'success'});
      });
    }
  }
}
