/**
 * @fileoverview added by tsickle
 * Generated from: rate.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, Output, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean, InputNumber } from 'ng-zorro-antd/core/util';
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'rate';
var NzRateComponent = /** @class */ (function () {
    function NzRateComponent(nzConfigService, renderer, cdr) {
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.cdr = cdr;
        this.nzAllowClear = true;
        this.nzAllowHalf = false;
        this.nzDisabled = false;
        this.nzAutoFocus = false;
        this.nzCount = 5;
        this.nzTooltips = [];
        this.nzOnBlur = new EventEmitter();
        this.nzOnFocus = new EventEmitter();
        this.nzOnHoverChange = new EventEmitter();
        this.nzOnKeyDown = new EventEmitter();
        this.classMap = {};
        this.starArray = [];
        this.starStyleArray = [];
        this.destroy$ = new Subject();
        this.hasHalf = false;
        this.hoverValue = 0;
        this.isFocused = false;
        this._value = 0;
        this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
    }
    Object.defineProperty(NzRateComponent.prototype, "nzValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} input
         * @return {?}
         */
        function (input) {
            if (this._value === input) {
                return;
            }
            this._value = input;
            this.hasHalf = !Number.isInteger(input);
            this.hoverValue = Math.ceil(input);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NzRateComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzAutoFocus = changes.nzAutoFocus, nzCount = changes.nzCount, nzValue = changes.nzValue;
        if (nzAutoFocus && !nzAutoFocus.isFirstChange()) {
            /** @type {?} */
            var el = (/** @type {?} */ (this.ulElement)).nativeElement;
            if (this.nzAutoFocus && !this.nzDisabled) {
                this.renderer.setAttribute(el, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(el, 'autofocus');
            }
        }
        if (nzCount) {
            this.updateStarArray();
        }
        if (nzValue) {
            this.updateStarStyle();
        }
    };
    /**
     * @return {?}
     */
    NzRateComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.cdr.markForCheck(); }));
    };
    /**
     * @return {?}
     */
    NzRateComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @param {?} index
     * @param {?} isHalf
     * @return {?}
     */
    NzRateComponent.prototype.onItemClick = /**
     * @param {?} index
     * @param {?} isHalf
     * @return {?}
     */
    function (index, isHalf) {
        if (this.nzDisabled) {
            return;
        }
        this.hoverValue = index + 1;
        /** @type {?} */
        var actualValue = isHalf ? index + 0.5 : index + 1;
        if (this.nzValue === actualValue) {
            if (this.nzAllowClear) {
                this.nzValue = 0;
                this.onChange(this.nzValue);
            }
        }
        else {
            this.nzValue = actualValue;
            this.onChange(this.nzValue);
        }
        this.updateStarStyle();
    };
    /**
     * @param {?} index
     * @param {?} isHalf
     * @return {?}
     */
    NzRateComponent.prototype.onItemHover = /**
     * @param {?} index
     * @param {?} isHalf
     * @return {?}
     */
    function (index, isHalf) {
        if (this.nzDisabled || (this.hoverValue === index + 1 && isHalf === this.hasHalf)) {
            return;
        }
        this.hoverValue = index + 1;
        this.hasHalf = isHalf;
        this.nzOnHoverChange.emit(this.hoverValue);
        this.updateStarStyle();
    };
    /**
     * @return {?}
     */
    NzRateComponent.prototype.onRateLeave = /**
     * @return {?}
     */
    function () {
        this.hasHalf = !Number.isInteger(this.nzValue);
        this.hoverValue = Math.ceil(this.nzValue);
        this.updateStarStyle();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzRateComponent.prototype.onFocus = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.isFocused = true;
        this.nzOnFocus.emit(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzRateComponent.prototype.onBlur = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.isFocused = false;
        this.nzOnBlur.emit(e);
    };
    /**
     * @return {?}
     */
    NzRateComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        (/** @type {?} */ (this.ulElement)).nativeElement.focus();
    };
    /**
     * @return {?}
     */
    NzRateComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        (/** @type {?} */ (this.ulElement)).nativeElement.blur();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzRateComponent.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var oldVal = this.nzValue;
        if (e.keyCode === RIGHT_ARROW && this.nzValue < this.nzCount) {
            this.nzValue += this.nzAllowHalf ? 0.5 : 1;
        }
        else if (e.keyCode === LEFT_ARROW && this.nzValue > 0) {
            this.nzValue -= this.nzAllowHalf ? 0.5 : 1;
        }
        if (oldVal !== this.nzValue) {
            this.onChange(this.nzValue);
            this.nzOnKeyDown.emit(e);
            this.updateStarStyle();
            this.cdr.markForCheck();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzRateComponent.prototype.updateStarArray = /**
     * @private
     * @return {?}
     */
    function () {
        this.starArray = Array(this.nzCount)
            .fill(0)
            .map((/**
         * @param {?} _
         * @param {?} i
         * @return {?}
         */
        function (_, i) { return i; }));
        this.updateStarStyle();
    };
    /**
     * @private
     * @return {?}
     */
    NzRateComponent.prototype.updateStarStyle = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.starStyleArray = this.starArray.map((/**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            var _a;
            /** @type {?} */
            var prefix = 'ant-rate-star';
            /** @type {?} */
            var value = i + 1;
            return _a = {},
                _a[prefix + "-full"] = value < _this.hoverValue || (!_this.hasHalf && value === _this.hoverValue),
                _a[prefix + "-half"] = _this.hasHalf && value === _this.hoverValue,
                _a[prefix + "-active"] = _this.hasHalf && value === _this.hoverValue,
                _a[prefix + "-zero"] = value > _this.hoverValue,
                _a[prefix + "-focused"] = _this.hasHalf && value === _this.hoverValue && _this.isFocused,
                _a;
        }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzRateComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.nzValue = value || 0;
        this.updateStarArray();
        this.cdr.markForCheck();
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzRateComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzRateComponent.prototype.registerOnChange = /**
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
    NzRateComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    NzRateComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-rate',
                    exportAs: 'nzRate',
                    preserveWhitespaces: false,
                    template: "\n    <ul\n      #ulElement\n      class=\"ant-rate\"\n      [class.ant-rate-disabled]=\"nzDisabled\"\n      [ngClass]=\"classMap\"\n      (blur)=\"onBlur($event)\"\n      (focus)=\"onFocus($event)\"\n      (keydown)=\"onKeyDown($event); $event.preventDefault()\"\n      (mouseleave)=\"onRateLeave(); $event.stopPropagation()\"\n      [tabindex]=\"nzDisabled ? -1 : 1\"\n    >\n      <li\n        *ngFor=\"let star of starArray; let i = index\"\n        class=\"ant-rate-star\"\n        [ngClass]=\"starStyleArray[i] || ''\"\n        nz-tooltip\n        [nzTooltipTitle]=\"nzTooltips[i]\"\n      >\n        <div\n          nz-rate-item\n          [allowHalf]=\"nzAllowHalf\"\n          [character]=\"nzCharacter\"\n          (itemHover)=\"onItemHover(i, $event)\"\n          (itemClick)=\"onItemClick(i, $event)\"\n        ></div>\n      </li>\n    </ul>\n  ",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzRateComponent; })),
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    NzRateComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    NzRateComponent.propDecorators = {
        ulElement: [{ type: ViewChild, args: ['ulElement', { static: false },] }],
        nzAllowClear: [{ type: Input }],
        nzAllowHalf: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzAutoFocus: [{ type: Input }],
        nzCharacter: [{ type: Input }],
        nzCount: [{ type: Input }],
        nzTooltips: [{ type: Input }],
        nzOnBlur: [{ type: Output }],
        nzOnFocus: [{ type: Output }],
        nzOnHoverChange: [{ type: Output }],
        nzOnKeyDown: [{ type: Output }]
    };
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzRateComponent.prototype, "nzAllowClear", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzRateComponent.prototype, "nzAllowHalf", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzRateComponent.prototype, "nzDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzRateComponent.prototype, "nzAutoFocus", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], NzRateComponent.prototype, "nzCount", void 0);
    return NzRateComponent;
}());
export { NzRateComponent };
if (false) {
    /** @type {?} */
    NzRateComponent.ngAcceptInputType_nzAllowClear;
    /** @type {?} */
    NzRateComponent.ngAcceptInputType_nzAllowHalf;
    /** @type {?} */
    NzRateComponent.ngAcceptInputType_nzDisabled;
    /** @type {?} */
    NzRateComponent.ngAcceptInputType_nzAutoFocus;
    /** @type {?} */
    NzRateComponent.ngAcceptInputType_nzCount;
    /**
     * @type {?}
     * @private
     */
    NzRateComponent.prototype.ulElement;
    /** @type {?} */
    NzRateComponent.prototype.nzAllowClear;
    /** @type {?} */
    NzRateComponent.prototype.nzAllowHalf;
    /** @type {?} */
    NzRateComponent.prototype.nzDisabled;
    /** @type {?} */
    NzRateComponent.prototype.nzAutoFocus;
    /** @type {?} */
    NzRateComponent.prototype.nzCharacter;
    /** @type {?} */
    NzRateComponent.prototype.nzCount;
    /** @type {?} */
    NzRateComponent.prototype.nzTooltips;
    /** @type {?} */
    NzRateComponent.prototype.nzOnBlur;
    /** @type {?} */
    NzRateComponent.prototype.nzOnFocus;
    /** @type {?} */
    NzRateComponent.prototype.nzOnHoverChange;
    /** @type {?} */
    NzRateComponent.prototype.nzOnKeyDown;
    /** @type {?} */
    NzRateComponent.prototype.classMap;
    /** @type {?} */
    NzRateComponent.prototype.starArray;
    /** @type {?} */
    NzRateComponent.prototype.starStyleArray;
    /**
     * @type {?}
     * @private
     */
    NzRateComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzRateComponent.prototype.hasHalf;
    /**
     * @type {?}
     * @private
     */
    NzRateComponent.prototype.hoverValue;
    /**
     * @type {?}
     * @private
     */
    NzRateComponent.prototype.isFocused;
    /**
     * @type {?}
     * @private
     */
    NzRateComponent.prototype._value;
    /** @type {?} */
    NzRateComponent.prototype.onChange;
    /** @type {?} */
    NzRateComponent.prototype.onTouched;
    /** @type {?} */
    NzRateComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzRateComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzRateComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3JhdGUvIiwic291cmNlcyI6WyJyYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFeEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7SUFFOUQsd0JBQXdCLEdBQUcsTUFBTTtBQUV2QztJQXdGRSx5QkFBbUIsZUFBZ0MsRUFBVSxRQUFtQixFQUFVLEdBQXNCO1FBQTdGLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQXBDakQsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFDN0IsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDbkUsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUU5QixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ25DLGVBQVUsR0FBYSxFQUFFLENB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dXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IExFRlRfQVJST1csIFJJR0hUX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTmdDbGFzc1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAncmF0ZSc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICduei1yYXRlJyxcbiAgZXhwb3J0QXM6ICduelJhdGUnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8dWxcbiAgICAgICN1bEVsZW1lbnRcbiAgICAgIGNsYXNzPVwiYW50LXJhdGVcIlxuICAgICAgW2NsYXNzLmFudC1yYXRlLWRpc2FibGVkXT1cIm56RGlzYWJsZWRcIlxuICAgICAgW25nQ2xhc3NdPVwiY2xhc3NNYXBcIlxuICAgICAgKGJsdXIpPVwib25CbHVyKCRldmVudClcIlxuICAgICAgKGZvY3VzKT1cIm9uRm9jdXMoJGV2ZW50KVwiXG4gICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KTsgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIlxuICAgICAgKG1vdXNlbGVhdmUpPVwib25SYXRlTGVhdmUoKTsgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCJcbiAgICAgIFt0YWJpbmRleF09XCJuekRpc2FibGVkID8gLTEgOiAxXCJcbiAgICA+XG4gICAgICA8bGlcbiAgICAgICAgKm5nRm9yPVwibGV0IHN0YXIgb2Ygc3RhckFycmF5OyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgY2xhc3M9XCJhbnQtcmF0ZS1zdGFyXCJcbiAgICAgICAgW25nQ2xhc3NdPVwic3RhclN0eWxlQXJyYXlbaV0gfHwgJydcIlxuICAgICAgICBuei10b29sdGlwXG4gICAgICAgIFtuelRvb2x0aXBUaXRsZV09XCJuelRvb2x0aXBzW2ldXCJcbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIG56LXJhdGUtaXRlbVxuICAgICAgICAgIFthbGxvd0hhbGZdPVwibnpBbGxvd0hhbGZcIlxuICAgICAgICAgIFtjaGFyYWN0ZXJdPVwibnpDaGFyYWN0ZXJcIlxuICAgICAgICAgIChpdGVtSG92ZXIpPVwib25JdGVtSG92ZXIoaSwgJGV2ZW50KVwiXG4gICAgICAgICAgKGl0ZW1DbGljayk9XCJvbkl0ZW1DbGljayhpLCAkZXZlbnQpXCJcbiAgICAgICAgPjwvZGl2PlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICBgLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56UmF0ZUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOelJhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcyB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekFsbG93Q2xlYXI6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256QWxsb3dIYWxmOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekRpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekF1dG9Gb2N1czogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpDb3VudDogQm9vbGVhbklucHV0O1xuXG4gIEBWaWV3Q2hpbGQoJ3VsRWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIHVsRWxlbWVudD86IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBASW5wdXRCb29sZWFuKCkgbnpBbGxvd0NsZWFyOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBASW5wdXRCb29sZWFuKCkgbnpBbGxvd0hhbGY6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXV0b0ZvY3VzOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56Q2hhcmFjdGVyPzogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56Q291bnQ6IG51bWJlciA9IDU7XG4gIEBJbnB1dCgpIG56VG9vbHRpcHM6IHN0cmluZ1tdID0gW107XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25Gb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25Ib3ZlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbktleURvd24gPSBuZXcgRXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+KCk7XG5cbiAgY2xhc3NNYXA6IE5nQ2xhc3NUeXBlID0ge307XG4gIHN0YXJBcnJheTogbnVtYmVyW10gPSBbXTtcbiAgc3RhclN0eWxlQXJyYXk6IE5nQ2xhc3NUeXBlW10gPSBbXTtcblxuICBwcml2YXRlIHJlYWRvbmx5IGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBoYXNIYWxmID0gZmFsc2U7XG4gIHByaXZhdGUgaG92ZXJWYWx1ZSA9IDA7XG4gIHByaXZhdGUgaXNGb2N1c2VkID0gZmFsc2U7XG4gIHByaXZhdGUgX3ZhbHVlID0gMDtcblxuICBnZXQgbnpWYWx1ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHNldCBuelZhbHVlKGlucHV0OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fdmFsdWUgPT09IGlucHV0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fdmFsdWUgPSBpbnB1dDtcbiAgICB0aGlzLmhhc0hhbGYgPSAhTnVtYmVyLmlzSW50ZWdlcihpbnB1dCk7XG4gICAgdGhpcy5ob3ZlclZhbHVlID0gTWF0aC5jZWlsKGlucHV0KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpBdXRvRm9jdXMsIG56Q291bnQsIG56VmFsdWUgfSA9IGNoYW5nZXM7XG5cbiAgICBpZiAobnpBdXRvRm9jdXMgJiYgIW56QXV0b0ZvY3VzLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLnVsRWxlbWVudCEubmF0aXZlRWxlbWVudDtcbiAgICAgIGlmICh0aGlzLm56QXV0b0ZvY3VzICYmICF0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWwsICdhdXRvZm9jdXMnLCAnYXV0b2ZvY3VzJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZShlbCwgJ2F1dG9mb2N1cycpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuekNvdW50KSB7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXJBcnJheSgpO1xuICAgIH1cblxuICAgIGlmIChuelZhbHVlKSB7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXJTdHlsZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlXG4gICAgICAuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBvbkl0ZW1DbGljayhpbmRleDogbnVtYmVyLCBpc0hhbGY6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5ob3ZlclZhbHVlID0gaW5kZXggKyAxO1xuXG4gICAgY29uc3QgYWN0dWFsVmFsdWUgPSBpc0hhbGYgPyBpbmRleCArIDAuNSA6IGluZGV4ICsgMTtcblxuICAgIGlmICh0aGlzLm56VmFsdWUgPT09IGFjdHVhbFZhbHVlKSB7XG4gICAgICBpZiAodGhpcy5uekFsbG93Q2xlYXIpIHtcbiAgICAgICAgdGhpcy5uelZhbHVlID0gMDtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLm56VmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm56VmFsdWUgPSBhY3R1YWxWYWx1ZTtcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5uelZhbHVlKTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVN0YXJTdHlsZSgpO1xuICB9XG5cbiAgb25JdGVtSG92ZXIoaW5kZXg6IG51bWJlciwgaXNIYWxmOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCB8fCAodGhpcy5ob3ZlclZhbHVlID09PSBpbmRleCArIDEgJiYgaXNIYWxmID09PSB0aGlzLmhhc0hhbGYpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5ob3ZlclZhbHVlID0gaW5kZXggKyAxO1xuICAgIHRoaXMuaGFzSGFsZiA9IGlzSGFsZjtcbiAgICB0aGlzLm56T25Ib3ZlckNoYW5nZS5lbWl0KHRoaXMuaG92ZXJWYWx1ZSk7XG5cbiAgICB0aGlzLnVwZGF0ZVN0YXJTdHlsZSgpO1xuICB9XG5cbiAgb25SYXRlTGVhdmUoKTogdm9pZCB7XG4gICAgdGhpcy5oYXNIYWxmID0gIU51bWJlci5pc0ludGVnZXIodGhpcy5uelZhbHVlKTtcbiAgICB0aGlzLmhvdmVyVmFsdWUgPSBNYXRoLmNlaWwodGhpcy5uelZhbHVlKTtcblxuICAgIHRoaXMudXBkYXRlU3RhclN0eWxlKCk7XG4gIH1cblxuICBvbkZvY3VzKGU6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XG4gICAgdGhpcy5uek9uRm9jdXMuZW1pdChlKTtcbiAgfVxuXG4gIG9uQmx1cihlOiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcbiAgICB0aGlzLm56T25CbHVyLmVtaXQoZSk7XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLnVsRWxlbWVudCEubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgYmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLnVsRWxlbWVudCEubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gIH1cblxuICBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IG9sZFZhbCA9IHRoaXMubnpWYWx1ZTtcblxuICAgIGlmIChlLmtleUNvZGUgPT09IFJJR0hUX0FSUk9XICYmIHRoaXMubnpWYWx1ZSA8IHRoaXMubnpDb3VudCkge1xuICAgICAgdGhpcy5uelZhbHVlICs9IHRoaXMubnpBbGxvd0hhbGYgPyAwLjUgOiAxO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBMRUZUX0FSUk9XICYmIHRoaXMubnpWYWx1ZSA+IDApIHtcbiAgICAgIHRoaXMubnpWYWx1ZSAtPSB0aGlzLm56QWxsb3dIYWxmID8gMC41IDogMTtcbiAgICB9XG5cbiAgICBpZiAob2xkVmFsICE9PSB0aGlzLm56VmFsdWUpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5uelZhbHVlKTtcbiAgICAgIHRoaXMubnpPbktleURvd24uZW1pdChlKTtcbiAgICAgIHRoaXMudXBkYXRlU3RhclN0eWxlKCk7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVN0YXJBcnJheSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXJBcnJheSA9IEFycmF5KHRoaXMubnpDb3VudClcbiAgICAgIC5maWxsKDApXG4gICAgICAubWFwKChfLCBpKSA9PiBpKTtcblxuICAgIHRoaXMudXBkYXRlU3RhclN0eWxlKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVN0YXJTdHlsZSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXJTdHlsZUFycmF5ID0gdGhpcy5zdGFyQXJyYXkubWFwKGkgPT4ge1xuICAgICAgY29uc3QgcHJlZml4ID0gJ2FudC1yYXRlLXN0YXInO1xuICAgICAgY29uc3QgdmFsdWUgPSBpICsgMTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtgJHtwcmVmaXh9LWZ1bGxgXTogdmFsdWUgPCB0aGlzLmhvdmVyVmFsdWUgfHwgKCF0aGlzLmhhc0hhbGYgJiYgdmFsdWUgPT09IHRoaXMuaG92ZXJWYWx1ZSksXG4gICAgICAgIFtgJHtwcmVmaXh9LWhhbGZgXTogdGhpcy5oYXNIYWxmICYmIHZhbHVlID09PSB0aGlzLmhvdmVyVmFsdWUsXG4gICAgICAgIFtgJHtwcmVmaXh9LWFjdGl2ZWBdOiB0aGlzLmhhc0hhbGYgJiYgdmFsdWUgPT09IHRoaXMuaG92ZXJWYWx1ZSxcbiAgICAgICAgW2Ake3ByZWZpeH0temVyb2BdOiB2YWx1ZSA+IHRoaXMuaG92ZXJWYWx1ZSxcbiAgICAgICAgW2Ake3ByZWZpeH0tZm9jdXNlZGBdOiB0aGlzLmhhc0hhbGYgJiYgdmFsdWUgPT09IHRoaXMuaG92ZXJWYWx1ZSAmJiB0aGlzLmlzRm9jdXNlZFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlciB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLm56VmFsdWUgPSB2YWx1ZSB8fCAwO1xuICAgIHRoaXMudXBkYXRlU3RhckFycmF5KCk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIG9uQ2hhbmdlOiAodmFsdWU6IG51bWJlcikgPT4gdm9pZCA9ICgpID0+IG51bGw7XG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XG59XG4iXX0=