import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, Effect, ofType, OnInitEffects } from '@ngrx/effects'
import { Action, select, Store } from '@ngrx/store'
import { Observable, of, from } from 'rxjs'
import { map, switchMap, catchError, withLatestFrom, concatMap } from 'rxjs/operators'
import { NzNotificationService } from 'ng-zorro-antd'

import * as Reducers from 'src/app/store/reducers'
import * as UserActions from './actions'
import { jwtAuthService } from 'src/app/services/jwt'
import { StoreService } from 'src/app/services/store/store.service'

@Injectable()
export class UserEffects implements OnInitEffects {
  constructor(
    private actions: Actions,
    private jwtAuthService: jwtAuthService,
    private store: StoreService,
    private router: Router,
    private rxStore: Store<any>,
    private notification: NzNotificationService,
  ) {}

  @Effect()
  login: Observable<any> = this.actions.pipe(
    ofType(UserActions.LOGIN),
    map((action: UserActions.Login) => action.payload),
    concatMap(action =>
      of(action).pipe(withLatestFrom(this.rxStore.pipe(select(Reducers.getSettings)))),
    ),
    switchMap(([payload, settings]) => {
      // jwt login
      if (settings.authProvider === 'jwt') {
        return this.jwtAuthService.login(payload.email, payload.password).pipe(
          map(response => {
            if (response && response.userInfo.Token) {
              this.store.User = response
              this.rxStore.dispatch(new UserActions.LoadCurrentAccountSuccessful(response.userInfo))
              return new UserActions.LoadCurrentAccount()
            }
            this.notification.warning('Auth Failed', response)
            return new UserActions.LoginUnsuccessful()
          }),
          catchError(error => {
            return from([{ type: UserActions.LOGIN_UNSUCCESSFUL }])
          }),
        )
      }
    }),
  )

  @Effect()
  loadCurrentAccount: Observable<any> = this.actions.pipe(
    ofType(UserActions.LOAD_CURRENT_ACCOUNT),
    map((action: UserActions.LoadCurrentAccount) => true),
    concatMap(action =>
      of(action).pipe(withLatestFrom(this.rxStore.pipe(select(Reducers.getSettings)))),
    ),
    switchMap(([action, settings]) => {
      const currentAccount = this.jwtAuthService.currentAccount()
      if (currentAccount) {
        return currentAccount.pipe(
          map(response => {
            const user = this.store.UserInfo
            if (response.accessToken.length === 0 && this.isAuthUrl(response)) {
              return new UserActions.LoadCurrentAccountUnsuccessful()
            } else {
              const url = response.url ?? '/home'
              this.router.navigate([url])
              return new UserActions.LoadCurrentAccountSuccessful(user)
            }
          }),
          catchError(error => {
            return from([{ type: UserActions.LOGIN_UNSUCCESSFUL }])
          }),
        )
      }
      // do nothing for firebase, as user state subscribed inside firebase service
      return of(new UserActions.EmptyAction())
    }),
  )

  @Effect()
  logout: Observable<any> = this.actions.pipe(
    ofType(UserActions.LOGOUT),
    map((action: UserActions.Logout) => true),
    concatMap(action =>
      of(action).pipe(withLatestFrom(this.rxStore.pipe(select(Reducers.getSettings)))),
    ),
    switchMap(([, settings]) => {
      // jwt logout
      if (settings.authProvider === 'jwt') {
        return this.jwtAuthService.logout().pipe(
          map(() => {
            this.store.deleteLocal()
            this.router.navigate(['/auth/login'])
            return new UserActions.FlushUser()
          }),
        )
      }
    }),
  )

  ngrxOnInitEffects(): Action {
    return { type: UserActions.LOAD_CURRENT_ACCOUNT }
  }
  private isAuthUrl(response): boolean {
    if (response.url == null) {
      return true
    }
    return response.url === '/' || response.url.indexOf('/auth/login') > 0
  }
}
