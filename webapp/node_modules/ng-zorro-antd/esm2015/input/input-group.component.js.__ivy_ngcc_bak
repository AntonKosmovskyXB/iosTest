/**
 * @fileoverview added by tsickle
 * Generated from: input-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Directive, ElementRef, Input, QueryList, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { merge, Subject } from 'rxjs';
import { flatMap, map, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { NzInputDirective } from './input.directive';
export class NzInputGroupWhitSuffixOrPrefixDirective {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
}
NzInputGroupWhitSuffixOrPrefixDirective.decorators = [
    { type: Directive, args: [{
                selector: `nz-input-group[nzSuffix], nz-input-group[nzPrefix]`
            },] }
];
/** @nocollapse */
NzInputGroupWhitSuffixOrPrefixDirective.ctorParameters = () => [
    { type: ElementRef }
];
if (false) {
    /** @type {?} */
    NzInputGroupWhitSuffixOrPrefixDirective.prototype.elementRef;
}
export class NzInputGroupComponent {
    /**
     * @param {?} focusMonitor
     * @param {?} elementRef
     * @param {?} cdr
     */
    constructor(focusMonitor, elementRef, cdr) {
        this.focusMonitor = focusMonitor;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.nzAddOnBeforeIcon = null;
        this.nzAddOnAfterIcon = null;
        this.nzPrefixIcon = null;
        this.nzSuffixIcon = null;
        this.nzSize = 'default';
        this.nzSearch = false;
        this.nzCompact = false;
        this.isLarge = false;
        this.isSmall = false;
        this.isAffix = false;
        this.isAddOn = false;
        this.focused = false;
        this.disabled = false;
        this.destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    updateChildrenInputSize() {
        if (this.listOfNzInputDirective) {
            this.listOfNzInputDirective.forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => (item.nzSize = this.nzSize)));
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.focusMonitor
            .monitor(this.elementRef, true)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        focusOrigin => {
            this.focused = !!focusOrigin;
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.updateChildrenInputSize();
        /** @type {?} */
        const listOfInputChange$ = this.listOfNzInputDirective.changes.pipe(startWith(this.listOfNzInputDirective));
        listOfInputChange$
            .pipe(switchMap((/**
         * @param {?} list
         * @return {?}
         */
        list => {
            return merge(...[listOfInputChange$, ...list.map((/**
                 * @param {?} input
                 * @return {?}
                 */
                (input) => input.disabled$))]);
        })), flatMap((/**
         * @return {?}
         */
        () => listOfInputChange$)), map((/**
         * @param {?} list
         * @return {?}
         */
        list => list.some((/**
         * @param {?} input
         * @return {?}
         */
        (input) => input.disabled)))), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} disabled
         * @return {?}
         */
        disabled => {
            this.disabled = disabled;
            this.cdr.markForCheck();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzSize, nzSuffix, nzPrefix, nzPrefixIcon, nzSuffixIcon, nzAddOnAfter, nzAddOnBefore, nzAddOnAfterIcon, nzAddOnBeforeIcon } = changes;
        if (nzSize) {
            this.updateChildrenInputSize();
            this.isLarge = this.nzSize === 'large';
            this.isSmall = this.nzSize === 'small';
        }
        if (nzSuffix || nzPrefix || nzPrefixIcon || nzSuffixIcon) {
            this.isAffix = !!(this.nzSuffix || this.nzPrefix || this.nzPrefixIcon || this.nzSuffixIcon);
        }
        if (nzAddOnAfter || nzAddOnBefore || nzAddOnAfterIcon || nzAddOnBeforeIcon) {
            this.isAddOn = !!(this.nzAddOnAfter || this.nzAddOnBefore || this.nzAddOnAfterIcon || this.nzAddOnBeforeIcon);
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
NzInputGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-input-group',
                exportAs: 'nzInputGroup',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <span class="ant-input-wrapper ant-input-group" *ngIf="isAddOn; else noAddOnTemplate">
      <span
        *ngIf="nzAddOnBefore || nzAddOnBeforeIcon"
        nz-input-group-slot
        type="addon"
        [icon]="nzAddOnBeforeIcon"
        [template]="nzAddOnBefore"
      >
      </span>
      <span
        *ngIf="isAffix; else contentTemplate"
        class="ant-input-affix-wrapper"
        [class.ant-input-affix-wrapper-sm]="isSmall"
        [class.ant-input-affix-wrapper-lg]="isLarge"
      >
        <ng-template [ngTemplateOutlet]="affixTemplate"></ng-template>
      </span>
      <span
        *ngIf="nzAddOnAfter || nzAddOnAfterIcon"
        nz-input-group-slot
        type="addon"
        [icon]="nzAddOnAfterIcon"
        [template]="nzAddOnAfter"
      ></span>
    </span>
    <ng-template #noAddOnTemplate>
      <ng-template [ngIf]="isAffix" [ngIfElse]="contentTemplate">
        <ng-template [ngTemplateOutlet]="affixTemplate"></ng-template>
      </ng-template>
    </ng-template>
    <ng-template #affixTemplate>
      <span *ngIf="nzPrefix || nzPrefixIcon" nz-input-group-slot type="prefix" [icon]="nzPrefixIcon" [template]="nzPrefix"></span>
      <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
      <span *ngIf="nzSuffix || nzSuffixIcon" nz-input-group-slot type="suffix" [icon]="nzSuffixIcon" [template]="nzSuffix"></span>
    </ng-template>
    <ng-template #contentTemplate>
      <ng-content></ng-content>
    </ng-template>
  `,
                host: {
                    '[class.ant-input-group-compact]': `nzCompact`,
                    '[class.ant-input-search-enter-button]': `nzSearch`,
                    '[class.ant-input-search]': `nzSearch`,
                    '[class.ant-input-search-sm]': `nzSearch && isSmall`,
                    '[class.ant-input-search-large]': `nzSearch && isLarge`,
                    '[class.ant-input-group-wrapper]': `isAddOn`,
                    '[class.ant-input-group-wrapper-lg]': `isAddOn && isLarge`,
                    '[class.ant-input-group-wrapper-sm]': `isAddOn && isSmall`,
                    '[class.ant-input-affix-wrapper]': `isAffix && !isAddOn`,
                    '[class.ant-input-affix-wrapper-focused]': `isAffix && focused`,
                    '[class.ant-input-affix-wrapper-disabled]': `isAffix && disabled`,
                    '[class.ant-input-affix-wrapper-lg]': `isAffix && !isAddOn && isLarge`,
                    '[class.ant-input-affix-wrapper-sm]': `isAffix && !isAddOn && isSmall`,
                    '[class.ant-input-group]': `!isAffix && !isAddOn`,
                    '[class.ant-input-group-lg]': `!isAffix && !isAddOn && isLarge`,
                    '[class.ant-input-group-sm]': `!isAffix && !isAddOn && isSmall`
                }
            }] }
];
/** @nocollapse */
NzInputGroupComponent.ctorParameters = () => [
    { type: FocusMonitor },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
NzInputGroupComponent.propDecorators = {
    listOfNzInputDirective: [{ type: ContentChildren, args: [NzInputDirective,] }],
    nzAddOnBeforeIcon: [{ type: Input }],
    nzAddOnAfterIcon: [{ type: Input }],
    nzPrefixIcon: [{ type: Input }],
    nzSuffixIcon: [{ type: Input }],
    nzAddOnBefore: [{ type: Input }],
    nzAddOnAfter: [{ type: Input }],
    nzPrefix: [{ type: Input }],
    nzSuffix: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzSearch: [{ type: Input }],
    nzCompact: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzInputGroupComponent.prototype, "nzSearch", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzInputGroupComponent.prototype, "nzCompact", void 0);
if (false) {
    /** @type {?} */
    NzInputGroupComponent.ngAcceptInputType_nzSearch;
    /** @type {?} */
    NzInputGroupComponent.ngAcceptInputType_nzCompact;
    /** @type {?} */
    NzInputGroupComponent.prototype.listOfNzInputDirective;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzAddOnBeforeIcon;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzAddOnAfterIcon;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzPrefixIcon;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzSuffixIcon;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzAddOnBefore;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzAddOnAfter;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzPrefix;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzSuffix;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzSize;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzSearch;
    /** @type {?} */
    NzInputGroupComponent.prototype.nzCompact;
    /** @type {?} */
    NzInputGroupComponent.prototype.isLarge;
    /** @type {?} */
    NzInputGroupComponent.prototype.isSmall;
    /** @type {?} */
    NzInputGroupComponent.prototype.isAffix;
    /** @type {?} */
    NzInputGroupComponent.prototype.isAddOn;
    /** @type {?} */
    NzInputGroupComponent.prototype.focused;
    /** @type {?} */
    NzInputGroupComponent.prototype.disabled;
    /**
     * @type {?}
     * @private
     */
    NzInputGroupComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzInputGroupComponent.prototype.focusMonitor;
    /**
     * @type {?}
     * @private
     */
    NzInputGroupComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzInputGroupComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pbnB1dC8iLCJzb3VyY2VzIjpbImlucHV0LWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBSUwsU0FBUyxFQUdULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUtyRCxNQUFNLE9BQU8sdUNBQXVDOzs7O0lBQ2xELFlBQW1CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBRyxDQUFDOzs7WUFKOUMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvREFBb0Q7YUFDL0Q7Ozs7WUFsQkMsVUFBVTs7OztJQW9CRSw2REFBNkI7O0FBb0UzQyxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7SUF3QmhDLFlBQW9CLFlBQTBCLEVBQVUsVUFBc0IsRUFBVSxHQUFzQjtRQUExRixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQW5Cckcsc0JBQWlCLEdBQW1CLElBQUksQ0FBQztRQUN6QyxxQkFB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ZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUXVlcnlMaXN0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE56U2l6ZUxEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZsYXRNYXAsIG1hcCwgc3RhcnRXaXRoLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE56SW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL2lucHV0LmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYG56LWlucHV0LWdyb3VwW256U3VmZml4XSwgbnotaW5wdXQtZ3JvdXBbbnpQcmVmaXhdYFxufSlcbmV4cG9ydCBjbGFzcyBOeklucHV0R3JvdXBXaGl0U3VmZml4T3JQcmVmaXhEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotaW5wdXQtZ3JvdXAnLFxuICBleHBvcnRBczogJ256SW5wdXRHcm91cCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiBjbGFzcz1cImFudC1pbnB1dC13cmFwcGVyIGFudC1pbnB1dC1ncm91cFwiICpuZ0lmPVwiaXNBZGRPbjsgZWxzZSBub0FkZE9uVGVtcGxhdGVcIj5cbiAgICAgIDxzcGFuXG4gICAgICAgICpuZ0lmPVwibnpBZGRPbkJlZm9yZSB8fCBuekFkZE9uQmVmb3JlSWNvblwiXG4gICAgICAgIG56LWlucHV0LWdyb3VwLXNsb3RcbiAgICAgICAgdHlwZT1cImFkZG9uXCJcbiAgICAgICAgW2ljb25dPVwibnpBZGRPbkJlZm9yZUljb25cIlxuICAgICAgICBbdGVtcGxhdGVdPVwibnpBZGRPbkJlZm9yZVwiXG4gICAgICA+XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhblxuICAgICAgICAqbmdJZj1cImlzQWZmaXg7IGVsc2UgY29udGVudFRlbXBsYXRlXCJcbiAgICAgICAgY2xhc3M9XCJhbnQtaW5wdXQtYWZmaXgtd3JhcHBlclwiXG4gICAgICAgIFtjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlci1zbV09XCJpc1NtYWxsXCJcbiAgICAgICAgW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLWxnXT1cImlzTGFyZ2VcIlxuICAgICAgPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYWZmaXhUZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhblxuICAgICAgICAqbmdJZj1cIm56QWRkT25BZnRlciB8fCBuekFkZE9uQWZ0ZXJJY29uXCJcbiAgICAgICAgbnotaW5wdXQtZ3JvdXAtc2xvdFxuICAgICAgICB0eXBlPVwiYWRkb25cIlxuICAgICAgICBbaWNvbl09XCJuekFkZE9uQWZ0ZXJJY29uXCJcbiAgICAgICAgW3RlbXBsYXRlXT1cIm56QWRkT25BZnRlclwiXG4gICAgICA+PC9zcGFuPlxuICAgIDwvc3Bhbj5cbiAgICA8bmctdGVtcGxhdGUgI25vQWRkT25UZW1wbGF0ZT5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJpc0FmZml4XCIgW25nSWZFbHNlXT1cImNvbnRlbnRUZW1wbGF0ZVwiPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYWZmaXhUZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlICNhZmZpeFRlbXBsYXRlPlxuICAgICAgPHNwYW4gKm5nSWY9XCJuelByZWZpeCB8fCBuelByZWZpeEljb25cIiBuei1pbnB1dC1ncm91cC1zbG90IHR5cGU9XCJwcmVmaXhcIiBbaWNvbl09XCJuelByZWZpeEljb25cIiBbdGVtcGxhdGVdPVwibnpQcmVmaXhcIj48L3NwYW4+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudFRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxzcGFuICpuZ0lmPVwibnpTdWZmaXggfHwgbnpTdWZmaXhJY29uXCIgbnotaW5wdXQtZ3JvdXAtc2xvdCB0eXBlPVwic3VmZml4XCIgW2ljb25dPVwibnpTdWZmaXhJY29uXCIgW3RlbXBsYXRlXT1cIm56U3VmZml4XCI+PC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlICNjb250ZW50VGVtcGxhdGU+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLWNvbXBhY3RdJzogYG56Q29tcGFjdGAsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtc2VhcmNoLWVudGVyLWJ1dHRvbl0nOiBgbnpTZWFyY2hgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaF0nOiBgbnpTZWFyY2hgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaC1zbV0nOiBgbnpTZWFyY2ggJiYgaXNTbWFsbGAsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtc2VhcmNoLWxhcmdlXSc6IGBuelNlYXJjaCAmJiBpc0xhcmdlYCxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC13cmFwcGVyXSc6IGBpc0FkZE9uYCxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC13cmFwcGVyLWxnXSc6IGBpc0FkZE9uICYmIGlzTGFyZ2VgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLXdyYXBwZXItc21dJzogYGlzQWRkT24gJiYgaXNTbWFsbGAsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlcl0nOiBgaXNBZmZpeCAmJiAhaXNBZGRPbmAsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlci1mb2N1c2VkXSc6IGBpc0FmZml4ICYmIGZvY3VzZWRgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LWFmZml4LXdyYXBwZXItZGlzYWJsZWRdJzogYGlzQWZmaXggJiYgZGlzYWJsZWRgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LWFmZml4LXdyYXBwZXItbGddJzogYGlzQWZmaXggJiYgIWlzQWRkT24gJiYgaXNMYXJnZWAsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlci1zbV0nOiBgaXNBZmZpeCAmJiAhaXNBZGRPbiAmJiBpc1NtYWxsYCxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cF0nOiBgIWlzQWZmaXggJiYgIWlzQWRkT25gLFxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLWxnXSc6IGAhaXNBZmZpeCAmJiAhaXNBZGRPbiAmJiBpc0xhcmdlYCxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC1zbV0nOiBgIWlzQWZmaXggJiYgIWlzQWRkT24gJiYgaXNTbWFsbGBcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOeklucHV0R3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2VhcmNoOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekNvbXBhY3Q6IEJvb2xlYW5JbnB1dDtcblxuICBAQ29udGVudENoaWxkcmVuKE56SW5wdXREaXJlY3RpdmUpIGxpc3RPZk56SW5wdXREaXJlY3RpdmUhOiBRdWVyeUxpc3Q8TnpJbnB1dERpcmVjdGl2ZT47XG4gIEBJbnB1dCgpIG56QWRkT25CZWZvcmVJY29uPzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56QWRkT25BZnRlckljb24/OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpQcmVmaXhJY29uPzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56U3VmZml4SWNvbj86IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuekFkZE9uQmVmb3JlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56QWRkT25BZnRlcj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuelByZWZpeD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuelN1ZmZpeD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuelNpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNlYXJjaCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDb21wYWN0ID0gZmFsc2U7XG4gIGlzTGFyZ2UgPSBmYWxzZTtcbiAgaXNTbWFsbCA9IGZhbHNlO1xuICBpc0FmZml4ID0gZmFsc2U7XG4gIGlzQWRkT24gPSBmYWxzZTtcbiAgZm9jdXNlZCA9IGZhbHNlO1xuICBkaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICB1cGRhdGVDaGlsZHJlbklucHV0U2l6ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5saXN0T2ZOeklucHV0RGlyZWN0aXZlKSB7XG4gICAgICB0aGlzLmxpc3RPZk56SW5wdXREaXJlY3RpdmUuZm9yRWFjaChpdGVtID0+IChpdGVtLm56U2l6ZSA9IHRoaXMubnpTaXplKSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c01vbml0b3JcbiAgICAgIC5tb25pdG9yKHRoaXMuZWxlbWVudFJlZiwgdHJ1ZSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoZm9jdXNPcmlnaW4gPT4ge1xuICAgICAgICB0aGlzLmZvY3VzZWQgPSAhIWZvY3VzT3JpZ2luO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5JbnB1dFNpemUoKTtcbiAgICBjb25zdCBsaXN0T2ZJbnB1dENoYW5nZSQgPSB0aGlzLmxpc3RPZk56SW5wdXREaXJlY3RpdmUuY2hhbmdlcy5waXBlKHN0YXJ0V2l0aCh0aGlzLmxpc3RPZk56SW5wdXREaXJlY3RpdmUpKTtcbiAgICBsaXN0T2ZJbnB1dENoYW5nZSRcbiAgICAgIC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAobGlzdCA9PiB7XG4gICAgICAgICAgcmV0dXJuIG1lcmdlKC4uLltsaXN0T2ZJbnB1dENoYW5nZSQsIC4uLmxpc3QubWFwKChpbnB1dDogTnpJbnB1dERpcmVjdGl2ZSkgPT4gaW5wdXQuZGlzYWJsZWQkKV0pO1xuICAgICAgICB9KSxcbiAgICAgICAgZmxhdE1hcCgoKSA9PiBsaXN0T2ZJbnB1dENoYW5nZSQpLFxuICAgICAgICBtYXAobGlzdCA9PiBsaXN0LnNvbWUoKGlucHV0OiBOeklucHV0RGlyZWN0aXZlKSA9PiBpbnB1dC5kaXNhYmxlZCkpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoZGlzYWJsZWQgPT4ge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gIH1cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHtcbiAgICAgIG56U2l6ZSxcbiAgICAgIG56U3VmZml4LFxuICAgICAgbnpQcmVmaXgsXG4gICAgICBuelByZWZpeEljb24sXG4gICAgICBuelN1ZmZpeEljb24sXG4gICAgICBuekFkZE9uQWZ0ZXIsXG4gICAgICBuekFkZE9uQmVmb3JlLFxuICAgICAgbnpBZGRPbkFmdGVySWNvbixcbiAgICAgIG56QWRkT25CZWZvcmVJY29uXG4gICAgfSA9IGNoYW5nZXM7XG4gICAgaWYgKG56U2l6ZSkge1xuICAgICAgdGhpcy51cGRhdGVDaGlsZHJlbklucHV0U2l6ZSgpO1xuICAgICAgdGhpcy5pc0xhcmdlID0gdGhpcy5uelNpemUgPT09ICdsYXJnZSc7XG4gICAgICB0aGlzLmlzU21hbGwgPSB0aGlzLm56U2l6ZSA9PT0gJ3NtYWxsJztcbiAgICB9XG4gICAgaWYgKG56U3VmZml4IHx8IG56UHJlZml4IHx8IG56UHJlZml4SWNvbiB8fCBuelN1ZmZpeEljb24pIHtcbiAgICAgIHRoaXMuaXNBZmZpeCA9ICEhKHRoaXMubnpTdWZmaXggfHwgdGhpcy5uelByZWZpeCB8fCB0aGlzLm56UHJlZml4SWNvbiB8fCB0aGlzLm56U3VmZml4SWNvbik7XG4gICAgfVxuICAgIGlmIChuekFkZE9uQWZ0ZXIgfHwgbnpBZGRPbkJlZm9yZSB8fCBuekFkZE9uQWZ0ZXJJY29uIHx8IG56QWRkT25CZWZvcmVJY29uKSB7XG4gICAgICB0aGlzLmlzQWRkT24gPSAhISh0aGlzLm56QWRkT25BZnRlciB8fCB0aGlzLm56QWRkT25CZWZvcmUgfHwgdGhpcy5uekFkZE9uQWZ0ZXJJY29uIHx8IHRoaXMubnpBZGRPbkJlZm9yZUljb24pO1xuICAgIH1cbiAgfVxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==