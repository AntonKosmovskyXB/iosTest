import { IPriviledge } from 'src/app/store/store-model'

export interface IMenuItem {
  id?: number
  title: string
  key?: string
  icon: string
  url: string
  keyList?: string[]
}

export interface IProfile {
  Name?: string
  Company?: string
  PersonnelId?: string
  FirstName: string
  LastName: string
  Phone: string
  Email?: string
  IsDirty?: boolean
  SiteCode?: string
  DeviceId?: string
  platform?: string
  AppVersionNumber?: string
  FirebaseToken?: string
  SmsCode?: string
}

export interface IUser {
  userInfo: IUserInfo
  companyInfo: ICompanyInfo
}

export interface IUserInfo {
  PersonnelId?: string
  FirstName?: string
  LastName?: string
  Email?: string
  Phone?: string
  Position?: string
  CompanyId?: string
  CompanyName?: string
  BusinessName?: string
  UserId?: string
  Token?: string
  RefreshToken?: string
  Subscriber?: boolean
  ApiBaseUrl?: string
  AllowUpdates?: boolean
  ShowControlCentre?: boolean
  AllowTimeSheetEdit?: boolean
  EmergencyContactName?: string
  EmergencyContactPhone?: string
  EmergencyContactRelation?: string
  MedicalNotes?: string
  SiteManager?: boolean
  ShowWorkingAlone?: boolean
  MaximumCheckInPeriod?: number
  MonitorLocation?: boolean
  MonitorFalls?: boolean
  Street?: string
  City?: string
  PostCode?: string
  State?: string
  SuperUser?: boolean
  Role?: string
  TradeTypeId?: string
  RoleId?: string
  AccessControlList?: IPriviledge[]
  ShowMySubscription?: boolean
  ContactFlags?: IContactFlags
  AdvanceEditor?: boolean
  ShowMedicalNotes?: boolean
}

export interface IContactFlags {
  Active: boolean
  Client: boolean
  PCBU: boolean
  Supplier: boolean
  TenderContact: boolean
  Worker: boolean
  Resource: boolean
  Favorite: boolean
}

export interface ICompanyInfo {
  companyInfo?: ICompanyDetails
}

export interface ICompanyDetails {
  CompanyName?: string
  ShowTimeSheetChargeCode?: boolean
  ShowTimeSheetCode?: boolean
  TimeSheetChargeCodeLabel?: string
  TimeSheetCodeLabel?: string
  ShowTimeSheetBillable?: boolean
  MaxPhotoPixels?: number
  ShowJobNumber?: boolean
  ProjectPlanner?: boolean
  TemplateSiteId?: string
  ShowIncidentControlType?: boolean
  ShowIncidentPrevent?: boolean
  SiteBookWorkOrders?: boolean
}

export interface IListStatus {
  loading: boolean
  count: number
}

export interface IServerPagingResult {
  list: any[]
  count: number
}