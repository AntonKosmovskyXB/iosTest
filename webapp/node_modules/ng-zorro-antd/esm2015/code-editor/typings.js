/**
 * @fileoverview added by tsickle
 * Generated from: typings.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { InjectionToken } from '@angular/core';
/** @enum {string} */
const NzCodeEditorLoadingStatus = {
    UNLOAD: "unload",
    LOADING: "loading",
    LOADED: "LOADED",
};
export { NzCodeEditorLoadingStatus };
/**
 * @record
 */
export function NzCodeEditorConfig() { }
if (false) {
    /** @type {?|undefined} */
    NzCodeEditorConfig.prototype.assetsRoot;
    /** @type {?|undefined} */
    NzCodeEditorConfig.prototype.defaultEditorOption;
    /** @type {?|undefined} */
    NzCodeEditorConfig.prototype.useStaticLoading;
    /**
     * @return {?}
     */
    NzCodeEditorConfig.prototype.onLoad = function () { };
    /**
     * @return {?}
     */
    NzCodeEditorConfig.prototype.onFirstEditorInit = function () { };
    /**
     * @return {?}
     */
    NzCodeEditorConfig.prototype.onInit = function () { };
}
/** @type {?} */
export const NZ_CODE_EDITOR_CONFIG = new InjectionToken('nz-code-editor-config', {
    providedIn: 'root',
    factory: NZ_CODE_EDITOR_CONFIG_FACTORY
});
/**
 * @return {?}
 */
export function NZ_CODE_EDITOR_CONFIG_FACTORY() {
    return {};
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwaW5ncy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29kZS1lZGl0b3IvIiwic291cmNlcyI6WyJ0eXBpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBWS9DLE1BQVkseUJBQXlCO0lBQ25DLE1BQU0sVUFBVztJQUNqQixPQUFPLFdBQVk7SUFDbkIsTUFBTSxVQUFXO0VBQ2xCOzs7OztBQUVELHdDQVFDOzs7SUFQQyx3Q0FBOEI7O0lBQzlCLGlEQUEwQzs7SUFDMUMsOENBQTJCOzs7O0lBRTNCLHNEQUFnQjs7OztJQUNoQixpRUFBMkI7Ozs7SUFDM0Isc0RBQWdCOzs7QUFHbEIsTUFBTSxPQUFPLHFCQUFxQixHQUFHLElBQUksY0FBYyxDQUFxQix1QkFBdUIsRUFBRTtJQUNuRyxVQUFVLEVBQUUsTUFBTTtJQUNsQixPQUFPLEVBQUUsNkJBQTZCO0NBQ3ZDLENBQUM7Ozs7QUFFRixNQUFNLFVBQVUsNkJBQTZCO0lBQzNDLE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTYWZlVXJsIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBlZGl0b3IgfSBmcm9tICdtb25hY28tZWRpdG9yJztcbmltcG9ydCBJU3RhbmRBbG9uZUVkaXRvckNvbnN0cnVjdGlvbk9wdGlvbnMgPSBlZGl0b3IuSVN0YW5kYWxvbmVFZGl0b3JDb25zdHJ1Y3Rpb25PcHRpb25zO1xuaW1wb3J0IElEaWZmRWRpdG9yQ29uc3RydWN0aW9uT3B0aW9ucyA9IGVkaXRvci5JRGlmZkVkaXRvckNvbnN0cnVjdGlvbk9wdGlvbnM7XG5cbmV4cG9ydCB0eXBlIEVkaXRvck9wdGlvbnMgPSBJU3RhbmRBbG9uZUVkaXRvckNvbnN0cnVjdGlvbk9wdGlvbnM7XG5leHBvcnQgdHlwZSBEaWZmRWRpdG9yT3B0aW9ucyA9IElEaWZmRWRpdG9yQ29uc3RydWN0aW9uT3B0aW9ucztcbmV4cG9ydCB0eXBlIEpvaW5lZEVkaXRvck9wdGlvbnMgPSBFZGl0b3JPcHRpb25zIHwgRGlmZkVkaXRvck9wdGlvbnM7XG5cbmV4cG9ydCB0eXBlIE56RWRpdG9yTW9kZSA9ICdub3JtYWwnIHwgJ2RpZmYnO1xuXG5leHBvcnQgZW51bSBOekNvZGVFZGl0b3JMb2FkaW5nU3RhdHVzIHtcbiAgVU5MT0FEID0gJ3VubG9hZCcsXG4gIExPQURJTkcgPSAnbG9hZGluZycsXG4gIExPQURFRCA9ICdMT0FERUQnXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnpDb2RlRWRpdG9yQ29uZmlnIHtcbiAgYXNzZXRzUm9vdD86IHN0cmluZyB8IFNhZmVVcmw7XG4gIGRlZmF1bHRFZGl0b3JPcHRpb24/OiBKb2luZWRFZGl0b3JPcHRpb25zO1xuICB1c2VTdGF0aWNMb2FkaW5nPzogYm9vbGVhbjtcblxuICBvbkxvYWQ/KCk6IHZvaWQ7XG4gIG9uRmlyc3RFZGl0b3JJbml0PygpOiB2b2lkO1xuICBvbkluaXQ/KCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBOWl9DT0RFX0VESVRPUl9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48TnpDb2RlRWRpdG9yQ29uZmlnPignbnotY29kZS1lZGl0b3ItY29uZmlnJywge1xuICBwcm92aWRlZEluOiAncm9vdCcsXG4gIGZhY3Rvcnk6IE5aX0NPREVfRURJVE9SX0NPTkZJR19GQUNUT1JZXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIE5aX0NPREVfRURJVE9SX0NPTkZJR19GQUNUT1JZKCk6IE56Q29kZUVkaXRvckNvbmZpZyB7XG4gIHJldHVybiB7fTtcbn1cbiJdfQ==