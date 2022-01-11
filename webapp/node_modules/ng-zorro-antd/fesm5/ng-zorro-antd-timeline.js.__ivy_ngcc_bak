import { Injectable, Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, ViewChild, Input, ContentChildren, NgModule } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';

/**
 * @fileoverview added by tsickle
 * Generated from: timeline.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TimelineService = /** @class */ (function () {
    function TimelineService() {
        this.check$ = new ReplaySubject(1);
    }
    /**
     * @return {?}
     */
    TimelineService.prototype.markForCheck = /**
     * @return {?}
     */
    function () {
        this.check$.next();
    };
    TimelineService.decorators = [
        { type: Injectable }
    ];
    return TimelineService;
}());
if (false) {
    /** @type {?} */
    TimelineService.prototype.check$;
}

/**
 * @fileoverview added by tsickle
 * Generated from: typings.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/** @type {?} */
var TimelineModes = (/** @type {?} */ (['left', 'alternate', 'right', 'custom']));
/** @type {?} */
var TimelinePositions = (/** @type {?} */ (['left', 'right']));
/** @type {?} */
var TimelineTimeDefaultColors = (/** @type {?} */ (['red', 'blue', 'green', 'grey', 'gray']));

/**
 * @fileoverview added by tsickle
 * Generated from: timeline-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?=} color
 * @return {?}
 */
function isDefaultColor(color) {
    return TimelineTimeDefaultColors.findIndex((/**
     * @param {?} i
     * @return {?}
     */
    function (i) { return i === color; })) !== -1;
}
var NzTimelineItemComponent = /** @class */ (function () {
    function NzTimelineItemComponent(cdr, timelineService) {
        this.cdr = cdr;
        this.timelineService = timelineService;
        this.nzColor = 'blue';
        this.isLast = false;
        this.borderColor = null;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTimelineItemComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.timelineService.markForCheck();
        if (changes.nzColor) {
            this.updateCustomColor();
        }
    };
    /**
     * @return {?}
     */
    NzTimelineItemComponent.prototype.detectChanges = /**
     * @return {?}
     */
    function () {
        this.cdr.detectChanges();
    };
    /**
     * @private
     * @return {?}
     */
    NzTimelineItemComponent.prototype.updateCustomColor = /**
     * @private
     * @return {?}
     */
    function () {
        this.borderColor = isDefaultColor(this.nzColor) ? null : this.nzColor;
    };
    NzTimelineItemComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    selector: 'nz-timeline-item, [nz-timeline-item]',
                    exportAs: 'nzTimelineItem',
                    template: "\n    <ng-template #template>\n      <li\n        class=\"ant-timeline-item\"\n        [class.ant-timeline-item-right]=\"(nzPosition || position) === 'right'\"\n        [class.ant-timeline-item-left]=\"(nzPosition || position) === 'left'\"\n        [class.ant-timeline-item-last]=\"isLast\"\n      >\n        <div class=\"ant-timeline-item-tail\"></div>\n        <div\n          class=\"ant-timeline-item-head\"\n          [class.ant-timeline-item-head-red]=\"nzColor === 'red'\"\n          [class.ant-timeline-item-head-blue]=\"nzColor === 'blue'\"\n          [class.ant-timeline-item-head-green]=\"nzColor === 'green'\"\n          [class.ant-timeline-item-head-gray]=\"nzColor === 'gray'\"\n          [class.ant-timeline-item-head-custom]=\"!!nzDot\"\n          [style.border-color]=\"borderColor\"\n        >\n          <ng-container *nzStringTemplateOutlet=\"nzDot\">{{ nzDot }}</ng-container>\n        </div>\n        <div class=\"ant-timeline-item-content\">\n          <ng-content></ng-content>\n        </div>\n      </li>\n    </ng-template>\n  "
                }] }
    ];
    /** @nocollapse */
    NzTimelineItemComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: TimelineService }
    ]; };
    NzTimelineItemComponent.propDecorators = {
        template: [{ type: ViewChild, args: ['template', { static: false },] }],
        nzPosition: [{ type: Input }],
        nzColor: [{ type: Input }],
        nzDot: [{ type: Input }]
    };
    return NzTimelineItemComponent;
}());
if (false) {
    /** @type {?} */
    NzTimelineItemComponent.prototype.template;
    /** @type {?} */
    NzTimelineItemComponent.prototype.nzPosition;
    /** @type {?} */
    NzTimelineItemComponent.prototype.nzColor;
    /** @type {?} */
    NzTimelineItemComponent.prototype.nzDot;
    /** @type {?} */
    NzTimelineItemComponent.prototype.isLast;
    /** @type {?} */
    NzTimelineItemComponent.prototype.borderColor;
    /** @type {?} */
    NzTimelineItemComponent.prototype.position;
    /**
     * @type {?}
     * @private
     */
    NzTimelineItemComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTimelineItemComponent.prototype.timelineService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: timeline.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzTimelineComponent = /** @class */ (function () {
    function NzTimelineComponent(cdr, timelineService) {
        this.cdr = cdr;
        this.timelineService = timelineService;
        this.nzMode = 'left';
        this.nzReverse = false;
        this.isPendingBoolean = false;
        this.timelineItems = [];
        this.destroy$ = new Subject();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTimelineComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzMode = changes.nzMode, nzReverse = changes.nzReverse, nzPending = changes.nzPending;
        if (simpleChangeActivated(nzMode) || simpleChangeActivated(nzReverse)) {
            this.updateChildren();
        }
        if (nzPending) {
            this.isPendingBoolean = nzPending.currentValue === true;
        }
    };
    /**
     * @return {?}
     */
    NzTimelineComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.timelineService.check$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NzTimelineComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.updateChildren();
        this.listOfItems.changes.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.updateChildren();
        }));
    };
    /**
     * @return {?}
     */
    NzTimelineComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @private
     * @return {?}
     */
    NzTimelineComponent.prototype.updateChildren = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.listOfItems && this.listOfItems.length) {
            /** @type {?} */
            var length_1 = this.listOfItems.length;
            this.listOfItems.forEach((/**
             * @param {?} item
             * @param {?} index
             * @return {?}
             */
            function (item, index) {
                item.isLast = !_this.nzReverse ? index === length_1 - 1 : index === 0;
                item.position = getInferredTimelineItemPosition(index, _this.nzMode);
                item.detectChanges();
            }));
            this.timelineItems = this.nzReverse ? this.listOfItems.toArray().reverse() : this.listOfItems.toArray();
        }
        this.cdr.markForCheck();
    };
    NzTimelineComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    selector: 'nz-timeline',
                    providers: [TimelineService],
                    exportAs: 'nzTimeline',
                    template: "\n    <ul\n      class=\"ant-timeline\"\n      [class.ant-timeline-right]=\"nzMode === 'right'\"\n      [class.ant-timeline-alternate]=\"nzMode === 'alternate' || nzMode === 'custom'\"\n      [class.ant-timeline-pending]=\"!!nzPending\"\n      [class.ant-timeline-reverse]=\"nzReverse\"\n    >\n      <!-- pending dot (reversed) -->\n      <ng-container *ngIf=\"nzReverse\" [ngTemplateOutlet]=\"pendingTemplate\"></ng-container>\n      <!-- timeline items -->\n      <ng-container *ngFor=\"let item of timelineItems\">\n        <ng-template [ngTemplateOutlet]=\"item.template\"></ng-template>\n      </ng-container>\n      <ng-container *ngIf=\"!nzReverse\" [ngTemplateOutlet]=\"pendingTemplate\"></ng-container>\n      <!-- pending dot -->\n    </ul>\n    <ng-template #pendingTemplate>\n      <li *ngIf=\"nzPending\" class=\"ant-timeline-item ant-timeline-item-pending\">\n        <div class=\"ant-timeline-item-tail\"></div>\n        <div class=\"ant-timeline-item-head ant-timeline-item-head-custom ant-timeline-item-head-blue\">\n          <ng-container *nzStringTemplateOutlet=\"nzPendingDot\">\n            {{ nzPendingDot }}<i *ngIf=\"!nzPendingDot\" nz-icon nzType=\"loading\"></i>\n          </ng-container>\n        </div>\n        <div class=\"ant-timeline-item-content\">\n          <ng-container *nzStringTemplateOutlet=\"nzPending\">\n            {{ isPendingBoolean ? '' : nzPending }}\n          </ng-container>\n        </div>\n      </li>\n    </ng-template>\n    <!-- Grasp items -->\n    <ng-content></ng-content>\n  "
                }] }
    ];
    /** @nocollapse */
    NzTimelineComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: TimelineService }
    ]; };
    NzTimelineComponent.propDecorators = {
        listOfItems: [{ type: ContentChildren, args: [NzTimelineItemComponent,] }],
        nzMode: [{ type: Input }],
        nzPending: [{ type: Input }],
        nzPendingDot: [{ type: Input }],
        nzReverse: [{ type: Input }]
    };
    return NzTimelineComponent;
}());
if (false) {
    /** @type {?} */
    NzTimelineComponent.prototype.listOfItems;
    /** @type {?} */
    NzTimelineComponent.prototype.nzMode;
    /** @type {?} */
    NzTimelineComponent.prototype.nzPending;
    /** @type {?} */
    NzTimelineComponent.prototype.nzPendingDot;
    /** @type {?} */
    NzTimelineComponent.prototype.nzReverse;
    /** @type {?} */
    NzTimelineComponent.prototype.isPendingBoolean;
    /** @type {?} */
    NzTimelineComponent.prototype.timelineItems;
    /**
     * @type {?}
     * @private
     */
    NzTimelineComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzTimelineComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTimelineComponent.prototype.timelineService;
}
/**
 * @param {?=} simpleChange
 * @return {?}
 */
function simpleChangeActivated(simpleChange) {
    return !!(simpleChange && (simpleChange.previousValue !== simpleChange.currentValue || simpleChange.isFirstChange()));
}
/**
 * @param {?} index
 * @param {?} mode
 * @return {?}
 */
function getInferredTimelineItemPosition(index, mode) {
    return mode === 'custom'
        ? undefined
        : mode === 'left'
            ? 'left'
            : mode === 'right'
                ? 'right'
                : mode === 'alternate' && index % 2 === 0
                    ? 'left'
                    : 'right';
}

/**
 * @fileoverview added by tsickle
 * Generated from: timeline.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzTimelineModule = /** @class */ (function () {
    function NzTimelineModule() {
    }
    NzTimelineModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NzTimelineItemComponent, NzTimelineComponent],
                    exports: [NzTimelineItemComponent, NzTimelineComponent],
                    imports: [CommonModule, PlatformModule, NzIconModule, NzOutletModule]
                },] }
    ];
    return NzTimelineModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-timeline.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzTimelineComponent, NzTimelineItemComponent, NzTimelineModule, TimelineService };
//# sourceMappingURL=ng-zorro-antd-timeline.js.map
