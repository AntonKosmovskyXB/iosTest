import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NzModalModule } from 'ng-zorro-antd/modal'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { MatVideoModule } from 'mat-video'
import { DocumentViewerComponent } from './document-viewer.component'
import { PdfViewerModule } from 'ng2-pdf-viewer'
import { NgxDocViewerModule } from 'ngx-doc-viewer'
import { SafeModule } from 'src/app/services/frame/safe.module'

@NgModule({
  declarations: [DocumentViewerComponent],
  imports: [
    CommonModule,
    NzModalModule,
    MatVideoModule,
    NzSpinModule,
    PdfViewerModule,
    NgxDocViewerModule,
    SafeModule,
  ],
  exports: [DocumentViewerComponent],
})
export class DocumentViewerModule {}
