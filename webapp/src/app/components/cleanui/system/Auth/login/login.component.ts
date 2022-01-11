import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import * as Reducers from 'src/app/store/reducers'
import * as UserActions from 'src/app/store/user/actions'
import * as SettingsActions from 'src/app/store/settings/actions'
import { jwtAuthService } from 'src/app/services/jwt'
import { PwaService } from 'src/app/services/pwa/pwa-service.service'

@Component({
  selector: 'cui-system-login',
  templateUrl: './login.component.html',
  styleUrls: ['../style.component.scss'],
})
export class LoginComponent {
  form: FormGroup
  logo: String
  authProvider: string = 'jwt'
  loading: boolean = false
  message = ''
  installPrompt: Event

  constructor(
      private jwt: jwtAuthService,
      private fb: FormBuilder,
      private pwa: PwaService,
      private store: Store<any>, ) {

        if (!this.tokenLogin) {
          this.form = this.fb.group({
            email: ['', [Validators.required, Validators.minLength(3)]],
            password: ['', [Validators.required]],
          })
        }

        this.store.pipe(select(Reducers.getSettings)).subscribe(state => {
          this.logo = state.logo
          this.authProvider = state.authProvider
        })

        this.store.pipe(select(Reducers.getUser)).subscribe(state => {
          this.loading = state.loading
        })

        window.addEventListener('beforeinstallprompt', event => {
          this.installPrompt = event
        })

  }

  installAppLink() {
    this.pwa.installPrompt.prompt()
  }

  get email() {
    return this.form.controls.email
  }
  get password() {
    return this.form.controls.password
  }


  submitForm(): void {
    this.email.markAsDirty()
    this.email.updateValueAndValidity()
    this.password.markAsDirty()
    this.password.updateValueAndValidity()
    if (this.email.invalid || this.password.invalid) {
      return
    }
    const payload = {
      email: this.email.value,
      password: this.password.value,
    }
    this.store.dispatch(new UserActions.Login(payload))
  }

  get tokenLoginResult() {
    return this.jwt.tokenLoginStatus
  }
  get tokenLogin() {
    return this.jwt.tokenLogin
  }
  setProvider(authProvider) {
    this.store.dispatch(
      new SettingsActions.SetStateAction({
        authProvider,
      }),
    )
  }
}
