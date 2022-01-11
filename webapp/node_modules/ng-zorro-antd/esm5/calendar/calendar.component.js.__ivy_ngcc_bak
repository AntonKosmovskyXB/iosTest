/**
 * @fileoverview added by tsickle
 * Generated from: calendar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, forwardRef, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CandyDate } from 'ng-zorro-antd/core/time';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { NzDateCellDirective as DateCell, NzDateFullCellDirective as DateFullCell, NzMonthCellDirective as MonthCell, NzMonthFullCellDirective as MonthFullCell } from './calendar-cells';
var NzCalendarComponent = /** @class */ (function () {
    function NzCalendarComponent(cdr) {
        this.cdr = cdr;
        this.activeDate = new CandyDate();
        this.prefixCls = 'ant-picker-calendar';
        this.onChangeFn = (/**
         * @return {?}
         */
        function () { });
        this.onTouchFn = (/**
         * @return {?}
         */
        function () { });
        this.nzMode = 'month';
        this.nzModeChange = new EventEmitter();
        this.nzPanelChange = new EventEmitter();
        this.nzSelectChange = new EventEmitter();
        this.nzValueChange = new EventEmitter();
        this.nzFullscreen = true;
    }
    Object.defineProperty(NzCalendarComponent.prototype, "dateCell", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ ((this.nzDateCell || this.nzDateCellChild)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "dateFullCell", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ ((this.nzDateFullCell || this.nzDateFullCellChild)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "monthCell", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ ((this.nzMonthCell || this.nzMonthCellChild)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "monthFullCell", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ ((this.nzMonthFullCell || this.nzMonthFullCellChild)));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} mode
     * @return {?}
     */
    NzCalendarComponent.prototype.onModeChange = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this.nzModeChange.emit(mode);
        this.nzPanelChange.emit({ date: this.activeDate.nativeDate, mode: mode });
    };
    /**
     * @param {?} year
     * @return {?}
     */
    NzCalendarComponent.prototype.onYearSelect = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        /** @type {?} */
        var date = this.activeDate.setYear(year);
        this.updateDate(date);
    };
    /**
     * @param {?} month
     * @return {?}
     */
    NzCalendarComponent.prototype.onMonthSelect = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        /** @type {?} */
        var date = this.activeDate.setMonth(month);
        this.updateDate(date);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NzCalendarComponent.prototype.onDateSelect = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        // Only activeDate is enough in calendar
        // this.value = date;
        this.updateDate(date);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzCalendarComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.updateDate(new CandyDate((/** @type {?} */ (value))), false);
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCalendarComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeFn = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCalendarComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchFn = fn;
    };
    /**
     * @private
     * @param {?} date
     * @param {?=} touched
     * @return {?}
     */
    NzCalendarComponent.prototype.updateDate = /**
     * @private
     * @param {?} date
     * @param {?=} touched
     * @return {?}
     */
    function (date, touched) {
        if (touched === void 0) { touched = true; }
        this.activeDate = date;
        if (touched) {
            this.onChangeFn(date.nativeDate);
            this.onTouchFn();
            this.nzSelectChange.emit(date.nativeDate);
            this.nzValueChange.emit(date.nativeDate);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzCalendarComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzValue) {
            this.updateDate(new CandyDate(this.nzValue), false);
        }
    };
    NzCalendarComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'nz-calendar',
                    exportAs: 'nzCalendar',
                    template: "\n    <nz-calendar-header\n      [fullscreen]=\"nzFullscreen\"\n      [activeDate]=\"activeDate\"\n      [(mode)]=\"nzMode\"\n      (modeChange)=\"onModeChange($event)\"\n      (yearChange)=\"onYearSelect($event)\"\n      (monthChange)=\"onMonthSelect($event)\"\n    >\n    </nz-calendar-header>\n\n    <div class=\"ant-picker-panel\">\n      <div class=\"ant-picker-{{ nzMode === 'month' ? 'date' : 'month' }}-panel\">\n        <div class=\"ant-picker-body\">\n          <ng-container *ngIf=\"nzMode === 'month'; then monthModeTable; else yearModeTable\"></ng-container>\n        </div>\n      </div>\n    </div>\n    <ng-template #monthModeTable>\n      <!--  TODO(@wenqi73) [cellRender] [fullCellRender] -->\n      <date-table\n        [prefixCls]=\"prefixCls\"\n        [value]=\"activeDate\"\n        [activeDate]=\"activeDate\"\n        [cellRender]=\"$any(dateCell)\"\n        [fullCellRender]=\"$any(dateFullCell)\"\n        [disabledDate]=\"nzDisabledDate\"\n        (valueChange)=\"onDateSelect($event)\"\n      ></date-table>\n    </ng-template>\n\n    <!--  TODO(@wenqi73) [cellRender] [fullCellRender] -->\n    <ng-template #yearModeTable>\n      <month-table\n        [prefixCls]=\"prefixCls\"\n        [value]=\"activeDate\"\n        [activeDate]=\"activeDate\"\n        [cellRender]=\"$any(monthCell)\"\n        [fullCellRender]=\"$any(monthFullCell)\"\n        (valueChange)=\"onDateSelect($event)\"\n      ></month-table>\n    </ng-template>\n  ",
                    host: {
                        '[class.ant-picker-calendar]': 'true',
                        '[class.ant-picker-calendar-full]': 'nzFullscreen',
                        '[class.ant-picker-calendar-mini]': '!nzFullscreen'
                    },
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzCalendarComponent; })), multi: true }]
                }] }
    ];
    /** @nocollapse */
    NzCalendarComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    NzCalendarComponent.propDecorators = {
        nzMode: [{ type: Input }],
        nzValue: [{ type: Input }],
        nzDisabledDate: [{ type: Input }],
        nzModeChange: [{ type: Output }],
        nzPanelChange: [{ type: Output }],
        nzSelectChange: [{ type: Output }],
        nzValueChange: [{ type: Output }],
        nzDateCell: [{ type: Input }],
        nzDateCellChild: [{ type: ContentChild, args: [DateCell, { static: false, read: TemplateRef },] }],
        nzDateFullCell: [{ type: Input }],
        nzDateFullCellChild: [{ type: ContentChild, args: [DateFullCell, { static: false, read: TemplateRef },] }],
        nzMonthCell: [{ type: Input }],
        nzMonthCellChild: [{ type: ContentChild, args: [MonthCell, { static: false, read: TemplateRef },] }],
        nzMonthFullCell: [{ type: Input }],
        nzMonthFullCellChild: [{ type: ContentChild, args: [MonthFullCell, { static: false, read: TemplateRef },] }],
        nzFullscreen: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzCalendarComponent.prototype, "nzFullscreen", void 0);
    return NzCalendarComponent;
}());
export { NzCalendarComponent };
if (false) {
    /** @type {?} */
    NzCalendarComponent.ngAcceptInputType_nzFullscreen;
    /** @type {?} */
    NzCalendarComponent.prototype.activeDate;
    /** @type {?} */
    NzCalendarComponent.prototype.prefixCls;
    /**
     * @type {?}
     * @private
     */
    NzCalendarComponent.prototype.onChangeFn;
    /**
     * @type {?}
     * @private
     */
    NzCalendarComponent.prototype.onTouchFn;
    /** @type {?} */
    NzCalendarComponent.prototype.nzMode;
    /** @type {?} */
    NzCalendarComponent.prototype.nzValue;
    /** @type {?} */
    NzCalendarComponent.prototype.nzDisabledDate;
    /** @type {?} */
    NzCalendarComponent.prototype.nzModeChange;
    /** @type {?} */
    NzCalendarComponent.prototype.nzPanelChange;
    /** @type {?} */
    NzCalendarComponent.prototype.nzSelectChange;
    /** @type {?} */
    NzCalendarComponent.prototype.nzValueChange;
    /**
     * Cannot use \@Input and \@ContentChild on one variable
     * because { static: false } will make \@Input property get delayed
     *
     * @type {?}
     */
    NzCalendarComponent.prototype.nzDateCell;
    /** @type {?} */
    NzCalendarComponent.prototype.nzDateCellChild;
    /** @type {?} */
    NzCalendarComponent.prototype.nzDateFullCell;
    /** @type {?} */
    NzCalendarComponent.prototype.nzDateFullCellChild;
    /** @type {?} */
    NzCalendarComponent.prototype.nzMonthCell;
    /** @type {?} */
    NzCalendarComponent.prototype.nzMonthCellChild;
    /** @type {?} */
    NzCalendarComponent.prototype.nzMonthFullCell;
    /** @type {?} */
    NzCalendarComponent.prototype.nzMonthFullCellChild;
    /** @type {?} */
    NzCalendarComponent.prototype.nzFullscreen;
    /**
     * @type {?}
     * @private
     */
    NzCalendarComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYWxlbmRhci8iLCJzb3VyY2VzIjpbImNhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFFTCxNQUFNLEVBRU4sV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXBELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQ0wsbUJBQW1CLElBQUksUUFBUSxFQUMvQix1QkFBdUIsSUFBSSxZQUFZLEVBQ3ZDLG9CQUFvQixJQUFJLFNBQVMsRUFDakMsd0JBQXdCLElBQUksYUFBYSxFQUMxQyxNQUFNLGtCQUFrQixDQUFDO0FBSzFCO0lBdUdFLDZCQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQTdDMUMsZUFBVSxHQUFjLElBQUksU0FBUyxFQUFFLENBQUM7UUFDeEMsY0FBUyxHQUFXLHFCQUFxQixDQUFDO1FBRWxDLGVBQVU7OztRQUF5QixjQUFPLENBQUMsRUFBQztRQUM1QyxjQUFTOzs7UUFBZSxjQUFPLENBQUMsRUFBQztRQUVoQyxXQUFNLEdBQW1CLE9BQU8sQ0FBQztRQUl2QixpQkFBWSxHQUFpQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hFLGtCQUFhLEdBQXVELElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkYsbUJBQWMsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN4RCxrQkFBYSxHQUF1QixJQUFJ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Q0FLNUQsS0FBSzt1Q0FDTCxZQUFZLFNBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOytCQUtoRSxLQUFLOztJQUFtQjtRQUFmLFlBQVksRUFBRTs7NkRBQThCO0lBc0R4RCwwQkFBQztDQUFBLEFBM0pELElBMkpDO1NBcEdZLG1CQUFtQjs7O0lBQzlCLG1EQUFvRDs7SUFFcEQseUNBQXdDOztJQUN4Qyx3Q0FBMEM7Ozs7O0lBRTFDLHlDQUFvRDs7Ozs7SUFDcEQsd0NBQXlDOztJQUV6QyxxQ0FBMEM7O0lBQzFDLHNDQUF3Qjs7SUFDeEIsNkNBQWtEOztJQUVsRCwyQ0FBbUY7O0lBQ25GLDRDQUEwRzs7SUFDMUcsNkNBQTJFOztJQUMzRSw0Q0FBMEU7Ozs7Ozs7SUFNMUUseUNBQTZDOztJQUM3Qyw4Q0FBdUc7O0lBS3ZHLDZDQUFpRDs7SUFDakQsa0RBQStHOztJQUsvRywwQ0FBOEM7O0lBQzlDLCtDQUF5Rzs7SUFLekcsOENBQWtEOztJQUNsRCxtREFBaUg7O0lBS2pILDJDQUFzRDs7Ozs7SUFFMUMsa0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3RpbWUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7XG4gIE56RGF0ZUNlbGxEaXJlY3RpdmUgYXMgRGF0ZUNlbGwsXG4gIE56RGF0ZUZ1bGxDZWxsRGlyZWN0aXZlIGFzIERhdGVGdWxsQ2VsbCxcbiAgTnpNb250aENlbGxEaXJlY3RpdmUgYXMgTW9udGhDZWxsLFxuICBOek1vbnRoRnVsbENlbGxEaXJlY3RpdmUgYXMgTW9udGhGdWxsQ2VsbFxufSBmcm9tICcuL2NhbGVuZGFyLWNlbGxzJztcblxuZXhwb3J0IHR5cGUgTnpDYWxlbmRhck1vZGUgPSAnbW9udGgnIHwgJ3llYXInO1xudHlwZSBOekNhbGVuZGFyRGF0ZVRlbXBsYXRlID0gVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IERhdGUgfT47XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6ICduei1jYWxlbmRhcicsXG4gIGV4cG9ydEFzOiAnbnpDYWxlbmRhcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG56LWNhbGVuZGFyLWhlYWRlclxuICAgICAgW2Z1bGxzY3JlZW5dPVwibnpGdWxsc2NyZWVuXCJcbiAgICAgIFthY3RpdmVEYXRlXT1cImFjdGl2ZURhdGVcIlxuICAgICAgWyhtb2RlKV09XCJuek1vZGVcIlxuICAgICAgKG1vZGVDaGFuZ2UpPVwib25Nb2RlQ2hhbmdlKCRldmVudClcIlxuICAgICAgKHllYXJDaGFuZ2UpPVwib25ZZWFyU2VsZWN0KCRldmVudClcIlxuICAgICAgKG1vbnRoQ2hhbmdlKT1cIm9uTW9udGhTZWxlY3QoJGV2ZW50KVwiXG4gICAgPlxuICAgIDwvbnotY2FsZW5kYXItaGVhZGVyPlxuXG4gICAgPGRpdiBjbGFzcz1cImFudC1waWNrZXItcGFuZWxcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcGlja2VyLXt7IG56TW9kZSA9PT0gJ21vbnRoJyA/ICdkYXRlJyA6ICdtb250aCcgfX0tcGFuZWxcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC1waWNrZXItYm9keVwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuek1vZGUgPT09ICdtb250aCc7IHRoZW4gbW9udGhNb2RlVGFibGU7IGVsc2UgeWVhck1vZGVUYWJsZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxuZy10ZW1wbGF0ZSAjbW9udGhNb2RlVGFibGU+XG4gICAgICA8IS0tICBUT0RPKEB3ZW5xaTczKSBbY2VsbFJlbmRlcl0gW2Z1bGxDZWxsUmVuZGVyXSAtLT5cbiAgICAgIDxkYXRlLXRhYmxlXG4gICAgICAgIFtwcmVmaXhDbHNdPVwicHJlZml4Q2xzXCJcbiAgICAgICAgW3ZhbHVlXT1cImFjdGl2ZURhdGVcIlxuICAgICAgICBbYWN0aXZlRGF0ZV09XCJhY3RpdmVEYXRlXCJcbiAgICAgICAgW2NlbGxSZW5kZXJdPVwiJGFueShkYXRlQ2VsbClcIlxuICAgICAgICBbZnVsbENlbGxSZW5kZXJdPVwiJGFueShkYXRlRnVsbENlbGwpXCJcbiAgICAgICAgW2Rpc2FibGVkRGF0ZV09XCJuekRpc2FibGVkRGF0ZVwiXG4gICAgICAgICh2YWx1ZUNoYW5nZSk9XCJvbkRhdGVTZWxlY3QoJGV2ZW50KVwiXG4gICAgICA+PC9kYXRlLXRhYmxlPlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8IS0tICBUT0RPKEB3ZW5xaTczKSBbY2VsbFJlbmRlcl0gW2Z1bGxDZWxsUmVuZGVyXSAtLT5cbiAgICA8bmctdGVtcGxhdGUgI3llYXJNb2RlVGFibGU+XG4gICAgICA8bW9udGgtdGFibGVcbiAgICAgICAgW3ByZWZpeENsc109XCJwcmVmaXhDbHNcIlxuICAgICAgICBbdmFsdWVdPVwiYWN0aXZlRGF0ZVwiXG4gICAgICAgIFthY3RpdmVEYXRlXT1cImFjdGl2ZURhdGVcIlxuICAgICAgICBbY2VsbFJlbmRlcl09XCIkYW55KG1vbnRoQ2VsbClcIlxuICAgICAgICBbZnVsbENlbGxSZW5kZXJdPVwiJGFueShtb250aEZ1bGxDZWxsKVwiXG4gICAgICAgICh2YWx1ZUNoYW5nZSk9XCJvbkRhdGVTZWxlY3QoJGV2ZW50KVwiXG4gICAgICA+PC9tb250aC10YWJsZT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtcGlja2VyLWNhbGVuZGFyXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmFudC1waWNrZXItY2FsZW5kYXItZnVsbF0nOiAnbnpGdWxsc2NyZWVuJyxcbiAgICAnW2NsYXNzLmFudC1waWNrZXItY2FsZW5kYXItbWluaV0nOiAnIW56RnVsbHNjcmVlbidcbiAgfSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpDYWxlbmRhckNvbXBvbmVudCksIG11bHRpOiB0cnVlIH1dXG59KVxuZXhwb3J0IGNsYXNzIE56Q2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzIHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RnVsbHNjcmVlbjogQm9vbGVhbklucHV0O1xuXG4gIGFjdGl2ZURhdGU6IENhbmR5RGF0ZSA9IG5ldyBDYW5keURhdGUoKTtcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LXBpY2tlci1jYWxlbmRhcic7XG5cbiAgcHJpdmF0ZSBvbkNoYW5nZUZuOiAoZGF0ZTogRGF0ZSkgPT4gdm9pZCA9ICgpID0+IHt9O1xuICBwcml2YXRlIG9uVG91Y2hGbjogKCkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gIEBJbnB1dCgpIG56TW9kZTogTnpDYWxlbmRhck1vZGUgPSAnbW9udGgnO1xuICBASW5wdXQoKSBuelZhbHVlPzogRGF0ZTtcbiAgQElucHV0KCkgbnpEaXNhYmxlZERhdGU/OiAoZGF0ZTogRGF0ZSkgPT4gYm9vbGVhbjtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpNb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TnpDYWxlbmRhck1vZGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpQYW5lbENoYW5nZTogRXZlbnRFbWl0dGVyPHsgZGF0ZTogRGF0ZTsgbW9kZTogTnpDYWxlbmRhck1vZGUgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlbGVjdENoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBDYW5ub3QgdXNlIEBJbnB1dCBhbmQgQENvbnRlbnRDaGlsZCBvbiBvbmUgdmFyaWFibGVcbiAgICogYmVjYXVzZSB7IHN0YXRpYzogZmFsc2UgfSB3aWxsIG1ha2UgQElucHV0IHByb3BlcnR5IGdldCBkZWxheWVkXG4gICAqKi9cbiAgQElucHV0KCkgbnpEYXRlQ2VsbD86IE56Q2FsZW5kYXJEYXRlVGVtcGxhdGU7XG4gIEBDb250ZW50Q2hpbGQoRGF0ZUNlbGwsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogVGVtcGxhdGVSZWYgfSkgbnpEYXRlQ2VsbENoaWxkPzogTnpDYWxlbmRhckRhdGVUZW1wbGF0ZTtcbiAgZ2V0IGRhdGVDZWxsKCk6IE56Q2FsZW5kYXJEYXRlVGVtcGxhdGUge1xuICAgIHJldHVybiAodGhpcy5uekRhdGVDZWxsIHx8IHRoaXMubnpEYXRlQ2VsbENoaWxkKSE7XG4gIH1cblxuICBASW5wdXQoKSBuekRhdGVGdWxsQ2VsbD86IE56Q2FsZW5kYXJEYXRlVGVtcGxhdGU7XG4gIEBDb250ZW50Q2hpbGQoRGF0ZUZ1bGxDZWxsLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IFRlbXBsYXRlUmVmIH0pIG56RGF0ZUZ1bGxDZWxsQ2hpbGQ/OiBOekNhbGVuZGFyRGF0ZVRlbXBsYXRlO1xuICBnZXQgZGF0ZUZ1bGxDZWxsKCk6IE56Q2FsZW5kYXJEYXRlVGVtcGxhdGUge1xuICAgIHJldHVybiAodGhpcy5uekRhdGVGdWxsQ2VsbCB8fCB0aGlzLm56RGF0ZUZ1bGxDZWxsQ2hpbGQpITtcbiAgfVxuXG4gIEBJbnB1dCgpIG56TW9udGhDZWxsPzogTnpDYWxlbmRhckRhdGVUZW1wbGF0ZTtcbiAgQENvbnRlbnRDaGlsZChNb250aENlbGwsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogVGVtcGxhdGVSZWYgfSkgbnpNb250aENlbGxDaGlsZD86IE56Q2FsZW5kYXJEYXRlVGVtcGxhdGU7XG4gIGdldCBtb250aENlbGwoKTogTnpDYWxlbmRhckRhdGVUZW1wbGF0ZSB7XG4gICAgcmV0dXJuICh0aGlzLm56TW9udGhDZWxsIHx8IHRoaXMubnpNb250aENlbGxDaGlsZCkhO1xuICB9XG5cbiAgQElucHV0KCkgbnpNb250aEZ1bGxDZWxsPzogTnpDYWxlbmRhckRhdGVUZW1wbGF0ZTtcbiAgQENvbnRlbnRDaGlsZChNb250aEZ1bGxDZWxsLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IFRlbXBsYXRlUmVmIH0pIG56TW9udGhGdWxsQ2VsbENoaWxkPzogTnpDYWxlbmRhckRhdGVUZW1wbGF0ZTtcbiAgZ2V0IG1vbnRoRnVsbENlbGwoKTogTnpDYWxlbmRhckRhdGVUZW1wbGF0ZSB7XG4gICAgcmV0dXJuICh0aGlzLm56TW9udGhGdWxsQ2VsbCB8fCB0aGlzLm56TW9udGhGdWxsQ2VsbENoaWxkKSE7XG4gIH1cblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpGdWxsc2NyZWVuOiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgb25Nb2RlQ2hhbmdlKG1vZGU6IE56Q2FsZW5kYXJNb2RlKTogdm9pZCB7XG4gICAgdGhpcy5uek1vZGVDaGFuZ2UuZW1pdChtb2RlKTtcbiAgICB0aGlzLm56UGFuZWxDaGFuZ2UuZW1pdCh7IGRhdGU6IHRoaXMuYWN0aXZlRGF0ZS5uYXRpdmVEYXRlLCBtb2RlIH0pO1xuICB9XG5cbiAgb25ZZWFyU2VsZWN0KHllYXI6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmFjdGl2ZURhdGUuc2V0WWVhcih5ZWFyKTtcbiAgICB0aGlzLnVwZGF0ZURhdGUoZGF0ZSk7XG4gIH1cblxuICBvbk1vbnRoU2VsZWN0KG1vbnRoOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBkYXRlID0gdGhpcy5hY3RpdmVEYXRlLnNldE1vbnRoKG1vbnRoKTtcbiAgICB0aGlzLnVwZGF0ZURhdGUoZGF0ZSk7XG4gIH1cblxuICBvbkRhdGVTZWxlY3QoZGF0ZTogQ2FuZHlEYXRlKTogdm9pZCB7XG4gICAgLy8gT25seSBhY3RpdmVEYXRlIGlzIGVub3VnaCBpbiBjYWxlbmRhclxuICAgIC8vIHRoaXMudmFsdWUgPSBkYXRlO1xuICAgIHRoaXMudXBkYXRlRGF0ZShkYXRlKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IERhdGUgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVEYXRlKG5ldyBDYW5keURhdGUodmFsdWUgYXMgRGF0ZSksIGZhbHNlKTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChkYXRlOiBEYXRlKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZUZuID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaEZuID0gZm47XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZURhdGUoZGF0ZTogQ2FuZHlEYXRlLCB0b3VjaGVkOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlRGF0ZSA9IGRhdGU7XG5cbiAgICBpZiAodG91Y2hlZCkge1xuICAgICAgdGhpcy5vbkNoYW5nZUZuKGRhdGUubmF0aXZlRGF0ZSk7XG4gICAgICB0aGlzLm9uVG91Y2hGbigpO1xuICAgICAgdGhpcy5uelNlbGVjdENoYW5nZS5lbWl0KGRhdGUubmF0aXZlRGF0ZSk7XG4gICAgICB0aGlzLm56VmFsdWVDaGFuZ2UuZW1pdChkYXRlLm5hdGl2ZURhdGUpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uelZhbHVlKSB7XG4gICAgICB0aGlzLnVwZGF0ZURhdGUobmV3IENhbmR5RGF0ZSh0aGlzLm56VmFsdWUpLCBmYWxzZSk7XG4gICAgfVxuICB9XG59XG4iXX0=