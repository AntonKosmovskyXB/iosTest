import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { select, Store } from '@ngrx/store'
import { jwtAuthService } from 'src/app/services/jwt'
import * as Reducers from 'src/app/store/reducers'
import { slideFadeinUp, slideFadeinRight, zoomFadein, fadein } from '../router-animations'

@Component({
  selector: 'layout-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [slideFadeinUp, slideFadeinRight, zoomFadein, fadein],
})
export class LayoutAuthComponent {
  logo: String
  isTopbarFixed: Boolean
  isGrayTopbar: Boolean
  isCardShadow: Boolean
  isSquaredBorders: Boolean
  isBorderless: Boolean
  authPagesColor: String
  routerAnimation: String
  currentYear: number = new Date().getFullYear()
  isSetMaxWidth: boolean

  constructor(private store: Store<any>, private api: jwtAuthService) {
    this.store.pipe(select(Reducers.getSettings)).subscribe(state => {
      this.logo = state.logo
      this.isTopbarFixed = state.isTopbarFixed
      this.isGrayTopbar = state.isGrayTopbar
      this.isCardShadow = state.isCardShadow
      this.isSquaredBorders = state.isSquaredBorders
      this.isBorderless = state.isBorderless
      this.authPagesColor = state.authPagesColor
      this.routerAnimation = state.routerAnimation
      this.routerAnimation = state.routerAnimation
    })
  }

  routeAnimation(outlet: RouterOutlet, animation: string) {
    if (animation === this.routerAnimation) {
      return outlet.isActivated && outlet.activatedRoute.routeConfig.path
    }
  }

  onActivate() {
    this.isSetMaxWidth = !(
      window.location.pathname.indexOf('auth/ckeditor-browser') > 0 ||
      window.location.pathname.indexOf('auth/content') > 0
    )
  }

  get version() {
    return this.api.appInfo.version
  }

  support() {
    const subs = this.api.getSupportUrl().subscribe(
      response => {
        window.open(response.Url, '_blank')
        subs.unsubscribe()
      },
      error => {
        this.api.validateError(error)
      },
    )
  }
}
