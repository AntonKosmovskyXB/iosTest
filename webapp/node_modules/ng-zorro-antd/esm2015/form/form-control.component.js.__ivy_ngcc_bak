/**
 * @fileoverview added by tsickle
 * Generated from: form-control.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, Host, Input, Optional, Renderer2, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormControlDirective, FormControlName, NgControl, NgModel } from '@angular/forms';
import { helpMotion } from 'ng-zorro-antd/core/animation';
import { toBoolean } from 'ng-zorro-antd/core/util';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { Subject, Subscription } from 'rxjs';
import { filter, startWith, takeUntil, tap } from 'rxjs/operators';
import { NzFormDirective } from './form.directive';
import { NzFormItemComponent } from './form-item.component';
/** @type {?} */
const iconTypeMap = (/** @type {?} */ ({
    error: 'close-circle-fill',
    validating: 'loading',
    success: 'check-circle-fill',
    warning: 'exclamation-circle-fill'
}));
export class NzFormControlComponent {
    /**
     * @param {?} elementRef
     * @param {?} nzFormItemComponent
     * @param {?} cdr
     * @param {?} renderer
     * @param {?} i18n
     * @param {?} nzFormDirective
     */
    constructor(elementRef, nzFormItemComponent, cdr, renderer, i18n, nzFormDirective) {
        var _a, _b;
        this.nzFormItemComponent = nzFormItemComponent;
        this.cdr = cdr;
        this.nzFormDirective = nzFormDirective;
        this._hasFeedback = false;
        this.validateChanges = Subscription.EMPTY;
        this.validateString = null;
        this.status = null;
        this.destroyed$ = new Subject();
        this.validateControl = null;
        this.iconType = null;
        this.innerTip = null;
        this.nzAutoTips = {};
        this.nzDisableAutoTips = 'default';
        renderer.addClass(elementRef.nativeElement, 'ant-form-item-control');
        this.subscribeAutoTips(i18n.localeChange.pipe(tap((/**
         * @param {?} locale
         * @return {?}
         */
        locale => (this.localeId = locale.locale)))));
        this.subscribeAutoTips((_a = this.nzFormDirective) === null || _a === void 0 ? void 0 : _a.getInputObservable('nzAutoTips'));
        this.subscribeAutoTips((_b = this.nzFormDirective) === null || _b === void 0 ? void 0 : _b.getInputObservable('nzDisableAutoTips').pipe(filter((/**
         * @return {?}
         */
        () => this.nzDisableAutoTips === 'default'))));
    }
    /**
     * @private
     * @return {?}
     */
    get disableAutoTips() {
        var _a;
        return this.nzDisableAutoTips !== 'default' ? toBoolean(this.nzDisableAutoTips) : (_a = this.nzFormDirective) === null || _a === void 0 ? void 0 : _a.nzDisableAutoTips;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzHasFeedback(value) {
        this._hasFeedback = toBoolean(value);
        if (this.nzFormItemComponent) {
            this.nzFormItemComponent.setHasFeedback(this._hasFeedback);
        }
    }
    /**
     * @return {?}
     */
    get nzHasFeedback() {
        return this._hasFeedback;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzValidateStatus(value) {
        if (value instanceof AbstractControl || value instanceof NgModel) {
            this.validateControl = value;
            this.validateString = null;
            this.watchControl();
        }
        else if (value instanceof FormControlName) {
            this.validateControl = value.control;
            this.validateString = null;
            this.watchControl();
        }
        else {
            this.validateString = value;
            this.validateControl = null;
            this.setStatus();
        }
    }
    /**
     * @private
     * @return {?}
     */
    watchControl() {
        this.validateChanges.unsubscribe();
        /** miss detect https://github.com/angular/angular/issues/10887 **/
        if (this.validateControl && this.validateControl.statusChanges) {
            this.validateChanges = this.validateControl.statusChanges.pipe(startWith(null), takeUntil(this.destroyed$)).subscribe((/**
             * @param {?} _
             * @return {?}
             */
            _ => {
                if (!this.disableAutoTips) {
                    this.updateAutoErrorTip();
                }
                this.setStatus();
                this.cdr.markForCheck();
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    setStatus() {
        this.status = this.getControlStatus(this.validateString);
        this.iconType = this.status ? iconTypeMap[this.status] : null;
        this.innerTip = this.getInnerTip(this.status);
        if (this.nzFormItemComponent) {
            this.nzFormItemComponent.setWithHelpViaTips(!!this.innerTip);
            this.nzFormItemComponent.setStatus(this.status);
        }
    }
    /**
     * @private
     * @param {?} validateString
     * @return {?}
     */
    getControlStatus(validateString) {
        /** @type {?} */
        let status;
        if (validateString === 'warning' || this.validateControlStatus('INVALID', 'warning')) {
            status = 'warning';
        }
        else if (validateString === 'error' || this.validateControlStatus('INVALID')) {
            status = 'error';
        }
        else if (validateString === 'validating' || validateString === 'pending' || this.validateControlStatus('PENDING')) {
            status = 'validating';
        }
        else if (validateString === 'success' || this.validateControlStatus('VALID')) {
            status = 'success';
        }
        else {
            status = null;
        }
        return status;
    }
    /**
     * @private
     * @param {?} validStatus
     * @param {?=} statusType
     * @return {?}
     */
    validateControlStatus(validStatus, statusType) {
        if (!this.validateControl) {
            return false;
        }
        else {
            const { dirty, touched, status } = this.validateControl;
            return (!!dirty || !!touched) && (statusType ? this.validateControl.hasError(statusType) : status === validStatus);
        }
    }
    /**
     * @private
     * @param {?} status
     * @return {?}
     */
    getInnerTip(status) {
        switch (status) {
            case 'error':
                return (!this.disableAutoTips && this.autoErrorTip) || this.nzErrorTip || null;
            case 'validating':
                return this.nzValidatingTip || null;
            case 'success':
                return this.nzSuccessTip || null;
            case 'warning':
                return this.nzWarningTip || null;
            default:
                return null;
        }
    }
    /**
     * @private
     * @return {?}
     */
    updateAutoErrorTip() {
        var _a, _b, _c, _d, _e, _f, _g;
        if (this.validateControl) {
            /** @type {?} */
            const errors = this.validateControl.errors || {};
            /** @type {?} */
            let autoErrorTip = '';
            for (const key in errors) {
                if (errors.hasOwnProperty(key)) {
                    autoErrorTip = (_d = (_a = errors[key][this.localeId]) !== null && _a !== void 0 ? _a : (_c = (_b = this.nzAutoTips) === null || _b === void 0 ? void 0 : _b[this.localeId]) === null || _c === void 0 ? void 0 : _c[key]) !== null && _d !== void 0 ? _d : (_g = (_f = (_e = this.nzFormDirective) === null || _e === void 0 ? void 0 : _e.nzAutoTips) === null || _f === void 0 ? void 0 : _f[this.localeId]) === null || _g === void 0 ? void 0 : _g[key];
                }
                if (!!autoErrorTip) {
                    break;
                }
            }
            this.autoErrorTip = autoErrorTip;
        }
    }
    /**
     * @private
     * @param {?} observable
     * @return {?}
     */
    subscribeAutoTips(observable) {
        observable === null || observable === void 0 ? void 0 : observable.pipe(takeUntil(this.destroyed$)).subscribe((/**
         * @return {?}
         */
        () => {
            if (!this.disableAutoTips) {
                this.updateAutoErrorTip();
                this.setStatus();
                this.cdr.markForCheck();
            }
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzDisableAutoTips, nzAutoTips, nzSuccessTip, nzWarningTip, nzErrorTip, nzValidatingTip } = changes;
        if (nzDisableAutoTips || nzAutoTips) {
            this.updateAutoErrorTip();
            this.setStatus();
        }
        else if (nzSuccessTip || nzWarningTip || nzErrorTip || nzValidatingTip) {
            this.setStatus();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setStatus();
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
    ngAfterContentInit() {
        if (!this.validateControl && !this.validateString) {
            if (this.defaultValidateControl instanceof FormControlDirective) {
                this.nzValidateStatus = this.defaultValidateControl.control;
            }
            else {
                this.nzValidateStatus = (/** @type {?} */ (this.defaultValidateControl));
            }
        }
    }
}
NzFormControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-form-control',
                exportAs: 'nzFormControl',
                preserveWhitespaces: false,
                animations: [helpMotion],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div class="ant-form-item-control-input">
      <div class="ant-form-item-control-input-content">
        <ng-content></ng-content>
      </div>
      <span class="ant-form-item-children-icon">
        <i *ngIf="nzHasFeedback && iconType" nz-icon [nzType]="iconType"></i>
      </span>
    </div>
    <div class="ant-form-item-explain" *ngIf="innerTip">
      <div @helpMotion>
        <ng-container *nzStringTemplateOutlet="innerTip; context: { $implicit: validateControl }">{{ innerTip }}</ng-container>
      </div>
    </div>
    <div class="ant-form-item-extra" *ngIf="nzExtra">
      <ng-container *nzStringTemplateOutlet="nzExtra">{{ nzExtra }}</ng-container>
    </div>
  `
            }] }
];
/** @nocollapse */
NzFormControlComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NzFormItemComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NzI18nService },
    { type: NzFormDirective, decorators: [{ type: Optional }, { type: Host }] }
];
NzFormControlComponent.propDecorators = {
    defaultValidateControl: [{ type: ContentChild, args: [NgControl, { static: false },] }],
    nzSuccessTip: [{ type: Input }],
    nzWarningTip: [{ type: Input }],
    nzErrorTip: [{ type: Input }],
    nzValidatingTip: [{ type: Input }],
    nzExtra: [{ type: Input }],
    nzAutoTips: [{ type: Input }],
    nzDisableAutoTips: [{ type: Input }],
    nzHasFeedback: [{ type: Input }],
    nzValidateStatus: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzFormControlComponent.ngAcceptInputType_nzHasFeedback;
    /** @type {?} */
    NzFormControlComponent.ngAcceptInputType_nzRequired;
    /** @type {?} */
    NzFormControlComponent.ngAcceptInputType_nzNoColon;
    /** @type {?} */
    NzFormControlComponent.ngAcceptInputType_nzDisableAutoTips;
    /**
     * @type {?}
     * @private
     */
    NzFormControlComponent.prototype._hasFeedback;
    /**
     * @type {?}
     * @private
     */
    NzFormControlComponent.prototype.validateChanges;
    /**
     * @type {?}
     * @private
     */
    NzFormControlComponent.prototype.validateString;
    /**
     * @type {?}
     * @private
     */
    NzFormControlComponent.prototype.status;
    /**
     * @type {?}
     * @private
     */
    NzFormControlComponent.prototype.destroyed$;
    /**
     * @type {?}
     * @private
     */
    NzFormControlComponent.prototype.localeId;
    /**
     * @type {?}
     * @private
     */
    NzFormControlComponent.prototype.autoErrorTip;
    /** @type {?} */
    NzFormControlComponent.prototype.validateControl;
    /** @type {?} */
    NzFormControlComponent.prototype.iconType;
    /** @type {?} */
    NzFormControlComponent.prototype.innerTip;
    /** @type {?} */
    NzFormControlComponent.prototype.defaultValidateControl;
    /** @type {?} */
    NzFormControlComponent.prototype.nzSuccessTip;
    /** @type {?} */
    NzFormControlComponent.prototype.nzWarningTip;
    /** @type {?} */
    NzFormControlComponent.prototype.nzErrorTip;
    /** @type {?} */
    NzFormControlComponent.prototype.nzValidatingTip;
    /** @type {?} */
    NzFormControlComponent.prototype.nzExtra;
    /** @type {?} */
    NzFormControlComponent.prototype.nzAutoTips;
    /** @type {?} */
    NzFormControlComponent.prototype.nzDisableAutoTips;
    /**
     * @type {?}
     * @private
     */
    NzFormControlComponent.prototype.nzFormItemComponent;
    /**
     * @type {?}
     * @private
     */
    NzFormControlComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzFormControlComponent.prototype.nzFormDirective;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZm9ybS8iLCJzb3VyY2VzIjpbImZvcm0tY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFJTCxRQUFRLEVBQ1IsU0FBUyxFQUdULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLG9CQUFvQixFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRzFELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFjLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekQsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVuRCxPQUFPLEVBQTJCLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O01BRS9FLFdBQVcsR0FBRyxtQkFBQTtJQUNsQixLQUFLLEVBQUUsbUJBQW1CO0lBQzFCLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLE9BQU8sRUFBRSxtQkFBbUI7SUFDNUIsT0FBTyxFQUFFLHlCQUF5QjtDQUNuQyxFQUFTO0FBNEJWLE1BQU0sT0FBTyxzQkFBc0I7Ozs7Ozs7OztJQTJKakMsWUFDRSxVQUFzQixF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Q0FBcUY7O0lBQ3JGLGlEQUEwRjs7SUFDMUYseUNBQThDOztJQUM5Qyw0Q0FBaUU7O0lBQ2pFLG1EQUE0RDs7Ozs7SUFnSTFELHFEQUFvRTs7Ozs7SUFDcEUscUNBQThCOzs7OztJQUc5QixpREFBNEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBGb3JtQ29udHJvbERpcmVjdGl2ZSwgRm9ybUNvbnRyb2xOYW1lLCBOZ0NvbnRyb2wsIE5nTW9kZWwgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBoZWxwTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHN0YXJ0V2l0aCwgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOekZvcm1EaXJlY3RpdmUgfSBmcm9tICcuL2Zvcm0uZGlyZWN0aXZlJztcblxuaW1wb3J0IHsgTnpGb3JtQ29udHJvbFN0YXR1c1R5cGUsIE56Rm9ybUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2Zvcm0taXRlbS5jb21wb25lbnQnO1xuXG5jb25zdCBpY29uVHlwZU1hcCA9IHtcbiAgZXJyb3I6ICdjbG9zZS1jaXJjbGUtZmlsbCcsXG4gIHZhbGlkYXRpbmc6ICdsb2FkaW5nJyxcbiAgc3VjY2VzczogJ2NoZWNrLWNpcmNsZS1maWxsJyxcbiAgd2FybmluZzogJ2V4Y2xhbWF0aW9uLWNpcmNsZS1maWxsJ1xufSBhcyBjb25zdDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotZm9ybS1jb250cm9sJyxcbiAgZXhwb3J0QXM6ICduekZvcm1Db250cm9sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGFuaW1hdGlvbnM6IFtoZWxwTW90aW9uXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbC1pbnB1dFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbC1pbnB1dC1jb250ZW50XCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNoaWxkcmVuLWljb25cIj5cbiAgICAgICAgPGkgKm5nSWY9XCJuekhhc0ZlZWRiYWNrICYmIGljb25UeXBlXCIgbnotaWNvbiBbbnpUeXBlXT1cImljb25UeXBlXCI+PC9pPlxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWV4cGxhaW5cIiAqbmdJZj1cImlubmVyVGlwXCI+XG4gICAgICA8ZGl2IEBoZWxwTW90aW9uPlxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiaW5uZXJUaXA7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiB2YWxpZGF0ZUNvbnRyb2wgfVwiPnt7IGlubmVyVGlwIH19PC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1leHRyYVwiICpuZ0lmPVwibnpFeHRyYVwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56RXh0cmFcIj57eyBuekV4dHJhIH19PC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTnpGb3JtQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekhhc0ZlZWRiYWNrOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelJlcXVpcmVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uek5vQ29sb246IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RGlzYWJsZUF1dG9UaXBzOiBCb29sZWFuSW5wdXQ7XG5cbiAgcHJpdmF0ZSBfaGFzRmVlZGJhY2sgPSBmYWxzZTtcbiAgcHJpdmF0ZSB2YWxpZGF0ZUNoYW5nZXM6IFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSB2YWxpZGF0ZVN0cmluZzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgc3RhdHVzOiBOekZvcm1Db250cm9sU3RhdHVzVHlwZSA9IG51bGw7XG4gIHByaXZhdGUgZGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgbG9jYWxlSWQhOiBzdHJpbmc7XG4gIHByaXZhdGUgYXV0b0Vycm9yVGlwPzogc3RyaW5nO1xuXG4gIHByaXZhdGUgZ2V0IGRpc2FibGVBdXRvVGlwcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uekRpc2FibGVBdXRvVGlwcyAhPT0gJ2RlZmF1bHQnID8gdG9Cb29sZWFuKHRoaXMubnpEaXNhYmxlQXV0b1RpcHMpIDogdGhpcy5uekZvcm1EaXJlY3RpdmU/Lm56RGlzYWJsZUF1dG9UaXBzO1xuICB9XG5cbiAgdmFsaWRhdGVDb250cm9sOiBBYnN0cmFjdENvbnRyb2wgfCBOZ01vZGVsIHwgbnVsbCA9IG51bGw7XG4gIGljb25UeXBlOiB0eXBlb2YgaWNvblR5cGVNYXBba2V5b2YgdHlwZW9mIGljb25UeXBlTWFwXSB8IG51bGwgPSBudWxsO1xuICBpbm5lclRpcDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IEFic3RyYWN0Q29udHJvbCB8IE5nTW9kZWwgfT4gfCBudWxsID0gbnVsbDtcblxuICBAQ29udGVudENoaWxkKE5nQ29udHJvbCwgeyBzdGF0aWM6IGZhbHNlIH0pIGRlZmF1bHRWYWxpZGF0ZUNvbnRyb2w/OiBGb3JtQ29udHJvbE5hbWUgfCBGb3JtQ29udHJvbERpcmVjdGl2ZTtcbiAgQElucHV0KCkgbnpTdWNjZXNzVGlwPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IEFic3RyYWN0Q29udHJvbCB8IE5nTW9kZWwgfT47XG4gIEBJbnB1dCgpIG56V2FybmluZ1RpcD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBBYnN0cmFjdENvbnRyb2wgfCBOZ01vZGVsIH0+O1xuICBASW5wdXQoKSBuekVycm9yVGlwPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IEFic3RyYWN0Q29udHJvbCB8IE5nTW9kZWwgfT47XG4gIEBJbnB1dCgpIG56VmFsaWRhdGluZ1RpcD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBBYnN0cmFjdENvbnRyb2wgfCBOZ01vZGVsIH0+O1xuICBASW5wdXQoKSBuekV4dHJhPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56QXV0b1RpcHM6IFJlY29yZDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIHN0cmluZz4+ID0ge307XG4gIEBJbnB1dCgpIG56RGlzYWJsZUF1dG9UaXBzOiBib29sZWFuIHwgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekhhc0ZlZWRiYWNrKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faGFzRmVlZGJhY2sgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIGlmICh0aGlzLm56Rm9ybUl0ZW1Db21wb25lbnQpIHtcbiAgICAgIHRoaXMubnpGb3JtSXRlbUNvbXBvbmVudC5zZXRIYXNGZWVkYmFjayh0aGlzLl9oYXNGZWVkYmFjayk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56SGFzRmVlZGJhY2soKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc0ZlZWRiYWNrO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56VmFsaWRhdGVTdGF0dXModmFsdWU6IHN0cmluZyB8IEFic3RyYWN0Q29udHJvbCB8IEZvcm1Db250cm9sTmFtZSB8IE5nTW9kZWwpIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBYnN0cmFjdENvbnRyb2wgfHwgdmFsdWUgaW5zdGFuY2VvZiBOZ01vZGVsKSB7XG4gICAgICB0aGlzLnZhbGlkYXRlQ29udHJvbCA9IHZhbHVlO1xuICAgICAgdGhpcy52YWxpZGF0ZVN0cmluZyA9IG51bGw7XG4gICAgICB0aGlzLndhdGNoQ29udHJvbCgpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBGb3JtQ29udHJvbE5hbWUpIHtcbiAgICAgIHRoaXMudmFsaWRhdGVDb250cm9sID0gdmFsdWUuY29udHJvbDtcbiAgICAgIHRoaXMudmFsaWRhdGVTdHJpbmcgPSBudWxsO1xuICAgICAgdGhpcy53YXRjaENvbnRyb2woKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWxpZGF0ZVN0cmluZyA9IHZhbHVlO1xuICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2wgPSBudWxsO1xuICAgICAgdGhpcy5zZXRTdGF0dXMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHdhdGNoQ29udHJvbCgpOiB2b2lkIHtcbiAgICB0aGlzLnZhbGlkYXRlQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xuICAgIC8qKiBtaXNzIGRldGVjdCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMDg4NyAqKi9cbiAgICBpZiAodGhpcy52YWxpZGF0ZUNvbnRyb2wgJiYgdGhpcy52YWxpZGF0ZUNvbnRyb2wuc3RhdHVzQ2hhbmdlcykge1xuICAgICAgdGhpcy52YWxpZGF0ZUNoYW5nZXMgPSB0aGlzLnZhbGlkYXRlQ29udHJvbC5zdGF0dXNDaGFuZ2VzLnBpcGUoc3RhcnRXaXRoKG51bGwpLCB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSkuc3Vic2NyaWJlKF8gPT4ge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZUF1dG9UaXBzKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVBdXRvRXJyb3JUaXAoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXR1cygpO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0U3RhdHVzKCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdHVzID0gdGhpcy5nZXRDb250cm9sU3RhdHVzKHRoaXMudmFsaWRhdGVTdHJpbmcpO1xuICAgIHRoaXMuaWNvblR5cGUgPSB0aGlzLnN0YXR1cyA/IGljb25UeXBlTWFwW3RoaXMuc3RhdHVzXSA6IG51bGw7XG4gICAgdGhpcy5pbm5lclRpcCA9IHRoaXMuZ2V0SW5uZXJUaXAodGhpcy5zdGF0dXMpO1xuICAgIGlmICh0aGlzLm56Rm9ybUl0ZW1Db21wb25lbnQpIHtcbiAgICAgIHRoaXMubnpGb3JtSXRlbUNvbXBvbmVudC5zZXRXaXRoSGVscFZpYVRpcHMoISF0aGlzLmlubmVyVGlwKTtcbiAgICAgIHRoaXMubnpGb3JtSXRlbUNvbXBvbmVudC5zZXRTdGF0dXModGhpcy5zdGF0dXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29udHJvbFN0YXR1cyh2YWxpZGF0ZVN0cmluZzogc3RyaW5nIHwgbnVsbCk6IE56Rm9ybUNvbnRyb2xTdGF0dXNUeXBlIHtcbiAgICBsZXQgc3RhdHVzOiBOekZvcm1Db250cm9sU3RhdHVzVHlwZTtcblxuICAgIGlmICh2YWxpZGF0ZVN0cmluZyA9PT0gJ3dhcm5pbmcnIHx8IHRoaXMudmFsaWRhdGVDb250cm9sU3RhdHVzKCdJTlZBTElEJywgJ3dhcm5pbmcnKSkge1xuICAgICAgc3RhdHVzID0gJ3dhcm5pbmcnO1xuICAgIH0gZWxzZSBpZiAodmFsaWRhdGVTdHJpbmcgPT09ICdlcnJvcicgfHwgdGhpcy52YWxpZGF0ZUNvbnRyb2xTdGF0dXMoJ0lOVkFMSUQnKSkge1xuICAgICAgc3RhdHVzID0gJ2Vycm9yJztcbiAgICB9IGVsc2UgaWYgKHZhbGlkYXRlU3RyaW5nID09PSAndmFsaWRhdGluZycgfHwgdmFsaWRhdGVTdHJpbmcgPT09ICdwZW5kaW5nJyB8fCB0aGlzLnZhbGlkYXRlQ29udHJvbFN0YXR1cygnUEVORElORycpKSB7XG4gICAgICBzdGF0dXMgPSAndmFsaWRhdGluZyc7XG4gICAgfSBlbHNlIGlmICh2YWxpZGF0ZVN0cmluZyA9PT0gJ3N1Y2Nlc3MnIHx8IHRoaXMudmFsaWRhdGVDb250cm9sU3RhdHVzKCdWQUxJRCcpKSB7XG4gICAgICBzdGF0dXMgPSAnc3VjY2Vzcyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXR1cyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXR1cztcbiAgfVxuXG4gIHByaXZhdGUgdmFsaWRhdGVDb250cm9sU3RhdHVzKHZhbGlkU3RhdHVzOiBzdHJpbmcsIHN0YXR1c1R5cGU/OiBOekZvcm1Db250cm9sU3RhdHVzVHlwZSk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy52YWxpZGF0ZUNvbnRyb2wpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyBkaXJ0eSwgdG91Y2hlZCwgc3RhdHVzIH0gPSB0aGlzLnZhbGlkYXRlQ29udHJvbDtcbiAgICAgIHJldHVybiAoISFkaXJ0eSB8fCAhIXRvdWNoZWQpICYmIChzdGF0dXNUeXBlID8gdGhpcy52YWxpZGF0ZUNvbnRyb2wuaGFzRXJyb3Ioc3RhdHVzVHlwZSkgOiBzdGF0dXMgPT09IHZhbGlkU3RhdHVzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldElubmVyVGlwKHN0YXR1czogTnpGb3JtQ29udHJvbFN0YXR1c1R5cGUpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogQWJzdHJhY3RDb250cm9sIHwgTmdNb2RlbCB9PiB8IG51bGwge1xuICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgIHJldHVybiAoIXRoaXMuZGlzYWJsZUF1dG9UaXBzICYmIHRoaXMuYXV0b0Vycm9yVGlwKSB8fCB0aGlzLm56RXJyb3JUaXAgfHwgbnVsbDtcbiAgICAgIGNhc2UgJ3ZhbGlkYXRpbmcnOlxuICAgICAgICByZXR1cm4gdGhpcy5uelZhbGlkYXRpbmdUaXAgfHwgbnVsbDtcbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICByZXR1cm4gdGhpcy5uelN1Y2Nlc3NUaXAgfHwgbnVsbDtcbiAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICByZXR1cm4gdGhpcy5ueldhcm5pbmdUaXAgfHwgbnVsbDtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQXV0b0Vycm9yVGlwKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbGlkYXRlQ29udHJvbCkge1xuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy52YWxpZGF0ZUNvbnRyb2wuZXJyb3JzIHx8IHt9O1xuICAgICAgbGV0IGF1dG9FcnJvclRpcCA9ICcnO1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZXJyb3JzKSB7XG4gICAgICAgIGlmIChlcnJvcnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGF1dG9FcnJvclRpcCA9XG4gICAgICAgICAgICBlcnJvcnNba2V5XVt0aGlzLmxvY2FsZUlkXSA/P1xuICAgICAgICAgICAgdGhpcy5uekF1dG9UaXBzPy5bdGhpcy5sb2NhbGVJZF0/LltrZXldID8/XG4gICAgICAgICAgICB0aGlzLm56Rm9ybURpcmVjdGl2ZT8ubnpBdXRvVGlwcz8uW3RoaXMubG9jYWxlSWRdPy5ba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoISFhdXRvRXJyb3JUaXApIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5hdXRvRXJyb3JUaXAgPSBhdXRvRXJyb3JUaXA7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVBdXRvVGlwcyhvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPE56U2FmZUFueT4pOiB2b2lkIHtcbiAgICBvYnNlcnZhYmxlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRpc2FibGVBdXRvVGlwcykge1xuICAgICAgICB0aGlzLnVwZGF0ZUF1dG9FcnJvclRpcCgpO1xuICAgICAgICB0aGlzLnNldFN0YXR1cygpO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBwcml2YXRlIG56Rm9ybUl0ZW1Db21wb25lbnQ6IE56Rm9ybUl0ZW1Db21wb25lbnQsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgaTE4bjogTnpJMThuU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIHByaXZhdGUgbnpGb3JtRGlyZWN0aXZlOiBOekZvcm1EaXJlY3RpdmVcbiAgKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWZvcm0taXRlbS1jb250cm9sJyk7XG5cbiAgICB0aGlzLnN1YnNjcmliZUF1dG9UaXBzKGkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFwKGxvY2FsZSA9PiAodGhpcy5sb2NhbGVJZCA9IGxvY2FsZS5sb2NhbGUpKSkpO1xuICAgIHRoaXMuc3Vic2NyaWJlQXV0b1RpcHModGhpcy5uekZvcm1EaXJlY3RpdmU/LmdldElucHV0T2JzZXJ2YWJsZSgnbnpBdXRvVGlwcycpKTtcbiAgICB0aGlzLnN1YnNjcmliZUF1dG9UaXBzKFxuICAgICAgdGhpcy5uekZvcm1EaXJlY3RpdmU/LmdldElucHV0T2JzZXJ2YWJsZSgnbnpEaXNhYmxlQXV0b1RpcHMnKS5waXBlKGZpbHRlcigoKSA9PiB0aGlzLm56RGlzYWJsZUF1dG9UaXBzID09PSAnZGVmYXVsdCcpKVxuICAgICk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuekRpc2FibGVBdXRvVGlwcywgbnpBdXRvVGlwcywgbnpTdWNjZXNzVGlwLCBueldhcm5pbmdUaXAsIG56RXJyb3JUaXAsIG56VmFsaWRhdGluZ1RpcCB9ID0gY2hhbmdlcztcblxuICAgIGlmIChuekRpc2FibGVBdXRvVGlwcyB8fCBuekF1dG9UaXBzKSB7XG4gICAgICB0aGlzLnVwZGF0ZUF1dG9FcnJvclRpcCgpO1xuICAgICAgdGhpcy5zZXRTdGF0dXMoKTtcbiAgICB9IGVsc2UgaWYgKG56U3VjY2Vzc1RpcCB8fCBueldhcm5pbmdUaXAgfHwgbnpFcnJvclRpcCB8fCBuelZhbGlkYXRpbmdUaXApIHtcbiAgICAgIHRoaXMuc2V0U3RhdHVzKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRTdGF0dXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95ZWQkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnZhbGlkYXRlQ29udHJvbCAmJiAhdGhpcy52YWxpZGF0ZVN0cmluZykge1xuICAgICAgaWYgKHRoaXMuZGVmYXVsdFZhbGlkYXRlQ29udHJvbCBpbnN0YW5jZW9mIEZvcm1Db250cm9sRGlyZWN0aXZlKSB7XG4gICAgICAgIHRoaXMubnpWYWxpZGF0ZVN0YXR1cyA9IHRoaXMuZGVmYXVsdFZhbGlkYXRlQ29udHJvbC5jb250cm9sO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5uelZhbGlkYXRlU3RhdHVzID0gdGhpcy5kZWZhdWx0VmFsaWRhdGVDb250cm9sITtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==