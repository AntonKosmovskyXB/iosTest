/**
 * @fileoverview added by tsickle
 * Generated from: typings.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated Use the prefixed version.
 * @record
 */
export function CascaderOption() { }
if (false) {
    /** @type {?|undefined} */
    CascaderOption.prototype.value;
    /** @type {?|undefined} */
    CascaderOption.prototype.label;
    /** @type {?|undefined} */
    CascaderOption.prototype.title;
    /** @type {?|undefined} */
    CascaderOption.prototype.disabled;
    /** @type {?|undefined} */
    CascaderOption.prototype.loading;
    /** @type {?|undefined} */
    CascaderOption.prototype.isLeaf;
    /** @type {?|undefined} */
    CascaderOption.prototype.parent;
    /** @type {?|undefined} */
    CascaderOption.prototype.children;
    /* Skipping unhandled member: [key: string]: NzSafeAny;*/
}
/**
 * @deprecated Use the prefixed version.
 * @record
 */
export function CascaderSearchOption() { }
if (false) {
    /** @type {?} */
    CascaderSearchOption.prototype.path;
}
/**
 * @record
 */
export function NzShowSearchOptions() { }
if (false) {
    /** @type {?|undefined} */
    NzShowSearchOptions.prototype.filter;
    /** @type {?|undefined} */
    NzShowSearchOptions.prototype.sorter;
}
/**
 * @param {?} options
 * @return {?}
 */
export function isShowSearchObject(options) {
    return typeof options !== 'boolean';
}
/**
 * To avoid circular dependency, provide an interface of `NzCascaderComponent`
 * for `NzCascaderService`.
 * @record
 */
export function NzCascaderComponentAsSource() { }
if (false) {
    /** @type {?} */
    NzCascaderComponentAsSource.prototype.inputValue;
    /** @type {?} */
    NzCascaderComponentAsSource.prototype.nzShowSearch;
    /** @type {?} */
    NzCascaderComponentAsSource.prototype.nzLabelProperty;
    /** @type {?} */
    NzCascaderComponentAsSource.prototype.nzValueProperty;
    /** @type {?} */
    NzCascaderComponentAsSource.prototype.nzChangeOnSelect;
    /**
     * @param {?} option
     * @param {?} level
     * @return {?}
     */
    NzCascaderComponentAsSource.prototype.nzChangeOn = function (option, level) { };
    /**
     * @param {?} node
     * @param {?} index
     * @return {?}
     */
    NzCascaderComponentAsSource.prototype.nzLoadData = function (node, index) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwaW5ncy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2FzY2FkZXIvIiwic291cmNlcyI6WyJ0eXBpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQWdCQSxvQ0FXQzs7O0lBVkMsK0JBQWtCOztJQUNsQiwrQkFBZTs7SUFDZiwrQkFBZTs7SUFDZixrQ0FBbUI7O0lBQ25CLGlDQUFrQjs7SUFDbEIsZ0NBQWlCOztJQUNqQixnQ0FBMEI7O0lBQzFCLGtDQUE4Qjs7Ozs7OztBQVVoQywwQ0FFQzs7O0lBREMsb0NBQXlCOzs7OztBQUszQix5Q0FHQzs7O0lBRkMscUNBQTBCOztJQUMxQixxQ0FBMEI7Ozs7OztBQUc1QixNQUFNLFVBQVUsa0JBQWtCLENBQUMsT0FBc0M7SUFDdkUsT0FBTyxPQUFPLE9BQU8sS0FBSyxTQUFTLENBQUM7QUFDdEMsQ0FBQzs7Ozs7O0FBTUQsaURBVUM7OztJQVRDLGlEQUFtQjs7SUFDbkIsbURBQTRDOztJQUM1QyxzREFBd0I7O0lBQ3hCLHNEQUF3Qjs7SUFDeEIsdURBQTBCOzs7Ozs7SUFFMUIsZ0ZBQThEOzs7Ozs7SUFFOUQsOEVBQTJFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmV4cG9ydCB0eXBlIE56Q2FzY2FkZXJFeHBhbmRUcmlnZ2VyID0gJ2NsaWNrJyB8ICdob3Zlcic7XG5leHBvcnQgdHlwZSBOekNhc2NhZGVyVHJpZ2dlclR5cGUgPSAnY2xpY2snIHwgJ2hvdmVyJztcbmV4cG9ydCB0eXBlIE56Q2FzY2FkZXJTaXplID0gJ3NtYWxsJyB8ICdsYXJnZScgfCAnZGVmYXVsdCc7XG5cbmV4cG9ydCB0eXBlIE56Q2FzY2FkZXJGaWx0ZXIgPSAoc2VhcmNoVmFsdWU6IHN0cmluZywgcGF0aDogTnpDYXNjYWRlck9wdGlvbltdKSA9PiBib29sZWFuO1xuZXhwb3J0IHR5cGUgTnpDYXNjYWRlclNvcnRlciA9IChhOiBOekNhc2NhZGVyT3B0aW9uW10sIGI6IE56Q2FzY2FkZXJPcHRpb25bXSwgaW5wdXRWYWx1ZTogc3RyaW5nKSA9PiBudW1iZXI7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHRoZSBwcmVmaXhlZCB2ZXJzaW9uLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENhc2NhZGVyT3B0aW9uIHtcbiAgdmFsdWU/OiBOelNhZmVBbnk7XG4gIGxhYmVsPzogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBsb2FkaW5nPzogYm9vbGVhbjtcbiAgaXNMZWFmPzogYm9vbGVhbjtcbiAgcGFyZW50PzogTnpDYXNjYWRlck9wdGlvbjtcbiAgY2hpbGRyZW4/OiBOekNhc2NhZGVyT3B0aW9uW107XG5cbiAgW2tleTogc3RyaW5nXTogTnpTYWZlQW55O1xufVxuXG5leHBvcnQgdHlwZSBOekNhc2NhZGVyT3B0aW9uID0gQ2FzY2FkZXJPcHRpb247XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHRoZSBwcmVmaXhlZCB2ZXJzaW9uLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENhc2NhZGVyU2VhcmNoT3B0aW9uIGV4dGVuZHMgTnpDYXNjYWRlck9wdGlvbiB7XG4gIHBhdGg6IE56Q2FzY2FkZXJPcHRpb25bXTtcbn1cblxuZXhwb3J0IHR5cGUgTnpDYXNjYWRlclNlYXJjaE9wdGlvbiA9IENhc2NhZGVyU2VhcmNoT3B0aW9uO1xuXG5leHBvcnQgaW50ZXJmYWNlIE56U2hvd1NlYXJjaE9wdGlvbnMge1xuICBmaWx0ZXI/OiBOekNhc2NhZGVyRmlsdGVyO1xuICBzb3J0ZXI/OiBOekNhc2NhZGVyU29ydGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTaG93U2VhcmNoT2JqZWN0KG9wdGlvbnM6IE56U2hvd1NlYXJjaE9wdGlvbnMgfCBib29sZWFuKTogb3B0aW9ucyBpcyBOelNob3dTZWFyY2hPcHRpb25zIHtcbiAgcmV0dXJuIHR5cGVvZiBvcHRpb25zICE9PSAnYm9vbGVhbic7XG59XG5cbi8qKlxuICogVG8gYXZvaWQgY2lyY3VsYXIgZGVwZW5kZW5jeSwgcHJvdmlkZSBhbiBpbnRlcmZhY2Ugb2YgYE56Q2FzY2FkZXJDb21wb25lbnRgXG4gKiBmb3IgYE56Q2FzY2FkZXJTZXJ2aWNlYC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOekNhc2NhZGVyQ29tcG9uZW50QXNTb3VyY2Uge1xuICBpbnB1dFZhbHVlOiBzdHJpbmc7XG4gIG56U2hvd1NlYXJjaDogTnpTaG93U2VhcmNoT3B0aW9ucyB8IGJvb2xlYW47XG4gIG56TGFiZWxQcm9wZXJ0eTogc3RyaW5nO1xuICBuelZhbHVlUHJvcGVydHk6IHN0cmluZztcbiAgbnpDaGFuZ2VPblNlbGVjdDogYm9vbGVhbjtcblxuICBuekNoYW5nZU9uPyhvcHRpb246IE56Q2FzY2FkZXJPcHRpb24sIGxldmVsOiBudW1iZXIpOiBib29sZWFuO1xuXG4gIG56TG9hZERhdGE/KG5vZGU6IE56Q2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIpOiBQcm9taXNlTGlrZTxOelNhZmVBbnk+O1xufVxuIl19