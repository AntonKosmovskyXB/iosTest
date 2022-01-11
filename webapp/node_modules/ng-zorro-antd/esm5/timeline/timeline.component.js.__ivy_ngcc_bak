/**
 * @fileoverview added by tsickle
 * Generated from: timeline.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Input, QueryList, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzTimelineItemComponent } from './timeline-item.component';
import { TimelineService } from './timeline.service';
var NzTimelineComponent = /** @class */ (function () {
    function NzTimelineComponent(cdr, timelineService) {
        this.cdr = cdr;
        this.timelineService = timelineService;
        this.nzMode = 'left';
        this.nzReverse = false;
        this.isPendingBoolean = false;
        this.timelineItems = [];
        this.destroy$ = new Subject();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTimelineComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzMode = changes.nzMode, nzReverse = changes.nzReverse, nzPending = changes.nzPending;
        if (simpleChangeActivated(nzMode) || simpleChangeActivated(nzReverse)) {
            this.updateChildren();
        }
        if (nzPending) {
            this.isPendingBoolean = nzPending.currentValue === true;
        }
    };
    /**
     * @return {?}
     */
    NzTimelineComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.timelineService.check$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NzTimelineComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.updateChildren();
        this.listOfItems.changes.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.updateChildren();
        }));
    };
    /**
     * @return {?}
     */
    NzTimelineComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @private
     * @return {?}
     */
    NzTimelineComponent.prototype.updateChildren = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.listOfItems && this.listOfItems.length) {
            /** @type {?} */
            var length_1 = this.listOfItems.length;
            this.listOfItems.forEach((/**
             * @param {?} item
             * @param {?} index
             * @return {?}
             */
            function (item, index) {
                item.isLast = !_this.nzReverse ? index === length_1 - 1 : index === 0;
                item.position = getInferredTimelineItemPosition(index, _this.nzMode);
                item.detectChanges();
            }));
            this.timelineItems = this.nzReverse ? this.listOfItems.toArray().reverse() : this.listOfItems.toArray();
        }
        this.cdr.markForCheck();
    };
    NzTimelineComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    selector: 'nz-timeline',
                    providers: [TimelineService],
                    exportAs: 'nzTimeline',
                    template: "\n    <ul\n      class=\"ant-timeline\"\n      [class.ant-timeline-right]=\"nzMode === 'right'\"\n      [class.ant-timeline-alternate]=\"nzMode === 'alternate' || nzMode === 'custom'\"\n      [class.ant-timeline-pending]=\"!!nzPending\"\n      [class.ant-timeline-reverse]=\"nzReverse\"\n    >\n      <!-- pending dot (reversed) -->\n      <ng-container *ngIf=\"nzReverse\" [ngTemplateOutlet]=\"pendingTemplate\"></ng-container>\n      <!-- timeline items -->\n      <ng-container *ngFor=\"let item of timelineItems\">\n        <ng-template [ngTemplateOutlet]=\"item.template\"></ng-template>\n      </ng-container>\n      <ng-container *ngIf=\"!nzReverse\" [ngTemplateOutlet]=\"pendingTemplate\"></ng-container>\n      <!-- pending dot -->\n    </ul>\n    <ng-template #pendingTemplate>\n      <li *ngIf=\"nzPending\" class=\"ant-timeline-item ant-timeline-item-pending\">\n        <div class=\"ant-timeline-item-tail\"></div>\n        <div class=\"ant-timeline-item-head ant-timeline-item-head-custom ant-timeline-item-head-blue\">\n          <ng-container *nzStringTemplateOutlet=\"nzPendingDot\">\n            {{ nzPendingDot }}<i *ngIf=\"!nzPendingDot\" nz-icon nzType=\"loading\"></i>\n          </ng-container>\n        </div>\n        <div class=\"ant-timeline-item-content\">\n          <ng-container *nzStringTemplateOutlet=\"nzPending\">\n            {{ isPendingBoolean ? '' : nzPending }}\n          </ng-container>\n        </div>\n      </li>\n    </ng-template>\n    <!-- Grasp items -->\n    <ng-content></ng-content>\n  "
                }] }
    ];
    /** @nocollapse */
    NzTimelineComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: TimelineService }
    ]; };
    NzTimelineComponent.propDecorators = {
        listOfItems: [{ type: ContentChildren, args: [NzTimelineItemComponent,] }],
        nzMode: [{ type: Input }],
        nzPending: [{ type: Input }],
        nzPendingDot: [{ type: Input }],
        nzReverse: [{ type: Input }]
    };
    return NzTimelineComponent;
}());
export { NzTimelineComponent };
if (false) {
    /** @type {?} */
    NzTimelineComponent.prototype.listOfItems;
    /** @type {?} */
    NzTimelineComponent.prototype.nzMode;
    /** @type {?} */
    NzTimelineComponent.prototype.nzPending;
    /** @type {?} */
    NzTimelineComponent.prototype.nzPendingDot;
    /** @type {?} */
    NzTimelineComponent.prototype.nzReverse;
    /** @type {?} */
    NzTimelineComponent.prototype.isPendingBoolean;
    /** @type {?} */
    NzTimelineComponent.prototype.timelineItems;
    /**
     * @type {?}
     * @private
     */
    NzTimelineComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzTimelineComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTimelineComponent.prototype.timelineService;
}
/**
 * @param {?=} simpleChange
 * @return {?}
 */
function simpleChangeActivated(simpleChange) {
    return !!(simpleChange && (simpleChange.previousValue !== simpleChange.currentValue || simpleChange.isFirstChange()));
}
/**
 * @param {?} index
 * @param {?} mode
 * @return {?}
 */
function getInferredTimelineItemPosition(index, mode) {
    return mode === 'custom'
        ? undefined
        : mode === 'left'
            ? 'left'
            : mode === 'right'
                ? 'right'
                : mode === 'alternate' && index % 2 === 0
                    ? 'left'
                    : 'right';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90aW1lbGluZS8iLCJzb3VyY2VzIjpbInRpbWVsaW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLEtBQUssRUFJTCxTQUFTLEVBSVQsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdyRDtJQXdERSw2QkFBb0IsR0FBc0IsRUFBVSxlQUFnQztRQUFoRSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQVYzRSxXQUFNLEdBQW1CLE1BQU0sQ0FBQztRQUdoQyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBRXBDLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyxrQkFBYSxHQUE4QixFQUFFLENBQUM7UUFFdEMsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFFZ0QsQ0FBQzs7Ozs7SUFFeEYseUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ3hCLElBQUEsdUJBQU0sRUFBRSw2QkFBUyxFQUFFLDZCQUFTO1FBRXBDLElBQUkscUJBQXFCLENBQUMsTUFBTSxDQUFDLElBQUkscUJBQXFCLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDckUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUM7U0FDekQ7SUFDSCxDQUFDOzs7O0lBRUQsc0NBQVE7OztJQUFSO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7OztRQUFDO1lBQ25FLEtBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsZ0RBQWtCOzs7SUFBbEI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV0QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7OztRQUFDO1lBQ2hFLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFTyw0Q0FBYzs7OztJQUF0QjtRQUFBLGlCQVlDO1FBWEMsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFOztnQkFDekMsUUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTTtZQUV0QyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU87Ozs7O1lBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSztnQkFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxRQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDO2dCQUNuRSxJQUFJLENBQUMsUUFBUSxHQUFHLCtCQUErQixDQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN2QixDQUFDLEVBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN6RztRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Z0JBckdGLFNBQVMsU0FBQztvQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLFFBQVEsRUFBRSxhQUFhO29CQUN2QixTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUM7b0JBQzVCLFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsb2dEQWtDVDtpQkFDRjs7OztnQkE5REMsaUJBQWlCO2dCQWlCVixlQUFlOzs7OEJBK0NyQixlQUFlLFNBQUMsdUJBQXVCO3lCQUV2QyxLQUFLOzRCQUNMLEtBQUs7K0JBQ0wsS0FBSzs0QkFDTCxLQUFLOztJQXFEUiwwQkFBQztDQUFBLEFBdEdELElBc0dDO1NBM0RZLG1CQUFtQjs7O0lBQzlCLDBDQUEyRjs7SUFFM0YscUNBQXlDOztJQUN6Qyx3Q0FBMEQ7O0lBQzFELDJDQUFtRDs7SUFDbkQsd0NBQW9DOztJQUVwQywrQ0FBa0M7O0lBQ2xDLDRDQUE4Qzs7Ozs7SUFFOUMsdUNBQXVDOzs7OztJQUUzQixrQ0FBOEI7Ozs7O0lBQUUsOENBQXdDOzs7Ozs7QUFnRHRGLFNBQVMscUJBQXFCLENBQUMsWUFBMkI7SUFDeEQsT0FBTyxDQUFDLENBQUMsQ0FBQyxZQUFZLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxLQUFLLFlBQVksQ0FBQyxZQUFZLElBQUksWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4SCxDQUFDOzs7Ozs7QUFFRCxTQUFTLCtCQUErQixDQUFDLEtBQWEsRUFBRSxJQUFvQjtJQUMxRSxPQUFPLElBQUksS0FBSyxRQUFRO1FBQ3RCLENBQUMsQ0FBQyxTQUFTO1FBQ1gsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNO1lBQ2pCLENBQUMsQ0FBQyxNQUFNO1lBQ1IsQ0FBQyxDQUFDLElBQUksS0FBSyxPQUFPO2dCQUNsQixDQUFDLENBQUMsT0FBTztnQkFDVCxDQUFDLENBQUMsSUFBSSxLQUFLLFdBQVcsSUFBSSxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUM7b0JBQ3pDLENBQUMsQ0FBQyxNQUFNO29CQUNSLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFF1ZXJ5TGlzdCxcbiAgU2ltcGxlQ2hhbmdlLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE56VGltZWxpbmVJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lbGluZS1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaW1lbGluZVNlcnZpY2UgfSBmcm9tICcuL3RpbWVsaW5lLnNlcnZpY2UnO1xuaW1wb3J0IHsgTnpUaW1lbGluZU1vZGUsIE56VGltZWxpbmVQb3NpdGlvbiB9IGZyb20gJy4vdHlwaW5ncyc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHNlbGVjdG9yOiAnbnotdGltZWxpbmUnLFxuICBwcm92aWRlcnM6IFtUaW1lbGluZVNlcnZpY2VdLFxuICBleHBvcnRBczogJ256VGltZWxpbmUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDx1bFxuICAgICAgY2xhc3M9XCJhbnQtdGltZWxpbmVcIlxuICAgICAgW2NsYXNzLmFudC10aW1lbGluZS1yaWdodF09XCJuek1vZGUgPT09ICdyaWdodCdcIlxuICAgICAgW2NsYXNzLmFudC10aW1lbGluZS1hbHRlcm5hdGVdPVwibnpNb2RlID09PSAnYWx0ZXJuYXRlJyB8fCBuek1vZGUgPT09ICdjdXN0b20nXCJcbiAgICAgIFtjbGFzcy5hbnQtdGltZWxpbmUtcGVuZGluZ109XCIhIW56UGVuZGluZ1wiXG4gICAgICBbY2xhc3MuYW50LXRpbWVsaW5lLXJldmVyc2VdPVwibnpSZXZlcnNlXCJcbiAgICA+XG4gICAgICA8IS0tIHBlbmRpbmcgZG90IChyZXZlcnNlZCkgLS0+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpSZXZlcnNlXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwicGVuZGluZ1RlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8IS0tIHRpbWVsaW5lIGl0ZW1zIC0tPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiB0aW1lbGluZUl0ZW1zXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpdGVtLnRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFuelJldmVyc2VcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJwZW5kaW5nVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDwhLS0gcGVuZGluZyBkb3QgLS0+XG4gICAgPC91bD5cbiAgICA8bmctdGVtcGxhdGUgI3BlbmRpbmdUZW1wbGF0ZT5cbiAgICAgIDxsaSAqbmdJZj1cIm56UGVuZGluZ1wiIGNsYXNzPVwiYW50LXRpbWVsaW5lLWl0ZW0gYW50LXRpbWVsaW5lLWl0ZW0tcGVuZGluZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXRpbWVsaW5lLWl0ZW0tdGFpbFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXRpbWVsaW5lLWl0ZW0taGVhZCBhbnQtdGltZWxpbmUtaXRlbS1oZWFkLWN1c3RvbSBhbnQtdGltZWxpbmUtaXRlbS1oZWFkLWJsdWVcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpQZW5kaW5nRG90XCI+XG4gICAgICAgICAgICB7eyBuelBlbmRpbmdEb3QgfX08aSAqbmdJZj1cIiFuelBlbmRpbmdEb3RcIiBuei1pY29uIG56VHlwZT1cImxvYWRpbmdcIj48L2k+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXRpbWVsaW5lLWl0ZW0tY29udGVudFwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuelBlbmRpbmdcIj5cbiAgICAgICAgICAgIHt7IGlzUGVuZGluZ0Jvb2xlYW4gPyAnJyA6IG56UGVuZGluZyB9fVxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbGk+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8IS0tIEdyYXNwIGl0ZW1zIC0tPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOelRpbWVsaW5lQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIEBDb250ZW50Q2hpbGRyZW4oTnpUaW1lbGluZUl0ZW1Db21wb25lbnQpIGxpc3RPZkl0ZW1zITogUXVlcnlMaXN0PE56VGltZWxpbmVJdGVtQ29tcG9uZW50PjtcblxuICBASW5wdXQoKSBuek1vZGU6IE56VGltZWxpbmVNb2RlID0gJ2xlZnQnO1xuICBASW5wdXQoKSBuelBlbmRpbmc/OiBzdHJpbmcgfCBib29sZWFuIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56UGVuZGluZ0RvdD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuelJldmVyc2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBpc1BlbmRpbmdCb29sZWFuOiBib29sZWFuID0gZmFsc2U7XG4gIHRpbWVsaW5lSXRlbXM6IE56VGltZWxpbmVJdGVtQ29tcG9uZW50W10gPSBbXTtcblxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgdGltZWxpbmVTZXJ2aWNlOiBUaW1lbGluZVNlcnZpY2UpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpNb2RlLCBuelJldmVyc2UsIG56UGVuZGluZyB9ID0gY2hhbmdlcztcblxuICAgIGlmIChzaW1wbGVDaGFuZ2VBY3RpdmF0ZWQobnpNb2RlKSB8fCBzaW1wbGVDaGFuZ2VBY3RpdmF0ZWQobnpSZXZlcnNlKSkge1xuICAgICAgdGhpcy51cGRhdGVDaGlsZHJlbigpO1xuICAgIH1cblxuICAgIGlmIChuelBlbmRpbmcpIHtcbiAgICAgIHRoaXMuaXNQZW5kaW5nQm9vbGVhbiA9IG56UGVuZGluZy5jdXJyZW50VmFsdWUgPT09IHRydWU7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50aW1lbGluZVNlcnZpY2UuY2hlY2skLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVDaGlsZHJlbigpO1xuXG4gICAgdGhpcy5saXN0T2ZJdGVtcy5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVDaGlsZHJlbigpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDaGlsZHJlbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5saXN0T2ZJdGVtcyAmJiB0aGlzLmxpc3RPZkl0ZW1zLmxlbmd0aCkge1xuICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5saXN0T2ZJdGVtcy5sZW5ndGg7XG5cbiAgICAgIHRoaXMubGlzdE9mSXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaXRlbS5pc0xhc3QgPSAhdGhpcy5uelJldmVyc2UgPyBpbmRleCA9PT0gbGVuZ3RoIC0gMSA6IGluZGV4ID09PSAwO1xuICAgICAgICBpdGVtLnBvc2l0aW9uID0gZ2V0SW5mZXJyZWRUaW1lbGluZUl0ZW1Qb3NpdGlvbihpbmRleCwgdGhpcy5uek1vZGUpO1xuICAgICAgICBpdGVtLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy50aW1lbGluZUl0ZW1zID0gdGhpcy5uelJldmVyc2UgPyB0aGlzLmxpc3RPZkl0ZW1zLnRvQXJyYXkoKS5yZXZlcnNlKCkgOiB0aGlzLmxpc3RPZkl0ZW1zLnRvQXJyYXkoKTtcbiAgICB9XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2ltcGxlQ2hhbmdlQWN0aXZhdGVkKHNpbXBsZUNoYW5nZT86IFNpbXBsZUNoYW5nZSk6IGJvb2xlYW4ge1xuICByZXR1cm4gISEoc2ltcGxlQ2hhbmdlICYmIChzaW1wbGVDaGFuZ2UucHJldmlvdXNWYWx1ZSAhPT0gc2ltcGxlQ2hhbmdlLmN1cnJlbnRWYWx1ZSB8fCBzaW1wbGVDaGFuZ2UuaXNGaXJzdENoYW5nZSgpKSk7XG59XG5cbmZ1bmN0aW9uIGdldEluZmVycmVkVGltZWxpbmVJdGVtUG9zaXRpb24oaW5kZXg6IG51bWJlciwgbW9kZTogTnpUaW1lbGluZU1vZGUpOiBOelRpbWVsaW5lUG9zaXRpb24gfCB1bmRlZmluZWQge1xuICByZXR1cm4gbW9kZSA9PT0gJ2N1c3RvbSdcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogbW9kZSA9PT0gJ2xlZnQnXG4gICAgPyAnbGVmdCdcbiAgICA6IG1vZGUgPT09ICdyaWdodCdcbiAgICA/ICdyaWdodCdcbiAgICA6IG1vZGUgPT09ICdhbHRlcm5hdGUnICYmIGluZGV4ICUgMiA9PT0gMFxuICAgID8gJ2xlZnQnXG4gICAgOiAncmlnaHQnO1xufVxuIl19