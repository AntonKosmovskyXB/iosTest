/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract-panel-header.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core/time';
/**
 * @abstract
 */
var AbstractPanelHeader = /** @class */ (function () {
    function AbstractPanelHeader() {
        this.prefixCls = "ant-picker-header";
        this.selectors = [];
        this.showSuperPreBtn = true;
        this.showSuperNextBtn = true;
        this.showPreBtn = true;
        this.showNextBtn = true;
        this.panelModeChange = new EventEmitter();
        this.valueChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    AbstractPanelHeader.prototype.superPreviousTitle = /**
     * @return {?}
     */
    function () {
        return this.locale.previousYear;
    };
    /**
     * @return {?}
     */
    AbstractPanelHeader.prototype.previousTitle = /**
     * @return {?}
     */
    function () {
        return this.locale.previousMonth;
    };
    /**
     * @return {?}
     */
    AbstractPanelHeader.prototype.superNextTitle = /**
     * @return {?}
     */
    function () {
        return this.locale.nextYear;
    };
    /**
     * @return {?}
     */
    AbstractPanelHeader.prototype.nextTitle = /**
     * @return {?}
     */
    function () {
        return this.locale.nextMonth;
    };
    /**
     * @return {?}
     */
    AbstractPanelHeader.prototype.superPrevious = /**
     * @return {?}
     */
    function () {
        this.changeValue(this.value.addYears(-1));
    };
    /**
     * @return {?}
     */
    AbstractPanelHeader.prototype.superNext = /**
     * @return {?}
     */
    function () {
        this.changeValue(this.value.addYears(1));
    };
    /**
     * @return {?}
     */
    AbstractPanelHeader.prototype.previous = /**
     * @return {?}
     */
    function () {
        this.changeValue(this.value.addMonths(-1));
    };
    /**
     * @return {?}
     */
    AbstractPanelHeader.prototype.next = /**
     * @return {?}
     */
    function () {
        this.changeValue(this.value.addMonths(1));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AbstractPanelHeader.prototype.changeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.value !== value) {
            this.value = value;
            this.valueChange.emit(this.value);
            this.render();
        }
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    AbstractPanelHeader.prototype.changeMode = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this.panelModeChange.emit(mode);
    };
    /**
     * @private
     * @return {?}
     */
    AbstractPanelHeader.prototype.render = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.value) {
            this.selectors = this.getSelectors();
        }
    };
    /**
     * @return {?}
     */
    AbstractPanelHeader.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.value) {
            this.value = new CandyDate(); // Show today by default
        }
        this.selectors = this.getSelectors();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    AbstractPanelHeader.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.value || changes.locale) {
            this.render();
        }
    };
    AbstractPanelHeader.decorators = [
        { type: Directive }
    ];
    AbstractPanelHeader.propDecorators = {
        value: [{ type: Input }],
        locale: [{ type: Input }],
        showSuperPreBtn: [{ type: Input }],
        showSuperNextBtn: [{ type: Input }],
        showPreBtn: [{ type: Input }],
        showNextBtn: [{ type: Input }],
        panelModeChange: [{ type: Output }],
        valueChange: [{ type: Output }]
    };
    return AbstractPanelHeader;
}());
export { AbstractPanelHeader };
if (false) {
    /** @type {?} */
    AbstractPanelHeader.prototype.prefixCls;
    /** @type {?} */
    AbstractPanelHeader.prototype.selectors;
    /** @type {?} */
    AbstractPanelHeader.prototype.value;
    /** @type {?} */
    AbstractPanelHeader.prototype.locale;
    /** @type {?} */
    AbstractPanelHeader.prototype.showSuperPreBtn;
    /** @type {?} */
    AbstractPanelHeader.prototype.showSuperNextBtn;
    /** @type {?} */
    AbstractPanelHeader.prototype.showPreBtn;
    /** @type {?} */
    AbstractPanelHeader.prototype.showNextBtn;
    /** @type {?} */
    AbstractPanelHeader.prototype.panelModeChange;
    /** @type {?} */
    AbstractPanelHeader.prototype.valueChange;
    /**
     * @abstract
     * @return {?}
     */
    AbstractPanelHeader.prototype.getSelectors = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtcGFuZWwtaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9hYnN0cmFjdC1wYW5lbC1oZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7OztBQUtwRDtJQUFBO1FBR0UsY0FBUyxHQUFXLG1CQUFtQixDQUFDO1FBQ3hDLGNBQVMsR0FBb0IsRUFBRSxDQUFDO1FBSXZCLG9CQUFlLEdBQVksSUFBSSxDQUFDO1FBQ2hDLHFCQUFnQixHQUFZLElBQUksQ0FBQztRQUNqQyxlQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBRWxCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUNqRCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7SUFrRWpFLENBQUM7Ozs7SUE5REMsZ0RBQWtCOzs7SUFBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCwyQ0FBYTs7O0lBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCw0Q0FBYzs7O0lBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCx1Q0FBUzs7O0lBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCwyQ0FBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsdUNBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBRUQsa0NBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRUQseUNBQVc7Ozs7SUFBWCxVQUFZLEtBQWdCO1FBQzFCLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO0lBQ0gsQ0FBQzs7Ozs7SUFFRCx3Q0FBVTs7OztJQUFWLFVBQVcsSUFBZ0I7UUFDekIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFTyxvQ0FBTTs7OztJQUFkO1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdEM7SUFDSCxDQUFDOzs7O0lBRUQsc0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUMsQ0FBQyx3QkFBd0I7U0FDdkQ7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVELHlDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNuQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7O2dCQS9FRixTQUFTOzs7d0JBTVAsS0FBSzt5QkFDTCxLQUFLO2tDQUNMLEtBQUs7bUNBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7a0NBRUwsTUFBTTs4QkFDTixNQUFNOztJQWtFVCwwQkFBQztDQUFBLEFBaEZELElBZ0ZDO1NBOUVxQixtQkFBbUI7OztJQUN2Qyx3Q0FBd0M7O0lBQ3hDLHdDQUFnQzs7SUFFaEMsb0NBQTJCOztJQUMzQixxQ0FBMEM7O0lBQzFDLDhDQUF5Qzs7SUFDekMsK0NBQTBDOztJQUMxQyx5Q0FBb0M7O0lBQ3BDLDBDQUFxQzs7SUFFckMsOENBQW9FOztJQUNwRSwwQ0FBK0Q7Ozs7O0lBRS9ELDZEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3RpbWUnO1xuaW1wb3J0IHsgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgTnpEYXRlTW9kZSB9IGZyb20gJy4uL3N0YW5kYXJkLXR5cGVzJztcbmltcG9ydCB7IFBhbmVsU2VsZWN0b3IgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbkBEaXJlY3RpdmUoKVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1jbGFzcy1zdWZmaXhcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFBhbmVsSGVhZGVyIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBwcmVmaXhDbHM6IHN0cmluZyA9IGBhbnQtcGlja2VyLWhlYWRlcmA7XG4gIHNlbGVjdG9yczogUGFuZWxTZWxlY3RvcltdID0gW107XG5cbiAgQElucHV0KCkgdmFsdWUhOiBDYW5keURhdGU7XG4gIEBJbnB1dCgpIGxvY2FsZSE6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xuICBASW5wdXQoKSBzaG93U3VwZXJQcmVCdG46IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBzaG93U3VwZXJOZXh0QnRuOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgc2hvd1ByZUJ0bjogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHNob3dOZXh0QnRuOiBib29sZWFuID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgcGFuZWxNb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekRhdGVNb2RlPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcblxuICBhYnN0cmFjdCBnZXRTZWxlY3RvcnMoKTogUGFuZWxTZWxlY3RvcltdO1xuXG4gIHN1cGVyUHJldmlvdXNUaXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmxvY2FsZS5wcmV2aW91c1llYXI7XG4gIH1cblxuICBwcmV2aW91c1RpdGxlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxlLnByZXZpb3VzTW9udGg7XG4gIH1cblxuICBzdXBlck5leHRUaXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmxvY2FsZS5uZXh0WWVhcjtcbiAgfVxuXG4gIG5leHRUaXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmxvY2FsZS5uZXh0TW9udGg7XG4gIH1cblxuICBzdXBlclByZXZpb3VzKCk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy52YWx1ZS5hZGRZZWFycygtMSkpO1xuICB9XG5cbiAgc3VwZXJOZXh0KCk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy52YWx1ZS5hZGRZZWFycygxKSk7XG4gIH1cblxuICBwcmV2aW91cygpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMudmFsdWUuYWRkTW9udGhzKC0xKSk7XG4gIH1cblxuICBuZXh0KCk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy52YWx1ZS5hZGRNb250aHMoMSkpO1xuICB9XG5cbiAgY2hhbmdlVmFsdWUodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VNb2RlKG1vZGU6IE56RGF0ZU1vZGUpOiB2b2lkIHtcbiAgICB0aGlzLnBhbmVsTW9kZUNoYW5nZS5lbWl0KG1vZGUpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMuc2VsZWN0b3JzID0gdGhpcy5nZXRTZWxlY3RvcnMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBuZXcgQ2FuZHlEYXRlKCk7IC8vIFNob3cgdG9kYXkgYnkgZGVmYXVsdFxuICAgIH1cbiAgICB0aGlzLnNlbGVjdG9ycyA9IHRoaXMuZ2V0U2VsZWN0b3JzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMudmFsdWUgfHwgY2hhbmdlcy5sb2NhbGUpIHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG59XG4iXX0=