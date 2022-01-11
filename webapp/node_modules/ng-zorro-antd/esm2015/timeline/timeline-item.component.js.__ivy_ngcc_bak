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
    i => i === color)) !== -1;
}
export class NzTimelineItemComponent {
    /**
     * @param {?} cdr
     * @param {?} timelineService
     */
    constructor(cdr, timelineService) {
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
    ngOnChanges(changes) {
        this.timelineService.markForCheck();
        if (changes.nzColor) {
            this.updateCustomColor();
        }
    }
    /**
     * @return {?}
     */
    detectChanges() {
        this.cdr.detectChanges();
    }
    /**
     * @private
     * @return {?}
     */
    updateCustomColor() {
        this.borderColor = isDefaultColor(this.nzColor) ? null : this.nzColor;
    }
}
NzTimelineItemComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'nz-timeline-item, [nz-timeline-item]',
                exportAs: 'nzTimelineItem',
                template: `
    <ng-template #template>
      <li
        class="ant-timeline-item"
        [class.ant-timeline-item-right]="(nzPosition || position) === 'right'"
        [class.ant-timeline-item-left]="(nzPosition || position) === 'left'"
        [class.ant-timeline-item-last]="isLast"
      >
        <div class="ant-timeline-item-tail"></div>
        <div
          class="ant-timeline-item-head"
          [class.ant-timeline-item-head-red]="nzColor === 'red'"
          [class.ant-timeline-item-head-blue]="nzColor === 'blue'"
          [class.ant-timeline-item-head-green]="nzColor === 'green'"
          [class.ant-timeline-item-head-gray]="nzColor === 'gray'"
          [class.ant-timeline-item-head-custom]="!!nzDot"
          [style.border-color]="borderColor"
        >
          <ng-container *nzStringTemplateOutlet="nzDot">{{ nzDot }}</ng-container>
        </div>
        <div class="ant-timeline-item-content">
          <ng-content></ng-content>
        </div>
      </li>
    </ng-template>
  `
            }] }
];
/** @nocollapse */
NzTimelineItemComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: TimelineService }
];
NzTimelineItemComponent.propDecorators = {
    template: [{ type: ViewChild, args: ['template', { static: false },] }],
    nzPosition: [{ type: Input }],
    nzColor: [{ type: Input }],
    nzDot: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RpbWVsaW5lLyIsInNvdXJjZXMiOlsidGltZWxpbmUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULEtBQUssRUFHTCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUEyQyx5QkFBeUIsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7Ozs7QUFFL0YsU0FBUyxjQUFjLENBQUMsS0FBYztJQUNwQyxPQUFPLHlCQUF5QixDQUFDLFNBQVM7Ozs7SUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN0RSxDQUFDO0FBbUNELE1BQU0sT0FBTyx1QkFBdUI7Ozs7O0lBV2xDLFlBQW9CLEdBQXNCLEVBQVUsZUFBZ0M7UUFBaEUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFQM0UsWUFBTyxHQUF3QixNQUFNLENBQUM7UUFHL0MsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGdCQUFXLEdBQWtCLElBQUksQ0FBQztJQUdxRCxDQUFDOzs7OztJQUV4RixXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs7O0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFTyxpQkFBaUI7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEUsQ0FBQzs7O1lBM0RGLFNBQVMsU0FBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFFBQVEsRUFBRSxzQ0FBc0M7Z0JBQ2hELFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCVDthQUNGOzs7O1lBakRDLGlCQUFpQjtZQVVWLGVBQWU7Ozt1QkF5Q3JCLFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3lCQUV2QyxLQUFLO3NCQUNMLEtBQUs7b0JBQ0wsS0FBSzs7OztJQUpOLDJDQUF1RTs7SUFFdkUsNkNBQXlDOztJQUN6QywwQ0FBK0M7O0lBQy9DLHdDQUE0Qzs7SUFFNUMseUNBQWU7O0lBQ2YsOENBQWtDOztJQUNsQywyQ0FBOEI7Ozs7O0lBRWxCLHNDQUE4Qjs7Ozs7SUFBRSxrREFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRpbWVsaW5lU2VydmljZSB9IGZyb20gJy4vdGltZWxpbmUuc2VydmljZSc7XG5pbXBvcnQgeyBOelRpbWVsaW5lSXRlbUNvbG9yLCBOelRpbWVsaW5lUG9zaXRpb24sIFRpbWVsaW5lVGltZURlZmF1bHRDb2xvcnMgfSBmcm9tICcuL3R5cGluZ3MnO1xuXG5mdW5jdGlvbiBpc0RlZmF1bHRDb2xvcihjb2xvcj86IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVGltZWxpbmVUaW1lRGVmYXVsdENvbG9ycy5maW5kSW5kZXgoaSA9PiBpID09PSBjb2xvcikgIT09IC0xO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBzZWxlY3RvcjogJ256LXRpbWVsaW5lLWl0ZW0sIFtuei10aW1lbGluZS1pdGVtXScsXG4gIGV4cG9ydEFzOiAnbnpUaW1lbGluZUl0ZW0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjdGVtcGxhdGU+XG4gICAgICA8bGlcbiAgICAgICAgY2xhc3M9XCJhbnQtdGltZWxpbmUtaXRlbVwiXG4gICAgICAgIFtjbGFzcy5hbnQtdGltZWxpbmUtaXRlbS1yaWdodF09XCIobnpQb3NpdGlvbiB8fCBwb3NpdGlvbikgPT09ICdyaWdodCdcIlxuICAgICAgICBbY2xhc3MuYW50LXRpbWVsaW5lLWl0ZW0tbGVmdF09XCIobnpQb3NpdGlvbiB8fCBwb3NpdGlvbikgPT09ICdsZWZ0J1wiXG4gICAgICAgIFtjbGFzcy5hbnQtdGltZWxpbmUtaXRlbS1sYXN0XT1cImlzTGFzdFwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtdGltZWxpbmUtaXRlbS10YWlsXCI+PC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImFudC10aW1lbGluZS1pdGVtLWhlYWRcIlxuICAgICAgICAgIFtjbGFzcy5hbnQtdGltZWxpbmUtaXRlbS1oZWFkLXJlZF09XCJuekNvbG9yID09PSAncmVkJ1wiXG4gICAgICAgICAgW2NsYXNzLmFudC10aW1lbGluZS1pdGVtLWhlYWQtYmx1ZV09XCJuekNvbG9yID09PSAnYmx1ZSdcIlxuICAgICAgICAgIFtjbGFzcy5hbnQtdGltZWxpbmUtaXRlbS1oZWFkLWdyZWVuXT1cIm56Q29sb3IgPT09ICdncmVlbidcIlxuICAgICAgICAgIFtjbGFzcy5hbnQtdGltZWxpbmUtaXRlbS1oZWFkLWdyYXldPVwibnpDb2xvciA9PT0gJ2dyYXknXCJcbiAgICAgICAgICBbY2xhc3MuYW50LXRpbWVsaW5lLWl0ZW0taGVhZC1jdXN0b21dPVwiISFuekRvdFwiXG4gICAgICAgICAgW3N0eWxlLmJvcmRlci1jb2xvcl09XCJib3JkZXJDb2xvclwiXG4gICAgICAgID5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpEb3RcIj57eyBuekRvdCB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC10aW1lbGluZS1pdGVtLWNvbnRlbnRcIj5cbiAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9saT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE56VGltZWxpbmVJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgndGVtcGxhdGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgdGVtcGxhdGUhOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKSBuelBvc2l0aW9uPzogTnpUaW1lbGluZVBvc2l0aW9uO1xuICBASW5wdXQoKSBuekNvbG9yOiBOelRpbWVsaW5lSXRlbUNvbG9yID0gJ2JsdWUnO1xuICBASW5wdXQoKSBuekRvdD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIGlzTGFzdCA9IGZhbHNlO1xuICBib3JkZXJDb2xvcjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIHBvc2l0aW9uPzogTnpUaW1lbGluZVBvc2l0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSB0aW1lbGluZVNlcnZpY2U6IFRpbWVsaW5lU2VydmljZSkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy50aW1lbGluZVNlcnZpY2UubWFya0ZvckNoZWNrKCk7XG4gICAgaWYgKGNoYW5nZXMubnpDb2xvcikge1xuICAgICAgdGhpcy51cGRhdGVDdXN0b21Db2xvcigpO1xuICAgIH1cbiAgfVxuXG4gIGRldGVjdENoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDdXN0b21Db2xvcigpOiB2b2lkIHtcbiAgICB0aGlzLmJvcmRlckNvbG9yID0gaXNEZWZhdWx0Q29sb3IodGhpcy5uekNvbG9yKSA/IG51bGwgOiB0aGlzLm56Q29sb3I7XG4gIH1cbn1cbiJdfQ==