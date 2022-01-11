import { Injectable } from '@angular/core'
import store from 'store'
import {
  ICompanyInfo,
  IMenuItem,
  IUser,
  IUserInfo,
} from 'src/app/pages/dashboard/model/models'
import { IPcbuHeader } from 'src/app/pages/dashboard/model/pcbu'
import { ICommNewEmailDraft } from 'src/app/pages/dashboard/model/comm'
import { IRegion } from 'src/app/pages/dashboard/model/region'
import { IProjectsFilter } from 'src/app/pages/dashboard/model/projects'
import { IProjectScheduleSettings, IResourceGantt } from 'src/app/pages/dashboard/model/gantt'

const BREADCRUMB = 'ACT-BREADCRUMB'
const USER = 'ACT-USR'
const JOB = 'ACT-JOB'
const STATES = 'STATE-LIST'
const PCBU_HEADER = 'ACT-PCBU-HEADER'
const EMAIL_DRAFT = 'EMAIL-DRAFT'
const EMAIL_ACTIVE_INDEX = 'EMAIL-ACTIVE-INDEX'
const REGIONS = 'REGIONS'
const PROJECTS_FILTER = 'PROJECTS-FILTER'
const PROJECT_SCHEDULE_SETTINGS = 'PROJECT-SCHEDULE-SETTINGS'
const RESOURCE_GANTT = 'RESOURCE-GANTT'

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  deleteLocal() {
    store.remove(BREADCRUMB)
    store.remove(USER)
    store.remove(JOB)
    store.remove(STATES)
    store.remove(PCBU_HEADER)
    store.remove(EMAIL_DRAFT)
    store.remove(EMAIL_ACTIVE_INDEX)
    store.remove(REGIONS)
    store.remove(PROJECTS_FILTER)
    store.remove(PROJECT_SCHEDULE_SETTINGS)
    store.remove(RESOURCE_GANTT)
  }

  get Breadcrumb(): IMenuItem[] {
    return store.get(BREADCRUMB)
  }
  set Breadcrumb(breadcrumb: IMenuItem[]) {
    store.set(BREADCRUMB, breadcrumb)
  }

  get User(): IUser {
    return store.get(USER)
  }
  set User(user: IUser) {
    store.set(USER, user)
  }

  get UserInfo(): IUserInfo {
    const user = this.User
    return user ? user.userInfo : {}
  }

  get CompanyInfo(): ICompanyInfo {
    const user = this.User
    return user ? user.companyInfo : {}
  }

  get JobInfo(): any {
    return store.get(JOB)
  }
  set JobInfo(jobInfo: any) {
    store.set(JOB, jobInfo)
  }

  get States(): any[] {
    return store.get(STATES)
  }
  set States(states: any[]) {
    store.set(STATES, states)
  }

  get ActivePcbuHeader(): IPcbuHeader {
    return store.get(PCBU_HEADER)
  }
  set ActivePcbuHeader(pcbuHeader: IPcbuHeader) {
    store.set(PCBU_HEADER, pcbuHeader)
  }

  get EmailDraft(): ICommNewEmailDraft {
    return store.get(EMAIL_DRAFT)
  }
  set EmailDraft(emailDraft: ICommNewEmailDraft) {
    store.set(EMAIL_DRAFT, emailDraft)
  }

  get EmailActiveIndex(): number {
    return store.get(EMAIL_ACTIVE_INDEX)
  }
  set EmailActiveIndex(index: number) {
    store.set(EMAIL_ACTIVE_INDEX, index)
  }

  get Regions(): IRegion[] {
    return store.get(REGIONS)
  }
  set Regions(regions: IRegion[]) {
    store.set(REGIONS, regions)
  }

  get ProjectsFilter(): IProjectsFilter {
    return (
      store.get(PROJECTS_FILTER) ?? {
        Active: true,
        RegionId: null,
      }
    )
  }
  set ProjectsFilter(projectsFilter: IProjectsFilter) {
    store.set(PROJECTS_FILTER, projectsFilter)
  }

  get SettingsShowInstructions(): boolean {
    return store.get(`app.settings.showInstructions`) ?? true
  }
  set SettingsShowInstructions(showInstructions: boolean) {
    store.set(`app.settings.showInstructions`, showInstructions)
  }

  get ProjectScheduleSettings(): IProjectScheduleSettings {
    return store.get(PROJECT_SCHEDULE_SETTINGS)
  }
  set ProjectScheduleSettings(projectScheduleSettings: IProjectScheduleSettings) {
    store.set(PROJECT_SCHEDULE_SETTINGS, projectScheduleSettings)
  }

  get ResourceGantt(): IResourceGantt {
    return store.get(RESOURCE_GANTT)
  }
  set ResourceGantt(resourceGantt: IResourceGantt) {
    store.set(RESOURCE_GANTT, resourceGantt)
  }
}
