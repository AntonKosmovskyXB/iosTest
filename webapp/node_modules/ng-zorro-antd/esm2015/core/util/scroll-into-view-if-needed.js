/**
 * @fileoverview added by tsickle
 * Generated from: scroll-into-view-if-needed.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} node
 * @return {?}
 */
export function scrollIntoView(node) {
    /** @type {?} */
    const nodeAsAny = (/** @type {?} */ (node));
    if (nodeAsAny.scrollIntoViewIfNeeded) {
        /* tslint:disable-next-line:no-string-literal */
        nodeAsAny.scrollIntoViewIfNeeded(false);
        return;
    }
    if (node.scrollIntoView) {
        node.scrollIntoView(false);
        return;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWludG8tdmlldy1pZi1uZWVkZWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvdXRpbC8iLCJzb3VyY2VzIjpbInNjcm9sbC1pbnRvLXZpZXctaWYtbmVlZGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE1BQU0sVUFBVSxjQUFjLENBQUMsSUFBaUI7O1VBQ3hDLFNBQVMsR0FBRyxtQkFBQSxJQUFJLEVBQWE7SUFDbkMsSUFBSSxTQUFTLENBQUMsc0JBQXNCLEVBQUU7UUFDcEMsZ0RBQWdEO1FBQ2hELFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxPQUFPO0tBQ1I7SUFDRCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7UUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixPQUFPO0tBQ1I7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY3JvbGxJbnRvVmlldyhub2RlOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICBjb25zdCBub2RlQXNBbnkgPSBub2RlIGFzIE56U2FmZUFueTtcbiAgaWYgKG5vZGVBc0FueS5zY3JvbGxJbnRvVmlld0lmTmVlZGVkKSB7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsICovXG4gICAgbm9kZUFzQW55LnNjcm9sbEludG9WaWV3SWZOZWVkZWQoZmFsc2UpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAobm9kZS5zY3JvbGxJbnRvVmlldykge1xuICAgIG5vZGUuc2Nyb2xsSW50b1ZpZXcoZmFsc2UpO1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19