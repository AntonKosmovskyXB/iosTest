/**
 * @fileoverview added by tsickle
 * Generated from: submenu.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject, combineLatest, merge, Subject } from 'rxjs';
import { auditTime, distinctUntilChanged, filter, flatMap, map, mapTo } from 'rxjs/operators';
import { MenuService } from './menu.service';
import { NzIsMenuInsideDropDownToken } from './menu.token';
export class NzSubmenuService {
    /**
     * @param {?} nzHostSubmenuService
     * @param {?} nzMenuService
     * @param {?} isMenuInsideDropDown
     */
    constructor(nzHostSubmenuService, nzMenuService, isMenuInsideDropDown) {
        this.nzHostSubmenuService = nzHostSubmenuService;
        this.nzMenuService = nzMenuService;
        this.isMenuInsideDropDown = isMenuInsideDropDown;
        this.mode$ = this.nzMenuService.mode$.pipe(map((/**
         * @param {?} mode
         * @return {?}
         */
        mode => {
            if (mode === 'inline') {
                return 'inline';
                /** if inside another submenu, set the mode to vertical **/
            }
            else if (mode === 'vertical' || this.nzHostSubmenuService) {
                return 'vertical';
            }
            else {
                return 'horizontal';
            }
        })));
        this.level = 1;
        this.isCurrentSubMenuOpen$ = new BehaviorSubject(false);
        this.isChildSubMenuOpen$ = new BehaviorSubject(false);
        /**
         * submenu title & overlay mouse enter status *
         */
        this.isMouseEnterTitleOrOverlay$ = new Subject();
        this.childMenuItemClick$ = new Subject();
        if (this.nzHostSubmenuService) {
            this.level = this.nzHostSubmenuService.level + 1;
        }
        /**
         * close if menu item clicked *
         * @type {?}
         */
        const isClosedByMenuItemClick = this.childMenuItemClick$.pipe(flatMap((/**
         * @return {?}
         */
        () => this.mode$)), filter((/**
         * @param {?} mode
         * @return {?}
         */
        mode => mode !== 'inline' || this.isMenuInsideDropDown)), mapTo(false));
        /** @type {?} */
        const isCurrentSubmenuOpen$ = merge(this.isMouseEnterTitleOrOverlay$, isClosedByMenuItemClick);
        /**
         * combine the child submenu status with current submenu status to calculate host submenu open *
         * @type {?}
         */
        const isSubMenuOpenWithDebounce$ = combineLatest([this.isChildSubMenuOpen$, isCurrentSubmenuOpen$]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([isChildSubMenuOpen, isCurrentSubmenuOpen]) => isChildSubMenuOpen || isCurrentSubmenuOpen)), auditTime(150), distinctUntilChanged());
        isSubMenuOpenWithDebounce$.pipe(distinctUntilChanged()).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.setOpenStateWithoutDebounce(data);
            if (this.nzHostSubmenuService) {
                /** set parent submenu's child submenu open status **/
                this.nzHostSubmenuService.isChildSubMenuOpen$.next(data);
            }
            else {
                this.nzMenuService.isChildSubMenuOpen$.next(data);
            }
        }));
    }
    /**
     * menu item inside submenu clicked
     * @param {?} menu
     * @return {?}
     */
    onChildMenuItemClick(menu) {
        this.childMenuItemClick$.next(menu);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setOpenStateWithoutDebounce(value) {
        this.isCurrentSubMenuOpen$.next(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setMouseEnterTitleOrOverlayState(value) {
        this.isMouseEnterTitleOrOverlay$.next(value);
    }
}
NzSubmenuService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NzSubmenuService.ctorParameters = () => [
    { type: NzSubmenuService, decorators: [{ type: SkipSelf }, { type: Optional }] },
    { type: MenuService },
    { type: Boolean, decorators: [{ type: Inject, args: [NzIsMenuInsideDropDownToken,] }] }
];
if (false) {
    /** @type {?} */
    NzSubmenuService.prototype.mode$;
    /** @type {?} */
    NzSubmenuService.prototype.level;
    /** @type {?} */
    NzSubmenuService.prototype.isCurrentSubMenuOpen$;
    /**
     * @type {?}
     * @private
     */
    NzSubmenuService.prototype.isChildSubMenuOpen$;
    /**
     * submenu title & overlay mouse enter status *
     * @type {?}
     * @private
     */
    NzSubmenuService.prototype.isMouseEnterTitleOrOverlay$;
    /**
     * @type {?}
     * @private
     */
    NzSubmenuService.prototype.childMenuItemClick$;
    /**
     * @type {?}
     * @private
     */
    NzSubmenuService.prototype.nzHostSubmenuService;
    /** @type {?} */
    NzSubmenuService.prototype.nzMenuService;
    /** @type {?} */
    NzSubmenuService.prototype.isMenuInsideDropDown;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tZW51LyIsInNvdXJjZXMiOlsic3VibWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRixPQUFPLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFJM0QsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7O0lBaUMzQixZQUNrQyxvQkFBc0MsRUFDL0QsYUFBMEIsRUFDVyxvQkFBNkI7UUFGekMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFrQjtRQUMvRCxrQkFBYSxHQUFiLGFBQWEsQ0FBYTtRQUNXLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBUztRQW5DM0UsVUFBSyxHQUErQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQy9ELEdBQUc7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTtZQUNULElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDckIsT0FBTyxRQUFRLENBQUM7Z0JBQ2hCLDJEQUEyRDthQUM1RDtpQkFBTSxJQUFJLElBQUksS0FBSyxVQUFVLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO2dCQUMzRCxPQUFPLFVBQVUsQ0FBQzthQUNuQjtpQkFBTTtnQkFDTCxPQUFPLFlBQVksQ0FBQzthQUNyQjtRQUNILENBQUMsRUFBQyxDQUNILENBQUM7UUFDRixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsMEJBQXFCLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDcEQsd0JBQW1CLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7Ozs7UUFFMUQsZ0NBQTJCLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUNyRCx3QkFBbUIsR0FBRyxJQUFJLE9BQU8sRUFBYSxDQUFDO1FBb0JyRCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQ2xEOzs7OztjQUVLLHVCQUF1QixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQzNELE9BQU87OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsRUFDekIsTUFBTTs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUMsRUFDOUQsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUNiOztjQUNLLHFCQUFxQixHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsdUJBQXVCLENBQUM7Ozs7O2NBRXhGLDBCQUEwQixHQUFHLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUN0RyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLG9CQUFvQixDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFrQixJQUFJLG9CQUFvQixFQUFDLEVBQy9GLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDZCxvQkFBb0IsRUFBRSxDQUN2QjtRQUNELDBCQUEwQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3ZFLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QyxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtnQkFDN0Isc0RBQXNEO2dCQUN0RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzFEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25EO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUF4Q0Qsb0JBQW9CLENBQUMsSUFBZTtRQUNsQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBQ0QsMkJBQTJCLENBQUMsS0FBYztRQUN4QyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBQ0QsZ0NBQWdDLENBQUMsS0FBYztRQUM3QyxJQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7OztZQWhDRixVQUFVOzs7O1lBbUMrQyxnQkFBZ0IsdUJBQXJFLFFBQVEsWUFBSSxRQUFRO1lBdkNoQixXQUFXOzBDQXlDZixNQUFNLFNBQUMsMkJBQTJCOzs7O0lBbkNyQyxpQ0FXRTs7SUFDRixpQ0FBVTs7SUFDVixpREFBNEQ7Ozs7O0lBQzVELCtDQUFrRTs7Ozs7O0lBRWxFLHVEQUE2RDs7Ozs7SUFDN0QsK0NBQXVEOzs7OztJQWdCckQsZ0RBQXNFOztJQUN0RSx5Q0FBaUM7O0lBQ2pDLGdEQUF5RSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCBtZXJnZSwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgYXVkaXRUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBmbGF0TWFwLCBtYXAsIG1hcFRvIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTWVudVNlcnZpY2UgfSBmcm9tICcuL21lbnUuc2VydmljZSc7XG5pbXBvcnQgeyBOeklzTWVudUluc2lkZURyb3BEb3duVG9rZW4gfSBmcm9tICcuL21lbnUudG9rZW4nO1xuaW1wb3J0IHsgTnpNZW51TW9kZVR5cGUgfSBmcm9tICcuL21lbnUudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTnpTdWJtZW51U2VydmljZSB7XG4gIG1vZGUkOiBPYnNlcnZhYmxlPE56TWVudU1vZGVUeXBlPiA9IHRoaXMubnpNZW51U2VydmljZS5tb2RlJC5waXBlKFxuICAgIG1hcChtb2RlID0+IHtcbiAgICAgIGlmIChtb2RlID09PSAnaW5saW5lJykge1xuICAgICAgICByZXR1cm4gJ2lubGluZSc7XG4gICAgICAgIC8qKiBpZiBpbnNpZGUgYW5vdGhlciBzdWJtZW51LCBzZXQgdGhlIG1vZGUgdG8gdmVydGljYWwgKiovXG4gICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICd2ZXJ0aWNhbCcgfHwgdGhpcy5uekhvc3RTdWJtZW51U2VydmljZSkge1xuICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnaG9yaXpvbnRhbCc7XG4gICAgICB9XG4gICAgfSlcbiAgKTtcbiAgbGV2ZWwgPSAxO1xuICBpc0N1cnJlbnRTdWJNZW51T3BlbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgcHJpdmF0ZSBpc0NoaWxkU3ViTWVudU9wZW4kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gIC8qKiBzdWJtZW51IHRpdGxlICYgb3ZlcmxheSBtb3VzZSBlbnRlciBzdGF0dXMgKiovXG4gIHByaXZhdGUgaXNNb3VzZUVudGVyVGl0bGVPck92ZXJsYXkkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgcHJpdmF0ZSBjaGlsZE1lbnVJdGVtQ2xpY2skID0gbmV3IFN1YmplY3Q8TnpTYWZlQW55PigpO1xuICAvKipcbiAgICogbWVudSBpdGVtIGluc2lkZSBzdWJtZW51IGNsaWNrZWRcbiAgICogQHBhcmFtIG1lbnVcbiAgICovXG4gIG9uQ2hpbGRNZW51SXRlbUNsaWNrKG1lbnU6IE56U2FmZUFueSk6IHZvaWQge1xuICAgIHRoaXMuY2hpbGRNZW51SXRlbUNsaWNrJC5uZXh0KG1lbnUpO1xuICB9XG4gIHNldE9wZW5TdGF0ZVdpdGhvdXREZWJvdW5jZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaXNDdXJyZW50U3ViTWVudU9wZW4kLm5leHQodmFsdWUpO1xuICB9XG4gIHNldE1vdXNlRW50ZXJUaXRsZU9yT3ZlcmxheVN0YXRlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pc01vdXNlRW50ZXJUaXRsZU9yT3ZlcmxheSQubmV4dCh2YWx1ZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAU2tpcFNlbGYoKSBAT3B0aW9uYWwoKSBwcml2YXRlIG56SG9zdFN1Ym1lbnVTZXJ2aWNlOiBOelN1Ym1lbnVTZXJ2aWNlLFxuICAgIHB1YmxpYyBuek1lbnVTZXJ2aWNlOiBNZW51U2VydmljZSxcbiAgICBASW5qZWN0KE56SXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbikgcHVibGljIGlzTWVudUluc2lkZURyb3BEb3duOiBib29sZWFuXG4gICkge1xuICAgIGlmICh0aGlzLm56SG9zdFN1Ym1lbnVTZXJ2aWNlKSB7XG4gICAgICB0aGlzLmxldmVsID0gdGhpcy5uekhvc3RTdWJtZW51U2VydmljZS5sZXZlbCArIDE7XG4gICAgfVxuICAgIC8qKiBjbG9zZSBpZiBtZW51IGl0ZW0gY2xpY2tlZCAqKi9cbiAgICBjb25zdCBpc0Nsb3NlZEJ5TWVudUl0ZW1DbGljayA9IHRoaXMuY2hpbGRNZW51SXRlbUNsaWNrJC5waXBlKFxuICAgICAgZmxhdE1hcCgoKSA9PiB0aGlzLm1vZGUkKSxcbiAgICAgIGZpbHRlcihtb2RlID0+IG1vZGUgIT09ICdpbmxpbmUnIHx8IHRoaXMuaXNNZW51SW5zaWRlRHJvcERvd24pLFxuICAgICAgbWFwVG8oZmFsc2UpXG4gICAgKTtcbiAgICBjb25zdCBpc0N1cnJlbnRTdWJtZW51T3BlbiQgPSBtZXJnZSh0aGlzLmlzTW91c2VFbnRlclRpdGxlT3JPdmVybGF5JCwgaXNDbG9zZWRCeU1lbnVJdGVtQ2xpY2spO1xuICAgIC8qKiBjb21iaW5lIHRoZSBjaGlsZCBzdWJtZW51IHN0YXR1cyB3aXRoIGN1cnJlbnQgc3VibWVudSBzdGF0dXMgdG8gY2FsY3VsYXRlIGhvc3Qgc3VibWVudSBvcGVuICoqL1xuICAgIGNvbnN0IGlzU3ViTWVudU9wZW5XaXRoRGVib3VuY2UkID0gY29tYmluZUxhdGVzdChbdGhpcy5pc0NoaWxkU3ViTWVudU9wZW4kLCBpc0N1cnJlbnRTdWJtZW51T3BlbiRdKS5waXBlKFxuICAgICAgbWFwKChbaXNDaGlsZFN1Yk1lbnVPcGVuLCBpc0N1cnJlbnRTdWJtZW51T3Blbl0pID0+IGlzQ2hpbGRTdWJNZW51T3BlbiB8fCBpc0N1cnJlbnRTdWJtZW51T3BlbiksXG4gICAgICBhdWRpdFRpbWUoMTUwKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICAgIGlzU3ViTWVudU9wZW5XaXRoRGVib3VuY2UkLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgdGhpcy5zZXRPcGVuU3RhdGVXaXRob3V0RGVib3VuY2UoZGF0YSk7XG4gICAgICBpZiAodGhpcy5uekhvc3RTdWJtZW51U2VydmljZSkge1xuICAgICAgICAvKiogc2V0IHBhcmVudCBzdWJtZW51J3MgY2hpbGQgc3VibWVudSBvcGVuIHN0YXR1cyAqKi9cbiAgICAgICAgdGhpcy5uekhvc3RTdWJtZW51U2VydmljZS5pc0NoaWxkU3ViTWVudU9wZW4kLm5leHQoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm56TWVudVNlcnZpY2UuaXNDaGlsZFN1Yk1lbnVPcGVuJC5uZXh0KGRhdGEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=