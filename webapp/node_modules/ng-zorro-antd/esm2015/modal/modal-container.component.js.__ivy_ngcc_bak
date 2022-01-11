/**
 * @fileoverview added by tsickle
 * Generated from: modal-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class NzModalContainerComponent extends BaseModalContainer {
    /**
     * @param {?} elementRef
     * @param {?} focusTrapFactory
     * @param {?} cdr
     * @param {?} render
     * @param {?} overlayRef
     * @param {?} nzConfigService
     * @param {?} config
     * @param {?} document
     * @param {?} animationType
     */
    constructor(elementRef, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType) {
        super(elementRef, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType);
        this.config = config;
    }
}
NzModalContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-modal-container',
                exportAs: 'nzModalContainer',
                template: `
    <div
      #modalElement
      role="document"
      class="ant-modal"
      (mousedown)="onMousedown()"
      [ngClass]="config.nzClassName!"
      [ngStyle]="config.nzStyle!"
      [style.width]="config?.nzWidth! | nzToCssUnit"
    >
      <div class="ant-modal-content">
        <button *ngIf="config.nzClosable" nz-modal-close (click)="onCloseClick()"></button>
        <div *ngIf="config.nzTitle" nz-modal-title></div>
        <div class="ant-modal-body" [ngStyle]="config.nzBodyStyle!">
          <ng-template cdkPortalOutlet></ng-template>
          <div *ngIf="isStringContent" [innerHTML]="config.nzContent"></div>
        </div>
        <div
          *ngIf="config.nzFooter !== null"
          nz-modal-footer
          [modalRef]="modalRef"
          (cancelTriggered)="onCloseClick()"
          (okTriggered)="onOkClick()"
        ></div>
      </div>
    </div>
  `,
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
NzModalContainerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ConfigurableFocusTrapFactory },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: OverlayRef },
    { type: NzConfigService },
    { type: ModalOptions },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
];
NzModalContainerComponent.propDecorators = {
    portalOutlet: [{ type: ViewChild, args: [CdkPortalOutlet, { static: true },] }],
    modalElementRef: [{ type: ViewChild, args: ['modalElement', { static: true },] }]
};
if (false) {
    /** @type {?} */
    NzModalContainerComponent.prototype.portalOutlet;
    /** @type {?} */
    NzModalContainerComponent.prototype.modalElementRef;
    /** @type {?} */
    NzModalContainerComponent.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbW9kYWwvIiwic291cmNlcyI6WyJtb2RhbC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxSSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWdEN0MsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGtCQUFrQjs7Ozs7Ozs7Ozs7O0lBRy9ELFlBQ0UsVUFBc0IsRUFDdEIsZ0JBQThDLEVBQzlDLEdBQXNCLEVBQ3RCLE1BQWlCLEVBQ2pCLFVBQXNCLEVBQ3RCLGVBQWdDLEVBQ3pCLE1BQW9CLEVBQ0csUUFBbUIsRUFDTixhQUFxQjtRQUVoRSxLQUFLLENBQUMsVUFBVSxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBSnhHLFdBQU0sR0FBTixNQUFNLENBQWM7SUFLN0IsQ0FBQzs7O1lBN0RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMEJUO2dCQUNELFVBQVUsRUFBRSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQzs7Z0JBRTlDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxPQUFPO2dCQUNoRCxJQUFJLEVBQUU7b0JBQ0osUUFBUSxFQUFFLElBQUk7b0JBQ2QsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsU0FBUyxFQUFFLHdGQUF3RjtvQkFDbkcsZ0JBQWdCLEVBQUUsaUJBQWlCO29CQUNuQyxjQUFjLEVBQUUsc0JBQXNCO29CQUN0QyxtQkFBbUIsRUFBRSxPQUFPO29CQUM1Qix5QkFBeUIsRUFBRSwwQkFBMEI7b0JBQ3JELHdCQUF3QixFQUFFLHlCQUF5QjtvQkFDbkQsU0FBUyxFQUFFLDBCQUEwQjtvQkFDckMsV0FBVyxFQUFFLGFBQWE7aUJBQzNCO2FBQ0Y7Ozs7WUF0RCtELFVBQVU7WUFKakUsNEJBQTRCO1lBSUgsaUJBQWlCO1lBQTJDLFNBQVM7WUFIOUYsVUFBVTtZQUtWLGVBQWU7WUFLZixZQUFZOzRDQTJEaEIsUUFBUSxZQUFJLE1BQU0sU0FBQyxRQUFRO3lDQUMzQixRQUFRLFlBQUksTUFBTSxTQUFDLHFCQUFxQjs7OzJCQVgxQyxTQUFTLFNBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs4QkFDM0MsU0FBUyxTQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7SUFEM0MsaURBQTZFOztJQUM3RSxvREFBMEY7O0lBUXhGLDJDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENvbmZpZ3VyYWJsZUZvY3VzVHJhcEZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ2RrUG9ydGFsT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBPcHRpb25hbCwgUmVuZGVyZXIyLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFOSU1BVElPTl9NT0RVTEVfVFlQRSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IG56TW9kYWxBbmltYXRpb25zIH0gZnJvbSAnLi9tb2RhbC1hbmltYXRpb25zJztcbmltcG9ydCB7IEJhc2VNb2RhbENvbnRhaW5lciB9IGZyb20gJy4vbW9kYWwtY29udGFpbmVyJztcbmltcG9ydCB7IE1vZGFsT3B0aW9ucyB9IGZyb20gJy4vbW9kYWwtdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1tb2RhbC1jb250YWluZXInLFxuICBleHBvcnRBczogJ256TW9kYWxDb250YWluZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgICNtb2RhbEVsZW1lbnRcbiAgICAgIHJvbGU9XCJkb2N1bWVudFwiXG4gICAgICBjbGFzcz1cImFudC1tb2RhbFwiXG4gICAgICAobW91c2Vkb3duKT1cIm9uTW91c2Vkb3duKClcIlxuICAgICAgW25nQ2xhc3NdPVwiY29uZmlnLm56Q2xhc3NOYW1lIVwiXG4gICAgICBbbmdTdHlsZV09XCJjb25maWcubnpTdHlsZSFcIlxuICAgICAgW3N0eWxlLndpZHRoXT1cImNvbmZpZz8ubnpXaWR0aCEgfCBuelRvQ3NzVW5pdFwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cImFudC1tb2RhbC1jb250ZW50XCI+XG4gICAgICAgIDxidXR0b24gKm5nSWY9XCJjb25maWcubnpDbG9zYWJsZVwiIG56LW1vZGFsLWNsb3NlIChjbGljayk9XCJvbkNsb3NlQ2xpY2soKVwiPjwvYnV0dG9uPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiY29uZmlnLm56VGl0bGVcIiBuei1tb2RhbC10aXRsZT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC1tb2RhbC1ib2R5XCIgW25nU3R5bGVdPVwiY29uZmlnLm56Qm9keVN0eWxlIVwiPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBjZGtQb3J0YWxPdXRsZXQ+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXNTdHJpbmdDb250ZW50XCIgW2lubmVySFRNTF09XCJjb25maWcubnpDb250ZW50XCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgKm5nSWY9XCJjb25maWcubnpGb290ZXIgIT09IG51bGxcIlxuICAgICAgICAgIG56LW1vZGFsLWZvb3RlclxuICAgICAgICAgIFttb2RhbFJlZl09XCJtb2RhbFJlZlwiXG4gICAgICAgICAgKGNhbmNlbFRyaWdnZXJlZCk9XCJvbkNsb3NlQ2xpY2soKVwiXG4gICAgICAgICAgKG9rVHJpZ2dlcmVkKT1cIm9uT2tDbGljaygpXCJcbiAgICAgICAgPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGFuaW1hdGlvbnM6IFtuek1vZGFsQW5pbWF0aW9ucy5tb2RhbENvbnRhaW5lcl0sXG4gIC8vIFVzaW5nIE9uUHVzaCBmb3IgbW9kYWwgY2F1c2VkIGZvb3RlciBjYW4gbm90IHRvIGRldGVjdCBjaGFuZ2VzLiB3ZSBjYW4gZml4IGl0IHdoZW4gOC54LlxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHQsXG4gIGhvc3Q6IHtcbiAgICB0YWJpbmRleDogJy0xJyxcbiAgICByb2xlOiAnZGlhbG9nJyxcbiAgICAnW2NsYXNzXSc6ICdjb25maWcubnpXcmFwQ2xhc3NOYW1lID8gXCJhbnQtbW9kYWwtd3JhcCBcIiArIGNvbmZpZy5ueldyYXBDbGFzc05hbWUgOiBcImFudC1tb2RhbC13cmFwXCInLFxuICAgICdbc3R5bGUuekluZGV4XSc6ICdjb25maWcubnpaSW5kZXgnLFxuICAgICdbQC5kaXNhYmxlZF0nOiAnY29uZmlnLm56Tm9BbmltYXRpb24nLFxuICAgICdbQG1vZGFsQ29udGFpbmVyXSc6ICdzdGF0ZScsXG4gICAgJyhAbW9kYWxDb250YWluZXIuc3RhcnQpJzogJ29uQW5pbWF0aW9uU3RhcnQoJGV2ZW50KScsXG4gICAgJyhAbW9kYWxDb250YWluZXIuZG9uZSknOiAnb25BbmltYXRpb25Eb25lKCRldmVudCknLFxuICAgICcoY2xpY2spJzogJ29uQ29udGFpbmVyQ2xpY2soJGV2ZW50KScsXG4gICAgJyhtb3VzZXVwKSc6ICdvbk1vdXNldXAoKSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOek1vZGFsQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgQmFzZU1vZGFsQ29udGFpbmVyIHtcbiAgQFZpZXdDaGlsZChDZGtQb3J0YWxPdXRsZXQsIHsgc3RhdGljOiB0cnVlIH0pIHBvcnRhbE91dGxldCE6IENka1BvcnRhbE91dGxldDtcbiAgQFZpZXdDaGlsZCgnbW9kYWxFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgbW9kYWxFbGVtZW50UmVmITogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgZm9jdXNUcmFwRmFjdG9yeTogQ29uZmlndXJhYmxlRm9jdXNUcmFwRmFjdG9yeSxcbiAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHJlbmRlcjogUmVuZGVyZXIyLFxuICAgIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYsXG4gICAgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHVibGljIGNvbmZpZzogTW9kYWxPcHRpb25zLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIGRvY3VtZW50OiBOelNhZmVBbnksXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBTklNQVRJT05fTU9EVUxFX1RZUEUpIGFuaW1hdGlvblR5cGU6IHN0cmluZ1xuICApIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCBmb2N1c1RyYXBGYWN0b3J5LCBjZHIsIHJlbmRlciwgb3ZlcmxheVJlZiwgbnpDb25maWdTZXJ2aWNlLCBjb25maWcsIGRvY3VtZW50LCBhbmltYXRpb25UeXBlKTtcbiAgfVxufVxuIl19