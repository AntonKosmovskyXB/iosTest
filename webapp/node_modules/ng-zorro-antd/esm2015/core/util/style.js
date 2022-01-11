/**
 * @fileoverview added by tsickle
 * Generated from: style.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @param {?} styleName
 * @return {?}
 */
export function isStyleSupport(styleName) {
    if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
        /** @type {?} */
        const styleNameList = Array.isArray(styleName) ? styleName : [styleName];
        const { documentElement } = window.document;
        return styleNameList.some((/**
         * @param {?} name
         * @return {?}
         */
        name => name in documentElement.style));
    }
    return false;
}
/**
 * @param {?=} styles
 * @return {?}
 */
export function getStyleAsText(styles) {
    if (!styles) {
        return '';
    }
    return Object.keys(styles)
        .map((/**
     * @param {?} key
     * @return {?}
     */
    key => {
        /** @type {?} */
        const val = styles[key];
        return `${key}:${typeof val === 'string' ? val : val + 'px'}`;
    }))
        .join(';');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvdXRpbC8iLCJzb3VyY2VzIjpbInN0eWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFPQSxNQUFNLFVBQVUsY0FBYyxDQUFDLFNBQTRCO0lBQ3pELElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUU7O2NBQ2pGLGFBQWEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO2NBQ2xFLEVBQUUsZUFBZSxFQUFFLEdBQUcsTUFBTSxDQUFDLFFBQVE7UUFFM0MsT0FBTyxhQUFhLENBQUMsSUFBSTs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLGVBQWUsQ0FBQyxLQUFLLEVBQUMsQ0FBQztLQUNsRTtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUFDLE1BQXlCO0lBQ3RELElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNYO0lBRUQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUN2QixHQUFHOzs7O0lBQUMsR0FBRyxDQUFDLEVBQUU7O2NBQ0gsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDdkIsT0FBTyxHQUFHLEdBQUcsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDO0lBQ2hFLENBQUMsRUFBQztTQUNELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBOZ1N0eWxlSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3R5bGVTdXBwb3J0KHN0eWxlTmFtZTogc3RyaW5nIHwgc3RyaW5nW10pOiBib29sZWFuIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgY29uc3Qgc3R5bGVOYW1lTGlzdCA9IEFycmF5LmlzQXJyYXkoc3R5bGVOYW1lKSA/IHN0eWxlTmFtZSA6IFtzdHlsZU5hbWVdO1xuICAgIGNvbnN0IHsgZG9jdW1lbnRFbGVtZW50IH0gPSB3aW5kb3cuZG9jdW1lbnQ7XG5cbiAgICByZXR1cm4gc3R5bGVOYW1lTGlzdC5zb21lKG5hbWUgPT4gbmFtZSBpbiBkb2N1bWVudEVsZW1lbnQuc3R5bGUpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0eWxlQXNUZXh0KHN0eWxlcz86IE5nU3R5bGVJbnRlcmZhY2UpOiBzdHJpbmcge1xuICBpZiAoIXN0eWxlcykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZXMpXG4gICAgLm1hcChrZXkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gc3R5bGVzW2tleV07XG4gICAgICByZXR1cm4gYCR7a2V5fToke3R5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gdmFsIDogdmFsICsgJ3B4J31gO1xuICAgIH0pXG4gICAgLmpvaW4oJzsnKTtcbn1cbiJdfQ==