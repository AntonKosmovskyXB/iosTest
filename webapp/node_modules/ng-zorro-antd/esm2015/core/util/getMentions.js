/**
 * @fileoverview added by tsickle
 * Generated from: getMentions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @param {?} prefix
 * @return {?}
 */
export function getRegExp(prefix) {
    /** @type {?} */
    const prefixArray = Array.isArray(prefix) ? prefix : [prefix];
    /** @type {?} */
    let prefixToken = prefixArray.join('').replace(/(\$|\^)/g, '\\$1');
    if (prefixArray.length > 1) {
        prefixToken = `[${prefixToken}]`;
    }
    return new RegExp(`(\\s|^)(${prefixToken})[^\\s]*`, 'g');
}
/**
 * @param {?} value
 * @param {?=} prefix
 * @return {?}
 */
export function getMentions(value, prefix = '@') {
    if (typeof value !== 'string') {
        return [];
    }
    /** @type {?} */
    const regex = getRegExp(prefix);
    /** @type {?} */
    const mentions = value.match(regex);
    return mentions !== null ? mentions.map((/**
     * @param {?} e
     * @return {?}
     */
    e => e.trim())) : [];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0TWVudGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvdXRpbC8iLCJzb3VyY2VzIjpbImdldE1lbnRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFLQSxNQUFNLFVBQVUsU0FBUyxDQUFDLE1BQXlCOztVQUMzQyxXQUFXLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQzs7UUFDekQsV0FBVyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUM7SUFFbEUsSUFBSSxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUMxQixXQUFXLEdBQUcsSUFBSSxXQUFXLEdBQUcsQ0FBQztLQUNsQztJQUVELE9BQU8sSUFBSSxNQUFNLENBQUMsV0FBVyxXQUFXLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUMzRCxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsV0FBVyxDQUFDLEtBQWEsRUFBRSxTQUE0QixHQUFHO0lBQ3hFLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQzdCLE9BQU8sRUFBRSxDQUFDO0tBQ1g7O1VBQ0ssS0FBSyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7O1VBQ3pCLFFBQVEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUNuQyxPQUFPLFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHOzs7O0lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzlELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVnRXhwKHByZWZpeDogc3RyaW5nIHwgc3RyaW5nW10pOiBSZWdFeHAge1xuICBjb25zdCBwcmVmaXhBcnJheSA9IEFycmF5LmlzQXJyYXkocHJlZml4KSA/IHByZWZpeCA6IFtwcmVmaXhdO1xuICBsZXQgcHJlZml4VG9rZW4gPSBwcmVmaXhBcnJheS5qb2luKCcnKS5yZXBsYWNlKC8oXFwkfFxcXikvZywgJ1xcXFwkMScpO1xuXG4gIGlmIChwcmVmaXhBcnJheS5sZW5ndGggPiAxKSB7XG4gICAgcHJlZml4VG9rZW4gPSBgWyR7cHJlZml4VG9rZW59XWA7XG4gIH1cblxuICByZXR1cm4gbmV3IFJlZ0V4cChgKFxcXFxzfF4pKCR7cHJlZml4VG9rZW59KVteXFxcXHNdKmAsICdnJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNZW50aW9ucyh2YWx1ZTogc3RyaW5nLCBwcmVmaXg6IHN0cmluZyB8IHN0cmluZ1tdID0gJ0AnKTogc3RyaW5nW10ge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBjb25zdCByZWdleCA9IGdldFJlZ0V4cChwcmVmaXgpO1xuICBjb25zdCBtZW50aW9ucyA9IHZhbHVlLm1hdGNoKHJlZ2V4KTtcbiAgcmV0dXJuIG1lbnRpb25zICE9PSBudWxsID8gbWVudGlvbnMubWFwKGUgPT4gZS50cmltKCkpIDogW107XG59XG4iXX0=