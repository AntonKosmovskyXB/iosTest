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
const NZ_CONFIG_COMPONENT_NAME = 'anchor';
/** @type {?} */
const sharpMatcherRegx = /#([^#]+)$/;
export class NzAnchorComponent {
    /**
     * @param {?} doc
     * @param {?} nzConfigService
     * @param {?} scrollSrv
     * @param {?} cdr
     * @param {?} platform
     * @param {?} zone
     * @param {?} renderer
     */
    constructor(doc, nzConfigService, scrollSrv, cdr, platform, zone, renderer) {
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
    registerLink(link) {
        this.links.push(link);
    }
    /**
     * @param {?} link
     * @return {?}
     */
    unregisterLink(link) {
        this.links.splice(this.links.indexOf(link), 1);
    }
    /**
     * @private
     * @return {?}
     */
    getContainer() {
        return this.container || window;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.registerScrollEvent();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        clearTimeout(this.handleScrollTimeoutID);
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @private
     * @return {?}
     */
    registerScrollEvent() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.destroy$.next();
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            fromEvent(this.getContainer(), 'scroll')
                .pipe(throttleTime(50), takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            () => this.handleScroll()));
        }));
        // Browser would maintain the scrolling position when refreshing.
        // So we have to delay calculation in avoid of getting a incorrect result.
        this.handleScrollTimeoutID = setTimeout((/**
         * @return {?}
         */
        () => this.handleScroll()));
    }
    /**
     * @return {?}
     */
    handleScroll() {
        if (typeof document === 'undefined' || this.animating) {
            return;
        }
        /** @type {?} */
        const sections = [];
        /** @type {?} */
        const scope = (this.nzOffsetTop || 0) + this.nzBounds;
        this.links.forEach((/**
         * @param {?} comp
         * @return {?}
         */
        comp => {
            /** @type {?} */
            const sharpLinkMatch = sharpMatcherRegx.exec(comp.nzHref.toString());
            if (!sharpLinkMatch) {
                return;
            }
            /** @type {?} */
            const target = this.doc.getElementById(sharpLinkMatch[1]);
            if (target) {
                /** @type {?} */
                const top = getOffsetTop(target, this.getContainer());
                if (top < scope) {
                    sections.push({
                        top,
                        comp
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
            const maxSection = sections.reduce((/**
             * @param {?} prev
             * @param {?} curr
             * @return {?}
             */
            (prev, curr) => (curr.top > prev.top ? curr : prev)));
            this.handleActive(maxSection.comp);
        }
        this.setVisible();
    }
    /**
     * @private
     * @return {?}
     */
    clearActive() {
        this.links.forEach((/**
         * @param {?} i
         * @return {?}
         */
        i => {
            i.unsetActive();
        }));
    }
    /**
     * @private
     * @param {?} comp
     * @return {?}
     */
    handleActive(comp) {
        this.clearActive();
        comp.setActive();
        /** @type {?} */
        const linkNode = comp.getLinkTitleElement();
        this.ink.nativeElement.style.top = `${linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5}px`;
        this.visible = true;
        this.setVisible();
        this.nzScroll.emit(comp);
    }
    /**
     * @private
     * @return {?}
     */
    setVisible() {
        /** @type {?} */
        const visible = this.visible;
        /** @type {?} */
        const visibleClassname = 'visible';
        if (this.ink) {
            if (visible) {
                this.renderer.addClass(this.ink.nativeElement, visibleClassname);
            }
            else {
                this.renderer.removeClass(this.ink.nativeElement, visibleClassname);
            }
        }
    }
    /**
     * @param {?} linkComp
     * @return {?}
     */
    handleScrollTo(linkComp) {
        /** @type {?} */
        const el = this.doc.querySelector(linkComp.nzHref);
        if (!el) {
            return;
        }
        this.animating = true;
        /** @type {?} */
        const containerScrollTop = this.scrollSrv.getScroll(this.getContainer());
        /** @type {?} */
        const elOffsetTop = getOffsetTop(el, this.getContainer());
        /** @type {?} */
        const targetScrollTop = containerScrollTop + elOffsetTop - (this.nzOffsetTop || 0);
        this.scrollSrv.scrollTo(this.getContainer(), targetScrollTop, undefined, (/**
         * @return {?}
         */
        () => {
            this.animating = false;
            this.handleActive(linkComp);
        }));
        this.nzClick.emit(linkComp.nzHref);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzOffsetTop, nzTarget, nzContainer } = changes;
        if (nzOffsetTop) {
            this.wrapperStyle = {
                'max-height': `calc(100vh - ${this.nzOffsetTop}px)`
            };
        }
        if (nzContainer || nzTarget) {
            /** @type {?} */
            const container = this.nzContainer || this.nzTarget;
            this.container = typeof container === 'string' ? this.doc.querySelector(container) : container;
            this.registerScrollEvent();
            if (nzTarget) {
                warnDeprecation(`'nzTarget' of 'nz-anchor' is deprecated and will be removed in 10.0.0.Please use 'nzContainer' instead.`);
            }
        }
    }
}
NzAnchorComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-anchor',
                exportAs: 'nzAnchor',
                preserveWhitespaces: false,
                template: `
    <nz-affix *ngIf="nzAffix; else content" [nzOffsetTop]="nzOffsetTop" [nzTarget]="container">
      <ng-template [ngTemplateOutlet]="content"></ng-template>
    </nz-affix>
    <ng-template #content>
      <div class="ant-anchor-wrapper" [ngStyle]="wrapperStyle">
        <div class="ant-anchor" [ngClass]="{ fixed: !nzAffix && !nzShowInkInFixed }">
          <div class="ant-anchor-ink">
            <div class="ant-anchor-ink-ball" #ink></div>
          </div>
          <ng-content></ng-content>
        </div>
      </div>
    </ng-template>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NzAnchorComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: NzConfigService },
    { type: NzScrollService },
    { type: ChangeDetectorRef },
    { type: Platform },
    { type: NgZone },
    { type: Renderer2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5jaG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYW5jaG9yLyIsInNvdXJjZXMiOlsiYW5jaG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFHTixNQUFNLEVBQ04sU0FBUyxFQUVULFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTlELE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7O0FBRXRDLHNCQUdDOzs7SUFGQyx1QkFBNEI7O0lBQzVCLHNCQUFZOzs7TUFHUix3QkFBd0IsR0FBRyxRQUFROztNQUNuQyxnQkFBZ0IsR0FBRyxXQUFXO0FBd0JwQyxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7Ozs7O0lBeUM1QixZQUM0QixHQUFjLEVBQ2pDLGVBQWdDLEVBQy9CLFNBQTBCLEVB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eEMsNkNBR2tDOztJQUVsQyxxQ0FHcUI7O0lBRXJCLHdDQUdpQzs7SUFFakMsd0NBQTRDOztJQUM1QyxxQ0FBNkM7O0lBRTdDLG9DQUF3RDs7SUFDeEQscUNBQXdFOztJQUV4RSxvQ0FBZ0I7O0lBQ2hCLHlDQUEyRDs7SUFFM0Qsc0NBQWlDOzs7OztJQUVqQyxrQ0FBNEM7Ozs7O0lBQzVDLHNDQUEwQjs7Ozs7SUFDMUIscUNBQWlDOzs7OztJQUNqQyxrREFBbUM7Ozs7O0lBR2pDLGdDQUF3Qzs7SUFDeEMsNENBQXVDOzs7OztJQUN2QyxzQ0FBa0M7Ozs7O0lBQ2xDLGdDQUE4Qjs7Ozs7SUFDOUIscUNBQTBCOzs7OztJQUMxQixpQ0FBb0I7Ozs7O0lBQ3BCLHFDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyB3YXJuRGVwcmVjYXRpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbG9nZ2VyJztcbmltcG9ydCB7IE56U2Nyb2xsU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE5nU3R5bGVJbnRlcmZhY2UsIE51bWJlcklucHV0LCBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsLCB0aHJvdHRsZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE56QW5jaG9yTGlua0NvbXBvbmVudCB9IGZyb20gJy4vYW5jaG9yLWxpbmsuY29tcG9uZW50JztcbmltcG9ydCB7IGdldE9mZnNldFRvcCB9IGZyb20gJy4vdXRpbCc7XG5cbmludGVyZmFjZSBTZWN0aW9uIHtcbiAgY29tcDogTnpBbmNob3JMaW5rQ29tcG9uZW50O1xuICB0b3A6IG51bWJlcjtcbn1cblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2FuY2hvcic7XG5jb25zdCBzaGFycE1hdGNoZXJSZWd4ID0gLyMoW14jXSspJC87XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LWFuY2hvcicsXG4gIGV4cG9ydEFzOiAnbnpBbmNob3InLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bnotYWZmaXggKm5nSWY9XCJuekFmZml4OyBlbHNlIGNvbnRlbnRcIiBbbnpPZmZzZXRUb3BdPVwibnpPZmZzZXRUb3BcIiBbbnpUYXJnZXRdPVwiY29udGFpbmVyXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudFwiPjwvbmctdGVtcGxhdGU+XG4gICAgPC9uei1hZmZpeD5cbiAgICA8bmctdGVtcGxhdGUgI2NvbnRlbnQ+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWFuY2hvci13cmFwcGVyXCIgW25nU3R5bGVdPVwid3JhcHBlclN0eWxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtYW5jaG9yXCIgW25nQ2xhc3NdPVwieyBmaXhlZDogIW56QWZmaXggJiYgIW56U2hvd0lua0luRml4ZWQgfVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtYW5jaG9yLWlua1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1hbmNob3ItaW5rLWJhbGxcIiAjaW5rPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOekFuY2hvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256QWZmaXg6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2hvd0lua0luRml4ZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256Qm91bmRzOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256T2Zmc2V0VG9wOiBOdW1iZXJJbnB1dDtcblxuICBAVmlld0NoaWxkKCdpbmsnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBpbmshOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFmZml4ID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBuelNob3dJbmtJbkZpeGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKVxuICBASW5wdXROdW1iZXIoKVxuICBuekJvdW5kczogbnVtYmVyID0gNTtcblxuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIodW5kZWZpbmVkKVxuICBAV2l0aENvbmZpZzxudW1iZXI+KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSlcbiAgbnpPZmZzZXRUb3A/OiBudW1iZXIgPSB1bmRlZmluZWQ7XG5cbiAgQElucHV0KCkgbnpDb250YWluZXI/OiBzdHJpbmcgfCBIVE1MRWxlbWVudDtcbiAgQElucHV0KCkgbnpUYXJnZXQ6IHN0cmluZyB8IEhUTUxFbGVtZW50ID0gJyc7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2Nyb2xsID0gbmV3IEV2ZW50RW1pdHRlcjxOekFuY2hvckxpbmtDb21wb25lbnQ+KCk7XG5cbiAgdmlzaWJsZSA9IGZhbHNlO1xuICB3cmFwcGVyU3R5bGU6IE5nU3R5bGVJbnRlcmZhY2UgPSB7ICdtYXgtaGVpZ2h0JzogJzEwMHZoJyB9O1xuXG4gIGNvbnRhaW5lcj86IEhUTUxFbGVtZW50IHwgV2luZG93O1xuXG4gIHByaXZhdGUgbGlua3M6IE56QW5jaG9yTGlua0NvbXBvbmVudFtdID0gW107XG4gIHByaXZhdGUgYW5pbWF0aW5nID0gZmFsc2U7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGhhbmRsZVNjcm9sbFRpbWVvdXRJRCA9IC0xO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBOelNhZmVBbnksXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2Nyb2xsU3J2OiBOelNjcm9sbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHt9XG5cbiAgcmVnaXN0ZXJMaW5rKGxpbms6IE56QW5jaG9yTGlua0NvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMubGlua3MucHVzaChsaW5rKTtcbiAgfVxuXG4gIHVucmVnaXN0ZXJMaW5rKGxpbms6IE56QW5jaG9yTGlua0NvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMubGlua3Muc3BsaWNlKHRoaXMubGlua3MuaW5kZXhPZihsaW5rKSwgMSk7XG4gIH1cblxuICBwcml2YXRlIGdldENvbnRhaW5lcigpOiBIVE1MRWxlbWVudCB8IFdpbmRvdyB7XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyIHx8IHdpbmRvdztcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlZ2lzdGVyU2Nyb2xsRXZlbnQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmhhbmRsZVNjcm9sbFRpbWVvdXRJRCk7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWdpc3RlclNjcm9sbEV2ZW50KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGZyb21FdmVudCh0aGlzLmdldENvbnRhaW5lcigpLCAnc2Nyb2xsJylcbiAgICAgICAgLnBpcGUodGhyb3R0bGVUaW1lKDUwKSwgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuaGFuZGxlU2Nyb2xsKCkpO1xuICAgIH0pO1xuICAgIC8vIEJyb3dzZXIgd291bGQgbWFpbnRhaW4gdGhlIHNjcm9sbGluZyBwb3NpdGlvbiB3aGVuIHJlZnJlc2hpbmcuXG4gICAgLy8gU28gd2UgaGF2ZSB0byBkZWxheSBjYWxjdWxhdGlvbiBpbiBhdm9pZCBvZiBnZXR0aW5nIGEgaW5jb3JyZWN0IHJlc3VsdC5cbiAgICB0aGlzLmhhbmRsZVNjcm9sbFRpbWVvdXRJRCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5oYW5kbGVTY3JvbGwoKSk7XG4gIH1cblxuICBoYW5kbGVTY3JvbGwoKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgdGhpcy5hbmltYXRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzZWN0aW9uczogU2VjdGlvbltdID0gW107XG4gICAgY29uc3Qgc2NvcGUgPSAodGhpcy5uek9mZnNldFRvcCB8fCAwKSArIHRoaXMubnpCb3VuZHM7XG4gICAgdGhpcy5saW5rcy5mb3JFYWNoKGNvbXAgPT4ge1xuICAgICAgY29uc3Qgc2hhcnBMaW5rTWF0Y2ggPSBzaGFycE1hdGNoZXJSZWd4LmV4ZWMoY29tcC5uekhyZWYudG9TdHJpbmcoKSk7XG4gICAgICBpZiAoIXNoYXJwTGlua01hdGNoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZG9jLmdldEVsZW1lbnRCeUlkKHNoYXJwTGlua01hdGNoWzFdKTtcbiAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgY29uc3QgdG9wID0gZ2V0T2Zmc2V0VG9wKHRhcmdldCwgdGhpcy5nZXRDb250YWluZXIoKSk7XG4gICAgICAgIGlmICh0b3AgPCBzY29wZSkge1xuICAgICAgICAgIHNlY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgdG9wLFxuICAgICAgICAgICAgY29tcFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnZpc2libGUgPSAhIXNlY3Rpb25zLmxlbmd0aDtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgdGhpcy5jbGVhckFjdGl2ZSgpO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtYXhTZWN0aW9uID0gc2VjdGlvbnMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiAoY3Vyci50b3AgPiBwcmV2LnRvcCA/IGN1cnIgOiBwcmV2KSk7XG4gICAgICB0aGlzLmhhbmRsZUFjdGl2ZShtYXhTZWN0aW9uLmNvbXApO1xuICAgIH1cbiAgICB0aGlzLnNldFZpc2libGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJBY3RpdmUoKTogdm9pZCB7XG4gICAgdGhpcy5saW5rcy5mb3JFYWNoKGkgPT4ge1xuICAgICAgaS51bnNldEFjdGl2ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBY3RpdmUoY29tcDogTnpBbmNob3JMaW5rQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckFjdGl2ZSgpO1xuICAgIGNvbXAuc2V0QWN0aXZlKCk7XG4gICAgY29uc3QgbGlua05vZGUgPSBjb21wLmdldExpbmtUaXRsZUVsZW1lbnQoKTtcbiAgICB0aGlzLmluay5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IGAke2xpbmtOb2RlLm9mZnNldFRvcCArIGxpbmtOb2RlLmNsaWVudEhlaWdodCAvIDIgLSA0LjV9cHhgO1xuICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgdGhpcy5zZXRWaXNpYmxlKCk7XG4gICAgdGhpcy5uelNjcm9sbC5lbWl0KGNvbXApO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRWaXNpYmxlKCk6IHZvaWQge1xuICAgIGNvbnN0IHZpc2libGUgPSB0aGlzLnZpc2libGU7XG4gICAgY29uc3QgdmlzaWJsZUNsYXNzbmFtZSA9ICd2aXNpYmxlJztcbiAgICBpZiAodGhpcy5pbmspIHtcbiAgICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5pbmsubmF0aXZlRWxlbWVudCwgdmlzaWJsZUNsYXNzbmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuaW5rLm5hdGl2ZUVsZW1lbnQsIHZpc2libGVDbGFzc25hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVNjcm9sbFRvKGxpbmtDb21wOiBOekFuY2hvckxpbmtDb21wb25lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IobGlua0NvbXAubnpIcmVmKTtcbiAgICBpZiAoIWVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5hbmltYXRpbmcgPSB0cnVlO1xuICAgIGNvbnN0IGNvbnRhaW5lclNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsU3J2LmdldFNjcm9sbCh0aGlzLmdldENvbnRhaW5lcigpKTtcbiAgICBjb25zdCBlbE9mZnNldFRvcCA9IGdldE9mZnNldFRvcChlbCwgdGhpcy5nZXRDb250YWluZXIoKSk7XG4gICAgY29uc3QgdGFyZ2V0U2Nyb2xsVG9wID0gY29udGFpbmVyU2Nyb2xsVG9wICsgZWxPZmZzZXRUb3AgLSAodGhpcy5uek9mZnNldFRvcCB8fCAwKTtcbiAgICB0aGlzLnNjcm9sbFNydi5zY3JvbGxUbyh0aGlzLmdldENvbnRhaW5lcigpLCB0YXJnZXRTY3JvbGxUb3AsIHVuZGVmaW5lZCwgKCkgPT4ge1xuICAgICAgdGhpcy5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuaGFuZGxlQWN0aXZlKGxpbmtDb21wKTtcbiAgICB9KTtcbiAgICB0aGlzLm56Q2xpY2suZW1pdChsaW5rQ29tcC5uekhyZWYpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpPZmZzZXRUb3AsIG56VGFyZ2V0LCBuekNvbnRhaW5lciB9ID0gY2hhbmdlcztcbiAgICBpZiAobnpPZmZzZXRUb3ApIHtcbiAgICAgIHRoaXMud3JhcHBlclN0eWxlID0ge1xuICAgICAgICAnbWF4LWhlaWdodCc6IGBjYWxjKDEwMHZoIC0gJHt0aGlzLm56T2Zmc2V0VG9wfXB4KWBcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChuekNvbnRhaW5lciB8fCBuelRhcmdldCkge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5uekNvbnRhaW5lciB8fCB0aGlzLm56VGFyZ2V0O1xuICAgICAgdGhpcy5jb250YWluZXIgPSB0eXBlb2YgY29udGFpbmVyID09PSAnc3RyaW5nJyA/IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKSA6IGNvbnRhaW5lcjtcbiAgICAgIHRoaXMucmVnaXN0ZXJTY3JvbGxFdmVudCgpO1xuICAgICAgaWYgKG56VGFyZ2V0KSB7XG4gICAgICAgIHdhcm5EZXByZWNhdGlvbihgJ256VGFyZ2V0JyBvZiAnbnotYW5jaG9yJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gMTAuMC4wLlBsZWFzZSB1c2UgJ256Q29udGFpbmVyJyBpbnN0ZWFkLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19