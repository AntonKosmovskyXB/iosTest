/**
 * @fileoverview added by tsickle
 * Generated from: pagination-simple.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { toNumber } from 'ng-zorro-antd/core/util';
var NzPaginationSimpleComponent = /** @class */ (function () {
    function NzPaginationSimpleComponent(renderer, elementRef) {
        this.itemRender = null;
        this.disabled = false;
        this.total = 0;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.pageIndexChange = new EventEmitter();
        this.lastIndex = 0;
        this.isFirstIndex = false;
        this.isLastIndex = false;
        renderer.removeChild(renderer.parentNode(elementRef.nativeElement), elementRef.nativeElement);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    NzPaginationSimpleComponent.prototype.jumpToPageViaInput = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var target = (/** @type {?} */ ($event.target));
        /** @type {?} */
        var index = toNumber(target.value, this.pageIndex);
        this.onPageIndexChange(index);
        target.value = "" + this.pageIndex;
    };
    /**
     * @return {?}
     */
    NzPaginationSimpleComponent.prototype.prePage = /**
     * @return {?}
     */
    function () {
        this.onPageIndexChange(this.pageIndex - 1);
    };
    /**
     * @return {?}
     */
    NzPaginationSimpleComponent.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        this.onPageIndexChange(this.pageIndex + 1);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NzPaginationSimpleComponent.prototype.onPageIndexChange = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.pageIndexChange.next(index);
    };
    /**
     * @return {?}
     */
    NzPaginationSimpleComponent.prototype.updateBindingValue = /**
     * @return {?}
     */
    function () {
        this.lastIndex = Math.ceil(this.total / this.pageSize);
        this.isFirstIndex = this.pageIndex === 1;
        this.isLastIndex = this.pageIndex === this.lastIndex;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzPaginationSimpleComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var pageIndex = changes.pageIndex, total = changes.total, pageSize = changes.pageSize;
        if (pageIndex || total || pageSize) {
            this.updateBindingValue();
        }
    };
    NzPaginationSimpleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-pagination-simple',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <ng-template #containerTemplate>\n      <li\n        nz-pagination-item\n        [attr.title]=\"locale.prev_page\"\n        [disabled]=\"isFirstIndex\"\n        (click)=\"prePage()\"\n        type=\"prev\"\n        [itemRender]=\"itemRender\"\n      ></li>\n      <li [attr.title]=\"pageIndex + '/' + lastIndex\" class=\"ant-pagination-simple-pager\">\n        <input [disabled]=\"disabled\" [value]=\"pageIndex\" (keydown.enter)=\"jumpToPageViaInput($event)\" size=\"3\" />\n        <span class=\"ant-pagination-slash\">/</span>\n        {{ lastIndex }}\n      </li>\n      <li\n        nz-pagination-item\n        [attr.title]=\"locale?.next_page\"\n        [disabled]=\"isLastIndex\"\n        (click)=\"nextPage()\"\n        type=\"next\"\n        [itemRender]=\"itemRender\"\n      ></li>\n    </ng-template>\n  "
                }] }
    ];
    /** @nocollapse */
    NzPaginationSimpleComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    NzPaginationSimpleComponent.propDecorators = {
        template: [{ type: ViewChild, args: ['containerTemplate', { static: true },] }],
        itemRender: [{ type: Input }],
        disabled: [{ type: Input }],
        locale: [{ type: Input }],
        total: [{ type: Input }],
        pageIndex: [{ type: Input }],
        pageSize: [{ type: Input }],
        pageIndexChange: [{ type: Output }]
    };
    return NzPaginationSimpleComponent;
}());
export { NzPaginationSimpleComponent };
if (false) {
    /** @type {?} */
    NzPaginationSimpleComponent.prototype.template;
    /** @type {?} */
    NzPaginationSimpleComponent.prototype.itemRender;
    /** @type {?} */
    NzPaginationSimpleComponent.prototype.disabled;
    /** @type {?} */
    NzPaginationSimpleComponent.prototype.locale;
    /** @type {?} */
    NzPaginationSimpleComponent.prototype.total;
    /** @type {?} */
    NzPaginationSimpleComponent.prototype.pageIndex;
    /** @type {?} */
    NzPaginationSimpleComponent.prototype.pageSize;
    /** @type {?} */
    NzPaginationSimpleComponent.prototype.pageIndexChange;
    /** @type {?} */
    NzPaginationSimpleComponent.prototype.lastIndex;
    /** @type {?} */
    NzPaginationSimpleComponent.prototype.isFirstIndex;
    /** @type {?} */
    NzPaginationSimpleComponent.prototype.isLastIndex;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi1zaW1wbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9wYWdpbmF0aW9uLyIsInNvdXJjZXMiOlsicGFnaW5hdGlvbi1zaW1wbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBSW5EO0lBNENFLHFDQUFZLFFBQW1CLEVBQUUsVUFBc0I7UUFYOUMsZUFBVSxHQUFvRCxJQUFJLENBQUM7UUFDbkUsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDSixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDaEUsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBR2xCLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEVBQUUsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7Ozs7O0lBRUQsd0RBQWtCOzs7O0lBQWxCLFVBQW1CLE1BQWE7O1lBQ3hCLE1BQU0sR0FBRyxtQkFBQSxNQUFNLENBQUMsTUFBTSxFQUFvQjs7WUFDMUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDcEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBRyxJQUFJLENBQUMsU0FBVyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCw2Q0FBTzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBQ0QsOENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFFRCx1REFBaUI7Ozs7SUFBakIsVUFBa0IsS0FBYTtRQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsd0RBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUVELGlEQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUN4QixJQUFBLDZCQUFTLEVBQUUscUJBQUssRUFBRSwyQkFBUTtRQUNsQyxJQUFJLFNBQVMsSUFBSSxLQUFLLElBQUksUUFBUSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7Z0JBN0VGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSx3ekJBd0JUO2lCQUNGOzs7O2dCQXpDQyxTQUFTO2dCQUxULFVBQVU7OzsyQkFnRFQsU0FBUyxTQUFDLG1CQUFtQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs2QkFDL0MsS0FBSzsyQkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7a0NBQ0wsTUFBTTs7SUF1Q1Qsa0NBQUM7Q0FBQSxBQTlFRCxJQThFQztTQS9DWSwyQkFBMkI7OztJQUN0QywrQ0FBb0Y7O0lBQ3BGLGlEQUE0RTs7SUFDNUUsK0NBQTBCOztJQUMxQiw2Q0FBNEM7O0lBQzVDLDRDQUFtQjs7SUFDbkIsZ0RBQXVCOztJQUN2QiwrQ0FBdUI7O0lBQ3ZCLHNEQUFnRTs7SUFDaEUsZ0RBQWM7O0lBQ2QsbURBQXFCOztJQUNyQixrREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyB0b051bWJlciB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IE56UGFnaW5hdGlvbkkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkl0ZW1SZW5kZXJDb250ZXh0IH0gZnJvbSAnLi9wYWdpbmF0aW9uLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotcGFnaW5hdGlvbi1zaW1wbGUnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNjb250YWluZXJUZW1wbGF0ZT5cbiAgICAgIDxsaVxuICAgICAgICBuei1wYWdpbmF0aW9uLWl0ZW1cbiAgICAgICAgW2F0dHIudGl0bGVdPVwibG9jYWxlLnByZXZfcGFnZVwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJpc0ZpcnN0SW5kZXhcIlxuICAgICAgICAoY2xpY2spPVwicHJlUGFnZSgpXCJcbiAgICAgICAgdHlwZT1cInByZXZcIlxuICAgICAgICBbaXRlbVJlbmRlcl09XCJpdGVtUmVuZGVyXCJcbiAgICAgID48L2xpPlxuICAgICAgPGxpIFthdHRyLnRpdGxlXT1cInBhZ2VJbmRleCArICcvJyArIGxhc3RJbmRleFwiIGNsYXNzPVwiYW50LXBhZ2luYXRpb24tc2ltcGxlLXBhZ2VyXCI+XG4gICAgICAgIDxpbnB1dCBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbdmFsdWVdPVwicGFnZUluZGV4XCIgKGtleWRvd24uZW50ZXIpPVwianVtcFRvUGFnZVZpYUlucHV0KCRldmVudClcIiBzaXplPVwiM1wiIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXBhZ2luYXRpb24tc2xhc2hcIj4vPC9zcGFuPlxuICAgICAgICB7eyBsYXN0SW5kZXggfX1cbiAgICAgIDwvbGk+XG4gICAgICA8bGlcbiAgICAgICAgbnotcGFnaW5hdGlvbi1pdGVtXG4gICAgICAgIFthdHRyLnRpdGxlXT1cImxvY2FsZT8ubmV4dF9wYWdlXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImlzTGFzdEluZGV4XCJcbiAgICAgICAgKGNsaWNrKT1cIm5leHRQYWdlKClcIlxuICAgICAgICB0eXBlPVwibmV4dFwiXG4gICAgICAgIFtpdGVtUmVuZGVyXT1cIml0ZW1SZW5kZXJcIlxuICAgICAgPjwvbGk+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOelBhZ2luYXRpb25TaW1wbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBAVmlld0NoaWxkKCdjb250YWluZXJUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIHRlbXBsYXRlITogVGVtcGxhdGVSZWY8TnpTYWZlQW55PjtcbiAgQElucHV0KCkgaXRlbVJlbmRlcjogVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkl0ZW1SZW5kZXJDb250ZXh0PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBsb2NhbGUhOiBOelBhZ2luYXRpb25JMThuSW50ZXJmYWNlO1xuICBASW5wdXQoKSB0b3RhbCA9IDA7XG4gIEBJbnB1dCgpIHBhZ2VJbmRleCA9IDE7XG4gIEBJbnB1dCgpIHBhZ2VTaXplID0gMTA7XG4gIEBPdXRwdXQoKSByZWFkb25seSBwYWdlSW5kZXhDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgbGFzdEluZGV4ID0gMDtcbiAgaXNGaXJzdEluZGV4ID0gZmFsc2U7XG4gIGlzTGFzdEluZGV4ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocmVuZGVyZXI6IFJlbmRlcmVyMiwgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHJlbmRlcmVyLnJlbW92ZUNoaWxkKHJlbmRlcmVyLnBhcmVudE5vZGUoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSwgZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIGp1bXBUb1BhZ2VWaWFJbnB1dCgkZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gJGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGluZGV4ID0gdG9OdW1iZXIodGFyZ2V0LnZhbHVlLCB0aGlzLnBhZ2VJbmRleCk7XG4gICAgdGhpcy5vblBhZ2VJbmRleENoYW5nZShpbmRleCk7XG4gICAgdGFyZ2V0LnZhbHVlID0gYCR7dGhpcy5wYWdlSW5kZXh9YDtcbiAgfVxuXG4gIHByZVBhZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5vblBhZ2VJbmRleENoYW5nZSh0aGlzLnBhZ2VJbmRleCAtIDEpO1xuICB9XG4gIG5leHRQYWdlKCk6IHZvaWQge1xuICAgIHRoaXMub25QYWdlSW5kZXhDaGFuZ2UodGhpcy5wYWdlSW5kZXggKyAxKTtcbiAgfVxuXG4gIG9uUGFnZUluZGV4Q2hhbmdlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2VJbmRleENoYW5nZS5uZXh0KGluZGV4KTtcbiAgfVxuXG4gIHVwZGF0ZUJpbmRpbmdWYWx1ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmxhc3RJbmRleCA9IE1hdGguY2VpbCh0aGlzLnRvdGFsIC8gdGhpcy5wYWdlU2l6ZSk7XG4gICAgdGhpcy5pc0ZpcnN0SW5kZXggPSB0aGlzLnBhZ2VJbmRleCA9PT0gMTtcbiAgICB0aGlzLmlzTGFzdEluZGV4ID0gdGhpcy5wYWdlSW5kZXggPT09IHRoaXMubGFzdEluZGV4O1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgcGFnZUluZGV4LCB0b3RhbCwgcGFnZVNpemUgfSA9IGNoYW5nZXM7XG4gICAgaWYgKHBhZ2VJbmRleCB8fCB0b3RhbCB8fCBwYWdlU2l6ZSkge1xuICAgICAgdGhpcy51cGRhdGVCaW5kaW5nVmFsdWUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==