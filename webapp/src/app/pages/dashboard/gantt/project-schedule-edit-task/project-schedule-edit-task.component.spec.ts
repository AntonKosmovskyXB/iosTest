import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ProjectScheduleEditTaskComponent } from './project-schedule-edit-task.component'

describe('ProjectScheduleEditTaskComponent', () => {
  let component: ProjectScheduleEditTaskComponent
  let fixture: ComponentFixture<ProjectScheduleEditTaskComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectScheduleEditTaskComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectScheduleEditTaskComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
