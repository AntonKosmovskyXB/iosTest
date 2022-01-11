/**
 * @fileoverview added by tsickle
 * Generated from: lib/decade-table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AbstractTable } from './abstract-table';
/** @type {?} */
var MAX_ROW = 4;
/** @type {?} */
var MAX_COL = 3;
var DecadeTableComponent = /** @class */ (function (_super) {
    __extends(DecadeTableComponent, _super);
    function DecadeTableComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    DecadeTableComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.value || changes.disabledDate || changes.activeDate) {
            this.render();
        }
    };
    Object.defineProperty(DecadeTableComponent.prototype, "startYear", {
        get: /**
         * @return {?}
         */
        function () {
            return parseInt("" + this.activeDate.getYear() / 100, 10) * 100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecadeTableComponent.prototype, "endYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this.startYear + 99;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DecadeTableComponent.prototype.makeHeadRow = /**
     * @return {?}
     */
    function () {
        return [];
    };
    /**
     * @return {?}
     */
    DecadeTableComponent.prototype.makeBodyRows = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var decades = [];
        /** @type {?} */
        var currentYear = this.value && this.value.getYear();
        /** @type {?} */
        var startYear = this.startYear;
        /** @type {?} */
        var endYear = this.endYear;
        /** @type {?} */
        var previousYear = startYear - 10;
        /** @type {?} */
        var index = 0;
        for (var rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            /** @type {?} */
            var row = [];
            var _loop_1 = function (colIndex) {
                /** @type {?} */
                var start = previousYear + index * 10;
                /** @type {?} */
                var end = previousYear + index * 10 + 9;
                /** @type {?} */
                var content = start + "-" + end;
                /** @type {?} */
                var cell = {
                    value: this_1.activeDate.setYear(start).nativeDate,
                    content: content,
                    title: content,
                    isDisabled: false,
                    isSelected: currentYear >= start && currentYear <= end,
                    isLowerThanStart: end < startYear,
                    isBiggerThanEnd: start > endYear,
                    classMap: {},
                    onClick: /**
                     * @return {?}
                     */
                    function () { },
                    onMouseEnter: /**
                     * @return {?}
                     */
                    function () { }
                };
                cell.classMap = this_1.getClassMap(cell);
                cell.onClick = (/**
                 * @return {?}
                 */
                function () { return _this.chooseDecade(start); });
                index++;
                row.push(cell);
            };
            var this_1 = this;
            for (var colIndex = 0; colIndex < MAX_COL; colIndex++) {
                _loop_1(colIndex);
            }
            decades.push({ dateCells: row });
        }
        return decades;
    };
    /**
     * @param {?} cell
     * @return {?}
     */
    DecadeTableComponent.prototype.getClassMap = /**
     * @param {?} cell
     * @return {?}
     */
    function (cell) {
        var _a;
        return _a = {},
            _a[this.prefixCls + "-cell"] = true,
            _a[this.prefixCls + "-cell-in-view"] = !cell.isBiggerThanEnd && !cell.isLowerThanStart,
            _a[this.prefixCls + "-cell-selected"] = cell.isSelected,
            _a[this.prefixCls + "-cell-disabled"] = cell.isDisabled,
            _a;
    };
    /**
     * @private
     * @param {?} year
     * @return {?}
     */
    DecadeTableComponent.prototype.chooseDecade = /**
     * @private
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.value = this.activeDate.setYear(year);
        this.valueChange.emit(this.value);
    };
    DecadeTableComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'decade-table',
                    exportAs: 'decadeTable',
                    template: "<table class=\"ant-picker-content\" cellspacing=\"0\" role=\"grid\">\n  <thead *ngIf=\"headRow && headRow.length > 0\">\n    <tr role=\"row\">\n      <th *ngIf=\"showWeek\" role=\"columnheader\"></th>\n      <th *ngFor=\"let cell of headRow\" role=\"columnheader\" title=\"{{ cell.title }}\">\n        {{ cell.content }}\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let row of bodyRows; trackBy: trackByBodyRow\" [ngClass]=\"row.classMap!\" role=\"row\">\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-cell-week\">\n        {{ row.weekNum }}\n      </td>\n      <td\n        *ngFor=\"let cell of row.dateCells; trackBy: trackByBodyColumn\"\n        title=\"{{ cell.title }}\"\n        role=\"gridcell\"\n        [ngClass]=\"cell.classMap!\"\n        (click)=\"cell.isDisabled ? null : cell.onClick()\"\n        (mouseenter)=\"cell.onMouseEnter()\"\n      >\n        <ng-container [ngSwitch]=\"prefixCls\">\n          <ng-container *ngSwitchCase=\"'ant-picker'\">\n            <ng-container [ngSwitch]=\"true\">\n              <ng-container *ngSwitchCase=\"isTemplateRef(cell.cellRender)\">\n                <!--           *ngSwitchCase not has type assertion support, the cellRender type here is TemplateRef -->\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                ></ng-container>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"isNonEmptyString(cell.cellRender)\">\n                <span [innerHTML]=\"cell.cellRender\"></span>\n              </ng-container>\n              <ng-container *ngSwitchDefault>\n                <div\n                  class=\"{{ prefixCls }}-cell-inner\"\n                  [attr.aria-selected]=\"cell.isSelected\"\n                  [attr.aria-disabled]=\"cell.isDisabled\"\n                >\n                  {{ cell.content }}\n                </div>\n              </ng-container>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'ant-picker-calendar'\">\n            <div\n              class=\"{{ prefixCls }}-date ant-picker-cell-inner\"\n              [class.ant-picker-calendar-date-today]=\"cell.isToday\"\n            >\n              <ng-container *ngIf=\"cell.fullCellRender; else defaultCell\">\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.fullCellRender); context: { $implicit: cell.value }\"\n                >\n                </ng-container>\n              </ng-container>\n              <ng-template #defaultCell>\n                <div class=\"{{ prefixCls }}-date-value\">{{ cell.content }}</div>\n                <div class=\"{{ prefixCls }}-date-content\">\n                  <ng-container\n                    *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                  >\n                  </ng-container>\n                </div>\n              </ng-template>\n            </div>\n          </ng-container>\n        </ng-container>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"
                }] }
    ];
    return DecadeTableComponent;
}(AbstractTable));
export { DecadeTableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjYWRlLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvZGVjYWRlLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBNEIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztJQUczQyxPQUFPLEdBQUcsQ0FBQzs7SUFDWCxPQUFPLEdBQUcsQ0FBQztBQUVqQjtJQVEwQyx3Q0FBYTtJQVJ2RDs7SUErRUEsQ0FBQzs7Ozs7SUF0RUMsMENBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsWUFBWSxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDL0QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDO0lBRUQsc0JBQUksMkNBQVM7Ozs7UUFBYjtZQUNFLE9BQU8sUUFBUSxDQUFDLEtBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ2xFLENBQUM7OztPQUFBO0lBRUQsc0JBQUkseUNBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7Ozs7SUFFRCwwQ0FBVzs7O0lBQVg7UUFDRSxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7Ozs7SUFFRCwyQ0FBWTs7O0lBQVo7UUFBQSxpQkFxQ0M7O1lBcENPLE9BQU8sR0FBa0IsRUFBRTs7WUFDM0IsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFP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ICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0VGFibGUgfSBmcm9tICcuL2Fic3RyYWN0LXRhYmxlJztcbmltcG9ydCB7IERhdGVCb2R5Um93LCBEYXRlQ2VsbCwgRGVjYWRlQ2VsbCB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuY29uc3QgTUFYX1JPVyA9IDQ7XG5jb25zdCBNQVhfQ09MID0gMztcblxuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZGVjYWRlLXRhYmxlJyxcbiAgZXhwb3J0QXM6ICdkZWNhZGVUYWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnYWJzdHJhY3QtdGFibGUuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRGVjYWRlVGFibGVDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdFRhYmxlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLnZhbHVlIHx8IGNoYW5nZXMuZGlzYWJsZWREYXRlIHx8IGNoYW5nZXMuYWN0aXZlRGF0ZSkge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgc3RhcnRZZWFyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGAke3RoaXMuYWN0aXZlRGF0ZS5nZXRZZWFyKCkgLyAxMDB9YCwgMTApICogMTAwO1xuICB9XG5cbiAgZ2V0IGVuZFllYXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydFllYXIgKyA5OTtcbiAgfVxuXG4gIG1ha2VIZWFkUm93KCk6IERhdGVDZWxsW10ge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIG1ha2VCb2R5Um93cygpOiBEYXRlQm9keVJvd1tdIHtcbiAgICBjb25zdCBkZWNhZGVzOiBEYXRlQm9keVJvd1tdID0gW107XG4gICAgY29uc3QgY3VycmVudFllYXIgPSB0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUuZ2V0WWVhcigpO1xuICAgIGNvbnN0IHN0YXJ0WWVhciA9IHRoaXMuc3RhcnRZZWFyO1xuICAgIGNvbnN0IGVuZFllYXIgPSB0aGlzLmVuZFllYXI7XG4gICAgY29uc3QgcHJldmlvdXNZZWFyID0gc3RhcnRZZWFyIC0gMTA7XG5cbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCBNQVhfUk9XOyByb3dJbmRleCsrKSB7XG4gICAgICBjb25zdCByb3c6IERlY2FkZUNlbGxbXSA9IFtdO1xuICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IE1BWF9DT0w7IGNvbEluZGV4KyspIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBwcmV2aW91c1llYXIgKyBpbmRleCAqIDEwO1xuICAgICAgICBjb25zdCBlbmQgPSBwcmV2aW91c1llYXIgKyBpbmRleCAqIDEwICsgOTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGAke3N0YXJ0fS0ke2VuZH1gO1xuXG4gICAgICAgIGNvbnN0IGNlbGw6IERlY2FkZUNlbGwgPSB7XG4gICAgICAgICAgdmFsdWU6IHRoaXMuYWN0aXZlRGF0ZS5zZXRZZWFyKHN0YXJ0KS5uYXRpdmVEYXRlLFxuICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgdGl0bGU6IGNvbnRlbnQsXG4gICAgICAgICAgaXNEaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgaXNTZWxlY3RlZDogY3VycmVudFllYXIgPj0gc3RhcnQgJiYgY3VycmVudFllYXIgPD0gZW5kLFxuICAgICAgICAgIGlzTG93ZXJUaGFuU3RhcnQ6IGVuZCA8IHN0YXJ0WWVhcixcbiAgICAgICAgICBpc0JpZ2dlclRoYW5FbmQ6IHN0YXJ0ID4gZW5kWWVhcixcbiAgICAgICAgICBjbGFzc01hcDoge30sXG4gICAgICAgICAgb25DbGljaygpOiB2b2lkIHt9LFxuICAgICAgICAgIG9uTW91c2VFbnRlcigpOiB2b2lkIHt9XG4gICAgICAgIH07XG5cbiAgICAgICAgY2VsbC5jbGFzc01hcCA9IHRoaXMuZ2V0Q2xhc3NNYXAoY2VsbCk7XG4gICAgICAgIGNlbGwub25DbGljayA9ICgpID0+IHRoaXMuY2hvb3NlRGVjYWRlKHN0YXJ0KTtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgcm93LnB1c2goY2VsbCk7XG4gICAgICB9XG5cbiAgICAgIGRlY2FkZXMucHVzaCh7IGRhdGVDZWxsczogcm93IH0pO1xuICAgIH1cbiAgICByZXR1cm4gZGVjYWRlcztcbiAgfVxuXG4gIGdldENsYXNzTWFwKGNlbGw6IERlY2FkZUNlbGwpOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2VsbGBdOiB0cnVlLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jZWxsLWluLXZpZXdgXTogIWNlbGwuaXNCaWdnZXJUaGFuRW5kICYmICFjZWxsLmlzTG93ZXJUaGFuU3RhcnQsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNlbGwtc2VsZWN0ZWRgXTogY2VsbC5pc1NlbGVjdGVkLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jZWxsLWRpc2FibGVkYF06IGNlbGwuaXNEaXNhYmxlZFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGNob29zZURlY2FkZSh5ZWFyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5hY3RpdmVEYXRlLnNldFllYXIoeWVhcik7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG59XG4iXX0=