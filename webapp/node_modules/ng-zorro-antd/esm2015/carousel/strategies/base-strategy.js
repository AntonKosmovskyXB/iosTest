/**
 * @fileoverview added by tsickle
 * Generated from: strategies/base-strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @abstract
 */
export class NzCarouselBaseStrategy {
    /**
     * @param {?} carouselComponent
     * @param {?} cdr
     * @param {?} renderer
     */
    constructor(carouselComponent, cdr, renderer) {
        this.cdr = cdr;
        this.renderer = renderer;
        this.carouselComponent = carouselComponent;
    }
    /**
     * @protected
     * @return {?}
     */
    get maxIndex() {
        return this.length - 1;
    }
    /**
     * @protected
     * @return {?}
     */
    get firstEl() {
        return this.contents[0].el;
    }
    /**
     * @protected
     * @return {?}
     */
    get lastEl() {
        return this.contents[this.maxIndex].el;
    }
    /**
     * Initialize dragging sequences.
     * @param {?} contents
     * @return {?}
     */
    withCarouselContents(contents) {
        // TODO: carousel and its contents should be separated.
        /** @type {?} */
        const carousel = (/** @type {?} */ (this.carouselComponent));
        /** @type {?} */
        const rect = carousel.el.getBoundingClientRect();
        this.slickListEl = carousel.slickListEl;
        this.slickTrackEl = carousel.slickTrackEl;
        this.unitWidth = rect.width;
        this.unitHeight = rect.height;
        this.contents = contents ? contents.toArray() : [];
        this.length = this.contents.length;
    }
    /**
     * When user drag the carousel component.
     * \@optional
     * @param {?} _vector
     * @return {?}
     */
    dragging(_vector) { }
    /**
     * Destroy a scroll strategy.
     * @return {?}
     */
    dispose() { }
    /**
     * @protected
     * @param {?} f
     * @param {?} t
     * @return {?}
     */
    getFromToInBoundary(f, t) {
        /** @type {?} */
        const length = this.maxIndex + 1;
        return { from: (f + length) % length, to: (t + length) % length };
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.carouselComponent;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.contents;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.slickListEl;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.slickTrackEl;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.length;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.unitWidth;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.unitHeight;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.cdr;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.renderer;
    /**
     * Trigger transition.
     * @abstract
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    NzCarouselBaseStrategy.prototype.switch = function (_f, _t) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2Fyb3VzZWwvIiwic291cmNlcyI6WyJzdHJhdGVnaWVzL2Jhc2Utc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBV0EsTUFBTSxPQUFnQixzQkFBc0I7Ozs7OztJQXNCMUMsWUFBWSxpQkFBOEMsRUFBWSxHQUFzQixFQUFZLFFBQW1CO1FBQXJELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVksYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUN6SCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFkRCxJQUFjLFFBQVE7UUFDcEIsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELElBQWMsT0FBTztRQUNuQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsSUFBYyxNQUFNO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3pDLENBQUM7Ozs7OztJQVVELG9CQUFvQixDQUFDLFFBQXNEOzs7Y0FFbkUsUUFBUSxHQUFHLG1CQUFBLElBQUksQ0FBQyxpQkFBaUIsRUFBQzs7Y0FDbEMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMscUJBQXFCLEVBQUU7UUFDaEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ3JDLENBQUM7Ozs7Ozs7SUFXRCxRQUFRLENBQUMsT0FBc0IsSUFBUyxDQUFDOzs7OztJQUt6QyxPQUFPLEtBQVUsQ0FBQzs7Ozs7OztJQUVSLG1CQUFtQixDQUFDLENBQVMsRUFBRSxDQUFTOztjQUMxQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDO1FBQ2hDLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQztJQUNwRSxDQUFDO0NBQ0Y7Ozs7OztJQTVEQyxtREFBZ0U7Ozs7O0lBQ2hFLDBDQUFrRDs7Ozs7SUFDbEQsNkNBQW9DOzs7OztJQUNwQyw4Q0FBcUM7Ozs7O0lBQ3JDLHdDQUEwQjs7Ozs7SUFDMUIsMkNBQTZCOzs7OztJQUM3Qiw0Q0FBOEI7Ozs7O0lBYzhCLHFDQUFnQzs7Ozs7SUFBRSwwQ0FBNkI7Ozs7Ozs7O0lBdUIzSCxnRUFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgUXVlcnlMaXN0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuLi9jYXJvdXNlbC1jb250ZW50LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGcm9tVG9JbnRlcmZhY2UsIE56Q2Fyb3VzZWxDb21wb25lbnRBc1NvdXJjZSwgUG9pbnRlclZlY3RvciB9IGZyb20gJy4uL3R5cGluZ3MnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTnpDYXJvdXNlbEJhc2VTdHJhdGVneSB7XG4gIC8vIFByb3BlcnRpZXMgdGhhdCBzdHJhdGVnaWVzIG1heSB3YW50IHRvIHVzZS5cbiAgcHJvdGVjdGVkIGNhcm91c2VsQ29tcG9uZW50OiBOekNhcm91c2VsQ29tcG9uZW50QXNTb3VyY2UgfCBudWxsO1xuICBwcm90ZWN0ZWQgY29udGVudHMhOiBOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZVtdO1xuICBwcm90ZWN0ZWQgc2xpY2tMaXN0RWwhOiBIVE1MRWxlbWVudDtcbiAgcHJvdGVjdGVkIHNsaWNrVHJhY2tFbCE6IEhUTUxFbGVtZW50O1xuICBwcm90ZWN0ZWQgbGVuZ3RoITogbnVtYmVyO1xuICBwcm90ZWN0ZWQgdW5pdFdpZHRoITogbnVtYmVyO1xuICBwcm90ZWN0ZWQgdW5pdEhlaWdodCE6IG51bWJlcjtcblxuICBwcm90ZWN0ZWQgZ2V0IG1heEluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgZmlyc3RFbCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudHNbMF0uZWw7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGxhc3RFbCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudHNbdGhpcy5tYXhJbmRleF0uZWw7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihjYXJvdXNlbENvbXBvbmVudDogTnpDYXJvdXNlbENvbXBvbmVudEFzU291cmNlLCBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLmNhcm91c2VsQ29tcG9uZW50ID0gY2Fyb3VzZWxDb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBkcmFnZ2luZyBzZXF1ZW5jZXMuXG4gICAqIEBwYXJhbSBjb250ZW50c1xuICAgKi9cbiAgd2l0aENhcm91c2VsQ29udGVudHMoY29udGVudHM6IFF1ZXJ5TGlzdDxOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZT4gfCBudWxsKTogdm9pZCB7XG4gICAgLy8gVE9ETzogY2Fyb3VzZWwgYW5kIGl0cyBjb250ZW50cyBzaG91bGQgYmUgc2VwYXJhdGVkLlxuICAgIGNvbnN0IGNhcm91c2VsID0gdGhpcy5jYXJvdXNlbENvbXBvbmVudCE7XG4gICAgY29uc3QgcmVjdCA9IGNhcm91c2VsLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMuc2xpY2tMaXN0RWwgPSBjYXJvdXNlbC5zbGlja0xpc3RFbDtcbiAgICB0aGlzLnNsaWNrVHJhY2tFbCA9IGNhcm91c2VsLnNsaWNrVHJhY2tFbDtcbiAgICB0aGlzLnVuaXRXaWR0aCA9IHJlY3Qud2lkdGg7XG4gICAgdGhpcy51bml0SGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XG4gICAgdGhpcy5jb250ZW50cyA9IGNvbnRlbnRzID8gY29udGVudHMudG9BcnJheSgpIDogW107XG4gICAgdGhpcy5sZW5ndGggPSB0aGlzLmNvbnRlbnRzLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIHRyYW5zaXRpb24uXG4gICAqL1xuICBhYnN0cmFjdCBzd2l0Y2goX2Y6IG51bWJlciwgX3Q6IG51bWJlcik6IE9ic2VydmFibGU8dm9pZD47XG5cbiAgLyoqXG4gICAqIFdoZW4gdXNlciBkcmFnIHRoZSBjYXJvdXNlbCBjb21wb25lbnQuXG4gICAqIEBvcHRpb25hbFxuICAgKi9cbiAgZHJhZ2dpbmcoX3ZlY3RvcjogUG9pbnRlclZlY3Rvcik6IHZvaWQge31cblxuICAvKipcbiAgICogRGVzdHJveSBhIHNjcm9sbCBzdHJhdGVneS5cbiAgICovXG4gIGRpc3Bvc2UoKTogdm9pZCB7fVxuXG4gIHByb3RlY3RlZCBnZXRGcm9tVG9JbkJvdW5kYXJ5KGY6IG51bWJlciwgdDogbnVtYmVyKTogRnJvbVRvSW50ZXJmYWNlIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLm1heEluZGV4ICsgMTtcbiAgICByZXR1cm4geyBmcm9tOiAoZiArIGxlbmd0aCkgJSBsZW5ndGgsIHRvOiAodCArIGxlbmd0aCkgJSBsZW5ndGggfTtcbiAgfVxufVxuIl19