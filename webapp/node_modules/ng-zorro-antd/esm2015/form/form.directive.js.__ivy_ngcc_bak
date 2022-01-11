/**
 * @fileoverview added by tsickle
 * Generated from: form.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'form';
export class NzFormDirective {
    /**
     * @param {?} nzConfigService
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(nzConfigService, elementRef, renderer) {
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.nzLayout = 'horizontal';
        this.nzNoColon = false;
        this.nzAutoTips = {};
        this.nzDisableAutoTips = false;
        this.destroy$ = new Subject();
        this.inputChanges$ = new Subject();
        this.renderer.addClass(elementRef.nativeElement, 'ant-form');
    }
    /**
     * @template K
     * @param {?} changeType
     * @return {?}
     */
    getInputObservable(changeType) {
        return this.inputChanges$.pipe(filter((/**
         * @param {?} changes
         * @return {?}
         */
        changes => changeType in changes)), map((/**
         * @param {?} value
         * @return {?}
         */
        value => value[(/** @type {?} */ (changeType))])));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.inputChanges$.next(changes);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzFormDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-form]',
                exportAs: 'nzForm',
                host: {
                    '[class.ant-form-horizontal]': `nzLayout === 'horizontal'`,
                    '[class.ant-form-vertical]': `nzLayout === 'vertical'`,
                    '[class.ant-form-inline]': `nzLayout === 'inline'`
                }
            },] }
];
/** @nocollapse */
NzFormDirective.ctorParameters = () => [
    { type: NzConfigService },
    { type: ElementRef },
    { type: Renderer2 }
];
NzFormDirective.propDecorators = {
    nzLayout: [{ type: Input }],
    nzNoColon: [{ type: Input }],
    nzAutoTips: [{ type: Input }],
    nzDisableAutoTips: [{ type: Input }]
};
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME), InputBoolean(),
    __metadata("design:type", Boolean)
], NzFormDirective.prototype, "nzNoColon", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    __metadata("design:type", Object)
], NzFormDirective.prototype, "nzAutoTips", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzFormDirective.prototype, "nzDisableAutoTips", void 0);
if (false) {
    /** @type {?} */
    NzFormDirective.ngAcceptInputType_nzNoColon;
    /** @type {?} */
    NzFormDirective.ngAcceptInputType_nzDisableAutoTips;
    /** @type {?} */
    NzFormDirective.prototype.nzLayout;
    /** @type {?} */
    NzFormDirective.prototype.nzNoColon;
    /** @type {?} */
    NzFormDirective.prototype.nzAutoTips;
    /** @type {?} */
    NzFormDirective.prototype.nzDisableAutoTips;
    /** @type {?} */
    NzFormDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzFormDirective.prototype.inputChanges$;
    /** @type {?} */
    NzFormDirective.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzFormDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Zvcm0vIiwic291cmNlcyI6WyJmb3JtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUF3QixTQUFTLEVBQStCLE1BQU0sZUFBZSxDQUFDO0FBRTNILE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7TUFFdkMsd0JBQXdCLEdBQUcsTUFBTTtBQVd2QyxNQUFNLE9BQU8sZUFBZTs7Ozs7O0lBbUIxQixZQUFtQixlQUFnQyxFQUFFLFVBQXNCLEVBQVUsUUFBbUI7UUFBckYsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQWtDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFmL0YsYUFBUSxHQUF5QyxZQUFZLENBQUM7UUFDUixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNDLGVBQVUsR0FBMkMsRUFBRSxDQUFDO1FBQzlFLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUVuRCxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNqQixrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFpQixDQUFDO1FBVW5ELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7O0lBVEQsa0JBQWtCLENBQXVCLFVBQWE7UUFDcEQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDNUIsTUFBTTs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxJQUFJLE9BQU8sRUFBQyxFQUN4QyxHQUFHOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsbUJBQUEsVUFBVSxFQUFVLENBQUMsRUFBQyxDQUMxQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFNRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBdkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLElBQUksRUFBRTtvQkFDSiw2QkFBNkIsRUFBRSwyQkFBMkI7b0JBQzFELDJCQUEyQixFQUFFLHlCQUF5QjtvQkFDdEQseUJBQXlCLEVBQUUsdUJBQXVCO2lCQUNuRDthQUNGOzs7O1lBaEJRLGVBQWU7WUFGSixVQUFVO1lBQStCLFNBQVM7Ozt1QkF1Qm5FLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLO2dDQUNMLEtBQUs7O0FBRnlEO0lBQXJELFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLFlBQVksRUFBRTs7a0RBQTRCO0FBQzNDO0lBQXJDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQzs7bURBQXlEO0FBQzlFO0lBQWYsWUFBWSxFQUFFOzswREFBMkI7OztJQU5uRCw0Q0FBaUQ7O0lBQ2pELG9EQUF5RDs7SUFFekQsbUNBQXVFOztJQUN2RSxvQ0FBMEY7O0lBQzFGLHFDQUF1Rzs7SUFDdkcsNENBQW1EOztJQUVuRCxtQ0FBeUI7Ozs7O0lBQ3pCLHdDQUFxRDs7SUFTekMsMENBQXVDOzs7OztJQUEwQixtQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2UsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0T2JzZXJ2YWJsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2Zvcm0nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnotZm9ybV0nLFxuICBleHBvcnRBczogJ256Rm9ybScsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1mb3JtLWhvcml6b250YWxdJzogYG56TGF5b3V0ID09PSAnaG9yaXpvbnRhbCdgLFxuICAgICdbY2xhc3MuYW50LWZvcm0tdmVydGljYWxdJzogYG56TGF5b3V0ID09PSAndmVydGljYWwnYCxcbiAgICAnW2NsYXNzLmFudC1mb3JtLWlubGluZV0nOiBgbnpMYXlvdXQgPT09ICdpbmxpbmUnYFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56Rm9ybURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95LCBJbnB1dE9ic2VydmFibGUge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpOb0NvbG9uOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekRpc2FibGVBdXRvVGlwczogQm9vbGVhbklucHV0O1xuXG4gIEBJbnB1dCgpIG56TGF5b3V0OiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnIHwgJ2lubGluZScgPSAnaG9yaXpvbnRhbCc7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgQElucHV0Qm9vbGVhbigpIG56Tm9Db2xvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIG56QXV0b1RpcHM6IFJlY29yZDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIHN0cmluZz4+ID0ge307XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVBdXRvVGlwcyA9IGZhbHNlO1xuXG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBpbnB1dENoYW5nZXMkID0gbmV3IFN1YmplY3Q8U2ltcGxlQ2hhbmdlcz4oKTtcblxuICBnZXRJbnB1dE9ic2VydmFibGU8SyBleHRlbmRzIGtleW9mIHRoaXM+KGNoYW5nZVR5cGU6IEspOiBPYnNlcnZhYmxlPFNpbXBsZUNoYW5nZT4ge1xuICAgIHJldHVybiB0aGlzLmlucHV0Q2hhbmdlcyQucGlwZShcbiAgICAgIGZpbHRlcihjaGFuZ2VzID0+IGNoYW5nZVR5cGUgaW4gY2hhbmdlcyksXG4gICAgICBtYXAodmFsdWUgPT4gdmFsdWVbY2hhbmdlVHlwZSBhcyBzdHJpbmddKVxuICAgICk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWZvcm0nKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0Q2hhbmdlcyQubmV4dChjaGFuZ2VzKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19