/**
 * @fileoverview added by tsickle
 * Generated from: resize-observers.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { coerceElement } from '@angular/cdk/coercion';
import { Injectable } from '@angular/core';
import ResizeObserver from 'resize-observer-polyfill';
import { Observable, Subject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Factory that creates a new ResizeObserver and allows us to stub it out in unit tests.
 */
var NzResizeObserverFactory = /** @class */ (function () {
    function NzResizeObserverFactory() {
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    NzResizeObserverFactory.prototype.create = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        return typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(callback);
    };
    NzResizeObserverFactory.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ NzResizeObserverFactory.ɵprov = i0.ɵɵdefineInjectable({ factory: function NzResizeObserverFactory_Factory() { return new NzResizeObserverFactory(); }, token: NzResizeObserverFactory, providedIn: "root" });
    return NzResizeObserverFactory;
}());
export { NzResizeObserverFactory };
/**
 * An injectable service that allows watching elements for changes to their content.
 */
var NzResizeObserver = /** @class */ (function () {
    function NzResizeObserver(nzResizeObserverFactory) {
        this.nzResizeObserverFactory = nzResizeObserverFactory;
        /**
         * Keeps track of the existing ResizeObservers so they can be reused.
         */
        this.observedElements = new Map();
    }
    /**
     * @return {?}
     */
    NzResizeObserver.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.observedElements.forEach((/**
         * @param {?} _
         * @param {?} element
         * @return {?}
         */
        function (_, element) { return _this.cleanupObserver(element); }));
    };
    /**
     * @param {?} elementOrRef
     * @return {?}
     */
    NzResizeObserver.prototype.observe = /**
     * @param {?} elementOrRef
     * @return {?}
     */
    function (elementOrRef) {
        var _this = this;
        /** @type {?} */
        var element = coerceElement(elementOrRef);
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var stream = _this.observeElement(element);
            /** @type {?} */
            var subscription = stream.subscribe(observer);
            return (/**
             * @return {?}
             */
            function () {
                subscription.unsubscribe();
                _this.unobserveElement(element);
            });
        }));
    };
    /**
     * Observes the given element by using the existing ResizeObserver if available, or creating a
     * new one if not.
     */
    /**
     * Observes the given element by using the existing ResizeObserver if available, or creating a
     * new one if not.
     * @private
     * @param {?} element
     * @return {?}
     */
    NzResizeObserver.prototype.observeElement = /**
     * Observes the given element by using the existing ResizeObserver if available, or creating a
     * new one if not.
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (!this.observedElements.has(element)) {
            /** @type {?} */
            var stream_1 = new Subject();
            /** @type {?} */
            var observer = this.nzResizeObserverFactory.create((/**
             * @param {?} mutations
             * @return {?}
             */
            function (mutations) { return stream_1.next(mutations); }));
            if (observer) {
                observer.observe(element);
            }
            this.observedElements.set(element, { observer: observer, stream: stream_1, count: 1 });
        }
        else {
            (/** @type {?} */ (this.observedElements.get(element))).count++;
        }
        return (/** @type {?} */ (this.observedElements.get(element))).stream;
    };
    /**
     * Un-observes the given element and cleans up the underlying ResizeObserver if nobody else is
     * observing this element.
     */
    /**
     * Un-observes the given element and cleans up the underlying ResizeObserver if nobody else is
     * observing this element.
     * @private
     * @param {?} element
     * @return {?}
     */
    NzResizeObserver.prototype.unobserveElement = /**
     * Un-observes the given element and cleans up the underlying ResizeObserver if nobody else is
     * observing this element.
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (this.observedElements.has(element)) {
            (/** @type {?} */ (this.observedElements.get(element))).count--;
            if (!(/** @type {?} */ (this.observedElements.get(element))).count) {
                this.cleanupObserver(element);
            }
        }
    };
    /** Clean up the underlying ResizeObserver for the specified element. */
    /**
     * Clean up the underlying ResizeObserver for the specified element.
     * @private
     * @param {?} element
     * @return {?}
     */
    NzResizeObserver.prototype.cleanupObserver = /**
     * Clean up the underlying ResizeObserver for the specified element.
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (this.observedElements.has(element)) {
            var _a = (/** @type {?} */ (this.observedElements.get(element))), observer = _a.observer, stream = _a.stream;
            if (observer) {
                observer.disconnect();
            }
            stream.complete();
            this.observedElements.delete(element);
        }
    };
    NzResizeObserver.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    NzResizeObserver.ctorParameters = function () { return [
        { type: NzResizeObserverFactory }
    ]; };
    /** @nocollapse */ NzResizeObserver.ɵprov = i0.ɵɵdefineInjectable({ factory: function NzResizeObserver_Factory() { return new NzResizeObserver(i0.ɵɵinject(NzResizeObserverFactory)); }, token: NzResizeObserver, providedIn: "root" });
    return NzResizeObserver;
}());
export { NzResizeObserver };
if (false) {
    /**
     * Keeps track of the existing ResizeObservers so they can be reused.
     * @type {?}
     * @private
     */
    NzResizeObserver.prototype.observedElements;
    /**
     * @type {?}
     * @private
     */
    NzResizeObserver.prototype.nzResizeObserverFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLW9ic2VydmVycy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlL3Jlc2l6ZS1vYnNlcnZlcnMvIiwic291cmNlcyI6WyJyZXNpemUtb2JzZXJ2ZXJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBYyxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDbEUsT0FBTyxjQUFjLE1BQU0sMEJBQTBCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFVBQVUsRUFBWSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7O0FBS3JEO0lBQUE7S0FLQzs7Ozs7SUFIQyx3Q0FBTTs7OztJQUFOLFVBQU8sUUFBZ0M7UUFDckMsT0FBTyxPQUFPLGNBQWMsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckYsQ0FBQzs7Z0JBSkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7O2tDQWJsQztDQWtCQyxBQUxELElBS0M7U0FKWSx1QkFBdUI7Ozs7QUFPcEM7SUFZRSwwQkFBb0IsdUJBQWdEO1FBQWhELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7Ozs7UUFUNUQscUJBQWdCLEdBQUcsSUFBSSxHQUFHLEVBTy9CLENBQUM7SUFFbUUsQ0FBQzs7OztJQUV4RSxzQ0FBVzs7O0lBQVg7UUFBQSxpQkFFQztRQURDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPOzs7OztRQUFDLFVBQUMsQ0FBQyxFQUFFLE9BQU8sSUFBSyxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQTdCLENBQTZCLEVBQUMsQ0FBQztJQUMvRSxDQUFDOzs7OztJQUVELGtDQUFPOzs7O0lBQVAsVUFBUSxZQUEy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ZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgY29lcmNlRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBSZXNpemVPYnNlcnZlciBmcm9tICdyZXNpemUtb2JzZXJ2ZXItcG9seWZpbGwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBGYWN0b3J5IHRoYXQgY3JlYXRlcyBhIG5ldyBSZXNpemVPYnNlcnZlciBhbmQgYWxsb3dzIHVzIHRvIHN0dWIgaXQgb3V0IGluIHVuaXQgdGVzdHMuXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTnpSZXNpemVPYnNlcnZlckZhY3Rvcnkge1xuICBjcmVhdGUoY2FsbGJhY2s6IFJlc2l6ZU9ic2VydmVyQ2FsbGJhY2spOiBSZXNpemVPYnNlcnZlciB8IG51bGwge1xuICAgIHJldHVybiB0eXBlb2YgUmVzaXplT2JzZXJ2ZXIgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IG5ldyBSZXNpemVPYnNlcnZlcihjYWxsYmFjayk7XG4gIH1cbn1cblxuLyoqIEFuIGluamVjdGFibGUgc2VydmljZSB0aGF0IGFsbG93cyB3YXRjaGluZyBlbGVtZW50cyBmb3IgY2hhbmdlcyB0byB0aGVpciBjb250ZW50LiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBOelJlc2l6ZU9ic2VydmVyIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLyoqIEtlZXBzIHRyYWNrIG9mIHRoZSBleGlzdGluZyBSZXNpemVPYnNlcnZlcnMgc28gdGhleSBjYW4gYmUgcmV1c2VkLiAqL1xuICBwcml2YXRlIG9ic2VydmVkRWxlbWVudHMgPSBuZXcgTWFwPFxuICAgIEVsZW1lbnQsXG4gICAge1xuICAgICAgb2JzZXJ2ZXI6IFJlc2l6ZU9ic2VydmVyIHwgbnVsbDtcbiAgICAgIHN0cmVhbTogU3ViamVjdDxSZXNpemVPYnNlcnZlckVudHJ5W10+O1xuICAgICAgY291bnQ6IG51bWJlcjtcbiAgICB9XG4gID4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG56UmVzaXplT2JzZXJ2ZXJGYWN0b3J5OiBOelJlc2l6ZU9ic2VydmVyRmFjdG9yeSkge31cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm9ic2VydmVkRWxlbWVudHMuZm9yRWFjaCgoXywgZWxlbWVudCkgPT4gdGhpcy5jbGVhbnVwT2JzZXJ2ZXIoZWxlbWVudCkpO1xuICB9XG5cbiAgb2JzZXJ2ZShlbGVtZW50T3JSZWY6IEVsZW1lbnQgfCBFbGVtZW50UmVmPEVsZW1lbnQ+KTogT2JzZXJ2YWJsZTxSZXNpemVPYnNlcnZlckVudHJ5W10+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY29lcmNlRWxlbWVudChlbGVtZW50T3JSZWYpO1xuXG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8UmVzaXplT2JzZXJ2ZXJFbnRyeVtdPikgPT4ge1xuICAgICAgY29uc3Qgc3RyZWFtID0gdGhpcy5vYnNlcnZlRWxlbWVudChlbGVtZW50KTtcbiAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHN0cmVhbS5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy51bm9ic2VydmVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPYnNlcnZlcyB0aGUgZ2l2ZW4gZWxlbWVudCBieSB1c2luZyB0aGUgZXhpc3RpbmcgUmVzaXplT2JzZXJ2ZXIgaWYgYXZhaWxhYmxlLCBvciBjcmVhdGluZyBhXG4gICAqIG5ldyBvbmUgaWYgbm90LlxuICAgKi9cbiAgcHJpdmF0ZSBvYnNlcnZlRWxlbWVudChlbGVtZW50OiBFbGVtZW50KTogU3ViamVjdDxSZXNpemVPYnNlcnZlckVudHJ5W10+IHtcbiAgICBpZiAoIXRoaXMub2JzZXJ2ZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICAgIGNvbnN0IHN0cmVhbSA9IG5ldyBTdWJqZWN0PFJlc2l6ZU9ic2VydmVyRW50cnlbXT4oKTtcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gdGhpcy5uelJlc2l6ZU9ic2VydmVyRmFjdG9yeS5jcmVhdGUobXV0YXRpb25zID0+IHN0cmVhbS5uZXh0KG11dGF0aW9ucykpO1xuICAgICAgaWYgKG9ic2VydmVyKSB7XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgICB9XG4gICAgICB0aGlzLm9ic2VydmVkRWxlbWVudHMuc2V0KGVsZW1lbnQsIHsgb2JzZXJ2ZXIsIHN0cmVhbSwgY291bnQ6IDEgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub2JzZXJ2ZWRFbGVtZW50cy5nZXQoZWxlbWVudCkhLmNvdW50Kys7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm9ic2VydmVkRWxlbWVudHMuZ2V0KGVsZW1lbnQpIS5zdHJlYW07XG4gIH1cblxuICAvKipcbiAgICogVW4tb2JzZXJ2ZXMgdGhlIGdpdmVuIGVsZW1lbnQgYW5kIGNsZWFucyB1cCB0aGUgdW5kZXJseWluZyBSZXNpemVPYnNlcnZlciBpZiBub2JvZHkgZWxzZSBpc1xuICAgKiBvYnNlcnZpbmcgdGhpcyBlbGVtZW50LlxuICAgKi9cbiAgcHJpdmF0ZSB1bm9ic2VydmVFbGVtZW50KGVsZW1lbnQ6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vYnNlcnZlZEVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuICAgICAgdGhpcy5vYnNlcnZlZEVsZW1lbnRzLmdldChlbGVtZW50KSEuY291bnQtLTtcbiAgICAgIGlmICghdGhpcy5vYnNlcnZlZEVsZW1lbnRzLmdldChlbGVtZW50KSEuY291bnQpIHtcbiAgICAgICAgdGhpcy5jbGVhbnVwT2JzZXJ2ZXIoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIENsZWFuIHVwIHRoZSB1bmRlcmx5aW5nIFJlc2l6ZU9ic2VydmVyIGZvciB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuICovXG4gIHByaXZhdGUgY2xlYW51cE9ic2VydmVyKGVsZW1lbnQ6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vYnNlcnZlZEVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuICAgICAgY29uc3QgeyBvYnNlcnZlciwgc3RyZWFtIH0gPSB0aGlzLm9ic2VydmVkRWxlbWVudHMuZ2V0KGVsZW1lbnQpITtcbiAgICAgIGlmIChvYnNlcnZlcikge1xuICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB9XG4gICAgICBzdHJlYW0uY29tcGxldGUoKTtcbiAgICAgIHRoaXMub2JzZXJ2ZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgfVxuICB9XG59XG4iXX0=