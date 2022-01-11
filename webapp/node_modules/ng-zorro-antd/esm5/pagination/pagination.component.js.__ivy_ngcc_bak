/**
 * @fileoverview added by tsickle
 * Generated from: pagination.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { gridResponsiveMap, NzBreakpointEnum, NzBreakpointService } from 'ng-zorro-antd/core/services';
import { InputBoolean, InputNumber } from 'ng-zorro-antd/core/util';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
var NzPaginationComponent = /** @class */ (function () {
    function NzPaginationComponent(i18n, cdr, breakpointService) {
        this.i18n = i18n;
        this.cdr = cdr;
        this.breakpointService = breakpointService;
        this.nzPageSizeChange = new EventEmitter();
        this.nzPageIndexChange = new EventEmitter();
        this.nzShowTotal = null;
        this.nzSize = 'default';
        this.nzPageSizeOptions = [10, 20, 30, 40];
        this.nzItemRender = null;
        this.nzDisabled = false;
        this.nzShowSizeChanger = false;
        this.nzHideOnSinglePage = false;
        this.nzShowQuickJumper = false;
        this.nzSimple = false;
        this.nzResponsive = false;
        this.nzTotal = 0;
        this.nzPageIndex = 1;
        this.nzPageSize = 10;
        this.showPagination = true;
        this.size = 'default';
        this.destroy$ = new Subject();
        this.total$ = new ReplaySubject(1);
    }
    /**
     * @param {?} value
     * @param {?} lastIndex
     * @return {?}
     */
    NzPaginationComponent.prototype.validatePageIndex = /**
     * @param {?} value
     * @param {?} lastIndex
     * @return {?}
     */
    function (value, lastIndex) {
        if (value > lastIndex) {
            return lastIndex;
        }
        else if (value < 1) {
            return 1;
        }
        else {
            return value;
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NzPaginationComponent.prototype.onPageIndexChange = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var lastIndex = this.getLastIndex(this.nzTotal, this.nzPageSize);
        /** @type {?} */
        var validIndex = this.validatePageIndex(index, lastIndex);
        if (validIndex !== this.nzPageIndex && !this.nzDisabled) {
            this.nzPageIndex = validIndex;
            this.nzPageIndexChange.emit(this.nzPageIndex);
        }
    };
    /**
     * @param {?} size
     * @return {?}
     */
    NzPaginationComponent.prototype.onPageSizeChange = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        this.nzPageSize = size;
        this.nzPageSizeChange.emit(size);
        /** @type {?} */
        var lastIndex = this.getLastIndex(this.nzTotal, this.nzPageSize);
        if (this.nzPageIndex > lastIndex) {
            this.onPageIndexChange(lastIndex);
        }
    };
    /**
     * @param {?} total
     * @return {?}
     */
    NzPaginationComponent.prototype.onTotalChange = /**
     * @param {?} total
     * @return {?}
     */
    function (total) {
        var _this = this;
        /** @type {?} */
        var lastIndex = this.getLastIndex(total, this.nzPageSize);
        if (this.nzPageIndex > lastIndex) {
            Promise.resolve().then((/**
             * @return {?}
             */
            function () { return _this.onPageIndexChange(lastIndex); }));
        }
    };
    /**
     * @param {?} total
     * @param {?} pageSize
     * @return {?}
     */
    NzPaginationComponent.prototype.getLastIndex = /**
     * @param {?} total
     * @param {?} pageSize
     * @return {?}
     */
    function (total, pageSize) {
        return Math.ceil(total / pageSize);
    };
    /**
     * @return {?}
     */
    NzPaginationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.locale = _this.i18n.getLocaleData('Pagination');
            _this.cdr.markForCheck();
        }));
        this.total$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} total
         * @return {?}
         */
        function (total) {
            _this.onTotalChange(total);
        }));
        this.breakpointService
            .subscribe(gridResponsiveMap)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} bp
         * @return {?}
         */
        function (bp) {
            if (_this.nzResponsive) {
                _this.size = bp === NzBreakpointEnum.xs ? 'small' : 'default';
                _this.cdr.markForCheck();
            }
        }));
    };
    /**
     * @return {?}
     */
    NzPaginationComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzPaginationComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzHideOnSinglePage = changes.nzHideOnSinglePage, nzTotal = changes.nzTotal, nzPageSize = changes.nzPageSize, nzSize = changes.nzSize;
        if (nzTotal) {
            this.total$.next(this.nzTotal);
        }
        if (nzHideOnSinglePage || nzTotal || nzPageSize) {
            this.showPagination = (this.nzHideOnSinglePage && this.nzTotal > this.nzPageSize) || (this.nzTotal > 0 && !this.nzHideOnSinglePage);
        }
        if (nzSize) {
            this.size = nzSize.currentValue;
        }
    };
    NzPaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-pagination',
                    exportAs: 'nzPagination',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <ng-container *ngIf=\"showPagination\">\n      <ng-container *ngIf=\"nzSimple; else defaultPagination.template\">\n        <ng-template [ngTemplateOutlet]=\"simplePagination.template\"></ng-template>\n      </ng-container>\n    </ng-container>\n    <nz-pagination-simple\n      #simplePagination\n      [disabled]=\"nzDisabled\"\n      [itemRender]=\"nzItemRender\"\n      [locale]=\"locale\"\n      [pageSize]=\"nzPageSize\"\n      [total]=\"nzTotal\"\n      [pageIndex]=\"nzPageIndex\"\n      (pageIndexChange)=\"onPageIndexChange($event)\"\n    ></nz-pagination-simple>\n    <nz-pagination-default\n      #defaultPagination\n      [nzSize]=\"size\"\n      [itemRender]=\"nzItemRender\"\n      [showTotal]=\"nzShowTotal\"\n      [disabled]=\"nzDisabled\"\n      [locale]=\"locale\"\n      [showSizeChanger]=\"nzShowSizeChanger\"\n      [showQuickJumper]=\"nzShowQuickJumper\"\n      [total]=\"nzTotal\"\n      [pageIndex]=\"nzPageIndex\"\n      [pageSize]=\"nzPageSize\"\n      [pageSizeOptions]=\"nzPageSizeOptions\"\n      (pageIndexChange)=\"onPageIndexChange($event)\"\n      (pageSizeChange)=\"onPageSizeChange($event)\"\n    ></nz-pagination-default>\n  ",
                    host: {
                        '[class.ant-pagination]': 'true',
                        '[class.ant-pagination-simple]': 'nzSimple',
                        '[class.ant-pagination-disabled]': 'nzDisabled',
                        '[class.mini]': "!nzSimple && size === 'small'"
                    }
                }] }
    ];
    /** @nocollapse */
    NzPaginationComponent.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: ChangeDetectorRef },
        { type: NzBreakpointService }
    ]; };
    NzPaginationComponent.propDecorators = {
        nzPageSizeChange: [{ type: Output }],
        nzPageIndexChange: [{ type: Output }],
        nzShowTotal: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzPageSizeOptions: [{ type: Input }],
        nzItemRender: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzShowSizeChanger: [{ type: Input }],
        nzHideOnSinglePage: [{ type: Input }],
        nzShowQuickJumper: [{ type: Input }],
        nzSimple: [{ type: Input }],
        nzResponsive: [{ type: Input }],
        nzTotal: [{ type: Input }],
        nzPageIndex: [{ type: Input }],
        nzPageSize: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzPaginationComponent.prototype, "nzDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzPaginationComponent.prototype, "nzShowSizeChanger", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzPaginationComponent.prototype, "nzHideOnSinglePage", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzPaginationComponent.prototype, "nzShowQuickJumper", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzPaginationComponent.prototype, "nzSimple", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzPaginationComponent.prototype, "nzResponsive", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], NzPaginationComponent.prototype, "nzTotal", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], NzPaginationComponent.prototype, "nzPageIndex", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], NzPaginationComponent.prototype, "nzPageSize", void 0);
    return NzPaginationComponent;
}());
export { NzPaginationComponent };
if (false) {
    /** @type {?} */
    NzPaginationComponent.ngAcceptInputType_nzDisabled;
    /** @type {?} */
    NzPaginationComponent.ngAcceptInputType_nzShowSizeChanger;
    /** @type {?} */
    NzPaginationComponent.ngAcceptInputType_nzHideOnSinglePage;
    /** @type {?} */
    NzPaginationComponent.ngAcceptInputType_nzShowQuickJumper;
    /** @type {?} */
    NzPaginationComponent.ngAcceptInputType_nzSimple;
    /** @type {?} */
    NzPaginationComponent.ngAcceptInputType_nzResponsive;
    /** @type {?} */
    NzPaginationComponent.ngAcceptInputType_nzTotal;
    /** @type {?} */
    NzPaginationComponent.ngAcceptInputType_nzPageIndex;
    /** @type {?} */
    NzPaginationComponent.ngAcceptInputType_nzPageSize;
    /** @type {?} */
    NzPaginationComponent.prototype.nzPageSizeChange;
    /** @type {?} */
    NzPaginationComponent.prototype.nzPageIndexChange;
    /** @type {?} */
    NzPaginationComponent.prototype.nzShowTotal;
    /** @type {?} */
    NzPaginationComponent.prototype.nzSize;
    /** @type {?} */
    NzPaginationComponent.prototype.nzPageSizeOptions;
    /** @type {?} */
    NzPaginationComponent.prototype.nzItemRender;
    /** @type {?} */
    NzPaginationComponent.prototype.nzDisabled;
    /** @type {?} */
    NzPaginationComponent.prototype.nzShowSizeChanger;
    /** @type {?} */
    NzPaginationComponent.prototype.nzHideOnSinglePage;
    /** @type {?} */
    NzPaginationComponent.prototype.nzShowQuickJumper;
    /** @type {?} */
    NzPaginationComponent.prototype.nzSimple;
    /** @type {?} */
    NzPaginationComponent.prototype.nzResponsive;
    /** @type {?} */
    NzPaginationComponent.prototype.nzTotal;
    /** @type {?} */
    NzPaginationComponent.prototype.nzPageIndex;
    /** @type {?} */
    NzPaginationComponent.prototype.nzPageSize;
    /** @type {?} */
    NzPaginationComponent.prototype.showPagination;
    /** @type {?} */
    NzPaginationComponent.prototype.locale;
    /** @type {?} */
    NzPaginationComponent.prototype.size;
    /**
     * @type {?}
     * @private
     */
    NzPaginationComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzPaginationComponent.prototype.total$;
    /**
     * @type {?}
     * @private
     */
    NzPaginationComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    NzPaginationComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzPaginationComponent.prototype.breakpointService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3BhZ2luYXRpb24vIiwic291cmNlcyI6WyJwYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV2RyxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxhQUFhLEVBQTZCLE1BQU0sb0JBQW9CLENBQUM7QUFDOUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTNDO0lBdUhFLCtCQUFvQixJQUFtQixFQUFVLEdBQXNCLEVBQVUsaUJBQXNDO1FBQW5HLFNBQUksR0FBSixJQUFJLENBQWU7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBcUI7UUE5RHBHLHFCQUFnQixHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVELHNCQUFpQixHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZFLGdCQUFXLEdBQXVFLElBQUksQ0FBQztRQUN2RixXQUFNLEdBQXdCLFNBQVMsQ0FBQztRQUN4QyxzQkFBaUIsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLGlCQUFZLEdBQW9ELElBQUksQ0FBQztRQUNyRCxl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O0lBQzFCO1FBQWYsWUFBWSxFQUFFOzsyREFBa0I7SUFDakI7UUFBZixZQUFZLEVBQUU7OytEQUFzQjtJQUN0QjtRQUFkLFdBQVcsRUFBRTs7MERBQWE7SUFDWjtRQUFkLFdBQVcsRUFBRTs7OERBQWlCO0lBQ2hCO1FBQWQsV0FBVyxFQUFFOzs2REFBaUI7SUF5RjFDLDRCQUFDO0NBQUEsQUFoS0QsSUFnS0M7U0FsSFkscUJBQXFCOzs7SUFDaEMsbURBQWtEOztJQUNsRCwwREFBeUQ7O0lBQ3pELDJEQUEwRDs7SUFDMUQsMERBQXlEOztJQUN6RCxpREFBZ0Q7O0lBQ2hELHFEQUFvRDs7SUFDcEQsZ0RBQThDOztJQUM5QyxvREFBa0Q7O0lBQ2xELG1EQUFpRDs7SUFFakQsaURBQStFOztJQUMvRSxrREFBZ0Y7O0lBQ2hGLDRDQUFnRzs7SUFDaEcsdUNBQWlEOztJQUNqRCxrREFBOEM7O0lBQzlDLDZDQUE4RTs7SUFDOUUsMkNBQTRDOztJQUM1QyxrREFBbUQ7O0lBQ25ELG1EQUFvRDs7SUFDcEQsa0RBQW1EOztJQUNuRCx5Q0FBMEM7O0lBQzFDLDZDQUE4Qzs7SUFDOUMsd0NBQW9DOztJQUNwQyw0Q0FBd0M7O0lBQ3hDLDJDQUF3Qzs7SUFFeEMsK0NBQXNCOztJQUN0Qix1Q0FBbUM7O0lBQ25DLHFDQUFzQzs7Ozs7SUFFdEMseUNBQXVDOzs7OztJQUN2Qyx1Q0FBOEM7Ozs7O0lBeUNsQyxxQ0FBMkI7Ozs7O0lBQUUsb0NBQThCOzs7OztJQUFFLGtEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGdyaWRSZXNwb25zaXZlTWFwLCBOekJyZWFrcG9pbnRFbnVtLCBOekJyZWFrcG9pbnRTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3NlcnZpY2VzJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnVtYmVySW5wdXQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IE56STE4blNlcnZpY2UsIE56UGFnaW5hdGlvbkkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBQYWdpbmF0aW9uSXRlbVJlbmRlckNvbnRleHQgfSBmcm9tICcuL3BhZ2luYXRpb24udHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1wYWdpbmF0aW9uJyxcbiAgZXhwb3J0QXM6ICduelBhZ2luYXRpb24nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3dQYWdpbmF0aW9uXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpTaW1wbGU7IGVsc2UgZGVmYXVsdFBhZ2luYXRpb24udGVtcGxhdGVcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInNpbXBsZVBhZ2luYXRpb24udGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG56LXBhZ2luYXRpb24tc2ltcGxlXG4gICAgICAjc2ltcGxlUGFnaW5hdGlvblxuICAgICAgW2Rpc2FibGVkXT1cIm56RGlzYWJsZWRcIlxuICAgICAgW2l0ZW1SZW5kZXJdPVwibnpJdGVtUmVuZGVyXCJcbiAgICAgIFtsb2NhbGVdPVwibG9jYWxlXCJcbiAgICAgIFtwYWdlU2l6ZV09XCJuelBhZ2VTaXplXCJcbiAgICAgIFt0b3RhbF09XCJuelRvdGFsXCJcbiAgICAgIFtwYWdlSW5kZXhdPVwibnpQYWdlSW5kZXhcIlxuICAgICAgKHBhZ2VJbmRleENoYW5nZSk9XCJvblBhZ2VJbmRleENoYW5nZSgkZXZlbnQpXCJcbiAgICA+PC9uei1wYWdpbmF0aW9uLXNpbXBsZT5cbiAgICA8bnotcGFnaW5hdGlvbi1kZWZhdWx0XG4gICAgICAjZGVmYXVsdFBhZ2luYXRpb25cbiAgICAgIFtuelNpemVdPVwic2l6ZVwiXG4gICAgICBbaXRlbVJlbmRlcl09XCJuekl0ZW1SZW5kZXJcIlxuICAgICAgW3Nob3dUb3RhbF09XCJuelNob3dUb3RhbFwiXG4gICAgICBbZGlzYWJsZWRdPVwibnpEaXNhYmxlZFwiXG4gICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXG4gICAgICBbc2hvd1NpemVDaGFuZ2VyXT1cIm56U2hvd1NpemVDaGFuZ2VyXCJcbiAgICAgIFtzaG93UXVpY2tKdW1wZXJdPVwibnpTaG93UXVpY2tKdW1wZXJcIlxuICAgICAgW3RvdGFsXT1cIm56VG90YWxcIlxuICAgICAgW3BhZ2VJbmRleF09XCJuelBhZ2VJbmRleFwiXG4gICAgICBbcGFnZVNpemVdPVwibnpQYWdlU2l6ZVwiXG4gICAgICBbcGFnZVNpemVPcHRpb25zXT1cIm56UGFnZVNpemVPcHRpb25zXCJcbiAgICAgIChwYWdlSW5kZXhDaGFuZ2UpPVwib25QYWdlSW5kZXhDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAocGFnZVNpemVDaGFuZ2UpPVwib25QYWdlU2l6ZUNoYW5nZSgkZXZlbnQpXCJcbiAgICA+PC9uei1wYWdpbmF0aW9uLWRlZmF1bHQ+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1wYWdpbmF0aW9uXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmFudC1wYWdpbmF0aW9uLXNpbXBsZV0nOiAnbnpTaW1wbGUnLFxuICAgICdbY2xhc3MuYW50LXBhZ2luYXRpb24tZGlzYWJsZWRdJzogJ256RGlzYWJsZWQnLFxuICAgICdbY2xhc3MubWluaV0nOiBgIW56U2ltcGxlICYmIHNpemUgPT09ICdzbWFsbCdgXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpQYWdpbmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekRpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNob3dTaXplQ2hhbmdlcjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpIaWRlT25TaW5nbGVQYWdlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNob3dRdWlja0p1bXBlcjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTaW1wbGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256UmVzcG9uc2l2ZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpUb3RhbDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelBhZ2VJbmRleDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelBhZ2VTaXplOiBOdW1iZXJJbnB1dDtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpQYWdlU2l6ZUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelBhZ2VJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIG56U2hvd1RvdGFsOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogbnVtYmVyOyByYW5nZTogW251bWJlciwgbnVtYmVyXSB9PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuelNpemU6ICdkZWZhdWx0JyB8ICdzbWFsbCcgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIG56UGFnZVNpemVPcHRpb25zID0gWzEwLCAyMCwgMzAsIDQwXTtcbiAgQElucHV0KCkgbnpJdGVtUmVuZGVyOiBUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uSXRlbVJlbmRlckNvbnRleHQ+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dTaXplQ2hhbmdlciA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpIaWRlT25TaW5nbGVQYWdlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dRdWlja0p1bXBlciA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaW1wbGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56UmVzcG9uc2l2ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuelRvdGFsID0gMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpQYWdlSW5kZXggPSAxO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuelBhZ2VTaXplID0gMTA7XG5cbiAgc2hvd1BhZ2luYXRpb24gPSB0cnVlO1xuICBsb2NhbGUhOiBOelBhZ2luYXRpb25JMThuSW50ZXJmYWNlO1xuICBzaXplOiAnZGVmYXVsdCcgfCAnc21hbGwnID0gJ2RlZmF1bHQnO1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIHRvdGFsJCA9IG5ldyBSZXBsYXlTdWJqZWN0PG51bWJlcj4oMSk7XG5cbiAgdmFsaWRhdGVQYWdlSW5kZXgodmFsdWU6IG51bWJlciwgbGFzdEluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmICh2YWx1ZSA+IGxhc3RJbmRleCkge1xuICAgICAgcmV0dXJuIGxhc3RJbmRleDtcbiAgICB9IGVsc2UgaWYgKHZhbHVlIDwgMSkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBvblBhZ2VJbmRleENoYW5nZShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgbGFzdEluZGV4ID0gdGhpcy5nZXRMYXN0SW5kZXgodGhpcy5uelRvdGFsLCB0aGlzLm56UGFnZVNpemUpO1xuICAgIGNvbnN0IHZhbGlkSW5kZXggPSB0aGlzLnZhbGlkYXRlUGFnZUluZGV4KGluZGV4LCBsYXN0SW5kZXgpO1xuICAgIGlmICh2YWxpZEluZGV4ICE9PSB0aGlzLm56UGFnZUluZGV4ICYmICF0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHRoaXMubnpQYWdlSW5kZXggPSB2YWxpZEluZGV4O1xuICAgICAgdGhpcy5uelBhZ2VJbmRleENoYW5nZS5lbWl0KHRoaXMubnpQYWdlSW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIG9uUGFnZVNpemVDaGFuZ2Uoc2l6ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5uelBhZ2VTaXplID0gc2l6ZTtcbiAgICB0aGlzLm56UGFnZVNpemVDaGFuZ2UuZW1pdChzaXplKTtcbiAgICBjb25zdCBsYXN0SW5kZXggPSB0aGlzLmdldExhc3RJbmRleCh0aGlzLm56VG90YWwsIHRoaXMubnpQYWdlU2l6ZSk7XG4gICAgaWYgKHRoaXMubnpQYWdlSW5kZXggPiBsYXN0SW5kZXgpIHtcbiAgICAgIHRoaXMub25QYWdlSW5kZXhDaGFuZ2UobGFzdEluZGV4KTtcbiAgICB9XG4gIH1cblxuICBvblRvdGFsQ2hhbmdlKHRvdGFsOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBsYXN0SW5kZXggPSB0aGlzLmdldExhc3RJbmRleCh0b3RhbCwgdGhpcy5uelBhZ2VTaXplKTtcbiAgICBpZiAodGhpcy5uelBhZ2VJbmRleCA+IGxhc3RJbmRleCkge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLm9uUGFnZUluZGV4Q2hhbmdlKGxhc3RJbmRleCkpO1xuICAgIH1cbiAgfVxuXG4gIGdldExhc3RJbmRleCh0b3RhbDogbnVtYmVyLCBwYWdlU2l6ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRvdGFsIC8gcGFnZVNpemUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgYnJlYWtwb2ludFNlcnZpY2U6IE56QnJlYWtwb2ludFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ1BhZ2luYXRpb24nKTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy50b3RhbCQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSh0b3RhbCA9PiB7XG4gICAgICB0aGlzLm9uVG90YWxDaGFuZ2UodG90YWwpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5icmVha3BvaW50U2VydmljZVxuICAgICAgLnN1YnNjcmliZShncmlkUmVzcG9uc2l2ZU1hcClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoYnAgPT4ge1xuICAgICAgICBpZiAodGhpcy5uelJlc3BvbnNpdmUpIHtcbiAgICAgICAgICB0aGlzLnNpemUgPSBicCA9PT0gTnpCcmVha3BvaW50RW51bS54cyA/ICdzbWFsbCcgOiAnZGVmYXVsdCc7XG4gICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpIaWRlT25TaW5nbGVQYWdlLCBuelRvdGFsLCBuelBhZ2VTaXplLCBuelNpemUgfSA9IGNoYW5nZXM7XG4gICAgaWYgKG56VG90YWwpIHtcbiAgICAgIHRoaXMudG90YWwkLm5leHQodGhpcy5uelRvdGFsKTtcbiAgICB9XG4gICAgaWYgKG56SGlkZU9uU2luZ2xlUGFnZSB8fCBuelRvdGFsIHx8IG56UGFnZVNpemUpIHtcbiAgICAgIHRoaXMuc2hvd1BhZ2luYXRpb24gPSAodGhpcy5uekhpZGVPblNpbmdsZVBhZ2UgJiYgdGhpcy5uelRvdGFsID4gdGhpcy5uelBhZ2VTaXplKSB8fCAodGhpcy5uelRvdGFsID4gMCAmJiAhdGhpcy5uekhpZGVPblNpbmdsZVBhZ2UpO1xuICAgIH1cblxuICAgIGlmIChuelNpemUpIHtcbiAgICAgIHRoaXMuc2l6ZSA9IG56U2l6ZS5jdXJyZW50VmFsdWU7XG4gICAgfVxuICB9XG59XG4iXX0=