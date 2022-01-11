import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SiteContentHelperModule } from 'src/app/services/date/site-content-helper.module'
import { InstructionComponent } from './instruction.component'

@NgModule({
  declarations: [InstructionComponent],
  imports: [CommonModule, SiteContentHelperModule],
  exports: [InstructionComponent],
})
export class InstructionModule {}
