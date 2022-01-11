/**
 * @fileoverview added by tsickle
 * Generated from: card.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, Input, QueryList, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzCardGridDirective } from './card-grid.directive';
import { NzCardTabComponent } from './card-tab.component';
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'card';
var NzCardComponent = /** @class */ (function () {
    function NzCardComponent(nzConfigService, cdr) {
        var _this = this;
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.nzBordered = true;
        this.nzLoading = false;
        this.nzHoverable = false;
        this.nzBodyStyle = null;
        this.nzActions = [];
        this.nzType = null;
        this.nzSize = 'default';
        this.destroy$ = new Subject();
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    NzCardComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-card',
                    exportAs: 'nzCard',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "\n    <div class=\"ant-card-head\" *ngIf=\"nzTitle || nzExtra || listOfNzCardTabComponent\">\n      <div class=\"ant-card-head-wrapper\">\n        <div class=\"ant-card-head-title\" *ngIf=\"nzTitle\">\n          <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n        </div>\n        <div class=\"ant-card-extra\" *ngIf=\"nzExtra\">\n          <ng-container *nzStringTemplateOutlet=\"nzExtra\">{{ nzExtra }}</ng-container>\n        </div>\n      </div>\n      <ng-container *ngIf=\"listOfNzCardTabComponent\">\n        <ng-template [ngTemplateOutlet]=\"listOfNzCardTabComponent.template\"></ng-template>\n      </ng-container>\n    </div>\n    <div class=\"ant-card-cover\" *ngIf=\"nzCover\">\n      <ng-template [ngTemplateOutlet]=\"nzCover\"></ng-template>\n    </div>\n    <div class=\"ant-card-body\" [ngStyle]=\"nzBodyStyle\">\n      <ng-container *ngIf=\"!nzLoading; else loadingTemplate\">\n        <ng-content></ng-content>\n      </ng-container>\n      <ng-template #loadingTemplate>\n        <nz-card-loading></nz-card-loading>\n      </ng-template>\n    </div>\n    <ul class=\"ant-card-actions\" *ngIf=\"nzActions.length\">\n      <li *ngFor=\"let action of nzActions\" [style.width.%]=\"100 / nzActions.length\">\n        <span><ng-template [ngTemplateOutlet]=\"action\"></ng-template></span>\n      </li>\n    </ul>\n  ",
                    host: {
                        '[class.ant-card]': 'true',
                        '[class.ant-card-loading]': 'nzLoading',
                        '[class.ant-card-bordered]': 'nzBordered',
                        '[class.ant-card-hoverable]': 'nzHoverable',
                        '[class.ant-card-small]': 'nzSize === "small"',
                        '[class.ant-card-contain-grid]': 'listOfNzCardGridDirective && listOfNzCardGridDirective.length',
                        '[class.ant-card-type-inner]': 'nzType === "inner"',
                        '[class.ant-card-contain-tabs]': '!!listOfNzCardTabComponent'
                    }
                }] }
    ];
    /** @nocollapse */
    NzCardComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: ChangeDetectorRef }
    ]; };
    NzCardComponent.propDecorators = {
        nzBordered: [{ type: Input }],
        nzLoading: [{ type: Input }],
        nzHoverable: [{ type: Input }],
        nzBodyStyle: [{ type: Input }],
        nzCover: [{ type: Input }],
        nzActions: [{ type: Input }],
        nzType: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzExtra: [{ type: Input }],
        listOfNzCardTabComponent: [{ type: ContentChild, args: [NzCardTabComponent, { static: false },] }],
        listOfNzCardGridDirective: [{ type: ContentChildren, args: [NzCardGridDirective,] }]
    };
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzCardComponent.prototype, "nzBordered", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzCardComponent.prototype, "nzLoading", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzCardComponent.prototype, "nzHoverable", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", String)
    ], NzCardComponent.prototype, "nzSize", void 0);
    return NzCardComponent;
}());
export { NzCardComponent };
if (false) {
    /** @type {?} */
    NzCardComponent.ngAcceptInputType_nzBordered;
    /** @type {?} */
    NzCardComponent.ngAcceptInputType_nzLoading;
    /** @type {?} */
    NzCardComponent.ngAcceptInputType_nzHoverable;
    /** @type {?} */
    NzCardComponent.prototype.nzBordered;
    /** @type {?} */
    NzCardComponent.prototype.nzLoading;
    /** @type {?} */
    NzCardComponent.prototype.nzHoverable;
    /** @type {?} */
    NzCardComponent.prototype.nzBodyStyle;
    /** @type {?} */
    NzCardComponent.prototype.nzCover;
    /** @type {?} */
    NzCardComponent.prototype.nzActions;
    /** @type {?} */
    NzCardComponent.prototype.nzType;
    /** @type {?} */
    NzCardComponent.prototype.nzSize;
    /** @type {?} */
    NzCardComponent.prototype.nzTitle;
    /** @type {?} */
    NzCardComponent.prototype.nzExtra;
    /** @type {?} */
    NzCardComponent.prototype.listOfNzCardTabComponent;
    /** @type {?} */
    NzCardComponent.prototype.listOfNzCardGridDirective;
    /**
     * @type {?}
     * @private
     */
    NzCardComponent.prototype.destroy$;
    /** @type {?} */
    NzCardComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzCardComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NhcmQvIiwic291cmNlcyI6WyJjYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixlQUFlLEVBQ2YsS0FBSyxFQUVMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztJQUVwRCx3QkFBd0IsR0FBRyxNQUFNO0FBRXZDO0lBbUVFLHlCQUFtQixlQUFnQyxFQUFVLEdBQXNCO1FBQW5GLGlCQU9DO1FBUGtCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBZHBCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFDakUsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNvQixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUNuRixnQkFBVyxHQUE0QixJQUFJLENBQUM7UUFFNUMsY0FBUyxHQUE2QixFQUFFLENBQUM7UUFDekMsV0FBTSxHQUE0QixJQUFJLENBQUM7UUFDRCxXQUFNLEdBQWlCLFNBQVMsQ0FBQztRQUt4RSxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUcvQixJQUFJLENBQUMsZUFBZTthQUNqQixnQ0FBZ0MsQ0FBQyx3QkFBd0IsQ0FBQzthQUMxRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTOzs7UUFBQztZQUNULEtBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBQ0QscUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7O2dCQTlFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSxRQUFRO29CQUNsQixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFFBQVEsRUFBRSx1MUNBOEJUO29CQUNELElBQUksRUFBRTt3QkFDSixrQkFBa0IsRUFBRSxNQUFNO3dCQUMxQiwwQkFBMEIsRUFBRSxXQUFXO3dCQUN2QywyQkFBMkIsRUFBRSxZQUFZO3dCQUN6Qyw0QkFBNEIsRUFBRSxhQUFhO3dCQUMzQyx3QkFBd0IsRUFBRSxvQkFBb0I7d0JBQzlDLCtCQUErQixFQUFFLCtEQUErRDt3QkFDaEcsNkJBQTZCLEVBQUUsb0JBQW9CO3dCQUNuRCwrQkFBK0IsRUFBRSw0QkFBNEI7cUJBQzlEO2lCQUNGOzs7O2dCQXpEUSxlQUFlO2dCQVZ0QixpQkFBaUI7Ozs2QkF5RWhCLEtBQUs7NEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzhCQUNMLEtBQUs7MEJBQ0wsS0FBSzs0QkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7MkNBQ0wsWUFBWSxTQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs0Q0FDbEQsZUFBZSxTQUFDLG1CQUFtQjs7SUFYMkI7UUFBckQsVUFBVSxDQUFDLHdCQUF3QixDQUFDLEVBQUUsWUFBWSxFQUFFOzt1REFBNEI7SUFDakU7UUFBZixZQUFZLEVBQUU7O3NEQUFtQjtJQUNvQjtRQUFyRCxVQUFVLENBQUMsd0JBQXdCLENBQUMsRUFBRSxZQUFZLEVBQUU7O3dEQUE4QjtJQUs3QztRQUFyQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7O21EQUFrQztJQW1CbEYsc0JBQUM7Q0FBQSxBQS9FRCxJQStFQztTQS9CWSxlQUFlOzs7SUFDMUIsNkNBQWtEOztJQUNsRCw0Q0FBaUQ7O0lBQ2pELDhDQUFtRDs7SUFFbkQscUNBQTBGOztJQUMxRixvQ0FBMkM7O0lBQzNDLHNDQUE0Rjs7SUFDNUYsc0NBQXFEOztJQUNyRCxrQ0FBcUM7O0lBQ3JDLG9DQUFrRDs7SUFDbEQsaUNBQWdEOztJQUNoRCxpQ0FBZ0Y7O0lBQ2hGLGtDQUE4Qzs7SUFDOUMsa0NBQThDOztJQUM5QyxtREFBbUc7O0lBQ25HLG9EQUFpRzs7Ozs7SUFDakcsbUNBQWlDOztJQUVyQiwwQ0FBdUM7Ozs7O0lBQUUsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBRdWVyeUxpc3QsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOZ1N0eWxlSW50ZXJmYWNlLCBOelNpemVEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnpDYXJkR3JpZERpcmVjdGl2ZSB9IGZyb20gJy4vY2FyZC1ncmlkLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOekNhcmRUYWJDb21wb25lbnQgfSBmcm9tICcuL2NhcmQtdGFiLmNvbXBvbmVudCc7XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdjYXJkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotY2FyZCcsXG4gIGV4cG9ydEFzOiAnbnpDYXJkJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJhbnQtY2FyZC1oZWFkXCIgKm5nSWY9XCJuelRpdGxlIHx8IG56RXh0cmEgfHwgbGlzdE9mTnpDYXJkVGFiQ29tcG9uZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWNhcmQtaGVhZC13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtY2FyZC1oZWFkLXRpdGxlXCIgKm5nSWY9XCJuelRpdGxlXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56VGl0bGVcIj57eyBuelRpdGxlIH19PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LWNhcmQtZXh0cmFcIiAqbmdJZj1cIm56RXh0cmFcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpFeHRyYVwiPnt7IG56RXh0cmEgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsaXN0T2ZOekNhcmRUYWJDb21wb25lbnRcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImxpc3RPZk56Q2FyZFRhYkNvbXBvbmVudC50ZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYW50LWNhcmQtY292ZXJcIiAqbmdJZj1cIm56Q292ZXJcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJuekNvdmVyXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYW50LWNhcmQtYm9keVwiIFtuZ1N0eWxlXT1cIm56Qm9keVN0eWxlXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIW56TG9hZGluZzsgZWxzZSBsb2FkaW5nVGVtcGxhdGVcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctdGVtcGxhdGUgI2xvYWRpbmdUZW1wbGF0ZT5cbiAgICAgICAgPG56LWNhcmQtbG9hZGluZz48L256LWNhcmQtbG9hZGluZz5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gICAgPHVsIGNsYXNzPVwiYW50LWNhcmQtYWN0aW9uc1wiICpuZ0lmPVwibnpBY3Rpb25zLmxlbmd0aFwiPlxuICAgICAgPGxpICpuZ0Zvcj1cImxldCBhY3Rpb24gb2YgbnpBY3Rpb25zXCIgW3N0eWxlLndpZHRoLiVdPVwiMTAwIC8gbnpBY3Rpb25zLmxlbmd0aFwiPlxuICAgICAgICA8c3Bhbj48bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYWN0aW9uXCI+PC9uZy10ZW1wbGF0ZT48L3NwYW4+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1jYXJkXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmFudC1jYXJkLWxvYWRpbmddJzogJ256TG9hZGluZycsXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1ib3JkZXJlZF0nOiAnbnpCb3JkZXJlZCcsXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1ob3ZlcmFibGVdJzogJ256SG92ZXJhYmxlJyxcbiAgICAnW2NsYXNzLmFudC1jYXJkLXNtYWxsXSc6ICduelNpemUgPT09IFwic21hbGxcIicsXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1jb250YWluLWdyaWRdJzogJ2xpc3RPZk56Q2FyZEdyaWREaXJlY3RpdmUgJiYgbGlzdE9mTnpDYXJkR3JpZERpcmVjdGl2ZS5sZW5ndGgnLFxuICAgICdbY2xhc3MuYW50LWNhcmQtdHlwZS1pbm5lcl0nOiAnbnpUeXBlID09PSBcImlubmVyXCInLFxuICAgICdbY2xhc3MuYW50LWNhcmQtY29udGFpbi10YWJzXSc6ICchIWxpc3RPZk56Q2FyZFRhYkNvbXBvbmVudCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekNhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpCb3JkZXJlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpMb2FkaW5nOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekhvdmVyYWJsZTogQm9vbGVhbklucHV0O1xuXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgQElucHV0Qm9vbGVhbigpIG56Qm9yZGVyZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpMb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgQElucHV0Qm9vbGVhbigpIG56SG92ZXJhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56Qm9keVN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56Q292ZXI/OiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpBY3Rpb25zOiBBcnJheTxUZW1wbGF0ZVJlZjx2b2lkPj4gPSBbXTtcbiAgQElucHV0KCkgbnpUeXBlOiBzdHJpbmcgfCAnaW5uZXInIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgbnpTaXplOiBOelNpemVEU1R5cGUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIG56VGl0bGU/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpFeHRyYT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBAQ29udGVudENoaWxkKE56Q2FyZFRhYkNvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIGxpc3RPZk56Q2FyZFRhYkNvbXBvbmVudD86IE56Q2FyZFRhYkNvbXBvbmVudDtcbiAgQENvbnRlbnRDaGlsZHJlbihOekNhcmRHcmlkRGlyZWN0aXZlKSBsaXN0T2ZOekNhcmRHcmlkRGlyZWN0aXZlITogUXVlcnlMaXN0PE56Q2FyZEdyaWREaXJlY3RpdmU+O1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlXG4gICAgICAuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=