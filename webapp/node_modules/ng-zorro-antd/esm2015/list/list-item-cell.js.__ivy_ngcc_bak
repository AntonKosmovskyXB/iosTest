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
export class NzListItemExtraComponent {
    constructor() { }
}
NzListItemExtraComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-list-item-extra, [nz-list-item-extra]',
                exportAs: 'nzListItemExtra',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ` <ng-content></ng-content> `,
                host: {
                    class: 'ant-list-item-extra'
                }
            }] }
];
/** @nocollapse */
NzListItemExtraComponent.ctorParameters = () => [];
export class NzListItemActionComponent {
    constructor() { }
}
NzListItemActionComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-list-item-action',
                exportAs: 'nzListItemAction',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ` <ng-template><ng-content></ng-content></ng-template> `
            }] }
];
/** @nocollapse */
NzListItemActionComponent.ctorParameters = () => [];
NzListItemActionComponent.propDecorators = {
    templateRef: [{ type: ViewChild, args: [TemplateRef,] }]
};
if (false) {
    /** @type {?} */
    NzListItemActionComponent.prototype.templateRef;
}
export class NzListItemActionsComponent {
    /**
     * @param {?} ngZone
     * @param {?} cdr
     */
    constructor(ngZone, cdr) {
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.nzActions = [];
        this.actions = [];
        this.destroy$ = new Subject();
        this.inputActionChanges$ = new Subject();
        this.contentChildrenChanges$ = defer((/**
         * @return {?}
         */
        () => {
            if (this.nzListItemActions) {
                return of(null);
            }
            return this.ngZone.onStable.asObservable().pipe(take(1), switchMap((/**
             * @return {?}
             */
            () => this.contentChildrenChanges$)));
        }));
        merge(this.contentChildrenChanges$, this.inputActionChanges$)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            if (this.nzActions.length) {
                this.actions = this.nzActions;
            }
            else {
                this.actions = this.nzListItemActions.map((/**
                 * @param {?} action
                 * @return {?}
                 */
                action => (/** @type {?} */ (action.templateRef))));
            }
            this.cdr.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.inputActionChanges$.next(null);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzListItemActionsComponent.decorators = [
    { type: Component, args: [{
                selector: 'ul[nz-list-item-actions]',
                exportAs: 'nzListItemActions',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <li *ngFor="let i of actions; let last = last">
      <ng-template [ngTemplateOutlet]="i"></ng-template>
      <em *ngIf="!last" class="ant-list-item-action-split"></em>
    </li>
  `,
                host: {
                    class: 'ant-list-item-action'
                }
            }] }
];
/** @nocollapse */
NzListItemActionsComponent.ctorParameters = () => [
    { type: NgZone },
    { type: ChangeDetectorRef }
];
NzListItemActionsComponent.propDecorators = {
    nzActions: [{ type: Input }],
    nzListItemActions: [{ type: ContentChildren, args: [NzListItemActionComponent,] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLWNlbGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2xpc3QvIiwic291cmNlcyI6WyJsaXN0LWl0ZW0tY2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLEtBQUssRUFDTCxNQUFNLEVBR04sU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3RCxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVc1RCxNQUFNLE9BQU8sd0JBQXdCO0lBQ25DLGdCQUFlLENBQUM7OztZQVZqQixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBDQUEwQztnQkFDcEQsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUscUJBQXFCO2lCQUM3QjthQUNGOzs7O0FBV0QsTUFBTSxPQUFPLHlCQUF5QjtJQUVwQyxnQkFBZSxDQUFDOzs7WUFSakIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUUsd0RBQXdEO2FBQ25FOzs7OzswQkFFRSxTQUFTLFNBQUMsV0FBVzs7OztJQUF0QixnREFBd0Q7O0FBa0IxRCxNQUFNLE9BQU8sMEJBQTBCOzs7OztJQWlCckMsWUFBb0IsTUFBYyxFQUFVLEdBQXNCO1FBQTlDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWhCekQsY0FBUyxHQUE2QixFQUFFLENBQUM7UUFHbEQsWUFBTyxHQUE2QixFQUFFLENBQUM7UUFDL0IsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDekIsd0JBQW1CLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUMxQyw0QkFBdUIsR0FBcUIsS0FBSzs7O1FBQUMsR0FBRyxFQUFFO1lBQzdELElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO2dCQUMxQixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNqQjtZQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUM3QyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsU0FBUzs7O1lBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFDLENBQzlDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztRQUdELEtBQUssQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDO2FBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlCLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUMvQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHOzs7O2dCQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsbUJBQUEsTUFBTSxDQUFDLFdBQVcsRUFBQyxFQUFDLENBQUM7YUFDMUU7WUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzNCLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQW5ERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7R0FLVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLHNCQUFzQjtpQkFDOUI7YUFDRjs7OztZQS9DQyxNQUFNO1lBSk4saUJBQWlCOzs7d0JBcURoQixLQUFLO2dDQUNMLGVBQWUsU0FBQyx5QkFBeUI7Ozs7SUFEMUMsK0NBQWtEOztJQUNsRCx1REFBcUc7O0lBRXJHLDZDQUF1Qzs7Ozs7SUFDdkMsOENBQWlDOzs7OztJQUNqQyx5REFBa0Q7Ozs7O0lBQ2xELDZEQVFHOzs7OztJQUVTLDRDQUFzQjs7Ozs7SUFBRSx5Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVmZXIsIG1lcmdlLCBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCB0YWtlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LWxpc3QtaXRlbS1leHRyYSwgW256LWxpc3QtaXRlbS1leHRyYV0nLFxuICBleHBvcnRBczogJ256TGlzdEl0ZW1FeHRyYScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FudC1saXN0LWl0ZW0tZXh0cmEnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpMaXN0SXRlbUV4dHJhQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1saXN0LWl0ZW0tYWN0aW9uJyxcbiAgZXhwb3J0QXM6ICduekxpc3RJdGVtQWN0aW9uJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgIDxuZy10ZW1wbGF0ZT48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT4gYFxufSlcbmV4cG9ydCBjbGFzcyBOekxpc3RJdGVtQWN0aW9uQ29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgdGVtcGxhdGVSZWY/OiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1bFtuei1saXN0LWl0ZW0tYWN0aW9uc10nLFxuICBleHBvcnRBczogJ256TGlzdEl0ZW1BY3Rpb25zJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGxpICpuZ0Zvcj1cImxldCBpIG9mIGFjdGlvbnM7IGxldCBsYXN0ID0gbGFzdFwiPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImlcIj48L25nLXRlbXBsYXRlPlxuICAgICAgPGVtICpuZ0lmPVwiIWxhc3RcIiBjbGFzcz1cImFudC1saXN0LWl0ZW0tYWN0aW9uLXNwbGl0XCI+PC9lbT5cbiAgICA8L2xpPlxuICBgLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhbnQtbGlzdC1pdGVtLWFjdGlvbidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekxpc3RJdGVtQWN0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgbnpBY3Rpb25zOiBBcnJheTxUZW1wbGF0ZVJlZjx2b2lkPj4gPSBbXTtcbiAgQENvbnRlbnRDaGlsZHJlbihOekxpc3RJdGVtQWN0aW9uQ29tcG9uZW50KSBuekxpc3RJdGVtQWN0aW9ucyE6IFF1ZXJ5TGlzdDxOekxpc3RJdGVtQWN0aW9uQ29tcG9uZW50PjtcblxuICBhY3Rpb25zOiBBcnJheTxUZW1wbGF0ZVJlZjx2b2lkPj4gPSBbXTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgaW5wdXRBY3Rpb25DaGFuZ2VzJCA9IG5ldyBTdWJqZWN0PG51bGw+KCk7XG4gIHByaXZhdGUgY29udGVudENoaWxkcmVuQ2hhbmdlcyQ6IE9ic2VydmFibGU8bnVsbD4gPSBkZWZlcigoKSA9PiB7XG4gICAgaWYgKHRoaXMubnpMaXN0SXRlbUFjdGlvbnMpIHtcbiAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubmdab25lLm9uU3RhYmxlLmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICB0YWtlKDEpLFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuY29udGVudENoaWxkcmVuQ2hhbmdlcyQpXG4gICAgKTtcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgbWVyZ2UodGhpcy5jb250ZW50Q2hpbGRyZW5DaGFuZ2VzJCwgdGhpcy5pbnB1dEFjdGlvbkNoYW5nZXMkKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLm56QWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLmFjdGlvbnMgPSB0aGlzLm56QWN0aW9ucztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFjdGlvbnMgPSB0aGlzLm56TGlzdEl0ZW1BY3Rpb25zLm1hcChhY3Rpb24gPT4gYWN0aW9uLnRlbXBsYXRlUmVmISk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0QWN0aW9uQ2hhbmdlcyQubmV4dChudWxsKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19