/**
 * @fileoverview added by tsickle
 * Generated from: page-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __read } from "tslib";
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
var NZ_CONFIG_COMPONENT_NAME = 'pageHeader';
var NzPageHeaderComponent = /** @class */ (function () {
    function NzPageHeaderComponent(location, nzConfigService, elementRef, nzResizeObserver, cdr) {
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
    NzPageHeaderComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzResizeObserver
            .observe(this.elementRef)
            .pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 1), entry = _b[0];
            return entry.contentRect.width;
        })), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} width
         * @return {?}
         */
        function (width) {
            _this.compact = width < 768;
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NzPageHeaderComponent.prototype.onBack = /**
     * @return {?}
     */
    function () {
        if (this.nzBack.observers.length) {
            this.nzBack.emit();
        }
        else {
            if (!this.location) {
                throw new Error(PREFIX + " you should import 'RouterModule' or register 'Location' if you want to use 'nzBack' default event!");
            }
            this.location.back();
        }
    };
    /**
     * @return {?}
     */
    NzPageHeaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzPageHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-page-header',
                    exportAs: 'nzPageHeader',
                    template: "\n    <ng-content select=\"nz-breadcrumb[nz-page-header-breadcrumb]\"></ng-content>\n\n    <div class=\"ant-page-header-heading\">\n      <div class=\"ant-page-header-heading-left\">\n        <!--back-->\n        <div *ngIf=\"nzBackIcon !== null\" (click)=\"onBack()\" class=\"ant-page-header-back\">\n          <div role=\"button\" tabindex=\"0\" class=\"ant-page-header-back-button\">\n            <ng-container *nzStringTemplateOutlet=\"nzBackIcon; let backIcon\">\n              <i nz-icon [nzType]=\"backIcon || 'arrow-left'\" nzTheme=\"outline\"></i>\n            </ng-container>\n          </div>\n        </div>\n        <!--avatar-->\n        <ng-content select=\"nz-avatar[nz-page-header-avatar]\"></ng-content>\n        <!--title-->\n        <span class=\"ant-page-header-heading-title\" *ngIf=\"nzTitle\">\n          <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n        </span>\n        <ng-content *ngIf=\"!nzTitle\" select=\"nz-page-header-title, [nz-page-header-title]\"></ng-content>\n        <!--subtitle-->\n        <span class=\"ant-page-header-heading-sub-title\" *ngIf=\"nzSubtitle\">\n          <ng-container *nzStringTemplateOutlet=\"nzSubtitle\">{{ nzSubtitle }}</ng-container>\n        </span>\n        <ng-content *ngIf=\"!nzSubtitle\" select=\"nz-page-header-subtitle, [nz-page-header-subtitle]\"></ng-content>\n        <ng-content select=\"nz-page-header-tags, [nz-page-header-tags]\"></ng-content>\n      </div>\n\n      <ng-content select=\"nz-page-header-extra, [nz-page-header-extra]\"></ng-content>\n    </div>\n\n    <ng-content select=\"nz-page-header-content, [nz-page-header-content]\"></ng-content>\n    <ng-content select=\"nz-page-header-footer, [nz-page-header-footer]\"></ng-content>\n  ",
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
    NzPageHeaderComponent.ctorParameters = function () { return [
        { type: Location, decorators: [{ type: Optional }] },
        { type: NzConfigService },
        { type: ElementRef },
        { type: NzResizeObserver },
        { type: ChangeDetectorRef }
    ]; };
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
    return NzPageHeaderComponent;
}());
export { NzPageHeaderComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9wYWdlLWhlYWRlci8iLCJzb3VyY2VzIjpbInBhZ2UtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxRQUFRLEVBQ1IsTUFBTSxFQUVOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztJQUU3Rix3QkFBd0IsR0FBRyxZQUFZO0FBRTdDO0lBNERFLCtCQUNzQixRQUFrQixFQUMvQixlQUFnQyxFQUMvQixVQUFzQixFQUN0QixnQkFBa0MsRUFDbEMsR0FBc0I7UUFKVixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQy9CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFqQnZCLGVBQVUsR0FBc0MsSUFBSSxD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b3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgUFJFRklYIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2xvZ2dlcic7XG5pbXBvcnQgeyBOelJlc2l6ZU9ic2VydmVyIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3Jlc2l6ZS1vYnNlcnZlcnMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOelBhZ2VIZWFkZXJCcmVhZGNydW1iRGlyZWN0aXZlLCBOelBhZ2VIZWFkZXJGb290ZXJEaXJlY3RpdmUgfSBmcm9tICcuL3BhZ2UtaGVhZGVyLWNlbGxzJztcblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ3BhZ2VIZWFkZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1wYWdlLWhlYWRlcicsXG4gIGV4cG9ydEFzOiAnbnpQYWdlSGVhZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJuei1icmVhZGNydW1iW256LXBhZ2UtaGVhZGVyLWJyZWFkY3J1bWJdXCI+PC9uZy1jb250ZW50PlxuXG4gICAgPGRpdiBjbGFzcz1cImFudC1wYWdlLWhlYWRlci1oZWFkaW5nXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LXBhZ2UtaGVhZGVyLWhlYWRpbmctbGVmdFwiPlxuICAgICAgICA8IS0tYmFjay0tPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwibnpCYWNrSWNvbiAhPT0gbnVsbFwiIChjbGljayk9XCJvbkJhY2soKVwiIGNsYXNzPVwiYW50LXBhZ2UtaGVhZGVyLWJhY2tcIj5cbiAgICAgICAgICA8ZGl2IHJvbGU9XCJidXR0b25cIiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImFudC1wYWdlLWhlYWRlci1iYWNrLWJ1dHRvblwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56QmFja0ljb247IGxldCBiYWNrSWNvblwiPlxuICAgICAgICAgICAgICA8aSBuei1pY29uIFtuelR5cGVdPVwiYmFja0ljb24gfHwgJ2Fycm93LWxlZnQnXCIgbnpUaGVtZT1cIm91dGxpbmVcIj48L2k+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwhLS1hdmF0YXItLT5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibnotYXZhdGFyW256LXBhZ2UtaGVhZGVyLWF2YXRhcl1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwhLS10aXRsZS0tPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImFudC1wYWdlLWhlYWRlci1oZWFkaW5nLXRpdGxlXCIgKm5nSWY9XCJuelRpdGxlXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56VGl0bGVcIj57eyBuelRpdGxlIH19PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhbnpUaXRsZVwiIHNlbGVjdD1cIm56LXBhZ2UtaGVhZGVyLXRpdGxlLCBbbnotcGFnZS1oZWFkZXItdGl0bGVdXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8IS0tc3VidGl0bGUtLT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtcGFnZS1oZWFkZXItaGVhZGluZy1zdWItdGl0bGVcIiAqbmdJZj1cIm56U3VidGl0bGVcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpTdWJ0aXRsZVwiPnt7IG56U3VidGl0bGUgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8bmctY29udGVudCAqbmdJZj1cIiFuelN1YnRpdGxlXCIgc2VsZWN0PVwibnotcGFnZS1oZWFkZXItc3VidGl0bGUsIFtuei1wYWdlLWhlYWRlci1zdWJ0aXRsZV1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm56LXBhZ2UtaGVhZGVyLXRhZ3MsIFtuei1wYWdlLWhlYWRlci10YWdzXVwiPjwvbmctY29udGVudD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJuei1wYWdlLWhlYWRlci1leHRyYSwgW256LXBhZ2UtaGVhZGVyLWV4dHJhXVwiPjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cblxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm56LXBhZ2UtaGVhZGVyLWNvbnRlbnQsIFtuei1wYWdlLWhlYWRlci1jb250ZW50XVwiPjwvbmctY29udGVudD5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJuei1wYWdlLWhlYWRlci1mb290ZXIsIFtuei1wYWdlLWhlYWRlci1mb290ZXJdXCI+PC9uZy1jb250ZW50PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYW50LXBhZ2UtaGVhZGVyJyxcbiAgICAnW2NsYXNzLmhhcy1mb290ZXJdJzogJ256UGFnZUhlYWRlckZvb3RlcicsXG4gICAgJ1tjbGFzcy5hbnQtcGFnZS1oZWFkZXItZ2hvc3RdJzogJ256R2hvc3QnLFxuICAgICdbY2xhc3MuaGFzLWJyZWFkY3J1bWJdJzogJ256UGFnZUhlYWRlckJyZWFkY3J1bWInLFxuICAgICdbY2xhc3MuYW50LXBhZ2UtaGVhZGVyLWNvbXBhY3RdJzogJ2NvbXBhY3QnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpQYWdlSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgbnpCYWNrSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpUaXRsZT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuelN1YnRpdGxlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgbnpHaG9zdDogYm9vbGVhbiA9IHRydWU7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgQENvbnRlbnRDaGlsZChOelBhZ2VIZWFkZXJGb290ZXJEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KSBuelBhZ2VIZWFkZXJGb290ZXI/OiBFbGVtZW50UmVmPE56UGFnZUhlYWRlckZvb3RlckRpcmVjdGl2ZT47XG4gIEBDb250ZW50Q2hpbGQoTnpQYWdlSGVhZGVyQnJlYWRjcnVtYkRpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pIG56UGFnZUhlYWRlckJyZWFkY3J1bWI/OiBFbGVtZW50UmVmPE56UGFnZUhlYWRlckJyZWFkY3J1bWJEaXJlY3RpdmU+O1xuXG4gIGNvbXBhY3QgPSBmYWxzZTtcbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLFxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBuelJlc2l6ZU9ic2VydmVyOiBOelJlc2l6ZU9ic2VydmVyLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMubnpSZXNpemVPYnNlcnZlclxuICAgICAgLm9ic2VydmUodGhpcy5lbGVtZW50UmVmKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoW2VudHJ5XSkgPT4gZW50cnkuY29udGVudFJlY3Qud2lkdGgpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHdpZHRoOiBudW1iZXIpID0+IHtcbiAgICAgICAgdGhpcy5jb21wYWN0ID0gd2lkdGggPCA3Njg7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gIH1cblxuICBvbkJhY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpCYWNrLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubnpCYWNrLmVtaXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLmxvY2F0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtQUkVGSVh9IHlvdSBzaG91bGQgaW1wb3J0ICdSb3V0ZXJNb2R1bGUnIG9yIHJlZ2lzdGVyICdMb2NhdGlvbicgaWYgeW91IHdhbnQgdG8gdXNlICduekJhY2snIGRlZmF1bHQgZXZlbnQhYCk7XG4gICAgICB9XG4gICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==