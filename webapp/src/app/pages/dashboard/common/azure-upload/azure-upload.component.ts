import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core'
import { BlobServiceClient, ContainerClient } from '@azure/storage-blob'
import { NzNotificationService } from 'ng-zorro-antd'
import { jwtAuthService } from 'src/app/services/jwt'
import { IUploadItem, IUploadLocation } from '../../model/docs'

@Component({
  selector: 'app-azure-upload',
  templateUrl: './azure-upload.component.html',
  styleUrls: ['./azure-upload.component.scss'],
})
export class AzureUploadComponent {
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef<HTMLInputElement>

  isUploading: boolean
  uploadItems: IUploadItem[] = []

  @Input() isAllowMultipleInput: boolean
  @Input() tenderProjectIdInput: string
  @Input() ownerIdInput: string
  @Output() uploadLocationOutput = new EventEmitter()
  @Output() uploadOutput = new EventEmitter()

  constructor(private apiService: jwtAuthService, private notification: NzNotificationService) {}

  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault()
    evt.stopPropagation()
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault()
    evt.stopPropagation()
  }

  // Drop listener
  @HostListener('drop', ['$event']) public ondrop(evt) {
    evt.preventDefault()
    evt.stopPropagation()
    const files = evt.dataTransfer.files
    if (!(files.length > 1 && !this.isAllowMultipleInput)) {
      this.onSelected(files)
    }
  }

  onSelected(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.uploadItems.push({
        Id: this.apiService.Guid,
        File: files[i],
        Status: 0,
        Error: null,
      })
    }
  }

  unselect(uploadItem: IUploadItem) {
    this.uploadItems = this.uploadItems.filter(x => x.Id != uploadItem.Id)
  }

  showFileDialog() {
    this.fileInput.nativeElement.click()
  }

  startUpload() {
    this.isUploading = true
    const notUploadedItems = this.uploadItems.filter(x => x.Status != 1)
    if (notUploadedItems.length < 1) {
      this.isUploading = false
      this.notification.error('Upload', 'No files selected.')
      this.uploadOutput.emit({ isSuccess: false, uploadedItems: [] })
      return
    }

    const subs = this.uploadLocationUrl.subscribe(
      response => {
        this.uploadLocationOutput.emit(response)
        this.postAzureFile(notUploadedItems, response)
        subs.unsubscribe()
      },
      error => {
        this.isUploading = false
        this.apiService.validateError(error)
        this.uploadOutput.emit({ isSuccess: false, uploadedItems: [] })
      },
    )
  }

  get uploadLocationUrl() {
    return this.apiService.getUploadLocation(this.ownerIdInput)
  }

  async postAzureFile(notUploadedItems: IUploadItem[], response: IUploadLocation) {
    const blobServiceClient = new BlobServiceClient(
      response.AzureData.BlobEndpoint + '?' + response.AzureData.SasToken,
    )
    const containerClient = blobServiceClient.getContainerClient(response.AzureData.Container)
    const containerExists = await containerClient.exists()
    if (!containerExists) {
      await containerClient.createIfNotExists()
    }
    notUploadedItems.forEach(x => this.uploadFile(containerClient, x))
  }

  async uploadFile(containerClient: ContainerClient, uploadItem: IUploadItem) {
    try {
      uploadItem.Status = -1
      const blockBlobClient = containerClient.getBlockBlobClient(uploadItem.Id)
      await blockBlobClient.uploadData(uploadItem.File)
      uploadItem.Status = 1
      this.checkIfDone()
    } catch (error) {
      uploadItem.Status = 3
      uploadItem.Error = error.message
      this.checkIfDone()
    }
  }

  checkIfDone() {
    if (!this.uploadItems.some(x => x.Status == -1)) {
      this.isUploading = false
      this.uploadOutput.emit({
        isSuccess: !this.uploadItems.some(x => x.Status != 1),
        uploadedItems: this.uploadItems,
      })
    }
  }
}
