import { NgModule } from '@angular/core'
import { SanitizeHtmlPipe } from '../content/sanitizeHtml.pipe'

@NgModule({
    imports: [],
    declarations: [SanitizeHtmlPipe],
    exports: [SanitizeHtmlPipe]
})
export class SiteContentHelperModule { }
