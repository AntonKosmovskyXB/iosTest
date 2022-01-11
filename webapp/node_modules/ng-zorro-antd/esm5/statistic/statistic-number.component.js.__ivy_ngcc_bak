/**
 * @fileoverview added by tsickle
 * Generated from: statistic-number.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __read } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { getLocaleNumberSymbol, NumberSymbol } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, LOCALE_ID, TemplateRef, ViewEncapsulation } from '@angular/core';
var NzStatisticNumberComponent = /** @class */ (function () {
    function NzStatisticNumberComponent(locale_id) {
        this.locale_id = locale_id;
        this.displayInt = '';
        this.displayDecimal = '';
    }
    /**
     * @return {?}
     */
    NzStatisticNumberComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.formatNumber();
    };
    /**
     * @private
     * @return {?}
     */
    NzStatisticNumberComponent.prototype.formatNumber = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var decimalSeparator = typeof this.nzValue === 'number' ? '.' : getLocaleNumberSymbol(this.locale_id, NumberSymbol.Decimal);
        /** @type {?} */
        var value = String(this.nzValue);
        var _a = __read(value.split(decimalSeparator), 2), int = _a[0], decimal = _a[1];
        this.displayInt = int;
        this.displayDecimal = decimal ? "" + decimalSeparator + decimal : '';
    };
    NzStatisticNumberComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    selector: 'nz-statistic-number',
                    exportAs: 'nzStatisticNumber',
                    template: "\n    <span class=\"ant-statistic-content-value\">\n      <ng-container *ngIf=\"nzValueTemplate\" [ngTemplateOutlet]=\"nzValueTemplate\" [ngTemplateOutletContext]=\"{ $implicit: nzValue }\">\n      </ng-container>\n      <ng-container *ngIf=\"!nzValueTemplate\">\n        <span *ngIf=\"displayInt\" class=\"ant-statistic-content-value-int\">{{ displayInt }}</span>\n        <span *ngIf=\"displayDecimal\" class=\"ant-statistic-content-value-decimal\">{{ displayDecimal }}</span>\n      </ng-container>\n    </span>\n  "
                }] }
    ];
    /** @nocollapse */
    NzStatisticNumberComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    NzStatisticNumberComponent.propDecorators = {
        nzValue: [{ type: Input }],
        nzValueTemplate: [{ type: Input }]
    };
    return NzStatisticNumberComponent;
}());
export { NzStatisticNumberComponent };
if (false) {
    /** @type {?} */
    NzStatisticNumberComponent.prototype.nzValue;
    /** @type {?} */
    NzStatisticNumberComponent.prototype.nzValueTemplate;
    /** @type {?} */
    NzStatisticNumberComponent.prototype.displayInt;
    /** @type {?} */
    NzStatisticNumberComponent.prototype.displayDecimal;
    /**
     * @type {?}
     * @private
     */
    NzStatisticNumberComponent.prototype.locale_id;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlzdGljLW51bWJlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3N0YXRpc3RpYy8iLCJzb3VyY2VzIjpbInN0YXRpc3RpYy1udW1iZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBYSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHeEk7SUF3QkUsb0NBQXVDLFNBQWlCO1FBQWpCLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFIeEQsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixtQkFBYyxHQUFHLEVBQUUsQ0FBQztJQUV1QyxDQUFDOzs7O0lBRTVELGdEQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVPLGlEQUFZOzs7O0lBQXBCOztZQUNRLGdCQUFnQixHQUFXLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDOztZQUMvSCxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBQSw2Q0FBOEMsRUFBN0MsV0FBRyxFQUFFLGVBQXdDO1FBRXBELElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFHLGdCQUFnQixHQUFHLE9BQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3ZFLENBQUM7O2dCQXJDRixTQUFTLFNBQUM7b0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsd2dCQVNUO2lCQUNGOzs7OzZDQVFjLE1BQU0sU0FBQyxTQUFTOzs7MEJBTjVCLEtBQUs7a0NBQ0wsS0FBSzs7SUFtQlIsaUNBQUM7Q0FBQSxBQXRDRCxJQXNDQztTQXJCWSwwQkFBMEI7OztJQUNyQyw2Q0FBd0M7O0lBQ3hDLHFEQUE0RTs7SUFFNUUsZ0RBQWdCOztJQUNoQixvREFBb0I7Ozs7O0lBRVIsK0NBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgZ2V0TG9jYWxlTnVtYmVyU3ltYm9sLCBOdW1iZXJTeW1ib2wgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5qZWN0LCBJbnB1dCwgTE9DQUxFX0lELCBPbkNoYW5nZXMsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTdGF0aXN0aWNWYWx1ZVR5cGUgfSBmcm9tICcuL3R5cGluZ3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBzZWxlY3RvcjogJ256LXN0YXRpc3RpYy1udW1iZXInLFxuICBleHBvcnRBczogJ256U3RhdGlzdGljTnVtYmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiBjbGFzcz1cImFudC1zdGF0aXN0aWMtY29udGVudC12YWx1ZVwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56VmFsdWVUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm56VmFsdWVUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogbnpWYWx1ZSB9XCI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhbnpWYWx1ZVRlbXBsYXRlXCI+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiZGlzcGxheUludFwiIGNsYXNzPVwiYW50LXN0YXRpc3RpYy1jb250ZW50LXZhbHVlLWludFwiPnt7IGRpc3BsYXlJbnQgfX08L3NwYW4+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiZGlzcGxheURlY2ltYWxcIiBjbGFzcz1cImFudC1zdGF0aXN0aWMtY29udGVudC12YWx1ZS1kZWNpbWFsXCI+e3sgZGlzcGxheURlY2ltYWwgfX08L3NwYW4+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L3NwYW4+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTnpTdGF0aXN0aWNOdW1iZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBuelZhbHVlPzogTnpTdGF0aXN0aWNWYWx1ZVR5cGU7XG4gIEBJbnB1dCgpIG56VmFsdWVUZW1wbGF0ZT86IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelN0YXRpc3RpY1ZhbHVlVHlwZSB9PjtcblxuICBkaXNwbGF5SW50ID0gJyc7XG4gIGRpc3BsYXlEZWNpbWFsID0gJyc7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChMT0NBTEVfSUQpIHByaXZhdGUgbG9jYWxlX2lkOiBzdHJpbmcpIHt9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtYXROdW1iZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgZm9ybWF0TnVtYmVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGRlY2ltYWxTZXBhcmF0b3I6IHN0cmluZyA9IHR5cGVvZiB0aGlzLm56VmFsdWUgPT09ICdudW1iZXInID8gJy4nIDogZ2V0TG9jYWxlTnVtYmVyU3ltYm9sKHRoaXMubG9jYWxlX2lkLCBOdW1iZXJTeW1ib2wuRGVjaW1hbCk7XG4gICAgY29uc3QgdmFsdWUgPSBTdHJpbmcodGhpcy5uelZhbHVlKTtcbiAgICBjb25zdCBbaW50LCBkZWNpbWFsXSA9IHZhbHVlLnNwbGl0KGRlY2ltYWxTZXBhcmF0b3IpO1xuXG4gICAgdGhpcy5kaXNwbGF5SW50ID0gaW50O1xuICAgIHRoaXMuZGlzcGxheURlY2ltYWwgPSBkZWNpbWFsID8gYCR7ZGVjaW1hbFNlcGFyYXRvcn0ke2RlY2ltYWx9YCA6ICcnO1xuICB9XG59XG4iXX0=