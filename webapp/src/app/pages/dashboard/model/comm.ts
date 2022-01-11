import { IAttachments } from './attachment'

export interface ICommContractor {
  JobId: string
  CompanyId: string
  CompanyName: string
  PersonnelId: string
  Name: string
  Email: string
  EmailStatus: string
  EmailSent: string
  StartDate: string
  Checked?: boolean
}

export class ICommItemDto {
  CommItemId: string
  CommId: string
  ItemNumber: string
  CreatedBy: string
  CreatedOn: string
  FromPersonnelId: string
  Message: string
  Draft: string
  FromName: string
  CommTypeId: number
  CommType: string
  CommTypeAbbr: string
  CompanyId: string
  EmailTemplateId: string
  BulkEmail: boolean
  Subject: string
  ProjectId: string
  FromCompanyId: string
  CommStatusId: number
}

export class PatchDraftCmd {
  CommId: string
  CommItemId: string
  EmailTemplateId: string
  FromPersonnelId: string
  FromCompanyId: string
  Subject: string
  Message: string
}

export class ICommItemToDto {
  CommItemToId: string
  Name: string
  CompanyName: string
  EmailAddress: string
  TO: boolean
  CC: boolean
}

export class ICommEmailDraft {
  commItemEdit: ICommItemDto
  commItemToes: ICommItemToDto[]
  commItemAttachmentDto: ICommAttachment[]
}

export class IEmailTo {
  PersonnelId: string
  CompanyId: string
}

export interface ICommNewEmailDraft {
  RelatedId: string
  EmailTemplateId: string
  PersonnelIds: IEmailTo[]
  CommId: string,
  CommType: number
}

export interface ICommContact {
  Name: string
  CompanyName: string
  Email: string
  Position: string
  Phone: string
  PersonnelId: string
  Checked: boolean
  Contact: number
  CompanyId: string
}

export interface ICommAttachment {
  DocumentId: string
  FileName: string
  ImageLength: number
  RevisionDate: string
}

export interface ICommDraft {
  CommId: string
  Number: string
  Subject: string
  CommTypeAbbr: string
}

export interface CommAttachedDocCmd {
  CommItemId: string
  DocumentIds: string[]
}

export interface CommDocuments {
  DocumentId: string
  Title: string
  Numbe: string
  Revision: string
  Current: boolean
  GroupAbbr: string
  CommItemId: string
  isSelected: number
}
