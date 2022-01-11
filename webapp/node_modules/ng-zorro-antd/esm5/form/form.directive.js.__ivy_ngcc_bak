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
var NZ_CONFIG_COMPONENT_NAME = 'form';
var NzFormDirective = /** @class */ (function () {
    function NzFormDirective(nzConfigService, elementRef, renderer) {
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
    NzFormDirective.prototype.getInputObservable = /**
     * @template K
     * @param {?} changeType
     * @return {?}
     */
    function (changeType) {
        return this.inputChanges$.pipe(filter((/**
         * @param {?} changes
         * @return {?}
         */
        function (changes) { return changeType in changes; })), map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value[(/** @type {?} */ (changeType))]; })));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzFormDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.inputChanges$.next(changes);
    };
    /**
     * @return {?}
     */
    NzFormDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzFormDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-form]',
                    exportAs: 'nzForm',
                    host: {
                        '[class.ant-form-horizontal]': "nzLayout === 'horizontal'",
                        '[class.ant-form-vertical]': "nzLayout === 'vertical'",
                        '[class.ant-form-inline]': "nzLayout === 'inline'"
                    }
                },] }
    ];
    /** @nocollapse */
    NzFormDirective.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return NzFormDirective;
}());
export { NzFormDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Zvcm0vIiwic291cmNlcyI6WyJmb3JtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUF3QixTQUFTLEVBQStCLE1BQU0sZUFBZSxDQUFDO0FBRTNILE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFFdkMsd0JBQXdCLEdBQUcsTUFBTTtBQUV2QztJQTRCRSx5QkFBbUIsZUFBZ0MsRUFBRSxVQUFzQixFQUFVLFFBQW1CO1FBQXJGLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFrQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBZi9GLGFBQVEsR0FBeUMsWUFBWSxDQUFDO1FBQ1IsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQyxlQUFVLEdBQTJDLEVBQUUsQ0FBQztRQUM5RSxzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFFbkQsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDakIsa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBaUIsQ0FBQztRQVVuRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7OztJQVRELDRDQUFrQjs7Ozs7SUFBbEIsVUFBeUMsVUFBYTtRQUNwRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUM1QixNQUFNOzs7O1FBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxVQUFVLElBQUksT0FBTyxFQUFyQixDQUFxQixFQUFDLEVBQ3hDLEdBQUc7Ozs7UUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxtQkFBQSxVQUFVLEVBQVUsQ0FBQyxFQUEzQixDQUEyQixFQUFDLENBQzFDLENBQUM7SUFDSixDQUFDOzs7OztJQU1ELHFDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQscUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7O2dCQXZDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSxRQUFRO29CQUNsQixJQUFJLEVBQUU7d0JBQ0osNkJBQTZCLEVBQUUsMkJBQTJCO3dCQUMxRCwyQkFBMkIsRUFBRSx5QkFBeUI7d0JBQ3RELHlCQUF5QixFQUFFLHVCQUF1QjtxQkFDbkQ7aUJBQ0Y7Ozs7Z0JBaEJRLGVBQWU7Z0JBRkosVUFBVTtnQkFBK0IsU0FBUzs7OzJCQXVCbkUsS0FBSzs0QkFDTCxLQUFLOzZCQUNMLEtBQUs7b0NBQ0wsS0FBSzs7SUFGeUQ7UUFBckQsVUFBVSxDQUFDLHdCQUF3QixDQUFDLEVBQUUsWUFBWSxFQUFFOztzREFBNEI7SUFDM0M7UUFBckMsVUFBVSxDQUFDLHdCQUF3QixDQUFDOzt1REFBeUQ7SUFDOUU7UUFBZixZQUFZLEVBQUU7OzhEQUEyQjtJQXdCckQsc0JBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQS9CWSxlQUFlOzs7SUFDMUIsNENBQWlEOztJQUNqRCxvREFBeUQ7O0lBRXpELG1DQUF1RTs7SUFDdkUsb0NBQTBGOztJQUMxRixxQ0FBdUc7O0lBQ3ZHLDRDQUFtRDs7SUFFbkQsbUNBQXlCOzs7OztJQUN6Qix3Q0FBcUQ7O0lBU3pDLDBDQUF1Qzs7Ozs7SUFBMEIsbUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dE9ic2VydmFibGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdmb3JtJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LWZvcm1dJyxcbiAgZXhwb3J0QXM6ICduekZvcm0nLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1ob3Jpem9udGFsXSc6IGBuekxheW91dCA9PT0gJ2hvcml6b250YWwnYCxcbiAgICAnW2NsYXNzLmFudC1mb3JtLXZlcnRpY2FsXSc6IGBuekxheW91dCA9PT0gJ3ZlcnRpY2FsJ2AsXG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1pbmxpbmVdJzogYG56TGF5b3V0ID09PSAnaW5saW5lJ2BcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekZvcm1EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgSW5wdXRPYnNlcnZhYmxlIHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256Tm9Db2xvbjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpEaXNhYmxlQXV0b1RpcHM6IEJvb2xlYW5JbnB1dDtcblxuICBASW5wdXQoKSBuekxheW91dDogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyB8ICdpbmxpbmUnID0gJ2hvcml6b250YWwnO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIEBJbnB1dEJvb2xlYW4oKSBuek5vQ29sb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBuekF1dG9UaXBzOiBSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PiA9IHt9O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlQXV0b1RpcHMgPSBmYWxzZTtcblxuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgaW5wdXRDaGFuZ2VzJCA9IG5ldyBTdWJqZWN0PFNpbXBsZUNoYW5nZXM+KCk7XG5cbiAgZ2V0SW5wdXRPYnNlcnZhYmxlPEsgZXh0ZW5kcyBrZXlvZiB0aGlzPihjaGFuZ2VUeXBlOiBLKTogT2JzZXJ2YWJsZTxTaW1wbGVDaGFuZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dENoYW5nZXMkLnBpcGUoXG4gICAgICBmaWx0ZXIoY2hhbmdlcyA9PiBjaGFuZ2VUeXBlIGluIGNoYW5nZXMpLFxuICAgICAgbWFwKHZhbHVlID0+IHZhbHVlW2NoYW5nZVR5cGUgYXMgc3RyaW5nXSlcbiAgICApO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1mb3JtJyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dENoYW5nZXMkLm5leHQoY2hhbmdlcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==