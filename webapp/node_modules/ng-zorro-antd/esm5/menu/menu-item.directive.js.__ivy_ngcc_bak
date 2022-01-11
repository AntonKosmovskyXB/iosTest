/**
 * @fileoverview added by tsickle
 * Generated from: menu-item.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __read } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ContentChildren, Directive, Inject, Input, Optional, QueryList } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkWithHref } from '@angular/router';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { combineLatest, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { MenuService } from './menu.service';
import { NzIsMenuInsideDropDownToken } from './menu.token';
import { NzSubmenuService } from './submenu.service';
var NzMenuItemDirective = /** @class */ (function () {
    function NzMenuItemDirective(nzMenuService, cdr, nzSubmenuService, isMenuInsideDropDown, routerLink, routerLinkWithHref, router) {
        var _this = this;
        this.nzMenuService = nzMenuService;
        this.cdr = cdr;
        this.nzSubmenuService = nzSubmenuService;
        this.isMenuInsideDropDown = isMenuInsideDropDown;
        this.routerLink = routerLink;
        this.routerLinkWithHref = routerLinkWithHref;
        this.router = router;
        this.destroy$ = new Subject();
        this.level = this.nzSubmenuService ? this.nzSubmenuService.level + 1 : 1;
        this.selected$ = new Subject();
        this.inlinePaddingLeft = null;
        this.nzDisabled = false;
        this.nzSelected = false;
        this.nzMatchRouterExact = false;
        this.nzMatchRouter = false;
        if (router) {
            (/** @type {?} */ (this.router)).events.pipe(takeUntil(this.destroy$), filter((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return e instanceof NavigationEnd; }))).subscribe((/**
             * @return {?}
             */
            function () {
                _this.updateRouterActive();
            }));
        }
    }
    /** clear all item selected status except this */
    /**
     * clear all item selected status except this
     * @param {?} e
     * @return {?}
     */
    NzMenuItemDirective.prototype.clickMenuItem = /**
     * clear all item selected status except this
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.nzDisabled) {
            e.preventDefault();
            e.stopPropagation();
        }
        else {
            this.nzMenuService.onDescendantMenuItemClick(this);
            if (this.nzSubmenuService) {
                /** menu item inside the submenu **/
                this.nzSubmenuService.onChildMenuItemClick(this);
            }
            else {
                /** menu item inside the root menu **/
                this.nzMenuService.onChildMenuItemClick(this);
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzMenuItemDirective.prototype.setSelectedState = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.nzSelected = value;
        this.selected$.next(value);
    };
    /**
     * @private
     * @return {?}
     */
    NzMenuItemDirective.prototype.updateRouterActive = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.listOfRouterLink || !this.listOfRouterLinkWithHref || !this.router || !this.router.navigated || !this.nzMatchRouter) {
            return;
        }
        Promise.resolve().then((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var hasActiveLinks = _this.hasActiveLinks();
            if (_this.nzSelected !== hasActiveLinks) {
                _this.nzSelected = hasActiveLinks;
                _this.setSelectedState(_this.nzSelected);
                _this.cdr.markForCheck();
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzMenuItemDirective.prototype.hasActiveLinks = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isActiveCheckFn = this.isLinkActive((/** @type {?} */ (this.router)));
        return ((this.routerLink && isActiveCheckFn(this.routerLink)) ||
            (this.routerLinkWithHref && isActiveCheckFn(this.routerLinkWithHref)) ||
            this.listOfRouterLink.some(isActiveCheckFn) ||
            this.listOfRouterLinkWithHref.some(isActiveCheckFn));
    };
    /**
     * @private
     * @param {?} router
     * @return {?}
     */
    NzMenuItemDirective.prototype.isLinkActive = /**
     * @private
     * @param {?} router
     * @return {?}
     */
    function (router) {
        var _this = this;
        return (/**
         * @param {?} link
         * @return {?}
         */
        function (link) { return router.isActive(link.urlTree, _this.nzMatchRouterExact); });
    };
    /**
     * @return {?}
     */
    NzMenuItemDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** store origin padding in padding */
        combineLatest([this.nzMenuService.mode$, this.nzMenuService.inlineIndent$])
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), mode = _b[0], inlineIndent = _b[1];
            _this.inlinePaddingLeft = mode === 'inline' ? _this.level * inlineIndent : null;
        }));
    };
    /**
     * @return {?}
     */
    NzMenuItemDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.listOfRouterLink.changes.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () { return _this.updateRouterActive(); }));
        this.listOfRouterLinkWithHref.changes.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () { return _this.updateRouterActive(); }));
        this.updateRouterActive();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzMenuItemDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzSelected) {
            this.setSelectedState(this.nzSelected);
        }
    };
    /**
     * @return {?}
     */
    NzMenuItemDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzMenuItemDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-menu-item]',
                    exportAs: 'nzMenuItem',
                    host: {
                        '[class.ant-dropdown-menu-item]': "isMenuInsideDropDown",
                        '[class.ant-dropdown-menu-item-selected]': "isMenuInsideDropDown && nzSelected",
                        '[class.ant-dropdown-menu-item-disabled]': "isMenuInsideDropDown && nzDisabled",
                        '[class.ant-menu-item]': "!isMenuInsideDropDown",
                        '[class.ant-menu-item-selected]': "!isMenuInsideDropDown && nzSelected",
                        '[class.ant-menu-item-disabled]': "!isMenuInsideDropDown && nzDisabled",
                        '[style.paddingLeft.px]': 'nzPaddingLeft || inlinePaddingLeft',
                        '(click)': 'clickMenuItem($event)'
                    }
                },] }
    ];
    /** @nocollapse */
    NzMenuItemDirective.ctorParameters = function () { return [
        { type: MenuService },
        { type: ChangeDetectorRef },
        { type: NzSubmenuService, decorators: [{ type: Optional }] },
        { type: Boolean, decorators: [{ type: Inject, args: [NzIsMenuInsideDropDownToken,] }] },
        { type: RouterLink, decorators: [{ type: Optional }] },
        { type: RouterLinkWithHref, decorators: [{ type: Optional }] },
        { type: Router, decorators: [{ type: Optional }] }
    ]; };
    NzMenuItemDirective.propDecorators = {
        nzPaddingLeft: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzSelected: [{ type: Input }],
        nzMatchRouterExact: [{ type: Input }],
        nzMatchRouter: [{ type: Input }],
        listOfRouterLink: [{ type: ContentChildren, args: [RouterLink, { descendants: true },] }],
        listOfRouterLinkWithHref: [{ type: ContentChildren, args: [RouterLinkWithHref, { descendants: true },] }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzMenuItemDirective.prototype, "nzDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzMenuItemDirective.prototype, "nzSelected", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzMenuItemDirective.prototype, "nzMatchRouterExact", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzMenuItemDirective.prototype, "nzMatchRouter", void 0);
    return NzMenuItemDirective;
}());
export { NzMenuItemDirective };
if (false) {
    /** @type {?} */
    NzMenuItemDirective.ngAcceptInputType_nzDisabled;
    /** @type {?} */
    NzMenuItemDirective.ngAcceptInputType_nzSelected;
    /** @type {?} */
    NzMenuItemDirective.ngAcceptInputType_nzMatchRouterExact;
    /** @type {?} */
    NzMenuItemDirective.ngAcceptInputType_nzMatchRouter;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.destroy$;
    /** @type {?} */
    NzMenuItemDirective.prototype.level;
    /** @type {?} */
    NzMenuItemDirective.prototype.selected$;
    /** @type {?} */
    NzMenuItemDirective.prototype.inlinePaddingLeft;
    /** @type {?} */
    NzMenuItemDirective.prototype.nzPaddingLeft;
    /** @type {?} */
    NzMenuItemDirective.prototype.nzDisabled;
    /** @type {?} */
    NzMenuItemDirective.prototype.nzSelected;
    /** @type {?} */
    NzMenuItemDirective.prototype.nzMatchRouterExact;
    /** @type {?} */
    NzMenuItemDirective.prototype.nzMatchRouter;
    /** @type {?} */
    NzMenuItemDirective.prototype.listOfRouterLink;
    /** @type {?} */
    NzMenuItemDirective.prototype.listOfRouterLinkWithHref;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.nzMenuService;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.nzSubmenuService;
    /** @type {?} */
    NzMenuItemDirective.prototype.isMenuInsideDropDown;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.routerLink;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.routerLinkWithHref;
    /**
     * @type {?}
     * @private
     */
    NzMenuItemDirective.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbWVudS8iLCJzb3VyY2VzIjpbIm1lbnUtaXRlbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBLE9BQU8sRUFFTCxpQkFBaUIsRUFDakIsZUFBZSxFQUNmLFNBQVMsRUFDVCxNQUFNLEVBQ04sS0FBSyxFQUlMLFFBQVEsRUFDUixTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFeEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVyRDtJQWtGRSw2QkFDVSxhQUEwQixFQUMxQixHQUFzQixFQUNWLGdCQUFrQyxFQUNWLG9CQUE2QixFQUNyRCxVQUF1QixFQUN2QixrQkFBdUMsRUFDdkMsTUFBZTtRQVByQyxpQkFpQkM7UUFoQlMsa0JBQWEsR0FBYixhQUFhLENBQWE7UUFDMUIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDVixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ1YseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFTO1FBQ3JELGVBQVUsR0FBVixVQUFVLENBQWE7UUFDdkIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFxQjtRQUN2QyxX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QUFrQix1QkFpR3pELFFBQVE7Z0JBakdXLE1BQU0sdUJBa0d6QixRQUFROzs7Z0NBakVWLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLO3FDQUNMLEtBQUs7Z0NBQ0wsS0FBSzttQ0FDTCxlQUFlLFNBQUMsVUFBVSxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTsyQ0FDakQsZUFBZSxTQUFDLGtCQUFrQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTs7SUFMakM7UUFBZixZQUFZLEVBQUU7OzJEQUFvQjtJQUNuQjtRQUFmLFlBQVksRUFBRTs7MkRBQW9CO0lBQ25CO1FBQWYsWUFBWSxFQUFFOzttRUFBNEI7SUFDM0I7UUFBZixZQUFZLEVBQUU7OzhEQUF1QjtJQWtHakQsMEJBQUM7Q0FBQSxBQTlIRCxJQThIQztTQWhIWSxtQkFBbUI7OztJQUM5QixpREFBa0Q7O0lBQ2xELGlEQUFrRDs7SUFDbEQseURBQTBEOztJQUMxRCxvREFBcUQ7Ozs7O0lBRXJELHVDQUFpQzs7SUFDakMsb0NBQW9FOztJQUNwRSx3Q0FBbUM7O0lBQ25DLGdEQUF3Qzs7SUFDeEMsNENBQWdDOztJQUNoQyx5Q0FBNEM7O0lBQzVDLHlDQUE0Qzs7SUFDNUMsaURBQW9EOztJQUNwRCw0Q0FBK0M7O0lBQy9DLCtDQUE2Rjs7SUFDN0YsdURBQXFIOzs7OztJQXFEbkgsNENBQWtDOzs7OztJQUNsQyxrQ0FBOEI7Ozs7O0lBQzlCLCtDQUFzRDs7SUFDdEQsbURBQXlFOzs7OztJQUN6RSx5Q0FBMkM7Ozs7O0lBQzNDLGlEQUEyRDs7Ozs7SUFDM0QscUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRGlyZWN0aXZlLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUXVlcnlMaXN0LFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyLCBSb3V0ZXJMaW5rLCBSb3V0ZXJMaW5rV2l0aEhyZWYgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTWVudVNlcnZpY2UgfSBmcm9tICcuL21lbnUuc2VydmljZSc7XG5pbXBvcnQgeyBOeklzTWVudUluc2lkZURyb3BEb3duVG9rZW4gfSBmcm9tICcuL21lbnUudG9rZW4nO1xuaW1wb3J0IHsgTnpTdWJtZW51U2VydmljZSB9IGZyb20gJy4vc3VibWVudS5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LW1lbnUtaXRlbV0nLFxuICBleHBvcnRBczogJ256TWVudUl0ZW0nLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1pdGVtXSc6IGBpc01lbnVJbnNpZGVEcm9wRG93bmAsXG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1pdGVtLXNlbGVjdGVkXSc6IGBpc01lbnVJbnNpZGVEcm9wRG93biAmJiBuelNlbGVjdGVkYCxcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LWl0ZW0tZGlzYWJsZWRdJzogYGlzTWVudUluc2lkZURyb3BEb3duICYmIG56RGlzYWJsZWRgLFxuICAgICdbY2xhc3MuYW50LW1lbnUtaXRlbV0nOiBgIWlzTWVudUluc2lkZURyb3BEb3duYCxcbiAgICAnW2NsYXNzLmFudC1tZW51LWl0ZW0tc2VsZWN0ZWRdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93biAmJiBuelNlbGVjdGVkYCxcbiAgICAnW2NsYXNzLmFudC1tZW51LWl0ZW0tZGlzYWJsZWRdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93biAmJiBuekRpc2FibGVkYCxcbiAgICAnW3N0eWxlLnBhZGRpbmdMZWZ0LnB4XSc6ICduelBhZGRpbmdMZWZ0IHx8IGlubGluZVBhZGRpbmdMZWZ0JyxcbiAgICAnKGNsaWNrKSc6ICdjbGlja01lbnVJdGVtKCRldmVudCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpNZW51SXRlbURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpEaXNhYmxlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTZWxlY3RlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpNYXRjaFJvdXRlckV4YWN0OiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uek1hdGNoUm91dGVyOiBCb29sZWFuSW5wdXQ7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIGxldmVsID0gdGhpcy5uelN1Ym1lbnVTZXJ2aWNlID8gdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLmxldmVsICsgMSA6IDE7XG4gIHNlbGVjdGVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIGlubGluZVBhZGRpbmdMZWZ0OiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpQYWRkaW5nTGVmdD86IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2VsZWN0ZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TWF0Y2hSb3V0ZXJFeGFjdCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpNYXRjaFJvdXRlciA9IGZhbHNlO1xuICBAQ29udGVudENoaWxkcmVuKFJvdXRlckxpbmssIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgbGlzdE9mUm91dGVyTGluayE6IFF1ZXJ5TGlzdDxSb3V0ZXJMaW5rPjtcbiAgQENvbnRlbnRDaGlsZHJlbihSb3V0ZXJMaW5rV2l0aEhyZWYsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgbGlzdE9mUm91dGVyTGlua1dpdGhIcmVmITogUXVlcnlMaXN0PFJvdXRlckxpbmtXaXRoSHJlZj47XG5cbiAgLyoqIGNsZWFyIGFsbCBpdGVtIHNlbGVjdGVkIHN0YXR1cyBleGNlcHQgdGhpcyAqL1xuICBjbGlja01lbnVJdGVtKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekRpc2FibGVkKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm56TWVudVNlcnZpY2Uub25EZXNjZW5kYW50TWVudUl0ZW1DbGljayh0aGlzKTtcbiAgICAgIGlmICh0aGlzLm56U3VibWVudVNlcnZpY2UpIHtcbiAgICAgICAgLyoqIG1lbnUgaXRlbSBpbnNpZGUgdGhlIHN1Ym1lbnUgKiovXG4gICAgICAgIHRoaXMubnpTdWJtZW51U2VydmljZS5vbkNoaWxkTWVudUl0ZW1DbGljayh0aGlzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKiBtZW51IGl0ZW0gaW5zaWRlIHRoZSByb290IG1lbnUgKiovXG4gICAgICAgIHRoaXMubnpNZW51U2VydmljZS5vbkNoaWxkTWVudUl0ZW1DbGljayh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRTZWxlY3RlZFN0YXRlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uelNlbGVjdGVkID0gdmFsdWU7XG4gICAgdGhpcy5zZWxlY3RlZCQubmV4dCh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVJvdXRlckFjdGl2ZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubGlzdE9mUm91dGVyTGluayB8fCAhdGhpcy5saXN0T2ZSb3V0ZXJMaW5rV2l0aEhyZWYgfHwgIXRoaXMucm91dGVyIHx8ICF0aGlzLnJvdXRlci5uYXZpZ2F0ZWQgfHwgIXRoaXMubnpNYXRjaFJvdXRlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGhhc0FjdGl2ZUxpbmtzID0gdGhpcy5oYXNBY3RpdmVMaW5rcygpO1xuICAgICAgaWYgKHRoaXMubnpTZWxlY3RlZCAhPT0gaGFzQWN0aXZlTGlua3MpIHtcbiAgICAgICAgdGhpcy5uelNlbGVjdGVkID0gaGFzQWN0aXZlTGlua3M7XG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRTdGF0ZSh0aGlzLm56U2VsZWN0ZWQpO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaGFzQWN0aXZlTGlua3MoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNBY3RpdmVDaGVja0ZuID0gdGhpcy5pc0xpbmtBY3RpdmUodGhpcy5yb3V0ZXIhKTtcbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMucm91dGVyTGluayAmJiBpc0FjdGl2ZUNoZWNrRm4odGhpcy5yb3V0ZXJMaW5rKSkgfHxcbiAgICAgICh0aGlzLnJvdXRlckxpbmtXaXRoSHJlZiAmJiBpc0FjdGl2ZUNoZWNrRm4odGhpcy5yb3V0ZXJMaW5rV2l0aEhyZWYpKSB8fFxuICAgICAgdGhpcy5saXN0T2ZSb3V0ZXJMaW5rLnNvbWUoaXNBY3RpdmVDaGVja0ZuKSB8fFxuICAgICAgdGhpcy5saXN0T2ZSb3V0ZXJMaW5rV2l0aEhyZWYuc29tZShpc0FjdGl2ZUNoZWNrRm4pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNMaW5rQWN0aXZlKHJvdXRlcjogUm91dGVyKTogKGxpbms6IFJvdXRlckxpbmsgfCBSb3V0ZXJMaW5rV2l0aEhyZWYpID0+IGJvb2xlYW4ge1xuICAgIHJldHVybiAobGluazogUm91dGVyTGluayB8IFJvdXRlckxpbmtXaXRoSHJlZikgPT4gcm91dGVyLmlzQWN0aXZlKGxpbmsudXJsVHJlZSwgdGhpcy5uek1hdGNoUm91dGVyRXhhY3QpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBuek1lbnVTZXJ2aWNlOiBNZW51U2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuelN1Ym1lbnVTZXJ2aWNlOiBOelN1Ym1lbnVTZXJ2aWNlLFxuICAgIEBJbmplY3QoTnpJc01lbnVJbnNpZGVEcm9wRG93blRva2VuKSBwdWJsaWMgaXNNZW51SW5zaWRlRHJvcERvd246IGJvb2xlYW4sXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSByb3V0ZXJMaW5rPzogUm91dGVyTGluayxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHJvdXRlckxpbmtXaXRoSHJlZj86IFJvdXRlckxpbmtXaXRoSHJlZixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHJvdXRlcj86IFJvdXRlclxuICApIHtcbiAgICBpZiAocm91dGVyKSB7XG4gICAgICB0aGlzLnJvdXRlciEuZXZlbnRzLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpXG4gICAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlUm91dGVyQWN0aXZlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvKiogc3RvcmUgb3JpZ2luIHBhZGRpbmcgaW4gcGFkZGluZyAqL1xuICAgIGNvbWJpbmVMYXRlc3QoW3RoaXMubnpNZW51U2VydmljZS5tb2RlJCwgdGhpcy5uek1lbnVTZXJ2aWNlLmlubGluZUluZGVudCRdKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoW21vZGUsIGlubGluZUluZGVudF0pID0+IHtcbiAgICAgICAgdGhpcy5pbmxpbmVQYWRkaW5nTGVmdCA9IG1vZGUgPT09ICdpbmxpbmUnID8gdGhpcy5sZXZlbCAqIGlubGluZUluZGVudCA6IG51bGw7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RPZlJvdXRlckxpbmsuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlUm91dGVyQWN0aXZlKCkpO1xuICAgIHRoaXMubGlzdE9mUm91dGVyTGlua1dpdGhIcmVmLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZVJvdXRlckFjdGl2ZSgpKTtcbiAgICB0aGlzLnVwZGF0ZVJvdXRlckFjdGl2ZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56U2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuc2V0U2VsZWN0ZWRTdGF0ZSh0aGlzLm56U2VsZWN0ZWQpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19