import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'getFullName'})
export class GetFullName implements PipeTransform {
  transform(fName: string, mName: string, lName: string): string {
    const fullname = ((fName === '' ? '' : fName) + (mName === '' ? ' ' : (' ' + mName)) + (lName === '' ? ' ' : (' ' + lName))).trim();
    return fullname;
  }
}
