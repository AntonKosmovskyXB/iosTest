import { TestBed } from '@angular/core/testing'

import { PwaService } from './pwa-service.service'

describe('PwaService', () => {
  let service: PwaService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(PwaService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
