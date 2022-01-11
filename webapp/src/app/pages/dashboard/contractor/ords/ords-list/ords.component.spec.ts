import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ORDSComponent } from './ords.component'

describe('ORDSComponent', () => {
  let component: ORDSComponent
  let fixture: ComponentFixture<ORDSComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ORDSComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ORDSComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
