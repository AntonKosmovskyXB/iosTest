import { Component, OnInit, OnDestroy, Input } from '@angular/core'
import { Subscription } from 'rxjs'
import { jwtAuthService } from 'src/app/services/jwt'

@Component({
  selector: 'cui-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnDestroy {
  @Input() renderSideNav: boolean
  currentYear: number = new Date().getFullYear()
  private subscription: Subscription
  disabled: boolean = false
  enableStateSubscription: Subscription
  dataReady: boolean = false
  constructor(private api: jwtAuthService) {}

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }

    if (this.enableStateSubscription) {
      this.enableStateSubscription.unsubscribe()
    }
  }

  get hideInductionNavigation() {
    return true
  }

  get version() {
    return this.api.appInfo.version
  }

  get showBack() {
    return false
  }

  get showDone() {
    return false
  }

  get hideNextIcon() {
    return true
  }

  get nextLabel() {
    if (this.hideNextIcon) {
      return 'Read & Understood'
    }
    return 'Next'
  }

  moveBack() {
    window.scroll(0, 0)
    this.disabled = false
  }

  moveNext() {
    window.scroll(0, 0)
  }

  support() {
    const subs = this.api.getSupportUrl().subscribe(
      response => {
        window.open(response.Url, '_blank')
        subs.unsubscribe()
      },
      error => {
        this.api.validateError(error)
      },
    )
  }
}
