import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AzureUploadComponent } from './azure-upload.component'

describe('AzureUploadComponent', () => {
  let component: AzureUploadComponent
  let fixture: ComponentFixture<AzureUploadComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzureUploadComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AzureUploadComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
