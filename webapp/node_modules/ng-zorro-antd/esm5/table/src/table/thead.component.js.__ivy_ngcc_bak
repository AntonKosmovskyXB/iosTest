/**
 * @fileoverview added by tsickle
 * Generated from: src/table/thead.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __read, __spread } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/* tslint:disable:component-selector */
import { ChangeDetectionStrategy, Component, ContentChildren, ElementRef, EventEmitter, Input, Optional, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { warnDeprecation } from 'ng-zorro-antd/core/logger';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { EMPTY, merge, of, Subject } from 'rxjs';
import { delay, flatMap, map, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { NzThAddOnComponent } from '../cell/th-addon.component';
import { NzTableDataService } from '../table-data.service';
import { NzTableStyleService } from '../table-style.service';
import { NzTrDirective } from './tr.directive';
var NzTheadComponent = /** @class */ (function () {
    function NzTheadComponent(elementRef, renderer, nzTableStyleService, nzTableDataService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzTableStyleService = nzTableStyleService;
        this.nzTableDataService = nzTableDataService;
        this.destroy$ = new Subject();
        this.isInsideTable = false;
        /**
         * @deprecated use nzSortFn and nzSortPriority instead *
         */
        this.nzSingleSort = false;
        /**
         * @deprecated use nzSortOrderChange instead *
         */
        this.nzSortChange = new EventEmitter();
        this.nzSortOrderChange = new EventEmitter();
        this.isInsideTable = !!this.nzTableStyleService;
    }
    /**
     * @return {?}
     */
    NzTheadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.nzTableStyleService) {
            this.nzTableStyleService.setTheadTemplate(this.templateRef);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTheadComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzSingleSort = changes.nzSingleSort;
        if (nzSingleSort) {
            warnDeprecation("'nzSingleSort' is deprecated and will be removed in 10.0.0. Please use 'nzSortFn' and 'nzSortPriority' instead.");
        }
    };
    /**
     * @return {?}
     */
    NzTheadComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.nzTableStyleService) {
            /** @type {?} */
            var firstTableRow$ = (/** @type {?} */ (this.listOfNzTrDirective.changes.pipe(startWith(this.listOfNzTrDirective), map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item && item.first; })))));
            /** @type {?} */
            var listOfColumnsChanges$_1 = firstTableRow$.pipe(switchMap((/**
             * @param {?} firstTableRow
             * @return {?}
             */
            function (firstTableRow) { return (firstTableRow ? firstTableRow.listOfColumnsChanges$ : EMPTY); })), takeUntil(this.destroy$));
            listOfColumnsChanges$_1.subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return _this.nzTableStyleService.setListOfTh(data); }));
            /** TODO: need reset the measure row when scrollX change **/
            this.nzTableStyleService.enableAutoMeasure$
                .pipe(switchMap((/**
             * @param {?} enable
             * @return {?}
             */
            function (enable) { return (enable ? listOfColumnsChanges$_1 : of([])); })))
                .pipe(takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return _this.nzTableStyleService.setListOfMeasureColumn(data); }));
            /** @type {?} */
            var listOfFixedLeftColumnChanges$ = firstTableRow$.pipe(switchMap((/**
             * @param {?} firstTr
             * @return {?}
             */
            function (firstTr) { return (firstTr ? firstTr.listOfFixedLeftColumnChanges$ : EMPTY); })), takeUntil(this.destroy$));
            /** @type {?} */
            var listOfFixedRightColumnChanges$ = firstTableRow$.pipe(switchMap((/**
             * @param {?} firstTr
             * @return {?}
             */
            function (firstTr) { return (firstTr ? firstTr.listOfFixedRightColumnChanges$ : EMPTY); })), takeUntil(this.destroy$));
            listOfFixedLeftColumnChanges$.subscribe((/**
             * @param {?} listOfFixedLeftColumn
             * @return {?}
             */
            function (listOfFixedLeftColumn) {
                _this.nzTableStyleService.setHasFixLeft(listOfFixedLeftColumn.length !== 0);
            }));
            listOfFixedRightColumnChanges$.subscribe((/**
             * @param {?} listOfFixedRightColumn
             * @return {?}
             */
            function (listOfFixedRightColumn) {
                _this.nzTableStyleService.setHasFixRight(listOfFixedRightColumn.length !== 0);
            }));
        }
        if (this.nzTableDataService) {
            /** @type {?} */
            var listOfColumn$_1 = (/** @type {?} */ (this.listOfNzThAddOnComponent.changes.pipe(startWith(this.listOfNzThAddOnComponent))));
            /** @type {?} */
            var manualSort$ = listOfColumn$_1.pipe(switchMap((/**
             * @return {?}
             */
            function () { return merge.apply(void 0, __spread(_this.listOfNzThAddOnComponent.map((/**
             * @param {?} th
             * @return {?}
             */
            function (th) { return th.manualClickOrder$; })))); })), takeUntil(this.destroy$));
            manualSort$.subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                /** @type {?} */
                var emitValue = { key: data.nzColumnKey, value: data.sortOrder };
                _this.nzSortChange.emit(emitValue);
                _this.nzSortOrderChange.emit(emitValue);
                if (_this.nzSingleSort || (data.nzSortFn && data.nzSortPriority === false)) {
                    _this.listOfNzThAddOnComponent.filter((/**
                     * @param {?} th
                     * @return {?}
                     */
                    function (th) { return th !== data; })).forEach((/**
                     * @param {?} th
                     * @return {?}
                     */
                    function (th) { return th.clearSortOrder(); }));
                }
            }));
            /** @type {?} */
            var listOfCalcOperator$ = listOfColumn$_1.pipe(switchMap((/**
             * @param {?} list
             * @return {?}
             */
            function (list) {
                return merge.apply(void 0, __spread([listOfColumn$_1], list.map((/**
                 * @param {?} c
                 * @return {?}
                 */
                function (c) { return c.calcOperatorChange$; })))).pipe(flatMap((/**
                 * @return {?}
                 */
                function () { return listOfColumn$_1; })));
            })), map((/**
             * @param {?} list
             * @return {?}
             */
            function (list) {
                return list
                    .filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return !!item.nzSortFn || !!item.nzFilterFn; }))
                    .map((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    var nzSortFn = item.nzSortFn, sortOrder = item.sortOrder, nzFilterFn = item.nzFilterFn, nzFilterValue = item.nzFilterValue, nzSortPriority = item.nzSortPriority, nzColumnKey = item.nzColumnKey;
                    return {
                        key: nzColumnKey,
                        sortFn: nzSortFn,
                        sortPriority: nzSortPriority,
                        sortOrder: (/** @type {?} */ (sortOrder)),
                        filterFn: (/** @type {?} */ (nzFilterFn)),
                        filterValue: nzFilterValue
                    };
                }));
            })), 
            // TODO: after checked error here
            delay(0));
            listOfCalcOperator$.subscribe((/**
             * @param {?} list
             * @return {?}
             */
            function (list) {
                _this.nzTableDataService.listOfCalcOperator$.next(list);
            }));
        }
    };
    /**
     * @return {?}
     */
    NzTheadComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.nzTableStyleService) {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
        }
    };
    /**
     * @return {?}
     */
    NzTheadComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzTheadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'thead:not(.ant-table-thead)',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "\n    <ng-template #contentTemplate>\n      <ng-content></ng-content>\n    </ng-template>\n    <ng-container *ngIf=\"!isInsideTable\">\n      <ng-template [ngTemplateOutlet]=\"contentTemplate\"></ng-template>\n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    NzTheadComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NzTableStyleService, decorators: [{ type: Optional }] },
        { type: NzTableDataService, decorators: [{ type: Optional }] }
    ]; };
    NzTheadComponent.propDecorators = {
        templateRef: [{ type: ViewChild, args: ['contentTemplate', { static: true },] }],
        listOfNzTrDirective: [{ type: ContentChildren, args: [NzTrDirective, { descendants: true },] }],
        listOfNzThAddOnComponent: [{ type: ContentChildren, args: [NzThAddOnComponent, { descendants: true },] }],
        nzSingleSort: [{ type: Input }],
        nzSortChange: [{ type: Output }],
        nzSortOrderChange: [{ type: Output }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTheadComponent.prototype, "nzSingleSort", void 0);
    return NzTheadComponent;
}());
export { NzTheadComponent };
if (false) {
    /** @type {?} */
    NzTheadComponent.ngAcceptInputType_nzSingleSort;
    /**
     * @type {?}
     * @private
     */
    NzTheadComponent.prototype.destroy$;
    /** @type {?} */
    NzTheadComponent.prototype.isInsideTable;
    /** @type {?} */
    NzTheadComponent.prototype.templateRef;
    /** @type {?} */
    NzTheadComponent.prototype.listOfNzTrDirective;
    /** @type {?} */
    NzTheadComponent.prototype.listOfNzThAddOnComponent;
    /**
     * @deprecated use nzSortFn and nzSortPriority instead *
     * @type {?}
     */
    NzTheadComponent.prototype.nzSingleSort;
    /**
     * @deprecated use nzSortOrderChange instead *
     * @type {?}
     */
    NzTheadComponent.prototype.nzSortChange;
    /** @type {?} */
    NzTheadComponent.prototype.nzSortOrderChange;
    /**
     * @type {?}
     * @private
     */
    NzTheadComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzTheadComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTheadComponent.prototype.nzTableStyleService;
    /**
     * @type {?}
     * @private
     */
    NzTheadComponent.prototype.nzTableDataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbInNyYy90YWJsZS90aGVhZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFLQSxPQUFPLEVBR0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUVULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUc1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0M7SUEyQkUsMEJBQ1UsVUFBc0IsRUFDdEIsUUFBbUIsRUFDUCxtQkFBd0MsRUFDeEMsa0JBQXNDO1FBSGxELGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNQLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFD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QUFJLEVBQUU7c0NBQzdDLGVBQWUsU0FBQyxhQUFhLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFOzJDQUNwRCxlQUFlLFNBQUMsa0JBQWtCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFOytCQUV6RCxLQUFLOytCQUVMLE1BQU07b0NBQ04sTUFBTTs7SUFIa0I7UUFBZixZQUFZLEVBQUU7OzBEQUFzQjtJQWdIaEQsdUJBQUM7Q0FBQSxBQXRJRCxJQXNJQztTQXpIWSxnQkFBZ0I7OztJQUMzQixnREFBb0Q7Ozs7O0lBRXBELG9DQUF1Qzs7SUFDdkMseUNBQXNCOztJQUN0Qix1Q0FBcUY7O0lBQ3JGLCtDQUFzRzs7SUFDdEcsb0RBQXFIOzs7OztJQUVySCx3Q0FBOEM7Ozs7O0lBRTlDLHdDQUErRjs7SUFDL0YsNkNBQW9HOzs7OztJQUdsRyxzQ0FBOEI7Ozs7O0lBQzlCLG9DQUEyQjs7Ozs7SUFDM0IsK0NBQTREOzs7OztJQUM1RCw4Q0FBMEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuLyogdHNsaW50OmRpc2FibGU6Y29tcG9uZW50LXNlbGVjdG9yICovXG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHdhcm5EZXByZWNhdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9sb2dnZXInO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBFTVBUWSwgbWVyZ2UsIE9ic2VydmFibGUsIG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWxheSwgZmxhdE1hcCwgbWFwLCBzdGFydFdpdGgsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnpUaEFkZE9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY2VsbC90aC1hZGRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpUYWJsZURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vdGFibGUtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IE56VGFibGVTdHlsZVNlcnZpY2UgfSBmcm9tICcuLi90YWJsZS1zdHlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IE56VHJEaXJlY3RpdmUgfSBmcm9tICcuL3RyLmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoZWFkOm5vdCguYW50LXRhYmxlLXRoZWFkKScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjY29udGVudFRlbXBsYXRlPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc0luc2lkZVRhYmxlXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudFRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOelRoZWFkQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNpbmdsZVNvcnQ6IEJvb2xlYW5JbnB1dDtcblxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgaXNJbnNpZGVUYWJsZSA9IGZhbHNlO1xuICBAVmlld0NoaWxkKCdjb250ZW50VGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSB0ZW1wbGF0ZVJlZiE6IFRlbXBsYXRlUmVmPE56U2FmZUFueT47XG4gIEBDb250ZW50Q2hpbGRyZW4oTnpUckRpcmVjdGl2ZSwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBsaXN0T2ZOelRyRGlyZWN0aXZlITogUXVlcnlMaXN0PE56VHJEaXJlY3RpdmU+O1xuICBAQ29udGVudENoaWxkcmVuKE56VGhBZGRPbkNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBsaXN0T2ZOelRoQWRkT25Db21wb25lbnQhOiBRdWVyeUxpc3Q8TnpUaEFkZE9uQ29tcG9uZW50PjtcbiAgLyoqIEBkZXByZWNhdGVkIHVzZSBuelNvcnRGbiBhbmQgbnpTb3J0UHJpb3JpdHkgaW5zdGVhZCAqKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2luZ2xlU29ydCA9IGZhbHNlO1xuICAvKiogQGRlcHJlY2F0ZWQgdXNlIG56U29ydE9yZGVyQ2hhbmdlIGluc3RlYWQgKiovXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNvcnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHsga2V5OiBOelNhZmVBbnk7IHZhbHVlOiBzdHJpbmcgfCBudWxsIH0+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNvcnRPcmRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBrZXk6IE56U2FmZUFueTsgdmFsdWU6IHN0cmluZyB8IG51bGwgfT4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgbnpUYWJsZVN0eWxlU2VydmljZTogTnpUYWJsZVN0eWxlU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIG56VGFibGVEYXRhU2VydmljZTogTnpUYWJsZURhdGFTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuaXNJbnNpZGVUYWJsZSA9ICEhdGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpUYWJsZVN0eWxlU2VydmljZSkge1xuICAgICAgdGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlLnNldFRoZWFkVGVtcGxhdGUodGhpcy50ZW1wbGF0ZVJlZik7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpTaW5nbGVTb3J0IH0gPSBjaGFuZ2VzO1xuICAgIGlmIChuelNpbmdsZVNvcnQpIHtcbiAgICAgIHdhcm5EZXByZWNhdGlvbihgJ256U2luZ2xlU29ydCcgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDEwLjAuMC4gUGxlYXNlIHVzZSAnbnpTb3J0Rm4nIGFuZCAnbnpTb3J0UHJpb3JpdHknIGluc3RlYWQuYCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56VGFibGVTdHlsZVNlcnZpY2UpIHtcbiAgICAgIGNvbnN0IGZpcnN0VGFibGVSb3ckID0gdGhpcy5saXN0T2ZOelRyRGlyZWN0aXZlLmNoYW5nZXMucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKHRoaXMubGlzdE9mTnpUckRpcmVjdGl2ZSksXG4gICAgICAgIG1hcChpdGVtID0+IGl0ZW0gJiYgaXRlbS5maXJzdClcbiAgICAgICkgYXMgT2JzZXJ2YWJsZTxOelRyRGlyZWN0aXZlPjtcbiAgICAgIGNvbnN0IGxpc3RPZkNvbHVtbnNDaGFuZ2VzJCA9IGZpcnN0VGFibGVSb3ckLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChmaXJzdFRhYmxlUm93ID0+IChmaXJzdFRhYmxlUm93ID8gZmlyc3RUYWJsZVJvdy5saXN0T2ZDb2x1bW5zQ2hhbmdlcyQgOiBFTVBUWSkpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgICk7XG4gICAgICBsaXN0T2ZDb2x1bW5zQ2hhbmdlcyQuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlLnNldExpc3RPZlRoKGRhdGEpKTtcbiAgICAgIC8qKiBUT0RPOiBuZWVkIHJlc2V0IHRoZSBtZWFzdXJlIHJvdyB3aGVuIHNjcm9sbFggY2hhbmdlICoqL1xuICAgICAgdGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlLmVuYWJsZUF1dG9NZWFzdXJlJFxuICAgICAgICAucGlwZShzd2l0Y2hNYXAoZW5hYmxlID0+IChlbmFibGUgPyBsaXN0T2ZDb2x1bW5zQ2hhbmdlcyQgOiBvZihbXSkpKSlcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlLnNldExpc3RPZk1lYXN1cmVDb2x1bW4oZGF0YSkpO1xuICAgICAgY29uc3QgbGlzdE9mRml4ZWRMZWZ0Q29sdW1uQ2hhbmdlcyQgPSBmaXJzdFRhYmxlUm93JC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoZmlyc3RUciA9PiAoZmlyc3RUciA/IGZpcnN0VHIubGlzdE9mRml4ZWRMZWZ0Q29sdW1uQ2hhbmdlcyQgOiBFTVBUWSkpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgICk7XG4gICAgICBjb25zdCBsaXN0T2ZGaXhlZFJpZ2h0Q29sdW1uQ2hhbmdlcyQgPSBmaXJzdFRhYmxlUm93JC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoZmlyc3RUciA9PiAoZmlyc3RUciA/IGZpcnN0VHIubGlzdE9mRml4ZWRSaWdodENvbHVtbkNoYW5nZXMkIDogRU1QVFkpKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApO1xuICAgICAgbGlzdE9mRml4ZWRMZWZ0Q29sdW1uQ2hhbmdlcyQuc3Vic2NyaWJlKGxpc3RPZkZpeGVkTGVmdENvbHVtbiA9PiB7XG4gICAgICAgIHRoaXMubnpUYWJsZVN0eWxlU2VydmljZS5zZXRIYXNGaXhMZWZ0KGxpc3RPZkZpeGVkTGVmdENvbHVtbi5sZW5ndGggIT09IDApO1xuICAgICAgfSk7XG4gICAgICBsaXN0T2ZGaXhlZFJpZ2h0Q29sdW1uQ2hhbmdlcyQuc3Vic2NyaWJlKGxpc3RPZkZpeGVkUmlnaHRDb2x1bW4gPT4ge1xuICAgICAgICB0aGlzLm56VGFibGVTdHlsZVNlcnZpY2Uuc2V0SGFzRml4UmlnaHQobGlzdE9mRml4ZWRSaWdodENvbHVtbi5sZW5ndGggIT09IDApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm56VGFibGVEYXRhU2VydmljZSkge1xuICAgICAgY29uc3QgbGlzdE9mQ29sdW1uJCA9IHRoaXMubGlzdE9mTnpUaEFkZE9uQ29tcG9uZW50LmNoYW5nZXMucGlwZShzdGFydFdpdGgodGhpcy5saXN0T2ZOelRoQWRkT25Db21wb25lbnQpKSBhcyBPYnNlcnZhYmxlPFxuICAgICAgICBRdWVyeUxpc3Q8TnpUaEFkZE9uQ29tcG9uZW50PlxuICAgICAgPjtcbiAgICAgIGNvbnN0IG1hbnVhbFNvcnQkID0gbGlzdE9mQ29sdW1uJC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoKCkgPT4gbWVyZ2UoLi4udGhpcy5saXN0T2ZOelRoQWRkT25Db21wb25lbnQubWFwKHRoID0+IHRoLm1hbnVhbENsaWNrT3JkZXIkKSkpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgICk7XG4gICAgICBtYW51YWxTb3J0JC5zdWJzY3JpYmUoKGRhdGE6IE56VGhBZGRPbkNvbXBvbmVudCkgPT4ge1xuICAgICAgICBjb25zdCBlbWl0VmFsdWUgPSB7IGtleTogZGF0YS5uekNvbHVtbktleSwgdmFsdWU6IGRhdGEuc29ydE9yZGVyIH07XG4gICAgICAgIHRoaXMubnpTb3J0Q2hhbmdlLmVtaXQoZW1pdFZhbHVlKTtcbiAgICAgICAgdGhpcy5uelNvcnRPcmRlckNoYW5nZS5lbWl0KGVtaXRWYWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLm56U2luZ2xlU29ydCB8fCAoZGF0YS5uelNvcnRGbiAmJiBkYXRhLm56U29ydFByaW9yaXR5ID09PSBmYWxzZSkpIHtcbiAgICAgICAgICB0aGlzLmxpc3RPZk56VGhBZGRPbkNvbXBvbmVudC5maWx0ZXIodGggPT4gdGggIT09IGRhdGEpLmZvckVhY2godGggPT4gdGguY2xlYXJTb3J0T3JkZXIoKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc3QgbGlzdE9mQ2FsY09wZXJhdG9yJCA9IGxpc3RPZkNvbHVtbiQucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKGxpc3QgPT5cbiAgICAgICAgICBtZXJnZSguLi5bbGlzdE9mQ29sdW1uJCwgLi4ubGlzdC5tYXAoKGM6IE56VGhBZGRPbkNvbXBvbmVudCkgPT4gYy5jYWxjT3BlcmF0b3JDaGFuZ2UkKV0pLnBpcGUoZmxhdE1hcCgoKSA9PiBsaXN0T2ZDb2x1bW4kKSlcbiAgICAgICAgKSxcbiAgICAgICAgbWFwKGxpc3QgPT5cbiAgICAgICAgICBsaXN0XG4gICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gISFpdGVtLm56U29ydEZuIHx8ICEhaXRlbS5uekZpbHRlckZuKVxuICAgICAgICAgICAgLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyBuelNvcnRGbiwgc29ydE9yZGVyLCBuekZpbHRlckZuLCBuekZpbHRlclZhbHVlLCBuelNvcnRQcmlvcml0eSwgbnpDb2x1bW5LZXkgfSA9IGl0ZW07XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAga2V5OiBuekNvbHVtbktleSxcbiAgICAgICAgICAgICAgICBzb3J0Rm46IG56U29ydEZuLFxuICAgICAgICAgICAgICAgIHNvcnRQcmlvcml0eTogbnpTb3J0UHJpb3JpdHksXG4gICAgICAgICAgICAgICAgc29ydE9yZGVyOiBzb3J0T3JkZXIhLFxuICAgICAgICAgICAgICAgIGZpbHRlckZuOiBuekZpbHRlckZuISxcbiAgICAgICAgICAgICAgICBmaWx0ZXJWYWx1ZTogbnpGaWx0ZXJWYWx1ZVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKSxcbiAgICAgICAgLy8gVE9ETzogYWZ0ZXIgY2hlY2tlZCBlcnJvciBoZXJlXG4gICAgICAgIGRlbGF5KDApXG4gICAgICApO1xuICAgICAgbGlzdE9mQ2FsY09wZXJhdG9yJC5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICAgIHRoaXMubnpUYWJsZURhdGFTZXJ2aWNlLmxpc3RPZkNhbGNPcGVyYXRvciQubmV4dChsaXN0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCksIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==