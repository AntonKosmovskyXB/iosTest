import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { jwtAuthService } from 'src/app/services/jwt'
import { MenuService } from 'src/app/services/menu'
import { SecurityService } from 'src/app/services/security/security.service'
import { StoreService } from 'src/app/services/store/store.service'

@Component({
  selector: 'app-project-email-documents',
  templateUrl: './project-email-documents.component.html',
})
export class ProjectEmailDocumentsComponent implements OnInit {
  @Input() isModalInput: boolean
  @Output() emailDocsOutput = new EventEmitter()

  access: any
  job: any
  @Input() commItemId: string
  @Input() jobId: string

  constructor(
    private menuService: MenuService,
    private apiService: jwtAuthService,
    private store: StoreService,
    private security: SecurityService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    if (!this.isModalInput) {
      this.commItemId = this.route.snapshot.params['cid']
      this.jobId = this.route.snapshot.params['jId']

      let menu = this.store.Breadcrumb
      menu.push({ icon: '', key: '', title: 'Documents', url: '' })
      menu = menu.filter(
        (test, index, array) =>
          index === array.findIndex(findTest => findTest.title === test.title),
      )
      this.menuService.renderMenu({ breadcrumb: menu }, this.jobId ? false : true)
      this.apiService.SetBreadcrumb(
        menu,
        !this.jobId ? `${this.commItemId}` : null,
        this.jobId ? [`${this.commItemId}`, `${this.jobId}`] : null,
        `/home/job-detail/project-email/project-email-documents`,
      )
    }

    if (this.jobId) {
      this.job = this.store.JobInfo
    }

    this.access = this.security.access(this.security.PROJECTDOCUMENTS, this.jobId ? true : false)
  }

  docsEmitter() {
    this.emailDocsOutput.emit()
  }
}
