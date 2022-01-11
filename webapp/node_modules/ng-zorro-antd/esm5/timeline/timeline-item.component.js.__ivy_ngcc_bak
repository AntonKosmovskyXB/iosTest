/**
 * @fileoverview added by tsickle
 * Generated from: timeline-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { TimelineService } from './timeline.service';
import { TimelineTimeDefaultColors } from './typings';
/**
 * @param {?=} color
 * @return {?}
 */
function isDefaultColor(color) {
    return TimelineTimeDefaultColors.findIndex((/**
     * @param {?} i
     * @return {?}
     */
    function (i) { return i === color; })) !== -1;
}
var NzTimelineItemComponent = /** @class */ (function () {
    function NzTimelineItemComponent(cdr, timelineService) {
        this.cdr = cdr;
        this.timelineService = timelineService;
        this.nzColor = 'blue';
        this.isLast = false;
        this.borderColor = null;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTimelineItemComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.timelineService.markForCheck();
        if (changes.nzColor) {
            this.updateCustomColor();
        }
    };
    /**
     * @return {?}
     */
    NzTimelineItemComponent.prototype.detectChanges = /**
     * @return {?}
     */
    function () {
        this.cdr.detectChanges();
    };
    /**
     * @private
     * @return {?}
     */
    NzTimelineItemComponent.prototype.updateCustomColor = /**
     * @private
     * @return {?}
     */
    function () {
        this.borderColor = isDefaultColor(this.nzColor) ? null : this.nzColor;
    };
    NzTimelineItemComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    selector: 'nz-timeline-item, [nz-timeline-item]',
                    exportAs: 'nzTimelineItem',
                    template: "\n    <ng-template #template>\n      <li\n        class=\"ant-timeline-item\"\n        [class.ant-timeline-item-right]=\"(nzPosition || position) === 'right'\"\n        [class.ant-timeline-item-left]=\"(nzPosition || position) === 'left'\"\n        [class.ant-timeline-item-last]=\"isLast\"\n      >\n        <div class=\"ant-timeline-item-tail\"></div>\n        <div\n          class=\"ant-timeline-item-head\"\n          [class.ant-timeline-item-head-red]=\"nzColor === 'red'\"\n          [class.ant-timeline-item-head-blue]=\"nzColor === 'blue'\"\n          [class.ant-timeline-item-head-green]=\"nzColor === 'green'\"\n          [class.ant-timeline-item-head-gray]=\"nzColor === 'gray'\"\n          [class.ant-timeline-item-head-custom]=\"!!nzDot\"\n          [style.border-color]=\"borderColor\"\n        >\n          <ng-container *nzStringTemplateOutlet=\"nzDot\">{{ nzDot }}</ng-container>\n        </div>\n        <div class=\"ant-timeline-item-content\">\n          <ng-content></ng-content>\n        </div>\n      </li>\n    </ng-template>\n  "
                }] }
    ];
    /** @nocollapse */
    NzTimelineItemComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: TimelineService }
    ]; };
    NzTimelineItemComponent.propDecorators = {
        template: [{ type: ViewChild, args: ['template', { static: false },] }],
        nzPosition: [{ type: Input }],
        nzColor: [{ type: Input }],
        nzDot: [{ type: Input }]
    };
    return NzTimelineItemComponent;
}());
export { NzTimelineItemComponent };
if (false) {
    /** @type {?} */
    NzTimelineItemComponent.prototype.template;
    /** @type {?} */
    NzTimelineItemComponent.prototype.nzPosition;
    /** @type {?} */
    NzTimelineItemComponent.prototype.nzColor;
    /** @type {?} */
    NzTimelineItemComponent.prototype.nzDot;
    /** @type {?} */
    NzTimelineItemComponent.prototype.isLast;
    /** @type {?} */
    NzTimelineItemComponent.prototype.borderColor;
    /** @type {?} */
    NzTimelineItemComponent.prototype.position;
    /**
     * @type {?}
     * @private
     */
    NzTimelineItemComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTimelineItemComponent.prototype.timelineService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RpbWVsaW5lLyIsInNvdXJjZXMiOlsidGltZWxpbmUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULEtBQUssRUFHTCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUEyQyx5QkFBeUIsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7Ozs7QUFFL0YsU0FBUyxjQUFjLENBQUMsS0FBYztJQUNwQyxPQUFPLHlCQUF5QixDQUFDLFNBQVM7Ozs7SUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxLQUFLLEVBQVgsQ0FBVyxFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDdEUsQ0FBQztBQUVEO0lBNENFLGlDQUFvQixHQUFzQixFQUFVLGVBQWdDO1FBQWhFLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBUDNFLFlBQU8sR0FBd0IsTUFBTSxDQUFDO1FBRy9DLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixnQkFBVyxHQUFrQixJQUFJLENBQUM7SUFHcUQsQ0FBQzs7Ozs7SUFFeEYsNkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ25CLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7OztJQUVELCtDQUFhOzs7SUFBYjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFTyxtREFBaUI7Ozs7SUFBekI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4RSxDQUFDOztnQkEzREYsU0FBUyxTQUFDO29CQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsUUFBUSxFQUFFLHNDQUFzQztvQkFDaEQsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLGdpQ0F5QlQ7aUJBQ0Y7Ozs7Z0JBakRDLGlCQUFpQjtnQkFVVixlQUFlOzs7MkJBeUNyQixTQUFTLFNBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs2QkFFdkMsS0FBSzswQkFDTCxLQUFLO3dCQUNMLEtBQUs7O0lBc0JSLDhCQUFDO0NBQUEsQUE1REQsSUE0REM7U0EzQlksdUJBQXVCOzs7SUFDbEMsMkNBQXVFOztJQUV2RSw2Q0FBeUM7O0lBQ3pDLDBDQUErQzs7SUFDL0Msd0NBQTRDOztJQUU1Qyx5Q0FBZTs7SUFDZiw4Q0FBa0M7O0lBQ2xDLDJDQUE4Qjs7Ozs7SUFFbEIsc0NBQThCOzs7OztJQUFFLGtEQUF3QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGltZWxpbmVTZXJ2aWNlIH0gZnJvbSAnLi90aW1lbGluZS5zZXJ2aWNlJztcbmltcG9ydCB7IE56VGltZWxpbmVJdGVtQ29sb3IsIE56VGltZWxpbmVQb3NpdGlvbiwgVGltZWxpbmVUaW1lRGVmYXVsdENvbG9ycyB9IGZyb20gJy4vdHlwaW5ncyc7XG5cbmZ1bmN0aW9uIGlzRGVmYXVsdENvbG9yKGNvbG9yPzogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBUaW1lbGluZVRpbWVEZWZhdWx0Q29sb3JzLmZpbmRJbmRleChpID0+IGkgPT09IGNvbG9yKSAhPT0gLTE7XG59XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHNlbGVjdG9yOiAnbnotdGltZWxpbmUtaXRlbSwgW256LXRpbWVsaW5lLWl0ZW1dJyxcbiAgZXhwb3J0QXM6ICduelRpbWVsaW5lSXRlbScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICN0ZW1wbGF0ZT5cbiAgICAgIDxsaVxuICAgICAgICBjbGFzcz1cImFudC10aW1lbGluZS1pdGVtXCJcbiAgICAgICAgW2NsYXNzLmFudC10aW1lbGluZS1pdGVtLXJpZ2h0XT1cIihuelBvc2l0aW9uIHx8IHBvc2l0aW9uKSA9PT0gJ3JpZ2h0J1wiXG4gICAgICAgIFtjbGFzcy5hbnQtdGltZWxpbmUtaXRlbS1sZWZ0XT1cIihuelBvc2l0aW9uIHx8IHBvc2l0aW9uKSA9PT0gJ2xlZnQnXCJcbiAgICAgICAgW2NsYXNzLmFudC10aW1lbGluZS1pdGVtLWxhc3RdPVwiaXNMYXN0XCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC10aW1lbGluZS1pdGVtLXRhaWxcIj48L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwiYW50LXRpbWVsaW5lLWl0ZW0taGVhZFwiXG4gICAgICAgICAgW2NsYXNzLmFudC10aW1lbGluZS1pdGVtLWhlYWQtcmVkXT1cIm56Q29sb3IgPT09ICdyZWQnXCJcbiAgICAgICAgICBbY2xhc3MuYW50LXRpbWVsaW5lLWl0ZW0taGVhZC1ibHVlXT1cIm56Q29sb3IgPT09ICdibHVlJ1wiXG4gICAgICAgICAgW2NsYXNzLmFudC10aW1lbGluZS1pdGVtLWhlYWQtZ3JlZW5dPVwibnpDb2xvciA9PT0gJ2dyZWVuJ1wiXG4gICAgICAgICAgW2NsYXNzLmFudC10aW1lbGluZS1pdGVtLWhlYWQtZ3JheV09XCJuekNvbG9yID09PSAnZ3JheSdcIlxuICAgICAgICAgIFtjbGFzcy5hbnQtdGltZWxpbmUtaXRlbS1oZWFkLWN1c3RvbV09XCIhIW56RG90XCJcbiAgICAgICAgICBbc3R5bGUuYm9yZGVyLWNvbG9yXT1cImJvcmRlckNvbG9yXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuekRvdFwiPnt7IG56RG90IH19PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXRpbWVsaW5lLWl0ZW0tY29udGVudFwiPlxuICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2xpPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTnpUaW1lbGluZUl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBAVmlld0NoaWxkKCd0ZW1wbGF0ZScsIHsgc3RhdGljOiBmYWxzZSB9KSB0ZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpIG56UG9zaXRpb24/OiBOelRpbWVsaW5lUG9zaXRpb247XG4gIEBJbnB1dCgpIG56Q29sb3I6IE56VGltZWxpbmVJdGVtQ29sb3IgPSAnYmx1ZSc7XG4gIEBJbnB1dCgpIG56RG90Pzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgaXNMYXN0ID0gZmFsc2U7XG4gIGJvcmRlckNvbG9yOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgcG9zaXRpb24/OiBOelRpbWVsaW5lUG9zaXRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHRpbWVsaW5lU2VydmljZTogVGltZWxpbmVTZXJ2aWNlKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnRpbWVsaW5lU2VydmljZS5tYXJrRm9yQ2hlY2soKTtcbiAgICBpZiAoY2hhbmdlcy5uekNvbG9yKSB7XG4gICAgICB0aGlzLnVwZGF0ZUN1c3RvbUNvbG9yKCk7XG4gICAgfVxuICB9XG5cbiAgZGV0ZWN0Q2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUN1c3RvbUNvbG9yKCk6IHZvaWQge1xuICAgIHRoaXMuYm9yZGVyQ29sb3IgPSBpc0RlZmF1bHRDb2xvcih0aGlzLm56Q29sb3IpID8gbnVsbCA6IHRoaXMubnpDb2xvcjtcbiAgfVxufVxuIl19