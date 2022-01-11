/**
 * @fileoverview added by tsickle
 * Generated from: singleton.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable } from '@angular/core';
import { environment } from 'ng-zorro-antd/core/environments';
import * as i0 from "@angular/core";
/**
 * @record
 */
function SingletonRegistryItem() { }
if (false) {
    /** @type {?} */
    SingletonRegistryItem.prototype.target;
}
/**
 * When running in test, singletons should not be destroyed. So we keep references of singletons
 * in this global variable.
 * @type {?}
 */
const testSingleRegistry = new Map();
/**
 * Some singletons should have life cycle that is same to Angular's. This service make sure that
 * those singletons get destroyed in HMR.
 */
export class NzSingletonService {
    constructor() {
        /**
         * This registry is used to register singleton in dev mode.
         * So that singletons get destroyed when hot module reload happens.
         *
         * This works in prod mode too but with no specific effect.
         */
        this._singletonRegistry = new Map();
    }
    /**
     * @private
     * @return {?}
     */
    get singletonRegistry() {
        return environment.isTestMode ? testSingleRegistry : this._singletonRegistry;
    }
    /**
     * @param {?} key
     * @param {?} target
     * @return {?}
     */
    registerSingletonWithKey(key, target) {
        /** @type {?} */
        const alreadyHave = this.singletonRegistry.has(key);
        /** @type {?} */
        const item = alreadyHave ? (/** @type {?} */ (this.singletonRegistry.get(key))) : this.withNewTarget(target);
        if (!alreadyHave) {
            this.singletonRegistry.set(key, item);
        }
    }
    /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    getSingletonWithKey(key) {
        return this.singletonRegistry.has(key) ? ((/** @type {?} */ ((/** @type {?} */ (this.singletonRegistry.get(key))).target))) : null;
    }
    /**
     * @private
     * @param {?} target
     * @return {?}
     */
    withNewTarget(target) {
        return {
            target
        };
    }
}
NzSingletonService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ NzSingletonService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NzSingletonService_Factory() { return new NzSingletonService(); }, token: NzSingletonService, providedIn: "root" });
if (false) {
    /**
     * This registry is used to register singleton in dev mode.
     * So that singletons get destroyed when hot module reload happens.
     *
     * This works in prod mode too but with no specific effect.
     * @type {?}
     * @private
     */
    NzSingletonService.prototype._singletonRegistry;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xldG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlL3NlcnZpY2VzLyIsInNvdXJjZXMiOlsic2luZ2xldG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7OztBQUc5RCxvQ0FFQzs7O0lBREMsdUNBQWtCOzs7Ozs7O01BT2Qsa0JBQWtCLEdBQUcsSUFBSSxHQUFHLEVBQWlDOzs7OztBQVNuRSxNQUFNLE9BQU8sa0JBQWtCO0lBSC9COzs7Ozs7O1FBY1UsdUJBQWtCLEdBQUcsSUFBSSxHQUFHLEVBQWlDLENBQUM7S0FvQnZFOzs7OztJQTlCQyxJQUFZLGlCQUFpQjtRQUMzQixPQUFPLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDL0UsQ0FBQzs7Ozs7O0lBVUQsd0JBQXdCLENBQUMsR0FBVyxFQUFFLE1BQWlCOztjQUMvQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7O2NBQzdDLElBQUksR0FBMEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxtQkFBQSxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBRS9HLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDOzs7Ozs7SUFFRCxtQkFBbUIsQ0FBSSxHQUFXO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBQSxtQkFBQSxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsTUFBTSxFQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2pHLENBQUM7Ozs7OztJQUVPLGFBQWEsQ0FBQyxNQUFpQjtRQUNyQyxPQUFPO1lBQ0wsTUFBTTtTQUNQLENBQUM7SUFDSixDQUFDOzs7WUFqQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7Ozs7SUFZQyxnREFBc0UiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2Vudmlyb25tZW50cyc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbnRlcmZhY2UgU2luZ2xldG9uUmVnaXN0cnlJdGVtIHtcbiAgdGFyZ2V0OiBOelNhZmVBbnk7XG59XG5cbi8qKlxuICogV2hlbiBydW5uaW5nIGluIHRlc3QsIHNpbmdsZXRvbnMgc2hvdWxkIG5vdCBiZSBkZXN0cm95ZWQuIFNvIHdlIGtlZXAgcmVmZXJlbmNlcyBvZiBzaW5nbGV0b25zXG4gKiBpbiB0aGlzIGdsb2JhbCB2YXJpYWJsZS5cbiAqL1xuY29uc3QgdGVzdFNpbmdsZVJlZ2lzdHJ5ID0gbmV3IE1hcDxzdHJpbmcsIFNpbmdsZXRvblJlZ2lzdHJ5SXRlbT4oKTtcblxuLyoqXG4gKiBTb21lIHNpbmdsZXRvbnMgc2hvdWxkIGhhdmUgbGlmZSBjeWNsZSB0aGF0IGlzIHNhbWUgdG8gQW5ndWxhcidzLiBUaGlzIHNlcnZpY2UgbWFrZSBzdXJlIHRoYXRcbiAqIHRob3NlIHNpbmdsZXRvbnMgZ2V0IGRlc3Ryb3llZCBpbiBITVIuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE56U2luZ2xldG9uU2VydmljZSB7XG4gIHByaXZhdGUgZ2V0IHNpbmdsZXRvblJlZ2lzdHJ5KCk6IE1hcDxzdHJpbmcsIFNpbmdsZXRvblJlZ2lzdHJ5SXRlbT4ge1xuICAgIHJldHVybiBlbnZpcm9ubWVudC5pc1Rlc3RNb2RlID8gdGVzdFNpbmdsZVJlZ2lzdHJ5IDogdGhpcy5fc2luZ2xldG9uUmVnaXN0cnk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyByZWdpc3RyeSBpcyB1c2VkIHRvIHJlZ2lzdGVyIHNpbmdsZXRvbiBpbiBkZXYgbW9kZS5cbiAgICogU28gdGhhdCBzaW5nbGV0b25zIGdldCBkZXN0cm95ZWQgd2hlbiBob3QgbW9kdWxlIHJlbG9hZCBoYXBwZW5zLlxuICAgKlxuICAgKiBUaGlzIHdvcmtzIGluIHByb2QgbW9kZSB0b28gYnV0IHdpdGggbm8gc3BlY2lmaWMgZWZmZWN0LlxuICAgKi9cbiAgcHJpdmF0ZSBfc2luZ2xldG9uUmVnaXN0cnkgPSBuZXcgTWFwPHN0cmluZywgU2luZ2xldG9uUmVnaXN0cnlJdGVtPigpO1xuXG4gIHJlZ2lzdGVyU2luZ2xldG9uV2l0aEtleShrZXk6IHN0cmluZywgdGFyZ2V0OiBOelNhZmVBbnkpOiB2b2lkIHtcbiAgICBjb25zdCBhbHJlYWR5SGF2ZSA9IHRoaXMuc2luZ2xldG9uUmVnaXN0cnkuaGFzKGtleSk7XG4gICAgY29uc3QgaXRlbTogU2luZ2xldG9uUmVnaXN0cnlJdGVtID0gYWxyZWFkeUhhdmUgPyB0aGlzLnNpbmdsZXRvblJlZ2lzdHJ5LmdldChrZXkpISA6IHRoaXMud2l0aE5ld1RhcmdldCh0YXJnZXQpO1xuXG4gICAgaWYgKCFhbHJlYWR5SGF2ZSkge1xuICAgICAgdGhpcy5zaW5nbGV0b25SZWdpc3RyeS5zZXQoa2V5LCBpdGVtKTtcbiAgICB9XG4gIH1cblxuICBnZXRTaW5nbGV0b25XaXRoS2V5PFQ+KGtleTogc3RyaW5nKTogVCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNpbmdsZXRvblJlZ2lzdHJ5LmhhcyhrZXkpID8gKHRoaXMuc2luZ2xldG9uUmVnaXN0cnkuZ2V0KGtleSkhLnRhcmdldCBhcyBUKSA6IG51bGw7XG4gIH1cblxuICBwcml2YXRlIHdpdGhOZXdUYXJnZXQodGFyZ2V0OiBOelNhZmVBbnkpOiBTaW5nbGV0b25SZWdpc3RyeUl0ZW0ge1xuICAgIHJldHVybiB7XG4gICAgICB0YXJnZXRcbiAgICB9O1xuICB9XG59XG4iXX0=