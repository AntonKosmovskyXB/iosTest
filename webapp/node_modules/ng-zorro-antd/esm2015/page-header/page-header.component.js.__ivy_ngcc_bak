/**
 * @fileoverview added by tsickle
 * Generated from: page-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, EventEmitter, Input, Optional, Output, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { PREFIX } from 'ng-zorro-antd/core/logger';
import { NzResizeObserver } from 'ng-zorro-antd/core/resize-observers';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { NzPageHeaderBreadcrumbDirective, NzPageHeaderFooterDirective } from './page-header-cells';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'pageHeader';
export class NzPageHeaderComponent {
    /**
     * @param {?} location
     * @param {?} nzConfigService
     * @param {?} elementRef
     * @param {?} nzResizeObserver
     * @param {?} cdr
     */
    constructor(location, nzConfigService, elementRef, nzResizeObserver, cdr) {
        this.location = location;
        this.nzConfigService = nzConfigService;
        this.elementRef = elementRef;
        this.nzResizeObserver = nzResizeObserver;
        this.cdr = cdr;
        this.nzBackIcon = null;
        this.nzGhost = true;
        this.nzBack = new EventEmitter();
        this.compact = false;
        this.destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.nzResizeObserver
            .observe(this.elementRef)
            .pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([entry]) => entry.contentRect.width)), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} width
         * @return {?}
         */
        (width) => {
            this.compact = width < 768;
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    onBack() {
        if (this.nzBack.observers.length) {
            this.nzBack.emit();
        }
        else {
            if (!this.location) {
                throw new Error(`${PREFIX} you should import 'RouterModule' or register 'Location' if you want to use 'nzBack' default event!`);
            }
            this.location.back();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzPageHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-page-header',
                exportAs: 'nzPageHeader',
                template: `
    <ng-content select="nz-breadcrumb[nz-page-header-breadcrumb]"></ng-content>

    <div class="ant-page-header-heading">
      <div class="ant-page-header-heading-left">
        <!--back-->
        <div *ngIf="nzBackIcon !== null" (click)="onBack()" class="ant-page-header-back">
          <div role="button" tabindex="0" class="ant-page-header-back-button">
            <ng-container *nzStringTemplateOutlet="nzBackIcon; let backIcon">
              <i nz-icon [nzType]="backIcon || 'arrow-left'" nzTheme="outline"></i>
            </ng-container>
          </div>
        </div>
        <!--avatar-->
        <ng-content select="nz-avatar[nz-page-header-avatar]"></ng-content>
        <!--title-->
        <span class="ant-page-header-heading-title" *ngIf="nzTitle">
          <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
        </span>
        <ng-content *ngIf="!nzTitle" select="nz-page-header-title, [nz-page-header-title]"></ng-content>
        <!--subtitle-->
        <span class="ant-page-header-heading-sub-title" *ngIf="nzSubtitle">
          <ng-container *nzStringTemplateOutlet="nzSubtitle">{{ nzSubtitle }}</ng-container>
        </span>
        <ng-content *ngIf="!nzSubtitle" select="nz-page-header-subtitle, [nz-page-header-subtitle]"></ng-content>
        <ng-content select="nz-page-header-tags, [nz-page-header-tags]"></ng-content>
      </div>

      <ng-content select="nz-page-header-extra, [nz-page-header-extra]"></ng-content>
    </div>

    <ng-content select="nz-page-header-content, [nz-page-header-content]"></ng-content>
    <ng-content select="nz-page-header-footer, [nz-page-header-footer]"></ng-content>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    class: 'ant-page-header',
                    '[class.has-footer]': 'nzPageHeaderFooter',
                    '[class.ant-page-header-ghost]': 'nzGhost',
                    '[class.has-breadcrumb]': 'nzPageHeaderBreadcrumb',
                    '[class.ant-page-header-compact]': 'compact'
                }
            }] }
];
/** @nocollapse */
NzPageHeaderComponent.ctorParameters = () => [
    { type: Location, decorators: [{ type: Optional }] },
    { type: NzConfigService },
    { type: ElementRef },
    { type: NzResizeObserver },
    { type: ChangeDetectorRef }
];
NzPageHeaderComponent.propDecorators = {
    nzBackIcon: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzSubtitle: [{ type: Input }],
    nzGhost: [{ type: Input }],
    nzBack: [{ type: Output }],
    nzPageHeaderFooter: [{ type: ContentChild, args: [NzPageHeaderFooterDirective, { static: false },] }],
    nzPageHeaderBreadcrumb: [{ type: ContentChild, args: [NzPageHeaderBreadcrumbDirective, { static: false },] }]
};
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    __metadata("design:type", Boolean)
], NzPageHeaderComponent.prototype, "nzGhost", void 0);
if (false) {
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzBackIcon;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzTitle;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzSubtitle;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzGhost;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzBack;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzPageHeaderFooter;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzPageHeaderBreadcrumb;
    /** @type {?} */
    NzPageHeaderComponent.prototype.compact;
    /** @type {?} */
    NzPageHeaderComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzPageHeaderComponent.prototype.location;
    /** @type {?} */
    NzPageHeaderComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzPageHeaderComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzPageHeaderComponent.prototype.nzResizeObserver;
    /**
     * @type {?}
     * @private
     */
    NzPageHeaderComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9wYWdlLWhlYWRlci8iLCJzb3VyY2VzIjpbInBhZ2UtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxRQUFRLEVBQ1IsTUFBTSxFQUVOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztNQUU3Rix3QkFBd0IsR0FBRyxZQUFZO0FBaUQ3QyxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7OztJQWFoQyxZQUNzQixRQUFrQixFQUMvQixlQUFnQyxFQUMvQixVQUFzQixFQUN0QixnQkFBa0MsRUFDbEMsR0FBc0I7UUFKVixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQy9CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFqQnZCLGVBQVUsR0FBc0MsSUFBSSxDQUFDO1FBR2YsWUFBTyxHQUFZLElBQUksQ0FBQztRQUNwRCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUtyRCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBUTVCLENBQUM7Ozs7SUFFSixlQUFlO1FBQ2IsSUFBSSxDQUFDLGdCQUFnQjthQUNsQixPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUN4QixJQUFJLENBQ0gsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUMsRUFDekMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDekI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRTtZQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0osSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNwQjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxNQUFNLHFHQUFxRyxDQUFDLENBQUM7YUFDakk7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBL0ZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQ1Q7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLGlCQUFpQjtvQkFDeEIsb0JBQW9CLEVBQUUsb0JBQW9CO29CQUMxQywrQkFBK0IsRUFBRSxTQUFTO29CQUMxQyx3QkFBd0IsRUFBRSx3QkFBd0I7b0JBQ2xELGlDQUFpQyxFQUFFLFNBQVM7aUJBQzdDO2FBQ0Y7Ozs7WUF4RFEsUUFBUSx1QkF1RVosUUFBUTtZQXRFSixlQUFlO1lBWHRCLFVBQVU7WUFhSCxnQkFBZ0I7WUFoQnZCLGlCQUFpQjs7O3lCQXVFaEIsS0FBSztzQkFDTCxLQUFLO3lCQUNMLEtBQUs7c0JBQ0wsS0FBSztxQkFDTCxNQUFNO2lDQUVOLFlBQVksU0FBQywyQkFBMkIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7cUNBQzNELFlBQVksU0FBQywrQkFBK0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0FBSmpCO0lBQXJDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQzs7c0RBQXlCOzs7SUFIdkUsMkNBQThEOztJQUM5RCx3Q0FBOEM7O0lBQzlDLDJDQUFpRDs7SUFDakQsd0NBQXVFOztJQUN2RSx1Q0FBcUQ7O0lBRXJELG1EQUEySDs7SUFDM0gsdURBQXVJOztJQUV2SSx3Q0FBZ0I7O0lBQ2hCLHlDQUErQjs7Ozs7SUFHN0IseUNBQXNDOztJQUN0QyxnREFBdUM7Ozs7O0lBQ3ZDLDJDQUE4Qjs7Ozs7SUFDOUIsaURBQTBDOzs7OztJQUMxQyxvQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBQUkVGSVggfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbG9nZ2VyJztcbmltcG9ydCB7IE56UmVzaXplT2JzZXJ2ZXIgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvcmVzaXplLW9ic2VydmVycyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE56UGFnZUhlYWRlckJyZWFkY3J1bWJEaXJlY3RpdmUsIE56UGFnZUhlYWRlckZvb3RlckRpcmVjdGl2ZSB9IGZyb20gJy4vcGFnZS1oZWFkZXItY2VsbHMnO1xuXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAncGFnZUhlYWRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXBhZ2UtaGVhZGVyJyxcbiAgZXhwb3J0QXM6ICduelBhZ2VIZWFkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm56LWJyZWFkY3J1bWJbbnotcGFnZS1oZWFkZXItYnJlYWRjcnVtYl1cIj48L25nLWNvbnRlbnQ+XG5cbiAgICA8ZGl2IGNsYXNzPVwiYW50LXBhZ2UtaGVhZGVyLWhlYWRpbmdcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcGFnZS1oZWFkZXItaGVhZGluZy1sZWZ0XCI+XG4gICAgICAgIDwhLS1iYWNrLS0+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJuekJhY2tJY29uICE9PSBudWxsXCIgKGNsaWNrKT1cIm9uQmFjaygpXCIgY2xhc3M9XCJhbnQtcGFnZS1oZWFkZXItYmFja1wiPlxuICAgICAgICAgIDxkaXYgcm9sZT1cImJ1dHRvblwiIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiYW50LXBhZ2UtaGVhZGVyLWJhY2stYnV0dG9uXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpCYWNrSWNvbjsgbGV0IGJhY2tJY29uXCI+XG4gICAgICAgICAgICAgIDxpIG56LWljb24gW256VHlwZV09XCJiYWNrSWNvbiB8fCAnYXJyb3ctbGVmdCdcIiBuelRoZW1lPVwib3V0bGluZVwiPjwvaT5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLWF2YXRhci0tPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJuei1hdmF0YXJbbnotcGFnZS1oZWFkZXItYXZhdGFyXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgPCEtLXRpdGxlLS0+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXBhZ2UtaGVhZGVyLWhlYWRpbmctdGl0bGVcIiAqbmdJZj1cIm56VGl0bGVcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpUaXRsZVwiPnt7IG56VGl0bGUgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8bmctY29udGVudCAqbmdJZj1cIiFuelRpdGxlXCIgc2VsZWN0PVwibnotcGFnZS1oZWFkZXItdGl0bGUsIFtuei1wYWdlLWhlYWRlci10aXRsZV1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwhLS1zdWJ0aXRsZS0tPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImFudC1wYWdlLWhlYWRlci1oZWFkaW5nLXN1Yi10aXRsZVwiICpuZ0lmPVwibnpTdWJ0aXRsZVwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuelN1YnRpdGxlXCI+e3sgbnpTdWJ0aXRsZSB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiIW56U3VidGl0bGVcIiBzZWxlY3Q9XCJuei1wYWdlLWhlYWRlci1zdWJ0aXRsZSwgW256LXBhZ2UtaGVhZGVyLXN1YnRpdGxlXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibnotcGFnZS1oZWFkZXItdGFncywgW256LXBhZ2UtaGVhZGVyLXRhZ3NdXCI+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm56LXBhZ2UtaGVhZGVyLWV4dHJhLCBbbnotcGFnZS1oZWFkZXItZXh0cmFdXCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibnotcGFnZS1oZWFkZXItY29udGVudCwgW256LXBhZ2UtaGVhZGVyLWNvbnRlbnRdXCI+PC9uZy1jb250ZW50PlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm56LXBhZ2UtaGVhZGVyLWZvb3RlciwgW256LXBhZ2UtaGVhZGVyLWZvb3Rlcl1cIj48L25nLWNvbnRlbnQ+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhbnQtcGFnZS1oZWFkZXInLFxuICAgICdbY2xhc3MuaGFzLWZvb3Rlcl0nOiAnbnpQYWdlSGVhZGVyRm9vdGVyJyxcbiAgICAnW2NsYXNzLmFudC1wYWdlLWhlYWRlci1naG9zdF0nOiAnbnpHaG9zdCcsXG4gICAgJ1tjbGFzcy5oYXMtYnJlYWRjcnVtYl0nOiAnbnpQYWdlSGVhZGVyQnJlYWRjcnVtYicsXG4gICAgJ1tjbGFzcy5hbnQtcGFnZS1oZWFkZXItY29tcGFjdF0nOiAnY29tcGFjdCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelBhZ2VIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBuekJhY2tJY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuelRpdGxlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56U3VidGl0bGU/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBuekdob3N0OiBib29sZWFuID0gdHJ1ZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56QmFjayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBAQ29udGVudENoaWxkKE56UGFnZUhlYWRlckZvb3RlckRpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pIG56UGFnZUhlYWRlckZvb3Rlcj86IEVsZW1lbnRSZWY8TnpQYWdlSGVhZGVyRm9vdGVyRGlyZWN0aXZlPjtcbiAgQENvbnRlbnRDaGlsZChOelBhZ2VIZWFkZXJCcmVhZGNydW1iRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSkgbnpQYWdlSGVhZGVyQnJlYWRjcnVtYj86IEVsZW1lbnRSZWY8TnpQYWdlSGVhZGVyQnJlYWRjcnVtYkRpcmVjdGl2ZT47XG5cbiAgY29tcGFjdCA9IGZhbHNlO1xuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIG56UmVzaXplT2JzZXJ2ZXI6IE56UmVzaXplT2JzZXJ2ZXIsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uelJlc2l6ZU9ic2VydmVyXG4gICAgICAub2JzZXJ2ZSh0aGlzLmVsZW1lbnRSZWYpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChbZW50cnldKSA9PiBlbnRyeS5jb250ZW50UmVjdC53aWR0aCksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgod2lkdGg6IG51bWJlcikgPT4ge1xuICAgICAgICB0aGlzLmNvbXBhY3QgPSB3aWR0aCA8IDc2ODtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG9uQmFjaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekJhY2sub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5uekJhY2suZW1pdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMubG9jYXRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke1BSRUZJWH0geW91IHNob3VsZCBpbXBvcnQgJ1JvdXRlck1vZHVsZScgb3IgcmVnaXN0ZXIgJ0xvY2F0aW9uJyBpZiB5b3Ugd2FudCB0byB1c2UgJ256QmFjaycgZGVmYXVsdCBldmVudCFgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19