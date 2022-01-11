/**
 * @fileoverview added by tsickle
 * Generated from: date-picker.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable } from '@angular/core';
import { CandyDate, cloneDate, normalizeRangeValue } from 'ng-zorro-antd/core/time';
import { ReplaySubject, Subject } from 'rxjs';
export class DatePickerService {
    constructor() {
        this.activeInput = 'left';
        this.arrowPositionStyle = {};
        this.isRange = false;
        this.valueChange$ = new ReplaySubject(1);
        this.emitValue$ = new Subject();
        this.inputPartChange$ = new Subject();
    }
    /**
     * @return {?}
     */
    initValue() {
        if (this.isRange) {
            this.setActiveDate([]);
            this.value = this.initialValue = [];
        }
        else {
            this.value = this.initialValue = null;
        }
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    hasValue(value = this.value) {
        if (Array.isArray(value)) {
            return !!value[0] && !!value[1];
        }
        else {
            return !!value;
        }
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    makeValue(value) {
        if (this.isRange) {
            return value ? ((/** @type {?} */ (value))).map((/**
             * @param {?} val
             * @return {?}
             */
            val => new CandyDate(val))) : [];
        }
        else {
            return value ? new CandyDate((/** @type {?} */ (value))) : null;
        }
    }
    /**
     * @param {?} value
     * @param {?=} normalize
     * @return {?}
     */
    setActiveDate(value, normalize = false) {
        if (this.isRange) {
            this.activeDate = normalize ? normalizeRangeValue((/** @type {?} */ (value))) : value;
        }
        else {
            this.activeDate = cloneDate(value);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        this.value = value;
        this.valueChange$.next(this.value);
    }
    /**
     * @param {?=} part
     * @return {?}
     */
    getActiveIndex(part = this.activeInput) {
        return { left: 0, right: 1 }[part];
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.valueChange$.complete();
        this.emitValue$.complete();
        this.inputPartChange$.complete();
    }
}
DatePickerService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    DatePickerService.prototype.initialValue;
    /** @type {?} */
    DatePickerService.prototype.value;
    /** @type {?} */
    DatePickerService.prototype.activeDate;
    /** @type {?} */
    DatePickerService.prototype.activeInput;
    /** @type {?} */
    DatePickerService.prototype.arrowPositionStyle;
    /** @type {?} */
    DatePickerService.prototype.isRange;
    /** @type {?} */
    DatePickerService.prototype.valueChange$;
    /** @type {?} */
    DatePickerService.prototype.emitValue$;
    /** @type {?} */
    DatePickerService.prototype.inputPartChange$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQW1CLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFckcsT0FBTyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJOUMsTUFBTSxPQUFPLGlCQUFpQjtJQUQ5QjtRQUtFLGdCQUFXLEdBQWtCLE1BQU0sQ0FBQztRQUNwQyx1QkFBa0IsR0FBMEMsRUFBRSxDQUFDO1FBQy9ELFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFaEIsaUJBQVksR0FBRyxJQUFJLGFBQWEsQ0FBa0IsQ0FBQyxDQUFDLENBQUM7UUFDckQsZUFBVSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDakMscUJBQWdCLEdBQUcsSUFBSSxPQUFPLEVBQWlCLENBQUM7SUFpRGxELENBQUM7Ozs7SUEvQ0MsU0FBUztRQUNQLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7U0FDckM7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDdkM7SUFDSCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxRQUF5QixJQUFJLENBQUMsS0FBSztRQUMxQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDeEIsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUNoQjtJQUNILENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQXNCO1FBQzlCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBQSxLQUFLLEVBQVUsQ0FBQyxDQUFDLEdBQUc7Ozs7WUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUN0RTthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLG1CQUFBLEtBQUssRUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztTQUNwRDtJQUNILENBQUM7Ozs7OztJQUVELGFBQWEsQ0FBQyxLQUFzQixFQUFFLFlBQXFCLEtBQUs7UUFDOUQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxtQkFBQSxLQUFLLEVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDakY7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBc0I7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLE9BQXNCLElBQUksQ0FBQyxXQUFXO1FBQ25ELE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7O1lBM0RGLFVBQVU7Ozs7SUFFVCx5Q0FBK0I7O0lBQy9CLGtDQUF3Qjs7SUFDeEIsdUNBQTZCOztJQUM3Qix3Q0FBb0M7O0lBQ3BDLCtDQUErRDs7SUFDL0Qsb0NBQWdCOztJQUVoQix5Q0FBcUQ7O0lBQ3JELHVDQUFpQzs7SUFDakMsNkNBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5keURhdGUsIGNsb25lRGF0ZSwgQ29tcGF0aWJsZVZhbHVlLCBub3JtYWxpemVSYW5nZVZhbHVlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3RpbWUnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IFJlcGxheVN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbXBhdGlibGVEYXRlLCBSYW5nZVBhcnRUeXBlIH0gZnJvbSAnLi9zdGFuZGFyZC10eXBlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIGluaXRpYWxWYWx1ZT86IENvbXBhdGlibGVWYWx1ZTtcbiAgdmFsdWUhOiBDb21wYXRpYmxlVmFsdWU7XG4gIGFjdGl2ZURhdGU/OiBDb21wYXRpYmxlVmFsdWU7XG4gIGFjdGl2ZUlucHV0OiBSYW5nZVBhcnRUeXBlID0gJ2xlZnQnO1xuICBhcnJvd1Bvc2l0aW9uU3R5bGU6IHsgW2tsYXNzOiBzdHJpbmddOiBOelNhZmVBbnkgfSB8IG51bGwgPSB7fTtcbiAgaXNSYW5nZSA9IGZhbHNlO1xuXG4gIHZhbHVlQ2hhbmdlJCA9IG5ldyBSZXBsYXlTdWJqZWN0PENvbXBhdGlibGVWYWx1ZT4oMSk7XG4gIGVtaXRWYWx1ZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBpbnB1dFBhcnRDaGFuZ2UkID0gbmV3IFN1YmplY3Q8UmFuZ2VQYXJ0VHlwZT4oKTtcblxuICBpbml0VmFsdWUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgdGhpcy5zZXRBY3RpdmVEYXRlKFtdKTtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmluaXRpYWxWYWx1ZSA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5pbml0aWFsVmFsdWUgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGhhc1ZhbHVlKHZhbHVlOiBDb21wYXRpYmxlVmFsdWUgPSB0aGlzLnZhbHVlKTogYm9vbGVhbiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gISF2YWx1ZVswXSAmJiAhIXZhbHVlWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gISF2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBtYWtlVmFsdWUodmFsdWU/OiBDb21wYXRpYmxlRGF0ZSk6IENvbXBhdGlibGVWYWx1ZSB7XG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID8gKHZhbHVlIGFzIERhdGVbXSkubWFwKHZhbCA9PiBuZXcgQ2FuZHlEYXRlKHZhbCkpIDogW107XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZSA/IG5ldyBDYW5keURhdGUodmFsdWUgYXMgRGF0ZSkgOiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHNldEFjdGl2ZURhdGUodmFsdWU6IENvbXBhdGlibGVWYWx1ZSwgbm9ybWFsaXplOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSBub3JtYWxpemUgPyBub3JtYWxpemVSYW5nZVZhbHVlKHZhbHVlIGFzIENhbmR5RGF0ZVtdKSA6IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSBjbG9uZURhdGUodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBDb21wYXRpYmxlVmFsdWUpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy52YWx1ZUNoYW5nZSQubmV4dCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIGdldEFjdGl2ZUluZGV4KHBhcnQ6IFJhbmdlUGFydFR5cGUgPSB0aGlzLmFjdGl2ZUlucHV0KTogbnVtYmVyIHtcbiAgICByZXR1cm4geyBsZWZ0OiAwLCByaWdodDogMSB9W3BhcnRdO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZUNoYW5nZSQuY29tcGxldGUoKTtcbiAgICB0aGlzLmVtaXRWYWx1ZSQuY29tcGxldGUoKTtcbiAgICB0aGlzLmlucHV0UGFydENoYW5nZSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19