/**
 * @fileoverview added by tsickle
 * Generated from: time-picker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { slideMotion } from 'ng-zorro-antd/core/animation';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { warn } from 'ng-zorro-antd/core/logger';
import { InputBoolean, isNil } from 'ng-zorro-antd/core/util';
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'timePicker';
var NzTimePickerComponent = /** @class */ (function () {
    function NzTimePickerComponent(nzConfigService, element, renderer, cdr) {
        this.nzConfigService = nzConfigService;
        this.element = element;
        this.renderer = renderer;
        this.cdr = cdr;
        this.isInit = false;
        this.focused = false;
        this.value = null;
        this.overlayPositions = [
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top',
                offsetY: 3
            }
        ];
        this.nzSize = null;
        this.nzHourStep = 1;
        this.nzMinuteStep = 1;
        this.nzSecondStep = 1;
        this.nzClearText = 'clear';
        this.nzPopupClassName = '';
        this.nzPlaceHolder = '';
        this.nzFormat = 'HH:mm:ss';
        this.nzOpen = false;
        this.nzUse12Hours = false;
        this.nzSuffixIcon = 'clock-circle';
        this.nzOpenChange = new EventEmitter();
        this.nzHideDisabledOptions = false;
        this.nzAllowEmpty = true;
        this.nzDisabled = false;
        this.nzAutoFocus = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NzTimePickerComponent.prototype.setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value ? new Date(value) : null;
        if (this._onChange) {
            this._onChange(this.value);
        }
        if (this._onTouched) {
            this._onTouched();
        }
    };
    /**
     * @return {?}
     */
    NzTimePickerComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        if (this.nzDisabled) {
            return;
        }
        this.focus();
        this.nzOpen = true;
        this.nzOpenChange.emit(this.nzOpen);
    };
    /**
     * @return {?}
     */
    NzTimePickerComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.nzOpen = false;
        this.cdr.markForCheck();
        this.nzOpenChange.emit(this.nzOpen);
    };
    /**
     * @return {?}
     */
    NzTimePickerComponent.prototype.updateAutoFocus = /**
     * @return {?}
     */
    function () {
        if (this.isInit && !this.nzDisabled) {
            if (this.nzAutoFocus) {
                this.renderer.setAttribute(this.inputRef.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.inputRef.nativeElement, 'autofocus');
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzTimePickerComponent.prototype.onClickClearBtn = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.setValue(null);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTimePickerComponent.prototype.onFocus = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.focused = value;
    };
    /**
     * @return {?}
     */
    NzTimePickerComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        if (this.inputRef.nativeElement) {
            this.inputRef.nativeElement.focus();
        }
    };
    /**
     * @return {?}
     */
    NzTimePickerComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        if (this.inputRef.nativeElement) {
            this.inputRef.nativeElement.blur();
        }
    };
    /**
     * @return {?}
     */
    NzTimePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.inputSize = Math.max(8, this.nzFormat.length) + 2;
        this.origin = new CdkOverlayOrigin(this.element);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTimePickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzUse12Hours = changes.nzUse12Hours, nzFormat = changes.nzFormat, nzDisabled = changes.nzDisabled, nzAutoFocus = changes.nzAutoFocus;
        if (nzUse12Hours && !nzUse12Hours.previousValue && nzUse12Hours.currentValue && !nzFormat) {
            this.nzFormat = 'h:mm:ss a';
        }
        if (nzDisabled) {
            /** @type {?} */
            var value = nzDisabled.currentValue;
            /** @type {?} */
            var input = (/** @type {?} */ (this.inputRef.nativeElement));
            if (value) {
                this.renderer.setAttribute(input, 'disabled', '');
            }
            else {
                this.renderer.removeAttribute(input, 'disabled');
            }
        }
        if (nzAutoFocus) {
            this.updateAutoFocus();
        }
    };
    /**
     * @return {?}
     */
    NzTimePickerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.isInit = true;
        this.updateAutoFocus();
    };
    /**
     * @param {?} time
     * @return {?}
     */
    NzTimePickerComponent.prototype.writeValue = /**
     * @param {?} time
     * @return {?}
     */
    function (time) {
        if (time instanceof Date) {
            this.value = time;
        }
        else if (isNil(time)) {
            this.value = null;
        }
        else {
            warn('Non-Date type is not recommended for time-picker, use "Date" type.');
            this.value = new Date(time);
        }
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTimePickerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTimePickerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzTimePickerComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    NzTimePickerComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'nz-time-picker',
                    exportAs: 'nzTimePicker',
                    template: "\n    <div class=\"ant-picker-input\">\n      <input\n        #inputElement\n        type=\"text\"\n        [size]=\"inputSize\"\n        [nzTime]=\"nzFormat\"\n        [placeholder]=\"nzPlaceHolder || ('TimePicker.placeholder' | nzI18n)\"\n        [(ngModel)]=\"value\"\n        [disabled]=\"nzDisabled\"\n        (focus)=\"onFocus(true)\"\n        (blur)=\"onFocus(false)\"\n      />\n      <span class=\"ant-picker-suffix\">\n        <ng-container *nzStringTemplateOutlet=\"nzSuffixIcon; let suffixIcon\">\n          <i nz-icon [nzType]=\"suffixIcon\"></i>\n        </ng-container>\n      </span>\n      <span *ngIf=\"nzAllowEmpty && value\" class=\"ant-picker-clear\" (click)=\"onClickClearBtn($event)\">\n        <i nz-icon nzType=\"close-circle\" nzTheme=\"fill\" [attr.aria-label]=\"nzClearText\" [attr.title]=\"nzClearText\"></i>\n      </span>\n    </div>\n\n    <ng-template\n      cdkConnectedOverlay\n      nzConnectedOverlay\n      cdkConnectedOverlayHasBackdrop\n      [cdkConnectedOverlayPositions]=\"overlayPositions\"\n      [cdkConnectedOverlayOrigin]=\"origin\"\n      [cdkConnectedOverlayOpen]=\"nzOpen\"\n      [cdkConnectedOverlayOffsetY]=\"-2\"\n      [cdkConnectedOverlayTransformOriginOn]=\"'.ant-picker-dropdown'\"\n      (detach)=\"close()\"\n      (backdropClick)=\"close()\"\n    >\n      <div [@slideMotion]=\"'enter'\" class=\"ant-picker-dropdown\">\n        <div class=\"ant-picker-panel-container\">\n          <div tabindex=\"-1\" class=\"ant-picker-panel\">\n            <nz-time-picker-panel\n              [ngClass]=\"nzPopupClassName\"\n              [format]=\"nzFormat\"\n              [nzHourStep]=\"nzHourStep\"\n              [nzMinuteStep]=\"nzMinuteStep\"\n              [nzSecondStep]=\"nzSecondStep\"\n              [nzDisabledHours]=\"nzDisabledHours\"\n              [nzDisabledMinutes]=\"nzDisabledMinutes\"\n              [nzDisabledSeconds]=\"nzDisabledSeconds\"\n              [nzPlaceHolder]=\"nzPlaceHolder || ('TimePicker.placeholder' | nzI18n)\"\n              [nzHideDisabledOptions]=\"nzHideDisabledOptions\"\n              [nzUse12Hours]=\"nzUse12Hours\"\n              [nzDefaultOpenValue]=\"nzDefaultOpenValue\"\n              [nzAddOn]=\"nzAddOn\"\n              [nzClearText]=\"nzClearText\"\n              [nzAllowEmpty]=\"nzAllowEmpty\"\n              [(ngModel)]=\"value\"\n              (ngModelChange)=\"setValue($event)\"\n              (closePanel)=\"close()\"\n            >\n            </nz-time-picker-panel>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  ",
                    host: {
                        '[class.ant-picker]': "true",
                        '[class.ant-picker-large]': "nzSize === 'large'",
                        '[class.ant-picker-small]': "nzSize === 'small'",
                        '[class.ant-picker-disabled]': "nzDisabled",
                        '[class.ant-picker-focused]': "focused",
                        '(click)': 'open()'
                    },
                    animations: [slideMotion],
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: NzTimePickerComponent, multi: true }]
                }] }
    ];
    /** @nocollapse */
    NzTimePickerComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    NzTimePickerComponent.propDecorators = {
        inputRef: [{ type: ViewChild, args: ['inputElement', { static: true },] }],
        nzSize: [{ type: Input }],
        nzHourStep: [{ type: Input }],
        nzMinuteStep: [{ type: Input }],
        nzSecondStep: [{ type: Input }],
        nzClearText: [{ type: Input }],
        nzPopupClassName: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        nzAddOn: [{ type: Input }],
        nzDefaultOpenValue: [{ type: Input }],
        nzDisabledHours: [{ type: Input }],
        nzDisabledMinutes: [{ type: Input }],
        nzDisabledSeconds: [{ type: Input }],
        nzFormat: [{ type: Input }],
        nzOpen: [{ type: Input }],
        nzUse12Hours: [{ type: Input }],
        nzSuffixIcon: [{ type: Input }],
        nzOpenChange: [{ type: Output }],
        nzHideDisabledOptions: [{ type: Input }],
        nzAllowEmpty: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzAutoFocus: [{ type: Input }]
    };
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", Number)
    ], NzTimePickerComponent.prototype, "nzHourStep", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", Number)
    ], NzTimePickerComponent.prototype, "nzMinuteStep", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", Number)
    ], NzTimePickerComponent.prototype, "nzSecondStep", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", String)
    ], NzTimePickerComponent.prototype, "nzClearText", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", String)
    ], NzTimePickerComponent.prototype, "nzPopupClassName", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", String)
    ], NzTimePickerComponent.prototype, "nzFormat", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTimePickerComponent.prototype, "nzUse12Hours", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", Object)
    ], NzTimePickerComponent.prototype, "nzSuffixIcon", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTimePickerComponent.prototype, "nzHideDisabledOptions", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTimePickerComponent.prototype, "nzAllowEmpty", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTimePickerComponent.prototype, "nzDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTimePickerComponent.prototype, "nzAutoFocus", void 0);
    return NzTimePickerComponent;
}());
export { NzTimePickerComponent };
if (false) {
    /** @type {?} */
    NzTimePickerComponent.ngAcceptInputType_nzUse12Hours;
    /** @type {?} */
    NzTimePickerComponent.ngAcceptInputType_nzHideDisabledOptions;
    /** @type {?} */
    NzTimePickerComponent.ngAcceptInputType_nzAllowEmpty;
    /** @type {?} */
    NzTimePickerComponent.ngAcceptInputType_nzDisabled;
    /** @type {?} */
    NzTimePickerComponent.ngAcceptInputType_nzAutoFocus;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerComponent.prototype._onChange;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerComponent.prototype._onTouched;
    /** @type {?} */
    NzTimePickerComponent.prototype.isInit;
    /** @type {?} */
    NzTimePickerComponent.prototype.focused;
    /** @type {?} */
    NzTimePickerComponent.prototype.value;
    /** @type {?} */
    NzTimePickerComponent.prototype.origin;
    /** @type {?} */
    NzTimePickerComponent.prototype.inputSize;
    /** @type {?} */
    NzTimePickerComponent.prototype.overlayPositions;
    /** @type {?} */
    NzTimePickerComponent.prototype.inputRef;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzSize;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzHourStep;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzMinuteStep;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzSecondStep;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzClearText;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzPopupClassName;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzAddOn;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzDefaultOpenValue;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzDisabledHours;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzDisabledMinutes;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzDisabledSeconds;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzFormat;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzOpen;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzUse12Hours;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzSuffixIcon;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzOpenChange;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzHideDisabledOptions;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzAllowEmpty;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzDisabled;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzAutoFocus;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerComponent.prototype.element;
    /**
     * @type {?}
     * @private
     */
    NzTimePickerComponent.prototype.renderer;
    /** @type {?} */
    NzTimePickerComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90aW1lLXBpY2tlci8iLCJzb3VyY2VzIjpbInRpbWUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLGdCQUFnQixFQUEwQixNQUFNLHNCQUFzQixDQUFDO0FBQ2hGLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUVULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFakQsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7SUFFeEQsd0JBQXdCLEdBQUcsWUFBWTtBQUU3QztJQXlMRSwrQkFDUyxlQUFnQyxFQUMvQixPQUFtQixFQUNuQixRQUFtQixFQUNwQixHQUFzQjtRQUh0QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDL0IsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ3BCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBcEcvQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixVQUFLLEdBQWdCLElBQUksQ0FBQztRQUcxQixxQkFBZ0IsR0FBNkI7WUFDM0M7Z0JBQ0UsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixRQUFRLEVBQUUsT0FBTztnQkFDakIsUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsT0FBTyxFQUFFLENBQUM7YUFDWDtTQUNGLENBQUM7UUFHTyxXQUFNLEdBQWtCLElBQUksQ0FBQztRQUNTLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsZ0JBQVcsR0FBVyxPQUFPLENBQUM7UUFDOUIscUJBQWdCLEdBQVcsRUFBRSxDQUFDO1FBQ3BFLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBTW1CLGFBQVEsR0FBVyxVQUFVLENBQUM7UUFDcEUsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUN1QyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QyxpQkFBWSxHQUFvQyxjQUFjLENBQUM7UUFFM0YsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRXJDLDBCQUFxQixHQUFHLEtBQUssQ0FBQztRQUNRLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBQ25FLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7SUErRDFDLENBQUM7Ozs7O0lBN0RKLHdDQUFROzs7O0lBQVIsVUFBUyxLQUFrQjtRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM1QyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUI7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQzs7OztJQUVELG9DQUFJOzs7SUFBSjtRQUNFLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELHFDQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCwrQ0FBZTs7O0lBQWY7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25DLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQ25GO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQ3pFO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVELCtDQUFlOzs7O0lBQWYsVUFBZ0IsS0FBaUI7UUFDL0IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCx1Q0FBTzs7OztJQUFQLFVBQVEsS0FBYztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQscUNBQUs7OztJQUFMO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRTtZQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNyQztJQUNILENBQUM7Ozs7SUFFRCxvQ0FBSTs7O0lBQUo7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFO1lBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7OztJQVNELHdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7OztJQUVELDJDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUN4QixJQUFBLG1DQUFZLEVBQUUsMkJBQVEsRUFBRSwrQkFBVSxFQUFFLGlDQUFXO1FBQ3ZELElBQUksWUFBWSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsSUFBSSxZQUFZLENBQUMsWUFBWSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3pGLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxVQUFVLEVBQUU7O2dCQUNSLEtBQUssR0FBRyxVQUFVLENBQUMsWUFBWTs7Z0JBQy9CLEtBQUssR0FBRyxtQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBb0I7WUFDN0QsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNuRDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDbEQ7U0FDRjtRQUNELElBQUksV0FBVyxFQUFFO1lBQ2YsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7OztJQUVELCtDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELDBDQUFVOzs7O0lBQVYsVUFBVyxJQUE2QjtRQUN0QyxJQUFJLElBQUksWUFBWSxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDbkI7YUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNuQjthQUFNO1lBQ0wsSUFBSSxDQUFDLG9FQUFvRSxDQUFDLENBQUM7WUFDM0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM3QjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxnREFBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBK0I7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxpREFBaUI7Ozs7SUFBakIsVUFBa0IsRUFBYztRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELGdEQUFnQjs7OztJQUFoQixVQUFpQixVQUFtQjtRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7O2dCQXBQRixTQUFTLFNBQUM7b0JBQ1QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLDYvRUErRFQ7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLG9CQUFvQixFQUFFLE1BQU07d0JBQzVCLDBCQUEwQixFQUFFLG9CQUFvQjt3QkFDaEQsMEJBQTBCLEVBQUUsb0JBQW9CO3dCQUNoRCw2QkFBNkIsRUFBRSxZQUFZO3dCQUMzQyw0QkFBNEIsRUFBRSxTQUFTO3dCQUN2QyxTQUFTLEVBQUUsUUFBUTtxQkFDcEI7b0JBQ0QsVUFBVSxFQUFFLENBQUMsV0FBVyxDQUFDO29CQUN6QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUscUJBQXFCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO2lCQUM3Rjs7OztnQkF0RlEsZUFBZTtnQkFmdEIsVUFBVTtnQkFNVixTQUFTO2dCQVJULGlCQUFpQjs7OzJCQWdJaEIsU0FBUyxTQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7eUJBQzFDLEtBQUs7NkJBQ0wsS0FBSzsrQkFDTCxLQUFLOytCQUNMLEtBQUs7OEJBQ0wsS0FBSzttQ0FDTCxLQUFLO2dDQUNMLEtBQUs7MEJBQ0wsS0FBSztxQ0FDTCxLQUFLO2tDQUNMLEtBQUs7b0NBQ0wsS0FBSztvQ0FDTCxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSzsrQkFDTCxLQUFLOytCQUNMLEtBQUs7K0JBRUwsTUFBTTt3Q0FFTixLQUFLOytCQUNMLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLOztJQXJCeUM7UUFBckMsVUFBVSxDQUFDLHdCQUF3QixDQUFDOzs2REFBd0I7SUFDdkI7UUFBckMsVUFBVSxDQUFDLHdCQUF3QixDQUFDOzsrREFBMEI7SUFDekI7UUFBckMsVUFBVSxDQUFDLHdCQUF3QixDQUFDOzsrREFBMEI7SUFDekI7UUFBckMsVUFBVSxDQUFDLHdCQUF3QixDQUFDOzs4REFBK0I7SUFDOUI7UUFBckMsVUFBVSxDQUFDLHdCQUF3QixDQUFDOzttRUFBK0I7SUFPOUI7UUFBckMsVUFBVSxDQUFDLHdCQUF3QixDQUFDOzsyREFBK0I7SUFFZDtRQUFyRCxVQUFVLENBQUMsd0JBQXdCLENBQUMsRUFBRSxZQUFZLEVBQUU7OytEQUErQjtJQUM5QztRQUFyQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7OytEQUFnRTtJQUlyRjtRQUFmLFlBQVksRUFBRTs7d0VBQStCO0lBQ1E7UUFBckQsVUFBVSxDQUFDLHdCQUF3QixDQUFDLEVBQUUsWUFBWSxFQUFFOzsrREFBOEI7SUFDbkU7UUFBZixZQUFZLEVBQUU7OzZEQUFvQjtJQUNuQjtRQUFmLFlBQVksRUFBRTs7OERBQXFCO0lBc0gvQyw0QkFBQztDQUFBLEFBclBELElBcVBDO1NBcktZLHFCQUFxQjs7O0lBQ2hDLHFEQUFvRDs7SUFDcEQsOERBQTZEOztJQUM3RCxxREFBb0Q7O0lBQ3BELG1EQUFrRDs7SUFDbEQsb0RBQW1EOzs7OztJQUVuRCwwQ0FBaUQ7Ozs7O0lBQ2pELDJDQUFnQzs7SUFDaEMsdUNBQWU7O0lBQ2Ysd0NBQWdCOztJQUNoQixzQ0FBMEI7O0lBQzFCLHVDQUEwQjs7SUFDMUIsMENBQW1COztJQUNuQixpREFRRTs7SUFFRix5Q0FBcUY7O0lBQ3JGLHVDQUFzQzs7SUFDdEMsMkNBQXNFOztJQUN0RSw2Q0FBd0U7O0lBQ3hFLDZDQUF3RTs7SUFDeEUsNENBQTZFOztJQUM3RSxpREFBNkU7O0lBQzdFLDhDQUE0Qjs7SUFDNUIsd0NBQXFDOztJQUNyQyxtREFBbUM7O0lBQ25DLGdEQUEwQzs7SUFDMUMsa0RBQXdEOztJQUN4RCxrREFBd0U7O0lBQ3hFLHlDQUE2RTs7SUFDN0UsdUNBQXdCOztJQUN4Qiw2Q0FBNkY7O0lBQzdGLDZDQUE4Rzs7SUFFOUcsNkNBQThEOztJQUU5RCxzREFBdUQ7O0lBQ3ZELDZDQUE0Rjs7SUFDNUYsMkNBQTRDOztJQUM1Qyw0Q0FBNkM7O0lBMkQzQyxnREFBdUM7Ozs7O0lBQ3ZDLHdDQUEyQjs7Ozs7SUFDM0IseUNBQTJCOztJQUMzQixvQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDZGtPdmVybGF5T3JpZ2luLCBDb25uZWN0aW9uUG9zaXRpb25QYWlyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBzbGlkZU1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xuXG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IHdhcm4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbG9nZ2VyJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgaXNOaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICd0aW1lUGlja2VyJztcblxuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzZWxlY3RvcjogJ256LXRpbWUtcGlja2VyJyxcbiAgZXhwb3J0QXM6ICduelRpbWVQaWNrZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJhbnQtcGlja2VyLWlucHV0XCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgI2lucHV0RWxlbWVudFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIFtzaXplXT1cImlucHV0U2l6ZVwiXG4gICAgICAgIFtuelRpbWVdPVwibnpGb3JtYXRcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwibnpQbGFjZUhvbGRlciB8fCAoJ1RpbWVQaWNrZXIucGxhY2Vob2xkZXInIHwgbnpJMThuKVwiXG4gICAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxuICAgICAgICBbZGlzYWJsZWRdPVwibnpEaXNhYmxlZFwiXG4gICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKHRydWUpXCJcbiAgICAgICAgKGJsdXIpPVwib25Gb2N1cyhmYWxzZSlcIlxuICAgICAgLz5cbiAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXBpY2tlci1zdWZmaXhcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56U3VmZml4SWNvbjsgbGV0IHN1ZmZpeEljb25cIj5cbiAgICAgICAgICA8aSBuei1pY29uIFtuelR5cGVdPVwic3VmZml4SWNvblwiPjwvaT5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhbiAqbmdJZj1cIm56QWxsb3dFbXB0eSAmJiB2YWx1ZVwiIGNsYXNzPVwiYW50LXBpY2tlci1jbGVhclwiIChjbGljayk9XCJvbkNsaWNrQ2xlYXJCdG4oJGV2ZW50KVwiPlxuICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImNsb3NlLWNpcmNsZVwiIG56VGhlbWU9XCJmaWxsXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJuekNsZWFyVGV4dFwiIFthdHRyLnRpdGxlXT1cIm56Q2xlYXJUZXh0XCI+PC9pPlxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuXG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBjZGtDb25uZWN0ZWRPdmVybGF5XG4gICAgICBuekNvbm5lY3RlZE92ZXJsYXlcbiAgICAgIGNka0Nvbm5lY3RlZE92ZXJsYXlIYXNCYWNrZHJvcFxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnNdPVwib3ZlcmxheVBvc2l0aW9uc1wiXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJvcmlnaW5cIlxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cIm56T3BlblwiXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9mZnNldFldPVwiLTJcIlxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlUcmFuc2Zvcm1PcmlnaW5Pbl09XCInLmFudC1waWNrZXItZHJvcGRvd24nXCJcbiAgICAgIChkZXRhY2gpPVwiY2xvc2UoKVwiXG4gICAgICAoYmFja2Ryb3BDbGljayk9XCJjbG9zZSgpXCJcbiAgICA+XG4gICAgICA8ZGl2IFtAc2xpZGVNb3Rpb25dPVwiJ2VudGVyJ1wiIGNsYXNzPVwiYW50LXBpY2tlci1kcm9wZG93blwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXBpY2tlci1wYW5lbC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IHRhYmluZGV4PVwiLTFcIiBjbGFzcz1cImFudC1waWNrZXItcGFuZWxcIj5cbiAgICAgICAgICAgIDxuei10aW1lLXBpY2tlci1wYW5lbFxuICAgICAgICAgICAgICBbbmdDbGFzc109XCJuelBvcHVwQ2xhc3NOYW1lXCJcbiAgICAgICAgICAgICAgW2Zvcm1hdF09XCJuekZvcm1hdFwiXG4gICAgICAgICAgICAgIFtuekhvdXJTdGVwXT1cIm56SG91clN0ZXBcIlxuICAgICAgICAgICAgICBbbnpNaW51dGVTdGVwXT1cIm56TWludXRlU3RlcFwiXG4gICAgICAgICAgICAgIFtuelNlY29uZFN0ZXBdPVwibnpTZWNvbmRTdGVwXCJcbiAgICAgICAgICAgICAgW256RGlzYWJsZWRIb3Vyc109XCJuekRpc2FibGVkSG91cnNcIlxuICAgICAgICAgICAgICBbbnpEaXNhYmxlZE1pbnV0ZXNdPVwibnpEaXNhYmxlZE1pbnV0ZXNcIlxuICAgICAgICAgICAgICBbbnpEaXNhYmxlZFNlY29uZHNdPVwibnpEaXNhYmxlZFNlY29uZHNcIlxuICAgICAgICAgICAgICBbbnpQbGFjZUhvbGRlcl09XCJuelBsYWNlSG9sZGVyIHx8ICgnVGltZVBpY2tlci5wbGFjZWhvbGRlcicgfCBuekkxOG4pXCJcbiAgICAgICAgICAgICAgW256SGlkZURpc2FibGVkT3B0aW9uc109XCJuekhpZGVEaXNhYmxlZE9wdGlvbnNcIlxuICAgICAgICAgICAgICBbbnpVc2UxMkhvdXJzXT1cIm56VXNlMTJIb3Vyc1wiXG4gICAgICAgICAgICAgIFtuekRlZmF1bHRPcGVuVmFsdWVdPVwibnpEZWZhdWx0T3BlblZhbHVlXCJcbiAgICAgICAgICAgICAgW256QWRkT25dPVwibnpBZGRPblwiXG4gICAgICAgICAgICAgIFtuekNsZWFyVGV4dF09XCJuekNsZWFyVGV4dFwiXG4gICAgICAgICAgICAgIFtuekFsbG93RW1wdHldPVwibnpBbGxvd0VtcHR5XCJcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxuICAgICAgICAgICAgICAoY2xvc2VQYW5lbCk9XCJjbG9zZSgpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvbnotdGltZS1waWNrZXItcGFuZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXBpY2tlcl0nOiBgdHJ1ZWAsXG4gICAgJ1tjbGFzcy5hbnQtcGlja2VyLWxhcmdlXSc6IGBuelNpemUgPT09ICdsYXJnZSdgLFxuICAgICdbY2xhc3MuYW50LXBpY2tlci1zbWFsbF0nOiBgbnpTaXplID09PSAnc21hbGwnYCxcbiAgICAnW2NsYXNzLmFudC1waWNrZXItZGlzYWJsZWRdJzogYG56RGlzYWJsZWRgLFxuICAgICdbY2xhc3MuYW50LXBpY2tlci1mb2N1c2VkXSc6IGBmb2N1c2VkYCxcbiAgICAnKGNsaWNrKSc6ICdvcGVuKCknXG4gIH0sXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbl0sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBOelRpbWVQaWNrZXJDb21wb25lbnQsIG11bHRpOiB0cnVlIH1dXG59KVxuZXhwb3J0IGNsYXNzIE56VGltZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelVzZTEySG91cnM6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256SGlkZURpc2FibGVkT3B0aW9uczogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpBbGxvd0VtcHR5OiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekRpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekF1dG9Gb2N1czogQm9vbGVhbklucHV0O1xuXG4gIHByaXZhdGUgX29uQ2hhbmdlPzogKHZhbHVlOiBEYXRlIHwgbnVsbCkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBfb25Ub3VjaGVkPzogKCkgPT4gdm9pZDtcbiAgaXNJbml0ID0gZmFsc2U7XG4gIGZvY3VzZWQgPSBmYWxzZTtcbiAgdmFsdWU6IERhdGUgfCBudWxsID0gbnVsbDtcbiAgb3JpZ2luITogQ2RrT3ZlcmxheU9yaWdpbjtcbiAgaW5wdXRTaXplPzogbnVtYmVyO1xuICBvdmVybGF5UG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbXG4gICAge1xuICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcbiAgICAgIG9yaWdpblk6ICdib3R0b20nLFxuICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gICAgICBvdmVybGF5WTogJ3RvcCcsXG4gICAgICBvZmZzZXRZOiAzXG4gICAgfVxuICBdO1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcsIHsgc3RhdGljOiB0cnVlIH0pIGlucHV0UmVmITogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcbiAgQElucHV0KCkgbnpTaXplOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBuekhvdXJTdGVwOiBudW1iZXIgPSAxO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIG56TWludXRlU3RlcDogbnVtYmVyID0gMTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBuelNlY29uZFN0ZXA6IG51bWJlciA9IDE7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgbnpDbGVhclRleHQ6IHN0cmluZyA9ICdjbGVhcic7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgbnpQb3B1cENsYXNzTmFtZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXIgPSAnJztcbiAgQElucHV0KCkgbnpBZGRPbj86IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuekRlZmF1bHRPcGVuVmFsdWU/OiBEYXRlO1xuICBASW5wdXQoKSBuekRpc2FibGVkSG91cnM/OiAoKSA9PiBudW1iZXJbXTtcbiAgQElucHV0KCkgbnpEaXNhYmxlZE1pbnV0ZXM/OiAoaG91cjogbnVtYmVyKSA9PiBudW1iZXJbXTtcbiAgQElucHV0KCkgbnpEaXNhYmxlZFNlY29uZHM/OiAoaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcikgPT4gbnVtYmVyW107XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgbnpGb3JtYXQ6IHN0cmluZyA9ICdISDptbTpzcyc7XG4gIEBJbnB1dCgpIG56T3BlbiA9IGZhbHNlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIEBJbnB1dEJvb2xlYW4oKSBuelVzZTEySG91cnM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBuelN1ZmZpeEljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gPSAnY2xvY2stY2lyY2xlJztcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekhpZGVEaXNhYmxlZE9wdGlvbnMgPSBmYWxzZTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBASW5wdXRCb29sZWFuKCkgbnpBbGxvd0VtcHR5OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXV0b0ZvY3VzID0gZmFsc2U7XG5cbiAgc2V0VmFsdWUodmFsdWU6IERhdGUgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlID8gbmV3IERhdGUodmFsdWUpIDogbnVsbDtcbiAgICBpZiAodGhpcy5fb25DaGFuZ2UpIHtcbiAgICAgIHRoaXMuX29uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fb25Ub3VjaGVkKSB7XG4gICAgICB0aGlzLl9vblRvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICBvcGVuKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5mb2N1cygpO1xuICAgIHRoaXMubnpPcGVuID0gdHJ1ZTtcbiAgICB0aGlzLm56T3BlbkNoYW5nZS5lbWl0KHRoaXMubnpPcGVuKTtcbiAgfVxuXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMubnpPcGVuID0gZmFsc2U7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5uek9wZW5DaGFuZ2UuZW1pdCh0aGlzLm56T3Blbik7XG4gIH1cblxuICB1cGRhdGVBdXRvRm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNJbml0ICYmICF0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIGlmICh0aGlzLm56QXV0b0ZvY3VzKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycsICdhdXRvZm9jdXMnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2tDbGVhckJ0bihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuc2V0VmFsdWUobnVsbCk7XG4gIH1cblxuICBvbkZvY3VzKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c2VkID0gdmFsdWU7XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBibHVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRTaXplID0gTWF0aC5tYXgoOCwgdGhpcy5uekZvcm1hdC5sZW5ndGgpICsgMjtcbiAgICB0aGlzLm9yaWdpbiA9IG5ldyBDZGtPdmVybGF5T3JpZ2luKHRoaXMuZWxlbWVudCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuelVzZTEySG91cnMsIG56Rm9ybWF0LCBuekRpc2FibGVkLCBuekF1dG9Gb2N1cyB9ID0gY2hhbmdlcztcbiAgICBpZiAobnpVc2UxMkhvdXJzICYmICFuelVzZTEySG91cnMucHJldmlvdXNWYWx1ZSAmJiBuelVzZTEySG91cnMuY3VycmVudFZhbHVlICYmICFuekZvcm1hdCkge1xuICAgICAgdGhpcy5uekZvcm1hdCA9ICdoOm1tOnNzIGEnO1xuICAgIH1cbiAgICBpZiAobnpEaXNhYmxlZCkge1xuICAgICAgY29uc3QgdmFsdWUgPSBuekRpc2FibGVkLmN1cnJlbnRWYWx1ZTtcbiAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoaW5wdXQsICdkaXNhYmxlZCcsICcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKGlucHV0LCAnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG56QXV0b0ZvY3VzKSB7XG4gICAgICB0aGlzLnVwZGF0ZUF1dG9Gb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzSW5pdCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVBdXRvRm9jdXMoKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodGltZTogRGF0ZSB8IG51bGwgfCB1bmRlZmluZWQpOiB2b2lkIHtcbiAgICBpZiAodGltZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aW1lO1xuICAgIH0gZWxzZSBpZiAoaXNOaWwodGltZSkpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB3YXJuKCdOb24tRGF0ZSB0eXBlIGlzIG5vdCByZWNvbW1lbmRlZCBmb3IgdGltZS1waWNrZXIsIHVzZSBcIkRhdGVcIiB0eXBlLicpO1xuICAgICAgdGhpcy52YWx1ZSA9IG5ldyBEYXRlKHRpbWUpO1xuICAgIH1cbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh0aW1lOiBEYXRlIHwgbnVsbCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19