/**
 * @fileoverview added by tsickle
 * Generated from: src/table/thead.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
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
export class NzTheadComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} nzTableStyleService
     * @param {?} nzTableDataService
     */
    constructor(elementRef, renderer, nzTableStyleService, nzTableDataService) {
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
    ngOnInit() {
        if (this.nzTableStyleService) {
            this.nzTableStyleService.setTheadTemplate(this.templateRef);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzSingleSort } = changes;
        if (nzSingleSort) {
            warnDeprecation(`'nzSingleSort' is deprecated and will be removed in 10.0.0. Please use 'nzSortFn' and 'nzSortPriority' instead.`);
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.nzTableStyleService) {
            /** @type {?} */
            const firstTableRow$ = (/** @type {?} */ (this.listOfNzTrDirective.changes.pipe(startWith(this.listOfNzTrDirective), map((/**
             * @param {?} item
             * @return {?}
             */
            item => item && item.first)))));
            /** @type {?} */
            const listOfColumnsChanges$ = firstTableRow$.pipe(switchMap((/**
             * @param {?} firstTableRow
             * @return {?}
             */
            firstTableRow => (firstTableRow ? firstTableRow.listOfColumnsChanges$ : EMPTY))), takeUntil(this.destroy$));
            listOfColumnsChanges$.subscribe((/**
             * @param {?} data
             * @return {?}
             */
            data => this.nzTableStyleService.setListOfTh(data)));
            /** TODO: need reset the measure row when scrollX change **/
            this.nzTableStyleService.enableAutoMeasure$
                .pipe(switchMap((/**
             * @param {?} enable
             * @return {?}
             */
            enable => (enable ? listOfColumnsChanges$ : of([])))))
                .pipe(takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} data
             * @return {?}
             */
            data => this.nzTableStyleService.setListOfMeasureColumn(data)));
            /** @type {?} */
            const listOfFixedLeftColumnChanges$ = firstTableRow$.pipe(switchMap((/**
             * @param {?} firstTr
             * @return {?}
             */
            firstTr => (firstTr ? firstTr.listOfFixedLeftColumnChanges$ : EMPTY))), takeUntil(this.destroy$));
            /** @type {?} */
            const listOfFixedRightColumnChanges$ = firstTableRow$.pipe(switchMap((/**
             * @param {?} firstTr
             * @return {?}
             */
            firstTr => (firstTr ? firstTr.listOfFixedRightColumnChanges$ : EMPTY))), takeUntil(this.destroy$));
            listOfFixedLeftColumnChanges$.subscribe((/**
             * @param {?} listOfFixedLeftColumn
             * @return {?}
             */
            listOfFixedLeftColumn => {
                this.nzTableStyleService.setHasFixLeft(listOfFixedLeftColumn.length !== 0);
            }));
            listOfFixedRightColumnChanges$.subscribe((/**
             * @param {?} listOfFixedRightColumn
             * @return {?}
             */
            listOfFixedRightColumn => {
                this.nzTableStyleService.setHasFixRight(listOfFixedRightColumn.length !== 0);
            }));
        }
        if (this.nzTableDataService) {
            /** @type {?} */
            const listOfColumn$ = (/** @type {?} */ (this.listOfNzThAddOnComponent.changes.pipe(startWith(this.listOfNzThAddOnComponent))));
            /** @type {?} */
            const manualSort$ = listOfColumn$.pipe(switchMap((/**
             * @return {?}
             */
            () => merge(...this.listOfNzThAddOnComponent.map((/**
             * @param {?} th
             * @return {?}
             */
            th => th.manualClickOrder$))))), takeUntil(this.destroy$));
            manualSort$.subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                /** @type {?} */
                const emitValue = { key: data.nzColumnKey, value: data.sortOrder };
                this.nzSortChange.emit(emitValue);
                this.nzSortOrderChange.emit(emitValue);
                if (this.nzSingleSort || (data.nzSortFn && data.nzSortPriority === false)) {
                    this.listOfNzThAddOnComponent.filter((/**
                     * @param {?} th
                     * @return {?}
                     */
                    th => th !== data)).forEach((/**
                     * @param {?} th
                     * @return {?}
                     */
                    th => th.clearSortOrder()));
                }
            }));
            /** @type {?} */
            const listOfCalcOperator$ = listOfColumn$.pipe(switchMap((/**
             * @param {?} list
             * @return {?}
             */
            list => merge(...[listOfColumn$, ...list.map((/**
                 * @param {?} c
                 * @return {?}
                 */
                (c) => c.calcOperatorChange$))]).pipe(flatMap((/**
             * @return {?}
             */
            () => listOfColumn$))))), map((/**
             * @param {?} list
             * @return {?}
             */
            list => list
                .filter((/**
             * @param {?} item
             * @return {?}
             */
            item => !!item.nzSortFn || !!item.nzFilterFn))
                .map((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                const { nzSortFn, sortOrder, nzFilterFn, nzFilterValue, nzSortPriority, nzColumnKey } = item;
                return {
                    key: nzColumnKey,
                    sortFn: nzSortFn,
                    sortPriority: nzSortPriority,
                    sortOrder: (/** @type {?} */ (sortOrder)),
                    filterFn: (/** @type {?} */ (nzFilterFn)),
                    filterValue: nzFilterValue
                };
            })))), 
            // TODO: after checked error here
            delay(0));
            listOfCalcOperator$.subscribe((/**
             * @param {?} list
             * @return {?}
             */
            list => {
                this.nzTableDataService.listOfCalcOperator$.next(list);
            }));
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.nzTableStyleService) {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
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
NzTheadComponent.decorators = [
    { type: Component, args: [{
                selector: 'thead:not(.ant-table-thead)',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <ng-template #contentTemplate>
      <ng-content></ng-content>
    </ng-template>
    <ng-container *ngIf="!isInsideTable">
      <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
NzTheadComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NzTableStyleService, decorators: [{ type: Optional }] },
    { type: NzTableDataService, decorators: [{ type: Optional }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbInNyYy90YWJsZS90aGVhZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFLQSxPQUFPLEVBR0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUVULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUc1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFlL0MsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7OztJQWMzQixZQUNVLFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ1AsbUJBQXdDLEVBQ3hDLGtCQUFzQztRQUhsRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDUCx3QkFBbUIs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S0FBSzsyQkFFTCxNQUFNO2dDQUNOLE1BQU07O0FBSGtCO0lBQWYsWUFBWSxFQUFFOztzREFBc0I7OztJQVI5QyxnREFBb0Q7Ozs7O0lBRXBELG9DQUF1Qzs7SUFDdkMseUNBQXNCOztJQUN0Qix1Q0FBcUY7O0lBQ3JGLCtDQUFzRzs7SUFDdEcsb0RBQXFIOzs7OztJQUVySCx3Q0FBOEM7Ozs7O0lBRTlDLHdDQUErRjs7SUFDL0YsNkNBQW9HOzs7OztJQUdsRyxzQ0FBOEI7Ozs7O0lBQzlCLG9DQUEyQjs7Ozs7SUFDM0IsK0NBQTREOzs7OztJQUM1RCw4Q0FBMEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuLyogdHNsaW50OmRpc2FibGU6Y29tcG9uZW50LXNlbGVjdG9yICovXG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHdhcm5EZXByZWNhdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9sb2dnZXInO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBFTVBUWSwgbWVyZ2UsIE9ic2VydmFibGUsIG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWxheSwgZmxhdE1hcCwgbWFwLCBzdGFydFdpdGgsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnpUaEFkZE9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY2VsbC90aC1hZGRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpUYWJsZURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vdGFibGUtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IE56VGFibGVTdHlsZVNlcnZpY2UgfSBmcm9tICcuLi90YWJsZS1zdHlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IE56VHJEaXJlY3RpdmUgfSBmcm9tICcuL3RyLmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoZWFkOm5vdCguYW50LXRhYmxlLXRoZWFkKScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjY29udGVudFRlbXBsYXRlPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc0luc2lkZVRhYmxlXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudFRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOelRoZWFkQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNpbmdsZVNvcnQ6IEJvb2xlYW5JbnB1dDtcblxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgaXNJbnNpZGVUYWJsZSA9IGZhbHNlO1xuICBAVmlld0NoaWxkKCdjb250ZW50VGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSB0ZW1wbGF0ZVJlZiE6IFRlbXBsYXRlUmVmPE56U2FmZUFueT47XG4gIEBDb250ZW50Q2hpbGRyZW4oTnpUckRpcmVjdGl2ZSwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBsaXN0T2ZOelRyRGlyZWN0aXZlITogUXVlcnlMaXN0PE56VHJEaXJlY3RpdmU+O1xuICBAQ29udGVudENoaWxkcmVuKE56VGhBZGRPbkNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBsaXN0T2ZOelRoQWRkT25Db21wb25lbnQhOiBRdWVyeUxpc3Q8TnpUaEFkZE9uQ29tcG9uZW50PjtcbiAgLyoqIEBkZXByZWNhdGVkIHVzZSBuelNvcnRGbiBhbmQgbnpTb3J0UHJpb3JpdHkgaW5zdGVhZCAqKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2luZ2xlU29ydCA9IGZhbHNlO1xuICAvKiogQGRlcHJlY2F0ZWQgdXNlIG56U29ydE9yZGVyQ2hhbmdlIGluc3RlYWQgKiovXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNvcnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHsga2V5OiBOelNhZmVBbnk7IHZhbHVlOiBzdHJpbmcgfCBudWxsIH0+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNvcnRPcmRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBrZXk6IE56U2FmZUFueTsgdmFsdWU6IHN0cmluZyB8IG51bGwgfT4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgbnpUYWJsZVN0eWxlU2VydmljZTogTnpUYWJsZVN0eWxlU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIG56VGFibGVEYXRhU2VydmljZTogTnpUYWJsZURhdGFTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuaXNJbnNpZGVUYWJsZSA9ICEhdGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpUYWJsZVN0eWxlU2VydmljZSkge1xuICAgICAgdGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlLnNldFRoZWFkVGVtcGxhdGUodGhpcy50ZW1wbGF0ZVJlZik7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpTaW5nbGVTb3J0IH0gPSBjaGFuZ2VzO1xuICAgIGlmIChuelNpbmdsZVNvcnQpIHtcbiAgICAgIHdhcm5EZXByZWNhdGlvbihgJ256U2luZ2xlU29ydCcgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDEwLjAuMC4gUGxlYXNlIHVzZSAnbnpTb3J0Rm4nIGFuZCAnbnpTb3J0UHJpb3JpdHknIGluc3RlYWQuYCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56VGFibGVTdHlsZVNlcnZpY2UpIHtcbiAgICAgIGNvbnN0IGZpcnN0VGFibGVSb3ckID0gdGhpcy5saXN0T2ZOelRyRGlyZWN0aXZlLmNoYW5nZXMucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKHRoaXMubGlzdE9mTnpUckRpcmVjdGl2ZSksXG4gICAgICAgIG1hcChpdGVtID0+IGl0ZW0gJiYgaXRlbS5maXJzdClcbiAgICAgICkgYXMgT2JzZXJ2YWJsZTxOelRyRGlyZWN0aXZlPjtcbiAgICAgIGNvbnN0IGxpc3RPZkNvbHVtbnNDaGFuZ2VzJCA9IGZpcnN0VGFibGVSb3ckLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChmaXJzdFRhYmxlUm93ID0+IChmaXJzdFRhYmxlUm93ID8gZmlyc3RUYWJsZVJvdy5saXN0T2ZDb2x1bW5zQ2hhbmdlcyQgOiBFTVBUWSkpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgICk7XG4gICAgICBsaXN0T2ZDb2x1bW5zQ2hhbmdlcyQuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlLnNldExpc3RPZlRoKGRhdGEpKTtcbiAgICAgIC8qKiBUT0RPOiBuZWVkIHJlc2V0IHRoZSBtZWFzdXJlIHJvdyB3aGVuIHNjcm9sbFggY2hhbmdlICoqL1xuICAgICAgdGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlLmVuYWJsZUF1dG9NZWFzdXJlJFxuICAgICAgICAucGlwZShzd2l0Y2hNYXAoZW5hYmxlID0+IChlbmFibGUgPyBsaXN0T2ZDb2x1bW5zQ2hhbmdlcyQgOiBvZihbXSkpKSlcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlLnNldExpc3RPZk1lYXN1cmVDb2x1bW4oZGF0YSkpO1xuICAgICAgY29uc3QgbGlzdE9mRml4ZWRMZWZ0Q29sdW1uQ2hhbmdlcyQgPSBmaXJzdFRhYmxlUm93JC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoZmlyc3RUciA9PiAoZmlyc3RUciA/IGZpcnN0VHIubGlzdE9mRml4ZWRMZWZ0Q29sdW1uQ2hhbmdlcyQgOiBFTVBUWSkpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgICk7XG4gICAgICBjb25zdCBsaXN0T2ZGaXhlZFJpZ2h0Q29sdW1uQ2hhbmdlcyQgPSBmaXJzdFRhYmxlUm93JC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoZmlyc3RUciA9PiAoZmlyc3RUciA/IGZpcnN0VHIubGlzdE9mRml4ZWRSaWdodENvbHVtbkNoYW5nZXMkIDogRU1QVFkpKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApO1xuICAgICAgbGlzdE9mRml4ZWRMZWZ0Q29sdW1uQ2hhbmdlcyQuc3Vic2NyaWJlKGxpc3RPZkZpeGVkTGVmdENvbHVtbiA9PiB7XG4gICAgICAgIHRoaXMubnpUYWJsZVN0eWxlU2VydmljZS5zZXRIYXNGaXhMZWZ0KGxpc3RPZkZpeGVkTGVmdENvbHVtbi5sZW5ndGggIT09IDApO1xuICAgICAgfSk7XG4gICAgICBsaXN0T2ZGaXhlZFJpZ2h0Q29sdW1uQ2hhbmdlcyQuc3Vic2NyaWJlKGxpc3RPZkZpeGVkUmlnaHRDb2x1bW4gPT4ge1xuICAgICAgICB0aGlzLm56VGFibGVTdHlsZVNlcnZpY2Uuc2V0SGFzRml4UmlnaHQobGlzdE9mRml4ZWRSaWdodENvbHVtbi5sZW5ndGggIT09IDApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm56VGFibGVEYXRhU2VydmljZSkge1xuICAgICAgY29uc3QgbGlzdE9mQ29sdW1uJCA9IHRoaXMubGlzdE9mTnpUaEFkZE9uQ29tcG9uZW50LmNoYW5nZXMucGlwZShzdGFydFdpdGgodGhpcy5saXN0T2ZOelRoQWRkT25Db21wb25lbnQpKSBhcyBPYnNlcnZhYmxlPFxuICAgICAgICBRdWVyeUxpc3Q8TnpUaEFkZE9uQ29tcG9uZW50PlxuICAgICAgPjtcbiAgICAgIGNvbnN0IG1hbnVhbFNvcnQkID0gbGlzdE9mQ29sdW1uJC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoKCkgPT4gbWVyZ2UoLi4udGhpcy5saXN0T2ZOelRoQWRkT25Db21wb25lbnQubWFwKHRoID0+IHRoLm1hbnVhbENsaWNrT3JkZXIkKSkpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgICk7XG4gICAgICBtYW51YWxTb3J0JC5zdWJzY3JpYmUoKGRhdGE6IE56VGhBZGRPbkNvbXBvbmVudCkgPT4ge1xuICAgICAgICBjb25zdCBlbWl0VmFsdWUgPSB7IGtleTogZGF0YS5uekNvbHVtbktleSwgdmFsdWU6IGRhdGEuc29ydE9yZGVyIH07XG4gICAgICAgIHRoaXMubnpTb3J0Q2hhbmdlLmVtaXQoZW1pdFZhbHVlKTtcbiAgICAgICAgdGhpcy5uelNvcnRPcmRlckNoYW5nZS5lbWl0KGVtaXRWYWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLm56U2luZ2xlU29ydCB8fCAoZGF0YS5uelNvcnRGbiAmJiBkYXRhLm56U29ydFByaW9yaXR5ID09PSBmYWxzZSkpIHtcbiAgICAgICAgICB0aGlzLmxpc3RPZk56VGhBZGRPbkNvbXBvbmVudC5maWx0ZXIodGggPT4gdGggIT09IGRhdGEpLmZvckVhY2godGggPT4gdGguY2xlYXJTb3J0T3JkZXIoKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc3QgbGlzdE9mQ2FsY09wZXJhdG9yJCA9IGxpc3RPZkNvbHVtbiQucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKGxpc3QgPT5cbiAgICAgICAgICBtZXJnZSguLi5bbGlzdE9mQ29sdW1uJCwgLi4ubGlzdC5tYXAoKGM6IE56VGhBZGRPbkNvbXBvbmVudCkgPT4gYy5jYWxjT3BlcmF0b3JDaGFuZ2UkKV0pLnBpcGUoZmxhdE1hcCgoKSA9PiBsaXN0T2ZDb2x1bW4kKSlcbiAgICAgICAgKSxcbiAgICAgICAgbWFwKGxpc3QgPT5cbiAgICAgICAgICBsaXN0XG4gICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gISFpdGVtLm56U29ydEZuIHx8ICEhaXRlbS5uekZpbHRlckZuKVxuICAgICAgICAgICAgLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyBuelNvcnRGbiwgc29ydE9yZGVyLCBuekZpbHRlckZuLCBuekZpbHRlclZhbHVlLCBuelNvcnRQcmlvcml0eSwgbnpDb2x1bW5LZXkgfSA9IGl0ZW07XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAga2V5OiBuekNvbHVtbktleSxcbiAgICAgICAgICAgICAgICBzb3J0Rm46IG56U29ydEZuLFxuICAgICAgICAgICAgICAgIHNvcnRQcmlvcml0eTogbnpTb3J0UHJpb3JpdHksXG4gICAgICAgICAgICAgICAgc29ydE9yZGVyOiBzb3J0T3JkZXIhLFxuICAgICAgICAgICAgICAgIGZpbHRlckZuOiBuekZpbHRlckZuISxcbiAgICAgICAgICAgICAgICBmaWx0ZXJWYWx1ZTogbnpGaWx0ZXJWYWx1ZVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKSxcbiAgICAgICAgLy8gVE9ETzogYWZ0ZXIgY2hlY2tlZCBlcnJvciBoZXJlXG4gICAgICAgIGRlbGF5KDApXG4gICAgICApO1xuICAgICAgbGlzdE9mQ2FsY09wZXJhdG9yJC5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICAgIHRoaXMubnpUYWJsZURhdGFTZXJ2aWNlLmxpc3RPZkNhbGNPcGVyYXRvciQubmV4dChsaXN0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCksIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==