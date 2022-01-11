/**
 * @fileoverview added by tsickle
 * Generated from: radio.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, Input, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzRadioButtonDirective } from './radio-button.directive';
import { NzRadioService } from './radio.service';
var NzRadioComponent = /** @class */ (function () {
    function NzRadioComponent(elementRef, cdr, focusMonitor, nzRadioService, nzRadioButtonDirective) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.nzRadioService = nzRadioService;
        this.nzRadioButtonDirective = nzRadioButtonDirective;
        this.isNgModel = false;
        this.destroy$ = new Subject();
        this.isChecked = false;
        this.name = null;
        this.isRadioButton = !!this.nzRadioButtonDirective;
        this.onChange = (/**
         * @return {?}
         */
        function () { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
        this.nzValue = null;
        this.nzDisabled = false;
        this.nzAutoFocus = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    NzRadioComponent.prototype.onHostClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** prevent label click triggered twice. **/
        event.stopPropagation();
        event.preventDefault();
        if (!this.nzDisabled && !this.isChecked) {
            if (this.nzRadioService) {
                this.nzRadioService.select(this.nzValue);
            }
            if (this.isNgModel) {
                this.isChecked = true;
                this.onChange(true);
            }
        }
    };
    /**
     * @return {?}
     */
    NzRadioComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.focusVia((/** @type {?} */ (this.inputElement)), 'keyboard');
    };
    /**
     * @return {?}
     */
    NzRadioComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        (/** @type {?} */ (this.inputElement)).nativeElement.blur();
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    NzRadioComponent.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        this.nzDisabled = disabled;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzRadioComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.isChecked = value;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzRadioComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.isNgModel = true;
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzRadioComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @return {?}
     */
    NzRadioComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.nzRadioService) {
            this.nzRadioService.name$.pipe(takeUntil(this.destroy$)).subscribe((/**
             * @param {?} name
             * @return {?}
             */
            function (name) {
                _this.name = name;
                _this.cdr.markForCheck();
            }));
            this.nzRadioService.disabled$.pipe(takeUntil(this.destroy$)).subscribe((/**
             * @param {?} disabled
             * @return {?}
             */
            function (disabled) {
                _this.nzDisabled = disabled;
                _this.cdr.markForCheck();
            }));
            this.nzRadioService.selected$.pipe(takeUntil(this.destroy$)).subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this.isChecked = _this.nzValue === value;
                _this.cdr.markForCheck();
            }));
        }
        this.focusMonitor.monitor(this.elementRef, true).subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        function (focusOrigin) {
            if (!focusOrigin) {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () { return _this.onTouched(); }));
                if (_this.nzRadioService) {
                    _this.nzRadioService.touch();
                }
            }
        }));
    };
    /**
     * @return {?}
     */
    NzRadioComponent.prototype.ngAfterViewInit = /**
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
    NzRadioComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
        this.focusMonitor.stopMonitoring(this.elementRef);
    };
    NzRadioComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-radio],[nz-radio-button]',
                    exportAs: 'nzRadio',
                    preserveWhitespaces: false,
                    template: "\n    <span\n      [class.ant-radio]=\"!isRadioButton\"\n      [class.ant-radio-checked]=\"isChecked && !isRadioButton\"\n      [class.ant-radio-disabled]=\"nzDisabled && !isRadioButton\"\n      [class.ant-radio-button]=\"isRadioButton\"\n      [class.ant-radio-button-checked]=\"isChecked && isRadioButton\"\n      [class.ant-radio-button-disabled]=\"nzDisabled && isRadioButton\"\n    >\n      <input\n        #inputElement\n        type=\"radio\"\n        [attr.autofocus]=\"nzAutoFocus ? 'autofocus' : null\"\n        [class.ant-radio-input]=\"!isRadioButton\"\n        [class.ant-radio-button-input]=\"isRadioButton\"\n        [disabled]=\"nzDisabled\"\n        [checked]=\"isChecked\"\n        [attr.name]=\"name\"\n      />\n      <span [class.ant-radio-inner]=\"!isRadioButton\" [class.ant-radio-button-inner]=\"isRadioButton\"></span>\n    </span>\n    <span><ng-content></ng-content></span>\n  ",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzRadioComponent; })),
                            multi: true
                        }
                    ],
                    host: {
                        '[class.ant-radio-wrapper]': '!isRadioButton',
                        '[class.ant-radio-button-wrapper]': 'isRadioButton',
                        '[class.ant-radio-wrapper-checked]': 'isChecked && !isRadioButton',
                        '[class.ant-radio-button-wrapper-checked]': 'isChecked && isRadioButton',
                        '[class.ant-radio-wrapper-disabled]': 'nzDisabled && !isRadioButton',
                        '[class.ant-radio-button-wrapper-disabled]': 'nzDisabled && isRadioButton',
                        '(click)': 'onHostClick($event)'
                    }
                }] }
    ];
    /** @nocollapse */
    NzRadioComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: FocusMonitor },
        { type: NzRadioService, decorators: [{ type: Optional }] },
        { type: NzRadioButtonDirective, decorators: [{ type: Optional }] }
    ]; };
    NzRadioComponent.propDecorators = {
        inputElement: [{ type: ViewChild, args: ['inputElement', { static: false },] }],
        nzValue: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzAutoFocus: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzRadioComponent.prototype, "nzDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzRadioComponent.prototype, "nzAutoFocus", void 0);
    return NzRadioComponent;
}());
export { NzRadioComponent };
if (false) {
    /** @type {?} */
    NzRadioComponent.ngAcceptInputType_nzDisabled;
    /** @type {?} */
    NzRadioComponent.ngAcceptInputType_nzAutoFocus;
    /**
     * @type {?}
     * @private
     */
    NzRadioComponent.prototype.isNgModel;
    /**
     * @type {?}
     * @private
     */
    NzRadioComponent.prototype.destroy$;
    /** @type {?} */
    NzRadioComponent.prototype.isChecked;
    /** @type {?} */
    NzRadioComponent.prototype.name;
    /** @type {?} */
    NzRadioComponent.prototype.isRadioButton;
    /** @type {?} */
    NzRadioComponent.prototype.onChange;
    /** @type {?} */
    NzRadioComponent.prototype.onTouched;
    /** @type {?} */
    NzRadioComponent.prototype.inputElement;
    /** @type {?} */
    NzRadioComponent.prototype.nzValue;
    /** @type {?} */
    NzRadioComponent.prototype.nzDisabled;
    /** @type {?} */
    NzRadioComponent.prototype.nzAutoFocus;
    /**
     * @type {?}
     * @private
     */
    NzRadioComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzRadioComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzRadioComponent.prototype.focusMonitor;
    /**
     * @type {?}
     * @private
     */
    NzRadioComponent.prototype.nzRadioService;
    /**
     * @type {?}
     * @private
     */
    NzRadioComponent.prototype.nzRadioButtonDirective;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9yYWRpby8iLCJzb3VyY2VzIjpbInJhZGlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLEtBQUssRUFHTCxRQUFRLEVBQ1IsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRDtJQXFGRSwwQkFDVSxVQUFzQixFQUN0QixHQUFzQixFQUN0QixZQUEwQixFQUNkLGNBQThCLEVBQzlCLHNCQUE4QztRQUoxRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQ2QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUF4QzVELGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDdkMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixTQUFJLEdBQWtCLElB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c0NBQThCOzs7OztJQUM5QiwrQkFBOEI7Ozs7O0lBQzlCLHdDQUFrQzs7Ozs7SUFDbEMsMENBQWtEOzs7OztJQUNsRCxrREFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOelNhZmVBbnksIE9uQ2hhbmdlVHlwZSwgT25Ub3VjaGVkVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOelJhZGlvQnV0dG9uRGlyZWN0aXZlIH0gZnJvbSAnLi9yYWRpby1idXR0b24uZGlyZWN0aXZlJztcbmltcG9ydCB7IE56UmFkaW9TZXJ2aWNlIH0gZnJvbSAnLi9yYWRpby5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW256LXJhZGlvXSxbbnotcmFkaW8tYnV0dG9uXScsXG4gIGV4cG9ydEFzOiAnbnpSYWRpbycsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzcGFuXG4gICAgICBbY2xhc3MuYW50LXJhZGlvXT1cIiFpc1JhZGlvQnV0dG9uXCJcbiAgICAgIFtjbGFzcy5hbnQtcmFkaW8tY2hlY2tlZF09XCJpc0NoZWNrZWQgJiYgIWlzUmFkaW9CdXR0b25cIlxuICAgICAgW2NsYXNzLmFudC1yYWRpby1kaXNhYmxlZF09XCJuekRpc2FibGVkICYmICFpc1JhZGlvQnV0dG9uXCJcbiAgICAgIFtjbGFzcy5hbnQtcmFkaW8tYnV0dG9uXT1cImlzUmFkaW9CdXR0b25cIlxuICAgICAgW2NsYXNzLmFudC1yYWRpby1idXR0b24tY2hlY2tlZF09XCJpc0NoZWNrZWQgJiYgaXNSYWRpb0J1dHRvblwiXG4gICAgICBbY2xhc3MuYW50LXJhZGlvLWJ1dHRvbi1kaXNhYmxlZF09XCJuekRpc2FibGVkICYmIGlzUmFkaW9CdXR0b25cIlxuICAgID5cbiAgICAgIDxpbnB1dFxuICAgICAgICAjaW5wdXRFbGVtZW50XG4gICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgIFthdHRyLmF1dG9mb2N1c109XCJuekF1dG9Gb2N1cyA/ICdhdXRvZm9jdXMnIDogbnVsbFwiXG4gICAgICAgIFtjbGFzcy5hbnQtcmFkaW8taW5wdXRdPVwiIWlzUmFkaW9CdXR0b25cIlxuICAgICAgICBbY2xhc3MuYW50LXJhZGlvLWJ1dHRvbi1pbnB1dF09XCJpc1JhZGlvQnV0dG9uXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cIm56RGlzYWJsZWRcIlxuICAgICAgICBbY2hlY2tlZF09XCJpc0NoZWNrZWRcIlxuICAgICAgICBbYXR0ci5uYW1lXT1cIm5hbWVcIlxuICAgICAgLz5cbiAgICAgIDxzcGFuIFtjbGFzcy5hbnQtcmFkaW8taW5uZXJdPVwiIWlzUmFkaW9CdXR0b25cIiBbY2xhc3MuYW50LXJhZGlvLWJ1dHRvbi1pbm5lcl09XCJpc1JhZGlvQnV0dG9uXCI+PC9zcGFuPlxuICAgIDwvc3Bhbj5cbiAgICA8c3Bhbj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9zcGFuPlxuICBgLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOelJhZGlvQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8td3JhcHBlcl0nOiAnIWlzUmFkaW9CdXR0b24nLFxuICAgICdbY2xhc3MuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyXSc6ICdpc1JhZGlvQnV0dG9uJyxcbiAgICAnW2NsYXNzLmFudC1yYWRpby13cmFwcGVyLWNoZWNrZWRdJzogJ2lzQ2hlY2tlZCAmJiAhaXNSYWRpb0J1dHRvbicsXG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXItY2hlY2tlZF0nOiAnaXNDaGVja2VkICYmIGlzUmFkaW9CdXR0b24nLFxuICAgICdbY2xhc3MuYW50LXJhZGlvLXdyYXBwZXItZGlzYWJsZWRdJzogJ256RGlzYWJsZWQgJiYgIWlzUmFkaW9CdXR0b24nLFxuICAgICdbY2xhc3MuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyLWRpc2FibGVkXSc6ICduekRpc2FibGVkICYmIGlzUmFkaW9CdXR0b24nLFxuICAgICcoY2xpY2spJzogJ29uSG9zdENsaWNrKCRldmVudCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpSYWRpb0NvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekRpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekF1dG9Gb2N1czogQm9vbGVhbklucHV0O1xuXG4gIHByaXZhdGUgaXNOZ01vZGVsID0gZmFsc2U7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBpc0NoZWNrZWQgPSBmYWxzZTtcbiAgbmFtZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIGlzUmFkaW9CdXR0b24gPSAhIXRoaXMubnpSYWRpb0J1dHRvbkRpcmVjdGl2ZTtcbiAgb25DaGFuZ2U6IE9uQ2hhbmdlVHlwZSA9ICgpID0+IHt9O1xuICBvblRvdWNoZWQ6IE9uVG91Y2hlZFR5cGUgPSAoKSA9PiB7fTtcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIGlucHV0RWxlbWVudD86IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIG56VmFsdWU6IE56U2FmZUFueSB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBdXRvRm9jdXMgPSBmYWxzZTtcblxuICBvbkhvc3RDbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIC8qKiBwcmV2ZW50IGxhYmVsIGNsaWNrIHRyaWdnZXJlZCB0d2ljZS4gKiovXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXRoaXMubnpEaXNhYmxlZCAmJiAhdGhpcy5pc0NoZWNrZWQpIHtcbiAgICAgIGlmICh0aGlzLm56UmFkaW9TZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMubnpSYWRpb1NlcnZpY2Uuc2VsZWN0KHRoaXMubnpWYWx1ZSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pc05nTW9kZWwpIHtcbiAgICAgICAgdGhpcy5pc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNNb25pdG9yLmZvY3VzVmlhKHRoaXMuaW5wdXRFbGVtZW50ISwgJ2tleWJvYXJkJyk7XG4gIH1cblxuICBibHVyKCk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50IS5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIG56UmFkaW9TZXJ2aWNlOiBOelJhZGlvU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIG56UmFkaW9CdXR0b25EaXJlY3RpdmU6IE56UmFkaW9CdXR0b25EaXJlY3RpdmVcbiAgKSB7fVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmlzQ2hlY2tlZCA9IHZhbHVlO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogT25DaGFuZ2VUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5pc05nTW9kZWwgPSB0cnVlO1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBPblRvdWNoZWRUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56UmFkaW9TZXJ2aWNlKSB7XG4gICAgICB0aGlzLm56UmFkaW9TZXJ2aWNlLm5hbWUkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUobmFtZSA9PiB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLm56UmFkaW9TZXJ2aWNlLmRpc2FibGVkJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGRpc2FibGVkID0+IHtcbiAgICAgICAgdGhpcy5uekRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLm56UmFkaW9TZXJ2aWNlLnNlbGVjdGVkJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgICAgdGhpcy5pc0NoZWNrZWQgPSB0aGlzLm56VmFsdWUgPT09IHZhbHVlO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmZvY3VzTW9uaXRvci5tb25pdG9yKHRoaXMuZWxlbWVudFJlZiwgdHJ1ZSkuc3Vic2NyaWJlKGZvY3VzT3JpZ2luID0+IHtcbiAgICAgIGlmICghZm9jdXNPcmlnaW4pIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLm9uVG91Y2hlZCgpKTtcbiAgICAgICAgaWYgKHRoaXMubnpSYWRpb1NlcnZpY2UpIHtcbiAgICAgICAgICB0aGlzLm56UmFkaW9TZXJ2aWNlLnRvdWNoKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekF1dG9Gb2N1cykge1xuICAgICAgdGhpcy5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLmVsZW1lbnRSZWYpO1xuICB9XG59XG4iXX0=