/**
 * @fileoverview added by tsickle
 * Generated from: resizable.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __decorate, __metadata } from "tslib";
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
var NzResizableDirective = /** @class */ (function () {
    function NzResizableDirective(elementRef, renderer, nzResizableService, platform, ngZone) {
        var _this = this;
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
        function (event) {
            if (_this.nzDisabled) {
                return;
            }
            _this.resizing = true;
            _this.nzResizableService.startResizing(event.mouseEvent);
            _this.currentHandleEvent = event;
            _this.setCursor();
            _this.nzResizeStart.emit({
                mouseEvent: event.mouseEvent
            });
            _this.elRect = _this.el.getBoundingClientRect();
        }));
        this.nzResizableService.documentMouseUp$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (_this.resizing) {
                _this.resizing = false;
                _this.nzResizableService.documentMouseUp$.next();
                _this.endResize(event);
            }
        }));
        this.nzResizableService.documentMouseMove$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (_this.resizing) {
                _this.resize(event);
            }
        }));
    }
    /**
     * @return {?}
     */
    NzResizableDirective.prototype.onMouseenter = /**
     * @return {?}
     */
    function () {
        this.nzResizableService.mouseEntered$.next(true);
    };
    /**
     * @return {?}
     */
    NzResizableDirective.prototype.onMouseleave = /**
     * @return {?}
     */
    function () {
        this.nzResizableService.mouseEntered$.next(false);
    };
    /**
     * @return {?}
     */
    NzResizableDirective.prototype.setPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var position = getComputedStyle(this.el).position;
        if (position === 'static' || !position) {
            this.renderer.setStyle(this.el, 'position', 'relative');
        }
    };
    /**
     * @param {?} width
     * @param {?} height
     * @param {?} ratio
     * @return {?}
     */
    NzResizableDirective.prototype.calcSize = /**
     * @param {?} width
     * @param {?} height
     * @param {?} ratio
     * @return {?}
     */
    function (width, height, ratio) {
        /** @type {?} */
        var newWidth;
        /** @type {?} */
        var newHeight;
        /** @type {?} */
        var maxWidth;
        /** @type {?} */
        var maxHeight;
        /** @type {?} */
        var col = 0;
        /** @type {?} */
        var spanWidth = 0;
        /** @type {?} */
        var minWidth = this.nzMinWidth;
        /** @type {?} */
        var boundWidth = Infinity;
        /** @type {?} */
        var boundHeight = Infinity;
        if (this.nzBounds === 'parent') {
            /** @type {?} */
            var parent_1 = this.renderer.parentNode(this.el);
            if (parent_1 instanceof HTMLElement) {
                /** @type {?} */
                var parentRect = parent_1.getBoundingClientRect();
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
            var boundsRect = this.nzBounds.nativeElement.getBoundingClientRect();
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
            col: col,
            width: newWidth,
            height: newHeight
        };
    };
    /**
     * @return {?}
     */
    NzResizableDirective.prototype.setCursor = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzResizableDirective.prototype.resize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var elRect = this.elRect;
        /** @type {?} */
        var resizeEvent = getEventWithPoint(event);
        /** @type {?} */
        var handleEvent = getEventWithPoint((/** @type {?} */ (this.currentHandleEvent)).mouseEvent);
        /** @type {?} */
        var width = elRect.width;
        /** @type {?} */
        var height = elRect.height;
        /** @type {?} */
        var ratio = this.nzLockAspectRatio ? width / height : -1;
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
        var size = this.calcSize(width, height, ratio);
        this.sizeCache = __assign({}, size);
        this.ngZone.run((/**
         * @return {?}
         */
        function () {
            _this.nzResize.emit(__assign(__assign({}, size), { mouseEvent: event }));
        }));
        if (this.nzPreview) {
            this.previewResize(size);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzResizableDirective.prototype.endResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        this.renderer.setStyle(document.body, 'cursor', '');
        this.renderer.setStyle(document.body, 'user-select', '');
        this.removeGhostElement();
        /** @type {?} */
        var size = this.sizeCache
            ? __assign({}, this.sizeCache) : {
            width: this.elRect.width,
            height: this.elRect.height
        };
        this.ngZone.run((/**
         * @return {?}
         */
        function () {
            _this.nzResizeEnd.emit(__assign(__assign({}, size), { mouseEvent: event }));
        }));
        this.sizeCache = null;
        this.currentHandleEvent = null;
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    NzResizableDirective.prototype.previewResize = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var width = _a.width, height = _a.height;
        this.createGhostElement();
        this.renderer.setStyle(this.ghostElement, 'width', width + "px");
        this.renderer.setStyle(this.ghostElement, 'height', height + "px");
    };
    /**
     * @return {?}
     */
    NzResizableDirective.prototype.createGhostElement = /**
     * @return {?}
     */
    function () {
        if (!this.ghostElement) {
            this.ghostElement = this.renderer.createElement('div');
            this.renderer.setAttribute(this.ghostElement, 'class', 'nz-resizable-preview');
        }
        this.renderer.appendChild(this.el, this.ghostElement);
    };
    /**
     * @return {?}
     */
    NzResizableDirective.prototype.removeGhostElement = /**
     * @return {?}
     */
    function () {
        if (this.ghostElement) {
            this.renderer.removeChild(this.el, this.ghostElement);
        }
    };
    /**
     * @return {?}
     */
    NzResizableDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.platform.isBrowser) {
            this.el = this.elementRef.nativeElement;
            this.setPosition();
        }
    };
    /**
     * @return {?}
     */
    NzResizableDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.ghostElement = null;
        this.sizeCache = null;
        this.destroy$.next();
        this.destroy$.complete();
    };
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
    NzResizableDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NzResizableService },
        { type: Platform },
        { type: NgZone }
    ]; };
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
    return NzResizableDirective;
}());
export { NzResizableDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXphYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcmVzaXphYmxlLyIsInNvdXJjZXMiOlsicmVzaXphYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2hJLE9BQU8sRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFHekQsbUNBS0M7OztJQUpDLDhCQUFlOztJQUNmLCtCQUFnQjs7SUFDaEIsNEJBQWE7O0lBQ2IsbUNBQXFDOztBQUd2QztJQXdDRSw4QkFDVSxVQUFtQyxFQUNuQyxRQUFtQixFQUNuQixrQkFBc0MsRUFDdEMsUUFBa0IsRUFDbEIsTUFBYztRQUx4QixpQkFrQ0M7UUFqQ1MsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFDbkMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQTVCZixhQUFRLEdBQWtELFFBQVEsQ0FBQztRQUduRSxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixlQUFVLEdBQVcsRUFBRSxDQUFD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QVE7Z0JBQ21ELE1BQU07OzsyQkFtQ3ZFLEtBQUs7OEJBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7NkJBQ0wsS0FBSztvQ0FDTCxLQUFLOzhCQUNMLEtBQUs7OEJBQ0wsS0FBSztvQ0FDTCxLQUFLOzRCQUNMLEtBQUs7NkJBQ0wsS0FBSzsyQkFDTCxNQUFNOzhCQUNOLE1BQU07Z0NBQ04sTUFBTTs7SUFMa0I7UUFBZixZQUFZLEVBQUU7O21FQUFvQztJQUNuQztRQUFmLFlBQVksRUFBRTs7MkRBQTRCO0lBQzNCO1FBQWYsWUFBWSxFQUFFOzs0REFBNkI7SUFnUXZELDJCQUFDO0NBQUEsQUEzUkQsSUEyUkM7U0EvUVksb0JBQW9COzs7SUFDL0IseURBQXlEOztJQUN6RCxpREFBaUQ7O0lBQ2pELGtEQUFrRDs7SUFFbEQsd0NBQTRFOztJQUM1RSwyQ0FBOEI7O0lBQzlCLDBDQUE2Qjs7SUFDN0IsMkNBQWtDOztJQUNsQywwQ0FBaUM7O0lBQ2pDLGlEQUF3Qzs7SUFDeEMsMkNBQWtDOztJQUNsQywyQ0FBa0M7O0lBQ2xDLGlEQUE0RDs7SUFDNUQseUNBQW9EOztJQUNwRCwwQ0FBcUQ7O0lBQ3JELHdDQUFnRTs7SUFDaEUsMkNBQW1FOztJQUNuRSw2Q0FBcUU7O0lBRXJFLHdDQUFpQjs7Ozs7SUFDakIsc0NBQXNDOzs7OztJQUN0QyxrREFBdUU7Ozs7O0lBQ3ZFLDRDQUFtRDs7Ozs7SUFDbkQsa0NBQXlCOzs7OztJQUN6Qix5Q0FBK0M7Ozs7O0lBQy9DLHdDQUF1Qzs7Ozs7SUFHckMsMENBQTJDOzs7OztJQUMzQyx3Q0FBMkI7Ozs7O0lBQzNCLGtEQUE4Qzs7Ozs7SUFDOUMsd0NBQTBCOzs7OztJQUMxQixzQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE5nWm9uZSwgT25EZXN0cm95LCBPdXRwdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgZW5zdXJlSW5Cb3VuZHMsIElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgZ2V0RXZlbnRXaXRoUG9pbnQgfSBmcm9tICcuL3Jlc2l6YWJsZS11dGlscyc7XG5pbXBvcnQgeyBOelJlc2l6YWJsZVNlcnZpY2UgfSBmcm9tICcuL3Jlc2l6YWJsZS5zZXJ2aWNlJztcbmltcG9ydCB7IE56UmVzaXplSGFuZGxlTW91c2VEb3duRXZlbnQgfSBmcm9tICcuL3Jlc2l6ZS1oYW5kbGUuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBOelJlc2l6ZUV2ZW50IHtcbiAgd2lkdGg/OiBudW1iZXI7XG4gIGhlaWdodD86IG51bWJlcjtcbiAgY29sPzogbnVtYmVyO1xuICBtb3VzZUV2ZW50PzogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQ7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuei1yZXNpemFibGVdJyxcbiAgZXhwb3J0QXM6ICduelJlc2l6YWJsZScsXG4gIHByb3ZpZGVyczogW056UmVzaXphYmxlU2VydmljZV0sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLm56LXJlc2l6YWJsZV0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5uei1yZXNpemFibGUtcmVzaXppbmddJzogJ3Jlc2l6aW5nJyxcbiAgICAnW2NsYXNzLm56LXJlc2l6YWJsZS1kaXNhYmxlZF0nOiAnbnpEaXNhYmxlZCcsXG4gICAgJyhtb3VzZWVudGVyKSc6ICdvbk1vdXNlZW50ZXIoKScsXG4gICAgJyhtb3VzZWxlYXZlKSc6ICdvbk1vdXNlbGVhdmUoKSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelJlc2l6YWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekxvY2tBc3BlY3RSYXRpbzogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpQcmV2aWV3OiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekRpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG5cbiAgQElucHV0KCkgbnpCb3VuZHM6ICd3aW5kb3cnIHwgJ3BhcmVudCcgfCBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiA9ICdwYXJlbnQnO1xuICBASW5wdXQoKSBuek1heEhlaWdodD86IG51bWJlcjtcbiAgQElucHV0KCkgbnpNYXhXaWR0aD86IG51bWJlcjtcbiAgQElucHV0KCkgbnpNaW5IZWlnaHQ6IG51bWJlciA9IDQwO1xuICBASW5wdXQoKSBuek1pbldpZHRoOiBudW1iZXIgPSA0MDtcbiAgQElucHV0KCkgbnpHcmlkQ29sdW1uQ291bnQ6IG51bWJlciA9IC0xO1xuICBASW5wdXQoKSBuek1heENvbHVtbjogbnVtYmVyID0gLTE7XG4gIEBJbnB1dCgpIG56TWluQ29sdW1uOiBudW1iZXIgPSAtMTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TG9ja0FzcGVjdFJhdGlvOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelByZXZpZXc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56UmVzaXplID0gbmV3IEV2ZW50RW1pdHRlcjxOelJlc2l6ZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpSZXNpemVFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPE56UmVzaXplRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelJlc2l6ZVN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxOelJlc2l6ZUV2ZW50PigpO1xuXG4gIHJlc2l6aW5nID0gZmFsc2U7XG4gIHByaXZhdGUgZWxSZWN0ITogQ2xpZW50UmVjdCB8IERPTVJlY3Q7XG4gIHByaXZhdGUgY3VycmVudEhhbmRsZUV2ZW50OiBOelJlc2l6ZUhhbmRsZU1vdXNlRG93bkV2ZW50IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgZ2hvc3RFbGVtZW50OiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGVsITogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgc2l6ZUNhY2hlOiBOelJlc2l6ZUV2ZW50IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgbnpSZXNpemFibGVTZXJ2aWNlOiBOelJlc2l6YWJsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICB0aGlzLm56UmVzaXphYmxlU2VydmljZS5oYW5kbGVNb3VzZURvd24kLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMubnpEaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnJlc2l6aW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMubnpSZXNpemFibGVTZXJ2aWNlLnN0YXJ0UmVzaXppbmcoZXZlbnQubW91c2VFdmVudCk7XG4gICAgICB0aGlzLmN1cnJlbnRIYW5kbGVFdmVudCA9IGV2ZW50O1xuICAgICAgdGhpcy5zZXRDdXJzb3IoKTtcbiAgICAgIHRoaXMubnpSZXNpemVTdGFydC5lbWl0KHtcbiAgICAgICAgbW91c2VFdmVudDogZXZlbnQubW91c2VFdmVudFxuICAgICAgfSk7XG4gICAgICB0aGlzLmVsUmVjdCA9IHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm56UmVzaXphYmxlU2VydmljZS5kb2N1bWVudE1vdXNlVXAkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMucmVzaXppbmcpIHtcbiAgICAgICAgdGhpcy5yZXNpemluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm56UmVzaXphYmxlU2VydmljZS5kb2N1bWVudE1vdXNlVXAkLm5leHQoKTtcbiAgICAgICAgdGhpcy5lbmRSZXNpemUoZXZlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5uelJlc2l6YWJsZVNlcnZpY2UuZG9jdW1lbnRNb3VzZU1vdmUkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMucmVzaXppbmcpIHtcbiAgICAgICAgdGhpcy5yZXNpemUoZXZlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb25Nb3VzZWVudGVyKCk6IHZvaWQge1xuICAgIHRoaXMubnpSZXNpemFibGVTZXJ2aWNlLm1vdXNlRW50ZXJlZCQubmV4dCh0cnVlKTtcbiAgfVxuXG4gIG9uTW91c2VsZWF2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLm56UmVzaXphYmxlU2VydmljZS5tb3VzZUVudGVyZWQkLm5leHQoZmFsc2UpO1xuICB9XG5cbiAgc2V0UG9zaXRpb24oKTogdm9pZCB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpLnBvc2l0aW9uO1xuICAgIGlmIChwb3NpdGlvbiA9PT0gJ3N0YXRpYycgfHwgIXBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xuICAgIH1cbiAgfVxuXG4gIGNhbGNTaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCByYXRpbzogbnVtYmVyKTogTnpSZXNpemVFdmVudCB7XG4gICAgbGV0IG5ld1dpZHRoOiBudW1iZXI7XG4gICAgbGV0IG5ld0hlaWdodDogbnVtYmVyO1xuICAgIGxldCBtYXhXaWR0aDogbnVtYmVyO1xuICAgIGxldCBtYXhIZWlnaHQ6IG51bWJlcjtcbiAgICBsZXQgY29sID0gMDtcbiAgICBsZXQgc3BhbldpZHRoID0gMDtcbiAgICBsZXQgbWluV2lkdGggPSB0aGlzLm56TWluV2lkdGg7XG4gICAgbGV0IGJvdW5kV2lkdGggPSBJbmZpbml0eTtcbiAgICBsZXQgYm91bmRIZWlnaHQgPSBJbmZpbml0eTtcbiAgICBpZiAodGhpcy5uekJvdW5kcyA9PT0gJ3BhcmVudCcpIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmVsKTtcbiAgICAgIGlmIChwYXJlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBjb25zdCBwYXJlbnRSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBib3VuZFdpZHRoID0gcGFyZW50UmVjdC53aWR0aDtcbiAgICAgICAgYm91bmRIZWlnaHQgPSBwYXJlbnRSZWN0LmhlaWdodDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMubnpCb3VuZHMgPT09ICd3aW5kb3cnKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgYm91bmRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBib3VuZEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMubnpCb3VuZHMgJiYgdGhpcy5uekJvdW5kcy5uYXRpdmVFbGVtZW50ICYmIHRoaXMubnpCb3VuZHMubmF0aXZlRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICBjb25zdCBib3VuZHNSZWN0ID0gdGhpcy5uekJvdW5kcy5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgYm91bmRXaWR0aCA9IGJvdW5kc1JlY3Qud2lkdGg7XG4gICAgICBib3VuZEhlaWdodCA9IGJvdW5kc1JlY3QuaGVpZ2h0O1xuICAgIH1cblxuICAgIG1heFdpZHRoID0gZW5zdXJlSW5Cb3VuZHModGhpcy5uek1heFdpZHRoISwgYm91bmRXaWR0aCk7XG4gICAgbWF4SGVpZ2h0ID0gZW5zdXJlSW5Cb3VuZHModGhpcy5uek1heEhlaWdodCEsIGJvdW5kSGVpZ2h0KTtcblxuICAgIGlmICh0aGlzLm56R3JpZENvbHVtbkNvdW50ICE9PSAtMSkge1xuICAgICAgc3BhbldpZHRoID0gbWF4V2lkdGggLyB0aGlzLm56R3JpZENvbHVtbkNvdW50O1xuICAgICAgbWluV2lkdGggPSB0aGlzLm56TWluQ29sdW1uICE9PSAtMSA/IHNwYW5XaWR0aCAqIHRoaXMubnpNaW5Db2x1bW4gOiBtaW5XaWR0aDtcbiAgICAgIG1heFdpZHRoID0gdGhpcy5uek1heENvbHVtbiAhPT0gLTEgPyBzcGFuV2lkdGggKiB0aGlzLm56TWF4Q29sdW1uIDogbWF4V2lkdGg7XG4gICAgfVxuXG4gICAgaWYgKHJhdGlvICE9PSAtMSkge1xuICAgICAgaWYgKC8obGVmdHxyaWdodCkvaS50ZXN0KHRoaXMuY3VycmVudEhhbmRsZUV2ZW50IS5kaXJlY3Rpb24pKSB7XG4gICAgICAgIG5ld1dpZHRoID0gTWF0aC5taW4oTWF0aC5tYXgod2lkdGgsIG1pbldpZHRoKSwgbWF4V2lkdGgpO1xuICAgICAgICBuZXdIZWlnaHQgPSBNYXRoLm1pbihNYXRoLm1heChuZXdXaWR0aCAvIHJhdGlvLCB0aGlzLm56TWluSGVpZ2h0KSwgbWF4SGVpZ2h0KTtcbiAgICAgICAgaWYgKG5ld0hlaWdodCA+PSBtYXhIZWlnaHQgfHwgbmV3SGVpZ2h0IDw9IHRoaXMubnpNaW5IZWlnaHQpIHtcbiAgICAgICAgICBuZXdXaWR0aCA9IE1hdGgubWluKE1hdGgubWF4KG5ld0hlaWdodCAqIHJhdGlvLCBtaW5XaWR0aCksIG1heFdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3SGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5tYXgoaGVpZ2h0LCB0aGlzLm56TWluSGVpZ2h0KSwgbWF4SGVpZ2h0KTtcbiAgICAgICAgbmV3V2lkdGggPSBNYXRoLm1pbihNYXRoLm1heChuZXdIZWlnaHQgKiByYXRpbywgbWluV2lkdGgpLCBtYXhXaWR0aCk7XG4gICAgICAgIGlmIChuZXdXaWR0aCA+PSBtYXhXaWR0aCB8fCBuZXdXaWR0aCA8PSBtaW5XaWR0aCkge1xuICAgICAgICAgIG5ld0hlaWdodCA9IE1hdGgubWluKE1hdGgubWF4KG5ld1dpZHRoIC8gcmF0aW8sIHRoaXMubnpNaW5IZWlnaHQpLCBtYXhIZWlnaHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1dpZHRoID0gTWF0aC5taW4oTWF0aC5tYXgod2lkdGgsIG1pbldpZHRoKSwgbWF4V2lkdGgpO1xuICAgICAgbmV3SGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5tYXgoaGVpZ2h0LCB0aGlzLm56TWluSGVpZ2h0KSwgbWF4SGVpZ2h0KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5uekdyaWRDb2x1bW5Db3VudCAhPT0gLTEpIHtcbiAgICAgIGNvbCA9IE1hdGgucm91bmQobmV3V2lkdGggLyBzcGFuV2lkdGgpO1xuICAgICAgbmV3V2lkdGggPSBjb2wgKiBzcGFuV2lkdGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbCxcbiAgICAgIHdpZHRoOiBuZXdXaWR0aCxcbiAgICAgIGhlaWdodDogbmV3SGVpZ2h0XG4gICAgfTtcbiAgfVxuXG4gIHNldEN1cnNvcigpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKHRoaXMuY3VycmVudEhhbmRsZUV2ZW50IS5kaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGRvY3VtZW50LmJvZHksICdjdXJzb3InLCAnZXctcmVzaXplJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndG9wJzpcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgJ2N1cnNvcicsICducy1yZXNpemUnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b3BMZWZ0JzpcbiAgICAgIGNhc2UgJ2JvdHRvbVJpZ2h0JzpcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShkb2N1bWVudC5ib2R5LCAnY3Vyc29yJywgJ253c2UtcmVzaXplJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndG9wUmlnaHQnOlxuICAgICAgY2FzZSAnYm90dG9tTGVmdCc6XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgJ2N1cnNvcicsICduZXN3LXJlc2l6ZScpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShkb2N1bWVudC5ib2R5LCAndXNlci1zZWxlY3QnLCAnbm9uZScpO1xuICB9XG5cbiAgcmVzaXplKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGVsUmVjdCA9IHRoaXMuZWxSZWN0O1xuICAgIGNvbnN0IHJlc2l6ZUV2ZW50ID0gZ2V0RXZlbnRXaXRoUG9pbnQoZXZlbnQpO1xuICAgIGNvbnN0IGhhbmRsZUV2ZW50ID0gZ2V0RXZlbnRXaXRoUG9pbnQodGhpcy5jdXJyZW50SGFuZGxlRXZlbnQhLm1vdXNlRXZlbnQpO1xuICAgIGxldCB3aWR0aCA9IGVsUmVjdC53aWR0aDtcbiAgICBsZXQgaGVpZ2h0ID0gZWxSZWN0LmhlaWdodDtcbiAgICBjb25zdCByYXRpbyA9IHRoaXMubnpMb2NrQXNwZWN0UmF0aW8gPyB3aWR0aCAvIGhlaWdodCA6IC0xO1xuICAgIHN3aXRjaCAodGhpcy5jdXJyZW50SGFuZGxlRXZlbnQhLmRpcmVjdGlvbikge1xuICAgICAgY2FzZSAnYm90dG9tUmlnaHQnOlxuICAgICAgICB3aWR0aCA9IHJlc2l6ZUV2ZW50LmNsaWVudFggLSBlbFJlY3QubGVmdDtcbiAgICAgICAgaGVpZ2h0ID0gcmVzaXplRXZlbnQuY2xpZW50WSAtIGVsUmVjdC50b3A7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm90dG9tTGVmdCc6XG4gICAgICAgIHdpZHRoID0gZWxSZWN0LndpZHRoICsgaGFuZGxlRXZlbnQuY2xpZW50WCAtIHJlc2l6ZUV2ZW50LmNsaWVudFg7XG4gICAgICAgIGhlaWdodCA9IHJlc2l6ZUV2ZW50LmNsaWVudFkgLSBlbFJlY3QudG9wO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RvcFJpZ2h0JzpcbiAgICAgICAgd2lkdGggPSByZXNpemVFdmVudC5jbGllbnRYIC0gZWxSZWN0LmxlZnQ7XG4gICAgICAgIGhlaWdodCA9IGVsUmVjdC5oZWlnaHQgKyBoYW5kbGVFdmVudC5jbGllbnRZIC0gcmVzaXplRXZlbnQuY2xpZW50WTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b3BMZWZ0JzpcbiAgICAgICAgd2lkdGggPSBlbFJlY3Qud2lkdGggKyBoYW5kbGVFdmVudC5jbGllbnRYIC0gcmVzaXplRXZlbnQuY2xpZW50WDtcbiAgICAgICAgaGVpZ2h0ID0gZWxSZWN0LmhlaWdodCArIGhhbmRsZUV2ZW50LmNsaWVudFkgLSByZXNpemVFdmVudC5jbGllbnRZO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgIGhlaWdodCA9IGVsUmVjdC5oZWlnaHQgKyBoYW5kbGVFdmVudC5jbGllbnRZIC0gcmVzaXplRXZlbnQuY2xpZW50WTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIHdpZHRoID0gcmVzaXplRXZlbnQuY2xpZW50WCAtIGVsUmVjdC5sZWZ0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgIGhlaWdodCA9IHJlc2l6ZUV2ZW50LmNsaWVudFkgLSBlbFJlY3QudG9wO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICB3aWR0aCA9IGVsUmVjdC53aWR0aCArIGhhbmRsZUV2ZW50LmNsaWVudFggLSByZXNpemVFdmVudC5jbGllbnRYO1xuICAgIH1cbiAgICBjb25zdCBzaXplID0gdGhpcy5jYWxjU2l6ZSh3aWR0aCwgaGVpZ2h0LCByYXRpbyk7XG4gICAgdGhpcy5zaXplQ2FjaGUgPSB7IC4uLnNpemUgfTtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5uelJlc2l6ZS5lbWl0KHtcbiAgICAgICAgLi4uc2l6ZSxcbiAgICAgICAgbW91c2VFdmVudDogZXZlbnRcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmICh0aGlzLm56UHJldmlldykge1xuICAgICAgdGhpcy5wcmV2aWV3UmVzaXplKHNpemUpO1xuICAgIH1cbiAgfVxuXG4gIGVuZFJlc2l6ZShldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGRvY3VtZW50LmJvZHksICdjdXJzb3InLCAnJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShkb2N1bWVudC5ib2R5LCAndXNlci1zZWxlY3QnLCAnJyk7XG4gICAgdGhpcy5yZW1vdmVHaG9zdEVsZW1lbnQoKTtcbiAgICBjb25zdCBzaXplID0gdGhpcy5zaXplQ2FjaGVcbiAgICAgID8geyAuLi50aGlzLnNpemVDYWNoZSB9XG4gICAgICA6IHtcbiAgICAgICAgICB3aWR0aDogdGhpcy5lbFJlY3Qud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLmVsUmVjdC5oZWlnaHRcbiAgICAgICAgfTtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5uelJlc2l6ZUVuZC5lbWl0KHtcbiAgICAgICAgLi4uc2l6ZSxcbiAgICAgICAgbW91c2VFdmVudDogZXZlbnRcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMuc2l6ZUNhY2hlID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnRIYW5kbGVFdmVudCA9IG51bGw7XG4gIH1cblxuICBwcmV2aWV3UmVzaXplKHsgd2lkdGgsIGhlaWdodCB9OiBOelJlc2l6ZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVHaG9zdEVsZW1lbnQoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZ2hvc3RFbGVtZW50LCAnd2lkdGgnLCBgJHt3aWR0aH1weGApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5naG9zdEVsZW1lbnQsICdoZWlnaHQnLCBgJHtoZWlnaHR9cHhgKTtcbiAgfVxuXG4gIGNyZWF0ZUdob3N0RWxlbWVudCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZ2hvc3RFbGVtZW50KSB7XG4gICAgICB0aGlzLmdob3N0RWxlbWVudCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmdob3N0RWxlbWVudCwgJ2NsYXNzJywgJ256LXJlc2l6YWJsZS1wcmV2aWV3Jyk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5lbCwgdGhpcy5naG9zdEVsZW1lbnQpO1xuICB9XG5cbiAgcmVtb3ZlR2hvc3RFbGVtZW50KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmdob3N0RWxlbWVudCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLmVsLCB0aGlzLmdob3N0RWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5lbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5zZXRQb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZ2hvc3RFbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLnNpemVDYWNoZSA9IG51bGw7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=