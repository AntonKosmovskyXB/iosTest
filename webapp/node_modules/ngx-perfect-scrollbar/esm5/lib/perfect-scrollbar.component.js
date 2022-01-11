import { __decorate, __param } from "tslib";
import { Subject, merge, fromEvent } from 'rxjs';
import { mapTo, takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgZone, Inject, Component, OnInit, OnDestroy, DoCheck, Input, Output, EventEmitter, HostBinding, ViewChild, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { PerfectScrollbarDirective } from './perfect-scrollbar.directive';
import { PerfectScrollbarEvents } from './perfect-scrollbar.interfaces';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './perfect-scrollbar.directive';
import * as ɵngcc2 from '@angular/common';

function PerfectScrollbarComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵelement(1, "div", 4);
    ɵngcc0.ɵɵelement(2, "div", 5);
    ɵngcc0.ɵɵelement(3, "div", 6);
    ɵngcc0.ɵɵelement(4, "div", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("ps-at-top", ctx_r0.states.top)("ps-at-left", ctx_r0.states.left)("ps-at-right", ctx_r0.states.right)("ps-at-bottom", ctx_r0.states.bottom);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ps-indicator-show", ctx_r0.indicatorY && ctx_r0.interaction);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ps-indicator-show", ctx_r0.indicatorX && ctx_r0.interaction);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ps-indicator-show", ctx_r0.indicatorX && ctx_r0.interaction);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ps-indicator-show", ctx_r0.indicatorY && ctx_r0.interaction);
} }
var _c0 = ["*"];
var PerfectScrollbarComponent = /** @class */ (function () {
    function PerfectScrollbarComponent(zone, cdRef, platformId) {
        this.zone = zone;
        this.cdRef = cdRef;
        this.platformId = platformId;
        this.states = {};
        this.indicatorX = false;
        this.indicatorY = false;
        this.interaction = false;
        this.scrollPositionX = 0;
        this.scrollPositionY = 0;
        this.scrollDirectionX = 0;
        this.scrollDirectionY = 0;
        this.usePropagationX = false;
        this.usePropagationY = false;
        this.allowPropagationX = false;
        this.allowPropagationY = false;
        this.stateTimeout = null;
        this.ngDestroy = new Subject();
        this.stateUpdate = new Subject();
        this.disabled = false;
        this.usePSClass = true;
        this.autoPropagation = false;
        this.scrollIndicators = false;
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
    PerfectScrollbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            this.stateUpdate
                .pipe(takeUntil(this.ngDestroy), distinctUntilChanged(function (a, b) { return (a === b && !_this.stateTimeout); }))
                .subscribe(function (state) {
                if (_this.stateTimeout && typeof window !== 'undefined') {
                    window.clearTimeout(_this.stateTimeout);
                    _this.stateTimeout = null;
                }
                if (state === 'x' || state === 'y') {
                    _this.interaction = false;
                    if (state === 'x') {
                        _this.indicatorX = false;
                        _this.states.left = false;
                        _this.states.right = false;
                        if (_this.autoPropagation && _this.usePropagationX) {
                            _this.allowPropagationX = false;
                        }
                    }
                    else if (state === 'y') {
                        _this.indicatorY = false;
                        _this.states.top = false;
                        _this.states.bottom = false;
                        if (_this.autoPropagation && _this.usePropagationY) {
                            _this.allowPropagationY = false;
                        }
                    }
                }
                else {
                    if (state === 'left' || state === 'right') {
                        _this.states.left = false;
                        _this.states.right = false;
                        _this.states[state] = true;
                        if (_this.autoPropagation && _this.usePropagationX) {
                            _this.indicatorX = true;
                        }
                    }
                    else if (state === 'top' || state === 'bottom') {
                        _this.states.top = false;
                        _this.states.bottom = false;
                        _this.states[state] = true;
                        if (_this.autoPropagation && _this.usePropagationY) {
                            _this.indicatorY = true;
                        }
                    }
                    if (_this.autoPropagation && typeof window !== 'undefined') {
                        _this.stateTimeout = window.setTimeout(function () {
                            _this.indicatorX = false;
                            _this.indicatorY = false;
                            _this.stateTimeout = null;
                            if (_this.interaction && (_this.states.left || _this.states.right)) {
                                _this.allowPropagationX = true;
                            }
                            if (_this.interaction && (_this.states.top || _this.states.bottom)) {
                                _this.allowPropagationY = true;
                            }
                            _this.cdRef.markForCheck();
                        }, 500);
                    }
                }
                _this.cdRef.markForCheck();
                _this.cdRef.detectChanges();
            });
            this.zone.runOutsideAngular(function () {
                if (_this.directiveRef) {
                    var element = _this.directiveRef.elementRef.nativeElement;
                    fromEvent(element, 'wheel')
                        .pipe(takeUntil(_this.ngDestroy))
                        .subscribe(function (event) {
                        if (!_this.disabled && _this.autoPropagation) {
                            var scrollDeltaX = event.deltaX;
                            var scrollDeltaY = event.deltaY;
                            _this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                        }
                    });
                    fromEvent(element, 'touchmove')
                        .pipe(takeUntil(_this.ngDestroy))
                        .subscribe(function (event) {
                        if (!_this.disabled && _this.autoPropagation) {
                            var scrollPositionX = event.touches[0].clientX;
                            var scrollPositionY = event.touches[0].clientY;
                            var scrollDeltaX = scrollPositionX - _this.scrollPositionX;
                            var scrollDeltaY = scrollPositionY - _this.scrollPositionY;
                            _this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                            _this.scrollPositionX = scrollPositionX;
                            _this.scrollPositionY = scrollPositionY;
                        }
                    });
                    merge(fromEvent(element, 'ps-scroll-x')
                        .pipe(mapTo('x')), fromEvent(element, 'ps-scroll-y')
                        .pipe(mapTo('y')), fromEvent(element, 'ps-x-reach-end')
                        .pipe(mapTo('right')), fromEvent(element, 'ps-y-reach-end')
                        .pipe(mapTo('bottom')), fromEvent(element, 'ps-x-reach-start')
                        .pipe(mapTo('left')), fromEvent(element, 'ps-y-reach-start')
                        .pipe(mapTo('top')))
                        .pipe(takeUntil(_this.ngDestroy))
                        .subscribe(function (state) {
                        if (!_this.disabled && (_this.autoPropagation || _this.scrollIndicators)) {
                            _this.stateUpdate.next(state);
                        }
                    });
                }
            });
            window.setTimeout(function () {
                PerfectScrollbarEvents.forEach(function (eventName) {
                    if (_this.directiveRef) {
                        _this.directiveRef[eventName] = _this[eventName];
                    }
                });
            }, 0);
        }
    };
    PerfectScrollbarComponent.prototype.ngOnDestroy = function () {
        if (isPlatformBrowser(this.platformId)) {
            this.ngDestroy.next();
            this.ngDestroy.unsubscribe();
            if (this.stateTimeout && typeof window !== 'undefined') {
                window.clearTimeout(this.stateTimeout);
            }
        }
    };
    PerfectScrollbarComponent.prototype.ngDoCheck = function () {
        if (isPlatformBrowser(this.platformId)) {
            if (!this.disabled && this.autoPropagation && this.directiveRef) {
                var element = this.directiveRef.elementRef.nativeElement;
                this.usePropagationX = element.classList.contains('ps--active-x');
                this.usePropagationY = element.classList.contains('ps--active-y');
            }
        }
    };
    PerfectScrollbarComponent.prototype.checkPropagation = function (event, deltaX, deltaY) {
        this.interaction = true;
        var scrollDirectionX = (deltaX < 0) ? -1 : 1;
        var scrollDirectionY = (deltaY < 0) ? -1 : 1;
        if ((this.usePropagationX && this.usePropagationY) ||
            (this.usePropagationX && (!this.allowPropagationX ||
                (this.scrollDirectionX !== scrollDirectionX))) ||
            (this.usePropagationY && (!this.allowPropagationY ||
                (this.scrollDirectionY !== scrollDirectionY)))) {
            event.preventDefault();
            event.stopPropagation();
        }
        if (!!deltaX) {
            this.scrollDirectionX = scrollDirectionX;
        }
        if (!!deltaY) {
            this.scrollDirectionY = scrollDirectionY;
        }
        this.stateUpdate.next('interaction');
        this.cdRef.detectChanges();
    };
    PerfectScrollbarComponent.ctorParameters = function () { return [
        { type: NgZone },
        { type: ChangeDetectorRef },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    __decorate([
        Input()
    ], PerfectScrollbarComponent.prototype, "disabled", void 0);
    __decorate([
        Input()
    ], PerfectScrollbarComponent.prototype, "usePSClass", void 0);
    __decorate([
        HostBinding('class.ps-show-limits'),
        Input()
    ], PerfectScrollbarComponent.prototype, "autoPropagation", void 0);
    __decorate([
        HostBinding('class.ps-show-active'),
        Input()
    ], PerfectScrollbarComponent.prototype, "scrollIndicators", void 0);
    __decorate([
        Input()
    ], PerfectScrollbarComponent.prototype, "config", void 0);
    __decorate([
        Output()
    ], PerfectScrollbarComponent.prototype, "psScrollY", void 0);
    __decorate([
        Output()
    ], PerfectScrollbarComponent.prototype, "psScrollX", void 0);
    __decorate([
        Output()
    ], PerfectScrollbarComponent.prototype, "psScrollUp", void 0);
    __decorate([
        Output()
    ], PerfectScrollbarComponent.prototype, "psScrollDown", void 0);
    __decorate([
        Output()
    ], PerfectScrollbarComponent.prototype, "psScrollLeft", void 0);
    __decorate([
        Output()
    ], PerfectScrollbarComponent.prototype, "psScrollRight", void 0);
    __decorate([
        Output()
    ], PerfectScrollbarComponent.prototype, "psYReachEnd", void 0);
    __decorate([
        Output()
    ], PerfectScrollbarComponent.prototype, "psYReachStart", void 0);
    __decorate([
        Output()
    ], PerfectScrollbarComponent.prototype, "psXReachEnd", void 0);
    __decorate([
        Output()
    ], PerfectScrollbarComponent.prototype, "psXReachStart", void 0);
    __decorate([
        ViewChild(PerfectScrollbarDirective, { static: true })
    ], PerfectScrollbarComponent.prototype, "directiveRef", void 0);
    PerfectScrollbarComponent = __decorate([ __param(2, Inject(PLATFORM_ID))
    ], PerfectScrollbarComponent);
PerfectScrollbarComponent.ɵfac = function PerfectScrollbarComponent_Factory(t) { return new (t || PerfectScrollbarComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(PLATFORM_ID)); };
PerfectScrollbarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PerfectScrollbarComponent, selectors: [["perfect-scrollbar"]], viewQuery: function PerfectScrollbarComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(PerfectScrollbarDirective, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.directiveRef = _t.first);
    } }, hostVars: 4, hostBindings: function PerfectScrollbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ps-show-limits", ctx.autoPropagation)("ps-show-active", ctx.scrollIndicators);
    } }, inputs: { disabled: "disabled", usePSClass: "usePSClass", autoPropagation: "autoPropagation", scrollIndicators: "scrollIndicators", config: "config" }, outputs: { psScrollY: "psScrollY", psScrollX: "psScrollX", psScrollUp: "psScrollUp", psScrollDown: "psScrollDown", psScrollLeft: "psScrollLeft", psScrollRight: "psScrollRight", psYReachEnd: "psYReachEnd", psYReachStart: "psYReachStart", psXReachEnd: "psXReachEnd", psXReachStart: "psXReachStart" }, exportAs: ["ngxPerfectScrollbar"], ngContentSelectors: _c0, decls: 4, vars: 5, consts: [[2, "position", "static", 3, "perfectScrollbar", "disabled"], [1, "ps-content"], ["class", "ps-overlay", 3, "ps-at-top", "ps-at-left", "ps-at-right", "ps-at-bottom", 4, "ngIf"], [1, "ps-overlay"], [1, "ps-indicator-top"], [1, "ps-indicator-left"], [1, "ps-indicator-right"], [1, "ps-indicator-bottom"]], template: function PerfectScrollbarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, PerfectScrollbarComponent_div_3_Template, 5, 16, "div", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ps", ctx.usePSClass);
        ɵngcc0.ɵɵproperty("perfectScrollbar", ctx.config)("disabled", ctx.disabled);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.scrollIndicators);
    } }, directives: [ɵngcc1.PerfectScrollbarDirective, ɵngcc2.NgIf], styles: ["perfect-scrollbar{position:relative;display:block;overflow:hidden;width:100%;height:100%;max-width:100%;max-height:100%}perfect-scrollbar[hidden]{display:none}perfect-scrollbar[fxflex]{display:-webkit-box;display:flex;flex-direction:column;height:auto;min-width:0;min-height:0;-webkit-box-direction:column;-webkit-box-orient:column}perfect-scrollbar[fxflex]>.ps{flex:1 1 auto;width:auto;height:auto;min-width:0;min-height:0;-webkit-box-flex:1}perfect-scrollbar[fxlayout]>.ps,perfect-scrollbar[fxlayout]>.ps>.ps-content{display:-webkit-box;display:flex;flex:1 1 auto;flex-direction:inherit;align-items:inherit;align-content:inherit;justify-content:inherit;width:100%;height:100%;-webkit-box-align:inherit;-webkit-box-direction:inherit;-webkit-box-flex:1;-webkit-box-orient:inherit;-webkit-box-pack:inherit},perfect-scrollbar[fxlayout=row]>.ps,perfect-scrollbar[fxlayout=row]>.ps>.ps-content{flex-direction:row!important;-webkit-box-direction:row!important;-webkit-box-orient:row!important}perfect-scrollbar[fxlayout=column]>.ps,perfect-scrollbar[fxlayout=column]>.ps>.ps-content{flex-direction:column!important;-webkit-box-direction:column!important;-webkit-box-orient:column!important}perfect-scrollbar>.ps{position:static;display:block;width:100%;height:100%;max-width:100%;max-height:100%}perfect-scrollbar>.ps textarea{-ms-overflow-style:scrollbar}perfect-scrollbar>.ps>.ps-overlay{position:absolute;top:0;right:0;bottom:0;left:0;display:block;overflow:hidden;pointer-events:none}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{position:absolute;opacity:0;-webkit-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{left:0;min-width:100%;min-height:24px}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{top:0;min-width:24px;min-height:100%}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left{left:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{right:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom{bottom:0}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y{top:0!important;right:0!important;left:auto!important;width:10px;cursor:default;-webkit-transition:width .2s linear,opacity .2s linear,background-color .2s linear;transition:width .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y.ps--clicking,perfect-scrollbar>.ps.ps--active-y>.ps__rail-y:hover{width:15px}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x{top:auto!important;bottom:0!important;left:0!important;height:10px;cursor:default;-webkit-transition:height .2s linear,opacity .2s linear,background-color .2s linear;transition:height .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x.ps--clicking,perfect-scrollbar>.ps.ps--active-x>.ps__rail-x:hover{height:15px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-y{margin:0 0 10px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-x{margin:0 10px 0 0}perfect-scrollbar>.ps.ps--scrolling-x>.ps__rail-x,perfect-scrollbar>.ps.ps--scrolling-y>.ps__rail-y{opacity:.9;background-color:#eee}perfect-scrollbar.ps-show-always>.ps.ps--active-x>.ps__rail-x,perfect-scrollbar.ps-show-always>.ps.ps--active-y>.ps__rail-y{opacity:.6}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-top) .ps-indicator-top{opacity:1;background:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to bottom,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom{opacity:1;background:-webkit-gradient(linear,left bottom,left top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to top,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-left) .ps-indicator-left{opacity:1;background:-webkit-gradient(linear,left top,right top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to right,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-right) .ps-indicator-right{opacity:1;background:-webkit-gradient(linear,right top,left top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to left,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top{background:-webkit-gradient(linear,left top,left bottom,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to bottom,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom{background:-webkit-gradient(linear,left bottom,left top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to top,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left{background:-webkit-gradient(linear,left top,right top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to right,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right{background:-webkit-gradient(linear,right top,left top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to left,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top.ps-indicator-show{opacity:1}", ".ps{overflow:hidden!important;overflow-anchor:none;-ms-overflow-style:none;touch-action:auto;-ms-touch-action:auto}.ps__rail-x{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;height:15px;bottom:0;position:absolute}.ps__rail-y{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;width:15px;right:0;position:absolute}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{display:block;background-color:transparent}.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y,.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y{opacity:.6}.ps .ps__rail-x.ps--clicking,.ps .ps__rail-x:focus,.ps .ps__rail-x:hover,.ps .ps__rail-y.ps--clicking,.ps .ps__rail-y:focus,.ps .ps__rail-y:hover{background-color:#eee;opacity:.9}.ps__thumb-x{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,height .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s ease-in-out;height:6px;bottom:2px;position:absolute}.ps__thumb-y{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,width .2s ease-in-out;-webkit-transition:background-color .2s linear,width .2s ease-in-out;width:6px;right:2px;position:absolute}.ps__rail-x.ps--clicking .ps__thumb-x,.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x:hover>.ps__thumb-x{background-color:#999;height:11px}.ps__rail-y.ps--clicking .ps__thumb-y,.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y:hover>.ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){.ps{overflow:auto!important}}"], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PerfectScrollbarComponent, [{
        type: Component,
        args: [{
                selector: 'perfect-scrollbar',
                exportAs: 'ngxPerfectScrollbar',
                template: "<div style=\"position: static;\" [class.ps]=\"usePSClass\" [perfectScrollbar]=\"config\" [disabled]=\"disabled\">\n  <div class=\"ps-content\">\n    <ng-content></ng-content>\n  </div>\n\n  <div *ngIf=\"scrollIndicators\" class=\"ps-overlay\" [class.ps-at-top]=\"states.top\" [class.ps-at-left]=\"states.left\" [class.ps-at-right]=\"states.right\" [class.ps-at-bottom]=\"states.bottom\">\n    <div class=\"ps-indicator-top\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n    <div class=\"ps-indicator-left\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-right\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-bottom\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["perfect-scrollbar{position:relative;display:block;overflow:hidden;width:100%;height:100%;max-width:100%;max-height:100%}perfect-scrollbar[hidden]{display:none}perfect-scrollbar[fxflex]{display:-webkit-box;display:flex;flex-direction:column;height:auto;min-width:0;min-height:0;-webkit-box-direction:column;-webkit-box-orient:column}perfect-scrollbar[fxflex]>.ps{flex:1 1 auto;width:auto;height:auto;min-width:0;min-height:0;-webkit-box-flex:1}perfect-scrollbar[fxlayout]>.ps,perfect-scrollbar[fxlayout]>.ps>.ps-content{display:-webkit-box;display:flex;flex:1 1 auto;flex-direction:inherit;align-items:inherit;align-content:inherit;justify-content:inherit;width:100%;height:100%;-webkit-box-align:inherit;-webkit-box-direction:inherit;-webkit-box-flex:1;-webkit-box-orient:inherit;-webkit-box-pack:inherit},perfect-scrollbar[fxlayout=row]>.ps,perfect-scrollbar[fxlayout=row]>.ps>.ps-content{flex-direction:row!important;-webkit-box-direction:row!important;-webkit-box-orient:row!important}perfect-scrollbar[fxlayout=column]>.ps,perfect-scrollbar[fxlayout=column]>.ps>.ps-content{flex-direction:column!important;-webkit-box-direction:column!important;-webkit-box-orient:column!important}perfect-scrollbar>.ps{position:static;display:block;width:100%;height:100%;max-width:100%;max-height:100%}perfect-scrollbar>.ps textarea{-ms-overflow-style:scrollbar}perfect-scrollbar>.ps>.ps-overlay{position:absolute;top:0;right:0;bottom:0;left:0;display:block;overflow:hidden;pointer-events:none}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{position:absolute;opacity:0;-webkit-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{left:0;min-width:100%;min-height:24px}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{top:0;min-width:24px;min-height:100%}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left{left:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{right:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom{bottom:0}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y{top:0!important;right:0!important;left:auto!important;width:10px;cursor:default;-webkit-transition:width .2s linear,opacity .2s linear,background-color .2s linear;transition:width .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y.ps--clicking,perfect-scrollbar>.ps.ps--active-y>.ps__rail-y:hover{width:15px}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x{top:auto!important;bottom:0!important;left:0!important;height:10px;cursor:default;-webkit-transition:height .2s linear,opacity .2s linear,background-color .2s linear;transition:height .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x.ps--clicking,perfect-scrollbar>.ps.ps--active-x>.ps__rail-x:hover{height:15px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-y{margin:0 0 10px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-x{margin:0 10px 0 0}perfect-scrollbar>.ps.ps--scrolling-x>.ps__rail-x,perfect-scrollbar>.ps.ps--scrolling-y>.ps__rail-y{opacity:.9;background-color:#eee}perfect-scrollbar.ps-show-always>.ps.ps--active-x>.ps__rail-x,perfect-scrollbar.ps-show-always>.ps.ps--active-y>.ps__rail-y{opacity:.6}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-top) .ps-indicator-top{opacity:1;background:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to bottom,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom{opacity:1;background:-webkit-gradient(linear,left bottom,left top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to top,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-left) .ps-indicator-left{opacity:1;background:-webkit-gradient(linear,left top,right top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to right,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-right) .ps-indicator-right{opacity:1;background:-webkit-gradient(linear,right top,left top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to left,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top{background:-webkit-gradient(linear,left top,left bottom,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to bottom,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom{background:-webkit-gradient(linear,left bottom,left top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to top,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left{background:-webkit-gradient(linear,left top,right top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to right,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right{background:-webkit-gradient(linear,right top,left top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to left,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top.ps-indicator-show{opacity:1}", ".ps{overflow:hidden!important;overflow-anchor:none;-ms-overflow-style:none;touch-action:auto;-ms-touch-action:auto}.ps__rail-x{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;height:15px;bottom:0;position:absolute}.ps__rail-y{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;width:15px;right:0;position:absolute}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{display:block;background-color:transparent}.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y,.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y{opacity:.6}.ps .ps__rail-x.ps--clicking,.ps .ps__rail-x:focus,.ps .ps__rail-x:hover,.ps .ps__rail-y.ps--clicking,.ps .ps__rail-y:focus,.ps .ps__rail-y:hover{background-color:#eee;opacity:.9}.ps__thumb-x{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,height .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s ease-in-out;height:6px;bottom:2px;position:absolute}.ps__thumb-y{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,width .2s ease-in-out;-webkit-transition:background-color .2s linear,width .2s ease-in-out;width:6px;right:2px;position:absolute}.ps__rail-x.ps--clicking .ps__thumb-x,.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x:hover>.ps__thumb-x{background-color:#999;height:11px}.ps__rail-y.ps--clicking .ps__thumb-y,.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y:hover>.ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){.ps{overflow:auto!important}}"]
            }]
    }], function () { return [{ type: ɵngcc0.NgZone }, { type: ɵngcc0.ChangeDetectorRef }, { type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, { disabled: [{
            type: Input
        }], usePSClass: [{
            type: Input
        }], autoPropagation: [{
            type: HostBinding,
            args: ['class.ps-show-limits']
        }, {
            type: Input
        }], scrollIndicators: [{
            type: HostBinding,
            args: ['class.ps-show-active']
        }, {
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
            type: Input
        }], directiveRef: [{
            type: ViewChild,
            args: [PerfectScrollbarDirective, { static: true }]
        }] }); })();
    return PerfectScrollbarComponent;
}());
export { PerfectScrollbarComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyZmVjdC1zY3JvbGxiYXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovbmd4LXBlcmZlY3Qtc2Nyb2xsYmFyL2xpYi9wZXJmZWN0LXNjcm9sbGJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUNoQyxNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQ3BFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUxRSxPQUFPLEVBQXlCLHNCQUFzQixFQUNuQixNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWTFFO0FBQTZELElBcUQzRCxtQ0FBb0IsSUFBWSxFQUFVLEtBQXdCLEVBQ25DLFVBQWtCO0FBQUksUUFEakMsU0FBSSxHQUFKLElBQUksQ0FBUTtBQUFDLFFBQVMsVUFBSyxHQUFMLEtBQUssQ0FBbUI7QUFBQyxRQUNwQyxlQUFVLEdBQVYsVUFBVSxDQUFRO0FBQUMsUUFyRDNDLFdBQU0sR0FBUSxFQUFFLENBQUM7QUFDMUIsUUFDUyxlQUFVLEdBQVksS0FBSyxDQUFDO0FBQ3JDLFFBQVMsZUFBVSxHQUFZLEtBQUssQ0FBQztBQUNyQyxRQUNTLGdC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bXBvcnQgeyBTdWJqZWN0LCBtZXJnZSwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXBUbywgdGFrZVVudGlsLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nWm9uZSwgSW5qZWN0LCBDb21wb25lbnQsXG4gIE9uSW5pdCwgT25EZXN0cm95LCBEb0NoZWNrLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLFxuICBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQZXJmZWN0U2Nyb2xsYmFyRGlyZWN0aXZlIH0gZnJvbSAnLi9wZXJmZWN0LXNjcm9sbGJhci5kaXJlY3RpdmUnO1xuXG5pbXBvcnQgeyBQZXJmZWN0U2Nyb2xsYmFyRXZlbnQsIFBlcmZlY3RTY3JvbGxiYXJFdmVudHMsXG4gIFBlcmZlY3RTY3JvbGxiYXJDb25maWdJbnRlcmZhY2UgfSBmcm9tICcuL3BlcmZlY3Qtc2Nyb2xsYmFyLmludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZXJmZWN0LXNjcm9sbGJhcicsXG4gIGV4cG9ydEFzOiAnbmd4UGVyZmVjdFNjcm9sbGJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wZXJmZWN0LXNjcm9sbGJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogW1xuICAgICcuL3BlcmZlY3Qtc2Nyb2xsYmFyLmNvbXBvbmVudC5jc3MnLFxuICAgICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvY3NzL3BlcmZlY3Qtc2Nyb2xsYmFyLmNzcydcbiAgXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBQZXJmZWN0U2Nyb2xsYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIERvQ2hlY2sge1xuICBwdWJsaWMgc3RhdGVzOiBhbnkgPSB7fTtcblxuICBwdWJsaWMgaW5kaWNhdG9yWDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaW5kaWNhdG9yWTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHB1YmxpYyBpbnRlcmFjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgc2Nyb2xsUG9zaXRpb25YOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIHNjcm9sbFBvc2l0aW9uWTogbnVtYmVyID0gMDtcblxuICBwcml2YXRlIHNjcm9sbERpcmVjdGlvblg6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgc2Nyb2xsRGlyZWN0aW9uWTogbnVtYmVyID0gMDtcblxuICBwcml2YXRlIHVzZVByb3BhZ2F0aW9uWDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHVzZVByb3BhZ2F0aW9uWTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgYWxsb3dQcm9wYWdhdGlvblg6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBhbGxvd1Byb3BhZ2F0aW9uWTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgc3RhdGVUaW1lb3V0OiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuICBwcml2YXRlIHJlYWRvbmx5IG5nRGVzdHJveTogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBzdGF0ZVVwZGF0ZTogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcblxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIHVzZVBTQ2xhc3M6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MucHMtc2hvdy1saW1pdHMnKVxuICBASW5wdXQoKSBhdXRvUHJvcGFnYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnBzLXNob3ctYWN0aXZlJylcbiAgQElucHV0KCkgc2Nyb2xsSW5kaWNhdG9yczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGNvbmZpZz86IFBlcmZlY3RTY3JvbGxiYXJDb25maWdJbnRlcmZhY2U7XG5cbiAgQE91dHB1dCgpIHBzU2Nyb2xsWTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHBzU2Nyb2xsWDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAT3V0cHV0KCkgcHNTY3JvbGxVcDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHBzU2Nyb2xsRG93bjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHBzU2Nyb2xsTGVmdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHBzU2Nyb2xsUmlnaHQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQE91dHB1dCgpIHBzWVJlYWNoRW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcHNZUmVhY2hTdGFydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHBzWFJlYWNoRW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcHNYUmVhY2hTdGFydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAVmlld0NoaWxkKFBlcmZlY3RTY3JvbGxiYXJEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIGRpcmVjdGl2ZVJlZj86IFBlcmZlY3RTY3JvbGxiYXJEaXJlY3RpdmU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUsIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0KSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLnN0YXRlVXBkYXRlXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLm5nRGVzdHJveSksXG4gICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKGEsIGIpID0+IChhID09PSBiICYmICF0aGlzLnN0YXRlVGltZW91dCkpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoc3RhdGU6IHN0cmluZykgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnN0YXRlVGltZW91dCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnN0YXRlVGltZW91dCk7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGVUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3RhdGUgPT09ICd4JyB8fCBzdGF0ZSA9PT0gJ3knKSB7XG4gICAgICAgICAgICB0aGlzLmludGVyYWN0aW9uID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gJ3gnKSB7XG4gICAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yWCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgIHRoaXMuc3RhdGVzLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZXMucmlnaHQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICBpZiAodGhpcy5hdXRvUHJvcGFnYXRpb24gJiYgdGhpcy51c2VQcm9wYWdhdGlvblgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsbG93UHJvcGFnYXRpb25YID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09ICd5Jykge1xuICAgICAgICAgICAgICB0aGlzLmluZGljYXRvclkgPSBmYWxzZTtcblxuICAgICAgICAgICAgICB0aGlzLnN0YXRlcy50b3AgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZXMuYm90dG9tID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0b1Byb3BhZ2F0aW9uICYmIHRoaXMudXNlUHJvcGFnYXRpb25ZKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGxvd1Byb3BhZ2F0aW9uWSA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfcKgZWxzZSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09ICdsZWZ0JyB8fCBzdGF0ZSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlcy5sZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGVzLnJpZ2h0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZXNbc3RhdGVdID0gdHJ1ZTtcblxuICAgICAgICAgICAgICBpZiAodGhpcy5hdXRvUHJvcGFnYXRpb24gJiYgdGhpcy51c2VQcm9wYWdhdGlvblgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGljYXRvclggPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSAndG9wJyB8fCBzdGF0ZSA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZXMudG9wID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGVzLmJvdHRvbSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgIHRoaXMuc3RhdGVzW3N0YXRlXSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0b1Byb3BhZ2F0aW9uICYmIHRoaXMudXNlUHJvcGFnYXRpb25ZKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JZID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5hdXRvUHJvcGFnYXRpb24gJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JYID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JZID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlVGltZW91dCA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnRlcmFjdGlvbiAmJiAodGhpcy5zdGF0ZXMubGVmdCB8fCB0aGlzLnN0YXRlcy5yaWdodCkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuYWxsb3dQcm9wYWdhdGlvblggPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmludGVyYWN0aW9uICYmICh0aGlzLnN0YXRlcy50b3AgfHwgdGhpcy5zdGF0ZXMuYm90dG9tKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5hbGxvd1Byb3BhZ2F0aW9uWSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9KTtcblxuICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aXZlUmVmKSB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZGlyZWN0aXZlUmVmLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICAgICAgICAgIGZyb21FdmVudDxXaGVlbEV2ZW50PihlbGVtZW50LCAnd2hlZWwnKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLm5nRGVzdHJveSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBXaGVlbEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiB0aGlzLmF1dG9Qcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbERlbHRhWCA9IGV2ZW50LmRlbHRhWDtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxEZWx0YVkgPSBldmVudC5kZWx0YVk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrUHJvcGFnYXRpb24oZXZlbnQsIHNjcm9sbERlbHRhWCwgc2Nyb2xsRGVsdGFZKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBmcm9tRXZlbnQ8VG91Y2hFdmVudD4oZWxlbWVudCwgJ3RvdWNobW92ZScpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMubmdEZXN0cm95KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIHRoaXMuYXV0b1Byb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsUG9zaXRpb25YID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbFBvc2l0aW9uWSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbERlbHRhWCA9IHNjcm9sbFBvc2l0aW9uWCAtIHRoaXMuc2Nyb2xsUG9zaXRpb25YO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbERlbHRhWSA9IHNjcm9sbFBvc2l0aW9uWSAtIHRoaXMuc2Nyb2xsUG9zaXRpb25ZO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja1Byb3BhZ2F0aW9uKGV2ZW50LCBzY3JvbGxEZWx0YVgsIHNjcm9sbERlbHRhWSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFBvc2l0aW9uWCA9IHNjcm9sbFBvc2l0aW9uWDtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFBvc2l0aW9uWSA9IHNjcm9sbFBvc2l0aW9uWTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1lcmdlKFxuICAgICAgICAgICAgICBmcm9tRXZlbnQoZWxlbWVudCwgJ3BzLXNjcm9sbC14JylcbiAgICAgICAgICAgICAgICAucGlwZShtYXBUbygneCcpKSxcbiAgICAgICAgICAgICAgZnJvbUV2ZW50KGVsZW1lbnQsICdwcy1zY3JvbGwteScpXG4gICAgICAgICAgICAgICAgLnBpcGUobWFwVG8oJ3knKSksXG4gICAgICAgICAgICAgIGZyb21FdmVudChlbGVtZW50LCAncHMteC1yZWFjaC1lbmQnKVxuICAgICAgICAgICAgICAgIC5waXBlKG1hcFRvKCdyaWdodCcpKSxcbiAgICAgICAgICAgICAgZnJvbUV2ZW50KGVsZW1lbnQsICdwcy15LXJlYWNoLWVuZCcpXG4gICAgICAgICAgICAgICAgLnBpcGUobWFwVG8oJ2JvdHRvbScpKSxcbiAgICAgICAgICAgICAgZnJvbUV2ZW50KGVsZW1lbnQsICdwcy14LXJlYWNoLXN0YXJ0JylcbiAgICAgICAgICAgICAgICAucGlwZShtYXBUbygnbGVmdCcpKSxcbiAgICAgICAgICAgICAgZnJvbUV2ZW50KGVsZW1lbnQsICdwcy15LXJlYWNoLXN0YXJ0JylcbiAgICAgICAgICAgICAgICAucGlwZShtYXBUbygndG9wJykpLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLm5nRGVzdHJveSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHN0YXRlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICh0aGlzLmF1dG9Qcm9wYWdhdGlvbiB8fCB0aGlzLnNjcm9sbEluZGljYXRvcnMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVVwZGF0ZS5uZXh0KHN0YXRlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIFBlcmZlY3RTY3JvbGxiYXJFdmVudHMuZm9yRWFjaCgoZXZlbnROYW1lOiBQZXJmZWN0U2Nyb2xsYmFyRXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5kaXJlY3RpdmVSZWYpIHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlUmVmW2V2ZW50TmFtZV0gPSB0aGlzW2V2ZW50TmFtZV07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLm5nRGVzdHJveS5uZXh0KCk7XG4gICAgICB0aGlzLm5nRGVzdHJveS51bnN1YnNjcmliZSgpO1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZVRpbWVvdXQgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnN0YXRlVGltZW91dCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgdGhpcy5hdXRvUHJvcGFnYXRpb24gJiYgdGhpcy5kaXJlY3RpdmVSZWYpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZGlyZWN0aXZlUmVmLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICAgICAgICB0aGlzLnVzZVByb3BhZ2F0aW9uWCA9IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcy0tYWN0aXZlLXgnKTtcblxuICAgICAgICB0aGlzLnVzZVByb3BhZ2F0aW9uWSA9IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcy0tYWN0aXZlLXknKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoZWNrUHJvcGFnYXRpb24oZXZlbnQ6IGFueSwgZGVsdGFYOiBudW1iZXIsIGRlbHRhWTogbnVtYmVyKTogdm9pZMKge1xuICAgIHRoaXMuaW50ZXJhY3Rpb24gPSB0cnVlO1xuXG4gICAgY29uc3Qgc2Nyb2xsRGlyZWN0aW9uWCA9IChkZWx0YVggPCAwKSA/IC0xIDogMTtcbiAgICBjb25zdCBzY3JvbGxEaXJlY3Rpb25ZID0gKGRlbHRhWSA8IDApID8gLTEgOiAxO1xuXG4gICAgaWYgKCh0aGlzLnVzZVByb3BhZ2F0aW9uWCAmJiB0aGlzLnVzZVByb3BhZ2F0aW9uWSkgfHxcbiAgICAgICAgKHRoaXMudXNlUHJvcGFnYXRpb25YICYmICghdGhpcy5hbGxvd1Byb3BhZ2F0aW9uWCB8fFxuICAgICAgICAodGhpcy5zY3JvbGxEaXJlY3Rpb25YICE9PSBzY3JvbGxEaXJlY3Rpb25YKSkpIHx8XG4gICAgICAgICh0aGlzLnVzZVByb3BhZ2F0aW9uWSAmJiAoIXRoaXMuYWxsb3dQcm9wYWdhdGlvblkgfHxcbiAgICAgICAgKHRoaXMuc2Nyb2xsRGlyZWN0aW9uWSAhPT0gc2Nyb2xsRGlyZWN0aW9uWSkpKSlcbiAgICB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgaWYgKCEhZGVsdGFYKSB7XG4gICAgICB0aGlzLnNjcm9sbERpcmVjdGlvblggPSBzY3JvbGxEaXJlY3Rpb25YO1xuICAgIH1cblxuICAgIGlmICghIWRlbHRhWSkge1xuICAgICAgdGhpcy5zY3JvbGxEaXJlY3Rpb25ZID0gc2Nyb2xsRGlyZWN0aW9uWTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlVXBkYXRlLm5leHQoJ2ludGVyYWN0aW9uJyk7XG5cbiAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuIl19