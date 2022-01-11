/**
 * @fileoverview added by tsickle
 * Generated from: candy-date.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        const [start, end] = rangeValue;
        return start && end && start.isAfterSecond(end) ? [end, start] : [start, end];
    }
    return rangeValue;
}
/**
 * @param {?} value
 * @return {?}
 */
export function normalizeRangeValue(value) {
    const [start, end] = value || [];
    /** @type {?} */
    const newStart = start || new CandyDate();
    /** @type {?} */
    const newEnd = (end === null || end === void 0 ? void 0 : end.isSameMonth(newStart)) ? end.addMonths(1) : end || newStart.addMonths(1);
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
        v => (v instanceof CandyDate ? v.clone() : null)));
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
export class CandyDate {
    // locale: string; // Custom specified locale ID
    /**
     * @param {?=} date
     */
    constructor(date) {
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
    /**
     * @param {?=} options
     * @return {?}
     */
    calendarStart(options) {
        return new CandyDate(startOfWeek(startOfMonth(this.nativeDate), options));
    }
    // ---------------------------------------------------------------------
    // | Native shortcuts
    // -----------------------------------------------------------------------------\
    /**
     * @return {?}
     */
    getYear() {
        return this.nativeDate.getFullYear();
    }
    /**
     * @return {?}
     */
    getMonth() {
        return this.nativeDate.getMonth();
    }
    /**
     * @return {?}
     */
    getDay() {
        return this.nativeDate.getDay();
    }
    /**
     * @return {?}
     */
    getTime() {
        return this.nativeDate.getTime();
    }
    /**
     * @return {?}
     */
    getDate() {
        return this.nativeDate.getDate();
    }
    /**
     * @return {?}
     */
    getHours() {
        return this.nativeDate.getHours();
    }
    /**
     * @return {?}
     */
    getMinutes() {
        return this.nativeDate.getMinutes();
    }
    /**
     * @return {?}
     */
    getSeconds() {
        return this.nativeDate.getSeconds();
    }
    /**
     * @return {?}
     */
    getMilliseconds() {
        return this.nativeDate.getMilliseconds();
    }
    // ---------------------------------------------------------------------
    // | New implementing APIs
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    clone() {
        return new CandyDate(new Date(this.nativeDate));
    }
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} second
     * @return {?}
     */
    setHms(hour, minute, second) {
        return new CandyDate(this.nativeDate.setHours(hour, minute, second));
    }
    /**
     * @param {?} year
     * @return {?}
     */
    setYear(year) {
        return new CandyDate(setYear(this.nativeDate, year));
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    addYears(amount) {
        return new CandyDate(addYears(this.nativeDate, amount));
    }
    // NOTE: month starts from 0
    // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28
    /**
     * @param {?} month
     * @return {?}
     */
    setMonth(month) {
        return new CandyDate(setMonth(this.nativeDate, month));
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    addMonths(amount) {
        return new CandyDate(addMonths(this.nativeDate, amount));
    }
    /**
     * @param {?} day
     * @param {?=} options
     * @return {?}
     */
    setDay(day, options) {
        return new CandyDate(setDay(this.nativeDate, day, options));
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    setDate(amount) {
        /** @type {?} */
        const date = new Date(this.nativeDate);
        date.setDate(amount);
        return new CandyDate(date);
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    addDays(amount) {
        return this.setDate(this.getDate() + amount);
    }
    /**
     * @param {?} date
     * @param {?=} grain
     * @return {?}
     */
    isSame(date, grain = 'day') {
        /** @type {?} */
        let fn;
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
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSameYear(date) {
        return this.isSame(date, 'year');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSameMonth(date) {
        return this.isSame(date, 'month');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSameDay(date) {
        return this.isSame(date, 'day');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSameHour(date) {
        return this.isSame(date, 'hour');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSameMinute(date) {
        return this.isSame(date, 'minute');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSameSecond(date) {
        return this.isSame(date, 'second');
    }
    /**
     * @param {?} date
     * @param {?=} grain
     * @param {?=} isBefore
     * @return {?}
     */
    compare(date, grain = 'day', isBefore = true) {
        if (date === null) {
            return false;
        }
        /** @type {?} */
        let fn;
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
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isBeforeYear(date) {
        return this.compare(date, 'year');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isBeforeMonth(date) {
        return this.compare(date, 'month');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isBeforeDay(date) {
        return this.compare(date, 'day');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isBeforeHour(date) {
        return this.compare(date, 'hour');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isBeforeMinute(date) {
        return this.compare(date, 'minute');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isBeforeSecond(date) {
        return this.compare(date, 'second');
    }
    // TODO: isBefore
    /**
     * @param {?} date
     * @return {?}
     */
    isAfterYear(date) {
        return this.compare(date, 'year', false);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isAfterMonth(date) {
        return this.compare(date, 'month', false);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isAfterDay(date) {
        return this.compare(date, 'day', false);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isAfterHour(date) {
        return this.compare(date, 'hour', false);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isAfterMinute(date) {
        return this.compare(date, 'minute', false);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isAfterSecond(date) {
        return this.compare(date, 'second', false);
    }
    // Equal to today accurate to "day"
    /**
     * @return {?}
     */
    isToday() {
        return isToday(this.nativeDate);
    }
    /**
     * @return {?}
     */
    isValid() {
        return isValid(this.nativeDate);
    }
    /**
     * @return {?}
     */
    isFirstDayOfMonth() {
        return isFirstDayOfMonth(this.nativeDate);
    }
    /**
     * @return {?}
     */
    isLastDayOfMonth() {
        return isLastDayOfMonth(this.nativeDate);
    }
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    toNativeDate(date) {
        return date instanceof CandyDate ? date.nativeDate : date;
    }
}
if (false) {
    /** @type {?} */
    CandyDate.prototype.nativeDate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuZHktZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS90aW1lLyIsInNvdXJjZXMiOlsiY2FuZHktZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLFNBQVMsTUFBTSxvQkFBb0IsQ0FBQztBQUMzQyxPQUFPLFFBQVEsTUFBTSxtQkFBbUIsQ0FBQztBQUN6QyxPQUFPLHdCQUF3QixNQUFNLG1DQUFtQyxDQUFDO0FBQ3pFLE9BQU8sMEJBQTBCLE1BQU0scUNBQXFDLENBQUM7QUFDN0UsT0FBTyx5QkFBeUIsTUFBTSxvQ0FBb0MsQ0FBQztBQUMzRSxPQUFPLGlCQUFpQixNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sbUJBQW1CLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxtQkFBbUIsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLGlCQUFpQixNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sZ0JBQWdCLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxTQUFTLE1BQU0sb0JBQW9CLENBQUM7QUFDM0MsT0FBTyxVQUFVLE1BQU0scUJBQXFCLENBQUM7QUFDN0MsT0FBTyxZQUFZLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxXQUFXLE1BQU0sc0JBQXNCLENBQUM7QUFDL0MsT0FBTyxZQUFZLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxVQUFVLE1BQU0scUJBQXFCLENBQUM7QUFDN0MsT0FBTyxPQUFPLE1BQU0sa0JBQWtCLENBQUM7QUFDdkMsT0FBTyxPQUFPLE1BQU0sa0JBQWtCLENBQUM7QUFDdkMsT0FBTyxNQUFNLE1BQU0saUJBQWlCLENBQUM7QUFDckMsT0FBTyxRQUFRLE1BQU0sbUJBQW1CLENBQUM7QUFDekMsT0FBTyxPQUFPLE1BQU0sa0JBQWtCLENBQUM7QUFDdkMsT0FBTyxZQUFZLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxXQUFXLE1B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Q0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBR0QsT0FBTztRQUNMLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsT0FBTztRQUNMLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2YsT0FBTyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVELGdCQUFnQjtRQUNkLE9BQU8sZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7OztJQUVPLFlBQVksQ0FBQyxJQUFlO1FBQ2xDLE9BQU8sSUFBSSxZQUFZLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzVELENBQUM7Q0FDRjs7O0lBM1FDLCtCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCBhZGRNb250aHMgZnJvbSAnZGF0ZS1mbnMvYWRkTW9udGhzJztcbmltcG9ydCBhZGRZZWFycyBmcm9tICdkYXRlLWZucy9hZGRZZWFycyc7XG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIGZyb20gJ2RhdGUtZm5zL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyc7XG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMgZnJvbSAnZGF0ZS1mbnMvZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMnO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMgZnJvbSAnZGF0ZS1mbnMvZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFycyc7XG5pbXBvcnQgZGlmZmVyZW5jZUluSG91cnMgZnJvbSAnZGF0ZS1mbnMvZGlmZmVyZW5jZUluSG91cnMnO1xuaW1wb3J0IGRpZmZlcmVuY2VJbk1pbnV0ZXMgZnJvbSAnZGF0ZS1mbnMvZGlmZmVyZW5jZUluTWludXRlcyc7XG5pbXBvcnQgZGlmZmVyZW5jZUluU2Vjb25kcyBmcm9tICdkYXRlLWZucy9kaWZmZXJlbmNlSW5TZWNvbmRzJztcbmltcG9ydCBpc0ZpcnN0RGF5T2ZNb250aCBmcm9tICdkYXRlLWZucy9pc0ZpcnN0RGF5T2ZNb250aCc7XG5pbXBvcnQgaXNMYXN0RGF5T2ZNb250aCBmcm9tICdkYXRlLWZucy9pc0xhc3REYXlPZk1vbnRoJztcbmltcG9ydCBpc1NhbWVEYXkgZnJvbSAnZGF0ZS1mbnMvaXNTYW1lRGF5JztcbmltcG9ydCBpc1NhbWVIb3VyIGZyb20gJ2RhdGUtZm5zL2lzU2FtZUhvdXInO1xuaW1wb3J0IGlzU2FtZU1pbnV0ZSBmcm9tICdkYXRlLWZucy9pc1NhbWVNaW51dGUnO1xuaW1wb3J0IGlzU2FtZU1vbnRoIGZyb20gJ2RhdGUtZm5zL2lzU2FtZU1vbnRoJztcbmltcG9ydCBpc1NhbWVTZWNvbmQgZnJvbSAnZGF0ZS1mbnMvaXNTYW1lU2Vjb25kJztcbmltcG9ydCBpc1NhbWVZZWFyIGZyb20gJ2RhdGUtZm5zL2lzU2FtZVllYXInO1xuaW1wb3J0IGlzVG9kYXkgZnJvbSAnZGF0ZS1mbnMvaXNUb2RheSc7XG5pbXBvcnQgaXNWYWxpZCBmcm9tICdkYXRlLWZucy9pc1ZhbGlkJztcbmltcG9ydCBzZXREYXkgZnJvbSAnZGF0ZS1mbnMvc2V0RGF5JztcbmltcG9ydCBzZXRNb250aCBmcm9tICdkYXRlLWZucy9zZXRNb250aCc7XG5pbXBvcnQgc2V0WWVhciBmcm9tICdkYXRlLWZucy9zZXRZZWFyJztcbmltcG9ydCBzdGFydE9mTW9udGggZnJvbSAnZGF0ZS1mbnMvc3RhcnRPZk1vbnRoJztcbmltcG9ydCBzdGFydE9mV2VlayBmcm9tICdkYXRlLWZucy9zdGFydE9mV2Vlayc7XG5pbXBvcnQgeyB3YXJuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2xvZ2dlcic7XG5pbXBvcnQgeyBJbmRleGFibGVPYmplY3QsIE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmV4cG9ydCB0eXBlIFdlZWtEYXlJbmRleCA9IDAgfCAxIHwgMiB8IDMgfCA0IHwgNSB8IDY7XG5leHBvcnQgdHlwZSBDYW5keURhdGVDb21wYXJlR3JhaW4gPSAneWVhcicgfCAnbW9udGgnIHwgJ2RheScgfCAnaG91cicgfCAnbWludXRlJyB8ICdzZWNvbmQnO1xuZXhwb3J0IHR5cGUgQ2FuZHlEYXRlVHlwZSA9IENhbmR5RGF0ZSB8IERhdGUgfCBudWxsO1xuZXhwb3J0IHR5cGUgU2luZ2xlVmFsdWUgPSBDYW5keURhdGUgfCBudWxsO1xuZXhwb3J0IHR5cGUgQ29tcGF0aWJsZVZhbHVlID0gU2luZ2xlVmFsdWUgfCBTaW5nbGVWYWx1ZVtdO1xuXG5leHBvcnQgZnVuY3Rpb24gc29ydFJhbmdlVmFsdWUocmFuZ2VWYWx1ZTogU2luZ2xlVmFsdWVbXSk6IFNpbmdsZVZhbHVlW10ge1xuICBpZiAoQXJyYXkuaXNBcnJheShyYW5nZVZhbHVlKSkge1xuICAgIGNvbnN0IFtzdGFydCwgZW5kXSA9IHJhbmdlVmFsdWU7XG4gICAgcmV0dXJuIHN0YXJ0ICYmIGVuZCAmJiBzdGFydC5pc0FmdGVyU2Vjb25kKGVuZCkgPyBbZW5kLCBzdGFydF0gOiBbc3RhcnQsIGVuZF07XG4gIH1cbiAgcmV0dXJuIHJhbmdlVmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVSYW5nZVZhbHVlKHZhbHVlOiBTaW5nbGVWYWx1ZVtdKTogQ2FuZHlEYXRlW10ge1xuICBjb25zdCBbc3RhcnQsIGVuZF0gPSB2YWx1ZSB8fCBbXTtcbiAgY29uc3QgbmV3U3RhcnQgPSBzdGFydCB8fCBuZXcgQ2FuZHlEYXRlKCk7XG4gIGNvbnN0IG5ld0VuZCA9IGVuZD8uaXNTYW1lTW9udGgobmV3U3RhcnQpID8gZW5kLmFkZE1vbnRocygxKSA6IGVuZCB8fCBuZXdTdGFydC5hZGRNb250aHMoMSk7XG4gIHJldHVybiBbbmV3U3RhcnQsIG5ld0VuZF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZURhdGUodmFsdWU6IENvbXBhdGlibGVWYWx1ZSk6IENvbXBhdGlibGVWYWx1ZSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5tYXAodiA9PiAodiBpbnN0YW5jZW9mIENhbmR5RGF0ZSA/IHYuY2xvbmUoKSA6IG51bGwpKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBDYW5keURhdGUgPyB2YWx1ZS5jbG9uZSgpIDogbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIFdyYXBwaW5nIGtpbmQgQVBJcyBmb3IgZGF0ZSBvcGVyYXRpbmcgYW5kIHVuaWZ5XG4gKiBOT1RFOiBldmVyeSBuZXcgQVBJIHJldHVybiBuZXcgQ2FuZHlEYXRlIG9iamVjdCB3aXRob3V0IHNpZGUgZWZmZWN0cyB0byB0aGUgZm9ybWVyIERhdGUgb2JqZWN0XG4gKiBOT1RFOiBtb3N0IEFQSXMgYXJlIGJhc2VkIG9uIGxvY2FsIHRpbWUgb3RoZXIgdGhhbiBjdXN0b21pemVkIGxvY2FsZSBpZCAodGhpcyBuZWVkcyB0b2JlIHN1cHBvcnQgaW4gZnV0dXJlKVxuICogVE9ETzogc3VwcG9ydCBmb3JtYXQoKSBhZ2FpbnN0IHRvIGFuZ3VsYXIncyBjb3JlIEFQSVxuICovXG5leHBvcnQgY2xhc3MgQ2FuZHlEYXRlIGltcGxlbWVudHMgSW5kZXhhYmxlT2JqZWN0IHtcbiAgbmF0aXZlRGF0ZTogRGF0ZTtcbiAgLy8gbG9jYWxlOiBzdHJpbmc7IC8vIEN1c3RvbSBzcGVjaWZpZWQgbG9jYWxlIElEXG5cbiAgY29uc3RydWN0b3IoZGF0ZT86IERhdGUgfCBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAoZGF0ZSkge1xuICAgICAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHRoaXMubmF0aXZlRGF0ZSA9IGRhdGU7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgZGF0ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgd2FybignVGhlIHN0cmluZyB0eXBlIGlzIG5vdCByZWNvbW1lbmRlZCBmb3IgZGF0ZS1waWNrZXIsIHVzZSBcIkRhdGVcIiB0eXBlJyk7XG4gICAgICAgIHRoaXMubmF0aXZlRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgaW5wdXQgZGF0ZSB0eXBlIGlzIG5vdCBzdXBwb3J0ZWQgKFwiRGF0ZVwiIGlzIG5vdyByZWNvbW1lbmRlZCknKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uYXRpdmVEYXRlID0gbmV3IERhdGUoKTtcbiAgICB9XG4gIH1cblxuICAvLyBnZXRMb2NhbGUoKTogc3RyaW5nIHtcbiAgLy8gICByZXR1cm4gdGhpcy5sb2NhbGU7XG4gIC8vIH1cblxuICAvLyBzZXRMb2NhbGUobG9jYWxlOiBzdHJpbmcpOiBDYW5keURhdGUge1xuICAvLyAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAvLyAgIHJldHVybiB0aGlzO1xuICAvLyB9XG5cbiAgY2FsZW5kYXJTdGFydChvcHRpb25zPzogeyB3ZWVrU3RhcnRzT246IFdlZWtEYXlJbmRleCB8IHVuZGVmaW5lZCB9KTogQ2FuZHlEYXRlIHtcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShzdGFydE9mV2VlayhzdGFydE9mTW9udGgodGhpcy5uYXRpdmVEYXRlKSwgb3B0aW9ucykpO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgTmF0aXZlIHNob3J0Y3V0c1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcXG5cbiAgZ2V0WWVhcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0RnVsbFllYXIoKTtcbiAgfVxuXG4gIGdldE1vbnRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXRNb250aCgpO1xuICB9XG5cbiAgZ2V0RGF5KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXREYXkoKTtcbiAgfVxuXG4gIGdldFRpbWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldFRpbWUoKTtcbiAgfVxuXG4gIGdldERhdGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldERhdGUoKTtcbiAgfVxuXG4gIGdldEhvdXJzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXRIb3VycygpO1xuICB9XG5cbiAgZ2V0TWludXRlcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0TWludXRlcygpO1xuICB9XG5cbiAgZ2V0U2Vjb25kcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0U2Vjb25kcygpO1xuICB9XG5cbiAgZ2V0TWlsbGlzZWNvbmRzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IE5ldyBpbXBsZW1lbnRpbmcgQVBJc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBjbG9uZSgpOiBDYW5keURhdGUge1xuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKG5ldyBEYXRlKHRoaXMubmF0aXZlRGF0ZSkpO1xuICB9XG5cbiAgc2V0SG1zKGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIsIHNlY29uZDogbnVtYmVyKTogQ2FuZHlEYXRlIHtcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZSh0aGlzLm5hdGl2ZURhdGUuc2V0SG91cnMoaG91ciwgbWludXRlLCBzZWNvbmQpKTtcbiAgfVxuXG4gIHNldFllYXIoeWVhcjogbnVtYmVyKTogQ2FuZHlEYXRlIHtcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShzZXRZZWFyKHRoaXMubmF0aXZlRGF0ZSwgeWVhcikpO1xuICB9XG5cbiAgYWRkWWVhcnMoYW1vdW50OiBudW1iZXIpOiBDYW5keURhdGUge1xuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKGFkZFllYXJzKHRoaXMubmF0aXZlRGF0ZSwgYW1vdW50KSk7XG4gIH1cblxuICAvLyBOT1RFOiBtb250aCBzdGFydHMgZnJvbSAwXG4gIC8vIE5PVEU6IERvbid0IHVzZSB0aGUgbmF0aXZlIEFQSSBmb3IgbW9udGggbWFuaXB1bGF0aW9uIGFzIGl0IG5vdCByZXN0cmljdCB0aGUgZGF0ZSB3aGVuIGl0IG92ZXJmbG93cywgZWcuIChuZXcgRGF0ZSgnMjAxOC03LTMxJykpLnNldE1vbnRoKDEpIHdpbGwgYmUgZGF0ZSBvZiAyMDE4LTMtMDMgaW5zdGVhZCBvZiAyMDE4LTItMjhcbiAgc2V0TW9udGgobW9udGg6IG51bWJlcik6IENhbmR5RGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoc2V0TW9udGgodGhpcy5uYXRpdmVEYXRlLCBtb250aCkpO1xuICB9XG5cbiAgYWRkTW9udGhzKGFtb3VudDogbnVtYmVyKTogQ2FuZHlEYXRlIHtcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShhZGRNb250aHModGhpcy5uYXRpdmVEYXRlLCBhbW91bnQpKTtcbiAgfVxuXG4gIHNldERheShkYXk6IG51bWJlciwgb3B0aW9ucz86IHsgd2Vla1N0YXJ0c09uOiBXZWVrRGF5SW5kZXggfSk6IENhbmR5RGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoc2V0RGF5KHRoaXMubmF0aXZlRGF0ZSwgZGF5LCBvcHRpb25zKSk7XG4gIH1cblxuICBzZXREYXRlKGFtb3VudDogbnVtYmVyKTogQ2FuZHlEYXRlIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy5uYXRpdmVEYXRlKTtcbiAgICBkYXRlLnNldERhdGUoYW1vdW50KTtcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShkYXRlKTtcbiAgfVxuXG4gIGFkZERheXMoYW1vdW50OiBudW1iZXIpOiBDYW5keURhdGUge1xuICAgIHJldHVybiB0aGlzLnNldERhdGUodGhpcy5nZXREYXRlKCkgKyBhbW91bnQpO1xuICB9XG5cbiAgaXNTYW1lKGRhdGU6IENhbmR5RGF0ZVR5cGUsIGdyYWluOiBDYW5keURhdGVDb21wYXJlR3JhaW4gPSAnZGF5Jyk6IGJvb2xlYW4ge1xuICAgIGxldCBmbjtcbiAgICBzd2l0Y2ggKGdyYWluKSB7XG4gICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgZm4gPSBpc1NhbWVZZWFyO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgZm4gPSBpc1NhbWVNb250aDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkYXknOlxuICAgICAgICBmbiA9IGlzU2FtZURheTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdob3VyJzpcbiAgICAgICAgZm4gPSBpc1NhbWVIb3VyO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgICAgIGZuID0gaXNTYW1lTWludXRlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgIGZuID0gaXNTYW1lU2Vjb25kO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGZuID0gaXNTYW1lRGF5O1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGZuKHRoaXMubmF0aXZlRGF0ZSwgdGhpcy50b05hdGl2ZURhdGUoZGF0ZSkpO1xuICB9XG5cbiAgaXNTYW1lWWVhcihkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNTYW1lKGRhdGUsICd5ZWFyJyk7XG4gIH1cblxuICBpc1NhbWVNb250aChkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNTYW1lKGRhdGUsICdtb250aCcpO1xuICB9XG5cbiAgaXNTYW1lRGF5KGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc1NhbWUoZGF0ZSwgJ2RheScpO1xuICB9XG5cbiAgaXNTYW1lSG91cihkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNTYW1lKGRhdGUsICdob3VyJyk7XG4gIH1cblxuICBpc1NhbWVNaW51dGUoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzU2FtZShkYXRlLCAnbWludXRlJyk7XG4gIH1cblxuICBpc1NhbWVTZWNvbmQoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzU2FtZShkYXRlLCAnc2Vjb25kJyk7XG4gIH1cblxuICBjb21wYXJlKGRhdGU6IENhbmR5RGF0ZVR5cGUsIGdyYWluOiBDYW5keURhdGVDb21wYXJlR3JhaW4gPSAnZGF5JywgaXNCZWZvcmU6IGJvb2xlYW4gPSB0cnVlKTogYm9vbGVhbiB7XG4gICAgaWYgKGRhdGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IGZuO1xuICAgIHN3aXRjaCAoZ3JhaW4pIHtcbiAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICBmbiA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICBmbiA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgIGZuID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2hvdXInOlxuICAgICAgICBmbiA9IGRpZmZlcmVuY2VJbkhvdXJzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgICAgIGZuID0gZGlmZmVyZW5jZUluTWludXRlcztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICBmbiA9IGRpZmZlcmVuY2VJblNlY29uZHM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZm4gPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXM7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gaXNCZWZvcmUgPyBmbih0aGlzLm5hdGl2ZURhdGUsIHRoaXMudG9OYXRpdmVEYXRlKGRhdGUpKSA8IDAgOiBmbih0aGlzLm5hdGl2ZURhdGUsIHRoaXMudG9OYXRpdmVEYXRlKGRhdGUpKSA+IDA7XG4gIH1cblxuICBpc0JlZm9yZVllYXIoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ3llYXInKTtcbiAgfVxuXG4gIGlzQmVmb3JlTW9udGgoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ21vbnRoJyk7XG4gIH1cblxuICBpc0JlZm9yZURheShkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAnZGF5Jyk7XG4gIH1cblxuICBpc0JlZm9yZUhvdXIoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ2hvdXInKTtcbiAgfVxuXG4gIGlzQmVmb3JlTWludXRlKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlKGRhdGUsICdtaW51dGUnKTtcbiAgfVxuXG4gIGlzQmVmb3JlU2Vjb25kKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlKGRhdGUsICdzZWNvbmQnKTtcbiAgfVxuXG4gIC8vIFRPRE86IGlzQmVmb3JlXG4gIGlzQWZ0ZXJZZWFyKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlKGRhdGUsICd5ZWFyJywgZmFsc2UpO1xuICB9XG5cbiAgaXNBZnRlck1vbnRoKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlKGRhdGUsICdtb250aCcsIGZhbHNlKTtcbiAgfVxuXG4gIGlzQWZ0ZXJEYXkoZGF0ZTogQ2FuZHlEYXRlVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmUoZGF0ZSwgJ2RheScsIGZhbHNlKTtcbiAgfVxuXG4gIGlzQWZ0ZXJIb3VyKGRhdGU6IENhbmR5RGF0ZVR5cGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlKGRhdGUsICdob3VyJywgZmFsc2UpO1xuICB9XG5cbiAgaXNBZnRlck1pbnV0ZShkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAnbWludXRlJywgZmFsc2UpO1xuICB9XG5cbiAgaXNBZnRlclNlY29uZChkYXRlOiBDYW5keURhdGVUeXBlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZShkYXRlLCAnc2Vjb25kJywgZmFsc2UpO1xuICB9XG5cbiAgLy8gRXF1YWwgdG8gdG9kYXkgYWNjdXJhdGUgdG8gXCJkYXlcIlxuICBpc1RvZGF5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc1RvZGF5KHRoaXMubmF0aXZlRGF0ZSk7XG4gIH1cblxuICBpc1ZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc1ZhbGlkKHRoaXMubmF0aXZlRGF0ZSk7XG4gIH1cblxuICBpc0ZpcnN0RGF5T2ZNb250aCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNGaXJzdERheU9mTW9udGgodGhpcy5uYXRpdmVEYXRlKTtcbiAgfVxuXG4gIGlzTGFzdERheU9mTW9udGgoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzTGFzdERheU9mTW9udGgodGhpcy5uYXRpdmVEYXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgdG9OYXRpdmVEYXRlKGRhdGU6IE56U2FmZUFueSk6IERhdGUge1xuICAgIHJldHVybiBkYXRlIGluc3RhbmNlb2YgQ2FuZHlEYXRlID8gZGF0ZS5uYXRpdmVEYXRlIDogZGF0ZTtcbiAgfVxufVxuIl19