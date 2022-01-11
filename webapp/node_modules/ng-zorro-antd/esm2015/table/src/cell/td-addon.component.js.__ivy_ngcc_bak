/**
 * @fileoverview added by tsickle
 * Generated from: src/cell/td-addon.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/* tslint:disable:component-selector */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
export class NzTdAddOnComponent {
    constructor() {
        this.nzChecked = false;
        this.nzDisabled = false;
        this.nzIndeterminate = false;
        this.nzIndentSize = 0;
        this.nzShowExpand = false;
        this.nzShowCheckbox = false;
        this.nzExpand = false;
        this.nzCheckedChange = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
        this.isNzShowExpandChanged = false;
        this.isNzShowCheckboxChanged = false;
    }
    /**
     * @param {?} checked
     * @return {?}
     */
    onCheckedChange(checked) {
        this.nzChecked = checked;
        this.nzCheckedChange.emit(checked);
    }
    /**
     * @param {?} expand
     * @return {?}
     */
    onExpandChange(expand) {
        this.nzExpand = expand;
        this.nzExpandChange.emit(expand);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const isFirstChange = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => value && value.firstChange && value.currentValue !== undefined);
        const { nzExpand, nzChecked, nzShowExpand, nzShowCheckbox } = changes;
        if (nzShowExpand) {
            this.isNzShowExpandChanged = true;
        }
        if (nzShowCheckbox) {
            this.isNzShowCheckboxChanged = true;
        }
        if (isFirstChange(nzExpand) && !this.isNzShowExpandChanged) {
            this.nzShowExpand = true;
        }
        if (isFirstChange(nzChecked) && !this.isNzShowCheckboxChanged) {
            this.nzShowCheckbox = true;
        }
    }
}
NzTdAddOnComponent.decorators = [
    { type: Component, args: [{
                selector: 'td[nzChecked], td[nzDisabled], td[nzIndeterminate], td[nzIndentSize], td[nzExpand], td[nzShowExpand], td[nzShowCheckbox]',
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                template: `
    <ng-container *ngIf="nzShowExpand || nzIndentSize > 0">
      <nz-row-indent [indentSize]="nzIndentSize"></nz-row-indent>
      <button nz-row-expand-button [expand]="nzExpand" (expandChange)="onExpandChange($event)" [spaceMode]="!nzShowExpand"></button>
    </ng-container>
    <label
      nz-checkbox
      *ngIf="nzShowCheckbox"
      [nzDisabled]="nzDisabled"
      [ngModel]="nzChecked"
      [nzIndeterminate]="nzIndeterminate"
      (ngModelChange)="onCheckedChange($event)"
    >
    </label>
    <ng-content></ng-content>
  `,
                host: {
                    '[class.ant-table-cell-with-append]': `nzShowExpand || nzIndentSize > 0`,
                    '[class.ant-table-selection-column]': `nzShowCheckbox`
                }
            }] }
];
NzTdAddOnComponent.propDecorators = {
    nzChecked: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzIndeterminate: [{ type: Input }],
    nzIndentSize: [{ type: Input }],
    nzShowExpand: [{ type: Input }],
    nzShowCheckbox: [{ type: Input }],
    nzExpand: [{ type: Input }],
    nzCheckedChange: [{ type: Output }],
    nzExpandChange: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTdAddOnComponent.prototype, "nzShowExpand", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTdAddOnComponent.prototype, "nzShowCheckbox", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTdAddOnComponent.prototype, "nzExpand", void 0);
if (false) {
    /** @type {?} */
    NzTdAddOnComponent.ngAcceptInputType_nzShowExpand;
    /** @type {?} */
    NzTdAddOnComponent.ngAcceptInputType_nzShowCheckbox;
    /** @type {?} */
    NzTdAddOnComponent.ngAcceptInputType_nzExpand;
    /** @type {?} */
    NzTdAddOnComponent.prototype.nzChecked;
    /** @type {?} */
    NzTdAddOnComponent.prototype.nzDisabled;
    /** @type {?} */
    NzTdAddOnComponent.prototype.nzIndeterminate;
    /** @type {?} */
    NzTdAddOnComponent.prototype.nzIndentSize;
    /** @type {?} */
    NzTdAddOnComponent.prototype.nzShowExpand;
    /** @type {?} */
    NzTdAddOnComponent.prototype.nzShowCheckbox;
    /** @type {?} */
    NzTdAddOnComponent.prototype.nzExpand;
    /** @type {?} */
    NzTdAddOnComponent.prototype.nzCheckedChange;
    /** @type {?} */
    NzTdAddOnComponent.prototype.nzExpandChange;
    /**
     * @type {?}
     * @private
     */
    NzTdAddOnComponent.prototype.isNzShowExpandChanged;
    /**
     * @type {?}
     * @private
     */
    NzTdAddOnComponent.prototype.isNzShowCheckboxChanged;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGQtYWRkb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbInNyYy9jZWxsL3RkLWFkZG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQU1BLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUE0QnZELE1BQU0sT0FBTyxrQkFBa0I7SUExQi9CO1FBK0JXLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNELGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdkIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQzlDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN4RCwwQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDOUIsNEJBQXVCLEdBQUcsS0FBSyxDQUFDO0lBMkIxQyxDQUFDOzs7OztJQXpCQyxlQUFlLENBQUMsT0FBZ0I7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDekIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsTUFBZTtRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUNELFdBQVcsQ0FBQyxPQUFzQjs7Y0FDMUIsYUFBYTs7OztRQUFHLENBQUMsS0FBbUIsRUFBRSxFQUFFLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFDLFlBQVksS0FBSyxTQUFTLENBQUE7Y0FDdkcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsR0FBRyxPQUFPO1FBQ3JFLElBQUksWUFBWSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7U0FDbkM7UUFDRCxJQUFJLGNBQWMsRUFBRTtZQUNsQixJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDMUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDMUI7UUFDRCxJQUFJLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUM3RCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztTQUM1QjtJQUNILENBQUM7OztZQW5FRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBIQUEwSDtnQkFDcEksZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztHQWVUO2dCQUNELElBQUksRUFBRTtvQkFDSixvQ0FBb0MsRUFBRSxrQ0FBa0M7b0JBQ3hFLG9DQUFvQyxFQUFFLGdCQUFnQjtpQkFDdkQ7YUFDRjs7O3dCQU1FLEtBQUs7eUJBQ0wsS0FBSzs4QkFDTCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLO3VCQUNMLEtBQUs7OEJBQ0wsTUFBTTs2QkFDTixNQUFNOztBQUprQjtJQUFmLFlBQVksRUFBRTs7d0RBQXNCO0FBQ3JCO0lBQWYsWUFBWSxFQUFFOzswREFBd0I7QUFDdkI7SUFBZixZQUFZLEVBQUU7O29EQUFrQjs7O0lBVjFDLGtEQUFvRDs7SUFDcEQsb0RBQXNEOztJQUN0RCw4Q0FBZ0Q7O0lBRWhELHVDQUEyQjs7SUFDM0Isd0NBQTRCOztJQUM1Qiw2Q0FBaUM7O0lBQ2pDLDBDQUEwQjs7SUFDMUIsMENBQThDOztJQUM5Qyw0Q0FBZ0Q7O0lBQ2hELHNDQUEwQzs7SUFDMUMsNkNBQWlFOztJQUNqRSw0Q0FBZ0U7Ozs7O0lBQ2hFLG1EQUFzQzs7Ozs7SUFDdEMscURBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbi8qIHRzbGludDpkaXNhYmxlOmNvbXBvbmVudC1zZWxlY3RvciAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkW256Q2hlY2tlZF0sIHRkW256RGlzYWJsZWRdLCB0ZFtuekluZGV0ZXJtaW5hdGVdLCB0ZFtuekluZGVudFNpemVdLCB0ZFtuekV4cGFuZF0sIHRkW256U2hvd0V4cGFuZF0sIHRkW256U2hvd0NoZWNrYm94XScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpTaG93RXhwYW5kIHx8IG56SW5kZW50U2l6ZSA+IDBcIj5cbiAgICAgIDxuei1yb3ctaW5kZW50IFtpbmRlbnRTaXplXT1cIm56SW5kZW50U2l6ZVwiPjwvbnotcm93LWluZGVudD5cbiAgICAgIDxidXR0b24gbnotcm93LWV4cGFuZC1idXR0b24gW2V4cGFuZF09XCJuekV4cGFuZFwiIChleHBhbmRDaGFuZ2UpPVwib25FeHBhbmRDaGFuZ2UoJGV2ZW50KVwiIFtzcGFjZU1vZGVdPVwiIW56U2hvd0V4cGFuZFwiPjwvYnV0dG9uPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxsYWJlbFxuICAgICAgbnotY2hlY2tib3hcbiAgICAgICpuZ0lmPVwibnpTaG93Q2hlY2tib3hcIlxuICAgICAgW256RGlzYWJsZWRdPVwibnpEaXNhYmxlZFwiXG4gICAgICBbbmdNb2RlbF09XCJuekNoZWNrZWRcIlxuICAgICAgW256SW5kZXRlcm1pbmF0ZV09XCJuekluZGV0ZXJtaW5hdGVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25DaGVja2VkQ2hhbmdlKCRldmVudClcIlxuICAgID5cbiAgICA8L2xhYmVsPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXRhYmxlLWNlbGwtd2l0aC1hcHBlbmRdJzogYG56U2hvd0V4cGFuZCB8fCBuekluZGVudFNpemUgPiAwYCxcbiAgICAnW2NsYXNzLmFudC10YWJsZS1zZWxlY3Rpb24tY29sdW1uXSc6IGBuelNob3dDaGVja2JveGBcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelRkQWRkT25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTaG93RXhwYW5kOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNob3dDaGVja2JveDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpFeHBhbmQ6IEJvb2xlYW5JbnB1dDtcblxuICBASW5wdXQoKSBuekNoZWNrZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBuekluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpJbmRlbnRTaXplID0gMDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0V4cGFuZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93Q2hlY2tib3ggPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RXhwYW5kID0gZmFsc2U7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNoZWNrZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekV4cGFuZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgcHJpdmF0ZSBpc056U2hvd0V4cGFuZENoYW5nZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBpc056U2hvd0NoZWNrYm94Q2hhbmdlZCA9IGZhbHNlO1xuXG4gIG9uQ2hlY2tlZENoYW5nZShjaGVja2VkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uekNoZWNrZWQgPSBjaGVja2VkO1xuICAgIHRoaXMubnpDaGVja2VkQ2hhbmdlLmVtaXQoY2hlY2tlZCk7XG4gIH1cblxuICBvbkV4cGFuZENoYW5nZShleHBhbmQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm56RXhwYW5kID0gZXhwYW5kO1xuICAgIHRoaXMubnpFeHBhbmRDaGFuZ2UuZW1pdChleHBhbmQpO1xuICB9XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCBpc0ZpcnN0Q2hhbmdlID0gKHZhbHVlOiBTaW1wbGVDaGFuZ2UpID0+IHZhbHVlICYmIHZhbHVlLmZpcnN0Q2hhbmdlICYmIHZhbHVlLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IHsgbnpFeHBhbmQsIG56Q2hlY2tlZCwgbnpTaG93RXhwYW5kLCBuelNob3dDaGVja2JveCB9ID0gY2hhbmdlcztcbiAgICBpZiAobnpTaG93RXhwYW5kKSB7XG4gICAgICB0aGlzLmlzTnpTaG93RXhwYW5kQ2hhbmdlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChuelNob3dDaGVja2JveCkge1xuICAgICAgdGhpcy5pc056U2hvd0NoZWNrYm94Q2hhbmdlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChpc0ZpcnN0Q2hhbmdlKG56RXhwYW5kKSAmJiAhdGhpcy5pc056U2hvd0V4cGFuZENoYW5nZWQpIHtcbiAgICAgIHRoaXMubnpTaG93RXhwYW5kID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGlzRmlyc3RDaGFuZ2UobnpDaGVja2VkKSAmJiAhdGhpcy5pc056U2hvd0NoZWNrYm94Q2hhbmdlZCkge1xuICAgICAgdGhpcy5uelNob3dDaGVja2JveCA9IHRydWU7XG4gICAgfVxuICB9XG59XG4iXX0=