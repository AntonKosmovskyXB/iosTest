import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LayoutsModule } from 'src/app/layouts/layouts.module'

// dashboard
import { ProjectListComponent } from './project/project-list/project-list.component'
import { JobDetailComponent } from './job-detail/job-detail.component'
import { UserProfileComponent } from './profile/profile.component'
import { HomeComponent } from './home/home.component'
import { AuthGuard } from 'src/app/components/cleanui/system/Guard/auth.guard'
import { NoMainMenuComponent } from './no-main-menu/no-main-menu.component'
import { ProjectScheduleComponent } from './gantt/project-schedule/project-schedule.component'
import { ProjectScheduleGuard } from 'src/app/components/cleanui/system/Guard/project-schedule.guard'

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: HomeComponent,
    data: { title: 'Home' },
  },
  {
    path: 'projects',
    canActivate: [AuthGuard],
    component: ProjectListComponent,
    data: { title: 'Projects' },
  },
  {
    path: 'job-detail/:id',
    canActivate: [AuthGuard],
    component: JobDetailComponent,
    data: { title: 'Job Detail' },
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    component: UserProfileComponent,
    data: { title: 'Profile' },
  },
  {
    path: 'no-main-menu',
    canActivate: [AuthGuard],
    component: NoMainMenuComponent,
    data: { title: 'No Main Menu' },
  },
  {
    path: 'job-detail/project-schedule/:taskGroupId/:jobId',
    canActivate: [AuthGuard],
    canDeactivate: [ProjectScheduleGuard],
    component: ProjectScheduleComponent,
    data: { title: 'Project Schedule' },
  },
]

@NgModule({
  imports: [LayoutsModule, RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule],
})
export class DashboardRouterModule {}
