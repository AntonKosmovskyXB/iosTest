import { PipeTransform, Pipe } from '@angular/core'

@Pipe({ name: 'inductionIcon' })
export class InductionIconPipe implements PipeTransform {
  constructor() {}
  transform(status: number): string {
    switch (status) {
      case 1:
        return 'assets/images/sign_tick.png'
      case 2:
        return 'assets/images/sign_warning.png'
      case 3:
        return 'assets/images/sign_warn.png'
      default:
        return 'assets/images/blank.png'
    }
  }
}
