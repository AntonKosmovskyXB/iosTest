import { Injectable } from '@angular/core'
import { BaseListService } from 'src/app/services/list/base-list-service'
import { IAttachments } from '../../../model/attachment'

@Injectable({
  providedIn: 'root',
})
export class AttachmentsSearchService extends BaseListService {
  _matches(data: IAttachments, term: string) {
    return (
      data?.FileName?.toLowerCase().includes(term.toLowerCase()) ||
      data?.Note?.toLowerCase().includes(term.toLowerCase()) ||
      data?.CreatedByName?.toLowerCase().includes(term.toLowerCase())
    )
  }
}
