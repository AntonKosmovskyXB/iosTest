/**
 * @fileoverview added by tsickle
 * Generated from: sider.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { NzBreakpointService, siderResponsiveMap } from 'ng-zorro-antd/core/services';
import { inNextTick, InputBoolean, toCssPixel } from 'ng-zorro-antd/core/util';
import { NzMenuDirective } from 'ng-zorro-antd/menu';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
export class NzSiderComponent {
    /**
     * @param {?} platform
     * @param {?} cdr
     * @param {?} breakpointService
     */
    constructor(platform, cdr, breakpointService) {
        this.platform = platform;
        this.cdr = cdr;
        this.breakpointService = breakpointService;
        this.destroy$ = new Subject();
        this.nzMenuDirective = null;
        this.nzCollapsedChange = new EventEmitter();
        this.nzWidth = 200;
        this.nzTheme = 'dark';
        this.nzCollapsedWidth = 80;
        this.nzBreakpoint = null;
        this.nzZeroTrigger = null;
        this.nzTrigger = undefined;
        this.nzReverseArrow = false;
        this.nzCollapsible = false;
        this.nzCollapsed = false;
        this.matchBreakPoint = false;
        this.flexSetting = null;
        this.widthSetting = null;
    }
    /**
     * @return {?}
     */
    updateStyleMap() {
        this.widthSetting = this.nzCollapsed ? `${this.nzCollapsedWidth}px` : toCssPixel(this.nzWidth);
        this.flexSetting = `0 0 ${this.widthSetting}`;
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    updateMenuInlineCollapsed() {
        if (this.nzMenuDirective && this.nzMenuDirective.nzMode === 'inline' && this.nzCollapsedWidth !== 0) {
            this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed);
        }
    }
    /**
     * @param {?} collapsed
     * @return {?}
     */
    setCollapsed(collapsed) {
        if (collapsed !== this.nzCollapsed) {
            this.nzCollapsed = collapsed;
            this.nzCollapsedChange.emit(collapsed);
            this.updateMenuInlineCollapsed();
            this.updateStyleMap();
            this.cdr.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateStyleMap();
        if (this.platform.isBrowser) {
            this.breakpointService
                .subscribe(siderResponsiveMap, true)
                .pipe(takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} map
             * @return {?}
             */
            map => {
                /** @type {?} */
                const breakpoint = this.nzBreakpoint;
                if (breakpoint) {
                    inNextTick().subscribe((/**
                     * @return {?}
                     */
                    () => {
                        this.matchBreakPoint = !map[breakpoint];
                        this.setCollapsed(this.matchBreakPoint);
                        this.cdr.markForCheck();
                    }));
                }
            }));
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzCollapsed, nzCollapsedWidth, nzWidth } = changes;
        if (nzCollapsed || nzCollapsedWidth || nzWidth) {
            this.updateStyleMap();
        }
        if (nzCollapsed) {
            this.updateMenuInlineCollapsed();
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.updateMenuInlineCollapsed();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzSiderComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-sider',
                exportAs: 'nzSider',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div class="ant-layout-sider-children">
      <ng-content></ng-content>
    </div>
    <div
      *ngIf="nzCollapsible && nzTrigger !== null"
      nz-sider-trigger
      [matchBreakPoint]="matchBreakPoint"
      [nzCollapsedWidth]="nzCollapsedWidth"
      [nzCollapsed]="nzCollapsed"
      [nzBreakpoint]="nzBreakpoint"
      [nzReverseArrow]="nzReverseArrow"
      [nzTrigger]="nzTrigger"
      [nzZeroTrigger]="nzZeroTrigger"
      [siderWidth]="widthSetting"
      (click)="setCollapsed(!nzCollapsed)"
    ></div>
  `,
                host: {
                    '[class.ant-layout-sider]': 'true',
                    '[class.ant-layout-sider-zero-width]': `nzCollapsed && nzCollapsedWidth === 0`,
                    '[class.ant-layout-sider-light]': `nzTheme === 'light'`,
                    '[class.ant-layout-sider-dark]': `nzTheme === 'dark'`,
                    '[class.ant-layout-sider-collapsed]': `nzCollapsed`,
                    '[style.flex]': 'flexSetting',
                    '[style.maxWidth]': 'widthSetting',
                    '[style.minWidth]': 'widthSetting',
                    '[style.width]': 'widthSetting'
                }
            }] }
];
/** @nocollapse */
NzSiderComponent.ctorParameters = () => [
    { type: Platform },
    { type: ChangeDetectorRef },
    { type: NzBreakpointService }
];
NzSiderComponent.propDecorators = {
    nzMenuDirective: [{ type: ContentChild, args: [NzMenuDirective,] }],
    nzCollapsedChange: [{ type: Output }],
    nzWidth: [{ type: Input }],
    nzTheme: [{ type: Input }],
    nzCollapsedWidth: [{ type: Input }],
    nzBreakpoint: [{ type: Input }],
    nzZeroTrigger: [{ type: Input }],
    nzTrigger: [{ type: Input }],
    nzReverseArrow: [{ type: Input }],
    nzCollapsible: [{ type: Input }],
    nzCollapsed: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSiderComponent.prototype, "nzReverseArrow", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSiderComponent.prototype, "nzCollapsible", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSiderComponent.prototype, "nzCollapsed", void 0);
if (false) {
    /** @type {?} */
    NzSiderComponent.ngAcceptInputType_nzReverseArrow;
    /** @type {?} */
    NzSiderComponent.ngAcceptInputType_nzCollapsible;
    /** @type {?} */
    NzSiderComponent.ngAcceptInputType_nzCollapsed;
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.destroy$;
    /** @type {?} */
    NzSiderComponent.prototype.nzMenuDirective;
    /** @type {?} */
    NzSiderComponent.prototype.nzCollapsedChange;
    /** @type {?} */
    NzSiderComponent.prototype.nzWidth;
    /** @type {?} */
    NzSiderComponent.prototype.nzTheme;
    /** @type {?} */
    NzSiderComponent.prototype.nzCollapsedWidth;
    /** @type {?} */
    NzSiderComponent.prototype.nzBreakpoint;
    /** @type {?} */
    NzSiderComponent.prototype.nzZeroTrigger;
    /** @type {?} */
    NzSiderComponent.prototype.nzTrigger;
    /** @type {?} */
    NzSiderComponent.prototype.nzReverseArrow;
    /** @type {?} */
    NzSiderComponent.prototype.nzCollapsible;
    /** @type {?} */
    NzSiderComponent.prototype.nzCollapsed;
    /** @type {?} */
    NzSiderComponent.prototype.matchBreakPoint;
    /** @type {?} */
    NzSiderComponent.prototype.flexSetting;
    /** @type {?} */
    NzSiderComponent.prototype.widthSetting;
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzSiderComponent.prototype.breakpointService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9sYXlvdXQvIiwic291cmNlcyI6WyJzaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQW1CLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdkcsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBc0MzQyxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7SUEyQzNCLFlBQW9CLFFBQWtCLEVBQVUsR0FBc0IsRUFBVSxpQkFBc0M7UUFBbEcsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFxQjtRQXRDOUcsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDRixvQkFBZSxHQUEyQixJQUFJLENBQUM7UUFDM0Qsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqRCxZQUFPLEdBQW9CLEdBQUcsQ0FBQztRQUMvQixZQUFPLEdBQXFCLE1BQU0sQ0FBQztRQUNuQyxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFD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Q0FBMEQ7O0lBQzFELG1DQUF3Qzs7SUFDeEMsbUNBQTRDOztJQUM1Qyw0Q0FBK0I7O0lBQy9CLHdDQUFxRDs7SUFDckQseUNBQXdEOztJQUN4RCxxQ0FBcUU7O0lBQ3JFLDBDQUFnRDs7SUFDaEQseUNBQStDOztJQUMvQyx1Q0FBNkM7O0lBQzdDLDJDQUF3Qjs7SUFDeEIsdUNBQWtDOztJQUNsQyx3Q0FBbUM7Ozs7O0lBd0J2QixvQ0FBMEI7Ozs7O0lBQUUsK0JBQThCOzs7OztJQUFFLDZDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpCcmVha3BvaW50S2V5LCBOekJyZWFrcG9pbnRTZXJ2aWNlLCBzaWRlclJlc3BvbnNpdmVNYXAgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvc2VydmljZXMnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IGluTmV4dFRpY2ssIElucHV0Qm9vbGVhbiwgdG9Dc3NQaXhlbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IE56TWVudURpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVudSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXNpZGVyJyxcbiAgZXhwb3J0QXM6ICduelNpZGVyJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJhbnQtbGF5b3V0LXNpZGVyLWNoaWxkcmVuXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgKm5nSWY9XCJuekNvbGxhcHNpYmxlICYmIG56VHJpZ2dlciAhPT0gbnVsbFwiXG4gICAgICBuei1zaWRlci10cmlnZ2VyXG4gICAgICBbbWF0Y2hCcmVha1BvaW50XT1cIm1hdGNoQnJlYWtQb2ludFwiXG4gICAgICBbbnpDb2xsYXBzZWRXaWR0aF09XCJuekNvbGxhcHNlZFdpZHRoXCJcbiAgICAgIFtuekNvbGxhcHNlZF09XCJuekNvbGxhcHNlZFwiXG4gICAgICBbbnpCcmVha3BvaW50XT1cIm56QnJlYWtwb2ludFwiXG4gICAgICBbbnpSZXZlcnNlQXJyb3ddPVwibnpSZXZlcnNlQXJyb3dcIlxuICAgICAgW256VHJpZ2dlcl09XCJuelRyaWdnZXJcIlxuICAgICAgW256WmVyb1RyaWdnZXJdPVwibnpaZXJvVHJpZ2dlclwiXG4gICAgICBbc2lkZXJXaWR0aF09XCJ3aWR0aFNldHRpbmdcIlxuICAgICAgKGNsaWNrKT1cInNldENvbGxhcHNlZCghbnpDb2xsYXBzZWQpXCJcbiAgICA+PC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1sYXlvdXQtc2lkZXJdJzogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LWxheW91dC1zaWRlci16ZXJvLXdpZHRoXSc6IGBuekNvbGxhcHNlZCAmJiBuekNvbGxhcHNlZFdpZHRoID09PSAwYCxcbiAgICAnW2NsYXNzLmFudC1sYXlvdXQtc2lkZXItbGlnaHRdJzogYG56VGhlbWUgPT09ICdsaWdodCdgLFxuICAgICdbY2xhc3MuYW50LWxheW91dC1zaWRlci1kYXJrXSc6IGBuelRoZW1lID09PSAnZGFyaydgLFxuICAgICdbY2xhc3MuYW50LWxheW91dC1zaWRlci1jb2xsYXBzZWRdJzogYG56Q29sbGFwc2VkYCxcbiAgICAnW3N0eWxlLmZsZXhdJzogJ2ZsZXhTZXR0aW5nJyxcbiAgICAnW3N0eWxlLm1heFdpZHRoXSc6ICd3aWR0aFNldHRpbmcnLFxuICAgICdbc3R5bGUubWluV2lkdGhdJzogJ3dpZHRoU2V0dGluZycsXG4gICAgJ1tzdHlsZS53aWR0aF0nOiAnd2lkdGhTZXR0aW5nJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56U2lkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256UmV2ZXJzZUFycm93OiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekNvbGxhcHNpYmxlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekNvbGxhcHNlZDogQm9vbGVhbklucHV0O1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuICBAQ29udGVudENoaWxkKE56TWVudURpcmVjdGl2ZSkgbnpNZW51RGlyZWN0aXZlOiBOek1lbnVEaXJlY3RpdmUgfCBudWxsID0gbnVsbDtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q29sbGFwc2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBueldpZHRoOiBzdHJpbmcgfCBudW1iZXIgPSAyMDA7XG4gIEBJbnB1dCgpIG56VGhlbWU6ICdsaWdodCcgfCAnZGFyaycgPSAnZGFyayc7XG4gIEBJbnB1dCgpIG56Q29sbGFwc2VkV2lkdGggPSA4MDtcbiAgQElucHV0KCkgbnpCcmVha3BvaW50OiBOekJyZWFrcG9pbnRLZXkgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpaZXJvVHJpZ2dlcjogVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpUcmlnZ2VyOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IHVuZGVmaW5lZCB8IG51bGwgPSB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelJldmVyc2VBcnJvdyA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDb2xsYXBzaWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDb2xsYXBzZWQgPSBmYWxzZTtcbiAgbWF0Y2hCcmVha1BvaW50ID0gZmFsc2U7XG4gIGZsZXhTZXR0aW5nOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgd2lkdGhTZXR0aW5nOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICB1cGRhdGVTdHlsZU1hcCgpOiB2b2lkIHtcbiAgICB0aGlzLndpZHRoU2V0dGluZyA9IHRoaXMubnpDb2xsYXBzZWQgPyBgJHt0aGlzLm56Q29sbGFwc2VkV2lkdGh9cHhgIDogdG9Dc3NQaXhlbCh0aGlzLm56V2lkdGgpO1xuICAgIHRoaXMuZmxleFNldHRpbmcgPSBgMCAwICR7dGhpcy53aWR0aFNldHRpbmd9YDtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHVwZGF0ZU1lbnVJbmxpbmVDb2xsYXBzZWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpNZW51RGlyZWN0aXZlICYmIHRoaXMubnpNZW51RGlyZWN0aXZlLm56TW9kZSA9PT0gJ2lubGluZScgJiYgdGhpcy5uekNvbGxhcHNlZFdpZHRoICE9PSAwKSB7XG4gICAgICB0aGlzLm56TWVudURpcmVjdGl2ZS5zZXRJbmxpbmVDb2xsYXBzZWQodGhpcy5uekNvbGxhcHNlZCk7XG4gICAgfVxuICB9XG5cbiAgc2V0Q29sbGFwc2VkKGNvbGxhcHNlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChjb2xsYXBzZWQgIT09IHRoaXMubnpDb2xsYXBzZWQpIHtcbiAgICAgIHRoaXMubnpDb2xsYXBzZWQgPSBjb2xsYXBzZWQ7XG4gICAgICB0aGlzLm56Q29sbGFwc2VkQ2hhbmdlLmVtaXQoY29sbGFwc2VkKTtcbiAgICAgIHRoaXMudXBkYXRlTWVudUlubGluZUNvbGxhcHNlZCgpO1xuICAgICAgdGhpcy51cGRhdGVTdHlsZU1hcCgpO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBicmVha3BvaW50U2VydmljZTogTnpCcmVha3BvaW50U2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVN0eWxlTWFwKCk7XG5cbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuYnJlYWtwb2ludFNlcnZpY2VcbiAgICAgICAgLnN1YnNjcmliZShzaWRlclJlc3BvbnNpdmVNYXAsIHRydWUpXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgLnN1YnNjcmliZShtYXAgPT4ge1xuICAgICAgICAgIGNvbnN0IGJyZWFrcG9pbnQgPSB0aGlzLm56QnJlYWtwb2ludDtcbiAgICAgICAgICBpZiAoYnJlYWtwb2ludCkge1xuICAgICAgICAgICAgaW5OZXh0VGljaygpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMubWF0Y2hCcmVha1BvaW50ID0gIW1hcFticmVha3BvaW50XTtcbiAgICAgICAgICAgICAgdGhpcy5zZXRDb2xsYXBzZWQodGhpcy5tYXRjaEJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpDb2xsYXBzZWQsIG56Q29sbGFwc2VkV2lkdGgsIG56V2lkdGggfSA9IGNoYW5nZXM7XG4gICAgaWYgKG56Q29sbGFwc2VkIHx8IG56Q29sbGFwc2VkV2lkdGggfHwgbnpXaWR0aCkge1xuICAgICAgdGhpcy51cGRhdGVTdHlsZU1hcCgpO1xuICAgIH1cbiAgICBpZiAobnpDb2xsYXBzZWQpIHtcbiAgICAgIHRoaXMudXBkYXRlTWVudUlubGluZUNvbGxhcHNlZCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZU1lbnVJbmxpbmVDb2xsYXBzZWQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19