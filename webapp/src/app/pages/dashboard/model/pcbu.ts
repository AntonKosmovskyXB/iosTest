import { IServerPagingResult } from './models'

export interface IPcbuCheckList {
  Config: IPcbuConfig
  Header: IPcbuHeader
  Items: IPcbuItems[]
  Instruction: string
}

export interface IPcbuConfig {
  ShareProgramGantt: boolean
  ShareContractorTasksGantt: boolean
}

export interface IPcbuHeader {
  JobId: string
  TaskId: string
  ContractorCompanyId: string
  Contractor: string
  Contact: string
  SiteId: string
  SiteName: string
  SiteLocation: string
  PrincipalCompanyId: string
  Principal: string
}

export interface IPcbuItems {
  Sequence: number
  Status: number
  Title: string
  Type: number
  Message: string
}

export interface IPcbuDocumentsConfig {
  ShowUploadDocument: boolean
  ShowSelectDocument: boolean
  ShowNotApplicable: boolean
}

export interface IPcbuSubcontractors extends IPcbuSubcontractorData {
  Title: string
  Header: IPcbuHeader
  Instruction: string
  SubcontractorList: IPcbuSubcontractorItem[]
}

export interface IPcbuSubcontractorData {
  UsingSubcontractors: string
  Status: number
}

export interface IPcbuSubcontractorItem {
  JobId: string
  CompanyName: string
  InductionSetupOn: string
  EmailStatus: string
  EmailSent: string
  DocCount: number
  PersonnelCount: number
  ActionItemCount: number
  InductionErrorCount: number
  InductionWarnCount: number
  LinkOpenedCount: number
  SupplierOnly: boolean
  Status: number
  StatusMessage: string
  EmailStatusNo: number
}

export interface IPcbuPlant {
  AssetId: string
  AssetName: string
  SerialNumber: string
  AssetTypeName: string
  AssetTypeID: string
  JobId: string
  JobAssetId: string
  ReviewedByName: string
  ReviewStatus: number
  ReviewedOn: string
  ReviewedBy: string
  RegistrationNumber: string
  AssetDescription: string
  AssetNumber: string
  ReviewCheckListId: string
}

export interface IPcbuJob {
  JobId: string
  SiteName: string
  SiteLocation: string
  PrincipalContractor: string
  SiteId: string
  Contractor: string
  StartTime: string
  TaskId: string
  ProjectNumber: string
  TaskStatus: number
  SafetyStatus: number
  ShowCheckList: boolean
}

export interface IPcbuJobList extends IServerPagingResult {
  principalContractorList: IPcbuPrincipalContractor[]
}

export interface IPcbuPrincipalContractor {
  ClientCompanyId: string
  PrincipalContractor: string
}
