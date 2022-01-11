import { Component, Input } from '@angular/core'
import { jwtAuthService } from 'src/app/services/jwt'

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
})
export class PageHeaderComponent {
  @Input() titleInput: string
  @Input() jobInput: any

  constructor(private apiService: jwtAuthService) {}

  get JobInfo(): string {
    return this.apiService.getJobPageHeaderInfo(this.jobInput)
  }
}
