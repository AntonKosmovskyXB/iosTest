import { Component, Input, OnInit, ViewChild } from '@angular/core'
import { NzModalService } from 'ng-zorro-antd'
import { Subject } from 'rxjs'
import { jwtAuthService } from 'src/app/services/jwt'
import { MenuService } from 'src/app/services/menu'
import { SecurityService } from 'src/app/services/security/security.service'
import { StatesComponent } from '../../common/states/states.component'
import { IHoliday, IHolidayCmd } from '../../model/holiday'
import { IListStatus, IMenuItem } from '../../model/models'

@Component({
  selector: 'app-holiday-content',
  templateUrl: './holiday-content.component.html',
  styleUrls: ['./holiday-content.component.scss'],
})
export class HolidayContentComponent implements OnInit {
  access: any

  @Input() isModalInput: boolean
  @Input() jobIdInput: string

  holidayList: IHoliday[] = []
  listStatus = new Subject<IListStatus>()

  defaultState: string

  selectedFromDate: Date
  selectedToDate: Date

  fromDate: string
  toDate: string
  state: string

  states: any[] = []

  isRefreshGantt: boolean

  @ViewChild(StatesComponent) statesComp: StatesComponent

  constructor(
    private apiService: jwtAuthService,
    private modal: NzModalService,
    private menuService: MenuService,
    private security: SecurityService,
  ) {}

  get HolidayList(): IHoliday[] {
    let holidayList = this.holidayList
    if (this.fromDate) {
      holidayList = holidayList.filter(x => new Date(x.HolidayDate) >= new Date(this.fromDate))
    }
    if (this.toDate) {
      holidayList = holidayList.filter(x => new Date(x.HolidayDate) <= new Date(this.toDate))
    }
    if (this.state) {
      holidayList = holidayList.filter(x => x.State == this.state)
    }

    return holidayList
  }

  ngOnInit(): void {
    if (!this.isModalInput) {
      const menu: IMenuItem[] = [{ icon: '', key: '', title: 'Holidays', url: '' }]

      this.menuService.renderMenu({ breadcrumb: menu }, true)
    }

    this.access = this.security.access(this.security.HOLIDAY, this.jobIdInput ? true : false)

    this.selectedFromDate = new Date(new Date().getFullYear(), 0, 1)

    this.fetchStates(false)
    this.fetchHolidays()
  }

  initialiseList(count: number) {
    this.listStatus.next({
      count: count,
      loading: false,
    })
  }

  fetchStates(isRefresh: boolean) {
    const subs = this.apiService.getStates(isRefresh).subscribe(
      response => {
        this.states = response
        subs?.unsubscribe()
      },
      error => {
        this.apiService.validateError(error)
      },
    )
  }

  fetchHolidays() {
    const subs = this.apiService.getHolidays().subscribe(
      response => {
        this.initialiseList(response.list.length)
        this.holidayList = response.list
        this.defaultState = response.state
        this.state = response.state
        this.goSearch()
        subs.unsubscribe()
      },
      error => {
        this.initialiseList(0)
        this.apiService.validateError(error)
      },
    )
  }

  goSearch() {
    this.fromDate = this.apiService.getServerFormattedDate(this.selectedFromDate)
    this.toDate = this.apiService.getServerFormattedDate(this.selectedToDate)
    this.state = this.statesComp.SelectedState
  }

  add() {
    let date: string = null

    if (this.fromDate) {
      date = this.fromDate
    } else if (this.toDate) {
      date = this.toDate
    } else {
      const currentDate = new Date()
      currentDate.setHours(0, 0, 0)
      date = this.apiService.getServerFormattedDate(currentDate)
    }

    const state = this.state ? this.state : this.defaultState

    const holiday: IHoliday = {
      HolidayId: this.apiService.Guid,
      State: state,
      HolidayDate: date,
      Description: null,
      BackColour: '#E0E0E0',
      GanttText: null,
      IsEditing: true,
      IsNew: true,
    }
    this.holidayList.unshift(holiday)
    this.initialiseList(this.holidayList.length)
  }

  setIsEditing(item: IHoliday) {
    item.IsEditing = !item.IsEditing
  }

  onSelectState(item: IHoliday, selected: any) {
    const selectedState = {
      nzValue: selected.nzValue,
      nzLabel: selected.nzLabel,
    }
    item.State = item.State == selectedState.nzValue ? selectedState.nzValue : item.State
  }

  save(item: IHoliday) {
    if (item.IsNew) {
      this.post(item)
    } else {
      this.patch(item)
    }
  }

  post(item: IHoliday) {
    const body: IHoliday = {
      HolidayId: item.HolidayId,
      State: item.State,
      HolidayDate: this.apiService.getServerFormattedDate(item.HolidayDate),
      Description: item.Description,
      BackColour: item.BackColour,
      GanttText: item.GanttText,
    }
    const subs = this.apiService.postHoliday(body).subscribe(
      () => {
        this.isRefreshGantt = true
        item.HolidayDate = body.HolidayDate
        item.IsEditing = false
        item.IsNew = false
        item.Error = null
        this.holidayList.sort((a, b) => (a.HolidayDate > b.HolidayDate ? 1 : -1))
        subs.unsubscribe()
      },
      error => {
        item.Error = this.apiService.validateError(error)
      },
    )
  }

  patch(item: IHoliday) {
    const body: IHolidayCmd = {
      HolidayId: item.HolidayId,
      HolidayDate: this.apiService.getServerFormattedDate(item.HolidayDate),
      Description: item.Description,
      BackColour: item.BackColour,
      GanttText: item.GanttText,
    }
    const subs = this.apiService.patchHoliday(body).subscribe(
      () => {
        this.isRefreshGantt = true
        item.HolidayDate = body.HolidayDate
        item.IsEditing = false
        item.Error = null
        this.holidayList.sort((a, b) => (a.HolidayDate > b.HolidayDate ? 1 : -1))
        subs.unsubscribe()
      },
      error => {
        item.Error = this.apiService.validateError(error)
      },
    )
  }

  cancel(item: IHoliday) {
    if (item.IsNew) {
      this.holidayList = this.holidayList.filter(x => x.HolidayId !== item.HolidayId)
      this.initialiseList(this.holidayList.length)
    } else {
      this.setIsEditing(item)
    }
  }

  delete(item: IHoliday) {
    if (item.IsNew) {
      this.holidayList = this.holidayList.filter(x => x.HolidayId !== item.HolidayId)
      this.initialiseList(this.holidayList.length)
    } else {
      this.modal.confirm({
        nzTitle: 'Confirm Delete',
        nzContent: 'Are you sure?',
        nzOnOk: () => {
          const subs = this.apiService.deleteHoliday(item.HolidayId).subscribe(
            () => {
              this.isRefreshGantt = true
              item.Error = null
              this.holidayList = this.holidayList.filter(x => x.HolidayId !== item.HolidayId)
              this.initialiseList(this.holidayList.length)
              subs.unsubscribe()
            },
            error => {
              item.Error = this.apiService.validateError(error)
            },
          )
        },
      })
    }
  }
}
