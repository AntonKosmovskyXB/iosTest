/**
 * @fileoverview added by tsickle
 * Generated from: src/addon/filter-trigger.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
export class NzFilterTriggerComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.nzActive = false;
        this.nzVisible = false;
        this.nzVisibleChange = new EventEmitter();
    }
    /**
     * @param {?} visible
     * @return {?}
     */
    onVisibleChange(visible) {
        this.nzVisible = visible;
        this.nzVisibleChange.next(visible);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onFilterClick($event) {
        $event.stopPropagation();
    }
    /**
     * @return {?}
     */
    hide() {
        this.nzVisible = false;
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    show() {
        this.nzVisible = true;
        this.cdr.markForCheck();
    }
}
NzFilterTriggerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-filter-trigger',
                exportAs: `nzFilterTrigger`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                template: `
    <span
      nz-dropdown
      class="ant-table-filter-trigger"
      nzTrigger="click"
      nzPlacement="bottomRight"
      [nzClickHide]="false"
      [nzDropdownMenu]="nzDropdownMenu"
      [class.active]="nzActive"
      [class.ant-table-filter-open]="nzVisible"
      [nzVisible]="nzVisible"
      (nzVisibleChange)="onVisibleChange($event)"
      (click)="onFilterClick($event)"
    >
      <ng-content></ng-content>
    </span>
  `,
                host: {
                    '[class.ant-table-filter-trigger-container]': 'true',
                    '[class.ant-table-filter-trigger-container-open]': 'nzVisible'
                }
            }] }
];
/** @nocollapse */
NzFilterTriggerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NzFilterTriggerComponent.propDecorators = {
    nzActive: [{ type: Input }],
    nzDropdownMenu: [{ type: Input }],
    nzVisible: [{ type: Input }],
    nzVisibleChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NzFilterTriggerComponent.prototype.nzActive;
    /** @type {?} */
    NzFilterTriggerComponent.prototype.nzDropdownMenu;
    /** @type {?} */
    NzFilterTriggerComponent.prototype.nzVisible;
    /** @type {?} */
    NzFilterTriggerComponent.prototype.nzVisibleChange;
    /**
     * @type {?}
     * @private
     */
    NzFilterTriggerComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXRyaWdnZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbInNyYy9hZGRvbi9maWx0ZXItdHJpZ2dlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0SSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQThCakUsTUFBTSxPQUFPLHdCQUF3Qjs7OztJQW9CbkMsWUFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFuQmpDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNSLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQWdCcEIsQ0FBQzs7Ozs7SUFmOUMsZUFBZSxDQUFDLE9BQWdCO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBQ0QsYUFBYSxDQUFDLE1BQWtCO1FBQzlCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBQ0QsSUFBSTtRQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUNELElBQUk7UUFDRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7OztZQS9DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQlQ7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLDRDQUE0QyxFQUFFLE1BQU07b0JBQ3BELGlEQUFpRCxFQUFFLFdBQVc7aUJBQy9EO2FBQ0Y7Ozs7WUE5QmlDLGlCQUFpQjs7O3VCQWdDaEQsS0FBSzs2QkFDTCxLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsTUFBTTs7OztJQUhQLDRDQUEwQjs7SUFDMUIsa0RBQWtEOztJQUNsRCw2Q0FBMkI7O0lBQzNCLG1EQUFpRTs7Ozs7SUFnQnJELHVDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekRyb3Bkb3duTWVudUNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJvcGRvd24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1maWx0ZXItdHJpZ2dlcicsXG4gIGV4cG9ydEFzOiBgbnpGaWx0ZXJUcmlnZ2VyYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzcGFuXG4gICAgICBuei1kcm9wZG93blxuICAgICAgY2xhc3M9XCJhbnQtdGFibGUtZmlsdGVyLXRyaWdnZXJcIlxuICAgICAgbnpUcmlnZ2VyPVwiY2xpY2tcIlxuICAgICAgbnpQbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiXG4gICAgICBbbnpDbGlja0hpZGVdPVwiZmFsc2VcIlxuICAgICAgW256RHJvcGRvd25NZW51XT1cIm56RHJvcGRvd25NZW51XCJcbiAgICAgIFtjbGFzcy5hY3RpdmVdPVwibnpBY3RpdmVcIlxuICAgICAgW2NsYXNzLmFudC10YWJsZS1maWx0ZXItb3Blbl09XCJuelZpc2libGVcIlxuICAgICAgW256VmlzaWJsZV09XCJuelZpc2libGVcIlxuICAgICAgKG56VmlzaWJsZUNoYW5nZSk9XCJvblZpc2libGVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAoY2xpY2spPVwib25GaWx0ZXJDbGljaygkZXZlbnQpXCJcbiAgICA+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9zcGFuPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtZmlsdGVyLXRyaWdnZXItY29udGFpbmVyXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmFudC10YWJsZS1maWx0ZXItdHJpZ2dlci1jb250YWluZXItb3Blbl0nOiAnbnpWaXNpYmxlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56RmlsdGVyVHJpZ2dlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIG56QWN0aXZlID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56RHJvcGRvd25NZW51ITogTnpEcm9wZG93bk1lbnVDb21wb25lbnQ7XG4gIEBJbnB1dCgpIG56VmlzaWJsZSA9IGZhbHNlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBvblZpc2libGVDaGFuZ2UodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpWaXNpYmxlID0gdmlzaWJsZTtcbiAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5uZXh0KHZpc2libGUpO1xuICB9XG4gIG9uRmlsdGVyQ2xpY2soJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5uelZpc2libGUgPSBmYWxzZTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBzaG93KCk6IHZvaWQge1xuICAgIHRoaXMubnpWaXNpYmxlID0gdHJ1ZTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG59XG4iXX0=