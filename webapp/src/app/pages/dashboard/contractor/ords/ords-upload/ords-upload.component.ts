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
import { jwtAuthService } from 'src/app/services/jwt'
import { IUploadItem, IUploadLocation } from '../../../model/docs'
import { IUploadedOrderAttachmentFiles } from '../../../model/orders'

@Component({
  selector: 'app-ords-upload',
  templateUrl: './ords-upload.component.html',
  styleUrls: ['./ords-upload.component.scss'],
})
export class OrdsUploadComponent {
  @Input() ownerIdInput: string
  @Input() jobId: string
  @Input() orderId: string
  @Input() miscAttachment: boolean
  @Input() showSelectOrderInput: boolean

  @ViewChild('fileInput', { static: false }) fileInput: ElementRef<HTMLInputElement>

  uploadItems: IUploadItem[] = []

  loading: boolean
  uploadLocation: IUploadLocation
  uploadedFiles: IUploadedOrderAttachmentFiles[] = []

  @Output() uploadOutput = new EventEmitter()

  constructor(private apiService: jwtAuthService) {}

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
    if (files.length > 0) {
      this.onSelected(files)
    }
  }

  showFileDialog() {
    this.fileInput.nativeElement.click()
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
    this.startUpload()
  }

  startUpload() {
    this.loading = true

    const subs = this.apiService
      .getOrderUploadAttachmentLocation(this.ownerIdInput, this.jobId, this.orderId)
      .subscribe(
        response => {
          this.uploadLocation = response
          switch (this.uploadLocation.ImageLocation) {
            case 3:
              this.postLocalFile()
              break
            case 4:
              this.postAzureFile()
              break
          }
          subs.unsubscribe()
        },
        error => {
          this.reset()
          this.apiService.validateError(error)
        },
      )
  }

  postLocalFile() {
    this.uploadItems.forEach(x => this.localUploadFile(x))
    this.reset()
  }

  localUploadFile(uploadItem: IUploadItem) {
    const subs = this.apiService
      .postOrderAttachmentFile(
        uploadItem.File,
        uploadItem.Id,
        this.jobId,
        this.orderId,
        this.miscAttachment,
      )
      .subscribe(
        response => {
          this.uploadOutput.emit(response)
          subs.unsubscribe()
        },
        error => {
          this.apiService.validateError(error)
        },
      )
  }

  async postAzureFile() {
    const blobServiceClient = new BlobServiceClient(
      this.uploadLocation.AzureData.BlobEndpoint + '?' + this.uploadLocation.AzureData.SasToken,
    )
    const containerClient = blobServiceClient.getContainerClient(
      this.uploadLocation.AzureData.Container,
    )
    const containerExists = await containerClient.exists()
    if (!containerExists) {
      await containerClient.createIfNotExists()
    }
    this.uploadItems.forEach(x => this.azureUploadFile(containerClient, x))
  }

  async azureUploadFile(containerClient: ContainerClient, uploadItem: IUploadItem) {
    try {
      uploadItem.Status = -1
      const blockBlobClient = containerClient.getBlockBlobClient(uploadItem.Id)
      await blockBlobClient.uploadData(uploadItem.File)
      uploadItem.Status = 1
      this.uploadedFiles.push({
        OrderAttachmentId: uploadItem.Id,
        FileName: uploadItem.File.name,
        ImageLength: uploadItem.File.size,
      })
      this.checkIfDone()
    } catch (error) {
      uploadItem.Status = 3
      uploadItem.Error = error.message
      this.checkIfDone()
    }
  }

  checkIfDone() {
    if (!this.uploadItems.some(x => x.Status == -1)) {
      if (this.uploadedFiles.length > 0) {
        const subs = this.apiService
          .azureUploadOrderAttachmentDetails(
            this.uploadLocation.AzureData.Container,
            this.uploadedFiles,
            this.jobId,
            this.orderId,
            this.miscAttachment,
          )
          .subscribe(
            response => {
              this.reset()
              this.uploadOutput.emit(response)
              subs.unsubscribe()
            },
            error => {
              this.reset()
              this.apiService.validateError(error)
            },
          )
      }
    }
  }

  reset() {
    this.uploadItems = []
    this.uploadedFiles = []
    this.loading = false
  }
}
