import { Component, OnInit } from '@angular/core'
import { MenuService } from 'src/app/services/menu'
import { IMenuItem, IProfile, IUserInfo } from 'src/app/pages/dashboard/model/models'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { jwtAuthService } from 'src/app/services/jwt'
import { NzNotificationService } from 'ng-zorro-antd'
import { StoreService } from 'src/app/services/store/store.service'

@Component({
  selector: 'app-user-profile',
  templateUrl: './profile.component.html',
})
export class UserProfileComponent implements OnInit {
  activeKey = 0
  user: IUserInfo
  userFullName = ''
  userPosition = 'Support team'
  form: FormGroup
  loading: boolean = false

  constructor(
    private menuService: MenuService,
    private fb: FormBuilder,
    private api: jwtAuthService,
    private store: StoreService,
    private notification: NzNotificationService,
  ) {
    this.user = this.store.UserInfo
    this.form = fb.group({
      email: [this.user.Email, [Validators.required, Validators.email]],
      phone: [this.user.Phone, [Validators.required]],
      firstName: [this.user.FirstName, [Validators.required]],
      lastName: [this.user.LastName, [Validators.required]],
      showInstructions: [this.store.SettingsShowInstructions],
    })

    const data: IMenuItem[] = [
      {
        title: 'Profile',
        url: '',
        key: '',
        icon: '',
      },
    ]

    this.menuService.renderMenu({ breadcrumb: data }, true)
  }

  ngOnInit() {
    if (this.user) {
      this.userFullName = `${this.user.FirstName} ${this.user.LastName}`
      this.userPosition = this.user.SiteManager ? 'Site Manager' : this.userPosition
    }
  }

  get firstName() {
    return this.form.controls.firstName
  }

  get lastName() {
    return this.form.controls.lastName
  }

  get email() {
    return this.form.controls.email
  }

  get phone() {
    return this.form.controls.phone
  }

  get showInstructions() {
    return this.form.controls.showInstructions
  }

  submitForm(): void {
    this.firstName.markAsDirty()
    this.firstName.updateValueAndValidity()
    this.lastName.markAsDirty()
    this.lastName.updateValueAndValidity()
    this.email.markAsDirty()
    this.email.updateValueAndValidity()
    this.phone.markAsDirty()
    this.phone.updateValueAndValidity()
    if (
      this.email.invalid ||
      this.phone.invalid ||
      this.firstName.invalid ||
      this.lastName.invalid
    ) {
      return
    }
    this.loading = true
    const model: IProfile = {
      PersonnelId: this.user.PersonnelId,
      FirstName: this.firstName.value,
      LastName: this.lastName.value,
      Email: this.email.value,
      Phone: this.phone.value,
    }

    const subs = this.api.updateUser(model).subscribe(
      resp => {
        this.store.SettingsShowInstructions = this.showInstructions.value
        this.loading = false
        this.user = resp
        this.notification.success('Profile', 'User Profile Updated.')
        subs.unsubscribe()
      },
      error => {
        this.loading = false
        this.api.validateError(error)
      },
    )
  }

  changeKey(key) {
    this.activeKey = key
  }
}
