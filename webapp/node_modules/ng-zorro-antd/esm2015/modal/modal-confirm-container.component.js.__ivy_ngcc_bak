/**
 * @fileoverview added by tsickle
 * Generated from: modal-confirm-container.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Optional, Output, Renderer2, ViewChild } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { takeUntil } from 'rxjs/operators';
import { nzModalAnimations } from './modal-animations';
import { BaseModalContainer } from './modal-container';
import { ModalOptions } from './modal-types';
export class NzModalConfirmContainerComponent extends BaseModalContainer {
    /**
     * @param {?} i18n
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
    constructor(i18n, elementRef, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType) {
        super(elementRef, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType);
        this.i18n = i18n;
        this.config = config;
        this.cancelTriggered = new EventEmitter();
        this.okTriggered = new EventEmitter();
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getLocaleData('Modal');
        }));
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.cancelTriggered.emit();
    }
    /**
     * @return {?}
     */
    onOk() {
        this.okTriggered.emit();
    }
}
NzModalConfirmContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-modal-confirm-container',
                exportAs: 'nzModalConfirmContainer',
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
        <div class="ant-modal-body" [ngStyle]="config.nzBodyStyle!">
          <div class="ant-modal-confirm-body-wrapper">
            <div class="ant-modal-confirm-body">
              <i nz-icon [nzType]="config.nzIconType!"></i>
              <span class="ant-modal-confirm-title">
                <ng-container *nzStringTemplateOutlet="config.nzTitle">
                  <span [innerHTML]="config.nzTitle"></span>
                </ng-container>
              </span>
              <div class="ant-modal-confirm-content">
                <ng-template cdkPortalOutlet></ng-template>
                <div *ngIf="isStringContent" [innerHTML]="config.nzContent"></div>
              </div>
            </div>
            <div class="ant-modal-confirm-btns">
              <button
                *ngIf="config.nzCancelText !== null"
                [attr.cdkFocusInitial]="config.nzAutofocus === 'cancel' || null"
                nz-button
                (click)="onCancel()"
                [nzLoading]="!!config.nzCancelLoading"
                [disabled]="config.nzCancelDisabled"
              >
                {{ config.nzCancelText || locale.cancelText }}
              </button>
              <button
                *ngIf="config.nzOkText !== null"
                [attr.cdkFocusInitial]="config.nzAutofocus === 'ok' || null"
                nz-button
                [nzType]="config.nzOkType!"
                (click)="onOk()"
                [nzLoading]="!!config.nzOkLoading"
                [disabled]="config.nzOkDisabled"
              >
                {{ config.nzOkText || locale.okText }}
              </button>
            </div>
          </div>
        </div>
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
NzModalConfirmContainerComponent.ctorParameters = () => [
    { type: NzI18nService },
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
NzModalConfirmContainerComponent.propDecorators = {
    portalOutlet: [{ type: ViewChild, args: [CdkPortalOutlet, { static: true },] }],
    modalElementRef: [{ type: ViewChild, args: ['modalElement', { static: true },] }],
    cancelTriggered: [{ type: Output }],
    okTriggered: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NzModalConfirmContainerComponent.prototype.portalOutlet;
    /** @type {?} */
    NzModalConfirmContainerComponent.prototype.modalElementRef;
    /** @type {?} */
    NzModalConfirmContainerComponent.prototype.cancelTriggered;
    /** @type {?} */
    NzModalConfirmContainerComponent.prototype.okTriggered;
    /** @type {?} */
    NzModalConfirmContainerComponent.prototype.locale;
    /**
     * @type {?}
     * @private
     */
    NzModalConfirmContainerComponent.prototype.i18n;
    /** @type {?} */
    NzModalConfirmContainerComponent.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29uZmlybS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tb2RhbC8iLCJzb3VyY2VzIjpbIm1vZGFsLWNvbmZpcm0tY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUc1RCxPQUFPLEVBQUUsYUFBYSxFQUF3QixNQUFNLG9CQUFvQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBMkU3QyxNQUFNLE9BQU8sZ0NBQWlDLFNBQVEsa0JBQWtCOzs7Ozs7Ozs7Ozs7O0lBT3RFLFlBQ1UsSUFBbUIsRUFDM0IsVUFBc0IsRUFDdEIsZ0JBQThDLEVBQzlDLEdBQXNCLEVBQ3RCLE1BQWlCLEVBQ2pCLFVBQXNCLEVBQ3RCLGVBQWdDLEVBQ3pCLE1BQW9CLEVBQ0csUUFBbUIsRUFDTixhQUFxQjtRQUVoRSxLQUFLLENBQUMsVUFBVSxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBWHZHLFNBQUksR0FBSixJQUFJLENBQWU7UUFPcEIsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQVpWLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUMzQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFnQnhELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ25FLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakQsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7OztZQXhHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFEVDtnQkFDRCxVQUFVLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUM7O2dCQUU5QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsT0FBTztnQkFDaEQsSUFBSSxFQUFFO29CQUNKLFFBQVEsRUFBRSxJQUFJO29CQUNkLElBQUksRUFBRSxRQUFRO29CQUNkLFNBQVMsRUFBRSx3RkFBd0Y7b0JBQ25HLGdCQUFnQixFQUFFLGlCQUFpQjtvQkFDbkMsY0FBYyxFQUFFLHNCQUFzQjtvQkFDdEMsbUJBQW1CLEVBQUUsT0FBTztvQkFDNUIseUJBQXlCLEVBQUUsMEJBQTBCO29CQUNyRCx3QkFBd0IsRUFBRSx5QkFBeUI7b0JBQ25ELFNBQVMsRUFBRSwwQkFBMEI7b0JBQ3JDLFdBQVcsRUFBRSxhQUFhO2lCQUMzQjthQUNGOzs7O1lBaEZRLGFBQWE7WUFacEIsVUFBVTtZQVJILDRCQUE0QjtZQU1uQyxpQkFBaUI7WUFPakIsU0FBUztZQVpGLFVBQVU7WUFnQlYsZUFBZTtZQVNmLFlBQVk7NENBMkZoQixRQUFRLFlBQUksTUFBTSxTQUFDLFFBQVE7eUNBQzNCLFFBQVEsWUFBSSxNQUFNLFNBQUMscUJBQXFCOzs7MkJBaEIxQyxTQUFTLFNBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs4QkFDM0MsU0FBUyxTQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7OEJBQzFDLE1BQU07MEJBQ04sTUFBTTs7OztJQUhQLHdEQUE2RTs7SUFDN0UsMkRBQTBGOztJQUMxRiwyREFBOEQ7O0lBQzlELHVEQUEwRDs7SUFDMUQsa0RBQThCOzs7OztJQUc1QixnREFBMkI7O0lBTzNCLGtEQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENvbmZpZ3VyYWJsZUZvY3VzVHJhcEZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ2RrUG9ydGFsT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQU5JTUFUSU9OX01PRFVMRV9UWVBFIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgTnpJMThuU2VydmljZSwgTnpNb2RhbEkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IG56TW9kYWxBbmltYXRpb25zIH0gZnJvbSAnLi9tb2RhbC1hbmltYXRpb25zJztcbmltcG9ydCB7IEJhc2VNb2RhbENvbnRhaW5lciB9IGZyb20gJy4vbW9kYWwtY29udGFpbmVyJztcbmltcG9ydCB7IE1vZGFsT3B0aW9ucyB9IGZyb20gJy4vbW9kYWwtdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1tb2RhbC1jb25maXJtLWNvbnRhaW5lcicsXG4gIGV4cG9ydEFzOiAnbnpNb2RhbENvbmZpcm1Db250YWluZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgICNtb2RhbEVsZW1lbnRcbiAgICAgIHJvbGU9XCJkb2N1bWVudFwiXG4gICAgICBjbGFzcz1cImFudC1tb2RhbFwiXG4gICAgICAobW91c2Vkb3duKT1cIm9uTW91c2Vkb3duKClcIlxuICAgICAgW25nQ2xhc3NdPVwiY29uZmlnLm56Q2xhc3NOYW1lIVwiXG4gICAgICBbbmdTdHlsZV09XCJjb25maWcubnpTdHlsZSFcIlxuICAgICAgW3N0eWxlLndpZHRoXT1cImNvbmZpZz8ubnpXaWR0aCEgfCBuelRvQ3NzVW5pdFwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cImFudC1tb2RhbC1jb250ZW50XCI+XG4gICAgICAgIDxidXR0b24gKm5nSWY9XCJjb25maWcubnpDbG9zYWJsZVwiIG56LW1vZGFsLWNsb3NlIChjbGljayk9XCJvbkNsb3NlQ2xpY2soKVwiPjwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LW1vZGFsLWJvZHlcIiBbbmdTdHlsZV09XCJjb25maWcubnpCb2R5U3R5bGUhXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1tb2RhbC1jb25maXJtLWJvZHktd3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1tb2RhbC1jb25maXJtLWJvZHlcIj5cbiAgICAgICAgICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cImNvbmZpZy5uekljb25UeXBlIVwiPjwvaT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtbW9kYWwtY29uZmlybS10aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJjb25maWcubnpUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJjb25maWcubnpUaXRsZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LW1vZGFsLWNvbmZpcm0tY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBjZGtQb3J0YWxPdXRsZXQ+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXNTdHJpbmdDb250ZW50XCIgW2lubmVySFRNTF09XCJjb25maWcubnpDb250ZW50XCI+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LW1vZGFsLWNvbmZpcm0tYnRuc1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJjb25maWcubnpDYW5jZWxUZXh0ICE9PSBudWxsXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5jZGtGb2N1c0luaXRpYWxdPVwiY29uZmlnLm56QXV0b2ZvY3VzID09PSAnY2FuY2VsJyB8fCBudWxsXCJcbiAgICAgICAgICAgICAgICBuei1idXR0b25cbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DYW5jZWwoKVwiXG4gICAgICAgICAgICAgICAgW256TG9hZGluZ109XCIhIWNvbmZpZy5uekNhbmNlbExvYWRpbmdcIlxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJjb25maWcubnpDYW5jZWxEaXNhYmxlZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eyBjb25maWcubnpDYW5jZWxUZXh0IHx8IGxvY2FsZS5jYW5jZWxUZXh0IH19XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJjb25maWcubnpPa1RleHQgIT09IG51bGxcIlxuICAgICAgICAgICAgICAgIFthdHRyLmNka0ZvY3VzSW5pdGlhbF09XCJjb25maWcubnpBdXRvZm9jdXMgPT09ICdvaycgfHwgbnVsbFwiXG4gICAgICAgICAgICAgICAgbnotYnV0dG9uXG4gICAgICAgICAgICAgICAgW256VHlwZV09XCJjb25maWcubnpPa1R5cGUhXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib25PaygpXCJcbiAgICAgICAgICAgICAgICBbbnpMb2FkaW5nXT1cIiEhY29uZmlnLm56T2tMb2FkaW5nXCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiY29uZmlnLm56T2tEaXNhYmxlZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eyBjb25maWcubnpPa1RleHQgfHwgbG9jYWxlLm9rVGV4dCB9fVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBhbmltYXRpb25zOiBbbnpNb2RhbEFuaW1hdGlvbnMubW9kYWxDb250YWluZXJdLFxuICAvLyBVc2luZyBPblB1c2ggZm9yIG1vZGFsIGNhdXNlZCBmb290ZXIgY2FuIG5vdCB0byBkZXRlY3QgY2hhbmdlcy4gd2UgY2FuIGZpeCBpdCB3aGVuIDgueC5cbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0LFxuICBob3N0OiB7XG4gICAgdGFiaW5kZXg6ICctMScsXG4gICAgcm9sZTogJ2RpYWxvZycsXG4gICAgJ1tjbGFzc10nOiAnY29uZmlnLm56V3JhcENsYXNzTmFtZSA/IFwiYW50LW1vZGFsLXdyYXAgXCIgKyBjb25maWcubnpXcmFwQ2xhc3NOYW1lIDogXCJhbnQtbW9kYWwtd3JhcFwiJyxcbiAgICAnW3N0eWxlLnpJbmRleF0nOiAnY29uZmlnLm56WkluZGV4JyxcbiAgICAnW0AuZGlzYWJsZWRdJzogJ2NvbmZpZy5uek5vQW5pbWF0aW9uJyxcbiAgICAnW0Btb2RhbENvbnRhaW5lcl0nOiAnc3RhdGUnLFxuICAgICcoQG1vZGFsQ29udGFpbmVyLnN0YXJ0KSc6ICdvbkFuaW1hdGlvblN0YXJ0KCRldmVudCknLFxuICAgICcoQG1vZGFsQ29udGFpbmVyLmRvbmUpJzogJ29uQW5pbWF0aW9uRG9uZSgkZXZlbnQpJyxcbiAgICAnKGNsaWNrKSc6ICdvbkNvbnRhaW5lckNsaWNrKCRldmVudCknLFxuICAgICcobW91c2V1cCknOiAnb25Nb3VzZXVwKCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpNb2RhbENvbmZpcm1Db250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlTW9kYWxDb250YWluZXIge1xuICBAVmlld0NoaWxkKENka1BvcnRhbE91dGxldCwgeyBzdGF0aWM6IHRydWUgfSkgcG9ydGFsT3V0bGV0ITogQ2RrUG9ydGFsT3V0bGV0O1xuICBAVmlld0NoaWxkKCdtb2RhbEVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBtb2RhbEVsZW1lbnRSZWYhOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNhbmNlbFRyaWdnZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9rVHJpZ2dlcmVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBsb2NhbGUhOiBOek1vZGFsSTE4bkludGVyZmFjZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBmb2N1c1RyYXBGYWN0b3J5OiBDb25maWd1cmFibGVGb2N1c1RyYXBGYWN0b3J5LFxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcmVuZGVyOiBSZW5kZXJlcjIsXG4gICAgb3ZlcmxheVJlZjogT3ZlcmxheVJlZixcbiAgICBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBwdWJsaWMgY29uZmlnOiBNb2RhbE9wdGlvbnMsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgZG9jdW1lbnQ6IE56U2FmZUFueSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEFOSU1BVElPTl9NT0RVTEVfVFlQRSkgYW5pbWF0aW9uVHlwZTogc3RyaW5nXG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGZvY3VzVHJhcEZhY3RvcnksIGNkciwgcmVuZGVyLCBvdmVybGF5UmVmLCBuekNvbmZpZ1NlcnZpY2UsIGNvbmZpZywgZG9jdW1lbnQsIGFuaW1hdGlvblR5cGUpO1xuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdNb2RhbCcpO1xuICAgIH0pO1xuICB9XG5cbiAgb25DYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5jYW5jZWxUcmlnZ2VyZWQuZW1pdCgpO1xuICB9XG5cbiAgb25PaygpOiB2b2lkIHtcbiAgICB0aGlzLm9rVHJpZ2dlcmVkLmVtaXQoKTtcbiAgfVxufVxuIl19