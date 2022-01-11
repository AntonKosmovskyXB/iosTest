import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subject } from 'rxjs'
import { jwtAuthService } from 'src/app/services/jwt'
import { MenuService } from 'src/app/services/menu'
import { ProjectScheduleTemplates } from '../../model/gantt'
import { IListStatus, IMenuItem } from '../../model/models'
import { Location } from '@angular/common'
import { TaskGroupType } from '../../model/enums'

@Component({
  selector: 'app-project-schedule-copy-tasks',
  templateUrl: './project-schedule-copy-tasks.component.html',
})
export class ProjectScheduleCopyTasksComponent implements OnInit {
  @Input() isModalInput: boolean
  @Input() taskGroupTypeIdInput: number
  @Input() taskGroupIdsInput: string[]
  @Input() modeInput: number
  @Output() copyTasksOutput = new EventEmitter()

  title: string
  projectStartDate: string
  templates: ProjectScheduleTemplates[]

  listStatus = new Subject<IListStatus>()

  isEnableSave: boolean

  constructor(
    private menuService: MenuService,
    private apiService: jwtAuthService,
    private location: Location,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    if (!this.isModalInput) {
      this.taskGroupTypeIdInput = +this.route.snapshot.params['type']

      const menu: IMenuItem[] = [
        {
          icon: '',
          key: `${this.taskGroupTypeIdInput}`,
          title: 'Project Schedule Templates',
          url: '/home/project-schedule-templates/',
        },
        { icon: '', key: '', title: 'Add', url: '' },
      ]

      this.menuService.renderMenu({ breadcrumb: menu }, true)

      this.isEnableSave = true
    }

    const subs = this.apiService
      .getProjectScheduleTemplates(this.taskGroupTypeIdInput, this.taskGroupIdsInput)
      .subscribe(
        response => {
          this.listStatus.next({
            count: response.Templates.length,
            loading: false,
          })
          this.projectStartDate = response.ProjectStartDate
          this.templates = response.Templates
          subs.unsubscribe()
        },
        error => {
          this.listStatus.next({
            count: 0,
            loading: false,
          })
          this.apiService.validateError(error)
        },
      )
  }

  get PageTitle(): string {
    switch (this.taskGroupTypeIdInput) {
      case TaskGroupType.Program:
        return 'Add Program'
      case TaskGroupType.CallUpSheet:
        return 'Add Call-Up Sheet'
      case TaskGroupType.PreConstruction:
        return 'Add PreConstruction'
      default:
        return null
    }
  }

  updateItemChecked(value: boolean, taskGroupId: string) {
    let checkedCount = 0
    this.templates.forEach(x => {
      if (x.TaskGroupId == taskGroupId) {
        x.Checked = value
      } else {
        x.Checked = false
      }
      if (x.Checked) {
        checkedCount++
      }
    })
    this.isEnableSave = this.taskGroupIdsInput ? checkedCount > 0 : true
  }

  save() {
    const template = this.templates.find(x => x.Checked)
    if (this.taskGroupIdsInput) {
      this.copy(template)
    } else {
      this.add(template)
    }
  }

  copy(template: ProjectScheduleTemplates) {
    const subs = this.apiService
      .copyProjectScheduleTemplates(
        this.apiService.getServerFormattedDate(this.projectStartDate),
        template.TaskGroupId,
        this.taskGroupIdsInput,
        this.modeInput,
      )
      .subscribe(
        response => {
          this.copyTasksOutput.emit(response)
          subs.unsubscribe()
        },
        error => {
          this.apiService.validateError(error)
        },
      )
  }

  add(template: ProjectScheduleTemplates) {
    const body = {
      TaskGroupId: this.apiService.Guid,
      Title: this.title,
      TaskGroupTypeId: this.taskGroupTypeIdInput,
      ProjectStartDate: this.apiService.getServerFormattedDate(this.projectStartDate),
      CopyTaskGroupId: template?.TaskGroupId,
    }
    const subs = this.apiService.postProjectScheduleTemplate(body).subscribe(
      () => {
        this.cancel()
        subs.unsubscribe()
      },
      error => {
        this.apiService.validateError(error)
      },
    )
  }

  cancel() {
    this.location.back()
  }
}
