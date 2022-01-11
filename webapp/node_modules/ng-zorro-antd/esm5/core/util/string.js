/**
 * @fileoverview added by tsickle
 * Generated from: string.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * Much like lodash.
 * @param {?} toPad
 * @param {?} length
 * @param {?} element
 * @return {?}
 */
export function padStart(toPad, length, element) {
    if (toPad.length > length) {
        return toPad;
    }
    /** @type {?} */
    var joined = "" + getRepeatedElement(length, element) + toPad;
    return joined.slice(joined.length - length, joined.length);
}
/**
 * @param {?} toPad
 * @param {?} length
 * @param {?} element
 * @return {?}
 */
export function padEnd(toPad, length, element) {
    /** @type {?} */
    var joined = "" + toPad + getRepeatedElement(length, element);
    return joined.slice(0, length);
}
/**
 * @param {?} length
 * @param {?} element
 * @return {?}
 */
export function getRepeatedElement(length, element) {
    return Array(length).fill(element).join('');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlL3V0aWwvIiwic291cmNlcyI6WyJzdHJpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQVFBLE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBYSxFQUFFLE1BQWMsRUFBRSxPQUFlO0lBQ3JFLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQUU7UUFDekIsT0FBTyxLQUFLLENBQUM7S0FDZDs7UUFFSyxNQUFNLEdBQUcsS0FBRyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsS0FBTztJQUMvRCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdELENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsTUFBTSxDQUFDLEtBQWEsRUFBRSxNQUFjLEVBQUUsT0FBZTs7UUFDN0QsTUFBTSxHQUFHLEtBQUcsS0FBSyxHQUFHLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUc7SUFDL0QsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNqQyxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsTUFBYyxFQUFFLE9BQWU7SUFDaEUsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM5QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuLyoqXG4gKiBNdWNoIGxpa2UgbG9kYXNoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFkU3RhcnQodG9QYWQ6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIsIGVsZW1lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICh0b1BhZC5sZW5ndGggPiBsZW5ndGgpIHtcbiAgICByZXR1cm4gdG9QYWQ7XG4gIH1cblxuICBjb25zdCBqb2luZWQgPSBgJHtnZXRSZXBlYXRlZEVsZW1lbnQobGVuZ3RoLCBlbGVtZW50KX0ke3RvUGFkfWA7XG4gIHJldHVybiBqb2luZWQuc2xpY2Uoam9pbmVkLmxlbmd0aCAtIGxlbmd0aCwgam9pbmVkLmxlbmd0aCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWRFbmQodG9QYWQ6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIsIGVsZW1lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGpvaW5lZCA9IGAke3RvUGFkfSR7Z2V0UmVwZWF0ZWRFbGVtZW50KGxlbmd0aCwgZWxlbWVudCl9YDtcbiAgcmV0dXJuIGpvaW5lZC5zbGljZSgwLCBsZW5ndGgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVwZWF0ZWRFbGVtZW50KGxlbmd0aDogbnVtYmVyLCBlbGVtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gQXJyYXkobGVuZ3RoKS5maWxsKGVsZW1lbnQpLmpvaW4oJycpO1xufVxuIl19