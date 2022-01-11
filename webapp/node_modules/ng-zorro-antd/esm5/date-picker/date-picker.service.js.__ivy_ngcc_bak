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
var DatePickerService = /** @class */ (function () {
    function DatePickerService() {
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
    DatePickerService.prototype.initValue = /**
     * @return {?}
     */
    function () {
        if (this.isRange) {
            this.setActiveDate([]);
            this.value = this.initialValue = [];
        }
        else {
            this.value = this.initialValue = null;
        }
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    DatePickerService.prototype.hasValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = this.value; }
        if (Array.isArray(value)) {
            return !!value[0] && !!value[1];
        }
        else {
            return !!value;
        }
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    DatePickerService.prototype.makeValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (this.isRange) {
            return value ? ((/** @type {?} */ (value))).map((/**
             * @param {?} val
             * @return {?}
             */
            function (val) { return new CandyDate(val); })) : [];
        }
        else {
            return value ? new CandyDate((/** @type {?} */ (value))) : null;
        }
    };
    /**
     * @param {?} value
     * @param {?=} normalize
     * @return {?}
     */
    DatePickerService.prototype.setActiveDate = /**
     * @param {?} value
     * @param {?=} normalize
     * @return {?}
     */
    function (value, normalize) {
        if (normalize === void 0) { normalize = false; }
        if (this.isRange) {
            this.activeDate = normalize ? normalizeRangeValue((/** @type {?} */ (value))) : value;
        }
        else {
            this.activeDate = cloneDate(value);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DatePickerService.prototype.setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.valueChange$.next(this.value);
    };
    /**
     * @param {?=} part
     * @return {?}
     */
    DatePickerService.prototype.getActiveIndex = /**
     * @param {?=} part
     * @return {?}
     */
    function (part) {
        if (part === void 0) { part = this.activeInput; }
        return { left: 0, right: 1 }[part];
    };
    /**
     * @return {?}
     */
    DatePickerService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.valueChange$.complete();
        this.emitValue$.complete();
        this.inputPartChange$.complete();
    };
    DatePickerService.decorators = [
        { type: Injectable }
    ];
    return DatePickerService;
}());
export { DatePickerService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQW1CLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFckcsT0FBTyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHOUM7SUFBQTtRQUtFLGdCQUFXLEdBQWtCLE1BQU0sQ0FBQztRQUNwQyx1QkFBa0IsR0FBMEMsRUFBRSxDQUFDO1FBQy9ELFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFaEIsaUJBQVksR0FBRyxJQUFJLGFBQWEsQ0FBa0IsQ0FBQyxDQUFDLENBQUM7UUFDckQsZUFBVSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDakMscUJBQWdCLEdBQUcsSUFBSSxPQUFPLEVBQWlCLENBQUM7SUFpRGxELENBQUM7Ozs7SUEvQ0MscUNBQVM7OztJQUFUO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztTQUNyQzthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUN2QztJQUNILENBQUM7Ozs7O0lBRUQsb0NBQVE7Ozs7SUFBUixVQUFTLEtBQW1DO1FBQW5DLHNCQUFBLEVBQUEsUUFBeUIsSUFBSSxDQUFDLEtBQUs7UUFDMUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO2FBQU07WUFDTCxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDaEI7SUFDSCxDQUFDOzs7OztJQUVELHFDQUFTOzs7O0lBQVQsVUFBVSxLQUFzQjtRQUM5QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsS0FBSyxFQUFVLENBQUMsQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7U0FDdEU7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxtQkFBQSxLQUFLLEVBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7U0FDcEQ7SUFDSCxDQUFDOzs7Ozs7SUFFRCx5Q0FBYTs7Ozs7SUFBYixVQUFjLEtBQXNCLEVBQUUsU0FBMEI7UUFBMUIsMEJBQUEsRUFBQSxpQkFBMEI7UUFDOUQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxtQkFBQSxLQUFLLEVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDakY7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxvQ0FBUTs7OztJQUFSLFVBQVMsS0FBc0I7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsMENBQWM7Ozs7SUFBZCxVQUFlLElBQXNDO1FBQXRDLHFCQUFBLEVBQUEsT0FBc0IsSUFBSSxDQUFDLFdBQVc7UUFDbkQsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25DLENBQUM7O2dCQTNERixVQUFVOztJQTREWCx3QkFBQztDQUFBLEFBNURELElBNERDO1NBM0RZLGlCQUFpQjs7O0lBQzVCLHlDQUErQjs7SUFDL0Isa0NBQXdCOztJQUN4Qix1Q0FBNkI7O0lBQzdCLHdDQUFvQzs7SUFDcEMsK0NBQStEOztJQUMvRCxvQ0FBZ0I7O0lBRWhCLHlDQUFxRDs7SUFDckQsdUNBQWlDOztJQUNqQyw2Q0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbmR5RGF0ZSwgY2xvbmVEYXRlLCBDb21wYXRpYmxlVmFsdWUsIG5vcm1hbGl6ZVJhbmdlVmFsdWUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdGltZSc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29tcGF0aWJsZURhdGUsIFJhbmdlUGFydFR5cGUgfSBmcm9tICcuL3N0YW5kYXJkLXR5cGVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXJTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgaW5pdGlhbFZhbHVlPzogQ29tcGF0aWJsZVZhbHVlO1xuICB2YWx1ZSE6IENvbXBhdGlibGVWYWx1ZTtcbiAgYWN0aXZlRGF0ZT86IENvbXBhdGlibGVWYWx1ZTtcbiAgYWN0aXZlSW5wdXQ6IFJhbmdlUGFydFR5cGUgPSAnbGVmdCc7XG4gIGFycm93UG9zaXRpb25TdHlsZTogeyBba2xhc3M6IHN0cmluZ106IE56U2FmZUFueSB9IHwgbnVsbCA9IHt9O1xuICBpc1JhbmdlID0gZmFsc2U7XG5cbiAgdmFsdWVDaGFuZ2UkID0gbmV3IFJlcGxheVN1YmplY3Q8Q29tcGF0aWJsZVZhbHVlPigxKTtcbiAgZW1pdFZhbHVlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIGlucHV0UGFydENoYW5nZSQgPSBuZXcgU3ViamVjdDxSYW5nZVBhcnRUeXBlPigpO1xuXG4gIGluaXRWYWx1ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICB0aGlzLnNldEFjdGl2ZURhdGUoW10pO1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuaW5pdGlhbFZhbHVlID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmluaXRpYWxWYWx1ZSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgaGFzVmFsdWUodmFsdWU6IENvbXBhdGlibGVWYWx1ZSA9IHRoaXMudmFsdWUpOiBib29sZWFuIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAhIXZhbHVlWzBdICYmICEhdmFsdWVbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAhIXZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIG1ha2VWYWx1ZSh2YWx1ZT86IENvbXBhdGlibGVEYXRlKTogQ29tcGF0aWJsZVZhbHVlIHtcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPyAodmFsdWUgYXMgRGF0ZVtdKS5tYXAodmFsID0+IG5ldyBDYW5keURhdGUodmFsKSkgOiBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlID8gbmV3IENhbmR5RGF0ZSh2YWx1ZSBhcyBEYXRlKSA6IG51bGw7XG4gICAgfVxuICB9XG5cbiAgc2V0QWN0aXZlRGF0ZSh2YWx1ZTogQ29tcGF0aWJsZVZhbHVlLCBub3JtYWxpemU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IG5vcm1hbGl6ZSA/IG5vcm1hbGl6ZVJhbmdlVmFsdWUodmFsdWUgYXMgQ2FuZHlEYXRlW10pIDogdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IGNsb25lRGF0ZSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IENvbXBhdGlibGVWYWx1ZSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlJC5uZXh0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgZ2V0QWN0aXZlSW5kZXgocGFydDogUmFuZ2VQYXJ0VHlwZSA9IHRoaXMuYWN0aXZlSW5wdXQpOiBudW1iZXIge1xuICAgIHJldHVybiB7IGxlZnQ6IDAsIHJpZ2h0OiAxIH1bcGFydF07XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlJC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuZW1pdFZhbHVlJC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuaW5wdXRQYXJ0Q2hhbmdlJC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=