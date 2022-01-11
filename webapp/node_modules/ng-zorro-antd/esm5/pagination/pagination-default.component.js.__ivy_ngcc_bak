/**
 * @fileoverview added by tsickle
 * Generated from: pagination-default.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __read, __spread } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
var NzPaginationDefaultComponent = /** @class */ (function () {
    function NzPaginationDefaultComponent(renderer, elementRef) {
        this.nzSize = 'default';
        this.itemRender = null;
        this.showTotal = null;
        this.disabled = false;
        this.showSizeChanger = false;
        this.showQuickJumper = false;
        this.total = 0;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.pageSizeOptions = [10, 20, 30, 40];
        this.pageIndexChange = new EventEmitter();
        this.pageSizeChange = new EventEmitter();
        this.ranges = [0, 0];
        this.listOfPageItem = [];
        renderer.removeChild(renderer.parentNode(elementRef.nativeElement), elementRef.nativeElement);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    NzPaginationDefaultComponent.prototype.jumpPage = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.onPageIndexChange(index);
    };
    /**
     * @param {?} diff
     * @return {?}
     */
    NzPaginationDefaultComponent.prototype.jumpDiff = /**
     * @param {?} diff
     * @return {?}
     */
    function (diff) {
        this.jumpPage(this.pageIndex + diff);
    };
    /**
     * @param {?} _
     * @param {?} value
     * @return {?}
     */
    NzPaginationDefaultComponent.prototype.trackByPageItem = /**
     * @param {?} _
     * @param {?} value
     * @return {?}
     */
    function (_, value) {
        return value.type + "-" + value.index;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NzPaginationDefaultComponent.prototype.onPageIndexChange = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.pageIndexChange.next(index);
    };
    /**
     * @param {?} size
     * @return {?}
     */
    NzPaginationDefaultComponent.prototype.onPageSizeChange = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        this.pageSizeChange.next(size);
    };
    /**
     * @param {?} total
     * @param {?} pageSize
     * @return {?}
     */
    NzPaginationDefaultComponent.prototype.getLastIndex = /**
     * @param {?} total
     * @param {?} pageSize
     * @return {?}
     */
    function (total, pageSize) {
        return Math.ceil(total / pageSize);
    };
    /**
     * @return {?}
     */
    NzPaginationDefaultComponent.prototype.buildIndexes = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var lastIndex = this.getLastIndex(this.total, this.pageSize);
        this.listOfPageItem = this.getListOfPageItem(this.pageIndex, lastIndex);
    };
    /**
     * @param {?} pageIndex
     * @param {?} lastIndex
     * @return {?}
     */
    NzPaginationDefaultComponent.prototype.getListOfPageItem = /**
     * @param {?} pageIndex
     * @param {?} lastIndex
     * @return {?}
     */
    function (pageIndex, lastIndex) {
        /** @type {?} */
        var concatWithPrevNext = (/**
         * @param {?} listOfPage
         * @return {?}
         */
        function (listOfPage) {
            /** @type {?} */
            var prevItem = {
                type: 'prev',
                disabled: pageIndex === 1
            };
            /** @type {?} */
            var nextItem = {
                type: 'next',
                disabled: pageIndex === lastIndex
            };
            return __spread([prevItem], listOfPage, [nextItem]);
        });
        /** @type {?} */
        var generatePage = (/**
         * @param {?} start
         * @param {?} end
         * @return {?}
         */
        function (start, end) {
            /** @type {?} */
            var list = [];
            for (var i = start; i <= end; i++) {
                list.push({
                    index: i,
                    type: 'page'
                });
            }
            return list;
        });
        if (lastIndex <= 9) {
            return concatWithPrevNext(generatePage(1, lastIndex));
        }
        else {
            /** @type {?} */
            var generateRangeItem = (/**
             * @param {?} selected
             * @param {?} last
             * @return {?}
             */
            function (selected, last) {
                /** @type {?} */
                var listOfRange = [];
                /** @type {?} */
                var prevFiveItem = {
                    type: 'prev_5'
                };
                /** @type {?} */
                var nextFiveItem = {
                    type: 'next_5'
                };
                /** @type {?} */
                var firstPageItem = generatePage(1, 1);
                /** @type {?} */
                var lastPageItem = generatePage(lastIndex, lastIndex);
                if (selected < 4) {
                    listOfRange = __spread(generatePage(2, 5), [nextFiveItem]);
                }
                else if (selected < last - 3) {
                    listOfRange = __spread([prevFiveItem], generatePage(selected - 2, selected + 2), [nextFiveItem]);
                }
                else {
                    listOfRange = __spread([prevFiveItem], generatePage(last - 4, last - 1));
                }
                return __spread(firstPageItem, listOfRange, lastPageItem);
            });
            return concatWithPrevNext(generateRangeItem(pageIndex, lastIndex));
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzPaginationDefaultComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var pageIndex = changes.pageIndex, pageSize = changes.pageSize, total = changes.total;
        if (pageIndex || pageSize || total) {
            this.ranges = [(this.pageIndex - 1) * this.pageSize + 1, Math.min(this.pageIndex * this.pageSize, this.total)];
            this.buildIndexes();
        }
    };
    NzPaginationDefaultComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-pagination-default',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <ng-template #containerTemplate>\n      <li class=\"ant-pagination-total-text\" *ngIf=\"showTotal\">\n        <ng-template [ngTemplateOutlet]=\"showTotal\" [ngTemplateOutletContext]=\"{ $implicit: total, range: ranges }\"></ng-template>\n      </li>\n      <li\n        *ngFor=\"let page of listOfPageItem; trackBy: trackByPageItem\"\n        nz-pagination-item\n        [locale]=\"locale\"\n        [type]=\"page.type\"\n        [index]=\"page.index\"\n        [disabled]=\"!!page.disabled\"\n        [itemRender]=\"itemRender\"\n        [active]=\"pageIndex === page.index\"\n        (gotoIndex)=\"jumpPage($event)\"\n        (diffIndex)=\"jumpDiff($event)\"\n      ></li>\n      <div\n        nz-pagination-options\n        *ngIf=\"showQuickJumper || showSizeChanger\"\n        [total]=\"total\"\n        [locale]=\"locale\"\n        [disabled]=\"disabled\"\n        [nzSize]=\"nzSize\"\n        [showSizeChanger]=\"showSizeChanger\"\n        [showQuickJumper]=\"showQuickJumper\"\n        [pageIndex]=\"pageIndex\"\n        [pageSize]=\"pageSize\"\n        [pageSizeOptions]=\"pageSizeOptions\"\n        (pageIndexChange)=\"onPageIndexChange($event)\"\n        (pageSizeChange)=\"onPageSizeChange($event)\"\n      ></div>\n    </ng-template>\n  "
                }] }
    ];
    /** @nocollapse */
    NzPaginationDefaultComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    NzPaginationDefaultComponent.propDecorators = {
        template: [{ type: ViewChild, args: ['containerTemplate', { static: true },] }],
        nzSize: [{ type: Input }],
        itemRender: [{ type: Input }],
        showTotal: [{ type: Input }],
        disabled: [{ type: Input }],
        locale: [{ type: Input }],
        showSizeChanger: [{ type: Input }],
        showQuickJumper: [{ type: Input }],
        total: [{ type: Input }],
        pageIndex: [{ type: Input }],
        pageSize: [{ type: Input }],
        pageSizeOptions: [{ type: Input }],
        pageIndexChange: [{ type: Output }],
        pageSizeChange: [{ type: Output }]
    };
    return NzPaginationDefaultComponent;
}());
export { NzPaginationDefaultComponent };
if (false) {
    /** @type {?} */
    NzPaginationDefaultComponent.prototype.template;
    /** @type {?} */
    NzPaginationDefaultComponent.prototype.nzSize;
    /** @type {?} */
    NzPaginationDefaultComponent.prototype.itemRender;
    /** @type {?} */
    NzPaginationDefaultComponent.prototype.showTotal;
    /** @type {?} */
    NzPaginationDefaultComponent.prototype.disabled;
    /** @type {?} */
    NzPaginationDefaultComponent.prototype.locale;
    /** @type {?} */
    NzPaginationDefaultComponent.prototype.showSizeChanger;
    /** @type {?} */
    NzPaginationDefaultComponent.prototype.showQuickJumper;
    /** @type {?} */
    NzPaginationDefaultComponent.prototype.total;
    /** @type {?} */
    NzPaginationDefaultComponent.prototype.pageIndex;
    /** @type {?} */
    NzPaginationDefaultComponent.prototype.pageSize;
    /** @type {?} */
    NzPaginationDefaultComponent.prototype.pageSizeOptions;
    /** @type {?} */
    NzPaginationDefaultComponent.prototype.pageIndexChange;
    /** @type {?} */
    NzPaginationDefaultComponent.prototype.pageSizeChange;
    /** @type {?} */
    NzPaginationDefaultComponent.prototype.ranges;
    /** @type {?} */
    NzPaginationDefaultComponent.prototype.listOfPageItem;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi1kZWZhdWx0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcGFnaW5hdGlvbi8iLCJzb3VyY2VzIjpbInBhZ2luYXRpb24tZGVmYXVsdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFNdkI7SUEwREUsc0NBQVksUUFBbUIsRUFBRSxVQUFzQjtRQWhCOUMsV0FBTSxHQUF3QixTQUFTLENBQUM7UUFDeEMsZUFBVSxHQUFvRCxJQUFJLENBQUM7UUFDbkUsY0FBUyxHQUF1RSxJQUFJLENBQUM7UUFDckYsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxvQkFBZSxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbkMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzdDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMvRCxXQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEIsbUJBQWMsR0FBOEMsRUFBRSxDQUFDO1FBRzdELFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEVBQUUsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lB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RUFBRSx5dUNBaUNUO2lCQUNGOzs7O2dCQWxEQyxTQUFTO2dCQUxULFVBQVU7OzsyQkF5RFQsU0FBUyxTQUFDLG1CQUFtQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt5QkFDL0MsS0FBSzs2QkFDTCxLQUFLOzRCQUNMLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLO2tDQUNMLEtBQUs7a0NBQ0wsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7MkJBQ0wsS0FBSztrQ0FDTCxLQUFLO2tDQUNMLE1BQU07aUNBQ04sTUFBTTs7SUE0RlQsbUNBQUM7Q0FBQSxBQWxKRCxJQWtKQztTQTFHWSw0QkFBNEI7OztJQUN2QyxnREFBb0Y7O0lBQ3BGLDhDQUFpRDs7SUFDakQsa0RBQTRFOztJQUM1RSxpREFBOEY7O0lBQzlGLGdEQUEwQjs7SUFDMUIsOENBQTRDOztJQUM1Qyx1REFBaUM7O0lBQ2pDLHVEQUFpQzs7SUFDakMsNkNBQW1COztJQUNuQixpREFBdUI7O0lBQ3ZCLGdEQUF1Qjs7SUFDdkIsdURBQXNEOztJQUN0RCx1REFBZ0U7O0lBQ2hFLHNEQUErRDs7SUFDL0QsOENBQWdCOztJQUNoQixzREFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOelBhZ2luYXRpb25JMThuSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcbmltcG9ydCB7IE56UGFnaW5hdGlvbkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3BhZ2luYXRpb24taXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkl0ZW1SZW5kZXJDb250ZXh0IH0gZnJvbSAnLi9wYWdpbmF0aW9uLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotcGFnaW5hdGlvbi1kZWZhdWx0JyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjY29udGFpbmVyVGVtcGxhdGU+XG4gICAgICA8bGkgY2xhc3M9XCJhbnQtcGFnaW5hdGlvbi10b3RhbC10ZXh0XCIgKm5nSWY9XCJzaG93VG90YWxcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInNob3dUb3RhbFwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogdG90YWwsIHJhbmdlOiByYW5nZXMgfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L2xpPlxuICAgICAgPGxpXG4gICAgICAgICpuZ0Zvcj1cImxldCBwYWdlIG9mIGxpc3RPZlBhZ2VJdGVtOyB0cmFja0J5OiB0cmFja0J5UGFnZUl0ZW1cIlxuICAgICAgICBuei1wYWdpbmF0aW9uLWl0ZW1cbiAgICAgICAgW2xvY2FsZV09XCJsb2NhbGVcIlxuICAgICAgICBbdHlwZV09XCJwYWdlLnR5cGVcIlxuICAgICAgICBbaW5kZXhdPVwicGFnZS5pbmRleFwiXG4gICAgICAgIFtkaXNhYmxlZF09XCIhIXBhZ2UuZGlzYWJsZWRcIlxuICAgICAgICBbaXRlbVJlbmRlcl09XCJpdGVtUmVuZGVyXCJcbiAgICAgICAgW2FjdGl2ZV09XCJwYWdlSW5kZXggPT09IHBhZ2UuaW5kZXhcIlxuICAgICAgICAoZ290b0luZGV4KT1cImp1bXBQYWdlKCRldmVudClcIlxuICAgICAgICAoZGlmZkluZGV4KT1cImp1bXBEaWZmKCRldmVudClcIlxuICAgICAgPjwvbGk+XG4gICAgICA8ZGl2XG4gICAgICAgIG56LXBhZ2luYXRpb24tb3B0aW9uc1xuICAgICAgICAqbmdJZj1cInNob3dRdWlja0p1bXBlciB8fCBzaG93U2l6ZUNoYW5nZXJcIlxuICAgICAgICBbdG90YWxdPVwidG90YWxcIlxuICAgICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFtuelNpemVdPVwibnpTaXplXCJcbiAgICAgICAgW3Nob3dTaXplQ2hhbmdlcl09XCJzaG93U2l6ZUNoYW5nZXJcIlxuICAgICAgICBbc2hvd1F1aWNrSnVtcGVyXT1cInNob3dRdWlja0p1bXBlclwiXG4gICAgICAgIFtwYWdlSW5kZXhdPVwicGFnZUluZGV4XCJcbiAgICAgICAgW3BhZ2VTaXplXT1cInBhZ2VTaXplXCJcbiAgICAgICAgW3BhZ2VTaXplT3B0aW9uc109XCJwYWdlU2l6ZU9wdGlvbnNcIlxuICAgICAgICAocGFnZUluZGV4Q2hhbmdlKT1cIm9uUGFnZUluZGV4Q2hhbmdlKCRldmVudClcIlxuICAgICAgICAocGFnZVNpemVDaGFuZ2UpPVwib25QYWdlU2l6ZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgID48L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE56UGFnaW5hdGlvbkRlZmF1bHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBAVmlld0NoaWxkKCdjb250YWluZXJUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIHRlbXBsYXRlITogVGVtcGxhdGVSZWY8TnpTYWZlQW55PjtcbiAgQElucHV0KCkgbnpTaXplOiAnZGVmYXVsdCcgfCAnc21hbGwnID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBpdGVtUmVuZGVyOiBUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uSXRlbVJlbmRlckNvbnRleHQ+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIHNob3dUb3RhbDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IG51bWJlcjsgcmFuZ2U6IFtudW1iZXIsIG51bWJlcl0gfT4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbG9jYWxlITogTnpQYWdpbmF0aW9uSTE4bkludGVyZmFjZTtcbiAgQElucHV0KCkgc2hvd1NpemVDaGFuZ2VyID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNob3dRdWlja0p1bXBlciA9IGZhbHNlO1xuICBASW5wdXQoKSB0b3RhbCA9IDA7XG4gIEBJbnB1dCgpIHBhZ2VJbmRleCA9IDE7XG4gIEBJbnB1dCgpIHBhZ2VTaXplID0gMTA7XG4gIEBJbnB1dCgpIHBhZ2VTaXplT3B0aW9uczogbnVtYmVyW10gPSBbMTAsIDIwLCAzMCwgNDBdO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgcGFnZUluZGV4Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBwYWdlU2l6ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICByYW5nZXMgPSBbMCwgMF07XG4gIGxpc3RPZlBhZ2VJdGVtOiBBcnJheTxQYXJ0aWFsPE56UGFnaW5hdGlvbkl0ZW1Db21wb25lbnQ+PiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyOiBSZW5kZXJlcjIsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICByZW5kZXJlci5yZW1vdmVDaGlsZChyZW5kZXJlci5wYXJlbnROb2RlKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCksIGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICBqdW1wUGFnZShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5vblBhZ2VJbmRleENoYW5nZShpbmRleCk7XG4gIH1cblxuICBqdW1wRGlmZihkaWZmOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmp1bXBQYWdlKHRoaXMucGFnZUluZGV4ICsgZGlmZik7XG4gIH1cblxuICB0cmFja0J5UGFnZUl0ZW0oXzogbnVtYmVyLCB2YWx1ZTogUGFydGlhbDxOelBhZ2luYXRpb25JdGVtQ29tcG9uZW50Pik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3ZhbHVlLnR5cGV9LSR7dmFsdWUuaW5kZXh9YDtcbiAgfVxuXG4gIG9uUGFnZUluZGV4Q2hhbmdlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2VJbmRleENoYW5nZS5uZXh0KGluZGV4KTtcbiAgfVxuXG4gIG9uUGFnZVNpemVDaGFuZ2Uoc2l6ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wYWdlU2l6ZUNoYW5nZS5uZXh0KHNpemUpO1xuICB9XG5cbiAgZ2V0TGFzdEluZGV4KHRvdGFsOiBudW1iZXIsIHBhZ2VTaXplOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLmNlaWwodG90YWwgLyBwYWdlU2l6ZSk7XG4gIH1cblxuICBidWlsZEluZGV4ZXMoKTogdm9pZCB7XG4gICAgY29uc3QgbGFzdEluZGV4ID0gdGhpcy5nZXRMYXN0SW5kZXgodGhpcy50b3RhbCwgdGhpcy5wYWdlU2l6ZSk7XG4gICAgdGhpcy5saXN0T2ZQYWdlSXRlbSA9IHRoaXMuZ2V0TGlzdE9mUGFnZUl0ZW0odGhpcy5wYWdlSW5kZXgsIGxhc3RJbmRleCk7XG4gIH1cblxuICBnZXRMaXN0T2ZQYWdlSXRlbShwYWdlSW5kZXg6IG51bWJlciwgbGFzdEluZGV4OiBudW1iZXIpOiBBcnJheTxQYXJ0aWFsPE56UGFnaW5hdGlvbkl0ZW1Db21wb25lbnQ+PiB7XG4gICAgY29uc3QgY29uY2F0V2l0aFByZXZOZXh0ID0gKGxpc3RPZlBhZ2U6IEFycmF5PFBhcnRpYWw8TnpQYWdpbmF0aW9uSXRlbUNvbXBvbmVudD4+KSA9PiB7XG4gICAgICBjb25zdCBwcmV2SXRlbSA9IHtcbiAgICAgICAgdHlwZTogJ3ByZXYnLFxuICAgICAgICBkaXNhYmxlZDogcGFnZUluZGV4ID09PSAxXG4gICAgICB9O1xuICAgICAgY29uc3QgbmV4dEl0ZW0gPSB7XG4gICAgICAgIHR5cGU6ICduZXh0JyxcbiAgICAgICAgZGlzYWJsZWQ6IHBhZ2VJbmRleCA9PT0gbGFzdEluZGV4XG4gICAgICB9O1xuICAgICAgcmV0dXJuIFtwcmV2SXRlbSwgLi4ubGlzdE9mUGFnZSwgbmV4dEl0ZW1dO1xuICAgIH07XG4gICAgY29uc3QgZ2VuZXJhdGVQYWdlID0gKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogQXJyYXk8UGFydGlhbDxOelBhZ2luYXRpb25JdGVtQ29tcG9uZW50Pj4gPT4ge1xuICAgICAgY29uc3QgbGlzdCA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSsrKSB7XG4gICAgICAgIGxpc3QucHVzaCh7XG4gICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgdHlwZTogJ3BhZ2UnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfTtcbiAgICBpZiAobGFzdEluZGV4IDw9IDkpIHtcbiAgICAgIHJldHVybiBjb25jYXRXaXRoUHJldk5leHQoZ2VuZXJhdGVQYWdlKDEsIGxhc3RJbmRleCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBnZW5lcmF0ZVJhbmdlSXRlbSA9IChzZWxlY3RlZDogbnVtYmVyLCBsYXN0OiBudW1iZXIpID0+IHtcbiAgICAgICAgbGV0IGxpc3RPZlJhbmdlID0gW107XG4gICAgICAgIGNvbnN0IHByZXZGaXZlSXRlbSA9IHtcbiAgICAgICAgICB0eXBlOiAncHJldl81J1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBuZXh0Rml2ZUl0ZW0gPSB7XG4gICAgICAgICAgdHlwZTogJ25leHRfNSdcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZmlyc3RQYWdlSXRlbSA9IGdlbmVyYXRlUGFnZSgxLCAxKTtcbiAgICAgICAgY29uc3QgbGFzdFBhZ2VJdGVtID0gZ2VuZXJhdGVQYWdlKGxhc3RJbmRleCwgbGFzdEluZGV4KTtcbiAgICAgICAgaWYgKHNlbGVjdGVkIDwgNCkge1xuICAgICAgICAgIGxpc3RPZlJhbmdlID0gWy4uLmdlbmVyYXRlUGFnZSgyLCA1KSwgbmV4dEZpdmVJdGVtXTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZCA8IGxhc3QgLSAzKSB7XG4gICAgICAgICAgbGlzdE9mUmFuZ2UgPSBbcHJldkZpdmVJdGVtLCAuLi5nZW5lcmF0ZVBhZ2Uoc2VsZWN0ZWQgLSAyLCBzZWxlY3RlZCArIDIpLCBuZXh0Rml2ZUl0ZW1dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpc3RPZlJhbmdlID0gW3ByZXZGaXZlSXRlbSwgLi4uZ2VuZXJhdGVQYWdlKGxhc3QgLSA0LCBsYXN0IC0gMSldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbLi4uZmlyc3RQYWdlSXRlbSwgLi4ubGlzdE9mUmFuZ2UsIC4uLmxhc3RQYWdlSXRlbV07XG4gICAgICB9O1xuICAgICAgcmV0dXJuIGNvbmNhdFdpdGhQcmV2TmV4dChnZW5lcmF0ZVJhbmdlSXRlbShwYWdlSW5kZXgsIGxhc3RJbmRleCkpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IHBhZ2VJbmRleCwgcGFnZVNpemUsIHRvdGFsIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChwYWdlSW5kZXggfHwgcGFnZVNpemUgfHwgdG90YWwpIHtcbiAgICAgIHRoaXMucmFuZ2VzID0gWyh0aGlzLnBhZ2VJbmRleCAtIDEpICogdGhpcy5wYWdlU2l6ZSArIDEsIE1hdGgubWluKHRoaXMucGFnZUluZGV4ICogdGhpcy5wYWdlU2l6ZSwgdGhpcy50b3RhbCldO1xuICAgICAgdGhpcy5idWlsZEluZGV4ZXMoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==