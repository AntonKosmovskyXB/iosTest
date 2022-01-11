/**
 * @fileoverview added by tsickle
 * Generated from: drawer-ref.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @abstract
 * @template T, R
 */
var /**
 * @abstract
 * @template T, R
 */
NzDrawerRef = /** @class */ (function () {
    function NzDrawerRef() {
    }
    return NzDrawerRef;
}());
/**
 * @abstract
 * @template T, R
 */
export { NzDrawerRef };
if (false) {
    /** @type {?} */
    NzDrawerRef.prototype.afterClose;
    /** @type {?} */
    NzDrawerRef.prototype.afterOpen;
    /** @type {?} */
    NzDrawerRef.prototype.nzClosable;
    /** @type {?} */
    NzDrawerRef.prototype.nzNoAnimation;
    /** @type {?} */
    NzDrawerRef.prototype.nzMaskClosable;
    /** @type {?} */
    NzDrawerRef.prototype.nzKeyboard;
    /** @type {?} */
    NzDrawerRef.prototype.nzMask;
    /** @type {?} */
    NzDrawerRef.prototype.nzTitle;
    /** @type {?} */
    NzDrawerRef.prototype.nzPlacement;
    /** @type {?} */
    NzDrawerRef.prototype.nzMaskStyle;
    /** @type {?} */
    NzDrawerRef.prototype.nzBodyStyle;
    /** @type {?} */
    NzDrawerRef.prototype.nzWrapClassName;
    /** @type {?} */
    NzDrawerRef.prototype.nzWidth;
    /** @type {?} */
    NzDrawerRef.prototype.nzHeight;
    /** @type {?} */
    NzDrawerRef.prototype.nzZIndex;
    /** @type {?} */
    NzDrawerRef.prototype.nzOffsetX;
    /** @type {?} */
    NzDrawerRef.prototype.nzOffsetY;
    /**
     * @abstract
     * @param {?=} result
     * @return {?}
     */
    NzDrawerRef.prototype.close = function (result) { };
    /**
     * @abstract
     * @return {?}
     */
    NzDrawerRef.prototype.open = function () { };
    /**
     * @abstract
     * @return {?}
     */
    NzDrawerRef.prototype.getContentComponent = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLXJlZi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZHJhd2VyLyIsInNvdXJjZXMiOlsiZHJhd2VyLXJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBVUE7Ozs7O0lBQUE7SUFzQkEsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQzs7Ozs7Ozs7SUFyQkMsaUNBQW1DOztJQUNuQyxnQ0FBcUM7O0lBS3JDLGlDQUE4Qjs7SUFDOUIsb0NBQWlDOztJQUNqQyxxQ0FBa0M7O0lBQ2xDLGlDQUE4Qjs7SUFDOUIsNkJBQTBCOztJQUMxQiw4QkFBNEM7O0lBQzVDLGtDQUF5Qzs7SUFDekMsa0NBQThCOztJQUM5QixrQ0FBOEI7O0lBQzlCLHNDQUFrQzs7SUFDbEMsOEJBQW1DOztJQUNuQywrQkFBb0M7O0lBQ3BDLCtCQUFvQzs7SUFDcEMsZ0NBQXFDOztJQUNyQyxnQ0FBcUM7Ozs7OztJQWxCckMsb0RBQWlDOzs7OztJQUNqQyw2Q0FBc0I7Ozs7O0lBQ3RCLDREQUF5QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTnpEcmF3ZXJQbGFjZW1lbnQgfSBmcm9tICcuL2RyYXdlci1vcHRpb25zJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE56RHJhd2VyUmVmPFQgPSBOelNhZmVBbnksIFIgPSBOelNhZmVBbnk+IHtcbiAgYWJzdHJhY3QgYWZ0ZXJDbG9zZTogT2JzZXJ2YWJsZTxSPjtcbiAgYWJzdHJhY3QgYWZ0ZXJPcGVuOiBPYnNlcnZhYmxlPHZvaWQ+O1xuICBhYnN0cmFjdCBjbG9zZShyZXN1bHQ/OiBSKTogdm9pZDtcbiAgYWJzdHJhY3Qgb3BlbigpOiB2b2lkO1xuICBhYnN0cmFjdCBnZXRDb250ZW50Q29tcG9uZW50KCk6IFQgfCBudWxsO1xuXG4gIGFic3RyYWN0IG56Q2xvc2FibGU/OiBib29sZWFuO1xuICBhYnN0cmFjdCBuek5vQW5pbWF0aW9uPzogYm9vbGVhbjtcbiAgYWJzdHJhY3QgbnpNYXNrQ2xvc2FibGU/OiBib29sZWFuO1xuICBhYnN0cmFjdCBuektleWJvYXJkPzogYm9vbGVhbjtcbiAgYWJzdHJhY3QgbnpNYXNrPzogYm9vbGVhbjtcbiAgYWJzdHJhY3QgbnpUaXRsZT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PjtcbiAgYWJzdHJhY3QgbnpQbGFjZW1lbnQ/OiBOekRyYXdlclBsYWNlbWVudDtcbiAgYWJzdHJhY3QgbnpNYXNrU3R5bGU/OiBvYmplY3Q7XG4gIGFic3RyYWN0IG56Qm9keVN0eWxlPzogb2JqZWN0O1xuICBhYnN0cmFjdCBueldyYXBDbGFzc05hbWU/OiBzdHJpbmc7XG4gIGFic3RyYWN0IG56V2lkdGg/OiBudW1iZXIgfCBzdHJpbmc7XG4gIGFic3RyYWN0IG56SGVpZ2h0PzogbnVtYmVyIHwgc3RyaW5nO1xuICBhYnN0cmFjdCBuelpJbmRleD86IG51bWJlciB8IHN0cmluZztcbiAgYWJzdHJhY3QgbnpPZmZzZXRYPzogbnVtYmVyIHwgc3RyaW5nO1xuICBhYnN0cmFjdCBuek9mZnNldFk/OiBudW1iZXIgfCBzdHJpbmc7XG59XG4iXX0=