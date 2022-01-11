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
var NzInputNumberComponent = /** @class */ (function () {
    function NzInputNumberComponent(elementRef, cdr, focusMonitor) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.isFocused = false;
        this.disabledUp = false;
        this.disabledDown = false;
        this.onChange = (/**
         * @return {?}
         */
        function () { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
        this.nzBlur = new EventEmitter();
        this.nzFocus = new EventEmitter();
        this.nzSize = 'default';
        this.nzMin = -Infinity;
        this.nzMax = Infinity;
        this.nzParser = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return value
                .trim()
                .replace(/。/g, '.')
                .replace(/[^\w\.-]+/g, '');
        });
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
        function (value) { return value; });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NzInputNumberComponent.prototype.onModelChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.parsedValue = this.nzParser(value);
        this.inputElement.nativeElement.value = "" + this.parsedValue;
        /** @type {?} */
        var validValue = this.getCurrentValidValue(this.parsedValue);
        this.setValue(validValue);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzInputNumberComponent.prototype.getCurrentValidValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var val = value;
        if (val === '') {
            val = '';
        }
        else if (!this.isNotCompleteNumber(val)) {
            val = "" + this.getValidValue(val);
        }
        else {
            val = (/** @type {?} */ (this.value));
        }
        return this.toNumber(val);
    };
    // '1.' '1x' 'xx' '' => are not complete numbers
    // '1.' '1x' 'xx' '' => are not complete numbers
    /**
     * @param {?} num
     * @return {?}
     */
    NzInputNumberComponent.prototype.isNotCompleteNumber = 
    // '1.' '1x' 'xx' '' => are not complete numbers
    /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        return isNaN((/** @type {?} */ (num))) || num === '' || num === null || !!(num && num.toString().indexOf('.') === num.toString().length - 1);
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    NzInputNumberComponent.prototype.getValidValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var val = parseFloat((/** @type {?} */ (value)));
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
    };
    /**
     * @param {?} num
     * @return {?}
     */
    NzInputNumberComponent.prototype.toNumber = /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        if (this.isNotCompleteNumber(num)) {
            return (/** @type {?} */ (num));
        }
        /** @type {?} */
        var numStr = String(num);
        if (numStr.indexOf('.') >= 0 && isNotNil(this.nzPrecision)) {
            if (typeof this.nzPrecisionMode === 'function') {
                return this.nzPrecisionMode(num, this.nzPrecision);
            }
            else if (this.nzPrecisionMode === 'cut') {
                /** @type {?} */
                var numSplit = numStr.split('.');
                numSplit[1] = numSplit[1].slice(0, this.nzPrecision);
                return Number(numSplit.join('.'));
            }
            return Number(Number(num).toFixed(this.nzPrecision));
        }
        return Number(num);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzInputNumberComponent.prototype.getRatio = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var ratio = 1;
        if (e.metaKey || e.ctrlKey) {
            ratio = 0.1;
        }
        else if (e.shiftKey) {
            ratio = 10;
        }
        return ratio;
    };
    /**
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    NzInputNumberComponent.prototype.down = /**
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    function (e, ratio) {
        if (!this.isFocused) {
            this.focus();
        }
        this.step('down', e, ratio);
    };
    /**
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    NzInputNumberComponent.prototype.up = /**
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    function (e, ratio) {
        if (!this.isFocused) {
            this.focus();
        }
        this.step('up', e, ratio);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzInputNumberComponent.prototype.getPrecision = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var valueString = value.toString();
        if (valueString.indexOf('e-') >= 0) {
            return parseInt(valueString.slice(valueString.indexOf('e-') + 2), 10);
        }
        /** @type {?} */
        var precision = 0;
        if (valueString.indexOf('.') >= 0) {
            precision = valueString.length - valueString.indexOf('.') - 1;
        }
        return precision;
    };
    // step={1.0} value={1.51}
    // press +
    // then value should be 2.51, rather than 2.5
    // if this.props.precision is undefined
    // https://github.com/react-component/input-number/issues/39
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
    NzInputNumberComponent.prototype.getMaxPrecision = 
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
    function (currentValue, ratio) {
        if (isNotNil(this.nzPrecision)) {
            return this.nzPrecision;
        }
        /** @type {?} */
        var ratioPrecision = this.getPrecision(ratio);
        /** @type {?} */
        var stepPrecision = this.getPrecision(this.nzStep);
        /** @type {?} */
        var currentValuePrecision = this.getPrecision((/** @type {?} */ (currentValue)));
        if (!currentValue) {
            return ratioPrecision + stepPrecision;
        }
        return Math.max(currentValuePrecision, ratioPrecision + stepPrecision);
    };
    /**
     * @param {?} currentValue
     * @param {?} ratio
     * @return {?}
     */
    NzInputNumberComponent.prototype.getPrecisionFactor = /**
     * @param {?} currentValue
     * @param {?} ratio
     * @return {?}
     */
    function (currentValue, ratio) {
        /** @type {?} */
        var precision = this.getMaxPrecision(currentValue, ratio);
        return Math.pow(10, precision);
    };
    /**
     * @param {?} val
     * @param {?} rat
     * @return {?}
     */
    NzInputNumberComponent.prototype.upStep = /**
     * @param {?} val
     * @param {?} rat
     * @return {?}
     */
    function (val, rat) {
        /** @type {?} */
        var precisionFactor = this.getPrecisionFactor(val, rat);
        /** @type {?} */
        var precision = Math.abs(this.getMaxPrecision(val, rat));
        /** @type {?} */
        var result;
        if (typeof val === 'number') {
            result = ((precisionFactor * val + precisionFactor * this.nzStep * rat) / precisionFactor).toFixed(precision);
        }
        else {
            result = this.nzMin === -Infinity ? this.nzStep : this.nzMin;
        }
        return this.toNumber(result);
    };
    /**
     * @param {?} val
     * @param {?} rat
     * @return {?}
     */
    NzInputNumberComponent.prototype.downStep = /**
     * @param {?} val
     * @param {?} rat
     * @return {?}
     */
    function (val, rat) {
        /** @type {?} */
        var precisionFactor = this.getPrecisionFactor(val, rat);
        /** @type {?} */
        var precision = Math.abs(this.getMaxPrecision(val, rat));
        /** @type {?} */
        var result;
        if (typeof val === 'number') {
            result = ((precisionFactor * val - precisionFactor * this.nzStep * rat) / precisionFactor).toFixed(precision);
        }
        else {
            result = this.nzMin === -Infinity ? -this.nzStep : this.nzMin;
        }
        return this.toNumber(result);
    };
    /**
     * @template T
     * @param {?} type
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    NzInputNumberComponent.prototype.step = /**
     * @template T
     * @param {?} type
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    function (type, e, ratio) {
        var _this = this;
        if (ratio === void 0) { ratio = 1; }
        this.stop();
        e.preventDefault();
        if (this.nzDisabled) {
            return;
        }
        /** @type {?} */
        var value = this.getCurrentValidValue((/** @type {?} */ (this.parsedValue))) || 0;
        /** @type {?} */
        var val = 0;
        if (type === 'up') {
            val = this.upStep(value, ratio);
        }
        else if (type === 'down') {
            val = this.downStep(value, ratio);
        }
        /** @type {?} */
        var outOfRange = val > this.nzMax || val < this.nzMin;
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
        function () {
            ((/** @type {?} */ (_this[type])))(e, ratio);
        }), 300);
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.stop = /**
     * @return {?}
     */
    function () {
        if (this.autoStepTimer) {
            clearTimeout(this.autoStepTimer);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzInputNumberComponent.prototype.setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if ("" + this.value !== "" + value) {
            this.onChange(value);
        }
        this.value = value;
        this.parsedValue = value;
        this.disabledUp = this.disabledDown = false;
        if (value || value === 0) {
            /** @type {?} */
            var val = Number(value);
            if (val >= this.nzMax) {
                this.disabledUp = true;
            }
            if (val <= this.nzMin) {
                this.disabledDown = true;
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzInputNumberComponent.prototype.updateDisplayValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var displayValue = isNotNil(this.nzFormatter(value)) ? this.nzFormatter(value) : '';
        this.displayValue = displayValue;
        this.inputElement.nativeElement.value = "" + displayValue;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzInputNumberComponent.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.keyCode === UP_ARROW) {
            /** @type {?} */
            var ratio = this.getRatio(e);
            this.up(e, ratio);
            this.stop();
        }
        else if (e.keyCode === DOWN_ARROW) {
            /** @type {?} */
            var ratio = this.getRatio(e);
            this.down(e, ratio);
            this.stop();
        }
        else if (e.keyCode === ENTER) {
            this.updateDisplayValue((/** @type {?} */ (this.value)));
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzInputNumberComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.setValue(value);
        this.updateDisplayValue(value);
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzInputNumberComponent.prototype.registerOnChange = /**
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
    NzInputNumberComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    NzInputNumberComponent.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        this.nzDisabled = disabled;
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.inputElement.nativeElement.blur();
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.focusMonitor.monitor(this.elementRef, true).subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        function (focusOrigin) {
            if (!focusOrigin) {
                _this.isFocused = false;
                _this.updateDisplayValue((/** @type {?} */ (_this.value)));
                _this.nzBlur.emit();
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () { return _this.onTouched(); }));
            }
            else {
                _this.isFocused = true;
                _this.nzFocus.emit();
            }
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzInputNumberComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzFormatter && !changes.nzFormatter.isFirstChange()) {
            /** @type {?} */
            var validValue = this.getCurrentValidValue((/** @type {?} */ (this.parsedValue)));
            this.setValue(validValue);
            this.updateDisplayValue(validValue);
        }
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.nzAutoFocus) {
            this.focus();
        }
    };
    /**
     * @return {?}
     */
    NzInputNumberComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.stopMonitoring(this.elementRef);
    };
    NzInputNumberComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-input-number',
                    exportAs: 'nzInputNumber',
                    template: "\n    <div class=\"ant-input-number-handler-wrap\">\n      <span\n        unselectable=\"unselectable\"\n        class=\"ant-input-number-handler ant-input-number-handler-up\"\n        (mousedown)=\"up($event)\"\n        (mouseup)=\"stop()\"\n        (mouseleave)=\"stop()\"\n        [class.ant-input-number-handler-up-disabled]=\"disabledUp\"\n      >\n        <i nz-icon nzType=\"up\" class=\"ant-input-number-handler-up-inner\"></i>\n      </span>\n      <span\n        unselectable=\"unselectable\"\n        class=\"ant-input-number-handler ant-input-number-handler-down\"\n        (mousedown)=\"down($event)\"\n        (mouseup)=\"stop()\"\n        (mouseleave)=\"stop()\"\n        [class.ant-input-number-handler-down-disabled]=\"disabledDown\"\n      >\n        <i nz-icon nzType=\"down\" class=\"ant-input-number-handler-down-inner\"></i>\n      </span>\n    </div>\n    <div class=\"ant-input-number-input-wrap\">\n      <input\n        #inputElement\n        autocomplete=\"off\"\n        class=\"ant-input-number-input\"\n        [attr.id]=\"nzId\"\n        [attr.autofocus]=\"nzAutoFocus ? 'autofocus' : null\"\n        [disabled]=\"nzDisabled\"\n        [attr.min]=\"nzMin\"\n        [attr.max]=\"nzMax\"\n        [placeholder]=\"nzPlaceHolder\"\n        [attr.step]=\"nzStep\"\n        [attr.inputmode]=\"nzInputMode\"\n        (keydown)=\"onKeyDown($event)\"\n        (keyup)=\"stop()\"\n        [ngModel]=\"displayValue\"\n        (ngModelChange)=\"onModelChange($event)\"\n      />\n    </div>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzInputNumberComponent; })),
                            multi: true
                        }
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.ant-input-number]': 'true',
                        '[class.ant-input-number-focused]': 'isFocused',
                        '[class.ant-input-number-lg]': "nzSize === 'large'",
                        '[class.ant-input-number-sm]': "nzSize === 'small'",
                        '[class.ant-input-number-disabled]': 'nzDisabled'
                    }
                }] }
    ];
    /** @nocollapse */
    NzInputNumberComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: FocusMonitor }
    ]; };
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
    return NzInputNumberComponent;
}());
export { NzInputNumberComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvaW5wdXQtbnVtYmVyLyIsInNvdXJjZXMiOlsiaW5wdXQtbnVtYmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BFLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBSUwsTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFakU7SUFtVkUsZ0NBQW9CLFVBQXNCLEVBQVUsR0FBc0IsRUFBVSxZQUEwQjtRQUExRixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQTVROUcsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGFBQVE7OztRQUFpQixjQUFPLENBQUMsRUFBQztRQUNsQyxjQUFTOzs7UUFBa0IsY0FBTyxDQUFDLEVBQUM7UUFDakIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdkMsV0FBTSxHQUFrQixTQUFTLENBQUM7UUFDbEMsVUFBSyxHQUFX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LE1BQU07MEJBQ04sTUFBTTsrQkFDTixTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt5QkFDMUMsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSzs4QkFLTCxLQUFLO2tDQUNMLEtBQUs7Z0NBQ0wsS0FBSzt5QkFDTCxLQUFLOzhCQUNMLEtBQUs7dUJBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7OEJBQ0wsS0FBSzs7SUFGbUI7UUFBZixZQUFZLEVBQUU7OzhEQUFvQjtJQUNuQjtRQUFmLFlBQVksRUFBRTs7K0RBQXFCO0lBc1IvQyw2QkFBQztDQUFBLEFBcFhELElBb1hDO1NBclRZLHNCQUFzQjs7O0lBQ2pDLG9EQUFrRDs7SUFDbEQscURBQW1EOzs7OztJQUVuRCwrQ0FBK0I7Ozs7O0lBQy9CLDZDQUFzQzs7Ozs7SUFDdEMsdUNBQXVCOztJQUN2Qiw4Q0FBK0I7O0lBQy9CLDJDQUFrQjs7SUFDbEIsNENBQW1COztJQUNuQiw4Q0FBcUI7O0lBQ3JCLDBDQUFrQzs7SUFDbEMsMkNBQW9DOztJQUNwQyx3Q0FBK0M7O0lBQy9DLHlDQUFnRDs7SUFDaEQsOENBQXlGOztJQUN6Rix3Q0FBMkM7O0lBQzNDLHVDQUFtQzs7SUFDbkMsdUNBQWtDOztJQUNsQywwQ0FJK0I7O0lBQy9CLDZDQUE4Qjs7SUFDOUIsaURBQW1IOztJQUNuSCwrQ0FBNEI7O0lBQzVCLHdDQUFvQjs7SUFDcEIsNkNBQXlDOztJQUN6QyxzQ0FBb0M7O0lBQ3BDLDRDQUE0Qzs7SUFDNUMsNkNBQTZDOztJQUM3Qyw2Q0FBMEU7Ozs7O0lBb1A5RCw0Q0FBOEI7Ozs7O0lBQUUscUNBQThCOzs7OztJQUFFLDhDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IERPV05fQVJST1csIEVOVEVSLCBVUF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE56U2l6ZUxEU1R5cGUsIE9uQ2hhbmdlVHlwZSwgT25Ub3VjaGVkVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIGlzTm90TmlsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1pbnB1dC1udW1iZXInLFxuICBleHBvcnRBczogJ256SW5wdXROdW1iZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJhbnQtaW5wdXQtbnVtYmVyLWhhbmRsZXItd3JhcFwiPlxuICAgICAgPHNwYW5cbiAgICAgICAgdW5zZWxlY3RhYmxlPVwidW5zZWxlY3RhYmxlXCJcbiAgICAgICAgY2xhc3M9XCJhbnQtaW5wdXQtbnVtYmVyLWhhbmRsZXIgYW50LWlucHV0LW51bWJlci1oYW5kbGVyLXVwXCJcbiAgICAgICAgKG1vdXNlZG93bik9XCJ1cCgkZXZlbnQpXCJcbiAgICAgICAgKG1vdXNldXApPVwic3RvcCgpXCJcbiAgICAgICAgKG1vdXNlbGVhdmUpPVwic3RvcCgpXCJcbiAgICAgICAgW2NsYXNzLmFudC1pbnB1dC1udW1iZXItaGFuZGxlci11cC1kaXNhYmxlZF09XCJkaXNhYmxlZFVwXCJcbiAgICAgID5cbiAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJ1cFwiIGNsYXNzPVwiYW50LWlucHV0LW51bWJlci1oYW5kbGVyLXVwLWlubmVyXCI+PC9pPlxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW5cbiAgICAgICAgdW5zZWxlY3RhYmxlPVwidW5zZWxlY3RhYmxlXCJcbiAgICAgICAgY2xhc3M9XCJhbnQtaW5wdXQtbnVtYmVyLWhhbmRsZXIgYW50LWlucHV0LW51bWJlci1oYW5kbGVyLWRvd25cIlxuICAgICAgICAobW91c2Vkb3duKT1cImRvd24oJGV2ZW50KVwiXG4gICAgICAgIChtb3VzZXVwKT1cInN0b3AoKVwiXG4gICAgICAgIChtb3VzZWxlYXZlKT1cInN0b3AoKVwiXG4gICAgICAgIFtjbGFzcy5hbnQtaW5wdXQtbnVtYmVyLWhhbmRsZXItZG93bi1kaXNhYmxlZF09XCJkaXNhYmxlZERvd25cIlxuICAgICAgPlxuICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImRvd25cIiBjbGFzcz1cImFudC1pbnB1dC1udW1iZXItaGFuZGxlci1kb3duLWlubmVyXCI+PC9pPlxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhbnQtaW5wdXQtbnVtYmVyLWlucHV0LXdyYXBcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICAjaW5wdXRFbGVtZW50XG4gICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgIGNsYXNzPVwiYW50LWlucHV0LW51bWJlci1pbnB1dFwiXG4gICAgICAgIFthdHRyLmlkXT1cIm56SWRcIlxuICAgICAgICBbYXR0ci5hdXRvZm9jdXNdPVwibnpBdXRvRm9jdXMgPyAnYXV0b2ZvY3VzJyA6IG51bGxcIlxuICAgICAgICBbZGlzYWJsZWRdPVwibnpEaXNhYmxlZFwiXG4gICAgICAgIFthdHRyLm1pbl09XCJuek1pblwiXG4gICAgICAgIFthdHRyLm1heF09XCJuek1heFwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJuelBsYWNlSG9sZGVyXCJcbiAgICAgICAgW2F0dHIuc3RlcF09XCJuelN0ZXBcIlxuICAgICAgICBbYXR0ci5pbnB1dG1vZGVdPVwibnpJbnB1dE1vZGVcIlxuICAgICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXG4gICAgICAgIChrZXl1cCk9XCJzdG9wKClcIlxuICAgICAgICBbbmdNb2RlbF09XCJkaXNwbGF5VmFsdWVcIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbk1vZGVsQ2hhbmdlKCRldmVudClcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOeklucHV0TnVtYmVyQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LWlucHV0LW51bWJlcl0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtbnVtYmVyLWZvY3VzZWRdJzogJ2lzRm9jdXNlZCcsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtbnVtYmVyLWxnXSc6IGBuelNpemUgPT09ICdsYXJnZSdgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LW51bWJlci1zbV0nOiBgbnpTaXplID09PSAnc21hbGwnYCxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1udW1iZXItZGlzYWJsZWRdJzogJ256RGlzYWJsZWQnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpJbnB1dE51bWJlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256QXV0b0ZvY3VzOiBCb29sZWFuSW5wdXQ7XG5cbiAgcHJpdmF0ZSBhdXRvU3RlcFRpbWVyPzogbnVtYmVyO1xuICBwcml2YXRlIHBhcnNlZFZhbHVlPzogc3RyaW5nIHwgbnVtYmVyO1xuICBwcml2YXRlIHZhbHVlPzogbnVtYmVyO1xuICBkaXNwbGF5VmFsdWU/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGlzRm9jdXNlZCA9IGZhbHNlO1xuICBkaXNhYmxlZFVwID0gZmFsc2U7XG4gIGRpc2FibGVkRG93biA9IGZhbHNlO1xuICBvbkNoYW5nZTogT25DaGFuZ2VUeXBlID0gKCkgPT4ge307XG4gIG9uVG91Y2hlZDogT25Ub3VjaGVkVHlwZSA9ICgpID0+IHt9O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpCbHVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpGb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgaW5wdXRFbGVtZW50ITogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcbiAgQElucHV0KCkgbnpTaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBuek1pbjogbnVtYmVyID0gLUluZmluaXR5O1xuICBASW5wdXQoKSBuek1heDogbnVtYmVyID0gSW5maW5pdHk7XG4gIEBJbnB1dCgpIG56UGFyc2VyID0gKHZhbHVlOiBzdHJpbmcpID0+XG4gICAgdmFsdWVcbiAgICAgIC50cmltKClcbiAgICAgIC5yZXBsYWNlKC/jgIIvZywgJy4nKVxuICAgICAgLnJlcGxhY2UoL1teXFx3XFwuLV0rL2csICcnKTtcbiAgQElucHV0KCkgbnpQcmVjaXNpb24/OiBudW1iZXI7XG4gIEBJbnB1dCgpIG56UHJlY2lzaW9uTW9kZTogJ2N1dCcgfCAndG9GaXhlZCcgfCAoKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIHByZWNpc2lvbj86IG51bWJlcikgPT4gbnVtYmVyKSA9ICd0b0ZpeGVkJztcbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlciA9ICcnO1xuICBASW5wdXQoKSBuelN0ZXAgPSAxO1xuICBASW5wdXQoKSBueklucHV0TW9kZTogc3RyaW5nID0gJ2RlY2ltYWwnO1xuICBASW5wdXQoKSBueklkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXV0b0ZvY3VzID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56Rm9ybWF0dGVyOiAodmFsdWU6IG51bWJlcikgPT4gc3RyaW5nIHwgbnVtYmVyID0gdmFsdWUgPT4gdmFsdWU7XG5cbiAgb25Nb2RlbENoYW5nZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5wYXJzZWRWYWx1ZSA9IHRoaXMubnpQYXJzZXIodmFsdWUpO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBgJHt0aGlzLnBhcnNlZFZhbHVlfWA7XG4gICAgY29uc3QgdmFsaWRWYWx1ZSA9IHRoaXMuZ2V0Q3VycmVudFZhbGlkVmFsdWUodGhpcy5wYXJzZWRWYWx1ZSk7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWxpZFZhbHVlKTtcbiAgfVxuXG4gIGdldEN1cnJlbnRWYWxpZFZhbHVlKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXIge1xuICAgIGxldCB2YWwgPSB2YWx1ZTtcbiAgICBpZiAodmFsID09PSAnJykge1xuICAgICAgdmFsID0gJyc7XG4gICAgfSBlbHNlIGlmICghdGhpcy5pc05vdENvbXBsZXRlTnVtYmVyKHZhbCkpIHtcbiAgICAgIHZhbCA9IGAke3RoaXMuZ2V0VmFsaWRWYWx1ZSh2YWwpfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbCA9IHRoaXMudmFsdWUhO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy50b051bWJlcih2YWwpO1xuICB9XG5cbiAgLy8gJzEuJyAnMXgnICd4eCcgJycgPT4gYXJlIG5vdCBjb21wbGV0ZSBudW1iZXJzXG4gIGlzTm90Q29tcGxldGVOdW1iZXIobnVtOiBzdHJpbmcgfCBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNOYU4obnVtIGFzIG51bWJlcikgfHwgbnVtID09PSAnJyB8fCBudW0gPT09IG51bGwgfHwgISEobnVtICYmIG51bS50b1N0cmluZygpLmluZGV4T2YoJy4nKSA9PT0gbnVtLnRvU3RyaW5nKCkubGVuZ3RoIC0gMSk7XG4gIH1cblxuICBnZXRWYWxpZFZhbHVlKHZhbHVlPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgdmFsID0gcGFyc2VGbG9hdCh2YWx1ZSBhcyBzdHJpbmcpO1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzczNThcbiAgICBpZiAoaXNOYU4odmFsKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAodmFsIDwgdGhpcy5uek1pbikge1xuICAgICAgdmFsID0gdGhpcy5uek1pbjtcbiAgICB9XG4gICAgaWYgKHZhbCA+IHRoaXMubnpNYXgpIHtcbiAgICAgIHZhbCA9IHRoaXMubnpNYXg7XG4gICAgfVxuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICB0b051bWJlcihudW06IHN0cmluZyB8IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuaXNOb3RDb21wbGV0ZU51bWJlcihudW0pKSB7XG4gICAgICByZXR1cm4gbnVtIGFzIG51bWJlcjtcbiAgICB9XG4gICAgY29uc3QgbnVtU3RyID0gU3RyaW5nKG51bSk7XG4gICAgaWYgKG51bVN0ci5pbmRleE9mKCcuJykgPj0gMCAmJiBpc05vdE5pbCh0aGlzLm56UHJlY2lzaW9uKSkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLm56UHJlY2lzaW9uTW9kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gdGhpcy5uelByZWNpc2lvbk1vZGUobnVtLCB0aGlzLm56UHJlY2lzaW9uKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5uelByZWNpc2lvbk1vZGUgPT09ICdjdXQnKSB7XG4gICAgICAgIGNvbnN0IG51bVNwbGl0ID0gbnVtU3RyLnNwbGl0KCcuJyk7XG4gICAgICAgIG51bVNwbGl0WzFdID0gbnVtU3BsaXRbMV0uc2xpY2UoMCwgdGhpcy5uelByZWNpc2lvbik7XG4gICAgICAgIHJldHVybiBOdW1iZXIobnVtU3BsaXQuam9pbignLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBOdW1iZXIoTnVtYmVyKG51bSkudG9GaXhlZCh0aGlzLm56UHJlY2lzaW9uKSk7XG4gICAgfVxuICAgIHJldHVybiBOdW1iZXIobnVtKTtcbiAgfVxuXG4gIGdldFJhdGlvKGU6IEtleWJvYXJkRXZlbnQpOiBudW1iZXIge1xuICAgIGxldCByYXRpbyA9IDE7XG4gICAgaWYgKGUubWV0YUtleSB8fCBlLmN0cmxLZXkpIHtcbiAgICAgIHJhdGlvID0gMC4xO1xuICAgIH0gZWxzZSBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgcmF0aW8gPSAxMDtcbiAgICB9XG4gICAgcmV0dXJuIHJhdGlvO1xuICB9XG5cbiAgZG93bihlOiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCwgcmF0aW8/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNGb2N1c2VkKSB7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgfVxuICAgIHRoaXMuc3RlcCgnZG93bicsIGUsIHJhdGlvKTtcbiAgfVxuXG4gIHVwKGU6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50LCByYXRpbz86IG51bWJlcik6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc0ZvY3VzZWQpIHtcbiAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICB9XG4gICAgdGhpcy5zdGVwKCd1cCcsIGUsIHJhdGlvKTtcbiAgfVxuXG4gIGdldFByZWNpc2lvbih2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgaWYgKHZhbHVlU3RyaW5nLmluZGV4T2YoJ2UtJykgPj0gMCkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlU3RyaW5nLnNsaWNlKHZhbHVlU3RyaW5nLmluZGV4T2YoJ2UtJykgKyAyKSwgMTApO1xuICAgIH1cbiAgICBsZXQgcHJlY2lzaW9uID0gMDtcbiAgICBpZiAodmFsdWVTdHJpbmcuaW5kZXhPZignLicpID49IDApIHtcbiAgICAgIHByZWNpc2lvbiA9IHZhbHVlU3RyaW5nLmxlbmd0aCAtIHZhbHVlU3RyaW5nLmluZGV4T2YoJy4nKSAtIDE7XG4gICAgfVxuICAgIHJldHVybiBwcmVjaXNpb247XG4gIH1cblxuICAvLyBzdGVwPXsxLjB9IHZhbHVlPXsxLjUxfVxuICAvLyBwcmVzcyArXG4gIC8vIHRoZW4gdmFsdWUgc2hvdWxkIGJlIDIuNTEsIHJhdGhlciB0aGFuIDIuNVxuICAvLyBpZiB0aGlzLnByb3BzLnByZWNpc2lvbiBpcyB1bmRlZmluZWRcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC9pbnB1dC1udW1iZXIvaXNzdWVzLzM5XG4gIGdldE1heFByZWNpc2lvbihjdXJyZW50VmFsdWU6IHN0cmluZyB8IG51bWJlciwgcmF0aW86IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKGlzTm90TmlsKHRoaXMubnpQcmVjaXNpb24pKSB7XG4gICAgICByZXR1cm4gdGhpcy5uelByZWNpc2lvbjtcbiAgICB9XG4gICAgY29uc3QgcmF0aW9QcmVjaXNpb24gPSB0aGlzLmdldFByZWNpc2lvbihyYXRpbyk7XG4gICAgY29uc3Qgc3RlcFByZWNpc2lvbiA9IHRoaXMuZ2V0UHJlY2lzaW9uKHRoaXMubnpTdGVwKTtcbiAgICBjb25zdCBjdXJyZW50VmFsdWVQcmVjaXNpb24gPSB0aGlzLmdldFByZWNpc2lvbihjdXJyZW50VmFsdWUgYXMgbnVtYmVyKTtcbiAgICBpZiAoIWN1cnJlbnRWYWx1ZSkge1xuICAgICAgcmV0dXJuIHJhdGlvUHJlY2lzaW9uICsgc3RlcFByZWNpc2lvbjtcbiAgICB9XG4gICAgcmV0dXJuIE1hdGgubWF4KGN1cnJlbnRWYWx1ZVByZWNpc2lvbiwgcmF0aW9QcmVjaXNpb24gKyBzdGVwUHJlY2lzaW9uKTtcbiAgfVxuXG4gIGdldFByZWNpc2lvbkZhY3RvcihjdXJyZW50VmFsdWU6IHN0cmluZyB8IG51bWJlciwgcmF0aW86IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgcHJlY2lzaW9uID0gdGhpcy5nZXRNYXhQcmVjaXNpb24oY3VycmVudFZhbHVlLCByYXRpbyk7XG4gICAgcmV0dXJuIE1hdGgucG93KDEwLCBwcmVjaXNpb24pO1xuICB9XG5cbiAgdXBTdGVwKHZhbDogc3RyaW5nIHwgbnVtYmVyLCByYXQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgcHJlY2lzaW9uRmFjdG9yID0gdGhpcy5nZXRQcmVjaXNpb25GYWN0b3IodmFsLCByYXQpO1xuICAgIGNvbnN0IHByZWNpc2lvbiA9IE1hdGguYWJzKHRoaXMuZ2V0TWF4UHJlY2lzaW9uKHZhbCwgcmF0KSk7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJlc3VsdCA9ICgocHJlY2lzaW9uRmFjdG9yICogdmFsICsgcHJlY2lzaW9uRmFjdG9yICogdGhpcy5uelN0ZXAgKiByYXQpIC8gcHJlY2lzaW9uRmFjdG9yKS50b0ZpeGVkKHByZWNpc2lvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMubnpNaW4gPT09IC1JbmZpbml0eSA/IHRoaXMubnpTdGVwIDogdGhpcy5uek1pbjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudG9OdW1iZXIocmVzdWx0KTtcbiAgfVxuXG4gIGRvd25TdGVwKHZhbDogc3RyaW5nIHwgbnVtYmVyLCByYXQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgcHJlY2lzaW9uRmFjdG9yID0gdGhpcy5nZXRQcmVjaXNpb25GYWN0b3IodmFsLCByYXQpO1xuICAgIGNvbnN0IHByZWNpc2lvbiA9IE1hdGguYWJzKHRoaXMuZ2V0TWF4UHJlY2lzaW9uKHZhbCwgcmF0KSk7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJlc3VsdCA9ICgocHJlY2lzaW9uRmFjdG9yICogdmFsIC0gcHJlY2lzaW9uRmFjdG9yICogdGhpcy5uelN0ZXAgKiByYXQpIC8gcHJlY2lzaW9uRmFjdG9yKS50b0ZpeGVkKHByZWNpc2lvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMubnpNaW4gPT09IC1JbmZpbml0eSA/IC10aGlzLm56U3RlcCA6IHRoaXMubnpNaW47XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKHJlc3VsdCk7XG4gIH1cblxuICBzdGVwPFQgZXh0ZW5kcyBrZXlvZiBOeklucHV0TnVtYmVyQ29tcG9uZW50Pih0eXBlOiBULCBlOiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCwgcmF0aW86IG51bWJlciA9IDEpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3AoKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0Q3VycmVudFZhbGlkVmFsdWUodGhpcy5wYXJzZWRWYWx1ZSEpIHx8IDA7XG4gICAgbGV0IHZhbCA9IDA7XG4gICAgaWYgKHR5cGUgPT09ICd1cCcpIHtcbiAgICAgIHZhbCA9IHRoaXMudXBTdGVwKHZhbHVlLCByYXRpbyk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZG93bicpIHtcbiAgICAgIHZhbCA9IHRoaXMuZG93blN0ZXAodmFsdWUsIHJhdGlvKTtcbiAgICB9XG4gICAgY29uc3Qgb3V0T2ZSYW5nZSA9IHZhbCA+IHRoaXMubnpNYXggfHwgdmFsIDwgdGhpcy5uek1pbjtcbiAgICBpZiAodmFsID4gdGhpcy5uek1heCkge1xuICAgICAgdmFsID0gdGhpcy5uek1heDtcbiAgICB9IGVsc2UgaWYgKHZhbCA8IHRoaXMubnpNaW4pIHtcbiAgICAgIHZhbCA9IHRoaXMubnpNaW47XG4gICAgfVxuICAgIHRoaXMuc2V0VmFsdWUodmFsKTtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXlWYWx1ZSh2YWwpO1xuICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcbiAgICBpZiAob3V0T2ZSYW5nZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmF1dG9TdGVwVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICh0aGlzW3R5cGVdIGFzIChlOiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCwgcmF0aW86IG51bWJlcikgPT4gdm9pZCkoZSwgcmF0aW8pO1xuICAgIH0sIDMwMCk7XG4gIH1cblxuICBzdG9wKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmF1dG9TdGVwVGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmF1dG9TdGVwVGltZXIpO1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoYCR7dGhpcy52YWx1ZX1gICE9PSBgJHt2YWx1ZX1gKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMucGFyc2VkVmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmRpc2FibGVkVXAgPSB0aGlzLmRpc2FibGVkRG93biA9IGZhbHNlO1xuICAgIGlmICh2YWx1ZSB8fCB2YWx1ZSA9PT0gMCkge1xuICAgICAgY29uc3QgdmFsID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgIGlmICh2YWwgPj0gdGhpcy5uek1heCkge1xuICAgICAgICB0aGlzLmRpc2FibGVkVXAgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHZhbCA8PSB0aGlzLm56TWluKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWREb3duID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVEaXNwbGF5VmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGRpc3BsYXlWYWx1ZSA9IGlzTm90TmlsKHRoaXMubnpGb3JtYXR0ZXIodmFsdWUpKSA/IHRoaXMubnpGb3JtYXR0ZXIodmFsdWUpIDogJyc7XG4gICAgdGhpcy5kaXNwbGF5VmFsdWUgPSBkaXNwbGF5VmFsdWU7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9IGAke2Rpc3BsYXlWYWx1ZX1gO1xuICB9XG5cbiAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSBVUF9BUlJPVykge1xuICAgICAgY29uc3QgcmF0aW8gPSB0aGlzLmdldFJhdGlvKGUpO1xuICAgICAgdGhpcy51cChlLCByYXRpbyk7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gRE9XTl9BUlJPVykge1xuICAgICAgY29uc3QgcmF0aW8gPSB0aGlzLmdldFJhdGlvKGUpO1xuICAgICAgdGhpcy5kb3duKGUsIHJhdGlvKTtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBFTlRFUikge1xuICAgICAgdGhpcy51cGRhdGVEaXNwbGF5VmFsdWUodGhpcy52YWx1ZSEpO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXlWYWx1ZSh2YWx1ZSk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBPbkNoYW5nZVR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogT25Ub3VjaGVkVHlwZSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uekRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5mb2N1c1ZpYSh0aGlzLmlucHV0RWxlbWVudCwgJ2tleWJvYXJkJyk7XG4gIH1cblxuICBibHVyKCk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c01vbml0b3IubW9uaXRvcih0aGlzLmVsZW1lbnRSZWYsIHRydWUpLnN1YnNjcmliZShmb2N1c09yaWdpbiA9PiB7XG4gICAgICBpZiAoIWZvY3VzT3JpZ2luKSB7XG4gICAgICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXBkYXRlRGlzcGxheVZhbHVlKHRoaXMudmFsdWUhKTtcbiAgICAgICAgdGhpcy5uekJsdXIuZW1pdCgpO1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMub25Ub3VjaGVkKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm56Rm9jdXMuZW1pdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56Rm9ybWF0dGVyICYmICFjaGFuZ2VzLm56Rm9ybWF0dGVyLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgY29uc3QgdmFsaWRWYWx1ZSA9IHRoaXMuZ2V0Q3VycmVudFZhbGlkVmFsdWUodGhpcy5wYXJzZWRWYWx1ZSEpO1xuICAgICAgdGhpcy5zZXRWYWx1ZSh2YWxpZFZhbHVlKTtcbiAgICAgIHRoaXMudXBkYXRlRGlzcGxheVZhbHVlKHZhbGlkVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekF1dG9Gb2N1cykge1xuICAgICAgdGhpcy5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuZWxlbWVudFJlZik7XG4gIH1cbn1cbiJdfQ==