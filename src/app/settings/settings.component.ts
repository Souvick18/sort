import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { MatDialog, MatDialogConfig, MatTabChangeEvent } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition  } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';

// import { Editor } from '@ckeditor/ckeditor5-build-bfs';

import { AppService } from '../app.service';
import { DNCCompositeModel } from './dnc.model';
import { SchedulerModel } from './scheduler.model';
// import { ProspectTemplateModel } from './../prospect/prospect.model';

// import { SourceCodeComponent } from './../source-code/source-code.dialog';

import { UpdateScheduleDialogComponent } from './update-schedule.dialog';
import { AddScheduleDialogComponent } from './add-schedule.dialog';
import { AddNewDNCDialogComponent } from './add-new-dnc.dialog';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})

export class SettingsComponent implements OnInit {
  isExpanded = true;

  snackHPos: MatSnackBarHorizontalPosition = 'center';
  snackVPos: MatSnackBarVerticalPosition = 'top';

  scheduleInit: SchedulerModel;

  userId: string;
  userFullName: string;
  userAuthorizedMailbox: string;

  emailUnsubEditor: any;
  isUnsubDisabled = true;
  // tslint:disable-next-line: max-line-length
  unsubData = '<p>&nbsp;</p><p>&nbsp;</p><p style="text-align:center;">To unsubscribe, please click <span style="color:hsl(251, 93%, 50%);"><u>here</u></span></p>';
  emailUnsubscribeBody = new FormControl(this.unsubData);

  emailSignatureEditor: any;
  isSignEditorDisabled = false;
  emailSignatureBody = new FormControl('', Validators.required);

  wordCount = 0;
  toolbarItems = ['heading', 'fontfamily', 'fontsize', 'fontcolor', 'highlight', 'fontbackgroundcolor',
                '|', 'bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript',
                '|', 'alignment', 'bulletedlist', 'numberedlist', 'indent', 'outdent', 'specialcharacters', 'inserttable',
                '|', 'link', 'imageupload', 'blockquote', '|', 'undo', 'redo'];

  // prospectTemplateInit: ProspectTemplateModel[];
  prospectStatusInit = [
    {
      prospectStatusTitle: 'Responded',
      prospectStatusDesc: 'Prospect responded to one or more Campaign Emails'
    },

    {
      prospectStatusTitle: 'Unsubscribed',
      prospectStatusDesc: 'Prospect clicked unsubscribe link after opening Camapign Email'
    },

    { prospectStatusTitle: 'Unreachable',
      prospectStatusDesc: 'One or more Campaign Emails were bounced from this Prospect\'s email address'
    },

    { prospectStatusTitle: 'Email Sent',
      prospectStatusDesc: 'One or more Campaign Emails were send to this Prospect\'s email address, yet to receive a response'
    },

    {
      prospectStatusTitle: 'Added to Campaign',
      prospectStatusDesc: 'Prospect was added to a Campaign for the first time'
    },

    {
      prospectStatusTitle: 'New',
      prospectStatusDesc: 'Prospect was added to the Platform'
    }
  ];

  searchEmailForm = new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]);
  submittedSearchEmail = false;

  // dncInit: DNCCompositeModel[];
  dncInit = [];
  dncDataHeader: string[];
  dncDataSource: MatTableDataSource<DNCCompositeModel>;


  constructor(private dialog: MatDialog, private appService: AppService, private snackBar: MatSnackBar,
              private fb: FormBuilder) {}

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.userId = localStorage.getItem('bfs_map_uid');
    this.userFullName = localStorage.getItem('bfs_map_uflnm');

    this.dncDataHeader = ['firstname', 'email_address', 'dnc_reason', 'created_at'];
    this.dncInit = [
      {
        id: 10,
        prospect: {
            id: 64,
            firstname: 'Mitch',
            middlename: '',
            lastname: 'Speers',
            email_address: 'mitch.speers@step2strategy.com'
        },
        campaign_id: null,
        dnc_reason: 'MQL',
        created_at: '2020-10-30T09:14:20Z',
        created_by: 1
      },
      {
        id: 11,
        prospect: {
            id: 56,
            firstname: 'Souvick',
            middlename: '',
            lastname: 'Saha',
            email_address: 'souvick.saha@buyerforesight.com'
        },
        campaign_id: null,
        dnc_reason: 'MQL',
        created_at: '2020-10-30T10:16:58Z',
        created_by: 3
      },
      {
        id: 12,
        prospect: {
            id: 56,
            firstname: 'Subhajit',
            middlename: '',
            lastname: 'Kundu',
            email_address: 'subhajit.kundu@buyerforesight.com'
        },
        campaign_id: null,
        dnc_reason: 'MQL',
        created_at: '2020-11-03T10:16:58Z',
        created_by: 3
      },
      {
        id: 13,
        prospect: {
            id: 56,
            firstname: 'Arnab',
            middlename: 'Kumar',
            lastname: 'Pan',
            email_address: 'arnab.pan@buyerforesight.com'
        },
        campaign_id: null,
        dnc_reason: 'MPL',
        created_at: '2020-11-03T10:16:58Z',
        created_by: 3
      }
    ];
    this.dncDataSource = new MatTableDataSource<DNCCompositeModel>(this.dncInit);
    this.dncDataSource.sort = this.sort;
    this.dncDataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'email_address': return  item.prospect.email_address;
        case 'created_at': return  item.created_at;
        default: return item[property];
      }
    };
    return this.dncDataSource;

  }

  changeState(expanded: boolean) {
    this.isExpanded = expanded;
  }

  filterByEmail() {
    this.dncDataSource.filter = this.searchEmailForm.value.trim().toLowerCase();
  }

}
