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
var NzSliderHandleComponent = /** @class */ (function () {
    function NzSliderHandleComponent(sliderService, cdr) {
        var _this = this;
        this.sliderService = sliderService;
        this.cdr = cdr;
        this.tooltipVisible = 'default';
        this.active = false;
        this.style = {};
        this.enterHandle = (/**
         * @return {?}
         */
        function () {
            if (!_this.sliderService.isDragging) {
                _this.toggleTooltip(true);
                _this.updateTooltipPosition();
                _this.cdr.detectChanges();
            }
        });
        this.leaveHandle = (/**
         * @return {?}
         */
        function () {
            if (!_this.sliderService.isDragging) {
                _this.toggleTooltip(false);
                _this.cdr.detectChanges();
            }
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSliderHandleComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        var offset = changes.offset, value = changes.value, active = changes.active, tooltipVisible = changes.tooltipVisible, reverse = changes.reverse;
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
            function () { return _this.toggleTooltip(true, true); }));
        }
    };
    /**
     * @return {?}
     */
    NzSliderHandleComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        var _a;
        (_a = this.handleEl) === null || _a === void 0 ? void 0 : _a.nativeElement.focus();
    };
    /**
     * @private
     * @param {?} show
     * @param {?=} force
     * @return {?}
     */
    NzSliderHandleComponent.prototype.toggleTooltip = /**
     * @private
     * @param {?} show
     * @param {?=} force
     * @return {?}
     */
    function (show, force) {
        if (force === void 0) { force = false; }
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
    };
    /**
     * @private
     * @return {?}
     */
    NzSliderHandleComponent.prototype.updateTooltipTitle = /**
     * @private
     * @return {?}
     */
    function () {
        this.tooltipTitle = this.tooltipFormatter ? this.tooltipFormatter((/** @type {?} */ (this.value))) : "" + this.value;
    };
    /**
     * @private
     * @return {?}
     */
    NzSliderHandleComponent.prototype.updateTooltipPosition = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.tooltip) {
            Promise.resolve().then((/**
             * @return {?}
             */
            function () { var _a; return (_a = _this.tooltip) === null || _a === void 0 ? void 0 : _a.updatePosition(); }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzSliderHandleComponent.prototype.updateStyle = /**
     * @private
     * @return {?}
     */
    function () {
        var _a, _b;
        /** @type {?} */
        var vertical = this.vertical;
        /** @type {?} */
        var reverse = this.reverse;
        /** @type {?} */
        var offset = this.offset;
        /** @type {?} */
        var positionStyle = vertical
            ? (_a = {},
                _a[reverse ? 'top' : 'bottom'] = offset + "%",
                _a[reverse ? 'bottom' : 'top'] = 'auto',
                _a.transform = reverse ? null : "translateY(+50%)",
                _a) : (_b = {},
            _b[reverse ? 'right' : 'left'] = offset + "%",
            _b[reverse ? 'left' : 'right'] = 'auto',
            _b.transform = "translateX(" + (reverse ? '+' : '-') + "50%)",
            _b);
        this.style = positionStyle;
        this.cdr.markForCheck();
    };
    NzSliderHandleComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-slider-handle',
                    exportAs: 'nzSliderHandle',
                    preserveWhitespaces: false,
                    template: "\n    <div\n      #handle\n      class=\"ant-slider-handle\"\n      tabindex=\"0\"\n      nz-tooltip\n      [ngStyle]=\"style\"\n      [nzTooltipTitle]=\"tooltipFormatter === null || tooltipVisible === 'never' ? null : tooltipTitle\"\n      [nzTooltipTrigger]=\"null\"\n      [nzTooltipPlacement]=\"tooltipPlacement\"\n    ></div>\n  ",
                    host: {
                        '(mouseenter)': 'enterHandle()',
                        '(mouseleave)': 'leaveHandle()'
                    }
                }] }
    ];
    /** @nocollapse */
    NzSliderHandleComponent.ctorParameters = function () { return [
        { type: NzSliderService },
        { type: ChangeDetectorRef }
    ]; };
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
    return NzSliderHandleComponent;
}());
export { NzSliderHandleComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2xpZGVyLyIsInNvdXJjZXMiOlsiaGFuZGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBR0wsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBR25EO0lBeUNFLGlDQUFvQixhQUE4QixFQUFVLEdBQXNCO1FBQWxGLGlCQUFzRjtRQUFsRSxrQkFBYSxHQUFiLGFBQWEsQ0FBaUI7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQVJ6RSxtQkFBYyxHQUF3QixTQUFTLENBQUM7UUFHaEMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUd4QyxVQUFLLEdBQXFCLEVBQUUsQ0FBQztRQTZCN0IsZ0JBQVc7OztRQUFHO1lBQ1osSUFBSSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO2dCQUNsQyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6QixLQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztnQkFDN0IsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUMxQjtRQUNILENBQUMsRUFBQztRQUVGLGdCQUFXOzs7UUFBRztZQUNaLElBQUksQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtnQkFDbEMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDMUIsS0FBSSxDQUFD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L0UsMkNBQTRCOztJQUM1QiwwQ0FBMkI7O0lBQzNCLHlDQUF5Qjs7SUFDekIsd0NBQXdCOztJQUN4QixpREFBeUQ7O0lBQ3pELG1EQUFtQzs7SUFDbkMsbURBQStEOztJQUMvRCx5Q0FBd0M7O0lBRXhDLCtDQUFzQjs7SUFDdEIsd0NBQTZCOztJQTZCN0IsOENBTUU7O0lBRUYsOENBS0U7Ozs7O0lBeENVLGdEQUFzQzs7Ozs7SUFBRSxzQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTmdTdHlsZUludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5cbmltcG9ydCB7IE56VG9vbHRpcERpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XG5pbXBvcnQgeyBOelNsaWRlclNlcnZpY2UgfSBmcm9tICcuL3NsaWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE56U2xpZGVyU2hvd1Rvb2x0aXAgfSBmcm9tICcuL3R5cGluZ3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotc2xpZGVyLWhhbmRsZScsXG4gIGV4cG9ydEFzOiAnbnpTbGlkZXJIYW5kbGUnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2XG4gICAgICAjaGFuZGxlXG4gICAgICBjbGFzcz1cImFudC1zbGlkZXItaGFuZGxlXCJcbiAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICBuei10b29sdGlwXG4gICAgICBbbmdTdHlsZV09XCJzdHlsZVwiXG4gICAgICBbbnpUb29sdGlwVGl0bGVdPVwidG9vbHRpcEZvcm1hdHRlciA9PT0gbnVsbCB8fCB0b29sdGlwVmlzaWJsZSA9PT0gJ25ldmVyJyA/IG51bGwgOiB0b29sdGlwVGl0bGVcIlxuICAgICAgW256VG9vbHRpcFRyaWdnZXJdPVwibnVsbFwiXG4gICAgICBbbnpUb29sdGlwUGxhY2VtZW50XT1cInRvb2x0aXBQbGFjZW1lbnRcIlxuICAgID48L2Rpdj5cbiAgYCxcbiAgaG9zdDoge1xuICAgICcobW91c2VlbnRlciknOiAnZW50ZXJIYW5kbGUoKScsXG4gICAgJyhtb3VzZWxlYXZlKSc6ICdsZWF2ZUhhbmRsZSgpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56U2xpZGVySGFuZGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2FjdGl2ZTogQm9vbGVhbklucHV0O1xuXG4gIEBWaWV3Q2hpbGQoJ2hhbmRsZScsIHsgc3RhdGljOiBmYWxzZSB9KSBoYW5kbGVFbD86IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoTnpUb29sdGlwRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSkgdG9vbHRpcD86IE56VG9vbHRpcERpcmVjdGl2ZTtcblxuICBASW5wdXQoKSB2ZXJ0aWNhbD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHJldmVyc2U/OiBib29sZWFuO1xuICBASW5wdXQoKSBvZmZzZXQ/OiBudW1iZXI7XG4gIEBJbnB1dCgpIHZhbHVlPzogbnVtYmVyO1xuICBASW5wdXQoKSB0b29sdGlwVmlzaWJsZTogTnpTbGlkZXJTaG93VG9vbHRpcCA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgdG9vbHRpcFBsYWNlbWVudD86IHN0cmluZztcbiAgQElucHV0KCkgdG9vbHRpcEZvcm1hdHRlcj86IG51bGwgfCAoKHZhbHVlOiBudW1iZXIpID0+IHN0cmluZyk7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhY3RpdmUgPSBmYWxzZTtcblxuICB0b29sdGlwVGl0bGU/OiBzdHJpbmc7XG4gIHN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlID0ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzbGlkZXJTZXJ2aWNlOiBOelNsaWRlclNlcnZpY2UsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBvZmZzZXQsIHZhbHVlLCBhY3RpdmUsIHRvb2x0aXBWaXNpYmxlLCByZXZlcnNlIH0gPSBjaGFuZ2VzO1xuXG4gICAgaWYgKG9mZnNldCB8fCByZXZlcnNlKSB7XG4gICAgICB0aGlzLnVwZGF0ZVN0eWxlKCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnVwZGF0ZVRvb2x0aXBUaXRsZSgpO1xuICAgICAgdGhpcy51cGRhdGVUb29sdGlwUG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBpZiAoYWN0aXZlLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICB0aGlzLnRvZ2dsZVRvb2x0aXAodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRvZ2dsZVRvb2x0aXAoZmFsc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0b29sdGlwVmlzaWJsZT8uY3VycmVudFZhbHVlID09PSAnYWx3YXlzJykge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLnRvZ2dsZVRvb2x0aXAodHJ1ZSwgdHJ1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIGVudGVySGFuZGxlID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5zbGlkZXJTZXJ2aWNlLmlzRHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMudG9nZ2xlVG9vbHRpcCh0cnVlKTtcbiAgICAgIHRoaXMudXBkYXRlVG9vbHRpcFBvc2l0aW9uKCk7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9O1xuXG4gIGxlYXZlSGFuZGxlID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5zbGlkZXJTZXJ2aWNlLmlzRHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMudG9nZ2xlVG9vbHRpcChmYWxzZSk7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9O1xuXG4gIGZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuaGFuZGxlRWw/Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgdG9nZ2xlVG9vbHRpcChzaG93OiBib29sZWFuLCBmb3JjZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgaWYgKCFmb3JjZSAmJiAodGhpcy50b29sdGlwVmlzaWJsZSAhPT0gJ2RlZmF1bHQnIHx8ICF0aGlzLnRvb2x0aXApKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHNob3cpIHtcbiAgICAgIHRoaXMudG9vbHRpcD8uc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvb2x0aXA/LmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVRvb2x0aXBUaXRsZSgpOiB2b2lkIHtcbiAgICB0aGlzLnRvb2x0aXBUaXRsZSA9IHRoaXMudG9vbHRpcEZvcm1hdHRlciA/IHRoaXMudG9vbHRpcEZvcm1hdHRlcih0aGlzLnZhbHVlISkgOiBgJHt0aGlzLnZhbHVlfWA7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVRvb2x0aXBQb3NpdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50b29sdGlwKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMudG9vbHRpcD8udXBkYXRlUG9zaXRpb24oKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTdHlsZSgpOiB2b2lkIHtcbiAgICBjb25zdCB2ZXJ0aWNhbCA9IHRoaXMudmVydGljYWw7XG4gICAgY29uc3QgcmV2ZXJzZSA9IHRoaXMucmV2ZXJzZTtcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLm9mZnNldDtcblxuICAgIGNvbnN0IHBvc2l0aW9uU3R5bGUgPSB2ZXJ0aWNhbFxuICAgICAgPyB7XG4gICAgICAgICAgW3JldmVyc2UgPyAndG9wJyA6ICdib3R0b20nXTogYCR7b2Zmc2V0fSVgLFxuICAgICAgICAgIFtyZXZlcnNlID8gJ2JvdHRvbScgOiAndG9wJ106ICdhdXRvJyxcbiAgICAgICAgICB0cmFuc2Zvcm06IHJldmVyc2UgPyBudWxsIDogYHRyYW5zbGF0ZVkoKzUwJSlgXG4gICAgICAgIH1cbiAgICAgIDoge1xuICAgICAgICAgIFtyZXZlcnNlID8gJ3JpZ2h0JyA6ICdsZWZ0J106IGAke29mZnNldH0lYCxcbiAgICAgICAgICBbcmV2ZXJzZSA/ICdsZWZ0JyA6ICdyaWdodCddOiAnYXV0bycsXG4gICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke3JldmVyc2UgPyAnKycgOiAnLSd9NTAlKWBcbiAgICAgICAgfTtcblxuICAgIHRoaXMuc3R5bGUgPSBwb3NpdGlvblN0eWxlO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iXX0=