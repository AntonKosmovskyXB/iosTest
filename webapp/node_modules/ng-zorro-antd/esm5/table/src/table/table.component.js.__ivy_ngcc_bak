/**
 * @fileoverview added by tsickle
 * Generated from: src/table/table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __read } from "tslib";
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
var NZ_CONFIG_COMPONENT_NAME = 'table';
/**
 * @template T
 */
var NzTableComponent = /** @class */ (function () {
    function NzTableComponent(elementRef, nzResizeObserver, nzConfigService, cdr, nzTableStyleService, nzTableDataService) {
        var _this = this;
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
        function (index) { return index; });
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
        function () {
            _this.cdr.markForCheck();
        }));
    }
    /**
     * @param {?} size
     * @return {?}
     */
    NzTableComponent.prototype.onPageSizeChange = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        this.nzTableDataService.updatePageSize(size);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NzTableComponent.prototype.onPageIndexChange = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.nzTableDataService.updatePageIndex(index);
    };
    /**
     * @return {?}
     */
    NzTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var _a = this.nzTableDataService, pageIndexDistinct$ = _a.pageIndexDistinct$, pageSizeDistinct$ = _a.pageSizeDistinct$, listOfCurrentPageData$ = _a.listOfCurrentPageData$, total$ = _a.total$, queryParams$ = _a.queryParams$;
        var _b = this.nzTableStyleService, theadTemplate$ = _b.theadTemplate$, hasFixLeft$ = _b.hasFixLeft$, hasFixRight$ = _b.hasFixRight$;
        queryParams$.pipe(takeUntil(this.destroy$)).subscribe(this.nzQueryParams);
        pageIndexDistinct$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} pageIndex
         * @return {?}
         */
        function (pageIndex) {
            if (pageIndex !== _this.nzPageIndex) {
                _this.nzPageIndex = pageIndex;
                _this.nzPageIndexChange.next(pageIndex);
            }
        }));
        pageSizeDistinct$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} pageSize
         * @return {?}
         */
        function (pageSize) {
            if (pageSize !== _this.nzPageSize) {
                _this.nzPageSize = pageSize;
                _this.nzPageSizeChange.next(pageSize);
            }
        }));
        total$
            .pipe(takeUntil(this.destroy$), filter((/**
         * @return {?}
         */
        function () { return _this.nzFrontPagination; })))
            .subscribe((/**
         * @param {?} total
         * @return {?}
         */
        function (total) {
            if (total !== _this.nzTotal) {
                _this.nzTotal = total;
                _this.cdr.markForCheck();
            }
        }));
        listOfCurrentPageData$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.data = data;
            _this.nzCurrentPageDataChange.next(data);
            _this.cdr.markForCheck();
        }));
        theadTemplate$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} theadTemplate
         * @return {?}
         */
        function (theadTemplate) {
            _this.theadTemplate = theadTemplate;
            _this.cdr.markForCheck();
        }));
        hasFixLeft$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} hasFixLeft
         * @return {?}
         */
        function (hasFixLeft) {
            _this.hasFixLeft = hasFixLeft;
            _this.cdr.markForCheck();
        }));
        hasFixRight$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} hasFixRight
         * @return {?}
         */
        function (hasFixRight) {
            _this.hasFixRight = hasFixRight;
            _this.cdr.markForCheck();
        }));
        combineLatest([total$, this.loading$, this.templateMode$])
            .pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 3), total = _b[0], loading = _b[1], templateMode = _b[2];
            return total === 0 && !loading && !templateMode;
        })), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} empty
         * @return {?}
         */
        function (empty) {
            _this.nzTableStyleService.setShowEmpty(empty);
        }));
        this.verticalScrollBarWidth = measureScrollbar('vertical');
        this.nzTableStyleService.listOfListOfThWidthPx$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} listOfWidth
         * @return {?}
         */
        function (listOfWidth) {
            _this.listOfAutoColWidth = listOfWidth;
            _this.cdr.markForCheck();
        }));
        this.nzTableStyleService.manualWidthConfigPx$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} listOfWidth
         * @return {?}
         */
        function (listOfWidth) {
            _this.listOfManualColWidth = listOfWidth;
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTableComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzScroll = changes.nzScroll, nzPageIndex = changes.nzPageIndex, nzPageSize = changes.nzPageSize, nzFrontPagination = changes.nzFrontPagination, nzData = changes.nzData, nzWidthConfig = changes.nzWidthConfig, nzNoResult = changes.nzNoResult, nzLoading = changes.nzLoading, nzTemplateMode = changes.nzTemplateMode;
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
    };
    /**
     * @return {?}
     */
    NzTableComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzResizeObserver
            .observe(this.elementRef)
            .pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 1), entry = _b[0];
            var width = entry.target.getBoundingClientRect().width;
            /** @type {?} */
            var scrollBarWidth = _this.scrollY ? _this.verticalScrollBarWidth : 0;
            return Math.floor(width - scrollBarWidth);
        })), takeUntil(this.destroy$))
            .subscribe(this.nzTableStyleService.hostWidth$);
        if (this.nzTableInnerScrollComponent && this.nzTableInnerScrollComponent.cdkVirtualScrollViewport) {
            this.cdkVirtualScrollViewport = this.nzTableInnerScrollComponent.cdkVirtualScrollViewport;
        }
    };
    /**
     * @return {?}
     */
    NzTableComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-table',
                    exportAs: 'nzTable',
                    providers: [NzTableStyleService, NzTableDataService],
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "\n    <nz-spin [nzDelay]=\"nzLoadingDelay\" [nzSpinning]=\"nzLoading\" [nzIndicator]=\"nzLoadingIndicator\">\n      <ng-container *ngIf=\"nzPaginationPosition === 'both' || nzPaginationPosition === 'top'\">\n        <ng-template [ngTemplateOutlet]=\"paginationTemplate\"></ng-template>\n      </ng-container>\n      <div\n        #tableMainElement\n        class=\"ant-table\"\n        [class.ant-table-fixed-header]=\"nzData.length && scrollY\"\n        [class.ant-table-fixed-column]=\"scrollX\"\n        [class.ant-table-has-fix-left]=\"hasFixLeft\"\n        [class.ant-table-has-fix-right]=\"hasFixRight\"\n        [class.ant-table-bordered]=\"nzBordered\"\n        [class.ant-table-middle]=\"nzSize === 'middle'\"\n        [class.ant-table-small]=\"nzSize === 'small'\"\n      >\n        <nz-table-title-footer [title]=\"nzTitle\" *ngIf=\"nzTitle\"></nz-table-title-footer>\n        <nz-table-inner-scroll\n          *ngIf=\"scrollY || scrollX; else defaultTemplate\"\n          [data]=\"data\"\n          [scrollX]=\"scrollX\"\n          [scrollY]=\"scrollY\"\n          [contentTemplate]=\"contentTemplate\"\n          [listOfColWidth]=\"listOfAutoColWidth\"\n          [theadTemplate]=\"theadTemplate\"\n          [verticalScrollBarWidth]=\"verticalScrollBarWidth\"\n          [virtualTemplate]=\"nzVirtualScrollDirective ? nzVirtualScrollDirective.templateRef : null\"\n          [virtualItemSize]=\"nzVirtualItemSize\"\n          [virtualMaxBufferPx]=\"nzVirtualMaxBufferPx\"\n          [virtualMinBufferPx]=\"nzVirtualMinBufferPx\"\n          [tableMainElement]=\"tableMainElement\"\n          [virtualForTrackBy]=\"nzVirtualForTrackBy\"\n        ></nz-table-inner-scroll>\n        <ng-template #defaultTemplate>\n          <nz-table-inner-default\n            [tableLayout]=\"nzTableLayout\"\n            [listOfColWidth]=\"listOfManualColWidth\"\n            [theadTemplate]=\"theadTemplate\"\n            [contentTemplate]=\"contentTemplate\"\n          ></nz-table-inner-default>\n        </ng-template>\n        <nz-table-title-footer [footer]=\"nzFooter\" *ngIf=\"nzFooter\"></nz-table-title-footer>\n      </div>\n      <ng-container *ngIf=\"nzPaginationPosition === 'both' || nzPaginationPosition === 'bottom'\">\n        <ng-template [ngTemplateOutlet]=\"paginationTemplate\"></ng-template>\n      </ng-container>\n    </nz-spin>\n    <ng-template #paginationTemplate>\n      <nz-pagination\n        *ngIf=\"nzShowPagination && data.length\"\n        class=\"ant-table-pagination ant-table-pagination-right\"\n        [nzShowSizeChanger]=\"nzShowSizeChanger\"\n        [nzPageSizeOptions]=\"nzPageSizeOptions\"\n        [nzItemRender]=\"nzItemRender!\"\n        [nzShowQuickJumper]=\"nzShowQuickJumper\"\n        [nzHideOnSinglePage]=\"nzHideOnSinglePage\"\n        [nzShowTotal]=\"nzShowTotal\"\n        [nzSize]=\"nzSize === 'default' ? 'default' : 'small'\"\n        [nzPageSize]=\"nzPageSize\"\n        [nzTotal]=\"nzTotal\"\n        [nzSimple]=\"nzSimple\"\n        [nzPageIndex]=\"nzPageIndex\"\n        (nzPageSizeChange)=\"onPageSizeChange($event)\"\n        (nzPageIndexChange)=\"onPageIndexChange($event)\"\n      >\n      </nz-pagination>\n    </ng-template>\n    <ng-template #contentTemplate>\n      <ng-content></ng-content>\n    </ng-template>\n  ",
                    host: {
                        '[class.ant-table-wrapper]': 'true'
                    }
                }] }
    ];
    /** @nocollapse */
    NzTableComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzResizeObserver },
        { type: NzConfigService },
        { type: ChangeDetectorRef },
        { type: NzTableStyleService },
        { type: NzTableDataService }
    ]; };
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
    return NzTableComponent;
}());
export { NzTableComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbInNyYy90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU1BLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUlOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUV2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTdELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztJQUUzRSx3QkFBd0IsR0FBRyxPQUFPOzs7O0FBRXhDO0lBeUpFLDBCQUNVLFVBQXNCLEVBQ3RCLGdCQUFrQyxFQUNsQyxlQUFnQyxFQUNoQyxHQUFzQixFQUN0QixtQkFBd0MsRUFDeEMsa0JBQXNDO1FBTmhELGlCQWNDO1FBYlMsZUFBVSxHQUFWLFVBQVUs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Q3pELDRDQUFnRDs7SUFFaEQseUNBQStDOztJQUMvQyx1Q0FBZ0c7O0lBQ2hHLHdDQUE4RTs7SUFDOUUsbUNBQWdFOztJQUNoRSxvQ0FBaUU7O0lBQ2pFLHNDQUE2RTs7SUFDN0UsNkNBQWtEOztJQUNsRCw2Q0FBK0I7O0lBQy9CLGdEQUFvQzs7SUFDcEMsZ0RBQW9DOztJQUNwQywrQ0FBNEU7O0lBQzVFLDBDQUE0Qjs7SUFDNUIsdUNBQXlCOztJQUN6QixzQ0FBeUI7O0lBQ3pCLG1DQUFxQjs7SUFDckIseUNBQWtEOztJQUNsRCxrQ0FBMEI7O0lBQzFCLGdEQUFvRTs7SUFDcEUsb0NBQW1GOztJQUNuRiw2Q0FBa0Q7O0lBQ2xELDBDQUFnRDs7SUFDaEQsNENBQWlEOztJQUNqRCxxQ0FBMkM7O0lBQzNDLDhDQUF3Rzs7SUFDeEcsc0NBQTJGOztJQUMzRixrQ0FBK0U7O0lBQy9FLDZDQUFrRzs7SUFDbEcsOENBQW1HOztJQUNuRyw2Q0FBa0c7O0lBQ2xHLG9DQUF5Rjs7SUFDekYsNENBQWlFOztJQUNqRSw2Q0FBa0U7O0lBQ2xFLHlDQUEwRTs7SUFDMUUsbURBQStFOzs7OztJQUcvRSxnQ0FBc0I7O0lBQ3RCLG9EQUEyRDs7SUFDM0QsbUNBQThCOztJQUM5QixtQ0FBOEI7O0lBQzlCLHlDQUFvRDs7SUFDcEQsOENBQThDOztJQUM5QyxnREFBZ0Q7O0lBQ2hELHNDQUFtQjs7SUFDbkIsdUNBQW9COzs7OztJQUNwQixvQ0FBdUM7Ozs7O0lBQ3ZDLG9DQUF1RDs7Ozs7SUFDdkQseUNBQTREOztJQUM1RCxvREFDeUQ7O0lBQ3pELHVEQUFrRzs7SUFDbEcsa0RBQTJCOzs7OztJQVV6QixzQ0FBOEI7Ozs7O0lBQzlCLDRDQUEwQzs7Ozs7SUFDMUMsMkNBQXdDOzs7OztJQUN4QywrQkFBOEI7Ozs7O0lBQzlCLCtDQUFnRDs7Ozs7SUFDaEQsOENBQThDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBUcmFja0J5RnVuY3Rpb24sXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IE56UmVzaXplT2JzZXJ2ZXIgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvcmVzaXplLW9ic2VydmVycyc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIG1lYXN1cmVTY3JvbGxiYXIgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uSXRlbVJlbmRlckNvbnRleHQgfSBmcm9tICduZy16b3Jyby1hbnRkL3BhZ2luYXRpb24nO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnpUYWJsZURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vdGFibGUtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IE56VGFibGVTdHlsZVNlcnZpY2UgfSBmcm9tICcuLi90YWJsZS1zdHlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IE56VGFibGVEYXRhLCBOelRhYmxlTGF5b3V0LCBOelRhYmxlUGFnaW5hdGlvblBvc2l0aW9uLCBOelRhYmxlUXVlcnlQYXJhbXMsIE56VGFibGVTaXplIH0gZnJvbSAnLi4vdGFibGUudHlwZXMnO1xuaW1wb3J0IHsgTnpUYWJsZUlubmVyU2Nyb2xsQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS1pbm5lci1zY3JvbGwuY29tcG9uZW50JztcbmltcG9ydCB7IE56VGFibGVWaXJ0dWFsU2Nyb2xsRGlyZWN0aXZlIH0gZnJvbSAnLi90YWJsZS12aXJ0dWFsLXNjcm9sbC5kaXJlY3RpdmUnO1xuXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAndGFibGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei10YWJsZScsXG4gIGV4cG9ydEFzOiAnbnpUYWJsZScsXG4gIHByb3ZpZGVyczogW056VGFibGVTdHlsZVNlcnZpY2UsIE56VGFibGVEYXRhU2VydmljZV0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bnotc3BpbiBbbnpEZWxheV09XCJuekxvYWRpbmdEZWxheVwiIFtuelNwaW5uaW5nXT1cIm56TG9hZGluZ1wiIFtuekluZGljYXRvcl09XCJuekxvYWRpbmdJbmRpY2F0b3JcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuelBhZ2luYXRpb25Qb3NpdGlvbiA9PT0gJ2JvdGgnIHx8IG56UGFnaW5hdGlvblBvc2l0aW9uID09PSAndG9wJ1wiPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwicGFnaW5hdGlvblRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPGRpdlxuICAgICAgICAjdGFibGVNYWluRWxlbWVudFxuICAgICAgICBjbGFzcz1cImFudC10YWJsZVwiXG4gICAgICAgIFtjbGFzcy5hbnQtdGFibGUtZml4ZWQtaGVhZGVyXT1cIm56RGF0YS5sZW5ndGggJiYgc2Nyb2xsWVwiXG4gICAgICAgIFtjbGFzcy5hbnQtdGFibGUtZml4ZWQtY29sdW1uXT1cInNjcm9sbFhcIlxuICAgICAgICBbY2xhc3MuYW50LXRhYmxlLWhhcy1maXgtbGVmdF09XCJoYXNGaXhMZWZ0XCJcbiAgICAgICAgW2NsYXNzLmFudC10YWJsZS1oYXMtZml4LXJpZ2h0XT1cImhhc0ZpeFJpZ2h0XCJcbiAgICAgICAgW2NsYXNzLmFudC10YWJsZS1ib3JkZXJlZF09XCJuekJvcmRlcmVkXCJcbiAgICAgICAgW2NsYXNzLmFudC10YWJsZS1taWRkbGVdPVwibnpTaXplID09PSAnbWlkZGxlJ1wiXG4gICAgICAgIFtjbGFzcy5hbnQtdGFibGUtc21hbGxdPVwibnpTaXplID09PSAnc21hbGwnXCJcbiAgICAgID5cbiAgICAgICAgPG56LXRhYmxlLXRpdGxlLWZvb3RlciBbdGl0bGVdPVwibnpUaXRsZVwiICpuZ0lmPVwibnpUaXRsZVwiPjwvbnotdGFibGUtdGl0bGUtZm9vdGVyPlxuICAgICAgICA8bnotdGFibGUtaW5uZXItc2Nyb2xsXG4gICAgICAgICAgKm5nSWY9XCJzY3JvbGxZIHx8IHNjcm9sbFg7IGVsc2UgZGVmYXVsdFRlbXBsYXRlXCJcbiAgICAgICAgICBbZGF0YV09XCJkYXRhXCJcbiAgICAgICAgICBbc2Nyb2xsWF09XCJzY3JvbGxYXCJcbiAgICAgICAgICBbc2Nyb2xsWV09XCJzY3JvbGxZXCJcbiAgICAgICAgICBbY29udGVudFRlbXBsYXRlXT1cImNvbnRlbnRUZW1wbGF0ZVwiXG4gICAgICAgICAgW2xpc3RPZkNvbFdpZHRoXT1cImxpc3RPZkF1dG9Db2xXaWR0aFwiXG4gICAgICAgICAgW3RoZWFkVGVtcGxhdGVdPVwidGhlYWRUZW1wbGF0ZVwiXG4gICAgICAgICAgW3ZlcnRpY2FsU2Nyb2xsQmFyV2lkdGhdPVwidmVydGljYWxTY3JvbGxCYXJXaWR0aFwiXG4gICAgICAgICAgW3ZpcnR1YWxUZW1wbGF0ZV09XCJuelZpcnR1YWxTY3JvbGxEaXJlY3RpdmUgPyBuelZpcnR1YWxTY3JvbGxEaXJlY3RpdmUudGVtcGxhdGVSZWYgOiBudWxsXCJcbiAgICAgICAgICBbdmlydHVhbEl0ZW1TaXplXT1cIm56VmlydHVhbEl0ZW1TaXplXCJcbiAgICAgICAgICBbdmlydHVhbE1heEJ1ZmZlclB4XT1cIm56VmlydHVhbE1heEJ1ZmZlclB4XCJcbiAgICAgICAgICBbdmlydHVhbE1pbkJ1ZmZlclB4XT1cIm56VmlydHVhbE1pbkJ1ZmZlclB4XCJcbiAgICAgICAgICBbdGFibGVNYWluRWxlbWVudF09XCJ0YWJsZU1haW5FbGVtZW50XCJcbiAgICAgICAgICBbdmlydHVhbEZvclRyYWNrQnldPVwibnpWaXJ0dWFsRm9yVHJhY2tCeVwiXG4gICAgICAgID48L256LXRhYmxlLWlubmVyLXNjcm9sbD5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VGVtcGxhdGU+XG4gICAgICAgICAgPG56LXRhYmxlLWlubmVyLWRlZmF1bHRcbiAgICAgICAgICAgIFt0YWJsZUxheW91dF09XCJuelRhYmxlTGF5b3V0XCJcbiAgICAgICAgICAgIFtsaXN0T2ZDb2xXaWR0aF09XCJsaXN0T2ZNYW51YWxDb2xXaWR0aFwiXG4gICAgICAgICAgICBbdGhlYWRUZW1wbGF0ZV09XCJ0aGVhZFRlbXBsYXRlXCJcbiAgICAgICAgICAgIFtjb250ZW50VGVtcGxhdGVdPVwiY29udGVudFRlbXBsYXRlXCJcbiAgICAgICAgICA+PC9uei10YWJsZS1pbm5lci1kZWZhdWx0PlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8bnotdGFibGUtdGl0bGUtZm9vdGVyIFtmb290ZXJdPVwibnpGb290ZXJcIiAqbmdJZj1cIm56Rm9vdGVyXCI+PC9uei10YWJsZS10aXRsZS1mb290ZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuelBhZ2luYXRpb25Qb3NpdGlvbiA9PT0gJ2JvdGgnIHx8IG56UGFnaW5hdGlvblBvc2l0aW9uID09PSAnYm90dG9tJ1wiPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwicGFnaW5hdGlvblRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbnotc3Bpbj5cbiAgICA8bmctdGVtcGxhdGUgI3BhZ2luYXRpb25UZW1wbGF0ZT5cbiAgICAgIDxuei1wYWdpbmF0aW9uXG4gICAgICAgICpuZ0lmPVwibnpTaG93UGFnaW5hdGlvbiAmJiBkYXRhLmxlbmd0aFwiXG4gICAgICAgIGNsYXNzPVwiYW50LXRhYmxlLXBhZ2luYXRpb24gYW50LXRhYmxlLXBhZ2luYXRpb24tcmlnaHRcIlxuICAgICAgICBbbnpTaG93U2l6ZUNoYW5nZXJdPVwibnpTaG93U2l6ZUNoYW5nZXJcIlxuICAgICAgICBbbnpQYWdlU2l6ZU9wdGlvbnNdPVwibnpQYWdlU2l6ZU9wdGlvbnNcIlxuICAgICAgICBbbnpJdGVtUmVuZGVyXT1cIm56SXRlbVJlbmRlciFcIlxuICAgICAgICBbbnpTaG93UXVpY2tKdW1wZXJdPVwibnpTaG93UXVpY2tKdW1wZXJcIlxuICAgICAgICBbbnpIaWRlT25TaW5nbGVQYWdlXT1cIm56SGlkZU9uU2luZ2xlUGFnZVwiXG4gICAgICAgIFtuelNob3dUb3RhbF09XCJuelNob3dUb3RhbFwiXG4gICAgICAgIFtuelNpemVdPVwibnpTaXplID09PSAnZGVmYXVsdCcgPyAnZGVmYXVsdCcgOiAnc21hbGwnXCJcbiAgICAgICAgW256UGFnZVNpemVdPVwibnpQYWdlU2l6ZVwiXG4gICAgICAgIFtuelRvdGFsXT1cIm56VG90YWxcIlxuICAgICAgICBbbnpTaW1wbGVdPVwibnpTaW1wbGVcIlxuICAgICAgICBbbnpQYWdlSW5kZXhdPVwibnpQYWdlSW5kZXhcIlxuICAgICAgICAobnpQYWdlU2l6ZUNoYW5nZSk9XCJvblBhZ2VTaXplQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAobnpQYWdlSW5kZXhDaGFuZ2UpPVwib25QYWdlSW5kZXhDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICA+XG4gICAgICA8L256LXBhZ2luYXRpb24+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgI2NvbnRlbnRUZW1wbGF0ZT5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtd3JhcHBlcl0nOiAndHJ1ZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelRhYmxlQ29tcG9uZW50PFQgPSBOelNhZmVBbnk+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekZyb250UGFnaW5hdGlvbjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpUZW1wbGF0ZU1vZGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2hvd1BhZ2luYXRpb246IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256TG9hZGluZzogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpCb3JkZXJlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTaG93U2l6ZUNoYW5nZXI6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256SGlkZU9uU2luZ2xlUGFnZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTaG93UXVpY2tKdW1wZXI6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2ltcGxlOiBCb29sZWFuSW5wdXQ7XG5cbiAgQElucHV0KCkgbnpUYWJsZUxheW91dDogTnpUYWJsZUxheW91dCA9ICdhdXRvJztcbiAgQElucHV0KCkgbnpTaG93VG90YWw6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBudW1iZXI7IHJhbmdlOiBbbnVtYmVyLCBudW1iZXJdIH0+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56SXRlbVJlbmRlcjogVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkl0ZW1SZW5kZXJDb250ZXh0PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuelRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56Rm9vdGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56Tm9SZXN1bHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIG56UGFnZVNpemVPcHRpb25zID0gWzEwLCAyMCwgMzAsIDQwLCA1MF07XG4gIEBJbnB1dCgpIG56VmlydHVhbEl0ZW1TaXplID0gMDtcbiAgQElucHV0KCkgbnpWaXJ0dWFsTWF4QnVmZmVyUHggPSAyMDA7XG4gIEBJbnB1dCgpIG56VmlydHVhbE1pbkJ1ZmZlclB4ID0gMTAwO1xuICBASW5wdXQoKSBuelZpcnR1YWxGb3JUcmFja0J5OiBUcmFja0J5RnVuY3Rpb248TnpUYWJsZURhdGE+ID0gaW5kZXggPT4gaW5kZXg7XG4gIEBJbnB1dCgpIG56TG9hZGluZ0RlbGF5ID0gMDtcbiAgQElucHV0KCkgbnpQYWdlSW5kZXggPSAxO1xuICBASW5wdXQoKSBuelBhZ2VTaXplID0gMTA7XG4gIEBJbnB1dCgpIG56VG90YWwgPSAwO1xuICBASW5wdXQoKSBueldpZHRoQ29uZmlnOiBBcnJheTxzdHJpbmcgfCBudWxsPiA9IFtdO1xuICBASW5wdXQoKSBuekRhdGE6IFRbXSA9IFtdO1xuICBASW5wdXQoKSBuelBhZ2luYXRpb25Qb3NpdGlvbjogTnpUYWJsZVBhZ2luYXRpb25Qb3NpdGlvbiA9ICdib3R0b20nO1xuICBASW5wdXQoKSBuelNjcm9sbDogeyB4Pzogc3RyaW5nIHwgbnVsbDsgeT86IHN0cmluZyB8IG51bGwgfSA9IHsgeDogbnVsbCwgeTogbnVsbCB9O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpGcm9udFBhZ2luYXRpb24gPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpUZW1wbGF0ZU1vZGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd1BhZ2luYXRpb24gPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpMb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgbnpMb2FkaW5nSW5kaWNhdG9yOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgQElucHV0Qm9vbGVhbigpIG56Qm9yZGVyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBuelNpemU6IE56VGFibGVTaXplID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dTaXplQ2hhbmdlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIEBJbnB1dEJvb2xlYW4oKSBuekhpZGVPblNpbmdsZVBhZ2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBASW5wdXRCb29sZWFuKCkgbnpTaG93UXVpY2tKdW1wZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBASW5wdXRCb29sZWFuKCkgbnpTaW1wbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56UGFnZVNpemVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56UGFnZUluZGV4Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelF1ZXJ5UGFyYW1zID0gbmV3IEV2ZW50RW1pdHRlcjxOelRhYmxlUXVlcnlQYXJhbXM+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekN1cnJlbnRQYWdlRGF0YUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpUYWJsZURhdGFbXT4oKTtcblxuICAvKiogcHVibGljIGRhdGEgZm9yIG5nRm9yIHRyICovXG4gIHB1YmxpYyBkYXRhOiBUW10gPSBbXTtcbiAgcHVibGljIGNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydD86IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydDtcbiAgc2Nyb2xsWDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIHNjcm9sbFk6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICB0aGVhZFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIGxpc3RPZkF1dG9Db2xXaWR0aDogQXJyYXk8c3RyaW5nIHwgbnVsbD4gPSBbXTtcbiAgbGlzdE9mTWFudWFsQ29sV2lkdGg6IEFycmF5PHN0cmluZyB8IG51bGw+ID0gW107XG4gIGhhc0ZpeExlZnQgPSBmYWxzZTtcbiAgaGFzRml4UmlnaHQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgbG9hZGluZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgcHJpdmF0ZSB0ZW1wbGF0ZU1vZGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gIEBDb250ZW50Q2hpbGQoTnpUYWJsZVZpcnR1YWxTY3JvbGxEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBuelZpcnR1YWxTY3JvbGxEaXJlY3RpdmUhOiBOelRhYmxlVmlydHVhbFNjcm9sbERpcmVjdGl2ZTtcbiAgQFZpZXdDaGlsZChOelRhYmxlSW5uZXJTY3JvbGxDb21wb25lbnQpIG56VGFibGVJbm5lclNjcm9sbENvbXBvbmVudCE6IE56VGFibGVJbm5lclNjcm9sbENvbXBvbmVudDtcbiAgdmVydGljYWxTY3JvbGxCYXJXaWR0aCA9IDA7XG4gIG9uUGFnZVNpemVDaGFuZ2Uoc2l6ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5uelRhYmxlRGF0YVNlcnZpY2UudXBkYXRlUGFnZVNpemUoc2l6ZSk7XG4gIH1cblxuICBvblBhZ2VJbmRleENoYW5nZShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5uelRhYmxlRGF0YVNlcnZpY2UudXBkYXRlUGFnZUluZGV4KGluZGV4KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIG56UmVzaXplT2JzZXJ2ZXI6IE56UmVzaXplT2JzZXJ2ZXIsXG4gICAgcHJpdmF0ZSBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBuelRhYmxlU3R5bGVTZXJ2aWNlOiBOelRhYmxlU3R5bGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgbnpUYWJsZURhdGFTZXJ2aWNlOiBOelRhYmxlRGF0YVNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5uekNvbmZpZ1NlcnZpY2VcbiAgICAgIC5nZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgcGFnZUluZGV4RGlzdGluY3QkLCBwYWdlU2l6ZURpc3RpbmN0JCwgbGlzdE9mQ3VycmVudFBhZ2VEYXRhJCwgdG90YWwkLCBxdWVyeVBhcmFtcyQgfSA9IHRoaXMubnpUYWJsZURhdGFTZXJ2aWNlO1xuICAgIGNvbnN0IHsgdGhlYWRUZW1wbGF0ZSQsIGhhc0ZpeExlZnQkLCBoYXNGaXhSaWdodCQgfSA9IHRoaXMubnpUYWJsZVN0eWxlU2VydmljZTtcbiAgICBxdWVyeVBhcmFtcyQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSh0aGlzLm56UXVlcnlQYXJhbXMpO1xuICAgIHBhZ2VJbmRleERpc3RpbmN0JC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKHBhZ2VJbmRleCA9PiB7XG4gICAgICBpZiAocGFnZUluZGV4ICE9PSB0aGlzLm56UGFnZUluZGV4KSB7XG4gICAgICAgIHRoaXMubnpQYWdlSW5kZXggPSBwYWdlSW5kZXg7XG4gICAgICAgIHRoaXMubnpQYWdlSW5kZXhDaGFuZ2UubmV4dChwYWdlSW5kZXgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHBhZ2VTaXplRGlzdGluY3QkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUocGFnZVNpemUgPT4ge1xuICAgICAgaWYgKHBhZ2VTaXplICE9PSB0aGlzLm56UGFnZVNpemUpIHtcbiAgICAgICAgdGhpcy5uelBhZ2VTaXplID0gcGFnZVNpemU7XG4gICAgICAgIHRoaXMubnpQYWdlU2l6ZUNoYW5nZS5uZXh0KHBhZ2VTaXplKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0b3RhbCRcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLm56RnJvbnRQYWdpbmF0aW9uKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSh0b3RhbCA9PiB7XG4gICAgICAgIGlmICh0b3RhbCAhPT0gdGhpcy5uelRvdGFsKSB7XG4gICAgICAgICAgdGhpcy5uelRvdGFsID0gdG90YWw7XG4gICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIGxpc3RPZkN1cnJlbnRQYWdlRGF0YSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICB0aGlzLm56Q3VycmVudFBhZ2VEYXRhQ2hhbmdlLm5leHQoZGF0YSk7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcblxuICAgIHRoZWFkVGVtcGxhdGUkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUodGhlYWRUZW1wbGF0ZSA9PiB7XG4gICAgICB0aGlzLnRoZWFkVGVtcGxhdGUgPSB0aGVhZFRlbXBsYXRlO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG5cbiAgICBoYXNGaXhMZWZ0JC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGhhc0ZpeExlZnQgPT4ge1xuICAgICAgdGhpcy5oYXNGaXhMZWZ0ID0gaGFzRml4TGVmdDtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuXG4gICAgaGFzRml4UmlnaHQkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoaGFzRml4UmlnaHQgPT4ge1xuICAgICAgdGhpcy5oYXNGaXhSaWdodCA9IGhhc0ZpeFJpZ2h0O1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG5cbiAgICBjb21iaW5lTGF0ZXN0KFt0b3RhbCQsIHRoaXMubG9hZGluZyQsIHRoaXMudGVtcGxhdGVNb2RlJF0pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChbdG90YWwsIGxvYWRpbmcsIHRlbXBsYXRlTW9kZV0pID0+IHRvdGFsID09PSAwICYmICFsb2FkaW5nICYmICF0ZW1wbGF0ZU1vZGUpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoZW1wdHkgPT4ge1xuICAgICAgICB0aGlzLm56VGFibGVTdHlsZVNlcnZpY2Uuc2V0U2hvd0VtcHR5KGVtcHR5KTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy52ZXJ0aWNhbFNjcm9sbEJhcldpZHRoID0gbWVhc3VyZVNjcm9sbGJhcigndmVydGljYWwnKTtcbiAgICB0aGlzLm56VGFibGVTdHlsZVNlcnZpY2UubGlzdE9mTGlzdE9mVGhXaWR0aFB4JC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGxpc3RPZldpZHRoID0+IHtcbiAgICAgIHRoaXMubGlzdE9mQXV0b0NvbFdpZHRoID0gbGlzdE9mV2lkdGg7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgICB0aGlzLm56VGFibGVTdHlsZVNlcnZpY2UubWFudWFsV2lkdGhDb25maWdQeCQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShsaXN0T2ZXaWR0aCA9PiB7XG4gICAgICB0aGlzLmxpc3RPZk1hbnVhbENvbFdpZHRoID0gbGlzdE9mV2lkdGg7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG56U2Nyb2xsLCBuelBhZ2VJbmRleCwgbnpQYWdlU2l6ZSwgbnpGcm9udFBhZ2luYXRpb24sIG56RGF0YSwgbnpXaWR0aENvbmZpZywgbnpOb1Jlc3VsdCwgbnpMb2FkaW5nLCBuelRlbXBsYXRlTW9kZSB9ID0gY2hhbmdlcztcbiAgICBpZiAobnpQYWdlSW5kZXgpIHtcbiAgICAgIHRoaXMubnpUYWJsZURhdGFTZXJ2aWNlLnVwZGF0ZVBhZ2VJbmRleCh0aGlzLm56UGFnZUluZGV4KTtcbiAgICB9XG4gICAgaWYgKG56UGFnZVNpemUpIHtcbiAgICAgIHRoaXMubnpUYWJsZURhdGFTZXJ2aWNlLnVwZGF0ZVBhZ2VTaXplKHRoaXMubnpQYWdlU2l6ZSk7XG4gICAgfVxuICAgIGlmIChuekRhdGEpIHtcbiAgICAgIHRoaXMubnpEYXRhID0gdGhpcy5uekRhdGEgfHwgW107XG4gICAgICB0aGlzLm56VGFibGVEYXRhU2VydmljZS51cGRhdGVMaXN0T2ZEYXRhKHRoaXMubnpEYXRhKTtcbiAgICB9XG4gICAgaWYgKG56RnJvbnRQYWdpbmF0aW9uKSB7XG4gICAgICB0aGlzLm56VGFibGVEYXRhU2VydmljZS51cGRhdGVGcm9udFBhZ2luYXRpb24odGhpcy5uekZyb250UGFnaW5hdGlvbik7XG4gICAgfVxuICAgIGlmIChuelNjcm9sbCkge1xuICAgICAgdGhpcy5zY3JvbGxYID0gKHRoaXMubnpTY3JvbGwgJiYgdGhpcy5uelNjcm9sbC54KSB8fCBudWxsO1xuICAgICAgdGhpcy5zY3JvbGxZID0gKHRoaXMubnpTY3JvbGwgJiYgdGhpcy5uelNjcm9sbC55KSB8fCBudWxsO1xuICAgICAgdGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlLnNldFNjcm9sbCh0aGlzLnNjcm9sbFgsIHRoaXMuc2Nyb2xsWSk7XG4gICAgfVxuICAgIGlmIChueldpZHRoQ29uZmlnKSB7XG4gICAgICB0aGlzLm56VGFibGVTdHlsZVNlcnZpY2Uuc2V0VGFibGVXaWR0aENvbmZpZyh0aGlzLm56V2lkdGhDb25maWcpO1xuICAgIH1cbiAgICBpZiAobnpMb2FkaW5nKSB7XG4gICAgICB0aGlzLmxvYWRpbmckLm5leHQodGhpcy5uekxvYWRpbmcpO1xuICAgIH1cbiAgICBpZiAobnpUZW1wbGF0ZU1vZGUpIHtcbiAgICAgIHRoaXMudGVtcGxhdGVNb2RlJC5uZXh0KHRoaXMubnpUZW1wbGF0ZU1vZGUpO1xuICAgIH1cbiAgICBpZiAobnpOb1Jlc3VsdCkge1xuICAgICAgdGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlLnNldE5vUmVzdWx0KHRoaXMubnpOb1Jlc3VsdCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMubnpSZXNpemVPYnNlcnZlclxuICAgICAgLm9ic2VydmUodGhpcy5lbGVtZW50UmVmKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoW2VudHJ5XSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgd2lkdGggfSA9IGVudHJ5LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBjb25zdCBzY3JvbGxCYXJXaWR0aCA9IHRoaXMuc2Nyb2xsWSA/IHRoaXMudmVydGljYWxTY3JvbGxCYXJXaWR0aCA6IDA7XG4gICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3Iod2lkdGggLSBzY3JvbGxCYXJXaWR0aCk7XG4gICAgICAgIH0pLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUodGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlLmhvc3RXaWR0aCQpO1xuICAgIGlmICh0aGlzLm56VGFibGVJbm5lclNjcm9sbENvbXBvbmVudCAmJiB0aGlzLm56VGFibGVJbm5lclNjcm9sbENvbXBvbmVudC5jZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQpIHtcbiAgICAgIHRoaXMuY2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0ID0gdGhpcy5uelRhYmxlSW5uZXJTY3JvbGxDb21wb25lbnQuY2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0O1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19