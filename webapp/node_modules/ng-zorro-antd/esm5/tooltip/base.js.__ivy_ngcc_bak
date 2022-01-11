/**
 * @fileoverview added by tsickle
 * Generated from: base.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __read, __spread } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ChangeDetectorRef, ComponentFactoryResolver, Directive, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { warnDeprecation } from 'ng-zorro-antd/core/logger';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { DEFAULT_TOOLTIP_POSITIONS, getPlacementName, POSITION_MAP } from 'ng-zorro-antd/core/overlay';
import { isNotNil, toBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
/**
 * @abstract
 */
var NzTooltipBaseDirective = /** @class */ (function () {
    function NzTooltipBaseDirective(elementRef, hostView, resolver, renderer, noAnimation) {
        this.elementRef = elementRef;
        this.hostView = hostView;
        this.resolver = resolver;
        this.renderer = renderer;
        this.noAnimation = noAnimation;
        this.specificVisibleChange = new EventEmitter();
        /**
         * @deprecated 10.0.0. This is deprecated and going to be removed in 10.0.0.
         * Please use a more specific API. Like `nzTooltipTrigger`.
         */
        this.nzTrigger = 'hover';
        /**
         * @deprecated 10.0.0. This is deprecated and going to be removed in 10.0.0.
         * Please use a more specific API. Like `nzTooltipPlacement`.
         */
        this.nzPlacement = 'top';
        this.visible = false;
        this.needProxyProperties = ['noAnimation'];
        this.nzVisibleChange = new EventEmitter();
        this.destroy$ = new Subject();
        this.triggerDisposables = [];
    }
    Object.defineProperty(NzTooltipBaseDirective.prototype, "title", {
        /**
         * This true title that would be used in other parts on this component.
         */
        get: /**
         * This true title that would be used in other parts on this component.
         * @protected
         * @return {?}
         */
        function () {
            return this.specificTitle || this.directiveNameTitle || this.nzTitle || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipBaseDirective.prototype, "content", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this.specificContent || this.directiveNameContent || this.nzContent || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipBaseDirective.prototype, "placement", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this.specificPlacement || this.nzPlacement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipBaseDirective.prototype, "trigger", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            // NzTooltipTrigger can be null.
            return typeof this.specificTrigger !== 'undefined' ? this.specificTrigger : this.nzTrigger;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipBaseDirective.prototype, "isVisible", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this.specificVisible || this.nzVisible || false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipBaseDirective.prototype, "mouseEnterDelay", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this.specificMouseEnterDelay || this.nzMouseEnterDelay || 0.15;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipBaseDirective.prototype, "mouseLeaveDelay", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this.specificMouseLeaveDelay || this.nzMouseLeaveDelay || 0.1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipBaseDirective.prototype, "overlayClassName", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this.specificOverlayClassName || this.nzOverlayClassName || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipBaseDirective.prototype, "overlayStyle", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this.specificOverlayStyle || this.nzOverlayStyle || null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} isNeeded
     * @param {?} property
     * @param {?} newProperty
     * @param {?=} comp
     * @param {?=} shared
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.warnDeprecationIfNeeded = /**
     * @param {?} isNeeded
     * @param {?} property
     * @param {?} newProperty
     * @param {?=} comp
     * @param {?=} shared
     * @return {?}
     */
    function (isNeeded, property, newProperty, comp, shared) {
        if (comp === void 0) { comp = 'nz-tooltip'; }
        if (shared === void 0) { shared = true; }
        if (isNeeded) {
            /** @type {?} */
            var message = "'" + property + "' of '" + comp + "' is deprecated and will be removed in 10.0.0.\n      Please use '" + newProperty + "' instead.";
            if (shared) {
                message = message + " The same with 'nz-popover' and 'nz-popconfirm'.";
            }
            warnDeprecation(message);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.warnDeprecationByChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        // warn deprecated things when specific property is not given
        this.warnDeprecationIfNeeded(changes.nzTitle && !this.specificTitle && !this.directiveNameTitle, 'nzTitle', 'nzTooltipTitle');
        this.warnDeprecationIfNeeded(changes.nzContent && !this.specificContent, 'nzContent', 'nzPopoverContent', 'nz-popover', false);
        this.warnDeprecationIfNeeded(changes.nzPlacement && !this.specificPlacement, 'nzPlacement', 'nzTooltipPlacement');
        this.warnDeprecationIfNeeded(changes.nzTrigger && !this.specificTrigger, 'nzTrigger', 'nzTooltipTrigger');
        this.warnDeprecationIfNeeded(changes.nzVisible && !this.specificVisible, 'nzVisible', 'nzTooltipVisible');
        this.warnDeprecationIfNeeded(changes.nzMouseEnterDelay && !this.specificMouseEnterDelay, 'nzMouseEnterDelay', 'nzTooltipMouseEnterDelay');
        this.warnDeprecationIfNeeded(changes.nzMouseLeaveDelay && !this.specificMouseLeaveDelay, 'nzMouseLeaveDelay', 'nzTooltipMouseLeaveDelay');
        this.warnDeprecationIfNeeded(changes.nzOverlayClassName && !this.specificOverlayClassName, 'nzOverlayClassName', 'nzTooltipClassName');
        this.warnDeprecationIfNeeded(changes.nzOverlayStyle && !this.specificOverlayStyle, 'nzOverlayStyle', 'nzTooltipOverlayStyle');
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzTrigger = changes.nzTrigger, specificTrigger = changes.specificTrigger;
        /** @type {?} */
        var trigger = specificTrigger || nzTrigger;
        if (trigger && !trigger.isFirstChange()) {
            this.registerTriggers();
        }
        if (this.component) {
            this.updateChangedProperties(changes);
        }
        this.warnDeprecationByChanges(changes);
    };
    /**
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.createComponent();
        this.registerTriggers();
    };
    /**
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
        // Clear toggling timer. Issue #3875 #4317 #4386
        this.clearTogglingTimer();
        this.removeTriggerListeners();
    };
    /**
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        var _a;
        (_a = this.component) === null || _a === void 0 ? void 0 : _a.show();
    };
    /**
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        var _a;
        (_a = this.component) === null || _a === void 0 ? void 0 : _a.hide();
    };
    /**
     * Force the component to update its position.
     */
    /**
     * Force the component to update its position.
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.updatePosition = /**
     * Force the component to update its position.
     * @return {?}
     */
    function () {
        if (this.component) {
            this.component.updatePosition();
        }
    };
    /**
     * Create a dynamic tooltip component. This method can be override.
     */
    /**
     * Create a dynamic tooltip component. This method can be override.
     * @protected
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.createComponent = /**
     * Create a dynamic tooltip component. This method can be override.
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var componentRef = this.hostView.createComponent(this.componentFactory);
        this.component = componentRef.instance;
        // Remove the component's DOM because it should be in the overlay container.
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), componentRef.location.nativeElement);
        this.component.setOverlayOrigin({ elementRef: this.specificOrigin || this.elementRef });
        this.updateChangedProperties(this.needProxyProperties);
        this.component.nzVisibleChange.pipe(distinctUntilChanged(), takeUntil(this.destroy$)).subscribe((/**
         * @param {?} visible
         * @return {?}
         */
        function (visible) {
            _this.visible = visible;
            _this.specificVisibleChange.emit(visible);
            _this.nzVisibleChange.emit(visible);
        }));
    };
    /**
     * @protected
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.registerTriggers = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        // When the method gets invoked, all properties has been synced to the dynamic component.
        // After removing the old API, we can just check the directive's own `nzTrigger`.
        /** @type {?} */
        var el = this.elementRef.nativeElement;
        /** @type {?} */
        var trigger = this.trigger;
        this.removeTriggerListeners();
        if (trigger === 'hover') {
            /** @type {?} */
            var overlayElement_1;
            this.triggerDisposables.push(this.renderer.listen(el, 'mouseenter', (/**
             * @return {?}
             */
            function () {
                _this.delayEnterLeave(true, true, _this.mouseEnterDelay);
            })));
            this.triggerDisposables.push(this.renderer.listen(el, 'mouseleave', (/**
             * @return {?}
             */
            function () {
                var _a;
                _this.delayEnterLeave(true, false, _this.mouseLeaveDelay);
                if (((_a = _this.component) === null || _a === void 0 ? void 0 : _a.overlay.overlayRef) && !overlayElement_1) {
                    overlayElement_1 = _this.component.overlay.overlayRef.overlayElement;
                    _this.triggerDisposables.push(_this.renderer.listen(overlayElement_1, 'mouseenter', (/**
                     * @return {?}
                     */
                    function () {
                        _this.delayEnterLeave(false, true);
                    })));
                    _this.triggerDisposables.push(_this.renderer.listen(overlayElement_1, 'mouseleave', (/**
                     * @return {?}
                     */
                    function () {
                        _this.delayEnterLeave(false, false);
                    })));
                }
            })));
        }
        else if (trigger === 'focus') {
            this.triggerDisposables.push(this.renderer.listen(el, 'focus', (/**
             * @return {?}
             */
            function () { return _this.show(); })));
            this.triggerDisposables.push(this.renderer.listen(el, 'blur', (/**
             * @return {?}
             */
            function () { return _this.hide(); })));
        }
        else if (trigger === 'click') {
            this.triggerDisposables.push(this.renderer.listen(el, 'click', (/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                e.preventDefault();
                _this.show();
            })));
        } // Else do nothing because user wants to control the visibility programmatically.
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.updatePropertiesByChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        /** @type {?} */
        var properties = {
            specificTitle: ['nzTitle', this.title],
            directiveNameTitle: ['nzTitle', this.title],
            nzTitle: ['nzTitle', this.title],
            specificContent: ['nzContent', this.content],
            directiveNameContent: ['nzContent', this.content],
            nzContent: ['nzContent', this.content],
            specificTrigger: ['nzTrigger', this.trigger],
            nzTrigger: ['nzTrigger', this.trigger],
            specificPlacement: ['nzPlacement', this.placement],
            nzPlacement: ['nzPlacement', this.placement],
            specificVisible: ['nzVisible', this.isVisible],
            nzVisible: ['nzVisible', this.isVisible],
            specificMouseEnterDelay: ['nzMouseEnterDelay', this.mouseEnterDelay],
            nzMouseEnterDelay: ['nzMouseEnterDelay', this.mouseEnterDelay],
            specificMouseLeaveDelay: ['nzMouseLeaveDelay', this.mouseLeaveDelay],
            nzMouseLeaveDelay: ['nzMouseLeaveDelay', this.mouseLeaveDelay],
            specificOverlayClassName: ['nzOverlayClassName', this.overlayClassName],
            nzOverlayClassName: ['nzOverlayClassName', this.overlayClassName],
            specificOverlayStyle: ['nzOverlayStyle', this.overlayStyle],
            nzOverlayStyle: ['nzOverlayStyle', this.overlayStyle]
        };
        /** @type {?} */
        var keys = Object.keys(changes);
        keys.forEach((/**
         * @param {?} property
         * @return {?}
         */
        function (property) {
            // @ts-ignore
            if (properties[property]) {
                // @ts-ignore
                var _a = __read(properties[property], 2), name_1 = _a[0], value = _a[1];
                _this.updateComponentValue(name_1, value);
            }
        }));
    };
    /**
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.updatePropertiesByArray = /**
     * @return {?}
     */
    function () {
        this.updateComponentValue('nzTitle', this.title);
        this.updateComponentValue('nzContent', this.content);
        this.updateComponentValue('nzPlacement', this.placement);
        this.updateComponentValue('nzTrigger', this.trigger);
        this.updateComponentValue('nzVisible', this.isVisible);
        this.updateComponentValue('nzMouseEnterDelay', this.mouseEnterDelay);
        this.updateComponentValue('nzMouseLeaveDelay', this.mouseLeaveDelay);
        this.updateComponentValue('nzOverlayClassName', this.overlayClassName);
        this.updateComponentValue('nzOverlayStyle', this.overlayStyle);
    };
    /**
     * Sync changed properties to the component and trigger change detection in that component.
     */
    /**
     * Sync changed properties to the component and trigger change detection in that component.
     * @protected
     * @param {?} propertiesOrChanges
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.updateChangedProperties = /**
     * Sync changed properties to the component and trigger change detection in that component.
     * @protected
     * @param {?} propertiesOrChanges
     * @return {?}
     */
    function (propertiesOrChanges) {
        var _this = this;
        var _a;
        /** @type {?} */
        var isArray = Array.isArray(propertiesOrChanges);
        /** @type {?} */
        var keys = isArray ? ((/** @type {?} */ (propertiesOrChanges))) : Object.keys(propertiesOrChanges);
        keys.forEach((/**
         * @param {?} property
         * @return {?}
         */
        function (property) {
            if (_this.needProxyProperties.indexOf(property) !== -1) {
                // @ts-ignore
                _this.updateComponentValue(property, _this[property]);
            }
        }));
        if (isArray) {
            this.updatePropertiesByArray();
        }
        else {
            this.updatePropertiesByChanges((/** @type {?} */ (propertiesOrChanges)));
        }
        (_a = this.component) === null || _a === void 0 ? void 0 : _a.updateByDirective();
    };
    /**
     * @private
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.updateComponentValue = /**
     * @private
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        if (typeof value !== 'undefined') {
            // @ts-ignore
            this.component[key] = value;
        }
    };
    /**
     * @private
     * @param {?} isOrigin
     * @param {?} isEnter
     * @param {?=} delay
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.delayEnterLeave = /**
     * @private
     * @param {?} isOrigin
     * @param {?} isEnter
     * @param {?=} delay
     * @return {?}
     */
    function (isOrigin, isEnter, delay) {
        var _this = this;
        if (delay === void 0) { delay = -1; }
        if (this.delayTimer) {
            this.clearTogglingTimer();
        }
        else if (delay > 0) {
            this.delayTimer = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.delayTimer = undefined;
                isEnter ? _this.show() : _this.hide();
            }), delay * 1000);
        }
        else {
            // `isOrigin` is used due to the tooltip will not hide immediately
            // (may caused by the fade-out animation).
            isEnter && isOrigin ? this.show() : this.hide();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.removeTriggerListeners = /**
     * @private
     * @return {?}
     */
    function () {
        this.triggerDisposables.forEach((/**
         * @param {?} dispose
         * @return {?}
         */
        function (dispose) { return dispose(); }));
        this.triggerDisposables.length = 0;
    };
    /**
     * @private
     * @return {?}
     */
    NzTooltipBaseDirective.prototype.clearTogglingTimer = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.delayTimer) {
            clearTimeout(this.delayTimer);
            this.delayTimer = undefined;
        }
    };
    NzTooltipBaseDirective.decorators = [
        { type: Directive }
    ];
    /** @nocollapse */
    NzTooltipBaseDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: Renderer2 },
        { type: NzNoAnimationDirective }
    ]; };
    NzTooltipBaseDirective.propDecorators = {
        nzTitle: [{ type: Input }],
        nzContent: [{ type: Input }],
        nzTrigger: [{ type: Input }],
        nzPlacement: [{ type: Input }],
        nzMouseEnterDelay: [{ type: Input }],
        nzMouseLeaveDelay: [{ type: Input }],
        nzOverlayClassName: [{ type: Input }],
        nzOverlayStyle: [{ type: Input }],
        nzVisible: [{ type: Input }],
        nzVisibleChange: [{ type: Output }]
    };
    return NzTooltipBaseDirective;
}());
export { NzTooltipBaseDirective };
if (false) {
    /** @type {?} */
    NzTooltipBaseDirective.prototype.directiveNameTitle;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.specificTitle;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.directiveNameContent;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.specificContent;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.specificTrigger;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.specificPlacement;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.specificOrigin;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.specificVisible;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.specificMouseEnterDelay;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.specificMouseLeaveDelay;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.specificOverlayClassName;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.specificOverlayStyle;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.specificVisibleChange;
    /**
     * @deprecated 10.0.0. This is deprecated and going to be removed in 10.0.0.
     * Please use a more specific API. Like `nzTooltipTitle`.
     * @type {?}
     */
    NzTooltipBaseDirective.prototype.nzTitle;
    /**
     * @deprecated 10.0.0. This is deprecated and going to be removed in 10.0.0.
     * Please use a more specific API. Like `nzPopoverContent`.
     * @type {?}
     */
    NzTooltipBaseDirective.prototype.nzContent;
    /**
     * @deprecated 10.0.0. This is deprecated and going to be removed in 10.0.0.
     * Please use a more specific API. Like `nzTooltipTrigger`.
     * @type {?}
     */
    NzTooltipBaseDirective.prototype.nzTrigger;
    /**
     * @deprecated 10.0.0. This is deprecated and going to be removed in 10.0.0.
     * Please use a more specific API. Like `nzTooltipPlacement`.
     * @type {?}
     */
    NzTooltipBaseDirective.prototype.nzPlacement;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.nzMouseEnterDelay;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.nzMouseLeaveDelay;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.nzOverlayClassName;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.nzOverlayStyle;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.nzVisible;
    /**
     * For create tooltip dynamically. This should be override for each different component.
     * @type {?}
     * @protected
     */
    NzTooltipBaseDirective.prototype.componentFactory;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.visible;
    /**
     * @type {?}
     * @protected
     */
    NzTooltipBaseDirective.prototype.needProxyProperties;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.nzVisibleChange;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.component;
    /**
     * @type {?}
     * @protected
     */
    NzTooltipBaseDirective.prototype.destroy$;
    /**
     * @type {?}
     * @protected
     */
    NzTooltipBaseDirective.prototype.triggerDisposables;
    /**
     * @type {?}
     * @private
     */
    NzTooltipBaseDirective.prototype.delayTimer;
    /** @type {?} */
    NzTooltipBaseDirective.prototype.elementRef;
    /**
     * @type {?}
     * @protected
     */
    NzTooltipBaseDirective.prototype.hostView;
    /**
     * @type {?}
     * @protected
     */
    NzTooltipBaseDirective.prototype.resolver;
    /**
     * @type {?}
     * @protected
     */
    NzTooltipBaseDirective.prototype.renderer;
    /**
     * @type {?}
     * @protected
     */
    NzTooltipBaseDirective.prototype.noAnimation;
}
/**
 * @abstract
 */
var NzTooltipBaseComponent = /** @class */ (function () {
    function NzTooltipBaseComponent(cdr, noAnimation) {
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.nzVisibleChange = new Subject();
        this.nzTitle = null;
        this.nzContent = null;
        this.nzOverlayStyle = {};
        this._visible = false;
        this._trigger = 'hover';
        this.preferredPlacement = 'top';
        this._classMap = {};
        this._hasBackdrop = false;
        this._prefix = 'ant-tooltip-placement';
        this._positions = __spread(DEFAULT_TOOLTIP_POSITIONS);
    }
    Object.defineProperty(NzTooltipBaseComponent.prototype, "nzVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._visible;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var visible = toBoolean(value);
            if (this._visible !== visible) {
                this._visible = visible;
                this.nzVisibleChange.next(visible);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipBaseComponent.prototype, "nzTrigger", {
        get: /**
         * @return {?}
         */
        function () {
            return this._trigger;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._trigger = value;
            this._hasBackdrop = this._trigger === 'click';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipBaseComponent.prototype, "nzPlacement", {
        get: /**
         * @return {?}
         */
        function () {
            return this.preferredPlacement;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this.preferredPlacement) {
                this.preferredPlacement = value;
                this._positions = __spread([POSITION_MAP[this.nzPlacement]], this._positions);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTooltipBaseComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.nzVisibleChange.complete();
    };
    /**
     * @return {?}
     */
    NzTooltipBaseComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        if (this.nzVisible) {
            return;
        }
        if (!this.isEmpty()) {
            this.nzVisible = true;
            this.nzVisibleChange.next(true);
            this.cdr.detectChanges();
        }
    };
    /**
     * @return {?}
     */
    NzTooltipBaseComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        if (!this.nzVisible) {
            return;
        }
        this.nzVisible = false;
        this.nzVisibleChange.next(false);
        this.cdr.detectChanges();
    };
    /**
     * @return {?}
     */
    NzTooltipBaseComponent.prototype.updateByDirective = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setClassMap();
        this.cdr.detectChanges();
        Promise.resolve().then((/**
         * @return {?}
         */
        function () {
            _this.updatePosition();
            _this.updateVisibilityByTitle();
        }));
    };
    /**
     * Force the component to update its position.
     */
    /**
     * Force the component to update its position.
     * @return {?}
     */
    NzTooltipBaseComponent.prototype.updatePosition = /**
     * Force the component to update its position.
     * @return {?}
     */
    function () {
        if (this.origin && this.overlay && this.overlay.overlayRef) {
            this.overlay.overlayRef.updatePosition();
        }
    };
    /**
     * @param {?} position
     * @return {?}
     */
    NzTooltipBaseComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.preferredPlacement = (/** @type {?} */ (getPlacementName(position)));
        this.setClassMap();
        this.cdr.detectChanges();
    };
    /**
     * @return {?}
     */
    NzTooltipBaseComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this._classMap = (_a = {},
            _a[this.nzOverlayClassName] = true,
            _a[this._prefix + "-" + this.preferredPlacement] = true,
            _a);
    };
    /**
     * @param {?} origin
     * @return {?}
     */
    NzTooltipBaseComponent.prototype.setOverlayOrigin = /**
     * @param {?} origin
     * @return {?}
     */
    function (origin) {
        this.origin = origin;
        this.cdr.markForCheck();
    };
    /**
     * Hide the component while the content is empty.
     */
    /**
     * Hide the component while the content is empty.
     * @private
     * @return {?}
     */
    NzTooltipBaseComponent.prototype.updateVisibilityByTitle = /**
     * Hide the component while the content is empty.
     * @private
     * @return {?}
     */
    function () {
        if (this.isEmpty()) {
            this.hide();
        }
    };
    NzTooltipBaseComponent.decorators = [
        { type: Directive }
    ];
    /** @nocollapse */
    NzTooltipBaseComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzNoAnimationDirective }
    ]; };
    NzTooltipBaseComponent.propDecorators = {
        overlay: [{ type: ViewChild, args: ['overlay', { static: false },] }]
    };
    return NzTooltipBaseComponent;
}());
export { NzTooltipBaseComponent };
if (false) {
    /** @type {?} */
    NzTooltipBaseComponent.ngAcceptInputType_nzVisible;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.overlay;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.nzVisibleChange;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.nzTitle;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.nzContent;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.nzOverlayClassName;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.nzOverlayStyle;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.nzMouseEnterDelay;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.nzMouseLeaveDelay;
    /** @type {?} */
    NzTooltipBaseComponent.prototype._visible;
    /**
     * @type {?}
     * @protected
     */
    NzTooltipBaseComponent.prototype._trigger;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.origin;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.preferredPlacement;
    /** @type {?} */
    NzTooltipBaseComponent.prototype._classMap;
    /** @type {?} */
    NzTooltipBaseComponent.prototype._hasBackdrop;
    /** @type {?} */
    NzTooltipBaseComponent.prototype._prefix;
    /** @type {?} */
    NzTooltipBaseComponent.prototype._positions;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.cdr;
    /** @type {?} */
    NzTooltipBaseComponent.prototype.noAnimation;
    /**
     * Empty component cannot be opened.
     * @abstract
     * @protected
     * @return {?}
     */
    NzTooltipBaseComponent.prototype.isEmpty = function () { };
}
/**
 * @param {?} value
 * @return {?}
 */
export function isTooltipEmpty(value) {
    return value instanceof TemplateRef ? false : value === '' || !isNotNil(value);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdG9vbHRpcC8iLCJzb3VyY2VzIjpbImJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxtQkFBbUIsRUFBNEUsTUFBTSxzQkFBc0IsQ0FBQztBQUNySSxPQUFPLEVBRUwsaUJBQWlCLEVBRWpCLHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFFVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDekUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXZHLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFJakU7SUFzR0UsZ0NBQ1MsVUFBc0IsRUFDbkIsUUFBMEIsRUFDMUIsUUFBa0MsRUFDbEMsUUFBbUIsRUFDbkIsV0FBb0M7UUFKdkMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtRQUMxQixhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQTdGaEQsMEJBQXFCLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQzs7Ozs7UUFpQjNDLGNBQVMsR0FBcUIsT0FB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Qzs7Ozs7OztJQTZFdEYsMkRBQXNDOzs7Ozs7QUFHeEMsTUFBTSxVQUFVLGNBQWMsQ0FBQyxLQUF3QztJQUNyRSxPQUFPLEtBQUssWUFBWSxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNqRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2RrQ29ubmVjdGVkT3ZlcmxheSwgQ2RrT3ZlcmxheU9yaWdpbiwgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlLCBDb25uZWN0aW9uUG9zaXRpb25QYWlyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudEZhY3RvcnksXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB3YXJuRGVwcmVjYXRpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbG9nZ2VyJztcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbm8tYW5pbWF0aW9uJztcbmltcG9ydCB7IERFRkFVTFRfVE9PTFRJUF9QT1NJVElPTlMsIGdldFBsYWNlbWVudE5hbWUsIFBPU0lUSU9OX01BUCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9vdmVybGF5JztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTmdDbGFzc0ludGVyZmFjZSwgTmdTdHlsZUludGVyZmFjZSwgTnpTYWZlQW55LCBOelRTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBpc05vdE5pbCwgdG9Cb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IHR5cGUgTnpUb29sdGlwVHJpZ2dlciA9ICdjbGljaycgfCAnZm9jdXMnIHwgJ2hvdmVyJyB8IG51bGw7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE56VG9vbHRpcEJhc2VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIGRpcmVjdGl2ZU5hbWVUaXRsZT86IE56VFNUeXBlIHwgbnVsbDtcbiAgc3BlY2lmaWNUaXRsZT86IE56VFNUeXBlIHwgbnVsbDtcbiAgZGlyZWN0aXZlTmFtZUNvbnRlbnQ/OiBOelRTVHlwZSB8IG51bGw7XG4gIHNwZWNpZmljQ29udGVudD86IE56VFNUeXBlIHwgbnVsbDtcbiAgc3BlY2lmaWNUcmlnZ2VyPzogTnpUb29sdGlwVHJpZ2dlcjtcbiAgc3BlY2lmaWNQbGFjZW1lbnQ/OiBzdHJpbmc7XG4gIHNwZWNpZmljT3JpZ2luPzogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG4gIHNwZWNpZmljVmlzaWJsZT86IGJvb2xlYW47XG4gIHNwZWNpZmljTW91c2VFbnRlckRlbGF5PzogbnVtYmVyO1xuICBzcGVjaWZpY01vdXNlTGVhdmVEZWxheT86IG51bWJlcjtcbiAgc3BlY2lmaWNPdmVybGF5Q2xhc3NOYW1lPzogc3RyaW5nO1xuICBzcGVjaWZpY092ZXJsYXlTdHlsZT86IE5nU3R5bGVJbnRlcmZhY2U7XG4gIHNwZWNpZmljVmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIDEwLjAuMC4gVGhpcyBpcyBkZXByZWNhdGVkIGFuZCBnb2luZyB0byBiZSByZW1vdmVkIGluIDEwLjAuMC5cbiAgICogUGxlYXNlIHVzZSBhIG1vcmUgc3BlY2lmaWMgQVBJLiBMaWtlIGBuelRvb2x0aXBUaXRsZWAuXG4gICAqL1xuICBASW5wdXQoKSBuelRpdGxlPzogTnpUU1R5cGUgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCAxMC4wLjAuIFRoaXMgaXMgZGVwcmVjYXRlZCBhbmQgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiAxMC4wLjAuXG4gICAqIFBsZWFzZSB1c2UgYSBtb3JlIHNwZWNpZmljIEFQSS4gTGlrZSBgbnpQb3BvdmVyQ29udGVudGAuXG4gICAqL1xuICBASW5wdXQoKSBuekNvbnRlbnQ/OiBOelRTVHlwZSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIDEwLjAuMC4gVGhpcyBpcyBkZXByZWNhdGVkIGFuZCBnb2luZyB0byBiZSByZW1vdmVkIGluIDEwLjAuMC5cbiAgICogUGxlYXNlIHVzZSBhIG1vcmUgc3BlY2lmaWMgQVBJLiBMaWtlIGBuelRvb2x0aXBUcmlnZ2VyYC5cbiAgICovXG4gIEBJbnB1dCgpIG56VHJpZ2dlcjogTnpUb29sdGlwVHJpZ2dlciA9ICdob3Zlcic7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIDEwLjAuMC4gVGhpcyBpcyBkZXByZWNhdGVkIGFuZCBnb2luZyB0byBiZSByZW1vdmVkIGluIDEwLjAuMC5cbiAgICogUGxlYXNlIHVzZSBhIG1vcmUgc3BlY2lmaWMgQVBJLiBMaWtlIGBuelRvb2x0aXBQbGFjZW1lbnRgLlxuICAgKi9cbiAgQElucHV0KCkgbnpQbGFjZW1lbnQ6IHN0cmluZyA9ICd0b3AnO1xuXG4gIEBJbnB1dCgpIG56TW91c2VFbnRlckRlbGF5PzogbnVtYmVyO1xuICBASW5wdXQoKSBuek1vdXNlTGVhdmVEZWxheT86IG51bWJlcjtcbiAgQElucHV0KCkgbnpPdmVybGF5Q2xhc3NOYW1lPzogc3RyaW5nO1xuICBASW5wdXQoKSBuek92ZXJsYXlTdHlsZT86IE5nU3R5bGVJbnRlcmZhY2U7XG4gIEBJbnB1dCgpIG56VmlzaWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEZvciBjcmVhdGUgdG9vbHRpcCBkeW5hbWljYWxseS4gVGhpcyBzaG91bGQgYmUgb3ZlcnJpZGUgZm9yIGVhY2ggZGlmZmVyZW50IGNvbXBvbmVudC5cbiAgICovXG4gIHByb3RlY3RlZCBjb21wb25lbnRGYWN0b3J5ITogQ29tcG9uZW50RmFjdG9yeTxOelRvb2x0aXBCYXNlQ29tcG9uZW50PjtcblxuICAvKipcbiAgICogVGhpcyB0cnVlIHRpdGxlIHRoYXQgd291bGQgYmUgdXNlZCBpbiBvdGhlciBwYXJ0cyBvbiB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgdGl0bGUoKTogTnpUU1R5cGUgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5zcGVjaWZpY1RpdGxlIHx8IHRoaXMuZGlyZWN0aXZlTmFtZVRpdGxlIHx8IHRoaXMubnpUaXRsZSB8fCBudWxsO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBjb250ZW50KCk6IE56VFNUeXBlIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuc3BlY2lmaWNDb250ZW50IHx8IHRoaXMuZGlyZWN0aXZlTmFtZUNvbnRlbnQgfHwgdGhpcy5uekNvbnRlbnQgfHwgbnVsbDtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgcGxhY2VtZW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc3BlY2lmaWNQbGFjZW1lbnQgfHwgdGhpcy5uelBsYWNlbWVudDtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgdHJpZ2dlcigpOiBOelRvb2x0aXBUcmlnZ2VyIHtcbiAgICAvLyBOelRvb2x0aXBUcmlnZ2VyIGNhbiBiZSBudWxsLlxuICAgIHJldHVybiB0eXBlb2YgdGhpcy5zcGVjaWZpY1RyaWdnZXIgIT09ICd1bmRlZmluZWQnID8gdGhpcy5zcGVjaWZpY1RyaWdnZXIgOiB0aGlzLm56VHJpZ2dlcjtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgaXNWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNwZWNpZmljVmlzaWJsZSB8fCB0aGlzLm56VmlzaWJsZSB8fCBmYWxzZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgbW91c2VFbnRlckRlbGF5KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc3BlY2lmaWNNb3VzZUVudGVyRGVsYXkgfHwgdGhpcy5uek1vdXNlRW50ZXJEZWxheSB8fCAwLjE1O1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBtb3VzZUxlYXZlRGVsYXkoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zcGVjaWZpY01vdXNlTGVhdmVEZWxheSB8fCB0aGlzLm56TW91c2VMZWF2ZURlbGF5IHx8IDAuMTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgb3ZlcmxheUNsYXNzTmFtZSgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5zcGVjaWZpY092ZXJsYXlDbGFzc05hbWUgfHwgdGhpcy5uek92ZXJsYXlDbGFzc05hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgb3ZlcmxheVN0eWxlKCk6IE5nU3R5bGVJbnRlcmZhY2UgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5zcGVjaWZpY092ZXJsYXlTdHlsZSB8fCB0aGlzLm56T3ZlcmxheVN0eWxlIHx8IG51bGw7XG4gIH1cblxuICB2aXNpYmxlID0gZmFsc2U7XG4gIHByb3RlY3RlZCBuZWVkUHJveHlQcm9wZXJ0aWVzID0gWydub0FuaW1hdGlvbiddO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY29tcG9uZW50PzogTnpUb29sdGlwQmFzZUNvbXBvbmVudDtcblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgdHJpZ2dlckRpc3Bvc2FibGVzOiBBcnJheTwoKSA9PiB2b2lkPiA9IFtdO1xuXG4gIHByaXZhdGUgZGVsYXlUaW1lcj86IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcm90ZWN0ZWQgaG9zdFZpZXc6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJvdGVjdGVkIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJvdGVjdGVkIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxuICApIHt9XG5cbiAgd2FybkRlcHJlY2F0aW9uSWZOZWVkZWQoXG4gICAgaXNOZWVkZWQ6IGJvb2xlYW4sXG4gICAgcHJvcGVydHk6IHN0cmluZyxcbiAgICBuZXdQcm9wZXJ0eTogc3RyaW5nLFxuICAgIGNvbXA6IHN0cmluZyA9ICduei10b29sdGlwJyxcbiAgICBzaGFyZWQ6IGJvb2xlYW4gPSB0cnVlXG4gICk6IHZvaWQge1xuICAgIGlmIChpc05lZWRlZCkge1xuICAgICAgbGV0IG1lc3NhZ2UgPSBgJyR7cHJvcGVydHl9JyBvZiAnJHtjb21wfScgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDEwLjAuMC5cbiAgICAgIFBsZWFzZSB1c2UgJyR7bmV3UHJvcGVydHl9JyBpbnN0ZWFkLmA7XG5cbiAgICAgIGlmIChzaGFyZWQpIHtcbiAgICAgICAgbWVzc2FnZSA9IGAke21lc3NhZ2V9IFRoZSBzYW1lIHdpdGggJ256LXBvcG92ZXInIGFuZCAnbnotcG9wY29uZmlybScuYDtcbiAgICAgIH1cbiAgICAgIHdhcm5EZXByZWNhdGlvbihtZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICB3YXJuRGVwcmVjYXRpb25CeUNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIC8vIHdhcm4gZGVwcmVjYXRlZCB0aGluZ3Mgd2hlbiBzcGVjaWZpYyBwcm9wZXJ0eSBpcyBub3QgZ2l2ZW5cbiAgICB0aGlzLndhcm5EZXByZWNhdGlvbklmTmVlZGVkKGNoYW5nZXMubnpUaXRsZSAmJiAhdGhpcy5zcGVjaWZpY1RpdGxlICYmICF0aGlzLmRpcmVjdGl2ZU5hbWVUaXRsZSwgJ256VGl0bGUnLCAnbnpUb29sdGlwVGl0bGUnKTtcbiAgICB0aGlzLndhcm5EZXByZWNhdGlvbklmTmVlZGVkKGNoYW5nZXMubnpDb250ZW50ICYmICF0aGlzLnNwZWNpZmljQ29udGVudCwgJ256Q29udGVudCcsICduelBvcG92ZXJDb250ZW50JywgJ256LXBvcG92ZXInLCBmYWxzZSk7XG4gICAgdGhpcy53YXJuRGVwcmVjYXRpb25JZk5lZWRlZChjaGFuZ2VzLm56UGxhY2VtZW50ICYmICF0aGlzLnNwZWNpZmljUGxhY2VtZW50LCAnbnpQbGFjZW1lbnQnLCAnbnpUb29sdGlwUGxhY2VtZW50Jyk7XG4gICAgdGhpcy53YXJuRGVwcmVjYXRpb25JZk5lZWRlZChjaGFuZ2VzLm56VHJpZ2dlciAmJiAhdGhpcy5zcGVjaWZpY1RyaWdnZXIsICduelRyaWdnZXInLCAnbnpUb29sdGlwVHJpZ2dlcicpO1xuICAgIHRoaXMud2FybkRlcHJlY2F0aW9uSWZOZWVkZWQoY2hhbmdlcy5uelZpc2libGUgJiYgIXRoaXMuc3BlY2lmaWNWaXNpYmxlLCAnbnpWaXNpYmxlJywgJ256VG9vbHRpcFZpc2libGUnKTtcbiAgICB0aGlzLndhcm5EZXByZWNhdGlvbklmTmVlZGVkKFxuICAgICAgY2hhbmdlcy5uek1vdXNlRW50ZXJEZWxheSAmJiAhdGhpcy5zcGVjaWZpY01vdXNlRW50ZXJEZWxheSxcbiAgICAgICduek1vdXNlRW50ZXJEZWxheScsXG4gICAgICAnbnpUb29sdGlwTW91c2VFbnRlckRlbGF5J1xuICAgICk7XG4gICAgdGhpcy53YXJuRGVwcmVjYXRpb25JZk5lZWRlZChcbiAgICAgIGNoYW5nZXMubnpNb3VzZUxlYXZlRGVsYXkgJiYgIXRoaXMuc3BlY2lmaWNNb3VzZUxlYXZlRGVsYXksXG4gICAgICAnbnpNb3VzZUxlYXZlRGVsYXknLFxuICAgICAgJ256VG9vbHRpcE1vdXNlTGVhdmVEZWxheSdcbiAgICApO1xuICAgIHRoaXMud2FybkRlcHJlY2F0aW9uSWZOZWVkZWQoY2hhbmdlcy5uek92ZXJsYXlDbGFzc05hbWUgJiYgIXRoaXMuc3BlY2lmaWNPdmVybGF5Q2xhc3NOYW1lLCAnbnpPdmVybGF5Q2xhc3NOYW1lJywgJ256VG9vbHRpcENsYXNzTmFtZScpO1xuICAgIHRoaXMud2FybkRlcHJlY2F0aW9uSWZOZWVkZWQoY2hhbmdlcy5uek92ZXJsYXlTdHlsZSAmJiAhdGhpcy5zcGVjaWZpY092ZXJsYXlTdHlsZSwgJ256T3ZlcmxheVN0eWxlJywgJ256VG9vbHRpcE92ZXJsYXlTdHlsZScpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpUcmlnZ2VyLCBzcGVjaWZpY1RyaWdnZXIgfSA9IGNoYW5nZXM7XG4gICAgY29uc3QgdHJpZ2dlciA9IHNwZWNpZmljVHJpZ2dlciB8fCBuelRyaWdnZXI7XG5cbiAgICBpZiAodHJpZ2dlciAmJiAhdHJpZ2dlci5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMucmVnaXN0ZXJUcmlnZ2VycygpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbXBvbmVudCkge1xuICAgICAgdGhpcy51cGRhdGVDaGFuZ2VkUHJvcGVydGllcyhjaGFuZ2VzKTtcbiAgICB9XG5cbiAgICB0aGlzLndhcm5EZXByZWNhdGlvbkJ5Q2hhbmdlcyhjaGFuZ2VzKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xuICAgIHRoaXMucmVnaXN0ZXJUcmlnZ2VycygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuXG4gICAgLy8gQ2xlYXIgdG9nZ2xpbmcgdGltZXIuIElzc3VlICMzODc1ICM0MzE3ICM0Mzg2XG4gICAgdGhpcy5jbGVhclRvZ2dsaW5nVGltZXIoKTtcbiAgICB0aGlzLnJlbW92ZVRyaWdnZXJMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIHNob3coKTogdm9pZCB7XG4gICAgdGhpcy5jb21wb25lbnQ/LnNob3coKTtcbiAgfVxuXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5jb21wb25lbnQ/LmhpZGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JjZSB0aGUgY29tcG9uZW50IHRvIHVwZGF0ZSBpdHMgcG9zaXRpb24uXG4gICAqL1xuICB1cGRhdGVQb3NpdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb21wb25lbnQpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50LnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGR5bmFtaWMgdG9vbHRpcCBjb21wb25lbnQuIFRoaXMgbWV0aG9kIGNhbiBiZSBvdmVycmlkZS5cbiAgICovXG4gIHByb3RlY3RlZCBjcmVhdGVDb21wb25lbnQoKTogdm9pZCB7XG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5ob3N0Vmlldy5jcmVhdGVDb21wb25lbnQodGhpcy5jb21wb25lbnRGYWN0b3J5KTtcblxuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50UmVmLmluc3RhbmNlO1xuXG4gICAgLy8gUmVtb3ZlIHRoZSBjb21wb25lbnQncyBET00gYmVjYXVzZSBpdCBzaG91bGQgYmUgaW4gdGhlIG92ZXJsYXkgY29udGFpbmVyLlxuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSwgY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuY29tcG9uZW50LnNldE92ZXJsYXlPcmlnaW4oeyBlbGVtZW50UmVmOiB0aGlzLnNwZWNpZmljT3JpZ2luIHx8IHRoaXMuZWxlbWVudFJlZiB9KTtcblxuICAgIHRoaXMudXBkYXRlQ2hhbmdlZFByb3BlcnRpZXModGhpcy5uZWVkUHJveHlQcm9wZXJ0aWVzKTtcblxuICAgIHRoaXMuY29tcG9uZW50Lm56VmlzaWJsZUNoYW5nZS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCh2aXNpYmxlOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgdGhpcy5zcGVjaWZpY1Zpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKTtcbiAgICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLmVtaXQodmlzaWJsZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVnaXN0ZXJUcmlnZ2VycygpOiB2b2lkIHtcbiAgICAvLyBXaGVuIHRoZSBtZXRob2QgZ2V0cyBpbnZva2VkLCBhbGwgcHJvcGVydGllcyBoYXMgYmVlbiBzeW5jZWQgdG8gdGhlIGR5bmFtaWMgY29tcG9uZW50LlxuICAgIC8vIEFmdGVyIHJlbW92aW5nIHRoZSBvbGQgQVBJLCB3ZSBjYW4ganVzdCBjaGVjayB0aGUgZGlyZWN0aXZlJ3Mgb3duIGBuelRyaWdnZXJgLlxuICAgIGNvbnN0IGVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgdHJpZ2dlciA9IHRoaXMudHJpZ2dlcjtcblxuICAgIHRoaXMucmVtb3ZlVHJpZ2dlckxpc3RlbmVycygpO1xuXG4gICAgaWYgKHRyaWdnZXIgPT09ICdob3ZlcicpIHtcbiAgICAgIGxldCBvdmVybGF5RWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgICB0aGlzLnRyaWdnZXJEaXNwb3NhYmxlcy5wdXNoKFxuICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihlbCwgJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kZWxheUVudGVyTGVhdmUodHJ1ZSwgdHJ1ZSwgdGhpcy5tb3VzZUVudGVyRGVsYXkpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICAgIHRoaXMudHJpZ2dlckRpc3Bvc2FibGVzLnB1c2goXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmRlbGF5RW50ZXJMZWF2ZSh0cnVlLCBmYWxzZSwgdGhpcy5tb3VzZUxlYXZlRGVsYXkpO1xuICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudD8ub3ZlcmxheS5vdmVybGF5UmVmICYmICFvdmVybGF5RWxlbWVudCkge1xuICAgICAgICAgICAgb3ZlcmxheUVsZW1lbnQgPSB0aGlzLmNvbXBvbmVudC5vdmVybGF5Lm92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJEaXNwb3NhYmxlcy5wdXNoKFxuICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihvdmVybGF5RWxlbWVudCwgJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxheUVudGVyTGVhdmUoZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckRpc3Bvc2FibGVzLnB1c2goXG4gICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKG92ZXJsYXlFbGVtZW50LCAnbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGF5RW50ZXJMZWF2ZShmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodHJpZ2dlciA9PT0gJ2ZvY3VzJykge1xuICAgICAgdGhpcy50cmlnZ2VyRGlzcG9zYWJsZXMucHVzaCh0aGlzLnJlbmRlcmVyLmxpc3RlbihlbCwgJ2ZvY3VzJywgKCkgPT4gdGhpcy5zaG93KCkpKTtcbiAgICAgIHRoaXMudHJpZ2dlckRpc3Bvc2FibGVzLnB1c2godGhpcy5yZW5kZXJlci5saXN0ZW4oZWwsICdibHVyJywgKCkgPT4gdGhpcy5oaWRlKCkpKTtcbiAgICB9IGVsc2UgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgIHRoaXMudHJpZ2dlckRpc3Bvc2FibGVzLnB1c2goXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnY2xpY2snLCBlID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gLy8gRWxzZSBkbyBub3RoaW5nIGJlY2F1c2UgdXNlciB3YW50cyB0byBjb250cm9sIHRoZSB2aXNpYmlsaXR5IHByb2dyYW1tYXRpY2FsbHkuXG4gIH1cblxuICB1cGRhdGVQcm9wZXJ0aWVzQnlDaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0ge1xuICAgICAgc3BlY2lmaWNUaXRsZTogWyduelRpdGxlJywgdGhpcy50aXRsZV0sXG4gICAgICBkaXJlY3RpdmVOYW1lVGl0bGU6IFsnbnpUaXRsZScsIHRoaXMudGl0bGVdLFxuICAgICAgbnpUaXRsZTogWyduelRpdGxlJywgdGhpcy50aXRsZV0sXG4gICAgICBzcGVjaWZpY0NvbnRlbnQ6IFsnbnpDb250ZW50JywgdGhpcy5jb250ZW50XSxcbiAgICAgIGRpcmVjdGl2ZU5hbWVDb250ZW50OiBbJ256Q29udGVudCcsIHRoaXMuY29udGVudF0sXG4gICAgICBuekNvbnRlbnQ6IFsnbnpDb250ZW50JywgdGhpcy5jb250ZW50XSxcbiAgICAgIHNwZWNpZmljVHJpZ2dlcjogWyduelRyaWdnZXInLCB0aGlzLnRyaWdnZXJdLFxuICAgICAgbnpUcmlnZ2VyOiBbJ256VHJpZ2dlcicsIHRoaXMudHJpZ2dlcl0sXG4gICAgICBzcGVjaWZpY1BsYWNlbWVudDogWyduelBsYWNlbWVudCcsIHRoaXMucGxhY2VtZW50XSxcbiAgICAgIG56UGxhY2VtZW50OiBbJ256UGxhY2VtZW50JywgdGhpcy5wbGFjZW1lbnRdLFxuICAgICAgc3BlY2lmaWNWaXNpYmxlOiBbJ256VmlzaWJsZScsIHRoaXMuaXNWaXNpYmxlXSxcbiAgICAgIG56VmlzaWJsZTogWyduelZpc2libGUnLCB0aGlzLmlzVmlzaWJsZV0sXG4gICAgICBzcGVjaWZpY01vdXNlRW50ZXJEZWxheTogWyduek1vdXNlRW50ZXJEZWxheScsIHRoaXMubW91c2VFbnRlckRlbGF5XSxcbiAgICAgIG56TW91c2VFbnRlckRlbGF5OiBbJ256TW91c2VFbnRlckRlbGF5JywgdGhpcy5tb3VzZUVudGVyRGVsYXldLFxuICAgICAgc3BlY2lmaWNNb3VzZUxlYXZlRGVsYXk6IFsnbnpNb3VzZUxlYXZlRGVsYXknLCB0aGlzLm1vdXNlTGVhdmVEZWxheV0sXG4gICAgICBuek1vdXNlTGVhdmVEZWxheTogWyduek1vdXNlTGVhdmVEZWxheScsIHRoaXMubW91c2VMZWF2ZURlbGF5XSxcbiAgICAgIHNwZWNpZmljT3ZlcmxheUNsYXNzTmFtZTogWyduek92ZXJsYXlDbGFzc05hbWUnLCB0aGlzLm92ZXJsYXlDbGFzc05hbWVdLFxuICAgICAgbnpPdmVybGF5Q2xhc3NOYW1lOiBbJ256T3ZlcmxheUNsYXNzTmFtZScsIHRoaXMub3ZlcmxheUNsYXNzTmFtZV0sXG4gICAgICBzcGVjaWZpY092ZXJsYXlTdHlsZTogWyduek92ZXJsYXlTdHlsZScsIHRoaXMub3ZlcmxheVN0eWxlXSxcbiAgICAgIG56T3ZlcmxheVN0eWxlOiBbJ256T3ZlcmxheVN0eWxlJywgdGhpcy5vdmVybGF5U3R5bGVdXG4gICAgfTtcblxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjaGFuZ2VzKTtcbiAgICBrZXlzLmZvckVhY2goKHByb3BlcnR5OiBOelNhZmVBbnkpID0+IHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGlmIChwcm9wZXJ0aWVzW3Byb3BlcnR5XSkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IFtuYW1lLCB2YWx1ZV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5XTtcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVQcm9wZXJ0aWVzQnlBcnJheSgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduelRpdGxlJywgdGhpcy50aXRsZSk7XG4gICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpDb250ZW50JywgdGhpcy5jb250ZW50KTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduelBsYWNlbWVudCcsIHRoaXMucGxhY2VtZW50KTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduelRyaWdnZXInLCB0aGlzLnRyaWdnZXIpO1xuICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUoJ256VmlzaWJsZScsIHRoaXMuaXNWaXNpYmxlKTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduek1vdXNlRW50ZXJEZWxheScsIHRoaXMubW91c2VFbnRlckRlbGF5KTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduek1vdXNlTGVhdmVEZWxheScsIHRoaXMubW91c2VMZWF2ZURlbGF5KTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduek92ZXJsYXlDbGFzc05hbWUnLCB0aGlzLm92ZXJsYXlDbGFzc05hbWUpO1xuICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUoJ256T3ZlcmxheVN0eWxlJywgdGhpcy5vdmVybGF5U3R5bGUpO1xuICB9XG4gIC8qKlxuICAgKiBTeW5jIGNoYW5nZWQgcHJvcGVydGllcyB0byB0aGUgY29tcG9uZW50IGFuZCB0cmlnZ2VyIGNoYW5nZSBkZXRlY3Rpb24gaW4gdGhhdCBjb21wb25lbnQuXG4gICAqL1xuICBwcm90ZWN0ZWQgdXBkYXRlQ2hhbmdlZFByb3BlcnRpZXMocHJvcGVydGllc09yQ2hhbmdlczogc3RyaW5nW10gfCBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkocHJvcGVydGllc09yQ2hhbmdlcyk7XG4gICAgY29uc3Qga2V5cyA9IGlzQXJyYXkgPyAocHJvcGVydGllc09yQ2hhbmdlcyBhcyBzdHJpbmdbXSkgOiBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzT3JDaGFuZ2VzKTtcblxuICAgIGtleXMuZm9yRWFjaCgocHJvcGVydHk6IE56U2FmZUFueSkgPT4ge1xuICAgICAgaWYgKHRoaXMubmVlZFByb3h5UHJvcGVydGllcy5pbmRleE9mKHByb3BlcnR5KSAhPT0gLTEpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKHByb3BlcnR5LCB0aGlzW3Byb3BlcnR5XSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGlzQXJyYXkpIHtcbiAgICAgIHRoaXMudXBkYXRlUHJvcGVydGllc0J5QXJyYXkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0aWVzQnlDaGFuZ2VzKHByb3BlcnRpZXNPckNoYW5nZXMgYXMgU2ltcGxlQ2hhbmdlcyk7XG4gICAgfVxuICAgIHRoaXMuY29tcG9uZW50Py51cGRhdGVCeURpcmVjdGl2ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDb21wb25lbnRWYWx1ZShrZXk6IHN0cmluZywgdmFsdWU6IE56U2FmZUFueSk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB0aGlzLmNvbXBvbmVudFtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkZWxheUVudGVyTGVhdmUoaXNPcmlnaW46IGJvb2xlYW4sIGlzRW50ZXI6IGJvb2xlYW4sIGRlbGF5OiBudW1iZXIgPSAtMSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRlbGF5VGltZXIpIHtcbiAgICAgIHRoaXMuY2xlYXJUb2dnbGluZ1RpbWVyKCk7XG4gICAgfSBlbHNlIGlmIChkZWxheSA+IDApIHtcbiAgICAgIHRoaXMuZGVsYXlUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRlbGF5VGltZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlzRW50ZXIgPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xuICAgICAgfSwgZGVsYXkgKiAxMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYGlzT3JpZ2luYCBpcyB1c2VkIGR1ZSB0byB0aGUgdG9vbHRpcCB3aWxsIG5vdCBoaWRlIGltbWVkaWF0ZWx5XG4gICAgICAvLyAobWF5IGNhdXNlZCBieSB0aGUgZmFkZS1vdXQgYW5pbWF0aW9uKS5cbiAgICAgIGlzRW50ZXIgJiYgaXNPcmlnaW4gPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlVHJpZ2dlckxpc3RlbmVycygpOiB2b2lkIHtcbiAgICB0aGlzLnRyaWdnZXJEaXNwb3NhYmxlcy5mb3JFYWNoKGRpc3Bvc2UgPT4gZGlzcG9zZSgpKTtcbiAgICB0aGlzLnRyaWdnZXJEaXNwb3NhYmxlcy5sZW5ndGggPSAwO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhclRvZ2dsaW5nVGltZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGVsYXlUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlUaW1lcik7XG4gICAgICB0aGlzLmRlbGF5VGltZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG59XG5cbkBEaXJlY3RpdmUoKVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1jbGFzcy1zdWZmaXhcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOelRvb2x0aXBCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256VmlzaWJsZTogQm9vbGVhbklucHV0O1xuXG4gIEBWaWV3Q2hpbGQoJ292ZXJsYXknLCB7IHN0YXRpYzogZmFsc2UgfSkgb3ZlcmxheSE6IENka0Nvbm5lY3RlZE92ZXJsYXk7XG5cbiAgbnpWaXNpYmxlQ2hhbmdlID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgbnpUaXRsZTogTnpUU1R5cGUgfCBudWxsID0gbnVsbDtcbiAgbnpDb250ZW50OiBOelRTVHlwZSB8IG51bGwgPSBudWxsO1xuICBuek92ZXJsYXlDbGFzc05hbWUhOiBzdHJpbmc7XG4gIG56T3ZlcmxheVN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlID0ge307XG4gIG56TW91c2VFbnRlckRlbGF5PzogbnVtYmVyO1xuICBuek1vdXNlTGVhdmVEZWxheT86IG51bWJlcjtcblxuICBzZXQgbnpWaXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgY29uc3QgdmlzaWJsZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgaWYgKHRoaXMuX3Zpc2libGUgIT09IHZpc2libGUpIHtcbiAgICAgIHRoaXMuX3Zpc2libGUgPSB2aXNpYmxlO1xuICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UubmV4dCh2aXNpYmxlKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xuICB9XG5cbiAgX3Zpc2libGUgPSBmYWxzZTtcblxuICBzZXQgbnpUcmlnZ2VyKHZhbHVlOiBOelRvb2x0aXBUcmlnZ2VyKSB7XG4gICAgdGhpcy5fdHJpZ2dlciA9IHZhbHVlO1xuICAgIHRoaXMuX2hhc0JhY2tkcm9wID0gdGhpcy5fdHJpZ2dlciA9PT0gJ2NsaWNrJztcbiAgfVxuXG4gIGdldCBuelRyaWdnZXIoKTogTnpUb29sdGlwVHJpZ2dlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RyaWdnZXI7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3RyaWdnZXI6IE56VG9vbHRpcFRyaWdnZXIgPSAnaG92ZXInO1xuXG4gIHNldCBuelBsYWNlbWVudCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLnByZWZlcnJlZFBsYWNlbWVudCkge1xuICAgICAgdGhpcy5wcmVmZXJyZWRQbGFjZW1lbnQgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX3Bvc2l0aW9ucyA9IFtQT1NJVElPTl9NQVBbdGhpcy5uelBsYWNlbWVudF0sIC4uLnRoaXMuX3Bvc2l0aW9uc107XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56UGxhY2VtZW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucHJlZmVycmVkUGxhY2VtZW50O1xuICB9XG5cbiAgb3JpZ2luPzogQ2RrT3ZlcmxheU9yaWdpbjtcbiAgcHJlZmVycmVkUGxhY2VtZW50ID0gJ3RvcCc7XG5cbiAgX2NsYXNzTWFwOiBOZ0NsYXNzSW50ZXJmYWNlID0ge307XG4gIF9oYXNCYWNrZHJvcCA9IGZhbHNlO1xuICBfcHJlZml4ID0gJ2FudC10b29sdGlwLXBsYWNlbWVudCc7XG4gIF9wb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFsuLi5ERUZBVUxUX1RPT0xUSVBfUE9TSVRJT05TXTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSkge31cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5jb21wbGV0ZSgpO1xuICB9XG5cbiAgc2hvdygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelZpc2libGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNFbXB0eSgpKSB7XG4gICAgICB0aGlzLm56VmlzaWJsZSA9IHRydWU7XG4gICAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5uZXh0KHRydWUpO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm56VmlzaWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubnpWaXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5uelZpc2libGVDaGFuZ2UubmV4dChmYWxzZSk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgdXBkYXRlQnlEaXJlY3RpdmUoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcblxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgdGhpcy51cGRhdGVWaXNpYmlsaXR5QnlUaXRsZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcmNlIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlIGl0cyBwb3NpdGlvbi5cbiAgICovXG4gIHVwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9yaWdpbiAmJiB0aGlzLm92ZXJsYXkgJiYgdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMub3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgb25Qb3NpdGlvbkNoYW5nZShwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XG4gICAgdGhpcy5wcmVmZXJyZWRQbGFjZW1lbnQgPSBnZXRQbGFjZW1lbnROYW1lKHBvc2l0aW9uKSE7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIHRoaXMuX2NsYXNzTWFwID0ge1xuICAgICAgW3RoaXMubnpPdmVybGF5Q2xhc3NOYW1lXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLl9wcmVmaXh9LSR7dGhpcy5wcmVmZXJyZWRQbGFjZW1lbnR9YF06IHRydWVcbiAgICB9O1xuICB9XG5cbiAgc2V0T3ZlcmxheU9yaWdpbihvcmlnaW46IENka092ZXJsYXlPcmlnaW4pOiB2b2lkIHtcbiAgICB0aGlzLm9yaWdpbiA9IG9yaWdpbjtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBjb21wb25lbnQgd2hpbGUgdGhlIGNvbnRlbnQgaXMgZW1wdHkuXG4gICAqL1xuICBwcml2YXRlIHVwZGF0ZVZpc2liaWxpdHlCeVRpdGxlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzRW1wdHkoKSkge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVtcHR5IGNvbXBvbmVudCBjYW5ub3QgYmUgb3BlbmVkLlxuICAgKi9cbiAgcHJvdGVjdGVkIGFic3RyYWN0IGlzRW1wdHkoKTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVG9vbHRpcEVtcHR5KHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwpOiBib29sZWFuIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYgPyBmYWxzZSA6IHZhbHVlID09PSAnJyB8fCAhaXNOb3ROaWwodmFsdWUpO1xufVxuIl19