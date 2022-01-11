/**
 * @fileoverview added by tsickle
 * Generated from: candy-date.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __read } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import addMonths from 'date-fns/addMonths';
import addYears from 'date-fns/addYears';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import differenceInCalendarMonths from 'date-fns/differenceInCalendarMonths';
import differenceInCalendarYears from 'date-fns/differenceInCalendarYears';
import differenceInHours from 'date-fns/differenceInHours';
import differenceInMinutes from 'date-fns/differenceInMinutes';
import differenceInSeconds from 'date-fns/differenceInSeconds';
import isFirstDayOfMonth from 'date-fns/isFirstDayOfMonth';
import isLastDayOfMonth from 'date-fns/isLastDayOfMonth';
import isSameDay from 'date-fns/isSameDay';
import isSameHour from 'date-fns/isSameHour';
import isSameMinute from 'date-fns/isSameMinute';
import isSameMonth from 'date-fns/isSameMonth';
import isSameSecond from 'date-fns/isSameSecond';
import isSameYear from 'date-fns/isSameYear';
import isToday from 'date-fns/isToday';
import isValid from 'date-fns/isValid';
import setDay from 'date-fns/setDay';
import setMonth from 'date-fns/setMonth';
import setYear from 'date-fns/setYear';
import startOfMonth from 'date-fns/startOfMonth';
import startOfWeek from 'date-fns/startOfWeek';
import { warn } from 'ng-zorro-antd/core/logger';
/**
 * @param {?} rangeValue
 * @return {?}
 */
export function sortRangeValue(rangeValue) {
    if (Array.isArray(rangeValue)) {
        var _a = __read(rangeValue, 2), start = _a[0], end = _a[1];
        return start && end && start.isAfterSecond(end) ? [end, start] : [start, end];
    }
    return rangeValue;
}
/**
 * @param {?} value
 * @return {?}
 */
export function normalizeRangeValue(value) {
    var _a = __read(value || [], 2), start = _a[0], end = _a[1];
    /** @type {?} */
    var newStart = start || new CandyDate();
    /** @type {?} */
    var newEnd = (end === null || end === void 0 ? void 0 : end.isSameMonth(newStart)) ? end.addMonths(1) : end || newStart.addMonths(1);
    return [newStart, newEnd];
}
/**
 * @param {?} value
 * @return {?}
 */
export function cloneDate(value) {
    if (Array.isArray(value)) {
        return value.map((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return (v instanceof CandyDate ? v.clone() : null); }));
    }
    else {
        return value instanceof CandyDate ? value.clone() : null;
    }
}
/**
 * Wrapping kind APIs for date operating and unify
 * NOTE: every new API return new CandyDate object without side effects to the former Date object
 * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
 * TODO: support format() against to angular's core API
 */
var /**
 * Wrapping kind APIs for date operating and unify
 * NOTE: every new API return new CandyDate object without side effects to the former Date object
 * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
 * TODO: support format() against to angular's core API
 */
CandyDate = /** @class */ (function () {
    // locale: string; // Custom specified locale ID
    function CandyDate(date) {
        if (date) {
            if (date instanceof Date) {
                this.nativeDate = date;
            }
            else if (typeof date === 'string' || typeof date === 'number') {
                warn('The string type is not recommended for date-picker, use "Date" type');
                this.nativeDate = new Date(date);
            }
            else {
                throw new Error('The input date type is not supported ("Date" is now recommended)');
            }
        }
        else {
            this.nativeDate = new Date();
        }
    }
    // getLocale(): string {
    //   return this.locale;
    // }
    // setLocale(locale: string): CandyDate {
    //   this.locale = locale;
    //   return this;
    // }
    // getLocale(): string {
    //   return this.locale;
    // }
    // setLocale(locale: string): CandyDate {
    //   this.locale = locale;
    //   return this;
    // }
    /**
     * @param {?=} options
     * @return {?}
     */
    CandyDate.prototype.calendarStart = 
    // getLocale(): string {
    //   return this.locale;
    // }
    // setLocale(locale: string): CandyDate {
    //   this.locale = locale;
    //   return this;
    // }
    /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return new CandyDate(startOfWeek(startOfMonth(this.nativeDate), options));
    };
    // ---------------------------------------------------------------------
    // | Native shortcuts
    // -----------------------------------------------------------------------------\
    // ---------------------------------------------------------------------
    // | Native shortcuts
    // -----------------------------------------------------------------------------\
    /**
     * @return {?}
     */
    CandyDate.prototype.getYear = 
    // ---------------------------------------------------------------------
    // | Native shortcuts
    // -----------------------------------------------------------------------------\
    /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getFullYear();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getMonth = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getMonth();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getDay = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getDay();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getTime = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getTime();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getDate = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getDate();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getHours = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getHours();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getMinutes = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getMinutes();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getSeconds = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getSeconds();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getMilliseconds = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getMilliseconds();
    };
    // ---------------------------------------------------------------------
    // | New implementing APIs
    // ---------------------------------------------------------------------
    // ---------------------------------------------------------------------
    // | New implementing APIs
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    CandyDate.prototype.clone = 
    // ---------------------------------------------------------------------
    // | New implementing APIs
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    function () {
        return new CandyDate(new Date(this.nativeDate));
    };
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} second
     * @return {?}
     */
    CandyDate.prototype.setHms = /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} second
     * @return {?}
     */
    function (hour, minute, second) {
        return new CandyDate(this.nativeDate.setHours(hour, minute, second));
    };
    /**
     * @param {?} year
     * @return {?}
     */
    CandyDate.prototype.setYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        return new CandyDate(setYear(this.nativeDate, year));
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CandyDate.prototype.addYears = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        return new CandyDate(addYears(this.nativeDate, amount));
    };
    // NOTE: month starts from 0
    // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28
    // NOTE: month starts from 0
    // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28
    /**
     * @param {?} month
     * @return {?}
     */
    CandyDate.prototype.setMonth = 
    // NOTE: month starts from 0
    // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28
    /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        return new CandyDate(setMonth(this.nativeDate, month));
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CandyDate.prototype.addMonths = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        return new CandyDate(addMonths(this.nativeDate, amount));
    };
    /**
     * @param {?} day
     * @param {?=} options
     * @return {?}
     */
    CandyDate.prototype.setDay = /**
     * @param {?} day
     * @param {?=} options
     * @return {?}
     */
    function (day, options) {
        return new CandyDate(setDay(this.nativeDate, day, options));
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CandyDate.prototype.setDate = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        /** @type {?} */
        var date = new Date(this.nativeDate);
        date.setDate(amount);
        return new CandyDate(date);
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CandyDate.prototype.addDays = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        return this.setDate(this.getDate() + amount);
    };
    /**
     * @param {?} date
     * @param {?=} grain
     * @return {?}
     */
    CandyDate.prototype.isSame = /**
     * @param {?} date
     * @param {?=} grain
     * @return {?}
     */
    function (date, grain) {
        if (grain === void 0) { grain = 'day'; }
        /** @type {?} */
        var fn;
        switch (grain) {
            case 'year':
                fn = isSameYear;
                break;
            case 'month':
                fn = isSameMonth;
                break;
            case 'day':
                fn = isSameDay;
                break;
            case 'hour':
                fn = isSameHour;
                break;
            case 'minute':
                fn = isSameMinute;
                break;
            case 'second':
                fn = isSameSecond;
                break;
            default:
                fn = isSameDay;
                break;
        }
        return fn(this.nativeDate, this.toNativeDate(date));
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isSameYear = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.isSame(date, 'year');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isSameMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.isSame(date, 'month');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isSameDay = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.isSame(date, 'day');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isSameHour = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.isSame(date, 'hour');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isSameMinute = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.isSame(date, 'minute');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isSameSecond = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.isSame(date, 'second');
    };
    /**
     * @param {?} date
     * @param {?=} grain
     * @param {?=} isBefore
     * @return {?}
     */
    CandyDate.prototype.compare = /**
     * @param {?} date
     * @param {?=} grain
     * @param {?=} isBefore
     * @return {?}
     */
    function (date, grain, isBefore) {
        if (grain === void 0) { grain = 'day'; }
        if (isBefore === void 0) { isBefore = true; }
        if (date === null) {
            return false;
        }
        /** @type {?} */
        var fn;
        switch (grain) {
            case 'year':
                fn = differenceInCalendarYears;
                break;
            case 'month':
                fn = differenceInCalendarMonths;
                break;
            case 'day':
                fn = differenceInCalendarDays;
                break;
            case 'hour':
                fn = differenceInHours;
                break;
            case 'minute':
                fn = differenceInMinutes;
                break;
            case 'second':
                fn = differenceInSeconds;
                break;
            default:
                fn = differenceInCalendarDays;
                break;
        }
        return isBefore ? fn(this.nativeDate, this.toNativeDate(date)) < 0 : fn(this.nativeDate, this.toNativeDate(date)) > 0;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isBeforeYear = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'year');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isBeforeMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'month');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isBeforeDay = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'day');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isBeforeHour = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'hour');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isBeforeMinute = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'minute');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isBeforeSecond = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'second');
    };
    // TODO: isBefore
    // TODO: isBefore
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isAfterYear = 
    // TODO: isBefore
    /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'year', false);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isAfterMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'month', false);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isAfterDay = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'day', false);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isAfterHour = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'hour', false);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isAfterMinute = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'minute', false);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.isAfterSecond = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.compare(date, 'second', false);
    };
    // Equal to today accurate to "day"
    // Equal to today accurate to "day"
    /**
     * @return {?}
     */
    CandyDate.prototype.isToday = 
    // Equal to today accurate to "day"
    /**
     * @return {?}
     */
    function () {
        return isToday(this.nativeDate);
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.isValid = /**
     * @return {?}
     */
    function () {
        return isValid(this.nativeDate);
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.isFirstDayOfMonth = /**
     * @return {?}
     */
    function () {
        return isFirstDayOfMonth(this.nativeDate);
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.isLastDayOfMonth = /**
     * @return {?}
     */
    function () {
        return isLastDayOfMonth(this.nativeDate);
    };
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    CandyDate.prototype.toNativeDate = /**
     * @private
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date instanceof CandyDate ? date.nativeDate : date;
    };
    return CandyDate;
}());
/**
 * Wrapping kind APIs for date operating and unify
 * NOTE: every new API return new CandyDate object without side effects to the former Date object
 * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
 * TODO: support format() against to angular's core API
 */
export { CandyDate };
if (false) {
    /** @type {?} */
    CandyDate.prototype.nativeDate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuZHktZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS90aW1lLyIsInNvdXJjZXMiOlsiY2FuZHktZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxTQUFTLE1BQU0sb0JBQW9CLENBQUM7QUFDM0MsT0FBTyxRQUFRLE1BQU0sbUJBQW1CLENBQUM7QUFDekMsT0FBTyx3QkFBd0IsTUFBTSxtQ0FBbUMsQ0FBQztBQUN6RSxPQUFPLDBCQUEwQixNQUFNLHFDQUFxQyxDQUFDO0FBQzdFLE9BQU8seUJBQXlCLE1BQU0sb0NBQW9DLENBQUM7QUFDM0UsT0FBTyxpQkFBaUIsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLG1CQUFtQixNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sbUJBQW1CLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxpQkFBaUIsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLGdCQUFnQixNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sU0FBUyxNQUFNLG9CQUFvQixDQUFDO0FBQzNDLE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBQzdDLE9BQU8sWUFBWSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sV0FBVyxNQUFNLHNCQUFzQixDQUFDO0FBQy9DLE9BQU8sWUFBWSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBQzdDLE9BQU8sT0FBTyxNQUFNLGtCQUFrQixDQUFDO0FBQ3ZDLE9BQU8sT0FBTyxNQUFNLGtCQUFrQixDQUFDO0FBQ3ZDLE9BQU8sTUFBTSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JDLE9BQU8sUUFBUSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pDLE9BQU8sT0FBTyxNQUFNLGtCQUFrQixDQUFDO0FBQ3ZDLE9BQU8sWUFBWSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sV0FBVyxN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QUVELG9DQUFnQjs7O0lBQWhCO1FBQ0UsT0FBTyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7O0lBRU8sZ0NBQVk7Ozs7O0lBQXBCLFVBQXFCLElBQWU7UUFDbEMsT0FBTyxJQUFJLFlBQVksU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDNUQsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQTVRRCxJQTRRQzs7Ozs7Ozs7OztJQTNRQywrQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgYWRkTW9udGhzIGZyb20gJ2RhdGUtZm5zL2FkZE1vbnRocyc7XG5pbXBvcnQgYWRkWWVhcnMgZnJvbSAnZGF0ZS1mbnMvYWRkWWVhcnMnO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyBmcm9tICdkYXRlLWZucy9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMnO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzIGZyb20gJ2RhdGUtZm5zL2RpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzJztcbmltcG9ydCBkaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzIGZyb20gJ2RhdGUtZm5zL2RpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMnO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkhvdXJzIGZyb20gJ2RhdGUtZm5zL2RpZmZlcmVuY2VJbkhvdXJzJztcbmltcG9ydCBkaWZmZXJlbmNlSW5NaW51dGVzIGZyb20gJ2RhdGUtZm5zL2RpZmZlcmVuY2VJbk1pbnV0ZXMnO1xuaW1wb3J0IGRpZmZlcmVuY2VJblNlY29uZHMgZnJvbSAnZGF0ZS1mbnMvZGlmZmVyZW5jZUluU2Vjb25kcyc7XG5pbXBvcnQgaXNGaXJzdERheU9mTW9udGggZnJvbSAnZGF0ZS1mbnMvaXNGaXJzdERheU9mTW9udGgnO1xuaW1wb3J0IGlzTGFzdERheU9mTW9udGggZnJvbSAnZGF0ZS1mbnMvaXNMYXN0RGF5T2ZNb250aCc7XG5pbXBvcnQgaXNTYW1lRGF5IGZyb20gJ2RhdGUtZm5zL2lzU2FtZURheSc7XG5pbXBvcnQgaXNTYW1lSG91ciBmcm9tICdkYXRlLWZucy9pc1NhbWVIb3VyJztcbmltcG9ydCBpc1NhbWVNaW51dGUgZnJvbSAnZGF0ZS1mbnMvaXNTYW1lTWludXRlJztcbmltcG9ydCBpc1NhbWVNb250aCBmcm9tICdkYXRlLWZucy9pc1NhbWVNb250aCc7XG5pbXBvcnQgaXNTYW1lU2Vjb25kIGZyb20gJ2RhdGUtZm5zL2lzU2FtZVNlY29uZCc7XG5pbXBvcnQgaXNTYW1lWWVhciBmcm9tICdkYXRlLWZucy9pc1NhbWVZZWFyJztcbmltcG9ydCBpc1RvZGF5IGZyb20gJ2RhdGUtZm5zL2lzVG9kYXknO1xuaW1wb3J0IGlzVmFsaWQgZnJvbSAnZGF0ZS1mbnMvaXNWYWxpZCc7XG5pbXBvcnQgc2V0RGF5IGZyb20gJ2RhdGUtZm5zL3NldERheSc7XG5pbXBvcnQgc2V0TW9udGggZnJvbSAnZGF0ZS1mbnMvc2V0TW9udGgnO1xuaW1wb3J0IHNldFllYXIgZnJvbSAnZGF0ZS1mbnMvc2V0WWVhcic7XG5pbXBvcnQgc3RhcnRPZk1vbnRoIGZyb20gJ2RhdGUtZm5zL3N0YXJ0T2ZNb250aCc7XG5pbXBvcnQgc3RhcnRPZldlZWsgZnJvbSAnZGF0ZS1mbnMvc3RhcnRPZldlZWsnO1xuaW1wb3J0IHsgd2FybiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9sb2dnZXInO1xuaW1wb3J0IHsgSW5kZXhhYmxlT2JqZWN0LCBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5leHBvcnQgdHlwZSBXZWVrRGF5SW5kZXggPSAwIHwgMSB8IDIgfCAzIHwgNCB8IDUgfCA2O1xuZXhwb3J0IHR5cGUgQ2FuZHlEYXRlQ29tcGFyZUdyYWluID0gJ3llYXInIHwgJ21vbnRoJyB8ICdkYXknIHwgJ2hvdXInIHwgJ21pbnV0ZScgfCAnc2Vjb25kJztcbmV4cG9ydCB0eXBlIENhbmR5RGF0ZVR5cGUgPSBDYW5keURhdGUgfCBEYXRlIHwgbnVsbDtcbmV4cG9ydCB0eXBlIFNpbmdsZVZhbHVlID0gQ2FuZHlEYXRlIHwgbnVsbDtcbmV4cG9ydCB0eXBlIENvbXBhdGlibGVWYWx1ZSA9IFNpbmdsZVZhbHVlIHwgU2luZ2xlVmFsdWVbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRSYW5nZVZhbHVlKHJhbmdlVmFsdWU6IFNpbmdsZVZhbHVlW10pOiBTaW5nbGVWYWx1ZVtdIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocmFuZ2VWYWx1ZSkpIHtcbiAgICBjb25zdCBbc3RhcnQsIGVuZF0gPSByYW5nZVZhbHVlO1xuICAgIHJldHVybiBzdGFydCAmJiBlbmQgJiYgc3RhcnQuaXNBZnRlclNlY29uZChlbmQpID8gW2VuZCwgc3RhcnRdIDogW3N0YXJ0LCBlbmRdO1xuICB9XG4gIHJldHVybiByYW5nZVZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplUmFuZ2VWYWx1ZSh2YWx1ZTogU2luZ2xlVmFsdWVbXSk6IENhbmR5RGF0ZVtdIHtcbiAgY29uc3QgW3N0YXJ0LCBlbmRdID0gdmFsdWUgfHwgW107XG4gIGNvbnN0IG5ld1N0YXJ0ID0gc3RhcnQgfHwgbmV3IENhbmR5RGF0ZSgpO1xuICBjb25zdCBuZXdFbmQgPSBlbmQ/LmlzU2FtZU1vbnRoKG5ld1N0YXJ0KSA/IGVuZC5hZGRNb250aHMoMSkgOiBlbmQgfHwgbmV3U3RhcnQuYWRkTW9udGhzKDEpO1xuICByZXR1cm4gW25ld1N0YXJ0LCBuZXdFbmRdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVEYXRlKHZhbHVlOiBDb21wYXRpYmxlVmFsdWUpOiBDb21wYXRpYmxlVmFsdWUge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUubWFwKHYgPT4gKHYgaW5zdGFuY2VvZiBDYW5keURhdGUgPyB2LmNsb25lKCkgOiBudWxsKSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgQ2FuZHlEYXRlID8gdmFsdWUuY2xvbmUoKSA6IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBXcmFwcGluZyBraW5kIEFQSXMgZm9yIGRhdGUgb3BlcmF0aW5nIGFuZCB1bmlmeVxuICogTk9URTogZXZlcnkgbmV3IEFQSSByZXR1cm4gbmV3IENhbmR5RGF0ZSBvYmplY3Qgd2l0aG91dCBzaWRlIGVmZmVjdHMgdG8gdGhlIGZvcm1lciBEYXRlIG9iamVjdFxuICogTk9URTogbW9zdCBBUElzIGFyZSBiYXNlZCBvbiBsb2NhbCB0aW1lIG90aGVyIHRoYW4gY3VzdG9taXplZCBsb2NhbGUgaWQgKHRoaXMgbmVlZHMgdG9iZSBzdXBwb3J0IGluIGZ1dHVyZSlcbiAqIFRPRE86IHN1cHBvcnQgZm9ybWF0KCkgYWdhaW5zdCB0byBhbmd1bGFyJ3MgY29yZSBBUElcbiAqL1xuZXhwb3J0IGNsYXNzIENhbmR5RGF0ZSBpbXBsZW1lbnRzIEluZGV4YWJsZU9iamVjdCB7XG4gIG5hdGl2ZURhdGU6IERhdGU7XG4gIC8vIGxvY2FsZTogc3RyaW5nOyAvLyBDdXN0b20gc3BlY2lmaWVkIGxvY2FsZSBJRFxuXG4gIGNvbnN0cnVjdG9yKGRhdGU/OiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKGRhdGUpIHtcbiAgICAgIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICB0aGlzLm5hdGl2ZURhdGUgPSBkYXRlO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGRhdGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHdhcm4oJ1RoZSBzdHJpbmcgdHlwZSBpcyBub3QgcmVjb21tZW5kZWQgZm9yIGRhdGUtcGlja2VyLCB1c2UgXCJEYXRlXCIgdHlwZScpO1xuICAgICAgICB0aGlzLm5hdGl2ZURhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGlucHV0IGRhdGUgdHlwZSBpcyBub3Qgc3VwcG9ydGVkIChcIkRhdGVcIiBpcyBub3cgcmVjb21tZW5kZWQpJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubmF0aXZlRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gZ2V0TG9jYWxlKCk6IHN0cmluZyB7XG4gIC8vICAgcmV0dXJuIHRoaXMubG9jYWxlO1xuICAvLyB9XG5cbiAgLy8gc2V0TG9jYWxlKGxvY2FsZTogc3RyaW5nKTogQ2FuZHlEYXRlIHtcbiAgLy8gICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgLy8gICByZXR1cm4gdGhpcztcbiAgLy8gfVxuXG4gIGNhbGVuZGFyU3RhcnQob3B0aW9ucz86IHsgd2Vla1N0YXJ0c09uOiBXZWVrRGF5SW5kZXggfCB1bmRlZmluZWQgfSk6IENhbmR5RGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoc3RhcnRPZldlZWsoc3RhcnRPZk1vbnRoKHRoaXMubmF0aXZlRGF0ZSksIG9wdGlvbnMpKTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IE5hdGl2ZSBzaG9ydGN1dHNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXFxuXG4gIGdldFllYXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldEZ1bGxZZWFyKCk7XG4gIH1cblxuICBnZXRNb250aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0TW9udGgoKTtcbiAgfVxuXG4gIGdldERheSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0RGF5KCk7XG4gIH1cblxuICBnZXRUaW1lKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXRUaW1lKCk7XG4gIH1cblxuICBnZXREYXRlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXREYXRlKCk7XG4gIH1cblxuICBnZXRIb3VycygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0SG91cnMoKTtcbiAgfVxuXG4gIGdldE1pbnV0ZXMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldE1pbnV0ZXMoKTtcbiAgfVxuXG4gIGdldFNlY29uZHMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldFNlY29uZHMoKTtcbiAgfVxuXG4gIGdldE1pbGxpc2Vjb25kcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBOZXcgaW1wbGVtZW50aW5nIEFQSXNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgY2xvbmUoKTogQ2FuZHlEYXRlIHtcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShuZXcgRGF0ZSh0aGlzLm5hdGl2ZURhdGUpKTtcbiAgfVxuXG4gIHNldEhtcyhob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyLCBzZWNvbmQ6IG51bWJlcik6IENhbmR5RGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUodGhpcy5uYXRpdmVEYXRlLnNldEhvdXJzKGhvdXIsIG1pbnV0ZSwgc2Vjb25kKSk7XG4gIH1cblxuICBzZXRZZWFyKHllYXI6IG51bWJlcik6IENhbmR5RGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoc2V0WWVhcih0aGlzLm5hdGl2ZURhdGUsIHllYXIpKTtcbiAgfVxuXG4gIGFkZFllYXJzKGFtb3VudDogbnVtYmVyKTogQ2FuZHlEYXRlIHtcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShhZGRZZWFycyh0aGlzLm5hdGl2ZURhdGUsIGFtb3VudCkpO1xuICB9XG5cbiAgLy8gTk9URTogbW9udGggc3RhcnRzIGZyb20gMFxuICAvLyBOT1RFOiBEb24ndCB1c2UgdGhlIG5hdGl2ZSBBUEkgZm9yIG1vbnRoIG1hbmlwdWxhdGlvbiBhcyBpdCBub3QgcmVzdHJpY3QgdGhlIGRhdGUgd2hlbiBpdCBvdmVyZmxvd3MsIGVnLiAobmV3IERhdGUoJzIwMTgtNy0zMScpKS5zZXRNb250aCgxKSB3aWxsIGJlIGRhdGUgb2YgMjAxOC0zLTAzIGluc3RlYWQgb2YgMjAxOC0yLTI4XG4gIHNldE1vbnRoKG1vbnRoOiBudW1iZXIpOiBDYW5keURhdGUge1xuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKHNldE1vbnRoKHRoaXMubmF0aXZlRGF0ZSwgbW9udGgpKTtcbiAgfVxuXG4gIGFkZE1vbnRocyhhbW91bnQ6IG51bWJlcik6IENhbmR5RGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoYWRkTW9udGhzKHRoaXMubmF0aXZlRGF0ZSwgYW1vdW50KSk7XG4gIH1cblxuICBzZXREYXkoZGF5OiBudW1iZXIsIG9wdGlvbnM/OiB7IHdlZWtTdGFydHNPbjogV2Vla0RheUluZGV4IH0pOiBDYW5keURhdGUge1xuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKHNldERheSh0aGlzLm5hdGl2ZURhdGUsIGRheSwgb3B0aW9ucykpO1xuICB9XG5cbiAgc2V0RGF0ZShhbW91bnQ6IG51bWJlcik6IENhbmR5RGF0ZSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMubmF0aXZlRGF0ZSk7XG4gICAgZGF0ZS5zZXREYXRlKGFtb3VudCk7XG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoZGF0ZSk7XG4gIH1cblxuICBhZGREYXlzKGFtb3VudDogbnVtYmVyKTogQ2FuZHlEYXRlIHtcbiAgICByZXR1cm4gdGhpcy5zZXREYXRlKHRoaXMuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgfVxuXG4gIGlzU2FtZShkYXRlOiBDYW5keURhdGVUeXBlLCBncmFpbjogQ2FuZHlEYXRlQ29tcGFyZUdyYWluID0gJ2RheScpOiBib29sZWFuIHtcbiAgICBsZXQgZm47XG4gICAgc3dpdGNoIChncmFpbikge1xuICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgIGZuID0gaXNTYW1lWWVhcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtb250aCc6XG4gICAgICAgIGZuID0gaXNTYW1lTW9udGg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgZm4gPSBpc1NhbWVEYXk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaG91cic6XG4gICAgICAgIGZuID0gaXNTYW1lSG91cjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICBmbiA9IGlzU2FtZU1pbnV0ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICBmbiA9IGlzU2FtZVNlY29uZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBmbiA9IGlzU2FtZURheTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBmbih0aGlzLm5hdGl2ZURhdGUsIHRoaXMudG9OYXRpdmVEYXRlKGRhdGUpKTtcbiAgfVxuXG4gIGlzU2FtZVllYXIoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzU2FtZShkYXRlLCAneWVhcicpO1xuICB9XG5cbiAgaXNTYW1lTW9udGgoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzU2FtZShkYXRlLCAnbW9udGgnKTtcbiAgfVxuXG4gIGlzU2FtZURheShkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNTYW1lKGRhdGUsICdkYXknKTtcbiAgfVxuXG4gIGlzU2FtZUhvdXIoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzU2FtZShkYXRlLCAnaG91cicpO1xuICB9XG5cbiAgaXNTYW1lTWludXRlKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc1NhbWUoZGF0ZSwgJ21pbnV0ZScpO1xuICB9XG5cbiAgaXNTYW1lU2Vjb25kKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc1NhbWUoZGF0ZSwgJ3NlY29uZCcpO1xuICB9XG5cbiAgY29tcGFyZShkYXRlOiBDYW5keURhdGVUeXBlLCBncmFpbjogQ2FuZHlEYXRlQ29tcGFyZUdyYWluID0gJ2RheScsIGlzQmVmb3JlOiBib29sZWFuID0gdHJ1ZSk6IGJvb2xlYW4ge1xuICAgIGlmIChkYXRlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBmbjtcbiAgICBzd2l0Y2ggKGdyYWluKSB7XG4gICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgZm4gPSBkaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgZm4gPSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkYXknOlxuICAgICAgICBmbiA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdob3VyJzpcbiAgICAgICAgZm4gPSBkaWZmZXJlbmNlSW5Ib3VycztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICBmbiA9IGRpZmZlcmVuY2VJbk1pbnV0ZXM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgICAgZm4gPSBkaWZmZXJlbmNlSW5TZWNvbmRzO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGZuID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGlzQmVmb3JlID8gZm4odGhpcy5uYXRpdmVEYXRlLCB0aGlzLnRvTmF0aXZlRGF0ZShkYXRlKSkgPCAwIDogZm4odGhpcy5uYXRpdmVEYXRlLCB0aGlzLnRvTmF0aXZlRGF0ZShkYXRlKSkgPiAwO1xuICB9XG5cbiAgaXNCZWZvcmVZZWFyKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlKGRhdGUsICd5ZWFyJyk7XG4gIH1cblxuICBpc0JlZm9yZU1vbnRoKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlKGRhdGUsICdtb250aCcpO1xuICB9XG5cbiAgaXNCZWZvcmVEYXkoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ2RheScpO1xuICB9XG5cbiAgaXNCZWZvcmVIb3VyKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlKGRhdGUsICdob3VyJyk7XG4gIH1cblxuICBpc0JlZm9yZU1pbnV0ZShkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAnbWludXRlJyk7XG4gIH1cblxuICBpc0JlZm9yZVNlY29uZChkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAnc2Vjb25kJyk7XG4gIH1cblxuICAvLyBUT0RPOiBpc0JlZm9yZVxuICBpc0FmdGVyWWVhcihkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAneWVhcicsIGZhbHNlKTtcbiAgfVxuXG4gIGlzQWZ0ZXJNb250aChkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAnbW9udGgnLCBmYWxzZSk7XG4gIH1cblxuICBpc0FmdGVyRGF5KGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlKGRhdGUsICdkYXknLCBmYWxzZSk7XG4gIH1cblxuICBpc0FmdGVySG91cihkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAnaG91cicsIGZhbHNlKTtcbiAgfVxuXG4gIGlzQWZ0ZXJNaW51dGUoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ21pbnV0ZScsIGZhbHNlKTtcbiAgfVxuXG4gIGlzQWZ0ZXJTZWNvbmQoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ3NlY29uZCcsIGZhbHNlKTtcbiAgfVxuXG4gIC8vIEVxdWFsIHRvIHRvZGF5IGFjY3VyYXRlIHRvIFwiZGF5XCJcbiAgaXNUb2RheSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNUb2RheSh0aGlzLm5hdGl2ZURhdGUpO1xuICB9XG5cbiAgaXNWYWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNWYWxpZCh0aGlzLm5hdGl2ZURhdGUpO1xuICB9XG5cbiAgaXNGaXJzdERheU9mTW9udGgoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzRmlyc3REYXlPZk1vbnRoKHRoaXMubmF0aXZlRGF0ZSk7XG4gIH1cblxuICBpc0xhc3REYXlPZk1vbnRoKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0xhc3REYXlPZk1vbnRoKHRoaXMubmF0aXZlRGF0ZSk7XG4gIH1cblxuICBwcml2YXRlIHRvTmF0aXZlRGF0ZShkYXRlOiBOelNhZmVBbnkpOiBEYXRlIHtcbiAgICByZXR1cm4gZGF0ZSBpbnN0YW5jZW9mIENhbmR5RGF0ZSA/IGRhdGUubmF0aXZlRGF0ZSA6IGRhdGU7XG4gIH1cbn1cbiJdfQ==