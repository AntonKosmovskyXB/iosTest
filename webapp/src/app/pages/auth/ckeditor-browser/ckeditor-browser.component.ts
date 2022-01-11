import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { jwtAuthService } from 'src/app/services/jwt'

@Component({
  selector: 'app-ckeditor-browser',
  templateUrl: './ckeditor-browser.component.html',
})
export class CkeditorBrowserComponent implements OnInit {
  cKEditorFuncNum: string

  media: string[]

  constructor(private apiService: jwtAuthService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const params = this.route.snapshot.params['params']
    const urlSearchParams = new URLSearchParams(params)

    this.cKEditorFuncNum = urlSearchParams.get('CKEditorFuncNum')

    const subs = this.apiService.getCompanyMedia().subscribe(
      response => {
        this.media = response
        subs.unsubscribe()
      },
      error => {
        this.apiService.validateError(error)
      },
    )
  }

  select(media: string) {
    window.opener.CKEDITOR.tools.callFunction(this.cKEditorFuncNum, media)
    window.close()
  }
}
