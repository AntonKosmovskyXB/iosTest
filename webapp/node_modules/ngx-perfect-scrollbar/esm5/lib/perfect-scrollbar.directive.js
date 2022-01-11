import { __decorate, __param } from "tslib";
import PerfectScrollbar from 'perfect-scrollbar';
import ResizeObserver from 'resize-observer-polyfill';
import { Subject, fromEvent } from 'rxjs';
import { auditTime, takeUntil } from 'rxjs/operators';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgZone, Inject, Optional, ElementRef, Directive, OnInit, DoCheck, OnChanges, OnDestroy, Input, Output, EventEmitter, SimpleChanges, KeyValueDiffer, KeyValueDiffers } from '@angular/core';
import { Geometry, Position } from './perfect-scrollbar.interfaces';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfig, PerfectScrollbarEvents } from './perfect-scrollbar.interfaces';
import * as ɵngcc0 from '@angular/core';
var PerfectScrollbarDirective = /** @class */ (function () {
    function PerfectScrollbarDirective(zone, differs, elementRef, platformId, defaults) {
        this.zone = zone;
        this.differs = differs;
        this.elementRef = elementRef;
        this.platformId = platformId;
        this.defaults = defaults;
        this.instance = null;
        this.ro = null;
        this.timeout = null;
        this.animation = null;
        this.configDiff = null;
        this.ngDestroy = new Subject();
        this.disabled = false;
        this.psScrollY = new EventEmitter();
        this.psScrollX = new EventEmitter();
        this.psScrollUp = new EventEmitter();
        this.psScrollDown = new EventEmitter();
        this.psScrollLeft = new EventEmitter();
        this.psScrollRight = new EventEmitter();
        this.psYReachEnd = new EventEmitter();
        this.psYReachStart = new EventEmitter();
        this.psXReachEnd = new EventEmitter();
        this.psXReachStart = new EventEmitter();
    }
    PerfectScrollbarDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.disabled && isPlatformBrowser(this.platformId)) {
            var config_1 = new PerfectScrollbarConfig(this.defaults);
            config_1.assign(this.config); // Custom configuration
            this.zone.runOutsideAngular(function () {
                _this.instance = new PerfectScrollbar(_this.elementRef.nativeElement, config_1);
            });
            if (!this.configDiff) {
                this.configDiff = this.differs.find(this.config || {}).create();
                this.configDiff.diff(this.config || {});
            }
            this.zone.runOutsideAngular(function () {
                _this.ro = new ResizeObserver(function () {
                    _this.update();
                });
                if (_this.elementRef.nativeElement.children[0]) {
                    _this.ro.observe(_this.elementRef.nativeElement.children[0]);
                }
                _this.ro.observe(_this.elementRef.nativeElement);
            });
            this.zone.runOutsideAngular(function () {
                PerfectScrollbarEvents.forEach(function (eventName) {
                    var eventType = eventName.replace(/([A-Z])/g, function (c) { return "-" + c.toLowerCase(); });
                    fromEvent(_this.elementRef.nativeElement, eventType)
                        .pipe(auditTime(20), takeUntil(_this.ngDestroy))
                        .subscribe(function (event) {
                        _this[eventName].emit(event);
                    });
                });
            });
        }
    };
    PerfectScrollbarDirective.prototype.ngOnDestroy = function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            this.ngDestroy.next();
            this.ngDestroy.complete();
            if (this.ro) {
                this.ro.disconnect();
            }
            if (this.timeout && typeof window !== 'undefined') {
                window.clearTimeout(this.timeout);
            }
            this.zone.runOutsideAngular(function () {
                if (_this.instance) {
                    _this.instance.destroy();
                }
            });
            this.instance = null;
        }
    };
    PerfectScrollbarDirective.prototype.ngDoCheck = function () {
        if (!this.disabled && this.configDiff && isPlatformBrowser(this.platformId)) {
            var changes = this.configDiff.diff(this.config || {});
            if (changes) {
                this.ngOnDestroy();
                this.ngOnInit();
            }
        }
    };
    PerfectScrollbarDirective.prototype.ngOnChanges = function (changes) {
        if (changes['disabled'] && !changes['disabled'].isFirstChange() && isPlatformBrowser(this.platformId)) {
            if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
                if (changes['disabled'].currentValue === true) {
                    this.ngOnDestroy();
                }
                else if (changes['disabled'].currentValue === false) {
                    this.ngOnInit();
                }
            }
        }
    };
    PerfectScrollbarDirective.prototype.ps = function () {
        return this.instance;
    };
    PerfectScrollbarDirective.prototype.update = function () {
        var _this = this;
        if (typeof window !== 'undefined') {
            if (this.timeout) {
                window.clearTimeout(this.timeout);
            }
            this.timeout = window.setTimeout(function () {
                if (!_this.disabled && _this.configDiff) {
                    try {
                        _this.zone.runOutsideAngular(function () {
                            if (_this.instance) {
                                _this.instance.update();
                            }
                        });
                    }
                    catch (error) {
                        // Update can be finished after destroy so catch errors
                    }
                }
            }, 0);
        }
    };
    PerfectScrollbarDirective.prototype.geometry = function (prefix) {
        if (prefix === void 0) { prefix = 'scroll'; }
        return new Geometry(this.elementRef.nativeElement[prefix + 'Left'], this.elementRef.nativeElement[prefix + 'Top'], this.elementRef.nativeElement[prefix + 'Width'], this.elementRef.nativeElement[prefix + 'Height']);
    };
    PerfectScrollbarDirective.prototype.position = function (absolute) {
        if (absolute === void 0) { absolute = false; }
        if (!absolute && this.instance) {
            return new Position(this.instance.reach.x || 0, this.instance.reach.y || 0);
        }
        else {
            return new Position(this.elementRef.nativeElement.scrollLeft, this.elementRef.nativeElement.scrollTop);
        }
    };
    PerfectScrollbarDirective.prototype.scrollable = function (direction) {
        if (direction === void 0) { direction = 'any'; }
        var element = this.elementRef.nativeElement;
        if (direction === 'any') {
            return element.classList.contains('ps--active-x') ||
                element.classList.contains('ps--active-y');
        }
        else if (direction === 'both') {
            return element.classList.contains('ps--active-x') &&
                element.classList.contains('ps--active-y');
        }
        else {
            return element.classList.contains('ps--active-' + direction);
        }
    };
    PerfectScrollbarDirective.prototype.scrollTo = function (x, y, speed) {
        if (!this.disabled) {
            if (y == null && speed == null) {
                this.animateScrolling('scrollTop', x, speed);
            }
            else {
                if (x != null) {
                    this.animateScrolling('scrollLeft', x, speed);
                }
                if (y != null) {
                    this.animateScrolling('scrollTop', y, speed);
                }
            }
        }
    };
    PerfectScrollbarDirective.prototype.scrollToX = function (x, speed) {
        this.animateScrolling('scrollLeft', x, speed);
    };
    PerfectScrollbarDirective.prototype.scrollToY = function (y, speed) {
        this.animateScrolling('scrollTop', y, speed);
    };
    PerfectScrollbarDirective.prototype.scrollToTop = function (offset, speed) {
        this.animateScrolling('scrollTop', (offset || 0), speed);
    };
    PerfectScrollbarDirective.prototype.scrollToLeft = function (offset, speed) {
        this.animateScrolling('scrollLeft', (offset || 0), speed);
    };
    PerfectScrollbarDirective.prototype.scrollToRight = function (offset, speed) {
        var left = this.elementRef.nativeElement.scrollWidth -
            this.elementRef.nativeElement.clientWidth;
        this.animateScrolling('scrollLeft', left - (offset || 0), speed);
    };
    PerfectScrollbarDirective.prototype.scrollToBottom = function (offset, speed) {
        var top = this.elementRef.nativeElement.scrollHeight -
            this.elementRef.nativeElement.clientHeight;
        this.animateScrolling('scrollTop', top - (offset || 0), speed);
    };
    PerfectScrollbarDirective.prototype.scrollToElement = function (qs, offset, speed) {
        var element = this.elementRef.nativeElement.querySelector(qs);
        if (element) {
            var elementPos = element.getBoundingClientRect();
            var scrollerPos = this.elementRef.nativeElement.getBoundingClientRect();
            if (this.elementRef.nativeElement.classList.contains('ps--active-x')) {
                var currentPos = this.elementRef.nativeElement['scrollLeft'];
                var position = elementPos.left - scrollerPos.left + currentPos;
                this.animateScrolling('scrollLeft', position + (offset || 0), speed);
            }
            if (this.elementRef.nativeElement.classList.contains('ps--active-y')) {
                var currentPos = this.elementRef.nativeElement['scrollTop'];
                var position = elementPos.top - scrollerPos.top + currentPos;
                this.animateScrolling('scrollTop', position + (offset || 0), speed);
            }
        }
    };
    PerfectScrollbarDirective.prototype.animateScrolling = function (target, value, speed) {
        var _this = this;
        if (this.animation) {
            window.cancelAnimationFrame(this.animation);
            this.animation = null;
        }
        if (!speed || typeof window === 'undefined') {
            this.elementRef.nativeElement[target] = value;
        }
        else if (value !== this.elementRef.nativeElement[target]) {
            var newValue_1 = 0;
            var scrollCount_1 = 0;
            var oldTimestamp_1 = performance.now();
            var oldValue_1 = this.elementRef.nativeElement[target];
            var cosParameter_1 = (oldValue_1 - value) / 2;
            var step_1 = function (newTimestamp) {
                scrollCount_1 += Math.PI / (speed / (newTimestamp - oldTimestamp_1));
                newValue_1 = Math.round(value + cosParameter_1 + cosParameter_1 * Math.cos(scrollCount_1));
                // Only continue animation if scroll position has not changed
                if (_this.elementRef.nativeElement[target] === oldValue_1) {
                    if (scrollCount_1 >= Math.PI) {
                        _this.animateScrolling(target, value, 0);
                    }
                    else {
                        _this.elementRef.nativeElement[target] = newValue_1;
                        // On a zoomed out page the resulting offset may differ
                        oldValue_1 = _this.elementRef.nativeElement[target];
                        oldTimestamp_1 = newTimestamp;
                        _this.animation = window.requestAnimationFrame(step_1);
                    }
                }
            };
            window.requestAnimationFrame(step_1);
        }
    };
    PerfectScrollbarDirective.ctorParameters = function () { return [
        { type: NgZone },
        { type: KeyValueDiffers },
        { type: ElementRef },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [PERFECT_SCROLLBAR_CONFIG,] }] }
    ]; };
    __decorate([
        Input()
    ], PerfectScrollbarDirective.prototype, "disabled", void 0);
    __decorate([
        Input('perfectScrollbar')
    ], PerfectScrollbarDirective.prototype, "config", void 0);
    __decorate([
        Output()
    ], PerfectScrollbarDirective.prototype, "psScrollY", void 0);
    __decorate([
        Output()
    ], PerfectScrollbarDirective.prototype, "psScrollX", void 0);
    __decorate([
        Output()
    ], PerfectScrollbarDirective.prototype, "psScrollUp", void 0);
    __decorate([
        Output()
    ], PerfectScrollbarDirective.prototype, "psScrollDown", void 0);
    __decorate([
        Output()
    ], PerfectScrollbarDirective.prototype, "psScrollLeft", void 0);
    __decorate([
        Output()
    ], PerfectScrollbarDirective.prototype, "psScrollRight", void 0);
    __decorate([
        Output()
    ], PerfectScrollbarDirective.prototype, "psYReachEnd", void 0);
    __decorate([
        Output()
    ], PerfectScrollbarDirective.prototype, "psYReachStart", void 0);
    __decorate([
        Output()
    ], PerfectScrollbarDirective.prototype, "psXReachEnd", void 0);
    __decorate([
        Output()
    ], PerfectScrollbarDirective.prototype, "psXReachStart", void 0);
    PerfectScrollbarDirective = __decorate([ __param(3, Inject(PLATFORM_ID)),
        __param(4, Optional()), __param(4, Inject(PERFECT_SCROLLBAR_CONFIG))
    ], PerfectScrollbarDirective);
PerfectScrollbarDirective.ɵfac = function PerfectScrollbarDirective_Factory(t) { return new (t || PerfectScrollbarDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.KeyValueDiffers), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(PLATFORM_ID), ɵngcc0.ɵɵdirectiveInject(PERFECT_SCROLLBAR_CONFIG, 8)); };
PerfectScrollbarDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: PerfectScrollbarDirective, selectors: [["", "perfectScrollbar", ""]], inputs: { disabled: "disabled", config: ["perfectScrollbar", "config"] }, outputs: { psScrollY: "psScrollY", psScrollX: "psScrollX", psScrollUp: "psScrollUp", psScrollDown: "psScrollDown", psScrollLeft: "psScrollLeft", psScrollRight: "psScrollRight", psYReachEnd: "psYReachEnd", psYReachStart: "psYReachStart", psXReachEnd: "psXReachEnd", psXReachStart: "psXReachStart" }, exportAs: ["ngxPerfectScrollbar"], features: [ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PerfectScrollbarDirective, [{
        type: Directive,
        args: [{
                selector: '[perfectScrollbar]',
                exportAs: 'ngxPerfectScrollbar'
            }]
    }], function () { return [{ type: ɵngcc0.NgZone }, { type: ɵngcc0.KeyValueDiffers }, { type: ɵngcc0.ElementRef }, { type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [PERFECT_SCROLLBAR_CONFIG]
            }] }]; }, { disabled: [{
            type: Input
        }], psScrollY: [{
            type: Output
        }], psScrollX: [{
            type: Output
        }], psScrollUp: [{
            type: Output
        }], psScrollDown: [{
            type: Output
        }], psScrollLeft: [{
            type: Output
        }], psScrollRight: [{
            type: Output
        }], psYReachEnd: [{
            type: Output
        }], psYReachStart: [{
            type: Output
        }], psXReachEnd: [{
            type: Output
        }], psXReachStart: [{
            type: Output
        }], config: [{
            type: Input,
            args: ['perfectScrollbar']
        }] }); })();
    return PerfectScrollbarDirective;
}());
export { PerfectScrollbarDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyZmVjdC1zY3JvbGxiYXIuZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyJuZzovbmd4LXBlcmZlY3Qtc2Nyb2xsYmFyL2xpYi9wZXJmZWN0LXNjcm9sbGJhci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sZ0JBQWdCLE1BQU0sbUJBQW1CLENBQUM7QUFFakQsT0FBTyxjQUFjLE1BQU0sMEJBQTBCLENBQUM7QUFFdEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUN0RCxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQ2xFLGFBQWEsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFcEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLHNCQUFzQixFQUNoQyxzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQU14RjtBQUE2RCxJQTZCM0QsbUNBQW9CLElBQVksRUFBVSxPQUF3QixFQUN6RCxVQUFzQixFQUErQixVQUFrQixFQUN4QixRQUF5QztBQUFJLFFBRmpGLFNBQUksR0FBSixJQUFJLENBQVE7QUFBQyxRQUFTLFlBQU8sR0FBUCxPQUFPLENBQWlCO0FBQUMsUUFDMUQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtBQUFDLFFBQThCLGVB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QU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO09BaENoRCxDQUFDLFJBZ0NnRCxPQS9CckMseUJBQXlCLENBK1NyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNEO0FBQUMsSUFERCxnQ0FBQztBQUNBLENBREEsQUEvU0QsSUErU0M7QUFDRCxTQWhUYSx5QkFBeUI7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQZXJmZWN0U2Nyb2xsYmFyIGZyb20gJ3BlcmZlY3Qtc2Nyb2xsYmFyJztcblxuaW1wb3J0IFJlc2l6ZU9ic2VydmVyIGZyb20gJ3Jlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbCc7XG5cbmltcG9ydCB7IFN1YmplY3QsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgYXVkaXRUaW1lLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ1pvbmUsIEluamVjdCwgT3B0aW9uYWwsIEVsZW1lbnRSZWYsIERpcmVjdGl2ZSxcbiAgT25Jbml0LCBEb0NoZWNrLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLFxuICBTaW1wbGVDaGFuZ2VzLCBLZXlWYWx1ZURpZmZlciwgS2V5VmFsdWVEaWZmZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdlb21ldHJ5LCBQb3NpdGlvbiB9IGZyb20gJy4vcGVyZmVjdC1zY3JvbGxiYXIuaW50ZXJmYWNlcyc7XG5cbmltcG9ydCB7IFBFUkZFQ1RfU0NST0xMQkFSX0NPTkZJRywgUGVyZmVjdFNjcm9sbGJhckNvbmZpZywgUGVyZmVjdFNjcm9sbGJhckNvbmZpZ0ludGVyZmFjZSxcbiAgUGVyZmVjdFNjcm9sbGJhckV2ZW50LCBQZXJmZWN0U2Nyb2xsYmFyRXZlbnRzIH0gZnJvbSAnLi9wZXJmZWN0LXNjcm9sbGJhci5pbnRlcmZhY2VzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3BlcmZlY3RTY3JvbGxiYXJdJyxcbiAgZXhwb3J0QXM6ICduZ3hQZXJmZWN0U2Nyb2xsYmFyJ1xufSlcbmV4cG9ydCBjbGFzcyBQZXJmZWN0U2Nyb2xsYmFyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIERvQ2hlY2ssIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgaW5zdGFuY2U6IFBlcmZlY3RTY3JvbGxiYXIgfCBudWxsID0gbnVsbDtcblxuICBwcml2YXRlIHJvOiBSZXNpemVPYnNlcnZlciB8IG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgdGltZW91dDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgYW5pbWF0aW9uOiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuICBwcml2YXRlIGNvbmZpZ0RpZmY6IEtleVZhbHVlRGlmZmVyPHN0cmluZywgYW55PiB8IG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgbmdEZXN0cm95OiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgncGVyZmVjdFNjcm9sbGJhcicpIGNvbmZpZz86IFBlcmZlY3RTY3JvbGxiYXJDb25maWdJbnRlcmZhY2U7XG5cbiAgQE91dHB1dCgpIHBzU2Nyb2xsWTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHBzU2Nyb2xsWDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAT3V0cHV0KCkgcHNTY3JvbGxVcDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHBzU2Nyb2xsRG93bjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHBzU2Nyb2xsTGVmdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHBzU2Nyb2xsUmlnaHQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQE91dHB1dCgpIHBzWVJlYWNoRW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcHNZUmVhY2hTdGFydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHBzWFJlYWNoRW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcHNYUmVhY2hTdGFydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHJpdmF0ZSBkaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMsXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoUEVSRkVDVF9TQ1JPTExCQVJfQ09ORklHKSBwcml2YXRlIGRlZmF1bHRzOiBQZXJmZWN0U2Nyb2xsYmFyQ29uZmlnSW50ZXJmYWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICBjb25zdCBjb25maWcgPSBuZXcgUGVyZmVjdFNjcm9sbGJhckNvbmZpZyh0aGlzLmRlZmF1bHRzKTtcblxuICAgICAgY29uZmlnLmFzc2lnbih0aGlzLmNvbmZpZyk7IC8vIEN1c3RvbSBjb25maWd1cmF0aW9uXG5cbiAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY29uZmlnKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXRoaXMuY29uZmlnRGlmZikge1xuICAgICAgICB0aGlzLmNvbmZpZ0RpZmYgPSB0aGlzLmRpZmZlcnMuZmluZCh0aGlzLmNvbmZpZyB8fCB7fSkuY3JlYXRlKCk7XG5cbiAgICAgICAgdGhpcy5jb25maWdEaWZmLmRpZmYodGhpcy5jb25maWcgfHwge30pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICB0aGlzLnJvID0gbmV3IFJlc2l6ZU9ic2VydmVyKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0pIHtcbiAgICAgICAgICB0aGlzLnJvLm9ic2VydmUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yby5vYnNlcnZlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICBQZXJmZWN0U2Nyb2xsYmFyRXZlbnRzLmZvckVhY2goKGV2ZW50TmFtZTogUGVyZmVjdFNjcm9sbGJhckV2ZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgZXZlbnRUeXBlID0gZXZlbnROYW1lLnJlcGxhY2UoLyhbQS1aXSkvZywgKGMpID0+IGAtJHtjLnRvTG93ZXJDYXNlKCl9YCk7XG5cbiAgICAgICAgICBmcm9tRXZlbnQ8RXZlbnQ+KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBldmVudFR5cGUpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgYXVkaXRUaW1lKDIwKSxcbiAgICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMubmdEZXN0cm95KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXNbZXZlbnROYW1lXS5lbWl0KGV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLm5nRGVzdHJveS5uZXh0KCk7XG4gICAgICB0aGlzLm5nRGVzdHJveS5jb21wbGV0ZSgpO1xuXG4gICAgICBpZiAodGhpcy5ybykge1xuICAgICAgICB0aGlzLnJvLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMudGltZW91dCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmluc3RhbmNlID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIHRoaXMuY29uZmlnRGlmZiAmJiBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICBjb25zdCBjaGFuZ2VzID0gdGhpcy5jb25maWdEaWZmLmRpZmYodGhpcy5jb25maWcgfHwge30pO1xuXG4gICAgICBpZiAoY2hhbmdlcykge1xuICAgICAgICB0aGlzLm5nT25EZXN0cm95KCk7XG5cbiAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlc1snZGlzYWJsZWQnXSAmJiAhY2hhbmdlc1snZGlzYWJsZWQnXS5pc0ZpcnN0Q2hhbmdlKCkgJiYgaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgaWYgKGNoYW5nZXNbJ2Rpc2FibGVkJ10uY3VycmVudFZhbHVlICE9PSBjaGFuZ2VzWydkaXNhYmxlZCddLnByZXZpb3VzVmFsdWUpIHtcbiAgICAgICAgaWYgKGNoYW5nZXNbJ2Rpc2FibGVkJ10uY3VycmVudFZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICB0aGlzLm5nT25EZXN0cm95KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhbmdlc1snZGlzYWJsZWQnXS5jdXJyZW50VmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHBzKCk6IFBlcmZlY3RTY3JvbGxiYXIgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAodGhpcy50aW1lb3V0KSB7XG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy50aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgdGhpcy5jb25maWdEaWZmKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS51cGRhdGUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBjYW4gYmUgZmluaXNoZWQgYWZ0ZXIgZGVzdHJveSBzbyBjYXRjaCBlcnJvcnNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZW9tZXRyeShwcmVmaXg6IHN0cmluZyA9ICdzY3JvbGwnKTogR2VvbWV0cnkge1xuICAgIHJldHVybiBuZXcgR2VvbWV0cnkoXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFtwcmVmaXggKyAnTGVmdCddLFxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRbcHJlZml4ICsgJ1RvcCddLFxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRbcHJlZml4ICsgJ1dpZHRoJ10sXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFtwcmVmaXggKyAnSGVpZ2h0J11cbiAgICApO1xuICB9XG5cbiAgcHVibGljIHBvc2l0aW9uKGFic29sdXRlOiBib29sZWFuID0gZmFsc2UpOiBQb3NpdGlvbiB7XG4gICAgaWYgKCFhYnNvbHV0ZSAmJiB0aGlzLmluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gbmV3IFBvc2l0aW9uKFxuICAgICAgICB0aGlzLmluc3RhbmNlLnJlYWNoLnggfHwgMCxcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5yZWFjaC55IHx8IDBcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgUG9zaXRpb24oXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQsXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2Nyb2xsYWJsZShkaXJlY3Rpb246IHN0cmluZyA9ICdhbnknKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2FueScpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncHMtLWFjdGl2ZS14JykgfHxcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3BzLS1hY3RpdmUteScpO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnYm90aCcpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncHMtLWFjdGl2ZS14JykgJiZcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3BzLS1hY3RpdmUteScpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3BzLS1hY3RpdmUtJyArIGRpcmVjdGlvbik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNjcm9sbFRvKHg6IG51bWJlciwgeT86IG51bWJlciwgc3BlZWQ/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGlmICh5ID09IG51bGwgJiYgc3BlZWQgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmFuaW1hdGVTY3JvbGxpbmcoJ3Njcm9sbFRvcCcsIHgsIHNwZWVkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh4ICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmFuaW1hdGVTY3JvbGxpbmcoJ3Njcm9sbExlZnQnLCB4LCBzcGVlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoeSAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5hbmltYXRlU2Nyb2xsaW5nKCdzY3JvbGxUb3AnLCB5LCBzcGVlZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2Nyb2xsVG9YKHg6IG51bWJlciwgc3BlZWQ/OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmFuaW1hdGVTY3JvbGxpbmcoJ3Njcm9sbExlZnQnLCB4LCBzcGVlZCk7XG4gIH1cblxuICBwdWJsaWMgc2Nyb2xsVG9ZKHk6IG51bWJlciwgc3BlZWQ/OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmFuaW1hdGVTY3JvbGxpbmcoJ3Njcm9sbFRvcCcsIHksIHNwZWVkKTtcbiAgfVxuXG4gIHB1YmxpYyBzY3JvbGxUb1RvcChvZmZzZXQ/OiBudW1iZXIsIHNwZWVkPzogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hbmltYXRlU2Nyb2xsaW5nKCdzY3JvbGxUb3AnLCAob2Zmc2V0IHx8IDApLCBzcGVlZCk7XG4gIH1cblxuICBwdWJsaWMgc2Nyb2xsVG9MZWZ0KG9mZnNldD86IG51bWJlciwgc3BlZWQ/OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmFuaW1hdGVTY3JvbGxpbmcoJ3Njcm9sbExlZnQnLCAob2Zmc2V0IHx8IDApLCBzcGVlZCk7XG4gIH1cblxuICBwdWJsaWMgc2Nyb2xsVG9SaWdodChvZmZzZXQ/OiBudW1iZXIsIHNwZWVkPzogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgbGVmdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRoIC1cbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xuXG4gICAgdGhpcy5hbmltYXRlU2Nyb2xsaW5nKCdzY3JvbGxMZWZ0JywgbGVmdCAtIChvZmZzZXQgfHwgMCksIHNwZWVkKTtcbiAgfVxuXG4gIHB1YmxpYyBzY3JvbGxUb0JvdHRvbShvZmZzZXQ/OiBudW1iZXIsIHNwZWVkPzogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgdG9wID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC1cbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIHRoaXMuYW5pbWF0ZVNjcm9sbGluZygnc2Nyb2xsVG9wJywgdG9wIC0gKG9mZnNldCB8fCAwKSwgc3BlZWQpO1xuICB9XG5cbiAgcHVibGljIHNjcm9sbFRvRWxlbWVudChxczogc3RyaW5nLCBvZmZzZXQ/OiBudW1iZXIsIHNwZWVkPzogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IocXMpO1xuXG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRQb3MgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICBjb25zdCBzY3JvbGxlclBvcyA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICBpZiAodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcy0tYWN0aXZlLXgnKSkge1xuICAgICAgICBjb25zdCBjdXJyZW50UG9zID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRbJ3Njcm9sbExlZnQnXTtcblxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGVsZW1lbnRQb3MubGVmdCAtIHNjcm9sbGVyUG9zLmxlZnQgKyBjdXJyZW50UG9zO1xuXG4gICAgICAgIHRoaXMuYW5pbWF0ZVNjcm9sbGluZygnc2Nyb2xsTGVmdCcsIHBvc2l0aW9uICsgKG9mZnNldCB8fCAwKSwgc3BlZWQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcy0tYWN0aXZlLXknKSkge1xuICAgICAgICBjb25zdCBjdXJyZW50UG9zID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRbJ3Njcm9sbFRvcCddO1xuXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gZWxlbWVudFBvcy50b3AgLSBzY3JvbGxlclBvcy50b3AgKyBjdXJyZW50UG9zO1xuXG4gICAgICAgIHRoaXMuYW5pbWF0ZVNjcm9sbGluZygnc2Nyb2xsVG9wJywgcG9zaXRpb24gKyAob2Zmc2V0IHx8IDApLCBzcGVlZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhbmltYXRlU2Nyb2xsaW5nKHRhcmdldDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyLCBzcGVlZD86IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uKTtcblxuICAgICAgdGhpcy5hbmltYXRpb24gPSBudWxsO1xuICAgIH1cblxuICAgIGlmICghc3BlZWQgfHwgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50W3RhcmdldF0gPSB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlICE9PSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFt0YXJnZXRdKSB7XG4gICAgICBsZXQgbmV3VmFsdWUgPSAwO1xuICAgICAgbGV0IHNjcm9sbENvdW50ID0gMDtcblxuICAgICAgbGV0IG9sZFRpbWVzdGFtcCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgbGV0IG9sZFZhbHVlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRbdGFyZ2V0XTtcblxuICAgICAgY29uc3QgY29zUGFyYW1ldGVyID0gKG9sZFZhbHVlIC0gdmFsdWUpIC8gMjtcblxuICAgICAgY29uc3Qgc3RlcCA9IChuZXdUaW1lc3RhbXA6IG51bWJlcikgPT4ge1xuICAgICAgICBzY3JvbGxDb3VudCArPSBNYXRoLlBJIC8gKHNwZWVkIC8gKG5ld1RpbWVzdGFtcCAtIG9sZFRpbWVzdGFtcCkpO1xuXG4gICAgICAgIG5ld1ZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSArIGNvc1BhcmFtZXRlciArIGNvc1BhcmFtZXRlciAqIE1hdGguY29zKHNjcm9sbENvdW50KSk7XG5cbiAgICAgICAgLy8gT25seSBjb250aW51ZSBhbmltYXRpb24gaWYgc2Nyb2xsIHBvc2l0aW9uIGhhcyBub3QgY2hhbmdlZFxuICAgICAgICBpZiAodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRbdGFyZ2V0XSA9PT0gb2xkVmFsdWUpIHtcbiAgICAgICAgICBpZiAoc2Nyb2xsQ291bnQgPj0gTWF0aC5QSSkge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlU2Nyb2xsaW5nKHRhcmdldCwgdmFsdWUsIDApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFt0YXJnZXRdID0gbmV3VmFsdWU7XG5cbiAgICAgICAgICAgIC8vIE9uIGEgem9vbWVkIG91dCBwYWdlIHRoZSByZXN1bHRpbmcgb2Zmc2V0IG1heSBkaWZmZXJcbiAgICAgICAgICAgIG9sZFZhbHVlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRbdGFyZ2V0XTtcblxuICAgICAgICAgICAgb2xkVGltZXN0YW1wID0gbmV3VGltZXN0YW1wO1xuXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgIH1cbiAgfVxufVxuIl19