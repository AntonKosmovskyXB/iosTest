import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { NzModalService } from 'ng-zorro-antd'
import { DatePatternPipe } from 'src/app/services/date-pattern/date-pattern.pipe'
import { jwtAuthService } from 'src/app/services/jwt'
import { StoreService } from 'src/app/services/store/store.service'
import { TaskType } from '../../model/enums'
import { IProjectScheduleTaskDetails, IProjectScheduleTaskDetailsCmd } from '../../model/gantt'
import { ProjectScheduleResourcesComponent } from '../project-schedule-resources/project-schedule-resources.component'

@Component({
  selector: 'app-project-schedule-edit-task',
  templateUrl: './project-schedule-edit-task.component.html',
  providers: [DatePatternPipe],
})
export class ProjectScheduleEditTaskComponent implements OnInit {
  @Input() taskDetailsInput: IProjectScheduleTaskDetails
  @Input() jobIdInput: string
  @Output() refreshTaskOutput = new EventEmitter()
  @Output() closeTaskOutput = new EventEmitter()

  taskTypes: any = [
    {
      Id: TaskType.Job,
      Title: 'Job',
    },
    {
      Id: TaskType.Task,
      Title: 'Task',
    },
    {
      Id: TaskType.Project,
      Title: 'Project',
    },
    {
      Id: TaskType.Milestone,
      Title: 'Milestone',
    },
  ]

  form: FormGroup = new FormGroup({
    requireStartTimeConfirmation: new FormControl(),
    confirmedStartTime: new FormControl(),
    costCentre: new FormControl(),
    notes: new FormControl(),
    description: new FormControl(),
    taskTypeId: new FormControl(),
    plannedStartTime: new FormControl(),
    plannedEndTime: new FormControl(),
  })
  colour: string = '#3DB9D3'
  loading: boolean

  isEmailModalVisible = false

  @ViewChild(ProjectScheduleResourcesComponent) resourcesComp: ProjectScheduleResourcesComponent

  constructor(
    private apiService: jwtAuthService,
    private modal: NzModalService,
    private store: StoreService,
    private datePatternPipe: DatePatternPipe,
  ) {}

  ngOnInit(): void {
    this.initialiseForm()
  }

  get f() {
    return this.form.controls
  }

  get ProjectNumber(): string {
    return this.taskDetailsInput.ProjectNumber ? `${this.taskDetailsInput.ProjectNumber} - ` : null
  }

  initialiseForm() {
    this.f.requireStartTimeConfirmation.setValue(this.taskDetailsInput.RequireStartTimeConfirmation)
    this.f.confirmedStartTime.setValue(
      this.datePatternPipe.transform(this.taskDetailsInput.ConfirmedStartTime),
    )
    this.f.costCentre.setValue(this.taskDetailsInput.CostCentre)
    this.f.notes.setValue(this.taskDetailsInput.Notes)
    this.f.description.setValue(this.taskDetailsInput.Description)
    this.f.taskTypeId.setValue(this.taskDetailsInput.TaskTypeId)
    this.f.plannedStartTime.setValue(
      this.datePatternPipe.transform(this.taskDetailsInput.PlannedStartTime),
    )
    this.f.plannedEndTime.setValue(
      this.datePatternPipe.transform(this.taskDetailsInput.PlannedEndTime),
    )
    if (this.hasColor(this.taskDetailsInput.Colour)) {
      this.colour = this.taskDetailsInput.Colour
    } else {
      switch (this.taskDetailsInput.TaskTypeId) {
        case TaskType.Project:
          this.colour = '#65C16F'
          break
        case TaskType.Milestone:
          this.colour = '#D33DAF'
          break
      }
    }
  }

  hasColor(value: string): boolean {
    return value && value != ''
  }

  resourceColorEmitter(resourceColor: string) {
    if (this.hasColor(resourceColor)) {
      this.colour = resourceColor
    }
  }

  removeJob() {
    this.modal.confirm({
      nzTitle: 'Remove Job',
      nzContent: 'Are you sure?',
      nzOnOk: () => {
        const subs = this.apiService.removeContractor(this.taskDetailsInput.JobId).subscribe(
          () => {
            this.refreshTaskOutput.emit()
            this.taskDetailsInput.JobId = null
            subs.unsubscribe()
          },
          error => {
            this.apiService.validateError(error)
          },
        )
      },
    })
  }

  setEmailModalVisible(value: boolean) {
    if (value) {
      this.store.EmailDraft = {
        RelatedId: this.taskDetailsInput.TaskId,
        EmailTemplateId: null,
        PersonnelIds: null,
        CommId: null,
        CommType: 17,
      }
    }
    this.isEmailModalVisible = value
  }

  setBaseline() {
    this.f.plannedStartTime.setValue(
      this.datePatternPipe.transform(this.taskDetailsInput.StartTime),
    )
    this.f.plannedEndTime.setValue(this.datePatternPipe.transform(this.taskDetailsInput.EndTime))
  }

  confirmStartDate() {
    const body = {
      TaskId: this.taskDetailsInput.TaskId,
      ConfirmedStartTime: this.apiService.getServerFormattedDate(
        this.form.value.confirmedStartTime,
      ),
    }
    const subs = this.apiService.confirmProjectSchedule(body).subscribe(
      () => {
        this.taskDetailsInput.ConfirmedStartTime = body.ConfirmedStartTime
        this.refreshTaskOutput.emit()
        subs.unsubscribe()
      },
      error => {
        this.apiService.validateError(error)
      },
    )
  }

  verify(confirmed: boolean) {
    const body = {
      TaskId: this.taskDetailsInput.TaskId,
      Confirmed: confirmed,
    }
    const subs = this.apiService.verifyProjectSchedule(body).subscribe(
      () => {
        this.refreshTaskOutput.emit()
        let verifiedBy: string
        let verifiedByName: string
        let verifiedOn: string
        if (body.Confirmed) {
          verifiedBy = this.store.UserInfo.PersonnelId
          verifiedByName = this.store.UserInfo.FirstName + ' ' + this.store.UserInfo.LastName
          verifiedOn = this.apiService.getServerFormattedDate(new Date())
        } else {
          verifiedBy = null
          verifiedByName = null
          verifiedOn = null
        }
        this.taskDetailsInput.VerifiedBy = verifiedBy
        this.taskDetailsInput.VerifiedByName = verifiedByName
        this.taskDetailsInput.VerifiedOn = verifiedOn
        subs.unsubscribe()
      },
      error => {
        this.apiService.validateError(error)
      },
    )
  }

  save(formValues: any, isContinue: boolean) {
    this.loading = true

    const body: IProjectScheduleTaskDetailsCmd = {
      TaskId: this.taskDetailsInput.TaskId,
      AssignedToPersonnelId: this.resourcesComp.SelectedPersonnelId,
      RequireStartTimeConfirmation: formValues.requireStartTimeConfirmation,
      CostCentre: formValues.costCentre,
      Notes: formValues.notes,
      Description: formValues.description,
      TaskTypeId: formValues.taskTypeId,
      PlannedStartTime: this.apiService.getServerFormattedDate(formValues.plannedStartTime),
      PlannedEndTime: this.apiService.getServerFormattedDate(formValues.plannedEndTime),
      Colour: this.colour,
    }

    const subs = this.apiService.patchProjectScheduleTaskDetails(body).subscribe(
      response => {
        this.loading = false
        this.refreshTaskOutput.emit()
        if (isContinue) {
          this.taskDetailsInput = response
        } else {
          this.closeTaskOutput.emit()
        }
        subs.unsubscribe()
      },
      error => {
        this.loading = false
        this.apiService.validateError(error)
      },
    )
  }
}
