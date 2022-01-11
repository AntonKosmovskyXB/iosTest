import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import * as UserActions from 'src/app/store/user/actions'
import { StoreService } from 'src/app/services/store/store.service'

@Component({
  selector: 'cui-topbar-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class TopbarUserMenuComponent {
  badgeCount: number = 7

  constructor(private actionStore: Store<any>, private store: StoreService) {}

  get name(): string {
    return `${this.store.UserInfo.FirstName} ${this.store.UserInfo.LastName}`
  }

  get role(): string {
    return this.store.UserInfo.Role
  }

  get email(): string {
    return this.store.UserInfo.Email
  }

  get phone(): string {
    return this.store.UserInfo.Phone
  }

  get companyName(): string {
    return this.store.UserInfo.CompanyName
  }

  badgeCountIncrease() {
    this.badgeCount = this.badgeCount + 1
  }

  logout() {
    this.actionStore.dispatch(new UserActions.Logout())
  }
}
