import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ProjectEmailContactsComponent } from './project-email-contacts.component'

describe('ProjectEmailContactsComponent', () => {
  let component: ProjectEmailContactsComponent
  let fixture: ComponentFixture<ProjectEmailContactsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectEmailContactsComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectEmailContactsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
