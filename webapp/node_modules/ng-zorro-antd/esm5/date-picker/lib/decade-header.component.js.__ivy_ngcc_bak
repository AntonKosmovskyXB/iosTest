/**
 * @fileoverview added by tsickle
 * Generated from: lib/decade-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AbstractPanelHeader } from './abstract-panel-header';
var DecadeHeaderComponent = /** @class */ (function (_super) {
    __extends(DecadeHeaderComponent, _super);
    function DecadeHeaderComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    DecadeHeaderComponent.prototype.previous = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    DecadeHeaderComponent.prototype.next = /**
     * @return {?}
     */
    function () { };
    Object.defineProperty(DecadeHeaderComponent.prototype, "startYear", {
        get: /**
         * @return {?}
         */
        function () {
            return parseInt("" + this.value.getYear() / 100, 10) * 100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecadeHeaderComponent.prototype, "endYear", {
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
    DecadeHeaderComponent.prototype.superPrevious = /**
     * @return {?}
     */
    function () {
        this.changeValue(this.value.addYears(-100));
    };
    /**
     * @return {?}
     */
    DecadeHeaderComponent.prototype.superNext = /**
     * @return {?}
     */
    function () {
        this.changeValue(this.value.addYears(100));
    };
    /**
     * @return {?}
     */
    DecadeHeaderComponent.prototype.getSelectors = /**
     * @return {?}
     */
    function () {
        return [
            {
                className: this.prefixCls + "-decade-btn",
                title: '',
                onClick: (/**
                 * @return {?}
                 */
                function () {
                    // noop
                }),
                label: this.startYear + "-" + this.endYear
            }
        ];
    };
    DecadeHeaderComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'decade-header',
                    // tslint:disable-line:component-selector
                    exportAs: 'decadeHeader',
                    template: "<div class=\"{{ prefixCls }}\">\n  <button\n    [style.visibility]=\"showSuperPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-prev-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superPreviousTitle() }}\"\n    (click)=\"superPrevious()\"\n  >\n    <span class=\"ant-picker-super-prev-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-prev-btn\"\n    role=\"button\"\n    title=\"{{ previousTitle() }}\"\n    tabindex=\"-1\"\n    (click)=\"previous()\"\n  >\n    <span class=\"ant-picker-prev-icon\"></span>\n  </button>\n\n  <div class=\"{{ prefixCls }}-view\">\n    <ng-container *ngFor=\"let selector of selectors\">\n      <button\n        class=\"{{ selector.className }}\"\n        role=\"button\"\n        type=\"button\"\n        title=\"{{ selector.title || null }}\"\n        (click)=\"selector.onClick()\"\n      >\n        {{ selector.label }}\n      </button>\n    </ng-container>\n  </div>\n  <button\n    [style.visibility]=\"showNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ nextTitle() }}\"\n    (click)=\"next()\"\n  >\n    <span class=\"ant-picker-next-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showSuperNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superNextTitle() }}\"\n    (click)=\"superNext()\"\n  >\n    <span class=\"ant-picker-super-next-icon\"></span>\n  </button>\n</div>\n"
                }] }
    ];
    return DecadeHeaderComponent;
}(AbstractPanelHeader));
export { DecadeHeaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjYWRlLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2RlY2FkZS1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRzlEO0lBTzJDLHlDQUFtQjtJQVA5RDs7SUF1Q0EsQ0FBQzs7OztJQS9CQyx3Q0FBUTs7O0lBQVIsY0FBa0IsQ0FBQzs7OztJQUNuQixvQ0FBSTs7O0lBQUosY0FBYyxDQUFDO0lBRWYsc0JBQUksNENBQVM7Ozs7UUFBYjtZQUNFLE9BQU8sUUFBUSxDQUFDLEtBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdELENBQUM7OztPQUFBO0lBRUQsc0JBQUksMENBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7Ozs7SUFFRCw2Q0FBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7O0lBRUQseUNBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFRCw0Q0FBWTs7O0lBQVo7UUFDRSxPQUFPO1lBQ0w7Z0JBQ0UsU0FBUyxFQUFLLElBQUksQ0FBQyxTQUFTLGdCQUFhO2dCQUN6QyxLQUFLLEVBQUUsRUFBRTtnQkFDVCxPQUFPOzs7Z0JBQUU7b0JBQ1AsT0FBTztnQkFDVCxDQUFDLENBQUE7Z0JBQ0QsS0FBSyxFQUFLLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLE9BQVM7YUFDM0M7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBdENGLFNBQVMsU0FBQztvQkFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSxlQUFlOztvQkFDekIsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLDRsREFBMkM7aUJBQzVDOztJQWlDRCw0QkFBQztDQUFBLEFBdkNELENBTzJDLG1CQUFtQixHQWdDN0Q7U0FoQ1kscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0UGFuZWxIZWFkZXIgfSBmcm9tICcuL2Fic3RyYWN0LXBhbmVsLWhlYWRlcic7XG5pbXBvcnQgeyBQYW5lbFNlbGVjdG9yIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHNlbGVjdG9yOiAnZGVjYWRlLWhlYWRlcicsIC8vIHRzbGludDpkaXNhYmxlLWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIGV4cG9ydEFzOiAnZGVjYWRlSGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Fic3RyYWN0LXBhbmVsLWhlYWRlci5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEZWNhZGVIZWFkZXJDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdFBhbmVsSGVhZGVyIHtcbiAgcHJldmlvdXMoKTogdm9pZCB7fVxuICBuZXh0KCk6IHZvaWQge31cblxuICBnZXQgc3RhcnRZZWFyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGAke3RoaXMudmFsdWUuZ2V0WWVhcigpIC8gMTAwfWAsIDEwKSAqIDEwMDtcbiAgfVxuXG4gIGdldCBlbmRZZWFyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnRZZWFyICsgOTk7XG4gIH1cblxuICBzdXBlclByZXZpb3VzKCk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy52YWx1ZS5hZGRZZWFycygtMTAwKSk7XG4gIH1cblxuICBzdXBlck5leHQoKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLnZhbHVlLmFkZFllYXJzKDEwMCkpO1xuICB9XG5cbiAgZ2V0U2VsZWN0b3JzKCk6IFBhbmVsU2VsZWN0b3JbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiBgJHt0aGlzLnByZWZpeENsc30tZGVjYWRlLWJ0bmAsXG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgIC8vIG5vb3BcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWw6IGAke3RoaXMuc3RhcnRZZWFyfS0ke3RoaXMuZW5kWWVhcn1gXG4gICAgICB9XG4gICAgXTtcbiAgfVxufVxuIl19