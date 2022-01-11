export interface IEmailTemplate {
  EmailTemplateId: string
  TemplateName: string
  Subject: string
  From: string
  CommTypeAbbr: string
  EmailGroup: number
  CC: string
  Message: string
  BCC: string
  IsBodyHTML: boolean
  ReplyTo: string
  Wrapper: boolean
  CcPersonnelId: string
  FromPersonnelId: string
  FromPersonnelName: string
  CcPersonnelName: string
}

export interface IEmailGroup {
  CommTypeId: number
  CommType: string
  CommTypeAbbr: string
  Sequence: number
  Active: boolean
}

export interface INotificationOptions {
  SiteId: string
  SCEmailTemplateId: string
  InductionEmailTemplateId: string
  AutoSendInductionEmails: boolean
  AutoNotifyIncident: boolean
  IncidentNotifyTemplateId: string
  TaskEmailTemplateId: string
  SubSCEmailTemplateId: string
  EmailAllWhsContacts: boolean
}
