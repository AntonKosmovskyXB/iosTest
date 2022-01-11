import { DecimalPipe } from '@angular/common'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { BehaviorSubject, Observable, of, Subject } from 'rxjs'
import { map } from 'rxjs/operators'
import { jwtAuthService } from 'src/app/services/jwt'
import { MenuService } from 'src/app/services/menu'
import { StoreService } from 'src/app/services/store/store.service'
import { ICommContact } from '../../model/comm'
import { IListStatus } from '../../model/models'
import { Location } from '@angular/common'
import { ServerPagingSearchService } from 'src/app/services/list/server-paging-search/server-paging-search.service'

@Component({
  selector: 'app-project-email-contacts',
  templateUrl: './project-email-contacts.component.html',
  providers: [ServerPagingSearchService, DecimalPipe],
})
export class ProjectEmailContactsComponent implements OnInit {
  @Input() isModalInput: boolean
  @Output() contactsOuput = new EventEmitter()

  loading$ = new BehaviorSubject<boolean>(false)
  contactList$: Observable<ICommContact[]>
  listStatus = new Subject<IListStatus>()
  job: any

  @Input() commItemId: string
  @Input() jobId: string
  showWorkers: boolean
  isAllChecked: boolean

  constructor(
    private menuService: MenuService,
    public service: ServerPagingSearchService,
    private apiService: jwtAuthService,
    private route: ActivatedRoute,
    private store: StoreService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    if (!this.isModalInput) {
      this.commItemId = this.route.snapshot.params['cid']
      this.jobId = this.route.snapshot.params['jId']

      const menu = this.store.Breadcrumb
      menu.push({ icon: '', key: '', title: 'Contacts', url: '' })
      this.menuService.renderMenu({ breadcrumb: menu }, this.jobId ? false : true)
    }

    if (this.jobId) {
      this.job = this.store.JobInfo
    }

    this.goSearch()
  }

  goSearch() {
    this.service.skip = 0
    this.contactList$ = of([])
    this.fetchData()
  }

  fetchData() {
    this.loading$.next(true)

    const subs = this.apiService
      .getCommContacts(this.commItemId, this.showWorkers, this.service)
      .subscribe(
        resp => {
          this.listStatus.next({
            count: resp.list.length,
            loading: false,
          })
          if (resp.list.length > 0) {
            this.service.Source = resp.list
            this.contactList$ = this.service.list$
            this.service.total = resp.count
            this.service.initService()
          } else {
            this.service.total = 0
          }
          this.loading$.next(false)
          subs.unsubscribe()
        },
        error => {
          this.listStatus.next({
            count: 0,
            loading: false,
          })
          this.loading$.next(false)
          this.apiService.validateError(error)
        },
      )
  }

  pageSkipChange(event): boolean {
    this.service.skip = this.service.pageSize * (event - 1)
    this.fetchData()

    return false
  }

  pageSizeChange() {
    this.service.skip = 0
    this.fetchData()
  }

  updateAllChecked(value: boolean) {
    this.service.Source.forEach(x => {
      x.Checked = value
    })
    this.contactList$.pipe(
      map(items => {
        items.forEach(x => {
          x.Checked = value
        })
      }),
    )
  }

  save() {
    const emailTo = []
    this.service.Source.forEach(x => {
      if (x.Checked) {
        emailTo.push({
          PersonnelId: x.PersonnelId,
          CompanyId: x.CompanyId,
        })
      }
    })

    const subs = this.apiService.postCCToItems(this.commItemId, emailTo, true, false).subscribe(
      () => {
        this.cancel()
        subs.unsubscribe()
      },
      error => {
        this.apiService.validateError(error)
      },
    )
  }

  cancel() {
    if (this.isModalInput) {
      this.contactsOuput.emit()
    } else {
      this.location.back()
    }
  }
}
