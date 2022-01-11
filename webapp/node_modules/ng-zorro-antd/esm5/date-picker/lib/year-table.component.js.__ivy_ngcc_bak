/**
 * @fileoverview added by tsickle
 * Generated from: lib/year-table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { valueFunctionProp } from 'ng-zorro-antd/core/util';
import { DateHelperService } from 'ng-zorro-antd/i18n';
import { AbstractTable } from './abstract-table';
var YearTableComponent = /** @class */ (function (_super) {
    __extends(YearTableComponent, _super);
    function YearTableComponent(dateHelper) {
        var _this = _super.call(this) || this;
        _this.dateHelper = dateHelper;
        _this.MAX_ROW = 4;
        _this.MAX_COL = 3;
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    YearTableComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        if (changes.value || changes.disabledDate || changes.activeDate) {
            this.render();
        }
    };
    /**
     * @return {?}
     */
    YearTableComponent.prototype.makeHeadRow = /**
     * @return {?}
     */
    function () {
        return [];
    };
    /**
     * @return {?}
     */
    YearTableComponent.prototype.makeBodyRows = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var currentYear = this.activeDate && this.activeDate.getYear();
        /** @type {?} */
        var startYear = parseInt("" + currentYear / 10, 10) * 10;
        /** @type {?} */
        var endYear = startYear + 9;
        /** @type {?} */
        var previousYear = startYear - 1;
        /** @type {?} */
        var years = [];
        /** @type {?} */
        var yearValue = 0;
        for (var rowIndex = 0; rowIndex < this.MAX_ROW; rowIndex++) {
            /** @type {?} */
            var row = [];
            var _loop_1 = function (colIndex) {
                /** @type {?} */
                var yearNum = previousYear + yearValue;
                /** @type {?} */
                var year = this_1.activeDate.setYear(yearNum);
                /** @type {?} */
                var content = this_1.dateHelper.format(year.nativeDate, 'yyyy');
                /** @type {?} */
                var isDisabled = this_1.disabledDate ? this_1.disabledDate(year.nativeDate) : false;
                /** @type {?} */
                var cell = {
                    value: year.nativeDate,
                    isDisabled: isDisabled,
                    isSameDecade: yearNum >= startYear && yearNum <= endYear,
                    isSelected: yearNum === (this_1.value && this_1.value.getYear()),
                    content: content,
                    title: content,
                    classMap: {},
                    cellRender: valueFunctionProp((/** @type {?} */ (this_1.cellRender)), year),
                    // Customized content
                    fullCellRender: valueFunctionProp((/** @type {?} */ (this_1.fullCellRender)), year),
                    onClick: (/**
                     * @return {?}
                     */
                    function () { return _this.chooseYear(cell.value.getFullYear()); }),
                    // don't use yearValue here,
                    onMouseEnter: (/**
                     * @return {?}
                     */
                    function () { return null; })
                };
                cell.classMap = this_1.getClassMap(cell);
                row.push(cell);
                yearValue++;
            };
            var this_1 = this;
            for (var colIndex = 0; colIndex < this.MAX_COL; colIndex++) {
                _loop_1(colIndex);
            }
            years.push({ dateCells: row });
        }
        return years;
    };
    /**
     * @param {?} cell
     * @return {?}
     */
    YearTableComponent.prototype.getClassMap = /**
     * @param {?} cell
     * @return {?}
     */
    function (cell) {
        var _a;
        return _a = {},
            _a[this.prefixCls + "-cell"] = true,
            _a[this.prefixCls + "-cell-in-view"] = !!cell.isSameDecade,
            _a[this.prefixCls + "-cell-selected"] = cell.isSelected,
            _a[this.prefixCls + "-cell-disabled"] = cell.isDisabled,
            _a;
    };
    /**
     * @private
     * @param {?} year
     * @return {?}
     */
    YearTableComponent.prototype.chooseYear = /**
     * @private
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.value = this.activeDate.setYear(year);
        this.valueChange.emit(this.value);
        this.render();
    };
    YearTableComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'year-table',
                    exportAs: 'yearTable',
                    template: "<table class=\"ant-picker-content\" cellspacing=\"0\" role=\"grid\">\n  <thead *ngIf=\"headRow && headRow.length > 0\">\n    <tr role=\"row\">\n      <th *ngIf=\"showWeek\" role=\"columnheader\"></th>\n      <th *ngFor=\"let cell of headRow\" role=\"columnheader\" title=\"{{ cell.title }}\">\n        {{ cell.content }}\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let row of bodyRows; trackBy: trackByBodyRow\" [ngClass]=\"row.classMap!\" role=\"row\">\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-cell-week\">\n        {{ row.weekNum }}\n      </td>\n      <td\n        *ngFor=\"let cell of row.dateCells; trackBy: trackByBodyColumn\"\n        title=\"{{ cell.title }}\"\n        role=\"gridcell\"\n        [ngClass]=\"cell.classMap!\"\n        (click)=\"cell.isDisabled ? null : cell.onClick()\"\n        (mouseenter)=\"cell.onMouseEnter()\"\n      >\n        <ng-container [ngSwitch]=\"prefixCls\">\n          <ng-container *ngSwitchCase=\"'ant-picker'\">\n            <ng-container [ngSwitch]=\"true\">\n              <ng-container *ngSwitchCase=\"isTemplateRef(cell.cellRender)\">\n                <!--           *ngSwitchCase not has type assertion support, the cellRender type here is TemplateRef -->\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                ></ng-container>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"isNonEmptyString(cell.cellRender)\">\n                <span [innerHTML]=\"cell.cellRender\"></span>\n              </ng-container>\n              <ng-container *ngSwitchDefault>\n                <div\n                  class=\"{{ prefixCls }}-cell-inner\"\n                  [attr.aria-selected]=\"cell.isSelected\"\n                  [attr.aria-disabled]=\"cell.isDisabled\"\n                >\n                  {{ cell.content }}\n                </div>\n              </ng-container>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'ant-picker-calendar'\">\n            <div\n              class=\"{{ prefixCls }}-date ant-picker-cell-inner\"\n              [class.ant-picker-calendar-date-today]=\"cell.isToday\"\n            >\n              <ng-container *ngIf=\"cell.fullCellRender; else defaultCell\">\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.fullCellRender); context: { $implicit: cell.value }\"\n                >\n                </ng-container>\n              </ng-container>\n              <ng-template #defaultCell>\n                <div class=\"{{ prefixCls }}-date-value\">{{ cell.content }}</div>\n                <div class=\"{{ prefixCls }}-date-content\">\n                  <ng-container\n                    *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                  >\n                  </ng-container>\n                </div>\n              </ng-template>\n            </div>\n          </ng-container>\n        </ng-container>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"
                }] }
    ];
    /** @nocollapse */
    YearTableComponent.ctorParameters = function () { return [
        { type: DateHelperService }
    ]; };
    return YearTableComponent;
}(AbstractTable));
export { YearTableComponent };
if (false) {
    /** @type {?} */
    YearTableComponent.prototype.MAX_ROW;
    /** @type {?} */
    YearTableComponent.prototype.MAX_COL;
    /**
     * @type {?}
     * @private
     */
    YearTableComponent.prototype.dateHelper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyLyIsInNvdXJjZXMiOlsibGliL3llYXItdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUE0QixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoSCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHakQ7SUFRd0Msc0NBQWE7SUFJbkQsNEJBQW9CLFVBQTZCO1FBQWpELFlBQ0UsaUJBQU8sU0FDUjtRQUZtQixnQkFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFIakQsYUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLGFBQU8sR0FBRyxDQUFDLENBQUM7O0lBSVosQ0FBQzs7Ozs7SUFFRCx3Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsaUJBQU0sV0FBVyxZQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsWUFBWSxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDL0QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDOzs7O0lBRUQsd0NBQVc7OztJQUFYO1FBQ0UsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOzs7O0lBRUQseUNBQVk7OztJQUFaO1FBQUEsaUJBdUNDOztZQXRDTyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTs7WUFDMUQsU0FBUyxHQUFHLFFBQVEsQ0FBQyxLQUFHLFdBQVcsR0FBRyxFQUFJ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QyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7Z0JBakZGLFNBQVMsU0FBQztvQkFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O29CQUUvQyxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLG9rR0FBa0M7aUJBQ25DOzs7O2dCQVhRLGlCQUFpQjs7SUFzRjFCLHlCQUFDO0NBQUEsQUFsRkQsQ0FRd0MsYUFBYSxHQTBFcEQ7U0ExRVksa0JBQWtCOzs7SUFDN0IscUNBQVk7O0lBQ1oscUNBQVk7Ozs7O0lBRUEsd0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdmFsdWVGdW5jdGlvblByb3AgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQgeyBBYnN0cmFjdFRhYmxlIH0gZnJvbSAnLi9hYnN0cmFjdC10YWJsZSc7XG5pbXBvcnQgeyBEYXRlQm9keVJvdywgRGF0ZUNlbGwsIFllYXJDZWxsIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICd5ZWFyLXRhYmxlJyxcbiAgZXhwb3J0QXM6ICd5ZWFyVGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Fic3RyYWN0LXRhYmxlLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFllYXJUYWJsZUNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0VGFibGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBNQVhfUk9XID0gNDtcbiAgTUFYX0NPTCA9IDM7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XG4gICAgaWYgKGNoYW5nZXMudmFsdWUgfHwgY2hhbmdlcy5kaXNhYmxlZERhdGUgfHwgY2hhbmdlcy5hY3RpdmVEYXRlKSB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIG1ha2VIZWFkUm93KCk6IERhdGVDZWxsW10ge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIG1ha2VCb2R5Um93cygpOiBEYXRlQm9keVJvd1tdIHtcbiAgICBjb25zdCBjdXJyZW50WWVhciA9IHRoaXMuYWN0aXZlRGF0ZSAmJiB0aGlzLmFjdGl2ZURhdGUuZ2V0WWVhcigpO1xuICAgIGNvbnN0IHN0YXJ0WWVhciA9IHBhcnNlSW50KGAke2N1cnJlbnRZZWFyIC8gMTB9YCwgMTApICogMTA7XG4gICAgY29uc3QgZW5kWWVhciA9IHN0YXJ0WWVhciArIDk7XG4gICAgY29uc3QgcHJldmlvdXNZZWFyID0gc3RhcnRZZWFyIC0gMTtcblxuICAgIGNvbnN0IHllYXJzOiBEYXRlQm9keVJvd1tdID0gW107XG5cbiAgICBsZXQgeWVhclZhbHVlID0gMDtcbiAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgdGhpcy5NQVhfUk9XOyByb3dJbmRleCsrKSB7XG4gICAgICBjb25zdCByb3c6IERhdGVDZWxsW10gPSBbXTtcbiAgICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCB0aGlzLk1BWF9DT0w7IGNvbEluZGV4KyspIHtcbiAgICAgICAgY29uc3QgeWVhck51bSA9IHByZXZpb3VzWWVhciArIHllYXJWYWx1ZTtcbiAgICAgICAgY29uc3QgeWVhciA9IHRoaXMuYWN0aXZlRGF0ZS5zZXRZZWFyKHllYXJOdW0pO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5kYXRlSGVscGVyLmZvcm1hdCh5ZWFyLm5hdGl2ZURhdGUsICd5eXl5Jyk7XG4gICAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkRGF0ZSA/IHRoaXMuZGlzYWJsZWREYXRlKHllYXIubmF0aXZlRGF0ZSkgOiBmYWxzZTtcblxuICAgICAgICBjb25zdCBjZWxsOiBZZWFyQ2VsbCA9IHtcbiAgICAgICAgICB2YWx1ZTogeWVhci5uYXRpdmVEYXRlLFxuICAgICAgICAgIGlzRGlzYWJsZWQsXG4gICAgICAgICAgaXNTYW1lRGVjYWRlOiB5ZWFyTnVtID49IHN0YXJ0WWVhciAmJiB5ZWFyTnVtIDw9IGVuZFllYXIsXG4gICAgICAgICAgaXNTZWxlY3RlZDogeWVhck51bSA9PT0gKHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZS5nZXRZZWFyKCkpLFxuICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgdGl0bGU6IGNvbnRlbnQsXG4gICAgICAgICAgY2xhc3NNYXA6IHt9LFxuICAgICAgICAgIGNlbGxSZW5kZXI6IHZhbHVlRnVuY3Rpb25Qcm9wKHRoaXMuY2VsbFJlbmRlciEsIHllYXIpLCAvLyBDdXN0b21pemVkIGNvbnRlbnRcbiAgICAgICAgICBmdWxsQ2VsbFJlbmRlcjogdmFsdWVGdW5jdGlvblByb3AodGhpcy5mdWxsQ2VsbFJlbmRlciEsIHllYXIpLFxuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuY2hvb3NlWWVhcihjZWxsLnZhbHVlLmdldEZ1bGxZZWFyKCkpLCAvLyBkb24ndCB1c2UgeWVhclZhbHVlIGhlcmUsXG4gICAgICAgICAgb25Nb3VzZUVudGVyOiAoKSA9PiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgY2VsbC5jbGFzc01hcCA9IHRoaXMuZ2V0Q2xhc3NNYXAoY2VsbCk7XG5cbiAgICAgICAgcm93LnB1c2goY2VsbCk7XG4gICAgICAgIHllYXJWYWx1ZSsrO1xuICAgICAgfVxuICAgICAgeWVhcnMucHVzaCh7IGRhdGVDZWxsczogcm93IH0pO1xuICAgIH1cbiAgICByZXR1cm4geWVhcnM7XG4gIH1cblxuICBnZXRDbGFzc01hcChjZWxsOiBZZWFyQ2VsbCk6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jZWxsYF06IHRydWUsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNlbGwtaW4tdmlld2BdOiAhIWNlbGwuaXNTYW1lRGVjYWRlLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jZWxsLXNlbGVjdGVkYF06IGNlbGwuaXNTZWxlY3RlZCxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2VsbC1kaXNhYmxlZGBdOiBjZWxsLmlzRGlzYWJsZWRcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBjaG9vc2VZZWFyKHllYXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmFjdGl2ZURhdGUuc2V0WWVhcih5ZWFyKTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxufVxuIl19