/**
 * @fileoverview added by tsickle
 * Generated from: badge.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ContentObserver } from '@angular/cdk/observers';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, NgZone, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { zoomBadgeMotion } from 'ng-zorro-antd/core/animation';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { InputBoolean, isEmpty } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { startWith, take, takeUntil } from 'rxjs/operators';
import { badgePresetColors } from './preset-colors';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'backTop';
export class NzBadgeComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} contentObserver
     * @param {?} cdr
     * @param {?} ngZone
     */
    constructor(nzConfigService, renderer, elementRef, contentObserver, cdr, ngZone) {
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.contentObserver = contentObserver;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.destroy$ = new Subject();
        this.notWrapper = true;
        this.viewInit = false;
        this.maxNumberArray = [];
        this.countArray = [];
        this.countSingleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.presetColor = null;
        this.count = 0;
        this.nzShowZero = false;
        this.nzShowDot = true;
        this.nzDot = false;
        this.nzOverflowCount = 99;
        this.nzColor = undefined;
        this.nzStyle = null;
    }
    /**
     * @return {?}
     */
    checkContent() {
        var _a;
        this.notWrapper = isEmpty((_a = this.contentElement) === null || _a === void 0 ? void 0 : _a.nativeElement);
        if (this.notWrapper) {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
    }
    /**
     * @return {?}
     */
    get showSup() {
        return (this.nzShowDot && this.nzDot) || this.count > 0 || (this.count === 0 && this.nzShowZero);
    }
    /**
     * @return {?}
     */
    generateMaxNumberArray() {
        this.maxNumberArray = this.nzOverflowCount.toString().split('');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.generateMaxNumberArray();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.ngZone.onStable.pipe(take(1)).subscribe((/**
         * @return {?}
         */
        () => {
            this.viewInit = true;
            this.cdr.detectChanges();
        }));
        this.contentObserver
            .observe((/** @type {?} */ (this.contentElement)))
            .pipe(startWith(true), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.checkContent();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzOverflowCount, nzCount, nzColor } = changes;
        if (nzCount && !(nzCount.currentValue instanceof TemplateRef)) {
            this.count = Math.max(0, nzCount.currentValue);
            this.countArray = this.count
                .toString()
                .split('')
                .map((/**
             * @param {?} item
             * @return {?}
             */
            item => +item));
        }
        if (nzOverflowCount) {
            this.generateMaxNumberArray();
        }
        if (nzColor) {
            this.presetColor = this.nzColor && badgePresetColors.indexOf(this.nzColor) !== -1 ? this.nzColor : null;
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
NzBadgeComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-badge',
                exportAs: 'nzBadge',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [zoomBadgeMotion],
                template: `
    <span #contentElement><ng-content></ng-content></span>
    <span
      class="ant-badge-status-dot ant-badge-status-{{ nzStatus || presetColor }}"
      [style.background]="!presetColor && nzColor"
      *ngIf="nzStatus || nzColor"
      [ngStyle]="nzStyle"
    ></span>
    <span class="ant-badge-status-text" *ngIf="nzStatus || nzColor">{{ nzText }}</span>
    <ng-container *nzStringTemplateOutlet="nzCount">
      <sup
        class="ant-scroll-number"
        *ngIf="showSup && viewInit"
        [@.disabled]="notWrapper"
        [@zoomBadgeMotion]
        [ngStyle]="nzStyle"
        [attr.title]="nzTitle === null ? '' : nzTitle || nzCount"
        [style.right.px]="nzOffset && nzOffset[0] ? -nzOffset[0] : null"
        [style.marginTop.px]="nzOffset && nzOffset[1] ? nzOffset[1] : null"
        [class.ant-badge-count]="!nzDot"
        [class.ant-badge-dot]="nzDot"
        [class.ant-badge-multiple-words]="countArray.length >= 2"
      >
        <ng-container *ngFor="let n of maxNumberArray; let i = index">
          <span
            class="ant-scroll-number-only"
            *ngIf="count <= nzOverflowCount"
            [style.transform]="'translateY(' + -countArray[i] * 100 + '%)'"
          >
            <ng-container *ngIf="!nzDot && countArray[i] !== undefined">
              <p *ngFor="let p of countSingleArray" class="ant-scroll-number-only-unit" [class.current]="p === countArray[i]">
                {{ p }}
              </p>
            </ng-container>
          </span>
        </ng-container>
        <ng-container *ngIf="count > nzOverflowCount">{{ nzOverflowCount }}+</ng-container>
      </sup>
    </ng-container>
  `,
                host: {
                    class: 'ant-badge',
                    '[class.ant-badge-status]': 'nzStatus'
                }
            }] }
];
/** @nocollapse */
NzBadgeComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: Renderer2 },
    { type: ElementRef },
    { type: ContentObserver },
    { type: ChangeDetectorRef },
    { type: NgZone }
];
NzBadgeComponent.propDecorators = {
    contentElement: [{ type: ViewChild, args: ['contentElement', { static: false },] }],
    nzShowZero: [{ type: Input }],
    nzShowDot: [{ type: Input }],
    nzDot: [{ type: Input }],
    nzOverflowCount: [{ type: Input }],
    nzColor: [{ type: Input }],
    nzStyle: [{ type: Input }],
    nzText: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzStatus: [{ type: Input }],
    nzCount: [{ type: Input }],
    nzOffset: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzBadgeComponent.prototype, "nzShowZero", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzBadgeComponent.prototype, "nzShowDot", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzBadgeComponent.prototype, "nzDot", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    __metadata("design:type", Number)
], NzBadgeComponent.prototype, "nzOverflowCount", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    __metadata("design:type", String)
], NzBadgeComponent.prototype, "nzColor", void 0);
if (false) {
    /** @type {?} */
    NzBadgeComponent.ngAcceptInputType_nzShowZero;
    /** @type {?} */
    NzBadgeComponent.ngAcceptInputType_nzShowDot;
    /** @type {?} */
    NzBadgeComponent.ngAcceptInputType_nzDot;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.destroy$;
    /** @type {?} */
    NzBadgeComponent.prototype.notWrapper;
    /** @type {?} */
    NzBadgeComponent.prototype.viewInit;
    /** @type {?} */
    NzBadgeComponent.prototype.maxNumberArray;
    /** @type {?} */
    NzBadgeComponent.prototype.countArray;
    /** @type {?} */
    NzBadgeComponent.prototype.countSingleArray;
    /** @type {?} */
    NzBadgeComponent.prototype.presetColor;
    /** @type {?} */
    NzBadgeComponent.prototype.count;
    /** @type {?} */
    NzBadgeComponent.prototype.contentElement;
    /** @type {?} */
    NzBadgeComponent.prototype.nzShowZero;
    /** @type {?} */
    NzBadgeComponent.prototype.nzShowDot;
    /** @type {?} */
    NzBadgeComponent.prototype.nzDot;
    /** @type {?} */
    NzBadgeComponent.prototype.nzOverflowCount;
    /** @type {?} */
    NzBadgeComponent.prototype.nzColor;
    /** @type {?} */
    NzBadgeComponent.prototype.nzStyle;
    /** @type {?} */
    NzBadgeComponent.prototype.nzText;
    /** @type {?} */
    NzBadgeComponent.prototype.nzTitle;
    /** @type {?} */
    NzBadgeComponent.prototype.nzStatus;
    /** @type {?} */
    NzBadgeComponent.prototype.nzCount;
    /** @type {?} */
    NzBadgeComponent.prototype.nzOffset;
    /** @type {?} */
    NzBadgeComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.contentObserver;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9iYWRnZS8iLCJzb3VyY2VzIjpbImJhZGdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFJTixTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztNQUc5Qyx3QkFBd0IsR0FBRyxTQUFTO0FBc0QxQyxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7Ozs7SUEyQzNCLFlBQ1MsZUFBZ0MsRUFDL0IsUUFBbUIsRUFDbkIsVUFBc0IsRUFDdEIsZUFBZ0MsRUFDaEMsR0FBc0IsRUFDdEIsTUFBYztRQUxmLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RC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ZTtZQUl0QixpQkFBaUI7WUFJakIsTUFBTTs7OzZCQXVGTCxTQUFTLFNBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3lCQUM3QyxLQUFLO3dCQUNMLEtBQUs7b0JBQ0wsS0FBSzs4QkFDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSztxQkFDTCxLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUs7O0FBVm1CO0lBQWYsWUFBWSxFQUFFOztvREFBNkI7QUFDNUI7SUFBZixZQUFZLEVBQUU7O21EQUFrQjtBQUNqQjtJQUFmLFlBQVksRUFBRTs7K0NBQWU7QUFDUTtJQUFyQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7O3lEQUE4QjtBQUM3QjtJQUFyQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7O2lEQUE4Qjs7O0lBakI1RSw4Q0FBa0Q7O0lBQ2xELDZDQUFpRDs7SUFDakQseUNBQTZDOzs7OztJQUU3QyxvQ0FBaUM7O0lBQ2pDLHNDQUFrQjs7SUFDbEIsb0NBQWlCOztJQUNqQiwwQ0FBOEI7O0lBQzlCLHNDQUEwQjs7SUFDMUIsNENBQWtEOztJQUNsRCx1Q0FBa0M7O0lBQ2xDLGlDQUFrQjs7SUFDbEIsMENBQTRFOztJQUM1RSxzQ0FBcUQ7O0lBQ3JELHFDQUEwQzs7SUFDMUMsaUNBQXVDOztJQUN2QywyQ0FBNEU7O0lBQzVFLG1DQUE0RTs7SUFDNUUsbUNBQTBEOztJQUMxRCxrQ0FBeUI7O0lBQ3pCLG1DQUE2Qzs7SUFDN0Msb0NBQStDOztJQUMvQyxtQ0FBbUQ7O0lBQ25ELG9DQUFxQzs7SUFvQm5DLDJDQUF1Qzs7Ozs7SUFDdkMsb0NBQTJCOzs7OztJQUMzQixzQ0FBOEI7Ozs7O0lBQzlCLDJDQUF3Qzs7Ozs7SUFDeEMsK0JBQThCOzs7OztJQUM5QixrQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDb250ZW50T2JzZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb2JzZXJ2ZXJzJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgem9vbUJhZGdlTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgaXNFbXB0eSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN0YXJ0V2l0aCwgdGFrZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBiYWRnZVByZXNldENvbG9ycyB9IGZyb20gJy4vcHJlc2V0LWNvbG9ycyc7XG5pbXBvcnQgeyBOekJhZGdlU3RhdHVzVHlwZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnYmFja1RvcCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LWJhZGdlJyxcbiAgZXhwb3J0QXM6ICduekJhZGdlJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zOiBbem9vbUJhZGdlTW90aW9uXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiAjY29udGVudEVsZW1lbnQ+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pjwvc3Bhbj5cbiAgICA8c3BhblxuICAgICAgY2xhc3M9XCJhbnQtYmFkZ2Utc3RhdHVzLWRvdCBhbnQtYmFkZ2Utc3RhdHVzLXt7IG56U3RhdHVzIHx8IHByZXNldENvbG9yIH19XCJcbiAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kXT1cIiFwcmVzZXRDb2xvciAmJiBuekNvbG9yXCJcbiAgICAgICpuZ0lmPVwibnpTdGF0dXMgfHwgbnpDb2xvclwiXG4gICAgICBbbmdTdHlsZV09XCJuelN0eWxlXCJcbiAgICA+PC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwiYW50LWJhZGdlLXN0YXR1cy10ZXh0XCIgKm5nSWY9XCJuelN0YXR1cyB8fCBuekNvbG9yXCI+e3sgbnpUZXh0IH19PC9zcGFuPlxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuekNvdW50XCI+XG4gICAgICA8c3VwXG4gICAgICAgIGNsYXNzPVwiYW50LXNjcm9sbC1udW1iZXJcIlxuICAgICAgICAqbmdJZj1cInNob3dTdXAgJiYgdmlld0luaXRcIlxuICAgICAgICBbQC5kaXNhYmxlZF09XCJub3RXcmFwcGVyXCJcbiAgICAgICAgW0B6b29tQmFkZ2VNb3Rpb25dXG4gICAgICAgIFtuZ1N0eWxlXT1cIm56U3R5bGVcIlxuICAgICAgICBbYXR0ci50aXRsZV09XCJuelRpdGxlID09PSBudWxsID8gJycgOiBuelRpdGxlIHx8IG56Q291bnRcIlxuICAgICAgICBbc3R5bGUucmlnaHQucHhdPVwibnpPZmZzZXQgJiYgbnpPZmZzZXRbMF0gPyAtbnpPZmZzZXRbMF0gOiBudWxsXCJcbiAgICAgICAgW3N0eWxlLm1hcmdpblRvcC5weF09XCJuek9mZnNldCAmJiBuek9mZnNldFsxXSA/IG56T2Zmc2V0WzFdIDogbnVsbFwiXG4gICAgICAgIFtjbGFzcy5hbnQtYmFkZ2UtY291bnRdPVwiIW56RG90XCJcbiAgICAgICAgW2NsYXNzLmFudC1iYWRnZS1kb3RdPVwibnpEb3RcIlxuICAgICAgICBbY2xhc3MuYW50LWJhZGdlLW11bHRpcGxlLXdvcmRzXT1cImNvdW50QXJyYXkubGVuZ3RoID49IDJcIlxuICAgICAgPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBuIG9mIG1heE51bWJlckFycmF5OyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzPVwiYW50LXNjcm9sbC1udW1iZXItb25seVwiXG4gICAgICAgICAgICAqbmdJZj1cImNvdW50IDw9IG56T3ZlcmZsb3dDb3VudFwiXG4gICAgICAgICAgICBbc3R5bGUudHJhbnNmb3JtXT1cIid0cmFuc2xhdGVZKCcgKyAtY291bnRBcnJheVtpXSAqIDEwMCArICclKSdcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhbnpEb3QgJiYgY291bnRBcnJheVtpXSAhPT0gdW5kZWZpbmVkXCI+XG4gICAgICAgICAgICAgIDxwICpuZ0Zvcj1cImxldCBwIG9mIGNvdW50U2luZ2xlQXJyYXlcIiBjbGFzcz1cImFudC1zY3JvbGwtbnVtYmVyLW9ubHktdW5pdFwiIFtjbGFzcy5jdXJyZW50XT1cInAgPT09IGNvdW50QXJyYXlbaV1cIj5cbiAgICAgICAgICAgICAgICB7eyBwIH19XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb3VudCA+IG56T3ZlcmZsb3dDb3VudFwiPnt7IG56T3ZlcmZsb3dDb3VudCB9fSs8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvc3VwPlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhbnQtYmFkZ2UnLFxuICAgICdbY2xhc3MuYW50LWJhZGdlLXN0YXR1c10nOiAnbnpTdGF0dXMnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpCYWRnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTaG93WmVybzogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTaG93RG90OiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekRvdDogQm9vbGVhbklucHV0O1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuICBub3RXcmFwcGVyID0gdHJ1ZTtcbiAgdmlld0luaXQgPSBmYWxzZTtcbiAgbWF4TnVtYmVyQXJyYXk6IHN0cmluZ1tdID0gW107XG4gIGNvdW50QXJyYXk6IG51bWJlcltdID0gW107XG4gIGNvdW50U2luZ2xlQXJyYXkgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XG4gIHByZXNldENvbG9yOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgY291bnQ6IG51bWJlciA9IDA7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRFbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIGNvbnRlbnRFbGVtZW50PzogRWxlbWVudFJlZjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd1plcm86IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0RvdCA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRvdCA9IGZhbHNlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIG56T3ZlcmZsb3dDb3VudDogbnVtYmVyID0gOTk7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgbnpDb2xvcj86IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgbnpTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuelRleHQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56VGl0bGU/OiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSBuelN0YXR1cz86IE56QmFkZ2VTdGF0dXNUeXBlIHwgc3RyaW5nO1xuICBASW5wdXQoKSBuekNvdW50PzogbnVtYmVyIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PjtcbiAgQElucHV0KCkgbnpPZmZzZXQ/OiBbbnVtYmVyLCBudW1iZXJdO1xuXG4gIGNoZWNrQ29udGVudCgpOiB2b2lkIHtcbiAgICB0aGlzLm5vdFdyYXBwZXIgPSBpc0VtcHR5KHRoaXMuY29udGVudEVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIGlmICh0aGlzLm5vdFdyYXBwZXIpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtYmFkZ2Utbm90LWEtd3JhcHBlcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWJhZGdlLW5vdC1hLXdyYXBwZXInKTtcbiAgICB9XG4gIH1cblxuICBnZXQgc2hvd1N1cCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKHRoaXMubnpTaG93RG90ICYmIHRoaXMubnpEb3QpIHx8IHRoaXMuY291bnQgPiAwIHx8ICh0aGlzLmNvdW50ID09PSAwICYmIHRoaXMubnpTaG93WmVybyk7XG4gIH1cblxuICBnZW5lcmF0ZU1heE51bWJlckFycmF5KCk6IHZvaWQge1xuICAgIHRoaXMubWF4TnVtYmVyQXJyYXkgPSB0aGlzLm56T3ZlcmZsb3dDb3VudC50b1N0cmluZygpLnNwbGl0KCcnKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY29udGVudE9ic2VydmVyOiBDb250ZW50T2JzZXJ2ZXIsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmVcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZ2VuZXJhdGVNYXhOdW1iZXJBcnJheSgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLm9uU3RhYmxlLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMudmlld0luaXQgPSB0cnVlO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb250ZW50T2JzZXJ2ZXJcbiAgICAgIC5vYnNlcnZlKHRoaXMuY29udGVudEVsZW1lbnQhKVxuICAgICAgLnBpcGUoc3RhcnRXaXRoKHRydWUpLCB0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5jaGVja0NvbnRlbnQoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpPdmVyZmxvd0NvdW50LCBuekNvdW50LCBuekNvbG9yIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChuekNvdW50ICYmICEobnpDb3VudC5jdXJyZW50VmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikpIHtcbiAgICAgIHRoaXMuY291bnQgPSBNYXRoLm1heCgwLCBuekNvdW50LmN1cnJlbnRWYWx1ZSk7XG4gICAgICB0aGlzLmNvdW50QXJyYXkgPSB0aGlzLmNvdW50XG4gICAgICAgIC50b1N0cmluZygpXG4gICAgICAgIC5zcGxpdCgnJylcbiAgICAgICAgLm1hcChpdGVtID0+ICtpdGVtKTtcbiAgICB9XG4gICAgaWYgKG56T3ZlcmZsb3dDb3VudCkge1xuICAgICAgdGhpcy5nZW5lcmF0ZU1heE51bWJlckFycmF5KCk7XG4gICAgfVxuICAgIGlmIChuekNvbG9yKSB7XG4gICAgICB0aGlzLnByZXNldENvbG9yID0gdGhpcy5uekNvbG9yICYmIGJhZGdlUHJlc2V0Q29sb3JzLmluZGV4T2YodGhpcy5uekNvbG9yKSAhPT0gLTEgPyB0aGlzLm56Q29sb3IgOiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19