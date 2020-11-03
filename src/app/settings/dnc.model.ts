import { ProspectModel } from '../prospect/prospect.model';

export class DNCCompositeModel {
    id: number;
    // tslint:disable-next-line: variable-name
    campaign_id: number;
    // tslint:disable-next-line: variable-name
    dnc_reason: string;
    // tslint:disable-next-line: variable-name
    created_by: number;
    // tslint:disable-next-line: variable-name
    created_at: Date;
    firstname: string;
    prospect: ProspectModel;
}
