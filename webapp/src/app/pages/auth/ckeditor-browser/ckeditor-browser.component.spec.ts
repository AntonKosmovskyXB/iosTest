import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CkeditorBrowserComponent } from './ckeditor-browser.component'

describe('CkeditorBrowserComponent', () => {
  let component: CkeditorBrowserComponent
  let fixture: ComponentFixture<CkeditorBrowserComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CkeditorBrowserComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CkeditorBrowserComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
