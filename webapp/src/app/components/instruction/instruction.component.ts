import { Component, Input, OnChanges } from '@angular/core'
import { jwtAuthService } from 'src/app/services/jwt'
import { StoreService } from 'src/app/services/store/store.service'

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.scss'],
})
export class InstructionComponent implements OnChanges {
  @Input() statusInput: number
  @Input() contentInput: string
  @Input() pageRefInput: string
  @Input() isAuthorizedInput: boolean

  constructor(private apiService: jwtAuthService, private store: StoreService) {}

  ngOnChanges(): void {
    if (this.IsShowInstructions && this.pageRefInput) {
      if (this.isAuthorizedInput) {
        this.fetchAuthorizedContent()
      } else {
        this.fetchPublicContent()
      }
    }
  }

  get IsShowInstructions() {
    return this.store.SettingsShowInstructions
  }

  get Class(): string {
    switch (this.statusInput) {
      case 1:
        return 'info'
      case 2:
        return 'success'
      case 3:
        return 'danger'
      case 4:
        return 'warning'
    }
  }

  fetchAuthorizedContent() {
    const subs = this.apiService.getAuthorizedContent(this.pageRefInput).subscribe(
      response => {
        this.contentInput = response.Content
        subs.unsubscribe()
      },
      error => {
        this.apiService.validateError(error)
      },
    )
  }

  fetchPublicContent() {
    const subs = this.apiService.getPublicContent(this.pageRefInput).subscribe(
      response => {
        this.contentInput = response.Content
        subs.unsubscribe()
      },
      error => {
        this.apiService.validateError(error)
      },
    )
  }
}
