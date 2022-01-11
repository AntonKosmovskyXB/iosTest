/**
 * @fileoverview added by tsickle
 * Generated from: lib/date-table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends, __read } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core/time';
import { valueFunctionProp } from 'ng-zorro-antd/core/util';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { AbstractTable } from './abstract-table';
import { transCompatFormat } from './util';
var DateTableComponent = /** @class */ (function (_super) {
    __extends(DateTableComponent, _super);
    function DateTableComponent(i18n, dateHelper) {
        var _this = _super.call(this) || this;
        _this.i18n = i18n;
        _this.dateHelper = dateHelper;
        _this.selectedValue = []; // Range ONLY
        // Range ONLY
        _this.hoverValue = []; // Range ONLY
        // Range ONLY
        _this.dayHover = new EventEmitter(); // Emitted when hover on a day by mouse enter
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    DateTableComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        if (this.isDateRealChange(changes.activeDate) ||
            this.isDateRealChange(changes.value) ||
            this.isDateRealChange(changes.selectedValue) ||
            this.isDateRealChange(changes.hoverValue)) {
            this.render();
        }
    };
    /**
     * @private
     * @param {?} change
     * @return {?}
     */
    DateTableComponent.prototype.isDateRealChange = /**
     * @private
     * @param {?} change
     * @return {?}
     */
    function (change) {
        if (change) {
            /** @type {?} */
            var previousValue_1 = change.previousValue;
            /** @type {?} */
            var currentValue = change.currentValue;
            if (Array.isArray(currentValue)) {
                return (!Array.isArray(previousValue_1) ||
                    currentValue.length !== previousValue_1.length ||
                    currentValue.some((/**
                     * @param {?} value
                     * @param {?} index
                     * @return {?}
                     */
                    function (value, index) {
                        /** @type {?} */
                        var previousCandyDate = previousValue_1[index];
                        return previousCandyDate instanceof CandyDate ? previousCandyDate.isSameDay(value) : previousCandyDate !== value;
                    })));
            }
            else {
                return !this.isSameDate((/** @type {?} */ (previousValue_1)), currentValue);
            }
        }
        return false;
    };
    /**
     * @private
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    DateTableComponent.prototype.isSameDate = /**
     * @private
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    function (left, right) {
        return (!left && !right) || (left && right && right.isSameDay(left));
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    DateTableComponent.prototype.changeValueFromInside = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // Only change date not change time
        this.activeDate = this.activeDate.setYear(value.getYear()).setMonth(value.getMonth()).setDate(value.getDate());
        this.valueChange.emit(this.activeDate);
        if (!this.activeDate.isSameMonth(this.value)) {
            this.render();
        }
    };
    /**
     * @return {?}
     */
    DateTableComponent.prototype.makeHeadRow = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var weekDays = [];
        /** @type {?} */
        var start = this.activeDate.calendarStart({ weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
        for (var colIndex = 0; colIndex < this.MAX_COL; colIndex++) {
            /** @type {?} */
            var day = start.addDays(colIndex);
            weekDays.push({
                value: day.nativeDate,
                title: this.dateHelper.format(day.nativeDate, 'E'),
                // eg. Tue
                content: this.dateHelper.format(day.nativeDate, this.getVeryShortWeekFormat()),
                // eg. Tu,
                isSelected: false,
                isDisabled: false,
                onClick: /**
                 * @return {?}
                 */
                function () { },
                onMouseEnter: /**
                 * @return {?}
                 */
                function () { }
            });
        }
        return weekDays;
    };
    /**
     * @private
     * @return {?}
     */
    DateTableComponent.prototype.getVeryShortWeekFormat = /**
     * @private
     * @return {?}
     */
    function () {
        return this.i18n.getLocaleId().toLowerCase().indexOf('zh') === 0 ? 'EEEEE' : 'EEEEEE'; // Use extreme short for chinese
    };
    /**
     * @return {?}
     */
    DateTableComponent.prototype.makeBodyRows = /**
     * @return {?}
     */
    function () {
        var _a;
        var _this = this;
        var _b;
        /** @type {?} */
        var weekRows = [];
        /** @type {?} */
        var firstDayOfMonth = this.activeDate.calendarStart({ weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
        for (var week = 0; week < this.MAX_ROW; week++) {
            /** @type {?} */
            var weekStart = firstDayOfMonth.addDays(week * 7);
            /** @type {?} */
            var row = {
                isActive: false,
                isCurrent: false,
                dateCells: [],
                year: weekStart.getYear()
            };
            var _loop_1 = function (day) {
                /** @type {?} */
                var date = weekStart.addDays(day);
                /** @type {?} */
                var dateFormat = transCompatFormat(this_1.i18n.getLocaleData('DatePicker.lang.dateFormat', 'YYYY-MM-DD'));
                /** @type {?} */
                var title = this_1.dateHelper.format(date.nativeDate, dateFormat);
                /** @type {?} */
                var label = this_1.dateHelper.format(date.nativeDate, 'dd');
                /** @type {?} */
                var cell = {
                    value: date.nativeDate,
                    label: label,
                    isSelected: false,
                    isDisabled: false,
                    isToday: false,
                    title: title,
                    cellRender: valueFunctionProp((/** @type {?} */ (this_1.cellRender)), date),
                    // Customized content
                    fullCellRender: valueFunctionProp((/** @type {?} */ (this_1.fullCellRender)), date),
                    content: "" + date.getDate(),
                    onClick: (/**
                     * @return {?}
                     */
                    function () { return _this.changeValueFromInside(date); }),
                    onMouseEnter: (/**
                     * @return {?}
                     */
                    function () { return _this.dayHover.emit(date); })
                };
                if (this_1.showWeek && !row.weekNum) {
                    row.weekNum = this_1.dateHelper.getISOWeek(date.nativeDate);
                }
                if (date.isToday()) {
                    cell.isToday = true;
                    row.isCurrent = true;
                }
                if (((Array.isArray(this_1.selectedValue) && this_1.selectedValue.length > 0) || (this_1.hoverValue && this_1.hoverValue.length > 0)) &&
                    date.isSameMonth(this_1.activeDate)) {
                    var _a = __read(this_1.hoverValue, 2), startHover = _a[0], endHover = _a[1];
                    var _b = __read(this_1.selectedValue, 2), startSelected = _b[0], endSelected = _b[1];
                    // Selected
                    if (startSelected && startSelected.isSameDay(date)) {
                        cell.isSelectedStartDate = true;
                        cell.isSelected = true;
                        row.isActive = true;
                    }
                    if (endSelected && endSelected.isSameDay(date)) {
                        cell.isSelectedEndDate = true;
                        cell.isSelected = true;
                        row.isActive = true;
                    }
                    else if (date.isAfterDay(startSelected) && date.isBeforeDay(endSelected)) {
                        cell.isInSelectedRange = true;
                    }
                    if (startHover && endHover) {
                        // Hover
                        if (startHover.isSameDay(date)) {
                            cell.isHoverStartDate = true;
                        }
                        if (endHover.isSameDay(date)) {
                            cell.isHoverEndDate = true;
                        }
                        if (date.isLastDayOfMonth()) {
                            cell.isLastDayOfMonth = true;
                        }
                        if (date.isFirstDayOfMonth()) {
                            cell.isFirstDayOfMonth = true;
                        }
                    }
                    if (startSelected && !endSelected) {
                        cell.isStartSingle = true;
                    }
                    if (!startSelected && endSelected) {
                        cell.isEndSingle = true;
                    }
                    if (date.isAfterDay(startHover) && date.isBeforeDay(endHover)) {
                        cell.isInHoverRange = true;
                    }
                }
                else if (date.isSameDay(this_1.value)) {
                    cell.isSelected = true;
                    row.isActive = true;
                }
                if ((_b = this_1.disabledDate) === null || _b === void 0 ? void 0 : _b.call(this_1, date.nativeDate)) {
                    cell.isDisabled = true;
                }
                cell.classMap = this_1.getClassMap(cell);
                row.dateCells.push(cell);
            };
            var this_1 = this;
            for (var day = 0; day < 7; day++) {
                _loop_1(day);
            }
            row.classMap = (_a = {},
                _a[this.prefixCls + "-week-panel-row"] = this.showWeek,
                _a[this.prefixCls + "-week-panel-row-selected"] = this.showWeek && row.isActive,
                _a);
            weekRows.push(row);
        }
        return weekRows;
    };
    /**
     * @param {?} cell
     * @return {?}
     */
    DateTableComponent.prototype.getClassMap = /**
     * @param {?} cell
     * @return {?}
     */
    function (cell) {
        var _a;
        /** @type {?} */
        var date = new CandyDate(cell.value);
        return _a = {},
            _a["ant-picker-cell"] = true,
            _a["ant-picker-cell-today"] = !!cell.isToday,
            _a["ant-picker-cell-in-view"] = date.isSameMonth(this.activeDate),
            _a["ant-picker-cell-selected"] = cell.isSelected,
            _a["ant-picker-cell-disabled"] = cell.isDisabled,
            _a["ant-picker-cell-in-range"] = !!cell.isInSelectedRange,
            _a["ant-picker-cell-range-start"] = !!cell.isSelectedStartDate,
            _a["ant-picker-cell-range-end"] = !!cell.isSelectedEndDate,
            _a["ant-picker-cell-range-start-single"] = !!cell.isStartSingle,
            _a["ant-picker-cell-range-end-single"] = !!cell.isEndSingle,
            _a["ant-picker-cell-range-hover"] = !!cell.isInHoverRange,
            _a["ant-picker-cell-range-hover-start"] = !!cell.isHoverStartDate,
            _a["ant-picker-cell-range-hover-end"] = !!cell.isHoverEndDate,
            _a["ant-picker-cell-range-hover-edge-start"] = !!cell.isFirstDayOfMonth,
            _a["ant-picker-cell-range-hover-edge-end"] = !!cell.isLastDayOfMonth,
            _a;
    };
    /**
     * @param {?} _index
     * @param {?} item
     * @return {?}
     */
    DateTableComponent.prototype.trackByBodyRow = /**
     * @param {?} _index
     * @param {?} item
     * @return {?}
     */
    function (_index, item) {
        return item.year + "-" + item.weekNum;
    };
    /**
     * @param {?} _index
     * @param {?} item
     * @return {?}
     */
    DateTableComponent.prototype.trackByBodyColumn = /**
     * @param {?} _index
     * @param {?} item
     * @return {?}
     */
    function (_index, item) {
        return (/** @type {?} */ (item.title));
    };
    DateTableComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'date-table',
                    exportAs: 'dateTable',
                    template: "<table class=\"ant-picker-content\" cellspacing=\"0\" role=\"grid\">\n  <thead *ngIf=\"headRow && headRow.length > 0\">\n    <tr role=\"row\">\n      <th *ngIf=\"showWeek\" role=\"columnheader\"></th>\n      <th *ngFor=\"let cell of headRow\" role=\"columnheader\" title=\"{{ cell.title }}\">\n        {{ cell.content }}\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let row of bodyRows; trackBy: trackByBodyRow\" [ngClass]=\"row.classMap!\" role=\"row\">\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-cell-week\">\n        {{ row.weekNum }}\n      </td>\n      <td\n        *ngFor=\"let cell of row.dateCells; trackBy: trackByBodyColumn\"\n        title=\"{{ cell.title }}\"\n        role=\"gridcell\"\n        [ngClass]=\"cell.classMap!\"\n        (click)=\"cell.isDisabled ? null : cell.onClick()\"\n        (mouseenter)=\"cell.onMouseEnter()\"\n      >\n        <ng-container [ngSwitch]=\"prefixCls\">\n          <ng-container *ngSwitchCase=\"'ant-picker'\">\n            <ng-container [ngSwitch]=\"true\">\n              <ng-container *ngSwitchCase=\"isTemplateRef(cell.cellRender)\">\n                <!--           *ngSwitchCase not has type assertion support, the cellRender type here is TemplateRef -->\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                ></ng-container>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"isNonEmptyString(cell.cellRender)\">\n                <span [innerHTML]=\"cell.cellRender\"></span>\n              </ng-container>\n              <ng-container *ngSwitchDefault>\n                <div\n                  class=\"{{ prefixCls }}-cell-inner\"\n                  [attr.aria-selected]=\"cell.isSelected\"\n                  [attr.aria-disabled]=\"cell.isDisabled\"\n                >\n                  {{ cell.content }}\n                </div>\n              </ng-container>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'ant-picker-calendar'\">\n            <div\n              class=\"{{ prefixCls }}-date ant-picker-cell-inner\"\n              [class.ant-picker-calendar-date-today]=\"cell.isToday\"\n            >\n              <ng-container *ngIf=\"cell.fullCellRender; else defaultCell\">\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.fullCellRender); context: { $implicit: cell.value }\"\n                >\n                </ng-container>\n              </ng-container>\n              <ng-template #defaultCell>\n                <div class=\"{{ prefixCls }}-date-value\">{{ cell.content }}</div>\n                <div class=\"{{ prefixCls }}-date-content\">\n                  <ng-container\n                    *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                  >\n                  </ng-container>\n                </div>\n              </ng-template>\n            </div>\n          </ng-container>\n        </ng-container>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"
                }] }
    ];
    /** @nocollapse */
    DateTableComponent.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: DateHelperService }
    ]; };
    DateTableComponent.propDecorators = {
        locale: [{ type: Input }],
        selectedValue: [{ type: Input }],
        hoverValue: [{ type: Input }],
        dayHover: [{ type: Output }]
    };
    return DateTableComponent;
}(AbstractTable));
export { DateTableComponent };
if (false) {
    /** @type {?} */
    DateTableComponent.prototype.locale;
    /** @type {?} */
    DateTableComponent.prototype.selectedValue;
    /** @type {?} */
    DateTableComponent.prototype.hoverValue;
    /** @type {?} */
    DateTableComponent.prototype.dayHover;
    /**
     * @type {?}
     * @private
     */
    DateTableComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    DateTableComponent.prototype.dateHelper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2RhdGUtdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFHTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTVELE9BQU8sRUFBRSxpQkFBaUIsRUFBMkIsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUUzQztJQVF3QyxzQ0FBYTtJQU9uRCw0QkFBb0IsSUFBbUIsRUFBVSxVQUE2QjtRQUE5RSxZQUNFLGlCQUFPLFNBQ1I7UUFGbUIsVUFBSSxHQUFKLElBQUksQ0FBZTtRQUFVLGdCQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUxyRSxtQkFBYSxHQUFnQixFQUFFLENBQUMsQ0FBQyxhQUFhOztRQUM5QyxnQkFBVSxHQUFnQixFQUFFLENBQUMsQ0FBQyxhQUFhOztRQUVqQyxjQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQyxDQUFDLDZDQUE2Qzs7SUFJMUcsQ0FBQzs7Ozs7SUFFRCx3Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsaUJBQU0sV0FBVyxZQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLElBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFDekMsSUFBSSxDQUFDLGdCQUFn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RSx3Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3RpbWUnO1xuaW1wb3J0IHsgdmFsdWVGdW5jdGlvblByb3AgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5cbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlLCBOekNhbGVuZGFySTE4bkludGVyZmFjZSwgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQgeyBBYnN0cmFjdFRhYmxlIH0gZnJvbSAnLi9hYnN0cmFjdC10YWJsZSc7XG5pbXBvcnQgeyBEYXRlQm9keVJvdywgRGF0ZUNlbGwsIERheUNlbGwgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyB0cmFuc0NvbXBhdEZvcm1hdCB9IGZyb20gJy4vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2RhdGUtdGFibGUnLFxuICBleHBvcnRBczogJ2RhdGVUYWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hYnN0cmFjdC10YWJsZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEYXRlVGFibGVDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdFRhYmxlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBASW5wdXQoKSBsb2NhbGUhOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcbiAgQElucHV0KCkgc2VsZWN0ZWRWYWx1ZTogQ2FuZHlEYXRlW10gPSBbXTsgLy8gUmFuZ2UgT05MWVxuICBASW5wdXQoKSBob3ZlclZhbHVlOiBDYW5keURhdGVbXSA9IFtdOyAvLyBSYW5nZSBPTkxZXG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGRheUhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7IC8vIEVtaXR0ZWQgd2hlbiBob3ZlciBvbiBhIGRheSBieSBtb3VzZSBlbnRlclxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSwgcHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XG4gICAgaWYgKFxuICAgICAgdGhpcy5pc0RhdGVSZWFsQ2hhbmdlKGNoYW5nZXMuYWN0aXZlRGF0ZSkgfHxcbiAgICAgIHRoaXMuaXNEYXRlUmVhbENoYW5nZShjaGFuZ2VzLnZhbHVlKSB8fFxuICAgICAgdGhpcy5pc0RhdGVSZWFsQ2hhbmdlKGNoYW5nZXMuc2VsZWN0ZWRWYWx1ZSkgfHxcbiAgICAgIHRoaXMuaXNEYXRlUmVhbENoYW5nZShjaGFuZ2VzLmhvdmVyVmFsdWUpXG4gICAgKSB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNEYXRlUmVhbENoYW5nZShjaGFuZ2U6IFNpbXBsZUNoYW5nZSk6IGJvb2xlYW4ge1xuICAgIGlmIChjaGFuZ2UpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWU6IENhbmR5RGF0ZSB8IENhbmR5RGF0ZVtdID0gY2hhbmdlLnByZXZpb3VzVmFsdWU7XG4gICAgICBjb25zdCBjdXJyZW50VmFsdWU6IENhbmR5RGF0ZSB8IENhbmR5RGF0ZVtdID0gY2hhbmdlLmN1cnJlbnRWYWx1ZTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGN1cnJlbnRWYWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAhQXJyYXkuaXNBcnJheShwcmV2aW91c1ZhbHVlKSB8fFxuICAgICAgICAgIGN1cnJlbnRWYWx1ZS5sZW5ndGggIT09IHByZXZpb3VzVmFsdWUubGVuZ3RoIHx8XG4gICAgICAgICAgY3VycmVudFZhbHVlLnNvbWUoKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNDYW5keURhdGUgPSBwcmV2aW91c1ZhbHVlW2luZGV4XTtcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91c0NhbmR5RGF0ZSBpbnN0YW5jZW9mIENhbmR5RGF0ZSA/IHByZXZpb3VzQ2FuZHlEYXRlLmlzU2FtZURheSh2YWx1ZSkgOiBwcmV2aW91c0NhbmR5RGF0ZSAhPT0gdmFsdWU7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5pc1NhbWVEYXRlKHByZXZpb3VzVmFsdWUgYXMgQ2FuZHlEYXRlLCBjdXJyZW50VmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIGlzU2FtZURhdGUobGVmdDogQ2FuZHlEYXRlLCByaWdodDogQ2FuZHlEYXRlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICghbGVmdCAmJiAhcmlnaHQpIHx8IChsZWZ0ICYmIHJpZ2h0ICYmIHJpZ2h0LmlzU2FtZURheShsZWZ0KSk7XG4gIH1cblxuICBwcml2YXRlIGNoYW5nZVZhbHVlRnJvbUluc2lkZSh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XG4gICAgLy8gT25seSBjaGFuZ2UgZGF0ZSBub3QgY2hhbmdlIHRpbWVcbiAgICB0aGlzLmFjdGl2ZURhdGUgPSB0aGlzLmFjdGl2ZURhdGUuc2V0WWVhcih2YWx1ZS5nZXRZZWFyKCkpLnNldE1vbnRoKHZhbHVlLmdldE1vbnRoKCkpLnNldERhdGUodmFsdWUuZ2V0RGF0ZSgpKTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy5hY3RpdmVEYXRlKTtcblxuICAgIGlmICghdGhpcy5hY3RpdmVEYXRlLmlzU2FtZU1vbnRoKHRoaXMudmFsdWUpKSB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIG1ha2VIZWFkUm93KCk6IERheUNlbGxbXSB7XG4gICAgY29uc3Qgd2Vla0RheXM6IERheUNlbGxbXSA9IFtdO1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5hY3RpdmVEYXRlLmNhbGVuZGFyU3RhcnQoeyB3ZWVrU3RhcnRzT246IHRoaXMuZGF0ZUhlbHBlci5nZXRGaXJzdERheU9mV2VlaygpIH0pO1xuICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCB0aGlzLk1BWF9DT0w7IGNvbEluZGV4KyspIHtcbiAgICAgIGNvbnN0IGRheSA9IHN0YXJ0LmFkZERheXMoY29sSW5kZXgpO1xuICAgICAgd2Vla0RheXMucHVzaCh7XG4gICAgICAgIHZhbHVlOiBkYXkubmF0aXZlRGF0ZSxcbiAgICAgICAgdGl0bGU6IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQoZGF5Lm5hdGl2ZURhdGUsICdFJyksIC8vIGVnLiBUdWVcbiAgICAgICAgY29udGVudDogdGhpcy5kYXRlSGVscGVyLmZvcm1hdChkYXkubmF0aXZlRGF0ZSwgdGhpcy5nZXRWZXJ5U2hvcnRXZWVrRm9ybWF0KCkpLCAvLyBlZy4gVHUsXG4gICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICBpc0Rpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgb25DbGljaygpOiB2b2lkIHt9LFxuICAgICAgICBvbk1vdXNlRW50ZXIoKTogdm9pZCB7fVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB3ZWVrRGF5cztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VmVyeVNob3J0V2Vla0Zvcm1hdCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmkxOG4uZ2V0TG9jYWxlSWQoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3poJykgPT09IDAgPyAnRUVFRUUnIDogJ0VFRUVFRSc7IC8vIFVzZSBleHRyZW1lIHNob3J0IGZvciBjaGluZXNlXG4gIH1cblxuICBtYWtlQm9keVJvd3MoKTogRGF0ZUJvZHlSb3dbXSB7XG4gICAgY29uc3Qgd2Vla1Jvd3M6IERhdGVCb2R5Um93W10gPSBbXTtcbiAgICBjb25zdCBmaXJzdERheU9mTW9udGggPSB0aGlzLmFjdGl2ZURhdGUuY2FsZW5kYXJTdGFydCh7IHdlZWtTdGFydHNPbjogdGhpcy5kYXRlSGVscGVyLmdldEZpcnN0RGF5T2ZXZWVrKCkgfSk7XG5cbiAgICBmb3IgKGxldCB3ZWVrID0gMDsgd2VlayA8IHRoaXMuTUFYX1JPVzsgd2VlaysrKSB7XG4gICAgICBjb25zdCB3ZWVrU3RhcnQgPSBmaXJzdERheU9mTW9udGguYWRkRGF5cyh3ZWVrICogNyk7XG4gICAgICBjb25zdCByb3c6IERhdGVCb2R5Um93ID0ge1xuICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgICAgIGlzQ3VycmVudDogZmFsc2UsXG4gICAgICAgIGRhdGVDZWxsczogW10sXG4gICAgICAgIHllYXI6IHdlZWtTdGFydC5nZXRZZWFyKClcbiAgICAgIH07XG5cbiAgICAgIGZvciAobGV0IGRheSA9IDA7IGRheSA8IDc7IGRheSsrKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSB3ZWVrU3RhcnQuYWRkRGF5cyhkYXkpO1xuICAgICAgICBjb25zdCBkYXRlRm9ybWF0ID0gdHJhbnNDb21wYXRGb3JtYXQodGhpcy5pMThuLmdldExvY2FsZURhdGEoJ0RhdGVQaWNrZXIubGFuZy5kYXRlRm9ybWF0JywgJ1lZWVktTU0tREQnKSk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5kYXRlSGVscGVyLmZvcm1hdChkYXRlLm5hdGl2ZURhdGUsIGRhdGVGb3JtYXQpO1xuICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQoZGF0ZS5uYXRpdmVEYXRlLCAnZGQnKTtcblxuICAgICAgICBjb25zdCBjZWxsOiBEYXlDZWxsID0ge1xuICAgICAgICAgIHZhbHVlOiBkYXRlLm5hdGl2ZURhdGUsXG4gICAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICAgIGlzU2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAgIGlzRGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIGlzVG9kYXk6IGZhbHNlLFxuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICBjZWxsUmVuZGVyOiB2YWx1ZUZ1bmN0aW9uUHJvcCh0aGlzLmNlbGxSZW5kZXIhLCBkYXRlKSwgLy8gQ3VzdG9taXplZCBjb250ZW50XG4gICAgICAgICAgZnVsbENlbGxSZW5kZXI6IHZhbHVlRnVuY3Rpb25Qcm9wKHRoaXMuZnVsbENlbGxSZW5kZXIhLCBkYXRlKSxcbiAgICAgICAgICBjb250ZW50OiBgJHtkYXRlLmdldERhdGUoKX1gLFxuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuY2hhbmdlVmFsdWVGcm9tSW5zaWRlKGRhdGUpLFxuICAgICAgICAgIG9uTW91c2VFbnRlcjogKCkgPT4gdGhpcy5kYXlIb3Zlci5lbWl0KGRhdGUpXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMuc2hvd1dlZWsgJiYgIXJvdy53ZWVrTnVtKSB7XG4gICAgICAgICAgcm93LndlZWtOdW0gPSB0aGlzLmRhdGVIZWxwZXIuZ2V0SVNPV2VlayhkYXRlLm5hdGl2ZURhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGUuaXNUb2RheSgpKSB7XG4gICAgICAgICAgY2VsbC5pc1RvZGF5ID0gdHJ1ZTtcbiAgICAgICAgICByb3cuaXNDdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAoKEFycmF5LmlzQXJyYXkodGhpcy5zZWxlY3RlZFZhbHVlKSAmJiB0aGlzLnNlbGVjdGVkVmFsdWUubGVuZ3RoID4gMCkgfHwgKHRoaXMuaG92ZXJWYWx1ZSAmJiB0aGlzLmhvdmVyVmFsdWUubGVuZ3RoID4gMCkpICYmXG4gICAgICAgICAgZGF0ZS5pc1NhbWVNb250aCh0aGlzLmFjdGl2ZURhdGUpXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IFtzdGFydEhvdmVyLCBlbmRIb3Zlcl0gPSB0aGlzLmhvdmVyVmFsdWU7XG4gICAgICAgICAgY29uc3QgW3N0YXJ0U2VsZWN0ZWQsIGVuZFNlbGVjdGVkXSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZTtcblxuICAgICAgICAgIC8vIFNlbGVjdGVkXG4gICAgICAgICAgaWYgKHN0YXJ0U2VsZWN0ZWQgJiYgc3RhcnRTZWxlY3RlZC5pc1NhbWVEYXkoZGF0ZSkpIHtcbiAgICAgICAgICAgIGNlbGwuaXNTZWxlY3RlZFN0YXJ0RGF0ZSA9IHRydWU7XG4gICAgICAgICAgICBjZWxsLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcm93LmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGVuZFNlbGVjdGVkICYmIGVuZFNlbGVjdGVkLmlzU2FtZURheShkYXRlKSkge1xuICAgICAgICAgICAgY2VsbC5pc1NlbGVjdGVkRW5kRGF0ZSA9IHRydWU7XG4gICAgICAgICAgICBjZWxsLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcm93LmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGUuaXNBZnRlckRheShzdGFydFNlbGVjdGVkKSAmJiBkYXRlLmlzQmVmb3JlRGF5KGVuZFNlbGVjdGVkKSkge1xuICAgICAgICAgICAgY2VsbC5pc0luU2VsZWN0ZWRSYW5nZSA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHN0YXJ0SG92ZXIgJiYgZW5kSG92ZXIpIHtcbiAgICAgICAgICAgIC8vIEhvdmVyXG4gICAgICAgICAgICBpZiAoc3RhcnRIb3Zlci5pc1NhbWVEYXkoZGF0ZSkpIHtcbiAgICAgICAgICAgICAgY2VsbC5pc0hvdmVyU3RhcnREYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbmRIb3Zlci5pc1NhbWVEYXkoZGF0ZSkpIHtcbiAgICAgICAgICAgICAgY2VsbC5pc0hvdmVyRW5kRGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0ZS5pc0xhc3REYXlPZk1vbnRoKCkpIHtcbiAgICAgICAgICAgICAgY2VsbC5pc0xhc3REYXlPZk1vbnRoID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRlLmlzRmlyc3REYXlPZk1vbnRoKCkpIHtcbiAgICAgICAgICAgICAgY2VsbC5pc0ZpcnN0RGF5T2ZNb250aCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHN0YXJ0U2VsZWN0ZWQgJiYgIWVuZFNlbGVjdGVkKSB7XG4gICAgICAgICAgICBjZWxsLmlzU3RhcnRTaW5nbGUgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghc3RhcnRTZWxlY3RlZCAmJiBlbmRTZWxlY3RlZCkge1xuICAgICAgICAgICAgY2VsbC5pc0VuZFNpbmdsZSA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGRhdGUuaXNBZnRlckRheShzdGFydEhvdmVyKSAmJiBkYXRlLmlzQmVmb3JlRGF5KGVuZEhvdmVyKSkge1xuICAgICAgICAgICAgY2VsbC5pc0luSG92ZXJSYW5nZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRhdGUuaXNTYW1lRGF5KHRoaXMudmFsdWUpKSB7XG4gICAgICAgICAgY2VsbC5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICByb3cuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWREYXRlPy4oZGF0ZS5uYXRpdmVEYXRlKSkge1xuICAgICAgICAgIGNlbGwuaXNEaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjZWxsLmNsYXNzTWFwID0gdGhpcy5nZXRDbGFzc01hcChjZWxsKTtcblxuICAgICAgICByb3cuZGF0ZUNlbGxzLnB1c2goY2VsbCk7XG4gICAgICB9XG5cbiAgICAgIHJvdy5jbGFzc01hcCA9IHtcbiAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS13ZWVrLXBhbmVsLXJvd2BdOiB0aGlzLnNob3dXZWVrLFxuICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXdlZWstcGFuZWwtcm93LXNlbGVjdGVkYF06IHRoaXMuc2hvd1dlZWsgJiYgcm93LmlzQWN0aXZlXG4gICAgICB9O1xuXG4gICAgICB3ZWVrUm93cy5wdXNoKHJvdyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdlZWtSb3dzO1xuICB9XG5cbiAgZ2V0Q2xhc3NNYXAoY2VsbDogRGF5Q2VsbCk6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9IHtcbiAgICBjb25zdCBkYXRlID0gbmV3IENhbmR5RGF0ZShjZWxsLnZhbHVlKTtcbiAgICByZXR1cm4ge1xuICAgICAgW2BhbnQtcGlja2VyLWNlbGxgXTogdHJ1ZSxcbiAgICAgIFtgYW50LXBpY2tlci1jZWxsLXRvZGF5YF06ICEhY2VsbC5pc1RvZGF5LFxuICAgICAgW2BhbnQtcGlja2VyLWNlbGwtaW4tdmlld2BdOiBkYXRlLmlzU2FtZU1vbnRoKHRoaXMuYWN0aXZlRGF0ZSksXG4gICAgICBbYGFudC1waWNrZXItY2VsbC1zZWxlY3RlZGBdOiBjZWxsLmlzU2VsZWN0ZWQsXG4gICAgICBbYGFudC1waWNrZXItY2VsbC1kaXNhYmxlZGBdOiBjZWxsLmlzRGlzYWJsZWQsXG4gICAgICBbYGFudC1waWNrZXItY2VsbC1pbi1yYW5nZWBdOiAhIWNlbGwuaXNJblNlbGVjdGVkUmFuZ2UsXG4gICAgICBbYGFudC1waWNrZXItY2VsbC1yYW5nZS1zdGFydGBdOiAhIWNlbGwuaXNTZWxlY3RlZFN0YXJ0RGF0ZSxcbiAgICAgIFtgYW50LXBpY2tlci1jZWxsLXJhbmdlLWVuZGBdOiAhIWNlbGwuaXNTZWxlY3RlZEVuZERhdGUsXG4gICAgICBbYGFudC1waWNrZXItY2VsbC1yYW5nZS1zdGFydC1zaW5nbGVgXTogISFjZWxsLmlzU3RhcnRTaW5nbGUsXG4gICAgICBbYGFudC1waWNrZXItY2VsbC1yYW5nZS1lbmQtc2luZ2xlYF06ICEhY2VsbC5pc0VuZFNpbmdsZSxcbiAgICAgIFtgYW50LXBpY2tlci1jZWxsLXJhbmdlLWhvdmVyYF06ICEhY2VsbC5pc0luSG92ZXJSYW5nZSxcbiAgICAgIFtgYW50LXBpY2tlci1jZWxsLXJhbmdlLWhvdmVyLXN0YXJ0YF06ICEhY2VsbC5pc0hvdmVyU3RhcnREYXRlLFxuICAgICAgW2BhbnQtcGlja2VyLWNlbGwtcmFuZ2UtaG92ZXItZW5kYF06ICEhY2VsbC5pc0hvdmVyRW5kRGF0ZSxcbiAgICAgIFtgYW50LXBpY2tlci1jZWxsLXJhbmdlLWhvdmVyLWVkZ2Utc3RhcnRgXTogISFjZWxsLmlzRmlyc3REYXlPZk1vbnRoLFxuICAgICAgW2BhbnQtcGlja2VyLWNlbGwtcmFuZ2UtaG92ZXItZWRnZS1lbmRgXTogISFjZWxsLmlzTGFzdERheU9mTW9udGhcbiAgICB9O1xuICB9XG5cbiAgdHJhY2tCeUJvZHlSb3coX2luZGV4OiBudW1iZXIsIGl0ZW06IERhdGVCb2R5Um93KTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7aXRlbS55ZWFyfS0ke2l0ZW0ud2Vla051bX1gO1xuICB9XG5cbiAgdHJhY2tCeUJvZHlDb2x1bW4oX2luZGV4OiBudW1iZXIsIGl0ZW06IERhdGVDZWxsKTogc3RyaW5nIHtcbiAgICByZXR1cm4gaXRlbS50aXRsZSBhcyBzdHJpbmc7XG4gIH1cbn1cbiJdfQ==