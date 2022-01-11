/**
 * @fileoverview added by tsickle
 * Generated from: step.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
var NzSliderStepComponent = /** @class */ (function () {
    function NzSliderStepComponent() {
        this.lowerBound = null;
        this.upperBound = null;
        this.marksArray = [];
        this.vertical = false;
        this.included = false;
        this.steps = [];
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSliderStepComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.marksArray) {
            this.buildSteps();
        }
        if (changes.marksArray || changes.lowerBound || changes.upperBound) {
            this.togglePointActive();
        }
    };
    /**
     * @param {?} _index
     * @param {?} step
     * @return {?}
     */
    NzSliderStepComponent.prototype.trackById = /**
     * @param {?} _index
     * @param {?} step
     * @return {?}
     */
    function (_index, step) {
        return step.value;
    };
    /**
     * @private
     * @return {?}
     */
    NzSliderStepComponent.prototype.buildSteps = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var orient = this.vertical ? 'bottom' : 'left';
        this.steps = this.marksArray.map((/**
         * @param {?} mark
         * @return {?}
         */
        function (mark) {
            var _a;
            var value = mark.value, offset = mark.offset, config = mark.config;
            return {
                value: value,
                offset: offset,
                config: config,
                active: false,
                style: (_a = {},
                    _a[orient] = offset + "%",
                    _a)
            };
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzSliderStepComponent.prototype.togglePointActive = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.steps && this.lowerBound !== null && this.upperBound !== null) {
            this.steps.forEach((/**
             * @param {?} step
             * @return {?}
             */
            function (step) {
                /** @type {?} */
                var value = step.value;
                /** @type {?} */
                var isActive = (!_this.included && value === _this.upperBound) || (_this.included && value <= (/** @type {?} */ (_this.upperBound)) && value >= (/** @type {?} */ (_this.lowerBound)));
                step.active = isActive;
            }));
        }
    };
    NzSliderStepComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-slider-step',
                    exportAs: 'nzSliderStep',
                    preserveWhitespaces: false,
                    template: "\n    <div class=\"ant-slider-step\">\n      <span\n        class=\"ant-slider-dot\"\n        *ngFor=\"let mark of steps; trackBy: trackById\"\n        [class.ant-slider-dot-active]=\"mark.active\"\n        [ngStyle]=\"mark.style!\"\n      >\n      </span>\n    </div>\n  "
                }] }
    ];
    NzSliderStepComponent.propDecorators = {
        lowerBound: [{ type: Input }],
        upperBound: [{ type: Input }],
        marksArray: [{ type: Input }],
        vertical: [{ type: Input }],
        included: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSliderStepComponent.prototype, "vertical", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSliderStepComponent.prototype, "included", void 0);
    return NzSliderStepComponent;
}());
export { NzSliderStepComponent };
if (false) {
    /** @type {?} */
    NzSliderStepComponent.ngAcceptInputType_vertical;
    /** @type {?} */
    NzSliderStepComponent.ngAcceptInputType_included;
    /** @type {?} */
    NzSliderStepComponent.prototype.lowerBound;
    /** @type {?} */
    NzSliderStepComponent.prototype.upperBound;
    /** @type {?} */
    NzSliderStepComponent.prototype.marksArray;
    /** @type {?} */
    NzSliderStepComponent.prototype.vertical;
    /** @type {?} */
    NzSliderStepComponent.prototype.included;
    /** @type {?} */
    NzSliderStepComponent.prototype.steps;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3NsaWRlci8iLCJzb3VyY2VzIjpbInN0ZXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdkgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBSXZEO0lBQUE7UUFzQlcsZUFBVSxHQUFrQixJQUFJLENBQUM7UUFDakMsZUFBVSxHQUFrQixJQUFJLENBQUM7UUFDakMsZUFBVSxHQUFxQixFQUFFLENBQUM7UUFDbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRTFDLFVBQUssR0FBc0IsRUFBRSxDQUFDO0lBMkNoQyxDQUFDOzs7OztJQXpDQywyQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjtRQUNELElBQUksT0FBTyxDQUFDLFVBQVUsSUFBSSxPQUFPLENBQUMsVUFBVSxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDbEUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs7Ozs7SUFFRCx5Q0FBUzs7Ozs7SUFBVCxVQUFVLE1BQWMsRUFBRSxJQUFxQjtRQUM3QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFTywwQ0FBVTs7OztJQUFsQjs7WUFDUSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBRWhELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxJQUFJOztZQUMzQixJQUFBLGtCQUFLLEVBQUUsb0JBQU0sRUFBRSxvQkFBTTtZQUU3QixPQUFPO2dCQUNMLEtBQUssT0FBQTtnQkFDTCxNQUFNLFFBQUE7Z0JBQ04sTUFBTSxRQUFBO2dCQUNOLE1BQU0sRUFBRSxLQUFLO2dCQUNiLEtBQUs7b0JBQ0gsR0FBQyxNQUFNLElBQU0sTUFBTSxNQUFHO3VCQUN2QjthQUNGLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8saURBQWlCOzs7O0lBQXpCO1FBQUEsaUJBU0M7UUFSQyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUU7WUFDdEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxJQUFJOztvQkFDZixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUs7O29CQUNsQixRQUFRLEdBQ1osQ0FBQyxDQUFDLEtBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxLQUFLLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxJQUFJLG1CQUFBLEtBQUksQ0FBQyxVQUFVLEVBQUMsSUFBSSxLQUFLLElBQUksbUJBQUEsS0FBSSxDQUFDLFVBQVUsRUFBQyxDQUFDO2dCQUM1SCxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztZQUN6QixDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Z0JBdEVGLFNBQVMsU0FBQztvQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxjQUFjO29CQUN4QixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixRQUFRLEVBQUUsa1JBVVQ7aUJBQ0Y7Ozs2QkFLRSxLQUFLOzZCQUNMLEtBQUs7NkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7O0lBRG1CO1FBQWYsWUFBWSxFQUFFOzsyREFBa0I7SUFDakI7UUFBZixZQUFZLEVBQUU7OzJEQUFrQjtJQTZDNUMsNEJBQUM7Q0FBQSxBQXZFRCxJQXVFQztTQXJEWSxxQkFBcUI7OztJQUNoQyxpREFBZ0Q7O0lBQ2hELGlEQUFnRDs7SUFFaEQsMkNBQTBDOztJQUMxQywyQ0FBMEM7O0lBQzFDLDJDQUEyQzs7SUFDM0MseUNBQTBDOztJQUMxQyx5Q0FBMEM7O0lBRTFDLHNDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5cbmltcG9ydCB7IE56RGlzcGxheWVkU3RlcCwgTnpFeHRlbmRlZE1hcmsgfSBmcm9tICcuL3R5cGluZ3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotc2xpZGVyLXN0ZXAnLFxuICBleHBvcnRBczogJ256U2xpZGVyU3RlcCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJhbnQtc2xpZGVyLXN0ZXBcIj5cbiAgICAgIDxzcGFuXG4gICAgICAgIGNsYXNzPVwiYW50LXNsaWRlci1kb3RcIlxuICAgICAgICAqbmdGb3I9XCJsZXQgbWFyayBvZiBzdGVwczsgdHJhY2tCeTogdHJhY2tCeUlkXCJcbiAgICAgICAgW2NsYXNzLmFudC1zbGlkZXItZG90LWFjdGl2ZV09XCJtYXJrLmFjdGl2ZVwiXG4gICAgICAgIFtuZ1N0eWxlXT1cIm1hcmsuc3R5bGUhXCJcbiAgICAgID5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOelNsaWRlclN0ZXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdmVydGljYWw6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2luY2x1ZGVkOiBCb29sZWFuSW5wdXQ7XG5cbiAgQElucHV0KCkgbG93ZXJCb3VuZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIHVwcGVyQm91bmQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBtYXJrc0FycmF5OiBOekV4dGVuZGVkTWFya1tdID0gW107XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2ZXJ0aWNhbCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaW5jbHVkZWQgPSBmYWxzZTtcblxuICBzdGVwczogTnpEaXNwbGF5ZWRTdGVwW10gPSBbXTtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubWFya3NBcnJheSkge1xuICAgICAgdGhpcy5idWlsZFN0ZXBzKCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLm1hcmtzQXJyYXkgfHwgY2hhbmdlcy5sb3dlckJvdW5kIHx8IGNoYW5nZXMudXBwZXJCb3VuZCkge1xuICAgICAgdGhpcy50b2dnbGVQb2ludEFjdGl2ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHRyYWNrQnlJZChfaW5kZXg6IG51bWJlciwgc3RlcDogTnpEaXNwbGF5ZWRTdGVwKTogbnVtYmVyIHtcbiAgICByZXR1cm4gc3RlcC52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRTdGVwcygpOiB2b2lkIHtcbiAgICBjb25zdCBvcmllbnQgPSB0aGlzLnZlcnRpY2FsID8gJ2JvdHRvbScgOiAnbGVmdCc7XG5cbiAgICB0aGlzLnN0ZXBzID0gdGhpcy5tYXJrc0FycmF5Lm1hcChtYXJrID0+IHtcbiAgICAgIGNvbnN0IHsgdmFsdWUsIG9mZnNldCwgY29uZmlnIH0gPSBtYXJrO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZSxcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBjb25maWcsXG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgW29yaWVudF06IGAke29mZnNldH0lYFxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB0b2dnbGVQb2ludEFjdGl2ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdGVwcyAmJiB0aGlzLmxvd2VyQm91bmQgIT09IG51bGwgJiYgdGhpcy51cHBlckJvdW5kICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gc3RlcC52YWx1ZTtcbiAgICAgICAgY29uc3QgaXNBY3RpdmUgPVxuICAgICAgICAgICghdGhpcy5pbmNsdWRlZCAmJiB2YWx1ZSA9PT0gdGhpcy51cHBlckJvdW5kKSB8fCAodGhpcy5pbmNsdWRlZCAmJiB2YWx1ZSA8PSB0aGlzLnVwcGVyQm91bmQhICYmIHZhbHVlID49IHRoaXMubG93ZXJCb3VuZCEpO1xuICAgICAgICBzdGVwLmFjdGl2ZSA9IGlzQWN0aXZlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=