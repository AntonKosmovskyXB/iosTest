import { DecimalPipe } from '@angular/common'
import { Component, Input, OnChanges, QueryList, ViewChildren } from '@angular/core'
import { Router } from '@angular/router'
import { NzModalService } from 'ng-zorro-antd'
import { Observable, Subject } from 'rxjs'
import { NgbdSortableHeader, SortEvent } from 'src/app/helper/sortable.directive'
import { jwtAuthService } from 'src/app/services/jwt'
import { StoreService } from 'src/app/services/store/store.service'
import { IAttachments } from '../../../model/attachment'
import { IDocumentDetails } from '../../../model/documentDetails'
import { IListStatus } from '../../../model/models'
import { AttachmentsSearchService } from './attachments.service'

@Component({
  selector: 'app-attachments',
  templateUrl: './attachments.component.html',
  providers: [AttachmentsSearchService, DecimalPipe],
})
export class AttachmentsComponent implements OnChanges {
  @Input() isModalInput: boolean
  @Input() groupIdInput: number
  @Input() relatedIdInput: string
  @Input() jobIdInput: string
  @Input() isReadOnlyInput: boolean

  personnelId = this.store.UserInfo.PersonnelId

  isShowNoteModal: boolean
  isSelectDocumentModalVisible: boolean
  attachmentId: string
  note: string

  totalSize: number

  attachments$: Observable<IAttachments[]>

  listStatus = new Subject<IListStatus>()

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>

  selectedDocSubject = new Subject<IDocumentDetails>()

  constructor(
    private apiService: jwtAuthService,
    private store: StoreService,
    public service: AttachmentsSearchService,
    private modal: NzModalService,
    private router: Router,
  ) {}

  ngOnChanges(): void {
    const subs = this.apiService.getAttachments(this.groupIdInput, this.relatedIdInput).subscribe(
      response => {
        this.refreshTable(response)
        subs.unsubscribe()
      },
      error => {
        this.listStatus.next({
          count: 0,
          loading: false,
        })
        this.apiService.validateError(error)
      },
    )
  }

  get IsShowPaging() {
    return this.service.Source.length > 10
  }

  refreshTable(list: IAttachments[]) {
    this.listStatus.next({
      count: list.length,
      loading: false,
    })
    this.initialiseList(list)
  }

  initialiseList(list: IAttachments[]) {
    this.service.Source = list
    this.attachments$ = this.service.list$
    this.service.initService()

    if (!this.IsShowNote) {
      if (list.some(x => !x.Size)) {
        this.totalSize = 0
      } else {
        let total = 0
        list.forEach(x => {
          total = x.Size + total
        })
        this.totalSize = total / 1024
      }
    }
  }

  isNote(fileName: string): boolean {
    return fileName == 'Note'
  }

  getIcon(fileName: string): string {
    if (this.isNote(fileName)) {
      return ''
    }

    let icon: string

    const fileExtension = fileName.split('.').pop()
    switch (fileExtension) {
      case 'xlsx':
      case 'xls':
        icon = 'xls_file.png'
        break
      case 'docx':
      case 'doc':
        icon = 'doc_file.png'
        break
      case 'pdf':
        icon = 'pdf_file.png'
        break
      case 'png':
      case 'jpeg':
      case 'jpg':
      case 'gif':
      case 'tif':
      case 'bmp':
        icon = 'pic_file.png'
        break
      default:
        icon = 'txt_file.png'
    }

    return `assets/images/${icon}`
  }

  getSize(item: IAttachments): string {
    if (this.isNote(item.FileName) || !item.Size) {
      return ''
    }

    return `${(item.Size / 1024).toFixed(0)} kb`
  }

  isShowEdit(createdBy: string) {
    return createdBy == this.personnelId && this.groupIdInput != 12
  }

  singleUploadEmitter(item: IAttachments) {
    const list = this.service.Source
    list.unshift(item)
    this.refreshTable(list)
  }

  getAttachmentUrl(attachmentId: string, download: boolean) {
    let url = this.apiService.getAttachmentUrl(attachmentId)

    if (this.groupIdInput == 13 || this.groupIdInput == 0) {
      url = this.apiService.getCommEmailAttachmentUrl(attachmentId)
    }

    const subs = url.subscribe(
      resp => {
        subs.unsubscribe()
        if (download) {
          window.open(resp.Url)
        } else {
          this.selectedDocSubject.next(resp)
        }
      },
      error => {
        this.apiService.validateError(error)
      },
    )
  }

  get NoteTitle(): string {
    return `${this.attachmentId ? 'Edit' : 'Add'} Note`
  }

  showNoteModal(item: IAttachments) {
    if (item) {
      this.attachmentId = item.AttachmentId
      this.note = item.Note
    } else {
      this.attachmentId = null
      this.note = null
    }
    this.isShowNoteModal = true
  }

  cancelNoteModal() {
    this.isShowNoteModal = false
  }

  saveNote() {
    if (this.attachmentId) {
      this.patchNote()
    } else {
      this.postNote()
    }
  }

  postNote() {
    const subs = this.apiService
      .postAttachmentNote(this.groupIdInput, this.relatedIdInput, this.note)
      .subscribe(
        resp => {
          const list = this.service.Source
          list.unshift(resp)
          this.refreshTable(list)
          subs.unsubscribe()
        },
        error => {
          this.apiService.validateError(error)
        },
      )
    this.cancelNoteModal()
  }

  patchNote() {
    const subs = this.apiService.patchAttachment(this.attachmentId, this.note).subscribe(
      () => {
        const index = this.service.Source.findIndex(x => x.AttachmentId == this.attachmentId)
        this.service.Source[index].Note = this.note
        subs.unsubscribe()
      },
      error => {
        this.apiService.validateError(error)
      },
    )
    this.cancelNoteModal()
  }

  deleteAttachment(attachmentId: string) {
    this.modal.confirm({
      nzTitle: 'Confirm Delete',
      nzContent: 'Are you sure?',
      nzOnOk: () => {
        let url = this.apiService.deleteAttachment(attachmentId)

        if (this.groupIdInput == 13) {
          url = this.apiService.deleteCommEmailAttachment(this.relatedIdInput, this.attachmentId)
        }

        const subs = url.subscribe(
          () => {
            let list = this.service.Source
            list = list.filter(x => x.AttachmentId !== attachmentId)
            this.refreshTable(list)
            subs.unsubscribe()
          },
          error => {
            this.apiService.validateError(error)
          },
        )
      },
    })
  }

  selectDocument() {
    if (this.isModalInput) {
      this.setSelectDocumentModalVisible(true)
    } else {
      this.router.navigate([
        '/home/job-detail/project-email/project-email-documents/',
        this.relatedIdInput,
        this.JobId,
      ])
    }
  }

  setSelectDocumentModalVisible(value: boolean) {
    this.isSelectDocumentModalVisible = value
  }

  emailDocsEmitter() {
    this.setSelectDocumentModalVisible(false)
    this.ngOnChanges()
  }

  onSort({ column, direction }: SortEvent) {
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = ''
      }
    })
    this.service.sortColumn = column
    this.service.sortDirection = direction
  }

  get IsShowNote() {
    if (this.isReadOnlyInput) {
      return false
    }
    switch (this.groupIdInput) {
      case 12:
      case 13:
      case 30:
        return false
      default:
        return true
    }
  }

  get IsShowFooter() {
    switch (this.groupIdInput) {
      case 12:
      case 13:
        return true
      default:
        return false
    }
  }

  get IsShowSelectDocument() {
    return this.groupIdInput == 13
  }

  get title() {
    return this.groupIdInput == 30 ? 'Photos' : 'Attachments'
  }

  get JobId() {
    return this.jobIdInput ?? ''
  }
}
