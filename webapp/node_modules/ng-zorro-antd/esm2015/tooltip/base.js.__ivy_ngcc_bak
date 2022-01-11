/**
 * @fileoverview added by tsickle
 * Generated from: base.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class NzTooltipBaseDirective {
    /**
     * @param {?} elementRef
     * @param {?} hostView
     * @param {?} resolver
     * @param {?} renderer
     * @param {?=} noAnimation
     */
    constructor(elementRef, hostView, resolver, renderer, noAnimation) {
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
    /**
     * This true title that would be used in other parts on this component.
     * @protected
     * @return {?}
     */
    get title() {
        return this.specificTitle || this.directiveNameTitle || this.nzTitle || null;
    }
    /**
     * @protected
     * @return {?}
     */
    get content() {
        return this.specificContent || this.directiveNameContent || this.nzContent || null;
    }
    /**
     * @protected
     * @return {?}
     */
    get placement() {
        return this.specificPlacement || this.nzPlacement;
    }
    /**
     * @protected
     * @return {?}
     */
    get trigger() {
        // NzTooltipTrigger can be null.
        return typeof this.specificTrigger !== 'undefined' ? this.specificTrigger : this.nzTrigger;
    }
    /**
     * @protected
     * @return {?}
     */
    get isVisible() {
        return this.specificVisible || this.nzVisible || false;
    }
    /**
     * @protected
     * @return {?}
     */
    get mouseEnterDelay() {
        return this.specificMouseEnterDelay || this.nzMouseEnterDelay || 0.15;
    }
    /**
     * @protected
     * @return {?}
     */
    get mouseLeaveDelay() {
        return this.specificMouseLeaveDelay || this.nzMouseLeaveDelay || 0.1;
    }
    /**
     * @protected
     * @return {?}
     */
    get overlayClassName() {
        return this.specificOverlayClassName || this.nzOverlayClassName || null;
    }
    /**
     * @protected
     * @return {?}
     */
    get overlayStyle() {
        return this.specificOverlayStyle || this.nzOverlayStyle || null;
    }
    /**
     * @param {?} isNeeded
     * @param {?} property
     * @param {?} newProperty
     * @param {?=} comp
     * @param {?=} shared
     * @return {?}
     */
    warnDeprecationIfNeeded(isNeeded, property, newProperty, comp = 'nz-tooltip', shared = true) {
        if (isNeeded) {
            /** @type {?} */
            let message = `'${property}' of '${comp}' is deprecated and will be removed in 10.0.0.
      Please use '${newProperty}' instead.`;
            if (shared) {
                message = `${message} The same with 'nz-popover' and 'nz-popconfirm'.`;
            }
            warnDeprecation(message);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    warnDeprecationByChanges(changes) {
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
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzTrigger, specificTrigger } = changes;
        /** @type {?} */
        const trigger = specificTrigger || nzTrigger;
        if (trigger && !trigger.isFirstChange()) {
            this.registerTriggers();
        }
        if (this.component) {
            this.updateChangedProperties(changes);
        }
        this.warnDeprecationByChanges(changes);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.createComponent();
        this.registerTriggers();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        // Clear toggling timer. Issue #3875 #4317 #4386
        this.clearTogglingTimer();
        this.removeTriggerListeners();
    }
    /**
     * @return {?}
     */
    show() {
        var _a;
        (_a = this.component) === null || _a === void 0 ? void 0 : _a.show();
    }
    /**
     * @return {?}
     */
    hide() {
        var _a;
        (_a = this.component) === null || _a === void 0 ? void 0 : _a.hide();
    }
    /**
     * Force the component to update its position.
     * @return {?}
     */
    updatePosition() {
        if (this.component) {
            this.component.updatePosition();
        }
    }
    /**
     * Create a dynamic tooltip component. This method can be override.
     * @protected
     * @return {?}
     */
    createComponent() {
        /** @type {?} */
        const componentRef = this.hostView.createComponent(this.componentFactory);
        this.component = componentRef.instance;
        // Remove the component's DOM because it should be in the overlay container.
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), componentRef.location.nativeElement);
        this.component.setOverlayOrigin({ elementRef: this.specificOrigin || this.elementRef });
        this.updateChangedProperties(this.needProxyProperties);
        this.component.nzVisibleChange.pipe(distinctUntilChanged(), takeUntil(this.destroy$)).subscribe((/**
         * @param {?} visible
         * @return {?}
         */
        (visible) => {
            this.visible = visible;
            this.specificVisibleChange.emit(visible);
            this.nzVisibleChange.emit(visible);
        }));
    }
    /**
     * @protected
     * @return {?}
     */
    registerTriggers() {
        // When the method gets invoked, all properties has been synced to the dynamic component.
        // After removing the old API, we can just check the directive's own `nzTrigger`.
        /** @type {?} */
        const el = this.elementRef.nativeElement;
        /** @type {?} */
        const trigger = this.trigger;
        this.removeTriggerListeners();
        if (trigger === 'hover') {
            /** @type {?} */
            let overlayElement;
            this.triggerDisposables.push(this.renderer.listen(el, 'mouseenter', (/**
             * @return {?}
             */
            () => {
                this.delayEnterLeave(true, true, this.mouseEnterDelay);
            })));
            this.triggerDisposables.push(this.renderer.listen(el, 'mouseleave', (/**
             * @return {?}
             */
            () => {
                var _a;
                this.delayEnterLeave(true, false, this.mouseLeaveDelay);
                if (((_a = this.component) === null || _a === void 0 ? void 0 : _a.overlay.overlayRef) && !overlayElement) {
                    overlayElement = this.component.overlay.overlayRef.overlayElement;
                    this.triggerDisposables.push(this.renderer.listen(overlayElement, 'mouseenter', (/**
                     * @return {?}
                     */
                    () => {
                        this.delayEnterLeave(false, true);
                    })));
                    this.triggerDisposables.push(this.renderer.listen(overlayElement, 'mouseleave', (/**
                     * @return {?}
                     */
                    () => {
                        this.delayEnterLeave(false, false);
                    })));
                }
            })));
        }
        else if (trigger === 'focus') {
            this.triggerDisposables.push(this.renderer.listen(el, 'focus', (/**
             * @return {?}
             */
            () => this.show())));
            this.triggerDisposables.push(this.renderer.listen(el, 'blur', (/**
             * @return {?}
             */
            () => this.hide())));
        }
        else if (trigger === 'click') {
            this.triggerDisposables.push(this.renderer.listen(el, 'click', (/**
             * @param {?} e
             * @return {?}
             */
            e => {
                e.preventDefault();
                this.show();
            })));
        } // Else do nothing because user wants to control the visibility programmatically.
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    updatePropertiesByChanges(changes) {
        /** @type {?} */
        const properties = {
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
        const keys = Object.keys(changes);
        keys.forEach((/**
         * @param {?} property
         * @return {?}
         */
        (property) => {
            // @ts-ignore
            if (properties[property]) {
                // @ts-ignore
                const [name, value] = properties[property];
                this.updateComponentValue(name, value);
            }
        }));
    }
    /**
     * @return {?}
     */
    updatePropertiesByArray() {
        this.updateComponentValue('nzTitle', this.title);
        this.updateComponentValue('nzContent', this.content);
        this.updateComponentValue('nzPlacement', this.placement);
        this.updateComponentValue('nzTrigger', this.trigger);
        this.updateComponentValue('nzVisible', this.isVisible);
        this.updateComponentValue('nzMouseEnterDelay', this.mouseEnterDelay);
        this.updateComponentValue('nzMouseLeaveDelay', this.mouseLeaveDelay);
        this.updateComponentValue('nzOverlayClassName', this.overlayClassName);
        this.updateComponentValue('nzOverlayStyle', this.overlayStyle);
    }
    /**
     * Sync changed properties to the component and trigger change detection in that component.
     * @protected
     * @param {?} propertiesOrChanges
     * @return {?}
     */
    updateChangedProperties(propertiesOrChanges) {
        var _a;
        /** @type {?} */
        const isArray = Array.isArray(propertiesOrChanges);
        /** @type {?} */
        const keys = isArray ? ((/** @type {?} */ (propertiesOrChanges))) : Object.keys(propertiesOrChanges);
        keys.forEach((/**
         * @param {?} property
         * @return {?}
         */
        (property) => {
            if (this.needProxyProperties.indexOf(property) !== -1) {
                // @ts-ignore
                this.updateComponentValue(property, this[property]);
            }
        }));
        if (isArray) {
            this.updatePropertiesByArray();
        }
        else {
            this.updatePropertiesByChanges((/** @type {?} */ (propertiesOrChanges)));
        }
        (_a = this.component) === null || _a === void 0 ? void 0 : _a.updateByDirective();
    }
    /**
     * @private
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    updateComponentValue(key, value) {
        if (typeof value !== 'undefined') {
            // @ts-ignore
            this.component[key] = value;
        }
    }
    /**
     * @private
     * @param {?} isOrigin
     * @param {?} isEnter
     * @param {?=} delay
     * @return {?}
     */
    delayEnterLeave(isOrigin, isEnter, delay = -1) {
        if (this.delayTimer) {
            this.clearTogglingTimer();
        }
        else if (delay > 0) {
            this.delayTimer = setTimeout((/**
             * @return {?}
             */
            () => {
                this.delayTimer = undefined;
                isEnter ? this.show() : this.hide();
            }), delay * 1000);
        }
        else {
            // `isOrigin` is used due to the tooltip will not hide immediately
            // (may caused by the fade-out animation).
            isEnter && isOrigin ? this.show() : this.hide();
        }
    }
    /**
     * @private
     * @return {?}
     */
    removeTriggerListeners() {
        this.triggerDisposables.forEach((/**
         * @param {?} dispose
         * @return {?}
         */
        dispose => dispose()));
        this.triggerDisposables.length = 0;
    }
    /**
     * @private
     * @return {?}
     */
    clearTogglingTimer() {
        if (this.delayTimer) {
            clearTimeout(this.delayTimer);
            this.delayTimer = undefined;
        }
    }
}
NzTooltipBaseDirective.decorators = [
    { type: Directive }
];
/** @nocollapse */
NzTooltipBaseDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: Renderer2 },
    { type: NzNoAnimationDirective }
];
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
// tslint:disable-next-line:directive-class-suffix
export class NzTooltipBaseComponent {
    /**
     * @param {?} cdr
     * @param {?=} noAnimation
     */
    constructor(cdr, noAnimation) {
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
        this._positions = [...DEFAULT_TOOLTIP_POSITIONS];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzVisible(value) {
        /** @type {?} */
        const visible = toBoolean(value);
        if (this._visible !== visible) {
            this._visible = visible;
            this.nzVisibleChange.next(visible);
        }
    }
    /**
     * @return {?}
     */
    get nzVisible() {
        return this._visible;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTrigger(value) {
        this._trigger = value;
        this._hasBackdrop = this._trigger === 'click';
    }
    /**
     * @return {?}
     */
    get nzTrigger() {
        return this._trigger;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzPlacement(value) {
        if (value !== this.preferredPlacement) {
            this.preferredPlacement = value;
            this._positions = [POSITION_MAP[this.nzPlacement], ...this._positions];
        }
    }
    /**
     * @return {?}
     */
    get nzPlacement() {
        return this.preferredPlacement;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.nzVisibleChange.complete();
    }
    /**
     * @return {?}
     */
    show() {
        if (this.nzVisible) {
            return;
        }
        if (!this.isEmpty()) {
            this.nzVisible = true;
            this.nzVisibleChange.next(true);
            this.cdr.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    hide() {
        if (!this.nzVisible) {
            return;
        }
        this.nzVisible = false;
        this.nzVisibleChange.next(false);
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    updateByDirective() {
        this.setClassMap();
        this.cdr.detectChanges();
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            this.updatePosition();
            this.updateVisibilityByTitle();
        }));
    }
    /**
     * Force the component to update its position.
     * @return {?}
     */
    updatePosition() {
        if (this.origin && this.overlay && this.overlay.overlayRef) {
            this.overlay.overlayRef.updatePosition();
        }
    }
    /**
     * @param {?} position
     * @return {?}
     */
    onPositionChange(position) {
        this.preferredPlacement = (/** @type {?} */ (getPlacementName(position)));
        this.setClassMap();
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this._classMap = {
            [this.nzOverlayClassName]: true,
            [`${this._prefix}-${this.preferredPlacement}`]: true
        };
    }
    /**
     * @param {?} origin
     * @return {?}
     */
    setOverlayOrigin(origin) {
        this.origin = origin;
        this.cdr.markForCheck();
    }
    /**
     * Hide the component while the content is empty.
     * @private
     * @return {?}
     */
    updateVisibilityByTitle() {
        if (this.isEmpty()) {
            this.hide();
        }
    }
}
NzTooltipBaseComponent.decorators = [
    { type: Directive }
];
/** @nocollapse */
NzTooltipBaseComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzNoAnimationDirective }
];
NzTooltipBaseComponent.propDecorators = {
    overlay: [{ type: ViewChild, args: ['overlay', { static: false },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdG9vbHRpcC8iLCJzb3VyY2VzIjpbImJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLG1CQUFtQixFQUE0RSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JJLE9BQU8sRUFFTCxpQkFBaUIsRUFFakIsd0JBQXdCLEVBQ3hCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUVULFdBQVcsRUFDWCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFdkcsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUtqRSxNQUFNLE9BQWdCLHNCQUFzQjs7Ozs7Ozs7SUFxRzFDLFlBQ1MsVUFBc0IsRUFDbkIsUUFBMEIsRUFDMUIsUUFBa0MsRUFDbEMsUUFBbUIsRUFDbkIsV0FBb0M7UUFKdkMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtRQUMxQixhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQTdGaEQsMEJBQXFCLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQzs7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QUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNsQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtJQUNILENBQUM7OztZQW5JRixTQUFTOzs7O1lBdFlSLGlCQUFpQjtZQWlCVixzQkFBc0I7OztzQkEwWDVCLFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzs7O0lBRnZDLG1EQUFpRDs7SUFFakQseUNBQXVFOztJQUV2RSxpREFBeUM7O0lBQ3pDLHlDQUFnQzs7SUFDaEMsMkNBQWtDOztJQUNsQyxvREFBNEI7O0lBQzVCLGdEQUFzQzs7SUFDdEMsbURBQTJCOztJQUMzQixtREFBMkI7O0lBYzNCLDBDQUFpQjs7Ozs7SUFXakIsMENBQStDOztJQWEvQyx3Q0FBMEI7O0lBQzFCLG9EQUEyQjs7SUFFM0IsMkNBQWlDOztJQUNqQyw4Q0FBcUI7O0lBQ3JCLHlDQUFrQzs7SUFDbEMsNENBQXNFOztJQUUxRCxxQ0FBNkI7O0lBQUUsNkNBQTJDOzs7Ozs7O0lBNkV0RiwyREFBc0M7Ozs7OztBQUd4QyxNQUFNLFVBQVUsY0FBYyxDQUFDLEtBQXdDO0lBQ3JFLE9BQU8sS0FBSyxZQUFZLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2pGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5LCBDZGtPdmVybGF5T3JpZ2luLCBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHdhcm5EZXByZWNhdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9sb2dnZXInO1xuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9uby1hbmltYXRpb24nO1xuaW1wb3J0IHsgREVGQVVMVF9UT09MVElQX1BPU0lUSU9OUywgZ2V0UGxhY2VtZW50TmFtZSwgUE9TSVRJT05fTUFQIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL292ZXJsYXknO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOZ0NsYXNzSW50ZXJmYWNlLCBOZ1N0eWxlSW50ZXJmYWNlLCBOelNhZmVBbnksIE56VFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IGlzTm90TmlsLCB0b0Jvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgdHlwZSBOelRvb2x0aXBUcmlnZ2VyID0gJ2NsaWNrJyB8ICdmb2N1cycgfCAnaG92ZXInIHwgbnVsbDtcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTnpUb29sdGlwQmFzZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgZGlyZWN0aXZlTmFtZVRpdGxlPzogTnpUU1R5cGUgfCBudWxsO1xuICBzcGVjaWZpY1RpdGxlPzogTnpUU1R5cGUgfCBudWxsO1xuICBkaXJlY3RpdmVOYW1lQ29udGVudD86IE56VFNUeXBlIHwgbnVsbDtcbiAgc3BlY2lmaWNDb250ZW50PzogTnpUU1R5cGUgfCBudWxsO1xuICBzcGVjaWZpY1RyaWdnZXI/OiBOelRvb2x0aXBUcmlnZ2VyO1xuICBzcGVjaWZpY1BsYWNlbWVudD86IHN0cmluZztcbiAgc3BlY2lmaWNPcmlnaW4/OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgc3BlY2lmaWNWaXNpYmxlPzogYm9vbGVhbjtcbiAgc3BlY2lmaWNNb3VzZUVudGVyRGVsYXk/OiBudW1iZXI7XG4gIHNwZWNpZmljTW91c2VMZWF2ZURlbGF5PzogbnVtYmVyO1xuICBzcGVjaWZpY092ZXJsYXlDbGFzc05hbWU/OiBzdHJpbmc7XG4gIHNwZWNpZmljT3ZlcmxheVN0eWxlPzogTmdTdHlsZUludGVyZmFjZTtcbiAgc3BlY2lmaWNWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgMTAuMC4wLiBUaGlzIGlzIGRlcHJlY2F0ZWQgYW5kIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gMTAuMC4wLlxuICAgKiBQbGVhc2UgdXNlIGEgbW9yZSBzcGVjaWZpYyBBUEkuIExpa2UgYG56VG9vbHRpcFRpdGxlYC5cbiAgICovXG4gIEBJbnB1dCgpIG56VGl0bGU/OiBOelRTVHlwZSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIDEwLjAuMC4gVGhpcyBpcyBkZXByZWNhdGVkIGFuZCBnb2luZyB0byBiZSByZW1vdmVkIGluIDEwLjAuMC5cbiAgICogUGxlYXNlIHVzZSBhIG1vcmUgc3BlY2lmaWMgQVBJLiBMaWtlIGBuelBvcG92ZXJDb250ZW50YC5cbiAgICovXG4gIEBJbnB1dCgpIG56Q29udGVudD86IE56VFNUeXBlIHwgbnVsbDtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgMTAuMC4wLiBUaGlzIGlzIGRlcHJlY2F0ZWQgYW5kIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gMTAuMC4wLlxuICAgKiBQbGVhc2UgdXNlIGEgbW9yZSBzcGVjaWZpYyBBUEkuIExpa2UgYG56VG9vbHRpcFRyaWdnZXJgLlxuICAgKi9cbiAgQElucHV0KCkgbnpUcmlnZ2VyOiBOelRvb2x0aXBUcmlnZ2VyID0gJ2hvdmVyJztcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgMTAuMC4wLiBUaGlzIGlzIGRlcHJlY2F0ZWQgYW5kIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gMTAuMC4wLlxuICAgKiBQbGVhc2UgdXNlIGEgbW9yZSBzcGVjaWZpYyBBUEkuIExpa2UgYG56VG9vbHRpcFBsYWNlbWVudGAuXG4gICAqL1xuICBASW5wdXQoKSBuelBsYWNlbWVudDogc3RyaW5nID0gJ3RvcCc7XG5cbiAgQElucHV0KCkgbnpNb3VzZUVudGVyRGVsYXk/OiBudW1iZXI7XG4gIEBJbnB1dCgpIG56TW91c2VMZWF2ZURlbGF5PzogbnVtYmVyO1xuICBASW5wdXQoKSBuek92ZXJsYXlDbGFzc05hbWU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56T3ZlcmxheVN0eWxlPzogTmdTdHlsZUludGVyZmFjZTtcbiAgQElucHV0KCkgbnpWaXNpYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRm9yIGNyZWF0ZSB0b29sdGlwIGR5bmFtaWNhbGx5LiBUaGlzIHNob3VsZCBiZSBvdmVycmlkZSBmb3IgZWFjaCBkaWZmZXJlbnQgY29tcG9uZW50LlxuICAgKi9cbiAgcHJvdGVjdGVkIGNvbXBvbmVudEZhY3RvcnkhOiBDb21wb25lbnRGYWN0b3J5PE56VG9vbHRpcEJhc2VDb21wb25lbnQ+O1xuXG4gIC8qKlxuICAgKiBUaGlzIHRydWUgdGl0bGUgdGhhdCB3b3VsZCBiZSB1c2VkIGluIG90aGVyIHBhcnRzIG9uIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCB0aXRsZSgpOiBOelRTVHlwZSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNwZWNpZmljVGl0bGUgfHwgdGhpcy5kaXJlY3RpdmVOYW1lVGl0bGUgfHwgdGhpcy5uelRpdGxlIHx8IG51bGw7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGNvbnRlbnQoKTogTnpUU1R5cGUgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5zcGVjaWZpY0NvbnRlbnQgfHwgdGhpcy5kaXJlY3RpdmVOYW1lQ29udGVudCB8fCB0aGlzLm56Q29udGVudCB8fCBudWxsO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBwbGFjZW1lbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zcGVjaWZpY1BsYWNlbWVudCB8fCB0aGlzLm56UGxhY2VtZW50O1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCB0cmlnZ2VyKCk6IE56VG9vbHRpcFRyaWdnZXIge1xuICAgIC8vIE56VG9vbHRpcFRyaWdnZXIgY2FuIGJlIG51bGwuXG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnNwZWNpZmljVHJpZ2dlciAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnNwZWNpZmljVHJpZ2dlciA6IHRoaXMubnpUcmlnZ2VyO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBpc1Zpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3BlY2lmaWNWaXNpYmxlIHx8IHRoaXMubnpWaXNpYmxlIHx8IGZhbHNlO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBtb3VzZUVudGVyRGVsYXkoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zcGVjaWZpY01vdXNlRW50ZXJEZWxheSB8fCB0aGlzLm56TW91c2VFbnRlckRlbGF5IHx8IDAuMTU7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IG1vdXNlTGVhdmVEZWxheSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnNwZWNpZmljTW91c2VMZWF2ZURlbGF5IHx8IHRoaXMubnpNb3VzZUxlYXZlRGVsYXkgfHwgMC4xO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBvdmVybGF5Q2xhc3NOYW1lKCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNwZWNpZmljT3ZlcmxheUNsYXNzTmFtZSB8fCB0aGlzLm56T3ZlcmxheUNsYXNzTmFtZSB8fCBudWxsO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBvdmVybGF5U3R5bGUoKTogTmdTdHlsZUludGVyZmFjZSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNwZWNpZmljT3ZlcmxheVN0eWxlIHx8IHRoaXMubnpPdmVybGF5U3R5bGUgfHwgbnVsbDtcbiAgfVxuXG4gIHZpc2libGUgPSBmYWxzZTtcbiAgcHJvdGVjdGVkIG5lZWRQcm94eVByb3BlcnRpZXMgPSBbJ25vQW5pbWF0aW9uJ107XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56VmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBjb21wb25lbnQ/OiBOelRvb2x0aXBCYXNlQ29tcG9uZW50O1xuXG4gIHByb3RlY3RlZCByZWFkb25seSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByb3RlY3RlZCByZWFkb25seSB0cmlnZ2VyRGlzcG9zYWJsZXM6IEFycmF5PCgpID0+IHZvaWQ+ID0gW107XG5cbiAgcHJpdmF0ZSBkZWxheVRpbWVyPzogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByb3RlY3RlZCBob3N0VmlldzogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcm90ZWN0ZWQgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcm90ZWN0ZWQgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXG4gICkge31cblxuICB3YXJuRGVwcmVjYXRpb25JZk5lZWRlZChcbiAgICBpc05lZWRlZDogYm9vbGVhbixcbiAgICBwcm9wZXJ0eTogc3RyaW5nLFxuICAgIG5ld1Byb3BlcnR5OiBzdHJpbmcsXG4gICAgY29tcDogc3RyaW5nID0gJ256LXRvb2x0aXAnLFxuICAgIHNoYXJlZDogYm9vbGVhbiA9IHRydWVcbiAgKTogdm9pZCB7XG4gICAgaWYgKGlzTmVlZGVkKSB7XG4gICAgICBsZXQgbWVzc2FnZSA9IGAnJHtwcm9wZXJ0eX0nIG9mICcke2NvbXB9JyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gMTAuMC4wLlxuICAgICAgUGxlYXNlIHVzZSAnJHtuZXdQcm9wZXJ0eX0nIGluc3RlYWQuYDtcblxuICAgICAgaWYgKHNoYXJlZCkge1xuICAgICAgICBtZXNzYWdlID0gYCR7bWVzc2FnZX0gVGhlIHNhbWUgd2l0aCAnbnotcG9wb3ZlcicgYW5kICduei1wb3Bjb25maXJtJy5gO1xuICAgICAgfVxuICAgICAgd2FybkRlcHJlY2F0aW9uKG1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHdhcm5EZXByZWNhdGlvbkJ5Q2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgLy8gd2FybiBkZXByZWNhdGVkIHRoaW5ncyB3aGVuIHNwZWNpZmljIHByb3BlcnR5IGlzIG5vdCBnaXZlblxuICAgIHRoaXMud2FybkRlcHJlY2F0aW9uSWZOZWVkZWQoY2hhbmdlcy5uelRpdGxlICYmICF0aGlzLnNwZWNpZmljVGl0bGUgJiYgIXRoaXMuZGlyZWN0aXZlTmFtZVRpdGxlLCAnbnpUaXRsZScsICduelRvb2x0aXBUaXRsZScpO1xuICAgIHRoaXMud2FybkRlcHJlY2F0aW9uSWZOZWVkZWQoY2hhbmdlcy5uekNvbnRlbnQgJiYgIXRoaXMuc3BlY2lmaWNDb250ZW50LCAnbnpDb250ZW50JywgJ256UG9wb3ZlckNvbnRlbnQnLCAnbnotcG9wb3ZlcicsIGZhbHNlKTtcbiAgICB0aGlzLndhcm5EZXByZWNhdGlvbklmTmVlZGVkKGNoYW5nZXMubnpQbGFjZW1lbnQgJiYgIXRoaXMuc3BlY2lmaWNQbGFjZW1lbnQsICduelBsYWNlbWVudCcsICduelRvb2x0aXBQbGFjZW1lbnQnKTtcbiAgICB0aGlzLndhcm5EZXByZWNhdGlvbklmTmVlZGVkKGNoYW5nZXMubnpUcmlnZ2VyICYmICF0aGlzLnNwZWNpZmljVHJpZ2dlciwgJ256VHJpZ2dlcicsICduelRvb2x0aXBUcmlnZ2VyJyk7XG4gICAgdGhpcy53YXJuRGVwcmVjYXRpb25JZk5lZWRlZChjaGFuZ2VzLm56VmlzaWJsZSAmJiAhdGhpcy5zcGVjaWZpY1Zpc2libGUsICduelZpc2libGUnLCAnbnpUb29sdGlwVmlzaWJsZScpO1xuICAgIHRoaXMud2FybkRlcHJlY2F0aW9uSWZOZWVkZWQoXG4gICAgICBjaGFuZ2VzLm56TW91c2VFbnRlckRlbGF5ICYmICF0aGlzLnNwZWNpZmljTW91c2VFbnRlckRlbGF5LFxuICAgICAgJ256TW91c2VFbnRlckRlbGF5JyxcbiAgICAgICduelRvb2x0aXBNb3VzZUVudGVyRGVsYXknXG4gICAgKTtcbiAgICB0aGlzLndhcm5EZXByZWNhdGlvbklmTmVlZGVkKFxuICAgICAgY2hhbmdlcy5uek1vdXNlTGVhdmVEZWxheSAmJiAhdGhpcy5zcGVjaWZpY01vdXNlTGVhdmVEZWxheSxcbiAgICAgICduek1vdXNlTGVhdmVEZWxheScsXG4gICAgICAnbnpUb29sdGlwTW91c2VMZWF2ZURlbGF5J1xuICAgICk7XG4gICAgdGhpcy53YXJuRGVwcmVjYXRpb25JZk5lZWRlZChjaGFuZ2VzLm56T3ZlcmxheUNsYXNzTmFtZSAmJiAhdGhpcy5zcGVjaWZpY092ZXJsYXlDbGFzc05hbWUsICduek92ZXJsYXlDbGFzc05hbWUnLCAnbnpUb29sdGlwQ2xhc3NOYW1lJyk7XG4gICAgdGhpcy53YXJuRGVwcmVjYXRpb25JZk5lZWRlZChjaGFuZ2VzLm56T3ZlcmxheVN0eWxlICYmICF0aGlzLnNwZWNpZmljT3ZlcmxheVN0eWxlLCAnbnpPdmVybGF5U3R5bGUnLCAnbnpUb29sdGlwT3ZlcmxheVN0eWxlJyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuelRyaWdnZXIsIHNwZWNpZmljVHJpZ2dlciB9ID0gY2hhbmdlcztcbiAgICBjb25zdCB0cmlnZ2VyID0gc3BlY2lmaWNUcmlnZ2VyIHx8IG56VHJpZ2dlcjtcblxuICAgIGlmICh0cmlnZ2VyICYmICF0cmlnZ2VyLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy5yZWdpc3RlclRyaWdnZXJzKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29tcG9uZW50KSB7XG4gICAgICB0aGlzLnVwZGF0ZUNoYW5nZWRQcm9wZXJ0aWVzKGNoYW5nZXMpO1xuICAgIH1cblxuICAgIHRoaXMud2FybkRlcHJlY2F0aW9uQnlDaGFuZ2VzKGNoYW5nZXMpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XG4gICAgdGhpcy5yZWdpc3RlclRyaWdnZXJzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG5cbiAgICAvLyBDbGVhciB0b2dnbGluZyB0aW1lci4gSXNzdWUgIzM4NzUgIzQzMTcgIzQzODZcbiAgICB0aGlzLmNsZWFyVG9nZ2xpbmdUaW1lcigpO1xuICAgIHRoaXMucmVtb3ZlVHJpZ2dlckxpc3RlbmVycygpO1xuICB9XG5cbiAgc2hvdygpOiB2b2lkIHtcbiAgICB0aGlzLmNvbXBvbmVudD8uc2hvdygpO1xuICB9XG5cbiAgaGlkZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbXBvbmVudD8uaGlkZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcmNlIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlIGl0cyBwb3NpdGlvbi5cbiAgICovXG4gIHVwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbXBvbmVudCkge1xuICAgICAgdGhpcy5jb21wb25lbnQudXBkYXRlUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgZHluYW1pYyB0b29sdGlwIGNvbXBvbmVudC4gVGhpcyBtZXRob2QgY2FuIGJlIG92ZXJyaWRlLlxuICAgKi9cbiAgcHJvdGVjdGVkIGNyZWF0ZUNvbXBvbmVudCgpOiB2b2lkIHtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmhvc3RWaWV3LmNyZWF0ZUNvbXBvbmVudCh0aGlzLmNvbXBvbmVudEZhY3RvcnkpO1xuXG4gICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnRSZWYuaW5zdGFuY2U7XG5cbiAgICAvLyBSZW1vdmUgdGhlIGNvbXBvbmVudCdzIERPTSBiZWNhdXNlIGl0IHNob3VsZCBiZSBpbiB0aGUgb3ZlcmxheSBjb250YWluZXIuXG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLCBjb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5jb21wb25lbnQuc2V0T3ZlcmxheU9yaWdpbih7IGVsZW1lbnRSZWY6IHRoaXMuc3BlY2lmaWNPcmlnaW4gfHwgdGhpcy5lbGVtZW50UmVmIH0pO1xuXG4gICAgdGhpcy51cGRhdGVDaGFuZ2VkUHJvcGVydGllcyh0aGlzLm5lZWRQcm94eVByb3BlcnRpZXMpO1xuXG4gICAgdGhpcy5jb21wb25lbnQubnpWaXNpYmxlQ2hhbmdlLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSwgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKHZpc2libGU6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICB0aGlzLnNwZWNpZmljVmlzaWJsZUNoYW5nZS5lbWl0KHZpc2libGUpO1xuICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZWdpc3RlclRyaWdnZXJzKCk6IHZvaWQge1xuICAgIC8vIFdoZW4gdGhlIG1ldGhvZCBnZXRzIGludm9rZWQsIGFsbCBwcm9wZXJ0aWVzIGhhcyBiZWVuIHN5bmNlZCB0byB0aGUgZHluYW1pYyBjb21wb25lbnQuXG4gICAgLy8gQWZ0ZXIgcmVtb3ZpbmcgdGhlIG9sZCBBUEksIHdlIGNhbiBqdXN0IGNoZWNrIHRoZSBkaXJlY3RpdmUncyBvd24gYG56VHJpZ2dlcmAuXG4gICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCB0cmlnZ2VyID0gdGhpcy50cmlnZ2VyO1xuXG4gICAgdGhpcy5yZW1vdmVUcmlnZ2VyTGlzdGVuZXJzKCk7XG5cbiAgICBpZiAodHJpZ2dlciA9PT0gJ2hvdmVyJykge1xuICAgICAgbGV0IG92ZXJsYXlFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICAgIHRoaXMudHJpZ2dlckRpc3Bvc2FibGVzLnB1c2goXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmRlbGF5RW50ZXJMZWF2ZSh0cnVlLCB0cnVlLCB0aGlzLm1vdXNlRW50ZXJEZWxheSk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgdGhpcy50cmlnZ2VyRGlzcG9zYWJsZXMucHVzaChcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oZWwsICdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZGVsYXlFbnRlckxlYXZlKHRydWUsIGZhbHNlLCB0aGlzLm1vdXNlTGVhdmVEZWxheSk7XG4gICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50Py5vdmVybGF5Lm92ZXJsYXlSZWYgJiYgIW92ZXJsYXlFbGVtZW50KSB7XG4gICAgICAgICAgICBvdmVybGF5RWxlbWVudCA9IHRoaXMuY29tcG9uZW50Lm92ZXJsYXkub3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckRpc3Bvc2FibGVzLnB1c2goXG4gICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKG92ZXJsYXlFbGVtZW50LCAnbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGF5RW50ZXJMZWF2ZShmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRGlzcG9zYWJsZXMucHVzaChcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4ob3ZlcmxheUVsZW1lbnQsICdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsYXlFbnRlckxlYXZlKGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0cmlnZ2VyID09PSAnZm9jdXMnKSB7XG4gICAgICB0aGlzLnRyaWdnZXJEaXNwb3NhYmxlcy5wdXNoKHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnZm9jdXMnLCAoKSA9PiB0aGlzLnNob3coKSkpO1xuICAgICAgdGhpcy50cmlnZ2VyRGlzcG9zYWJsZXMucHVzaCh0aGlzLnJlbmRlcmVyLmxpc3RlbihlbCwgJ2JsdXInLCAoKSA9PiB0aGlzLmhpZGUoKSkpO1xuICAgIH0gZWxzZSBpZiAodHJpZ2dlciA9PT0gJ2NsaWNrJykge1xuICAgICAgdGhpcy50cmlnZ2VyRGlzcG9zYWJsZXMucHVzaChcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oZWwsICdjbGljaycsIGUgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSAvLyBFbHNlIGRvIG5vdGhpbmcgYmVjYXVzZSB1c2VyIHdhbnRzIHRvIGNvbnRyb2wgdGhlIHZpc2liaWxpdHkgcHJvZ3JhbW1hdGljYWxseS5cbiAgfVxuXG4gIHVwZGF0ZVByb3BlcnRpZXNCeUNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSB7XG4gICAgICBzcGVjaWZpY1RpdGxlOiBbJ256VGl0bGUnLCB0aGlzLnRpdGxlXSxcbiAgICAgIGRpcmVjdGl2ZU5hbWVUaXRsZTogWyduelRpdGxlJywgdGhpcy50aXRsZV0sXG4gICAgICBuelRpdGxlOiBbJ256VGl0bGUnLCB0aGlzLnRpdGxlXSxcbiAgICAgIHNwZWNpZmljQ29udGVudDogWyduekNvbnRlbnQnLCB0aGlzLmNvbnRlbnRdLFxuICAgICAgZGlyZWN0aXZlTmFtZUNvbnRlbnQ6IFsnbnpDb250ZW50JywgdGhpcy5jb250ZW50XSxcbiAgICAgIG56Q29udGVudDogWyduekNvbnRlbnQnLCB0aGlzLmNvbnRlbnRdLFxuICAgICAgc3BlY2lmaWNUcmlnZ2VyOiBbJ256VHJpZ2dlcicsIHRoaXMudHJpZ2dlcl0sXG4gICAgICBuelRyaWdnZXI6IFsnbnpUcmlnZ2VyJywgdGhpcy50cmlnZ2VyXSxcbiAgICAgIHNwZWNpZmljUGxhY2VtZW50OiBbJ256UGxhY2VtZW50JywgdGhpcy5wbGFjZW1lbnRdLFxuICAgICAgbnpQbGFjZW1lbnQ6IFsnbnpQbGFjZW1lbnQnLCB0aGlzLnBsYWNlbWVudF0sXG4gICAgICBzcGVjaWZpY1Zpc2libGU6IFsnbnpWaXNpYmxlJywgdGhpcy5pc1Zpc2libGVdLFxuICAgICAgbnpWaXNpYmxlOiBbJ256VmlzaWJsZScsIHRoaXMuaXNWaXNpYmxlXSxcbiAgICAgIHNwZWNpZmljTW91c2VFbnRlckRlbGF5OiBbJ256TW91c2VFbnRlckRlbGF5JywgdGhpcy5tb3VzZUVudGVyRGVsYXldLFxuICAgICAgbnpNb3VzZUVudGVyRGVsYXk6IFsnbnpNb3VzZUVudGVyRGVsYXknLCB0aGlzLm1vdXNlRW50ZXJEZWxheV0sXG4gICAgICBzcGVjaWZpY01vdXNlTGVhdmVEZWxheTogWyduek1vdXNlTGVhdmVEZWxheScsIHRoaXMubW91c2VMZWF2ZURlbGF5XSxcbiAgICAgIG56TW91c2VMZWF2ZURlbGF5OiBbJ256TW91c2VMZWF2ZURlbGF5JywgdGhpcy5tb3VzZUxlYXZlRGVsYXldLFxuICAgICAgc3BlY2lmaWNPdmVybGF5Q2xhc3NOYW1lOiBbJ256T3ZlcmxheUNsYXNzTmFtZScsIHRoaXMub3ZlcmxheUNsYXNzTmFtZV0sXG4gICAgICBuek92ZXJsYXlDbGFzc05hbWU6IFsnbnpPdmVybGF5Q2xhc3NOYW1lJywgdGhpcy5vdmVybGF5Q2xhc3NOYW1lXSxcbiAgICAgIHNwZWNpZmljT3ZlcmxheVN0eWxlOiBbJ256T3ZlcmxheVN0eWxlJywgdGhpcy5vdmVybGF5U3R5bGVdLFxuICAgICAgbnpPdmVybGF5U3R5bGU6IFsnbnpPdmVybGF5U3R5bGUnLCB0aGlzLm92ZXJsYXlTdHlsZV1cbiAgICB9O1xuXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNoYW5nZXMpO1xuICAgIGtleXMuZm9yRWFjaCgocHJvcGVydHk6IE56U2FmZUFueSkgPT4ge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgaWYgKHByb3BlcnRpZXNbcHJvcGVydHldKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgW25hbWUsIHZhbHVlXSA9IHByb3BlcnRpZXNbcHJvcGVydHldO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKG5hbWUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVByb3BlcnRpZXNCeUFycmF5KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUoJ256VGl0bGUnLCB0aGlzLnRpdGxlKTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFZhbHVlKCduekNvbnRlbnQnLCB0aGlzLmNvbnRlbnQpO1xuICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUoJ256UGxhY2VtZW50JywgdGhpcy5wbGFjZW1lbnQpO1xuICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUoJ256VHJpZ2dlcicsIHRoaXMudHJpZ2dlcik7XG4gICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpWaXNpYmxlJywgdGhpcy5pc1Zpc2libGUpO1xuICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUoJ256TW91c2VFbnRlckRlbGF5JywgdGhpcy5tb3VzZUVudGVyRGVsYXkpO1xuICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUoJ256TW91c2VMZWF2ZURlbGF5JywgdGhpcy5tb3VzZUxlYXZlRGVsYXkpO1xuICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUoJ256T3ZlcmxheUNsYXNzTmFtZScsIHRoaXMub3ZlcmxheUNsYXNzTmFtZSk7XG4gICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZSgnbnpPdmVybGF5U3R5bGUnLCB0aGlzLm92ZXJsYXlTdHlsZSk7XG4gIH1cbiAgLyoqXG4gICAqIFN5bmMgY2hhbmdlZCBwcm9wZXJ0aWVzIHRvIHRoZSBjb21wb25lbnQgYW5kIHRyaWdnZXIgY2hhbmdlIGRldGVjdGlvbiBpbiB0aGF0IGNvbXBvbmVudC5cbiAgICovXG4gIHByb3RlY3RlZCB1cGRhdGVDaGFuZ2VkUHJvcGVydGllcyhwcm9wZXJ0aWVzT3JDaGFuZ2VzOiBzdHJpbmdbXSB8IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzT3JDaGFuZ2VzKTtcbiAgICBjb25zdCBrZXlzID0gaXNBcnJheSA/IChwcm9wZXJ0aWVzT3JDaGFuZ2VzIGFzIHN0cmluZ1tdKSA6IE9iamVjdC5rZXlzKHByb3BlcnRpZXNPckNoYW5nZXMpO1xuXG4gICAga2V5cy5mb3JFYWNoKChwcm9wZXJ0eTogTnpTYWZlQW55KSA9PiB7XG4gICAgICBpZiAodGhpcy5uZWVkUHJveHlQcm9wZXJ0aWVzLmluZGV4T2YocHJvcGVydHkpICE9PSAtMSkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUocHJvcGVydHksIHRoaXNbcHJvcGVydHldKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoaXNBcnJheSkge1xuICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0aWVzQnlBcnJheSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXNCeUNoYW5nZXMocHJvcGVydGllc09yQ2hhbmdlcyBhcyBTaW1wbGVDaGFuZ2VzKTtcbiAgICB9XG4gICAgdGhpcy5jb21wb25lbnQ/LnVwZGF0ZUJ5RGlyZWN0aXZlKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUNvbXBvbmVudFZhbHVlKGtleTogc3RyaW5nLCB2YWx1ZTogTnpTYWZlQW55KTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHRoaXMuY29tcG9uZW50W2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRlbGF5RW50ZXJMZWF2ZShpc09yaWdpbjogYm9vbGVhbiwgaXNFbnRlcjogYm9vbGVhbiwgZGVsYXk6IG51bWJlciA9IC0xKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGVsYXlUaW1lcikge1xuICAgICAgdGhpcy5jbGVhclRvZ2dsaW5nVGltZXIoKTtcbiAgICB9IGVsc2UgaWYgKGRlbGF5ID4gMCkge1xuICAgICAgdGhpcy5kZWxheVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZGVsYXlUaW1lciA9IHVuZGVmaW5lZDtcbiAgICAgICAgaXNFbnRlciA/IHRoaXMuc2hvdygpIDogdGhpcy5oaWRlKCk7XG4gICAgICB9LCBkZWxheSAqIDEwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBgaXNPcmlnaW5gIGlzIHVzZWQgZHVlIHRvIHRoZSB0b29sdGlwIHdpbGwgbm90IGhpZGUgaW1tZWRpYXRlbHlcbiAgICAgIC8vIChtYXkgY2F1c2VkIGJ5IHRoZSBmYWRlLW91dCBhbmltYXRpb24pLlxuICAgICAgaXNFbnRlciAmJiBpc09yaWdpbiA/IHRoaXMuc2hvdygpIDogdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVUcmlnZ2VyTGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIHRoaXMudHJpZ2dlckRpc3Bvc2FibGVzLmZvckVhY2goZGlzcG9zZSA9PiBkaXNwb3NlKCkpO1xuICAgIHRoaXMudHJpZ2dlckRpc3Bvc2FibGVzLmxlbmd0aCA9IDA7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyVG9nZ2xpbmdUaW1lcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kZWxheVRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWxheVRpbWVyKTtcbiAgICAgIHRoaXMuZGVsYXlUaW1lciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbn1cblxuQERpcmVjdGl2ZSgpXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLWNsYXNzLXN1ZmZpeFxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE56VG9vbHRpcEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpWaXNpYmxlOiBCb29sZWFuSW5wdXQ7XG5cbiAgQFZpZXdDaGlsZCgnb3ZlcmxheScsIHsgc3RhdGljOiBmYWxzZSB9KSBvdmVybGF5ITogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcblxuICBuelZpc2libGVDaGFuZ2UgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICBuelRpdGxlOiBOelRTVHlwZSB8IG51bGwgPSBudWxsO1xuICBuekNvbnRlbnQ6IE56VFNUeXBlIHwgbnVsbCA9IG51bGw7XG4gIG56T3ZlcmxheUNsYXNzTmFtZSE6IHN0cmluZztcbiAgbnpPdmVybGF5U3R5bGU6IE5nU3R5bGVJbnRlcmZhY2UgPSB7fTtcbiAgbnpNb3VzZUVudGVyRGVsYXk/OiBudW1iZXI7XG4gIG56TW91c2VMZWF2ZURlbGF5PzogbnVtYmVyO1xuXG4gIHNldCBuelZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCB2aXNpYmxlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICBpZiAodGhpcy5fdmlzaWJsZSAhPT0gdmlzaWJsZSkge1xuICAgICAgdGhpcy5fdmlzaWJsZSA9IHZpc2libGU7XG4gICAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5uZXh0KHZpc2libGUpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuelZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XG4gIH1cblxuICBfdmlzaWJsZSA9IGZhbHNlO1xuXG4gIHNldCBuelRyaWdnZXIodmFsdWU6IE56VG9vbHRpcFRyaWdnZXIpIHtcbiAgICB0aGlzLl90cmlnZ2VyID0gdmFsdWU7XG4gICAgdGhpcy5faGFzQmFja2Ryb3AgPSB0aGlzLl90cmlnZ2VyID09PSAnY2xpY2snO1xuICB9XG5cbiAgZ2V0IG56VHJpZ2dlcigpOiBOelRvb2x0aXBUcmlnZ2VyIHtcbiAgICByZXR1cm4gdGhpcy5fdHJpZ2dlcjtcbiAgfVxuXG4gIHByb3RlY3RlZCBfdHJpZ2dlcjogTnpUb29sdGlwVHJpZ2dlciA9ICdob3Zlcic7XG5cbiAgc2V0IG56UGxhY2VtZW50KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMucHJlZmVycmVkUGxhY2VtZW50KSB7XG4gICAgICB0aGlzLnByZWZlcnJlZFBsYWNlbWVudCA9IHZhbHVlO1xuICAgICAgdGhpcy5fcG9zaXRpb25zID0gW1BPU0lUSU9OX01BUFt0aGlzLm56UGxhY2VtZW50XSwgLi4udGhpcy5fcG9zaXRpb25zXTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpQbGFjZW1lbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5wcmVmZXJyZWRQbGFjZW1lbnQ7XG4gIH1cblxuICBvcmlnaW4/OiBDZGtPdmVybGF5T3JpZ2luO1xuICBwcmVmZXJyZWRQbGFjZW1lbnQgPSAndG9wJztcblxuICBfY2xhc3NNYXA6IE5nQ2xhc3NJbnRlcmZhY2UgPSB7fTtcbiAgX2hhc0JhY2tkcm9wID0gZmFsc2U7XG4gIF9wcmVmaXggPSAnYW50LXRvb2x0aXAtcGxhY2VtZW50JztcbiAgX3Bvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gWy4uLkRFRkFVTFRfVE9PTFRJUF9QT1NJVElPTlNdO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlKSB7fVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLmNvbXBsZXRlKCk7XG4gIH1cblxuICBzaG93KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56VmlzaWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pc0VtcHR5KCkpIHtcbiAgICAgIHRoaXMubnpWaXNpYmxlID0gdHJ1ZTtcbiAgICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLm5leHQodHJ1ZSk7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgaGlkZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubnpWaXNpYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5uelZpc2libGUgPSBmYWxzZTtcbiAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5uZXh0KGZhbHNlKTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICB1cGRhdGVCeURpcmVjdGl2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICB0aGlzLnVwZGF0ZVZpc2liaWxpdHlCeVRpdGxlKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRm9yY2UgdGhlIGNvbXBvbmVudCB0byB1cGRhdGUgaXRzIHBvc2l0aW9uLlxuICAgKi9cbiAgdXBkYXRlUG9zaXRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3JpZ2luICYmIHRoaXMub3ZlcmxheSAmJiB0aGlzLm92ZXJsYXkub3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcbiAgICB0aGlzLnByZWZlcnJlZFBsYWNlbWVudCA9IGdldFBsYWNlbWVudE5hbWUocG9zaXRpb24pITtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5fY2xhc3NNYXAgPSB7XG4gICAgICBbdGhpcy5uek92ZXJsYXlDbGFzc05hbWVdOiB0cnVlLFxuICAgICAgW2Ake3RoaXMuX3ByZWZpeH0tJHt0aGlzLnByZWZlcnJlZFBsYWNlbWVudH1gXTogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBzZXRPdmVybGF5T3JpZ2luKG9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbik6IHZvaWQge1xuICAgIHRoaXMub3JpZ2luID0gb3JpZ2luO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIGNvbXBvbmVudCB3aGlsZSB0aGUgY29udGVudCBpcyBlbXB0eS5cbiAgICovXG4gIHByaXZhdGUgdXBkYXRlVmlzaWJpbGl0eUJ5VGl0bGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW1wdHkgY29tcG9uZW50IGNhbm5vdCBiZSBvcGVuZWQuXG4gICAqL1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgaXNFbXB0eSgpOiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUb29sdGlwRW1wdHkodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCk6IGJvb2xlYW4ge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZiA/IGZhbHNlIDogdmFsdWUgPT09ICcnIHx8ICFpc05vdE5pbCh2YWx1ZSk7XG59XG4iXX0=