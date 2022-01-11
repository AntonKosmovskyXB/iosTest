/**
 * @fileoverview added by tsickle
 * Generated from: pagination.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { gridResponsiveMap, NzBreakpointEnum, NzBreakpointService } from 'ng-zorro-antd/core/services';
import { InputBoolean, InputNumber } from 'ng-zorro-antd/core/util';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
export class NzPaginationComponent {
    /**
     * @param {?} i18n
     * @param {?} cdr
     * @param {?} breakpointService
     */
    constructor(i18n, cdr, breakpointService) {
        this.i18n = i18n;
        this.cdr = cdr;
        this.breakpointService = breakpointService;
        this.nzPageSizeChange = new EventEmitter();
        this.nzPageIndexChange = new EventEmitter();
        this.nzShowTotal = null;
        this.nzSize = 'default';
        this.nzPageSizeOptions = [10, 20, 30, 40];
        this.nzItemRender = null;
        this.nzDisabled = false;
        this.nzShowSizeChanger = false;
        this.nzHideOnSinglePage = false;
        this.nzShowQuickJumper = false;
        this.nzSimple = false;
        this.nzResponsive = false;
        this.nzTotal = 0;
        this.nzPageIndex = 1;
        this.nzPageSize = 10;
        this.showPagination = true;
        this.size = 'default';
        this.destroy$ = new Subject();
        this.total$ = new ReplaySubject(1);
    }
    /**
     * @param {?} value
     * @param {?} lastIndex
     * @return {?}
     */
    validatePageIndex(value, lastIndex) {
        if (value > lastIndex) {
            return lastIndex;
        }
        else if (value < 1) {
            return 1;
        }
        else {
            return value;
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    onPageIndexChange(index) {
        /** @type {?} */
        const lastIndex = this.getLastIndex(this.nzTotal, this.nzPageSize);
        /** @type {?} */
        const validIndex = this.validatePageIndex(index, lastIndex);
        if (validIndex !== this.nzPageIndex && !this.nzDisabled) {
            this.nzPageIndex = validIndex;
            this.nzPageIndexChange.emit(this.nzPageIndex);
        }
    }
    /**
     * @param {?} size
     * @return {?}
     */
    onPageSizeChange(size) {
        this.nzPageSize = size;
        this.nzPageSizeChange.emit(size);
        /** @type {?} */
        const lastIndex = this.getLastIndex(this.nzTotal, this.nzPageSize);
        if (this.nzPageIndex > lastIndex) {
            this.onPageIndexChange(lastIndex);
        }
    }
    /**
     * @param {?} total
     * @return {?}
     */
    onTotalChange(total) {
        /** @type {?} */
        const lastIndex = this.getLastIndex(total, this.nzPageSize);
        if (this.nzPageIndex > lastIndex) {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => this.onPageIndexChange(lastIndex)));
        }
    }
    /**
     * @param {?} total
     * @param {?} pageSize
     * @return {?}
     */
    getLastIndex(total, pageSize) {
        return Math.ceil(total / pageSize);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getLocaleData('Pagination');
            this.cdr.markForCheck();
        }));
        this.total$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} total
         * @return {?}
         */
        total => {
            this.onTotalChange(total);
        }));
        this.breakpointService
            .subscribe(gridResponsiveMap)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} bp
         * @return {?}
         */
        bp => {
            if (this.nzResponsive) {
                this.size = bp === NzBreakpointEnum.xs ? 'small' : 'default';
                this.cdr.markForCheck();
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzHideOnSinglePage, nzTotal, nzPageSize, nzSize } = changes;
        if (nzTotal) {
            this.total$.next(this.nzTotal);
        }
        if (nzHideOnSinglePage || nzTotal || nzPageSize) {
            this.showPagination = (this.nzHideOnSinglePage && this.nzTotal > this.nzPageSize) || (this.nzTotal > 0 && !this.nzHideOnSinglePage);
        }
        if (nzSize) {
            this.size = nzSize.currentValue;
        }
    }
}
NzPaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-pagination',
                exportAs: 'nzPagination',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-container *ngIf="showPagination">
      <ng-container *ngIf="nzSimple; else defaultPagination.template">
        <ng-template [ngTemplateOutlet]="simplePagination.template"></ng-template>
      </ng-container>
    </ng-container>
    <nz-pagination-simple
      #simplePagination
      [disabled]="nzDisabled"
      [itemRender]="nzItemRender"
      [locale]="locale"
      [pageSize]="nzPageSize"
      [total]="nzTotal"
      [pageIndex]="nzPageIndex"
      (pageIndexChange)="onPageIndexChange($event)"
    ></nz-pagination-simple>
    <nz-pagination-default
      #defaultPagination
      [nzSize]="size"
      [itemRender]="nzItemRender"
      [showTotal]="nzShowTotal"
      [disabled]="nzDisabled"
      [locale]="locale"
      [showSizeChanger]="nzShowSizeChanger"
      [showQuickJumper]="nzShowQuickJumper"
      [total]="nzTotal"
      [pageIndex]="nzPageIndex"
      [pageSize]="nzPageSize"
      [pageSizeOptions]="nzPageSizeOptions"
      (pageIndexChange)="onPageIndexChange($event)"
      (pageSizeChange)="onPageSizeChange($event)"
    ></nz-pagination-default>
  `,
                host: {
                    '[class.ant-pagination]': 'true',
                    '[class.ant-pagination-simple]': 'nzSimple',
                    '[class.ant-pagination-disabled]': 'nzDisabled',
                    '[class.mini]': `!nzSimple && size === 'small'`
                }
            }] }
];
/** @nocollapse */
NzPaginationComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: ChangeDetectorRef },
    { type: NzBreakpointService }
];
NzPaginationComponent.propDecorators = {
    nzPageSizeChange: [{ type: Output }],
    nzPageIndexChange: [{ type: Output }],
    nzShowTotal: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzPageSizeOptions: [{ type: Input }],
    nzItemRender: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzShowSizeChanger: [{ type: Input }],
    nzHideOnSinglePage: [{ type: Input }],
    nzShowQuickJumper: [{ type: Input }],
    nzSimple: [{ type: Input }],
    nzResponsive: [{ type: Input }],
    nzTotal: [{ type: Input }],
    nzPageIndex: [{ type: Input }],
    nzPageSize: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzShowSizeChanger", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzHideOnSinglePage", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzShowQuickJumper", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzSimple", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzResponsive", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzTotal", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzPageIndex", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NzPaginationComponent.prototype, "nzPageSize", void 0);
if (false) {
    /** @type {?} */
    NzPaginationComponent.ngAcceptInputType_nzDisabled;
    /** @type {?} */
    NzPaginationComponent.ngAcceptInputType_nzShowSizeChanger;
    /** @type {?} */
    NzPaginationComponent.ngAcceptInputType_nzHideOnSinglePage;
    /** @type {?} */
    NzPaginationComponent.ngAcceptInputType_nzShowQuickJumper;
    /** @type {?} */
    NzPaginationComponent.ngAcceptInputType_nzSimple;
    /** @type {?} */
    NzPaginationComponent.ngAcceptInputType_nzResponsive;
    /** @type {?} */
    NzPaginationComponent.ngAcceptInputType_nzTotal;
    /** @type {?} */
    NzPaginationComponent.ngAcceptInputType_nzPageIndex;
    /** @type {?} */
    NzPaginationComponent.ngAcceptInputType_nzPageSize;
    /** @type {?} */
    NzPaginationComponent.prototype.nzPageSizeChange;
    /** @type {?} */
    NzPaginationComponent.prototype.nzPageIndexChange;
    /** @type {?} */
    NzPaginationComponent.prototype.nzShowTotal;
    /** @type {?} */
    NzPaginationComponent.prototype.nzSize;
    /** @type {?} */
    NzPaginationComponent.prototype.nzPageSizeOptions;
    /** @type {?} */
    NzPaginationComponent.prototype.nzItemRender;
    /** @type {?} */
    NzPaginationComponent.prototype.nzDisabled;
    /** @type {?} */
    NzPaginationComponent.prototype.nzShowSizeChanger;
    /** @type {?} */
    NzPaginationComponent.prototype.nzHideOnSinglePage;
    /** @type {?} */
    NzPaginationComponent.prototype.nzShowQuickJumper;
    /** @type {?} */
    NzPaginationComponent.prototype.nzSimple;
    /** @type {?} */
    NzPaginationComponent.prototype.nzResponsive;
    /** @type {?} */
    NzPaginationComponent.prototype.nzTotal;
    /** @type {?} */
    NzPaginationComponent.prototype.nzPageIndex;
    /** @type {?} */
    NzPaginationComponent.prototype.nzPageSize;
    /** @type {?} */
    NzPaginationComponent.prototype.showPagination;
    /** @type {?} */
    NzPaginationComponent.prototype.locale;
    /** @type {?} */
    NzPaginationComponent.prototype.size;
    /**
     * @type {?}
     * @private
     */
    NzPaginationComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzPaginationComponent.prototype.total$;
    /**
     * @type {?}
     * @private
     */
    NzPaginationComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    NzPaginationComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzPaginationComponent.prototype.breakpointService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3BhZ2luYXRpb24vIiwic291cmNlcyI6WyJwYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV2RyxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxhQUFhLEVBQTZCLE1BQU0sb0JBQW9CLENBQUM7QUFDOUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBa0QzQyxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7SUF5RWhDLFlBQW9CLElBQW1CLEVBQVUsR0FBc0IsRUFBVSxpQkFBc0M7UUFBbkcsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFxQjtRQTlEcEcscUJBQWdCLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUQsc0JBQWlCLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkUsZ0JBQVcsR0FBdUUsSUFBSSxDQUFDO1FBQ3ZGLFdBQU0sR0FBd0IsU0FBUyxDQUFDO1FBQ3hDLHNCQUFpQixHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDckMsaUJBQVks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QWtCO0FBQ2pCO0lBQWYsWUFBWSxFQUFFOzsyREFBc0I7QUFDdEI7SUFBZCxXQUFXLEVBQUU7O3NEQUFhO0FBQ1o7SUFBZCxXQUFXLEVBQUU7OzBEQUFpQjtBQUNoQjtJQUFkLFdBQVcsRUFBRTs7eURBQWlCOzs7SUF4QnhDLG1EQUFrRDs7SUFDbEQsMERBQXlEOztJQUN6RCwyREFBMEQ7O0lBQzFELDBEQUF5RDs7SUFDekQsaURBQWdEOztJQUNoRCxxREFBb0Q7O0lBQ3BELGdEQUE4Qzs7SUFDOUMsb0RBQWtEOztJQUNsRCxtREFBaUQ7O0lBRWpELGlEQUErRTs7SUFDL0Usa0RBQWdGOztJQUNoRiw0Q0FBZ0c7O0lBQ2hHLHVDQUFpRDs7SUFDakQsa0RBQThDOztJQUM5Qyw2Q0FBOEU7O0lBQzlFLDJDQUE0Qzs7SUFDNUMsa0RBQW1EOztJQUNuRCxtREFBb0Q7O0lBQ3BELGtEQUFtRDs7SUFDbkQseUNBQTBDOztJQUMxQyw2Q0FBOEM7O0lBQzlDLHdDQUFvQzs7SUFDcEMsNENBQXdDOztJQUN4QywyQ0FBd0M7O0lBRXhDLCtDQUFzQjs7SUFDdEIsdUNBQW1DOztJQUNuQyxxQ0FBc0M7Ozs7O0lBRXRDLHlDQUF1Qzs7Ozs7SUFDdkMsdUNBQThDOzs7OztJQXlDbEMscUNBQTJCOzs7OztJQUFFLG9DQUE4Qjs7Ozs7SUFBRSxrREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBncmlkUmVzcG9uc2l2ZU1hcCwgTnpCcmVha3BvaW50RW51bSwgTnpCcmVha3BvaW50U2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE51bWJlcklucHV0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlLCBOelBhZ2luYXRpb25JMThuSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcbmltcG9ydCB7IFJlcGxheVN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUGFnaW5hdGlvbkl0ZW1SZW5kZXJDb250ZXh0IH0gZnJvbSAnLi9wYWdpbmF0aW9uLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotcGFnaW5hdGlvbicsXG4gIGV4cG9ydEFzOiAnbnpQYWdpbmF0aW9uJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93UGFnaW5hdGlvblwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56U2ltcGxlOyBlbHNlIGRlZmF1bHRQYWdpbmF0aW9uLnRlbXBsYXRlXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJzaW1wbGVQYWdpbmF0aW9uLnRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuei1wYWdpbmF0aW9uLXNpbXBsZVxuICAgICAgI3NpbXBsZVBhZ2luYXRpb25cbiAgICAgIFtkaXNhYmxlZF09XCJuekRpc2FibGVkXCJcbiAgICAgIFtpdGVtUmVuZGVyXT1cIm56SXRlbVJlbmRlclwiXG4gICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXG4gICAgICBbcGFnZVNpemVdPVwibnpQYWdlU2l6ZVwiXG4gICAgICBbdG90YWxdPVwibnpUb3RhbFwiXG4gICAgICBbcGFnZUluZGV4XT1cIm56UGFnZUluZGV4XCJcbiAgICAgIChwYWdlSW5kZXhDaGFuZ2UpPVwib25QYWdlSW5kZXhDaGFuZ2UoJGV2ZW50KVwiXG4gICAgPjwvbnotcGFnaW5hdGlvbi1zaW1wbGU+XG4gICAgPG56LXBhZ2luYXRpb24tZGVmYXVsdFxuICAgICAgI2RlZmF1bHRQYWdpbmF0aW9uXG4gICAgICBbbnpTaXplXT1cInNpemVcIlxuICAgICAgW2l0ZW1SZW5kZXJdPVwibnpJdGVtUmVuZGVyXCJcbiAgICAgIFtzaG93VG90YWxdPVwibnpTaG93VG90YWxcIlxuICAgICAgW2Rpc2FibGVkXT1cIm56RGlzYWJsZWRcIlxuICAgICAgW2xvY2FsZV09XCJsb2NhbGVcIlxuICAgICAgW3Nob3dTaXplQ2hhbmdlcl09XCJuelNob3dTaXplQ2hhbmdlclwiXG4gICAgICBbc2hvd1F1aWNrSnVtcGVyXT1cIm56U2hvd1F1aWNrSnVtcGVyXCJcbiAgICAgIFt0b3RhbF09XCJuelRvdGFsXCJcbiAgICAgIFtwYWdlSW5kZXhdPVwibnpQYWdlSW5kZXhcIlxuICAgICAgW3BhZ2VTaXplXT1cIm56UGFnZVNpemVcIlxuICAgICAgW3BhZ2VTaXplT3B0aW9uc109XCJuelBhZ2VTaXplT3B0aW9uc1wiXG4gICAgICAocGFnZUluZGV4Q2hhbmdlKT1cIm9uUGFnZUluZGV4Q2hhbmdlKCRldmVudClcIlxuICAgICAgKHBhZ2VTaXplQ2hhbmdlKT1cIm9uUGFnZVNpemVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgPjwvbnotcGFnaW5hdGlvbi1kZWZhdWx0PlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtcGFnaW5hdGlvbl0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hbnQtcGFnaW5hdGlvbi1zaW1wbGVdJzogJ256U2ltcGxlJyxcbiAgICAnW2NsYXNzLmFudC1wYWdpbmF0aW9uLWRpc2FibGVkXSc6ICduekRpc2FibGVkJyxcbiAgICAnW2NsYXNzLm1pbmldJzogYCFuelNpbXBsZSAmJiBzaXplID09PSAnc21hbGwnYFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56UGFnaW5hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpEaXNhYmxlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTaG93U2l6ZUNoYW5nZXI6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256SGlkZU9uU2luZ2xlUGFnZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTaG93UXVpY2tKdW1wZXI6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2ltcGxlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelJlc3BvbnNpdmU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256VG90YWw6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpQYWdlSW5kZXg6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpQYWdlU2l6ZTogTnVtYmVySW5wdXQ7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56UGFnZVNpemVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpQYWdlSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBuelNob3dUb3RhbDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IG51bWJlcjsgcmFuZ2U6IFtudW1iZXIsIG51bWJlcl0gfT4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpTaXplOiAnZGVmYXVsdCcgfCAnc21hbGwnID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBuelBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgMjAsIDMwLCA0MF07XG4gIEBJbnB1dCgpIG56SXRlbVJlbmRlcjogVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkl0ZW1SZW5kZXJDb250ZXh0PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93U2l6ZUNoYW5nZXIgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56SGlkZU9uU2luZ2xlUGFnZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93UXVpY2tKdW1wZXIgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2ltcGxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelJlc3BvbnNpdmUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpUb3RhbCA9IDA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56UGFnZUluZGV4ID0gMTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpQYWdlU2l6ZSA9IDEwO1xuXG4gIHNob3dQYWdpbmF0aW9uID0gdHJ1ZTtcbiAgbG9jYWxlITogTnpQYWdpbmF0aW9uSTE4bkludGVyZmFjZTtcbiAgc2l6ZTogJ2RlZmF1bHQnIHwgJ3NtYWxsJyA9ICdkZWZhdWx0JztcblxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSB0b3RhbCQgPSBuZXcgUmVwbGF5U3ViamVjdDxudW1iZXI+KDEpO1xuXG4gIHZhbGlkYXRlUGFnZUluZGV4KHZhbHVlOiBudW1iZXIsIGxhc3RJbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAodmFsdWUgPiBsYXN0SW5kZXgpIHtcbiAgICAgIHJldHVybiBsYXN0SW5kZXg7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA8IDEpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgb25QYWdlSW5kZXhDaGFuZ2UoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGxhc3RJbmRleCA9IHRoaXMuZ2V0TGFzdEluZGV4KHRoaXMubnpUb3RhbCwgdGhpcy5uelBhZ2VTaXplKTtcbiAgICBjb25zdCB2YWxpZEluZGV4ID0gdGhpcy52YWxpZGF0ZVBhZ2VJbmRleChpbmRleCwgbGFzdEluZGV4KTtcbiAgICBpZiAodmFsaWRJbmRleCAhPT0gdGhpcy5uelBhZ2VJbmRleCAmJiAhdGhpcy5uekRpc2FibGVkKSB7XG4gICAgICB0aGlzLm56UGFnZUluZGV4ID0gdmFsaWRJbmRleDtcbiAgICAgIHRoaXMubnpQYWdlSW5kZXhDaGFuZ2UuZW1pdCh0aGlzLm56UGFnZUluZGV4KTtcbiAgICB9XG4gIH1cblxuICBvblBhZ2VTaXplQ2hhbmdlKHNpemU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubnpQYWdlU2l6ZSA9IHNpemU7XG4gICAgdGhpcy5uelBhZ2VTaXplQ2hhbmdlLmVtaXQoc2l6ZSk7XG4gICAgY29uc3QgbGFzdEluZGV4ID0gdGhpcy5nZXRMYXN0SW5kZXgodGhpcy5uelRvdGFsLCB0aGlzLm56UGFnZVNpemUpO1xuICAgIGlmICh0aGlzLm56UGFnZUluZGV4ID4gbGFzdEluZGV4KSB7XG4gICAgICB0aGlzLm9uUGFnZUluZGV4Q2hhbmdlKGxhc3RJbmRleCk7XG4gICAgfVxuICB9XG5cbiAgb25Ub3RhbENoYW5nZSh0b3RhbDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgbGFzdEluZGV4ID0gdGhpcy5nZXRMYXN0SW5kZXgodG90YWwsIHRoaXMubnpQYWdlU2l6ZSk7XG4gICAgaWYgKHRoaXMubnpQYWdlSW5kZXggPiBsYXN0SW5kZXgpIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5vblBhZ2VJbmRleENoYW5nZShsYXN0SW5kZXgpKTtcbiAgICB9XG4gIH1cblxuICBnZXRMYXN0SW5kZXgodG90YWw6IG51bWJlciwgcGFnZVNpemU6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguY2VpbCh0b3RhbCAvIHBhZ2VTaXplKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGJyZWFrcG9pbnRTZXJ2aWNlOiBOekJyZWFrcG9pbnRTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdQYWdpbmF0aW9uJyk7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcblxuICAgIHRoaXMudG90YWwkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUodG90YWwgPT4ge1xuICAgICAgdGhpcy5vblRvdGFsQ2hhbmdlKHRvdGFsKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYnJlYWtwb2ludFNlcnZpY2VcbiAgICAgIC5zdWJzY3JpYmUoZ3JpZFJlc3BvbnNpdmVNYXApXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKGJwID0+IHtcbiAgICAgICAgaWYgKHRoaXMubnpSZXNwb25zaXZlKSB7XG4gICAgICAgICAgdGhpcy5zaXplID0gYnAgPT09IE56QnJlYWtwb2ludEVudW0ueHMgPyAnc21hbGwnIDogJ2RlZmF1bHQnO1xuICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG56SGlkZU9uU2luZ2xlUGFnZSwgbnpUb3RhbCwgbnpQYWdlU2l6ZSwgbnpTaXplIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChuelRvdGFsKSB7XG4gICAgICB0aGlzLnRvdGFsJC5uZXh0KHRoaXMubnpUb3RhbCk7XG4gICAgfVxuICAgIGlmIChuekhpZGVPblNpbmdsZVBhZ2UgfHwgbnpUb3RhbCB8fCBuelBhZ2VTaXplKSB7XG4gICAgICB0aGlzLnNob3dQYWdpbmF0aW9uID0gKHRoaXMubnpIaWRlT25TaW5nbGVQYWdlICYmIHRoaXMubnpUb3RhbCA+IHRoaXMubnpQYWdlU2l6ZSkgfHwgKHRoaXMubnpUb3RhbCA+IDAgJiYgIXRoaXMubnpIaWRlT25TaW5nbGVQYWdlKTtcbiAgICB9XG5cbiAgICBpZiAobnpTaXplKSB7XG4gICAgICB0aGlzLnNpemUgPSBuelNpemUuY3VycmVudFZhbHVlO1xuICAgIH1cbiAgfVxufVxuIl19