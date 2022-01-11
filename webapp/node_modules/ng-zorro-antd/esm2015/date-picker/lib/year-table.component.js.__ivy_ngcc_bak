/**
 * @fileoverview added by tsickle
 * Generated from: lib/year-table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { valueFunctionProp } from 'ng-zorro-antd/core/util';
import { DateHelperService } from 'ng-zorro-antd/i18n';
import { AbstractTable } from './abstract-table';
export class YearTableComponent extends AbstractTable {
    /**
     * @param {?} dateHelper
     */
    constructor(dateHelper) {
        super();
        this.dateHelper = dateHelper;
        this.MAX_ROW = 4;
        this.MAX_COL = 3;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if (changes.value || changes.disabledDate || changes.activeDate) {
            this.render();
        }
    }
    /**
     * @return {?}
     */
    makeHeadRow() {
        return [];
    }
    /**
     * @return {?}
     */
    makeBodyRows() {
        /** @type {?} */
        const currentYear = this.activeDate && this.activeDate.getYear();
        /** @type {?} */
        const startYear = parseInt(`${currentYear / 10}`, 10) * 10;
        /** @type {?} */
        const endYear = startYear + 9;
        /** @type {?} */
        const previousYear = startYear - 1;
        /** @type {?} */
        const years = [];
        /** @type {?} */
        let yearValue = 0;
        for (let rowIndex = 0; rowIndex < this.MAX_ROW; rowIndex++) {
            /** @type {?} */
            const row = [];
            for (let colIndex = 0; colIndex < this.MAX_COL; colIndex++) {
                /** @type {?} */
                const yearNum = previousYear + yearValue;
                /** @type {?} */
                const year = this.activeDate.setYear(yearNum);
                /** @type {?} */
                const content = this.dateHelper.format(year.nativeDate, 'yyyy');
                /** @type {?} */
                const isDisabled = this.disabledDate ? this.disabledDate(year.nativeDate) : false;
                /** @type {?} */
                const cell = {
                    value: year.nativeDate,
                    isDisabled,
                    isSameDecade: yearNum >= startYear && yearNum <= endYear,
                    isSelected: yearNum === (this.value && this.value.getYear()),
                    content,
                    title: content,
                    classMap: {},
                    cellRender: valueFunctionProp((/** @type {?} */ (this.cellRender)), year),
                    // Customized content
                    fullCellRender: valueFunctionProp((/** @type {?} */ (this.fullCellRender)), year),
                    onClick: (/**
                     * @return {?}
                     */
                    () => this.chooseYear(cell.value.getFullYear())),
                    // don't use yearValue here,
                    onMouseEnter: (/**
                     * @return {?}
                     */
                    () => null)
                };
                cell.classMap = this.getClassMap(cell);
                row.push(cell);
                yearValue++;
            }
            years.push({ dateCells: row });
        }
        return years;
    }
    /**
     * @param {?} cell
     * @return {?}
     */
    getClassMap(cell) {
        return {
            [`${this.prefixCls}-cell`]: true,
            [`${this.prefixCls}-cell-in-view`]: !!cell.isSameDecade,
            [`${this.prefixCls}-cell-selected`]: cell.isSelected,
            [`${this.prefixCls}-cell-disabled`]: cell.isDisabled
        };
    }
    /**
     * @private
     * @param {?} year
     * @return {?}
     */
    chooseYear(year) {
        this.value = this.activeDate.setYear(year);
        this.valueChange.emit(this.value);
        this.render();
    }
}
YearTableComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'year-table',
                exportAs: 'yearTable',
                template: "<table class=\"ant-picker-content\" cellspacing=\"0\" role=\"grid\">\n  <thead *ngIf=\"headRow && headRow.length > 0\">\n    <tr role=\"row\">\n      <th *ngIf=\"showWeek\" role=\"columnheader\"></th>\n      <th *ngFor=\"let cell of headRow\" role=\"columnheader\" title=\"{{ cell.title }}\">\n        {{ cell.content }}\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let row of bodyRows; trackBy: trackByBodyRow\" [ngClass]=\"row.classMap!\" role=\"row\">\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-cell-week\">\n        {{ row.weekNum }}\n      </td>\n      <td\n        *ngFor=\"let cell of row.dateCells; trackBy: trackByBodyColumn\"\n        title=\"{{ cell.title }}\"\n        role=\"gridcell\"\n        [ngClass]=\"cell.classMap!\"\n        (click)=\"cell.isDisabled ? null : cell.onClick()\"\n        (mouseenter)=\"cell.onMouseEnter()\"\n      >\n        <ng-container [ngSwitch]=\"prefixCls\">\n          <ng-container *ngSwitchCase=\"'ant-picker'\">\n            <ng-container [ngSwitch]=\"true\">\n              <ng-container *ngSwitchCase=\"isTemplateRef(cell.cellRender)\">\n                <!--           *ngSwitchCase not has type assertion support, the cellRender type here is TemplateRef -->\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                ></ng-container>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"isNonEmptyString(cell.cellRender)\">\n                <span [innerHTML]=\"cell.cellRender\"></span>\n              </ng-container>\n              <ng-container *ngSwitchDefault>\n                <div\n                  class=\"{{ prefixCls }}-cell-inner\"\n                  [attr.aria-selected]=\"cell.isSelected\"\n                  [attr.aria-disabled]=\"cell.isDisabled\"\n                >\n                  {{ cell.content }}\n                </div>\n              </ng-container>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'ant-picker-calendar'\">\n            <div\n              class=\"{{ prefixCls }}-date ant-picker-cell-inner\"\n              [class.ant-picker-calendar-date-today]=\"cell.isToday\"\n            >\n              <ng-container *ngIf=\"cell.fullCellRender; else defaultCell\">\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.fullCellRender); context: { $implicit: cell.value }\"\n                >\n                </ng-container>\n              </ng-container>\n              <ng-template #defaultCell>\n                <div class=\"{{ prefixCls }}-date-value\">{{ cell.content }}</div>\n                <div class=\"{{ prefixCls }}-date-content\">\n                  <ng-container\n                    *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                  >\n                  </ng-container>\n                </div>\n              </ng-template>\n            </div>\n          </ng-container>\n        </ng-container>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"
            }] }
];
/** @nocollapse */
YearTableComponent.ctorParameters = () => [
    { type: DateHelperService }
];
if (false) {
    /** @type {?} */
    YearTableComponent.prototype.MAX_ROW;
    /** @type {?} */
    YearTableComponent.prototype.MAX_COL;
    /**
     * @type {?}
     * @private
     */
    YearTableComponent.prototype.dateHelper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyLyIsInNvdXJjZXMiOlsibGliL3llYXItdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQTRCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQVdqRCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsYUFBYTs7OztJQUluRCxZQUFvQixVQUE2QjtRQUMvQyxLQUFLLEVBQUUsQ0FBQztRQURVLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBSGpELFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixZQUFPLEdBQUcsQ0FBQyxDQUFDO0lBSVosQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQixJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLFlBQVksSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQy9ELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7Ozs7SUFFRCxZQUFZOztjQUNKLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFOztjQUMxRCxTQUFTLEdBQUcsUUFBUSxDQUFDLEdBQUcsV0FBVyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxH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QyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7WUFqRkYsU0FBUyxTQUFDO2dCQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7Z0JBRS9DLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsV0FBVztnQkFDckIsb2tHQUFrQzthQUNuQzs7OztZQVhRLGlCQUFpQjs7OztJQWF4QixxQ0FBWTs7SUFDWixxQ0FBWTs7Ozs7SUFFQSx3Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB2YWx1ZUZ1bmN0aW9uUHJvcCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcbmltcG9ydCB7IEFic3RyYWN0VGFibGUgfSBmcm9tICcuL2Fic3RyYWN0LXRhYmxlJztcbmltcG9ydCB7IERhdGVCb2R5Um93LCBEYXRlQ2VsbCwgWWVhckNlbGwgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3llYXItdGFibGUnLFxuICBleHBvcnRBczogJ3llYXJUYWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnYWJzdHJhY3QtdGFibGUuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgWWVhclRhYmxlQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RUYWJsZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIE1BWF9ST1cgPSA0O1xuICBNQVhfQ09MID0gMztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcbiAgICBpZiAoY2hhbmdlcy52YWx1ZSB8fCBjaGFuZ2VzLmRpc2FibGVkRGF0ZSB8fCBjaGFuZ2VzLmFjdGl2ZURhdGUpIHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgbWFrZUhlYWRSb3coKTogRGF0ZUNlbGxbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgbWFrZUJvZHlSb3dzKCk6IERhdGVCb2R5Um93W10ge1xuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gdGhpcy5hY3RpdmVEYXRlICYmIHRoaXMuYWN0aXZlRGF0ZS5nZXRZZWFyKCk7XG4gICAgY29uc3Qgc3RhcnRZZWFyID0gcGFyc2VJbnQoYCR7Y3VycmVudFllYXIgLyAxMH1gLCAxMCkgKiAxMDtcbiAgICBjb25zdCBlbmRZZWFyID0gc3RhcnRZZWFyICsgOTtcbiAgICBjb25zdCBwcmV2aW91c1llYXIgPSBzdGFydFllYXIgLSAxO1xuXG4gICAgY29uc3QgeWVhcnM6IERhdGVCb2R5Um93W10gPSBbXTtcblxuICAgIGxldCB5ZWFyVmFsdWUgPSAwO1xuICAgIGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCB0aGlzLk1BWF9ST1c7IHJvd0luZGV4KyspIHtcbiAgICAgIGNvbnN0IHJvdzogRGF0ZUNlbGxbXSA9IFtdO1xuICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IHRoaXMuTUFYX0NPTDsgY29sSW5kZXgrKykge1xuICAgICAgICBjb25zdCB5ZWFyTnVtID0gcHJldmlvdXNZZWFyICsgeWVhclZhbHVlO1xuICAgICAgICBjb25zdCB5ZWFyID0gdGhpcy5hY3RpdmVEYXRlLnNldFllYXIoeWVhck51bSk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KHllYXIubmF0aXZlRGF0ZSwgJ3l5eXknKTtcbiAgICAgICAgY29uc3QgaXNEaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWREYXRlID8gdGhpcy5kaXNhYmxlZERhdGUoeWVhci5uYXRpdmVEYXRlKSA6IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGNlbGw6IFllYXJDZWxsID0ge1xuICAgICAgICAgIHZhbHVlOiB5ZWFyLm5hdGl2ZURhdGUsXG4gICAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgICBpc1NhbWVEZWNhZGU6IHllYXJOdW0gPj0gc3RhcnRZZWFyICYmIHllYXJOdW0gPD0gZW5kWWVhcixcbiAgICAgICAgICBpc1NlbGVjdGVkOiB5ZWFyTnVtID09PSAodGhpcy52YWx1ZSAmJiB0aGlzLnZhbHVlLmdldFllYXIoKSksXG4gICAgICAgICAgY29udGVudCxcbiAgICAgICAgICB0aXRsZTogY29udGVudCxcbiAgICAgICAgICBjbGFzc01hcDoge30sXG4gICAgICAgICAgY2VsbFJlbmRlcjogdmFsdWVGdW5jdGlvblByb3AodGhpcy5jZWxsUmVuZGVyISwgeWVhciksIC8vIEN1c3RvbWl6ZWQgY29udGVudFxuICAgICAgICAgIGZ1bGxDZWxsUmVuZGVyOiB2YWx1ZUZ1bmN0aW9uUHJvcCh0aGlzLmZ1bGxDZWxsUmVuZGVyISwgeWVhciksXG4gICAgICAgICAgb25DbGljazogKCkgPT4gdGhpcy5jaG9vc2VZZWFyKGNlbGwudmFsdWUuZ2V0RnVsbFllYXIoKSksIC8vIGRvbid0IHVzZSB5ZWFyVmFsdWUgaGVyZSxcbiAgICAgICAgICBvbk1vdXNlRW50ZXI6ICgpID0+IG51bGxcbiAgICAgICAgfTtcblxuICAgICAgICBjZWxsLmNsYXNzTWFwID0gdGhpcy5nZXRDbGFzc01hcChjZWxsKTtcblxuICAgICAgICByb3cucHVzaChjZWxsKTtcbiAgICAgICAgeWVhclZhbHVlKys7XG4gICAgICB9XG4gICAgICB5ZWFycy5wdXNoKHsgZGF0ZUNlbGxzOiByb3cgfSk7XG4gICAgfVxuICAgIHJldHVybiB5ZWFycztcbiAgfVxuXG4gIGdldENsYXNzTWFwKGNlbGw6IFllYXJDZWxsKTogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0ge1xuICAgIHJldHVybiB7XG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNlbGxgXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2VsbC1pbi12aWV3YF06ICEhY2VsbC5pc1NhbWVEZWNhZGUsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNlbGwtc2VsZWN0ZWRgXTogY2VsbC5pc1NlbGVjdGVkLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jZWxsLWRpc2FibGVkYF06IGNlbGwuaXNEaXNhYmxlZFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGNob29zZVllYXIoeWVhcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuYWN0aXZlRGF0ZS5zZXRZZWFyKHllYXIpO1xuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG59XG4iXX0=