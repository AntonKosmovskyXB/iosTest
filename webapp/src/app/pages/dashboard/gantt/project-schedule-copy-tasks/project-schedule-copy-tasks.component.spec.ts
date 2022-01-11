import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ProjectScheduleCopyTasksComponent } from './project-schedule-copy-tasks.component'

describe('ProjectScheduleCopyTasksComponent', () => {
  let component: ProjectScheduleCopyTasksComponent
  let fixture: ComponentFixture<ProjectScheduleCopyTasksComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectScheduleCopyTasksComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectScheduleCopyTasksComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
