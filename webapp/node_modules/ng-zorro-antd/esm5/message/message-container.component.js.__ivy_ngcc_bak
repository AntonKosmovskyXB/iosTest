/**
 * @fileoverview added by tsickle
 * Generated from: message-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __extends } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { toCssPixel } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzMNContainerComponent } from './base';
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'message';
/** @type {?} */
var NZ_MESSAGE_DEFAULT_CONFIG = {
    nzAnimate: true,
    nzDuration: 3000,
    nzMaxStack: 7,
    nzPauseOnHover: true,
    nzTop: 24
};
var NzMessageContainerComponent = /** @class */ (function (_super) {
    __extends(NzMessageContainerComponent, _super);
    function NzMessageContainerComponent(cdr, nzConfigService) {
        var _this = _super.call(this, cdr, nzConfigService) || this;
        _this.destroy$ = new Subject();
        _this.instances = [];
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    NzMessageContainerComponent.prototype.subscribeConfigChange = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.updateConfig(); }));
    };
    /**
     * @protected
     * @return {?}
     */
    NzMessageContainerComponent.prototype.updateConfig = /**
     * @protected
     * @return {?}
     */
    function () {
        this.config = __assign(__assign(__assign({}, NZ_MESSAGE_DEFAULT_CONFIG), this.config), this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME));
        this.top = toCssPixel(this.config.nzTop);
        this.cdr.markForCheck();
    };
    NzMessageContainerComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-message-container',
                    exportAs: 'nzMessageContainer',
                    preserveWhitespaces: false,
                    template: "\n    <div class=\"ant-message\" [style.top]=\"top\">\n      <nz-message *ngFor=\"let instance of instances\" [instance]=\"instance\" (destroyed)=\"remove($event.id, $event.userAction)\"></nz-message>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    NzMessageContainerComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzConfigService }
    ]; };
    return NzMessageContainerComponent;
}(NzMNContainerComponent));
export { NzMessageContainerComponent };
if (false) {
    /** @type {?} */
    NzMessageContainerComponent.prototype.destroy$;
    /** @type {?} */
    NzMessageContainerComponent.prototype.instances;
    /** @type {?} */
    NzMessageContainerComponent.prototype.top;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tZXNzYWdlLyIsInNvdXJjZXMiOlsibWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBaUIsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLFFBQVEsQ0FBQzs7SUFHMUMsd0JBQXdCLEdBQUcsU0FBUzs7SUFFcEMseUJBQXlCLEdBQTRCO0lBQ3pELFNBQVMsRUFBRSxJQUFJO0lBQ2YsVUFBVSxFQUFFLElBQUk7SUFDaEIsVUFBVSxFQUFFLENBQUM7SUFDYixjQUFjLEVBQUUsSUFBSTtJQUNwQixLQUFLLEVBQUUsRUFBRTtDQUNWO0FBRUQ7SUFZaUQsK0NBQXNCO0lBTXJFLHFDQUFZLEdBQXNCLEVBQUUsZUFBZ0M7UUFBcEUsWUFDRSxrQkFBTSxHQUFHLEVBQUUsZUFBZSxDQUFDLFNBQzVCO1FBUFEsY0FBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFFeEMsZUFBUyxHQUFtQyxFQUFFLENBQUM7O0lBSy9DLENBQUM7Ozs7O0lBRVMsMkRBQXFCOzs7O0lBQS9CO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsZUFBZTthQUNqQixnQ0FBZ0MsQ0FBQyx3QkFBd0IsQ0FBQzthQUMxRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFlBQVksRUFBRSxFQUFuQixDQUFtQixFQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFUyxrREFBWTs7OztJQUF0QjtRQUNFLElBQUksQ0FBQyxNQUFNLGtDQUNOLHlCQUF5QixHQUN6QixJQUFJLENBQUMsTUFBTSxHQUNYLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsd0JBQXdCLENBQUMsQ0FDeEUsQ0FBQztRQUVGLElBQUksQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOztnQkF0Q0YsU0FBUyxTQUFDO29CQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsUUFBUSxFQUFFLDBOQUlUO2lCQUNGOzs7O2dCQTlCaUMsaUJBQWlCO2dCQUMzQixlQUFlOztJQXlEdkMsa0NBQUM7Q0FBQSxBQXZDRCxDQVlpRCxzQkFBc0IsR0EyQnRFO1NBM0JZLDJCQUEyQjs7O0lBQ3RDLCtDQUF3Qzs7SUFFeEMsZ0RBQStDOztJQUMvQywwQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1lc3NhZ2VDb25maWcsIE56Q29uZmlnU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgdG9Dc3NQaXhlbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnpNTkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgeyBOek1lc3NhZ2VEYXRhIH0gZnJvbSAnLi90eXBpbmdzJztcblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ21lc3NhZ2UnO1xuXG5jb25zdCBOWl9NRVNTQUdFX0RFRkFVTFRfQ09ORklHOiBSZXF1aXJlZDxNZXNzYWdlQ29uZmlnPiA9IHtcbiAgbnpBbmltYXRlOiB0cnVlLFxuICBuekR1cmF0aW9uOiAzMDAwLFxuICBuek1heFN0YWNrOiA3LFxuICBuelBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgbnpUb3A6IDI0XG59O1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotbWVzc2FnZS1jb250YWluZXInLFxuICBleHBvcnRBczogJ256TWVzc2FnZUNvbnRhaW5lcicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJhbnQtbWVzc2FnZVwiIFtzdHlsZS50b3BdPVwidG9wXCI+XG4gICAgICA8bnotbWVzc2FnZSAqbmdGb3I9XCJsZXQgaW5zdGFuY2Ugb2YgaW5zdGFuY2VzXCIgW2luc3RhbmNlXT1cImluc3RhbmNlXCIgKGRlc3Ryb3llZCk9XCJyZW1vdmUoJGV2ZW50LmlkLCAkZXZlbnQudXNlckFjdGlvbilcIj48L256LW1lc3NhZ2U+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgTnpNTkNvbnRhaW5lckNvbXBvbmVudCB7XG4gIHJlYWRvbmx5IGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBpbnN0YW5jZXM6IEFycmF5PFJlcXVpcmVkPE56TWVzc2FnZURhdGE+PiA9IFtdO1xuICB0b3A/OiBzdHJpbmcgfCBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlKSB7XG4gICAgc3VwZXIoY2RyLCBuekNvbmZpZ1NlcnZpY2UpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHN1YnNjcmliZUNvbmZpZ0NoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLm56Q29uZmlnU2VydmljZVxuICAgICAgLmdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVDb25maWcoKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlQ29uZmlnKCk6IHZvaWQge1xuICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgLi4uTlpfTUVTU0FHRV9ERUZBVUxUX0NPTkZJRyxcbiAgICAgIC4uLnRoaXMuY29uZmlnLFxuICAgICAgLi4udGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSlcbiAgICB9O1xuXG4gICAgdGhpcy50b3AgPSB0b0Nzc1BpeGVsKHRoaXMuY29uZmlnLm56VG9wKTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19