/**
 * @fileoverview added by tsickle
 * Generated from: drag.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable, RendererFactory2 } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, finalize, map } from 'rxjs/operators';
import { getEventPosition, isTouchEvent } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
/**
 * @record
 */
function Point() { }
if (false) {
    /** @type {?} */
    Point.prototype.x;
    /** @type {?} */
    Point.prototype.y;
}
/**
 * @record
 */
function HandlerItem() { }
if (false) {
    /**
     * @param {?} e
     * @return {?}
     */
    HandlerItem.prototype.handler = function (e) { };
    /**
     * @return {?}
     */
    HandlerItem.prototype.teardown = function () { };
}
/**
 * @param {?} event
 * @return {?}
 */
function getPagePosition(event) {
    /** @type {?} */
    const e = getEventPosition(event);
    return {
        x: e.pageX,
        y: e.pageY
    };
}
/**
 * This module provide a global dragging service to other components.
 */
export class NzDragService {
    /**
     * @param {?} rendererFactory2
     */
    constructor(rendererFactory2) {
        this.draggingThreshold = 5;
        this.currentDraggingSequence = null;
        this.currentStartingPoint = null;
        this.handleRegistry = new Set();
        this.renderer = rendererFactory2.createRenderer(null, null);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    requestDraggingSequence(event) {
        if (!this.handleRegistry.size) {
            this.registerDraggingHandler(isTouchEvent(event));
        }
        // Complete last dragging sequence if a new target is dragged.
        if (this.currentDraggingSequence) {
            this.currentDraggingSequence.complete();
        }
        this.currentStartingPoint = getPagePosition(event);
        this.currentDraggingSequence = new Subject();
        return this.currentDraggingSequence.pipe(map((/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            return {
                x: e.pageX - (/** @type {?} */ (this.currentStartingPoint)).x,
                y: e.pageY - (/** @type {?} */ (this.currentStartingPoint)).y
            };
        })), filter((/**
         * @param {?} e
         * @return {?}
         */
        (e) => Math.abs(e.x) > this.draggingThreshold || Math.abs(e.y) > this.draggingThreshold)), finalize((/**
         * @return {?}
         */
        () => this.teardownDraggingSequence())));
    }
    /**
     * @private
     * @param {?} isTouch
     * @return {?}
     */
    registerDraggingHandler(isTouch) {
        if (isTouch) {
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'touchmove', (/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => {
                    if (this.currentDraggingSequence) {
                        this.currentDraggingSequence.next(e.touches[0] || e.changedTouches[0]);
                    }
                }))
            });
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'touchend', (/**
                 * @return {?}
                 */
                () => {
                    if (this.currentDraggingSequence) {
                        this.currentDraggingSequence.complete();
                    }
                }))
            });
        }
        else {
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'mousemove', (/**
                 * @param {?} e
                 * @return {?}
                 */
                e => {
                    if (this.currentDraggingSequence) {
                        this.currentDraggingSequence.next(e);
                    }
                }))
            });
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'mouseup', (/**
                 * @return {?}
                 */
                () => {
                    if (this.currentDraggingSequence) {
                        this.currentDraggingSequence.complete();
                    }
                }))
            });
        }
    }
    /**
     * @private
     * @return {?}
     */
    teardownDraggingSequence() {
        this.currentDraggingSequence = null;
    }
}
NzDragService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzDragService.ctorParameters = () => [
    { type: RendererFactory2 }
];
/** @nocollapse */ NzDragService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NzDragService_Factory() { return new NzDragService(i0.ɵɵinject(i0.RendererFactory2)); }, token: NzDragService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzDragService.prototype.draggingThreshold;
    /**
     * @type {?}
     * @private
     */
    NzDragService.prototype.currentDraggingSequence;
    /**
     * @type {?}
     * @private
     */
    NzDragService.prototype.currentStartingPoint;
    /**
     * @type {?}
     * @private
     */
    NzDragService.prototype.handleRegistry;
    /**
     * @type {?}
     * @private
     */
    NzDragService.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS9zZXJ2aWNlcy8iLCJzb3VyY2VzIjpbImRyYWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFVBQVUsRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7QUFFekUsb0JBR0M7OztJQUZDLGtCQUFVOztJQUNWLGtCQUFVOzs7OztBQUtaLDBCQUlDOzs7Ozs7SUFIQyxpREFBeUI7Ozs7SUFFekIsaURBQWlCOzs7Ozs7QUFHbkIsU0FBUyxlQUFlLENBQUMsS0FBOEI7O1VBQy9DLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7SUFDakMsT0FBTztRQUNMLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSztRQUNWLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSztLQUNYLENBQUM7QUFDSixDQUFDOzs7O0FBUUQsTUFBTSxPQUFPLGFBQWE7Ozs7SUFPeEIsWUFBWSxnQkFBa0M7UUFOdEMsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLDRCQUF1QixHQUF1QyxJQUFJLENBQUM7UUFDbkUseUJBQW9CLEdBQWlCLElBQUksQ0FBQztRQUMxQyxtQkFBYyxHQUFHLElBQUksR0FBRyxFQUFlLENBQUM7UUFJOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7O0lBRUQsdUJBQXVCLENBQUMsS0FBOEI7UUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxj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QUNoQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBQ3pDO2dCQUNILENBQUMsRUFBQzthQUNILENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Ozs7SUFFTyx3QkFBd0I7UUFDOUIsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQztJQUN0QyxDQUFDOzs7WUEzRUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBaEMrQixnQkFBZ0I7Ozs7Ozs7O0lBa0M5QywwQ0FBOEI7Ozs7O0lBQzlCLGdEQUEyRTs7Ozs7SUFDM0UsNkNBQWtEOzs7OztJQUNsRCx1Q0FBZ0Q7Ozs7O0lBQ2hELGlDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUsIFJlbmRlcmVyMiwgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBmaW5hbGl6ZSwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBnZXRFdmVudFBvc2l0aW9uLCBpc1RvdWNoRXZlbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5cbmludGVyZmFjZSBQb2ludCB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG50eXBlIERlbHRhID0gUG9pbnQ7XG5cbmludGVyZmFjZSBIYW5kbGVySXRlbSB7XG4gIGhhbmRsZXI/KGU6IEV2ZW50KTogdm9pZDtcblxuICB0ZWFyZG93bigpOiB2b2lkO1xufVxuXG5mdW5jdGlvbiBnZXRQYWdlUG9zaXRpb24oZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogUG9pbnQge1xuICBjb25zdCBlID0gZ2V0RXZlbnRQb3NpdGlvbihldmVudCk7XG4gIHJldHVybiB7XG4gICAgeDogZS5wYWdlWCxcbiAgICB5OiBlLnBhZ2VZXG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBtb2R1bGUgcHJvdmlkZSBhIGdsb2JhbCBkcmFnZ2luZyBzZXJ2aWNlIHRvIG90aGVyIGNvbXBvbmVudHMuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE56RHJhZ1NlcnZpY2Uge1xuICBwcml2YXRlIGRyYWdnaW5nVGhyZXNob2xkID0gNTtcbiAgcHJpdmF0ZSBjdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZTogU3ViamVjdDxNb3VzZUV2ZW50IHwgVG91Y2g+IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgY3VycmVudFN0YXJ0aW5nUG9pbnQ6IFBvaW50IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgaGFuZGxlUmVnaXN0cnkgPSBuZXcgU2V0PEhhbmRsZXJJdGVtPigpO1xuICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG5cbiAgY29uc3RydWN0b3IocmVuZGVyZXJGYWN0b3J5MjogUmVuZGVyZXJGYWN0b3J5Mikge1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlckZhY3RvcnkyLmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xuICB9XG5cbiAgcmVxdWVzdERyYWdnaW5nU2VxdWVuY2UoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogT2JzZXJ2YWJsZTxEZWx0YT4ge1xuICAgIGlmICghdGhpcy5oYW5kbGVSZWdpc3RyeS5zaXplKSB7XG4gICAgICB0aGlzLnJlZ2lzdGVyRHJhZ2dpbmdIYW5kbGVyKGlzVG91Y2hFdmVudChldmVudCkpO1xuICAgIH1cblxuICAgIC8vIENvbXBsZXRlIGxhc3QgZHJhZ2dpbmcgc2VxdWVuY2UgaWYgYSBuZXcgdGFyZ2V0IGlzIGRyYWdnZWQuXG4gICAgaWYgKHRoaXMuY3VycmVudERyYWdnaW5nU2VxdWVuY2UpIHtcbiAgICAgIHRoaXMuY3VycmVudERyYWdnaW5nU2VxdWVuY2UuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRTdGFydGluZ1BvaW50ID0gZ2V0UGFnZVBvc2l0aW9uKGV2ZW50KTtcbiAgICB0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlID0gbmV3IFN1YmplY3Q8TW91c2VFdmVudCB8IFRvdWNoPigpO1xuXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudERyYWdnaW5nU2VxdWVuY2UucGlwZShcbiAgICAgIG1hcCgoZTogTW91c2VFdmVudCB8IFRvdWNoKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgeDogZS5wYWdlWCAtIHRoaXMuY3VycmVudFN0YXJ0aW5nUG9pbnQhLngsXG4gICAgICAgICAgeTogZS5wYWdlWSAtIHRoaXMuY3VycmVudFN0YXJ0aW5nUG9pbnQhLnlcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKChlOiBEZWx0YSkgPT4gTWF0aC5hYnMoZS54KSA+IHRoaXMuZHJhZ2dpbmdUaHJlc2hvbGQgfHwgTWF0aC5hYnMoZS55KSA+IHRoaXMuZHJhZ2dpbmdUaHJlc2hvbGQpLFxuICAgICAgZmluYWxpemUoKCkgPT4gdGhpcy50ZWFyZG93bkRyYWdnaW5nU2VxdWVuY2UoKSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZWdpc3RlckRyYWdnaW5nSGFuZGxlcihpc1RvdWNoOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKGlzVG91Y2gpIHtcbiAgICAgIHRoaXMuaGFuZGxlUmVnaXN0cnkuYWRkKHtcbiAgICAgICAgdGVhcmRvd246IHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICd0b3VjaG1vdmUnLCAoZTogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlLm5leHQoZS50b3VjaGVzWzBdIHx8IGUuY2hhbmdlZFRvdWNoZXNbMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgdGhpcy5oYW5kbGVSZWdpc3RyeS5hZGQoe1xuICAgICAgICB0ZWFyZG93bjogdGhpcy5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ3RvdWNoZW5kJywgKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFuZGxlUmVnaXN0cnkuYWRkKHtcbiAgICAgICAgdGVhcmRvd246IHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdtb3VzZW1vdmUnLCBlID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RHJhZ2dpbmdTZXF1ZW5jZS5uZXh0KGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgdGhpcy5oYW5kbGVSZWdpc3RyeS5hZGQoe1xuICAgICAgICB0ZWFyZG93bjogdGhpcy5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuY3VycmVudERyYWdnaW5nU2VxdWVuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERyYWdnaW5nU2VxdWVuY2UuY29tcGxldGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRlYXJkb3duRHJhZ2dpbmdTZXF1ZW5jZSgpOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnREcmFnZ2luZ1NlcXVlbmNlID0gbnVsbDtcbiAgfVxufVxuIl19