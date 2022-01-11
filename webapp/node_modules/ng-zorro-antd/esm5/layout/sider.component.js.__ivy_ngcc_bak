/**
 * @fileoverview added by tsickle
 * Generated from: sider.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { NzBreakpointService, siderResponsiveMap } from 'ng-zorro-antd/core/services';
import { inNextTick, InputBoolean, toCssPixel } from 'ng-zorro-antd/core/util';
import { NzMenuDirective } from 'ng-zorro-antd/menu';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
var NzSiderComponent = /** @class */ (function () {
    function NzSiderComponent(platform, cdr, breakpointService) {
        this.platform = platform;
        this.cdr = cdr;
        this.breakpointService = breakpointService;
        this.destroy$ = new Subject();
        this.nzMenuDirective = null;
        this.nzCollapsedChange = new EventEmitter();
        this.nzWidth = 200;
        this.nzTheme = 'dark';
        this.nzCollapsedWidth = 80;
        this.nzBreakpoint = null;
        this.nzZeroTrigger = null;
        this.nzTrigger = undefined;
        this.nzReverseArrow = false;
        this.nzCollapsible = false;
        this.nzCollapsed = false;
        this.matchBreakPoint = false;
        this.flexSetting = null;
        this.widthSetting = null;
    }
    /**
     * @return {?}
     */
    NzSiderComponent.prototype.updateStyleMap = /**
     * @return {?}
     */
    function () {
        this.widthSetting = this.nzCollapsed ? this.nzCollapsedWidth + "px" : toCssPixel(this.nzWidth);
        this.flexSetting = "0 0 " + this.widthSetting;
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzSiderComponent.prototype.updateMenuInlineCollapsed = /**
     * @return {?}
     */
    function () {
        if (this.nzMenuDirective && this.nzMenuDirective.nzMode === 'inline' && this.nzCollapsedWidth !== 0) {
            this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed);
        }
    };
    /**
     * @param {?} collapsed
     * @return {?}
     */
    NzSiderComponent.prototype.setCollapsed = /**
     * @param {?} collapsed
     * @return {?}
     */
    function (collapsed) {
        if (collapsed !== this.nzCollapsed) {
            this.nzCollapsed = collapsed;
            this.nzCollapsedChange.emit(collapsed);
            this.updateMenuInlineCollapsed();
            this.updateStyleMap();
            this.cdr.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    NzSiderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.updateStyleMap();
        if (this.platform.isBrowser) {
            this.breakpointService
                .subscribe(siderResponsiveMap, true)
                .pipe(takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} map
             * @return {?}
             */
            function (map) {
                /** @type {?} */
                var breakpoint = _this.nzBreakpoint;
                if (breakpoint) {
                    inNextTick().subscribe((/**
                     * @return {?}
                     */
                    function () {
                        _this.matchBreakPoint = !map[breakpoint];
                        _this.setCollapsed(_this.matchBreakPoint);
                        _this.cdr.markForCheck();
                    }));
                }
            }));
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSiderComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzCollapsed = changes.nzCollapsed, nzCollapsedWidth = changes.nzCollapsedWidth, nzWidth = changes.nzWidth;
        if (nzCollapsed || nzCollapsedWidth || nzWidth) {
            this.updateStyleMap();
        }
        if (nzCollapsed) {
            this.updateMenuInlineCollapsed();
        }
    };
    /**
     * @return {?}
     */
    NzSiderComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.updateMenuInlineCollapsed();
    };
    /**
     * @return {?}
     */
    NzSiderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzSiderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-sider',
                    exportAs: 'nzSider',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <div class=\"ant-layout-sider-children\">\n      <ng-content></ng-content>\n    </div>\n    <div\n      *ngIf=\"nzCollapsible && nzTrigger !== null\"\n      nz-sider-trigger\n      [matchBreakPoint]=\"matchBreakPoint\"\n      [nzCollapsedWidth]=\"nzCollapsedWidth\"\n      [nzCollapsed]=\"nzCollapsed\"\n      [nzBreakpoint]=\"nzBreakpoint\"\n      [nzReverseArrow]=\"nzReverseArrow\"\n      [nzTrigger]=\"nzTrigger\"\n      [nzZeroTrigger]=\"nzZeroTrigger\"\n      [siderWidth]=\"widthSetting\"\n      (click)=\"setCollapsed(!nzCollapsed)\"\n    ></div>\n  ",
                    host: {
                        '[class.ant-layout-sider]': 'true',
                        '[class.ant-layout-sider-zero-width]': "nzCollapsed && nzCollapsedWidth === 0",
                        '[class.ant-layout-sider-light]': "nzTheme === 'light'",
                        '[class.ant-layout-sider-dark]': "nzTheme === 'dark'",
                        '[class.ant-layout-sider-collapsed]': "nzCollapsed",
                        '[style.flex]': 'flexSetting',
                        '[style.maxWidth]': 'widthSetting',
                        '[style.minWidth]': 'widthSetting',
                        '[style.width]': 'widthSetting'
                    }
                }] }
    ];
    /** @nocollapse */
    NzSiderComponent.ctorParameters = function () { return [
        { type: Platform },
        { type: ChangeDetectorRef },
        { type: NzBreakpointService }
    ]; };
    NzSiderComponent.propDecorators = {
        nzMenuDirective: [{ type: ContentChild, args: [NzMenuDirective,] }],
        nzCollapsedChange: [{ type: Output }],
        nzWidth: [{ type: Input }],
        nzTheme: [{ type: Input }],
        nzCollapsedWidth: [{ type: Input }],
        nzBreakpoint: [{ type: Input }],
        nzZeroTrigger: [{ type: Input }],
        nzTrigger: [{ type: Input }],
        nzReverseArrow: [{ type: Input }],
        nzCollapsible: [{ type: Input }],
        nzCollapsed: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSiderComponent.prototype, "nzReverseArrow", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSiderComponent.prototype, "nzCollapsible", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSiderComponent.prototype, "nzCollapsed", void 0);
    return NzSiderComponent;
}());
export { NzSiderComponent };
if (false) {
    /** @type {?} */
    NzSiderComponent.ngAcceptInputType_nzReverseArrow;
    /** @type {?} */
    NzSiderComponent.ngAcceptInputType_nzCollapsible;
    /** @type {?} */
    NzSiderComponent.ngAcceptInputType_nzCollapsed;
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.destroy$;
    /** @type {?} */
    NzSiderComponent.prototype.nzMenuDirective;
    /** @type {?} */
    NzSiderComponent.prototype.nzCollapsedChange;
    /** @type {?} */
    NzSiderComponent.prototype.nzWidth;
    /** @type {?} */
    NzSiderComponent.prototype.nzTheme;
    /** @type {?} */
    NzSiderComponent.prototype.nzCollapsedWidth;
    /** @type {?} */
    NzSiderComponent.prototype.nzBreakpoint;
    /** @type {?} */
    NzSiderComponent.prototype.nzZeroTrigger;
    /** @type {?} */
    NzSiderComponent.prototype.nzTrigger;
    /** @type {?} */
    NzSiderComponent.prototype.nzReverseArrow;
    /** @type {?} */
    NzSiderComponent.prototype.nzCollapsible;
    /** @type {?} */
    NzSiderComponent.prototype.nzCollapsed;
    /** @type {?} */
    NzSiderComponent.prototype.matchBreakPoint;
    /** @type {?} */
    NzSiderComponent.prototype.flexSetting;
    /** @type {?} */
    NzSiderComponent.prototype.widthSetting;
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.breakpointService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9sYXlvdXQvIiwic291cmNlcyI6WyJzaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQW1CLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdkcsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDO0lBK0VFLDBCQUFvQixRQUFrQixFQUFVLEdBQXNCLEVBQVUsaUJBQXNDO1FBQWxHLGFBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBcUI7UUF0QzlHLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ0Ysb0JBQWUsR0FBMkIsSUFBSSxDQUFDO1FBQzNELHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakQsWUFBTyxHQUFvQixHQUFHLENBQUM7UUFDL0IsWUFBTyxHQUFxQixNQUFNLENBQUM7UUFDbkMscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLGlCQUFZLEdBQTJCLElBQUksQ0FB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RDs7Ozs7SUFFbkQsb0NBQWlDOztJQUNqQywyQ0FBOEU7O0lBQzlFLDZDQUEwRDs7SUFDMUQsbUNBQXdDOztJQUN4QyxtQ0FBNEM7O0lBQzVDLDRDQUErQjs7SUFDL0Isd0NBQXFEOztJQUNyRCx5Q0FBd0Q7O0lBQ3hELHFDQUFxRTs7SUFDckUsMENBQWdEOztJQUNoRCx5Q0FBK0M7O0lBQy9DLHVDQUE2Qzs7SUFDN0MsMkNBQXdCOztJQUN4Qix1Q0FBa0M7O0lBQ2xDLHdDQUFtQzs7Ozs7SUF3QnZCLG9DQUEwQjs7Ozs7SUFBRSwrQkFBOEI7Ozs7O0lBQUUsNkNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekJyZWFrcG9pbnRLZXksIE56QnJlYWtwb2ludFNlcnZpY2UsIHNpZGVyUmVzcG9uc2l2ZU1hcCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgaW5OZXh0VGljaywgSW5wdXRCb29sZWFuLCB0b0Nzc1BpeGVsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgTnpNZW51RGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZW51JztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotc2lkZXInLFxuICBleHBvcnRBczogJ256U2lkZXInLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImFudC1sYXlvdXQtc2lkZXItY2hpbGRyZW5cIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICAqbmdJZj1cIm56Q29sbGFwc2libGUgJiYgbnpUcmlnZ2VyICE9PSBudWxsXCJcbiAgICAgIG56LXNpZGVyLXRyaWdnZXJcbiAgICAgIFttYXRjaEJyZWFrUG9pbnRdPVwibWF0Y2hCcmVha1BvaW50XCJcbiAgICAgIFtuekNvbGxhcHNlZFdpZHRoXT1cIm56Q29sbGFwc2VkV2lkdGhcIlxuICAgICAgW256Q29sbGFwc2VkXT1cIm56Q29sbGFwc2VkXCJcbiAgICAgIFtuekJyZWFrcG9pbnRdPVwibnpCcmVha3BvaW50XCJcbiAgICAgIFtuelJldmVyc2VBcnJvd109XCJuelJldmVyc2VBcnJvd1wiXG4gICAgICBbbnpUcmlnZ2VyXT1cIm56VHJpZ2dlclwiXG4gICAgICBbbnpaZXJvVHJpZ2dlcl09XCJuelplcm9UcmlnZ2VyXCJcbiAgICAgIFtzaWRlcldpZHRoXT1cIndpZHRoU2V0dGluZ1wiXG4gICAgICAoY2xpY2spPVwic2V0Q29sbGFwc2VkKCFuekNvbGxhcHNlZClcIlxuICAgID48L2Rpdj5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LWxheW91dC1zaWRlcl0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hbnQtbGF5b3V0LXNpZGVyLXplcm8td2lkdGhdJzogYG56Q29sbGFwc2VkICYmIG56Q29sbGFwc2VkV2lkdGggPT09IDBgLFxuICAgICdbY2xhc3MuYW50LWxheW91dC1zaWRlci1saWdodF0nOiBgbnpUaGVtZSA9PT0gJ2xpZ2h0J2AsXG4gICAgJ1tjbGFzcy5hbnQtbGF5b3V0LXNpZGVyLWRhcmtdJzogYG56VGhlbWUgPT09ICdkYXJrJ2AsXG4gICAgJ1tjbGFzcy5hbnQtbGF5b3V0LXNpZGVyLWNvbGxhcHNlZF0nOiBgbnpDb2xsYXBzZWRgLFxuICAgICdbc3R5bGUuZmxleF0nOiAnZmxleFNldHRpbmcnLFxuICAgICdbc3R5bGUubWF4V2lkdGhdJzogJ3dpZHRoU2V0dGluZycsXG4gICAgJ1tzdHlsZS5taW5XaWR0aF0nOiAnd2lkdGhTZXR0aW5nJyxcbiAgICAnW3N0eWxlLndpZHRoXSc6ICd3aWR0aFNldHRpbmcnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpTaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMsIEFmdGVyQ29udGVudEluaXQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpSZXZlcnNlQXJyb3c6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256Q29sbGFwc2libGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256Q29sbGFwc2VkOiBCb29sZWFuSW5wdXQ7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIEBDb250ZW50Q2hpbGQoTnpNZW51RGlyZWN0aXZlKSBuek1lbnVEaXJlY3RpdmU6IE56TWVudURpcmVjdGl2ZSB8IG51bGwgPSBudWxsO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDb2xsYXBzZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIG56V2lkdGg6IHN0cmluZyB8IG51bWJlciA9IDIwMDtcbiAgQElucHV0KCkgbnpUaGVtZTogJ2xpZ2h0JyB8ICdkYXJrJyA9ICdkYXJrJztcbiAgQElucHV0KCkgbnpDb2xsYXBzZWRXaWR0aCA9IDgwO1xuICBASW5wdXQoKSBuekJyZWFrcG9pbnQ6IE56QnJlYWtwb2ludEtleSB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuelplcm9UcmlnZ2VyOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuelRyaWdnZXI6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgdW5kZWZpbmVkIHwgbnVsbCA9IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56UmV2ZXJzZUFycm93ID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNvbGxhcHNpYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNvbGxhcHNlZCA9IGZhbHNlO1xuICBtYXRjaEJyZWFrUG9pbnQgPSBmYWxzZTtcbiAgZmxleFNldHRpbmc6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICB3aWR0aFNldHRpbmc6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIHVwZGF0ZVN0eWxlTWFwKCk6IHZvaWQge1xuICAgIHRoaXMud2lkdGhTZXR0aW5nID0gdGhpcy5uekNvbGxhcHNlZCA/IGAke3RoaXMubnpDb2xsYXBzZWRXaWR0aH1weGAgOiB0b0Nzc1BpeGVsKHRoaXMubnpXaWR0aCk7XG4gICAgdGhpcy5mbGV4U2V0dGluZyA9IGAwIDAgJHt0aGlzLndpZHRoU2V0dGluZ31gO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgdXBkYXRlTWVudUlubGluZUNvbGxhcHNlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uek1lbnVEaXJlY3RpdmUgJiYgdGhpcy5uek1lbnVEaXJlY3RpdmUubnpNb2RlID09PSAnaW5saW5lJyAmJiB0aGlzLm56Q29sbGFwc2VkV2lkdGggIT09IDApIHtcbiAgICAgIHRoaXMubnpNZW51RGlyZWN0aXZlLnNldElubGluZUNvbGxhcHNlZCh0aGlzLm56Q29sbGFwc2VkKTtcbiAgICB9XG4gIH1cblxuICBzZXRDb2xsYXBzZWQoY29sbGFwc2VkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKGNvbGxhcHNlZCAhPT0gdGhpcy5uekNvbGxhcHNlZCkge1xuICAgICAgdGhpcy5uekNvbGxhcHNlZCA9IGNvbGxhcHNlZDtcbiAgICAgIHRoaXMubnpDb2xsYXBzZWRDaGFuZ2UuZW1pdChjb2xsYXBzZWQpO1xuICAgICAgdGhpcy51cGRhdGVNZW51SW5saW5lQ29sbGFwc2VkKCk7XG4gICAgICB0aGlzLnVwZGF0ZVN0eWxlTWFwKCk7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGJyZWFrcG9pbnRTZXJ2aWNlOiBOekJyZWFrcG9pbnRTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlU3R5bGVNYXAoKTtcblxuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5icmVha3BvaW50U2VydmljZVxuICAgICAgICAuc3Vic2NyaWJlKHNpZGVyUmVzcG9uc2l2ZU1hcCwgdHJ1ZSlcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKG1hcCA9PiB7XG4gICAgICAgICAgY29uc3QgYnJlYWtwb2ludCA9IHRoaXMubnpCcmVha3BvaW50O1xuICAgICAgICAgIGlmIChicmVha3BvaW50KSB7XG4gICAgICAgICAgICBpbk5leHRUaWNrKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5tYXRjaEJyZWFrUG9pbnQgPSAhbWFwW2JyZWFrcG9pbnRdO1xuICAgICAgICAgICAgICB0aGlzLnNldENvbGxhcHNlZCh0aGlzLm1hdGNoQnJlYWtQb2ludCk7XG4gICAgICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuekNvbGxhcHNlZCwgbnpDb2xsYXBzZWRXaWR0aCwgbnpXaWR0aCB9ID0gY2hhbmdlcztcbiAgICBpZiAobnpDb2xsYXBzZWQgfHwgbnpDb2xsYXBzZWRXaWR0aCB8fCBueldpZHRoKSB7XG4gICAgICB0aGlzLnVwZGF0ZVN0eWxlTWFwKCk7XG4gICAgfVxuICAgIGlmIChuekNvbGxhcHNlZCkge1xuICAgICAgdGhpcy51cGRhdGVNZW51SW5saW5lQ29sbGFwc2VkKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlTWVudUlubGluZUNvbGxhcHNlZCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=