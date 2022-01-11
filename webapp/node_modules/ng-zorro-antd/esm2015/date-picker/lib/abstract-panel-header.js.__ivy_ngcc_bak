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
// tslint:disable-next-line:directive-class-suffix
export class AbstractPanelHeader {
    constructor() {
        this.prefixCls = `ant-picker-header`;
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
    superPreviousTitle() {
        return this.locale.previousYear;
    }
    /**
     * @return {?}
     */
    previousTitle() {
        return this.locale.previousMonth;
    }
    /**
     * @return {?}
     */
    superNextTitle() {
        return this.locale.nextYear;
    }
    /**
     * @return {?}
     */
    nextTitle() {
        return this.locale.nextMonth;
    }
    /**
     * @return {?}
     */
    superPrevious() {
        this.changeValue(this.value.addYears(-1));
    }
    /**
     * @return {?}
     */
    superNext() {
        this.changeValue(this.value.addYears(1));
    }
    /**
     * @return {?}
     */
    previous() {
        this.changeValue(this.value.addMonths(-1));
    }
    /**
     * @return {?}
     */
    next() {
        this.changeValue(this.value.addMonths(1));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    changeValue(value) {
        if (this.value !== value) {
            this.value = value;
            this.valueChange.emit(this.value);
            this.render();
        }
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    changeMode(mode) {
        this.panelModeChange.emit(mode);
    }
    /**
     * @private
     * @return {?}
     */
    render() {
        if (this.value) {
            this.selectors = this.getSelectors();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.value) {
            this.value = new CandyDate(); // Show today by default
        }
        this.selectors = this.getSelectors();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.value || changes.locale) {
            this.render();
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtcGFuZWwtaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9hYnN0cmFjdC1wYW5lbC1oZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7OztBQU1wRCxrREFBa0Q7QUFDbEQsTUFBTSxPQUFnQixtQkFBbUI7SUFGekM7UUFHRSxjQUFTLEdBQVcsbUJBQW1CLENBQUM7UUFDeEMsY0FBUyxHQUFvQixFQUFFLENBQUM7UUFJdkIsb0JBQWUsR0FBWSxJQUFJLENBQUM7UUFDaEMscUJBQWdCLEdBQVksSUFBSSxDQUFDO1FBQ2pDLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFFbEIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ2pELGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztJQWtFakUsQ0FBQzs7OztJQTlEQyxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBZ0I7UUFDMUIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssRUFBRTtZQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxJQUFnQjtRQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVPLE1BQU07UUFDWixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN0QztJQUNILENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUMsQ0FBQyx3QkFBd0I7U0FDdkQ7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNuQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7OztZQS9FRixTQUFTOzs7b0JBTVAsS0FBSztxQkFDTCxLQUFLOzhCQUNMLEtBQUs7K0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7OEJBRUwsTUFBTTswQkFDTixNQUFNOzs7O0lBWFAsd0NBQXdDOztJQUN4Qyx3Q0FBZ0M7O0lBRWhDLG9DQUEyQjs7SUFDM0IscUNBQTBDOztJQUMxQyw4Q0FBeUM7O0lBQ3pDLCtDQUEwQzs7SUFDMUMseUNBQW9DOztJQUNwQywwQ0FBcUM7O0lBRXJDLDhDQUFvRTs7SUFDcEUsMENBQStEOzs7OztJQUUvRCw2REFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90aW1lJztcbmltcG9ydCB7IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcbmltcG9ydCB7IE56RGF0ZU1vZGUgfSBmcm9tICcuLi9zdGFuZGFyZC10eXBlcyc7XG5pbXBvcnQgeyBQYW5lbFNlbGVjdG9yIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5ARGlyZWN0aXZlKClcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtY2xhc3Mtc3VmZml4XG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RQYW5lbEhlYWRlciBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSBgYW50LXBpY2tlci1oZWFkZXJgO1xuICBzZWxlY3RvcnM6IFBhbmVsU2VsZWN0b3JbXSA9IFtdO1xuXG4gIEBJbnB1dCgpIHZhbHVlITogQ2FuZHlEYXRlO1xuICBASW5wdXQoKSBsb2NhbGUhOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcbiAgQElucHV0KCkgc2hvd1N1cGVyUHJlQnRuOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgc2hvd1N1cGVyTmV4dEJ0bjogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHNob3dQcmVCdG46IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBzaG93TmV4dEJ0bjogYm9vbGVhbiA9IHRydWU7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IHBhbmVsTW9kZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpEYXRlTW9kZT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XG5cbiAgYWJzdHJhY3QgZ2V0U2VsZWN0b3JzKCk6IFBhbmVsU2VsZWN0b3JbXTtcblxuICBzdXBlclByZXZpb3VzVGl0bGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGUucHJldmlvdXNZZWFyO1xuICB9XG5cbiAgcHJldmlvdXNUaXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmxvY2FsZS5wcmV2aW91c01vbnRoO1xuICB9XG5cbiAgc3VwZXJOZXh0VGl0bGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGUubmV4dFllYXI7XG4gIH1cblxuICBuZXh0VGl0bGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGUubmV4dE1vbnRoO1xuICB9XG5cbiAgc3VwZXJQcmV2aW91cygpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMudmFsdWUuYWRkWWVhcnMoLTEpKTtcbiAgfVxuXG4gIHN1cGVyTmV4dCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMudmFsdWUuYWRkWWVhcnMoMSkpO1xuICB9XG5cbiAgcHJldmlvdXMoKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLnZhbHVlLmFkZE1vbnRocygtMSkpO1xuICB9XG5cbiAgbmV4dCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMudmFsdWUuYWRkTW9udGhzKDEpKTtcbiAgfVxuXG4gIGNoYW5nZVZhbHVlKHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlTW9kZShtb2RlOiBOekRhdGVNb2RlKTogdm9pZCB7XG4gICAgdGhpcy5wYW5lbE1vZGVDaGFuZ2UuZW1pdChtb2RlKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLnNlbGVjdG9ycyA9IHRoaXMuZ2V0U2VsZWN0b3JzKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gbmV3IENhbmR5RGF0ZSgpOyAvLyBTaG93IHRvZGF5IGJ5IGRlZmF1bHRcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RvcnMgPSB0aGlzLmdldFNlbGVjdG9ycygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLnZhbHVlIHx8IGNoYW5nZXMubG9jYWxlKSB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxufVxuIl19