import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ProjectScheduleTaskDetailsComponent } from './project-schedule-task-details.component'

describe('ProjectScheduleTaskDetailsComponent', () => {
  let component: ProjectScheduleTaskDetailsComponent
  let fixture: ComponentFixture<ProjectScheduleTaskDetailsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectScheduleTaskDetailsComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectScheduleTaskDetailsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
