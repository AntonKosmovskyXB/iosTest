/**
 * @fileoverview added by tsickle
 * Generated from: time-picker-panel.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
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
function makeRange(length, step = 1, start = 0) {
    return new Array(Math.ceil(length / step)).fill(0).map((/**
     * @param {?} _
     * @param {?} i
     * @return {?}
     */
    (_, i) => (i + start) * step));
}
export class NzTimePickerPanelComponent {
    /**
     * @param {?} cdr
     * @param {?} dateHelper
     */
    constructor(cdr, dateHelper) {
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
        () => []);
        this._disabledMinutes = (/**
         * @return {?}
         */
        () => []);
        this._disabledSeconds = (/**
         * @return {?}
         */
        () => []);
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
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAllowEmpty(value) {
        if (isNotNil(value)) {
            this._allowEmpty = value;
        }
    }
    /**
     * @return {?}
     */
    get nzAllowEmpty() {
        return this._allowEmpty;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabledHours(value) {
        this._disabledHours = value;
        if (!!this._disabledHours) {
            this.buildHours();
        }
    }
    /**
     * @return {?}
     */
    get nzDisabledHours() {
        return this._disabledHours;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabledMinutes(value) {
        if (isNotNil(value)) {
            this._disabledMinutes = value;
            this.buildMinutes();
        }
    }
    /**
     * @return {?}
     */
    get nzDisabledMinutes() {
        return this._disabledMinutes;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabledSeconds(value) {
        if (isNotNil(value)) {
            this._disabledSeconds = value;
            this.buildSeconds();
        }
    }
    /**
     * @return {?}
     */
    get nzDisabledSeconds() {
        return this._disabledSeconds;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set format(value) {
        if (isNotNil(value)) {
            this._format = value;
            this.enabledColumns = 0;
            /** @type {?} */
            const charSet = new Set(value);
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
    }
    /**
     * @return {?}
     */
    get format() {
        return this._format;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzHourStep(value) {
        if (isNotNil(value)) {
            this._nzHourStep = value;
            this.buildHours();
        }
    }
    /**
     * @return {?}
     */
    get nzHourStep() {
        return this._nzHourStep;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzMinuteStep(value) {
        if (isNotNil(value)) {
            this._nzMinuteStep = value;
            this.buildMinutes();
        }
    }
    /**
     * @return {?}
     */
    get nzMinuteStep() {
        return this._nzMinuteStep;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSecondStep(value) {
        if (isNotNil(value)) {
            this._nzSecondStep = value;
            this.buildSeconds();
        }
    }
    /**
     * @return {?}
     */
    get nzSecondStep() {
        return this._nzSecondStep;
    }
    /**
     * @return {?}
     */
    selectInputRange() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.nzTimeValueAccessorDirective) {
                this.nzTimeValueAccessorDirective.setRange();
            }
        }));
    }
    /**
     * @return {?}
     */
    buildHours() {
        var _a;
        /** @type {?} */
        let hourRanges = 24;
        /** @type {?} */
        let disabledHours = (_a = this.nzDisabledHours) === null || _a === void 0 ? void 0 : _a.call(this);
        /** @type {?} */
        let startIndex = 0;
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
                    i => i >= 12)).map((/**
                     * @param {?} i
                     * @return {?}
                     */
                    i => (i > 12 ? i - 12 : i)));
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
                    i => i < 12 || i === 24)).map((/**
                     * @param {?} i
                     * @return {?}
                     */
                    i => (i === 24 || i === 0 ? 12 : i)));
                }
            }
            startIndex = 1;
        }
        this.hourRange = makeRange(hourRanges, this.nzHourStep, startIndex).map((/**
         * @param {?} r
         * @return {?}
         */
        r => {
            return {
                index: r,
                disabled: !!disabledHours && disabledHours.indexOf(r) !== -1
            };
        }));
        if (this.nzUse12Hours && this.hourRange[this.hourRange.length - 1].index === 12) {
            /** @type {?} */
            const temp = [...this.hourRange];
            temp.unshift(temp[temp.length - 1]);
            temp.splice(temp.length - 1, 1);
            this.hourRange = temp;
        }
    }
    /**
     * @return {?}
     */
    buildMinutes() {
        this.minuteRange = makeRange(60, this.nzMinuteStep).map((/**
         * @param {?} r
         * @return {?}
         */
        r => {
            return {
                index: r,
                disabled: !!this.nzDisabledMinutes && this.nzDisabledMinutes((/** @type {?} */ (this.time.hours))).indexOf(r) !== -1
            };
        }));
    }
    /**
     * @return {?}
     */
    buildSeconds() {
        this.secondRange = makeRange(60, this.nzSecondStep).map((/**
         * @param {?} r
         * @return {?}
         */
        r => {
            return {
                index: r,
                disabled: !!this.nzDisabledSeconds && this.nzDisabledSeconds((/** @type {?} */ (this.time.hours)), (/** @type {?} */ (this.time.minutes))).indexOf(r) !== -1
            };
        }));
    }
    /**
     * @return {?}
     */
    build12Hours() {
        /** @type {?} */
        const isUpperFormat = this._format.includes('A');
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
    }
    /**
     * @return {?}
     */
    buildTimes() {
        this.buildHours();
        this.buildMinutes();
        this.buildSeconds();
        this.build12Hours();
    }
    /**
     * @param {?=} delay
     * @return {?}
     */
    scrollToTime(delay = 0) {
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
            const selectedHours = this.time.selected12Hours;
            /** @type {?} */
            const index = selectedHours === 'AM' ? 0 : 1;
            this.scrollToSelected(this.use12HoursListElement.nativeElement, index, delay, '12-hour');
        }
    }
    /**
     * @param {?} hour
     * @return {?}
     */
    selectHour(hour) {
        this.time.setHours(hour.index, hour.disabled);
        if (!!this._disabledMinutes) {
            this.buildMinutes();
        }
        if (this._disabledSeconds || this._disabledMinutes) {
            this.buildSeconds();
        }
    }
    /**
     * @param {?} minute
     * @return {?}
     */
    selectMinute(minute) {
        this.time.setMinutes(minute.index, minute.disabled);
        if (!!this._disabledSeconds) {
            this.buildSeconds();
        }
    }
    /**
     * @param {?} second
     * @return {?}
     */
    selectSecond(second) {
        this.time.setSeconds(second.index, second.disabled);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    select12Hours(value) {
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
    }
    /**
     * @param {?} instance
     * @param {?} index
     * @param {?=} duration
     * @param {?=} unit
     * @return {?}
     */
    scrollToSelected(instance, index, duration = 0, unit) {
        if (!instance) {
            return;
        }
        /** @type {?} */
        const transIndex = this.translateIndex(index, unit);
        /** @type {?} */
        const currentOption = (/** @type {?} */ ((instance.children[transIndex] || instance.children[0])));
        this.scrollTo(instance, currentOption.offsetTop, duration);
    }
    /**
     * @param {?} index
     * @param {?} unit
     * @return {?}
     */
    translateIndex(index, unit) {
        var _a, _b, _c;
        if (unit === 'hour') {
            return this.calcIndex((_a = this.nzDisabledHours) === null || _a === void 0 ? void 0 : _a.call(this), this.hourRange.map((/**
             * @param {?} item
             * @return {?}
             */
            item => item.index)).indexOf(index));
        }
        else if (unit === 'minute') {
            return this.calcIndex((_b = this.nzDisabledMinutes) === null || _b === void 0 ? void 0 : _b.call(this, (/** @type {?} */ (this.time.hours))), this.minuteRange.map((/**
             * @param {?} item
             * @return {?}
             */
            item => item.index)).indexOf(index));
        }
        else if (unit === 'second') {
            // second
            return this.calcIndex((_c = this.nzDisabledSeconds) === null || _c === void 0 ? void 0 : _c.call(this, (/** @type {?} */ (this.time.hours)), (/** @type {?} */ (this.time.minutes))), this.secondRange.map((/**
             * @param {?} item
             * @return {?}
             */
            item => item.index)).indexOf(index));
        }
        else {
            // 12-hour
            return this.calcIndex([], this.use12HoursRange.map((/**
             * @param {?} item
             * @return {?}
             */
            item => item.index)).indexOf(index));
        }
    }
    /**
     * @param {?} element
     * @param {?} to
     * @param {?} duration
     * @return {?}
     */
    scrollTo(element, to, duration) {
        if (duration <= 0) {
            element.scrollTop = to;
            return;
        }
        /** @type {?} */
        const difference = to - element.scrollTop;
        /** @type {?} */
        const perTick = (difference / duration) * 10;
        reqAnimFrame((/**
         * @return {?}
         */
        () => {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop === to) {
                return;
            }
            this.scrollTo(element, to, duration - 10);
        }));
    }
    /**
     * @param {?} array
     * @param {?} index
     * @return {?}
     */
    calcIndex(array, index) {
        if ((array === null || array === void 0 ? void 0 : array.length) && this.nzHideDisabledOptions) {
            return (index -
                array.reduce((/**
                 * @param {?} pre
                 * @param {?} value
                 * @return {?}
                 */
                (pre, value) => {
                    return pre + (value < index ? 1 : 0);
                }), 0));
        }
        else {
            return index;
        }
    }
    /**
     * @protected
     * @return {?}
     */
    changed() {
        if (this.onChange) {
            this.onChange((/** @type {?} */ (this.time.value)));
        }
    }
    /**
     * @protected
     * @return {?}
     */
    touched() {
        if (this.onTouch) {
            this.onTouch();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    timeDisabled(value) {
        var _a, _b, _c, _d, _e, _f;
        /** @type {?} */
        const hour = value.getHours();
        /** @type {?} */
        const minute = value.getMinutes();
        /** @type {?} */
        const second = value.getSeconds();
        return (((_b = (_a = this.nzDisabledHours) === null || _a === void 0 ? void 0 : _a.call(this).indexOf(hour)) !== null && _b !== void 0 ? _b : -1) > -1 ||
            ((_d = (_c = this.nzDisabledMinutes) === null || _c === void 0 ? void 0 : _c.call(this, hour).indexOf(minute)) !== null && _d !== void 0 ? _d : -1) > -1 ||
            ((_f = (_e = this.nzDisabledSeconds) === null || _e === void 0 ? void 0 : _e.call(this, hour, minute).indexOf(second)) !== null && _f !== void 0 ? _f : -1) > -1);
    }
    /**
     * @return {?}
     */
    onClickNow() {
        /** @type {?} */
        const now = new Date();
        if (this.timeDisabled(now)) {
            return;
        }
        this.time.setValue(now);
        this.changed();
        this.closePanel.emit();
    }
    /**
     * @param {?} hour
     * @return {?}
     */
    isSelectedHour(hour) {
        return hour.index === this.time.viewHours;
    }
    /**
     * @param {?} minute
     * @return {?}
     */
    isSelectedMinute(minute) {
        return minute.index === this.time.minutes;
    }
    /**
     * @param {?} second
     * @return {?}
     */
    isSelectedSecond(second) {
        return second.index === this.time.seconds;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isSelected12Hours(value) {
        return value.value.toUpperCase() === this.time.selected12Hours;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.time.changes.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.changed();
            this.touched();
        }));
        this.buildTimes();
        this.selectInputRange();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.scrollToTime();
            this.firstScrolled = true;
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzUse12Hours, nzDefaultOpenValue } = changes;
        if (!(nzUse12Hours === null || nzUse12Hours === void 0 ? void 0 : nzUse12Hours.previousValue) && (nzUse12Hours === null || nzUse12Hours === void 0 ? void 0 : nzUse12Hours.currentValue)) {
            this.build12Hours();
            this.enabledColumns++;
        }
        if (nzDefaultOpenValue === null || nzDefaultOpenValue === void 0 ? void 0 : nzDefaultOpenValue.currentValue) {
            this.time.setDefaultOpenValue(this.nzDefaultOpenValue || new Date());
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.time.setValue(value, this.nzUse12Hours);
        this.buildTimes();
        if (value && this.firstScrolled) {
            this.scrollToTime(120);
        }
        // Mark this component to be checked manually with internal properties changing (see: https://github.com/angular/angular/issues/10816)
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
}
NzTimePickerPanelComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-time-picker-panel',
                exportAs: 'nzTimePickerPanel',
                template: `
    <div *ngIf="nzInDatePicker" class="ant-picker-header">
      <div class="ant-picker-header-view">{{ dateHelper.format($any(time?.value), format) || '&nbsp;' }}</div>
    </div>
    <div class="ant-picker-content">
      <ul *ngIf="hourEnabled" #hourListElement class="ant-picker-time-panel-column" style="position: relative;">
        <ng-container *ngFor="let hour of hourRange">
          <li
            *ngIf="!(nzHideDisabledOptions && hour.disabled)"
            class="ant-picker-time-panel-cell"
            (click)="selectHour(hour)"
            [class.ant-picker-time-panel-cell-selected]="isSelectedHour(hour)"
            [class.ant-picker-time-panel-cell-disabled]="hour.disabled"
          >
            <div class="ant-picker-time-panel-cell-inner">{{ hour.index | number: '2.0-0' }}</div>
          </li>
        </ng-container>
      </ul>
      <ul *ngIf="minuteEnabled" #minuteListElement class="ant-picker-time-panel-column" style="position: relative;">
        <ng-container *ngFor="let minute of minuteRange">
          <li
            *ngIf="!(nzHideDisabledOptions && minute.disabled)"
            class="ant-picker-time-panel-cell"
            (click)="selectMinute(minute)"
            [class.ant-picker-time-panel-cell-selected]="isSelectedMinute(minute)"
            [class.ant-picker-time-panel-cell-disabled]="minute.disabled"
          >
            <div class="ant-picker-time-panel-cell-inner">{{ minute.index | number: '2.0-0' }}</div>
          </li>
        </ng-container>
      </ul>
      <ul *ngIf="secondEnabled" #secondListElement class="ant-picker-time-panel-column" style="position: relative;">
        <ng-container *ngFor="let second of secondRange">
          <li
            *ngIf="!(nzHideDisabledOptions && second.disabled)"
            class="ant-picker-time-panel-cell"
            (click)="selectSecond(second)"
            [class.ant-picker-time-panel-cell-selected]="isSelectedSecond(second)"
            [class.ant-picker-time-panel-cell-disabled]="second.disabled"
          >
            <div class="ant-picker-time-panel-cell-inner">{{ second.index | number: '2.0-0' }}</div>
          </li>
        </ng-container>
      </ul>
      <ul *ngIf="nzUse12Hours" #use12HoursListElement class="ant-picker-time-panel-column" style="position: relative;">
        <ng-container *ngFor="let range of use12HoursRange">
          <li
            *ngIf="!nzHideDisabledOptions"
            (click)="select12Hours(range)"
            class="ant-picker-time-panel-cell"
            [class.ant-picker-time-panel-cell-selected]="isSelected12Hours(range)"
          >
            <div class="ant-picker-time-panel-cell-inner">{{ range.value }}</div>
          </li>
        </ng-container>
      </ul>
    </div>
    <div *ngIf="!nzInDatePicker" class="ant-picker-footer">
      <div *ngIf="nzAddOn" class="ant-picker-footer-extra">
        <ng-template [ngTemplateOutlet]="nzAddOn"></ng-template>
      </div>
      <ul class="ant-picker-ranges">
        <li class="ant-picker-now">
          <a (click)="onClickNow()">
            {{ 'Calendar.lang.now' | nzI18n }}
          </a>
        </li>
      </ul>
    </div>
  `,
                host: {
                    '[class.ant-picker-time-panel]': `true`,
                    '[class.ant-picker-time-panel-column-0]': `enabledColumns === 0 && !nzInDatePicker`,
                    '[class.ant-picker-time-panel-column-1]': `enabledColumns === 1 && !nzInDatePicker`,
                    '[class.ant-picker-time-panel-column-2]': `enabledColumns === 2 && !nzInDatePicker`,
                    '[class.ant-picker-time-panel-column-3]': `enabledColumns === 3 && !nzInDatePicker`,
                    '[class.ant-picker-time-panel-narrow]': `enabledColumns < 3`,
                    '[class.ant-picker-time-panel-placement-bottomLeft]': `!nzInDatePicker`
                },
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: NzTimePickerPanelComponent, multi: true }]
            }] }
];
/** @nocollapse */
NzTimePickerPanelComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: DateHelperService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1waWNrZXItcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90aW1lLXBpY2tlci8iLCJzb3VyY2VzIjpbInRpbWUtcGlja2VyLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFFTixXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7OztBQUUvRSxTQUFTLFNBQVMsQ0FBQyxNQUFjLEVBQUUsT0FBZSxDQUFDLEVBQUUsUUFBZ0IsQ0FBQztJQUNwRSxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7Ozs7O0lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FB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Ozs7SUFDakUsc0RBQWlGOzs7OztJQUNqRixpREFBMkI7O0lBQzNCLDBDQUF3Qjs7SUFDeEIsaURBQW1COztJQUNuQixtREFBcUI7O0lBQ3JCLG1EQUFxQjs7SUFDckIsbURBQXNCOztJQUN0QixvREFBbUI7O0lBQ25CLCtDQUFnRTs7SUFDaEUsaURBQWtFOztJQUNsRSxpREFBa0U7O0lBQ2xFLHFEQUFrRTs7SUFFbEUsa0VBQzREOztJQUM1RCxxREFDK0I7O0lBQy9CLHVEQUFvRjs7SUFDcEYsdURBQW9GOztJQUNwRiwyREFBNEY7O0lBRTVGLG9EQUF5Qzs7SUFDekMsNkNBQXFDOztJQUNyQywyREFBdUM7O0lBQ3ZDLGlEQUE4Qjs7SUFDOUIsbURBQWdDOztJQUNoQyxrREFBOEM7O0lBQzlDLHdEQUFtQzs7SUFFbkMsZ0RBQXlEOzs7OztJQWlXN0MseUNBQThCOztJQUFFLGdEQUFvQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBEZWJ1Z0VsZW1lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyByZXFBbmltRnJhbWUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvcG9seWZpbGwnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBpc05vdE5pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVGltZUhvbGRlciB9IGZyb20gJy4vdGltZS1ob2xkZXInO1xuaW1wb3J0IHsgTnpUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSB9IGZyb20gJy4vdGltZS12YWx1ZS1hY2Nlc3Nvci5kaXJlY3RpdmUnO1xuXG5mdW5jdGlvbiBtYWtlUmFuZ2UobGVuZ3RoOiBudW1iZXIsIHN0ZXA6IG51bWJlciA9IDEsIHN0YXJ0OiBudW1iZXIgPSAwKTogbnVtYmVyW10ge1xuICByZXR1cm4gbmV3IEFycmF5KE1hdGguY2VpbChsZW5ndGggLyBzdGVwKSkuZmlsbCgwKS5tYXAoKF8sIGkpID0+IChpICsgc3RhcnQpICogc3RlcCk7XG59XG5cbmV4cG9ydCB0eXBlIE56VGltZVBpY2tlclVuaXQgPSAnaG91cicgfCAnbWludXRlJyB8ICdzZWNvbmQnIHwgJzEyLWhvdXInO1xuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHNlbGVjdG9yOiAnbnotdGltZS1waWNrZXItcGFuZWwnLFxuICBleHBvcnRBczogJ256VGltZVBpY2tlclBhbmVsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2ICpuZ0lmPVwibnpJbkRhdGVQaWNrZXJcIiBjbGFzcz1cImFudC1waWNrZXItaGVhZGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LXBpY2tlci1oZWFkZXItdmlld1wiPnt7IGRhdGVIZWxwZXIuZm9ybWF0KCRhbnkodGltZT8udmFsdWUpLCBmb3JtYXQpIHx8ICcmbmJzcDsnIH19PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImFudC1waWNrZXItY29udGVudFwiPlxuICAgICAgPHVsICpuZ0lmPVwiaG91ckVuYWJsZWRcIiAjaG91ckxpc3RFbGVtZW50IGNsYXNzPVwiYW50LXBpY2tlci10aW1lLXBhbmVsLWNvbHVtblwiIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlO1wiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBob3VyIG9mIGhvdXJSYW5nZVwiPlxuICAgICAgICAgIDxsaVxuICAgICAgICAgICAgKm5nSWY9XCIhKG56SGlkZURpc2FibGVkT3B0aW9ucyAmJiBob3VyLmRpc2FibGVkKVwiXG4gICAgICAgICAgICBjbGFzcz1cImFudC1waWNrZXItdGltZS1wYW5lbC1jZWxsXCJcbiAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RIb3VyKGhvdXIpXCJcbiAgICAgICAgICAgIFtjbGFzcy5hbnQtcGlja2VyLXRpbWUtcGFuZWwtY2VsbC1zZWxlY3RlZF09XCJpc1NlbGVjdGVkSG91cihob3VyKVwiXG4gICAgICAgICAgICBbY2xhc3MuYW50LXBpY2tlci10aW1lLXBhbmVsLWNlbGwtZGlzYWJsZWRdPVwiaG91ci5kaXNhYmxlZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1waWNrZXItdGltZS1wYW5lbC1jZWxsLWlubmVyXCI+e3sgaG91ci5pbmRleCB8IG51bWJlcjogJzIuMC0wJyB9fTwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC91bD5cbiAgICAgIDx1bCAqbmdJZj1cIm1pbnV0ZUVuYWJsZWRcIiAjbWludXRlTGlzdEVsZW1lbnQgY2xhc3M9XCJhbnQtcGlja2VyLXRpbWUtcGFuZWwtY29sdW1uXCIgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7XCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG1pbnV0ZSBvZiBtaW51dGVSYW5nZVwiPlxuICAgICAgICAgIDxsaVxuICAgICAgICAgICAgKm5nSWY9XCIhKG56SGlkZURpc2FibGVkT3B0aW9ucyAmJiBtaW51dGUuZGlzYWJsZWQpXCJcbiAgICAgICAgICAgIGNsYXNzPVwiYW50LXBpY2tlci10aW1lLXBhbmVsLWNlbGxcIlxuICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdE1pbnV0ZShtaW51dGUpXCJcbiAgICAgICAgICAgIFtjbGFzcy5hbnQtcGlja2VyLXRpbWUtcGFuZWwtY2VsbC1zZWxlY3RlZF09XCJpc1NlbGVjdGVkTWludXRlKG1pbnV0ZSlcIlxuICAgICAgICAgICAgW2NsYXNzLmFudC1waWNrZXItdGltZS1wYW5lbC1jZWxsLWRpc2FibGVkXT1cIm1pbnV0ZS5kaXNhYmxlZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1waWNrZXItdGltZS1wYW5lbC1jZWxsLWlubmVyXCI+e3sgbWludXRlLmluZGV4IHwgbnVtYmVyOiAnMi4wLTAnIH19PC9kaXY+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L3VsPlxuICAgICAgPHVsICpuZ0lmPVwic2Vjb25kRW5hYmxlZFwiICNzZWNvbmRMaXN0RWxlbWVudCBjbGFzcz1cImFudC1waWNrZXItdGltZS1wYW5lbC1jb2x1bW5cIiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTtcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc2Vjb25kIG9mIHNlY29uZFJhbmdlXCI+XG4gICAgICAgICAgPGxpXG4gICAgICAgICAgICAqbmdJZj1cIiEobnpIaWRlRGlzYWJsZWRPcHRpb25zICYmIHNlY29uZC5kaXNhYmxlZClcIlxuICAgICAgICAgICAgY2xhc3M9XCJhbnQtcGlja2VyLXRpbWUtcGFuZWwtY2VsbFwiXG4gICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0U2Vjb25kKHNlY29uZClcIlxuICAgICAgICAgICAgW2NsYXNzLmFudC1waWNrZXItdGltZS1wYW5lbC1jZWxsLXNlbGVjdGVkXT1cImlzU2VsZWN0ZWRTZWNvbmQoc2Vjb25kKVwiXG4gICAgICAgICAgICBbY2xhc3MuYW50LXBpY2tlci10aW1lLXBhbmVsLWNlbGwtZGlzYWJsZWRdPVwic2Vjb25kLmRpc2FibGVkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXBpY2tlci10aW1lLXBhbmVsLWNlbGwtaW5uZXJcIj57eyBzZWNvbmQuaW5kZXggfCBudW1iZXI6ICcyLjAtMCcgfX08L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvdWw+XG4gICAgICA8dWwgKm5nSWY9XCJuelVzZTEySG91cnNcIiAjdXNlMTJIb3Vyc0xpc3RFbGVtZW50IGNsYXNzPVwiYW50LXBpY2tlci10aW1lLXBhbmVsLWNvbHVtblwiIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlO1wiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCByYW5nZSBvZiB1c2UxMkhvdXJzUmFuZ2VcIj5cbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgICpuZ0lmPVwiIW56SGlkZURpc2FibGVkT3B0aW9uc1wiXG4gICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0MTJIb3VycyhyYW5nZSlcIlxuICAgICAgICAgICAgY2xhc3M9XCJhbnQtcGlja2VyLXRpbWUtcGFuZWwtY2VsbFwiXG4gICAgICAgICAgICBbY2xhc3MuYW50LXBpY2tlci10aW1lLXBhbmVsLWNlbGwtc2VsZWN0ZWRdPVwiaXNTZWxlY3RlZDEySG91cnMocmFuZ2UpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXBpY2tlci10aW1lLXBhbmVsLWNlbGwtaW5uZXJcIj57eyByYW5nZS52YWx1ZSB9fTwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2ICpuZ0lmPVwiIW56SW5EYXRlUGlja2VyXCIgY2xhc3M9XCJhbnQtcGlja2VyLWZvb3RlclwiPlxuICAgICAgPGRpdiAqbmdJZj1cIm56QWRkT25cIiBjbGFzcz1cImFudC1waWNrZXItZm9vdGVyLWV4dHJhXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJuekFkZE9uXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsIGNsYXNzPVwiYW50LXBpY2tlci1yYW5nZXNcIj5cbiAgICAgICAgPGxpIGNsYXNzPVwiYW50LXBpY2tlci1ub3dcIj5cbiAgICAgICAgICA8YSAoY2xpY2spPVwib25DbGlja05vdygpXCI+XG4gICAgICAgICAgICB7eyAnQ2FsZW5kYXIubGFuZy5ub3cnIHwgbnpJMThuIH19XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXBpY2tlci10aW1lLXBhbmVsXSc6IGB0cnVlYCxcbiAgICAnW2NsYXNzLmFudC1waWNrZXItdGltZS1wYW5lbC1jb2x1bW4tMF0nOiBgZW5hYmxlZENvbHVtbnMgPT09IDAgJiYgIW56SW5EYXRlUGlja2VyYCxcbiAgICAnW2NsYXNzLmFudC1waWNrZXItdGltZS1wYW5lbC1jb2x1bW4tMV0nOiBgZW5hYmxlZENvbHVtbnMgPT09IDEgJiYgIW56SW5EYXRlUGlja2VyYCxcbiAgICAnW2NsYXNzLmFudC1waWNrZXItdGltZS1wYW5lbC1jb2x1bW4tMl0nOiBgZW5hYmxlZENvbHVtbnMgPT09IDIgJiYgIW56SW5EYXRlUGlja2VyYCxcbiAgICAnW2NsYXNzLmFudC1waWNrZXItdGltZS1wYW5lbC1jb2x1bW4tM10nOiBgZW5hYmxlZENvbHVtbnMgPT09IDMgJiYgIW56SW5EYXRlUGlja2VyYCxcbiAgICAnW2NsYXNzLmFudC1waWNrZXItdGltZS1wYW5lbC1uYXJyb3ddJzogYGVuYWJsZWRDb2x1bW5zIDwgM2AsXG4gICAgJ1tjbGFzcy5hbnQtcGlja2VyLXRpbWUtcGFuZWwtcGxhY2VtZW50LWJvdHRvbUxlZnRdJzogYCFuekluRGF0ZVBpY2tlcmBcbiAgfSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IE56VGltZVBpY2tlclBhbmVsQ29tcG9uZW50LCBtdWx0aTogdHJ1ZSB9XVxufSlcbmV4cG9ydCBjbGFzcyBOelRpbWVQaWNrZXJQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256VXNlMTJIb3VyczogQm9vbGVhbklucHV0O1xuXG4gIHByaXZhdGUgX256SG91clN0ZXAgPSAxO1xuICBwcml2YXRlIF9uek1pbnV0ZVN0ZXAgPSAxO1xuICBwcml2YXRlIF9uelNlY29uZFN0ZXAgPSAxO1xuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgb25DaGFuZ2U/OiAodmFsdWU6IERhdGUpID0+IHZvaWQ7XG4gIHByaXZhdGUgb25Ub3VjaD86ICgpID0+IHZvaWQ7XG4gIHByaXZhdGUgX2Zvcm1hdCA9ICdISDptbTpzcyc7XG4gIHByaXZhdGUgX2Rpc2FibGVkSG91cnM/OiAoKSA9PiBudW1iZXJbXSA9ICgpID0+IFtdO1xuICBwcml2YXRlIF9kaXNhYmxlZE1pbnV0ZXM/OiAoaG91cjogbnVtYmVyKSA9PiBudW1iZXJbXSA9ICgpID0+IFtdO1xuICBwcml2YXRlIF9kaXNhYmxlZFNlY29uZHM/OiAoaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcikgPT4gbnVtYmVyW10gPSAoKSA9PiBbXTtcbiAgcHJpdmF0ZSBfYWxsb3dFbXB0eSA9IHRydWU7XG4gIHRpbWUgPSBuZXcgVGltZUhvbGRlcigpO1xuICBob3VyRW5hYmxlZCA9IHRydWU7XG4gIG1pbnV0ZUVuYWJsZWQgPSB0cnVlO1xuICBzZWNvbmRFbmFibGVkID0gdHJ1ZTtcbiAgZmlyc3RTY3JvbGxlZCA9IGZhbHNlO1xuICBlbmFibGVkQ29sdW1ucyA9IDM7XG4gIGhvdXJSYW5nZSE6IFJlYWRvbmx5QXJyYXk8eyBpbmRleDogbnVtYmVyOyBkaXNhYmxlZDogYm9vbGVhbiB9PjtcbiAgbWludXRlUmFuZ2UhOiBSZWFkb25seUFycmF5PHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfT47XG4gIHNlY29uZFJhbmdlITogUmVhZG9ubHlBcnJheTx7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0+O1xuICB1c2UxMkhvdXJzUmFuZ2UhOiBSZWFkb25seUFycmF5PHsgaW5kZXg6IG51bWJlcjsgdmFsdWU6IHN0cmluZyB9PjtcblxuICBAVmlld0NoaWxkKE56VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBuelRpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlPzogTnpUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZTtcbiAgQFZpZXdDaGlsZCgnaG91ckxpc3RFbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIGhvdXJMaXN0RWxlbWVudD86IERlYnVnRWxlbWVudDtcbiAgQFZpZXdDaGlsZCgnbWludXRlTGlzdEVsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgbWludXRlTGlzdEVsZW1lbnQ/OiBEZWJ1Z0VsZW1lbnQ7XG4gIEBWaWV3Q2hpbGQoJ3NlY29uZExpc3RFbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIHNlY29uZExpc3RFbGVtZW50PzogRGVidWdFbGVtZW50O1xuICBAVmlld0NoaWxkKCd1c2UxMkhvdXJzTGlzdEVsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgdXNlMTJIb3Vyc0xpc3RFbGVtZW50PzogRGVidWdFbGVtZW50O1xuXG4gIEBJbnB1dCgpIG56SW5EYXRlUGlja2VyOiBib29sZWFuID0gZmFsc2U7IC8vIElmIGluc2lkZSBhIGRhdGUtcGlja2VyLCBtb3JlIGRpZmYgd29ya3MgbmVlZCB0byBiZSBkb25lXG4gIEBJbnB1dCgpIG56QWRkT24/OiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpIaWRlRGlzYWJsZWRPcHRpb25zID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56Q2xlYXJUZXh0Pzogc3RyaW5nO1xuICBASW5wdXQoKSBuelBsYWNlSG9sZGVyPzogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpVc2UxMkhvdXJzID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56RGVmYXVsdE9wZW5WYWx1ZT86IERhdGU7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsb3NlUGFuZWwgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IG56QWxsb3dFbXB0eSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX2FsbG93RW1wdHkgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpBbGxvd0VtcHR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hbGxvd0VtcHR5O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56RGlzYWJsZWRIb3Vycyh2YWx1ZTogdW5kZWZpbmVkIHwgKCgpID0+IG51bWJlcltdKSkge1xuICAgIHRoaXMuX2Rpc2FibGVkSG91cnMgPSB2YWx1ZTtcbiAgICBpZiAoISF0aGlzLl9kaXNhYmxlZEhvdXJzKSB7XG4gICAgICB0aGlzLmJ1aWxkSG91cnMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpEaXNhYmxlZEhvdXJzKCk6IHVuZGVmaW5lZCB8ICgoKSA9PiBudW1iZXJbXSkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZEhvdXJzO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56RGlzYWJsZWRNaW51dGVzKHZhbHVlOiB1bmRlZmluZWQgfCAoKGhvdXI6IG51bWJlcikgPT4gbnVtYmVyW10pKSB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5fZGlzYWJsZWRNaW51dGVzID0gdmFsdWU7XG4gICAgICB0aGlzLmJ1aWxkTWludXRlcygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuekRpc2FibGVkTWludXRlcygpOiB1bmRlZmluZWQgfCAoKGhvdXI6IG51bWJlcikgPT4gbnVtYmVyW10pIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWRNaW51dGVzO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56RGlzYWJsZWRTZWNvbmRzKHZhbHVlOiB1bmRlZmluZWQgfCAoKGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIpID0+IG51bWJlcltdKSkge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVkU2Vjb25kcyA9IHZhbHVlO1xuICAgICAgdGhpcy5idWlsZFNlY29uZHMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpEaXNhYmxlZFNlY29uZHMoKTogdW5kZWZpbmVkIHwgKChob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKSA9PiBudW1iZXJbXSkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZFNlY29uZHM7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZm9ybWF0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9mb3JtYXQgPSB2YWx1ZTtcbiAgICAgIHRoaXMuZW5hYmxlZENvbHVtbnMgPSAwO1xuICAgICAgY29uc3QgY2hhclNldCA9IG5ldyBTZXQodmFsdWUpO1xuICAgICAgdGhpcy5ob3VyRW5hYmxlZCA9IGNoYXJTZXQuaGFzKCdIJykgfHwgY2hhclNldC5oYXMoJ2gnKTtcbiAgICAgIHRoaXMubWludXRlRW5hYmxlZCA9IGNoYXJTZXQuaGFzKCdtJyk7XG4gICAgICB0aGlzLnNlY29uZEVuYWJsZWQgPSBjaGFyU2V0LmhhcygncycpO1xuICAgICAgaWYgKHRoaXMuaG91ckVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5lbmFibGVkQ29sdW1ucysrO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubWludXRlRW5hYmxlZCkge1xuICAgICAgICB0aGlzLmVuYWJsZWRDb2x1bW5zKys7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zZWNvbmRFbmFibGVkKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlZENvbHVtbnMrKztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm56VXNlMTJIb3Vycykge1xuICAgICAgICB0aGlzLmJ1aWxkMTJIb3VycygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBmb3JtYXQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56SG91clN0ZXAodmFsdWU6IG51bWJlcikge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX256SG91clN0ZXAgPSB2YWx1ZTtcbiAgICAgIHRoaXMuYnVpbGRIb3VycygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuekhvdXJTdGVwKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX256SG91clN0ZXA7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpNaW51dGVTdGVwKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9uek1pbnV0ZVN0ZXAgPSB2YWx1ZTtcbiAgICAgIHRoaXMuYnVpbGRNaW51dGVzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56TWludXRlU3RlcCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9uek1pbnV0ZVN0ZXA7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpTZWNvbmRTdGVwKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9uelNlY29uZFN0ZXAgPSB2YWx1ZTtcbiAgICAgIHRoaXMuYnVpbGRTZWNvbmRzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56U2Vjb25kU3RlcCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9uelNlY29uZFN0ZXA7XG4gIH1cblxuICBzZWxlY3RJbnB1dFJhbmdlKCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMubnpUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSkge1xuICAgICAgICB0aGlzLm56VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmUuc2V0UmFuZ2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGJ1aWxkSG91cnMoKTogdm9pZCB7XG4gICAgbGV0IGhvdXJSYW5nZXMgPSAyNDtcbiAgICBsZXQgZGlzYWJsZWRIb3VycyA9IHRoaXMubnpEaXNhYmxlZEhvdXJzPy4oKTtcbiAgICBsZXQgc3RhcnRJbmRleCA9IDA7XG4gICAgaWYgKHRoaXMubnpVc2UxMkhvdXJzKSB7XG4gICAgICBob3VyUmFuZ2VzID0gMTI7XG4gICAgICBpZiAoZGlzYWJsZWRIb3Vycykge1xuICAgICAgICBpZiAodGhpcy50aW1lLnNlbGVjdGVkMTJIb3VycyA9PT0gJ1BNJykge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEZpbHRlciBhbmQgdHJhbnNmb3JtIGhvdXJzIHdoaWNoIGdyZWF0ZXIgb3IgZXF1YWwgdG8gMTJcbiAgICAgICAgICAgKiBbMCwgMSwgMiwgLi4uLCAxMiwgMTMsIDE0LCAxNSwgLi4uLCAyM10gPT4gWzEyLCAxLCAyLCAzLCAuLi4sIDExXVxuICAgICAgICAgICAqL1xuICAgICAgICAgIGRpc2FibGVkSG91cnMgPSBkaXNhYmxlZEhvdXJzLmZpbHRlcihpID0+IGkgPj0gMTIpLm1hcChpID0+IChpID4gMTIgPyBpIC0gMTIgOiBpKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogRmlsdGVyIGFuZCB0cmFuc2Zvcm0gaG91cnMgd2hpY2ggbGVzcyB0aGFuIDEyXG4gICAgICAgICAgICogWzAsIDEsIDIsLi4uLCAxMiwgMTMsIDE0LCAxNSwgLi4uMjNdID0+IFsxMiwgMSwgMiwgMywgLi4uLCAxMV1cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBkaXNhYmxlZEhvdXJzID0gZGlzYWJsZWRIb3Vycy5maWx0ZXIoaSA9PiBpIDwgMTIgfHwgaSA9PT0gMjQpLm1hcChpID0+IChpID09PSAyNCB8fCBpID09PSAwID8gMTIgOiBpKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHN0YXJ0SW5kZXggPSAxO1xuICAgIH1cbiAgICB0aGlzLmhvdXJSYW5nZSA9IG1ha2VSYW5nZShob3VyUmFuZ2VzLCB0aGlzLm56SG91clN0ZXAsIHN0YXJ0SW5kZXgpLm1hcChyID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGluZGV4OiByLFxuICAgICAgICBkaXNhYmxlZDogISFkaXNhYmxlZEhvdXJzICYmIGRpc2FibGVkSG91cnMuaW5kZXhPZihyKSAhPT0gLTFcbiAgICAgIH07XG4gICAgfSk7XG4gICAgaWYgKHRoaXMubnpVc2UxMkhvdXJzICYmIHRoaXMuaG91clJhbmdlW3RoaXMuaG91clJhbmdlLmxlbmd0aCAtIDFdLmluZGV4ID09PSAxMikge1xuICAgICAgY29uc3QgdGVtcCA9IFsuLi50aGlzLmhvdXJSYW5nZV07XG4gICAgICB0ZW1wLnVuc2hpZnQodGVtcFt0ZW1wLmxlbmd0aCAtIDFdKTtcbiAgICAgIHRlbXAuc3BsaWNlKHRlbXAubGVuZ3RoIC0gMSwgMSk7XG4gICAgICB0aGlzLmhvdXJSYW5nZSA9IHRlbXA7XG4gICAgfVxuICB9XG5cbiAgYnVpbGRNaW51dGVzKCk6IHZvaWQge1xuICAgIHRoaXMubWludXRlUmFuZ2UgPSBtYWtlUmFuZ2UoNjAsIHRoaXMubnpNaW51dGVTdGVwKS5tYXAociA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbmRleDogcixcbiAgICAgICAgZGlzYWJsZWQ6ICEhdGhpcy5uekRpc2FibGVkTWludXRlcyAmJiB0aGlzLm56RGlzYWJsZWRNaW51dGVzKHRoaXMudGltZS5ob3VycyEpLmluZGV4T2YocikgIT09IC0xXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgYnVpbGRTZWNvbmRzKCk6IHZvaWQge1xuICAgIHRoaXMuc2Vjb25kUmFuZ2UgPSBtYWtlUmFuZ2UoNjAsIHRoaXMubnpTZWNvbmRTdGVwKS5tYXAociA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbmRleDogcixcbiAgICAgICAgZGlzYWJsZWQ6ICEhdGhpcy5uekRpc2FibGVkU2Vjb25kcyAmJiB0aGlzLm56RGlzYWJsZWRTZWNvbmRzKHRoaXMudGltZS5ob3VycyEsIHRoaXMudGltZS5taW51dGVzISkuaW5kZXhPZihyKSAhPT0gLTFcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBidWlsZDEySG91cnMoKTogdm9pZCB7XG4gICAgY29uc3QgaXNVcHBlckZvcm1hdCA9IHRoaXMuX2Zvcm1hdC5pbmNsdWRlcygnQScpO1xuICAgIHRoaXMudXNlMTJIb3Vyc1JhbmdlID0gW1xuICAgICAge1xuICAgICAgICBpbmRleDogMCxcbiAgICAgICAgdmFsdWU6IGlzVXBwZXJGb3JtYXQgPyAnQU0nIDogJ2FtJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW5kZXg6IDEsXG4gICAgICAgIHZhbHVlOiBpc1VwcGVyRm9ybWF0ID8gJ1BNJyA6ICdwbSdcbiAgICAgIH1cbiAgICBdO1xuICB9XG5cbiAgYnVpbGRUaW1lcygpOiB2b2lkIHtcbiAgICB0aGlzLmJ1aWxkSG91cnMoKTtcbiAgICB0aGlzLmJ1aWxkTWludXRlcygpO1xuICAgIHRoaXMuYnVpbGRTZWNvbmRzKCk7XG4gICAgdGhpcy5idWlsZDEySG91cnMoKTtcbiAgfVxuXG4gIHNjcm9sbFRvVGltZShkZWxheTogbnVtYmVyID0gMCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmhvdXJFbmFibGVkICYmIHRoaXMuaG91ckxpc3RFbGVtZW50KSB7XG4gICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5ob3VyTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy50aW1lLnZpZXdIb3VycyEsIGRlbGF5LCAnaG91cicpO1xuICAgIH1cbiAgICBpZiAodGhpcy5taW51dGVFbmFibGVkICYmIHRoaXMubWludXRlTGlzdEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLm1pbnV0ZUxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMudGltZS5taW51dGVzISwgZGVsYXksICdtaW51dGUnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2Vjb25kRW5hYmxlZCAmJiB0aGlzLnNlY29uZExpc3RFbGVtZW50KSB7XG4gICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5zZWNvbmRMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLnRpbWUuc2Vjb25kcyEsIGRlbGF5LCAnc2Vjb25kJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLm56VXNlMTJIb3VycyAmJiB0aGlzLnVzZTEySG91cnNMaXN0RWxlbWVudCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRIb3VycyA9IHRoaXMudGltZS5zZWxlY3RlZDEySG91cnM7XG4gICAgICBjb25zdCBpbmRleCA9IHNlbGVjdGVkSG91cnMgPT09ICdBTScgPyAwIDogMTtcbiAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLnVzZTEySG91cnNMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCBpbmRleCwgZGVsYXksICcxMi1ob3VyJyk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0SG91cihob3VyOiB7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0pOiB2b2lkIHtcbiAgICB0aGlzLnRpbWUuc2V0SG91cnMoaG91ci5pbmRleCwgaG91ci5kaXNhYmxlZCk7XG4gICAgaWYgKCEhdGhpcy5fZGlzYWJsZWRNaW51dGVzKSB7XG4gICAgICB0aGlzLmJ1aWxkTWludXRlcygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGlzYWJsZWRTZWNvbmRzIHx8IHRoaXMuX2Rpc2FibGVkTWludXRlcykge1xuICAgICAgdGhpcy5idWlsZFNlY29uZHMoKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RNaW51dGUobWludXRlOiB7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0pOiB2b2lkIHtcbiAgICB0aGlzLnRpbWUuc2V0TWludXRlcyhtaW51dGUuaW5kZXgsIG1pbnV0ZS5kaXNhYmxlZCk7XG4gICAgaWYgKCEhdGhpcy5fZGlzYWJsZWRTZWNvbmRzKSB7XG4gICAgICB0aGlzLmJ1aWxkU2Vjb25kcygpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdFNlY29uZChzZWNvbmQ6IHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfSk6IHZvaWQge1xuICAgIHRoaXMudGltZS5zZXRTZWNvbmRzKHNlY29uZC5pbmRleCwgc2Vjb25kLmRpc2FibGVkKTtcbiAgfVxuXG4gIHNlbGVjdDEySG91cnModmFsdWU6IHsgaW5kZXg6IG51bWJlcjsgdmFsdWU6IHN0cmluZyB9KTogdm9pZCB7XG4gICAgdGhpcy50aW1lLnNldFNlbGVjdGVkMTJIb3Vycyh2YWx1ZS52YWx1ZSk7XG4gICAgaWYgKCEhdGhpcy5fZGlzYWJsZWRIb3Vycykge1xuICAgICAgdGhpcy5idWlsZEhvdXJzKCk7XG4gICAgfVxuICAgIGlmICghIXRoaXMuX2Rpc2FibGVkTWludXRlcykge1xuICAgICAgdGhpcy5idWlsZE1pbnV0ZXMoKTtcbiAgICB9XG4gICAgaWYgKCEhdGhpcy5fZGlzYWJsZWRTZWNvbmRzKSB7XG4gICAgICB0aGlzLmJ1aWxkU2Vjb25kcygpO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbFRvU2VsZWN0ZWQoaW5zdGFuY2U6IEhUTUxFbGVtZW50LCBpbmRleDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyID0gMCwgdW5pdDogTnpUaW1lUGlja2VyVW5pdCk6IHZvaWQge1xuICAgIGlmICghaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdHJhbnNJbmRleCA9IHRoaXMudHJhbnNsYXRlSW5kZXgoaW5kZXgsIHVuaXQpO1xuICAgIGNvbnN0IGN1cnJlbnRPcHRpb24gPSAoaW5zdGFuY2UuY2hpbGRyZW5bdHJhbnNJbmRleF0gfHwgaW5zdGFuY2UuY2hpbGRyZW5bMF0pIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMuc2Nyb2xsVG8oaW5zdGFuY2UsIGN1cnJlbnRPcHRpb24ub2Zmc2V0VG9wLCBkdXJhdGlvbik7XG4gIH1cblxuICB0cmFuc2xhdGVJbmRleChpbmRleDogbnVtYmVyLCB1bml0OiBOelRpbWVQaWNrZXJVbml0KTogbnVtYmVyIHtcbiAgICBpZiAodW5pdCA9PT0gJ2hvdXInKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYWxjSW5kZXgodGhpcy5uekRpc2FibGVkSG91cnM/LigpLCB0aGlzLmhvdXJSYW5nZS5tYXAoaXRlbSA9PiBpdGVtLmluZGV4KS5pbmRleE9mKGluZGV4KSk7XG4gICAgfSBlbHNlIGlmICh1bml0ID09PSAnbWludXRlJykge1xuICAgICAgcmV0dXJuIHRoaXMuY2FsY0luZGV4KHRoaXMubnpEaXNhYmxlZE1pbnV0ZXM/Lih0aGlzLnRpbWUuaG91cnMhKSwgdGhpcy5taW51dGVSYW5nZS5tYXAoaXRlbSA9PiBpdGVtLmluZGV4KS5pbmRleE9mKGluZGV4KSk7XG4gICAgfSBlbHNlIGlmICh1bml0ID09PSAnc2Vjb25kJykge1xuICAgICAgLy8gc2Vjb25kXG4gICAgICByZXR1cm4gdGhpcy5jYWxjSW5kZXgoXG4gICAgICAgIHRoaXMubnpEaXNhYmxlZFNlY29uZHM/Lih0aGlzLnRpbWUuaG91cnMhLCB0aGlzLnRpbWUubWludXRlcyEpLFxuICAgICAgICB0aGlzLnNlY29uZFJhbmdlLm1hcChpdGVtID0+IGl0ZW0uaW5kZXgpLmluZGV4T2YoaW5kZXgpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAxMi1ob3VyXG4gICAgICByZXR1cm4gdGhpcy5jYWxjSW5kZXgoW10sIHRoaXMudXNlMTJIb3Vyc1JhbmdlLm1hcChpdGVtID0+IGl0ZW0uaW5kZXgpLmluZGV4T2YoaW5kZXgpKTtcbiAgICB9XG4gIH1cblxuICBzY3JvbGxUbyhlbGVtZW50OiBIVE1MRWxlbWVudCwgdG86IG51bWJlciwgZHVyYXRpb246IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChkdXJhdGlvbiA8PSAwKSB7XG4gICAgICBlbGVtZW50LnNjcm9sbFRvcCA9IHRvO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBkaWZmZXJlbmNlID0gdG8gLSBlbGVtZW50LnNjcm9sbFRvcDtcbiAgICBjb25zdCBwZXJUaWNrID0gKGRpZmZlcmVuY2UgLyBkdXJhdGlvbikgKiAxMDtcblxuICAgIHJlcUFuaW1GcmFtZSgoKSA9PiB7XG4gICAgICBlbGVtZW50LnNjcm9sbFRvcCA9IGVsZW1lbnQuc2Nyb2xsVG9wICsgcGVyVGljaztcbiAgICAgIGlmIChlbGVtZW50LnNjcm9sbFRvcCA9PT0gdG8pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zY3JvbGxUbyhlbGVtZW50LCB0bywgZHVyYXRpb24gLSAxMCk7XG4gICAgfSk7XG4gIH1cblxuICBjYWxjSW5kZXgoYXJyYXk6IG51bWJlcltdIHwgdW5kZWZpbmVkLCBpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoYXJyYXk/Lmxlbmd0aCAmJiB0aGlzLm56SGlkZURpc2FibGVkT3B0aW9ucykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgaW5kZXggLVxuICAgICAgICBhcnJheS5yZWR1Y2UoKHByZSwgdmFsdWUpID0+IHtcbiAgICAgICAgICByZXR1cm4gcHJlICsgKHZhbHVlIDwgaW5kZXggPyAxIDogMCk7XG4gICAgICAgIH0sIDApXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGNoYW5nZWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy50aW1lLnZhbHVlISk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHRvdWNoZWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub25Ub3VjaCkge1xuICAgICAgdGhpcy5vblRvdWNoKCk7XG4gICAgfVxuICB9XG5cbiAgdGltZURpc2FibGVkKHZhbHVlOiBEYXRlKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaG91ciA9IHZhbHVlLmdldEhvdXJzKCk7XG4gICAgY29uc3QgbWludXRlID0gdmFsdWUuZ2V0TWludXRlcygpO1xuICAgIGNvbnN0IHNlY29uZCA9IHZhbHVlLmdldFNlY29uZHMoKTtcbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMubnpEaXNhYmxlZEhvdXJzPy4oKS5pbmRleE9mKGhvdXIpID8/IC0xKSA+IC0xIHx8XG4gICAgICAodGhpcy5uekRpc2FibGVkTWludXRlcz8uKGhvdXIpLmluZGV4T2YobWludXRlKSA/PyAtMSkgPiAtMSB8fFxuICAgICAgKHRoaXMubnpEaXNhYmxlZFNlY29uZHM/Lihob3VyLCBtaW51dGUpLmluZGV4T2Yoc2Vjb25kKSA/PyAtMSkgPiAtMVxuICAgICk7XG4gIH1cblxuICBvbkNsaWNrTm93KCk6IHZvaWQge1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgaWYgKHRoaXMudGltZURpc2FibGVkKG5vdykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50aW1lLnNldFZhbHVlKG5vdyk7XG4gICAgdGhpcy5jaGFuZ2VkKCk7XG4gICAgdGhpcy5jbG9zZVBhbmVsLmVtaXQoKTtcbiAgfVxuXG4gIGlzU2VsZWN0ZWRIb3VyKGhvdXI6IHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBob3VyLmluZGV4ID09PSB0aGlzLnRpbWUudmlld0hvdXJzO1xuICB9XG5cbiAgaXNTZWxlY3RlZE1pbnV0ZShtaW51dGU6IHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBtaW51dGUuaW5kZXggPT09IHRoaXMudGltZS5taW51dGVzO1xuICB9XG5cbiAgaXNTZWxlY3RlZFNlY29uZChzZWNvbmQ6IHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBzZWNvbmQuaW5kZXggPT09IHRoaXMudGltZS5zZWNvbmRzO1xuICB9XG5cbiAgaXNTZWxlY3RlZDEySG91cnModmFsdWU6IHsgaW5kZXg6IG51bWJlcjsgdmFsdWU6IHN0cmluZyB9KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZhbHVlLnZhbHVlLnRvVXBwZXJDYXNlKCkgPT09IHRoaXMudGltZS5zZWxlY3RlZDEySG91cnM7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHB1YmxpYyBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRpbWUuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZWQoKTtcbiAgICAgIHRoaXMudG91Y2hlZCgpO1xuICAgIH0pO1xuICAgIHRoaXMuYnVpbGRUaW1lcygpO1xuICAgIHRoaXMuc2VsZWN0SW5wdXRSYW5nZSgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zY3JvbGxUb1RpbWUoKTtcbiAgICAgIHRoaXMuZmlyc3RTY3JvbGxlZCA9IHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG56VXNlMTJIb3VycywgbnpEZWZhdWx0T3BlblZhbHVlIH0gPSBjaGFuZ2VzO1xuICAgIGlmICghbnpVc2UxMkhvdXJzPy5wcmV2aW91c1ZhbHVlICYmIG56VXNlMTJIb3Vycz8uY3VycmVudFZhbHVlKSB7XG4gICAgICB0aGlzLmJ1aWxkMTJIb3VycygpO1xuICAgICAgdGhpcy5lbmFibGVkQ29sdW1ucysrO1xuICAgIH1cbiAgICBpZiAobnpEZWZhdWx0T3BlblZhbHVlPy5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMudGltZS5zZXREZWZhdWx0T3BlblZhbHVlKHRoaXMubnpEZWZhdWx0T3BlblZhbHVlIHx8IG5ldyBEYXRlKCkpO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IERhdGUpOiB2b2lkIHtcbiAgICB0aGlzLnRpbWUuc2V0VmFsdWUodmFsdWUsIHRoaXMubnpVc2UxMkhvdXJzKTtcbiAgICB0aGlzLmJ1aWxkVGltZXMoKTtcblxuICAgIGlmICh2YWx1ZSAmJiB0aGlzLmZpcnN0U2Nyb2xsZWQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsVG9UaW1lKDEyMCk7XG4gICAgfVxuICAgIC8vIE1hcmsgdGhpcyBjb21wb25lbnQgdG8gYmUgY2hlY2tlZCBtYW51YWxseSB3aXRoIGludGVybmFsIHByb3BlcnRpZXMgY2hhbmdpbmcgKHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTA4MTYpXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IERhdGUpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaCA9IGZuO1xuICB9XG59XG4iXX0=