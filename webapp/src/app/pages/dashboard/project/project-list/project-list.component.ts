import { DecimalPipe } from '@angular/common'
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core'
import { BehaviorSubject, Observable, Subject } from 'rxjs'

import { jwtAuthService } from 'src/app/services/jwt'
import { map } from 'rxjs/operators'
import { MenuService } from 'src/app/services/menu'
import { IListStatus, IMenuItem } from '../../model/models'
import { SecurityService } from 'src/app/services/security/security.service'
import { Router } from '@angular/router'
import { StoreService } from 'src/app/services/store/store.service'
import { NgbdSortableHeader, SortEvent } from 'src/app/helper/sortable.directive'
import { of } from 'rxjs'
import { IProjects } from '../../model/projects'
import { ServerPagingSearchService } from 'src/app/services/list/server-paging-search/server-paging-search.service'

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  providers: [ServerPagingSearchService, DecimalPipe],
})
export class ProjectListComponent implements OnInit, OnDestroy {
  access: any
  showJobNumber = this.store.CompanyInfo.companyInfo?.ShowJobNumber

  loading$ = new BehaviorSubject<boolean>(false)
  projects$: Observable<IProjects[]>

  isActive = this.store.ProjectsFilter.Active
  regionId = this.store.ProjectsFilter.RegionId

  isAllChecked: boolean
  isEnableSave: boolean

  @Input() isModalInput: boolean
  @Input() isAllowMultipleInput: boolean
  @Output() projectOutput = new EventEmitter()
  @Output() projectMultipleOutput = new EventEmitter()

  listStatus = new Subject<IListStatus>()

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>

  constructor(
    public service: ServerPagingSearchService,
    private apiService: jwtAuthService,
    private store: StoreService,
    private menuService: MenuService,
    private security: SecurityService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.access = {
      canViewProject: this.security.access(this.security.PROJECTS, false).View,
      canViewRegion: this.security.access(this.security.REGION, false).View,
    }

    if (!this.isModalInput) {
      const menu: IMenuItem[] = [
        {
          icon: '',
          key: '',
          title: 'Projects',
          url: '',
        },
      ]
      this.menuService.renderMenuItem({
        icon: '',
        key: '',
        title: 'Projects',
        url: '/home/projects',
      })
      this.menuService.renderMenu({ breadcrumb: menu }, true)
    }

    this.goSearch()
  }

  ngOnDestroy(): void {
    this.store.ProjectsFilter = {
      Active: this.isActive,
      RegionId: this.regionId,
    }
  }

  onSort({ column, direction }: SortEvent) {
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = ''
      }
    })
    this.service.sortColumn = column
    this.service.sortDirection = direction
  }

  pageSkipChange(event: number): boolean {
    this.service.skip = this.service.pageSize * (event - 1)
    this.fetchData()

    return false
  }

  pageSizeChange() {
    this.service.skip = 0
    this.fetchData()
  }

  goSearch() {
    this.service.skip = 0
    this.projects$ = of([])
    this.fetchData()
  }

  fetchData() {
    this.loading$.next(true)

    const body = {
      Active: this.isActive,
      RegionId: this.regionId,
      Filter: this.service.searchTerm,
      Skip: this.service.skip,
      Size: this.service.pageSize,
      RecordCount: this.service.total,
    }

    const subs = this.apiService.getProjects(body).subscribe(
      response => {
        this.listStatus.next({
          count: response.list.length,
          loading: false,
        })
        if (response.list.length > 0) {
          this.initialiseList(response.list, response.count)
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

  initialiseList(list: IProjects[], count: number) {
    this.service.Source = list
    this.projects$ = this.service.list$
    this.service.total = count
    this.service.initService()
  }

  updateAllChecked(value: boolean) {
    this.service.Source.forEach(x => {
      x.Checked = value
    })
    this.projects$.pipe(
      map(items => {
        items.forEach(x => {
          x.Checked = value
        })
      }),
    )
    this.isEnableSave = value && this.service.Source.length > 0
  }

  updateItemChecked(value: boolean, siteId: string) {
    let checkedCount = 0
    this.service.Source.forEach(x => {
      if (x.SiteId == siteId) {
        x.Checked = value
      }
      if (x.Checked) {
        checkedCount++
      }
    })
    this.isEnableSave = checkedCount > 0
  }

  save() {
    const items: IProjects[] = []
    this.service.Source.forEach(x => {
      if (x.Checked) {
        items.push(x)
      }
    })
    this.projectMultipleOutput.emit(items)
  }

  onSelectProject(project: IProjects) {
    this.projectOutput.emit(project)
  }

  navigateToProject(jobId: string) {
    if (this.access.canViewProject) {
      this.router.navigate(['/home/job-detail', jobId])
    }
  }

  selectedRegionEmitter(regionId: string) {
    this.regionId = regionId
    this.goSearch()
  }
}
