import { Injectable, PipeTransform } from '@angular/core'
import { BehaviorSubject, Observable, of, Subject } from 'rxjs'
import { DecimalPipe } from '@angular/common'
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators'
import { SortDirection } from '../../helper/sortable.directive'
import { ListSearchResult } from 'src/app/store/store-model'
import store from 'store'
import { select, Store } from '@ngrx/store'
import * as Reducers from 'src/app/store/reducers'

interface ListState {
  page: number
  pageSize: number
  searchTerm: string
  sortColumn: string
  sortDirection: SortDirection
  maxSize: number
}

@Injectable({ providedIn: 'root' })
export abstract class BaseListService {
  private _loading$ = new BehaviorSubject<boolean>(true)
  private _search$ = new Subject<void>()
  private _list = new BehaviorSubject<any[]>([])
  private _total$ = new BehaviorSubject<number>(0)
  private _total: number = 0
  private _skip: number = 0
  private _listSource = []
  isMobileView: Boolean

  private _state: ListState = {
    page: 1,
    pageSize: this.lastPageSize,
    searchTerm: '',
    sortColumn: '',
    sortDirection: '',
    maxSize: 7,
  }

  private get lastPageSize() {
    const pageSize = store.get(`app.settings.pageSize`)
    return pageSize ? pageSize : 10
  }

  constructor(private pipe: DecimalPipe, private store: Store<any>) {
    this.store.pipe(select(Reducers.getSettings)).subscribe(state => {
      this.isMobileView = state.isMobileView
    })
    this.initService()
  }

  public initService() {
    this._search$
      .pipe(
        tap(() => this._loading$.next(true)),
        debounceTime(200),
        switchMap(() => this._search()),
        delay(200),
        tap(() => this._loading$.next(false)),
      )
      .subscribe(result => {
        this._list.next(result.list)
        this._total$.next(result.total)
      })

    this._search$.next()
  }

  public set Source(source: any[]) {
    this._listSource = source
    this._list.next(source)
  }

  public get Source() {
    return this._listSource
  }

  public get list$() {
    return this._list.asObservable()
  }
  public get total$() {
    return this._total$.asObservable()
  }
  public get loading$() {
    return this._loading$.asObservable()
  }
  get page() {
    return this._state.page
  }
  get pageSize() {
    return this._state.pageSize
  }
  get searchTerm() {
    return this._state.searchTerm
  }
  get maxSize() {
    return this.isMobileView ? 5 : this._state.maxSize
  }
  get total() {
    return this._total
  }
  get skip() {
    return this._skip
  }

  set total(total: number) {
    this._total = total
  }
  set skip(skip: number) {
    this._skip = skip
  }
  set page(page: number) {
    this._set({ page })
  }
  set pageSize(pageSize: number) {
    this._set({ pageSize })
    switch (pageSize) {
      case 10:
      case 20:
      case 50:
        store.set(`app.settings.pageSize`, pageSize)
        break
    }
  }
  set searchTerm(searchTerm: string) {
    this._set({ searchTerm })
  }
  set sortColumn(sortColumn: string) {
    this._set({ sortColumn })
  }
  set sortDirection(sortDirection: SortDirection) {
    this._set({ sortDirection })
  }

  private _set(patch: Partial<ListState>) {
    Object.assign(this._state, patch)
    this._search$.next()
  }

  private _compare(v1, v2) {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0
  }

  private _sort(list: any[], column: string, direction: string): any[] {
    if (direction === '') {
      return list
    } else {
      return [...list].sort((a, b) => {
        const res = this._compare(a[column], b[column])
        return direction === 'asc' ? res : -res
      })
    }
  }

  abstract _matches(data: any, term: string, pipe: PipeTransform)

  private _search(): Observable<ListSearchResult> {
    const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state
    let items = this._sort(this._listSource, sortColumn, sortDirection)

    items = items.filter(data => this._matches(data, searchTerm, this.pipe))
    const total = items.length

    items = items.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize)
    return of({ list: items, total })
  }
}
