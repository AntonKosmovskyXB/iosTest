/**
 * @fileoverview added by tsickle
 * Generated from: option-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
var NzOptionItemComponent = /** @class */ (function () {
    function NzOptionItemComponent() {
        this.selected = false;
        this.activated = false;
        this.grouped = false;
        this.customContent = false;
        this.template = null;
        this.disabled = false;
        this.showState = false;
        this.label = null;
        this.value = null;
        this.activatedValue = null;
        this.listOfSelectedValue = [];
        this.icon = null;
        this.itemClick = new EventEmitter();
        this.itemHover = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NzOptionItemComponent.prototype.onHostMouseEnter = /**
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this.itemHover.next(this.value);
        }
    };
    /**
     * @return {?}
     */
    NzOptionItemComponent.prototype.onHostClick = /**
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this.itemClick.next(this.value);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzOptionItemComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        var value = changes.value, activatedValue = changes.activatedValue, listOfSelectedValue = changes.listOfSelectedValue;
        if (value || listOfSelectedValue) {
            this.selected = this.listOfSelectedValue.some((/**
             * @param {?} v
             * @return {?}
             */
            function (v) { return _this.compareWith(v, _this.value); }));
        }
        if (value || activatedValue) {
            this.activated = this.compareWith(this.activatedValue, this.value);
        }
    };
    NzOptionItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-option-item',
                    template: "\n    <div class=\"ant-select-item-option-content\">\n      <ng-container *ngIf=\"!customContent\">{{ label }}</ng-container>\n      <ng-container *ngIf=\"customContent\">\n        <ng-template [ngTemplateOutlet]=\"template\"></ng-template>\n      </ng-container>\n    </div>\n    <div *ngIf=\"showState && selected\" class=\"ant-select-item-option-state\" style=\"user-select: none\" unselectable=\"on\">\n      <i nz-icon nzType=\"check\" class=\"ant-select-selected-icon\" *ngIf=\"!icon; else icon\"></i>\n    </div>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.ant-select-item]': 'true',
                        '[class.ant-select-item-option]': 'true',
                        '[class.ant-select-item-option-grouped]': 'grouped',
                        '[class.ant-select-item-option-selected]': 'selected && !disabled',
                        '[class.ant-select-item-option-disabled]': 'disabled',
                        '[class.ant-select-item-option-active]': 'activated && !disabled',
                        '(mouseenter)': 'onHostMouseEnter()',
                        '(click)': 'onHostClick()'
                    }
                }] }
    ];
    NzOptionItemComponent.propDecorators = {
        grouped: [{ type: Input }],
        customContent: [{ type: Input }],
        template: [{ type: Input }],
        disabled: [{ type: Input }],
        showState: [{ type: Input }],
        label: [{ type: Input }],
        value: [{ type: Input }],
        activatedValue: [{ type: Input }],
        listOfSelectedValue: [{ type: Input }],
        icon: [{ type: Input }],
        compareWith: [{ type: Input }],
        itemClick: [{ type: Output }],
        itemHover: [{ type: Output }]
    };
    return NzOptionItemComponent;
}());
export { NzOptionItemComponent };
if (false) {
    /** @type {?} */
    NzOptionItemComponent.prototype.selected;
    /** @type {?} */
    NzOptionItemComponent.prototype.activated;
    /** @type {?} */
    NzOptionItemComponent.prototype.grouped;
    /** @type {?} */
    NzOptionItemComponent.prototype.customContent;
    /** @type {?} */
    NzOptionItemComponent.prototype.template;
    /** @type {?} */
    NzOptionItemComponent.prototype.disabled;
    /** @type {?} */
    NzOptionItemComponent.prototype.showState;
    /** @type {?} */
    NzOptionItemComponent.prototype.label;
    /** @type {?} */
    NzOptionItemComponent.prototype.value;
    /** @type {?} */
    NzOptionItemComponent.prototype.activatedValue;
    /** @type {?} */
    NzOptionItemComponent.prototype.listOfSelectedValue;
    /** @type {?} */
    NzOptionItemComponent.prototype.icon;
    /** @type {?} */
    NzOptionItemComponent.prototype.compareWith;
    /** @type {?} */
    NzOptionItemComponent.prototype.itemClick;
    /** @type {?} */
    NzOptionItemComponent.prototype.itemHover;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9zZWxlY3QvIiwic291cmNlcyI6WyJvcHRpb24taXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBR04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCO0lBQUE7UUEyQkUsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ1QsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixhQUFRLEdBQWtDLElBQUksQ0FBQztRQUMvQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsVUFBSyxHQUFrQixJQUFJLENBQUM7UUFDNUIsVUFBSyxHQUFxQixJQUFJLENBQUM7UUFDL0IsbUJBQWMsR0FBcUIsSUFBSSxDQUFDO1FBQ3hDLHdCQUFtQixHQUFnQixFQUFFLENBQUM7UUFDdEMsU0FBSSxHQUFrQyxJQUFJLENBQUM7UUFFakMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFDMUMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7SUFvQi9ELENBQUM7Ozs7SUFuQkMsZ0RBQWdCOzs7SUFBaEI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7O0lBQ0QsMkNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Ozs7SUFDRCwyQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFBbEMsaUJBUUM7UUFQUyxJQUFBLHFCQUFLLEVBQUUsdUNBQWMsRUFBRSxpREFBbUI7UUFDbEQsSUFBSSxLQUFLLElBQUksbUJBQW1CLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSTs7OztZQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxFQUEvQixDQUErQixFQUFDLENBQUM7U0FDckY7UUFDRCxJQUFJLEtBQUssSUFBSSxjQUFjLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BFO0lBQ0gsQ0FBQzs7Z0JBNURGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsNmdCQVVUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsSUFBSSxFQUFFO3dCQUNKLHlCQUF5QixFQUFFLE1BQU07d0JBQ2pDLGdDQUFnQyxFQUFFLE1BQU07d0JBQ3hDLHdDQUF3QyxFQUFFLFNBQVM7d0JBQ25ELHlDQUF5QyxFQUFFLHVCQUF1Qjt3QkFDbEUseUNBQXlDLEVBQUUsVUFBVTt3QkFDckQsdUNBQXVDLEVBQUUsd0JBQXdCO3dCQUNqRSxjQUFjLEVBQUUsb0JBQW9CO3dCQUNwQyxTQUFTLEVBQUUsZUFBZTtxQkFDM0I7aUJBQ0Y7OzswQkFJRSxLQUFLO2dDQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzRCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO2lDQUNMLEtBQUs7c0NBQ0wsS0FBSzt1QkFDTCxLQUFLOzhCQUNMLEtBQUs7NEJBQ0wsTUFBTTs0QkFDTixNQUFNOztJQW9CVCw0QkFBQztDQUFBLEFBN0RELElBNkRDO1NBbkNZLHFCQUFxQjs7O0lBQ2hDLHlDQUFpQjs7SUFDakIsMENBQWtCOztJQUNsQix3Q0FBeUI7O0lBQ3pCLDhDQUErQjs7SUFDL0IseUNBQXdEOztJQUN4RCx5Q0FBMEI7O0lBQzFCLDBDQUEyQjs7SUFDM0Isc0NBQXFDOztJQUNyQyxzQ0FBd0M7O0lBQ3hDLCtDQUFpRDs7SUFDakQsb0RBQStDOztJQUMvQyxxQ0FBb0Q7O0lBQ3BELDRDQUFpRTs7SUFDakUsMENBQTZEOztJQUM3RCwwQ0FBNkQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotb3B0aW9uLWl0ZW0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJhbnQtc2VsZWN0LWl0ZW0tb3B0aW9uLWNvbnRlbnRcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhY3VzdG9tQ29udGVudFwiPnt7IGxhYmVsIH19PC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY3VzdG9tQ29udGVudFwiPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwidGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiAqbmdJZj1cInNob3dTdGF0ZSAmJiBzZWxlY3RlZFwiIGNsYXNzPVwiYW50LXNlbGVjdC1pdGVtLW9wdGlvbi1zdGF0ZVwiIHN0eWxlPVwidXNlci1zZWxlY3Q6IG5vbmVcIiB1bnNlbGVjdGFibGU9XCJvblwiPlxuICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJjaGVja1wiIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3RlZC1pY29uXCIgKm5nSWY9XCIhaWNvbjsgZWxzZSBpY29uXCI+PC9pPlxuICAgIDwvZGl2PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXNlbGVjdC1pdGVtXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtaXRlbS1vcHRpb25dJzogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1pdGVtLW9wdGlvbi1ncm91cGVkXSc6ICdncm91cGVkJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtaXRlbS1vcHRpb24tc2VsZWN0ZWRdJzogJ3NlbGVjdGVkICYmICFkaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWl0ZW0tb3B0aW9uLWRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWl0ZW0tb3B0aW9uLWFjdGl2ZV0nOiAnYWN0aXZhdGVkICYmICFkaXNhYmxlZCcsXG4gICAgJyhtb3VzZWVudGVyKSc6ICdvbkhvc3RNb3VzZUVudGVyKCknLFxuICAgICcoY2xpY2spJzogJ29uSG9zdENsaWNrKCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpPcHRpb25JdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgc2VsZWN0ZWQgPSBmYWxzZTtcbiAgYWN0aXZhdGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGdyb3VwZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgY3VzdG9tQ29udGVudCA9IGZhbHNlO1xuICBASW5wdXQoKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93U3RhdGUgPSBmYWxzZTtcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSB2YWx1ZTogTnpTYWZlQW55IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGFjdGl2YXRlZFZhbHVlOiBOelNhZmVBbnkgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbGlzdE9mU2VsZWN0ZWRWYWx1ZTogTnpTYWZlQW55W10gPSBbXTtcbiAgQElucHV0KCkgaWNvbjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBjb21wYXJlV2l0aCE6IChvMTogTnpTYWZlQW55LCBvMjogTnpTYWZlQW55KSA9PiBib29sZWFuO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgaXRlbUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxOelNhZmVBbnk+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBpdGVtSG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPE56U2FmZUFueT4oKTtcbiAgb25Ib3N0TW91c2VFbnRlcigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaXRlbUhvdmVyLm5leHQodGhpcy52YWx1ZSk7XG4gICAgfVxuICB9XG4gIG9uSG9zdENsaWNrKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pdGVtQ2xpY2submV4dCh0aGlzLnZhbHVlKTtcbiAgICB9XG4gIH1cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgdmFsdWUsIGFjdGl2YXRlZFZhbHVlLCBsaXN0T2ZTZWxlY3RlZFZhbHVlIH0gPSBjaGFuZ2VzO1xuICAgIGlmICh2YWx1ZSB8fCBsaXN0T2ZTZWxlY3RlZFZhbHVlKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlLnNvbWUodiA9PiB0aGlzLmNvbXBhcmVXaXRoKHYsIHRoaXMudmFsdWUpKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlIHx8IGFjdGl2YXRlZFZhbHVlKSB7XG4gICAgICB0aGlzLmFjdGl2YXRlZCA9IHRoaXMuY29tcGFyZVdpdGgodGhpcy5hY3RpdmF0ZWRWYWx1ZSwgdGhpcy52YWx1ZSk7XG4gICAgfVxuICB9XG59XG4iXX0=