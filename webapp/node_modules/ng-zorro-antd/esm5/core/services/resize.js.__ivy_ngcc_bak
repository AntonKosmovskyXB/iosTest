/**
 * @fileoverview added by tsickle
 * Generated from: resize.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable, NgZone, RendererFactory2 } from '@angular/core';
import { Subject } from 'rxjs';
import { auditTime, finalize } from 'rxjs/operators';
import * as i0 from "@angular/core";
/** @type {?} */
var NOOP = (/**
 * @return {?}
 */
function () { });
var ɵ0 = NOOP;
var NzResizeService = /** @class */ (function () {
    function NzResizeService(ngZone, rendererFactory2) {
        var _this = this;
        this.ngZone = ngZone;
        this.rendererFactory2 = rendererFactory2;
        this.resizeSource$ = new Subject();
        this.listeners = 0;
        this.disposeHandle = NOOP;
        this.handler = (/**
         * @return {?}
         */
        function () {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.resizeSource$.next();
            }));
        });
        this.renderer = this.rendererFactory2.createRenderer(null, null);
    }
    /**
     * @return {?}
     */
    NzResizeService.prototype.subscribe = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.registerListener();
        return this.resizeSource$.pipe(auditTime(16), finalize((/**
         * @return {?}
         */
        function () { return _this.unregisterListener(); })));
    };
    /**
     * @return {?}
     */
    NzResizeService.prototype.unsubscribe = /**
     * @return {?}
     */
    function () {
        this.unregisterListener();
    };
    /**
     * @private
     * @return {?}
     */
    NzResizeService.prototype.registerListener = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.listeners === 0) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.disposeHandle = _this.renderer.listen('window', 'resize', _this.handler);
            }));
        }
        this.listeners += 1;
    };
    /**
     * @private
     * @return {?}
     */
    NzResizeService.prototype.unregisterListener = /**
     * @private
     * @return {?}
     */
    function () {
        this.listeners -= 1;
        if (this.listeners === 0) {
            this.disposeHandle();
            this.disposeHandle = NOOP;
        }
    };
    NzResizeService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzResizeService.ctorParameters = function () { return [
        { type: NgZone },
        { type: RendererFactory2 }
    ]; };
    /** @nocollapse */ NzResizeService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NzResizeService_Factory() { return new NzResizeService(i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i0.RendererFactory2)); }, token: NzResizeService, providedIn: "root" });
    return NzResizeService;
}());
export { NzResizeService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzResizeService.prototype.resizeSource$;
    /**
     * @type {?}
     * @private
     */
    NzResizeService.prototype.listeners;
    /**
     * @type {?}
     * @private
     */
    NzResizeService.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzResizeService.prototype.disposeHandle;
    /**
     * @type {?}
     * @private
     */
    NzResizeService.prototype.handler;
    /**
     * @type {?}
     * @private
     */
    NzResizeService.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzResizeService.prototype.rendererFactory2;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlL3NlcnZpY2VzLyIsInNvdXJjZXMiOlsicmVzaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFhLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lBRS9DLElBQUk7OztBQUFHLGNBQWEsQ0FBQyxDQUFBOztBQUUzQjtJQWtCRSx5QkFBb0IsTUFBYyxFQUFVLGdCQUFrQztRQUE5RSxpQkFFQztRQUZtQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQWQ3RCxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFFN0MsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUlkLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBRXJCLFlBQU87OztRQUFHO1lBQ2hCLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRzs7O1lBQUM7Z0JBQ2QsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM1QixDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQztRQUdBLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7OztJQUVELG1DQUFTOzs7SUFBVDtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFeEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDNUIsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUNiLFFBQVE7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBekIsQ0FBeUIsRUFBQyxDQUMxQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELHFDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRU8sMENBQWdCOzs7O0lBQXhCO1FBQUEsaUJBUUM7UUFQQyxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssQ0FBQyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCOzs7WUFBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM5RSxDQUFDLEVBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFTyw0Q0FBa0I7Ozs7SUFBMUI7UUFDRSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQztRQUVwQixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssQ0FBQyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUMzQjtJQUNILENBQUM7O2dCQXBERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVJvQixNQUFNO2dCQUFhLGdCQUFnQjs7OzBCQUx4RDtDQWdFQyxBQXJERCxJQXFEQztTQWxEWSxlQUFlOzs7Ozs7SUFDMUIsd0NBQXFEOzs7OztJQUVyRCxvQ0FBc0I7Ozs7O0lBRXRCLG1DQUE0Qjs7Ozs7SUFFNUIsd0NBQTZCOzs7OztJQUU3QixrQ0FJRTs7Ozs7SUFFVSxpQ0FBc0I7Ozs7O0lBQUUsMkNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lLCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGF1ZGl0VGltZSwgZmluYWxpemUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IE5PT1AgPSAoKTogdm9pZCA9PiB7fTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTnpSZXNpemVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSByZXNpemVTb3VyY2UkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBwcml2YXRlIGxpc3RlbmVycyA9IDA7XG5cbiAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyO1xuXG4gIHByaXZhdGUgZGlzcG9zZUhhbmRsZSA9IE5PT1A7XG5cbiAgcHJpdmF0ZSBoYW5kbGVyID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLnJlc2l6ZVNvdXJjZSQubmV4dCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5MjogUmVuZGVyZXJGYWN0b3J5Mikge1xuICAgIHRoaXMucmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyRmFjdG9yeTIuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XG4gIH1cblxuICBzdWJzY3JpYmUoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgdGhpcy5yZWdpc3Rlckxpc3RlbmVyKCk7XG5cbiAgICByZXR1cm4gdGhpcy5yZXNpemVTb3VyY2UkLnBpcGUoXG4gICAgICBhdWRpdFRpbWUoMTYpLFxuICAgICAgZmluYWxpemUoKCkgPT4gdGhpcy51bnJlZ2lzdGVyTGlzdGVuZXIoKSlcbiAgICApO1xuICB9XG5cbiAgdW5zdWJzY3JpYmUoKTogdm9pZCB7XG4gICAgdGhpcy51bnJlZ2lzdGVyTGlzdGVuZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5saXN0ZW5lcnMgPT09IDApIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgdGhpcy5kaXNwb3NlSGFuZGxlID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsICdyZXNpemUnLCB0aGlzLmhhbmRsZXIpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5saXN0ZW5lcnMgKz0gMTtcbiAgfVxuXG4gIHByaXZhdGUgdW5yZWdpc3Rlckxpc3RlbmVyKCk6IHZvaWQge1xuICAgIHRoaXMubGlzdGVuZXJzIC09IDE7XG5cbiAgICBpZiAodGhpcy5saXN0ZW5lcnMgPT09IDApIHtcbiAgICAgIHRoaXMuZGlzcG9zZUhhbmRsZSgpO1xuICAgICAgdGhpcy5kaXNwb3NlSGFuZGxlID0gTk9PUDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==