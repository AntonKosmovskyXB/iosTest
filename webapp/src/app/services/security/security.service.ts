import { Injectable } from '@angular/core'
import { IPriviledge } from 'src/app/store/store-model'
import { StoreService } from '../store/store.service'

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  PROJECTDOCUMENTS = 1005
  PROJECTSCHEDULE = 1027
  PROJECTS = 1031
  REGION = 1075
  HOLIDAY = 1087
  
  constructor(private store: StoreService) {}

  access(funcId: number, isJobAcl = true): IPriviledge {
    const acl = isJobAcl
      ? this.store.JobInfo.AccessControlList
      : this.store.UserInfo.AccessControlList
    const rec = acl.find(x => x.FunctionId === funcId)
    return (
      rec ?? {
        FunctionId: 0,
        View: false,
        Add: false,
        Update: false,
        Delete: false,
        Special: false,
      }
    )
  }
}
