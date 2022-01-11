/**
 * @fileoverview added by tsickle
 * Generated from: util.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @param {?} element
 * @param {?} container
 * @return {?}
 */
export function getOffsetTop(element, container) {
    if (!element || !element.getClientRects().length) {
        return 0;
    }
    /** @type {?} */
    const rect = element.getBoundingClientRect();
    if (rect.width || rect.height) {
        if (container === window) {
            /** @type {?} */
            const documentElement = (/** @type {?} */ ((/** @type {?} */ (element.ownerDocument)).documentElement));
            return rect.top - documentElement.clientTop;
        }
        return rect.top - ((/** @type {?} */ (container))).getBoundingClientRect().top;
    }
    return rect.top;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYW5jaG9yLyIsInNvdXJjZXMiOlsidXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUtBLE1BQU0sVUFBVSxZQUFZLENBQUMsT0FBb0IsRUFBRSxTQUErQjtJQUNoRixJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sRUFBRTtRQUNoRCxPQUFPLENBQUMsQ0FBQztLQUNWOztVQUNLLElBQUksR0FBRyxPQUFPLENBQUMscUJBQXFCLEVBQUU7SUFFNUMsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDN0IsSUFBSSxTQUFTLEtBQUssTUFBTSxFQUFFOztrQkFDbEIsZUFBZSxHQUFHLG1CQUFBLG1CQUFBLE9BQU8sQ0FBQyxhQUFhLEVBQUMsQ0FBQyxlQUFlLEVBQUM7WUFDL0QsT0FBTyxJQUFJLENBQUMsR0FBRyxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUM7U0FDN0M7UUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxtQkFBQSxTQUFTLEVBQWUsQ0FBQyxDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxDQUFDO0tBQzFFO0lBRUQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQ2xCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2Zmc2V0VG9wKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjb250YWluZXI6IEhUTUxFbGVtZW50IHwgV2luZG93KTogbnVtYmVyIHtcbiAgaWYgKCFlbGVtZW50IHx8ICFlbGVtZW50LmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgaWYgKHJlY3Qud2lkdGggfHwgcmVjdC5oZWlnaHQpIHtcbiAgICBpZiAoY29udGFpbmVyID09PSB3aW5kb3cpIHtcbiAgICAgIGNvbnN0IGRvY3VtZW50RWxlbWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudCEuZG9jdW1lbnRFbGVtZW50ITtcbiAgICAgIHJldHVybiByZWN0LnRvcCAtIGRvY3VtZW50RWxlbWVudC5jbGllbnRUb3A7XG4gICAgfVxuICAgIHJldHVybiByZWN0LnRvcCAtIChjb250YWluZXIgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgfVxuXG4gIHJldHVybiByZWN0LnRvcDtcbn1cbiJdfQ==