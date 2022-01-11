/**
 * @fileoverview added by tsickle
 * Generated from: lib/date-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { DateHelperService } from 'ng-zorro-antd/i18n';
import { AbstractPanelHeader } from './abstract-panel-header';
import { transCompatFormat } from './util';
var DateHeaderComponent = /** @class */ (function (_super) {
    __extends(DateHeaderComponent, _super);
    function DateHeaderComponent(dateHelper) {
        var _this = _super.call(this) || this;
        _this.dateHelper = dateHelper;
        return _this;
    }
    /**
     * @return {?}
     */
    DateHeaderComponent.prototype.getSelectors = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return [
            {
                className: this.prefixCls + "-year-btn",
                title: this.locale.yearSelect,
                onClick: (/**
                 * @return {?}
                 */
                function () { return _this.changeMode('year'); }),
                label: this.dateHelper.format(this.value.nativeDate, transCompatFormat(this.locale.yearFormat))
            },
            {
                className: this.prefixCls + "-month-btn",
                title: this.locale.monthSelect,
                onClick: (/**
                 * @return {?}
                 */
                function () { return _this.changeMode('month'); }),
                label: this.dateHelper.format(this.value.nativeDate, this.locale.monthFormat || 'MMM')
            }
        ];
    };
    DateHeaderComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'date-header',
                    // tslint:disable-line:component-selector
                    exportAs: 'dateHeader',
                    template: "<div class=\"{{ prefixCls }}\">\n  <button\n    [style.visibility]=\"showSuperPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-prev-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superPreviousTitle() }}\"\n    (click)=\"superPrevious()\"\n  >\n    <span class=\"ant-picker-super-prev-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-prev-btn\"\n    role=\"button\"\n    title=\"{{ previousTitle() }}\"\n    tabindex=\"-1\"\n    (click)=\"previous()\"\n  >\n    <span class=\"ant-picker-prev-icon\"></span>\n  </button>\n\n  <div class=\"{{ prefixCls }}-view\">\n    <ng-container *ngFor=\"let selector of selectors\">\n      <button\n        class=\"{{ selector.className }}\"\n        role=\"button\"\n        type=\"button\"\n        title=\"{{ selector.title || null }}\"\n        (click)=\"selector.onClick()\"\n      >\n        {{ selector.label }}\n      </button>\n    </ng-container>\n  </div>\n  <button\n    [style.visibility]=\"showNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ nextTitle() }}\"\n    (click)=\"next()\"\n  >\n    <span class=\"ant-picker-next-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showSuperNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superNextTitle() }}\"\n    (click)=\"superNext()\"\n  >\n    <span class=\"ant-picker-super-next-icon\"></span>\n  </button>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    DateHeaderComponent.ctorParameters = function () { return [
        { type: DateHelperService }
    ]; };
    return DateHeaderComponent;
}(AbstractPanelHeader));
export { DateHeaderComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DateHeaderComponent.prototype.dateHelper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9kYXRlLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRTNDO0lBT3lDLHVDQUFtQjtJQUMxRCw2QkFBb0IsVUFBNkI7UUFBakQsWUFDRSxpQkFBTyxTQUNSO1FBRm1CLGdCQUFVLEdBQVYsVUFBVSxDQUFtQjs7SUFFakQsQ0FBQzs7OztJQUVELDBDQUFZOzs7SUFBWjtRQUFBLGlCQWVDO1FBZEMsT0FBTztZQUNMO2dCQUNFLFNBQVMsRUFBSyxJQUFJLENBQUMsU0FBUyxjQUFXO2dCQUN2QyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVO2dCQUM3QixPQUFPOzs7Z0JBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQXZCLENBQXVCLENBQUE7Z0JBQ3RDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ2hHO1lBQ0Q7Z0JBQ0UsU0FBUyxFQUFLLElBQUksQ0FBQyxTQUFTLGVBQVk7Z0JBQ3hDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVc7Z0JBQzlCLE9BQU87OztnQkFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQTtnQkFDdkMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQzthQUN2RjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkEzQkYsU0FBUyxTQUFDO29CQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsUUFBUSxFQUFFLGFBQWE7O29CQUN2QixRQUFRLEVBQUUsWUFBWTtvQkFDdEIsNGxEQUEyQztpQkFDNUM7Ozs7Z0JBWFEsaUJBQWlCOztJQWlDMUIsMEJBQUM7Q0FBQSxBQTVCRCxDQU95QyxtQkFBbUIsR0FxQjNEO1NBckJZLG1CQUFtQjs7Ozs7O0lBQ2xCLHlDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcbmltcG9ydCB7IEFic3RyYWN0UGFuZWxIZWFkZXIgfSBmcm9tICcuL2Fic3RyYWN0LXBhbmVsLWhlYWRlcic7XG5pbXBvcnQgeyBQYW5lbFNlbGVjdG9yIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgdHJhbnNDb21wYXRGb3JtYXQgfSBmcm9tICcuL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHNlbGVjdG9yOiAnZGF0ZS1oZWFkZXInLCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBleHBvcnRBczogJ2RhdGVIZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYWJzdHJhY3QtcGFuZWwtaGVhZGVyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIERhdGVIZWFkZXJDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdFBhbmVsSGVhZGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBnZXRTZWxlY3RvcnMoKTogUGFuZWxTZWxlY3RvcltdIHtcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6IGAke3RoaXMucHJlZml4Q2xzfS15ZWFyLWJ0bmAsXG4gICAgICAgIHRpdGxlOiB0aGlzLmxvY2FsZS55ZWFyU2VsZWN0LFxuICAgICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLmNoYW5nZU1vZGUoJ3llYXInKSxcbiAgICAgICAgbGFiZWw6IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQodGhpcy52YWx1ZS5uYXRpdmVEYXRlLCB0cmFuc0NvbXBhdEZvcm1hdCh0aGlzLmxvY2FsZS55ZWFyRm9ybWF0KSlcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogYCR7dGhpcy5wcmVmaXhDbHN9LW1vbnRoLWJ0bmAsXG4gICAgICAgIHRpdGxlOiB0aGlzLmxvY2FsZS5tb250aFNlbGVjdCxcbiAgICAgICAgb25DbGljazogKCkgPT4gdGhpcy5jaGFuZ2VNb2RlKCdtb250aCcpLFxuICAgICAgICBsYWJlbDogdGhpcy5kYXRlSGVscGVyLmZvcm1hdCh0aGlzLnZhbHVlLm5hdGl2ZURhdGUsIHRoaXMubG9jYWxlLm1vbnRoRm9ybWF0IHx8ICdNTU0nKVxuICAgICAgfVxuICAgIF07XG4gIH1cbn1cbiJdfQ==