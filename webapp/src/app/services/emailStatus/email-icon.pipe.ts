import { PipeTransform, Pipe } from '@angular/core'

@Pipe({name: 'emailIcon'})
export class EmailIconPipe implements PipeTransform {
    constructor() {}
    transform(status: number): string {
        switch (status) {
            case 0:
              return 'assets/images/email.png'
            case 1:
              return 'assets/images/email_open.png'
            case 2:
              return 'assets/images/emailError.png'
            default:
              return ''
          }
    }
  }
