import { Component, Input } from '@angular/core'
import { StoreService } from 'src/app/services/store/store.service'

@Component({
  selector: 'app-pcbu-header',
  templateUrl: './pcbu-header.component.html',
})
export class PcbuHeaderComponent {
  @Input() idInput: string
  @Input() pageTitleInput: string

  pcbuHeader = this.store.ActivePcbuHeader

  constructor(private store: StoreService) {}

  get CanEditPCBU(): boolean {
    return false
  }
}
