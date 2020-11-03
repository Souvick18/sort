export class ProspectCompositeModel {
  id: number;
  // tslint:disable-next-line: variable-name
  created_by: {
    id: number,
    name: string
  };
  // tslint:disable-next-line: variable-name
  created_at: Date;
  // tslint:disable-next-line: variable-name
  email_address: string;
  // tslint:disable-next-line: variable-name
  group_id: {
    id: number,
    source: string
  };
  // tslint:disable-next-line: variable-name
  cnt_campaigns: number;
  // tslint:disable-next-line: variable-name
  runlog_details: {
    last_contacted: Date,
    cnt_emails: number,
    cnt_replies: number,
    email_bounced: boolean,
    status: string
  };
}

export class ProspectModel {
  id: number;
  firstname: string;
  middlename: string;
  lastname: string;
  // tslint:disable-next-line: variable-name
  created_by: number;
  // tslint:disable-next-line: variable-name
  created_at: Date;
  // tslint:disable-next-line: variable-name
  modified_by: number;
  // tslint:disable-next-line: variable-name
  modified_at: Date;
  // tslint:disable-next-line: variable-name
  group_id: number;
  // tslint:disable-next-line: variable-name
  email_address: string;
  // tslint:disable-next-line: variable-name
  contact_no: string;
  company: string;
  // tslint:disable-next-line: variable-name
  company_industry: string;
  city: string;
  state: string;
  country: string;
  // tslint:disable-next-line: variable-name
  job_title: string;
  linkedin: string;
}

export class ProspectTemplateModel {
  id: number;
  field: string;
  occurrence: string;
}

export class ProspectGroupModel {
  id: number;
  name: string;
  // tslint:disable-next-line: variable-name
  source_file: string;
  // tslint:disable-next-line: variable-name
  total_record: number;
  // tslint:disable-next-line: variable-name
  created_by: number;
  // tslint:disable-next-line: variable-name
  created_at: Date;
}
