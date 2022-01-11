import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { OrdsUploadComponent } from './ords-upload.component'

describe('OrdsUploadComponent', () => {
  let component: OrdsUploadComponent
  let fixture: ComponentFixture<OrdsUploadComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrdsUploadComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdsUploadComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
