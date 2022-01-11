/**
 * @fileoverview added by tsickle
 * Generated from: date-picker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Host, Input, Optional, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { warnDeprecation } from 'ng-zorro-antd/core/logger';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { CandyDate, cloneDate } from 'ng-zorro-antd/core/time';
import { InputBoolean, toBoolean, valueFunctionProp } from 'ng-zorro-antd/core/util';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DatePickerService } from './date-picker.service';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { NzPickerComponent } from './picker.component';
/** @type {?} */
var POPUP_STYLE_PATCH = { position: 'relative' };
// Aim to override antd's style to support overlay's position strategy (position:absolute will cause it not working beacuse the overlay can't get the height/width of it's content)
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'datePicker';
/**
 * The base picker for all common APIs
 */
var NzDatePickerComponent = /** @class */ (function () {
    function NzDatePickerComponent(nzConfigService, datePickerService, i18n, cdr, renderer, elementRef, dateHelper, noAnimation) {
        this.nzConfigService = nzConfigService;
        this.datePickerService = datePickerService;
        this.i18n = i18n;
        this.cdr = cdr;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.dateHelper = dateHelper;
        this.noAnimation = noAnimation;
        this.isRange = false; // Indicate whether the value is a range value
        // Indicate whether the value is a range value
        this.showWeek = false; // Should show as week picker
        // Should show as week picker
        this.focused = false;
        this.destroyed$ = new Subject();
        this.isCustomPlaceHolder = false;
        this.showTime = false;
        // --- Common API
        this.nzAllowClear = true;
        this.nzAutoFocus = false;
        this.nzDisabled = false;
        this.nzInputReadOnly = false;
        /**
         * @deprecated 10.0.0. This is deprecated and going to be removed in 10.0.0.
         */
        this.nzClassName = '';
        this.nzPlaceHolder = '';
        this.nzPopupStyle = POPUP_STYLE_PATCH;
        this.nzSize = 'default';
        /**
         * @deprecated 10.0.0. This is deprecated and going to be removed in 10.0.0.
         */
        this.nzStyle = null;
        this.nzShowToday = true;
        this.nzMode = 'date';
        this.nzDefaultPickerValue = null;
        this.nzSeparator = undefined;
        this.nzSuffixIcon = 'calendar';
        // TODO(@wenqi73) The PanelMode need named for each pickers and export
        this.nzOnPanelChange = new EventEmitter();
        this.nzOnCalendarChange = new EventEmitter();
        this.nzOnOk = new EventEmitter();
        this.nzOnOpenChange = new EventEmitter();
        // ------------------------------------------------------------------------
        // | Control value accessor implements
        // ------------------------------------------------------------------------
        // NOTE: onChangeFn/onTouchedFn will not be assigned if user not use as ngModel
        this.onChangeFn = (/**
         * @return {?}
         */
        function () { return void 0; });
        this.onTouchedFn = (/**
         * @return {?}
         */
        function () { return void 0; });
    }
    Object.defineProperty(NzDatePickerComponent.prototype, "nzShowTime", {
        get: /**
         * @return {?}
         */
        function () {
            return this.showTime;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.showTime = typeof value === 'object' ? value : toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzDatePickerComponent.prototype, "realOpenState", {
        get: /**
         * @return {?}
         */
        function () {
            return this.picker.animationOpenState;
        } // Use picker's real open state to let re-render the picker's content when shown up
        ,
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzDatePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Subscribe the every locale change if the nzLocale is not handled by user
        if (!this.nzLocale) {
            this.i18n.localeChange.pipe(takeUntil(this.destroyed$)).subscribe((/**
             * @return {?}
             */
            function () { return _this.setLocale(); }));
        }
        // Default value
        this.datePickerService.isRange = this.isRange;
        this.datePickerService.initValue();
        this.datePickerService.emitValue$.pipe(takeUntil(this.destroyed$)).subscribe((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            /** @type {?} */
            var value = _this.datePickerService.value;
            _this.datePickerService.initialValue = cloneDate(value);
            if (_this.isRange) {
                /** @type {?} */
                var vAsRange = (/** @type {?} */ (value));
                if (vAsRange.length) {
                    _this.onChangeFn([vAsRange[0].nativeDate, vAsRange[1].nativeDate]);
                }
                else {
                    _this.onChangeFn([]);
                }
            }
            else {
                if (value) {
                    _this.onChangeFn(((/** @type {?} */ (value))).nativeDate);
                }
                else {
                    _this.onChangeFn(null);
                }
            }
            _this.onTouchedFn();
            // When value emitted, overlay will be closed
            _this.picker.hideOverlay();
        }));
        // Default format when it's empty
        if (!this.nzFormat) {
            if (this.showWeek) {
                this.nzFormat = 'yyyy-ww'; // Format for week
            }
            else {
                this.nzFormat = this.nzShowTime ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd';
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzDatePickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzPopupStyle) {
            // Always assign the popup style patch
            this.nzPopupStyle = this.nzPopupStyle ? __assign(__assign({}, this.nzPopupStyle), POPUP_STYLE_PATCH) : POPUP_STYLE_PATCH;
        }
        // Mark as customized placeholder by user once nzPlaceHolder assigned at the first time
        if (changes.nzPlaceHolder && changes.nzPlaceHolder.firstChange && typeof this.nzPlaceHolder !== 'undefined') {
            this.isCustomPlaceHolder = true;
        }
        if (changes.nzLocale) {
            // The nzLocale is currently handled by user
            this.setDefaultPlaceHolder();
        }
        if (changes.nzRenderExtraFooter) {
            this.extraFooter = valueFunctionProp((/** @type {?} */ (this.nzRenderExtraFooter)));
        }
        if (changes.nzStyle) {
            warnDeprecation("'nzStyle' in DatePicker is going to be removed in 10.0.0. Please use CSS style attribute like <nz-date-picker style=\"...\"></nz-date-picker> instead.");
        }
        if (changes.nzClassName) {
            warnDeprecation("'nzClassName' in DatePicker is going to be removed in 10.0.0. Please use CSS class attribute like <nz-date-picker class=\"...\"></nz-date-picker> instead.");
        }
        if (changes.nzMode) {
            this.setPanelMode();
        }
    };
    /**
     * @return {?}
     */
    NzDatePickerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed$.next();
        this.destroyed$.complete();
    };
    /**
     * @return {?}
     */
    NzDatePickerComponent.prototype.setPanelMode = /**
     * @return {?}
     */
    function () {
        if (!this.nzMode) {
            this.nzMode = this.isRange ? ['date', 'date'] : 'date';
        }
    };
    /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param open The overlayOpen in picker component
     */
    /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param {?} open The overlayOpen in picker component
     * @return {?}
     */
    NzDatePickerComponent.prototype.onOpenChange = /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param {?} open The overlayOpen in picker component
     * @return {?}
     */
    function (open) {
        this.nzOnOpenChange.emit(open);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzDatePickerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.setValue(value);
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzDatePickerComponent.prototype.registerOnChange = /**
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
    NzDatePickerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedFn = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzDatePickerComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    // ------------------------------------------------------------------------
    // | Internal methods
    // ------------------------------------------------------------------------
    // Reload locale from i18n with side effects
    // ------------------------------------------------------------------------
    // | Internal methods
    // ------------------------------------------------------------------------
    // Reload locale from i18n with side effects
    /**
     * @private
     * @return {?}
     */
    NzDatePickerComponent.prototype.setLocale = 
    // ------------------------------------------------------------------------
    // | Internal methods
    // ------------------------------------------------------------------------
    // Reload locale from i18n with side effects
    /**
     * @private
     * @return {?}
     */
    function () {
        this.nzLocale = this.i18n.getLocaleData('DatePicker', {});
        this.setDefaultPlaceHolder();
        this.cdr.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    NzDatePickerComponent.prototype.setDefaultPlaceHolder = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.isCustomPlaceHolder && this.nzLocale) {
            this.nzPlaceHolder = this.isRange ? ((/** @type {?} */ (this.nzLocale.lang.rangePlaceholder))) : (/** @type {?} */ (this.nzLocale.lang.placeholder));
        }
    };
    // Safe way of setting value with default
    // Safe way of setting value with default
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    NzDatePickerComponent.prototype.setValue = 
    // Safe way of setting value with default
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var newValue = this.datePickerService.makeValue(value);
        this.datePickerService.setValue(newValue);
        this.datePickerService.initialValue = newValue;
    };
    Object.defineProperty(NzDatePickerComponent.prototype, "realShowToday", {
        get: /**
         * @return {?}
         */
        function () {
            // Range only support in single date picker
            return this.nzMode === 'date' && this.nzShowToday;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    NzDatePickerComponent.prototype.onFocusChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.focused = value;
        // TODO: avoid autoFocus cause change after checked error
        if (this.focused) {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-picker-focused');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-picker-focused');
        }
    };
    /**
     * @param {?} panelMode
     * @return {?}
     */
    NzDatePickerComponent.prototype.onPanelModeChange = /**
     * @param {?} panelMode
     * @return {?}
     */
    function (panelMode) {
        // this.nzMode = panelMode;
        this.nzOnPanelChange.emit(panelMode);
    };
    // Emit nzOnCalendarChange when select date by nz-range-picker
    // Emit nzOnCalendarChange when select date by nz-range-picker
    /**
     * @param {?} value
     * @return {?}
     */
    NzDatePickerComponent.prototype.onCalendarChange = 
    // Emit nzOnCalendarChange when select date by nz-range-picker
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isRange && Array.isArray(value)) {
            /** @type {?} */
            var rangeValue = value.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x instanceof CandyDate; })).map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return (/** @type {?} */ (x)).nativeDate; }));
            this.nzOnCalendarChange.emit(rangeValue);
        }
    };
    // Emitted when done with date selecting
    // Emitted when done with date selecting
    /**
     * @return {?}
     */
    NzDatePickerComponent.prototype.onResultOk = 
    // Emitted when done with date selecting
    /**
     * @return {?}
     */
    function () {
        if (this.isRange) {
            /** @type {?} */
            var value = (/** @type {?} */ (this.datePickerService.value));
            if (value.length) {
                this.nzOnOk.emit([value[0].nativeDate, value[1].nativeDate]);
            }
            else {
                this.nzOnOk.emit([]);
            }
        }
        else {
            if (this.datePickerService.value) {
                this.nzOnOk.emit(((/** @type {?} */ (this.datePickerService.value))).nativeDate);
            }
            else {
                this.nzOnOk.emit(null);
            }
        }
        this.datePickerService.emitValue$.next();
    };
    NzDatePickerComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'nz-date-picker,nz-week-picker,nz-month-picker,nz-year-picker,nz-range-picker',
                    exportAs: 'nzDatePicker',
                    template: "\n    <div\n      nz-picker\n      [isRange]=\"isRange\"\n      [open]=\"nzOpen\"\n      [separator]=\"nzSeparator\"\n      [disabled]=\"nzDisabled\"\n      [inputReadOnly]=\"nzInputReadOnly\"\n      [format]=\"nzFormat\"\n      [allowClear]=\"nzAllowClear\"\n      [autoFocus]=\"nzAutoFocus\"\n      [placeholder]=\"nzPlaceHolder\"\n      [ngClass]=\"nzClassName\"\n      style=\"display: inherit; align-items: center; width: 100%;\"\n      [ngStyle]=\"nzStyle\"\n      [dropdownClassName]=\"nzDropdownClassName\"\n      [popupStyle]=\"nzPopupStyle\"\n      [noAnimation]=\"!!noAnimation?.nzNoAnimation\"\n      [suffixIcon]=\"nzSuffixIcon\"\n      (openChange)=\"onOpenChange($event)\"\n      (focusChange)=\"onFocusChange($event)\"\n    >\n      <date-range-popup\n        *ngIf=\"realOpenState\"\n        [isRange]=\"isRange\"\n        [defaultPickerValue]=\"nzDefaultPickerValue\"\n        [showWeek]=\"showWeek\"\n        [panelMode]=\"nzMode\"\n        (panelModeChange)=\"onPanelModeChange($event)\"\n        (calendarChange)=\"onCalendarChange($event)\"\n        [locale]=\"nzLocale?.lang!\"\n        [showToday]=\"realShowToday\"\n        [showTime]=\"nzShowTime\"\n        [format]=\"nzFormat\"\n        [dateRender]=\"nzDateRender\"\n        [disabledDate]=\"nzDisabledDate\"\n        [disabledTime]=\"nzDisabledTime\"\n        [placeholder]=\"nzPlaceHolder\"\n        [extraFooter]=\"extraFooter\"\n        [ranges]=\"nzRanges\"\n        (resultOk)=\"onResultOk()\"\n      ></date-range-popup>\n    </div>\n  ",
                    host: {
                        '[class.ant-picker]': "true",
                        '[class.ant-picker-range]': "isRange",
                        '[class.ant-picker-large]': "nzSize === 'large'",
                        '[class.ant-picker-small]': "nzSize === 'small'",
                        '[class.ant-picker-disabled]': "nzDisabled",
                        '(click)': 'picker.onClickInputBox($event)'
                    },
                    providers: [
                        DatePickerService,
                        {
                            provide: NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzDatePickerComponent; }))
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    NzDatePickerComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: DatePickerService },
        { type: NzI18nService },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: ElementRef },
        { type: DateHelperService },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzDatePickerComponent.propDecorators = {
        nzAllowClear: [{ type: Input }],
        nzAutoFocus: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzInputReadOnly: [{ type: Input }],
        nzOpen: [{ type: Input }],
        nzClassName: [{ type: Input }],
        nzDisabledDate: [{ type: Input }],
        nzLocale: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        nzPopupStyle: [{ type: Input }],
        nzDropdownClassName: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzStyle: [{ type: Input }],
        nzFormat: [{ type: Input }],
        nzDateRender: [{ type: Input }],
        nzDisabledTime: [{ type: Input }],
        nzRenderExtraFooter: [{ type: Input }],
        nzShowToday: [{ type: Input }],
        nzMode: [{ type: Input }],
        nzRanges: [{ type: Input }],
        nzDefaultPickerValue: [{ type: Input }],
        nzSeparator: [{ type: Input }],
        nzSuffixIcon: [{ type: Input }],
        nzOnPanelChange: [{ type: Output }],
        nzOnCalendarChange: [{ type: Output }],
        nzOnOk: [{ type: Output }],
        nzOnOpenChange: [{ type: Output }],
        picker: [{ type: ViewChild, args: [NzPickerComponent, { static: true },] }],
        nzShowTime: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzDatePickerComponent.prototype, "nzAllowClear", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzDatePickerComponent.prototype, "nzAutoFocus", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzDatePickerComponent.prototype, "nzDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzDatePickerComponent.prototype, "nzInputReadOnly", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzDatePickerComponent.prototype, "nzOpen", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzDatePickerComponent.prototype, "nzShowToday", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", String)
    ], NzDatePickerComponent.prototype, "nzSeparator", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", Object)
    ], NzDatePickerComponent.prototype, "nzSuffixIcon", void 0);
    return NzDatePickerComponent;
}());
export { NzDatePickerComponent };
if (false) {
    /** @type {?} */
    NzDatePickerComponent.ngAcceptInputType_nzAllowClear;
    /** @type {?} */
    NzDatePickerComponent.ngAcceptInputType_nzAutoFocus;
    /** @type {?} */
    NzDatePickerComponent.ngAcceptInputType_nzDisabled;
    /** @type {?} */
    NzDatePickerComponent.ngAcceptInputType_nzInputReadOnly;
    /** @type {?} */
    NzDatePickerComponent.ngAcceptInputType_nzOpen;
    /** @type {?} */
    NzDatePickerComponent.ngAcceptInputType_nzShowToday;
    /** @type {?} */
    NzDatePickerComponent.ngAcceptInputType_nzMode;
    /** @type {?} */
    NzDatePickerComponent.ngAcceptInputType_nzShowTime;
    /** @type {?} */
    NzDatePickerComponent.prototype.isRange;
    /** @type {?} */
    NzDatePickerComponent.prototype.showWeek;
    /** @type {?} */
    NzDatePickerComponent.prototype.focused;
    /** @type {?} */
    NzDatePickerComponent.prototype.extraFooter;
    /**
     * @type {?}
     * @protected
     */
    NzDatePickerComponent.prototype.destroyed$;
    /**
     * @type {?}
     * @protected
     */
    NzDatePickerComponent.prototype.isCustomPlaceHolder;
    /**
     * @type {?}
     * @private
     */
    NzDatePickerComponent.prototype.showTime;
    /** @type {?} */
    NzDatePickerComponent.prototype.nzAllowClear;
    /** @type {?} */
    NzDatePickerComponent.prototype.nzAutoFocus;
    /** @type {?} */
    NzDatePickerComponent.prototype.nzDisabled;
    /** @type {?} */
    NzDatePickerComponent.prototype.nzInputReadOnly;
    /** @type {?} */
    NzDatePickerComponent.prototype.nzOpen;
    /**
     * @deprecated 10.0.0. This is deprecated and going to be removed in 10.0.0.
     * @type {?}
     */
    NzDatePickerComponent.prototype.nzClassName;
    /** @type {?} */
    NzDatePickerComponent.prototype.nzDisabledDate;
    /** @type {?} */
    NzDatePickerComponent.prototype.nzLocale;
    /** @type {?} */
    NzDatePickerComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzDatePickerComponent.prototype.nzPopupStyle;
    /** @type {?} */
    NzDatePickerComponent.prototype.nzDropdownClassName;
    /** @type {?} */
    NzDatePickerComponent.prototype.nzSize;
    /**
     * @deprecated 10.0.0. This is deprecated and going to be removed in 10.0.0.
     * @type {?}
     */
    NzDatePickerComponent.prototype.nzStyle;
    /** @type {?} */
    NzDatePickerComponent.prototype.nzFormat;
    /** @type {?} */
    NzDatePickerComponent.prototype.nzDateRender;
    /** @type {?} */
    NzDatePickerComponent.prototype.nzDisabledTime;
    /** @type {?} */
    NzDatePickerComponent.prototype.nzRenderExtraFooter;
    /** @type {?} */
    NzDatePickerComponent.prototype.nzShowToday;
    /** @type {?} */
    NzDatePickerComponent.prototype.nzMode;
    /** @type {?} */
    NzDatePickerComponent.prototype.nzRanges;
    /** @type {?} */
    NzDatePickerComponent.prototype.nzDefaultPickerValue;
    /** @type {?} */
    NzDatePickerComponent.prototype.nzSeparator;
    /** @type {?} */
    NzDatePickerComponent.prototype.nzSuffixIcon;
    /** @type {?} */
    NzDatePickerComponent.prototype.nzOnPanelChange;
    /** @type {?} */
    NzDatePickerComponent.prototype.nzOnCalendarChange;
    /** @type {?} */
    NzDatePickerComponent.prototype.nzOnOk;
    /** @type {?} */
    NzDatePickerComponent.prototype.nzOnOpenChange;
    /** @type {?} */
    NzDatePickerComponent.prototype.picker;
    /** @type {?} */
    NzDatePickerComponent.prototype.onChangeFn;
    /** @type {?} */
    NzDatePickerComponent.prototype.onTouchedFn;
    /** @type {?} */
    NzDatePickerComponent.prototype.nzConfigService;
    /** @type {?} */
    NzDatePickerComponent.prototype.datePickerService;
    /**
     * @type {?}
     * @protected
     */
    NzDatePickerComponent.prototype.i18n;
    /**
     * @type {?}
     * @protected
     */
    NzDatePickerComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzDatePickerComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzDatePickerComponent.prototype.elementRef;
    /**
     * @type {?}
     * @protected
     */
    NzDatePickerComponent.prototype.dateHelper;
    /** @type {?} */
    NzDatePickerComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBR1QsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFtQixNQUFNLHlCQUF5QixDQUFDO0FBRWhGLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDckYsT0FBTyxFQUFFLGlCQUFpQixFQUE2QixhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQUdqRCxpQkFBaUIsR0FBRyxFQUFFLFFBQVEs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RDs7SUFDbEQsd0RBQXVEOztJQUN2RCwrQ0FBOEM7O0lBQzlDLG9EQUFtRDs7SUFDbkQsK0NBQWtHOztJQUNsRyxtREFBMEY7O0lBRTFGLHdDQUF5Qjs7SUFDekIseUNBQTBCOztJQUMxQix3Q0FBeUI7O0lBQ3pCLDRDQUE4Qzs7Ozs7SUFFOUMsMkNBQW9EOzs7OztJQUNwRCxvREFBK0M7Ozs7O0lBQy9DLHlDQUF1RDs7SUFHdkQsNkNBQXNEOztJQUN0RCw0Q0FBc0Q7O0lBQ3RELDJDQUFxRDs7SUFDckQsZ0RBQTBEOztJQUMxRCx1Q0FBMEM7Ozs7O0lBSTFDLDRDQUFrQzs7SUFDbEMsK0NBQStDOztJQUMvQyx5Q0FBOEM7O0lBQzlDLDhDQUF1RDs7SUFDdkQsNkNBQWtEOztJQUNsRCxvREFBc0M7O0lBQ3RDLHVDQUEyRDs7Ozs7SUFJM0Qsd0NBQXVDOztJQUN2Qyx5Q0FBMkI7O0lBQzNCLDZDQUFtRzs7SUFDbkcsK0NBQXlDOztJQUN6QyxvREFBK0c7O0lBQy9HLDRDQUFxRDs7SUFDckQsdUNBQW9EOztJQUNwRCx5Q0FBaUM7O0lBQ2pDLHFEQUE0RDs7SUFDNUQsNENBQWdGOztJQUNoRiw2Q0FBMEc7O0lBRzFHLGdEQUF1Rzs7SUFDdkcsbURBQStFOztJQUMvRSx1Q0FBc0U7O0lBQ3RFLCtDQUFnRTs7SUFFaEUsdUNBQTJFOztJQStIM0UsMkNBQXdDOztJQUN4Qyw0Q0FBMEM7O0lBakh4QyxnREFBdUM7O0lBQ3ZDLGtEQUEyQzs7Ozs7SUFDM0MscUNBQTZCOzs7OztJQUM3QixvQ0FBZ0M7Ozs7O0lBQ2hDLHlDQUEyQjs7Ozs7SUFDM0IsMkNBQThCOzs7OztJQUM5QiwyQ0FBdUM7O0lBQ3ZDLDRDQUErRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgd2FybkRlcHJlY2F0aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2xvZ2dlcic7XG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XG5pbXBvcnQgeyBDYW5keURhdGUsIGNsb25lRGF0ZSwgQ29tcGF0aWJsZVZhbHVlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3RpbWUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBGdW5jdGlvblByb3AsIE56U2FmZUFueSwgT25DaGFuZ2VUeXBlLCBPblRvdWNoZWRUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgdG9Cb29sZWFuLCB2YWx1ZUZ1bmN0aW9uUHJvcCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlLCBOekRhdGVQaWNrZXJJMThuSW50ZXJmYWNlLCBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERhdGVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi9kYXRlLXBpY2tlci5zZXJ2aWNlJztcblxuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBOelBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wYXRpYmxlRGF0ZSwgRGlzYWJsZWRUaW1lRm4sIE56RGF0ZU1vZGUsIFByZXNldFJhbmdlcywgU3VwcG9ydFRpbWVPcHRpb25zIH0gZnJvbSAnLi9zdGFuZGFyZC10eXBlcyc7XG5cbmNvbnN0IFBPUFVQX1NUWUxFX1BBVENIID0geyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9OyAvLyBBaW0gdG8gb3ZlcnJpZGUgYW50ZCdzIHN0eWxlIHRvIHN1cHBvcnQgb3ZlcmxheSdzIHBvc2l0aW9uIHN0cmF0ZWd5IChwb3NpdGlvbjphYnNvbHV0ZSB3aWxsIGNhdXNlIGl0IG5vdCB3b3JraW5nIGJlYWN1c2UgdGhlIG92ZXJsYXkgY2FuJ3QgZ2V0IHRoZSBoZWlnaHQvd2lkdGggb2YgaXQncyBjb250ZW50KVxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2RhdGVQaWNrZXInO1xuXG4vKipcbiAqIFRoZSBiYXNlIHBpY2tlciBmb3IgYWxsIGNvbW1vbiBBUElzXG4gKi9cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6ICduei1kYXRlLXBpY2tlcixuei13ZWVrLXBpY2tlcixuei1tb250aC1waWNrZXIsbnoteWVhci1waWNrZXIsbnotcmFuZ2UtcGlja2VyJyxcbiAgZXhwb3J0QXM6ICduekRhdGVQaWNrZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgIG56LXBpY2tlclxuICAgICAgW2lzUmFuZ2VdPVwiaXNSYW5nZVwiXG4gICAgICBbb3Blbl09XCJuek9wZW5cIlxuICAgICAgW3NlcGFyYXRvcl09XCJuelNlcGFyYXRvclwiXG4gICAgICBbZGlzYWJsZWRdPVwibnpEaXNhYmxlZFwiXG4gICAgICBbaW5wdXRSZWFkT25seV09XCJueklucHV0UmVhZE9ubHlcIlxuICAgICAgW2Zvcm1hdF09XCJuekZvcm1hdFwiXG4gICAgICBbYWxsb3dDbGVhcl09XCJuekFsbG93Q2xlYXJcIlxuICAgICAgW2F1dG9Gb2N1c109XCJuekF1dG9Gb2N1c1wiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwibnpQbGFjZUhvbGRlclwiXG4gICAgICBbbmdDbGFzc109XCJuekNsYXNzTmFtZVwiXG4gICAgICBzdHlsZT1cImRpc3BsYXk6IGluaGVyaXQ7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IHdpZHRoOiAxMDAlO1wiXG4gICAgICBbbmdTdHlsZV09XCJuelN0eWxlXCJcbiAgICAgIFtkcm9wZG93bkNsYXNzTmFtZV09XCJuekRyb3Bkb3duQ2xhc3NOYW1lXCJcbiAgICAgIFtwb3B1cFN0eWxlXT1cIm56UG9wdXBTdHlsZVwiXG4gICAgICBbbm9BbmltYXRpb25dPVwiISFub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXG4gICAgICBbc3VmZml4SWNvbl09XCJuelN1ZmZpeEljb25cIlxuICAgICAgKG9wZW5DaGFuZ2UpPVwib25PcGVuQ2hhbmdlKCRldmVudClcIlxuICAgICAgKGZvY3VzQ2hhbmdlKT1cIm9uRm9jdXNDaGFuZ2UoJGV2ZW50KVwiXG4gICAgPlxuICAgICAgPGRhdGUtcmFuZ2UtcG9wdXBcbiAgICAgICAgKm5nSWY9XCJyZWFsT3BlblN0YXRlXCJcbiAgICAgICAgW2lzUmFuZ2VdPVwiaXNSYW5nZVwiXG4gICAgICAgIFtkZWZhdWx0UGlja2VyVmFsdWVdPVwibnpEZWZhdWx0UGlja2VyVmFsdWVcIlxuICAgICAgICBbc2hvd1dlZWtdPVwic2hvd1dlZWtcIlxuICAgICAgICBbcGFuZWxNb2RlXT1cIm56TW9kZVwiXG4gICAgICAgIChwYW5lbE1vZGVDaGFuZ2UpPVwib25QYW5lbE1vZGVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIChjYWxlbmRhckNoYW5nZSk9XCJvbkNhbGVuZGFyQ2hhbmdlKCRldmVudClcIlxuICAgICAgICBbbG9jYWxlXT1cIm56TG9jYWxlPy5sYW5nIVwiXG4gICAgICAgIFtzaG93VG9kYXldPVwicmVhbFNob3dUb2RheVwiXG4gICAgICAgIFtzaG93VGltZV09XCJuelNob3dUaW1lXCJcbiAgICAgICAgW2Zvcm1hdF09XCJuekZvcm1hdFwiXG4gICAgICAgIFtkYXRlUmVuZGVyXT1cIm56RGF0ZVJlbmRlclwiXG4gICAgICAgIFtkaXNhYmxlZERhdGVdPVwibnpEaXNhYmxlZERhdGVcIlxuICAgICAgICBbZGlzYWJsZWRUaW1lXT1cIm56RGlzYWJsZWRUaW1lXCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cIm56UGxhY2VIb2xkZXJcIlxuICAgICAgICBbZXh0cmFGb290ZXJdPVwiZXh0cmFGb290ZXJcIlxuICAgICAgICBbcmFuZ2VzXT1cIm56UmFuZ2VzXCJcbiAgICAgICAgKHJlc3VsdE9rKT1cIm9uUmVzdWx0T2soKVwiXG4gICAgICA+PC9kYXRlLXJhbmdlLXBvcHVwPlxuICAgIDwvZGl2PlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtcGlja2VyXSc6IGB0cnVlYCxcbiAgICAnW2NsYXNzLmFudC1waWNrZXItcmFuZ2VdJzogYGlzUmFuZ2VgLFxuICAgICdbY2xhc3MuYW50LXBpY2tlci1sYXJnZV0nOiBgbnpTaXplID09PSAnbGFyZ2UnYCxcbiAgICAnW2NsYXNzLmFudC1waWNrZXItc21hbGxdJzogYG56U2l6ZSA9PT0gJ3NtYWxsJ2AsXG4gICAgJ1tjbGFzcy5hbnQtcGlja2VyLWRpc2FibGVkXSc6IGBuekRpc2FibGVkYCxcbiAgICAnKGNsaWNrKSc6ICdwaWNrZXIub25DbGlja0lucHV0Qm94KCRldmVudCknXG4gIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIERhdGVQaWNrZXJTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOekRhdGVQaWNrZXJDb21wb25lbnQpXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56RGF0ZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256QWxsb3dDbGVhcjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpBdXRvRm9jdXM6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256SW5wdXRSZWFkT25seTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpPcGVuOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNob3dUb2RheTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpNb2RlOiBOekRhdGVNb2RlIHwgTnpEYXRlTW9kZVtdIHwgc3RyaW5nIHwgc3RyaW5nW10gfCBudWxsIHwgdW5kZWZpbmVkO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTaG93VGltZTogQm9vbGVhbklucHV0IHwgU3VwcG9ydFRpbWVPcHRpb25zIHwgbnVsbCB8IHVuZGVmaW5lZDtcblxuICBpc1JhbmdlOiBib29sZWFuID0gZmFsc2U7IC8vIEluZGljYXRlIHdoZXRoZXIgdGhlIHZhbHVlIGlzIGEgcmFuZ2UgdmFsdWVcbiAgc2hvd1dlZWs6IGJvb2xlYW4gPSBmYWxzZTsgLy8gU2hvdWxkIHNob3cgYXMgd2VlayBwaWNrZXJcbiAgZm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBleHRyYUZvb3Rlcj86IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIGRlc3Ryb3llZCQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuICBwcm90ZWN0ZWQgaXNDdXN0b21QbGFjZUhvbGRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHNob3dUaW1lOiBTdXBwb3J0VGltZU9wdGlvbnMgfCBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gLS0tIENvbW1vbiBBUElcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QWxsb3dDbGVhcjogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekF1dG9Gb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpJbnB1dFJlYWRPbmx5OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek9wZW4/OiBib29sZWFuO1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgMTAuMC4wLiBUaGlzIGlzIGRlcHJlY2F0ZWQgYW5kIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gMTAuMC4wLlxuICAgKi9cbiAgQElucHV0KCkgbnpDbGFzc05hbWU6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBuekRpc2FibGVkRGF0ZT86IChkOiBEYXRlKSA9PiBib29sZWFuO1xuICBASW5wdXQoKSBuekxvY2FsZSE6IE56RGF0ZVBpY2tlckkxOG5JbnRlcmZhY2U7XG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXI6IHN0cmluZyB8IFtzdHJpbmcsIHN0cmluZ10gPSAnJztcbiAgQElucHV0KCkgbnpQb3B1cFN0eWxlOiBvYmplY3QgPSBQT1BVUF9TVFlMRV9QQVRDSDtcbiAgQElucHV0KCkgbnpEcm9wZG93bkNsYXNzTmFtZT86IHN0cmluZztcbiAgQElucHV0KCkgbnpTaXplOiAnbGFyZ2UnIHwgJ3NtYWxsJyB8ICdkZWZhdWx0JyA9ICdkZWZhdWx0JztcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIDEwLjAuMC4gVGhpcyBpcyBkZXByZWNhdGVkIGFuZCBnb2luZyB0byBiZSByZW1vdmVkIGluIDEwLjAuMC5cbiAgICovXG4gIEBJbnB1dCgpIG56U3R5bGU6IG9iamVjdCB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuekZvcm1hdCE6IHN0cmluZztcbiAgQElucHV0KCkgbnpEYXRlUmVuZGVyPzogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IHN0cmluZyB8IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZz47XG4gIEBJbnB1dCgpIG56RGlzYWJsZWRUaW1lPzogRGlzYWJsZWRUaW1lRm47XG4gIEBJbnB1dCgpIG56UmVuZGVyRXh0cmFGb290ZXI/OiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgc3RyaW5nIHwgRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBzdHJpbmc+O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93VG9kYXk6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBuek1vZGU6IE56RGF0ZU1vZGUgfCBOekRhdGVNb2RlW10gPSAnZGF0ZSc7XG4gIEBJbnB1dCgpIG56UmFuZ2VzPzogUHJlc2V0UmFuZ2VzO1xuICBASW5wdXQoKSBuekRlZmF1bHRQaWNrZXJWYWx1ZTogQ29tcGF0aWJsZURhdGUgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBuelNlcGFyYXRvcj86IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBuelN1ZmZpeEljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gPSAnY2FsZW5kYXInO1xuXG4gIC8vIFRPRE8oQHdlbnFpNzMpIFRoZSBQYW5lbE1vZGUgbmVlZCBuYW1lZCBmb3IgZWFjaCBwaWNrZXJzIGFuZCBleHBvcnRcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25QYW5lbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpEYXRlTW9kZSB8IE56RGF0ZU1vZGVbXSB8IHN0cmluZyB8IHN0cmluZ1tdPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkNhbGVuZGFyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxBcnJheTxEYXRlIHwgbnVsbD4+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uT2sgPSBuZXcgRXZlbnRFbWl0dGVyPENvbXBhdGlibGVEYXRlIHwgbnVsbD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25PcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBWaWV3Q2hpbGQoTnpQaWNrZXJDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIHBpY2tlciE6IE56UGlja2VyQ29tcG9uZW50O1xuXG4gIEBJbnB1dCgpIGdldCBuelNob3dUaW1lKCk6IFN1cHBvcnRUaW1lT3B0aW9ucyB8IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNob3dUaW1lO1xuICB9XG5cbiAgc2V0IG56U2hvd1RpbWUodmFsdWU6IFN1cHBvcnRUaW1lT3B0aW9ucyB8IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNob3dUaW1lID0gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHZhbHVlIDogdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCByZWFsT3BlblN0YXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBpY2tlci5hbmltYXRpb25PcGVuU3RhdGU7XG4gIH0gLy8gVXNlIHBpY2tlcidzIHJlYWwgb3BlbiBzdGF0ZSB0byBsZXQgcmUtcmVuZGVyIHRoZSBwaWNrZXIncyBjb250ZW50IHdoZW4gc2hvd24gdXBcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHVibGljIGRhdGVQaWNrZXJTZXJ2aWNlOiBEYXRlUGlja2VyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgaTE4bjogTnpJMThuU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByb3RlY3RlZCBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSxcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIFN1YnNjcmliZSB0aGUgZXZlcnkgbG9jYWxlIGNoYW5nZSBpZiB0aGUgbnpMb2NhbGUgaXMgbm90IGhhbmRsZWQgYnkgdXNlclxuICAgIGlmICghdGhpcy5uekxvY2FsZSkge1xuICAgICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZXRMb2NhbGUoKSk7XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB2YWx1ZVxuICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuaXNSYW5nZSA9IHRoaXMuaXNSYW5nZTtcbiAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmluaXRWYWx1ZSgpO1xuICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuZW1pdFZhbHVlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpKS5zdWJzY3JpYmUoXyA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWU7XG4gICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmluaXRpYWxWYWx1ZSA9IGNsb25lRGF0ZSh2YWx1ZSk7XG4gICAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICAgIGNvbnN0IHZBc1JhbmdlID0gdmFsdWUgYXMgQ2FuZHlEYXRlW107XG4gICAgICAgIGlmICh2QXNSYW5nZS5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlRm4oW3ZBc1JhbmdlWzBdLm5hdGl2ZURhdGUsIHZBc1JhbmdlWzFdLm5hdGl2ZURhdGVdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlRm4oW10pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlRm4oKHZhbHVlIGFzIENhbmR5RGF0ZSkubmF0aXZlRGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5vbkNoYW5nZUZuKG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLm9uVG91Y2hlZEZuKCk7XG4gICAgICAvLyBXaGVuIHZhbHVlIGVtaXR0ZWQsIG92ZXJsYXkgd2lsbCBiZSBjbG9zZWRcbiAgICAgIHRoaXMucGlja2VyLmhpZGVPdmVybGF5KCk7XG4gICAgfSk7XG5cbiAgICAvLyBEZWZhdWx0IGZvcm1hdCB3aGVuIGl0J3MgZW1wdHlcbiAgICBpZiAoIXRoaXMubnpGb3JtYXQpIHtcbiAgICAgIGlmICh0aGlzLnNob3dXZWVrKSB7XG4gICAgICAgIHRoaXMubnpGb3JtYXQgPSAneXl5eS13dyc7IC8vIEZvcm1hdCBmb3Igd2Vla1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5uekZvcm1hdCA9IHRoaXMubnpTaG93VGltZSA/ICd5eXl5LU1NLWRkIEhIOm1tOnNzJyA6ICd5eXl5LU1NLWRkJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubnpQb3B1cFN0eWxlKSB7XG4gICAgICAvLyBBbHdheXMgYXNzaWduIHRoZSBwb3B1cCBzdHlsZSBwYXRjaFxuICAgICAgdGhpcy5uelBvcHVwU3R5bGUgPSB0aGlzLm56UG9wdXBTdHlsZSA/IHsgLi4udGhpcy5uelBvcHVwU3R5bGUsIC4uLlBPUFVQX1NUWUxFX1BBVENIIH0gOiBQT1BVUF9TVFlMRV9QQVRDSDtcbiAgICB9XG5cbiAgICAvLyBNYXJrIGFzIGN1c3RvbWl6ZWQgcGxhY2Vob2xkZXIgYnkgdXNlciBvbmNlIG56UGxhY2VIb2xkZXIgYXNzaWduZWQgYXQgdGhlIGZpcnN0IHRpbWVcbiAgICBpZiAoY2hhbmdlcy5uelBsYWNlSG9sZGVyICYmIGNoYW5nZXMubnpQbGFjZUhvbGRlci5maXJzdENoYW5nZSAmJiB0eXBlb2YgdGhpcy5uelBsYWNlSG9sZGVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5pc0N1c3RvbVBsYWNlSG9sZGVyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5uekxvY2FsZSkge1xuICAgICAgLy8gVGhlIG56TG9jYWxlIGlzIGN1cnJlbnRseSBoYW5kbGVkIGJ5IHVzZXJcbiAgICAgIHRoaXMuc2V0RGVmYXVsdFBsYWNlSG9sZGVyKCk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMubnpSZW5kZXJFeHRyYUZvb3Rlcikge1xuICAgICAgdGhpcy5leHRyYUZvb3RlciA9IHZhbHVlRnVuY3Rpb25Qcm9wKHRoaXMubnpSZW5kZXJFeHRyYUZvb3RlciEpO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLm56U3R5bGUpIHtcbiAgICAgIHdhcm5EZXByZWNhdGlvbihcbiAgICAgICAgYCduelN0eWxlJyBpbiBEYXRlUGlja2VyIGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gMTAuMC4wLiBQbGVhc2UgdXNlIENTUyBzdHlsZSBhdHRyaWJ1dGUgbGlrZSA8bnotZGF0ZS1waWNrZXIgc3R5bGU9XCIuLi5cIj48L256LWRhdGUtcGlja2VyPiBpbnN0ZWFkLmBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMubnpDbGFzc05hbWUpIHtcbiAgICAgIHdhcm5EZXByZWNhdGlvbihcbiAgICAgICAgYCduekNsYXNzTmFtZScgaW4gRGF0ZVBpY2tlciBpcyBnb2luZyB0byBiZSByZW1vdmVkIGluIDEwLjAuMC4gUGxlYXNlIHVzZSBDU1MgY2xhc3MgYXR0cmlidXRlIGxpa2UgPG56LWRhdGUtcGlja2VyIGNsYXNzPVwiLi4uXCI+PC9uei1kYXRlLXBpY2tlcj4gaW5zdGVhZC5gXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLm56TW9kZSkge1xuICAgICAgdGhpcy5zZXRQYW5lbE1vZGUoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveWVkJC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgc2V0UGFuZWxNb2RlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5uek1vZGUpIHtcbiAgICAgIHRoaXMubnpNb2RlID0gdGhpcy5pc1JhbmdlID8gWydkYXRlJywgJ2RhdGUnXSA6ICdkYXRlJztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlcmVkIHdoZW4gb3ZlcmxheU9wZW4gY2hhbmdlcyAoZGlmZmVyZW50IHdpdGggcmVhbE9wZW5TdGF0ZSlcbiAgICogQHBhcmFtIG9wZW4gVGhlIG92ZXJsYXlPcGVuIGluIHBpY2tlciBjb21wb25lbnRcbiAgICovXG4gIG9uT3BlbkNoYW5nZShvcGVuOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uek9uT3BlbkNoYW5nZS5lbWl0KG9wZW4pO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgQ29udHJvbCB2YWx1ZSBhY2Nlc3NvciBpbXBsZW1lbnRzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIE5PVEU6IG9uQ2hhbmdlRm4vb25Ub3VjaGVkRm4gd2lsbCBub3QgYmUgYXNzaWduZWQgaWYgdXNlciBub3QgdXNlIGFzIG5nTW9kZWxcbiAgb25DaGFuZ2VGbjogT25DaGFuZ2VUeXBlID0gKCkgPT4gdm9pZCAwO1xuICBvblRvdWNoZWRGbjogT25Ub3VjaGVkVHlwZSA9ICgpID0+IHZvaWQgMDtcblxuICB3cml0ZVZhbHVlKHZhbHVlOiBDb21wYXRpYmxlRGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogT25DaGFuZ2VUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZUZuID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogT25Ub3VjaGVkVHlwZSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkRm4gPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBJbnRlcm5hbCBtZXRob2RzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFJlbG9hZCBsb2NhbGUgZnJvbSBpMThuIHdpdGggc2lkZSBlZmZlY3RzXG4gIHByaXZhdGUgc2V0TG9jYWxlKCk6IHZvaWQge1xuICAgIHRoaXMubnpMb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnRGF0ZVBpY2tlcicsIHt9KTtcbiAgICB0aGlzLnNldERlZmF1bHRQbGFjZUhvbGRlcigpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXREZWZhdWx0UGxhY2VIb2xkZXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzQ3VzdG9tUGxhY2VIb2xkZXIgJiYgdGhpcy5uekxvY2FsZSkge1xuICAgICAgdGhpcy5uelBsYWNlSG9sZGVyID0gdGhpcy5pc1JhbmdlID8gKHRoaXMubnpMb2NhbGUubGFuZy5yYW5nZVBsYWNlaG9sZGVyIGFzIFtzdHJpbmcsIHN0cmluZ10pIDogdGhpcy5uekxvY2FsZS5sYW5nLnBsYWNlaG9sZGVyITtcbiAgICB9XG4gIH1cblxuICAvLyBTYWZlIHdheSBvZiBzZXR0aW5nIHZhbHVlIHdpdGggZGVmYXVsdFxuICBwcml2YXRlIHNldFZhbHVlKHZhbHVlOiBDb21wYXRpYmxlRGF0ZSk6IHZvaWQge1xuICAgIGNvbnN0IG5ld1ZhbHVlOiBDb21wYXRpYmxlVmFsdWUgPSB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLm1ha2VWYWx1ZSh2YWx1ZSk7XG4gICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5zZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5pbml0aWFsVmFsdWUgPSBuZXdWYWx1ZTtcbiAgfVxuXG4gIGdldCByZWFsU2hvd1RvZGF5KCk6IGJvb2xlYW4ge1xuICAgIC8vIFJhbmdlIG9ubHkgc3VwcG9ydCBpbiBzaW5nbGUgZGF0ZSBwaWNrZXJcbiAgICByZXR1cm4gdGhpcy5uek1vZGUgPT09ICdkYXRlJyAmJiB0aGlzLm56U2hvd1RvZGF5O1xuICB9XG5cbiAgb25Gb2N1c0NoYW5nZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNlZCA9IHZhbHVlO1xuICAgIC8vIFRPRE86IGF2b2lkIGF1dG9Gb2N1cyBjYXVzZSBjaGFuZ2UgYWZ0ZXIgY2hlY2tlZCBlcnJvclxuICAgIGlmICh0aGlzLmZvY3VzZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtcGlja2VyLWZvY3VzZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1waWNrZXItZm9jdXNlZCcpO1xuICAgIH1cbiAgfVxuXG4gIG9uUGFuZWxNb2RlQ2hhbmdlKHBhbmVsTW9kZTogTnpEYXRlTW9kZSB8IE56RGF0ZU1vZGVbXSk6IHZvaWQge1xuICAgIC8vIHRoaXMubnpNb2RlID0gcGFuZWxNb2RlO1xuICAgIHRoaXMubnpPblBhbmVsQ2hhbmdlLmVtaXQocGFuZWxNb2RlKTtcbiAgfVxuXG4gIC8vIEVtaXQgbnpPbkNhbGVuZGFyQ2hhbmdlIHdoZW4gc2VsZWN0IGRhdGUgYnkgbnotcmFuZ2UtcGlja2VyXG4gIG9uQ2FsZW5kYXJDaGFuZ2UodmFsdWU6IENvbXBhdGlibGVWYWx1ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzUmFuZ2UgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGNvbnN0IHJhbmdlVmFsdWUgPSB2YWx1ZS5maWx0ZXIoeCA9PiB4IGluc3RhbmNlb2YgQ2FuZHlEYXRlKS5tYXAoeCA9PiB4IS5uYXRpdmVEYXRlKTtcbiAgICAgIHRoaXMubnpPbkNhbGVuZGFyQ2hhbmdlLmVtaXQocmFuZ2VWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gRW1pdHRlZCB3aGVuIGRvbmUgd2l0aCBkYXRlIHNlbGVjdGluZ1xuICBvblJlc3VsdE9rKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZSBhcyBDYW5keURhdGVbXTtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5uek9uT2suZW1pdChbdmFsdWVbMF0ubmF0aXZlRGF0ZSwgdmFsdWVbMV0ubmF0aXZlRGF0ZV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5uek9uT2suZW1pdChbXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlKSB7XG4gICAgICAgIHRoaXMubnpPbk9rLmVtaXQoKHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWUgYXMgQ2FuZHlEYXRlKS5uYXRpdmVEYXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubnpPbk9rLmVtaXQobnVsbCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuZW1pdFZhbHVlJC5uZXh0KCk7XG4gIH1cbn1cbiJdfQ==