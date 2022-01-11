import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PcbuHeaderComponent } from './pcbu-header.component'

describe('PcbuHeaderComponent', () => {
  let component: PcbuHeaderComponent
  let fixture: ComponentFixture<PcbuHeaderComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PcbuHeaderComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PcbuHeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
