/**
 * @fileoverview added by tsickle
 * Generated from: scroll.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { reqAnimFrame } from 'ng-zorro-antd/core/polyfill';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * @param {?} t
 * @param {?} b
 * @param {?} c
 * @param {?} d
 * @return {?}
 */
function easeInOutCubic(t, b, c, d) {
    /** @type {?} */
    var cc = c - b;
    /** @type {?} */
    var tt = t / (d / 2);
    if (tt < 1) {
        return (cc / 2) * tt * tt * tt + b;
    }
    else {
        return (cc / 2) * ((tt -= 2) * tt * tt + 2) + b;
    }
}
var NzScrollService = /** @class */ (function () {
    function NzScrollService(doc) {
        this.doc = doc;
    }
    /** Set the position of the scroll bar of `el`. */
    /**
     * Set the position of the scroll bar of `el`.
     * @param {?} el
     * @param {?=} topValue
     * @return {?}
     */
    NzScrollService.prototype.setScrollTop = /**
     * Set the position of the scroll bar of `el`.
     * @param {?} el
     * @param {?=} topValue
     * @return {?}
     */
    function (el, topValue) {
        if (topValue === void 0) { topValue = 0; }
        if (el === window) {
            this.doc.body.scrollTop = topValue;
            (/** @type {?} */ (this.doc.documentElement)).scrollTop = topValue;
        }
        else {
            ((/** @type {?} */ (el))).scrollTop = topValue;
        }
    };
    /** Get position of `el` against window. */
    /**
     * Get position of `el` against window.
     * @param {?} el
     * @return {?}
     */
    NzScrollService.prototype.getOffset = /**
     * Get position of `el` against window.
     * @param {?} el
     * @return {?}
     */
    function (el) {
        /** @type {?} */
        var ret = {
            top: 0,
            left: 0
        };
        if (!el || !el.getClientRects().length) {
            return ret;
        }
        /** @type {?} */
        var rect = el.getBoundingClientRect();
        if (rect.width || rect.height) {
            /** @type {?} */
            var doc = (/** @type {?} */ (el.ownerDocument)).documentElement;
            ret.top = rect.top - (/** @type {?} */ (doc)).clientTop;
            ret.left = rect.left - (/** @type {?} */ (doc)).clientLeft;
        }
        else {
            ret.top = rect.top;
            ret.left = rect.left;
        }
        return ret;
    };
    /** Get the position of the scoll bar of `el`. */
    // TODO: remove '| Window' as the fallback already happens here
    /**
     * Get the position of the scoll bar of `el`.
     * @param {?=} el
     * @param {?=} top
     * @return {?}
     */
    // TODO: remove '| Window' as the fallback already happens here
    NzScrollService.prototype.getScroll = /**
     * Get the position of the scoll bar of `el`.
     * @param {?=} el
     * @param {?=} top
     * @return {?}
     */
    // TODO: remove '| Window' as the fallback already happens here
    function (el, top) {
        if (top === void 0) { top = true; }
        /** @type {?} */
        var target = el ? el : window;
        /** @type {?} */
        var prop = top ? 'pageYOffset' : 'pageXOffset';
        /** @type {?} */
        var method = top ? 'scrollTop' : 'scrollLeft';
        /** @type {?} */
        var isWindow = target === window;
        // @ts-ignore
        /** @type {?} */
        var ret = isWindow ? target[prop] : target[method];
        if (isWindow && typeof ret !== 'number') {
            ret = (/** @type {?} */ (this.doc.documentElement))[method];
        }
        return ret;
    };
    /**
     * Scroll `el` to some position with animation.
     *
     * @param containerEl container, `window` by default
     * @param targetTopValue Scroll to `top`, 0 by default
     * @param easing Transition curve, `easeInOutCubic` by default
     * @param callback callback invoked when transition is done
     */
    /**
     * Scroll `el` to some position with animation.
     *
     * @param {?} containerEl container, `window` by default
     * @param {?=} targetTopValue Scroll to `top`, 0 by default
     * @param {?=} easing Transition curve, `easeInOutCubic` by default
     * @param {?=} callback callback invoked when transition is done
     * @return {?}
     */
    NzScrollService.prototype.scrollTo = /**
     * Scroll `el` to some position with animation.
     *
     * @param {?} containerEl container, `window` by default
     * @param {?=} targetTopValue Scroll to `top`, 0 by default
     * @param {?=} easing Transition curve, `easeInOutCubic` by default
     * @param {?=} callback callback invoked when transition is done
     * @return {?}
     */
    function (containerEl, targetTopValue, easing, callback) {
        var _this = this;
        if (targetTopValue === void 0) { targetTopValue = 0; }
        /** @type {?} */
        var target = containerEl ? containerEl : window;
        /** @type {?} */
        var scrollTop = this.getScroll(target);
        /** @type {?} */
        var startTime = Date.now();
        /** @type {?} */
        var frameFunc = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var timestamp = Date.now();
            /** @type {?} */
            var time = timestamp - startTime;
            _this.setScrollTop(target, (easing || easeInOutCubic)(time, scrollTop, targetTopValue, 450));
            if (time < 450) {
                reqAnimFrame(frameFunc);
            }
            else {
                if (callback) {
                    callback();
                }
            }
        });
        reqAnimFrame(frameFunc);
    };
    NzScrollService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzScrollService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ NzScrollService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NzScrollService_Factory() { return new NzScrollService(i0.ɵɵinject(i1.DOCUMENT)); }, token: NzScrollService, providedIn: "root" });
    return NzScrollService;
}());
export { NzScrollService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzScrollService.prototype.doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlL3NlcnZpY2VzLyIsInNvdXJjZXMiOlsic2Nyb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7Ozs7QUFLM0QsU0FBUyxjQUFjLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUzs7UUFDMUQsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDOztRQUNaLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRTtRQUNWLE9BQU8sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ3BDO1NBQU07UUFDTCxPQUFPLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDakQ7QUFDSCxDQUFDO0FBRUQ7SUFNRSx5QkFBOEIsR0FBYztRQUMxQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDO0lBRUQsa0RBQWtEOzs7Ozs7O0lBQ2xELHNDQUFZOzs7Ozs7SUFBWixVQUFhLEVBQW9CLEVBQUUsUUFBb0I7UUFBcEIseUJBQUEsRUFBQSxZQUFvQjtRQUNyRCxJQUFJLEVBQUUsS0FBSyxNQUFNLEVBQUU7WUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMs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QyxJQUFJLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzVGLElBQUksSUFBSSxHQUFHLEdBQUcsRUFBRTtnQkFDZCxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDekI7aUJBQU07Z0JBQ0wsSUFBSSxRQUFRLEVBQUU7b0JBQ1osUUFBUSxFQUFFLENBQUM7aUJBQ1o7YUFDRjtRQUNILENBQUMsQ0FBQTtRQUNELFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQixDQUFDOztnQkFuRkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnREFJYyxNQUFNLFNBQUMsUUFBUTs7OzBCQTVCOUI7Q0EwR0MsQUFwRkQsSUFvRkM7U0FqRlksZUFBZTs7Ozs7O0lBQzFCLDhCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcmVxQW5pbUZyYW1lIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3BvbHlmaWxsJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmV4cG9ydCB0eXBlIEVhc3lpbmdGbiA9ICh0OiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIpID0+IG51bWJlcjtcblxuZnVuY3Rpb24gZWFzZUluT3V0Q3ViaWModDogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgY2MgPSBjIC0gYjtcbiAgbGV0IHR0ID0gdCAvIChkIC8gMik7XG4gIGlmICh0dCA8IDEpIHtcbiAgICByZXR1cm4gKGNjIC8gMikgKiB0dCAqIHR0ICogdHQgKyBiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoY2MgLyAyKSAqICgodHQgLT0gMikgKiB0dCAqIHR0ICsgMikgKyBiO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE56U2Nyb2xsU2VydmljZSB7XG4gIHByaXZhdGUgZG9jOiBEb2N1bWVudDtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBkb2M6IE56U2FmZUFueSkge1xuICAgIHRoaXMuZG9jID0gZG9jO1xuICB9XG5cbiAgLyoqIFNldCB0aGUgcG9zaXRpb24gb2YgdGhlIHNjcm9sbCBiYXIgb2YgYGVsYC4gKi9cbiAgc2V0U2Nyb2xsVG9wKGVsOiBFbGVtZW50IHwgV2luZG93LCB0b3BWYWx1ZTogbnVtYmVyID0gMCk6IHZvaWQge1xuICAgIGlmIChlbCA9PT0gd2luZG93KSB7XG4gICAgICB0aGlzLmRvYy5ib2R5LnNjcm9sbFRvcCA9IHRvcFZhbHVlO1xuICAgICAgdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50IS5zY3JvbGxUb3AgPSB0b3BWYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgKGVsIGFzIEVsZW1lbnQpLnNjcm9sbFRvcCA9IHRvcFZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBHZXQgcG9zaXRpb24gb2YgYGVsYCBhZ2FpbnN0IHdpbmRvdy4gKi9cbiAgZ2V0T2Zmc2V0KGVsOiBFbGVtZW50KTogeyB0b3A6IG51bWJlcjsgbGVmdDogbnVtYmVyIH0ge1xuICAgIGNvbnN0IHJldCA9IHtcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDBcbiAgICB9O1xuICAgIGlmICghZWwgfHwgIWVsLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAocmVjdC53aWR0aCB8fCByZWN0LmhlaWdodCkge1xuICAgICAgY29uc3QgZG9jID0gZWwub3duZXJEb2N1bWVudCEuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgcmV0LnRvcCA9IHJlY3QudG9wIC0gZG9jIS5jbGllbnRUb3A7XG4gICAgICByZXQubGVmdCA9IHJlY3QubGVmdCAtIGRvYyEuY2xpZW50TGVmdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0LnRvcCA9IHJlY3QudG9wO1xuICAgICAgcmV0LmxlZnQgPSByZWN0LmxlZnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKiBHZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBzY29sbCBiYXIgb2YgYGVsYC4gKi9cbiAgLy8gVE9ETzogcmVtb3ZlICd8IFdpbmRvdycgYXMgdGhlIGZhbGxiYWNrIGFscmVhZHkgaGFwcGVucyBoZXJlXG4gIGdldFNjcm9sbChlbD86IEVsZW1lbnQgfCBXaW5kb3csIHRvcDogYm9vbGVhbiA9IHRydWUpOiBudW1iZXIge1xuICAgIGNvbnN0IHRhcmdldCA9IGVsID8gZWwgOiB3aW5kb3c7XG4gICAgY29uc3QgcHJvcCA9IHRvcCA/ICdwYWdlWU9mZnNldCcgOiAncGFnZVhPZmZzZXQnO1xuICAgIGNvbnN0IG1ldGhvZCA9IHRvcCA/ICdzY3JvbGxUb3AnIDogJ3Njcm9sbExlZnQnO1xuICAgIGNvbnN0IGlzV2luZG93ID0gdGFyZ2V0ID09PSB3aW5kb3c7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGxldCByZXQgPSBpc1dpbmRvdyA/IHRhcmdldFtwcm9wXSA6IHRhcmdldFttZXRob2RdO1xuICAgIGlmIChpc1dpbmRvdyAmJiB0eXBlb2YgcmV0ICE9PSAnbnVtYmVyJykge1xuICAgICAgcmV0ID0gdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50IVttZXRob2RdO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIFNjcm9sbCBgZWxgIHRvIHNvbWUgcG9zaXRpb24gd2l0aCBhbmltYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBjb250YWluZXJFbCBjb250YWluZXIsIGB3aW5kb3dgIGJ5IGRlZmF1bHRcbiAgICogQHBhcmFtIHRhcmdldFRvcFZhbHVlIFNjcm9sbCB0byBgdG9wYCwgMCBieSBkZWZhdWx0XG4gICAqIEBwYXJhbSBlYXNpbmcgVHJhbnNpdGlvbiBjdXJ2ZSwgYGVhc2VJbk91dEN1YmljYCBieSBkZWZhdWx0XG4gICAqIEBwYXJhbSBjYWxsYmFjayBjYWxsYmFjayBpbnZva2VkIHdoZW4gdHJhbnNpdGlvbiBpcyBkb25lXG4gICAqL1xuICBzY3JvbGxUbyhjb250YWluZXJFbDogRWxlbWVudCB8IFdpbmRvdywgdGFyZ2V0VG9wVmFsdWU6IG51bWJlciA9IDAsIGVhc2luZz86IEVhc3lpbmdGbiwgY2FsbGJhY2s/OiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gY29udGFpbmVyRWwgPyBjb250YWluZXJFbCA6IHdpbmRvdztcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbCh0YXJnZXQpO1xuICAgIGNvbnN0IHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgY29uc3QgZnJhbWVGdW5jID0gKCkgPT4ge1xuICAgICAgY29uc3QgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICAgIGNvbnN0IHRpbWUgPSB0aW1lc3RhbXAgLSBzdGFydFRpbWU7XG4gICAgICB0aGlzLnNldFNjcm9sbFRvcCh0YXJnZXQsIChlYXNpbmcgfHwgZWFzZUluT3V0Q3ViaWMpKHRpbWUsIHNjcm9sbFRvcCwgdGFyZ2V0VG9wVmFsdWUsIDQ1MCkpO1xuICAgICAgaWYgKHRpbWUgPCA0NTApIHtcbiAgICAgICAgcmVxQW5pbUZyYW1lKGZyYW1lRnVuYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICByZXFBbmltRnJhbWUoZnJhbWVGdW5jKTtcbiAgfVxufVxuIl19