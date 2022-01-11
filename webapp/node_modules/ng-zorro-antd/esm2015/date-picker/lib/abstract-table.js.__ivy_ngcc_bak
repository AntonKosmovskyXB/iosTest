/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract-table.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core/time';
import { isNonEmptyString, isTemplateRef } from 'ng-zorro-antd/core/util';
/**
 * @abstract
 */
// tslint:disable-next-line:directive-class-suffix
export class AbstractTable {
    constructor() {
        this.isTemplateRef = isTemplateRef;
        this.isNonEmptyString = isNonEmptyString;
        this.headRow = [];
        this.bodyRows = [];
        this.MAX_ROW = 6;
        this.MAX_COL = 7;
        this.prefixCls = 'ant-picker';
        this.activeDate = new CandyDate();
        this.showWeek = false;
        this.valueChange = new EventEmitter();
    }
    /**
     * @protected
     * @return {?}
     */
    render() {
        if (this.activeDate) {
            this.headRow = this.makeHeadRow();
            this.bodyRows = this.makeBodyRows();
        }
    }
    /**
     * @param {?} _index
     * @param {?} item
     * @return {?}
     */
    trackByBodyRow(_index, item) {
        return item;
    }
    // Item usually is an object, so trackby has no use by default.
    /**
     * @param {?} _index
     * @param {?} item
     * @return {?}
     */
    trackByBodyColumn(_index, item) {
        return item;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.render();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.activeDate && !changes.activeDate.currentValue) {
            this.activeDate = new CandyDate();
        }
    }
}
AbstractTable.decorators = [
    { type: Directive }
];
AbstractTable.propDecorators = {
    prefixCls: [{ type: Input }],
    value: [{ type: Input }],
    activeDate: [{ type: Input }],
    showWeek: [{ type: Input }],
    disabledDate: [{ type: Input }],
    cellRender: [{ type: Input }],
    fullCellRender: [{ type: Input }],
    valueChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    AbstractTable.prototype.isTemplateRef;
    /** @type {?} */
    AbstractTable.prototype.isNonEmptyString;
    /** @type {?} */
    AbstractTable.prototype.headRow;
    /** @type {?} */
    AbstractTable.prototype.bodyRows;
    /** @type {?} */
    AbstractTable.prototype.MAX_ROW;
    /** @type {?} */
    AbstractTable.prototype.MAX_COL;
    /** @type {?} */
    AbstractTable.prototype.prefixCls;
    /** @type {?} */
    AbstractTable.prototype.value;
    /** @type {?} */
    AbstractTable.prototype.activeDate;
    /** @type {?} */
    AbstractTable.prototype.showWeek;
    /** @type {?} */
    AbstractTable.prototype.disabledDate;
    /** @type {?} */
    AbstractTable.prototype.cellRender;
    /** @type {?} */
    AbstractTable.prototype.fullCellRender;
    /** @type {?} */
    AbstractTable.prototype.valueChange;
    /**
     * @abstract
     * @return {?}
     */
    AbstractTable.prototype.makeHeadRow = function () { };
    /**
     * @abstract
     * @return {?}
     */
    AbstractTable.prototype.makeBodyRows = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtdGFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2Fic3RyYWN0LXRhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUE4QixNQUFNLGVBQWUsQ0FBQztBQUN0SCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBSTFFLGtEQUFrRDtBQUNsRCxNQUFNLE9BQWdCLGFBQWE7SUFGbkM7UUFHRSxrQkFBYSxHQUFHLGFBQWEsQ0FBQztRQUM5QixxQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUNwQyxZQUFPLEdBQWUsRUFBRSxDQUFDO1FBQ3pCLGFBQVEsR0FBa0IsRUFBRSxDQUFDO1FBQzdCLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBRUgsY0FBUyxHQUFXLFlBQVksQ0FBQztRQUVqQyxlQUFVLEdBQWMsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUN4QyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBS2hCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztJQThCakUsQ0FBQzs7Ozs7SUE1QlcsTUFBTTtRQUNkLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQztJQUNILENBQUM7Ozs7OztJQUVELGNBQWMsQ0FBQyxNQUFjLEVBQUUsSUFBaUI7UUFDOUMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7O0lBR0QsaUJBQWlCLENBQUMsTUFBYyxFQUFFLElBQWM7UUFDOUMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7O0lBS0QsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRTtZQUMxRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7U0FDbkM7SUFDSCxDQUFDOzs7WUEvQ0YsU0FBUzs7O3dCQVVQLEtBQUs7b0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLOzZCQUNMLEtBQUs7MEJBRUwsTUFBTTs7OztJQWZQLHNDQUE4Qjs7SUFDOUIseUNBQW9DOztJQUNwQyxnQ0FBeUI7O0lBQ3pCLGlDQUE2Qjs7SUFDN0IsZ0NBQVk7O0lBQ1osZ0NBQVk7O0lBRVosa0NBQTBDOztJQUMxQyw4QkFBMkI7O0lBQzNCLG1DQUFpRDs7SUFDakQsaUNBQW1DOztJQUNuQyxxQ0FBNkM7O0lBQzdDLG1DQUE0Rjs7SUFDNUYsdUNBQWdHOztJQUVoRyxvQ0FBK0Q7Ozs7O0lBa0IvRCxzREFBbUM7Ozs7O0lBQ25DLHVEQUF1QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90aW1lJztcbmltcG9ydCB7IEZ1bmN0aW9uUHJvcCwgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IGlzTm9uRW1wdHlTdHJpbmcsIGlzVGVtcGxhdGVSZWYgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBEYXRlQm9keVJvdywgRGF0ZUNlbGwgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbkBEaXJlY3RpdmUoKVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1jbGFzcy1zdWZmaXhcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFRhYmxlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBpc1RlbXBsYXRlUmVmID0gaXNUZW1wbGF0ZVJlZjtcbiAgaXNOb25FbXB0eVN0cmluZyA9IGlzTm9uRW1wdHlTdHJpbmc7XG4gIGhlYWRSb3c6IERhdGVDZWxsW10gPSBbXTtcbiAgYm9keVJvd3M6IERhdGVCb2R5Um93W10gPSBbXTtcbiAgTUFYX1JPVyA9IDY7XG4gIE1BWF9DT0wgPSA3O1xuXG4gIEBJbnB1dCgpIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1waWNrZXInO1xuICBASW5wdXQoKSB2YWx1ZSE6IENhbmR5RGF0ZTtcbiAgQElucHV0KCkgYWN0aXZlRGF0ZTogQ2FuZHlEYXRlID0gbmV3IENhbmR5RGF0ZSgpO1xuICBASW5wdXQoKSBzaG93V2VlazogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBkaXNhYmxlZERhdGU/OiAoZDogRGF0ZSkgPT4gYm9vbGVhbjtcbiAgQElucHV0KCkgY2VsbFJlbmRlcj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPERhdGU+IHwgRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nPjtcbiAgQElucHV0KCkgZnVsbENlbGxSZW5kZXI/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxEYXRlPiB8IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZz47XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3RpdmVEYXRlKSB7XG4gICAgICB0aGlzLmhlYWRSb3cgPSB0aGlzLm1ha2VIZWFkUm93KCk7XG4gICAgICB0aGlzLmJvZHlSb3dzID0gdGhpcy5tYWtlQm9keVJvd3MoKTtcbiAgICB9XG4gIH1cblxuICB0cmFja0J5Qm9keVJvdyhfaW5kZXg6IG51bWJlciwgaXRlbTogRGF0ZUJvZHlSb3cpOiBOelNhZmVBbnkge1xuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgLy8gSXRlbSB1c3VhbGx5IGlzIGFuIG9iamVjdCwgc28gdHJhY2tieSBoYXMgbm8gdXNlIGJ5IGRlZmF1bHQuXG4gIHRyYWNrQnlCb2R5Q29sdW1uKF9pbmRleDogbnVtYmVyLCBpdGVtOiBEYXRlQ2VsbCk6IE56U2FmZUFueSB7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBhYnN0cmFjdCBtYWtlSGVhZFJvdygpOiBEYXRlQ2VsbFtdO1xuICBhYnN0cmFjdCBtYWtlQm9keVJvd3MoKTogRGF0ZUJvZHlSb3dbXTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmFjdGl2ZURhdGUgJiYgIWNoYW5nZXMuYWN0aXZlRGF0ZS5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IG5ldyBDYW5keURhdGUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==