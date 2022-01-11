import { Component, Input, OnInit, OnDestroy } from '@angular/core'
import { Observable, Subscription } from 'rxjs'
import { IListStatus } from 'src/app/pages/dashboard/model/models'

@Component({
  selector: 'app-list-status',
  templateUrl: './list-status.component.html'
})
export class ListStatusComponent implements OnInit, OnDestroy {
  @Input() listInput: any
  @Input() listStatus: Observable<IListStatus>
  private listSubscription: Subscription
  status: IListStatus = {
    loading: true,
    count: -1
  }

  ngOnDestroy(): void {
    if (this.listSubscription) {
      this.listSubscription.unsubscribe()
    }
  }

  ngOnInit(): void {
    if (this.listStatus) {
      this.listSubscription = this.listStatus.subscribe(status => {
        this.status = status
      })
    }
  }
}
