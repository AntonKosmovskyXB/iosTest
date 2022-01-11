/**
 * @fileoverview added by tsickle
 * Generated from: alert.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { slideAlertMotion } from 'ng-zorro-antd/core/animation';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'alert';
var NzAlertComponent = /** @class */ (function () {
    function NzAlertComponent(nzConfigService, cdr) {
        var _this = this;
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.nzCloseText = null;
        this.nzIconType = null;
        this.nzMessage = null;
        this.nzDescription = null;
        this.nzType = 'info';
        this.nzCloseable = false;
        this.nzShowIcon = false;
        this.nzBanner = false;
        this.nzNoAnimation = false;
        this.nzOnClose = new EventEmitter();
        this.closed = false;
        this.iconTheme = 'fill';
        this.inferredIconType = 'info-circle';
        this.isTypeSet = false;
        this.isShowIconSet = false;
        this.destroy$ = new Subject();
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    NzAlertComponent.prototype.closeAlert = /**
     * @return {?}
     */
    function () {
        this.closed = true;
    };
    /**
     * @return {?}
     */
    NzAlertComponent.prototype.onFadeAnimationDone = /**
     * @return {?}
     */
    function () {
        if (this.closed) {
            this.nzOnClose.emit(true);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzAlertComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzShowIcon = changes.nzShowIcon, nzDescription = changes.nzDescription, nzType = changes.nzType, nzBanner = changes.nzBanner;
        if (nzShowIcon) {
            this.isShowIconSet = true;
        }
        if (nzType) {
            this.isTypeSet = true;
            switch (this.nzType) {
                case 'error':
                    this.inferredIconType = 'close-circle';
                    break;
                case 'success':
                    this.inferredIconType = 'check-circle';
                    break;
                case 'info':
                    this.inferredIconType = 'info-circle';
                    break;
                case 'warning':
                    this.inferredIconType = 'exclamation-circle';
                    break;
            }
        }
        if (nzDescription) {
            this.iconTheme = this.nzDescription ? 'outline' : 'fill';
        }
        if (nzBanner) {
            if (!this.isTypeSet) {
                this.nzType = 'warning';
            }
            if (!this.isShowIconSet) {
                this.nzShowIcon = true;
            }
        }
    };
    /**
     * @return {?}
     */
    NzAlertComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzAlertComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-alert',
                    exportAs: 'nzAlert',
                    animations: [slideAlertMotion],
                    template: "\n    <div\n      *ngIf=\"!closed\"\n      class=\"ant-alert\"\n      [class.ant-alert-success]=\"nzType === 'success'\"\n      [class.ant-alert-info]=\"nzType === 'info'\"\n      [class.ant-alert-warning]=\"nzType === 'warning'\"\n      [class.ant-alert-error]=\"nzType === 'error'\"\n      [class.ant-alert-no-icon]=\"!nzShowIcon\"\n      [class.ant-alert-banner]=\"nzBanner\"\n      [class.ant-alert-closable]=\"nzCloseable\"\n      [class.ant-alert-with-description]=\"!!nzDescription\"\n      [@.disabled]=\"nzNoAnimation\"\n      [@slideAlertMotion]\n      (@slideAlertMotion.done)=\"onFadeAnimationDone()\"\n    >\n      <ng-container *ngIf=\"nzShowIcon\">\n        <i nz-icon class=\"ant-alert-icon\" [nzType]=\"nzIconType || inferredIconType\" [nzTheme]=\"iconTheme\"></i>\n      </ng-container>\n      <span class=\"ant-alert-message\" *ngIf=\"nzMessage\">\n        <ng-container *nzStringTemplateOutlet=\"nzMessage\">{{ nzMessage }}</ng-container>\n      </span>\n      <span class=\"ant-alert-description\" *ngIf=\"nzDescription\">\n        <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\n      </span>\n      <button type=\"button\" tabindex=\"0\" *ngIf=\"nzCloseable || nzCloseText\" class=\"ant-alert-close-icon\" (click)=\"closeAlert()\">\n        <ng-template #closeDefaultTemplate>\n          <i nz-icon nzType=\"close\"></i>\n        </ng-template>\n        <ng-container *ngIf=\"nzCloseText; else closeDefaultTemplate\">\n          <ng-container *nzStringTemplateOutlet=\"nzCloseText\">\n            <span class=\"ant-alert-close-text\">{{ nzCloseText }}</span>\n          </ng-container>\n        </ng-container>\n      </button>\n    </div>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    NzAlertComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: ChangeDetectorRef }
    ]; };
    NzAlertComponent.propDecorators = {
        nzCloseText: [{ type: Input }],
        nzIconType: [{ type: Input }],
        nzMessage: [{ type: Input }],
        nzDescription: [{ type: Input }],
        nzType: [{ type: Input }],
        nzCloseable: [{ type: Input }],
        nzShowIcon: [{ type: Input }],
        nzBanner: [{ type: Input }],
        nzNoAnimation: [{ type: Input }],
        nzOnClose: [{ type: Output }]
    };
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzAlertComponent.prototype, "nzCloseable", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzAlertComponent.prototype, "nzShowIcon", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzAlertComponent.prototype, "nzBanner", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzAlertComponent.prototype, "nzNoAnimation", void 0);
    return NzAlertComponent;
}());
export { NzAlertComponent };
if (false) {
    /** @type {?} */
    NzAlertComponent.ngAcceptInputType_nzCloseable;
    /** @type {?} */
    NzAlertComponent.ngAcceptInputType_nzShowIcon;
    /** @type {?} */
    NzAlertComponent.ngAcceptInputType_nzBanner;
    /** @type {?} */
    NzAlertComponent.ngAcceptInputType_nzNoAnimation;
    /** @type {?} */
    NzAlertComponent.prototype.nzCloseText;
    /** @type {?} */
    NzAlertComponent.prototype.nzIconType;
    /** @type {?} */
    NzAlertComponent.prototype.nzMessage;
    /** @type {?} */
    NzAlertComponent.prototype.nzDescription;
    /** @type {?} */
    NzAlertComponent.prototype.nzType;
    /** @type {?} */
    NzAlertComponent.prototype.nzCloseable;
    /** @type {?} */
    NzAlertComponent.prototype.nzShowIcon;
    /** @type {?} */
    NzAlertComponent.prototype.nzBanner;
    /** @type {?} */
    NzAlertComponent.prototype.nzNoAnimation;
    /** @type {?} */
    NzAlertComponent.prototype.nzOnClose;
    /** @type {?} */
    NzAlertComponent.prototype.closed;
    /** @type {?} */
    NzAlertComponent.prototype.iconTheme;
    /** @type {?} */
    NzAlertComponent.prototype.inferredIconType;
    /**
     * @type {?}
     * @private
     */
    NzAlertComponent.prototype.isTypeSet;
    /**
     * @type {?}
     * @private
     */
    NzAlertComponent.prototype.isShowIconSet;
    /**
     * @type {?}
     * @private
     */
    NzAlertComponent.prototype.destroy$;
    /** @type {?} */
    NzAlertComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzAlertComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9hbGVydC8iLCJzb3VyY2VzIjpbImFsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXhFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFFckMsd0JBQXdCLEdBQUcsT0FBTztBQUV4QztJQW9FRSwwQkFBbUIsZUFBZ0MsRUFBVSxHQUFzQjtRQUFuRixpQkFPQztRQVBrQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWpCMUUsZ0JBQVcsR0FBc0MsSUFBSSxDQUFDO1FBQ3RELGVBQVUsR0FBa0IsSUFBSSxDQUFDO1FBQ2pDLGNBQVMsR0FBc0MsSUFBSSxDQUFDO1FBQ3BELGtCQUFhLEdBQXNDLElBQUksQ0FBQztRQUN4RCxXQUFNLEdBQTZDLE1BQU0sQ0FBQztRQUNKLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDbEUsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUM1QixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUMzRCxXQUFNLEdB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Q0wsS0FBSzs0QkFDTCxNQUFNOztJQUp3RDtRQUFyRCxVQUFVLENBQUMsd0JBQXdCLENBQUMsRUFBRSxZQUFZLEVBQUU7O3lEQUE4QjtJQUM3QjtRQUFyRCxVQUFVLENBQUMsd0JBQXdCLENBQUMsRUFBRSxZQUFZLEVBQUU7O3dEQUE2QjtJQUNsRTtRQUFmLFlBQVksRUFBRTs7c0RBQWtCO0lBQ2pCO1FBQWYsWUFBWSxFQUFFOzsyREFBdUI7SUFrRWpELHVCQUFDO0NBQUEsQUE3SEQsSUE2SEM7U0FoRlksZ0JBQWdCOzs7SUFDM0IsK0NBQW1EOztJQUNuRCw4Q0FBa0Q7O0lBQ2xELDRDQUFnRDs7SUFDaEQsaURBQXFEOztJQUVyRCx1Q0FBK0Q7O0lBQy9ELHNDQUEwQzs7SUFDMUMscUNBQTZEOztJQUM3RCx5Q0FBaUU7O0lBQ2pFLGtDQUFtRTs7SUFDbkUsdUNBQTRGOztJQUM1RixzQ0FBMkY7O0lBQzNGLG9DQUEwQzs7SUFDMUMseUNBQStDOztJQUMvQyxxQ0FBMkQ7O0lBQzNELGtDQUFlOztJQUNmLHFDQUF1Qzs7SUFDdkMsNENBQXlDOzs7OztJQUN6QyxxQ0FBMEI7Ozs7O0lBQzFCLHlDQUE4Qjs7Ozs7SUFDOUIsb0NBQWlDOztJQUVyQiwyQ0FBdUM7Ozs7O0lBQUUsK0JBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNsaWRlQWxlcnRNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvYW5pbWF0aW9uJztcbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2FsZXJ0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotYWxlcnQnLFxuICBleHBvcnRBczogJ256QWxlcnQnLFxuICBhbmltYXRpb25zOiBbc2xpZGVBbGVydE1vdGlvbl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgKm5nSWY9XCIhY2xvc2VkXCJcbiAgICAgIGNsYXNzPVwiYW50LWFsZXJ0XCJcbiAgICAgIFtjbGFzcy5hbnQtYWxlcnQtc3VjY2Vzc109XCJuelR5cGUgPT09ICdzdWNjZXNzJ1wiXG4gICAgICBbY2xhc3MuYW50LWFsZXJ0LWluZm9dPVwibnpUeXBlID09PSAnaW5mbydcIlxuICAgICAgW2NsYXNzLmFudC1hbGVydC13YXJuaW5nXT1cIm56VHlwZSA9PT0gJ3dhcm5pbmcnXCJcbiAgICAgIFtjbGFzcy5hbnQtYWxlcnQtZXJyb3JdPVwibnpUeXBlID09PSAnZXJyb3InXCJcbiAgICAgIFtjbGFzcy5hbnQtYWxlcnQtbm8taWNvbl09XCIhbnpTaG93SWNvblwiXG4gICAgICBbY2xhc3MuYW50LWFsZXJ0LWJhbm5lcl09XCJuekJhbm5lclwiXG4gICAgICBbY2xhc3MuYW50LWFsZXJ0LWNsb3NhYmxlXT1cIm56Q2xvc2VhYmxlXCJcbiAgICAgIFtjbGFzcy5hbnQtYWxlcnQtd2l0aC1kZXNjcmlwdGlvbl09XCIhIW56RGVzY3JpcHRpb25cIlxuICAgICAgW0AuZGlzYWJsZWRdPVwibnpOb0FuaW1hdGlvblwiXG4gICAgICBbQHNsaWRlQWxlcnRNb3Rpb25dXG4gICAgICAoQHNsaWRlQWxlcnRNb3Rpb24uZG9uZSk9XCJvbkZhZGVBbmltYXRpb25Eb25lKClcIlxuICAgID5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuelNob3dJY29uXCI+XG4gICAgICAgIDxpIG56LWljb24gY2xhc3M9XCJhbnQtYWxlcnQtaWNvblwiIFtuelR5cGVdPVwibnpJY29uVHlwZSB8fCBpbmZlcnJlZEljb25UeXBlXCIgW256VGhlbWVdPVwiaWNvblRoZW1lXCI+PC9pPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8c3BhbiBjbGFzcz1cImFudC1hbGVydC1tZXNzYWdlXCIgKm5nSWY9XCJuek1lc3NhZ2VcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56TWVzc2FnZVwiPnt7IG56TWVzc2FnZSB9fTwvbmctY29udGFpbmVyPlxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtYWxlcnQtZGVzY3JpcHRpb25cIiAqbmdJZj1cIm56RGVzY3JpcHRpb25cIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56RGVzY3JpcHRpb25cIj57eyBuekRlc2NyaXB0aW9uIH19PC9uZy1jb250YWluZXI+XG4gICAgICA8L3NwYW4+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB0YWJpbmRleD1cIjBcIiAqbmdJZj1cIm56Q2xvc2VhYmxlIHx8IG56Q2xvc2VUZXh0XCIgY2xhc3M9XCJhbnQtYWxlcnQtY2xvc2UtaWNvblwiIChjbGljayk9XCJjbG9zZUFsZXJ0KClcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNjbG9zZURlZmF1bHRUZW1wbGF0ZT5cbiAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImNsb3NlXCI+PC9pPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpDbG9zZVRleHQ7IGVsc2UgY2xvc2VEZWZhdWx0VGVtcGxhdGVcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpDbG9zZVRleHRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LWFsZXJ0LWNsb3NlLXRleHRcIj57eyBuekNsb3NlVGV4dCB9fTwvc3Bhbj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIE56QWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekNsb3NlYWJsZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTaG93SWNvbjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpCYW5uZXI6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256Tm9BbmltYXRpb246IEJvb2xlYW5JbnB1dDtcblxuICBASW5wdXQoKSBuekNsb3NlVGV4dDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpJY29uVHlwZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56TWVzc2FnZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpEZXNjcmlwdGlvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpUeXBlOiAnc3VjY2VzcycgfCAnaW5mbycgfCAnd2FybmluZycgfCAnZXJyb3InID0gJ2luZm8nO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIEBJbnB1dEJvb2xlYW4oKSBuekNsb3NlYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dJY29uOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekJhbm5lciA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpOb0FuaW1hdGlvbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBjbG9zZWQgPSBmYWxzZTtcbiAgaWNvblRoZW1lOiAnb3V0bGluZScgfCAnZmlsbCcgPSAnZmlsbCc7XG4gIGluZmVycmVkSWNvblR5cGU6IHN0cmluZyA9ICdpbmZvLWNpcmNsZSc7XG4gIHByaXZhdGUgaXNUeXBlU2V0ID0gZmFsc2U7XG4gIHByaXZhdGUgaXNTaG93SWNvblNldCA9IGZhbHNlO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlXG4gICAgICAuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gIH1cblxuICBjbG9zZUFsZXJ0KCk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgfVxuXG4gIG9uRmFkZUFuaW1hdGlvbkRvbmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICB0aGlzLm56T25DbG9zZS5lbWl0KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG56U2hvd0ljb24sIG56RGVzY3JpcHRpb24sIG56VHlwZSwgbnpCYW5uZXIgfSA9IGNoYW5nZXM7XG4gICAgaWYgKG56U2hvd0ljb24pIHtcbiAgICAgIHRoaXMuaXNTaG93SWNvblNldCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChuelR5cGUpIHtcbiAgICAgIHRoaXMuaXNUeXBlU2V0ID0gdHJ1ZTtcbiAgICAgIHN3aXRjaCAodGhpcy5uelR5cGUpIHtcbiAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgIHRoaXMuaW5mZXJyZWRJY29uVHlwZSA9ICdjbG9zZS1jaXJjbGUnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgICB0aGlzLmluZmVycmVkSWNvblR5cGUgPSAnY2hlY2stY2lyY2xlJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICAgICAgdGhpcy5pbmZlcnJlZEljb25UeXBlID0gJ2luZm8tY2lyY2xlJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnd2FybmluZyc6XG4gICAgICAgICAgdGhpcy5pbmZlcnJlZEljb25UeXBlID0gJ2V4Y2xhbWF0aW9uLWNpcmNsZSc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChuekRlc2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmljb25UaGVtZSA9IHRoaXMubnpEZXNjcmlwdGlvbiA/ICdvdXRsaW5lJyA6ICdmaWxsJztcbiAgICB9XG4gICAgaWYgKG56QmFubmVyKSB7XG4gICAgICBpZiAoIXRoaXMuaXNUeXBlU2V0KSB7XG4gICAgICAgIHRoaXMubnpUeXBlID0gJ3dhcm5pbmcnO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmlzU2hvd0ljb25TZXQpIHtcbiAgICAgICAgdGhpcy5uelNob3dJY29uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=