/**
 * @fileoverview added by tsickle
 * Generated from: time-picker-panel.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __read, __spread } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DebugElement, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { reqAnimFrame } from 'ng-zorro-antd/core/polyfill';
import { InputBoolean, isNotNil } from 'ng-zorro-antd/core/util';
import { DateHelperService } from 'ng-zorro-antd/i18n';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TimeHolder } from './time-holder';
import { NzTimeValueAccessorDirective } from './time-value-accessor.directive';
/**
 * @param {?} length
 * @param {?=} step
 * @param {?=} start
 * @return {?}
 */
function makeRange(length, step, start) {
    if (step === void 0) { step = 1; }
    if (start === void 0) { start = 0; }
    return new Array(Math.ceil(length / step)).fill(0).map((/**
     * @param {?} _
     * @param {?} i
     * @return {?}
     */
    function (_, i) { return (i + start) * step; }));
}
var NzTimePickerPanelComponent = /** @class */ (function () {
    function NzTimePickerPanelComponent(cdr, dateHelper) {
        this.cdr = cdr;
        this.dateHelper = dateHelper;
        this._nzHourStep = 1;
        this._nzMinuteStep = 1;
        this._nzSecondStep = 1;
        this.unsubscribe$ = new Subject();
        this._format = 'HH:mm:ss';
        this._disabledHours = (/**
         * @return {?}
         */
        function () { return []; });
        this._disabledMinutes = (/**
         * @return {?}
         */
        function () { return []; });
        this._disabledSeconds = (/**
         * @return {?}
         */
        function () { return []; });
        this._allowEmpty = true;
        this.time = new TimeHolder();
        this.hourEnabled = true;
        this.minuteEnabled = true;
        this.secondEnabled = true;
        this.firstScrolled = false;
        this.enabledColumns = 3;
        this.nzInDatePicker = false; // If inside a date-picker, more diff works need to be done
        this.nzHideDisabledOptions = false;
        this.nzUse12Hours = false;
        this.closePanel = new EventEmitter();
    }
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzAllowEmpty", {
        get: /**
         * @return {?}
         */
        function () {
            return this._allowEmpty;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._allowEmpty = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzDisabledHours", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabledHours;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabledHours = value;
            if (!!this._disabledHours) {
                this.buildHours();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzDisabledMinutes", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabledMinutes;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._disabledMinutes = value;
                this.buildMinutes();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzDisabledSeconds", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabledSeconds;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._disabledSeconds = value;
                this.buildSeconds();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "format", {
        get: /**
         * @return {?}
         */
        function () {
            return this._format;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._format = value;
                this.enabledColumns = 0;
                /** @type {?} */
                var charSet = new Set(value);
                this.hourEnabled = charSet.has('H') || charSet.has('h');
                this.minuteEnabled = charSet.has('m');
                this.secondEnabled = charSet.has('s');
                if (this.hourEnabled) {
                    this.enabledColumns++;
                }
                if (this.minuteEnabled) {
                    this.enabledColumns++;
                }
                if (this.secondEnabled) {
                    this.enabledColumns++;
                }
                if (this.nzUse12Hours) {
                    this.build12Hours();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzHourStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzHourStep;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._nzHourStep = value;
                this.buildHours();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzMinuteStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzMinuteStep;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._nzMinuteStep = value;
                this.buildMinutes();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzSecondStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzSecondStep;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._nzSecondStep = value;
                this.buildSeconds();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.selectInputRange = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.nzTimeValueAccessorDirective) {
                _this.nzTimeValueAccessorDirective.setRange();
            }
        }));
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.buildHours = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var hourRanges = 24;
        /** @type {?} */
        var disabledHours = (_a = this.nzDisabledHours) === null || _a === void 0 ? void 0 : _a.call(this);
        /** @type {?} */
        var startIndex = 0;
        if (this.nzUse12Hours) {
            hourRanges = 12;
            if (disabledHours) {
                if (this.time.selected12Hours === 'PM') {
                    /**
                     * Filter and transform hours which greater or equal to 12
                     * [0, 1, 2, ..., 12, 13, 14, 15, ..., 23] => [12, 1, 2, 3, ..., 11]
                     */
                    disabledHours = disabledHours.filter((/**
                     * @param {?} i
                     * @return {?}
                     */
                    function (i) { return i >= 12; })).map((/**
                     * @param {?} i
                     * @return {?}
                     */
                    function (i) { return (i > 12 ? i - 12 : i); }));
                }
                else {
                    /**
                     * Filter and transform hours which less than 12
                     * [0, 1, 2,..., 12, 13, 14, 15, ...23] => [12, 1, 2, 3, ..., 11]
                     */
                    disabledHours = disabledHours.filter((/**
                     * @param {?} i
                     * @return {?}
                     */
                    function (i) { return i < 12 || i === 24; })).map((/**
                     * @param {?} i
                     * @return {?}
                     */
                    function (i) { return (i === 24 || i === 0 ? 12 : i); }));
                }
            }
            startIndex = 1;
        }
        this.hourRange = makeRange(hourRanges, this.nzHourStep, startIndex).map((/**
         * @param {?} r
         * @return {?}
         */
        function (r) {
            return {
                index: r,
                disabled: !!disabledHours && disabledHours.indexOf(r) !== -1
            };
        }));
        if (this.nzUse12Hours && this.hourRange[this.hourRange.length - 1].index === 12) {
            /** @type {?} */
            var temp = __spread(this.hourRange);
            temp.unshift(temp[temp.length - 1]);
            temp.splice(temp.length - 1, 1);
            this.hourRange = temp;
        }
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.buildMinutes = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.minuteRange = makeRange(60, this.nzMinuteStep).map((/**
         * @param {?} r
         * @return {?}
         */
        function (r) {
            return {
                index: r,
                disabled: !!_this.nzDisabledMinutes && _this.nzDisabledMinutes((/** @type {?} */ (_this.time.hours))).indexOf(r) !== -1
            };
        }));
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.buildSeconds = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.secondRange = makeRange(60, this.nzSecondStep).map((/**
         * @param {?} r
         * @return {?}
         */
        function (r) {
            return {
                index: r,
                disabled: !!_this.nzDisabledSeconds && _this.nzDisabledSeconds((/** @type {?} */ (_this.time.hours)), (/** @type {?} */ (_this.time.minutes))).indexOf(r) !== -1
            };
        }));
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.build12Hours = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isUpperFormat = this._format.includes('A');
        this.use12HoursRange = [
            {
                index: 0,
                value: isUpperFormat ? 'AM' : 'am'
            },
            {
                index: 1,
                value: isUpperFormat ? 'PM' : 'pm'
            }
        ];
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.buildTimes = /**
     * @return {?}
     */
    function () {
        this.buildHours();
        this.buildMinutes();
        this.buildSeconds();
        this.build12Hours();
    };
    /**
     * @param {?=} delay
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.scrollToTime = /**
     * @param {?=} delay
     * @return {?}
     */
    function (delay) {
        if (delay === void 0) { delay = 0; }
        if (this.hourEnabled && this.hourListElement) {
            this.scrollToSelected(this.hourListElement.nativeElement, (/** @type {?} */ (this.time.viewHours)), delay, 'hour');
        }
        if (this.minuteEnabled && this.minuteListElement) {
            this.scrollToSelected(this.minuteListElement.nativeElement, (/** @type {?} */ (this.time.minutes)), delay, 'minute');
        }
        if (this.secondEnabled && this.secondListElement) {
            this.scrollToSelected(this.secondListElement.nativeElement, (/** @type {?} */ (this.time.seconds)), delay, 'second');
        }
        if (this.nzUse12Hours && this.use12HoursListElement) {
            /** @type {?} */
            var selectedHours = this.time.selected12Hours;
            /** @type {?} */
            var index = selectedHours === 'AM' ? 0 : 1;
            this.scrollToSelected(this.use12HoursListElement.nativeElement, index, delay, '12-hour');
        }
    };
    /**
     * @param {?} hour
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.selectHour = /**
     * @param {?} hour
     * @return {?}
     */
    function (hour) {
        this.time.setHours(hour.index, hour.disabled);
        if (!!this._disabledMinutes) {
            this.buildMinutes();
        }
        if (this._disabledSeconds || this._disabledMinutes) {
            this.buildSeconds();
        }
    };
    /**
     * @param {?} minute
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.selectMinute = /**
     * @param {?} minute
     * @return {?}
     */
    function (minute) {
        this.time.setMinutes(minute.index, minute.disabled);
        if (!!this._disabledSeconds) {
            this.buildSeconds();
        }
    };
    /**
     * @param {?} second
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.selectSecond = /**
     * @param {?} second
     * @return {?}
     */
    function (second) {
        this.time.setSeconds(second.index, second.disabled);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.select12Hours = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.time.setSelected12Hours(value.value);
        if (!!this._disabledHours) {
            this.buildHours();
        }
        if (!!this._disabledMinutes) {
            this.buildMinutes();
        }
        if (!!this._disabledSeconds) {
            this.buildSeconds();
        }
    };
    /**
     * @param {?} instance
     * @param {?} index
     * @param {?=} duration
     * @param {?=} unit
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.scrollToSelected = /**
     * @param {?} instance
     * @param {?} index
     * @param {?=} duration
     * @param {?=} unit
     * @return {?}
     */
    function (instance, index, duration, unit) {
        if (duration === void 0) { duration = 0; }
        if (!instance) {
            return;
        }
        /** @type {?} */
        var transIndex = this.translateIndex(index, unit);
        /** @type {?} */
        var currentOption = (/** @type {?} */ ((instance.children[transIndex] || instance.children[0])));
        this.scrollTo(instance, currentOption.offsetTop, duration);
    };
    /**
     * @param {?} index
     * @param {?} unit
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.translateIndex = /**
     * @param {?} index
     * @param {?} unit
     * @return {?}
     */
    function (index, unit) {
        var _a, _b, _c;
        if (unit === 'hour') {
            return this.calcIndex((_a = this.nzDisabledHours) === null || _a === void 0 ? void 0 : _a.call(this), this.hourRange.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.index; })).indexOf(index));
        }
        else if (unit === 'minute') {
            return this.calcIndex((_b = this.nzDisabledMinutes) === null || _b === void 0 ? void 0 : _b.call(this, (/** @type {?} */ (this.time.hours))), this.minuteRange.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.index; })).indexOf(index));
        }
        else if (unit === 'second') {
            // second
            return this.calcIndex((_c = this.nzDisabledSeconds) === null || _c === void 0 ? void 0 : _c.call(this, (/** @type {?} */ (this.time.hours)), (/** @type {?} */ (this.time.minutes))), this.secondRange.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.index; })).indexOf(index));
        }
        else {
            // 12-hour
            return this.calcIndex([], this.use12HoursRange.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.index; })).indexOf(index));
        }
    };
    /**
     * @param {?} element
     * @param {?} to
     * @param {?} duration
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.scrollTo = /**
     * @param {?} element
     * @param {?} to
     * @param {?} duration
     * @return {?}
     */
    function (element, to, duration) {
        var _this = this;
        if (duration <= 0) {
            element.scrollTop = to;
            return;
        }
        /** @type {?} */
        var difference = to - element.scrollTop;
        /** @type {?} */
        var perTick = (difference / duration) * 10;
        reqAnimFrame((/**
         * @return {?}
         */
        function () {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop === to) {
                return;
            }
            _this.scrollTo(element, to, duration - 10);
        }));
    };
    /**
     * @param {?} array
     * @param {?} index
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.calcIndex = /**
     * @param {?} array
     * @param {?} index
     * @return {?}
     */
    function (array, index) {
        if ((array === null || array === void 0 ? void 0 : array.length) && this.nzHideDisabledOptions) {
            return (index -
                array.reduce((/**
                 * @param {?} pre
                 * @param {?} value
                 * @return {?}
                 */
                function (pre, value) {
                    return pre + (value < index ? 1 : 0);
                }), 0));
        }
        else {
            return index;
        }
    };
    /**
     * @protected
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.changed = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.onChange) {
            this.onChange((/** @type {?} */ (this.time.value)));
        }
    };
    /**
     * @protected
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.touched = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.onTouch) {
            this.onTouch();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.timeDisabled = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _a, _b, _c, _d, _e, _f;
        /** @type {?} */
        var hour = value.getHours();
        /** @type {?} */
        var minute = value.getMinutes();
        /** @type {?} */
        var second = value.getSeconds();
        return (((_b = (_a = this.nzDisabledHours) === null || _a === void 0 ? void 0 : _a.call(this).indexOf(hour)) !== null && _b !== void 0 ? _b : -1) > -1 ||
            ((_d = (_c = this.nzDisabledMinutes) === null || _c === void 0 ? void 0 : _c.call(this, hour).indexOf(minute)) !== null && _d !== void 0 ? _d : -1) > -1 ||
            ((_f = (_e = this.nzDisabledSeconds) === null || _e === void 0 ? void 0 : _e.call(this, hour, minute).indexOf(second)) !== null && _f !== void 0 ? _f : -1) > -1);
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.onClickNow = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var now = new Date();
        if (this.timeDisabled(now)) {
            return;
        }
        this.time.setValue(now);
        this.changed();
        this.closePanel.emit();
    };
    /**
     * @param {?} hour
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.isSelectedHour = /**
     * @param {?} hour
     * @return {?}
     */
    function (hour) {
        return hour.index === this.time.viewHours;
    };
    /**
     * @param {?} minute
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.isSelectedMinute = /**
     * @param {?} minute
     * @return {?}
     */
    function (minute) {
        return minute.index === this.time.minutes;
    };
    /**
     * @param {?} second
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.isSelectedSecond = /**
     * @param {?} second
     * @return {?}
     */
    function (second) {
        return second.index === this.time.seconds;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.isSelected12Hours = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.value.toUpperCase() === this.time.selected12Hours;
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.time.changes.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.changed();
            _this.touched();
        }));
        this.buildTimes();
        this.selectInputRange();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.scrollToTime();
            _this.firstScrolled = true;
        }));
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzUse12Hours = changes.nzUse12Hours, nzDefaultOpenValue = changes.nzDefaultOpenValue;
        if (!(nzUse12Hours === null || nzUse12Hours === void 0 ? void 0 : nzUse12Hours.previousValue) && (nzUse12Hours === null || nzUse12Hours === void 0 ? void 0 : nzUse12Hours.currentValue)) {
            this.build12Hours();
            this.enabledColumns++;
        }
        if (nzDefaultOpenValue === null || nzDefaultOpenValue === void 0 ? void 0 : nzDefaultOpenValue.currentValue) {
            this.time.setDefaultOpenValue(this.nzDefaultOpenValue || new Date());
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.time.setValue(value, this.nzUse12Hours);
        this.buildTimes();
        if (value && this.firstScrolled) {
            this.scrollToTime(120);
        }
        // Mark this component to be checked manually with internal properties changing (see: https://github.com/angular/angular/issues/10816)
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouch = fn;
    };
    NzTimePickerPanelComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'nz-time-picker-panel',
                    exportAs: 'nzTimePickerPanel',
                    template: "\n    <div *ngIf=\"nzInDatePicker\" class=\"ant-picker-header\">\n      <div class=\"ant-picker-header-view\">{{ dateHelper.format($any(time?.value), format) || '&nbsp;' }}</div>\n    </div>\n    <div class=\"ant-picker-content\">\n      <ul *ngIf=\"hourEnabled\" #hourListElement class=\"ant-picker-time-panel-column\" style=\"position: relative;\">\n        <ng-container *ngFor=\"let hour of hourRange\">\n          <li\n            *ngIf=\"!(nzHideDisabledOptions && hour.disabled)\"\n            class=\"ant-picker-time-panel-cell\"\n            (click)=\"selectHour(hour)\"\n            [class.ant-picker-time-panel-cell-selected]=\"isSelectedHour(hour)\"\n            [class.ant-picker-time-panel-cell-disabled]=\"hour.disabled\"\n          >\n            <div class=\"ant-picker-time-panel-cell-inner\">{{ hour.index | number: '2.0-0' }}</div>\n          </li>\n        </ng-container>\n      </ul>\n      <ul *ngIf=\"minuteEnabled\" #minuteListElement class=\"ant-picker-time-panel-column\" style=\"position: relative;\">\n        <ng-container *ngFor=\"let minute of minuteRange\">\n          <li\n            *ngIf=\"!(nzHideDisabledOptions && minute.disabled)\"\n            class=\"ant-picker-time-panel-cell\"\n            (click)=\"selectMinute(minute)\"\n            [class.ant-picker-time-panel-cell-selected]=\"isSelectedMinute(minute)\"\n            [class.ant-picker-time-panel-cell-disabled]=\"minute.disabled\"\n          >\n            <div class=\"ant-picker-time-panel-cell-inner\">{{ minute.index | number: '2.0-0' }}</div>\n          </li>\n        </ng-container>\n      </ul>\n      <ul *ngIf=\"secondEnabled\" #secondListElement class=\"ant-picker-time-panel-column\" style=\"position: relative;\">\n        <ng-container *ngFor=\"let second of secondRange\">\n          <li\n            *ngIf=\"!(nzHideDisabledOptions && second.disabled)\"\n            class=\"ant-picker-time-panel-cell\"\n            (click)=\"selectSecond(second)\"\n            [class.ant-picker-time-panel-cell-selected]=\"isSelectedSecond(second)\"\n            [class.ant-picker-time-panel-cell-disabled]=\"second.disabled\"\n          >\n            <div class=\"ant-picker-time-panel-cell-inner\">{{ second.index | number: '2.0-0' }}</div>\n          </li>\n        </ng-container>\n      </ul>\n      <ul *ngIf=\"nzUse12Hours\" #use12HoursListElement class=\"ant-picker-time-panel-column\" style=\"position: relative;\">\n        <ng-container *ngFor=\"let range of use12HoursRange\">\n          <li\n            *ngIf=\"!nzHideDisabledOptions\"\n            (click)=\"select12Hours(range)\"\n            class=\"ant-picker-time-panel-cell\"\n            [class.ant-picker-time-panel-cell-selected]=\"isSelected12Hours(range)\"\n          >\n            <div class=\"ant-picker-time-panel-cell-inner\">{{ range.value }}</div>\n          </li>\n        </ng-container>\n      </ul>\n    </div>\n    <div *ngIf=\"!nzInDatePicker\" class=\"ant-picker-footer\">\n      <div *ngIf=\"nzAddOn\" class=\"ant-picker-footer-extra\">\n        <ng-template [ngTemplateOutlet]=\"nzAddOn\"></ng-template>\n      </div>\n      <ul class=\"ant-picker-ranges\">\n        <li class=\"ant-picker-now\">\n          <a (click)=\"onClickNow()\">\n            {{ 'Calendar.lang.now' | nzI18n }}\n          </a>\n        </li>\n      </ul>\n    </div>\n  ",
                    host: {
                        '[class.ant-picker-time-panel]': "true",
                        '[class.ant-picker-time-panel-column-0]': "enabledColumns === 0 && !nzInDatePicker",
                        '[class.ant-picker-time-panel-column-1]': "enabledColumns === 1 && !nzInDatePicker",
                        '[class.ant-picker-time-panel-column-2]': "enabledColumns === 2 && !nzInDatePicker",
                        '[class.ant-picker-time-panel-column-3]': "enabledColumns === 3 && !nzInDatePicker",
                        '[class.ant-picker-time-panel-narrow]': "enabledColumns < 3",
                        '[class.ant-picker-time-panel-placement-bottomLeft]': "!nzInDatePicker"
                    },
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: NzTimePickerPanelComponent, multi: true }]
                }] }
    ];
    /** @nocollapse */
    NzTimePickerPanelComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: DateHelperService }
    ]; };
    NzTimePickerPanelComponent.propDecorators = {
        nzTimeValueAccessorDirective: [{ type: ViewChild, args: [NzTimeValueAccessorDirective, { static: false },] }],
        hourListElement: [{ type: ViewChild, args: ['hourListElement', { static: false },] }],
        minuteListElement: [{ type: ViewChild, args: ['minuteListElement', { static: false },] }],
        secondListElement: [{ type: ViewChild, args: ['secondListElement', { static: false },] }],
        use12HoursListElement: [{ type: ViewChild, args: ['use12HoursListElement', { static: false },] }],
        nzInDatePicker: [{ type: Input }],
        nzAddOn: [{ type: Input }],
        nzHideDisabledOptions: [{ type: Input }],
        nzClearText: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        nzUse12Hours: [{ type: Input }],
        nzDefaultOpenValue: [{ type: Input }],
        closePanel: [{ type: Output }],
        nzAllowEmpty: [{ type: Input }],
        nzDisabledHours: [{ type: Input }],
        nzDisabledMinutes: [{ type: Input }],
        nzDisabledSeconds: [{ type: Input }],
        format: [{ type: Input }],
        nzHourStep: [{ type: Input }],
        nzMinuteStep: [{ type: Input }],
        nzSecondStep: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTimePickerPanelComponent.prototype, "nzUse12Hours", void 0);
    return NzTimePickerPanelComponent;
}());
export { NzTimePickerPanelComponent };
if (false) {
    /** @type {?} */
    NzTimePickerPanelComponent.ngAcceptInputType_nzUse12Hours;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._nzHourStep;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._nzMinuteStep;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._nzSecondStep;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype.onChange;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype.onTouch;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._format;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._disabledHours;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._disabledMinutes;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._disabledSeconds;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype._allowEmpty;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.time;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.hourEnabled;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.minuteEnabled;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.secondEnabled;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.firstScrolled;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.enabledColumns;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.hourRange;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.minuteRange;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.secondRange;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.use12HoursRange;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzTimeValueAccessorDirective;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.hourListElement;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.minuteListElement;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.secondListElement;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.use12HoursListElement;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzInDatePicker;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzAddOn;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzHideDisabledOptions;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzClearText;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzUse12Hours;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzDefaultOpenValue;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.closePanel;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerPanelComponent.prototype.cdr;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.dateHelper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1waWNrZXItcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90aW1lLXBpY2tlci8iLCJzb3VyY2VzIjpbInRpbWUtcGlja2VyLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFFTixXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7OztBQUUvRSxTQUFTLFNBQVMsQ0FBQyxNQUFjLEVBQUUsSUFBZ0IsRUFBRSxLQUFpQjtJQUFuQyxxQkFBQSxFQUFBLFFBQWdCO0lBQUUsc0JBQUEsRUFBQSxTQUFpQjtJQUNwRSxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7Ozs7O0lBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxFQUFsQixDQUFrQixFQUFDLENBQUM7QUFDdkYsQ0FBQztBQUlEO0lBZ2VFLG9DQUFvQixHQUFzQixFQUFTLFVBQTZCO1FBQTVELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUF2WXhFLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUduQyxZQUFPLEdBQUcsVUFBVSxDQUFDO1FBQ3JCLG1CQUFjOzs7UUFBb0IsY0FBTSxPQUFBLEVBQUUsRUFBRixDQUFFLEVBQUM7UUFDM0MscUJBQWdCOzs7UUFBZ0MsY0FBTSxPQUFBLEVBQUUsRUFBRixDQUFFLEVBQUM7UUFDekQscUJBQWdCOzs7UUFBZ0QsY0FBTSxPQUFBLEVBQUUsRUFBRixDQUFFLEVBQUM7UUFDekUsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDM0IsU0FBSSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFDeEIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFjVixtQkFBYyxHQUFZLEtBQUssQ0FBQyxDQUFDLDJEQUEyRDtRQUU1RiwwQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFHZCxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUczQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQWlXMEIsQ0FBQztJQS9WcEYsc0JBQ0ksb0RBQVk7Ozs7UUFNaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUIsQ0FBQzs7Ozs7UUFURCxVQUNpQixLQUFjO1lBQzdCLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQzthQUMxQjtRQUNILENBQUM7OztPQUFBO0lBTUQsc0JBQ0ksdURBQWU7Ozs7UUFPbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDN0IsQ0FBQzs7Ozs7UUFWRCxVQUNvQixLQUFtQztZQUNyRCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUN6QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDbkI7UUFDSCxDQUFDOzs7T0FBQTtJQU1ELHNCQUNJLHlEQUFpQjs7OztRQU9yQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQy9CLENBQUM7Ozs7O1FBVkQsVUFDc0IsS0FBK0M7WUFDbkUsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNyQjtRQUNILENBQUM7OztPQUFBO0lBTUQsc0JBQ0kseURBQWlCOzs7O1FBT3JCO1lBQ0UsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDL0IsQ0FBQzs7Ozs7UUFWRCxVQUNzQixLQUErRDtZQUNuRixJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztnQkFDOUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQzs7O09BQUE7SUFNRCxzQkFDSSw4Q0FBTTs7OztRQXVCVjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7OztRQTFCRCxVQUNXLEtBQWE7WUFDdEIsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQzs7b0JBQ2xCLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN4RCxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO29CQUNwQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7aUJBQ3ZCO2dCQUNELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtvQkFDdEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2lCQUN2QjtnQkFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztpQkFDdkI7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO29CQUNyQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7aUJBQ3JCO2FBQ0Y7UUFDSCxDQUFDOzs7T0FBQTtJQU1ELHNCQUNJLGtEQUFVOzs7O1FBT2Q7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUIsQ0FBQzs7Ozs7UUFWRCxVQUNlLEtBQWE7WUFDMUIsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDbkI7UUFDSCxDQUFDOzs7T0FBQTtJQU1ELHNCQUNJLG9EQUFZOzs7O1FBT2hCO1lBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzVCLENBQUM7Ozs7O1FBVkQsVUFDaUIsS0FBYTtZQUM1QixJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNyQjtRQUNILENBQUM7OztPQUFBO0lBTUQsc0JBQ0ksb0RBQVk7Ozs7UUFPaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDNUIsQ0FBQzs7Ozs7UUFWRCxVQUNpQixLQUFhO1lBQzVCLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNuQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztnQkFDM0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQzs7O09BQUE7Ozs7SUFNRCxxREFBZ0I7OztJQUFoQjtRQUFBLGlCQU1DO1FBTEMsVUFBVTs7O1FBQUM7WUFDVCxJQUFJLEtBQUksQ0FBQyw0QkFBNEIsRUFBRTtnQkFDckMsS0FBSSxDQUFDLDRCQUE0QixDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQzlDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsK0NBQVU7OztJQUFWOzs7WUFDTSxVQUFVLEdBQUcsRUFBRTs7WUFDZixhQUFhLFNBQUcsSUFBSSxDQUFDLGVBQWUsK0NBQXBCLElBQUksQ0FBb0I7O1lBQ3hDLFVBQVUsR0FBRyxDQUFDO1FBQ2xCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixVQUFVLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLElBQUksYUFBYSxFQUFFO2dCQUNqQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxLQUFLLElBQUksRUFBRTtvQkFDdEM7Ozt1QkFHRztvQkFDSCxhQUFhLEdBQUcsYUFBYSxDQUFDLE1BQU07Ozs7b0JBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLElBQUksRUFBRSxFQUFQLENBQU8sRUFBQyxDQUFDLEdBQUc7Ozs7b0JBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFyQixDQUFxQixFQUFDLENBQUM7aUJBQ3BGO3FCQUFNO29CQUNMOzs7dUJBR0c7b0JBQ0gsYUFBYSxHQUFHLGFBQWEsQ0FBQyxNQUFNOzs7O29CQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFsQixDQUFrQixFQUFDLENBQUMsR0FBRzs7OztvQkFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUE5QixDQUE4QixFQUFDLENBQUM7aUJBQ3hHO2FBQ0Y7WUFDRCxVQUFVLEdBQUcsQ0FBQyxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQztZQUN2RSxPQUFPO2dCQUNMLEtBQUssRUFBRSxDQUFDO2dCQUNSLFFBQVEsRUFBRSxDQUFDLENBQUMsYUFBYSxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzdELENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFFLEVBQUU7O2dCQUN6RSxJQUFJLFlBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN2QjtJQUNILENBQUM7Ozs7SUFFRCxpREFBWTs7O0lBQVo7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQztZQUN2RCxPQUFPO2dCQUNMLEtBQUssRUFBRSxDQUFDO2dCQUNSLFFBQVEsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLGlCQUFpQixJQUFJLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNqRyxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsaURBQVk7OztJQUFaO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLENBQUM7WUFDdkQsT0FBTztnQkFDTCxLQUFLLEVBQUUsQ0FBQztnQkFDUixRQUFRLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsSUFBSSxLQUFJLENBQUMsaUJBQWlCLENBQUMsbUJBQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsRUFBRSxtQkFBQSxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNySCxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsaURBQVk7OztJQUFaOztZQUNRLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDaEQsSUFBSSxDQUFDLGVBQWUsR0FBRztZQUNyQjtnQkFDRSxLQUFLLEVBQUUsQ0FBQztnQkFDUixLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7YUFDbkM7WUFDRDtnQkFDRSxLQUFLLEVBQUUsQ0FBQztnQkFDUixLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7YUFDbkM7U0FDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELCtDQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELGlEQUFZOzs7O0lBQVosVUFBYSxLQUFpQjtRQUFqQixzQkFBQSxFQUFBLFNBQWlCO1FBQzVCLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQzVDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxtQkFBQSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNoRztRQUNELElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDaEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsbUJBQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDbEc7UUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ2hELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLG1CQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ2xHO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTs7Z0JBQzdDLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWU7O2dCQUN6QyxLQUFLLEdBQUcsYUFBYSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDMUY7SUFDSCxDQUFDOzs7OztJQUVELCtDQUFVOzs7O0lBQVYsVUFBVyxJQUEwQztRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ2xELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7Ozs7O0lBRUQsaURBQVk7Ozs7SUFBWixVQUFhLE1BQTRDO1FBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUMzQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7SUFDSCxDQUFDOzs7OztJQUVELGlEQUFZOzs7O0lBQVosVUFBYSxNQUE0QztRQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVELGtEQUFhOzs7O0lBQWIsVUFBYyxLQUF1QztRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjtRQUNELElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUMzQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7Ozs7Ozs7SUFFRCxxREFBZ0I7Ozs7Ozs7SUFBaEIsVUFBaUIsUUFBcUIsRUFBRSxLQUFhLEVBQUUsUUFBb0IsRUFBRSxJQUFzQjtRQUE1Qyx5QkFBQSxFQUFBLFlBQW9CO1FBQ3pFLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixPQUFPO1NBQ1I7O1lBQ0ssVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQzs7WUFDN0MsYUFBYSxHQUFHLG1CQUFBLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQWU7UUFDNUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7Ozs7SUFFRCxtREFBYzs7Ozs7SUFBZCxVQUFlLEtBQWEsRUFBRSxJQUFzQjs7UUFDbEQsSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO1lBQ25CLE9BQU8sSUFBSSxDQUFDLFNBQVMsT0FBQyxJQUFJLENBQUMsZUFBZSwrQ0FBcEIsSUFBSSxHQUFzQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxFQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDeEc7YUFBTSxJQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUMsU0FBUyxPQUFDLElBQUksQ0FBQyxpQkFBaUIsK0NBQXRCLElBQUksRUFBcUIsbUJBQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxFQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDNUg7YUFBTSxJQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDNUIsU0FBUztZQUNULE9BQU8sSUFBSSxDQUFDLFNBQVMsT0FDbkIsSUFBSSxDQUFDLGlCQUFpQiwrQ0FBdEIsSUFBSSxFQUFxQixtQkFBQSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxFQUFFLG1CQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLEdBQzdELElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEtBQUssRUFBVixDQUFVLEVBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQ3hELENBQUM7U0FDSDthQUFNO1lBQ0wsVUFBVTtZQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsRUFBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3hGO0lBQ0gsQ0FBQzs7Ozs7OztJQUVELDZDQUFROzs7Ozs7SUFBUixVQUFTLE9BQW9CLEVBQUUsRUFBVSxFQUFFLFFBQWdCO1FBQTNELGlCQWVDO1FBZEMsSUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO1lBQ2pCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLE9BQU87U0FDUjs7WUFDSyxVQUFVLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxTQUFTOztZQUNuQyxPQUFPLEdBQUcsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRTtRQUU1QyxZQUFZOzs7UUFBQztZQUNYLE9BQU8sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7WUFDaEQsSUFBSSxPQUFPLENBQUMsU0FBUyxLQUFLLEVBQUUsRUFBRTtnQkFDNUIsT0FBTzthQUNSO1lBQ0QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUM1QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVELDhDQUFTOzs7OztJQUFULFVBQVUsS0FBMkIsRUFBRSxLQUFhO1FBQ2xELElBQUksQ0FBQSxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsTUFBTSxLQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUMvQyxPQUFPLENBQ0wsS0FBSztnQkFDTCxLQUFLLENBQUMsTUFBTTs7Ozs7Z0JBQUMsVUFBQyxHQUFHLEVBQUUsS0FBSztvQkFDdEIsT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQ04sQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQzs7Ozs7SUFFUyw0Q0FBTzs7OztJQUFqQjtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7Ozs7O0lBRVMsNENBQU87Ozs7SUFBakI7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxpREFBWTs7OztJQUFaLFVBQWEsS0FBVzs7O1lBQ2hCLElBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFOztZQUN2QixNQUFNLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRTs7WUFDM0IsTUFBTSxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUU7UUFDakMsT0FBTyxDQUNMLGFBQUMsSUFBSSxDQUFDLGVBQWUsK0NBQXBCLElBQUksRUFBcUIsT0FBTyxDQUFDLElBQUksb0NBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkQsYUFBQyxJQUFJLENBQUMsaUJBQWlCLCtDQUF0QixJQUFJLEVBQXFCLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxvQ0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMzRCxhQUFDLElBQUksQ0FBQyxpQkFBaUIsK0NBQXRCLElBQUksRUFBcUIsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxvQ0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUNwRSxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELCtDQUFVOzs7SUFBVjs7WUFDUSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUU7UUFDdEIsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzFCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxtREFBYzs7OztJQUFkLFVBQWUsSUFBMEM7UUFDdkQsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRUQscURBQWdCOzs7O0lBQWhCLFVBQWlCLE1BQTRDO1FBQzNELE9BQU8sTUFBTSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVELHFEQUFnQjs7OztJQUFoQixVQUFpQixNQUE0QztRQUMzRCxPQUFPLE1BQU0sQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFFRCxzREFBaUI7Ozs7SUFBakIsVUFBa0IsS0FBdUM7UUFDdkQsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ2pFLENBQUM7Ozs7SUFJRCw2Q0FBUTs7O0lBQVI7UUFBQSxpQkFXQztRQVZDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUzs7O1FBQUM7WUFDN0QsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pCLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLFVBQVU7OztRQUFDO1lBQ1QsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzVCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGdEQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELGdEQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUN4QixJQUFBLG1DQUFZLEVBQUUsK0NBQWtCO1FBQ3hDLElBQUksRUFBQyxZQUFZLGFBQVosWUFBWSx1QkFBWixZQUFZLENBQUUsYUFBYSxDQUFBLEtBQUksWUFBWSxhQUFaLFlBQVksdUJBQVosWUFBWSxDQUFFLFlBQVksQ0FBQSxFQUFFO1lBQzlELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7UUFDRCxJQUFJLGtCQUFrQixhQUFsQixrQkFBa0IsdUJBQWxCLGtCQUFrQixDQUFFLFlBQVksRUFBRTtZQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7U0FDdEU7SUFDSCxDQUFDOzs7OztJQUVELCtDQUFVOzs7O0lBQVYsVUFBVyxLQUFXO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRWxCLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN4QjtRQUNELHNJQUFzSTtRQUN0SSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQscURBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQXlCO1FBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsc0RBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQWM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Z0JBaGhCRixTQUFTLFNBQUM7b0JBQ1QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsOHdHQXFFVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osK0JBQStCLEVBQUUsTUFBTTt3QkFDdkMsd0NBQXdDLEVBQUUseUNBQXlDO3dCQUNuRix3Q0FBd0MsRUFBRSx5Q0FBeUM7d0JBQ25GLHdDQUF3QyxFQUFFLHlDQUF5Qzt3QkFDbkYsd0NBQXdDLEVBQUUseUNBQXlDO3dCQUNuRixzQ0FBc0MsRUFBRSxvQkFBb0I7d0JBQzVELG9EQUFvRCxFQUFFLGlCQUFpQjtxQkFDeEU7b0JBQ0QsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLDBCQUEwQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztpQkFDbEc7Ozs7Z0JBckhDLGlCQUFpQjtnQkFtQlYsaUJBQWlCOzs7K0NBNEh2QixTQUFTLFNBQUMsNEJBQTRCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2tDQUV6RCxTQUFTLFNBQUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO29DQUU5QyxTQUFTLFNBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO29DQUNoRCxTQUFTLFNBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3dDQUNoRCxTQUFTLFNBQUMsdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2lDQUVwRCxLQUFLOzBCQUNMLEtBQUs7d0NBQ0wsS0FBSzs4QkFDTCxLQUFLO2dDQUNMLEtBQUs7K0JBQ0wsS0FBSztxQ0FDTCxLQUFLOzZCQUVMLE1BQU07K0JBRU4sS0FBSztrQ0FXTCxLQUFLO29DQVlMLEtBQUs7b0NBWUwsS0FBSzt5QkFZTCxLQUFLOzZCQTRCTCxLQUFLOytCQVlMLEtBQUs7K0JBWUwsS0FBSzs7SUF4R21CO1FBQWYsWUFBWSxFQUFFOztvRUFBc0I7SUFxWmhELGlDQUFDO0NBQUEsQUFqaEJELElBaWhCQztTQTNiWSwwQkFBMEI7OztJQUNyQywwREFBb0Q7Ozs7O0lBRXBELGlEQUF3Qjs7Ozs7SUFDeEIsbURBQTBCOzs7OztJQUMxQixtREFBMEI7Ozs7O0lBQzFCLGtEQUEyQzs7Ozs7SUFDM0MsOENBQXlDOzs7OztJQUN6Qyw2Q0FBNkI7Ozs7O0lBQzdCLDZDQUE2Qjs7Ozs7SUFDN0Isb0RBQW1EOzs7OztJQUNuRCxzREFBaUU7Ozs7O0lBQ2pFLHNEQUFpRjs7Ozs7SUFDakYsaURBQTJCOztJQUMzQiwwQ0FBd0I7O0lBQ3hCLGlEQUFtQjs7SUFDbkIsbURBQXFCOztJQUNyQixtREFBcUI7O0lBQ3JCLG1EQUFzQjs7SUFDdEIsb0RBQW1COztJQUNuQiwrQ0FBZ0U7O0lBQ2hFLGlEQUFrRTs7SUFDbEUsaURBQWtFOztJQUNsRSxxREFBa0U7O0lBRWxFLGtFQUM0RDs7SUFDNUQscURBQytCOztJQUMvQix1REFBb0Y7O0lBQ3BGLHVEQUFvRjs7SUFDcEYsMkRBQTRGOztJQUU1RixvREFBeUM7O0lBQ3pDLDZDQUFxQzs7SUFDckMsMkRBQXVDOztJQUN2QyxpREFBOEI7O0lBQzlCLG1EQUFnQzs7SUFDaEMsa0RBQThDOztJQUM5Qyx3REFBbUM7O0lBRW5DLGdEQUF5RDs7Ozs7SUFpVzdDLHlDQUE4Qjs7SUFBRSxnREFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRGVidWdFbGVtZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgcmVxQW5pbUZyYW1lIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3BvbHlmaWxsJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgaXNOb3ROaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFRpbWVIb2xkZXIgfSBmcm9tICcuL3RpbWUtaG9sZGVyJztcbmltcG9ydCB7IE56VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmUgfSBmcm9tICcuL3RpbWUtdmFsdWUtYWNjZXNzb3IuZGlyZWN0aXZlJztcblxuZnVuY3Rpb24gbWFrZVJhbmdlKGxlbmd0aDogbnVtYmVyLCBzdGVwOiBudW1iZXIgPSAxLCBzdGFydDogbnVtYmVyID0gMCk6IG51bWJlcltdIHtcbiAgcmV0dXJuIG5ldyBBcnJheShNYXRoLmNlaWwobGVuZ3RoIC8gc3RlcCkpLmZpbGwoMCkubWFwKChfLCBpKSA9PiAoaSArIHN0YXJ0KSAqIHN0ZXApO1xufVxuXG5leHBvcnQgdHlwZSBOelRpbWVQaWNrZXJVbml0ID0gJ2hvdXInIHwgJ21pbnV0ZScgfCAnc2Vjb25kJyB8ICcxMi1ob3VyJztcblxuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzZWxlY3RvcjogJ256LXRpbWUtcGlja2VyLXBhbmVsJyxcbiAgZXhwb3J0QXM6ICduelRpbWVQaWNrZXJQYW5lbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiAqbmdJZj1cIm56SW5EYXRlUGlja2VyXCIgY2xhc3M9XCJhbnQtcGlja2VyLWhlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImFudC1waWNrZXItaGVhZGVyLXZpZXdcIj57eyBkYXRlSGVscGVyLmZvcm1hdCgkYW55KHRpbWU/LnZhbHVlKSwgZm9ybWF0KSB8fCAnJm5ic3A7JyB9fTwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhbnQtcGlja2VyLWNvbnRlbnRcIj5cbiAgICAgIDx1bCAqbmdJZj1cImhvdXJFbmFibGVkXCIgI2hvdXJMaXN0RWxlbWVudCBjbGFzcz1cImFudC1waWNrZXItdGltZS1wYW5lbC1jb2x1bW5cIiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTtcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaG91ciBvZiBob3VyUmFuZ2VcIj5cbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgICpuZ0lmPVwiIShuekhpZGVEaXNhYmxlZE9wdGlvbnMgJiYgaG91ci5kaXNhYmxlZClcIlxuICAgICAgICAgICAgY2xhc3M9XCJhbnQtcGlja2VyLXRpbWUtcGFuZWwtY2VsbFwiXG4gICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0SG91cihob3VyKVwiXG4gICAgICAgICAgICBbY2xhc3MuYW50LXBpY2tlci10aW1lLXBhbmVsLWNlbGwtc2VsZWN0ZWRdPVwiaXNTZWxlY3RlZEhvdXIoaG91cilcIlxuICAgICAgICAgICAgW2NsYXNzLmFudC1waWNrZXItdGltZS1wYW5lbC1jZWxsLWRpc2FibGVkXT1cImhvdXIuZGlzYWJsZWRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcGlja2VyLXRpbWUtcGFuZWwtY2VsbC1pbm5lclwiPnt7IGhvdXIuaW5kZXggfCBudW1iZXI6ICcyLjAtMCcgfX08L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvdWw+XG4gICAgICA8dWwgKm5nSWY9XCJtaW51dGVFbmFibGVkXCIgI21pbnV0ZUxpc3RFbGVtZW50IGNsYXNzPVwiYW50LXBpY2tlci10aW1lLXBhbmVsLWNvbHVtblwiIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlO1wiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBtaW51dGUgb2YgbWludXRlUmFuZ2VcIj5cbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgICpuZ0lmPVwiIShuekhpZGVEaXNhYmxlZE9wdGlvbnMgJiYgbWludXRlLmRpc2FibGVkKVwiXG4gICAgICAgICAgICBjbGFzcz1cImFudC1waWNrZXItdGltZS1wYW5lbC1jZWxsXCJcbiAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RNaW51dGUobWludXRlKVwiXG4gICAgICAgICAgICBbY2xhc3MuYW50LXBpY2tlci10aW1lLXBhbmVsLWNlbGwtc2VsZWN0ZWRdPVwiaXNTZWxlY3RlZE1pbnV0ZShtaW51dGUpXCJcbiAgICAgICAgICAgIFtjbGFzcy5hbnQtcGlja2VyLXRpbWUtcGFuZWwtY2VsbC1kaXNhYmxlZF09XCJtaW51dGUuZGlzYWJsZWRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcGlja2VyLXRpbWUtcGFuZWwtY2VsbC1pbm5lclwiPnt7IG1pbnV0ZS5pbmRleCB8IG51bWJlcjogJzIuMC0wJyB9fTwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC91bD5cbiAgICAgIDx1bCAqbmdJZj1cInNlY29uZEVuYWJsZWRcIiAjc2Vjb25kTGlzdEVsZW1lbnQgY2xhc3M9XCJhbnQtcGlja2VyLXRpbWUtcGFuZWwtY29sdW1uXCIgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7XCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHNlY29uZCBvZiBzZWNvbmRSYW5nZVwiPlxuICAgICAgICAgIDxsaVxuICAgICAgICAgICAgKm5nSWY9XCIhKG56SGlkZURpc2FibGVkT3B0aW9ucyAmJiBzZWNvbmQuZGlzYWJsZWQpXCJcbiAgICAgICAgICAgIGNsYXNzPVwiYW50LXBpY2tlci10aW1lLXBhbmVsLWNlbGxcIlxuICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdFNlY29uZChzZWNvbmQpXCJcbiAgICAgICAgICAgIFtjbGFzcy5hbnQtcGlja2VyLXRpbWUtcGFuZWwtY2VsbC1zZWxlY3RlZF09XCJpc1NlbGVjdGVkU2Vjb25kKHNlY29uZClcIlxuICAgICAgICAgICAgW2NsYXNzLmFudC1waWNrZXItdGltZS1wYW5lbC1jZWxsLWRpc2FibGVkXT1cInNlY29uZC5kaXNhYmxlZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1waWNrZXItdGltZS1wYW5lbC1jZWxsLWlubmVyXCI+e3sgc2Vjb25kLmluZGV4IHwgbnVtYmVyOiAnMi4wLTAnIH19PC9kaXY+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L3VsPlxuICAgICAgPHVsICpuZ0lmPVwibnpVc2UxMkhvdXJzXCIgI3VzZTEySG91cnNMaXN0RWxlbWVudCBjbGFzcz1cImFudC1waWNrZXItdGltZS1wYW5lbC1jb2x1bW5cIiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTtcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgcmFuZ2Ugb2YgdXNlMTJIb3Vyc1JhbmdlXCI+XG4gICAgICAgICAgPGxpXG4gICAgICAgICAgICAqbmdJZj1cIiFuekhpZGVEaXNhYmxlZE9wdGlvbnNcIlxuICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdDEySG91cnMocmFuZ2UpXCJcbiAgICAgICAgICAgIGNsYXNzPVwiYW50LXBpY2tlci10aW1lLXBhbmVsLWNlbGxcIlxuICAgICAgICAgICAgW2NsYXNzLmFudC1waWNrZXItdGltZS1wYW5lbC1jZWxsLXNlbGVjdGVkXT1cImlzU2VsZWN0ZWQxMkhvdXJzKHJhbmdlKVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1waWNrZXItdGltZS1wYW5lbC1jZWxsLWlubmVyXCI+e3sgcmFuZ2UudmFsdWUgfX08L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdiAqbmdJZj1cIiFuekluRGF0ZVBpY2tlclwiIGNsYXNzPVwiYW50LXBpY2tlci1mb290ZXJcIj5cbiAgICAgIDxkaXYgKm5nSWY9XCJuekFkZE9uXCIgY2xhc3M9XCJhbnQtcGlja2VyLWZvb3Rlci1leHRyYVwiPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwibnpBZGRPblwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bCBjbGFzcz1cImFudC1waWNrZXItcmFuZ2VzXCI+XG4gICAgICAgIDxsaSBjbGFzcz1cImFudC1waWNrZXItbm93XCI+XG4gICAgICAgICAgPGEgKGNsaWNrKT1cIm9uQ2xpY2tOb3coKVwiPlxuICAgICAgICAgICAge3sgJ0NhbGVuZGFyLmxhbmcubm93JyB8IG56STE4biB9fVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1waWNrZXItdGltZS1wYW5lbF0nOiBgdHJ1ZWAsXG4gICAgJ1tjbGFzcy5hbnQtcGlja2VyLXRpbWUtcGFuZWwtY29sdW1uLTBdJzogYGVuYWJsZWRDb2x1bW5zID09PSAwICYmICFuekluRGF0ZVBpY2tlcmAsXG4gICAgJ1tjbGFzcy5hbnQtcGlja2VyLXRpbWUtcGFuZWwtY29sdW1uLTFdJzogYGVuYWJsZWRDb2x1bW5zID09PSAxICYmICFuekluRGF0ZVBpY2tlcmAsXG4gICAgJ1tjbGFzcy5hbnQtcGlja2VyLXRpbWUtcGFuZWwtY29sdW1uLTJdJzogYGVuYWJsZWRDb2x1bW5zID09PSAyICYmICFuekluRGF0ZVBpY2tlcmAsXG4gICAgJ1tjbGFzcy5hbnQtcGlja2VyLXRpbWUtcGFuZWwtY29sdW1uLTNdJzogYGVuYWJsZWRDb2x1bW5zID09PSAzICYmICFuekluRGF0ZVBpY2tlcmAsXG4gICAgJ1tjbGFzcy5hbnQtcGlja2VyLXRpbWUtcGFuZWwtbmFycm93XSc6IGBlbmFibGVkQ29sdW1ucyA8IDNgLFxuICAgICdbY2xhc3MuYW50LXBpY2tlci10aW1lLXBhbmVsLXBsYWNlbWVudC1ib3R0b21MZWZ0XSc6IGAhbnpJbkRhdGVQaWNrZXJgXG4gIH0sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBOelRpbWVQaWNrZXJQYW5lbENvbXBvbmVudCwgbXVsdGk6IHRydWUgfV1cbn0pXG5leHBvcnQgY2xhc3MgTnpUaW1lUGlja2VyUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelVzZTEySG91cnM6IEJvb2xlYW5JbnB1dDtcblxuICBwcml2YXRlIF9uekhvdXJTdGVwID0gMTtcbiAgcHJpdmF0ZSBfbnpNaW51dGVTdGVwID0gMTtcbiAgcHJpdmF0ZSBfbnpTZWNvbmRTdGVwID0gMTtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIG9uQ2hhbmdlPzogKHZhbHVlOiBEYXRlKSA9PiB2b2lkO1xuICBwcml2YXRlIG9uVG91Y2g/OiAoKSA9PiB2b2lkO1xuICBwcml2YXRlIF9mb3JtYXQgPSAnSEg6bW06c3MnO1xuICBwcml2YXRlIF9kaXNhYmxlZEhvdXJzPzogKCkgPT4gbnVtYmVyW10gPSAoKSA9PiBbXTtcbiAgcHJpdmF0ZSBfZGlzYWJsZWRNaW51dGVzPzogKGhvdXI6IG51bWJlcikgPT4gbnVtYmVyW10gPSAoKSA9PiBbXTtcbiAgcHJpdmF0ZSBfZGlzYWJsZWRTZWNvbmRzPzogKGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIpID0+IG51bWJlcltdID0gKCkgPT4gW107XG4gIHByaXZhdGUgX2FsbG93RW1wdHkgPSB0cnVlO1xuICB0aW1lID0gbmV3IFRpbWVIb2xkZXIoKTtcbiAgaG91ckVuYWJsZWQgPSB0cnVlO1xuICBtaW51dGVFbmFibGVkID0gdHJ1ZTtcbiAgc2Vjb25kRW5hYmxlZCA9IHRydWU7XG4gIGZpcnN0U2Nyb2xsZWQgPSBmYWxzZTtcbiAgZW5hYmxlZENvbHVtbnMgPSAzO1xuICBob3VyUmFuZ2UhOiBSZWFkb25seUFycmF5PHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfT47XG4gIG1pbnV0ZVJhbmdlITogUmVhZG9ubHlBcnJheTx7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0+O1xuICBzZWNvbmRSYW5nZSE6IFJlYWRvbmx5QXJyYXk8eyBpbmRleDogbnVtYmVyOyBkaXNhYmxlZDogYm9vbGVhbiB9PjtcbiAgdXNlMTJIb3Vyc1JhbmdlITogUmVhZG9ubHlBcnJheTx7IGluZGV4OiBudW1iZXI7IHZhbHVlOiBzdHJpbmcgfT47XG5cbiAgQFZpZXdDaGlsZChOelRpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgbnpUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZT86IE56VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmU7XG4gIEBWaWV3Q2hpbGQoJ2hvdXJMaXN0RWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBob3VyTGlzdEVsZW1lbnQ/OiBEZWJ1Z0VsZW1lbnQ7XG4gIEBWaWV3Q2hpbGQoJ21pbnV0ZUxpc3RFbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIG1pbnV0ZUxpc3RFbGVtZW50PzogRGVidWdFbGVtZW50O1xuICBAVmlld0NoaWxkKCdzZWNvbmRMaXN0RWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBzZWNvbmRMaXN0RWxlbWVudD86IERlYnVnRWxlbWVudDtcbiAgQFZpZXdDaGlsZCgndXNlMTJIb3Vyc0xpc3RFbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIHVzZTEySG91cnNMaXN0RWxlbWVudD86IERlYnVnRWxlbWVudDtcblxuICBASW5wdXQoKSBuekluRGF0ZVBpY2tlcjogYm9vbGVhbiA9IGZhbHNlOyAvLyBJZiBpbnNpZGUgYSBkYXRlLXBpY2tlciwgbW9yZSBkaWZmIHdvcmtzIG5lZWQgdG8gYmUgZG9uZVxuICBASW5wdXQoKSBuekFkZE9uPzogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56SGlkZURpc2FibGVkT3B0aW9ucyA9IGZhbHNlO1xuICBASW5wdXQoKSBuekNsZWFyVGV4dD86IHN0cmluZztcbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlcj86IHN0cmluZztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56VXNlMTJIb3VycyA9IGZhbHNlO1xuICBASW5wdXQoKSBuekRlZmF1bHRPcGVuVmFsdWU/OiBEYXRlO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbG9zZVBhbmVsID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekFsbG93RW1wdHkodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9hbGxvd0VtcHR5ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56QWxsb3dFbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dFbXB0eTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekRpc2FibGVkSG91cnModmFsdWU6IHVuZGVmaW5lZCB8ICgoKSA9PiBudW1iZXJbXSkpIHtcbiAgICB0aGlzLl9kaXNhYmxlZEhvdXJzID0gdmFsdWU7XG4gICAgaWYgKCEhdGhpcy5fZGlzYWJsZWRIb3Vycykge1xuICAgICAgdGhpcy5idWlsZEhvdXJzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56RGlzYWJsZWRIb3VycygpOiB1bmRlZmluZWQgfCAoKCkgPT4gbnVtYmVyW10pIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWRIb3VycztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekRpc2FibGVkTWludXRlcyh2YWx1ZTogdW5kZWZpbmVkIHwgKChob3VyOiBudW1iZXIpID0+IG51bWJlcltdKSkge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVkTWludXRlcyA9IHZhbHVlO1xuICAgICAgdGhpcy5idWlsZE1pbnV0ZXMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpEaXNhYmxlZE1pbnV0ZXMoKTogdW5kZWZpbmVkIHwgKChob3VyOiBudW1iZXIpID0+IG51bWJlcltdKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkTWludXRlcztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekRpc2FibGVkU2Vjb25kcyh2YWx1ZTogdW5kZWZpbmVkIHwgKChob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKSA9PiBudW1iZXJbXSkpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9kaXNhYmxlZFNlY29uZHMgPSB2YWx1ZTtcbiAgICAgIHRoaXMuYnVpbGRTZWNvbmRzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56RGlzYWJsZWRTZWNvbmRzKCk6IHVuZGVmaW5lZCB8ICgoaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcikgPT4gbnVtYmVyW10pIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWRTZWNvbmRzO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGZvcm1hdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5fZm9ybWF0ID0gdmFsdWU7XG4gICAgICB0aGlzLmVuYWJsZWRDb2x1bW5zID0gMDtcbiAgICAgIGNvbnN0IGNoYXJTZXQgPSBuZXcgU2V0KHZhbHVlKTtcbiAgICAgIHRoaXMuaG91ckVuYWJsZWQgPSBjaGFyU2V0LmhhcygnSCcpIHx8IGNoYXJTZXQuaGFzKCdoJyk7XG4gICAgICB0aGlzLm1pbnV0ZUVuYWJsZWQgPSBjaGFyU2V0LmhhcygnbScpO1xuICAgICAgdGhpcy5zZWNvbmRFbmFibGVkID0gY2hhclNldC5oYXMoJ3MnKTtcbiAgICAgIGlmICh0aGlzLmhvdXJFbmFibGVkKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlZENvbHVtbnMrKztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm1pbnV0ZUVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5lbmFibGVkQ29sdW1ucysrO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2Vjb25kRW5hYmxlZCkge1xuICAgICAgICB0aGlzLmVuYWJsZWRDb2x1bW5zKys7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5uelVzZTEySG91cnMpIHtcbiAgICAgICAgdGhpcy5idWlsZDEySG91cnMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXQgZm9ybWF0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1hdDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekhvdXJTdGVwKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9uekhvdXJTdGVwID0gdmFsdWU7XG4gICAgICB0aGlzLmJ1aWxkSG91cnMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpIb3VyU3RlcCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9uekhvdXJTdGVwO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56TWludXRlU3RlcCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5fbnpNaW51dGVTdGVwID0gdmFsdWU7XG4gICAgICB0aGlzLmJ1aWxkTWludXRlcygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuek1pbnV0ZVN0ZXAoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbnpNaW51dGVTdGVwO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2Vjb25kU3RlcCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5fbnpTZWNvbmRTdGVwID0gdmFsdWU7XG4gICAgICB0aGlzLmJ1aWxkU2Vjb25kcygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuelNlY29uZFN0ZXAoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbnpTZWNvbmRTdGVwO1xuICB9XG5cbiAgc2VsZWN0SW5wdXRSYW5nZSgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLm56VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmUpIHtcbiAgICAgICAgdGhpcy5uelRpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlLnNldFJhbmdlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBidWlsZEhvdXJzKCk6IHZvaWQge1xuICAgIGxldCBob3VyUmFuZ2VzID0gMjQ7XG4gICAgbGV0IGRpc2FibGVkSG91cnMgPSB0aGlzLm56RGlzYWJsZWRIb3Vycz8uKCk7XG4gICAgbGV0IHN0YXJ0SW5kZXggPSAwO1xuICAgIGlmICh0aGlzLm56VXNlMTJIb3Vycykge1xuICAgICAgaG91clJhbmdlcyA9IDEyO1xuICAgICAgaWYgKGRpc2FibGVkSG91cnMpIHtcbiAgICAgICAgaWYgKHRoaXMudGltZS5zZWxlY3RlZDEySG91cnMgPT09ICdQTScpIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBGaWx0ZXIgYW5kIHRyYW5zZm9ybSBob3VycyB3aGljaCBncmVhdGVyIG9yIGVxdWFsIHRvIDEyXG4gICAgICAgICAgICogWzAsIDEsIDIsIC4uLiwgMTIsIDEzLCAxNCwgMTUsIC4uLiwgMjNdID0+IFsxMiwgMSwgMiwgMywgLi4uLCAxMV1cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBkaXNhYmxlZEhvdXJzID0gZGlzYWJsZWRIb3Vycy5maWx0ZXIoaSA9PiBpID49IDEyKS5tYXAoaSA9PiAoaSA+IDEyID8gaSAtIDEyIDogaSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEZpbHRlciBhbmQgdHJhbnNmb3JtIGhvdXJzIHdoaWNoIGxlc3MgdGhhbiAxMlxuICAgICAgICAgICAqIFswLCAxLCAyLC4uLiwgMTIsIDEzLCAxNCwgMTUsIC4uLjIzXSA9PiBbMTIsIDEsIDIsIDMsIC4uLiwgMTFdXG4gICAgICAgICAgICovXG4gICAgICAgICAgZGlzYWJsZWRIb3VycyA9IGRpc2FibGVkSG91cnMuZmlsdGVyKGkgPT4gaSA8IDEyIHx8IGkgPT09IDI0KS5tYXAoaSA9PiAoaSA9PT0gMjQgfHwgaSA9PT0gMCA/IDEyIDogaSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzdGFydEluZGV4ID0gMTtcbiAgICB9XG4gICAgdGhpcy5ob3VyUmFuZ2UgPSBtYWtlUmFuZ2UoaG91clJhbmdlcywgdGhpcy5uekhvdXJTdGVwLCBzdGFydEluZGV4KS5tYXAociA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbmRleDogcixcbiAgICAgICAgZGlzYWJsZWQ6ICEhZGlzYWJsZWRIb3VycyAmJiBkaXNhYmxlZEhvdXJzLmluZGV4T2YocikgIT09IC0xXG4gICAgICB9O1xuICAgIH0pO1xuICAgIGlmICh0aGlzLm56VXNlMTJIb3VycyAmJiB0aGlzLmhvdXJSYW5nZVt0aGlzLmhvdXJSYW5nZS5sZW5ndGggLSAxXS5pbmRleCA9PT0gMTIpIHtcbiAgICAgIGNvbnN0IHRlbXAgPSBbLi4udGhpcy5ob3VyUmFuZ2VdO1xuICAgICAgdGVtcC51bnNoaWZ0KHRlbXBbdGVtcC5sZW5ndGggLSAxXSk7XG4gICAgICB0ZW1wLnNwbGljZSh0ZW1wLmxlbmd0aCAtIDEsIDEpO1xuICAgICAgdGhpcy5ob3VyUmFuZ2UgPSB0ZW1wO1xuICAgIH1cbiAgfVxuXG4gIGJ1aWxkTWludXRlcygpOiB2b2lkIHtcbiAgICB0aGlzLm1pbnV0ZVJhbmdlID0gbWFrZVJhbmdlKDYwLCB0aGlzLm56TWludXRlU3RlcCkubWFwKHIgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaW5kZXg6IHIsXG4gICAgICAgIGRpc2FibGVkOiAhIXRoaXMubnpEaXNhYmxlZE1pbnV0ZXMgJiYgdGhpcy5uekRpc2FibGVkTWludXRlcyh0aGlzLnRpbWUuaG91cnMhKS5pbmRleE9mKHIpICE9PSAtMVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGJ1aWxkU2Vjb25kcygpOiB2b2lkIHtcbiAgICB0aGlzLnNlY29uZFJhbmdlID0gbWFrZVJhbmdlKDYwLCB0aGlzLm56U2Vjb25kU3RlcCkubWFwKHIgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaW5kZXg6IHIsXG4gICAgICAgIGRpc2FibGVkOiAhIXRoaXMubnpEaXNhYmxlZFNlY29uZHMgJiYgdGhpcy5uekRpc2FibGVkU2Vjb25kcyh0aGlzLnRpbWUuaG91cnMhLCB0aGlzLnRpbWUubWludXRlcyEpLmluZGV4T2YocikgIT09IC0xXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgYnVpbGQxMkhvdXJzKCk6IHZvaWQge1xuICAgIGNvbnN0IGlzVXBwZXJGb3JtYXQgPSB0aGlzLl9mb3JtYXQuaW5jbHVkZXMoJ0EnKTtcbiAgICB0aGlzLnVzZTEySG91cnNSYW5nZSA9IFtcbiAgICAgIHtcbiAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgIHZhbHVlOiBpc1VwcGVyRm9ybWF0ID8gJ0FNJyA6ICdhbSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGluZGV4OiAxLFxuICAgICAgICB2YWx1ZTogaXNVcHBlckZvcm1hdCA/ICdQTScgOiAncG0nXG4gICAgICB9XG4gICAgXTtcbiAgfVxuXG4gIGJ1aWxkVGltZXMoKTogdm9pZCB7XG4gICAgdGhpcy5idWlsZEhvdXJzKCk7XG4gICAgdGhpcy5idWlsZE1pbnV0ZXMoKTtcbiAgICB0aGlzLmJ1aWxkU2Vjb25kcygpO1xuICAgIHRoaXMuYnVpbGQxMkhvdXJzKCk7XG4gIH1cblxuICBzY3JvbGxUb1RpbWUoZGVsYXk6IG51bWJlciA9IDApOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ob3VyRW5hYmxlZCAmJiB0aGlzLmhvdXJMaXN0RWxlbWVudCkge1xuICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMuaG91ckxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMudGltZS52aWV3SG91cnMhLCBkZWxheSwgJ2hvdXInKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubWludXRlRW5hYmxlZCAmJiB0aGlzLm1pbnV0ZUxpc3RFbGVtZW50KSB7XG4gICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5taW51dGVMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLnRpbWUubWludXRlcyEsIGRlbGF5LCAnbWludXRlJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlY29uZEVuYWJsZWQgJiYgdGhpcy5zZWNvbmRMaXN0RWxlbWVudCkge1xuICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMuc2Vjb25kTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy50aW1lLnNlY29uZHMhLCBkZWxheSwgJ3NlY29uZCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5uelVzZTEySG91cnMgJiYgdGhpcy51c2UxMkhvdXJzTGlzdEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkSG91cnMgPSB0aGlzLnRpbWUuc2VsZWN0ZWQxMkhvdXJzO1xuICAgICAgY29uc3QgaW5kZXggPSBzZWxlY3RlZEhvdXJzID09PSAnQU0nID8gMCA6IDE7XG4gICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy51c2UxMkhvdXJzTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgaW5kZXgsIGRlbGF5LCAnMTItaG91cicpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdEhvdXIoaG91cjogeyBpbmRleDogbnVtYmVyOyBkaXNhYmxlZDogYm9vbGVhbiB9KTogdm9pZCB7XG4gICAgdGhpcy50aW1lLnNldEhvdXJzKGhvdXIuaW5kZXgsIGhvdXIuZGlzYWJsZWQpO1xuICAgIGlmICghIXRoaXMuX2Rpc2FibGVkTWludXRlcykge1xuICAgICAgdGhpcy5idWlsZE1pbnV0ZXMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkU2Vjb25kcyB8fCB0aGlzLl9kaXNhYmxlZE1pbnV0ZXMpIHtcbiAgICAgIHRoaXMuYnVpbGRTZWNvbmRzKCk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0TWludXRlKG1pbnV0ZTogeyBpbmRleDogbnVtYmVyOyBkaXNhYmxlZDogYm9vbGVhbiB9KTogdm9pZCB7XG4gICAgdGhpcy50aW1lLnNldE1pbnV0ZXMobWludXRlLmluZGV4LCBtaW51dGUuZGlzYWJsZWQpO1xuICAgIGlmICghIXRoaXMuX2Rpc2FibGVkU2Vjb25kcykge1xuICAgICAgdGhpcy5idWlsZFNlY29uZHMoKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RTZWNvbmQoc2Vjb25kOiB7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0pOiB2b2lkIHtcbiAgICB0aGlzLnRpbWUuc2V0U2Vjb25kcyhzZWNvbmQuaW5kZXgsIHNlY29uZC5kaXNhYmxlZCk7XG4gIH1cblxuICBzZWxlY3QxMkhvdXJzKHZhbHVlOiB7IGluZGV4OiBudW1iZXI7IHZhbHVlOiBzdHJpbmcgfSk6IHZvaWQge1xuICAgIHRoaXMudGltZS5zZXRTZWxlY3RlZDEySG91cnModmFsdWUudmFsdWUpO1xuICAgIGlmICghIXRoaXMuX2Rpc2FibGVkSG91cnMpIHtcbiAgICAgIHRoaXMuYnVpbGRIb3VycygpO1xuICAgIH1cbiAgICBpZiAoISF0aGlzLl9kaXNhYmxlZE1pbnV0ZXMpIHtcbiAgICAgIHRoaXMuYnVpbGRNaW51dGVzKCk7XG4gICAgfVxuICAgIGlmICghIXRoaXMuX2Rpc2FibGVkU2Vjb25kcykge1xuICAgICAgdGhpcy5idWlsZFNlY29uZHMoKTtcbiAgICB9XG4gIH1cblxuICBzY3JvbGxUb1NlbGVjdGVkKGluc3RhbmNlOiBIVE1MRWxlbWVudCwgaW5kZXg6IG51bWJlciwgZHVyYXRpb246IG51bWJlciA9IDAsIHVuaXQ6IE56VGltZVBpY2tlclVuaXQpOiB2b2lkIHtcbiAgICBpZiAoIWluc3RhbmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRyYW5zSW5kZXggPSB0aGlzLnRyYW5zbGF0ZUluZGV4KGluZGV4LCB1bml0KTtcbiAgICBjb25zdCBjdXJyZW50T3B0aW9uID0gKGluc3RhbmNlLmNoaWxkcmVuW3RyYW5zSW5kZXhdIHx8IGluc3RhbmNlLmNoaWxkcmVuWzBdKSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLnNjcm9sbFRvKGluc3RhbmNlLCBjdXJyZW50T3B0aW9uLm9mZnNldFRvcCwgZHVyYXRpb24pO1xuICB9XG5cbiAgdHJhbnNsYXRlSW5kZXgoaW5kZXg6IG51bWJlciwgdW5pdDogTnpUaW1lUGlja2VyVW5pdCk6IG51bWJlciB7XG4gICAgaWYgKHVuaXQgPT09ICdob3VyJykge1xuICAgICAgcmV0dXJuIHRoaXMuY2FsY0luZGV4KHRoaXMubnpEaXNhYmxlZEhvdXJzPy4oKSwgdGhpcy5ob3VyUmFuZ2UubWFwKGl0ZW0gPT4gaXRlbS5pbmRleCkuaW5kZXhPZihpbmRleCkpO1xuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ21pbnV0ZScpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhbGNJbmRleCh0aGlzLm56RGlzYWJsZWRNaW51dGVzPy4odGhpcy50aW1lLmhvdXJzISksIHRoaXMubWludXRlUmFuZ2UubWFwKGl0ZW0gPT4gaXRlbS5pbmRleCkuaW5kZXhPZihpbmRleCkpO1xuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ3NlY29uZCcpIHtcbiAgICAgIC8vIHNlY29uZFxuICAgICAgcmV0dXJuIHRoaXMuY2FsY0luZGV4KFxuICAgICAgICB0aGlzLm56RGlzYWJsZWRTZWNvbmRzPy4odGhpcy50aW1lLmhvdXJzISwgdGhpcy50aW1lLm1pbnV0ZXMhKSxcbiAgICAgICAgdGhpcy5zZWNvbmRSYW5nZS5tYXAoaXRlbSA9PiBpdGVtLmluZGV4KS5pbmRleE9mKGluZGV4KVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gMTItaG91clxuICAgICAgcmV0dXJuIHRoaXMuY2FsY0luZGV4KFtdLCB0aGlzLnVzZTEySG91cnNSYW5nZS5tYXAoaXRlbSA9PiBpdGVtLmluZGV4KS5pbmRleE9mKGluZGV4KSk7XG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsVG8oZWxlbWVudDogSFRNTEVsZW1lbnQsIHRvOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoZHVyYXRpb24gPD0gMCkge1xuICAgICAgZWxlbWVudC5zY3JvbGxUb3AgPSB0bztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZGlmZmVyZW5jZSA9IHRvIC0gZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgY29uc3QgcGVyVGljayA9IChkaWZmZXJlbmNlIC8gZHVyYXRpb24pICogMTA7XG5cbiAgICByZXFBbmltRnJhbWUoKCkgPT4ge1xuICAgICAgZWxlbWVudC5zY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbFRvcCArIHBlclRpY2s7XG4gICAgICBpZiAoZWxlbWVudC5zY3JvbGxUb3AgPT09IHRvKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2Nyb2xsVG8oZWxlbWVudCwgdG8sIGR1cmF0aW9uIC0gMTApO1xuICAgIH0pO1xuICB9XG5cbiAgY2FsY0luZGV4KGFycmF5OiBudW1iZXJbXSB8IHVuZGVmaW5lZCwgaW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKGFycmF5Py5sZW5ndGggJiYgdGhpcy5uekhpZGVEaXNhYmxlZE9wdGlvbnMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGluZGV4IC1cbiAgICAgICAgYXJyYXkucmVkdWNlKChwcmUsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHByZSArICh2YWx1ZSA8IGluZGV4ID8gMSA6IDApO1xuICAgICAgICB9LCAwKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBjaGFuZ2VkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudGltZS52YWx1ZSEpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCB0b3VjaGVkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9uVG91Y2gpIHtcbiAgICAgIHRoaXMub25Ub3VjaCgpO1xuICAgIH1cbiAgfVxuXG4gIHRpbWVEaXNhYmxlZCh2YWx1ZTogRGF0ZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGhvdXIgPSB2YWx1ZS5nZXRIb3VycygpO1xuICAgIGNvbnN0IG1pbnV0ZSA9IHZhbHVlLmdldE1pbnV0ZXMoKTtcbiAgICBjb25zdCBzZWNvbmQgPSB2YWx1ZS5nZXRTZWNvbmRzKCk7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLm56RGlzYWJsZWRIb3Vycz8uKCkuaW5kZXhPZihob3VyKSA/PyAtMSkgPiAtMSB8fFxuICAgICAgKHRoaXMubnpEaXNhYmxlZE1pbnV0ZXM/Lihob3VyKS5pbmRleE9mKG1pbnV0ZSkgPz8gLTEpID4gLTEgfHxcbiAgICAgICh0aGlzLm56RGlzYWJsZWRTZWNvbmRzPy4oaG91ciwgbWludXRlKS5pbmRleE9mKHNlY29uZCkgPz8gLTEpID4gLTFcbiAgICApO1xuICB9XG5cbiAgb25DbGlja05vdygpOiB2b2lkIHtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGlmICh0aGlzLnRpbWVEaXNhYmxlZChub3cpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudGltZS5zZXRWYWx1ZShub3cpO1xuICAgIHRoaXMuY2hhbmdlZCgpO1xuICAgIHRoaXMuY2xvc2VQYW5lbC5lbWl0KCk7XG4gIH1cblxuICBpc1NlbGVjdGVkSG91cihob3VyOiB7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0pOiBib29sZWFuIHtcbiAgICByZXR1cm4gaG91ci5pbmRleCA9PT0gdGhpcy50aW1lLnZpZXdIb3VycztcbiAgfVxuXG4gIGlzU2VsZWN0ZWRNaW51dGUobWludXRlOiB7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0pOiBib29sZWFuIHtcbiAgICByZXR1cm4gbWludXRlLmluZGV4ID09PSB0aGlzLnRpbWUubWludXRlcztcbiAgfVxuXG4gIGlzU2VsZWN0ZWRTZWNvbmQoc2Vjb25kOiB7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0pOiBib29sZWFuIHtcbiAgICByZXR1cm4gc2Vjb25kLmluZGV4ID09PSB0aGlzLnRpbWUuc2Vjb25kcztcbiAgfVxuXG4gIGlzU2VsZWN0ZWQxMkhvdXJzKHZhbHVlOiB7IGluZGV4OiBudW1iZXI7IHZhbHVlOiBzdHJpbmcgfSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB2YWx1ZS52YWx1ZS50b1VwcGVyQ2FzZSgpID09PSB0aGlzLnRpbWUuc2VsZWN0ZWQxMkhvdXJzO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwdWJsaWMgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50aW1lLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5jaGFuZ2VkKCk7XG4gICAgICB0aGlzLnRvdWNoZWQoKTtcbiAgICB9KTtcbiAgICB0aGlzLmJ1aWxkVGltZXMoKTtcbiAgICB0aGlzLnNlbGVjdElucHV0UmFuZ2UoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2Nyb2xsVG9UaW1lKCk7XG4gICAgICB0aGlzLmZpcnN0U2Nyb2xsZWQgPSB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuelVzZTEySG91cnMsIG56RGVmYXVsdE9wZW5WYWx1ZSB9ID0gY2hhbmdlcztcbiAgICBpZiAoIW56VXNlMTJIb3Vycz8ucHJldmlvdXNWYWx1ZSAmJiBuelVzZTEySG91cnM/LmN1cnJlbnRWYWx1ZSkge1xuICAgICAgdGhpcy5idWlsZDEySG91cnMoKTtcbiAgICAgIHRoaXMuZW5hYmxlZENvbHVtbnMrKztcbiAgICB9XG4gICAgaWYgKG56RGVmYXVsdE9wZW5WYWx1ZT8uY3VycmVudFZhbHVlKSB7XG4gICAgICB0aGlzLnRpbWUuc2V0RGVmYXVsdE9wZW5WYWx1ZSh0aGlzLm56RGVmYXVsdE9wZW5WYWx1ZSB8fCBuZXcgRGF0ZSgpKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlKTogdm9pZCB7XG4gICAgdGhpcy50aW1lLnNldFZhbHVlKHZhbHVlLCB0aGlzLm56VXNlMTJIb3Vycyk7XG4gICAgdGhpcy5idWlsZFRpbWVzKCk7XG5cbiAgICBpZiAodmFsdWUgJiYgdGhpcy5maXJzdFNjcm9sbGVkKSB7XG4gICAgICB0aGlzLnNjcm9sbFRvVGltZSgxMjApO1xuICAgIH1cbiAgICAvLyBNYXJrIHRoaXMgY29tcG9uZW50IHRvIGJlIGNoZWNrZWQgbWFudWFsbHkgd2l0aCBpbnRlcm5hbCBwcm9wZXJ0aWVzIGNoYW5naW5nIChzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEwODE2KVxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBEYXRlKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2ggPSBmbjtcbiAgfVxufVxuIl19