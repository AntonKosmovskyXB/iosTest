/**
 * @fileoverview added by tsickle
 * Generated from: select-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
export class NzSelectItemComponent {
    constructor() {
        this.disabled = false;
        this.label = null;
        this.deletable = false;
        this.removeIcon = null;
        this.contentTemplateOutletContext = null;
        this.contentTemplateOutlet = null;
        this.delete = new EventEmitter();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onDelete(e) {
        e.preventDefault();
        e.stopPropagation();
        if (!this.disabled) {
            this.delete.next(e);
        }
    }
}
NzSelectItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-select-item',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-container *nzStringTemplateOutlet="contentTemplateOutlet; context: { $implicit: contentTemplateOutletContext }">
      <div class="ant-select-selection-item-content" *ngIf="deletable; else labelTemplate">{{ label }}</div>
      <ng-template #labelTemplate>{{ label }}</ng-template>
    </ng-container>
    <span *ngIf="deletable && !disabled" class="ant-select-selection-item-remove" (click)="onDelete($event)">
      <i nz-icon nzType="close" *ngIf="!removeIcon; else removeIcon"></i>
    </span>
  `,
                host: {
                    '[attr.title]': 'label',
                    '[class.ant-select-selection-item]': 'true',
                    '[class.ant-select-selection-item-disabled]': 'disabled'
                }
            }] }
];
NzSelectItemComponent.propDecorators = {
    disabled: [{ type: Input }],
    label: [{ type: Input }],
    deletable: [{ type: Input }],
    removeIcon: [{ type: Input }],
    contentTemplateOutletContext: [{ type: Input }],
    contentTemplateOutlet: [{ type: Input }],
    delete: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NzSelectItemComponent.prototype.disabled;
    /** @type {?} */
    NzSelectItemComponent.prototype.label;
    /** @type {?} */
    NzSelectItemComponent.prototype.deletable;
    /** @type {?} */
    NzSelectItemComponent.prototype.removeIcon;
    /** @type {?} */
    NzSelectItemComponent.prototype.contentTemplateOutletContext;
    /** @type {?} */
    NzSelectItemComponent.prototype.contentTemplateOutlet;
    /** @type {?} */
    NzSelectItemComponent.prototype.delete;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9zZWxlY3QvIiwic291cmNlcyI6WyJzZWxlY3QtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBZSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXNCaEksTUFBTSxPQUFPLHFCQUFxQjtJQW5CbEM7UUFvQlcsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixVQUFLLEdBQThCLElBQUksQ0FBQztRQUN4QyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBa0MsSUFBSSxDQUFDO1FBQ2pELGlDQUE0QixHQUFxQixJQUFJLENBQUM7UUFDdEQsMEJBQXFCLEdBQTJDLElBQUksQ0FBQztRQUMzRCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQVE3RCxDQUFDOzs7OztJQVBDLFFBQVEsQ0FBQyxDQUFhO1FBQ3BCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckI7SUFDSCxDQUFDOzs7WUFqQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOzs7Ozs7OztHQVFUO2dCQUNELElBQUksRUFBRTtvQkFDSixjQUFjLEVBQUUsT0FBTztvQkFDdkIsbUNBQW1DLEVBQUUsTUFBTTtvQkFDM0MsNENBQTRDLEVBQUUsVUFBVTtpQkFDekQ7YUFDRjs7O3VCQUVFLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7MkNBQ0wsS0FBSztvQ0FDTCxLQUFLO3FCQUNMLE1BQU07Ozs7SUFOUCx5Q0FBMEI7O0lBQzFCLHNDQUFpRDs7SUFDakQsMENBQTJCOztJQUMzQiwyQ0FBMEQ7O0lBQzFELDZEQUErRDs7SUFDL0Qsc0RBQThFOztJQUM5RSx1Q0FBMkQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotc2VsZWN0LWl0ZW0nLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiY29udGVudFRlbXBsYXRlT3V0bGV0OyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY29udGVudFRlbXBsYXRlT3V0bGV0Q29udGV4dCB9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb24taXRlbS1jb250ZW50XCIgKm5nSWY9XCJkZWxldGFibGU7IGVsc2UgbGFiZWxUZW1wbGF0ZVwiPnt7IGxhYmVsIH19PC9kaXY+XG4gICAgICA8bmctdGVtcGxhdGUgI2xhYmVsVGVtcGxhdGU+e3sgbGFiZWwgfX08L25nLXRlbXBsYXRlPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxzcGFuICpuZ0lmPVwiZGVsZXRhYmxlICYmICFkaXNhYmxlZFwiIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb24taXRlbS1yZW1vdmVcIiAoY2xpY2spPVwib25EZWxldGUoJGV2ZW50KVwiPlxuICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJjbG9zZVwiICpuZ0lmPVwiIXJlbW92ZUljb247IGVsc2UgcmVtb3ZlSWNvblwiPjwvaT5cbiAgICA8L3NwYW4+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2F0dHIudGl0bGVdJzogJ2xhYmVsJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtc2VsZWN0aW9uLWl0ZW1dJzogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1zZWxlY3Rpb24taXRlbS1kaXNhYmxlZF0nOiAnZGlzYWJsZWQnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpTZWxlY3RJdGVtQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQgPSBudWxsO1xuICBASW5wdXQoKSBkZWxldGFibGUgPSBmYWxzZTtcbiAgQElucHV0KCkgcmVtb3ZlSWNvbjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBjb250ZW50VGVtcGxhdGVPdXRsZXRDb250ZXh0OiBOelNhZmVBbnkgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgY29udGVudFRlbXBsYXRlT3V0bGV0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIEBPdXRwdXQoKSByZWFkb25seSBkZWxldGUgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG4gIG9uRGVsZXRlKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZGVsZXRlLm5leHQoZSk7XG4gICAgfVxuICB9XG59XG4iXX0=