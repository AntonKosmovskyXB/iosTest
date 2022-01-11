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
export class NzResizableService {
    /**
     * @param {?} ngZone
     * @param {?} document
     */
    constructor(ngZone, document) {
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
    startResizing(event) {
        /** @type {?} */
        const _isTouchEvent = isTouchEvent(event);
        this.clearListeners();
        /** @type {?} */
        const moveEvent = _isTouchEvent ? 'touchmove' : 'mousemove';
        /** @type {?} */
        const upEvent = _isTouchEvent ? 'touchend' : 'mouseup';
        /** @type {?} */
        const moveEventHandler = (/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            this.documentMouseMove$.next(e);
        });
        /** @type {?} */
        const upEventHandler = (/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            this.documentMouseUp$.next(e);
            this.clearListeners();
        });
        this.listeners.set(moveEvent, moveEventHandler);
        this.listeners.set(upEvent, upEventHandler);
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.listeners.forEach((/**
             * @param {?} handler
             * @param {?} name
             * @return {?}
             */
            (handler, name) => {
                this.document.addEventListener(name, (/** @type {?} */ (handler)));
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    clearListeners() {
        this.listeners.forEach((/**
         * @param {?} handler
         * @param {?} name
         * @return {?}
         */
        (handler, name) => {
            this.document.removeEventListener(name, (/** @type {?} */ (handler)));
        }));
        this.listeners.clear();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.handleMouseDown$.complete();
        this.documentMouseUp$.complete();
        this.documentMouseMove$.complete();
        this.mouseEntered$.complete();
        this.clearListeners();
    }
}
NzResizableService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NzResizableService.ctorParameters = () => [
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXphYmxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Jlc2l6YWJsZS8iLCJzb3VyY2VzIjpbInJlc2l6YWJsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXZELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFLL0IsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFTN0IsWUFBb0IsTUFBYyxFQUFvQixRQUFtQjtRQUFyRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUDFCLGNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBb0QsQ0FBQztRQUVoRixxQkFBZ0IsR0FBRyxJQUFJLE9BQU8sRUFBZ0MsQ0FBQztRQUMvRCxxQkFBZ0IsR0FBRyxJQUFJLE9BQU8sRUFBMkIsQ0FBQztRQUMxRCx1QkFBa0IsR0FBRyxJQUFJLE9BQU8sRUFBMkIsQ0FBQztRQUM1RCxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFHckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsS0FBOEI7O2NBQ3BDLGFBQWEsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7Y0FDaEIsU0FBUyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXOztjQUNyRCxPQUFPLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVM7O2NBQ2hELGdCQUFnQjs7OztRQUFHLENBQUMsQ0FBMEIsRUFBRSxFQUFFO1lBQ3RELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFBOztjQUNLLGNBQWM7Ozs7UUFBRyxDQUFDLENBQTBCLEVBQUUsRUFBRTtZQUNwRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUE7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUI7OztRQUFDLEdBQUcsRUFBRTtZQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87Ozs7O1lBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLG1CQUFBLE9BQU8sRUFBaUIsQ0FBQyxDQUFDO1lBQ2pFLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLGNBQWM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPOzs7OztRQUFDLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLG1CQUFBLE9BQU8sRUFBaUIsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7OztZQWxERixVQUFVOzs7O1lBUmtCLE1BQU07NENBa0JJLE1BQU0sU0FBQyxRQUFROzs7Ozs7O0lBUnBELHNDQUEyQjs7Ozs7SUFDM0IsdUNBQWdGOztJQUVoRiw4Q0FBK0Q7O0lBQy9ELDhDQUEwRDs7SUFDMUQsZ0RBQTREOztJQUM1RCwyQ0FBdUM7Ozs7O0lBRTNCLG9DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgTmdab25lLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBpc1RvdWNoRXZlbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTnpSZXNpemVIYW5kbGVNb3VzZURvd25FdmVudCB9IGZyb20gJy4vcmVzaXplLWhhbmRsZS5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTnpSZXNpemFibGVTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnQ7XG4gIHByaXZhdGUgbGlzdGVuZXJzID0gbmV3IE1hcDxzdHJpbmcsIChldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ+KCk7XG5cbiAgaGFuZGxlTW91c2VEb3duJCA9IG5ldyBTdWJqZWN0PE56UmVzaXplSGFuZGxlTW91c2VEb3duRXZlbnQ+KCk7XG4gIGRvY3VtZW50TW91c2VVcCQgPSBuZXcgU3ViamVjdDxNb3VzZUV2ZW50IHwgVG91Y2hFdmVudD4oKTtcbiAgZG9jdW1lbnRNb3VzZU1vdmUkID0gbmV3IFN1YmplY3Q8TW91c2VFdmVudCB8IFRvdWNoRXZlbnQ+KCk7XG4gIG1vdXNlRW50ZXJlZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIEBJbmplY3QoRE9DVU1FTlQpIGRvY3VtZW50OiBOelNhZmVBbnkpIHtcbiAgICB0aGlzLmRvY3VtZW50ID0gZG9jdW1lbnQ7XG4gIH1cblxuICBzdGFydFJlc2l6aW5nKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IF9pc1RvdWNoRXZlbnQgPSBpc1RvdWNoRXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuY2xlYXJMaXN0ZW5lcnMoKTtcbiAgICBjb25zdCBtb3ZlRXZlbnQgPSBfaXNUb3VjaEV2ZW50ID8gJ3RvdWNobW92ZScgOiAnbW91c2Vtb3ZlJztcbiAgICBjb25zdCB1cEV2ZW50ID0gX2lzVG91Y2hFdmVudCA/ICd0b3VjaGVuZCcgOiAnbW91c2V1cCc7XG4gICAgY29uc3QgbW92ZUV2ZW50SGFuZGxlciA9IChlOiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkgPT4ge1xuICAgICAgdGhpcy5kb2N1bWVudE1vdXNlTW92ZSQubmV4dChlKTtcbiAgICB9O1xuICAgIGNvbnN0IHVwRXZlbnRIYW5kbGVyID0gKGU6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmRvY3VtZW50TW91c2VVcCQubmV4dChlKTtcbiAgICAgIHRoaXMuY2xlYXJMaXN0ZW5lcnMoKTtcbiAgICB9O1xuXG4gICAgdGhpcy5saXN0ZW5lcnMuc2V0KG1vdmVFdmVudCwgbW92ZUV2ZW50SGFuZGxlcik7XG4gICAgdGhpcy5saXN0ZW5lcnMuc2V0KHVwRXZlbnQsIHVwRXZlbnRIYW5kbGVyKTtcblxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2goKGhhbmRsZXIsIG5hbWUpID0+IHtcbiAgICAgICAgdGhpcy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGhhbmRsZXIgYXMgRXZlbnRMaXN0ZW5lcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaCgoaGFuZGxlciwgbmFtZSkgPT4ge1xuICAgICAgdGhpcy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGhhbmRsZXIgYXMgRXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gICAgdGhpcy5saXN0ZW5lcnMuY2xlYXIoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuaGFuZGxlTW91c2VEb3duJC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuZG9jdW1lbnRNb3VzZVVwJC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuZG9jdW1lbnRNb3VzZU1vdmUkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5tb3VzZUVudGVyZWQkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5jbGVhckxpc3RlbmVycygpO1xuICB9XG59XG4iXX0=