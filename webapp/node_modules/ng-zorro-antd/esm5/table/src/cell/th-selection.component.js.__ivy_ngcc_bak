/**
 * @fileoverview added by tsickle
 * Generated from: src/cell/th-selection.component.ts
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
var NzThSelectionComponent = /** @class */ (function () {
    function NzThSelectionComponent() {
        this.nzSelections = [];
        this.nzChecked = false;
        this.nzDisabled = false;
        this.nzIndeterminate = false;
        this.nzShowCheckbox = false;
        this.nzShowRowSelection = false;
        this.nzCheckedChange = new EventEmitter();
        this.nzSortChangeWithKey = new EventEmitter();
        this.isNzShowExpandChanged = false;
        this.isNzShowCheckboxChanged = false;
    }
    /**
     * @param {?} checked
     * @return {?}
     */
    NzThSelectionComponent.prototype.onCheckedChange = /**
     * @param {?} checked
     * @return {?}
     */
    function (checked) {
        this.nzChecked = checked;
        this.nzCheckedChange.emit(checked);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzThSelectionComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var isFirstChange = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value && value.firstChange && value.currentValue !== undefined; });
        var nzChecked = changes.nzChecked, nzSelections = changes.nzSelections, nzShowExpand = changes.nzShowExpand, nzShowCheckbox = changes.nzShowCheckbox;
        if (nzShowExpand) {
            this.isNzShowExpandChanged = true;
        }
        if (nzShowCheckbox) {
            this.isNzShowCheckboxChanged = true;
        }
        if (isFirstChange(nzSelections) && !this.isNzShowExpandChanged) {
            this.nzShowRowSelection = true;
        }
        if (isFirstChange(nzChecked) && !this.isNzShowCheckboxChanged) {
            this.nzShowCheckbox = true;
        }
    };
    NzThSelectionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'th[nzSelections],th[nzChecked],th[nzShowCheckbox],th[nzShowRowSelection]',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <nz-table-selection\n      [checked]=\"nzChecked\"\n      [disabled]=\"nzDisabled\"\n      [indeterminate]=\"nzIndeterminate\"\n      [listOfSelections]=\"nzSelections\"\n      [showCheckbox]=\"nzShowCheckbox\"\n      [showRowSelection]=\"nzShowRowSelection\"\n      (checkedChange)=\"onCheckedChange($event)\"\n    ></nz-table-selection>\n    <ng-content></ng-content>\n  ",
                    host: {
                        '[class.ant-table-selection-column]': 'true'
                    }
                }] }
    ];
    NzThSelectionComponent.propDecorators = {
        nzSelections: [{ type: Input }],
        nzChecked: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzIndeterminate: [{ type: Input }],
        nzShowCheckbox: [{ type: Input }],
        nzShowRowSelection: [{ type: Input }],
        nzCheckedChange: [{ type: Output }],
        nzSortChangeWithKey: [{ type: Output }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzThSelectionComponent.prototype, "nzShowCheckbox", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzThSelectionComponent.prototype, "nzShowRowSelection", void 0);
    return NzThSelectionComponent;
}());
export { NzThSelectionComponent };
if (false) {
    /** @type {?} */
    NzThSelectionComponent.ngAcceptInputType_nzShowCheckbox;
    /** @type {?} */
    NzThSelectionComponent.ngAcceptInputType_nzShowRowSelection;
    /** @type {?} */
    NzThSelectionComponent.prototype.nzSelections;
    /** @type {?} */
    NzThSelectionComponent.prototype.nzChecked;
    /** @type {?} */
    NzThSelectionComponent.prototype.nzDisabled;
    /** @type {?} */
    NzThSelectionComponent.prototype.nzIndeterminate;
    /** @type {?} */
    NzThSelectionComponent.prototype.nzShowCheckbox;
    /** @type {?} */
    NzThSelectionComponent.prototype.nzShowRowSelection;
    /** @type {?} */
    NzThSelectionComponent.prototype.nzCheckedChange;
    /** @type {?} */
    NzThSelectionComponent.prototype.nzSortChangeWithKey;
    /**
     * @type {?}
     * @private
     */
    NzThSelectionComponent.prototype.isNzShowExpandChanged;
    /**
     * @type {?}
     * @private
     */
    NzThSelectionComponent.prototype.isNzShowCheckboxChanged;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGgtc2VsZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdGFibGUvIiwic291cmNlcyI6WyJzcmMvY2VsbC90aC1zZWxlY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBR04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RDtJQUFBO1FBeUJXLGlCQUFZLEdBQXVFLEVBQUUsQ0FBQztRQUN0RixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDUixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2Qix1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDakMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQzlDLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUF5QyxDQUFDO1FBRTNGLDBCQUFxQixHQUFHLEtBQUssQ0FBQztRQUM5Qiw0QkFBdUIsR0FBRyxLQUFLLENBQUM7SUF1QjFDLENBQUM7Ozs7O0lBckJDLGdEQUFlOzs7O0lBQWYsVUFBZ0IsT0FBZ0I7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDekIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCw0Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7O1lBQzFCLGFBQWE7Ozs7UUFBRyxVQUFDLEtBQW1CLElBQUssT0FBQSxLQUFLLElBQUksS0FBSyxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBOUQsQ0FBOEQsQ0FBQTtRQUNyRyxJQUFBLDZCQUFTLEVBQUUsbUNBQVksRUFBRSxtQ0FBWSxFQUFFLHVDQUFjO1FBQzdELElBQUksWUFBWSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7U0FDbkM7UUFDRCxJQUFJLGNBQWMsRUFBRTtZQUNsQixJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDOUQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztTQUNoQztRQUNELElBQUksYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQzdELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7Z0JBekRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEVBQTBFO29CQUNwRixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSw2WEFXVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osb0NBQW9DLEVBQUUsTUFBTTtxQkFDN0M7aUJBQ0Y7OzsrQkFLRSxLQUFLOzRCQUNMLEtBQUs7NkJBQ0wsS0FBSztrQ0FDTCxLQUFLO2lDQUNMLEtBQUs7cUNBQ0wsS0FBSztrQ0FDTCxNQUFNO3NDQUNOLE1BQU07O0lBSGtCO1FBQWYsWUFBWSxFQUFFOztrRUFBd0I7SUFDdkI7UUFBZixZQUFZLEVBQUU7O3NFQUE0QjtJQTRCdEQsNkJBQUM7Q0FBQSxBQTFERCxJQTBEQztTQXJDWSxzQkFBc0I7OztJQUNqQyx3REFBc0Q7O0lBQ3RELDREQUEwRDs7SUFFMUQsOENBQStGOztJQUMvRiwyQ0FBMkI7O0lBQzNCLDRDQUE0Qjs7SUFDNUIsaURBQWlDOztJQUNqQyxnREFBZ0Q7O0lBQ2hELG9EQUFvRDs7SUFDcEQsaURBQWlFOztJQUNqRSxxREFBbUc7Ozs7O0lBRW5HLHVEQUFzQzs7Ozs7SUFDdEMseURBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbi8qIHRzbGludDpkaXNhYmxlOmNvbXBvbmVudC1zZWxlY3RvciAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RoW256U2VsZWN0aW9uc10sdGhbbnpDaGVja2VkXSx0aFtuelNob3dDaGVja2JveF0sdGhbbnpTaG93Um93U2VsZWN0aW9uXScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bnotdGFibGUtc2VsZWN0aW9uXG4gICAgICBbY2hlY2tlZF09XCJuekNoZWNrZWRcIlxuICAgICAgW2Rpc2FibGVkXT1cIm56RGlzYWJsZWRcIlxuICAgICAgW2luZGV0ZXJtaW5hdGVdPVwibnpJbmRldGVybWluYXRlXCJcbiAgICAgIFtsaXN0T2ZTZWxlY3Rpb25zXT1cIm56U2VsZWN0aW9uc1wiXG4gICAgICBbc2hvd0NoZWNrYm94XT1cIm56U2hvd0NoZWNrYm94XCJcbiAgICAgIFtzaG93Um93U2VsZWN0aW9uXT1cIm56U2hvd1Jvd1NlbGVjdGlvblwiXG4gICAgICAoY2hlY2tlZENoYW5nZSk9XCJvbkNoZWNrZWRDaGFuZ2UoJGV2ZW50KVwiXG4gICAgPjwvbnotdGFibGUtc2VsZWN0aW9uPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXRhYmxlLXNlbGVjdGlvbi1jb2x1bW5dJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpUaFNlbGVjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNob3dDaGVja2JveDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTaG93Um93U2VsZWN0aW9uOiBCb29sZWFuSW5wdXQ7XG5cbiAgQElucHV0KCkgbnpTZWxlY3Rpb25zOiBBcnJheTx7IHRleHQ6IHN0cmluZzsgb25TZWxlY3QoLi4uYXJnczogTnpTYWZlQW55W10pOiBOelNhZmVBbnkgfT4gPSBbXTtcbiAgQElucHV0KCkgbnpDaGVja2VkID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56RGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpJbmRldGVybWluYXRlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dDaGVja2JveCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93Um93U2VsZWN0aW9uID0gZmFsc2U7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNoZWNrZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNvcnRDaGFuZ2VXaXRoS2V5ID0gbmV3IEV2ZW50RW1pdHRlcjx7IGtleTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIHwgbnVsbCB9PigpO1xuXG4gIHByaXZhdGUgaXNOelNob3dFeHBhbmRDaGFuZ2VkID0gZmFsc2U7XG4gIHByaXZhdGUgaXNOelNob3dDaGVja2JveENoYW5nZWQgPSBmYWxzZTtcblxuICBvbkNoZWNrZWRDaGFuZ2UoY2hlY2tlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpDaGVja2VkID0gY2hlY2tlZDtcbiAgICB0aGlzLm56Q2hlY2tlZENoYW5nZS5lbWl0KGNoZWNrZWQpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IGlzRmlyc3RDaGFuZ2UgPSAodmFsdWU6IFNpbXBsZUNoYW5nZSkgPT4gdmFsdWUgJiYgdmFsdWUuZmlyc3RDaGFuZ2UgJiYgdmFsdWUuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQ7XG4gICAgY29uc3QgeyBuekNoZWNrZWQsIG56U2VsZWN0aW9ucywgbnpTaG93RXhwYW5kLCBuelNob3dDaGVja2JveCB9ID0gY2hhbmdlcztcbiAgICBpZiAobnpTaG93RXhwYW5kKSB7XG4gICAgICB0aGlzLmlzTnpTaG93RXhwYW5kQ2hhbmdlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChuelNob3dDaGVja2JveCkge1xuICAgICAgdGhpcy5pc056U2hvd0NoZWNrYm94Q2hhbmdlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChpc0ZpcnN0Q2hhbmdlKG56U2VsZWN0aW9ucykgJiYgIXRoaXMuaXNOelNob3dFeHBhbmRDaGFuZ2VkKSB7XG4gICAgICB0aGlzLm56U2hvd1Jvd1NlbGVjdGlvbiA9IHRydWU7XG4gICAgfVxuICAgIGlmIChpc0ZpcnN0Q2hhbmdlKG56Q2hlY2tlZCkgJiYgIXRoaXMuaXNOelNob3dDaGVja2JveENoYW5nZWQpIHtcbiAgICAgIHRoaXMubnpTaG93Q2hlY2tib3ggPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIl19