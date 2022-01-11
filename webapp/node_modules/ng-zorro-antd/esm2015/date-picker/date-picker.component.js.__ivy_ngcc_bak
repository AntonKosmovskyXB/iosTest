/**
 * @fileoverview added by tsickle
 * Generated from: date-picker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
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
const POPUP_STYLE_PATCH = { position: 'relative' };
// Aim to override antd's style to support overlay's position strategy (position:absolute will cause it not working beacuse the overlay can't get the height/width of it's content)
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'datePicker';
/**
 * The base picker for all common APIs
 */
export class NzDatePickerComponent {
    // Use picker's real open state to let re-render the picker's content when shown up
    /**
     * @param {?} nzConfigService
     * @param {?} datePickerService
     * @param {?} i18n
     * @param {?} cdr
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} dateHelper
     * @param {?=} noAnimation
     */
    constructor(nzConfigService, datePickerService, i18n, cdr, renderer, elementRef, dateHelper, noAnimation) {
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
        () => void 0);
        this.onTouchedFn = (/**
         * @return {?}
         */
        () => void 0);
    }
    /**
     * @return {?}
     */
    get nzShowTime() {
        return this.showTime;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowTime(value) {
        this.showTime = typeof value === 'object' ? value : toBoolean(value);
    }
    /**
     * @return {?}
     */
    get realOpenState() {
        return this.picker.animationOpenState;
    } // Use picker's real open state to let re-render the picker's content when shown up
    /**
     * @return {?}
     */
    ngOnInit() {
        // Subscribe the every locale change if the nzLocale is not handled by user
        if (!this.nzLocale) {
            this.i18n.localeChange.pipe(takeUntil(this.destroyed$)).subscribe((/**
             * @return {?}
             */
            () => this.setLocale()));
        }
        // Default value
        this.datePickerService.isRange = this.isRange;
        this.datePickerService.initValue();
        this.datePickerService.emitValue$.pipe(takeUntil(this.destroyed$)).subscribe((/**
         * @param {?} _
         * @return {?}
         */
        _ => {
            /** @type {?} */
            const value = this.datePickerService.value;
            this.datePickerService.initialValue = cloneDate(value);
            if (this.isRange) {
                /** @type {?} */
                const vAsRange = (/** @type {?} */ (value));
                if (vAsRange.length) {
                    this.onChangeFn([vAsRange[0].nativeDate, vAsRange[1].nativeDate]);
                }
                else {
                    this.onChangeFn([]);
                }
            }
            else {
                if (value) {
                    this.onChangeFn(((/** @type {?} */ (value))).nativeDate);
                }
                else {
                    this.onChangeFn(null);
                }
            }
            this.onTouchedFn();
            // When value emitted, overlay will be closed
            this.picker.hideOverlay();
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
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzPopupStyle) {
            // Always assign the popup style patch
            this.nzPopupStyle = this.nzPopupStyle ? Object.assign(Object.assign({}, this.nzPopupStyle), POPUP_STYLE_PATCH) : POPUP_STYLE_PATCH;
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
            warnDeprecation(`'nzStyle' in DatePicker is going to be removed in 10.0.0. Please use CSS style attribute like <nz-date-picker style="..."></nz-date-picker> instead.`);
        }
        if (changes.nzClassName) {
            warnDeprecation(`'nzClassName' in DatePicker is going to be removed in 10.0.0. Please use CSS class attribute like <nz-date-picker class="..."></nz-date-picker> instead.`);
        }
        if (changes.nzMode) {
            this.setPanelMode();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
    /**
     * @return {?}
     */
    setPanelMode() {
        if (!this.nzMode) {
            this.nzMode = this.isRange ? ['date', 'date'] : 'date';
        }
    }
    /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param {?} open The overlayOpen in picker component
     * @return {?}
     */
    onOpenChange(open) {
        this.nzOnOpenChange.emit(open);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.setValue(value);
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedFn = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    }
    // ------------------------------------------------------------------------
    // | Internal methods
    // ------------------------------------------------------------------------
    // Reload locale from i18n with side effects
    /**
     * @private
     * @return {?}
     */
    setLocale() {
        this.nzLocale = this.i18n.getLocaleData('DatePicker', {});
        this.setDefaultPlaceHolder();
        this.cdr.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    setDefaultPlaceHolder() {
        if (!this.isCustomPlaceHolder && this.nzLocale) {
            this.nzPlaceHolder = this.isRange ? ((/** @type {?} */ (this.nzLocale.lang.rangePlaceholder))) : (/** @type {?} */ (this.nzLocale.lang.placeholder));
        }
    }
    // Safe way of setting value with default
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        /** @type {?} */
        const newValue = this.datePickerService.makeValue(value);
        this.datePickerService.setValue(newValue);
        this.datePickerService.initialValue = newValue;
    }
    /**
     * @return {?}
     */
    get realShowToday() {
        // Range only support in single date picker
        return this.nzMode === 'date' && this.nzShowToday;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onFocusChange(value) {
        this.focused = value;
        // TODO: avoid autoFocus cause change after checked error
        if (this.focused) {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-picker-focused');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-picker-focused');
        }
    }
    /**
     * @param {?} panelMode
     * @return {?}
     */
    onPanelModeChange(panelMode) {
        // this.nzMode = panelMode;
        this.nzOnPanelChange.emit(panelMode);
    }
    // Emit nzOnCalendarChange when select date by nz-range-picker
    /**
     * @param {?} value
     * @return {?}
     */
    onCalendarChange(value) {
        if (this.isRange && Array.isArray(value)) {
            /** @type {?} */
            const rangeValue = value.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x instanceof CandyDate)).map((/**
             * @param {?} x
             * @return {?}
             */
            x => (/** @type {?} */ (x)).nativeDate));
            this.nzOnCalendarChange.emit(rangeValue);
        }
    }
    // Emitted when done with date selecting
    /**
     * @return {?}
     */
    onResultOk() {
        if (this.isRange) {
            /** @type {?} */
            const value = (/** @type {?} */ (this.datePickerService.value));
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
    }
}
NzDatePickerComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-date-picker,nz-week-picker,nz-month-picker,nz-year-picker,nz-range-picker',
                exportAs: 'nzDatePicker',
                template: `
    <div
      nz-picker
      [isRange]="isRange"
      [open]="nzOpen"
      [separator]="nzSeparator"
      [disabled]="nzDisabled"
      [inputReadOnly]="nzInputReadOnly"
      [format]="nzFormat"
      [allowClear]="nzAllowClear"
      [autoFocus]="nzAutoFocus"
      [placeholder]="nzPlaceHolder"
      [ngClass]="nzClassName"
      style="display: inherit; align-items: center; width: 100%;"
      [ngStyle]="nzStyle"
      [dropdownClassName]="nzDropdownClassName"
      [popupStyle]="nzPopupStyle"
      [noAnimation]="!!noAnimation?.nzNoAnimation"
      [suffixIcon]="nzSuffixIcon"
      (openChange)="onOpenChange($event)"
      (focusChange)="onFocusChange($event)"
    >
      <date-range-popup
        *ngIf="realOpenState"
        [isRange]="isRange"
        [defaultPickerValue]="nzDefaultPickerValue"
        [showWeek]="showWeek"
        [panelMode]="nzMode"
        (panelModeChange)="onPanelModeChange($event)"
        (calendarChange)="onCalendarChange($event)"
        [locale]="nzLocale?.lang!"
        [showToday]="realShowToday"
        [showTime]="nzShowTime"
        [format]="nzFormat"
        [dateRender]="nzDateRender"
        [disabledDate]="nzDisabledDate"
        [disabledTime]="nzDisabledTime"
        [placeholder]="nzPlaceHolder"
        [extraFooter]="extraFooter"
        [ranges]="nzRanges"
        (resultOk)="onResultOk()"
      ></date-range-popup>
    </div>
  `,
                host: {
                    '[class.ant-picker]': `true`,
                    '[class.ant-picker-range]': `isRange`,
                    '[class.ant-picker-large]': `nzSize === 'large'`,
                    '[class.ant-picker-small]': `nzSize === 'small'`,
                    '[class.ant-picker-disabled]': `nzDisabled`,
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
                        () => NzDatePickerComponent))
                    }
                ]
            }] }
];
/** @nocollapse */
NzDatePickerComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: DatePickerService },
    { type: NzI18nService },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: ElementRef },
    { type: DateHelperService },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBR1QsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFtQixNQUFNLHlCQUF5QixDQUFDO0FBRWhGLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDckYsT0FBTyxFQUFFLGlCQUFpQixFQUE2QixhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztNQUdqRCxpQkFBaUIsR0FBRyxFQUFFLFFBQVEs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Qzs7SUFDdEMsdUNBQTJEOzs7OztJQUkzRCx3Q0FBdUM7O0lBQ3ZDLHlDQUEyQjs7SUFDM0IsNkNBQW1HOztJQUNuRywrQ0FBeUM7O0lBQ3pDLG9EQUErRzs7SUFDL0csNENBQXFEOztJQUNyRCx1Q0FBb0Q7O0lBQ3BELHlDQUFpQzs7SUFDakMscURBQTREOztJQUM1RCw0Q0FBZ0Y7O0lBQ2hGLDZDQUEwRzs7SUFHMUcsZ0RBQXVHOztJQUN2RyxtREFBK0U7O0lBQy9FLHVDQUFzRTs7SUFDdEUsK0NBQWdFOztJQUVoRSx1Q0FBMkU7O0lBK0gzRSwyQ0FBd0M7O0lBQ3hDLDRDQUEwQzs7SUFqSHhDLGdEQUF1Qzs7SUFDdkMsa0RBQTJDOzs7OztJQUMzQyxxQ0FBNkI7Ozs7O0lBQzdCLG9DQUFnQzs7Ozs7SUFDaEMseUNBQTJCOzs7OztJQUMzQiwyQ0FBOEI7Ozs7O0lBQzlCLDJDQUF1Qzs7SUFDdkMsNENBQStEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyB3YXJuRGVwcmVjYXRpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbG9nZ2VyJztcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbm8tYW5pbWF0aW9uJztcbmltcG9ydCB7IENhbmR5RGF0ZSwgY2xvbmVEYXRlLCBDb21wYXRpYmxlVmFsdWUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdGltZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIEZ1bmN0aW9uUHJvcCwgTnpTYWZlQW55LCBPbkNoYW5nZVR5cGUsIE9uVG91Y2hlZFR5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCB0b0Jvb2xlYW4sIHZhbHVlRnVuY3Rpb25Qcm9wIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UsIE56RGF0ZVBpY2tlckkxOG5JbnRlcmZhY2UsIE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlclNlcnZpY2UgfSBmcm9tICcuL2RhdGUtcGlja2VyLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IE56UGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBhdGlibGVEYXRlLCBEaXNhYmxlZFRpbWVGbiwgTnpEYXRlTW9kZSwgUHJlc2V0UmFuZ2VzLCBTdXBwb3J0VGltZU9wdGlvbnMgfSBmcm9tICcuL3N0YW5kYXJkLXR5cGVzJztcblxuY29uc3QgUE9QVVBfU1RZTEVfUEFUQ0ggPSB7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH07IC8vIEFpbSB0byBvdmVycmlkZSBhbnRkJ3Mgc3R5bGUgdG8gc3VwcG9ydCBvdmVybGF5J3MgcG9zaXRpb24gc3RyYXRlZ3kgKHBvc2l0aW9uOmFic29sdXRlIHdpbGwgY2F1c2UgaXQgbm90IHdvcmtpbmcgYmVhY3VzZSB0aGUgb3ZlcmxheSBjYW4ndCBnZXQgdGhlIGhlaWdodC93aWR0aCBvZiBpdCdzIGNvbnRlbnQpXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnZGF0ZVBpY2tlcic7XG5cbi8qKlxuICogVGhlIGJhc2UgcGlja2VyIGZvciBhbGwgY29tbW9uIEFQSXNcbiAqL1xuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzZWxlY3RvcjogJ256LWRhdGUtcGlja2VyLG56LXdlZWstcGlja2VyLG56LW1vbnRoLXBpY2tlcixuei15ZWFyLXBpY2tlcixuei1yYW5nZS1waWNrZXInLFxuICBleHBvcnRBczogJ256RGF0ZVBpY2tlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgbnotcGlja2VyXG4gICAgICBbaXNSYW5nZV09XCJpc1JhbmdlXCJcbiAgICAgIFtvcGVuXT1cIm56T3BlblwiXG4gICAgICBbc2VwYXJhdG9yXT1cIm56U2VwYXJhdG9yXCJcbiAgICAgIFtkaXNhYmxlZF09XCJuekRpc2FibGVkXCJcbiAgICAgIFtpbnB1dFJlYWRPbmx5XT1cIm56SW5wdXRSZWFkT25seVwiXG4gICAgICBbZm9ybWF0XT1cIm56Rm9ybWF0XCJcbiAgICAgIFthbGxvd0NsZWFyXT1cIm56QWxsb3dDbGVhclwiXG4gICAgICBbYXV0b0ZvY3VzXT1cIm56QXV0b0ZvY3VzXCJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJuelBsYWNlSG9sZGVyXCJcbiAgICAgIFtuZ0NsYXNzXT1cIm56Q2xhc3NOYW1lXCJcbiAgICAgIHN0eWxlPVwiZGlzcGxheTogaW5oZXJpdDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgd2lkdGg6IDEwMCU7XCJcbiAgICAgIFtuZ1N0eWxlXT1cIm56U3R5bGVcIlxuICAgICAgW2Ryb3Bkb3duQ2xhc3NOYW1lXT1cIm56RHJvcGRvd25DbGFzc05hbWVcIlxuICAgICAgW3BvcHVwU3R5bGVdPVwibnpQb3B1cFN0eWxlXCJcbiAgICAgIFtub0FuaW1hdGlvbl09XCIhIW5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcbiAgICAgIFtzdWZmaXhJY29uXT1cIm56U3VmZml4SWNvblwiXG4gICAgICAob3BlbkNoYW5nZSk9XCJvbk9wZW5DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAoZm9jdXNDaGFuZ2UpPVwib25Gb2N1c0NoYW5nZSgkZXZlbnQpXCJcbiAgICA+XG4gICAgICA8ZGF0ZS1yYW5nZS1wb3B1cFxuICAgICAgICAqbmdJZj1cInJlYWxPcGVuU3RhdGVcIlxuICAgICAgICBbaXNSYW5nZV09XCJpc1JhbmdlXCJcbiAgICAgICAgW2RlZmF1bHRQaWNrZXJWYWx1ZV09XCJuekRlZmF1bHRQaWNrZXJWYWx1ZVwiXG4gICAgICAgIFtzaG93V2Vla109XCJzaG93V2Vla1wiXG4gICAgICAgIFtwYW5lbE1vZGVdPVwibnpNb2RlXCJcbiAgICAgICAgKHBhbmVsTW9kZUNoYW5nZSk9XCJvblBhbmVsTW9kZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgKGNhbGVuZGFyQ2hhbmdlKT1cIm9uQ2FsZW5kYXJDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFtsb2NhbGVdPVwibnpMb2NhbGU/LmxhbmchXCJcbiAgICAgICAgW3Nob3dUb2RheV09XCJyZWFsU2hvd1RvZGF5XCJcbiAgICAgICAgW3Nob3dUaW1lXT1cIm56U2hvd1RpbWVcIlxuICAgICAgICBbZm9ybWF0XT1cIm56Rm9ybWF0XCJcbiAgICAgICAgW2RhdGVSZW5kZXJdPVwibnpEYXRlUmVuZGVyXCJcbiAgICAgICAgW2Rpc2FibGVkRGF0ZV09XCJuekRpc2FibGVkRGF0ZVwiXG4gICAgICAgIFtkaXNhYmxlZFRpbWVdPVwibnpEaXNhYmxlZFRpbWVcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwibnpQbGFjZUhvbGRlclwiXG4gICAgICAgIFtleHRyYUZvb3Rlcl09XCJleHRyYUZvb3RlclwiXG4gICAgICAgIFtyYW5nZXNdPVwibnpSYW5nZXNcIlxuICAgICAgICAocmVzdWx0T2spPVwib25SZXN1bHRPaygpXCJcbiAgICAgID48L2RhdGUtcmFuZ2UtcG9wdXA+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1waWNrZXJdJzogYHRydWVgLFxuICAgICdbY2xhc3MuYW50LXBpY2tlci1yYW5nZV0nOiBgaXNSYW5nZWAsXG4gICAgJ1tjbGFzcy5hbnQtcGlja2VyLWxhcmdlXSc6IGBuelNpemUgPT09ICdsYXJnZSdgLFxuICAgICdbY2xhc3MuYW50LXBpY2tlci1zbWFsbF0nOiBgbnpTaXplID09PSAnc21hbGwnYCxcbiAgICAnW2NsYXNzLmFudC1waWNrZXItZGlzYWJsZWRdJzogYG56RGlzYWJsZWRgLFxuICAgICcoY2xpY2spJzogJ3BpY2tlci5vbkNsaWNrSW5wdXRCb3goJGV2ZW50KSdcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRGF0ZVBpY2tlclNlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56RGF0ZVBpY2tlckNvbXBvbmVudClcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpEYXRlUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpBbGxvd0NsZWFyOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekF1dG9Gb2N1czogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpEaXNhYmxlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpJbnB1dFJlYWRPbmx5OiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uek9wZW46IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2hvd1RvZGF5OiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uek1vZGU6IE56RGF0ZU1vZGUgfCBOekRhdGVNb2RlW10gfCBzdHJpbmcgfCBzdHJpbmdbXSB8IG51bGwgfCB1bmRlZmluZWQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNob3dUaW1lOiBCb29sZWFuSW5wdXQgfCBTdXBwb3J0VGltZU9wdGlvbnMgfCBudWxsIHwgdW5kZWZpbmVkO1xuXG4gIGlzUmFuZ2U6IGJvb2xlYW4gPSBmYWxzZTsgLy8gSW5kaWNhdGUgd2hldGhlciB0aGUgdmFsdWUgaXMgYSByYW5nZSB2YWx1ZVxuICBzaG93V2VlazogYm9vbGVhbiA9IGZhbHNlOyAvLyBTaG91bGQgc2hvdyBhcyB3ZWVrIHBpY2tlclxuICBmb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG4gIGV4dHJhRm9vdGVyPzogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IHN0cmluZztcblxuICBwcm90ZWN0ZWQgZGVzdHJveWVkJDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByb3RlY3RlZCBpc0N1c3RvbVBsYWNlSG9sZGVyOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgc2hvd1RpbWU6IFN1cHBvcnRUaW1lT3B0aW9ucyB8IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvLyAtLS0gQ29tbW9uIEFQSVxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBbGxvd0NsZWFyOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXV0b0ZvY3VzOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBueklucHV0UmVhZE9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56T3Blbj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCAxMC4wLjAuIFRoaXMgaXMgZGVwcmVjYXRlZCBhbmQgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiAxMC4wLjAuXG4gICAqL1xuICBASW5wdXQoKSBuekNsYXNzTmFtZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIG56RGlzYWJsZWREYXRlPzogKGQ6IERhdGUpID0+IGJvb2xlYW47XG4gIEBJbnB1dCgpIG56TG9jYWxlITogTnpEYXRlUGlja2VySTE4bkludGVyZmFjZTtcbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlcjogc3RyaW5nIHwgW3N0cmluZywgc3RyaW5nXSA9ICcnO1xuICBASW5wdXQoKSBuelBvcHVwU3R5bGU6IG9iamVjdCA9IFBPUFVQX1NUWUxFX1BBVENIO1xuICBASW5wdXQoKSBuekRyb3Bkb3duQ2xhc3NOYW1lPzogc3RyaW5nO1xuICBASW5wdXQoKSBuelNpemU6ICdsYXJnZScgfCAnc21hbGwnIHwgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnO1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgMTAuMC4wLiBUaGlzIGlzIGRlcHJlY2F0ZWQgYW5kIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gMTAuMC4wLlxuICAgKi9cbiAgQElucHV0KCkgbnpTdHlsZTogb2JqZWN0IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56Rm9ybWF0ITogc3RyaW5nO1xuICBASW5wdXQoKSBuekRhdGVSZW5kZXI/OiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgc3RyaW5nIHwgRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nPjtcbiAgQElucHV0KCkgbnpEaXNhYmxlZFRpbWU/OiBEaXNhYmxlZFRpbWVGbjtcbiAgQElucHV0KCkgbnpSZW5kZXJFeHRyYUZvb3Rlcj86IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBzdHJpbmcgfCBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IHN0cmluZz47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dUb2RheTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIG56TW9kZTogTnpEYXRlTW9kZSB8IE56RGF0ZU1vZGVbXSA9ICdkYXRlJztcbiAgQElucHV0KCkgbnpSYW5nZXM/OiBQcmVzZXRSYW5nZXM7XG4gIEBJbnB1dCgpIG56RGVmYXVsdFBpY2tlclZhbHVlOiBDb21wYXRpYmxlRGF0ZSB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIG56U2VwYXJhdG9yPzogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIG56U3VmZml4SWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiA9ICdjYWxlbmRhcic7XG5cbiAgLy8gVE9ETyhAd2VucWk3MykgVGhlIFBhbmVsTW9kZSBuZWVkIG5hbWVkIGZvciBlYWNoIHBpY2tlcnMgYW5kIGV4cG9ydFxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPblBhbmVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekRhdGVNb2RlIHwgTnpEYXRlTW9kZVtdIHwgc3RyaW5nIHwgc3RyaW5nW10+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQ2FsZW5kYXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEFycmF5PERhdGUgfCBudWxsPj4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25PayA9IG5ldyBFdmVudEVtaXR0ZXI8Q29tcGF0aWJsZURhdGUgfCBudWxsPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbk9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQFZpZXdDaGlsZChOelBpY2tlckNvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUgfSkgcGlja2VyITogTnpQaWNrZXJDb21wb25lbnQ7XG5cbiAgQElucHV0KCkgZ2V0IG56U2hvd1RpbWUoKTogU3VwcG9ydFRpbWVPcHRpb25zIHwgYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hvd1RpbWU7XG4gIH1cblxuICBzZXQgbnpTaG93VGltZSh2YWx1ZTogU3VwcG9ydFRpbWVPcHRpb25zIHwgYm9vbGVhbikge1xuICAgIHRoaXMuc2hvd1RpbWUgPSB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdmFsdWUgOiB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IHJlYWxPcGVuU3RhdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGlja2VyLmFuaW1hdGlvbk9wZW5TdGF0ZTtcbiAgfSAvLyBVc2UgcGlja2VyJ3MgcmVhbCBvcGVuIHN0YXRlIHRvIGxldCByZS1yZW5kZXIgdGhlIHBpY2tlcidzIGNvbnRlbnQgd2hlbiBzaG93biB1cFxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBwdWJsaWMgZGF0ZVBpY2tlclNlcnZpY2U6IERhdGVQaWNrZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBpMThuOiBOekkxOG5TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlLFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gU3Vic2NyaWJlIHRoZSBldmVyeSBsb2NhbGUgY2hhbmdlIGlmIHRoZSBuekxvY2FsZSBpcyBub3QgaGFuZGxlZCBieSB1c2VyXG4gICAgaWYgKCF0aGlzLm56TG9jYWxlKSB7XG4gICAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNldExvY2FsZSgpKTtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHZhbHVlXG4gICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5pc1JhbmdlID0gdGhpcy5pc1JhbmdlO1xuICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuaW5pdFZhbHVlKCk7XG4gICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5lbWl0VmFsdWUkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCkpLnN1YnNjcmliZShfID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZTtcbiAgICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuaW5pdGlhbFZhbHVlID0gY2xvbmVEYXRlKHZhbHVlKTtcbiAgICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgICAgY29uc3QgdkFzUmFuZ2UgPSB2YWx1ZSBhcyBDYW5keURhdGVbXTtcbiAgICAgICAgaWYgKHZBc1JhbmdlLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMub25DaGFuZ2VGbihbdkFzUmFuZ2VbMF0ubmF0aXZlRGF0ZSwgdkFzUmFuZ2VbMV0ubmF0aXZlRGF0ZV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub25DaGFuZ2VGbihbXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgIHRoaXMub25DaGFuZ2VGbigodmFsdWUgYXMgQ2FuZHlEYXRlKS5uYXRpdmVEYXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlRm4obnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMub25Ub3VjaGVkRm4oKTtcbiAgICAgIC8vIFdoZW4gdmFsdWUgZW1pdHRlZCwgb3ZlcmxheSB3aWxsIGJlIGNsb3NlZFxuICAgICAgdGhpcy5waWNrZXIuaGlkZU92ZXJsYXkoKTtcbiAgICB9KTtcblxuICAgIC8vIERlZmF1bHQgZm9ybWF0IHdoZW4gaXQncyBlbXB0eVxuICAgIGlmICghdGhpcy5uekZvcm1hdCkge1xuICAgICAgaWYgKHRoaXMuc2hvd1dlZWspIHtcbiAgICAgICAgdGhpcy5uekZvcm1hdCA9ICd5eXl5LXd3JzsgLy8gRm9ybWF0IGZvciB3ZWVrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm56Rm9ybWF0ID0gdGhpcy5uelNob3dUaW1lID8gJ3l5eXktTU0tZGQgSEg6bW06c3MnIDogJ3l5eXktTU0tZGQnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uelBvcHVwU3R5bGUpIHtcbiAgICAgIC8vIEFsd2F5cyBhc3NpZ24gdGhlIHBvcHVwIHN0eWxlIHBhdGNoXG4gICAgICB0aGlzLm56UG9wdXBTdHlsZSA9IHRoaXMubnpQb3B1cFN0eWxlID8geyAuLi50aGlzLm56UG9wdXBTdHlsZSwgLi4uUE9QVVBfU1RZTEVfUEFUQ0ggfSA6IFBPUFVQX1NUWUxFX1BBVENIO1xuICAgIH1cblxuICAgIC8vIE1hcmsgYXMgY3VzdG9taXplZCBwbGFjZWhvbGRlciBieSB1c2VyIG9uY2UgbnpQbGFjZUhvbGRlciBhc3NpZ25lZCBhdCB0aGUgZmlyc3QgdGltZVxuICAgIGlmIChjaGFuZ2VzLm56UGxhY2VIb2xkZXIgJiYgY2hhbmdlcy5uelBsYWNlSG9sZGVyLmZpcnN0Q2hhbmdlICYmIHR5cGVvZiB0aGlzLm56UGxhY2VIb2xkZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmlzQ3VzdG9tUGxhY2VIb2xkZXIgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLm56TG9jYWxlKSB7XG4gICAgICAvLyBUaGUgbnpMb2NhbGUgaXMgY3VycmVudGx5IGhhbmRsZWQgYnkgdXNlclxuICAgICAgdGhpcy5zZXREZWZhdWx0UGxhY2VIb2xkZXIoKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5uelJlbmRlckV4dHJhRm9vdGVyKSB7XG4gICAgICB0aGlzLmV4dHJhRm9vdGVyID0gdmFsdWVGdW5jdGlvblByb3AodGhpcy5uelJlbmRlckV4dHJhRm9vdGVyISk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMubnpTdHlsZSkge1xuICAgICAgd2FybkRlcHJlY2F0aW9uKFxuICAgICAgICBgJ256U3R5bGUnIGluIERhdGVQaWNrZXIgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiAxMC4wLjAuIFBsZWFzZSB1c2UgQ1NTIHN0eWxlIGF0dHJpYnV0ZSBsaWtlIDxuei1kYXRlLXBpY2tlciBzdHlsZT1cIi4uLlwiPjwvbnotZGF0ZS1waWNrZXI+IGluc3RlYWQuYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5uekNsYXNzTmFtZSkge1xuICAgICAgd2FybkRlcHJlY2F0aW9uKFxuICAgICAgICBgJ256Q2xhc3NOYW1lJyBpbiBEYXRlUGlja2VyIGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gMTAuMC4wLiBQbGVhc2UgdXNlIENTUyBjbGFzcyBhdHRyaWJ1dGUgbGlrZSA8bnotZGF0ZS1waWNrZXIgY2xhc3M9XCIuLi5cIj48L256LWRhdGUtcGlja2VyPiBpbnN0ZWFkLmBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMubnpNb2RlKSB7XG4gICAgICB0aGlzLnNldFBhbmVsTW9kZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95ZWQkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBzZXRQYW5lbE1vZGUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm56TW9kZSkge1xuICAgICAgdGhpcy5uek1vZGUgPSB0aGlzLmlzUmFuZ2UgPyBbJ2RhdGUnLCAnZGF0ZSddIDogJ2RhdGUnO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyZWQgd2hlbiBvdmVybGF5T3BlbiBjaGFuZ2VzIChkaWZmZXJlbnQgd2l0aCByZWFsT3BlblN0YXRlKVxuICAgKiBAcGFyYW0gb3BlbiBUaGUgb3ZlcmxheU9wZW4gaW4gcGlja2VyIGNvbXBvbmVudFxuICAgKi9cbiAgb25PcGVuQ2hhbmdlKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm56T25PcGVuQ2hhbmdlLmVtaXQob3Blbik7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBDb250cm9sIHZhbHVlIGFjY2Vzc29yIGltcGxlbWVudHNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gTk9URTogb25DaGFuZ2VGbi9vblRvdWNoZWRGbiB3aWxsIG5vdCBiZSBhc3NpZ25lZCBpZiB1c2VyIG5vdCB1c2UgYXMgbmdNb2RlbFxuICBvbkNoYW5nZUZuOiBPbkNoYW5nZVR5cGUgPSAoKSA9PiB2b2lkIDA7XG4gIG9uVG91Y2hlZEZuOiBPblRvdWNoZWRUeXBlID0gKCkgPT4gdm9pZCAwO1xuXG4gIHdyaXRlVmFsdWUodmFsdWU6IENvbXBhdGlibGVEYXRlKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBPbkNoYW5nZVR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlRm4gPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBPblRvdWNoZWRUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWRGbiA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IEludGVybmFsIG1ldGhvZHNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gUmVsb2FkIGxvY2FsZSBmcm9tIGkxOG4gd2l0aCBzaWRlIGVmZmVjdHNcbiAgcHJpdmF0ZSBzZXRMb2NhbGUoKTogdm9pZCB7XG4gICAgdGhpcy5uekxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdEYXRlUGlja2VyJywge30pO1xuICAgIHRoaXMuc2V0RGVmYXVsdFBsYWNlSG9sZGVyKCk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIHNldERlZmF1bHRQbGFjZUhvbGRlcigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNDdXN0b21QbGFjZUhvbGRlciAmJiB0aGlzLm56TG9jYWxlKSB7XG4gICAgICB0aGlzLm56UGxhY2VIb2xkZXIgPSB0aGlzLmlzUmFuZ2UgPyAodGhpcy5uekxvY2FsZS5sYW5nLnJhbmdlUGxhY2Vob2xkZXIgYXMgW3N0cmluZywgc3RyaW5nXSkgOiB0aGlzLm56TG9jYWxlLmxhbmcucGxhY2Vob2xkZXIhO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNhZmUgd2F5IG9mIHNldHRpbmcgdmFsdWUgd2l0aCBkZWZhdWx0XG4gIHByaXZhdGUgc2V0VmFsdWUodmFsdWU6IENvbXBhdGlibGVEYXRlKTogdm9pZCB7XG4gICAgY29uc3QgbmV3VmFsdWU6IENvbXBhdGlibGVWYWx1ZSA9IHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UubWFrZVZhbHVlKHZhbHVlKTtcbiAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmluaXRpYWxWYWx1ZSA9IG5ld1ZhbHVlO1xuICB9XG5cbiAgZ2V0IHJlYWxTaG93VG9kYXkoKTogYm9vbGVhbiB7XG4gICAgLy8gUmFuZ2Ugb25seSBzdXBwb3J0IGluIHNpbmdsZSBkYXRlIHBpY2tlclxuICAgIHJldHVybiB0aGlzLm56TW9kZSA9PT0gJ2RhdGUnICYmIHRoaXMubnpTaG93VG9kYXk7XG4gIH1cblxuICBvbkZvY3VzQ2hhbmdlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c2VkID0gdmFsdWU7XG4gICAgLy8gVE9ETzogYXZvaWQgYXV0b0ZvY3VzIGNhdXNlIGNoYW5nZSBhZnRlciBjaGVja2VkIGVycm9yXG4gICAgaWYgKHRoaXMuZm9jdXNlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1waWNrZXItZm9jdXNlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXBpY2tlci1mb2N1c2VkJyk7XG4gICAgfVxuICB9XG5cbiAgb25QYW5lbE1vZGVDaGFuZ2UocGFuZWxNb2RlOiBOekRhdGVNb2RlIHwgTnpEYXRlTW9kZVtdKTogdm9pZCB7XG4gICAgLy8gdGhpcy5uek1vZGUgPSBwYW5lbE1vZGU7XG4gICAgdGhpcy5uek9uUGFuZWxDaGFuZ2UuZW1pdChwYW5lbE1vZGUpO1xuICB9XG5cbiAgLy8gRW1pdCBuek9uQ2FsZW5kYXJDaGFuZ2Ugd2hlbiBzZWxlY3QgZGF0ZSBieSBuei1yYW5nZS1waWNrZXJcbiAgb25DYWxlbmRhckNoYW5nZSh2YWx1ZTogQ29tcGF0aWJsZVZhbHVlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNSYW5nZSAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgY29uc3QgcmFuZ2VWYWx1ZSA9IHZhbHVlLmZpbHRlcih4ID0+IHggaW5zdGFuY2VvZiBDYW5keURhdGUpLm1hcCh4ID0+IHghLm5hdGl2ZURhdGUpO1xuICAgICAgdGhpcy5uek9uQ2FsZW5kYXJDaGFuZ2UuZW1pdChyYW5nZVZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvLyBFbWl0dGVkIHdoZW4gZG9uZSB3aXRoIGRhdGUgc2VsZWN0aW5nXG4gIG9uUmVzdWx0T2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlIGFzIENhbmR5RGF0ZVtdO1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCkge1xuICAgICAgICB0aGlzLm56T25Pay5lbWl0KFt2YWx1ZVswXS5uYXRpdmVEYXRlLCB2YWx1ZVsxXS5uYXRpdmVEYXRlXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm56T25Pay5lbWl0KFtdKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWUpIHtcbiAgICAgICAgdGhpcy5uek9uT2suZW1pdCgodGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZSBhcyBDYW5keURhdGUpLm5hdGl2ZURhdGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5uek9uT2suZW1pdChudWxsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5lbWl0VmFsdWUkLm5leHQoKTtcbiAgfVxufVxuIl19