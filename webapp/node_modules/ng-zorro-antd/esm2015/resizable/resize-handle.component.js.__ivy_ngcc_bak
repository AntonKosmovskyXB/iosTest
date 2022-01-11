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
export class NzResizeHandleMouseDownEvent {
    /**
     * @param {?} direction
     * @param {?} mouseEvent
     */
    constructor(direction, mouseEvent) {
        this.direction = direction;
        this.mouseEvent = mouseEvent;
    }
}
if (false) {
    /** @type {?} */
    NzResizeHandleMouseDownEvent.prototype.direction;
    /** @type {?} */
    NzResizeHandleMouseDownEvent.prototype.mouseEvent;
}
export class NzResizeHandleComponent {
    /**
     * @param {?} nzResizableService
     * @param {?} cdr
     */
    constructor(nzResizableService, cdr) {
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
    ngOnInit() {
        this.nzResizableService.mouseEntered$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} entered
         * @return {?}
         */
        entered => {
            this.entered = entered;
            this.cdr.markForCheck();
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMousedown(event) {
        this.nzResizableService.handleMouseDown$.next(new NzResizeHandleMouseDownEvent(this.nzDirection, event));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzResizeHandleComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-resize-handle, [nz-resize-handle]',
                exportAs: 'nzResizeHandle',
                template: ` <ng-content></ng-content> `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.nz-resizable-handle]': 'true',
                    '[class.nz-resizable-handle-top]': `nzDirection === 'top'`,
                    '[class.nz-resizable-handle-right]': `nzDirection === 'right'`,
                    '[class.nz-resizable-handle-bottom]': `nzDirection === 'bottom'`,
                    '[class.nz-resizable-handle-left]': `nzDirection === 'left'`,
                    '[class.nz-resizable-handle-topRight]': `nzDirection === 'topRight'`,
                    '[class.nz-resizable-handle-bottomRight]': `nzDirection === 'bottomRight'`,
                    '[class.nz-resizable-handle-bottomLeft]': `nzDirection === 'bottomLeft'`,
                    '[class.nz-resizable-handle-topLeft]': `nzDirection === 'topLeft'`,
                    '[class.nz-resizable-handle-box-hover]': 'entered',
                    '(mousedown)': 'onMousedown($event)',
                    '(touchstart)': 'onMousedown($event)'
                }
            }] }
];
/** @nocollapse */
NzResizeHandleComponent.ctorParameters = () => [
    { type: NzResizableService },
    { type: ChangeDetectorRef }
];
NzResizeHandleComponent.propDecorators = {
    nzDirection: [{ type: Input }],
    nzMouseDown: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLWhhbmRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Jlc2l6YWJsZS8iLCJzb3VyY2VzIjpbInJlc2l6ZS1oYW5kbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RJLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBSXpELE1BQU0sT0FBTyw0QkFBNEI7Ozs7O0lBQ3ZDLFlBQW1CLFNBQTRCLEVBQVMsVUFBbUM7UUFBeEUsY0FBUyxHQUFULFNBQVMsQ0FBbUI7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUF5QjtJQUFHLENBQUM7Q0FDaEc7OztJQURhLGlEQUFtQzs7SUFBRSxrREFBMEM7O0FBdUI3RixNQUFNLE9BQU8sdUJBQXVCOzs7OztJQU9sQyxZQUFvQixrQkFBc0MsRUFBVSxHQUFzQjtRQUF0RSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFOakYsZ0JBQVcsR0FBc0IsYUFBYSxDQUFDO1FBQ3JDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWdDLENBQUM7UUFFbEYsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNSLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBRXNELENBQUM7Ozs7SUFFOUYsUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDdkYsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQThCO1FBQ3hDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDM0csQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBM0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0NBQXNDO2dCQUNoRCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsSUFBSSxFQUFFO29CQUNKLDZCQUE2QixFQUFFLE1BQU07b0JBQ3JDLGlDQUFpQyxFQUFFLHVCQUF1QjtvQkFDMUQsbUNBQW1DLEVBQUUseUJBQXlCO29CQUM5RCxvQ0FBb0MsRUFBRSwwQkFBMEI7b0JBQ2hFLGtDQUFrQyxFQUFFLHdCQUF3QjtvQkFDNUQsc0NBQXNDLEVBQUUsNEJBQTRCO29CQUNwRSx5Q0FBeUMsRUFBRSwrQkFBK0I7b0JBQzFFLHdDQUF3QyxFQUFFLDhCQUE4QjtvQkFDeEUscUNBQXFDLEVBQUUsMkJBQTJCO29CQUNsRSx1Q0FBdUMsRUFBRSxTQUFTO29CQUNsRCxhQUFhLEVBQUUscUJBQXFCO29CQUNwQyxjQUFjLEVBQUUscUJBQXFCO2lCQUN0QzthQUNGOzs7O1lBM0JRLGtCQUFrQjtZQUpPLGlCQUFpQjs7OzBCQWlDaEQsS0FBSzswQkFDTCxNQUFNOzs7O0lBRFAsOENBQXdEOztJQUN4RCw4Q0FBa0Y7O0lBRWxGLDBDQUFnQjs7Ozs7SUFDaEIsMkNBQXVDOzs7OztJQUUzQixxREFBOEM7Ozs7O0lBQUUsc0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTnpSZXNpemFibGVTZXJ2aWNlIH0gZnJvbSAnLi9yZXNpemFibGUuc2VydmljZSc7XG5cbmV4cG9ydCB0eXBlIE56UmVzaXplRGlyZWN0aW9uID0gJ3RvcCcgfCAncmlnaHQnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAndG9wUmlnaHQnIHwgJ2JvdHRvbVJpZ2h0JyB8ICdib3R0b21MZWZ0JyB8ICd0b3BMZWZ0JztcblxuZXhwb3J0IGNsYXNzIE56UmVzaXplSGFuZGxlTW91c2VEb3duRXZlbnQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlyZWN0aW9uOiBOelJlc2l6ZURpcmVjdGlvbiwgcHVibGljIG1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSB7fVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1yZXNpemUtaGFuZGxlLCBbbnotcmVzaXplLWhhbmRsZV0nLFxuICBleHBvcnRBczogJ256UmVzaXplSGFuZGxlJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MubnotcmVzaXphYmxlLWhhbmRsZV0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5uei1yZXNpemFibGUtaGFuZGxlLXRvcF0nOiBgbnpEaXJlY3Rpb24gPT09ICd0b3AnYCxcbiAgICAnW2NsYXNzLm56LXJlc2l6YWJsZS1oYW5kbGUtcmlnaHRdJzogYG56RGlyZWN0aW9uID09PSAncmlnaHQnYCxcbiAgICAnW2NsYXNzLm56LXJlc2l6YWJsZS1oYW5kbGUtYm90dG9tXSc6IGBuekRpcmVjdGlvbiA9PT0gJ2JvdHRvbSdgLFxuICAgICdbY2xhc3MubnotcmVzaXphYmxlLWhhbmRsZS1sZWZ0XSc6IGBuekRpcmVjdGlvbiA9PT0gJ2xlZnQnYCxcbiAgICAnW2NsYXNzLm56LXJlc2l6YWJsZS1oYW5kbGUtdG9wUmlnaHRdJzogYG56RGlyZWN0aW9uID09PSAndG9wUmlnaHQnYCxcbiAgICAnW2NsYXNzLm56LXJlc2l6YWJsZS1oYW5kbGUtYm90dG9tUmlnaHRdJzogYG56RGlyZWN0aW9uID09PSAnYm90dG9tUmlnaHQnYCxcbiAgICAnW2NsYXNzLm56LXJlc2l6YWJsZS1oYW5kbGUtYm90dG9tTGVmdF0nOiBgbnpEaXJlY3Rpb24gPT09ICdib3R0b21MZWZ0J2AsXG4gICAgJ1tjbGFzcy5uei1yZXNpemFibGUtaGFuZGxlLXRvcExlZnRdJzogYG56RGlyZWN0aW9uID09PSAndG9wTGVmdCdgLFxuICAgICdbY2xhc3MubnotcmVzaXphYmxlLWhhbmRsZS1ib3gtaG92ZXJdJzogJ2VudGVyZWQnLFxuICAgICcobW91c2Vkb3duKSc6ICdvbk1vdXNlZG93bigkZXZlbnQpJyxcbiAgICAnKHRvdWNoc3RhcnQpJzogJ29uTW91c2Vkb3duKCRldmVudCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpSZXNpemVIYW5kbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIG56RGlyZWN0aW9uOiBOelJlc2l6ZURpcmVjdGlvbiA9ICdib3R0b21SaWdodCc7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek1vdXNlRG93biA9IG5ldyBFdmVudEVtaXR0ZXI8TnpSZXNpemVIYW5kbGVNb3VzZURvd25FdmVudD4oKTtcblxuICBlbnRlcmVkID0gZmFsc2U7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbnpSZXNpemFibGVTZXJ2aWNlOiBOelJlc2l6YWJsZVNlcnZpY2UsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm56UmVzaXphYmxlU2VydmljZS5tb3VzZUVudGVyZWQkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoZW50ZXJlZCA9PiB7XG4gICAgICB0aGlzLmVudGVyZWQgPSBlbnRlcmVkO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBvbk1vdXNlZG93bihldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm56UmVzaXphYmxlU2VydmljZS5oYW5kbGVNb3VzZURvd24kLm5leHQobmV3IE56UmVzaXplSGFuZGxlTW91c2VEb3duRXZlbnQodGhpcy5uekRpcmVjdGlvbiwgZXZlbnQpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19