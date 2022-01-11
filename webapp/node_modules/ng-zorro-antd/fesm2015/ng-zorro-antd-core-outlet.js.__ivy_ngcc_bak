import { CommonModule } from '@angular/common';
import { TemplateRef, Directive, ViewContainerRef, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: string_template_outlet.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template _T
 */
class NzStringTemplateOutletDirective {
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
class NzStringTemplateOutletContext {
}
if (false) {
    /** @type {?} */
    NzStringTemplateOutletContext.prototype.$implicit;
}

/**
 * @fileoverview added by tsickle
 * Generated from: outlet.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzOutletModule {
}
NzOutletModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [NzStringTemplateOutletDirective],
                declarations: [NzStringTemplateOutletDirective]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-core-outlet.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzOutletModule, NzStringTemplateOutletDirective };
//# sourceMappingURL=ng-zorro-antd-core-outlet.js.map
