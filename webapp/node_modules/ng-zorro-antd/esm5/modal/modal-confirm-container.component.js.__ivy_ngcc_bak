/**
 * @fileoverview added by tsickle
 * Generated from: modal-confirm-container.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Optional, Output, Renderer2, ViewChild } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { takeUntil } from 'rxjs/operators';
import { nzModalAnimations } from './modal-animations';
import { BaseModalContainer } from './modal-container';
import { ModalOptions } from './modal-types';
var NzModalConfirmContainerComponent = /** @class */ (function (_super) {
    __extends(NzModalConfirmContainerComponent, _super);
    function NzModalConfirmContainerComponent(i18n, elementRef, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType) {
        var _this = _super.call(this, elementRef, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType) || this;
        _this.i18n = i18n;
        _this.config = config;
        _this.cancelTriggered = new EventEmitter();
        _this.okTriggered = new EventEmitter();
        _this.i18n.localeChange.pipe(takeUntil(_this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.locale = _this.i18n.getLocaleData('Modal');
        }));
        return _this;
    }
    /**
     * @return {?}
     */
    NzModalConfirmContainerComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.cancelTriggered.emit();
    };
    /**
     * @return {?}
     */
    NzModalConfirmContainerComponent.prototype.onOk = /**
     * @return {?}
     */
    function () {
        this.okTriggered.emit();
    };
    NzModalConfirmContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-modal-confirm-container',
                    exportAs: 'nzModalConfirmContainer',
                    template: "\n    <div\n      #modalElement\n      role=\"document\"\n      class=\"ant-modal\"\n      (mousedown)=\"onMousedown()\"\n      [ngClass]=\"config.nzClassName!\"\n      [ngStyle]=\"config.nzStyle!\"\n      [style.width]=\"config?.nzWidth! | nzToCssUnit\"\n    >\n      <div class=\"ant-modal-content\">\n        <button *ngIf=\"config.nzClosable\" nz-modal-close (click)=\"onCloseClick()\"></button>\n        <div class=\"ant-modal-body\" [ngStyle]=\"config.nzBodyStyle!\">\n          <div class=\"ant-modal-confirm-body-wrapper\">\n            <div class=\"ant-modal-confirm-body\">\n              <i nz-icon [nzType]=\"config.nzIconType!\"></i>\n              <span class=\"ant-modal-confirm-title\">\n                <ng-container *nzStringTemplateOutlet=\"config.nzTitle\">\n                  <span [innerHTML]=\"config.nzTitle\"></span>\n                </ng-container>\n              </span>\n              <div class=\"ant-modal-confirm-content\">\n                <ng-template cdkPortalOutlet></ng-template>\n                <div *ngIf=\"isStringContent\" [innerHTML]=\"config.nzContent\"></div>\n              </div>\n            </div>\n            <div class=\"ant-modal-confirm-btns\">\n              <button\n                *ngIf=\"config.nzCancelText !== null\"\n                [attr.cdkFocusInitial]=\"config.nzAutofocus === 'cancel' || null\"\n                nz-button\n                (click)=\"onCancel()\"\n                [nzLoading]=\"!!config.nzCancelLoading\"\n                [disabled]=\"config.nzCancelDisabled\"\n              >\n                {{ config.nzCancelText || locale.cancelText }}\n              </button>\n              <button\n                *ngIf=\"config.nzOkText !== null\"\n                [attr.cdkFocusInitial]=\"config.nzAutofocus === 'ok' || null\"\n                nz-button\n                [nzType]=\"config.nzOkType!\"\n                (click)=\"onOk()\"\n                [nzLoading]=\"!!config.nzOkLoading\"\n                [disabled]=\"config.nzOkDisabled\"\n              >\n                {{ config.nzOkText || locale.okText }}\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
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
    NzModalConfirmContainerComponent.ctorParameters = function () { return [
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
    ]; };
    NzModalConfirmContainerComponent.propDecorators = {
        portalOutlet: [{ type: ViewChild, args: [CdkPortalOutlet, { static: true },] }],
        modalElementRef: [{ type: ViewChild, args: ['modalElement', { static: true },] }],
        cancelTriggered: [{ type: Output }],
        okTriggered: [{ type: Output }]
    };
    return NzModalConfirmContainerComponent;
}(BaseModalContainer));
export { NzModalConfirmContainerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29uZmlybS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tb2RhbC8iLCJzb3VyY2VzIjpbIm1vZGFsLWNvbmZpcm0tY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHNUQsT0FBTyxFQUFFLGFBQWEsRUFBd0IsTUFBTSxvQkFBb0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3QztJQXlFc0Qsb0RBQWtCO0lBT3RFLDBDQUNVLElBQW1CLEVBQzNCLFVBQXNCLEVBQ3RCLGdCQUE4QyxFQUM5QyxHQUFzQixFQUN0QixNQUFpQixFQUNqQixVQUFzQixFQUN0QixlQUFnQyxFQUN6QixNQUFvQixFQUNHLFFBQW1CLEVBQ04sYUFBcUI7UUFWbEUsWUFZRSxrQkFBTSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsYUFBYSxDQUFDLFNBSS9HO1FBZlMsVUFBSSxHQUFKLElBQUksQ0FBZTtRQU9wQixZQUFNLEdBQU4sTUFBTSxDQUFjO1FBWlYscUJBQWUsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQzNDLGlCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQWdCeEQsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7UUFBQztZQUM5RCxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELENBQUMsRUFBQyxDQUFDOztJQUNMLENBQUM7Ozs7SUFFRCxtREFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCwrQ0FBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7O2dCQXhHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFLDBwRUFxRFQ7b0JBQ0QsVUFBVSxFQUFFLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDOztvQkFFOUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE9BQU87b0JBQ2hELElBQUksRUFBRTt3QkFDSixRQUFRLEVBQUUsSUFBSTt3QkFDZCxJQUFJLEVBQUUsUUFBUTt3QkFDZCxTQUFTLEVBQUUsd0ZBQXdGO3dCQUNuRyxnQkFBZ0IsRUFBRSxpQkFBaUI7d0JBQ25DLGNBQWMsRUFBRSxzQkFBc0I7d0JBQ3RDLG1CQUFtQixFQUFFLE9BQU87d0JBQzVCLHlCQUF5QixFQUFFLDBCQUEwQjt3QkFDckQsd0JBQXdCLEVBQUUseUJBQXlCO3dCQUNuRCxTQUFTLEVBQUUsMEJBQTBCO3dCQUNyQyxXQUFXLEVBQUUsYUFBYTtxQkFDM0I7aUJBQ0Y7Ozs7Z0JBaEZRLGFBQWE7Z0JBWnBCLFVBQVU7Z0JBUkgsNEJBQTRCO2dCQU1uQyxpQkFBaUI7Z0JBT2pCLFNBQVM7Z0JBWkYsVUFBVTtnQkFnQlYsZUFBZTtnQkFTZixZQUFZO2dEQTJGaEIsUUFBUSxZQUFJLE1BQU0sU0FBQyxRQUFROzZDQUMzQixRQUFRLFlBQUksTUFBTSxTQUFDLHFCQUFxQjs7OytCQWhCMUMsU0FBUyxTQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7a0NBQzNDLFNBQVMsU0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2tDQUMxQyxNQUFNOzhCQUNOLE1BQU07O0lBNEJULHVDQUFDO0NBQUEsQUF6R0QsQ0F5RXNELGtCQUFrQixHQWdDdkU7U0FoQ1ksZ0NBQWdDOzs7SUFDM0Msd0RBQTZFOztJQUM3RSwyREFBMEY7O0lBQzFGLDJEQUE4RDs7SUFDOUQsdURBQTBEOztJQUMxRCxrREFBOEI7Ozs7O0lBRzVCLGdEQUEyQjs7SUFPM0Isa0RBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ29uZmlndXJhYmxlRm9jdXNUcmFwRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDZGtQb3J0YWxPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBTklNQVRJT05fTU9EVUxFX1RZUEUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlLCBOek1vZGFsSTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5cbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgbnpNb2RhbEFuaW1hdGlvbnMgfSBmcm9tICcuL21vZGFsLWFuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQmFzZU1vZGFsQ29udGFpbmVyIH0gZnJvbSAnLi9tb2RhbC1jb250YWluZXInO1xuaW1wb3J0IHsgTW9kYWxPcHRpb25zIH0gZnJvbSAnLi9tb2RhbC10eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LW1vZGFsLWNvbmZpcm0tY29udGFpbmVyJyxcbiAgZXhwb3J0QXM6ICduek1vZGFsQ29uZmlybUNvbnRhaW5lcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgI21vZGFsRWxlbWVudFxuICAgICAgcm9sZT1cImRvY3VtZW50XCJcbiAgICAgIGNsYXNzPVwiYW50LW1vZGFsXCJcbiAgICAgIChtb3VzZWRvd24pPVwib25Nb3VzZWRvd24oKVwiXG4gICAgICBbbmdDbGFzc109XCJjb25maWcubnpDbGFzc05hbWUhXCJcbiAgICAgIFtuZ1N0eWxlXT1cImNvbmZpZy5uelN0eWxlIVwiXG4gICAgICBbc3R5bGUud2lkdGhdPVwiY29uZmlnPy5ueldpZHRoISB8IG56VG9Dc3NVbml0XCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LW1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImNvbmZpZy5uekNsb3NhYmxlXCIgbnotbW9kYWwtY2xvc2UgKGNsaWNrKT1cIm9uQ2xvc2VDbGljaygpXCI+PC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtbW9kYWwtYm9keVwiIFtuZ1N0eWxlXT1cImNvbmZpZy5uekJvZHlTdHlsZSFcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LW1vZGFsLWNvbmZpcm0tYm9keS13cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LW1vZGFsLWNvbmZpcm0tYm9keVwiPlxuICAgICAgICAgICAgICA8aSBuei1pY29uIFtuelR5cGVdPVwiY29uZmlnLm56SWNvblR5cGUhXCI+PC9pPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFudC1tb2RhbC1jb25maXJtLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImNvbmZpZy5uelRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImNvbmZpZy5uelRpdGxlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtbW9kYWwtY29uZmlybS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGNka1BvcnRhbE91dGxldD48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpc1N0cmluZ0NvbnRlbnRcIiBbaW5uZXJIVE1MXT1cImNvbmZpZy5uekNvbnRlbnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtbW9kYWwtY29uZmlybS1idG5zXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAqbmdJZj1cImNvbmZpZy5uekNhbmNlbFRleHQgIT09IG51bGxcIlxuICAgICAgICAgICAgICAgIFthdHRyLmNka0ZvY3VzSW5pdGlhbF09XCJjb25maWcubnpBdXRvZm9jdXMgPT09ICdjYW5jZWwnIHx8IG51bGxcIlxuICAgICAgICAgICAgICAgIG56LWJ1dHRvblxuICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNhbmNlbCgpXCJcbiAgICAgICAgICAgICAgICBbbnpMb2FkaW5nXT1cIiEhY29uZmlnLm56Q2FuY2VsTG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImNvbmZpZy5uekNhbmNlbERpc2FibGVkXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt7IGNvbmZpZy5uekNhbmNlbFRleHQgfHwgbG9jYWxlLmNhbmNlbFRleHQgfX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAqbmdJZj1cImNvbmZpZy5uek9rVGV4dCAhPT0gbnVsbFwiXG4gICAgICAgICAgICAgICAgW2F0dHIuY2RrRm9jdXNJbml0aWFsXT1cImNvbmZpZy5uekF1dG9mb2N1cyA9PT0gJ29rJyB8fCBudWxsXCJcbiAgICAgICAgICAgICAgICBuei1idXR0b25cbiAgICAgICAgICAgICAgICBbbnpUeXBlXT1cImNvbmZpZy5uek9rVHlwZSFcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJvbk9rKClcIlxuICAgICAgICAgICAgICAgIFtuekxvYWRpbmddPVwiISFjb25maWcubnpPa0xvYWRpbmdcIlxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJjb25maWcubnpPa0Rpc2FibGVkXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt7IGNvbmZpZy5uek9rVGV4dCB8fCBsb2NhbGUub2tUZXh0IH19XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGFuaW1hdGlvbnM6IFtuek1vZGFsQW5pbWF0aW9ucy5tb2RhbENvbnRhaW5lcl0sXG4gIC8vIFVzaW5nIE9uUHVzaCBmb3IgbW9kYWwgY2F1c2VkIGZvb3RlciBjYW4gbm90IHRvIGRldGVjdCBjaGFuZ2VzLiB3ZSBjYW4gZml4IGl0IHdoZW4gOC54LlxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHQsXG4gIGhvc3Q6IHtcbiAgICB0YWJpbmRleDogJy0xJyxcbiAgICByb2xlOiAnZGlhbG9nJyxcbiAgICAnW2NsYXNzXSc6ICdjb25maWcubnpXcmFwQ2xhc3NOYW1lID8gXCJhbnQtbW9kYWwtd3JhcCBcIiArIGNvbmZpZy5ueldyYXBDbGFzc05hbWUgOiBcImFudC1tb2RhbC13cmFwXCInLFxuICAgICdbc3R5bGUuekluZGV4XSc6ICdjb25maWcubnpaSW5kZXgnLFxuICAgICdbQC5kaXNhYmxlZF0nOiAnY29uZmlnLm56Tm9BbmltYXRpb24nLFxuICAgICdbQG1vZGFsQ29udGFpbmVyXSc6ICdzdGF0ZScsXG4gICAgJyhAbW9kYWxDb250YWluZXIuc3RhcnQpJzogJ29uQW5pbWF0aW9uU3RhcnQoJGV2ZW50KScsXG4gICAgJyhAbW9kYWxDb250YWluZXIuZG9uZSknOiAnb25BbmltYXRpb25Eb25lKCRldmVudCknLFxuICAgICcoY2xpY2spJzogJ29uQ29udGFpbmVyQ2xpY2soJGV2ZW50KScsXG4gICAgJyhtb3VzZXVwKSc6ICdvbk1vdXNldXAoKSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOek1vZGFsQ29uZmlybUNvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIEJhc2VNb2RhbENvbnRhaW5lciB7XG4gIEBWaWV3Q2hpbGQoQ2RrUG9ydGFsT3V0bGV0LCB7IHN0YXRpYzogdHJ1ZSB9KSBwb3J0YWxPdXRsZXQhOiBDZGtQb3J0YWxPdXRsZXQ7XG4gIEBWaWV3Q2hpbGQoJ21vZGFsRWxlbWVudCcsIHsgc3RhdGljOiB0cnVlIH0pIG1vZGFsRWxlbWVudFJlZiE6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2FuY2VsVHJpZ2dlcmVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgb2tUcmlnZ2VyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIGxvY2FsZSE6IE56TW9kYWxJMThuSW50ZXJmYWNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSxcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIGZvY3VzVHJhcEZhY3Rvcnk6IENvbmZpZ3VyYWJsZUZvY3VzVHJhcEZhY3RvcnksXG4gICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICByZW5kZXI6IFJlbmRlcmVyMixcbiAgICBvdmVybGF5UmVmOiBPdmVybGF5UmVmLFxuICAgIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHB1YmxpYyBjb25maWc6IE1vZGFsT3B0aW9ucyxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudDogTnpTYWZlQW55LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQU5JTUFUSU9OX01PRFVMRV9UWVBFKSBhbmltYXRpb25UeXBlOiBzdHJpbmdcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgZm9jdXNUcmFwRmFjdG9yeSwgY2RyLCByZW5kZXIsIG92ZXJsYXlSZWYsIG56Q29uZmlnU2VydmljZSwgY29uZmlnLCBkb2N1bWVudCwgYW5pbWF0aW9uVHlwZSk7XG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ01vZGFsJyk7XG4gICAgfSk7XG4gIH1cblxuICBvbkNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLmNhbmNlbFRyaWdnZXJlZC5lbWl0KCk7XG4gIH1cblxuICBvbk9rKCk6IHZvaWQge1xuICAgIHRoaXMub2tUcmlnZ2VyZWQuZW1pdCgpO1xuICB9XG59XG4iXX0=