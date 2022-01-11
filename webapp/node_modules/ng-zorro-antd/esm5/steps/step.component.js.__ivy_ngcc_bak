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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
var NzStepComponent = /** @class */ (function () {
    function NzStepComponent(cdr) {
        this.cdr = cdr;
        this.nzDisabled = false;
        this.isCustomStatus = false;
        this._status = 'wait';
        this.oldAPIIcon = true;
        // Set by parent.
        this.direction = 'horizontal';
        this.index = 0;
        this.last = false;
        this.outStatus = 'process';
        this.showProcessDot = false;
        this.clickable = false;
        this.click$ = new Subject();
        this._currentIndex = 0;
    }
    Object.defineProperty(NzStepComponent.prototype, "nzStatus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._status;
        },
        set: /**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            this._status = status;
            this.isCustomStatus = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzStepComponent.prototype, "nzIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return this._icon;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!(value instanceof TemplateRef)) {
                this.oldAPIIcon = typeof value === 'string' && value.indexOf('anticon') > -1;
            }
            else {
            }
            this._icon = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzStepComponent.prototype, "currentIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentIndex;
        },
        set: /**
         * @param {?} current
         * @return {?}
         */
        function (current) {
            this._currentIndex = current;
            if (!this.isCustomStatus) {
                this._status = current > this.index ? 'finish' : current === this.index ? this.outStatus || '' : 'wait';
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzStepComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.clickable && this.currentIndex !== this.index && !this.nzDisabled) {
            this.click$.next(this.index);
        }
    };
    /**
     * @return {?}
     */
    NzStepComponent.prototype.markForCheck = /**
     * @return {?}
     */
    function () {
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzStepComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.click$.complete();
    };
    NzStepComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-step',
                    exportAs: 'nzStep',
                    preserveWhitespaces: false,
                    template: "\n    <div\n      class=\"ant-steps-item-container\"\n      [attr.role]=\"clickable && !nzDisabled ? 'button' : null\"\n      [tabindex]=\"clickable && !nzDisabled ? 0 : null\"\n      (click)=\"onClick()\"\n    >\n      <div class=\"ant-steps-item-tail\" *ngIf=\"last !== true\"></div>\n      <div class=\"ant-steps-item-icon\">\n        <ng-template [ngIf]=\"!showProcessDot\">\n          <span class=\"ant-steps-icon\" *ngIf=\"nzStatus === 'finish' && !nzIcon\"><i nz-icon nzType=\"check\"></i></span>\n          <span class=\"ant-steps-icon\" *ngIf=\"nzStatus === 'error'\"><i nz-icon nzType=\"close\"></i></span>\n          <span class=\"ant-steps-icon\" *ngIf=\"(nzStatus === 'process' || nzStatus === 'wait') && !nzIcon\">{{ index + 1 }}</span>\n          <span class=\"ant-steps-icon\" *ngIf=\"nzIcon\">\n            <ng-container *nzStringTemplateOutlet=\"nzIcon; let icon\">\n              <i nz-icon [nzType]=\"!oldAPIIcon && icon\" [ngClass]=\"oldAPIIcon && icon\"></i>\n            </ng-container>\n          </span>\n        </ng-template>\n        <ng-template [ngIf]=\"showProcessDot\">\n          <span class=\"ant-steps-icon\">\n            <ng-template #processDotTemplate>\n              <span class=\"ant-steps-icon-dot\"></span>\n            </ng-template>\n            <ng-template\n              [ngTemplateOutlet]=\"customProcessTemplate || processDotTemplate\"\n              [ngTemplateOutletContext]=\"{\n                $implicit: processDotTemplate,\n                status: nzStatus,\n                index: index\n              }\"\n            >\n            </ng-template>\n          </span>\n        </ng-template>\n      </div>\n      <div class=\"ant-steps-item-content\">\n        <div class=\"ant-steps-item-title\">\n          <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n          <div *ngIf=\"nzSubtitle\" class=\"ant-steps-item-subtitle\">\n            <ng-container *nzStringTemplateOutlet=\"nzSubtitle\">{{ nzSubtitle }}</ng-container>\n          </div>\n        </div>\n        <div class=\"ant-steps-item-description\">\n          <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\n        </div>\n      </div>\n    </div>\n  ",
                    host: {
                        class: 'ant-steps-item',
                        '[class.ant-steps-item-wait]': 'nzStatus === "wait"',
                        '[class.ant-steps-item-process]': 'nzStatus === "process"',
                        '[class.ant-steps-item-finish]': 'nzStatus === "finish"',
                        '[class.ant-steps-item-error]': 'nzStatus === "error"',
                        '[class.ant-steps-item-active]': 'currentIndex === index',
                        '[class.ant-steps-item-disabled]': 'nzDisabled',
                        '[class.ant-steps-item-custom]': '!!nzIcon',
                        '[class.ant-steps-next-error]': '(outStatus === "error") && (currentIndex === index + 1)'
                    }
                }] }
    ];
    /** @nocollapse */
    NzStepComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    NzStepComponent.propDecorators = {
        processDotTemplate: [{ type: ViewChild, args: ['processDotTemplate', { static: false },] }],
        nzTitle: [{ type: Input }],
        nzSubtitle: [{ type: Input }],
        nzDescription: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzStatus: [{ type: Input }],
        nzIcon: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzStepComponent.prototype, "nzDisabled", void 0);
    return NzStepComponent;
}());
export { NzStepComponent };
if (false) {
    /** @type {?} */
    NzStepComponent.ngAcceptInputType_nzDisabled;
    /** @type {?} */
    NzStepComponent.prototype.processDotTemplate;
    /** @type {?} */
    NzStepComponent.prototype.nzTitle;
    /** @type {?} */
    NzStepComponent.prototype.nzSubtitle;
    /** @type {?} */
    NzStepComponent.prototype.nzDescription;
    /** @type {?} */
    NzStepComponent.prototype.nzDisabled;
    /** @type {?} */
    NzStepComponent.prototype.isCustomStatus;
    /**
     * @type {?}
     * @private
     */
    NzStepComponent.prototype._status;
    /** @type {?} */
    NzStepComponent.prototype.oldAPIIcon;
    /**
     * @type {?}
     * @private
     */
    NzStepComponent.prototype._icon;
    /** @type {?} */
    NzStepComponent.prototype.customProcessTemplate;
    /** @type {?} */
    NzStepComponent.prototype.direction;
    /** @type {?} */
    NzStepComponent.prototype.index;
    /** @type {?} */
    NzStepComponent.prototype.last;
    /** @type {?} */
    NzStepComponent.prototype.outStatus;
    /** @type {?} */
    NzStepComponent.prototype.showProcessDot;
    /** @type {?} */
    NzStepComponent.prototype.clickable;
    /** @type {?} */
    NzStepComponent.prototype.click$;
    /**
     * @type {?}
     * @private
     */
    NzStepComponent.prototype._currentIndex;
    /**
     * @type {?}
     * @private
     */
    NzStepComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3N0ZXBzLyIsInNvdXJjZXMiOlsic3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEVBRUwsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXZELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0I7SUFnSUUseUJBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBckRqQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBWTVDLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ2YsWUFBTyxHQUFHLE1BQU0sQ0FBQztRQWV6QixlQUFVLEdBQUcsSUFBSSxDQUFDOztRQUlsQixjQUFTLEdBQUcsWUFBWSxDQUFDO1FBQ3pCLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUN0QixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLFdBQU0sR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBYXZCLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO0lBRW1CLENBQUM7SUFuRDlDLHNCQUNJLHFDQUFROzs7O1FBRFo7WUFFRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzs7Ozs7UUFFRCxVQUFhLE1BQWM7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDdEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDN0IsQ0FBQzs7O09B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RWhELGdEQUFxRzs7SUFDckcsb0NBQXlCOztJQUN6QixnQ0FBVTs7SUFDViwrQkFBYTs7SUFDYixvQ0FBc0I7O0lBQ3RCLHlDQUF1Qjs7SUFDdkIsb0NBQWtCOztJQUNsQixpQ0FBK0I7Ozs7O0lBYS9CLHdDQUEwQjs7Ozs7SUFFZCw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE5nQ2xhc3NUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotc3RlcCcsXG4gIGV4cG9ydEFzOiAnbnpTdGVwJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJhbnQtc3RlcHMtaXRlbS1jb250YWluZXJcIlxuICAgICAgW2F0dHIucm9sZV09XCJjbGlja2FibGUgJiYgIW56RGlzYWJsZWQgPyAnYnV0dG9uJyA6IG51bGxcIlxuICAgICAgW3RhYmluZGV4XT1cImNsaWNrYWJsZSAmJiAhbnpEaXNhYmxlZCA/IDAgOiBudWxsXCJcbiAgICAgIChjbGljayk9XCJvbkNsaWNrKClcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtc3RlcHMtaXRlbS10YWlsXCIgKm5nSWY9XCJsYXN0ICE9PSB0cnVlXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LXN0ZXBzLWl0ZW0taWNvblwiPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwiIXNob3dQcm9jZXNzRG90XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtc3RlcHMtaWNvblwiICpuZ0lmPVwibnpTdGF0dXMgPT09ICdmaW5pc2gnICYmICFuekljb25cIj48aSBuei1pY29uIG56VHlwZT1cImNoZWNrXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImFudC1zdGVwcy1pY29uXCIgKm5nSWY9XCJuelN0YXR1cyA9PT0gJ2Vycm9yJ1wiPjxpIG56LWljb24gbnpUeXBlPVwiY2xvc2VcIj48L2k+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXN0ZXBzLWljb25cIiAqbmdJZj1cIihuelN0YXR1cyA9PT0gJ3Byb2Nlc3MnIHx8IG56U3RhdHVzID09PSAnd2FpdCcpICYmICFuekljb25cIj57eyBpbmRleCArIDEgfX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtc3RlcHMtaWNvblwiICpuZ0lmPVwibnpJY29uXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpJY29uOyBsZXQgaWNvblwiPlxuICAgICAgICAgICAgICA8aSBuei1pY29uIFtuelR5cGVdPVwiIW9sZEFQSUljb24gJiYgaWNvblwiIFtuZ0NsYXNzXT1cIm9sZEFQSUljb24gJiYgaWNvblwiPjwvaT5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cInNob3dQcm9jZXNzRG90XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtc3RlcHMtaWNvblwiPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNwcm9jZXNzRG90VGVtcGxhdGU+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXN0ZXBzLWljb24tZG90XCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21Qcm9jZXNzVGVtcGxhdGUgfHwgcHJvY2Vzc0RvdFRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntcbiAgICAgICAgICAgICAgICAkaW1wbGljaXQ6IHByb2Nlc3NEb3RUZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IG56U3RhdHVzLFxuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LXN0ZXBzLWl0ZW0tY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXN0ZXBzLWl0ZW0tdGl0bGVcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpUaXRsZVwiPnt7IG56VGl0bGUgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwibnpTdWJ0aXRsZVwiIGNsYXNzPVwiYW50LXN0ZXBzLWl0ZW0tc3VidGl0bGVcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuelN1YnRpdGxlXCI+e3sgbnpTdWJ0aXRsZSB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC1zdGVwcy1pdGVtLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56RGVzY3JpcHRpb25cIj57eyBuekRlc2NyaXB0aW9uIH19PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FudC1zdGVwcy1pdGVtJyxcbiAgICAnW2NsYXNzLmFudC1zdGVwcy1pdGVtLXdhaXRdJzogJ256U3RhdHVzID09PSBcIndhaXRcIicsXG4gICAgJ1tjbGFzcy5hbnQtc3RlcHMtaXRlbS1wcm9jZXNzXSc6ICduelN0YXR1cyA9PT0gXCJwcm9jZXNzXCInLFxuICAgICdbY2xhc3MuYW50LXN0ZXBzLWl0ZW0tZmluaXNoXSc6ICduelN0YXR1cyA9PT0gXCJmaW5pc2hcIicsXG4gICAgJ1tjbGFzcy5hbnQtc3RlcHMtaXRlbS1lcnJvcl0nOiAnbnpTdGF0dXMgPT09IFwiZXJyb3JcIicsXG4gICAgJ1tjbGFzcy5hbnQtc3RlcHMtaXRlbS1hY3RpdmVdJzogJ2N1cnJlbnRJbmRleCA9PT0gaW5kZXgnLFxuICAgICdbY2xhc3MuYW50LXN0ZXBzLWl0ZW0tZGlzYWJsZWRdJzogJ256RGlzYWJsZWQnLFxuICAgICdbY2xhc3MuYW50LXN0ZXBzLWl0ZW0tY3VzdG9tXSc6ICchIW56SWNvbicsXG4gICAgJ1tjbGFzcy5hbnQtc3RlcHMtbmV4dC1lcnJvcl0nOiAnKG91dFN0YXR1cyA9PT0gXCJlcnJvclwiKSAmJiAoY3VycmVudEluZGV4ID09PSBpbmRleCArIDEpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56U3RlcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekRpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG5cbiAgQFZpZXdDaGlsZCgncHJvY2Vzc0RvdFRlbXBsYXRlJywgeyBzdGF0aWM6IGZhbHNlIH0pIHByb2Nlc3NEb3RUZW1wbGF0ZT86IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpIG56VGl0bGU/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpTdWJ0aXRsZT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuekRlc2NyaXB0aW9uPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZ2V0IG56U3RhdHVzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXR1cztcbiAgfVxuXG4gIHNldCBuelN0YXR1cyhzdGF0dXM6IHN0cmluZykge1xuICAgIHRoaXMuX3N0YXR1cyA9IHN0YXR1cztcbiAgICB0aGlzLmlzQ3VzdG9tU3RhdHVzID0gdHJ1ZTtcbiAgfVxuXG4gIGlzQ3VzdG9tU3RhdHVzID0gZmFsc2U7XG4gIHByaXZhdGUgX3N0YXR1cyA9ICd3YWl0JztcblxuICBASW5wdXQoKVxuICBnZXQgbnpJY29uKCk6IE5nQ2xhc3NUeXBlIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pY29uO1xuICB9XG5cbiAgc2V0IG56SWNvbih2YWx1ZTogTmdDbGFzc1R5cGUgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICghKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpKSB7XG4gICAgICB0aGlzLm9sZEFQSUljb24gPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluZGV4T2YoJ2FudGljb24nKSA+IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgfVxuICAgIHRoaXMuX2ljb24gPSB2YWx1ZTtcbiAgfVxuXG4gIG9sZEFQSUljb24gPSB0cnVlO1xuICBwcml2YXRlIF9pY29uPzogTmdDbGFzc1R5cGUgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBjdXN0b21Qcm9jZXNzVGVtcGxhdGU/OiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogVGVtcGxhdGVSZWY8dm9pZD47IHN0YXR1czogc3RyaW5nOyBpbmRleDogbnVtYmVyIH0+OyAvLyBTZXQgYnkgcGFyZW50LlxuICBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG4gIGluZGV4ID0gMDtcbiAgbGFzdCA9IGZhbHNlO1xuICBvdXRTdGF0dXMgPSAncHJvY2Vzcyc7XG4gIHNob3dQcm9jZXNzRG90ID0gZmFsc2U7XG4gIGNsaWNrYWJsZSA9IGZhbHNlO1xuICBjbGljayQgPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG5cbiAgZ2V0IGN1cnJlbnRJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50SW5kZXg7XG4gIH1cblxuICBzZXQgY3VycmVudEluZGV4KGN1cnJlbnQ6IG51bWJlcikge1xuICAgIHRoaXMuX2N1cnJlbnRJbmRleCA9IGN1cnJlbnQ7XG4gICAgaWYgKCF0aGlzLmlzQ3VzdG9tU3RhdHVzKSB7XG4gICAgICB0aGlzLl9zdGF0dXMgPSBjdXJyZW50ID4gdGhpcy5pbmRleCA/ICdmaW5pc2gnIDogY3VycmVudCA9PT0gdGhpcy5pbmRleCA/IHRoaXMub3V0U3RhdHVzIHx8ICcnIDogJ3dhaXQnO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2N1cnJlbnRJbmRleCA9IDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xpY2thYmxlICYmIHRoaXMuY3VycmVudEluZGV4ICE9PSB0aGlzLmluZGV4ICYmICF0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY2xpY2skLm5leHQodGhpcy5pbmRleCk7XG4gICAgfVxuICB9XG5cbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGljayQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19