/**
 * @fileoverview added by tsickle
 * Generated from: src/table/tr-measure.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __read } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/* tslint:disable:component-selector */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgZone, Output, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { NzResizeObserver } from 'ng-zorro-antd/core/resize-observers';
import { combineLatest, Subject } from 'rxjs';
import { debounceTime, map, startWith, switchMap, takeUntil } from 'rxjs/operators';
var NzTrMeasureComponent = /** @class */ (function () {
    function NzTrMeasureComponent(nzResizeObserver, ngZone) {
        this.nzResizeObserver = nzResizeObserver;
        this.ngZone = ngZone;
        this.listOfMeasureColumn = [];
        this.listOfAutoWidth = new EventEmitter();
        this.destroy$ = new Subject();
    }
    /**
     * @param {?} _
     * @param {?} key
     * @return {?}
     */
    NzTrMeasureComponent.prototype.trackByFunc = /**
     * @param {?} _
     * @param {?} key
     * @return {?}
     */
    function (_, key) {
        return key;
    };
    /**
     * @return {?}
     */
    NzTrMeasureComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.listOfTdElement.changes
            .pipe(startWith(this.listOfTdElement))
            .pipe(switchMap((/**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            return (/** @type {?} */ (combineLatest(list.toArray().map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return _this.nzResizeObserver.observe(item).pipe(map((/**
                 * @param {?} __0
                 * @return {?}
                 */
                function (_a) {
                    var _b = __read(_a, 1), entry = _b[0];
                    var width = entry.target.getBoundingClientRect().width;
                    return Math.floor(width);
                })));
            })))));
        })), debounceTime(16), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.listOfAutoWidth.next(data);
            }));
        }));
    };
    /**
     * @return {?}
     */
    NzTrMeasureComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzTrMeasureComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tr[nz-table-measure-row]',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "\n    <td\n      #tdElement\n      class=\"nz-disable-td\"\n      style=\"padding: 0px; border: 0px; height: 0px;\"\n      *ngFor=\"let th of listOfMeasureColumn; trackBy: trackByFunc\"\n    ></td>\n  ",
                    host: {
                        '[class.ant-table-measure-now]': 'true'
                    }
                }] }
    ];
    /** @nocollapse */
    NzTrMeasureComponent.ctorParameters = function () { return [
        { type: NzResizeObserver },
        { type: NgZone }
    ]; };
    NzTrMeasureComponent.propDecorators = {
        listOfMeasureColumn: [{ type: Input }],
        listOfAutoWidth: [{ type: Output }],
        listOfTdElement: [{ type: ViewChildren, args: ['tdElement',] }]
    };
    return NzTrMeasureComponent;
}());
export { NzTrMeasureComponent };
if (false) {
    /** @type {?} */
    NzTrMeasureComponent.prototype.listOfMeasureColumn;
    /** @type {?} */
    NzTrMeasureComponent.prototype.listOfAutoWidth;
    /** @type {?} */
    NzTrMeasureComponent.prototype.listOfTdElement;
    /**
     * @type {?}
     * @private
     */
    NzTrMeasureComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzTrMeasureComponent.prototype.nzResizeObserver;
    /**
     * @type {?}
     * @private
     */
    NzTrMeasureComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHItbWVhc3VyZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RhYmxlLyIsInNvdXJjZXMiOlsic3JjL3RhYmxlL3RyLW1lYXN1cmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBRU4sTUFBTSxFQUNOLFNBQVMsRUFDVCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEY7SUFzQkUsOEJBQW9CLGdCQUFrQyxFQUFVLE1BQWM7UUFBMUQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKckUsd0JBQW1CLEdBQWEsRUFBRSxDQUFDO1FBQ3pCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVksQ0FBQztRQUUxRCxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUNnRCxDQUFDOzs7Ozs7SUFDbEYsMENBQVc7Ozs7O0lBQVgsVUFBWSxDQUFTLEVBQUUsR0FBVztRQUNoQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7SUFDRCw4Q0FBZTs7O0lBQWY7UUFBQSxpQkF3QkM7UUF2QkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPO2FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ3JDLElBQUksQ0FDSCxTQUFTOzs7O1FBQUMsVUFBQSxJQUFJO1lBQ1osT0FBTyxtQkFBQSxhQUFhLENBQ2xCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQyxJQUFnQjtnQkFDbEMsT0FBTyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDN0MsR0FBRzs7OztnQkFBQyxVQUFDLEVBQU87d0JBQVAsa0JBQU8sRUFBTixhQUFLO29CQUNELElBQUEsa0RBQUs7b0JBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQixDQUFDLEVBQUMsQ0FDSCxDQUFDO1lBQ0osQ0FBQyxFQUFDLENBQ0gsRUFBd0IsQ0FBQztRQUM1QixDQUFDLEVBQUMsRUFDRixZQUFZLENBQUMsRUFBRSxDQUFDLEVBQ2hCLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3pCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUEsSUFBSTtZQUNiLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRzs7O1lBQUM7Z0JBQ2QsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFDRCwwQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Z0JBdERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFFBQVEsRUFBRSwyTUFPVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osK0JBQStCLEVBQUUsTUFBTTtxQkFDeEM7aUJBQ0Y7Ozs7Z0JBcEJRLGdCQUFnQjtnQkFQdkIsTUFBTTs7O3NDQTZCTCxLQUFLO2tDQUNMLE1BQU07a0NBQ04sWUFBWSxTQUFDLFdBQVc7O0lBbUMzQiwyQkFBQztDQUFBLEFBdkRELElBdURDO1NBdENZLG9CQUFvQjs7O0lBQy9CLG1EQUE0Qzs7SUFDNUMsK0NBQWtFOztJQUNsRSwrQ0FBbUU7Ozs7O0lBQ25FLHdDQUFpQzs7Ozs7SUFDckIsZ0RBQTBDOzs7OztJQUFFLHNDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG4vKiB0c2xpbnQ6ZGlzYWJsZTpjb21wb25lbnQtc2VsZWN0b3IgKi9cblxuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGRyZW4sXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpSZXNpemVPYnNlcnZlciB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9yZXNpemUtb2JzZXJ2ZXJzJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgbWFwLCBzdGFydFdpdGgsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cltuei10YWJsZS1tZWFzdXJlLXJvd10nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHRkXG4gICAgICAjdGRFbGVtZW50XG4gICAgICBjbGFzcz1cIm56LWRpc2FibGUtdGRcIlxuICAgICAgc3R5bGU9XCJwYWRkaW5nOiAwcHg7IGJvcmRlcjogMHB4OyBoZWlnaHQ6IDBweDtcIlxuICAgICAgKm5nRm9yPVwibGV0IHRoIG9mIGxpc3RPZk1lYXN1cmVDb2x1bW47IHRyYWNrQnk6IHRyYWNrQnlGdW5jXCJcbiAgICA+PC90ZD5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXRhYmxlLW1lYXN1cmUtbm93XSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56VHJNZWFzdXJlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgbGlzdE9mTWVhc3VyZUNvbHVtbjogc3RyaW5nW10gPSBbXTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGxpc3RPZkF1dG9XaWR0aCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyW10+KCk7XG4gIEBWaWV3Q2hpbGRyZW4oJ3RkRWxlbWVudCcpIGxpc3RPZlRkRWxlbWVudCE6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbnpSZXNpemVPYnNlcnZlcjogTnpSZXNpemVPYnNlcnZlciwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge31cbiAgdHJhY2tCeUZ1bmMoXzogbnVtYmVyLCBrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGtleTtcbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZUZEVsZW1lbnQuY2hhbmdlc1xuICAgICAgLnBpcGUoc3RhcnRXaXRoKHRoaXMubGlzdE9mVGRFbGVtZW50KSlcbiAgICAgIC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAobGlzdCA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoXG4gICAgICAgICAgICBsaXN0LnRvQXJyYXkoKS5tYXAoKGl0ZW06IEVsZW1lbnRSZWYpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubnpSZXNpemVPYnNlcnZlci5vYnNlcnZlKGl0ZW0pLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKChbZW50cnldKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB7IHdpZHRoIH0gPSBlbnRyeS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih3aWR0aCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKSBhcyBPYnNlcnZhYmxlPG51bWJlcltdPjtcbiAgICAgICAgfSksXG4gICAgICAgIGRlYm91bmNlVGltZSgxNiksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmxpc3RPZkF1dG9XaWR0aC5uZXh0KGRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19