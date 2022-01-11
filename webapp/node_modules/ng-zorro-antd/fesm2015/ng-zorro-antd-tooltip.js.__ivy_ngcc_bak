import { EventEmitter, Directive, ElementRef, ViewContainerRef, ComponentFactoryResolver, Renderer2, Input, Output, ChangeDetectorRef, ViewChild, TemplateRef, Host, Optional, Component, ChangeDetectionStrategy, ViewEncapsulation, NgModule } from '@angular/core';
import { zoomBigMotion } from 'ng-zorro-antd/core/animation';
import { NzNoAnimationDirective, NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { OverlayModule } from '@angular/cdk/overlay';
import { warnDeprecation } from 'ng-zorro-antd/core/logger';
import { DEFAULT_TOOLTIP_POSITIONS, POSITION_MAP, getPlacementName, NzOverlayModule } from 'ng-zorro-antd/core/overlay';
import { toBoolean, isNotNil } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';

/**
 * @fileoverview added by tsickle
 * Generated from: base.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class NzTooltipBaseDirective {
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
class NzTooltipBaseComponent {
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
function isTooltipEmpty(value) {
    return value instanceof TemplateRef ? false : value === '' || !isNotNil(value);
}

/**
 * @fileoverview added by tsickle
 * Generated from: tooltip.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTooltipDirective extends NzTooltipBaseDirective {
    /**
     * @param {?} elementRef
     * @param {?} hostView
     * @param {?} resolver
     * @param {?} renderer
     * @param {?=} noAnimation
     */
    constructor(elementRef, hostView, resolver, renderer, noAnimation) {
        super(elementRef, hostView, resolver, renderer, noAnimation);
        // tslint:disable-next-line:no-output-rename
        this.specificVisibleChange = new EventEmitter();
        this.componentFactory = this.resolver.resolveComponentFactory(NzToolTipComponent);
    }
}
NzTooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-tooltip]',
                exportAs: 'nzTooltip',
                host: {
                    '[class.ant-tooltip-open]': 'visible'
                }
            },] }
];
/** @nocollapse */
NzTooltipDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: Renderer2 },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzTooltipDirective.propDecorators = {
    specificTitle: [{ type: Input, args: ['nzTooltipTitle',] }],
    directiveNameTitle: [{ type: Input, args: ['nz-tooltip',] }],
    specificTrigger: [{ type: Input, args: ['nzTooltipTrigger',] }],
    specificPlacement: [{ type: Input, args: ['nzTooltipPlacement',] }],
    specificOrigin: [{ type: Input, args: ['nzTooltipOrigin',] }],
    specificVisible: [{ type: Input, args: ['nzTooltipVisible',] }],
    specificMouseEnterDelay: [{ type: Input, args: ['nzTooltipMouseEnterDelay',] }],
    specificMouseLeaveDelay: [{ type: Input, args: ['nzTooltipMouseLeaveDelay',] }],
    specificOverlayClassName: [{ type: Input, args: ['nzTooltipOverlayClassName',] }],
    specificOverlayStyle: [{ type: Input, args: ['nzTooltipOverlayStyle',] }],
    specificVisibleChange: [{ type: Output, args: ['nzTooltipVisibleChange',] }]
};
if (false) {
    /** @type {?} */
    NzTooltipDirective.prototype.specificTitle;
    /** @type {?} */
    NzTooltipDirective.prototype.directiveNameTitle;
    /** @type {?} */
    NzTooltipDirective.prototype.specificTrigger;
    /** @type {?} */
    NzTooltipDirective.prototype.specificPlacement;
    /** @type {?} */
    NzTooltipDirective.prototype.specificOrigin;
    /** @type {?} */
    NzTooltipDirective.prototype.specificVisible;
    /** @type {?} */
    NzTooltipDirective.prototype.specificMouseEnterDelay;
    /** @type {?} */
    NzTooltipDirective.prototype.specificMouseLeaveDelay;
    /** @type {?} */
    NzTooltipDirective.prototype.specificOverlayClassName;
    /** @type {?} */
    NzTooltipDirective.prototype.specificOverlayStyle;
    /** @type {?} */
    NzTooltipDirective.prototype.specificVisibleChange;
    /** @type {?} */
    NzTooltipDirective.prototype.componentFactory;
}
class NzToolTipComponent extends NzTooltipBaseComponent {
    /**
     * @param {?} cdr
     * @param {?=} noAnimation
     */
    constructor(cdr, noAnimation) {
        super(cdr, noAnimation);
        this.noAnimation = noAnimation;
        this.nzTitle = null;
    }
    /**
     * @protected
     * @return {?}
     */
    isEmpty() {
        return isTooltipEmpty(this.nzTitle);
    }
}
NzToolTipComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tooltip',
                exportAs: 'nzTooltipComponent',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                animations: [zoomBigMotion],
                template: `
    <ng-template
      #overlay="cdkConnectedOverlay"
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayOpen]="_visible"
      [cdkConnectedOverlayHasBackdrop]="_hasBackdrop"
      [cdkConnectedOverlayPositions]="_positions"
      (backdropClick)="hide()"
      (detach)="hide()"
      (positionChange)="onPositionChange($event)"
    >
      <div
        class="ant-tooltip"
        [ngClass]="_classMap"
        [ngStyle]="nzOverlayStyle"
        [@.disabled]="noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@zoomBigMotion]="'active'"
      >
        <div class="ant-tooltip-content">
          <div class="ant-tooltip-arrow"></div>
          <div class="ant-tooltip-inner">
            <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
          </div>
        </div>
      </div>
    </ng-template>
  `,
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
NzToolTipComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzToolTipComponent.propDecorators = {
    nzTitle: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzToolTipComponent.prototype.nzTitle;
    /** @type {?} */
    NzToolTipComponent.prototype.noAnimation;
}

/**
 * @fileoverview added by tsickle
 * Generated from: tooltip.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzToolTipModule {
}
NzToolTipModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NzToolTipComponent, NzTooltipDirective],
                exports: [NzToolTipComponent, NzTooltipDirective],
                entryComponents: [NzToolTipComponent],
                imports: [CommonModule, OverlayModule, NzOutletModule, NzOverlayModule, NzNoAnimationModule]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-tooltip.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzToolTipComponent, NzToolTipModule, NzTooltipBaseComponent, NzTooltipBaseDirective, NzTooltipDirective, isTooltipEmpty };
//# sourceMappingURL=ng-zorro-antd-tooltip.js.map
