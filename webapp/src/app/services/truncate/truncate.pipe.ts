import { PipeTransform, Pipe, Input } from '@angular/core'

@Pipe({name: 'truncate'})
export class TruncatePipe implements PipeTransform {
    constructor() {}
    transform(value: string, limit: number = 25) {
        return value && value.length > limit ? value.substr(0, limit) + '...' : value
    }
  }
