import { Component, OnInit } from '@angular/core'
import { RouterOutlet, Router } from '@angular/router'
import * as _ from 'lodash'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import * as SettingsActions from 'src/app/store/settings/actions'
import * as Reducers from 'src/app/store/reducers'
import { slideFadeinUp, slideFadeinRight, zoomFadein, fadein } from '../router-animations'
import { MenuService } from 'src/app/services/menu'

@Component({
  selector: 'layout-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [slideFadeinUp, slideFadeinRight, zoomFadein, fadein],
})
export class LayoutMainComponent implements OnInit {
  settings$: Observable<any>
  isContentMaxWidth: Boolean
  isAppMaxWidth: Boolean
  isGrayBackground: Boolean
  isSquaredBorders: Boolean
  isCardShadow: Boolean
  isBorderless: Boolean
  menuLayoutType: string
  isMobileView: Boolean
  isMobileMenuOpen: Boolean
  routerAnimation: string
  isMenuCollapsed: Boolean
  leftMenuWidth: Number
  isTopbarFixed: Boolean
  isGrayTopbar: Boolean

  touchStartPrev: Number = 0
  touchStartLocked: Boolean = false

  superUser: Boolean = false
  chatEnable: Boolean = false
  renderSideNav: boolean = true

  hideHeader: boolean = false

  menuDataActivated: any[]

  isPreQual: boolean
  isProjectSchedule: boolean

  constructor(
    private menuService: MenuService,
    private actionStore: Store<any>,
    private router: Router,
  ) {
    this.actionStore.pipe(select(Reducers.getSettings)).subscribe(state => {
      this.isContentMaxWidth = state.isContentMaxWidth
      this.isAppMaxWidth = state.isAppMaxWidth
      this.isGrayBackground = state.isGrayBackground
      this.isSquaredBorders = state.isSquaredBorders
      this.isCardShadow = state.isCardShadow
      this.isBorderless = state.isBorderless
      this.menuLayoutType = state.menuLayoutType
      this.isMobileView = state.isMobileView
      this.isMobileMenuOpen = state.isMobileMenuOpen
      this.routerAnimation = state.routerAnimation
      this.isMenuCollapsed = state.isMenuCollapsed
      this.leftMenuWidth = state.leftMenuWidth
      this.isTopbarFixed = state.isTopbarFixed
      this.isGrayTopbar = state.isGrayTopbar
    })

    this.renderSideNav = true
  }

  get content1Class() {
    return this.renderSideNav
      ? ''
      : !this.isPreQual
      ? 'sb-layout-main-mobile-content mobile-content-mw'
      : 'sb-layout-main-mobile-content mobile-content-mw prequal-content'
  }

  get content2Class() {
    return this.renderSideNav
      ? !this.isProjectSchedule
        ? 'cui__utils__content'
        : 'cui__utils__content project-schedule-content'
      : 'cui__utils__content induction-mobile-view'
  }

  onActivate() {
    window.scroll(0, 0)
    window.scroll(0, 0)

    this.isPreQual = window.location.pathname.indexOf('home/prequal') > 0
    this.isProjectSchedule =
      window.location.pathname.indexOf('home/job-detail/project-schedule') > 0 ||
      window.location.pathname.indexOf('home/project-schedule/') > 0 ||
      window.location.pathname.indexOf('home/project-schedule-multiple') > 0 ||
      window.location.pathname.indexOf('home/project-schedule-summary') > 0 ||
      window.location.pathname.indexOf('home/resource-gantt') > 0
  }

  ngOnInit() {
    this.bindMobileSlide()
    this.menuService.listener.subscribe(data => {
      const url = data.url ?? this.router.url
      this.activateMenu(url, data.menu)
    })
  }

  onCollapse(value: any) {
    this.actionStore.dispatch(
      new SettingsActions.SetStateAction({
        isMenuCollapsed: value,
      }),
    )
  }

  toggleCollapsed() {
    this.actionStore.dispatch(
      new SettingsActions.SetStateAction({
        isMenuCollapsed: !this.isMenuCollapsed,
      }),
    )
  }

  toggleMobileMenu() {
    this.actionStore.dispatch(
      new SettingsActions.SetStateAction({
        isMobileMenuOpen: !this.isMobileMenuOpen,
      }),
    )
  }

  bindMobileSlide() {
    // mobile menu touch slide opener
    const unify = e => {
      return e.changedTouches ? e.changedTouches[0] : e
    }
    document.addEventListener(
      'touchstart',
      e => {
        const x = unify(e).clientX
        this.touchStartPrev = x
        this.touchStartLocked = x > 70 ? true : false
      },
      { passive: false },
    )
    document.addEventListener(
      'touchmove',
      e => {
        const x = unify(e).clientX
        const prev = this.touchStartPrev
        if (x - <any>prev > 50 && !this.touchStartLocked) {
          this.toggleMobileMenu()
          this.touchStartLocked = true
        }
      },
      { passive: false },
    )
    document.addEventListener('beforeunload', e => {
      this.menuService.ClearData()
    })
  }

  activateMenu(url: any, menuData: any[]) {
    menuData = JSON.parse(JSON.stringify(menuData))
    const pathWithSelection = this.getPath({ url: url }, menuData, (entry: any) => entry, 'url')
    if (pathWithSelection) {
      pathWithSelection.pop().selected = true
      _.each(pathWithSelection, (parent: any) => (parent.open = true))
    }
    this.menuDataActivated = menuData.slice()

    if (this.isMobileMenuOpen) {
      this.toggleMobileMenu()
    }
  }

  getPath(
    element: any,
    source: any,
    property: any,
    keyProperty = 'key',
    childrenProperty = 'children',
    path = [],
  ) {
    let found = false
    const getElementChildren = (value: any) => _.get(value, childrenProperty)
    const getElementKey = (value: any) => _.get(value, keyProperty)
    const key = getElementKey(element)
    return (
      _.some(source, (e: any) => {
        if (getElementKey(e) === key) {
          path.push(e)
          return true
        } else {
          return (found = this.getPath(
            element,
            getElementChildren(e),
            property,
            keyProperty,
            childrenProperty,
            path.concat(e),
          ))
        }
      }) &&
      (found || _.map(path, property))
    )
  }

  routeAnimation(outlet: RouterOutlet, animation: string) {
    if (animation === this.routerAnimation) {
      return outlet.isActivated && outlet.activatedRoute.routeConfig.path
    }
  }
}
