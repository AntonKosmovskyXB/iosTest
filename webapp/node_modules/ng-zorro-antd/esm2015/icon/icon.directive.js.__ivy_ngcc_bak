/**
 * @fileoverview added by tsickle
 * Generated from: icon.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Input, Optional, Renderer2 } from '@angular/core';
import { IconDirective } from '@ant-design/icons-angular';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { NzIconPatchService, NzIconService } from './icon.service';
export class NzIconDirective extends IconDirective {
    /**
     * @param {?} elementRef
     * @param {?} iconService
     * @param {?} renderer
     * @param {?} iconPatch
     */
    constructor(elementRef, iconService, renderer, iconPatch) {
        super(iconService, elementRef, renderer);
        this.iconService = iconService;
        this.renderer = renderer;
        this.cacheClassName = null;
        this.nzRotate = 0;
        this.spin = false;
        if (iconPatch) {
            iconPatch.doPatch();
        }
        this.el = elementRef.nativeElement;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSpin(value) {
        this.spin = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzType(value) {
        this.type = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTheme(value) {
        this.theme = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTwotoneColor(value) {
        this.twoToneColor = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzIconfont(value) {
        this.iconfont = value;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzType, nzTwotoneColor, nzSpin, nzTheme, nzRotate } = changes;
        if (nzType || nzTwotoneColor || nzSpin || nzTheme) {
            this.changeIcon2();
        }
        else if (nzRotate) {
            this.handleRotate((/** @type {?} */ (this.el.firstChild)));
        }
        else {
            this._setSVGElement(this.iconService.createIconfontIcon(`#${this.iconfont}`));
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.setAttribute(this.el, 'class', `anticon ${this.el.className}`.trim());
    }
    /**
     * If custom content is provided, try to normalize SVG elements.
     * @return {?}
     */
    ngAfterContentChecked() {
        if (!this.type) {
            /** @type {?} */
            const children = this.el.children;
            /** @type {?} */
            let length = children.length;
            if (!this.type && children.length) {
                while (length--) {
                    /** @type {?} */
                    const child = children[length];
                    if (child.tagName.toLowerCase() === 'svg') {
                        this.iconService.normalizeSvgElement((/** @type {?} */ (child)));
                    }
                }
            }
        }
    }
    /**
     * Replacement of `changeIcon` for more modifications.
     * @private
     * @return {?}
     */
    changeIcon2() {
        this.setClassName();
        this._changeIcon().then((/**
         * @param {?} svgOrRemove
         * @return {?}
         */
        svgOrRemove => {
            if (svgOrRemove) {
                this.setSVGData(svgOrRemove);
                this.handleSpin(svgOrRemove);
                this.handleRotate(svgOrRemove);
            }
        }));
    }
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    handleSpin(svg) {
        if (this.spin || this.type === 'loading') {
            this.renderer.addClass(svg, 'anticon-spin');
        }
        else {
            this.renderer.removeClass(svg, 'anticon-spin');
        }
    }
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    handleRotate(svg) {
        if (this.nzRotate) {
            this.renderer.setAttribute(svg, 'style', `transform: rotate(${this.nzRotate}deg)`);
        }
        else {
            this.renderer.removeAttribute(svg, 'style');
        }
    }
    /**
     * @private
     * @return {?}
     */
    setClassName() {
        if (this.cacheClassName) {
            this.renderer.removeClass(this.el, this.cacheClassName);
        }
        this.cacheClassName = `anticon-${this.type}`;
        this.renderer.addClass(this.el, this.cacheClassName);
    }
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    setSVGData(svg) {
        this.renderer.setAttribute(svg, 'data-icon', (/** @type {?} */ (this.type)));
        this.renderer.setAttribute(svg, 'aria-hidden', 'true');
    }
}
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
NzIconDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NzIconService },
    { type: Renderer2 },
    { type: NzIconPatchService, decorators: [{ type: Optional }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2ljb24vIiwic291cmNlcyI6WyJpY29uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUF1QixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBcUIsUUFBUSxFQUFFLFNBQVMsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDekksT0FBTyxFQUFFLGFBQWEsRUFBYSxNQUFNLDJCQUEyQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFTbkUsTUFBTSxPQUFPLGVBQWdCLFNBQVEsYUFBYTs7Ozs7OztJQW9DaEQsWUFDRSxVQUFzQixFQUNmLFdBQTBCLEVBQzFCLFFBQW1CLEVBQ2QsU0FBNkI7UUFFekMsS0FBSyxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFKbEMsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFDMUIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQXRDNUIsbUJBQWMsR0FBa0IsSUFBSSxDQUFDO1FBTzVCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUEwQnRCLFNBQUksR0FBWSxLQUFLLENBQUM7UUFVNUIsSUFBSSxTQUFTLEVBQUU7WUFDYixTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDckI7UUFFRCxJQUFJLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUE3Q0QsSUFBSSxNQUFNLENBQUMsS0FBYztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUlELElBQ0ksTUFBTSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7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Ozs7SUFMRCx5Q0FBcUM7O0lBT3JDLG1DQUE4Qjs7SUFzQjlCLG9DQUFtQjs7Ozs7SUFFbkIsNkJBQWlDOzs7OztJQUNqQyxtQ0FBMEI7Ozs7O0lBQzFCLCtCQUE4Qjs7SUFJNUIsc0NBQWlDOztJQUNqQyxtQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBBZnRlckNvbnRlbnRDaGVja2VkLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3B0aW9uYWwsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbkRpcmVjdGl2ZSwgVGhlbWVUeXBlIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhcic7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5cbmltcG9ydCB7IE56SWNvblBhdGNoU2VydmljZSwgTnpJY29uU2VydmljZSB9IGZyb20gJy4vaWNvbi5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LWljb25dJyxcbiAgZXhwb3J0QXM6ICduekljb24nLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnRpY29uXSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56SWNvbkRpcmVjdGl2ZSBleHRlbmRzIEljb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG4gIGNhY2hlQ2xhc3NOYW1lOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIHNldCBuelNwaW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNwaW4gPSB2YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpIG56Um90YXRlOiBudW1iZXIgPSAwO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuelR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMudHlwZSA9IHZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56VGhlbWUodmFsdWU6IFRoZW1lVHlwZSkge1xuICAgIHRoaXMudGhlbWUgPSB2YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelR3b3RvbmVDb2xvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy50d29Ub25lQ29sb3IgPSB2YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekljb25mb250KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmljb25mb250ID0gdmFsdWU7XG4gIH1cblxuICBob3N0Q2xhc3M/OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBlbDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgaWNvbmZvbnQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgc3BpbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGljb25TZXJ2aWNlOiBOekljb25TZXJ2aWNlLFxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpIGljb25QYXRjaDogTnpJY29uUGF0Y2hTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKGljb25TZXJ2aWNlLCBlbGVtZW50UmVmLCByZW5kZXJlcik7XG5cbiAgICBpZiAoaWNvblBhdGNoKSB7XG4gICAgICBpY29uUGF0Y2guZG9QYXRjaCgpO1xuICAgIH1cblxuICAgIHRoaXMuZWwgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuelR5cGUsIG56VHdvdG9uZUNvbG9yLCBuelNwaW4sIG56VGhlbWUsIG56Um90YXRlIH0gPSBjaGFuZ2VzO1xuXG4gICAgaWYgKG56VHlwZSB8fCBuelR3b3RvbmVDb2xvciB8fCBuelNwaW4gfHwgbnpUaGVtZSkge1xuICAgICAgdGhpcy5jaGFuZ2VJY29uMigpO1xuICAgIH0gZWxzZSBpZiAobnpSb3RhdGUpIHtcbiAgICAgIHRoaXMuaGFuZGxlUm90YXRlKHRoaXMuZWwuZmlyc3RDaGlsZCBhcyBTVkdFbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2V0U1ZHRWxlbWVudCh0aGlzLmljb25TZXJ2aWNlLmNyZWF0ZUljb25mb250SWNvbihgIyR7dGhpcy5pY29uZm9udH1gKSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbCwgJ2NsYXNzJywgYGFudGljb24gJHt0aGlzLmVsLmNsYXNzTmFtZX1gLnRyaW0oKSk7XG4gIH1cblxuICAvKipcbiAgICogSWYgY3VzdG9tIGNvbnRlbnQgaXMgcHJvdmlkZWQsIHRyeSB0byBub3JtYWxpemUgU1ZHIGVsZW1lbnRzLlxuICAgKi9cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy50eXBlKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZWwuY2hpbGRyZW47XG4gICAgICBsZXQgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgaWYgKCF0aGlzLnR5cGUgJiYgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5bbGVuZ3RoXTtcbiAgICAgICAgICBpZiAoY2hpbGQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc3ZnJykge1xuICAgICAgICAgICAgdGhpcy5pY29uU2VydmljZS5ub3JtYWxpemVTdmdFbGVtZW50KGNoaWxkIGFzIFNWR0VsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlbWVudCBvZiBgY2hhbmdlSWNvbmAgZm9yIG1vcmUgbW9kaWZpY2F0aW9ucy5cbiAgICovXG4gIHByaXZhdGUgY2hhbmdlSWNvbjIoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc05hbWUoKTtcbiAgICB0aGlzLl9jaGFuZ2VJY29uKCkudGhlbihzdmdPclJlbW92ZSA9PiB7XG4gICAgICBpZiAoc3ZnT3JSZW1vdmUpIHtcbiAgICAgICAgdGhpcy5zZXRTVkdEYXRhKHN2Z09yUmVtb3ZlKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTcGluKHN2Z09yUmVtb3ZlKTtcbiAgICAgICAgdGhpcy5oYW5kbGVSb3RhdGUoc3ZnT3JSZW1vdmUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTcGluKHN2ZzogU1ZHRWxlbWVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNwaW4gfHwgdGhpcy50eXBlID09PSAnbG9hZGluZycpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3Moc3ZnLCAnYW50aWNvbi1zcGluJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3Moc3ZnLCAnYW50aWNvbi1zcGluJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVSb3RhdGUoc3ZnOiBTVkdFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpSb3RhdGUpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ3N0eWxlJywgYHRyYW5zZm9ybTogcm90YXRlKCR7dGhpcy5uelJvdGF0ZX1kZWcpYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHN2ZywgJ3N0eWxlJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzc05hbWUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2FjaGVDbGFzc05hbWUpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbCwgdGhpcy5jYWNoZUNsYXNzTmFtZSk7XG4gICAgfVxuICAgIHRoaXMuY2FjaGVDbGFzc05hbWUgPSBgYW50aWNvbi0ke3RoaXMudHlwZX1gO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgdGhpcy5jYWNoZUNsYXNzTmFtZSk7XG4gIH1cblxuICBwcml2YXRlIHNldFNWR0RhdGEoc3ZnOiBTVkdFbGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAnZGF0YS1pY29uJywgdGhpcy50eXBlIGFzIHN0cmluZyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICB9XG59XG4iXX0=