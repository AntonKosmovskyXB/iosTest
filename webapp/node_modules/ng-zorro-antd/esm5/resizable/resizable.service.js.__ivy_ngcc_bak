/**
 * @fileoverview added by tsickle
 * Generated from: resizable.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, NgZone } from '@angular/core';
import { isTouchEvent } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
var NzResizableService = /** @class */ (function () {
    function NzResizableService(ngZone, document) {
        this.ngZone = ngZone;
        this.listeners = new Map();
        this.handleMouseDown$ = new Subject();
        this.documentMouseUp$ = new Subject();
        this.documentMouseMove$ = new Subject();
        this.mouseEntered$ = new Subject();
        this.document = document;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    NzResizableService.prototype.startResizing = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var _isTouchEvent = isTouchEvent(event);
        this.clearListeners();
        /** @type {?} */
        var moveEvent = _isTouchEvent ? 'touchmove' : 'mousemove';
        /** @type {?} */
        var upEvent = _isTouchEvent ? 'touchend' : 'mouseup';
        /** @type {?} */
        var moveEventHandler = (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            _this.documentMouseMove$.next(e);
        });
        /** @type {?} */
        var upEventHandler = (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            _this.documentMouseUp$.next(e);
            _this.clearListeners();
        });
        this.listeners.set(moveEvent, moveEventHandler);
        this.listeners.set(upEvent, upEventHandler);
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.listeners.forEach((/**
             * @param {?} handler
             * @param {?} name
             * @return {?}
             */
            function (handler, name) {
                _this.document.addEventListener(name, (/** @type {?} */ (handler)));
            }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzResizableService.prototype.clearListeners = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.listeners.forEach((/**
         * @param {?} handler
         * @param {?} name
         * @return {?}
         */
        function (handler, name) {
            _this.document.removeEventListener(name, (/** @type {?} */ (handler)));
        }));
        this.listeners.clear();
    };
    /**
     * @return {?}
     */
    NzResizableService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.handleMouseDown$.complete();
        this.documentMouseUp$.complete();
        this.documentMouseMove$.complete();
        this.mouseEntered$.complete();
        this.clearListeners();
    };
    NzResizableService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NzResizableService.ctorParameters = function () { return [
        { type: NgZone },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    return NzResizableService;
}());
export { NzResizableService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzResizableService.prototype.document;
    /**
     * @type {?}
     * @private
     */
    NzResizableService.prototype.listeners;
    /** @type {?} */
    NzResizableService.prototype.handleMouseDown$;
    /** @type {?} */
    NzResizableService.prototype.documentMouseUp$;
    /** @type {?} */
    NzResizableService.prototype.documentMouseMove$;
    /** @type {?} */
    NzResizableService.prototype.mouseEntered$;
    /**
     * @type {?}
     * @private
     */
    NzResizableService.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXphYmxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Jlc2l6YWJsZS8iLCJzb3VyY2VzIjpbInJlc2l6YWJsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXZELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJL0I7SUFVRSw0QkFBb0IsTUFBYyxFQUFvQixRQUFtQjtRQUFyRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUDFCLGNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBb0QsQ0FBQztRQUVoRixxQkFBZ0IsR0FBRyxJQUFJLE9BQU8sRUFBZ0MsQ0FBQztRQUMvRCxxQkFBZ0IsR0FBRyxJQUFJLE9BQU8sRUFBMkIsQ0FBQztRQUMxRCx1QkFBa0IsR0FBRyxJQUFJLE9BQU8sRUFBMkIsQ0FBQztRQUM1RCxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFHckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCwwQ0FBYTs7OztJQUFiLFVBQWMsS0FBOEI7UUFBNUMsaUJBcUJDOztZQXBCTyxhQUFhLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUN6QyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7O1lBQ2hCLFNBQVMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVzs7WUFDckQsT0FBTyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTOztZQUNoRCxnQkFBZ0I7Ozs7UUFBRyxVQUFDLENBQTBCO1lBQ2xELEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFBOztZQUNLLGNBQWM7Ozs7UUFBRyxVQUFDLENBQTBCO1lBQ2hELEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQTtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztRQUU1QyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQjs7O1FBQUM7WUFDNUIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPOzs7OztZQUFDLFVBQUMsT0FBTyxFQUFFLElBQUk7Z0JBQ25DLEtBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLG1CQUFBLE9BQU8sRUFBaUIsQ0FBQyxDQUFDO1lBQ2pFLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLDJDQUFjOzs7O0lBQXRCO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87Ozs7O1FBQUMsVUFBQyxPQUFPLEVBQUUsSUFBSTtZQUNuQyxLQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxtQkFBQSxPQUFPLEVBQWlCLENBQUMsQ0FBQztRQUNwRSxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELHdDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7O2dCQWxERixVQUFVOzs7O2dCQVJrQixNQUFNO2dEQWtCSSxNQUFNLFNBQUMsUUFBUTs7SUF5Q3RELHlCQUFDO0NBQUEsQUFuREQsSUFtREM7U0FsRFksa0JBQWtCOzs7Ozs7SUFDN0Isc0NBQTJCOzs7OztJQUMzQix1Q0FBZ0Y7O0lBRWhGLDhDQUErRDs7SUFDL0QsOENBQTBEOztJQUMxRCxnREFBNEQ7O0lBQzVELDJDQUF1Qzs7Ozs7SUFFM0Isb0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBOZ1pvbmUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IGlzVG91Y2hFdmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOelJlc2l6ZUhhbmRsZU1vdXNlRG93bkV2ZW50IH0gZnJvbSAnLi9yZXNpemUtaGFuZGxlLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOelJlc2l6YWJsZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudDtcbiAgcHJpdmF0ZSBsaXN0ZW5lcnMgPSBuZXcgTWFwPHN0cmluZywgKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZD4oKTtcblxuICBoYW5kbGVNb3VzZURvd24kID0gbmV3IFN1YmplY3Q8TnpSZXNpemVIYW5kbGVNb3VzZURvd25FdmVudD4oKTtcbiAgZG9jdW1lbnRNb3VzZVVwJCA9IG5ldyBTdWJqZWN0PE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50PigpO1xuICBkb2N1bWVudE1vdXNlTW92ZSQgPSBuZXcgU3ViamVjdDxNb3VzZUV2ZW50IHwgVG91Y2hFdmVudD4oKTtcbiAgbW91c2VFbnRlcmVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgQEluamVjdChET0NVTUVOVCkgZG9jdW1lbnQ6IE56U2FmZUFueSkge1xuICAgIHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgfVxuXG4gIHN0YXJ0UmVzaXppbmcoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgX2lzVG91Y2hFdmVudCA9IGlzVG91Y2hFdmVudChldmVudCk7XG4gICAgdGhpcy5jbGVhckxpc3RlbmVycygpO1xuICAgIGNvbnN0IG1vdmVFdmVudCA9IF9pc1RvdWNoRXZlbnQgPyAndG91Y2htb3ZlJyA6ICdtb3VzZW1vdmUnO1xuICAgIGNvbnN0IHVwRXZlbnQgPSBfaXNUb3VjaEV2ZW50ID8gJ3RvdWNoZW5kJyA6ICdtb3VzZXVwJztcbiAgICBjb25zdCBtb3ZlRXZlbnRIYW5kbGVyID0gKGU6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmRvY3VtZW50TW91c2VNb3ZlJC5uZXh0KGUpO1xuICAgIH07XG4gICAgY29uc3QgdXBFdmVudEhhbmRsZXIgPSAoZTogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgIHRoaXMuZG9jdW1lbnRNb3VzZVVwJC5uZXh0KGUpO1xuICAgICAgdGhpcy5jbGVhckxpc3RlbmVycygpO1xuICAgIH07XG5cbiAgICB0aGlzLmxpc3RlbmVycy5zZXQobW92ZUV2ZW50LCBtb3ZlRXZlbnRIYW5kbGVyKTtcbiAgICB0aGlzLmxpc3RlbmVycy5zZXQodXBFdmVudCwgdXBFdmVudEhhbmRsZXIpO1xuXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaCgoaGFuZGxlciwgbmFtZSkgPT4ge1xuICAgICAgICB0aGlzLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgaGFuZGxlciBhcyBFdmVudExpc3RlbmVyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckxpc3RlbmVycygpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKChoYW5kbGVyLCBuYW1lKSA9PiB7XG4gICAgICB0aGlzLmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgaGFuZGxlciBhcyBFdmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgICB0aGlzLmxpc3RlbmVycy5jbGVhcigpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5oYW5kbGVNb3VzZURvd24kLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5kb2N1bWVudE1vdXNlVXAkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5kb2N1bWVudE1vdXNlTW92ZSQuY29tcGxldGUoKTtcbiAgICB0aGlzLm1vdXNlRW50ZXJlZCQuY29tcGxldGUoKTtcbiAgICB0aGlzLmNsZWFyTGlzdGVuZXJzKCk7XG4gIH1cbn1cbiJdfQ==