import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateFormatter'
})
export class DateformatterPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return moment(value).format('ll');
  }

}
