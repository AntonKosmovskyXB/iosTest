/**
 * @fileoverview added by tsickle
 * Generated from: src/table/table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { NzResizeObserver } from 'ng-zorro-antd/core/resize-observers';
import { InputBoolean, measureScrollbar } from 'ng-zorro-antd/core/util';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { NzTableDataService } from '../table-data.service';
import { NzTableStyleService } from '../table-style.service';
import { NzTableInnerScrollComponent } from './table-inner-scroll.component';
import { NzTableVirtualScrollDirective } from './table-virtual-scroll.directive';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'table';
/**
 * @template T
 */
export class NzTableComponent {
    /**
     * @param {?} elementRef
     * @param {?} nzResizeObserver
     * @param {?} nzConfigService
     * @param {?} cdr
     * @param {?} nzTableStyleService
     * @param {?} nzTableDataService
     */
    constructor(elementRef, nzResizeObserver, nzConfigService, cdr, nzTableStyleService, nzTableDataService) {
        this.elementRef = elementRef;
        this.nzResizeObserver = nzResizeObserver;
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.nzTableStyleService = nzTableStyleService;
        this.nzTableDataService = nzTableDataService;
        this.nzTableLayout = 'auto';
        this.nzShowTotal = null;
        this.nzItemRender = null;
        this.nzTitle = null;
        this.nzFooter = null;
        this.nzNoResult = undefined;
        this.nzPageSizeOptions = [10, 20, 30, 40, 50];
        this.nzVirtualItemSize = 0;
        this.nzVirtualMaxBufferPx = 200;
        this.nzVirtualMinBufferPx = 100;
        this.nzVirtualForTrackBy = (/**
         * @param {?} index
         * @return {?}
         */
        index => index);
        this.nzLoadingDelay = 0;
        this.nzPageIndex = 1;
        this.nzPageSize = 10;
        this.nzTotal = 0;
        this.nzWidthConfig = [];
        this.nzData = [];
        this.nzPaginationPosition = 'bottom';
        this.nzScroll = { x: null, y: null };
        this.nzFrontPagination = true;
        this.nzTemplateMode = false;
        this.nzShowPagination = true;
        this.nzLoading = false;
        this.nzLoadingIndicator = null;
        this.nzBordered = false;
        this.nzSize = 'default';
        this.nzShowSizeChanger = false;
        this.nzHideOnSinglePage = false;
        this.nzShowQuickJumper = false;
        this.nzSimple = false;
        this.nzPageSizeChange = new EventEmitter();
        this.nzPageIndexChange = new EventEmitter();
        this.nzQueryParams = new EventEmitter();
        this.nzCurrentPageDataChange = new EventEmitter();
        /**
         * public data for ngFor tr
         */
        this.data = [];
        this.scrollX = null;
        this.scrollY = null;
        this.theadTemplate = null;
        this.listOfAutoColWidth = [];
        this.listOfManualColWidth = [];
        this.hasFixLeft = false;
        this.hasFixRight = false;
        this.destroy$ = new Subject();
        this.loading$ = new BehaviorSubject(false);
        this.templateMode$ = new BehaviorSubject(false);
        this.verticalScrollBarWidth = 0;
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.cdr.markForCheck();
        }));
    }
    /**
     * @param {?} size
     * @return {?}
     */
    onPageSizeChange(size) {
        this.nzTableDataService.updatePageSize(size);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    onPageIndexChange(index) {
        this.nzTableDataService.updatePageIndex(index);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const { pageIndexDistinct$, pageSizeDistinct$, listOfCurrentPageData$, total$, queryParams$ } = this.nzTableDataService;
        const { theadTemplate$, hasFixLeft$, hasFixRight$ } = this.nzTableStyleService;
        queryParams$.pipe(takeUntil(this.destroy$)).subscribe(this.nzQueryParams);
        pageIndexDistinct$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} pageIndex
         * @return {?}
         */
        pageIndex => {
            if (pageIndex !== this.nzPageIndex) {
                this.nzPageIndex = pageIndex;
                this.nzPageIndexChange.next(pageIndex);
            }
        }));
        pageSizeDistinct$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} pageSize
         * @return {?}
         */
        pageSize => {
            if (pageSize !== this.nzPageSize) {
                this.nzPageSize = pageSize;
                this.nzPageSizeChange.next(pageSize);
            }
        }));
        total$
            .pipe(takeUntil(this.destroy$), filter((/**
         * @return {?}
         */
        () => this.nzFrontPagination)))
            .subscribe((/**
         * @param {?} total
         * @return {?}
         */
        total => {
            if (total !== this.nzTotal) {
                this.nzTotal = total;
                this.cdr.markForCheck();
            }
        }));
        listOfCurrentPageData$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.data = data;
            this.nzCurrentPageDataChange.next(data);
            this.cdr.markForCheck();
        }));
        theadTemplate$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} theadTemplate
         * @return {?}
         */
        theadTemplate => {
            this.theadTemplate = theadTemplate;
            this.cdr.markForCheck();
        }));
        hasFixLeft$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} hasFixLeft
         * @return {?}
         */
        hasFixLeft => {
            this.hasFixLeft = hasFixLeft;
            this.cdr.markForCheck();
        }));
        hasFixRight$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} hasFixRight
         * @return {?}
         */
        hasFixRight => {
            this.hasFixRight = hasFixRight;
            this.cdr.markForCheck();
        }));
        combineLatest([total$, this.loading$, this.templateMode$])
            .pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([total, loading, templateMode]) => total === 0 && !loading && !templateMode)), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} empty
         * @return {?}
         */
        empty => {
            this.nzTableStyleService.setShowEmpty(empty);
        }));
        this.verticalScrollBarWidth = measureScrollbar('vertical');
        this.nzTableStyleService.listOfListOfThWidthPx$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} listOfWidth
         * @return {?}
         */
        listOfWidth => {
            this.listOfAutoColWidth = listOfWidth;
            this.cdr.markForCheck();
        }));
        this.nzTableStyleService.manualWidthConfigPx$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} listOfWidth
         * @return {?}
         */
        listOfWidth => {
            this.listOfManualColWidth = listOfWidth;
            this.cdr.markForCheck();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzScroll, nzPageIndex, nzPageSize, nzFrontPagination, nzData, nzWidthConfig, nzNoResult, nzLoading, nzTemplateMode } = changes;
        if (nzPageIndex) {
            this.nzTableDataService.updatePageIndex(this.nzPageIndex);
        }
        if (nzPageSize) {
            this.nzTableDataService.updatePageSize(this.nzPageSize);
        }
        if (nzData) {
            this.nzData = this.nzData || [];
            this.nzTableDataService.updateListOfData(this.nzData);
        }
        if (nzFrontPagination) {
            this.nzTableDataService.updateFrontPagination(this.nzFrontPagination);
        }
        if (nzScroll) {
            this.scrollX = (this.nzScroll && this.nzScroll.x) || null;
            this.scrollY = (this.nzScroll && this.nzScroll.y) || null;
            this.nzTableStyleService.setScroll(this.scrollX, this.scrollY);
        }
        if (nzWidthConfig) {
            this.nzTableStyleService.setTableWidthConfig(this.nzWidthConfig);
        }
        if (nzLoading) {
            this.loading$.next(this.nzLoading);
        }
        if (nzTemplateMode) {
            this.templateMode$.next(this.nzTemplateMode);
        }
        if (nzNoResult) {
            this.nzTableStyleService.setNoResult(this.nzNoResult);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.nzResizeObserver
            .observe(this.elementRef)
            .pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([entry]) => {
            const { width } = entry.target.getBoundingClientRect();
            /** @type {?} */
            const scrollBarWidth = this.scrollY ? this.verticalScrollBarWidth : 0;
            return Math.floor(width - scrollBarWidth);
        })), takeUntil(this.destroy$))
            .subscribe(this.nzTableStyleService.hostWidth$);
        if (this.nzTableInnerScrollComponent && this.nzTableInnerScrollComponent.cdkVirtualScrollViewport) {
            this.cdkVirtualScrollViewport = this.nzTableInnerScrollComponent.cdkVirtualScrollViewport;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-table',
                exportAs: 'nzTable',
                providers: [NzTableStyleService, NzTableDataService],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <nz-spin [nzDelay]="nzLoadingDelay" [nzSpinning]="nzLoading" [nzIndicator]="nzLoadingIndicator">
      <ng-container *ngIf="nzPaginationPosition === 'both' || nzPaginationPosition === 'top'">
        <ng-template [ngTemplateOutlet]="paginationTemplate"></ng-template>
      </ng-container>
      <div
        #tableMainElement
        class="ant-table"
        [class.ant-table-fixed-header]="nzData.length && scrollY"
        [class.ant-table-fixed-column]="scrollX"
        [class.ant-table-has-fix-left]="hasFixLeft"
        [class.ant-table-has-fix-right]="hasFixRight"
        [class.ant-table-bordered]="nzBordered"
        [class.ant-table-middle]="nzSize === 'middle'"
        [class.ant-table-small]="nzSize === 'small'"
      >
        <nz-table-title-footer [title]="nzTitle" *ngIf="nzTitle"></nz-table-title-footer>
        <nz-table-inner-scroll
          *ngIf="scrollY || scrollX; else defaultTemplate"
          [data]="data"
          [scrollX]="scrollX"
          [scrollY]="scrollY"
          [contentTemplate]="contentTemplate"
          [listOfColWidth]="listOfAutoColWidth"
          [theadTemplate]="theadTemplate"
          [verticalScrollBarWidth]="verticalScrollBarWidth"
          [virtualTemplate]="nzVirtualScrollDirective ? nzVirtualScrollDirective.templateRef : null"
          [virtualItemSize]="nzVirtualItemSize"
          [virtualMaxBufferPx]="nzVirtualMaxBufferPx"
          [virtualMinBufferPx]="nzVirtualMinBufferPx"
          [tableMainElement]="tableMainElement"
          [virtualForTrackBy]="nzVirtualForTrackBy"
        ></nz-table-inner-scroll>
        <ng-template #defaultTemplate>
          <nz-table-inner-default
            [tableLayout]="nzTableLayout"
            [listOfColWidth]="listOfManualColWidth"
            [theadTemplate]="theadTemplate"
            [contentTemplate]="contentTemplate"
          ></nz-table-inner-default>
        </ng-template>
        <nz-table-title-footer [footer]="nzFooter" *ngIf="nzFooter"></nz-table-title-footer>
      </div>
      <ng-container *ngIf="nzPaginationPosition === 'both' || nzPaginationPosition === 'bottom'">
        <ng-template [ngTemplateOutlet]="paginationTemplate"></ng-template>
      </ng-container>
    </nz-spin>
    <ng-template #paginationTemplate>
      <nz-pagination
        *ngIf="nzShowPagination && data.length"
        class="ant-table-pagination ant-table-pagination-right"
        [nzShowSizeChanger]="nzShowSizeChanger"
        [nzPageSizeOptions]="nzPageSizeOptions"
        [nzItemRender]="nzItemRender!"
        [nzShowQuickJumper]="nzShowQuickJumper"
        [nzHideOnSinglePage]="nzHideOnSinglePage"
        [nzShowTotal]="nzShowTotal"
        [nzSize]="nzSize === 'default' ? 'default' : 'small'"
        [nzPageSize]="nzPageSize"
        [nzTotal]="nzTotal"
        [nzSimple]="nzSimple"
        [nzPageIndex]="nzPageIndex"
        (nzPageSizeChange)="onPageSizeChange($event)"
        (nzPageIndexChange)="onPageIndexChange($event)"
      >
      </nz-pagination>
    </ng-template>
    <ng-template #contentTemplate>
      <ng-content></ng-content>
    </ng-template>
  `,
                host: {
                    '[class.ant-table-wrapper]': 'true'
                }
            }] }
];
/** @nocollapse */
NzTableComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NzResizeObserver },
    { type: NzConfigService },
    { type: ChangeDetectorRef },
    { type: NzTableStyleService },
    { type: NzTableDataService }
];
NzTableComponent.propDecorators = {
    nzTableLayout: [{ type: Input }],
    nzShowTotal: [{ type: Input }],
    nzItemRender: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzFooter: [{ type: Input }],
    nzNoResult: [{ type: Input }],
    nzPageSizeOptions: [{ type: Input }],
    nzVirtualItemSize: [{ type: Input }],
    nzVirtualMaxBufferPx: [{ type: Input }],
    nzVirtualMinBufferPx: [{ type: Input }],
    nzVirtualForTrackBy: [{ type: Input }],
    nzLoadingDelay: [{ type: Input }],
    nzPageIndex: [{ type: Input }],
    nzPageSize: [{ type: Input }],
    nzTotal: [{ type: Input }],
    nzWidthConfig: [{ type: Input }],
    nzData: [{ type: Input }],
    nzPaginationPosition: [{ type: Input }],
    nzScroll: [{ type: Input }],
    nzFrontPagination: [{ type: Input }],
    nzTemplateMode: [{ type: Input }],
    nzShowPagination: [{ type: Input }],
    nzLoading: [{ type: Input }],
    nzLoadingIndicator: [{ type: Input }],
    nzBordered: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzShowSizeChanger: [{ type: Input }],
    nzHideOnSinglePage: [{ type: Input }],
    nzShowQuickJumper: [{ type: Input }],
    nzSimple: [{ type: Input }],
    nzPageSizeChange: [{ type: Output }],
    nzPageIndexChange: [{ type: Output }],
    nzQueryParams: [{ type: Output }],
    nzCurrentPageDataChange: [{ type: Output }],
    nzVirtualScrollDirective: [{ type: ContentChild, args: [NzTableVirtualScrollDirective, { static: false },] }],
    nzTableInnerScrollComponent: [{ type: ViewChild, args: [NzTableInnerScrollComponent,] }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTableComponent.prototype, "nzFrontPagination", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTableComponent.prototype, "nzTemplateMode", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTableComponent.prototype, "nzShowPagination", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTableComponent.prototype, "nzLoading", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    __metadata("design:type", Object)
], NzTableComponent.prototype, "nzLoadingIndicator", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME), InputBoolean(),
    __metadata("design:type", Boolean)
], NzTableComponent.prototype, "nzBordered", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    __metadata("design:type", String)
], NzTableComponent.prototype, "nzSize", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME), InputBoolean(),
    __metadata("design:type", Boolean)
], NzTableComponent.prototype, "nzShowSizeChanger", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME), InputBoolean(),
    __metadata("design:type", Boolean)
], NzTableComponent.prototype, "nzHideOnSinglePage", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME), InputBoolean(),
    __metadata("design:type", Boolean)
], NzTableComponent.prototype, "nzShowQuickJumper", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME), InputBoolean(),
    __metadata("design:type", Boolean)
], NzTableComponent.prototype, "nzSimple", void 0);
if (false) {
    /** @type {?} */
    NzTableComponent.ngAcceptInputType_nzFrontPagination;
    /** @type {?} */
    NzTableComponent.ngAcceptInputType_nzTemplateMode;
    /** @type {?} */
    NzTableComponent.ngAcceptInputType_nzShowPagination;
    /** @type {?} */
    NzTableComponent.ngAcceptInputType_nzLoading;
    /** @type {?} */
    NzTableComponent.ngAcceptInputType_nzBordered;
    /** @type {?} */
    NzTableComponent.ngAcceptInputType_nzShowSizeChanger;
    /** @type {?} */
    NzTableComponent.ngAcceptInputType_nzHideOnSinglePage;
    /** @type {?} */
    NzTableComponent.ngAcceptInputType_nzShowQuickJumper;
    /** @type {?} */
    NzTableComponent.ngAcceptInputType_nzSimple;
    /** @type {?} */
    NzTableComponent.prototype.nzTableLayout;
    /** @type {?} */
    NzTableComponent.prototype.nzShowTotal;
    /** @type {?} */
    NzTableComponent.prototype.nzItemRender;
    /** @type {?} */
    NzTableComponent.prototype.nzTitle;
    /** @type {?} */
    NzTableComponent.prototype.nzFooter;
    /** @type {?} */
    NzTableComponent.prototype.nzNoResult;
    /** @type {?} */
    NzTableComponent.prototype.nzPageSizeOptions;
    /** @type {?} */
    NzTableComponent.prototype.nzVirtualItemSize;
    /** @type {?} */
    NzTableComponent.prototype.nzVirtualMaxBufferPx;
    /** @type {?} */
    NzTableComponent.prototype.nzVirtualMinBufferPx;
    /** @type {?} */
    NzTableComponent.prototype.nzVirtualForTrackBy;
    /** @type {?} */
    NzTableComponent.prototype.nzLoadingDelay;
    /** @type {?} */
    NzTableComponent.prototype.nzPageIndex;
    /** @type {?} */
    NzTableComponent.prototype.nzPageSize;
    /** @type {?} */
    NzTableComponent.prototype.nzTotal;
    /** @type {?} */
    NzTableComponent.prototype.nzWidthConfig;
    /** @type {?} */
    NzTableComponent.prototype.nzData;
    /** @type {?} */
    NzTableComponent.prototype.nzPaginationPosition;
    /** @type {?} */
    NzTableComponent.prototype.nzScroll;
    /** @type {?} */
    NzTableComponent.prototype.nzFrontPagination;
    /** @type {?} */
    NzTableComponent.prototype.nzTemplateMode;
    /** @type {?} */
    NzTableComponent.prototype.nzShowPagination;
    /** @type {?} */
    NzTableComponent.prototype.nzLoading;
    /** @type {?} */
    NzTableComponent.prototype.nzLoadingIndicator;
    /** @type {?} */
    NzTableComponent.prototype.nzBordered;
    /** @type {?} */
    NzTableComponent.prototype.nzSize;
    /** @type {?} */
    NzTableComponent.prototype.nzShowSizeChanger;
    /** @type {?} */
    NzTableComponent.prototype.nzHideOnSinglePage;
    /** @type {?} */
    NzTableComponent.prototype.nzShowQuickJumper;
    /** @type {?} */
    NzTableComponent.prototype.nzSimple;
    /** @type {?} */
    NzTableComponent.prototype.nzPageSizeChange;
    /** @type {?} */
    NzTableComponent.prototype.nzPageIndexChange;
    /** @type {?} */
    NzTableComponent.prototype.nzQueryParams;
    /** @type {?} */
    NzTableComponent.prototype.nzCurrentPageDataChange;
    /**
     * public data for ngFor tr
     * @type {?}
     */
    NzTableComponent.prototype.data;
    /** @type {?} */
    NzTableComponent.prototype.cdkVirtualScrollViewport;
    /** @type {?} */
    NzTableComponent.prototype.scrollX;
    /** @type {?} */
    NzTableComponent.prototype.scrollY;
    /** @type {?} */
    NzTableComponent.prototype.theadTemplate;
    /** @type {?} */
    NzTableComponent.prototype.listOfAutoColWidth;
    /** @type {?} */
    NzTableComponent.prototype.listOfManualColWidth;
    /** @type {?} */
    NzTableComponent.prototype.hasFixLeft;
    /** @type {?} */
    NzTableComponent.prototype.hasFixRight;
    /**
     * @type {?}
     * @private
     */
    NzTableComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzTableComponent.prototype.loading$;
    /**
     * @type {?}
     * @private
     */
    NzTableComponent.prototype.templateMode$;
    /** @type {?} */
    NzTableComponent.prototype.nzVirtualScrollDirective;
    /** @type {?} */
    NzTableComponent.prototype.nzTableInnerScrollComponent;
    /** @type {?} */
    NzTableComponent.prototype.verticalScrollBarWidth;
    /**
     * @type {?}
     * @private
     */
    NzTableComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzTableComponent.prototype.nzResizeObserver;
    /**
     * @type {?}
     * @private
     */
    NzTableComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzTableComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTableComponent.prototype.nzTableStyleService;
    /**
     * @type {?}
     * @private
     */
    NzTableComponent.prototype.nzTableDataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbInNyYy90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU1BLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUlOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUV2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTdELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztNQUUzRSx3QkFBd0IsR0FBRyxPQUFPOzs7O0FBb0Z4QyxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7Ozs7SUF1RTNCLFlBQ1UsVUFBc0IsRUFDdEIsZ0JBQWtDLEVBQ2xDLGVBQWdDLEVBQ2hDLEdBQXNCLEVBQ3RCLG1CQUF3QyxFQUN4QyxrQkFBc0M7UUFMdEMs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cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVHJhY2tCeUZ1bmN0aW9uLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBOelJlc2l6ZU9ic2VydmVyIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3Jlc2l6ZS1vYnNlcnZlcnMnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBtZWFzdXJlU2Nyb2xsYmFyIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkl0ZW1SZW5kZXJDb250ZXh0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9wYWdpbmF0aW9uJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE56VGFibGVEYXRhU2VydmljZSB9IGZyb20gJy4uL3RhYmxlLWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBOelRhYmxlU3R5bGVTZXJ2aWNlIH0gZnJvbSAnLi4vdGFibGUtc3R5bGUuc2VydmljZSc7XG5pbXBvcnQgeyBOelRhYmxlRGF0YSwgTnpUYWJsZUxheW91dCwgTnpUYWJsZVBhZ2luYXRpb25Qb3NpdGlvbiwgTnpUYWJsZVF1ZXJ5UGFyYW1zLCBOelRhYmxlU2l6ZSB9IGZyb20gJy4uL3RhYmxlLnR5cGVzJztcbmltcG9ydCB7IE56VGFibGVJbm5lclNjcm9sbENvbXBvbmVudCB9IGZyb20gJy4vdGFibGUtaW5uZXItc2Nyb2xsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelRhYmxlVmlydHVhbFNjcm9sbERpcmVjdGl2ZSB9IGZyb20gJy4vdGFibGUtdmlydHVhbC1zY3JvbGwuZGlyZWN0aXZlJztcblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ3RhYmxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotdGFibGUnLFxuICBleHBvcnRBczogJ256VGFibGUnLFxuICBwcm92aWRlcnM6IFtOelRhYmxlU3R5bGVTZXJ2aWNlLCBOelRhYmxlRGF0YVNlcnZpY2VdLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG56LXNwaW4gW256RGVsYXldPVwibnpMb2FkaW5nRGVsYXlcIiBbbnpTcGlubmluZ109XCJuekxvYWRpbmdcIiBbbnpJbmRpY2F0b3JdPVwibnpMb2FkaW5nSW5kaWNhdG9yXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpQYWdpbmF0aW9uUG9zaXRpb24gPT09ICdib3RoJyB8fCBuelBhZ2luYXRpb25Qb3NpdGlvbiA9PT0gJ3RvcCdcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInBhZ2luYXRpb25UZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxkaXZcbiAgICAgICAgI3RhYmxlTWFpbkVsZW1lbnRcbiAgICAgICAgY2xhc3M9XCJhbnQtdGFibGVcIlxuICAgICAgICBbY2xhc3MuYW50LXRhYmxlLWZpeGVkLWhlYWRlcl09XCJuekRhdGEubGVuZ3RoICYmIHNjcm9sbFlcIlxuICAgICAgICBbY2xhc3MuYW50LXRhYmxlLWZpeGVkLWNvbHVtbl09XCJzY3JvbGxYXCJcbiAgICAgICAgW2NsYXNzLmFudC10YWJsZS1oYXMtZml4LWxlZnRdPVwiaGFzRml4TGVmdFwiXG4gICAgICAgIFtjbGFzcy5hbnQtdGFibGUtaGFzLWZpeC1yaWdodF09XCJoYXNGaXhSaWdodFwiXG4gICAgICAgIFtjbGFzcy5hbnQtdGFibGUtYm9yZGVyZWRdPVwibnpCb3JkZXJlZFwiXG4gICAgICAgIFtjbGFzcy5hbnQtdGFibGUtbWlkZGxlXT1cIm56U2l6ZSA9PT0gJ21pZGRsZSdcIlxuICAgICAgICBbY2xhc3MuYW50LXRhYmxlLXNtYWxsXT1cIm56U2l6ZSA9PT0gJ3NtYWxsJ1wiXG4gICAgICA+XG4gICAgICAgIDxuei10YWJsZS10aXRsZS1mb290ZXIgW3RpdGxlXT1cIm56VGl0bGVcIiAqbmdJZj1cIm56VGl0bGVcIj48L256LXRhYmxlLXRpdGxlLWZvb3Rlcj5cbiAgICAgICAgPG56LXRhYmxlLWlubmVyLXNjcm9sbFxuICAgICAgICAgICpuZ0lmPVwic2Nyb2xsWSB8fCBzY3JvbGxYOyBlbHNlIGRlZmF1bHRUZW1wbGF0ZVwiXG4gICAgICAgICAgW2RhdGFdPVwiZGF0YVwiXG4gICAgICAgICAgW3Njcm9sbFhdPVwic2Nyb2xsWFwiXG4gICAgICAgICAgW3Njcm9sbFldPVwic2Nyb2xsWVwiXG4gICAgICAgICAgW2NvbnRlbnRUZW1wbGF0ZV09XCJjb250ZW50VGVtcGxhdGVcIlxuICAgICAgICAgIFtsaXN0T2ZDb2xXaWR0aF09XCJsaXN0T2ZBdXRvQ29sV2lkdGhcIlxuICAgICAgICAgIFt0aGVhZFRlbXBsYXRlXT1cInRoZWFkVGVtcGxhdGVcIlxuICAgICAgICAgIFt2ZXJ0aWNhbFNjcm9sbEJhcldpZHRoXT1cInZlcnRpY2FsU2Nyb2xsQmFyV2lkdGhcIlxuICAgICAgICAgIFt2aXJ0dWFsVGVtcGxhdGVdPVwibnpWaXJ0dWFsU2Nyb2xsRGlyZWN0aXZlID8gbnpWaXJ0dWFsU2Nyb2xsRGlyZWN0aXZlLnRlbXBsYXRlUmVmIDogbnVsbFwiXG4gICAgICAgICAgW3ZpcnR1YWxJdGVtU2l6ZV09XCJuelZpcnR1YWxJdGVtU2l6ZVwiXG4gICAgICAgICAgW3ZpcnR1YWxNYXhCdWZmZXJQeF09XCJuelZpcnR1YWxNYXhCdWZmZXJQeFwiXG4gICAgICAgICAgW3ZpcnR1YWxNaW5CdWZmZXJQeF09XCJuelZpcnR1YWxNaW5CdWZmZXJQeFwiXG4gICAgICAgICAgW3RhYmxlTWFpbkVsZW1lbnRdPVwidGFibGVNYWluRWxlbWVudFwiXG4gICAgICAgICAgW3ZpcnR1YWxGb3JUcmFja0J5XT1cIm56VmlydHVhbEZvclRyYWNrQnlcIlxuICAgICAgICA+PC9uei10YWJsZS1pbm5lci1zY3JvbGw+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRlbXBsYXRlPlxuICAgICAgICAgIDxuei10YWJsZS1pbm5lci1kZWZhdWx0XG4gICAgICAgICAgICBbdGFibGVMYXlvdXRdPVwibnpUYWJsZUxheW91dFwiXG4gICAgICAgICAgICBbbGlzdE9mQ29sV2lkdGhdPVwibGlzdE9mTWFudWFsQ29sV2lkdGhcIlxuICAgICAgICAgICAgW3RoZWFkVGVtcGxhdGVdPVwidGhlYWRUZW1wbGF0ZVwiXG4gICAgICAgICAgICBbY29udGVudFRlbXBsYXRlXT1cImNvbnRlbnRUZW1wbGF0ZVwiXG4gICAgICAgICAgPjwvbnotdGFibGUtaW5uZXItZGVmYXVsdD5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPG56LXRhYmxlLXRpdGxlLWZvb3RlciBbZm9vdGVyXT1cIm56Rm9vdGVyXCIgKm5nSWY9XCJuekZvb3RlclwiPjwvbnotdGFibGUtdGl0bGUtZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpQYWdpbmF0aW9uUG9zaXRpb24gPT09ICdib3RoJyB8fCBuelBhZ2luYXRpb25Qb3NpdGlvbiA9PT0gJ2JvdHRvbSdcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInBhZ2luYXRpb25UZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L256LXNwaW4+XG4gICAgPG5nLXRlbXBsYXRlICNwYWdpbmF0aW9uVGVtcGxhdGU+XG4gICAgICA8bnotcGFnaW5hdGlvblxuICAgICAgICAqbmdJZj1cIm56U2hvd1BhZ2luYXRpb24gJiYgZGF0YS5sZW5ndGhcIlxuICAgICAgICBjbGFzcz1cImFudC10YWJsZS1wYWdpbmF0aW9uIGFudC10YWJsZS1wYWdpbmF0aW9uLXJpZ2h0XCJcbiAgICAgICAgW256U2hvd1NpemVDaGFuZ2VyXT1cIm56U2hvd1NpemVDaGFuZ2VyXCJcbiAgICAgICAgW256UGFnZVNpemVPcHRpb25zXT1cIm56UGFnZVNpemVPcHRpb25zXCJcbiAgICAgICAgW256SXRlbVJlbmRlcl09XCJuekl0ZW1SZW5kZXIhXCJcbiAgICAgICAgW256U2hvd1F1aWNrSnVtcGVyXT1cIm56U2hvd1F1aWNrSnVtcGVyXCJcbiAgICAgICAgW256SGlkZU9uU2luZ2xlUGFnZV09XCJuekhpZGVPblNpbmdsZVBhZ2VcIlxuICAgICAgICBbbnpTaG93VG90YWxdPVwibnpTaG93VG90YWxcIlxuICAgICAgICBbbnpTaXplXT1cIm56U2l6ZSA9PT0gJ2RlZmF1bHQnID8gJ2RlZmF1bHQnIDogJ3NtYWxsJ1wiXG4gICAgICAgIFtuelBhZ2VTaXplXT1cIm56UGFnZVNpemVcIlxuICAgICAgICBbbnpUb3RhbF09XCJuelRvdGFsXCJcbiAgICAgICAgW256U2ltcGxlXT1cIm56U2ltcGxlXCJcbiAgICAgICAgW256UGFnZUluZGV4XT1cIm56UGFnZUluZGV4XCJcbiAgICAgICAgKG56UGFnZVNpemVDaGFuZ2UpPVwib25QYWdlU2l6ZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgKG56UGFnZUluZGV4Q2hhbmdlKT1cIm9uUGFnZUluZGV4Q2hhbmdlKCRldmVudClcIlxuICAgICAgPlxuICAgICAgPC9uei1wYWdpbmF0aW9uPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlICNjb250ZW50VGVtcGxhdGU+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXRhYmxlLXdyYXBwZXJdJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpUYWJsZUNvbXBvbmVudDxUID0gTnpTYWZlQW55PiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpGcm9udFBhZ2luYXRpb246IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256VGVtcGxhdGVNb2RlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNob3dQYWdpbmF0aW9uOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekxvYWRpbmc6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256Qm9yZGVyZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2hvd1NpemVDaGFuZ2VyOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekhpZGVPblNpbmdsZVBhZ2U6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2hvd1F1aWNrSnVtcGVyOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNpbXBsZTogQm9vbGVhbklucHV0O1xuXG4gIEBJbnB1dCgpIG56VGFibGVMYXlvdXQ6IE56VGFibGVMYXlvdXQgPSAnYXV0byc7XG4gIEBJbnB1dCgpIG56U2hvd1RvdGFsOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogbnVtYmVyOyByYW5nZTogW251bWJlciwgbnVtYmVyXSB9PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuekl0ZW1SZW5kZXI6IFRlbXBsYXRlUmVmPFBhZ2luYXRpb25JdGVtUmVuZGVyQ29udGV4dD4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuekZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuek5vUmVzdWx0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICBASW5wdXQoKSBuelBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgMjAsIDMwLCA0MCwgNTBdO1xuICBASW5wdXQoKSBuelZpcnR1YWxJdGVtU2l6ZSA9IDA7XG4gIEBJbnB1dCgpIG56VmlydHVhbE1heEJ1ZmZlclB4ID0gMjAwO1xuICBASW5wdXQoKSBuelZpcnR1YWxNaW5CdWZmZXJQeCA9IDEwMDtcbiAgQElucHV0KCkgbnpWaXJ0dWFsRm9yVHJhY2tCeTogVHJhY2tCeUZ1bmN0aW9uPE56VGFibGVEYXRhPiA9IGluZGV4ID0+IGluZGV4O1xuICBASW5wdXQoKSBuekxvYWRpbmdEZWxheSA9IDA7XG4gIEBJbnB1dCgpIG56UGFnZUluZGV4ID0gMTtcbiAgQElucHV0KCkgbnpQYWdlU2l6ZSA9IDEwO1xuICBASW5wdXQoKSBuelRvdGFsID0gMDtcbiAgQElucHV0KCkgbnpXaWR0aENvbmZpZzogQXJyYXk8c3RyaW5nIHwgbnVsbD4gPSBbXTtcbiAgQElucHV0KCkgbnpEYXRhOiBUW10gPSBbXTtcbiAgQElucHV0KCkgbnpQYWdpbmF0aW9uUG9zaXRpb246IE56VGFibGVQYWdpbmF0aW9uUG9zaXRpb24gPSAnYm90dG9tJztcbiAgQElucHV0KCkgbnpTY3JvbGw6IHsgeD86IHN0cmluZyB8IG51bGw7IHk/OiBzdHJpbmcgfCBudWxsIH0gPSB7IHg6IG51bGwsIHk6IG51bGwgfTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RnJvbnRQYWdpbmF0aW9uID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56VGVtcGxhdGVNb2RlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dQYWdpbmF0aW9uID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIG56TG9hZGluZ0luZGljYXRvcjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIEBJbnB1dEJvb2xlYW4oKSBuekJvcmRlcmVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgbnpTaXplOiBOelRhYmxlU2l6ZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBASW5wdXRCb29sZWFuKCkgbnpTaG93U2l6ZUNoYW5nZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBASW5wdXRCb29sZWFuKCkgbnpIaWRlT25TaW5nbGVQYWdlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgQElucHV0Qm9vbGVhbigpIG56U2hvd1F1aWNrSnVtcGVyOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgQElucHV0Qm9vbGVhbigpIG56U2ltcGxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelBhZ2VTaXplQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelBhZ2VJbmRleENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpRdWVyeVBhcmFtcyA9IG5ldyBFdmVudEVtaXR0ZXI8TnpUYWJsZVF1ZXJ5UGFyYW1zPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDdXJyZW50UGFnZURhdGFDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56VGFibGVEYXRhW10+KCk7XG5cbiAgLyoqIHB1YmxpYyBkYXRhIGZvciBuZ0ZvciB0ciAqL1xuICBwdWJsaWMgZGF0YTogVFtdID0gW107XG4gIHB1YmxpYyBjZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQ/OiBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQ7XG4gIHNjcm9sbFg6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBzY3JvbGxZOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgdGhlYWRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuICBsaXN0T2ZBdXRvQ29sV2lkdGg6IEFycmF5PHN0cmluZyB8IG51bGw+ID0gW107XG4gIGxpc3RPZk1hbnVhbENvbFdpZHRoOiBBcnJheTxzdHJpbmcgfCBudWxsPiA9IFtdO1xuICBoYXNGaXhMZWZ0ID0gZmFsc2U7XG4gIGhhc0ZpeFJpZ2h0ID0gZmFsc2U7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIGxvYWRpbmckID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gIHByaXZhdGUgdGVtcGxhdGVNb2RlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICBAQ29udGVudENoaWxkKE56VGFibGVWaXJ0dWFsU2Nyb2xsRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgbnpWaXJ0dWFsU2Nyb2xsRGlyZWN0aXZlITogTnpUYWJsZVZpcnR1YWxTY3JvbGxEaXJlY3RpdmU7XG4gIEBWaWV3Q2hpbGQoTnpUYWJsZUlubmVyU2Nyb2xsQ29tcG9uZW50KSBuelRhYmxlSW5uZXJTY3JvbGxDb21wb25lbnQhOiBOelRhYmxlSW5uZXJTY3JvbGxDb21wb25lbnQ7XG4gIHZlcnRpY2FsU2Nyb2xsQmFyV2lkdGggPSAwO1xuICBvblBhZ2VTaXplQ2hhbmdlKHNpemU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubnpUYWJsZURhdGFTZXJ2aWNlLnVwZGF0ZVBhZ2VTaXplKHNpemUpO1xuICB9XG5cbiAgb25QYWdlSW5kZXhDaGFuZ2UoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubnpUYWJsZURhdGFTZXJ2aWNlLnVwZGF0ZVBhZ2VJbmRleChpbmRleCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBuelJlc2l6ZU9ic2VydmVyOiBOelJlc2l6ZU9ic2VydmVyLFxuICAgIHByaXZhdGUgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgbnpUYWJsZVN0eWxlU2VydmljZTogTnpUYWJsZVN0eWxlU2VydmljZSxcbiAgICBwcml2YXRlIG56VGFibGVEYXRhU2VydmljZTogTnpUYWJsZURhdGFTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlXG4gICAgICAuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHBhZ2VJbmRleERpc3RpbmN0JCwgcGFnZVNpemVEaXN0aW5jdCQsIGxpc3RPZkN1cnJlbnRQYWdlRGF0YSQsIHRvdGFsJCwgcXVlcnlQYXJhbXMkIH0gPSB0aGlzLm56VGFibGVEYXRhU2VydmljZTtcbiAgICBjb25zdCB7IHRoZWFkVGVtcGxhdGUkLCBoYXNGaXhMZWZ0JCwgaGFzRml4UmlnaHQkIH0gPSB0aGlzLm56VGFibGVTdHlsZVNlcnZpY2U7XG4gICAgcXVlcnlQYXJhbXMkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUodGhpcy5uelF1ZXJ5UGFyYW1zKTtcbiAgICBwYWdlSW5kZXhEaXN0aW5jdCQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShwYWdlSW5kZXggPT4ge1xuICAgICAgaWYgKHBhZ2VJbmRleCAhPT0gdGhpcy5uelBhZ2VJbmRleCkge1xuICAgICAgICB0aGlzLm56UGFnZUluZGV4ID0gcGFnZUluZGV4O1xuICAgICAgICB0aGlzLm56UGFnZUluZGV4Q2hhbmdlLm5leHQocGFnZUluZGV4KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBwYWdlU2l6ZURpc3RpbmN0JC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKHBhZ2VTaXplID0+IHtcbiAgICAgIGlmIChwYWdlU2l6ZSAhPT0gdGhpcy5uelBhZ2VTaXplKSB7XG4gICAgICAgIHRoaXMubnpQYWdlU2l6ZSA9IHBhZ2VTaXplO1xuICAgICAgICB0aGlzLm56UGFnZVNpemVDaGFuZ2UubmV4dChwYWdlU2l6ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdG90YWwkXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5uekZyb250UGFnaW5hdGlvbilcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUodG90YWwgPT4ge1xuICAgICAgICBpZiAodG90YWwgIT09IHRoaXMubnpUb3RhbCkge1xuICAgICAgICAgIHRoaXMubnpUb3RhbCA9IHRvdGFsO1xuICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICBsaXN0T2ZDdXJyZW50UGFnZURhdGEkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgdGhpcy5uekN1cnJlbnRQYWdlRGF0YUNoYW5nZS5uZXh0KGRhdGEpO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG5cbiAgICB0aGVhZFRlbXBsYXRlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKHRoZWFkVGVtcGxhdGUgPT4ge1xuICAgICAgdGhpcy50aGVhZFRlbXBsYXRlID0gdGhlYWRUZW1wbGF0ZTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuXG4gICAgaGFzRml4TGVmdCQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShoYXNGaXhMZWZ0ID0+IHtcbiAgICAgIHRoaXMuaGFzRml4TGVmdCA9IGhhc0ZpeExlZnQ7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcblxuICAgIGhhc0ZpeFJpZ2h0JC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGhhc0ZpeFJpZ2h0ID0+IHtcbiAgICAgIHRoaXMuaGFzRml4UmlnaHQgPSBoYXNGaXhSaWdodDtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuXG4gICAgY29tYmluZUxhdGVzdChbdG90YWwkLCB0aGlzLmxvYWRpbmckLCB0aGlzLnRlbXBsYXRlTW9kZSRdKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoW3RvdGFsLCBsb2FkaW5nLCB0ZW1wbGF0ZU1vZGVdKSA9PiB0b3RhbCA9PT0gMCAmJiAhbG9hZGluZyAmJiAhdGVtcGxhdGVNb2RlKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKGVtcHR5ID0+IHtcbiAgICAgICAgdGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlLnNldFNob3dFbXB0eShlbXB0eSk7XG4gICAgICB9KTtcblxuICAgIHRoaXMudmVydGljYWxTY3JvbGxCYXJXaWR0aCA9IG1lYXN1cmVTY3JvbGxiYXIoJ3ZlcnRpY2FsJyk7XG4gICAgdGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlLmxpc3RPZkxpc3RPZlRoV2lkdGhQeCQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShsaXN0T2ZXaWR0aCA9PiB7XG4gICAgICB0aGlzLmxpc3RPZkF1dG9Db2xXaWR0aCA9IGxpc3RPZldpZHRoO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgdGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlLm1hbnVhbFdpZHRoQ29uZmlnUHgkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUobGlzdE9mV2lkdGggPT4ge1xuICAgICAgdGhpcy5saXN0T2ZNYW51YWxDb2xXaWR0aCA9IGxpc3RPZldpZHRoO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuelNjcm9sbCwgbnpQYWdlSW5kZXgsIG56UGFnZVNpemUsIG56RnJvbnRQYWdpbmF0aW9uLCBuekRhdGEsIG56V2lkdGhDb25maWcsIG56Tm9SZXN1bHQsIG56TG9hZGluZywgbnpUZW1wbGF0ZU1vZGUgfSA9IGNoYW5nZXM7XG4gICAgaWYgKG56UGFnZUluZGV4KSB7XG4gICAgICB0aGlzLm56VGFibGVEYXRhU2VydmljZS51cGRhdGVQYWdlSW5kZXgodGhpcy5uelBhZ2VJbmRleCk7XG4gICAgfVxuICAgIGlmIChuelBhZ2VTaXplKSB7XG4gICAgICB0aGlzLm56VGFibGVEYXRhU2VydmljZS51cGRhdGVQYWdlU2l6ZSh0aGlzLm56UGFnZVNpemUpO1xuICAgIH1cbiAgICBpZiAobnpEYXRhKSB7XG4gICAgICB0aGlzLm56RGF0YSA9IHRoaXMubnpEYXRhIHx8IFtdO1xuICAgICAgdGhpcy5uelRhYmxlRGF0YVNlcnZpY2UudXBkYXRlTGlzdE9mRGF0YSh0aGlzLm56RGF0YSk7XG4gICAgfVxuICAgIGlmIChuekZyb250UGFnaW5hdGlvbikge1xuICAgICAgdGhpcy5uelRhYmxlRGF0YVNlcnZpY2UudXBkYXRlRnJvbnRQYWdpbmF0aW9uKHRoaXMubnpGcm9udFBhZ2luYXRpb24pO1xuICAgIH1cbiAgICBpZiAobnpTY3JvbGwpIHtcbiAgICAgIHRoaXMuc2Nyb2xsWCA9ICh0aGlzLm56U2Nyb2xsICYmIHRoaXMubnpTY3JvbGwueCkgfHwgbnVsbDtcbiAgICAgIHRoaXMuc2Nyb2xsWSA9ICh0aGlzLm56U2Nyb2xsICYmIHRoaXMubnpTY3JvbGwueSkgfHwgbnVsbDtcbiAgICAgIHRoaXMubnpUYWJsZVN0eWxlU2VydmljZS5zZXRTY3JvbGwodGhpcy5zY3JvbGxYLCB0aGlzLnNjcm9sbFkpO1xuICAgIH1cbiAgICBpZiAobnpXaWR0aENvbmZpZykge1xuICAgICAgdGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlLnNldFRhYmxlV2lkdGhDb25maWcodGhpcy5ueldpZHRoQ29uZmlnKTtcbiAgICB9XG4gICAgaWYgKG56TG9hZGluZykge1xuICAgICAgdGhpcy5sb2FkaW5nJC5uZXh0KHRoaXMubnpMb2FkaW5nKTtcbiAgICB9XG4gICAgaWYgKG56VGVtcGxhdGVNb2RlKSB7XG4gICAgICB0aGlzLnRlbXBsYXRlTW9kZSQubmV4dCh0aGlzLm56VGVtcGxhdGVNb2RlKTtcbiAgICB9XG4gICAgaWYgKG56Tm9SZXN1bHQpIHtcbiAgICAgIHRoaXMubnpUYWJsZVN0eWxlU2VydmljZS5zZXROb1Jlc3VsdCh0aGlzLm56Tm9SZXN1bHQpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm56UmVzaXplT2JzZXJ2ZXJcbiAgICAgIC5vYnNlcnZlKHRoaXMuZWxlbWVudFJlZilcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKFtlbnRyeV0pID0+IHtcbiAgICAgICAgICBjb25zdCB7IHdpZHRoIH0gPSBlbnRyeS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgY29uc3Qgc2Nyb2xsQmFyV2lkdGggPSB0aGlzLnNjcm9sbFkgPyB0aGlzLnZlcnRpY2FsU2Nyb2xsQmFyV2lkdGggOiAwO1xuICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKHdpZHRoIC0gc2Nyb2xsQmFyV2lkdGgpO1xuICAgICAgICB9KSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHRoaXMubnpUYWJsZVN0eWxlU2VydmljZS5ob3N0V2lkdGgkKTtcbiAgICBpZiAodGhpcy5uelRhYmxlSW5uZXJTY3JvbGxDb21wb25lbnQgJiYgdGhpcy5uelRhYmxlSW5uZXJTY3JvbGxDb21wb25lbnQuY2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0KSB7XG4gICAgICB0aGlzLmNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCA9IHRoaXMubnpUYWJsZUlubmVyU2Nyb2xsQ29tcG9uZW50LmNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydDtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==