import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core'
import { IContacts } from '../../model/contacts'
import { jwtAuthService } from 'src/app/services/jwt'
import { NzNotificationService } from 'ng-zorro-antd'
import { Subject } from 'rxjs'
import { IListStatus } from '../../model/models'

@Component({
  selector: 'app-contacts-search',
  templateUrl: './contacts-search.component.html'
})
export class ContactsSearchComponent implements OnChanges {
  @Input() visibleInput: boolean
  @Input() jobIdInput: string
  @Input() assetIdInput: string
  @Input() companyIdInput: string
  @Input() modeInput: number
  @Output() selectedContactOutput = new EventEmitter()

  searchString: string
  contacts: IContacts[]

  listStatus = new Subject<IListStatus>()

  constructor(
    private apiService: jwtAuthService,
    private notification: NzNotificationService
    ) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.visibleInput && changes.visibleInput.currentValue) {
      this.searchString = null

      const subs = this.apiService.getUserContacts(this.jobIdInput, this.assetIdInput, this.modeInput, this.companyIdInput)
      .subscribe(response => {
        this.listStatus.next({
          count: response.length,
          loading: false
        })
        this.contacts = response
        subs.unsubscribe()
      }, error => {
        this.listStatus.next({
          count: 0,
          loading: false
        })
        this.apiService.validateError(error)
      })
    }
  }

  lookupUser() {
    const subs = this.apiService.lookupUsers(this.searchString)
    .subscribe(response => {
      this.contacts = response
      subs.unsubscribe()
    }, error => {
      this.apiService.validateError(error)
    })
  }

  onSelectedContact(contact: IContacts) {
    this.selectedContactOutput.emit(contact)
  }

}
