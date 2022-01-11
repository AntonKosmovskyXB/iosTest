/**
 * @fileoverview added by tsickle
 * Generated from: src/table/table-inner-scroll.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzResizeService } from 'ng-zorro-antd/core/services';
import { fromEvent, merge, Subject } from 'rxjs';
import { delay, filter, startWith, takeUntil } from 'rxjs/operators';
var NzTableInnerScrollComponent = /** @class */ (function () {
    function NzTableInnerScrollComponent(renderer, ngZone, platform, resizeService) {
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.platform = platform;
        this.resizeService = resizeService;
        this.data = [];
        this.scrollX = null;
        this.scrollY = null;
        this.contentTemplate = null;
        this.widthConfig = [];
        this.listOfColWidth = [];
        this.theadTemplate = null;
        this.virtualTemplate = null;
        this.virtualItemSize = 0;
        this.virtualMaxBufferPx = 200;
        this.virtualMinBufferPx = 100;
        this.virtualForTrackBy = (/**
         * @param {?} index
         * @return {?}
         */
        function (index) { return index; });
        this.headerStyleMap = {};
        this.bodyStyleMap = {};
        this.verticalScrollBarWidth = 0;
        this.noDateVirtualHeight = '182px';
        this.data$ = new Subject();
        this.scroll$ = new Subject();
        this.destroy$ = new Subject();
    }
    /**
     * @param {?=} clear
     * @return {?}
     */
    NzTableInnerScrollComponent.prototype.setScrollPositionClassName = /**
     * @param {?=} clear
     * @return {?}
     */
    function (clear) {
        if (clear === void 0) { clear = false; }
        var _a = this.tableBodyElement.nativeElement, scrollWidth = _a.scrollWidth, scrollLeft = _a.scrollLeft, clientWidth = _a.clientWidth;
        /** @type {?} */
        var leftClassName = 'ant-table-ping-left';
        /** @type {?} */
        var rightClassName = 'ant-table-ping-right';
        if ((scrollWidth === clientWidth && scrollWidth !== 0) || clear) {
            this.renderer.removeClass(this.tableMainElement, leftClassName);
            this.renderer.removeClass(this.tableMainElement, rightClassName);
        }
        else if (scrollLeft === 0) {
            this.renderer.removeClass(this.tableMainElement, leftClassName);
            this.renderer.addClass(this.tableMainElement, rightClassName);
        }
        else if (scrollWidth === scrollLeft + clientWidth) {
            this.renderer.removeClass(this.tableMainElement, rightClassName);
            this.renderer.addClass(this.tableMainElement, leftClassName);
        }
        else {
            this.renderer.addClass(this.tableMainElement, leftClassName);
            this.renderer.addClass(this.tableMainElement, rightClassName);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTableInnerScrollComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var scrollX = changes.scrollX, scrollY = changes.scrollY, data = changes.data;
        if (scrollX || scrollY) {
            /** @type {?} */
            var hasVerticalScrollBar = this.verticalScrollBarWidth !== 0;
            this.headerStyleMap = {
                overflowX: 'hidden',
                overflowY: this.scrollY && hasVerticalScrollBar ? 'scroll' : 'hidden'
            };
            this.bodyStyleMap = {
                overflowY: this.scrollY ? 'scroll' : null,
                overflowX: this.scrollX ? 'scroll' : null,
                maxHeight: this.scrollY
            };
            this.scroll$.next();
        }
        if (data) {
            this.data$.next();
        }
    };
    /**
     * @return {?}
     */
    NzTableInnerScrollComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.platform.isBrowser) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var scrollEvent$ = fromEvent(_this.tableBodyElement.nativeElement, 'scroll').pipe(takeUntil(_this.destroy$));
                /** @type {?} */
                var scrollX$ = scrollEvent$.pipe(filter((/**
                 * @return {?}
                 */
                function () { return !!_this.scrollX; })));
                /** @type {?} */
                var scrollY$ = scrollEvent$.pipe(filter((/**
                 * @return {?}
                 */
                function () { return !!_this.scrollY; })));
                /** @type {?} */
                var resize$ = _this.resizeService.subscribe().pipe(takeUntil(_this.destroy$));
                /** @type {?} */
                var data$ = _this.data$.pipe(takeUntil(_this.destroy$));
                /** @type {?} */
                var setClassName$ = merge(scrollX$, resize$, data$, _this.scroll$).pipe(startWith(true), delay(0));
                setClassName$.subscribe((/**
                 * @return {?}
                 */
                function () { return _this.setScrollPositionClassName(); }));
                scrollY$.subscribe((/**
                 * @return {?}
                 */
                function () { return (_this.tableHeaderElement.nativeElement.scrollLeft = _this.tableBodyElement.nativeElement.scrollLeft); }));
            }));
        }
    };
    /**
     * @return {?}
     */
    NzTableInnerScrollComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.setScrollPositionClassName(true);
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzTableInnerScrollComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-table-inner-scroll',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "\n    <div class=\"ant-table-content\">\n      <div *ngIf=\"scrollY\" #tableHeaderElement [ngStyle]=\"headerStyleMap\" class=\"ant-table-header nz-table-hide-scrollbar\">\n        <table\n          nz-table-content\n          tableLayout=\"fixed\"\n          [scrollX]=\"scrollX\"\n          [listOfColWidth]=\"listOfColWidth\"\n          [theadTemplate]=\"theadTemplate\"\n        ></table>\n      </div>\n      <div #tableBodyElement *ngIf=\"!virtualTemplate\" class=\"ant-table-body\" [ngStyle]=\"bodyStyleMap\">\n        <table\n          nz-table-content\n          [scrollX]=\"scrollX\"\n          tableLayout=\"fixed\"\n          [listOfColWidth]=\"listOfColWidth\"\n          [theadTemplate]=\"scrollY ? null : theadTemplate\"\n          [contentTemplate]=\"contentTemplate\"\n        ></table>\n      </div>\n      <cdk-virtual-scroll-viewport\n        #tableBodyElement\n        *ngIf=\"virtualTemplate\"\n        [itemSize]=\"virtualItemSize\"\n        [maxBufferPx]=\"virtualMaxBufferPx\"\n        [minBufferPx]=\"virtualMinBufferPx\"\n        [style.height]=\"data.length ? scrollY : noDateVirtualHeight\"\n      >\n        <table nz-table-content tableLayout=\"fixed\" [scrollX]=\"scrollX\" [listOfColWidth]=\"listOfColWidth\">\n          <tbody>\n            <ng-container *cdkVirtualFor=\"let item of data; let i = index; trackBy: virtualForTrackBy\">\n              <ng-template [ngTemplateOutlet]=\"virtualTemplate\" [ngTemplateOutletContext]=\"{ $implicit: item, index: i }\"></ng-template>\n            </ng-container>\n          </tbody>\n        </table>\n      </cdk-virtual-scroll-viewport>\n    </div>\n  ",
                    host: {
                        '[class.ant-table-container]': 'true'
                    }
                }] }
    ];
    /** @nocollapse */
    NzTableInnerScrollComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: NgZone },
        { type: Platform },
        { type: NzResizeService }
    ]; };
    NzTableInnerScrollComponent.propDecorators = {
        data: [{ type: Input }],
        scrollX: [{ type: Input }],
        scrollY: [{ type: Input }],
        contentTemplate: [{ type: Input }],
        widthConfig: [{ type: Input }],
        listOfColWidth: [{ type: Input }],
        theadTemplate: [{ type: Input }],
        virtualTemplate: [{ type: Input }],
        virtualItemSize: [{ type: Input }],
        virtualMaxBufferPx: [{ type: Input }],
        virtualMinBufferPx: [{ type: Input }],
        tableMainElement: [{ type: Input }],
        virtualForTrackBy: [{ type: Input }],
        tableHeaderElement: [{ type: ViewChild, args: ['tableHeaderElement', { read: ElementRef },] }],
        tableBodyElement: [{ type: ViewChild, args: ['tableBodyElement', { read: ElementRef },] }],
        cdkVirtualScrollViewport: [{ type: ViewChild, args: [CdkVirtualScrollViewport, { read: CdkVirtualScrollViewport },] }],
        verticalScrollBarWidth: [{ type: Input }]
    };
    return NzTableInnerScrollComponent;
}());
export { NzTableInnerScrollComponent };
if (false) {
    /** @type {?} */
    NzTableInnerScrollComponent.prototype.data;
    /** @type {?} */
    NzTableInnerScrollComponent.prototype.scrollX;
    /** @type {?} */
    NzTableInnerScrollComponent.prototype.scrollY;
    /** @type {?} */
    NzTableInnerScrollComponent.prototype.contentTemplate;
    /** @type {?} */
    NzTableInnerScrollComponent.prototype.widthConfig;
    /** @type {?} */
    NzTableInnerScrollComponent.prototype.listOfColWidth;
    /** @type {?} */
    NzTableInnerScrollComponent.prototype.theadTemplate;
    /** @type {?} */
    NzTableInnerScrollComponent.prototype.virtualTemplate;
    /** @type {?} */
    NzTableInnerScrollComponent.prototype.virtualItemSize;
    /** @type {?} */
    NzTableInnerScrollComponent.prototype.virtualMaxBufferPx;
    /** @type {?} */
    NzTableInnerScrollComponent.prototype.virtualMinBufferPx;
    /** @type {?} */
    NzTableInnerScrollComponent.prototype.tableMainElement;
    /** @type {?} */
    NzTableInnerScrollComponent.prototype.virtualForTrackBy;
    /** @type {?} */
    NzTableInnerScrollComponent.prototype.tableHeaderElement;
    /** @type {?} */
    NzTableInnerScrollComponent.prototype.tableBodyElement;
    /** @type {?} */
    NzTableInnerScrollComponent.prototype.cdkVirtualScrollViewport;
    /** @type {?} */
    NzTableInnerScrollComponent.prototype.headerStyleMap;
    /** @type {?} */
    NzTableInnerScrollComponent.prototype.bodyStyleMap;
    /** @type {?} */
    NzTableInnerScrollComponent.prototype.verticalScrollBarWidth;
    /** @type {?} */
    NzTableInnerScrollComponent.prototype.noDateVirtualHeight;
    /**
     * @type {?}
     * @private
     */
    NzTableInnerScrollComponent.prototype.data$;
    /**
     * @type {?}
     * @private
     */
    NzTableInnerScrollComponent.prototype.scroll$;
    /**
     * @type {?}
     * @private
     */
    NzTableInnerScrollComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzTableInnerScrollComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTableInnerScrollComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzTableInnerScrollComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzTableInnerScrollComponent.prototype.resizeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaW5uZXItc2Nyb2xsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdGFibGUvIiwic291cmNlcyI6WyJzcmMvdGFibGUvdGFibGUtaW5uZXItc2Nyb2xsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbEUsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBR04sU0FBUyxFQUlULFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTlELE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHckU7SUE0RkUscUNBQW9CLFFBQW1CLEVBQVUsTUFBYyxFQUFVLFFBQWtCLEVBQVUsYUFBOEI7UUFBL0csYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWlCO1FBNUMxSCxTQUFJLEdBQWtCLEVBQUUsQ0FBQztRQUN6QixZQUFPLEdBQWtCLElBQUksQ0FBQztRQUM5QixZQUFPLEdBQWtCLElBQUksQ0FBQztRQUM5QixvQkFBZSxHQUFrQyxJQUFJLENBQUM7UUFDdEQsZ0JBQVcsR0FBYSxFQUFFLENBQUM7UUFDM0IsbUJBQWMsR0FBeUIsRUFBRSxDQUFDO1FBQzFDLGtCQUFhLEdBQWtDLElBQUksQ0FBQztRQUNwRCxvQkFBZSxHQUFrQyxJQUFJLENBQUM7UUFDdEQsb0JBQWUsR0FBRyxDQUFDLENBQUM7UUFDcEIsdUJBQWtCLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLHVCQUFrQixHQUFHLEdBQUcsQ0FBQztRQUV6QixzQkFBaUI7Ozs7UUFBaUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLEVBQUwsQ0FBSyxFQUFDO1FBSzFFLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ1QsMkJBQXNCLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLHdCQUFtQixHQUFHLE9BQU8sQ0FBQztRQUN0QixVQUFLLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUM1QixZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUM5QixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQXFCK0YsQ0FBQzs7Ozs7SUFuQnZJLGdFQUEwQjs7OztJQUExQixVQUEyQixLQUFzQjtRQUF0QixzQkFBQSxFQUFBLGFBQXNCO1FBQ3pDLElBQUEsd0NBQThFLEVBQTVFLDRCQUFXLEVBQUUsMEJBQVUsRUFBRSw0QkFBbUQ7O1lBQzlFLGFBQWEsR0FBRyxxQkFBcUI7O1lBQ3JDLGNBQWMsR0FBRyxzQkFBc0I7UUFDN0MsSUFBSSxDQUFDLFdBQVcsS0FBSyxXQUFXLElBQUksV0FBVyxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssRUFBRTtZQUMvRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDaEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQ2xFO2FBQU0sSUFBSSxVQUFVLEtBQUssQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUNoRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDL0Q7YUFBTSxJQUFJLFdBQVcsS0FBSyxVQUFVLEdBQUcsV0FBVyxFQUFFO1lBQ25ELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDOUQ7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUM3RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDL0Q7SUFDSCxDQUFDOzs7OztJQUlELGlEQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUN4QixJQUFBLHlCQUFPLEVBQUUseUJBQU8sRUFBRSxtQkFBSTtRQUM5QixJQUFJLE9BQU8sSUFBSSxPQUFPLEVBQUU7O2dCQUNoQixvQkFBb0IsR0FBRyxJQUFJLENBQUMsc0JBQXNCLEtBQUssQ0FBQztZQUM5RCxJQUFJLENBQUMsY0FBYyxHQUFHO2dCQUNwQixTQUFTLEVBQUUsUUFBUTtnQkFDbkIsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLElBQUksb0JBQW9CLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUTthQUN0RSxDQUFDO1lBQ0YsSUFBSSxDQUFDLFlBQVksR0FBRztnQkFDbEIsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSTtnQkFDekMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSTtnQkFDekMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPO2FBQ3hCLENBQUM7WUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQzs7OztJQUNELHFEQUFlOzs7SUFBZjtRQUFBLGlCQWFDO1FBWkMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQjs7O1lBQUM7O29CQUN0QixZQUFZLEdBQUcsU0FBUyxDQUFhLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7O29CQUNsSCxRQUFRLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNOzs7Z0JBQUMsY0FBTSxPQUFBLENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxDQUFDOztvQkFDMUQsUUFBUSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTTs7O2dCQUFDLGNBQU0sT0FBQSxDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsQ0FBQzs7b0JBQzFELE9BQU8sR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztvQkFDdkUsS0FBSyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7O29CQUNqRCxhQUFhLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkcsYUFBYSxDQUFDLFNBQVM7OztnQkFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLDBCQUEwQixFQUFFLEVBQWpDLENBQWlDLEVBQUMsQ0FBQztnQkFDakUsUUFBUSxDQUFDLFNBQVM7OztnQkFBQyxjQUFNLE9BQUEsQ0FBQyxLQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUFuRyxDQUFtRyxFQUFDLENBQUM7WUFDaEksQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7SUFDRCxpREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7O2dCQW5JRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUsZ21EQXNDVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osNkJBQTZCLEVBQUUsTUFBTTtxQkFDdEM7aUJBQ0Y7Ozs7Z0JBM0RDLFNBQVM7Z0JBSFQsTUFBTTtnQkFSQyxRQUFRO2dCQWtCUixlQUFlOzs7dUJBc0RyQixLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSztrQ0FDTCxLQUFLOzhCQUNMLEtBQUs7aUNBQ0wsS0FBSztnQ0FDTCxLQUFLO2tDQUNMLEtBQUs7a0NBQ0wsS0FBSztxQ0FDTCxLQUFLO3FDQUNMLEtBQUs7bUNBQ0wsS0FBSztvQ0FDTCxLQUFLO3FDQUNMLFNBQVMsU0FBQyxvQkFBb0IsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7bUNBQ3BELFNBQVMsU0FBQyxrQkFBa0IsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7MkNBQ2xELFNBQVMsU0FBQyx3QkFBd0IsRUFBRSxFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRTt5Q0FJdEUsS0FBSzs7SUFpRVIsa0NBQUM7Q0FBQSxBQXBJRCxJQW9JQztTQXJGWSwyQkFBMkI7OztJQUN0QywyQ0FBa0M7O0lBQ2xDLDhDQUF1Qzs7SUFDdkMsOENBQXVDOztJQUN2QyxzREFBK0Q7O0lBQy9ELGtEQUFvQzs7SUFDcEMscURBQW1EOztJQUNuRCxvREFBNkQ7O0lBQzdELHNEQUErRDs7SUFDL0Qsc0RBQTZCOztJQUM3Qix5REFBa0M7O0lBQ2xDLHlEQUFrQzs7SUFDbEMsdURBQTJDOztJQUMzQyx3REFBMEU7O0lBQzFFLHlEQUF1Rjs7SUFDdkYsdURBQW1GOztJQUNuRiwrREFDb0Q7O0lBQ3BELHFEQUFvQjs7SUFDcEIsbURBQWtCOztJQUNsQiw2REFBb0M7O0lBQ3BDLDBEQUE4Qjs7Ozs7SUFDOUIsNENBQW9DOzs7OztJQUNwQyw4Q0FBc0M7Ozs7O0lBQ3RDLCtDQUF1Qzs7Ozs7SUFxQjNCLCtDQUEyQjs7Ozs7SUFBRSw2Q0FBc0I7Ozs7O0lBQUUsK0NBQTBCOzs7OztJQUFFLG9EQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFRyYWNrQnlGdW5jdGlvbixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56UmVzaXplU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVsYXksIGZpbHRlciwgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOelRhYmxlRGF0YSB9IGZyb20gJy4uL3RhYmxlLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotdGFibGUtaW5uZXItc2Nyb2xsJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImFudC10YWJsZS1jb250ZW50XCI+XG4gICAgICA8ZGl2ICpuZ0lmPVwic2Nyb2xsWVwiICN0YWJsZUhlYWRlckVsZW1lbnQgW25nU3R5bGVdPVwiaGVhZGVyU3R5bGVNYXBcIiBjbGFzcz1cImFudC10YWJsZS1oZWFkZXIgbnotdGFibGUtaGlkZS1zY3JvbGxiYXJcIj5cbiAgICAgICAgPHRhYmxlXG4gICAgICAgICAgbnotdGFibGUtY29udGVudFxuICAgICAgICAgIHRhYmxlTGF5b3V0PVwiZml4ZWRcIlxuICAgICAgICAgIFtzY3JvbGxYXT1cInNjcm9sbFhcIlxuICAgICAgICAgIFtsaXN0T2ZDb2xXaWR0aF09XCJsaXN0T2ZDb2xXaWR0aFwiXG4gICAgICAgICAgW3RoZWFkVGVtcGxhdGVdPVwidGhlYWRUZW1wbGF0ZVwiXG4gICAgICAgID48L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2ICN0YWJsZUJvZHlFbGVtZW50ICpuZ0lmPVwiIXZpcnR1YWxUZW1wbGF0ZVwiIGNsYXNzPVwiYW50LXRhYmxlLWJvZHlcIiBbbmdTdHlsZV09XCJib2R5U3R5bGVNYXBcIj5cbiAgICAgICAgPHRhYmxlXG4gICAgICAgICAgbnotdGFibGUtY29udGVudFxuICAgICAgICAgIFtzY3JvbGxYXT1cInNjcm9sbFhcIlxuICAgICAgICAgIHRhYmxlTGF5b3V0PVwiZml4ZWRcIlxuICAgICAgICAgIFtsaXN0T2ZDb2xXaWR0aF09XCJsaXN0T2ZDb2xXaWR0aFwiXG4gICAgICAgICAgW3RoZWFkVGVtcGxhdGVdPVwic2Nyb2xsWSA/IG51bGwgOiB0aGVhZFRlbXBsYXRlXCJcbiAgICAgICAgICBbY29udGVudFRlbXBsYXRlXT1cImNvbnRlbnRUZW1wbGF0ZVwiXG4gICAgICAgID48L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgICA8Y2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0XG4gICAgICAgICN0YWJsZUJvZHlFbGVtZW50XG4gICAgICAgICpuZ0lmPVwidmlydHVhbFRlbXBsYXRlXCJcbiAgICAgICAgW2l0ZW1TaXplXT1cInZpcnR1YWxJdGVtU2l6ZVwiXG4gICAgICAgIFttYXhCdWZmZXJQeF09XCJ2aXJ0dWFsTWF4QnVmZmVyUHhcIlxuICAgICAgICBbbWluQnVmZmVyUHhdPVwidmlydHVhbE1pbkJ1ZmZlclB4XCJcbiAgICAgICAgW3N0eWxlLmhlaWdodF09XCJkYXRhLmxlbmd0aCA/IHNjcm9sbFkgOiBub0RhdGVWaXJ0dWFsSGVpZ2h0XCJcbiAgICAgID5cbiAgICAgICAgPHRhYmxlIG56LXRhYmxlLWNvbnRlbnQgdGFibGVMYXlvdXQ9XCJmaXhlZFwiIFtzY3JvbGxYXT1cInNjcm9sbFhcIiBbbGlzdE9mQ29sV2lkdGhdPVwibGlzdE9mQ29sV2lkdGhcIj5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpjZGtWaXJ0dWFsRm9yPVwibGV0IGl0ZW0gb2YgZGF0YTsgbGV0IGkgPSBpbmRleDsgdHJhY2tCeTogdmlydHVhbEZvclRyYWNrQnlcIj5cbiAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInZpcnR1YWxUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaXRlbSwgaW5kZXg6IGkgfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQ+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC10YWJsZS1jb250YWluZXJdJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpUYWJsZUlubmVyU2Nyb2xsQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBkYXRhOiBOelRhYmxlRGF0YVtdID0gW107XG4gIEBJbnB1dCgpIHNjcm9sbFg6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBzY3JvbGxZOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgY29udGVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIHdpZHRoQ29uZmlnOiBzdHJpbmdbXSA9IFtdO1xuICBASW5wdXQoKSBsaXN0T2ZDb2xXaWR0aDogQXJyYXk8c3RyaW5nIHwgbnVsbD4gPSBbXTtcbiAgQElucHV0KCkgdGhlYWRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSB2aXJ0dWFsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgdmlydHVhbEl0ZW1TaXplID0gMDtcbiAgQElucHV0KCkgdmlydHVhbE1heEJ1ZmZlclB4ID0gMjAwO1xuICBASW5wdXQoKSB2aXJ0dWFsTWluQnVmZmVyUHggPSAxMDA7XG4gIEBJbnB1dCgpIHRhYmxlTWFpbkVsZW1lbnQ/OiBIVE1MRGl2RWxlbWVudDtcbiAgQElucHV0KCkgdmlydHVhbEZvclRyYWNrQnk6IFRyYWNrQnlGdW5jdGlvbjxOelRhYmxlRGF0YT4gPSBpbmRleCA9PiBpbmRleDtcbiAgQFZpZXdDaGlsZCgndGFibGVIZWFkZXJFbGVtZW50JywgeyByZWFkOiBFbGVtZW50UmVmIH0pIHRhYmxlSGVhZGVyRWxlbWVudCE6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3RhYmxlQm9keUVsZW1lbnQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgdGFibGVCb2R5RWxlbWVudCE6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0LCB7IHJlYWQ6IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCB9KVxuICBjZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQ/OiBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQ7XG4gIGhlYWRlclN0eWxlTWFwID0ge307XG4gIGJvZHlTdHlsZU1hcCA9IHt9O1xuICBASW5wdXQoKSB2ZXJ0aWNhbFNjcm9sbEJhcldpZHRoID0gMDtcbiAgbm9EYXRlVmlydHVhbEhlaWdodCA9ICcxODJweCc7XG4gIHByaXZhdGUgZGF0YSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIHNjcm9sbCQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBzZXRTY3JvbGxQb3NpdGlvbkNsYXNzTmFtZShjbGVhcjogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgY29uc3QgeyBzY3JvbGxXaWR0aCwgc2Nyb2xsTGVmdCwgY2xpZW50V2lkdGggfSA9IHRoaXMudGFibGVCb2R5RWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGxlZnRDbGFzc05hbWUgPSAnYW50LXRhYmxlLXBpbmctbGVmdCc7XG4gICAgY29uc3QgcmlnaHRDbGFzc05hbWUgPSAnYW50LXRhYmxlLXBpbmctcmlnaHQnO1xuICAgIGlmICgoc2Nyb2xsV2lkdGggPT09IGNsaWVudFdpZHRoICYmIHNjcm9sbFdpZHRoICE9PSAwKSB8fCBjbGVhcikge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLnRhYmxlTWFpbkVsZW1lbnQsIGxlZnRDbGFzc05hbWUpO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLnRhYmxlTWFpbkVsZW1lbnQsIHJpZ2h0Q2xhc3NOYW1lKTtcbiAgICB9IGVsc2UgaWYgKHNjcm9sbExlZnQgPT09IDApIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy50YWJsZU1haW5FbGVtZW50LCBsZWZ0Q2xhc3NOYW1lKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy50YWJsZU1haW5FbGVtZW50LCByaWdodENsYXNzTmFtZSk7XG4gICAgfSBlbHNlIGlmIChzY3JvbGxXaWR0aCA9PT0gc2Nyb2xsTGVmdCArIGNsaWVudFdpZHRoKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMudGFibGVNYWluRWxlbWVudCwgcmlnaHRDbGFzc05hbWUpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnRhYmxlTWFpbkVsZW1lbnQsIGxlZnRDbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMudGFibGVNYWluRWxlbWVudCwgbGVmdENsYXNzTmFtZSk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMudGFibGVNYWluRWxlbWVudCwgcmlnaHRDbGFzc05hbWUpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sIHByaXZhdGUgcmVzaXplU2VydmljZTogTnpSZXNpemVTZXJ2aWNlKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IHNjcm9sbFgsIHNjcm9sbFksIGRhdGEgfSA9IGNoYW5nZXM7XG4gICAgaWYgKHNjcm9sbFggfHwgc2Nyb2xsWSkge1xuICAgICAgY29uc3QgaGFzVmVydGljYWxTY3JvbGxCYXIgPSB0aGlzLnZlcnRpY2FsU2Nyb2xsQmFyV2lkdGggIT09IDA7XG4gICAgICB0aGlzLmhlYWRlclN0eWxlTWFwID0ge1xuICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxuICAgICAgICBvdmVyZmxvd1k6IHRoaXMuc2Nyb2xsWSAmJiBoYXNWZXJ0aWNhbFNjcm9sbEJhciA/ICdzY3JvbGwnIDogJ2hpZGRlbidcbiAgICAgIH07XG4gICAgICB0aGlzLmJvZHlTdHlsZU1hcCA9IHtcbiAgICAgICAgb3ZlcmZsb3dZOiB0aGlzLnNjcm9sbFkgPyAnc2Nyb2xsJyA6IG51bGwsXG4gICAgICAgIG92ZXJmbG93WDogdGhpcy5zY3JvbGxYID8gJ3Njcm9sbCcgOiBudWxsLFxuICAgICAgICBtYXhIZWlnaHQ6IHRoaXMuc2Nyb2xsWVxuICAgICAgfTtcbiAgICAgIHRoaXMuc2Nyb2xsJC5uZXh0KCk7XG4gICAgfVxuICAgIGlmIChkYXRhKSB7XG4gICAgICB0aGlzLmRhdGEkLm5leHQoKTtcbiAgICB9XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICBjb25zdCBzY3JvbGxFdmVudCQgPSBmcm9tRXZlbnQ8TW91c2VFdmVudD4odGhpcy50YWJsZUJvZHlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzY3JvbGwnKS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSk7XG4gICAgICAgIGNvbnN0IHNjcm9sbFgkID0gc2Nyb2xsRXZlbnQkLnBpcGUoZmlsdGVyKCgpID0+ICEhdGhpcy5zY3JvbGxYKSk7XG4gICAgICAgIGNvbnN0IHNjcm9sbFkkID0gc2Nyb2xsRXZlbnQkLnBpcGUoZmlsdGVyKCgpID0+ICEhdGhpcy5zY3JvbGxZKSk7XG4gICAgICAgIGNvbnN0IHJlc2l6ZSQgPSB0aGlzLnJlc2l6ZVNlcnZpY2Uuc3Vic2NyaWJlKCkucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpO1xuICAgICAgICBjb25zdCBkYXRhJCA9IHRoaXMuZGF0YSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpO1xuICAgICAgICBjb25zdCBzZXRDbGFzc05hbWUkID0gbWVyZ2Uoc2Nyb2xsWCQsIHJlc2l6ZSQsIGRhdGEkLCB0aGlzLnNjcm9sbCQpLnBpcGUoc3RhcnRXaXRoKHRydWUpLCBkZWxheSgwKSk7XG4gICAgICAgIHNldENsYXNzTmFtZSQuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0U2Nyb2xsUG9zaXRpb25DbGFzc05hbWUoKSk7XG4gICAgICAgIHNjcm9sbFkkLnN1YnNjcmliZSgoKSA9PiAodGhpcy50YWJsZUhlYWRlckVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ID0gdGhpcy50YWJsZUJvZHlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0U2Nyb2xsUG9zaXRpb25DbGFzc05hbWUodHJ1ZSk7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=