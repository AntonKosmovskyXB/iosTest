/**
 * @fileoverview added by tsickle
 * Generated from: interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @record
 */
export function NzUploadFile() { }
if (false) {
    /** @type {?} */
    NzUploadFile.prototype.uid;
    /** @type {?|undefined} */
    NzUploadFile.prototype.size;
    /** @type {?} */
    NzUploadFile.prototype.name;
    /** @type {?|undefined} */
    NzUploadFile.prototype.filename;
    /** @type {?|undefined} */
    NzUploadFile.prototype.lastModified;
    /** @type {?|undefined} */
    NzUploadFile.prototype.lastModifiedDate;
    /** @type {?|undefined} */
    NzUploadFile.prototype.url;
    /** @type {?|undefined} */
    NzUploadFile.prototype.status;
    /** @type {?|undefined} */
    NzUploadFile.prototype.originFileObj;
    /** @type {?|undefined} */
    NzUploadFile.prototype.percent;
    /** @type {?|undefined} */
    NzUploadFile.prototype.thumbUrl;
    /** @type {?|undefined} */
    NzUploadFile.prototype.response;
    /** @type {?|undefined} */
    NzUploadFile.prototype.error;
    /** @type {?|undefined} */
    NzUploadFile.prototype.linkProps;
    /** @type {?|undefined} */
    NzUploadFile.prototype.type;
    /* Skipping unhandled member: [key: string]: NzSafeAny;*/
}
/**
 * @record
 */
export function NzUploadChangeParam() { }
if (false) {
    /** @type {?} */
    NzUploadChangeParam.prototype.file;
    /** @type {?} */
    NzUploadChangeParam.prototype.fileList;
    /** @type {?|undefined} */
    NzUploadChangeParam.prototype.event;
    /**
     * Callback type.
     * @type {?|undefined}
     */
    NzUploadChangeParam.prototype.type;
}
/**
 * @record
 */
export function NzShowUploadList() { }
if (false) {
    /** @type {?|undefined} */
    NzShowUploadList.prototype.showRemoveIcon;
    /** @type {?|undefined} */
    NzShowUploadList.prototype.showPreviewIcon;
    /** @type {?|undefined} */
    NzShowUploadList.prototype.showDownloadIcon;
}
/**
 * @record
 */
export function ZipButtonOptions() { }
if (false) {
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.disabled;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.accept;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.action;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.directory;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.openFileDialogOnClick;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.data;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.headers;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.name;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.multiple;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.withCredentials;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.filters;
    /**
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    ZipButtonOptions.prototype.beforeUpload = function (file, fileList) { };
    /**
     * @param {?} item
     * @return {?}
     */
    ZipButtonOptions.prototype.customRequest = function (item) { };
    /**
     * @param {?} file
     * @return {?}
     */
    ZipButtonOptions.prototype.transformFile = function (file) { };
    /**
     * @param {?} file
     * @return {?}
     */
    ZipButtonOptions.prototype.onStart = function (file) { };
    /**
     * @param {?} e
     * @param {?} file
     * @return {?}
     */
    ZipButtonOptions.prototype.onProgress = function (e, file) { };
    /**
     * @param {?} ret
     * @param {?} file
     * @param {?} xhr
     * @return {?}
     */
    ZipButtonOptions.prototype.onSuccess = function (ret, file, xhr) { };
    /**
     * @param {?} err
     * @param {?} file
     * @return {?}
     */
    ZipButtonOptions.prototype.onError = function (err, file) { };
}
/**
 * @record
 */
export function UploadFilter() { }
if (false) {
    /** @type {?} */
    UploadFilter.prototype.name;
    /**
     * @param {?} fileList
     * @return {?}
     */
    UploadFilter.prototype.fn = function (fileList) { };
}
/**
 * @record
 */
export function NzUploadXHRArgs() { }
if (false) {
    /** @type {?|undefined} */
    NzUploadXHRArgs.prototype.action;
    /** @type {?|undefined} */
    NzUploadXHRArgs.prototype.name;
    /** @type {?|undefined} */
    NzUploadXHRArgs.prototype.headers;
    /** @type {?} */
    NzUploadXHRArgs.prototype.file;
    /** @type {?} */
    NzUploadXHRArgs.prototype.postFile;
    /** @type {?|undefined} */
    NzUploadXHRArgs.prototype.data;
    /** @type {?|undefined} */
    NzUploadXHRArgs.prototype.withCredentials;
    /**
     * @param {?} e
     * @param {?} file
     * @return {?}
     */
    NzUploadXHRArgs.prototype.onProgress = function (e, file) { };
    /**
     * @param {?} ret
     * @param {?} file
     * @param {?} xhr
     * @return {?}
     */
    NzUploadXHRArgs.prototype.onSuccess = function (ret, file, xhr) { };
    /**
     * @param {?} err
     * @param {?} file
     * @return {?}
     */
    NzUploadXHRArgs.prototype.onError = function (err, file) { };
}
var NzShowUploadListInterface = /** @class */ (function () {
    function NzShowUploadListInterface() {
    }
    return NzShowUploadListInterface;
}());
export { NzShowUploadListInterface };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC91cGxvYWQvIiwic291cmNlcyI6WyJpbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBaUJBLGtDQWtCQzs7O0lBakJDLDJCQUFZOztJQUNaLDRCQUFjOztJQUNkLDRCQUFhOztJQUNiLGdDQUFrQjs7SUFDbEIsb0NBQXNCOztJQUN0Qix3Q0FBd0I7O0lBQ3hCLDJCQUFhOztJQUNiLDhCQUEwQjs7SUFDMUIscUNBQXFCOztJQUNyQiwrQkFBaUI7O0lBQ2pCLGdDQUFrQjs7SUFDbEIsZ0NBQXFCOztJQUNyQiw2QkFBa0I7O0lBQ2xCLGlDQUFpQzs7SUFDakMsNEJBQWM7Ozs7OztBQUtoQix5Q0FNQzs7O0lBTEMsbUNBQW1COztJQUNuQix1Q0FBeUI7O0lBQ3pCLG9DQUE0Qjs7Ozs7SUFFNUIsbUNBQWM7Ozs7O0FBR2hCLHNDQUlDOzs7SUFIQywwQ0FBeUI7O0lBQ3pCLDJDQUEwQjs7SUFDMUIsNENBQTJCOzs7OztBQUs3QixzQ0FtQkM7OztJQWxCQyxvQ0FBbUI7O0lBQ25CLGtDQUEyQjs7SUFDM0Isa0NBQXdFOztJQUN4RSxxQ0FBb0I7O0lBQ3BCLGlEQUFnQzs7SUFHaEMsZ0NBQTBEOztJQUMxRCxtQ0FBNkQ7O0lBQzdELGdDQUFjOztJQUNkLG9DQUFtQjs7SUFDbkIsMkNBQTBCOztJQUMxQixtQ0FBeUI7Ozs7OztJQVB6Qix3RUFBNkY7Ozs7O0lBQzdGLCtEQUE4Qzs7Ozs7SUFPOUMsK0RBQThEOzs7OztJQUM5RCx5REFBbUM7Ozs7OztJQUNuQywrREFBb0Q7Ozs7Ozs7SUFDcEQscUVBQXFFOzs7Ozs7SUFDckUsOERBQW1EOzs7OztBQUdyRCxrQ0FHQzs7O0lBRkMsNEJBQWE7Ozs7O0lBQ2Isb0RBQTBFOzs7OztBQUc1RSxxQ0FXQzs7O0lBVkMsaUNBQWdCOztJQUNoQiwrQkFBYzs7SUFDZCxrQ0FBMEI7O0lBQzFCLCtCQUFtQjs7SUFDbkIsbUNBQThDOztJQUM5QywrQkFBdUI7O0lBQ3ZCLDBDQUEwQjs7Ozs7O0lBQzFCLDhEQUFvRDs7Ozs7OztJQUNwRCxvRUFBcUU7Ozs7OztJQUNyRSw2REFBbUQ7O0FBNkNyRDtJQUFBO0lBQXdDLENBQUM7SUFBRCxnQ0FBQztBQUFELENBQUMsQUFBekMsSUFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSW5kZXhhYmxlT2JqZWN0LCBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG4vKiogU3RhdHVzICovXG5leHBvcnQgdHlwZSBVcGxvYWRGaWxlU3RhdHVzID0gJ2Vycm9yJyB8ICdzdWNjZXNzJyB8ICdkb25lJyB8ICd1cGxvYWRpbmcnIHwgJ3JlbW92ZWQnO1xuXG5leHBvcnQgdHlwZSBOelVwbG9hZFR5cGUgPSAnc2VsZWN0JyB8ICdkcmFnJztcblxuLyoqIEJ1aWx0LWluIHN0eWxlcyBvZiB0aGUgdXBsb2FkaW5nIGxpc3QuICovXG5leHBvcnQgdHlwZSBOelVwbG9hZExpc3RUeXBlID0gJ3RleHQnIHwgJ3BpY3R1cmUnIHwgJ3BpY3R1cmUtY2FyZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnpVcGxvYWRGaWxlIHtcbiAgdWlkOiBzdHJpbmc7XG4gIHNpemU/OiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgZmlsZW5hbWU/OiBzdHJpbmc7XG4gIGxhc3RNb2RpZmllZD86IHN0cmluZztcbiAgbGFzdE1vZGlmaWVkRGF0ZT86IERhdGU7XG4gIHVybD86IHN0cmluZztcbiAgc3RhdHVzPzogVXBsb2FkRmlsZVN0YXR1cztcbiAgb3JpZ2luRmlsZU9iaj86IEZpbGU7XG4gIHBlcmNlbnQ/OiBudW1iZXI7XG4gIHRodW1iVXJsPzogc3RyaW5nO1xuICByZXNwb25zZT86IE56U2FmZUFueTtcbiAgZXJyb3I/OiBOelNhZmVBbnk7XG4gIGxpbmtQcm9wcz86IHsgZG93bmxvYWQ6IHN0cmluZyB9O1xuICB0eXBlPzogc3RyaW5nO1xuXG4gIFtrZXk6IHN0cmluZ106IE56U2FmZUFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOelVwbG9hZENoYW5nZVBhcmFtIHtcbiAgZmlsZTogTnpVcGxvYWRGaWxlO1xuICBmaWxlTGlzdDogTnpVcGxvYWRGaWxlW107XG4gIGV2ZW50PzogeyBwZXJjZW50OiBudW1iZXIgfTtcbiAgLyoqIENhbGxiYWNrIHR5cGUuICovXG4gIHR5cGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnpTaG93VXBsb2FkTGlzdCB7XG4gIHNob3dSZW1vdmVJY29uPzogYm9vbGVhbjtcbiAgc2hvd1ByZXZpZXdJY29uPzogYm9vbGVhbjtcbiAgc2hvd0Rvd25sb2FkSWNvbj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCB0eXBlIE56VXBsb2FkVHJhbnNmb3JtRmlsZVR5cGUgPSBzdHJpbmcgfCBCbG9iIHwgTnpVcGxvYWRGaWxlIHwgT2JzZXJ2YWJsZTxzdHJpbmcgfCBCbG9iIHwgRmlsZT47XG5cbmV4cG9ydCBpbnRlcmZhY2UgWmlwQnV0dG9uT3B0aW9ucyB7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgYWNjZXB0Pzogc3RyaW5nIHwgc3RyaW5nW107XG4gIGFjdGlvbj86IHN0cmluZyB8ICgoZmlsZTogTnpVcGxvYWRGaWxlKSA9PiBzdHJpbmcgfCBPYnNlcnZhYmxlPHN0cmluZz4pO1xuICBkaXJlY3Rvcnk/OiBib29sZWFuO1xuICBvcGVuRmlsZURpYWxvZ09uQ2xpY2s/OiBib29sZWFuO1xuICBiZWZvcmVVcGxvYWQ/KGZpbGU6IE56VXBsb2FkRmlsZSwgZmlsZUxpc3Q6IE56VXBsb2FkRmlsZVtdKTogYm9vbGVhbiB8IE9ic2VydmFibGU8TnpTYWZlQW55PjtcbiAgY3VzdG9tUmVxdWVzdD8oaXRlbTogTnpTYWZlQW55KTogU3Vic2NyaXB0aW9uO1xuICBkYXRhPzoge30gfCAoKGZpbGU6IE56VXBsb2FkRmlsZSkgPT4ge30gfCBPYnNlcnZhYmxlPHt9Pik7XG4gIGhlYWRlcnM/OiB7fSB8ICgoZmlsZTogTnpVcGxvYWRGaWxlKSA9PiB7fSB8IE9ic2VydmFibGU8e30+KTtcbiAgbmFtZT86IHN0cmluZztcbiAgbXVsdGlwbGU/OiBib29sZWFuO1xuICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICBmaWx0ZXJzPzogVXBsb2FkRmlsdGVyW107XG4gIHRyYW5zZm9ybUZpbGU/KGZpbGU6IE56VXBsb2FkRmlsZSk6IE56VXBsb2FkVHJhbnNmb3JtRmlsZVR5cGU7XG4gIG9uU3RhcnQ/KGZpbGU6IE56VXBsb2FkRmlsZSk6IHZvaWQ7XG4gIG9uUHJvZ3Jlc3M/KGU6IE56U2FmZUFueSwgZmlsZTogTnpVcGxvYWRGaWxlKTogdm9pZDtcbiAgb25TdWNjZXNzPyhyZXQ6IE56U2FmZUFueSwgZmlsZTogTnpVcGxvYWRGaWxlLCB4aHI6IE56U2FmZUFueSk6IHZvaWQ7XG4gIG9uRXJyb3I/KGVycjogTnpTYWZlQW55LCBmaWxlOiBOelVwbG9hZEZpbGUpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwbG9hZEZpbHRlciB7XG4gIG5hbWU6IHN0cmluZztcbiAgZm4oZmlsZUxpc3Q6IE56VXBsb2FkRmlsZVtdKTogTnpVcGxvYWRGaWxlW10gfCBPYnNlcnZhYmxlPE56VXBsb2FkRmlsZVtdPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOelVwbG9hZFhIUkFyZ3Mge1xuICBhY3Rpb24/OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGhlYWRlcnM/OiBJbmRleGFibGVPYmplY3Q7XG4gIGZpbGU6IE56VXBsb2FkRmlsZTtcbiAgcG9zdEZpbGU6IHN0cmluZyB8IEJsb2IgfCBGaWxlIHwgTnpVcGxvYWRGaWxlO1xuICBkYXRhPzogSW5kZXhhYmxlT2JqZWN0O1xuICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICBvblByb2dyZXNzPyhlOiBOelNhZmVBbnksIGZpbGU6IE56VXBsb2FkRmlsZSk6IHZvaWQ7XG4gIG9uU3VjY2Vzcz8ocmV0OiBOelNhZmVBbnksIGZpbGU6IE56VXBsb2FkRmlsZSwgeGhyOiBOelNhZmVBbnkpOiB2b2lkO1xuICBvbkVycm9yPyhlcnI6IE56U2FmZUFueSwgZmlsZTogTnpVcGxvYWRGaWxlKTogdm9pZDtcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIE56VXBsb2FkVHlwZX0gZnJvbSB7QGxpbmsgQG5nLXpvcnJvLWFudGQvdXBsb2FkfSBpbnN0ZWFkLlxuICogQGJyZWFraW5nLWNoYW5nZSAxMC4wLjBcbiAqL1xuZXhwb3J0IHR5cGUgVXBsb2FkVHlwZSA9IE56VXBsb2FkVHlwZTtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIE56VXBsb2FkTGlzdFR5cGV9IGZyb20ge0BsaW5rIEBuZy16b3Jyby1hbnRkL3VwbG9hZH0gaW5zdGVhZC5cbiAqIEBicmVha2luZy1jaGFuZ2UgMTAuMC4wXG4gKi9cbmV4cG9ydCB0eXBlIFVwbG9hZExpc3RUeXBlID0gTnpVcGxvYWRMaXN0VHlwZTtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIE56VXBsb2FkRmlsZX0gZnJvbSB7QGxpbmsgQG5nLXpvcnJvLWFudGQvdXBsb2FkfSBpbnN0ZWFkLlxuICogQGJyZWFraW5nLWNoYW5nZSAxMC4wLjBcbiAqL1xuZXhwb3J0IHR5cGUgVXBsb2FkRmlsZSA9IE56VXBsb2FkRmlsZTtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIE56VXBsb2FkQ2hhbmdlUGFyYW19IGZyb20ge0BsaW5rIEBuZy16b3Jyby1hbnRkL3VwbG9hZH0gaW5zdGVhZC5cbiAqIEBicmVha2luZy1jaGFuZ2UgMTAuMC4wXG4gKi9cbmV4cG9ydCB0eXBlIFVwbG9hZENoYW5nZVBhcmFtID0gTnpVcGxvYWRDaGFuZ2VQYXJhbTtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIE56U2hvd1VwbG9hZExpc3R9IGZyb20ge0BsaW5rIEBuZy16b3Jyby1hbnRkL3VwbG9hZH0gaW5zdGVhZC5cbiAqIEBicmVha2luZy1jaGFuZ2UgMTAuMC4wXG4gKi9cbmV4cG9ydCB0eXBlIFNob3dVcGxvYWRMaXN0SW50ZXJmYWNlID0gTnpTaG93VXBsb2FkTGlzdDtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIE56VXBsb2FkVHJhbnNmb3JtRmlsZVR5cGV9IGZyb20ge0BsaW5rIEBuZy16b3Jyby1hbnRkL3VwbG9hZH0gaW5zdGVhZC5cbiAqIEBicmVha2luZy1jaGFuZ2UgMTAuMC4wXG4gKi9cbmV4cG9ydCB0eXBlIFVwbG9hZFRyYW5zZm9ybUZpbGVUeXBlID0gTnpVcGxvYWRUcmFuc2Zvcm1GaWxlVHlwZTtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIE56VXBsb2FkWEhSQXJnc30gZnJvbSB7QGxpbmsgQG5nLXpvcnJvLWFudGQvdXBsb2FkfSBpbnN0ZWFkLlxuICogQGJyZWFraW5nLWNoYW5nZSAxMC4wLjBcbiAqL1xuZXhwb3J0IHR5cGUgVXBsb2FkWEhSQXJncyA9IE56VXBsb2FkWEhSQXJncztcblxuZXhwb3J0IGNsYXNzIE56U2hvd1VwbG9hZExpc3RJbnRlcmZhY2Uge31cbiJdfQ==