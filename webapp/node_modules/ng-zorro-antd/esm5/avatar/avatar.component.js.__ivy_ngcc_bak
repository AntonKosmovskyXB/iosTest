/**
 * @fileoverview added by tsickle
 * Generated from: avatar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'avatar';
var NzAvatarComponent = /** @class */ (function () {
    function NzAvatarComponent(nzConfigService, elementRef, cdr, platform) {
        this.nzConfigService = nzConfigService;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.platform = platform;
        this.nzShape = 'circle';
        this.nzSize = 'default';
        this.nzError = new EventEmitter();
        this.hasText = false;
        this.hasSrc = true;
        this.hasIcon = false;
        this.textStyles = {};
        this.classMap = {};
        this.customSize = null;
        this.el = this.elementRef.nativeElement;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    NzAvatarComponent.prototype.imgError = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.nzError.emit($event);
        if (!$event.defaultPrevented) {
            this.hasSrc = false;
            this.hasIcon = false;
            this.hasText = false;
            if (this.nzIcon) {
                this.hasIcon = true;
            }
            else if (this.nzText) {
                this.hasText = true;
            }
            this.cdr.detectChanges();
            this.setSizeStyle();
            this.notifyCalc();
        }
    };
    /**
     * @return {?}
     */
    NzAvatarComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.hasText = !this.nzSrc && !!this.nzText;
        this.hasIcon = !this.nzSrc && !!this.nzIcon;
        this.hasSrc = !!this.nzSrc;
        this.setSizeStyle();
        this.notifyCalc();
    };
    /**
     * @private
     * @return {?}
     */
    NzAvatarComponent.prototype.calcStringSize = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.hasText) {
            return;
        }
        /** @type {?} */
        var childrenWidth = (/** @type {?} */ (this.textEl)).nativeElement.offsetWidth;
        /** @type {?} */
        var avatarWidth = this.el.getBoundingClientRect().width;
        /** @type {?} */
        var scale = avatarWidth - 8 < childrenWidth ? (avatarWidth - 8) / childrenWidth : 1;
        this.textStyles = {
            transform: "scale(" + scale + ") translateX(-50%)"
        };
        if (this.customSize) {
            Object.assign(this.textStyles, {
                lineHeight: this.customSize
            });
        }
        this.cdr.detectChanges();
    };
    /**
     * @private
     * @return {?}
     */
    NzAvatarComponent.prototype.notifyCalc = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        // If use ngAfterViewChecked, always demands more computations, so......
        if (this.platform.isBrowser) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.calcStringSize();
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzAvatarComponent.prototype.setSizeStyle = /**
     * @private
     * @return {?}
     */
    function () {
        if (typeof this.nzSize === 'number') {
            this.customSize = this.nzSize + "px";
        }
        else {
            this.customSize = null;
        }
        this.cdr.markForCheck();
    };
    NzAvatarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-avatar',
                    exportAs: 'nzAvatar',
                    template: "\n    <i nz-icon *ngIf=\"nzIcon && hasIcon\" [nzType]=\"nzIcon\"></i>\n    <img *ngIf=\"nzSrc && hasSrc\" [src]=\"nzSrc\" [attr.srcset]=\"nzSrcSet\" [attr.alt]=\"nzAlt\" (error)=\"imgError($event)\" />\n    <span class=\"ant-avatar-string\" #textEl [ngStyle]=\"textStyles\" *ngIf=\"nzText && hasText\">{{ nzText }}</span>\n  ",
                    host: {
                        '[class.ant-avatar]': 'true',
                        '[class.ant-avatar-lg]': "nzSize === 'large'",
                        '[class.ant-avatar-sm]': "nzSize === 'small'",
                        '[class.ant-avatar-square]': "nzShape === 'square'",
                        '[class.ant-avatar-circle]': "nzShape === 'circle'",
                        '[class.ant-avatar-icon]': "nzIcon",
                        '[class.ant-avatar-image]': "hasSrc ",
                        '[style.width]': 'customSize',
                        '[style.height]': 'customSize',
                        '[style.line-height]': 'customSize',
                        // nzSize type is number when customSize is true
                        '[style.font-size.px]': '(hasIcon && customSize) ? $any(nzSize) / 2 : null'
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    NzAvatarComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Platform }
    ]; };
    NzAvatarComponent.propDecorators = {
        nzShape: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzText: [{ type: Input }],
        nzSrc: [{ type: Input }],
        nzSrcSet: [{ type: Input }],
        nzAlt: [{ type: Input }],
        nzIcon: [{ type: Input }],
        nzError: [{ type: Output }],
        textEl: [{ type: ViewChild, args: ['textEl', { static: false },] }]
    };
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", String)
    ], NzAvatarComponent.prototype, "nzShape", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", Object)
    ], NzAvatarComponent.prototype, "nzSize", void 0);
    return NzAvatarComponent;
}());
export { NzAvatarComponent };
if (false) {
    /** @type {?} */
    NzAvatarComponent.prototype.nzShape;
    /** @type {?} */
    NzAvatarComponent.prototype.nzSize;
    /** @type {?} */
    NzAvatarComponent.prototype.nzText;
    /** @type {?} */
    NzAvatarComponent.prototype.nzSrc;
    /** @type {?} */
    NzAvatarComponent.prototype.nzSrcSet;
    /** @type {?} */
    NzAvatarComponent.prototype.nzAlt;
    /** @type {?} */
    NzAvatarComponent.prototype.nzIcon;
    /** @type {?} */
    NzAvatarComponent.prototype.nzError;
    /** @type {?} */
    NzAvatarComponent.prototype.hasText;
    /** @type {?} */
    NzAvatarComponent.prototype.hasSrc;
    /** @type {?} */
    NzAvatarComponent.prototype.hasIcon;
    /** @type {?} */
    NzAvatarComponent.prototype.textStyles;
    /** @type {?} */
    NzAvatarComponent.prototype.classMap;
    /** @type {?} */
    NzAvatarComponent.prototype.customSize;
    /** @type {?} */
    NzAvatarComponent.prototype.textEl;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.el;
    /** @type {?} */
    NzAvatarComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYXZhdGFyLyIsInNvdXJjZXMiOlsiYXZhdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztJQUdsRSx3QkFBd0IsR0FBRyxRQUFRO0FBRXpDO0lBK0NFLDJCQUNTLGVBQWdDLEVBQy9CLFVBQXNCLEVBQ3RCLEdBQXNCLEVBQ3RCLFFBQWtCO1FBSG5CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVU7UUF4Qm1CLFlBQU8sR0FBa0IsUUFBUSxDQUFDO1FBQ2xDLFdBQU0sR0FBMkIsU0FBUyxDQUFDO1FBTXZFLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO1FBRXZELFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsV0FBTSxHQUFZLElBQUksQ0FBQztRQUN2QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGVBQVUsR0FBcUIsRUFBRSxDQUFDO1FBQ2xDLGFBQVEsR0FBcUIsRUFBRSxDQUFDO1FBQ2hDLGVBQVUsR0FBa0IsSUFBSSxDQUFDO1FBSXpCLE9BQUUsR0FBZ0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFPckQsQ0FBQzs7Ozs7SUFFSixvQ0FBUTs7OztJQUFSLFVB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Qzs7SUFDbEMscUNBQWdDOztJQUNoQyx1Q0FBaUM7O0lBRWpDLG1DQUE0RDs7Ozs7SUFFNUQsK0JBQXdEOztJQUd0RCw0Q0FBdUM7Ozs7O0lBQ3ZDLHVDQUE4Qjs7Ozs7SUFDOUIsZ0NBQThCOzs7OztJQUM5QixxQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgTmdDbGFzc0ludGVyZmFjZSwgTmdTdHlsZUludGVyZmFjZSwgTnpTaGFwZVNDVHlwZSwgTnpTaXplTERTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdhdmF0YXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1hdmF0YXInLFxuICBleHBvcnRBczogJ256QXZhdGFyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aSBuei1pY29uICpuZ0lmPVwibnpJY29uICYmIGhhc0ljb25cIiBbbnpUeXBlXT1cIm56SWNvblwiPjwvaT5cbiAgICA8aW1nICpuZ0lmPVwibnpTcmMgJiYgaGFzU3JjXCIgW3NyY109XCJuelNyY1wiIFthdHRyLnNyY3NldF09XCJuelNyY1NldFwiIFthdHRyLmFsdF09XCJuekFsdFwiIChlcnJvcik9XCJpbWdFcnJvcigkZXZlbnQpXCIgLz5cbiAgICA8c3BhbiBjbGFzcz1cImFudC1hdmF0YXItc3RyaW5nXCIgI3RleHRFbCBbbmdTdHlsZV09XCJ0ZXh0U3R5bGVzXCIgKm5nSWY9XCJuelRleHQgJiYgaGFzVGV4dFwiPnt7IG56VGV4dCB9fTwvc3Bhbj5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LWF2YXRhcl0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hbnQtYXZhdGFyLWxnXSc6IGBuelNpemUgPT09ICdsYXJnZSdgLFxuICAgICdbY2xhc3MuYW50LWF2YXRhci1zbV0nOiBgbnpTaXplID09PSAnc21hbGwnYCxcbiAgICAnW2NsYXNzLmFudC1hdmF0YXItc3F1YXJlXSc6IGBuelNoYXBlID09PSAnc3F1YXJlJ2AsXG4gICAgJ1tjbGFzcy5hbnQtYXZhdGFyLWNpcmNsZV0nOiBgbnpTaGFwZSA9PT0gJ2NpcmNsZSdgLFxuICAgICdbY2xhc3MuYW50LWF2YXRhci1pY29uXSc6IGBuekljb25gLFxuICAgICdbY2xhc3MuYW50LWF2YXRhci1pbWFnZV0nOiBgaGFzU3JjIGAsXG4gICAgJ1tzdHlsZS53aWR0aF0nOiAnY3VzdG9tU2l6ZScsXG4gICAgJ1tzdHlsZS5oZWlnaHRdJzogJ2N1c3RvbVNpemUnLFxuICAgICdbc3R5bGUubGluZS1oZWlnaHRdJzogJ2N1c3RvbVNpemUnLFxuICAgIC8vIG56U2l6ZSB0eXBlIGlzIG51bWJlciB3aGVuIGN1c3RvbVNpemUgaXMgdHJ1ZVxuICAgICdbc3R5bGUuZm9udC1zaXplLnB4XSc6ICcoaGFzSWNvbiAmJiBjdXN0b21TaXplKSA/ICRhbnkobnpTaXplKSAvIDIgOiBudWxsJ1xuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTnpBdmF0YXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIG56U2hhcGU6IE56U2hhcGVTQ1R5cGUgPSAnY2lyY2xlJztcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBuelNpemU6IE56U2l6ZUxEU1R5cGUgfCBudW1iZXIgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIG56VGV4dD86IHN0cmluZztcbiAgQElucHV0KCkgbnpTcmM/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56U3JjU2V0Pzogc3RyaW5nO1xuICBASW5wdXQoKSBuekFsdD86IHN0cmluZztcbiAgQElucHV0KCkgbnpJY29uPzogc3RyaW5nO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpFcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XG5cbiAgaGFzVGV4dDogYm9vbGVhbiA9IGZhbHNlO1xuICBoYXNTcmM6IGJvb2xlYW4gPSB0cnVlO1xuICBoYXNJY29uOiBib29sZWFuID0gZmFsc2U7XG4gIHRleHRTdHlsZXM6IE5nU3R5bGVJbnRlcmZhY2UgPSB7fTtcbiAgY2xhc3NNYXA6IE5nQ2xhc3NJbnRlcmZhY2UgPSB7fTtcbiAgY3VzdG9tU2l6ZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgQFZpZXdDaGlsZCgndGV4dEVsJywgeyBzdGF0aWM6IGZhbHNlIH0pIHRleHRFbD86IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxuICApIHt9XG5cbiAgaW1nRXJyb3IoJGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIHRoaXMubnpFcnJvci5lbWl0KCRldmVudCk7XG4gICAgaWYgKCEkZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgdGhpcy5oYXNTcmMgPSBmYWxzZTtcbiAgICAgIHRoaXMuaGFzSWNvbiA9IGZhbHNlO1xuICAgICAgdGhpcy5oYXNUZXh0ID0gZmFsc2U7XG4gICAgICBpZiAodGhpcy5uekljb24pIHtcbiAgICAgICAgdGhpcy5oYXNJY29uID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5uelRleHQpIHtcbiAgICAgICAgdGhpcy5oYXNUZXh0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMuc2V0U2l6ZVN0eWxlKCk7XG4gICAgICB0aGlzLm5vdGlmeUNhbGMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmhhc1RleHQgPSAhdGhpcy5uelNyYyAmJiAhIXRoaXMubnpUZXh0O1xuICAgIHRoaXMuaGFzSWNvbiA9ICF0aGlzLm56U3JjICYmICEhdGhpcy5uekljb247XG4gICAgdGhpcy5oYXNTcmMgPSAhIXRoaXMubnpTcmM7XG5cbiAgICB0aGlzLnNldFNpemVTdHlsZSgpO1xuICAgIHRoaXMubm90aWZ5Q2FsYygpO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWxjU3RyaW5nU2l6ZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaGFzVGV4dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkcmVuV2lkdGggPSB0aGlzLnRleHRFbCEubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCBhdmF0YXJXaWR0aCA9IHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgY29uc3Qgc2NhbGUgPSBhdmF0YXJXaWR0aCAtIDggPCBjaGlsZHJlbldpZHRoID8gKGF2YXRhcldpZHRoIC0gOCkgLyBjaGlsZHJlbldpZHRoIDogMTtcbiAgICB0aGlzLnRleHRTdHlsZXMgPSB7XG4gICAgICB0cmFuc2Zvcm06IGBzY2FsZSgke3NjYWxlfSkgdHJhbnNsYXRlWCgtNTAlKWBcbiAgICB9O1xuICAgIGlmICh0aGlzLmN1c3RvbVNpemUpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy50ZXh0U3R5bGVzLCB7XG4gICAgICAgIGxpbmVIZWlnaHQ6IHRoaXMuY3VzdG9tU2l6ZVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5Q2FsYygpOiB2b2lkIHtcbiAgICAvLyBJZiB1c2UgbmdBZnRlclZpZXdDaGVja2VkLCBhbHdheXMgZGVtYW5kcyBtb3JlIGNvbXB1dGF0aW9ucywgc28uLi4uLi5cbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmNhbGNTdHJpbmdTaXplKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFNpemVTdHlsZSgpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHRoaXMubnpTaXplID09PSAnbnVtYmVyJykge1xuICAgICAgdGhpcy5jdXN0b21TaXplID0gYCR7dGhpcy5uelNpemV9cHhgO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1c3RvbVNpemUgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19