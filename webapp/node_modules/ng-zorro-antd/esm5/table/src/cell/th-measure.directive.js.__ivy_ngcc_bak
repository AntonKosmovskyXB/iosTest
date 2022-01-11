/**
 * @fileoverview added by tsickle
 * Generated from: src/cell/th-measure.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { isNil } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
var NzThMeasureDirective = /** @class */ (function () {
    function NzThMeasureDirective(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.changes$ = new Subject();
        this.nzWidth = null;
        this.colspan = null;
        this.colSpan = null;
        this.rowspan = null;
        this.rowSpan = null;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NzThMeasureDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzWidth = changes.nzWidth, colspan = changes.colspan, rowspan = changes.rowspan, colSpan = changes.colSpan, rowSpan = changes.rowSpan;
        if (colspan || colSpan) {
            /** @type {?} */
            var col = this.colspan || this.colSpan;
            if (!isNil(col)) {
                this.renderer.setAttribute(this.elementRef.nativeElement, 'colspan', "" + col);
            }
            else {
                this.renderer.removeAttribute(this.elementRef.nativeElement, 'colspan');
            }
        }
        if (rowspan || rowSpan) {
            /** @type {?} */
            var row = this.rowspan || this.rowSpan;
            if (!isNil(row)) {
                this.renderer.setAttribute(this.elementRef.nativeElement, 'rowspan', "" + row);
            }
            else {
                this.renderer.removeAttribute(this.elementRef.nativeElement, 'rowspan');
            }
        }
        if (nzWidth || colspan) {
            this.changes$.next();
        }
    };
    NzThMeasureDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'th'
                },] }
    ];
    /** @nocollapse */
    NzThMeasureDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    NzThMeasureDirective.propDecorators = {
        nzWidth: [{ type: Input }],
        colspan: [{ type: Input }],
        colSpan: [{ type: Input }],
        rowspan: [{ type: Input }],
        rowSpan: [{ type: Input }]
    };
    return NzThMeasureDirective;
}());
export { NzThMeasureDirective };
if (false) {
    /** @type {?} */
    NzThMeasureDirective.prototype.changes$;
    /** @type {?} */
    NzThMeasureDirective.prototype.nzWidth;
    /** @type {?} */
    NzThMeasureDirective.prototype.colspan;
    /** @type {?} */
    NzThMeasureDirective.prototype.colSpan;
    /** @type {?} */
    NzThMeasureDirective.prototype.rowspan;
    /** @type {?} */
    NzThMeasureDirective.prototype.rowSpan;
    /**
     * @type {?}
     * @private
     */
    NzThMeasureDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzThMeasureDirective.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGgtbWVhc3VyZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RhYmxlLyIsInNvdXJjZXMiOlsic3JjL2NlbGwvdGgtbWVhc3VyZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLFNBQVMsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0I7SUFVRSw4QkFBb0IsUUFBbUIsRUFBVSxVQUFzQjtRQUFuRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQU52RSxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNoQixZQUFPLEdBQWtCLElBQUksQ0FBQztRQUM5QixZQUFPLEdBQTJCLElBQUksQ0FBQztRQUN2QyxZQUFPLEdBQTJCLElBQUksQ0FBQztRQUN2QyxZQUFPLEdBQTJCLElBQUksQ0FBQztRQUN2QyxZQUFPLEdBQTJCLElBQUksQ0FBQztJQUMwQixDQUFDOzs7OztJQUMzRSwwQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDeEIsSUFBQSx5QkFBTyxFQUFFLHlCQUFPLEVBQUUseUJBQU8sRUFBRSx5QkFBTyxFQUFFLHlCQUFPO1FBQ25ELElBQUksT0FBTyxJQUFJLE9BQU8sRUFBRTs7Z0JBQ2hCLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLEtBQUcsR0FBSyxDQUFDLENBQUM7YUFDaEY7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDekU7U0FDRjtRQUNELElBQUksT0FBTyxJQUFJLE9BQU8sRUFBRTs7Z0JBQ2hCLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLEtBQUcsR0FBSyxDQUFDLENBQUM7YUFDaEY7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDekU7U0FDRjtRQUNELElBQUksT0FBTyxJQUFJLE9BQU8sRUFBRTtZQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7Z0JBaENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsSUFBSTtpQkFDZjs7OztnQkFOaUQsU0FBUztnQkFBdkMsVUFBVTs7OzBCQVMzQixLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7O0lBd0JSLDJCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0E5Qlksb0JBQW9COzs7SUFDL0Isd0NBQXlCOztJQUN6Qix1Q0FBdUM7O0lBQ3ZDLHVDQUFnRDs7SUFDaEQsdUNBQWdEOztJQUNoRCx1Q0FBZ0Q7O0lBQ2hELHVDQUFnRDs7Ozs7SUFDcEMsd0NBQTJCOzs7OztJQUFFLDBDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNOaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ3RoJ1xufSlcbmV4cG9ydCBjbGFzcyBOelRoTWVhc3VyZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIGNoYW5nZXMkID0gbmV3IFN1YmplY3QoKTtcbiAgQElucHV0KCkgbnpXaWR0aDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGNvbHNwYW46IHN0cmluZyB8IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBjb2xTcGFuOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgcm93c3Bhbjogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIHJvd1NwYW46IHN0cmluZyB8IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpXaWR0aCwgY29sc3Bhbiwgcm93c3BhbiwgY29sU3Bhbiwgcm93U3BhbiB9ID0gY2hhbmdlcztcbiAgICBpZiAoY29sc3BhbiB8fCBjb2xTcGFuKSB7XG4gICAgICBjb25zdCBjb2wgPSB0aGlzLmNvbHNwYW4gfHwgdGhpcy5jb2xTcGFuO1xuICAgICAgaWYgKCFpc05pbChjb2wpKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY29sc3BhbicsIGAke2NvbH1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY29sc3BhbicpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocm93c3BhbiB8fCByb3dTcGFuKSB7XG4gICAgICBjb25zdCByb3cgPSB0aGlzLnJvd3NwYW4gfHwgdGhpcy5yb3dTcGFuO1xuICAgICAgaWYgKCFpc05pbChyb3cpKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAncm93c3BhbicsIGAke3Jvd31gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAncm93c3BhbicpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobnpXaWR0aCB8fCBjb2xzcGFuKSB7XG4gICAgICB0aGlzLmNoYW5nZXMkLm5leHQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==