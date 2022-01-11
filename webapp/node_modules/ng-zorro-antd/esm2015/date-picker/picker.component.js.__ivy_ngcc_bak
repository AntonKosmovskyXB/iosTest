/**
 * @fileoverview added by tsickle
 * Generated from: picker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, EventEmitter, Inject, Input, Output, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { slideMotion } from 'ng-zorro-antd/core/animation';
import { CandyDate } from 'ng-zorro-antd/core/time';
import { DateHelperService } from 'ng-zorro-antd/i18n';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DatePickerService } from './date-picker.service';
import { DateRangePopupComponent } from './date-range-popup.component';
import { PREFIX_CLASS } from './util';
export class NzPickerComponent {
    /**
     * @param {?} elementRef
     * @param {?} dateHelper
     * @param {?} changeDetector
     * @param {?} datePickerService
     * @param {?} doc
     */
    constructor(elementRef, dateHelper, changeDetector, datePickerService, doc) {
        this.elementRef = elementRef;
        this.dateHelper = dateHelper;
        this.changeDetector = changeDetector;
        this.datePickerService = datePickerService;
        this.noAnimation = false;
        this.isRange = false;
        this.open = undefined;
        this.disabled = false;
        this.inputReadOnly = false;
        this.popupStyle = null;
        this.focusChange = new EventEmitter();
        this.valueChange = new EventEmitter();
        this.openChange = new EventEmitter(); // Emitted when overlay's open state change
        this.destroy$ = new Subject();
        this.prefixCls = PREFIX_CLASS;
        this.activeBarStyle = { position: 'absolute' };
        this.animationOpenState = false;
        this.overlayOpen = false; // Available when "open"=undefined
        // Available when "open"=undefined
        this.overlayPositions = (/** @type {?} */ ([
            {
                offsetX: -12,
                offsetY: 8,
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top'
            },
            {
                offsetX: -12,
                offsetY: -8,
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'bottom'
            },
            {
                offsetX: 12,
                offsetY: 8,
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'top'
            },
            {
                offsetX: 12,
                offsetY: -8,
                originX: 'end',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'bottom'
            }
        ]));
        this.currentPositionX = 'start';
        this.currentPositionY = 'bottom';
        this.document = doc;
        this.origin = new CdkOverlayOrigin(this.elementRef);
        this.updateInputValue();
    }
    /**
     * @return {?}
     */
    get realOpenState() {
        // The value that really decide the open state of overlay
        return this.isOpenHandledByUser() ? !!this.open : this.overlayOpen;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.inputSize = Math.max(10, this.format.length) + 2;
        this.datePickerService.valueChange$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.updateInputValue();
            this.changeDetector.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.autoFocus) {
            this.focus();
        }
        if (this.isRange) {
            fromEvent(window, 'resize')
                .pipe(takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.resetInputWidthAndArrowLeft();
            }));
        }
        this.datePickerService.inputPartChange$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} partType
         * @return {?}
         */
        partType => {
            var _a;
            if (partType) {
                this.datePickerService.activeInput = partType;
            }
            this.datePickerService.arrowPositionStyle = {
                left: this.datePickerService.activeInput === 'left' ? '0px' : `${this.arrowLeft}px`
            };
            this.activeBarStyle = Object.assign(Object.assign(Object.assign({}, this.activeBarStyle), this.datePickerService.arrowPositionStyle), { width: `${this.inputWidth}px` });
            if (this.document.activeElement !== this.getInput(this.datePickerService.activeInput)) {
                this.focus();
            }
            (_a = this.panel) === null || _a === void 0 ? void 0 : _a.cdr.markForCheck();
            this.changeDetector.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.open) {
            this.animationStart();
        }
    }
    /**
     * @return {?}
     */
    resetInputWidthAndArrowLeft() {
        var _a, _b, _c;
        this.inputWidth = ((_b = (_a = this.rangePickerInputs) === null || _a === void 0 ? void 0 : _a.first) === null || _b === void 0 ? void 0 : _b.nativeElement.offsetWidth) || 0;
        this.arrowLeft = this.inputWidth + ((_c = this.separatorElement) === null || _c === void 0 ? void 0 : _c.nativeElement.offsetWidth) || 0;
    }
    /**
     * @param {?=} partType
     * @return {?}
     */
    getInput(partType) {
        return this.isRange
            ? partType === 'left'
                ? this.rangePickerInputs.first.nativeElement
                : this.rangePickerInputs.last.nativeElement
            : (/** @type {?} */ (this.pickerInput)).nativeElement;
    }
    /**
     * @return {?}
     */
    focus() {
        this.getInput(this.datePickerService.activeInput).focus(); // Focus on the first input
    }
    /**
     * @param {?=} partType
     * @return {?}
     */
    onFocus(partType) {
        if (partType) {
            this.datePickerService.inputPartChange$.next(partType);
        }
        this.focusChange.emit(true);
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.focusChange.emit(false);
    }
    // Show overlay content
    /**
     * @return {?}
     */
    showOverlay() {
        if (!this.realOpenState) {
            this.resetInputWidthAndArrowLeft();
            this.overlayOpen = true;
            this.animationStart();
            this.focus();
            this.openChange.emit(true);
        }
    }
    /**
     * @return {?}
     */
    hideOverlay() {
        if (this.realOpenState) {
            this.overlayOpen = false;
            this.openChange.emit(false);
            this.focus();
        }
    }
    /**
     * @return {?}
     */
    showClear() {
        return !this.disabled && !this.isEmptyValue(this.datePickerService.value) && !!this.allowClear;
    }
    /**
     * @param {?} event
     * @param {?=} partType
     * @return {?}
     */
    onClickInputBox(event, partType) {
        event.stopPropagation();
        if (!this.disabled && !this.isOpenHandledByUser()) {
            this.showOverlay();
        }
        this.onFocus(partType);
    }
    /**
     * @return {?}
     */
    onClickBackdrop() {
        if (this.panel.isAllowed((/** @type {?} */ (this.datePickerService.value)), true)) {
            this.updateInputValue();
            this.datePickerService.emitValue$.next();
        }
        else {
            this.datePickerService.setValue((/** @type {?} */ (this.datePickerService.initialValue)));
            this.hideOverlay();
        }
    }
    /**
     * @return {?}
     */
    onOverlayDetach() {
        this.hideOverlay();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onOverlayKeydown(event) {
        if (event.key === 'Escape') {
            this.datePickerService.setValue((/** @type {?} */ (this.datePickerService.initialValue)));
        }
    }
    // NOTE: A issue here, the first time position change, the animation will not be triggered.
    // Because the overlay's "positionChange" event is emitted after the content's full shown up.
    // All other components like "nz-dropdown" which depends on overlay also has the same issue.
    // See: https://github.com/NG-ZORRO/ng-zorro-antd/issues/1429
    /**
     * @param {?} position
     * @return {?}
     */
    onPositionChange(position) {
        this.currentPositionX = position.connectionPair.originX;
        this.currentPositionY = position.connectionPair.originY;
        this.changeDetector.detectChanges(); // Take side-effects to position styles
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClickClear(event) {
        event.preventDefault();
        event.stopPropagation();
        this.datePickerService.setValue(this.isRange ? [] : null);
        this.datePickerService.emitValue$.next();
    }
    /**
     * @return {?}
     */
    updateInputValue() {
        /** @type {?} */
        const newValue = this.datePickerService.value;
        if (this.isRange) {
            this.inputValue = newValue ? ((/** @type {?} */ (newValue))).map((/**
             * @param {?} v
             * @return {?}
             */
            v => this.formatValue(v))) : ['', ''];
        }
        else {
            this.inputValue = this.formatValue((/** @type {?} */ (newValue)));
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    formatValue(value) {
        return this.dateHelper.format(value && ((/** @type {?} */ (value))).nativeDate, this.format);
    }
    /**
     * @param {?} event
     * @param {?=} emitValue
     * @return {?}
     */
    onInputKeyup(event, emitValue = false) {
        if (!this.realOpenState) {
            this.showOverlay();
            return;
        }
        /** @type {?} */
        const date = this.checkValidInputDate((/** @type {?} */ (((/** @type {?} */ (event))).target)));
        if (this.panel && date) {
            this.panel.changeValueFromSelect(date, emitValue);
        }
    }
    /**
     * @private
     * @param {?} inputTarget
     * @return {?}
     */
    checkValidInputDate(inputTarget) {
        /** @type {?} */
        const input = ((/** @type {?} */ (inputTarget))).value;
        /** @type {?} */
        const date = new CandyDate(this.dateHelper.parseDate(input, this.format));
        if (!date.isValid() || input !== this.dateHelper.format(date.nativeDate, this.format)) {
            return null;
        }
        return date;
    }
    /**
     * @param {?=} partType
     * @return {?}
     */
    getPlaceholder(partType) {
        return this.isRange ? this.placeholder[this.datePickerService.getActiveIndex((/** @type {?} */ (partType)))] : ((/** @type {?} */ (this.placeholder)));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isEmptyValue(value) {
        if (value === null) {
            return true;
        }
        else if (this.isRange) {
            return !value || !Array.isArray(value) || value.every((/**
             * @param {?} val
             * @return {?}
             */
            val => !val));
        }
        else {
            return !value;
        }
    }
    // Whether open state is permanently controlled by user himself
    /**
     * @return {?}
     */
    isOpenHandledByUser() {
        return this.open !== undefined;
    }
    /**
     * @return {?}
     */
    animationStart() {
        if (this.realOpenState) {
            this.animationOpenState = true;
        }
    }
    /**
     * @return {?}
     */
    animationDone() {
        if (!this.realOpenState) {
            this.animationOpenState = false;
            this.changeDetector.markForCheck();
        }
    }
}
NzPickerComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                selector: '[nz-picker]',
                exportAs: 'nzPicker',
                template: `
    <!-- Content of single picker -->
    <div *ngIf="!isRange" class="{{ prefixCls }}-input">
      <input
        #pickerInput
        [class.ant-input-disabled]="disabled"
        [disabled]="disabled"
        [readOnly]="inputReadOnly"
        [(ngModel)]="inputValue"
        placeholder="{{ getPlaceholder() }}"
        [size]="inputSize"
        (focus)="onFocus()"
        (blur)="onBlur()"
        (input)="onInputKeyup($event)"
        (keyup.enter)="onInputKeyup($event, true)"
      />
      <ng-container *ngTemplateOutlet="tplRightRest"></ng-container>
    </div>

    <!-- Content of range picker -->
    <ng-container *ngIf="isRange">
      <div class="{{ prefixCls }}-input">
        <ng-container *ngTemplateOutlet="tplRangeInput; context: { partType: 'left' }"></ng-container>
      </div>
      <div #separatorElement class="{{ prefixCls }}-range-separator">
        <span class="{{ prefixCls }}-separator">
          <ng-container *ngIf="separator; else defaultSeparator">{{ separator }}</ng-container>
        </span>
        <ng-template #defaultSeparator>
          <i nz-icon nzType="swap-right" nzTheme="outline"></i>
        </ng-template>
      </div>
      <div class="{{ prefixCls }}-input">
        <ng-container *ngTemplateOutlet="tplRangeInput; context: { partType: 'right' }"></ng-container>
      </div>
      <ng-container *ngTemplateOutlet="tplRightRest"></ng-container>
    </ng-container>
    <!-- Input for Range ONLY -->
    <ng-template #tplRangeInput let-partType="partType">
      <input
        #rangePickerInput
        [disabled]="disabled"
        [readOnly]="inputReadOnly"
        [size]="inputSize"
        (click)="onClickInputBox($event, partType)"
        (blur)="onBlur()"
        (input)="onInputKeyup($event)"
        (focus)="onFocus(partType)"
        (keyup.enter)="onInputKeyup($event, true)"
        [(ngModel)]="inputValue[datePickerService.getActiveIndex(partType)]"
        placeholder="{{ getPlaceholder(partType) }}"
      />
    </ng-template>

    <!-- Right operator icons -->
    <ng-template #tplRightRest>
      <div class="{{ prefixCls }}-active-bar" [ngStyle]="activeBarStyle"></div>
      <span *ngIf="showClear()" class="{{ prefixCls }}-clear" (click)="onClickClear($event)">
        <i nz-icon nzType="close-circle" nzTheme="fill"></i>
      </span>
      <span class="{{ prefixCls }}-suffix">
        <ng-container *nzStringTemplateOutlet="suffixIcon; let suffixIcon">
          <i nz-icon [nzType]="suffixIcon"></i>
        </ng-container>
      </span>
    </ng-template>

    <!-- Overlay -->
    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayOpen]="realOpenState"
      [cdkConnectedOverlayHasBackdrop]="!isOpenHandledByUser()"
      [cdkConnectedOverlayPositions]="overlayPositions"
      [cdkConnectedOverlayTransformOriginOn]="'.ant-picker-wrapper'"
      (positionChange)="onPositionChange($event)"
      (backdropClick)="onClickBackdrop()"
      (detach)="onOverlayDetach()"
      (overlayKeydown)="onOverlayKeydown($event)"
    >
      <div
        class="ant-picker-wrapper"
        [nzNoAnimation]="noAnimation"
        [@slideMotion]="'enter'"
        (@slideMotion.done)="animationDone()"
        style="position: relative;"
      >
        <div
          class="{{ prefixCls }}-dropdown {{ dropdownClassName }}"
          [class.ant-picker-dropdown-placement-bottomLeft]="currentPositionY === 'bottom' && currentPositionX === 'start'"
          [class.ant-picker-dropdown-placement-topLeft]="currentPositionY === 'top' && currentPositionX === 'start'"
          [class.ant-picker-dropdown-placement-bottomRight]="currentPositionY === 'bottom' && currentPositionX === 'end'"
          [class.ant-picker-dropdown-placement-topRight]="currentPositionY === 'top' && currentPositionX === 'end'"
          [class.ant-picker-dropdown-range]="isRange"
          [ngStyle]="popupStyle"
        >
          <!-- Compatible for overlay that not support offset dynamically and immediately -->
          <ng-content></ng-content>
        </div>
      </div>
    </ng-template>
  `,
                animations: [slideMotion],
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NzPickerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: DateHelperService },
    { type: ChangeDetectorRef },
    { type: DatePickerService },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
NzPickerComponent.propDecorators = {
    noAnimation: [{ type: Input }],
    isRange: [{ type: Input }],
    open: [{ type: Input }],
    disabled: [{ type: Input }],
    inputReadOnly: [{ type: Input }],
    placeholder: [{ type: Input }],
    allowClear: [{ type: Input }],
    autoFocus: [{ type: Input }],
    format: [{ type: Input }],
    separator: [{ type: Input }],
    popupStyle: [{ type: Input }],
    dropdownClassName: [{ type: Input }],
    suffixIcon: [{ type: Input }],
    focusChange: [{ type: Output }],
    valueChange: [{ type: Output }],
    openChange: [{ type: Output }],
    cdkConnectedOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay, { static: false },] }],
    separatorElement: [{ type: ViewChild, args: ['separatorElement', { static: false },] }],
    pickerInput: [{ type: ViewChild, args: ['pickerInput', { static: false },] }],
    rangePickerInputs: [{ type: ViewChildren, args: ['rangePickerInput',] }],
    panel: [{ type: ContentChild, args: [DateRangePopupComponent,] }]
};
if (false) {
    /** @type {?} */
    NzPickerComponent.prototype.noAnimation;
    /** @type {?} */
    NzPickerComponent.prototype.isRange;
    /** @type {?} */
    NzPickerComponent.prototype.open;
    /** @type {?} */
    NzPickerComponent.prototype.disabled;
    /** @type {?} */
    NzPickerComponent.prototype.inputReadOnly;
    /** @type {?} */
    NzPickerComponent.prototype.placeholder;
    /** @type {?} */
    NzPickerComponent.prototype.allowClear;
    /** @type {?} */
    NzPickerComponent.prototype.autoFocus;
    /** @type {?} */
    NzPickerComponent.prototype.format;
    /** @type {?} */
    NzPickerComponent.prototype.separator;
    /** @type {?} */
    NzPickerComponent.prototype.popupStyle;
    /** @type {?} */
    NzPickerComponent.prototype.dropdownClassName;
    /** @type {?} */
    NzPickerComponent.prototype.suffixIcon;
    /** @type {?} */
    NzPickerComponent.prototype.focusChange;
    /** @type {?} */
    NzPickerComponent.prototype.valueChange;
    /** @type {?} */
    NzPickerComponent.prototype.openChange;
    /** @type {?} */
    NzPickerComponent.prototype.cdkConnectedOverlay;
    /** @type {?} */
    NzPickerComponent.prototype.separatorElement;
    /** @type {?} */
    NzPickerComponent.prototype.pickerInput;
    /** @type {?} */
    NzPickerComponent.prototype.rangePickerInputs;
    /** @type {?} */
    NzPickerComponent.prototype.panel;
    /** @type {?} */
    NzPickerComponent.prototype.origin;
    /** @type {?} */
    NzPickerComponent.prototype.document;
    /** @type {?} */
    NzPickerComponent.prototype.inputSize;
    /** @type {?} */
    NzPickerComponent.prototype.inputWidth;
    /** @type {?} */
    NzPickerComponent.prototype.arrowLeft;
    /** @type {?} */
    NzPickerComponent.prototype.destroy$;
    /** @type {?} */
    NzPickerComponent.prototype.prefixCls;
    /** @type {?} */
    NzPickerComponent.prototype.inputValue;
    /** @type {?} */
    NzPickerComponent.prototype.activeBarStyle;
    /** @type {?} */
    NzPickerComponent.prototype.animationOpenState;
    /** @type {?} */
    NzPickerComponent.prototype.overlayOpen;
    /** @type {?} */
    NzPickerComponent.prototype.overlayPositions;
    /** @type {?} */
    NzPickerComponent.prototype.currentPositionX;
    /** @type {?} */
    NzPickerComponent.prototype.currentPositionY;
    /**
     * @type {?}
     * @private
     */
    NzPickerComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzPickerComponent.prototype.dateHelper;
    /**
     * @type {?}
     * @private
     */
    NzPickerComponent.prototype.changeDetector;
    /** @type {?} */
    NzPickerComponent.prototype.datePickerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBS2pCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEVBR1QsU0FBUyxFQUNULFlBQVksRUFDWixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTNELE9BQU8sRUFBRSxTQUFTLEVBQW1CLE1BQU0seUJBQXlCLENBQUM7QUFFckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFnSHRDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7Ozs7O0lBK0U1QixZQUNVLFVBQXNCLEVBQ3RCLFVBQTZCLEVBQzdCLGNBQWlDLEVBQ2xDLGlCQUFvQyxFQUN6QixHQUFjO1FBSnhCLGVBQVUsR0FBVixVQUFV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QTZCOztJQUM3Qiw2Q0FpQzhCOztJQUM5Qiw2Q0FBb0Q7O0lBQ3BELDZDQUFtRDs7Ozs7SUFRakQsdUNBQThCOzs7OztJQUM5Qix1Q0FBcUM7Ozs7O0lBQ3JDLDJDQUF5Qzs7SUFDekMsOENBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2RrQ29ubmVjdGVkT3ZlcmxheSxcbiAgQ2RrT3ZlcmxheU9yaWdpbixcbiAgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlLFxuICBDb25uZWN0aW9uUG9zaXRpb25QYWlyLFxuICBIb3Jpem9udGFsQ29ubmVjdGlvblBvcyxcbiAgVmVydGljYWxDb25uZWN0aW9uUG9zXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDaGlsZHJlbixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzbGlkZU1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xuXG5pbXBvcnQgeyBDYW5keURhdGUsIENvbXBhdGlibGVWYWx1ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90aW1lJztcbmltcG9ydCB7IE5nU3R5bGVJbnRlcmZhY2UsIE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERhdGVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi9kYXRlLXBpY2tlci5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGVSYW5nZVBvcHVwQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLXJhbmdlLXBvcHVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSYW5nZVBhcnRUeXBlIH0gZnJvbSAnLi9zdGFuZGFyZC10eXBlcyc7XG5pbXBvcnQgeyBQUkVGSVhfQ0xBU1MgfSBmcm9tICcuL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICdbbnotcGlja2VyXScsXG4gIGV4cG9ydEFzOiAnbnpQaWNrZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDwhLS0gQ29udGVudCBvZiBzaW5nbGUgcGlja2VyIC0tPlxuICAgIDxkaXYgKm5nSWY9XCIhaXNSYW5nZVwiIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWlucHV0XCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgI3BpY2tlcklucHV0XG4gICAgICAgIFtjbGFzcy5hbnQtaW5wdXQtZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbcmVhZE9ubHldPVwiaW5wdXRSZWFkT25seVwiXG4gICAgICAgIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwie3sgZ2V0UGxhY2Vob2xkZXIoKSB9fVwiXG4gICAgICAgIFtzaXplXT1cImlucHV0U2l6ZVwiXG4gICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKClcIlxuICAgICAgICAoYmx1cik9XCJvbkJsdXIoKVwiXG4gICAgICAgIChpbnB1dCk9XCJvbklucHV0S2V5dXAoJGV2ZW50KVwiXG4gICAgICAgIChrZXl1cC5lbnRlcik9XCJvbklucHV0S2V5dXAoJGV2ZW50LCB0cnVlKVwiXG4gICAgICAvPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRwbFJpZ2h0UmVzdFwiPjwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSBDb250ZW50IG9mIHJhbmdlIHBpY2tlciAtLT5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNSYW5nZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1pbnB1dFwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidHBsUmFuZ2VJbnB1dDsgY29udGV4dDogeyBwYXJ0VHlwZTogJ2xlZnQnIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiAjc2VwYXJhdG9yRWxlbWVudCBjbGFzcz1cInt7IHByZWZpeENscyB9fS1yYW5nZS1zZXBhcmF0b3JcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tc2VwYXJhdG9yXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNlcGFyYXRvcjsgZWxzZSBkZWZhdWx0U2VwYXJhdG9yXCI+e3sgc2VwYXJhdG9yIH19PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0U2VwYXJhdG9yPlxuICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwic3dhcC1yaWdodFwiIG56VGhlbWU9XCJvdXRsaW5lXCI+PC9pPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWlucHV0XCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0cGxSYW5nZUlucHV0OyBjb250ZXh0OiB7IHBhcnRUeXBlOiAncmlnaHQnIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRwbFJpZ2h0UmVzdFwiPjwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwhLS0gSW5wdXQgZm9yIFJhbmdlIE9OTFkgLS0+XG4gICAgPG5nLXRlbXBsYXRlICN0cGxSYW5nZUlucHV0IGxldC1wYXJ0VHlwZT1cInBhcnRUeXBlXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgI3JhbmdlUGlja2VySW5wdXRcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW3JlYWRPbmx5XT1cImlucHV0UmVhZE9ubHlcIlxuICAgICAgICBbc2l6ZV09XCJpbnB1dFNpemVcIlxuICAgICAgICAoY2xpY2spPVwib25DbGlja0lucHV0Qm94KCRldmVudCwgcGFydFR5cGUpXCJcbiAgICAgICAgKGJsdXIpPVwib25CbHVyKClcIlxuICAgICAgICAoaW5wdXQpPVwib25JbnB1dEtleXVwKCRldmVudClcIlxuICAgICAgICAoZm9jdXMpPVwib25Gb2N1cyhwYXJ0VHlwZSlcIlxuICAgICAgICAoa2V5dXAuZW50ZXIpPVwib25JbnB1dEtleXVwKCRldmVudCwgdHJ1ZSlcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cImlucHV0VmFsdWVbZGF0ZVBpY2tlclNlcnZpY2UuZ2V0QWN0aXZlSW5kZXgocGFydFR5cGUpXVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwie3sgZ2V0UGxhY2Vob2xkZXIocGFydFR5cGUpIH19XCJcbiAgICAgIC8+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDwhLS0gUmlnaHQgb3BlcmF0b3IgaWNvbnMgLS0+XG4gICAgPG5nLXRlbXBsYXRlICN0cGxSaWdodFJlc3Q+XG4gICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWFjdGl2ZS1iYXJcIiBbbmdTdHlsZV09XCJhY3RpdmVCYXJTdHlsZVwiPjwvZGl2PlxuICAgICAgPHNwYW4gKm5nSWY9XCJzaG93Q2xlYXIoKVwiIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWNsZWFyXCIgKGNsaWNrKT1cIm9uQ2xpY2tDbGVhcigkZXZlbnQpXCI+XG4gICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiY2xvc2UtY2lyY2xlXCIgbnpUaGVtZT1cImZpbGxcIj48L2k+XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1zdWZmaXhcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInN1ZmZpeEljb247IGxldCBzdWZmaXhJY29uXCI+XG4gICAgICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cInN1ZmZpeEljb25cIj48L2k+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8IS0tIE92ZXJsYXkgLS0+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBjZGtDb25uZWN0ZWRPdmVybGF5XG4gICAgICBuekNvbm5lY3RlZE92ZXJsYXlcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cIm9yaWdpblwiXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwicmVhbE9wZW5TdGF0ZVwiXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheUhhc0JhY2tkcm9wXT1cIiFpc09wZW5IYW5kbGVkQnlVc2VyKClcIlxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnNdPVwib3ZlcmxheVBvc2l0aW9uc1wiXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVRyYW5zZm9ybU9yaWdpbk9uXT1cIicuYW50LXBpY2tlci13cmFwcGVyJ1wiXG4gICAgICAocG9zaXRpb25DaGFuZ2UpPVwib25Qb3NpdGlvbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChiYWNrZHJvcENsaWNrKT1cIm9uQ2xpY2tCYWNrZHJvcCgpXCJcbiAgICAgIChkZXRhY2gpPVwib25PdmVybGF5RGV0YWNoKClcIlxuICAgICAgKG92ZXJsYXlLZXlkb3duKT1cIm9uT3ZlcmxheUtleWRvd24oJGV2ZW50KVwiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImFudC1waWNrZXItd3JhcHBlclwiXG4gICAgICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uXCJcbiAgICAgICAgW0BzbGlkZU1vdGlvbl09XCInZW50ZXInXCJcbiAgICAgICAgKEBzbGlkZU1vdGlvbi5kb25lKT1cImFuaW1hdGlvbkRvbmUoKVwiXG4gICAgICAgIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlO1wiXG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1kcm9wZG93biB7eyBkcm9wZG93bkNsYXNzTmFtZSB9fVwiXG4gICAgICAgICAgW2NsYXNzLmFudC1waWNrZXItZHJvcGRvd24tcGxhY2VtZW50LWJvdHRvbUxlZnRdPVwiY3VycmVudFBvc2l0aW9uWSA9PT0gJ2JvdHRvbScgJiYgY3VycmVudFBvc2l0aW9uWCA9PT0gJ3N0YXJ0J1wiXG4gICAgICAgICAgW2NsYXNzLmFudC1waWNrZXItZHJvcGRvd24tcGxhY2VtZW50LXRvcExlZnRdPVwiY3VycmVudFBvc2l0aW9uWSA9PT0gJ3RvcCcgJiYgY3VycmVudFBvc2l0aW9uWCA9PT0gJ3N0YXJ0J1wiXG4gICAgICAgICAgW2NsYXNzLmFudC1waWNrZXItZHJvcGRvd24tcGxhY2VtZW50LWJvdHRvbVJpZ2h0XT1cImN1cnJlbnRQb3NpdGlvblkgPT09ICdib3R0b20nICYmIGN1cnJlbnRQb3NpdGlvblggPT09ICdlbmQnXCJcbiAgICAgICAgICBbY2xhc3MuYW50LXBpY2tlci1kcm9wZG93bi1wbGFjZW1lbnQtdG9wUmlnaHRdPVwiY3VycmVudFBvc2l0aW9uWSA9PT0gJ3RvcCcgJiYgY3VycmVudFBvc2l0aW9uWCA9PT0gJ2VuZCdcIlxuICAgICAgICAgIFtjbGFzcy5hbnQtcGlja2VyLWRyb3Bkb3duLXJhbmdlXT1cImlzUmFuZ2VcIlxuICAgICAgICAgIFtuZ1N0eWxlXT1cInBvcHVwU3R5bGVcIlxuICAgICAgICA+XG4gICAgICAgICAgPCEtLSBDb21wYXRpYmxlIGZvciBvdmVybGF5IHRoYXQgbm90IHN1cHBvcnQgb2Zmc2V0IGR5bmFtaWNhbGx5IGFuZCBpbW1lZGlhdGVseSAtLT5cbiAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgYW5pbWF0aW9uczogW3NsaWRlTW90aW9uXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTnpQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgbm9BbmltYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaXNSYW5nZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBvcGVuOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpbnB1dFJlYWRPbmx5OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyITogc3RyaW5nIHwgc3RyaW5nW107XG4gIEBJbnB1dCgpIGFsbG93Q2xlYXI/OiBib29sZWFuO1xuICBASW5wdXQoKSBhdXRvRm9jdXM/OiBib29sZWFuO1xuICBASW5wdXQoKSBmb3JtYXQhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNlcGFyYXRvcj86IHN0cmluZztcbiAgQElucHV0KCkgcG9wdXBTdHlsZTogTmdTdHlsZUludGVyZmFjZSB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBkcm9wZG93bkNsYXNzTmFtZT86IHN0cmluZztcbiAgQElucHV0KCkgc3VmZml4SWNvbj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPE56U2FmZUFueT47XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGZvY3VzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZSB8IENhbmR5RGF0ZVtdIHwgbnVsbD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7IC8vIEVtaXR0ZWQgd2hlbiBvdmVybGF5J3Mgb3BlbiBzdGF0ZSBjaGFuZ2VcblxuICBAVmlld0NoaWxkKENka0Nvbm5lY3RlZE92ZXJsYXksIHsgc3RhdGljOiBmYWxzZSB9KSBjZGtDb25uZWN0ZWRPdmVybGF5PzogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcbiAgQFZpZXdDaGlsZCgnc2VwYXJhdG9yRWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBzZXBhcmF0b3JFbGVtZW50PzogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgncGlja2VySW5wdXQnLCB7IHN0YXRpYzogZmFsc2UgfSkgcGlja2VySW5wdXQ/OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuICBAVmlld0NoaWxkcmVuKCdyYW5nZVBpY2tlcklucHV0JykgcmFuZ2VQaWNrZXJJbnB1dHMhOiBRdWVyeUxpc3Q8RWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50Pj47XG4gIEBDb250ZW50Q2hpbGQoRGF0ZVJhbmdlUG9wdXBDb21wb25lbnQpIHBhbmVsITogRGF0ZVJhbmdlUG9wdXBDb21wb25lbnQ7XG5cbiAgb3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xuICBkb2N1bWVudDogRG9jdW1lbnQ7XG4gIGlucHV0U2l6ZT86IG51bWJlcjtcbiAgaW5wdXRXaWR0aD86IG51bWJlcjtcbiAgYXJyb3dMZWZ0PzogbnVtYmVyO1xuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIHByZWZpeENscyA9IFBSRUZJWF9DTEFTUztcbiAgLy8gSW5kZXggc2lnbmF0dXJlIGluIHR5cGUgJ3N0cmluZyB8IHN0cmluZ1tdJyBvbmx5IHBlcm1pdHMgcmVhZGluZ1xuICBpbnB1dFZhbHVlOiBOelNhZmVBbnk7XG4gIGFjdGl2ZUJhclN0eWxlOiBvYmplY3QgPSB7IHBvc2l0aW9uOiAnYWJzb2x1dGUnIH07XG4gIGFuaW1hdGlvbk9wZW5TdGF0ZSA9IGZhbHNlO1xuICBvdmVybGF5T3BlbjogYm9vbGVhbiA9IGZhbHNlOyAvLyBBdmFpbGFibGUgd2hlbiBcIm9wZW5cIj11bmRlZmluZWRcbiAgb3ZlcmxheVBvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gW1xuICAgIHtcbiAgICAgIG9mZnNldFg6IC0xMixcbiAgICAgIG9mZnNldFk6IDgsXG4gICAgICBvcmlnaW5YOiAnc3RhcnQnLFxuICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXG4gICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcbiAgICAgIG92ZXJsYXlZOiAndG9wJ1xuICAgIH0sXG4gICAge1xuICAgICAgb2Zmc2V0WDogLTEyLFxuICAgICAgb2Zmc2V0WTogLTgsXG4gICAgICBvcmlnaW5YOiAnc3RhcnQnLFxuICAgICAgb3JpZ2luWTogJ3RvcCcsXG4gICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcbiAgICAgIG92ZXJsYXlZOiAnYm90dG9tJ1xuICAgIH0sXG4gICAge1xuICAgICAgb2Zmc2V0WDogMTIsXG4gICAgICBvZmZzZXRZOiA4LFxuICAgICAgb3JpZ2luWDogJ2VuZCcsXG4gICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcbiAgICAgIG92ZXJsYXlYOiAnZW5kJyxcbiAgICAgIG92ZXJsYXlZOiAndG9wJ1xuICAgIH0sXG4gICAge1xuICAgICAgb2Zmc2V0WDogMTIsXG4gICAgICBvZmZzZXRZOiAtOCxcbiAgICAgIG9yaWdpblg6ICdlbmQnLFxuICAgICAgb3JpZ2luWTogJ3RvcCcsXG4gICAgICBvdmVybGF5WDogJ2VuZCcsXG4gICAgICBvdmVybGF5WTogJ2JvdHRvbSdcbiAgICB9XG4gIF0gYXMgQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdO1xuICBjdXJyZW50UG9zaXRpb25YOiBIb3Jpem9udGFsQ29ubmVjdGlvblBvcyA9ICdzdGFydCc7XG4gIGN1cnJlbnRQb3NpdGlvblk6IFZlcnRpY2FsQ29ubmVjdGlvblBvcyA9ICdib3R0b20nO1xuXG4gIGdldCByZWFsT3BlblN0YXRlKCk6IGJvb2xlYW4ge1xuICAgIC8vIFRoZSB2YWx1ZSB0aGF0IHJlYWxseSBkZWNpZGUgdGhlIG9wZW4gc3RhdGUgb2Ygb3ZlcmxheVxuICAgIHJldHVybiB0aGlzLmlzT3BlbkhhbmRsZWRCeVVzZXIoKSA/ICEhdGhpcy5vcGVuIDogdGhpcy5vdmVybGF5T3BlbjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHB1YmxpYyBkYXRlUGlja2VyU2VydmljZTogRGF0ZVBpY2tlclNlcnZpY2UsXG4gICAgQEluamVjdChET0NVTUVOVCkgZG9jOiBOelNhZmVBbnlcbiAgKSB7XG4gICAgdGhpcy5kb2N1bWVudCA9IGRvYztcbiAgICB0aGlzLm9yaWdpbiA9IG5ldyBDZGtPdmVybGF5T3JpZ2luKHRoaXMuZWxlbWVudFJlZik7XG4gICAgdGhpcy51cGRhdGVJbnB1dFZhbHVlKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0U2l6ZSA9IE1hdGgubWF4KDEwLCB0aGlzLmZvcm1hdC5sZW5ndGgpICsgMjtcblxuICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWVDaGFuZ2UkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVJbnB1dFZhbHVlKCk7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xuICAgICAgdGhpcy5mb2N1cygpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVzZXRJbnB1dFdpZHRoQW5kQXJyb3dMZWZ0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmlucHV0UGFydENoYW5nZSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShwYXJ0VHlwZSA9PiB7XG4gICAgICBpZiAocGFydFR5cGUpIHtcbiAgICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5hY3RpdmVJbnB1dCA9IHBhcnRUeXBlO1xuICAgICAgfVxuICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5hcnJvd1Bvc2l0aW9uU3R5bGUgPSB7XG4gICAgICAgIGxlZnQ6IHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuYWN0aXZlSW5wdXQgPT09ICdsZWZ0JyA/ICcwcHgnIDogYCR7dGhpcy5hcnJvd0xlZnR9cHhgXG4gICAgICB9O1xuICAgICAgdGhpcy5hY3RpdmVCYXJTdHlsZSA9IHtcbiAgICAgICAgLi4udGhpcy5hY3RpdmVCYXJTdHlsZSxcbiAgICAgICAgLi4udGhpcy5kYXRlUGlja2VyU2VydmljZS5hcnJvd1Bvc2l0aW9uU3R5bGUsXG4gICAgICAgIHdpZHRoOiBgJHt0aGlzLmlucHV0V2lkdGh9cHhgXG4gICAgICB9O1xuICAgICAgaWYgKHRoaXMuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gdGhpcy5nZXRJbnB1dCh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFjdGl2ZUlucHV0KSkge1xuICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnBhbmVsPy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm9wZW4pIHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uU3RhcnQoKTtcbiAgICB9XG4gIH1cblxuICByZXNldElucHV0V2lkdGhBbmRBcnJvd0xlZnQoKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dFdpZHRoID0gdGhpcy5yYW5nZVBpY2tlcklucHV0cz8uZmlyc3Q/Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMDtcbiAgICB0aGlzLmFycm93TGVmdCA9IHRoaXMuaW5wdXRXaWR0aCArIHRoaXMuc2VwYXJhdG9yRWxlbWVudD8ubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCB8fCAwO1xuICB9XG5cbiAgZ2V0SW5wdXQocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogSFRNTElucHV0RWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuaXNSYW5nZVxuICAgICAgPyBwYXJ0VHlwZSA9PT0gJ2xlZnQnXG4gICAgICAgID8gdGhpcy5yYW5nZVBpY2tlcklucHV0cy5maXJzdC5uYXRpdmVFbGVtZW50XG4gICAgICAgIDogdGhpcy5yYW5nZVBpY2tlcklucHV0cy5sYXN0Lm5hdGl2ZUVsZW1lbnRcbiAgICAgIDogdGhpcy5waWNrZXJJbnB1dCEubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIGZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuZ2V0SW5wdXQodGhpcy5kYXRlUGlja2VyU2VydmljZS5hY3RpdmVJbnB1dCkuZm9jdXMoKTsgLy8gRm9jdXMgb24gdGhlIGZpcnN0IGlucHV0XG4gIH1cblxuICBvbkZvY3VzKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHZvaWQge1xuICAgIGlmIChwYXJ0VHlwZSkge1xuICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5pbnB1dFBhcnRDaGFuZ2UkLm5leHQocGFydFR5cGUpO1xuICAgIH1cbiAgICB0aGlzLmZvY3VzQ2hhbmdlLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBvbkJsdXIoKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c0NoYW5nZS5lbWl0KGZhbHNlKTtcbiAgfVxuXG4gIC8vIFNob3cgb3ZlcmxheSBjb250ZW50XG4gIHNob3dPdmVybGF5KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5yZWFsT3BlblN0YXRlKSB7XG4gICAgICB0aGlzLnJlc2V0SW5wdXRXaWR0aEFuZEFycm93TGVmdCgpO1xuICAgICAgdGhpcy5vdmVybGF5T3BlbiA9IHRydWU7XG4gICAgICB0aGlzLmFuaW1hdGlvblN0YXJ0KCk7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICB0aGlzLm9wZW5DaGFuZ2UuZW1pdCh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBoaWRlT3ZlcmxheSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZWFsT3BlblN0YXRlKSB7XG4gICAgICB0aGlzLm92ZXJsYXlPcGVuID0gZmFsc2U7XG4gICAgICB0aGlzLm9wZW5DaGFuZ2UuZW1pdChmYWxzZSk7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgc2hvd0NsZWFyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5pc0VtcHR5VmFsdWUodGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZSkgJiYgISF0aGlzLmFsbG93Q2xlYXI7XG4gIH1cblxuICBvbkNsaWNrSW5wdXRCb3goZXZlbnQ6IE1vdXNlRXZlbnQsIHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLmlzT3BlbkhhbmRsZWRCeVVzZXIoKSkge1xuICAgICAgdGhpcy5zaG93T3ZlcmxheSgpO1xuICAgIH1cbiAgICB0aGlzLm9uRm9jdXMocGFydFR5cGUpO1xuICB9XG5cbiAgb25DbGlja0JhY2tkcm9wKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBhbmVsLmlzQWxsb3dlZCh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlISwgdHJ1ZSkpIHtcbiAgICAgIHRoaXMudXBkYXRlSW5wdXRWYWx1ZSgpO1xuICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5lbWl0VmFsdWUkLm5leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5zZXRWYWx1ZSh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmluaXRpYWxWYWx1ZSEpO1xuICAgICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uT3ZlcmxheURldGFjaCgpOiB2b2lkIHtcbiAgICB0aGlzLmhpZGVPdmVybGF5KCk7XG4gIH1cblxuICBvbk92ZXJsYXlLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2Uuc2V0VmFsdWUodGhpcy5kYXRlUGlja2VyU2VydmljZS5pbml0aWFsVmFsdWUhKTtcbiAgICB9XG4gIH1cblxuICAvLyBOT1RFOiBBIGlzc3VlIGhlcmUsIHRoZSBmaXJzdCB0aW1lIHBvc2l0aW9uIGNoYW5nZSwgdGhlIGFuaW1hdGlvbiB3aWxsIG5vdCBiZSB0cmlnZ2VyZWQuXG4gIC8vIEJlY2F1c2UgdGhlIG92ZXJsYXkncyBcInBvc2l0aW9uQ2hhbmdlXCIgZXZlbnQgaXMgZW1pdHRlZCBhZnRlciB0aGUgY29udGVudCdzIGZ1bGwgc2hvd24gdXAuXG4gIC8vIEFsbCBvdGhlciBjb21wb25lbnRzIGxpa2UgXCJuei1kcm9wZG93blwiIHdoaWNoIGRlcGVuZHMgb24gb3ZlcmxheSBhbHNvIGhhcyB0aGUgc2FtZSBpc3N1ZS5cbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9pc3N1ZXMvMTQyOVxuICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnRQb3NpdGlvblggPSBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vcmlnaW5YO1xuICAgIHRoaXMuY3VycmVudFBvc2l0aW9uWSA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7IC8vIFRha2Ugc2lkZS1lZmZlY3RzIHRvIHBvc2l0aW9uIHN0eWxlc1xuICB9XG5cbiAgb25DbGlja0NsZWFyKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2Uuc2V0VmFsdWUodGhpcy5pc1JhbmdlID8gW10gOiBudWxsKTtcbiAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmVtaXRWYWx1ZSQubmV4dCgpO1xuICB9XG5cbiAgdXBkYXRlSW5wdXRWYWx1ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWU7XG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgdGhpcy5pbnB1dFZhbHVlID0gbmV3VmFsdWUgPyAobmV3VmFsdWUgYXMgQ2FuZHlEYXRlW10pLm1hcCh2ID0+IHRoaXMuZm9ybWF0VmFsdWUodikpIDogWycnLCAnJ107XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMuZm9ybWF0VmFsdWUobmV3VmFsdWUgYXMgQ2FuZHlEYXRlKTtcbiAgICB9XG4gIH1cblxuICBmb3JtYXRWYWx1ZSh2YWx1ZTogQ2FuZHlEYXRlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlSGVscGVyLmZvcm1hdCh2YWx1ZSAmJiAodmFsdWUgYXMgQ2FuZHlEYXRlKS5uYXRpdmVEYXRlLCB0aGlzLmZvcm1hdCk7XG4gIH1cblxuICBvbklucHV0S2V5dXAoZXZlbnQ6IEV2ZW50LCBlbWl0VmFsdWU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5yZWFsT3BlblN0YXRlKSB7XG4gICAgICB0aGlzLnNob3dPdmVybGF5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmNoZWNrVmFsaWRJbnB1dERhdGUoKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLnRhcmdldCEpO1xuICAgIGlmICh0aGlzLnBhbmVsICYmIGRhdGUpIHtcbiAgICAgIHRoaXMucGFuZWwuY2hhbmdlVmFsdWVGcm9tU2VsZWN0KGRhdGUsIGVtaXRWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVja1ZhbGlkSW5wdXREYXRlKGlucHV0VGFyZ2V0OiBFdmVudFRhcmdldCk6IENhbmR5RGF0ZSB8IG51bGwge1xuICAgIGNvbnN0IGlucHV0ID0gKGlucHV0VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgQ2FuZHlEYXRlKHRoaXMuZGF0ZUhlbHBlci5wYXJzZURhdGUoaW5wdXQsIHRoaXMuZm9ybWF0KSk7XG5cbiAgICBpZiAoIWRhdGUuaXNWYWxpZCgpIHx8IGlucHV0ICE9PSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KGRhdGUubmF0aXZlRGF0ZSwgdGhpcy5mb3JtYXQpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGdldFBsYWNlaG9sZGVyKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaXNSYW5nZSA/IHRoaXMucGxhY2Vob2xkZXJbdGhpcy5kYXRlUGlja2VyU2VydmljZS5nZXRBY3RpdmVJbmRleChwYXJ0VHlwZSEpXSA6ICh0aGlzLnBsYWNlaG9sZGVyIGFzIHN0cmluZyk7XG4gIH1cblxuICBpc0VtcHR5VmFsdWUodmFsdWU6IENvbXBhdGlibGVWYWx1ZSk6IGJvb2xlYW4ge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIHJldHVybiAhdmFsdWUgfHwgIUFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlLmV2ZXJ5KHZhbCA9PiAhdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICF2YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBXaGV0aGVyIG9wZW4gc3RhdGUgaXMgcGVybWFuZW50bHkgY29udHJvbGxlZCBieSB1c2VyIGhpbXNlbGZcbiAgaXNPcGVuSGFuZGxlZEJ5VXNlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5vcGVuICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICBhbmltYXRpb25TdGFydCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZWFsT3BlblN0YXRlKSB7XG4gICAgICB0aGlzLmFuaW1hdGlvbk9wZW5TdGF0ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgYW5pbWF0aW9uRG9uZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucmVhbE9wZW5TdGF0ZSkge1xuICAgICAgdGhpcy5hbmltYXRpb25PcGVuU3RhdGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG59XG4iXX0=