/**
 * @fileoverview added by tsickle
 * Generated from: modal-container.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BasePortalOutlet } from '@angular/cdk/portal';
import { EventEmitter } from '@angular/core';
import { getElementOffset } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FADE_CLASS_NAME_MAP, MODAL_MASK_CLASS_NAME, NZ_CONFIG_COMPONENT_NAME, ZOOM_CLASS_NAME_MAP } from './modal-config';
import { getValueWithConfig } from './utils';
/**
 * @return {?}
 */
export function throwNzModalContentAlreadyAttachedError() {
    throw Error('Attempting to attach modal content after content is already attached');
}
export class BaseModalContainer extends BasePortalOutlet {
    /**
     * @param {?} elementRef
     * @param {?} focusTrapFactory
     * @param {?} cdr
     * @param {?} render
     * @param {?} overlayRef
     * @param {?} nzConfigService
     * @param {?} config
     * @param {?=} document
     * @param {?=} animationType
     */
    constructor(elementRef, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType) {
        super();
        this.elementRef = elementRef;
        this.focusTrapFactory = focusTrapFactory;
        this.cdr = cdr;
        this.render = render;
        this.overlayRef = overlayRef;
        this.nzConfigService = nzConfigService;
        this.config = config;
        this.animationType = animationType;
        this.animationStateChanged = new EventEmitter();
        this.containerClick = new EventEmitter();
        this.cancelTriggered = new EventEmitter();
        this.okTriggered = new EventEmitter();
        this.state = 'enter';
        this.isStringContent = false;
        this.elementFocusedBeforeModalWasOpened = null;
        this.mouseDown = false;
        this.oldMaskStyle = null;
        this.destroy$ = new Subject();
        this.document = document;
        this.isStringContent = typeof config.nzContent === 'string';
        this.setContainer();
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.updateMaskClassname();
        }));
    }
    /**
     * @return {?}
     */
    get showMask() {
        /** @type {?} */
        const defaultConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME) || {};
        return !!getValueWithConfig(this.config.nzMask, defaultConfig.nzMask, true);
    }
    /**
     * @return {?}
     */
    get maskClosable() {
        /** @type {?} */
        const defaultConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME) || {};
        return !!getValueWithConfig(this.config.nzMaskClosable, defaultConfig.nzMaskClosable, true);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onContainerClick(e) {
        if (e.target === e.currentTarget && !this.mouseDown && this.showMask && this.maskClosable) {
            this.containerClick.emit();
        }
    }
    /**
     * @return {?}
     */
    onMousedown() {
        this.mouseDown = true;
    }
    /**
     * @return {?}
     */
    onMouseup() {
        if (this.mouseDown) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.mouseDown = false;
            }));
        }
    }
    /**
     * @return {?}
     */
    onCloseClick() {
        this.cancelTriggered.emit();
    }
    /**
     * @return {?}
     */
    onOkClick() {
        this.okTriggered.emit();
    }
    /**
     * @template T
     * @param {?} portal
     * @return {?}
     */
    attachComponentPortal(portal) {
        if (this.portalOutlet.hasAttached()) {
            throwNzModalContentAlreadyAttachedError();
        }
        this.savePreviouslyFocusedElement();
        this.setModalTransformOrigin();
        return this.portalOutlet.attachComponentPortal(portal);
    }
    /**
     * @template C
     * @param {?} portal
     * @return {?}
     */
    attachTemplatePortal(portal) {
        if (this.portalOutlet.hasAttached()) {
            throwNzModalContentAlreadyAttachedError();
        }
        this.savePreviouslyFocusedElement();
        return this.portalOutlet.attachTemplatePortal(portal);
    }
    /**
     * @return {?}
     */
    attachStringContent() {
        this.savePreviouslyFocusedElement();
    }
    /**
     * @return {?}
     */
    getNativeElement() {
        return this.elementRef.nativeElement;
    }
    /**
     * @private
     * @return {?}
     */
    animationDisabled() {
        return this.config.nzNoAnimation || this.animationType === 'NoopAnimations';
    }
    /**
     * @private
     * @return {?}
     */
    setModalTransformOrigin() {
        /** @type {?} */
        const modalElement = this.modalElementRef.nativeElement;
        if ((/** @type {?} */ (this.elementFocusedBeforeModalWasOpened))) {
            /** @type {?} */
            const previouslyDOMRect = (/** @type {?} */ (this.elementFocusedBeforeModalWasOpened)).getBoundingClientRect();
            /** @type {?} */
            const lastPosition = getElementOffset((/** @type {?} */ (this.elementFocusedBeforeModalWasOpened)));
            /** @type {?} */
            const x = lastPosition.left + previouslyDOMRect.width / 2;
            /** @type {?} */
            const y = lastPosition.top + previouslyDOMRect.height / 2;
            /** @type {?} */
            const transformOrigin = `${x - modalElement.offsetLeft}px ${y - modalElement.offsetTop}px 0px`;
            this.render.setStyle(modalElement, 'transform-origin', transformOrigin);
        }
    }
    /**
     * @private
     * @return {?}
     */
    savePreviouslyFocusedElement() {
        if (!this.focusTrap) {
            this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
        }
        if (this.document) {
            this.elementFocusedBeforeModalWasOpened = (/** @type {?} */ (this.document.activeElement));
            if (this.elementRef.nativeElement.focus) {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => this.elementRef.nativeElement.focus()));
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    trapFocus() {
        /** @type {?} */
        const element = this.elementRef.nativeElement;
        if (this.config.nzAutofocus) {
            this.focusTrap.focusInitialElementWhenReady().then();
        }
        else {
            /** @type {?} */
            const activeElement = this.document.activeElement;
            if (activeElement !== element && !element.contains(activeElement)) {
                element.focus();
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    restoreFocus() {
        /** @type {?} */
        const toFocus = (/** @type {?} */ (this.elementFocusedBeforeModalWasOpened));
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (toFocus && typeof toFocus.focus === 'function') {
            /** @type {?} */
            const activeElement = (/** @type {?} */ (this.document.activeElement));
            /** @type {?} */
            const element = this.elementRef.nativeElement;
            if (!activeElement || activeElement === this.document.body || activeElement === element || element.contains(activeElement)) {
                toFocus.focus();
            }
        }
        if (this.focusTrap) {
            this.focusTrap.destroy();
        }
    }
    /**
     * @private
     * @return {?}
     */
    setEnterAnimationClass() {
        if (this.animationDisabled()) {
            return;
        }
        // Make sure to set the `TransformOrigin` style before set the modelElement's class names
        this.setModalTransformOrigin();
        /** @type {?} */
        const modalElement = this.modalElementRef.nativeElement;
        /** @type {?} */
        const backdropElement = this.overlayRef.backdropElement;
        modalElement.classList.add(ZOOM_CLASS_NAME_MAP.enter);
        modalElement.classList.add(ZOOM_CLASS_NAME_MAP.enterActive);
        if (backdropElement) {
            backdropElement.classList.add(FADE_CLASS_NAME_MAP.enter);
            backdropElement.classList.add(FADE_CLASS_NAME_MAP.enterActive);
        }
    }
    /**
     * @private
     * @return {?}
     */
    setExitAnimationClass() {
        /** @type {?} */
        const modalElement = this.modalElementRef.nativeElement;
        modalElement.classList.add(ZOOM_CLASS_NAME_MAP.leave);
        modalElement.classList.add(ZOOM_CLASS_NAME_MAP.leaveActive);
        this.setMaskExitAnimationClass();
    }
    /**
     * @private
     * @param {?=} force
     * @return {?}
     */
    setMaskExitAnimationClass(force = false) {
        /** @type {?} */
        const backdropElement = this.overlayRef.backdropElement;
        if (backdropElement) {
            if (this.animationDisabled() || force) {
                // https://github.com/angular/components/issues/18645
                backdropElement.classList.remove(MODAL_MASK_CLASS_NAME);
                return;
            }
            backdropElement.classList.add(FADE_CLASS_NAME_MAP.leave);
            backdropElement.classList.add(FADE_CLASS_NAME_MAP.leaveActive);
        }
    }
    /**
     * @private
     * @return {?}
     */
    cleanAnimationClass() {
        if (this.animationDisabled()) {
            return;
        }
        /** @type {?} */
        const backdropElement = this.overlayRef.backdropElement;
        /** @type {?} */
        const modalElement = this.modalElementRef.nativeElement;
        if (backdropElement) {
            backdropElement.classList.remove(FADE_CLASS_NAME_MAP.enter);
            backdropElement.classList.remove(FADE_CLASS_NAME_MAP.enterActive);
        }
        modalElement.classList.remove(ZOOM_CLASS_NAME_MAP.enter);
        modalElement.classList.remove(ZOOM_CLASS_NAME_MAP.enterActive);
        modalElement.classList.remove(ZOOM_CLASS_NAME_MAP.leave);
        modalElement.classList.remove(ZOOM_CLASS_NAME_MAP.leaveActive);
    }
    /**
     * @return {?}
     */
    bindBackdropStyle() {
        /** @type {?} */
        const backdropElement = this.overlayRef.backdropElement;
        if (backdropElement) {
            if (this.oldMaskStyle) {
                /** @type {?} */
                const styles = (/** @type {?} */ (this.oldMaskStyle));
                Object.keys(styles).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => {
                    this.render.removeStyle(backdropElement, key);
                }));
                this.oldMaskStyle = null;
            }
            if (typeof this.config.nzMaskStyle === 'object' && Object.keys(this.config.nzMaskStyle).length) {
                /** @type {?} */
                const styles = Object.assign({}, this.config.nzMaskStyle);
                Object.keys(styles).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => {
                    this.render.setStyle(backdropElement, key, styles[key]);
                }));
                this.oldMaskStyle = styles;
            }
        }
    }
    /**
     * Set the container element.
     * @deprecated Not supported.
     * \@breaking-change 10.0.0
     * @private
     * @return {?}
     */
    setContainer() {
        /** @type {?} */
        const container = this.getContainer();
        if (container) {
            this.render.appendChild(container, this.elementRef.nativeElement);
        }
    }
    /**
     * Reset the container element.
     * @deprecated Not supported.
     * \@breaking-change 10.0.0
     * @private
     * @return {?}
     */
    resetContainer() {
        /** @type {?} */
        const container = this.getContainer();
        if (container) {
            this.render.appendChild(this.overlayRef.overlayElement, this.elementRef.nativeElement);
        }
    }
    /**
     * @private
     * @return {?}
     */
    getContainer() {
        const { nzGetContainer } = this.config;
        /** @type {?} */
        const container = typeof nzGetContainer === 'function' ? nzGetContainer() : nzGetContainer;
        return container instanceof HTMLElement ? container : null;
    }
    /**
     * @return {?}
     */
    updateMaskClassname() {
        /** @type {?} */
        const backdropElement = this.overlayRef.backdropElement;
        if (backdropElement) {
            if (this.showMask) {
                backdropElement.classList.add(MODAL_MASK_CLASS_NAME);
            }
            else {
                backdropElement.classList.remove(MODAL_MASK_CLASS_NAME);
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onAnimationDone(event) {
        if (event.toState === 'enter') {
            this.setContainer();
            this.trapFocus();
        }
        else if (event.toState === 'exit') {
            this.restoreFocus();
        }
        this.cleanAnimationClass();
        this.animationStateChanged.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onAnimationStart(event) {
        if (event.toState === 'enter') {
            this.setEnterAnimationClass();
            this.bindBackdropStyle();
        }
        else if (event.toState === 'exit') {
            this.resetContainer();
            this.setExitAnimationClass();
        }
        this.animationStateChanged.emit(event);
    }
    /**
     * @return {?}
     */
    startExitAnimation() {
        this.state = 'exit';
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.setMaskExitAnimationClass(true);
        this.destroy$.next();
        this.destroy$.complete();
    }
}
if (false) {
    /** @type {?} */
    BaseModalContainer.prototype.portalOutlet;
    /** @type {?} */
    BaseModalContainer.prototype.modalElementRef;
    /** @type {?} */
    BaseModalContainer.prototype.animationStateChanged;
    /** @type {?} */
    BaseModalContainer.prototype.containerClick;
    /** @type {?} */
    BaseModalContainer.prototype.cancelTriggered;
    /** @type {?} */
    BaseModalContainer.prototype.okTriggered;
    /** @type {?} */
    BaseModalContainer.prototype.state;
    /** @type {?} */
    BaseModalContainer.prototype.document;
    /** @type {?} */
    BaseModalContainer.prototype.modalRef;
    /** @type {?} */
    BaseModalContainer.prototype.isStringContent;
    /**
     * @type {?}
     * @private
     */
    BaseModalContainer.prototype.elementFocusedBeforeModalWasOpened;
    /**
     * @type {?}
     * @private
     */
    BaseModalContainer.prototype.focusTrap;
    /**
     * @type {?}
     * @private
     */
    BaseModalContainer.prototype.mouseDown;
    /**
     * @type {?}
     * @private
     */
    BaseModalContainer.prototype.oldMaskStyle;
    /**
     * @type {?}
     * @protected
     */
    BaseModalContainer.prototype.destroy$;
    /**
     * @type {?}
     * @protected
     */
    BaseModalContainer.prototype.elementRef;
    /**
     * @type {?}
     * @protected
     */
    BaseModalContainer.prototype.focusTrapFactory;
    /** @type {?} */
    BaseModalContainer.prototype.cdr;
    /**
     * @type {?}
     * @protected
     */
    BaseModalContainer.prototype.render;
    /**
     * @type {?}
     * @protected
     */
    BaseModalContainer.prototype.overlayRef;
    /**
     * @type {?}
     * @protected
     */
    BaseModalContainer.prototype.nzConfigService;
    /** @type {?} */
    BaseModalContainer.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    BaseModalContainer.prototype.animationType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tb2RhbC8iLCJzb3VyY2VzIjpbIm1vZGFsLWNvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQW9ELE1BQU0scUJBQXFCLENBQUM7QUFDekcsT0FBTyxFQUFnRSxZQUFZLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBR2pJLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSx3QkFBd0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTNILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7OztBQUU3QyxNQUFNLFVBQVUsdUNBQXVDO0lBQ3JELE1BQU0sS0FBSyxDQUFDLHNFQUFzRSxDQUFDLENBQUM7QUFDdEYsQ0FBQztBQUVELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxnQkFBZ0I7Ozs7Ozs7Ozs7OztJQStCdEQsWUFDWSxVQUFzQixFQUN0QixnQkFBOEMsRUFDakQsR0FBc0IsRUFDbkIsTUFBaUIsRUFDakIsVUFBc0IsRUFDdEIsZUFBZ0MsRUFDbkMsTUFBb0IsRUFDM0IsUUFBb0IsRUFDVixhQUFzQjtRQUVoQyxLQUFLLEVBQUUsQ0FBQztRQVZFLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUE4QjtRQUNqRCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUNuQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsb0JBQWUsR0FBZixlQUFl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USxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQztDQUNGOzs7SUF4VEMsMENBQStCOztJQUMvQiw2Q0FBNkM7O0lBRTdDLG1EQUEyRDs7SUFDM0QsNENBQTBDOztJQUMxQyw2Q0FBMkM7O0lBQzNDLHlDQUF1Qzs7SUFFdkMsbUNBQTJDOztJQUMzQyxzQ0FBbUI7O0lBQ25CLHNDQUFzQjs7SUFDdEIsNkNBQWlDOzs7OztJQUNqQyxnRUFBc0U7Ozs7O0lBQ3RFLHVDQUE4Qjs7Ozs7SUFDOUIsdUNBQTBCOzs7OztJQUMxQiwwQ0FBOEQ7Ozs7O0lBQzlELHNDQUFtQzs7Ozs7SUFlakMsd0NBQWdDOzs7OztJQUNoQyw4Q0FBd0Q7O0lBQ3hELGlDQUE2Qjs7Ozs7SUFDN0Isb0NBQTJCOzs7OztJQUMzQix3Q0FBZ0M7Ozs7O0lBQ2hDLDZDQUEwQzs7SUFDMUMsb0NBQTJCOzs7OztJQUUzQiwyQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBBbmltYXRpb25FdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQ29uZmlndXJhYmxlRm9jdXNUcmFwRmFjdG9yeSwgRm9jdXNUcmFwIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IEJhc2VQb3J0YWxPdXRsZXQsIENka1BvcnRhbE91dGxldCwgQ29tcG9uZW50UG9ydGFsLCBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudFJlZiwgRWxlbWVudFJlZiwgRW1iZWRkZWRWaWV3UmVmLCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBnZXRFbGVtZW50T2Zmc2V0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRkFERV9DTEFTU19OQU1FX01BUCwgTU9EQUxfTUFTS19DTEFTU19OQU1FLCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIFpPT01fQ0xBU1NfTkFNRV9NQVAgfSBmcm9tICcuL21vZGFsLWNvbmZpZyc7XG5cbmltcG9ydCB7IE56TW9kYWxSZWYgfSBmcm9tICcuL21vZGFsLXJlZic7XG5pbXBvcnQgeyBNb2RhbE9wdGlvbnMgfSBmcm9tICcuL21vZGFsLXR5cGVzJztcbmltcG9ydCB7IGdldFZhbHVlV2l0aENvbmZpZyB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3dOek1vZGFsQ29udGVudEFscmVhZHlBdHRhY2hlZEVycm9yKCk6IG5ldmVyIHtcbiAgdGhyb3cgRXJyb3IoJ0F0dGVtcHRpbmcgdG8gYXR0YWNoIG1vZGFsIGNvbnRlbnQgYWZ0ZXIgY29udGVudCBpcyBhbHJlYWR5IGF0dGFjaGVkJyk7XG59XG5cbmV4cG9ydCBjbGFzcyBCYXNlTW9kYWxDb250YWluZXIgZXh0ZW5kcyBCYXNlUG9ydGFsT3V0bGV0IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcG9ydGFsT3V0bGV0ITogQ2RrUG9ydGFsT3V0bGV0O1xuICBtb2RhbEVsZW1lbnRSZWYhOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcblxuICBhbmltYXRpb25TdGF0ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEFuaW1hdGlvbkV2ZW50PigpO1xuICBjb250YWluZXJDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgY2FuY2VsVHJpZ2dlcmVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBva1RyaWdnZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBzdGF0ZTogJ3ZvaWQnIHwgJ2VudGVyJyB8ICdleGl0JyA9ICdlbnRlcic7XG4gIGRvY3VtZW50OiBEb2N1bWVudDtcbiAgbW9kYWxSZWYhOiBOek1vZGFsUmVmO1xuICBpc1N0cmluZ0NvbnRlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBlbGVtZW50Rm9jdXNlZEJlZm9yZU1vZGFsV2FzT3BlbmVkOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGZvY3VzVHJhcCE6IEZvY3VzVHJhcDtcbiAgcHJpdmF0ZSBtb3VzZURvd24gPSBmYWxzZTtcbiAgcHJpdmF0ZSBvbGRNYXNrU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBudWxsID0gbnVsbDtcbiAgcHJvdGVjdGVkIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcblxuICBnZXQgc2hvd01hc2soKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZGVmYXVsdENvbmZpZyA9IHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0ZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIHx8IHt9O1xuXG4gICAgcmV0dXJuICEhZ2V0VmFsdWVXaXRoQ29uZmlnPGJvb2xlYW4+KHRoaXMuY29uZmlnLm56TWFzaywgZGVmYXVsdENvbmZpZy5uek1hc2ssIHRydWUpO1xuICB9XG5cbiAgZ2V0IG1hc2tDbG9zYWJsZSgpOiBib29sZWFuIHtcbiAgICBjb25zdCBkZWZhdWx0Q29uZmlnID0gdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgfHwge307XG5cbiAgICByZXR1cm4gISFnZXRWYWx1ZVdpdGhDb25maWc8Ym9vbGVhbj4odGhpcy5jb25maWcubnpNYXNrQ2xvc2FibGUsIGRlZmF1bHRDb25maWcubnpNYXNrQ2xvc2FibGUsIHRydWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIGZvY3VzVHJhcEZhY3Rvcnk6IENvbmZpZ3VyYWJsZUZvY3VzVHJhcEZhY3RvcnksXG4gICAgcHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJvdGVjdGVkIHJlbmRlcjogUmVuZGVyZXIyLFxuICAgIHByb3RlY3RlZCBvdmVybGF5UmVmOiBPdmVybGF5UmVmLFxuICAgIHByb3RlY3RlZCBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBwdWJsaWMgY29uZmlnOiBNb2RhbE9wdGlvbnMsXG4gICAgZG9jdW1lbnQ/OiBOelNhZmVBbnksXG4gICAgcHJvdGVjdGVkIGFuaW1hdGlvblR5cGU/OiBzdHJpbmdcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmRvY3VtZW50ID0gZG9jdW1lbnQ7XG4gICAgdGhpcy5pc1N0cmluZ0NvbnRlbnQgPSB0eXBlb2YgY29uZmlnLm56Q29udGVudCA9PT0gJ3N0cmluZyc7XG4gICAgdGhpcy5zZXRDb250YWluZXIoKTtcbiAgICB0aGlzLm56Q29uZmlnU2VydmljZVxuICAgICAgLmdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZU1hc2tDbGFzc25hbWUoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgb25Db250YWluZXJDbGljayhlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBlLmN1cnJlbnRUYXJnZXQgJiYgIXRoaXMubW91c2VEb3duICYmIHRoaXMuc2hvd01hc2sgJiYgdGhpcy5tYXNrQ2xvc2FibGUpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyQ2xpY2suZW1pdCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91c2Vkb3duKCk6IHZvaWQge1xuICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcbiAgfVxuXG4gIG9uTW91c2V1cCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tb3VzZURvd24pIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb25DbG9zZUNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuY2FuY2VsVHJpZ2dlcmVkLmVtaXQoKTtcbiAgfVxuXG4gIG9uT2tDbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLm9rVHJpZ2dlcmVkLmVtaXQoKTtcbiAgfVxuXG4gIGF0dGFjaENvbXBvbmVudFBvcnRhbDxUPihwb3J0YWw6IENvbXBvbmVudFBvcnRhbDxUPik6IENvbXBvbmVudFJlZjxUPiB7XG4gICAgaWYgKHRoaXMucG9ydGFsT3V0bGV0Lmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgIHRocm93TnpNb2RhbENvbnRlbnRBbHJlYWR5QXR0YWNoZWRFcnJvcigpO1xuICAgIH1cbiAgICB0aGlzLnNhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTtcbiAgICB0aGlzLnNldE1vZGFsVHJhbnNmb3JtT3JpZ2luKCk7XG4gICAgcmV0dXJuIHRoaXMucG9ydGFsT3V0bGV0LmF0dGFjaENvbXBvbmVudFBvcnRhbChwb3J0YWwpO1xuICB9XG5cbiAgYXR0YWNoVGVtcGxhdGVQb3J0YWw8Qz4ocG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDxDPik6IEVtYmVkZGVkVmlld1JlZjxDPiB7XG4gICAgaWYgKHRoaXMucG9ydGFsT3V0bGV0Lmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgIHRocm93TnpNb2RhbENvbnRlbnRBbHJlYWR5QXR0YWNoZWRFcnJvcigpO1xuICAgIH1cbiAgICB0aGlzLnNhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTtcbiAgICByZXR1cm4gdGhpcy5wb3J0YWxPdXRsZXQuYXR0YWNoVGVtcGxhdGVQb3J0YWwocG9ydGFsKTtcbiAgfVxuXG4gIGF0dGFjaFN0cmluZ0NvbnRlbnQoKTogdm9pZCB7XG4gICAgdGhpcy5zYXZlUHJldmlvdXNseUZvY3VzZWRFbGVtZW50KCk7XG4gIH1cblxuICBnZXROYXRpdmVFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIGFuaW1hdGlvbkRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5uek5vQW5pbWF0aW9uIHx8IHRoaXMuYW5pbWF0aW9uVHlwZSA9PT0gJ05vb3BBbmltYXRpb25zJztcbiAgfVxuXG4gIHByaXZhdGUgc2V0TW9kYWxUcmFuc2Zvcm1PcmlnaW4oKTogdm9pZCB7XG4gICAgY29uc3QgbW9kYWxFbGVtZW50ID0gdGhpcy5tb2RhbEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBpZiAodGhpcy5lbGVtZW50Rm9jdXNlZEJlZm9yZU1vZGFsV2FzT3BlbmVkIGFzIEhUTUxFbGVtZW50KSB7XG4gICAgICBjb25zdCBwcmV2aW91c2x5RE9NUmVjdCA9IHRoaXMuZWxlbWVudEZvY3VzZWRCZWZvcmVNb2RhbFdhc09wZW5lZCEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBsYXN0UG9zaXRpb24gPSBnZXRFbGVtZW50T2Zmc2V0KHRoaXMuZWxlbWVudEZvY3VzZWRCZWZvcmVNb2RhbFdhc09wZW5lZCEpO1xuICAgICAgY29uc3QgeCA9IGxhc3RQb3NpdGlvbi5sZWZ0ICsgcHJldmlvdXNseURPTVJlY3Qud2lkdGggLyAyO1xuICAgICAgY29uc3QgeSA9IGxhc3RQb3NpdGlvbi50b3AgKyBwcmV2aW91c2x5RE9NUmVjdC5oZWlnaHQgLyAyO1xuICAgICAgY29uc3QgdHJhbnNmb3JtT3JpZ2luID0gYCR7eCAtIG1vZGFsRWxlbWVudC5vZmZzZXRMZWZ0fXB4ICR7eSAtIG1vZGFsRWxlbWVudC5vZmZzZXRUb3B9cHggMHB4YDtcbiAgICAgIHRoaXMucmVuZGVyLnNldFN0eWxlKG1vZGFsRWxlbWVudCwgJ3RyYW5zZm9ybS1vcmlnaW4nLCB0cmFuc2Zvcm1PcmlnaW4pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2F2ZVByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZm9jdXNUcmFwKSB7XG4gICAgICB0aGlzLmZvY3VzVHJhcCA9IHRoaXMuZm9jdXNUcmFwRmFjdG9yeS5jcmVhdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRvY3VtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnRGb2N1c2VkQmVmb3JlTW9kYWxXYXNPcGVuZWQgPSB0aGlzLmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMpIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRyYXBGb2N1cygpOiB2b2lkIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBpZiAodGhpcy5jb25maWcubnpBdXRvZm9jdXMpIHtcbiAgICAgIHRoaXMuZm9jdXNUcmFwLmZvY3VzSW5pdGlhbEVsZW1lbnRXaGVuUmVhZHkoKS50aGVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSB0aGlzLmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICBpZiAoYWN0aXZlRWxlbWVudCAhPT0gZWxlbWVudCAmJiAhZWxlbWVudC5jb250YWlucyhhY3RpdmVFbGVtZW50KSkge1xuICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZXN0b3JlRm9jdXMoKTogdm9pZCB7XG4gICAgY29uc3QgdG9Gb2N1cyA9IHRoaXMuZWxlbWVudEZvY3VzZWRCZWZvcmVNb2RhbFdhc09wZW5lZCBhcyBIVE1MRWxlbWVudDtcblxuICAgIC8vIFdlIG5lZWQgdGhlIGV4dHJhIGNoZWNrLCBiZWNhdXNlIElFIGNhbiBzZXQgdGhlIGBhY3RpdmVFbGVtZW50YCB0byBudWxsIGluIHNvbWUgY2FzZXMuXG4gICAgaWYgKHRvRm9jdXMgJiYgdHlwZW9mIHRvRm9jdXMuZm9jdXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSB0aGlzLmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgRWxlbWVudDtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICAgICAgaWYgKCFhY3RpdmVFbGVtZW50IHx8IGFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuZG9jdW1lbnQuYm9keSB8fCBhY3RpdmVFbGVtZW50ID09PSBlbGVtZW50IHx8IGVsZW1lbnQuY29udGFpbnMoYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgdG9Gb2N1cy5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmZvY3VzVHJhcCkge1xuICAgICAgdGhpcy5mb2N1c1RyYXAuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0RW50ZXJBbmltYXRpb25DbGFzcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hbmltYXRpb25EaXNhYmxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIE1ha2Ugc3VyZSB0byBzZXQgdGhlIGBUcmFuc2Zvcm1PcmlnaW5gIHN0eWxlIGJlZm9yZSBzZXQgdGhlIG1vZGVsRWxlbWVudCdzIGNsYXNzIG5hbWVzXG4gICAgdGhpcy5zZXRNb2RhbFRyYW5zZm9ybU9yaWdpbigpO1xuICAgIGNvbnN0IG1vZGFsRWxlbWVudCA9IHRoaXMubW9kYWxFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgYmFja2Ryb3BFbGVtZW50ID0gdGhpcy5vdmVybGF5UmVmLmJhY2tkcm9wRWxlbWVudDtcbiAgICBtb2RhbEVsZW1lbnQuY2xhc3NMaXN0LmFkZChaT09NX0NMQVNTX05BTUVfTUFQLmVudGVyKTtcbiAgICBtb2RhbEVsZW1lbnQuY2xhc3NMaXN0LmFkZChaT09NX0NMQVNTX05BTUVfTUFQLmVudGVyQWN0aXZlKTtcbiAgICBpZiAoYmFja2Ryb3BFbGVtZW50KSB7XG4gICAgICBiYWNrZHJvcEVsZW1lbnQuY2xhc3NMaXN0LmFkZChGQURFX0NMQVNTX05BTUVfTUFQLmVudGVyKTtcbiAgICAgIGJhY2tkcm9wRWxlbWVudC5jbGFzc0xpc3QuYWRkKEZBREVfQ0xBU1NfTkFNRV9NQVAuZW50ZXJBY3RpdmUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0RXhpdEFuaW1hdGlvbkNsYXNzKCk6IHZvaWQge1xuICAgIGNvbnN0IG1vZGFsRWxlbWVudCA9IHRoaXMubW9kYWxFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBtb2RhbEVsZW1lbnQuY2xhc3NMaXN0LmFkZChaT09NX0NMQVNTX05BTUVfTUFQLmxlYXZlKTtcbiAgICBtb2RhbEVsZW1lbnQuY2xhc3NMaXN0LmFkZChaT09NX0NMQVNTX05BTUVfTUFQLmxlYXZlQWN0aXZlKTtcblxuICAgIHRoaXMuc2V0TWFza0V4aXRBbmltYXRpb25DbGFzcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRNYXNrRXhpdEFuaW1hdGlvbkNsYXNzKGZvcmNlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBjb25zdCBiYWNrZHJvcEVsZW1lbnQgPSB0aGlzLm92ZXJsYXlSZWYuYmFja2Ryb3BFbGVtZW50O1xuICAgIGlmIChiYWNrZHJvcEVsZW1lbnQpIHtcbiAgICAgIGlmICh0aGlzLmFuaW1hdGlvbkRpc2FibGVkKCkgfHwgZm9yY2UpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvY29tcG9uZW50cy9pc3N1ZXMvMTg2NDVcbiAgICAgICAgYmFja2Ryb3BFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoTU9EQUxfTUFTS19DTEFTU19OQU1FKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYmFja2Ryb3BFbGVtZW50LmNsYXNzTGlzdC5hZGQoRkFERV9DTEFTU19OQU1FX01BUC5sZWF2ZSk7XG4gICAgICBiYWNrZHJvcEVsZW1lbnQuY2xhc3NMaXN0LmFkZChGQURFX0NMQVNTX05BTUVfTUFQLmxlYXZlQWN0aXZlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFuQW5pbWF0aW9uQ2xhc3MoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uRGlzYWJsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBiYWNrZHJvcEVsZW1lbnQgPSB0aGlzLm92ZXJsYXlSZWYuYmFja2Ryb3BFbGVtZW50O1xuICAgIGNvbnN0IG1vZGFsRWxlbWVudCA9IHRoaXMubW9kYWxFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKGJhY2tkcm9wRWxlbWVudCkge1xuICAgICAgYmFja2Ryb3BFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoRkFERV9DTEFTU19OQU1FX01BUC5lbnRlcik7XG4gICAgICBiYWNrZHJvcEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShGQURFX0NMQVNTX05BTUVfTUFQLmVudGVyQWN0aXZlKTtcbiAgICB9XG4gICAgbW9kYWxFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoWk9PTV9DTEFTU19OQU1FX01BUC5lbnRlcik7XG4gICAgbW9kYWxFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoWk9PTV9DTEFTU19OQU1FX01BUC5lbnRlckFjdGl2ZSk7XG4gICAgbW9kYWxFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoWk9PTV9DTEFTU19OQU1FX01BUC5sZWF2ZSk7XG4gICAgbW9kYWxFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoWk9PTV9DTEFTU19OQU1FX01BUC5sZWF2ZUFjdGl2ZSk7XG4gIH1cblxuICBiaW5kQmFja2Ryb3BTdHlsZSgpOiB2b2lkIHtcbiAgICBjb25zdCBiYWNrZHJvcEVsZW1lbnQgPSB0aGlzLm92ZXJsYXlSZWYuYmFja2Ryb3BFbGVtZW50O1xuICAgIGlmIChiYWNrZHJvcEVsZW1lbnQpIHtcbiAgICAgIGlmICh0aGlzLm9sZE1hc2tTdHlsZSkge1xuICAgICAgICBjb25zdCBzdHlsZXMgPSB0aGlzLm9sZE1hc2tTdHlsZSBhcyB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAgICAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICB0aGlzLnJlbmRlci5yZW1vdmVTdHlsZShiYWNrZHJvcEVsZW1lbnQsIGtleSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9sZE1hc2tTdHlsZSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWcubnpNYXNrU3R5bGUgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKHRoaXMuY29uZmlnLm56TWFza1N0eWxlKS5sZW5ndGgpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0geyAuLi50aGlzLmNvbmZpZy5uek1hc2tTdHlsZSB9O1xuICAgICAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICB0aGlzLnJlbmRlci5zZXRTdHlsZShiYWNrZHJvcEVsZW1lbnQsIGtleSwgc3R5bGVzW2tleV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vbGRNYXNrU3R5bGUgPSBzdHlsZXM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgY29udGFpbmVyIGVsZW1lbnQuXG4gICAqIEBkZXByZWNhdGVkIE5vdCBzdXBwb3J0ZWQuXG4gICAqIEBicmVha2luZy1jaGFuZ2UgMTAuMC4wXG4gICAqL1xuICBwcml2YXRlIHNldENvbnRhaW5lcigpOiB2b2lkIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmdldENvbnRhaW5lcigpO1xuICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgIHRoaXMucmVuZGVyLmFwcGVuZENoaWxkKGNvbnRhaW5lciwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgY29udGFpbmVyIGVsZW1lbnQuXG4gICAqIEBkZXByZWNhdGVkIE5vdCBzdXBwb3J0ZWQuXG4gICAqIEBicmVha2luZy1jaGFuZ2UgMTAuMC4wXG4gICAqL1xuICBwcml2YXRlIHJlc2V0Q29udGFpbmVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZ2V0Q29udGFpbmVyKCk7XG4gICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yZW5kZXIuYXBwZW5kQ2hpbGQodGhpcy5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50LCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb250YWluZXIoKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgICBjb25zdCB7IG56R2V0Q29udGFpbmVyIH0gPSB0aGlzLmNvbmZpZztcbiAgICBjb25zdCBjb250YWluZXIgPSB0eXBlb2YgbnpHZXRDb250YWluZXIgPT09ICdmdW5jdGlvbicgPyBuekdldENvbnRhaW5lcigpIDogbnpHZXRDb250YWluZXI7XG4gICAgcmV0dXJuIGNvbnRhaW5lciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gY29udGFpbmVyIDogbnVsbDtcbiAgfVxuXG4gIHVwZGF0ZU1hc2tDbGFzc25hbWUoKTogdm9pZCB7XG4gICAgY29uc3QgYmFja2Ryb3BFbGVtZW50ID0gdGhpcy5vdmVybGF5UmVmLmJhY2tkcm9wRWxlbWVudDtcbiAgICBpZiAoYmFja2Ryb3BFbGVtZW50KSB7XG4gICAgICBpZiAodGhpcy5zaG93TWFzaykge1xuICAgICAgICBiYWNrZHJvcEVsZW1lbnQuY2xhc3NMaXN0LmFkZChNT0RBTF9NQVNLX0NMQVNTX05BTUUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmFja2Ryb3BFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoTU9EQUxfTUFTS19DTEFTU19OQU1FKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkFuaW1hdGlvbkRvbmUoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICdlbnRlcicpIHtcbiAgICAgIHRoaXMuc2V0Q29udGFpbmVyKCk7XG4gICAgICB0aGlzLnRyYXBGb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ2V4aXQnKSB7XG4gICAgICB0aGlzLnJlc3RvcmVGb2N1cygpO1xuICAgIH1cbiAgICB0aGlzLmNsZWFuQW5pbWF0aW9uQ2xhc3MoKTtcbiAgICB0aGlzLmFuaW1hdGlvblN0YXRlQ2hhbmdlZC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIG9uQW5pbWF0aW9uU3RhcnQoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICdlbnRlcicpIHtcbiAgICAgIHRoaXMuc2V0RW50ZXJBbmltYXRpb25DbGFzcygpO1xuICAgICAgdGhpcy5iaW5kQmFja2Ryb3BTdHlsZSgpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ2V4aXQnKSB7XG4gICAgICB0aGlzLnJlc2V0Q29udGFpbmVyKCk7XG4gICAgICB0aGlzLnNldEV4aXRBbmltYXRpb25DbGFzcygpO1xuICAgIH1cbiAgICB0aGlzLmFuaW1hdGlvblN0YXRlQ2hhbmdlZC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHN0YXJ0RXhpdEFuaW1hdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlID0gJ2V4aXQnO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zZXRNYXNrRXhpdEFuaW1hdGlvbkNsYXNzKHRydWUpO1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19