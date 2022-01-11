/**
 * @fileoverview added by tsickle
 * Generated from: space.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { NzSpaceItemComponent } from './space-item.component';
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'space';
var NzSpaceComponent = /** @class */ (function () {
    function NzSpaceComponent(nzConfigService) {
        this.nzConfigService = nzConfigService;
        this.nzDirection = 'horizontal';
        this.nzSize = 'small';
        this.destroy$ = new Subject();
    }
    /**
     * @private
     * @return {?}
     */
    NzSpaceComponent.prototype.updateSpaceItems = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.nzSpaceItemComponents) {
            this.nzSpaceItemComponents.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                item.setDirectionAndSize(_this.nzDirection, _this.nzSize);
            }));
        }
    };
    /**
     * @return {?}
     */
    NzSpaceComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.updateSpaceItems();
    };
    /**
     * @return {?}
     */
    NzSpaceComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @return {?}
     */
    NzSpaceComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzSpaceItemComponents.changes.pipe(startWith(null), takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.updateSpaceItems();
        }));
    };
    NzSpaceComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-space',
                    exportAs: 'NzSpace',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: " <ng-content></ng-content> ",
                    host: {
                        class: 'ant-space',
                        '[class.ant-space-horizontal]': 'nzDirection === "horizontal"',
                        '[class.ant-space-vertical]': 'nzDirection === "vertical"'
                    }
                }] }
    ];
    /** @nocollapse */
    NzSpaceComponent.ctorParameters = function () { return [
        { type: NzConfigService }
    ]; };
    NzSpaceComponent.propDecorators = {
        nzDirection: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzSpaceItemComponents: [{ type: ContentChildren, args: [NzSpaceItemComponent,] }]
    };
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", Object)
    ], NzSpaceComponent.prototype, "nzSize", void 0);
    return NzSpaceComponent;
}());
export { NzSpaceComponent };
if (false) {
    /** @type {?} */
    NzSpaceComponent.prototype.nzDirection;
    /** @type {?} */
    NzSpaceComponent.prototype.nzSize;
    /** @type {?} */
    NzSpaceComponent.prototype.nzSpaceItemComponents;
    /**
     * @type {?}
     * @private
     */
    NzSpaceComponent.prototype.destroy$;
    /** @type {?} */
    NzSpaceComponent.prototype.nzConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9zcGFjZS8iLCJzb3VyY2VzIjpbInNwYWNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFpQix1QkFBdUIsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBd0IsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNJLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFeEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztJQUd4RCx3QkFBd0IsR0FBRyxPQUFPO0FBRXhDO0lBbUJFLDBCQUFtQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFQMUMsZ0JBQVcsR0FBcUIsWUFBWSxDQUFDO1FBQ1AsV0FBTSxHQUF5QixPQUFPLENBQUM7UUFJOUUsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFFcUIsQ0FBQzs7Ozs7SUFFL0MsMkNBQWdCOzs7O0lBQXhCO1FBQUEsaUJBTUM7UUFMQyxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUM5QixJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsSUFBSTtnQkFDckMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFELENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBRUQsc0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELHNDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsMENBQWU7OztJQUFmO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7OztRQUFDO1lBQzNGLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBMUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUsNkJBQTZCO29CQUN2QyxJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLFdBQVc7d0JBQ2xCLDhCQUE4QixFQUFFLDhCQUE4Qjt3QkFDOUQsNEJBQTRCLEVBQUUsNEJBQTRCO3FCQUMzRDtpQkFDRjs7OztnQkFwQlEsZUFBZTs7OzhCQXNCckIsS0FBSzt5QkFDTCxLQUFLO3dDQUVMLGVBQWUsU0FBQyxvQkFBb0I7O0lBRlU7UUFBckMsVUFBVSxDQUFDLHdCQUF3QixDQUFDOztvREFBd0M7SUE4QnhGLHVCQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7U0FoQ1ksZ0JBQWdCOzs7SUFDM0IsdUNBQXNEOztJQUN0RCxrQ0FBc0Y7O0lBRXRGLGlEQUErRjs7Ozs7SUFFL0Ysb0NBQWlDOztJQUVyQiwyQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE56U3BhY2VJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9zcGFjZS1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelNwYWNlRGlyZWN0aW9uLCBOelNwYWNlU2l6ZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnc3BhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1zcGFjZScsXG4gIGV4cG9ydEFzOiAnTnpTcGFjZScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FudC1zcGFjZScsXG4gICAgJ1tjbGFzcy5hbnQtc3BhY2UtaG9yaXpvbnRhbF0nOiAnbnpEaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiJyxcbiAgICAnW2NsYXNzLmFudC1zcGFjZS12ZXJ0aWNhbF0nOiAnbnpEaXJlY3Rpb24gPT09IFwidmVydGljYWxcIidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelNwYWNlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBuekRpcmVjdGlvbjogTnpTcGFjZURpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBuelNpemU6IG51bWJlciB8IE56U3BhY2VTaXplID0gJ3NtYWxsJztcblxuICBAQ29udGVudENoaWxkcmVuKE56U3BhY2VJdGVtQ29tcG9uZW50KSBuelNwYWNlSXRlbUNvbXBvbmVudHMhOiBRdWVyeUxpc3Q8TnpTcGFjZUl0ZW1Db21wb25lbnQ+O1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSkge31cblxuICBwcml2YXRlIHVwZGF0ZVNwYWNlSXRlbXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpTcGFjZUl0ZW1Db21wb25lbnRzKSB7XG4gICAgICB0aGlzLm56U3BhY2VJdGVtQ29tcG9uZW50cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLnNldERpcmVjdGlvbkFuZFNpemUodGhpcy5uekRpcmVjdGlvbiwgdGhpcy5uelNpemUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVTcGFjZUl0ZW1zKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uelNwYWNlSXRlbUNvbXBvbmVudHMuY2hhbmdlcy5waXBlKHN0YXJ0V2l0aChudWxsKSwgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVTcGFjZUl0ZW1zKCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==