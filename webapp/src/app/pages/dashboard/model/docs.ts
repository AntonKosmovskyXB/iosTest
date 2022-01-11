import { IAzureData } from './azure'

export interface IUploadItem extends IItem {
  File: File
}

export interface IDownloadItem extends IItem {
  FileName: string
  ImageLocation: number
  Container: string
}

export interface IItem {
  Id: string
  Status: number
  Error: string
}

export interface IUploadLocation {
  ImageLocation: number
  AzureData: IAzureData
}

export interface IUploadedFiles {
  DocumentId: string
  FileName: string
  ImageLength: number
}

export interface IDocumentCmd {
  OwnerId: string
  DocumentGroupId: string
  Number: string
  Revision: string
  RevisionDate: string
  ForAllPersonnel: boolean
  Induction: boolean
  isTemplate: boolean
  FolderId: string
  DocumentStatusId: number
  ImageLocation: number
  Container: string
}

export interface IUploadCmd extends IDocumentCmd {
  SiteId: string
  AssetId: string
  UploadedFiles: IUploadedFiles[]
}

export interface IPatchDocument extends IDocumentCmd {
  DocumentId: string
  Title: string
  Current: string
  Revise: boolean
  UploadedFile: IUploadedFiles
}

export interface IDocument extends IPatchDocument {
  SiteId: string
  ImageLocation: number
  Container: string
}
