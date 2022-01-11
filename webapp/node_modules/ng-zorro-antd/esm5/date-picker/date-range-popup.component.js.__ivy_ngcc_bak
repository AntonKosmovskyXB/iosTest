/**
 * @fileoverview added by tsickle
 * Generated from: date-range-popup.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CandyDate, cloneDate, sortRangeValue } from 'ng-zorro-antd/core/time';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DatePickerService } from './date-picker.service';
import { getTimeConfig, isAllowedDate, PREFIX_CLASS } from './util';
var DateRangePopupComponent = /** @class */ (function () {
    function DateRangePopupComponent(datePickerService, cdr) {
        var _this = this;
        this.datePickerService = datePickerService;
        this.cdr = cdr;
        this.panelModeChange = new EventEmitter();
        this.calendarChange = new EventEmitter();
        this.resultOk = new EventEmitter(); // Emitted when done with date selecting
        // Emitted when done with date selecting
        this.prefixCls = PREFIX_CLASS;
        this.endPanelMode = 'date';
        this.timeOptions = null;
        this.hoverValue = []; // Range ONLY
        // Range ONLY
        this.destroy$ = new Subject();
        this.disabledStartTime = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return _this.disabledTime && _this.disabledTime(value, 'start');
        });
        this.disabledEndTime = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return _this.disabledTime && _this.disabledTime(value, 'end');
        });
    }
    Object.defineProperty(DateRangePopupComponent.prototype, "hasTimePicker", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.showTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateRangePopupComponent.prototype, "hasFooter", {
        get: /**
         * @return {?}
         */
        function () {
            return this.showToday || this.hasTimePicker || !!this.extraFooter || !!this.ranges;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.datePickerService.valueChange$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.initActiveDate();
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DateRangePopupComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        // Parse showTime options
        if (changes.showTime || changes.disabledTime) {
            if (this.showTime) {
                this.buildTimeOptions();
            }
        }
        if (changes.panelMode) {
            this.endPanelMode = this.panelMode;
        }
    };
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.initActiveDate = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var activeDate = this.datePickerService.hasValue()
            ? this.datePickerService.value
            : this.datePickerService.makeValue((/** @type {?} */ (this.defaultPickerValue)));
        this.datePickerService.setActiveDate(activeDate, !this.showTime);
    };
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.onClickOk = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var otherPart = this.datePickerService.activeInput === 'left' ? 'right' : 'left';
        /** @type {?} */
        var selectedValue = this.datePickerService.value;
        if (this.isAllowed(selectedValue, true)) {
            this.resultOk.emit();
        }
        else {
            if (this.isRange && this.isOneAllowed((/** @type {?} */ (selectedValue)))) {
                this.datePickerService.inputPartChange$.next(otherPart);
            }
            else {
                this.datePickerService.inputPartChange$.next();
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateRangePopupComponent.prototype.onClickToday = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.changeValueFromSelect(value, !this.showTime);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateRangePopupComponent.prototype.onDayHover = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.isRange) {
            return;
        }
        /** @type {?} */
        var otherInputIndex = { left: 1, right: 0 }[this.datePickerService.activeInput];
        /** @type {?} */
        var base = (/** @type {?} */ (((/** @type {?} */ (this.datePickerService.value)))[otherInputIndex]));
        if (base) {
            if (base.isBeforeDay(value)) {
                this.hoverValue = [base, value];
            }
            else {
                this.hoverValue = [value, base];
            }
        }
    };
    /**
     * @param {?} mode
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.onPanelModeChange = /**
     * @param {?} mode
     * @param {?=} partType
     * @return {?}
     */
    function (mode, partType) {
        if (this.isRange) {
            /** @type {?} */
            var index = this.datePickerService.getActiveIndex(partType);
            if (index === 0) {
                this.panelMode = (/** @type {?} */ ([mode, this.panelMode[1]]));
            }
            else {
                this.panelMode = (/** @type {?} */ ([this.panelMode[0], mode]));
            }
        }
        else {
            this.panelMode = mode;
        }
        // this.cdr.markForCheck();
        this.panelModeChange.emit(this.panelMode);
    };
    /**
     * @param {?} value
     * @param {?} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.onActiveDateChange = /**
     * @param {?} value
     * @param {?} partType
     * @return {?}
     */
    function (value, partType) {
        if (this.isRange) {
            if (partType === 'left') {
                this.datePickerService.activeDate = [value, value.addMonths(1)];
            }
            else {
                this.datePickerService.activeDate = [value.addMonths(-1), value];
            }
        }
        else {
            this.datePickerService.activeDate = value;
        }
    };
    /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.onSelectTime = /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    function (value, partType) {
        if (this.isRange) {
            /** @type {?} */
            var newValue = (/** @type {?} */ (cloneDate(this.datePickerService.value)));
            /** @type {?} */
            var index = this.datePickerService.getActiveIndex(partType);
            newValue[index] = this.overrideHms(value, newValue[index]);
            this.datePickerService.setValue(newValue);
        }
        else {
            /** @type {?} */
            var newValue = this.overrideHms(value, (/** @type {?} */ (this.datePickerService.value)));
            this.datePickerService.setValue(newValue); // If not select a date currently, use today
        }
        this.datePickerService.inputPartChange$.next();
        this.buildTimeOptions();
    };
    /**
     * @param {?} value
     * @param {?=} emitValue
     * @return {?}
     */
    DateRangePopupComponent.prototype.changeValueFromSelect = /**
     * @param {?} value
     * @param {?=} emitValue
     * @return {?}
     */
    function (value, emitValue) {
        if (emitValue === void 0) { emitValue = true; }
        if (this.isRange) {
            /** @type {?} */
            var selectedValue = (/** @type {?} */ (cloneDate(this.datePickerService.value)));
            /** @type {?} */
            var otherPart = void 0;
            if (this.datePickerService.activeInput === 'left') {
                otherPart = 'right';
                selectedValue[0] = value;
            }
            else {
                otherPart = 'left';
                selectedValue[1] = value;
            }
            selectedValue = sortRangeValue(selectedValue);
            this.hoverValue = selectedValue;
            this.datePickerService.setValue(selectedValue);
            this.datePickerService.setActiveDate(selectedValue, !this.showTime);
            this.datePickerService.inputPartChange$.next();
            if (!this.isAllowed(selectedValue)) {
                return;
            }
            if (emitValue) {
                // If the other input has value
                if (this.isBothAllowed(selectedValue)) {
                    this.calendarChange.emit(selectedValue);
                    this.clearHoverValue();
                    this.datePickerService.emitValue$.next();
                }
                else {
                    this.calendarChange.emit([value.clone()]);
                    this.datePickerService.inputPartChange$.next((/** @type {?} */ (otherPart)));
                }
            }
        }
        else {
            this.datePickerService.setValue(value);
            this.datePickerService.setActiveDate(value, !this.showTime);
            this.datePickerService.inputPartChange$.next();
            if (!this.isAllowed(value)) {
                return;
            }
            if (emitValue) {
                this.datePickerService.emitValue$.next();
            }
        }
    };
    /**
     * @param {?} panelMode
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.getPanelMode = /**
     * @param {?} panelMode
     * @param {?=} partType
     * @return {?}
     */
    function (panelMode, partType) {
        if (this.isRange) {
            return (/** @type {?} */ (panelMode[this.datePickerService.getActiveIndex(partType)]));
        }
        else {
            return (/** @type {?} */ (panelMode));
        }
    };
    // Get single value or part value of a range
    // Get single value or part value of a range
    /**
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.getValue = 
    // Get single value or part value of a range
    /**
     * @param {?=} partType
     * @return {?}
     */
    function (partType) {
        if (this.isRange) {
            return (((/** @type {?} */ (this.datePickerService.value))) || [])[this.datePickerService.getActiveIndex(partType)];
        }
        else {
            return (/** @type {?} */ (this.datePickerService.value));
        }
    };
    /**
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.getActiveDate = /**
     * @param {?=} partType
     * @return {?}
     */
    function (partType) {
        if (this.isRange) {
            return ((/** @type {?} */ (this.datePickerService.activeDate)))[this.datePickerService.getActiveIndex(partType)];
        }
        else {
            return (/** @type {?} */ (this.datePickerService.activeDate));
        }
    };
    /**
     * @param {?} selectedValue
     * @return {?}
     */
    DateRangePopupComponent.prototype.isOneAllowed = /**
     * @param {?} selectedValue
     * @return {?}
     */
    function (selectedValue) {
        /** @type {?} */
        var index = this.datePickerService.getActiveIndex();
        /** @type {?} */
        var disabledTimeArr = [this.disabledStartTime, this.disabledEndTime];
        return isAllowedDate((/** @type {?} */ (selectedValue[index])), this.disabledDate, disabledTimeArr[index]);
    };
    /**
     * @param {?} selectedValue
     * @return {?}
     */
    DateRangePopupComponent.prototype.isBothAllowed = /**
     * @param {?} selectedValue
     * @return {?}
     */
    function (selectedValue) {
        return (isAllowedDate((/** @type {?} */ (selectedValue[0])), this.disabledDate, this.disabledStartTime) &&
            isAllowedDate((/** @type {?} */ (selectedValue[1])), this.disabledDate, this.disabledEndTime));
    };
    /**
     * @param {?} value
     * @param {?=} isBoth
     * @return {?}
     */
    DateRangePopupComponent.prototype.isAllowed = /**
     * @param {?} value
     * @param {?=} isBoth
     * @return {?}
     */
    function (value, isBoth) {
        if (isBoth === void 0) { isBoth = false; }
        if (this.isRange) {
            return isBoth ? this.isBothAllowed((/** @type {?} */ (value))) : this.isOneAllowed((/** @type {?} */ (value)));
        }
        else {
            return isAllowedDate((/** @type {?} */ (value)), this.disabledDate, this.disabledTime);
        }
    };
    /**
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.getTimeOptions = /**
     * @param {?=} partType
     * @return {?}
     */
    function (partType) {
        if (this.showTime && this.timeOptions) {
            return this.timeOptions instanceof Array ? this.timeOptions[this.datePickerService.getActiveIndex(partType)] : this.timeOptions;
        }
        return null;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    DateRangePopupComponent.prototype.onClickPresetRange = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        /** @type {?} */
        var value = typeof val === 'function' ? val() : val;
        if (value) {
            this.datePickerService.setValue([new CandyDate(value[0]), new CandyDate(value[1])]);
            this.resultOk.emit();
        }
    };
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.onPresetRangeMouseLeave = /**
     * @return {?}
     */
    function () {
        this.clearHoverValue();
    };
    /**
     * @param {?} val
     * @return {?}
     */
    DateRangePopupComponent.prototype.onHoverPresetRange = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (typeof val !== 'function') {
            this.hoverValue = [new CandyDate(val[0]), new CandyDate(val[1])];
        }
    };
    /**
     * @param {?=} obj
     * @return {?}
     */
    DateRangePopupComponent.prototype.getObjectKeys = /**
     * @param {?=} obj
     * @return {?}
     */
    function (obj) {
        return obj ? Object.keys(obj) : [];
    };
    /**
     * @param {?} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.show = /**
     * @param {?} partType
     * @return {?}
     */
    function (partType) {
        /** @type {?} */
        var hide = this.showTime && this.isRange && this.datePickerService.activeInput !== partType;
        return !hide;
    };
    /**
     * @private
     * @return {?}
     */
    DateRangePopupComponent.prototype.clearHoverValue = /**
     * @private
     * @return {?}
     */
    function () {
        this.hoverValue = [];
    };
    /**
     * @private
     * @return {?}
     */
    DateRangePopupComponent.prototype.buildTimeOptions = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.showTime) {
            /** @type {?} */
            var showTime = typeof this.showTime === 'object' ? this.showTime : {};
            if (this.isRange) {
                /** @type {?} */
                var value = (/** @type {?} */ (this.datePickerService.value));
                this.timeOptions = [this.overrideTimeOptions(showTime, value[0], 'start'), this.overrideTimeOptions(showTime, value[1], 'end')];
            }
            else {
                this.timeOptions = this.overrideTimeOptions(showTime, (/** @type {?} */ (this.datePickerService.value)));
            }
        }
        else {
            this.timeOptions = null;
        }
    };
    /**
     * @private
     * @param {?} origin
     * @param {?} value
     * @param {?=} partial
     * @return {?}
     */
    DateRangePopupComponent.prototype.overrideTimeOptions = /**
     * @private
     * @param {?} origin
     * @param {?} value
     * @param {?=} partial
     * @return {?}
     */
    function (origin, value, partial) {
        /** @type {?} */
        var disabledTimeFn;
        if (partial) {
            disabledTimeFn = partial === 'start' ? this.disabledStartTime : this.disabledEndTime;
        }
        else {
            disabledTimeFn = this.disabledTime;
        }
        return __assign(__assign({}, origin), getTimeConfig(value, disabledTimeFn));
    };
    /**
     * @private
     * @param {?} newValue
     * @param {?} oldValue
     * @return {?}
     */
    DateRangePopupComponent.prototype.overrideHms = /**
     * @private
     * @param {?} newValue
     * @param {?} oldValue
     * @return {?}
     */
    function (newValue, oldValue) {
        // tslint:disable-next-line:no-parameter-reassignment
        newValue = newValue || new CandyDate();
        // tslint:disable-next-line:no-parameter-reassignment
        oldValue = oldValue || new CandyDate();
        return oldValue.setHms(newValue.getHours(), newValue.getMinutes(), newValue.getSeconds());
    };
    DateRangePopupComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'date-range-popup',
                    exportAs: 'dateRangePopup',
                    template: "\n    <ng-container *ngIf=\"isRange; else singlePanel\">\n      <div class=\"{{ prefixCls }}-range-wrapper {{ prefixCls }}-date-range-wrapper\">\n        <div class=\"{{ prefixCls }}-range-arrow\" [ngStyle]=\"datePickerService?.arrowPositionStyle!\"></div>\n        <div class=\"{{ prefixCls }}-panel-container\">\n          <div class=\"{{ prefixCls }}-panels\">\n            <ng-container *ngTemplateOutlet=\"tplRangePart; context: { partType: 'left' }\"></ng-container>\n            <ng-container *ngTemplateOutlet=\"tplRangePart; context: { partType: 'right' }\"></ng-container>\n          </div>\n          <ng-container *ngTemplateOutlet=\"tplFooter\"></ng-container>\n        </div>\n      </div>\n    </ng-container>\n    <ng-template #singlePanel>\n      <div\n        class=\"{{ prefixCls }}-panel-container {{ showWeek ? prefixCls + '-week-number' : '' }} {{\n          hasTimePicker ? prefixCls + '-time' : ''\n        }} {{ isRange ? prefixCls + '-range' : '' }}\"\n      >\n        <div class=\"{{ prefixCls }}-panel\" tabindex=\"-1\">\n          <!-- Single ONLY -->\n          <ng-container *ngTemplateOutlet=\"tplInnerPopup\"></ng-container>\n          <ng-container *ngTemplateOutlet=\"tplFooter\"></ng-container>\n        </div>\n      </div>\n    </ng-template>\n\n    <ng-template #tplInnerPopup let-partType=\"partType\">\n      <!-- TODO(@wenqi73) [selectedValue] [hoverValue] types-->\n      <inner-popup\n        *ngIf=\"show(partType)\"\n        [showWeek]=\"showWeek\"\n        [endPanelMode]=\"getPanelMode(endPanelMode, partType)\"\n        [partType]=\"partType\"\n        [locale]=\"locale!\"\n        [showTimePicker]=\"hasTimePicker\"\n        [timeOptions]=\"getTimeOptions(partType)\"\n        [panelMode]=\"getPanelMode(panelMode, partType)\"\n        (panelModeChange)=\"onPanelModeChange($event, partType)\"\n        [activeDate]=\"getActiveDate(partType)\"\n        [value]=\"getValue(partType)\"\n        [disabledDate]=\"disabledDate\"\n        [dateRender]=\"dateRender\"\n        [selectedValue]=\"$any(datePickerService?.value)\"\n        [hoverValue]=\"$any(hoverValue)\"\n        (dayHover)=\"onDayHover($event)\"\n        (selectDate)=\"changeValueFromSelect($event, !showTime)\"\n        (selectTime)=\"onSelectTime($event, partType)\"\n        (headerChange)=\"onActiveDateChange($event, partType)\"\n      ></inner-popup>\n    </ng-template>\n\n    <ng-template #tplFooter>\n      <calendar-footer\n        *ngIf=\"hasFooter\"\n        [locale]=\"locale!\"\n        [isRange]=\"isRange\"\n        [showToday]=\"showToday\"\n        [hasTimePicker]=\"hasTimePicker\"\n        [okDisabled]=\"!isAllowed($any(datePickerService?.value))\"\n        [extraFooter]=\"extraFooter\"\n        [rangeQuickSelector]=\"ranges ? tplRangeQuickSelector : null\"\n        (clickOk)=\"onClickOk()\"\n        (clickToday)=\"onClickToday($event)\"\n      ></calendar-footer>\n    </ng-template>\n\n    <ng-template #tplRangePart let-partType=\"partType\">\n      <div class=\"{{ prefixCls }}-panel\">\n        <ng-container *ngTemplateOutlet=\"tplInnerPopup; context: { partType: partType }\"></ng-container>\n      </div>\n    </ng-template>\n\n    <!-- Range ONLY: Range Quick Selector -->\n    <ng-template #tplRangeQuickSelector>\n      <li\n        *ngFor=\"let name of getObjectKeys(ranges)\"\n        class=\"{{ prefixCls }}-preset\"\n        (click)=\"onClickPresetRange(ranges![name])\"\n        (mouseenter)=\"onHoverPresetRange(ranges![name])\"\n        (mouseleave)=\"onPresetRangeMouseLeave()\"\n      >\n        <span class=\"ant-tag ant-tag-blue\">{{ name }}</span>\n      </li>\n    </ng-template>\n  "
                }] }
    ];
    /** @nocollapse */
    DateRangePopupComponent.ctorParameters = function () { return [
        { type: DatePickerService },
        { type: ChangeDetectorRef }
    ]; };
    DateRangePopupComponent.propDecorators = {
        isRange: [{ type: Input }],
        showWeek: [{ type: Input }],
        locale: [{ type: Input }],
        format: [{ type: Input }],
        placeholder: [{ type: Input }],
        disabledDate: [{ type: Input }],
        disabledTime: [{ type: Input }],
        showToday: [{ type: Input }],
        showTime: [{ type: Input }],
        extraFooter: [{ type: Input }],
        ranges: [{ type: Input }],
        dateRender: [{ type: Input }],
        panelMode: [{ type: Input }],
        defaultPickerValue: [{ type: Input }],
        panelModeChange: [{ type: Output }],
        calendarChange: [{ type: Output }],
        resultOk: [{ type: Output }]
    };
    return DateRangePopupComponent;
}());
export { DateRangePopupComponent };
if (false) {
    /** @type {?} */
    DateRangePopupComponent.prototype.isRange;
    /** @type {?} */
    DateRangePopupComponent.prototype.showWeek;
    /** @type {?} */
    DateRangePopupComponent.prototype.locale;
    /** @type {?} */
    DateRangePopupComponent.prototype.format;
    /** @type {?} */
    DateRangePopupComponent.prototype.placeholder;
    /** @type {?} */
    DateRangePopupComponent.prototype.disabledDate;
    /** @type {?} */
    DateRangePopupComponent.prototype.disabledTime;
    /** @type {?} */
    DateRangePopupComponent.prototype.showToday;
    /** @type {?} */
    DateRangePopupComponent.prototype.showTime;
    /** @type {?} */
    DateRangePopupComponent.prototype.extraFooter;
    /** @type {?} */
    DateRangePopupComponent.prototype.ranges;
    /** @type {?} */
    DateRangePopupComponent.prototype.dateRender;
    /** @type {?} */
    DateRangePopupComponent.prototype.panelMode;
    /** @type {?} */
    DateRangePopupComponent.prototype.defaultPickerValue;
    /** @type {?} */
    DateRangePopupComponent.prototype.panelModeChange;
    /** @type {?} */
    DateRangePopupComponent.prototype.calendarChange;
    /** @type {?} */
    DateRangePopupComponent.prototype.resultOk;
    /** @type {?} */
    DateRangePopupComponent.prototype.prefixCls;
    /** @type {?} */
    DateRangePopupComponent.prototype.endPanelMode;
    /** @type {?} */
    DateRangePopupComponent.prototype.timeOptions;
    /** @type {?} */
    DateRangePopupComponent.prototype.hoverValue;
    /** @type {?} */
    DateRangePopupComponent.prototype.destroy$;
    /** @type {?} */
    DateRangePopupComponent.prototype.disabledStartTime;
    /** @type {?} */
    DateRangePopupComponent.prototype.disabledEndTime;
    /** @type {?} */
    DateRangePopupComponent.prototype.datePickerService;
    /** @type {?} */
    DateRangePopupComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1wb3B1cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyLyIsInNvdXJjZXMiOlsiZGF0ZS1yYW5nZS1wb3B1cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFHTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQWdDLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRzdHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBVzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUVwRTtJQThIRSxpQ0FBbUIsaUJBQW9DLEVBQVMsR0FBc0I7UUFBdEYsaUJBQTBGO1FBQXZFLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFBUyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWxCbkUsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBNkIsQ0FBQztRQUNoRSxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQ3JELGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDLENBQUMsd0NBQXdDOztRQUVoRyxjQUFTLEdBQVcsWUFBWSxDQUFDO1FBQ2pDLGlCQUFZLEdBQThCLE1BQU0sQ0FBQztRQUNqRCxnQkFBVyxHQUFxRCxJQUFJLENBQUM7UUFDckUsZUFBVSxHQUFrQixFQUFFLENBQUMsQ0FBQyxhQUFhOztRQUM3Qyxh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LEtBQUs7K0JBQ0wsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSzt5QkFDTCxLQUFLOzZCQUNMLEtBQUs7NEJBQ0wsS0FBSztxQ0FDTCxLQUFLO2tDQUNMLE1BQU07aUNBQ04sTUFBTTsyQkFDTixNQUFNOztJQXFTVCw4QkFBQztDQUFBLEFBblpELElBbVpDO1NBdFRZLHVCQUF1Qjs7O0lBQ2xDLDBDQUEyQjs7SUFDM0IsMkNBQTRCOztJQUM1Qix5Q0FBc0Q7O0lBQ3RELHlDQUF5Qjs7SUFDekIsOENBQXlDOztJQUN6QywrQ0FBdUM7O0lBQ3ZDLCtDQUF1Qzs7SUFDdkMsNENBQTZCOztJQUM3QiwyQ0FBaUQ7O0lBQ2pELDhDQUFrRDs7SUFDbEQseUNBQStCOztJQUMvQiw2Q0FBNEY7O0lBQzVGLDRDQUErQzs7SUFDL0MscURBQWdFOztJQUNoRSxrREFBbUY7O0lBQ25GLGlEQUF3RTs7SUFDeEUsMkNBQXVEOztJQUV2RCw0Q0FBaUM7O0lBQ2pDLCtDQUFpRDs7SUFDakQsOENBQXFFOztJQUNyRSw2Q0FBK0I7O0lBQy9CLDJDQUF5Qjs7SUE2THpCLG9EQUVFOztJQUVGLGtEQUVFOztJQXpMVSxvREFBMkM7O0lBQUUsc0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDYW5keURhdGUsIGNsb25lRGF0ZSwgQ29tcGF0aWJsZVZhbHVlLCBTaW5nbGVWYWx1ZSwgc29ydFJhbmdlVmFsdWUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdGltZSc7XG5pbXBvcnQgeyBGdW5jdGlvblByb3AgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlclNlcnZpY2UgfSBmcm9tICcuL2RhdGUtcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgQ29tcGF0aWJsZURhdGUsXG4gIERpc2FibGVkRGF0ZUZuLFxuICBEaXNhYmxlZFRpbWVGbixcbiAgRGlzYWJsZWRUaW1lUGFydGlhbCxcbiAgTnpEYXRlTW9kZSxcbiAgUHJlc2V0UmFuZ2VzLFxuICBSYW5nZVBhcnRUeXBlLFxuICBTdXBwb3J0VGltZU9wdGlvbnNcbn0gZnJvbSAnLi9zdGFuZGFyZC10eXBlcyc7XG5pbXBvcnQgeyBnZXRUaW1lQ29uZmlnLCBpc0FsbG93ZWREYXRlLCBQUkVGSVhfQ0xBU1MgfSBmcm9tICcuL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdkYXRlLXJhbmdlLXBvcHVwJyxcbiAgZXhwb3J0QXM6ICdkYXRlUmFuZ2VQb3B1cCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzUmFuZ2U7IGVsc2Ugc2luZ2xlUGFuZWxcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tcmFuZ2Utd3JhcHBlciB7eyBwcmVmaXhDbHMgfX0tZGF0ZS1yYW5nZS13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tcmFuZ2UtYXJyb3dcIiBbbmdTdHlsZV09XCJkYXRlUGlja2VyU2VydmljZT8uYXJyb3dQb3NpdGlvblN0eWxlIVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXBhbmVsLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tcGFuZWxzXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidHBsUmFuZ2VQYXJ0OyBjb250ZXh0OiB7IHBhcnRUeXBlOiAnbGVmdCcgfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRwbFJhbmdlUGFydDsgY29udGV4dDogeyBwYXJ0VHlwZTogJ3JpZ2h0JyB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRwbEZvb3RlclwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy10ZW1wbGF0ZSAjc2luZ2xlUGFuZWw+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXBhbmVsLWNvbnRhaW5lciB7eyBzaG93V2VlayA/IHByZWZpeENscyArICctd2Vlay1udW1iZXInIDogJycgfX0ge3tcbiAgICAgICAgICBoYXNUaW1lUGlja2VyID8gcHJlZml4Q2xzICsgJy10aW1lJyA6ICcnXG4gICAgICAgIH19IHt7IGlzUmFuZ2UgPyBwcmVmaXhDbHMgKyAnLXJhbmdlJyA6ICcnIH19XCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1wYW5lbFwiIHRhYmluZGV4PVwiLTFcIj5cbiAgICAgICAgICA8IS0tIFNpbmdsZSBPTkxZIC0tPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0cGxJbm5lclBvcHVwXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRwbEZvb3RlclwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8bmctdGVtcGxhdGUgI3RwbElubmVyUG9wdXAgbGV0LXBhcnRUeXBlPVwicGFydFR5cGVcIj5cbiAgICAgIDwhLS0gVE9ETyhAd2VucWk3MykgW3NlbGVjdGVkVmFsdWVdIFtob3ZlclZhbHVlXSB0eXBlcy0tPlxuICAgICAgPGlubmVyLXBvcHVwXG4gICAgICAgICpuZ0lmPVwic2hvdyhwYXJ0VHlwZSlcIlxuICAgICAgICBbc2hvd1dlZWtdPVwic2hvd1dlZWtcIlxuICAgICAgICBbZW5kUGFuZWxNb2RlXT1cImdldFBhbmVsTW9kZShlbmRQYW5lbE1vZGUsIHBhcnRUeXBlKVwiXG4gICAgICAgIFtwYXJ0VHlwZV09XCJwYXJ0VHlwZVwiXG4gICAgICAgIFtsb2NhbGVdPVwibG9jYWxlIVwiXG4gICAgICAgIFtzaG93VGltZVBpY2tlcl09XCJoYXNUaW1lUGlja2VyXCJcbiAgICAgICAgW3RpbWVPcHRpb25zXT1cImdldFRpbWVPcHRpb25zKHBhcnRUeXBlKVwiXG4gICAgICAgIFtwYW5lbE1vZGVdPVwiZ2V0UGFuZWxNb2RlKHBhbmVsTW9kZSwgcGFydFR5cGUpXCJcbiAgICAgICAgKHBhbmVsTW9kZUNoYW5nZSk9XCJvblBhbmVsTW9kZUNoYW5nZSgkZXZlbnQsIHBhcnRUeXBlKVwiXG4gICAgICAgIFthY3RpdmVEYXRlXT1cImdldEFjdGl2ZURhdGUocGFydFR5cGUpXCJcbiAgICAgICAgW3ZhbHVlXT1cImdldFZhbHVlKHBhcnRUeXBlKVwiXG4gICAgICAgIFtkaXNhYmxlZERhdGVdPVwiZGlzYWJsZWREYXRlXCJcbiAgICAgICAgW2RhdGVSZW5kZXJdPVwiZGF0ZVJlbmRlclwiXG4gICAgICAgIFtzZWxlY3RlZFZhbHVlXT1cIiRhbnkoZGF0ZVBpY2tlclNlcnZpY2U/LnZhbHVlKVwiXG4gICAgICAgIFtob3ZlclZhbHVlXT1cIiRhbnkoaG92ZXJWYWx1ZSlcIlxuICAgICAgICAoZGF5SG92ZXIpPVwib25EYXlIb3ZlcigkZXZlbnQpXCJcbiAgICAgICAgKHNlbGVjdERhdGUpPVwiY2hhbmdlVmFsdWVGcm9tU2VsZWN0KCRldmVudCwgIXNob3dUaW1lKVwiXG4gICAgICAgIChzZWxlY3RUaW1lKT1cIm9uU2VsZWN0VGltZSgkZXZlbnQsIHBhcnRUeXBlKVwiXG4gICAgICAgIChoZWFkZXJDaGFuZ2UpPVwib25BY3RpdmVEYXRlQ2hhbmdlKCRldmVudCwgcGFydFR5cGUpXCJcbiAgICAgID48L2lubmVyLXBvcHVwPlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8bmctdGVtcGxhdGUgI3RwbEZvb3Rlcj5cbiAgICAgIDxjYWxlbmRhci1mb290ZXJcbiAgICAgICAgKm5nSWY9XCJoYXNGb290ZXJcIlxuICAgICAgICBbbG9jYWxlXT1cImxvY2FsZSFcIlxuICAgICAgICBbaXNSYW5nZV09XCJpc1JhbmdlXCJcbiAgICAgICAgW3Nob3dUb2RheV09XCJzaG93VG9kYXlcIlxuICAgICAgICBbaGFzVGltZVBpY2tlcl09XCJoYXNUaW1lUGlja2VyXCJcbiAgICAgICAgW29rRGlzYWJsZWRdPVwiIWlzQWxsb3dlZCgkYW55KGRhdGVQaWNrZXJTZXJ2aWNlPy52YWx1ZSkpXCJcbiAgICAgICAgW2V4dHJhRm9vdGVyXT1cImV4dHJhRm9vdGVyXCJcbiAgICAgICAgW3JhbmdlUXVpY2tTZWxlY3Rvcl09XCJyYW5nZXMgPyB0cGxSYW5nZVF1aWNrU2VsZWN0b3IgOiBudWxsXCJcbiAgICAgICAgKGNsaWNrT2spPVwib25DbGlja09rKClcIlxuICAgICAgICAoY2xpY2tUb2RheSk9XCJvbkNsaWNrVG9kYXkoJGV2ZW50KVwiXG4gICAgICA+PC9jYWxlbmRhci1mb290ZXI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDxuZy10ZW1wbGF0ZSAjdHBsUmFuZ2VQYXJ0IGxldC1wYXJ0VHlwZT1cInBhcnRUeXBlXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXBhbmVsXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0cGxJbm5lclBvcHVwOyBjb250ZXh0OiB7IHBhcnRUeXBlOiBwYXJ0VHlwZSB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPCEtLSBSYW5nZSBPTkxZOiBSYW5nZSBRdWljayBTZWxlY3RvciAtLT5cbiAgICA8bmctdGVtcGxhdGUgI3RwbFJhbmdlUXVpY2tTZWxlY3Rvcj5cbiAgICAgIDxsaVxuICAgICAgICAqbmdGb3I9XCJsZXQgbmFtZSBvZiBnZXRPYmplY3RLZXlzKHJhbmdlcylcIlxuICAgICAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1wcmVzZXRcIlxuICAgICAgICAoY2xpY2spPVwib25DbGlja1ByZXNldFJhbmdlKHJhbmdlcyFbbmFtZV0pXCJcbiAgICAgICAgKG1vdXNlZW50ZXIpPVwib25Ib3ZlclByZXNldFJhbmdlKHJhbmdlcyFbbmFtZV0pXCJcbiAgICAgICAgKG1vdXNlbGVhdmUpPVwib25QcmVzZXRSYW5nZU1vdXNlTGVhdmUoKVwiXG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXRhZyBhbnQtdGFnLWJsdWVcIj57eyBuYW1lIH19PC9zcGFuPlxuICAgICAgPC9saT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIERhdGVSYW5nZVBvcHVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGlzUmFuZ2UhOiBib29sZWFuO1xuICBASW5wdXQoKSBzaG93V2VlayE6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxvY2FsZSE6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSBmb3JtYXQhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyITogc3RyaW5nIHwgc3RyaW5nW107XG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZT86IERpc2FibGVkRGF0ZUZuO1xuICBASW5wdXQoKSBkaXNhYmxlZFRpbWU/OiBEaXNhYmxlZFRpbWVGbjsgLy8gVGhpcyB3aWxsIGxlYWQgdG8gcmVidWlsZCB0aW1lIG9wdGlvbnNcbiAgQElucHV0KCkgc2hvd1RvZGF5ITogYm9vbGVhbjtcbiAgQElucHV0KCkgc2hvd1RpbWUhOiBTdXBwb3J0VGltZU9wdGlvbnMgfCBib29sZWFuO1xuICBASW5wdXQoKSBleHRyYUZvb3Rlcj86IFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nO1xuICBASW5wdXQoKSByYW5nZXM/OiBQcmVzZXRSYW5nZXM7XG4gIEBJbnB1dCgpIGRhdGVSZW5kZXI/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxEYXRlPiB8IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZz47XG4gIEBJbnB1dCgpIHBhbmVsTW9kZSE6IE56RGF0ZU1vZGUgfCBOekRhdGVNb2RlW107XG4gIEBJbnB1dCgpIGRlZmF1bHRQaWNrZXJWYWx1ZSE6IENvbXBhdGlibGVEYXRlIHwgdW5kZWZpbmVkIHwgbnVsbDtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHBhbmVsTW9kZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpEYXRlTW9kZSB8IE56RGF0ZU1vZGVbXT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNhbGVuZGFyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDb21wYXRpYmxlVmFsdWU+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSByZXN1bHRPayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTsgLy8gRW1pdHRlZCB3aGVuIGRvbmUgd2l0aCBkYXRlIHNlbGVjdGluZ1xuXG4gIHByZWZpeENsczogc3RyaW5nID0gUFJFRklYX0NMQVNTO1xuICBlbmRQYW5lbE1vZGU6IE56RGF0ZU1vZGUgfCBOekRhdGVNb2RlW10gPSAnZGF0ZSc7XG4gIHRpbWVPcHRpb25zOiBTdXBwb3J0VGltZU9wdGlvbnMgfCBTdXBwb3J0VGltZU9wdGlvbnNbXSB8IG51bGwgPSBudWxsO1xuICBob3ZlclZhbHVlOiBTaW5nbGVWYWx1ZVtdID0gW107IC8vIFJhbmdlIE9OTFlcbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIGdldCBoYXNUaW1lUGlja2VyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuc2hvd1RpbWU7XG4gIH1cblxuICBnZXQgaGFzRm9vdGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNob3dUb2RheSB8fCB0aGlzLmhhc1RpbWVQaWNrZXIgfHwgISF0aGlzLmV4dHJhRm9vdGVyIHx8ICEhdGhpcy5yYW5nZXM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGF0ZVBpY2tlclNlcnZpY2U6IERhdGVQaWNrZXJTZXJ2aWNlLCBwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlQ2hhbmdlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuaW5pdEFjdGl2ZURhdGUoKTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIC8vIFBhcnNlIHNob3dUaW1lIG9wdGlvbnNcbiAgICBpZiAoY2hhbmdlcy5zaG93VGltZSB8fCBjaGFuZ2VzLmRpc2FibGVkVGltZSkge1xuICAgICAgaWYgKHRoaXMuc2hvd1RpbWUpIHtcbiAgICAgICAgdGhpcy5idWlsZFRpbWVPcHRpb25zKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnBhbmVsTW9kZSkge1xuICAgICAgdGhpcy5lbmRQYW5lbE1vZGUgPSB0aGlzLnBhbmVsTW9kZTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBpbml0QWN0aXZlRGF0ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBhY3RpdmVEYXRlID0gdGhpcy5kYXRlUGlja2VyU2VydmljZS5oYXNWYWx1ZSgpXG4gICAgICA/IHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWVcbiAgICAgIDogdGhpcy5kYXRlUGlja2VyU2VydmljZS5tYWtlVmFsdWUodGhpcy5kZWZhdWx0UGlja2VyVmFsdWUhKTtcbiAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnNldEFjdGl2ZURhdGUoYWN0aXZlRGF0ZSwgIXRoaXMuc2hvd1RpbWUpO1xuICB9XG5cbiAgb25DbGlja09rKCk6IHZvaWQge1xuICAgIGNvbnN0IG90aGVyUGFydCA9IHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuYWN0aXZlSW5wdXQgPT09ICdsZWZ0JyA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWU7XG4gICAgaWYgKHRoaXMuaXNBbGxvd2VkKHNlbGVjdGVkVmFsdWUsIHRydWUpKSB7XG4gICAgICB0aGlzLnJlc3VsdE9rLmVtaXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuaXNSYW5nZSAmJiB0aGlzLmlzT25lQWxsb3dlZChzZWxlY3RlZFZhbHVlIGFzIENhbmR5RGF0ZVtdKSkge1xuICAgICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmlucHV0UGFydENoYW5nZSQubmV4dChvdGhlclBhcnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5pbnB1dFBhcnRDaGFuZ2UkLm5leHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNsaWNrVG9kYXkodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlVmFsdWVGcm9tU2VsZWN0KHZhbHVlLCAhdGhpcy5zaG93VGltZSk7XG4gIH1cblxuICBvbkRheUhvdmVyKHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNSYW5nZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBvdGhlcklucHV0SW5kZXggPSB7IGxlZnQ6IDEsIHJpZ2h0OiAwIH1bdGhpcy5kYXRlUGlja2VyU2VydmljZS5hY3RpdmVJbnB1dF07XG4gICAgY29uc3QgYmFzZSA9ICh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlIGFzIENhbmR5RGF0ZVtdKVtvdGhlcklucHV0SW5kZXhdITtcbiAgICBpZiAoYmFzZSkge1xuICAgICAgaWYgKGJhc2UuaXNCZWZvcmVEYXkodmFsdWUpKSB7XG4gICAgICAgIHRoaXMuaG92ZXJWYWx1ZSA9IFtiYXNlLCB2YWx1ZV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhvdmVyVmFsdWUgPSBbdmFsdWUsIGJhc2VdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUGFuZWxNb2RlQ2hhbmdlKG1vZGU6IE56RGF0ZU1vZGUsIHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kYXRlUGlja2VyU2VydmljZS5nZXRBY3RpdmVJbmRleChwYXJ0VHlwZSk7XG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgdGhpcy5wYW5lbE1vZGUgPSBbbW9kZSwgdGhpcy5wYW5lbE1vZGVbMV1dIGFzIE56RGF0ZU1vZGVbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGFuZWxNb2RlID0gW3RoaXMucGFuZWxNb2RlWzBdLCBtb2RlXSBhcyBOekRhdGVNb2RlW107XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGFuZWxNb2RlID0gbW9kZTtcbiAgICB9XG4gICAgLy8gdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5wYW5lbE1vZGVDaGFuZ2UuZW1pdCh0aGlzLnBhbmVsTW9kZSk7XG4gIH1cblxuICBvbkFjdGl2ZURhdGVDaGFuZ2UodmFsdWU6IENhbmR5RGF0ZSwgcGFydFR5cGU6IFJhbmdlUGFydFR5cGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICBpZiAocGFydFR5cGUgPT09ICdsZWZ0Jykge1xuICAgICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFjdGl2ZURhdGUgPSBbdmFsdWUsIHZhbHVlLmFkZE1vbnRocygxKV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFjdGl2ZURhdGUgPSBbdmFsdWUuYWRkTW9udGhzKC0xKSwgdmFsdWVdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFjdGl2ZURhdGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBvblNlbGVjdFRpbWUodmFsdWU6IENhbmR5RGF0ZSwgcGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSBjbG9uZURhdGUodGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZSkgYXMgU2luZ2xlVmFsdWVbXTtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kYXRlUGlja2VyU2VydmljZS5nZXRBY3RpdmVJbmRleChwYXJ0VHlwZSk7XG4gICAgICBuZXdWYWx1ZVtpbmRleF0gPSB0aGlzLm92ZXJyaWRlSG1zKHZhbHVlLCBuZXdWYWx1ZVtpbmRleF0pO1xuICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5zZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5vdmVycmlkZUhtcyh2YWx1ZSwgdGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZSBhcyBDYW5keURhdGUpO1xuICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5zZXRWYWx1ZShuZXdWYWx1ZSk7IC8vIElmIG5vdCBzZWxlY3QgYSBkYXRlIGN1cnJlbnRseSwgdXNlIHRvZGF5XG4gICAgfVxuICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuaW5wdXRQYXJ0Q2hhbmdlJC5uZXh0KCk7XG4gICAgdGhpcy5idWlsZFRpbWVPcHRpb25zKCk7XG4gIH1cblxuICBjaGFuZ2VWYWx1ZUZyb21TZWxlY3QodmFsdWU6IENhbmR5RGF0ZSwgZW1pdFZhbHVlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIGxldCBzZWxlY3RlZFZhbHVlOiBTaW5nbGVWYWx1ZVtdID0gY2xvbmVEYXRlKHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWUpIGFzIENhbmR5RGF0ZVtdO1xuICAgICAgbGV0IG90aGVyUGFydDogUmFuZ2VQYXJ0VHlwZTtcbiAgICAgIGlmICh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFjdGl2ZUlucHV0ID09PSAnbGVmdCcpIHtcbiAgICAgICAgb3RoZXJQYXJ0ID0gJ3JpZ2h0JztcbiAgICAgICAgc2VsZWN0ZWRWYWx1ZVswXSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3RoZXJQYXJ0ID0gJ2xlZnQnO1xuICAgICAgICBzZWxlY3RlZFZhbHVlWzFdID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHNlbGVjdGVkVmFsdWUgPSBzb3J0UmFuZ2VWYWx1ZShzZWxlY3RlZFZhbHVlKTtcbiAgICAgIHRoaXMuaG92ZXJWYWx1ZSA9IHNlbGVjdGVkVmFsdWU7XG4gICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnNldFZhbHVlKHNlbGVjdGVkVmFsdWUpO1xuICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5zZXRBY3RpdmVEYXRlKHNlbGVjdGVkVmFsdWUsICF0aGlzLnNob3dUaW1lKTtcbiAgICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuaW5wdXRQYXJ0Q2hhbmdlJC5uZXh0KCk7XG5cbiAgICAgIGlmICghdGhpcy5pc0FsbG93ZWQoc2VsZWN0ZWRWYWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZW1pdFZhbHVlKSB7XG4gICAgICAgIC8vIElmIHRoZSBvdGhlciBpbnB1dCBoYXMgdmFsdWVcbiAgICAgICAgaWYgKHRoaXMuaXNCb3RoQWxsb3dlZChzZWxlY3RlZFZhbHVlKSkge1xuICAgICAgICAgIHRoaXMuY2FsZW5kYXJDaGFuZ2UuZW1pdChzZWxlY3RlZFZhbHVlKTtcbiAgICAgICAgICB0aGlzLmNsZWFySG92ZXJWYWx1ZSgpO1xuICAgICAgICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuZW1pdFZhbHVlJC5uZXh0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jYWxlbmRhckNoYW5nZS5lbWl0KFt2YWx1ZS5jbG9uZSgpXSk7XG4gICAgICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5pbnB1dFBhcnRDaGFuZ2UkLm5leHQob3RoZXJQYXJ0ISk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnNldEFjdGl2ZURhdGUodmFsdWUsICF0aGlzLnNob3dUaW1lKTtcbiAgICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuaW5wdXRQYXJ0Q2hhbmdlJC5uZXh0KCk7XG5cbiAgICAgIGlmICghdGhpcy5pc0FsbG93ZWQodmFsdWUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChlbWl0VmFsdWUpIHtcbiAgICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5lbWl0VmFsdWUkLm5leHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRQYW5lbE1vZGUocGFuZWxNb2RlOiBOekRhdGVNb2RlIHwgTnpEYXRlTW9kZVtdLCBwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBOekRhdGVNb2RlIHtcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICByZXR1cm4gcGFuZWxNb2RlW3RoaXMuZGF0ZVBpY2tlclNlcnZpY2UuZ2V0QWN0aXZlSW5kZXgocGFydFR5cGUpXSBhcyBOekRhdGVNb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGFuZWxNb2RlIGFzIE56RGF0ZU1vZGU7XG4gICAgfVxuICB9XG5cbiAgLy8gR2V0IHNpbmdsZSB2YWx1ZSBvciBwYXJ0IHZhbHVlIG9mIGEgcmFuZ2VcbiAgZ2V0VmFsdWUocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogQ2FuZHlEYXRlIHtcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICByZXR1cm4gKCh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlIGFzIENhbmR5RGF0ZVtdKSB8fCBbXSlbdGhpcy5kYXRlUGlja2VyU2VydmljZS5nZXRBY3RpdmVJbmRleChwYXJ0VHlwZSldO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZSBhcyBDYW5keURhdGU7XG4gICAgfVxuICB9XG5cbiAgZ2V0QWN0aXZlRGF0ZShwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBDYW5keURhdGUge1xuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIHJldHVybiAodGhpcy5kYXRlUGlja2VyU2VydmljZS5hY3RpdmVEYXRlIGFzIENhbmR5RGF0ZVtdKVt0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmdldEFjdGl2ZUluZGV4KHBhcnRUeXBlKV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFjdGl2ZURhdGUgYXMgQ2FuZHlEYXRlO1xuICAgIH1cbiAgfVxuXG4gIGRpc2FibGVkU3RhcnRUaW1lOiBEaXNhYmxlZFRpbWVGbiA9ICh2YWx1ZTogRGF0ZSB8IERhdGVbXSkgPT4ge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkVGltZSAmJiB0aGlzLmRpc2FibGVkVGltZSh2YWx1ZSwgJ3N0YXJ0Jyk7XG4gIH07XG5cbiAgZGlzYWJsZWRFbmRUaW1lOiBEaXNhYmxlZFRpbWVGbiA9ICh2YWx1ZTogRGF0ZSB8IERhdGVbXSkgPT4ge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkVGltZSAmJiB0aGlzLmRpc2FibGVkVGltZSh2YWx1ZSwgJ2VuZCcpO1xuICB9O1xuXG4gIGlzT25lQWxsb3dlZChzZWxlY3RlZFZhbHVlOiBTaW5nbGVWYWx1ZVtdKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmdldEFjdGl2ZUluZGV4KCk7XG4gICAgY29uc3QgZGlzYWJsZWRUaW1lQXJyID0gW3RoaXMuZGlzYWJsZWRTdGFydFRpbWUsIHRoaXMuZGlzYWJsZWRFbmRUaW1lXTtcbiAgICByZXR1cm4gaXNBbGxvd2VkRGF0ZShzZWxlY3RlZFZhbHVlW2luZGV4XSEsIHRoaXMuZGlzYWJsZWREYXRlLCBkaXNhYmxlZFRpbWVBcnJbaW5kZXhdKTtcbiAgfVxuXG4gIGlzQm90aEFsbG93ZWQoc2VsZWN0ZWRWYWx1ZTogU2luZ2xlVmFsdWVbXSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBpc0FsbG93ZWREYXRlKHNlbGVjdGVkVmFsdWVbMF0hLCB0aGlzLmRpc2FibGVkRGF0ZSwgdGhpcy5kaXNhYmxlZFN0YXJ0VGltZSkgJiZcbiAgICAgIGlzQWxsb3dlZERhdGUoc2VsZWN0ZWRWYWx1ZVsxXSEsIHRoaXMuZGlzYWJsZWREYXRlLCB0aGlzLmRpc2FibGVkRW5kVGltZSlcbiAgICApO1xuICB9XG5cbiAgaXNBbGxvd2VkKHZhbHVlOiBDb21wYXRpYmxlVmFsdWUsIGlzQm90aDogYm9vbGVhbiA9IGZhbHNlKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgcmV0dXJuIGlzQm90aCA/IHRoaXMuaXNCb3RoQWxsb3dlZCh2YWx1ZSBhcyBDYW5keURhdGVbXSkgOiB0aGlzLmlzT25lQWxsb3dlZCh2YWx1ZSBhcyBDYW5keURhdGVbXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpc0FsbG93ZWREYXRlKHZhbHVlIGFzIENhbmR5RGF0ZSwgdGhpcy5kaXNhYmxlZERhdGUsIHRoaXMuZGlzYWJsZWRUaW1lKTtcbiAgICB9XG4gIH1cblxuICBnZXRUaW1lT3B0aW9ucyhwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBTdXBwb3J0VGltZU9wdGlvbnMgfCBudWxsIHtcbiAgICBpZiAodGhpcy5zaG93VGltZSAmJiB0aGlzLnRpbWVPcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy50aW1lT3B0aW9ucyBpbnN0YW5jZW9mIEFycmF5ID8gdGhpcy50aW1lT3B0aW9uc1t0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmdldEFjdGl2ZUluZGV4KHBhcnRUeXBlKV0gOiB0aGlzLnRpbWVPcHRpb25zO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIG9uQ2xpY2tQcmVzZXRSYW5nZSh2YWw6IFByZXNldFJhbmdlc1trZXlvZiBQcmVzZXRSYW5nZXNdKTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nID8gdmFsKCkgOiB2YWw7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnNldFZhbHVlKFtuZXcgQ2FuZHlEYXRlKHZhbHVlWzBdKSwgbmV3IENhbmR5RGF0ZSh2YWx1ZVsxXSldKTtcbiAgICAgIHRoaXMucmVzdWx0T2suZW1pdCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uUHJlc2V0UmFuZ2VNb3VzZUxlYXZlKCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJIb3ZlclZhbHVlKCk7XG4gIH1cblxuICBvbkhvdmVyUHJlc2V0UmFuZ2UodmFsOiBQcmVzZXRSYW5nZXNba2V5b2YgUHJlc2V0UmFuZ2VzXSk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgdmFsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLmhvdmVyVmFsdWUgPSBbbmV3IENhbmR5RGF0ZSh2YWxbMF0pLCBuZXcgQ2FuZHlEYXRlKHZhbFsxXSldO1xuICAgIH1cbiAgfVxuXG4gIGdldE9iamVjdEtleXMob2JqPzogUHJlc2V0UmFuZ2VzKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBvYmogPyBPYmplY3Qua2V5cyhvYmopIDogW107XG4gIH1cblxuICBzaG93KHBhcnRUeXBlOiBSYW5nZVBhcnRUeXBlKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaGlkZSA9IHRoaXMuc2hvd1RpbWUgJiYgdGhpcy5pc1JhbmdlICYmIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuYWN0aXZlSW5wdXQgIT09IHBhcnRUeXBlO1xuICAgIHJldHVybiAhaGlkZTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJIb3ZlclZhbHVlKCk6IHZvaWQge1xuICAgIHRoaXMuaG92ZXJWYWx1ZSA9IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZFRpbWVPcHRpb25zKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3dUaW1lKSB7XG4gICAgICBjb25zdCBzaG93VGltZSA9IHR5cGVvZiB0aGlzLnNob3dUaW1lID09PSAnb2JqZWN0JyA/IHRoaXMuc2hvd1RpbWUgOiB7fTtcbiAgICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlIGFzIENhbmR5RGF0ZVtdO1xuICAgICAgICB0aGlzLnRpbWVPcHRpb25zID0gW3RoaXMub3ZlcnJpZGVUaW1lT3B0aW9ucyhzaG93VGltZSwgdmFsdWVbMF0sICdzdGFydCcpLCB0aGlzLm92ZXJyaWRlVGltZU9wdGlvbnMoc2hvd1RpbWUsIHZhbHVlWzFdLCAnZW5kJyldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50aW1lT3B0aW9ucyA9IHRoaXMub3ZlcnJpZGVUaW1lT3B0aW9ucyhzaG93VGltZSwgdGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZSBhcyBDYW5keURhdGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRpbWVPcHRpb25zID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG92ZXJyaWRlVGltZU9wdGlvbnMob3JpZ2luOiBTdXBwb3J0VGltZU9wdGlvbnMsIHZhbHVlOiBDYW5keURhdGUsIHBhcnRpYWw/OiBEaXNhYmxlZFRpbWVQYXJ0aWFsKTogU3VwcG9ydFRpbWVPcHRpb25zIHtcbiAgICBsZXQgZGlzYWJsZWRUaW1lRm47XG4gICAgaWYgKHBhcnRpYWwpIHtcbiAgICAgIGRpc2FibGVkVGltZUZuID0gcGFydGlhbCA9PT0gJ3N0YXJ0JyA/IHRoaXMuZGlzYWJsZWRTdGFydFRpbWUgOiB0aGlzLmRpc2FibGVkRW5kVGltZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzYWJsZWRUaW1lRm4gPSB0aGlzLmRpc2FibGVkVGltZTtcbiAgICB9XG4gICAgcmV0dXJuIHsgLi4ub3JpZ2luLCAuLi5nZXRUaW1lQ29uZmlnKHZhbHVlLCBkaXNhYmxlZFRpbWVGbikgfTtcbiAgfVxuXG4gIHByaXZhdGUgb3ZlcnJpZGVIbXMobmV3VmFsdWU6IENhbmR5RGF0ZSB8IG51bGwsIG9sZFZhbHVlOiBDYW5keURhdGUgfCBudWxsKTogQ2FuZHlEYXRlIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tcGFyYW1ldGVyLXJlYXNzaWdubWVudFxuICAgIG5ld1ZhbHVlID0gbmV3VmFsdWUgfHwgbmV3IENhbmR5RGF0ZSgpO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1wYXJhbWV0ZXItcmVhc3NpZ25tZW50XG4gICAgb2xkVmFsdWUgPSBvbGRWYWx1ZSB8fCBuZXcgQ2FuZHlEYXRlKCk7XG4gICAgcmV0dXJuIG9sZFZhbHVlLnNldEhtcyhuZXdWYWx1ZS5nZXRIb3VycygpLCBuZXdWYWx1ZS5nZXRNaW51dGVzKCksIG5ld1ZhbHVlLmdldFNlY29uZHMoKSk7XG4gIH1cbn1cbiJdfQ==