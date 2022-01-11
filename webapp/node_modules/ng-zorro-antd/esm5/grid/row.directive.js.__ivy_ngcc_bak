/**
 * @fileoverview added by tsickle
 * Generated from: row.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __read } from "tslib";
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
var NzRowDirective = /** @class */ (function () {
    function NzRowDirective(elementRef, renderer, mediaMatcher, ngZone, platform, breakpointService) {
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
    NzRowDirective.prototype.getGutter = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var results = [null, null];
        /** @type {?} */
        var gutter = this.nzGutter || 0;
        /** @type {?} */
        var normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, null];
        normalizedGutter.forEach((/**
         * @param {?} g
         * @param {?} index
         * @return {?}
         */
        function (g, index) {
            if (typeof g === 'object' && g !== null) {
                results[index] = null;
                Object.keys(gridResponsiveMap).map((/**
                 * @param {?} screen
                 * @return {?}
                 */
                function (screen) {
                    /** @type {?} */
                    var bp = (/** @type {?} */ (screen));
                    if (_this.mediaMatcher.matchMedia(gridResponsiveMap[bp]).matches && g[bp]) {
                        results[index] = (/** @type {?} */ ((/** @type {?} */ (g))[bp]));
                    }
                }));
            }
            else {
                results[index] = g || null;
            }
        }));
        return results;
    };
    /**
     * @return {?}
     */
    NzRowDirective.prototype.setGutterStyle = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var _a = __read(this.getGutter(), 2), horizontalGutter = _a[0], verticalGutter = _a[1];
        this.actualGutter$.next([horizontalGutter, verticalGutter]);
        /** @type {?} */
        var renderGutter = (/**
         * @param {?} name
         * @param {?} gutter
         * @return {?}
         */
        function (name, gutter) {
            /** @type {?} */
            var nativeElement = _this.elementRef.nativeElement;
            if (gutter !== null) {
                _this.renderer.setStyle(nativeElement, name, "-" + gutter / 2 + "px");
            }
        });
        renderGutter('margin-left', horizontalGutter);
        renderGutter('margin-right', horizontalGutter);
        renderGutter('margin-top', verticalGutter);
        renderGutter('margin-bottom', verticalGutter);
    };
    /**
     * @return {?}
     */
    NzRowDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setGutterStyle();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzRowDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzGutter) {
            this.setGutterStyle();
        }
    };
    /**
     * @return {?}
     */
    NzRowDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.platform.isBrowser) {
            this.breakpointService
                .subscribe(gridResponsiveMap)
                .pipe(takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.setGutterStyle();
            }));
        }
    };
    /**
     * @return {?}
     */
    NzRowDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzRowDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-row],nz-row,nz-form-item',
                    exportAs: 'nzRow',
                    host: {
                        '[class.ant-row]': "true",
                        '[class.ant-row-top]': "nzAlign === 'top'",
                        '[class.ant-row-middle]': "nzAlign === 'middle'",
                        '[class.ant-row-bottom]': "nzAlign === 'bottom'",
                        '[class.ant-row-start]': "nzJustify === 'start'",
                        '[class.ant-row-end]': "nzJustify === 'end'",
                        '[class.ant-row-center]': "nzJustify === 'center'",
                        '[class.ant-row-space-around]': "nzJustify === 'space-around'",
                        '[class.ant-row-space-between]': "nzJustify === 'space-between'"
                    }
                },] }
    ];
    /** @nocollapse */
    NzRowDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: MediaMatcher },
        { type: NgZone },
        { type: Platform },
        { type: NzBreakpointService }
    ]; };
    NzRowDirective.propDecorators = {
        nzType: [{ type: Input }],
        nzAlign: [{ type: Input }],
        nzJustify: [{ type: Input }],
        nzGutter: [{ type: Input }]
    };
    return NzRowDirective;
}());
export { NzRowDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZ3JpZC8iLCJzb3VyY2VzIjpbInJvdy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWdDLFNBQVMsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDNUksT0FBTyxFQUFFLGlCQUFpQixFQUFtQixtQkFBbUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXRHLE9BQU8sRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUszQztJQStERSx3QkFDUyxVQUFzQixFQUN0QixRQUFtQixFQUNuQixZQUEwQixFQUMxQixNQUFjLEVBQ2QsUUFBa0IsRUFDakIsaUJBQXNDO1FBTHZDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNqQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQXFCOzs7O1FBbER2QyxXQUFNLEdBQWtCLE1BQU0sQ0FBQztRQUMvQixZQUFPLEdBQW1CLElBQUksQ0FBQztRQUMvQixjQUFTLEdBQXFCLElBQUksQ0FBQztRQUNuQyxhQUFRLEdBQTRGLElBQUksQ0FBQztRQUV6RyxrQkFBYSxHQUFHLElBQUksYUFBYSxDQUFpQyxDQUFDLENBQUMsQ0FBQztRQUU3RCxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUs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QUMsQ0FBQztTQUNOO0lBQ0gsQ0FBQzs7OztJQUVELG9DQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOztnQkFoR0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLFFBQVEsRUFBRSxPQUFPO29CQUNqQixJQUFJLEVBQUU7d0JBQ0osaUJBQWlCLEVBQUUsTUFBTTt3QkFDekIscUJBQXFCLEVBQUUsbUJBQW1CO3dCQUMxQyx3QkFBd0IsRUFBRSxzQkFBc0I7d0JBQ2hELHdCQUF3QixFQUFFLHNCQUFzQjt3QkFDaEQsdUJBQXVCLEVBQUUsdUJBQXVCO3dCQUNoRCxxQkFBcUIsRUFBRSxxQkFBcUI7d0JBQzVDLHdCQUF3QixFQUFFLHdCQUF3Qjt3QkFDbEQsOEJBQThCLEVBQUUsOEJBQThCO3dCQUM5RCwrQkFBK0IsRUFBRSwrQkFBK0I7cUJBQ2pFO2lCQUNGOzs7O2dCQXZCa0MsVUFBVTtnQkFBK0MsU0FBUztnQkFGNUYsWUFBWTtnQkFFaUMsTUFBTTtnQkFEbkQsUUFBUTtnQkFFNEIsbUJBQW1COzs7eUJBMkI3RCxLQUFLOzBCQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLOztJQTJFUixxQkFBQztDQUFBLEFBakdELElBaUdDO1NBbEZZLGNBQWM7Ozs7OztJQUl6QixnQ0FBd0M7O0lBQ3hDLGlDQUF3Qzs7SUFDeEMsbUNBQTRDOztJQUM1QyxrQ0FBa0g7O0lBRWxILHVDQUE4RTs7Ozs7SUFFOUUsa0NBQTBDOztJQXNDeEMsb0NBQTZCOztJQUM3QixrQ0FBMEI7O0lBQzFCLHNDQUFpQzs7SUFDakMsZ0NBQXFCOztJQUNyQixrQ0FBeUI7Ozs7O0lBQ3pCLDJDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IE1lZGlhTWF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgTmdab25lLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGdyaWRSZXNwb25zaXZlTWFwLCBOekJyZWFrcG9pbnRLZXksIE56QnJlYWtwb2ludFNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvc2VydmljZXMnO1xuaW1wb3J0IHsgSW5kZXhhYmxlT2JqZWN0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IFJlcGxheVN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IHR5cGUgTnpKdXN0aWZ5ID0gJ3N0YXJ0JyB8ICdlbmQnIHwgJ2NlbnRlcicgfCAnc3BhY2UtYXJvdW5kJyB8ICdzcGFjZS1iZXR3ZWVuJztcbmV4cG9ydCB0eXBlIE56QWxpZ24gPSAndG9wJyB8ICdtaWRkbGUnIHwgJ2JvdHRvbSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuei1yb3ddLG56LXJvdyxuei1mb3JtLWl0ZW0nLFxuICBleHBvcnRBczogJ256Um93JyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXJvd10nOiBgdHJ1ZWAsXG4gICAgJ1tjbGFzcy5hbnQtcm93LXRvcF0nOiBgbnpBbGlnbiA9PT0gJ3RvcCdgLFxuICAgICdbY2xhc3MuYW50LXJvdy1taWRkbGVdJzogYG56QWxpZ24gPT09ICdtaWRkbGUnYCxcbiAgICAnW2NsYXNzLmFudC1yb3ctYm90dG9tXSc6IGBuekFsaWduID09PSAnYm90dG9tJ2AsXG4gICAgJ1tjbGFzcy5hbnQtcm93LXN0YXJ0XSc6IGBuekp1c3RpZnkgPT09ICdzdGFydCdgLFxuICAgICdbY2xhc3MuYW50LXJvdy1lbmRdJzogYG56SnVzdGlmeSA9PT0gJ2VuZCdgLFxuICAgICdbY2xhc3MuYW50LXJvdy1jZW50ZXJdJzogYG56SnVzdGlmeSA9PT0gJ2NlbnRlcidgLFxuICAgICdbY2xhc3MuYW50LXJvdy1zcGFjZS1hcm91bmRdJzogYG56SnVzdGlmeSA9PT0gJ3NwYWNlLWFyb3VuZCdgLFxuICAgICdbY2xhc3MuYW50LXJvdy1zcGFjZS1iZXR3ZWVuXSc6IGBuekp1c3RpZnkgPT09ICdzcGFjZS1iZXR3ZWVuJ2BcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelJvd0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgZG9uJ3QgbmVlZCBuelR5cGU9XCJmbGV4XCIgYWZ0ZXIgOS4wXG4gICAqL1xuICBASW5wdXQoKSBuelR5cGU6ICdmbGV4JyB8IG51bGwgPSAnZmxleCc7XG4gIEBJbnB1dCgpIG56QWxpZ246IE56QWxpZ24gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpKdXN0aWZ5OiBOekp1c3RpZnkgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpHdXR0ZXI6IG51bWJlciB8IEluZGV4YWJsZU9iamVjdCB8IFtudW1iZXIsIG51bWJlcl0gfCBbSW5kZXhhYmxlT2JqZWN0LCBJbmRleGFibGVPYmplY3RdIHwgbnVsbCA9IG51bGw7XG5cbiAgcmVhZG9ubHkgYWN0dWFsR3V0dGVyJCA9IG5ldyBSZXBsYXlTdWJqZWN0PFtudW1iZXIgfCBudWxsLCBudW1iZXIgfCBudWxsXT4oMSk7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgZ2V0R3V0dGVyKCk6IFtudW1iZXIgfCBudWxsLCBudW1iZXIgfCBudWxsXSB7XG4gICAgY29uc3QgcmVzdWx0czogW251bWJlciB8IG51bGwsIG51bWJlciB8IG51bGxdID0gW251bGwsIG51bGxdO1xuICAgIGNvbnN0IGd1dHRlciA9IHRoaXMubnpHdXR0ZXIgfHwgMDtcbiAgICBjb25zdCBub3JtYWxpemVkR3V0dGVyID0gQXJyYXkuaXNBcnJheShndXR0ZXIpID8gZ3V0dGVyIDogW2d1dHRlciwgbnVsbF07XG4gICAgbm9ybWFsaXplZEd1dHRlci5mb3JFYWNoKChnLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBnID09PSAnb2JqZWN0JyAmJiBnICE9PSBudWxsKSB7XG4gICAgICAgIHJlc3VsdHNbaW5kZXhdID0gbnVsbDtcbiAgICAgICAgT2JqZWN0LmtleXMoZ3JpZFJlc3BvbnNpdmVNYXApLm1hcCgoc2NyZWVuOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBjb25zdCBicCA9IHNjcmVlbiBhcyBOekJyZWFrcG9pbnRLZXk7XG4gICAgICAgICAgaWYgKHRoaXMubWVkaWFNYXRjaGVyLm1hdGNoTWVkaWEoZ3JpZFJlc3BvbnNpdmVNYXBbYnBdKS5tYXRjaGVzICYmIGdbYnBdKSB7XG4gICAgICAgICAgICByZXN1bHRzW2luZGV4XSA9IGchW2JwXSBhcyBudW1iZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHNbaW5kZXhdID0gZyB8fCBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgc2V0R3V0dGVyU3R5bGUoKTogdm9pZCB7XG4gICAgY29uc3QgW2hvcml6b250YWxHdXR0ZXIsIHZlcnRpY2FsR3V0dGVyXSA9IHRoaXMuZ2V0R3V0dGVyKCk7XG4gICAgdGhpcy5hY3R1YWxHdXR0ZXIkLm5leHQoW2hvcml6b250YWxHdXR0ZXIsIHZlcnRpY2FsR3V0dGVyXSk7XG4gICAgY29uc3QgcmVuZGVyR3V0dGVyID0gKG5hbWU6IHN0cmluZywgZ3V0dGVyOiBudW1iZXIgfCBudWxsKSA9PiB7XG4gICAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBpZiAoZ3V0dGVyICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUobmF0aXZlRWxlbWVudCwgbmFtZSwgYC0ke2d1dHRlciAvIDJ9cHhgKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJlbmRlckd1dHRlcignbWFyZ2luLWxlZnQnLCBob3Jpem9udGFsR3V0dGVyKTtcbiAgICByZW5kZXJHdXR0ZXIoJ21hcmdpbi1yaWdodCcsIGhvcml6b250YWxHdXR0ZXIpO1xuICAgIHJlbmRlckd1dHRlcignbWFyZ2luLXRvcCcsIHZlcnRpY2FsR3V0dGVyKTtcbiAgICByZW5kZXJHdXR0ZXIoJ21hcmdpbi1ib3R0b20nLCB2ZXJ0aWNhbEd1dHRlcik7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgbWVkaWFNYXRjaGVyOiBNZWRpYU1hdGNoZXIsXG4gICAgcHVibGljIG5nWm9uZTogTmdab25lLFxuICAgIHB1YmxpYyBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcHJpdmF0ZSBicmVha3BvaW50U2VydmljZTogTnpCcmVha3BvaW50U2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRHdXR0ZXJTdHlsZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56R3V0dGVyKSB7XG4gICAgICB0aGlzLnNldEd1dHRlclN0eWxlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5icmVha3BvaW50U2VydmljZVxuICAgICAgICAuc3Vic2NyaWJlKGdyaWRSZXNwb25zaXZlTWFwKVxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0R3V0dGVyU3R5bGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=