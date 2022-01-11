import { Injectable, Inject } from '@angular/core'
import { Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { tap } from 'rxjs/operators'
import {
  IProfile,
  IMenuItem,
  IUser,
  IServerPagingResult,
} from 'src/app/pages/dashboard/model/models'
import {
  IDocumentDetails,
} from 'src/app/pages/dashboard/model/documentDetails'

import * as UserActions from 'src/app/store/user/actions'

import { NzNotificationService } from 'ng-zorro-antd'
import { IContacts } from 'src/app/pages/dashboard/model/contacts'
import { formatDate } from '@angular/common'
import { Router } from '@angular/router'
import { StoreService } from '../store/store.service'
import {
  IUploadLocation,
} from 'src/app/pages/dashboard/model/docs'
import {
  IEmailTemplate,
} from 'src/app/pages/dashboard/model/emailTemplate'
import { IAttachments, IUploadedAttachmentFiles } from 'src/app/pages/dashboard/model/attachment'
import { List } from 'lodash'
import {
  CommAttachedDocCmd,
  ICommEmailDraft,
  ICommItemDto,
  IEmailTo,
  PatchDraftCmd,
} from 'src/app/pages/dashboard/model/comm'
import {
  IOrderAmounts,
  IOrderAttachments,
  IOrderDetails,
  IOrderDocuments,
  IOrderNonMiscAttachments,
  IOrders,
  IOrdersDto,
  IOrderSelectProject,
  IOrderStatusList,
  IUploadedOrderAttachmentFiles,
} from 'src/app/pages/dashboard/model/orders'
import { IRegion } from 'src/app/pages/dashboard/model/region'
import {
  IProjectSchedule,
  IProjectScheduleDto,
  IProjectScheduleResources,
  IProjectScheduleTaskDetails,
  IProjectScheduleTaskDetailsCmd,
  IProjectScheduleTemplateResult,
  ITask,
} from 'src/app/pages/dashboard/model/gantt'
import { IHoliday, IHolidayCmd } from 'src/app/pages/dashboard/model/holiday'

@Injectable()
export class jwtAuthService {
  private _tokenLoginResult: { processing: boolean; message: string }

  constructor(
    private notification: NzNotificationService,
    private store: StoreService,
    protected http: HttpClient,
    private router: Router,
    @Inject('sbenv') private env: any,
  ) {}

  get appInfo() {
    return {
      api: this.env.webapi,
      version: this.env.appversion,
      platform: this.env.platform,
    }
  }

  appInfos(email?: string, password?: string, companyId?: string, token?: string) {
    return {
      UserId: email,
      Password: password,
      SwitchCompanyId: companyId,
      Token: token,
      PersonnelId: this.store.UserInfo.PersonnelId,
      RefreshToken: this.store.UserInfo.RefreshToken,
      DeviceId: this.Guid,
      platform: this.appInfo.platform,
      AppVersionNumber: this.appInfo.version,
      FirebaseToken: null,
    }
  }

  get RefreshTokenUrl() {
    return 'https://tapi.sitebook.com.au/v2/user/refreshtoken'
  }

  get HtmlImageUploadApi() {
    return `${this.appInfo.api}/v1/photo/HtmlImageUpload`
  }

  getJobTitle(job: any): string {
    return job
      ? !this.store.CompanyInfo.companyInfo?.ShowJobNumber && job.SiteName
        ? job.SiteName
        : job.JobNumber
      : ''
  }

  getJobPageHeaderInfo(job: any): string {
    if (!job) {
      return ''
    }

    let result = ''

    if (this.store.CompanyInfo.companyInfo?.ShowJobNumber) {
      result = `${job.JobNumber} - `
    }
    if (job.SiteName) {
      result = `${result}${job.SiteName} - `
    }
    result = `${result}${job.ClientName}`

    return result
  }

  forceLogout() {
    this.store.deleteLocal()
    this.router.navigate(['/auth/login'])
    return new UserActions.FlushUser()
  }

  refreshUser(rsp: any) {
    const user = this.store.User

    user.userInfo = rsp

    this.store.User = user
  }

  refreshToken() {
    const refreshToken = this.store.UserInfo.RefreshToken
    const pid = this.store.UserInfo.PersonnelId
    if (pid && refreshToken) {
      const param = this.appInfos()
      return this.http.post<any>(
        `${this.appInfo.api}/v2/user/RefreshToken`,
        param,
        this.getHttpOptions(),
      )
    } else {
      this.notification.info('SiteBook', 'Session expires. Please relogin')
      window.location.href = '/auth/login'
    }
  }
  
  getProjects(body: any): Observable<IServerPagingResult> {
    return this.http.post<any>(`${this.appInfo.api}/v1/project/search`, body, this.getHttpOptions())
  }

  updateUser(model: IProfile): Observable<any> {
    return this.http
      .post<any>(`${this.appInfo.api}/v1/user/PostUser`, model, this.getHttpOptions())
      .pipe(
        tap(data => {
          const user = this.store.User
          user.userInfo.FirstName = data.FirstName
          user.userInfo.LastName = data.LastName
          user.userInfo.Email = data.Email
          user.userInfo.Phone = data.Phone
          this.store.User = user
        }),
      )
  }

  getJobDetails(id: string): Observable<any> {
    const accessToken = this.store.UserInfo.Token
    const params = accessToken
      ? {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          JobId: id,
        }
      : {}
    const body = {
      JobId: id,
    }
    return this.http.post<any>(`${this.appInfo.api}/v4/job/job`, body, params).pipe(
      tap(rs => {
        this.store.JobInfo = rs.jobInfo
      }),
    )
  }

  getDocumentDetails(
    documentId: string,
    logDownload: boolean = true,
  ): Observable<IDocumentDetails> {
    const body = {
      DocumentId: documentId,
      LogDownload: logDownload,
    }
    return this.http.post<any>(
      `${this.appInfo.api}/v1/document/GetUrl`,
      body,
      this.getHttpOptions(),
    )
  }

  getDocumentFolder(folderId: String): Observable<any> {
    const body = {
      FolderId: folderId,
    }
    return this.http.post<any>(`${this.appInfo.api}/v1/Folder/Details`, body, this.getHttpOptions())
  }

  patchDocumentFolder(body: any): Observable<any> {
    return this.http.patch<any>(`${this.appInfo.api}/v1/Folder`, body, this.getHttpOptions())
  }

  deleteDocumentFolder(folderId: string): Observable<any> {
    return this.http.delete<any>(`${this.appInfo.api}/v1/Folder/${folderId}`, this.getHttpOptions())
  }

  getAttachments(groupId: number, relatedId: string): Observable<IAttachments[]> {
    const body = {
      GroupId: groupId,
      RelatedId: relatedId,
    }
    return this.http.post<any>(`${this.appInfo.api}/v1/attachments`, body, this.getHttpOptions())
  }

  getAttachmentUrl(attachmentId: string): Observable<IDocumentDetails> {
    const body = {
      AttachmentId: attachmentId,
    }
    return this.http.post<any>(
      `${this.appInfo.api}/v1/attachment/GetUrl`,
      body,
      this.getHttpOptions(),
    )
  }

  postAttachmentNote(groupId: number, relatedId: string, note: string): Observable<IAttachments> {
    const body = {
      GroupId: groupId,
      RelatedId: relatedId,
      Note: note,
    }
    return this.http.post<any>(
      `${this.appInfo.api}/v1/attachment/note`,
      body,
      this.getHttpOptions(),
    )
  }

  patchAttachment(attachmentId: string, note: string): Observable<any> {
    const body = {
      AttachmentId: attachmentId,
      Note: note,
    }
    return this.http.patch<any>(`${this.appInfo.api}/v1/attachment`, body, this.getHttpOptions())
  }

  deleteAttachment(attachmentId: string): Observable<any> {
    return this.http.delete<any>(
      `${this.appInfo.api}/v1/attachment/${attachmentId}`,
      this.getHttpOptions(),
    )
  }

  getUploadAttachmentLocation(
    ownerId: string,
    groupId: number,
    relatedId: string,
  ): Observable<IUploadLocation> {
    const body = {
      OwnerId: ownerId,
      GroupId: groupId,
      RelatedId: relatedId,
    }
    return this.http.post<any>(
      `${this.appInfo.api}/v1/attachment/UploadLocation`,
      body,
      this.getHttpOptions(),
    )
  }

  azureUploadAttachmentDetails(
    container: string,
    uploadedFiles: IUploadedAttachmentFiles[],
    groupId: number,
    relatedId: string,
    principalCompanyId: string,
  ): Observable<IAttachments[]> {
    const body = {
      Container: container,
      UploadedFiles: uploadedFiles,
      GroupId: groupId,
      RelatedId: relatedId,
      PrincipalCompanyId: principalCompanyId,
    }
    return this.http.post<any>(
      `${this.appInfo.api}/v1/attachment/AzureUploadDetails`,
      body,
      this.getHttpOptions(),
    )
  }

  postAttachmentFile(
    file: any,
    attachmentId: string,
    groupId: any,
    relatedId: string,
    principalCompanyId: string,
  ): Observable<IAttachments> {
    const fd = new FormData()
    fd.append('Attachment', file)
    fd.append('AttachmentId', attachmentId)
    fd.append('GroupId', groupId)
    fd.append('RelatedId', relatedId)
    fd.append('PrincipalCompanyId', principalCompanyId)

    return this.http.post<any>(
      `${this.appInfo.api}/v1/attachment/PostAttachmentFile`,
      fd,
      this.getHttpOptions(),
    )
  }

  getSupportUrl(): Observable<any> {
    let body = null
    const user = this.store.UserInfo
    if (user) {
      body = {
        UserId: user.UserId,
        FirstName: user.FirstName,
        LastName: user.LastName,
      }
    }
    return this.http.post<any>(`${this.appInfo.api}/v1/public/SupportUrl`, body)
  }

  getAuthorizedContent(pageRef: string): Observable<any> {
    return this.http.get<any>(`${this.appInfo.api}/v1/contents/${pageRef}`, this.getHttpOptions())
  }

  getPublicContent(pageRef: string): Observable<any> {
    return this.http.get<any>(`${this.appInfo.api}/v1/public/content/${pageRef}`)
  }

  deleteDocument(documentId: string): Observable<any> {
    return this.http.delete<any>(
      `${this.appInfo.api}/v1/document/${documentId}`,
      this.getHttpOptions(),
    )
  }

  deleteSiteDocument(docId: String, siteId: String) {
    const accessToken = this.store.UserInfo.Token
    const body = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        AccessToken: accessToken,
      },
      body: {
        SiteId: siteId,
        DocumentId: docId,
      },
    }
    return this.http.delete<any>(`${this.appInfo.api}/v1/Site/DeleteDocument`, body)
  }

  getUserContacts(
    jobId: string,
    assetId: string,
    mode: number,
    companyId: string = null,
  ): Observable<IContacts[]> {
    const body = {
      JobId: jobId,
      AssetId: assetId,
      Mode: mode,
      CompanyId: companyId,
    }
    return this.http.post<any>(
      `${this.appInfo.api}/v1/user/ContactList`,
      body,
      this.getHttpOptions(),
    )
  }

  removeContractor(jobId: string): Observable<any> {
    const body = {
      JobId: jobId,
    }
    return this.http.post<any>(
      `${this.appInfo.api}/v1/site/RemoveContractor`,
      body,
      this.getHttpOptions(),
    )
  }

  lookupUsers(searchString: string, searchName: boolean = false): Observable<IContacts[]> {
    const body = {
      SearchString: searchString,
      SearchName: searchName,
    }
    return this.http.post<any>(
      `${this.appInfo.api}/v1/user/LookupUser`,
      body,
      this.getHttpOptions(),
    )
  }

  getStates(isRefresh: boolean): Observable<any[]> {
    if (!isRefresh) {
      const localStates = this.store.States
      if (localStates && localStates.length > 0) {
        return of(localStates)
      }
    }
    return this.http
      .post<any>(`${this.appInfo.api}/v1/company/States`, {}, this.getHttpOptions())
      .pipe(
        tap(response => {
          this.store.States = response
        }),
      )
  }

  getHolidays(): Observable<any> {
    return this.http.get<any>(`${this.appInfo.api}/v1/holiday/list`, this.getHttpOptions())
  }

  postHoliday(body: IHoliday): Observable<any> {
    return this.http.post<any>(`${this.appInfo.api}/v1/holiday`, body, this.getHttpOptions())
  }

  patchHoliday(body: IHolidayCmd): Observable<any> {
    return this.http.patch<any>(`${this.appInfo.api}/v1/holiday`, body, this.getHttpOptions())
  }

  deleteHoliday(holidayId: string): Observable<any> {
    return this.http.delete<any>(
      `${this.appInfo.api}/v1/holiday/${holidayId}`,
      this.getHttpOptions(),
    )
  }

  getUploadLocation(ownerId: string): Observable<IUploadLocation> {
    const body = {
      OwnerId: ownerId,
    }
    return this.http.post<any>(
      `${this.appInfo.api}/v1/document/UploadLocation`,
      body,
      this.getHttpOptions(),
    )
  }

  getCompanyMedia(): Observable<string[]> {
    return this.http.get<any>(`${this.appInfo.api}/v1/company/Media`, this.getHttpOptions())
  }

  getEmailTemplates(
    emailGroups: List<number>,
    emailTemplateId: string,
    enableDefault: boolean = false,
  ): Observable<IEmailTemplate[]> {
    const body = {
      EmailGroup: emailGroups,
      EnableDefault: enableDefault,
      EmailTemplateId: emailTemplateId,
    }
    return this.http.post<any>(`${this.appInfo.api}/v1/emailTemplates`, body, this.getHttpOptions())
  }

  getCommDraftEmail(
    relatedId: string,
    commId: string,
    emailTemplateId: string,
    emailTo: IEmailTo[],
    commType: number,
  ): Observable<ICommEmailDraft> {
    const body = {
      RelatedId: relatedId,
      CommId: commId,
      EmailTemplateId: emailTemplateId,
      EmailTo: emailTo,
      CommType: commType,
    }
    return this.http.post<any>(
      `${this.appInfo.api}/v1/comm/CreateDraftEmail`,
      body,
      this.getHttpOptions(),
    )
  }

  postCCToItems(
    commItemId: string,
    emailTo: IEmailTo[],
    to: boolean,
    cc: boolean,
  ): Observable<any> {
    const body = {
      CommItemId: commItemId,
      EmailTo: emailTo,
      To: to,
      CC: cc,
    }
    return this.http.post<any>(
      `${this.appInfo.api}/v1/comm/CommItemTo`,
      body,
      this.getHttpOptions(),
    )
  }

  deleteCcToItem(id: string): Observable<any> {
    return this.http.delete<any>(
      `${this.appInfo.api}/v1/comm/CommItemTo/${id}`,
      this.getHttpOptions(),
    )
  }

  deleteCommDraft(commId: string): Observable<any> {
    return this.http.delete<any>(
      `${this.appInfo.api}/v1/comm/Draft/${commId}`,
      this.getHttpOptions(),
    )
  }

  commChangeSender(commId: string, senderCode: number): Observable<ICommItemDto> {
    const body = {
      CommId: commId,
      SenderCode: senderCode,
    }
    return this.http.post<any>(
      `${this.appInfo.api}/v1/comm/ChangeSender`,
      body,
      this.getHttpOptions(),
    )
  }

  getCommEmailTemplate(emailTemplateId: string, commId: string): Observable<IEmailTemplate> {
    const body = {
      CommId: commId,
      EmailTemplateId: emailTemplateId,
    }
    return this.http.post<any>(
      `${this.appInfo.api}/v1/comm/EmailTemplate`,
      body,
      this.getHttpOptions(),
    )
  }

  getCommContacts(
    commItemId: string,
    showWorkers: boolean,
    service: any,
  ): Observable<IServerPagingResult> {
    const body = {
      CommItemId: commItemId,
      ShowWorkers: showWorkers,
      Filter: service.searchTerm,
      Size: service.pageSize,
      Skip: service.skip,
      RecordCount: service.total,
    }
    return this.http.post<any>(`${this.appInfo.api}/v1/comm/Contacts`, body, this.getHttpOptions())
  }

  sendEmail(
    jobId: string,
    commId: string,
    emailTemplateId: string,
    emailTo: IEmailTo[],
  ): Observable<any> {
    const body = {
      JobId: jobId,
      CommId: commId,
      EmailTemplateId: emailTemplateId,
      EmailTo: emailTo,
    }
    return this.http.post<any>(`${this.appInfo.api}/v1/email/WHS`, body, this.getHttpOptions())
  }

  saveDraft(body: PatchDraftCmd): Observable<any> {
    return this.http.patch<any>(`${this.appInfo.api}/v1/comm/draft`, body, this.getHttpOptions())
  }

  sendCommEmail(body: PatchDraftCmd): Observable<any> {
    return this.http.post<any>(`${this.appInfo.api}/v1/comm/send`, body, this.getHttpOptions())
  }

  deleteCommEmailAttachment(commItemId: string, documentId: string): Observable<any> {
    const body = {
      CommItemId: commItemId,
      DocumentId: documentId,
    }
    return this.http.post<any>(
      `${this.appInfo.api}/v1/comm/DeleteAttDocuments`,
      body,
      this.getHttpOptions(),
    )
  }

  getCommEmailAttachmentUrl(documentId: string): Observable<IDocumentDetails> {
    const body = {
      DocumentId: documentId,
    }
    return this.http.post<any>(
      `${this.appInfo.api}/v1/comm/Document/GetUrl`,
      body,
      this.getHttpOptions(),
    )
  }

  getCommDocuments(commItemId: string, currentOnly: boolean): Observable<any[]> {
    const body = {
      CommItemId: commItemId,
      CurrentOnly: currentOnly,
    }
    return this.http.post<any>(`${this.appInfo.api}/v1/comm/Documents`, body, this.getHttpOptions())
  }

  attCommDocuments(body: CommAttachedDocCmd): Observable<any> {
    return this.http.post<any>(
      `${this.appInfo.api}/v1/comm/AttachDocuments`,
      body,
      this.getHttpOptions(),
    )
  }

  getWorkOrders(jobId: string, isInternal: boolean): Observable<IOrdersDto> {
    const body = {
      JobId: jobId,
      IsInternal: isInternal,
    }
    return this.http.post<any>(
      `${this.appInfo.api}/v3/order/OrderList`,
      body,
      this.getHttpOptions(),
    )
  }

  acceptOrder(OrderAttachmentId: string): Observable<IOrders> {
    const body = {
      OrderAttachmentId: OrderAttachmentId,
    }
    return this.http.post<any>(`${this.appInfo.api}/v1/order/Accept`, body, this.getHttpOptions())
  }

  undoAcceptOrder(OrderAttachmentId: string): Observable<IOrders> {
    const body = {
      OrderAttachmentId: OrderAttachmentId,
    }
    return this.http.post<any>(
      `${this.appInfo.api}/v1/order/UndoAccept`,
      body,
      this.getHttpOptions(),
    )
  }

  postOrderNote(body: any): Observable<any> {
    return this.http.post<any>(`${this.appInfo.api}/v1//order/Note`, body, this.getHttpOptions())
  }

  deleteOrderAttachment(id: any): Observable<any> {
    return this.http.delete<any>(
      `${this.appInfo.api}/v1/order/attachment/${id}`,
      this.getHttpOptions(),
    )
  }

  viewOrderDocument(orderAttachmentId: string): Observable<IDocumentDetails> {
    const body = {
      OrderAttachmentId: orderAttachmentId,
    }
    return this.http.post<any>(
      `${this.appInfo.api}/v1/order/GetFileUrl`,
      body,
      this.getHttpOptions(),
    )
  }

  postOrderJobDetails(
    jobId: string,
    supplierOnly: boolean,
    poSafetyFirst: boolean,
  ): Observable<IEmailTemplate> {
    const body = {
      JobId: jobId,
      SupplierOnly: supplierOnly,
      PoSafetyFirst: poSafetyFirst,
    }
    return this.http.patch<any>(
      `${this.appInfo.api}/v1/job/OrderJobDetails`,
      body,
      this.getHttpOptions(),
    )
  }

  getOrderUploadAttachmentLocation(
    ownerId: string,
    jobId: string,
    orderId: string,
  ): Observable<IUploadLocation> {
    const body = {
      OwnerId: ownerId,
      JobId: jobId,
      OrderId: orderId,
    }
    return this.http.post<any>(
      `${this.appInfo.api}/v1/order/UploadLocation`,
      body,
      this.getHttpOptions(),
    )
  }

  azureUploadOrderAttachmentDetails(
    container: string,
    uploadedFiles: IUploadedOrderAttachmentFiles[],
    jobId: string,
    orderId: string,
    miscAttachment: boolean,
  ): Observable<IOrders[]> {
    const body = {
      Container: container,
      UploadedFiles: uploadedFiles,
      JoId: jobId,
      OrderId: orderId,
      MiscAttachment: miscAttachment,
    }
    return this.http.post<any>(
      `${this.appInfo.api}/v1/order/AzureUploadDetails`,
      body,
      this.getHttpOptions(),
    )
  }

  postOrderAttachmentFile(
    file: any,
    orderAttachmentId: string,
    jobId: string,
    orderId: string,
    miscAttachment: boolean,
  ): Observable<IOrders[]> {
    const fd = new FormData()
    fd.append('Attachment', file)
    fd.append('OrderAttachmentId', orderAttachmentId)
    fd.append('JobId', jobId)
    fd.append('OrderId', orderId)
    fd.append('MiscAttachment', miscAttachment as any)
    return this.http.post<any>(
      `${this.appInfo.api}/v1/order/PostAttachmentFile`,
      fd,
      this.getHttpOptions(),
    )
  }

  getRegions(isRefresh: boolean): Observable<IRegion[]> {
    if (!isRefresh) {
      const localRegions = this.store.Regions
      if (localRegions && localRegions.length > 0) {
        return of(localRegions)
      }
    }
    return this.http.get<any>(`${this.appInfo.api}/v1/region`, this.getHttpOptions()).pipe(
      tap(response => {
        this.store.Regions = response
      }),
    )
  }

  getProjectScheduleResources(): Observable<IProjectScheduleResources[]> {
    return this.http.get<any>(`${this.appInfo.api}/v1/gantt/resources`, this.getHttpOptions())
  }

  getProjectSchedule(taskGroupId: string): Observable<IProjectScheduleDto> {
    return this.http.get<any>(
      `${this.appInfo.api}/v1/gantt/tasks/${taskGroupId}`,
      this.getHttpOptions(),
    )
  }

  migrateProjectSchedule(taskGroupId: string): Observable<IProjectScheduleDto> {
    return this.http.get<any>(
      `${this.appInfo.api}/v1/gantt/migrate/${taskGroupId}`,
      this.getHttpOptions(),
    )
  }

  getProjectScheduleTaskDetails(id: string): Observable<IProjectScheduleTaskDetails> {
    const body = {
      TaskId: id,
    }
    return this.http.post<any>(
      `${this.appInfo.api}/v1/gantt/tasks/details`,
      body,
      this.getHttpOptions(),
    )
  }

  patchProjectScheduleTaskDetails(
    body: IProjectScheduleTaskDetailsCmd,
  ): Observable<IProjectScheduleTaskDetails> {
    return this.http.patch<any>(
      `${this.appInfo.api}/v1/gantt/tasks/details`,
      body,
      this.getHttpOptions(),
    )
  }

  getProjectScheduleSingle(id: string): Observable<ITask> {
    const body = {
      TaskId: id,
    }
    return this.http.post<any>(
      `${this.appInfo.api}/v1/gantt/tasks/single`,
      body,
      this.getHttpOptions(),
    )
  }

  patchProjectSchedule(body: IProjectSchedule): Observable<any> {
    return this.http.patch<any>(`${this.appInfo.api}/v1/gantt/tasks`, body, this.getHttpOptions())
  }

  projectScheduleTaskReport(taskGroupId: string): Observable<any> {
    const body = {
      TaskGroupId: taskGroupId,
    }
    const headers = new HttpHeaders().set('authorization', 'Bearer ' + this.store.UserInfo.Token)
    return this.http.post(`${this.appInfo.api}/v1/gantt/tasks/download`, body, {
      headers,
      responseType: 'blob' as 'json',
    })
  }

  deleteProjectSchedule(taskGroupId: string): Observable<any> {
    return this.http.delete<any>(
      `${this.appInfo.api}/v1/gantt/tasks/${taskGroupId}`,
      this.getHttpOptions(),
    )
  }

  saveProjectScheduleAsTemplate(body: any): Observable<any> {
    return this.http.post<any>(
      `${this.appInfo.api}/v1/gantt/tasks/SaveAsTemplate`,
      body,
      this.getHttpOptions(),
    )
  }

  postProjectScheduleTemplate(body: any): Observable<any> {
    return this.http.post<any>(`${this.appInfo.api}/v1/gantt/template`, body, this.getHttpOptions())
  }

  getProjectScheduleTemplates(
    taskGroupTypeId: number,
    taskGroupIds: string[],
  ): Observable<IProjectScheduleTemplateResult> {
    const body = {
      TaskGroupTypeId: taskGroupTypeId,
      TaskGroupIds: taskGroupIds,
    }
    return this.http.post<any>(
      `${this.appInfo.api}/v1/gantt/templates`,
      body,
      this.getHttpOptions(),
    )
  }

  copyProjectScheduleTemplates(
    projectStartDate: string,
    fromTaskGroupId: string,
    toTaskGroupIds: string[],
    mode: number,
  ): Observable<IProjectScheduleDto> {
    const body = {
      ProjectStartDate: projectStartDate,
      FromTaskGroupId: fromTaskGroupId,
      ToTaskGroupIds: toTaskGroupIds,
      Mode: mode,
    }
    return this.http.post<any>(
      `${this.appInfo.api}/v1/gantt/tasks/copy`,
      body,
      this.getHttpOptions(),
    )
  }

  confirmProjectSchedule(body: any): Observable<any> {
    return this.http.patch<any>(
      `${this.appInfo.api}/v1/gantt/tasks/confirm`,
      body,
      this.getHttpOptions(),
    )
  }

  verifyProjectSchedule(body: any): Observable<any> {
    return this.http.patch<any>(
      `${this.appInfo.api}/v1/gantt/tasks/verify`,
      body,
      this.getHttpOptions(),
    )
  }

  deleteDocuments(body: any): Observable<any> {
    return this.http.post<any>(
      `${this.appInfo.api}/v1/site/DeleteDocuments`,
      body,
      this.getHttpOptions(),
    )
  }

  obsoleteDocuments(body: any): Observable<any> {
    return this.http.post<any>(
      `${this.appInfo.api}/v1//site/ObsoleteDocuments`,
      body,
      this.getHttpOptions(),
    )
  }

  login(email: string, password: string): Observable<any> {
    const dto = this.appInfos(email, password, null, null)
    this.store.deleteLocal()
    return this.http.post<IUser>(`${this.appInfo.api}/v3/user/LogIn`, dto).pipe(
      tap(
        response => {
          this.store.User = response
        },
        error => {
          this.validateError(error)
        },
      ),
    )
  }

  forgotLogin(email: string): Observable<any> {
    const body = {
      Email: email,
    }
    return this.http.post<any>(`${this.appInfo.api}/v2/user/ForgotLogin`, body)
  }

  currentAccount(): Observable<any> {
    const url =
      this._locationPath === this._authUrl
        ? undefined
        : this._computeReturnUrl(window.location.href.replace(window.location.origin, ''))
        return this.http.get('/api/auth/account', this.getHttpOptions(url))
  }

  private _computeReturnUrl(url: string): any {
    return url
  }

  logout(): Observable<any> {
    return this.http.get('/api/auth/logout')
  }

  get tokenLoginStatus() {
    return this._tokenLoginResult
  }

  get tokenLogin(): boolean {
    return this._locationPath === this._authUrl && this._authUrlToken.length > 0
  }

  public SetBreadcrumb(
    currentMenu: IMenuItem[],
    currentKey: string,
    currentKeyList: string[],
    currentUrl: string,
  ) {
    currentMenu[currentMenu.length - 1].key = currentKey
    currentMenu[currentMenu.length - 1].keyList = currentKeyList
    currentMenu[currentMenu.length - 1].url = currentUrl
    this.store.Breadcrumb = currentMenu
  }

  public get Guid() {
    return `${this.S4()}${this.S4()}-${this.S4()}-${this.S4()}-${this.S4()}-${this.S4()}${this.S4()}${this.S4()}`
  }

  S4(): string {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }

  public get RandomInteger() {
    const min = -2147483648
    const max = 2147483647
    return Math.floor(Math.random() * (max - min) + min)
  }

  public getServerFormattedDate(date: any) {
    return date ? formatDate(date, "yyyy-MM-dd'T'HH:mm:ss", 'en-US') : ''
  }

  validateError(error: any): string {
    let errorMessage = null
    switch (error?.status) {
      case 504:
        errorMessage = 'Slow network'
        break
    }
    const result = errorMessage ?? `${error?.error?.Message}`
    this.notification.error('SiteBook App', result)
    return result
  }

  async validateBlobError(error: any) {
    const jsonError = await new Response(error?.error).json()
    this.notification.error('SiteBook App', `${jsonError?.Message}`)
  }

  getHttpOptions(url: string = null) {
    const accessToken = this.store.UserInfo.Token
    return {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        Url: url,
      },
    }
  }

  private get _locationPath() {
    return window.location.pathname.toLowerCase()
  }

  private get _authUrl() {
    return '/auth/login'
  }

  private get _authUrlToken() {
    const urlParams = new URLSearchParams(window.location.search.toLowerCase())
    const token = urlParams?.get('s')

    return token == undefined ? '' : token
  }
}
