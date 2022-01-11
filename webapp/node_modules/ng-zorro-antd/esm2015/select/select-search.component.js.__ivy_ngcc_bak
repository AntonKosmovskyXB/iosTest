/**
 * @fileoverview added by tsickle
 * Generated from: select-search.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
export class NzSelectSearchComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} focusMonitor
     */
    constructor(elementRef, renderer, focusMonitor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.focusMonitor = focusMonitor;
        this.disabled = false;
        this.mirrorSync = false;
        this.showInput = true;
        this.focusTrigger = false;
        this.value = '';
        this.autofocus = false;
        this.valueChange = new EventEmitter();
        this.isComposingChange = new EventEmitter();
    }
    /**
     * @param {?} isComposing
     * @return {?}
     */
    setCompositionState(isComposing) {
        this.isComposingChange.next(isComposing);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onValueChange(value) {
        /** @type {?} */
        const inputDOM = this.inputElement.nativeElement;
        inputDOM.value = value;
        this.value = value;
        this.valueChange.next(value);
        if (this.mirrorSync) {
            this.syncMirrorWidth();
        }
    }
    /**
     * @return {?}
     */
    clearInputValue() {
        this.onValueChange('');
    }
    /**
     * @return {?}
     */
    syncMirrorWidth() {
        /** @type {?} */
        const mirrorDOM = (/** @type {?} */ (this.mirrorElement)).nativeElement;
        /** @type {?} */
        const hostDOM = this.elementRef.nativeElement;
        /** @type {?} */
        const inputDOM = this.inputElement.nativeElement;
        this.renderer.removeStyle(hostDOM, 'width');
        mirrorDOM.innerHTML = `${inputDOM.value}&nbsp;`;
        this.renderer.setStyle(hostDOM, 'width', `${mirrorDOM.scrollWidth}px`);
    }
    /**
     * @return {?}
     */
    focus() {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    }
    /**
     * @return {?}
     */
    blur() {
        this.inputElement.nativeElement.blur();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const inputDOM = this.inputElement.nativeElement;
        const { focusTrigger, showInput } = changes;
        if (focusTrigger && focusTrigger.currentValue === true && focusTrigger.previousValue === false) {
            inputDOM.focus();
        }
        if (showInput) {
            if (this.showInput) {
                this.renderer.removeAttribute(inputDOM, 'readonly');
            }
            else {
                this.renderer.setAttribute(inputDOM, 'readonly', 'readonly');
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.mirrorSync) {
            this.syncMirrorWidth();
        }
        if (this.autofocus) {
            this.focus();
        }
    }
}
NzSelectSearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-select-search',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <input
      #inputElement
      autocomplete="off"
      class="ant-select-selection-search-input"
      [ngModel]="value"
      [attr.autofocus]="autofocus ? 'autofocus' : null"
      [disabled]="disabled"
      [style.opacity]="showInput ? null : 0"
      (ngModelChange)="onValueChange($event)"
      (compositionstart)="setCompositionState(true)"
      (compositionend)="setCompositionState(false)"
    />
    <span #mirrorElement *ngIf="mirrorSync" class="ant-select-selection-search-mirror"></span>
  `,
                host: {
                    '[class.ant-select-selection-search]': 'true'
                }
            }] }
];
/** @nocollapse */
NzSelectSearchComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: FocusMonitor }
];
NzSelectSearchComponent.propDecorators = {
    disabled: [{ type: Input }],
    mirrorSync: [{ type: Input }],
    showInput: [{ type: Input }],
    focusTrigger: [{ type: Input }],
    value: [{ type: Input }],
    autofocus: [{ type: Input }],
    valueChange: [{ type: Output }],
    isComposingChange: [{ type: Output }],
    inputElement: [{ type: ViewChild, args: ['inputElement', { static: true },] }],
    mirrorElement: [{ type: ViewChild, args: ['mirrorElement', { static: false },] }]
};
if (false) {
    /** @type {?} */
    NzSelectSearchComponent.prototype.disabled;
    /** @type {?} */
    NzSelectSearchComponent.prototype.mirrorSync;
    /** @type {?} */
    NzSelectSearchComponent.prototype.showInput;
    /** @type {?} */
    NzSelectSearchComponent.prototype.focusTrigger;
    /** @type {?} */
    NzSelectSearchComponent.prototype.value;
    /** @type {?} */
    NzSelectSearchComponent.prototype.autofocus;
    /** @type {?} */
    NzSelectSearchComponent.prototype.valueChange;
    /** @type {?} */
    NzSelectSearchComponent.prototype.isComposingChange;
    /** @type {?} */
    NzSelectSearchComponent.prototype.inputElement;
    /** @type {?} */
    NzSelectSearchComponent.prototype.mirrorElement;
    /**
     * @type {?}
     * @private
     */
    NzSelectSearchComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzSelectSearchComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzSelectSearchComponent.prototype.focusMonitor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3NlbGVjdC8iLCJzb3VyY2VzIjpbInNlbGVjdC1zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUVULFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUF5QnZCLE1BQU0sT0FBTyx1QkFBdUI7Ozs7OztJQStDbEMsWUFBb0IsVUFBc0IsRUFBVSxRQUFtQixFQUFVLFlBQTBCO1FBQXZGLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUE5Q2xHLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ1IsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3pDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUF1QzJDLENBQUM7Ozs7O0lBbkMvRyxtQkFBbUIsQ0FBQyxXQUFvQjtRQUN0QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLEtBQWE7O2NBQ25CLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWE7UUFDaEQsUUFBUSxDQUFDLEtB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RUFBRTs7OztJQVQ3QywyQ0FBMEI7O0lBQzFCLDZDQUE0Qjs7SUFDNUIsNENBQTBCOztJQUMxQiwrQ0FBOEI7O0lBQzlCLHdDQUFvQjs7SUFDcEIsNENBQTJCOztJQUMzQiw4Q0FBNEQ7O0lBQzVELG9EQUFtRTs7SUFDbkUsK0NBQXVFOztJQUN2RSxnREFBMEU7Ozs7O0lBcUM5RCw2Q0FBOEI7Ozs7O0lBQUUsMkNBQTJCOzs7OztJQUFFLCtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXNlbGVjdC1zZWFyY2gnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aW5wdXRcbiAgICAgICNpbnB1dEVsZW1lbnRcbiAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uLXNlYXJjaC1pbnB1dFwiXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICBbYXR0ci5hdXRvZm9jdXNdPVwiYXV0b2ZvY3VzID8gJ2F1dG9mb2N1cycgOiBudWxsXCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbc3R5bGUub3BhY2l0eV09XCJzaG93SW5wdXQgPyBudWxsIDogMFwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJvblZhbHVlQ2hhbmdlKCRldmVudClcIlxuICAgICAgKGNvbXBvc2l0aW9uc3RhcnQpPVwic2V0Q29tcG9zaXRpb25TdGF0ZSh0cnVlKVwiXG4gICAgICAoY29tcG9zaXRpb25lbmQpPVwic2V0Q29tcG9zaXRpb25TdGF0ZShmYWxzZSlcIlxuICAgIC8+XG4gICAgPHNwYW4gI21pcnJvckVsZW1lbnQgKm5nSWY9XCJtaXJyb3JTeW5jXCIgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbi1zZWFyY2gtbWlycm9yXCI+PC9zcGFuPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXNlbGVjdGlvbi1zZWFyY2hdJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpTZWxlY3RTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBtaXJyb3JTeW5jID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNob3dJbnB1dCA9IHRydWU7XG4gIEBJbnB1dCgpIGZvY3VzVHJpZ2dlciA9IGZhbHNlO1xuICBASW5wdXQoKSB2YWx1ZSA9ICcnO1xuICBASW5wdXQoKSBhdXRvZm9jdXMgPSBmYWxzZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBpc0NvbXBvc2luZ0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgaW5wdXRFbGVtZW50ITogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnbWlycm9yRWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBtaXJyb3JFbGVtZW50PzogRWxlbWVudFJlZjtcblxuICBzZXRDb21wb3NpdGlvblN0YXRlKGlzQ29tcG9zaW5nOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pc0NvbXBvc2luZ0NoYW5nZS5uZXh0KGlzQ29tcG9zaW5nKTtcbiAgfVxuXG4gIG9uVmFsdWVDaGFuZ2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGlucHV0RE9NID0gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICBpbnB1dERPTS52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLm5leHQodmFsdWUpO1xuICAgIGlmICh0aGlzLm1pcnJvclN5bmMpIHtcbiAgICAgIHRoaXMuc3luY01pcnJvcldpZHRoKCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJJbnB1dFZhbHVlKCk6IHZvaWQge1xuICAgIHRoaXMub25WYWx1ZUNoYW5nZSgnJyk7XG4gIH1cblxuICBzeW5jTWlycm9yV2lkdGgoKTogdm9pZCB7XG4gICAgY29uc3QgbWlycm9yRE9NID0gdGhpcy5taXJyb3JFbGVtZW50IS5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGhvc3RET00gPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBpbnB1dERPTSA9IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZShob3N0RE9NLCAnd2lkdGgnKTtcbiAgICBtaXJyb3JET00uaW5uZXJIVE1MID0gYCR7aW5wdXRET00udmFsdWV9Jm5ic3A7YDtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGhvc3RET00sICd3aWR0aCcsIGAke21pcnJvckRPTS5zY3JvbGxXaWR0aH1weGApO1xuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5pbnB1dEVsZW1lbnQsICdrZXlib2FyZCcpO1xuICB9XG5cbiAgYmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCBpbnB1dERPTSA9IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgeyBmb2N1c1RyaWdnZXIsIHNob3dJbnB1dCB9ID0gY2hhbmdlcztcbiAgICBpZiAoZm9jdXNUcmlnZ2VyICYmIGZvY3VzVHJpZ2dlci5jdXJyZW50VmFsdWUgPT09IHRydWUgJiYgZm9jdXNUcmlnZ2VyLnByZXZpb3VzVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICBpbnB1dERPTS5mb2N1cygpO1xuICAgIH1cbiAgICBpZiAoc2hvd0lucHV0KSB7XG4gICAgICBpZiAodGhpcy5zaG93SW5wdXQpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUoaW5wdXRET00sICdyZWFkb25seScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoaW5wdXRET00sICdyZWFkb25seScsICdyZWFkb25seScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5taXJyb3JTeW5jKSB7XG4gICAgICB0aGlzLnN5bmNNaXJyb3JXaWR0aCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5hdXRvZm9jdXMpIHtcbiAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==