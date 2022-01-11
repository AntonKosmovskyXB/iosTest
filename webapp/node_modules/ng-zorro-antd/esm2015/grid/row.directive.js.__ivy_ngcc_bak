/**
 * @fileoverview added by tsickle
 * Generated from: row.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { Directive, ElementRef, Input, NgZone, Renderer2 } from '@angular/core';
import { gridResponsiveMap, NzBreakpointService } from 'ng-zorro-antd/core/services';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
export class NzRowDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} mediaMatcher
     * @param {?} ngZone
     * @param {?} platform
     * @param {?} breakpointService
     */
    constructor(elementRef, renderer, mediaMatcher, ngZone, platform, breakpointService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.mediaMatcher = mediaMatcher;
        this.ngZone = ngZone;
        this.platform = platform;
        this.breakpointService = breakpointService;
        /**
         * @deprecated don't need nzType="flex" after 9.0
         */
        this.nzType = 'flex';
        this.nzAlign = null;
        this.nzJustify = null;
        this.nzGutter = null;
        this.actualGutter$ = new ReplaySubject(1);
        this.destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    getGutter() {
        /** @type {?} */
        const results = [null, null];
        /** @type {?} */
        const gutter = this.nzGutter || 0;
        /** @type {?} */
        const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, null];
        normalizedGutter.forEach((/**
         * @param {?} g
         * @param {?} index
         * @return {?}
         */
        (g, index) => {
            if (typeof g === 'object' && g !== null) {
                results[index] = null;
                Object.keys(gridResponsiveMap).map((/**
                 * @param {?} screen
                 * @return {?}
                 */
                (screen) => {
                    /** @type {?} */
                    const bp = (/** @type {?} */ (screen));
                    if (this.mediaMatcher.matchMedia(gridResponsiveMap[bp]).matches && g[bp]) {
                        results[index] = (/** @type {?} */ ((/** @type {?} */ (g))[bp]));
                    }
                }));
            }
            else {
                results[index] = g || null;
            }
        }));
        return results;
    }
    /**
     * @return {?}
     */
    setGutterStyle() {
        const [horizontalGutter, verticalGutter] = this.getGutter();
        this.actualGutter$.next([horizontalGutter, verticalGutter]);
        /** @type {?} */
        const renderGutter = (/**
         * @param {?} name
         * @param {?} gutter
         * @return {?}
         */
        (name, gutter) => {
            /** @type {?} */
            const nativeElement = this.elementRef.nativeElement;
            if (gutter !== null) {
                this.renderer.setStyle(nativeElement, name, `-${gutter / 2}px`);
            }
        });
        renderGutter('margin-left', horizontalGutter);
        renderGutter('margin-right', horizontalGutter);
        renderGutter('margin-top', verticalGutter);
        renderGutter('margin-bottom', verticalGutter);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setGutterStyle();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzGutter) {
            this.setGutterStyle();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.platform.isBrowser) {
            this.breakpointService
                .subscribe(gridResponsiveMap)
                .pipe(takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.setGutterStyle();
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzRowDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-row],nz-row,nz-form-item',
                exportAs: 'nzRow',
                host: {
                    '[class.ant-row]': `true`,
                    '[class.ant-row-top]': `nzAlign === 'top'`,
                    '[class.ant-row-middle]': `nzAlign === 'middle'`,
                    '[class.ant-row-bottom]': `nzAlign === 'bottom'`,
                    '[class.ant-row-start]': `nzJustify === 'start'`,
                    '[class.ant-row-end]': `nzJustify === 'end'`,
                    '[class.ant-row-center]': `nzJustify === 'center'`,
                    '[class.ant-row-space-around]': `nzJustify === 'space-around'`,
                    '[class.ant-row-space-between]': `nzJustify === 'space-between'`
                }
            },] }
];
/** @nocollapse */
NzRowDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: MediaMatcher },
    { type: NgZone },
    { type: Platform },
    { type: NzBreakpointService }
];
NzRowDirective.propDecorators = {
    nzType: [{ type: Input }],
    nzAlign: [{ type: Input }],
    nzJustify: [{ type: Input }],
    nzGutter: [{ type: Input }]
};
if (false) {
    /**
     * @deprecated don't need nzType="flex" after 9.0
     * @type {?}
     */
    NzRowDirective.prototype.nzType;
    /** @type {?} */
    NzRowDirective.prototype.nzAlign;
    /** @type {?} */
    NzRowDirective.prototype.nzJustify;
    /** @type {?} */
    NzRowDirective.prototype.nzGutter;
    /** @type {?} */
    NzRowDirective.prototype.actualGutter$;
    /**
     * @type {?}
     * @private
     */
    NzRowDirective.prototype.destroy$;
    /** @type {?} */
    NzRowDirective.prototype.elementRef;
    /** @type {?} */
    NzRowDirective.prototype.renderer;
    /** @type {?} */
    NzRowDirective.prototype.mediaMatcher;
    /** @type {?} */
    NzRowDirective.prototype.ngZone;
    /** @type {?} */
    NzRowDirective.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzRowDirective.prototype.breakpointService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZ3JpZC8iLCJzb3VyY2VzIjpbInJvdy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBZ0MsU0FBUyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUM1SSxPQUFPLEVBQUUsaUJBQWlCLEVBQW1CLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBb0IzQyxNQUFNLE9BQU8sY0FBYzs7Ozs7Ozs7O0lBZ0R6QixZQUNTLFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ25CLFlBQTBCLEVBQzFCLE1BQWMsRUFDZCxRQUFrQixFQUNqQixpQkFBc0M7UUFMdkMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2pCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBcUI7Ozs7UUFsRHZDLFdBQU0sR0FBa0IsTUFBTSxDQUFDO1FBQy9CLFlBQU8sR0FBbUIsSUFBSSxDQUFDO1FBQy9CLGNBQVMsR0FBcUIsSUFBSSxDQUFDO1FBQ25DLGFBQVEsR0FBNEYsSUFBSSxDQUFDO1FBRXpHLGtCQUFhLEdBQUcsSUFBSSxhQUFhLENBQWlDLENBQUMsQ0FBQyxDQUFDO1FBRTdELGFB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RUFBQyxDQUFDO1NBQ047SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7WUFoR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixJQUFJLEVBQUU7b0JBQ0osaUJBQWlCLEVBQUUsTUFBTTtvQkFDekIscUJBQXFCLEVBQUUsbUJBQW1CO29CQUMxQyx3QkFBd0IsRUFBRSxzQkFBc0I7b0JBQ2hELHdCQUF3QixFQUFFLHNCQUFzQjtvQkFDaEQsdUJBQXVCLEVBQUUsdUJBQXVCO29CQUNoRCxxQkFBcUIsRUFBRSxxQkFBcUI7b0JBQzVDLHdCQUF3QixFQUFFLHdCQUF3QjtvQkFDbEQsOEJBQThCLEVBQUUsOEJBQThCO29CQUM5RCwrQkFBK0IsRUFBRSwrQkFBK0I7aUJBQ2pFO2FBQ0Y7Ozs7WUF2QmtDLFVBQVU7WUFBK0MsU0FBUztZQUY1RixZQUFZO1lBRWlDLE1BQU07WUFEbkQsUUFBUTtZQUU0QixtQkFBbUI7OztxQkEyQjdELEtBQUs7c0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7Ozs7Ozs7SUFITixnQ0FBd0M7O0lBQ3hDLGlDQUF3Qzs7SUFDeEMsbUNBQTRDOztJQUM1QyxrQ0FBa0g7O0lBRWxILHVDQUE4RTs7Ozs7SUFFOUUsa0NBQTBDOztJQXNDeEMsb0NBQTZCOztJQUM3QixrQ0FBMEI7O0lBQzFCLHNDQUFpQzs7SUFDakMsZ0NBQXFCOztJQUNyQixrQ0FBeUI7Ozs7O0lBQ3pCLDJDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IE1lZGlhTWF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgTmdab25lLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGdyaWRSZXNwb25zaXZlTWFwLCBOekJyZWFrcG9pbnRLZXksIE56QnJlYWtwb2ludFNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvc2VydmljZXMnO1xuaW1wb3J0IHsgSW5kZXhhYmxlT2JqZWN0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IFJlcGxheVN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IHR5cGUgTnpKdXN0aWZ5ID0gJ3N0YXJ0JyB8ICdlbmQnIHwgJ2NlbnRlcicgfCAnc3BhY2UtYXJvdW5kJyB8ICdzcGFjZS1iZXR3ZWVuJztcbmV4cG9ydCB0eXBlIE56QWxpZ24gPSAndG9wJyB8ICdtaWRkbGUnIHwgJ2JvdHRvbSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuei1yb3ddLG56LXJvdyxuei1mb3JtLWl0ZW0nLFxuICBleHBvcnRBczogJ256Um93JyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXJvd10nOiBgdHJ1ZWAsXG4gICAgJ1tjbGFzcy5hbnQtcm93LXRvcF0nOiBgbnpBbGlnbiA9PT0gJ3RvcCdgLFxuICAgICdbY2xhc3MuYW50LXJvdy1taWRkbGVdJzogYG56QWxpZ24gPT09ICdtaWRkbGUnYCxcbiAgICAnW2NsYXNzLmFudC1yb3ctYm90dG9tXSc6IGBuekFsaWduID09PSAnYm90dG9tJ2AsXG4gICAgJ1tjbGFzcy5hbnQtcm93LXN0YXJ0XSc6IGBuekp1c3RpZnkgPT09ICdzdGFydCdgLFxuICAgICdbY2xhc3MuYW50LXJvdy1lbmRdJzogYG56SnVzdGlmeSA9PT0gJ2VuZCdgLFxuICAgICdbY2xhc3MuYW50LXJvdy1jZW50ZXJdJzogYG56SnVzdGlmeSA9PT0gJ2NlbnRlcidgLFxuICAgICdbY2xhc3MuYW50LXJvdy1zcGFjZS1hcm91bmRdJzogYG56SnVzdGlmeSA9PT0gJ3NwYWNlLWFyb3VuZCdgLFxuICAgICdbY2xhc3MuYW50LXJvdy1zcGFjZS1iZXR3ZWVuXSc6IGBuekp1c3RpZnkgPT09ICdzcGFjZS1iZXR3ZWVuJ2BcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelJvd0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgZG9uJ3QgbmVlZCBuelR5cGU9XCJmbGV4XCIgYWZ0ZXIgOS4wXG4gICAqL1xuICBASW5wdXQoKSBuelR5cGU6ICdmbGV4JyB8IG51bGwgPSAnZmxleCc7XG4gIEBJbnB1dCgpIG56QWxpZ246IE56QWxpZ24gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpKdXN0aWZ5OiBOekp1c3RpZnkgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpHdXR0ZXI6IG51bWJlciB8IEluZGV4YWJsZU9iamVjdCB8IFtudW1iZXIsIG51bWJlcl0gfCBbSW5kZXhhYmxlT2JqZWN0LCBJbmRleGFibGVPYmplY3RdIHwgbnVsbCA9IG51bGw7XG5cbiAgcmVhZG9ubHkgYWN0dWFsR3V0dGVyJCA9IG5ldyBSZXBsYXlTdWJqZWN0PFtudW1iZXIgfCBudWxsLCBudW1iZXIgfCBudWxsXT4oMSk7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgZ2V0R3V0dGVyKCk6IFtudW1iZXIgfCBudWxsLCBudW1iZXIgfCBudWxsXSB7XG4gICAgY29uc3QgcmVzdWx0czogW251bWJlciB8IG51bGwsIG51bWJlciB8IG51bGxdID0gW251bGwsIG51bGxdO1xuICAgIGNvbnN0IGd1dHRlciA9IHRoaXMubnpHdXR0ZXIgfHwgMDtcbiAgICBjb25zdCBub3JtYWxpemVkR3V0dGVyID0gQXJyYXkuaXNBcnJheShndXR0ZXIpID8gZ3V0dGVyIDogW2d1dHRlciwgbnVsbF07XG4gICAgbm9ybWFsaXplZEd1dHRlci5mb3JFYWNoKChnLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBnID09PSAnb2JqZWN0JyAmJiBnICE9PSBudWxsKSB7XG4gICAgICAgIHJlc3VsdHNbaW5kZXhdID0gbnVsbDtcbiAgICAgICAgT2JqZWN0LmtleXMoZ3JpZFJlc3BvbnNpdmVNYXApLm1hcCgoc2NyZWVuOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBjb25zdCBicCA9IHNjcmVlbiBhcyBOekJyZWFrcG9pbnRLZXk7XG4gICAgICAgICAgaWYgKHRoaXMubWVkaWFNYXRjaGVyLm1hdGNoTWVkaWEoZ3JpZFJlc3BvbnNpdmVNYXBbYnBdKS5tYXRjaGVzICYmIGdbYnBdKSB7XG4gICAgICAgICAgICByZXN1bHRzW2luZGV4XSA9IGchW2JwXSBhcyBudW1iZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHNbaW5kZXhdID0gZyB8fCBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgc2V0R3V0dGVyU3R5bGUoKTogdm9pZCB7XG4gICAgY29uc3QgW2hvcml6b250YWxHdXR0ZXIsIHZlcnRpY2FsR3V0dGVyXSA9IHRoaXMuZ2V0R3V0dGVyKCk7XG4gICAgdGhpcy5hY3R1YWxHdXR0ZXIkLm5leHQoW2hvcml6b250YWxHdXR0ZXIsIHZlcnRpY2FsR3V0dGVyXSk7XG4gICAgY29uc3QgcmVuZGVyR3V0dGVyID0gKG5hbWU6IHN0cmluZywgZ3V0dGVyOiBudW1iZXIgfCBudWxsKSA9PiB7XG4gICAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBpZiAoZ3V0dGVyICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUobmF0aXZlRWxlbWVudCwgbmFtZSwgYC0ke2d1dHRlciAvIDJ9cHhgKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJlbmRlckd1dHRlcignbWFyZ2luLWxlZnQnLCBob3Jpem9udGFsR3V0dGVyKTtcbiAgICByZW5kZXJHdXR0ZXIoJ21hcmdpbi1yaWdodCcsIGhvcml6b250YWxHdXR0ZXIpO1xuICAgIHJlbmRlckd1dHRlcignbWFyZ2luLXRvcCcsIHZlcnRpY2FsR3V0dGVyKTtcbiAgICByZW5kZXJHdXR0ZXIoJ21hcmdpbi1ib3R0b20nLCB2ZXJ0aWNhbEd1dHRlcik7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgbWVkaWFNYXRjaGVyOiBNZWRpYU1hdGNoZXIsXG4gICAgcHVibGljIG5nWm9uZTogTmdab25lLFxuICAgIHB1YmxpYyBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcHJpdmF0ZSBicmVha3BvaW50U2VydmljZTogTnpCcmVha3BvaW50U2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRHdXR0ZXJTdHlsZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56R3V0dGVyKSB7XG4gICAgICB0aGlzLnNldEd1dHRlclN0eWxlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5icmVha3BvaW50U2VydmljZVxuICAgICAgICAuc3Vic2NyaWJlKGdyaWRSZXNwb25zaXZlTWFwKVxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0R3V0dGVyU3R5bGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=