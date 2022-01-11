import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { HolidayContentComponent } from './holiday-content.component'

describe('HolidayContentComponent', () => {
  let component: HolidayContentComponent
  let fixture: ComponentFixture<HolidayContentComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HolidayContentComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayContentComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
