import { Component, OnInit } from '@angular/core'
import { jwtAuthService } from 'src/app/services/jwt'
import { ActivatedRoute, Router } from '@angular/router'
import { Location } from '@angular/common'
import { NzNotificationService } from 'ng-zorro-antd'
import { StoreService } from 'src/app/services/store/store.service'

@Component({
  selector: 'app-job-detail',
  template: '',
})
export class JobDetailComponent implements OnInit {
  constructor(
    private store: StoreService,
    private apiService: jwtAuthService,
    private route: ActivatedRoute,
    private router: Router,
    private notification: NzNotificationService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    const jobId = this.route.snapshot.params['id']

    const subs = this.apiService.getJobDetails(jobId).subscribe(
      response => {
        subs.unsubscribe()
        const jobMenu: any[] = response.jobInfo.Menu
        if (jobMenu.length > 0) {
          let url: any
          let isAvailable = false
          for (let i = 0; i < jobMenu.length; i++) {
            url = this.getUrl(jobMenu[i].MenuItemTypeId, response.jobInfo, jobMenu[i].URL)
            if (url) {
              isAvailable = true
              break
            }
          }
          if (isAvailable) {
            this.router.navigate(url, { replaceUrl: true })
          } else {
            this.notification.error('Job Menu', 'Items not available to show')
            this.cancel()
          }
        } else {
          this.notification.error('Job Menu', 'No items to show')
          this.cancel()
        }
      },
      error => {
        this.apiService.validateError(error)
        this.cancel()
      },
    )
  }

  getUrl(menuItemTypeId: number, job: any, url: string): any {
    switch (menuItemTypeId) {
      case 36:
        return ['/home/job-detail/project-schedule', job.SiteId, job.JobId]
      default:
        return null
    }
  }

  cancel() {
    this.location.back()
  }
}
