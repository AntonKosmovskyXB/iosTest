/**
 * @fileoverview added by tsickle
 * Generated from: date-helper.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    const i18n = injector.get(NzI18nService);
    return i18n.getDateLocale()
        ? new DateHelperByDateFns(i18n, config, convertFormat)
        : new DateHelperByDatePipe(i18n, config, convertFormat);
}
/**
 * Abstract DateHelperService(Token via Class)
 * Compatibility: compact for original usage by default which using DatePipe
 * @abstract
 */
export class DateHelperService {
    /**
     * @param {?} i18n
     * @param {?} config
     * @param {?} convertFormat
     */
    constructor(i18n, config, convertFormat) {
        this.i18n = i18n;
        this.config = config;
        this.convertFormat = convertFormat;
        this.config = mergeDateConfig(this.config);
    }
}
DateHelperService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
                useFactory: DATE_HELPER_SERVICE_FACTORY,
                deps: [Injector, [new Optional(), NZ_DATE_CONFIG], [new Optional(), NZ_DATE_FNS_COMPATIBLE]]
            },] }
];
/** @nocollapse */
DateHelperService.ctorParameters = () => [
    { type: NzI18nService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_DATE_CONFIG,] }] },
    { type: Boolean, decorators: [{ type: Optional }, { type: Inject, args: [NZ_DATE_FNS_COMPATIBLE,] }] }
];
/** @nocollapse */ DateHelperService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DateHelperService_Factory() { return DATE_HELPER_SERVICE_FACTORY(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.NZ_DATE_CONFIG, 8), i0.ɵɵinject(i1.NZ_DATE_FNS_COMPATIBLE, 8)); }, token: DateHelperService, providedIn: "root" });
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
export class DateHelperByDateFns extends DateHelperService {
    /**
     * @param {?} date
     * @return {?}
     */
    getISOWeek(date) {
        return fnsGetISOWeek(date);
    }
    // Use date-fns's "weekStartsOn" to support different locale when "config.firstDayOfWeek" is null
    // https://github.com/date-fns/date-fns/blob/v2.0.0-alpha.27/src/locale/en-US/index.js#L23
    /**
     * @return {?}
     */
    getFirstDayOfWeek() {
        /** @type {?} */
        let defaultWeekStartsOn;
        try {
            defaultWeekStartsOn = (/** @type {?} */ ((/** @type {?} */ (this.i18n.getDateLocale().options)).weekStartsOn));
        }
        catch (e) {
            defaultWeekStartsOn = 1;
        }
        return this.config.firstDayOfWeek == null ? defaultWeekStartsOn : this.config.firstDayOfWeek;
    }
    /**
     * Format a date
     * @see https://date-fns.org/docs/format#description
     * @param {?} date Date
     * @param {?} formatStr format string
     * @return {?}
     */
    format(date, formatStr) {
        /** @type {?} */
        const mergedStr = this.convertFormat ? convertTokens(formatStr) : formatStr;
        return date ? fnsFormat(date, mergedStr, { locale: this.i18n.getDateLocale() }) : '';
    }
    /**
     * @param {?} text
     * @param {?} formatStr
     * @return {?}
     */
    parseDate(text, formatStr) {
        /** @type {?} */
        const mergedStr = this.convertFormat ? convertTokens(formatStr) : formatStr;
        return fnsParse(text, mergedStr, new Date(), {
            locale: this.i18n.getDateLocale(),
            weekStartsOn: this.getFirstDayOfWeek()
        });
    }
    /**
     * @param {?} text
     * @param {?} formatStr
     * @return {?}
     */
    parseTime(text, formatStr) {
        return this.parseDate(text, formatStr);
    }
}
/** @nocollapse */ DateHelperByDateFns.ɵprov = i0.ɵɵdefineInjectable({ factory: function DateHelperByDateFns_Factory() { return DATE_HELPER_SERVICE_FACTORY(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.NZ_DATE_CONFIG, 8), i0.ɵɵinject(i1.NZ_DATE_FNS_COMPATIBLE, 8)); }, token: DateHelperByDateFns, providedIn: "root" });
/**
 * DateHelper that handles date formats with angular's date-pipe
 *
 * @see https://github.com/NG-ZORRO/ng-zorro-antd/issues/2406 - DatePipe may cause non-standard week bug, see:
 *
 */
export class DateHelperByDatePipe extends DateHelperService {
    /**
     * @param {?} date
     * @return {?}
     */
    getISOWeek(date) {
        return +this.format(date, 'w');
    }
    /**
     * @return {?}
     */
    getFirstDayOfWeek() {
        if (this.config.firstDayOfWeek === undefined) {
            /** @type {?} */
            const locale = this.i18n.getLocaleId();
            return locale && ['zh-cn', 'zh-tw'].indexOf(locale.toLowerCase()) > -1 ? 1 : 0;
        }
        return this.config.firstDayOfWeek;
    }
    /**
     * @param {?} date
     * @param {?} formatStr
     * @return {?}
     */
    format(date, formatStr) {
        return date ? (/** @type {?} */ (formatDate(date, formatStr, this.i18n.getLocaleId()))) : '';
    }
    /**
     * @param {?} text
     * @return {?}
     */
    parseDate(text) {
        return new Date(text);
    }
    /**
     * @param {?} text
     * @return {?}
     */
    parseTime(text) {
        if (!text) {
            return;
        }
        return new Date(Date.parse(`1970-01-01 ${text}`));
    }
}
/** @nocollapse */ DateHelperByDatePipe.ɵprov = i0.ɵɵdefineInjectable({ factory: function DateHelperByDatePipe_Factory() { return DATE_HELPER_SERVICE_FACTORY(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.NZ_DATE_CONFIG, 8), i0.ɵɵinject(i1.NZ_DATE_FNS_COMPATIBLE, 8)); }, token: DateHelperByDatePipe, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1oZWxwZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvaTE4bi8iLCJzb3VyY2VzIjpbImRhdGUtaGVscGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxTQUFTLE1BQU0saUJBQWlCLENBQUM7QUFDeEMsT0FBTyxhQUFhLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxRQUFRLE1BQU0sZ0JBQWdCLENBQUM7QUFHdEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLHNCQUFzQixFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7OztBQUVsRCxNQUFNLFVBQVUsMkJBQTJCLENBQUMsUUFBa0IsRUFBRSxNQUFvQixFQUFFLGFBQXNCOztVQUNwRyxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7SUFDeEMsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFO1FBQ3pCLENBQUMsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsYUFBYSxDQUFDO1FBQ3RELENBQUMsQ0FBQyxJQUFJLG9CQUFvQixDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDNUQsQ0FBQzs7Ozs7O0FBV0QsTUFBTSxPQUFnQixpQkFBaUI7Ozs7OztJQUNyQyxZQUNZLElBQW1CLEVBQ2lCLE1BQW9CLEVBQ1osYUFBc0I7UUFGbEUsU0FBSSxHQUFKLElBQUksQ0FBZTtR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QUksQ0FBQyxNQUFNLENBQUMsY0FBYyxLQUFLLFNBQVMsRUFBRTs7a0JBQ3RDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN0QyxPQUFPLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hGO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUNwQyxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsSUFBaUIsRUFBRSxTQUFpQjtRQUN6QyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQUEsVUFBVSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMzRSxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxJQUFZO1FBQ3BCLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsSUFBWTtRQUNwQixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTztTQUNSO1FBQ0QsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgZm5zRm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XG5pbXBvcnQgZm5zR2V0SVNPV2VlayBmcm9tICdkYXRlLWZucy9nZXRJU09XZWVrJztcbmltcG9ydCBmbnNQYXJzZSBmcm9tICdkYXRlLWZucy9wYXJzZSc7XG5cbmltcG9ydCB7IFdlZWtEYXlJbmRleCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90aW1lJztcbmltcG9ydCB7IGNvbnZlcnRUb2tlbnMgfSBmcm9tICcuL2NvbnZlcnQtdG9rZW5zJztcbmltcG9ydCB7IG1lcmdlRGF0ZUNvbmZpZywgTlpfREFURV9DT05GSUcsIE5aX0RBVEVfRk5TX0NPTVBBVElCTEUsIE56RGF0ZUNvbmZpZyB9IGZyb20gJy4vZGF0ZS1jb25maWcnO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJy4vbnotaTE4bi5zZXJ2aWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIERBVEVfSEVMUEVSX1NFUlZJQ0VfRkFDVE9SWShpbmplY3RvcjogSW5qZWN0b3IsIGNvbmZpZzogTnpEYXRlQ29uZmlnLCBjb252ZXJ0Rm9ybWF0OiBib29sZWFuKTogRGF0ZUhlbHBlclNlcnZpY2Uge1xuICBjb25zdCBpMThuID0gaW5qZWN0b3IuZ2V0KE56STE4blNlcnZpY2UpO1xuICByZXR1cm4gaTE4bi5nZXREYXRlTG9jYWxlKClcbiAgICA/IG5ldyBEYXRlSGVscGVyQnlEYXRlRm5zKGkxOG4sIGNvbmZpZywgY29udmVydEZvcm1hdClcbiAgICA6IG5ldyBEYXRlSGVscGVyQnlEYXRlUGlwZShpMThuLCBjb25maWcsIGNvbnZlcnRGb3JtYXQpO1xufVxuXG4vKipcbiAqIEFic3RyYWN0IERhdGVIZWxwZXJTZXJ2aWNlKFRva2VuIHZpYSBDbGFzcylcbiAqIENvbXBhdGliaWxpdHk6IGNvbXBhY3QgZm9yIG9yaWdpbmFsIHVzYWdlIGJ5IGRlZmF1bHQgd2hpY2ggdXNpbmcgRGF0ZVBpcGVcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG4gIHVzZUZhY3Rvcnk6IERBVEVfSEVMUEVSX1NFUlZJQ0VfRkFDVE9SWSxcbiAgZGVwczogW0luamVjdG9yLCBbbmV3IE9wdGlvbmFsKCksIE5aX0RBVEVfQ09ORklHXSwgW25ldyBPcHRpb25hbCgpLCBOWl9EQVRFX0ZOU19DT01QQVRJQkxFXV1cbn0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGF0ZUhlbHBlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaTE4bjogTnpJMThuU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX0RBVEVfQ09ORklHKSBwcm90ZWN0ZWQgY29uZmlnOiBOekRhdGVDb25maWcsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9EQVRFX0ZOU19DT01QQVRJQkxFKSBwcm90ZWN0ZWQgY29udmVydEZvcm1hdDogYm9vbGVhblxuICApIHtcbiAgICB0aGlzLmNvbmZpZyA9IG1lcmdlRGF0ZUNvbmZpZyh0aGlzLmNvbmZpZyk7XG4gIH1cblxuICBhYnN0cmFjdCBnZXRJU09XZWVrKGRhdGU6IERhdGUpOiBudW1iZXI7XG4gIGFic3RyYWN0IGdldEZpcnN0RGF5T2ZXZWVrKCk6IFdlZWtEYXlJbmRleDtcbiAgYWJzdHJhY3QgZm9ybWF0KGRhdGU6IERhdGUsIGZvcm1hdFN0cjogc3RyaW5nKTogc3RyaW5nO1xuICBhYnN0cmFjdCBwYXJzZURhdGUodGV4dDogc3RyaW5nLCBmb3JtYXRTdHI/OiBzdHJpbmcpOiBEYXRlO1xuICBhYnN0cmFjdCBwYXJzZVRpbWUodGV4dDogc3RyaW5nLCBmb3JtYXRTdHI/OiBzdHJpbmcpOiBEYXRlIHwgdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIERhdGVIZWxwZXIgdGhhdCBoYW5kbGVzIGRhdGUgZm9ybWF0cyB3aXRoIGRhdGUtZm5zXG4gKi9cbmV4cG9ydCBjbGFzcyBEYXRlSGVscGVyQnlEYXRlRm5zIGV4dGVuZHMgRGF0ZUhlbHBlclNlcnZpY2Uge1xuICBnZXRJU09XZWVrKGRhdGU6IERhdGUpOiBudW1iZXIge1xuICAgIHJldHVybiBmbnNHZXRJU09XZWVrKGRhdGUpO1xuICB9XG5cbiAgLy8gVXNlIGRhdGUtZm5zJ3MgXCJ3ZWVrU3RhcnRzT25cIiB0byBzdXBwb3J0IGRpZmZlcmVudCBsb2NhbGUgd2hlbiBcImNvbmZpZy5maXJzdERheU9mV2Vla1wiIGlzIG51bGxcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvdjIuMC4wLWFscGhhLjI3L3NyYy9sb2NhbGUvZW4tVVMvaW5kZXguanMjTDIzXG4gIGdldEZpcnN0RGF5T2ZXZWVrKCk6IFdlZWtEYXlJbmRleCB7XG4gICAgbGV0IGRlZmF1bHRXZWVrU3RhcnRzT246IFdlZWtEYXlJbmRleDtcbiAgICB0cnkge1xuICAgICAgZGVmYXVsdFdlZWtTdGFydHNPbiA9IHRoaXMuaTE4bi5nZXREYXRlTG9jYWxlKCkub3B0aW9ucyEud2Vla1N0YXJ0c09uITtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBkZWZhdWx0V2Vla1N0YXJ0c09uID0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmZpcnN0RGF5T2ZXZWVrID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdGhpcy5jb25maWcuZmlyc3REYXlPZldlZWs7XG4gIH1cblxuICAvKipcbiAgICogRm9ybWF0IGEgZGF0ZVxuICAgKiBAc2VlIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZm9ybWF0I2Rlc2NyaXB0aW9uXG4gICAqIEBwYXJhbSBkYXRlIERhdGVcbiAgICogQHBhcmFtIGZvcm1hdFN0ciBmb3JtYXQgc3RyaW5nXG4gICAqL1xuICBmb3JtYXQoZGF0ZTogRGF0ZSwgZm9ybWF0U3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG1lcmdlZFN0ciA9IHRoaXMuY29udmVydEZvcm1hdCA/IGNvbnZlcnRUb2tlbnMoZm9ybWF0U3RyKSA6IGZvcm1hdFN0cjtcbiAgICByZXR1cm4gZGF0ZSA/IGZuc0Zvcm1hdChkYXRlLCBtZXJnZWRTdHIsIHsgbG9jYWxlOiB0aGlzLmkxOG4uZ2V0RGF0ZUxvY2FsZSgpIH0pIDogJyc7XG4gIH1cblxuICBwYXJzZURhdGUodGV4dDogc3RyaW5nLCBmb3JtYXRTdHI6IHN0cmluZyk6IERhdGUge1xuICAgIGNvbnN0IG1lcmdlZFN0ciA9IHRoaXMuY29udmVydEZvcm1hdCA/IGNvbnZlcnRUb2tlbnMoZm9ybWF0U3RyKSA6IGZvcm1hdFN0cjtcbiAgICByZXR1cm4gZm5zUGFyc2UodGV4dCwgbWVyZ2VkU3RyLCBuZXcgRGF0ZSgpLCB7XG4gICAgICBsb2NhbGU6IHRoaXMuaTE4bi5nZXREYXRlTG9jYWxlKCksXG4gICAgICB3ZWVrU3RhcnRzT246IHRoaXMuZ2V0Rmlyc3REYXlPZldlZWsoKVxuICAgIH0pO1xuICB9XG5cbiAgcGFyc2VUaW1lKHRleHQ6IHN0cmluZywgZm9ybWF0U3RyOiBzdHJpbmcpOiBEYXRlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZURhdGUodGV4dCwgZm9ybWF0U3RyKTtcbiAgfVxufVxuXG4vKipcbiAqIERhdGVIZWxwZXIgdGhhdCBoYW5kbGVzIGRhdGUgZm9ybWF0cyB3aXRoIGFuZ3VsYXIncyBkYXRlLXBpcGVcbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2lzc3Vlcy8yNDA2IC0gRGF0ZVBpcGUgbWF5IGNhdXNlIG5vbi1zdGFuZGFyZCB3ZWVrIGJ1Zywgc2VlOlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIERhdGVIZWxwZXJCeURhdGVQaXBlIGV4dGVuZHMgRGF0ZUhlbHBlclNlcnZpY2Uge1xuICBnZXRJU09XZWVrKGRhdGU6IERhdGUpOiBudW1iZXIge1xuICAgIHJldHVybiArdGhpcy5mb3JtYXQoZGF0ZSwgJ3cnKTtcbiAgfVxuXG4gIGdldEZpcnN0RGF5T2ZXZWVrKCk6IFdlZWtEYXlJbmRleCB7XG4gICAgaWYgKHRoaXMuY29uZmlnLmZpcnN0RGF5T2ZXZWVrID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVJZCgpO1xuICAgICAgcmV0dXJuIGxvY2FsZSAmJiBbJ3poLWNuJywgJ3poLXR3J10uaW5kZXhPZihsb2NhbGUudG9Mb3dlckNhc2UoKSkgPiAtMSA/IDEgOiAwO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb25maWcuZmlyc3REYXlPZldlZWs7XG4gIH1cblxuICBmb3JtYXQoZGF0ZTogRGF0ZSB8IG51bGwsIGZvcm1hdFN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZGF0ZSA/IGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0U3RyLCB0aGlzLmkxOG4uZ2V0TG9jYWxlSWQoKSkhIDogJyc7XG4gIH1cblxuICBwYXJzZURhdGUodGV4dDogc3RyaW5nKTogRGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHRleHQpO1xuICB9XG5cbiAgcGFyc2VUaW1lKHRleHQ6IHN0cmluZyk6IERhdGUgfCB1bmRlZmluZWQge1xuICAgIGlmICghdGV4dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoRGF0ZS5wYXJzZShgMTk3MC0wMS0wMSAke3RleHR9YCkpO1xuICB9XG59XG4iXX0=