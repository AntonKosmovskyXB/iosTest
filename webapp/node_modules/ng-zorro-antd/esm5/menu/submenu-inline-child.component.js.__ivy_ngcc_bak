/**
 * @fileoverview added by tsickle
 * Generated from: submenu-inline-child.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { collapseMotion } from 'ng-zorro-antd/core/animation';
var NzSubmenuInlineChildComponent = /** @class */ (function () {
    function NzSubmenuInlineChildComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.templateOutlet = null;
        this.menuClass = '';
        this.mode = 'vertical';
        this.nzOpen = false;
        this.listOfCacheClassName = [];
        this.expandState = 'collapsed';
    }
    /**
     * @return {?}
     */
    NzSubmenuInlineChildComponent.prototype.calcMotionState = /**
     * @return {?}
     */
    function () {
        if (this.nzOpen) {
            this.expandState = 'expanded';
        }
        else {
            this.expandState = 'collapsed';
        }
    };
    /**
     * @return {?}
     */
    NzSubmenuInlineChildComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.calcMotionState();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSubmenuInlineChildComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        var mode = changes.mode, nzOpen = changes.nzOpen, menuClass = changes.menuClass;
        if (mode || nzOpen) {
            this.calcMotionState();
        }
        if (menuClass) {
            if (this.listOfCacheClassName.length) {
                this.listOfCacheClassName
                    .filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return !!item; }))
                    .forEach((/**
                 * @param {?} className
                 * @return {?}
                 */
                function (className) {
                    _this.renderer.removeClass(_this.elementRef.nativeElement, className);
                }));
            }
            if (this.menuClass) {
                this.listOfCacheClassName = this.menuClass.split(' ');
                this.listOfCacheClassName
                    .filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return !!item; }))
                    .forEach((/**
                 * @param {?} className
                 * @return {?}
                 */
                function (className) {
                    _this.renderer.addClass(_this.elementRef.nativeElement, className);
                }));
            }
        }
    };
    NzSubmenuInlineChildComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-submenu-inline-child]',
                    animations: [collapseMotion],
                    exportAs: 'nzSubmenuInlineChild',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: " <ng-template [ngTemplateOutlet]=\"templateOutlet\"></ng-template> ",
                    host: {
                        '[class.ant-menu]': 'true',
                        '[class.ant-menu-inline]': 'true',
                        '[class.ant-menu-sub]': 'true',
                        '[@collapseMotion]': 'expandState'
                    }
                }] }
    ];
    /** @nocollapse */
    NzSubmenuInlineChildComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzSubmenuInlineChildComponent.propDecorators = {
        templateOutlet: [{ type: Input }],
        menuClass: [{ type: Input }],
        mode: [{ type: Input }],
        nzOpen: [{ type: Input }]
    };
    return NzSubmenuInlineChildComponent;
}());
export { NzSubmenuInlineChildComponent };
if (false) {
    /** @type {?} */
    NzSubmenuInlineChildComponent.prototype.templateOutlet;
    /** @type {?} */
    NzSubmenuInlineChildComponent.prototype.menuClass;
    /** @type {?} */
    NzSubmenuInlineChildComponent.prototype.mode;
    /** @type {?} */
    NzSubmenuInlineChildComponent.prototype.nzOpen;
    /** @type {?} */
    NzSubmenuInlineChildComponent.prototype.listOfCacheClassName;
    /** @type {?} */
    NzSubmenuInlineChildComponent.prototype.expandState;
    /**
     * @type {?}
     * @private
     */
    NzSubmenuInlineChildComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzSubmenuInlineChildComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWVudS1pbmxpbmUtY2hpbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tZW51LyIsInNvdXJjZXMiOlsic3VibWVudS1pbmxpbmUtY2hpbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBR0wsU0FBUyxFQUdULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFJOUQ7SUE0QkUsdUNBQW9CLFVBQXNCLEVBQVUsUUFBbUI7UUFBbkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFiOUQsbUJBQWMsR0FBa0MsSUFBSSxDQUFDO1FBQ3JELGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsU0FBSSxHQUFtQixVQUFVLENBQUM7UUFDbEMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUN4Qix5QkFBb0IsR0FBYSxFQUFFLENBQUM7UUFDcEMsZ0JBQVcsR0FBRyxXQUFXLENBQUM7SUFRZ0QsQ0FBQzs7OztJQVAzRSx1REFBZTs7O0lBQWY7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztTQUMvQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7U0FDaEM7SUFDSCxDQUFDOzs7O0lBRUQsZ0RBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBQ0QsbURBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQWxDLGlCQXNCQztRQXJCUyxJQUFBLG1CQUFJLEVBQUUsdUJBQU0sRUFBRSw2QkFBUztRQUMvQixJQUFJLElBQUksSUFBSSxNQUFNLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxvQkFBb0I7cUJBQ3RCLE1BQU07Ozs7Z0JBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFOLENBQU0sRUFBQztxQkFDdEIsT0FBTzs7OztnQkFBQyxVQUFBLFNBQVM7b0JBQ2hCLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUN0RSxDQUFDLEVBQUMsQ0FBQzthQUNOO1lBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNsQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxvQkFBb0I7cUJBQ3RCLE1BQU07Ozs7Z0JBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFOLENBQU0sRUFBQztxQkFDdEIsT0FBTzs7OztnQkFBQyxVQUFBLFNBQVM7b0JBQ2hCLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUNuRSxDQUFDLEVBQUMsQ0FBQzthQUNOO1NBQ0Y7SUFDSCxDQUFDOztnQkF0REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFVBQVUsRUFBRSxDQUFDLGNBQWMsQ0FBQztvQkFDNUIsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUscUVBQW1FO29CQUM3RSxJQUFJLEVBQUU7d0JBQ0osa0JBQWtCLEVBQUUsTUFBTTt3QkFDMUIseUJBQXlCLEVBQUUsTUFBTTt3QkFDakMsc0JBQXNCLEVBQUUsTUFBTTt3QkFDOUIsbUJBQW1CLEVBQUUsYUFBYTtxQkFDbkM7aUJBQ0Y7Ozs7Z0JBMUJDLFVBQVU7Z0JBSVYsU0FBUzs7O2lDQXdCUixLQUFLOzRCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLOztJQXFDUixvQ0FBQztDQUFBLEFBdkRELElBdURDO1NBekNZLDZCQUE2Qjs7O0lBQ3hDLHVEQUE4RDs7SUFDOUQsa0RBQWdDOztJQUNoQyw2Q0FBMkM7O0lBQzNDLCtDQUF3Qjs7SUFDeEIsNkRBQW9DOztJQUNwQyxvREFBMEI7Ozs7O0lBUWQsbURBQThCOzs7OztJQUFFLGlEQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb2xsYXBzZU1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56TWVudU1vZGVUeXBlIH0gZnJvbSAnLi9tZW51LnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW256LXN1Ym1lbnUtaW5saW5lLWNoaWxkXScsXG4gIGFuaW1hdGlvbnM6IFtjb2xsYXBzZU1vdGlvbl0sXG4gIGV4cG9ydEFzOiAnbnpTdWJtZW51SW5saW5lQ2hpbGQnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRlbXBsYXRlT3V0bGV0XCI+PC9uZy10ZW1wbGF0ZT4gYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LW1lbnVdJzogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LW1lbnUtaW5saW5lXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmFudC1tZW51LXN1Yl0nOiAndHJ1ZScsXG4gICAgJ1tAY29sbGFwc2VNb3Rpb25dJzogJ2V4cGFuZFN0YXRlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56U3VibWVudUlubGluZUNoaWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSB0ZW1wbGF0ZU91dGxldDogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBtZW51Q2xhc3M6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBtb2RlOiBOek1lbnVNb2RlVHlwZSA9ICd2ZXJ0aWNhbCc7XG4gIEBJbnB1dCgpIG56T3BlbiA9IGZhbHNlO1xuICBsaXN0T2ZDYWNoZUNsYXNzTmFtZTogc3RyaW5nW10gPSBbXTtcbiAgZXhwYW5kU3RhdGUgPSAnY29sbGFwc2VkJztcbiAgY2FsY01vdGlvblN0YXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56T3Blbikge1xuICAgICAgdGhpcy5leHBhbmRTdGF0ZSA9ICdleHBhbmRlZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXhwYW5kU3RhdGUgPSAnY29sbGFwc2VkJztcbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2FsY01vdGlvblN0YXRlKCk7XG4gIH1cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbW9kZSwgbnpPcGVuLCBtZW51Q2xhc3MgfSA9IGNoYW5nZXM7XG4gICAgaWYgKG1vZGUgfHwgbnpPcGVuKSB7XG4gICAgICB0aGlzLmNhbGNNb3Rpb25TdGF0ZSgpO1xuICAgIH1cbiAgICBpZiAobWVudUNsYXNzKSB7XG4gICAgICBpZiAodGhpcy5saXN0T2ZDYWNoZUNsYXNzTmFtZS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5saXN0T2ZDYWNoZUNsYXNzTmFtZVxuICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiAhIWl0ZW0pXG4gICAgICAgICAgLmZvckVhY2goY2xhc3NOYW1lID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5tZW51Q2xhc3MpIHtcbiAgICAgICAgdGhpcy5saXN0T2ZDYWNoZUNsYXNzTmFtZSA9IHRoaXMubWVudUNsYXNzLnNwbGl0KCcgJyk7XG4gICAgICAgIHRoaXMubGlzdE9mQ2FjaGVDbGFzc05hbWVcbiAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gISFpdGVtKVxuICAgICAgICAgIC5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19