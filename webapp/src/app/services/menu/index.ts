import { Injectable, EventEmitter } from '@angular/core'
import { Observable, of } from 'rxjs'
import { IMenuItem } from 'src/app/pages/dashboard/model/models'
import { SecurityService } from '../security/security.service'
import { StoreService } from '../store/store.service'

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(
    private security: SecurityService,
    private store: StoreService,
  ) {}

  set MenuData(data: any[]) {
    this._data = this._data.concat(data)
  }

  get JobMenu(): IMenuItem[] {
    const jobMenu: IMenuItem[] = []
    const defaultUrl = '/home/job-detail'
    const jobInfo = this.store.JobInfo
    const defaultKey = jobInfo?.JobId
    const jobMenuItems = jobInfo?.Menu

    jobMenuItems?.forEach(menu => {
      switch (menu.MenuItemTypeId) {
        case 36:
          jobMenu.push({
            id: menu.MenuItemTypeId,
            url: `${defaultUrl}/project-schedule/${jobInfo.SiteId}/${defaultKey}`,
            title: menu.MenuItemTitle,
            icon: 'fe fe-bar-chart-2',
          })
          break
      }
    })
    return jobMenu
  }

  get _homePage(): IMenuItem {
    let initialItems = this.defaultMenuItems.concat(this._mainMenuItems)
    initialItems = initialItems.filter(x => x.url)
    return initialItems.length > 0 ? initialItems[0].url : null
  }

  private get _mainMenuItems(): IMenuItem[] {
    const items: IMenuItem[] = []

    if (this.security.access(this.security.PROJECTS, false).View) {
      items.push({
        title: 'Projects',
        key: 'projects',
        icon: 'fe fe-list',
        url: '/home/projects',
      })
    }
    return items
  }

  listener = new EventEmitter()
  menuItemListener = new EventEmitter()
  navListener = new EventEmitter()

  _data: Observable<any>[] = []

  private get defaultMenuItems(): any[] {
    const items: any[] = []
    items.push({
      category: true,
      title: 'Menu & Actions',
    })
    return items
  }

  ClearData() {
    this.store.deleteLocal()
  }

  getMenuData(): Observable<any[]> {
    return of(this._data)
  }

  renderMenuItem(menuItem: IMenuItem) {
    this.menuItemListener.emit(menuItem)
  }

  renderMenu(menuInput: any, mainMenu: boolean = false) {
    this._initBreadcrumbMenu(menuInput.breadcrumb, mainMenu)
    if (mainMenu) {
      this._renderMainMenu({ menu: this._mainMenuItems })
    } else {
      this._renderJobMenu(menuInput)
    }
  }

  private _renderJobMenu(menuInput: any) {
    const jobMenu = this.JobMenu

    const data = {
      menu: jobMenu,
      url: menuInput.urlPath,
    }

    this._renderMainMenu(data)
  }

  private _initBreadcrumbMenu(data: IMenuItem[], mainMenu: boolean = false) {
    this.navListener.emit({ data: data, mainMenu: mainMenu })
  }

  private _renderMainMenu(data) {
    this.listener.emit(data)
  }
}
