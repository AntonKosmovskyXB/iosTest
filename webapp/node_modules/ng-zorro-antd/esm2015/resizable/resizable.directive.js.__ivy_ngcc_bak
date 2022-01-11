/**
 * @fileoverview added by tsickle
 * Generated from: resizable.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { Directive, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2 } from '@angular/core';
import { ensureInBounds, InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { getEventWithPoint } from './resizable-utils';
import { NzResizableService } from './resizable.service';
/**
 * @record
 */
export function NzResizeEvent() { }
if (false) {
    /** @type {?|undefined} */
    NzResizeEvent.prototype.width;
    /** @type {?|undefined} */
    NzResizeEvent.prototype.height;
    /** @type {?|undefined} */
    NzResizeEvent.prototype.col;
    /** @type {?|undefined} */
    NzResizeEvent.prototype.mouseEvent;
}
export class NzResizableDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} nzResizableService
     * @param {?} platform
     * @param {?} ngZone
     */
    constructor(elementRef, renderer, nzResizableService, platform, ngZone) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzResizableService = nzResizableService;
        this.platform = platform;
        this.ngZone = ngZone;
        this.nzBounds = 'parent';
        this.nzMinHeight = 40;
        this.nzMinWidth = 40;
        this.nzGridColumnCount = -1;
        this.nzMaxColumn = -1;
        this.nzMinColumn = -1;
        this.nzLockAspectRatio = false;
        this.nzPreview = false;
        this.nzDisabled = false;
        this.nzResize = new EventEmitter();
        this.nzResizeEnd = new EventEmitter();
        this.nzResizeStart = new EventEmitter();
        this.resizing = false;
        this.currentHandleEvent = null;
        this.ghostElement = null;
        this.sizeCache = null;
        this.destroy$ = new Subject();
        this.nzResizableService.handleMouseDown$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (this.nzDisabled) {
                return;
            }
            this.resizing = true;
            this.nzResizableService.startResizing(event.mouseEvent);
            this.currentHandleEvent = event;
            this.setCursor();
            this.nzResizeStart.emit({
                mouseEvent: event.mouseEvent
            });
            this.elRect = this.el.getBoundingClientRect();
        }));
        this.nzResizableService.documentMouseUp$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (this.resizing) {
                this.resizing = false;
                this.nzResizableService.documentMouseUp$.next();
                this.endResize(event);
            }
        }));
        this.nzResizableService.documentMouseMove$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (this.resizing) {
                this.resize(event);
            }
        }));
    }
    /**
     * @return {?}
     */
    onMouseenter() {
        this.nzResizableService.mouseEntered$.next(true);
    }
    /**
     * @return {?}
     */
    onMouseleave() {
        this.nzResizableService.mouseEntered$.next(false);
    }
    /**
     * @return {?}
     */
    setPosition() {
        /** @type {?} */
        const position = getComputedStyle(this.el).position;
        if (position === 'static' || !position) {
            this.renderer.setStyle(this.el, 'position', 'relative');
        }
    }
    /**
     * @param {?} width
     * @param {?} height
     * @param {?} ratio
     * @return {?}
     */
    calcSize(width, height, ratio) {
        /** @type {?} */
        let newWidth;
        /** @type {?} */
        let newHeight;
        /** @type {?} */
        let maxWidth;
        /** @type {?} */
        let maxHeight;
        /** @type {?} */
        let col = 0;
        /** @type {?} */
        let spanWidth = 0;
        /** @type {?} */
        let minWidth = this.nzMinWidth;
        /** @type {?} */
        let boundWidth = Infinity;
        /** @type {?} */
        let boundHeight = Infinity;
        if (this.nzBounds === 'parent') {
            /** @type {?} */
            const parent = this.renderer.parentNode(this.el);
            if (parent instanceof HTMLElement) {
                /** @type {?} */
                const parentRect = parent.getBoundingClientRect();
                boundWidth = parentRect.width;
                boundHeight = parentRect.height;
            }
        }
        else if (this.nzBounds === 'window') {
            if (typeof window !== 'undefined') {
                boundWidth = window.innerWidth;
                boundHeight = window.innerHeight;
            }
        }
        else if (this.nzBounds && this.nzBounds.nativeElement && this.nzBounds.nativeElement instanceof HTMLElement) {
            /** @type {?} */
            const boundsRect = this.nzBounds.nativeElement.getBoundingClientRect();
            boundWidth = boundsRect.width;
            boundHeight = boundsRect.height;
        }
        maxWidth = ensureInBounds((/** @type {?} */ (this.nzMaxWidth)), boundWidth);
        maxHeight = ensureInBounds((/** @type {?} */ (this.nzMaxHeight)), boundHeight);
        if (this.nzGridColumnCount !== -1) {
            spanWidth = maxWidth / this.nzGridColumnCount;
            minWidth = this.nzMinColumn !== -1 ? spanWidth * this.nzMinColumn : minWidth;
            maxWidth = this.nzMaxColumn !== -1 ? spanWidth * this.nzMaxColumn : maxWidth;
        }
        if (ratio !== -1) {
            if (/(left|right)/i.test((/** @type {?} */ (this.currentHandleEvent)).direction)) {
                newWidth = Math.min(Math.max(width, minWidth), maxWidth);
                newHeight = Math.min(Math.max(newWidth / ratio, this.nzMinHeight), maxHeight);
                if (newHeight >= maxHeight || newHeight <= this.nzMinHeight) {
                    newWidth = Math.min(Math.max(newHeight * ratio, minWidth), maxWidth);
                }
            }
            else {
                newHeight = Math.min(Math.max(height, this.nzMinHeight), maxHeight);
                newWidth = Math.min(Math.max(newHeight * ratio, minWidth), maxWidth);
                if (newWidth >= maxWidth || newWidth <= minWidth) {
                    newHeight = Math.min(Math.max(newWidth / ratio, this.nzMinHeight), maxHeight);
                }
            }
        }
        else {
            newWidth = Math.min(Math.max(width, minWidth), maxWidth);
            newHeight = Math.min(Math.max(height, this.nzMinHeight), maxHeight);
        }
        if (this.nzGridColumnCount !== -1) {
            col = Math.round(newWidth / spanWidth);
            newWidth = col * spanWidth;
        }
        return {
            col,
            width: newWidth,
            height: newHeight
        };
    }
    /**
     * @return {?}
     */
    setCursor() {
        switch ((/** @type {?} */ (this.currentHandleEvent)).direction) {
            case 'left':
            case 'right':
                this.renderer.setStyle(document.body, 'cursor', 'ew-resize');
                break;
            case 'top':
            case 'bottom':
                this.renderer.setStyle(document.body, 'cursor', 'ns-resize');
                break;
            case 'topLeft':
            case 'bottomRight':
                this.renderer.setStyle(document.body, 'cursor', 'nwse-resize');
                break;
            case 'topRight':
            case 'bottomLeft':
                this.renderer.setStyle(document.body, 'cursor', 'nesw-resize');
                break;
        }
        this.renderer.setStyle(document.body, 'user-select', 'none');
    }
    /**
     * @param {?} event
     * @return {?}
     */
    resize(event) {
        /** @type {?} */
        const elRect = this.elRect;
        /** @type {?} */
        const resizeEvent = getEventWithPoint(event);
        /** @type {?} */
        const handleEvent = getEventWithPoint((/** @type {?} */ (this.currentHandleEvent)).mouseEvent);
        /** @type {?} */
        let width = elRect.width;
        /** @type {?} */
        let height = elRect.height;
        /** @type {?} */
        const ratio = this.nzLockAspectRatio ? width / height : -1;
        switch ((/** @type {?} */ (this.currentHandleEvent)).direction) {
            case 'bottomRight':
                width = resizeEvent.clientX - elRect.left;
                height = resizeEvent.clientY - elRect.top;
                break;
            case 'bottomLeft':
                width = elRect.width + handleEvent.clientX - resizeEvent.clientX;
                height = resizeEvent.clientY - elRect.top;
                break;
            case 'topRight':
                width = resizeEvent.clientX - elRect.left;
                height = elRect.height + handleEvent.clientY - resizeEvent.clientY;
                break;
            case 'topLeft':
                width = elRect.width + handleEvent.clientX - resizeEvent.clientX;
                height = elRect.height + handleEvent.clientY - resizeEvent.clientY;
                break;
            case 'top':
                height = elRect.height + handleEvent.clientY - resizeEvent.clientY;
                break;
            case 'right':
                width = resizeEvent.clientX - elRect.left;
                break;
            case 'bottom':
                height = resizeEvent.clientY - elRect.top;
                break;
            case 'left':
                width = elRect.width + handleEvent.clientX - resizeEvent.clientX;
        }
        /** @type {?} */
        const size = this.calcSize(width, height, ratio);
        this.sizeCache = Object.assign({}, size);
        this.ngZone.run((/**
         * @return {?}
         */
        () => {
            this.nzResize.emit(Object.assign(Object.assign({}, size), { mouseEvent: event }));
        }));
        if (this.nzPreview) {
            this.previewResize(size);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    endResize(event) {
        this.renderer.setStyle(document.body, 'cursor', '');
        this.renderer.setStyle(document.body, 'user-select', '');
        this.removeGhostElement();
        /** @type {?} */
        const size = this.sizeCache
            ? Object.assign({}, this.sizeCache) : {
            width: this.elRect.width,
            height: this.elRect.height
        };
        this.ngZone.run((/**
         * @return {?}
         */
        () => {
            this.nzResizeEnd.emit(Object.assign(Object.assign({}, size), { mouseEvent: event }));
        }));
        this.sizeCache = null;
        this.currentHandleEvent = null;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    previewResize({ width, height }) {
        this.createGhostElement();
        this.renderer.setStyle(this.ghostElement, 'width', `${width}px`);
        this.renderer.setStyle(this.ghostElement, 'height', `${height}px`);
    }
    /**
     * @return {?}
     */
    createGhostElement() {
        if (!this.ghostElement) {
            this.ghostElement = this.renderer.createElement('div');
            this.renderer.setAttribute(this.ghostElement, 'class', 'nz-resizable-preview');
        }
        this.renderer.appendChild(this.el, this.ghostElement);
    }
    /**
     * @return {?}
     */
    removeGhostElement() {
        if (this.ghostElement) {
            this.renderer.removeChild(this.el, this.ghostElement);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.platform.isBrowser) {
            this.el = this.elementRef.nativeElement;
            this.setPosition();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.ghostElement = null;
        this.sizeCache = null;
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzResizableDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-resizable]',
                exportAs: 'nzResizable',
                providers: [NzResizableService],
                host: {
                    '[class.nz-resizable]': 'true',
                    '[class.nz-resizable-resizing]': 'resizing',
                    '[class.nz-resizable-disabled]': 'nzDisabled',
                    '(mouseenter)': 'onMouseenter()',
                    '(mouseleave)': 'onMouseleave()'
                }
            },] }
];
/** @nocollapse */
NzResizableDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NzResizableService },
    { type: Platform },
    { type: NgZone }
];
NzResizableDirective.propDecorators = {
    nzBounds: [{ type: Input }],
    nzMaxHeight: [{ type: Input }],
    nzMaxWidth: [{ type: Input }],
    nzMinHeight: [{ type: Input }],
    nzMinWidth: [{ type: Input }],
    nzGridColumnCount: [{ type: Input }],
    nzMaxColumn: [{ type: Input }],
    nzMinColumn: [{ type: Input }],
    nzLockAspectRatio: [{ type: Input }],
    nzPreview: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzResize: [{ type: Output }],
    nzResizeEnd: [{ type: Output }],
    nzResizeStart: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzResizableDirective.prototype, "nzLockAspectRatio", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzResizableDirective.prototype, "nzPreview", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzResizableDirective.prototype, "nzDisabled", void 0);
if (false) {
    /** @type {?} */
    NzResizableDirective.ngAcceptInputType_nzLockAspectRatio;
    /** @type {?} */
    NzResizableDirective.ngAcceptInputType_nzPreview;
    /** @type {?} */
    NzResizableDirective.ngAcceptInputType_nzDisabled;
    /** @type {?} */
    NzResizableDirective.prototype.nzBounds;
    /** @type {?} */
    NzResizableDirective.prototype.nzMaxHeight;
    /** @type {?} */
    NzResizableDirective.prototype.nzMaxWidth;
    /** @type {?} */
    NzResizableDirective.prototype.nzMinHeight;
    /** @type {?} */
    NzResizableDirective.prototype.nzMinWidth;
    /** @type {?} */
    NzResizableDirective.prototype.nzGridColumnCount;
    /** @type {?} */
    NzResizableDirective.prototype.nzMaxColumn;
    /** @type {?} */
    NzResizableDirective.prototype.nzMinColumn;
    /** @type {?} */
    NzResizableDirective.prototype.nzLockAspectRatio;
    /** @type {?} */
    NzResizableDirective.prototype.nzPreview;
    /** @type {?} */
    NzResizableDirective.prototype.nzDisabled;
    /** @type {?} */
    NzResizableDirective.prototype.nzResize;
    /** @type {?} */
    NzResizableDirective.prototype.nzResizeEnd;
    /** @type {?} */
    NzResizableDirective.prototype.nzResizeStart;
    /** @type {?} */
    NzResizableDirective.prototype.resizing;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.elRect;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.currentHandleEvent;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.ghostElement;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.sizeCache;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.nzResizableService;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzResizableDirective.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXphYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcmVzaXphYmxlLyIsInNvdXJjZXMiOlsicmVzaXphYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2hJLE9BQU8sRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFHekQsbUNBS0M7OztJQUpDLDhCQUFlOztJQUNmLCtCQUFnQjs7SUFDaEIsNEJBQWE7O0lBQ2IsbUNBQXFDOztBQWV2QyxNQUFNLE9BQU8sb0JBQW9COzs7Ozs7OztJQTRCL0IsWUFDVSxVQUFtQyxFQUNuQyxRQUFtQixFQUNuQixrQkFBc0MsRUFDdEMsUUFBa0IsRUFDbEIsTUFBYztRQUpkLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBQ25DLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQVE7UUE1QmYsYUFBUSxHQUFrRCxRQUFRLENBQUM7UUFHbkUsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsZUFBVSxHQUFX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QUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLO2dDQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLE1BQU07MEJBQ04sTUFBTTs0QkFDTixNQUFNOztBQUxrQjtJQUFmLFlBQVksRUFBRTs7K0RBQW9DO0FBQ25DO0lBQWYsWUFBWSxFQUFFOzt1REFBNEI7QUFDM0I7SUFBZixZQUFZLEVBQUU7O3dEQUE2Qjs7O0lBZHJELHlEQUF5RDs7SUFDekQsaURBQWlEOztJQUNqRCxrREFBa0Q7O0lBRWxELHdDQUE0RTs7SUFDNUUsMkNBQThCOztJQUM5QiwwQ0FBNkI7O0lBQzdCLDJDQUFrQzs7SUFDbEMsMENBQWlDOztJQUNqQyxpREFBd0M7O0lBQ3hDLDJDQUFrQzs7SUFDbEMsMkNBQWtDOztJQUNsQyxpREFBNEQ7O0lBQzVELHlDQUFvRDs7SUFDcEQsMENBQXFEOztJQUNyRCx3Q0FBZ0U7O0lBQ2hFLDJDQUFtRTs7SUFDbkUsNkNBQXFFOztJQUVyRSx3Q0FBaUI7Ozs7O0lBQ2pCLHNDQUFzQzs7Ozs7SUFDdEMsa0RBQXVFOzs7OztJQUN2RSw0Q0FBbUQ7Ozs7O0lBQ25ELGtDQUF5Qjs7Ozs7SUFDekIseUNBQStDOzs7OztJQUMvQyx3Q0FBdUM7Ozs7O0lBR3JDLDBDQUEyQzs7Ozs7SUFDM0Msd0NBQTJCOzs7OztJQUMzQixrREFBOEM7Ozs7O0lBQzlDLHdDQUEwQjs7Ozs7SUFDMUIsc0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBOZ1pvbmUsIE9uRGVzdHJveSwgT3V0cHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IGVuc3VyZUluQm91bmRzLCBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGdldEV2ZW50V2l0aFBvaW50IH0gZnJvbSAnLi9yZXNpemFibGUtdXRpbHMnO1xuaW1wb3J0IHsgTnpSZXNpemFibGVTZXJ2aWNlIH0gZnJvbSAnLi9yZXNpemFibGUuc2VydmljZSc7XG5pbXBvcnQgeyBOelJlc2l6ZUhhbmRsZU1vdXNlRG93bkV2ZW50IH0gZnJvbSAnLi9yZXNpemUtaGFuZGxlLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnpSZXNpemVFdmVudCB7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIGNvbD86IG51bWJlcjtcbiAgbW91c2VFdmVudD86IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50O1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnotcmVzaXphYmxlXScsXG4gIGV4cG9ydEFzOiAnbnpSZXNpemFibGUnLFxuICBwcm92aWRlcnM6IFtOelJlc2l6YWJsZVNlcnZpY2VdLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5uei1yZXNpemFibGVdJzogJ3RydWUnLFxuICAgICdbY2xhc3MubnotcmVzaXphYmxlLXJlc2l6aW5nXSc6ICdyZXNpemluZycsXG4gICAgJ1tjbGFzcy5uei1yZXNpemFibGUtZGlzYWJsZWRdJzogJ256RGlzYWJsZWQnLFxuICAgICcobW91c2VlbnRlciknOiAnb25Nb3VzZWVudGVyKCknLFxuICAgICcobW91c2VsZWF2ZSknOiAnb25Nb3VzZWxlYXZlKCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpSZXNpemFibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpMb2NrQXNwZWN0UmF0aW86IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256UHJldmlldzogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpEaXNhYmxlZDogQm9vbGVhbklucHV0O1xuXG4gIEBJbnB1dCgpIG56Qm91bmRzOiAnd2luZG93JyB8ICdwYXJlbnQnIHwgRWxlbWVudFJlZjxIVE1MRWxlbWVudD4gPSAncGFyZW50JztcbiAgQElucHV0KCkgbnpNYXhIZWlnaHQ/OiBudW1iZXI7XG4gIEBJbnB1dCgpIG56TWF4V2lkdGg/OiBudW1iZXI7XG4gIEBJbnB1dCgpIG56TWluSGVpZ2h0OiBudW1iZXIgPSA0MDtcbiAgQElucHV0KCkgbnpNaW5XaWR0aDogbnVtYmVyID0gNDA7XG4gIEBJbnB1dCgpIG56R3JpZENvbHVtbkNvdW50OiBudW1iZXIgPSAtMTtcbiAgQElucHV0KCkgbnpNYXhDb2x1bW46IG51bWJlciA9IC0xO1xuICBASW5wdXQoKSBuek1pbkNvbHVtbjogbnVtYmVyID0gLTE7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekxvY2tBc3BlY3RSYXRpbzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpQcmV2aWV3OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelJlc2l6ZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpSZXNpemVFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56UmVzaXplRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxOelJlc2l6ZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpSZXNpemVTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8TnpSZXNpemVFdmVudD4oKTtcblxuICByZXNpemluZyA9IGZhbHNlO1xuICBwcml2YXRlIGVsUmVjdCE6IENsaWVudFJlY3QgfCBET01SZWN0O1xuICBwcml2YXRlIGN1cnJlbnRIYW5kbGVFdmVudDogTnpSZXNpemVIYW5kbGVNb3VzZURvd25FdmVudCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGdob3N0RWxlbWVudDogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBlbCE6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHNpemVDYWNoZTogTnpSZXNpemVFdmVudCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIG56UmVzaXphYmxlU2VydmljZTogTnpSZXNpemFibGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgdGhpcy5uelJlc2l6YWJsZVNlcnZpY2UuaGFuZGxlTW91c2VEb3duJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5yZXNpemluZyA9IHRydWU7XG4gICAgICB0aGlzLm56UmVzaXphYmxlU2VydmljZS5zdGFydFJlc2l6aW5nKGV2ZW50Lm1vdXNlRXZlbnQpO1xuICAgICAgdGhpcy5jdXJyZW50SGFuZGxlRXZlbnQgPSBldmVudDtcbiAgICAgIHRoaXMuc2V0Q3Vyc29yKCk7XG4gICAgICB0aGlzLm56UmVzaXplU3RhcnQuZW1pdCh7XG4gICAgICAgIG1vdXNlRXZlbnQ6IGV2ZW50Lm1vdXNlRXZlbnRcbiAgICAgIH0pO1xuICAgICAgdGhpcy5lbFJlY3QgPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5uelJlc2l6YWJsZVNlcnZpY2UuZG9jdW1lbnRNb3VzZVVwJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLnJlc2l6aW5nKSB7XG4gICAgICAgIHRoaXMucmVzaXppbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5uelJlc2l6YWJsZVNlcnZpY2UuZG9jdW1lbnRNb3VzZVVwJC5uZXh0KCk7XG4gICAgICAgIHRoaXMuZW5kUmVzaXplKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMubnpSZXNpemFibGVTZXJ2aWNlLmRvY3VtZW50TW91c2VNb3ZlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLnJlc2l6aW5nKSB7XG4gICAgICAgIHRoaXMucmVzaXplKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uTW91c2VlbnRlcigpOiB2b2lkIHtcbiAgICB0aGlzLm56UmVzaXphYmxlU2VydmljZS5tb3VzZUVudGVyZWQkLm5leHQodHJ1ZSk7XG4gIH1cblxuICBvbk1vdXNlbGVhdmUoKTogdm9pZCB7XG4gICAgdGhpcy5uelJlc2l6YWJsZVNlcnZpY2UubW91c2VFbnRlcmVkJC5uZXh0KGZhbHNlKTtcbiAgfVxuXG4gIHNldFBvc2l0aW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKS5wb3NpdGlvbjtcbiAgICBpZiAocG9zaXRpb24gPT09ICdzdGF0aWMnIHx8ICFwb3NpdGlvbikge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcbiAgICB9XG4gIH1cblxuICBjYWxjU2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcmF0aW86IG51bWJlcik6IE56UmVzaXplRXZlbnQge1xuICAgIGxldCBuZXdXaWR0aDogbnVtYmVyO1xuICAgIGxldCBuZXdIZWlnaHQ6IG51bWJlcjtcbiAgICBsZXQgbWF4V2lkdGg6IG51bWJlcjtcbiAgICBsZXQgbWF4SGVpZ2h0OiBudW1iZXI7XG4gICAgbGV0IGNvbCA9IDA7XG4gICAgbGV0IHNwYW5XaWR0aCA9IDA7XG4gICAgbGV0IG1pbldpZHRoID0gdGhpcy5uek1pbldpZHRoO1xuICAgIGxldCBib3VuZFdpZHRoID0gSW5maW5pdHk7XG4gICAgbGV0IGJvdW5kSGVpZ2h0ID0gSW5maW5pdHk7XG4gICAgaWYgKHRoaXMubnpCb3VuZHMgPT09ICdwYXJlbnQnKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbCk7XG4gICAgICBpZiAocGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgYm91bmRXaWR0aCA9IHBhcmVudFJlY3Qud2lkdGg7XG4gICAgICAgIGJvdW5kSGVpZ2h0ID0gcGFyZW50UmVjdC5oZWlnaHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLm56Qm91bmRzID09PSAnd2luZG93Jykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGJvdW5kV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgYm91bmRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLm56Qm91bmRzICYmIHRoaXMubnpCb3VuZHMubmF0aXZlRWxlbWVudCAmJiB0aGlzLm56Qm91bmRzLm5hdGl2ZUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgY29uc3QgYm91bmRzUmVjdCA9IHRoaXMubnpCb3VuZHMubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGJvdW5kV2lkdGggPSBib3VuZHNSZWN0LndpZHRoO1xuICAgICAgYm91bmRIZWlnaHQgPSBib3VuZHNSZWN0LmhlaWdodDtcbiAgICB9XG5cbiAgICBtYXhXaWR0aCA9IGVuc3VyZUluQm91bmRzKHRoaXMubnpNYXhXaWR0aCEsIGJvdW5kV2lkdGgpO1xuICAgIG1heEhlaWdodCA9IGVuc3VyZUluQm91bmRzKHRoaXMubnpNYXhIZWlnaHQhLCBib3VuZEhlaWdodCk7XG5cbiAgICBpZiAodGhpcy5uekdyaWRDb2x1bW5Db3VudCAhPT0gLTEpIHtcbiAgICAgIHNwYW5XaWR0aCA9IG1heFdpZHRoIC8gdGhpcy5uekdyaWRDb2x1bW5Db3VudDtcbiAgICAgIG1pbldpZHRoID0gdGhpcy5uek1pbkNvbHVtbiAhPT0gLTEgPyBzcGFuV2lkdGggKiB0aGlzLm56TWluQ29sdW1uIDogbWluV2lkdGg7XG4gICAgICBtYXhXaWR0aCA9IHRoaXMubnpNYXhDb2x1bW4gIT09IC0xID8gc3BhbldpZHRoICogdGhpcy5uek1heENvbHVtbiA6IG1heFdpZHRoO1xuICAgIH1cblxuICAgIGlmIChyYXRpbyAhPT0gLTEpIHtcbiAgICAgIGlmICgvKGxlZnR8cmlnaHQpL2kudGVzdCh0aGlzLmN1cnJlbnRIYW5kbGVFdmVudCEuZGlyZWN0aW9uKSkge1xuICAgICAgICBuZXdXaWR0aCA9IE1hdGgubWluKE1hdGgubWF4KHdpZHRoLCBtaW5XaWR0aCksIG1heFdpZHRoKTtcbiAgICAgICAgbmV3SGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5tYXgobmV3V2lkdGggLyByYXRpbywgdGhpcy5uek1pbkhlaWdodCksIG1heEhlaWdodCk7XG4gICAgICAgIGlmIChuZXdIZWlnaHQgPj0gbWF4SGVpZ2h0IHx8IG5ld0hlaWdodCA8PSB0aGlzLm56TWluSGVpZ2h0KSB7XG4gICAgICAgICAgbmV3V2lkdGggPSBNYXRoLm1pbihNYXRoLm1heChuZXdIZWlnaHQgKiByYXRpbywgbWluV2lkdGgpLCBtYXhXaWR0aCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0hlaWdodCA9IE1hdGgubWluKE1hdGgubWF4KGhlaWdodCwgdGhpcy5uek1pbkhlaWdodCksIG1heEhlaWdodCk7XG4gICAgICAgIG5ld1dpZHRoID0gTWF0aC5taW4oTWF0aC5tYXgobmV3SGVpZ2h0ICogcmF0aW8sIG1pbldpZHRoKSwgbWF4V2lkdGgpO1xuICAgICAgICBpZiAobmV3V2lkdGggPj0gbWF4V2lkdGggfHwgbmV3V2lkdGggPD0gbWluV2lkdGgpIHtcbiAgICAgICAgICBuZXdIZWlnaHQgPSBNYXRoLm1pbihNYXRoLm1heChuZXdXaWR0aCAvIHJhdGlvLCB0aGlzLm56TWluSGVpZ2h0KSwgbWF4SGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdXaWR0aCA9IE1hdGgubWluKE1hdGgubWF4KHdpZHRoLCBtaW5XaWR0aCksIG1heFdpZHRoKTtcbiAgICAgIG5ld0hlaWdodCA9IE1hdGgubWluKE1hdGgubWF4KGhlaWdodCwgdGhpcy5uek1pbkhlaWdodCksIG1heEhlaWdodCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubnpHcmlkQ29sdW1uQ291bnQgIT09IC0xKSB7XG4gICAgICBjb2wgPSBNYXRoLnJvdW5kKG5ld1dpZHRoIC8gc3BhbldpZHRoKTtcbiAgICAgIG5ld1dpZHRoID0gY29sICogc3BhbldpZHRoO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBjb2wsXG4gICAgICB3aWR0aDogbmV3V2lkdGgsXG4gICAgICBoZWlnaHQ6IG5ld0hlaWdodFxuICAgIH07XG4gIH1cblxuICBzZXRDdXJzb3IoKTogdm9pZCB7XG4gICAgc3dpdGNoICh0aGlzLmN1cnJlbnRIYW5kbGVFdmVudCEuZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShkb2N1bWVudC5ib2R5LCAnY3Vyc29yJywgJ2V3LXJlc2l6ZScpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGRvY3VtZW50LmJvZHksICdjdXJzb3InLCAnbnMtcmVzaXplJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndG9wTGVmdCc6XG4gICAgICBjYXNlICdib3R0b21SaWdodCc6XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgJ2N1cnNvcicsICdud3NlLXJlc2l6ZScpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RvcFJpZ2h0JzpcbiAgICAgIGNhc2UgJ2JvdHRvbUxlZnQnOlxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGRvY3VtZW50LmJvZHksICdjdXJzb3InLCAnbmVzdy1yZXNpemUnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgJ3VzZXItc2VsZWN0JywgJ25vbmUnKTtcbiAgfVxuXG4gIHJlc2l6ZShldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBlbFJlY3QgPSB0aGlzLmVsUmVjdDtcbiAgICBjb25zdCByZXNpemVFdmVudCA9IGdldEV2ZW50V2l0aFBvaW50KGV2ZW50KTtcbiAgICBjb25zdCBoYW5kbGVFdmVudCA9IGdldEV2ZW50V2l0aFBvaW50KHRoaXMuY3VycmVudEhhbmRsZUV2ZW50IS5tb3VzZUV2ZW50KTtcbiAgICBsZXQgd2lkdGggPSBlbFJlY3Qud2lkdGg7XG4gICAgbGV0IGhlaWdodCA9IGVsUmVjdC5oZWlnaHQ7XG4gICAgY29uc3QgcmF0aW8gPSB0aGlzLm56TG9ja0FzcGVjdFJhdGlvID8gd2lkdGggLyBoZWlnaHQgOiAtMTtcbiAgICBzd2l0Y2ggKHRoaXMuY3VycmVudEhhbmRsZUV2ZW50IS5kaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2JvdHRvbVJpZ2h0JzpcbiAgICAgICAgd2lkdGggPSByZXNpemVFdmVudC5jbGllbnRYIC0gZWxSZWN0LmxlZnQ7XG4gICAgICAgIGhlaWdodCA9IHJlc2l6ZUV2ZW50LmNsaWVudFkgLSBlbFJlY3QudG9wO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvdHRvbUxlZnQnOlxuICAgICAgICB3aWR0aCA9IGVsUmVjdC53aWR0aCArIGhhbmRsZUV2ZW50LmNsaWVudFggLSByZXNpemVFdmVudC5jbGllbnRYO1xuICAgICAgICBoZWlnaHQgPSByZXNpemVFdmVudC5jbGllbnRZIC0gZWxSZWN0LnRvcDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b3BSaWdodCc6XG4gICAgICAgIHdpZHRoID0gcmVzaXplRXZlbnQuY2xpZW50WCAtIGVsUmVjdC5sZWZ0O1xuICAgICAgICBoZWlnaHQgPSBlbFJlY3QuaGVpZ2h0ICsgaGFuZGxlRXZlbnQuY2xpZW50WSAtIHJlc2l6ZUV2ZW50LmNsaWVudFk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndG9wTGVmdCc6XG4gICAgICAgIHdpZHRoID0gZWxSZWN0LndpZHRoICsgaGFuZGxlRXZlbnQuY2xpZW50WCAtIHJlc2l6ZUV2ZW50LmNsaWVudFg7XG4gICAgICAgIGhlaWdodCA9IGVsUmVjdC5oZWlnaHQgKyBoYW5kbGVFdmVudC5jbGllbnRZIC0gcmVzaXplRXZlbnQuY2xpZW50WTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b3AnOlxuICAgICAgICBoZWlnaHQgPSBlbFJlY3QuaGVpZ2h0ICsgaGFuZGxlRXZlbnQuY2xpZW50WSAtIHJlc2l6ZUV2ZW50LmNsaWVudFk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICB3aWR0aCA9IHJlc2l6ZUV2ZW50LmNsaWVudFggLSBlbFJlY3QubGVmdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICBoZWlnaHQgPSByZXNpemVFdmVudC5jbGllbnRZIC0gZWxSZWN0LnRvcDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgd2lkdGggPSBlbFJlY3Qud2lkdGggKyBoYW5kbGVFdmVudC5jbGllbnRYIC0gcmVzaXplRXZlbnQuY2xpZW50WDtcbiAgICB9XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuY2FsY1NpemUod2lkdGgsIGhlaWdodCwgcmF0aW8pO1xuICAgIHRoaXMuc2l6ZUNhY2hlID0geyAuLi5zaXplIH07XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMubnpSZXNpemUuZW1pdCh7XG4gICAgICAgIC4uLnNpemUsXG4gICAgICAgIG1vdXNlRXZlbnQ6IGV2ZW50XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5uelByZXZpZXcpIHtcbiAgICAgIHRoaXMucHJldmlld1Jlc2l6ZShzaXplKTtcbiAgICB9XG4gIH1cblxuICBlbmRSZXNpemUoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShkb2N1bWVudC5ib2R5LCAnY3Vyc29yJywgJycpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgJ3VzZXItc2VsZWN0JywgJycpO1xuICAgIHRoaXMucmVtb3ZlR2hvc3RFbGVtZW50KCk7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuc2l6ZUNhY2hlXG4gICAgICA/IHsgLi4udGhpcy5zaXplQ2FjaGUgfVxuICAgICAgOiB7XG4gICAgICAgICAgd2lkdGg6IHRoaXMuZWxSZWN0LndpZHRoLFxuICAgICAgICAgIGhlaWdodDogdGhpcy5lbFJlY3QuaGVpZ2h0XG4gICAgICAgIH07XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMubnpSZXNpemVFbmQuZW1pdCh7XG4gICAgICAgIC4uLnNpemUsXG4gICAgICAgIG1vdXNlRXZlbnQ6IGV2ZW50XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLnNpemVDYWNoZSA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50SGFuZGxlRXZlbnQgPSBudWxsO1xuICB9XG5cbiAgcHJldmlld1Jlc2l6ZSh7IHdpZHRoLCBoZWlnaHQgfTogTnpSZXNpemVFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuY3JlYXRlR2hvc3RFbGVtZW50KCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmdob3N0RWxlbWVudCwgJ3dpZHRoJywgYCR7d2lkdGh9cHhgKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZ2hvc3RFbGVtZW50LCAnaGVpZ2h0JywgYCR7aGVpZ2h0fXB4YCk7XG4gIH1cblxuICBjcmVhdGVHaG9zdEVsZW1lbnQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmdob3N0RWxlbWVudCkge1xuICAgICAgdGhpcy5naG9zdEVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5naG9zdEVsZW1lbnQsICdjbGFzcycsICduei1yZXNpemFibGUtcHJldmlldycpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZWwsIHRoaXMuZ2hvc3RFbGVtZW50KTtcbiAgfVxuXG4gIHJlbW92ZUdob3N0RWxlbWVudCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5naG9zdEVsZW1lbnQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5lbCwgdGhpcy5naG9zdEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuZWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmdob3N0RWxlbWVudCA9IG51bGw7XG4gICAgdGhpcy5zaXplQ2FjaGUgPSBudWxsO1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19