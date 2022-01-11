/**
 * @fileoverview added by tsickle
 * Generated from: button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { Subject } from 'rxjs';
import { filter, startWith, takeUntil } from 'rxjs/operators';
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'button';
var NzButtonComponent = /** @class */ (function () {
    function NzButtonComponent(elementRef, cdr, renderer, nzConfigService) {
        var _this = this;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.renderer = renderer;
        this.nzConfigService = nzConfigService;
        this.nzBlock = false;
        this.nzGhost = false;
        this.nzSearch = false;
        this.nzLoading = false;
        this.nzDanger = false;
        this.disabled = false;
        this.tabIndex = null;
        this.nzType = null;
        this.nzShape = null;
        this.nzSize = 'default';
        this.destroy$ = new Subject();
        this.loading$ = new Subject();
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
     * @param {?} event
     * @return {?}
     */
    NzButtonComponent.prototype.haltDisabledEvents = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    };
    /**
     * @param {?} nodes
     * @param {?} renderer
     * @return {?}
     */
    NzButtonComponent.prototype.insertSpan = /**
     * @param {?} nodes
     * @param {?} renderer
     * @return {?}
     */
    function (nodes, renderer) {
        nodes.forEach((/**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            if (node.nodeName === '#text') {
                /** @type {?} */
                var span = renderer.createElement('span');
                /** @type {?} */
                var parent_1 = renderer.parentNode(node);
                renderer.insertBefore(parent_1, span, node);
                renderer.appendChild(span, node);
            }
        }));
    };
    /**
     * @param {?} element
     * @param {?} renderer
     * @return {?}
     */
    NzButtonComponent.prototype.assertIconOnly = /**
     * @param {?} element
     * @param {?} renderer
     * @return {?}
     */
    function (element, renderer) {
        /** @type {?} */
        var listOfNode = Array.from(element.childNodes);
        /** @type {?} */
        var iconCount = listOfNode.filter((/**
         * @param {?} node
         * @return {?}
         */
        function (node) { return node.nodeName === 'I'; })).length;
        /** @type {?} */
        var noText = listOfNode.every((/**
         * @param {?} node
         * @return {?}
         */
        function (node) { return node.nodeName !== '#text'; }));
        /** @type {?} */
        var noSpan = listOfNode.every((/**
         * @param {?} node
         * @return {?}
         */
        function (node) { return node.nodeName !== 'SPAN'; }));
        /** @type {?} */
        var isIconOnly = noSpan && noText && iconCount >= 1;
        if (isIconOnly) {
            renderer.addClass(element, 'ant-btn-icon-only');
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzButtonComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzLoading = changes.nzLoading;
        if (nzLoading) {
            this.loading$.next(this.nzLoading);
        }
    };
    /**
     * @return {?}
     */
    NzButtonComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.assertIconOnly(this.elementRef.nativeElement, this.renderer);
        this.insertSpan(this.elementRef.nativeElement.childNodes, this.renderer);
    };
    /**
     * @return {?}
     */
    NzButtonComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.loading$
            .pipe(startWith(this.nzLoading), filter((/**
         * @return {?}
         */
        function () { return !!_this.nzIconDirectiveElement; })), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} loading
         * @return {?}
         */
        function (loading) {
            /** @type {?} */
            var nativeElement = _this.nzIconDirectiveElement.nativeElement;
            if (loading) {
                _this.renderer.setStyle(nativeElement, 'display', 'none');
            }
            else {
                _this.renderer.removeStyle(nativeElement, 'display');
            }
        }));
    };
    /**
     * @return {?}
     */
    NzButtonComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'button[nz-button], a[nz-button]',
                    exportAs: 'nzButton',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "\n    <i nz-icon nzType=\"loading\" *ngIf=\"nzLoading\"></i>\n    <ng-content></ng-content>\n  ",
                    host: {
                        '[class.ant-btn]': "true",
                        '[class.ant-btn-primary]': "nzType === 'primary'",
                        '[class.ant-btn-dashed]': "nzType === 'dashed'",
                        '[class.ant-btn-link]': "nzType === 'link'",
                        '[class.ant-btn-danger]': "nzType === 'danger'",
                        '[class.ant-btn-circle]': "nzShape === 'circle'",
                        '[class.ant-btn-round]': "nzShape === 'round'",
                        '[class.ant-btn-lg]': "nzSize === 'large'",
                        '[class.ant-btn-sm]': "nzSize === 'small'",
                        '[class.ant-btn-dangerous]': "nzDanger",
                        '[class.ant-btn-loading]': "nzLoading",
                        '[class.ant-btn-background-ghost]': "nzGhost",
                        '[class.ant-btn-block]': "nzBlock",
                        '[class.ant-input-search-button]': "nzSearch",
                        '[attr.tabindex]': 'disabled ? -1 : (tabIndex === null ? null : tabIndex)',
                        '[attr.disabled]': 'disabled || null',
                        '(click)': 'haltDisabledEvents($event)'
                    }
                }] }
    ];
    /** @nocollapse */
    NzButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NzConfigService }
    ]; };
    NzButtonComponent.propDecorators = {
        nzIconDirectiveElement: [{ type: ContentChild, args: [NzIconDirective, { read: ElementRef },] }],
        nzBlock: [{ type: Input }],
        nzGhost: [{ type: Input }],
        nzSearch: [{ type: Input }],
        nzLoading: [{ type: Input }],
        nzDanger: [{ type: Input }],
        disabled: [{ type: Input }],
        tabIndex: [{ type: Input }],
        nzType: [{ type: Input }],
        nzShape: [{ type: Input }],
        nzSize: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzButtonComponent.prototype, "nzBlock", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzButtonComponent.prototype, "nzGhost", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzButtonComponent.prototype, "nzSearch", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzButtonComponent.prototype, "nzLoading", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzButtonComponent.prototype, "nzDanger", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzButtonComponent.prototype, "disabled", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", String)
    ], NzButtonComponent.prototype, "nzSize", void 0);
    return NzButtonComponent;
}());
export { NzButtonComponent };
if (false) {
    /** @type {?} */
    NzButtonComponent.ngAcceptInputType_nzBlock;
    /** @type {?} */
    NzButtonComponent.ngAcceptInputType_nzGhost;
    /** @type {?} */
    NzButtonComponent.ngAcceptInputType_nzSearch;
    /** @type {?} */
    NzButtonComponent.ngAcceptInputType_nzLoading;
    /** @type {?} */
    NzButtonComponent.ngAcceptInputType_nzDanger;
    /** @type {?} */
    NzButtonComponent.ngAcceptInputType_disabled;
    /** @type {?} */
    NzButtonComponent.prototype.nzIconDirectiveElement;
    /** @type {?} */
    NzButtonComponent.prototype.nzBlock;
    /** @type {?} */
    NzButtonComponent.prototype.nzGhost;
    /** @type {?} */
    NzButtonComponent.prototype.nzSearch;
    /** @type {?} */
    NzButtonComponent.prototype.nzLoading;
    /** @type {?} */
    NzButtonComponent.prototype.nzDanger;
    /** @type {?} */
    NzButtonComponent.prototype.disabled;
    /** @type {?} */
    NzButtonComponent.prototype.tabIndex;
    /** @type {?} */
    NzButtonComponent.prototype.nzType;
    /** @type {?} */
    NzButtonComponent.prototype.nzShape;
    /** @type {?} */
    NzButtonComponent.prototype.nzSize;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.loading$;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.renderer;
    /** @type {?} */
    NzButtonComponent.prototype.nzConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYnV0dG9uLyIsInNvdXJjZXMiOlsiYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUdMLFNBQVMsRUFFVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBTXhELHdCQUF3QixHQUFHLFFBQVE7QUFFekM7SUFpRkUsMkJBQ1UsVUFBc0IsRUFDdEIsR0FBc0IsRUFDdEIsUUFBbUIsRUFDcEIsZUFBZ0M7UUFKekMsaUJBWUM7UUFYUyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDcEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBOUNoQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQyxhQUFRLEdBQTJCLElBQUksQ0FBQztR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QUNsRCxvQ0FBa0Q7O0lBQ2xELHFDQUFtRDs7SUFDbkQsc0NBQW9EOztJQUNwRCxxQ0FBbUQ7O0lBQ25ELHFDQUFtRDs7SUFDbkQscUNBQWlEOztJQUNqRCxtQ0FBcUM7O0lBQ3JDLG9DQUF1Qzs7SUFDdkMsbUNBQWdGOzs7OztJQUNoRixxQ0FBdUM7Ozs7O0lBQ3ZDLHFDQUEwQzs7Ozs7SUFnQ3hDLHVDQUE4Qjs7Ozs7SUFDOUIsZ0NBQThCOzs7OztJQUM5QixxQ0FBMkI7O0lBQzNCLDRDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcblxuaW1wb3J0IHsgTnpJY29uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCB0eXBlIE56QnV0dG9uVHlwZSA9ICdwcmltYXJ5JyB8ICdkZWZhdWx0JyB8ICdkYXNoZWQnIHwgJ2RhbmdlcicgfCAnbGluaycgfCBudWxsO1xuZXhwb3J0IHR5cGUgTnpCdXR0b25TaGFwZSA9ICdjaXJjbGUnIHwgJ3JvdW5kJyB8IG51bGw7XG5leHBvcnQgdHlwZSBOekJ1dHRvblNpemUgPSAnbGFyZ2UnIHwgJ2RlZmF1bHQnIHwgJ3NtYWxsJztcblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2J1dHRvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2J1dHRvbltuei1idXR0b25dLCBhW256LWJ1dHRvbl0nLFxuICBleHBvcnRBczogJ256QnV0dG9uJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpIG56LWljb24gbnpUeXBlPVwibG9hZGluZ1wiICpuZ0lmPVwibnpMb2FkaW5nXCI+PC9pPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LWJ0bl0nOiBgdHJ1ZWAsXG4gICAgJ1tjbGFzcy5hbnQtYnRuLXByaW1hcnldJzogYG56VHlwZSA9PT0gJ3ByaW1hcnknYCxcbiAgICAnW2NsYXNzLmFudC1idG4tZGFzaGVkXSc6IGBuelR5cGUgPT09ICdkYXNoZWQnYCxcbiAgICAnW2NsYXNzLmFudC1idG4tbGlua10nOiBgbnpUeXBlID09PSAnbGluaydgLFxuICAgICdbY2xhc3MuYW50LWJ0bi1kYW5nZXJdJzogYG56VHlwZSA9PT0gJ2RhbmdlcidgLFxuICAgICdbY2xhc3MuYW50LWJ0bi1jaXJjbGVdJzogYG56U2hhcGUgPT09ICdjaXJjbGUnYCxcbiAgICAnW2NsYXNzLmFudC1idG4tcm91bmRdJzogYG56U2hhcGUgPT09ICdyb3VuZCdgLFxuICAgICdbY2xhc3MuYW50LWJ0bi1sZ10nOiBgbnpTaXplID09PSAnbGFyZ2UnYCxcbiAgICAnW2NsYXNzLmFudC1idG4tc21dJzogYG56U2l6ZSA9PT0gJ3NtYWxsJ2AsXG4gICAgJ1tjbGFzcy5hbnQtYnRuLWRhbmdlcm91c10nOiBgbnpEYW5nZXJgLFxuICAgICdbY2xhc3MuYW50LWJ0bi1sb2FkaW5nXSc6IGBuekxvYWRpbmdgLFxuICAgICdbY2xhc3MuYW50LWJ0bi1iYWNrZ3JvdW5kLWdob3N0XSc6IGBuekdob3N0YCxcbiAgICAnW2NsYXNzLmFudC1idG4tYmxvY2tdJzogYG56QmxvY2tgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaC1idXR0b25dJzogYG56U2VhcmNoYCxcbiAgICAnW2F0dHIudGFiaW5kZXhdJzogJ2Rpc2FibGVkID8gLTEgOiAodGFiSW5kZXggPT09IG51bGwgPyBudWxsIDogdGFiSW5kZXgpJyxcbiAgICAnW2F0dHIuZGlzYWJsZWRdJzogJ2Rpc2FibGVkIHx8IG51bGwnLFxuICAgICcoY2xpY2spJzogJ2hhbHREaXNhYmxlZEV2ZW50cygkZXZlbnQpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56QnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpCbG9jazogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpHaG9zdDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTZWFyY2g6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256TG9hZGluZzogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpEYW5nZXI6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG5cbiAgQENvbnRlbnRDaGlsZChOekljb25EaXJlY3RpdmUsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBuekljb25EaXJlY3RpdmVFbGVtZW50ITogRWxlbWVudFJlZjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QmxvY2s6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56R2hvc3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2VhcmNoOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGFuZ2VyOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0YWJJbmRleDogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56VHlwZTogTnpCdXR0b25UeXBlID0gbnVsbDtcbiAgQElucHV0KCkgbnpTaGFwZTogTnpCdXR0b25TaGFwZSA9IG51bGw7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgbnpTaXplOiBOekJ1dHRvblNpemUgPSAnZGVmYXVsdCc7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIGxvYWRpbmckID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICBoYWx0RGlzYWJsZWRFdmVudHMoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBpbnNlcnRTcGFuKG5vZGVzOiBOb2RlTGlzdCwgcmVuZGVyZXI6IFJlbmRlcmVyMik6IHZvaWQge1xuICAgIG5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICBpZiAobm9kZS5ub2RlTmFtZSA9PT0gJyN0ZXh0Jykge1xuICAgICAgICBjb25zdCBzcGFuID0gcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSByZW5kZXJlci5wYXJlbnROb2RlKG5vZGUpO1xuICAgICAgICByZW5kZXJlci5pbnNlcnRCZWZvcmUocGFyZW50LCBzcGFuLCBub2RlKTtcbiAgICAgICAgcmVuZGVyZXIuYXBwZW5kQ2hpbGQoc3Bhbiwgbm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhc3NlcnRJY29uT25seShlbGVtZW50OiBIVE1MQnV0dG9uRWxlbWVudCwgcmVuZGVyZXI6IFJlbmRlcmVyMik6IHZvaWQge1xuICAgIGNvbnN0IGxpc3RPZk5vZGUgPSBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGROb2Rlcyk7XG4gICAgY29uc3QgaWNvbkNvdW50ID0gbGlzdE9mTm9kZS5maWx0ZXIobm9kZSA9PiBub2RlLm5vZGVOYW1lID09PSAnSScpLmxlbmd0aDtcbiAgICBjb25zdCBub1RleHQgPSBsaXN0T2ZOb2RlLmV2ZXJ5KG5vZGUgPT4gbm9kZS5ub2RlTmFtZSAhPT0gJyN0ZXh0Jyk7XG4gICAgY29uc3Qgbm9TcGFuID0gbGlzdE9mTm9kZS5ldmVyeShub2RlID0+IG5vZGUubm9kZU5hbWUgIT09ICdTUEFOJyk7XG4gICAgY29uc3QgaXNJY29uT25seSA9IG5vU3BhbiAmJiBub1RleHQgJiYgaWNvbkNvdW50ID49IDE7XG4gICAgaWYgKGlzSWNvbk9ubHkpIHtcbiAgICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsICdhbnQtYnRuLWljb24tb25seScpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZVxuICApIHtcbiAgICB0aGlzLm56Q29uZmlnU2VydmljZVxuICAgICAgLmdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpMb2FkaW5nIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChuekxvYWRpbmcpIHtcbiAgICAgIHRoaXMubG9hZGluZyQubmV4dCh0aGlzLm56TG9hZGluZyk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYXNzZXJ0SWNvbk9ubHkodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIpO1xuICAgIHRoaXMuaW5zZXJ0U3Bhbih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzLCB0aGlzLnJlbmRlcmVyKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmckXG4gICAgICAucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKHRoaXMubnpMb2FkaW5nKSxcbiAgICAgICAgZmlsdGVyKCgpID0+ICEhdGhpcy5uekljb25EaXJlY3RpdmVFbGVtZW50KSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKGxvYWRpbmcgPT4ge1xuICAgICAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gdGhpcy5uekljb25EaXJlY3RpdmVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShuYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZShuYXRpdmVFbGVtZW50LCAnZGlzcGxheScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19