/**
 * @fileoverview added by tsickle
 * Generated from: badge.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ContentObserver } from '@angular/cdk/observers';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, NgZone, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { zoomBadgeMotion } from 'ng-zorro-antd/core/animation';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { InputBoolean, isEmpty } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { startWith, take, takeUntil } from 'rxjs/operators';
import { badgePresetColors } from './preset-colors';
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'backTop';
var NzBadgeComponent = /** @class */ (function () {
    function NzBadgeComponent(nzConfigService, renderer, elementRef, contentObserver, cdr, ngZone) {
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.contentObserver = contentObserver;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.destroy$ = new Subject();
        this.notWrapper = true;
        this.viewInit = false;
        this.maxNumberArray = [];
        this.countArray = [];
        this.countSingleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.presetColor = null;
        this.count = 0;
        this.nzShowZero = false;
        this.nzShowDot = true;
        this.nzDot = false;
        this.nzOverflowCount = 99;
        this.nzColor = undefined;
        this.nzStyle = null;
    }
    /**
     * @return {?}
     */
    NzBadgeComponent.prototype.checkContent = /**
     * @return {?}
     */
    function () {
        var _a;
        this.notWrapper = isEmpty((_a = this.contentElement) === null || _a === void 0 ? void 0 : _a.nativeElement);
        if (this.notWrapper) {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
    };
    Object.defineProperty(NzBadgeComponent.prototype, "showSup", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.nzShowDot && this.nzDot) || this.count > 0 || (this.count === 0 && this.nzShowZero);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzBadgeComponent.prototype.generateMaxNumberArray = /**
     * @return {?}
     */
    function () {
        this.maxNumberArray = this.nzOverflowCount.toString().split('');
    };
    /**
     * @return {?}
     */
    NzBadgeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.generateMaxNumberArray();
    };
    /**
     * @return {?}
     */
    NzBadgeComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.onStable.pipe(take(1)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.viewInit = true;
            _this.cdr.detectChanges();
        }));
        this.contentObserver
            .observe((/** @type {?} */ (this.contentElement)))
            .pipe(startWith(true), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.checkContent();
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzBadgeComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzOverflowCount = changes.nzOverflowCount, nzCount = changes.nzCount, nzColor = changes.nzColor;
        if (nzCount && !(nzCount.currentValue instanceof TemplateRef)) {
            this.count = Math.max(0, nzCount.currentValue);
            this.countArray = this.count
                .toString()
                .split('')
                .map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return +item; }));
        }
        if (nzOverflowCount) {
            this.generateMaxNumberArray();
        }
        if (nzColor) {
            this.presetColor = this.nzColor && badgePresetColors.indexOf(this.nzColor) !== -1 ? this.nzColor : null;
        }
    };
    /**
     * @return {?}
     */
    NzBadgeComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzBadgeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-badge',
                    exportAs: 'nzBadge',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    animations: [zoomBadgeMotion],
                    template: "\n    <span #contentElement><ng-content></ng-content></span>\n    <span\n      class=\"ant-badge-status-dot ant-badge-status-{{ nzStatus || presetColor }}\"\n      [style.background]=\"!presetColor && nzColor\"\n      *ngIf=\"nzStatus || nzColor\"\n      [ngStyle]=\"nzStyle\"\n    ></span>\n    <span class=\"ant-badge-status-text\" *ngIf=\"nzStatus || nzColor\">{{ nzText }}</span>\n    <ng-container *nzStringTemplateOutlet=\"nzCount\">\n      <sup\n        class=\"ant-scroll-number\"\n        *ngIf=\"showSup && viewInit\"\n        [@.disabled]=\"notWrapper\"\n        [@zoomBadgeMotion]\n        [ngStyle]=\"nzStyle\"\n        [attr.title]=\"nzTitle === null ? '' : nzTitle || nzCount\"\n        [style.right.px]=\"nzOffset && nzOffset[0] ? -nzOffset[0] : null\"\n        [style.marginTop.px]=\"nzOffset && nzOffset[1] ? nzOffset[1] : null\"\n        [class.ant-badge-count]=\"!nzDot\"\n        [class.ant-badge-dot]=\"nzDot\"\n        [class.ant-badge-multiple-words]=\"countArray.length >= 2\"\n      >\n        <ng-container *ngFor=\"let n of maxNumberArray; let i = index\">\n          <span\n            class=\"ant-scroll-number-only\"\n            *ngIf=\"count <= nzOverflowCount\"\n            [style.transform]=\"'translateY(' + -countArray[i] * 100 + '%)'\"\n          >\n            <ng-container *ngIf=\"!nzDot && countArray[i] !== undefined\">\n              <p *ngFor=\"let p of countSingleArray\" class=\"ant-scroll-number-only-unit\" [class.current]=\"p === countArray[i]\">\n                {{ p }}\n              </p>\n            </ng-container>\n          </span>\n        </ng-container>\n        <ng-container *ngIf=\"count > nzOverflowCount\">{{ nzOverflowCount }}+</ng-container>\n      </sup>\n    </ng-container>\n  ",
                    host: {
                        class: 'ant-badge',
                        '[class.ant-badge-status]': 'nzStatus'
                    }
                }] }
    ];
    /** @nocollapse */
    NzBadgeComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: Renderer2 },
        { type: ElementRef },
        { type: ContentObserver },
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
    NzBadgeComponent.propDecorators = {
        contentElement: [{ type: ViewChild, args: ['contentElement', { static: false },] }],
        nzShowZero: [{ type: Input }],
        nzShowDot: [{ type: Input }],
        nzDot: [{ type: Input }],
        nzOverflowCount: [{ type: Input }],
        nzColor: [{ type: Input }],
        nzStyle: [{ type: Input }],
        nzText: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzStatus: [{ type: Input }],
        nzCount: [{ type: Input }],
        nzOffset: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzBadgeComponent.prototype, "nzShowZero", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzBadgeComponent.prototype, "nzShowDot", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzBadgeComponent.prototype, "nzDot", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", Number)
    ], NzBadgeComponent.prototype, "nzOverflowCount", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", String)
    ], NzBadgeComponent.prototype, "nzColor", void 0);
    return NzBadgeComponent;
}());
export { NzBadgeComponent };
if (false) {
    /** @type {?} */
    NzBadgeComponent.ngAcceptInputType_nzShowZero;
    /** @type {?} */
    NzBadgeComponent.ngAcceptInputType_nzShowDot;
    /** @type {?} */
    NzBadgeComponent.ngAcceptInputType_nzDot;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.destroy$;
    /** @type {?} */
    NzBadgeComponent.prototype.notWrapper;
    /** @type {?} */
    NzBadgeComponent.prototype.viewInit;
    /** @type {?} */
    NzBadgeComponent.prototype.maxNumberArray;
    /** @type {?} */
    NzBadgeComponent.prototype.countArray;
    /** @type {?} */
    NzBadgeComponent.prototype.countSingleArray;
    /** @type {?} */
    NzBadgeComponent.prototype.presetColor;
    /** @type {?} */
    NzBadgeComponent.prototype.count;
    /** @type {?} */
    NzBadgeComponent.prototype.contentElement;
    /** @type {?} */
    NzBadgeComponent.prototype.nzShowZero;
    /** @type {?} */
    NzBadgeComponent.prototype.nzShowDot;
    /** @type {?} */
    NzBadgeComponent.prototype.nzDot;
    /** @type {?} */
    NzBadgeComponent.prototype.nzOverflowCount;
    /** @type {?} */
    NzBadgeComponent.prototype.nzColor;
    /** @type {?} */
    NzBadgeComponent.prototype.nzStyle;
    /** @type {?} */
    NzBadgeComponent.prototype.nzText;
    /** @type {?} */
    NzBadgeComponent.prototype.nzTitle;
    /** @type {?} */
    NzBadgeComponent.prototype.nzStatus;
    /** @type {?} */
    NzBadgeComponent.prototype.nzCount;
    /** @type {?} */
    NzBadgeComponent.prototype.nzOffset;
    /** @type {?} */
    NzBadgeComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.contentObserver;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9iYWRnZS8iLCJzb3VyY2VzIjpbImJhZGdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFJTixTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztJQUc5Qyx3QkFBd0IsR0FBRyxTQUFTO0FBRTFDO0lBK0ZFLDBCQUNTLGVBQWdDLEVBQy9CLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ3RCLGVBQWdDLEVBQ2hDLEdBQXNCLEVBQ3RCLE1BQWM7UUFMZixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBNUNo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ZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENvbnRlbnRPYnNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vYnNlcnZlcnMnO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB6b29tQmFkZ2VNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvYW5pbWF0aW9uJztcbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBpc0VtcHR5IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCB0YWtlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGJhZGdlUHJlc2V0Q29sb3JzIH0gZnJvbSAnLi9wcmVzZXQtY29sb3JzJztcbmltcG9ydCB7IE56QmFkZ2VTdGF0dXNUeXBlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdiYWNrVG9wJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotYmFkZ2UnLFxuICBleHBvcnRBczogJ256QmFkZ2UnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGFuaW1hdGlvbnM6IFt6b29tQmFkZ2VNb3Rpb25dLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzcGFuICNjb250ZW50RWxlbWVudD48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9zcGFuPlxuICAgIDxzcGFuXG4gICAgICBjbGFzcz1cImFudC1iYWRnZS1zdGF0dXMtZG90IGFudC1iYWRnZS1zdGF0dXMte3sgbnpTdGF0dXMgfHwgcHJlc2V0Q29sb3IgfX1cIlxuICAgICAgW3N0eWxlLmJhY2tncm91bmRdPVwiIXByZXNldENvbG9yICYmIG56Q29sb3JcIlxuICAgICAgKm5nSWY9XCJuelN0YXR1cyB8fCBuekNvbG9yXCJcbiAgICAgIFtuZ1N0eWxlXT1cIm56U3R5bGVcIlxuICAgID48L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJhbnQtYmFkZ2Utc3RhdHVzLXRleHRcIiAqbmdJZj1cIm56U3RhdHVzIHx8IG56Q29sb3JcIj57eyBuelRleHQgfX08L3NwYW4+XG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56Q291bnRcIj5cbiAgICAgIDxzdXBcbiAgICAgICAgY2xhc3M9XCJhbnQtc2Nyb2xsLW51bWJlclwiXG4gICAgICAgICpuZ0lmPVwic2hvd1N1cCAmJiB2aWV3SW5pdFwiXG4gICAgICAgIFtALmRpc2FibGVkXT1cIm5vdFdyYXBwZXJcIlxuICAgICAgICBbQHpvb21CYWRnZU1vdGlvbl1cbiAgICAgICAgW25nU3R5bGVdPVwibnpTdHlsZVwiXG4gICAgICAgIFthdHRyLnRpdGxlXT1cIm56VGl0bGUgPT09IG51bGwgPyAnJyA6IG56VGl0bGUgfHwgbnpDb3VudFwiXG4gICAgICAgIFtzdHlsZS5yaWdodC5weF09XCJuek9mZnNldCAmJiBuek9mZnNldFswXSA/IC1uek9mZnNldFswXSA6IG51bGxcIlxuICAgICAgICBbc3R5bGUubWFyZ2luVG9wLnB4XT1cIm56T2Zmc2V0ICYmIG56T2Zmc2V0WzFdID8gbnpPZmZzZXRbMV0gOiBudWxsXCJcbiAgICAgICAgW2NsYXNzLmFudC1iYWRnZS1jb3VudF09XCIhbnpEb3RcIlxuICAgICAgICBbY2xhc3MuYW50LWJhZGdlLWRvdF09XCJuekRvdFwiXG4gICAgICAgIFtjbGFzcy5hbnQtYmFkZ2UtbXVsdGlwbGUtd29yZHNdPVwiY291bnRBcnJheS5sZW5ndGggPj0gMlwiXG4gICAgICA+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG4gb2YgbWF4TnVtYmVyQXJyYXk7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3M9XCJhbnQtc2Nyb2xsLW51bWJlci1vbmx5XCJcbiAgICAgICAgICAgICpuZ0lmPVwiY291bnQgPD0gbnpPdmVyZmxvd0NvdW50XCJcbiAgICAgICAgICAgIFtzdHlsZS50cmFuc2Zvcm1dPVwiJ3RyYW5zbGF0ZVkoJyArIC1jb3VudEFycmF5W2ldICogMTAwICsgJyUpJ1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFuekRvdCAmJiBjb3VudEFycmF5W2ldICE9PSB1bmRlZmluZWRcIj5cbiAgICAgICAgICAgICAgPHAgKm5nRm9yPVwibGV0IHAgb2YgY291bnRTaW5nbGVBcnJheVwiIGNsYXNzPVwiYW50LXNjcm9sbC1udW1iZXItb25seS11bml0XCIgW2NsYXNzLmN1cnJlbnRdPVwicCA9PT0gY291bnRBcnJheVtpXVwiPlxuICAgICAgICAgICAgICAgIHt7IHAgfX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvdW50ID4gbnpPdmVyZmxvd0NvdW50XCI+e3sgbnpPdmVyZmxvd0NvdW50IH19KzwvbmctY29udGFpbmVyPlxuICAgICAgPC9zdXA+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FudC1iYWRnZScsXG4gICAgJ1tjbGFzcy5hbnQtYmFkZ2Utc3RhdHVzXSc6ICduelN0YXR1cydcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekJhZGdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNob3daZXJvOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNob3dEb3Q6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RG90OiBCb29sZWFuSW5wdXQ7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIG5vdFdyYXBwZXIgPSB0cnVlO1xuICB2aWV3SW5pdCA9IGZhbHNlO1xuICBtYXhOdW1iZXJBcnJheTogc3RyaW5nW10gPSBbXTtcbiAgY291bnRBcnJheTogbnVtYmVyW10gPSBbXTtcbiAgY291bnRTaW5nbGVBcnJheSA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XTtcbiAgcHJlc2V0Q29sb3I6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBjb3VudDogbnVtYmVyID0gMDtcbiAgQFZpZXdDaGlsZCgnY29udGVudEVsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgY29udGVudEVsZW1lbnQ/OiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93WmVybzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93RG90ID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RG90ID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgbnpPdmVyZmxvd0NvdW50OiBudW1iZXIgPSA5OTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBuekNvbG9yPzogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBASW5wdXQoKSBuelN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56VGV4dD86IHN0cmluZztcbiAgQElucHV0KCkgbnpUaXRsZT86IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIG56U3RhdHVzPzogTnpCYWRnZVN0YXR1c1R5cGUgfCBzdHJpbmc7XG4gIEBJbnB1dCgpIG56Q291bnQ/OiBudW1iZXIgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+O1xuICBASW5wdXQoKSBuek9mZnNldD86IFtudW1iZXIsIG51bWJlcl07XG5cbiAgY2hlY2tDb250ZW50KCk6IHZvaWQge1xuICAgIHRoaXMubm90V3JhcHBlciA9IGlzRW1wdHkodGhpcy5jb250ZW50RWxlbWVudD8ubmF0aXZlRWxlbWVudCk7XG4gICAgaWYgKHRoaXMubm90V3JhcHBlcikge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1iYWRnZS1ub3QtYS13cmFwcGVyJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtYmFkZ2Utbm90LWEtd3JhcHBlcicpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzaG93U3VwKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAodGhpcy5uelNob3dEb3QgJiYgdGhpcy5uekRvdCkgfHwgdGhpcy5jb3VudCA+IDAgfHwgKHRoaXMuY291bnQgPT09IDAgJiYgdGhpcy5uelNob3daZXJvKTtcbiAgfVxuXG4gIGdlbmVyYXRlTWF4TnVtYmVyQXJyYXkoKTogdm9pZCB7XG4gICAgdGhpcy5tYXhOdW1iZXJBcnJheSA9IHRoaXMubnpPdmVyZmxvd0NvdW50LnRvU3RyaW5nKCkuc3BsaXQoJycpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjb250ZW50T2JzZXJ2ZXI6IENvbnRlbnRPYnNlcnZlcixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5nZW5lcmF0ZU1heE51bWJlckFycmF5KCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUub25TdGFibGUucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy52aWV3SW5pdCA9IHRydWU7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbnRlbnRPYnNlcnZlclxuICAgICAgLm9ic2VydmUodGhpcy5jb250ZW50RWxlbWVudCEpXG4gICAgICAucGlwZShzdGFydFdpdGgodHJ1ZSksIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmNoZWNrQ29udGVudCgpO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuek92ZXJmbG93Q291bnQsIG56Q291bnQsIG56Q29sb3IgfSA9IGNoYW5nZXM7XG4gICAgaWYgKG56Q291bnQgJiYgIShuekNvdW50LmN1cnJlbnRWYWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSkge1xuICAgICAgdGhpcy5jb3VudCA9IE1hdGgubWF4KDAsIG56Q291bnQuY3VycmVudFZhbHVlKTtcbiAgICAgIHRoaXMuY291bnRBcnJheSA9IHRoaXMuY291bnRcbiAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgLnNwbGl0KCcnKVxuICAgICAgICAubWFwKGl0ZW0gPT4gK2l0ZW0pO1xuICAgIH1cbiAgICBpZiAobnpPdmVyZmxvd0NvdW50KSB7XG4gICAgICB0aGlzLmdlbmVyYXRlTWF4TnVtYmVyQXJyYXkoKTtcbiAgICB9XG4gICAgaWYgKG56Q29sb3IpIHtcbiAgICAgIHRoaXMucHJlc2V0Q29sb3IgPSB0aGlzLm56Q29sb3IgJiYgYmFkZ2VQcmVzZXRDb2xvcnMuaW5kZXhPZih0aGlzLm56Q29sb3IpICE9PSAtMSA/IHRoaXMubnpDb2xvciA6IG51bGw7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=