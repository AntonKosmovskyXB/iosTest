/**
 * @fileoverview added by tsickle
 * Generated from: modal-container.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __extends } from "tslib";
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
export { BaseModalContainer };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tb2RhbC8iLCJzb3VyY2VzIjpbIm1vZGFsLWNvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLGdCQUFnQixFQUFvRCxNQUFNLHFCQUFxQixDQUFDO0FBQ3pHLE9BQU8sRUFBZ0UsWUFBWSxFQUF3QixNQUFNLGVBQWUsQ0FBQztBQUdqSSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUUsd0JBQXdCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUkzSCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxTQUFTLENBQUM7Ozs7QUFFN0MsTUFBTSxVQUFVLHVDQUF1QztJQUNyRCxNQUFNLEtBQUssQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDO0FBQ3RGLENBQUM7QUFFRDtJQUF3QyxzQ0FBZ0I7SUErQnRELDRCQUNZLFVBQXNCLEVBQ3RCLGdCQUE4QyxFQUNqRCxHQUFzQixFQUNuQixNQUFpQixFQUNqQixVQUFzQixFQUN0QixlQUFnQyxFQUNuQyxNQUFvQixFQUMzQixRQUFvQixFQUNWLGFBQXNCO1FBVGxDLFlBV0UsaUJBQU8sU0FVUjtRQXBCVyxnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQThCO1FBQ2pELFNBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ25CLFlBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIscUJBQWUsR0FBZixlQUFlLENBQWlCO1FBQ25DLFlBQU0sR0FB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Q0FBQyxxQkFBcUIsRUFBRSxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsK0NBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUF6VEQsQ0FBd0MsZ0JBQWdCLEdBeVR2RDs7OztJQXhUQywwQ0FBK0I7O0lBQy9CLDZDQUE2Qzs7SUFFN0MsbURBQTJEOztJQUMzRCw0Q0FBMEM7O0lBQzFDLDZDQUEyQzs7SUFDM0MseUNBQXVDOztJQUV2QyxtQ0FBMkM7O0lBQzNDLHNDQUFtQjs7SUFDbkIsc0NBQXNCOztJQUN0Qiw2Q0FBaUM7Ozs7O0lBQ2pDLGdFQUFzRTs7Ozs7SUFDdEUsdUNBQThCOzs7OztJQUM5Qix1Q0FBMEI7Ozs7O0lBQzFCLDBDQUE4RDs7Ozs7SUFDOUQsc0NBQW1DOzs7OztJQWVqQyx3Q0FBZ0M7Ozs7O0lBQ2hDLDhDQUF3RDs7SUFDeEQsaUNBQTZCOzs7OztJQUM3QixvQ0FBMkI7Ozs7O0lBQzNCLHdDQUFnQzs7Ozs7SUFDaEMsNkNBQTBDOztJQUMxQyxvQ0FBMkI7Ozs7O0lBRTNCLDJDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEFuaW1hdGlvbkV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDb25maWd1cmFibGVGb2N1c1RyYXBGYWN0b3J5LCBGb2N1c1RyYXAgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQmFzZVBvcnRhbE91dGxldCwgQ2RrUG9ydGFsT3V0bGV0LCBDb21wb25lbnRQb3J0YWwsIFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50UmVmLCBFbGVtZW50UmVmLCBFbWJlZGRlZFZpZXdSZWYsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IGdldEVsZW1lbnRPZmZzZXQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBGQURFX0NMQVNTX05BTUVfTUFQLCBNT0RBTF9NQVNLX0NMQVNTX05BTUUsIE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgWk9PTV9DTEFTU19OQU1FX01BUCB9IGZyb20gJy4vbW9kYWwtY29uZmlnJztcblxuaW1wb3J0IHsgTnpNb2RhbFJlZiB9IGZyb20gJy4vbW9kYWwtcmVmJztcbmltcG9ydCB7IE1vZGFsT3B0aW9ucyB9IGZyb20gJy4vbW9kYWwtdHlwZXMnO1xuaW1wb3J0IHsgZ2V0VmFsdWVXaXRoQ29uZmlnIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd056TW9kYWxDb250ZW50QWxyZWFkeUF0dGFjaGVkRXJyb3IoKTogbmV2ZXIge1xuICB0aHJvdyBFcnJvcignQXR0ZW1wdGluZyB0byBhdHRhY2ggbW9kYWwgY29udGVudCBhZnRlciBjb250ZW50IGlzIGFscmVhZHkgYXR0YWNoZWQnKTtcbn1cblxuZXhwb3J0IGNsYXNzIEJhc2VNb2RhbENvbnRhaW5lciBleHRlbmRzIEJhc2VQb3J0YWxPdXRsZXQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwb3J0YWxPdXRsZXQhOiBDZGtQb3J0YWxPdXRsZXQ7XG4gIG1vZGFsRWxlbWVudFJlZiE6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuXG4gIGFuaW1hdGlvblN0YXRlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8QW5pbWF0aW9uRXZlbnQ+KCk7XG4gIGNvbnRhaW5lckNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBjYW5jZWxUcmlnZ2VyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIG9rVHJpZ2dlcmVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIHN0YXRlOiAndm9pZCcgfCAnZW50ZXInIHwgJ2V4aXQnID0gJ2VudGVyJztcbiAgZG9jdW1lbnQ6IERvY3VtZW50O1xuICBtb2RhbFJlZiE6IE56TW9kYWxSZWY7XG4gIGlzU3RyaW5nQ29udGVudDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGVsZW1lbnRGb2N1c2VkQmVmb3JlTW9kYWxXYXNPcGVuZWQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgZm9jdXNUcmFwITogRm9jdXNUcmFwO1xuICBwcml2YXRlIG1vdXNlRG93biA9IGZhbHNlO1xuICBwcml2YXRlIG9sZE1hc2tTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IG51bGwgPSBudWxsO1xuICBwcm90ZWN0ZWQgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIGdldCBzaG93TWFzaygpOiBib29sZWFuIHtcbiAgICBjb25zdCBkZWZhdWx0Q29uZmlnID0gdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgfHwge307XG5cbiAgICByZXR1cm4gISFnZXRWYWx1ZVdpdGhDb25maWc8Ym9vbGVhbj4odGhpcy5jb25maWcubnpNYXNrLCBkZWZhdWx0Q29uZmlnLm56TWFzaywgdHJ1ZSk7XG4gIH1cblxuICBnZXQgbWFza0Nsb3NhYmxlKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGRlZmF1bHRDb25maWcgPSB0aGlzLm56Q29uZmlnU2VydmljZS5nZXRDb25maWdGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSB8fCB7fTtcblxuICAgIHJldHVybiAhIWdldFZhbHVlV2l0aENvbmZpZzxib29sZWFuPih0aGlzLmNvbmZpZy5uek1hc2tDbG9zYWJsZSwgZGVmYXVsdENvbmZpZy5uek1hc2tDbG9zYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcm90ZWN0ZWQgZm9jdXNUcmFwRmFjdG9yeTogQ29uZmlndXJhYmxlRm9jdXNUcmFwRmFjdG9yeSxcbiAgICBwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcm90ZWN0ZWQgcmVuZGVyOiBSZW5kZXJlcjIsXG4gICAgcHJvdGVjdGVkIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYsXG4gICAgcHJvdGVjdGVkIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHB1YmxpYyBjb25maWc6IE1vZGFsT3B0aW9ucyxcbiAgICBkb2N1bWVudD86IE56U2FmZUFueSxcbiAgICBwcm90ZWN0ZWQgYW5pbWF0aW9uVHlwZT86IHN0cmluZ1xuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgICB0aGlzLmlzU3RyaW5nQ29udGVudCA9IHR5cGVvZiBjb25maWcubnpDb250ZW50ID09PSAnc3RyaW5nJztcbiAgICB0aGlzLnNldENvbnRhaW5lcigpO1xuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlXG4gICAgICAuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlTWFza0NsYXNzbmFtZSgpO1xuICAgICAgfSk7XG4gIH1cblxuICBvbkNvbnRhaW5lckNsaWNrKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZS50YXJnZXQgPT09IGUuY3VycmVudFRhcmdldCAmJiAhdGhpcy5tb3VzZURvd24gJiYgdGhpcy5zaG93TWFzayAmJiB0aGlzLm1hc2tDbG9zYWJsZSkge1xuICAgICAgdGhpcy5jb250YWluZXJDbGljay5lbWl0KCk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZWRvd24oKTogdm9pZCB7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuICB9XG5cbiAgb25Nb3VzZXVwKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1vdXNlRG93bikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvbkNsb3NlQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5jYW5jZWxUcmlnZ2VyZWQuZW1pdCgpO1xuICB9XG5cbiAgb25Pa0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMub2tUcmlnZ2VyZWQuZW1pdCgpO1xuICB9XG5cbiAgYXR0YWNoQ29tcG9uZW50UG9ydGFsPFQ+KHBvcnRhbDogQ29tcG9uZW50UG9ydGFsPFQ+KTogQ29tcG9uZW50UmVmPFQ+IHtcbiAgICBpZiAodGhpcy5wb3J0YWxPdXRsZXQuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgdGhyb3dOek1vZGFsQ29udGVudEFscmVhZHlBdHRhY2hlZEVycm9yKCk7XG4gICAgfVxuICAgIHRoaXMuc2F2ZVByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCgpO1xuICAgIHRoaXMuc2V0TW9kYWxUcmFuc2Zvcm1PcmlnaW4oKTtcbiAgICByZXR1cm4gdGhpcy5wb3J0YWxPdXRsZXQuYXR0YWNoQ29tcG9uZW50UG9ydGFsKHBvcnRhbCk7XG4gIH1cblxuICBhdHRhY2hUZW1wbGF0ZVBvcnRhbDxDPihwb3J0YWw6IFRlbXBsYXRlUG9ydGFsPEM+KTogRW1iZWRkZWRWaWV3UmVmPEM+IHtcbiAgICBpZiAodGhpcy5wb3J0YWxPdXRsZXQuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgdGhyb3dOek1vZGFsQ29udGVudEFscmVhZHlBdHRhY2hlZEVycm9yKCk7XG4gICAgfVxuICAgIHRoaXMuc2F2ZVByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCgpO1xuICAgIHJldHVybiB0aGlzLnBvcnRhbE91dGxldC5hdHRhY2hUZW1wbGF0ZVBvcnRhbChwb3J0YWwpO1xuICB9XG5cbiAgYXR0YWNoU3RyaW5nQ29udGVudCgpOiB2b2lkIHtcbiAgICB0aGlzLnNhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTtcbiAgfVxuXG4gIGdldE5hdGl2ZUVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgYW5pbWF0aW9uRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLm56Tm9BbmltYXRpb24gfHwgdGhpcy5hbmltYXRpb25UeXBlID09PSAnTm9vcEFuaW1hdGlvbnMnO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRNb2RhbFRyYW5zZm9ybU9yaWdpbigpOiB2b2lkIHtcbiAgICBjb25zdCBtb2RhbEVsZW1lbnQgPSB0aGlzLm1vZGFsRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIGlmICh0aGlzLmVsZW1lbnRGb2N1c2VkQmVmb3JlTW9kYWxXYXNPcGVuZWQgYXMgSFRNTEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzbHlET01SZWN0ID0gdGhpcy5lbGVtZW50Rm9jdXNlZEJlZm9yZU1vZGFsV2FzT3BlbmVkIS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IGxhc3RQb3NpdGlvbiA9IGdldEVsZW1lbnRPZmZzZXQodGhpcy5lbGVtZW50Rm9jdXNlZEJlZm9yZU1vZGFsV2FzT3BlbmVkISk7XG4gICAgICBjb25zdCB4ID0gbGFzdFBvc2l0aW9uLmxlZnQgKyBwcmV2aW91c2x5RE9NUmVjdC53aWR0aCAvIDI7XG4gICAgICBjb25zdCB5ID0gbGFzdFBvc2l0aW9uLnRvcCArIHByZXZpb3VzbHlET01SZWN0LmhlaWdodCAvIDI7XG4gICAgICBjb25zdCB0cmFuc2Zvcm1PcmlnaW4gPSBgJHt4IC0gbW9kYWxFbGVtZW50Lm9mZnNldExlZnR9cHggJHt5IC0gbW9kYWxFbGVtZW50Lm9mZnNldFRvcH1weCAwcHhgO1xuICAgICAgdGhpcy5yZW5kZXIuc2V0U3R5bGUobW9kYWxFbGVtZW50LCAndHJhbnNmb3JtLW9yaWdpbicsIHRyYW5zZm9ybU9yaWdpbik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzYXZlUHJldmlvdXNseUZvY3VzZWRFbGVtZW50KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5mb2N1c1RyYXApIHtcbiAgICAgIHRoaXMuZm9jdXNUcmFwID0gdGhpcy5mb2N1c1RyYXBGYWN0b3J5LmNyZWF0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZG9jdW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudEZvY3VzZWRCZWZvcmVNb2RhbFdhc09wZW5lZCA9IHRoaXMuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmICh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cykge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdHJhcEZvY3VzKCk6IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICAgIGlmICh0aGlzLmNvbmZpZy5uekF1dG9mb2N1cykge1xuICAgICAgdGhpcy5mb2N1c1RyYXAuZm9jdXNJbml0aWFsRWxlbWVudFdoZW5SZWFkeSgpLnRoZW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IHRoaXMuZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgIGlmIChhY3RpdmVFbGVtZW50ICE9PSBlbGVtZW50ICYmICFlbGVtZW50LmNvbnRhaW5zKGFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlc3RvcmVGb2N1cygpOiB2b2lkIHtcbiAgICBjb25zdCB0b0ZvY3VzID0gdGhpcy5lbGVtZW50Rm9jdXNlZEJlZm9yZU1vZGFsV2FzT3BlbmVkIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgLy8gV2UgbmVlZCB0aGUgZXh0cmEgY2hlY2ssIGJlY2F1c2UgSUUgY2FuIHNldCB0aGUgYGFjdGl2ZUVsZW1lbnRgIHRvIG51bGwgaW4gc29tZSBjYXNlcy5cbiAgICBpZiAodG9Gb2N1cyAmJiB0eXBlb2YgdG9Gb2N1cy5mb2N1cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IHRoaXMuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBFbGVtZW50O1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgICBpZiAoIWFjdGl2ZUVsZW1lbnQgfHwgYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5kb2N1bWVudC5ib2R5IHx8IGFjdGl2ZUVsZW1lbnQgPT09IGVsZW1lbnQgfHwgZWxlbWVudC5jb250YWlucyhhY3RpdmVFbGVtZW50KSkge1xuICAgICAgICB0b0ZvY3VzLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZm9jdXNUcmFwKSB7XG4gICAgICB0aGlzLmZvY3VzVHJhcC5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRFbnRlckFuaW1hdGlvbkNsYXNzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFuaW1hdGlvbkRpc2FibGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gTWFrZSBzdXJlIHRvIHNldCB0aGUgYFRyYW5zZm9ybU9yaWdpbmAgc3R5bGUgYmVmb3JlIHNldCB0aGUgbW9kZWxFbGVtZW50J3MgY2xhc3MgbmFtZXNcbiAgICB0aGlzLnNldE1vZGFsVHJhbnNmb3JtT3JpZ2luKCk7XG4gICAgY29uc3QgbW9kYWxFbGVtZW50ID0gdGhpcy5tb2RhbEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBiYWNrZHJvcEVsZW1lbnQgPSB0aGlzLm92ZXJsYXlSZWYuYmFja2Ryb3BFbGVtZW50O1xuICAgIG1vZGFsRWxlbWVudC5jbGFzc0xpc3QuYWRkKFpPT01fQ0xBU1NfTkFNRV9NQVAuZW50ZXIpO1xuICAgIG1vZGFsRWxlbWVudC5jbGFzc0xpc3QuYWRkKFpPT01fQ0xBU1NfTkFNRV9NQVAuZW50ZXJBY3RpdmUpO1xuICAgIGlmIChiYWNrZHJvcEVsZW1lbnQpIHtcbiAgICAgIGJhY2tkcm9wRWxlbWVudC5jbGFzc0xpc3QuYWRkKEZBREVfQ0xBU1NfTkFNRV9NQVAuZW50ZXIpO1xuICAgICAgYmFja2Ryb3BFbGVtZW50LmNsYXNzTGlzdC5hZGQoRkFERV9DTEFTU19OQU1FX01BUC5lbnRlckFjdGl2ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRFeGl0QW5pbWF0aW9uQ2xhc3MoKTogdm9pZCB7XG4gICAgY29uc3QgbW9kYWxFbGVtZW50ID0gdGhpcy5tb2RhbEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICAgIG1vZGFsRWxlbWVudC5jbGFzc0xpc3QuYWRkKFpPT01fQ0xBU1NfTkFNRV9NQVAubGVhdmUpO1xuICAgIG1vZGFsRWxlbWVudC5jbGFzc0xpc3QuYWRkKFpPT01fQ0xBU1NfTkFNRV9NQVAubGVhdmVBY3RpdmUpO1xuXG4gICAgdGhpcy5zZXRNYXNrRXhpdEFuaW1hdGlvbkNsYXNzKCk7XG4gIH1cblxuICBwcml2YXRlIHNldE1hc2tFeGl0QW5pbWF0aW9uQ2xhc3MoZm9yY2U6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGNvbnN0IGJhY2tkcm9wRWxlbWVudCA9IHRoaXMub3ZlcmxheVJlZi5iYWNrZHJvcEVsZW1lbnQ7XG4gICAgaWYgKGJhY2tkcm9wRWxlbWVudCkge1xuICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uRGlzYWJsZWQoKSB8fCBmb3JjZSkge1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9jb21wb25lbnRzL2lzc3Vlcy8xODY0NVxuICAgICAgICBiYWNrZHJvcEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShNT0RBTF9NQVNLX0NMQVNTX05BTUUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBiYWNrZHJvcEVsZW1lbnQuY2xhc3NMaXN0LmFkZChGQURFX0NMQVNTX05BTUVfTUFQLmxlYXZlKTtcbiAgICAgIGJhY2tkcm9wRWxlbWVudC5jbGFzc0xpc3QuYWRkKEZBREVfQ0xBU1NfTkFNRV9NQVAubGVhdmVBY3RpdmUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYW5BbmltYXRpb25DbGFzcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hbmltYXRpb25EaXNhYmxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGJhY2tkcm9wRWxlbWVudCA9IHRoaXMub3ZlcmxheVJlZi5iYWNrZHJvcEVsZW1lbnQ7XG4gICAgY29uc3QgbW9kYWxFbGVtZW50ID0gdGhpcy5tb2RhbEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBpZiAoYmFja2Ryb3BFbGVtZW50KSB7XG4gICAgICBiYWNrZHJvcEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShGQURFX0NMQVNTX05BTUVfTUFQLmVudGVyKTtcbiAgICAgIGJhY2tkcm9wRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKEZBREVfQ0xBU1NfTkFNRV9NQVAuZW50ZXJBY3RpdmUpO1xuICAgIH1cbiAgICBtb2RhbEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShaT09NX0NMQVNTX05BTUVfTUFQLmVudGVyKTtcbiAgICBtb2RhbEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShaT09NX0NMQVNTX05BTUVfTUFQLmVudGVyQWN0aXZlKTtcbiAgICBtb2RhbEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShaT09NX0NMQVNTX05BTUVfTUFQLmxlYXZlKTtcbiAgICBtb2RhbEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShaT09NX0NMQVNTX05BTUVfTUFQLmxlYXZlQWN0aXZlKTtcbiAgfVxuXG4gIGJpbmRCYWNrZHJvcFN0eWxlKCk6IHZvaWQge1xuICAgIGNvbnN0IGJhY2tkcm9wRWxlbWVudCA9IHRoaXMub3ZlcmxheVJlZi5iYWNrZHJvcEVsZW1lbnQ7XG4gICAgaWYgKGJhY2tkcm9wRWxlbWVudCkge1xuICAgICAgaWYgKHRoaXMub2xkTWFza1N0eWxlKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IHRoaXMub2xkTWFza1N0eWxlIGFzIHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgIHRoaXMucmVuZGVyLnJlbW92ZVN0eWxlKGJhY2tkcm9wRWxlbWVudCwga2V5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub2xkTWFza1N0eWxlID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZy5uek1hc2tTdHlsZSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXModGhpcy5jb25maWcubnpNYXNrU3R5bGUpLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBzdHlsZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7IC4uLnRoaXMuY29uZmlnLm56TWFza1N0eWxlIH07XG4gICAgICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgIHRoaXMucmVuZGVyLnNldFN0eWxlKGJhY2tkcm9wRWxlbWVudCwga2V5LCBzdHlsZXNba2V5XSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9sZE1hc2tTdHlsZSA9IHN0eWxlcztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBjb250YWluZXIgZWxlbWVudC5cbiAgICogQGRlcHJlY2F0ZWQgTm90IHN1cHBvcnRlZC5cbiAgICogQGJyZWFraW5nLWNoYW5nZSAxMC4wLjBcbiAgICovXG4gIHByaXZhdGUgc2V0Q29udGFpbmVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZ2V0Q29udGFpbmVyKCk7XG4gICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yZW5kZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBjb250YWluZXIgZWxlbWVudC5cbiAgICogQGRlcHJlY2F0ZWQgTm90IHN1cHBvcnRlZC5cbiAgICogQGJyZWFraW5nLWNoYW5nZSAxMC4wLjBcbiAgICovXG4gIHByaXZhdGUgcmVzZXRDb250YWluZXIoKTogdm9pZCB7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5nZXRDb250YWluZXIoKTtcbiAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICB0aGlzLnJlbmRlci5hcHBlbmRDaGlsZCh0aGlzLm92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQsIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldENvbnRhaW5lcigpOiBIVE1MRWxlbWVudCB8IG51bGwge1xuICAgIGNvbnN0IHsgbnpHZXRDb250YWluZXIgfSA9IHRoaXMuY29uZmlnO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHR5cGVvZiBuekdldENvbnRhaW5lciA9PT0gJ2Z1bmN0aW9uJyA/IG56R2V0Q29udGFpbmVyKCkgOiBuekdldENvbnRhaW5lcjtcbiAgICByZXR1cm4gY29udGFpbmVyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBjb250YWluZXIgOiBudWxsO1xuICB9XG5cbiAgdXBkYXRlTWFza0NsYXNzbmFtZSgpOiB2b2lkIHtcbiAgICBjb25zdCBiYWNrZHJvcEVsZW1lbnQgPSB0aGlzLm92ZXJsYXlSZWYuYmFja2Ryb3BFbGVtZW50O1xuICAgIGlmIChiYWNrZHJvcEVsZW1lbnQpIHtcbiAgICAgIGlmICh0aGlzLnNob3dNYXNrKSB7XG4gICAgICAgIGJhY2tkcm9wRWxlbWVudC5jbGFzc0xpc3QuYWRkKE1PREFMX01BU0tfQ0xBU1NfTkFNRSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiYWNrZHJvcEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShNT0RBTF9NQVNLX0NMQVNTX05BTUUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQW5pbWF0aW9uRG9uZShldmVudDogQW5pbWF0aW9uRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ2VudGVyJykge1xuICAgICAgdGhpcy5zZXRDb250YWluZXIoKTtcbiAgICAgIHRoaXMudHJhcEZvY3VzKCk7XG4gICAgfSBlbHNlIGlmIChldmVudC50b1N0YXRlID09PSAnZXhpdCcpIHtcbiAgICAgIHRoaXMucmVzdG9yZUZvY3VzKCk7XG4gICAgfVxuICAgIHRoaXMuY2xlYW5BbmltYXRpb25DbGFzcygpO1xuICAgIHRoaXMuYW5pbWF0aW9uU3RhdGVDaGFuZ2VkLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgb25BbmltYXRpb25TdGFydChldmVudDogQW5pbWF0aW9uRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ2VudGVyJykge1xuICAgICAgdGhpcy5zZXRFbnRlckFuaW1hdGlvbkNsYXNzKCk7XG4gICAgICB0aGlzLmJpbmRCYWNrZHJvcFN0eWxlKCk7XG4gICAgfSBlbHNlIGlmIChldmVudC50b1N0YXRlID09PSAnZXhpdCcpIHtcbiAgICAgIHRoaXMucmVzZXRDb250YWluZXIoKTtcbiAgICAgIHRoaXMuc2V0RXhpdEFuaW1hdGlvbkNsYXNzKCk7XG4gICAgfVxuICAgIHRoaXMuYW5pbWF0aW9uU3RhdGVDaGFuZ2VkLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgc3RhcnRFeGl0QW5pbWF0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUgPSAnZXhpdCc7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnNldE1hc2tFeGl0QW5pbWF0aW9uQ2xhc3ModHJ1ZSk7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=