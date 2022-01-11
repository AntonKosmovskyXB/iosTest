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
export class NzCellFixedDirective {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(renderer, elementRef) {
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
    setAutoLeftWidth(autoLeft) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'left', autoLeft);
    }
    /**
     * @param {?} autoRight
     * @return {?}
     */
    setAutoRightWidth(autoRight) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'right', autoRight);
    }
    /**
     * @param {?} isFirstRight
     * @return {?}
     */
    setIsFirstRight(isFirstRight) {
        this.setFixClass(isFirstRight, 'ant-table-cell-fix-right-first');
    }
    /**
     * @param {?} isLastLeft
     * @return {?}
     */
    setIsLastLeft(isLastLeft) {
        this.setFixClass(isLastLeft, 'ant-table-cell-fix-left-last');
    }
    /**
     * @private
     * @param {?} flag
     * @param {?} className
     * @return {?}
     */
    setFixClass(flag, className) {
        // the setFixClass function may call many times, so remove it first.
        this.renderer.removeClass(this.elementRef.nativeElement, className);
        if (flag) {
            this.renderer.addClass(this.elementRef.nativeElement, className);
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setIsFirstRight(false);
        this.setIsLastLeft(false);
        this.isAutoLeft = this.nzLeft === '' || this.nzLeft === true;
        this.isAutoRight = this.nzRight === '' || this.nzRight === true;
        this.isFixedLeft = this.nzLeft !== false;
        this.isFixedRight = this.nzRight !== false;
        this.isFixed = this.isFixedLeft || this.isFixedRight;
        /** @type {?} */
        const validatePx = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
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
    }
}
NzCellFixedDirective.decorators = [
    { type: Directive, args: [{
                selector: 'td[nzRight],th[nzRight],td[nzLeft],th[nzLeft]',
                host: {
                    '[class.ant-table-cell-fix-right]': `isFixedRight`,
                    '[class.ant-table-cell-fix-left]': `isFixedLeft`,
                    '[style.position]': `isFixed? 'sticky' : null`
                }
            },] }
];
/** @nocollapse */
NzCellFixedDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
NzCellFixedDirective.propDecorators = {
    nzRight: [{ type: Input }],
    nzLeft: [{ type: Input }],
    colspan: [{ type: Input }],
    colSpan: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC1maXhlZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RhYmxlLyIsInNvdXJjZXMiOlsic3JjL2NlbGwvY2VsbC1maXhlZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBVS9CLE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBcUMvQixZQUFvQixRQUFtQixFQUFVLFVBQXNCO1FBQW5ELGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBcEM5RCxZQUFPLEdBQXFCLEtBQUssQ0FBQztRQUNsQyxXQUFNLEdBQXFCLEtBQUssQ0FBQztRQUNqQyxZQUFPLEdBQWtCLElBQUksQ0FBQztRQUM5QixZQUFPLEdBQWtCLElBQUksQ0FBQztRQUN2QyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUMvQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLFlBQU8sR0FBRyxLQUFLLENBQUM7SUEyQjBELENBQUM7Ozs7O0lBekIzRSxnQkFBZ0IsQ0FBQyxRQUF1QjtRQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDMUUsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxTQUF3QjtRQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsWUFBcUI7UUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxVQUFtQjtRQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7Ozs7SUFFTyxXQUFXLENBQUMsSUFBYSxFQUFFLFNBQWlCO1FBQ2xELG9FQUFvRTtRQUNwRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUVwRSxJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ2xFO0lBQ0gsQ0FBQzs7OztJQUlELFdBQVc7UUFDVCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQztRQUM3RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUM7UUFDekMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQzs7Y0FDL0MsVUFBVTs7OztRQUFHLENBQUMsS0FBdUIsRUFBaUIsRUFBRTtZQUM1RCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFO2dCQUM3QyxPQUFPLEtBQUssQ0FBQzthQUNkO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDO2FBQ2I7UUFDSCxDQUFDLENBQUE7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7WUFqRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwrQ0FBK0M7Z0JBQ3pELElBQUksRUFBRTtvQkFDSixrQ0FBa0MsRUFBRSxjQUFjO29CQUNsRCxpQ0FBaUMsRUFBRSxhQUFhO29CQUNoRCxrQkFBa0IsRUFBRSwwQkFBMEI7aUJBQy9DO2FBQ0Y7Ozs7WUFWaUQsU0FBUztZQUF2QyxVQUFVOzs7c0JBWTNCLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLO3NCQUNMLEtBQUs7Ozs7SUFITix1Q0FBMkM7O0lBQzNDLHNDQUEwQzs7SUFDMUMsdUNBQXVDOztJQUN2Qyx1Q0FBdUM7O0lBQ3ZDLHdDQUErQjs7SUFDL0IsMENBQW1COztJQUNuQiwyQ0FBb0I7O0lBQ3BCLDJDQUFvQjs7SUFDcEIsNENBQXFCOztJQUNyQix1Q0FBZ0I7Ozs7O0lBMkJKLHdDQUEyQjs7Ozs7SUFBRSwwQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICd0ZFtuelJpZ2h0XSx0aFtuelJpZ2h0XSx0ZFtuekxlZnRdLHRoW256TGVmdF0nLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtY2VsbC1maXgtcmlnaHRdJzogYGlzRml4ZWRSaWdodGAsXG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtY2VsbC1maXgtbGVmdF0nOiBgaXNGaXhlZExlZnRgLFxuICAgICdbc3R5bGUucG9zaXRpb25dJzogYGlzRml4ZWQ/ICdzdGlja3knIDogbnVsbGBcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekNlbGxGaXhlZERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG56UmlnaHQ6IHN0cmluZyB8IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgbnpMZWZ0OiBzdHJpbmcgfCBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNvbHNwYW46IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBjb2xTcGFuOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgY2hhbmdlcyQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBpc0F1dG9MZWZ0ID0gZmFsc2U7XG4gIGlzQXV0b1JpZ2h0ID0gZmFsc2U7XG4gIGlzRml4ZWRMZWZ0ID0gZmFsc2U7XG4gIGlzRml4ZWRSaWdodCA9IGZhbHNlO1xuICBpc0ZpeGVkID0gZmFsc2U7XG5cbiAgc2V0QXV0b0xlZnRXaWR0aChhdXRvTGVmdDogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdsZWZ0JywgYXV0b0xlZnQpO1xuICB9XG5cbiAgc2V0QXV0b1JpZ2h0V2lkdGgoYXV0b1JpZ2h0OiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3JpZ2h0JywgYXV0b1JpZ2h0KTtcbiAgfVxuXG4gIHNldElzRmlyc3RSaWdodChpc0ZpcnN0UmlnaHQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnNldEZpeENsYXNzKGlzRmlyc3RSaWdodCwgJ2FudC10YWJsZS1jZWxsLWZpeC1yaWdodC1maXJzdCcpO1xuICB9XG5cbiAgc2V0SXNMYXN0TGVmdChpc0xhc3RMZWZ0OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5zZXRGaXhDbGFzcyhpc0xhc3RMZWZ0LCAnYW50LXRhYmxlLWNlbGwtZml4LWxlZnQtbGFzdCcpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRGaXhDbGFzcyhmbGFnOiBib29sZWFuLCBjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIC8vIHRoZSBzZXRGaXhDbGFzcyBmdW5jdGlvbiBtYXkgY2FsbCBtYW55IHRpbWVzLCBzbyByZW1vdmUgaXQgZmlyc3QuXG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcblxuICAgIGlmIChmbGFnKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0SXNGaXJzdFJpZ2h0KGZhbHNlKTtcbiAgICB0aGlzLnNldElzTGFzdExlZnQoZmFsc2UpO1xuICAgIHRoaXMuaXNBdXRvTGVmdCA9IHRoaXMubnpMZWZ0ID09PSAnJyB8fCB0aGlzLm56TGVmdCA9PT0gdHJ1ZTtcbiAgICB0aGlzLmlzQXV0b1JpZ2h0ID0gdGhpcy5uelJpZ2h0ID09PSAnJyB8fCB0aGlzLm56UmlnaHQgPT09IHRydWU7XG4gICAgdGhpcy5pc0ZpeGVkTGVmdCA9IHRoaXMubnpMZWZ0ICE9PSBmYWxzZTtcbiAgICB0aGlzLmlzRml4ZWRSaWdodCA9IHRoaXMubnpSaWdodCAhPT0gZmFsc2U7XG4gICAgdGhpcy5pc0ZpeGVkID0gdGhpcy5pc0ZpeGVkTGVmdCB8fCB0aGlzLmlzRml4ZWRSaWdodDtcbiAgICBjb25zdCB2YWxpZGF0ZVB4ID0gKHZhbHVlOiBzdHJpbmcgfCBib29sZWFuKTogc3RyaW5nIHwgbnVsbCA9PiB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNldEF1dG9MZWZ0V2lkdGgodmFsaWRhdGVQeCh0aGlzLm56TGVmdCkpO1xuICAgIHRoaXMuc2V0QXV0b1JpZ2h0V2lkdGgodmFsaWRhdGVQeCh0aGlzLm56UmlnaHQpKTtcbiAgICB0aGlzLmNoYW5nZXMkLm5leHQoKTtcbiAgfVxufVxuIl19