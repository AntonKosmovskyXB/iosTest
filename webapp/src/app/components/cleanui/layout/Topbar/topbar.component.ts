import { Component, Input, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'
import { select, Store } from '@ngrx/store'
import * as Reducers from 'src/app/store/reducers'
import { StoreService } from 'src/app/services/store/store.service'

@Component({
  selector: 'cui-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnDestroy {
  @Input() renderSideNav: boolean
  companyName: string = ''
  siteName: string = ''
  name: string = ''
  subscription: Subscription

  constructor(
    private store: StoreService,
    private actionStore: Store<any>,
  ) {
    this.actionStore.pipe(select(Reducers.getUser)).subscribe(state => {
      this.name = `${state.FirstName} ${state.LastName}`
      this.companyName = state.CompanyName
    })
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  get CompanyName(): string {
    return this.store.UserInfo.CompanyName
  }
}
