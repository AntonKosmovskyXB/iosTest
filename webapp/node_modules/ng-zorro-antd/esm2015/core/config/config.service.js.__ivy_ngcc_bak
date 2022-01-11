/**
 * @fileoverview added by tsickle
 * Generated from: config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Inject, Injectable, Optional } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, mapTo } from 'rxjs/operators';
import { NZ_CONFIG } from './config';
import * as i0 from "@angular/core";
import * as i1 from "./config";
/** @type {?} */
const isDefined = (/**
 * @param {?=} value
 * @return {?}
 */
function (value) {
    return value !== undefined;
});
const ɵ0 = isDefined;
export class NzConfigService {
    /**
     * @param {?=} defaultConfig
     */
    constructor(defaultConfig) {
        this.configUpdated$ = new Subject();
        this.config = defaultConfig || {};
    }
    /**
     * @template T
     * @param {?} componentName
     * @return {?}
     */
    getConfigForComponent(componentName) {
        return this.config[componentName];
    }
    /**
     * @param {?} componentName
     * @return {?}
     */
    getConfigChangeEventForComponent(componentName) {
        return this.configUpdated$.pipe(filter((/**
         * @param {?} n
         * @return {?}
         */
        n => n === componentName)), mapTo(undefined));
    }
    /**
     * @template T
     * @param {?} componentName
     * @param {?} value
     * @return {?}
     */
    set(componentName, value) {
        this.config[componentName] = Object.assign(Object.assign({}, this.config[componentName]), value);
        this.configUpdated$.next(componentName);
    }
}
NzConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzConfigService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_CONFIG,] }] }
];
/** @nocollapse */ NzConfigService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NzConfigService_Factory() { return new NzConfigService(i0.ɵɵinject(i1.NZ_CONFIG, 8)); }, token: NzConfigService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzConfigService.prototype.configUpdated$;
    /**
     * Global config holding property.
     * @type {?}
     * @private
     */
    NzConfigService.prototype.config;
}
// tslint:disable:no-invalid-this
/**
 * This decorator is used to decorate properties. If a property is decorated, it would try to load default value from
 * config.
 * @template T
 * @param {?} componentName
 * @return {?}
 */
// tslint:disable-next-line:typedef
export function WithConfig(componentName) {
    return (/**
     * @param {?} target
     * @param {?} propName
     * @param {?=} originalDescriptor
     * @return {?}
     */
    function ConfigDecorator(target, propName, originalDescriptor) {
        /** @type {?} */
        const privatePropName = `$$__assignedValue__${propName}`;
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true,
            enumerable: false
        });
        return {
            /**
             * @return {?}
             */
            get() {
                /** @type {?} */
                const originalValue = (originalDescriptor === null || originalDescriptor === void 0 ? void 0 : originalDescriptor.get) ? originalDescriptor.get.bind(this)() : this[privatePropName];
                /** @type {?} */
                const assignedByUser = ((this.assignmentCount || {})[propName] || 0) > 1;
                if (assignedByUser && isDefined(originalValue)) {
                    return originalValue;
                }
                /** @type {?} */
                const componentConfig = this.nzConfigService.getConfigForComponent(componentName) || {};
                /** @type {?} */
                const configValue = componentConfig[propName];
                /** @type {?} */
                const ret = isDefined(configValue) ? configValue : originalValue;
                return ret;
            },
            /**
             * @param {?=} value
             * @return {?}
             */
            set(value) {
                // If the value is assigned, we consider the newly assigned value as 'assigned by user'.
                this.assignmentCount = this.assignmentCount || {};
                this.assignmentCount[propName] = (this.assignmentCount[propName] || 0) + 1;
                if (originalDescriptor === null || originalDescriptor === void 0 ? void 0 : originalDescriptor.set) {
                    originalDescriptor.set.bind(this)(value);
                }
                else {
                    this[privatePropName] = value;
                }
            },
            configurable: true,
            enumerable: true
        };
    });
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnLyIsInNvdXJjZXMiOlsiY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvQyxPQUFPLEVBQUUsU0FBUyxFQUF5QixNQUFNLFVBQVUsQ0FBQzs7OztNQUV0RCxTQUFTOzs7O0FBQUcsVUFBVSxLQUFpQjtJQUMzQyxPQUFPLEtBQUssS0FBSyxTQUFTLENBQUM7QUFDN0IsQ0FBQyxDQUFBOztBQUtELE1BQU0sT0FBTyxlQUFlOzs7O0lBTTFCLFlBQTJDLGFBQXdCO1FBTDNELG1CQUFjLEdBQUcsSUFBSSxPQUFPLEVBQWtCLENBQUM7UUFNckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLElBQUksRUFBRSxDQUFDO0lBQ3BDLENBQUM7Ozs7OztJQUVELHFCQUFxQixDQUF3QixhQUFnQjtRQUMzRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCxnQ0FBZ0MsQ0FBQyxhQUEwQjtRQUN6RCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUM3QixNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssYUFBYSxFQUFDLEVBQ2hDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FDakIsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFFRCxHQUFHLENBQXdCLGFBQWdCLEVBQUUsS0FBa0I7UUFDN0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsbUNBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBSyxLQUFLLENBQUUsQ0FBQztRQUN6RSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7WUEzQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7OzRDQU9jLFFBQVEsWUFBSSxNQUFNLFNBQUMsU0FBUzs7Ozs7Ozs7SUFMekMseUNBQXVEOzs7Ozs7SUFHdkQsaUNBQXlCOzs7Ozs7Ozs7OztBQThCM0IsTUFBTSxVQUFVLFVBQVUsQ0FBSSxhQUEwQjtJQUN0RDs7Ozs7O0lBQU8sU0FBUyxlQUFlLENBQUMsTUFBaUIsRUFBRSxRQUFtQixFQUFFLGtCQUErQzs7Y0FDL0csZUFBZSxHQUFHLHNCQUFzQixRQUFRLEVBQUU7UUFFeEQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsZUFBZSxFQUFFO1lBQzdDLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsVUFBVSxFQUFFLEtBQUs7U0FDbEIsQ0FBQyxDQUFDO1FBRUgsT0FBTzs7OztZQUNMLEdBQUc7O3NCQUNLLGFBQWEsR0FBRyxDQUFBLGtCQUFrQixhQUFsQixrQkFBa0IsdUJBQWxCLGtCQUFrQixDQUFFLEdBQUcsRUFBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDOztzQkFDckcsY0FBYyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBRXhFLElBQUksY0FBYyxJQUFJLFNBQVMsQ0FBQyxhQUFhLENBQUMsRUFBRTtvQkFDOUMsT0FBTyxhQUFhLENBQUM7aUJBQ3RCOztzQkFFSyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFOztzQkFDakYsV0FBVyxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUM7O3NCQUN2QyxHQUFHLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLGFBQWE7Z0JBRWhFLE9BQU8sR0FBRyxDQUFDO1lBQ2IsQ0FBQzs7Ozs7WUFDRCxHQUFHLENBQUMsS0FBUztnQkFDWCx3RkFBd0Y7Z0JBQ3hGLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsSUFBSSxFQUFFLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFM0UsSUFBSSxrQkFBa0IsYUFBbEIsa0JBQWtCLHVCQUFsQixrQkFBa0IsQ0FBRSxHQUFHLEVBQUU7b0JBQzNCLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzFDO3FCQUFNO29CQUNMLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxLQUFLLENBQUM7aUJBQy9CO1lBQ0gsQ0FBQztZQUNELFlBQVksRUFBRSxJQUFJO1lBQ2xCLFVBQVUsRUFBRSxJQUFJO1NBQ2pCLENBQUM7SUFDSixDQUFDLEVBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgZmlsdGVyLCBtYXBUbyB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTlpfQ09ORklHLCBOekNvbmZpZywgTnpDb25maWdLZXkgfSBmcm9tICcuL2NvbmZpZyc7XG5cbmNvbnN0IGlzRGVmaW5lZCA9IGZ1bmN0aW9uICh2YWx1ZT86IE56U2FmZUFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZDtcbn07XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE56Q29uZmlnU2VydmljZSB7XG4gIHByaXZhdGUgY29uZmlnVXBkYXRlZCQgPSBuZXcgU3ViamVjdDxrZXlvZiBOekNvbmZpZz4oKTtcblxuICAvKiogR2xvYmFsIGNvbmZpZyBob2xkaW5nIHByb3BlcnR5LiAqL1xuICBwcml2YXRlIGNvbmZpZzogTnpDb25maWc7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChOWl9DT05GSUcpIGRlZmF1bHRDb25maWc/OiBOekNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gZGVmYXVsdENvbmZpZyB8fCB7fTtcbiAgfVxuXG4gIGdldENvbmZpZ0ZvckNvbXBvbmVudDxUIGV4dGVuZHMgTnpDb25maWdLZXk+KGNvbXBvbmVudE5hbWU6IFQpOiBOekNvbmZpZ1tUXSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnW2NvbXBvbmVudE5hbWVdO1xuICB9XG5cbiAgZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoY29tcG9uZW50TmFtZTogTnpDb25maWdLZXkpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5jb25maWdVcGRhdGVkJC5waXBlKFxuICAgICAgZmlsdGVyKG4gPT4gbiA9PT0gY29tcG9uZW50TmFtZSksXG4gICAgICBtYXBUbyh1bmRlZmluZWQpXG4gICAgKTtcbiAgfVxuXG4gIHNldDxUIGV4dGVuZHMgTnpDb25maWdLZXk+KGNvbXBvbmVudE5hbWU6IFQsIHZhbHVlOiBOekNvbmZpZ1tUXSk6IHZvaWQge1xuICAgIHRoaXMuY29uZmlnW2NvbXBvbmVudE5hbWVdID0geyAuLi50aGlzLmNvbmZpZ1tjb21wb25lbnROYW1lXSwgLi4udmFsdWUgfTtcbiAgICB0aGlzLmNvbmZpZ1VwZGF0ZWQkLm5leHQoY29tcG9uZW50TmFtZSk7XG4gIH1cbn1cblxuLy8gdHNsaW50OmRpc2FibGU6bm8taW52YWxpZC10aGlzXG5cbi8qKlxuICogVGhpcyBkZWNvcmF0b3IgaXMgdXNlZCB0byBkZWNvcmF0ZSBwcm9wZXJ0aWVzLiBJZiBhIHByb3BlcnR5IGlzIGRlY29yYXRlZCwgaXQgd291bGQgdHJ5IHRvIGxvYWQgZGVmYXVsdCB2YWx1ZSBmcm9tXG4gKiBjb25maWcuXG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0eXBlZGVmXG5leHBvcnQgZnVuY3Rpb24gV2l0aENvbmZpZzxUPihjb21wb25lbnROYW1lOiBOekNvbmZpZ0tleSkge1xuICByZXR1cm4gZnVuY3Rpb24gQ29uZmlnRGVjb3JhdG9yKHRhcmdldDogTnpTYWZlQW55LCBwcm9wTmFtZTogTnpTYWZlQW55LCBvcmlnaW5hbERlc2NyaXB0b3I/OiBUeXBlZFByb3BlcnR5RGVzY3JpcHRvcjxUPik6IE56U2FmZUFueSB7XG4gICAgY29uc3QgcHJpdmF0ZVByb3BOYW1lID0gYCQkX19hc3NpZ25lZFZhbHVlX18ke3Byb3BOYW1lfWA7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcml2YXRlUHJvcE5hbWUsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBnZXQoKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBvcmlnaW5hbERlc2NyaXB0b3I/LmdldCA/IG9yaWdpbmFsRGVzY3JpcHRvci5nZXQuYmluZCh0aGlzKSgpIDogdGhpc1twcml2YXRlUHJvcE5hbWVdO1xuICAgICAgICBjb25zdCBhc3NpZ25lZEJ5VXNlciA9ICgodGhpcy5hc3NpZ25tZW50Q291bnQgfHwge30pW3Byb3BOYW1lXSB8fCAwKSA+IDE7XG5cbiAgICAgICAgaWYgKGFzc2lnbmVkQnlVc2VyICYmIGlzRGVmaW5lZChvcmlnaW5hbFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBvcmlnaW5hbFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29tcG9uZW50Q29uZmlnID0gdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KGNvbXBvbmVudE5hbWUpIHx8IHt9O1xuICAgICAgICBjb25zdCBjb25maWdWYWx1ZSA9IGNvbXBvbmVudENvbmZpZ1twcm9wTmFtZV07XG4gICAgICAgIGNvbnN0IHJldCA9IGlzRGVmaW5lZChjb25maWdWYWx1ZSkgPyBjb25maWdWYWx1ZSA6IG9yaWdpbmFsVmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH0sXG4gICAgICBzZXQodmFsdWU/OiBUKTogdm9pZCB7XG4gICAgICAgIC8vIElmIHRoZSB2YWx1ZSBpcyBhc3NpZ25lZCwgd2UgY29uc2lkZXIgdGhlIG5ld2x5IGFzc2lnbmVkIHZhbHVlIGFzICdhc3NpZ25lZCBieSB1c2VyJy5cbiAgICAgICAgdGhpcy5hc3NpZ25tZW50Q291bnQgPSB0aGlzLmFzc2lnbm1lbnRDb3VudCB8fCB7fTtcbiAgICAgICAgdGhpcy5hc3NpZ25tZW50Q291bnRbcHJvcE5hbWVdID0gKHRoaXMuYXNzaWdubWVudENvdW50W3Byb3BOYW1lXSB8fCAwKSArIDE7XG5cbiAgICAgICAgaWYgKG9yaWdpbmFsRGVzY3JpcHRvcj8uc2V0KSB7XG4gICAgICAgICAgb3JpZ2luYWxEZXNjcmlwdG9yLnNldC5iaW5kKHRoaXMpKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzW3ByaXZhdGVQcm9wTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICB9O1xuICB9O1xufVxuIl19