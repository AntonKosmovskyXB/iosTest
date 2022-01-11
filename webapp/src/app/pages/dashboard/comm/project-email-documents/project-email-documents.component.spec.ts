import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ProjectEmailDocumentsComponent } from './project-email-documents.component'

describe('ProjectEmailDocumentsComponent', () => {
  let component: ProjectEmailDocumentsComponent
  let fixture: ComponentFixture<ProjectEmailDocumentsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectEmailDocumentsComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectEmailDocumentsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
