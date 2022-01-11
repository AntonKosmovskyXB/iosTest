import { IPcbuHeader } from './pcbu'

export interface IOrders {
  OrderAttachmentId: string
  OrderId: string
  JobId: string
  FileName: string
  Note: string
  AcceptedOn: string
  AcceptedByName: string
  MiscAttachment: boolean
  Status: number
  MasterDoc: boolean
  Active: boolean
  ApprovedByName: string
  ApprovedOn: string
  OrderType: number
  RequireSmsAuth: boolean
  RequireSignedCopy: boolean
  ShowDetailsButton: boolean
  OrderStatusId: number
}

export interface IOrdersDetailDto {
  SupplierOnly: boolean
  PoSafetyFirst: boolean
  ToContactPID: string
  ToCompanyId: string
  ShowSelectOrder: string
}

export interface IOrdersDto {
  Header: IPcbuHeader
  List: IOrders[]
  Details: IOrdersDetailDto
}

export interface IUploadedOrderAttachmentFiles {
  OrderAttachmentId: string
  FileName: string
  ImageLength: number
}

export interface IOrderStatusList {
  OrderStatusId: number
  Status: number
}

export interface IOrders {
  OrderId: string
  OrderNumber: string
  OrderDate: string
  SiteName: string
  CompanyName: string
  Packages: string
  Type: string
  TotalExGST: number
  OrderStatusId: number
  Status: number
  OrderType: number
}

export interface IOrderSelectProject {
  SiteName: string
  ShowNextOrderNumber: boolean
}

export interface IOrderHeader {
  OrderNumber: string
  OrderStatusId: number
  SiteName: string
  SiteLocation: string
  ProjectId: string
  JobId: string
  Status: number
  OrderType: number
}

export interface IPurchaseOrderDetails extends ICommonOrderDetails {
  TaxCode: string
  OrderNotes: string
  OrderItems: IOrderItems[]
}

export interface IOrderItems {
  OrderItemId: string
  Description: string
  Quantity: number
  Amount: number
}

export interface IOrderAmounts {
  TotalExGST: number
  GSTAmount: number
  TotalAmount: number
}

export interface IOrderDetails {
  PurchaseOrderData: IPurchaseOrderDetails
  WorkOrderData: IWorkOrderDetails
}

export interface IOrderAttachments {
  Header: IOrderHeader
  NotesToContractor: string
  MiscAttachments: IOrderMiscAttachments[]
  NonMiscAttachments: IOrderNonMiscAttachments[]
}

export interface IOrderMiscAttachments {
  OrderAttachmentId: string
  FileName: string
  OrderStatusId: number
}

export interface IOrderNonMiscAttachments extends IOrderMiscAttachments {
  Status: number
  CreatedByName: string
  CreatedOn: string
  MasterDoc: boolean
  Active: boolean
  ApprovedByName: string
  ApprovedOn: string
  AcceptedByName: string
  AcceptedOn: string
  EmailQueueId: string
}

export interface IWorkOrderDetails extends ICommonOrderDetails {
  CompanyPhone: string
  CompanyFax: string
  ScopeOfWork: string
  RequireSmsAuth: boolean
  RequireSignedCopy: boolean
  CopyScheduleFromOrderId: string
  PackageIds: string[]
  ShowContactError: boolean
  ShowDeliveryDate: boolean
  GstRate: number
}

export interface ICommonOrderDetails extends IOrderHeader, IOrderAmounts {
  ToContactPID: string
  ToCompanyName: string
  ToFirstName: string
  ToLastName: string
  OrderDate: string
  ToCompanyId: string
  CompanyStreet: string
  CompanyCity: string
  CompanyState: string
  CompanyPostCode: string
  DeliveryDate: string
  SupplierOnly: boolean
  ABN: string
  PreQualStatus: number
  Template: boolean
  TemplateDocumentId: string
}

export interface IOrderDocuments {
  Header: IOrderHeader
  list: IOrderDocument[]
  count: number
}

export interface IOrderDocument {
  DocumentId: string
  OrderDocumentId: string
  Title: string
  GroupAbbr: string
  Number: string
  Revision: string
  RevisionDate: string
  Checked: boolean
}
