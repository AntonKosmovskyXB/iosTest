import { Injectable } from '@angular/core'
import { BaseListService } from 'src/app/services/list/base-list-service'

@Injectable({
  providedIn: 'root',
})
export class ProjectListSearchService extends BaseListService {
  _matches(data: any, term: string) {
    return (
      data?.JobNumber?.toLowerCase().includes(term.toLowerCase()) ||
      data?.SiteName?.toLowerCase().includes(term.toLowerCase()) ||
      data?.SiteLocation?.toLowerCase().includes(term.toLowerCase()) ||
      data?.SiteCode?.toLowerCase().includes(term.toLowerCase())
    )
  }
}
