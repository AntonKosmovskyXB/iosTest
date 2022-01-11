import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core'
import { Observable, Subscription } from 'rxjs'
import { Lightbox } from 'ngx-lightbox/lightbox.service'
import { IDocumentDetails } from 'src/app/pages/dashboard/model/documentDetails'

const OTHERS = 0
const WEB = 1
const IMAGE = 2
const VIDEO = 3
const TXT = 4
const PDF = 5
const OFFICE = 6

@Component({
  selector: 'app-document-viewer',
  templateUrl: './document-viewer.component.html',
  styleUrls: ['./document-viewer.component.scss'],
})
export class DocumentViewerComponent implements OnInit, OnDestroy {
  @Input() documentSelectEvent: Observable<IDocumentDetails>
  @Output() documentDownlodOutput = new EventEmitter()

  private eventsSubscription: Subscription
  content: IDocumentDetails
  isVisible: boolean
  loading: boolean
  contentType: number
  txtContent: string

  constructor(private lightbox: Lightbox) {}

  ngOnInit(): void {
    this.eventsSubscription = this.documentSelectEvent.subscribe(doc => this.viewDocument(doc))
  }

  ngOnDestroy(): void {
    this.eventsSubscription.unsubscribe()
  }

  viewDocument(content: IDocumentDetails) {
    this.content = content
    this.isVisible = false
    this.loading = true

    if (this.isWebContent(this.content.FileName)) {
      this.contentType = WEB
    } else if (this.isImageContent(this.content.FileName)) {
      this.contentType = IMAGE
    } else if (this.isVideoContent(this.content.FileName)) {
      this.contentType = VIDEO
    } else if (this.isTxtContent(this.content.FileName)) {
      this.contentType = TXT
      fetch(this.content.Url)
        .then(response => response.text())
        .then(data => {
          this.txtContent = data
          this.finishLoading()
        })
    } else if (this.isPdfContent(this.content.FileName)) {
      this.contentType = PDF
    } else if (this.isOfficeContent(this.content.FileName)) {
      this.contentType = OFFICE
    } else {
      this.contentType = OTHERS
    }

    if (this.IsImage) {
      this.lightbox.open([
        {
          thumb: this.content.Url,
          src: this.content.Url,
          caption: this.content.FileName,
        },
      ])
      this.finishLoading()
    } else if (this.IsOthers) {
      window.open(this.content.Url)
      this.finishLoading()
    } else {
      this.isVisible = true
      if (!this.IsPdf && !this.IsTxt) {
        this.finishLoading()
      }
    }
  }

  isWebContent(fileName: string) {
    return !fileName
  }

  isImageContent(fileName: string) {
    const reg: RegExp = new RegExp(/\.(png|jpeg|jpg|gif|tif|bmp)$/i)
    const result = reg.test(fileName)
    return result
  }

  isVideoContent(fileName: string): boolean {
    const reg: RegExp = new RegExp(/\.(mpeg|mp4|avi|mpg)$/i)
    const result = reg.test(fileName)
    return result
  }

  isTxtContent(fileName: string): boolean {
    return fileName.split('.').pop() == 'txt'
  }

  isPdfContent(fileName: string): boolean {
    return fileName.split('.').pop() == 'pdf'
  }

  isOfficeContent(fileName: string): boolean {
    const reg: RegExp = new RegExp(/\.(doc|docx|xls|xlsx|ppt|pptx)$/i)
    const result = reg.test(fileName)
    return result
  }

  get IsWeb(): boolean {
    return this.contentType == WEB
  }

  get IsImage(): boolean {
    return this.contentType == IMAGE
  }

  get IsVideo(): boolean {
    return this.contentType == VIDEO
  }

  get IsTxt(): boolean {
    return this.contentType == TXT
  }

  get IsPdf(): boolean {
    return this.contentType == PDF
  }

  get IsOffice(): boolean {
    return this.contentType == OFFICE
  }

  get IsOthers(): boolean {
    return this.contentType == OTHERS
  }

  finishLoading() {
    this.loading = false
  }

  download() {
    window.open(this.content.Url)
    this.documentDownlodOutput.emit(this.content.Id)
  }

  cancel() {
    this.isVisible = false
  }
}
