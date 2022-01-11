/**
 * @fileoverview added by tsickle
 * Generated from: slider.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, Output, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { arraysEqual, ensureNumberInRange, getElementOffset, getPercent, getPrecision, InputBoolean, InputNumber, silentEvent } from 'ng-zorro-antd/core/util';
import { fromEvent, merge } from 'rxjs';
import { distinctUntilChanged, filter, map, pluck, takeUntil, tap } from 'rxjs/operators';
import { NzSliderHandleComponent } from './handle.component';
import { NzSliderService } from './slider.service';
export class NzSliderComponent {
    /**
     * @param {?} sliderService
     * @param {?} cdr
     * @param {?} platform
     */
    constructor(sliderService, cdr, platform) {
        this.sliderService = sliderService;
        this.cdr = cdr;
        this.platform = platform;
        this.nzDisabled = false;
        this.nzDots = false;
        this.nzIncluded = true;
        this.nzRange = false;
        this.nzVertical = false;
        this.nzReverse = false;
        this.nzMarks = null;
        this.nzMax = 100;
        this.nzMin = 0;
        this.nzStep = 1;
        this.nzTooltipVisible = 'default';
        this.nzTooltipPlacement = 'top';
        this.nzOnAfterChange = new EventEmitter();
        this.value = null;
        this.cacheSliderStart = null;
        this.cacheSliderLength = null;
        this.activeValueIndex = undefined; // Current activated handle's index ONLY for range=true
        // Current activated handle's index ONLY for range=true
        this.track = { offset: null, length: null }; // Track's offset and length
        // Track's offset and length
        this.handles = []; // Handles' offset
        // Handles' offset
        this.marksArray = null; // "steps" in array type with more data & FILTER out the invalid mark
        // "steps" in array type with more data & FILTER out the invalid mark
        this.bounds = { lower: null, upper: null }; // now for nz-slider-step
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.handles = generateHandlers(this.nzRange ? 2 : 1);
        this.marksArray = this.nzMarks ? this.generateMarkItems(this.nzMarks) : null;
        this.bindDraggingHandlers();
        this.toggleDragDisabled(this.nzDisabled);
        if (this.getValue() === null) {
            this.setValue(this.formatValue(null));
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzDisabled, nzMarks, nzRange } = changes;
        if (nzDisabled && !nzDisabled.firstChange) {
            this.toggleDragDisabled(nzDisabled.currentValue);
        }
        else if (nzMarks && !nzMarks.firstChange) {
            this.marksArray = this.nzMarks ? this.generateMarkItems(this.nzMarks) : null;
        }
        else if (nzRange && !nzRange.firstChange) {
            this.setValue(this.formatValue(null));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribeDrag();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    writeValue(val) {
        this.setValue(val, true);
    }
    /**
     * @param {?} _value
     * @return {?}
     */
    onValueChange(_value) { }
    /**
     * @return {?}
     */
    onTouched() { }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onValueChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
        this.toggleDragDisabled(isDisabled);
    }
    /**
     * Event handler is only triggered when a slider handler is focused.
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        /** @type {?} */
        const code = e.keyCode;
        /** @type {?} */
        const isIncrease = code === RIGHT_ARROW || code === UP_ARROW;
        /** @type {?} */
        const isDecrease = code === LEFT_ARROW || code === DOWN_ARROW;
        if (!(isIncrease || isDecrease)) {
            return;
        }
        e.preventDefault();
        /** @type {?} */
        const step = (isDecrease ? -this.nzStep : this.nzStep) * (this.nzReverse ? -1 : 1);
        /** @type {?} */
        const newVal = this.nzRange ? ((/** @type {?} */ (this.value)))[(/** @type {?} */ (this.activeValueIndex))] + step : ((/** @type {?} */ (this.value))) + step;
        this.setActiveValue(ensureNumberInRange(newVal, this.nzMin, this.nzMax));
    }
    /**
     * @private
     * @param {?} value
     * @param {?=} isWriteValue
     * @return {?}
     */
    setValue(value, isWriteValue = false) {
        if (isWriteValue) {
            this.value = this.formatValue(value);
            this.updateTrackAndHandles();
        }
        else if (!valuesEqual((/** @type {?} */ (this.value)), (/** @type {?} */ (value)))) {
            this.value = value;
            this.updateTrackAndHandles();
            this.onValueChange(this.getValue(true));
        }
    }
    /**
     * @private
     * @param {?=} cloneAndSort
     * @return {?}
     */
    getValue(cloneAndSort = false) {
        if (cloneAndSort && this.value && isValueRange(this.value)) {
            return [...this.value].sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => a - b));
        }
        return (/** @type {?} */ (this.value));
    }
    /**
     * Clone & sort current value and convert them to offsets, then return the new one.
     * @private
     * @param {?=} value
     * @return {?}
     */
    getValueToOffset(value) {
        /** @type {?} */
        let normalizedValue = value;
        if (typeof normalizedValue === 'undefined') {
            normalizedValue = this.getValue(true);
        }
        return isValueRange(normalizedValue) ? normalizedValue.map((/**
         * @param {?} val
         * @return {?}
         */
        val => this.valueToOffset(val))) : this.valueToOffset(normalizedValue);
    }
    /**
     * Find the closest value to be activated.
     * @private
     * @param {?} pointerValue
     * @return {?}
     */
    setActiveValueIndex(pointerValue) {
        /** @type {?} */
        const value = this.getValue();
        if (isValueRange(value)) {
            /** @type {?} */
            let minimal = null;
            /** @type {?} */
            let gap;
            /** @type {?} */
            let activeIndex = -1;
            value.forEach((/**
             * @param {?} val
             * @param {?} index
             * @return {?}
             */
            (val, index) => {
                gap = Math.abs(pointerValue - val);
                if (minimal === null || gap < (/** @type {?} */ (minimal))) {
                    minimal = gap;
                    activeIndex = index;
                }
            }));
            this.activeValueIndex = activeIndex;
            this.handlerComponents.toArray()[activeIndex].focus();
        }
        else {
            this.handlerComponents.toArray()[0].focus();
        }
    }
    /**
     * @private
     * @param {?} pointerValue
     * @return {?}
     */
    setActiveValue(pointerValue) {
        if (isValueRange((/** @type {?} */ (this.value)))) {
            /** @type {?} */
            const newValue = [...((/** @type {?} */ (this.value)))];
            newValue[(/** @type {?} */ (this.activeValueIndex))] = pointerValue;
            this.setValue(newValue);
        }
        else {
            this.setValue(pointerValue);
        }
    }
    /**
     * Update track and handles' position and length.
     * @private
     * @return {?}
     */
    updateTrackAndHandles() {
        /** @type {?} */
        const value = this.getValue();
        /** @type {?} */
        const offset = this.getValueToOffset(value);
        /** @type {?} */
        const valueSorted = this.getValue(true);
        /** @type {?} */
        const offsetSorted = this.getValueToOffset(valueSorted);
        /** @type {?} */
        const boundParts = isValueRange(valueSorted) ? valueSorted : [0, valueSorted];
        /** @type {?} */
        const trackParts = isValueRange(offsetSorted) ? [offsetSorted[0], offsetSorted[1] - offsetSorted[0]] : [0, offsetSorted];
        this.handles.forEach((/**
         * @param {?} handle
         * @param {?} index
         * @return {?}
         */
        (handle, index) => {
            handle.offset = isValueRange(offset) ? offset[index] : offset;
            handle.value = isValueRange(value) ? value[index] : value || 0;
        }));
        [this.bounds.lower, this.bounds.upper] = boundParts;
        [this.track.offset, this.track.length] = trackParts;
        this.cdr.markForCheck();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    onDragStart(value) {
        this.toggleDragMoving(true);
        this.cacheSliderProperty();
        this.setActiveValueIndex(this.getLogicalValue(value));
        this.setActiveValue(this.getLogicalValue(value));
        this.showHandleTooltip(this.nzRange ? this.activeValueIndex : 0);
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    onDragMove(value) {
        this.setActiveValue(this.getLogicalValue(value));
        this.cdr.markForCheck();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    getLogicalValue(value) {
        return this.nzReverse ? this.nzMax - value : value;
    }
    /**
     * @private
     * @return {?}
     */
    onDragEnd() {
        this.nzOnAfterChange.emit(this.getValue(true));
        this.toggleDragMoving(false);
        this.cacheSliderProperty(true);
        this.hideAllHandleTooltip();
        this.cdr.markForCheck();
    }
    /**
     * Create user interactions handles.
     * @private
     * @return {?}
     */
    bindDraggingHandlers() {
        if (!this.platform.isBrowser) {
            return;
        }
        /** @type {?} */
        const sliderDOM = this.slider.nativeElement;
        /** @type {?} */
        const orientField = this.nzVertical ? 'pageY' : 'pageX';
        /** @type {?} */
        const mouse = {
            start: 'mousedown',
            move: 'mousemove',
            end: 'mouseup',
            pluckKey: [orientField]
        };
        /** @type {?} */
        const touch = {
            start: 'touchstart',
            move: 'touchmove',
            end: 'touchend',
            pluckKey: ['touches', '0', orientField],
            filter: (/**
             * @param {?} e
             * @return {?}
             */
            (e) => e instanceof TouchEvent)
        };
        [mouse, touch].forEach((/**
         * @param {?} source
         * @return {?}
         */
        source => {
            const { start, move, end, pluckKey, filter: filterFunc = (/**
             * @return {?}
             */
            () => true) } = source;
            source.startPlucked$ = fromEvent(sliderDOM, start).pipe(filter(filterFunc), tap(silentEvent), pluck(...pluckKey), map((/**
             * @param {?} position
             * @return {?}
             */
            (position) => this.findClosestValue(position))));
            source.end$ = fromEvent(document, end);
            source.moveResolved$ = fromEvent(document, move).pipe(filter(filterFunc), tap(silentEvent), pluck(...pluckKey), distinctUntilChanged(), map((/**
             * @param {?} position
             * @return {?}
             */
            (position) => this.findClosestValue(position))), distinctUntilChanged(), takeUntil(source.end$));
        }));
        this.dragStart$ = merge((/** @type {?} */ (mouse.startPlucked$)), (/** @type {?} */ (touch.startPlucked$)));
        this.dragMove$ = merge((/** @type {?} */ (mouse.moveResolved$)), (/** @type {?} */ (touch.moveResolved$)));
        this.dragEnd$ = merge((/** @type {?} */ (mouse.end$)), (/** @type {?} */ (touch.end$)));
    }
    /**
     * @private
     * @param {?=} periods
     * @return {?}
     */
    subscribeDrag(periods = ['start', 'move', 'end']) {
        if (periods.indexOf('start') !== -1 && this.dragStart$ && !this.dragStart_) {
            this.dragStart_ = this.dragStart$.subscribe(this.onDragStart.bind(this));
        }
        if (periods.indexOf('move') !== -1 && this.dragMove$ && !this.dragMove_) {
            this.dragMove_ = this.dragMove$.subscribe(this.onDragMove.bind(this));
        }
        if (periods.indexOf('end') !== -1 && this.dragEnd$ && !this.dragEnd_) {
            this.dragEnd_ = this.dragEnd$.subscribe(this.onDragEnd.bind(this));
        }
    }
    /**
     * @private
     * @param {?=} periods
     * @return {?}
     */
    unsubscribeDrag(periods = ['start', 'move', 'end']) {
        if (periods.indexOf('start') !== -1 && this.dragStart_) {
            this.dragStart_.unsubscribe();
            this.dragStart_ = null;
        }
        if (periods.indexOf('move') !== -1 && this.dragMove_) {
            this.dragMove_.unsubscribe();
            this.dragMove_ = null;
        }
        if (periods.indexOf('end') !== -1 && this.dragEnd_) {
            this.dragEnd_.unsubscribe();
            this.dragEnd_ = null;
        }
    }
    /**
     * @private
     * @param {?} movable
     * @return {?}
     */
    toggleDragMoving(movable) {
        /** @type {?} */
        const periods = ['move', 'end'];
        if (movable) {
            this.sliderService.isDragging = true;
            this.subscribeDrag(periods);
        }
        else {
            this.sliderService.isDragging = false;
            this.unsubscribeDrag(periods);
        }
    }
    /**
     * @private
     * @param {?} disabled
     * @return {?}
     */
    toggleDragDisabled(disabled) {
        if (disabled) {
            this.unsubscribeDrag();
        }
        else {
            this.subscribeDrag(['start']);
        }
    }
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    findClosestValue(position) {
        /** @type {?} */
        const sliderStart = this.getSliderStartPosition();
        /** @type {?} */
        const sliderLength = this.getSliderLength();
        /** @type {?} */
        const ratio = ensureNumberInRange((position - sliderStart) / sliderLength, 0, 1);
        /** @type {?} */
        const val = (this.nzMax - this.nzMin) * (this.nzVertical ? 1 - ratio : ratio) + this.nzMin;
        /** @type {?} */
        const points = this.nzMarks === null ? [] : Object.keys(this.nzMarks).map(parseFloat);
        if (this.nzStep !== 0 && !this.nzDots) {
            /** @type {?} */
            const closestOne = Math.round(val / this.nzStep) * this.nzStep;
            points.push(closestOne);
        }
        /** @type {?} */
        const gaps = points.map((/**
         * @param {?} point
         * @return {?}
         */
        point => Math.abs(val - point)));
        /** @type {?} */
        const closest = points[gaps.indexOf(Math.min(...gaps))];
        return this.nzStep === null ? closest : parseFloat(closest.toFixed(getPrecision(this.nzStep)));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    valueToOffset(value) {
        return getPercent(this.nzMin, this.nzMax, value);
    }
    /**
     * @private
     * @return {?}
     */
    getSliderStartPosition() {
        if (this.cacheSliderStart !== null) {
            return this.cacheSliderStart;
        }
        /** @type {?} */
        const offset = getElementOffset(this.slider.nativeElement);
        return this.nzVertical ? offset.top : offset.left;
    }
    /**
     * @private
     * @return {?}
     */
    getSliderLength() {
        if (this.cacheSliderLength !== null) {
            return this.cacheSliderLength;
        }
        /** @type {?} */
        const sliderDOM = this.slider.nativeElement;
        return this.nzVertical ? sliderDOM.clientHeight : sliderDOM.clientWidth;
    }
    /**
     * Cache DOM layout/reflow operations for performance (may not necessary?)
     * @private
     * @param {?=} remove
     * @return {?}
     */
    cacheSliderProperty(remove = false) {
        this.cacheSliderStart = remove ? null : this.getSliderStartPosition();
        this.cacheSliderLength = remove ? null : this.getSliderLength();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    formatValue(value) {
        if (!value) {
            return this.nzRange ? [this.nzMin, this.nzMax] : this.nzMin;
        }
        else if (assertValueValid(value, this.nzRange)) {
            return isValueRange(value)
                ? value.map((/**
                 * @param {?} val
                 * @return {?}
                 */
                val => ensureNumberInRange(val, this.nzMin, this.nzMax)))
                : ensureNumberInRange(value, this.nzMin, this.nzMax);
        }
        else {
            return this.nzDefaultValue ? this.nzDefaultValue : this.nzRange ? [this.nzMin, this.nzMax] : this.nzMin;
        }
    }
    /**
     * Show one handle's tooltip and hide others'.
     * @private
     * @param {?=} handleIndex
     * @return {?}
     */
    showHandleTooltip(handleIndex = 0) {
        this.handles.forEach((/**
         * @param {?} handle
         * @param {?} index
         * @return {?}
         */
        (handle, index) => {
            handle.active = index === handleIndex;
        }));
    }
    /**
     * @private
     * @return {?}
     */
    hideAllHandleTooltip() {
        this.handles.forEach((/**
         * @param {?} handle
         * @return {?}
         */
        handle => (handle.active = false)));
    }
    /**
     * @private
     * @param {?} marks
     * @return {?}
     */
    generateMarkItems(marks) {
        /** @type {?} */
        const marksArray = [];
        for (const key in marks) {
            /** @type {?} */
            const mark = marks[key];
            /** @type {?} */
            const val = typeof key === 'number' ? key : parseFloat(key);
            if (val >= this.nzMin && val <= this.nzMax) {
                marksArray.push({ value: val, offset: this.valueToOffset(val), config: mark });
            }
        }
        return marksArray.length ? marksArray : null;
    }
}
NzSliderComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-slider',
                exportAs: 'nzSlider',
                preserveWhitespaces: false,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => NzSliderComponent)),
                        multi: true
                    },
                    NzSliderService
                ],
                host: {
                    '(keydown)': 'onKeyDown($event)'
                },
                template: `
    <div
      #slider
      class="ant-slider"
      [class.ant-slider-disabled]="nzDisabled"
      [class.ant-slider-vertical]="nzVertical"
      [class.ant-slider-with-marks]="marksArray"
    >
      <div class="ant-slider-rail"></div>
      <nz-slider-track
        [vertical]="nzVertical"
        [included]="nzIncluded"
        [offset]="track.offset!"
        [length]="track.length!"
        [reverse]="nzReverse"
      ></nz-slider-track>
      <nz-slider-step
        *ngIf="marksArray"
        [vertical]="nzVertical"
        [lowerBound]="$any(bounds.lower)"
        [upperBound]="$any(bounds.upper)"
        [marksArray]="marksArray"
        [included]="nzIncluded"
      ></nz-slider-step>
      <nz-slider-handle
        *ngFor="let handle of handles"
        [vertical]="nzVertical"
        [reverse]="nzReverse"
        [offset]="handle.offset!"
        [value]="handle.value!"
        [active]="handle.active"
        [tooltipFormatter]="nzTipFormatter"
        [tooltipVisible]="nzTooltipVisible"
        [tooltipPlacement]="nzTooltipPlacement"
      ></nz-slider-handle>
      <nz-slider-marks
        *ngIf="marksArray"
        [vertical]="nzVertical"
        [min]="nzMin"
        [max]="nzMax"
        [lowerBound]="$any(bounds.lower)"
        [upperBound]="$any(bounds.upper)"
        [marksArray]="marksArray"
        [included]="nzIncluded"
      ></nz-slider-marks>
    </div>
  `
            }] }
];
/** @nocollapse */
NzSliderComponent.ctorParameters = () => [
    { type: NzSliderService },
    { type: ChangeDetectorRef },
    { type: Platform }
];
NzSliderComponent.propDecorators = {
    slider: [{ type: ViewChild, args: ['slider', { static: true },] }],
    handlerComponents: [{ type: ViewChildren, args: [NzSliderHandleComponent,] }],
    nzDisabled: [{ type: Input }],
    nzDots: [{ type: Input }],
    nzIncluded: [{ type: Input }],
    nzRange: [{ type: Input }],
    nzVertical: [{ type: Input }],
    nzReverse: [{ type: Input }],
    nzDefaultValue: [{ type: Input }],
    nzMarks: [{ type: Input }],
    nzMax: [{ type: Input }],
    nzMin: [{ type: Input }],
    nzStep: [{ type: Input }],
    nzTooltipVisible: [{ type: Input }],
    nzTooltipPlacement: [{ type: Input }],
    nzTipFormatter: [{ type: Input }],
    nzOnAfterChange: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSliderComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzSliderComponent.prototype, "nzDots", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzSliderComponent.prototype, "nzIncluded", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzSliderComponent.prototype, "nzRange", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzSliderComponent.prototype, "nzVertical", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzSliderComponent.prototype, "nzReverse", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NzSliderComponent.prototype, "nzMax", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NzSliderComponent.prototype, "nzMin", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NzSliderComponent.prototype, "nzStep", void 0);
if (false) {
    /** @type {?} */
    NzSliderComponent.ngAcceptInputType_nzDisabled;
    /** @type {?} */
    NzSliderComponent.ngAcceptInputType_nzDots;
    /** @type {?} */
    NzSliderComponent.ngAcceptInputType_nzIncluded;
    /** @type {?} */
    NzSliderComponent.ngAcceptInputType_nzRange;
    /** @type {?} */
    NzSliderComponent.ngAcceptInputType_nzVertical;
    /** @type {?} */
    NzSliderComponent.ngAcceptInputType_nzMax;
    /** @type {?} */
    NzSliderComponent.ngAcceptInputType_nzMin;
    /** @type {?} */
    NzSliderComponent.ngAcceptInputType_nzStep;
    /** @type {?} */
    NzSliderComponent.ngAcceptInputType_nzReverse;
    /** @type {?} */
    NzSliderComponent.prototype.slider;
    /** @type {?} */
    NzSliderComponent.prototype.handlerComponents;
    /** @type {?} */
    NzSliderComponent.prototype.nzDisabled;
    /** @type {?} */
    NzSliderComponent.prototype.nzDots;
    /** @type {?} */
    NzSliderComponent.prototype.nzIncluded;
    /** @type {?} */
    NzSliderComponent.prototype.nzRange;
    /** @type {?} */
    NzSliderComponent.prototype.nzVertical;
    /** @type {?} */
    NzSliderComponent.prototype.nzReverse;
    /** @type {?} */
    NzSliderComponent.prototype.nzDefaultValue;
    /** @type {?} */
    NzSliderComponent.prototype.nzMarks;
    /** @type {?} */
    NzSliderComponent.prototype.nzMax;
    /** @type {?} */
    NzSliderComponent.prototype.nzMin;
    /** @type {?} */
    NzSliderComponent.prototype.nzStep;
    /** @type {?} */
    NzSliderComponent.prototype.nzTooltipVisible;
    /** @type {?} */
    NzSliderComponent.prototype.nzTooltipPlacement;
    /** @type {?} */
    NzSliderComponent.prototype.nzTipFormatter;
    /** @type {?} */
    NzSliderComponent.prototype.nzOnAfterChange;
    /** @type {?} */
    NzSliderComponent.prototype.value;
    /** @type {?} */
    NzSliderComponent.prototype.cacheSliderStart;
    /** @type {?} */
    NzSliderComponent.prototype.cacheSliderLength;
    /** @type {?} */
    NzSliderComponent.prototype.activeValueIndex;
    /** @type {?} */
    NzSliderComponent.prototype.track;
    /** @type {?} */
    NzSliderComponent.prototype.handles;
    /** @type {?} */
    NzSliderComponent.prototype.marksArray;
    /** @type {?} */
    NzSliderComponent.prototype.bounds;
    /**
     * @type {?}
     * @private
     */
    NzSliderComponent.prototype.dragStart$;
    /**
     * @type {?}
     * @private
     */
    NzSliderComponent.prototype.dragMove$;
    /**
     * @type {?}
     * @private
     */
    NzSliderComponent.prototype.dragEnd$;
    /**
     * @type {?}
     * @private
     */
    NzSliderComponent.prototype.dragStart_;
    /**
     * @type {?}
     * @private
     */
    NzSliderComponent.prototype.dragMove_;
    /**
     * @type {?}
     * @private
     */
    NzSliderComponent.prototype.dragEnd_;
    /**
     * @type {?}
     * @private
     */
    NzSliderComponent.prototype.sliderService;
    /**
     * @type {?}
     * @private
     */
    NzSliderComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzSliderComponent.prototype.platform;
}
/**
 * @return {?}
 */
function getValueTypeNotMatchError() {
    return new Error(`The "nzRange" can't match the "ngModel"'s type, please check these properties: "nzRange", "ngModel", "nzDefaultValue".`);
}
/**
 * @param {?} value
 * @return {?}
 */
function isValueRange(value) {
    if (value instanceof Array) {
        return value.length === 2;
    }
    else {
        return false;
    }
}
/**
 * @param {?} amount
 * @return {?}
 */
function generateHandlers(amount) {
    return Array(amount)
        .fill(0)
        .map((/**
     * @return {?}
     */
    () => ({ offset: null, value: null, active: false })));
}
/**
 * Check if value is valid and throw error if value-type/range not match.
 * @param {?} value
 * @param {?=} isRange
 * @return {?}
 */
function assertValueValid(value, isRange) {
    if ((!isValueRange(value) && isNaN(value)) || (isValueRange(value) && value.some((/**
     * @param {?} v
     * @return {?}
     */
    v => isNaN(v))))) {
        return false;
    }
    return assertValueTypeMatch(value, isRange);
}
/**
 * Assert that if `this.nzRange` is `true`, value is also a range, vice versa.
 * @param {?} value
 * @param {?=} isRange
 * @return {?}
 */
function assertValueTypeMatch(value, isRange = false) {
    if (isValueRange(value) !== isRange) {
        throw getValueTypeNotMatchError();
    }
    return true;
}
/**
 * @param {?} valA
 * @param {?} valB
 * @return {?}
 */
function valuesEqual(valA, valB) {
    if (typeof valA !== typeof valB) {
        return false;
    }
    return isValueRange(valA) && isValueRange(valB) ? arraysEqual(valA, valB) : valA === valB;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2xpZGVyLyIsInNvdXJjZXMiOlsic2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEVBRVQsU0FBUyxFQUNULFlBQVksRUFDWixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFDTCxXQUFXLEVBQ1gsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNoQixVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixXQUFXLEVBRVgsV0FBVyxFQUNaLE1BQU0seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sTUFBTSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBcUVuRCxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7SUErQzVCLFlBQW9CLGFBQThCLEVBQVUsR0FBc0IsRUFBVSxRQUFrQjtRQUEx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QUMsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBUyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUM7QUFDcEcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERPV05fQVJST1csIExFRlRfQVJST1csIFJJR0hUX0FSUk9XLCBVUF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NoaWxkcmVuLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnVtYmVySW5wdXQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHtcbiAgYXJyYXlzRXF1YWwsXG4gIGVuc3VyZU51bWJlckluUmFuZ2UsXG4gIGdldEVsZW1lbnRPZmZzZXQsXG4gIGdldFBlcmNlbnQsXG4gIGdldFByZWNpc2lvbixcbiAgSW5wdXRCb29sZWFuLFxuICBJbnB1dE51bWJlcixcbiAgTW91c2VUb3VjaE9ic2VydmVyQ29uZmlnLFxuICBzaWxlbnRFdmVudFxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgcGx1Y2ssIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOelNsaWRlckhhbmRsZUNvbXBvbmVudCB9IGZyb20gJy4vaGFuZGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelNsaWRlclNlcnZpY2UgfSBmcm9tICcuL3NsaWRlci5zZXJ2aWNlJztcblxuaW1wb3J0IHsgTnpFeHRlbmRlZE1hcmssIE56TWFya3MsIE56U2xpZGVySGFuZGxlciwgTnpTbGlkZXJTaG93VG9vbHRpcCwgTnpTbGlkZXJWYWx1ZSB9IGZyb20gJy4vdHlwaW5ncyc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICduei1zbGlkZXInLFxuICBleHBvcnRBczogJ256U2xpZGVyJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpTbGlkZXJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIE56U2xpZGVyU2VydmljZVxuICBdLFxuICBob3N0OiB7XG4gICAgJyhrZXlkb3duKSc6ICdvbktleURvd24oJGV2ZW50KSdcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2XG4gICAgICAjc2xpZGVyXG4gICAgICBjbGFzcz1cImFudC1zbGlkZXJcIlxuICAgICAgW2NsYXNzLmFudC1zbGlkZXItZGlzYWJsZWRdPVwibnpEaXNhYmxlZFwiXG4gICAgICBbY2xhc3MuYW50LXNsaWRlci12ZXJ0aWNhbF09XCJuelZlcnRpY2FsXCJcbiAgICAgIFtjbGFzcy5hbnQtc2xpZGVyLXdpdGgtbWFya3NdPVwibWFya3NBcnJheVwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cImFudC1zbGlkZXItcmFpbFwiPjwvZGl2PlxuICAgICAgPG56LXNsaWRlci10cmFja1xuICAgICAgICBbdmVydGljYWxdPVwibnpWZXJ0aWNhbFwiXG4gICAgICAgIFtpbmNsdWRlZF09XCJuekluY2x1ZGVkXCJcbiAgICAgICAgW29mZnNldF09XCJ0cmFjay5vZmZzZXQhXCJcbiAgICAgICAgW2xlbmd0aF09XCJ0cmFjay5sZW5ndGghXCJcbiAgICAgICAgW3JldmVyc2VdPVwibnpSZXZlcnNlXCJcbiAgICAgID48L256LXNsaWRlci10cmFjaz5cbiAgICAgIDxuei1zbGlkZXItc3RlcFxuICAgICAgICAqbmdJZj1cIm1hcmtzQXJyYXlcIlxuICAgICAgICBbdmVydGljYWxdPVwibnpWZXJ0aWNhbFwiXG4gICAgICAgIFtsb3dlckJvdW5kXT1cIiRhbnkoYm91bmRzLmxvd2VyKVwiXG4gICAgICAgIFt1cHBlckJvdW5kXT1cIiRhbnkoYm91bmRzLnVwcGVyKVwiXG4gICAgICAgIFttYXJrc0FycmF5XT1cIm1hcmtzQXJyYXlcIlxuICAgICAgICBbaW5jbHVkZWRdPVwibnpJbmNsdWRlZFwiXG4gICAgICA+PC9uei1zbGlkZXItc3RlcD5cbiAgICAgIDxuei1zbGlkZXItaGFuZGxlXG4gICAgICAgICpuZ0Zvcj1cImxldCBoYW5kbGUgb2YgaGFuZGxlc1wiXG4gICAgICAgIFt2ZXJ0aWNhbF09XCJuelZlcnRpY2FsXCJcbiAgICAgICAgW3JldmVyc2VdPVwibnpSZXZlcnNlXCJcbiAgICAgICAgW29mZnNldF09XCJoYW5kbGUub2Zmc2V0IVwiXG4gICAgICAgIFt2YWx1ZV09XCJoYW5kbGUudmFsdWUhXCJcbiAgICAgICAgW2FjdGl2ZV09XCJoYW5kbGUuYWN0aXZlXCJcbiAgICAgICAgW3Rvb2x0aXBGb3JtYXR0ZXJdPVwibnpUaXBGb3JtYXR0ZXJcIlxuICAgICAgICBbdG9vbHRpcFZpc2libGVdPVwibnpUb29sdGlwVmlzaWJsZVwiXG4gICAgICAgIFt0b29sdGlwUGxhY2VtZW50XT1cIm56VG9vbHRpcFBsYWNlbWVudFwiXG4gICAgICA+PC9uei1zbGlkZXItaGFuZGxlPlxuICAgICAgPG56LXNsaWRlci1tYXJrc1xuICAgICAgICAqbmdJZj1cIm1hcmtzQXJyYXlcIlxuICAgICAgICBbdmVydGljYWxdPVwibnpWZXJ0aWNhbFwiXG4gICAgICAgIFttaW5dPVwibnpNaW5cIlxuICAgICAgICBbbWF4XT1cIm56TWF4XCJcbiAgICAgICAgW2xvd2VyQm91bmRdPVwiJGFueShib3VuZHMubG93ZXIpXCJcbiAgICAgICAgW3VwcGVyQm91bmRdPVwiJGFueShib3VuZHMudXBwZXIpXCJcbiAgICAgICAgW21hcmtzQXJyYXldPVwibWFya3NBcnJheVwiXG4gICAgICAgIFtpbmNsdWRlZF09XCJuekluY2x1ZGVkXCJcbiAgICAgID48L256LXNsaWRlci1tYXJrcz5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOelNsaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RG90czogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpJbmNsdWRlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpSYW5nZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpWZXJ0aWNhbDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpNYXg6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpNaW46IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTdGVwOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256UmV2ZXJzZTogQm9vbGVhbklucHV0O1xuXG4gIEBWaWV3Q2hpbGQoJ3NsaWRlcicsIHsgc3RhdGljOiB0cnVlIH0pIHNsaWRlciE6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkcmVuKE56U2xpZGVySGFuZGxlQ29tcG9uZW50KSBoYW5kbGVyQ29tcG9uZW50cyE6IFF1ZXJ5TGlzdDxOelNsaWRlckhhbmRsZUNvbXBvbmVudD47XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RG90czogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpJbmNsdWRlZDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelJhbmdlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelZlcnRpY2FsOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelJldmVyc2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgbnpEZWZhdWx0VmFsdWU/OiBOelNsaWRlclZhbHVlO1xuICBASW5wdXQoKSBuek1hcmtzOiBOek1hcmtzIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56TWF4ID0gMTAwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuek1pbiA9IDA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56U3RlcCA9IDE7XG4gIEBJbnB1dCgpIG56VG9vbHRpcFZpc2libGU6IE56U2xpZGVyU2hvd1Rvb2x0aXAgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIG56VG9vbHRpcFBsYWNlbWVudDogc3RyaW5nID0gJ3RvcCc7XG4gIEBJbnB1dCgpIG56VGlwRm9ybWF0dGVyPzogbnVsbCB8ICgodmFsdWU6IG51bWJlcikgPT4gc3RyaW5nKTtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkFmdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOelNsaWRlclZhbHVlPigpO1xuXG4gIHZhbHVlOiBOelNsaWRlclZhbHVlIHwgbnVsbCA9IG51bGw7XG4gIGNhY2hlU2xpZGVyU3RhcnQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBjYWNoZVNsaWRlckxlbmd0aDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIGFjdGl2ZVZhbHVlSW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDsgLy8gQ3VycmVudCBhY3RpdmF0ZWQgaGFuZGxlJ3MgaW5kZXggT05MWSBmb3IgcmFuZ2U9dHJ1ZVxuICB0cmFjazogeyBvZmZzZXQ6IG51bGwgfCBudW1iZXI7IGxlbmd0aDogbnVsbCB8IG51bWJlciB9ID0geyBvZmZzZXQ6IG51bGwsIGxlbmd0aDogbnVsbCB9OyAvLyBUcmFjaydzIG9mZnNldCBhbmQgbGVuZ3RoXG4gIGhhbmRsZXM6IE56U2xpZGVySGFuZGxlcltdID0gW107IC8vIEhhbmRsZXMnIG9mZnNldFxuICBtYXJrc0FycmF5OiBOekV4dGVuZGVkTWFya1tdIHwgbnVsbCA9IG51bGw7IC8vIFwic3RlcHNcIiBpbiBhcnJheSB0eXBlIHdpdGggbW9yZSBkYXRhICYgRklMVEVSIG91dCB0aGUgaW52YWxpZCBtYXJrXG4gIGJvdW5kczogeyBsb3dlcjogTnpTbGlkZXJWYWx1ZSB8IG51bGw7IHVwcGVyOiBOelNsaWRlclZhbHVlIHwgbnVsbCB9ID0geyBsb3dlcjogbnVsbCwgdXBwZXI6IG51bGwgfTsgLy8gbm93IGZvciBuei1zbGlkZXItc3RlcFxuXG4gIHByaXZhdGUgZHJhZ1N0YXJ0JD86IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgcHJpdmF0ZSBkcmFnTW92ZSQ/OiBPYnNlcnZhYmxlPG51bWJlcj47XG4gIHByaXZhdGUgZHJhZ0VuZCQ/OiBPYnNlcnZhYmxlPEV2ZW50PjtcbiAgcHJpdmF0ZSBkcmFnU3RhcnRfPzogU3Vic2NyaXB0aW9uIHwgbnVsbDtcbiAgcHJpdmF0ZSBkcmFnTW92ZV8/OiBTdWJzY3JpcHRpb24gfCBudWxsO1xuICBwcml2YXRlIGRyYWdFbmRfPzogU3Vic2NyaXB0aW9uIHwgbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNsaWRlclNlcnZpY2U6IE56U2xpZGVyU2VydmljZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZXMgPSBnZW5lcmF0ZUhhbmRsZXJzKHRoaXMubnpSYW5nZSA/IDIgOiAxKTtcbiAgICB0aGlzLm1hcmtzQXJyYXkgPSB0aGlzLm56TWFya3MgPyB0aGlzLmdlbmVyYXRlTWFya0l0ZW1zKHRoaXMubnpNYXJrcykgOiBudWxsO1xuICAgIHRoaXMuYmluZERyYWdnaW5nSGFuZGxlcnMoKTtcbiAgICB0aGlzLnRvZ2dsZURyYWdEaXNhYmxlZCh0aGlzLm56RGlzYWJsZWQpO1xuXG4gICAgaWYgKHRoaXMuZ2V0VmFsdWUoKSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKG51bGwpKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuekRpc2FibGVkLCBuek1hcmtzLCBuelJhbmdlIH0gPSBjaGFuZ2VzO1xuXG4gICAgaWYgKG56RGlzYWJsZWQgJiYgIW56RGlzYWJsZWQuZmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMudG9nZ2xlRHJhZ0Rpc2FibGVkKG56RGlzYWJsZWQuY3VycmVudFZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKG56TWFya3MgJiYgIW56TWFya3MuZmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMubWFya3NBcnJheSA9IHRoaXMubnpNYXJrcyA/IHRoaXMuZ2VuZXJhdGVNYXJrSXRlbXModGhpcy5uek1hcmtzKSA6IG51bGw7XG4gICAgfSBlbHNlIGlmIChuelJhbmdlICYmICFuelJhbmdlLmZpcnN0Q2hhbmdlKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuZm9ybWF0VmFsdWUobnVsbCkpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudW5zdWJzY3JpYmVEcmFnKCk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbDogTnpTbGlkZXJWYWx1ZSB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbCwgdHJ1ZSk7XG4gIH1cblxuICBvblZhbHVlQ2hhbmdlKF92YWx1ZTogTnpTbGlkZXJWYWx1ZSk6IHZvaWQge31cblxuICBvblRvdWNoZWQoKTogdm9pZCB7fVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogTnpTbGlkZXJWYWx1ZSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25WYWx1ZUNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLnRvZ2dsZURyYWdEaXNhYmxlZChpc0Rpc2FibGVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudCBoYW5kbGVyIGlzIG9ubHkgdHJpZ2dlcmVkIHdoZW4gYSBzbGlkZXIgaGFuZGxlciBpcyBmb2N1c2VkLlxuICAgKi9cbiAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjb2RlID0gZS5rZXlDb2RlO1xuICAgIGNvbnN0IGlzSW5jcmVhc2UgPSBjb2RlID09PSBSSUdIVF9BUlJPVyB8fCBjb2RlID09PSBVUF9BUlJPVztcbiAgICBjb25zdCBpc0RlY3JlYXNlID0gY29kZSA9PT0gTEVGVF9BUlJPVyB8fCBjb2RlID09PSBET1dOX0FSUk9XO1xuXG4gICAgaWYgKCEoaXNJbmNyZWFzZSB8fCBpc0RlY3JlYXNlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHN0ZXAgPSAoaXNEZWNyZWFzZSA/IC10aGlzLm56U3RlcCA6IHRoaXMubnpTdGVwKSAqICh0aGlzLm56UmV2ZXJzZSA/IC0xIDogMSk7XG4gICAgY29uc3QgbmV3VmFsID0gdGhpcy5uelJhbmdlID8gKHRoaXMudmFsdWUgYXMgbnVtYmVyW10pW3RoaXMuYWN0aXZlVmFsdWVJbmRleCFdICsgc3RlcCA6ICh0aGlzLnZhbHVlIGFzIG51bWJlcikgKyBzdGVwO1xuICAgIHRoaXMuc2V0QWN0aXZlVmFsdWUoZW5zdXJlTnVtYmVySW5SYW5nZShuZXdWYWwsIHRoaXMubnpNaW4sIHRoaXMubnpNYXgpKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0VmFsdWUodmFsdWU6IE56U2xpZGVyVmFsdWUgfCBudWxsLCBpc1dyaXRlVmFsdWU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGlmIChpc1dyaXRlVmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmZvcm1hdFZhbHVlKHZhbHVlKTtcbiAgICAgIHRoaXMudXBkYXRlVHJhY2tBbmRIYW5kbGVzKCk7XG4gICAgfSBlbHNlIGlmICghdmFsdWVzRXF1YWwodGhpcy52YWx1ZSEsIHZhbHVlISkpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMudXBkYXRlVHJhY2tBbmRIYW5kbGVzKCk7XG4gICAgICB0aGlzLm9uVmFsdWVDaGFuZ2UodGhpcy5nZXRWYWx1ZSh0cnVlKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRWYWx1ZShjbG9uZUFuZFNvcnQ6IGJvb2xlYW4gPSBmYWxzZSk6IE56U2xpZGVyVmFsdWUge1xuICAgIGlmIChjbG9uZUFuZFNvcnQgJiYgdGhpcy52YWx1ZSAmJiBpc1ZhbHVlUmFuZ2UodGhpcy52YWx1ZSkpIHtcbiAgICAgIHJldHVybiBbLi4udGhpcy52YWx1ZV0uc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy52YWx1ZSE7XG4gIH1cblxuICAvKipcbiAgICogQ2xvbmUgJiBzb3J0IGN1cnJlbnQgdmFsdWUgYW5kIGNvbnZlcnQgdGhlbSB0byBvZmZzZXRzLCB0aGVuIHJldHVybiB0aGUgbmV3IG9uZS5cbiAgICovXG4gIHByaXZhdGUgZ2V0VmFsdWVUb09mZnNldCh2YWx1ZT86IE56U2xpZGVyVmFsdWUpOiBOelNsaWRlclZhbHVlIHtcbiAgICBsZXQgbm9ybWFsaXplZFZhbHVlID0gdmFsdWU7XG5cbiAgICBpZiAodHlwZW9mIG5vcm1hbGl6ZWRWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG5vcm1hbGl6ZWRWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUodHJ1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzVmFsdWVSYW5nZShub3JtYWxpemVkVmFsdWUpID8gbm9ybWFsaXplZFZhbHVlLm1hcCh2YWwgPT4gdGhpcy52YWx1ZVRvT2Zmc2V0KHZhbCkpIDogdGhpcy52YWx1ZVRvT2Zmc2V0KG5vcm1hbGl6ZWRWYWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCB0aGUgY2xvc2VzdCB2YWx1ZSB0byBiZSBhY3RpdmF0ZWQuXG4gICAqL1xuICBwcml2YXRlIHNldEFjdGl2ZVZhbHVlSW5kZXgocG9pbnRlclZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICBpZiAoaXNWYWx1ZVJhbmdlKHZhbHVlKSkge1xuICAgICAgbGV0IG1pbmltYWw6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICAgICAgbGV0IGdhcDogbnVtYmVyO1xuICAgICAgbGV0IGFjdGl2ZUluZGV4ID0gLTE7XG4gICAgICB2YWx1ZS5mb3JFYWNoKCh2YWwsIGluZGV4KSA9PiB7XG4gICAgICAgIGdhcCA9IE1hdGguYWJzKHBvaW50ZXJWYWx1ZSAtIHZhbCk7XG4gICAgICAgIGlmIChtaW5pbWFsID09PSBudWxsIHx8IGdhcCA8IG1pbmltYWwhKSB7XG4gICAgICAgICAgbWluaW1hbCA9IGdhcDtcbiAgICAgICAgICBhY3RpdmVJbmRleCA9IGluZGV4O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYWN0aXZlVmFsdWVJbmRleCA9IGFjdGl2ZUluZGV4O1xuICAgICAgdGhpcy5oYW5kbGVyQ29tcG9uZW50cy50b0FycmF5KClbYWN0aXZlSW5kZXhdLmZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFuZGxlckNvbXBvbmVudHMudG9BcnJheSgpWzBdLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRBY3RpdmVWYWx1ZShwb2ludGVyVmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChpc1ZhbHVlUmFuZ2UodGhpcy52YWx1ZSEpKSB7XG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IFsuLi4odGhpcy52YWx1ZSBhcyBudW1iZXJbXSldO1xuICAgICAgbmV3VmFsdWVbdGhpcy5hY3RpdmVWYWx1ZUluZGV4IV0gPSBwb2ludGVyVmFsdWU7XG4gICAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRWYWx1ZShwb2ludGVyVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdHJhY2sgYW5kIGhhbmRsZXMnIHBvc2l0aW9uIGFuZCBsZW5ndGguXG4gICAqL1xuICBwcml2YXRlIHVwZGF0ZVRyYWNrQW5kSGFuZGxlcygpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLmdldFZhbHVlVG9PZmZzZXQodmFsdWUpO1xuICAgIGNvbnN0IHZhbHVlU29ydGVkID0gdGhpcy5nZXRWYWx1ZSh0cnVlKTtcbiAgICBjb25zdCBvZmZzZXRTb3J0ZWQgPSB0aGlzLmdldFZhbHVlVG9PZmZzZXQodmFsdWVTb3J0ZWQpO1xuICAgIGNvbnN0IGJvdW5kUGFydHMgPSBpc1ZhbHVlUmFuZ2UodmFsdWVTb3J0ZWQpID8gdmFsdWVTb3J0ZWQgOiBbMCwgdmFsdWVTb3J0ZWRdO1xuICAgIGNvbnN0IHRyYWNrUGFydHMgPSBpc1ZhbHVlUmFuZ2Uob2Zmc2V0U29ydGVkKSA/IFtvZmZzZXRTb3J0ZWRbMF0sIG9mZnNldFNvcnRlZFsxXSAtIG9mZnNldFNvcnRlZFswXV0gOiBbMCwgb2Zmc2V0U29ydGVkXTtcblxuICAgIHRoaXMuaGFuZGxlcy5mb3JFYWNoKChoYW5kbGUsIGluZGV4KSA9PiB7XG4gICAgICBoYW5kbGUub2Zmc2V0ID0gaXNWYWx1ZVJhbmdlKG9mZnNldCkgPyBvZmZzZXRbaW5kZXhdIDogb2Zmc2V0O1xuICAgICAgaGFuZGxlLnZhbHVlID0gaXNWYWx1ZVJhbmdlKHZhbHVlKSA/IHZhbHVlW2luZGV4XSA6IHZhbHVlIHx8IDA7XG4gICAgfSk7XG5cbiAgICBbdGhpcy5ib3VuZHMubG93ZXIsIHRoaXMuYm91bmRzLnVwcGVyXSA9IGJvdW5kUGFydHM7XG4gICAgW3RoaXMudHJhY2sub2Zmc2V0LCB0aGlzLnRyYWNrLmxlbmd0aF0gPSB0cmFja1BhcnRzO1xuXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIG9uRHJhZ1N0YXJ0KHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnRvZ2dsZURyYWdNb3ZpbmcodHJ1ZSk7XG4gICAgdGhpcy5jYWNoZVNsaWRlclByb3BlcnR5KCk7XG4gICAgdGhpcy5zZXRBY3RpdmVWYWx1ZUluZGV4KHRoaXMuZ2V0TG9naWNhbFZhbHVlKHZhbHVlKSk7XG4gICAgdGhpcy5zZXRBY3RpdmVWYWx1ZSh0aGlzLmdldExvZ2ljYWxWYWx1ZSh2YWx1ZSkpO1xuICAgIHRoaXMuc2hvd0hhbmRsZVRvb2x0aXAodGhpcy5uelJhbmdlID8gdGhpcy5hY3RpdmVWYWx1ZUluZGV4IDogMCk7XG4gIH1cblxuICBwcml2YXRlIG9uRHJhZ01vdmUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2V0QWN0aXZlVmFsdWUodGhpcy5nZXRMb2dpY2FsVmFsdWUodmFsdWUpKTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TG9naWNhbFZhbHVlKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm56UmV2ZXJzZSA/IHRoaXMubnpNYXggLSB2YWx1ZSA6IHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkRyYWdFbmQoKTogdm9pZCB7XG4gICAgdGhpcy5uek9uQWZ0ZXJDaGFuZ2UuZW1pdCh0aGlzLmdldFZhbHVlKHRydWUpKTtcbiAgICB0aGlzLnRvZ2dsZURyYWdNb3ZpbmcoZmFsc2UpO1xuICAgIHRoaXMuY2FjaGVTbGlkZXJQcm9wZXJ0eSh0cnVlKTtcbiAgICB0aGlzLmhpZGVBbGxIYW5kbGVUb29sdGlwKCk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHVzZXIgaW50ZXJhY3Rpb25zIGhhbmRsZXMuXG4gICAqL1xuICBwcml2YXRlIGJpbmREcmFnZ2luZ0hhbmRsZXJzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzbGlkZXJET00gPSB0aGlzLnNsaWRlci5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IG9yaWVudEZpZWxkID0gdGhpcy5uelZlcnRpY2FsID8gJ3BhZ2VZJyA6ICdwYWdlWCc7XG4gICAgY29uc3QgbW91c2U6IE1vdXNlVG91Y2hPYnNlcnZlckNvbmZpZyA9IHtcbiAgICAgIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgICAgIG1vdmU6ICdtb3VzZW1vdmUnLFxuICAgICAgZW5kOiAnbW91c2V1cCcsXG4gICAgICBwbHVja0tleTogW29yaWVudEZpZWxkXVxuICAgIH07XG4gICAgY29uc3QgdG91Y2g6IE1vdXNlVG91Y2hPYnNlcnZlckNvbmZpZyA9IHtcbiAgICAgIHN0YXJ0OiAndG91Y2hzdGFydCcsXG4gICAgICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgICAgIGVuZDogJ3RvdWNoZW5kJyxcbiAgICAgIHBsdWNrS2V5OiBbJ3RvdWNoZXMnLCAnMCcsIG9yaWVudEZpZWxkXSxcbiAgICAgIGZpbHRlcjogKGU6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiBlIGluc3RhbmNlb2YgVG91Y2hFdmVudFxuICAgIH07XG5cbiAgICBbbW91c2UsIHRvdWNoXS5mb3JFYWNoKHNvdXJjZSA9PiB7XG4gICAgICBjb25zdCB7IHN0YXJ0LCBtb3ZlLCBlbmQsIHBsdWNrS2V5LCBmaWx0ZXI6IGZpbHRlckZ1bmMgPSAoKSA9PiB0cnVlIH0gPSBzb3VyY2U7XG5cbiAgICAgIHNvdXJjZS5zdGFydFBsdWNrZWQkID0gZnJvbUV2ZW50KHNsaWRlckRPTSwgc3RhcnQpLnBpcGUoXG4gICAgICAgIGZpbHRlcihmaWx0ZXJGdW5jKSxcbiAgICAgICAgdGFwKHNpbGVudEV2ZW50KSxcbiAgICAgICAgcGx1Y2s8RXZlbnQsIG51bWJlcj4oLi4ucGx1Y2tLZXkpLFxuICAgICAgICBtYXAoKHBvc2l0aW9uOiBudW1iZXIpID0+IHRoaXMuZmluZENsb3Nlc3RWYWx1ZShwb3NpdGlvbikpXG4gICAgICApO1xuICAgICAgc291cmNlLmVuZCQgPSBmcm9tRXZlbnQoZG9jdW1lbnQsIGVuZCk7XG4gICAgICBzb3VyY2UubW92ZVJlc29sdmVkJCA9IGZyb21FdmVudChkb2N1bWVudCwgbW92ZSkucGlwZShcbiAgICAgICAgZmlsdGVyKGZpbHRlckZ1bmMpLFxuICAgICAgICB0YXAoc2lsZW50RXZlbnQpLFxuICAgICAgICBwbHVjazxFdmVudCwgbnVtYmVyPiguLi5wbHVja0tleSksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIG1hcCgocG9zaXRpb246IG51bWJlcikgPT4gdGhpcy5maW5kQ2xvc2VzdFZhbHVlKHBvc2l0aW9uKSksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIHRha2VVbnRpbChzb3VyY2UuZW5kJClcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRyYWdTdGFydCQgPSBtZXJnZShtb3VzZS5zdGFydFBsdWNrZWQkISwgdG91Y2guc3RhcnRQbHVja2VkJCEpO1xuICAgIHRoaXMuZHJhZ01vdmUkID0gbWVyZ2UobW91c2UubW92ZVJlc29sdmVkJCEsIHRvdWNoLm1vdmVSZXNvbHZlZCQhKTtcbiAgICB0aGlzLmRyYWdFbmQkID0gbWVyZ2UobW91c2UuZW5kJCEsIHRvdWNoLmVuZCQhKTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlRHJhZyhwZXJpb2RzOiBzdHJpbmdbXSA9IFsnc3RhcnQnLCAnbW92ZScsICdlbmQnXSk6IHZvaWQge1xuICAgIGlmIChwZXJpb2RzLmluZGV4T2YoJ3N0YXJ0JykgIT09IC0xICYmIHRoaXMuZHJhZ1N0YXJ0JCAmJiAhdGhpcy5kcmFnU3RhcnRfKSB7XG4gICAgICB0aGlzLmRyYWdTdGFydF8gPSB0aGlzLmRyYWdTdGFydCQuc3Vic2NyaWJlKHRoaXMub25EcmFnU3RhcnQuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignbW92ZScpICE9PSAtMSAmJiB0aGlzLmRyYWdNb3ZlJCAmJiAhdGhpcy5kcmFnTW92ZV8pIHtcbiAgICAgIHRoaXMuZHJhZ01vdmVfID0gdGhpcy5kcmFnTW92ZSQuc3Vic2NyaWJlKHRoaXMub25EcmFnTW92ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBpZiAocGVyaW9kcy5pbmRleE9mKCdlbmQnKSAhPT0gLTEgJiYgdGhpcy5kcmFnRW5kJCAmJiAhdGhpcy5kcmFnRW5kXykge1xuICAgICAgdGhpcy5kcmFnRW5kXyA9IHRoaXMuZHJhZ0VuZCQuc3Vic2NyaWJlKHRoaXMub25EcmFnRW5kLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdW5zdWJzY3JpYmVEcmFnKHBlcmlvZHM6IHN0cmluZ1tdID0gWydzdGFydCcsICdtb3ZlJywgJ2VuZCddKTogdm9pZCB7XG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignc3RhcnQnKSAhPT0gLTEgJiYgdGhpcy5kcmFnU3RhcnRfKSB7XG4gICAgICB0aGlzLmRyYWdTdGFydF8udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZHJhZ1N0YXJ0XyA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignbW92ZScpICE9PSAtMSAmJiB0aGlzLmRyYWdNb3ZlXykge1xuICAgICAgdGhpcy5kcmFnTW92ZV8udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZHJhZ01vdmVfID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAocGVyaW9kcy5pbmRleE9mKCdlbmQnKSAhPT0gLTEgJiYgdGhpcy5kcmFnRW5kXykge1xuICAgICAgdGhpcy5kcmFnRW5kXy51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5kcmFnRW5kXyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0b2dnbGVEcmFnTW92aW5nKG1vdmFibGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBwZXJpb2RzID0gWydtb3ZlJywgJ2VuZCddO1xuICAgIGlmIChtb3ZhYmxlKSB7XG4gICAgICB0aGlzLnNsaWRlclNlcnZpY2UuaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgICB0aGlzLnN1YnNjcmliZURyYWcocGVyaW9kcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2xpZGVyU2VydmljZS5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlRHJhZyhwZXJpb2RzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZURyYWdEaXNhYmxlZChkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZURyYWcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdWJzY3JpYmVEcmFnKFsnc3RhcnQnXSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaW5kQ2xvc2VzdFZhbHVlKHBvc2l0aW9uOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHNsaWRlclN0YXJ0ID0gdGhpcy5nZXRTbGlkZXJTdGFydFBvc2l0aW9uKCk7XG4gICAgY29uc3Qgc2xpZGVyTGVuZ3RoID0gdGhpcy5nZXRTbGlkZXJMZW5ndGgoKTtcbiAgICBjb25zdCByYXRpbyA9IGVuc3VyZU51bWJlckluUmFuZ2UoKHBvc2l0aW9uIC0gc2xpZGVyU3RhcnQpIC8gc2xpZGVyTGVuZ3RoLCAwLCAxKTtcbiAgICBjb25zdCB2YWwgPSAodGhpcy5uek1heCAtIHRoaXMubnpNaW4pICogKHRoaXMubnpWZXJ0aWNhbCA/IDEgLSByYXRpbyA6IHJhdGlvKSArIHRoaXMubnpNaW47XG4gICAgY29uc3QgcG9pbnRzID0gdGhpcy5uek1hcmtzID09PSBudWxsID8gW10gOiBPYmplY3Qua2V5cyh0aGlzLm56TWFya3MpLm1hcChwYXJzZUZsb2F0KTtcbiAgICBpZiAodGhpcy5uelN0ZXAgIT09IDAgJiYgIXRoaXMubnpEb3RzKSB7XG4gICAgICBjb25zdCBjbG9zZXN0T25lID0gTWF0aC5yb3VuZCh2YWwgLyB0aGlzLm56U3RlcCkgKiB0aGlzLm56U3RlcDtcbiAgICAgIHBvaW50cy5wdXNoKGNsb3Nlc3RPbmUpO1xuICAgIH1cbiAgICBjb25zdCBnYXBzID0gcG9pbnRzLm1hcChwb2ludCA9PiBNYXRoLmFicyh2YWwgLSBwb2ludCkpO1xuICAgIGNvbnN0IGNsb3Nlc3QgPSBwb2ludHNbZ2Fwcy5pbmRleE9mKE1hdGgubWluKC4uLmdhcHMpKV07XG5cbiAgICByZXR1cm4gdGhpcy5uelN0ZXAgPT09IG51bGwgPyBjbG9zZXN0IDogcGFyc2VGbG9hdChjbG9zZXN0LnRvRml4ZWQoZ2V0UHJlY2lzaW9uKHRoaXMubnpTdGVwKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSB2YWx1ZVRvT2Zmc2V0KHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBnZXRQZXJjZW50KHRoaXMubnpNaW4sIHRoaXMubnpNYXgsIHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2xpZGVyU3RhcnRQb3NpdGlvbigpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLmNhY2hlU2xpZGVyU3RhcnQgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhY2hlU2xpZGVyU3RhcnQ7XG4gICAgfVxuICAgIGNvbnN0IG9mZnNldCA9IGdldEVsZW1lbnRPZmZzZXQodGhpcy5zbGlkZXIubmF0aXZlRWxlbWVudCk7XG4gICAgcmV0dXJuIHRoaXMubnpWZXJ0aWNhbCA/IG9mZnNldC50b3AgOiBvZmZzZXQubGVmdDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2xpZGVyTGVuZ3RoKCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuY2FjaGVTbGlkZXJMZW5ndGggIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhY2hlU2xpZGVyTGVuZ3RoO1xuICAgIH1cbiAgICBjb25zdCBzbGlkZXJET00gPSB0aGlzLnNsaWRlci5uYXRpdmVFbGVtZW50O1xuICAgIHJldHVybiB0aGlzLm56VmVydGljYWwgPyBzbGlkZXJET00uY2xpZW50SGVpZ2h0IDogc2xpZGVyRE9NLmNsaWVudFdpZHRoO1xuICB9XG5cbiAgLyoqXG4gICAqIENhY2hlIERPTSBsYXlvdXQvcmVmbG93IG9wZXJhdGlvbnMgZm9yIHBlcmZvcm1hbmNlIChtYXkgbm90IG5lY2Vzc2FyeT8pXG4gICAqL1xuICBwcml2YXRlIGNhY2hlU2xpZGVyUHJvcGVydHkocmVtb3ZlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLmNhY2hlU2xpZGVyU3RhcnQgPSByZW1vdmUgPyBudWxsIDogdGhpcy5nZXRTbGlkZXJTdGFydFBvc2l0aW9uKCk7XG4gICAgdGhpcy5jYWNoZVNsaWRlckxlbmd0aCA9IHJlbW92ZSA/IG51bGwgOiB0aGlzLmdldFNsaWRlckxlbmd0aCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRWYWx1ZSh2YWx1ZTogTnpTbGlkZXJWYWx1ZSB8IG51bGwpOiBOelNsaWRlclZhbHVlIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5uelJhbmdlID8gW3RoaXMubnpNaW4sIHRoaXMubnpNYXhdIDogdGhpcy5uek1pbjtcbiAgICB9IGVsc2UgaWYgKGFzc2VydFZhbHVlVmFsaWQodmFsdWUsIHRoaXMubnpSYW5nZSkpIHtcbiAgICAgIHJldHVybiBpc1ZhbHVlUmFuZ2UodmFsdWUpXG4gICAgICAgID8gdmFsdWUubWFwKHZhbCA9PiBlbnN1cmVOdW1iZXJJblJhbmdlKHZhbCwgdGhpcy5uek1pbiwgdGhpcy5uek1heCkpXG4gICAgICAgIDogZW5zdXJlTnVtYmVySW5SYW5nZSh2YWx1ZSwgdGhpcy5uek1pbiwgdGhpcy5uek1heCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm56RGVmYXVsdFZhbHVlID8gdGhpcy5uekRlZmF1bHRWYWx1ZSA6IHRoaXMubnpSYW5nZSA/IFt0aGlzLm56TWluLCB0aGlzLm56TWF4XSA6IHRoaXMubnpNaW47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgb25lIGhhbmRsZSdzIHRvb2x0aXAgYW5kIGhpZGUgb3RoZXJzJy5cbiAgICovXG4gIHByaXZhdGUgc2hvd0hhbmRsZVRvb2x0aXAoaGFuZGxlSW5kZXg6IG51bWJlciA9IDApOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZXMuZm9yRWFjaCgoaGFuZGxlLCBpbmRleCkgPT4ge1xuICAgICAgaGFuZGxlLmFjdGl2ZSA9IGluZGV4ID09PSBoYW5kbGVJbmRleDtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaGlkZUFsbEhhbmRsZVRvb2x0aXAoKTogdm9pZCB7XG4gICAgdGhpcy5oYW5kbGVzLmZvckVhY2goaGFuZGxlID0+IChoYW5kbGUuYWN0aXZlID0gZmFsc2UpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVNYXJrSXRlbXMobWFya3M6IE56TWFya3MpOiBOekV4dGVuZGVkTWFya1tdIHwgbnVsbCB7XG4gICAgY29uc3QgbWFya3NBcnJheTogTnpFeHRlbmRlZE1hcmtbXSA9IFtdO1xuICAgIGZvciAoY29uc3Qga2V5IGluIG1hcmtzKSB7XG4gICAgICBjb25zdCBtYXJrID0gbWFya3Nba2V5XTtcbiAgICAgIGNvbnN0IHZhbCA9IHR5cGVvZiBrZXkgPT09ICdudW1iZXInID8ga2V5IDogcGFyc2VGbG9hdChrZXkpO1xuICAgICAgaWYgKHZhbCA+PSB0aGlzLm56TWluICYmIHZhbCA8PSB0aGlzLm56TWF4KSB7XG4gICAgICAgIG1hcmtzQXJyYXkucHVzaCh7IHZhbHVlOiB2YWwsIG9mZnNldDogdGhpcy52YWx1ZVRvT2Zmc2V0KHZhbCksIGNvbmZpZzogbWFyayB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1hcmtzQXJyYXkubGVuZ3RoID8gbWFya3NBcnJheSA6IG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVUeXBlTm90TWF0Y2hFcnJvcigpOiBFcnJvciB7XG4gIHJldHVybiBuZXcgRXJyb3IoXG4gICAgYFRoZSBcIm56UmFuZ2VcIiBjYW4ndCBtYXRjaCB0aGUgXCJuZ01vZGVsXCIncyB0eXBlLCBwbGVhc2UgY2hlY2sgdGhlc2UgcHJvcGVydGllczogXCJuelJhbmdlXCIsIFwibmdNb2RlbFwiLCBcIm56RGVmYXVsdFZhbHVlXCIuYFxuICApO1xufVxuXG5mdW5jdGlvbiBpc1ZhbHVlUmFuZ2UodmFsdWU6IE56U2xpZGVyVmFsdWUpOiB2YWx1ZSBpcyBudW1iZXJbXSB7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVIYW5kbGVycyhhbW91bnQ6IG51bWJlcik6IE56U2xpZGVySGFuZGxlcltdIHtcbiAgcmV0dXJuIEFycmF5KGFtb3VudClcbiAgICAuZmlsbCgwKVxuICAgIC5tYXAoKCkgPT4gKHsgb2Zmc2V0OiBudWxsLCB2YWx1ZTogbnVsbCwgYWN0aXZlOiBmYWxzZSB9KSk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdmFsdWUgaXMgdmFsaWQgYW5kIHRocm93IGVycm9yIGlmIHZhbHVlLXR5cGUvcmFuZ2Ugbm90IG1hdGNoLlxuICovXG5mdW5jdGlvbiBhc3NlcnRWYWx1ZVZhbGlkKHZhbHVlOiBOelNsaWRlclZhbHVlLCBpc1JhbmdlPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICBpZiAoKCFpc1ZhbHVlUmFuZ2UodmFsdWUpICYmIGlzTmFOKHZhbHVlKSkgfHwgKGlzVmFsdWVSYW5nZSh2YWx1ZSkgJiYgdmFsdWUuc29tZSh2ID0+IGlzTmFOKHYpKSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGFzc2VydFZhbHVlVHlwZU1hdGNoKHZhbHVlLCBpc1JhbmdlKTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCBpZiBgdGhpcy5uelJhbmdlYCBpcyBgdHJ1ZWAsIHZhbHVlIGlzIGFsc28gYSByYW5nZSwgdmljZSB2ZXJzYS5cbiAqL1xuZnVuY3Rpb24gYXNzZXJ0VmFsdWVUeXBlTWF0Y2godmFsdWU6IE56U2xpZGVyVmFsdWUsIGlzUmFuZ2U6IGJvb2xlYW4gPSBmYWxzZSk6IGJvb2xlYW4ge1xuICBpZiAoaXNWYWx1ZVJhbmdlKHZhbHVlKSAhPT0gaXNSYW5nZSkge1xuICAgIHRocm93IGdldFZhbHVlVHlwZU5vdE1hdGNoRXJyb3IoKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gdmFsdWVzRXF1YWwodmFsQTogTnpTbGlkZXJWYWx1ZSwgdmFsQjogTnpTbGlkZXJWYWx1ZSk6IGJvb2xlYW4ge1xuICBpZiAodHlwZW9mIHZhbEEgIT09IHR5cGVvZiB2YWxCKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBpc1ZhbHVlUmFuZ2UodmFsQSkgJiYgaXNWYWx1ZVJhbmdlKHZhbEIpID8gYXJyYXlzRXF1YWw8bnVtYmVyPih2YWxBLCB2YWxCKSA6IHZhbEEgPT09IHZhbEI7XG59XG4iXX0=