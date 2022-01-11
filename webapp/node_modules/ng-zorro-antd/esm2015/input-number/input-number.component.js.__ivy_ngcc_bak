/**
 * @fileoverview added by tsickle
 * Generated from: input-number.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { DOWN_ARROW, ENTER, UP_ARROW } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean, isNotNil } from 'ng-zorro-antd/core/util';
export class NzInputNumberComponent {
    /**
     * @param {?} elementRef
     * @param {?} cdr
     * @param {?} focusMonitor
     */
    constructor(elementRef, cdr, focusMonitor) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.isFocused = false;
        this.disabledUp = false;
        this.disabledDown = false;
        this.onChange = (/**
         * @return {?}
         */
        () => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
        this.nzBlur = new EventEmitter();
        this.nzFocus = new EventEmitter();
        this.nzSize = 'default';
        this.nzMin = -Infinity;
        this.nzMax = Infinity;
        this.nzParser = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => value
            .trim()
            .replace(/。/g, '.')
            .replace(/[^\w\.-]+/g, ''));
        this.nzPrecisionMode = 'toFixed';
        this.nzPlaceHolder = '';
        this.nzStep = 1;
        this.nzInputMode = 'decimal';
        this.nzId = null;
        this.nzDisabled = false;
        this.nzAutoFocus = false;
        this.nzFormatter = (/**
         * @param {?} value
         * @return {?}
         */
        value => value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onModelChange(value) {
        this.parsedValue = this.nzParser(value);
        this.inputElement.nativeElement.value = `${this.parsedValue}`;
        /** @type {?} */
        const validValue = this.getCurrentValidValue(this.parsedValue);
        this.setValue(validValue);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getCurrentValidValue(value) {
        /** @type {?} */
        let val = value;
        if (val === '') {
            val = '';
        }
        else if (!this.isNotCompleteNumber(val)) {
            val = `${this.getValidValue(val)}`;
        }
        else {
            val = (/** @type {?} */ (this.value));
        }
        return this.toNumber(val);
    }
    // '1.' '1x' 'xx' '' => are not complete numbers
    /**
     * @param {?} num
     * @return {?}
     */
    isNotCompleteNumber(num) {
        return isNaN((/** @type {?} */ (num))) || num === '' || num === null || !!(num && num.toString().indexOf('.') === num.toString().length - 1);
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    getValidValue(value) {
        /** @type {?} */
        let val = parseFloat((/** @type {?} */ (value)));
        // https://github.com/ant-design/ant-design/issues/7358
        if (isNaN(val)) {
            return value;
        }
        if (val < this.nzMin) {
            val = this.nzMin;
        }
        if (val > this.nzMax) {
            val = this.nzMax;
        }
        return val;
    }
    /**
     * @param {?} num
     * @return {?}
     */
    toNumber(num) {
        if (this.isNotCompleteNumber(num)) {
            return (/** @type {?} */ (num));
        }
        /** @type {?} */
        const numStr = String(num);
        if (numStr.indexOf('.') >= 0 && isNotNil(this.nzPrecision)) {
            if (typeof this.nzPrecisionMode === 'function') {
                return this.nzPrecisionMode(num, this.nzPrecision);
            }
            else if (this.nzPrecisionMode === 'cut') {
                /** @type {?} */
                const numSplit = numStr.split('.');
                numSplit[1] = numSplit[1].slice(0, this.nzPrecision);
                return Number(numSplit.join('.'));
            }
            return Number(Number(num).toFixed(this.nzPrecision));
        }
        return Number(num);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    getRatio(e) {
        /** @type {?} */
        let ratio = 1;
        if (e.metaKey || e.ctrlKey) {
            ratio = 0.1;
        }
        else if (e.shiftKey) {
            ratio = 10;
        }
        return ratio;
    }
    /**
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    down(e, ratio) {
        if (!this.isFocused) {
            this.focus();
        }
        this.step('down', e, ratio);
    }
    /**
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    up(e, ratio) {
        if (!this.isFocused) {
            this.focus();
        }
        this.step('up', e, ratio);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getPrecision(value) {
        /** @type {?} */
        const valueString = value.toString();
        if (valueString.indexOf('e-') >= 0) {
            return parseInt(valueString.slice(valueString.indexOf('e-') + 2), 10);
        }
        /** @type {?} */
        let precision = 0;
        if (valueString.indexOf('.') >= 0) {
            precision = valueString.length - valueString.indexOf('.') - 1;
        }
        return precision;
    }
    // step={1.0} value={1.51}
    // press +
    // then value should be 2.51, rather than 2.5
    // if this.props.precision is undefined
    // https://github.com/react-component/input-number/issues/39
    /**
     * @param {?} currentValue
     * @param {?} ratio
     * @return {?}
     */
    getMaxPrecision(currentValue, ratio) {
        if (isNotNil(this.nzPrecision)) {
            return this.nzPrecision;
        }
        /** @type {?} */
        const ratioPrecision = this.getPrecision(ratio);
        /** @type {?} */
        const stepPrecision = this.getPrecision(this.nzStep);
        /** @type {?} */
        const currentValuePrecision = this.getPrecision((/** @type {?} */ (currentValue)));
        if (!currentValue) {
            return ratioPrecision + stepPrecision;
        }
        return Math.max(currentValuePrecision, ratioPrecision + stepPrecision);
    }
    /**
     * @param {?} currentValue
     * @param {?} ratio
     * @return {?}
     */
    getPrecisionFactor(currentValue, ratio) {
        /** @type {?} */
        const precision = this.getMaxPrecision(currentValue, ratio);
        return Math.pow(10, precision);
    }
    /**
     * @param {?} val
     * @param {?} rat
     * @return {?}
     */
    upStep(val, rat) {
        /** @type {?} */
        const precisionFactor = this.getPrecisionFactor(val, rat);
        /** @type {?} */
        const precision = Math.abs(this.getMaxPrecision(val, rat));
        /** @type {?} */
        let result;
        if (typeof val === 'number') {
            result = ((precisionFactor * val + precisionFactor * this.nzStep * rat) / precisionFactor).toFixed(precision);
        }
        else {
            result = this.nzMin === -Infinity ? this.nzStep : this.nzMin;
        }
        return this.toNumber(result);
    }
    /**
     * @param {?} val
     * @param {?} rat
     * @return {?}
     */
    downStep(val, rat) {
        /** @type {?} */
        const precisionFactor = this.getPrecisionFactor(val, rat);
        /** @type {?} */
        const precision = Math.abs(this.getMaxPrecision(val, rat));
        /** @type {?} */
        let result;
        if (typeof val === 'number') {
            result = ((precisionFactor * val - precisionFactor * this.nzStep * rat) / precisionFactor).toFixed(precision);
        }
        else {
            result = this.nzMin === -Infinity ? -this.nzStep : this.nzMin;
        }
        return this.toNumber(result);
    }
    /**
     * @template T
     * @param {?} type
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    step(type, e, ratio = 1) {
        this.stop();
        e.preventDefault();
        if (this.nzDisabled) {
            return;
        }
        /** @type {?} */
        const value = this.getCurrentValidValue((/** @type {?} */ (this.parsedValue))) || 0;
        /** @type {?} */
        let val = 0;
        if (type === 'up') {
            val = this.upStep(value, ratio);
        }
        else if (type === 'down') {
            val = this.downStep(value, ratio);
        }
        /** @type {?} */
        const outOfRange = val > this.nzMax || val < this.nzMin;
        if (val > this.nzMax) {
            val = this.nzMax;
        }
        else if (val < this.nzMin) {
            val = this.nzMin;
        }
        this.setValue(val);
        this.updateDisplayValue(val);
        this.isFocused = true;
        if (outOfRange) {
            return;
        }
        this.autoStepTimer = setTimeout((/**
         * @return {?}
         */
        () => {
            ((/** @type {?} */ (this[type])))(e, ratio);
        }), 300);
    }
    /**
     * @return {?}
     */
    stop() {
        if (this.autoStepTimer) {
            clearTimeout(this.autoStepTimer);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        if (`${this.value}` !== `${value}`) {
            this.onChange(value);
        }
        this.value = value;
        this.parsedValue = value;
        this.disabledUp = this.disabledDown = false;
        if (value || value === 0) {
            /** @type {?} */
            const val = Number(value);
            if (val >= this.nzMax) {
                this.disabledUp = true;
            }
            if (val <= this.nzMin) {
                this.disabledDown = true;
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateDisplayValue(value) {
        /** @type {?} */
        const displayValue = isNotNil(this.nzFormatter(value)) ? this.nzFormatter(value) : '';
        this.displayValue = displayValue;
        this.inputElement.nativeElement.value = `${displayValue}`;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        if (e.keyCode === UP_ARROW) {
            /** @type {?} */
            const ratio = this.getRatio(e);
            this.up(e, ratio);
            this.stop();
        }
        else if (e.keyCode === DOWN_ARROW) {
            /** @type {?} */
            const ratio = this.getRatio(e);
            this.down(e, ratio);
            this.stop();
        }
        else if (e.keyCode === ENTER) {
            this.updateDisplayValue((/** @type {?} */ (this.value)));
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        this.setValue(value);
        this.updateDisplayValue(value);
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
        this.onTouched = fn;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
        this.nzDisabled = disabled;
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    focus() {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    }
    /**
     * @return {?}
     */
    blur() {
        this.inputElement.nativeElement.blur();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.focusMonitor.monitor(this.elementRef, true).subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        focusOrigin => {
            if (!focusOrigin) {
                this.isFocused = false;
                this.updateDisplayValue((/** @type {?} */ (this.value)));
                this.nzBlur.emit();
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => this.onTouched()));
            }
            else {
                this.isFocused = true;
                this.nzFocus.emit();
            }
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzFormatter && !changes.nzFormatter.isFirstChange()) {
            /** @type {?} */
            const validValue = this.getCurrentValidValue((/** @type {?} */ (this.parsedValue)));
            this.setValue(validValue);
            this.updateDisplayValue(validValue);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.nzAutoFocus) {
            this.focus();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
    }
}
NzInputNumberComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-input-number',
                exportAs: 'nzInputNumber',
                template: `
    <div class="ant-input-number-handler-wrap">
      <span
        unselectable="unselectable"
        class="ant-input-number-handler ant-input-number-handler-up"
        (mousedown)="up($event)"
        (mouseup)="stop()"
        (mouseleave)="stop()"
        [class.ant-input-number-handler-up-disabled]="disabledUp"
      >
        <i nz-icon nzType="up" class="ant-input-number-handler-up-inner"></i>
      </span>
      <span
        unselectable="unselectable"
        class="ant-input-number-handler ant-input-number-handler-down"
        (mousedown)="down($event)"
        (mouseup)="stop()"
        (mouseleave)="stop()"
        [class.ant-input-number-handler-down-disabled]="disabledDown"
      >
        <i nz-icon nzType="down" class="ant-input-number-handler-down-inner"></i>
      </span>
    </div>
    <div class="ant-input-number-input-wrap">
      <input
        #inputElement
        autocomplete="off"
        class="ant-input-number-input"
        [attr.id]="nzId"
        [attr.autofocus]="nzAutoFocus ? 'autofocus' : null"
        [disabled]="nzDisabled"
        [attr.min]="nzMin"
        [attr.max]="nzMax"
        [placeholder]="nzPlaceHolder"
        [attr.step]="nzStep"
        [attr.inputmode]="nzInputMode"
        (keydown)="onKeyDown($event)"
        (keyup)="stop()"
        [ngModel]="displayValue"
        (ngModelChange)="onModelChange($event)"
      />
    </div>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => NzInputNumberComponent)),
                        multi: true
                    }
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.ant-input-number]': 'true',
                    '[class.ant-input-number-focused]': 'isFocused',
                    '[class.ant-input-number-lg]': `nzSize === 'large'`,
                    '[class.ant-input-number-sm]': `nzSize === 'small'`,
                    '[class.ant-input-number-disabled]': 'nzDisabled'
                }
            }] }
];
/** @nocollapse */
NzInputNumberComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: FocusMonitor }
];
NzInputNumberComponent.propDecorators = {
    nzBlur: [{ type: Output }],
    nzFocus: [{ type: Output }],
    inputElement: [{ type: ViewChild, args: ['inputElement', { static: true },] }],
    nzSize: [{ type: Input }],
    nzMin: [{ type: Input }],
    nzMax: [{ type: Input }],
    nzParser: [{ type: Input }],
    nzPrecision: [{ type: Input }],
    nzPrecisionMode: [{ type: Input }],
    nzPlaceHolder: [{ type: Input }],
    nzStep: [{ type: Input }],
    nzInputMode: [{ type: Input }],
    nzId: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzAutoFocus: [{ type: Input }],
    nzFormatter: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzInputNumberComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzInputNumberComponent.prototype, "nzAutoFocus", void 0);
if (false) {
    /** @type {?} */
    NzInputNumberComponent.ngAcceptInputType_nzDisabled;
    /** @type {?} */
    NzInputNumberComponent.ngAcceptInputType_nzAutoFocus;
    /**
     * @type {?}
     * @private
     */
    NzInputNumberComponent.prototype.autoStepTimer;
    /**
     * @type {?}
     * @private
     */
    NzInputNumberComponent.prototype.parsedValue;
    /**
     * @type {?}
     * @private
     */
    NzInputNumberComponent.prototype.value;
    /** @type {?} */
    NzInputNumberComponent.prototype.displayValue;
    /** @type {?} */
    NzInputNumberComponent.prototype.isFocused;
    /** @type {?} */
    NzInputNumberComponent.prototype.disabledUp;
    /** @type {?} */
    NzInputNumberComponent.prototype.disabledDown;
    /** @type {?} */
    NzInputNumberComponent.prototype.onChange;
    /** @type {?} */
    NzInputNumberComponent.prototype.onTouched;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzBlur;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzFocus;
    /** @type {?} */
    NzInputNumberComponent.prototype.inputElement;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzSize;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzMin;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzMax;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzParser;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzPrecision;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzPrecisionMode;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzStep;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzInputMode;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzId;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzDisabled;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzAutoFocus;
    /** @type {?} */
    NzInputNumberComponent.prototype.nzFormatter;
    /**
     * @type {?}
     * @private
     */
    NzInputNumberComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzInputNumberComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzInputNumberComponent.prototype.focusMonitor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvaW5wdXQtbnVtYmVyLyIsInNvdXJjZXMiOlsiaW5wdXQtbnVtYmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BFLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBSUwsTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFpRWpFLE1BQU0sT0FBTyxzQkFBc0I7Ozs7OztJQW9SakMsWUFBb0IsVUFBc0IsRUFBVSxHQUFzQixFQUFVLFlBQTBCO1FBQTFGLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBNVE5RyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsYUFBUTs7O1FBQWlCLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFBQztRQUNsQyxjQUFTOzs7UUFBa0IsR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUFDO1FBQ2pCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXZDLFdBQU0sR0FBa0IsU0FBUyxDQUFDO1FBQ2xDLFVBQUssR0FBVyxDQUFDLFFBQVEsQ0FBQztRQUMxQixVQUFLLEdBQVcsUUFBUSxDQUFDO1FBQ3pCLGFBQVE7Ozs7UUFBRyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQ3BDLEtBQUs7YUFDRixJQUFJLEVBQUU7YUFDTixPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQzthQUNsQixPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxFQUFDO1FBRXRCLG9CQUFlLEdBQWlGLFNBQVMsQ0FBQztRQUMxRyxrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsZ0JBQVcsR0FBVyxTQUFTLENBQUM7UUFDaEMsU0FBSSxHQUFrQixJQUFJLENBQUM7UUFDWCxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLGdCQUFXOzs7O1FBQXVDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFDO0lBb1B1QyxDQUFDOzs7OztJQWxQbEgsYUFBYSxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7Y0FDeEQsVUFBVSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzlELElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxvQkFBb0IsQ0FBQyxLQUFzQjs7WUFDckMsR0FBRyxHQUFHLEtBQUs7UUFDZixJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFDZCxHQUFHLEdBQUcsRUFBRSxDQUFDO1NBQ1Y7YUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3pDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztTQUNwQzthQUFNO1lBQ0wsR0FBRyxHQUFHLG1CQUFBLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQztTQUNuQjtRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7Ozs7SUFHRCxtQkFBbUIsQ0FBQyxHQUFvQjtRQUN0QyxPQUFPLEtBQUssQ0FBQyxtQkFBQSxHQUFHLEVBQVUsQ0FBQyxJQUFJLEdBQUcsS0FBSyxFQUFFLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3BJLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLEtBQXVCOztZQUMvQixHQUFHLEdBQUcsVUFBVSxDQUFDLG1CQUFBLEtBQUssRUFBVSxDQUFDO1FBQ3JDLHVEQUF1RDtRQUN2RCxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNkLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3BCLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNwQixHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNsQjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsR0FBb0I7UUFDM0IsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDakMsT0FBTyxtQkFBQSxHQUFHLEVBQVUsQ0FBQztTQUN0Qjs7Y0FDSyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUMxQixJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDMUQsSUFBSSxPQUFPLElBQUksQ0FBQyxlQUFlLEtBQUssVUFBVSxFQUFFO2dCQUM5QyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNwRDtpQkFBTSxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssS0FBSyxFQUFFOztzQkFDbkMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO2dCQUNsQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNyRCxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDbkM7WUFDRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1NBQ3REO1FBQ0QsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsQ0FBZ0I7O1lBQ25CLEtBQUssR0FBRyxDQUFDO1FBQ2IsSUFBSSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDMUIsS0FBSyxHQUFHLEdBQUcsQ0FBQztTQUNiO2FBQU0sSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQ3JCLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDWjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7O0lBRUQsSUFBSSxDQUFDLENBQTZCLEVBQUUsS0FBYztRQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFRCxFQUFFLENBQUMsQ0FBNkIsRUFBRSxLQUFjO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLEtBQWE7O2NBQ2xCLFdBQVcsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFO1FBQ3BDLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbEMsT0FBTyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZFOztZQUNHLFNBQVMsR0FBRyxDQUFDO1FBQ2pCLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDakMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDL0Q7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7Ozs7Ozs7OztJQU9ELGVBQWUsQ0FBQyxZQUE2QixFQUFFLEtBQWE7UUFDMUQsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQzlCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUN6Qjs7Y0FDSyxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7O2NBQ3pDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7O2NBQzlDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQUEsWUFBWSxFQUFVLENBQUM7UUFDdkUsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNqQixPQUFPLGNBQWMsR0FBRyxhQUFhLENBQUM7U0FDdkM7UUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsY0FBYyxHQUFHLGFBQWEsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Ozs7OztJQUVELGtCQUFrQixDQUFDLFlBQTZCLEVBQUUsS0FBYTs7Y0FDdkQsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQztRQUMzRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxHQUFvQixFQUFFLEdBQVc7O2NBQ2hDLGVBQWUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQzs7Y0FDbkQsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7O1lBQ3RELE1BQU07UUFDVixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUMzQixNQUFNLEdBQUcsQ0FBQyxDQUFDLGVBQWUsR0FBRyxHQUFHLEdBQUcsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQy9HO2FBQU07WUFDTCxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUM5RDtRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFFRCxRQUFRLENBQUMsR0FBb0IsRUFBRSxHQUFXOztjQUNsQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7O2NBQ25ELFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDOztZQUN0RCxNQUFNO1FBQ1YsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDM0IsTUFBTSxHQUFHLENBQUMsQ0FBQyxlQUFlLEdBQUcsR0FBRyxHQUFHLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMvRzthQUFNO1lBQ0wsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUMvRDtRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7Ozs7OztJQUVELElBQUksQ0FBeUMsSUFBTyxFQUFFLENBQTZCLEVBQUUsUUFBZ0IsQ0FBQztRQUNwRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLE9BQU87U0FDUjs7Y0FDSyxLQUFLLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG1CQUFBLElBQUksQ0FBQyxXQUFXLEVBQUMsQ0FBQyxJQUFJLENBQUM7O1lBQzNELEdBQUcsR0FBRyxDQUFDO1FBQ1gsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ2pCLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNqQzthQUFNLElBQUksSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUMxQixHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDbkM7O2NBQ0ssVUFBVSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSztRQUN2RCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3BCLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ2xCO2FBQU0sSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUMzQixHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNsQjtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksVUFBVSxFQUFFO1lBQ2QsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDbkMsQ0FBQyxtQkFBQSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQTBELENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbkYsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQzs7OztJQUVELElBQUk7UUFDRixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzVDLElBQUksS0FBSyxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7O2tCQUNsQixHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUN6QixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzthQUN4QjtZQUNELElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2FBQzFCO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLEtBQWE7O2NBQ3hCLFlBQVksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3JGLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxHQUFHLFlBQVksRUFBRSxDQUFDO0lBQzVELENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLENBQWdCO1FBQ3hCLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUU7O2tCQUNwQixLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7YUFBTSxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssVUFBVSxFQUFFOztrQkFDN0IsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO2FBQU0sSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLEtBQUssRUFBRTtZQUM5QixJQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQUEsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFnQjtRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEVBQWlCO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsUUFBaUI7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7OztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QyxDQUFDOzs7O0lBSUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixJQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQUEsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ25CLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJOzs7Z0JBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFDLENBQUM7YUFDaEQ7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDckI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLEVBQUU7O2tCQUN6RCxVQUFVLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG1CQUFBLElBQUksQ0FBQyxXQUFXLEVBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7O1lBblhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwQ1Q7Z0JBQ0QsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMsc0JBQXNCLEVBQUM7d0JBQ3JELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsSUFBSSxFQUFFO29CQUNKLDBCQUEwQixFQUFFLE1BQU07b0JBQ2xDLGtDQUFrQyxFQUFFLFdBQVc7b0JBQy9DLDZCQUE2QixFQUFFLG9CQUFvQjtvQkFDbkQsNkJBQTZCLEVBQUUsb0JBQW9CO29CQUNuRCxtQ0FBbUMsRUFBRSxZQUFZO2lCQUNsRDthQUNGOzs7O1lBL0VDLFVBQVU7WUFGVixpQkFBaUI7WUFMVixZQUFZOzs7cUJBb0dsQixNQUFNO3NCQUNOLE1BQU07MkJBQ04sU0FBUyxTQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7cUJBQzFDLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBS0wsS0FBSzs4QkFDTCxLQUFLOzRCQUNMLEtBQUs7cUJBQ0wsS0FBSzswQkFDTCxLQUFLO21CQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7O0FBRm1CO0lBQWYsWUFBWSxFQUFFOzswREFBb0I7QUFDbkI7SUFBZixZQUFZLEVBQUU7OzJEQUFxQjs7O0lBOUI3QyxvREFBa0Q7O0lBQ2xELHFEQUFtRDs7Ozs7SUFFbkQsK0NBQStCOzs7OztJQUMvQiw2Q0FBc0M7Ozs7O0lBQ3RDLHVDQUF1Qjs7SUFDdkIsOENBQStCOztJQUMvQiwyQ0FBa0I7O0lBQ2xCLDRDQUFtQjs7SUFDbkIsOENBQXFCOztJQUNyQiwwQ0FBa0M7O0lBQ2xDLDJDQUFvQzs7SUFDcEMsd0NBQStDOztJQUMvQyx5Q0FBZ0Q7O0lBQ2hELDhDQUF5Rjs7SUFDekYsd0NBQTJDOztJQUMzQyx1Q0FBbUM7O0lBQ25DLHVDQUFrQzs7SUFDbEMsMENBSStCOztJQUMvQiw2Q0FBOEI7O0lBQzlCLGlEQUFtSDs7SUFDbkgsK0NBQTRCOztJQUM1Qix3Q0FBb0I7O0lBQ3BCLDZDQUF5Qzs7SUFDekMsc0NBQW9DOztJQUNwQyw0Q0FBNEM7O0lBQzVDLDZDQUE2Qzs7SUFDN0MsNkNBQTBFOzs7OztJQW9QOUQsNENBQThCOzs7OztJQUFFLHFDQUE4Qjs7Ozs7SUFBRSw4Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBET1dOX0FSUk9XLCBFTlRFUiwgVVBfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOelNpemVMRFNUeXBlLCBPbkNoYW5nZVR5cGUsIE9uVG91Y2hlZFR5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBpc05vdE5pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotaW5wdXQtbnVtYmVyJyxcbiAgZXhwb3J0QXM6ICdueklucHV0TnVtYmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYW50LWlucHV0LW51bWJlci1oYW5kbGVyLXdyYXBcIj5cbiAgICAgIDxzcGFuXG4gICAgICAgIHVuc2VsZWN0YWJsZT1cInVuc2VsZWN0YWJsZVwiXG4gICAgICAgIGNsYXNzPVwiYW50LWlucHV0LW51bWJlci1oYW5kbGVyIGFudC1pbnB1dC1udW1iZXItaGFuZGxlci11cFwiXG4gICAgICAgIChtb3VzZWRvd24pPVwidXAoJGV2ZW50KVwiXG4gICAgICAgIChtb3VzZXVwKT1cInN0b3AoKVwiXG4gICAgICAgIChtb3VzZWxlYXZlKT1cInN0b3AoKVwiXG4gICAgICAgIFtjbGFzcy5hbnQtaW5wdXQtbnVtYmVyLWhhbmRsZXItdXAtZGlzYWJsZWRdPVwiZGlzYWJsZWRVcFwiXG4gICAgICA+XG4gICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwidXBcIiBjbGFzcz1cImFudC1pbnB1dC1udW1iZXItaGFuZGxlci11cC1pbm5lclwiPjwvaT5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuXG4gICAgICAgIHVuc2VsZWN0YWJsZT1cInVuc2VsZWN0YWJsZVwiXG4gICAgICAgIGNsYXNzPVwiYW50LWlucHV0LW51bWJlci1oYW5kbGVyIGFudC1pbnB1dC1udW1iZXItaGFuZGxlci1kb3duXCJcbiAgICAgICAgKG1vdXNlZG93bik9XCJkb3duKCRldmVudClcIlxuICAgICAgICAobW91c2V1cCk9XCJzdG9wKClcIlxuICAgICAgICAobW91c2VsZWF2ZSk9XCJzdG9wKClcIlxuICAgICAgICBbY2xhc3MuYW50LWlucHV0LW51bWJlci1oYW5kbGVyLWRvd24tZGlzYWJsZWRdPVwiZGlzYWJsZWREb3duXCJcbiAgICAgID5cbiAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJkb3duXCIgY2xhc3M9XCJhbnQtaW5wdXQtbnVtYmVyLWhhbmRsZXItZG93bi1pbm5lclwiPjwvaT5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYW50LWlucHV0LW51bWJlci1pbnB1dC13cmFwXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgI2lucHV0RWxlbWVudFxuICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICBjbGFzcz1cImFudC1pbnB1dC1udW1iZXItaW5wdXRcIlxuICAgICAgICBbYXR0ci5pZF09XCJueklkXCJcbiAgICAgICAgW2F0dHIuYXV0b2ZvY3VzXT1cIm56QXV0b0ZvY3VzID8gJ2F1dG9mb2N1cycgOiBudWxsXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cIm56RGlzYWJsZWRcIlxuICAgICAgICBbYXR0ci5taW5dPVwibnpNaW5cIlxuICAgICAgICBbYXR0ci5tYXhdPVwibnpNYXhcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwibnpQbGFjZUhvbGRlclwiXG4gICAgICAgIFthdHRyLnN0ZXBdPVwibnpTdGVwXCJcbiAgICAgICAgW2F0dHIuaW5wdXRtb2RlXT1cIm56SW5wdXRNb2RlXCJcbiAgICAgICAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxuICAgICAgICAoa2V5dXApPVwic3RvcCgpXCJcbiAgICAgICAgW25nTW9kZWxdPVwiZGlzcGxheVZhbHVlXCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25Nb2RlbENoYW5nZSgkZXZlbnQpXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpJbnB1dE51bWJlckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1udW1iZXJdJzogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LWlucHV0LW51bWJlci1mb2N1c2VkXSc6ICdpc0ZvY3VzZWQnLFxuICAgICdbY2xhc3MuYW50LWlucHV0LW51bWJlci1sZ10nOiBgbnpTaXplID09PSAnbGFyZ2UnYCxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1udW1iZXItc21dJzogYG56U2l6ZSA9PT0gJ3NtYWxsJ2AsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtbnVtYmVyLWRpc2FibGVkXSc6ICduekRpc2FibGVkJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56SW5wdXROdW1iZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekRpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekF1dG9Gb2N1czogQm9vbGVhbklucHV0O1xuXG4gIHByaXZhdGUgYXV0b1N0ZXBUaW1lcj86IG51bWJlcjtcbiAgcHJpdmF0ZSBwYXJzZWRWYWx1ZT86IHN0cmluZyB8IG51bWJlcjtcbiAgcHJpdmF0ZSB2YWx1ZT86IG51bWJlcjtcbiAgZGlzcGxheVZhbHVlPzogc3RyaW5nIHwgbnVtYmVyO1xuICBpc0ZvY3VzZWQgPSBmYWxzZTtcbiAgZGlzYWJsZWRVcCA9IGZhbHNlO1xuICBkaXNhYmxlZERvd24gPSBmYWxzZTtcbiAgb25DaGFuZ2U6IE9uQ2hhbmdlVHlwZSA9ICgpID0+IHt9O1xuICBvblRvdWNoZWQ6IE9uVG91Y2hlZFR5cGUgPSAoKSA9PiB7fTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Qmx1ciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Rm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcsIHsgc3RhdGljOiB0cnVlIH0pIGlucHV0RWxlbWVudCE6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG4gIEBJbnB1dCgpIG56U2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbnpNaW46IG51bWJlciA9IC1JbmZpbml0eTtcbiAgQElucHV0KCkgbnpNYXg6IG51bWJlciA9IEluZmluaXR5O1xuICBASW5wdXQoKSBuelBhcnNlciA9ICh2YWx1ZTogc3RyaW5nKSA9PlxuICAgIHZhbHVlXG4gICAgICAudHJpbSgpXG4gICAgICAucmVwbGFjZSgv44CCL2csICcuJylcbiAgICAgIC5yZXBsYWNlKC9bXlxcd1xcLi1dKy9nLCAnJyk7XG4gIEBJbnB1dCgpIG56UHJlY2lzaW9uPzogbnVtYmVyO1xuICBASW5wdXQoKSBuelByZWNpc2lvbk1vZGU6ICdjdXQnIHwgJ3RvRml4ZWQnIHwgKCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBwcmVjaXNpb24/OiBudW1iZXIpID0+IG51bWJlcikgPSAndG9GaXhlZCc7XG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXIgPSAnJztcbiAgQElucHV0KCkgbnpTdGVwID0gMTtcbiAgQElucHV0KCkgbnpJbnB1dE1vZGU6IHN0cmluZyA9ICdkZWNpbWFsJztcbiAgQElucHV0KCkgbnpJZDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekF1dG9Gb2N1cyA9IGZhbHNlO1xuICBASW5wdXQoKSBuekZvcm1hdHRlcjogKHZhbHVlOiBudW1iZXIpID0+IHN0cmluZyB8IG51bWJlciA9IHZhbHVlID0+IHZhbHVlO1xuXG4gIG9uTW9kZWxDaGFuZ2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucGFyc2VkVmFsdWUgPSB0aGlzLm56UGFyc2VyKHZhbHVlKTtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gYCR7dGhpcy5wYXJzZWRWYWx1ZX1gO1xuICAgIGNvbnN0IHZhbGlkVmFsdWUgPSB0aGlzLmdldEN1cnJlbnRWYWxpZFZhbHVlKHRoaXMucGFyc2VkVmFsdWUpO1xuICAgIHRoaXMuc2V0VmFsdWUodmFsaWRWYWx1ZSk7XG4gIH1cblxuICBnZXRDdXJyZW50VmFsaWRWYWx1ZSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHtcbiAgICBsZXQgdmFsID0gdmFsdWU7XG4gICAgaWYgKHZhbCA9PT0gJycpIHtcbiAgICAgIHZhbCA9ICcnO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNOb3RDb21wbGV0ZU51bWJlcih2YWwpKSB7XG4gICAgICB2YWwgPSBgJHt0aGlzLmdldFZhbGlkVmFsdWUodmFsKX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWwgPSB0aGlzLnZhbHVlITtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudG9OdW1iZXIodmFsKTtcbiAgfVxuXG4gIC8vICcxLicgJzF4JyAneHgnICcnID0+IGFyZSBub3QgY29tcGxldGUgbnVtYmVyc1xuICBpc05vdENvbXBsZXRlTnVtYmVyKG51bTogc3RyaW5nIHwgbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzTmFOKG51bSBhcyBudW1iZXIpIHx8IG51bSA9PT0gJycgfHwgbnVtID09PSBudWxsIHx8ICEhKG51bSAmJiBudW0udG9TdHJpbmcoKS5pbmRleE9mKCcuJykgPT09IG51bS50b1N0cmluZygpLmxlbmd0aCAtIDEpO1xuICB9XG5cbiAgZ2V0VmFsaWRWYWx1ZSh2YWx1ZT86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IHZhbCA9IHBhcnNlRmxvYXQodmFsdWUgYXMgc3RyaW5nKTtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy83MzU4XG4gICAgaWYgKGlzTmFOKHZhbCkpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKHZhbCA8IHRoaXMubnpNaW4pIHtcbiAgICAgIHZhbCA9IHRoaXMubnpNaW47XG4gICAgfVxuICAgIGlmICh2YWwgPiB0aGlzLm56TWF4KSB7XG4gICAgICB2YWwgPSB0aGlzLm56TWF4O1xuICAgIH1cbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgdG9OdW1iZXIobnVtOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLmlzTm90Q29tcGxldGVOdW1iZXIobnVtKSkge1xuICAgICAgcmV0dXJuIG51bSBhcyBudW1iZXI7XG4gICAgfVxuICAgIGNvbnN0IG51bVN0ciA9IFN0cmluZyhudW0pO1xuICAgIGlmIChudW1TdHIuaW5kZXhPZignLicpID49IDAgJiYgaXNOb3ROaWwodGhpcy5uelByZWNpc2lvbikpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5uelByZWNpc2lvbk1vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnpQcmVjaXNpb25Nb2RlKG51bSwgdGhpcy5uelByZWNpc2lvbik7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubnpQcmVjaXNpb25Nb2RlID09PSAnY3V0Jykge1xuICAgICAgICBjb25zdCBudW1TcGxpdCA9IG51bVN0ci5zcGxpdCgnLicpO1xuICAgICAgICBudW1TcGxpdFsxXSA9IG51bVNwbGl0WzFdLnNsaWNlKDAsIHRoaXMubnpQcmVjaXNpb24pO1xuICAgICAgICByZXR1cm4gTnVtYmVyKG51bVNwbGl0LmpvaW4oJy4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gTnVtYmVyKE51bWJlcihudW0pLnRvRml4ZWQodGhpcy5uelByZWNpc2lvbikpO1xuICAgIH1cbiAgICByZXR1cm4gTnVtYmVyKG51bSk7XG4gIH1cblxuICBnZXRSYXRpbyhlOiBLZXlib2FyZEV2ZW50KTogbnVtYmVyIHtcbiAgICBsZXQgcmF0aW8gPSAxO1xuICAgIGlmIChlLm1ldGFLZXkgfHwgZS5jdHJsS2V5KSB7XG4gICAgICByYXRpbyA9IDAuMTtcbiAgICB9IGVsc2UgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgIHJhdGlvID0gMTA7XG4gICAgfVxuICAgIHJldHVybiByYXRpbztcbiAgfVxuXG4gIGRvd24oZTogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQsIHJhdGlvPzogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzRm9jdXNlZCkge1xuICAgICAgdGhpcy5mb2N1cygpO1xuICAgIH1cbiAgICB0aGlzLnN0ZXAoJ2Rvd24nLCBlLCByYXRpbyk7XG4gIH1cblxuICB1cChlOiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCwgcmF0aW8/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNGb2N1c2VkKSB7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgfVxuICAgIHRoaXMuc3RlcCgndXAnLCBlLCByYXRpbyk7XG4gIH1cblxuICBnZXRQcmVjaXNpb24odmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgIGlmICh2YWx1ZVN0cmluZy5pbmRleE9mKCdlLScpID49IDApIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZVN0cmluZy5zbGljZSh2YWx1ZVN0cmluZy5pbmRleE9mKCdlLScpICsgMiksIDEwKTtcbiAgICB9XG4gICAgbGV0IHByZWNpc2lvbiA9IDA7XG4gICAgaWYgKHZhbHVlU3RyaW5nLmluZGV4T2YoJy4nKSA+PSAwKSB7XG4gICAgICBwcmVjaXNpb24gPSB2YWx1ZVN0cmluZy5sZW5ndGggLSB2YWx1ZVN0cmluZy5pbmRleE9mKCcuJykgLSAxO1xuICAgIH1cbiAgICByZXR1cm4gcHJlY2lzaW9uO1xuICB9XG5cbiAgLy8gc3RlcD17MS4wfSB2YWx1ZT17MS41MX1cbiAgLy8gcHJlc3MgK1xuICAvLyB0aGVuIHZhbHVlIHNob3VsZCBiZSAyLjUxLCByYXRoZXIgdGhhbiAyLjVcbiAgLy8gaWYgdGhpcy5wcm9wcy5wcmVjaXNpb24gaXMgdW5kZWZpbmVkXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvaW5wdXQtbnVtYmVyL2lzc3Vlcy8zOVxuICBnZXRNYXhQcmVjaXNpb24oY3VycmVudFZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIHJhdGlvOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmIChpc05vdE5pbCh0aGlzLm56UHJlY2lzaW9uKSkge1xuICAgICAgcmV0dXJuIHRoaXMubnpQcmVjaXNpb247XG4gICAgfVxuICAgIGNvbnN0IHJhdGlvUHJlY2lzaW9uID0gdGhpcy5nZXRQcmVjaXNpb24ocmF0aW8pO1xuICAgIGNvbnN0IHN0ZXBQcmVjaXNpb24gPSB0aGlzLmdldFByZWNpc2lvbih0aGlzLm56U3RlcCk7XG4gICAgY29uc3QgY3VycmVudFZhbHVlUHJlY2lzaW9uID0gdGhpcy5nZXRQcmVjaXNpb24oY3VycmVudFZhbHVlIGFzIG51bWJlcik7XG4gICAgaWYgKCFjdXJyZW50VmFsdWUpIHtcbiAgICAgIHJldHVybiByYXRpb1ByZWNpc2lvbiArIHN0ZXBQcmVjaXNpb247XG4gICAgfVxuICAgIHJldHVybiBNYXRoLm1heChjdXJyZW50VmFsdWVQcmVjaXNpb24sIHJhdGlvUHJlY2lzaW9uICsgc3RlcFByZWNpc2lvbik7XG4gIH1cblxuICBnZXRQcmVjaXNpb25GYWN0b3IoY3VycmVudFZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIHJhdGlvOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHByZWNpc2lvbiA9IHRoaXMuZ2V0TWF4UHJlY2lzaW9uKGN1cnJlbnRWYWx1ZSwgcmF0aW8pO1xuICAgIHJldHVybiBNYXRoLnBvdygxMCwgcHJlY2lzaW9uKTtcbiAgfVxuXG4gIHVwU3RlcCh2YWw6IHN0cmluZyB8IG51bWJlciwgcmF0OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHByZWNpc2lvbkZhY3RvciA9IHRoaXMuZ2V0UHJlY2lzaW9uRmFjdG9yKHZhbCwgcmF0KTtcbiAgICBjb25zdCBwcmVjaXNpb24gPSBNYXRoLmFicyh0aGlzLmdldE1heFByZWNpc2lvbih2YWwsIHJhdCkpO1xuICAgIGxldCByZXN1bHQ7XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICByZXN1bHQgPSAoKHByZWNpc2lvbkZhY3RvciAqIHZhbCArIHByZWNpc2lvbkZhY3RvciAqIHRoaXMubnpTdGVwICogcmF0KSAvIHByZWNpc2lvbkZhY3RvcikudG9GaXhlZChwcmVjaXNpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSB0aGlzLm56TWluID09PSAtSW5maW5pdHkgPyB0aGlzLm56U3RlcCA6IHRoaXMubnpNaW47XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKHJlc3VsdCk7XG4gIH1cblxuICBkb3duU3RlcCh2YWw6IHN0cmluZyB8IG51bWJlciwgcmF0OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHByZWNpc2lvbkZhY3RvciA9IHRoaXMuZ2V0UHJlY2lzaW9uRmFjdG9yKHZhbCwgcmF0KTtcbiAgICBjb25zdCBwcmVjaXNpb24gPSBNYXRoLmFicyh0aGlzLmdldE1heFByZWNpc2lvbih2YWwsIHJhdCkpO1xuICAgIGxldCByZXN1bHQ7XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICByZXN1bHQgPSAoKHByZWNpc2lvbkZhY3RvciAqIHZhbCAtIHByZWNpc2lvbkZhY3RvciAqIHRoaXMubnpTdGVwICogcmF0KSAvIHByZWNpc2lvbkZhY3RvcikudG9GaXhlZChwcmVjaXNpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSB0aGlzLm56TWluID09PSAtSW5maW5pdHkgPyAtdGhpcy5uelN0ZXAgOiB0aGlzLm56TWluO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy50b051bWJlcihyZXN1bHQpO1xuICB9XG5cbiAgc3RlcDxUIGV4dGVuZHMga2V5b2YgTnpJbnB1dE51bWJlckNvbXBvbmVudD4odHlwZTogVCwgZTogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQsIHJhdGlvOiBudW1iZXIgPSAxKTogdm9pZCB7XG4gICAgdGhpcy5zdG9wKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldEN1cnJlbnRWYWxpZFZhbHVlKHRoaXMucGFyc2VkVmFsdWUhKSB8fCAwO1xuICAgIGxldCB2YWwgPSAwO1xuICAgIGlmICh0eXBlID09PSAndXAnKSB7XG4gICAgICB2YWwgPSB0aGlzLnVwU3RlcCh2YWx1ZSwgcmF0aW8pO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2Rvd24nKSB7XG4gICAgICB2YWwgPSB0aGlzLmRvd25TdGVwKHZhbHVlLCByYXRpbyk7XG4gICAgfVxuICAgIGNvbnN0IG91dE9mUmFuZ2UgPSB2YWwgPiB0aGlzLm56TWF4IHx8IHZhbCA8IHRoaXMubnpNaW47XG4gICAgaWYgKHZhbCA+IHRoaXMubnpNYXgpIHtcbiAgICAgIHZhbCA9IHRoaXMubnpNYXg7XG4gICAgfSBlbHNlIGlmICh2YWwgPCB0aGlzLm56TWluKSB7XG4gICAgICB2YWwgPSB0aGlzLm56TWluO1xuICAgIH1cbiAgICB0aGlzLnNldFZhbHVlKHZhbCk7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5VmFsdWUodmFsKTtcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XG4gICAgaWYgKG91dE9mUmFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5hdXRvU3RlcFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAodGhpc1t0eXBlXSBhcyAoZTogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQsIHJhdGlvOiBudW1iZXIpID0+IHZvaWQpKGUsIHJhdGlvKTtcbiAgICB9LCAzMDApO1xuICB9XG5cbiAgc3RvcCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hdXRvU3RlcFRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5hdXRvU3RlcFRpbWVyKTtcbiAgICB9XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKGAke3RoaXMudmFsdWV9YCAhPT0gYCR7dmFsdWV9YCkge1xuICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnBhcnNlZFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5kaXNhYmxlZFVwID0gdGhpcy5kaXNhYmxlZERvd24gPSBmYWxzZTtcbiAgICBpZiAodmFsdWUgfHwgdmFsdWUgPT09IDApIHtcbiAgICAgIGNvbnN0IHZhbCA9IE51bWJlcih2YWx1ZSk7XG4gICAgICBpZiAodmFsID49IHRoaXMubnpNYXgpIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZFVwID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh2YWwgPD0gdGhpcy5uek1pbikge1xuICAgICAgICB0aGlzLmRpc2FibGVkRG93biA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRGlzcGxheVZhbHVlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBkaXNwbGF5VmFsdWUgPSBpc05vdE5pbCh0aGlzLm56Rm9ybWF0dGVyKHZhbHVlKSkgPyB0aGlzLm56Rm9ybWF0dGVyKHZhbHVlKSA6ICcnO1xuICAgIHRoaXMuZGlzcGxheVZhbHVlID0gZGlzcGxheVZhbHVlO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBgJHtkaXNwbGF5VmFsdWV9YDtcbiAgfVxuXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gVVBfQVJST1cpIHtcbiAgICAgIGNvbnN0IHJhdGlvID0gdGhpcy5nZXRSYXRpbyhlKTtcbiAgICAgIHRoaXMudXAoZSwgcmF0aW8pO1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IERPV05fQVJST1cpIHtcbiAgICAgIGNvbnN0IHJhdGlvID0gdGhpcy5nZXRSYXRpbyhlKTtcbiAgICAgIHRoaXMuZG93bihlLCByYXRpbyk7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gRU5URVIpIHtcbiAgICAgIHRoaXMudXBkYXRlRGlzcGxheVZhbHVlKHRoaXMudmFsdWUhKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5VmFsdWUodmFsdWUpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogT25DaGFuZ2VUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IE9uVG91Y2hlZFR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpEaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5pbnB1dEVsZW1lbnQsICdrZXlib2FyZCcpO1xuICB9XG5cbiAgYmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNNb25pdG9yLm1vbml0b3IodGhpcy5lbGVtZW50UmVmLCB0cnVlKS5zdWJzY3JpYmUoZm9jdXNPcmlnaW4gPT4ge1xuICAgICAgaWYgKCFmb2N1c09yaWdpbikge1xuICAgICAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVwZGF0ZURpc3BsYXlWYWx1ZSh0aGlzLnZhbHVlISk7XG4gICAgICAgIHRoaXMubnpCbHVyLmVtaXQoKTtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLm9uVG91Y2hlZCgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5uekZvY3VzLmVtaXQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uekZvcm1hdHRlciAmJiAhY2hhbmdlcy5uekZvcm1hdHRlci5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIGNvbnN0IHZhbGlkVmFsdWUgPSB0aGlzLmdldEN1cnJlbnRWYWxpZFZhbHVlKHRoaXMucGFyc2VkVmFsdWUhKTtcbiAgICAgIHRoaXMuc2V0VmFsdWUodmFsaWRWYWx1ZSk7XG4gICAgICB0aGlzLnVwZGF0ZURpc3BsYXlWYWx1ZSh2YWxpZFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpBdXRvRm9jdXMpIHtcbiAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLmVsZW1lbnRSZWYpO1xuICB9XG59XG4iXX0=