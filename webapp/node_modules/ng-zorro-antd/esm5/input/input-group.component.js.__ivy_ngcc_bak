/**
 * @fileoverview added by tsickle
 * Generated from: input-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __read, __spread } from "tslib";
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
var NzInputGroupWhitSuffixOrPrefixDirective = /** @class */ (function () {
    function NzInputGroupWhitSuffixOrPrefixDirective(elementRef) {
        this.elementRef = elementRef;
    }
    NzInputGroupWhitSuffixOrPrefixDirective.decorators = [
        { type: Directive, args: [{
                    selector: "nz-input-group[nzSuffix], nz-input-group[nzPrefix]"
                },] }
    ];
    /** @nocollapse */
    NzInputGroupWhitSuffixOrPrefixDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return NzInputGroupWhitSuffixOrPrefixDirective;
}());
export { NzInputGroupWhitSuffixOrPrefixDirective };
if (false) {
    /** @type {?} */
    NzInputGroupWhitSuffixOrPrefixDirective.prototype.elementRef;
}
var NzInputGroupComponent = /** @class */ (function () {
    function NzInputGroupComponent(focusMonitor, elementRef, cdr) {
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
    NzInputGroupComponent.prototype.updateChildrenInputSize = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.listOfNzInputDirective) {
            this.listOfNzInputDirective.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return (item.nzSize = _this.nzSize); }));
        }
    };
    /**
     * @return {?}
     */
    NzInputGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.focusMonitor
            .monitor(this.elementRef, true)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        function (focusOrigin) {
            _this.focused = !!focusOrigin;
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NzInputGroupComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.updateChildrenInputSize();
        /** @type {?} */
        var listOfInputChange$ = this.listOfNzInputDirective.changes.pipe(startWith(this.listOfNzInputDirective));
        listOfInputChange$
            .pipe(switchMap((/**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            return merge.apply(void 0, __spread([listOfInputChange$], list.map((/**
             * @param {?} input
             * @return {?}
             */
            function (input) { return input.disabled$; }))));
        })), flatMap((/**
         * @return {?}
         */
        function () { return listOfInputChange$; })), map((/**
         * @param {?} list
         * @return {?}
         */
        function (list) { return list.some((/**
         * @param {?} input
         * @return {?}
         */
        function (input) { return input.disabled; })); })), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} disabled
         * @return {?}
         */
        function (disabled) {
            _this.disabled = disabled;
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzInputGroupComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzSize = changes.nzSize, nzSuffix = changes.nzSuffix, nzPrefix = changes.nzPrefix, nzPrefixIcon = changes.nzPrefixIcon, nzSuffixIcon = changes.nzSuffixIcon, nzAddOnAfter = changes.nzAddOnAfter, nzAddOnBefore = changes.nzAddOnBefore, nzAddOnAfterIcon = changes.nzAddOnAfterIcon, nzAddOnBeforeIcon = changes.nzAddOnBeforeIcon;
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
    };
    /**
     * @return {?}
     */
    NzInputGroupComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzInputGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-input-group',
                    exportAs: 'nzInputGroup',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <span class=\"ant-input-wrapper ant-input-group\" *ngIf=\"isAddOn; else noAddOnTemplate\">\n      <span\n        *ngIf=\"nzAddOnBefore || nzAddOnBeforeIcon\"\n        nz-input-group-slot\n        type=\"addon\"\n        [icon]=\"nzAddOnBeforeIcon\"\n        [template]=\"nzAddOnBefore\"\n      >\n      </span>\n      <span\n        *ngIf=\"isAffix; else contentTemplate\"\n        class=\"ant-input-affix-wrapper\"\n        [class.ant-input-affix-wrapper-sm]=\"isSmall\"\n        [class.ant-input-affix-wrapper-lg]=\"isLarge\"\n      >\n        <ng-template [ngTemplateOutlet]=\"affixTemplate\"></ng-template>\n      </span>\n      <span\n        *ngIf=\"nzAddOnAfter || nzAddOnAfterIcon\"\n        nz-input-group-slot\n        type=\"addon\"\n        [icon]=\"nzAddOnAfterIcon\"\n        [template]=\"nzAddOnAfter\"\n      ></span>\n    </span>\n    <ng-template #noAddOnTemplate>\n      <ng-template [ngIf]=\"isAffix\" [ngIfElse]=\"contentTemplate\">\n        <ng-template [ngTemplateOutlet]=\"affixTemplate\"></ng-template>\n      </ng-template>\n    </ng-template>\n    <ng-template #affixTemplate>\n      <span *ngIf=\"nzPrefix || nzPrefixIcon\" nz-input-group-slot type=\"prefix\" [icon]=\"nzPrefixIcon\" [template]=\"nzPrefix\"></span>\n      <ng-template [ngTemplateOutlet]=\"contentTemplate\"></ng-template>\n      <span *ngIf=\"nzSuffix || nzSuffixIcon\" nz-input-group-slot type=\"suffix\" [icon]=\"nzSuffixIcon\" [template]=\"nzSuffix\"></span>\n    </ng-template>\n    <ng-template #contentTemplate>\n      <ng-content></ng-content>\n    </ng-template>\n  ",
                    host: {
                        '[class.ant-input-group-compact]': "nzCompact",
                        '[class.ant-input-search-enter-button]': "nzSearch",
                        '[class.ant-input-search]': "nzSearch",
                        '[class.ant-input-search-sm]': "nzSearch && isSmall",
                        '[class.ant-input-search-large]': "nzSearch && isLarge",
                        '[class.ant-input-group-wrapper]': "isAddOn",
                        '[class.ant-input-group-wrapper-lg]': "isAddOn && isLarge",
                        '[class.ant-input-group-wrapper-sm]': "isAddOn && isSmall",
                        '[class.ant-input-affix-wrapper]': "isAffix && !isAddOn",
                        '[class.ant-input-affix-wrapper-focused]': "isAffix && focused",
                        '[class.ant-input-affix-wrapper-disabled]': "isAffix && disabled",
                        '[class.ant-input-affix-wrapper-lg]': "isAffix && !isAddOn && isLarge",
                        '[class.ant-input-affix-wrapper-sm]': "isAffix && !isAddOn && isSmall",
                        '[class.ant-input-group]': "!isAffix && !isAddOn",
                        '[class.ant-input-group-lg]': "!isAffix && !isAddOn && isLarge",
                        '[class.ant-input-group-sm]': "!isAffix && !isAddOn && isSmall"
                    }
                }] }
    ];
    /** @nocollapse */
    NzInputGroupComponent.ctorParameters = function () { return [
        { type: FocusMonitor },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
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
    return NzInputGroupComponent;
}());
export { NzInputGroupComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pbnB1dC8iLCJzb3VyY2VzIjpbImlucHV0LWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBSUwsU0FBUyxFQUdULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVyRDtJQUlFLGlEQUFtQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUcsQ0FBQzs7Z0JBSjlDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0RBQW9EO2lCQUMvRDs7OztnQkFsQkMsVUFBVTs7SUFxQlosOENBQUM7Q0FBQSxBQUxELElBS0M7U0FGWSx1Q0FBdUM7OztJQUN0Qyw2REFBNkI7O0FBRzNDO0lBeUZFLCtCQUFvQixZQUEwQixFQUFVLFVBQXNCLEVBQVUsR0FBc0I7UUFBMUYsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFuQnJHLHNCQUFpQixHQUFtQixJQUFJLENBQUM7UUFDekMscUJBQWdC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RSwyQ0FBOEI7Ozs7O0lBQUUsb0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUXVlcnlMaXN0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE56U2l6ZUxEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZsYXRNYXAsIG1hcCwgc3RhcnRXaXRoLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE56SW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL2lucHV0LmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYG56LWlucHV0LWdyb3VwW256U3VmZml4XSwgbnotaW5wdXQtZ3JvdXBbbnpQcmVmaXhdYFxufSlcbmV4cG9ydCBjbGFzcyBOeklucHV0R3JvdXBXaGl0U3VmZml4T3JQcmVmaXhEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotaW5wdXQtZ3JvdXAnLFxuICBleHBvcnRBczogJ256SW5wdXRHcm91cCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiBjbGFzcz1cImFudC1pbnB1dC13cmFwcGVyIGFudC1pbnB1dC1ncm91cFwiICpuZ0lmPVwiaXNBZGRPbjsgZWxzZSBub0FkZE9uVGVtcGxhdGVcIj5cbiAgICAgIDxzcGFuXG4gICAgICAgICpuZ0lmPVwibnpBZGRPbkJlZm9yZSB8fCBuekFkZE9uQmVmb3JlSWNvblwiXG4gICAgICAgIG56LWlucHV0LWdyb3VwLXNsb3RcbiAgICAgICAgdHlwZT1cImFkZG9uXCJcbiAgICAgICAgW2ljb25dPVwibnpBZGRPbkJlZm9yZUljb25cIlxuICAgICAgICBbdGVtcGxhdGVdPVwibnpBZGRPbkJlZm9yZVwiXG4gICAgICA+XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhblxuICAgICAgICAqbmdJZj1cImlzQWZmaXg7IGVsc2UgY29udGVudFRlbXBsYXRlXCJcbiAgICAgICAgY2xhc3M9XCJhbnQtaW5wdXQtYWZmaXgtd3JhcHBlclwiXG4gICAgICAgIFtjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlci1zbV09XCJpc1NtYWxsXCJcbiAgICAgICAgW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLWxnXT1cImlzTGFyZ2VcIlxuICAgICAgPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYWZmaXhUZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhblxuICAgICAgICAqbmdJZj1cIm56QWRkT25BZnRlciB8fCBuekFkZE9uQWZ0ZXJJY29uXCJcbiAgICAgICAgbnotaW5wdXQtZ3JvdXAtc2xvdFxuICAgICAgICB0eXBlPVwiYWRkb25cIlxuICAgICAgICBbaWNvbl09XCJuekFkZE9uQWZ0ZXJJY29uXCJcbiAgICAgICAgW3RlbXBsYXRlXT1cIm56QWRkT25BZnRlclwiXG4gICAgICA+PC9zcGFuPlxuICAgIDwvc3Bhbj5cbiAgICA8bmctdGVtcGxhdGUgI25vQWRkT25UZW1wbGF0ZT5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJpc0FmZml4XCIgW25nSWZFbHNlXT1cImNvbnRlbnRUZW1wbGF0ZVwiPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYWZmaXhUZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlICNhZmZpeFRlbXBsYXRlPlxuICAgICAgPHNwYW4gKm5nSWY9XCJuelByZWZpeCB8fCBuelByZWZpeEljb25cIiBuei1pbnB1dC1ncm91cC1zbG90IHR5cGU9XCJwcmVmaXhcIiBbaWNvbl09XCJuelByZWZpeEljb25cIiBbdGVtcGxhdGVdPVwibnpQcmVmaXhcIj48L3NwYW4+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudFRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxzcGFuICpuZ0lmPVwibnpTdWZmaXggfHwgbnpTdWZmaXhJY29uXCIgbnotaW5wdXQtZ3JvdXAtc2xvdCB0eXBlPVwic3VmZml4XCIgW2ljb25dPVwibnpTdWZmaXhJY29uXCIgW3RlbXBsYXRlXT1cIm56U3VmZml4XCI+PC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlICNjb250ZW50VGVtcGxhdGU+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLWNvbXBhY3RdJzogYG56Q29tcGFjdGAsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtc2VhcmNoLWVudGVyLWJ1dHRvbl0nOiBgbnpTZWFyY2hgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaF0nOiBgbnpTZWFyY2hgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaC1zbV0nOiBgbnpTZWFyY2ggJiYgaXNTbWFsbGAsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtc2VhcmNoLWxhcmdlXSc6IGBuelNlYXJjaCAmJiBpc0xhcmdlYCxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC13cmFwcGVyXSc6IGBpc0FkZE9uYCxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC13cmFwcGVyLWxnXSc6IGBpc0FkZE9uICYmIGlzTGFyZ2VgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLXdyYXBwZXItc21dJzogYGlzQWRkT24gJiYgaXNTbWFsbGAsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlcl0nOiBgaXNBZmZpeCAmJiAhaXNBZGRPbmAsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlci1mb2N1c2VkXSc6IGBpc0FmZml4ICYmIGZvY3VzZWRgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LWFmZml4LXdyYXBwZXItZGlzYWJsZWRdJzogYGlzQWZmaXggJiYgZGlzYWJsZWRgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LWFmZml4LXdyYXBwZXItbGddJzogYGlzQWZmaXggJiYgIWlzQWRkT24gJiYgaXNMYXJnZWAsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlci1zbV0nOiBgaXNBZmZpeCAmJiAhaXNBZGRPbiAmJiBpc1NtYWxsYCxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cF0nOiBgIWlzQWZmaXggJiYgIWlzQWRkT25gLFxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLWxnXSc6IGAhaXNBZmZpeCAmJiAhaXNBZGRPbiAmJiBpc0xhcmdlYCxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC1zbV0nOiBgIWlzQWZmaXggJiYgIWlzQWRkT24gJiYgaXNTbWFsbGBcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOeklucHV0R3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2VhcmNoOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekNvbXBhY3Q6IEJvb2xlYW5JbnB1dDtcblxuICBAQ29udGVudENoaWxkcmVuKE56SW5wdXREaXJlY3RpdmUpIGxpc3RPZk56SW5wdXREaXJlY3RpdmUhOiBRdWVyeUxpc3Q8TnpJbnB1dERpcmVjdGl2ZT47XG4gIEBJbnB1dCgpIG56QWRkT25CZWZvcmVJY29uPzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56QWRkT25BZnRlckljb24/OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpQcmVmaXhJY29uPzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56U3VmZml4SWNvbj86IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuekFkZE9uQmVmb3JlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56QWRkT25BZnRlcj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuelByZWZpeD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuelN1ZmZpeD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuelNpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNlYXJjaCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDb21wYWN0ID0gZmFsc2U7XG4gIGlzTGFyZ2UgPSBmYWxzZTtcbiAgaXNTbWFsbCA9IGZhbHNlO1xuICBpc0FmZml4ID0gZmFsc2U7XG4gIGlzQWRkT24gPSBmYWxzZTtcbiAgZm9jdXNlZCA9IGZhbHNlO1xuICBkaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICB1cGRhdGVDaGlsZHJlbklucHV0U2l6ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5saXN0T2ZOeklucHV0RGlyZWN0aXZlKSB7XG4gICAgICB0aGlzLmxpc3RPZk56SW5wdXREaXJlY3RpdmUuZm9yRWFjaChpdGVtID0+IChpdGVtLm56U2l6ZSA9IHRoaXMubnpTaXplKSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c01vbml0b3JcbiAgICAgIC5tb25pdG9yKHRoaXMuZWxlbWVudFJlZiwgdHJ1ZSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoZm9jdXNPcmlnaW4gPT4ge1xuICAgICAgICB0aGlzLmZvY3VzZWQgPSAhIWZvY3VzT3JpZ2luO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5JbnB1dFNpemUoKTtcbiAgICBjb25zdCBsaXN0T2ZJbnB1dENoYW5nZSQgPSB0aGlzLmxpc3RPZk56SW5wdXREaXJlY3RpdmUuY2hhbmdlcy5waXBlKHN0YXJ0V2l0aCh0aGlzLmxpc3RPZk56SW5wdXREaXJlY3RpdmUpKTtcbiAgICBsaXN0T2ZJbnB1dENoYW5nZSRcbiAgICAgIC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAobGlzdCA9PiB7XG4gICAgICAgICAgcmV0dXJuIG1lcmdlKC4uLltsaXN0T2ZJbnB1dENoYW5nZSQsIC4uLmxpc3QubWFwKChpbnB1dDogTnpJbnB1dERpcmVjdGl2ZSkgPT4gaW5wdXQuZGlzYWJsZWQkKV0pO1xuICAgICAgICB9KSxcbiAgICAgICAgZmxhdE1hcCgoKSA9PiBsaXN0T2ZJbnB1dENoYW5nZSQpLFxuICAgICAgICBtYXAobGlzdCA9PiBsaXN0LnNvbWUoKGlucHV0OiBOeklucHV0RGlyZWN0aXZlKSA9PiBpbnB1dC5kaXNhYmxlZCkpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoZGlzYWJsZWQgPT4ge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gIH1cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHtcbiAgICAgIG56U2l6ZSxcbiAgICAgIG56U3VmZml4LFxuICAgICAgbnpQcmVmaXgsXG4gICAgICBuelByZWZpeEljb24sXG4gICAgICBuelN1ZmZpeEljb24sXG4gICAgICBuekFkZE9uQWZ0ZXIsXG4gICAgICBuekFkZE9uQmVmb3JlLFxuICAgICAgbnpBZGRPbkFmdGVySWNvbixcbiAgICAgIG56QWRkT25CZWZvcmVJY29uXG4gICAgfSA9IGNoYW5nZXM7XG4gICAgaWYgKG56U2l6ZSkge1xuICAgICAgdGhpcy51cGRhdGVDaGlsZHJlbklucHV0U2l6ZSgpO1xuICAgICAgdGhpcy5pc0xhcmdlID0gdGhpcy5uelNpemUgPT09ICdsYXJnZSc7XG4gICAgICB0aGlzLmlzU21hbGwgPSB0aGlzLm56U2l6ZSA9PT0gJ3NtYWxsJztcbiAgICB9XG4gICAgaWYgKG56U3VmZml4IHx8IG56UHJlZml4IHx8IG56UHJlZml4SWNvbiB8fCBuelN1ZmZpeEljb24pIHtcbiAgICAgIHRoaXMuaXNBZmZpeCA9ICEhKHRoaXMubnpTdWZmaXggfHwgdGhpcy5uelByZWZpeCB8fCB0aGlzLm56UHJlZml4SWNvbiB8fCB0aGlzLm56U3VmZml4SWNvbik7XG4gICAgfVxuICAgIGlmIChuekFkZE9uQWZ0ZXIgfHwgbnpBZGRPbkJlZm9yZSB8fCBuekFkZE9uQWZ0ZXJJY29uIHx8IG56QWRkT25CZWZvcmVJY29uKSB7XG4gICAgICB0aGlzLmlzQWRkT24gPSAhISh0aGlzLm56QWRkT25BZnRlciB8fCB0aGlzLm56QWRkT25CZWZvcmUgfHwgdGhpcy5uekFkZE9uQWZ0ZXJJY29uIHx8IHRoaXMubnpBZGRPbkJlZm9yZUljb24pO1xuICAgIH1cbiAgfVxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==