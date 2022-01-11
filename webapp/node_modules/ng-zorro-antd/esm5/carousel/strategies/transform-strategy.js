/**
 * @fileoverview added by tsickle
 * Generated from: strategies/transform-strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Subject } from 'rxjs';
import { NzCarouselBaseStrategy } from './base-strategy';
var NzCarouselTransformStrategy = /** @class */ (function (_super) {
    __extends(NzCarouselTransformStrategy, _super);
    function NzCarouselTransformStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDragging = false;
        _this.isTransitioning = false;
        return _this;
    }
    Object.defineProperty(NzCarouselTransformStrategy.prototype, "vertical", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.carouselComponent)).vertical;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCarouselTransformStrategy.prototype.dispose = /**
     * @return {?}
     */
    function () {
        _super.prototype.dispose.call(this);
        this.renderer.setStyle(this.slickTrackEl, 'transform', null);
    };
    /**
     * @param {?} contents
     * @return {?}
     */
    NzCarouselTransformStrategy.prototype.withCarouselContents = /**
     * @param {?} contents
     * @return {?}
     */
    function (contents) {
        var _this = this;
        _super.prototype.withCarouselContents.call(this, contents);
        /** @type {?} */
        var carousel = (/** @type {?} */ (this.carouselComponent));
        /** @type {?} */
        var activeIndex = carousel.activeIndex;
        if (this.contents.length) {
            this.renderer.setStyle(this.slickListEl, 'height', this.unitHeight + "px");
            if (this.vertical) {
                this.renderer.setStyle(this.slickTrackEl, 'width', this.unitWidth + "px");
                this.renderer.setStyle(this.slickTrackEl, 'height', this.length * this.unitHeight + "px");
                this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(0, " + -activeIndex * this.unitHeight + "px, 0)");
            }
            else {
                this.renderer.setStyle(this.slickTrackEl, 'height', this.unitHeight + "px");
                this.renderer.setStyle(this.slickTrackEl, 'width', this.length * this.unitWidth + "px");
                this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(" + -activeIndex * this.unitWidth + "px, 0, 0)");
            }
            this.contents.forEach((/**
             * @param {?} content
             * @return {?}
             */
            function (content) {
                _this.renderer.setStyle(content.el, 'position', 'relative');
                _this.renderer.setStyle(content.el, 'width', _this.unitWidth + "px");
                _this.renderer.setStyle(content.el, 'height', _this.unitHeight + "px");
            }));
        }
    };
    /**
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    NzCarouselTransformStrategy.prototype.switch = /**
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    function (_f, _t) {
        var _this = this;
        var t = this.getFromToInBoundary(_f, _t).to;
        /** @type {?} */
        var complete$ = new Subject();
        this.renderer.setStyle(this.slickTrackEl, 'transition', "transform " + (/** @type {?} */ (this.carouselComponent)).nzTransitionSpeed + "ms ease");
        if (this.vertical) {
            this.verticalTransform(_f, _t);
        }
        else {
            this.horizontalTransform(_f, _t);
        }
        this.isTransitioning = true;
        this.isDragging = false;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.renderer.setStyle(_this.slickTrackEl, 'transition', null);
            _this.contents.forEach((/**
             * @param {?} content
             * @return {?}
             */
            function (content) {
                _this.renderer.setStyle(content.el, _this.vertical ? 'top' : 'left', null);
            }));
            if (_this.vertical) {
                _this.renderer.setStyle(_this.slickTrackEl, 'transform', "translate3d(0, " + -t * _this.unitHeight + "px, 0)");
            }
            else {
                _this.renderer.setStyle(_this.slickTrackEl, 'transform', "translate3d(" + -t * _this.unitWidth + "px, 0, 0)");
            }
            _this.isTransitioning = false;
            complete$.next();
            complete$.complete();
        }), (/** @type {?} */ (this.carouselComponent)).nzTransitionSpeed);
        return complete$.asObservable();
    };
    /**
     * @param {?} _vector
     * @return {?}
     */
    NzCarouselTransformStrategy.prototype.dragging = /**
     * @param {?} _vector
     * @return {?}
     */
    function (_vector) {
        if (this.isTransitioning) {
            return;
        }
        /** @type {?} */
        var activeIndex = (/** @type {?} */ (this.carouselComponent)).activeIndex;
        if ((/** @type {?} */ (this.carouselComponent)).vertical) {
            if (!this.isDragging && this.length > 2) {
                if (activeIndex === this.maxIndex) {
                    this.prepareVerticalContext(true);
                }
                else if (activeIndex === 0) {
                    this.prepareVerticalContext(false);
                }
            }
            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(0, " + (-activeIndex * this.unitHeight + _vector.x) + "px, 0)");
        }
        else {
            if (!this.isDragging && this.length > 2) {
                if (activeIndex === this.maxIndex) {
                    this.prepareHorizontalContext(true);
                }
                else if (activeIndex === 0) {
                    this.prepareHorizontalContext(false);
                }
            }
            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(" + (-activeIndex * this.unitWidth + _vector.x) + "px, 0, 0)");
        }
        this.isDragging = true;
    };
    /**
     * @private
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    NzCarouselTransformStrategy.prototype.verticalTransform = /**
     * @private
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    function (_f, _t) {
        var _a = this.getFromToInBoundary(_f, _t), f = _a.from, t = _a.to;
        /** @type {?} */
        var needToAdjust = this.length > 2 && _t !== t;
        if (needToAdjust) {
            this.prepareVerticalContext(t < f);
            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(0, " + -_t * this.unitHeight + "px, 0)");
        }
        else {
            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(0, " + -t * this.unitHeight + "px, 0");
        }
    };
    /**
     * @private
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    NzCarouselTransformStrategy.prototype.horizontalTransform = /**
     * @private
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    function (_f, _t) {
        var _a = this.getFromToInBoundary(_f, _t), f = _a.from, t = _a.to;
        /** @type {?} */
        var needToAdjust = this.length > 2 && _t !== t;
        if (needToAdjust) {
            this.prepareHorizontalContext(t < f);
            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(" + -_t * this.unitWidth + "px, 0, 0)");
        }
        else {
            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(" + -t * this.unitWidth + "px, 0, 0");
        }
    };
    /**
     * @private
     * @param {?} lastToFirst
     * @return {?}
     */
    NzCarouselTransformStrategy.prototype.prepareVerticalContext = /**
     * @private
     * @param {?} lastToFirst
     * @return {?}
     */
    function (lastToFirst) {
        if (lastToFirst) {
            this.renderer.setStyle(this.firstEl, 'top', this.length * this.unitHeight + "px");
            this.renderer.setStyle(this.lastEl, 'top', null);
        }
        else {
            this.renderer.setStyle(this.firstEl, 'top', null);
            this.renderer.setStyle(this.lastEl, 'top', -this.unitHeight * this.length + "px");
        }
    };
    /**
     * @private
     * @param {?} lastToFirst
     * @return {?}
     */
    NzCarouselTransformStrategy.prototype.prepareHorizontalContext = /**
     * @private
     * @param {?} lastToFirst
     * @return {?}
     */
    function (lastToFirst) {
        if (lastToFirst) {
            this.renderer.setStyle(this.firstEl, 'left', this.length * this.unitWidth + "px");
            this.renderer.setStyle(this.lastEl, 'left', null);
        }
        else {
            this.renderer.setStyle(this.firstEl, 'left', null);
            this.renderer.setStyle(this.lastEl, 'left', -this.unitWidth * this.length + "px");
        }
    };
    return NzCarouselTransformStrategy;
}(NzCarouselBaseStrategy));
export { NzCarouselTransformStrategy };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzCarouselTransformStrategy.prototype.isDragging;
    /**
     * @type {?}
     * @private
     */
    NzCarouselTransformStrategy.prototype.isTransitioning;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYXJvdXNlbC8iLCJzb3VyY2VzIjpbInN0cmF0ZWdpZXMvdHJhbnNmb3JtLXN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFNQSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSzNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpEO0lBQWlELCtDQUFzQjtJQUF2RTtRQUFBLHFFQXFKQztRQXBKUyxnQkFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixxQkFBZSxHQUFHLEtBQUssQ0FBQzs7SUFtSmxDLENBQUM7SUFqSkMsc0JBQVksaURBQVE7Ozs7O1FBQXBCO1lBQ0UsT0FBTyxtQkFBQSxJQUFJLENBQUMsaUJBQWlCLEVBQUMsQ0FBQyxRQUFRLENBQUM7UUFDMUMsQ0FBQzs7O09BQUE7Ozs7SUFFRCw2Q0FBTzs7O0lBQVA7UUFDRSxpQkFBTSxPQUFPLFdBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7OztJQUVELDBEQUFvQjs7OztJQUFwQixVQUFxQixRQUFzRDtRQUEzRSxpQkF5QkM7UUF4QkMsaUJBQU0sb0JBQW9CLFlBQUMsUUFBUSxDQUFDLENBQUM7O1lBRS9CLFFBQVEsR0FBRyxtQkFBQSxJQUFJLENBQUMsaUJBQWlCLEVBQUM7O1lBQ2xDLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVztRQUV4QyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFLLElBQUksQ0FBQyxVQUFVLE9BQUksQ0FBQyxDQUFDO1lB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aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuLi9jYXJvdXNlbC1jb250ZW50LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQb2ludGVyVmVjdG9yIH0gZnJvbSAnLi4vdHlwaW5ncyc7XG5cbmltcG9ydCB7IE56Q2Fyb3VzZWxCYXNlU3RyYXRlZ3kgfSBmcm9tICcuL2Jhc2Utc3RyYXRlZ3knO1xuXG5leHBvcnQgY2xhc3MgTnpDYXJvdXNlbFRyYW5zZm9ybVN0cmF0ZWd5IGV4dGVuZHMgTnpDYXJvdXNlbEJhc2VTdHJhdGVneSB7XG4gIHByaXZhdGUgaXNEcmFnZ2luZyA9IGZhbHNlO1xuICBwcml2YXRlIGlzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuXG4gIHByaXZhdGUgZ2V0IHZlcnRpY2FsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNhcm91c2VsQ29tcG9uZW50IS52ZXJ0aWNhbDtcbiAgfVxuXG4gIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgc3VwZXIuZGlzcG9zZSgpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja1RyYWNrRWwsICd0cmFuc2Zvcm0nLCBudWxsKTtcbiAgfVxuXG4gIHdpdGhDYXJvdXNlbENvbnRlbnRzKGNvbnRlbnRzOiBRdWVyeUxpc3Q8TnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmU+IHwgbnVsbCk6IHZvaWQge1xuICAgIHN1cGVyLndpdGhDYXJvdXNlbENvbnRlbnRzKGNvbnRlbnRzKTtcblxuICAgIGNvbnN0IGNhcm91c2VsID0gdGhpcy5jYXJvdXNlbENvbXBvbmVudCE7XG4gICAgY29uc3QgYWN0aXZlSW5kZXggPSBjYXJvdXNlbC5hY3RpdmVJbmRleDtcblxuICAgIGlmICh0aGlzLmNvbnRlbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNsaWNrTGlzdEVsLCAnaGVpZ2h0JywgYCR7dGhpcy51bml0SGVpZ2h0fXB4YCk7XG5cbiAgICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja1RyYWNrRWwsICd3aWR0aCcsIGAke3RoaXMudW5pdFdpZHRofXB4YCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja1RyYWNrRWwsICdoZWlnaHQnLCBgJHt0aGlzLmxlbmd0aCAqIHRoaXMudW5pdEhlaWdodH1weGApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFja0VsLCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZTNkKDAsICR7LWFjdGl2ZUluZGV4ICogdGhpcy51bml0SGVpZ2h0fXB4LCAwKWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNsaWNrVHJhY2tFbCwgJ2hlaWdodCcsIGAke3RoaXMudW5pdEhlaWdodH1weGApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFja0VsLCAnd2lkdGgnLCBgJHt0aGlzLmxlbmd0aCAqIHRoaXMudW5pdFdpZHRofXB4YCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja1RyYWNrRWwsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoJHstYWN0aXZlSW5kZXggKiB0aGlzLnVuaXRXaWR0aH1weCwgMCwgMClgKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb250ZW50cy5mb3JFYWNoKChjb250ZW50OiBOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZSkgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNvbnRlbnQuZWwsICdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNvbnRlbnQuZWwsICd3aWR0aCcsIGAke3RoaXMudW5pdFdpZHRofXB4YCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY29udGVudC5lbCwgJ2hlaWdodCcsIGAke3RoaXMudW5pdEhlaWdodH1weGApO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc3dpdGNoKF9mOiBudW1iZXIsIF90OiBudW1iZXIpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICBjb25zdCB7IHRvOiB0IH0gPSB0aGlzLmdldEZyb21Ub0luQm91bmRhcnkoX2YsIF90KTtcbiAgICBjb25zdCBjb21wbGV0ZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNsaWNrVHJhY2tFbCwgJ3RyYW5zaXRpb24nLCBgdHJhbnNmb3JtICR7dGhpcy5jYXJvdXNlbENvbXBvbmVudCEubnpUcmFuc2l0aW9uU3BlZWR9bXMgZWFzZWApO1xuXG4gICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgIHRoaXMudmVydGljYWxUcmFuc2Zvcm0oX2YsIF90KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ob3Jpem9udGFsVHJhbnNmb3JtKF9mLCBfdCk7XG4gICAgfVxuXG4gICAgdGhpcy5pc1RyYW5zaXRpb25pbmcgPSB0cnVlO1xuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFja0VsLCAndHJhbnNpdGlvbicsIG51bGwpO1xuICAgICAgdGhpcy5jb250ZW50cy5mb3JFYWNoKChjb250ZW50OiBOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZSkgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNvbnRlbnQuZWwsIHRoaXMudmVydGljYWwgPyAndG9wJyA6ICdsZWZ0JywgbnVsbCk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNsaWNrVHJhY2tFbCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgwLCAkey10ICogdGhpcy51bml0SGVpZ2h0fXB4LCAwKWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNsaWNrVHJhY2tFbCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgkey10ICogdGhpcy51bml0V2lkdGh9cHgsIDAsIDApYCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG5cbiAgICAgIGNvbXBsZXRlJC5uZXh0KCk7XG4gICAgICBjb21wbGV0ZSQuY29tcGxldGUoKTtcbiAgICB9LCB0aGlzLmNhcm91c2VsQ29tcG9uZW50IS5uelRyYW5zaXRpb25TcGVlZCk7XG5cbiAgICByZXR1cm4gY29tcGxldGUkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgZHJhZ2dpbmcoX3ZlY3RvcjogUG9pbnRlclZlY3Rvcik6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5jYXJvdXNlbENvbXBvbmVudCEuYWN0aXZlSW5kZXg7XG5cbiAgICBpZiAodGhpcy5jYXJvdXNlbENvbXBvbmVudCEudmVydGljYWwpIHtcbiAgICAgIGlmICghdGhpcy5pc0RyYWdnaW5nICYmIHRoaXMubGVuZ3RoID4gMikge1xuICAgICAgICBpZiAoYWN0aXZlSW5kZXggPT09IHRoaXMubWF4SW5kZXgpIHtcbiAgICAgICAgICB0aGlzLnByZXBhcmVWZXJ0aWNhbENvbnRleHQodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aXZlSW5kZXggPT09IDApIHtcbiAgICAgICAgICB0aGlzLnByZXBhcmVWZXJ0aWNhbENvbnRleHQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFja0VsLCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZTNkKDAsICR7LWFjdGl2ZUluZGV4ICogdGhpcy51bml0SGVpZ2h0ICsgX3ZlY3Rvci54fXB4LCAwKWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuaXNEcmFnZ2luZyAmJiB0aGlzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgaWYgKGFjdGl2ZUluZGV4ID09PSB0aGlzLm1heEluZGV4KSB7XG4gICAgICAgICAgdGhpcy5wcmVwYXJlSG9yaXpvbnRhbENvbnRleHQodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aXZlSW5kZXggPT09IDApIHtcbiAgICAgICAgICB0aGlzLnByZXBhcmVIb3Jpem9udGFsQ29udGV4dChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja1RyYWNrRWwsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoJHstYWN0aXZlSW5kZXggKiB0aGlzLnVuaXRXaWR0aCArIF92ZWN0b3IueH1weCwgMCwgMClgKTtcbiAgICB9XG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSB2ZXJ0aWNhbFRyYW5zZm9ybShfZjogbnVtYmVyLCBfdDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgeyBmcm9tOiBmLCB0bzogdCB9ID0gdGhpcy5nZXRGcm9tVG9JbkJvdW5kYXJ5KF9mLCBfdCk7XG4gICAgY29uc3QgbmVlZFRvQWRqdXN0ID0gdGhpcy5sZW5ndGggPiAyICYmIF90ICE9PSB0O1xuXG4gICAgaWYgKG5lZWRUb0FkanVzdCkge1xuICAgICAgdGhpcy5wcmVwYXJlVmVydGljYWxDb250ZXh0KHQgPCBmKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja1RyYWNrRWwsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoMCwgJHstX3QgKiB0aGlzLnVuaXRIZWlnaHR9cHgsIDApYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja1RyYWNrRWwsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoMCwgJHstdCAqIHRoaXMudW5pdEhlaWdodH1weCwgMGApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaG9yaXpvbnRhbFRyYW5zZm9ybShfZjogbnVtYmVyLCBfdDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgeyBmcm9tOiBmLCB0bzogdCB9ID0gdGhpcy5nZXRGcm9tVG9JbkJvdW5kYXJ5KF9mLCBfdCk7XG4gICAgY29uc3QgbmVlZFRvQWRqdXN0ID0gdGhpcy5sZW5ndGggPiAyICYmIF90ICE9PSB0O1xuXG4gICAgaWYgKG5lZWRUb0FkanVzdCkge1xuICAgICAgdGhpcy5wcmVwYXJlSG9yaXpvbnRhbENvbnRleHQodCA8IGYpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNsaWNrVHJhY2tFbCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgkey1fdCAqIHRoaXMudW5pdFdpZHRofXB4LCAwLCAwKWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFja0VsLCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZTNkKCR7LXQgKiB0aGlzLnVuaXRXaWR0aH1weCwgMCwgMGApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcHJlcGFyZVZlcnRpY2FsQ29udGV4dChsYXN0VG9GaXJzdDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChsYXN0VG9GaXJzdCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmZpcnN0RWwsICd0b3AnLCBgJHt0aGlzLmxlbmd0aCAqIHRoaXMudW5pdEhlaWdodH1weGApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmxhc3RFbCwgJ3RvcCcsIG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZmlyc3RFbCwgJ3RvcCcsIG51bGwpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmxhc3RFbCwgJ3RvcCcsIGAkey10aGlzLnVuaXRIZWlnaHQgKiB0aGlzLmxlbmd0aH1weGApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcHJlcGFyZUhvcml6b250YWxDb250ZXh0KGxhc3RUb0ZpcnN0OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKGxhc3RUb0ZpcnN0KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZmlyc3RFbCwgJ2xlZnQnLCBgJHt0aGlzLmxlbmd0aCAqIHRoaXMudW5pdFdpZHRofXB4YCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMubGFzdEVsLCAnbGVmdCcsIG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZmlyc3RFbCwgJ2xlZnQnLCBudWxsKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5sYXN0RWwsICdsZWZ0JywgYCR7LXRoaXMudW5pdFdpZHRoICogdGhpcy5sZW5ndGh9cHhgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==