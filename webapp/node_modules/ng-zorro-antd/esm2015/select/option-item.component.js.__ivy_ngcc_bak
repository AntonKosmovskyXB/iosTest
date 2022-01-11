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
export class NzOptionItemComponent {
    constructor() {
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
    onHostMouseEnter() {
        if (!this.disabled) {
            this.itemHover.next(this.value);
        }
    }
    /**
     * @return {?}
     */
    onHostClick() {
        if (!this.disabled) {
            this.itemClick.next(this.value);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { value, activatedValue, listOfSelectedValue } = changes;
        if (value || listOfSelectedValue) {
            this.selected = this.listOfSelectedValue.some((/**
             * @param {?} v
             * @return {?}
             */
            v => this.compareWith(v, this.value)));
        }
        if (value || activatedValue) {
            this.activated = this.compareWith(this.activatedValue, this.value);
        }
    }
}
NzOptionItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-option-item',
                template: `
    <div class="ant-select-item-option-content">
      <ng-container *ngIf="!customContent">{{ label }}</ng-container>
      <ng-container *ngIf="customContent">
        <ng-template [ngTemplateOutlet]="template"></ng-template>
      </ng-container>
    </div>
    <div *ngIf="showState && selected" class="ant-select-item-option-state" style="user-select: none" unselectable="on">
      <i nz-icon nzType="check" class="ant-select-selected-icon" *ngIf="!icon; else icon"></i>
    </div>
  `,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9zZWxlY3QvIiwic291cmNlcyI6WyJvcHRpb24taXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBR04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBNkJ2QixNQUFNLE9BQU8scUJBQXFCO0lBMUJsQztRQTJCRSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDVCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGFBQVEsR0FBa0MsSUFBSSxDQUFDO1FBQy9DLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixVQUFLLEdBQWtCLElBQUksQ0FBQztRQUM1QixVQUFLLEdBQXFCLElBQUksQ0FBQztRQUMvQixtQkFBYyxHQUFxQixJQUFJLENBQUM7UUFDeEMsd0JBQW1CLEdBQWdCLEVBQUUsQ0FBQztRQUN0QyxTQUFJLEdBQWtDLElBQUksQ0FBQztRQUVqQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUMxQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztJQW9CL0QsQ0FBQzs7OztJQW5CQyxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7O0lBQ0QsV0FBVztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7Ozs7O0lBQ0QsV0FBVyxDQUFDLE9BQXNCO2NBQzFCLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxtQkFBbUIsRUFBRSxHQUFHLE9BQU87UUFDOUQsSUFBSSxLQUFLLElBQUksbUJBQW1CLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSTs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUM7U0FDckY7UUFDRCxJQUFJLEtBQUssSUFBSSxjQUFjLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BFO0lBQ0gsQ0FBQzs7O1lBNURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7R0FVVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLElBQUksRUFBRTtvQkFDSix5QkFBeUIsRUFBRSxNQUFNO29CQUNqQyxnQ0FBZ0MsRUFBRSxNQUFNO29CQUN4Qyx3Q0FBd0MsRUFBRSxTQUFTO29CQUNuRCx5Q0FBeUMsRUFBRSx1QkFBdUI7b0JBQ2xFLHlDQUF5QyxFQUFFLFVBQVU7b0JBQ3JELHVDQUF1QyxFQUFFLHdCQUF3QjtvQkFDakUsY0FBYyxFQUFFLG9CQUFvQjtvQkFDcEMsU0FBUyxFQUFFLGVBQWU7aUJBQzNCO2FBQ0Y7OztzQkFJRSxLQUFLOzRCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxLQUFLOzZCQUNMLEtBQUs7a0NBQ0wsS0FBSzttQkFDTCxLQUFLOzBCQUNMLEtBQUs7d0JBQ0wsTUFBTTt3QkFDTixNQUFNOzs7O0lBZFAseUNBQWlCOztJQUNqQiwwQ0FBa0I7O0lBQ2xCLHdDQUF5Qjs7SUFDekIsOENBQStCOztJQUMvQix5Q0FBd0Q7O0lBQ3hELHlDQUEwQjs7SUFDMUIsMENBQTJCOztJQUMzQixzQ0FBcUM7O0lBQ3JDLHNDQUF3Qzs7SUFDeEMsK0NBQWlEOztJQUNqRCxvREFBK0M7O0lBQy9DLHFDQUFvRDs7SUFDcEQsNENBQWlFOztJQUNqRSwwQ0FBNkQ7O0lBQzdELDBDQUE2RCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1vcHRpb24taXRlbScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImFudC1zZWxlY3QtaXRlbS1vcHRpb24tY29udGVudFwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjdXN0b21Db250ZW50XCI+e3sgbGFiZWwgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjdXN0b21Db250ZW50XCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2ICpuZ0lmPVwic2hvd1N0YXRlICYmIHNlbGVjdGVkXCIgY2xhc3M9XCJhbnQtc2VsZWN0LWl0ZW0tb3B0aW9uLXN0YXRlXCIgc3R5bGU9XCJ1c2VyLXNlbGVjdDogbm9uZVwiIHVuc2VsZWN0YWJsZT1cIm9uXCI+XG4gICAgICA8aSBuei1pY29uIG56VHlwZT1cImNoZWNrXCIgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGVkLWljb25cIiAqbmdJZj1cIiFpY29uOyBlbHNlIGljb25cIj48L2k+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWl0ZW1dJzogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1pdGVtLW9wdGlvbl0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWl0ZW0tb3B0aW9uLWdyb3VwZWRdJzogJ2dyb3VwZWQnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1pdGVtLW9wdGlvbi1zZWxlY3RlZF0nOiAnc2VsZWN0ZWQgJiYgIWRpc2FibGVkJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtaXRlbS1vcHRpb24tZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtaXRlbS1vcHRpb24tYWN0aXZlXSc6ICdhY3RpdmF0ZWQgJiYgIWRpc2FibGVkJyxcbiAgICAnKG1vdXNlZW50ZXIpJzogJ29uSG9zdE1vdXNlRW50ZXIoKScsXG4gICAgJyhjbGljayknOiAnb25Ib3N0Q2xpY2soKSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOek9wdGlvbkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBzZWxlY3RlZCA9IGZhbHNlO1xuICBhY3RpdmF0ZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgZ3JvdXBlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBjdXN0b21Db250ZW50ID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNob3dTdGF0ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIHZhbHVlOiBOelNhZmVBbnkgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgYWN0aXZhdGVkVmFsdWU6IE56U2FmZUFueSB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBsaXN0T2ZTZWxlY3RlZFZhbHVlOiBOelNhZmVBbnlbXSA9IFtdO1xuICBASW5wdXQoKSBpY29uOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGNvbXBhcmVXaXRoITogKG8xOiBOelNhZmVBbnksIG8yOiBOelNhZmVBbnkpID0+IGJvb2xlYW47XG4gIEBPdXRwdXQoKSByZWFkb25seSBpdGVtQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE56U2FmZUFueT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGl0ZW1Ib3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8TnpTYWZlQW55PigpO1xuICBvbkhvc3RNb3VzZUVudGVyKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pdGVtSG92ZXIubmV4dCh0aGlzLnZhbHVlKTtcbiAgICB9XG4gIH1cbiAgb25Ib3N0Q2xpY2soKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLml0ZW1DbGljay5uZXh0KHRoaXMudmFsdWUpO1xuICAgIH1cbiAgfVxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyB2YWx1ZSwgYWN0aXZhdGVkVmFsdWUsIGxpc3RPZlNlbGVjdGVkVmFsdWUgfSA9IGNoYW5nZXM7XG4gICAgaWYgKHZhbHVlIHx8IGxpc3RPZlNlbGVjdGVkVmFsdWUpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUuc29tZSh2ID0+IHRoaXMuY29tcGFyZVdpdGgodiwgdGhpcy52YWx1ZSkpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgfHwgYWN0aXZhdGVkVmFsdWUpIHtcbiAgICAgIHRoaXMuYWN0aXZhdGVkID0gdGhpcy5jb21wYXJlV2l0aCh0aGlzLmFjdGl2YXRlZFZhbHVlLCB0aGlzLnZhbHVlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==