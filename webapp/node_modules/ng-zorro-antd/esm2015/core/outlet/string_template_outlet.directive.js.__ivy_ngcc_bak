/**
 * @fileoverview added by tsickle
 * Generated from: string_template_outlet.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
/**
 * @template _T
 */
export class NzStringTemplateOutletDirective {
    /**
     * @param {?} viewContainer
     * @param {?} templateRef
     */
    constructor(viewContainer, templateRef) {
        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
        this.embeddedViewRef = null;
        this.context = new NzStringTemplateOutletContext();
        this.nzStringTemplateOutletContext = null;
        this.nzStringTemplateOutlet = null;
    }
    /**
     * @template T
     * @param {?} _dir
     * @param {?} _ctx
     * @return {?}
     */
    static ngTemplateContextGuard(_dir, _ctx) {
        return true;
    }
    /**
     * @private
     * @return {?}
     */
    recreateView() {
        this.viewContainer.clear();
        /** @type {?} */
        const isTemplateRef = this.nzStringTemplateOutlet instanceof TemplateRef;
        /** @type {?} */
        const templateRef = (/** @type {?} */ ((isTemplateRef ? this.nzStringTemplateOutlet : this.templateRef)));
        this.embeddedViewRef = this.viewContainer.createEmbeddedView(templateRef, isTemplateRef ? this.nzStringTemplateOutletContext : this.context);
    }
    /**
     * @private
     * @return {?}
     */
    updateContext() {
        /** @type {?} */
        const isTemplateRef = this.nzStringTemplateOutlet instanceof TemplateRef;
        /** @type {?} */
        const newCtx = isTemplateRef ? this.nzStringTemplateOutletContext : this.context;
        /** @type {?} */
        const oldCtx = (/** @type {?} */ ((/** @type {?} */ (this.embeddedViewRef)).context));
        if (newCtx) {
            for (const propName of Object.keys(newCtx)) {
                oldCtx[propName] = newCtx[propName];
            }
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzStringTemplateOutletContext, nzStringTemplateOutlet } = changes;
        /** @type {?} */
        const shouldRecreateView = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let shouldOutletRecreate = false;
            if (nzStringTemplateOutlet) {
                if (nzStringTemplateOutlet.firstChange) {
                    shouldOutletRecreate = true;
                }
                else {
                    /** @type {?} */
                    const isPreviousOutletTemplate = nzStringTemplateOutlet.previousValue instanceof TemplateRef;
                    /** @type {?} */
                    const isCurrentOutletTemplate = nzStringTemplateOutlet.currentValue instanceof TemplateRef;
                    shouldOutletRecreate = isPreviousOutletTemplate || isCurrentOutletTemplate;
                }
            }
            /** @type {?} */
            const hasContextShapeChanged = (/**
             * @param {?} ctxChange
             * @return {?}
             */
            (ctxChange) => {
                /** @type {?} */
                const prevCtxKeys = Object.keys(ctxChange.previousValue || {});
                /** @type {?} */
                const currCtxKeys = Object.keys(ctxChange.currentValue || {});
                if (prevCtxKeys.length === currCtxKeys.length) {
                    for (const propName of currCtxKeys) {
                        if (prevCtxKeys.indexOf(propName) === -1) {
                            return true;
                        }
                    }
                    return false;
                }
                else {
                    return true;
                }
            });
            /** @type {?} */
            const shouldContextRecreate = nzStringTemplateOutletContext && hasContextShapeChanged(nzStringTemplateOutletContext);
            return shouldContextRecreate || shouldOutletRecreate;
        });
        if (nzStringTemplateOutlet) {
            this.context.$implicit = nzStringTemplateOutlet.currentValue;
        }
        /** @type {?} */
        const recreateView = shouldRecreateView();
        if (recreateView) {
            /** recreate view when context shape or outlet change **/
            this.recreateView();
        }
        else {
            /** update context **/
            this.updateContext();
        }
    }
}
NzStringTemplateOutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nzStringTemplateOutlet]',
                exportAs: 'nzStringTemplateOutlet'
            },] }
];
/** @nocollapse */
NzStringTemplateOutletDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: TemplateRef }
];
NzStringTemplateOutletDirective.propDecorators = {
    nzStringTemplateOutletContext: [{ type: Input }],
    nzStringTemplateOutlet: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.embeddedViewRef;
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.context;
    /** @type {?} */
    NzStringTemplateOutletDirective.prototype.nzStringTemplateOutletContext;
    /** @type {?} */
    NzStringTemplateOutletDirective.prototype.nzStringTemplateOutlet;
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.viewContainer;
    /**
     * @type {?}
     * @private
     */
    NzStringTemplateOutletDirective.prototype.templateRef;
}
export class NzStringTemplateOutletContext {
}
if (false) {
    /** @type {?} */
    NzStringTemplateOutletContext.prototype.$implicit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nX3RlbXBsYXRlX291dGxldC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvb3V0bGV0LyIsInNvdXJjZXMiOlsic3RyaW5nX3RlbXBsYXRlX291dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBbUIsS0FBSyxFQUEwQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFPekksTUFBTSxPQUFPLCtCQUErQjs7Ozs7SUErQjFDLFlBQW9CLGFBQStCLEVBQVUsV0FBbUM7UUFBNUUsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQXdCO1FBOUJ4RixvQkFBZSxHQUFzQyxJQUFJLENBQUM7UUFDMUQsWUFBTyxHQUFHLElBQUksNkJBQTZCLEVBQUUsQ0FBQztRQUM3QyxrQ0FBNkIsR0FBcUIsSUFBSSxDQUFDO1FBQ3ZELDJCQUFzQixHQUF1QyxJQUFJLENBQUM7SUEyQndCLENBQUM7Ozs7Ozs7SUF6QnBHLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBSSxJQUF3QyxFQUFFLElBQWU7UUFDeEYsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVPLFlBQVk7UUFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Y0FDckIsYUFBYSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsWUFBWSxXQUFXOztjQUNsRSxXQUFXLEdBQUcsbUJBQUEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFhO1FBQ2pHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FDMUQsV0FBVyxFQUNYLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLDZC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c0RBQTJDOztBQWdEbEcsTUFBTSxPQUFPLDZCQUE2QjtDQUV6Qzs7O0lBREMsa0RBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbWJlZGRlZFZpZXdSZWYsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZSwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuelN0cmluZ1RlbXBsYXRlT3V0bGV0XScsXG4gIGV4cG9ydEFzOiAnbnpTdHJpbmdUZW1wbGF0ZU91dGxldCdcbn0pXG5leHBvcnQgY2xhc3MgTnpTdHJpbmdUZW1wbGF0ZU91dGxldERpcmVjdGl2ZTxfVCA9IHVua25vd24+IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBlbWJlZGRlZFZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgY29udGV4dCA9IG5ldyBOelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dCgpO1xuICBASW5wdXQoKSBuelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dDogTnpTYWZlQW55IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56U3RyaW5nVGVtcGxhdGVPdXRsZXQ6IE56U2FmZUFueSB8IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gPSBudWxsO1xuXG4gIHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkPFQ+KF9kaXI6IE56U3RyaW5nVGVtcGxhdGVPdXRsZXREaXJlY3RpdmU8VD4sIF9jdHg6IE56U2FmZUFueSk6IF9jdHggaXMgTnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHQge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSByZWNyZWF0ZVZpZXcoKTogdm9pZCB7XG4gICAgdGhpcy52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgY29uc3QgaXNUZW1wbGF0ZVJlZiA9IHRoaXMubnpTdHJpbmdUZW1wbGF0ZU91dGxldCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xuICAgIGNvbnN0IHRlbXBsYXRlUmVmID0gKGlzVGVtcGxhdGVSZWYgPyB0aGlzLm56U3RyaW5nVGVtcGxhdGVPdXRsZXQgOiB0aGlzLnRlbXBsYXRlUmVmKSBhcyBOelNhZmVBbnk7XG4gICAgdGhpcy5lbWJlZGRlZFZpZXdSZWYgPSB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KFxuICAgICAgdGVtcGxhdGVSZWYsXG4gICAgICBpc1RlbXBsYXRlUmVmID8gdGhpcy5uelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dCA6IHRoaXMuY29udGV4dFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUNvbnRleHQoKTogdm9pZCB7XG4gICAgY29uc3QgaXNUZW1wbGF0ZVJlZiA9IHRoaXMubnpTdHJpbmdUZW1wbGF0ZU91dGxldCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xuICAgIGNvbnN0IG5ld0N0eCA9IGlzVGVtcGxhdGVSZWYgPyB0aGlzLm56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0IDogdGhpcy5jb250ZXh0O1xuICAgIGNvbnN0IG9sZEN0eCA9IHRoaXMuZW1iZWRkZWRWaWV3UmVmIS5jb250ZXh0IGFzIE56U2FmZUFueTtcbiAgICBpZiAobmV3Q3R4KSB7XG4gICAgICBmb3IgKGNvbnN0IHByb3BOYW1lIG9mIE9iamVjdC5rZXlzKG5ld0N0eCkpIHtcbiAgICAgICAgb2xkQ3R4W3Byb3BOYW1lXSA9IG5ld0N0eFtwcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+KSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0LCBuelN0cmluZ1RlbXBsYXRlT3V0bGV0IH0gPSBjaGFuZ2VzO1xuICAgIGNvbnN0IHNob3VsZFJlY3JlYXRlVmlldyA9ICgpOiBib29sZWFuID0+IHtcbiAgICAgIGxldCBzaG91bGRPdXRsZXRSZWNyZWF0ZSA9IGZhbHNlO1xuICAgICAgaWYgKG56U3RyaW5nVGVtcGxhdGVPdXRsZXQpIHtcbiAgICAgICAgaWYgKG56U3RyaW5nVGVtcGxhdGVPdXRsZXQuZmlyc3RDaGFuZ2UpIHtcbiAgICAgICAgICBzaG91bGRPdXRsZXRSZWNyZWF0ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgaXNQcmV2aW91c091dGxldFRlbXBsYXRlID0gbnpTdHJpbmdUZW1wbGF0ZU91dGxldC5wcmV2aW91c1ZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XG4gICAgICAgICAgY29uc3QgaXNDdXJyZW50T3V0bGV0VGVtcGxhdGUgPSBuelN0cmluZ1RlbXBsYXRlT3V0bGV0LmN1cnJlbnRWYWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xuICAgICAgICAgIHNob3VsZE91dGxldFJlY3JlYXRlID0gaXNQcmV2aW91c091dGxldFRlbXBsYXRlIHx8IGlzQ3VycmVudE91dGxldFRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBoYXNDb250ZXh0U2hhcGVDaGFuZ2VkID0gKGN0eENoYW5nZTogU2ltcGxlQ2hhbmdlKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIGNvbnN0IHByZXZDdHhLZXlzID0gT2JqZWN0LmtleXMoY3R4Q2hhbmdlLnByZXZpb3VzVmFsdWUgfHwge30pO1xuICAgICAgICBjb25zdCBjdXJyQ3R4S2V5cyA9IE9iamVjdC5rZXlzKGN0eENoYW5nZS5jdXJyZW50VmFsdWUgfHwge30pO1xuICAgICAgICBpZiAocHJldkN0eEtleXMubGVuZ3RoID09PSBjdXJyQ3R4S2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHByb3BOYW1lIG9mIGN1cnJDdHhLZXlzKSB7XG4gICAgICAgICAgICBpZiAocHJldkN0eEtleXMuaW5kZXhPZihwcm9wTmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCBzaG91bGRDb250ZXh0UmVjcmVhdGUgPSBuelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dCAmJiBoYXNDb250ZXh0U2hhcGVDaGFuZ2VkKG56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0KTtcbiAgICAgIHJldHVybiBzaG91bGRDb250ZXh0UmVjcmVhdGUgfHwgc2hvdWxkT3V0bGV0UmVjcmVhdGU7XG4gICAgfTtcblxuICAgIGlmIChuelN0cmluZ1RlbXBsYXRlT3V0bGV0KSB7XG4gICAgICB0aGlzLmNvbnRleHQuJGltcGxpY2l0ID0gbnpTdHJpbmdUZW1wbGF0ZU91dGxldC5jdXJyZW50VmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3QgcmVjcmVhdGVWaWV3ID0gc2hvdWxkUmVjcmVhdGVWaWV3KCk7XG4gICAgaWYgKHJlY3JlYXRlVmlldykge1xuICAgICAgLyoqIHJlY3JlYXRlIHZpZXcgd2hlbiBjb250ZXh0IHNoYXBlIG9yIG91dGxldCBjaGFuZ2UgKiovXG4gICAgICB0aGlzLnJlY3JlYXRlVmlldygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvKiogdXBkYXRlIGNvbnRleHQgKiovXG4gICAgICB0aGlzLnVwZGF0ZUNvbnRleHQoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0IHtcbiAgcHVibGljICRpbXBsaWNpdDogTnpTYWZlQW55O1xufVxuIl19