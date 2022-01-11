/**
 * @fileoverview added by tsickle
 * Generated from: resize-handle.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzResizableService } from './resizable.service';
var NzResizeHandleMouseDownEvent = /** @class */ (function () {
    function NzResizeHandleMouseDownEvent(direction, mouseEvent) {
        this.direction = direction;
        this.mouseEvent = mouseEvent;
    }
    return NzResizeHandleMouseDownEvent;
}());
export { NzResizeHandleMouseDownEvent };
if (false) {
    /** @type {?} */
    NzResizeHandleMouseDownEvent.prototype.direction;
    /** @type {?} */
    NzResizeHandleMouseDownEvent.prototype.mouseEvent;
}
var NzResizeHandleComponent = /** @class */ (function () {
    function NzResizeHandleComponent(nzResizableService, cdr) {
        this.nzResizableService = nzResizableService;
        this.cdr = cdr;
        this.nzDirection = 'bottomRight';
        this.nzMouseDown = new EventEmitter();
        this.entered = false;
        this.destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    NzResizeHandleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzResizableService.mouseEntered$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} entered
         * @return {?}
         */
        function (entered) {
            _this.entered = entered;
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzResizeHandleComponent.prototype.onMousedown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.nzResizableService.handleMouseDown$.next(new NzResizeHandleMouseDownEvent(this.nzDirection, event));
    };
    /**
     * @return {?}
     */
    NzResizeHandleComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzResizeHandleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-resize-handle, [nz-resize-handle]',
                    exportAs: 'nzResizeHandle',
                    template: " <ng-content></ng-content> ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.nz-resizable-handle]': 'true',
                        '[class.nz-resizable-handle-top]': "nzDirection === 'top'",
                        '[class.nz-resizable-handle-right]': "nzDirection === 'right'",
                        '[class.nz-resizable-handle-bottom]': "nzDirection === 'bottom'",
                        '[class.nz-resizable-handle-left]': "nzDirection === 'left'",
                        '[class.nz-resizable-handle-topRight]': "nzDirection === 'topRight'",
                        '[class.nz-resizable-handle-bottomRight]': "nzDirection === 'bottomRight'",
                        '[class.nz-resizable-handle-bottomLeft]': "nzDirection === 'bottomLeft'",
                        '[class.nz-resizable-handle-topLeft]': "nzDirection === 'topLeft'",
                        '[class.nz-resizable-handle-box-hover]': 'entered',
                        '(mousedown)': 'onMousedown($event)',
                        '(touchstart)': 'onMousedown($event)'
                    }
                }] }
    ];
    /** @nocollapse */
    NzResizeHandleComponent.ctorParameters = function () { return [
        { type: NzResizableService },
        { type: ChangeDetectorRef }
    ]; };
    NzResizeHandleComponent.propDecorators = {
        nzDirection: [{ type: Input }],
        nzMouseDown: [{ type: Output }]
    };
    return NzResizeHandleComponent;
}());
export { NzResizeHandleComponent };
if (false) {
    /** @type {?} */
    NzResizeHandleComponent.prototype.nzDirection;
    /** @type {?} */
    NzResizeHandleComponent.prototype.nzMouseDown;
    /** @type {?} */
    NzResizeHandleComponent.prototype.entered;
    /**
     * @type {?}
     * @private
     */
    NzResizeHandleComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzResizeHandleComponent.prototype.nzResizableService;
    /**
     * @type {?}
     * @private
     */
    NzResizeHandleComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLWhhbmRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Jlc2l6YWJsZS8iLCJzb3VyY2VzIjpbInJlc2l6ZS1oYW5kbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RJLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBSXpEO0lBQ0Usc0NBQW1CLFNBQTRCLEVBQVMsVUFBbUM7UUFBeEUsY0FBUyxHQUFULFNBQVMsQ0FBbUI7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUF5QjtJQUFHLENBQUM7SUFDakcsbUNBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURhLGlEQUFtQzs7SUFBRSxrREFBMEM7O0FBRzdGO0lBMkJFLGlDQUFvQixrQkFBc0MsRUFBVSxHQUFzQjtRQUF0RSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFOakYsZ0JBQVcsR0FBc0IsYUFBYSxDQUFDO1FBQ3JDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWdDLENBQUM7UUFFbEYsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNSLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBRXNELENBQUM7Ozs7SUFFOUYsMENBQVE7OztJQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsT0FBTztZQUNwRixLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixLQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCw2Q0FBVzs7OztJQUFYLFVBQVksS0FBOEI7UUFDeEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLDRCQUE0QixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMzRyxDQUFDOzs7O0lBRUQsNkNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7O2dCQTNDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNDQUFzQztvQkFDaEQsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLDZCQUE2QjtvQkFDdkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLElBQUksRUFBRTt3QkFDSiw2QkFBNkIsRUFBRSxNQUFNO3dCQUNyQyxpQ0FBaUMsRUFBRSx1QkFBdUI7d0JBQzFELG1DQUFtQyxFQUFFLHlCQUF5Qjt3QkFDOUQsb0NBQW9DLEVBQUUsMEJBQTBCO3dCQUNoRSxrQ0FBa0MsRUFBRSx3QkFBd0I7d0JBQzVELHNDQUFzQyxFQUFFLDRCQUE0Qjt3QkFDcEUseUNBQXlDLEVBQUUsK0JBQStCO3dCQUMxRSx3Q0FBd0MsRUFBRSw4QkFBOEI7d0JBQ3hFLHFDQUFxQyxFQUFFLDJCQUEyQjt3QkFDbEUsdUNBQXVDLEVBQUUsU0FBUzt3QkFDbEQsYUFBYSxFQUFFLHFCQUFxQjt3QkFDcEMsY0FBYyxFQUFFLHFCQUFxQjtxQkFDdEM7aUJBQ0Y7Ozs7Z0JBM0JRLGtCQUFrQjtnQkFKTyxpQkFBaUI7Ozs4QkFpQ2hELEtBQUs7OEJBQ0wsTUFBTTs7SUFzQlQsOEJBQUM7Q0FBQSxBQTVDRCxJQTRDQztTQXhCWSx1QkFBdUI7OztJQUNsQyw4Q0FBd0Q7O0lBQ3hELDhDQUFrRjs7SUFFbEYsMENBQWdCOzs7OztJQUNoQiwyQ0FBdUM7Ozs7O0lBRTNCLHFEQUE4Qzs7Ozs7SUFBRSxzQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOelJlc2l6YWJsZVNlcnZpY2UgfSBmcm9tICcuL3Jlc2l6YWJsZS5zZXJ2aWNlJztcblxuZXhwb3J0IHR5cGUgTnpSZXNpemVEaXJlY3Rpb24gPSAndG9wJyB8ICdyaWdodCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICd0b3BSaWdodCcgfCAnYm90dG9tUmlnaHQnIHwgJ2JvdHRvbUxlZnQnIHwgJ3RvcExlZnQnO1xuXG5leHBvcnQgY2xhc3MgTnpSZXNpemVIYW5kbGVNb3VzZURvd25FdmVudCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaXJlY3Rpb246IE56UmVzaXplRGlyZWN0aW9uLCBwdWJsaWMgbW91c2VFdmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpIHt9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXJlc2l6ZS1oYW5kbGUsIFtuei1yZXNpemUtaGFuZGxlXScsXG4gIGV4cG9ydEFzOiAnbnpSZXNpemVIYW5kbGUnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5uei1yZXNpemFibGUtaGFuZGxlXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLm56LXJlc2l6YWJsZS1oYW5kbGUtdG9wXSc6IGBuekRpcmVjdGlvbiA9PT0gJ3RvcCdgLFxuICAgICdbY2xhc3MubnotcmVzaXphYmxlLWhhbmRsZS1yaWdodF0nOiBgbnpEaXJlY3Rpb24gPT09ICdyaWdodCdgLFxuICAgICdbY2xhc3MubnotcmVzaXphYmxlLWhhbmRsZS1ib3R0b21dJzogYG56RGlyZWN0aW9uID09PSAnYm90dG9tJ2AsXG4gICAgJ1tjbGFzcy5uei1yZXNpemFibGUtaGFuZGxlLWxlZnRdJzogYG56RGlyZWN0aW9uID09PSAnbGVmdCdgLFxuICAgICdbY2xhc3MubnotcmVzaXphYmxlLWhhbmRsZS10b3BSaWdodF0nOiBgbnpEaXJlY3Rpb24gPT09ICd0b3BSaWdodCdgLFxuICAgICdbY2xhc3MubnotcmVzaXphYmxlLWhhbmRsZS1ib3R0b21SaWdodF0nOiBgbnpEaXJlY3Rpb24gPT09ICdib3R0b21SaWdodCdgLFxuICAgICdbY2xhc3MubnotcmVzaXphYmxlLWhhbmRsZS1ib3R0b21MZWZ0XSc6IGBuekRpcmVjdGlvbiA9PT0gJ2JvdHRvbUxlZnQnYCxcbiAgICAnW2NsYXNzLm56LXJlc2l6YWJsZS1oYW5kbGUtdG9wTGVmdF0nOiBgbnpEaXJlY3Rpb24gPT09ICd0b3BMZWZ0J2AsXG4gICAgJ1tjbGFzcy5uei1yZXNpemFibGUtaGFuZGxlLWJveC1ob3Zlcl0nOiAnZW50ZXJlZCcsXG4gICAgJyhtb3VzZWRvd24pJzogJ29uTW91c2Vkb3duKCRldmVudCknLFxuICAgICcodG91Y2hzdGFydCknOiAnb25Nb3VzZWRvd24oJGV2ZW50KSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelJlc2l6ZUhhbmRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgbnpEaXJlY3Rpb246IE56UmVzaXplRGlyZWN0aW9uID0gJ2JvdHRvbVJpZ2h0JztcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56TW91c2VEb3duID0gbmV3IEV2ZW50RW1pdHRlcjxOelJlc2l6ZUhhbmRsZU1vdXNlRG93bkV2ZW50PigpO1xuXG4gIGVudGVyZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuelJlc2l6YWJsZVNlcnZpY2U6IE56UmVzaXphYmxlU2VydmljZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubnpSZXNpemFibGVTZXJ2aWNlLm1vdXNlRW50ZXJlZCQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShlbnRlcmVkID0+IHtcbiAgICAgIHRoaXMuZW50ZXJlZCA9IGVudGVyZWQ7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uTW91c2Vkb3duKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IHZvaWQge1xuICAgIHRoaXMubnpSZXNpemFibGVTZXJ2aWNlLmhhbmRsZU1vdXNlRG93biQubmV4dChuZXcgTnpSZXNpemVIYW5kbGVNb3VzZURvd25FdmVudCh0aGlzLm56RGlyZWN0aW9uLCBldmVudCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=