import { Injectable } from '@angular/core'
import { SwUpdate } from '@angular/service-worker'
import { NzModalService } from 'ng-zorro-antd/modal'

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  installPrompt: any

  constructor(private swUpdate: SwUpdate, private modal: NzModalService) {
    this.swUpdate.available.subscribe(() => {
      this.modal.confirm({
        nzTitle: 'SiteBook UI',
        nzContent: 'A new version is available. Download?',
        nzOnOk: () => {
          window.location.reload()
        }
      })
    })

    window.addEventListener('beforeinstallprompt', event => {
      this.installPrompt = event
    })
  }
}
