/**
 * @fileoverview added by tsickle
 * Generated from: submenu-non-inline-child.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { slideMotion, zoomBigMotion } from 'ng-zorro-antd/core/animation';
export class NzSubmenuNoneInlineChildComponent {
    constructor() {
        this.menuClass = '';
        this.theme = 'light';
        this.templateOutlet = null;
        this.isMenuInsideDropDown = false;
        this.mode = 'vertical';
        this.position = 'right';
        this.nzDisabled = false;
        this.nzOpen = false;
        this.subMenuMouseState = new EventEmitter();
        this.expandState = 'collapsed';
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setMouseState(state) {
        if (!this.nzDisabled) {
            this.subMenuMouseState.next(state);
        }
    }
    /**
     * @return {?}
     */
    calcMotionState() {
        if (this.nzOpen) {
            if (this.mode === 'horizontal') {
                this.expandState = 'bottom';
            }
            else if (this.mode === 'vertical') {
                this.expandState = 'active';
            }
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
        const { mode, nzOpen } = changes;
        if (mode || nzOpen) {
            this.calcMotionState();
        }
    }
}
NzSubmenuNoneInlineChildComponent.decorators = [
    { type: Component, args: [{
                selector: '[nz-submenu-none-inline-child]',
                exportAs: 'nzSubmenuNoneInlineChild',
                encapsulation: ViewEncapsulation.None,
                animations: [zoomBigMotion, slideMotion],
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div
      [class.ant-dropdown-menu]="isMenuInsideDropDown"
      [class.ant-menu]="!isMenuInsideDropDown"
      [class.ant-dropdown-menu-vertical]="isMenuInsideDropDown"
      [class.ant-menu-vertical]="!isMenuInsideDropDown"
      [class.ant-dropdown-menu-sub]="isMenuInsideDropDown"
      [class.ant-menu-sub]="!isMenuInsideDropDown"
      [ngClass]="menuClass"
    >
      <ng-template [ngTemplateOutlet]="templateOutlet"></ng-template>
    </div>
  `,
                host: {
                    '[class.ant-menu-submenu]': 'true',
                    '[class.ant-menu-submenu-popup]': 'true',
                    '[class.ant-menu-light]': "theme === 'light'",
                    '[class.ant-menu-dark]': "theme === 'dark'",
                    '[class.ant-menu-submenu-placement-bottom]': "mode === 'horizontal'",
                    '[class.ant-menu-submenu-placement-right]': "mode === 'vertical' && position === 'right'",
                    '[class.ant-menu-submenu-placement-left]': "mode === 'vertical' && position === 'left'",
                    '[@slideMotion]': 'expandState',
                    '[@zoomBigMotion]': 'expandState',
                    '(mouseenter)': 'setMouseState(true)',
                    '(mouseleave)': 'setMouseState(false)'
                }
            }] }
];
NzSubmenuNoneInlineChildComponent.propDecorators = {
    menuClass: [{ type: Input }],
    theme: [{ type: Input }],
    templateOutlet: [{ type: Input }],
    isMenuInsideDropDown: [{ type: Input }],
    mode: [{ type: Input }],
    position: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzOpen: [{ type: Input }],
    subMenuMouseState: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NzSubmenuNoneInlineChildComponent.prototype.menuClass;
    /** @type {?} */
    NzSubmenuNoneInlineChildComponent.prototype.theme;
    /** @type {?} */
    NzSubmenuNoneInlineChildComponent.prototype.templateOutlet;
    /** @type {?} */
    NzSubmenuNoneInlineChildComponent.prototype.isMenuInsideDropDown;
    /** @type {?} */
    NzSubmenuNoneInlineChildComponent.prototype.mode;
    /** @type {?} */
    NzSubmenuNoneInlineChildComponent.prototype.position;
    /** @type {?} */
    NzSubmenuNoneInlineChildComponent.prototype.nzDisabled;
    /** @type {?} */
    NzSubmenuNoneInlineChildComponent.prototype.nzOpen;
    /** @type {?} */
    NzSubmenuNoneInlineChildComponent.prototype.subMenuMouseState;
    /** @type {?} */
    NzSubmenuNoneInlineChildComponent.prototype.expandState;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWVudS1ub24taW5saW5lLWNoaWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbWVudS8iLCJzb3VyY2VzIjpbInN1Ym1lbnUtbm9uLWlubGluZS1jaGlsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBR04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFxQzFFLE1BQU0sT0FBTyxpQ0FBaUM7SUFqQzlDO1FBa0NXLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsVUFBSyxHQUFvQixPQUFPLENBQUM7UUFDakMsbUJBQWMsR0FBa0MsSUFBSSxDQUFDO1FBQ3JELHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQUM3QixTQUFJLEdBQW1CLFVBQVUsQ0FBQztRQUNsQyxhQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ25CLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNMLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFNbkUsZ0JBQVcsR0FBRyxXQUFXLENBQUM7SUFxQjVCLENBQUM7Ozs7O0lBMUJDLGFBQWEsQ0FBQyxLQUFjO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO2FBQzdCO2lCQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO2FBQzdCO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7OztJQUNELFFBQVE7UUFDTixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFDRCxXQUFXLENBQUMsT0FBc0I7Y0FDMUIsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsT0FBTztRQUNoQyxJQUFJLElBQUksSUFBSSxNQUFNLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7O1lBcEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsVUFBVSxFQUFFLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQztnQkFDeEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7O0dBWVQ7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLDBCQUEwQixFQUFFLE1BQU07b0JBQ2xDLGdDQUFnQyxFQUFFLE1BQU07b0JBQ3hDLHdCQUF3QixFQUFFLG1CQUFtQjtvQkFDN0MsdUJBQXVCLEVBQUUsa0JBQWtCO29CQUMzQywyQ0FBMkMsRUFBRSx1QkFBdUI7b0JBQ3BFLDBDQUEwQyxFQUFFLDZDQUE2QztvQkFDekYseUNBQXlDLEVBQUUsNENBQTRDO29CQUN2RixnQkFBZ0IsRUFBRSxhQUFhO29CQUMvQixrQkFBa0IsRUFBRSxhQUFhO29CQUNqQyxjQUFjLEVBQUUscUJBQXFCO29CQUNyQyxjQUFjLEVBQUUsc0JBQXNCO2lCQUN2QzthQUNGOzs7d0JBRUUsS0FBSztvQkFDTCxLQUFLOzZCQUNMLEtBQUs7bUNBQ0wsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSztxQkFDTCxLQUFLO2dDQUNMLE1BQU07Ozs7SUFSUCxzREFBZ0M7O0lBQ2hDLGtEQUEwQzs7SUFDMUMsMkRBQThEOztJQUM5RCxpRUFBc0M7O0lBQ3RDLGlEQUEyQzs7SUFDM0MscURBQTRCOztJQUM1Qix1REFBNEI7O0lBQzVCLG1EQUF3Qjs7SUFDeEIsOERBQW1FOztJQU1uRSx3REFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzbGlkZU1vdGlvbiwgem9vbUJpZ01vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56TWVudU1vZGVUeXBlLCBOek1lbnVUaGVtZVR5cGUgfSBmcm9tICcuL21lbnUudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbnotc3VibWVudS1ub25lLWlubGluZS1jaGlsZF0nLFxuICBleHBvcnRBczogJ256U3VibWVudU5vbmVJbmxpbmVDaGlsZCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGFuaW1hdGlvbnM6IFt6b29tQmlnTW90aW9uLCBzbGlkZU1vdGlvbl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgIFtjbGFzcy5hbnQtZHJvcGRvd24tbWVudV09XCJpc01lbnVJbnNpZGVEcm9wRG93blwiXG4gICAgICBbY2xhc3MuYW50LW1lbnVdPVwiIWlzTWVudUluc2lkZURyb3BEb3duXCJcbiAgICAgIFtjbGFzcy5hbnQtZHJvcGRvd24tbWVudS12ZXJ0aWNhbF09XCJpc01lbnVJbnNpZGVEcm9wRG93blwiXG4gICAgICBbY2xhc3MuYW50LW1lbnUtdmVydGljYWxdPVwiIWlzTWVudUluc2lkZURyb3BEb3duXCJcbiAgICAgIFtjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1zdWJdPVwiaXNNZW51SW5zaWRlRHJvcERvd25cIlxuICAgICAgW2NsYXNzLmFudC1tZW51LXN1Yl09XCIhaXNNZW51SW5zaWRlRHJvcERvd25cIlxuICAgICAgW25nQ2xhc3NdPVwibWVudUNsYXNzXCJcbiAgICA+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwidGVtcGxhdGVPdXRsZXRcIj48L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtbWVudS1zdWJtZW51XSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmFudC1tZW51LXN1Ym1lbnUtcG9wdXBdJzogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LW1lbnUtbGlnaHRdJzogXCJ0aGVtZSA9PT0gJ2xpZ2h0J1wiLFxuICAgICdbY2xhc3MuYW50LW1lbnUtZGFya10nOiBcInRoZW1lID09PSAnZGFyaydcIixcbiAgICAnW2NsYXNzLmFudC1tZW51LXN1Ym1lbnUtcGxhY2VtZW50LWJvdHRvbV0nOiBcIm1vZGUgPT09ICdob3Jpem9udGFsJ1wiLFxuICAgICdbY2xhc3MuYW50LW1lbnUtc3VibWVudS1wbGFjZW1lbnQtcmlnaHRdJzogXCJtb2RlID09PSAndmVydGljYWwnICYmIHBvc2l0aW9uID09PSAncmlnaHQnXCIsXG4gICAgJ1tjbGFzcy5hbnQtbWVudS1zdWJtZW51LXBsYWNlbWVudC1sZWZ0XSc6IFwibW9kZSA9PT0gJ3ZlcnRpY2FsJyAmJiBwb3NpdGlvbiA9PT0gJ2xlZnQnXCIsXG4gICAgJ1tAc2xpZGVNb3Rpb25dJzogJ2V4cGFuZFN0YXRlJyxcbiAgICAnW0B6b29tQmlnTW90aW9uXSc6ICdleHBhbmRTdGF0ZScsXG4gICAgJyhtb3VzZWVudGVyKSc6ICdzZXRNb3VzZVN0YXRlKHRydWUpJyxcbiAgICAnKG1vdXNlbGVhdmUpJzogJ3NldE1vdXNlU3RhdGUoZmFsc2UpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56U3VibWVudU5vbmVJbmxpbmVDaGlsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbWVudUNsYXNzOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgdGhlbWU6IE56TWVudVRoZW1lVHlwZSA9ICdsaWdodCc7XG4gIEBJbnB1dCgpIHRlbXBsYXRlT3V0bGV0OiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGlzTWVudUluc2lkZURyb3BEb3duID0gZmFsc2U7XG4gIEBJbnB1dCgpIG1vZGU6IE56TWVudU1vZGVUeXBlID0gJ3ZlcnRpY2FsJztcbiAgQElucHV0KCkgcG9zaXRpb24gPSAncmlnaHQnO1xuICBASW5wdXQoKSBuekRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56T3BlbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc3ViTWVudU1vdXNlU3RhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIHNldE1vdXNlU3RhdGUoc3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubnpEaXNhYmxlZCkge1xuICAgICAgdGhpcy5zdWJNZW51TW91c2VTdGF0ZS5uZXh0KHN0YXRlKTtcbiAgICB9XG4gIH1cbiAgZXhwYW5kU3RhdGUgPSAnY29sbGFwc2VkJztcbiAgY2FsY01vdGlvblN0YXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56T3Blbikge1xuICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIHRoaXMuZXhwYW5kU3RhdGUgPSAnYm90dG9tJztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIHRoaXMuZXhwYW5kU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5leHBhbmRTdGF0ZSA9ICdjb2xsYXBzZWQnO1xuICAgIH1cbiAgfVxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNhbGNNb3Rpb25TdGF0ZSgpO1xuICB9XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG1vZGUsIG56T3BlbiB9ID0gY2hhbmdlcztcbiAgICBpZiAobW9kZSB8fCBuek9wZW4pIHtcbiAgICAgIHRoaXMuY2FsY01vdGlvblN0YXRlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=