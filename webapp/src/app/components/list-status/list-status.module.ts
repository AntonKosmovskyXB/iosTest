import { NgModule } from '@angular/core'
import { ListStatusComponent } from './list-status.component'
import { CommonModule } from '@angular/common'
import { NzEmptyModule } from 'ng-zorro-antd/empty'
import { NzSpinModule } from 'ng-zorro-antd/spin'

@NgModule({
    imports: [CommonModule, NzEmptyModule, NzSpinModule],
    declarations: [ListStatusComponent],
    exports: [ListStatusComponent]
})
export class ListStatusModule { }
