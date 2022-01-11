/**
 * @fileoverview added by tsickle
 * Generated from: lib/date-table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class DateTableComponent extends AbstractTable {
    // Emitted when hover on a day by mouse enter
    /**
     * @param {?} i18n
     * @param {?} dateHelper
     */
    constructor(i18n, dateHelper) {
        super();
        this.i18n = i18n;
        this.dateHelper = dateHelper;
        this.selectedValue = []; // Range ONLY
        // Range ONLY
        this.hoverValue = []; // Range ONLY
        // Range ONLY
        this.dayHover = new EventEmitter(); // Emitted when hover on a day by mouse enter
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if (this.isDateRealChange(changes.activeDate) ||
            this.isDateRealChange(changes.value) ||
            this.isDateRealChange(changes.selectedValue) ||
            this.isDateRealChange(changes.hoverValue)) {
            this.render();
        }
    }
    /**
     * @private
     * @param {?} change
     * @return {?}
     */
    isDateRealChange(change) {
        if (change) {
            /** @type {?} */
            const previousValue = change.previousValue;
            /** @type {?} */
            const currentValue = change.currentValue;
            if (Array.isArray(currentValue)) {
                return (!Array.isArray(previousValue) ||
                    currentValue.length !== previousValue.length ||
                    currentValue.some((/**
                     * @param {?} value
                     * @param {?} index
                     * @return {?}
                     */
                    (value, index) => {
                        /** @type {?} */
                        const previousCandyDate = previousValue[index];
                        return previousCandyDate instanceof CandyDate ? previousCandyDate.isSameDay(value) : previousCandyDate !== value;
                    })));
            }
            else {
                return !this.isSameDate((/** @type {?} */ (previousValue)), currentValue);
            }
        }
        return false;
    }
    /**
     * @private
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    isSameDate(left, right) {
        return (!left && !right) || (left && right && right.isSameDay(left));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    changeValueFromInside(value) {
        // Only change date not change time
        this.activeDate = this.activeDate.setYear(value.getYear()).setMonth(value.getMonth()).setDate(value.getDate());
        this.valueChange.emit(this.activeDate);
        if (!this.activeDate.isSameMonth(this.value)) {
            this.render();
        }
    }
    /**
     * @return {?}
     */
    makeHeadRow() {
        /** @type {?} */
        const weekDays = [];
        /** @type {?} */
        const start = this.activeDate.calendarStart({ weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
        for (let colIndex = 0; colIndex < this.MAX_COL; colIndex++) {
            /** @type {?} */
            const day = start.addDays(colIndex);
            weekDays.push({
                value: day.nativeDate,
                title: this.dateHelper.format(day.nativeDate, 'E'),
                // eg. Tue
                content: this.dateHelper.format(day.nativeDate, this.getVeryShortWeekFormat()),
                // eg. Tu,
                isSelected: false,
                isDisabled: false,
                /**
                 * @return {?}
                 */
                onClick() { },
                /**
                 * @return {?}
                 */
                onMouseEnter() { }
            });
        }
        return weekDays;
    }
    /**
     * @private
     * @return {?}
     */
    getVeryShortWeekFormat() {
        return this.i18n.getLocaleId().toLowerCase().indexOf('zh') === 0 ? 'EEEEE' : 'EEEEEE'; // Use extreme short for chinese
    }
    /**
     * @return {?}
     */
    makeBodyRows() {
        var _a;
        /** @type {?} */
        const weekRows = [];
        /** @type {?} */
        const firstDayOfMonth = this.activeDate.calendarStart({ weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
        for (let week = 0; week < this.MAX_ROW; week++) {
            /** @type {?} */
            const weekStart = firstDayOfMonth.addDays(week * 7);
            /** @type {?} */
            const row = {
                isActive: false,
                isCurrent: false,
                dateCells: [],
                year: weekStart.getYear()
            };
            for (let day = 0; day < 7; day++) {
                /** @type {?} */
                const date = weekStart.addDays(day);
                /** @type {?} */
                const dateFormat = transCompatFormat(this.i18n.getLocaleData('DatePicker.lang.dateFormat', 'YYYY-MM-DD'));
                /** @type {?} */
                const title = this.dateHelper.format(date.nativeDate, dateFormat);
                /** @type {?} */
                const label = this.dateHelper.format(date.nativeDate, 'dd');
                /** @type {?} */
                const cell = {
                    value: date.nativeDate,
                    label: label,
                    isSelected: false,
                    isDisabled: false,
                    isToday: false,
                    title: title,
                    cellRender: valueFunctionProp((/** @type {?} */ (this.cellRender)), date),
                    // Customized content
                    fullCellRender: valueFunctionProp((/** @type {?} */ (this.fullCellRender)), date),
                    content: `${date.getDate()}`,
                    onClick: (/**
                     * @return {?}
                     */
                    () => this.changeValueFromInside(date)),
                    onMouseEnter: (/**
                     * @return {?}
                     */
                    () => this.dayHover.emit(date))
                };
                if (this.showWeek && !row.weekNum) {
                    row.weekNum = this.dateHelper.getISOWeek(date.nativeDate);
                }
                if (date.isToday()) {
                    cell.isToday = true;
                    row.isCurrent = true;
                }
                if (((Array.isArray(this.selectedValue) && this.selectedValue.length > 0) || (this.hoverValue && this.hoverValue.length > 0)) &&
                    date.isSameMonth(this.activeDate)) {
                    const [startHover, endHover] = this.hoverValue;
                    const [startSelected, endSelected] = this.selectedValue;
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
                else if (date.isSameDay(this.value)) {
                    cell.isSelected = true;
                    row.isActive = true;
                }
                if ((_a = this.disabledDate) === null || _a === void 0 ? void 0 : _a.call(this, date.nativeDate)) {
                    cell.isDisabled = true;
                }
                cell.classMap = this.getClassMap(cell);
                row.dateCells.push(cell);
            }
            row.classMap = {
                [`${this.prefixCls}-week-panel-row`]: this.showWeek,
                [`${this.prefixCls}-week-panel-row-selected`]: this.showWeek && row.isActive
            };
            weekRows.push(row);
        }
        return weekRows;
    }
    /**
     * @param {?} cell
     * @return {?}
     */
    getClassMap(cell) {
        /** @type {?} */
        const date = new CandyDate(cell.value);
        return {
            [`ant-picker-cell`]: true,
            [`ant-picker-cell-today`]: !!cell.isToday,
            [`ant-picker-cell-in-view`]: date.isSameMonth(this.activeDate),
            [`ant-picker-cell-selected`]: cell.isSelected,
            [`ant-picker-cell-disabled`]: cell.isDisabled,
            [`ant-picker-cell-in-range`]: !!cell.isInSelectedRange,
            [`ant-picker-cell-range-start`]: !!cell.isSelectedStartDate,
            [`ant-picker-cell-range-end`]: !!cell.isSelectedEndDate,
            [`ant-picker-cell-range-start-single`]: !!cell.isStartSingle,
            [`ant-picker-cell-range-end-single`]: !!cell.isEndSingle,
            [`ant-picker-cell-range-hover`]: !!cell.isInHoverRange,
            [`ant-picker-cell-range-hover-start`]: !!cell.isHoverStartDate,
            [`ant-picker-cell-range-hover-end`]: !!cell.isHoverEndDate,
            [`ant-picker-cell-range-hover-edge-start`]: !!cell.isFirstDayOfMonth,
            [`ant-picker-cell-range-hover-edge-end`]: !!cell.isLastDayOfMonth
        };
    }
    /**
     * @param {?} _index
     * @param {?} item
     * @return {?}
     */
    trackByBodyRow(_index, item) {
        return `${item.year}-${item.weekNum}`;
    }
    /**
     * @param {?} _index
     * @param {?} item
     * @return {?}
     */
    trackByBodyColumn(_index, item) {
        return (/** @type {?} */ (item.title));
    }
}
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
DateTableComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: DateHelperService }
];
DateTableComponent.propDecorators = {
    locale: [{ type: Input }],
    selectedValue: [{ type: Input }],
    hoverValue: [{ type: Input }],
    dayHover: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2RhdGUtdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGlCQUFpQixFQUEyQixhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sUUFBUSxDQUFDO0FBVTNDLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxhQUFhOzs7Ozs7SUFPbkQsWUFBb0IsSUFBbUIsRUFBVSxVQUE2QjtRQUM1RSxLQUFLLEVBQUUsQ0FBQztRQURVLFNBQUksR0FBSixJQUFJLENBQWU7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUxyRSxrQkFBYSxHQUFnQixFQUFFLENBQUMsQ0FBQyxhQUFhOztRQUM5QyxlQUFVLEdBQWdCLEVBQUUsQ0FBQyxDQUFDLGFBQWE7O1FBRWpDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDLENBQUMsNkNBQTZDO0lBSTFHLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsSUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUN6QyxJQUFJLENB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O0lBRXRDLHNDQUE0RDs7Ozs7SUFFaEQsa0NBQTJCOzs7OztJQUFFLHdDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdGltZSc7XG5pbXBvcnQgeyB2YWx1ZUZ1bmN0aW9uUHJvcCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcblxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UsIE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlLCBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcbmltcG9ydCB7IEFic3RyYWN0VGFibGUgfSBmcm9tICcuL2Fic3RyYWN0LXRhYmxlJztcbmltcG9ydCB7IERhdGVCb2R5Um93LCBEYXRlQ2VsbCwgRGF5Q2VsbCB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IHRyYW5zQ29tcGF0Rm9ybWF0IH0gZnJvbSAnLi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZGF0ZS10YWJsZScsXG4gIGV4cG9ydEFzOiAnZGF0ZVRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Fic3RyYWN0LXRhYmxlLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIERhdGVUYWJsZUNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0VGFibGUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGxvY2FsZSE6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xuICBASW5wdXQoKSBzZWxlY3RlZFZhbHVlOiBDYW5keURhdGVbXSA9IFtdOyAvLyBSYW5nZSBPTkxZXG4gIEBJbnB1dCgpIGhvdmVyVmFsdWU6IENhbmR5RGF0ZVtdID0gW107IC8vIFJhbmdlIE9OTFlcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgZGF5SG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTsgLy8gRW1pdHRlZCB3aGVuIGhvdmVyIG9uIGEgZGF5IGJ5IG1vdXNlIGVudGVyXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLCBwcml2YXRlIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcbiAgICBpZiAoXG4gICAgICB0aGlzLmlzRGF0ZVJlYWxDaGFuZ2UoY2hhbmdlcy5hY3RpdmVEYXRlKSB8fFxuICAgICAgdGhpcy5pc0RhdGVSZWFsQ2hhbmdlKGNoYW5nZXMudmFsdWUpIHx8XG4gICAgICB0aGlzLmlzRGF0ZVJlYWxDaGFuZ2UoY2hhbmdlcy5zZWxlY3RlZFZhbHVlKSB8fFxuICAgICAgdGhpcy5pc0RhdGVSZWFsQ2hhbmdlKGNoYW5nZXMuaG92ZXJWYWx1ZSlcbiAgICApIHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0RhdGVSZWFsQ2hhbmdlKGNoYW5nZTogU2ltcGxlQ2hhbmdlKTogYm9vbGVhbiB7XG4gICAgaWYgKGNoYW5nZSkge1xuICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZTogQ2FuZHlEYXRlIHwgQ2FuZHlEYXRlW10gPSBjaGFuZ2UucHJldmlvdXNWYWx1ZTtcbiAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZTogQ2FuZHlEYXRlIHwgQ2FuZHlEYXRlW10gPSBjaGFuZ2UuY3VycmVudFZhbHVlO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY3VycmVudFZhbHVlKSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICFBcnJheS5pc0FycmF5KHByZXZpb3VzVmFsdWUpIHx8XG4gICAgICAgICAgY3VycmVudFZhbHVlLmxlbmd0aCAhPT0gcHJldmlvdXNWYWx1ZS5sZW5ndGggfHxcbiAgICAgICAgICBjdXJyZW50VmFsdWUuc29tZSgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c0NhbmR5RGF0ZSA9IHByZXZpb3VzVmFsdWVbaW5kZXhdO1xuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzQ2FuZHlEYXRlIGluc3RhbmNlb2YgQ2FuZHlEYXRlID8gcHJldmlvdXNDYW5keURhdGUuaXNTYW1lRGF5KHZhbHVlKSA6IHByZXZpb3VzQ2FuZHlEYXRlICE9PSB2YWx1ZTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzU2FtZURhdGUocHJldmlvdXNWYWx1ZSBhcyBDYW5keURhdGUsIGN1cnJlbnRWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgaXNTYW1lRGF0ZShsZWZ0OiBDYW5keURhdGUsIHJpZ2h0OiBDYW5keURhdGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCFsZWZ0ICYmICFyaWdodCkgfHwgKGxlZnQgJiYgcmlnaHQgJiYgcmlnaHQuaXNTYW1lRGF5KGxlZnQpKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hhbmdlVmFsdWVGcm9tSW5zaWRlKHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcbiAgICAvLyBPbmx5IGNoYW5nZSBkYXRlIG5vdCBjaGFuZ2UgdGltZVxuICAgIHRoaXMuYWN0aXZlRGF0ZSA9IHRoaXMuYWN0aXZlRGF0ZS5zZXRZZWFyKHZhbHVlLmdldFllYXIoKSkuc2V0TW9udGgodmFsdWUuZ2V0TW9udGgoKSkuc2V0RGF0ZSh2YWx1ZS5nZXREYXRlKCkpO1xuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLmFjdGl2ZURhdGUpO1xuXG4gICAgaWYgKCF0aGlzLmFjdGl2ZURhdGUuaXNTYW1lTW9udGgodGhpcy52YWx1ZSkpIHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgbWFrZUhlYWRSb3coKTogRGF5Q2VsbFtdIHtcbiAgICBjb25zdCB3ZWVrRGF5czogRGF5Q2VsbFtdID0gW107XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmFjdGl2ZURhdGUuY2FsZW5kYXJTdGFydCh7IHdlZWtTdGFydHNPbjogdGhpcy5kYXRlSGVscGVyLmdldEZpcnN0RGF5T2ZXZWVrKCkgfSk7XG4gICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IHRoaXMuTUFYX0NPTDsgY29sSW5kZXgrKykge1xuICAgICAgY29uc3QgZGF5ID0gc3RhcnQuYWRkRGF5cyhjb2xJbmRleCk7XG4gICAgICB3ZWVrRGF5cy5wdXNoKHtcbiAgICAgICAgdmFsdWU6IGRheS5uYXRpdmVEYXRlLFxuICAgICAgICB0aXRsZTogdGhpcy5kYXRlSGVscGVyLmZvcm1hdChkYXkubmF0aXZlRGF0ZSwgJ0UnKSwgLy8gZWcuIFR1ZVxuICAgICAgICBjb250ZW50OiB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KGRheS5uYXRpdmVEYXRlLCB0aGlzLmdldFZlcnlTaG9ydFdlZWtGb3JtYXQoKSksIC8vIGVnLiBUdSxcbiAgICAgICAgaXNTZWxlY3RlZDogZmFsc2UsXG4gICAgICAgIGlzRGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBvbkNsaWNrKCk6IHZvaWQge30sXG4gICAgICAgIG9uTW91c2VFbnRlcigpOiB2b2lkIHt9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHdlZWtEYXlzO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRWZXJ5U2hvcnRXZWVrRm9ybWF0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaTE4bi5nZXRMb2NhbGVJZCgpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignemgnKSA9PT0gMCA/ICdFRUVFRScgOiAnRUVFRUVFJzsgLy8gVXNlIGV4dHJlbWUgc2hvcnQgZm9yIGNoaW5lc2VcbiAgfVxuXG4gIG1ha2VCb2R5Um93cygpOiBEYXRlQm9keVJvd1tdIHtcbiAgICBjb25zdCB3ZWVrUm93czogRGF0ZUJvZHlSb3dbXSA9IFtdO1xuICAgIGNvbnN0IGZpcnN0RGF5T2ZNb250aCA9IHRoaXMuYWN0aXZlRGF0ZS5jYWxlbmRhclN0YXJ0KHsgd2Vla1N0YXJ0c09uOiB0aGlzLmRhdGVIZWxwZXIuZ2V0Rmlyc3REYXlPZldlZWsoKSB9KTtcblxuICAgIGZvciAobGV0IHdlZWsgPSAwOyB3ZWVrIDwgdGhpcy5NQVhfUk9XOyB3ZWVrKyspIHtcbiAgICAgIGNvbnN0IHdlZWtTdGFydCA9IGZpcnN0RGF5T2ZNb250aC5hZGREYXlzKHdlZWsgKiA3KTtcbiAgICAgIGNvbnN0IHJvdzogRGF0ZUJvZHlSb3cgPSB7XG4gICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgaXNDdXJyZW50OiBmYWxzZSxcbiAgICAgICAgZGF0ZUNlbGxzOiBbXSxcbiAgICAgICAgeWVhcjogd2Vla1N0YXJ0LmdldFllYXIoKVxuICAgICAgfTtcblxuICAgICAgZm9yIChsZXQgZGF5ID0gMDsgZGF5IDwgNzsgZGF5KyspIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IHdlZWtTdGFydC5hZGREYXlzKGRheSk7XG4gICAgICAgIGNvbnN0IGRhdGVGb3JtYXQgPSB0cmFuc0NvbXBhdEZvcm1hdCh0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnRGF0ZVBpY2tlci5sYW5nLmRhdGVGb3JtYXQnLCAnWVlZWS1NTS1ERCcpKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KGRhdGUubmF0aXZlRGF0ZSwgZGF0ZUZvcm1hdCk7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5kYXRlSGVscGVyLmZvcm1hdChkYXRlLm5hdGl2ZURhdGUsICdkZCcpO1xuXG4gICAgICAgIGNvbnN0IGNlbGw6IERheUNlbGwgPSB7XG4gICAgICAgICAgdmFsdWU6IGRhdGUubmF0aXZlRGF0ZSxcbiAgICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgICAgaXNTZWxlY3RlZDogZmFsc2UsXG4gICAgICAgICAgaXNEaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgaXNUb2RheTogZmFsc2UsXG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgIGNlbGxSZW5kZXI6IHZhbHVlRnVuY3Rpb25Qcm9wKHRoaXMuY2VsbFJlbmRlciEsIGRhdGUpLCAvLyBDdXN0b21pemVkIGNvbnRlbnRcbiAgICAgICAgICBmdWxsQ2VsbFJlbmRlcjogdmFsdWVGdW5jdGlvblByb3AodGhpcy5mdWxsQ2VsbFJlbmRlciEsIGRhdGUpLFxuICAgICAgICAgIGNvbnRlbnQ6IGAke2RhdGUuZ2V0RGF0ZSgpfWAsXG4gICAgICAgICAgb25DbGljazogKCkgPT4gdGhpcy5jaGFuZ2VWYWx1ZUZyb21JbnNpZGUoZGF0ZSksXG4gICAgICAgICAgb25Nb3VzZUVudGVyOiAoKSA9PiB0aGlzLmRheUhvdmVyLmVtaXQoZGF0ZSlcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5zaG93V2VlayAmJiAhcm93LndlZWtOdW0pIHtcbiAgICAgICAgICByb3cud2Vla051bSA9IHRoaXMuZGF0ZUhlbHBlci5nZXRJU09XZWVrKGRhdGUubmF0aXZlRGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0ZS5pc1RvZGF5KCkpIHtcbiAgICAgICAgICBjZWxsLmlzVG9kYXkgPSB0cnVlO1xuICAgICAgICAgIHJvdy5pc0N1cnJlbnQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICgoQXJyYXkuaXNBcnJheSh0aGlzLnNlbGVjdGVkVmFsdWUpICYmIHRoaXMuc2VsZWN0ZWRWYWx1ZS5sZW5ndGggPiAwKSB8fCAodGhpcy5ob3ZlclZhbHVlICYmIHRoaXMuaG92ZXJWYWx1ZS5sZW5ndGggPiAwKSkgJiZcbiAgICAgICAgICBkYXRlLmlzU2FtZU1vbnRoKHRoaXMuYWN0aXZlRGF0ZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgW3N0YXJ0SG92ZXIsIGVuZEhvdmVyXSA9IHRoaXMuaG92ZXJWYWx1ZTtcbiAgICAgICAgICBjb25zdCBbc3RhcnRTZWxlY3RlZCwgZW5kU2VsZWN0ZWRdID0gdGhpcy5zZWxlY3RlZFZhbHVlO1xuXG4gICAgICAgICAgLy8gU2VsZWN0ZWRcbiAgICAgICAgICBpZiAoc3RhcnRTZWxlY3RlZCAmJiBzdGFydFNlbGVjdGVkLmlzU2FtZURheShkYXRlKSkge1xuICAgICAgICAgICAgY2VsbC5pc1NlbGVjdGVkU3RhcnREYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNlbGwuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICByb3cuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZW5kU2VsZWN0ZWQgJiYgZW5kU2VsZWN0ZWQuaXNTYW1lRGF5KGRhdGUpKSB7XG4gICAgICAgICAgICBjZWxsLmlzU2VsZWN0ZWRFbmREYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNlbGwuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICByb3cuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0ZS5pc0FmdGVyRGF5KHN0YXJ0U2VsZWN0ZWQpICYmIGRhdGUuaXNCZWZvcmVEYXkoZW5kU2VsZWN0ZWQpKSB7XG4gICAgICAgICAgICBjZWxsLmlzSW5TZWxlY3RlZFJhbmdlID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3RhcnRIb3ZlciAmJiBlbmRIb3Zlcikge1xuICAgICAgICAgICAgLy8gSG92ZXJcbiAgICAgICAgICAgIGlmIChzdGFydEhvdmVyLmlzU2FtZURheShkYXRlKSkge1xuICAgICAgICAgICAgICBjZWxsLmlzSG92ZXJTdGFydERhdGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVuZEhvdmVyLmlzU2FtZURheShkYXRlKSkge1xuICAgICAgICAgICAgICBjZWxsLmlzSG92ZXJFbmREYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRlLmlzTGFzdERheU9mTW9udGgoKSkge1xuICAgICAgICAgICAgICBjZWxsLmlzTGFzdERheU9mTW9udGggPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGUuaXNGaXJzdERheU9mTW9udGgoKSkge1xuICAgICAgICAgICAgICBjZWxsLmlzRmlyc3REYXlPZk1vbnRoID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3RhcnRTZWxlY3RlZCAmJiAhZW5kU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGNlbGwuaXNTdGFydFNpbmdsZSA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFzdGFydFNlbGVjdGVkICYmIGVuZFNlbGVjdGVkKSB7XG4gICAgICAgICAgICBjZWxsLmlzRW5kU2luZ2xlID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZGF0ZS5pc0FmdGVyRGF5KHN0YXJ0SG92ZXIpICYmIGRhdGUuaXNCZWZvcmVEYXkoZW5kSG92ZXIpKSB7XG4gICAgICAgICAgICBjZWxsLmlzSW5Ib3ZlclJhbmdlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0ZS5pc1NhbWVEYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgICAgICBjZWxsLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgIHJvdy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZERhdGU/LihkYXRlLm5hdGl2ZURhdGUpKSB7XG4gICAgICAgICAgY2VsbC5pc0Rpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNlbGwuY2xhc3NNYXAgPSB0aGlzLmdldENsYXNzTWFwKGNlbGwpO1xuXG4gICAgICAgIHJvdy5kYXRlQ2VsbHMucHVzaChjZWxsKTtcbiAgICAgIH1cblxuICAgICAgcm93LmNsYXNzTWFwID0ge1xuICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXdlZWstcGFuZWwtcm93YF06IHRoaXMuc2hvd1dlZWssXG4gICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30td2Vlay1wYW5lbC1yb3ctc2VsZWN0ZWRgXTogdGhpcy5zaG93V2VlayAmJiByb3cuaXNBY3RpdmVcbiAgICAgIH07XG5cbiAgICAgIHdlZWtSb3dzLnB1c2gocm93KTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2Vla1Jvd3M7XG4gIH1cblxuICBnZXRDbGFzc01hcChjZWxsOiBEYXlDZWxsKTogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0ge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgQ2FuZHlEYXRlKGNlbGwudmFsdWUpO1xuICAgIHJldHVybiB7XG4gICAgICBbYGFudC1waWNrZXItY2VsbGBdOiB0cnVlLFxuICAgICAgW2BhbnQtcGlja2VyLWNlbGwtdG9kYXlgXTogISFjZWxsLmlzVG9kYXksXG4gICAgICBbYGFudC1waWNrZXItY2VsbC1pbi12aWV3YF06IGRhdGUuaXNTYW1lTW9udGgodGhpcy5hY3RpdmVEYXRlKSxcbiAgICAgIFtgYW50LXBpY2tlci1jZWxsLXNlbGVjdGVkYF06IGNlbGwuaXNTZWxlY3RlZCxcbiAgICAgIFtgYW50LXBpY2tlci1jZWxsLWRpc2FibGVkYF06IGNlbGwuaXNEaXNhYmxlZCxcbiAgICAgIFtgYW50LXBpY2tlci1jZWxsLWluLXJhbmdlYF06ICEhY2VsbC5pc0luU2VsZWN0ZWRSYW5nZSxcbiAgICAgIFtgYW50LXBpY2tlci1jZWxsLXJhbmdlLXN0YXJ0YF06ICEhY2VsbC5pc1NlbGVjdGVkU3RhcnREYXRlLFxuICAgICAgW2BhbnQtcGlja2VyLWNlbGwtcmFuZ2UtZW5kYF06ICEhY2VsbC5pc1NlbGVjdGVkRW5kRGF0ZSxcbiAgICAgIFtgYW50LXBpY2tlci1jZWxsLXJhbmdlLXN0YXJ0LXNpbmdsZWBdOiAhIWNlbGwuaXNTdGFydFNpbmdsZSxcbiAgICAgIFtgYW50LXBpY2tlci1jZWxsLXJhbmdlLWVuZC1zaW5nbGVgXTogISFjZWxsLmlzRW5kU2luZ2xlLFxuICAgICAgW2BhbnQtcGlja2VyLWNlbGwtcmFuZ2UtaG92ZXJgXTogISFjZWxsLmlzSW5Ib3ZlclJhbmdlLFxuICAgICAgW2BhbnQtcGlja2VyLWNlbGwtcmFuZ2UtaG92ZXItc3RhcnRgXTogISFjZWxsLmlzSG92ZXJTdGFydERhdGUsXG4gICAgICBbYGFudC1waWNrZXItY2VsbC1yYW5nZS1ob3Zlci1lbmRgXTogISFjZWxsLmlzSG92ZXJFbmREYXRlLFxuICAgICAgW2BhbnQtcGlja2VyLWNlbGwtcmFuZ2UtaG92ZXItZWRnZS1zdGFydGBdOiAhIWNlbGwuaXNGaXJzdERheU9mTW9udGgsXG4gICAgICBbYGFudC1waWNrZXItY2VsbC1yYW5nZS1ob3Zlci1lZGdlLWVuZGBdOiAhIWNlbGwuaXNMYXN0RGF5T2ZNb250aFxuICAgIH07XG4gIH1cblxuICB0cmFja0J5Qm9keVJvdyhfaW5kZXg6IG51bWJlciwgaXRlbTogRGF0ZUJvZHlSb3cpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHtpdGVtLnllYXJ9LSR7aXRlbS53ZWVrTnVtfWA7XG4gIH1cblxuICB0cmFja0J5Qm9keUNvbHVtbihfaW5kZXg6IG51bWJlciwgaXRlbTogRGF0ZUNlbGwpOiBzdHJpbmcge1xuICAgIHJldHVybiBpdGVtLnRpdGxlIGFzIHN0cmluZztcbiAgfVxufVxuIl19