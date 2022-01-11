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
var NzSelectSearchComponent = /** @class */ (function () {
    function NzSelectSearchComponent(elementRef, renderer, focusMonitor) {
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
    NzSelectSearchComponent.prototype.setCompositionState = /**
     * @param {?} isComposing
     * @return {?}
     */
    function (isComposing) {
        this.isComposingChange.next(isComposing);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSelectSearchComponent.prototype.onValueChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var inputDOM = this.inputElement.nativeElement;
        inputDOM.value = value;
        this.value = value;
        this.valueChange.next(value);
        if (this.mirrorSync) {
            this.syncMirrorWidth();
        }
    };
    /**
     * @return {?}
     */
    NzSelectSearchComponent.prototype.clearInputValue = /**
     * @return {?}
     */
    function () {
        this.onValueChange('');
    };
    /**
     * @return {?}
     */
    NzSelectSearchComponent.prototype.syncMirrorWidth = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var mirrorDOM = (/** @type {?} */ (this.mirrorElement)).nativeElement;
        /** @type {?} */
        var hostDOM = this.elementRef.nativeElement;
        /** @type {?} */
        var inputDOM = this.inputElement.nativeElement;
        this.renderer.removeStyle(hostDOM, 'width');
        mirrorDOM.innerHTML = inputDOM.value + "&nbsp;";
        this.renderer.setStyle(hostDOM, 'width', mirrorDOM.scrollWidth + "px");
    };
    /**
     * @return {?}
     */
    NzSelectSearchComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    };
    /**
     * @return {?}
     */
    NzSelectSearchComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.inputElement.nativeElement.blur();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSelectSearchComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var inputDOM = this.inputElement.nativeElement;
        var focusTrigger = changes.focusTrigger, showInput = changes.showInput;
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
    };
    /**
     * @return {?}
     */
    NzSelectSearchComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.mirrorSync) {
            this.syncMirrorWidth();
        }
        if (this.autofocus) {
            this.focus();
        }
    };
    NzSelectSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-select-search',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <input\n      #inputElement\n      autocomplete=\"off\"\n      class=\"ant-select-selection-search-input\"\n      [ngModel]=\"value\"\n      [attr.autofocus]=\"autofocus ? 'autofocus' : null\"\n      [disabled]=\"disabled\"\n      [style.opacity]=\"showInput ? null : 0\"\n      (ngModelChange)=\"onValueChange($event)\"\n      (compositionstart)=\"setCompositionState(true)\"\n      (compositionend)=\"setCompositionState(false)\"\n    />\n    <span #mirrorElement *ngIf=\"mirrorSync\" class=\"ant-select-selection-search-mirror\"></span>\n  ",
                    host: {
                        '[class.ant-select-selection-search]': 'true'
                    }
                }] }
    ];
    /** @nocollapse */
    NzSelectSearchComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: FocusMonitor }
    ]; };
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
    return NzSelectSearchComponent;
}());
export { NzSelectSearchComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3NlbGVjdC8iLCJzb3VyY2VzIjpbInNlbGVjdC1zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUVULFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkI7SUFzRUUsaUNBQW9CLFVBQXNCLEVBQVUsUUFBbUIsRUFBVSxZQUEwQjtRQUF2RixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBOUNsRyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNSLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN6QyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBdUMyQyxDQUFDOzs7OztJQW5DL0cscURBQW1COzs7O0lBQW5CLFVBQW9CLFdBQW9CO1FBQ3RDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCwrQ0FBYTs7OztJQUFiLFVBQWMsS0FBYTs7WUFDbkIsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYTtRQUNoRCxRQUFRLENBQUMsS0FBSyxH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TUFBTSxFQUFFLEtBQUssRUFBRTs7SUE4RC9DLDhCQUFDO0NBQUEsQUEvRkQsSUErRkM7U0F4RVksdUJBQXVCOzs7SUFDbEMsMkNBQTBCOztJQUMxQiw2Q0FBNEI7O0lBQzVCLDRDQUEwQjs7SUFDMUIsK0NBQThCOztJQUM5Qix3Q0FBb0I7O0lBQ3BCLDRDQUEyQjs7SUFDM0IsOENBQTREOztJQUM1RCxvREFBbUU7O0lBQ25FLCtDQUF1RTs7SUFDdkUsZ0RBQTBFOzs7OztJQXFDOUQsNkNBQThCOzs7OztJQUFFLDJDQUEyQjs7Ozs7SUFBRSwrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1zZWxlY3Qtc2VhcmNoJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGlucHV0XG4gICAgICAjaW5wdXRFbGVtZW50XG4gICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbi1zZWFyY2gtaW5wdXRcIlxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgW2F0dHIuYXV0b2ZvY3VzXT1cImF1dG9mb2N1cyA/ICdhdXRvZm9jdXMnIDogbnVsbFwiXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW3N0eWxlLm9wYWNpdHldPVwic2hvd0lucHV0ID8gbnVsbCA6IDBcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25WYWx1ZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChjb21wb3NpdGlvbnN0YXJ0KT1cInNldENvbXBvc2l0aW9uU3RhdGUodHJ1ZSlcIlxuICAgICAgKGNvbXBvc2l0aW9uZW5kKT1cInNldENvbXBvc2l0aW9uU3RhdGUoZmFsc2UpXCJcbiAgICAvPlxuICAgIDxzcGFuICNtaXJyb3JFbGVtZW50ICpuZ0lmPVwibWlycm9yU3luY1wiIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb24tc2VhcmNoLW1pcnJvclwiPjwvc3Bhbj5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXNlbGVjdC1zZWxlY3Rpb24tc2VhcmNoXSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56U2VsZWN0U2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbWlycm9yU3luYyA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93SW5wdXQgPSB0cnVlO1xuICBASW5wdXQoKSBmb2N1c1RyaWdnZXIgPSBmYWxzZTtcbiAgQElucHV0KCkgdmFsdWUgPSAnJztcbiAgQElucHV0KCkgYXV0b2ZvY3VzID0gZmFsc2U7XG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgaXNDb21wb3NpbmdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcsIHsgc3RhdGljOiB0cnVlIH0pIGlucHV0RWxlbWVudCE6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ21pcnJvckVsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgbWlycm9yRWxlbWVudD86IEVsZW1lbnRSZWY7XG5cbiAgc2V0Q29tcG9zaXRpb25TdGF0ZShpc0NvbXBvc2luZzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaXNDb21wb3NpbmdDaGFuZ2UubmV4dChpc0NvbXBvc2luZyk7XG4gIH1cblxuICBvblZhbHVlQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBpbnB1dERPTSA9IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgaW5wdXRET00udmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5uZXh0KHZhbHVlKTtcbiAgICBpZiAodGhpcy5taXJyb3JTeW5jKSB7XG4gICAgICB0aGlzLnN5bmNNaXJyb3JXaWR0aCgpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFySW5wdXRWYWx1ZSgpOiB2b2lkIHtcbiAgICB0aGlzLm9uVmFsdWVDaGFuZ2UoJycpO1xuICB9XG5cbiAgc3luY01pcnJvcldpZHRoKCk6IHZvaWQge1xuICAgIGNvbnN0IG1pcnJvckRPTSA9IHRoaXMubWlycm9yRWxlbWVudCEubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBob3N0RE9NID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgaW5wdXRET00gPSB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUoaG9zdERPTSwgJ3dpZHRoJyk7XG4gICAgbWlycm9yRE9NLmlubmVySFRNTCA9IGAke2lucHV0RE9NLnZhbHVlfSZuYnNwO2A7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShob3N0RE9NLCAnd2lkdGgnLCBgJHttaXJyb3JET00uc2Nyb2xsV2lkdGh9cHhgKTtcbiAgfVxuXG4gIGZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNNb25pdG9yLmZvY3VzVmlhKHRoaXMuaW5wdXRFbGVtZW50LCAna2V5Ym9hcmQnKTtcbiAgfVxuXG4gIGJsdXIoKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcikge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgaW5wdXRET00gPSB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHsgZm9jdXNUcmlnZ2VyLCBzaG93SW5wdXQgfSA9IGNoYW5nZXM7XG4gICAgaWYgKGZvY3VzVHJpZ2dlciAmJiBmb2N1c1RyaWdnZXIuY3VycmVudFZhbHVlID09PSB0cnVlICYmIGZvY3VzVHJpZ2dlci5wcmV2aW91c1ZhbHVlID09PSBmYWxzZSkge1xuICAgICAgaW5wdXRET00uZm9jdXMoKTtcbiAgICB9XG4gICAgaWYgKHNob3dJbnB1dCkge1xuICAgICAgaWYgKHRoaXMuc2hvd0lucHV0KSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKGlucHV0RE9NLCAncmVhZG9ubHknKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGlucHV0RE9NLCAncmVhZG9ubHknLCAncmVhZG9ubHknKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubWlycm9yU3luYykge1xuICAgICAgdGhpcy5zeW5jTWlycm9yV2lkdGgoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYXV0b2ZvY3VzKSB7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgfVxuICB9XG59XG4iXX0=