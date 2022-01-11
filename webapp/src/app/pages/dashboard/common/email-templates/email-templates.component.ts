import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { jwtAuthService } from 'src/app/services/jwt'
import { IEmailTemplate } from '../../model/emailTemplate'

@Component({
  selector: 'app-email-templates',
  templateUrl: './email-templates.component.html',
})
export class EmailTemplatesComponent implements OnInit {
  @Input() titleInput: string
  @Input() emailTypeIdInput: number[]
  @Input() isOutsideFormInput: boolean
  @Input() emailTemplateIdInput: string
  @Input() isSetDefaultInput: boolean
  @Input() isEnableDefaultInput: boolean
  @Output() emailTemplatesOutput = new EventEmitter()

  emailTemplates: IEmailTemplate[]

  constructor(private apiService: jwtAuthService) {}

  ngOnInit(): void {
    this.fetchEmailTemplates()
  }

  fetchEmailTemplates() {
    const subs = this.apiService.getEmailTemplates(this.emailTypeIdInput, this.emailTemplateIdInput, this.isEnableDefaultInput).subscribe(
      response => {
        this.emailTemplates = response
        if (this.isSetDefaultInput && response.length > 0) {
          this.emailTemplateIdInput = response[0].EmailTemplateId
          this.onChange(this.emailTemplateIdInput)
        }
        subs?.unsubscribe()
      },
      error => {
        this.apiService.validateError(error)
      },
    )
  }

  onChange(selected: any) {
    this.emailTemplatesOutput.emit(selected)
  }
}
