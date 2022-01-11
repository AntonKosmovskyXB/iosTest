/**
 * @fileoverview added by tsickle
 * Generated from: tree-indent.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export class NzTreeIndentComponent {
    constructor() {
        this.nzSelectMode = false;
        this.listOfUnit = [];
    }
    /**
     * @param {?} index
     * @return {?}
     */
    unitMapOfClass(index) {
        return {
            [`ant-tree-indent-unit`]: !this.nzSelectMode,
            [`ant-tree-indent-unit-start`]: !this.nzSelectMode && (/** @type {?} */ (this.nzIsStart))[index + 1],
            [`ant-tree-indent-unit-end`]: !this.nzSelectMode && (/** @type {?} */ (this.nzIsEnd))[index + 1],
            [`ant-select-tree-indent-unit`]: this.nzSelectMode,
            [`ant-select-tree-indent-unit-start`]: this.nzSelectMode && (/** @type {?} */ (this.nzIsStart))[index + 1],
            [`ant-select-tree-indent-unit-end`]: this.nzSelectMode && (/** @type {?} */ (this.nzIsEnd))[index + 1]
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzTreeLevel } = changes;
        if (nzTreeLevel) {
            this.listOfUnit = [...new Array(nzTreeLevel.currentValue || 0)];
        }
    }
}
NzTreeIndentComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tree-indent',
                exportAs: 'nzTreeIndent',
                template: ` <span *ngFor="let i of listOfUnit; let index = index" [ngClass]="unitMapOfClass(index)"></span> `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                host: {
                    '[attr.aria-hidden]': 'true',
                    '[class.ant-tree-indent]': '!nzSelectMode',
                    '[class.ant-select-tree-indent]': 'nzSelectMode'
                }
            }] }
];
NzTreeIndentComponent.propDecorators = {
    nzTreeLevel: [{ type: Input }],
    nzIsStart: [{ type: Input }],
    nzIsEnd: [{ type: Input }],
    nzSelectMode: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzTreeIndentComponent.prototype.nzTreeLevel;
    /** @type {?} */
    NzTreeIndentComponent.prototype.nzIsStart;
    /** @type {?} */
    NzTreeIndentComponent.prototype.nzIsEnd;
    /** @type {?} */
    NzTreeIndentComponent.prototype.nzSelectMode;
    /** @type {?} */
    NzTreeIndentComponent.prototype.listOfUnit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1pbmRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90cmVlLyIsInNvdXJjZXMiOlsidHJlZS1pbmRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQWM1RyxNQUFNLE9BQU8scUJBQXFCO0lBWmxDO1FBZ0JXLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBRTlCLGVBQVUsR0FBYSxFQUFFLENBQUM7SUFxQjVCLENBQUM7Ozs7O0lBbkJDLGNBQWMsQ0FBQyxLQUFhO1FBQzFCLE9BQU87WUFDTCxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWTtZQUM1QyxDQUFDLDRCQUE0QixDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLG1CQUFBLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2hGLENBQUMsMEJBQTBCLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksbUJBQUEsSUFBSSxDQUFDLE9BQU8sRUFBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDNUUsQ0FBQyw2QkFBNkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQ2xELENBQUMsbUNBQW1DLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxJQUFJLG1CQUFBLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ3RGLENBQUMsaUNBQWlDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxJQUFJLG1CQUFBLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQ25GLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsUUFBUSxLQUFVLENBQUM7Ozs7O0lBRW5CLFdBQVcsQ0FBQyxPQUFzQjtjQUMxQixFQUFFLFdBQVcsRUFBRSxHQUFHLE9BQU87UUFDL0IsSUFBSSxXQUFXLEVBQUU7WUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDakU7SUFDSCxDQUFDOzs7WUF0Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUUsbUdBQW1HO2dCQUM3RyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsSUFBSSxFQUFFO29CQUNKLG9CQUFvQixFQUFFLE1BQU07b0JBQzVCLHlCQUF5QixFQUFFLGVBQWU7b0JBQzFDLGdDQUFnQyxFQUFFLGNBQWM7aUJBQ2pEO2FBQ0Y7OzswQkFFRSxLQUFLO3dCQUNMLEtBQUs7c0JBQ0wsS0FBSzsyQkFDTCxLQUFLOzs7O0lBSE4sNENBQThCOztJQUM5QiwwQ0FBK0I7O0lBQy9CLHdDQUE2Qjs7SUFDN0IsNkNBQThCOztJQUU5QiwyQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotdHJlZS1pbmRlbnQnLFxuICBleHBvcnRBczogJ256VHJlZUluZGVudCcsXG4gIHRlbXBsYXRlOiBgIDxzcGFuICpuZ0Zvcj1cImxldCBpIG9mIGxpc3RPZlVuaXQ7IGxldCBpbmRleCA9IGluZGV4XCIgW25nQ2xhc3NdPVwidW5pdE1hcE9mQ2xhc3MoaW5kZXgpXCI+PC9zcGFuPiBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGhvc3Q6IHtcbiAgICAnW2F0dHIuYXJpYS1oaWRkZW5dJzogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LXRyZWUtaW5kZW50XSc6ICchbnpTZWxlY3RNb2RlJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtdHJlZS1pbmRlbnRdJzogJ256U2VsZWN0TW9kZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelRyZWVJbmRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG56VHJlZUxldmVsPzogbnVtYmVyO1xuICBASW5wdXQoKSBueklzU3RhcnQ/OiBib29sZWFuW107XG4gIEBJbnB1dCgpIG56SXNFbmQ/OiBib29sZWFuW107XG4gIEBJbnB1dCgpIG56U2VsZWN0TW9kZSA9IGZhbHNlO1xuXG4gIGxpc3RPZlVuaXQ6IG51bWJlcltdID0gW107XG5cbiAgdW5pdE1hcE9mQ2xhc3MoaW5kZXg6IG51bWJlcik6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgW2BhbnQtdHJlZS1pbmRlbnQtdW5pdGBdOiAhdGhpcy5uelNlbGVjdE1vZGUsXG4gICAgICBbYGFudC10cmVlLWluZGVudC11bml0LXN0YXJ0YF06ICF0aGlzLm56U2VsZWN0TW9kZSAmJiB0aGlzLm56SXNTdGFydCFbaW5kZXggKyAxXSxcbiAgICAgIFtgYW50LXRyZWUtaW5kZW50LXVuaXQtZW5kYF06ICF0aGlzLm56U2VsZWN0TW9kZSAmJiB0aGlzLm56SXNFbmQhW2luZGV4ICsgMV0sXG4gICAgICBbYGFudC1zZWxlY3QtdHJlZS1pbmRlbnQtdW5pdGBdOiB0aGlzLm56U2VsZWN0TW9kZSxcbiAgICAgIFtgYW50LXNlbGVjdC10cmVlLWluZGVudC11bml0LXN0YXJ0YF06IHRoaXMubnpTZWxlY3RNb2RlICYmIHRoaXMubnpJc1N0YXJ0IVtpbmRleCArIDFdLFxuICAgICAgW2BhbnQtc2VsZWN0LXRyZWUtaW5kZW50LXVuaXQtZW5kYF06IHRoaXMubnpTZWxlY3RNb2RlICYmIHRoaXMubnpJc0VuZCFbaW5kZXggKyAxXVxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpUcmVlTGV2ZWwgfSA9IGNoYW5nZXM7XG4gICAgaWYgKG56VHJlZUxldmVsKSB7XG4gICAgICB0aGlzLmxpc3RPZlVuaXQgPSBbLi4ubmV3IEFycmF5KG56VHJlZUxldmVsLmN1cnJlbnRWYWx1ZSB8fCAwKV07XG4gICAgfVxuICB9XG59XG4iXX0=