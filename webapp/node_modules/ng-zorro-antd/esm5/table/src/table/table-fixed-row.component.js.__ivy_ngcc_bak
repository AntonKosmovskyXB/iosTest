/**
 * @fileoverview added by tsickle
 * Generated from: src/table/table-fixed-row.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzTableStyleService } from '../table-style.service';
var NzTableFixedRowComponent = /** @class */ (function () {
    function NzTableFixedRowComponent(nzTableStyleService, renderer) {
        this.nzTableStyleService = nzTableStyleService;
        this.renderer = renderer;
        this.hostWidth$ = new BehaviorSubject(null);
        this.enableAutoMeasure$ = new BehaviorSubject(false);
        this.destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    NzTableFixedRowComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.nzTableStyleService) {
            var _a = this.nzTableStyleService, enableAutoMeasure$ = _a.enableAutoMeasure$, hostWidth$ = _a.hostWidth$;
            enableAutoMeasure$.subscribe(this.enableAutoMeasure$);
            hostWidth$.subscribe(this.hostWidth$);
        }
    };
    /**
     * @return {?}
     */
    NzTableFixedRowComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzTableStyleService.columnCount$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} count
         * @return {?}
         */
        function (count) {
            _this.renderer.setAttribute(_this.tdElement.nativeElement, 'colspan', "" + count);
        }));
    };
    /**
     * @return {?}
     */
    NzTableFixedRowComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzTableFixedRowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tr[nz-table-fixed-row], tr[nzExpand]',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "\n    <td class=\"nz-disable-td ant-table-cell\" #tdElement>\n      <div\n        class=\"ant-table-expanded-row-fixed\"\n        *ngIf=\"enableAutoMeasure$ | async; else contentTemplate\"\n        style=\"position: sticky; left: 0px; overflow: hidden;\"\n        [style.width.px]=\"hostWidth$ | async\"\n      >\n        <ng-template [ngTemplateOutlet]=\"contentTemplate\"></ng-template>\n      </div>\n    </td>\n    <ng-template #contentTemplate><ng-content></ng-content></ng-template>\n  "
                }] }
    ];
    /** @nocollapse */
    NzTableFixedRowComponent.ctorParameters = function () { return [
        { type: NzTableStyleService },
        { type: Renderer2 }
    ]; };
    NzTableFixedRowComponent.propDecorators = {
        tdElement: [{ type: ViewChild, args: ['tdElement',] }]
    };
    return NzTableFixedRowComponent;
}());
export { NzTableFixedRowComponent };
if (false) {
    /** @type {?} */
    NzTableFixedRowComponent.prototype.tdElement;
    /** @type {?} */
    NzTableFixedRowComponent.prototype.hostWidth$;
    /** @type {?} */
    NzTableFixedRowComponent.prototype.enableAutoMeasure$;
    /**
     * @type {?}
     * @private
     */
    NzTableFixedRowComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzTableFixedRowComponent.prototype.nzTableStyleService;
    /**
     * @type {?}
     * @private
     */
    NzTableFixedRowComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZml4ZWQtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdGFibGUvIiwic291cmNlcyI6WyJzcmMvdGFibGUvdGFibGUtZml4ZWQtcm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBR1YsU0FBUyxFQUNULFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTdEO0lBdUJFLGtDQUFvQixtQkFBd0MsRUFBVSxRQUFtQjtRQUFyRSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUh6RixlQUFVLEdBQUcsSUFBSSxlQUFlLENBQWdCLElBQUksQ0FBQyxDQUFDO1FBQ3RELHVCQUFrQixHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBQ2pELGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBQzJELENBQUM7Ozs7SUFDN0YsMkNBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDdEIsSUFBQSw2QkFBNkQsRUFBM0QsMENBQWtCLEVBQUUsMEJBQXVDO1lBQ25FLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUN0RCxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7Ozs7SUFDRCxrREFBZTs7O0lBQWY7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ2xGLEtBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxLQUFHLEtBQU8sQ0FBQyxDQUFDO1FBQ2xGLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUNELDhDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOztnQkF2Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQ0FBc0M7b0JBQ2hELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLDhlQVlUO2lCQUNGOzs7O2dCQW5CUSxtQkFBbUI7Z0JBTjFCLFNBQVM7Ozs0QkEyQlIsU0FBUyxTQUFDLFdBQVc7O0lBcUJ4QiwrQkFBQztDQUFBLEFBeENELElBd0NDO1NBdEJZLHdCQUF3Qjs7O0lBQ25DLDZDQUErQzs7SUFDL0MsOENBQXNEOztJQUN0RCxzREFBeUQ7Ozs7O0lBQ3pELDRDQUFpQzs7Ozs7SUFDckIsdURBQWdEOzs7OztJQUFFLDRDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE56VGFibGVTdHlsZVNlcnZpY2UgfSBmcm9tICcuLi90YWJsZS1zdHlsZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHJbbnotdGFibGUtZml4ZWQtcm93XSwgdHJbbnpFeHBhbmRdJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHRkIGNsYXNzPVwibnotZGlzYWJsZS10ZCBhbnQtdGFibGUtY2VsbFwiICN0ZEVsZW1lbnQ+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiYW50LXRhYmxlLWV4cGFuZGVkLXJvdy1maXhlZFwiXG4gICAgICAgICpuZ0lmPVwiZW5hYmxlQXV0b01lYXN1cmUkIHwgYXN5bmM7IGVsc2UgY29udGVudFRlbXBsYXRlXCJcbiAgICAgICAgc3R5bGU9XCJwb3NpdGlvbjogc3RpY2t5OyBsZWZ0OiAwcHg7IG92ZXJmbG93OiBoaWRkZW47XCJcbiAgICAgICAgW3N0eWxlLndpZHRoLnB4XT1cImhvc3RXaWR0aCQgfCBhc3luY1wiXG4gICAgICA+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50VGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgPC90ZD5cbiAgICA8bmctdGVtcGxhdGUgI2NvbnRlbnRUZW1wbGF0ZT48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOelRhYmxlRml4ZWRSb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ3RkRWxlbWVudCcpIHRkRWxlbWVudCE6IEVsZW1lbnRSZWY7XG4gIGhvc3RXaWR0aCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlciB8IG51bGw+KG51bGwpO1xuICBlbmFibGVBdXRvTWVhc3VyZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbnpUYWJsZVN0eWxlU2VydmljZTogTnpUYWJsZVN0eWxlU2VydmljZSwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlKSB7XG4gICAgICBjb25zdCB7IGVuYWJsZUF1dG9NZWFzdXJlJCwgaG9zdFdpZHRoJCB9ID0gdGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlO1xuICAgICAgZW5hYmxlQXV0b01lYXN1cmUkLnN1YnNjcmliZSh0aGlzLmVuYWJsZUF1dG9NZWFzdXJlJCk7XG4gICAgICBob3N0V2lkdGgkLnN1YnNjcmliZSh0aGlzLmhvc3RXaWR0aCQpO1xuICAgIH1cbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlLmNvbHVtbkNvdW50JC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGNvdW50ID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMudGRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdjb2xzcGFuJywgYCR7Y291bnR9YCk7XG4gICAgfSk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=