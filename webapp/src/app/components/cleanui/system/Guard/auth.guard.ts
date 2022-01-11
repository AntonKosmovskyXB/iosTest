import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { select, Store } from '@ngrx/store'
import * as Reducers from 'src/app/store/reducers'
import { SecurityService } from 'src/app/services/security/security.service'
import { NzNotificationService } from 'ng-zorro-antd/notification'

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  authorized: boolean

  constructor(
    private notification: NzNotificationService,
    private security: SecurityService,
    private store: Store<any>,
    public router: Router,
  ) {
    this.store.pipe(select(Reducers.getUser)).subscribe(state => {
      this.authorized = state.authorized
    })
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | boolean
    | import('@angular/router').UrlTree
    | Observable<boolean | import('@angular/router').UrlTree>
    | Promise<boolean | import('@angular/router').UrlTree> {
    if (this.authorized) {
      const canAccess = this.calculateUrlAccess(route)
      if (!canAccess) {
        this.notification.error('Access Error', "You don't have the privilege to access the page.")
        this.router.navigate['']
        return false
      }
      return true
    }
    this.router.navigate(['auth/login'], { queryParams: { returnUrl: state.url } })
    return false
  }

  calculateUrlAccess(route: ActivatedRouteSnapshot): boolean {
    switch (route.routeConfig.data?.title) {
      // dashboard routing module
      case 'Projects':
        return this.security.access(this.security.PROJECTS, false).View
      case 'Project Schedule':
        return this.security.access(
          this.security.PROJECTSCHEDULE,
          route.params.jobId ? true : false,
        ).Update
        
      default:
        return true
    }
  }
}
