/**
 * @fileoverview added by tsickle
 * Generated from: measure-scrollbar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 * @type {?}
 */
var scrollbarVerticalSize;
/** @type {?} */
var scrollbarHorizontalSize;
// Measure scrollbar width for padding body during modal show/hide
/** @type {?} */
var scrollbarMeasure = {
    position: 'absolute',
    top: '-9999px',
    width: '50px',
    height: '50px'
};
/**
 * @param {?=} direction
 * @param {?=} prefix
 * @return {?}
 */
export function measureScrollbar(direction, prefix) {
    if (direction === void 0) { direction = 'vertical'; }
    if (prefix === void 0) { prefix = 'ant'; }
    if (typeof document === 'undefined' || typeof window === 'undefined') {
        return 0;
    }
    /** @type {?} */
    var isVertical = direction === 'vertical';
    if (isVertical && scrollbarVerticalSize) {
        return scrollbarVerticalSize;
    }
    else if (!isVertical && scrollbarHorizontalSize) {
        return scrollbarHorizontalSize;
    }
    /** @type {?} */
    var scrollDiv = document.createElement('div');
    Object.keys(scrollbarMeasure).forEach((/**
     * @param {?} scrollProp
     * @return {?}
     */
    function (scrollProp) {
        // @ts-ignore
        scrollDiv.style[scrollProp] = scrollbarMeasure[scrollProp];
    }));
    // apply hide scrollbar className ahead
    scrollDiv.className = prefix + "-hide-scrollbar scroll-div-append-to-body";
    // Append related overflow style
    if (isVertical) {
        scrollDiv.style.overflowY = 'scroll';
    }
    else {
        scrollDiv.style.overflowX = 'scroll';
    }
    document.body.appendChild(scrollDiv);
    /** @type {?} */
    var size = 0;
    if (isVertical) {
        size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        scrollbarVerticalSize = size;
    }
    else {
        size = scrollDiv.offsetHeight - scrollDiv.clientHeight;
        scrollbarHorizontalSize = size;
    }
    document.body.removeChild(scrollDiv);
    return size;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVhc3VyZS1zY3JvbGxiYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvdXRpbC8iLCJzb3VyY2VzIjpbIm1lYXN1cmUtc2Nyb2xsYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFJSSxxQkFBNkI7O0lBQzdCLHVCQUErQjs7O0lBRzdCLGdCQUFnQixHQUFHO0lBQ3ZCLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLEdBQUcsRUFBRSxTQUFTO0lBQ2QsS0FBSyxFQUFFLE1BQU07SUFDYixNQUFNLEVBQUUsTUFBTTtDQUNmOzs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsU0FBaUQsRUFBRSxNQUFzQjtJQUF6RSwwQkFBQSxFQUFBLHNCQUFpRDtJQUFFLHVCQUFBLEVBQUEsY0FBc0I7SUFDeEcsSUFBSSxPQUFPLFFBQVEsS0FBSyxXQUFXLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO1FBQ3BFLE9BQU8sQ0FBQyxDQUFDO0tBQ1Y7O1FBQ0ssVUFBVSxHQUFHLFNBQVMsS0FBSyxVQUFVO0lBQzNDLElBQUksVUFBVSxJQUFJLHFCQUFxQixFQUFFO1FBQ3ZDLE9BQU8scUJBQXFCLENBQUM7S0FDOUI7U0FBTSxJQUFJLENBQUMsVUFBVSxJQUFJLHVCQUF1QixFQUFFO1FBQ2pELE9BQU8sdUJBQXVCLENBQUM7S0FDaEM7O1FBQ0ssU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPOzs7O0lBQUMsVUFBQSxVQUFVO1FBQzlDLGFBQWE7UUFDYixTQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdELENBQUMsRUFBQyxDQUFDO0lBQ0gsdUNBQXVDO0lBQ3ZDLFNBQVMsQ0FBQyxTQUFTLEdBQU0sTUFBTSw4Q0FBMkMsQ0FBQztJQUMzRSxnQ0FBZ0M7SUFDaEMsSUFBSSxVQUFVLEVBQUU7UUFDZCxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7S0FDdEM7U0FBTTtRQUNMLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztLQUN0QztJQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztRQUNqQyxJQUFJLEdBQUcsQ0FBQztJQUNaLElBQUksVUFBVSxFQUFFO1FBQ2QsSUFBSSxHQUFHLFNBQVMsQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQztRQUNyRCxxQkFBcUIsR0FBRyxJQUFJLENBQUM7S0FDOUI7U0FBTTtRQUNMLElBQUksR0FBRyxTQUFTLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUM7UUFDdkQsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO0tBQ2hDO0lBRUQsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckMsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbmxldCBzY3JvbGxiYXJWZXJ0aWNhbFNpemU6IG51bWJlcjtcbmxldCBzY3JvbGxiYXJIb3Jpem9udGFsU2l6ZTogbnVtYmVyO1xuXG4vLyBNZWFzdXJlIHNjcm9sbGJhciB3aWR0aCBmb3IgcGFkZGluZyBib2R5IGR1cmluZyBtb2RhbCBzaG93L2hpZGVcbmNvbnN0IHNjcm9sbGJhck1lYXN1cmUgPSB7XG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB0b3A6ICctOTk5OXB4JyxcbiAgd2lkdGg6ICc1MHB4JyxcbiAgaGVpZ2h0OiAnNTBweCdcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtZWFzdXJlU2Nyb2xsYmFyKGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyB8ICdob3Jpem9udGFsJyA9ICd2ZXJ0aWNhbCcsIHByZWZpeDogc3RyaW5nID0gJ2FudCcpOiBudW1iZXIge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiAwO1xuICB9XG4gIGNvbnN0IGlzVmVydGljYWwgPSBkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCc7XG4gIGlmIChpc1ZlcnRpY2FsICYmIHNjcm9sbGJhclZlcnRpY2FsU2l6ZSkge1xuICAgIHJldHVybiBzY3JvbGxiYXJWZXJ0aWNhbFNpemU7XG4gIH0gZWxzZSBpZiAoIWlzVmVydGljYWwgJiYgc2Nyb2xsYmFySG9yaXpvbnRhbFNpemUpIHtcbiAgICByZXR1cm4gc2Nyb2xsYmFySG9yaXpvbnRhbFNpemU7XG4gIH1cbiAgY29uc3Qgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIE9iamVjdC5rZXlzKHNjcm9sbGJhck1lYXN1cmUpLmZvckVhY2goc2Nyb2xsUHJvcCA9PiB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHNjcm9sbERpdi5zdHlsZVtzY3JvbGxQcm9wXSA9IHNjcm9sbGJhck1lYXN1cmVbc2Nyb2xsUHJvcF07XG4gIH0pO1xuICAvLyBhcHBseSBoaWRlIHNjcm9sbGJhciBjbGFzc05hbWUgYWhlYWRcbiAgc2Nyb2xsRGl2LmNsYXNzTmFtZSA9IGAke3ByZWZpeH0taGlkZS1zY3JvbGxiYXIgc2Nyb2xsLWRpdi1hcHBlbmQtdG8tYm9keWA7XG4gIC8vIEFwcGVuZCByZWxhdGVkIG92ZXJmbG93IHN0eWxlXG4gIGlmIChpc1ZlcnRpY2FsKSB7XG4gICAgc2Nyb2xsRGl2LnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnO1xuICB9IGVsc2Uge1xuICAgIHNjcm9sbERpdi5zdHlsZS5vdmVyZmxvd1ggPSAnc2Nyb2xsJztcbiAgfVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdik7XG4gIGxldCBzaXplID0gMDtcbiAgaWYgKGlzVmVydGljYWwpIHtcbiAgICBzaXplID0gc2Nyb2xsRGl2Lm9mZnNldFdpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xuICAgIHNjcm9sbGJhclZlcnRpY2FsU2l6ZSA9IHNpemU7XG4gIH0gZWxzZSB7XG4gICAgc2l6ZSA9IHNjcm9sbERpdi5vZmZzZXRIZWlnaHQgLSBzY3JvbGxEaXYuY2xpZW50SGVpZ2h0O1xuICAgIHNjcm9sbGJhckhvcml6b250YWxTaXplID0gc2l6ZTtcbiAgfVxuXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgcmV0dXJuIHNpemU7XG59XG4iXX0=