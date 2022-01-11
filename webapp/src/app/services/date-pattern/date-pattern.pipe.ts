import { PipeTransform, Pipe } from '@angular/core'
import { formatDate } from '@angular/common'

@Pipe({name: 'datePattern'})
export class DatePatternPipe implements PipeTransform {
    constructor() {}
    transform(date: any, pattern: string = 'dateonly', convertUtc: boolean = false): string {
        if (date) {
            if (!pattern) { return date }
            let format: string
            switch (pattern) {
                case 'dateonly':
                    format = 'dd-MMM-yy'
                    break
                case 'timeonly':
                    format = 'h:mm a'
                    break
                case 'both':
                    format = 'dd-MMM-yy h:mm a'
                    break
                default:
                    format = pattern
                    break
            }
            return convertUtc ?
            formatDate(date, format, 'en-US', 'UTC')
            :
            formatDate(date, format, 'en-US')
        }
        return date
    }
  }
