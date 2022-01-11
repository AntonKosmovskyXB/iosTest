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
export class NzThMeasureDirective {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(renderer, elementRef) {
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
    ngOnChanges(changes) {
        const { nzWidth, colspan, rowspan, colSpan, rowSpan } = changes;
        if (colspan || colSpan) {
            /** @type {?} */
            const col = this.colspan || this.colSpan;
            if (!isNil(col)) {
                this.renderer.setAttribute(this.elementRef.nativeElement, 'colspan', `${col}`);
            }
            else {
                this.renderer.removeAttribute(this.elementRef.nativeElement, 'colspan');
            }
        }
        if (rowspan || rowSpan) {
            /** @type {?} */
            const row = this.rowspan || this.rowSpan;
            if (!isNil(row)) {
                this.renderer.setAttribute(this.elementRef.nativeElement, 'rowspan', `${row}`);
            }
            else {
                this.renderer.removeAttribute(this.elementRef.nativeElement, 'rowspan');
            }
        }
        if (nzWidth || colspan) {
            this.changes$.next();
        }
    }
}
NzThMeasureDirective.decorators = [
    { type: Directive, args: [{
                selector: 'th'
            },] }
];
/** @nocollapse */
NzThMeasureDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
NzThMeasureDirective.propDecorators = {
    nzWidth: [{ type: Input }],
    colspan: [{ type: Input }],
    colSpan: [{ type: Input }],
    rowspan: [{ type: Input }],
    rowSpan: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGgtbWVhc3VyZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RhYmxlLyIsInNvdXJjZXMiOlsic3JjL2NlbGwvdGgtbWVhc3VyZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLFNBQVMsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFLL0IsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7SUFPL0IsWUFBb0IsUUFBbUIsRUFBVSxVQUFzQjtRQUFuRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQU52RSxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNoQixZQUFPLEdBQWtCLElBQUksQ0FBQztRQUM5QixZQUFPLEdBQTJCLElBQUksQ0FBQztRQUN2QyxZQUFPLEdBQTJCLElBQUksQ0FBQztRQUN2QyxZQUFPLEdBQTJCLElBQUksQ0FBQztRQUN2QyxZQUFPLEdBQTJCLElBQUksQ0FBQztJQUMwQixDQUFDOzs7OztJQUMzRSxXQUFXLENBQUMsT0FBc0I7Y0FDMUIsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUcsT0FBTztRQUMvRCxJQUFJLE9BQU8sSUFBSSxPQUFPLEVBQUU7O2tCQUNoQixHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTztZQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7YUFDaEY7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDekU7U0FDRjtRQUNELElBQUksT0FBTyxJQUFJLE9BQU8sRUFBRTs7a0JBQ2hCLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQzthQUNoRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQzthQUN6RTtTQUNGO1FBQ0QsSUFBSSxPQUFPLElBQUksT0FBTyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDOzs7WUFoQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxJQUFJO2FBQ2Y7Ozs7WUFOaUQsU0FBUztZQUF2QyxVQUFVOzs7c0JBUzNCLEtBQUs7c0JBQ0wsS0FBSztzQkFDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSzs7OztJQUxOLHdDQUF5Qjs7SUFDekIsdUNBQXVDOztJQUN2Qyx1Q0FBZ0Q7O0lBQ2hELHVDQUFnRDs7SUFDaEQsdUNBQWdEOztJQUNoRCx1Q0FBZ0Q7Ozs7O0lBQ3BDLHdDQUEyQjs7Ozs7SUFBRSwwQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzTmlsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICd0aCdcbn0pXG5leHBvcnQgY2xhc3MgTnpUaE1lYXN1cmVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBjaGFuZ2VzJCA9IG5ldyBTdWJqZWN0KCk7XG4gIEBJbnB1dCgpIG56V2lkdGg6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBjb2xzcGFuOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgY29sU3Bhbjogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIHJvd3NwYW46IHN0cmluZyB8IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSByb3dTcGFuOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG56V2lkdGgsIGNvbHNwYW4sIHJvd3NwYW4sIGNvbFNwYW4sIHJvd1NwYW4gfSA9IGNoYW5nZXM7XG4gICAgaWYgKGNvbHNwYW4gfHwgY29sU3Bhbikge1xuICAgICAgY29uc3QgY29sID0gdGhpcy5jb2xzcGFuIHx8IHRoaXMuY29sU3BhbjtcbiAgICAgIGlmICghaXNOaWwoY29sKSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NvbHNwYW4nLCBgJHtjb2x9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NvbHNwYW4nKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJvd3NwYW4gfHwgcm93U3Bhbikge1xuICAgICAgY29uc3Qgcm93ID0gdGhpcy5yb3dzcGFuIHx8IHRoaXMucm93U3BhbjtcbiAgICAgIGlmICghaXNOaWwocm93KSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3Jvd3NwYW4nLCBgJHtyb3d9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3Jvd3NwYW4nKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG56V2lkdGggfHwgY29sc3Bhbikge1xuICAgICAgdGhpcy5jaGFuZ2VzJC5uZXh0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=