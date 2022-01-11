import { OverlayRef, OverlayConfig, Overlay, OverlayModule } from '@angular/cdk/overlay';
import { BasePortalOutlet, CdkPortalOutlet, PortalInjector, ComponentPortal, TemplatePortal, PortalModule } from '@angular/cdk/portal';
import { EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, Optional, Inject, ViewChild, Output, TemplateRef, Injectable, Injector, SkipSelf, Directive, ViewContainerRef, Input, ContentChild, NgModule } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { warn } from 'ng-zorro-antd/core/logger';
import { getElementOffset, isPromise, isNotNil, InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject, defer } from 'rxjs';
import { takeUntil, filter, take, startWith } from 'rxjs/operators';
import { ConfigurableFocusTrapFactory } from '@angular/cdk/a11y';
import { DOCUMENT, CommonModule } from '@angular/common';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { NzI18nService, NzI18nModule } from 'ng-zorro-antd/i18n';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ESCAPE, hasModifierKey } from '@angular/cdk/keycodes';
import { __rest, __decorate, __metadata } from 'tslib';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzPipesModule } from 'ng-zorro-antd/core/pipe';
import { NzIconModule } from 'ng-zorro-antd/icon';

/**
 * @fileoverview added by tsickle
 * Generated from: modal-types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @record
 */
function StyleObjectLike() { }
/** @type {?} */
const noopFun = (/**
 * @return {?}
 */
() => void 0);
const ɵ0 = noopFun;
/**
 * @template T, R
 */
class ModalOptions {
    constructor() {
        this.nzClosable = true;
        this.nzOkLoading = false;
        this.nzOkDisabled = false;
        this.nzCancelDisabled = false;
        this.nzCancelLoading = false;
        this.nzNoAnimation = false;
        this.nzAutofocus = 'auto';
        this.nzKeyboard = true;
        this.nzZIndex = 1000;
        this.nzWidth = 520;
        this.nzCloseIcon = 'close';
        this.nzOkType = 'primary';
        this.nzModalType = 'default';
        this.nzOnCancel = noopFun;
        this.nzOnOk = noopFun;
        // Confirm
        this.nzIconType = 'question-circle';
    }
}
if (false) {
    /** @type {?} */
    ModalOptions.prototype.nzClosable;
    /** @type {?} */
    ModalOptions.prototype.nzOkLoading;
    /** @type {?} */
    ModalOptions.prototype.nzOkDisabled;
    /** @type {?} */
    ModalOptions.prototype.nzCancelDisabled;
    /** @type {?} */
    ModalOptions.prototype.nzCancelLoading;
    /** @type {?} */
    ModalOptions.prototype.nzNoAnimation;
    /** @type {?} */
    ModalOptions.prototype.nzAutofocus;
    /** @type {?} */
    ModalOptions.prototype.nzMask;
    /** @type {?} */
    ModalOptions.prototype.nzMaskClosable;
    /** @type {?} */
    ModalOptions.prototype.nzKeyboard;
    /** @type {?} */
    ModalOptions.prototype.nzZIndex;
    /** @type {?} */
    ModalOptions.prototype.nzWidth;
    /** @type {?} */
    ModalOptions.prototype.nzCloseIcon;
    /** @type {?} */
    ModalOptions.prototype.nzOkType;
    /** @type {?} */
    ModalOptions.prototype.nzModalType;
    /** @type {?} */
    ModalOptions.prototype.nzOnCancel;
    /** @type {?} */
    ModalOptions.prototype.nzOnOk;
    /** @type {?} */
    ModalOptions.prototype.nzComponentParams;
    /** @type {?} */
    ModalOptions.prototype.nzMaskStyle;
    /** @type {?} */
    ModalOptions.prototype.nzBodyStyle;
    /** @type {?} */
    ModalOptions.prototype.nzWrapClassName;
    /** @type {?} */
    ModalOptions.prototype.nzClassName;
    /** @type {?} */
    ModalOptions.prototype.nzStyle;
    /** @type {?} */
    ModalOptions.prototype.nzTitle;
    /** @type {?} */
    ModalOptions.prototype.nzFooter;
    /** @type {?} */
    ModalOptions.prototype.nzCancelText;
    /** @type {?} */
    ModalOptions.prototype.nzOkText;
    /** @type {?} */
    ModalOptions.prototype.nzContent;
    /** @type {?} */
    ModalOptions.prototype.nzCloseOnNavigation;
    /** @type {?} */
    ModalOptions.prototype.nzViewContainerRef;
    /**
     * Reset the container element.
     * @deprecated Not supported.
     * \@breaking-change 10.0.0
     * @type {?}
     */
    ModalOptions.prototype.nzGetContainer;
    /** @type {?} */
    ModalOptions.prototype.nzAfterOpen;
    /** @type {?} */
    ModalOptions.prototype.nzAfterClose;
    /** @type {?} */
    ModalOptions.prototype.nzIconType;
}
/**
 * @record
 * @template T
 */
function ModalButtonOptions() { }
if (false) {
    /** @type {?} */
    ModalButtonOptions.prototype.label;
    /** @type {?|undefined} */
    ModalButtonOptions.prototype.type;
    /** @type {?|undefined} */
    ModalButtonOptions.prototype.shape;
    /** @type {?|undefined} */
    ModalButtonOptions.prototype.ghost;
    /** @type {?|undefined} */
    ModalButtonOptions.prototype.size;
    /** @type {?|undefined} */
    ModalButtonOptions.prototype.autoLoading;
    /** @type {?|undefined} */
    ModalButtonOptions.prototype.show;
    /** @type {?|undefined} */
    ModalButtonOptions.prototype.loading;
    /** @type {?|undefined} */
    ModalButtonOptions.prototype.disabled;
    /* Skipping unhandled member: [key: string]: NzSafeAny;*/
    /**
     * @this {?}
     * @param {?=} contentComponentInstance
     * @return {?}
     */
    ModalButtonOptions.prototype.onClick = function (contentComponentInstance) { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: modal-config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/** @type {?} */
const ZOOM_CLASS_NAME_MAP = {
    enter: 'zoom-enter',
    enterActive: 'zoom-enter-active',
    leave: 'zoom-leave',
    leaveActive: 'zoom-leave-active'
};
/** @type {?} */
const FADE_CLASS_NAME_MAP = {
    enter: 'fade-enter',
    enterActive: 'fade-enter-active',
    leave: 'fade-leave',
    leaveActive: 'fade-leave-active'
};
/** @type {?} */
const MODAL_MASK_CLASS_NAME = 'ant-modal-mask';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'modal';

/**
 * @fileoverview added by tsickle
 * Generated from: modal-animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const nzModalAnimations = {
    modalContainer: trigger('modalContainer', [
        state('void, exit', style({})),
        state('enter', style({})),
        transition('* => enter', animate('.24s', style({}))),
        transition('* => void, * => exit', animate('.2s', style({})))
    ])
};

/**
 * @fileoverview added by tsickle
 * Generated from: utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @param {?} config
 * @param {?} defaultOptions
 * @return {?}
 */
function applyConfigDefaults(config, defaultOptions) {
    return Object.assign(Object.assign({}, defaultOptions), config);
}
/**
 * @template T
 * @param {?} userValue
 * @param {?} configValue
 * @param {?} defaultValue
 * @return {?}
 */
function getValueWithConfig(userValue, configValue, defaultValue) {
    return typeof userValue === 'undefined' ? (typeof configValue === 'undefined' ? defaultValue : configValue) : userValue;
}
/**
 * Assign the params into the content component instance.
 * @deprecated Should use dependency injection to get the params for user
 * \@breaking-change 10.0.0
 * @template T
 * @param {?} instance
 * @param {?} params
 * @return {?}
 */
function setContentInstanceParams(instance, params) {
    Object.assign(instance, params);
}
/**
 * @param {?} component
 * @return {?}
 */
function getConfigFromComponent(component) {
    const { nzMask, nzMaskClosable, nzClosable, nzOkLoading, nzOkDisabled, nzCancelDisabled, nzCancelLoading, nzKeyboard, nzNoAnimation, nzContent, nzComponentParams, nzFooter, nzGetContainer, nzZIndex, nzWidth, nzWrapClassName, nzClassName, nzStyle, nzTitle, nzCloseIcon, nzMaskStyle, nzBodyStyle, nzOkText, nzCancelText, nzOkType, nzIconType, nzModalType, nzOnOk, nzOnCancel, nzAfterOpen, nzAfterClose, nzCloseOnNavigation, nzAutofocus } = component;
    return {
        nzMask,
        nzMaskClosable,
        nzClosable,
        nzOkLoading,
        nzOkDisabled,
        nzCancelDisabled,
        nzCancelLoading,
        nzKeyboard,
        nzNoAnimation,
        nzContent,
        nzComponentParams,
        nzFooter,
        nzGetContainer,
        nzZIndex,
        nzWidth,
        nzWrapClassName,
        nzClassName,
        nzStyle,
        nzTitle,
        nzCloseIcon,
        nzMaskStyle,
        nzBodyStyle,
        nzOkText,
        nzCancelText,
        nzOkType,
        nzIconType,
        nzModalType,
        nzOnOk,
        nzOnCancel,
        nzAfterOpen,
        nzAfterClose,
        nzCloseOnNavigation,
        nzAutofocus
    };
}

/**
 * @fileoverview added by tsickle
 * Generated from: modal-container.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function throwNzModalContentAlreadyAttachedError() {
    throw Error('Attempting to attach modal content after content is already attached');
}
class BaseModalContainer extends BasePortalOutlet {
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

/**
 * @fileoverview added by tsickle
 * Generated from: modal-confirm-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzModalConfirmContainerComponent extends BaseModalContainer {
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

/**
 * @fileoverview added by tsickle
 * Generated from: modal-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzModalContainerComponent extends BaseModalContainer {
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

/**
 * @fileoverview added by tsickle
 * Generated from: modal-ref.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const NzModalState = {
    OPEN: 0,
    CLOSING: 1,
    CLOSED: 2,
};
/** @enum {string} */
const NzTriggerAction = {
    CANCEL: "cancel",
    OK: "ok",
};
/**
 * @template T, R
 */
class NzModalRef {
    /**
     * @param {?} overlayRef
     * @param {?} config
     * @param {?} containerInstance
     */
    constructor(overlayRef, config, containerInstance) {
        this.overlayRef = overlayRef;
        this.config = config;
        this.containerInstance = containerInstance;
        this.componentInstance = null;
        this.state = 0 /* OPEN */;
        this.afterClose = new Subject();
        this.afterOpen = new Subject();
        containerInstance.animationStateChanged
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => event.phaseName === 'done' && event.toState === 'enter')), take(1))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.afterOpen.next();
            this.afterOpen.complete();
            if (config.nzAfterOpen instanceof EventEmitter) {
                config.nzAfterOpen.emit();
            }
        }));
        containerInstance.animationStateChanged
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => event.phaseName === 'done' && event.toState === 'exit')), take(1))
            .subscribe((/**
         * @return {?}
         */
        () => {
            clearTimeout(this.closeTimeout);
            this._finishDialogClose();
        }));
        containerInstance.containerClick.pipe(take(1)).subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const cancelable = !this.config.nzCancelLoading && !this.config.nzOkLoading;
            if (cancelable) {
                this.trigger("cancel" /* CANCEL */);
            }
        }));
        overlayRef
            .keydownEvents()
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            return (((/** @type {?} */ (this.config.nzKeyboard))) &&
                !this.config.nzCancelLoading &&
                !this.config.nzOkLoading &&
                event.keyCode === ESCAPE &&
                !hasModifierKey(event));
        })))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            event.preventDefault();
            this.trigger("cancel" /* CANCEL */);
        }));
        containerInstance.cancelTriggered.subscribe((/**
         * @return {?}
         */
        () => this.trigger("cancel" /* CANCEL */)));
        containerInstance.okTriggered.subscribe((/**
         * @return {?}
         */
        () => this.trigger("ok" /* OK */)));
        overlayRef.detachments().subscribe((/**
         * @return {?}
         */
        () => {
            this.afterClose.next(this.result);
            this.afterClose.complete();
            if (config.nzAfterClose instanceof EventEmitter) {
                config.nzAfterClose.emit(this.result);
            }
            this.componentInstance = null;
            this.overlayRef.dispose();
        }));
    }
    /**
     * @return {?}
     */
    getContentComponent() {
        return (/** @type {?} */ (this.componentInstance));
    }
    /**
     * @return {?}
     */
    getElement() {
        return this.containerInstance.getNativeElement();
    }
    /**
     * @param {?=} result
     * @return {?}
     */
    destroy(result) {
        this.close(result);
    }
    /**
     * @return {?}
     */
    triggerOk() {
        this.trigger("ok" /* OK */);
    }
    /**
     * @return {?}
     */
    triggerCancel() {
        this.trigger("cancel" /* CANCEL */);
    }
    /**
     * Open the modal.
     * @deprecated Opened when create, this method is useless.
     * \@breaking-change 10.0.0
     * @return {?}
     */
    open() {
        // noop
    }
    /**
     * @param {?=} result
     * @return {?}
     */
    close(result) {
        this.result = result;
        this.containerInstance.animationStateChanged
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => event.phaseName === 'start')), take(1))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.overlayRef.detachBackdrop();
            this.closeTimeout = setTimeout((/**
             * @return {?}
             */
            () => {
                this._finishDialogClose();
            }), event.totalTime + 100);
        }));
        this.containerInstance.startExitAnimation();
        this.state = 1 /* CLOSING */;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    updateConfig(config) {
        Object.assign(this.config, config);
        this.containerInstance.bindBackdropStyle();
        this.containerInstance.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    getState() {
        return this.state;
    }
    /**
     * @return {?}
     */
    getConfig() {
        return this.config;
    }
    /**
     * @return {?}
     */
    getBackdropElement() {
        return this.overlayRef.backdropElement;
    }
    /**
     * @private
     * @param {?} action
     * @return {?}
     */
    trigger(action) {
        /** @type {?} */
        const trigger = { ok: this.config.nzOnOk, cancel: this.config.nzOnCancel }[action];
        /** @type {?} */
        const loadingKey = (/** @type {?} */ ({ ok: 'nzOkLoading', cancel: 'nzCancelLoading' }[action]));
        /** @type {?} */
        const loading = this.config[loadingKey];
        if (loading) {
            return;
        }
        if (trigger instanceof EventEmitter) {
            trigger.emit(this.getContentComponent());
        }
        else if (typeof trigger === 'function') {
            /** @type {?} */
            const result = trigger(this.getContentComponent());
            /** @type {?} */
            const caseClose = (/**
             * @param {?} doClose
             * @return {?}
             */
            (doClose) => doClose !== false && this.close((/** @type {?} */ (doClose))));
            if (isPromise(result)) {
                this.config[loadingKey] = true;
                /** @type {?} */
                const handleThen = (/**
                 * @param {?} doClose
                 * @return {?}
                 */
                (doClose) => {
                    this.config[loadingKey] = false;
                    this.closeWhitResult(doClose);
                });
                result.then(handleThen).catch(handleThen);
            }
            else {
                caseClose(result);
            }
        }
    }
    /**
     * @private
     * @param {?} result
     * @return {?}
     */
    closeWhitResult(result) {
        if (result !== false) {
            this.close(result);
        }
    }
    /**
     * @return {?}
     */
    _finishDialogClose() {
        this.state = 2 /* CLOSED */;
        this.overlayRef.dispose();
    }
}
if (false) {
    /** @type {?} */
    NzModalRef.prototype.componentInstance;
    /** @type {?} */
    NzModalRef.prototype.result;
    /** @type {?} */
    NzModalRef.prototype.state;
    /** @type {?} */
    NzModalRef.prototype.afterClose;
    /** @type {?} */
    NzModalRef.prototype.afterOpen;
    /**
     * @type {?}
     * @private
     */
    NzModalRef.prototype.closeTimeout;
    /**
     * @type {?}
     * @private
     */
    NzModalRef.prototype.overlayRef;
    /**
     * @type {?}
     * @private
     */
    NzModalRef.prototype.config;
    /** @type {?} */
    NzModalRef.prototype.containerInstance;
}

/**
 * @fileoverview added by tsickle
 * Generated from: modal.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzModalService {
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

/**
 * @fileoverview added by tsickle
 * Generated from: modal-footer.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzModalFooterDirective {
    /**
     * @param {?} nzModalRef
     * @param {?} templateRef
     */
    constructor(nzModalRef, templateRef) {
        this.nzModalRef = nzModalRef;
        this.templateRef = templateRef;
        if (this.nzModalRef) {
            this.nzModalRef.updateConfig({
                nzFooter: this.templateRef
            });
        }
    }
}
NzModalFooterDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nzModalFooter]',
                exportAs: 'nzModalFooter'
            },] }
];
/** @nocollapse */
NzModalFooterDirective.ctorParameters = () => [
    { type: NzModalRef, decorators: [{ type: Optional }] },
    { type: TemplateRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzModalFooterDirective.prototype.nzModalRef;
    /** @type {?} */
    NzModalFooterDirective.prototype.templateRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, R
 */
class NzModalComponent {
    /**
     * @param {?} cdr
     * @param {?} modal
     * @param {?} viewContainerRef
     */
    constructor(cdr, modal, viewContainerRef) {
        this.cdr = cdr;
        this.modal = modal;
        this.viewContainerRef = viewContainerRef;
        this.nzVisible = false;
        this.nzClosable = true;
        this.nzOkLoading = false;
        this.nzOkDisabled = false;
        this.nzCancelDisabled = false;
        this.nzCancelLoading = false;
        this.nzKeyboard = true;
        this.nzNoAnimation = false;
        this.nzZIndex = 1000;
        this.nzWidth = 520;
        this.nzCloseIcon = 'close';
        this.nzOkType = 'primary';
        this.nzIconType = 'question-circle'; // Confirm Modal ONLY
        // Confirm Modal ONLY
        this.nzModalType = 'default';
        this.nzAutofocus = 'auto';
        // TODO(@hsuanxyz) Input will not be supported
        this.nzOnOk = new EventEmitter();
        // TODO(@hsuanxyz) Input will not be supported
        this.nzOnCancel = new EventEmitter();
        this.nzAfterOpen = new EventEmitter();
        this.nzAfterClose = new EventEmitter();
        this.nzVisibleChange = new EventEmitter();
        this.modalRef = null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set modalFooter(value) {
        if (value && value.templateRef) {
            this.setFooterWithTemplate(value.templateRef);
        }
    }
    /**
     * @return {?}
     */
    get afterOpen() {
        // Observable alias for nzAfterOpen
        return this.nzAfterOpen.asObservable();
    }
    /**
     * @return {?}
     */
    get afterClose() {
        // Observable alias for nzAfterClose
        return this.nzAfterClose.asObservable();
    }
    /**
     * @return {?}
     */
    open() {
        if (!this.nzVisible) {
            this.nzVisible = true;
            this.nzVisibleChange.emit(true);
        }
        if (!this.modalRef) {
            /** @type {?} */
            const config = this.getConfig();
            this.modalRef = this.modal.create(config);
        }
    }
    /**
     * @param {?=} result
     * @return {?}
     */
    close(result) {
        if (this.nzVisible) {
            this.nzVisible = false;
            this.nzVisibleChange.emit(false);
        }
        if (this.modalRef) {
            this.modalRef.close(result);
            this.modalRef = null;
        }
    }
    /**
     * @param {?=} result
     * @return {?}
     */
    destroy(result) {
        this.close(result);
    }
    /**
     * @return {?}
     */
    triggerOk() {
        var _a;
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.triggerOk();
    }
    /**
     * @return {?}
     */
    triggerCancel() {
        var _a;
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.triggerCancel();
    }
    /**
     * @return {?}
     */
    getContentComponent() {
        var _a;
        return (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.getContentComponent();
    }
    /**
     * @return {?}
     */
    getElement() {
        var _a;
        return (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.getElement();
    }
    /**
     * @return {?}
     */
    getModalRef() {
        return this.modalRef;
    }
    /**
     * @private
     * @param {?} templateRef
     * @return {?}
     */
    setFooterWithTemplate(templateRef) {
        this.nzFooter = templateRef;
        if (this.modalRef) {
            // If modalRef already created, set the footer in next tick
            Promise.resolve().then((/**
             * @return {?}
             */
            () => {
                (/** @type {?} */ (this.modalRef)).updateConfig({
                    nzFooter: this.nzFooter
                });
            }));
        }
        this.cdr.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    getConfig() {
        /** @type {?} */
        const componentConfig = getConfigFromComponent(this);
        componentConfig.nzViewContainerRef = this.viewContainerRef;
        if (!this.nzContent) {
            componentConfig.nzContent = this.contentTemplateRef;
        }
        return componentConfig;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzVisible } = changes, otherChanges = __rest(changes, ["nzVisible"]);
        if (Object.keys(otherChanges).length && this.modalRef) {
            this.modalRef.updateConfig(getConfigFromComponent(this));
        }
        if (nzVisible) {
            if (this.nzVisible) {
                this.open();
            }
            else {
                this.close();
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        var _a;
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a._finishDialogClose();
    }
}
NzModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-modal',
                exportAs: 'nzModal',
                template: ` <ng-template><ng-content></ng-content></ng-template> `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NzModalComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzModalService },
    { type: ViewContainerRef }
];
NzModalComponent.propDecorators = {
    nzMask: [{ type: Input }],
    nzMaskClosable: [{ type: Input }],
    nzCloseOnNavigation: [{ type: Input }],
    nzVisible: [{ type: Input }],
    nzClosable: [{ type: Input }],
    nzOkLoading: [{ type: Input }],
    nzOkDisabled: [{ type: Input }],
    nzCancelDisabled: [{ type: Input }],
    nzCancelLoading: [{ type: Input }],
    nzKeyboard: [{ type: Input }],
    nzNoAnimation: [{ type: Input }],
    nzContent: [{ type: Input }],
    nzComponentParams: [{ type: Input }],
    nzFooter: [{ type: Input }],
    nzGetContainer: [{ type: Input }],
    nzZIndex: [{ type: Input }],
    nzWidth: [{ type: Input }],
    nzWrapClassName: [{ type: Input }],
    nzClassName: [{ type: Input }],
    nzStyle: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzCloseIcon: [{ type: Input }],
    nzMaskStyle: [{ type: Input }],
    nzBodyStyle: [{ type: Input }],
    nzOkText: [{ type: Input }],
    nzCancelText: [{ type: Input }],
    nzOkType: [{ type: Input }],
    nzIconType: [{ type: Input }],
    nzModalType: [{ type: Input }],
    nzAutofocus: [{ type: Input }],
    nzOnOk: [{ type: Input }, { type: Output }],
    nzOnCancel: [{ type: Input }, { type: Output }],
    nzAfterOpen: [{ type: Output }],
    nzAfterClose: [{ type: Output }],
    nzVisibleChange: [{ type: Output }],
    contentTemplateRef: [{ type: ViewChild, args: [TemplateRef, { static: true },] }],
    modalFooter: [{ type: ContentChild, args: [NzModalFooterDirective,] }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzMask", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzMaskClosable", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzCloseOnNavigation", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzVisible", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzClosable", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzOkLoading", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzOkDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzCancelDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzCancelLoading", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzKeyboard", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzModalComponent.prototype, "nzNoAnimation", void 0);
if (false) {
    /** @type {?} */
    NzModalComponent.ngAcceptInputType_nzMask;
    /** @type {?} */
    NzModalComponent.ngAcceptInputType_nzMaskClosable;
    /** @type {?} */
    NzModalComponent.ngAcceptInputType_nzCloseOnNavigation;
    /** @type {?} */
    NzModalComponent.ngAcceptInputType_nzVisible;
    /** @type {?} */
    NzModalComponent.ngAcceptInputType_nzClosable;
    /** @type {?} */
    NzModalComponent.ngAcceptInputType_nzOkLoading;
    /** @type {?} */
    NzModalComponent.ngAcceptInputType_nzOkDisabled;
    /** @type {?} */
    NzModalComponent.ngAcceptInputType_nzCancelDisabled;
    /** @type {?} */
    NzModalComponent.ngAcceptInputType_nzCancelLoading;
    /** @type {?} */
    NzModalComponent.ngAcceptInputType_nzKeyboard;
    /** @type {?} */
    NzModalComponent.ngAcceptInputType_nzNoAnimation;
    /** @type {?} */
    NzModalComponent.prototype.nzMask;
    /** @type {?} */
    NzModalComponent.prototype.nzMaskClosable;
    /** @type {?} */
    NzModalComponent.prototype.nzCloseOnNavigation;
    /** @type {?} */
    NzModalComponent.prototype.nzVisible;
    /** @type {?} */
    NzModalComponent.prototype.nzClosable;
    /** @type {?} */
    NzModalComponent.prototype.nzOkLoading;
    /** @type {?} */
    NzModalComponent.prototype.nzOkDisabled;
    /** @type {?} */
    NzModalComponent.prototype.nzCancelDisabled;
    /** @type {?} */
    NzModalComponent.prototype.nzCancelLoading;
    /** @type {?} */
    NzModalComponent.prototype.nzKeyboard;
    /** @type {?} */
    NzModalComponent.prototype.nzNoAnimation;
    /** @type {?} */
    NzModalComponent.prototype.nzContent;
    /** @type {?} */
    NzModalComponent.prototype.nzComponentParams;
    /** @type {?} */
    NzModalComponent.prototype.nzFooter;
    /** @type {?} */
    NzModalComponent.prototype.nzGetContainer;
    /** @type {?} */
    NzModalComponent.prototype.nzZIndex;
    /** @type {?} */
    NzModalComponent.prototype.nzWidth;
    /** @type {?} */
    NzModalComponent.prototype.nzWrapClassName;
    /** @type {?} */
    NzModalComponent.prototype.nzClassName;
    /** @type {?} */
    NzModalComponent.prototype.nzStyle;
    /** @type {?} */
    NzModalComponent.prototype.nzTitle;
    /** @type {?} */
    NzModalComponent.prototype.nzCloseIcon;
    /** @type {?} */
    NzModalComponent.prototype.nzMaskStyle;
    /** @type {?} */
    NzModalComponent.prototype.nzBodyStyle;
    /** @type {?} */
    NzModalComponent.prototype.nzOkText;
    /** @type {?} */
    NzModalComponent.prototype.nzCancelText;
    /** @type {?} */
    NzModalComponent.prototype.nzOkType;
    /** @type {?} */
    NzModalComponent.prototype.nzIconType;
    /** @type {?} */
    NzModalComponent.prototype.nzModalType;
    /** @type {?} */
    NzModalComponent.prototype.nzAutofocus;
    /** @type {?} */
    NzModalComponent.prototype.nzOnOk;
    /** @type {?} */
    NzModalComponent.prototype.nzOnCancel;
    /** @type {?} */
    NzModalComponent.prototype.nzAfterOpen;
    /** @type {?} */
    NzModalComponent.prototype.nzAfterClose;
    /** @type {?} */
    NzModalComponent.prototype.nzVisibleChange;
    /** @type {?} */
    NzModalComponent.prototype.contentTemplateRef;
    /**
     * @type {?}
     * @private
     */
    NzModalComponent.prototype.modalRef;
    /**
     * @type {?}
     * @private
     */
    NzModalComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzModalComponent.prototype.modal;
    /**
     * @type {?}
     * @private
     */
    NzModalComponent.prototype.viewContainerRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: modal-close.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzModalCloseComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
    }
}
NzModalCloseComponent.decorators = [
    { type: Component, args: [{
                selector: 'button[nz-modal-close]',
                exportAs: 'NzModalCloseBuiltin',
                template: `
    <span class="ant-modal-close-x">
      <ng-container *nzStringTemplateOutlet="config.nzCloseIcon; let closeIcon">
        <i nz-icon [nzType]="closeIcon" class="ant-modal-close-icon"></i>
      </ng-container>
    </span>
  `,
                host: {
                    class: 'ant-modal-close',
                    'aria-label': 'Close'
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NzModalCloseComponent.ctorParameters = () => [
    { type: ModalOptions }
];
if (false) {
    /** @type {?} */
    NzModalCloseComponent.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * Generated from: modal-footer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzModalFooterComponent {
    /**
     * @param {?} i18n
     * @param {?} config
     */
    constructor(i18n, config) {
        this.i18n = i18n;
        this.config = config;
        this.buttonsFooter = false;
        this.buttons = [];
        this.cancelTriggered = new EventEmitter();
        this.okTriggered = new EventEmitter();
        this.destroy$ = new Subject();
        if (Array.isArray(config.nzFooter)) {
            this.buttonsFooter = true;
            this.buttons = ((/** @type {?} */ (config.nzFooter))).map(mergeDefaultOption);
        }
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
    /**
     * Returns the value of the specified key.
     * If it is a function, run and return the return value of the function.
     * @deprecated Not support use function type.
     * \@breaking-change 10.0.0
     * @param {?} options
     * @param {?} prop
     * @return {?}
     */
    getButtonCallableProp(options, prop) {
        /** @type {?} */
        const value = options[prop];
        /** @type {?} */
        const componentInstance = this.modalRef.getContentComponent();
        return typeof value === 'function' ? value.apply(options, componentInstance && [componentInstance]) : value;
    }
    /**
     * Run function based on the type and set its `loading` prop if needed.
     * @deprecated Should be set options' value by the user, not library.
     * \@breaking-change 10.0.0
     * @param {?} options
     * @return {?}
     */
    onButtonClick(options) {
        /** @type {?} */
        const loading = this.getButtonCallableProp(options, 'loading');
        if (!loading) {
            /** @type {?} */
            const result = this.getButtonCallableProp(options, 'onClick');
            if (options.autoLoading && isPromise(result)) {
                options.loading = true;
                result.then((/**
                 * @return {?}
                 */
                () => (options.loading = false))).catch((/**
                 * @return {?}
                 */
                () => (options.loading = false)));
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzModalFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[nz-modal-footer]',
                exportAs: 'NzModalFooterBuiltin',
                template: `
    <ng-container *ngIf="config.nzFooter; else defaultFooterButtons">
      <ng-container *nzStringTemplateOutlet="config.nzFooter">
        <div *ngIf="!buttonsFooter" [innerHTML]="config.nzTitle"></div>
        <ng-container *ngIf="buttonsFooter">
          <button
            *ngFor="let button of buttons"
            nz-button
            (click)="onButtonClick(button)"
            [hidden]="!getButtonCallableProp(button, 'show')"
            [nzLoading]="getButtonCallableProp(button, 'loading')"
            [disabled]="getButtonCallableProp(button, 'disabled')"
            [nzType]="button.type!"
            [nzShape]="button.shape!"
            [nzSize]="button.size!"
            [nzGhost]="button.ghost!"
          >
            {{ button.label }}
          </button>
        </ng-container>
      </ng-container>
    </ng-container>
    <ng-template #defaultFooterButtons>
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
    </ng-template>
  `,
                host: {
                    class: 'ant-modal-footer'
                },
                changeDetection: ChangeDetectionStrategy.Default
            }] }
];
/** @nocollapse */
NzModalFooterComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: ModalOptions }
];
NzModalFooterComponent.propDecorators = {
    cancelTriggered: [{ type: Output }],
    okTriggered: [{ type: Output }],
    modalRef: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzModalFooterComponent.prototype.buttonsFooter;
    /** @type {?} */
    NzModalFooterComponent.prototype.buttons;
    /** @type {?} */
    NzModalFooterComponent.prototype.locale;
    /** @type {?} */
    NzModalFooterComponent.prototype.cancelTriggered;
    /** @type {?} */
    NzModalFooterComponent.prototype.okTriggered;
    /** @type {?} */
    NzModalFooterComponent.prototype.modalRef;
    /**
     * @type {?}
     * @private
     */
    NzModalFooterComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzModalFooterComponent.prototype.i18n;
    /** @type {?} */
    NzModalFooterComponent.prototype.config;
}
/**
 * @param {?} options
 * @return {?}
 */
function mergeDefaultOption(options) {
    return Object.assign({ type: null, size: 'default', autoLoading: true, show: true, loading: false, disabled: false }, options);
}

/**
 * @fileoverview added by tsickle
 * Generated from: modal-title.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzModalTitleComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
    }
}
NzModalTitleComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[nz-modal-title]',
                exportAs: 'NzModalTitleBuiltin',
                template: `
    <div class="ant-modal-title">
      <ng-container *nzStringTemplateOutlet="config.nzTitle">
        <div [innerHTML]="config.nzTitle"></div>
      </ng-container>
    </div>
  `,
                host: {
                    class: 'ant-modal-header'
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NzModalTitleComponent.ctorParameters = () => [
    { type: ModalOptions }
];
if (false) {
    /** @type {?} */
    NzModalTitleComponent.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * Generated from: modal.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzModalModule {
}
NzModalModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    OverlayModule,
                    NzOutletModule,
                    PortalModule,
                    NzI18nModule,
                    NzButtonModule,
                    NzIconModule,
                    NzPipesModule,
                    NzNoAnimationModule
                ],
                exports: [NzModalComponent, NzModalFooterDirective],
                providers: [NzModalService],
                entryComponents: [NzModalContainerComponent, NzModalConfirmContainerComponent],
                declarations: [
                    NzModalComponent,
                    NzModalFooterDirective,
                    NzModalCloseComponent,
                    NzModalFooterComponent,
                    NzModalTitleComponent,
                    NzModalContainerComponent,
                    NzModalConfirmContainerComponent,
                    NzModalComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: modal-legacy-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @abstract
 * @template T, R
 */
class NzModalLegacyAPI {
}
if (false) {
    /** @type {?} */
    NzModalLegacyAPI.prototype.afterOpen;
    /** @type {?} */
    NzModalLegacyAPI.prototype.afterClose;
    /**
     * @abstract
     * @return {?}
     */
    NzModalLegacyAPI.prototype.open = function () { };
    /**
     * @abstract
     * @param {?=} result
     * @return {?}
     */
    NzModalLegacyAPI.prototype.close = function (result) { };
    /**
     * @abstract
     * @param {?=} result
     * @return {?}
     */
    NzModalLegacyAPI.prototype.destroy = function (result) { };
    /**
     * Trigger the nzOnOk/nzOnCancel by manual
     * @abstract
     * @return {?}
     */
    NzModalLegacyAPI.prototype.triggerOk = function () { };
    /**
     * @abstract
     * @return {?}
     */
    NzModalLegacyAPI.prototype.triggerCancel = function () { };
    /**
     * Return the component instance of nzContent when specify nzContent as a Component
     * @abstract
     * @return {?}
     */
    NzModalLegacyAPI.prototype.getContentComponent = function () { };
    /**
     * Get the dom element of this Modal
     * @abstract
     * @return {?}
     */
    NzModalLegacyAPI.prototype.getElement = function () { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-modal.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BaseModalContainer, FADE_CLASS_NAME_MAP, MODAL_MASK_CLASS_NAME, ModalOptions, NZ_CONFIG_COMPONENT_NAME, NzModalCloseComponent, NzModalComponent, NzModalConfirmContainerComponent, NzModalContainerComponent, NzModalFooterComponent, NzModalFooterDirective, NzModalLegacyAPI, NzModalModule, NzModalRef, NzModalService, NzModalTitleComponent, ZOOM_CLASS_NAME_MAP, applyConfigDefaults, getConfigFromComponent, getValueWithConfig, nzModalAnimations, setContentInstanceParams, throwNzModalContentAlreadyAttachedError };
//# sourceMappingURL=ng-zorro-antd-modal.js.map
