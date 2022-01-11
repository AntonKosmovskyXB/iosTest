/**
 * @fileoverview added by tsickle
 * Generated from: list-item-cell.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Input, NgZone, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { defer, merge, of, Subject } from 'rxjs';
import { switchMap, take, takeUntil } from 'rxjs/operators';
var NzListItemExtraComponent = /** @class */ (function () {
    function NzListItemExtraComponent() {
    }
    NzListItemExtraComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-list-item-extra, [nz-list-item-extra]',
                    exportAs: 'nzListItemExtra',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: " <ng-content></ng-content> ",
                    host: {
                        class: 'ant-list-item-extra'
                    }
                }] }
    ];
    /** @nocollapse */
    NzListItemExtraComponent.ctorParameters = function () { return []; };
    return NzListItemExtraComponent;
}());
export { NzListItemExtraComponent };
var NzListItemActionComponent = /** @class */ (function () {
    function NzListItemActionComponent() {
    }
    NzListItemActionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-list-item-action',
                    exportAs: 'nzListItemAction',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: " <ng-template><ng-content></ng-content></ng-template> "
                }] }
    ];
    /** @nocollapse */
    NzListItemActionComponent.ctorParameters = function () { return []; };
    NzListItemActionComponent.propDecorators = {
        templateRef: [{ type: ViewChild, args: [TemplateRef,] }]
    };
    return NzListItemActionComponent;
}());
export { NzListItemActionComponent };
if (false) {
    /** @type {?} */
    NzListItemActionComponent.prototype.templateRef;
}
var NzListItemActionsComponent = /** @class */ (function () {
    function NzListItemActionsComponent(ngZone, cdr) {
        var _this = this;
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.nzActions = [];
        this.actions = [];
        this.destroy$ = new Subject();
        this.inputActionChanges$ = new Subject();
        this.contentChildrenChanges$ = defer((/**
         * @return {?}
         */
        function () {
            if (_this.nzListItemActions) {
                return of(null);
            }
            return _this.ngZone.onStable.asObservable().pipe(take(1), switchMap((/**
             * @return {?}
             */
            function () { return _this.contentChildrenChanges$; })));
        }));
        merge(this.contentChildrenChanges$, this.inputActionChanges$)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            if (_this.nzActions.length) {
                _this.actions = _this.nzActions;
            }
            else {
                _this.actions = _this.nzListItemActions.map((/**
                 * @param {?} action
                 * @return {?}
                 */
                function (action) { return (/** @type {?} */ (action.templateRef)); }));
            }
            _this.cdr.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    NzListItemActionsComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.inputActionChanges$.next(null);
    };
    /**
     * @return {?}
     */
    NzListItemActionsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzListItemActionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ul[nz-list-item-actions]',
                    exportAs: 'nzListItemActions',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <li *ngFor=\"let i of actions; let last = last\">\n      <ng-template [ngTemplateOutlet]=\"i\"></ng-template>\n      <em *ngIf=\"!last\" class=\"ant-list-item-action-split\"></em>\n    </li>\n  ",
                    host: {
                        class: 'ant-list-item-action'
                    }
                }] }
    ];
    /** @nocollapse */
    NzListItemActionsComponent.ctorParameters = function () { return [
        { type: NgZone },
        { type: ChangeDetectorRef }
    ]; };
    NzListItemActionsComponent.propDecorators = {
        nzActions: [{ type: Input }],
        nzListItemActions: [{ type: ContentChildren, args: [NzListItemActionComponent,] }]
    };
    return NzListItemActionsComponent;
}());
export { NzListItemActionsComponent };
if (false) {
    /** @type {?} */
    NzListItemActionsComponent.prototype.nzActions;
    /** @type {?} */
    NzListItemActionsComponent.prototype.nzListItemActions;
    /** @type {?} */
    NzListItemActionsComponent.prototype.actions;
    /**
     * @type {?}
     * @private
     */
    NzListItemActionsComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzListItemActionsComponent.prototype.inputActionChanges$;
    /**
     * @type {?}
     * @private
     */
    NzListItemActionsComponent.prototype.contentChildrenChanges$;
    /**
     * @type {?}
     * @private
     */
    NzListItemActionsComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzListItemActionsComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLWNlbGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2xpc3QvIiwic291cmNlcyI6WyJsaXN0LWl0ZW0tY2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLEtBQUssRUFDTCxNQUFNLEVBR04sU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3RCxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RDtJQVVFO0lBQWUsQ0FBQzs7Z0JBVmpCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMENBQTBDO29CQUNwRCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsUUFBUSxFQUFFLDZCQUE2QjtvQkFDdkMsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSxxQkFBcUI7cUJBQzdCO2lCQUNGOzs7O0lBR0QsK0JBQUM7Q0FBQSxBQVhELElBV0M7U0FGWSx3QkFBd0I7QUFJckM7SUFRRTtJQUFlLENBQUM7O2dCQVJqQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSx3REFBd0Q7aUJBQ25FOzs7Ozs4QkFFRSxTQUFTLFNBQUMsV0FBVzs7SUFFeEIsZ0NBQUM7Q0FBQSxBQVRELElBU0M7U0FIWSx5QkFBeUI7OztJQUNwQyxnREFBd0Q7O0FBSTFEO0lBK0JFLG9DQUFvQixNQUFjLEVBQVUsR0FBc0I7UUFBbEUsaUJBV0M7UUFYbUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBaEJ6RCxjQUFTLEdBQTZCLEVBQUUsQ0FBQztRQUdsRCxZQUFPLEdBQTZCLEVBQUUsQ0FBQztRQUMvQixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN6Qix3QkFBbUIsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQzFDLDRCQUF1QixHQUFxQixLQUFLOzs7UUFBQztZQUN4RCxJQUFJLEtBQUksQ0FBQyxpQkFBaUIsRUFBRTtnQkFDMUIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDakI7WUFDRCxPQUFPLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDN0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLFNBQVM7OztZQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsdUJBQXVCLEVBQTVCLENBQTRCLEVBQUMsQ0FDOUMsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO1FBR0QsS0FBSyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUM7YUFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUzs7O1FBQUM7WUFDVCxJQUFJLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUN6QixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUM7YUFDL0I7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRzs7OztnQkFBQyxVQUFBLE1BQU0sV0FBSSxtQkFBQSxNQUFNLENBQUMsV0FBVyxFQUFDLEdBQUEsRUFBQyxDQUFDO2FBQzFFO1lBQ0QsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzQixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFRCxnREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxnREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Z0JBbkRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsUUFBUSxFQUFFLDBNQUtUO29CQUNELElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsc0JBQXNCO3FCQUM5QjtpQkFDRjs7OztnQkEvQ0MsTUFBTTtnQkFKTixpQkFBaUI7Ozs0QkFxRGhCLEtBQUs7b0NBQ0wsZUFBZSxTQUFDLHlCQUF5Qjs7SUFvQzVDLGlDQUFDO0NBQUEsQUFwREQsSUFvREM7U0F0Q1ksMEJBQTBCOzs7SUFDckMsK0NBQWtEOztJQUNsRCx1REFBcUc7O0lBRXJHLDZDQUF1Qzs7Ozs7SUFDdkMsOENBQWlDOzs7OztJQUNqQyx5REFBa0Q7Ozs7O0lBQ2xELDZEQVFHOzs7OztJQUVTLDRDQUFzQjs7Ozs7SUFBRSx5Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVmZXIsIG1lcmdlLCBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCB0YWtlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LWxpc3QtaXRlbS1leHRyYSwgW256LWxpc3QtaXRlbS1leHRyYV0nLFxuICBleHBvcnRBczogJ256TGlzdEl0ZW1FeHRyYScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FudC1saXN0LWl0ZW0tZXh0cmEnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpMaXN0SXRlbUV4dHJhQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1saXN0LWl0ZW0tYWN0aW9uJyxcbiAgZXhwb3J0QXM6ICduekxpc3RJdGVtQWN0aW9uJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgIDxuZy10ZW1wbGF0ZT48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT4gYFxufSlcbmV4cG9ydCBjbGFzcyBOekxpc3RJdGVtQWN0aW9uQ29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgdGVtcGxhdGVSZWY/OiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1bFtuei1saXN0LWl0ZW0tYWN0aW9uc10nLFxuICBleHBvcnRBczogJ256TGlzdEl0ZW1BY3Rpb25zJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGxpICpuZ0Zvcj1cImxldCBpIG9mIGFjdGlvbnM7IGxldCBsYXN0ID0gbGFzdFwiPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImlcIj48L25nLXRlbXBsYXRlPlxuICAgICAgPGVtICpuZ0lmPVwiIWxhc3RcIiBjbGFzcz1cImFudC1saXN0LWl0ZW0tYWN0aW9uLXNwbGl0XCI+PC9lbT5cbiAgICA8L2xpPlxuICBgLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhbnQtbGlzdC1pdGVtLWFjdGlvbidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekxpc3RJdGVtQWN0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgbnpBY3Rpb25zOiBBcnJheTxUZW1wbGF0ZVJlZjx2b2lkPj4gPSBbXTtcbiAgQENvbnRlbnRDaGlsZHJlbihOekxpc3RJdGVtQWN0aW9uQ29tcG9uZW50KSBuekxpc3RJdGVtQWN0aW9ucyE6IFF1ZXJ5TGlzdDxOekxpc3RJdGVtQWN0aW9uQ29tcG9uZW50PjtcblxuICBhY3Rpb25zOiBBcnJheTxUZW1wbGF0ZVJlZjx2b2lkPj4gPSBbXTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgaW5wdXRBY3Rpb25DaGFuZ2VzJCA9IG5ldyBTdWJqZWN0PG51bGw+KCk7XG4gIHByaXZhdGUgY29udGVudENoaWxkcmVuQ2hhbmdlcyQ6IE9ic2VydmFibGU8bnVsbD4gPSBkZWZlcigoKSA9PiB7XG4gICAgaWYgKHRoaXMubnpMaXN0SXRlbUFjdGlvbnMpIHtcbiAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubmdab25lLm9uU3RhYmxlLmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICB0YWtlKDEpLFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuY29udGVudENoaWxkcmVuQ2hhbmdlcyQpXG4gICAgKTtcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgbWVyZ2UodGhpcy5jb250ZW50Q2hpbGRyZW5DaGFuZ2VzJCwgdGhpcy5pbnB1dEFjdGlvbkNoYW5nZXMkKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLm56QWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLmFjdGlvbnMgPSB0aGlzLm56QWN0aW9ucztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFjdGlvbnMgPSB0aGlzLm56TGlzdEl0ZW1BY3Rpb25zLm1hcChhY3Rpb24gPT4gYWN0aW9uLnRlbXBsYXRlUmVmISk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0QWN0aW9uQ2hhbmdlcyQubmV4dChudWxsKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19