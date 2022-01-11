export interface IProjects {
  SiteId: string
  SiteName: string
  SiteLocation: string
  JobId: string
  Active: boolean
  JobNumber: string
  SiteCode: string
  SiteManagerName: string

  Checked?: boolean
}

export interface IPostProject {
  SiteId: string
  SiteName: string
  SiteLocation: string
  SiteManagerId: string
  Template: boolean
  TemplateSiteId: string
  JobNumber: string
  ProjectManagerId: string
  ProjectStartDate: string
  ContractedCompletionDate: string
  PostCode: string
  ProjectAdministratorId: string
  AllocateSiteCode: boolean
  RegionId: string
}

export interface IPatchProject extends IPostProject {
  Active: boolean
  DataOwnerCId: string
  Managed: boolean
  TenderProjectId: string
  CompanyInduction: boolean
}

export interface IProjectDetails extends IPatchProject {
  SiteCode: string
  SiteManagerName: string
  DataOwnerName: string
  ProjectManagerName: string
  ProjectAdministratorName: string
}

export interface IProjectArchive {
  SiteId: string
  SiteName: string
  SiteLocation: string
  CompanyId: string
  Active: boolean
  Managed: boolean
  JobNumber: string
  ArchiveProject: boolean
  ArchiveFileName: string
  Diary: number
  Contractors: number
  Workers: number
  Incidents: number
  MissingIncidentRptCount: number
  MissingIncidentRptCount2: number
  DeleteSite: boolean
  ArchiveStatus: string
  JobId: string
  Size: number
}

export interface IManagerOptions {
  SiteId: string
  FlagCardsNotSighted: boolean
  FlagSWMSnotReviewed: boolean
  ShowDiaryToSubcontractors: boolean
}

export interface IProjectTemplates {
  SiteId: string
  SiteName: string
  SiteLocation: string
}

export interface IProjectsFilter {
  Active: boolean
  RegionId: string
}
