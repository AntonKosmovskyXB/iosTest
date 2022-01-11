/**
 * @fileoverview added by tsickle
 * Generated from: drawer.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __rest } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzDrawerComponent } from './drawer.component';
import { NzDrawerServiceModule } from './drawer.service.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "./drawer.service.module";
/**
 * @template T, R
 */
export class DrawerBuilderForService {
    /**
     * @param {?} overlay
     * @param {?} options
     */
    constructor(overlay, options) {
        this.overlay = overlay;
        this.options = options;
        this.unsubscribe$ = new Subject();
        /**
         * pick {\@link NzDrawerOptions.nzOnCancel} and omit this option
         */
        const _a = this.options, { nzOnCancel } = _a, componentOption = __rest(_a, ["nzOnCancel"]);
        this.overlayRef = this.overlay.create();
        this.drawerRef = this.overlayRef.attach(new ComponentPortal(NzDrawerComponent)).instance;
        this.updateOptions(componentOption);
        // Prevent repeatedly open drawer when tap focus element.
        this.drawerRef.savePreviouslyFocusedElement();
        this.drawerRef.nzOnViewInit.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        () => {
            (/** @type {?} */ (this.drawerRef)).open();
        }));
        this.drawerRef.nzOnClose.subscribe((/**
         * @return {?}
         */
        () => {
            if (nzOnCancel) {
                nzOnCancel().then((/**
                 * @param {?} canClose
                 * @return {?}
                 */
                canClose => {
                    if (canClose !== false) {
                        (/** @type {?} */ (this.drawerRef)).close();
                    }
                }));
            }
            else {
                (/** @type {?} */ (this.drawerRef)).close();
            }
        }));
        this.drawerRef.afterClose.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.overlayRef.dispose();
            this.drawerRef = null;
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
        }));
    }
    /**
     * @return {?}
     */
    getInstance() {
        return (/** @type {?} */ (this.drawerRef));
    }
    /**
     * @param {?} options
     * @return {?}
     */
    updateOptions(options) {
        Object.assign((/** @type {?} */ (this.drawerRef)), options);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    DrawerBuilderForService.prototype.drawerRef;
    /**
     * @type {?}
     * @private
     */
    DrawerBuilderForService.prototype.overlayRef;
    /**
     * @type {?}
     * @private
     */
    DrawerBuilderForService.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    DrawerBuilderForService.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    DrawerBuilderForService.prototype.options;
}
export class NzDrawerService {
    /**
     * @param {?} overlay
     */
    constructor(overlay) {
        this.overlay = overlay;
    }
    /**
     * @template T, D, R
     * @param {?} options
     * @return {?}
     */
    create(options) {
        return new DrawerBuilderForService(this.overlay, options).getInstance();
    }
}
NzDrawerService.decorators = [
    { type: Injectable, args: [{ providedIn: NzDrawerServiceModule },] }
];
/** @nocollapse */
NzDrawerService.ctorParameters = () => [
    { type: Overlay }
];
/** @nocollapse */ NzDrawerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NzDrawerService_Factory() { return new NzDrawerService(i0.ɵɵinject(i1.Overlay)); }, token: NzDrawerService, providedIn: i2.NzDrawerServiceModule });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzDrawerService.prototype.overlay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2RyYXdlci8iLCJzb3VyY2VzIjpbImRyYXdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7QUFFaEUsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7SUFLbEMsWUFBb0IsT0FBZ0IsRUFBVSxPQUF3QjtRQUFsRCxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFGOUQsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDOzs7O2NBSW5DLGlCQUFpRCxFQUFqRCxFQUFFLFVBQVUsT0FBcUMsRUFBbkMsNENBQWtCO1FBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksZUFBZSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDekYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNwQyx5REFBeUQ7UUFDekQsSUFBSSxDQUFDLFNBQVMsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQzVFLG1CQUFBLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUN0QyxJQUFJLFVBQVUsRUFBRTtnQkFDZCxVQUFVLEVBQUUsQ0FBQyxJQUFJOzs7O2dCQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUMzQixJQUFJLFFBQVEsS0FBSyxLQUFLLEVBQUU7d0JBQ3RCLG1CQUFBLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztxQkFDekI7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxtQkFBQSxJQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDekI7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQzFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQy9CLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxPQUFPLG1CQUFBLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxPQUFtQztRQUMvQyxNQUFNLENBQUMsTUFBTSxDQUFDLG1CQUFBLElBQUksQ0FBQyxTQUFTLEVBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBQ0Y7Ozs7OztJQTFDQyw0Q0FBa0Q7Ozs7O0lBQ2xELDZDQUErQjs7Ozs7SUFDL0IsK0NBQTJDOzs7OztJQUUvQiwwQ0FBd0I7Ozs7O0lBQUUsMENBQWdDOztBQXlDeEUsTUFBTSxPQUFPLGVBQWU7Ozs7SUFDMUIsWUFBb0IsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztJQUFHLENBQUM7Ozs7OztJQUV4QyxNQUFNLENBQThDLE9BQXlEO1FBQzNHLE9BQU8sSUFBSSx1QkFBdUIsQ0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hGLENBQUM7OztZQU5GLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxxQkFBcUIsRUFBRTs7OztZQXhEeEMsT0FBTzs7Ozs7Ozs7SUEwREYsa0NBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE56RHJhd2VyT3B0aW9ucywgTnpEcmF3ZXJPcHRpb25zT2ZDb21wb25lbnQgfSBmcm9tICcuL2RyYXdlci1vcHRpb25zJztcbmltcG9ydCB7IE56RHJhd2VyUmVmIH0gZnJvbSAnLi9kcmF3ZXItcmVmJztcbmltcG9ydCB7IE56RHJhd2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kcmF3ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE56RHJhd2VyU2VydmljZU1vZHVsZSB9IGZyb20gJy4vZHJhd2VyLnNlcnZpY2UubW9kdWxlJztcblxuZXhwb3J0IGNsYXNzIERyYXdlckJ1aWxkZXJGb3JTZXJ2aWNlPFQsIFI+IHtcbiAgcHJpdmF0ZSBkcmF3ZXJSZWY6IE56RHJhd2VyQ29tcG9uZW50PFQsIFI+IHwgbnVsbDtcbiAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmO1xuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LCBwcml2YXRlIG9wdGlvbnM6IE56RHJhd2VyT3B0aW9ucykge1xuICAgIC8qKiBwaWNrIHtAbGluayBOekRyYXdlck9wdGlvbnMubnpPbkNhbmNlbH0gYW5kIG9taXQgdGhpcyBvcHRpb24gKi9cbiAgICBjb25zdCB7IG56T25DYW5jZWwsIC4uLmNvbXBvbmVudE9wdGlvbiB9ID0gdGhpcy5vcHRpb25zO1xuICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoKTtcbiAgICB0aGlzLmRyYXdlclJlZiA9IHRoaXMub3ZlcmxheVJlZi5hdHRhY2gobmV3IENvbXBvbmVudFBvcnRhbChOekRyYXdlckNvbXBvbmVudCkpLmluc3RhbmNlO1xuICAgIHRoaXMudXBkYXRlT3B0aW9ucyhjb21wb25lbnRPcHRpb24pO1xuICAgIC8vIFByZXZlbnQgcmVwZWF0ZWRseSBvcGVuIGRyYXdlciB3aGVuIHRhcCBmb2N1cyBlbGVtZW50LlxuICAgIHRoaXMuZHJhd2VyUmVmLnNhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTtcbiAgICB0aGlzLmRyYXdlclJlZi5uek9uVmlld0luaXQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5kcmF3ZXJSZWYhLm9wZW4oKTtcbiAgICB9KTtcbiAgICB0aGlzLmRyYXdlclJlZi5uek9uQ2xvc2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmIChuek9uQ2FuY2VsKSB7XG4gICAgICAgIG56T25DYW5jZWwoKS50aGVuKGNhbkNsb3NlID0+IHtcbiAgICAgICAgICBpZiAoY2FuQ2xvc2UgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdlclJlZiEuY2xvc2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJSZWYhLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmRyYXdlclJlZi5hZnRlckNsb3NlLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgICB0aGlzLmRyYXdlclJlZiA9IG51bGw7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0SW5zdGFuY2UoKTogTnpEcmF3ZXJSZWY8VCwgUj4ge1xuICAgIHJldHVybiB0aGlzLmRyYXdlclJlZiE7XG4gIH1cblxuICB1cGRhdGVPcHRpb25zKG9wdGlvbnM6IE56RHJhd2VyT3B0aW9uc09mQ29tcG9uZW50KTogdm9pZCB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmRyYXdlclJlZiEsIG9wdGlvbnMpO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogTnpEcmF3ZXJTZXJ2aWNlTW9kdWxlIH0pXG5leHBvcnQgY2xhc3MgTnpEcmF3ZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5KSB7fVxuXG4gIGNyZWF0ZTxUID0gTnpTYWZlQW55LCBEID0gdW5kZWZpbmVkLCBSID0gTnpTYWZlQW55PihvcHRpb25zOiBOekRyYXdlck9wdGlvbnM8VCwgRCBleHRlbmRzIHVuZGVmaW5lZCA/IHt9IDogRD4pOiBOekRyYXdlclJlZjxULCBSPiB7XG4gICAgcmV0dXJuIG5ldyBEcmF3ZXJCdWlsZGVyRm9yU2VydmljZTxULCBSPih0aGlzLm92ZXJsYXksIG9wdGlvbnMpLmdldEluc3RhbmNlKCk7XG4gIH1cbn1cbiJdfQ==