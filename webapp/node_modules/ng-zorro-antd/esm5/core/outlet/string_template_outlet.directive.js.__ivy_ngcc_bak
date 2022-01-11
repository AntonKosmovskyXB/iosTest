/**
 * @fileoverview added by tsickle
 * Generated from: string_template_outlet.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __values } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
/**
 * @template _T
 */
var NzStringTemplateOutletDirective = /** @class */ (function () {
    function NzStringTemplateOutletDirective(viewContainer, templateRef) {
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
    NzStringTemplateOutletDirective.ngTemplateContextGuard = /**
     * @template T
     * @param {?} _dir
     * @param {?} _ctx
     * @return {?}
     */
    function (_dir, _ctx) {
        return true;
    };
    /**
     * @private
     * @return {?}
     */
    NzStringTemplateOutletDirective.prototype.recreateView = /**
     * @private
     * @return {?}
     */
    function () {
        this.viewContainer.clear();
        /** @type {?} */
        var isTemplateRef = this.nzStringTemplateOutlet instanceof TemplateRef;
        /** @type {?} */
        var templateRef = (/** @type {?} */ ((isTemplateRef ? this.nzStringTemplateOutlet : this.templateRef)));
        this.embeddedViewRef = this.viewContainer.createEmbeddedView(templateRef, isTemplateRef ? this.nzStringTemplateOutletContext : this.context);
    };
    /**
     * @private
     * @return {?}
     */
    NzStringTemplateOutletDirective.prototype.updateContext = /**
     * @private
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var isTemplateRef = this.nzStringTemplateOutlet instanceof TemplateRef;
        /** @type {?} */
        var newCtx = isTemplateRef ? this.nzStringTemplateOutletContext : this.context;
        /** @type {?} */
        var oldCtx = (/** @type {?} */ ((/** @type {?} */ (this.embeddedViewRef)).context));
        if (newCtx) {
            try {
                for (var _b = __values(Object.keys(newCtx)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var propName = _c.value;
                    oldCtx[propName] = newCtx[propName];
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzStringTemplateOutletDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzStringTemplateOutletContext = changes.nzStringTemplateOutletContext, nzStringTemplateOutlet = changes.nzStringTemplateOutlet;
        /** @type {?} */
        var shouldRecreateView = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var shouldOutletRecreate = false;
            if (nzStringTemplateOutlet) {
                if (nzStringTemplateOutlet.firstChange) {
                    shouldOutletRecreate = true;
                }
                else {
                    /** @type {?} */
                    var isPreviousOutletTemplate = nzStringTemplateOutlet.previousValue instanceof TemplateRef;
                    /** @type {?} */
                    var isCurrentOutletTemplate = nzStringTemplateOutlet.currentValue instanceof TemplateRef;
                    shouldOutletRecreate = isPreviousOutletTemplate || isCurrentOutletTemplate;
                }
            }
            /** @type {?} */
            var hasContextShapeChanged = (/**
             * @param {?} ctxChange
             * @return {?}
             */
            function (ctxChange) {
                var e_2, _a;
                /** @type {?} */
                var prevCtxKeys = Object.keys(ctxChange.previousValue || {});
                /** @type {?} */
                var currCtxKeys = Object.keys(ctxChange.currentValue || {});
                if (prevCtxKeys.length === currCtxKeys.length) {
                    try {
                        for (var currCtxKeys_1 = __values(currCtxKeys), currCtxKeys_1_1 = currCtxKeys_1.next(); !currCtxKeys_1_1.done; currCtxKeys_1_1 = currCtxKeys_1.next()) {
                            var propName = currCtxKeys_1_1.value;
                            if (prevCtxKeys.indexOf(propName) === -1) {
                                return true;
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (currCtxKeys_1_1 && !currCtxKeys_1_1.done && (_a = currCtxKeys_1.return)) _a.call(currCtxKeys_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    return false;
                }
                else {
                    return true;
                }
            });
            /** @type {?} */
            var shouldContextRecreate = nzStringTemplateOutletContext && hasContextShapeChanged(nzStringTemplateOutletContext);
            return shouldContextRecreate || shouldOutletRecreate;
        });
        if (nzStringTemplateOutlet) {
            this.context.$implicit = nzStringTemplateOutlet.currentValue;
        }
        /** @type {?} */
        var recreateView = shouldRecreateView();
        if (recreateView) {
            /** recreate view when context shape or outlet change **/
            this.recreateView();
        }
        else {
            /** update context **/
            this.updateContext();
        }
    };
    NzStringTemplateOutletDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nzStringTemplateOutlet]',
                    exportAs: 'nzStringTemplateOutlet'
                },] }
    ];
    /** @nocollapse */
    NzStringTemplateOutletDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: TemplateRef }
    ]; };
    NzStringTemplateOutletDirective.propDecorators = {
        nzStringTemplateOutletContext: [{ type: Input }],
        nzStringTemplateOutlet: [{ type: Input }]
    };
    return NzStringTemplateOutletDirective;
}());
export { NzStringTemplateOutletDirective };
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
var NzStringTemplateOutletContext = /** @class */ (function () {
    function NzStringTemplateOutletContext() {
    }
    return NzStringTemplateOutletContext;
}());
export { NzStringTemplateOutletContext };
if (false) {
    /** @type {?} */
    NzStringTemplateOutletContext.prototype.$implicit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nX3RlbXBsYXRlX291dGxldC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvb3V0bGV0LyIsInNvdXJjZXMiOlsic3RyaW5nX3RlbXBsYXRlX291dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQW1CLEtBQUssRUFBMEMsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBR3pJO0lBbUNFLHlDQUFvQixhQUErQixFQUFVLFdBQW1DO1FBQTVFLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUF3QjtRQTlCeEYsb0JBQWUsR0FBc0MsSUFBSSxDQUFDO1FBQzFELFlBQU8sR0FBRyxJQUFJLDZCQUE2QixFQUFFLENBQUM7UUFDN0Msa0NBQTZCLEdBQXFCLElBQUksQ0FBQztRQUN2RCwyQkFBc0IsR0FBdUMsSUFBSSxDQUFDO0lBMkJ3QixDQUFDOzs7Ozs7O0lBekI3RixzREFBc0I7Ozs7OztJQUE3QixVQUFpQyxJQUF3QyxFQUFFLElBQWU7UUFDeEYsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVPLHNEQUFZOzs7O0lBQXBCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7WUFDckIsYUFBYSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsWUFBWSxXQUFXOztZQUNsRSxXQUFXLEdBQUcsbUJBQUEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFhO1FBQ2pHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FDMUQsV0FBVyxFQUNYLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUNsRSxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTyx1REFBYTs7OztJQUFyQjs7O1lBQ1EsYUFBYSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsWUFBWSxXQUFXOztZQUNsRSxNQUFNLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPOztZQUMxRSxNQUFNLEdBQUcsbUJBQUEsbUJBQUEsSUFBSSxDQUFDLGVBQWUsRUFBQyxDQUFDLE9BQU8sRUFBYTtRQUN6RCxJQUFJLE1BQU0sRUFBRTs7Z0JBQ1YsS0FBdUIsSUFBQSxLQUFBLFNBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtvQkFBdkMsSUFBTSxRQUFRLFdBQUE7b0JBQ2pCLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3JDOzs7Ozs7Ozs7U0FDRjtJQUNILENBQUM7Ozs7O0lBSUQscURBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ3hCLElBQUEscUVBQTZCLEVBQUUsdURBQXNCOztZQUN2RCxrQkFBa0I7OztRQUFHOztnQkFDckIsb0JBQW9CLEdBQUcsS0FBSztZQUNoQyxJQUFJLHNCQUFzQixFQUFFO2dCQUMxQixJQUFJLHNCQUFzQixDQUFDLFdBQVcsRUFBRTtvQkFDdEMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO2lCQUM3QjtxQkFBTTs7d0JBQ0Msd0JBQXdCLEdBQUcsc0JBQXNCLENBQUMsYUFBYSxZQUFZLFdBQVc7O3dCQUN0Rix1QkFBdUIsR0FBRyxzQkFBc0IsQ0FBQyxZQUFZLFlBQVksV0FBVztvQkFDMUYsb0JBQW9CLEdBQUcsd0JBQXdCLElBQUksdUJBQXVCLENBQUM7aUJBQzVFO2FBQ0Y7O2dCQUNLLHNCQUFzQjs7OztZQUFHLFVBQUMsU0FBdUI7OztvQkFDL0MsV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUM7O29CQUN4RCxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQztnQkFDN0QsSUFBSSxXQUFXLENBQUMsTUFBTSxLQUFLLFdBQVcsQ0FBQyxNQUFNLEVBQUU7O3dCQUM3QyxLQUF1QixJQUFBLGdCQUFBLFNBQUEsV0FBVyxDQUFBLHdDQUFBLGlFQUFFOzRCQUEvQixJQUFNLFFBQVEsd0JBQUE7NEJBQ2pCLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQ0FDeEMsT0FBTyxJQUFJLENBQUM7NkJBQ2I7eUJBQ0Y7Ozs7Ozs7OztvQkFDRCxPQUFPLEtBQUssQ0FBQztpQkFDZDtxQkFBTTtvQkFDTCxPQUFPLElBQUksQ0FBQztpQkFDYjtZQUNILENBQUMsQ0FBQTs7Z0JBQ0sscUJBQXFCLEdBQUcsNkJBQTZCLElBQUksc0JBQXNCLENBQUMsNkJBQTZCLENBQUM7WUFDcEgsT0FBTyxxQkFBcUIsSUFBSSxvQkFBb0IsQ0FBQztRQUN2RCxDQUFDLENBQUE7UUFFRCxJQUFJLHNCQUFzQixFQUFFO1lBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLHNCQUFzQixDQUFDLFlBQVksQ0FBQztTQUM5RDs7WUFFSyxZQUFZLEdBQUcsa0JBQWtCLEVBQUU7UUFDekMsSUFBSSxZQUFZLEVBQUU7WUFDaEIseURBQXlEO1lBQ3pELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjthQUFNO1lBQ0wsc0JBQXNCO1lBQ3RCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtJQUNILENBQUM7O2dCQWhGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsUUFBUSxFQUFFLHdCQUF3QjtpQkFDbkM7Ozs7Z0JBTmdHLGdCQUFnQjtnQkFBN0IsV0FBVzs7O2dEQVU1RixLQUFLO3lDQUNMLEtBQUs7O0lBeUVSLHNDQUFDO0NBQUEsQUFqRkQsSUFpRkM7U0E3RVksK0JBQStCOzs7Ozs7SUFDMUMsMERBQWtFOzs7OztJQUNsRSxrREFBc0Q7O0lBQ3RELHdFQUFnRTs7SUFDaEUsaUVBQTJFOzs7OztJQTJCL0Qsd0RBQXVDOzs7OztJQUFFLHNEQUEyQzs7QUFnRGxHO0lBQUE7SUFFQSxDQUFDO0lBQUQsb0NBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURDLGtEQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgRW1iZWRkZWRWaWV3UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2UsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnpTdHJpbmdUZW1wbGF0ZU91dGxldF0nLFxuICBleHBvcnRBczogJ256U3RyaW5nVGVtcGxhdGVPdXRsZXQnXG59KVxuZXhwb3J0IGNsYXNzIE56U3RyaW5nVGVtcGxhdGVPdXRsZXREaXJlY3RpdmU8X1QgPSB1bmtub3duPiBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgZW1iZWRkZWRWaWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGNvbnRleHQgPSBuZXcgTnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHQoKTtcbiAgQElucHV0KCkgbnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHQ6IE56U2FmZUFueSB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuelN0cmluZ1RlbXBsYXRlT3V0bGV0OiBOelNhZmVBbnkgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+ID0gbnVsbDtcblxuICBzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZDxUPihfZGlyOiBOelN0cmluZ1RlbXBsYXRlT3V0bGV0RGlyZWN0aXZlPFQ+LCBfY3R4OiBOelNhZmVBbnkpOiBfY3R4IGlzIE56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0IHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgcmVjcmVhdGVWaWV3KCk6IHZvaWQge1xuICAgIHRoaXMudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgIGNvbnN0IGlzVGVtcGxhdGVSZWYgPSB0aGlzLm56U3RyaW5nVGVtcGxhdGVPdXRsZXQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZjtcbiAgICBjb25zdCB0ZW1wbGF0ZVJlZiA9IChpc1RlbXBsYXRlUmVmID8gdGhpcy5uelN0cmluZ1RlbXBsYXRlT3V0bGV0IDogdGhpcy50ZW1wbGF0ZVJlZikgYXMgTnpTYWZlQW55O1xuICAgIHRoaXMuZW1iZWRkZWRWaWV3UmVmID0gdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyhcbiAgICAgIHRlbXBsYXRlUmVmLFxuICAgICAgaXNUZW1wbGF0ZVJlZiA/IHRoaXMubnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHQgOiB0aGlzLmNvbnRleHRcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDb250ZXh0KCk6IHZvaWQge1xuICAgIGNvbnN0IGlzVGVtcGxhdGVSZWYgPSB0aGlzLm56U3RyaW5nVGVtcGxhdGVPdXRsZXQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZjtcbiAgICBjb25zdCBuZXdDdHggPSBpc1RlbXBsYXRlUmVmID8gdGhpcy5uelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dCA6IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCBvbGRDdHggPSB0aGlzLmVtYmVkZGVkVmlld1JlZiEuY29udGV4dCBhcyBOelNhZmVBbnk7XG4gICAgaWYgKG5ld0N0eCkge1xuICAgICAgZm9yIChjb25zdCBwcm9wTmFtZSBvZiBPYmplY3Qua2V5cyhuZXdDdHgpKSB7XG4gICAgICAgIG9sZEN0eFtwcm9wTmFtZV0gPSBuZXdDdHhbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8TnpTYWZlQW55Pikge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dCwgbnpTdHJpbmdUZW1wbGF0ZU91dGxldCB9ID0gY2hhbmdlcztcbiAgICBjb25zdCBzaG91bGRSZWNyZWF0ZVZpZXcgPSAoKTogYm9vbGVhbiA9PiB7XG4gICAgICBsZXQgc2hvdWxkT3V0bGV0UmVjcmVhdGUgPSBmYWxzZTtcbiAgICAgIGlmIChuelN0cmluZ1RlbXBsYXRlT3V0bGV0KSB7XG4gICAgICAgIGlmIChuelN0cmluZ1RlbXBsYXRlT3V0bGV0LmZpcnN0Q2hhbmdlKSB7XG4gICAgICAgICAgc2hvdWxkT3V0bGV0UmVjcmVhdGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGlzUHJldmlvdXNPdXRsZXRUZW1wbGF0ZSA9IG56U3RyaW5nVGVtcGxhdGVPdXRsZXQucHJldmlvdXNWYWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xuICAgICAgICAgIGNvbnN0IGlzQ3VycmVudE91dGxldFRlbXBsYXRlID0gbnpTdHJpbmdUZW1wbGF0ZU91dGxldC5jdXJyZW50VmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZjtcbiAgICAgICAgICBzaG91bGRPdXRsZXRSZWNyZWF0ZSA9IGlzUHJldmlvdXNPdXRsZXRUZW1wbGF0ZSB8fCBpc0N1cnJlbnRPdXRsZXRUZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgaGFzQ29udGV4dFNoYXBlQ2hhbmdlZCA9IChjdHhDaGFuZ2U6IFNpbXBsZUNoYW5nZSk6IGJvb2xlYW4gPT4ge1xuICAgICAgICBjb25zdCBwcmV2Q3R4S2V5cyA9IE9iamVjdC5rZXlzKGN0eENoYW5nZS5wcmV2aW91c1ZhbHVlIHx8IHt9KTtcbiAgICAgICAgY29uc3QgY3VyckN0eEtleXMgPSBPYmplY3Qua2V5cyhjdHhDaGFuZ2UuY3VycmVudFZhbHVlIHx8IHt9KTtcbiAgICAgICAgaWYgKHByZXZDdHhLZXlzLmxlbmd0aCA9PT0gY3VyckN0eEtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBwcm9wTmFtZSBvZiBjdXJyQ3R4S2V5cykge1xuICAgICAgICAgICAgaWYgKHByZXZDdHhLZXlzLmluZGV4T2YocHJvcE5hbWUpID09PSAtMSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3Qgc2hvdWxkQ29udGV4dFJlY3JlYXRlID0gbnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHQgJiYgaGFzQ29udGV4dFNoYXBlQ2hhbmdlZChuelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dCk7XG4gICAgICByZXR1cm4gc2hvdWxkQ29udGV4dFJlY3JlYXRlIHx8IHNob3VsZE91dGxldFJlY3JlYXRlO1xuICAgIH07XG5cbiAgICBpZiAobnpTdHJpbmdUZW1wbGF0ZU91dGxldCkge1xuICAgICAgdGhpcy5jb250ZXh0LiRpbXBsaWNpdCA9IG56U3RyaW5nVGVtcGxhdGVPdXRsZXQuY3VycmVudFZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IHJlY3JlYXRlVmlldyA9IHNob3VsZFJlY3JlYXRlVmlldygpO1xuICAgIGlmIChyZWNyZWF0ZVZpZXcpIHtcbiAgICAgIC8qKiByZWNyZWF0ZSB2aWV3IHdoZW4gY29udGV4dCBzaGFwZSBvciBvdXRsZXQgY2hhbmdlICoqL1xuICAgICAgdGhpcy5yZWNyZWF0ZVZpZXcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLyoqIHVwZGF0ZSBjb250ZXh0ICoqL1xuICAgICAgdGhpcy51cGRhdGVDb250ZXh0KCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dCB7XG4gIHB1YmxpYyAkaW1wbGljaXQ6IE56U2FmZUFueTtcbn1cbiJdfQ==