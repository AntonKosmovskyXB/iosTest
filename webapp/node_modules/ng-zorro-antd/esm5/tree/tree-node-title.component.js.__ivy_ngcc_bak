/**
 * @fileoverview added by tsickle
 * Generated from: tree-node-title.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NzTreeNode } from 'ng-zorro-antd/core/tree';
var NzTreeNodeTitleComponent = /** @class */ (function () {
    function NzTreeNodeTitleComponent() {
        this.treeTemplate = null;
        this.selectMode = false;
    }
    Object.defineProperty(NzTreeNodeTitleComponent.prototype, "canDraggable", {
        get: /**
         * @return {?}
         */
        function () {
            return this.draggable && !this.isDisabled ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeTitleComponent.prototype, "matchedValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isMatched ? this.searchValue : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeTitleComponent.prototype, "isSwitcherOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isExpanded && !this.isLeaf;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeTitleComponent.prototype, "isSwitcherClose", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.isExpanded && !this.isLeaf;
        },
        enumerable: true,
        configurable: true
    });
    NzTreeNodeTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-tree-node-title',
                    template: " <ng-template [ngTemplateOutlet]=\"treeTemplate\" [ngTemplateOutletContext]=\"{ $implicit: context, origin: context.origin }\">\n    </ng-template>\n    <ng-container *ngIf=\"!treeTemplate\">\n      <span\n        *ngIf=\"icon && showIcon\"\n        [class.ant-tree-icon__open]=\"isSwitcherOpen\"\n        [class.ant-tree-icon__close]=\"isSwitcherClose\"\n        [class.ant-tree-icon_loading]=\"isLoading\"\n        [class.ant-select-tree-iconEle]=\"selectMode\"\n        [class.ant-tree-iconEle]=\"!selectMode\"\n      >\n        <span\n          [class.ant-select-tree-iconEle]=\"selectMode\"\n          [class.ant-select-tree-icon__customize]=\"selectMode\"\n          [class.ant-tree-iconEle]=\"!selectMode\"\n          [class.ant-tree-icon__customize]=\"!selectMode\"\n        >\n          <i nz-icon *ngIf=\"icon\" [nzType]=\"icon\"></i>\n        </span>\n      </span>\n      <span class=\"ant-tree-title\" [innerHTML]=\"title | nzHighlight: matchedValue:'i':'font-highlight'\"> </span>\n    </ng-container>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    host: {
                        '[attr.title]': 'title',
                        '[attr.draggable]': 'canDraggable',
                        '[attr.aria-grabbed]': 'canDraggable',
                        '[class.draggable]': 'canDraggable',
                        '[class.ant-select-tree-node-content-wrapper]': "selectMode",
                        '[class.ant-select-tree-node-content-wrapper-open]': "selectMode && isSwitcherOpen",
                        '[class.ant-select-tree-node-content-wrapper-close]': "selectMode && isSwitcherClose",
                        '[class.ant-select-tree-node-selected]': "selectMode && isSelected",
                        '[class.ant-tree-node-content-wrapper]': "!selectMode",
                        '[class.ant-tree-node-content-wrapper-open]': "!selectMode && isSwitcherOpen",
                        '[class.ant-tree-node-content-wrapper-close]': "!selectMode && isSwitcherClose",
                        '[class.ant-tree-node-selected]': "!selectMode && isSelected"
                    }
                }] }
    ];
    NzTreeNodeTitleComponent.propDecorators = {
        searchValue: [{ type: Input }],
        treeTemplate: [{ type: Input }],
        draggable: [{ type: Input }],
        showIcon: [{ type: Input }],
        selectMode: [{ type: Input }],
        context: [{ type: Input }],
        icon: [{ type: Input }],
        title: [{ type: Input }],
        isLoading: [{ type: Input }],
        isSelected: [{ type: Input }],
        isDisabled: [{ type: Input }],
        isMatched: [{ type: Input }],
        isExpanded: [{ type: Input }],
        isLeaf: [{ type: Input }]
    };
    return NzTreeNodeTitleComponent;
}());
export { NzTreeNodeTitleComponent };
if (false) {
    /** @type {?} */
    NzTreeNodeTitleComponent.prototype.searchValue;
    /** @type {?} */
    NzTreeNodeTitleComponent.prototype.treeTemplate;
    /** @type {?} */
    NzTreeNodeTitleComponent.prototype.draggable;
    /** @type {?} */
    NzTreeNodeTitleComponent.prototype.showIcon;
    /** @type {?} */
    NzTreeNodeTitleComponent.prototype.selectMode;
    /** @type {?} */
    NzTreeNodeTitleComponent.prototype.context;
    /** @type {?} */
    NzTreeNodeTitleComponent.prototype.icon;
    /** @type {?} */
    NzTreeNodeTitleComponent.prototype.title;
    /** @type {?} */
    NzTreeNodeTitleComponent.prototype.isLoading;
    /** @type {?} */
    NzTreeNodeTitleComponent.prototype.isSelected;
    /** @type {?} */
    NzTreeNodeTitleComponent.prototype.isDisabled;
    /** @type {?} */
    NzTreeNodeTitleComponent.prototype.isMatched;
    /** @type {?} */
    NzTreeNodeTitleComponent.prototype.isExpanded;
    /** @type {?} */
    NzTreeNodeTitleComponent.prototype.isLeaf;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLXRpdGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdHJlZS8iLCJzb3VyY2VzIjpbInRyZWUtbm9kZS10aXRsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFFLFVBQVUsRUFBcUIsTUFBTSx5QkFBeUIsQ0FBQztBQUV4RTtJQUFBO1FBMkNXLGlCQUFZLEdBQTZFLElBQUksQ0FBQztRQUc5RixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBMEI5QixDQUFDO0lBZkMsc0JBQUksa0RBQVk7Ozs7UUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMxRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGtEQUFZOzs7O1FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDaEQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxvREFBYzs7OztRQUFsQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxxREFBZTs7OztRQUFuQjtZQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTs7Z0JBdkVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUseS9CQXFCUTtvQkFDbEIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLElBQUksRUFBRTt3QkFDSixjQUFjLEVBQUUsT0FBTzt3QkFDdkIsa0JBQWtCLEVBQUUsY0FBYzt3QkFDbEMscUJBQXFCLEVBQUUsY0FBYzt3QkFDckMsbUJBQW1CLEVBQUUsY0FBYzt3QkFDbkMsOENBQThDLEVBQUUsWUFBWTt3QkFDNUQsbURBQW1ELEVBQUUsOEJBQThCO3dCQUNuRixvREFBb0QsRUFBRSwrQkFBK0I7d0JBQ3JGLHVDQUF1QyxFQUFFLDBCQUEwQjt3QkFDbkUsdUNBQXVDLEVBQUUsYUFBYTt3QkFDdEQsNENBQTRDLEVBQUUsK0JBQStCO3dCQUM3RSw2Q0FBNkMsRUFBRSxnQ0FBZ0M7d0JBQy9FLGdDQUFnQyxFQUFFLDJCQUEyQjtxQkFDOUQ7aUJBQ0Y7Ozs4QkFFRSxLQUFLOytCQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsS0FBSzs2QkFDTCxLQUFLOzZCQUNMLEtBQUs7NEJBQ0wsS0FBSzs2QkFDTCxLQUFLO3lCQUNMLEtBQUs7O0lBaUJSLCtCQUFDO0NBQUEsQUF4RUQsSUF3RUM7U0EvQlksd0JBQXdCOzs7SUFDbkMsK0NBQThCOztJQUM5QixnREFBdUc7O0lBQ3ZHLDZDQUE2Qjs7SUFDN0IsNENBQTRCOztJQUM1Qiw4Q0FBNEI7O0lBQzVCLDJDQUE4Qjs7SUFDOUIsd0NBQXVCOztJQUN2Qix5Q0FBd0I7O0lBQ3hCLDZDQUE2Qjs7SUFDN0IsOENBQThCOztJQUM5Qiw4Q0FBOEI7O0lBQzlCLDZDQUE2Qjs7SUFDN0IsOENBQThCOztJQUM5QiwwQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56VHJlZU5vZGUsIE56VHJlZU5vZGVPcHRpb25zIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3RyZWUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei10cmVlLW5vZGUtdGl0bGUnLFxuICB0ZW1wbGF0ZTogYCA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwidHJlZVRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBjb250ZXh0LCBvcmlnaW46IGNvbnRleHQub3JpZ2luIH1cIj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhdHJlZVRlbXBsYXRlXCI+XG4gICAgICA8c3BhblxuICAgICAgICAqbmdJZj1cImljb24gJiYgc2hvd0ljb25cIlxuICAgICAgICBbY2xhc3MuYW50LXRyZWUtaWNvbl9fb3Blbl09XCJpc1N3aXRjaGVyT3BlblwiXG4gICAgICAgIFtjbGFzcy5hbnQtdHJlZS1pY29uX19jbG9zZV09XCJpc1N3aXRjaGVyQ2xvc2VcIlxuICAgICAgICBbY2xhc3MuYW50LXRyZWUtaWNvbl9sb2FkaW5nXT1cImlzTG9hZGluZ1wiXG4gICAgICAgIFtjbGFzcy5hbnQtc2VsZWN0LXRyZWUtaWNvbkVsZV09XCJzZWxlY3RNb2RlXCJcbiAgICAgICAgW2NsYXNzLmFudC10cmVlLWljb25FbGVdPVwiIXNlbGVjdE1vZGVcIlxuICAgICAgPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIFtjbGFzcy5hbnQtc2VsZWN0LXRyZWUtaWNvbkVsZV09XCJzZWxlY3RNb2RlXCJcbiAgICAgICAgICBbY2xhc3MuYW50LXNlbGVjdC10cmVlLWljb25fX2N1c3RvbWl6ZV09XCJzZWxlY3RNb2RlXCJcbiAgICAgICAgICBbY2xhc3MuYW50LXRyZWUtaWNvbkVsZV09XCIhc2VsZWN0TW9kZVwiXG4gICAgICAgICAgW2NsYXNzLmFudC10cmVlLWljb25fX2N1c3RvbWl6ZV09XCIhc2VsZWN0TW9kZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8aSBuei1pY29uICpuZ0lmPVwiaWNvblwiIFtuelR5cGVdPVwiaWNvblwiPjwvaT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtdHJlZS10aXRsZVwiIFtpbm5lckhUTUxdPVwidGl0bGUgfCBuekhpZ2hsaWdodDogbWF0Y2hlZFZhbHVlOidpJzonZm9udC1oaWdobGlnaHQnXCI+IDwvc3Bhbj5cbiAgICA8L25nLWNvbnRhaW5lcj5gLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGhvc3Q6IHtcbiAgICAnW2F0dHIudGl0bGVdJzogJ3RpdGxlJyxcbiAgICAnW2F0dHIuZHJhZ2dhYmxlXSc6ICdjYW5EcmFnZ2FibGUnLFxuICAgICdbYXR0ci5hcmlhLWdyYWJiZWRdJzogJ2NhbkRyYWdnYWJsZScsXG4gICAgJ1tjbGFzcy5kcmFnZ2FibGVdJzogJ2NhbkRyYWdnYWJsZScsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXRyZWUtbm9kZS1jb250ZW50LXdyYXBwZXJdJzogYHNlbGVjdE1vZGVgLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC10cmVlLW5vZGUtY29udGVudC13cmFwcGVyLW9wZW5dJzogYHNlbGVjdE1vZGUgJiYgaXNTd2l0Y2hlck9wZW5gLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC10cmVlLW5vZGUtY29udGVudC13cmFwcGVyLWNsb3NlXSc6IGBzZWxlY3RNb2RlICYmIGlzU3dpdGNoZXJDbG9zZWAsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXRyZWUtbm9kZS1zZWxlY3RlZF0nOiBgc2VsZWN0TW9kZSAmJiBpc1NlbGVjdGVkYCxcbiAgICAnW2NsYXNzLmFudC10cmVlLW5vZGUtY29udGVudC13cmFwcGVyXSc6IGAhc2VsZWN0TW9kZWAsXG4gICAgJ1tjbGFzcy5hbnQtdHJlZS1ub2RlLWNvbnRlbnQtd3JhcHBlci1vcGVuXSc6IGAhc2VsZWN0TW9kZSAmJiBpc1N3aXRjaGVyT3BlbmAsXG4gICAgJ1tjbGFzcy5hbnQtdHJlZS1ub2RlLWNvbnRlbnQtd3JhcHBlci1jbG9zZV0nOiBgIXNlbGVjdE1vZGUgJiYgaXNTd2l0Y2hlckNsb3NlYCxcbiAgICAnW2NsYXNzLmFudC10cmVlLW5vZGUtc2VsZWN0ZWRdJzogYCFzZWxlY3RNb2RlICYmIGlzU2VsZWN0ZWRgXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpUcmVlTm9kZVRpdGxlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgc2VhcmNoVmFsdWUhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRyZWVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGU7IG9yaWdpbjogTnpUcmVlTm9kZU9wdGlvbnMgfT4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgZHJhZ2dhYmxlITogYm9vbGVhbjtcbiAgQElucHV0KCkgc2hvd0ljb24hOiBib29sZWFuO1xuICBASW5wdXQoKSBzZWxlY3RNb2RlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNvbnRleHQhOiBOelRyZWVOb2RlO1xuICBASW5wdXQoKSBpY29uITogc3RyaW5nO1xuICBASW5wdXQoKSB0aXRsZSE6IHN0cmluZztcbiAgQElucHV0KCkgaXNMb2FkaW5nITogYm9vbGVhbjtcbiAgQElucHV0KCkgaXNTZWxlY3RlZCE6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQhOiBib29sZWFuO1xuICBASW5wdXQoKSBpc01hdGNoZWQhOiBib29sZWFuO1xuICBASW5wdXQoKSBpc0V4cGFuZGVkITogYm9vbGVhbjtcbiAgQElucHV0KCkgaXNMZWFmITogYm9vbGVhbjtcblxuICBnZXQgY2FuRHJhZ2dhYmxlKCk6IGJvb2xlYW4gfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGUgJiYgIXRoaXMuaXNEaXNhYmxlZCA/IHRydWUgOiBudWxsO1xuICB9XG5cbiAgZ2V0IG1hdGNoZWRWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmlzTWF0Y2hlZCA/IHRoaXMuc2VhcmNoVmFsdWUgOiAnJztcbiAgfVxuXG4gIGdldCBpc1N3aXRjaGVyT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0V4cGFuZGVkICYmICF0aGlzLmlzTGVhZjtcbiAgfVxuXG4gIGdldCBpc1N3aXRjaGVyQ2xvc2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmlzRXhwYW5kZWQgJiYgIXRoaXMuaXNMZWFmO1xuICB9XG59XG4iXX0=