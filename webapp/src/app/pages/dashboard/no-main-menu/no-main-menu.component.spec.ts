import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { NoMainMenuComponent } from './no-main-menu.component'

describe('NoMainMenuComponent', () => {
  let component: NoMainMenuComponent
  let fixture: ComponentFixture<NoMainMenuComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NoMainMenuComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(NoMainMenuComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
