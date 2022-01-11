/**
 * @fileoverview added by tsickle
 * Generated from: src/addon/selection.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
export class NzTableSelectionComponent {
    constructor() {
        this.listOfSelections = [];
        this.checked = false;
        this.disabled = false;
        this.indeterminate = false;
        this.showCheckbox = false;
        this.showRowSelection = false;
        this.checkedChange = new EventEmitter();
    }
    /**
     * @param {?} checked
     * @return {?}
     */
    onCheckedChange(checked) {
        this.checked = checked;
        this.checkedChange.emit(checked);
    }
}
NzTableSelectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-table-selection',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <label
      *ngIf="showCheckbox"
      nz-checkbox
      [class.ant-table-selection-select-all-custom]="showRowSelection"
      [ngModel]="checked"
      [nzDisabled]="disabled"
      [nzIndeterminate]="indeterminate"
      (ngModelChange)="onCheckedChange($event)"
    >
    </label>
    <div class="ant-table-selection-extra" *ngIf="showRowSelection">
      <span nz-dropdown class="ant-table-selection-down" nzPlacement="bottomLeft" [nzDropdownMenu]="selectionMenu">
        <i nz-icon nzType="down"></i>
      </span>
      <nz-dropdown-menu #selectionMenu="nzDropdownMenu">
        <ul nz-menu class="ant-table-selection-menu">
          <li nz-menu-item *ngFor="let selection of listOfSelections" (click)="selection.onSelect()">
            {{ selection.text }}
          </li>
        </ul>
      </nz-dropdown-menu>
    </div>
  `,
                host: {
                    '[class.ant-table-selection]': 'true'
                }
            }] }
];
NzTableSelectionComponent.propDecorators = {
    listOfSelections: [{ type: Input }],
    checked: [{ type: Input }],
    disabled: [{ type: Input }],
    indeterminate: [{ type: Input }],
    showCheckbox: [{ type: Input }],
    showRowSelection: [{ type: Input }],
    checkedChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NzTableSelectionComponent.prototype.listOfSelections;
    /** @type {?} */
    NzTableSelectionComponent.prototype.checked;
    /** @type {?} */
    NzTableSelectionComponent.prototype.disabled;
    /** @type {?} */
    NzTableSelectionComponent.prototype.indeterminate;
    /** @type {?} */
    NzTableSelectionComponent.prototype.showCheckbox;
    /** @type {?} */
    NzTableSelectionComponent.prototype.showRowSelection;
    /** @type {?} */
    NzTableSelectionComponent.prototype.checkedChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdGFibGUvIiwic291cmNlcyI6WyJzcmMvYWRkb24vc2VsZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBb0NuSCxNQUFNLE9BQU8seUJBQXlCO0lBakN0QztRQWtDVyxxQkFBZ0IsR0FBdUUsRUFBRSxDQUFDO1FBQzFGLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDZixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFLakUsQ0FBQzs7Ozs7SUFKQyxlQUFlLENBQUMsT0FBZ0I7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7O1lBNUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1QlQ7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLDZCQUE2QixFQUFFLE1BQU07aUJBQ3RDO2FBQ0Y7OzsrQkFFRSxLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7K0JBQ0wsS0FBSzs0QkFDTCxNQUFNOzs7O0lBTlAscURBQW1HOztJQUNuRyw0Q0FBeUI7O0lBQ3pCLDZDQUEwQjs7SUFDMUIsa0RBQStCOztJQUMvQixpREFBOEI7O0lBQzlCLHFEQUFrQzs7SUFDbEMsa0RBQStEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotdGFibGUtc2VsZWN0aW9uJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxsYWJlbFxuICAgICAgKm5nSWY9XCJzaG93Q2hlY2tib3hcIlxuICAgICAgbnotY2hlY2tib3hcbiAgICAgIFtjbGFzcy5hbnQtdGFibGUtc2VsZWN0aW9uLXNlbGVjdC1hbGwtY3VzdG9tXT1cInNob3dSb3dTZWxlY3Rpb25cIlxuICAgICAgW25nTW9kZWxdPVwiY2hlY2tlZFwiXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpJbmRldGVybWluYXRlXT1cImluZGV0ZXJtaW5hdGVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25DaGVja2VkQ2hhbmdlKCRldmVudClcIlxuICAgID5cbiAgICA8L2xhYmVsPlxuICAgIDxkaXYgY2xhc3M9XCJhbnQtdGFibGUtc2VsZWN0aW9uLWV4dHJhXCIgKm5nSWY9XCJzaG93Um93U2VsZWN0aW9uXCI+XG4gICAgICA8c3BhbiBuei1kcm9wZG93biBjbGFzcz1cImFudC10YWJsZS1zZWxlY3Rpb24tZG93blwiIG56UGxhY2VtZW50PVwiYm90dG9tTGVmdFwiIFtuekRyb3Bkb3duTWVudV09XCJzZWxlY3Rpb25NZW51XCI+XG4gICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiZG93blwiPjwvaT5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxuei1kcm9wZG93bi1tZW51ICNzZWxlY3Rpb25NZW51PVwibnpEcm9wZG93bk1lbnVcIj5cbiAgICAgICAgPHVsIG56LW1lbnUgY2xhc3M9XCJhbnQtdGFibGUtc2VsZWN0aW9uLW1lbnVcIj5cbiAgICAgICAgICA8bGkgbnotbWVudS1pdGVtICpuZ0Zvcj1cImxldCBzZWxlY3Rpb24gb2YgbGlzdE9mU2VsZWN0aW9uc1wiIChjbGljayk9XCJzZWxlY3Rpb24ub25TZWxlY3QoKVwiPlxuICAgICAgICAgICAge3sgc2VsZWN0aW9uLnRleHQgfX1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9uei1kcm9wZG93bi1tZW51PlxuICAgIDwvZGl2PlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtc2VsZWN0aW9uXSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56VGFibGVTZWxlY3Rpb25Db21wb25lbnQge1xuICBASW5wdXQoKSBsaXN0T2ZTZWxlY3Rpb25zOiBBcnJheTx7IHRleHQ6IHN0cmluZzsgb25TZWxlY3QoLi4uYXJnczogTnpTYWZlQW55W10pOiBOelNhZmVBbnkgfT4gPSBbXTtcbiAgQElucHV0KCkgY2hlY2tlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBpbmRldGVybWluYXRlID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNob3dDaGVja2JveCA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93Um93U2VsZWN0aW9uID0gZmFsc2U7XG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGVja2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBvbkNoZWNrZWRDaGFuZ2UoY2hlY2tlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgdGhpcy5jaGVja2VkQ2hhbmdlLmVtaXQoY2hlY2tlZCk7XG4gIH1cbn1cbiJdfQ==