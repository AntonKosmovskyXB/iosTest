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
const NOOP = (/**
 * @return {?}
 */
() => { });
const ɵ0 = NOOP;
export class NzResizeService {
    /**
     * @param {?} ngZone
     * @param {?} rendererFactory2
     */
    constructor(ngZone, rendererFactory2) {
        this.ngZone = ngZone;
        this.rendererFactory2 = rendererFactory2;
        this.resizeSource$ = new Subject();
        this.listeners = 0;
        this.disposeHandle = NOOP;
        this.handler = (/**
         * @return {?}
         */
        () => {
            this.ngZone.run((/**
             * @return {?}
             */
            () => {
                this.resizeSource$.next();
            }));
        });
        this.renderer = this.rendererFactory2.createRenderer(null, null);
    }
    /**
     * @return {?}
     */
    subscribe() {
        this.registerListener();
        return this.resizeSource$.pipe(auditTime(16), finalize((/**
         * @return {?}
         */
        () => this.unregisterListener())));
    }
    /**
     * @return {?}
     */
    unsubscribe() {
        this.unregisterListener();
    }
    /**
     * @private
     * @return {?}
     */
    registerListener() {
        if (this.listeners === 0) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.disposeHandle = this.renderer.listen('window', 'resize', this.handler);
            }));
        }
        this.listeners += 1;
    }
    /**
     * @private
     * @return {?}
     */
    unregisterListener() {
        this.listeners -= 1;
        if (this.listeners === 0) {
            this.disposeHandle();
            this.disposeHandle = NOOP;
        }
    }
}
NzResizeService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzResizeService.ctorParameters = () => [
    { type: NgZone },
    { type: RendererFactory2 }
];
/** @nocollapse */ NzResizeService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NzResizeService_Factory() { return new NzResizeService(i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i0.RendererFactory2)); }, token: NzResizeService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlL3NlcnZpY2VzLyIsInNvdXJjZXMiOlsicmVzaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFhLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O01BRS9DLElBQUk7OztBQUFHLEdBQVMsRUFBRSxHQUFFLENBQUMsQ0FBQTs7QUFLM0IsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBZTFCLFlBQW9CLE1BQWMsRUFBVSxnQkFBa0M7UUFBMUQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFkN0Qsa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBRTdDLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFJZCxrQkFBYSxHQUFHLElBQUksQ0FBQztRQUVyQixZQUFPOzs7UUFBRyxHQUFTLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDNUIsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUM7UUFHQSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFeEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDNUIsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUNiLFFBQVE7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFDLENBQzFDLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRU8sZ0JBQWdCO1FBQ3RCLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxDQUFDLEVBQUU7WUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUI7OztZQUFDLEdBQUcsRUFBRTtnQkFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM5RSxDQUFDLEVBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFTyxrQkFBa0I7UUFDeEIsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUM7UUFFcEIsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7WUFwREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUm9CLE1BQU07WUFBYSxnQkFBZ0I7Ozs7Ozs7O0lBVXRELHdDQUFxRDs7Ozs7SUFFckQsb0NBQXNCOzs7OztJQUV0QixtQ0FBNEI7Ozs7O0lBRTVCLHdDQUE2Qjs7Ozs7SUFFN0Isa0NBSUU7Ozs7O0lBRVUsaUNBQXNCOzs7OztJQUFFLDJDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBhdWRpdFRpbWUsIGZpbmFsaXplIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5jb25zdCBOT09QID0gKCk6IHZvaWQgPT4ge307XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE56UmVzaXplU2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgcmVzaXplU291cmNlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgcHJpdmF0ZSBsaXN0ZW5lcnMgPSAwO1xuXG4gIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMjtcblxuICBwcml2YXRlIGRpc3Bvc2VIYW5kbGUgPSBOT09QO1xuXG4gIHByaXZhdGUgaGFuZGxlciA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5yZXNpemVTb3VyY2UkLm5leHQoKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nWm9uZTogTmdab25lLCBwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTI6IFJlbmRlcmVyRmFjdG9yeTIpIHtcbiAgICB0aGlzLnJlbmRlcmVyID0gdGhpcy5yZW5kZXJlckZhY3RvcnkyLmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xuICB9XG5cbiAgc3Vic2NyaWJlKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHRoaXMucmVnaXN0ZXJMaXN0ZW5lcigpO1xuXG4gICAgcmV0dXJuIHRoaXMucmVzaXplU291cmNlJC5waXBlKFxuICAgICAgYXVkaXRUaW1lKDE2KSxcbiAgICAgIGZpbmFsaXplKCgpID0+IHRoaXMudW5yZWdpc3Rlckxpc3RlbmVyKCkpXG4gICAgKTtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKCk6IHZvaWQge1xuICAgIHRoaXMudW5yZWdpc3Rlckxpc3RlbmVyKCk7XG4gIH1cblxuICBwcml2YXRlIHJlZ2lzdGVyTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubGlzdGVuZXJzID09PSAwKSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMuZGlzcG9zZUhhbmRsZSA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAncmVzaXplJywgdGhpcy5oYW5kbGVyKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMubGlzdGVuZXJzICs9IDE7XG4gIH1cblxuICBwcml2YXRlIHVucmVnaXN0ZXJMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RlbmVycyAtPSAxO1xuXG4gICAgaWYgKHRoaXMubGlzdGVuZXJzID09PSAwKSB7XG4gICAgICB0aGlzLmRpc3Bvc2VIYW5kbGUoKTtcbiAgICAgIHRoaXMuZGlzcG9zZUhhbmRsZSA9IE5PT1A7XG4gICAgfVxuICB9XG59XG4iXX0=