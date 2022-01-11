import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { jwtAuthService } from 'src/app/services/jwt'
import { NzNotificationService, NzModalService } from 'ng-zorro-antd'
import { Location } from '@angular/common'

@Component({
  selector: 'cui-system-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['../style.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  form: FormGroup
  loading: boolean

  constructor(
    private apiService: jwtAuthService,
    private notification: NzNotificationService,
    private modal: NzModalService,
    private location: Location,
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(),
    })
  }

  reset(formValues) {
    this.loading = true
    const subs = this.apiService.forgotLogin(formValues.email).subscribe(
      response => {
        this.loading = false
        this.modal.success({
          nzTitle: 'Forgot Login',
          nzContent: response.Message,
          nzOnOk: () => this.location.back(),
        })
        subs.unsubscribe()
      },
      error => {
        this.loading = false
        this.apiService.validateError(error)
      },
    )
  }
}
