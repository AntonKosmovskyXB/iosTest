/**
 * @fileoverview added by tsickle
 * Generated from: form-label.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Optional, Renderer2, SkipSelf, ViewEncapsulation } from '@angular/core';
import { InputBoolean, toBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { NzFormDirective } from './form.directive';
var NzFormLabelComponent = /** @class */ (function () {
    function NzFormLabelComponent(elementRef, renderer, cdr, nzFormDirective) {
        var _this = this;
        this.cdr = cdr;
        this.nzFormDirective = nzFormDirective;
        this.nzRequired = false;
        this.noColon = 'default';
        this.destroy$ = new Subject();
        renderer.addClass(elementRef.nativeElement, 'ant-form-item-label');
        if (this.nzFormDirective) {
            this.nzFormDirective
                .getInputObservable('nzNoColon')
                .pipe(filter((/**
             * @return {?}
             */
            function () { return _this.noColon === 'default'; })), takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.cdr.markForCheck(); }));
        }
    }
    Object.defineProperty(NzFormLabelComponent.prototype, "nzNoColon", {
        get: /**
         * @return {?}
         */
        function () {
            var _a;
            return this.noColon !== 'default' ? this.noColon : (_a = this.nzFormDirective) === null || _a === void 0 ? void 0 : _a.nzNoColon;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.noColon = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzFormLabelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzFormLabelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-form-label',
                    exportAs: 'nzFormLabel',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <label [attr.for]=\"nzFor\" [class.ant-form-item-no-colon]=\"nzNoColon\" [class.ant-form-item-required]=\"nzRequired\">\n      <ng-content></ng-content>\n    </label>\n  "
                }] }
    ];
    /** @nocollapse */
    NzFormLabelComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: NzFormDirective, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    NzFormLabelComponent.propDecorators = {
        nzFor: [{ type: Input }],
        nzRequired: [{ type: Input }],
        nzNoColon: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzFormLabelComponent.prototype, "nzRequired", void 0);
    return NzFormLabelComponent;
}());
export { NzFormLabelComponent };
if (false) {
    /** @type {?} */
    NzFormLabelComponent.ngAcceptInputType_nzRequired;
    /** @type {?} */
    NzFormLabelComponent.ngAcceptInputType_nzNoColon;
    /** @type {?} */
    NzFormLabelComponent.prototype.nzFor;
    /** @type {?} */
    NzFormLabelComponent.prototype.nzRequired;
    /** @type {?} */
    NzFormLabelComponent.prototype.noColon;
    /**
     * @type {?}
     * @private
     */
    NzFormLabelComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzFormLabelComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzFormLabelComponent.prototype.nzFormDirective;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1sYWJlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Zvcm0vIiwic291cmNlcyI6WyJmb3JtLWxhYmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRUwsUUFBUSxFQUNSLFNBQVMsRUFDVCxRQUFRLEVBQ1IsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVuRDtJQThCRSw4QkFDRSxVQUFzQixFQUN0QixRQUFtQixFQUNYLEdBQXNCLEVBQ0UsZUFBZ0M7UUFKbEUsaUJBaUJDO1FBZFMsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDRSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFqQnpDLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFTNUMsWUFBTyxHQUF3QixTQUFTLENBQUM7UUFFakMsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFRL0IsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFFbkUsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxlQUFlO2lCQUNqQixrQkFBa0IsQ0FBQyxXQUFXLENBQUM7aUJBQy9CLElBQUksQ0FDSCxNQUFNOzs7WUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQTFCLENBQTBCLEVBQUMsRUFDeEMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDekI7aUJBQ0EsU0FBUzs7O1lBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEVBQXZCLENBQXVCLEVBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7SUE3QkQsc0JBQ0ksMkNBQVM7Ozs7UUFHYjs7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBQyxJQUFJLENBQUMsZUFBZSwwQ0FBRSxTQUFTLENBQUM7UUFDckYsQ0FBQzs7Ozs7UUFORCxVQUNjLEtBQWM7WUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7Ozs7SUE0QkQsMENBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7O2dCQXBERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxhQUFhO29CQUN2QixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSxrTEFJVDtpQkFDRjs7OztnQkExQkMsVUFBVTtnQkFJVixTQUFTO2dCQU5ULGlCQUFpQjtnQkFlVixlQUFlLHVCQW9DbkIsUUFBUSxZQUFJLFFBQVE7Ozt3QkFsQnRCLEtBQUs7NkJBQ0wsS0FBSzs0QkFDTCxLQUFLOztJQURtQjtRQUFmLFlBQVksRUFBRTs7NERBQW9CO0lBb0M5QywyQkFBQztDQUFBLEFBckRELElBcURDO1NBekNZLG9CQUFvQjs7O0lBQy9CLGtEQUFrRDs7SUFDbEQsaURBQWlEOztJQUVqRCxxQ0FBd0I7O0lBQ3hCLDBDQUE0Qzs7SUFTNUMsdUNBQXlDOzs7OztJQUV6Qyx3Q0FBaUM7Ozs7O0lBSy9CLG1DQUE4Qjs7Ozs7SUFDOUIsK0NBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFNraXBTZWxmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgdG9Cb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOekZvcm1EaXJlY3RpdmUgfSBmcm9tICcuL2Zvcm0uZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotZm9ybS1sYWJlbCcsXG4gIGV4cG9ydEFzOiAnbnpGb3JtTGFiZWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGxhYmVsIFthdHRyLmZvcl09XCJuekZvclwiIFtjbGFzcy5hbnQtZm9ybS1pdGVtLW5vLWNvbG9uXT1cIm56Tm9Db2xvblwiIFtjbGFzcy5hbnQtZm9ybS1pdGVtLXJlcXVpcmVkXT1cIm56UmVxdWlyZWRcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2xhYmVsPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE56Rm9ybUxhYmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256UmVxdWlyZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256Tm9Db2xvbjogQm9vbGVhbklucHV0O1xuXG4gIEBJbnB1dCgpIG56Rm9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpSZXF1aXJlZCA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBzZXQgbnpOb0NvbG9uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5ub0NvbG9uID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBnZXQgbnpOb0NvbG9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5vQ29sb24gIT09ICdkZWZhdWx0JyA/IHRoaXMubm9Db2xvbiA6IHRoaXMubnpGb3JtRGlyZWN0aXZlPy5uek5vQ29sb247XG4gIH1cblxuICBub0NvbG9uOiBib29sZWFuIHwgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnO1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHJpdmF0ZSBuekZvcm1EaXJlY3RpdmU6IE56Rm9ybURpcmVjdGl2ZVxuICApIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtZm9ybS1pdGVtLWxhYmVsJyk7XG5cbiAgICBpZiAodGhpcy5uekZvcm1EaXJlY3RpdmUpIHtcbiAgICAgIHRoaXMubnpGb3JtRGlyZWN0aXZlXG4gICAgICAgIC5nZXRJbnB1dE9ic2VydmFibGUoJ256Tm9Db2xvbicpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLm5vQ29sb24gPT09ICdkZWZhdWx0JyksXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=