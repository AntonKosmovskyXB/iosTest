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
var NzModalService = /** @class */ (function () {
    function NzModalService(overlay, injector, nzConfigService, parentModal) {
        var _this = this;
        this.overlay = overlay;
        this.injector = injector;
        this.nzConfigService = nzConfigService;
        this.parentModal = parentModal;
        this.openModalsAtThisLevel = [];
        this.afterAllClosedAtThisLevel = new Subject();
        this.afterAllClose = (/** @type {?} */ (defer((/**
         * @return {?}
         */
        function () {
            return _this.openModals.length ? _this._afterAllClosed : _this._afterAllClosed.pipe(startWith(undefined));
        }))));
    }
    Object.defineProperty(NzModalService.prototype, "openModals", {
        get: /**
         * @return {?}
         */
        function () {
            return this.parentModal ? this.parentModal.openModals : this.openModalsAtThisLevel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalService.prototype, "_afterAllClosed", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var parent = this.parentModal;
            return parent ? parent._afterAllClosed : this.afterAllClosedAtThisLevel;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @template T, R
     * @param {?} config
     * @return {?}
     */
    NzModalService.prototype.create = /**
     * @template T, R
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return this.open((/** @type {?} */ (config.nzContent)), config);
    };
    /**
     * @return {?}
     */
    NzModalService.prototype.closeAll = /**
     * @return {?}
     */
    function () {
        this.closeModals(this.openModals);
    };
    /**
     * @template T
     * @param {?=} options
     * @param {?=} confirmType
     * @return {?}
     */
    NzModalService.prototype.confirm = /**
     * @template T
     * @param {?=} options
     * @param {?=} confirmType
     * @return {?}
     */
    function (options, confirmType) {
        if (options === void 0) { options = {}; }
        if (confirmType === void 0) { confirmType = 'confirm'; }
        if ('nzFooter' in options) {
            warn("The Confirm-Modal doesn't support \"nzFooter\", this property will be ignored.");
        }
        if (!('nzWidth' in options)) {
            options.nzWidth = 416;
        }
        if (!('nzMaskClosable' in options)) {
            options.nzMaskClosable = false;
        }
        options.nzModalType = 'confirm';
        options.nzClassName = "ant-modal-confirm ant-modal-confirm-" + confirmType + " " + (options.nzClassName || '');
        return this.create(options);
    };
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    NzModalService.prototype.info = /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        return this.confirmFactory(options, 'info');
    };
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    NzModalService.prototype.success = /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        return this.confirmFactory(options, 'success');
    };
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    NzModalService.prototype.error = /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        return this.confirmFactory(options, 'error');
    };
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    NzModalService.prototype.warning = /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        return this.confirmFactory(options, 'warning');
    };
    /**
     * @private
     * @template T, R
     * @param {?} componentOrTemplateRef
     * @param {?=} config
     * @return {?}
     */
    NzModalService.prototype.open = /**
     * @private
     * @template T, R
     * @param {?} componentOrTemplateRef
     * @param {?=} config
     * @return {?}
     */
    function (componentOrTemplateRef, config) {
        var _this = this;
        /** @type {?} */
        var configMerged = applyConfigDefaults(config || {}, new ModalOptions());
        /** @type {?} */
        var overlayRef = this.createOverlay(configMerged);
        /** @type {?} */
        var modalContainer = this.attachModalContainer(overlayRef, configMerged);
        /** @type {?} */
        var modalRef = this.attachModalContent(componentOrTemplateRef, modalContainer, overlayRef, configMerged);
        modalContainer.modalRef = modalRef;
        this.openModals.push(modalRef);
        modalRef.afterClose.subscribe((/**
         * @return {?}
         */
        function () { return _this.removeOpenModal(modalRef); }));
        return modalRef;
    };
    /**
     * @private
     * @param {?} modalRef
     * @return {?}
     */
    NzModalService.prototype.removeOpenModal = /**
     * @private
     * @param {?} modalRef
     * @return {?}
     */
    function (modalRef) {
        /** @type {?} */
        var index = this.openModals.indexOf(modalRef);
        if (index > -1) {
            this.openModals.splice(index, 1);
            if (!this.openModals.length) {
                this._afterAllClosed.next();
            }
        }
    };
    /**
     * @private
     * @param {?} dialogs
     * @return {?}
     */
    NzModalService.prototype.closeModals = /**
     * @private
     * @param {?} dialogs
     * @return {?}
     */
    function (dialogs) {
        /** @type {?} */
        var i = dialogs.length;
        while (i--) {
            dialogs[i].close();
            if (!this.openModals.length) {
                this._afterAllClosed.next();
            }
        }
    };
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    NzModalService.prototype.createOverlay = /**
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var globalConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME) || {};
        /** @type {?} */
        var overlayConfig = new OverlayConfig({
            hasBackdrop: true,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: this.overlay.position().global(),
            disposeOnNavigation: getValueWithConfig(config.nzCloseOnNavigation, globalConfig.nzCloseOnNavigation, true)
        });
        if (getValueWithConfig(config.nzMask, globalConfig.nzMask, true)) {
            overlayConfig.backdropClass = MODAL_MASK_CLASS_NAME;
        }
        return this.overlay.create(overlayConfig);
    };
    /**
     * @private
     * @param {?} overlayRef
     * @param {?} config
     * @return {?}
     */
    NzModalService.prototype.attachModalContainer = /**
     * @private
     * @param {?} overlayRef
     * @param {?} config
     * @return {?}
     */
    function (overlayRef, config) {
        /** @type {?} */
        var userInjector = config && config.nzViewContainerRef && config.nzViewContainerRef.injector;
        /** @type {?} */
        var injector = new PortalInjector(userInjector || this.injector, new WeakMap([
            [OverlayRef, overlayRef],
            [ModalOptions, config]
        ]));
        /** @type {?} */
        var ContainerComponent = config.nzModalType === 'confirm'
            ? // If the mode is `confirm`, use `NzModalConfirmContainerComponent`
                NzModalConfirmContainerComponent
            : // If the mode is not `confirm`, use `NzModalContainerComponent`
                NzModalContainerComponent;
        /** @type {?} */
        var containerPortal = new ComponentPortal(ContainerComponent, config.nzViewContainerRef, injector);
        /** @type {?} */
        var containerRef = overlayRef.attach(containerPortal);
        return containerRef.instance;
    };
    /**
     * @private
     * @template T, R
     * @param {?} componentOrTemplateRef
     * @param {?} modalContainer
     * @param {?} overlayRef
     * @param {?} config
     * @return {?}
     */
    NzModalService.prototype.attachModalContent = /**
     * @private
     * @template T, R
     * @param {?} componentOrTemplateRef
     * @param {?} modalContainer
     * @param {?} overlayRef
     * @param {?} config
     * @return {?}
     */
    function (componentOrTemplateRef, modalContainer, overlayRef, config) {
        /** @type {?} */
        var modalRef = new NzModalRef(overlayRef, config, modalContainer);
        if (componentOrTemplateRef instanceof TemplateRef) {
            modalContainer.attachTemplatePortal(new TemplatePortal(componentOrTemplateRef, (/** @type {?} */ (null)), (/** @type {?} */ ({ $implicit: config.nzComponentParams, modalRef: modalRef }))));
        }
        else if (isNotNil(componentOrTemplateRef) && typeof componentOrTemplateRef !== 'string') {
            /** @type {?} */
            var injector = this.createInjector(modalRef, config);
            /** @type {?} */
            var contentRef = modalContainer.attachComponentPortal(new ComponentPortal(componentOrTemplateRef, config.nzViewContainerRef, injector));
            setContentInstanceParams(contentRef.instance, config.nzComponentParams);
            modalRef.componentInstance = contentRef.instance;
        }
        else {
            modalContainer.attachStringContent();
        }
        return modalRef;
    };
    /**
     * @private
     * @template T, R
     * @param {?} modalRef
     * @param {?} config
     * @return {?}
     */
    NzModalService.prototype.createInjector = /**
     * @private
     * @template T, R
     * @param {?} modalRef
     * @param {?} config
     * @return {?}
     */
    function (modalRef, config) {
        /** @type {?} */
        var userInjector = config && config.nzViewContainerRef && config.nzViewContainerRef.injector;
        /** @type {?} */
        var injectionTokens = new WeakMap([[NzModalRef, modalRef]]);
        return new PortalInjector(userInjector || this.injector, injectionTokens);
    };
    /**
     * @private
     * @template T
     * @param {?=} options
     * @param {?=} confirmType
     * @return {?}
     */
    NzModalService.prototype.confirmFactory = /**
     * @private
     * @template T
     * @param {?=} options
     * @param {?=} confirmType
     * @return {?}
     */
    function (options, confirmType) {
        if (options === void 0) { options = {}; }
        /** @type {?} */
        var iconMap = {
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
    };
    /**
     * @return {?}
     */
    NzModalService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.closeModals(this.openModalsAtThisLevel);
        this.afterAllClosedAtThisLevel.complete();
    };
    NzModalService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NzModalService.ctorParameters = function () { return [
        { type: Overlay },
        { type: Injector },
        { type: NzConfigService },
        { type: NzModalService, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return NzModalService;
}());
export { NzModalService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbW9kYWwvIiwic291cmNlcyI6WyJtb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBaUIsT0FBTyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RixPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RixPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBYSxRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWpELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsS0FBSyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFdkYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN6QyxPQUFPLEVBQWUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUk1RjtJQWtCRSx3QkFDVSxPQUFnQixFQUNoQixR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QjtTQUM5QjtRQUNELElBQUksQ0FBQyxDQUFDLFlBQVksSUFBSSxPQUFPLENBQUMsRUFBRTtZQUM5QixPQUFPLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMzQztRQUNELElBQUksQ0FBQyxDQUFDLGNBQWMsSUFBSSxPQUFPLENBQUMsRUFBRTtZQUNoQyxtRUFBbUU7WUFDbkUsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDN0I7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCxvQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1QyxDQUFDOztnQkE5TEYsVUFBVTs7OztnQkFwQmEsT0FBTztnQkFFVixRQUFRO2dCQUNwQixlQUFlO2dCQXVDeUIsY0FBYyx1QkFBMUQsUUFBUSxZQUFJLFFBQVE7O0lBeUt6QixxQkFBQztDQUFBLEFBL0xELElBK0xDO1NBOUxZLGNBQWM7Ozs7OztJQUN6QiwrQ0FBaUQ7Ozs7O0lBQ2pELG1EQUFpRTs7SUFXakUsdUNBRXNCOzs7OztJQUdwQixpQ0FBd0I7Ozs7O0lBQ3hCLGtDQUEwQjs7Ozs7SUFDMUIseUNBQXdDOzs7OztJQUN4QyxxQ0FBMkQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlLCBPdmVybGF5LCBPdmVybGF5Q29uZmlnLCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsLCBQb3J0YWxJbmplY3RvciwgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yLCBPbkRlc3Ryb3ksIE9wdGlvbmFsLCBTa2lwU2VsZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgd2FybiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9sb2dnZXInO1xuaW1wb3J0IHsgSW5kZXhhYmxlT2JqZWN0LCBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBkZWZlciwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBNT0RBTF9NQVNLX0NMQVNTX05BTUUsIE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSB9IGZyb20gJy4vbW9kYWwtY29uZmlnJztcbmltcG9ydCB7IE56TW9kYWxDb25maXJtQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC1jb25maXJtLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmFzZU1vZGFsQ29udGFpbmVyIH0gZnJvbSAnLi9tb2RhbC1jb250YWluZXInO1xuaW1wb3J0IHsgTnpNb2RhbENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOek1vZGFsUmVmIH0gZnJvbSAnLi9tb2RhbC1yZWYnO1xuaW1wb3J0IHsgQ29uZmlybVR5cGUsIE1vZGFsT3B0aW9ucyB9IGZyb20gJy4vbW9kYWwtdHlwZXMnO1xuaW1wb3J0IHsgYXBwbHlDb25maWdEZWZhdWx0cywgZ2V0VmFsdWVXaXRoQ29uZmlnLCBzZXRDb250ZW50SW5zdGFuY2VQYXJhbXMgfSBmcm9tICcuL3V0aWxzJztcblxudHlwZSBDb250ZW50VHlwZTxUPiA9IENvbXBvbmVudFR5cGU8VD4gfCBUZW1wbGF0ZVJlZjxUPiB8IHN0cmluZztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE56TW9kYWxTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBvcGVuTW9kYWxzQXRUaGlzTGV2ZWw6IE56TW9kYWxSZWZbXSA9IFtdO1xuICBwcml2YXRlIHJlYWRvbmx5IGFmdGVyQWxsQ2xvc2VkQXRUaGlzTGV2ZWwgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGdldCBvcGVuTW9kYWxzKCk6IE56TW9kYWxSZWZbXSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50TW9kYWwgPyB0aGlzLnBhcmVudE1vZGFsLm9wZW5Nb2RhbHMgOiB0aGlzLm9wZW5Nb2RhbHNBdFRoaXNMZXZlbDtcbiAgfVxuXG4gIGdldCBfYWZ0ZXJBbGxDbG9zZWQoKTogU3ViamVjdDx2b2lkPiB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnRNb2RhbDtcbiAgICByZXR1cm4gcGFyZW50ID8gcGFyZW50Ll9hZnRlckFsbENsb3NlZCA6IHRoaXMuYWZ0ZXJBbGxDbG9zZWRBdFRoaXNMZXZlbDtcbiAgfVxuXG4gIHJlYWRvbmx5IGFmdGVyQWxsQ2xvc2U6IE9ic2VydmFibGU8dm9pZD4gPSBkZWZlcigoKSA9PlxuICAgIHRoaXMub3Blbk1vZGFscy5sZW5ndGggPyB0aGlzLl9hZnRlckFsbENsb3NlZCA6IHRoaXMuX2FmdGVyQWxsQ2xvc2VkLnBpcGUoc3RhcnRXaXRoKHVuZGVmaW5lZCkpXG4gICkgYXMgT2JzZXJ2YWJsZTx2b2lkPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwcml2YXRlIHBhcmVudE1vZGFsOiBOek1vZGFsU2VydmljZVxuICApIHt9XG5cbiAgY3JlYXRlPFQsIFIgPSBOelNhZmVBbnk+KGNvbmZpZzogTW9kYWxPcHRpb25zPFQsIFI+KTogTnpNb2RhbFJlZjxULCBSPiB7XG4gICAgcmV0dXJuIHRoaXMub3BlbjxULCBSPihjb25maWcubnpDb250ZW50IGFzIENvbXBvbmVudFR5cGU8VD4sIGNvbmZpZyk7XG4gIH1cblxuICBjbG9zZUFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlTW9kYWxzKHRoaXMub3Blbk1vZGFscyk7XG4gIH1cblxuICBjb25maXJtPFQ+KG9wdGlvbnM6IE1vZGFsT3B0aW9uczxUPiA9IHt9LCBjb25maXJtVHlwZTogQ29uZmlybVR5cGUgPSAnY29uZmlybScpOiBOek1vZGFsUmVmPFQ+IHtcbiAgICBpZiAoJ256Rm9vdGVyJyBpbiBvcHRpb25zKSB7XG4gICAgICB3YXJuKGBUaGUgQ29uZmlybS1Nb2RhbCBkb2Vzbid0IHN1cHBvcnQgXCJuekZvb3RlclwiLCB0aGlzIHByb3BlcnR5IHdpbGwgYmUgaWdub3JlZC5gKTtcbiAgICB9XG4gICAgaWYgKCEoJ256V2lkdGgnIGluIG9wdGlvbnMpKSB7XG4gICAgICBvcHRpb25zLm56V2lkdGggPSA0MTY7XG4gICAgfVxuICAgIGlmICghKCduek1hc2tDbG9zYWJsZScgaW4gb3B0aW9ucykpIHtcbiAgICAgIG9wdGlvbnMubnpNYXNrQ2xvc2FibGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvcHRpb25zLm56TW9kYWxUeXBlID0gJ2NvbmZpcm0nO1xuICAgIG9wdGlvbnMubnpDbGFzc05hbWUgPSBgYW50LW1vZGFsLWNvbmZpcm0gYW50LW1vZGFsLWNvbmZpcm0tJHtjb25maXJtVHlwZX0gJHtvcHRpb25zLm56Q2xhc3NOYW1lIHx8ICcnfWA7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKG9wdGlvbnMpO1xuICB9XG5cbiAgaW5mbzxUPihvcHRpb25zOiBNb2RhbE9wdGlvbnM8VD4gPSB7fSk6IE56TW9kYWxSZWY8VD4ge1xuICAgIHJldHVybiB0aGlzLmNvbmZpcm1GYWN0b3J5KG9wdGlvbnMsICdpbmZvJyk7XG4gIH1cblxuICBzdWNjZXNzPFQ+KG9wdGlvbnM6IE1vZGFsT3B0aW9uczxUPiA9IHt9KTogTnpNb2RhbFJlZjxUPiB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlybUZhY3Rvcnkob3B0aW9ucywgJ3N1Y2Nlc3MnKTtcbiAgfVxuXG4gIGVycm9yPFQ+KG9wdGlvbnM6IE1vZGFsT3B0aW9uczxUPiA9IHt9KTogTnpNb2RhbFJlZjxUPiB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlybUZhY3Rvcnkob3B0aW9ucywgJ2Vycm9yJyk7XG4gIH1cblxuICB3YXJuaW5nPFQ+KG9wdGlvbnM6IE1vZGFsT3B0aW9uczxUPiA9IHt9KTogTnpNb2RhbFJlZjxUPiB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlybUZhY3Rvcnkob3B0aW9ucywgJ3dhcm5pbmcnKTtcbiAgfVxuXG4gIHByaXZhdGUgb3BlbjxULCBSPihjb21wb25lbnRPclRlbXBsYXRlUmVmOiBDb250ZW50VHlwZTxUPiwgY29uZmlnPzogTW9kYWxPcHRpb25zKTogTnpNb2RhbFJlZjxULCBSPiB7XG4gICAgY29uc3QgY29uZmlnTWVyZ2VkID0gYXBwbHlDb25maWdEZWZhdWx0cyhjb25maWcgfHwge30sIG5ldyBNb2RhbE9wdGlvbnMoKSk7XG4gICAgY29uc3Qgb3ZlcmxheVJlZiA9IHRoaXMuY3JlYXRlT3ZlcmxheShjb25maWdNZXJnZWQpO1xuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gdGhpcy5hdHRhY2hNb2RhbENvbnRhaW5lcihvdmVybGF5UmVmLCBjb25maWdNZXJnZWQpO1xuICAgIGNvbnN0IG1vZGFsUmVmID0gdGhpcy5hdHRhY2hNb2RhbENvbnRlbnQ8VCwgUj4oY29tcG9uZW50T3JUZW1wbGF0ZVJlZiwgbW9kYWxDb250YWluZXIsIG92ZXJsYXlSZWYsIGNvbmZpZ01lcmdlZCk7XG4gICAgbW9kYWxDb250YWluZXIubW9kYWxSZWYgPSBtb2RhbFJlZjtcblxuICAgIHRoaXMub3Blbk1vZGFscy5wdXNoKG1vZGFsUmVmKTtcbiAgICBtb2RhbFJlZi5hZnRlckNsb3NlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlbW92ZU9wZW5Nb2RhbChtb2RhbFJlZikpO1xuXG4gICAgcmV0dXJuIG1vZGFsUmVmO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVPcGVuTW9kYWwobW9kYWxSZWY6IE56TW9kYWxSZWYpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMub3Blbk1vZGFscy5pbmRleE9mKG1vZGFsUmVmKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5vcGVuTW9kYWxzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgIGlmICghdGhpcy5vcGVuTW9kYWxzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9hZnRlckFsbENsb3NlZC5uZXh0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbG9zZU1vZGFscyhkaWFsb2dzOiBOek1vZGFsUmVmW10pOiB2b2lkIHtcbiAgICBsZXQgaSA9IGRpYWxvZ3MubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGRpYWxvZ3NbaV0uY2xvc2UoKTtcbiAgICAgIGlmICghdGhpcy5vcGVuTW9kYWxzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9hZnRlckFsbENsb3NlZC5uZXh0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVPdmVybGF5KGNvbmZpZzogTW9kYWxPcHRpb25zKTogT3ZlcmxheVJlZiB7XG4gICAgY29uc3QgZ2xvYmFsQ29uZmlnID0gdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgfHwge307XG4gICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IG5ldyBPdmVybGF5Q29uZmlnKHtcbiAgICAgIGhhc0JhY2tkcm9wOiB0cnVlLFxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCksXG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkucG9zaXRpb24oKS5nbG9iYWwoKSxcbiAgICAgIGRpc3Bvc2VPbk5hdmlnYXRpb246IGdldFZhbHVlV2l0aENvbmZpZyhjb25maWcubnpDbG9zZU9uTmF2aWdhdGlvbiwgZ2xvYmFsQ29uZmlnLm56Q2xvc2VPbk5hdmlnYXRpb24sIHRydWUpXG4gICAgfSk7XG5cbiAgICBpZiAoZ2V0VmFsdWVXaXRoQ29uZmlnKGNvbmZpZy5uek1hc2ssIGdsb2JhbENvbmZpZy5uek1hc2ssIHRydWUpKSB7XG4gICAgICBvdmVybGF5Q29uZmlnLmJhY2tkcm9wQ2xhc3MgPSBNT0RBTF9NQVNLX0NMQVNTX05BTUU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheS5jcmVhdGUob3ZlcmxheUNvbmZpZyk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaE1vZGFsQ29udGFpbmVyKG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYsIGNvbmZpZzogTW9kYWxPcHRpb25zKTogQmFzZU1vZGFsQ29udGFpbmVyIHtcbiAgICBjb25zdCB1c2VySW5qZWN0b3IgPSBjb25maWcgJiYgY29uZmlnLm56Vmlld0NvbnRhaW5lclJlZiAmJiBjb25maWcubnpWaWV3Q29udGFpbmVyUmVmLmluamVjdG9yO1xuICAgIGNvbnN0IGluamVjdG9yID0gbmV3IFBvcnRhbEluamVjdG9yKFxuICAgICAgdXNlckluamVjdG9yIHx8IHRoaXMuaW5qZWN0b3IsXG4gICAgICBuZXcgV2Vha01hcDxOelNhZmVBbnksIE56U2FmZUFueT4oW1xuICAgICAgICBbT3ZlcmxheVJlZiwgb3ZlcmxheVJlZl0sXG4gICAgICAgIFtNb2RhbE9wdGlvbnMsIGNvbmZpZ11cbiAgICAgIF0pXG4gICAgKTtcblxuICAgIGNvbnN0IENvbnRhaW5lckNvbXBvbmVudCA9XG4gICAgICBjb25maWcubnpNb2RhbFR5cGUgPT09ICdjb25maXJtJ1xuICAgICAgICA/IC8vIElmIHRoZSBtb2RlIGlzIGBjb25maXJtYCwgdXNlIGBOek1vZGFsQ29uZmlybUNvbnRhaW5lckNvbXBvbmVudGBcbiAgICAgICAgICBOek1vZGFsQ29uZmlybUNvbnRhaW5lckNvbXBvbmVudFxuICAgICAgICA6IC8vIElmIHRoZSBtb2RlIGlzIG5vdCBgY29uZmlybWAsIHVzZSBgTnpNb2RhbENvbnRhaW5lckNvbXBvbmVudGBcbiAgICAgICAgICBOek1vZGFsQ29udGFpbmVyQ29tcG9uZW50O1xuXG4gICAgY29uc3QgY29udGFpbmVyUG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbDxCYXNlTW9kYWxDb250YWluZXI+KENvbnRhaW5lckNvbXBvbmVudCwgY29uZmlnLm56Vmlld0NvbnRhaW5lclJlZiwgaW5qZWN0b3IpO1xuICAgIGNvbnN0IGNvbnRhaW5lclJlZiA9IG92ZXJsYXlSZWYuYXR0YWNoPEJhc2VNb2RhbENvbnRhaW5lcj4oY29udGFpbmVyUG9ydGFsKTtcblxuICAgIHJldHVybiBjb250YWluZXJSZWYuaW5zdGFuY2U7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaE1vZGFsQ29udGVudDxULCBSPihcbiAgICBjb21wb25lbnRPclRlbXBsYXRlUmVmOiBDb250ZW50VHlwZTxUPixcbiAgICBtb2RhbENvbnRhaW5lcjogQmFzZU1vZGFsQ29udGFpbmVyLFxuICAgIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYsXG4gICAgY29uZmlnOiBNb2RhbE9wdGlvbnM8VD5cbiAgKTogTnpNb2RhbFJlZjxULCBSPiB7XG4gICAgY29uc3QgbW9kYWxSZWYgPSBuZXcgTnpNb2RhbFJlZjxULCBSPihvdmVybGF5UmVmLCBjb25maWcsIG1vZGFsQ29udGFpbmVyKTtcblxuICAgIGlmIChjb21wb25lbnRPclRlbXBsYXRlUmVmIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIG1vZGFsQ29udGFpbmVyLmF0dGFjaFRlbXBsYXRlUG9ydGFsKFxuICAgICAgICBuZXcgVGVtcGxhdGVQb3J0YWw8VD4oY29tcG9uZW50T3JUZW1wbGF0ZVJlZiwgbnVsbCEsIHsgJGltcGxpY2l0OiBjb25maWcubnpDb21wb25lbnRQYXJhbXMsIG1vZGFsUmVmIH0gYXMgTnpTYWZlQW55KVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGlzTm90TmlsKGNvbXBvbmVudE9yVGVtcGxhdGVSZWYpICYmIHR5cGVvZiBjb21wb25lbnRPclRlbXBsYXRlUmVmICE9PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgaW5qZWN0b3IgPSB0aGlzLmNyZWF0ZUluamVjdG9yPFQsIFI+KG1vZGFsUmVmLCBjb25maWcpO1xuICAgICAgY29uc3QgY29udGVudFJlZiA9IG1vZGFsQ29udGFpbmVyLmF0dGFjaENvbXBvbmVudFBvcnRhbDxUPihcbiAgICAgICAgbmV3IENvbXBvbmVudFBvcnRhbChjb21wb25lbnRPclRlbXBsYXRlUmVmLCBjb25maWcubnpWaWV3Q29udGFpbmVyUmVmLCBpbmplY3RvcilcbiAgICAgICk7XG4gICAgICBzZXRDb250ZW50SW5zdGFuY2VQYXJhbXM8VD4oY29udGVudFJlZi5pbnN0YW5jZSwgY29uZmlnLm56Q29tcG9uZW50UGFyYW1zKTtcbiAgICAgIG1vZGFsUmVmLmNvbXBvbmVudEluc3RhbmNlID0gY29udGVudFJlZi5pbnN0YW5jZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbW9kYWxDb250YWluZXIuYXR0YWNoU3RyaW5nQ29udGVudCgpO1xuICAgIH1cbiAgICByZXR1cm4gbW9kYWxSZWY7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUluamVjdG9yPFQsIFI+KG1vZGFsUmVmOiBOek1vZGFsUmVmPFQsIFI+LCBjb25maWc6IE1vZGFsT3B0aW9uczxUPik6IFBvcnRhbEluamVjdG9yIHtcbiAgICBjb25zdCB1c2VySW5qZWN0b3IgPSBjb25maWcgJiYgY29uZmlnLm56Vmlld0NvbnRhaW5lclJlZiAmJiBjb25maWcubnpWaWV3Q29udGFpbmVyUmVmLmluamVjdG9yO1xuICAgIGNvbnN0IGluamVjdGlvblRva2VucyA9IG5ldyBXZWFrTWFwPE56U2FmZUFueSwgTnpTYWZlQW55PihbW056TW9kYWxSZWYsIG1vZGFsUmVmXV0pO1xuXG4gICAgcmV0dXJuIG5ldyBQb3J0YWxJbmplY3Rvcih1c2VySW5qZWN0b3IgfHwgdGhpcy5pbmplY3RvciwgaW5qZWN0aW9uVG9rZW5zKTtcbiAgfVxuXG4gIHByaXZhdGUgY29uZmlybUZhY3Rvcnk8VD4ob3B0aW9uczogTW9kYWxPcHRpb25zPFQ+ID0ge30sIGNvbmZpcm1UeXBlOiBDb25maXJtVHlwZSk6IE56TW9kYWxSZWY8VD4ge1xuICAgIGNvbnN0IGljb25NYXA6IEluZGV4YWJsZU9iamVjdCA9IHtcbiAgICAgIGluZm86ICdpbmZvLWNpcmNsZScsXG4gICAgICBzdWNjZXNzOiAnY2hlY2stY2lyY2xlJyxcbiAgICAgIGVycm9yOiAnY2xvc2UtY2lyY2xlJyxcbiAgICAgIHdhcm5pbmc6ICdleGNsYW1hdGlvbi1jaXJjbGUnXG4gICAgfTtcbiAgICBpZiAoISgnbnpJY29uVHlwZScgaW4gb3B0aW9ucykpIHtcbiAgICAgIG9wdGlvbnMubnpJY29uVHlwZSA9IGljb25NYXBbY29uZmlybVR5cGVdO1xuICAgIH1cbiAgICBpZiAoISgnbnpDYW5jZWxUZXh0JyBpbiBvcHRpb25zKSkge1xuICAgICAgLy8gUmVtb3ZlIHRoZSBDYW5jZWwgYnV0dG9uIGlmIHRoZSB1c2VyIG5vdCBzcGVjaWZ5IGEgQ2FuY2VsIGJ1dHRvblxuICAgICAgb3B0aW9ucy5uekNhbmNlbFRleHQgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb25maXJtKG9wdGlvbnMsIGNvbmZpcm1UeXBlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2VNb2RhbHModGhpcy5vcGVuTW9kYWxzQXRUaGlzTGV2ZWwpO1xuICAgIHRoaXMuYWZ0ZXJBbGxDbG9zZWRBdFRoaXNMZXZlbC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=