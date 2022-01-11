/**
 * @fileoverview added by tsickle
 * Generated from: src/table/tbody.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/* tslint:disable:component-selector */
import { ChangeDetectionStrategy, Component, Optional, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NzTableStyleService } from '../table-style.service';
var NzTbodyComponent = /** @class */ (function () {
    function NzTbodyComponent(nzTableStyleService) {
        this.nzTableStyleService = nzTableStyleService;
        this.isInsideTable = false;
        this.showEmpty$ = new BehaviorSubject(false);
        this.noResult$ = new BehaviorSubject(undefined);
        this.listOfMeasureColumn$ = new BehaviorSubject([]);
        this.isInsideTable = !!this.nzTableStyleService;
        if (this.nzTableStyleService) {
            var _a = this.nzTableStyleService, showEmpty$ = _a.showEmpty$, noResult$ = _a.noResult$, listOfMeasureColumn$ = _a.listOfMeasureColumn$;
            noResult$.subscribe(this.noResult$);
            listOfMeasureColumn$.subscribe(this.listOfMeasureColumn$);
            showEmpty$.subscribe(this.showEmpty$);
        }
    }
    /**
     * @param {?} listOfAutoWidth
     * @return {?}
     */
    NzTbodyComponent.prototype.onListOfAutoWidthChange = /**
     * @param {?} listOfAutoWidth
     * @return {?}
     */
    function (listOfAutoWidth) {
        this.nzTableStyleService.setListOfAutoWidth(listOfAutoWidth);
    };
    NzTbodyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tbody',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "\n    <ng-container *ngIf=\"listOfMeasureColumn$ | async as listOfMeasureColumn\">\n      <tr\n        nz-table-measure-row\n        *ngIf=\"isInsideTable && listOfMeasureColumn.length\"\n        [listOfMeasureColumn]=\"listOfMeasureColumn\"\n        (listOfAutoWidth)=\"onListOfAutoWidthChange($event)\"\n      ></tr>\n    </ng-container>\n    <ng-content></ng-content>\n    <tr class=\"ant-table-placeholder\" nz-table-fixed-row *ngIf=\"showEmpty$ | async\">\n      <nz-embed-empty nzComponentName=\"table\" [specificContent]=\"(noResult$ | async)!\"></nz-embed-empty>\n    </tr>\n  ",
                    host: {
                        '[class.ant-table-tbody]': 'isInsideTable'
                    }
                }] }
    ];
    /** @nocollapse */
    NzTbodyComponent.ctorParameters = function () { return [
        { type: NzTableStyleService, decorators: [{ type: Optional }] }
    ]; };
    return NzTbodyComponent;
}());
export { NzTbodyComponent };
if (false) {
    /** @type {?} */
    NzTbodyComponent.prototype.isInsideTable;
    /** @type {?} */
    NzTbodyComponent.prototype.showEmpty$;
    /** @type {?} */
    NzTbodyComponent.prototype.noResult$;
    /** @type {?} */
    NzTbodyComponent.prototype.listOfMeasureColumn$;
    /**
     * @type {?}
     * @private
     */
    NzTbodyComponent.prototype.nzTableStyleService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGJvZHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbInNyYy90YWJsZS90Ym9keS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFN0Q7SUE2QkUsMEJBQWdDLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBTHhFLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUNqRCxjQUFTLEdBQUcsSUFBSSxlQUFlLENBQThDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hGLHlCQUFvQixHQUFHLElBQUksZUFBZSxDQUFXLEVBQUUsQ0FBQyxDQUFDO1FBR3ZELElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUNoRCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUN0QixJQUFBLDZCQUEwRSxFQUF4RSwwQkFBVSxFQUFFLHdCQUFTLEVBQUUsOENBQWlEO1lBQ2hGLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3BDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUMxRCxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7Ozs7O0lBRUQsa0RBQXVCOzs7O0lBQXZCLFVBQXdCLGVBQXlCO1FBQy9DLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMvRCxDQUFDOztnQkF6Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxPQUFPO29CQUNqQixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFFBQVEsRUFBRSwya0JBYVQ7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLHlCQUF5QixFQUFFLGVBQWU7cUJBQzNDO2lCQUNGOzs7O2dCQXhCUSxtQkFBbUIsdUJBK0JiLFFBQVE7O0lBYXZCLHVCQUFDO0NBQUEsQUExQ0QsSUEwQ0M7U0FuQlksZ0JBQWdCOzs7SUFDM0IseUNBQXNCOztJQUN0QixzQ0FBaUQ7O0lBQ2pELHFDQUF3Rjs7SUFDeEYsZ0RBQXlEOzs7OztJQUU3QywrQ0FBNEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuLyogdHNsaW50OmRpc2FibGU6Y29tcG9uZW50LXNlbGVjdG9yICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9wdGlvbmFsLCBUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE56VGFibGVTdHlsZVNlcnZpY2UgfSBmcm9tICcuLi90YWJsZS1zdHlsZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGJvZHknLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxpc3RPZk1lYXN1cmVDb2x1bW4kIHwgYXN5bmMgYXMgbGlzdE9mTWVhc3VyZUNvbHVtblwiPlxuICAgICAgPHRyXG4gICAgICAgIG56LXRhYmxlLW1lYXN1cmUtcm93XG4gICAgICAgICpuZ0lmPVwiaXNJbnNpZGVUYWJsZSAmJiBsaXN0T2ZNZWFzdXJlQ29sdW1uLmxlbmd0aFwiXG4gICAgICAgIFtsaXN0T2ZNZWFzdXJlQ29sdW1uXT1cImxpc3RPZk1lYXN1cmVDb2x1bW5cIlxuICAgICAgICAobGlzdE9mQXV0b1dpZHRoKT1cIm9uTGlzdE9mQXV0b1dpZHRoQ2hhbmdlKCRldmVudClcIlxuICAgICAgPjwvdHI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDx0ciBjbGFzcz1cImFudC10YWJsZS1wbGFjZWhvbGRlclwiIG56LXRhYmxlLWZpeGVkLXJvdyAqbmdJZj1cInNob3dFbXB0eSQgfCBhc3luY1wiPlxuICAgICAgPG56LWVtYmVkLWVtcHR5IG56Q29tcG9uZW50TmFtZT1cInRhYmxlXCIgW3NwZWNpZmljQ29udGVudF09XCIobm9SZXN1bHQkIHwgYXN5bmMpIVwiPjwvbnotZW1iZWQtZW1wdHk+XG4gICAgPC90cj5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXRhYmxlLXRib2R5XSc6ICdpc0luc2lkZVRhYmxlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56VGJvZHlDb21wb25lbnQge1xuICBpc0luc2lkZVRhYmxlID0gZmFsc2U7XG4gIHNob3dFbXB0eSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgbm9SZXN1bHQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmcgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICBsaXN0T2ZNZWFzdXJlQ29sdW1uJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nW10+KFtdKTtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIG56VGFibGVTdHlsZVNlcnZpY2U6IE56VGFibGVTdHlsZVNlcnZpY2UpIHtcbiAgICB0aGlzLmlzSW5zaWRlVGFibGUgPSAhIXRoaXMubnpUYWJsZVN0eWxlU2VydmljZTtcbiAgICBpZiAodGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlKSB7XG4gICAgICBjb25zdCB7IHNob3dFbXB0eSQsIG5vUmVzdWx0JCwgbGlzdE9mTWVhc3VyZUNvbHVtbiQgfSA9IHRoaXMubnpUYWJsZVN0eWxlU2VydmljZTtcbiAgICAgIG5vUmVzdWx0JC5zdWJzY3JpYmUodGhpcy5ub1Jlc3VsdCQpO1xuICAgICAgbGlzdE9mTWVhc3VyZUNvbHVtbiQuc3Vic2NyaWJlKHRoaXMubGlzdE9mTWVhc3VyZUNvbHVtbiQpO1xuICAgICAgc2hvd0VtcHR5JC5zdWJzY3JpYmUodGhpcy5zaG93RW1wdHkkKTtcbiAgICB9XG4gIH1cblxuICBvbkxpc3RPZkF1dG9XaWR0aENoYW5nZShsaXN0T2ZBdXRvV2lkdGg6IG51bWJlcltdKTogdm9pZCB7XG4gICAgdGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlLnNldExpc3RPZkF1dG9XaWR0aChsaXN0T2ZBdXRvV2lkdGgpO1xuICB9XG59XG4iXX0=