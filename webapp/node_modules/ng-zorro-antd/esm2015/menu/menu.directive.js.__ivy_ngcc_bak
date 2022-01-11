/**
 * @fileoverview added by tsickle
 * Generated from: menu.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ContentChildren, Directive, EventEmitter, Inject, Input, Optional, Output, QueryList, SkipSelf } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzMenuItemDirective } from './menu-item.directive';
import { MenuService } from './menu.service';
import { NzIsMenuInsideDropDownToken, NzMenuServiceLocalToken } from './menu.token';
import { NzSubMenuComponent } from './submenu.component';
/**
 * @param {?} serviceInsideDropDown
 * @param {?} serviceOutsideDropDown
 * @return {?}
 */
export function MenuServiceFactory(serviceInsideDropDown, serviceOutsideDropDown) {
    return serviceInsideDropDown ? serviceInsideDropDown : serviceOutsideDropDown;
}
/**
 * @param {?} isMenuInsideDropDownToken
 * @return {?}
 */
export function MenuDropDownTokenFactory(isMenuInsideDropDownToken) {
    return isMenuInsideDropDownToken ? isMenuInsideDropDownToken : false;
}
export class NzMenuDirective {
    /**
     * @param {?} nzMenuService
     * @param {?} isMenuInsideDropDown
     * @param {?} cdr
     */
    constructor(nzMenuService, isMenuInsideDropDown, cdr) {
        this.nzMenuService = nzMenuService;
        this.isMenuInsideDropDown = isMenuInsideDropDown;
        this.cdr = cdr;
        this.nzInlineIndent = 24;
        this.nzTheme = 'light';
        this.nzMode = 'vertical';
        this.nzInlineCollapsed = false;
        this.nzSelectable = !this.isMenuInsideDropDown;
        this.nzClick = new EventEmitter();
        this.actualMode = 'vertical';
        this.inlineCollapsed$ = new BehaviorSubject(this.nzInlineCollapsed);
        this.mode$ = new BehaviorSubject(this.nzMode);
        this.destroy$ = new Subject();
        this.listOfOpenedNzSubMenuComponent = [];
    }
    /**
     * @param {?} inlineCollapsed
     * @return {?}
     */
    setInlineCollapsed(inlineCollapsed) {
        this.nzInlineCollapsed = inlineCollapsed;
        this.inlineCollapsed$.next(inlineCollapsed);
    }
    /**
     * @return {?}
     */
    updateInlineCollapse() {
        if (this.listOfNzMenuItemDirective) {
            if (this.nzInlineCollapsed) {
                this.listOfOpenedNzSubMenuComponent = this.listOfNzSubMenuComponent.filter((/**
                 * @param {?} submenu
                 * @return {?}
                 */
                submenu => submenu.nzOpen));
                this.listOfNzSubMenuComponent.forEach((/**
                 * @param {?} submenu
                 * @return {?}
                 */
                submenu => submenu.setOpenStateWithoutDebounce(false)));
            }
            else {
                this.listOfOpenedNzSubMenuComponent.forEach((/**
                 * @param {?} submenu
                 * @return {?}
                 */
                submenu => submenu.setOpenStateWithoutDebounce(true)));
                this.listOfOpenedNzSubMenuComponent = [];
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        combineLatest([this.inlineCollapsed$, this.mode$])
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ([inlineCollapsed, mode]) => {
            this.actualMode = inlineCollapsed ? 'vertical' : mode;
            this.nzMenuService.setMode(this.actualMode);
            this.cdr.markForCheck();
        }));
        this.nzMenuService.descendantMenuItemClick$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} menu
         * @return {?}
         */
        menu => {
            this.nzClick.emit(menu);
            if (this.nzSelectable && !menu.nzMatchRouter) {
                this.listOfNzMenuItemDirective.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => item.setSelectedState(item === menu)));
            }
        }));
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.inlineCollapsed$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.updateInlineCollapse();
            this.cdr.markForCheck();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzInlineCollapsed, nzInlineIndent, nzTheme, nzMode } = changes;
        if (nzInlineCollapsed) {
            this.inlineCollapsed$.next(this.nzInlineCollapsed);
        }
        if (nzInlineIndent) {
            this.nzMenuService.setInlineIndent(this.nzInlineIndent);
        }
        if (nzTheme) {
            this.nzMenuService.setTheme(this.nzTheme);
        }
        if (nzMode) {
            this.mode$.next(this.nzMode);
            if (!changes.nzMode.isFirstChange() && this.listOfNzSubMenuComponent) {
                this.listOfNzSubMenuComponent.forEach((/**
                 * @param {?} submenu
                 * @return {?}
                 */
                submenu => submenu.setOpenStateWithoutDebounce(false)));
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzMenuDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-menu]',
                exportAs: 'nzMenu',
                providers: [
                    {
                        provide: NzMenuServiceLocalToken,
                        useClass: MenuService
                    },
                    /** use the top level service **/
                    {
                        provide: MenuService,
                        useFactory: MenuServiceFactory,
                        deps: [[new SkipSelf(), new Optional(), MenuService], NzMenuServiceLocalToken]
                    },
                    /** check if menu inside dropdown-menu component **/
                    {
                        provide: NzIsMenuInsideDropDownToken,
                        useFactory: MenuDropDownTokenFactory,
                        deps: [[new SkipSelf(), new Optional(), NzIsMenuInsideDropDownToken]]
                    }
                ],
                host: {
                    '[class.ant-dropdown-menu]': `isMenuInsideDropDown`,
                    '[class.ant-dropdown-menu-root]': `isMenuInsideDropDown`,
                    '[class.ant-dropdown-menu-light]': `isMenuInsideDropDown && nzTheme === 'light'`,
                    '[class.ant-dropdown-menu-dark]': `isMenuInsideDropDown && nzTheme === 'dark'`,
                    '[class.ant-dropdown-menu-vertical]': `isMenuInsideDropDown && actualMode === 'vertical'`,
                    '[class.ant-dropdown-menu-horizontal]': `isMenuInsideDropDown && actualMode === 'horizontal'`,
                    '[class.ant-dropdown-menu-inline]': `isMenuInsideDropDown && actualMode === 'inline'`,
                    '[class.ant-dropdown-menu-inline-collapsed]': `isMenuInsideDropDown && nzInlineCollapsed`,
                    '[class.ant-menu]': `!isMenuInsideDropDown`,
                    '[class.ant-menu-root]': `!isMenuInsideDropDown`,
                    '[class.ant-menu-light]': `!isMenuInsideDropDown && nzTheme === 'light'`,
                    '[class.ant-menu-dark]': `!isMenuInsideDropDown && nzTheme === 'dark'`,
                    '[class.ant-menu-vertical]': `!isMenuInsideDropDown && actualMode === 'vertical'`,
                    '[class.ant-menu-horizontal]': `!isMenuInsideDropDown && actualMode === 'horizontal'`,
                    '[class.ant-menu-inline]': `!isMenuInsideDropDown && actualMode === 'inline'`,
                    '[class.ant-menu-inline-collapsed]': `!isMenuInsideDropDown && nzInlineCollapsed`
                }
            },] }
];
/** @nocollapse */
NzMenuDirective.ctorParameters = () => [
    { type: MenuService },
    { type: Boolean, decorators: [{ type: Inject, args: [NzIsMenuInsideDropDownToken,] }] },
    { type: ChangeDetectorRef }
];
NzMenuDirective.propDecorators = {
    listOfNzMenuItemDirective: [{ type: ContentChildren, args: [NzMenuItemDirective, { descendants: true },] }],
    listOfNzSubMenuComponent: [{ type: ContentChildren, args: [NzSubMenuComponent, { descendants: true },] }],
    nzInlineIndent: [{ type: Input }],
    nzTheme: [{ type: Input }],
    nzMode: [{ type: Input }],
    nzInlineCollapsed: [{ type: Input }],
    nzSelectable: [{ type: Input }],
    nzClick: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzMenuDirective.prototype, "nzInlineCollapsed", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzMenuDirective.prototype, "nzSelectable", void 0);
if (false) {
    /** @type {?} */
    NzMenuDirective.ngAcceptInputType_nzInlineCollapsed;
    /** @type {?} */
    NzMenuDirective.ngAcceptInputType_nzSelectable;
    /** @type {?} */
    NzMenuDirective.prototype.listOfNzMenuItemDirective;
    /** @type {?} */
    NzMenuDirective.prototype.listOfNzSubMenuComponent;
    /** @type {?} */
    NzMenuDirective.prototype.nzInlineIndent;
    /** @type {?} */
    NzMenuDirective.prototype.nzTheme;
    /** @type {?} */
    NzMenuDirective.prototype.nzMode;
    /** @type {?} */
    NzMenuDirective.prototype.nzInlineCollapsed;
    /** @type {?} */
    NzMenuDirective.prototype.nzSelectable;
    /** @type {?} */
    NzMenuDirective.prototype.nzClick;
    /** @type {?} */
    NzMenuDirective.prototype.actualMode;
    /**
     * @type {?}
     * @private
     */
    NzMenuDirective.prototype.inlineCollapsed$;
    /**
     * @type {?}
     * @private
     */
    NzMenuDirective.prototype.mode$;
    /**
     * @type {?}
     * @private
     */
    NzMenuDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzMenuDirective.prototype.listOfOpenedNzSubMenuComponent;
    /**
     * @type {?}
     * @private
     */
    NzMenuDirective.prototype.nzMenuService;
    /** @type {?} */
    NzMenuDirective.prototype.isMenuInsideDropDown;
    /**
     * @type {?}
     * @private
     */
    NzMenuDirective.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lbnUvIiwic291cmNlcyI6WyJtZW51LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixlQUFlLEVBQ2YsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUVULFFBQVEsRUFDVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLDJCQUEyQixFQUFFLHVCQUF1QixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXBGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7QUFFekQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLHFCQUFrQyxFQUFFLHNCQUFtQztJQUN4RyxPQUFPLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUM7QUFDaEYsQ0FBQzs7Ozs7QUFDRCxNQUFNLFVBQVUsd0JBQXdCLENBQUMseUJBQWtDO0lBQ3pFLE9BQU8seUJBQXlCLENBQUMsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDdkUsQ0FBQztBQTBDRCxNQUFNLE9BQU8sZUFBZTs7Ozs7O0lBbUMxQixZQUNVLGFBQTBC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QUFFLDhDQUE4QztvQkFDeEUsdUJBQXVCLEVBQUUsNkNBQTZDO29CQUN0RSwyQkFBMkIsRUFBRSxvREFBb0Q7b0JBQ2pGLDZCQUE2QixFQUFFLHNEQUFzRDtvQkFDckYseUJBQXlCLEVBQUUsa0RBQWtEO29CQUM3RSxtQ0FBbUMsRUFBRSw0Q0FBNEM7aUJBQ2xGO2FBQ0Y7Ozs7WUFuRFEsV0FBVzswQ0F5RmYsTUFBTSxTQUFDLDJCQUEyQjtZQTdHckMsaUJBQWlCOzs7d0NBNEVoQixlQUFlLFNBQUMsbUJBQW1CLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO3VDQUMxRCxlQUFlLFNBQUMsa0JBQWtCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFOzZCQUN6RCxLQUFLO3NCQUNMLEtBQUs7cUJBQ0wsS0FBSztnQ0FDTCxLQUFLOzJCQUNMLEtBQUs7c0JBQ0wsTUFBTTs7QUFGa0I7SUFBZixZQUFZLEVBQUU7OzBEQUEyQjtBQUMxQjtJQUFmLFlBQVksRUFBRTs7cURBQTJDOzs7SUFUbkUsb0RBQXlEOztJQUN6RCwrQ0FBb0Q7O0lBRXBELG9EQUF3SDs7SUFDeEgsbURBQXFIOztJQUNySCx5Q0FBNkI7O0lBQzdCLGtDQUE0Qzs7SUFDNUMsaUNBQTZDOztJQUM3Qyw0Q0FBbUQ7O0lBQ25ELHVDQUFtRTs7SUFDbkUsa0NBQXFFOztJQUNyRSxxQ0FBd0M7Ozs7O0lBQ3hDLDJDQUFnRjs7Ozs7SUFDaEYsZ0NBQWlFOzs7OztJQUNqRSxtQ0FBaUM7Ozs7O0lBQ2pDLHlEQUFrRTs7Ozs7SUFvQmhFLHdDQUFrQzs7SUFDbEMsK0NBQXlFOzs7OztJQUN6RSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29udGVudENoaWxkcmVuLFxuICBEaXJlY3RpdmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBTa2lwU2VsZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE56TWVudUl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL21lbnUtaXRlbS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWVudVNlcnZpY2UgfSBmcm9tICcuL21lbnUuc2VydmljZSc7XG5pbXBvcnQgeyBOeklzTWVudUluc2lkZURyb3BEb3duVG9rZW4sIE56TWVudVNlcnZpY2VMb2NhbFRva2VuIH0gZnJvbSAnLi9tZW51LnRva2VuJztcbmltcG9ydCB7IE56TWVudU1vZGVUeXBlLCBOek1lbnVUaGVtZVR5cGUgfSBmcm9tICcuL21lbnUudHlwZXMnO1xuaW1wb3J0IHsgTnpTdWJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9zdWJtZW51LmNvbXBvbmVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBNZW51U2VydmljZUZhY3Rvcnkoc2VydmljZUluc2lkZURyb3BEb3duOiBNZW51U2VydmljZSwgc2VydmljZU91dHNpZGVEcm9wRG93bjogTWVudVNlcnZpY2UpOiBNZW51U2VydmljZSB7XG4gIHJldHVybiBzZXJ2aWNlSW5zaWRlRHJvcERvd24gPyBzZXJ2aWNlSW5zaWRlRHJvcERvd24gOiBzZXJ2aWNlT3V0c2lkZURyb3BEb3duO1xufVxuZXhwb3J0IGZ1bmN0aW9uIE1lbnVEcm9wRG93blRva2VuRmFjdG9yeShpc01lbnVJbnNpZGVEcm9wRG93blRva2VuOiBib29sZWFuKTogYm9vbGVhbiB7XG4gIHJldHVybiBpc01lbnVJbnNpZGVEcm9wRG93blRva2VuID8gaXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbiA6IGZhbHNlO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnotbWVudV0nLFxuICBleHBvcnRBczogJ256TWVudScsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE56TWVudVNlcnZpY2VMb2NhbFRva2VuLFxuICAgICAgdXNlQ2xhc3M6IE1lbnVTZXJ2aWNlXG4gICAgfSxcbiAgICAvKiogdXNlIHRoZSB0b3AgbGV2ZWwgc2VydmljZSAqKi9cbiAgICB7XG4gICAgICBwcm92aWRlOiBNZW51U2VydmljZSxcbiAgICAgIHVzZUZhY3Rvcnk6IE1lbnVTZXJ2aWNlRmFjdG9yeSxcbiAgICAgIGRlcHM6IFtbbmV3IFNraXBTZWxmKCksIG5ldyBPcHRpb25hbCgpLCBNZW51U2VydmljZV0sIE56TWVudVNlcnZpY2VMb2NhbFRva2VuXVxuICAgIH0sXG4gICAgLyoqIGNoZWNrIGlmIG1lbnUgaW5zaWRlIGRyb3Bkb3duLW1lbnUgY29tcG9uZW50ICoqL1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE56SXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbixcbiAgICAgIHVzZUZhY3Rvcnk6IE1lbnVEcm9wRG93blRva2VuRmFjdG9yeSxcbiAgICAgIGRlcHM6IFtbbmV3IFNraXBTZWxmKCksIG5ldyBPcHRpb25hbCgpLCBOeklzTWVudUluc2lkZURyb3BEb3duVG9rZW5dXVxuICAgIH1cbiAgXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LWRyb3Bkb3duLW1lbnVdJzogYGlzTWVudUluc2lkZURyb3BEb3duYCxcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LXJvb3RdJzogYGlzTWVudUluc2lkZURyb3BEb3duYCxcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LWxpZ2h0XSc6IGBpc01lbnVJbnNpZGVEcm9wRG93biAmJiBuelRoZW1lID09PSAnbGlnaHQnYCxcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LWRhcmtdJzogYGlzTWVudUluc2lkZURyb3BEb3duICYmIG56VGhlbWUgPT09ICdkYXJrJ2AsXG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tbWVudS12ZXJ0aWNhbF0nOiBgaXNNZW51SW5zaWRlRHJvcERvd24gJiYgYWN0dWFsTW9kZSA9PT0gJ3ZlcnRpY2FsJ2AsXG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1ob3Jpem9udGFsXSc6IGBpc01lbnVJbnNpZGVEcm9wRG93biAmJiBhY3R1YWxNb2RlID09PSAnaG9yaXpvbnRhbCdgLFxuICAgICdbY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtaW5saW5lXSc6IGBpc01lbnVJbnNpZGVEcm9wRG93biAmJiBhY3R1YWxNb2RlID09PSAnaW5saW5lJ2AsXG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1pbmxpbmUtY29sbGFwc2VkXSc6IGBpc01lbnVJbnNpZGVEcm9wRG93biAmJiBueklubGluZUNvbGxhcHNlZGAsXG4gICAgJ1tjbGFzcy5hbnQtbWVudV0nOiBgIWlzTWVudUluc2lkZURyb3BEb3duYCxcbiAgICAnW2NsYXNzLmFudC1tZW51LXJvb3RdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93bmAsXG4gICAgJ1tjbGFzcy5hbnQtbWVudS1saWdodF0nOiBgIWlzTWVudUluc2lkZURyb3BEb3duICYmIG56VGhlbWUgPT09ICdsaWdodCdgLFxuICAgICdbY2xhc3MuYW50LW1lbnUtZGFya10nOiBgIWlzTWVudUluc2lkZURyb3BEb3duICYmIG56VGhlbWUgPT09ICdkYXJrJ2AsXG4gICAgJ1tjbGFzcy5hbnQtbWVudS12ZXJ0aWNhbF0nOiBgIWlzTWVudUluc2lkZURyb3BEb3duICYmIGFjdHVhbE1vZGUgPT09ICd2ZXJ0aWNhbCdgLFxuICAgICdbY2xhc3MuYW50LW1lbnUtaG9yaXpvbnRhbF0nOiBgIWlzTWVudUluc2lkZURyb3BEb3duICYmIGFjdHVhbE1vZGUgPT09ICdob3Jpem9udGFsJ2AsXG4gICAgJ1tjbGFzcy5hbnQtbWVudS1pbmxpbmVdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93biAmJiBhY3R1YWxNb2RlID09PSAnaW5saW5lJ2AsXG4gICAgJ1tjbGFzcy5hbnQtbWVudS1pbmxpbmUtY29sbGFwc2VkXSc6IGAhaXNNZW51SW5zaWRlRHJvcERvd24gJiYgbnpJbmxpbmVDb2xsYXBzZWRgXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpNZW51RGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9ueklubGluZUNvbGxhcHNlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTZWxlY3RhYmxlOiBCb29sZWFuSW5wdXQ7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihOek1lbnVJdGVtRGlyZWN0aXZlLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGxpc3RPZk56TWVudUl0ZW1EaXJlY3RpdmUhOiBRdWVyeUxpc3Q8TnpNZW51SXRlbURpcmVjdGl2ZT47XG4gIEBDb250ZW50Q2hpbGRyZW4oTnpTdWJNZW51Q29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGxpc3RPZk56U3ViTWVudUNvbXBvbmVudCE6IFF1ZXJ5TGlzdDxOelN1Yk1lbnVDb21wb25lbnQ+O1xuICBASW5wdXQoKSBueklubGluZUluZGVudCA9IDI0O1xuICBASW5wdXQoKSBuelRoZW1lOiBOek1lbnVUaGVtZVR5cGUgPSAnbGlnaHQnO1xuICBASW5wdXQoKSBuek1vZGU6IE56TWVudU1vZGVUeXBlID0gJ3ZlcnRpY2FsJztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56SW5saW5lQ29sbGFwc2VkID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNlbGVjdGFibGUgPSAhdGhpcy5pc01lbnVJbnNpZGVEcm9wRG93bjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE56TWVudUl0ZW1EaXJlY3RpdmU+KCk7XG4gIGFjdHVhbE1vZGU6IE56TWVudU1vZGVUeXBlID0gJ3ZlcnRpY2FsJztcbiAgcHJpdmF0ZSBpbmxpbmVDb2xsYXBzZWQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPih0aGlzLm56SW5saW5lQ29sbGFwc2VkKTtcbiAgcHJpdmF0ZSBtb2RlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TnpNZW51TW9kZVR5cGU+KHRoaXMubnpNb2RlKTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgbGlzdE9mT3BlbmVkTnpTdWJNZW51Q29tcG9uZW50OiBOelN1Yk1lbnVDb21wb25lbnRbXSA9IFtdO1xuXG4gIHNldElubGluZUNvbGxhcHNlZChpbmxpbmVDb2xsYXBzZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm56SW5saW5lQ29sbGFwc2VkID0gaW5saW5lQ29sbGFwc2VkO1xuICAgIHRoaXMuaW5saW5lQ29sbGFwc2VkJC5uZXh0KGlubGluZUNvbGxhcHNlZCk7XG4gIH1cblxuICB1cGRhdGVJbmxpbmVDb2xsYXBzZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5saXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlKSB7XG4gICAgICBpZiAodGhpcy5ueklubGluZUNvbGxhcHNlZCkge1xuICAgICAgICB0aGlzLmxpc3RPZk9wZW5lZE56U3ViTWVudUNvbXBvbmVudCA9IHRoaXMubGlzdE9mTnpTdWJNZW51Q29tcG9uZW50LmZpbHRlcihzdWJtZW51ID0+IHN1Ym1lbnUubnpPcGVuKTtcbiAgICAgICAgdGhpcy5saXN0T2ZOelN1Yk1lbnVDb21wb25lbnQuZm9yRWFjaChzdWJtZW51ID0+IHN1Ym1lbnUuc2V0T3BlblN0YXRlV2l0aG91dERlYm91bmNlKGZhbHNlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxpc3RPZk9wZW5lZE56U3ViTWVudUNvbXBvbmVudC5mb3JFYWNoKHN1Ym1lbnUgPT4gc3VibWVudS5zZXRPcGVuU3RhdGVXaXRob3V0RGVib3VuY2UodHJ1ZSkpO1xuICAgICAgICB0aGlzLmxpc3RPZk9wZW5lZE56U3ViTWVudUNvbXBvbmVudCA9IFtdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbnpNZW51U2VydmljZTogTWVudVNlcnZpY2UsXG4gICAgQEluamVjdChOeklzTWVudUluc2lkZURyb3BEb3duVG9rZW4pIHB1YmxpYyBpc01lbnVJbnNpZGVEcm9wRG93bjogYm9vbGVhbixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbWJpbmVMYXRlc3QoW3RoaXMuaW5saW5lQ29sbGFwc2VkJCwgdGhpcy5tb2RlJF0pXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKChbaW5saW5lQ29sbGFwc2VkLCBtb2RlXSkgPT4ge1xuICAgICAgICB0aGlzLmFjdHVhbE1vZGUgPSBpbmxpbmVDb2xsYXBzZWQgPyAndmVydGljYWwnIDogbW9kZTtcbiAgICAgICAgdGhpcy5uek1lbnVTZXJ2aWNlLnNldE1vZGUodGhpcy5hY3R1YWxNb2RlKTtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB0aGlzLm56TWVudVNlcnZpY2UuZGVzY2VuZGFudE1lbnVJdGVtQ2xpY2skLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUobWVudSA9PiB7XG4gICAgICB0aGlzLm56Q2xpY2suZW1pdChtZW51KTtcbiAgICAgIGlmICh0aGlzLm56U2VsZWN0YWJsZSAmJiAhbWVudS5uek1hdGNoUm91dGVyKSB7XG4gICAgICAgIHRoaXMubGlzdE9mTnpNZW51SXRlbURpcmVjdGl2ZS5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5zZXRTZWxlY3RlZFN0YXRlKGl0ZW0gPT09IG1lbnUpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlubGluZUNvbGxhcHNlZCQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUlubGluZUNvbGxhcHNlKCk7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG56SW5saW5lQ29sbGFwc2VkLCBueklubGluZUluZGVudCwgbnpUaGVtZSwgbnpNb2RlIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChueklubGluZUNvbGxhcHNlZCkge1xuICAgICAgdGhpcy5pbmxpbmVDb2xsYXBzZWQkLm5leHQodGhpcy5ueklubGluZUNvbGxhcHNlZCk7XG4gICAgfVxuICAgIGlmIChueklubGluZUluZGVudCkge1xuICAgICAgdGhpcy5uek1lbnVTZXJ2aWNlLnNldElubGluZUluZGVudCh0aGlzLm56SW5saW5lSW5kZW50KTtcbiAgICB9XG4gICAgaWYgKG56VGhlbWUpIHtcbiAgICAgIHRoaXMubnpNZW51U2VydmljZS5zZXRUaGVtZSh0aGlzLm56VGhlbWUpO1xuICAgIH1cbiAgICBpZiAobnpNb2RlKSB7XG4gICAgICB0aGlzLm1vZGUkLm5leHQodGhpcy5uek1vZGUpO1xuICAgICAgaWYgKCFjaGFuZ2VzLm56TW9kZS5pc0ZpcnN0Q2hhbmdlKCkgJiYgdGhpcy5saXN0T2ZOelN1Yk1lbnVDb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5saXN0T2ZOelN1Yk1lbnVDb21wb25lbnQuZm9yRWFjaChzdWJtZW51ID0+IHN1Ym1lbnUuc2V0T3BlblN0YXRlV2l0aG91dERlYm91bmNlKGZhbHNlKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=