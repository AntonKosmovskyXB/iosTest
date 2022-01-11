/**
 * @fileoverview added by tsickle
 * Generated from: src/table/tr-measure.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/* tslint:disable:component-selector */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgZone, Output, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { NzResizeObserver } from 'ng-zorro-antd/core/resize-observers';
import { combineLatest, Subject } from 'rxjs';
import { debounceTime, map, startWith, switchMap, takeUntil } from 'rxjs/operators';
export class NzTrMeasureComponent {
    /**
     * @param {?} nzResizeObserver
     * @param {?} ngZone
     */
    constructor(nzResizeObserver, ngZone) {
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
    trackByFunc(_, key) {
        return key;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.listOfTdElement.changes
            .pipe(startWith(this.listOfTdElement))
            .pipe(switchMap((/**
         * @param {?} list
         * @return {?}
         */
        list => {
            return (/** @type {?} */ (combineLatest(list.toArray().map((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                return this.nzResizeObserver.observe(item).pipe(map((/**
                 * @param {?} __0
                 * @return {?}
                 */
                ([entry]) => {
                    const { width } = entry.target.getBoundingClientRect();
                    return Math.floor(width);
                })));
            })))));
        })), debounceTime(16), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.ngZone.run((/**
             * @return {?}
             */
            () => {
                this.listOfAutoWidth.next(data);
            }));
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTrMeasureComponent.decorators = [
    { type: Component, args: [{
                selector: 'tr[nz-table-measure-row]',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <td
      #tdElement
      class="nz-disable-td"
      style="padding: 0px; border: 0px; height: 0px;"
      *ngFor="let th of listOfMeasureColumn; trackBy: trackByFunc"
    ></td>
  `,
                host: {
                    '[class.ant-table-measure-now]': 'true'
                }
            }] }
];
/** @nocollapse */
NzTrMeasureComponent.ctorParameters = () => [
    { type: NzResizeObserver },
    { type: NgZone }
];
NzTrMeasureComponent.propDecorators = {
    listOfMeasureColumn: [{ type: Input }],
    listOfAutoWidth: [{ type: Output }],
    listOfTdElement: [{ type: ViewChildren, args: ['tdElement',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHItbWVhc3VyZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RhYmxlLyIsInNvdXJjZXMiOlsic3JjL3RhYmxlL3RyLW1lYXN1cmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFNQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixNQUFNLEVBQ04sU0FBUyxFQUNULFlBQVksRUFDWixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQW1CcEYsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7SUFLL0IsWUFBb0IsZ0JBQWtDLEVBQVUsTUFBYztRQUExRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUpyRSx3QkFBbUIsR0FBYSxFQUFFLENBQUM7UUFDekIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBWSxDQUFDO1FBRTFELGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBQ2dELENBQUM7Ozs7OztJQUNsRixXQUFXLENBQUMsQ0FBUyxFQUFFLEdBQVc7UUFDaEMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7O0lBQ0QsZUFBZTtRQUNiLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTzthQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUNyQyxJQUFJLENBQ0gsU0FBUzs7OztRQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2YsT0FBTyxtQkFBQSxhQUFhLENBQ2xCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHOzs7O1lBQUMsQ0FBQyxJQUFnQixFQUFFLEVBQUU7Z0JBQ3RDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQzdDLEdBQUc7Ozs7Z0JBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUU7MEJBQ1IsRUFBRSxLQUFLLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFO29CQUN0RCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNCLENBQUMsRUFBQyxDQUNILENBQUM7WUFDSixDQUFDLEVBQUMsQ0FDSCxFQUF3QixDQUFDO1FBQzVCLENBQUMsRUFBQyxFQUNGLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFDaEIsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDekI7YUFDQSxTQUFTOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBQ0QsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7WUF0REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFOzs7Ozs7O0dBT1Q7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLCtCQUErQixFQUFFLE1BQU07aUJBQ3hDO2FBQ0Y7Ozs7WUFwQlEsZ0JBQWdCO1lBUHZCLE1BQU07OztrQ0E2QkwsS0FBSzs4QkFDTCxNQUFNOzhCQUNOLFlBQVksU0FBQyxXQUFXOzs7O0lBRnpCLG1EQUE0Qzs7SUFDNUMsK0NBQWtFOztJQUNsRSwrQ0FBbUU7Ozs7O0lBQ25FLHdDQUFpQzs7Ozs7SUFDckIsZ0RBQTBDOzs7OztJQUFFLHNDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG4vKiB0c2xpbnQ6ZGlzYWJsZTpjb21wb25lbnQtc2VsZWN0b3IgKi9cblxuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGRyZW4sXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpSZXNpemVPYnNlcnZlciB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9yZXNpemUtb2JzZXJ2ZXJzJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgbWFwLCBzdGFydFdpdGgsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cltuei10YWJsZS1tZWFzdXJlLXJvd10nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHRkXG4gICAgICAjdGRFbGVtZW50XG4gICAgICBjbGFzcz1cIm56LWRpc2FibGUtdGRcIlxuICAgICAgc3R5bGU9XCJwYWRkaW5nOiAwcHg7IGJvcmRlcjogMHB4OyBoZWlnaHQ6IDBweDtcIlxuICAgICAgKm5nRm9yPVwibGV0IHRoIG9mIGxpc3RPZk1lYXN1cmVDb2x1bW47IHRyYWNrQnk6IHRyYWNrQnlGdW5jXCJcbiAgICA+PC90ZD5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXRhYmxlLW1lYXN1cmUtbm93XSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56VHJNZWFzdXJlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgbGlzdE9mTWVhc3VyZUNvbHVtbjogc3RyaW5nW10gPSBbXTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGxpc3RPZkF1dG9XaWR0aCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyW10+KCk7XG4gIEBWaWV3Q2hpbGRyZW4oJ3RkRWxlbWVudCcpIGxpc3RPZlRkRWxlbWVudCE6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbnpSZXNpemVPYnNlcnZlcjogTnpSZXNpemVPYnNlcnZlciwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge31cbiAgdHJhY2tCeUZ1bmMoXzogbnVtYmVyLCBrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGtleTtcbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZUZEVsZW1lbnQuY2hhbmdlc1xuICAgICAgLnBpcGUoc3RhcnRXaXRoKHRoaXMubGlzdE9mVGRFbGVtZW50KSlcbiAgICAgIC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAobGlzdCA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoXG4gICAgICAgICAgICBsaXN0LnRvQXJyYXkoKS5tYXAoKGl0ZW06IEVsZW1lbnRSZWYpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubnpSZXNpemVPYnNlcnZlci5vYnNlcnZlKGl0ZW0pLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKChbZW50cnldKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB7IHdpZHRoIH0gPSBlbnRyeS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih3aWR0aCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKSBhcyBPYnNlcnZhYmxlPG51bWJlcltdPjtcbiAgICAgICAgfSksXG4gICAgICAgIGRlYm91bmNlVGltZSgxNiksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmxpc3RPZkF1dG9XaWR0aC5uZXh0KGRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19