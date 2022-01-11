/**
 * @fileoverview added by tsickle
 * Generated from: anchor.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, NgZone, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { warnDeprecation } from 'ng-zorro-antd/core/logger';
import { NzScrollService } from 'ng-zorro-antd/core/services';
import { InputBoolean, InputNumber } from 'ng-zorro-antd/core/util';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil, throttleTime } from 'rxjs/operators';
import { getOffsetTop } from './util';
/**
 * @record
 */
function Section() { }
if (false) {
    /** @type {?} */
    Section.prototype.comp;
    /** @type {?} */
    Section.prototype.top;
}
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'anchor';
/** @type {?} */
var sharpMatcherRegx = /#([^#]+)$/;
var NzAnchorComponent = /** @class */ (function () {
    function NzAnchorComponent(doc, nzConfigService, scrollSrv, cdr, platform, zone, renderer) {
        this.doc = doc;
        this.nzConfigService = nzConfigService;
        this.scrollSrv = scrollSrv;
        this.cdr = cdr;
        this.platform = platform;
        this.zone = zone;
        this.renderer = renderer;
        this.nzAffix = true;
        this.nzShowInkInFixed = false;
        this.nzBounds = 5;
        this.nzOffsetTop = undefined;
        this.nzTarget = '';
        this.nzClick = new EventEmitter();
        this.nzScroll = new EventEmitter();
        this.visible = false;
        this.wrapperStyle = { 'max-height': '100vh' };
        this.links = [];
        this.animating = false;
        this.destroy$ = new Subject();
        this.handleScrollTimeoutID = -1;
    }
    /**
     * @param {?} link
     * @return {?}
     */
    NzAnchorComponent.prototype.registerLink = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        this.links.push(link);
    };
    /**
     * @param {?} link
     * @return {?}
     */
    NzAnchorComponent.prototype.unregisterLink = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        this.links.splice(this.links.indexOf(link), 1);
    };
    /**
     * @private
     * @return {?}
     */
    NzAnchorComponent.prototype.getContainer = /**
     * @private
     * @return {?}
     */
    function () {
        return this.container || window;
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.registerScrollEvent();
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        clearTimeout(this.handleScrollTimeoutID);
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @private
     * @return {?}
     */
    NzAnchorComponent.prototype.registerScrollEvent = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.platform.isBrowser) {
            return;
        }
        this.destroy$.next();
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            fromEvent(_this.getContainer(), 'scroll')
                .pipe(throttleTime(50), takeUntil(_this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.handleScroll(); }));
        }));
        // Browser would maintain the scrolling position when refreshing.
        // So we have to delay calculation in avoid of getting a incorrect result.
        this.handleScrollTimeoutID = setTimeout((/**
         * @return {?}
         */
        function () { return _this.handleScroll(); }));
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.handleScroll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (typeof document === 'undefined' || this.animating) {
            return;
        }
        /** @type {?} */
        var sections = [];
        /** @type {?} */
        var scope = (this.nzOffsetTop || 0) + this.nzBounds;
        this.links.forEach((/**
         * @param {?} comp
         * @return {?}
         */
        function (comp) {
            /** @type {?} */
            var sharpLinkMatch = sharpMatcherRegx.exec(comp.nzHref.toString());
            if (!sharpLinkMatch) {
                return;
            }
            /** @type {?} */
            var target = _this.doc.getElementById(sharpLinkMatch[1]);
            if (target) {
                /** @type {?} */
                var top_1 = getOffsetTop(target, _this.getContainer());
                if (top_1 < scope) {
                    sections.push({
                        top: top_1,
                        comp: comp
                    });
                }
            }
        }));
        this.visible = !!sections.length;
        if (!this.visible) {
            this.clearActive();
            this.cdr.detectChanges();
        }
        else {
            /** @type {?} */
            var maxSection = sections.reduce((/**
             * @param {?} prev
             * @param {?} curr
             * @return {?}
             */
            function (prev, curr) { return (curr.top > prev.top ? curr : prev); }));
            this.handleActive(maxSection.comp);
        }
        this.setVisible();
    };
    /**
     * @private
     * @return {?}
     */
    NzAnchorComponent.prototype.clearActive = /**
     * @private
     * @return {?}
     */
    function () {
        this.links.forEach((/**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            i.unsetActive();
        }));
    };
    /**
     * @private
     * @param {?} comp
     * @return {?}
     */
    NzAnchorComponent.prototype.handleActive = /**
     * @private
     * @param {?} comp
     * @return {?}
     */
    function (comp) {
        this.clearActive();
        comp.setActive();
        /** @type {?} */
        var linkNode = comp.getLinkTitleElement();
        this.ink.nativeElement.style.top = linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5 + "px";
        this.visible = true;
        this.setVisible();
        this.nzScroll.emit(comp);
    };
    /**
     * @private
     * @return {?}
     */
    NzAnchorComponent.prototype.setVisible = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var visible = this.visible;
        /** @type {?} */
        var visibleClassname = 'visible';
        if (this.ink) {
            if (visible) {
                this.renderer.addClass(this.ink.nativeElement, visibleClassname);
            }
            else {
                this.renderer.removeClass(this.ink.nativeElement, visibleClassname);
            }
        }
    };
    /**
     * @param {?} linkComp
     * @return {?}
     */
    NzAnchorComponent.prototype.handleScrollTo = /**
     * @param {?} linkComp
     * @return {?}
     */
    function (linkComp) {
        var _this = this;
        /** @type {?} */
        var el = this.doc.querySelector(linkComp.nzHref);
        if (!el) {
            return;
        }
        this.animating = true;
        /** @type {?} */
        var containerScrollTop = this.scrollSrv.getScroll(this.getContainer());
        /** @type {?} */
        var elOffsetTop = getOffsetTop(el, this.getContainer());
        /** @type {?} */
        var targetScrollTop = containerScrollTop + elOffsetTop - (this.nzOffsetTop || 0);
        this.scrollSrv.scrollTo(this.getContainer(), targetScrollTop, undefined, (/**
         * @return {?}
         */
        function () {
            _this.animating = false;
            _this.handleActive(linkComp);
        }));
        this.nzClick.emit(linkComp.nzHref);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzAnchorComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzOffsetTop = changes.nzOffsetTop, nzTarget = changes.nzTarget, nzContainer = changes.nzContainer;
        if (nzOffsetTop) {
            this.wrapperStyle = {
                'max-height': "calc(100vh - " + this.nzOffsetTop + "px)"
            };
        }
        if (nzContainer || nzTarget) {
            /** @type {?} */
            var container = this.nzContainer || this.nzTarget;
            this.container = typeof container === 'string' ? this.doc.querySelector(container) : container;
            this.registerScrollEvent();
            if (nzTarget) {
                warnDeprecation("'nzTarget' of 'nz-anchor' is deprecated and will be removed in 10.0.0.Please use 'nzContainer' instead.");
            }
        }
    };
    NzAnchorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-anchor',
                    exportAs: 'nzAnchor',
                    preserveWhitespaces: false,
                    template: "\n    <nz-affix *ngIf=\"nzAffix; else content\" [nzOffsetTop]=\"nzOffsetTop\" [nzTarget]=\"container\">\n      <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n    </nz-affix>\n    <ng-template #content>\n      <div class=\"ant-anchor-wrapper\" [ngStyle]=\"wrapperStyle\">\n        <div class=\"ant-anchor\" [ngClass]=\"{ fixed: !nzAffix && !nzShowInkInFixed }\">\n          <div class=\"ant-anchor-ink\">\n            <div class=\"ant-anchor-ink-ball\" #ink></div>\n          </div>\n          <ng-content></ng-content>\n        </div>\n      </div>\n    </ng-template>\n  ",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzAnchorComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: NzConfigService },
        { type: NzScrollService },
        { type: ChangeDetectorRef },
        { type: Platform },
        { type: NgZone },
        { type: Renderer2 }
    ]; };
    NzAnchorComponent.propDecorators = {
        ink: [{ type: ViewChild, args: ['ink', { static: false },] }],
        nzAffix: [{ type: Input }],
        nzShowInkInFixed: [{ type: Input }],
        nzBounds: [{ type: Input }],
        nzOffsetTop: [{ type: Input }],
        nzContainer: [{ type: Input }],
        nzTarget: [{ type: Input }],
        nzClick: [{ type: Output }],
        nzScroll: [{ type: Output }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzAnchorComponent.prototype, "nzAffix", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzAnchorComponent.prototype, "nzShowInkInFixed", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        InputNumber(),
        __metadata("design:type", Number)
    ], NzAnchorComponent.prototype, "nzBounds", void 0);
    __decorate([
        InputNumber(undefined),
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", Number)
    ], NzAnchorComponent.prototype, "nzOffsetTop", void 0);
    return NzAnchorComponent;
}());
export { NzAnchorComponent };
if (false) {
    /** @type {?} */
    NzAnchorComponent.ngAcceptInputType_nzAffix;
    /** @type {?} */
    NzAnchorComponent.ngAcceptInputType_nzShowInkInFixed;
    /** @type {?} */
    NzAnchorComponent.ngAcceptInputType_nzBounds;
    /** @type {?} */
    NzAnchorComponent.ngAcceptInputType_nzOffsetTop;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.ink;
    /** @type {?} */
    NzAnchorComponent.prototype.nzAffix;
    /** @type {?} */
    NzAnchorComponent.prototype.nzShowInkInFixed;
    /** @type {?} */
    NzAnchorComponent.prototype.nzBounds;
    /** @type {?} */
    NzAnchorComponent.prototype.nzOffsetTop;
    /** @type {?} */
    NzAnchorComponent.prototype.nzContainer;
    /** @type {?} */
    NzAnchorComponent.prototype.nzTarget;
    /** @type {?} */
    NzAnchorComponent.prototype.nzClick;
    /** @type {?} */
    NzAnchorComponent.prototype.nzScroll;
    /** @type {?} */
    NzAnchorComponent.prototype.visible;
    /** @type {?} */
    NzAnchorComponent.prototype.wrapperStyle;
    /** @type {?} */
    NzAnchorComponent.prototype.container;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.links;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.animating;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.handleScrollTimeoutID;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.doc;
    /** @type {?} */
    NzAnchorComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.scrollSrv;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    NzAnchorComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5jaG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYW5jaG9yLyIsInNvdXJjZXMiOlsiYW5jaG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFHTixNQUFNLEVBQ04sU0FBUyxFQUVULFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTlELE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7O0FBRXRDLHNCQUdDOzs7SUFGQyx1QkFBNEI7O0lBQzVCLHNCQUFZOzs7SUFHUix3QkFBd0IsR0FBRyxRQUFROztJQUNuQyxnQkFBZ0IsR0FBRyxXQUFXO0FBRXBDO0lBK0RFLDJCQUM0QixHQUFjLEVBQ2pDLGVBQWdDLEVBQy9CLFNBQTBCLEVBQzFCLEdBQXNCLEVBQ3RCLFFBQWtCLEVBQ2xC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WjtJQWlLbkMsd0JBQUM7Q0FBQSxBQTlNRCxJQThNQztTQXhMWSxpQkFBaUI7OztJQUM1Qiw0Q0FBK0M7O0lBQy9DLHFEQUF3RDs7SUFDeEQsNkNBQStDOztJQUMvQyxnREFBa0Q7Ozs7O0lBRWxELGdDQUE4RDs7SUFFOUQsb0NBQXdDOztJQUV4Qyw2Q0FHa0M7O0lBRWxDLHFDQUdxQjs7SUFFckIsd0NBR2lDOztJQUVqQyx3Q0FBNEM7O0lBQzVDLHFDQUE2Qzs7SUFFN0Msb0NBQXdEOztJQUN4RCxxQ0FBd0U7O0lBRXhFLG9DQUFnQjs7SUFDaEIseUNBQTJEOztJQUUzRCxzQ0FBaUM7Ozs7O0lBRWpDLGtDQUE0Qzs7Ozs7SUFDNUMsc0NBQTBCOzs7OztJQUMxQixxQ0FBaUM7Ozs7O0lBQ2pDLGtEQUFtQzs7Ozs7SUFHakMsZ0NBQXdDOztJQUN4Qyw0Q0FBdUM7Ozs7O0lBQ3ZDLHNDQUFrQzs7Ozs7SUFDbEMsZ0NBQThCOzs7OztJQUM5QixxQ0FBMEI7Ozs7O0lBQzFCLGlDQUFvQjs7Ozs7SUFDcEIscUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IHdhcm5EZXByZWNhdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9sb2dnZXInO1xuaW1wb3J0IHsgTnpTY3JvbGxTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3NlcnZpY2VzJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTmdTdHlsZUludGVyZmFjZSwgTnVtYmVySW5wdXQsIE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwsIHRocm90dGxlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTnpBbmNob3JMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi9hbmNob3ItbGluay5jb21wb25lbnQnO1xuaW1wb3J0IHsgZ2V0T2Zmc2V0VG9wIH0gZnJvbSAnLi91dGlsJztcblxuaW50ZXJmYWNlIFNlY3Rpb24ge1xuICBjb21wOiBOekFuY2hvckxpbmtDb21wb25lbnQ7XG4gIHRvcDogbnVtYmVyO1xufVxuXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnYW5jaG9yJztcbmNvbnN0IHNoYXJwTWF0Y2hlclJlZ3ggPSAvIyhbXiNdKykkLztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotYW5jaG9yJyxcbiAgZXhwb3J0QXM6ICduekFuY2hvcicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuei1hZmZpeCAqbmdJZj1cIm56QWZmaXg7IGVsc2UgY29udGVudFwiIFtuek9mZnNldFRvcF09XCJuek9mZnNldFRvcFwiIFtuelRhcmdldF09XCJjb250YWluZXJcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L256LWFmZml4PlxuICAgIDxuZy10ZW1wbGF0ZSAjY29udGVudD5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtYW5jaG9yLXdyYXBwZXJcIiBbbmdTdHlsZV09XCJ3cmFwcGVyU3R5bGVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC1hbmNob3JcIiBbbmdDbGFzc109XCJ7IGZpeGVkOiAhbnpBZmZpeCAmJiAhbnpTaG93SW5rSW5GaXhlZCB9XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1hbmNob3ItaW5rXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LWFuY2hvci1pbmstYmFsbFwiICNpbms+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE56QW5jaG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpBZmZpeDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTaG93SW5rSW5GaXhlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpCb3VuZHM6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpPZmZzZXRUb3A6IE51bWJlcklucHV0O1xuXG4gIEBWaWV3Q2hpbGQoJ2luaycsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIGluayE6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QWZmaXggPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSlcbiAgQElucHV0Qm9vbGVhbigpXG4gIG56U2hvd0lua0luRml4ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpXG4gIEBJbnB1dE51bWJlcigpXG4gIG56Qm91bmRzOiBudW1iZXIgPSA1O1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcih1bmRlZmluZWQpXG4gIEBXaXRoQ29uZmlnPG51bWJlcj4oTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKVxuICBuek9mZnNldFRvcD86IG51bWJlciA9IHVuZGVmaW5lZDtcblxuICBASW5wdXQoKSBuekNvbnRhaW5lcj86IHN0cmluZyB8IEhUTUxFbGVtZW50O1xuICBASW5wdXQoKSBuelRhcmdldDogc3RyaW5nIHwgSFRNTEVsZW1lbnQgPSAnJztcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTY3JvbGwgPSBuZXcgRXZlbnRFbWl0dGVyPE56QW5jaG9yTGlua0NvbXBvbmVudD4oKTtcblxuICB2aXNpYmxlID0gZmFsc2U7XG4gIHdyYXBwZXJTdHlsZTogTmdTdHlsZUludGVyZmFjZSA9IHsgJ21heC1oZWlnaHQnOiAnMTAwdmgnIH07XG5cbiAgY29udGFpbmVyPzogSFRNTEVsZW1lbnQgfCBXaW5kb3c7XG5cbiAgcHJpdmF0ZSBsaW5rczogTnpBbmNob3JMaW5rQ29tcG9uZW50W10gPSBbXTtcbiAgcHJpdmF0ZSBhbmltYXRpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgaGFuZGxlU2Nyb2xsVGltZW91dElEID0gLTE7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IE56U2FmZUFueSxcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBzY3JvbGxTcnY6IE56U2Nyb2xsU2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge31cblxuICByZWdpc3RlckxpbmsobGluazogTnpBbmNob3JMaW5rQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5saW5rcy5wdXNoKGxpbmspO1xuICB9XG5cbiAgdW5yZWdpc3RlckxpbmsobGluazogTnpBbmNob3JMaW5rQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5saW5rcy5zcGxpY2UodGhpcy5saW5rcy5pbmRleE9mKGxpbmspLCAxKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29udGFpbmVyKCk6IEhUTUxFbGVtZW50IHwgV2luZG93IHtcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXIgfHwgd2luZG93O1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVnaXN0ZXJTY3JvbGxFdmVudCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuaGFuZGxlU2Nyb2xsVGltZW91dElEKTtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBwcml2YXRlIHJlZ2lzdGVyU2Nyb2xsRXZlbnQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgZnJvbUV2ZW50KHRoaXMuZ2V0Q29udGFpbmVyKCksICdzY3JvbGwnKVxuICAgICAgICAucGlwZSh0aHJvdHRsZVRpbWUoNTApLCB0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5oYW5kbGVTY3JvbGwoKSk7XG4gICAgfSk7XG4gICAgLy8gQnJvd3NlciB3b3VsZCBtYWludGFpbiB0aGUgc2Nyb2xsaW5nIHBvc2l0aW9uIHdoZW4gcmVmcmVzaGluZy5cbiAgICAvLyBTbyB3ZSBoYXZlIHRvIGRlbGF5IGNhbGN1bGF0aW9uIGluIGF2b2lkIG9mIGdldHRpbmcgYSBpbmNvcnJlY3QgcmVzdWx0LlxuICAgIHRoaXMuaGFuZGxlU2Nyb2xsVGltZW91dElEID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmhhbmRsZVNjcm9sbCgpKTtcbiAgfVxuXG4gIGhhbmRsZVNjcm9sbCgpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fCB0aGlzLmFuaW1hdGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNlY3Rpb25zOiBTZWN0aW9uW10gPSBbXTtcbiAgICBjb25zdCBzY29wZSA9ICh0aGlzLm56T2Zmc2V0VG9wIHx8IDApICsgdGhpcy5uekJvdW5kcztcbiAgICB0aGlzLmxpbmtzLmZvckVhY2goY29tcCA9PiB7XG4gICAgICBjb25zdCBzaGFycExpbmtNYXRjaCA9IHNoYXJwTWF0Y2hlclJlZ3guZXhlYyhjb21wLm56SHJlZi50b1N0cmluZygpKTtcbiAgICAgIGlmICghc2hhcnBMaW5rTWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5kb2MuZ2V0RWxlbWVudEJ5SWQoc2hhcnBMaW5rTWF0Y2hbMV0pO1xuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICBjb25zdCB0b3AgPSBnZXRPZmZzZXRUb3AodGFyZ2V0LCB0aGlzLmdldENvbnRhaW5lcigpKTtcbiAgICAgICAgaWYgKHRvcCA8IHNjb3BlKSB7XG4gICAgICAgICAgc2VjdGlvbnMucHVzaCh7XG4gICAgICAgICAgICB0b3AsXG4gICAgICAgICAgICBjb21wXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMudmlzaWJsZSA9ICEhc2VjdGlvbnMubGVuZ3RoO1xuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICB0aGlzLmNsZWFyQWN0aXZlKCk7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1heFNlY3Rpb24gPSBzZWN0aW9ucy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IChjdXJyLnRvcCA+IHByZXYudG9wID8gY3VyciA6IHByZXYpKTtcbiAgICAgIHRoaXMuaGFuZGxlQWN0aXZlKG1heFNlY3Rpb24uY29tcCk7XG4gICAgfVxuICAgIHRoaXMuc2V0VmlzaWJsZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckFjdGl2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmxpbmtzLmZvckVhY2goaSA9PiB7XG4gICAgICBpLnVuc2V0QWN0aXZlKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFjdGl2ZShjb21wOiBOekFuY2hvckxpbmtDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyQWN0aXZlKCk7XG4gICAgY29tcC5zZXRBY3RpdmUoKTtcbiAgICBjb25zdCBsaW5rTm9kZSA9IGNvbXAuZ2V0TGlua1RpdGxlRWxlbWVudCgpO1xuICAgIHRoaXMuaW5rLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gYCR7bGlua05vZGUub2Zmc2V0VG9wICsgbGlua05vZGUuY2xpZW50SGVpZ2h0IC8gMiAtIDQuNX1weGA7XG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICB0aGlzLnNldFZpc2libGUoKTtcbiAgICB0aGlzLm56U2Nyb2xsLmVtaXQoY29tcCk7XG4gIH1cblxuICBwcml2YXRlIHNldFZpc2libGUoKTogdm9pZCB7XG4gICAgY29uc3QgdmlzaWJsZSA9IHRoaXMudmlzaWJsZTtcbiAgICBjb25zdCB2aXNpYmxlQ2xhc3NuYW1lID0gJ3Zpc2libGUnO1xuICAgIGlmICh0aGlzLmluaykge1xuICAgICAgaWYgKHZpc2libGUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmluay5uYXRpdmVFbGVtZW50LCB2aXNpYmxlQ2xhc3NuYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5pbmsubmF0aXZlRWxlbWVudCwgdmlzaWJsZUNsYXNzbmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU2Nyb2xsVG8obGlua0NvbXA6IE56QW5jaG9yTGlua0NvbXBvbmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGVsID0gdGhpcy5kb2MucXVlcnlTZWxlY3RvcihsaW5rQ29tcC5uekhyZWYpO1xuICAgIGlmICghZWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmFuaW1hdGluZyA9IHRydWU7XG4gICAgY29uc3QgY29udGFpbmVyU2Nyb2xsVG9wID0gdGhpcy5zY3JvbGxTcnYuZ2V0U2Nyb2xsKHRoaXMuZ2V0Q29udGFpbmVyKCkpO1xuICAgIGNvbnN0IGVsT2Zmc2V0VG9wID0gZ2V0T2Zmc2V0VG9wKGVsLCB0aGlzLmdldENvbnRhaW5lcigpKTtcbiAgICBjb25zdCB0YXJnZXRTY3JvbGxUb3AgPSBjb250YWluZXJTY3JvbGxUb3AgKyBlbE9mZnNldFRvcCAtICh0aGlzLm56T2Zmc2V0VG9wIHx8IDApO1xuICAgIHRoaXMuc2Nyb2xsU3J2LnNjcm9sbFRvKHRoaXMuZ2V0Q29udGFpbmVyKCksIHRhcmdldFNjcm9sbFRvcCwgdW5kZWZpbmVkLCAoKSA9PiB7XG4gICAgICB0aGlzLmFuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5oYW5kbGVBY3RpdmUobGlua0NvbXApO1xuICAgIH0pO1xuICAgIHRoaXMubnpDbGljay5lbWl0KGxpbmtDb21wLm56SHJlZik7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuek9mZnNldFRvcCwgbnpUYXJnZXQsIG56Q29udGFpbmVyIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChuek9mZnNldFRvcCkge1xuICAgICAgdGhpcy53cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICdtYXgtaGVpZ2h0JzogYGNhbGMoMTAwdmggLSAke3RoaXMubnpPZmZzZXRUb3B9cHgpYFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKG56Q29udGFpbmVyIHx8IG56VGFyZ2V0KSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLm56Q29udGFpbmVyIHx8IHRoaXMubnpUYXJnZXQ7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IHR5cGVvZiBjb250YWluZXIgPT09ICdzdHJpbmcnID8gdGhpcy5kb2MucXVlcnlTZWxlY3Rvcihjb250YWluZXIpIDogY29udGFpbmVyO1xuICAgICAgdGhpcy5yZWdpc3RlclNjcm9sbEV2ZW50KCk7XG4gICAgICBpZiAobnpUYXJnZXQpIHtcbiAgICAgICAgd2FybkRlcHJlY2F0aW9uKGAnbnpUYXJnZXQnIG9mICduei1hbmNob3InIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAxMC4wLjAuUGxlYXNlIHVzZSAnbnpDb250YWluZXInIGluc3RlYWQuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=