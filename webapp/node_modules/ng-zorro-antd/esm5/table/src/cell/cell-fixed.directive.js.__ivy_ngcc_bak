/**
 * @fileoverview added by tsickle
 * Generated from: src/cell/cell-fixed.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
var NzCellFixedDirective = /** @class */ (function () {
    function NzCellFixedDirective(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.nzRight = false;
        this.nzLeft = false;
        this.colspan = null;
        this.colSpan = null;
        this.changes$ = new Subject();
        this.isAutoLeft = false;
        this.isAutoRight = false;
        this.isFixedLeft = false;
        this.isFixedRight = false;
        this.isFixed = false;
    }
    /**
     * @param {?} autoLeft
     * @return {?}
     */
    NzCellFixedDirective.prototype.setAutoLeftWidth = /**
     * @param {?} autoLeft
     * @return {?}
     */
    function (autoLeft) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'left', autoLeft);
    };
    /**
     * @param {?} autoRight
     * @return {?}
     */
    NzCellFixedDirective.prototype.setAutoRightWidth = /**
     * @param {?} autoRight
     * @return {?}
     */
    function (autoRight) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'right', autoRight);
    };
    /**
     * @param {?} isFirstRight
     * @return {?}
     */
    NzCellFixedDirective.prototype.setIsFirstRight = /**
     * @param {?} isFirstRight
     * @return {?}
     */
    function (isFirstRight) {
        this.setFixClass(isFirstRight, 'ant-table-cell-fix-right-first');
    };
    /**
     * @param {?} isLastLeft
     * @return {?}
     */
    NzCellFixedDirective.prototype.setIsLastLeft = /**
     * @param {?} isLastLeft
     * @return {?}
     */
    function (isLastLeft) {
        this.setFixClass(isLastLeft, 'ant-table-cell-fix-left-last');
    };
    /**
     * @private
     * @param {?} flag
     * @param {?} className
     * @return {?}
     */
    NzCellFixedDirective.prototype.setFixClass = /**
     * @private
     * @param {?} flag
     * @param {?} className
     * @return {?}
     */
    function (flag, className) {
        // the setFixClass function may call many times, so remove it first.
        this.renderer.removeClass(this.elementRef.nativeElement, className);
        if (flag) {
            this.renderer.addClass(this.elementRef.nativeElement, className);
        }
    };
    /**
     * @return {?}
     */
    NzCellFixedDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setIsFirstRight(false);
        this.setIsLastLeft(false);
        this.isAutoLeft = this.nzLeft === '' || this.nzLeft === true;
        this.isAutoRight = this.nzRight === '' || this.nzRight === true;
        this.isFixedLeft = this.nzLeft !== false;
        this.isFixedRight = this.nzRight !== false;
        this.isFixed = this.isFixedLeft || this.isFixedRight;
        /** @type {?} */
        var validatePx = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (typeof value === 'string' && value !== '') {
                return value;
            }
            else {
                return null;
            }
        });
        this.setAutoLeftWidth(validatePx(this.nzLeft));
        this.setAutoRightWidth(validatePx(this.nzRight));
        this.changes$.next();
    };
    NzCellFixedDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'td[nzRight],th[nzRight],td[nzLeft],th[nzLeft]',
                    host: {
                        '[class.ant-table-cell-fix-right]': "isFixedRight",
                        '[class.ant-table-cell-fix-left]': "isFixedLeft",
                        '[style.position]': "isFixed? 'sticky' : null"
                    }
                },] }
    ];
    /** @nocollapse */
    NzCellFixedDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    NzCellFixedDirective.propDecorators = {
        nzRight: [{ type: Input }],
        nzLeft: [{ type: Input }],
        colspan: [{ type: Input }],
        colSpan: [{ type: Input }]
    };
    return NzCellFixedDirective;
}());
export { NzCellFixedDirective };
if (false) {
    /** @type {?} */
    NzCellFixedDirective.prototype.nzRight;
    /** @type {?} */
    NzCellFixedDirective.prototype.nzLeft;
    /** @type {?} */
    NzCellFixedDirective.prototype.colspan;
    /** @type {?} */
    NzCellFixedDirective.prototype.colSpan;
    /** @type {?} */
    NzCellFixedDirective.prototype.changes$;
    /** @type {?} */
    NzCellFixedDirective.prototype.isAutoLeft;
    /** @type {?} */
    NzCellFixedDirective.prototype.isAutoRight;
    /** @type {?} */
    NzCellFixedDirective.prototype.isFixedLeft;
    /** @type {?} */
    NzCellFixedDirective.prototype.isFixedRight;
    /** @type {?} */
    NzCellFixedDirective.prototype.isFixed;
    /**
     * @type {?}
     * @private
     */
    NzCellFixedDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzCellFixedDirective.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC1maXhlZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RhYmxlLyIsInNvdXJjZXMiOlsic3JjL2NlbGwvY2VsbC1maXhlZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CO0lBNkNFLDhCQUFvQixRQUFtQixFQUFVLFVBQXNCO1FBQW5ELGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBcEM5RCxZQUFPLEdBQXFCLEtBQUssQ0FBQztRQUNsQyxXQUFNLEdBQXFCLEtBQUssQ0FBQztRQUNqQyxZQUFPLEdBQWtCLElBQUksQ0FBQztRQUM5QixZQUFPLEdBQWtCLElBQUksQ0FBQztRQUN2QyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUMvQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLFlBQU8sR0FBRyxLQUFLLENBQUM7SUEyQjBELENBQUM7Ozs7O0lBekIzRSwrQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsUUFBdUI7UUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzFFLENBQUM7Ozs7O0lBRUQsZ0RBQWlCOzs7O0lBQWpCLFVBQWtCLFNBQXdCO1FBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7OztJQUVELDhDQUFlOzs7O0lBQWYsVUFBZ0IsWUFBcUI7UUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7OztJQUVELDRDQUFhOzs7O0lBQWIsVUFBYyxVQUFtQjtRQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7Ozs7SUFFTywwQ0FBVzs7Ozs7O0lBQW5CLFVBQW9CLElBQWEsRUFBRSxTQUFpQjtRQUNsRCxvRUFBb0U7UUFDcEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFcEUsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNsRTtJQUNILENBQUM7Ozs7SUFJRCwwQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQztRQUM3RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUM7UUFDekMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQzs7WUFDL0MsVUFBVTs7OztRQUFHLFVBQUMsS0FBdUI7WUFDekMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtnQkFDN0MsT0FBTyxLQUFLLENBQUM7YUFDZDtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQzthQUNiO1FBQ0gsQ0FBQyxDQUFBO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Z0JBakVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsK0NBQStDO29CQUN6RCxJQUFJLEVBQUU7d0JBQ0osa0NBQWtDLEVBQUUsY0FBYzt3QkFDbEQsaUNBQWlDLEVBQUUsYUFBYTt3QkFDaEQsa0JBQWtCLEVBQUUsMEJBQTBCO3FCQUMvQztpQkFDRjs7OztnQkFWaUQsU0FBUztnQkFBdkMsVUFBVTs7OzBCQVkzQixLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLOztJQXNEUiwyQkFBQztDQUFBLEFBbEVELElBa0VDO1NBMURZLG9CQUFvQjs7O0lBQy9CLHVDQUEyQzs7SUFDM0Msc0NBQTBDOztJQUMxQyx1Q0FBdUM7O0lBQ3ZDLHVDQUF1Qzs7SUFDdkMsd0NBQStCOztJQUMvQiwwQ0FBbUI7O0lBQ25CLDJDQUFvQjs7SUFDcEIsMkNBQW9COztJQUNwQiw0Q0FBcUI7O0lBQ3JCLHVDQUFnQjs7Ozs7SUEyQkosd0NBQTJCOzs7OztJQUFFLDBDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ3RkW256UmlnaHRdLHRoW256UmlnaHRdLHRkW256TGVmdF0sdGhbbnpMZWZ0XScsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC10YWJsZS1jZWxsLWZpeC1yaWdodF0nOiBgaXNGaXhlZFJpZ2h0YCxcbiAgICAnW2NsYXNzLmFudC10YWJsZS1jZWxsLWZpeC1sZWZ0XSc6IGBpc0ZpeGVkTGVmdGAsXG4gICAgJ1tzdHlsZS5wb3NpdGlvbl0nOiBgaXNGaXhlZD8gJ3N0aWNreScgOiBudWxsYFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56Q2VsbEZpeGVkRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbnpSaWdodDogc3RyaW5nIHwgYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBuekxlZnQ6IHN0cmluZyB8IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgY29sc3BhbjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGNvbFNwYW46IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBjaGFuZ2VzJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIGlzQXV0b0xlZnQgPSBmYWxzZTtcbiAgaXNBdXRvUmlnaHQgPSBmYWxzZTtcbiAgaXNGaXhlZExlZnQgPSBmYWxzZTtcbiAgaXNGaXhlZFJpZ2h0ID0gZmFsc2U7XG4gIGlzRml4ZWQgPSBmYWxzZTtcblxuICBzZXRBdXRvTGVmdFdpZHRoKGF1dG9MZWZ0OiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCBhdXRvTGVmdCk7XG4gIH1cblxuICBzZXRBdXRvUmlnaHRXaWR0aChhdXRvUmlnaHQ6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAncmlnaHQnLCBhdXRvUmlnaHQpO1xuICB9XG5cbiAgc2V0SXNGaXJzdFJpZ2h0KGlzRmlyc3RSaWdodDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuc2V0Rml4Q2xhc3MoaXNGaXJzdFJpZ2h0LCAnYW50LXRhYmxlLWNlbGwtZml4LXJpZ2h0LWZpcnN0Jyk7XG4gIH1cblxuICBzZXRJc0xhc3RMZWZ0KGlzTGFzdExlZnQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnNldEZpeENsYXNzKGlzTGFzdExlZnQsICdhbnQtdGFibGUtY2VsbC1maXgtbGVmdC1sYXN0Jyk7XG4gIH1cblxuICBwcml2YXRlIHNldEZpeENsYXNzKGZsYWc6IGJvb2xlYW4sIGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgLy8gdGhlIHNldEZpeENsYXNzIGZ1bmN0aW9uIG1heSBjYWxsIG1hbnkgdGltZXMsIHNvIHJlbW92ZSBpdCBmaXJzdC5cbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuXG4gICAgaWYgKGZsYWcpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRJc0ZpcnN0UmlnaHQoZmFsc2UpO1xuICAgIHRoaXMuc2V0SXNMYXN0TGVmdChmYWxzZSk7XG4gICAgdGhpcy5pc0F1dG9MZWZ0ID0gdGhpcy5uekxlZnQgPT09ICcnIHx8IHRoaXMubnpMZWZ0ID09PSB0cnVlO1xuICAgIHRoaXMuaXNBdXRvUmlnaHQgPSB0aGlzLm56UmlnaHQgPT09ICcnIHx8IHRoaXMubnpSaWdodCA9PT0gdHJ1ZTtcbiAgICB0aGlzLmlzRml4ZWRMZWZ0ID0gdGhpcy5uekxlZnQgIT09IGZhbHNlO1xuICAgIHRoaXMuaXNGaXhlZFJpZ2h0ID0gdGhpcy5uelJpZ2h0ICE9PSBmYWxzZTtcbiAgICB0aGlzLmlzRml4ZWQgPSB0aGlzLmlzRml4ZWRMZWZ0IHx8IHRoaXMuaXNGaXhlZFJpZ2h0O1xuICAgIGNvbnN0IHZhbGlkYXRlUHggPSAodmFsdWU6IHN0cmluZyB8IGJvb2xlYW4pOiBzdHJpbmcgfCBudWxsID0+IHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlICE9PSAnJykge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc2V0QXV0b0xlZnRXaWR0aCh2YWxpZGF0ZVB4KHRoaXMubnpMZWZ0KSk7XG4gICAgdGhpcy5zZXRBdXRvUmlnaHRXaWR0aCh2YWxpZGF0ZVB4KHRoaXMubnpSaWdodCkpO1xuICAgIHRoaXMuY2hhbmdlcyQubmV4dCgpO1xuICB9XG59XG4iXX0=