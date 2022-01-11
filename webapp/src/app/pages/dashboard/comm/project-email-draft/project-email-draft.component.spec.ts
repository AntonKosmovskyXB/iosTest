import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ProjectEmailDraftComponent } from './project-email-draft.component'

describe('ProjectEmailDraftComponent', () => {
  let component: ProjectEmailDraftComponent
  let fixture: ComponentFixture<ProjectEmailDraftComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectEmailDraftComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectEmailDraftComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
