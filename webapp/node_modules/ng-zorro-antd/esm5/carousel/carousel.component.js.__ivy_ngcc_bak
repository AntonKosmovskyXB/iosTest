/**
 * @fileoverview added by tsickle
 * Generated from: carousel.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Inject, Input, Optional, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { NzDragService, NzResizeService } from 'ng-zorro-antd/core/services';
import { InputBoolean, InputNumber } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzCarouselContentDirective } from './carousel-content.directive';
import { NzCarouselOpacityStrategy } from './strategies/opacity-strategy';
import { NzCarouselTransformStrategy } from './strategies/transform-strategy';
import { NZ_CAROUSEL_CUSTOM_STRATEGIES } from './typings';
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'carousel';
var NzCarouselComponent = /** @class */ (function () {
    function NzCarouselComponent(elementRef, nzConfigService, renderer, cdr, platform, resizeService, nzDragService, customStrategies) {
        var _this = this;
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.cdr = cdr;
        this.platform = platform;
        this.resizeService = resizeService;
        this.nzDragService = nzDragService;
        this.customStrategies = customStrategies;
        this.nzEffect = 'scrollx';
        this.nzEnableSwipe = true;
        this.nzDots = true;
        this.nzAutoPlay = false;
        this.nzAutoPlaySpeed = 3000;
        this.nzTransitionSpeed = 500;
        this._dotPosition = 'bottom';
        this.nzBeforeChange = new EventEmitter();
        this.nzAfterChange = new EventEmitter();
        this.activeIndex = 0;
        this.vertical = false;
        this.transitionInProgress = null;
        this.destroy$ = new Subject();
        this.gestureRect = null;
        this.pointerDelta = null;
        this.isTransiting = false;
        this.isDragging = false;
        /**
         * Drag carousel.
         */
        this.pointerDown = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (!_this.isDragging && !_this.isTransiting && _this.nzEnableSwipe) {
                _this.clearScheduledTransition();
                _this.gestureRect = _this.slickListEl.getBoundingClientRect();
                _this.nzDragService.requestDraggingSequence(event).subscribe((/**
                 * @param {?} delta
                 * @return {?}
                 */
                function (delta) {
                    var _a;
                    _this.pointerDelta = delta;
                    _this.isDragging = true;
                    (_a = _this.strategy) === null || _a === void 0 ? void 0 : _a.dragging(_this.pointerDelta);
                }), (/**
                 * @return {?}
                 */
                function () { }), (/**
                 * @return {?}
                 */
                function () {
                    if (_this.nzEnableSwipe && _this.isDragging) {
                        /** @type {?} */
                        var xDelta = _this.pointerDelta ? _this.pointerDelta.x : 0;
                        // Switch to another slide if delta is bigger than third of the width.
                        if (Math.abs(xDelta) > (/** @type {?} */ (_this.gestureRect)).width / 3) {
                            _this.goTo(xDelta > 0 ? _this.activeIndex - 1 : _this.activeIndex + 1);
                        }
                        else {
                            _this.goTo(_this.activeIndex);
                        }
                        _this.gestureRect = null;
                        _this.pointerDelta = null;
                    }
                    _this.isDragging = false;
                }));
            }
        });
        this.nzDotPosition = 'bottom';
        this.renderer.addClass(elementRef.nativeElement, 'ant-carousel');
        this.el = elementRef.nativeElement;
    }
    Object.defineProperty(NzCarouselComponent.prototype, "nzDotPosition", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dotPosition;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dotPosition = value;
            if (value === 'left' || value === 'right') {
                this.vertical = true;
            }
            else {
                this.vertical = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.markContentActive(0);
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.platform.isBrowser) {
            return;
        }
        this.slickListEl = (/** @type {?} */ (this.slickList)).nativeElement;
        this.slickTrackEl = (/** @type {?} */ (this.slickTrack)).nativeElement;
        this.carouselContents.changes.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.markContentActive(0);
            _this.syncStrategy();
        }));
        this.resizeService
            .subscribe()
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.syncStrategy();
        }));
        this.switchStrategy();
        this.markContentActive(0);
        this.syncStrategy();
        // If embedded in an entry component, it may do initial render at a inappropriate time.
        // ngZone.onStable won't do this trick
        Promise.resolve().then((/**
         * @return {?}
         */
        function () {
            _this.syncStrategy();
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzCarouselComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzEffect = changes.nzEffect, nzDotPosition = changes.nzDotPosition;
        if (nzEffect && !nzEffect.isFirstChange()) {
            this.switchStrategy();
            this.markContentActive(0);
            this.syncStrategy();
        }
        if (nzDotPosition && !nzDotPosition.isFirstChange()) {
            this.switchStrategy();
            this.markContentActive(0);
            this.syncStrategy();
        }
        if (!this.nzAutoPlay || !this.nzAutoPlaySpeed) {
            this.clearScheduledTransition();
        }
        else {
            this.scheduleNextTransition();
        }
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.clearScheduledTransition();
        if (this.strategy) {
            this.strategy.dispose();
        }
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzCarouselComponent.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.keyCode === LEFT_ARROW) {
            e.preventDefault();
            this.pre();
        }
        else if (e.keyCode === RIGHT_ARROW) {
            this.next();
            e.preventDefault();
        }
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        this.goTo(this.activeIndex + 1);
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.pre = /**
     * @return {?}
     */
    function () {
        this.goTo(this.activeIndex - 1);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NzCarouselComponent.prototype.goTo = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        if (this.carouselContents && this.carouselContents.length && !this.isTransiting) {
            /** @type {?} */
            var length_1 = this.carouselContents.length;
            /** @type {?} */
            var from = this.activeIndex;
            /** @type {?} */
            var to = (index + length_1) % length_1;
            this.isTransiting = true;
            this.nzBeforeChange.emit({ from: from, to: to });
            (/** @type {?} */ (this.strategy)).switch(this.activeIndex, index).subscribe((/**
             * @return {?}
             */
            function () {
                _this.scheduleNextTransition();
                _this.nzAfterChange.emit(index);
                _this.isTransiting = false;
            }));
            this.markContentActive(to);
            this.cdr.markForCheck();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCarouselComponent.prototype.switchStrategy = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.strategy) {
            this.strategy.dispose();
        }
        // Load custom strategies first.
        /** @type {?} */
        var customStrategy = this.customStrategies ? this.customStrategies.find((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return s.name === _this.nzEffect; })) : null;
        if (customStrategy) {
            this.strategy = new ((/** @type {?} */ (customStrategy.strategy)))(this, this.cdr, this.renderer);
            return;
        }
        this.strategy =
            this.nzEffect === 'scrollx'
                ? new NzCarouselTransformStrategy(this, this.cdr, this.renderer)
                : new NzCarouselOpacityStrategy(this, this.cdr, this.renderer);
    };
    /**
     * @private
     * @return {?}
     */
    NzCarouselComponent.prototype.scheduleNextTransition = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.clearScheduledTransition();
        if (this.nzAutoPlay && this.nzAutoPlaySpeed > 0 && this.platform.isBrowser) {
            this.transitionInProgress = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.goTo(_this.activeIndex + 1);
            }), this.nzAutoPlaySpeed);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCarouselComponent.prototype.clearScheduledTransition = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.transitionInProgress) {
            clearTimeout(this.transitionInProgress);
            this.transitionInProgress = null;
        }
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    NzCarouselComponent.prototype.markContentActive = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.activeIndex = index;
        if (this.carouselContents) {
            this.carouselContents.forEach((/**
             * @param {?} slide
             * @param {?} i
             * @return {?}
             */
            function (slide, i) {
                slide.isActive = index === i;
            }));
        }
        this.cdr.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    NzCarouselComponent.prototype.syncStrategy = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.strategy) {
            this.strategy.withCarouselContents(this.carouselContents);
        }
    };
    NzCarouselComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-carousel',
                    exportAs: 'nzCarousel',
                    preserveWhitespaces: false,
                    template: "\n    <div class=\"slick-initialized slick-slider\" [class.slick-vertical]=\"nzDotPosition === 'left' || nzDotPosition === 'right'\">\n      <div\n        #slickList\n        class=\"slick-list\"\n        tabindex=\"-1\"\n        (keydown)=\"onKeyDown($event)\"\n        (mousedown)=\"pointerDown($event)\"\n        (touchstart)=\"pointerDown($event)\"\n      >\n        <!-- Render carousel items. -->\n        <div class=\"slick-track\" #slickTrack>\n          <ng-content></ng-content>\n        </div>\n      </div>\n      <!-- Render dots. -->\n      <ul\n        class=\"slick-dots\"\n        *ngIf=\"nzDots\"\n        [class.slick-dots-top]=\"nzDotPosition === 'top'\"\n        [class.slick-dots-bottom]=\"nzDotPosition === 'bottom'\"\n        [class.slick-dots-left]=\"nzDotPosition === 'left'\"\n        [class.slick-dots-right]=\"nzDotPosition === 'right'\"\n      >\n        <li *ngFor=\"let content of carouselContents; let i = index\" [class.slick-active]=\"content.isActive\" (click)=\"goTo(i)\">\n          <ng-template [ngTemplateOutlet]=\"nzDotRender || renderDotTemplate\" [ngTemplateOutletContext]=\"{ $implicit: i }\"> </ng-template>\n        </li>\n      </ul>\n    </div>\n\n    <ng-template #renderDotTemplate let-index>\n      <button>{{ index + 1 }}</button>\n    </ng-template>\n  ",
                    host: {
                        '[class.ant-carousel-vertical]': 'vertical'
                    }
                }] }
    ];
    /** @nocollapse */
    NzCarouselComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzConfigService },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: Platform },
        { type: NzResizeService },
        { type: NzDragService },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NZ_CAROUSEL_CUSTOM_STRATEGIES,] }] }
    ]; };
    NzCarouselComponent.propDecorators = {
        carouselContents: [{ type: ContentChildren, args: [NzCarouselContentDirective,] }],
        slickList: [{ type: ViewChild, args: ['slickList', { static: false },] }],
        slickTrack: [{ type: ViewChild, args: ['slickTrack', { static: false },] }],
        nzDotRender: [{ type: Input }],
        nzEffect: [{ type: Input }],
        nzEnableSwipe: [{ type: Input }],
        nzDots: [{ type: Input }],
        nzAutoPlay: [{ type: Input }],
        nzAutoPlaySpeed: [{ type: Input }],
        nzTransitionSpeed: [{ type: Input }],
        nzDotPosition: [{ type: Input }],
        nzBeforeChange: [{ type: Output }],
        nzAfterChange: [{ type: Output }]
    };
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", String)
    ], NzCarouselComponent.prototype, "nzEffect", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzCarouselComponent.prototype, "nzEnableSwipe", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzCarouselComponent.prototype, "nzDots", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzCarouselComponent.prototype, "nzAutoPlay", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME), InputNumber(),
        __metadata("design:type", Number)
    ], NzCarouselComponent.prototype, "nzAutoPlaySpeed", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], NzCarouselComponent.prototype, "nzTransitionSpeed", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], NzCarouselComponent.prototype, "nzDotPosition", null);
    return NzCarouselComponent;
}());
export { NzCarouselComponent };
if (false) {
    /** @type {?} */
    NzCarouselComponent.ngAcceptInputType_nzEnableSwipe;
    /** @type {?} */
    NzCarouselComponent.ngAcceptInputType_nzDots;
    /** @type {?} */
    NzCarouselComponent.ngAcceptInputType_nzAutoPlay;
    /** @type {?} */
    NzCarouselComponent.ngAcceptInputType_nzAutoPlaySpeed;
    /** @type {?} */
    NzCarouselComponent.ngAcceptInputType_nzTransitionSpeed;
    /** @type {?} */
    NzCarouselComponent.prototype.carouselContents;
    /** @type {?} */
    NzCarouselComponent.prototype.slickList;
    /** @type {?} */
    NzCarouselComponent.prototype.slickTrack;
    /** @type {?} */
    NzCarouselComponent.prototype.nzDotRender;
    /** @type {?} */
    NzCarouselComponent.prototype.nzEffect;
    /** @type {?} */
    NzCarouselComponent.prototype.nzEnableSwipe;
    /** @type {?} */
    NzCarouselComponent.prototype.nzDots;
    /** @type {?} */
    NzCarouselComponent.prototype.nzAutoPlay;
    /** @type {?} */
    NzCarouselComponent.prototype.nzAutoPlaySpeed;
    /** @type {?} */
    NzCarouselComponent.prototype.nzTransitionSpeed;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype._dotPosition;
    /** @type {?} */
    NzCarouselComponent.prototype.nzBeforeChange;
    /** @type {?} */
    NzCarouselComponent.prototype.nzAfterChange;
    /** @type {?} */
    NzCarouselComponent.prototype.activeIndex;
    /** @type {?} */
    NzCarouselComponent.prototype.el;
    /** @type {?} */
    NzCarouselComponent.prototype.slickListEl;
    /** @type {?} */
    NzCarouselComponent.prototype.slickTrackEl;
    /** @type {?} */
    NzCarouselComponent.prototype.strategy;
    /** @type {?} */
    NzCarouselComponent.prototype.vertical;
    /** @type {?} */
    NzCarouselComponent.prototype.transitionInProgress;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.gestureRect;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.pointerDelta;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.isTransiting;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.isDragging;
    /**
     * Drag carousel.
     * @type {?}
     */
    NzCarouselComponent.prototype.pointerDown;
    /** @type {?} */
    NzCarouselComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.resizeService;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.nzDragService;
    /**
     * @type {?}
     * @private
     */
    NzCarouselComponent.prototype.customStrategies;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYXJvdXNlbC8iLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUVULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUU3RSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTFFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzlFLE9BQU8sRUFFTCw2QkFBNkIsRUFLOUIsTUFBTSxXQUFXLENBQUM7O0lBRWIsd0JBQXdCLEdBQUcsVUFBVTtBQUUzQztJQW1HRSw2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QywyQ0FBa0Q7Ozs7O0lBQ2xELDJDQUE2Qjs7Ozs7SUFDN0IseUNBQTJCOzs7OztJQXdLM0IsMENBK0JFOztJQW5NQSw4Q0FBZ0Q7Ozs7O0lBQ2hELHVDQUFvQzs7Ozs7SUFDcEMsa0NBQXVDOzs7OztJQUN2Qyx1Q0FBbUM7Ozs7O0lBQ25DLDRDQUErQzs7Ozs7SUFDL0MsNENBQTZDOzs7OztJQUM3QywrQ0FBNkciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBMRUZUX0FSUk9XLCBSSUdIVF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IE56RHJhZ1NlcnZpY2UsIE56UmVzaXplU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE51bWJlcklucHV0LCBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL2Nhcm91c2VsLWNvbnRlbnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IE56Q2Fyb3VzZWxCYXNlU3RyYXRlZ3kgfSBmcm9tICcuL3N0cmF0ZWdpZXMvYmFzZS1zdHJhdGVneSc7XG5pbXBvcnQgeyBOekNhcm91c2VsT3BhY2l0eVN0cmF0ZWd5IH0gZnJvbSAnLi9zdHJhdGVnaWVzL29wYWNpdHktc3RyYXRlZ3knO1xuaW1wb3J0IHsgTnpDYXJvdXNlbFRyYW5zZm9ybVN0cmF0ZWd5IH0gZnJvbSAnLi9zdHJhdGVnaWVzL3RyYW5zZm9ybS1zdHJhdGVneSc7XG5pbXBvcnQge1xuICBGcm9tVG9JbnRlcmZhY2UsXG4gIE5aX0NBUk9VU0VMX0NVU1RPTV9TVFJBVEVHSUVTLFxuICBOekNhcm91c2VsRG90UG9zaXRpb24sXG4gIE56Q2Fyb3VzZWxFZmZlY3RzLFxuICBOekNhcm91c2VsU3RyYXRlZ3lSZWdpc3RyeUl0ZW0sXG4gIFBvaW50ZXJWZWN0b3Jcbn0gZnJvbSAnLi90eXBpbmdzJztcblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2Nhcm91c2VsJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ256LWNhcm91c2VsJyxcbiAgZXhwb3J0QXM6ICduekNhcm91c2VsJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInNsaWNrLWluaXRpYWxpemVkIHNsaWNrLXNsaWRlclwiIFtjbGFzcy5zbGljay12ZXJ0aWNhbF09XCJuekRvdFBvc2l0aW9uID09PSAnbGVmdCcgfHwgbnpEb3RQb3NpdGlvbiA9PT0gJ3JpZ2h0J1wiPlxuICAgICAgPGRpdlxuICAgICAgICAjc2xpY2tMaXN0XG4gICAgICAgIGNsYXNzPVwic2xpY2stbGlzdFwiXG4gICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXG4gICAgICAgIChtb3VzZWRvd24pPVwicG9pbnRlckRvd24oJGV2ZW50KVwiXG4gICAgICAgICh0b3VjaHN0YXJ0KT1cInBvaW50ZXJEb3duKCRldmVudClcIlxuICAgICAgPlxuICAgICAgICA8IS0tIFJlbmRlciBjYXJvdXNlbCBpdGVtcy4gLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzbGljay10cmFja1wiICNzbGlja1RyYWNrPlxuICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwhLS0gUmVuZGVyIGRvdHMuIC0tPlxuICAgICAgPHVsXG4gICAgICAgIGNsYXNzPVwic2xpY2stZG90c1wiXG4gICAgICAgICpuZ0lmPVwibnpEb3RzXCJcbiAgICAgICAgW2NsYXNzLnNsaWNrLWRvdHMtdG9wXT1cIm56RG90UG9zaXRpb24gPT09ICd0b3AnXCJcbiAgICAgICAgW2NsYXNzLnNsaWNrLWRvdHMtYm90dG9tXT1cIm56RG90UG9zaXRpb24gPT09ICdib3R0b20nXCJcbiAgICAgICAgW2NsYXNzLnNsaWNrLWRvdHMtbGVmdF09XCJuekRvdFBvc2l0aW9uID09PSAnbGVmdCdcIlxuICAgICAgICBbY2xhc3Muc2xpY2stZG90cy1yaWdodF09XCJuekRvdFBvc2l0aW9uID09PSAncmlnaHQnXCJcbiAgICAgID5cbiAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBjb250ZW50IG9mIGNhcm91c2VsQ29udGVudHM7IGxldCBpID0gaW5kZXhcIiBbY2xhc3Muc2xpY2stYWN0aXZlXT1cImNvbnRlbnQuaXNBY3RpdmVcIiAoY2xpY2spPVwiZ29UbyhpKVwiPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJuekRvdFJlbmRlciB8fCByZW5kZXJEb3RUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaSB9XCI+IDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuXG4gICAgPG5nLXRlbXBsYXRlICNyZW5kZXJEb3RUZW1wbGF0ZSBsZXQtaW5kZXg+XG4gICAgICA8YnV0dG9uPnt7IGluZGV4ICsgMSB9fTwvYnV0dG9uPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1jYXJvdXNlbC12ZXJ0aWNhbF0nOiAndmVydGljYWwnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpDYXJvdXNlbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RW5hYmxlU3dpcGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RG90czogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpBdXRvUGxheTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpBdXRvUGxheVNwZWVkOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256VHJhbnNpdGlvblNwZWVkOiBOdW1iZXJJbnB1dDtcblxuICBAQ29udGVudENoaWxkcmVuKE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlKSBjYXJvdXNlbENvbnRlbnRzITogUXVlcnlMaXN0PE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlPjtcblxuICBAVmlld0NoaWxkKCdzbGlja0xpc3QnLCB7IHN0YXRpYzogZmFsc2UgfSkgc2xpY2tMaXN0PzogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnc2xpY2tUcmFjaycsIHsgc3RhdGljOiBmYWxzZSB9KSBzbGlja1RyYWNrPzogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKSBuekRvdFJlbmRlcj86IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBudW1iZXIgfT47XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgbnpFZmZlY3Q6IE56Q2Fyb3VzZWxFZmZlY3RzID0gJ3Njcm9sbHgnO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIEBJbnB1dEJvb2xlYW4oKSBuekVuYWJsZVN3aXBlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBASW5wdXRCb29sZWFuKCkgbnpEb3RzOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBASW5wdXRCb29sZWFuKCkgbnpBdXRvUGxheTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIEBJbnB1dE51bWJlcigpIG56QXV0b1BsYXlTcGVlZDogbnVtYmVyID0gMzAwMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpUcmFuc2l0aW9uU3BlZWQgPSA1MDA7XG5cbiAgQElucHV0KClcbiAgLy8gQHRzLWlnbm9yZVxuICBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpXG4gIHNldCBuekRvdFBvc2l0aW9uKHZhbHVlOiBOekNhcm91c2VsRG90UG9zaXRpb24pIHtcbiAgICB0aGlzLl9kb3RQb3NpdGlvbiA9IHZhbHVlO1xuICAgIGlmICh2YWx1ZSA9PT0gJ2xlZnQnIHx8IHZhbHVlID09PSAncmlnaHQnKSB7XG4gICAgICB0aGlzLnZlcnRpY2FsID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52ZXJ0aWNhbCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuekRvdFBvc2l0aW9uKCk6IE56Q2Fyb3VzZWxEb3RQb3NpdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RvdFBvc2l0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBfZG90UG9zaXRpb246IE56Q2Fyb3VzZWxEb3RQb3NpdGlvbiA9ICdib3R0b20nO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekJlZm9yZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RnJvbVRvSW50ZXJmYWNlPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpBZnRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIGFjdGl2ZUluZGV4ID0gMDtcbiAgZWw6IEhUTUxFbGVtZW50O1xuICBzbGlja0xpc3RFbCE6IEhUTUxFbGVtZW50O1xuICBzbGlja1RyYWNrRWwhOiBIVE1MRWxlbWVudDtcbiAgc3RyYXRlZ3k/OiBOekNhcm91c2VsQmFzZVN0cmF0ZWd5O1xuICB2ZXJ0aWNhbCA9IGZhbHNlO1xuICB0cmFuc2l0aW9uSW5Qcm9ncmVzczogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgZ2VzdHVyZVJlY3Q6IENsaWVudFJlY3QgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBwb2ludGVyRGVsdGE6IFBvaW50ZXJWZWN0b3IgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBpc1RyYW5zaXRpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBpc0RyYWdnaW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgcmVhZG9ubHkgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJlc2l6ZVNlcnZpY2U6IE56UmVzaXplU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IG56RHJhZ1NlcnZpY2U6IE56RHJhZ1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9DQVJPVVNFTF9DVVNUT01fU1RSQVRFR0lFUykgcHJpdmF0ZSBjdXN0b21TdHJhdGVnaWVzOiBOekNhcm91c2VsU3RyYXRlZ3lSZWdpc3RyeUl0ZW1bXVxuICApIHtcbiAgICB0aGlzLm56RG90UG9zaXRpb24gPSAnYm90dG9tJztcblxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNhcm91c2VsJyk7XG4gICAgdGhpcy5lbCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm1hcmtDb250ZW50QWN0aXZlKDApO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zbGlja0xpc3RFbCA9IHRoaXMuc2xpY2tMaXN0IS5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuc2xpY2tUcmFja0VsID0gdGhpcy5zbGlja1RyYWNrIS5uYXRpdmVFbGVtZW50O1xuXG4gICAgdGhpcy5jYXJvdXNlbENvbnRlbnRzLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLm1hcmtDb250ZW50QWN0aXZlKDApO1xuICAgICAgdGhpcy5zeW5jU3RyYXRlZ3koKTtcbiAgICB9KTtcblxuICAgIHRoaXMucmVzaXplU2VydmljZVxuICAgICAgLnN1YnNjcmliZSgpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5zeW5jU3RyYXRlZ3koKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5zd2l0Y2hTdHJhdGVneSgpO1xuICAgIHRoaXMubWFya0NvbnRlbnRBY3RpdmUoMCk7XG4gICAgdGhpcy5zeW5jU3RyYXRlZ3koKTtcblxuICAgIC8vIElmIGVtYmVkZGVkIGluIGFuIGVudHJ5IGNvbXBvbmVudCwgaXQgbWF5IGRvIGluaXRpYWwgcmVuZGVyIGF0IGEgaW5hcHByb3ByaWF0ZSB0aW1lLlxuICAgIC8vIG5nWm9uZS5vblN0YWJsZSB3b24ndCBkbyB0aGlzIHRyaWNrXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnN5bmNTdHJhdGVneSgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpFZmZlY3QsIG56RG90UG9zaXRpb24gfSA9IGNoYW5nZXM7XG5cbiAgICBpZiAobnpFZmZlY3QgJiYgIW56RWZmZWN0LmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy5zd2l0Y2hTdHJhdGVneSgpO1xuICAgICAgdGhpcy5tYXJrQ29udGVudEFjdGl2ZSgwKTtcbiAgICAgIHRoaXMuc3luY1N0cmF0ZWd5KCk7XG4gICAgfVxuXG4gICAgaWYgKG56RG90UG9zaXRpb24gJiYgIW56RG90UG9zaXRpb24uaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLnN3aXRjaFN0cmF0ZWd5KCk7XG4gICAgICB0aGlzLm1hcmtDb250ZW50QWN0aXZlKDApO1xuICAgICAgdGhpcy5zeW5jU3RyYXRlZ3koKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMubnpBdXRvUGxheSB8fCAhdGhpcy5uekF1dG9QbGF5U3BlZWQpIHtcbiAgICAgIHRoaXMuY2xlYXJTY2hlZHVsZWRUcmFuc2l0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2NoZWR1bGVOZXh0VHJhbnNpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJTY2hlZHVsZWRUcmFuc2l0aW9uKCk7XG4gICAgaWYgKHRoaXMuc3RyYXRlZ3kpIHtcbiAgICAgIHRoaXMuc3RyYXRlZ3kuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gTEVGVF9BUlJPVykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5wcmUoKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gUklHSFRfQVJST1cpIHtcbiAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIG5leHQoKTogdm9pZCB7XG4gICAgdGhpcy5nb1RvKHRoaXMuYWN0aXZlSW5kZXggKyAxKTtcbiAgfVxuXG4gIHByZSgpOiB2b2lkIHtcbiAgICB0aGlzLmdvVG8odGhpcy5hY3RpdmVJbmRleCAtIDEpO1xuICB9XG5cbiAgZ29UbyhpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2Fyb3VzZWxDb250ZW50cyAmJiB0aGlzLmNhcm91c2VsQ29udGVudHMubGVuZ3RoICYmICF0aGlzLmlzVHJhbnNpdGluZykge1xuICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5jYXJvdXNlbENvbnRlbnRzLmxlbmd0aDtcbiAgICAgIGNvbnN0IGZyb20gPSB0aGlzLmFjdGl2ZUluZGV4O1xuICAgICAgY29uc3QgdG8gPSAoaW5kZXggKyBsZW5ndGgpICUgbGVuZ3RoO1xuICAgICAgdGhpcy5pc1RyYW5zaXRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5uekJlZm9yZUNoYW5nZS5lbWl0KHsgZnJvbSwgdG8gfSk7XG4gICAgICB0aGlzLnN0cmF0ZWd5IS5zd2l0Y2godGhpcy5hY3RpdmVJbmRleCwgaW5kZXgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVOZXh0VHJhbnNpdGlvbigpO1xuICAgICAgICB0aGlzLm56QWZ0ZXJDaGFuZ2UuZW1pdChpbmRleCk7XG4gICAgICAgIHRoaXMuaXNUcmFuc2l0aW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubWFya0NvbnRlbnRBY3RpdmUodG8pO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzd2l0Y2hTdHJhdGVneSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdHJhdGVneSkge1xuICAgICAgdGhpcy5zdHJhdGVneS5kaXNwb3NlKCk7XG4gICAgfVxuXG4gICAgLy8gTG9hZCBjdXN0b20gc3RyYXRlZ2llcyBmaXJzdC5cbiAgICBjb25zdCBjdXN0b21TdHJhdGVneSA9IHRoaXMuY3VzdG9tU3RyYXRlZ2llcyA/IHRoaXMuY3VzdG9tU3RyYXRlZ2llcy5maW5kKHMgPT4gcy5uYW1lID09PSB0aGlzLm56RWZmZWN0KSA6IG51bGw7XG4gICAgaWYgKGN1c3RvbVN0cmF0ZWd5KSB7XG4gICAgICB0aGlzLnN0cmF0ZWd5ID0gbmV3IChjdXN0b21TdHJhdGVneS5zdHJhdGVneSBhcyBOelNhZmVBbnkpKHRoaXMsIHRoaXMuY2RyLCB0aGlzLnJlbmRlcmVyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnN0cmF0ZWd5ID1cbiAgICAgIHRoaXMubnpFZmZlY3QgPT09ICdzY3JvbGx4J1xuICAgICAgICA/IG5ldyBOekNhcm91c2VsVHJhbnNmb3JtU3RyYXRlZ3kodGhpcywgdGhpcy5jZHIsIHRoaXMucmVuZGVyZXIpXG4gICAgICAgIDogbmV3IE56Q2Fyb3VzZWxPcGFjaXR5U3RyYXRlZ3kodGhpcywgdGhpcy5jZHIsIHRoaXMucmVuZGVyZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBzY2hlZHVsZU5leHRUcmFuc2l0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJTY2hlZHVsZWRUcmFuc2l0aW9uKCk7XG4gICAgaWYgKHRoaXMubnpBdXRvUGxheSAmJiB0aGlzLm56QXV0b1BsYXlTcGVlZCA+IDAgJiYgdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMudHJhbnNpdGlvbkluUHJvZ3Jlc3MgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5nb1RvKHRoaXMuYWN0aXZlSW5kZXggKyAxKTtcbiAgICAgIH0sIHRoaXMubnpBdXRvUGxheVNwZWVkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFyU2NoZWR1bGVkVHJhbnNpdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50cmFuc2l0aW9uSW5Qcm9ncmVzcykge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudHJhbnNpdGlvbkluUHJvZ3Jlc3MpO1xuICAgICAgdGhpcy50cmFuc2l0aW9uSW5Qcm9ncmVzcyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtYXJrQ29udGVudEFjdGl2ZShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVJbmRleCA9IGluZGV4O1xuXG4gICAgaWYgKHRoaXMuY2Fyb3VzZWxDb250ZW50cykge1xuICAgICAgdGhpcy5jYXJvdXNlbENvbnRlbnRzLmZvckVhY2goKHNsaWRlLCBpKSA9PiB7XG4gICAgICAgIHNsaWRlLmlzQWN0aXZlID0gaW5kZXggPT09IGk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmFnIGNhcm91c2VsLlxuICAgKi9cbiAgcG9pbnRlckRvd24gPSAoZXZlbnQ6IFRvdWNoRXZlbnQgfCBNb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCF0aGlzLmlzRHJhZ2dpbmcgJiYgIXRoaXMuaXNUcmFuc2l0aW5nICYmIHRoaXMubnpFbmFibGVTd2lwZSkge1xuICAgICAgdGhpcy5jbGVhclNjaGVkdWxlZFRyYW5zaXRpb24oKTtcbiAgICAgIHRoaXMuZ2VzdHVyZVJlY3QgPSB0aGlzLnNsaWNrTGlzdEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICB0aGlzLm56RHJhZ1NlcnZpY2UucmVxdWVzdERyYWdnaW5nU2VxdWVuY2UoZXZlbnQpLnN1YnNjcmliZShcbiAgICAgICAgZGVsdGEgPT4ge1xuICAgICAgICAgIHRoaXMucG9pbnRlckRlbHRhID0gZGVsdGE7XG4gICAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnN0cmF0ZWd5Py5kcmFnZ2luZyh0aGlzLnBvaW50ZXJEZWx0YSk7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHt9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMubnpFbmFibGVTd2lwZSAmJiB0aGlzLmlzRHJhZ2dpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IHhEZWx0YSA9IHRoaXMucG9pbnRlckRlbHRhID8gdGhpcy5wb2ludGVyRGVsdGEueCA6IDA7XG5cbiAgICAgICAgICAgIC8vIFN3aXRjaCB0byBhbm90aGVyIHNsaWRlIGlmIGRlbHRhIGlzIGJpZ2dlciB0aGFuIHRoaXJkIG9mIHRoZSB3aWR0aC5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh4RGVsdGEpID4gdGhpcy5nZXN0dXJlUmVjdCEud2lkdGggLyAzKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ29Ubyh4RGVsdGEgPiAwID8gdGhpcy5hY3RpdmVJbmRleCAtIDEgOiB0aGlzLmFjdGl2ZUluZGV4ICsgMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmdvVG8odGhpcy5hY3RpdmVJbmRleCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZ2VzdHVyZVJlY3QgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5wb2ludGVyRGVsdGEgPSBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIHN5bmNTdHJhdGVneSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdHJhdGVneSkge1xuICAgICAgdGhpcy5zdHJhdGVneS53aXRoQ2Fyb3VzZWxDb250ZW50cyh0aGlzLmNhcm91c2VsQ29udGVudHMpO1xuICAgIH1cbiAgfVxufVxuIl19