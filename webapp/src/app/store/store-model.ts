import { NzUploadFile } from 'ng-zorro-antd'
export interface IApiData {
    key: string,
    data: any
  }
export interface ICommInboxCount {
    draftCommCount: number,
    jobCommCount: number,
    userCommCount: number
}

export interface IPriviledge {
    FunctionId: number,
    View: boolean,
    Add: boolean,
    Update: boolean,
    Delete: boolean,
    Special: boolean
}

export interface ICommResponse {
    CommId: string,
    CommItemId?: string,
    CompanyId: string,
    FromPersonnelId: string,
    Message: string,
    JobNumber: string,
    Recipients: string[],
    Files?: any[],

}
export interface IRecipient {
    PersonnelId: string,
    Company: string,
    Name: string,
    Email?: string,
    To?: boolean
}
export interface ICommAttachment {
    JobNumber: string
    AttachmentId?: string,
    CommItemId: string,
    CompanyId?: string,
    FileName?: string,
    FilePath?: string,
    ExpiryDate?: Date,
    GroupId: number,
    CommId: string,
    File?: any,
    FileId?: string
    Files?: NzUploadFile[]
}

export  interface ICommItemInput {
    Send?: boolean
    CommId: string,
    CommItemId: string,
    EmailTemplateId: string,
    CompanyId: string,
    ProjectId: string,
    ImpactDays?: number,
    InitiatedBy: string,
    DueDate?: Date,
    ApprovalRequired?: boolean,
    ApprovalRequiredBy?: string,
    FromPersonnelId: string,
    FromCompanyId: string,
    InitiatedOn?: Date,
    AssignedToPersonnelId?: string,
    Subject: string,
    Message: string,
    Private: boolean,
    Recipients: IRecipient[],
    AckRequired?: boolean,
    Messaging: number
    MessagingAbbr?: string
}

export interface ICommDetailOutput {
    comm: ICommOutput,
    items: ICommItemListOutput[]
}
export interface ICommItemListOutput {
     CommItemId:  string,
     CreatedBy:  string,
     CreatedOn:  string,
     FromPersonnelId:  string,
     ItemNumber: string,
     Message: string,
     Private: string,
     CreateByName: string,
     FromName: string,
     AttachmentId: string,
     FileName: string,
     FilePath: string,
     ExpiryDate: string,
     Attachments?: ICommAttachment[],
     Recipients?: IRecipient[],
     owner?: string
}
export interface ICommOutput {
    CreatedBy: string
    CommId: string,
    CommNumber: string,
    CommStatus: string,
    CommType: string,
    DueDate: string,
    ImpactAmount: string,
    ImpactDays: string,
    Private: string,
    Subject: string,
    AssignedToPersonnelid: string,
    AssignedToName: string,
    Initiated: string,
    InitiatedOn: Date,
    ICommOutput: string,
    InitiatedBy?: string
}
export interface ICommItemOutput {
    commItem: ICommItem,
    attachments: ICommAttachment[]
}
export interface ICommItem {
    ItemNumber?: string,
    CommId?: string,
    CommItemId?: string,
    Draft?: boolean,
    Message?: string,
    Private?: boolean,
    CreatedBy?: string,
    CreatedOn?: Date,
    FromPersonnelId?: string,
    InitiatedBy?: string,
    InitiatedOn?: Date,
    Subject?: string,
    SiteName?: string,
    SiteId?: string,
    EmailTemplateId?: string,
    TemplateName?: string,
    TOList?: IRecipient[],
    CCList?: IRecipient[],
    FromName?: string,
}

export interface ICommunication {
    ApprovalRequired: boolean,
    ApprovalRequiredBy: string,
    ApprovedBy: string,
    ApprovedOn: Date,
    AssignedToPersonnelid: string,
    ClosedBy: string,
    ClosedOn: Date,
    CommId: string,
    CommItems: [],
    CommNumber: string,
    CommStatusId: number,
    CommTypeId: number,
    CommunicationStatu: string,
    CommunicationType: string,
    CompanyId: string,
    CostCentre: string,
    CreatedBy: string,
    CreatedByCompanyId: string,
    CreatedOn: Date,
    DueDate: Date,
    ImpactAmount: number,
    ImpactDays: number,
    InitiatedBy: string,
    InitiatedOn: Date,
    Private: boolean,
    ProjectId: string,
    RelatedId: string,
    SeqNumber: string,
    Subject: string,
}

export interface ICommItemDraftForProjectInput {
    ProjectId: string,
    CommId: string,
    BulkEmail: boolean,
    UserName: string,
    CompanyId: string,
    PersonnelId: string,
    Messaging: number
}

export interface ICommItemDraftForProjectResult {
    commItem: ICommItem
}
export interface ISearchContactResult {
    data: ISearchContactOutput[]
}
export interface ISearchContactOutput {
    Id: string,
    Name: string,
    CompanyName: string
}
export interface IMessageInfo {
    AckRequired: boolean,
    ApprovalRequired: boolean,
    Approved: boolean,
    ApprovedBy: string,
    AssignedToName: string,
    AssignedToPersonnelid: string,
    AttCount: number,
    CommStatus: string,
    CreatedBy: string,
    CreatedOn: Date,
    DueDate: Date,
    EmailStatus: string,
    FromCompanyId: string,
    FromCompanyName: string,
    FromName: string,
    Number: string,
    Id: string,
    Private: boolean,
    SentDateTime: Date,
    Subject: string,
    CommTypeAbbr: string,
    CommTypeId: number,
    Draft: boolean
}
export interface ListSearchResult {
    list: any[]
    total: number
  }
