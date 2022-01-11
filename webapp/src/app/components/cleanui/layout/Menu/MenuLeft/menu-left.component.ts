import { Component, Input } from '@angular/core'
import { select, Store } from '@ngrx/store'
import * as SettingsActions from 'src/app/store/settings/actions'
import * as Reducers from 'src/app/store/reducers'
import { StoreService } from 'src/app/services/store/store.service'
import { Router } from '@angular/router'

@Component({
  selector: 'cui-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.scss'],
})
export class MenuLeftComponent {
  menuColor: String
  isMenuShadow: Boolean
  isMenuUnfixed: Boolean
  isSidebarOpen: Boolean
  isMobileView: Boolean
  leftMenuWidth: Number
  isMenuCollapsed: Boolean
  logo: String
  @Input() menuDataActivated: any[]
  role: String

  constructor(
    private actionStore: Store<any>,
    private store: StoreService,
    private router: Router,
  ) {
    this.actionStore.pipe(select(Reducers.getUser)).subscribe(state => {
      this.role = state.role
    })
    this.actionStore.pipe(select(Reducers.getSettings)).subscribe(state => {
      this.menuColor = state.menuColor
      this.isMenuShadow = state.isMenuShadow
      this.isMenuUnfixed = state.isMenuUnfixed
      this.isSidebarOpen = state.isSidebarOpen
      this.isMobileView = state.isMobileView
      this.leftMenuWidth = state.leftMenuWidth
      this.isMenuCollapsed = state.isMenuCollapsed
      this.logo = state.logo
    })
  }

  navigate(item: any) {
    if (item.id) {
      switch (item.id) {
        default:
          this.router.navigateByUrl(item.url)
          break
      }
    } else {
      this.router.navigateByUrl(item.url)
    }
  }

  toggleSettings() {
    this.actionStore.dispatch(
      new SettingsActions.SetStateAction({
        isSidebarOpen: !this.isSidebarOpen,
      }),
    )
  }

  onCollapse(value: any) {
    this.actionStore.dispatch(
      new SettingsActions.SetStateAction({
        isMenuCollapsed: value,
      }),
    )
  }
}
