/**
 * @fileoverview added by tsickle
 * Generated from: tree-node-switcher.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
import { NzTreeNode } from 'ng-zorro-antd/core/tree';
export class NzTreeNodeSwitcherComponent {
    constructor() {
        this.nzSelectMode = false;
    }
    /**
     * @return {?}
     */
    get isShowLineIcon() {
        return !this.isLeaf && !!this.nzShowLine;
    }
    /**
     * @return {?}
     */
    get isShowSwitchIcon() {
        return !this.isLeaf && !this.nzShowLine;
    }
    /**
     * @return {?}
     */
    get isSwitcherOpen() {
        return !!this.isExpanded && !this.isLeaf;
    }
    /**
     * @return {?}
     */
    get isSwitcherClose() {
        return !this.isExpanded && !this.isLeaf;
    }
}
NzTreeNodeSwitcherComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tree-node-switcher',
                template: `
    <ng-container *ngIf="isShowSwitchIcon">
      <ng-container *ngIf="!isLoading; else loadingTemplate">
        <ng-container *nzStringTemplateOutlet="nzExpandedIcon; context: { $implicit: context, origin: context.origin }">
          <i
            nz-icon
            nzType="caret-down"
            [class.ant-select-tree-switcher-icon]="nzSelectMode"
            [class.ant-tree-switcher-icon]="!nzSelectMode"
          ></i>
        </ng-container>
      </ng-container>
    </ng-container>
    <ng-container *ngIf="nzShowLine">
      <ng-container *ngIf="!isLoading; else loadingTemplate">
        <ng-container *nzStringTemplateOutlet="nzExpandedIcon; context: { $implicit: context, origin: context.origin }">
          <i
            *ngIf="isShowLineIcon"
            nz-icon
            [nzType]="isSwitcherOpen ? 'minus-square' : 'plus-square'"
            class="ant-tree-switcher-line-icon"
          ></i>
          <i *ngIf="!isShowLineIcon" nz-icon nzType="file" class="ant-tree-switcher-line-icon"></i>
        </ng-container>
      </ng-container>
    </ng-container>
    <ng-template #loadingTemplate>
      <i nz-icon nzType="loading" [nzSpin]="true" class="ant-tree-switcher-loading-icon"></i>
    </ng-template>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                host: {
                    '[class.ant-select-tree-switcher]': 'nzSelectMode',
                    '[class.ant-select-tree-switcher-noop]': 'nzSelectMode && isLeaf',
                    '[class.ant-select-tree-switcher_open]': 'nzSelectMode && isSwitcherOpen',
                    '[class.ant-select-tree-switcher_close]': 'nzSelectMode && isSwitcherClose',
                    '[class.ant-tree-switcher]': '!nzSelectMode',
                    '[class.ant-tree-switcher-noop]': '!nzSelectMode && isLeaf',
                    '[class.ant-tree-switcher_open]': '!nzSelectMode && isSwitcherOpen',
                    '[class.ant-tree-switcher_close]': '!nzSelectMode && isSwitcherClose'
                }
            }] }
];
NzTreeNodeSwitcherComponent.propDecorators = {
    nzShowExpand: [{ type: Input }],
    nzShowLine: [{ type: Input }],
    nzExpandedIcon: [{ type: Input }],
    nzSelectMode: [{ type: Input }],
    context: [{ type: Input }],
    isLeaf: [{ type: Input }],
    isLoading: [{ type: Input }],
    isExpanded: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzTreeNodeSwitcherComponent.prototype.nzShowExpand;
    /** @type {?} */
    NzTreeNodeSwitcherComponent.prototype.nzShowLine;
    /** @type {?} */
    NzTreeNodeSwitcherComponent.prototype.nzExpandedIcon;
    /** @type {?} */
    NzTreeNodeSwitcherComponent.prototype.nzSelectMode;
    /** @type {?} */
    NzTreeNodeSwitcherComponent.prototype.context;
    /** @type {?} */
    NzTreeNodeSwitcherComponent.prototype.isLeaf;
    /** @type {?} */
    NzTreeNodeSwitcherComponent.prototype.isLoading;
    /** @type {?} */
    NzTreeNodeSwitcherComponent.prototype.isExpanded;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLXN3aXRjaGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdHJlZS8iLCJzb3VyY2VzIjpbInRyZWUtbm9kZS1zd2l0Y2hlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxVQUFVLEVBQXFCLE1BQU0seUJBQXlCLENBQUM7QUErQ3hFLE1BQU0sT0FBTywyQkFBMkI7SUE3Q3hDO1FBaURXLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBcUJoQyxDQUFDOzs7O0lBZkMsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxJQUFJLGdCQUFnQjtRQUNsQixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELElBQUksY0FBYztRQUNoQixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMzQyxDQUFDOzs7O0lBRUQsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMxQyxDQUFDOzs7WUFyRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E2QlQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLElBQUksRUFBRTtvQkFDSixrQ0FBa0MsRUFBRSxjQUFjO29CQUNsRCx1Q0FBdUMsRUFBRSx3QkFBd0I7b0JBQ2pFLHVDQUF1QyxFQUFFLGdDQUFnQztvQkFDekUsd0NBQXdDLEVBQUUsaUNBQWlDO29CQUMzRSwyQkFBMkIsRUFBRSxlQUFlO29CQUM1QyxnQ0FBZ0MsRUFBRSx5QkFBeUI7b0JBQzNELGdDQUFnQyxFQUFFLGlDQUFpQztvQkFDbkUsaUNBQWlDLEVBQUUsa0NBQWtDO2lCQUN0RTthQUNGOzs7MkJBRUUsS0FBSzt5QkFDTCxLQUFLOzZCQUNMLEtBQUs7MkJBQ0wsS0FBSztzQkFDTCxLQUFLO3FCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzs7O0lBUE4sbURBQWdDOztJQUNoQyxpREFBOEI7O0lBQzlCLHFEQUE0Rjs7SUFDNUYsbURBQThCOztJQUM5Qiw4Q0FBOEI7O0lBQzlCLDZDQUEwQjs7SUFDMUIsZ0RBQTZCOztJQUM3QixpREFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56VHJlZU5vZGUsIE56VHJlZU5vZGVPcHRpb25zIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3RyZWUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei10cmVlLW5vZGUtc3dpdGNoZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc1Nob3dTd2l0Y2hJY29uXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzTG9hZGluZzsgZWxzZSBsb2FkaW5nVGVtcGxhdGVcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56RXhwYW5kZWRJY29uOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY29udGV4dCwgb3JpZ2luOiBjb250ZXh0Lm9yaWdpbiB9XCI+XG4gICAgICAgICAgPGlcbiAgICAgICAgICAgIG56LWljb25cbiAgICAgICAgICAgIG56VHlwZT1cImNhcmV0LWRvd25cIlxuICAgICAgICAgICAgW2NsYXNzLmFudC1zZWxlY3QtdHJlZS1zd2l0Y2hlci1pY29uXT1cIm56U2VsZWN0TW9kZVwiXG4gICAgICAgICAgICBbY2xhc3MuYW50LXRyZWUtc3dpdGNoZXItaWNvbl09XCIhbnpTZWxlY3RNb2RlXCJcbiAgICAgICAgICA+PC9pPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuelNob3dMaW5lXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzTG9hZGluZzsgZWxzZSBsb2FkaW5nVGVtcGxhdGVcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56RXhwYW5kZWRJY29uOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY29udGV4dCwgb3JpZ2luOiBjb250ZXh0Lm9yaWdpbiB9XCI+XG4gICAgICAgICAgPGlcbiAgICAgICAgICAgICpuZ0lmPVwiaXNTaG93TGluZUljb25cIlxuICAgICAgICAgICAgbnotaWNvblxuICAgICAgICAgICAgW256VHlwZV09XCJpc1N3aXRjaGVyT3BlbiA/ICdtaW51cy1zcXVhcmUnIDogJ3BsdXMtc3F1YXJlJ1wiXG4gICAgICAgICAgICBjbGFzcz1cImFudC10cmVlLXN3aXRjaGVyLWxpbmUtaWNvblwiXG4gICAgICAgICAgPjwvaT5cbiAgICAgICAgICA8aSAqbmdJZj1cIiFpc1Nob3dMaW5lSWNvblwiIG56LWljb24gbnpUeXBlPVwiZmlsZVwiIGNsYXNzPVwiYW50LXRyZWUtc3dpdGNoZXItbGluZS1pY29uXCI+PC9pPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy10ZW1wbGF0ZSAjbG9hZGluZ1RlbXBsYXRlPlxuICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJsb2FkaW5nXCIgW256U3Bpbl09XCJ0cnVlXCIgY2xhc3M9XCJhbnQtdHJlZS1zd2l0Y2hlci1sb2FkaW5nLWljb25cIj48L2k+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXRyZWUtc3dpdGNoZXJdJzogJ256U2VsZWN0TW9kZScsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXRyZWUtc3dpdGNoZXItbm9vcF0nOiAnbnpTZWxlY3RNb2RlICYmIGlzTGVhZicsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXRyZWUtc3dpdGNoZXJfb3Blbl0nOiAnbnpTZWxlY3RNb2RlICYmIGlzU3dpdGNoZXJPcGVuJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtdHJlZS1zd2l0Y2hlcl9jbG9zZV0nOiAnbnpTZWxlY3RNb2RlICYmIGlzU3dpdGNoZXJDbG9zZScsXG4gICAgJ1tjbGFzcy5hbnQtdHJlZS1zd2l0Y2hlcl0nOiAnIW56U2VsZWN0TW9kZScsXG4gICAgJ1tjbGFzcy5hbnQtdHJlZS1zd2l0Y2hlci1ub29wXSc6ICchbnpTZWxlY3RNb2RlICYmIGlzTGVhZicsXG4gICAgJ1tjbGFzcy5hbnQtdHJlZS1zd2l0Y2hlcl9vcGVuXSc6ICchbnpTZWxlY3RNb2RlICYmIGlzU3dpdGNoZXJPcGVuJyxcbiAgICAnW2NsYXNzLmFudC10cmVlLXN3aXRjaGVyX2Nsb3NlXSc6ICchbnpTZWxlY3RNb2RlICYmIGlzU3dpdGNoZXJDbG9zZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelRyZWVOb2RlU3dpdGNoZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBuelNob3dFeHBhbmQ/OiBib29sZWFuO1xuICBASW5wdXQoKSBuelNob3dMaW5lPzogYm9vbGVhbjtcbiAgQElucHV0KCkgbnpFeHBhbmRlZEljb24/OiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZTsgb3JpZ2luOiBOelRyZWVOb2RlT3B0aW9ucyB9PjtcbiAgQElucHV0KCkgbnpTZWxlY3RNb2RlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNvbnRleHQhOiBOelRyZWVOb2RlO1xuICBASW5wdXQoKSBpc0xlYWY/OiBib29sZWFuO1xuICBASW5wdXQoKSBpc0xvYWRpbmc/OiBib29sZWFuO1xuICBASW5wdXQoKSBpc0V4cGFuZGVkPzogYm9vbGVhbjtcblxuICBnZXQgaXNTaG93TGluZUljb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmlzTGVhZiAmJiAhIXRoaXMubnpTaG93TGluZTtcbiAgfVxuXG4gIGdldCBpc1Nob3dTd2l0Y2hJY29uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5pc0xlYWYgJiYgIXRoaXMubnpTaG93TGluZTtcbiAgfVxuXG4gIGdldCBpc1N3aXRjaGVyT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLmlzRXhwYW5kZWQgJiYgIXRoaXMuaXNMZWFmO1xuICB9XG5cbiAgZ2V0IGlzU3dpdGNoZXJDbG9zZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuaXNFeHBhbmRlZCAmJiAhdGhpcy5pc0xlYWY7XG4gIH1cbn1cbiJdfQ==