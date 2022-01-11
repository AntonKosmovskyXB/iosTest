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
export class NzSubmenuInlineChildComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
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
    calcMotionState() {
        if (this.nzOpen) {
            this.expandState = 'expanded';
        }
        else {
            this.expandState = 'collapsed';
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.calcMotionState();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { mode, nzOpen, menuClass } = changes;
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
                item => !!item))
                    .forEach((/**
                 * @param {?} className
                 * @return {?}
                 */
                className => {
                    this.renderer.removeClass(this.elementRef.nativeElement, className);
                }));
            }
            if (this.menuClass) {
                this.listOfCacheClassName = this.menuClass.split(' ');
                this.listOfCacheClassName
                    .filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => !!item))
                    .forEach((/**
                 * @param {?} className
                 * @return {?}
                 */
                className => {
                    this.renderer.addClass(this.elementRef.nativeElement, className);
                }));
            }
        }
    }
}
NzSubmenuInlineChildComponent.decorators = [
    { type: Component, args: [{
                selector: '[nz-submenu-inline-child]',
                animations: [collapseMotion],
                exportAs: 'nzSubmenuInlineChild',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ` <ng-template [ngTemplateOutlet]="templateOutlet"></ng-template> `,
                host: {
                    '[class.ant-menu]': 'true',
                    '[class.ant-menu-inline]': 'true',
                    '[class.ant-menu-sub]': 'true',
                    '[@collapseMotion]': 'expandState'
                }
            }] }
];
/** @nocollapse */
NzSubmenuInlineChildComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NzSubmenuInlineChildComponent.propDecorators = {
    templateOutlet: [{ type: Input }],
    menuClass: [{ type: Input }],
    mode: [{ type: Input }],
    nzOpen: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWVudS1pbmxpbmUtY2hpbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tZW51LyIsInNvdXJjZXMiOlsic3VibWVudS1pbmxpbmUtY2hpbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBR0wsU0FBUyxFQUdULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFrQjlELE1BQU0sT0FBTyw2QkFBNkI7Ozs7O0lBY3hDLFlBQW9CLFVBQXNCLEVBQVUsUUFBbUI7UUFBbkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFiOUQsbUJBQWMsR0FBa0MsSUFBSSxDQUFDO1FBQ3JELGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsU0FBSSxHQUFtQixVQUFVLENBQUM7UUFDbEMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUN4Qix5QkFBb0IsR0FBYSxFQUFFLENBQUM7UUFDcEMsZ0JBQVcsR0FBRyxXQUFXLENBQUM7SUFRZ0QsQ0FBQzs7OztJQVAzRSxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7U0FDL0I7YUFBTTtZQUNMLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFDRCxXQUFXLENBQUMsT0FBc0I7Y0FDMUIsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLE9BQU87UUFDM0MsSUFBSSxJQUFJLElBQUksTUFBTSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFO2dCQUNwQyxJQUFJLENBQUMsb0JBQW9CO3FCQUN0QixNQUFNOzs7O2dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBQztxQkFDdEIsT0FBTzs7OztnQkFBQyxTQUFTLENBQUMsRUFBRTtvQkFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3RFLENBQUMsRUFBQyxDQUFDO2FBQ047WUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxDQUFDLG9CQUFvQjtxQkFDdEIsTUFBTTs7OztnQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUM7cUJBQ3RCLE9BQU87Ozs7Z0JBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUNuRSxDQUFDLEVBQUMsQ0FBQzthQUNOO1NBQ0Y7SUFDSCxDQUFDOzs7WUF0REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFVBQVUsRUFBRSxDQUFDLGNBQWMsQ0FBQztnQkFDNUIsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUUsbUVBQW1FO2dCQUM3RSxJQUFJLEVBQUU7b0JBQ0osa0JBQWtCLEVBQUUsTUFBTTtvQkFDMUIseUJBQXlCLEVBQUUsTUFBTTtvQkFDakMsc0JBQXNCLEVBQUUsTUFBTTtvQkFDOUIsbUJBQW1CLEVBQUUsYUFBYTtpQkFDbkM7YUFDRjs7OztZQTFCQyxVQUFVO1lBSVYsU0FBUzs7OzZCQXdCUixLQUFLO3dCQUNMLEtBQUs7bUJBQ0wsS0FBSztxQkFDTCxLQUFLOzs7O0lBSE4sdURBQThEOztJQUM5RCxrREFBZ0M7O0lBQ2hDLDZDQUEyQzs7SUFDM0MsK0NBQXdCOztJQUN4Qiw2REFBb0M7O0lBQ3BDLG9EQUEwQjs7Ozs7SUFRZCxtREFBOEI7Ozs7O0lBQUUsaURBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbGxhcHNlTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpNZW51TW9kZVR5cGUgfSBmcm9tICcuL21lbnUudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbnotc3VibWVudS1pbmxpbmUtY2hpbGRdJyxcbiAgYW5pbWF0aW9uczogW2NvbGxhcHNlTW90aW9uXSxcbiAgZXhwb3J0QXM6ICduelN1Ym1lbnVJbmxpbmVDaGlsZCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYCA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwidGVtcGxhdGVPdXRsZXRcIj48L25nLXRlbXBsYXRlPiBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtbWVudV0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hbnQtbWVudS1pbmxpbmVdJzogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LW1lbnUtc3ViXSc6ICd0cnVlJyxcbiAgICAnW0Bjb2xsYXBzZU1vdGlvbl0nOiAnZXhwYW5kU3RhdGUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpTdWJtZW51SW5saW5lQ2hpbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHRlbXBsYXRlT3V0bGV0OiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG1lbnVDbGFzczogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIG1vZGU6IE56TWVudU1vZGVUeXBlID0gJ3ZlcnRpY2FsJztcbiAgQElucHV0KCkgbnpPcGVuID0gZmFsc2U7XG4gIGxpc3RPZkNhY2hlQ2xhc3NOYW1lOiBzdHJpbmdbXSA9IFtdO1xuICBleHBhbmRTdGF0ZSA9ICdjb2xsYXBzZWQnO1xuICBjYWxjTW90aW9uU3RhdGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpPcGVuKSB7XG4gICAgICB0aGlzLmV4cGFuZFN0YXRlID0gJ2V4cGFuZGVkJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5leHBhbmRTdGF0ZSA9ICdjb2xsYXBzZWQnO1xuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jYWxjTW90aW9uU3RhdGUoKTtcbiAgfVxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBtb2RlLCBuek9wZW4sIG1lbnVDbGFzcyB9ID0gY2hhbmdlcztcbiAgICBpZiAobW9kZSB8fCBuek9wZW4pIHtcbiAgICAgIHRoaXMuY2FsY01vdGlvblN0YXRlKCk7XG4gICAgfVxuICAgIGlmIChtZW51Q2xhc3MpIHtcbiAgICAgIGlmICh0aGlzLmxpc3RPZkNhY2hlQ2xhc3NOYW1lLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmxpc3RPZkNhY2hlQ2xhc3NOYW1lXG4gICAgICAgICAgLmZpbHRlcihpdGVtID0+ICEhaXRlbSlcbiAgICAgICAgICAuZm9yRWFjaChjbGFzc05hbWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm1lbnVDbGFzcykge1xuICAgICAgICB0aGlzLmxpc3RPZkNhY2hlQ2xhc3NOYW1lID0gdGhpcy5tZW51Q2xhc3Muc3BsaXQoJyAnKTtcbiAgICAgICAgdGhpcy5saXN0T2ZDYWNoZUNsYXNzTmFtZVxuICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiAhIWl0ZW0pXG4gICAgICAgICAgLmZvckVhY2goY2xhc3NOYW1lID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=