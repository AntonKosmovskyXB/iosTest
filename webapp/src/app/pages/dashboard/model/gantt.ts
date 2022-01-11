export interface IProjectScheduleResources {
  PersonnelId: string
  FirstName: string
  LastName: string
  CompanyId: string
  CompanyName: string
  ResourceName: string
  Colour: string

  Checked?: boolean
}

export interface IProjectScheduleMultipleDto extends IProjectScheduleMultiple {
  holidays: string[]
}

export interface IResourceGanttDto {
  tasks: ITaskDataResource[]
  links: ILinkData[]
  holidays: string[]
}

export interface IResourceGanttCmd {
  AssignedToPersonnelId: string
  ResourceName: string
}

export interface IProjectScheduleMultiple {
  tasks: ITaskData[]
  links: ILinkData[]
}

export interface IProjectScheduleDto extends IProjectSchedule {
  group: ITaskGroup
  holidays: string[]
  contracted_completion_date: string
}

export interface ITaskGroup {
  Title: string
  Template: string
  GanttVersion: number
}

export interface IProjectScheduleSummaryDto extends IProjectSchedule {
  duplicate_task_references: IDuplicateTaskReferences[]
  holidays: string[]
}

export interface IDuplicateTaskReferences {
  id: number
  stored_id: number
}

export interface IProjectSchedule {
  tasks: ITask[]
  links: ILink[]
}

export class ITaskDataResource {
  render: string
  id: number
  text: string
  start_date: string
  end_date: string
  color: string
  parent: number
  task_type_id: number
  type: string
  open: boolean
}

export class ITaskData extends ITaskDataResource {
  task_group_id: string
  task_id: string
}

export class ITask extends ITaskData {
  planned_start: string
  planned_end: string
  confirmed_start: string
  constraint_date: string
  duration: number
  progress: number

  // additional
  status: number
  email_status: number
  cost_centre: string
  assigned_to_personnel_id: string
  sortorder: number

  index: number

  inserted: boolean
  updated: boolean
  deleted: boolean
  action: number
}

export class ILinkData {
  task_group_id: string
  id: number
  lag: number
  type: string
  source: number
  target: number
}

export class ILink extends ILinkData {
  // additional
  inserted: boolean
  updated: boolean
  deleted: boolean
  action: number
}

export interface IProjectScheduleSettings {
  ShowGantt: boolean
  ShowID: boolean
  ShowStatus: boolean
  ShowTaskName: boolean
  ShowStart: boolean
  ShowConfirmed: boolean
  ShowCC: boolean
  ShowResource: boolean
  ShowDays: boolean
  ShowProgress: boolean
  ShowPredecessors: boolean
  ShowSuccessors: boolean
  ShowAdd: boolean
  ShowContractedCompletionDate: boolean
  ShowCompletedTasks: boolean
  ShowCriticalPath: boolean
  ShowDependencyLines: boolean
  ShowBaselines: boolean
  ShowAnchors: boolean
  ShowRightSideText: boolean
  ShowHolidays: boolean
  GridWidth: number
  ColumnWidth: number
  WidthID: number
  WidthStatus: number
  WidthTaskName: number
  WidthStart: number
  WidthConfirmed: number
  WidthCC: number
  WidthResource: number
  WidthDays: number
  WidthProgress: number
  WidthPredecessors: number
  WidthSuccessors: number
  ChartView: number
  AutoSave: boolean
}

export interface IProjectScheduleTemplateResult {
  ProjectStartDate: string
  Templates: ProjectScheduleTemplates[]
}

export interface ProjectScheduleTemplates {
  TaskGroupId: string
  Title: string
  CreatedBy: string
  CreatedOn: string
  TaskCount: number
  Checked?: boolean
}

export interface ProjectScheduleTemplateSearch extends ProjectScheduleTemplates {
  TaskGroupTypeId: number
  GanttVersion: number
  ModifiedTitle?: string
  Updating?: boolean
}

export interface IProjectScheduleTaskDetails extends IProjectScheduleTaskDetailsCmd {
  TaskName: string
  ContractorName: string
  StartTime: string
  EndTime: string
  Duration: number
  ConfirmedStartTime: string
  VerifiedBy: string
  VerifiedByName: string
  VerifiedOn: string
  ProjectNumber: string
  JobId: string
}

export interface IProjectScheduleTaskDetailsCmd {
  TaskId: string
  AssignedToPersonnelId: string
  RequireStartTimeConfirmation: boolean
  CostCentre: string
  Notes: string
  Description: string
  TaskTypeId: number
  PlannedStartTime: string
  PlannedEndTime: string
  Colour: string
}

export interface ISelectedProjectSchedule {
  SiteId: string
  Label: string
  Fetched: boolean
  Checked: boolean
}

export interface IResourceGantt {
  SiteId: string
  Resources: ISelectedResource[]
}

export interface ISelectedResource {
  AssignedToPersonnelId: string
  ResourceName: string
}
