export class SchedulerModel {
    id: number;
    name: string;
    // tslint:disable-next-line: variable-name
    created_by: number;
    // tslint:disable-next-line: variable-name
    created_at: Date;
    // tslint:disable-next-line: variable-name
    modified_by: number;
    // tslint:disable-next-line: variable-name
    modified_at: Date;
    // tslint:disable-next-line: variable-name
    sunday_time_range: {
        start: string;
        end: string;
    };
    // tslint:disable-next-line: variable-name
    monday_time_range: {
        start: string;
        end: string;
    };
    // tslint:disable-next-line: variable-name
    tuesday_time_range: {
        start: string;
        end: string;
    };
    // tslint:disable-next-line: variable-name
    wednesday_time_range: {
        start: string;
        end: string;
    };
    // tslint:disable-next-line: variable-name
    thursday_time_range: {
        start: string;
        end: string;
    };
    // tslint:disable-next-line: variable-name
    friday_time_range: {
        start: string;
        end: string;
    };
    // tslint:disable-next-line: variable-name
    saturday_time_range: {
        start: string;
        end: string;
    };
    // tslint:disable-next-line: variable-name
    timezone_id: number;
    timezone: {
        id: number;
        name: string;
    };
}

export class SchedulerTZModel {
    // tslint:disable-next-line: variable-name
    stg_id: number;
    name: string;
}
