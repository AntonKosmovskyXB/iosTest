/**
 * @fileoverview added by tsickle
 * Generated from: icon.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __extends, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Input, Optional, Renderer2 } from '@angular/core';
import { IconDirective } from '@ant-design/icons-angular';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { NzIconPatchService, NzIconService } from './icon.service';
var NzIconDirective = /** @class */ (function (_super) {
    __extends(NzIconDirective, _super);
    function NzIconDirective(elementRef, iconService, renderer, iconPatch) {
        var _this = _super.call(this, iconService, elementRef, renderer) || this;
        _this.iconService = iconService;
        _this.renderer = renderer;
        _this.cacheClassName = null;
        _this.nzRotate = 0;
        _this.spin = false;
        if (iconPatch) {
            iconPatch.doPatch();
        }
        _this.el = elementRef.nativeElement;
        return _this;
    }
    Object.defineProperty(NzIconDirective.prototype, "nzSpin", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.spin = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "nzType", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "nzTheme", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.theme = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "nzTwotoneColor", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.twoToneColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "nzIconfont", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.iconfont = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NzIconDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzType = changes.nzType, nzTwotoneColor = changes.nzTwotoneColor, nzSpin = changes.nzSpin, nzTheme = changes.nzTheme, nzRotate = changes.nzRotate;
        if (nzType || nzTwotoneColor || nzSpin || nzTheme) {
            this.changeIcon2();
        }
        else if (nzRotate) {
            this.handleRotate((/** @type {?} */ (this.el.firstChild)));
        }
        else {
            this._setSVGElement(this.iconService.createIconfontIcon("#" + this.iconfont));
        }
    };
    /**
     * @return {?}
     */
    NzIconDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.setAttribute(this.el, 'class', ("anticon " + this.el.className).trim());
    };
    /**
     * If custom content is provided, try to normalize SVG elements.
     */
    /**
     * If custom content is provided, try to normalize SVG elements.
     * @return {?}
     */
    NzIconDirective.prototype.ngAfterContentChecked = /**
     * If custom content is provided, try to normalize SVG elements.
     * @return {?}
     */
    function () {
        if (!this.type) {
            /** @type {?} */
            var children = this.el.children;
            /** @type {?} */
            var length_1 = children.length;
            if (!this.type && children.length) {
                while (length_1--) {
                    /** @type {?} */
                    var child = children[length_1];
                    if (child.tagName.toLowerCase() === 'svg') {
                        this.iconService.normalizeSvgElement((/** @type {?} */ (child)));
                    }
                }
            }
        }
    };
    /**
     * Replacement of `changeIcon` for more modifications.
     */
    /**
     * Replacement of `changeIcon` for more modifications.
     * @private
     * @return {?}
     */
    NzIconDirective.prototype.changeIcon2 = /**
     * Replacement of `changeIcon` for more modifications.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.setClassName();
        this._changeIcon().then((/**
         * @param {?} svgOrRemove
         * @return {?}
         */
        function (svgOrRemove) {
            if (svgOrRemove) {
                _this.setSVGData(svgOrRemove);
                _this.handleSpin(svgOrRemove);
                _this.handleRotate(svgOrRemove);
            }
        }));
    };
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    NzIconDirective.prototype.handleSpin = /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        if (this.spin || this.type === 'loading') {
            this.renderer.addClass(svg, 'anticon-spin');
        }
        else {
            this.renderer.removeClass(svg, 'anticon-spin');
        }
    };
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    NzIconDirective.prototype.handleRotate = /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        if (this.nzRotate) {
            this.renderer.setAttribute(svg, 'style', "transform: rotate(" + this.nzRotate + "deg)");
        }
        else {
            this.renderer.removeAttribute(svg, 'style');
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzIconDirective.prototype.setClassName = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.cacheClassName) {
            this.renderer.removeClass(this.el, this.cacheClassName);
        }
        this.cacheClassName = "anticon-" + this.type;
        this.renderer.addClass(this.el, this.cacheClassName);
    };
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    NzIconDirective.prototype.setSVGData = /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        this.renderer.setAttribute(svg, 'data-icon', (/** @type {?} */ (this.type)));
        this.renderer.setAttribute(svg, 'aria-hidden', 'true');
    };
    NzIconDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-icon]',
                    exportAs: 'nzIcon',
                    host: {
                        '[class.anticon]': 'true'
                    }
                },] }
    ];
    /** @nocollapse */
    NzIconDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzIconService },
        { type: Renderer2 },
        { type: NzIconPatchService, decorators: [{ type: Optional }] }
    ]; };
    NzIconDirective.propDecorators = {
        nzSpin: [{ type: Input }],
        nzRotate: [{ type: Input }],
        nzType: [{ type: Input }],
        nzTheme: [{ type: Input }],
        nzTwotoneColor: [{ type: Input }],
        nzIconfont: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NzIconDirective.prototype, "nzSpin", null);
    return NzIconDirective;
}(IconDirective));
export { NzIconDirective };
if (false) {
    /** @type {?} */
    NzIconDirective.prototype.cacheClassName;
    /** @type {?} */
    NzIconDirective.prototype.nzRotate;
    /** @type {?} */
    NzIconDirective.prototype.hostClass;
    /**
     * @type {?}
     * @private
     */
    NzIconDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzIconDirective.prototype.iconfont;
    /**
     * @type {?}
     * @private
     */
    NzIconDirective.prototype.spin;
    /** @type {?} */
    NzIconDirective.prototype.iconService;
    /** @type {?} */
    NzIconDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2ljb24vIiwic291cmNlcyI6WyJpY29uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUF1QixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBcUIsUUFBUSxFQUFFLFNBQVMsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDekksT0FBTyxFQUFFLGFBQWEsRUFBYSxNQUFNLDJCQUEyQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkU7SUFPcUMsbUNBQWE7SUFvQ2hELHlCQUNFLFVBQXNCLEVBQ2YsV0FBMEIsRUFDMUIsUUFBbUIsRUFDZCxTQUE2QjtRQUozQyxZQU1FLGtCQUFNLFdBQVcsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLFNBT3pDO1FBWFEsaUJBQVcsR0FBWCxXQUFXLENBQWU7UUFDMUIsY0FBUSxHQUFSLFFBQVEsQ0FBVztRQXRDNUIsb0JBQWMsR0FBa0IsSUFBSSxDQUFDO1FBTzVCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUEwQnRCLFVBQUksR0FBWSxLQUFLLENBQUM7UUFVNUIsSUFBSSxTQUFTLEVBQUU7WUFDYixTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDckI7UUFFRCxLQUFJLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7O0lBQ3JDLENBQUM7SUE3Q0Qsc0JBQUksbUNBQU07Ozs7O1FBQVYsVUFBVyxLQUFjO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBSUQsc0JBQ0ksbUNBQU07Ozs7O1FBRFYsVUFDVyxLQUFhO1lBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxD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QUFVO2dCQUl0QixhQUFhO2dCQUorQyxTQUFTO2dCQUl6RixrQkFBa0IsdUJBaUR0QixRQUFROzs7eUJBdENWLEtBQUs7MkJBTUwsS0FBSzt5QkFFTCxLQUFLOzBCQUtMLEtBQUs7aUNBS0wsS0FBSzs2QkFLTCxLQUFLOztJQXJCTjtRQURDLFlBQVksRUFBRTs7O2lEQUdkO0lBeUhILHNCQUFDO0NBQUEsQUF0SUQsQ0FPcUMsYUFBYSxHQStIakQ7U0EvSFksZUFBZTs7O0lBQzFCLHlDQUFxQzs7SUFPckMsbUNBQThCOztJQXNCOUIsb0NBQW1COzs7OztJQUVuQiw2QkFBaUM7Ozs7O0lBQ2pDLG1DQUEwQjs7Ozs7SUFDMUIsK0JBQThCOztJQUk1QixzQ0FBaUM7O0lBQ2pDLG1DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEFmdGVyQ29udGVudENoZWNrZWQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPcHRpb25hbCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uRGlyZWN0aXZlLCBUaGVtZVR5cGUgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcblxuaW1wb3J0IHsgTnpJY29uUGF0Y2hTZXJ2aWNlLCBOekljb25TZXJ2aWNlIH0gZnJvbSAnLi9pY29uLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnotaWNvbl0nLFxuICBleHBvcnRBczogJ256SWNvbicsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudGljb25dJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpJY29uRGlyZWN0aXZlIGV4dGVuZHMgSWNvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRDaGVja2VkIHtcbiAgY2FjaGVDbGFzc05hbWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgc2V0IG56U3Bpbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuc3BpbiA9IHZhbHVlO1xuICB9XG5cbiAgQElucHV0KCkgbnpSb3RhdGU6IG51bWJlciA9IDA7XG5cbiAgQElucHV0KClcbiAgc2V0IG56VHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy50eXBlID0gdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpUaGVtZSh2YWx1ZTogVGhlbWVUeXBlKSB7XG4gICAgdGhpcy50aGVtZSA9IHZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56VHdvdG9uZUNvbG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnR3b1RvbmVDb2xvciA9IHZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56SWNvbmZvbnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuaWNvbmZvbnQgPSB2YWx1ZTtcbiAgfVxuXG4gIGhvc3RDbGFzcz86IHN0cmluZztcblxuICBwcml2YXRlIHJlYWRvbmx5IGVsOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBpY29uZm9udD86IHN0cmluZztcbiAgcHJpdmF0ZSBzcGluOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgaWNvblNlcnZpY2U6IE56SWNvblNlcnZpY2UsXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQE9wdGlvbmFsKCkgaWNvblBhdGNoOiBOekljb25QYXRjaFNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoaWNvblNlcnZpY2UsIGVsZW1lbnRSZWYsIHJlbmRlcmVyKTtcblxuICAgIGlmIChpY29uUGF0Y2gpIHtcbiAgICAgIGljb25QYXRjaC5kb1BhdGNoKCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG56VHlwZSwgbnpUd290b25lQ29sb3IsIG56U3BpbiwgbnpUaGVtZSwgbnpSb3RhdGUgfSA9IGNoYW5nZXM7XG5cbiAgICBpZiAobnpUeXBlIHx8IG56VHdvdG9uZUNvbG9yIHx8IG56U3BpbiB8fCBuelRoZW1lKSB7XG4gICAgICB0aGlzLmNoYW5nZUljb24yKCk7XG4gICAgfSBlbHNlIGlmIChuelJvdGF0ZSkge1xuICAgICAgdGhpcy5oYW5kbGVSb3RhdGUodGhpcy5lbC5maXJzdENoaWxkIGFzIFNWR0VsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZXRTVkdFbGVtZW50KHRoaXMuaWNvblNlcnZpY2UuY3JlYXRlSWNvbmZvbnRJY29uKGAjJHt0aGlzLmljb25mb250fWApKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLCAnY2xhc3MnLCBgYW50aWNvbiAke3RoaXMuZWwuY2xhc3NOYW1lfWAudHJpbSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiBjdXN0b20gY29udGVudCBpcyBwcm92aWRlZCwgdHJ5IHRvIG5vcm1hbGl6ZSBTVkcgZWxlbWVudHMuXG4gICAqL1xuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnR5cGUpIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5lbC5jaGlsZHJlbjtcbiAgICAgIGxldCBsZW5ndGggPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgICBpZiAoIXRoaXMudHlwZSAmJiBjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAgICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbltsZW5ndGhdO1xuICAgICAgICAgIGlmIChjaGlsZC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzdmcnKSB7XG4gICAgICAgICAgICB0aGlzLmljb25TZXJ2aWNlLm5vcm1hbGl6ZVN2Z0VsZW1lbnQoY2hpbGQgYXMgU1ZHRWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2VtZW50IG9mIGBjaGFuZ2VJY29uYCBmb3IgbW9yZSBtb2RpZmljYXRpb25zLlxuICAgKi9cbiAgcHJpdmF0ZSBjaGFuZ2VJY29uMigpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzTmFtZSgpO1xuICAgIHRoaXMuX2NoYW5nZUljb24oKS50aGVuKHN2Z09yUmVtb3ZlID0+IHtcbiAgICAgIGlmIChzdmdPclJlbW92ZSkge1xuICAgICAgICB0aGlzLnNldFNWR0RhdGEoc3ZnT3JSZW1vdmUpO1xuICAgICAgICB0aGlzLmhhbmRsZVNwaW4oc3ZnT3JSZW1vdmUpO1xuICAgICAgICB0aGlzLmhhbmRsZVJvdGF0ZShzdmdPclJlbW92ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNwaW4oc3ZnOiBTVkdFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3BpbiB8fCB0aGlzLnR5cGUgPT09ICdsb2FkaW5nJykge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhzdmcsICdhbnRpY29uLXNwaW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhzdmcsICdhbnRpY29uLXNwaW4nKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVJvdGF0ZShzdmc6IFNWR0VsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelJvdGF0ZSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAnc3R5bGUnLCBgdHJhbnNmb3JtOiByb3RhdGUoJHt0aGlzLm56Um90YXRlfWRlZylgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUoc3ZnLCAnc3R5bGUnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzTmFtZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jYWNoZUNsYXNzTmFtZSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLCB0aGlzLmNhY2hlQ2xhc3NOYW1lKTtcbiAgICB9XG4gICAgdGhpcy5jYWNoZUNsYXNzTmFtZSA9IGBhbnRpY29uLSR7dGhpcy50eXBlfWA7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLCB0aGlzLmNhY2hlQ2xhc3NOYW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U1ZHRGF0YShzdmc6IFNWR0VsZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdkYXRhLWljb24nLCB0aGlzLnR5cGUgYXMgc3RyaW5nKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gIH1cbn1cbiJdfQ==