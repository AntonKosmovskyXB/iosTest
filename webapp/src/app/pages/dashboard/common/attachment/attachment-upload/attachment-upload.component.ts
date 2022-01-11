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
import { IUploadedAttachmentFiles } from '../../../model/attachment'
import { IUploadItem, IUploadLocation } from '../../../model/docs'

const INCIDENT_PHOTOS = 30

@Component({
  selector: 'app-attachment-upload',
  templateUrl: './attachment-upload.component.html',
  styleUrls: ['./attachment-upload.component.scss'],
})
export class AttachmentUploadComponent {
  @Input() ownerIdInput: string
  @Input() groupIdInput: number
  @Input() relatedIdInput: string
  @Input() principalCompanyIdInput: string

  @ViewChild('fileInput', { static: false }) fileInput: ElementRef<HTMLInputElement>

  uploadItems: IUploadItem[] = []

  loading: boolean
  uploadLocation: IUploadLocation
  uploadedFiles: IUploadedAttachmentFiles[] = []

  @Output() singleUploadOutput = new EventEmitter()
  @Output() multipleUploadOutput = new EventEmitter()

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
      if (this.IsPhotos) {
        if (files[i].type.includes('image/')) {
          this.uploadItems.push({
            Id: this.apiService.Guid,
            File: files[i],
            Status: 0,
            Error: null,
          })
        }
      } else {
        this.uploadItems.push({
          Id: this.apiService.Guid,
          File: files[i],
          Status: 0,
          Error: null,
        })
      }
    }
    if (this.uploadItems.length > 0) {
      this.startUpload()
    }
  }

  startUpload() {
    this.loading = true
    const subs = this.apiService
      .getUploadAttachmentLocation(this.ownerIdInput, this.groupIdInput, this.relatedIdInput)
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
      .postAttachmentFile(
        uploadItem.File,
        uploadItem.Id,
        this.groupIdInput,
        this.relatedIdInput,
        this.principalCompanyIdInput,
      )
      .subscribe(
        response => {
          this.singleUploadOutput.emit(response)
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
        AttachmentId: uploadItem.Id,
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
          .azureUploadAttachmentDetails(
            this.uploadLocation.AzureData.Container,
            this.uploadedFiles,
            this.groupIdInput,
            this.relatedIdInput,
            this.principalCompanyIdInput,
          )
          .subscribe(
            response => {
              this.reset()
              this.multipleUploadOutput.emit(response)
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

  get accept() {
    return this.IsPhotos ? 'image/*' : ''
  }

  get IsPhotos() {
    return this.groupIdInput == INCIDENT_PHOTOS
  }
}
