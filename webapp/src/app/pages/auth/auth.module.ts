import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { AuthRouterModule } from './auth-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SystemModule } from 'src/app/components/cleanui/system/system.module'

// system pages
import { LoginPage } from './login/login.component'
import { RegisterPage } from './register-default/register.component'
import { LockscreenPage } from './lockscreen/lockscreen.component'
import { ForgotPasswordPage } from './forgot-password/forgot-password.component'
import { Error500Page } from './500/500.component'
import { Error404Page } from './404/404.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { DatePatternModule } from 'src/app/services/date-pattern/date-pattern.module'

const COMPONENTS = [
  LoginPage,
  RegisterPage,
  LockscreenPage,
  ForgotPasswordPage,
  Error500Page,
  Error404Page,
]

@NgModule({
  imports: [
    SharedModule,
    AuthRouterModule,
    FormsModule,
    ReactiveFormsModule,
    SystemModule,
    NgbModule,
    DatePatternModule,
  ],
  declarations: [
    ...COMPONENTS,
  ],
})
export class AuthModule {}
