/**
 * @fileoverview added by tsickle
 * Generated from: menu-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input, Optional, Renderer2, SkipSelf, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzIsMenuInsideDropDownToken } from './menu.token';
/**
 * @param {?} isMenuInsideDropDownToken
 * @return {?}
 */
export function MenuGroupFactory(isMenuInsideDropDownToken) {
    return isMenuInsideDropDownToken ? isMenuInsideDropDownToken : false;
}
var NzMenuGroupComponent = /** @class */ (function () {
    function NzMenuGroupComponent(elementRef, renderer, isMenuInsideDropDown) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.isMenuInsideDropDown = isMenuInsideDropDown;
        /** @type {?} */
        var className = this.isMenuInsideDropDown ? 'ant-dropdown-menu-item-group' : 'ant-menu-item-group';
        this.renderer.addClass(elementRef.nativeElement, className);
    }
    /**
     * @return {?}
     */
    NzMenuGroupComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var ulElement = (/** @type {?} */ (this.titleElement)).nativeElement.nextElementSibling;
        if (ulElement) {
            /**
             * add classname to ul *
             * @type {?}
             */
            var className = this.isMenuInsideDropDown ? 'ant-dropdown-menu-item-group-list' : 'ant-menu-item-group-list';
            this.renderer.addClass(ulElement, className);
        }
    };
    NzMenuGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-menu-group]',
                    exportAs: 'nzMenuGroup',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        /** check if menu inside dropdown-menu component **/
                        {
                            provide: NzIsMenuInsideDropDownToken,
                            useFactory: MenuGroupFactory,
                            deps: [[new SkipSelf(), new Optional(), NzIsMenuInsideDropDownToken]]
                        }
                    ],
                    encapsulation: ViewEncapsulation.None,
                    template: "\n    <div\n      [class.ant-menu-item-group-title]=\"!isMenuInsideDropDown\"\n      [class.ant-dropdown-menu-item-group-title]=\"isMenuInsideDropDown\"\n      #titleElement\n    >\n      <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n      <ng-content select=\"[title]\" *ngIf=\"!nzTitle\"></ng-content>\n    </div>\n    <ng-content></ng-content>\n  ",
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    NzMenuGroupComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: Boolean, decorators: [{ type: Inject, args: [NzIsMenuInsideDropDownToken,] }] }
    ]; };
    NzMenuGroupComponent.propDecorators = {
        nzTitle: [{ type: Input }],
        titleElement: [{ type: ViewChild, args: ['titleElement',] }]
    };
    return NzMenuGroupComponent;
}());
export { NzMenuGroupComponent };
if (false) {
    /** @type {?} */
    NzMenuGroupComponent.prototype.nzTitle;
    /** @type {?} */
    NzMenuGroupComponent.prototype.titleElement;
    /** @type {?} */
    NzMenuGroupComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzMenuGroupComponent.prototype.renderer;
    /** @type {?} */
    NzMenuGroupComponent.prototype.isMenuInsideDropDown;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lbnUvIiwic291cmNlcyI6WyJtZW51LWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULFFBQVEsRUFFUixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7QUFFM0QsTUFBTSxVQUFVLGdCQUFnQixDQUFDLHlCQUFrQztJQUNqRSxPQUFPLHlCQUF5QixDQUFDLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ3ZFLENBQUM7QUFDRDtJQThCRSw4QkFDUyxVQUFzQixFQUNyQixRQUFtQixFQUNpQixvQkFBNkI7UUFGbEUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ2lCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBUzs7WUFFbkUsU0FBUyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjtRQUNwRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7SUFFRCw4Q0FBZTs7O0lBQWY7O1lBQ1EsU0FBUyxHQUFHLG1CQUFBLElBQUksQ0FBQyxZQUFZLEVBQUMsQ0FBQyxhQUFhLENBQUMsa0JBQWtCO1FBQ3JFLElBQUksU0FBUyxFQUFFOzs7OztnQkFFUCxTQUFTLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUMsMEJBQTBCO1lBQzlHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUM5QztJQUNILENBQUM7O2dCQTlDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1Qsb0RBQW9EO3dCQUNwRDs0QkFDRSxPQUFPLEVBQUUsMkJBQTJCOzRCQUNwQyxVQUFVLEVBQUUsZ0JBQWdCOzRCQUM1QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO3lCQUN0RTtxQkFDRjtvQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLGtZQVVUO29CQUNELG1CQUFtQixFQUFFLEtBQUs7aUJBQzNCOzs7O2dCQXhDQyxVQUFVO2dCQUlWLFNBQVM7OENBNENOLE1BQU0sU0FBQywyQkFBMkI7OzswQkFOcEMsS0FBSzsrQkFDTCxTQUFTLFNBQUMsY0FBYzs7SUFtQjNCLDJCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7U0FyQlksb0JBQW9COzs7SUFDL0IsdUNBQThDOztJQUM5Qyw0Q0FBcUQ7O0lBR25ELDBDQUE2Qjs7Ozs7SUFDN0Isd0NBQTJCOztJQUMzQixvREFBeUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBTa2lwU2VsZixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOeklzTWVudUluc2lkZURyb3BEb3duVG9rZW4gfSBmcm9tICcuL21lbnUudG9rZW4nO1xuXG5leHBvcnQgZnVuY3Rpb24gTWVudUdyb3VwRmFjdG9yeShpc01lbnVJbnNpZGVEcm9wRG93blRva2VuOiBib29sZWFuKTogYm9vbGVhbiB7XG4gIHJldHVybiBpc01lbnVJbnNpZGVEcm9wRG93blRva2VuID8gaXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbiA6IGZhbHNlO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW256LW1lbnUtZ3JvdXBdJyxcbiAgZXhwb3J0QXM6ICduek1lbnVHcm91cCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICAvKiogY2hlY2sgaWYgbWVudSBpbnNpZGUgZHJvcGRvd24tbWVudSBjb21wb25lbnQgKiovXG4gICAge1xuICAgICAgcHJvdmlkZTogTnpJc01lbnVJbnNpZGVEcm9wRG93blRva2VuLFxuICAgICAgdXNlRmFjdG9yeTogTWVudUdyb3VwRmFjdG9yeSxcbiAgICAgIGRlcHM6IFtbbmV3IFNraXBTZWxmKCksIG5ldyBPcHRpb25hbCgpLCBOeklzTWVudUluc2lkZURyb3BEb3duVG9rZW5dXVxuICAgIH1cbiAgXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2XG4gICAgICBbY2xhc3MuYW50LW1lbnUtaXRlbS1ncm91cC10aXRsZV09XCIhaXNNZW51SW5zaWRlRHJvcERvd25cIlxuICAgICAgW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LWl0ZW0tZ3JvdXAtdGl0bGVdPVwiaXNNZW51SW5zaWRlRHJvcERvd25cIlxuICAgICAgI3RpdGxlRWxlbWVudFxuICAgID5cbiAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuelRpdGxlXCI+e3sgbnpUaXRsZSB9fTwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3RpdGxlXVwiICpuZ0lmPVwiIW56VGl0bGVcIj48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBOek1lbnVHcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBuelRpdGxlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBWaWV3Q2hpbGQoJ3RpdGxlRWxlbWVudCcpIHRpdGxlRWxlbWVudD86IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBJbmplY3QoTnpJc01lbnVJbnNpZGVEcm9wRG93blRva2VuKSBwdWJsaWMgaXNNZW51SW5zaWRlRHJvcERvd246IGJvb2xlYW5cbiAgKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5pc01lbnVJbnNpZGVEcm9wRG93biA/ICdhbnQtZHJvcGRvd24tbWVudS1pdGVtLWdyb3VwJyA6ICdhbnQtbWVudS1pdGVtLWdyb3VwJztcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB1bEVsZW1lbnQgPSB0aGlzLnRpdGxlRWxlbWVudCEubmF0aXZlRWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgaWYgKHVsRWxlbWVudCkge1xuICAgICAgLyoqIGFkZCBjbGFzc25hbWUgdG8gdWwgKiovXG4gICAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmlzTWVudUluc2lkZURyb3BEb3duID8gJ2FudC1kcm9wZG93bi1tZW51LWl0ZW0tZ3JvdXAtbGlzdCcgOiAnYW50LW1lbnUtaXRlbS1ncm91cC1saXN0JztcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModWxFbGVtZW50LCBjbGFzc05hbWUpO1xuICAgIH1cbiAgfVxufVxuIl19