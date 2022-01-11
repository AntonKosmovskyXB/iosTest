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
export class NzTbodyComponent {
    /**
     * @param {?} nzTableStyleService
     */
    constructor(nzTableStyleService) {
        this.nzTableStyleService = nzTableStyleService;
        this.isInsideTable = false;
        this.showEmpty$ = new BehaviorSubject(false);
        this.noResult$ = new BehaviorSubject(undefined);
        this.listOfMeasureColumn$ = new BehaviorSubject([]);
        this.isInsideTable = !!this.nzTableStyleService;
        if (this.nzTableStyleService) {
            const { showEmpty$, noResult$, listOfMeasureColumn$ } = this.nzTableStyleService;
            noResult$.subscribe(this.noResult$);
            listOfMeasureColumn$.subscribe(this.listOfMeasureColumn$);
            showEmpty$.subscribe(this.showEmpty$);
        }
    }
    /**
     * @param {?} listOfAutoWidth
     * @return {?}
     */
    onListOfAutoWidthChange(listOfAutoWidth) {
        this.nzTableStyleService.setListOfAutoWidth(listOfAutoWidth);
    }
}
NzTbodyComponent.decorators = [
    { type: Component, args: [{
                selector: 'tbody',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <ng-container *ngIf="listOfMeasureColumn$ | async as listOfMeasureColumn">
      <tr
        nz-table-measure-row
        *ngIf="isInsideTable && listOfMeasureColumn.length"
        [listOfMeasureColumn]="listOfMeasureColumn"
        (listOfAutoWidth)="onListOfAutoWidthChange($event)"
      ></tr>
    </ng-container>
    <ng-content></ng-content>
    <tr class="ant-table-placeholder" nz-table-fixed-row *ngIf="showEmpty$ | async">
      <nz-embed-empty nzComponentName="table" [specificContent]="(noResult$ | async)!"></nz-embed-empty>
    </tr>
  `,
                host: {
                    '[class.ant-table-tbody]': 'isInsideTable'
                }
            }] }
];
/** @nocollapse */
NzTbodyComponent.ctorParameters = () => [
    { type: NzTableStyleService, decorators: [{ type: Optional }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGJvZHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbInNyYy90YWJsZS90Ym9keS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUF5QjdELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFNM0IsWUFBZ0MsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFMeEUsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsZUFBVSxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBQ2pELGNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBOEMsU0FBUyxDQUFDLENBQUM7UUFDeEYseUJBQW9CLEdBQUcsSUFBSSxlQUFlLENBQVcsRUFBRSxDQUFDLENBQUM7UUFHdkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQ2hELElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO2tCQUN0QixFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxJQUFJLENBQUMsbUJBQW1CO1lBQ2hGLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3BDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUMxRCxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7Ozs7O0lBRUQsdUJBQXVCLENBQUMsZUFBeUI7UUFDL0MsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7OztZQXpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7O0dBYVQ7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLHlCQUF5QixFQUFFLGVBQWU7aUJBQzNDO2FBQ0Y7Ozs7WUF4QlEsbUJBQW1CLHVCQStCYixRQUFROzs7O0lBTHJCLHlDQUFzQjs7SUFDdEIsc0NBQWlEOztJQUNqRCxxQ0FBd0Y7O0lBQ3hGLGdEQUF5RDs7Ozs7SUFFN0MsK0NBQTREIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbi8qIHRzbGludDpkaXNhYmxlOmNvbXBvbmVudC1zZWxlY3RvciAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPcHRpb25hbCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOelRhYmxlU3R5bGVTZXJ2aWNlIH0gZnJvbSAnLi4vdGFibGUtc3R5bGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rib2R5JyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsaXN0T2ZNZWFzdXJlQ29sdW1uJCB8IGFzeW5jIGFzIGxpc3RPZk1lYXN1cmVDb2x1bW5cIj5cbiAgICAgIDx0clxuICAgICAgICBuei10YWJsZS1tZWFzdXJlLXJvd1xuICAgICAgICAqbmdJZj1cImlzSW5zaWRlVGFibGUgJiYgbGlzdE9mTWVhc3VyZUNvbHVtbi5sZW5ndGhcIlxuICAgICAgICBbbGlzdE9mTWVhc3VyZUNvbHVtbl09XCJsaXN0T2ZNZWFzdXJlQ29sdW1uXCJcbiAgICAgICAgKGxpc3RPZkF1dG9XaWR0aCk9XCJvbkxpc3RPZkF1dG9XaWR0aENoYW5nZSgkZXZlbnQpXCJcbiAgICAgID48L3RyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8dHIgY2xhc3M9XCJhbnQtdGFibGUtcGxhY2Vob2xkZXJcIiBuei10YWJsZS1maXhlZC1yb3cgKm5nSWY9XCJzaG93RW1wdHkkIHwgYXN5bmNcIj5cbiAgICAgIDxuei1lbWJlZC1lbXB0eSBuekNvbXBvbmVudE5hbWU9XCJ0YWJsZVwiIFtzcGVjaWZpY0NvbnRlbnRdPVwiKG5vUmVzdWx0JCB8IGFzeW5jKSFcIj48L256LWVtYmVkLWVtcHR5PlxuICAgIDwvdHI+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC10YWJsZS10Ym9keV0nOiAnaXNJbnNpZGVUYWJsZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelRib2R5Q29tcG9uZW50IHtcbiAgaXNJbnNpZGVUYWJsZSA9IGZhbHNlO1xuICBzaG93RW1wdHkkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gIG5vUmVzdWx0JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcbiAgbGlzdE9mTWVhc3VyZUNvbHVtbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZ1tdPihbXSk7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSBuelRhYmxlU3R5bGVTZXJ2aWNlOiBOelRhYmxlU3R5bGVTZXJ2aWNlKSB7XG4gICAgdGhpcy5pc0luc2lkZVRhYmxlID0gISF0aGlzLm56VGFibGVTdHlsZVNlcnZpY2U7XG4gICAgaWYgKHRoaXMubnpUYWJsZVN0eWxlU2VydmljZSkge1xuICAgICAgY29uc3QgeyBzaG93RW1wdHkkLCBub1Jlc3VsdCQsIGxpc3RPZk1lYXN1cmVDb2x1bW4kIH0gPSB0aGlzLm56VGFibGVTdHlsZVNlcnZpY2U7XG4gICAgICBub1Jlc3VsdCQuc3Vic2NyaWJlKHRoaXMubm9SZXN1bHQkKTtcbiAgICAgIGxpc3RPZk1lYXN1cmVDb2x1bW4kLnN1YnNjcmliZSh0aGlzLmxpc3RPZk1lYXN1cmVDb2x1bW4kKTtcbiAgICAgIHNob3dFbXB0eSQuc3Vic2NyaWJlKHRoaXMuc2hvd0VtcHR5JCk7XG4gICAgfVxuICB9XG5cbiAgb25MaXN0T2ZBdXRvV2lkdGhDaGFuZ2UobGlzdE9mQXV0b1dpZHRoOiBudW1iZXJbXSk6IHZvaWQge1xuICAgIHRoaXMubnpUYWJsZVN0eWxlU2VydmljZS5zZXRMaXN0T2ZBdXRvV2lkdGgobGlzdE9mQXV0b1dpZHRoKTtcbiAgfVxufVxuIl19