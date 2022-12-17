import { Pipe, PipeTransform } from '@angular/core';
// @ts-ignore
import moment from 'moment';

@Pipe({
  name: 'humanReadableRate'
})
export class HumanReadableRatePipe implements PipeTransform {

  transform(value: any): any {
    // console.log(value); 
    // console.log(moment.unix(value).format("YYYY-MM-DD HH:mm:ss"));
    return moment.unix(value).format("YYYY-MM-DD HH:mm:ss");
  }

}
