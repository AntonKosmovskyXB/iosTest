/**
 * @fileoverview added by tsickle
 * Generated from: src/cell/th-addon.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/* tslint:disable:component-selector */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { warnDeprecation } from 'ng-zorro-antd/core/logger';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
var NzThAddOnComponent = /** @class */ (function () {
    function NzThAddOnComponent(cdr) {
        this.cdr = cdr;
        this.manualClickOrder$ = new Subject();
        this.calcOperatorChange$ = new Subject();
        this.nzFilterValue = null;
        this.sortOrder = null;
        this.sortDirections = ['ascend', 'descend', null];
        this.sortOrderChange$ = new Subject();
        this.destroy$ = new Subject();
        this.isNzShowSortChanged = false;
        this.isNzShowFilterChanged = false;
        this.nzFilterMultiple = true;
        this.nzSortOrder = null;
        this.nzSortPriority = false;
        this.nzSortDirections = ['ascend', 'descend', null];
        this.nzFilters = [];
        this.nzSortFn = null;
        this.nzFilterFn = null;
        this.nzShowSort = false;
        this.nzShowFilter = false;
        this.nzCustomFilter = false;
        this.nzCheckedChange = new EventEmitter();
        this.nzSortOrderChange = new EventEmitter();
        this.nzFilterChange = new EventEmitter();
        /**
         * @deprecated use nzSortOrder instead *
         */
        this.nzSort = null;
        /**
         * @deprecated use nzSortOrderChange instead *
         */
        this.nzSortChange = new EventEmitter();
    }
    /**
     * @param {?} sortDirections
     * @param {?} current
     * @return {?}
     */
    NzThAddOnComponent.prototype.getNextSortDirection = /**
     * @param {?} sortDirections
     * @param {?} current
     * @return {?}
     */
    function (sortDirections, current) {
        /** @type {?} */
        var index = sortDirections.indexOf(current);
        if (index === sortDirections.length - 1) {
            return sortDirections[0];
        }
        else {
            return sortDirections[index + 1];
        }
    };
    /**
     * @return {?}
     */
    NzThAddOnComponent.prototype.emitNextSortValue = /**
     * @return {?}
     */
    function () {
        if (this.nzShowSort) {
            /** @type {?} */
            var nextOrder = this.getNextSortDirection(this.sortDirections, (/** @type {?} */ (this.sortOrder)));
            this.setSortOrder(nextOrder);
            this.manualClickOrder$.next(this);
        }
    };
    /**
     * @param {?} order
     * @return {?}
     */
    NzThAddOnComponent.prototype.setSortOrder = /**
     * @param {?} order
     * @return {?}
     */
    function (order) {
        this.sortOrderChange$.next(order);
    };
    /**
     * @return {?}
     */
    NzThAddOnComponent.prototype.clearSortOrder = /**
     * @return {?}
     */
    function () {
        if (this.sortOrder !== null) {
            this.setSortOrder(null);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzThAddOnComponent.prototype.onFilterValueChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.nzFilterChange.emit(value);
        this.nzFilterValue = value;
        this.updateCalcOperator();
    };
    /**
     * @return {?}
     */
    NzThAddOnComponent.prototype.updateCalcOperator = /**
     * @return {?}
     */
    function () {
        this.calcOperatorChange$.next();
    };
    /**
     * @return {?}
     */
    NzThAddOnComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.sortOrderChange$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} order
         * @return {?}
         */
        function (order) {
            if (_this.sortOrder !== order) {
                _this.sortOrder = order;
                _this.nzSortChange.emit(order);
                _this.nzSortOrderChange.emit(order);
            }
            _this.updateCalcOperator();
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzThAddOnComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzSortKey = changes.nzSortKey, nzSort = changes.nzSort, nzSortDirections = changes.nzSortDirections, nzFilters = changes.nzFilters, nzSortOrder = changes.nzSortOrder, nzSortFn = changes.nzSortFn, nzFilterFn = changes.nzFilterFn, nzSortPriority = changes.nzSortPriority, nzFilterMultiple = changes.nzFilterMultiple, nzShowSort = changes.nzShowSort, nzShowFilter = changes.nzShowFilter;
        if (nzSortDirections) {
            if (this.nzSortDirections && this.nzSortDirections.length) {
                this.sortDirections = this.nzSortDirections;
            }
        }
        if (nzSort) {
            this.sortOrder = this.nzSort;
            this.setSortOrder(this.nzSort);
            warnDeprecation("'nzSort' and 'nzSortChange' is deprecated and will be removed in 10.0.0. Please use 'nzSortOrder' and 'nzSortOrderChange' instead.");
        }
        if (nzSortKey) {
            this.nzColumnKey = this.nzSortKey;
            warnDeprecation("'nzSortKey' is deprecated and will be removed in 10.0.0. Please use 'nzColumnKey' instead.");
        }
        if (nzSortOrder) {
            this.sortOrder = this.nzSortOrder;
            this.setSortOrder(this.nzSortOrder);
        }
        if (nzShowSort) {
            this.isNzShowSortChanged = true;
        }
        if (nzShowFilter) {
            this.isNzShowFilterChanged = true;
        }
        /** @type {?} */
        var isFirstChange = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value && value.firstChange && value.currentValue !== undefined; });
        if ((isFirstChange(nzSortKey) || isFirstChange(nzSort) || isFirstChange(nzSortOrder) || isFirstChange(nzSortFn)) &&
            !this.isNzShowSortChanged) {
            this.nzShowSort = true;
        }
        if (isFirstChange(nzFilters) && !this.isNzShowFilterChanged) {
            this.nzShowFilter = true;
        }
        if ((nzFilters || nzFilterMultiple) && this.nzShowFilter) {
            /** @type {?} */
            var listOfValue = this.nzFilters.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.byDefault; })).map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.value; }));
            this.nzFilterValue = this.nzFilterMultiple ? listOfValue : listOfValue[0] || null;
        }
        if (nzSortFn || nzFilterFn || nzSortPriority || nzFilters) {
            this.updateCalcOperator();
        }
    };
    /**
     * @return {?}
     */
    NzThAddOnComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzThAddOnComponent.decorators = [
        { type: Component, args: [{
                    selector: 'th[nzSortKey], th[nzColumnKey], th[nzSort], th[nzSortFn], th[nzSortOrder], th[nzFilters], th[nzShowSort], th[nzShowFilter], th[nzCustomFilter]',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <nz-table-filter\n      *ngIf=\"nzShowFilter || nzCustomFilter; else notFilterTemplate\"\n      [contentTemplate]=\"notFilterTemplate\"\n      [extraTemplate]=\"extraTemplate\"\n      [customFilter]=\"nzCustomFilter\"\n      [filterMultiple]=\"nzFilterMultiple\"\n      [listOfFilter]=\"nzFilters\"\n      (filterChange)=\"onFilterValueChange($event)\"\n    ></nz-table-filter>\n    <ng-template #notFilterTemplate>\n      <ng-template [ngTemplateOutlet]=\"nzShowSort ? sortTemplate : contentTemplate\"></ng-template>\n    </ng-template>\n    <ng-template #extraTemplate>\n      <ng-content select=\"[nz-th-extra]\"></ng-content>\n      <ng-content select=\"nz-filter-trigger\"></ng-content>\n    </ng-template>\n    <ng-template #sortTemplate>\n      <nz-table-sorters [sortOrder]=\"sortOrder\" [sortDirections]=\"sortDirections\" [contentTemplate]=\"contentTemplate\"></nz-table-sorters>\n    </ng-template>\n    <ng-template #contentTemplate>\n      <ng-content></ng-content>\n    </ng-template>\n  ",
                    host: {
                        '[class.ant-table-column-has-sorters]': 'nzShowSort',
                        '[class.ant-table-column-sort]': "sortOrder === 'descend' || sortOrder === 'ascend'",
                        '(click)': 'emitNextSortValue()'
                    }
                }] }
    ];
    /** @nocollapse */
    NzThAddOnComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    NzThAddOnComponent.propDecorators = {
        nzColumnKey: [{ type: Input }],
        nzFilterMultiple: [{ type: Input }],
        nzSortOrder: [{ type: Input }],
        nzSortPriority: [{ type: Input }],
        nzSortDirections: [{ type: Input }],
        nzFilters: [{ type: Input }],
        nzSortFn: [{ type: Input }],
        nzFilterFn: [{ type: Input }],
        nzShowSort: [{ type: Input }],
        nzShowFilter: [{ type: Input }],
        nzCustomFilter: [{ type: Input }],
        nzCheckedChange: [{ type: Output }],
        nzSortOrderChange: [{ type: Output }],
        nzFilterChange: [{ type: Output }],
        nzSortKey: [{ type: Input }],
        nzSort: [{ type: Input }],
        nzSortChange: [{ type: Output }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzThAddOnComponent.prototype, "nzShowSort", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzThAddOnComponent.prototype, "nzShowFilter", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzThAddOnComponent.prototype, "nzCustomFilter", void 0);
    return NzThAddOnComponent;
}());
export { NzThAddOnComponent };
if (false) {
    /** @type {?} */
    NzThAddOnComponent.ngAcceptInputType_nzShowSort;
    /** @type {?} */
    NzThAddOnComponent.ngAcceptInputType_nzShowFilter;
    /** @type {?} */
    NzThAddOnComponent.ngAcceptInputType_nzCustomFilter;
    /** @type {?} */
    NzThAddOnComponent.prototype.manualClickOrder$;
    /** @type {?} */
    NzThAddOnComponent.prototype.calcOperatorChange$;
    /** @type {?} */
    NzThAddOnComponent.prototype.nzFilterValue;
    /** @type {?} */
    NzThAddOnComponent.prototype.sortOrder;
    /** @type {?} */
    NzThAddOnComponent.prototype.sortDirections;
    /**
     * @type {?}
     * @private
     */
    NzThAddOnComponent.prototype.sortOrderChange$;
    /**
     * @type {?}
     * @private
     */
    NzThAddOnComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzThAddOnComponent.prototype.isNzShowSortChanged;
    /**
     * @type {?}
     * @private
     */
    NzThAddOnComponent.prototype.isNzShowFilterChanged;
    /** @type {?} */
    NzThAddOnComponent.prototype.nzColumnKey;
    /** @type {?} */
    NzThAddOnComponent.prototype.nzFilterMultiple;
    /** @type {?} */
    NzThAddOnComponent.prototype.nzSortOrder;
    /** @type {?} */
    NzThAddOnComponent.prototype.nzSortPriority;
    /** @type {?} */
    NzThAddOnComponent.prototype.nzSortDirections;
    /** @type {?} */
    NzThAddOnComponent.prototype.nzFilters;
    /** @type {?} */
    NzThAddOnComponent.prototype.nzSortFn;
    /** @type {?} */
    NzThAddOnComponent.prototype.nzFilterFn;
    /** @type {?} */
    NzThAddOnComponent.prototype.nzShowSort;
    /** @type {?} */
    NzThAddOnComponent.prototype.nzShowFilter;
    /** @type {?} */
    NzThAddOnComponent.prototype.nzCustomFilter;
    /** @type {?} */
    NzThAddOnComponent.prototype.nzCheckedChange;
    /** @type {?} */
    NzThAddOnComponent.prototype.nzSortOrderChange;
    /** @type {?} */
    NzThAddOnComponent.prototype.nzFilterChange;
    /**
     * @deprecated use nzColumnKey instead *
     * @type {?}
     */
    NzThAddOnComponent.prototype.nzSortKey;
    /**
     * @deprecated use nzSortOrder instead *
     * @type {?}
     */
    NzThAddOnComponent.prototype.nzSort;
    /**
     * @deprecated use nzSortOrderChange instead *
     * @type {?}
     */
    NzThAddOnComponent.prototype.nzSortChange;
    /**
     * @type {?}
     * @private
     */
    NzThAddOnComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGgtYWRkb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbInNyYy9jZWxsL3RoLWFkZG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUtBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFHTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUczQztJQTRHRSw0QkFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFuRTFDLHNCQUFpQixHQUFHLElBQUksT0FBTyxFQUFzQixDQUFDO1FBQ3RELHdCQUFtQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDcEMsa0JBQWEsR0FBdUIsSUFBSSxDQUFDO1FBQ3pDLGNBQVMsR0FBcUIsSUFBSSxDQUFDO1FBQ25DLG1CQUFjLEdBQXVCLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6RCxxQkFBZ0IsR0FBRyxJQUFJLE9BQU8sRUFBb0IsQ0FBQztRQUNuRCxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN6Qix3QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFDNUIsMEJBQXFCLEdBQUcsS0FBSyxDQUFDO1FBRTdCLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixnQkFBVyxHQUFxQixJQUFJLENBQUM7UUFDckMsbUJBQWMsR0FBcUIsS0FBSyxDQUFD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N0Qsd0NBQTRDOztJQUM1QywwQ0FBOEM7O0lBQzlDLDRDQUFnRDs7SUFDaEQsNkNBQWlFOztJQUNqRSwrQ0FBeUU7O0lBQ3pFLDRDQUEyRTs7Ozs7SUFFM0UsdUNBQTRCOzs7OztJQUU1QixvQ0FBeUM7Ozs7O0lBRXpDLDBDQUFvRTs7Ozs7SUF1Q3hELGlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG4vKiB0c2xpbnQ6ZGlzYWJsZTpjb21wb25lbnQtc2VsZWN0b3IgKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB3YXJuRGVwcmVjYXRpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbG9nZ2VyJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOelRhYmxlRmlsdGVyRm4sIE56VGFibGVGaWx0ZXJMaXN0LCBOelRhYmxlRmlsdGVyVmFsdWUsIE56VGFibGVTb3J0Rm4sIE56VGFibGVTb3J0T3JkZXIgfSBmcm9tICcuLi90YWJsZS50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjpcbiAgICAndGhbbnpTb3J0S2V5XSwgdGhbbnpDb2x1bW5LZXldLCB0aFtuelNvcnRdLCB0aFtuelNvcnRGbl0sIHRoW256U29ydE9yZGVyXSwgdGhbbnpGaWx0ZXJzXSwgdGhbbnpTaG93U29ydF0sIHRoW256U2hvd0ZpbHRlcl0sIHRoW256Q3VzdG9tRmlsdGVyXScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bnotdGFibGUtZmlsdGVyXG4gICAgICAqbmdJZj1cIm56U2hvd0ZpbHRlciB8fCBuekN1c3RvbUZpbHRlcjsgZWxzZSBub3RGaWx0ZXJUZW1wbGF0ZVwiXG4gICAgICBbY29udGVudFRlbXBsYXRlXT1cIm5vdEZpbHRlclRlbXBsYXRlXCJcbiAgICAgIFtleHRyYVRlbXBsYXRlXT1cImV4dHJhVGVtcGxhdGVcIlxuICAgICAgW2N1c3RvbUZpbHRlcl09XCJuekN1c3RvbUZpbHRlclwiXG4gICAgICBbZmlsdGVyTXVsdGlwbGVdPVwibnpGaWx0ZXJNdWx0aXBsZVwiXG4gICAgICBbbGlzdE9mRmlsdGVyXT1cIm56RmlsdGVyc1wiXG4gICAgICAoZmlsdGVyQ2hhbmdlKT1cIm9uRmlsdGVyVmFsdWVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgPjwvbnotdGFibGUtZmlsdGVyPlxuICAgIDxuZy10ZW1wbGF0ZSAjbm90RmlsdGVyVGVtcGxhdGU+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwibnpTaG93U29ydCA/IHNvcnRUZW1wbGF0ZSA6IGNvbnRlbnRUZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgI2V4dHJhVGVtcGxhdGU+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbbnotdGgtZXh0cmFdXCI+PC9uZy1jb250ZW50PlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibnotZmlsdGVyLXRyaWdnZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgI3NvcnRUZW1wbGF0ZT5cbiAgICAgIDxuei10YWJsZS1zb3J0ZXJzIFtzb3J0T3JkZXJdPVwic29ydE9yZGVyXCIgW3NvcnREaXJlY3Rpb25zXT1cInNvcnREaXJlY3Rpb25zXCIgW2NvbnRlbnRUZW1wbGF0ZV09XCJjb250ZW50VGVtcGxhdGVcIj48L256LXRhYmxlLXNvcnRlcnM+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgI2NvbnRlbnRUZW1wbGF0ZT5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtY29sdW1uLWhhcy1zb3J0ZXJzXSc6ICduelNob3dTb3J0JyxcbiAgICAnW2NsYXNzLmFudC10YWJsZS1jb2x1bW4tc29ydF0nOiBgc29ydE9yZGVyID09PSAnZGVzY2VuZCcgfHwgc29ydE9yZGVyID09PSAnYXNjZW5kJ2AsXG4gICAgJyhjbGljayknOiAnZW1pdE5leHRTb3J0VmFsdWUoKSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelRoQWRkT25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2hvd1NvcnQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2hvd0ZpbHRlcjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpDdXN0b21GaWx0ZXI6IEJvb2xlYW5JbnB1dDtcblxuICBtYW51YWxDbGlja09yZGVyJCA9IG5ldyBTdWJqZWN0PE56VGhBZGRPbkNvbXBvbmVudD4oKTtcbiAgY2FsY09wZXJhdG9yQ2hhbmdlJCA9IG5ldyBTdWJqZWN0KCk7XG4gIG56RmlsdGVyVmFsdWU6IE56VGFibGVGaWx0ZXJWYWx1ZSA9IG51bGw7XG4gIHNvcnRPcmRlcjogTnpUYWJsZVNvcnRPcmRlciA9IG51bGw7XG4gIHNvcnREaXJlY3Rpb25zOiBOelRhYmxlU29ydE9yZGVyW10gPSBbJ2FzY2VuZCcsICdkZXNjZW5kJywgbnVsbF07XG4gIHByaXZhdGUgc29ydE9yZGVyQ2hhbmdlJCA9IG5ldyBTdWJqZWN0PE56VGFibGVTb3J0T3JkZXI+KCk7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGlzTnpTaG93U29ydENoYW5nZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBpc056U2hvd0ZpbHRlckNoYW5nZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpDb2x1bW5LZXk/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56RmlsdGVyTXVsdGlwbGUgPSB0cnVlO1xuICBASW5wdXQoKSBuelNvcnRPcmRlcjogTnpUYWJsZVNvcnRPcmRlciA9IG51bGw7XG4gIEBJbnB1dCgpIG56U29ydFByaW9yaXR5OiBudW1iZXIgfCBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56U29ydERpcmVjdGlvbnM6IE56VGFibGVTb3J0T3JkZXJbXSA9IFsnYXNjZW5kJywgJ2Rlc2NlbmQnLCBudWxsXTtcbiAgQElucHV0KCkgbnpGaWx0ZXJzOiBOelRhYmxlRmlsdGVyTGlzdCA9IFtdO1xuICBASW5wdXQoKSBuelNvcnRGbjogTnpUYWJsZVNvcnRGbiB8IGJvb2xlYW4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpGaWx0ZXJGbjogTnpUYWJsZUZpbHRlckZuIHwgYm9vbGVhbiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93U29ydCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93RmlsdGVyID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekN1c3RvbUZpbHRlciA9IGZhbHNlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGVja2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTb3J0T3JkZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bGw+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekZpbHRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpUYWJsZUZpbHRlclZhbHVlPigpO1xuICAvKiogQGRlcHJlY2F0ZWQgdXNlIG56Q29sdW1uS2V5IGluc3RlYWQgKiovXG4gIEBJbnB1dCgpIG56U29ydEtleT86IHN0cmluZztcbiAgLyoqIEBkZXByZWNhdGVkIHVzZSBuelNvcnRPcmRlciBpbnN0ZWFkICoqL1xuICBASW5wdXQoKSBuelNvcnQ6IE56VGFibGVTb3J0T3JkZXIgPSBudWxsO1xuICAvKiogQGRlcHJlY2F0ZWQgdXNlIG56U29ydE9yZGVyQ2hhbmdlIGluc3RlYWQgKiovXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNvcnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bGw+KCk7XG5cbiAgZ2V0TmV4dFNvcnREaXJlY3Rpb24oc29ydERpcmVjdGlvbnM6IE56VGFibGVTb3J0T3JkZXJbXSwgY3VycmVudDogTnpUYWJsZVNvcnRPcmRlcik6IE56VGFibGVTb3J0T3JkZXIge1xuICAgIGNvbnN0IGluZGV4ID0gc29ydERpcmVjdGlvbnMuaW5kZXhPZihjdXJyZW50KTtcbiAgICBpZiAoaW5kZXggPT09IHNvcnREaXJlY3Rpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgIHJldHVybiBzb3J0RGlyZWN0aW9uc1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNvcnREaXJlY3Rpb25zW2luZGV4ICsgMV07XG4gICAgfVxuICB9XG5cbiAgZW1pdE5leHRTb3J0VmFsdWUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpTaG93U29ydCkge1xuICAgICAgY29uc3QgbmV4dE9yZGVyID0gdGhpcy5nZXROZXh0U29ydERpcmVjdGlvbih0aGlzLnNvcnREaXJlY3Rpb25zLCB0aGlzLnNvcnRPcmRlciEpO1xuICAgICAgdGhpcy5zZXRTb3J0T3JkZXIobmV4dE9yZGVyKTtcbiAgICAgIHRoaXMubWFudWFsQ2xpY2tPcmRlciQubmV4dCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBzZXRTb3J0T3JkZXIob3JkZXI6IE56VGFibGVTb3J0T3JkZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNvcnRPcmRlckNoYW5nZSQubmV4dChvcmRlcik7XG4gIH1cblxuICBjbGVhclNvcnRPcmRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zb3J0T3JkZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0U29ydE9yZGVyKG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIG9uRmlsdGVyVmFsdWVDaGFuZ2UodmFsdWU6IE56VGFibGVGaWx0ZXJWYWx1ZSk6IHZvaWQge1xuICAgIHRoaXMubnpGaWx0ZXJDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgdGhpcy5uekZpbHRlclZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVDYWxjT3BlcmF0b3IoKTtcbiAgfVxuXG4gIHVwZGF0ZUNhbGNPcGVyYXRvcigpOiB2b2lkIHtcbiAgICB0aGlzLmNhbGNPcGVyYXRvckNoYW5nZSQubmV4dCgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc29ydE9yZGVyQ2hhbmdlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKG9yZGVyID0+IHtcbiAgICAgIGlmICh0aGlzLnNvcnRPcmRlciAhPT0gb3JkZXIpIHtcbiAgICAgICAgdGhpcy5zb3J0T3JkZXIgPSBvcmRlcjtcbiAgICAgICAgdGhpcy5uelNvcnRDaGFuZ2UuZW1pdChvcmRlcik7XG4gICAgICAgIHRoaXMubnpTb3J0T3JkZXJDaGFuZ2UuZW1pdChvcmRlcik7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZUNhbGNPcGVyYXRvcigpO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3Qge1xuICAgICAgbnpTb3J0S2V5LFxuICAgICAgbnpTb3J0LFxuICAgICAgbnpTb3J0RGlyZWN0aW9ucyxcbiAgICAgIG56RmlsdGVycyxcbiAgICAgIG56U29ydE9yZGVyLFxuICAgICAgbnpTb3J0Rm4sXG4gICAgICBuekZpbHRlckZuLFxuICAgICAgbnpTb3J0UHJpb3JpdHksXG4gICAgICBuekZpbHRlck11bHRpcGxlLFxuICAgICAgbnpTaG93U29ydCxcbiAgICAgIG56U2hvd0ZpbHRlclxuICAgIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChuelNvcnREaXJlY3Rpb25zKSB7XG4gICAgICBpZiAodGhpcy5uelNvcnREaXJlY3Rpb25zICYmIHRoaXMubnpTb3J0RGlyZWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zb3J0RGlyZWN0aW9ucyA9IHRoaXMubnpTb3J0RGlyZWN0aW9ucztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG56U29ydCkge1xuICAgICAgdGhpcy5zb3J0T3JkZXIgPSB0aGlzLm56U29ydDtcbiAgICAgIHRoaXMuc2V0U29ydE9yZGVyKHRoaXMubnpTb3J0KTtcbiAgICAgIHdhcm5EZXByZWNhdGlvbihcbiAgICAgICAgYCduelNvcnQnIGFuZCAnbnpTb3J0Q2hhbmdlJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gMTAuMC4wLiBQbGVhc2UgdXNlICduelNvcnRPcmRlcicgYW5kICduelNvcnRPcmRlckNoYW5nZScgaW5zdGVhZC5gXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAobnpTb3J0S2V5KSB7XG4gICAgICB0aGlzLm56Q29sdW1uS2V5ID0gdGhpcy5uelNvcnRLZXk7XG4gICAgICB3YXJuRGVwcmVjYXRpb24oYCduelNvcnRLZXknIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAxMC4wLjAuIFBsZWFzZSB1c2UgJ256Q29sdW1uS2V5JyBpbnN0ZWFkLmApO1xuICAgIH1cbiAgICBpZiAobnpTb3J0T3JkZXIpIHtcbiAgICAgIHRoaXMuc29ydE9yZGVyID0gdGhpcy5uelNvcnRPcmRlcjtcbiAgICAgIHRoaXMuc2V0U29ydE9yZGVyKHRoaXMubnpTb3J0T3JkZXIpO1xuICAgIH1cbiAgICBpZiAobnpTaG93U29ydCkge1xuICAgICAgdGhpcy5pc056U2hvd1NvcnRDaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKG56U2hvd0ZpbHRlcikge1xuICAgICAgdGhpcy5pc056U2hvd0ZpbHRlckNoYW5nZWQgPSB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBpc0ZpcnN0Q2hhbmdlID0gKHZhbHVlOiBTaW1wbGVDaGFuZ2UpID0+IHZhbHVlICYmIHZhbHVlLmZpcnN0Q2hhbmdlICYmIHZhbHVlLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmIChcbiAgICAgIChpc0ZpcnN0Q2hhbmdlKG56U29ydEtleSkgfHwgaXNGaXJzdENoYW5nZShuelNvcnQpIHx8IGlzRmlyc3RDaGFuZ2UobnpTb3J0T3JkZXIpIHx8IGlzRmlyc3RDaGFuZ2UobnpTb3J0Rm4pKSAmJlxuICAgICAgIXRoaXMuaXNOelNob3dTb3J0Q2hhbmdlZFxuICAgICkge1xuICAgICAgdGhpcy5uelNob3dTb3J0ID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGlzRmlyc3RDaGFuZ2UobnpGaWx0ZXJzKSAmJiAhdGhpcy5pc056U2hvd0ZpbHRlckNoYW5nZWQpIHtcbiAgICAgIHRoaXMubnpTaG93RmlsdGVyID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKChuekZpbHRlcnMgfHwgbnpGaWx0ZXJNdWx0aXBsZSkgJiYgdGhpcy5uelNob3dGaWx0ZXIpIHtcbiAgICAgIGNvbnN0IGxpc3RPZlZhbHVlID0gdGhpcy5uekZpbHRlcnMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5ieURlZmF1bHQpLm1hcChpdGVtID0+IGl0ZW0udmFsdWUpO1xuICAgICAgdGhpcy5uekZpbHRlclZhbHVlID0gdGhpcy5uekZpbHRlck11bHRpcGxlID8gbGlzdE9mVmFsdWUgOiBsaXN0T2ZWYWx1ZVswXSB8fCBudWxsO1xuICAgIH1cbiAgICBpZiAobnpTb3J0Rm4gfHwgbnpGaWx0ZXJGbiB8fCBuelNvcnRQcmlvcml0eSB8fCBuekZpbHRlcnMpIHtcbiAgICAgIHRoaXMudXBkYXRlQ2FsY09wZXJhdG9yKCk7XG4gICAgfVxuICB9XG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19