import { Injectable } from '@angular/core'
import {
  HttpEvent,
  HttpClient,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http'
import { Observable, of, BehaviorSubject } from 'rxjs'
import { jwtAuthService } from '../jwt'
import { catchError, take, filter, switchMap } from 'rxjs/operators'
import { StoreService } from '../store/store.service'

@Injectable()
export class HttpCallInterceptor implements HttpInterceptor {
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null)
  private refreshTokenInitiated: boolean = false
  SITENOT_FOUND: any = 'site not found. please check sitecode.'

  constructor(private http: HttpClient, private api: jwtAuthService, private store: StoreService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.method === 'POST') {
      // register
      if (request.url === '/api/auth/register') {
        const { email, password, name } = request.body
        const user = { id: 0, email, password, name, avatar: '', role: 'admin', accessToken: '' }
        return of(new HttpResponse({ status: 200, body: user }))
      }

      if (request.url.toLowerCase() === this.api.RefreshTokenUrl) {
        return next.handle(request)
      }
    }

    if (request.method === 'GET') {
      // charts skew
      if (request.url === '/api/charts') {
        return of(new HttpResponse({ status: 200 }))
      }

      // load account
      if (request.url === '/api/auth/account') {
        const url = request.body?.Url
        return of(
          new HttpResponse({
            status: 200,
            body: {
              accessToken: request.headers.get('Authorization').split(' ')[1],
              url: url,
            },
          }),
        )
      }

      // logout
      if (request.url === '/api/auth/logout') {
        return of(new HttpResponse({ status: 200 }))
      }
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status !== 401) {
          return next.handle(request)
        }

        if (!this.refreshTokenInitiated) {
          this.refreshTokenInitiated = true
          this.refreshTokenSubject.next(null)
          const param = this.api.appInfos()
          if (param.RefreshToken == null || param.RefreshToken == undefined) {
            this.api.forceLogout()
            return next.handle(request)
          } else {
            return this.http
              .post<any>(
                `${this.api.appInfo.api}/v2/user/refreshtoken`,
                param,
                this.api.getHttpOptions(),
              )
              .pipe(
                switchMap(rsp => {
                  this.api.refreshUser(rsp)
                  this.refreshTokenInitiated = false
                  if (rsp.RefreshToken == null) {
                    this.api.forceLogout()
                  } else {
                    this.refreshTokenSubject.next(rsp)
                    return next.handle(this.addAuthToken(request))
                  }
                }),
                catchError(error => {
                  if (
                    error.status !== 401 &&
                    error?.error?.Message.toLowerCase() !== this.SITENOT_FOUND
                  ) {
                    this.api.forceLogout()
                  } else {
                    return next.handle(request)
                  }
                }),
              )
          }
        } else {
          return this.refreshTokenSubject.pipe(
            filter(rs => rs !== null),
            take(1),
            switchMap(rsp => {
              return next.handle(this.addAuthToken(request))
            }),
          )
        }
      }),
    )
  }

  private addAuthToken(request: HttpRequest<any>): HttpRequest<any> {
    return request.clone({
      setHeaders: { Authorization: `Bearer ${this.store.UserInfo.Token}` },
    })
  }
}
