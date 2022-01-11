export interface IAttachments extends IPatchAttachment {
  FileName: string
  CreatedBy: string
  CreatedOn: string
  CreatedByName: string
  Size: number
}

export interface IPatchAttachment {
  AttachmentId: string
  Note: string
}

export interface IUploadedAttachmentFiles {
  AttachmentId: string
  FileName: string
  ImageLength: number
}
