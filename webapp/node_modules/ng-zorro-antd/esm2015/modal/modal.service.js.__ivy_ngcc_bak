/**
 * @fileoverview added by tsickle
 * Generated from: modal.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector, TemplatePortal } from '@angular/cdk/portal';
import { Injectable, Injector, Optional, SkipSelf, TemplateRef } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { warn } from 'ng-zorro-antd/core/logger';
import { isNotNil } from 'ng-zorro-antd/core/util';
import { defer, Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { MODAL_MASK_CLASS_NAME, NZ_CONFIG_COMPONENT_NAME } from './modal-config';
import { NzModalConfirmContainerComponent } from './modal-confirm-container.component';
import { NzModalContainerComponent } from './modal-container.component';
import { NzModalRef } from './modal-ref';
import { ModalOptions } from './modal-types';
import { applyConfigDefaults, getValueWithConfig, setContentInstanceParams } from './utils';
export class NzModalService {
    /**
     * @param {?} overlay
     * @param {?} injector
     * @param {?} nzConfigService
     * @param {?} parentModal
     */
    constructor(overlay, injector, nzConfigService, parentModal) {
        this.overlay = overlay;
        this.injector = injector;
        this.nzConfigService = nzConfigService;
        this.parentModal = parentModal;
        this.openModalsAtThisLevel = [];
        this.afterAllClosedAtThisLevel = new Subject();
        this.afterAllClose = (/** @type {?} */ (defer((/**
         * @return {?}
         */
        () => this.openModals.length ? this._afterAllClosed : this._afterAllClosed.pipe(startWith(undefined))))));
    }
    /**
     * @return {?}
     */
    get openModals() {
        return this.parentModal ? this.parentModal.openModals : this.openModalsAtThisLevel;
    }
    /**
     * @return {?}
     */
    get _afterAllClosed() {
        /** @type {?} */
        const parent = this.parentModal;
        return parent ? parent._afterAllClosed : this.afterAllClosedAtThisLevel;
    }
    /**
     * @template T, R
     * @param {?} config
     * @return {?}
     */
    create(config) {
        return this.open((/** @type {?} */ (config.nzContent)), config);
    }
    /**
     * @return {?}
     */
    closeAll() {
        this.closeModals(this.openModals);
    }
    /**
     * @template T
     * @param {?=} options
     * @param {?=} confirmType
     * @return {?}
     */
    confirm(options = {}, confirmType = 'confirm') {
        if ('nzFooter' in options) {
            warn(`The Confirm-Modal doesn't support "nzFooter", this property will be ignored.`);
        }
        if (!('nzWidth' in options)) {
            options.nzWidth = 416;
        }
        if (!('nzMaskClosable' in options)) {
            options.nzMaskClosable = false;
        }
        options.nzModalType = 'confirm';
        options.nzClassName = `ant-modal-confirm ant-modal-confirm-${confirmType} ${options.nzClassName || ''}`;
        return this.create(options);
    }
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    info(options = {}) {
        return this.confirmFactory(options, 'info');
    }
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    success(options = {}) {
        return this.confirmFactory(options, 'success');
    }
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    error(options = {}) {
        return this.confirmFactory(options, 'error');
    }
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    warning(options = {}) {
        return this.confirmFactory(options, 'warning');
    }
    /**
     * @private
     * @template T, R
     * @param {?} componentOrTemplateRef
     * @param {?=} config
     * @return {?}
     */
    open(componentOrTemplateRef, config) {
        /** @type {?} */
        const configMerged = applyConfigDefaults(config || {}, new ModalOptions());
        /** @type {?} */
        const overlayRef = this.createOverlay(configMerged);
        /** @type {?} */
        const modalContainer = this.attachModalContainer(overlayRef, configMerged);
        /** @type {?} */
        const modalRef = this.attachModalContent(componentOrTemplateRef, modalContainer, overlayRef, configMerged);
        modalContainer.modalRef = modalRef;
        this.openModals.push(modalRef);
        modalRef.afterClose.subscribe((/**
         * @return {?}
         */
        () => this.removeOpenModal(modalRef)));
        return modalRef;
    }
    /**
     * @private
     * @param {?} modalRef
     * @return {?}
     */
    removeOpenModal(modalRef) {
        /** @type {?} */
        const index = this.openModals.indexOf(modalRef);
        if (index > -1) {
            this.openModals.splice(index, 1);
            if (!this.openModals.length) {
                this._afterAllClosed.next();
            }
        }
    }
    /**
     * @private
     * @param {?} dialogs
     * @return {?}
     */
    closeModals(dialogs) {
        /** @type {?} */
        let i = dialogs.length;
        while (i--) {
            dialogs[i].close();
            if (!this.openModals.length) {
                this._afterAllClosed.next();
            }
        }
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    createOverlay(config) {
        /** @type {?} */
        const globalConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME) || {};
        /** @type {?} */
        const overlayConfig = new OverlayConfig({
            hasBackdrop: true,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: this.overlay.position().global(),
            disposeOnNavigation: getValueWithConfig(config.nzCloseOnNavigation, globalConfig.nzCloseOnNavigation, true)
        });
        if (getValueWithConfig(config.nzMask, globalConfig.nzMask, true)) {
            overlayConfig.backdropClass = MODAL_MASK_CLASS_NAME;
        }
        return this.overlay.create(overlayConfig);
    }
    /**
     * @private
     * @param {?} overlayRef
     * @param {?} config
     * @return {?}
     */
    attachModalContainer(overlayRef, config) {
        /** @type {?} */
        const userInjector = config && config.nzViewContainerRef && config.nzViewContainerRef.injector;
        /** @type {?} */
        const injector = new PortalInjector(userInjector || this.injector, new WeakMap([
            [OverlayRef, overlayRef],
            [ModalOptions, config]
        ]));
        /** @type {?} */
        const ContainerComponent = config.nzModalType === 'confirm'
            ? // If the mode is `confirm`, use `NzModalConfirmContainerComponent`
                NzModalConfirmContainerComponent
            : // If the mode is not `confirm`, use `NzModalContainerComponent`
                NzModalContainerComponent;
        /** @type {?} */
        const containerPortal = new ComponentPortal(ContainerComponent, config.nzViewContainerRef, injector);
        /** @type {?} */
        const containerRef = overlayRef.attach(containerPortal);
        return containerRef.instance;
    }
    /**
     * @private
     * @template T, R
     * @param {?} componentOrTemplateRef
     * @param {?} modalContainer
     * @param {?} overlayRef
     * @param {?} config
     * @return {?}
     */
    attachModalContent(componentOrTemplateRef, modalContainer, overlayRef, config) {
        /** @type {?} */
        const modalRef = new NzModalRef(overlayRef, config, modalContainer);
        if (componentOrTemplateRef instanceof TemplateRef) {
            modalContainer.attachTemplatePortal(new TemplatePortal(componentOrTemplateRef, (/** @type {?} */ (null)), (/** @type {?} */ ({ $implicit: config.nzComponentParams, modalRef }))));
        }
        else if (isNotNil(componentOrTemplateRef) && typeof componentOrTemplateRef !== 'string') {
            /** @type {?} */
            const injector = this.createInjector(modalRef, config);
            /** @type {?} */
            const contentRef = modalContainer.attachComponentPortal(new ComponentPortal(componentOrTemplateRef, config.nzViewContainerRef, injector));
            setContentInstanceParams(contentRef.instance, config.nzComponentParams);
            modalRef.componentInstance = contentRef.instance;
        }
        else {
            modalContainer.attachStringContent();
        }
        return modalRef;
    }
    /**
     * @private
     * @template T, R
     * @param {?} modalRef
     * @param {?} config
     * @return {?}
     */
    createInjector(modalRef, config) {
        /** @type {?} */
        const userInjector = config && config.nzViewContainerRef && config.nzViewContainerRef.injector;
        /** @type {?} */
        const injectionTokens = new WeakMap([[NzModalRef, modalRef]]);
        return new PortalInjector(userInjector || this.injector, injectionTokens);
    }
    /**
     * @private
     * @template T
     * @param {?=} options
     * @param {?=} confirmType
     * @return {?}
     */
    confirmFactory(options = {}, confirmType) {
        /** @type {?} */
        const iconMap = {
            info: 'info-circle',
            success: 'check-circle',
            error: 'close-circle',
            warning: 'exclamation-circle'
        };
        if (!('nzIconType' in options)) {
            options.nzIconType = iconMap[confirmType];
        }
        if (!('nzCancelText' in options)) {
            // Remove the Cancel button if the user not specify a Cancel button
            options.nzCancelText = null;
        }
        return this.confirm(options, confirmType);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.closeModals(this.openModalsAtThisLevel);
        this.afterAllClosedAtThisLevel.complete();
    }
}
NzModalService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NzModalService.ctorParameters = () => [
    { type: Overlay },
    { type: Injector },
    { type: NzConfigService },
    { type: NzModalService, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzModalService.prototype.openModalsAtThisLevel;
    /**
     * @type {?}
     * @private
     */
    NzModalService.prototype.afterAllClosedAtThisLevel;
    /** @type {?} */
    NzModalService.prototype.afterAllClose;
    /**
     * @type {?}
     * @private
     */
    NzModalService.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    NzModalService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    NzModalService.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzModalService.prototype.parentModal;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbW9kYWwvIiwic291cmNlcyI6WyJtb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBaUIsT0FBTyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RixPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RixPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBYSxRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWpELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsS0FBSyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFdkYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN6QyxPQUFPLEVBQWUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUs1RixNQUFNLE9BQU8sY0FBYzs7Ozs7OztJQWlC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SUFBSSxDQUFDLHlCQUF5QixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVDLENBQUM7OztZQTlMRixVQUFVOzs7O1lBcEJhLE9BQU87WUFFVixRQUFRO1lBQ3BCLGVBQWU7WUF1Q3lCLGNBQWMsdUJBQTFELFFBQVEsWUFBSSxRQUFROzs7Ozs7O0lBcEJ2QiwrQ0FBaUQ7Ozs7O0lBQ2pELG1EQUFpRTs7SUFXakUsdUNBRXNCOzs7OztJQUdwQixpQ0FBd0I7Ozs7O0lBQ3hCLGtDQUEwQjs7Ozs7SUFDMUIseUNBQXdDOzs7OztJQUN4QyxxQ0FBMkQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlLCBPdmVybGF5LCBPdmVybGF5Q29uZmlnLCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsLCBQb3J0YWxJbmplY3RvciwgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yLCBPbkRlc3Ryb3ksIE9wdGlvbmFsLCBTa2lwU2VsZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgd2FybiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9sb2dnZXInO1xuaW1wb3J0IHsgSW5kZXhhYmxlT2JqZWN0LCBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBkZWZlciwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBNT0RBTF9NQVNLX0NMQVNTX05BTUUsIE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSB9IGZyb20gJy4vbW9kYWwtY29uZmlnJztcbmltcG9ydCB7IE56TW9kYWxDb25maXJtQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC1jb25maXJtLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmFzZU1vZGFsQ29udGFpbmVyIH0gZnJvbSAnLi9tb2RhbC1jb250YWluZXInO1xuaW1wb3J0IHsgTnpNb2RhbENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOek1vZGFsUmVmIH0gZnJvbSAnLi9tb2RhbC1yZWYnO1xuaW1wb3J0IHsgQ29uZmlybVR5cGUsIE1vZGFsT3B0aW9ucyB9IGZyb20gJy4vbW9kYWwtdHlwZXMnO1xuaW1wb3J0IHsgYXBwbHlDb25maWdEZWZhdWx0cywgZ2V0VmFsdWVXaXRoQ29uZmlnLCBzZXRDb250ZW50SW5zdGFuY2VQYXJhbXMgfSBmcm9tICcuL3V0aWxzJztcblxudHlwZSBDb250ZW50VHlwZTxUPiA9IENvbXBvbmVudFR5cGU8VD4gfCBUZW1wbGF0ZVJlZjxUPiB8IHN0cmluZztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE56TW9kYWxTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBvcGVuTW9kYWxzQXRUaGlzTGV2ZWw6IE56TW9kYWxSZWZbXSA9IFtdO1xuICBwcml2YXRlIHJlYWRvbmx5IGFmdGVyQWxsQ2xvc2VkQXRUaGlzTGV2ZWwgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGdldCBvcGVuTW9kYWxzKCk6IE56TW9kYWxSZWZbXSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50TW9kYWwgPyB0aGlzLnBhcmVudE1vZGFsLm9wZW5Nb2RhbHMgOiB0aGlzLm9wZW5Nb2RhbHNBdFRoaXNMZXZlbDtcbiAgfVxuXG4gIGdldCBfYWZ0ZXJBbGxDbG9zZWQoKTogU3ViamVjdDx2b2lkPiB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnRNb2RhbDtcbiAgICByZXR1cm4gcGFyZW50ID8gcGFyZW50Ll9hZnRlckFsbENsb3NlZCA6IHRoaXMuYWZ0ZXJBbGxDbG9zZWRBdFRoaXNMZXZlbDtcbiAgfVxuXG4gIHJlYWRvbmx5IGFmdGVyQWxsQ2xvc2U6IE9ic2VydmFibGU8dm9pZD4gPSBkZWZlcigoKSA9PlxuICAgIHRoaXMub3Blbk1vZGFscy5sZW5ndGggPyB0aGlzLl9hZnRlckFsbENsb3NlZCA6IHRoaXMuX2FmdGVyQWxsQ2xvc2VkLnBpcGUoc3RhcnRXaXRoKHVuZGVmaW5lZCkpXG4gICkgYXMgT2JzZXJ2YWJsZTx2b2lkPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwcml2YXRlIHBhcmVudE1vZGFsOiBOek1vZGFsU2VydmljZVxuICApIHt9XG5cbiAgY3JlYXRlPFQsIFIgPSBOelNhZmVBbnk+KGNvbmZpZzogTW9kYWxPcHRpb25zPFQsIFI+KTogTnpNb2RhbFJlZjxULCBSPiB7XG4gICAgcmV0dXJuIHRoaXMub3BlbjxULCBSPihjb25maWcubnpDb250ZW50IGFzIENvbXBvbmVudFR5cGU8VD4sIGNvbmZpZyk7XG4gIH1cblxuICBjbG9zZUFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlTW9kYWxzKHRoaXMub3Blbk1vZGFscyk7XG4gIH1cblxuICBjb25maXJtPFQ+KG9wdGlvbnM6IE1vZGFsT3B0aW9uczxUPiA9IHt9LCBjb25maXJtVHlwZTogQ29uZmlybVR5cGUgPSAnY29uZmlybScpOiBOek1vZGFsUmVmPFQ+IHtcbiAgICBpZiAoJ256Rm9vdGVyJyBpbiBvcHRpb25zKSB7XG4gICAgICB3YXJuKGBUaGUgQ29uZmlybS1Nb2RhbCBkb2Vzbid0IHN1cHBvcnQgXCJuekZvb3RlclwiLCB0aGlzIHByb3BlcnR5IHdpbGwgYmUgaWdub3JlZC5gKTtcbiAgICB9XG4gICAgaWYgKCEoJ256V2lkdGgnIGluIG9wdGlvbnMpKSB7XG4gICAgICBvcHRpb25zLm56V2lkdGggPSA0MTY7XG4gICAgfVxuICAgIGlmICghKCduek1hc2tDbG9zYWJsZScgaW4gb3B0aW9ucykpIHtcbiAgICAgIG9wdGlvbnMubnpNYXNrQ2xvc2FibGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvcHRpb25zLm56TW9kYWxUeXBlID0gJ2NvbmZpcm0nO1xuICAgIG9wdGlvbnMubnpDbGFzc05hbWUgPSBgYW50LW1vZGFsLWNvbmZpcm0gYW50LW1vZGFsLWNvbmZpcm0tJHtjb25maXJtVHlwZX0gJHtvcHRpb25zLm56Q2xhc3NOYW1lIHx8ICcnfWA7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKG9wdGlvbnMpO1xuICB9XG5cbiAgaW5mbzxUPihvcHRpb25zOiBNb2RhbE9wdGlvbnM8VD4gPSB7fSk6IE56TW9kYWxSZWY8VD4ge1xuICAgIHJldHVybiB0aGlzLmNvbmZpcm1GYWN0b3J5KG9wdGlvbnMsICdpbmZvJyk7XG4gIH1cblxuICBzdWNjZXNzPFQ+KG9wdGlvbnM6IE1vZGFsT3B0aW9uczxUPiA9IHt9KTogTnpNb2RhbFJlZjxUPiB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlybUZhY3Rvcnkob3B0aW9ucywgJ3N1Y2Nlc3MnKTtcbiAgfVxuXG4gIGVycm9yPFQ+KG9wdGlvbnM6IE1vZGFsT3B0aW9uczxUPiA9IHt9KTogTnpNb2RhbFJlZjxUPiB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlybUZhY3Rvcnkob3B0aW9ucywgJ2Vycm9yJyk7XG4gIH1cblxuICB3YXJuaW5nPFQ+KG9wdGlvbnM6IE1vZGFsT3B0aW9uczxUPiA9IHt9KTogTnpNb2RhbFJlZjxUPiB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlybUZhY3Rvcnkob3B0aW9ucywgJ3dhcm5pbmcnKTtcbiAgfVxuXG4gIHByaXZhdGUgb3BlbjxULCBSPihjb21wb25lbnRPclRlbXBsYXRlUmVmOiBDb250ZW50VHlwZTxUPiwgY29uZmlnPzogTW9kYWxPcHRpb25zKTogTnpNb2RhbFJlZjxULCBSPiB7XG4gICAgY29uc3QgY29uZmlnTWVyZ2VkID0gYXBwbHlDb25maWdEZWZhdWx0cyhjb25maWcgfHwge30sIG5ldyBNb2RhbE9wdGlvbnMoKSk7XG4gICAgY29uc3Qgb3ZlcmxheVJlZiA9IHRoaXMuY3JlYXRlT3ZlcmxheShjb25maWdNZXJnZWQpO1xuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gdGhpcy5hdHRhY2hNb2RhbENvbnRhaW5lcihvdmVybGF5UmVmLCBjb25maWdNZXJnZWQpO1xuICAgIGNvbnN0IG1vZGFsUmVmID0gdGhpcy5hdHRhY2hNb2RhbENvbnRlbnQ8VCwgUj4oY29tcG9uZW50T3JUZW1wbGF0ZVJlZiwgbW9kYWxDb250YWluZXIsIG92ZXJsYXlSZWYsIGNvbmZpZ01lcmdlZCk7XG4gICAgbW9kYWxDb250YWluZXIubW9kYWxSZWYgPSBtb2RhbFJlZjtcblxuICAgIHRoaXMub3Blbk1vZGFscy5wdXNoKG1vZGFsUmVmKTtcbiAgICBtb2RhbFJlZi5hZnRlckNsb3NlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlbW92ZU9wZW5Nb2RhbChtb2RhbFJlZikpO1xuXG4gICAgcmV0dXJuIG1vZGFsUmVmO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVPcGVuTW9kYWwobW9kYWxSZWY6IE56TW9kYWxSZWYpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMub3Blbk1vZGFscy5pbmRleE9mKG1vZGFsUmVmKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5vcGVuTW9kYWxzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgIGlmICghdGhpcy5vcGVuTW9kYWxzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9hZnRlckFsbENsb3NlZC5uZXh0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbG9zZU1vZGFscyhkaWFsb2dzOiBOek1vZGFsUmVmW10pOiB2b2lkIHtcbiAgICBsZXQgaSA9IGRpYWxvZ3MubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGRpYWxvZ3NbaV0uY2xvc2UoKTtcbiAgICAgIGlmICghdGhpcy5vcGVuTW9kYWxzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9hZnRlckFsbENsb3NlZC5uZXh0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVPdmVybGF5KGNvbmZpZzogTW9kYWxPcHRpb25zKTogT3ZlcmxheVJlZiB7XG4gICAgY29uc3QgZ2xvYmFsQ29uZmlnID0gdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgfHwge307XG4gICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IG5ldyBPdmVybGF5Q29uZmlnKHtcbiAgICAgIGhhc0JhY2tkcm9wOiB0cnVlLFxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCksXG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkucG9zaXRpb24oKS5nbG9iYWwoKSxcbiAgICAgIGRpc3Bvc2VPbk5hdmlnYXRpb246IGdldFZhbHVlV2l0aENvbmZpZyhjb25maWcubnpDbG9zZU9uTmF2aWdhdGlvbiwgZ2xvYmFsQ29uZmlnLm56Q2xvc2VPbk5hdmlnYXRpb24sIHRydWUpXG4gICAgfSk7XG5cbiAgICBpZiAoZ2V0VmFsdWVXaXRoQ29uZmlnKGNvbmZpZy5uek1hc2ssIGdsb2JhbENvbmZpZy5uek1hc2ssIHRydWUpKSB7XG4gICAgICBvdmVybGF5Q29uZmlnLmJhY2tkcm9wQ2xhc3MgPSBNT0RBTF9NQVNLX0NMQVNTX05BTUU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheS5jcmVhdGUob3ZlcmxheUNvbmZpZyk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaE1vZGFsQ29udGFpbmVyKG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYsIGNvbmZpZzogTW9kYWxPcHRpb25zKTogQmFzZU1vZGFsQ29udGFpbmVyIHtcbiAgICBjb25zdCB1c2VySW5qZWN0b3IgPSBjb25maWcgJiYgY29uZmlnLm56Vmlld0NvbnRhaW5lclJlZiAmJiBjb25maWcubnpWaWV3Q29udGFpbmVyUmVmLmluamVjdG9yO1xuICAgIGNvbnN0IGluamVjdG9yID0gbmV3IFBvcnRhbEluamVjdG9yKFxuICAgICAgdXNlckluamVjdG9yIHx8IHRoaXMuaW5qZWN0b3IsXG4gICAgICBuZXcgV2Vha01hcDxOelNhZmVBbnksIE56U2FmZUFueT4oW1xuICAgICAgICBbT3ZlcmxheVJlZiwgb3ZlcmxheVJlZl0sXG4gICAgICAgIFtNb2RhbE9wdGlvbnMsIGNvbmZpZ11cbiAgICAgIF0pXG4gICAgKTtcblxuICAgIGNvbnN0IENvbnRhaW5lckNvbXBvbmVudCA9XG4gICAgICBjb25maWcubnpNb2RhbFR5cGUgPT09ICdjb25maXJtJ1xuICAgICAgICA/IC8vIElmIHRoZSBtb2RlIGlzIGBjb25maXJtYCwgdXNlIGBOek1vZGFsQ29uZmlybUNvbnRhaW5lckNvbXBvbmVudGBcbiAgICAgICAgICBOek1vZGFsQ29uZmlybUNvbnRhaW5lckNvbXBvbmVudFxuICAgICAgICA6IC8vIElmIHRoZSBtb2RlIGlzIG5vdCBgY29uZmlybWAsIHVzZSBgTnpNb2RhbENvbnRhaW5lckNvbXBvbmVudGBcbiAgICAgICAgICBOek1vZGFsQ29udGFpbmVyQ29tcG9uZW50O1xuXG4gICAgY29uc3QgY29udGFpbmVyUG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbDxCYXNlTW9kYWxDb250YWluZXI+KENvbnRhaW5lckNvbXBvbmVudCwgY29uZmlnLm56Vmlld0NvbnRhaW5lclJlZiwgaW5qZWN0b3IpO1xuICAgIGNvbnN0IGNvbnRhaW5lclJlZiA9IG92ZXJsYXlSZWYuYXR0YWNoPEJhc2VNb2RhbENvbnRhaW5lcj4oY29udGFpbmVyUG9ydGFsKTtcblxuICAgIHJldHVybiBjb250YWluZXJSZWYuaW5zdGFuY2U7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaE1vZGFsQ29udGVudDxULCBSPihcbiAgICBjb21wb25lbnRPclRlbXBsYXRlUmVmOiBDb250ZW50VHlwZTxUPixcbiAgICBtb2RhbENvbnRhaW5lcjogQmFzZU1vZGFsQ29udGFpbmVyLFxuICAgIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYsXG4gICAgY29uZmlnOiBNb2RhbE9wdGlvbnM8VD5cbiAgKTogTnpNb2RhbFJlZjxULCBSPiB7XG4gICAgY29uc3QgbW9kYWxSZWYgPSBuZXcgTnpNb2RhbFJlZjxULCBSPihvdmVybGF5UmVmLCBjb25maWcsIG1vZGFsQ29udGFpbmVyKTtcblxuICAgIGlmIChjb21wb25lbnRPclRlbXBsYXRlUmVmIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIG1vZGFsQ29udGFpbmVyLmF0dGFjaFRlbXBsYXRlUG9ydGFsKFxuICAgICAgICBuZXcgVGVtcGxhdGVQb3J0YWw8VD4oY29tcG9uZW50T3JUZW1wbGF0ZVJlZiwgbnVsbCEsIHsgJGltcGxpY2l0OiBjb25maWcubnpDb21wb25lbnRQYXJhbXMsIG1vZGFsUmVmIH0gYXMgTnpTYWZlQW55KVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGlzTm90TmlsKGNvbXBvbmVudE9yVGVtcGxhdGVSZWYpICYmIHR5cGVvZiBjb21wb25lbnRPclRlbXBsYXRlUmVmICE9PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgaW5qZWN0b3IgPSB0aGlzLmNyZWF0ZUluamVjdG9yPFQsIFI+KG1vZGFsUmVmLCBjb25maWcpO1xuICAgICAgY29uc3QgY29udGVudFJlZiA9IG1vZGFsQ29udGFpbmVyLmF0dGFjaENvbXBvbmVudFBvcnRhbDxUPihcbiAgICAgICAgbmV3IENvbXBvbmVudFBvcnRhbChjb21wb25lbnRPclRlbXBsYXRlUmVmLCBjb25maWcubnpWaWV3Q29udGFpbmVyUmVmLCBpbmplY3RvcilcbiAgICAgICk7XG4gICAgICBzZXRDb250ZW50SW5zdGFuY2VQYXJhbXM8VD4oY29udGVudFJlZi5pbnN0YW5jZSwgY29uZmlnLm56Q29tcG9uZW50UGFyYW1zKTtcbiAgICAgIG1vZGFsUmVmLmNvbXBvbmVudEluc3RhbmNlID0gY29udGVudFJlZi5pbnN0YW5jZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbW9kYWxDb250YWluZXIuYXR0YWNoU3RyaW5nQ29udGVudCgpO1xuICAgIH1cbiAgICByZXR1cm4gbW9kYWxSZWY7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUluamVjdG9yPFQsIFI+KG1vZGFsUmVmOiBOek1vZGFsUmVmPFQsIFI+LCBjb25maWc6IE1vZGFsT3B0aW9uczxUPik6IFBvcnRhbEluamVjdG9yIHtcbiAgICBjb25zdCB1c2VySW5qZWN0b3IgPSBjb25maWcgJiYgY29uZmlnLm56Vmlld0NvbnRhaW5lclJlZiAmJiBjb25maWcubnpWaWV3Q29udGFpbmVyUmVmLmluamVjdG9yO1xuICAgIGNvbnN0IGluamVjdGlvblRva2VucyA9IG5ldyBXZWFrTWFwPE56U2FmZUFueSwgTnpTYWZlQW55PihbW056TW9kYWxSZWYsIG1vZGFsUmVmXV0pO1xuXG4gICAgcmV0dXJuIG5ldyBQb3J0YWxJbmplY3Rvcih1c2VySW5qZWN0b3IgfHwgdGhpcy5pbmplY3RvciwgaW5qZWN0aW9uVG9rZW5zKTtcbiAgfVxuXG4gIHByaXZhdGUgY29uZmlybUZhY3Rvcnk8VD4ob3B0aW9uczogTW9kYWxPcHRpb25zPFQ+ID0ge30sIGNvbmZpcm1UeXBlOiBDb25maXJtVHlwZSk6IE56TW9kYWxSZWY8VD4ge1xuICAgIGNvbnN0IGljb25NYXA6IEluZGV4YWJsZU9iamVjdCA9IHtcbiAgICAgIGluZm86ICdpbmZvLWNpcmNsZScsXG4gICAgICBzdWNjZXNzOiAnY2hlY2stY2lyY2xlJyxcbiAgICAgIGVycm9yOiAnY2xvc2UtY2lyY2xlJyxcbiAgICAgIHdhcm5pbmc6ICdleGNsYW1hdGlvbi1jaXJjbGUnXG4gICAgfTtcbiAgICBpZiAoISgnbnpJY29uVHlwZScgaW4gb3B0aW9ucykpIHtcbiAgICAgIG9wdGlvbnMubnpJY29uVHlwZSA9IGljb25NYXBbY29uZmlybVR5cGVdO1xuICAgIH1cbiAgICBpZiAoISgnbnpDYW5jZWxUZXh0JyBpbiBvcHRpb25zKSkge1xuICAgICAgLy8gUmVtb3ZlIHRoZSBDYW5jZWwgYnV0dG9uIGlmIHRoZSB1c2VyIG5vdCBzcGVjaWZ5IGEgQ2FuY2VsIGJ1dHRvblxuICAgICAgb3B0aW9ucy5uekNhbmNlbFRleHQgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb25maXJtKG9wdGlvbnMsIGNvbmZpcm1UeXBlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2VNb2RhbHModGhpcy5vcGVuTW9kYWxzQXRUaGlzTGV2ZWwpO1xuICAgIHRoaXMuYWZ0ZXJBbGxDbG9zZWRBdFRoaXNMZXZlbC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=