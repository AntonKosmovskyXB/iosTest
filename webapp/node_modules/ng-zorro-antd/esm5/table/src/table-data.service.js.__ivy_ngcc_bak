/**
 * @fileoverview added by tsickle
 * Generated from: src/table-data.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __read, __spread, __values } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, skip, switchMap, takeUntil } from 'rxjs/operators';
var NzTableDataService = /** @class */ (function () {
    function NzTableDataService() {
        var _this = this;
        this.destroy$ = new Subject();
        this.pageIndex$ = new BehaviorSubject(1);
        this.frontPagination$ = new BehaviorSubject(true);
        this.pageSize$ = new BehaviorSubject(10);
        this.listOfData$ = new BehaviorSubject([]);
        this.pageIndexDistinct$ = this.pageIndex$.pipe(distinctUntilChanged());
        this.pageSizeDistinct$ = this.pageSize$.pipe(distinctUntilChanged());
        this.listOfCalcOperator$ = new BehaviorSubject([]);
        this.queryParams$ = combineLatest([
            this.pageIndexDistinct$,
            this.pageSizeDistinct$,
            this.listOfCalcOperator$
        ]).pipe(debounceTime(0), skip(1), map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 3), pageIndex = _b[0], pageSize = _b[1], listOfCalc = _b[2];
            return {
                pageIndex: pageIndex,
                pageSize: pageSize,
                sort: listOfCalc
                    .filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.sortFn; }))
                    .map((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    return {
                        key: (/** @type {?} */ (item.key)),
                        value: item.sortOrder
                    };
                })),
                filter: listOfCalc
                    .filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.filterFn; }))
                    .map((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    return {
                        key: (/** @type {?} */ (item.key)),
                        value: item.filterValue
                    };
                }))
            };
        })));
        this.listOfDataAfterCalc$ = combineLatest([this.listOfData$, this.listOfCalcOperator$]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var e_1, _b;
            var _c = __read(_a, 2), listOfData = _c[0], listOfCalcOperator = _c[1];
            /** @type {?} */
            var listOfDataAfterCalc = __spread(listOfData);
            /** @type {?} */
            var listOfFilterOperator = listOfCalcOperator.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                var filterValue = item.filterValue, filterFn = item.filterFn;
                /** @type {?} */
                var isReset = filterValue === null || filterValue === undefined || (Array.isArray(filterValue) && (/** @type {?} */ (filterValue)).length === 0);
                return !isReset && typeof filterFn === 'function';
            }));
            var _loop_1 = function (item) {
                var filterFn = item.filterFn, filterValue = item.filterValue;
                listOfDataAfterCalc = listOfDataAfterCalc.filter((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) { return ((/** @type {?} */ (filterFn)))(filterValue, data); }));
            };
            try {
                for (var listOfFilterOperator_1 = __values(listOfFilterOperator), listOfFilterOperator_1_1 = listOfFilterOperator_1.next(); !listOfFilterOperator_1_1.done; listOfFilterOperator_1_1 = listOfFilterOperator_1.next()) {
                    var item = listOfFilterOperator_1_1.value;
                    _loop_1(item);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (listOfFilterOperator_1_1 && !listOfFilterOperator_1_1.done && (_b = listOfFilterOperator_1.return)) _b.call(listOfFilterOperator_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            /** @type {?} */
            var listOfSortOperator = listOfCalcOperator
                .filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.sortOrder !== null && typeof item.sortFn === 'function'; }))
                .sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return +b.sortPriority - +a.sortPriority; }));
            if (listOfCalcOperator.length) {
                listOfDataAfterCalc.sort((/**
                 * @param {?} record1
                 * @param {?} record2
                 * @return {?}
                 */
                function (record1, record2) {
                    var e_2, _a;
                    try {
                        for (var listOfSortOperator_1 = __values(listOfSortOperator), listOfSortOperator_1_1 = listOfSortOperator_1.next(); !listOfSortOperator_1_1.done; listOfSortOperator_1_1 = listOfSortOperator_1.next()) {
                            var item = listOfSortOperator_1_1.value;
                            var sortFn = item.sortFn, sortOrder = item.sortOrder;
                            if (sortFn && sortOrder) {
                                /** @type {?} */
                                var compareResult = ((/** @type {?} */ (sortFn)))(record1, record2, sortOrder);
                                if (compareResult !== 0) {
                                    return sortOrder === 'ascend' ? compareResult : -compareResult;
                                }
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (listOfSortOperator_1_1 && !listOfSortOperator_1_1.done && (_a = listOfSortOperator_1.return)) _a.call(listOfSortOperator_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    return 0;
                }));
            }
            return listOfDataAfterCalc;
        })));
        this.listOfFrontEndCurrentPageData$ = combineLatest([this.pageIndexDistinct$, this.pageSizeDistinct$, this.listOfDataAfterCalc$]).pipe(takeUntil(this.destroy$), filter((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _a = __read(value, 3), pageIndex = _a[0], pageSize = _a[1], listOfData = _a[2];
            /** @type {?} */
            var maxPageIndex = Math.ceil(listOfData.length / pageSize) || 1;
            return pageIndex <= maxPageIndex;
        })), map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 3), pageIndex = _b[0], pageSize = _b[1], listOfData = _b[2];
            return listOfData.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
        })));
        this.listOfCurrentPageData$ = this.frontPagination$.pipe(switchMap((/**
         * @param {?} pagination
         * @return {?}
         */
        function (pagination) { return (pagination ? _this.listOfFrontEndCurrentPageData$ : _this.listOfData$); })));
        this.total$ = this.frontPagination$.pipe(switchMap((/**
         * @param {?} pagination
         * @return {?}
         */
        function (pagination) { return (pagination ? _this.listOfDataAfterCalc$ : _this.listOfData$); })), map((/**
         * @param {?} list
         * @return {?}
         */
        function (list) { return list.length; })), distinctUntilChanged());
    }
    /**
     * @param {?} size
     * @return {?}
     */
    NzTableDataService.prototype.updatePageSize = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        this.pageSize$.next(size);
    };
    /**
     * @param {?} pagination
     * @return {?}
     */
    NzTableDataService.prototype.updateFrontPagination = /**
     * @param {?} pagination
     * @return {?}
     */
    function (pagination) {
        this.frontPagination$.next(pagination);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NzTableDataService.prototype.updatePageIndex = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.pageIndex$.next(index);
    };
    /**
     * @param {?} list
     * @return {?}
     */
    NzTableDataService.prototype.updateListOfData = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        this.listOfData$.next(list);
    };
    /**
     * @return {?}
     */
    NzTableDataService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzTableDataService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NzTableDataService.ctorParameters = function () { return []; };
    return NzTableDataService;
}());
export { NzTableDataService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzTableDataService.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzTableDataService.prototype.pageIndex$;
    /**
     * @type {?}
     * @private
     */
    NzTableDataService.prototype.frontPagination$;
    /**
     * @type {?}
     * @private
     */
    NzTableDataService.prototype.pageSize$;
    /**
     * @type {?}
     * @private
     */
    NzTableDataService.prototype.listOfData$;
    /** @type {?} */
    NzTableDataService.prototype.pageIndexDistinct$;
    /** @type {?} */
    NzTableDataService.prototype.pageSizeDistinct$;
    /** @type {?} */
    NzTableDataService.prototype.listOfCalcOperator$;
    /** @type {?} */
    NzTableDataService.prototype.queryParams$;
    /**
     * @type {?}
     * @private
     */
    NzTableDataService.prototype.listOfDataAfterCalc$;
    /**
     * @type {?}
     * @private
     */
    NzTableDataService.prototype.listOfFrontEndCurrentPageData$;
    /** @type {?} */
    NzTableDataService.prototype.listOfCurrentPageData$;
    /** @type {?} */
    NzTableDataService.prototype.total$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbInNyYy90YWJsZS1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzdHO0lBaUhFO1FBQUEsaUJBQWdCO1FBL0dSLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLGVBQVUsR0FBRyxJQUFJLGVBQWUsQ0FBUyxDQUFDLENBQUMsQ0FBQztRQUM1QyxxQkFBZ0IsR0FBRyxJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUMsQ0FBQztRQUN0RCxjQUFTLEdBQUcsSUFBSSxlQUFlLENBQVMsRUFBRSxDQUFDLENBQUM7UUFDNUMsZ0JBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBZ0IsRUFBRSxDQUFDLENBQUM7UUFDN0QsdUJBQWtCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO1FBQ2xFLHNCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztRQUNoRSx3QkFBbUIsR0FBRyxJQUFJLGVBQWUsQ0FTdkMsRUFBRSxDQUFDLENBQUM7UUFDTixpQkFBWSxHQUFtQyxhQUFhLENBQUM7WUFDM0QsSUFBSSxDQUFDLGtCQUFrQjtZQUN2QixJQUFJLENBQUMsaUJBQWlCO1lBQ3RCLElBQUksQ0FBQyxtQkFBbUI7U0FD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QUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Z0JBckhGLFVBQVU7Ozs7SUFzSFgseUJBQUM7Q0FBQSxBQXRIRCxJQXNIQztTQXJIWSxrQkFBa0I7Ozs7OztJQUM3QixzQ0FBaUM7Ozs7O0lBQ2pDLHdDQUFvRDs7Ozs7SUFDcEQsOENBQThEOzs7OztJQUM5RCx1Q0FBb0Q7Ozs7O0lBQ3BELHlDQUE2RDs7SUFDN0QsZ0RBQWtFOztJQUNsRSwrQ0FBZ0U7O0lBQ2hFLGlEQVNNOztJQUNOLDBDQTZCRTs7Ozs7SUFDRixrREErQkU7Ozs7O0lBQ0YsNERBVUU7O0lBQ0Ysb0RBRUU7O0lBQ0Ysb0NBSUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHNraXAsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnpUYWJsZURhdGEsIE56VGFibGVGaWx0ZXJGbiwgTnpUYWJsZUZpbHRlclZhbHVlLCBOelRhYmxlUXVlcnlQYXJhbXMsIE56VGFibGVTb3J0Rm4sIE56VGFibGVTb3J0T3JkZXIgfSBmcm9tICcuL3RhYmxlLnR5cGVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE56VGFibGVEYXRhU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHBhZ2VJbmRleCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4oMSk7XG4gIHByaXZhdGUgZnJvbnRQYWdpbmF0aW9uJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odHJ1ZSk7XG4gIHByaXZhdGUgcGFnZVNpemUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+KDEwKTtcbiAgcHJpdmF0ZSBsaXN0T2ZEYXRhJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TnpUYWJsZURhdGFbXT4oW10pO1xuICBwYWdlSW5kZXhEaXN0aW5jdCQgPSB0aGlzLnBhZ2VJbmRleCQucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgcGFnZVNpemVEaXN0aW5jdCQgPSB0aGlzLnBhZ2VTaXplJC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICBsaXN0T2ZDYWxjT3BlcmF0b3IkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxcbiAgICBBcnJheTx7XG4gICAgICBrZXk/OiBzdHJpbmc7XG4gICAgICBzb3J0Rm46IE56VGFibGVTb3J0Rm4gfCBudWxsIHwgYm9vbGVhbjtcbiAgICAgIHNvcnRPcmRlcjogTnpUYWJsZVNvcnRPcmRlcjtcbiAgICAgIGZpbHRlckZuOiBOelRhYmxlRmlsdGVyRm4gfCBudWxsIHwgYm9vbGVhbjtcbiAgICAgIGZpbHRlclZhbHVlOiBOelRhYmxlRmlsdGVyVmFsdWU7XG4gICAgICBzb3J0UHJpb3JpdHk6IG51bWJlciB8IGJvb2xlYW47XG4gICAgfT5cbiAgPihbXSk7XG4gIHF1ZXJ5UGFyYW1zJDogT2JzZXJ2YWJsZTxOelRhYmxlUXVlcnlQYXJhbXM+ID0gY29tYmluZUxhdGVzdChbXG4gICAgdGhpcy5wYWdlSW5kZXhEaXN0aW5jdCQsXG4gICAgdGhpcy5wYWdlU2l6ZURpc3RpbmN0JCxcbiAgICB0aGlzLmxpc3RPZkNhbGNPcGVyYXRvciRcbiAgXSkucGlwZShcbiAgICBkZWJvdW5jZVRpbWUoMCksXG4gICAgc2tpcCgxKSxcbiAgICBtYXAoKFtwYWdlSW5kZXgsIHBhZ2VTaXplLCBsaXN0T2ZDYWxjXSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZUluZGV4LFxuICAgICAgICBwYWdlU2l6ZSxcbiAgICAgICAgc29ydDogbGlzdE9mQ2FsY1xuICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLnNvcnRGbilcbiAgICAgICAgICAubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAga2V5OiBpdGVtLmtleSEsXG4gICAgICAgICAgICAgIHZhbHVlOiBpdGVtLnNvcnRPcmRlclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyOiBsaXN0T2ZDYWxjXG4gICAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0uZmlsdGVyRm4pXG4gICAgICAgICAgLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGtleTogaXRlbS5rZXkhLFxuICAgICAgICAgICAgICB2YWx1ZTogaXRlbS5maWx0ZXJWYWx1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KVxuICAgICAgfTtcbiAgICB9KVxuICApO1xuICBwcml2YXRlIGxpc3RPZkRhdGFBZnRlckNhbGMkID0gY29tYmluZUxhdGVzdChbdGhpcy5saXN0T2ZEYXRhJCwgdGhpcy5saXN0T2ZDYWxjT3BlcmF0b3IkXSkucGlwZShcbiAgICBtYXAoKFtsaXN0T2ZEYXRhLCBsaXN0T2ZDYWxjT3BlcmF0b3JdKSA9PiB7XG4gICAgICBsZXQgbGlzdE9mRGF0YUFmdGVyQ2FsYyA9IFsuLi5saXN0T2ZEYXRhXTtcbiAgICAgIGNvbnN0IGxpc3RPZkZpbHRlck9wZXJhdG9yID0gbGlzdE9mQ2FsY09wZXJhdG9yLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgY29uc3QgeyBmaWx0ZXJWYWx1ZSwgZmlsdGVyRm4gfSA9IGl0ZW07XG4gICAgICAgIGNvbnN0IGlzUmVzZXQgPSBmaWx0ZXJWYWx1ZSA9PT0gbnVsbCB8fCBmaWx0ZXJWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IChBcnJheS5pc0FycmF5KGZpbHRlclZhbHVlKSAmJiBmaWx0ZXJWYWx1ZSEubGVuZ3RoID09PSAwKTtcbiAgICAgICAgcmV0dXJuICFpc1Jlc2V0ICYmIHR5cGVvZiBmaWx0ZXJGbiA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgIH0pO1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGxpc3RPZkZpbHRlck9wZXJhdG9yKSB7XG4gICAgICAgIGNvbnN0IHsgZmlsdGVyRm4sIGZpbHRlclZhbHVlIH0gPSBpdGVtO1xuICAgICAgICBsaXN0T2ZEYXRhQWZ0ZXJDYWxjID0gbGlzdE9mRGF0YUFmdGVyQ2FsYy5maWx0ZXIoZGF0YSA9PiAoZmlsdGVyRm4gYXMgTnpUYWJsZUZpbHRlckZuKShmaWx0ZXJWYWx1ZSwgZGF0YSkpO1xuICAgICAgfVxuICAgICAgY29uc3QgbGlzdE9mU29ydE9wZXJhdG9yID0gbGlzdE9mQ2FsY09wZXJhdG9yXG4gICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLnNvcnRPcmRlciAhPT0gbnVsbCAmJiB0eXBlb2YgaXRlbS5zb3J0Rm4gPT09ICdmdW5jdGlvbicpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiArYi5zb3J0UHJpb3JpdHkgLSArYS5zb3J0UHJpb3JpdHkpO1xuICAgICAgaWYgKGxpc3RPZkNhbGNPcGVyYXRvci5sZW5ndGgpIHtcbiAgICAgICAgbGlzdE9mRGF0YUFmdGVyQ2FsYy5zb3J0KChyZWNvcmQxLCByZWNvcmQyKSA9PiB7XG4gICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGxpc3RPZlNvcnRPcGVyYXRvcikge1xuICAgICAgICAgICAgY29uc3QgeyBzb3J0Rm4sIHNvcnRPcmRlciB9ID0gaXRlbTtcbiAgICAgICAgICAgIGlmIChzb3J0Rm4gJiYgc29ydE9yZGVyKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbXBhcmVSZXN1bHQgPSAoc29ydEZuIGFzIE56VGFibGVTb3J0Rm4pKHJlY29yZDEsIHJlY29yZDIsIHNvcnRPcmRlcik7XG4gICAgICAgICAgICAgIGlmIChjb21wYXJlUmVzdWx0ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvcnRPcmRlciA9PT0gJ2FzY2VuZCcgPyBjb21wYXJlUmVzdWx0IDogLWNvbXBhcmVSZXN1bHQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxpc3RPZkRhdGFBZnRlckNhbGM7XG4gICAgfSlcbiAgKTtcbiAgcHJpdmF0ZSBsaXN0T2ZGcm9udEVuZEN1cnJlbnRQYWdlRGF0YSQgPSBjb21iaW5lTGF0ZXN0KFt0aGlzLnBhZ2VJbmRleERpc3RpbmN0JCwgdGhpcy5wYWdlU2l6ZURpc3RpbmN0JCwgdGhpcy5saXN0T2ZEYXRhQWZ0ZXJDYWxjJF0pLnBpcGUoXG4gICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgIGZpbHRlcih2YWx1ZSA9PiB7XG4gICAgICBjb25zdCBbcGFnZUluZGV4LCBwYWdlU2l6ZSwgbGlzdE9mRGF0YV0gPSB2YWx1ZTtcbiAgICAgIGNvbnN0IG1heFBhZ2VJbmRleCA9IE1hdGguY2VpbChsaXN0T2ZEYXRhLmxlbmd0aCAvIHBhZ2VTaXplKSB8fCAxO1xuICAgICAgcmV0dXJuIHBhZ2VJbmRleCA8PSBtYXhQYWdlSW5kZXg7XG4gICAgfSksXG4gICAgbWFwKChbcGFnZUluZGV4LCBwYWdlU2l6ZSwgbGlzdE9mRGF0YV0pID0+IHtcbiAgICAgIHJldHVybiBsaXN0T2ZEYXRhLnNsaWNlKChwYWdlSW5kZXggLSAxKSAqIHBhZ2VTaXplLCBwYWdlSW5kZXggKiBwYWdlU2l6ZSk7XG4gICAgfSlcbiAgKTtcbiAgbGlzdE9mQ3VycmVudFBhZ2VEYXRhJCA9IHRoaXMuZnJvbnRQYWdpbmF0aW9uJC5waXBlKFxuICAgIHN3aXRjaE1hcChwYWdpbmF0aW9uID0+IChwYWdpbmF0aW9uID8gdGhpcy5saXN0T2ZGcm9udEVuZEN1cnJlbnRQYWdlRGF0YSQgOiB0aGlzLmxpc3RPZkRhdGEkKSlcbiAgKTtcbiAgdG90YWwkID0gdGhpcy5mcm9udFBhZ2luYXRpb24kLnBpcGUoXG4gICAgc3dpdGNoTWFwKHBhZ2luYXRpb24gPT4gKHBhZ2luYXRpb24gPyB0aGlzLmxpc3RPZkRhdGFBZnRlckNhbGMkIDogdGhpcy5saXN0T2ZEYXRhJCkpLFxuICAgIG1hcChsaXN0ID0+IGxpc3QubGVuZ3RoKSxcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICk7XG5cbiAgdXBkYXRlUGFnZVNpemUoc2l6ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wYWdlU2l6ZSQubmV4dChzaXplKTtcbiAgfVxuICB1cGRhdGVGcm9udFBhZ2luYXRpb24ocGFnaW5hdGlvbjogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZnJvbnRQYWdpbmF0aW9uJC5uZXh0KHBhZ2luYXRpb24pO1xuICB9XG4gIHVwZGF0ZVBhZ2VJbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wYWdlSW5kZXgkLm5leHQoaW5kZXgpO1xuICB9XG4gIHVwZGF0ZUxpc3RPZkRhdGEobGlzdDogTnpUYWJsZURhdGFbXSk6IHZvaWQge1xuICAgIHRoaXMubGlzdE9mRGF0YSQubmV4dChsaXN0KTtcbiAgfVxuICBjb25zdHJ1Y3RvcigpIHt9XG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19