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
export class NzTableInnerScrollComponent {
    /**
     * @param {?} renderer
     * @param {?} ngZone
     * @param {?} platform
     * @param {?} resizeService
     */
    constructor(renderer, ngZone, platform, resizeService) {
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
        index => index);
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
    setScrollPositionClassName(clear = false) {
        const { scrollWidth, scrollLeft, clientWidth } = this.tableBodyElement.nativeElement;
        /** @type {?} */
        const leftClassName = 'ant-table-ping-left';
        /** @type {?} */
        const rightClassName = 'ant-table-ping-right';
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
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { scrollX, scrollY, data } = changes;
        if (scrollX || scrollY) {
            /** @type {?} */
            const hasVerticalScrollBar = this.verticalScrollBarWidth !== 0;
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
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.platform.isBrowser) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const scrollEvent$ = fromEvent(this.tableBodyElement.nativeElement, 'scroll').pipe(takeUntil(this.destroy$));
                /** @type {?} */
                const scrollX$ = scrollEvent$.pipe(filter((/**
                 * @return {?}
                 */
                () => !!this.scrollX)));
                /** @type {?} */
                const scrollY$ = scrollEvent$.pipe(filter((/**
                 * @return {?}
                 */
                () => !!this.scrollY)));
                /** @type {?} */
                const resize$ = this.resizeService.subscribe().pipe(takeUntil(this.destroy$));
                /** @type {?} */
                const data$ = this.data$.pipe(takeUntil(this.destroy$));
                /** @type {?} */
                const setClassName$ = merge(scrollX$, resize$, data$, this.scroll$).pipe(startWith(true), delay(0));
                setClassName$.subscribe((/**
                 * @return {?}
                 */
                () => this.setScrollPositionClassName()));
                scrollY$.subscribe((/**
                 * @return {?}
                 */
                () => (this.tableHeaderElement.nativeElement.scrollLeft = this.tableBodyElement.nativeElement.scrollLeft)));
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.setScrollPositionClassName(true);
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTableInnerScrollComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-table-inner-scroll',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <div class="ant-table-content">
      <div *ngIf="scrollY" #tableHeaderElement [ngStyle]="headerStyleMap" class="ant-table-header nz-table-hide-scrollbar">
        <table
          nz-table-content
          tableLayout="fixed"
          [scrollX]="scrollX"
          [listOfColWidth]="listOfColWidth"
          [theadTemplate]="theadTemplate"
        ></table>
      </div>
      <div #tableBodyElement *ngIf="!virtualTemplate" class="ant-table-body" [ngStyle]="bodyStyleMap">
        <table
          nz-table-content
          [scrollX]="scrollX"
          tableLayout="fixed"
          [listOfColWidth]="listOfColWidth"
          [theadTemplate]="scrollY ? null : theadTemplate"
          [contentTemplate]="contentTemplate"
        ></table>
      </div>
      <cdk-virtual-scroll-viewport
        #tableBodyElement
        *ngIf="virtualTemplate"
        [itemSize]="virtualItemSize"
        [maxBufferPx]="virtualMaxBufferPx"
        [minBufferPx]="virtualMinBufferPx"
        [style.height]="data.length ? scrollY : noDateVirtualHeight"
      >
        <table nz-table-content tableLayout="fixed" [scrollX]="scrollX" [listOfColWidth]="listOfColWidth">
          <tbody>
            <ng-container *cdkVirtualFor="let item of data; let i = index; trackBy: virtualForTrackBy">
              <ng-template [ngTemplateOutlet]="virtualTemplate" [ngTemplateOutletContext]="{ $implicit: item, index: i }"></ng-template>
            </ng-container>
          </tbody>
        </table>
      </cdk-virtual-scroll-viewport>
    </div>
  `,
                host: {
                    '[class.ant-table-container]': 'true'
                }
            }] }
];
/** @nocollapse */
NzTableInnerScrollComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: NgZone },
    { type: Platform },
    { type: NzResizeService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaW5uZXItc2Nyb2xsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdGFibGUvIiwic291cmNlcyI6WyJzcmMvdGFibGUvdGFibGUtaW5uZXItc2Nyb2xsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbEUsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBR04sU0FBUyxFQUlULFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTlELE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFrRHJFLE1BQU0sT0FBTywyQkFBMkI7Ozs7Ozs7SUE2Q3RDLFlBQW9CLFFBQW1CLEVBQVUsTUFBYyxFQUFVLFFBQWtCLEVBQVUsYUFBOEI7UUFBL0csYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWlCO1FBNUMxSCxTQUFJLEdBQWtCLEVBQUUsQ0FBQztRQUN6QixZQUFPLEdBQWtCLElBQUksQ0FBQztRQUM5QixZQUFPLEdBQWtCLElBQUksQ0FBQztRQUM5QixvQkFBZSxHQUFrQyxJQUFJLENBQUM7UUFDdEQsZ0JBQVcsR0FBYSxFQUFFLENBQUM7UUFDM0IsbUJBQWMsR0FB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OytCQUNwRCxTQUFTLFNBQUMsa0JBQWtCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO3VDQUNsRCxTQUFTLFNBQUMsd0JBQXdCLEVBQUUsRUFBRSxJQUFJLEVBQUUsd0JBQXdCLEVBQUU7cUNBSXRFLEtBQUs7Ozs7SUFuQk4sMkNBQWtDOztJQUNsQyw4Q0FBdUM7O0lBQ3ZDLDhDQUF1Qzs7SUFDdkMsc0RBQStEOztJQUMvRCxrREFBb0M7O0lBQ3BDLHFEQUFtRDs7SUFDbkQsb0RBQTZEOztJQUM3RCxzREFBK0Q7O0lBQy9ELHNEQUE2Qjs7SUFDN0IseURBQWtDOztJQUNsQyx5REFBa0M7O0lBQ2xDLHVEQUEyQzs7SUFDM0Msd0RBQTBFOztJQUMxRSx5REFBdUY7O0lBQ3ZGLHVEQUFtRjs7SUFDbkYsK0RBQ29EOztJQUNwRCxxREFBb0I7O0lBQ3BCLG1EQUFrQjs7SUFDbEIsNkRBQW9DOztJQUNwQywwREFBOEI7Ozs7O0lBQzlCLDRDQUFvQzs7Ozs7SUFDcEMsOENBQXNDOzs7OztJQUN0QywrQ0FBdUM7Ozs7O0lBcUIzQiwrQ0FBMkI7Ozs7O0lBQUUsNkNBQXNCOzs7OztJQUFFLCtDQUEwQjs7Ozs7SUFBRSxvREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBUcmFja0J5RnVuY3Rpb24sXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelJlc2l6ZVNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvc2VydmljZXMnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IGZyb21FdmVudCwgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlbGF5LCBmaWx0ZXIsIHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnpUYWJsZURhdGEgfSBmcm9tICcuLi90YWJsZS50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXRhYmxlLWlubmVyLXNjcm9sbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJhbnQtdGFibGUtY29udGVudFwiPlxuICAgICAgPGRpdiAqbmdJZj1cInNjcm9sbFlcIiAjdGFibGVIZWFkZXJFbGVtZW50IFtuZ1N0eWxlXT1cImhlYWRlclN0eWxlTWFwXCIgY2xhc3M9XCJhbnQtdGFibGUtaGVhZGVyIG56LXRhYmxlLWhpZGUtc2Nyb2xsYmFyXCI+XG4gICAgICAgIDx0YWJsZVxuICAgICAgICAgIG56LXRhYmxlLWNvbnRlbnRcbiAgICAgICAgICB0YWJsZUxheW91dD1cImZpeGVkXCJcbiAgICAgICAgICBbc2Nyb2xsWF09XCJzY3JvbGxYXCJcbiAgICAgICAgICBbbGlzdE9mQ29sV2lkdGhdPVwibGlzdE9mQ29sV2lkdGhcIlxuICAgICAgICAgIFt0aGVhZFRlbXBsYXRlXT1cInRoZWFkVGVtcGxhdGVcIlxuICAgICAgICA+PC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiAjdGFibGVCb2R5RWxlbWVudCAqbmdJZj1cIiF2aXJ0dWFsVGVtcGxhdGVcIiBjbGFzcz1cImFudC10YWJsZS1ib2R5XCIgW25nU3R5bGVdPVwiYm9keVN0eWxlTWFwXCI+XG4gICAgICAgIDx0YWJsZVxuICAgICAgICAgIG56LXRhYmxlLWNvbnRlbnRcbiAgICAgICAgICBbc2Nyb2xsWF09XCJzY3JvbGxYXCJcbiAgICAgICAgICB0YWJsZUxheW91dD1cImZpeGVkXCJcbiAgICAgICAgICBbbGlzdE9mQ29sV2lkdGhdPVwibGlzdE9mQ29sV2lkdGhcIlxuICAgICAgICAgIFt0aGVhZFRlbXBsYXRlXT1cInNjcm9sbFkgPyBudWxsIDogdGhlYWRUZW1wbGF0ZVwiXG4gICAgICAgICAgW2NvbnRlbnRUZW1wbGF0ZV09XCJjb250ZW50VGVtcGxhdGVcIlxuICAgICAgICA+PC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydFxuICAgICAgICAjdGFibGVCb2R5RWxlbWVudFxuICAgICAgICAqbmdJZj1cInZpcnR1YWxUZW1wbGF0ZVwiXG4gICAgICAgIFtpdGVtU2l6ZV09XCJ2aXJ0dWFsSXRlbVNpemVcIlxuICAgICAgICBbbWF4QnVmZmVyUHhdPVwidmlydHVhbE1heEJ1ZmZlclB4XCJcbiAgICAgICAgW21pbkJ1ZmZlclB4XT1cInZpcnR1YWxNaW5CdWZmZXJQeFwiXG4gICAgICAgIFtzdHlsZS5oZWlnaHRdPVwiZGF0YS5sZW5ndGggPyBzY3JvbGxZIDogbm9EYXRlVmlydHVhbEhlaWdodFwiXG4gICAgICA+XG4gICAgICAgIDx0YWJsZSBuei10YWJsZS1jb250ZW50IHRhYmxlTGF5b3V0PVwiZml4ZWRcIiBbc2Nyb2xsWF09XCJzY3JvbGxYXCIgW2xpc3RPZkNvbFdpZHRoXT1cImxpc3RPZkNvbFdpZHRoXCI+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqY2RrVmlydHVhbEZvcj1cImxldCBpdGVtIG9mIGRhdGE7IGxldCBpID0gaW5kZXg7IHRyYWNrQnk6IHZpcnR1YWxGb3JUcmFja0J5XCI+XG4gICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ2aXJ0dWFsVGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGl0ZW0sIGluZGV4OiBpIH1cIj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0PlxuICAgIDwvZGl2PlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtY29udGFpbmVyXSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56VGFibGVJbm5lclNjcm9sbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgZGF0YTogTnpUYWJsZURhdGFbXSA9IFtdO1xuICBASW5wdXQoKSBzY3JvbGxYOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgc2Nyb2xsWTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGNvbnRlbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSB3aWR0aENvbmZpZzogc3RyaW5nW10gPSBbXTtcbiAgQElucHV0KCkgbGlzdE9mQ29sV2lkdGg6IEFycmF5PHN0cmluZyB8IG51bGw+ID0gW107XG4gIEBJbnB1dCgpIHRoZWFkVGVtcGxhdGU6IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgdmlydHVhbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIHZpcnR1YWxJdGVtU2l6ZSA9IDA7XG4gIEBJbnB1dCgpIHZpcnR1YWxNYXhCdWZmZXJQeCA9IDIwMDtcbiAgQElucHV0KCkgdmlydHVhbE1pbkJ1ZmZlclB4ID0gMTAwO1xuICBASW5wdXQoKSB0YWJsZU1haW5FbGVtZW50PzogSFRNTERpdkVsZW1lbnQ7XG4gIEBJbnB1dCgpIHZpcnR1YWxGb3JUcmFja0J5OiBUcmFja0J5RnVuY3Rpb248TnpUYWJsZURhdGE+ID0gaW5kZXggPT4gaW5kZXg7XG4gIEBWaWV3Q2hpbGQoJ3RhYmxlSGVhZGVyRWxlbWVudCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSB0YWJsZUhlYWRlckVsZW1lbnQhOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCd0YWJsZUJvZHlFbGVtZW50JywgeyByZWFkOiBFbGVtZW50UmVmIH0pIHRhYmxlQm9keUVsZW1lbnQhOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCwgeyByZWFkOiBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQgfSlcbiAgY2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0PzogQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0O1xuICBoZWFkZXJTdHlsZU1hcCA9IHt9O1xuICBib2R5U3R5bGVNYXAgPSB7fTtcbiAgQElucHV0KCkgdmVydGljYWxTY3JvbGxCYXJXaWR0aCA9IDA7XG4gIG5vRGF0ZVZpcnR1YWxIZWlnaHQgPSAnMTgycHgnO1xuICBwcml2YXRlIGRhdGEkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBzY3JvbGwkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgc2V0U2Nyb2xsUG9zaXRpb25DbGFzc05hbWUoY2xlYXI6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGNvbnN0IHsgc2Nyb2xsV2lkdGgsIHNjcm9sbExlZnQsIGNsaWVudFdpZHRoIH0gPSB0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBsZWZ0Q2xhc3NOYW1lID0gJ2FudC10YWJsZS1waW5nLWxlZnQnO1xuICAgIGNvbnN0IHJpZ2h0Q2xhc3NOYW1lID0gJ2FudC10YWJsZS1waW5nLXJpZ2h0JztcbiAgICBpZiAoKHNjcm9sbFdpZHRoID09PSBjbGllbnRXaWR0aCAmJiBzY3JvbGxXaWR0aCAhPT0gMCkgfHwgY2xlYXIpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy50YWJsZU1haW5FbGVtZW50LCBsZWZ0Q2xhc3NOYW1lKTtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy50YWJsZU1haW5FbGVtZW50LCByaWdodENsYXNzTmFtZSk7XG4gICAgfSBlbHNlIGlmIChzY3JvbGxMZWZ0ID09PSAwKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMudGFibGVNYWluRWxlbWVudCwgbGVmdENsYXNzTmFtZSk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMudGFibGVNYWluRWxlbWVudCwgcmlnaHRDbGFzc05hbWUpO1xuICAgIH0gZWxzZSBpZiAoc2Nyb2xsV2lkdGggPT09IHNjcm9sbExlZnQgKyBjbGllbnRXaWR0aCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLnRhYmxlTWFpbkVsZW1lbnQsIHJpZ2h0Q2xhc3NOYW1lKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy50YWJsZU1haW5FbGVtZW50LCBsZWZ0Q2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnRhYmxlTWFpbkVsZW1lbnQsIGxlZnRDbGFzc05hbWUpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnRhYmxlTWFpbkVsZW1lbnQsIHJpZ2h0Q2xhc3NOYW1lKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLCBwcml2YXRlIHJlc2l6ZVNlcnZpY2U6IE56UmVzaXplU2VydmljZSkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBzY3JvbGxYLCBzY3JvbGxZLCBkYXRhIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChzY3JvbGxYIHx8IHNjcm9sbFkpIHtcbiAgICAgIGNvbnN0IGhhc1ZlcnRpY2FsU2Nyb2xsQmFyID0gdGhpcy52ZXJ0aWNhbFNjcm9sbEJhcldpZHRoICE9PSAwO1xuICAgICAgdGhpcy5oZWFkZXJTdHlsZU1hcCA9IHtcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICAgICAgb3ZlcmZsb3dZOiB0aGlzLnNjcm9sbFkgJiYgaGFzVmVydGljYWxTY3JvbGxCYXIgPyAnc2Nyb2xsJyA6ICdoaWRkZW4nXG4gICAgICB9O1xuICAgICAgdGhpcy5ib2R5U3R5bGVNYXAgPSB7XG4gICAgICAgIG92ZXJmbG93WTogdGhpcy5zY3JvbGxZID8gJ3Njcm9sbCcgOiBudWxsLFxuICAgICAgICBvdmVyZmxvd1g6IHRoaXMuc2Nyb2xsWCA/ICdzY3JvbGwnIDogbnVsbCxcbiAgICAgICAgbWF4SGVpZ2h0OiB0aGlzLnNjcm9sbFlcbiAgICAgIH07XG4gICAgICB0aGlzLnNjcm9sbCQubmV4dCgpO1xuICAgIH1cbiAgICBpZiAoZGF0YSkge1xuICAgICAgdGhpcy5kYXRhJC5uZXh0KCk7XG4gICAgfVxuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsRXZlbnQkID0gZnJvbUV2ZW50PE1vdXNlRXZlbnQ+KHRoaXMudGFibGVCb2R5RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnc2Nyb2xsJykucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpO1xuICAgICAgICBjb25zdCBzY3JvbGxYJCA9IHNjcm9sbEV2ZW50JC5waXBlKGZpbHRlcigoKSA9PiAhIXRoaXMuc2Nyb2xsWCkpO1xuICAgICAgICBjb25zdCBzY3JvbGxZJCA9IHNjcm9sbEV2ZW50JC5waXBlKGZpbHRlcigoKSA9PiAhIXRoaXMuc2Nyb2xsWSkpO1xuICAgICAgICBjb25zdCByZXNpemUkID0gdGhpcy5yZXNpemVTZXJ2aWNlLnN1YnNjcmliZSgpLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKTtcbiAgICAgICAgY29uc3QgZGF0YSQgPSB0aGlzLmRhdGEkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKTtcbiAgICAgICAgY29uc3Qgc2V0Q2xhc3NOYW1lJCA9IG1lcmdlKHNjcm9sbFgkLCByZXNpemUkLCBkYXRhJCwgdGhpcy5zY3JvbGwkKS5waXBlKHN0YXJ0V2l0aCh0cnVlKSwgZGVsYXkoMCkpO1xuICAgICAgICBzZXRDbGFzc05hbWUkLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNldFNjcm9sbFBvc2l0aW9uQ2xhc3NOYW1lKCkpO1xuICAgICAgICBzY3JvbGxZJC5zdWJzY3JpYmUoKCkgPT4gKHRoaXMudGFibGVIZWFkZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCA9IHRoaXMudGFibGVCb2R5RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFNjcm9sbFBvc2l0aW9uQ2xhc3NOYW1lKHRydWUpO1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19