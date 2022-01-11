import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ProjectScheduleResourcesComponent } from './project-schedule-resources.component'

describe('ProjectScheduleResourcesComponent', () => {
  let component: ProjectScheduleResourcesComponent
  let fixture: ComponentFixture<ProjectScheduleResourcesComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectScheduleResourcesComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectScheduleResourcesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
