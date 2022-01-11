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
var NzSubmenuNoneInlineChildComponent = /** @class */ (function () {
    function NzSubmenuNoneInlineChildComponent() {
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
    NzSubmenuNoneInlineChildComponent.prototype.setMouseState = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        if (!this.nzDisabled) {
            this.subMenuMouseState.next(state);
        }
    };
    /**
     * @return {?}
     */
    NzSubmenuNoneInlineChildComponent.prototype.calcMotionState = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    NzSubmenuNoneInlineChildComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.calcMotionState();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSubmenuNoneInlineChildComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var mode = changes.mode, nzOpen = changes.nzOpen;
        if (mode || nzOpen) {
            this.calcMotionState();
        }
    };
    NzSubmenuNoneInlineChildComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-submenu-none-inline-child]',
                    exportAs: 'nzSubmenuNoneInlineChild',
                    encapsulation: ViewEncapsulation.None,
                    animations: [zoomBigMotion, slideMotion],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <div\n      [class.ant-dropdown-menu]=\"isMenuInsideDropDown\"\n      [class.ant-menu]=\"!isMenuInsideDropDown\"\n      [class.ant-dropdown-menu-vertical]=\"isMenuInsideDropDown\"\n      [class.ant-menu-vertical]=\"!isMenuInsideDropDown\"\n      [class.ant-dropdown-menu-sub]=\"isMenuInsideDropDown\"\n      [class.ant-menu-sub]=\"!isMenuInsideDropDown\"\n      [ngClass]=\"menuClass\"\n    >\n      <ng-template [ngTemplateOutlet]=\"templateOutlet\"></ng-template>\n    </div>\n  ",
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
    return NzSubmenuNoneInlineChildComponent;
}());
export { NzSubmenuNoneInlineChildComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWVudS1ub24taW5saW5lLWNoaWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbWVudS8iLCJzb3VyY2VzIjpbInN1Ym1lbnUtbm9uLWlubGluZS1jaGlsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBR04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFJMUU7SUFBQTtRQWtDVyxjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLFVBQUssR0FBb0IsT0FBTyxDQUFDO1FBQ2pDLG1CQUFjLEdBQWtDLElBQUksQ0FBQztRQUNyRCx5QkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDN0IsU0FBSSxHQUFtQixVQUFVLENBQUM7UUFDbEMsYUFBUSxHQUFHLE9BQU8sQ0FBQztRQUNuQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDTCxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBTW5FLGdCQUFXLEdBQUcsV0FBVyxDQUFDO0lBcUI1QixDQUFDOzs7OztJQTFCQyx5REFBYTs7OztJQUFiLFVBQWMsS0FBYztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7OztJQUVELDJEQUFlOzs7SUFBZjtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO2FBQzdCO2lCQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO2FBQzdCO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7OztJQUNELG9EQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUNELHVEQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUN4QixJQUFBLG1CQUFJLEVBQUUsdUJBQU07UUFDcEIsSUFBSSxJQUFJLElBQUksTUFBTSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7O2dCQXBFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztvQkFDMUMsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFVBQVUsRUFBRSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUM7b0JBQ3hDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUseWVBWVQ7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLDBCQUEwQixFQUFFLE1BQU07d0JBQ2xDLGdDQUFnQyxFQUFFLE1BQU07d0JBQ3hDLHdCQUF3QixFQUFFLG1CQUFtQjt3QkFDN0MsdUJBQXVCLEVBQUUsa0JBQWtCO3dCQUMzQywyQ0FBMkMsRUFBRSx1QkFBdUI7d0JBQ3BFLDBDQUEwQyxFQUFFLDZDQUE2Qzt3QkFDekYseUNBQXlDLEVBQUUsNENBQTRDO3dCQUN2RixnQkFBZ0IsRUFBRSxhQUFhO3dCQUMvQixrQkFBa0IsRUFBRSxhQUFhO3dCQUNqQyxjQUFjLEVBQUUscUJBQXFCO3dCQUNyQyxjQUFjLEVBQUUsc0JBQXNCO3FCQUN2QztpQkFDRjs7OzRCQUVFLEtBQUs7d0JBQ0wsS0FBSztpQ0FDTCxLQUFLO3VDQUNMLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7eUJBQ0wsS0FBSztvQ0FDTCxNQUFNOztJQTJCVCx3Q0FBQztDQUFBLEFBckVELElBcUVDO1NBcENZLGlDQUFpQzs7O0lBQzVDLHNEQUFnQzs7SUFDaEMsa0RBQTBDOztJQUMxQywyREFBOEQ7O0lBQzlELGlFQUFzQzs7SUFDdEMsaURBQTJDOztJQUMzQyxxREFBNEI7O0lBQzVCLHVEQUE0Qjs7SUFDNUIsbURBQXdCOztJQUN4Qiw4REFBbUU7O0lBTW5FLHdEQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNsaWRlTW90aW9uLCB6b29tQmlnTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpNZW51TW9kZVR5cGUsIE56TWVudVRoZW1lVHlwZSB9IGZyb20gJy4vbWVudS50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tuei1zdWJtZW51LW5vbmUtaW5saW5lLWNoaWxkXScsXG4gIGV4cG9ydEFzOiAnbnpTdWJtZW51Tm9uZUlubGluZUNoaWxkJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgYW5pbWF0aW9uczogW3pvb21CaWdNb3Rpb24sIHNsaWRlTW90aW9uXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgW2NsYXNzLmFudC1kcm9wZG93bi1tZW51XT1cImlzTWVudUluc2lkZURyb3BEb3duXCJcbiAgICAgIFtjbGFzcy5hbnQtbWVudV09XCIhaXNNZW51SW5zaWRlRHJvcERvd25cIlxuICAgICAgW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LXZlcnRpY2FsXT1cImlzTWVudUluc2lkZURyb3BEb3duXCJcbiAgICAgIFtjbGFzcy5hbnQtbWVudS12ZXJ0aWNhbF09XCIhaXNNZW51SW5zaWRlRHJvcERvd25cIlxuICAgICAgW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LXN1Yl09XCJpc01lbnVJbnNpZGVEcm9wRG93blwiXG4gICAgICBbY2xhc3MuYW50LW1lbnUtc3ViXT1cIiFpc01lbnVJbnNpZGVEcm9wRG93blwiXG4gICAgICBbbmdDbGFzc109XCJtZW51Q2xhc3NcIlxuICAgID5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZW1wbGF0ZU91dGxldFwiPjwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1tZW51LXN1Ym1lbnVdJzogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LW1lbnUtc3VibWVudS1wb3B1cF0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hbnQtbWVudS1saWdodF0nOiBcInRoZW1lID09PSAnbGlnaHQnXCIsXG4gICAgJ1tjbGFzcy5hbnQtbWVudS1kYXJrXSc6IFwidGhlbWUgPT09ICdkYXJrJ1wiLFxuICAgICdbY2xhc3MuYW50LW1lbnUtc3VibWVudS1wbGFjZW1lbnQtYm90dG9tXSc6IFwibW9kZSA9PT0gJ2hvcml6b250YWwnXCIsXG4gICAgJ1tjbGFzcy5hbnQtbWVudS1zdWJtZW51LXBsYWNlbWVudC1yaWdodF0nOiBcIm1vZGUgPT09ICd2ZXJ0aWNhbCcgJiYgcG9zaXRpb24gPT09ICdyaWdodCdcIixcbiAgICAnW2NsYXNzLmFudC1tZW51LXN1Ym1lbnUtcGxhY2VtZW50LWxlZnRdJzogXCJtb2RlID09PSAndmVydGljYWwnICYmIHBvc2l0aW9uID09PSAnbGVmdCdcIixcbiAgICAnW0BzbGlkZU1vdGlvbl0nOiAnZXhwYW5kU3RhdGUnLFxuICAgICdbQHpvb21CaWdNb3Rpb25dJzogJ2V4cGFuZFN0YXRlJyxcbiAgICAnKG1vdXNlZW50ZXIpJzogJ3NldE1vdXNlU3RhdGUodHJ1ZSknLFxuICAgICcobW91c2VsZWF2ZSknOiAnc2V0TW91c2VTdGF0ZShmYWxzZSknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpTdWJtZW51Tm9uZUlubGluZUNoaWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBtZW51Q2xhc3M6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSB0aGVtZTogTnpNZW51VGhlbWVUeXBlID0gJ2xpZ2h0JztcbiAgQElucHV0KCkgdGVtcGxhdGVPdXRsZXQ6IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgaXNNZW51SW5zaWRlRHJvcERvd24gPSBmYWxzZTtcbiAgQElucHV0KCkgbW9kZTogTnpNZW51TW9kZVR5cGUgPSAndmVydGljYWwnO1xuICBASW5wdXQoKSBwb3NpdGlvbiA9ICdyaWdodCc7XG4gIEBJbnB1dCgpIG56RGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpPcGVuID0gZmFsc2U7XG4gIEBPdXRwdXQoKSByZWFkb25seSBzdWJNZW51TW91c2VTdGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgc2V0TW91c2VTdGF0ZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5uekRpc2FibGVkKSB7XG4gICAgICB0aGlzLnN1Yk1lbnVNb3VzZVN0YXRlLm5leHQoc3RhdGUpO1xuICAgIH1cbiAgfVxuICBleHBhbmRTdGF0ZSA9ICdjb2xsYXBzZWQnO1xuICBjYWxjTW90aW9uU3RhdGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpPcGVuKSB7XG4gICAgICBpZiAodGhpcy5tb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgdGhpcy5leHBhbmRTdGF0ZSA9ICdib3R0b20nO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgdGhpcy5leHBhbmRTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmV4cGFuZFN0YXRlID0gJ2NvbGxhcHNlZCc7XG4gICAgfVxuICB9XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2FsY01vdGlvblN0YXRlKCk7XG4gIH1cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbW9kZSwgbnpPcGVuIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChtb2RlIHx8IG56T3Blbikge1xuICAgICAgdGhpcy5jYWxjTW90aW9uU3RhdGUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==