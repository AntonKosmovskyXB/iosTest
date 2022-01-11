/**
 * @fileoverview added by tsickle
 * Generated from: handle.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import { NzSliderService } from './slider.service';
export class NzSliderHandleComponent {
    /**
     * @param {?} sliderService
     * @param {?} cdr
     */
    constructor(sliderService, cdr) {
        this.sliderService = sliderService;
        this.cdr = cdr;
        this.tooltipVisible = 'default';
        this.active = false;
        this.style = {};
        this.enterHandle = (/**
         * @return {?}
         */
        () => {
            if (!this.sliderService.isDragging) {
                this.toggleTooltip(true);
                this.updateTooltipPosition();
                this.cdr.detectChanges();
            }
        });
        this.leaveHandle = (/**
         * @return {?}
         */
        () => {
            if (!this.sliderService.isDragging) {
                this.toggleTooltip(false);
                this.cdr.detectChanges();
            }
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { offset, value, active, tooltipVisible, reverse } = changes;
        if (offset || reverse) {
            this.updateStyle();
        }
        if (value) {
            this.updateTooltipTitle();
            this.updateTooltipPosition();
        }
        if (active) {
            if (active.currentValue) {
                this.toggleTooltip(true);
            }
            else {
                this.toggleTooltip(false);
            }
        }
        if ((tooltipVisible === null || tooltipVisible === void 0 ? void 0 : tooltipVisible.currentValue) === 'always') {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => this.toggleTooltip(true, true)));
        }
    }
    /**
     * @return {?}
     */
    focus() {
        var _a;
        (_a = this.handleEl) === null || _a === void 0 ? void 0 : _a.nativeElement.focus();
    }
    /**
     * @private
     * @param {?} show
     * @param {?=} force
     * @return {?}
     */
    toggleTooltip(show, force = false) {
        var _a, _b;
        if (!force && (this.tooltipVisible !== 'default' || !this.tooltip)) {
            return;
        }
        if (show) {
            (_a = this.tooltip) === null || _a === void 0 ? void 0 : _a.show();
        }
        else {
            (_b = this.tooltip) === null || _b === void 0 ? void 0 : _b.hide();
        }
    }
    /**
     * @private
     * @return {?}
     */
    updateTooltipTitle() {
        this.tooltipTitle = this.tooltipFormatter ? this.tooltipFormatter((/** @type {?} */ (this.value))) : `${this.value}`;
    }
    /**
     * @private
     * @return {?}
     */
    updateTooltipPosition() {
        if (this.tooltip) {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => { var _a; return (_a = this.tooltip) === null || _a === void 0 ? void 0 : _a.updatePosition(); }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    updateStyle() {
        /** @type {?} */
        const vertical = this.vertical;
        /** @type {?} */
        const reverse = this.reverse;
        /** @type {?} */
        const offset = this.offset;
        /** @type {?} */
        const positionStyle = vertical
            ? {
                [reverse ? 'top' : 'bottom']: `${offset}%`,
                [reverse ? 'bottom' : 'top']: 'auto',
                transform: reverse ? null : `translateY(+50%)`
            }
            : {
                [reverse ? 'right' : 'left']: `${offset}%`,
                [reverse ? 'left' : 'right']: 'auto',
                transform: `translateX(${reverse ? '+' : '-'}50%)`
            };
        this.style = positionStyle;
        this.cdr.markForCheck();
    }
}
NzSliderHandleComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-slider-handle',
                exportAs: 'nzSliderHandle',
                preserveWhitespaces: false,
                template: `
    <div
      #handle
      class="ant-slider-handle"
      tabindex="0"
      nz-tooltip
      [ngStyle]="style"
      [nzTooltipTitle]="tooltipFormatter === null || tooltipVisible === 'never' ? null : tooltipTitle"
      [nzTooltipTrigger]="null"
      [nzTooltipPlacement]="tooltipPlacement"
    ></div>
  `,
                host: {
                    '(mouseenter)': 'enterHandle()',
                    '(mouseleave)': 'leaveHandle()'
                }
            }] }
];
/** @nocollapse */
NzSliderHandleComponent.ctorParameters = () => [
    { type: NzSliderService },
    { type: ChangeDetectorRef }
];
NzSliderHandleComponent.propDecorators = {
    handleEl: [{ type: ViewChild, args: ['handle', { static: false },] }],
    tooltip: [{ type: ViewChild, args: [NzTooltipDirective, { static: false },] }],
    vertical: [{ type: Input }],
    reverse: [{ type: Input }],
    offset: [{ type: Input }],
    value: [{ type: Input }],
    tooltipVisible: [{ type: Input }],
    tooltipPlacement: [{ type: Input }],
    tooltipFormatter: [{ type: Input }],
    active: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSliderHandleComponent.prototype, "active", void 0);
if (false) {
    /** @type {?} */
    NzSliderHandleComponent.ngAcceptInputType_active;
    /** @type {?} */
    NzSliderHandleComponent.prototype.handleEl;
    /** @type {?} */
    NzSliderHandleComponent.prototype.tooltip;
    /** @type {?} */
    NzSliderHandleComponent.prototype.vertical;
    /** @type {?} */
    NzSliderHandleComponent.prototype.reverse;
    /** @type {?} */
    NzSliderHandleComponent.prototype.offset;
    /** @type {?} */
    NzSliderHandleComponent.prototype.value;
    /** @type {?} */
    NzSliderHandleComponent.prototype.tooltipVisible;
    /** @type {?} */
    NzSliderHandleComponent.prototype.tooltipPlacement;
    /** @type {?} */
    NzSliderHandleComponent.prototype.tooltipFormatter;
    /** @type {?} */
    NzSliderHandleComponent.prototype.active;
    /** @type {?} */
    NzSliderHandleComponent.prototype.tooltipTitle;
    /** @type {?} */
    NzSliderHandleComponent.prototype.style;
    /** @type {?} */
    NzSliderHandleComponent.prototype.enterHandle;
    /** @type {?} */
    NzSliderHandleComponent.prototype.leaveHandle;
    /**
     * @type {?}
     * @private
     */
    NzSliderHandleComponent.prototype.sliderService;
    /**
     * @type {?}
     * @private
     */
    NzSliderHandleComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2xpZGVyLyIsInNvdXJjZXMiOlsiaGFuZGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBR0wsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBMEJuRCxNQUFNLE9BQU8sdUJBQXVCOzs7OztJQWtCbEMsWUFBb0IsYUFBOEIsRUFBVSxHQUFzQjtRQUE5RCxrQkFBYSxHQUFiLGFBQWEsQ0FBaUI7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQVJ6RSxtQkFBYyxHQUF3QixTQUFTLENBQUM7UUFHaEMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUd4QyxVQUFLLEdBQXFCLEVBQUUsQ0FBQztRQTZCN0IsZ0JBQVc7OztRQUFHLEdBQUcsRUFBRTtZQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO2dCQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQzFCO1FBQ0gsQ0FBQyxFQUFDO1FBRUYsZ0JBQVc7OztRQUFHLEdBQUcsRUFBRTtZQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMs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Q3pCLHdDQUF3Qjs7SUFDeEIsaURBQXlEOztJQUN6RCxtREFBbUM7O0lBQ25DLG1EQUErRDs7SUFDL0QseUNBQXdDOztJQUV4QywrQ0FBc0I7O0lBQ3RCLHdDQUE2Qjs7SUE2QjdCLDhDQU1FOztJQUVGLDhDQUtFOzs7OztJQXhDVSxnREFBc0M7Ozs7O0lBQUUsc0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE5nU3R5bGVJbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuXG5pbXBvcnQgeyBOelRvb2x0aXBEaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xuaW1wb3J0IHsgTnpTbGlkZXJTZXJ2aWNlIH0gZnJvbSAnLi9zbGlkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBOelNsaWRlclNob3dUb29sdGlwIH0gZnJvbSAnLi90eXBpbmdzJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ256LXNsaWRlci1oYW5kbGUnLFxuICBleHBvcnRBczogJ256U2xpZGVySGFuZGxlJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgI2hhbmRsZVxuICAgICAgY2xhc3M9XCJhbnQtc2xpZGVyLWhhbmRsZVwiXG4gICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgbnotdG9vbHRpcFxuICAgICAgW25nU3R5bGVdPVwic3R5bGVcIlxuICAgICAgW256VG9vbHRpcFRpdGxlXT1cInRvb2x0aXBGb3JtYXR0ZXIgPT09IG51bGwgfHwgdG9vbHRpcFZpc2libGUgPT09ICduZXZlcicgPyBudWxsIDogdG9vbHRpcFRpdGxlXCJcbiAgICAgIFtuelRvb2x0aXBUcmlnZ2VyXT1cIm51bGxcIlxuICAgICAgW256VG9vbHRpcFBsYWNlbWVudF09XCJ0b29sdGlwUGxhY2VtZW50XCJcbiAgICA+PC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnKG1vdXNlZW50ZXIpJzogJ2VudGVySGFuZGxlKCknLFxuICAgICcobW91c2VsZWF2ZSknOiAnbGVhdmVIYW5kbGUoKSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelNsaWRlckhhbmRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9hY3RpdmU6IEJvb2xlYW5JbnB1dDtcblxuICBAVmlld0NoaWxkKCdoYW5kbGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgaGFuZGxlRWw/OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKE56VG9vbHRpcERpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pIHRvb2x0aXA/OiBOelRvb2x0aXBEaXJlY3RpdmU7XG5cbiAgQElucHV0KCkgdmVydGljYWw/OiBib29sZWFuO1xuICBASW5wdXQoKSByZXZlcnNlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgb2Zmc2V0PzogbnVtYmVyO1xuICBASW5wdXQoKSB2YWx1ZT86IG51bWJlcjtcbiAgQElucHV0KCkgdG9vbHRpcFZpc2libGU6IE56U2xpZGVyU2hvd1Rvb2x0aXAgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIHRvb2x0aXBQbGFjZW1lbnQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRvb2x0aXBGb3JtYXR0ZXI/OiBudWxsIHwgKCh2YWx1ZTogbnVtYmVyKSA9PiBzdHJpbmcpO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYWN0aXZlID0gZmFsc2U7XG5cbiAgdG9vbHRpcFRpdGxlPzogc3RyaW5nO1xuICBzdHlsZTogTmdTdHlsZUludGVyZmFjZSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2xpZGVyU2VydmljZTogTnpTbGlkZXJTZXJ2aWNlLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgb2Zmc2V0LCB2YWx1ZSwgYWN0aXZlLCB0b29sdGlwVmlzaWJsZSwgcmV2ZXJzZSB9ID0gY2hhbmdlcztcblxuICAgIGlmIChvZmZzZXQgfHwgcmV2ZXJzZSkge1xuICAgICAgdGhpcy51cGRhdGVTdHlsZSgpO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy51cGRhdGVUb29sdGlwVGl0bGUoKTtcbiAgICAgIHRoaXMudXBkYXRlVG9vbHRpcFBvc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgaWYgKGFjdGl2ZS5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy50b2dnbGVUb29sdGlwKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50b2dnbGVUb29sdGlwKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodG9vbHRpcFZpc2libGU/LmN1cnJlbnRWYWx1ZSA9PT0gJ2Fsd2F5cycpIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy50b2dnbGVUb29sdGlwKHRydWUsIHRydWUpKTtcbiAgICB9XG4gIH1cblxuICBlbnRlckhhbmRsZSA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMuc2xpZGVyU2VydmljZS5pc0RyYWdnaW5nKSB7XG4gICAgICB0aGlzLnRvZ2dsZVRvb2x0aXAodHJ1ZSk7XG4gICAgICB0aGlzLnVwZGF0ZVRvb2x0aXBQb3NpdGlvbigpO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfTtcblxuICBsZWF2ZUhhbmRsZSA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMuc2xpZGVyU2VydmljZS5pc0RyYWdnaW5nKSB7XG4gICAgICB0aGlzLnRvZ2dsZVRvb2x0aXAoZmFsc2UpO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfTtcblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZUVsPy5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZVRvb2x0aXAoc2hvdzogYm9vbGVhbiwgZm9yY2U6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGlmICghZm9yY2UgJiYgKHRoaXMudG9vbHRpcFZpc2libGUgIT09ICdkZWZhdWx0JyB8fCAhdGhpcy50b29sdGlwKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzaG93KSB7XG4gICAgICB0aGlzLnRvb2x0aXA/LnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b29sdGlwPy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVUb29sdGlwVGl0bGUoKTogdm9pZCB7XG4gICAgdGhpcy50b29sdGlwVGl0bGUgPSB0aGlzLnRvb2x0aXBGb3JtYXR0ZXIgPyB0aGlzLnRvb2x0aXBGb3JtYXR0ZXIodGhpcy52YWx1ZSEpIDogYCR7dGhpcy52YWx1ZX1gO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVUb29sdGlwUG9zaXRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudG9vbHRpcCkge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLnRvb2x0aXA/LnVwZGF0ZVBvc2l0aW9uKCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU3R5bGUoKTogdm9pZCB7XG4gICAgY29uc3QgdmVydGljYWwgPSB0aGlzLnZlcnRpY2FsO1xuICAgIGNvbnN0IHJldmVyc2UgPSB0aGlzLnJldmVyc2U7XG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG5cbiAgICBjb25zdCBwb3NpdGlvblN0eWxlID0gdmVydGljYWxcbiAgICAgID8ge1xuICAgICAgICAgIFtyZXZlcnNlID8gJ3RvcCcgOiAnYm90dG9tJ106IGAke29mZnNldH0lYCxcbiAgICAgICAgICBbcmV2ZXJzZSA/ICdib3R0b20nIDogJ3RvcCddOiAnYXV0bycsXG4gICAgICAgICAgdHJhbnNmb3JtOiByZXZlcnNlID8gbnVsbCA6IGB0cmFuc2xhdGVZKCs1MCUpYFxuICAgICAgICB9XG4gICAgICA6IHtcbiAgICAgICAgICBbcmV2ZXJzZSA/ICdyaWdodCcgOiAnbGVmdCddOiBgJHtvZmZzZXR9JWAsXG4gICAgICAgICAgW3JldmVyc2UgPyAnbGVmdCcgOiAncmlnaHQnXTogJ2F1dG8nLFxuICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHtyZXZlcnNlID8gJysnIDogJy0nfTUwJSlgXG4gICAgICAgIH07XG5cbiAgICB0aGlzLnN0eWxlID0gcG9zaXRpb25TdHlsZTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19