/**
 * @fileoverview added by tsickle
 * Generated from: modal-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ConfigurableFocusTrapFactory } from '@angular/cdk/a11y';
import { OverlayRef } from '@angular/cdk/overlay';
import { CdkPortalOutlet } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Optional, Renderer2, ViewChild } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { nzModalAnimations } from './modal-animations';
import { BaseModalContainer } from './modal-container';
import { ModalOptions } from './modal-types';
var NzModalContainerComponent = /** @class */ (function (_super) {
    __extends(NzModalContainerComponent, _super);
    function NzModalContainerComponent(elementRef, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType) {
        var _this = _super.call(this, elementRef, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType) || this;
        _this.config = config;
        return _this;
    }
    NzModalContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-modal-container',
                    exportAs: 'nzModalContainer',
                    template: "\n    <div\n      #modalElement\n      role=\"document\"\n      class=\"ant-modal\"\n      (mousedown)=\"onMousedown()\"\n      [ngClass]=\"config.nzClassName!\"\n      [ngStyle]=\"config.nzStyle!\"\n      [style.width]=\"config?.nzWidth! | nzToCssUnit\"\n    >\n      <div class=\"ant-modal-content\">\n        <button *ngIf=\"config.nzClosable\" nz-modal-close (click)=\"onCloseClick()\"></button>\n        <div *ngIf=\"config.nzTitle\" nz-modal-title></div>\n        <div class=\"ant-modal-body\" [ngStyle]=\"config.nzBodyStyle!\">\n          <ng-template cdkPortalOutlet></ng-template>\n          <div *ngIf=\"isStringContent\" [innerHTML]=\"config.nzContent\"></div>\n        </div>\n        <div\n          *ngIf=\"config.nzFooter !== null\"\n          nz-modal-footer\n          [modalRef]=\"modalRef\"\n          (cancelTriggered)=\"onCloseClick()\"\n          (okTriggered)=\"onOkClick()\"\n        ></div>\n      </div>\n    </div>\n  ",
                    animations: [nzModalAnimations.modalContainer],
                    // Using OnPush for modal caused footer can not to detect changes. we can fix it when 8.x.
                    changeDetection: ChangeDetectionStrategy.Default,
                    host: {
                        tabindex: '-1',
                        role: 'dialog',
                        '[class]': 'config.nzWrapClassName ? "ant-modal-wrap " + config.nzWrapClassName : "ant-modal-wrap"',
                        '[style.zIndex]': 'config.nzZIndex',
                        '[@.disabled]': 'config.nzNoAnimation',
                        '[@modalContainer]': 'state',
                        '(@modalContainer.start)': 'onAnimationStart($event)',
                        '(@modalContainer.done)': 'onAnimationDone($event)',
                        '(click)': 'onContainerClick($event)',
                        '(mouseup)': 'onMouseup()'
                    }
                }] }
    ];
    /** @nocollapse */
    NzModalContainerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ConfigurableFocusTrapFactory },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: OverlayRef },
        { type: NzConfigService },
        { type: ModalOptions },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
    ]; };
    NzModalContainerComponent.propDecorators = {
        portalOutlet: [{ type: ViewChild, args: [CdkPortalOutlet, { static: true },] }],
        modalElementRef: [{ type: ViewChild, args: ['modalElement', { static: true },] }]
    };
    return NzModalContainerComponent;
}(BaseModalContainer));
export { NzModalContainerComponent };
if (false) {
    /** @type {?} */
    NzModalContainerComponent.prototype.portalOutlet;
    /** @type {?} */
    NzModalContainerComponent.prototype.modalElementRef;
    /** @type {?} */
    NzModalContainerComponent.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbW9kYWwvIiwic291cmNlcyI6WyJtb2RhbC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUksT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0M7SUE4QytDLDZDQUFrQjtJQUcvRCxtQ0FDRSxVQUFzQixFQUN0QixnQkFBOEMsRUFDOUMsR0FBc0IsRUFDdEIsTUFBaUIsRUFDakIsVUFBc0IsRUFDdEIsZUFBZ0MsRUFDekIsTUFBb0IsRUFDRyxRQUFtQixFQUNOLGFBQXFCO1FBVGxFLFlBV0Usa0JBQU0sVUFBVSxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLGFBQWEsQ0FBQyxTQUMvRztRQUxRLFlBQU0sR0FBTixNQUFNLENBQWM7O0lBSzdCLENBQUM7O2dCQTdERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLG03QkEwQlQ7b0JBQ0QsVUFBVSxFQUFFLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDOztvQkFFOUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE9BQU87b0JBQ2hELElBQUksRUFBRTt3QkFDSixRQUFRLEVBQUUsSUFBSTt3QkFDZCxJQUFJLEVBQUUsUUFBUTt3QkFDZCxTQUFTLEVBQUUsd0ZBQXdGO3dCQUNuRyxnQkFBZ0IsRUFBRSxpQkFBaUI7d0JBQ25DLGNBQWMsRUFBRSxzQkFBc0I7d0JBQ3RDLG1CQUFtQixFQUFFLE9BQU87d0JBQzVCLHlCQUF5QixFQUFFLDBCQUEwQjt3QkFDckQsd0JBQXdCLEVBQUUseUJBQXlCO3dCQUNuRCxTQUFTLEVBQUUsMEJBQTBCO3dCQUNyQyxXQUFXLEVBQUUsYUFBYTtxQkFDM0I7aUJBQ0Y7Ozs7Z0JBdEQrRCxVQUFVO2dCQUpqRSw0QkFBNEI7Z0JBSUgsaUJBQWlCO2dCQUEyQyxTQUFTO2dCQUg5RixVQUFVO2dCQUtWLGVBQWU7Z0JBS2YsWUFBWTtnREEyRGhCLFFBQVEsWUFBSSxNQUFNLFNBQUMsUUFBUTs2Q0FDM0IsUUFBUSxZQUFJLE1BQU0sU0FBQyxxQkFBcUI7OzsrQkFYMUMsU0FBUyxTQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7a0NBQzNDLFNBQVMsU0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQWM3QyxnQ0FBQztDQUFBLEFBOURELENBOEMrQyxrQkFBa0IsR0FnQmhFO1NBaEJZLHlCQUF5Qjs7O0lBQ3BDLGlEQUE2RTs7SUFDN0Usb0RBQTBGOztJQVF4RiwyQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDb25maWd1cmFibGVGb2N1c1RyYXBGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENka1BvcnRhbE91dGxldCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdCwgT3B0aW9uYWwsIFJlbmRlcmVyMiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBTklNQVRJT05fTU9EVUxFX1RZUEUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBuek1vZGFsQW5pbWF0aW9ucyB9IGZyb20gJy4vbW9kYWwtYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBCYXNlTW9kYWxDb250YWluZXIgfSBmcm9tICcuL21vZGFsLWNvbnRhaW5lcic7XG5pbXBvcnQgeyBNb2RhbE9wdGlvbnMgfSBmcm9tICcuL21vZGFsLXR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotbW9kYWwtY29udGFpbmVyJyxcbiAgZXhwb3J0QXM6ICduek1vZGFsQ29udGFpbmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2XG4gICAgICAjbW9kYWxFbGVtZW50XG4gICAgICByb2xlPVwiZG9jdW1lbnRcIlxuICAgICAgY2xhc3M9XCJhbnQtbW9kYWxcIlxuICAgICAgKG1vdXNlZG93bik9XCJvbk1vdXNlZG93bigpXCJcbiAgICAgIFtuZ0NsYXNzXT1cImNvbmZpZy5uekNsYXNzTmFtZSFcIlxuICAgICAgW25nU3R5bGVdPVwiY29uZmlnLm56U3R5bGUhXCJcbiAgICAgIFtzdHlsZS53aWR0aF09XCJjb25maWc/Lm56V2lkdGghIHwgbnpUb0Nzc1VuaXRcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtbW9kYWwtY29udGVudFwiPlxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwiY29uZmlnLm56Q2xvc2FibGVcIiBuei1tb2RhbC1jbG9zZSAoY2xpY2spPVwib25DbG9zZUNsaWNrKClcIj48L2J1dHRvbj5cbiAgICAgICAgPGRpdiAqbmdJZj1cImNvbmZpZy5uelRpdGxlXCIgbnotbW9kYWwtdGl0bGU+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtbW9kYWwtYm9keVwiIFtuZ1N0eWxlXT1cImNvbmZpZy5uekJvZHlTdHlsZSFcIj5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgY2RrUG9ydGFsT3V0bGV0PjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgPGRpdiAqbmdJZj1cImlzU3RyaW5nQ29udGVudFwiIFtpbm5lckhUTUxdPVwiY29uZmlnLm56Q29udGVudFwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgICpuZ0lmPVwiY29uZmlnLm56Rm9vdGVyICE9PSBudWxsXCJcbiAgICAgICAgICBuei1tb2RhbC1mb290ZXJcbiAgICAgICAgICBbbW9kYWxSZWZdPVwibW9kYWxSZWZcIlxuICAgICAgICAgIChjYW5jZWxUcmlnZ2VyZWQpPVwib25DbG9zZUNsaWNrKClcIlxuICAgICAgICAgIChva1RyaWdnZXJlZCk9XCJvbk9rQ2xpY2soKVwiXG4gICAgICAgID48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBhbmltYXRpb25zOiBbbnpNb2RhbEFuaW1hdGlvbnMubW9kYWxDb250YWluZXJdLFxuICAvLyBVc2luZyBPblB1c2ggZm9yIG1vZGFsIGNhdXNlZCBmb290ZXIgY2FuIG5vdCB0byBkZXRlY3QgY2hhbmdlcy4gd2UgY2FuIGZpeCBpdCB3aGVuIDgueC5cbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0LFxuICBob3N0OiB7XG4gICAgdGFiaW5kZXg6ICctMScsXG4gICAgcm9sZTogJ2RpYWxvZycsXG4gICAgJ1tjbGFzc10nOiAnY29uZmlnLm56V3JhcENsYXNzTmFtZSA/IFwiYW50LW1vZGFsLXdyYXAgXCIgKyBjb25maWcubnpXcmFwQ2xhc3NOYW1lIDogXCJhbnQtbW9kYWwtd3JhcFwiJyxcbiAgICAnW3N0eWxlLnpJbmRleF0nOiAnY29uZmlnLm56WkluZGV4JyxcbiAgICAnW0AuZGlzYWJsZWRdJzogJ2NvbmZpZy5uek5vQW5pbWF0aW9uJyxcbiAgICAnW0Btb2RhbENvbnRhaW5lcl0nOiAnc3RhdGUnLFxuICAgICcoQG1vZGFsQ29udGFpbmVyLnN0YXJ0KSc6ICdvbkFuaW1hdGlvblN0YXJ0KCRldmVudCknLFxuICAgICcoQG1vZGFsQ29udGFpbmVyLmRvbmUpJzogJ29uQW5pbWF0aW9uRG9uZSgkZXZlbnQpJyxcbiAgICAnKGNsaWNrKSc6ICdvbkNvbnRhaW5lckNsaWNrKCRldmVudCknLFxuICAgICcobW91c2V1cCknOiAnb25Nb3VzZXVwKCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpNb2RhbENvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIEJhc2VNb2RhbENvbnRhaW5lciB7XG4gIEBWaWV3Q2hpbGQoQ2RrUG9ydGFsT3V0bGV0LCB7IHN0YXRpYzogdHJ1ZSB9KSBwb3J0YWxPdXRsZXQhOiBDZGtQb3J0YWxPdXRsZXQ7XG4gIEBWaWV3Q2hpbGQoJ21vZGFsRWxlbWVudCcsIHsgc3RhdGljOiB0cnVlIH0pIG1vZGFsRWxlbWVudFJlZiE6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBjb25zdHJ1Y3RvcihcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIGZvY3VzVHJhcEZhY3Rvcnk6IENvbmZpZ3VyYWJsZUZvY3VzVHJhcEZhY3RvcnksXG4gICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICByZW5kZXI6IFJlbmRlcmVyMixcbiAgICBvdmVybGF5UmVmOiBPdmVybGF5UmVmLFxuICAgIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHB1YmxpYyBjb25maWc6IE1vZGFsT3B0aW9ucyxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudDogTnpTYWZlQW55LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQU5JTUFUSU9OX01PRFVMRV9UWVBFKSBhbmltYXRpb25UeXBlOiBzdHJpbmdcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgZm9jdXNUcmFwRmFjdG9yeSwgY2RyLCByZW5kZXIsIG92ZXJsYXlSZWYsIG56Q29uZmlnU2VydmljZSwgY29uZmlnLCBkb2N1bWVudCwgYW5pbWF0aW9uVHlwZSk7XG4gIH1cbn1cbiJdfQ==