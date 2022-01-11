import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { jwtAuthService } from 'src/app/services/jwt'
import { IProjectScheduleTaskDetails } from '../../model/gantt'

@Component({
  selector: 'app-project-schedule-task-details',
  templateUrl: './project-schedule-task-details.component.html',
})
export class ProjectScheduleTaskDetailsComponent implements OnInit {
  @Input() taskIdInput: string
  @Input() jobIdInput: string
  @Output() taskDetailsOutput = new EventEmitter()

  taskDetails: IProjectScheduleTaskDetails

  activeKey = 0

  isRefreshGantt: boolean

  constructor(private apiService: jwtAuthService) {}

  ngOnInit(): void {
    const subs = this.apiService.getProjectScheduleTaskDetails(this.taskIdInput).subscribe(
      response => {
        this.taskDetails = response
        subs.unsubscribe()
      },
      error => {
        this.apiService.validateError(error)
      },
    )
  }

  changeKey(key: number) {
    this.activeKey = key
  }

  refreshTaskEmitter() {
    this.isRefreshGantt = true
  }

  closeTaskEmitter() {
    this.taskDetailsOutput.emit()
  }
}
