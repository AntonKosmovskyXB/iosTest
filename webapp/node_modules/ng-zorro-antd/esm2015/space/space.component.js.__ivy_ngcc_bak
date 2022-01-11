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
const NZ_CONFIG_COMPONENT_NAME = 'space';
export class NzSpaceComponent {
    /**
     * @param {?} nzConfigService
     */
    constructor(nzConfigService) {
        this.nzConfigService = nzConfigService;
        this.nzDirection = 'horizontal';
        this.nzSize = 'small';
        this.destroy$ = new Subject();
    }
    /**
     * @private
     * @return {?}
     */
    updateSpaceItems() {
        if (this.nzSpaceItemComponents) {
            this.nzSpaceItemComponents.forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                item.setDirectionAndSize(this.nzDirection, this.nzSize);
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.updateSpaceItems();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.nzSpaceItemComponents.changes.pipe(startWith(null), takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.updateSpaceItems();
        }));
    }
}
NzSpaceComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-space',
                exportAs: 'NzSpace',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ` <ng-content></ng-content> `,
                host: {
                    class: 'ant-space',
                    '[class.ant-space-horizontal]': 'nzDirection === "horizontal"',
                    '[class.ant-space-vertical]': 'nzDirection === "vertical"'
                }
            }] }
];
/** @nocollapse */
NzSpaceComponent.ctorParameters = () => [
    { type: NzConfigService }
];
NzSpaceComponent.propDecorators = {
    nzDirection: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzSpaceItemComponents: [{ type: ContentChildren, args: [NzSpaceItemComponent,] }]
};
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    __metadata("design:type", Object)
], NzSpaceComponent.prototype, "nzSize", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9zcGFjZS8iLCJzb3VyY2VzIjpbInNwYWNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFpQix1QkFBdUIsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBd0IsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNJLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFeEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztNQUd4RCx3QkFBd0IsR0FBRyxPQUFPO0FBYXhDLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFRM0IsWUFBbUIsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBUDFDLGdCQUFXLEdBQXFCLFlBQVksQ0FBQztRQUNQLFdBQU0sR0FBeUIsT0FBTyxDQUFDO1FBSTlFLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBRXFCLENBQUM7Ozs7O0lBRS9DLGdCQUFnQjtRQUN0QixJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUM5QixJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTzs7OztZQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN4QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUQsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUNoRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQTFDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxXQUFXO29CQUNsQiw4QkFBOEIsRUFBRSw4QkFBOEI7b0JBQzlELDRCQUE0QixFQUFFLDRCQUE0QjtpQkFDM0Q7YUFDRjs7OztZQXBCUSxlQUFlOzs7MEJBc0JyQixLQUFLO3FCQUNMLEtBQUs7b0NBRUwsZUFBZSxTQUFDLG9CQUFvQjs7QUFGVTtJQUFyQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7O2dEQUF3Qzs7O0lBRHRGLHVDQUFzRDs7SUFDdEQsa0NBQXNGOztJQUV0RixpREFBK0Y7Ozs7O0lBRS9GLG9DQUFpQzs7SUFFckIsMkNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOelNwYWNlSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vc3BhY2UtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpTcGFjZURpcmVjdGlvbiwgTnpTcGFjZVNpemUgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ3NwYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotc3BhY2UnLFxuICBleHBvcnRBczogJ056U3BhY2UnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhbnQtc3BhY2UnLFxuICAgICdbY2xhc3MuYW50LXNwYWNlLWhvcml6b250YWxdJzogJ256RGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIicsXG4gICAgJ1tjbGFzcy5hbnQtc3BhY2UtdmVydGljYWxdJzogJ256RGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCInXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpTcGFjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgbnpEaXJlY3Rpb246IE56U3BhY2VEaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgbnpTaXplOiBudW1iZXIgfCBOelNwYWNlU2l6ZSA9ICdzbWFsbCc7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihOelNwYWNlSXRlbUNvbXBvbmVudCkgbnpTcGFjZUl0ZW1Db21wb25lbnRzITogUXVlcnlMaXN0PE56U3BhY2VJdGVtQ29tcG9uZW50PjtcblxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UpIHt9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTcGFjZUl0ZW1zKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56U3BhY2VJdGVtQ29tcG9uZW50cykge1xuICAgICAgdGhpcy5uelNwYWNlSXRlbUNvbXBvbmVudHMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5zZXREaXJlY3Rpb25BbmRTaXplKHRoaXMubnpEaXJlY3Rpb24sIHRoaXMubnpTaXplKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlU3BhY2VJdGVtcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMubnpTcGFjZUl0ZW1Db21wb25lbnRzLmNoYW5nZXMucGlwZShzdGFydFdpdGgobnVsbCksIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlU3BhY2VJdGVtcygpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=