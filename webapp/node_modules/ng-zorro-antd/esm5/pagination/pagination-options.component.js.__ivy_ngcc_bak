/**
 * @fileoverview added by tsickle
 * Generated from: pagination-options.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __read, __spread } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { toNumber } from 'ng-zorro-antd/core/util';
var NzPaginationOptionsComponent = /** @class */ (function () {
    function NzPaginationOptionsComponent() {
        this.nzSize = 'default';
        this.disabled = false;
        this.showSizeChanger = false;
        this.showQuickJumper = false;
        this.total = 0;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.pageSizeOptions = [];
        this.pageIndexChange = new EventEmitter();
        this.pageSizeChange = new EventEmitter();
        this.listOfPageSizeOption = [];
    }
    /**
     * @param {?} size
     * @return {?}
     */
    NzPaginationOptionsComponent.prototype.onPageSizeChange = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        if (this.pageSize !== size) {
            this.pageSizeChange.next(size);
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NzPaginationOptionsComponent.prototype.jumpToPageViaInput = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var target = (/** @type {?} */ ($event.target));
        /** @type {?} */
        var index = toNumber(target.value, this.pageIndex);
        this.pageIndexChange.next(index);
        target.value = '';
    };
    /**
     * @param {?} _
     * @param {?} option
     * @return {?}
     */
    NzPaginationOptionsComponent.prototype.trackByOption = /**
     * @param {?} _
     * @param {?} option
     * @return {?}
     */
    function (_, option) {
        return option.value;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzPaginationOptionsComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        var pageSize = changes.pageSize, pageSizeOptions = changes.pageSizeOptions, locale = changes.locale;
        if (pageSize || pageSizeOptions || locale) {
            this.listOfPageSizeOption = __spread(new Set(__spread(this.pageSizeOptions, [this.pageSize]))).map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return {
                    value: item,
                    label: item + " " + _this.locale.items_per_page
                };
            }));
        }
    };
    NzPaginationOptionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[nz-pagination-options]',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <nz-select\n      class=\"ant-pagination-options-size-changer\"\n      *ngIf=\"showSizeChanger\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"nzSize\"\n      [ngModel]=\"pageSize\"\n      (ngModelChange)=\"onPageSizeChange($event)\"\n    >\n      <nz-option\n        *ngFor=\"let option of listOfPageSizeOption; trackBy: trackByOption\"\n        [nzLabel]=\"option.label\"\n        [nzValue]=\"option.value\"\n      ></nz-option>\n    </nz-select>\n    <div class=\"ant-pagination-options-quick-jumper\" *ngIf=\"showQuickJumper\">\n      {{ locale.jump_to }}\n      <input [disabled]=\"disabled\" (keydown.enter)=\"jumpToPageViaInput($event)\" />\n      {{ locale.page }}\n    </div>\n  ",
                    host: {
                        '[class.ant-pagination-options]': 'true'
                    }
                }] }
    ];
    NzPaginationOptionsComponent.propDecorators = {
        nzSize: [{ type: Input }],
        disabled: [{ type: Input }],
        showSizeChanger: [{ type: Input }],
        showQuickJumper: [{ type: Input }],
        locale: [{ type: Input }],
        total: [{ type: Input }],
        pageIndex: [{ type: Input }],
        pageSize: [{ type: Input }],
        pageSizeOptions: [{ type: Input }],
        pageIndexChange: [{ type: Output }],
        pageSizeChange: [{ type: Output }]
    };
    return NzPaginationOptionsComponent;
}());
export { NzPaginationOptionsComponent };
if (false) {
    /** @type {?} */
    NzPaginationOptionsComponent.prototype.nzSize;
    /** @type {?} */
    NzPaginationOptionsComponent.prototype.disabled;
    /** @type {?} */
    NzPaginationOptionsComponent.prototype.showSizeChanger;
    /** @type {?} */
    NzPaginationOptionsComponent.prototype.showQuickJumper;
    /** @type {?} */
    NzPaginationOptionsComponent.prototype.locale;
    /** @type {?} */
    NzPaginationOptionsComponent.prototype.total;
    /** @type {?} */
    NzPaginationOptionsComponent.prototype.pageIndex;
    /** @type {?} */
    NzPaginationOptionsComponent.prototype.pageSize;
    /** @type {?} */
    NzPaginationOptionsComponent.prototype.pageSizeOptions;
    /** @type {?} */
    NzPaginationOptionsComponent.prototype.pageIndexChange;
    /** @type {?} */
    NzPaginationOptionsComponent.prototype.pageSizeChange;
    /** @type {?} */
    NzPaginationOptionsComponent.prototype.listOfPageSizeOption;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi1vcHRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcGFnaW5hdGlvbi8iLCJzb3VyY2VzIjpbInBhZ2luYXRpb24tb3B0aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHbkQ7SUFBQTtRQStCVyxXQUFNLEdBQXdCLFNBQVMsQ0FBQztRQUN4QyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBRXhCLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLG9CQUFlLEdBQWEsRUFBRSxDQUFDO1FBQ3JCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUM3QyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDL0QseUJBQW9CLEdBQTRDLEVBQUUsQ0FBQztJQThCckUsQ0FBQzs7Ozs7SUE1QkMsdURBQWdCOzs7O0lBQWhCLFVBQWlCLElBQVk7UUFDM0IsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7Ozs7O0lBRUQseURBQWtCOzs7O0lBQWxCLFVBQW1CLE1BQWE7O1lBQ3hCLE1BQU0sR0FBRyxtQkFBQSxNQUFNLENBQUMsTUFBTSxFQUFvQjs7WUFDMUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDcEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Ozs7O0lBRUQsb0RBQWE7Ozs7O0lBQWIsVUFBYyxDQUFTLEVBQUUsTUFBd0M7UUFDL0QsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsa0RBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQWxDLGlCQVVDO1FBVFMsSUFBQSwyQkFBUSxFQUFFLHlDQUFlLEVBQUUsdUJBQU07UUFDekMsSUFBSSxRQUFRLElBQUksZUFBZSxJQUFJLE1BQU0sRUFBRTtZQUN6QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsU0FBSSxJQUFJLEdBQUcsVUFBSyxJQUFJLENBQUMsZUFBZSxHQUFFLElBQUksQ0FBQyxRQUFRLEdBQUUsRUFBRSxHQUFHOzs7O1lBQUMsVUFBQSxJQUFJO2dCQUN6RixPQUFPO29CQUNMLEtBQUssRUFBRSxJQUFJO29CQUNYLEtBQUssRUFBSyxJQUFJLFNBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQyxjQUFnQjtpQkFDL0MsQ0FBQztZQUNKLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOztnQkF2RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsUUFBUSxFQUFFLDZyQkFvQlQ7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLGdDQUFnQyxFQUFFLE1BQU07cUJBQ3pDO2lCQUNGOzs7eUJBRUUsS0FBSzsyQkFDTCxLQUFLO2tDQUNMLEtBQUs7a0NBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLO2tDQUNMLEtBQUs7a0NBQ0wsTUFBTTtpQ0FDTixNQUFNOztJQStCVCxtQ0FBQztDQUFBLEFBeEVELElBd0VDO1NBMUNZLDRCQUE0Qjs7O0lBQ3ZDLDhDQUFpRDs7SUFDakQsZ0RBQTBCOztJQUMxQix1REFBaUM7O0lBQ2pDLHVEQUFpQzs7SUFDakMsOENBQTRDOztJQUM1Qyw2Q0FBbUI7O0lBQ25CLGlEQUF1Qjs7SUFDdkIsZ0RBQXVCOztJQUN2Qix1REFBd0M7O0lBQ3hDLHVEQUFnRTs7SUFDaEUsc0RBQStEOztJQUMvRCw0REFBbUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0b051bWJlciB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IE56UGFnaW5hdGlvbkkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaXZbbnotcGFnaW5hdGlvbi1vcHRpb25zXScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bnotc2VsZWN0XG4gICAgICBjbGFzcz1cImFudC1wYWdpbmF0aW9uLW9wdGlvbnMtc2l6ZS1jaGFuZ2VyXCJcbiAgICAgICpuZ0lmPVwic2hvd1NpemVDaGFuZ2VyXCJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuelNpemVdPVwibnpTaXplXCJcbiAgICAgIFtuZ01vZGVsXT1cInBhZ2VTaXplXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uUGFnZVNpemVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgPlxuICAgICAgPG56LW9wdGlvblxuICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGxpc3RPZlBhZ2VTaXplT3B0aW9uOyB0cmFja0J5OiB0cmFja0J5T3B0aW9uXCJcbiAgICAgICAgW256TGFiZWxdPVwib3B0aW9uLmxhYmVsXCJcbiAgICAgICAgW256VmFsdWVdPVwib3B0aW9uLnZhbHVlXCJcbiAgICAgID48L256LW9wdGlvbj5cbiAgICA8L256LXNlbGVjdD5cbiAgICA8ZGl2IGNsYXNzPVwiYW50LXBhZ2luYXRpb24tb3B0aW9ucy1xdWljay1qdW1wZXJcIiAqbmdJZj1cInNob3dRdWlja0p1bXBlclwiPlxuICAgICAge3sgbG9jYWxlLmp1bXBfdG8gfX1cbiAgICAgIDxpbnB1dCBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiAoa2V5ZG93bi5lbnRlcik9XCJqdW1wVG9QYWdlVmlhSW5wdXQoJGV2ZW50KVwiIC8+XG4gICAgICB7eyBsb2NhbGUucGFnZSB9fVxuICAgIDwvZGl2PlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtcGFnaW5hdGlvbi1vcHRpb25zXSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56UGFnaW5hdGlvbk9wdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBuelNpemU6ICdkZWZhdWx0JyB8ICdzbWFsbCcgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNob3dTaXplQ2hhbmdlciA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93UXVpY2tKdW1wZXIgPSBmYWxzZTtcbiAgQElucHV0KCkgbG9jYWxlITogTnpQYWdpbmF0aW9uSTE4bkludGVyZmFjZTtcbiAgQElucHV0KCkgdG90YWwgPSAwO1xuICBASW5wdXQoKSBwYWdlSW5kZXggPSAxO1xuICBASW5wdXQoKSBwYWdlU2l6ZSA9IDEwO1xuICBASW5wdXQoKSBwYWdlU2l6ZU9wdGlvbnM6IG51bWJlcltdID0gW107XG4gIEBPdXRwdXQoKSByZWFkb25seSBwYWdlSW5kZXhDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHBhZ2VTaXplQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIGxpc3RPZlBhZ2VTaXplT3B0aW9uOiBBcnJheTx7IHZhbHVlOiBudW1iZXI7IGxhYmVsOiBzdHJpbmcgfT4gPSBbXTtcblxuICBvblBhZ2VTaXplQ2hhbmdlKHNpemU6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLnBhZ2VTaXplICE9PSBzaXplKSB7XG4gICAgICB0aGlzLnBhZ2VTaXplQ2hhbmdlLm5leHQoc2l6ZSk7XG4gICAgfVxuICB9XG5cbiAganVtcFRvUGFnZVZpYUlucHV0KCRldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSAkZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgaW5kZXggPSB0b051bWJlcih0YXJnZXQudmFsdWUsIHRoaXMucGFnZUluZGV4KTtcbiAgICB0aGlzLnBhZ2VJbmRleENoYW5nZS5uZXh0KGluZGV4KTtcbiAgICB0YXJnZXQudmFsdWUgPSAnJztcbiAgfVxuXG4gIHRyYWNrQnlPcHRpb24oXzogbnVtYmVyLCBvcHRpb246IHsgdmFsdWU6IG51bWJlcjsgbGFiZWw6IHN0cmluZyB9KTogbnVtYmVyIHtcbiAgICByZXR1cm4gb3B0aW9uLnZhbHVlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgcGFnZVNpemUsIHBhZ2VTaXplT3B0aW9ucywgbG9jYWxlIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChwYWdlU2l6ZSB8fCBwYWdlU2l6ZU9wdGlvbnMgfHwgbG9jYWxlKSB7XG4gICAgICB0aGlzLmxpc3RPZlBhZ2VTaXplT3B0aW9uID0gWy4uLm5ldyBTZXQoWy4uLnRoaXMucGFnZVNpemVPcHRpb25zLCB0aGlzLnBhZ2VTaXplXSldLm1hcChpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogaXRlbSxcbiAgICAgICAgICBsYWJlbDogYCR7aXRlbX0gJHt0aGlzLmxvY2FsZS5pdGVtc19wZXJfcGFnZX1gXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==