import { OverlayRef, OverlayConfig, Overlay, OverlayModule } from '@angular/cdk/overlay';
import { BasePortalOutlet, CdkPortalOutlet, PortalInjector, ComponentPortal, TemplatePortal, PortalModule } from '@angular/cdk/portal';
import { EventEmitter, Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Renderer2, Optional, Inject, ViewChild, Output, TemplateRef, Injectable, Injector, SkipSelf, Directive, ViewContainerRef, Input, ContentChild, NgModule } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { warn } from 'ng-zorro-antd/core/logger';
import { getElementOffset, isPromise, isNotNil, InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject, defer } from 'rxjs';
import { takeUntil, filter, take, startWith } from 'rxjs/operators';
import { __assign, __extends, __rest, __decorate, __metadata } from 'tslib';
import { ConfigurableFocusTrapFactory } from '@angular/cdk/a11y';
import { DOCUMENT, CommonModule } from '@angular/common';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { NzI18nService, NzI18nModule } from 'ng-zorro-antd/i18n';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ESCAPE, hasModifierKey } from '@angular/cdk/keycodes';
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
var noopFun = (/**
 * @return {?}
 */
function () { return void 0; });
var ɵ0 = noopFun;
/**
 * @template T, R
 */
var  /**
 * @template T, R
 */
ModalOptions = /** @class */ (function () {
    function ModalOptions() {
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
    return ModalOptions;
}());
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
var ZOOM_CLASS_NAME_MAP = {
    enter: 'zoom-enter',
    enterActive: 'zoom-enter-active',
    leave: 'zoom-leave',
    leaveActive: 'zoom-leave-active'
};
/** @type {?} */
var FADE_CLASS_NAME_MAP = {
    enter: 'fade-enter',
    enterActive: 'fade-enter-active',
    leave: 'fade-leave',
    leaveActive: 'fade-leave-active'
};
/** @type {?} */
var MODAL_MASK_CLASS_NAME = 'ant-modal-mask';
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'modal';

/**
 * @fileoverview added by tsickle
 * Generated from: modal-animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var nzModalAnimations = {
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
    return __assign(__assign({}, defaultOptions), config);
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
    var nzMask = component.nzMask, nzMaskClosable = component.nzMaskClosable, nzClosable = component.nzClosable, nzOkLoading = component.nzOkLoading, nzOkDisabled = component.nzOkDisabled, nzCancelDisabled = component.nzCancelDisabled, nzCancelLoading = component.nzCancelLoading, nzKeyboard = component.nzKeyboard, nzNoAnimation = component.nzNoAnimation, nzContent = component.nzContent, nzComponentParams = component.nzComponentParams, nzFooter = component.nzFooter, nzGetContainer = component.nzGetContainer, nzZIndex = component.nzZIndex, nzWidth = component.nzWidth, nzWrapClassName = component.nzWrapClassName, nzClassName = component.nzClassName, nzStyle = component.nzStyle, nzTitle = component.nzTitle, nzCloseIcon = component.nzCloseIcon, nzMaskStyle = component.nzMaskStyle, nzBodyStyle = component.nzBodyStyle, nzOkText = component.nzOkText, nzCancelText = component.nzCancelText, nzOkType = component.nzOkType, nzIconType = component.nzIconType, nzModalType = component.nzModalType, nzOnOk = component.nzOnOk, nzOnCancel = component.nzOnCancel, nzAfterOpen = component.nzAfterOpen, nzAfterClose = component.nzAfterClose, nzCloseOnNavigation = component.nzCloseOnNavigation, nzAutofocus = component.nzAutofocus;
    return {
        nzMask: nzMask,
        nzMaskClosable: nzMaskClosable,
        nzClosable: nzClosable,
        nzOkLoading: nzOkLoading,
        nzOkDisabled: nzOkDisabled,
        nzCancelDisabled: nzCancelDisabled,
        nzCancelLoading: nzCancelLoading,
        nzKeyboard: nzKeyboard,
        nzNoAnimation: nzNoAnimation,
        nzContent: nzContent,
        nzComponentParams: nzComponentParams,
        nzFooter: nzFooter,
        nzGetContainer: nzGetContainer,
        nzZIndex: nzZIndex,
        nzWidth: nzWidth,
        nzWrapClassName: nzWrapClassName,
        nzClassName: nzClassName,
        nzStyle: nzStyle,
        nzTitle: nzTitle,
        nzCloseIcon: nzCloseIcon,
        nzMaskStyle: nzMaskStyle,
        nzBodyStyle: nzBodyStyle,
        nzOkText: nzOkText,
        nzCancelText: nzCancelText,
        nzOkType: nzOkType,
        nzIconType: nzIconType,
        nzModalType: nzModalType,
        nzOnOk: nzOnOk,
        nzOnCancel: nzOnCancel,
        nzAfterOpen: nzAfterOpen,
        nzAfterClose: nzAfterClose,
        nzCloseOnNavigation: nzCloseOnNavigation,
        nzAutofocus: nzAutofocus
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
var BaseModalContainer = /** @class */ (function (_super) {
    __extends(BaseModalContainer, _super);
    function BaseModalContainer(elementRef, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.focusTrapFactory = focusTrapFactory;
        _this.cdr = cdr;
        _this.render = render;
        _this.overlayRef = overlayRef;
        _this.nzConfigService = nzConfigService;
        _this.config = config;
        _this.animationType = animationType;
        _this.animationStateChanged = new EventEmitter();
        _this.containerClick = new EventEmitter();
        _this.cancelTriggered = new EventEmitter();
        _this.okTriggered = new EventEmitter();
        _this.state = 'enter';
        _this.isStringContent = false;
        _this.elementFocusedBeforeModalWasOpened = null;
        _this.mouseDown = false;
        _this.oldMaskStyle = null;
        _this.destroy$ = new Subject();
        _this.document = document;
        _this.isStringContent = typeof config.nzContent === 'string';
        _this.setContainer();
        _this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(_this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.updateMaskClassname();
        }));
        return _this;
    }
    Object.defineProperty(BaseModalContainer.prototype, "showMask", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var defaultConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME) || {};
            return !!getValueWithConfig(this.config.nzMask, defaultConfig.nzMask, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseModalContainer.prototype, "maskClosable", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var defaultConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME) || {};
            return !!getValueWithConfig(this.config.nzMaskClosable, defaultConfig.nzMaskClosable, true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    BaseModalContainer.prototype.onContainerClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.target === e.currentTarget && !this.mouseDown && this.showMask && this.maskClosable) {
            this.containerClick.emit();
        }
    };
    /**
     * @return {?}
     */
    BaseModalContainer.prototype.onMousedown = /**
     * @return {?}
     */
    function () {
        this.mouseDown = true;
    };
    /**
     * @return {?}
     */
    BaseModalContainer.prototype.onMouseup = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.mouseDown) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.mouseDown = false;
            }));
        }
    };
    /**
     * @return {?}
     */
    BaseModalContainer.prototype.onCloseClick = /**
     * @return {?}
     */
    function () {
        this.cancelTriggered.emit();
    };
    /**
     * @return {?}
     */
    BaseModalContainer.prototype.onOkClick = /**
     * @return {?}
     */
    function () {
        this.okTriggered.emit();
    };
    /**
     * @template T
     * @param {?} portal
     * @return {?}
     */
    BaseModalContainer.prototype.attachComponentPortal = /**
     * @template T
     * @param {?} portal
     * @return {?}
     */
    function (portal) {
        if (this.portalOutlet.hasAttached()) {
            throwNzModalContentAlreadyAttachedError();
        }
        this.savePreviouslyFocusedElement();
        this.setModalTransformOrigin();
        return this.portalOutlet.attachComponentPortal(portal);
    };
    /**
     * @template C
     * @param {?} portal
     * @return {?}
     */
    BaseModalContainer.prototype.attachTemplatePortal = /**
     * @template C
     * @param {?} portal
     * @return {?}
     */
    function (portal) {
        if (this.portalOutlet.hasAttached()) {
            throwNzModalContentAlreadyAttachedError();
        }
        this.savePreviouslyFocusedElement();
        return this.portalOutlet.attachTemplatePortal(portal);
    };
    /**
     * @return {?}
     */
    BaseModalContainer.prototype.attachStringContent = /**
     * @return {?}
     */
    function () {
        this.savePreviouslyFocusedElement();
    };
    /**
     * @return {?}
     */
    BaseModalContainer.prototype.getNativeElement = /**
     * @return {?}
     */
    function () {
        return this.elementRef.nativeElement;
    };
    /**
     * @private
     * @return {?}
     */
    BaseModalContainer.prototype.animationDisabled = /**
     * @private
     * @return {?}
     */
    function () {
        return this.config.nzNoAnimation || this.animationType === 'NoopAnimations';
    };
    /**
     * @private
     * @return {?}
     */
    BaseModalContainer.prototype.setModalTransformOrigin = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var modalElement = this.modalElementRef.nativeElement;
        if ((/** @type {?} */ (this.elementFocusedBeforeModalWasOpened))) {
            /** @type {?} */
            var previouslyDOMRect = (/** @type {?} */ (this.elementFocusedBeforeModalWasOpened)).getBoundingClientRect();
            /** @type {?} */
            var lastPosition = getElementOffset((/** @type {?} */ (this.elementFocusedBeforeModalWasOpened)));
            /** @type {?} */
            var x = lastPosition.left + previouslyDOMRect.width / 2;
            /** @type {?} */
            var y = lastPosition.top + previouslyDOMRect.height / 2;
            /** @type {?} */
            var transformOrigin = x - modalElement.offsetLeft + "px " + (y - modalElement.offsetTop) + "px 0px";
            this.render.setStyle(modalElement, 'transform-origin', transformOrigin);
        }
    };
    /**
     * @private
     * @return {?}
     */
    BaseModalContainer.prototype.savePreviouslyFocusedElement = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.focusTrap) {
            this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
        }
        if (this.document) {
            this.elementFocusedBeforeModalWasOpened = (/** @type {?} */ (this.document.activeElement));
            if (this.elementRef.nativeElement.focus) {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () { return _this.elementRef.nativeElement.focus(); }));
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    BaseModalContainer.prototype.trapFocus = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.elementRef.nativeElement;
        if (this.config.nzAutofocus) {
            this.focusTrap.focusInitialElementWhenReady().then();
        }
        else {
            /** @type {?} */
            var activeElement = this.document.activeElement;
            if (activeElement !== element && !element.contains(activeElement)) {
                element.focus();
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    BaseModalContainer.prototype.restoreFocus = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var toFocus = (/** @type {?} */ (this.elementFocusedBeforeModalWasOpened));
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (toFocus && typeof toFocus.focus === 'function') {
            /** @type {?} */
            var activeElement = (/** @type {?} */ (this.document.activeElement));
            /** @type {?} */
            var element = this.elementRef.nativeElement;
            if (!activeElement || activeElement === this.document.body || activeElement === element || element.contains(activeElement)) {
                toFocus.focus();
            }
        }
        if (this.focusTrap) {
            this.focusTrap.destroy();
        }
    };
    /**
     * @private
     * @return {?}
     */
    BaseModalContainer.prototype.setEnterAnimationClass = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.animationDisabled()) {
            return;
        }
        // Make sure to set the `TransformOrigin` style before set the modelElement's class names
        this.setModalTransformOrigin();
        /** @type {?} */
        var modalElement = this.modalElementRef.nativeElement;
        /** @type {?} */
        var backdropElement = this.overlayRef.backdropElement;
        modalElement.classList.add(ZOOM_CLASS_NAME_MAP.enter);
        modalElement.classList.add(ZOOM_CLASS_NAME_MAP.enterActive);
        if (backdropElement) {
            backdropElement.classList.add(FADE_CLASS_NAME_MAP.enter);
            backdropElement.classList.add(FADE_CLASS_NAME_MAP.enterActive);
        }
    };
    /**
     * @private
     * @return {?}
     */
    BaseModalContainer.prototype.setExitAnimationClass = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var modalElement = this.modalElementRef.nativeElement;
        modalElement.classList.add(ZOOM_CLASS_NAME_MAP.leave);
        modalElement.classList.add(ZOOM_CLASS_NAME_MAP.leaveActive);
        this.setMaskExitAnimationClass();
    };
    /**
     * @private
     * @param {?=} force
     * @return {?}
     */
    BaseModalContainer.prototype.setMaskExitAnimationClass = /**
     * @private
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        if (force === void 0) { force = false; }
        /** @type {?} */
        var backdropElement = this.overlayRef.backdropElement;
        if (backdropElement) {
            if (this.animationDisabled() || force) {
                // https://github.com/angular/components/issues/18645
                backdropElement.classList.remove(MODAL_MASK_CLASS_NAME);
                return;
            }
            backdropElement.classList.add(FADE_CLASS_NAME_MAP.leave);
            backdropElement.classList.add(FADE_CLASS_NAME_MAP.leaveActive);
        }
    };
    /**
     * @private
     * @return {?}
     */
    BaseModalContainer.prototype.cleanAnimationClass = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.animationDisabled()) {
            return;
        }
        /** @type {?} */
        var backdropElement = this.overlayRef.backdropElement;
        /** @type {?} */
        var modalElement = this.modalElementRef.nativeElement;
        if (backdropElement) {
            backdropElement.classList.remove(FADE_CLASS_NAME_MAP.enter);
            backdropElement.classList.remove(FADE_CLASS_NAME_MAP.enterActive);
        }
        modalElement.classList.remove(ZOOM_CLASS_NAME_MAP.enter);
        modalElement.classList.remove(ZOOM_CLASS_NAME_MAP.enterActive);
        modalElement.classList.remove(ZOOM_CLASS_NAME_MAP.leave);
        modalElement.classList.remove(ZOOM_CLASS_NAME_MAP.leaveActive);
    };
    /**
     * @return {?}
     */
    BaseModalContainer.prototype.bindBackdropStyle = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var backdropElement = this.overlayRef.backdropElement;
        if (backdropElement) {
            if (this.oldMaskStyle) {
                /** @type {?} */
                var styles = (/** @type {?} */ (this.oldMaskStyle));
                Object.keys(styles).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
                    _this.render.removeStyle(backdropElement, key);
                }));
                this.oldMaskStyle = null;
            }
            if (typeof this.config.nzMaskStyle === 'object' && Object.keys(this.config.nzMaskStyle).length) {
                /** @type {?} */
                var styles_1 = __assign({}, this.config.nzMaskStyle);
                Object.keys(styles_1).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
                    _this.render.setStyle(backdropElement, key, styles_1[key]);
                }));
                this.oldMaskStyle = styles_1;
            }
        }
    };
    /**
     * Set the container element.
     * @deprecated Not supported.
     * @breaking-change 10.0.0
     */
    /**
     * Set the container element.
     * @deprecated Not supported.
     * \@breaking-change 10.0.0
     * @private
     * @return {?}
     */
    BaseModalContainer.prototype.setContainer = /**
     * Set the container element.
     * @deprecated Not supported.
     * \@breaking-change 10.0.0
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var container = this.getContainer();
        if (container) {
            this.render.appendChild(container, this.elementRef.nativeElement);
        }
    };
    /**
     * Reset the container element.
     * @deprecated Not supported.
     * @breaking-change 10.0.0
     */
    /**
     * Reset the container element.
     * @deprecated Not supported.
     * \@breaking-change 10.0.0
     * @private
     * @return {?}
     */
    BaseModalContainer.prototype.resetContainer = /**
     * Reset the container element.
     * @deprecated Not supported.
     * \@breaking-change 10.0.0
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var container = this.getContainer();
        if (container) {
            this.render.appendChild(this.overlayRef.overlayElement, this.elementRef.nativeElement);
        }
    };
    /**
     * @private
     * @return {?}
     */
    BaseModalContainer.prototype.getContainer = /**
     * @private
     * @return {?}
     */
    function () {
        var nzGetContainer = this.config.nzGetContainer;
        /** @type {?} */
        var container = typeof nzGetContainer === 'function' ? nzGetContainer() : nzGetContainer;
        return container instanceof HTMLElement ? container : null;
    };
    /**
     * @return {?}
     */
    BaseModalContainer.prototype.updateMaskClassname = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var backdropElement = this.overlayRef.backdropElement;
        if (backdropElement) {
            if (this.showMask) {
                backdropElement.classList.add(MODAL_MASK_CLASS_NAME);
            }
            else {
                backdropElement.classList.remove(MODAL_MASK_CLASS_NAME);
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BaseModalContainer.prototype.onAnimationDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.toState === 'enter') {
            this.setContainer();
            this.trapFocus();
        }
        else if (event.toState === 'exit') {
            this.restoreFocus();
        }
        this.cleanAnimationClass();
        this.animationStateChanged.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BaseModalContainer.prototype.onAnimationStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.toState === 'enter') {
            this.setEnterAnimationClass();
            this.bindBackdropStyle();
        }
        else if (event.toState === 'exit') {
            this.resetContainer();
            this.setExitAnimationClass();
        }
        this.animationStateChanged.emit(event);
    };
    /**
     * @return {?}
     */
    BaseModalContainer.prototype.startExitAnimation = /**
     * @return {?}
     */
    function () {
        this.state = 'exit';
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    BaseModalContainer.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.setMaskExitAnimationClass(true);
        this.destroy$.next();
        this.destroy$.complete();
    };
    return BaseModalContainer;
}(BasePortalOutlet));
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
var NzModalState = {
    OPEN: 0,
    CLOSING: 1,
    CLOSED: 2,
};
/** @enum {string} */
var NzTriggerAction = {
    CANCEL: "cancel",
    OK: "ok",
};
/**
 * @template T, R
 */
var  /**
 * @template T, R
 */
NzModalRef = /** @class */ (function () {
    function NzModalRef(overlayRef, config, containerInstance) {
        var _this = this;
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
        function (event) { return event.phaseName === 'done' && event.toState === 'enter'; })), take(1))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.afterOpen.next();
            _this.afterOpen.complete();
            if (config.nzAfterOpen instanceof EventEmitter) {
                config.nzAfterOpen.emit();
            }
        }));
        containerInstance.animationStateChanged
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.phaseName === 'done' && event.toState === 'exit'; })), take(1))
            .subscribe((/**
         * @return {?}
         */
        function () {
            clearTimeout(_this.closeTimeout);
            _this._finishDialogClose();
        }));
        containerInstance.containerClick.pipe(take(1)).subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var cancelable = !_this.config.nzCancelLoading && !_this.config.nzOkLoading;
            if (cancelable) {
                _this.trigger("cancel" /* CANCEL */);
            }
        }));
        overlayRef
            .keydownEvents()
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return (((/** @type {?} */ (_this.config.nzKeyboard))) &&
                !_this.config.nzCancelLoading &&
                !_this.config.nzOkLoading &&
                event.keyCode === ESCAPE &&
                !hasModifierKey(event));
        })))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.preventDefault();
            _this.trigger("cancel" /* CANCEL */);
        }));
        containerInstance.cancelTriggered.subscribe((/**
         * @return {?}
         */
        function () { return _this.trigger("cancel" /* CANCEL */); }));
        containerInstance.okTriggered.subscribe((/**
         * @return {?}
         */
        function () { return _this.trigger("ok" /* OK */); }));
        overlayRef.detachments().subscribe((/**
         * @return {?}
         */
        function () {
            _this.afterClose.next(_this.result);
            _this.afterClose.complete();
            if (config.nzAfterClose instanceof EventEmitter) {
                config.nzAfterClose.emit(_this.result);
            }
            _this.componentInstance = null;
            _this.overlayRef.dispose();
        }));
    }
    /**
     * @return {?}
     */
    NzModalRef.prototype.getContentComponent = /**
     * @return {?}
     */
    function () {
        return (/** @type {?} */ (this.componentInstance));
    };
    /**
     * @return {?}
     */
    NzModalRef.prototype.getElement = /**
     * @return {?}
     */
    function () {
        return this.containerInstance.getNativeElement();
    };
    /**
     * @param {?=} result
     * @return {?}
     */
    NzModalRef.prototype.destroy = /**
     * @param {?=} result
     * @return {?}
     */
    function (result) {
        this.close(result);
    };
    /**
     * @return {?}
     */
    NzModalRef.prototype.triggerOk = /**
     * @return {?}
     */
    function () {
        this.trigger("ok" /* OK */);
    };
    /**
     * @return {?}
     */
    NzModalRef.prototype.triggerCancel = /**
     * @return {?}
     */
    function () {
        this.trigger("cancel" /* CANCEL */);
    };
    /**
     * Open the modal.
     * @deprecated Opened when create, this method is useless.
     * @breaking-change 10.0.0
     */
    /**
     * Open the modal.
     * @deprecated Opened when create, this method is useless.
     * \@breaking-change 10.0.0
     * @return {?}
     */
    NzModalRef.prototype.open = /**
     * Open the modal.
     * @deprecated Opened when create, this method is useless.
     * \@breaking-change 10.0.0
     * @return {?}
     */
    function () {
        // noop
    };
    /**
     * @param {?=} result
     * @return {?}
     */
    NzModalRef.prototype.close = /**
     * @param {?=} result
     * @return {?}
     */
    function (result) {
        var _this = this;
        this.result = result;
        this.containerInstance.animationStateChanged
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.phaseName === 'start'; })), take(1))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.overlayRef.detachBackdrop();
            _this.closeTimeout = setTimeout((/**
             * @return {?}
             */
            function () {
                _this._finishDialogClose();
            }), event.totalTime + 100);
        }));
        this.containerInstance.startExitAnimation();
        this.state = 1 /* CLOSING */;
    };
    /**
     * @param {?} config
     * @return {?}
     */
    NzModalRef.prototype.updateConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        Object.assign(this.config, config);
        this.containerInstance.bindBackdropStyle();
        this.containerInstance.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzModalRef.prototype.getState = /**
     * @return {?}
     */
    function () {
        return this.state;
    };
    /**
     * @return {?}
     */
    NzModalRef.prototype.getConfig = /**
     * @return {?}
     */
    function () {
        return this.config;
    };
    /**
     * @return {?}
     */
    NzModalRef.prototype.getBackdropElement = /**
     * @return {?}
     */
    function () {
        return this.overlayRef.backdropElement;
    };
    /**
     * @private
     * @param {?} action
     * @return {?}
     */
    NzModalRef.prototype.trigger = /**
     * @private
     * @param {?} action
     * @return {?}
     */
    function (action) {
        var _this = this;
        /** @type {?} */
        var trigger = { ok: this.config.nzOnOk, cancel: this.config.nzOnCancel }[action];
        /** @type {?} */
        var loadingKey = (/** @type {?} */ ({ ok: 'nzOkLoading', cancel: 'nzCancelLoading' }[action]));
        /** @type {?} */
        var loading = this.config[loadingKey];
        if (loading) {
            return;
        }
        if (trigger instanceof EventEmitter) {
            trigger.emit(this.getContentComponent());
        }
        else if (typeof trigger === 'function') {
            /** @type {?} */
            var result = trigger(this.getContentComponent());
            /** @type {?} */
            var caseClose = (/**
             * @param {?} doClose
             * @return {?}
             */
            function (doClose) { return doClose !== false && _this.close((/** @type {?} */ (doClose))); });
            if (isPromise(result)) {
                this.config[loadingKey] = true;
                /** @type {?} */
                var handleThen = (/**
                 * @param {?} doClose
                 * @return {?}
                 */
                function (doClose) {
                    _this.config[loadingKey] = false;
                    _this.closeWhitResult(doClose);
                });
                result.then(handleThen).catch(handleThen);
            }
            else {
                caseClose(result);
            }
        }
    };
    /**
     * @private
     * @param {?} result
     * @return {?}
     */
    NzModalRef.prototype.closeWhitResult = /**
     * @private
     * @param {?} result
     * @return {?}
     */
    function (result) {
        if (result !== false) {
            this.close(result);
        }
    };
    /**
     * @return {?}
     */
    NzModalRef.prototype._finishDialogClose = /**
     * @return {?}
     */
    function () {
        this.state = 2 /* CLOSED */;
        this.overlayRef.dispose();
    };
    return NzModalRef;
}());
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
var NzModalFooterDirective = /** @class */ (function () {
    function NzModalFooterDirective(nzModalRef, templateRef) {
        this.nzModalRef = nzModalRef;
        this.templateRef = templateRef;
        if (this.nzModalRef) {
            this.nzModalRef.updateConfig({
                nzFooter: this.templateRef
            });
        }
    }
    NzModalFooterDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nzModalFooter]',
                    exportAs: 'nzModalFooter'
                },] }
    ];
    /** @nocollapse */
    NzModalFooterDirective.ctorParameters = function () { return [
        { type: NzModalRef, decorators: [{ type: Optional }] },
        { type: TemplateRef }
    ]; };
    return NzModalFooterDirective;
}());
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
var NzModalComponent = /** @class */ (function () {
    function NzModalComponent(cdr, modal, viewContainerRef) {
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
    Object.defineProperty(NzModalComponent.prototype, "modalFooter", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value && value.templateRef) {
                this.setFooterWithTemplate(value.templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalComponent.prototype, "afterOpen", {
        get: /**
         * @return {?}
         */
        function () {
            // Observable alias for nzAfterOpen
            return this.nzAfterOpen.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalComponent.prototype, "afterClose", {
        get: /**
         * @return {?}
         */
        function () {
            // Observable alias for nzAfterClose
            return this.nzAfterClose.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzModalComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        if (!this.nzVisible) {
            this.nzVisible = true;
            this.nzVisibleChange.emit(true);
        }
        if (!this.modalRef) {
            /** @type {?} */
            var config = this.getConfig();
            this.modalRef = this.modal.create(config);
        }
    };
    /**
     * @param {?=} result
     * @return {?}
     */
    NzModalComponent.prototype.close = /**
     * @param {?=} result
     * @return {?}
     */
    function (result) {
        if (this.nzVisible) {
            this.nzVisible = false;
            this.nzVisibleChange.emit(false);
        }
        if (this.modalRef) {
            this.modalRef.close(result);
            this.modalRef = null;
        }
    };
    /**
     * @param {?=} result
     * @return {?}
     */
    NzModalComponent.prototype.destroy = /**
     * @param {?=} result
     * @return {?}
     */
    function (result) {
        this.close(result);
    };
    /**
     * @return {?}
     */
    NzModalComponent.prototype.triggerOk = /**
     * @return {?}
     */
    function () {
        var _a;
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.triggerOk();
    };
    /**
     * @return {?}
     */
    NzModalComponent.prototype.triggerCancel = /**
     * @return {?}
     */
    function () {
        var _a;
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.triggerCancel();
    };
    /**
     * @return {?}
     */
    NzModalComponent.prototype.getContentComponent = /**
     * @return {?}
     */
    function () {
        var _a;
        return (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.getContentComponent();
    };
    /**
     * @return {?}
     */
    NzModalComponent.prototype.getElement = /**
     * @return {?}
     */
    function () {
        var _a;
        return (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.getElement();
    };
    /**
     * @return {?}
     */
    NzModalComponent.prototype.getModalRef = /**
     * @return {?}
     */
    function () {
        return this.modalRef;
    };
    /**
     * @private
     * @param {?} templateRef
     * @return {?}
     */
    NzModalComponent.prototype.setFooterWithTemplate = /**
     * @private
     * @param {?} templateRef
     * @return {?}
     */
    function (templateRef) {
        var _this = this;
        this.nzFooter = templateRef;
        if (this.modalRef) {
            // If modalRef already created, set the footer in next tick
            Promise.resolve().then((/**
             * @return {?}
             */
            function () {
                (/** @type {?} */ (_this.modalRef)).updateConfig({
                    nzFooter: _this.nzFooter
                });
            }));
        }
        this.cdr.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    NzModalComponent.prototype.getConfig = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var componentConfig = getConfigFromComponent(this);
        componentConfig.nzViewContainerRef = this.viewContainerRef;
        if (!this.nzContent) {
            componentConfig.nzContent = this.contentTemplateRef;
        }
        return componentConfig;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzModalComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzVisible = changes.nzVisible, otherChanges = __rest(changes, ["nzVisible"]);
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
    };
    /**
     * @return {?}
     */
    NzModalComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _a;
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a._finishDialogClose();
    };
    NzModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-modal',
                    exportAs: 'nzModal',
                    template: " <ng-template><ng-content></ng-content></ng-template> ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzModalComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzModalService },
        { type: ViewContainerRef }
    ]; };
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
    return NzModalComponent;
}());
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
var NzModalCloseComponent = /** @class */ (function () {
    function NzModalCloseComponent(config) {
        this.config = config;
    }
    NzModalCloseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'button[nz-modal-close]',
                    exportAs: 'NzModalCloseBuiltin',
                    template: "\n    <span class=\"ant-modal-close-x\">\n      <ng-container *nzStringTemplateOutlet=\"config.nzCloseIcon; let closeIcon\">\n        <i nz-icon [nzType]=\"closeIcon\" class=\"ant-modal-close-icon\"></i>\n      </ng-container>\n    </span>\n  ",
                    host: {
                        class: 'ant-modal-close',
                        'aria-label': 'Close'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzModalCloseComponent.ctorParameters = function () { return [
        { type: ModalOptions }
    ]; };
    return NzModalCloseComponent;
}());
if (false) {
    /** @type {?} */
    NzModalCloseComponent.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * Generated from: modal-footer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzModalFooterComponent = /** @class */ (function () {
    function NzModalFooterComponent(i18n, config) {
        var _this = this;
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
        function () {
            _this.locale = _this.i18n.getLocaleData('Modal');
        }));
    }
    /**
     * @return {?}
     */
    NzModalFooterComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.cancelTriggered.emit();
    };
    /**
     * @return {?}
     */
    NzModalFooterComponent.prototype.onOk = /**
     * @return {?}
     */
    function () {
        this.okTriggered.emit();
    };
    /**
     * Returns the value of the specified key.
     * If it is a function, run and return the return value of the function.
     * @deprecated Not support use function type.
     * @breaking-change 10.0.0
     */
    /**
     * Returns the value of the specified key.
     * If it is a function, run and return the return value of the function.
     * @deprecated Not support use function type.
     * \@breaking-change 10.0.0
     * @param {?} options
     * @param {?} prop
     * @return {?}
     */
    NzModalFooterComponent.prototype.getButtonCallableProp = /**
     * Returns the value of the specified key.
     * If it is a function, run and return the return value of the function.
     * @deprecated Not support use function type.
     * \@breaking-change 10.0.0
     * @param {?} options
     * @param {?} prop
     * @return {?}
     */
    function (options, prop) {
        /** @type {?} */
        var value = options[prop];
        /** @type {?} */
        var componentInstance = this.modalRef.getContentComponent();
        return typeof value === 'function' ? value.apply(options, componentInstance && [componentInstance]) : value;
    };
    /**
     * Run function based on the type and set its `loading` prop if needed.
     * @deprecated Should be set options' value by the user, not library.
     * @breaking-change 10.0.0
     */
    /**
     * Run function based on the type and set its `loading` prop if needed.
     * @deprecated Should be set options' value by the user, not library.
     * \@breaking-change 10.0.0
     * @param {?} options
     * @return {?}
     */
    NzModalFooterComponent.prototype.onButtonClick = /**
     * Run function based on the type and set its `loading` prop if needed.
     * @deprecated Should be set options' value by the user, not library.
     * \@breaking-change 10.0.0
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var loading = this.getButtonCallableProp(options, 'loading');
        if (!loading) {
            /** @type {?} */
            var result = this.getButtonCallableProp(options, 'onClick');
            if (options.autoLoading && isPromise(result)) {
                options.loading = true;
                result.then((/**
                 * @return {?}
                 */
                function () { return (options.loading = false); })).catch((/**
                 * @return {?}
                 */
                function () { return (options.loading = false); }));
            }
        }
    };
    /**
     * @return {?}
     */
    NzModalFooterComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzModalFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[nz-modal-footer]',
                    exportAs: 'NzModalFooterBuiltin',
                    template: "\n    <ng-container *ngIf=\"config.nzFooter; else defaultFooterButtons\">\n      <ng-container *nzStringTemplateOutlet=\"config.nzFooter\">\n        <div *ngIf=\"!buttonsFooter\" [innerHTML]=\"config.nzTitle\"></div>\n        <ng-container *ngIf=\"buttonsFooter\">\n          <button\n            *ngFor=\"let button of buttons\"\n            nz-button\n            (click)=\"onButtonClick(button)\"\n            [hidden]=\"!getButtonCallableProp(button, 'show')\"\n            [nzLoading]=\"getButtonCallableProp(button, 'loading')\"\n            [disabled]=\"getButtonCallableProp(button, 'disabled')\"\n            [nzType]=\"button.type!\"\n            [nzShape]=\"button.shape!\"\n            [nzSize]=\"button.size!\"\n            [nzGhost]=\"button.ghost!\"\n          >\n            {{ button.label }}\n          </button>\n        </ng-container>\n      </ng-container>\n    </ng-container>\n    <ng-template #defaultFooterButtons>\n      <button\n        *ngIf=\"config.nzCancelText !== null\"\n        [attr.cdkFocusInitial]=\"config.nzAutofocus === 'cancel' || null\"\n        nz-button\n        (click)=\"onCancel()\"\n        [nzLoading]=\"!!config.nzCancelLoading\"\n        [disabled]=\"config.nzCancelDisabled\"\n      >\n        {{ config.nzCancelText || locale.cancelText }}\n      </button>\n      <button\n        *ngIf=\"config.nzOkText !== null\"\n        [attr.cdkFocusInitial]=\"config.nzAutofocus === 'ok' || null\"\n        nz-button\n        [nzType]=\"config.nzOkType!\"\n        (click)=\"onOk()\"\n        [nzLoading]=\"!!config.nzOkLoading\"\n        [disabled]=\"config.nzOkDisabled\"\n      >\n        {{ config.nzOkText || locale.okText }}\n      </button>\n    </ng-template>\n  ",
                    host: {
                        class: 'ant-modal-footer'
                    },
                    changeDetection: ChangeDetectionStrategy.Default
                }] }
    ];
    /** @nocollapse */
    NzModalFooterComponent.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: ModalOptions }
    ]; };
    NzModalFooterComponent.propDecorators = {
        cancelTriggered: [{ type: Output }],
        okTriggered: [{ type: Output }],
        modalRef: [{ type: Input }]
    };
    return NzModalFooterComponent;
}());
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
    return __assign({ type: null, size: 'default', autoLoading: true, show: true, loading: false, disabled: false }, options);
}

/**
 * @fileoverview added by tsickle
 * Generated from: modal-title.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzModalTitleComponent = /** @class */ (function () {
    function NzModalTitleComponent(config) {
        this.config = config;
    }
    NzModalTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[nz-modal-title]',
                    exportAs: 'NzModalTitleBuiltin',
                    template: "\n    <div class=\"ant-modal-title\">\n      <ng-container *nzStringTemplateOutlet=\"config.nzTitle\">\n        <div [innerHTML]=\"config.nzTitle\"></div>\n      </ng-container>\n    </div>\n  ",
                    host: {
                        class: 'ant-modal-header'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzModalTitleComponent.ctorParameters = function () { return [
        { type: ModalOptions }
    ]; };
    return NzModalTitleComponent;
}());
if (false) {
    /** @type {?} */
    NzModalTitleComponent.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * Generated from: modal.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzModalModule = /** @class */ (function () {
    function NzModalModule() {
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
    return NzModalModule;
}());

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
var  /**
 * @abstract
 * @template T, R
 */
NzModalLegacyAPI = /** @class */ (function () {
    function NzModalLegacyAPI() {
    }
    return NzModalLegacyAPI;
}());
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
