/**
 * @fileoverview added by tsickle
 * Generated from: src/table-style.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, merge, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
export class NzTableStyleService {
    constructor() {
        this.theadTemplate$ = new ReplaySubject(1);
        this.hasFixLeft$ = new ReplaySubject(1);
        this.hasFixRight$ = new ReplaySubject(1);
        this.hostWidth$ = new ReplaySubject(1);
        this.columnCount$ = new ReplaySubject(1);
        this.showEmpty$ = new ReplaySubject(1);
        this.noResult$ = new ReplaySubject(1);
        this.listOfThWidthConfigPx$ = new BehaviorSubject([]);
        this.tableWidthConfigPx$ = new BehaviorSubject([]);
        this.manualWidthConfigPx$ = combineLatest([this.tableWidthConfigPx$, this.listOfThWidthConfigPx$]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([widthConfig, listOfWidth]) => (widthConfig.length ? widthConfig : listOfWidth))));
        this.listOfAutoWidthPx$ = new ReplaySubject(1);
        this.listOfListOfThWidthPx$ = merge(
        /** init with manual width **/
        this.manualWidthConfigPx$, combineLatest([this.listOfAutoWidthPx$, this.manualWidthConfigPx$]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([autoWidth, manualWidth]) => {
            /** use autoWidth until column length match **/
            if (autoWidth.length === manualWidth.length) {
                return autoWidth.map((/**
                 * @param {?} width
                 * @param {?} index
                 * @return {?}
                 */
                (width, index) => {
                    if (width === '0px') {
                        return manualWidth[index] || null;
                    }
                    else {
                        return manualWidth[index] || width;
                    }
                }));
            }
            else {
                return manualWidth;
            }
        }))));
        this.listOfMeasureColumn$ = new ReplaySubject(1);
        this.listOfListOfThWidth$ = this.listOfAutoWidthPx$.pipe(map((/**
         * @param {?} list
         * @return {?}
         */
        list => list.map((/**
         * @param {?} width
         * @return {?}
         */
        width => parseInt(width, 10))))));
        this.enableAutoMeasure$ = new ReplaySubject(1);
    }
    /**
     * @param {?} template
     * @return {?}
     */
    setTheadTemplate(template) {
        this.theadTemplate$.next(template);
    }
    /**
     * @param {?} hasFixLeft
     * @return {?}
     */
    setHasFixLeft(hasFixLeft) {
        this.hasFixLeft$.next(hasFixLeft);
    }
    /**
     * @param {?} hasFixRight
     * @return {?}
     */
    setHasFixRight(hasFixRight) {
        this.hasFixRight$.next(hasFixRight);
    }
    /**
     * @param {?} widthConfig
     * @return {?}
     */
    setTableWidthConfig(widthConfig) {
        this.tableWidthConfigPx$.next(widthConfig);
    }
    /**
     * @param {?} listOfTh
     * @return {?}
     */
    setListOfTh(listOfTh) {
        /** @type {?} */
        let columnCount = 0;
        listOfTh.forEach((/**
         * @param {?} th
         * @return {?}
         */
        th => {
            columnCount += (th.colspan && +th.colspan) || (th.colSpan && +th.colSpan) || 1;
        }));
        /** @type {?} */
        const listOfThPx = listOfTh.map((/**
         * @param {?} item
         * @return {?}
         */
        item => item.nzWidth));
        this.columnCount$.next(columnCount);
        this.listOfThWidthConfigPx$.next(listOfThPx);
    }
    /**
     * @param {?} listOfTh
     * @return {?}
     */
    setListOfMeasureColumn(listOfTh) {
        /** @type {?} */
        const listOfKeys = [];
        listOfTh.forEach((/**
         * @param {?} th
         * @return {?}
         */
        th => {
            /** @type {?} */
            const length = (th.colspan && +th.colspan) || (th.colSpan && +th.colSpan) || 1;
            for (let i = 0; i < length; i++) {
                listOfKeys.push(`measure_key_${i}`);
            }
        }));
        this.listOfMeasureColumn$.next(listOfKeys);
    }
    /**
     * @param {?} listOfAutoWidth
     * @return {?}
     */
    setListOfAutoWidth(listOfAutoWidth) {
        this.listOfAutoWidthPx$.next(listOfAutoWidth.map((/**
         * @param {?} width
         * @return {?}
         */
        width => `${width}px`)));
    }
    /**
     * @param {?} showEmpty
     * @return {?}
     */
    setShowEmpty(showEmpty) {
        this.showEmpty$.next(showEmpty);
    }
    /**
     * @param {?} noResult
     * @return {?}
     */
    setNoResult(noResult) {
        this.noResult$.next(noResult);
    }
    /**
     * @param {?} scrollX
     * @param {?} scrollY
     * @return {?}
     */
    setScroll(scrollX, scrollY) {
        /** @type {?} */
        const enableAutoMeasure = !!(scrollX || scrollY);
        if (!enableAutoMeasure) {
            this.setListOfAutoWidth([]);
        }
        this.enableAutoMeasure$.next(enableAutoMeasure);
    }
}
NzTableStyleService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NzTableStyleService.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    NzTableStyleService.prototype.theadTemplate$;
    /** @type {?} */
    NzTableStyleService.prototype.hasFixLeft$;
    /** @type {?} */
    NzTableStyleService.prototype.hasFixRight$;
    /** @type {?} */
    NzTableStyleService.prototype.hostWidth$;
    /** @type {?} */
    NzTableStyleService.prototype.columnCount$;
    /** @type {?} */
    NzTableStyleService.prototype.showEmpty$;
    /** @type {?} */
    NzTableStyleService.prototype.noResult$;
    /**
     * @type {?}
     * @private
     */
    NzTableStyleService.prototype.listOfThWidthConfigPx$;
    /**
     * @type {?}
     * @private
     */
    NzTableStyleService.prototype.tableWidthConfigPx$;
    /** @type {?} */
    NzTableStyleService.prototype.manualWidthConfigPx$;
    /**
     * @type {?}
     * @private
     */
    NzTableStyleService.prototype.listOfAutoWidthPx$;
    /** @type {?} */
    NzTableStyleService.prototype.listOfListOfThWidthPx$;
    /** @type {?} */
    NzTableStyleService.prototype.listOfMeasureColumn$;
    /** @type {?} */
    NzTableStyleService.prototype.listOfListOfThWidth$;
    /** @type {?} */
    NzTableStyleService.prototype.enableAutoMeasure$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc3R5bGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdGFibGUvIiwic291cmNlcyI6WyJzcmMvdGFibGUtc3R5bGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDNUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSXJDLE1BQU0sT0FBTyxtQkFBbUI7SUErRjlCO1FBOUZBLG1CQUFjLEdBQUcsSUFBSSxhQUFhLENBQXlCLENBQUMsQ0FBQyxDQUFDO1FBQzlELGdCQUFXLEdBQUcsSUFBSSxhQUFhLENBQVUsQ0FBQyxDQUFDLENBQUM7UUFDNUMsaUJBQVksR0FBRyxJQUFJLGFBQWEsQ0FBVSxDQUFDLENBQUMsQ0FBQztRQUM3QyxlQUFVLEdBQUcsSUFBSSxhQUFhLENBQVMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsaUJBQVksR0FBRyxJQUFJLGFBQWEsQ0FBUyxDQUFDLENBQUMsQ0FBQztRQUM1QyxlQUFVLEdBQUcsSUFBSSxhQUFhLENBQVUsQ0FBQyxDQUFDLENBQUM7UUFDM0MsY0FBUyxHQUFHLElBQUksYUFBYSxDQUE4QyxDQUFDLENBQUMsQ0FBQztRQUN0RSwyQkFBc0IsR0FBRyxJQUFJLGVBQWUsQ0FBdUIsRUFBRSxDQUFDLENBQUM7UUFDdkUsd0JBQW1CLEdBQUcsSUFBSSxlQUFlLENBQXVCLEVBQUUsQ0FBQyxDQUFDO1FBQzVFLHlCQUFvQixHQUFHLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDaEcsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUs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QUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7OztZQTlGRixVQUFVOzs7Ozs7SUFFVCw2Q0FBOEQ7O0lBQzlELDBDQUE0Qzs7SUFDNUMsMkNBQTZDOztJQUM3Qyx5Q0FBMEM7O0lBQzFDLDJDQUE0Qzs7SUFDNUMseUNBQTJDOztJQUMzQyx3Q0FBOEU7Ozs7O0lBQzlFLHFEQUErRTs7Ozs7SUFDL0Usa0RBQTRFOztJQUM1RSxtREFFRTs7Ozs7SUFDRixpREFBNEQ7O0lBQzVELHFEQW1CRTs7SUFDRixtREFBc0Q7O0lBQ3RELG1EQUF5Rzs7SUFDekcsaURBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIG1lcmdlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOelRoTWVhc3VyZURpcmVjdGl2ZSB9IGZyb20gJy4vY2VsbC90aC1tZWFzdXJlLmRpcmVjdGl2ZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOelRhYmxlU3R5bGVTZXJ2aWNlIHtcbiAgdGhlYWRUZW1wbGF0ZSQgPSBuZXcgUmVwbGF5U3ViamVjdDxUZW1wbGF0ZVJlZjxOelNhZmVBbnk+PigxKTtcbiAgaGFzRml4TGVmdCQgPSBuZXcgUmVwbGF5U3ViamVjdDxib29sZWFuPigxKTtcbiAgaGFzRml4UmlnaHQkID0gbmV3IFJlcGxheVN1YmplY3Q8Ym9vbGVhbj4oMSk7XG4gIGhvc3RXaWR0aCQgPSBuZXcgUmVwbGF5U3ViamVjdDxudW1iZXI+KDEpO1xuICBjb2x1bW5Db3VudCQgPSBuZXcgUmVwbGF5U3ViamVjdDxudW1iZXI+KDEpO1xuICBzaG93RW1wdHkkID0gbmV3IFJlcGxheVN1YmplY3Q8Ym9vbGVhbj4oMSk7XG4gIG5vUmVzdWx0JCA9IG5ldyBSZXBsYXlTdWJqZWN0PHN0cmluZyB8IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCB1bmRlZmluZWQ+KDEpO1xuICBwcml2YXRlIGxpc3RPZlRoV2lkdGhDb25maWdQeCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEFycmF5PHN0cmluZyB8IG51bGw+PihbXSk7XG4gIHByaXZhdGUgdGFibGVXaWR0aENvbmZpZ1B4JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QXJyYXk8c3RyaW5nIHwgbnVsbD4+KFtdKTtcbiAgbWFudWFsV2lkdGhDb25maWdQeCQgPSBjb21iaW5lTGF0ZXN0KFt0aGlzLnRhYmxlV2lkdGhDb25maWdQeCQsIHRoaXMubGlzdE9mVGhXaWR0aENvbmZpZ1B4JF0pLnBpcGUoXG4gICAgbWFwKChbd2lkdGhDb25maWcsIGxpc3RPZldpZHRoXSkgPT4gKHdpZHRoQ29uZmlnLmxlbmd0aCA/IHdpZHRoQ29uZmlnIDogbGlzdE9mV2lkdGgpKVxuICApO1xuICBwcml2YXRlIGxpc3RPZkF1dG9XaWR0aFB4JCA9IG5ldyBSZXBsYXlTdWJqZWN0PHN0cmluZ1tdPigxKTtcbiAgbGlzdE9mTGlzdE9mVGhXaWR0aFB4JCA9IG1lcmdlKFxuICAgIC8qKiBpbml0IHdpdGggbWFudWFsIHdpZHRoICoqL1xuICAgIHRoaXMubWFudWFsV2lkdGhDb25maWdQeCQsXG4gICAgY29tYmluZUxhdGVzdChbdGhpcy5saXN0T2ZBdXRvV2lkdGhQeCQsIHRoaXMubWFudWFsV2lkdGhDb25maWdQeCRdKS5waXBlKFxuICAgICAgbWFwKChbYXV0b1dpZHRoLCBtYW51YWxXaWR0aF0pID0+IHtcbiAgICAgICAgLyoqIHVzZSBhdXRvV2lkdGggdW50aWwgY29sdW1uIGxlbmd0aCBtYXRjaCAqKi9cbiAgICAgICAgaWYgKGF1dG9XaWR0aC5sZW5ndGggPT09IG1hbnVhbFdpZHRoLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBhdXRvV2lkdGgubWFwKCh3aWR0aCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmICh3aWR0aCA9PT0gJzBweCcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG1hbnVhbFdpZHRoW2luZGV4XSB8fCBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG1hbnVhbFdpZHRoW2luZGV4XSB8fCB3aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbWFudWFsV2lkdGg7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKVxuICApO1xuICBsaXN0T2ZNZWFzdXJlQ29sdW1uJCA9IG5ldyBSZXBsYXlTdWJqZWN0PHN0cmluZ1tdPigxKTtcbiAgbGlzdE9mTGlzdE9mVGhXaWR0aCQgPSB0aGlzLmxpc3RPZkF1dG9XaWR0aFB4JC5waXBlKG1hcChsaXN0ID0+IGxpc3QubWFwKHdpZHRoID0+IHBhcnNlSW50KHdpZHRoLCAxMCkpKSk7XG4gIGVuYWJsZUF1dG9NZWFzdXJlJCA9IG5ldyBSZXBsYXlTdWJqZWN0PGJvb2xlYW4+KDEpO1xuXG4gIHNldFRoZWFkVGVtcGxhdGUodGVtcGxhdGU6IFRlbXBsYXRlUmVmPE56U2FmZUFueT4pOiB2b2lkIHtcbiAgICB0aGlzLnRoZWFkVGVtcGxhdGUkLm5leHQodGVtcGxhdGUpO1xuICB9XG5cbiAgc2V0SGFzRml4TGVmdChoYXNGaXhMZWZ0OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5oYXNGaXhMZWZ0JC5uZXh0KGhhc0ZpeExlZnQpO1xuICB9XG5cbiAgc2V0SGFzRml4UmlnaHQoaGFzRml4UmlnaHQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmhhc0ZpeFJpZ2h0JC5uZXh0KGhhc0ZpeFJpZ2h0KTtcbiAgfVxuXG4gIHNldFRhYmxlV2lkdGhDb25maWcod2lkdGhDb25maWc6IEFycmF5PHN0cmluZyB8IG51bGw+KTogdm9pZCB7XG4gICAgdGhpcy50YWJsZVdpZHRoQ29uZmlnUHgkLm5leHQod2lkdGhDb25maWcpO1xuICB9XG5cbiAgc2V0TGlzdE9mVGgobGlzdE9mVGg6IE56VGhNZWFzdXJlRGlyZWN0aXZlW10pOiB2b2lkIHtcbiAgICBsZXQgY29sdW1uQ291bnQgPSAwO1xuICAgIGxpc3RPZlRoLmZvckVhY2godGggPT4ge1xuICAgICAgY29sdW1uQ291bnQgKz0gKHRoLmNvbHNwYW4gJiYgK3RoLmNvbHNwYW4pIHx8ICh0aC5jb2xTcGFuICYmICt0aC5jb2xTcGFuKSB8fCAxO1xuICAgIH0pO1xuICAgIGNvbnN0IGxpc3RPZlRoUHggPSBsaXN0T2ZUaC5tYXAoaXRlbSA9PiBpdGVtLm56V2lkdGgpO1xuICAgIHRoaXMuY29sdW1uQ291bnQkLm5leHQoY29sdW1uQ291bnQpO1xuICAgIHRoaXMubGlzdE9mVGhXaWR0aENvbmZpZ1B4JC5uZXh0KGxpc3RPZlRoUHgpO1xuICB9XG5cbiAgc2V0TGlzdE9mTWVhc3VyZUNvbHVtbihsaXN0T2ZUaDogTnpUaE1lYXN1cmVEaXJlY3RpdmVbXSk6IHZvaWQge1xuICAgIGNvbnN0IGxpc3RPZktleXM6IHN0cmluZ1tdID0gW107XG4gICAgbGlzdE9mVGguZm9yRWFjaCh0aCA9PiB7XG4gICAgICBjb25zdCBsZW5ndGggPSAodGguY29sc3BhbiAmJiArdGguY29sc3BhbikgfHwgKHRoLmNvbFNwYW4gJiYgK3RoLmNvbFNwYW4pIHx8IDE7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxpc3RPZktleXMucHVzaChgbWVhc3VyZV9rZXlfJHtpfWApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMubGlzdE9mTWVhc3VyZUNvbHVtbiQubmV4dChsaXN0T2ZLZXlzKTtcbiAgfVxuXG4gIHNldExpc3RPZkF1dG9XaWR0aChsaXN0T2ZBdXRvV2lkdGg6IG51bWJlcltdKTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZBdXRvV2lkdGhQeCQubmV4dChsaXN0T2ZBdXRvV2lkdGgubWFwKHdpZHRoID0+IGAke3dpZHRofXB4YCkpO1xuICB9XG5cbiAgc2V0U2hvd0VtcHR5KHNob3dFbXB0eTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuc2hvd0VtcHR5JC5uZXh0KHNob3dFbXB0eSk7XG4gIH1cblxuICBzZXROb1Jlc3VsdChub1Jlc3VsdDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IHVuZGVmaW5lZCk6IHZvaWQge1xuICAgIHRoaXMubm9SZXN1bHQkLm5leHQobm9SZXN1bHQpO1xuICB9XG5cbiAgc2V0U2Nyb2xsKHNjcm9sbFg6IHN0cmluZyB8IG51bGwsIHNjcm9sbFk6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcbiAgICBjb25zdCBlbmFibGVBdXRvTWVhc3VyZSA9ICEhKHNjcm9sbFggfHwgc2Nyb2xsWSk7XG4gICAgaWYgKCFlbmFibGVBdXRvTWVhc3VyZSkge1xuICAgICAgdGhpcy5zZXRMaXN0T2ZBdXRvV2lkdGgoW10pO1xuICAgIH1cbiAgICB0aGlzLmVuYWJsZUF1dG9NZWFzdXJlJC5uZXh0KGVuYWJsZUF1dG9NZWFzdXJlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge31cbn1cbiJdfQ==