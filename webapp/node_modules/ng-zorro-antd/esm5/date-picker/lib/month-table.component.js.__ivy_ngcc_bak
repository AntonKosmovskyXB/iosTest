/**
 * @fileoverview added by tsickle
 * Generated from: lib/month-table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { valueFunctionProp } from 'ng-zorro-antd/core/util';
import { DateHelperService } from 'ng-zorro-antd/i18n';
import { AbstractTable } from './abstract-table';
var MonthTableComponent = /** @class */ (function (_super) {
    __extends(MonthTableComponent, _super);
    function MonthTableComponent(dateHelper) {
        var _this = _super.call(this) || this;
        _this.dateHelper = dateHelper;
        _this.MAX_ROW = 4;
        _this.MAX_COL = 3;
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    MonthTableComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        if (changes.value || changes.disabledDate || changes.activeDate) {
            this.render();
        }
    };
    /**
     * @return {?}
     */
    MonthTableComponent.prototype.makeHeadRow = /**
     * @return {?}
     */
    function () {
        return [];
    };
    /**
     * @return {?}
     */
    MonthTableComponent.prototype.makeBodyRows = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var months = [];
        /** @type {?} */
        var currentMonth = this.value && this.value.getMonth();
        /** @type {?} */
        var monthValue = 0;
        for (var rowIndex = 0; rowIndex < this.MAX_ROW; rowIndex++) {
            /** @type {?} */
            var row = [];
            var _loop_1 = function (colIndex) {
                /** @type {?} */
                var month = this_1.activeDate.setMonth(monthValue);
                /** @type {?} */
                var isDisabled = this_1.disabledDate ? this_1.disabledDate(month.nativeDate) : false;
                /** @type {?} */
                var content = this_1.dateHelper.format(month.nativeDate, 'MMM');
                /** @type {?} */
                var cell = {
                    value: month.nativeDate,
                    isDisabled: isDisabled,
                    isSelected: monthValue === currentMonth,
                    content: content,
                    title: content,
                    classMap: {},
                    cellRender: valueFunctionProp((/** @type {?} */ (this_1.cellRender)), month),
                    // Customized content
                    fullCellRender: valueFunctionProp((/** @type {?} */ (this_1.fullCellRender)), month),
                    onClick: (/**
                     * @return {?}
                     */
                    function () { return _this.chooseMonth(cell.value.getMonth()); }),
                    // don't use monthValue here,
                    onMouseEnter: (/**
                     * @return {?}
                     */
                    function () { return null; })
                };
                cell.classMap = this_1.getClassMap(cell);
                row.push(cell);
                monthValue++;
            };
            var this_1 = this;
            for (var colIndex = 0; colIndex < this.MAX_COL; colIndex++) {
                _loop_1(colIndex);
            }
            months.push({ dateCells: row });
        }
        return months;
    };
    /**
     * @param {?} cell
     * @return {?}
     */
    MonthTableComponent.prototype.getClassMap = /**
     * @param {?} cell
     * @return {?}
     */
    function (cell) {
        var _a;
        return _a = {},
            _a["ant-picker-cell"] = true,
            _a["ant-picker-cell-in-view"] = true,
            _a["ant-picker-cell-selected"] = cell.isSelected,
            _a["ant-picker-cell-disabled"] = cell.isDisabled,
            _a;
    };
    /**
     * @private
     * @param {?} month
     * @return {?}
     */
    MonthTableComponent.prototype.chooseMonth = /**
     * @private
     * @param {?} month
     * @return {?}
     */
    function (month) {
        this.value = this.activeDate.setMonth(month);
        this.valueChange.emit(this.value);
    };
    MonthTableComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'month-table',
                    exportAs: 'monthTable',
                    template: "<table class=\"ant-picker-content\" cellspacing=\"0\" role=\"grid\">\n  <thead *ngIf=\"headRow && headRow.length > 0\">\n    <tr role=\"row\">\n      <th *ngIf=\"showWeek\" role=\"columnheader\"></th>\n      <th *ngFor=\"let cell of headRow\" role=\"columnheader\" title=\"{{ cell.title }}\">\n        {{ cell.content }}\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let row of bodyRows; trackBy: trackByBodyRow\" [ngClass]=\"row.classMap!\" role=\"row\">\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-cell-week\">\n        {{ row.weekNum }}\n      </td>\n      <td\n        *ngFor=\"let cell of row.dateCells; trackBy: trackByBodyColumn\"\n        title=\"{{ cell.title }}\"\n        role=\"gridcell\"\n        [ngClass]=\"cell.classMap!\"\n        (click)=\"cell.isDisabled ? null : cell.onClick()\"\n        (mouseenter)=\"cell.onMouseEnter()\"\n      >\n        <ng-container [ngSwitch]=\"prefixCls\">\n          <ng-container *ngSwitchCase=\"'ant-picker'\">\n            <ng-container [ngSwitch]=\"true\">\n              <ng-container *ngSwitchCase=\"isTemplateRef(cell.cellRender)\">\n                <!--           *ngSwitchCase not has type assertion support, the cellRender type here is TemplateRef -->\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                ></ng-container>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"isNonEmptyString(cell.cellRender)\">\n                <span [innerHTML]=\"cell.cellRender\"></span>\n              </ng-container>\n              <ng-container *ngSwitchDefault>\n                <div\n                  class=\"{{ prefixCls }}-cell-inner\"\n                  [attr.aria-selected]=\"cell.isSelected\"\n                  [attr.aria-disabled]=\"cell.isDisabled\"\n                >\n                  {{ cell.content }}\n                </div>\n              </ng-container>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'ant-picker-calendar'\">\n            <div\n              class=\"{{ prefixCls }}-date ant-picker-cell-inner\"\n              [class.ant-picker-calendar-date-today]=\"cell.isToday\"\n            >\n              <ng-container *ngIf=\"cell.fullCellRender; else defaultCell\">\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.fullCellRender); context: { $implicit: cell.value }\"\n                >\n                </ng-container>\n              </ng-container>\n              <ng-template #defaultCell>\n                <div class=\"{{ prefixCls }}-date-value\">{{ cell.content }}</div>\n                <div class=\"{{ prefixCls }}-date-content\">\n                  <ng-container\n                    *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                  >\n                  </ng-container>\n                </div>\n              </ng-template>\n            </div>\n          </ng-container>\n        </ng-container>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"
                }] }
    ];
    /** @nocollapse */
    MonthTableComponent.ctorParameters = function () { return [
        { type: DateHelperService }
    ]; };
    return MonthTableComponent;
}(AbstractTable));
export { MonthTableComponent };
if (false) {
    /** @type {?} */
    MonthTableComponent.prototype.MAX_ROW;
    /** @type {?} */
    MonthTableComponent.prototype.MAX_COL;
    /**
     * @type {?}
     * @private
     */
    MonthTableComponent.prototype.dateHelper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9tb250aC10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQTRCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUdqRDtJQVF5Qyx1Q0FBYTtJQUlwRCw2QkFBb0IsVUFBNkI7UUFBakQsWUFDRSxpQkFBTyxTQUNSO1FBRm1CLGdCQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUhqRCxhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osYUFBTyxHQUFHLENBQUMsQ0FBQzs7SUFJWixDQUFDOzs7OztJQUVELHlDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxpQkFBTSxXQUFXLFlBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxZQUFZLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUMvRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDRSxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7Ozs7SUFFRCwwQ0FBWTs7O0lBQVo7UUFBQSxpQkFpQ0M7O1lBaENPLE1BQU0sR0FBa0IsRUFBRTs7WUFDMUIsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7O1lBRXBELFVBQVUsR0FBRyxDQUFDO1FBQ2xCLEtBQUssSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFOztnQkFDcEQsR0FBRyxHQUFlLEVBQUU7b0NBQ2pCLFFBQVE7O29CQUNULEtBQUssR0FBRyxPQUFLLFVBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDOztvQkFDNUMsVUFBVSxHQUFHLE9BQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxPQUFLLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7O29CQUM1RSxPQUFPLEdBQUcsT0FBSyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDOztvQkFFekQsSUFBSSxHQUFhO29CQUNyQixLQUFLLEVBQUUsS0FBSyxDQUFDLFVBQVU7b0JBQ3ZCLFVBQVUsWUFBQTtvQkFDVixVQUFVLEVBQUUsVUFBVSxLQUFLLFlBQVk7b0JBQ3ZDLE9BQU8sU0FBQTtvQkFDUCxLQUFLLEVBQUUsT0FBTztvQkFDZCxRQUFRLEVBQUUsRUFBRTtvQkFDWixVQUFVLEVBQUUsaUJBQWlCLENBQUMsbUJBQUEsT0FBSyxVQUFVLEVBQUMsRUFBRSxLQUFLLENBQUM7O29CQUN0RCxjQUFjLEVBQUUsaUJBQWlCLENBQUMsbUJBQUEsT0FBSyxjQUFjLEVBQUMsRUFBRSxLQUFLLENBQUM7b0JBQzlELE9BQU87OztvQkFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQXZDLENBQXVDLENBQUE7O29CQUN0RCxZQUFZOzs7b0JBQUUsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUE7aUJBQ3pCO2dCQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBSyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRXZDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2YsVUFBVSxFQUFFLENBQUM7OztZQXJCZixLQUFLLElBQUksUUFBUSxHQUFHLENBQUMsRUFBRSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUU7d0JBQWpELFFBQVE7YUFzQmhCO1lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFRCx5Q0FBVzs7OztJQUFYLFVBQVksSUFBYTs7UUFDdkI7WUFDRSxHQUFDLGlCQUFpQixJQUFHLElBQUk7WUFDekIsR0FBQyx5QkFBeUIsSUFBRyxJQUFJO1lBQ2pDLEdBQUMsMEJBQTBCLElBQUcsSUFBSSxDQUFDLFVBQVU7WUFDN0MsR0FBQywwQkFBMEIsSUFBRyxJQUFJLENBQUMsVUFBVTtlQUM3QztJQUNKLENBQUM7Ozs7OztJQUVPLHlDQUFXOzs7OztJQUFuQixVQUFvQixLQUFhO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7O2dCQTFFRixTQUFTLFNBQUM7b0JBQ1QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztvQkFFL0MsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSxZQUFZO29CQUN0Qixva0dBQWtDO2lCQUNuQzs7OztnQkFYUSxpQkFBaUI7O0lBK0UxQiwwQkFBQztDQUFBLEFBM0VELENBUXlDLGFBQWEsR0FtRXJEO1NBbkVZLG1CQUFtQjs7O0lBQzlCLHNDQUFZOztJQUNaLHNDQUFZOzs7OztJQUVBLHlDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHZhbHVlRnVuY3Rpb25Qcm9wIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgQWJzdHJhY3RUYWJsZSB9IGZyb20gJy4vYWJzdHJhY3QtdGFibGUnO1xuaW1wb3J0IHsgRGF0ZUJvZHlSb3csIERhdGVDZWxsLCBEYXlDZWxsIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdtb250aC10YWJsZScsXG4gIGV4cG9ydEFzOiAnbW9udGhUYWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnYWJzdHJhY3QtdGFibGUuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTW9udGhUYWJsZUNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0VGFibGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBNQVhfUk9XID0gNDtcbiAgTUFYX0NPTCA9IDM7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XG4gICAgaWYgKGNoYW5nZXMudmFsdWUgfHwgY2hhbmdlcy5kaXNhYmxlZERhdGUgfHwgY2hhbmdlcy5hY3RpdmVEYXRlKSB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIG1ha2VIZWFkUm93KCk6IERhdGVDZWxsW10ge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIG1ha2VCb2R5Um93cygpOiBEYXRlQm9keVJvd1tdIHtcbiAgICBjb25zdCBtb250aHM6IERhdGVCb2R5Um93W10gPSBbXTtcbiAgICBjb25zdCBjdXJyZW50TW9udGggPSB0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUuZ2V0TW9udGgoKTtcblxuICAgIGxldCBtb250aFZhbHVlID0gMDtcbiAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgdGhpcy5NQVhfUk9XOyByb3dJbmRleCsrKSB7XG4gICAgICBjb25zdCByb3c6IERhdGVDZWxsW10gPSBbXTtcbiAgICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCB0aGlzLk1BWF9DT0w7IGNvbEluZGV4KyspIHtcbiAgICAgICAgY29uc3QgbW9udGggPSB0aGlzLmFjdGl2ZURhdGUuc2V0TW9udGgobW9udGhWYWx1ZSk7XG4gICAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkRGF0ZSA/IHRoaXMuZGlzYWJsZWREYXRlKG1vbnRoLm5hdGl2ZURhdGUpIDogZmFsc2U7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KG1vbnRoLm5hdGl2ZURhdGUsICdNTU0nKTtcblxuICAgICAgICBjb25zdCBjZWxsOiBEYXRlQ2VsbCA9IHtcbiAgICAgICAgICB2YWx1ZTogbW9udGgubmF0aXZlRGF0ZSxcbiAgICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICAgIGlzU2VsZWN0ZWQ6IG1vbnRoVmFsdWUgPT09IGN1cnJlbnRNb250aCxcbiAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgIHRpdGxlOiBjb250ZW50LFxuICAgICAgICAgIGNsYXNzTWFwOiB7fSxcbiAgICAgICAgICBjZWxsUmVuZGVyOiB2YWx1ZUZ1bmN0aW9uUHJvcCh0aGlzLmNlbGxSZW5kZXIhLCBtb250aCksIC8vIEN1c3RvbWl6ZWQgY29udGVudFxuICAgICAgICAgIGZ1bGxDZWxsUmVuZGVyOiB2YWx1ZUZ1bmN0aW9uUHJvcCh0aGlzLmZ1bGxDZWxsUmVuZGVyISwgbW9udGgpLFxuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuY2hvb3NlTW9udGgoY2VsbC52YWx1ZS5nZXRNb250aCgpKSwgLy8gZG9uJ3QgdXNlIG1vbnRoVmFsdWUgaGVyZSxcbiAgICAgICAgICBvbk1vdXNlRW50ZXI6ICgpID0+IG51bGxcbiAgICAgICAgfTtcblxuICAgICAgICBjZWxsLmNsYXNzTWFwID0gdGhpcy5nZXRDbGFzc01hcChjZWxsKTtcblxuICAgICAgICByb3cucHVzaChjZWxsKTtcbiAgICAgICAgbW9udGhWYWx1ZSsrO1xuICAgICAgfVxuICAgICAgbW9udGhzLnB1c2goeyBkYXRlQ2VsbHM6IHJvdyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG1vbnRocztcbiAgfVxuXG4gIGdldENsYXNzTWFwKGNlbGw6IERheUNlbGwpOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtgYW50LXBpY2tlci1jZWxsYF06IHRydWUsXG4gICAgICBbYGFudC1waWNrZXItY2VsbC1pbi12aWV3YF06IHRydWUsXG4gICAgICBbYGFudC1waWNrZXItY2VsbC1zZWxlY3RlZGBdOiBjZWxsLmlzU2VsZWN0ZWQsXG4gICAgICBbYGFudC1waWNrZXItY2VsbC1kaXNhYmxlZGBdOiBjZWxsLmlzRGlzYWJsZWRcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBjaG9vc2VNb250aChtb250aDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuYWN0aXZlRGF0ZS5zZXRNb250aChtb250aCk7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG59XG4iXX0=