import { Component} from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialogRef } from '@angular/material';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition  } from '@angular/material/snack-bar';

import { AppService } from '../app.service';
import { ProspectModel } from '../prospect/prospect.model';
import { DNCCompositeModel } from './dnc.model';

@Component({
    selector: 'app-addnewdnc-dialog',
    templateUrl: 'add-new-dnc.dialog.html',
    styleUrls: ['add-new-dnc.dialog.css']
  })

export class AddNewDNCDialogComponent {
  serviceResponseProgress = false;
  srpColor = 'primary';
  srpMode = 'indeterminate';
  srpValue = 60;

  snackHPos: MatSnackBarHorizontalPosition = 'center';
  snackVPos: MatSnackBarVerticalPosition = 'top';

  userId: string;
  dncGroupId = 73;
  newDNCForm: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar,
              private appService: AppService, private dialogref: MatDialogRef<AddNewDNCDialogComponent>) {
    this.userId = localStorage.getItem('bfs_map_uid');
    this.createDNCForm();
  }

  createDNCForm() {
      this.newDNCForm = this.fb.group({
        firstName: new FormControl('', Validators.required),
        middleName: new FormControl(''),
        lastName: new FormControl('', Validators.required),
        emailAddress: new FormControl('', Validators.required),
        linkedinUrl: new FormControl(''),
        contactNo: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        jobTitle: new FormControl(''),
        dncReason: new FormControl('', Validators.required),
        companyName: new FormControl(''),
        companyIndustry: new FormControl('')
      });
    }

    // addDNC() {
    //   if (!this.newDNCForm.valid) {
    //     this.snackBar.open('One or More madatory fields are missing', '', {
    //       duration: 5000,
    //       horizontalPosition: this.snackHPos,
    //       verticalPosition: this.snackVPos,
    //       panelClass: ['danger-snackbar'],
    //     });
    //   } else {
    //     this.serviceResponseProgress = true;

    //     const newDNC = new DNCCompositeModel();
    //     const newDNCProspect = new ProspectModel();
    //     newDNCProspect.firstname = this.newDNCForm.value.firstName;
    //     newDNCProspect.middlename = this.newDNCForm.value.middleName;
    //     newDNCProspect.lastname = this.newDNCForm.value.lastName;
    //     newDNCProspect.created_by = Number(this.userId);
    //     newDNCProspect.email_address = this.newDNCForm.value.emailAddress;
    //     newDNCProspect.linkedin = this.newDNCForm.value.linkedinUrl;
    //     newDNCProspect.contact_no = this.newDNCForm.value.contactNo;
    //     newDNCProspect.city = this.newDNCForm.value.city;
    //     newDNCProspect.state = this.newDNCForm.value.state;
    //     newDNCProspect.job_title = this.newDNCForm.value.jobTitle;
    //     newDNCProspect.group_id = this.dncGroupId;
    //     newDNCProspect.company = this.newDNCForm.value.companyName;
    //     newDNCProspect.company_industry = this.newDNCForm.value.companyIndustry;

    //     newDNC.prospect = newDNCProspect;
    //     newDNC.dnc_reason = this.newDNCForm.value.dncReason;
    //     newDNC.created_by = Number(this.userId);

    //     // console.log(newDNC);

    //     this.appService.createDNC(newDNC).subscribe((data) => {
    //       this.serviceResponseProgress = false;
    //       this.dialogref.close({message: 'success'});
    //     },
    //     (err) => {
    //       if (err.error.email_address) {
    //         this.serviceResponseProgress = false;
    //         this.snackBar.open('Prospect already exists in Platform! Please use Mark DNC feature in case of active prospect', '', {
    //           duration: 3000,
    //           horizontalPosition: this.snackHPos,
    //           verticalPosition: this.snackVPos,
    //           panelClass: ['danger-snackbar'],
    //         });
    //       }
    //     });
    //   }
    // }

    resetDNC() {
      this.newDNCForm.reset();
    }
}
