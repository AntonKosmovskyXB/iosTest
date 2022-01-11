/**
 * @fileoverview added by tsickle
 * Generated from: nz-wave.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Inject, InjectionToken, Input, NgZone, Optional } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { NzWaveRenderer } from './nz-wave-renderer';
/**
 * @record
 */
export function NzWaveConfig() { }
if (false) {
    /** @type {?|undefined} */
    NzWaveConfig.prototype.disabled;
}
/** @type {?} */
export var NZ_WAVE_GLOBAL_DEFAULT_CONFIG = {
    disabled: false
};
/** @type {?} */
export var NZ_WAVE_GLOBAL_CONFIG = new InjectionToken('nz-wave-global-options', {
    providedIn: 'root',
    factory: NZ_WAVE_GLOBAL_CONFIG_FACTORY
});
/**
 * @return {?}
 */
export function NZ_WAVE_GLOBAL_CONFIG_FACTORY() {
    return NZ_WAVE_GLOBAL_DEFAULT_CONFIG;
}
var NzWaveDirective = /** @class */ (function () {
    function NzWaveDirective(ngZone, elementRef, config, animationType) {
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this.config = config;
        this.animationType = animationType;
        this.nzWaveExtraNode = false;
        this.waveDisabled = false;
        this.waveDisabled = this.isConfigDisabled();
    }
    Object.defineProperty(NzWaveDirective.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.waveDisabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzWaveDirective.prototype, "rendererRef", {
        get: /**
         * @return {?}
         */
        function () {
            return this.waveRenderer;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzWaveDirective.prototype.isConfigDisabled = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var disabled = false;
        if (this.config && typeof this.config.disabled === 'boolean') {
            disabled = this.config.disabled;
        }
        if (this.animationType === 'NoopAnimations') {
            disabled = true;
        }
        return disabled;
    };
    /**
     * @return {?}
     */
    NzWaveDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.waveRenderer) {
            this.waveRenderer.destroy();
        }
    };
    /**
     * @return {?}
     */
    NzWaveDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderWaveIfEnabled();
    };
    /**
     * @return {?}
     */
    NzWaveDirective.prototype.renderWaveIfEnabled = /**
     * @return {?}
     */
    function () {
        if (!this.waveDisabled && this.elementRef.nativeElement) {
            this.waveRenderer = new NzWaveRenderer(this.elementRef.nativeElement, this.ngZone, this.nzWaveExtraNode);
        }
    };
    /**
     * @return {?}
     */
    NzWaveDirective.prototype.disable = /**
     * @return {?}
     */
    function () {
        this.waveDisabled = true;
        if (this.waveRenderer) {
            this.waveRenderer.removeTriggerEvent();
            this.waveRenderer.removeStyleAndExtraNode();
        }
    };
    /**
     * @return {?}
     */
    NzWaveDirective.prototype.enable = /**
     * @return {?}
     */
    function () {
        // config priority
        this.waveDisabled = this.isConfigDisabled() || false;
        if (this.waveRenderer) {
            this.waveRenderer.bindTriggerEvent();
        }
    };
    NzWaveDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-wave],button[nz-button]:not([nzType="link"])',
                    exportAs: 'nzWave'
                },] }
    ];
    /** @nocollapse */
    NzWaveDirective.ctorParameters = function () { return [
        { type: NgZone },
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_WAVE_GLOBAL_CONFIG,] }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
    ]; };
    NzWaveDirective.propDecorators = {
        nzWaveExtraNode: [{ type: Input }]
    };
    return NzWaveDirective;
}());
export { NzWaveDirective };
if (false) {
    /** @type {?} */
    NzWaveDirective.prototype.nzWaveExtraNode;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.waveRenderer;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.waveDisabled;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.config;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.animationType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotd2F2ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvd2F2ZS8iLCJzb3VyY2VzIjpbIm56LXdhdmUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBcUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFILE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUVwRCxrQ0FFQzs7O0lBREMsZ0NBQW1COzs7QUFHckIsTUFBTSxLQUFPLDZCQUE2QixHQUFpQjtJQUN6RCxRQUFRLEVBQUUsS0FBSztDQUNoQjs7QUFFRCxNQUFNLEtBQU8scUJBQXFCLEdBQUcsSUFBSSxjQUFjLENBQWUsd0JBQXdCLEVBQUU7SUFDOUYsVUFBVSxFQUFFLE1BQU07SUFDbEIsT0FBTyxFQUFFLDZCQUE2QjtDQUN2QyxDQUFDOzs7O0FBRUYsTUFBTSxVQUFVLDZCQUE2QjtJQUMzQyxPQUFPLDZCQUE2QixDQUFDO0FBQ3ZDLENBQUM7QUFFRDtJQWtCRSx5QkFDVSxNQUFjLEVBQ2QsVUFBc0IsRUFDcUIsTUFBb0IsRUFDcEIsYUFBcUI7UUFIaEUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDcUIsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUNwQixrQkFBYSxHQUFiLGFBQWEsQ0FBUTtRQWpCakUsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFHekIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFnQnBDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDOUMsQ0FBQztJQWZELHNCQUFJLHFDQUFROzs7O1FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx3Q0FBVzs7OztRQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNCLENBQUM7OztPQUFBOzs7O0lBV0QsMENBQWdCOzs7SUFBaEI7O1lBQ00sUUFBUSxHQUFHLEtBQUs7UUFDcEIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFO1lBQzVELFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztTQUNqQztRQUNELElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxnQkFBZ0IsRUFBRTtZQUMzQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ2pCO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELHFDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7OztJQUVELGtDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCw2Q0FBbUI7OztJQUFuQjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO1lBQ3ZELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDMUc7SUFDSCxDQUFDOzs7O0lBRUQsaUNBQU87OztJQUFQO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLHVCQUF1QixFQUFFLENBQUM7U0FDN0M7SUFDSCxDQUFDOzs7O0lBRUQsZ0NBQU07OztJQUFOO1FBQ0Usa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksS0FBSyxDQUFDO1FBQ3JELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDdEM7SUFDSCxDQUFDOztnQkFwRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrREFBa0Q7b0JBQzVELFFBQVEsRUFBRSxRQUFRO2lCQUNuQjs7OztnQkF4QjhELE1BQU07Z0JBQWpELFVBQVU7Z0RBMEN6QixRQUFRLFlBQUksTUFBTSxTQUFDLHFCQUFxQjs2Q0FDeEMsUUFBUSxZQUFJLE1BQU0sU0FBQyxxQkFBcUI7OztrQ0FqQjFDLEtBQUs7O0lBZ0VSLHNCQUFDO0NBQUEsQUFyRUQsSUFxRUM7U0FqRVksZUFBZTs7O0lBQzFCLDBDQUFpQzs7Ozs7SUFFakMsdUNBQXNDOzs7OztJQUN0Qyx1Q0FBc0M7Ozs7O0lBV3BDLGlDQUFzQjs7Ozs7SUFDdEIscUNBQThCOzs7OztJQUM5QixpQ0FBdUU7Ozs7O0lBQ3ZFLHdDQUF3RSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0LCBJbmplY3Rpb25Ub2tlbiwgSW5wdXQsIE5nWm9uZSwgT25EZXN0cm95LCBPbkluaXQsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBTklNQVRJT05fTU9EVUxFX1RZUEUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgTnpXYXZlUmVuZGVyZXIgfSBmcm9tICcuL256LXdhdmUtcmVuZGVyZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIE56V2F2ZUNvbmZpZyB7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IE5aX1dBVkVfR0xPQkFMX0RFRkFVTFRfQ09ORklHOiBOeldhdmVDb25maWcgPSB7XG4gIGRpc2FibGVkOiBmYWxzZVxufTtcblxuZXhwb3J0IGNvbnN0IE5aX1dBVkVfR0xPQkFMX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxOeldhdmVDb25maWc+KCduei13YXZlLWdsb2JhbC1vcHRpb25zJywge1xuICBwcm92aWRlZEluOiAncm9vdCcsXG4gIGZhY3Rvcnk6IE5aX1dBVkVfR0xPQkFMX0NPTkZJR19GQUNUT1JZXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIE5aX1dBVkVfR0xPQkFMX0NPTkZJR19GQUNUT1JZKCk6IE56V2F2ZUNvbmZpZyB7XG4gIHJldHVybiBOWl9XQVZFX0dMT0JBTF9ERUZBVUxUX0NPTkZJRztcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LXdhdmVdLGJ1dHRvbltuei1idXR0b25dOm5vdChbbnpUeXBlPVwibGlua1wiXSknLFxuICBleHBvcnRBczogJ256V2F2ZSdcbn0pXG5leHBvcnQgY2xhc3MgTnpXYXZlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBueldhdmVFeHRyYU5vZGUgPSBmYWxzZTtcblxuICBwcml2YXRlIHdhdmVSZW5kZXJlcj86IE56V2F2ZVJlbmRlcmVyO1xuICBwcml2YXRlIHdhdmVEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy53YXZlRGlzYWJsZWQ7XG4gIH1cblxuICBnZXQgcmVuZGVyZXJSZWYoKTogTnpXYXZlUmVuZGVyZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLndhdmVSZW5kZXJlcjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfV0FWRV9HTE9CQUxfQ09ORklHKSBwcml2YXRlIGNvbmZpZzogTnpXYXZlQ29uZmlnLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQU5JTUFUSU9OX01PRFVMRV9UWVBFKSBwcml2YXRlIGFuaW1hdGlvblR5cGU6IHN0cmluZ1xuICApIHtcbiAgICB0aGlzLndhdmVEaXNhYmxlZCA9IHRoaXMuaXNDb25maWdEaXNhYmxlZCgpO1xuICB9XG5cbiAgaXNDb25maWdEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICBsZXQgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5jb25maWcgJiYgdHlwZW9mIHRoaXMuY29uZmlnLmRpc2FibGVkID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGRpc2FibGVkID0gdGhpcy5jb25maWcuZGlzYWJsZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLmFuaW1hdGlvblR5cGUgPT09ICdOb29wQW5pbWF0aW9ucycpIHtcbiAgICAgIGRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGRpc2FibGVkO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMud2F2ZVJlbmRlcmVyKSB7XG4gICAgICB0aGlzLndhdmVSZW5kZXJlci5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJXYXZlSWZFbmFibGVkKCk7XG4gIH1cblxuICByZW5kZXJXYXZlSWZFbmFibGVkKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy53YXZlRGlzYWJsZWQgJiYgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMud2F2ZVJlbmRlcmVyID0gbmV3IE56V2F2ZVJlbmRlcmVyKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLm5nWm9uZSwgdGhpcy5ueldhdmVFeHRyYU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIGRpc2FibGUoKTogdm9pZCB7XG4gICAgdGhpcy53YXZlRGlzYWJsZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLndhdmVSZW5kZXJlcikge1xuICAgICAgdGhpcy53YXZlUmVuZGVyZXIucmVtb3ZlVHJpZ2dlckV2ZW50KCk7XG4gICAgICB0aGlzLndhdmVSZW5kZXJlci5yZW1vdmVTdHlsZUFuZEV4dHJhTm9kZSgpO1xuICAgIH1cbiAgfVxuXG4gIGVuYWJsZSgpOiB2b2lkIHtcbiAgICAvLyBjb25maWcgcHJpb3JpdHlcbiAgICB0aGlzLndhdmVEaXNhYmxlZCA9IHRoaXMuaXNDb25maWdEaXNhYmxlZCgpIHx8IGZhbHNlO1xuICAgIGlmICh0aGlzLndhdmVSZW5kZXJlcikge1xuICAgICAgdGhpcy53YXZlUmVuZGVyZXIuYmluZFRyaWdnZXJFdmVudCgpO1xuICAgIH1cbiAgfVxufVxuIl19