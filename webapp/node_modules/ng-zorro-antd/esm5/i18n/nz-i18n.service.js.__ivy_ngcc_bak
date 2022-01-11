/**
 * @fileoverview added by tsickle
 * Generated from: nz-i18n.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Inject, Injectable, Optional } from '@angular/core';
import { warn } from 'ng-zorro-antd/core/logger';
import { BehaviorSubject } from 'rxjs';
import zh_CN from './languages/zh_CN';
import { NZ_DATE_LOCALE, NZ_I18N } from './nz-i18n.token';
import * as i0 from "@angular/core";
import * as i1 from "./nz-i18n.token";
var NzI18nService = /** @class */ (function () {
    function NzI18nService(locale, dateLocale) {
        this._change = new BehaviorSubject(this._locale);
        this.setLocale(locale || zh_CN);
        this.setDateLocale(dateLocale || null);
    }
    Object.defineProperty(NzI18nService.prototype, "localeChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._change.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    // [NOTE] Performance issue: this method may called by every change detections
    // TODO: cache more deeply paths for performance
    // [NOTE] Performance issue: this method may called by every change detections
    // TODO: cache more deeply paths for performance
    /**
     * @param {?} path
     * @param {?=} data
     * @return {?}
     */
    NzI18nService.prototype.translate = 
    // [NOTE] Performance issue: this method may called by every change detections
    // TODO: cache more deeply paths for performance
    /**
     * @param {?} path
     * @param {?=} data
     * @return {?}
     */
    function (path, data) {
        // this._logger.debug(`[NzI18nService] Translating(${this._locale.locale}): ${path}`);
        /** @type {?} */
        var content = (/** @type {?} */ (this._getObjectPath(this._locale, path)));
        if (typeof content === 'string') {
            if (data) {
                Object.keys(data).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return (content = content.replace(new RegExp("%" + key + "%", 'g'), data[key])); }));
            }
            return content;
        }
        return path;
    };
    /**
     * Set/Change current locale globally throughout the WHOLE application
     * NOTE: If called at runtime, rendered interface may not change along with the locale change,
     * because this do not trigger another render schedule.
     *
     * @param locale The translating letters
     */
    /**
     * Set/Change current locale globally throughout the WHOLE application
     * NOTE: If called at runtime, rendered interface may not change along with the locale change,
     * because this do not trigger another render schedule.
     *
     * @param {?} locale The translating letters
     * @return {?}
     */
    NzI18nService.prototype.setLocale = /**
     * Set/Change current locale globally throughout the WHOLE application
     * NOTE: If called at runtime, rendered interface may not change along with the locale change,
     * because this do not trigger another render schedule.
     *
     * @param {?} locale The translating letters
     * @return {?}
     */
    function (locale) {
        if (this._locale && this._locale.locale === locale.locale) {
            return;
        }
        this._locale = locale;
        this._change.next(locale);
    };
    /**
     * @return {?}
     */
    NzI18nService.prototype.getLocale = /**
     * @return {?}
     */
    function () {
        return this._locale;
    };
    /**
     * @return {?}
     */
    NzI18nService.prototype.getLocaleId = /**
     * @return {?}
     */
    function () {
        return this._locale ? this._locale.locale : '';
    };
    /**
     * @param {?} dateLocale
     * @return {?}
     */
    NzI18nService.prototype.setDateLocale = /**
     * @param {?} dateLocale
     * @return {?}
     */
    function (dateLocale) {
        this.dateLocale = dateLocale;
    };
    /**
     * @return {?}
     */
    NzI18nService.prototype.getDateLocale = /**
     * @return {?}
     */
    function () {
        return this.dateLocale;
    };
    /**
     * Get locale data
     * @param path dot paths for finding exist value from locale data, eg. "a.b.c"
     * @param defaultValue default value if the result is not "truthy"
     */
    /**
     * Get locale data
     * @param {?} path dot paths for finding exist value from locale data, eg. "a.b.c"
     * @param {?=} defaultValue default value if the result is not "truthy"
     * @return {?}
     */
    NzI18nService.prototype.getLocaleData = /**
     * Get locale data
     * @param {?} path dot paths for finding exist value from locale data, eg. "a.b.c"
     * @param {?=} defaultValue default value if the result is not "truthy"
     * @return {?}
     */
    function (path, defaultValue) {
        /** @type {?} */
        var result = path ? this._getObjectPath(this._locale, path) : this._locale;
        if (!result && !defaultValue) {
            warn("Missing translations for \"" + path + "\" in language \"" + this._locale.locale + "\".\nYou can use \"NzI18nService.setLocale\" as a temporary fix.\nWelcome to submit a pull request to help us optimize the translations!\nhttps://github.com/NG-ZORRO/ng-zorro-antd/blob/master/CONTRIBUTING.md");
        }
        return result || defaultValue || {};
    };
    /**
     * @private
     * @param {?} obj
     * @param {?} path
     * @return {?}
     */
    NzI18nService.prototype._getObjectPath = /**
     * @private
     * @param {?} obj
     * @param {?} path
     * @return {?}
     */
    function (obj, path) {
        /** @type {?} */
        var res = obj;
        /** @type {?} */
        var paths = path.split('.');
        /** @type {?} */
        var depth = paths.length;
        /** @type {?} */
        var index = 0;
        while (res && index < depth) {
            res = res[paths[index++]];
        }
        return index === depth ? res : null;
    };
    NzI18nService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzI18nService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_I18N,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_DATE_LOCALE,] }] }
    ]; };
    /** @nocollapse */ NzI18nService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NzI18nService_Factory() { return new NzI18nService(i0.ɵɵinject(i1.NZ_I18N, 8), i0.ɵɵinject(i1.NZ_DATE_LOCALE, 8)); }, token: NzI18nService, providedIn: "root" });
    return NzI18nService;
}());
export { NzI18nService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzI18nService.prototype._locale;
    /**
     * @type {?}
     * @private
     */
    NzI18nService.prototype._change;
    /**
     * @type {?}
     * @private
     */
    NzI18nService.prototype.dateLocale;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaTE4bi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pMThuLyIsInNvdXJjZXMiOlsibnotaTE4bi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFakQsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUVuRCxPQUFPLEtBQUssTUFBTSxtQkFBbUIsQ0FBQztBQUV0QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFFMUQ7SUFZRSx1QkFBeUMsTUFBdUIsRUFBc0MsVUFBc0I7UUFQcEgsWUFBTyxHQUFHLElBQUksZUFBZSxDQUFrQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFRbkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQVBELHNCQUFJLHVDQUFZOzs7O1FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3JDLENBQUM7OztPQUFBO0lBT0QsOEVBQThFO0lBQzlFLGdEQUFnRDs7Ozs7Ozs7SUFDaEQsaUNBQVM7Ozs7Ozs7O0lBQVQsVUFBVSxJQUFZLEVBQUUsSUFBZ0I7OztZQUVsQyxPQUFPLEdBQUcsbUJBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFVO1FBQy9ELElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQy9CLElBQUksSUFBSSxFQUFFO2dCQUNSLE1BQU0sQ0FB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Y29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgd2FybiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9sb2dnZXInO1xuaW1wb3J0IHsgSW5kZXhhYmxlT2JqZWN0LCBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB6aF9DTiBmcm9tICcuL2xhbmd1YWdlcy96aF9DTic7XG5pbXBvcnQgeyBEYXRlTG9jYWxlLCBOekkxOG5JbnRlcmZhY2UgfSBmcm9tICcuL256LWkxOG4uaW50ZXJmYWNlJztcbmltcG9ydCB7IE5aX0RBVEVfTE9DQUxFLCBOWl9JMThOIH0gZnJvbSAnLi9uei1pMThuLnRva2VuJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTnpJMThuU2VydmljZSB7XG4gIHByaXZhdGUgX2xvY2FsZSE6IE56STE4bkludGVyZmFjZTtcbiAgcHJpdmF0ZSBfY2hhbmdlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxOekkxOG5JbnRlcmZhY2U+KHRoaXMuX2xvY2FsZSk7XG4gIHByaXZhdGUgZGF0ZUxvY2FsZSE6IERhdGVMb2NhbGU7XG5cbiAgZ2V0IGxvY2FsZUNoYW5nZSgpOiBPYnNlcnZhYmxlPE56STE4bkludGVyZmFjZT4ge1xuICAgIHJldHVybiB0aGlzLl9jaGFuZ2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KE5aX0kxOE4pIGxvY2FsZTogTnpJMThuSW50ZXJmYWNlLCBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX0RBVEVfTE9DQUxFKSBkYXRlTG9jYWxlOiBEYXRlTG9jYWxlKSB7XG4gICAgdGhpcy5zZXRMb2NhbGUobG9jYWxlIHx8IHpoX0NOKTtcbiAgICB0aGlzLnNldERhdGVMb2NhbGUoZGF0ZUxvY2FsZSB8fCBudWxsKTtcbiAgfVxuXG4gIC8vIFtOT1RFXSBQZXJmb3JtYW5jZSBpc3N1ZTogdGhpcyBtZXRob2QgbWF5IGNhbGxlZCBieSBldmVyeSBjaGFuZ2UgZGV0ZWN0aW9uc1xuICAvLyBUT0RPOiBjYWNoZSBtb3JlIGRlZXBseSBwYXRocyBmb3IgcGVyZm9ybWFuY2VcbiAgdHJhbnNsYXRlKHBhdGg6IHN0cmluZywgZGF0YT86IE56U2FmZUFueSk6IHN0cmluZyB7XG4gICAgLy8gdGhpcy5fbG9nZ2VyLmRlYnVnKGBbTnpJMThuU2VydmljZV0gVHJhbnNsYXRpbmcoJHt0aGlzLl9sb2NhbGUubG9jYWxlfSk6ICR7cGF0aH1gKTtcbiAgICBsZXQgY29udGVudCA9IHRoaXMuX2dldE9iamVjdFBhdGgodGhpcy5fbG9jYWxlLCBwYXRoKSBhcyBzdHJpbmc7XG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChrZXkgPT4gKGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UobmV3IFJlZ0V4cChgJSR7a2V5fSVgLCAnZycpLCBkYXRhW2tleV0pKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cblxuICAvKipcbiAgICogU2V0L0NoYW5nZSBjdXJyZW50IGxvY2FsZSBnbG9iYWxseSB0aHJvdWdob3V0IHRoZSBXSE9MRSBhcHBsaWNhdGlvblxuICAgKiBOT1RFOiBJZiBjYWxsZWQgYXQgcnVudGltZSwgcmVuZGVyZWQgaW50ZXJmYWNlIG1heSBub3QgY2hhbmdlIGFsb25nIHdpdGggdGhlIGxvY2FsZSBjaGFuZ2UsXG4gICAqIGJlY2F1c2UgdGhpcyBkbyBub3QgdHJpZ2dlciBhbm90aGVyIHJlbmRlciBzY2hlZHVsZS5cbiAgICpcbiAgICogQHBhcmFtIGxvY2FsZSBUaGUgdHJhbnNsYXRpbmcgbGV0dGVyc1xuICAgKi9cbiAgc2V0TG9jYWxlKGxvY2FsZTogTnpJMThuSW50ZXJmYWNlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2xvY2FsZSAmJiB0aGlzLl9sb2NhbGUubG9jYWxlID09PSBsb2NhbGUubG9jYWxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2xvY2FsZSA9IGxvY2FsZTtcbiAgICB0aGlzLl9jaGFuZ2UubmV4dChsb2NhbGUpO1xuICB9XG5cbiAgZ2V0TG9jYWxlKCk6IE56STE4bkludGVyZmFjZSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZTtcbiAgfVxuXG4gIGdldExvY2FsZUlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZSA/IHRoaXMuX2xvY2FsZS5sb2NhbGUgOiAnJztcbiAgfVxuXG4gIHNldERhdGVMb2NhbGUoZGF0ZUxvY2FsZTogRGF0ZUxvY2FsZSk6IHZvaWQge1xuICAgIHRoaXMuZGF0ZUxvY2FsZSA9IGRhdGVMb2NhbGU7XG4gIH1cblxuICBnZXREYXRlTG9jYWxlKCk6IERhdGVMb2NhbGUge1xuICAgIHJldHVybiB0aGlzLmRhdGVMb2NhbGU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGxvY2FsZSBkYXRhXG4gICAqIEBwYXJhbSBwYXRoIGRvdCBwYXRocyBmb3IgZmluZGluZyBleGlzdCB2YWx1ZSBmcm9tIGxvY2FsZSBkYXRhLCBlZy4gXCJhLmIuY1wiXG4gICAqIEBwYXJhbSBkZWZhdWx0VmFsdWUgZGVmYXVsdCB2YWx1ZSBpZiB0aGUgcmVzdWx0IGlzIG5vdCBcInRydXRoeVwiXG4gICAqL1xuICBnZXRMb2NhbGVEYXRhKHBhdGg6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogTnpTYWZlQW55KTogTnpTYWZlQW55IHtcbiAgICBjb25zdCByZXN1bHQgPSBwYXRoID8gdGhpcy5fZ2V0T2JqZWN0UGF0aCh0aGlzLl9sb2NhbGUsIHBhdGgpIDogdGhpcy5fbG9jYWxlO1xuXG4gICAgaWYgKCFyZXN1bHQgJiYgIWRlZmF1bHRWYWx1ZSkge1xuICAgICAgd2FybihgTWlzc2luZyB0cmFuc2xhdGlvbnMgZm9yIFwiJHtwYXRofVwiIGluIGxhbmd1YWdlIFwiJHt0aGlzLl9sb2NhbGUubG9jYWxlfVwiLlxuWW91IGNhbiB1c2UgXCJOekkxOG5TZXJ2aWNlLnNldExvY2FsZVwiIGFzIGEgdGVtcG9yYXJ5IGZpeC5cbldlbGNvbWUgdG8gc3VibWl0IGEgcHVsbCByZXF1ZXN0IHRvIGhlbHAgdXMgb3B0aW1pemUgdGhlIHRyYW5zbGF0aW9ucyFcbmh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0NPTlRSSUJVVElORy5tZGApO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQgfHwgZGVmYXVsdFZhbHVlIHx8IHt9O1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0T2JqZWN0UGF0aChvYmo6IEluZGV4YWJsZU9iamVjdCwgcGF0aDogc3RyaW5nKTogc3RyaW5nIHwgb2JqZWN0IHwgTnpTYWZlQW55IHtcbiAgICBsZXQgcmVzID0gb2JqO1xuICAgIGNvbnN0IHBhdGhzID0gcGF0aC5zcGxpdCgnLicpO1xuICAgIGNvbnN0IGRlcHRoID0gcGF0aHMubGVuZ3RoO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgd2hpbGUgKHJlcyAmJiBpbmRleCA8IGRlcHRoKSB7XG4gICAgICByZXMgPSByZXNbcGF0aHNbaW5kZXgrK11dO1xuICAgIH1cbiAgICByZXR1cm4gaW5kZXggPT09IGRlcHRoID8gcmVzIDogbnVsbDtcbiAgfVxufVxuIl19