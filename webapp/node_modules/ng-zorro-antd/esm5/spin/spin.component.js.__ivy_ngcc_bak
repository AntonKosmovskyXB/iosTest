/**
 * @fileoverview added by tsickle
 * Generated from: spin.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { InputBoolean, InputNumber } from 'ng-zorro-antd/core/util';
import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, flatMap, takeUntil } from 'rxjs/operators';
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'spin';
var NzSpinComponent = /** @class */ (function () {
    function NzSpinComponent(nzConfigService, cdr) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.nzIndicator = null;
        this.nzSize = 'default';
        this.nzTip = null;
        this.nzDelay = 0;
        this.nzSimple = false;
        this.nzSpinning = true;
        this.destroy$ = new Subject();
        this.spinning$ = new BehaviorSubject(this.nzSpinning);
        this.delay$ = new BehaviorSubject(this.nzDelay);
        this.isLoading = true;
    }
    /**
     * @return {?}
     */
    NzSpinComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var loading$ = this.spinning$.pipe(flatMap((/**
         * @return {?}
         */
        function () { return _this.delay$; })), flatMap((/**
         * @param {?} delay
         * @return {?}
         */
        function (delay) {
            if (delay === 0) {
                return _this.spinning$;
            }
            else {
                return _this.spinning$.pipe(debounceTime(delay));
            }
        })), takeUntil(this.destroy$));
        loading$.subscribe((/**
         * @param {?} loading
         * @return {?}
         */
        function (loading) {
            _this.isLoading = loading;
            _this.cdr.markForCheck();
        }));
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.cdr.markForCheck(); }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSpinComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzSpinning = changes.nzSpinning, nzDelay = changes.nzDelay;
        if (nzSpinning) {
            this.spinning$.next(this.nzSpinning);
        }
        if (nzDelay) {
            this.delay$.next(this.nzDelay);
        }
    };
    /**
     * @return {?}
     */
    NzSpinComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzSpinComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-spin',
                    exportAs: 'nzSpin',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    template: "\n    <ng-template #defaultTemplate>\n      <span class=\"ant-spin-dot ant-spin-dot-spin\">\n        <i class=\"ant-spin-dot-item\"></i>\n        <i class=\"ant-spin-dot-item\"></i>\n        <i class=\"ant-spin-dot-item\"></i>\n        <i class=\"ant-spin-dot-item\"></i>\n      </span>\n    </ng-template>\n    <div *ngIf=\"isLoading\">\n      <div\n        class=\"ant-spin\"\n        [class.ant-spin-spinning]=\"isLoading\"\n        [class.ant-spin-lg]=\"nzSize === 'large'\"\n        [class.ant-spin-sm]=\"nzSize === 'small'\"\n        [class.ant-spin-show-text]=\"nzTip\"\n      >\n        <ng-template [ngTemplateOutlet]=\"nzIndicator || defaultTemplate\"></ng-template>\n        <div class=\"ant-spin-text\" *ngIf=\"nzTip\">{{ nzTip }}</div>\n      </div>\n    </div>\n    <div *ngIf=\"!nzSimple\" class=\"ant-spin-container\" [class.ant-spin-blur]=\"isLoading\">\n      <ng-content></ng-content>\n    </div>\n  ",
                    host: {
                        '[class.ant-spin-nested-loading]': '!nzSimple'
                    }
                }] }
    ];
    /** @nocollapse */
    NzSpinComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: ChangeDetectorRef }
    ]; };
    NzSpinComponent.propDecorators = {
        nzIndicator: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzTip: [{ type: Input }],
        nzDelay: [{ type: Input }],
        nzSimple: [{ type: Input }],
        nzSpinning: [{ type: Input }]
    };
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", Object)
    ], NzSpinComponent.prototype, "nzIndicator", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], NzSpinComponent.prototype, "nzDelay", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSpinComponent.prototype, "nzSimple", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSpinComponent.prototype, "nzSpinning", void 0);
    return NzSpinComponent;
}());
export { NzSpinComponent };
if (false) {
    /** @type {?} */
    NzSpinComponent.ngAcceptInputType_nzDelay;
    /** @type {?} */
    NzSpinComponent.ngAcceptInputType_nzSimple;
    /** @type {?} */
    NzSpinComponent.ngAcceptInputType_nzSpinning;
    /** @type {?} */
    NzSpinComponent.prototype.nzIndicator;
    /** @type {?} */
    NzSpinComponent.prototype.nzSize;
    /** @type {?} */
    NzSpinComponent.prototype.nzTip;
    /** @type {?} */
    NzSpinComponent.prototype.nzDelay;
    /** @type {?} */
    NzSpinComponent.prototype.nzSimple;
    /** @type {?} */
    NzSpinComponent.prototype.nzSpinning;
    /**
     * @type {?}
     * @private
     */
    NzSpinComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzSpinComponent.prototype.spinning$;
    /**
     * @type {?}
     * @private
     */
    NzSpinComponent.prototype.delay$;
    /** @type {?} */
    NzSpinComponent.prototype.isLoading;
    /** @type {?} */
    NzSpinComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzSpinComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3NwaW4vIiwic291cmNlcyI6WyJzcGluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsS0FBSyxFQU1MLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXhFLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFcEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBRTVELHdCQUF3QixHQUFHLE1BQU07QUFFdkM7SUFrREUseUJBQW1CLGVBQWdDLEVBQVUsR0FBc0I7UUFBaEUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFYcEMsZ0JBQVcsR0FBa0MsSUFBSSxDQUFDO1FBQ3hGLFdBQU0sR0FBa0IsU0FBUyxDQUFDO1FBQ2xDLFVBQUssR0FBa0IsSUFBSSxDQUFDO1FBQ2IsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNYLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNuQyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUMvQixjQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pELFdBQU0sR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkQsY0FBUyxHQUFHLElBQUksQ0FBQztJQUVxRSxDQUFDOzs7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ZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOdW1iZXJJbnB1dCwgTnpTYWZlQW55LCBOelNpemVMRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5cbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmbGF0TWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdzcGluJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotc3BpbicsXG4gIGV4cG9ydEFzOiAnbnpTcGluJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VGVtcGxhdGU+XG4gICAgICA8c3BhbiBjbGFzcz1cImFudC1zcGluLWRvdCBhbnQtc3Bpbi1kb3Qtc3BpblwiPlxuICAgICAgICA8aSBjbGFzcz1cImFudC1zcGluLWRvdC1pdGVtXCI+PC9pPlxuICAgICAgICA8aSBjbGFzcz1cImFudC1zcGluLWRvdC1pdGVtXCI+PC9pPlxuICAgICAgICA8aSBjbGFzcz1cImFudC1zcGluLWRvdC1pdGVtXCI+PC9pPlxuICAgICAgICA8aSBjbGFzcz1cImFudC1zcGluLWRvdC1pdGVtXCI+PC9pPlxuICAgICAgPC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPGRpdiAqbmdJZj1cImlzTG9hZGluZ1wiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImFudC1zcGluXCJcbiAgICAgICAgW2NsYXNzLmFudC1zcGluLXNwaW5uaW5nXT1cImlzTG9hZGluZ1wiXG4gICAgICAgIFtjbGFzcy5hbnQtc3Bpbi1sZ109XCJuelNpemUgPT09ICdsYXJnZSdcIlxuICAgICAgICBbY2xhc3MuYW50LXNwaW4tc21dPVwibnpTaXplID09PSAnc21hbGwnXCJcbiAgICAgICAgW2NsYXNzLmFudC1zcGluLXNob3ctdGV4dF09XCJuelRpcFwiXG4gICAgICA+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJuekluZGljYXRvciB8fCBkZWZhdWx0VGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXNwaW4tdGV4dFwiICpuZ0lmPVwibnpUaXBcIj57eyBuelRpcCB9fTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiAqbmdJZj1cIiFuelNpbXBsZVwiIGNsYXNzPVwiYW50LXNwaW4tY29udGFpbmVyXCIgW2NsYXNzLmFudC1zcGluLWJsdXJdPVwiaXNMb2FkaW5nXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1zcGluLW5lc3RlZC1sb2FkaW5nXSc6ICchbnpTaW1wbGUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpTcGluQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekRlbGF5OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2ltcGxlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNwaW5uaW5nOiBCb29sZWFuSW5wdXQ7XG5cbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBuekluZGljYXRvcjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuelNpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIG56VGlwOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpEZWxheSA9IDA7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNpbXBsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTcGlubmluZyA9IHRydWU7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIHNwaW5uaW5nJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5uelNwaW5uaW5nKTtcbiAgcHJpdmF0ZSBkZWxheSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMubnpEZWxheSk7XG4gIGlzTG9hZGluZyA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgbG9hZGluZyQgPSB0aGlzLnNwaW5uaW5nJC5waXBlKFxuICAgICAgZmxhdE1hcCgoKSA9PiB0aGlzLmRlbGF5JCksXG4gICAgICBmbGF0TWFwKGRlbGF5ID0+IHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3Bpbm5pbmckO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLnNwaW5uaW5nJC5waXBlKGRlYm91bmNlVGltZShkZWxheSkpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICk7XG4gICAgbG9hZGluZyQuc3Vic2NyaWJlKGxvYWRpbmcgPT4ge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBsb2FkaW5nO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgdGhpcy5uekNvbmZpZ1NlcnZpY2VcbiAgICAgIC5nZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG56U3Bpbm5pbmcsIG56RGVsYXkgfSA9IGNoYW5nZXM7XG4gICAgaWYgKG56U3Bpbm5pbmcpIHtcbiAgICAgIHRoaXMuc3Bpbm5pbmckLm5leHQodGhpcy5uelNwaW5uaW5nKTtcbiAgICB9XG4gICAgaWYgKG56RGVsYXkpIHtcbiAgICAgIHRoaXMuZGVsYXkkLm5leHQodGhpcy5uekRlbGF5KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==