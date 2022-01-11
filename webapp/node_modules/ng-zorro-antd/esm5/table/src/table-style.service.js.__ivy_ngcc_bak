/**
 * @fileoverview added by tsickle
 * Generated from: src/table-style.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __read } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, merge, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
var NzTableStyleService = /** @class */ (function () {
    function NzTableStyleService() {
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
        function (_a) {
            var _b = __read(_a, 2), widthConfig = _b[0], listOfWidth = _b[1];
            return (widthConfig.length ? widthConfig : listOfWidth);
        })));
        this.listOfAutoWidthPx$ = new ReplaySubject(1);
        this.listOfListOfThWidthPx$ = merge(
        /** init with manual width **/
        this.manualWidthConfigPx$, combineLatest([this.listOfAutoWidthPx$, this.manualWidthConfigPx$]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), autoWidth = _b[0], manualWidth = _b[1];
            /** use autoWidth until column length match **/
            if (autoWidth.length === manualWidth.length) {
                return autoWidth.map((/**
                 * @param {?} width
                 * @param {?} index
                 * @return {?}
                 */
                function (width, index) {
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
        function (list) { return list.map((/**
         * @param {?} width
         * @return {?}
         */
        function (width) { return parseInt(width, 10); })); })));
        this.enableAutoMeasure$ = new ReplaySubject(1);
    }
    /**
     * @param {?} template
     * @return {?}
     */
    NzTableStyleService.prototype.setTheadTemplate = /**
     * @param {?} template
     * @return {?}
     */
    function (template) {
        this.theadTemplate$.next(template);
    };
    /**
     * @param {?} hasFixLeft
     * @return {?}
     */
    NzTableStyleService.prototype.setHasFixLeft = /**
     * @param {?} hasFixLeft
     * @return {?}
     */
    function (hasFixLeft) {
        this.hasFixLeft$.next(hasFixLeft);
    };
    /**
     * @param {?} hasFixRight
     * @return {?}
     */
    NzTableStyleService.prototype.setHasFixRight = /**
     * @param {?} hasFixRight
     * @return {?}
     */
    function (hasFixRight) {
        this.hasFixRight$.next(hasFixRight);
    };
    /**
     * @param {?} widthConfig
     * @return {?}
     */
    NzTableStyleService.prototype.setTableWidthConfig = /**
     * @param {?} widthConfig
     * @return {?}
     */
    function (widthConfig) {
        this.tableWidthConfigPx$.next(widthConfig);
    };
    /**
     * @param {?} listOfTh
     * @return {?}
     */
    NzTableStyleService.prototype.setListOfTh = /**
     * @param {?} listOfTh
     * @return {?}
     */
    function (listOfTh) {
        /** @type {?} */
        var columnCount = 0;
        listOfTh.forEach((/**
         * @param {?} th
         * @return {?}
         */
        function (th) {
            columnCount += (th.colspan && +th.colspan) || (th.colSpan && +th.colSpan) || 1;
        }));
        /** @type {?} */
        var listOfThPx = listOfTh.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.nzWidth; }));
        this.columnCount$.next(columnCount);
        this.listOfThWidthConfigPx$.next(listOfThPx);
    };
    /**
     * @param {?} listOfTh
     * @return {?}
     */
    NzTableStyleService.prototype.setListOfMeasureColumn = /**
     * @param {?} listOfTh
     * @return {?}
     */
    function (listOfTh) {
        /** @type {?} */
        var listOfKeys = [];
        listOfTh.forEach((/**
         * @param {?} th
         * @return {?}
         */
        function (th) {
            /** @type {?} */
            var length = (th.colspan && +th.colspan) || (th.colSpan && +th.colSpan) || 1;
            for (var i = 0; i < length; i++) {
                listOfKeys.push("measure_key_" + i);
            }
        }));
        this.listOfMeasureColumn$.next(listOfKeys);
    };
    /**
     * @param {?} listOfAutoWidth
     * @return {?}
     */
    NzTableStyleService.prototype.setListOfAutoWidth = /**
     * @param {?} listOfAutoWidth
     * @return {?}
     */
    function (listOfAutoWidth) {
        this.listOfAutoWidthPx$.next(listOfAutoWidth.map((/**
         * @param {?} width
         * @return {?}
         */
        function (width) { return width + "px"; })));
    };
    /**
     * @param {?} showEmpty
     * @return {?}
     */
    NzTableStyleService.prototype.setShowEmpty = /**
     * @param {?} showEmpty
     * @return {?}
     */
    function (showEmpty) {
        this.showEmpty$.next(showEmpty);
    };
    /**
     * @param {?} noResult
     * @return {?}
     */
    NzTableStyleService.prototype.setNoResult = /**
     * @param {?} noResult
     * @return {?}
     */
    function (noResult) {
        this.noResult$.next(noResult);
    };
    /**
     * @param {?} scrollX
     * @param {?} scrollY
     * @return {?}
     */
    NzTableStyleService.prototype.setScroll = /**
     * @param {?} scrollX
     * @param {?} scrollY
     * @return {?}
     */
    function (scrollX, scrollY) {
        /** @type {?} */
        var enableAutoMeasure = !!(scrollX || scrollY);
        if (!enableAutoMeasure) {
            this.setListOfAutoWidth([]);
        }
        this.enableAutoMeasure$.next(enableAutoMeasure);
    };
    NzTableStyleService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NzTableStyleService.ctorParameters = function () { return []; };
    return NzTableStyleService;
}());
export { NzTableStyleService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc3R5bGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdGFibGUvIiwic291cmNlcyI6WyJzcmMvdGFibGUtc3R5bGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdyQztJQWdHRTtRQTlGQSxtQkFBYyxHQUFHLElBQUksYUFBYSxDQUF5QixDQUFDLENBQUMsQ0FBQztRQUM5RCxnQkFBVyxHQUFHLElBQUksYUFBYSxDQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzVDLGlCQUFZLEdBQUcsSUFBSSxhQUFhLENBQVUsQ0FBQyxDQUFDLENBQUM7UUFDN0MsZUFBVSxHQUFHLElBQUksYUFBYSxDQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzFDLGlCQUFZLEdBQUcsSUFBSSxhQUFhLENBQVMsQ0FBQyxDQUFDLENBQUM7UUFDNUMsZUFBVSxHQUFHLElBQUksYUFBYSxDQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzNDLGNBQVMsR0FBRyxJQUFJLGFBQWEsQ0FBOEMsQ0FBQyxDQUFDLENBQUM7UUFDdEUsMkJBQXNCLEdBQUcsSUFBSSxlQUFlLENBQXVCLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZFLHdCQUFtQixHQUFHLElBQUksZUFBZSxDQUF1QixFQUFFLENBQUMsQ0FBQztRQUM1RSx5QkFBb0IsR0FBRyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ2hHLEdBQUc7Ozs7UUFBQyxVQUFDLEVBQTBCO2dCQUExQixrQkFBMEIsRUFBekIsbUJBQVcs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QVUsT0FBc0IsRUFBRSxPQUFzQjs7WUFDaEQsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQztRQUNoRCxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7O2dCQTlGRixVQUFVOzs7O0lBaUdYLDBCQUFDO0NBQUEsQUFqR0QsSUFpR0M7U0FoR1ksbUJBQW1COzs7SUFDOUIsNkNBQThEOztJQUM5RCwwQ0FBNEM7O0lBQzVDLDJDQUE2Qzs7SUFDN0MseUNBQTBDOztJQUMxQywyQ0FBNEM7O0lBQzVDLHlDQUEyQzs7SUFDM0Msd0NBQThFOzs7OztJQUM5RSxxREFBK0U7Ozs7O0lBQy9FLGtEQUE0RTs7SUFDNUUsbURBRUU7Ozs7O0lBQ0YsaURBQTREOztJQUM1RCxxREFtQkU7O0lBQ0YsbURBQXNEOztJQUN0RCxtREFBeUc7O0lBQ3pHLGlEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCBtZXJnZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnpUaE1lYXN1cmVEaXJlY3RpdmUgfSBmcm9tICcuL2NlbGwvdGgtbWVhc3VyZS5kaXJlY3RpdmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTnpUYWJsZVN0eWxlU2VydmljZSB7XG4gIHRoZWFkVGVtcGxhdGUkID0gbmV3IFJlcGxheVN1YmplY3Q8VGVtcGxhdGVSZWY8TnpTYWZlQW55Pj4oMSk7XG4gIGhhc0ZpeExlZnQkID0gbmV3IFJlcGxheVN1YmplY3Q8Ym9vbGVhbj4oMSk7XG4gIGhhc0ZpeFJpZ2h0JCA9IG5ldyBSZXBsYXlTdWJqZWN0PGJvb2xlYW4+KDEpO1xuICBob3N0V2lkdGgkID0gbmV3IFJlcGxheVN1YmplY3Q8bnVtYmVyPigxKTtcbiAgY29sdW1uQ291bnQkID0gbmV3IFJlcGxheVN1YmplY3Q8bnVtYmVyPigxKTtcbiAgc2hvd0VtcHR5JCA9IG5ldyBSZXBsYXlTdWJqZWN0PGJvb2xlYW4+KDEpO1xuICBub1Jlc3VsdCQgPSBuZXcgUmVwbGF5U3ViamVjdDxzdHJpbmcgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgdW5kZWZpbmVkPigxKTtcbiAgcHJpdmF0ZSBsaXN0T2ZUaFdpZHRoQ29uZmlnUHgkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBcnJheTxzdHJpbmcgfCBudWxsPj4oW10pO1xuICBwcml2YXRlIHRhYmxlV2lkdGhDb25maWdQeCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEFycmF5PHN0cmluZyB8IG51bGw+PihbXSk7XG4gIG1hbnVhbFdpZHRoQ29uZmlnUHgkID0gY29tYmluZUxhdGVzdChbdGhpcy50YWJsZVdpZHRoQ29uZmlnUHgkLCB0aGlzLmxpc3RPZlRoV2lkdGhDb25maWdQeCRdKS5waXBlKFxuICAgIG1hcCgoW3dpZHRoQ29uZmlnLCBsaXN0T2ZXaWR0aF0pID0+ICh3aWR0aENvbmZpZy5sZW5ndGggPyB3aWR0aENvbmZpZyA6IGxpc3RPZldpZHRoKSlcbiAgKTtcbiAgcHJpdmF0ZSBsaXN0T2ZBdXRvV2lkdGhQeCQgPSBuZXcgUmVwbGF5U3ViamVjdDxzdHJpbmdbXT4oMSk7XG4gIGxpc3RPZkxpc3RPZlRoV2lkdGhQeCQgPSBtZXJnZShcbiAgICAvKiogaW5pdCB3aXRoIG1hbnVhbCB3aWR0aCAqKi9cbiAgICB0aGlzLm1hbnVhbFdpZHRoQ29uZmlnUHgkLFxuICAgIGNvbWJpbmVMYXRlc3QoW3RoaXMubGlzdE9mQXV0b1dpZHRoUHgkLCB0aGlzLm1hbnVhbFdpZHRoQ29uZmlnUHgkXSkucGlwZShcbiAgICAgIG1hcCgoW2F1dG9XaWR0aCwgbWFudWFsV2lkdGhdKSA9PiB7XG4gICAgICAgIC8qKiB1c2UgYXV0b1dpZHRoIHVudGlsIGNvbHVtbiBsZW5ndGggbWF0Y2ggKiovXG4gICAgICAgIGlmIChhdXRvV2lkdGgubGVuZ3RoID09PSBtYW51YWxXaWR0aC5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gYXV0b1dpZHRoLm1hcCgod2lkdGgsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAod2lkdGggPT09ICcwcHgnKSB7XG4gICAgICAgICAgICAgIHJldHVybiBtYW51YWxXaWR0aFtpbmRleF0gfHwgbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBtYW51YWxXaWR0aFtpbmRleF0gfHwgd2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG1hbnVhbFdpZHRoO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIClcbiAgKTtcbiAgbGlzdE9mTWVhc3VyZUNvbHVtbiQgPSBuZXcgUmVwbGF5U3ViamVjdDxzdHJpbmdbXT4oMSk7XG4gIGxpc3RPZkxpc3RPZlRoV2lkdGgkID0gdGhpcy5saXN0T2ZBdXRvV2lkdGhQeCQucGlwZShtYXAobGlzdCA9PiBsaXN0Lm1hcCh3aWR0aCA9PiBwYXJzZUludCh3aWR0aCwgMTApKSkpO1xuICBlbmFibGVBdXRvTWVhc3VyZSQgPSBuZXcgUmVwbGF5U3ViamVjdDxib29sZWFuPigxKTtcblxuICBzZXRUaGVhZFRlbXBsYXRlKHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+KTogdm9pZCB7XG4gICAgdGhpcy50aGVhZFRlbXBsYXRlJC5uZXh0KHRlbXBsYXRlKTtcbiAgfVxuXG4gIHNldEhhc0ZpeExlZnQoaGFzRml4TGVmdDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaGFzRml4TGVmdCQubmV4dChoYXNGaXhMZWZ0KTtcbiAgfVxuXG4gIHNldEhhc0ZpeFJpZ2h0KGhhc0ZpeFJpZ2h0OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5oYXNGaXhSaWdodCQubmV4dChoYXNGaXhSaWdodCk7XG4gIH1cblxuICBzZXRUYWJsZVdpZHRoQ29uZmlnKHdpZHRoQ29uZmlnOiBBcnJheTxzdHJpbmcgfCBudWxsPik6IHZvaWQge1xuICAgIHRoaXMudGFibGVXaWR0aENvbmZpZ1B4JC5uZXh0KHdpZHRoQ29uZmlnKTtcbiAgfVxuXG4gIHNldExpc3RPZlRoKGxpc3RPZlRoOiBOelRoTWVhc3VyZURpcmVjdGl2ZVtdKTogdm9pZCB7XG4gICAgbGV0IGNvbHVtbkNvdW50ID0gMDtcbiAgICBsaXN0T2ZUaC5mb3JFYWNoKHRoID0+IHtcbiAgICAgIGNvbHVtbkNvdW50ICs9ICh0aC5jb2xzcGFuICYmICt0aC5jb2xzcGFuKSB8fCAodGguY29sU3BhbiAmJiArdGguY29sU3BhbikgfHwgMTtcbiAgICB9KTtcbiAgICBjb25zdCBsaXN0T2ZUaFB4ID0gbGlzdE9mVGgubWFwKGl0ZW0gPT4gaXRlbS5ueldpZHRoKTtcbiAgICB0aGlzLmNvbHVtbkNvdW50JC5uZXh0KGNvbHVtbkNvdW50KTtcbiAgICB0aGlzLmxpc3RPZlRoV2lkdGhDb25maWdQeCQubmV4dChsaXN0T2ZUaFB4KTtcbiAgfVxuXG4gIHNldExpc3RPZk1lYXN1cmVDb2x1bW4obGlzdE9mVGg6IE56VGhNZWFzdXJlRGlyZWN0aXZlW10pOiB2b2lkIHtcbiAgICBjb25zdCBsaXN0T2ZLZXlzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGxpc3RPZlRoLmZvckVhY2godGggPT4ge1xuICAgICAgY29uc3QgbGVuZ3RoID0gKHRoLmNvbHNwYW4gJiYgK3RoLmNvbHNwYW4pIHx8ICh0aC5jb2xTcGFuICYmICt0aC5jb2xTcGFuKSB8fCAxO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBsaXN0T2ZLZXlzLnB1c2goYG1lYXN1cmVfa2V5XyR7aX1gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmxpc3RPZk1lYXN1cmVDb2x1bW4kLm5leHQobGlzdE9mS2V5cyk7XG4gIH1cblxuICBzZXRMaXN0T2ZBdXRvV2lkdGgobGlzdE9mQXV0b1dpZHRoOiBudW1iZXJbXSk6IHZvaWQge1xuICAgIHRoaXMubGlzdE9mQXV0b1dpZHRoUHgkLm5leHQobGlzdE9mQXV0b1dpZHRoLm1hcCh3aWR0aCA9PiBgJHt3aWR0aH1weGApKTtcbiAgfVxuXG4gIHNldFNob3dFbXB0eShzaG93RW1wdHk6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnNob3dFbXB0eSQubmV4dChzaG93RW1wdHkpO1xuICB9XG5cbiAgc2V0Tm9SZXN1bHQobm9SZXN1bHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCB1bmRlZmluZWQpOiB2b2lkIHtcbiAgICB0aGlzLm5vUmVzdWx0JC5uZXh0KG5vUmVzdWx0KTtcbiAgfVxuXG4gIHNldFNjcm9sbChzY3JvbGxYOiBzdHJpbmcgfCBudWxsLCBzY3JvbGxZOiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgY29uc3QgZW5hYmxlQXV0b01lYXN1cmUgPSAhIShzY3JvbGxYIHx8IHNjcm9sbFkpO1xuICAgIGlmICghZW5hYmxlQXV0b01lYXN1cmUpIHtcbiAgICAgIHRoaXMuc2V0TGlzdE9mQXV0b1dpZHRoKFtdKTtcbiAgICB9XG4gICAgdGhpcy5lbmFibGVBdXRvTWVhc3VyZSQubmV4dChlbmFibGVBdXRvTWVhc3VyZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHt9XG59XG4iXX0=