/**
 * @fileoverview added by tsickle
 * Generated from: src/table-data.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, skip, switchMap, takeUntil } from 'rxjs/operators';
export class NzTableDataService {
    constructor() {
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
        ([pageIndex, pageSize, listOfCalc]) => {
            return {
                pageIndex,
                pageSize,
                sort: listOfCalc
                    .filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => item.sortFn))
                    .map((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => {
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
                item => item.filterFn))
                    .map((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => {
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
        ([listOfData, listOfCalcOperator]) => {
            /** @type {?} */
            let listOfDataAfterCalc = [...listOfData];
            /** @type {?} */
            const listOfFilterOperator = listOfCalcOperator.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                const { filterValue, filterFn } = item;
                /** @type {?} */
                const isReset = filterValue === null || filterValue === undefined || (Array.isArray(filterValue) && (/** @type {?} */ (filterValue)).length === 0);
                return !isReset && typeof filterFn === 'function';
            }));
            for (const item of listOfFilterOperator) {
                const { filterFn, filterValue } = item;
                listOfDataAfterCalc = listOfDataAfterCalc.filter((/**
                 * @param {?} data
                 * @return {?}
                 */
                data => ((/** @type {?} */ (filterFn)))(filterValue, data)));
            }
            /** @type {?} */
            const listOfSortOperator = listOfCalcOperator
                .filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item.sortOrder !== null && typeof item.sortFn === 'function'))
                .sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => +b.sortPriority - +a.sortPriority));
            if (listOfCalcOperator.length) {
                listOfDataAfterCalc.sort((/**
                 * @param {?} record1
                 * @param {?} record2
                 * @return {?}
                 */
                (record1, record2) => {
                    for (const item of listOfSortOperator) {
                        const { sortFn, sortOrder } = item;
                        if (sortFn && sortOrder) {
                            /** @type {?} */
                            const compareResult = ((/** @type {?} */ (sortFn)))(record1, record2, sortOrder);
                            if (compareResult !== 0) {
                                return sortOrder === 'ascend' ? compareResult : -compareResult;
                            }
                        }
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
        value => {
            const [pageIndex, pageSize, listOfData] = value;
            /** @type {?} */
            const maxPageIndex = Math.ceil(listOfData.length / pageSize) || 1;
            return pageIndex <= maxPageIndex;
        })), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([pageIndex, pageSize, listOfData]) => {
            return listOfData.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
        })));
        this.listOfCurrentPageData$ = this.frontPagination$.pipe(switchMap((/**
         * @param {?} pagination
         * @return {?}
         */
        pagination => (pagination ? this.listOfFrontEndCurrentPageData$ : this.listOfData$))));
        this.total$ = this.frontPagination$.pipe(switchMap((/**
         * @param {?} pagination
         * @return {?}
         */
        pagination => (pagination ? this.listOfDataAfterCalc$ : this.listOfData$))), map((/**
         * @param {?} list
         * @return {?}
         */
        list => list.length)), distinctUntilChanged());
    }
    /**
     * @param {?} size
     * @return {?}
     */
    updatePageSize(size) {
        this.pageSize$.next(size);
    }
    /**
     * @param {?} pagination
     * @return {?}
     */
    updateFrontPagination(pagination) {
        this.frontPagination$.next(pagination);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    updatePageIndex(index) {
        this.pageIndex$.next(index);
    }
    /**
     * @param {?} list
     * @return {?}
     */
    updateListOfData(list) {
        this.listOfData$.next(list);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTableDataService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NzTableDataService.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbInNyYy90YWJsZS1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0UsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJN0csTUFBTSxPQUFPLGtCQUFrQjtJQWdIN0I7UUEvR1EsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDekIsZUFBVSxHQUFHLElBQUksZUFBZSxDQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzVDLHFCQUFnQixHQUFHLElBQUksZUFBZSxDQUFVLElBQUksQ0FBQyxDQUFDO1FBQ3RELGNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBUyxFQUFFLENBQUMsQ0FBQztRQUM1QyxnQkFBVyxHQUFHLElBQUksZUFBZSxDQUFnQixFQUFFLENBQUMsQ0FBQztRQUM3RCx1QkFBa0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7UUFDbEUsc0JBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLHdCQUFtQixHQUFHLElBQUksZUFBZSxDQVN2QyxFQUFFLENBQUMsQ0FBQztRQUNOLGlCQUFZLEdBQW1DLGFBQWEsQ0FBQztZQUMzRCxJQUFJLENBQUMsa0JBQWtCO1lBQ3ZCLElBQUksQ0FBQyxpQkFBaUI7WUFDdEIsSUFBSSxDQUFDLG1CQUFt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QUFpQzs7Ozs7SUFDakMsd0NBQW9EOzs7OztJQUNwRCw4Q0FBOEQ7Ozs7O0lBQzlELHVDQUFvRDs7Ozs7SUFDcEQseUNBQTZEOztJQUM3RCxnREFBa0U7O0lBQ2xFLCtDQUFnRTs7SUFDaEUsaURBU007O0lBQ04sMENBNkJFOzs7OztJQUNGLGtEQStCRTs7Ozs7SUFDRiw0REFVRTs7SUFDRixvREFFRTs7SUFDRixvQ0FJRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgc2tpcCwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOelRhYmxlRGF0YSwgTnpUYWJsZUZpbHRlckZuLCBOelRhYmxlRmlsdGVyVmFsdWUsIE56VGFibGVRdWVyeVBhcmFtcywgTnpUYWJsZVNvcnRGbiwgTnpUYWJsZVNvcnRPcmRlciB9IGZyb20gJy4vdGFibGUudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTnpUYWJsZURhdGFTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgcGFnZUluZGV4JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPigxKTtcbiAgcHJpdmF0ZSBmcm9udFBhZ2luYXRpb24kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPih0cnVlKTtcbiAgcHJpdmF0ZSBwYWdlU2l6ZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4oMTApO1xuICBwcml2YXRlIGxpc3RPZkRhdGEkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxOelRhYmxlRGF0YVtdPihbXSk7XG4gIHBhZ2VJbmRleERpc3RpbmN0JCA9IHRoaXMucGFnZUluZGV4JC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICBwYWdlU2l6ZURpc3RpbmN0JCA9IHRoaXMucGFnZVNpemUkLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gIGxpc3RPZkNhbGNPcGVyYXRvciQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFxuICAgIEFycmF5PHtcbiAgICAgIGtleT86IHN0cmluZztcbiAgICAgIHNvcnRGbjogTnpUYWJsZVNvcnRGbiB8IG51bGwgfCBib29sZWFuO1xuICAgICAgc29ydE9yZGVyOiBOelRhYmxlU29ydE9yZGVyO1xuICAgICAgZmlsdGVyRm46IE56VGFibGVGaWx0ZXJGbiB8IG51bGwgfCBib29sZWFuO1xuICAgICAgZmlsdGVyVmFsdWU6IE56VGFibGVGaWx0ZXJWYWx1ZTtcbiAgICAgIHNvcnRQcmlvcml0eTogbnVtYmVyIHwgYm9vbGVhbjtcbiAgICB9PlxuICA+KFtdKTtcbiAgcXVlcnlQYXJhbXMkOiBPYnNlcnZhYmxlPE56VGFibGVRdWVyeVBhcmFtcz4gPSBjb21iaW5lTGF0ZXN0KFtcbiAgICB0aGlzLnBhZ2VJbmRleERpc3RpbmN0JCxcbiAgICB0aGlzLnBhZ2VTaXplRGlzdGluY3QkLFxuICAgIHRoaXMubGlzdE9mQ2FsY09wZXJhdG9yJFxuICBdKS5waXBlKFxuICAgIGRlYm91bmNlVGltZSgwKSxcbiAgICBza2lwKDEpLFxuICAgIG1hcCgoW3BhZ2VJbmRleCwgcGFnZVNpemUsIGxpc3RPZkNhbGNdKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlSW5kZXgsXG4gICAgICAgIHBhZ2VTaXplLFxuICAgICAgICBzb3J0OiBsaXN0T2ZDYWxjXG4gICAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0uc29ydEZuKVxuICAgICAgICAgIC5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBrZXk6IGl0ZW0ua2V5ISxcbiAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0uc29ydE9yZGVyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pLFxuICAgICAgICBmaWx0ZXI6IGxpc3RPZkNhbGNcbiAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS5maWx0ZXJGbilcbiAgICAgICAgICAubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAga2V5OiBpdGVtLmtleSEsXG4gICAgICAgICAgICAgIHZhbHVlOiBpdGVtLmZpbHRlclZhbHVlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pXG4gICAgICB9O1xuICAgIH0pXG4gICk7XG4gIHByaXZhdGUgbGlzdE9mRGF0YUFmdGVyQ2FsYyQgPSBjb21iaW5lTGF0ZXN0KFt0aGlzLmxpc3RPZkRhdGEkLCB0aGlzLmxpc3RPZkNhbGNPcGVyYXRvciRdKS5waXBlKFxuICAgIG1hcCgoW2xpc3RPZkRhdGEsIGxpc3RPZkNhbGNPcGVyYXRvcl0pID0+IHtcbiAgICAgIGxldCBsaXN0T2ZEYXRhQWZ0ZXJDYWxjID0gWy4uLmxpc3RPZkRhdGFdO1xuICAgICAgY29uc3QgbGlzdE9mRmlsdGVyT3BlcmF0b3IgPSBsaXN0T2ZDYWxjT3BlcmF0b3IuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCB7IGZpbHRlclZhbHVlLCBmaWx0ZXJGbiB9ID0gaXRlbTtcbiAgICAgICAgY29uc3QgaXNSZXNldCA9IGZpbHRlclZhbHVlID09PSBudWxsIHx8IGZpbHRlclZhbHVlID09PSB1bmRlZmluZWQgfHwgKEFycmF5LmlzQXJyYXkoZmlsdGVyVmFsdWUpICYmIGZpbHRlclZhbHVlIS5sZW5ndGggPT09IDApO1xuICAgICAgICByZXR1cm4gIWlzUmVzZXQgJiYgdHlwZW9mIGZpbHRlckZuID09PSAnZnVuY3Rpb24nO1xuICAgICAgfSk7XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdE9mRmlsdGVyT3BlcmF0b3IpIHtcbiAgICAgICAgY29uc3QgeyBmaWx0ZXJGbiwgZmlsdGVyVmFsdWUgfSA9IGl0ZW07XG4gICAgICAgIGxpc3RPZkRhdGFBZnRlckNhbGMgPSBsaXN0T2ZEYXRhQWZ0ZXJDYWxjLmZpbHRlcihkYXRhID0+IChmaWx0ZXJGbiBhcyBOelRhYmxlRmlsdGVyRm4pKGZpbHRlclZhbHVlLCBkYXRhKSk7XG4gICAgICB9XG4gICAgICBjb25zdCBsaXN0T2ZTb3J0T3BlcmF0b3IgPSBsaXN0T2ZDYWxjT3BlcmF0b3JcbiAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0uc29ydE9yZGVyICE9PSBudWxsICYmIHR5cGVvZiBpdGVtLnNvcnRGbiA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+ICtiLnNvcnRQcmlvcml0eSAtICthLnNvcnRQcmlvcml0eSk7XG4gICAgICBpZiAobGlzdE9mQ2FsY09wZXJhdG9yLmxlbmd0aCkge1xuICAgICAgICBsaXN0T2ZEYXRhQWZ0ZXJDYWxjLnNvcnQoKHJlY29yZDEsIHJlY29yZDIpID0+IHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdE9mU29ydE9wZXJhdG9yKSB7XG4gICAgICAgICAgICBjb25zdCB7IHNvcnRGbiwgc29ydE9yZGVyIH0gPSBpdGVtO1xuICAgICAgICAgICAgaWYgKHNvcnRGbiAmJiBzb3J0T3JkZXIpIHtcbiAgICAgICAgICAgICAgY29uc3QgY29tcGFyZVJlc3VsdCA9IChzb3J0Rm4gYXMgTnpUYWJsZVNvcnRGbikocmVjb3JkMSwgcmVjb3JkMiwgc29ydE9yZGVyKTtcbiAgICAgICAgICAgICAgaWYgKGNvbXBhcmVSZXN1bHQgIT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc29ydE9yZGVyID09PSAnYXNjZW5kJyA/IGNvbXBhcmVSZXN1bHQgOiAtY29tcGFyZVJlc3VsdDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGlzdE9mRGF0YUFmdGVyQ2FsYztcbiAgICB9KVxuICApO1xuICBwcml2YXRlIGxpc3RPZkZyb250RW5kQ3VycmVudFBhZ2VEYXRhJCA9IGNvbWJpbmVMYXRlc3QoW3RoaXMucGFnZUluZGV4RGlzdGluY3QkLCB0aGlzLnBhZ2VTaXplRGlzdGluY3QkLCB0aGlzLmxpc3RPZkRhdGFBZnRlckNhbGMkXSkucGlwZShcbiAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgZmlsdGVyKHZhbHVlID0+IHtcbiAgICAgIGNvbnN0IFtwYWdlSW5kZXgsIHBhZ2VTaXplLCBsaXN0T2ZEYXRhXSA9IHZhbHVlO1xuICAgICAgY29uc3QgbWF4UGFnZUluZGV4ID0gTWF0aC5jZWlsKGxpc3RPZkRhdGEubGVuZ3RoIC8gcGFnZVNpemUpIHx8IDE7XG4gICAgICByZXR1cm4gcGFnZUluZGV4IDw9IG1heFBhZ2VJbmRleDtcbiAgICB9KSxcbiAgICBtYXAoKFtwYWdlSW5kZXgsIHBhZ2VTaXplLCBsaXN0T2ZEYXRhXSkgPT4ge1xuICAgICAgcmV0dXJuIGxpc3RPZkRhdGEuc2xpY2UoKHBhZ2VJbmRleCAtIDEpICogcGFnZVNpemUsIHBhZ2VJbmRleCAqIHBhZ2VTaXplKTtcbiAgICB9KVxuICApO1xuICBsaXN0T2ZDdXJyZW50UGFnZURhdGEkID0gdGhpcy5mcm9udFBhZ2luYXRpb24kLnBpcGUoXG4gICAgc3dpdGNoTWFwKHBhZ2luYXRpb24gPT4gKHBhZ2luYXRpb24gPyB0aGlzLmxpc3RPZkZyb250RW5kQ3VycmVudFBhZ2VEYXRhJCA6IHRoaXMubGlzdE9mRGF0YSQpKVxuICApO1xuICB0b3RhbCQgPSB0aGlzLmZyb250UGFnaW5hdGlvbiQucGlwZShcbiAgICBzd2l0Y2hNYXAocGFnaW5hdGlvbiA9PiAocGFnaW5hdGlvbiA/IHRoaXMubGlzdE9mRGF0YUFmdGVyQ2FsYyQgOiB0aGlzLmxpc3RPZkRhdGEkKSksXG4gICAgbWFwKGxpc3QgPT4gbGlzdC5sZW5ndGgpLFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgKTtcblxuICB1cGRhdGVQYWdlU2l6ZShzaXplOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2VTaXplJC5uZXh0KHNpemUpO1xuICB9XG4gIHVwZGF0ZUZyb250UGFnaW5hdGlvbihwYWdpbmF0aW9uOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5mcm9udFBhZ2luYXRpb24kLm5leHQocGFnaW5hdGlvbik7XG4gIH1cbiAgdXBkYXRlUGFnZUluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2VJbmRleCQubmV4dChpbmRleCk7XG4gIH1cbiAgdXBkYXRlTGlzdE9mRGF0YShsaXN0OiBOelRhYmxlRGF0YVtdKTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZEYXRhJC5uZXh0KGxpc3QpO1xuICB9XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=