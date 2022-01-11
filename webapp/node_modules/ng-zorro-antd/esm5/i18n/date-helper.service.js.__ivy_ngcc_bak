/**
 * @fileoverview added by tsickle
 * Generated from: date-helper.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { formatDate } from '@angular/common';
import { Inject, Injectable, Injector, Optional } from '@angular/core';
import fnsFormat from 'date-fns/format';
import fnsGetISOWeek from 'date-fns/getISOWeek';
import fnsParse from 'date-fns/parse';
import { convertTokens } from './convert-tokens';
import { mergeDateConfig, NZ_DATE_CONFIG, NZ_DATE_FNS_COMPATIBLE } from './date-config';
import { NzI18nService } from './nz-i18n.service';
import * as i0 from "@angular/core";
import * as i1 from "./date-config";
/**
 * @param {?} injector
 * @param {?} config
 * @param {?} convertFormat
 * @return {?}
 */
export function DATE_HELPER_SERVICE_FACTORY(injector, config, convertFormat) {
    /** @type {?} */
    var i18n = injector.get(NzI18nService);
    return i18n.getDateLocale()
        ? new DateHelperByDateFns(i18n, config, convertFormat)
        : new DateHelperByDatePipe(i18n, config, convertFormat);
}
/**
 * Abstract DateHelperService(Token via Class)
 * Compatibility: compact for original usage by default which using DatePipe
 * @abstract
 */
var DateHelperService = /** @class */ (function () {
    function DateHelperService(i18n, config, convertFormat) {
        this.i18n = i18n;
        this.config = config;
        this.convertFormat = convertFormat;
        this.config = mergeDateConfig(this.config);
    }
    DateHelperService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                    useFactory: DATE_HELPER_SERVICE_FACTORY,
                    deps: [Injector, [new Optional(), NZ_DATE_CONFIG], [new Optional(), NZ_DATE_FNS_COMPATIBLE]]
                },] }
    ];
    /** @nocollapse */
    DateHelperService.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_DATE_CONFIG,] }] },
        { type: Boolean, decorators: [{ type: Optional }, { type: Inject, args: [NZ_DATE_FNS_COMPATIBLE,] }] }
    ]; };
    /** @nocollapse */ DateHelperService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DateHelperService_Factory() { return DATE_HELPER_SERVICE_FACTORY(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.NZ_DATE_CONFIG, 8), i0.ɵɵinject(i1.NZ_DATE_FNS_COMPATIBLE, 8)); }, token: DateHelperService, providedIn: "root" });
    return DateHelperService;
}());
export { DateHelperService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    DateHelperService.prototype.i18n;
    /**
     * @type {?}
     * @protected
     */
    DateHelperService.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    DateHelperService.prototype.convertFormat;
    /**
     * @abstract
     * @param {?} date
     * @return {?}
     */
    DateHelperService.prototype.getISOWeek = function (date) { };
    /**
     * @abstract
     * @return {?}
     */
    DateHelperService.prototype.getFirstDayOfWeek = function () { };
    /**
     * @abstract
     * @param {?} date
     * @param {?} formatStr
     * @return {?}
     */
    DateHelperService.prototype.format = function (date, formatStr) { };
    /**
     * @abstract
     * @param {?} text
     * @param {?=} formatStr
     * @return {?}
     */
    DateHelperService.prototype.parseDate = function (text, formatStr) { };
    /**
     * @abstract
     * @param {?} text
     * @param {?=} formatStr
     * @return {?}
     */
    DateHelperService.prototype.parseTime = function (text, formatStr) { };
}
/**
 * DateHelper that handles date formats with date-fns
 */
var DateHelperByDateFns = /** @class */ (function (_super) {
    __extends(DateHelperByDateFns, _super);
    function DateHelperByDateFns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    DateHelperByDateFns.prototype.getISOWeek = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return fnsGetISOWeek(date);
    };
    // Use date-fns's "weekStartsOn" to support different locale when "config.firstDayOfWeek" is null
    // https://github.com/date-fns/date-fns/blob/v2.0.0-alpha.27/src/locale/en-US/index.js#L23
    // Use date-fns's "weekStartsOn" to support different locale when "config.firstDayOfWeek" is null
    // https://github.com/date-fns/date-fns/blob/v2.0.0-alpha.27/src/locale/en-US/index.js#L23
    /**
     * @return {?}
     */
    DateHelperByDateFns.prototype.getFirstDayOfWeek = 
    // Use date-fns's "weekStartsOn" to support different locale when "config.firstDayOfWeek" is null
    // https://github.com/date-fns/date-fns/blob/v2.0.0-alpha.27/src/locale/en-US/index.js#L23
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var defaultWeekStartsOn;
        try {
            defaultWeekStartsOn = (/** @type {?} */ ((/** @type {?} */ (this.i18n.getDateLocale().options)).weekStartsOn));
        }
        catch (e) {
            defaultWeekStartsOn = 1;
        }
        return this.config.firstDayOfWeek == null ? defaultWeekStartsOn : this.config.firstDayOfWeek;
    };
    /**
     * Format a date
     * @see https://date-fns.org/docs/format#description
     * @param date Date
     * @param formatStr format string
     */
    /**
     * Format a date
     * @see https://date-fns.org/docs/format#description
     * @param {?} date Date
     * @param {?} formatStr format string
     * @return {?}
     */
    DateHelperByDateFns.prototype.format = /**
     * Format a date
     * @see https://date-fns.org/docs/format#description
     * @param {?} date Date
     * @param {?} formatStr format string
     * @return {?}
     */
    function (date, formatStr) {
        /** @type {?} */
        var mergedStr = this.convertFormat ? convertTokens(formatStr) : formatStr;
        return date ? fnsFormat(date, mergedStr, { locale: this.i18n.getDateLocale() }) : '';
    };
    /**
     * @param {?} text
     * @param {?} formatStr
     * @return {?}
     */
    DateHelperByDateFns.prototype.parseDate = /**
     * @param {?} text
     * @param {?} formatStr
     * @return {?}
     */
    function (text, formatStr) {
        /** @type {?} */
        var mergedStr = this.convertFormat ? convertTokens(formatStr) : formatStr;
        return fnsParse(text, mergedStr, new Date(), {
            locale: this.i18n.getDateLocale(),
            weekStartsOn: this.getFirstDayOfWeek()
        });
    };
    /**
     * @param {?} text
     * @param {?} formatStr
     * @return {?}
     */
    DateHelperByDateFns.prototype.parseTime = /**
     * @param {?} text
     * @param {?} formatStr
     * @return {?}
     */
    function (text, formatStr) {
        return this.parseDate(text, formatStr);
    };
    /** @nocollapse */ DateHelperByDateFns.ɵprov = i0.ɵɵdefineInjectable({ factory: function DateHelperByDateFns_Factory() { return DATE_HELPER_SERVICE_FACTORY(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.NZ_DATE_CONFIG, 8), i0.ɵɵinject(i1.NZ_DATE_FNS_COMPATIBLE, 8)); }, token: DateHelperByDateFns, providedIn: "root" });
    return DateHelperByDateFns;
}(DateHelperService));
export { DateHelperByDateFns };
/**
 * DateHelper that handles date formats with angular's date-pipe
 *
 * @see https://github.com/NG-ZORRO/ng-zorro-antd/issues/2406 - DatePipe may cause non-standard week bug, see:
 *
 */
var DateHelperByDatePipe = /** @class */ (function (_super) {
    __extends(DateHelperByDatePipe, _super);
    function DateHelperByDatePipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    DateHelperByDatePipe.prototype.getISOWeek = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return +this.format(date, 'w');
    };
    /**
     * @return {?}
     */
    DateHelperByDatePipe.prototype.getFirstDayOfWeek = /**
     * @return {?}
     */
    function () {
        if (this.config.firstDayOfWeek === undefined) {
            /** @type {?} */
            var locale = this.i18n.getLocaleId();
            return locale && ['zh-cn', 'zh-tw'].indexOf(locale.toLowerCase()) > -1 ? 1 : 0;
        }
        return this.config.firstDayOfWeek;
    };
    /**
     * @param {?} date
     * @param {?} formatStr
     * @return {?}
     */
    DateHelperByDatePipe.prototype.format = /**
     * @param {?} date
     * @param {?} formatStr
     * @return {?}
     */
    function (date, formatStr) {
        return date ? (/** @type {?} */ (formatDate(date, formatStr, this.i18n.getLocaleId()))) : '';
    };
    /**
     * @param {?} text
     * @return {?}
     */
    DateHelperByDatePipe.prototype.parseDate = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        return new Date(text);
    };
    /**
     * @param {?} text
     * @return {?}
     */
    DateHelperByDatePipe.prototype.parseTime = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        if (!text) {
            return;
        }
        return new Date(Date.parse("1970-01-01 " + text));
    };
    /** @nocollapse */ DateHelperByDatePipe.ɵprov = i0.ɵɵdefineInjectable({ factory: function DateHelperByDatePipe_Factory() { return DATE_HELPER_SERVICE_FACTORY(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.NZ_DATE_CONFIG, 8), i0.ɵɵinject(i1.NZ_DATE_FNS_COMPATIBLE, 8)); }, token: DateHelperByDatePipe, providedIn: "root" });
    return DateHelperByDatePipe;
}(DateHelperService));
export { DateHelperByDatePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1oZWxwZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvaTE4bi8iLCJzb3VyY2VzIjpbImRhdGUtaGVscGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sU0FBUyxNQUFNLGlCQUFpQixDQUFDO0FBQ3hDLE9BQU8sYUFBYSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sUUFBUSxNQUFNLGdCQUFnQixDQUFDO0FBR3RDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxzQkFBc0IsRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7QUFFbEQsTUFBTSxVQUFVLDJCQUEyQixDQUFDLFFBQWtCLEVBQUUsTUFBb0IsRUFBRSxhQUFzQjs7UUFDcEcsSUFBSSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQ3hDLE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRTtRQUN6QixDQUFDLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLGFBQWEsQ0FBQztRQUN0RCxDQUFDLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQzVELENBQUM7Ozs7OztBQU1EO0lBTUUsMkJBQ1ksSUFBbUIsRUFDaUIsTUFBb0IsRUFDWixhQUFzQjtRQUZsRSxTQUFJLEdBQUosSUFBSSxDQUFlO1FBQ2lCLFdBQU0sR0FBTixNQUFNLENB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SEg7Q0E2SEMsQUEzQkQsQ0FBMEMsaUJBQWlCLEdBMkIxRDtTQTNCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgZm5zRm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XG5pbXBvcnQgZm5zR2V0SVNPV2VlayBmcm9tICdkYXRlLWZucy9nZXRJU09XZWVrJztcbmltcG9ydCBmbnNQYXJzZSBmcm9tICdkYXRlLWZucy9wYXJzZSc7XG5cbmltcG9ydCB7IFdlZWtEYXlJbmRleCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90aW1lJztcbmltcG9ydCB7IGNvbnZlcnRUb2tlbnMgfSBmcm9tICcuL2NvbnZlcnQtdG9rZW5zJztcbmltcG9ydCB7IG1lcmdlRGF0ZUNvbmZpZywgTlpfREFURV9DT05GSUcsIE5aX0RBVEVfRk5TX0NPTVBBVElCTEUsIE56RGF0ZUNvbmZpZyB9IGZyb20gJy4vZGF0ZS1jb25maWcnO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJy4vbnotaTE4bi5zZXJ2aWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIERBVEVfSEVMUEVSX1NFUlZJQ0VfRkFDVE9SWShpbmplY3RvcjogSW5qZWN0b3IsIGNvbmZpZzogTnpEYXRlQ29uZmlnLCBjb252ZXJ0Rm9ybWF0OiBib29sZWFuKTogRGF0ZUhlbHBlclNlcnZpY2Uge1xuICBjb25zdCBpMThuID0gaW5qZWN0b3IuZ2V0KE56STE4blNlcnZpY2UpO1xuICByZXR1cm4gaTE4bi5nZXREYXRlTG9jYWxlKClcbiAgICA/IG5ldyBEYXRlSGVscGVyQnlEYXRlRm5zKGkxOG4sIGNvbmZpZywgY29udmVydEZvcm1hdClcbiAgICA6IG5ldyBEYXRlSGVscGVyQnlEYXRlUGlwZShpMThuLCBjb25maWcsIGNvbnZlcnRGb3JtYXQpO1xufVxuXG4vKipcbiAqIEFic3RyYWN0IERhdGVIZWxwZXJTZXJ2aWNlKFRva2VuIHZpYSBDbGFzcylcbiAqIENvbXBhdGliaWxpdHk6IGNvbXBhY3QgZm9yIG9yaWdpbmFsIHVzYWdlIGJ5IGRlZmF1bHQgd2hpY2ggdXNpbmcgRGF0ZVBpcGVcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG4gIHVzZUZhY3Rvcnk6IERBVEVfSEVMUEVSX1NFUlZJQ0VfRkFDVE9SWSxcbiAgZGVwczogW0luamVjdG9yLCBbbmV3IE9wdGlvbmFsKCksIE5aX0RBVEVfQ09ORklHXSwgW25ldyBPcHRpb25hbCgpLCBOWl9EQVRFX0ZOU19DT01QQVRJQkxFXV1cbn0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGF0ZUhlbHBlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaTE4bjogTnpJMThuU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX0RBVEVfQ09ORklHKSBwcm90ZWN0ZWQgY29uZmlnOiBOekRhdGVDb25maWcsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9EQVRFX0ZOU19DT01QQVRJQkxFKSBwcm90ZWN0ZWQgY29udmVydEZvcm1hdDogYm9vbGVhblxuICApIHtcbiAgICB0aGlzLmNvbmZpZyA9IG1lcmdlRGF0ZUNvbmZpZyh0aGlzLmNvbmZpZyk7XG4gIH1cblxuICBhYnN0cmFjdCBnZXRJU09XZWVrKGRhdGU6IERhdGUpOiBudW1iZXI7XG4gIGFic3RyYWN0IGdldEZpcnN0RGF5T2ZXZWVrKCk6IFdlZWtEYXlJbmRleDtcbiAgYWJzdHJhY3QgZm9ybWF0KGRhdGU6IERhdGUsIGZvcm1hdFN0cjogc3RyaW5nKTogc3RyaW5nO1xuICBhYnN0cmFjdCBwYXJzZURhdGUodGV4dDogc3RyaW5nLCBmb3JtYXRTdHI/OiBzdHJpbmcpOiBEYXRlO1xuICBhYnN0cmFjdCBwYXJzZVRpbWUodGV4dDogc3RyaW5nLCBmb3JtYXRTdHI/OiBzdHJpbmcpOiBEYXRlIHwgdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIERhdGVIZWxwZXIgdGhhdCBoYW5kbGVzIGRhdGUgZm9ybWF0cyB3aXRoIGRhdGUtZm5zXG4gKi9cbmV4cG9ydCBjbGFzcyBEYXRlSGVscGVyQnlEYXRlRm5zIGV4dGVuZHMgRGF0ZUhlbHBlclNlcnZpY2Uge1xuICBnZXRJU09XZWVrKGRhdGU6IERhdGUpOiBudW1iZXIge1xuICAgIHJldHVybiBmbnNHZXRJU09XZWVrKGRhdGUpO1xuICB9XG5cbiAgLy8gVXNlIGRhdGUtZm5zJ3MgXCJ3ZWVrU3RhcnRzT25cIiB0byBzdXBwb3J0IGRpZmZlcmVudCBsb2NhbGUgd2hlbiBcImNvbmZpZy5maXJzdERheU9mV2Vla1wiIGlzIG51bGxcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvdjIuMC4wLWFscGhhLjI3L3NyYy9sb2NhbGUvZW4tVVMvaW5kZXguanMjTDIzXG4gIGdldEZpcnN0RGF5T2ZXZWVrKCk6IFdlZWtEYXlJbmRleCB7XG4gICAgbGV0IGRlZmF1bHRXZWVrU3RhcnRzT246IFdlZWtEYXlJbmRleDtcbiAgICB0cnkge1xuICAgICAgZGVmYXVsdFdlZWtTdGFydHNPbiA9IHRoaXMuaTE4bi5nZXREYXRlTG9jYWxlKCkub3B0aW9ucyEud2Vla1N0YXJ0c09uITtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBkZWZhdWx0V2Vla1N0YXJ0c09uID0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmZpcnN0RGF5T2ZXZWVrID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdGhpcy5jb25maWcuZmlyc3REYXlPZldlZWs7XG4gIH1cblxuICAvKipcbiAgICogRm9ybWF0IGEgZGF0ZVxuICAgKiBAc2VlIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZm9ybWF0I2Rlc2NyaXB0aW9uXG4gICAqIEBwYXJhbSBkYXRlIERhdGVcbiAgICogQHBhcmFtIGZvcm1hdFN0ciBmb3JtYXQgc3RyaW5nXG4gICAqL1xuICBmb3JtYXQoZGF0ZTogRGF0ZSwgZm9ybWF0U3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG1lcmdlZFN0ciA9IHRoaXMuY29udmVydEZvcm1hdCA/IGNvbnZlcnRUb2tlbnMoZm9ybWF0U3RyKSA6IGZvcm1hdFN0cjtcbiAgICByZXR1cm4gZGF0ZSA/IGZuc0Zvcm1hdChkYXRlLCBtZXJnZWRTdHIsIHsgbG9jYWxlOiB0aGlzLmkxOG4uZ2V0RGF0ZUxvY2FsZSgpIH0pIDogJyc7XG4gIH1cblxuICBwYXJzZURhdGUodGV4dDogc3RyaW5nLCBmb3JtYXRTdHI6IHN0cmluZyk6IERhdGUge1xuICAgIGNvbnN0IG1lcmdlZFN0ciA9IHRoaXMuY29udmVydEZvcm1hdCA/IGNvbnZlcnRUb2tlbnMoZm9ybWF0U3RyKSA6IGZvcm1hdFN0cjtcbiAgICByZXR1cm4gZm5zUGFyc2UodGV4dCwgbWVyZ2VkU3RyLCBuZXcgRGF0ZSgpLCB7XG4gICAgICBsb2NhbGU6IHRoaXMuaTE4bi5nZXREYXRlTG9jYWxlKCksXG4gICAgICB3ZWVrU3RhcnRzT246IHRoaXMuZ2V0Rmlyc3REYXlPZldlZWsoKVxuICAgIH0pO1xuICB9XG5cbiAgcGFyc2VUaW1lKHRleHQ6IHN0cmluZywgZm9ybWF0U3RyOiBzdHJpbmcpOiBEYXRlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZURhdGUodGV4dCwgZm9ybWF0U3RyKTtcbiAgfVxufVxuXG4vKipcbiAqIERhdGVIZWxwZXIgdGhhdCBoYW5kbGVzIGRhdGUgZm9ybWF0cyB3aXRoIGFuZ3VsYXIncyBkYXRlLXBpcGVcbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2lzc3Vlcy8yNDA2IC0gRGF0ZVBpcGUgbWF5IGNhdXNlIG5vbi1zdGFuZGFyZCB3ZWVrIGJ1Zywgc2VlOlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIERhdGVIZWxwZXJCeURhdGVQaXBlIGV4dGVuZHMgRGF0ZUhlbHBlclNlcnZpY2Uge1xuICBnZXRJU09XZWVrKGRhdGU6IERhdGUpOiBudW1iZXIge1xuICAgIHJldHVybiArdGhpcy5mb3JtYXQoZGF0ZSwgJ3cnKTtcbiAgfVxuXG4gIGdldEZpcnN0RGF5T2ZXZWVrKCk6IFdlZWtEYXlJbmRleCB7XG4gICAgaWYgKHRoaXMuY29uZmlnLmZpcnN0RGF5T2ZXZWVrID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVJZCgpO1xuICAgICAgcmV0dXJuIGxvY2FsZSAmJiBbJ3poLWNuJywgJ3poLXR3J10uaW5kZXhPZihsb2NhbGUudG9Mb3dlckNhc2UoKSkgPiAtMSA/IDEgOiAwO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb25maWcuZmlyc3REYXlPZldlZWs7XG4gIH1cblxuICBmb3JtYXQoZGF0ZTogRGF0ZSB8IG51bGwsIGZvcm1hdFN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZGF0ZSA/IGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0U3RyLCB0aGlzLmkxOG4uZ2V0TG9jYWxlSWQoKSkhIDogJyc7XG4gIH1cblxuICBwYXJzZURhdGUodGV4dDogc3RyaW5nKTogRGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHRleHQpO1xuICB9XG5cbiAgcGFyc2VUaW1lKHRleHQ6IHN0cmluZyk6IERhdGUgfCB1bmRlZmluZWQge1xuICAgIGlmICghdGV4dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoRGF0ZS5wYXJzZShgMTk3MC0wMS0wMSAke3RleHR9YCkpO1xuICB9XG59XG4iXX0=