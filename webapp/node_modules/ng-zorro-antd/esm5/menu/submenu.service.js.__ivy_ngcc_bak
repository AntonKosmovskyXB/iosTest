/**
 * @fileoverview added by tsickle
 * Generated from: submenu.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __read } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject, combineLatest, merge, Subject } from 'rxjs';
import { auditTime, distinctUntilChanged, filter, flatMap, map, mapTo } from 'rxjs/operators';
import { MenuService } from './menu.service';
import { NzIsMenuInsideDropDownToken } from './menu.token';
var NzSubmenuService = /** @class */ (function () {
    function NzSubmenuService(nzHostSubmenuService, nzMenuService, isMenuInsideDropDown) {
        var _this = this;
        this.nzHostSubmenuService = nzHostSubmenuService;
        this.nzMenuService = nzMenuService;
        this.isMenuInsideDropDown = isMenuInsideDropDown;
        this.mode$ = this.nzMenuService.mode$.pipe(map((/**
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            if (mode === 'inline') {
                return 'inline';
                /** if inside another submenu, set the mode to vertical **/
            }
            else if (mode === 'vertical' || _this.nzHostSubmenuService) {
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
        var isClosedByMenuItemClick = this.childMenuItemClick$.pipe(flatMap((/**
         * @return {?}
         */
        function () { return _this.mode$; })), filter((/**
         * @param {?} mode
         * @return {?}
         */
        function (mode) { return mode !== 'inline' || _this.isMenuInsideDropDown; })), mapTo(false));
        /** @type {?} */
        var isCurrentSubmenuOpen$ = merge(this.isMouseEnterTitleOrOverlay$, isClosedByMenuItemClick);
        /**
         * combine the child submenu status with current submenu status to calculate host submenu open *
         * @type {?}
         */
        var isSubMenuOpenWithDebounce$ = combineLatest([this.isChildSubMenuOpen$, isCurrentSubmenuOpen$]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), isChildSubMenuOpen = _b[0], isCurrentSubmenuOpen = _b[1];
            return isChildSubMenuOpen || isCurrentSubmenuOpen;
        })), auditTime(150), distinctUntilChanged());
        isSubMenuOpenWithDebounce$.pipe(distinctUntilChanged()).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.setOpenStateWithoutDebounce(data);
            if (_this.nzHostSubmenuService) {
                /** set parent submenu's child submenu open status **/
                _this.nzHostSubmenuService.isChildSubMenuOpen$.next(data);
            }
            else {
                _this.nzMenuService.isChildSubMenuOpen$.next(data);
            }
        }));
    }
    /**
     * menu item inside submenu clicked
     * @param menu
     */
    /**
     * menu item inside submenu clicked
     * @param {?} menu
     * @return {?}
     */
    NzSubmenuService.prototype.onChildMenuItemClick = /**
     * menu item inside submenu clicked
     * @param {?} menu
     * @return {?}
     */
    function (menu) {
        this.childMenuItemClick$.next(menu);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSubmenuService.prototype.setOpenStateWithoutDebounce = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.isCurrentSubMenuOpen$.next(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSubmenuService.prototype.setMouseEnterTitleOrOverlayState = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.isMouseEnterTitleOrOverlay$.next(value);
    };
    NzSubmenuService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NzSubmenuService.ctorParameters = function () { return [
        { type: NzSubmenuService, decorators: [{ type: SkipSelf }, { type: Optional }] },
        { type: MenuService },
        { type: Boolean, decorators: [{ type: Inject, args: [NzIsMenuInsideDropDownToken,] }] }
    ]; };
    return NzSubmenuService;
}());
export { NzSubmenuService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tZW51LyIsInNvdXJjZXMiOlsic3VibWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRzNEO0lBa0NFLDBCQUNrQyxvQkFBc0MsRUFDL0QsYUFBMEIsRUFDVyxvQkFBNkI7UUFIM0UsaUJBOEJDO1FBN0JpQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQWtCO1FBQy9ELGtCQUFhLEdBQWIsYUFBYSxDQUFhO1FBQ1cseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFTO1FBbkMzRSxVQUFLLEdBQStCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDL0QsR0FBRzs7OztRQUFDLFVBQUEsSUFBSTtZQUNOLElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDckIsT0FBTyxRQUFRLENBQUM7Z0JBQ2hCLDJEQUEyRDthQUM1RDtpQkFBTSxJQUFJLElBQUksS0FBSyxVQUFVLElBQUksS0FBSSxDQUFDLG9CQUFvQixFQUFFO2dCQUMzRCxPQUFPLFVBQVUsQ0FBQzthQUNuQjtpQkFBTTtnQkFDTCxPQUFPLFlBQVksQ0FBQzthQUNyQjtRQUNILENBQUMs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bnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIG1lcmdlLCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBhdWRpdFRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIGZsYXRNYXAsIG1hcCwgbWFwVG8gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBNZW51U2VydmljZSB9IGZyb20gJy4vbWVudS5zZXJ2aWNlJztcbmltcG9ydCB7IE56SXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbiB9IGZyb20gJy4vbWVudS50b2tlbic7XG5pbXBvcnQgeyBOek1lbnVNb2RlVHlwZSB9IGZyb20gJy4vbWVudS50eXBlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOelN1Ym1lbnVTZXJ2aWNlIHtcbiAgbW9kZSQ6IE9ic2VydmFibGU8TnpNZW51TW9kZVR5cGU+ID0gdGhpcy5uek1lbnVTZXJ2aWNlLm1vZGUkLnBpcGUoXG4gICAgbWFwKG1vZGUgPT4ge1xuICAgICAgaWYgKG1vZGUgPT09ICdpbmxpbmUnKSB7XG4gICAgICAgIHJldHVybiAnaW5saW5lJztcbiAgICAgICAgLyoqIGlmIGluc2lkZSBhbm90aGVyIHN1Ym1lbnUsIHNldCB0aGUgbW9kZSB0byB2ZXJ0aWNhbCAqKi9cbiAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ3ZlcnRpY2FsJyB8fCB0aGlzLm56SG9zdFN1Ym1lbnVTZXJ2aWNlKSB7XG4gICAgICAgIHJldHVybiAndmVydGljYWwnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdob3Jpem9udGFsJztcbiAgICAgIH1cbiAgICB9KVxuICApO1xuICBsZXZlbCA9IDE7XG4gIGlzQ3VycmVudFN1Yk1lbnVPcGVuJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICBwcml2YXRlIGlzQ2hpbGRTdWJNZW51T3BlbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgLyoqIHN1Ym1lbnUgdGl0bGUgJiBvdmVybGF5IG1vdXNlIGVudGVyIHN0YXR1cyAqKi9cbiAgcHJpdmF0ZSBpc01vdXNlRW50ZXJUaXRsZU9yT3ZlcmxheSQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICBwcml2YXRlIGNoaWxkTWVudUl0ZW1DbGljayQgPSBuZXcgU3ViamVjdDxOelNhZmVBbnk+KCk7XG4gIC8qKlxuICAgKiBtZW51IGl0ZW0gaW5zaWRlIHN1Ym1lbnUgY2xpY2tlZFxuICAgKiBAcGFyYW0gbWVudVxuICAgKi9cbiAgb25DaGlsZE1lbnVJdGVtQ2xpY2sobWVudTogTnpTYWZlQW55KTogdm9pZCB7XG4gICAgdGhpcy5jaGlsZE1lbnVJdGVtQ2xpY2skLm5leHQobWVudSk7XG4gIH1cbiAgc2V0T3BlblN0YXRlV2l0aG91dERlYm91bmNlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pc0N1cnJlbnRTdWJNZW51T3BlbiQubmV4dCh2YWx1ZSk7XG4gIH1cbiAgc2V0TW91c2VFbnRlclRpdGxlT3JPdmVybGF5U3RhdGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmlzTW91c2VFbnRlclRpdGxlT3JPdmVybGF5JC5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBTa2lwU2VsZigpIEBPcHRpb25hbCgpIHByaXZhdGUgbnpIb3N0U3VibWVudVNlcnZpY2U6IE56U3VibWVudVNlcnZpY2UsXG4gICAgcHVibGljIG56TWVudVNlcnZpY2U6IE1lbnVTZXJ2aWNlLFxuICAgIEBJbmplY3QoTnpJc01lbnVJbnNpZGVEcm9wRG93blRva2VuKSBwdWJsaWMgaXNNZW51SW5zaWRlRHJvcERvd246IGJvb2xlYW5cbiAgKSB7XG4gICAgaWYgKHRoaXMubnpIb3N0U3VibWVudVNlcnZpY2UpIHtcbiAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLm56SG9zdFN1Ym1lbnVTZXJ2aWNlLmxldmVsICsgMTtcbiAgICB9XG4gICAgLyoqIGNsb3NlIGlmIG1lbnUgaXRlbSBjbGlja2VkICoqL1xuICAgIGNvbnN0IGlzQ2xvc2VkQnlNZW51SXRlbUNsaWNrID0gdGhpcy5jaGlsZE1lbnVJdGVtQ2xpY2skLnBpcGUoXG4gICAgICBmbGF0TWFwKCgpID0+IHRoaXMubW9kZSQpLFxuICAgICAgZmlsdGVyKG1vZGUgPT4gbW9kZSAhPT0gJ2lubGluZScgfHwgdGhpcy5pc01lbnVJbnNpZGVEcm9wRG93biksXG4gICAgICBtYXBUbyhmYWxzZSlcbiAgICApO1xuICAgIGNvbnN0IGlzQ3VycmVudFN1Ym1lbnVPcGVuJCA9IG1lcmdlKHRoaXMuaXNNb3VzZUVudGVyVGl0bGVPck92ZXJsYXkkLCBpc0Nsb3NlZEJ5TWVudUl0ZW1DbGljayk7XG4gICAgLyoqIGNvbWJpbmUgdGhlIGNoaWxkIHN1Ym1lbnUgc3RhdHVzIHdpdGggY3VycmVudCBzdWJtZW51IHN0YXR1cyB0byBjYWxjdWxhdGUgaG9zdCBzdWJtZW51IG9wZW4gKiovXG4gICAgY29uc3QgaXNTdWJNZW51T3BlbldpdGhEZWJvdW5jZSQgPSBjb21iaW5lTGF0ZXN0KFt0aGlzLmlzQ2hpbGRTdWJNZW51T3BlbiQsIGlzQ3VycmVudFN1Ym1lbnVPcGVuJF0pLnBpcGUoXG4gICAgICBtYXAoKFtpc0NoaWxkU3ViTWVudU9wZW4sIGlzQ3VycmVudFN1Ym1lbnVPcGVuXSkgPT4gaXNDaGlsZFN1Yk1lbnVPcGVuIHx8IGlzQ3VycmVudFN1Ym1lbnVPcGVuKSxcbiAgICAgIGF1ZGl0VGltZSgxNTApLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gICAgaXNTdWJNZW51T3BlbldpdGhEZWJvdW5jZSQucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLnNldE9wZW5TdGF0ZVdpdGhvdXREZWJvdW5jZShkYXRhKTtcbiAgICAgIGlmICh0aGlzLm56SG9zdFN1Ym1lbnVTZXJ2aWNlKSB7XG4gICAgICAgIC8qKiBzZXQgcGFyZW50IHN1Ym1lbnUncyBjaGlsZCBzdWJtZW51IG9wZW4gc3RhdHVzICoqL1xuICAgICAgICB0aGlzLm56SG9zdFN1Ym1lbnVTZXJ2aWNlLmlzQ2hpbGRTdWJNZW51T3BlbiQubmV4dChkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubnpNZW51U2VydmljZS5pc0NoaWxkU3ViTWVudU9wZW4kLm5leHQoZGF0YSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==