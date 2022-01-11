import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { PageHeaderComponent } from './page-header.component'

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [PageHeaderComponent],
  exports: [PageHeaderComponent],
})
export class PageHeaderModule {}
