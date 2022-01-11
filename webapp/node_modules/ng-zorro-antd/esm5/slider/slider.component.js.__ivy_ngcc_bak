/**
 * @fileoverview added by tsickle
 * Generated from: slider.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __read, __spread } from "tslib";
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
var NzSliderComponent = /** @class */ (function () {
    function NzSliderComponent(sliderService, cdr, platform) {
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
    NzSliderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.handles = generateHandlers(this.nzRange ? 2 : 1);
        this.marksArray = this.nzMarks ? this.generateMarkItems(this.nzMarks) : null;
        this.bindDraggingHandlers();
        this.toggleDragDisabled(this.nzDisabled);
        if (this.getValue() === null) {
            this.setValue(this.formatValue(null));
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSliderComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzDisabled = changes.nzDisabled, nzMarks = changes.nzMarks, nzRange = changes.nzRange;
        if (nzDisabled && !nzDisabled.firstChange) {
            this.toggleDragDisabled(nzDisabled.currentValue);
        }
        else if (nzMarks && !nzMarks.firstChange) {
            this.marksArray = this.nzMarks ? this.generateMarkItems(this.nzMarks) : null;
        }
        else if (nzRange && !nzRange.firstChange) {
            this.setValue(this.formatValue(null));
        }
    };
    /**
     * @return {?}
     */
    NzSliderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribeDrag();
    };
    /**
     * @param {?} val
     * @return {?}
     */
    NzSliderComponent.prototype.writeValue = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.setValue(val, true);
    };
    /**
     * @param {?} _value
     * @return {?}
     */
    NzSliderComponent.prototype.onValueChange = /**
     * @param {?} _value
     * @return {?}
     */
    function (_value) { };
    /**
     * @return {?}
     */
    NzSliderComponent.prototype.onTouched = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzSliderComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onValueChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzSliderComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzSliderComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.toggleDragDisabled(isDisabled);
    };
    /**
     * Event handler is only triggered when a slider handler is focused.
     */
    /**
     * Event handler is only triggered when a slider handler is focused.
     * @param {?} e
     * @return {?}
     */
    NzSliderComponent.prototype.onKeyDown = /**
     * Event handler is only triggered when a slider handler is focused.
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var code = e.keyCode;
        /** @type {?} */
        var isIncrease = code === RIGHT_ARROW || code === UP_ARROW;
        /** @type {?} */
        var isDecrease = code === LEFT_ARROW || code === DOWN_ARROW;
        if (!(isIncrease || isDecrease)) {
            return;
        }
        e.preventDefault();
        /** @type {?} */
        var step = (isDecrease ? -this.nzStep : this.nzStep) * (this.nzReverse ? -1 : 1);
        /** @type {?} */
        var newVal = this.nzRange ? ((/** @type {?} */ (this.value)))[(/** @type {?} */ (this.activeValueIndex))] + step : ((/** @type {?} */ (this.value))) + step;
        this.setActiveValue(ensureNumberInRange(newVal, this.nzMin, this.nzMax));
    };
    /**
     * @private
     * @param {?} value
     * @param {?=} isWriteValue
     * @return {?}
     */
    NzSliderComponent.prototype.setValue = /**
     * @private
     * @param {?} value
     * @param {?=} isWriteValue
     * @return {?}
     */
    function (value, isWriteValue) {
        if (isWriteValue === void 0) { isWriteValue = false; }
        if (isWriteValue) {
            this.value = this.formatValue(value);
            this.updateTrackAndHandles();
        }
        else if (!valuesEqual((/** @type {?} */ (this.value)), (/** @type {?} */ (value)))) {
            this.value = value;
            this.updateTrackAndHandles();
            this.onValueChange(this.getValue(true));
        }
    };
    /**
     * @private
     * @param {?=} cloneAndSort
     * @return {?}
     */
    NzSliderComponent.prototype.getValue = /**
     * @private
     * @param {?=} cloneAndSort
     * @return {?}
     */
    function (cloneAndSort) {
        if (cloneAndSort === void 0) { cloneAndSort = false; }
        if (cloneAndSort && this.value && isValueRange(this.value)) {
            return __spread(this.value).sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return a - b; }));
        }
        return (/** @type {?} */ (this.value));
    };
    /**
     * Clone & sort current value and convert them to offsets, then return the new one.
     */
    /**
     * Clone & sort current value and convert them to offsets, then return the new one.
     * @private
     * @param {?=} value
     * @return {?}
     */
    NzSliderComponent.prototype.getValueToOffset = /**
     * Clone & sort current value and convert them to offsets, then return the new one.
     * @private
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        /** @type {?} */
        var normalizedValue = value;
        if (typeof normalizedValue === 'undefined') {
            normalizedValue = this.getValue(true);
        }
        return isValueRange(normalizedValue) ? normalizedValue.map((/**
         * @param {?} val
         * @return {?}
         */
        function (val) { return _this.valueToOffset(val); })) : this.valueToOffset(normalizedValue);
    };
    /**
     * Find the closest value to be activated.
     */
    /**
     * Find the closest value to be activated.
     * @private
     * @param {?} pointerValue
     * @return {?}
     */
    NzSliderComponent.prototype.setActiveValueIndex = /**
     * Find the closest value to be activated.
     * @private
     * @param {?} pointerValue
     * @return {?}
     */
    function (pointerValue) {
        /** @type {?} */
        var value = this.getValue();
        if (isValueRange(value)) {
            /** @type {?} */
            var minimal_1 = null;
            /** @type {?} */
            var gap_1;
            /** @type {?} */
            var activeIndex_1 = -1;
            value.forEach((/**
             * @param {?} val
             * @param {?} index
             * @return {?}
             */
            function (val, index) {
                gap_1 = Math.abs(pointerValue - val);
                if (minimal_1 === null || gap_1 < (/** @type {?} */ (minimal_1))) {
                    minimal_1 = gap_1;
                    activeIndex_1 = index;
                }
            }));
            this.activeValueIndex = activeIndex_1;
            this.handlerComponents.toArray()[activeIndex_1].focus();
        }
        else {
            this.handlerComponents.toArray()[0].focus();
        }
    };
    /**
     * @private
     * @param {?} pointerValue
     * @return {?}
     */
    NzSliderComponent.prototype.setActiveValue = /**
     * @private
     * @param {?} pointerValue
     * @return {?}
     */
    function (pointerValue) {
        if (isValueRange((/** @type {?} */ (this.value)))) {
            /** @type {?} */
            var newValue = __spread(((/** @type {?} */ (this.value))));
            newValue[(/** @type {?} */ (this.activeValueIndex))] = pointerValue;
            this.setValue(newValue);
        }
        else {
            this.setValue(pointerValue);
        }
    };
    /**
     * Update track and handles' position and length.
     */
    /**
     * Update track and handles' position and length.
     * @private
     * @return {?}
     */
    NzSliderComponent.prototype.updateTrackAndHandles = /**
     * Update track and handles' position and length.
     * @private
     * @return {?}
     */
    function () {
        var _a, _b;
        /** @type {?} */
        var value = this.getValue();
        /** @type {?} */
        var offset = this.getValueToOffset(value);
        /** @type {?} */
        var valueSorted = this.getValue(true);
        /** @type {?} */
        var offsetSorted = this.getValueToOffset(valueSorted);
        /** @type {?} */
        var boundParts = isValueRange(valueSorted) ? valueSorted : [0, valueSorted];
        /** @type {?} */
        var trackParts = isValueRange(offsetSorted) ? [offsetSorted[0], offsetSorted[1] - offsetSorted[0]] : [0, offsetSorted];
        this.handles.forEach((/**
         * @param {?} handle
         * @param {?} index
         * @return {?}
         */
        function (handle, index) {
            handle.offset = isValueRange(offset) ? offset[index] : offset;
            handle.value = isValueRange(value) ? value[index] : value || 0;
        }));
        _a = __read(boundParts, 2), this.bounds.lower = _a[0], this.bounds.upper = _a[1];
        _b = __read(trackParts, 2), this.track.offset = _b[0], this.track.length = _b[1];
        this.cdr.markForCheck();
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    NzSliderComponent.prototype.onDragStart = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.toggleDragMoving(true);
        this.cacheSliderProperty();
        this.setActiveValueIndex(this.getLogicalValue(value));
        this.setActiveValue(this.getLogicalValue(value));
        this.showHandleTooltip(this.nzRange ? this.activeValueIndex : 0);
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    NzSliderComponent.prototype.onDragMove = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.setActiveValue(this.getLogicalValue(value));
        this.cdr.markForCheck();
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    NzSliderComponent.prototype.getLogicalValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.nzReverse ? this.nzMax - value : value;
    };
    /**
     * @private
     * @return {?}
     */
    NzSliderComponent.prototype.onDragEnd = /**
     * @private
     * @return {?}
     */
    function () {
        this.nzOnAfterChange.emit(this.getValue(true));
        this.toggleDragMoving(false);
        this.cacheSliderProperty(true);
        this.hideAllHandleTooltip();
        this.cdr.markForCheck();
    };
    /**
     * Create user interactions handles.
     */
    /**
     * Create user interactions handles.
     * @private
     * @return {?}
     */
    NzSliderComponent.prototype.bindDraggingHandlers = /**
     * Create user interactions handles.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.platform.isBrowser) {
            return;
        }
        /** @type {?} */
        var sliderDOM = this.slider.nativeElement;
        /** @type {?} */
        var orientField = this.nzVertical ? 'pageY' : 'pageX';
        /** @type {?} */
        var mouse = {
            start: 'mousedown',
            move: 'mousemove',
            end: 'mouseup',
            pluckKey: [orientField]
        };
        /** @type {?} */
        var touch = {
            start: 'touchstart',
            move: 'touchmove',
            end: 'touchend',
            pluckKey: ['touches', '0', orientField],
            filter: (/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return e instanceof TouchEvent; })
        };
        [mouse, touch].forEach((/**
         * @param {?} source
         * @return {?}
         */
        function (source) {
            var start = source.start, move = source.move, end = source.end, pluckKey = source.pluckKey, _a = source.filter, filterFunc = _a === void 0 ? (/**
             * @return {?}
             */
            function () { return true; }) : _a;
            source.startPlucked$ = fromEvent(sliderDOM, start).pipe(filter(filterFunc), tap(silentEvent), pluck.apply(void 0, __spread(pluckKey)), map((/**
             * @param {?} position
             * @return {?}
             */
            function (position) { return _this.findClosestValue(position); })));
            source.end$ = fromEvent(document, end);
            source.moveResolved$ = fromEvent(document, move).pipe(filter(filterFunc), tap(silentEvent), pluck.apply(void 0, __spread(pluckKey)), distinctUntilChanged(), map((/**
             * @param {?} position
             * @return {?}
             */
            function (position) { return _this.findClosestValue(position); })), distinctUntilChanged(), takeUntil(source.end$));
        }));
        this.dragStart$ = merge((/** @type {?} */ (mouse.startPlucked$)), (/** @type {?} */ (touch.startPlucked$)));
        this.dragMove$ = merge((/** @type {?} */ (mouse.moveResolved$)), (/** @type {?} */ (touch.moveResolved$)));
        this.dragEnd$ = merge((/** @type {?} */ (mouse.end$)), (/** @type {?} */ (touch.end$)));
    };
    /**
     * @private
     * @param {?=} periods
     * @return {?}
     */
    NzSliderComponent.prototype.subscribeDrag = /**
     * @private
     * @param {?=} periods
     * @return {?}
     */
    function (periods) {
        if (periods === void 0) { periods = ['start', 'move', 'end']; }
        if (periods.indexOf('start') !== -1 && this.dragStart$ && !this.dragStart_) {
            this.dragStart_ = this.dragStart$.subscribe(this.onDragStart.bind(this));
        }
        if (periods.indexOf('move') !== -1 && this.dragMove$ && !this.dragMove_) {
            this.dragMove_ = this.dragMove$.subscribe(this.onDragMove.bind(this));
        }
        if (periods.indexOf('end') !== -1 && this.dragEnd$ && !this.dragEnd_) {
            this.dragEnd_ = this.dragEnd$.subscribe(this.onDragEnd.bind(this));
        }
    };
    /**
     * @private
     * @param {?=} periods
     * @return {?}
     */
    NzSliderComponent.prototype.unsubscribeDrag = /**
     * @private
     * @param {?=} periods
     * @return {?}
     */
    function (periods) {
        if (periods === void 0) { periods = ['start', 'move', 'end']; }
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
    };
    /**
     * @private
     * @param {?} movable
     * @return {?}
     */
    NzSliderComponent.prototype.toggleDragMoving = /**
     * @private
     * @param {?} movable
     * @return {?}
     */
    function (movable) {
        /** @type {?} */
        var periods = ['move', 'end'];
        if (movable) {
            this.sliderService.isDragging = true;
            this.subscribeDrag(periods);
        }
        else {
            this.sliderService.isDragging = false;
            this.unsubscribeDrag(periods);
        }
    };
    /**
     * @private
     * @param {?} disabled
     * @return {?}
     */
    NzSliderComponent.prototype.toggleDragDisabled = /**
     * @private
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        if (disabled) {
            this.unsubscribeDrag();
        }
        else {
            this.subscribeDrag(['start']);
        }
    };
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    NzSliderComponent.prototype.findClosestValue = /**
     * @private
     * @param {?} position
     * @return {?}
     */
    function (position) {
        /** @type {?} */
        var sliderStart = this.getSliderStartPosition();
        /** @type {?} */
        var sliderLength = this.getSliderLength();
        /** @type {?} */
        var ratio = ensureNumberInRange((position - sliderStart) / sliderLength, 0, 1);
        /** @type {?} */
        var val = (this.nzMax - this.nzMin) * (this.nzVertical ? 1 - ratio : ratio) + this.nzMin;
        /** @type {?} */
        var points = this.nzMarks === null ? [] : Object.keys(this.nzMarks).map(parseFloat);
        if (this.nzStep !== 0 && !this.nzDots) {
            /** @type {?} */
            var closestOne = Math.round(val / this.nzStep) * this.nzStep;
            points.push(closestOne);
        }
        /** @type {?} */
        var gaps = points.map((/**
         * @param {?} point
         * @return {?}
         */
        function (point) { return Math.abs(val - point); }));
        /** @type {?} */
        var closest = points[gaps.indexOf(Math.min.apply(Math, __spread(gaps)))];
        return this.nzStep === null ? closest : parseFloat(closest.toFixed(getPrecision(this.nzStep)));
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    NzSliderComponent.prototype.valueToOffset = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return getPercent(this.nzMin, this.nzMax, value);
    };
    /**
     * @private
     * @return {?}
     */
    NzSliderComponent.prototype.getSliderStartPosition = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.cacheSliderStart !== null) {
            return this.cacheSliderStart;
        }
        /** @type {?} */
        var offset = getElementOffset(this.slider.nativeElement);
        return this.nzVertical ? offset.top : offset.left;
    };
    /**
     * @private
     * @return {?}
     */
    NzSliderComponent.prototype.getSliderLength = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.cacheSliderLength !== null) {
            return this.cacheSliderLength;
        }
        /** @type {?} */
        var sliderDOM = this.slider.nativeElement;
        return this.nzVertical ? sliderDOM.clientHeight : sliderDOM.clientWidth;
    };
    /**
     * Cache DOM layout/reflow operations for performance (may not necessary?)
     */
    /**
     * Cache DOM layout/reflow operations for performance (may not necessary?)
     * @private
     * @param {?=} remove
     * @return {?}
     */
    NzSliderComponent.prototype.cacheSliderProperty = /**
     * Cache DOM layout/reflow operations for performance (may not necessary?)
     * @private
     * @param {?=} remove
     * @return {?}
     */
    function (remove) {
        if (remove === void 0) { remove = false; }
        this.cacheSliderStart = remove ? null : this.getSliderStartPosition();
        this.cacheSliderLength = remove ? null : this.getSliderLength();
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    NzSliderComponent.prototype.formatValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (!value) {
            return this.nzRange ? [this.nzMin, this.nzMax] : this.nzMin;
        }
        else if (assertValueValid(value, this.nzRange)) {
            return isValueRange(value)
                ? value.map((/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) { return ensureNumberInRange(val, _this.nzMin, _this.nzMax); }))
                : ensureNumberInRange(value, this.nzMin, this.nzMax);
        }
        else {
            return this.nzDefaultValue ? this.nzDefaultValue : this.nzRange ? [this.nzMin, this.nzMax] : this.nzMin;
        }
    };
    /**
     * Show one handle's tooltip and hide others'.
     */
    /**
     * Show one handle's tooltip and hide others'.
     * @private
     * @param {?=} handleIndex
     * @return {?}
     */
    NzSliderComponent.prototype.showHandleTooltip = /**
     * Show one handle's tooltip and hide others'.
     * @private
     * @param {?=} handleIndex
     * @return {?}
     */
    function (handleIndex) {
        if (handleIndex === void 0) { handleIndex = 0; }
        this.handles.forEach((/**
         * @param {?} handle
         * @param {?} index
         * @return {?}
         */
        function (handle, index) {
            handle.active = index === handleIndex;
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzSliderComponent.prototype.hideAllHandleTooltip = /**
     * @private
     * @return {?}
     */
    function () {
        this.handles.forEach((/**
         * @param {?} handle
         * @return {?}
         */
        function (handle) { return (handle.active = false); }));
    };
    /**
     * @private
     * @param {?} marks
     * @return {?}
     */
    NzSliderComponent.prototype.generateMarkItems = /**
     * @private
     * @param {?} marks
     * @return {?}
     */
    function (marks) {
        /** @type {?} */
        var marksArray = [];
        for (var key in marks) {
            /** @type {?} */
            var mark = marks[key];
            /** @type {?} */
            var val = typeof key === 'number' ? key : parseFloat(key);
            if (val >= this.nzMin && val <= this.nzMax) {
                marksArray.push({ value: val, offset: this.valueToOffset(val), config: mark });
            }
        }
        return marksArray.length ? marksArray : null;
    };
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
                            function () { return NzSliderComponent; })),
                            multi: true
                        },
                        NzSliderService
                    ],
                    host: {
                        '(keydown)': 'onKeyDown($event)'
                    },
                    template: "\n    <div\n      #slider\n      class=\"ant-slider\"\n      [class.ant-slider-disabled]=\"nzDisabled\"\n      [class.ant-slider-vertical]=\"nzVertical\"\n      [class.ant-slider-with-marks]=\"marksArray\"\n    >\n      <div class=\"ant-slider-rail\"></div>\n      <nz-slider-track\n        [vertical]=\"nzVertical\"\n        [included]=\"nzIncluded\"\n        [offset]=\"track.offset!\"\n        [length]=\"track.length!\"\n        [reverse]=\"nzReverse\"\n      ></nz-slider-track>\n      <nz-slider-step\n        *ngIf=\"marksArray\"\n        [vertical]=\"nzVertical\"\n        [lowerBound]=\"$any(bounds.lower)\"\n        [upperBound]=\"$any(bounds.upper)\"\n        [marksArray]=\"marksArray\"\n        [included]=\"nzIncluded\"\n      ></nz-slider-step>\n      <nz-slider-handle\n        *ngFor=\"let handle of handles\"\n        [vertical]=\"nzVertical\"\n        [reverse]=\"nzReverse\"\n        [offset]=\"handle.offset!\"\n        [value]=\"handle.value!\"\n        [active]=\"handle.active\"\n        [tooltipFormatter]=\"nzTipFormatter\"\n        [tooltipVisible]=\"nzTooltipVisible\"\n        [tooltipPlacement]=\"nzTooltipPlacement\"\n      ></nz-slider-handle>\n      <nz-slider-marks\n        *ngIf=\"marksArray\"\n        [vertical]=\"nzVertical\"\n        [min]=\"nzMin\"\n        [max]=\"nzMax\"\n        [lowerBound]=\"$any(bounds.lower)\"\n        [upperBound]=\"$any(bounds.upper)\"\n        [marksArray]=\"marksArray\"\n        [included]=\"nzIncluded\"\n      ></nz-slider-marks>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    NzSliderComponent.ctorParameters = function () { return [
        { type: NzSliderService },
        { type: ChangeDetectorRef },
        { type: Platform }
    ]; };
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
    return NzSliderComponent;
}());
export { NzSliderComponent };
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
    return new Error("The \"nzRange\" can't match the \"ngModel\"'s type, please check these properties: \"nzRange\", \"ngModel\", \"nzDefaultValue\".");
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
    function () { return ({ offset: null, value: null, active: false }); }));
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
    function (v) { return isNaN(v); })))) {
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
function assertValueTypeMatch(value, isRange) {
    if (isRange === void 0) { isRange = false; }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2xpZGVyLyIsInNvdXJjZXMiOlsic2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEVBRVQsU0FBUyxFQUNULFlBQVksRUFDWixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFDTCxXQUFXLEVBQ1gsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNoQixVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixXQUFXLEVBRVgsV0FBVyxFQUNaLE1BQU0seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sTUFBTSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBSW5EO0lBZ0hFLDJCQUFvQixhQUE4QixFQUFVLEdBQXNCLEVBQVUsUUFBa0I7UUFBMUYsa0JBQWEsR0FBYixhQUFhLENBQWlC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O0lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQVIsQ0FBUSxFQUFDLENBQUMsRUFBRTtRQUNoRyxPQUFPLEtBQUssQ0FBQztLQUNkO0lBQ0QsT0FBTyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDOUMsQ0FBQzs7Ozs7OztBQUtELFNBQVMsb0JBQW9CLENBQUMsS0FBb0IsRUFBRSxPQUF3QjtJQUF4Qix3QkFBQSxFQUFBLGVBQXdCO0lBQzFFLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLE9BQU8sRUFBRTtRQUNuQyxNQUFNLHlCQUF5QixFQUFFLENBQUM7S0FDbkM7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7OztBQUVELFNBQVMsV0FBVyxDQUFDLElBQW1CLEVBQUUsSUFBbUI7SUFDM0QsSUFBSSxPQUFPLElBQUksS0FBSyxPQUFPLElBQUksRUFBRTtRQUMvQixPQUFPLEtBQUssQ0FBQztLQUNkO0lBQ0QsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQVMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO0FBQ3BHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBET1dOX0FSUk9XLCBMRUZUX0FSUk9XLCBSSUdIVF9BUlJPVywgVVBfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDaGlsZHJlbixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE51bWJlcklucHV0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7XG4gIGFycmF5c0VxdWFsLFxuICBlbnN1cmVOdW1iZXJJblJhbmdlLFxuICBnZXRFbGVtZW50T2Zmc2V0LFxuICBnZXRQZXJjZW50LFxuICBnZXRQcmVjaXNpb24sXG4gIElucHV0Qm9vbGVhbixcbiAgSW5wdXROdW1iZXIsXG4gIE1vdXNlVG91Y2hPYnNlcnZlckNvbmZpZyxcbiAgc2lsZW50RXZlbnRcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHBsdWNrLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTnpTbGlkZXJIYW5kbGVDb21wb25lbnQgfSBmcm9tICcuL2hhbmRsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpTbGlkZXJTZXJ2aWNlIH0gZnJvbSAnLi9zbGlkZXIuc2VydmljZSc7XG5cbmltcG9ydCB7IE56RXh0ZW5kZWRNYXJrLCBOek1hcmtzLCBOelNsaWRlckhhbmRsZXIsIE56U2xpZGVyU2hvd1Rvb2x0aXAsIE56U2xpZGVyVmFsdWUgfSBmcm9tICcuL3R5cGluZ3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotc2xpZGVyJyxcbiAgZXhwb3J0QXM6ICduelNsaWRlcicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56U2xpZGVyQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICBOelNsaWRlclNlcnZpY2VcbiAgXSxcbiAgaG9zdDoge1xuICAgICcoa2V5ZG93biknOiAnb25LZXlEb3duKCRldmVudCknXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgI3NsaWRlclxuICAgICAgY2xhc3M9XCJhbnQtc2xpZGVyXCJcbiAgICAgIFtjbGFzcy5hbnQtc2xpZGVyLWRpc2FibGVkXT1cIm56RGlzYWJsZWRcIlxuICAgICAgW2NsYXNzLmFudC1zbGlkZXItdmVydGljYWxdPVwibnpWZXJ0aWNhbFwiXG4gICAgICBbY2xhc3MuYW50LXNsaWRlci13aXRoLW1hcmtzXT1cIm1hcmtzQXJyYXlcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtc2xpZGVyLXJhaWxcIj48L2Rpdj5cbiAgICAgIDxuei1zbGlkZXItdHJhY2tcbiAgICAgICAgW3ZlcnRpY2FsXT1cIm56VmVydGljYWxcIlxuICAgICAgICBbaW5jbHVkZWRdPVwibnpJbmNsdWRlZFwiXG4gICAgICAgIFtvZmZzZXRdPVwidHJhY2sub2Zmc2V0IVwiXG4gICAgICAgIFtsZW5ndGhdPVwidHJhY2subGVuZ3RoIVwiXG4gICAgICAgIFtyZXZlcnNlXT1cIm56UmV2ZXJzZVwiXG4gICAgICA+PC9uei1zbGlkZXItdHJhY2s+XG4gICAgICA8bnotc2xpZGVyLXN0ZXBcbiAgICAgICAgKm5nSWY9XCJtYXJrc0FycmF5XCJcbiAgICAgICAgW3ZlcnRpY2FsXT1cIm56VmVydGljYWxcIlxuICAgICAgICBbbG93ZXJCb3VuZF09XCIkYW55KGJvdW5kcy5sb3dlcilcIlxuICAgICAgICBbdXBwZXJCb3VuZF09XCIkYW55KGJvdW5kcy51cHBlcilcIlxuICAgICAgICBbbWFya3NBcnJheV09XCJtYXJrc0FycmF5XCJcbiAgICAgICAgW2luY2x1ZGVkXT1cIm56SW5jbHVkZWRcIlxuICAgICAgPjwvbnotc2xpZGVyLXN0ZXA+XG4gICAgICA8bnotc2xpZGVyLWhhbmRsZVxuICAgICAgICAqbmdGb3I9XCJsZXQgaGFuZGxlIG9mIGhhbmRsZXNcIlxuICAgICAgICBbdmVydGljYWxdPVwibnpWZXJ0aWNhbFwiXG4gICAgICAgIFtyZXZlcnNlXT1cIm56UmV2ZXJzZVwiXG4gICAgICAgIFtvZmZzZXRdPVwiaGFuZGxlLm9mZnNldCFcIlxuICAgICAgICBbdmFsdWVdPVwiaGFuZGxlLnZhbHVlIVwiXG4gICAgICAgIFthY3RpdmVdPVwiaGFuZGxlLmFjdGl2ZVwiXG4gICAgICAgIFt0b29sdGlwRm9ybWF0dGVyXT1cIm56VGlwRm9ybWF0dGVyXCJcbiAgICAgICAgW3Rvb2x0aXBWaXNpYmxlXT1cIm56VG9vbHRpcFZpc2libGVcIlxuICAgICAgICBbdG9vbHRpcFBsYWNlbWVudF09XCJuelRvb2x0aXBQbGFjZW1lbnRcIlxuICAgICAgPjwvbnotc2xpZGVyLWhhbmRsZT5cbiAgICAgIDxuei1zbGlkZXItbWFya3NcbiAgICAgICAgKm5nSWY9XCJtYXJrc0FycmF5XCJcbiAgICAgICAgW3ZlcnRpY2FsXT1cIm56VmVydGljYWxcIlxuICAgICAgICBbbWluXT1cIm56TWluXCJcbiAgICAgICAgW21heF09XCJuek1heFwiXG4gICAgICAgIFtsb3dlckJvdW5kXT1cIiRhbnkoYm91bmRzLmxvd2VyKVwiXG4gICAgICAgIFt1cHBlckJvdW5kXT1cIiRhbnkoYm91bmRzLnVwcGVyKVwiXG4gICAgICAgIFttYXJrc0FycmF5XT1cIm1hcmtzQXJyYXlcIlxuICAgICAgICBbaW5jbHVkZWRdPVwibnpJbmNsdWRlZFwiXG4gICAgICA+PC9uei1zbGlkZXItbWFya3M+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTnpTbGlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekRpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekRvdHM6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256SW5jbHVkZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256UmFuZ2U6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256VmVydGljYWw6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256TWF4OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256TWluOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U3RlcDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelJldmVyc2U6IEJvb2xlYW5JbnB1dDtcblxuICBAVmlld0NoaWxkKCdzbGlkZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBzbGlkZXIhOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZHJlbihOelNsaWRlckhhbmRsZUNvbXBvbmVudCkgaGFuZGxlckNvbXBvbmVudHMhOiBRdWVyeUxpc3Q8TnpTbGlkZXJIYW5kbGVDb21wb25lbnQ+O1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRvdHM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56SW5jbHVkZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpSYW5nZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpWZXJ0aWNhbDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpSZXZlcnNlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56RGVmYXVsdFZhbHVlPzogTnpTbGlkZXJWYWx1ZTtcbiAgQElucHV0KCkgbnpNYXJrczogTnpNYXJrcyB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuek1heCA9IDEwMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpNaW4gPSAwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuelN0ZXAgPSAxO1xuICBASW5wdXQoKSBuelRvb2x0aXBWaXNpYmxlOiBOelNsaWRlclNob3dUb29sdGlwID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBuelRvb2x0aXBQbGFjZW1lbnQ6IHN0cmluZyA9ICd0b3AnO1xuICBASW5wdXQoKSBuelRpcEZvcm1hdHRlcj86IG51bGwgfCAoKHZhbHVlOiBudW1iZXIpID0+IHN0cmluZyk7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25BZnRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpTbGlkZXJWYWx1ZT4oKTtcblxuICB2YWx1ZTogTnpTbGlkZXJWYWx1ZSB8IG51bGwgPSBudWxsO1xuICBjYWNoZVNsaWRlclN0YXJ0OiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgY2FjaGVTbGlkZXJMZW5ndGg6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBhY3RpdmVWYWx1ZUluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7IC8vIEN1cnJlbnQgYWN0aXZhdGVkIGhhbmRsZSdzIGluZGV4IE9OTFkgZm9yIHJhbmdlPXRydWVcbiAgdHJhY2s6IHsgb2Zmc2V0OiBudWxsIHwgbnVtYmVyOyBsZW5ndGg6IG51bGwgfCBudW1iZXIgfSA9IHsgb2Zmc2V0OiBudWxsLCBsZW5ndGg6IG51bGwgfTsgLy8gVHJhY2sncyBvZmZzZXQgYW5kIGxlbmd0aFxuICBoYW5kbGVzOiBOelNsaWRlckhhbmRsZXJbXSA9IFtdOyAvLyBIYW5kbGVzJyBvZmZzZXRcbiAgbWFya3NBcnJheTogTnpFeHRlbmRlZE1hcmtbXSB8IG51bGwgPSBudWxsOyAvLyBcInN0ZXBzXCIgaW4gYXJyYXkgdHlwZSB3aXRoIG1vcmUgZGF0YSAmIEZJTFRFUiBvdXQgdGhlIGludmFsaWQgbWFya1xuICBib3VuZHM6IHsgbG93ZXI6IE56U2xpZGVyVmFsdWUgfCBudWxsOyB1cHBlcjogTnpTbGlkZXJWYWx1ZSB8IG51bGwgfSA9IHsgbG93ZXI6IG51bGwsIHVwcGVyOiBudWxsIH07IC8vIG5vdyBmb3Igbnotc2xpZGVyLXN0ZXBcblxuICBwcml2YXRlIGRyYWdTdGFydCQ/OiBPYnNlcnZhYmxlPG51bWJlcj47XG4gIHByaXZhdGUgZHJhZ01vdmUkPzogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICBwcml2YXRlIGRyYWdFbmQkPzogT2JzZXJ2YWJsZTxFdmVudD47XG4gIHByaXZhdGUgZHJhZ1N0YXJ0Xz86IFN1YnNjcmlwdGlvbiB8IG51bGw7XG4gIHByaXZhdGUgZHJhZ01vdmVfPzogU3Vic2NyaXB0aW9uIHwgbnVsbDtcbiAgcHJpdmF0ZSBkcmFnRW5kXz86IFN1YnNjcmlwdGlvbiB8IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzbGlkZXJTZXJ2aWNlOiBOelNsaWRlclNlcnZpY2UsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0pIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5oYW5kbGVzID0gZ2VuZXJhdGVIYW5kbGVycyh0aGlzLm56UmFuZ2UgPyAyIDogMSk7XG4gICAgdGhpcy5tYXJrc0FycmF5ID0gdGhpcy5uek1hcmtzID8gdGhpcy5nZW5lcmF0ZU1hcmtJdGVtcyh0aGlzLm56TWFya3MpIDogbnVsbDtcbiAgICB0aGlzLmJpbmREcmFnZ2luZ0hhbmRsZXJzKCk7XG4gICAgdGhpcy50b2dnbGVEcmFnRGlzYWJsZWQodGhpcy5uekRpc2FibGVkKTtcblxuICAgIGlmICh0aGlzLmdldFZhbHVlKCkgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5mb3JtYXRWYWx1ZShudWxsKSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpEaXNhYmxlZCwgbnpNYXJrcywgbnpSYW5nZSB9ID0gY2hhbmdlcztcblxuICAgIGlmIChuekRpc2FibGVkICYmICFuekRpc2FibGVkLmZpcnN0Q2hhbmdlKSB7XG4gICAgICB0aGlzLnRvZ2dsZURyYWdEaXNhYmxlZChuekRpc2FibGVkLmN1cnJlbnRWYWx1ZSk7XG4gICAgfSBlbHNlIGlmIChuek1hcmtzICYmICFuek1hcmtzLmZpcnN0Q2hhbmdlKSB7XG4gICAgICB0aGlzLm1hcmtzQXJyYXkgPSB0aGlzLm56TWFya3MgPyB0aGlzLmdlbmVyYXRlTWFya0l0ZW1zKHRoaXMubnpNYXJrcykgOiBudWxsO1xuICAgIH0gZWxzZSBpZiAobnpSYW5nZSAmJiAhbnpSYW5nZS5maXJzdENoYW5nZSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKG51bGwpKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlRHJhZygpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWw6IE56U2xpZGVyVmFsdWUgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWwsIHRydWUpO1xuICB9XG5cbiAgb25WYWx1ZUNoYW5nZShfdmFsdWU6IE56U2xpZGVyVmFsdWUpOiB2b2lkIHt9XG5cbiAgb25Ub3VjaGVkKCk6IHZvaWQge31cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IE56U2xpZGVyVmFsdWUpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVmFsdWVDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy50b2dnbGVEcmFnRGlzYWJsZWQoaXNEaXNhYmxlZCk7XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgaGFuZGxlciBpcyBvbmx5IHRyaWdnZXJlZCB3aGVuIGEgc2xpZGVyIGhhbmRsZXIgaXMgZm9jdXNlZC5cbiAgICovXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgY29kZSA9IGUua2V5Q29kZTtcbiAgICBjb25zdCBpc0luY3JlYXNlID0gY29kZSA9PT0gUklHSFRfQVJST1cgfHwgY29kZSA9PT0gVVBfQVJST1c7XG4gICAgY29uc3QgaXNEZWNyZWFzZSA9IGNvZGUgPT09IExFRlRfQVJST1cgfHwgY29kZSA9PT0gRE9XTl9BUlJPVztcblxuICAgIGlmICghKGlzSW5jcmVhc2UgfHwgaXNEZWNyZWFzZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBzdGVwID0gKGlzRGVjcmVhc2UgPyAtdGhpcy5uelN0ZXAgOiB0aGlzLm56U3RlcCkgKiAodGhpcy5uelJldmVyc2UgPyAtMSA6IDEpO1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRoaXMubnpSYW5nZSA/ICh0aGlzLnZhbHVlIGFzIG51bWJlcltdKVt0aGlzLmFjdGl2ZVZhbHVlSW5kZXghXSArIHN0ZXAgOiAodGhpcy52YWx1ZSBhcyBudW1iZXIpICsgc3RlcDtcbiAgICB0aGlzLnNldEFjdGl2ZVZhbHVlKGVuc3VyZU51bWJlckluUmFuZ2UobmV3VmFsLCB0aGlzLm56TWluLCB0aGlzLm56TWF4KSk7XG4gIH1cblxuICBwcml2YXRlIHNldFZhbHVlKHZhbHVlOiBOelNsaWRlclZhbHVlIHwgbnVsbCwgaXNXcml0ZVZhbHVlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBpZiAoaXNXcml0ZVZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3JtYXRWYWx1ZSh2YWx1ZSk7XG4gICAgICB0aGlzLnVwZGF0ZVRyYWNrQW5kSGFuZGxlcygpO1xuICAgIH0gZWxzZSBpZiAoIXZhbHVlc0VxdWFsKHRoaXMudmFsdWUhLCB2YWx1ZSEpKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLnVwZGF0ZVRyYWNrQW5kSGFuZGxlcygpO1xuICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlKHRoaXMuZ2V0VmFsdWUodHJ1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0VmFsdWUoY2xvbmVBbmRTb3J0OiBib29sZWFuID0gZmFsc2UpOiBOelNsaWRlclZhbHVlIHtcbiAgICBpZiAoY2xvbmVBbmRTb3J0ICYmIHRoaXMudmFsdWUgJiYgaXNWYWx1ZVJhbmdlKHRoaXMudmFsdWUpKSB7XG4gICAgICByZXR1cm4gWy4uLnRoaXMudmFsdWVdLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudmFsdWUhO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb25lICYgc29ydCBjdXJyZW50IHZhbHVlIGFuZCBjb252ZXJ0IHRoZW0gdG8gb2Zmc2V0cywgdGhlbiByZXR1cm4gdGhlIG5ldyBvbmUuXG4gICAqL1xuICBwcml2YXRlIGdldFZhbHVlVG9PZmZzZXQodmFsdWU/OiBOelNsaWRlclZhbHVlKTogTnpTbGlkZXJWYWx1ZSB7XG4gICAgbGV0IG5vcm1hbGl6ZWRWYWx1ZSA9IHZhbHVlO1xuXG4gICAgaWYgKHR5cGVvZiBub3JtYWxpemVkVmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBub3JtYWxpemVkVmFsdWUgPSB0aGlzLmdldFZhbHVlKHRydWUpO1xuICAgIH1cblxuICAgIHJldHVybiBpc1ZhbHVlUmFuZ2Uobm9ybWFsaXplZFZhbHVlKSA/IG5vcm1hbGl6ZWRWYWx1ZS5tYXAodmFsID0+IHRoaXMudmFsdWVUb09mZnNldCh2YWwpKSA6IHRoaXMudmFsdWVUb09mZnNldChub3JtYWxpemVkVmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgdGhlIGNsb3Nlc3QgdmFsdWUgdG8gYmUgYWN0aXZhdGVkLlxuICAgKi9cbiAgcHJpdmF0ZSBzZXRBY3RpdmVWYWx1ZUluZGV4KHBvaW50ZXJWYWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgaWYgKGlzVmFsdWVSYW5nZSh2YWx1ZSkpIHtcbiAgICAgIGxldCBtaW5pbWFsOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgICAgIGxldCBnYXA6IG51bWJlcjtcbiAgICAgIGxldCBhY3RpdmVJbmRleCA9IC0xO1xuICAgICAgdmFsdWUuZm9yRWFjaCgodmFsLCBpbmRleCkgPT4ge1xuICAgICAgICBnYXAgPSBNYXRoLmFicyhwb2ludGVyVmFsdWUgLSB2YWwpO1xuICAgICAgICBpZiAobWluaW1hbCA9PT0gbnVsbCB8fCBnYXAgPCBtaW5pbWFsISkge1xuICAgICAgICAgIG1pbmltYWwgPSBnYXA7XG4gICAgICAgICAgYWN0aXZlSW5kZXggPSBpbmRleDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmFjdGl2ZVZhbHVlSW5kZXggPSBhY3RpdmVJbmRleDtcbiAgICAgIHRoaXMuaGFuZGxlckNvbXBvbmVudHMudG9BcnJheSgpW2FjdGl2ZUluZGV4XS5mb2N1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhbmRsZXJDb21wb25lbnRzLnRvQXJyYXkoKVswXS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0QWN0aXZlVmFsdWUocG9pbnRlclZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoaXNWYWx1ZVJhbmdlKHRoaXMudmFsdWUhKSkge1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSBbLi4uKHRoaXMudmFsdWUgYXMgbnVtYmVyW10pXTtcbiAgICAgIG5ld1ZhbHVlW3RoaXMuYWN0aXZlVmFsdWVJbmRleCFdID0gcG9pbnRlclZhbHVlO1xuICAgICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUocG9pbnRlclZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRyYWNrIGFuZCBoYW5kbGVzJyBwb3NpdGlvbiBhbmQgbGVuZ3RoLlxuICAgKi9cbiAgcHJpdmF0ZSB1cGRhdGVUcmFja0FuZEhhbmRsZXMoKTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5nZXRWYWx1ZVRvT2Zmc2V0KHZhbHVlKTtcbiAgICBjb25zdCB2YWx1ZVNvcnRlZCA9IHRoaXMuZ2V0VmFsdWUodHJ1ZSk7XG4gICAgY29uc3Qgb2Zmc2V0U29ydGVkID0gdGhpcy5nZXRWYWx1ZVRvT2Zmc2V0KHZhbHVlU29ydGVkKTtcbiAgICBjb25zdCBib3VuZFBhcnRzID0gaXNWYWx1ZVJhbmdlKHZhbHVlU29ydGVkKSA/IHZhbHVlU29ydGVkIDogWzAsIHZhbHVlU29ydGVkXTtcbiAgICBjb25zdCB0cmFja1BhcnRzID0gaXNWYWx1ZVJhbmdlKG9mZnNldFNvcnRlZCkgPyBbb2Zmc2V0U29ydGVkWzBdLCBvZmZzZXRTb3J0ZWRbMV0gLSBvZmZzZXRTb3J0ZWRbMF1dIDogWzAsIG9mZnNldFNvcnRlZF07XG5cbiAgICB0aGlzLmhhbmRsZXMuZm9yRWFjaCgoaGFuZGxlLCBpbmRleCkgPT4ge1xuICAgICAgaGFuZGxlLm9mZnNldCA9IGlzVmFsdWVSYW5nZShvZmZzZXQpID8gb2Zmc2V0W2luZGV4XSA6IG9mZnNldDtcbiAgICAgIGhhbmRsZS52YWx1ZSA9IGlzVmFsdWVSYW5nZSh2YWx1ZSkgPyB2YWx1ZVtpbmRleF0gOiB2YWx1ZSB8fCAwO1xuICAgIH0pO1xuXG4gICAgW3RoaXMuYm91bmRzLmxvd2VyLCB0aGlzLmJvdW5kcy51cHBlcl0gPSBib3VuZFBhcnRzO1xuICAgIFt0aGlzLnRyYWNrLm9mZnNldCwgdGhpcy50cmFjay5sZW5ndGhdID0gdHJhY2tQYXJ0cztcblxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkRyYWdTdGFydCh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy50b2dnbGVEcmFnTW92aW5nKHRydWUpO1xuICAgIHRoaXMuY2FjaGVTbGlkZXJQcm9wZXJ0eSgpO1xuICAgIHRoaXMuc2V0QWN0aXZlVmFsdWVJbmRleCh0aGlzLmdldExvZ2ljYWxWYWx1ZSh2YWx1ZSkpO1xuICAgIHRoaXMuc2V0QWN0aXZlVmFsdWUodGhpcy5nZXRMb2dpY2FsVmFsdWUodmFsdWUpKTtcbiAgICB0aGlzLnNob3dIYW5kbGVUb29sdGlwKHRoaXMubnpSYW5nZSA/IHRoaXMuYWN0aXZlVmFsdWVJbmRleCA6IDApO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkRyYWdNb3ZlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNldEFjdGl2ZVZhbHVlKHRoaXMuZ2V0TG9naWNhbFZhbHVlKHZhbHVlKSk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIGdldExvZ2ljYWxWYWx1ZSh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5uelJldmVyc2UgPyB0aGlzLm56TWF4IC0gdmFsdWUgOiB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgb25EcmFnRW5kKCk6IHZvaWQge1xuICAgIHRoaXMubnpPbkFmdGVyQ2hhbmdlLmVtaXQodGhpcy5nZXRWYWx1ZSh0cnVlKSk7XG4gICAgdGhpcy50b2dnbGVEcmFnTW92aW5nKGZhbHNlKTtcbiAgICB0aGlzLmNhY2hlU2xpZGVyUHJvcGVydHkodHJ1ZSk7XG4gICAgdGhpcy5oaWRlQWxsSGFuZGxlVG9vbHRpcCgpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB1c2VyIGludGVyYWN0aW9ucyBoYW5kbGVzLlxuICAgKi9cbiAgcHJpdmF0ZSBiaW5kRHJhZ2dpbmdIYW5kbGVycygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2xpZGVyRE9NID0gdGhpcy5zbGlkZXIubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBvcmllbnRGaWVsZCA9IHRoaXMubnpWZXJ0aWNhbCA/ICdwYWdlWScgOiAncGFnZVgnO1xuICAgIGNvbnN0IG1vdXNlOiBNb3VzZVRvdWNoT2JzZXJ2ZXJDb25maWcgPSB7XG4gICAgICBzdGFydDogJ21vdXNlZG93bicsXG4gICAgICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgICAgIGVuZDogJ21vdXNldXAnLFxuICAgICAgcGx1Y2tLZXk6IFtvcmllbnRGaWVsZF1cbiAgICB9O1xuICAgIGNvbnN0IHRvdWNoOiBNb3VzZVRvdWNoT2JzZXJ2ZXJDb25maWcgPSB7XG4gICAgICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICAgICAgbW92ZTogJ3RvdWNobW92ZScsXG4gICAgICBlbmQ6ICd0b3VjaGVuZCcsXG4gICAgICBwbHVja0tleTogWyd0b3VjaGVzJywgJzAnLCBvcmllbnRGaWVsZF0sXG4gICAgICBmaWx0ZXI6IChlOiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkgPT4gZSBpbnN0YW5jZW9mIFRvdWNoRXZlbnRcbiAgICB9O1xuXG4gICAgW21vdXNlLCB0b3VjaF0uZm9yRWFjaChzb3VyY2UgPT4ge1xuICAgICAgY29uc3QgeyBzdGFydCwgbW92ZSwgZW5kLCBwbHVja0tleSwgZmlsdGVyOiBmaWx0ZXJGdW5jID0gKCkgPT4gdHJ1ZSB9ID0gc291cmNlO1xuXG4gICAgICBzb3VyY2Uuc3RhcnRQbHVja2VkJCA9IGZyb21FdmVudChzbGlkZXJET00sIHN0YXJ0KS5waXBlKFxuICAgICAgICBmaWx0ZXIoZmlsdGVyRnVuYyksXG4gICAgICAgIHRhcChzaWxlbnRFdmVudCksXG4gICAgICAgIHBsdWNrPEV2ZW50LCBudW1iZXI+KC4uLnBsdWNrS2V5KSxcbiAgICAgICAgbWFwKChwb3NpdGlvbjogbnVtYmVyKSA9PiB0aGlzLmZpbmRDbG9zZXN0VmFsdWUocG9zaXRpb24pKVxuICAgICAgKTtcbiAgICAgIHNvdXJjZS5lbmQkID0gZnJvbUV2ZW50KGRvY3VtZW50LCBlbmQpO1xuICAgICAgc291cmNlLm1vdmVSZXNvbHZlZCQgPSBmcm9tRXZlbnQoZG9jdW1lbnQsIG1vdmUpLnBpcGUoXG4gICAgICAgIGZpbHRlcihmaWx0ZXJGdW5jKSxcbiAgICAgICAgdGFwKHNpbGVudEV2ZW50KSxcbiAgICAgICAgcGx1Y2s8RXZlbnQsIG51bWJlcj4oLi4ucGx1Y2tLZXkpLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICBtYXAoKHBvc2l0aW9uOiBudW1iZXIpID0+IHRoaXMuZmluZENsb3Nlc3RWYWx1ZShwb3NpdGlvbikpLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICB0YWtlVW50aWwoc291cmNlLmVuZCQpXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kcmFnU3RhcnQkID0gbWVyZ2UobW91c2Uuc3RhcnRQbHVja2VkJCEsIHRvdWNoLnN0YXJ0UGx1Y2tlZCQhKTtcbiAgICB0aGlzLmRyYWdNb3ZlJCA9IG1lcmdlKG1vdXNlLm1vdmVSZXNvbHZlZCQhLCB0b3VjaC5tb3ZlUmVzb2x2ZWQkISk7XG4gICAgdGhpcy5kcmFnRW5kJCA9IG1lcmdlKG1vdXNlLmVuZCQhLCB0b3VjaC5lbmQkISk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZURyYWcocGVyaW9kczogc3RyaW5nW10gPSBbJ3N0YXJ0JywgJ21vdmUnLCAnZW5kJ10pOiB2b2lkIHtcbiAgICBpZiAocGVyaW9kcy5pbmRleE9mKCdzdGFydCcpICE9PSAtMSAmJiB0aGlzLmRyYWdTdGFydCQgJiYgIXRoaXMuZHJhZ1N0YXJ0Xykge1xuICAgICAgdGhpcy5kcmFnU3RhcnRfID0gdGhpcy5kcmFnU3RhcnQkLnN1YnNjcmliZSh0aGlzLm9uRHJhZ1N0YXJ0LmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGlmIChwZXJpb2RzLmluZGV4T2YoJ21vdmUnKSAhPT0gLTEgJiYgdGhpcy5kcmFnTW92ZSQgJiYgIXRoaXMuZHJhZ01vdmVfKSB7XG4gICAgICB0aGlzLmRyYWdNb3ZlXyA9IHRoaXMuZHJhZ01vdmUkLnN1YnNjcmliZSh0aGlzLm9uRHJhZ01vdmUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignZW5kJykgIT09IC0xICYmIHRoaXMuZHJhZ0VuZCQgJiYgIXRoaXMuZHJhZ0VuZF8pIHtcbiAgICAgIHRoaXMuZHJhZ0VuZF8gPSB0aGlzLmRyYWdFbmQkLnN1YnNjcmliZSh0aGlzLm9uRHJhZ0VuZC5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVuc3Vic2NyaWJlRHJhZyhwZXJpb2RzOiBzdHJpbmdbXSA9IFsnc3RhcnQnLCAnbW92ZScsICdlbmQnXSk6IHZvaWQge1xuICAgIGlmIChwZXJpb2RzLmluZGV4T2YoJ3N0YXJ0JykgIT09IC0xICYmIHRoaXMuZHJhZ1N0YXJ0Xykge1xuICAgICAgdGhpcy5kcmFnU3RhcnRfLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmRyYWdTdGFydF8gPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChwZXJpb2RzLmluZGV4T2YoJ21vdmUnKSAhPT0gLTEgJiYgdGhpcy5kcmFnTW92ZV8pIHtcbiAgICAgIHRoaXMuZHJhZ01vdmVfLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmRyYWdNb3ZlXyA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignZW5kJykgIT09IC0xICYmIHRoaXMuZHJhZ0VuZF8pIHtcbiAgICAgIHRoaXMuZHJhZ0VuZF8udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZHJhZ0VuZF8gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdG9nZ2xlRHJhZ01vdmluZyhtb3ZhYmxlOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgcGVyaW9kcyA9IFsnbW92ZScsICdlbmQnXTtcbiAgICBpZiAobW92YWJsZSkge1xuICAgICAgdGhpcy5zbGlkZXJTZXJ2aWNlLmlzRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5zdWJzY3JpYmVEcmFnKHBlcmlvZHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNsaWRlclNlcnZpY2UuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgdGhpcy51bnN1YnNjcmliZURyYWcocGVyaW9kcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0b2dnbGVEcmFnRGlzYWJsZWQoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmVEcmFnKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3Vic2NyaWJlRHJhZyhbJ3N0YXJ0J10pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmluZENsb3Nlc3RWYWx1ZShwb3NpdGlvbjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBzbGlkZXJTdGFydCA9IHRoaXMuZ2V0U2xpZGVyU3RhcnRQb3NpdGlvbigpO1xuICAgIGNvbnN0IHNsaWRlckxlbmd0aCA9IHRoaXMuZ2V0U2xpZGVyTGVuZ3RoKCk7XG4gICAgY29uc3QgcmF0aW8gPSBlbnN1cmVOdW1iZXJJblJhbmdlKChwb3NpdGlvbiAtIHNsaWRlclN0YXJ0KSAvIHNsaWRlckxlbmd0aCwgMCwgMSk7XG4gICAgY29uc3QgdmFsID0gKHRoaXMubnpNYXggLSB0aGlzLm56TWluKSAqICh0aGlzLm56VmVydGljYWwgPyAxIC0gcmF0aW8gOiByYXRpbykgKyB0aGlzLm56TWluO1xuICAgIGNvbnN0IHBvaW50cyA9IHRoaXMubnpNYXJrcyA9PT0gbnVsbCA/IFtdIDogT2JqZWN0LmtleXModGhpcy5uek1hcmtzKS5tYXAocGFyc2VGbG9hdCk7XG4gICAgaWYgKHRoaXMubnpTdGVwICE9PSAwICYmICF0aGlzLm56RG90cykge1xuICAgICAgY29uc3QgY2xvc2VzdE9uZSA9IE1hdGgucm91bmQodmFsIC8gdGhpcy5uelN0ZXApICogdGhpcy5uelN0ZXA7XG4gICAgICBwb2ludHMucHVzaChjbG9zZXN0T25lKTtcbiAgICB9XG4gICAgY29uc3QgZ2FwcyA9IHBvaW50cy5tYXAocG9pbnQgPT4gTWF0aC5hYnModmFsIC0gcG9pbnQpKTtcbiAgICBjb25zdCBjbG9zZXN0ID0gcG9pbnRzW2dhcHMuaW5kZXhPZihNYXRoLm1pbiguLi5nYXBzKSldO1xuXG4gICAgcmV0dXJuIHRoaXMubnpTdGVwID09PSBudWxsID8gY2xvc2VzdCA6IHBhcnNlRmxvYXQoY2xvc2VzdC50b0ZpeGVkKGdldFByZWNpc2lvbih0aGlzLm56U3RlcCkpKTtcbiAgfVxuXG4gIHByaXZhdGUgdmFsdWVUb09mZnNldCh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZ2V0UGVyY2VudCh0aGlzLm56TWluLCB0aGlzLm56TWF4LCB2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIGdldFNsaWRlclN0YXJ0UG9zaXRpb24oKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5jYWNoZVNsaWRlclN0YXJ0ICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYWNoZVNsaWRlclN0YXJ0O1xuICAgIH1cbiAgICBjb25zdCBvZmZzZXQgPSBnZXRFbGVtZW50T2Zmc2V0KHRoaXMuc2xpZGVyLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHJldHVybiB0aGlzLm56VmVydGljYWwgPyBvZmZzZXQudG9wIDogb2Zmc2V0LmxlZnQ7XG4gIH1cblxuICBwcml2YXRlIGdldFNsaWRlckxlbmd0aCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLmNhY2hlU2xpZGVyTGVuZ3RoICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYWNoZVNsaWRlckxlbmd0aDtcbiAgICB9XG4gICAgY29uc3Qgc2xpZGVyRE9NID0gdGhpcy5zbGlkZXIubmF0aXZlRWxlbWVudDtcbiAgICByZXR1cm4gdGhpcy5uelZlcnRpY2FsID8gc2xpZGVyRE9NLmNsaWVudEhlaWdodCA6IHNsaWRlckRPTS5jbGllbnRXaWR0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWNoZSBET00gbGF5b3V0L3JlZmxvdyBvcGVyYXRpb25zIGZvciBwZXJmb3JtYW5jZSAobWF5IG5vdCBuZWNlc3Nhcnk/KVxuICAgKi9cbiAgcHJpdmF0ZSBjYWNoZVNsaWRlclByb3BlcnR5KHJlbW92ZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5jYWNoZVNsaWRlclN0YXJ0ID0gcmVtb3ZlID8gbnVsbCA6IHRoaXMuZ2V0U2xpZGVyU3RhcnRQb3NpdGlvbigpO1xuICAgIHRoaXMuY2FjaGVTbGlkZXJMZW5ndGggPSByZW1vdmUgPyBudWxsIDogdGhpcy5nZXRTbGlkZXJMZW5ndGgoKTtcbiAgfVxuXG4gIHByaXZhdGUgZm9ybWF0VmFsdWUodmFsdWU6IE56U2xpZGVyVmFsdWUgfCBudWxsKTogTnpTbGlkZXJWYWx1ZSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMubnpSYW5nZSA/IFt0aGlzLm56TWluLCB0aGlzLm56TWF4XSA6IHRoaXMubnpNaW47XG4gICAgfSBlbHNlIGlmIChhc3NlcnRWYWx1ZVZhbGlkKHZhbHVlLCB0aGlzLm56UmFuZ2UpKSB7XG4gICAgICByZXR1cm4gaXNWYWx1ZVJhbmdlKHZhbHVlKVxuICAgICAgICA/IHZhbHVlLm1hcCh2YWwgPT4gZW5zdXJlTnVtYmVySW5SYW5nZSh2YWwsIHRoaXMubnpNaW4sIHRoaXMubnpNYXgpKVxuICAgICAgICA6IGVuc3VyZU51bWJlckluUmFuZ2UodmFsdWUsIHRoaXMubnpNaW4sIHRoaXMubnpNYXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5uekRlZmF1bHRWYWx1ZSA/IHRoaXMubnpEZWZhdWx0VmFsdWUgOiB0aGlzLm56UmFuZ2UgPyBbdGhpcy5uek1pbiwgdGhpcy5uek1heF0gOiB0aGlzLm56TWluO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IG9uZSBoYW5kbGUncyB0b29sdGlwIGFuZCBoaWRlIG90aGVycycuXG4gICAqL1xuICBwcml2YXRlIHNob3dIYW5kbGVUb29sdGlwKGhhbmRsZUluZGV4OiBudW1iZXIgPSAwKTogdm9pZCB7XG4gICAgdGhpcy5oYW5kbGVzLmZvckVhY2goKGhhbmRsZSwgaW5kZXgpID0+IHtcbiAgICAgIGhhbmRsZS5hY3RpdmUgPSBpbmRleCA9PT0gaGFuZGxlSW5kZXg7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGhpZGVBbGxIYW5kbGVUb29sdGlwKCk6IHZvaWQge1xuICAgIHRoaXMuaGFuZGxlcy5mb3JFYWNoKGhhbmRsZSA9PiAoaGFuZGxlLmFjdGl2ZSA9IGZhbHNlKSk7XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlTWFya0l0ZW1zKG1hcmtzOiBOek1hcmtzKTogTnpFeHRlbmRlZE1hcmtbXSB8IG51bGwge1xuICAgIGNvbnN0IG1hcmtzQXJyYXk6IE56RXh0ZW5kZWRNYXJrW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBtYXJrcykge1xuICAgICAgY29uc3QgbWFyayA9IG1hcmtzW2tleV07XG4gICAgICBjb25zdCB2YWwgPSB0eXBlb2Yga2V5ID09PSAnbnVtYmVyJyA/IGtleSA6IHBhcnNlRmxvYXQoa2V5KTtcbiAgICAgIGlmICh2YWwgPj0gdGhpcy5uek1pbiAmJiB2YWwgPD0gdGhpcy5uek1heCkge1xuICAgICAgICBtYXJrc0FycmF5LnB1c2goeyB2YWx1ZTogdmFsLCBvZmZzZXQ6IHRoaXMudmFsdWVUb09mZnNldCh2YWwpLCBjb25maWc6IG1hcmsgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtYXJrc0FycmF5Lmxlbmd0aCA/IG1hcmtzQXJyYXkgOiBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlVHlwZU5vdE1hdGNoRXJyb3IoKTogRXJyb3Ige1xuICByZXR1cm4gbmV3IEVycm9yKFxuICAgIGBUaGUgXCJuelJhbmdlXCIgY2FuJ3QgbWF0Y2ggdGhlIFwibmdNb2RlbFwiJ3MgdHlwZSwgcGxlYXNlIGNoZWNrIHRoZXNlIHByb3BlcnRpZXM6IFwibnpSYW5nZVwiLCBcIm5nTW9kZWxcIiwgXCJuekRlZmF1bHRWYWx1ZVwiLmBcbiAgKTtcbn1cblxuZnVuY3Rpb24gaXNWYWx1ZVJhbmdlKHZhbHVlOiBOelNsaWRlclZhbHVlKTogdmFsdWUgaXMgbnVtYmVyW10ge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPT09IDI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSGFuZGxlcnMoYW1vdW50OiBudW1iZXIpOiBOelNsaWRlckhhbmRsZXJbXSB7XG4gIHJldHVybiBBcnJheShhbW91bnQpXG4gICAgLmZpbGwoMClcbiAgICAubWFwKCgpID0+ICh7IG9mZnNldDogbnVsbCwgdmFsdWU6IG51bGwsIGFjdGl2ZTogZmFsc2UgfSkpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHZhbHVlIGlzIHZhbGlkIGFuZCB0aHJvdyBlcnJvciBpZiB2YWx1ZS10eXBlL3JhbmdlIG5vdCBtYXRjaC5cbiAqL1xuZnVuY3Rpb24gYXNzZXJ0VmFsdWVWYWxpZCh2YWx1ZTogTnpTbGlkZXJWYWx1ZSwgaXNSYW5nZT86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgaWYgKCghaXNWYWx1ZVJhbmdlKHZhbHVlKSAmJiBpc05hTih2YWx1ZSkpIHx8IChpc1ZhbHVlUmFuZ2UodmFsdWUpICYmIHZhbHVlLnNvbWUodiA9PiBpc05hTih2KSkpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBhc3NlcnRWYWx1ZVR5cGVNYXRjaCh2YWx1ZSwgaXNSYW5nZSk7XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgaWYgYHRoaXMubnpSYW5nZWAgaXMgYHRydWVgLCB2YWx1ZSBpcyBhbHNvIGEgcmFuZ2UsIHZpY2UgdmVyc2EuXG4gKi9cbmZ1bmN0aW9uIGFzc2VydFZhbHVlVHlwZU1hdGNoKHZhbHVlOiBOelNsaWRlclZhbHVlLCBpc1JhbmdlOiBib29sZWFuID0gZmFsc2UpOiBib29sZWFuIHtcbiAgaWYgKGlzVmFsdWVSYW5nZSh2YWx1ZSkgIT09IGlzUmFuZ2UpIHtcbiAgICB0aHJvdyBnZXRWYWx1ZVR5cGVOb3RNYXRjaEVycm9yKCk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHZhbHVlc0VxdWFsKHZhbEE6IE56U2xpZGVyVmFsdWUsIHZhbEI6IE56U2xpZGVyVmFsdWUpOiBib29sZWFuIHtcbiAgaWYgKHR5cGVvZiB2YWxBICE9PSB0eXBlb2YgdmFsQikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gaXNWYWx1ZVJhbmdlKHZhbEEpICYmIGlzVmFsdWVSYW5nZSh2YWxCKSA/IGFycmF5c0VxdWFsPG51bWJlcj4odmFsQSwgdmFsQikgOiB2YWxBID09PSB2YWxCO1xufVxuIl19