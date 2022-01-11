import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { DashboardRouterModule } from './dashboard-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'

// dashboard
import { JobDetailComponent } from 'src/app/pages/dashboard/job-detail/job-detail.component'
import { UserProfileComponent } from 'src/app/pages/dashboard/profile/profile.component'
import { CuiGeneral14Component } from 'src/app/pages/dashboard/widget-14/14.component'

import { ORDSComponent } from './contractor/ords/ords-list/ords.component'

import { MatVideoModule } from 'mat-video'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core/'

import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzModalModule } from 'ng-zorro-antd/modal'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzEmptyModule } from 'ng-zorro-antd/empty'
import { NzAnchorModule } from 'ng-zorro-antd/anchor'
import { LightboxModule } from 'ngx-lightbox'

import { ContactsSearchComponent } from './common/contacts-search/contacts-search.component'
import { InductionIconModule } from 'src/app/services/icons/induction-icon.module'
import { ListStatusModule } from 'src/app/components/list-status/list-status.module'
import { NgbdSortableHeader } from 'src/app/helper/sortable.directive'

import { TruncateModule } from 'src/app/services/truncate/truncate.module'
import { DocumentViewerModule } from 'src/app/components/document-viewer/document-viewer.module'

import { PdfViewerModule } from 'ng2-pdf-viewer'
import { NgxDocViewerModule } from 'ngx-doc-viewer'

import { NgxPaginationModule } from 'ngx-pagination'
import { DatePatternModule } from 'src/app/services/date-pattern/date-pattern.module'
import { StatesComponent } from './common/states/states.component'
import { DocsComponent } from './common/docs/docs.component'

import { EmailIconModule } from 'src/app/services/emailStatus/email-icon.module'
import { AzureUploadComponent } from './common/azure-upload/azure-upload.component'
import { PageHeaderModule } from 'src/app/components/page-header/page-header.module'
import { CKEditorModule } from 'ckeditor4-angular'
import { CkeditorComponent } from './common/ckeditor/ckeditor.component'
import { HomeComponent } from './home/home.component'
import { AttachmentsComponent } from './common/attachment/attachments/attachments.component'
import { PcbuHeaderComponent } from './pcbu/pcbu-header/pcbu-header.component'
import { AttachmentUploadComponent } from './common/attachment/attachment-upload/attachment-upload.component'
import { ProjectListComponent } from './project/project-list/project-list.component'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { GoogleChartsModule } from 'angular-google-charts'
import { ColorPickerModule } from '@iplab/ngx-color-picker'
import { EmailTemplatesComponent } from './common/email-templates/email-templates.component'
import { ProjectEmailDraftComponent } from './comm/project-email-draft/project-email-draft.component'
import { ProjectEmailContactsComponent } from './comm/project-email-contacts/project-email-contacts.component'
import { ProjectEmailDocumentsComponent } from './comm/project-email-documents/project-email-documents.component'
import { OrdsUploadComponent } from './contractor/ords/ords-upload/ords-upload.component'
import { RegionsComponent } from './common/regions/regions.component'
import { ProjectScheduleComponent } from './gantt/project-schedule/project-schedule.component'
import { NoMainMenuComponent } from './no-main-menu/no-main-menu.component'
import { ProjectScheduleCopyTasksComponent } from './gantt/project-schedule-copy-tasks/project-schedule-copy-tasks.component'
import { ProjectScheduleTaskDetailsComponent } from './gantt/project-schedule-task-details/project-schedule-task-details.component'
import { ProjectScheduleEditTaskComponent } from './gantt/project-schedule-edit-task/project-schedule-edit-task.component'
import { HolidayContentComponent } from './holiday/holiday-content/holiday-content.component'
import { ProjectScheduleResourcesComponent } from './gantt/project-schedule-resources/project-schedule-resources.component'
import { InstructionModule } from 'src/app/components/instruction/instruction.module'

const COMPONENTS = [
  ProjectListComponent,
  NgbdSortableHeader,
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DashboardRouterModule,
    SharedModule,
    MatInputModule,
    MatSelectModule,
    NzToolTipModule,
    LightboxModule,
    NzModalModule,
    NzSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NzEmptyModule,
    NzAnchorModule,
    InductionIconModule,
    ListStatusModule,
    TruncateModule,
    PerfectScrollbarModule,
    DocumentViewerModule,
    PdfViewerModule,
    MatVideoModule,
    NgxDocViewerModule,
    NgxPaginationModule,
    DatePatternModule,
    EmailIconModule,
    PageHeaderModule,
    CKEditorModule,
    DragDropModule,
    GoogleChartsModule,
    ColorPickerModule,
    InstructionModule
  ],
  declarations: [
    ...COMPONENTS,
    JobDetailComponent,
    UserProfileComponent,
    ORDSComponent,
    CuiGeneral14Component,
    ContactsSearchComponent,
    // TimecardComponent,
    StatesComponent,
    DocsComponent,
    AzureUploadComponent,
    CkeditorComponent,
    HomeComponent,
    AttachmentsComponent,
    PcbuHeaderComponent,
    AttachmentUploadComponent,
    ProjectEmailDraftComponent,
    EmailTemplatesComponent,
    ProjectEmailContactsComponent,
    ProjectEmailDocumentsComponent,
    OrdsUploadComponent,
    RegionsComponent,
    ProjectScheduleComponent,
    NoMainMenuComponent,
    ProjectScheduleCopyTasksComponent,
    ProjectScheduleTaskDetailsComponent,
    ProjectScheduleEditTaskComponent,
    HolidayContentComponent,
    ProjectScheduleResourcesComponent
  ],
  exports: [ProjectListComponent],
  bootstrap: [ProjectListComponent],
})
export class DashboardModule {}
