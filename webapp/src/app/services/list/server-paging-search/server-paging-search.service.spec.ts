import { TestBed } from '@angular/core/testing'

import { ServerPagingSearchService } from './server-paging-search.service'

describe('ServerPagingSearchService', () => {
  let service: ServerPagingSearchService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ServerPagingSearchService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
