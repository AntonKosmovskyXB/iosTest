import { Injectable } from '@angular/core'
import { BaseListService } from '../base-list-service'

@Injectable({
  providedIn: 'root',
})
export class ServerPagingSearchService extends BaseListService {
  _matches() {
    return true
  }
}
