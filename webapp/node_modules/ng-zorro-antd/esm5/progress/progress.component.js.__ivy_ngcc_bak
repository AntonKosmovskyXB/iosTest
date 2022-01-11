/**
 * @fileoverview added by tsickle
 * Generated from: progress.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { InputNumber, isNotNil } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { handleCircleGradient, handleLinearGradient } from './utils';
/** @type {?} */
var gradientIdSeed = 0;
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'progress';
/** @type {?} */
var statusIconNameMap = new Map([
    ['success', 'check'],
    ['exception', 'close']
]);
/** @type {?} */
var statusColorMap = new Map([
    ['normal', '#108ee9'],
    ['exception', '#ff5500'],
    ['success', '#87d068']
]);
/** @type {?} */
var defaultFormatter = (/**
 * @param {?} p
 * @return {?}
 */
function (p) { return p + "%"; });
var ɵ0 = defaultFormatter;
var NzProgressComponent = /** @class */ (function () {
    function NzProgressComponent(nzConfigService) {
        this.nzConfigService = nzConfigService;
        this.nzShowInfo = true;
        this.nzWidth = 132;
        this.nzStrokeColor = undefined;
        this.nzSize = 'default';
        this.nzPercent = 0;
        this.nzStrokeWidth = undefined;
        this.nzGapDegree = undefined;
        this.nzType = 'line';
        this.nzGapPosition = 'top';
        this.nzStrokeLinecap = 'round';
        this.steps = [];
        /**
         * Gradient style when `nzType` is `line`.
         */
        this.lineGradient = null;
        /**
         * If user uses gradient color.
         */
        this.isGradient = false;
        /**
         * If the linear progress is a step progress.
         */
        this.isSteps = false;
        /**
         * Each progress whose `nzType` is circle or dashboard should have unique id to
         * define `<linearGradient>`.
         */
        this.gradientId = gradientIdSeed++;
        /**
         * Paths to rendered in the template.
         */
        this.progressCirclePath = [];
        this.trailPathStyle = null;
        this.trackByFn = (/**
         * @param {?} index
         * @return {?}
         */
        function (index) { return "" + index; });
        this.cachedStatus = 'normal';
        this.inferredStatus = 'normal';
        this.destroy$ = new Subject();
    }
    Object.defineProperty(NzProgressComponent.prototype, "formatter", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzFormat || defaultFormatter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "status", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzStatus || this.inferredStatus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "strokeWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzStrokeWidth || (this.nzType === 'line' && this.nzSize !== 'small' ? 8 : 6);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "isCircleStyle", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzType === 'circle' || this.nzType === 'dashboard';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NzProgressComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzSteps = changes.nzSteps, nzGapPosition = changes.nzGapPosition, nzStrokeLinecap = changes.nzStrokeLinecap, nzStrokeColor = changes.nzStrokeColor, nzGapDegree = changes.nzGapDegree, nzType = changes.nzType, nzStatus = changes.nzStatus, nzPercent = changes.nzPercent, nzSuccessPercent = changes.nzSuccessPercent;
        if (nzStatus) {
            this.cachedStatus = this.nzStatus || this.cachedStatus;
        }
        if (nzPercent || nzSuccessPercent) {
            /** @type {?} */
            var fillAll = parseInt(this.nzPercent.toString(), 10) >= 100;
            if (fillAll) {
                if ((isNotNil(this.nzSuccessPercent) && (/** @type {?} */ (this.nzSuccessPercent)) >= 100) || this.nzSuccessPercent === undefined) {
                    this.inferredStatus = 'success';
                }
            }
            else {
                this.inferredStatus = this.cachedStatus;
            }
        }
        if (nzStatus || nzPercent || nzSuccessPercent) {
            this.updateIcon();
        }
        if (nzStrokeColor) {
            this.setStrokeColor();
        }
        if (nzGapPosition || nzStrokeLinecap || nzGapDegree || nzType || nzPercent || nzStrokeColor) {
            this.getCirclePaths();
        }
        if (nzSteps) {
            this.isSteps = isNotNil(nzSteps.currentValue);
            this.getSteps();
        }
    };
    /**
     * @return {?}
     */
    NzProgressComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.updateIcon();
            _this.setStrokeColor();
            _this.getCirclePaths();
        }));
    };
    /**
     * @return {?}
     */
    NzProgressComponent.prototype.ngOnDestroy = /**
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
    NzProgressComponent.prototype.updateIcon = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var ret = statusIconNameMap.get(this.status);
        this.icon = ret ? ret + (this.isCircleStyle ? '-o' : '-circle-fill') : '';
    };
    /**
     * Calculate step render configs.
     */
    /**
     * Calculate step render configs.
     * @private
     * @return {?}
     */
    NzProgressComponent.prototype.getSteps = /**
     * Calculate step render configs.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var current = Math.floor((/** @type {?} */ (this.nzSteps)) * (this.nzPercent / 100));
        /** @type {?} */
        var stepWidth = this.nzSize === 'small' ? 2 : 14;
        for (var i = 0; i < (/** @type {?} */ (this.nzSteps)); i++) {
            /** @type {?} */
            var color = void 0;
            if (i <= current - 1) {
                color = this.nzStrokeColor;
            }
            /** @type {?} */
            var stepStyle = {
                backgroundColor: "" + color,
                width: stepWidth + "px",
                height: this.strokeWidth + "px"
            };
            this.steps.push(stepStyle);
        }
    };
    /**
     * Calculate paths when the type is circle or dashboard.
     */
    /**
     * Calculate paths when the type is circle or dashboard.
     * @private
     * @return {?}
     */
    NzProgressComponent.prototype.getCirclePaths = /**
     * Calculate paths when the type is circle or dashboard.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.isCircleStyle) {
            return;
        }
        /** @type {?} */
        var values = isNotNil(this.nzSuccessPercent) ? [(/** @type {?} */ (this.nzSuccessPercent)), this.nzPercent] : [this.nzPercent];
        // Calculate shared styles.
        /** @type {?} */
        var radius = 50 - this.strokeWidth / 2;
        /** @type {?} */
        var gapPosition = this.nzGapPosition || (this.nzType === 'circle' ? 'top' : 'bottom');
        /** @type {?} */
        var len = Math.PI * 2 * radius;
        /** @type {?} */
        var gapDegree = this.nzGapDegree || (this.nzType === 'circle' ? 0 : 75);
        /** @type {?} */
        var beginPositionX = 0;
        /** @type {?} */
        var beginPositionY = -radius;
        /** @type {?} */
        var endPositionX = 0;
        /** @type {?} */
        var endPositionY = radius * -2;
        switch (gapPosition) {
            case 'left':
                beginPositionX = -radius;
                beginPositionY = 0;
                endPositionX = radius * 2;
                endPositionY = 0;
                break;
            case 'right':
                beginPositionX = radius;
                beginPositionY = 0;
                endPositionX = radius * -2;
                endPositionY = 0;
                break;
            case 'bottom':
                beginPositionY = radius;
                endPositionY = radius * 2;
                break;
            default:
        }
        this.pathString = "M 50,50 m " + beginPositionX + "," + beginPositionY + "\n       a " + radius + "," + radius + " 0 1 1 " + endPositionX + "," + -endPositionY + "\n       a " + radius + "," + radius + " 0 1 1 " + -endPositionX + "," + endPositionY;
        this.trailPathStyle = {
            strokeDasharray: len - gapDegree + "px " + len + "px",
            strokeDashoffset: "-" + gapDegree / 2 + "px",
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
        };
        // Calculate styles for each path.
        this.progressCirclePath = values
            .map((/**
         * @param {?} value
         * @param {?} index
         * @return {?}
         */
        function (value, index) {
            /** @type {?} */
            var isSuccessPercent = values.length === 2 && index === 0;
            return {
                stroke: _this.isGradient && !isSuccessPercent ? "url(#gradient-" + _this.gradientId + ")" : null,
                strokePathStyle: {
                    stroke: !_this.isGradient ? (isSuccessPercent ? statusColorMap.get('success') : ((/** @type {?} */ (_this.nzStrokeColor)))) : null,
                    transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s',
                    strokeDasharray: ((value || 0) / 100) * (len - gapDegree) + "px " + len + "px",
                    strokeDashoffset: "-" + gapDegree / 2 + "px"
                }
            };
        }))
            .reverse();
    };
    /**
     * @private
     * @return {?}
     */
    NzProgressComponent.prototype.setStrokeColor = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var color = this.nzStrokeColor;
        /** @type {?} */
        var isGradient = (this.isGradient = !!color && typeof color !== 'string');
        if (isGradient && !this.isCircleStyle) {
            this.lineGradient = handleLinearGradient((/** @type {?} */ (color)));
        }
        else if (isGradient && this.isCircleStyle) {
            this.circleGradient = handleCircleGradient((/** @type {?} */ (this.nzStrokeColor)));
        }
        else {
            this.lineGradient = null;
            this.circleGradient = [];
        }
    };
    NzProgressComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-progress',
                    exportAs: 'nzProgress',
                    preserveWhitespaces: false,
                    template: "\n    <ng-template #progressInfoTemplate>\n      <span class=\"ant-progress-text\" *ngIf=\"nzShowInfo\">\n        <ng-container *ngIf=\"(status === 'exception' || status === 'success') && !nzFormat; else formatTemplate\">\n          <i nz-icon [nzType]=\"icon\"></i>\n        </ng-container>\n        <ng-template #formatTemplate>\n          <ng-container *nzStringTemplateOutlet=\"formatter; context: { $implicit: nzPercent }; let formatter\">\n            {{ formatter(nzPercent) }}\n          </ng-container>\n        </ng-template>\n      </span>\n    </ng-template>\n\n    <div\n      [ngClass]=\"'ant-progress ant-progress-status-' + status\"\n      [class.ant-progress-line]=\"nzType == 'line'\"\n      [class.ant-progress-small]=\"nzSize == 'small'\"\n      [class.ant-progress-show-info]=\"nzShowInfo\"\n      [class.ant-progress-circle]=\"isCircleStyle\"\n      [class.ant-progress-steps]=\"isSteps\"\n    >\n      <!-- line progress -->\n      <div *ngIf=\"nzType === 'line'\">\n        <ng-container *ngIf=\"!isSteps\">\n          <div class=\"ant-progress-outer\" *ngIf=\"!isSteps\">\n            <div class=\"ant-progress-inner\">\n              <div\n                class=\"ant-progress-bg\"\n                [style.width.%]=\"nzPercent\"\n                [style.border-radius]=\"nzStrokeLinecap === 'round' ? '100px' : '0'\"\n                [style.background]=\"!isGradient ? nzStrokeColor : null\"\n                [style.background-image]=\"isGradient ? lineGradient : null\"\n                [style.height.px]=\"strokeWidth\"\n              ></div>\n              <div\n                *ngIf=\"nzSuccessPercent || nzSuccessPercent === 0\"\n                class=\"ant-progress-success-bg\"\n                [style.width.%]=\"nzSuccessPercent\"\n                [style.border-radius]=\"nzStrokeLinecap === 'round' ? '100px' : '0'\"\n                [style.height.px]=\"strokeWidth\"\n              ></div>\n            </div>\n          </div>\n          <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\n        </ng-container>\n        <!-- Step style progress -->\n        <div class=\"ant-progress-steps-outer\" *ngIf=\"isSteps\">\n          <div *ngFor=\"let step of steps; let i = index\" class=\"ant-progress-steps-item\" [ngStyle]=\"step\"></div>\n          <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\n        </div>\n      </div>\n\n      <!-- circle / dashboard progress -->\n      <div\n        [style.width.px]=\"this.nzWidth\"\n        [style.height.px]=\"this.nzWidth\"\n        [style.fontSize.px]=\"this.nzWidth * 0.15 + 6\"\n        class=\"ant-progress-inner\"\n        [class.ant-progress-circle-gradient]=\"isGradient\"\n        *ngIf=\"isCircleStyle\"\n      >\n        <svg class=\"ant-progress-circle \" viewBox=\"0 0 100 100\">\n          <defs *ngIf=\"isGradient\">\n            <linearGradient [id]=\"'gradient-' + gradientId\" x1=\"100%\" y1=\"0%\" x2=\"0%\" y2=\"0%\">\n              <stop *ngFor=\"let i of circleGradient\" [attr.offset]=\"i.offset\" [attr.stop-color]=\"i.color\"></stop>\n            </linearGradient>\n          </defs>\n          <path\n            class=\"ant-progress-circle-trail\"\n            stroke=\"#f3f3f3\"\n            fill-opacity=\"0\"\n            [attr.stroke-width]=\"strokeWidth\"\n            [attr.d]=\"pathString\"\n            [ngStyle]=\"trailPathStyle\"\n          ></path>\n          <path\n            *ngFor=\"let p of progressCirclePath; trackBy: trackByFn\"\n            class=\"ant-progress-circle-path\"\n            fill-opacity=\"0\"\n            [attr.d]=\"pathString\"\n            [attr.stroke-linecap]=\"nzStrokeLinecap\"\n            [attr.stroke]=\"p.stroke\"\n            [attr.stroke-width]=\"nzPercent ? strokeWidth : 0\"\n            [ngStyle]=\"p.strokePathStyle\"\n          ></path>\n        </svg>\n        <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\n      </div>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    NzProgressComponent.ctorParameters = function () { return [
        { type: NzConfigService }
    ]; };
    NzProgressComponent.propDecorators = {
        nzShowInfo: [{ type: Input }],
        nzWidth: [{ type: Input }],
        nzStrokeColor: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzFormat: [{ type: Input }],
        nzSuccessPercent: [{ type: Input }],
        nzPercent: [{ type: Input }],
        nzStrokeWidth: [{ type: Input }],
        nzGapDegree: [{ type: Input }],
        nzStatus: [{ type: Input }],
        nzType: [{ type: Input }],
        nzGapPosition: [{ type: Input }],
        nzStrokeLinecap: [{ type: Input }],
        nzSteps: [{ type: Input }]
    };
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", Boolean)
    ], NzProgressComponent.prototype, "nzShowInfo", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", Object)
    ], NzProgressComponent.prototype, "nzStrokeColor", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", String)
    ], NzProgressComponent.prototype, "nzSize", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], NzProgressComponent.prototype, "nzSuccessPercent", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], NzProgressComponent.prototype, "nzPercent", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME), InputNumber(),
        __metadata("design:type", Number)
    ], NzProgressComponent.prototype, "nzStrokeWidth", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME), InputNumber(),
        __metadata("design:type", Number)
    ], NzProgressComponent.prototype, "nzGapDegree", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", String)
    ], NzProgressComponent.prototype, "nzGapPosition", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", String)
    ], NzProgressComponent.prototype, "nzStrokeLinecap", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], NzProgressComponent.prototype, "nzSteps", void 0);
    return NzProgressComponent;
}());
export { NzProgressComponent };
if (false) {
    /** @type {?} */
    NzProgressComponent.ngAcceptInputType_nzSuccessPercent;
    /** @type {?} */
    NzProgressComponent.ngAcceptInputType_nzPercent;
    /** @type {?} */
    NzProgressComponent.ngAcceptInputType_nzStrokeWidth;
    /** @type {?} */
    NzProgressComponent.ngAcceptInputType_nzGapDegree;
    /** @type {?} */
    NzProgressComponent.ngAcceptInputType_nzSteps;
    /** @type {?} */
    NzProgressComponent.prototype.nzShowInfo;
    /** @type {?} */
    NzProgressComponent.prototype.nzWidth;
    /** @type {?} */
    NzProgressComponent.prototype.nzStrokeColor;
    /** @type {?} */
    NzProgressComponent.prototype.nzSize;
    /** @type {?} */
    NzProgressComponent.prototype.nzFormat;
    /** @type {?} */
    NzProgressComponent.prototype.nzSuccessPercent;
    /** @type {?} */
    NzProgressComponent.prototype.nzPercent;
    /** @type {?} */
    NzProgressComponent.prototype.nzStrokeWidth;
    /** @type {?} */
    NzProgressComponent.prototype.nzGapDegree;
    /** @type {?} */
    NzProgressComponent.prototype.nzStatus;
    /** @type {?} */
    NzProgressComponent.prototype.nzType;
    /** @type {?} */
    NzProgressComponent.prototype.nzGapPosition;
    /** @type {?} */
    NzProgressComponent.prototype.nzStrokeLinecap;
    /** @type {?} */
    NzProgressComponent.prototype.nzSteps;
    /** @type {?} */
    NzProgressComponent.prototype.steps;
    /**
     * Gradient style when `nzType` is `line`.
     * @type {?}
     */
    NzProgressComponent.prototype.lineGradient;
    /**
     * If user uses gradient color.
     * @type {?}
     */
    NzProgressComponent.prototype.isGradient;
    /**
     * If the linear progress is a step progress.
     * @type {?}
     */
    NzProgressComponent.prototype.isSteps;
    /**
     * Each progress whose `nzType` is circle or dashboard should have unique id to
     * define `<linearGradient>`.
     * @type {?}
     */
    NzProgressComponent.prototype.gradientId;
    /**
     * Paths to rendered in the template.
     * @type {?}
     */
    NzProgressComponent.prototype.progressCirclePath;
    /** @type {?} */
    NzProgressComponent.prototype.circleGradient;
    /** @type {?} */
    NzProgressComponent.prototype.trailPathStyle;
    /** @type {?} */
    NzProgressComponent.prototype.pathString;
    /** @type {?} */
    NzProgressComponent.prototype.icon;
    /** @type {?} */
    NzProgressComponent.prototype.trackByFn;
    /**
     * @type {?}
     * @private
     */
    NzProgressComponent.prototype.cachedStatus;
    /**
     * @type {?}
     * @private
     */
    NzProgressComponent.prototype.inferredStatus;
    /**
     * @type {?}
     * @private
     */
    NzProgressComponent.prototype.destroy$;
    /** @type {?} */
    NzProgressComponent.prototype.nzConfigService;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9wcm9ncmVzcy8iLCJzb3VyY2VzIjpbInByb2dyZXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQStDLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFJLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWMzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxTQUFTLENBQUM7O0lBRWpFLGNBQWMsR0FBRyxDQUFDOztJQUVoQix3QkFBd0IsR0FBRyxVQUFVOztJQUNyQyxpQkFBaUIsR0FBRyxJQUFJLEdBQUcsQ0FBQztJQUNoQyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUM7SUFDcEIsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDO0NBQ3ZCLENBQUM7O0lBQ0ksY0FBYyxHQUFHLElBQUksR0FBRyxDQUFDO0lBQzdCLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQztJQUNyQixDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUM7SUFDeEIsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDO0NBQ3ZCLENBQUM7O0lBQ0ksZ0JBQWdCOzs7O0FBQXdCLFVBQUMsQ0FBUyxJQUFhLE9BQUcsQ0FBQyxNQUFHLEVBQVAsQ0FBTyxDQUFBOztBQUU1RTtJQXVLRSw2QkFBbUIsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBOURKLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFDakUsWUFBTyxHQUFHLEdBQUcsQ0FBQztRQUN3QixrQkFBYSxHQUErQixTQUFTLENBQUM7UUFDdEQsV0FBTSxHQUF3QixTQUFTLENBQUM7UUFHL0QsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUNnQixrQkFBYSxHQUFZLFNBQVMsQ0FBQztRQUNuQyxnQkFBVyxHQUFZLFNBQVMsQ0FBQztRQUV0RixXQUFNLEdBQXVCLE1BQU0sQ0FBQztRQUNFLGtCQUFhLEdBQThCLEtBQUssQ0FBQztRQUNqRCxvQkFBZSxHQUFnQyxPQUFPLENBQUM7UUFJdEcsVUFBSyxHQUF5QixFQUFFLENBQUM7Ozs7UUFHakMsaUJBQVksR0FBa0IsSUFBSSxDQUFDOzs7O1FBR25DLGVBQVUsR0FBRyxLQUFLLENBQUM7Ozs7UUFHbkIsWUFBTyxHQUFHLEtBQUssQ0FBQzs7Ozs7UUFNaEIsZUFBVSxHQUFHLGNBQWMsRUFBRSxDQUFDOzs7O1FBRzlCLHVCQUFrQixHQUEyQixFQUFFLENBQUM7UUFFaEQsbUJBQWMsR0FBNEIsSUFBSSxDQUFDO1FBSS9DLGNBQVM7Ozs7UUFBRyxVQUFDLEtBQWEsSUFBSyxPQUFBLEtBQUcsS0FBTyxFQUFWLENBQVUsRUFBQztRQWtCbEMsaUJBQVksR0FBeUIsUUFBUSxDQUFDO1FBQzlDLG1CQUFjLEdBQXlCLFFBQVEsQ0FBQztRQUNoRCxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQUVlLENBQUM7SUFwQnZELHNCQUFJLDBDQUFTOzs7O1FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksZ0JBQWdCLENBQUM7UUFDM0MsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx1Q0FBTTs7OztRQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDOUMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw0Q0FBVzs7OztRQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0YsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw4Q0FBYTs7OztRQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxXQUFXLENBQUM7UUFDakUsQ0FBQzs7O09BQUE7Ozs7O0lBUUQseUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ3hCLElBQUEseUJBQU8sRUFBRSxxQ0FBYSxFQUFFLHlDQUFlLEVBQUUscUNBQWEsRUFBRSxpQ0FBVyxFQUFFLHVCQUFNLEVBQUUsMkJBQVEsRUFBRSw2QkFBUyxFQUFFLDJDQUFnQjtRQUUxSCxJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3hEO1FBRUQsSUFBSSxTQUFTLElBQUksZ0JBQWdCLEVBQUU7O2dCQUMzQixPQUFPLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksR0FBRztZQUM5RCxJQUFJLE9BQU8sRUFBRTtnQkFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLG1CQUFBLElBQUksQ0FBQyxnQkFBZ0IsRUFBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTLEVBQUU7b0JBQzdHLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO2lCQUNqQzthQUNGO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUN6QztTQUNGO1FBRUQsSUFBSSxRQUFRLElBQUksU0FBUyxJQUFJLGdCQUFnQixFQUFFO1lBQzdDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjtRQUVELElBQUksYUFBYSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtRQUVELElBQUksYUFBYSxJQUFJLGVBQWUsSUFBSSxXQUFXLElBQUksTUFBTSxJQUFJLFNBQVMsSUFBSSxhQUFhLEVBQUU7WUFDM0YsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQzs7OztJQUVELHNDQUFROzs7SUFBUjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLGVBQWU7YUFDakIsZ0NBQWdDLENBQUMsd0JBQXdCLENBQUM7YUFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUzs7O1FBQUM7WUFDVCxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFTyx3Q0FBVTs7OztJQUFsQjs7WUFDUSxHQUFHLEdBQUcsaUJBQWlCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM1RSxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNLLHNDQUFROzs7OztJQUFoQjs7WUFDUSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBQSxJQUFJLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDOztZQUM1RCxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUVsRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsbUJBQUEsSUFBSSxDQUFDLE9BQU8sRUFBQyxFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFDbEMsS0FBSyxTQUFBO1lBQ1QsSUFBSSxDQUFDLElBQUksT0FBTyxHQUFHLENBQUMsRUFBRTtnQkFDcEIsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7YUFDNUI7O2dCQUNLLFNBQVMsR0FBRztnQkFDaEIsZUFBZSxFQUFFLEtBQUcsS0FBTztnQkFDM0IsS0FBSyxFQUFLLFNBQVMsT0FBSTtnQkFDdkIsTUFBTSxFQUFLLElBQUksQ0FBQyxXQUFXLE9BQUk7YUFDaEM7WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0ssNENBQWM7Ozs7O0lBQXRCO1FBQUEsaUJBK0RDO1FBOURDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3ZCLE9BQU87U0FDUjs7WUFFSyxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLElBQUksQ0FBQyxnQkFBZ0IsRUFBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDOzs7WUFHdEcsTUFBTSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUM7O1lBQ2xDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDOztZQUNqRixHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsTUFBTTs7WUFDMUIsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7O1lBRXJFLGNBQWMsR0FBRyxDQUFDOztZQUNsQixjQUFjLEdBQUcsQ0FBQyxNQUFNOztZQUN4QixZQUFZLEdBQUcsQ0FBQzs7WUFDaEIsWUFBWSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFFOUIsUUFBUSxXQUFXLEVBQUU7WUFDbkIsS0FBSyxNQUFNO2dCQUNULGNBQWMsR0FBRyxDQUFDLE1BQU0sQ0FBQztnQkFDekIsY0FBYyxHQUFHLENBQUMsQ0FBQztnQkFDbkIsWUFBWSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQzFCLFlBQVksR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLE1BQU07WUFDUixLQUFLLE9BQU87Z0JBQ1YsY0FBYyxHQUFHLE1BQU0sQ0FBQztnQkFDeEIsY0FBYyxHQUFHLENBQUMsQ0FBQztnQkFDbkIsWUFBWSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsWUFBWSxHQUFHLENBQUMsQ0FBQztnQkFDakIsTUFBTTtZQUNSLEtBQUssUUFBUTtnQkFDWCxjQUFjLEdBQUcsTUFBTSxDQUFDO2dCQUN4QixZQUFZLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDMUIsTUFBTTtZQUNSLFFBQVE7U0FDVDtRQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsZUFBYSxjQUFjLFNBQUksY0FBYyxtQkFDeEQsTUFBTSxTQUFJLE1BQU0sZUFBVSxZQUFZLFNBQUksQ0FBQyxZQUFZLG1CQUN2RCxNQUFNLFNBQUksTUFBTSxlQUFVLENBQUMsWUFBWSxTQUFJLFlBQWMsQ0FBQztRQUVqRSxJQUFJLENBQUMsY0FBYyxHQUFHO1lBQ3BCLGVBQWUsRUFBSyxHQUFHLEdBQUcsU0FBUyxXQUFNLEdBQUcsT0FBSTtZQUNoRCxnQkFBZ0IsRUFBRSxNQUFJLFNBQVMsR0FBRyxDQUFDLE9BQUk7WUFDdkMsVUFBVSxFQUFFLHlFQUF5RTtTQUN0RixDQUFDO1FBRUYsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNO2FBQzdCLEdBQUc7Ozs7O1FBQUMsVUFBQyxLQUFLLEVBQUUsS0FBSzs7Z0JBQ1YsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUM7WUFDM0QsT0FBTztnQkFDTCxNQUFNLEVBQUUsS0FBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxtQkFBaUIsS0FBSSxDQUFDLFVBQVUsTUFBRyxDQUFDLENBQUMsQ0FBQyxJQUFJO2dCQUN6RixlQUFlLEVBQUU7b0JBQ2YsTUFBTSxFQUFFLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBQSxLQUFJLENBQUMsYUFBYSxFQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO29CQUNySCxVQUFVLEVBQUUscUdBQXFHO29CQUNqSCxlQUFlLEVBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsV0FBTSxHQUFHLE9BQUk7b0JBQ3pFLGdCQUFnQixFQUFFLE1BQUksU0FBUyxHQUFHLENBQUMsT0FBSTtpQkFDeEM7YUFDRixDQUFDO1FBQ0osQ0FBQyxFQUFDO2FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDOzs7OztJQUVPLDRDQUFjOzs7O0lBQXRCOztZQUNRLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYTs7WUFDMUIsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsS0FBSyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQztRQUMzRSxJQUFJLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBb0IsQ0FBQyxtQkFBQSxLQUFLLEVBQTJCLENBQUMsQ0FBQztTQUM1RTthQUFNLElBQUksVUFBVSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDM0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBb0IsQ0FBQyxtQkFBQSxJQUFJLENBQUMsYUFBYSxFQUE4QixDQUFDLENBQUM7U0FDOUY7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7Z0JBdFVGLFNBQVMsU0FBQztvQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsWUFBWTtvQkFDdEIsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsUUFBUSxFQUFFLHk0SEEwRlQ7aUJBQ0Y7Ozs7Z0JBbklRLGVBQWU7Ozs2QkEySXJCLEtBQUs7MEJBQ0wsS0FBSztnQ0FDTCxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSzttQ0FDTCxLQUFLOzRCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs4QkFDTCxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSztnQ0FDTCxLQUFLO2tDQUNMLEtBQUs7MEJBRUwsS0FBSzs7SUFkeUM7UUFBckMsVUFBVSxDQUFDLHdCQUF3QixDQUFDOzsyREFBNEI7SUFFM0I7UUFBckMsVUFBVSxDQUFDLHdCQUF3QixDQUFDOzs4REFBdUQ7SUFDdEQ7UUFBckMsVUFBVSxDQUFDLHdCQUF3QixDQUFDOzt1REFBeUM7SUFFL0Q7UUFBZCxXQUFXLEVBQUU7O2lFQUEyQjtJQUMxQjtRQUFkLFdBQVcsRUFBRTs7MERBQXVCO0lBQ2dCO1FBQXBELFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLFdBQVcsRUFBRTs7OERBQW9DO0lBQ25DO1FBQXBELFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLFdBQVcsRUFBRTs7NERBQWtDO0lBR2hEO1FBQXJDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQzs7OERBQWtEO0lBQ2pEO1FBQXJDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQzs7Z0VBQXdEO0lBRTlFO1FBQWQsV0FBVyxFQUFFOzt3REFBa0I7SUFnTjNDLDBCQUFDO0NBQUEsQUF2VUQsSUF1VUM7U0FyT1ksbUJBQW1COzs7SUFDOUIsdURBQXVEOztJQUN2RCxnREFBZ0Q7O0lBQ2hELG9EQUFvRDs7SUFDcEQsa0RBQWtEOztJQUNsRCw4Q0FBOEM7O0lBRTlDLHlDQUEwRTs7SUFDMUUsc0NBQXVCOztJQUN2Qiw0Q0FBcUc7O0lBQ3JHLHFDQUF1Rjs7SUFDdkYsdUNBQXdDOztJQUN4QywrQ0FBa0Q7O0lBQ2xELHdDQUE4Qzs7SUFDOUMsNENBQWlHOztJQUNqRywwQ0FBK0Y7O0lBQy9GLHVDQUF5Qzs7SUFDekMscUNBQTZDOztJQUM3Qyw0Q0FBZ0c7O0lBQ2hHLDhDQUFzRzs7SUFFdEcsc0NBQXlDOztJQUV6QyxvQ0FBaUM7Ozs7O0lBR2pDLDJDQUFtQzs7Ozs7SUFHbkMseUNBQW1COzs7OztJQUduQixzQ0FBZ0I7Ozs7OztJQU1oQix5Q0FBOEI7Ozs7O0lBRzlCLGlEQUFnRDs7SUFDaEQsNkNBQTBEOztJQUMxRCw2Q0FBK0M7O0lBQy9DLHlDQUFvQjs7SUFDcEIsbUNBQWM7O0lBRWQsd0NBQTBDOzs7OztJQWtCMUMsMkNBQXNEOzs7OztJQUN0RCw2Q0FBd0Q7Ozs7O0lBQ3hELHVDQUF1Qzs7SUFFM0IsOENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IE5nU3R5bGVJbnRlcmZhY2UsIE51bWJlcklucHV0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0TnVtYmVyLCBpc05vdE5pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgTnpQcm9ncmVzc0NpcmNsZVBhdGgsXG4gIE56UHJvZ3Jlc3NDb2xvckdyYWRpZW50LFxuICBOelByb2dyZXNzRm9ybWF0dGVyLFxuICBOelByb2dyZXNzR2FwUG9zaXRpb25UeXBlLFxuICBOelByb2dyZXNzR3JhZGllbnRQcm9ncmVzcyxcbiAgTnpQcm9ncmVzc1N0YXR1c1R5cGUsXG4gIE56UHJvZ3Jlc3NTdGVwSXRlbSxcbiAgTnpQcm9ncmVzc1N0cm9rZUNvbG9yVHlwZSxcbiAgTnpQcm9ncmVzc1N0cm9rZUxpbmVjYXBUeXBlLFxuICBOelByb2dyZXNzVHlwZVR5cGVcbn0gZnJvbSAnLi90eXBpbmdzJztcbmltcG9ydCB7IGhhbmRsZUNpcmNsZUdyYWRpZW50LCBoYW5kbGVMaW5lYXJHcmFkaWVudCB9IGZyb20gJy4vdXRpbHMnO1xuXG5sZXQgZ3JhZGllbnRJZFNlZWQgPSAwO1xuXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAncHJvZ3Jlc3MnO1xuY29uc3Qgc3RhdHVzSWNvbk5hbWVNYXAgPSBuZXcgTWFwKFtcbiAgWydzdWNjZXNzJywgJ2NoZWNrJ10sXG4gIFsnZXhjZXB0aW9uJywgJ2Nsb3NlJ11cbl0pO1xuY29uc3Qgc3RhdHVzQ29sb3JNYXAgPSBuZXcgTWFwKFtcbiAgWydub3JtYWwnLCAnIzEwOGVlOSddLFxuICBbJ2V4Y2VwdGlvbicsICcjZmY1NTAwJ10sXG4gIFsnc3VjY2VzcycsICcjODdkMDY4J11cbl0pO1xuY29uc3QgZGVmYXVsdEZvcm1hdHRlcjogTnpQcm9ncmVzc0Zvcm1hdHRlciA9IChwOiBudW1iZXIpOiBzdHJpbmcgPT4gYCR7cH0lYDtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ256LXByb2dyZXNzJyxcbiAgZXhwb3J0QXM6ICduelByb2dyZXNzJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNwcm9ncmVzc0luZm9UZW1wbGF0ZT5cbiAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXByb2dyZXNzLXRleHRcIiAqbmdJZj1cIm56U2hvd0luZm9cIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIihzdGF0dXMgPT09ICdleGNlcHRpb24nIHx8IHN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSAmJiAhbnpGb3JtYXQ7IGVsc2UgZm9ybWF0VGVtcGxhdGVcIj5cbiAgICAgICAgICA8aSBuei1pY29uIFtuelR5cGVdPVwiaWNvblwiPjwvaT5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjZm9ybWF0VGVtcGxhdGU+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImZvcm1hdHRlcjsgY29udGV4dDogeyAkaW1wbGljaXQ6IG56UGVyY2VudCB9OyBsZXQgZm9ybWF0dGVyXCI+XG4gICAgICAgICAgICB7eyBmb3JtYXR0ZXIobnpQZXJjZW50KSB9fVxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8ZGl2XG4gICAgICBbbmdDbGFzc109XCInYW50LXByb2dyZXNzIGFudC1wcm9ncmVzcy1zdGF0dXMtJyArIHN0YXR1c1wiXG4gICAgICBbY2xhc3MuYW50LXByb2dyZXNzLWxpbmVdPVwibnpUeXBlID09ICdsaW5lJ1wiXG4gICAgICBbY2xhc3MuYW50LXByb2dyZXNzLXNtYWxsXT1cIm56U2l6ZSA9PSAnc21hbGwnXCJcbiAgICAgIFtjbGFzcy5hbnQtcHJvZ3Jlc3Mtc2hvdy1pbmZvXT1cIm56U2hvd0luZm9cIlxuICAgICAgW2NsYXNzLmFudC1wcm9ncmVzcy1jaXJjbGVdPVwiaXNDaXJjbGVTdHlsZVwiXG4gICAgICBbY2xhc3MuYW50LXByb2dyZXNzLXN0ZXBzXT1cImlzU3RlcHNcIlxuICAgID5cbiAgICAgIDwhLS0gbGluZSBwcm9ncmVzcyAtLT5cbiAgICAgIDxkaXYgKm5nSWY9XCJuelR5cGUgPT09ICdsaW5lJ1wiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzU3RlcHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXByb2dyZXNzLW91dGVyXCIgKm5nSWY9XCIhaXNTdGVwc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1wcm9ncmVzcy1pbm5lclwiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJhbnQtcHJvZ3Jlc3MtYmdcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS53aWR0aC4lXT1cIm56UGVyY2VudFwiXG4gICAgICAgICAgICAgICAgW3N0eWxlLmJvcmRlci1yYWRpdXNdPVwibnpTdHJva2VMaW5lY2FwID09PSAncm91bmQnID8gJzEwMHB4JyA6ICcwJ1wiXG4gICAgICAgICAgICAgICAgW3N0eWxlLmJhY2tncm91bmRdPVwiIWlzR3JhZGllbnQgPyBuelN0cm9rZUNvbG9yIDogbnVsbFwiXG4gICAgICAgICAgICAgICAgW3N0eWxlLmJhY2tncm91bmQtaW1hZ2VdPVwiaXNHcmFkaWVudCA/IGxpbmVHcmFkaWVudCA6IG51bGxcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS5oZWlnaHQucHhdPVwic3Ryb2tlV2lkdGhcIlxuICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAqbmdJZj1cIm56U3VjY2Vzc1BlcmNlbnQgfHwgbnpTdWNjZXNzUGVyY2VudCA9PT0gMFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJhbnQtcHJvZ3Jlc3Mtc3VjY2Vzcy1iZ1wiXG4gICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoLiVdPVwibnpTdWNjZXNzUGVyY2VudFwiXG4gICAgICAgICAgICAgICAgW3N0eWxlLmJvcmRlci1yYWRpdXNdPVwibnpTdHJva2VMaW5lY2FwID09PSAncm91bmQnID8gJzEwMHB4JyA6ICcwJ1wiXG4gICAgICAgICAgICAgICAgW3N0eWxlLmhlaWdodC5weF09XCJzdHJva2VXaWR0aFwiXG4gICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJwcm9ncmVzc0luZm9UZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8IS0tIFN0ZXAgc3R5bGUgcHJvZ3Jlc3MgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcHJvZ3Jlc3Mtc3RlcHMtb3V0ZXJcIiAqbmdJZj1cImlzU3RlcHNcIj5cbiAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBzdGVwIG9mIHN0ZXBzOyBsZXQgaSA9IGluZGV4XCIgY2xhc3M9XCJhbnQtcHJvZ3Jlc3Mtc3RlcHMtaXRlbVwiIFtuZ1N0eWxlXT1cInN0ZXBcIj48L2Rpdj5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwicHJvZ3Jlc3NJbmZvVGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8IS0tIGNpcmNsZSAvIGRhc2hib2FyZCBwcm9ncmVzcyAtLT5cbiAgICAgIDxkaXZcbiAgICAgICAgW3N0eWxlLndpZHRoLnB4XT1cInRoaXMubnpXaWR0aFwiXG4gICAgICAgIFtzdHlsZS5oZWlnaHQucHhdPVwidGhpcy5ueldpZHRoXCJcbiAgICAgICAgW3N0eWxlLmZvbnRTaXplLnB4XT1cInRoaXMubnpXaWR0aCAqIDAuMTUgKyA2XCJcbiAgICAgICAgY2xhc3M9XCJhbnQtcHJvZ3Jlc3MtaW5uZXJcIlxuICAgICAgICBbY2xhc3MuYW50LXByb2dyZXNzLWNpcmNsZS1ncmFkaWVudF09XCJpc0dyYWRpZW50XCJcbiAgICAgICAgKm5nSWY9XCJpc0NpcmNsZVN0eWxlXCJcbiAgICAgID5cbiAgICAgICAgPHN2ZyBjbGFzcz1cImFudC1wcm9ncmVzcy1jaXJjbGUgXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+XG4gICAgICAgICAgPGRlZnMgKm5nSWY9XCJpc0dyYWRpZW50XCI+XG4gICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgW2lkXT1cIidncmFkaWVudC0nICsgZ3JhZGllbnRJZFwiIHgxPVwiMTAwJVwiIHkxPVwiMCVcIiB4Mj1cIjAlXCIgeTI9XCIwJVwiPlxuICAgICAgICAgICAgICA8c3RvcCAqbmdGb3I9XCJsZXQgaSBvZiBjaXJjbGVHcmFkaWVudFwiIFthdHRyLm9mZnNldF09XCJpLm9mZnNldFwiIFthdHRyLnN0b3AtY29sb3JdPVwiaS5jb2xvclwiPjwvc3RvcD5cbiAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBjbGFzcz1cImFudC1wcm9ncmVzcy1jaXJjbGUtdHJhaWxcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiI2YzZjNmM1wiXG4gICAgICAgICAgICBmaWxsLW9wYWNpdHk9XCIwXCJcbiAgICAgICAgICAgIFthdHRyLnN0cm9rZS13aWR0aF09XCJzdHJva2VXaWR0aFwiXG4gICAgICAgICAgICBbYXR0ci5kXT1cInBhdGhTdHJpbmdcIlxuICAgICAgICAgICAgW25nU3R5bGVdPVwidHJhaWxQYXRoU3R5bGVcIlxuICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBwIG9mIHByb2dyZXNzQ2lyY2xlUGF0aDsgdHJhY2tCeTogdHJhY2tCeUZuXCJcbiAgICAgICAgICAgIGNsYXNzPVwiYW50LXByb2dyZXNzLWNpcmNsZS1wYXRoXCJcbiAgICAgICAgICAgIGZpbGwtb3BhY2l0eT1cIjBcIlxuICAgICAgICAgICAgW2F0dHIuZF09XCJwYXRoU3RyaW5nXCJcbiAgICAgICAgICAgIFthdHRyLnN0cm9rZS1saW5lY2FwXT1cIm56U3Ryb2tlTGluZWNhcFwiXG4gICAgICAgICAgICBbYXR0ci5zdHJva2VdPVwicC5zdHJva2VcIlxuICAgICAgICAgICAgW2F0dHIuc3Ryb2tlLXdpZHRoXT1cIm56UGVyY2VudCA/IHN0cm9rZVdpZHRoIDogMFwiXG4gICAgICAgICAgICBbbmdTdHlsZV09XCJwLnN0cm9rZVBhdGhTdHlsZVwiXG4gICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJwcm9ncmVzc0luZm9UZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOelByb2dyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelN1Y2Nlc3NQZXJjZW50OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256UGVyY2VudDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelN0cm9rZVdpZHRoOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256R2FwRGVncmVlOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U3RlcHM6IE51bWJlcklucHV0O1xuXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgbnpTaG93SW5mbzogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIG56V2lkdGggPSAxMzI7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgbnpTdHJva2VDb2xvcj86IE56UHJvZ3Jlc3NTdHJva2VDb2xvclR5cGUgPSB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgbnpTaXplOiAnZGVmYXVsdCcgfCAnc21hbGwnID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBuekZvcm1hdD86IE56UHJvZ3Jlc3NGb3JtYXR0ZXI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56U3VjY2Vzc1BlcmNlbnQ/OiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56UGVyY2VudDogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBASW5wdXROdW1iZXIoKSBuelN0cm9rZVdpZHRoPzogbnVtYmVyID0gdW5kZWZpbmVkO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIEBJbnB1dE51bWJlcigpIG56R2FwRGVncmVlPzogbnVtYmVyID0gdW5kZWZpbmVkO1xuICBASW5wdXQoKSBuelN0YXR1cz86IE56UHJvZ3Jlc3NTdGF0dXNUeXBlO1xuICBASW5wdXQoKSBuelR5cGU6IE56UHJvZ3Jlc3NUeXBlVHlwZSA9ICdsaW5lJztcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBuekdhcFBvc2l0aW9uOiBOelByb2dyZXNzR2FwUG9zaXRpb25UeXBlID0gJ3RvcCc7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgbnpTdHJva2VMaW5lY2FwOiBOelByb2dyZXNzU3Ryb2tlTGluZWNhcFR5cGUgPSAncm91bmQnO1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56U3RlcHM/OiBudW1iZXI7XG5cbiAgc3RlcHM6IE56UHJvZ3Jlc3NTdGVwSXRlbVtdID0gW107XG5cbiAgLyoqIEdyYWRpZW50IHN0eWxlIHdoZW4gYG56VHlwZWAgaXMgYGxpbmVgLiAqL1xuICBsaW5lR3JhZGllbnQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIC8qKiBJZiB1c2VyIHVzZXMgZ3JhZGllbnQgY29sb3IuICovXG4gIGlzR3JhZGllbnQgPSBmYWxzZTtcblxuICAvKiogSWYgdGhlIGxpbmVhciBwcm9ncmVzcyBpcyBhIHN0ZXAgcHJvZ3Jlc3MuICovXG4gIGlzU3RlcHMgPSBmYWxzZTtcblxuICAvKipcbiAgICogRWFjaCBwcm9ncmVzcyB3aG9zZSBgbnpUeXBlYCBpcyBjaXJjbGUgb3IgZGFzaGJvYXJkIHNob3VsZCBoYXZlIHVuaXF1ZSBpZCB0b1xuICAgKiBkZWZpbmUgYDxsaW5lYXJHcmFkaWVudD5gLlxuICAgKi9cbiAgZ3JhZGllbnRJZCA9IGdyYWRpZW50SWRTZWVkKys7XG5cbiAgLyoqIFBhdGhzIHRvIHJlbmRlcmVkIGluIHRoZSB0ZW1wbGF0ZS4gKi9cbiAgcHJvZ3Jlc3NDaXJjbGVQYXRoOiBOelByb2dyZXNzQ2lyY2xlUGF0aFtdID0gW107XG4gIGNpcmNsZUdyYWRpZW50PzogQXJyYXk8eyBvZmZzZXQ6IHN0cmluZzsgY29sb3I6IHN0cmluZyB9PjtcbiAgdHJhaWxQYXRoU3R5bGU6IE5nU3R5bGVJbnRlcmZhY2UgfCBudWxsID0gbnVsbDtcbiAgcGF0aFN0cmluZz86IHN0cmluZztcbiAgaWNvbiE6IHN0cmluZztcblxuICB0cmFja0J5Rm4gPSAoaW5kZXg6IG51bWJlcikgPT4gYCR7aW5kZXh9YDtcblxuICBnZXQgZm9ybWF0dGVyKCk6IE56UHJvZ3Jlc3NGb3JtYXR0ZXIge1xuICAgIHJldHVybiB0aGlzLm56Rm9ybWF0IHx8IGRlZmF1bHRGb3JtYXR0ZXI7XG4gIH1cblxuICBnZXQgc3RhdHVzKCk6IE56UHJvZ3Jlc3NTdGF0dXNUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5uelN0YXR1cyB8fCB0aGlzLmluZmVycmVkU3RhdHVzO1xuICB9XG5cbiAgZ2V0IHN0cm9rZVdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubnpTdHJva2VXaWR0aCB8fCAodGhpcy5uelR5cGUgPT09ICdsaW5lJyAmJiB0aGlzLm56U2l6ZSAhPT0gJ3NtYWxsJyA/IDggOiA2KTtcbiAgfVxuXG4gIGdldCBpc0NpcmNsZVN0eWxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56VHlwZSA9PT0gJ2NpcmNsZScgfHwgdGhpcy5uelR5cGUgPT09ICdkYXNoYm9hcmQnO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWNoZWRTdGF0dXM6IE56UHJvZ3Jlc3NTdGF0dXNUeXBlID0gJ25vcm1hbCc7XG4gIHByaXZhdGUgaW5mZXJyZWRTdGF0dXM6IE56UHJvZ3Jlc3NTdGF0dXNUeXBlID0gJ25vcm1hbCc7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuelN0ZXBzLCBuekdhcFBvc2l0aW9uLCBuelN0cm9rZUxpbmVjYXAsIG56U3Ryb2tlQ29sb3IsIG56R2FwRGVncmVlLCBuelR5cGUsIG56U3RhdHVzLCBuelBlcmNlbnQsIG56U3VjY2Vzc1BlcmNlbnQgfSA9IGNoYW5nZXM7XG5cbiAgICBpZiAobnpTdGF0dXMpIHtcbiAgICAgIHRoaXMuY2FjaGVkU3RhdHVzID0gdGhpcy5uelN0YXR1cyB8fCB0aGlzLmNhY2hlZFN0YXR1cztcbiAgICB9XG5cbiAgICBpZiAobnpQZXJjZW50IHx8IG56U3VjY2Vzc1BlcmNlbnQpIHtcbiAgICAgIGNvbnN0IGZpbGxBbGwgPSBwYXJzZUludCh0aGlzLm56UGVyY2VudC50b1N0cmluZygpLCAxMCkgPj0gMTAwO1xuICAgICAgaWYgKGZpbGxBbGwpIHtcbiAgICAgICAgaWYgKChpc05vdE5pbCh0aGlzLm56U3VjY2Vzc1BlcmNlbnQpICYmIHRoaXMubnpTdWNjZXNzUGVyY2VudCEgPj0gMTAwKSB8fCB0aGlzLm56U3VjY2Vzc1BlcmNlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaW5mZXJyZWRTdGF0dXMgPSAnc3VjY2Vzcyc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaW5mZXJyZWRTdGF0dXMgPSB0aGlzLmNhY2hlZFN0YXR1cztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobnpTdGF0dXMgfHwgbnpQZXJjZW50IHx8IG56U3VjY2Vzc1BlcmNlbnQpIHtcbiAgICAgIHRoaXMudXBkYXRlSWNvbigpO1xuICAgIH1cblxuICAgIGlmIChuelN0cm9rZUNvbG9yKSB7XG4gICAgICB0aGlzLnNldFN0cm9rZUNvbG9yKCk7XG4gICAgfVxuXG4gICAgaWYgKG56R2FwUG9zaXRpb24gfHwgbnpTdHJva2VMaW5lY2FwIHx8IG56R2FwRGVncmVlIHx8IG56VHlwZSB8fCBuelBlcmNlbnQgfHwgbnpTdHJva2VDb2xvcikge1xuICAgICAgdGhpcy5nZXRDaXJjbGVQYXRocygpO1xuICAgIH1cblxuICAgIGlmIChuelN0ZXBzKSB7XG4gICAgICB0aGlzLmlzU3RlcHMgPSBpc05vdE5pbChuelN0ZXBzLmN1cnJlbnRWYWx1ZSk7XG4gICAgICB0aGlzLmdldFN0ZXBzKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uekNvbmZpZ1NlcnZpY2VcbiAgICAgIC5nZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVJY29uKCk7XG4gICAgICAgIHRoaXMuc2V0U3Ryb2tlQ29sb3IoKTtcbiAgICAgICAgdGhpcy5nZXRDaXJjbGVQYXRocygpO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUljb24oKTogdm9pZCB7XG4gICAgY29uc3QgcmV0ID0gc3RhdHVzSWNvbk5hbWVNYXAuZ2V0KHRoaXMuc3RhdHVzKTtcbiAgICB0aGlzLmljb24gPSByZXQgPyByZXQgKyAodGhpcy5pc0NpcmNsZVN0eWxlID8gJy1vJyA6ICctY2lyY2xlLWZpbGwnKSA6ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBzdGVwIHJlbmRlciBjb25maWdzLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRTdGVwcygpOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50ID0gTWF0aC5mbG9vcih0aGlzLm56U3RlcHMhICogKHRoaXMubnpQZXJjZW50IC8gMTAwKSk7XG4gICAgY29uc3Qgc3RlcFdpZHRoID0gdGhpcy5uelNpemUgPT09ICdzbWFsbCcgPyAyIDogMTQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnpTdGVwcyE7IGkrKykge1xuICAgICAgbGV0IGNvbG9yO1xuICAgICAgaWYgKGkgPD0gY3VycmVudCAtIDEpIHtcbiAgICAgICAgY29sb3IgPSB0aGlzLm56U3Ryb2tlQ29sb3I7XG4gICAgICB9XG4gICAgICBjb25zdCBzdGVwU3R5bGUgPSB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7Y29sb3J9YCxcbiAgICAgICAgd2lkdGg6IGAke3N0ZXBXaWR0aH1weGAsXG4gICAgICAgIGhlaWdodDogYCR7dGhpcy5zdHJva2VXaWR0aH1weGBcbiAgICAgIH07XG4gICAgICB0aGlzLnN0ZXBzLnB1c2goc3RlcFN0eWxlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIHBhdGhzIHdoZW4gdGhlIHR5cGUgaXMgY2lyY2xlIG9yIGRhc2hib2FyZC5cbiAgICovXG4gIHByaXZhdGUgZ2V0Q2lyY2xlUGF0aHMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzQ2lyY2xlU3R5bGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZXMgPSBpc05vdE5pbCh0aGlzLm56U3VjY2Vzc1BlcmNlbnQpID8gW3RoaXMubnpTdWNjZXNzUGVyY2VudCEsIHRoaXMubnpQZXJjZW50XSA6IFt0aGlzLm56UGVyY2VudF07XG5cbiAgICAvLyBDYWxjdWxhdGUgc2hhcmVkIHN0eWxlcy5cbiAgICBjb25zdCByYWRpdXMgPSA1MCAtIHRoaXMuc3Ryb2tlV2lkdGggLyAyO1xuICAgIGNvbnN0IGdhcFBvc2l0aW9uID0gdGhpcy5uekdhcFBvc2l0aW9uIHx8ICh0aGlzLm56VHlwZSA9PT0gJ2NpcmNsZScgPyAndG9wJyA6ICdib3R0b20nKTtcbiAgICBjb25zdCBsZW4gPSBNYXRoLlBJICogMiAqIHJhZGl1cztcbiAgICBjb25zdCBnYXBEZWdyZWUgPSB0aGlzLm56R2FwRGVncmVlIHx8ICh0aGlzLm56VHlwZSA9PT0gJ2NpcmNsZScgPyAwIDogNzUpO1xuXG4gICAgbGV0IGJlZ2luUG9zaXRpb25YID0gMDtcbiAgICBsZXQgYmVnaW5Qb3NpdGlvblkgPSAtcmFkaXVzO1xuICAgIGxldCBlbmRQb3NpdGlvblggPSAwO1xuICAgIGxldCBlbmRQb3NpdGlvblkgPSByYWRpdXMgKiAtMjtcblxuICAgIHN3aXRjaCAoZ2FwUG9zaXRpb24pIHtcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICBiZWdpblBvc2l0aW9uWCA9IC1yYWRpdXM7XG4gICAgICAgIGJlZ2luUG9zaXRpb25ZID0gMDtcbiAgICAgICAgZW5kUG9zaXRpb25YID0gcmFkaXVzICogMjtcbiAgICAgICAgZW5kUG9zaXRpb25ZID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIGJlZ2luUG9zaXRpb25YID0gcmFkaXVzO1xuICAgICAgICBiZWdpblBvc2l0aW9uWSA9IDA7XG4gICAgICAgIGVuZFBvc2l0aW9uWCA9IHJhZGl1cyAqIC0yO1xuICAgICAgICBlbmRQb3NpdGlvblkgPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgIGJlZ2luUG9zaXRpb25ZID0gcmFkaXVzO1xuICAgICAgICBlbmRQb3NpdGlvblkgPSByYWRpdXMgKiAyO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuXG4gICAgdGhpcy5wYXRoU3RyaW5nID0gYE0gNTAsNTAgbSAke2JlZ2luUG9zaXRpb25YfSwke2JlZ2luUG9zaXRpb25ZfVxuICAgICAgIGEgJHtyYWRpdXN9LCR7cmFkaXVzfSAwIDEgMSAke2VuZFBvc2l0aW9uWH0sJHstZW5kUG9zaXRpb25ZfVxuICAgICAgIGEgJHtyYWRpdXN9LCR7cmFkaXVzfSAwIDEgMSAkey1lbmRQb3NpdGlvblh9LCR7ZW5kUG9zaXRpb25ZfWA7XG5cbiAgICB0aGlzLnRyYWlsUGF0aFN0eWxlID0ge1xuICAgICAgc3Ryb2tlRGFzaGFycmF5OiBgJHtsZW4gLSBnYXBEZWdyZWV9cHggJHtsZW59cHhgLFxuICAgICAgc3Ryb2tlRGFzaG9mZnNldDogYC0ke2dhcERlZ3JlZSAvIDJ9cHhgLFxuICAgICAgdHJhbnNpdGlvbjogJ3N0cm9rZS1kYXNob2Zmc2V0IC4zcyBlYXNlIDBzLCBzdHJva2UtZGFzaGFycmF5IC4zcyBlYXNlIDBzLCBzdHJva2UgLjNzJ1xuICAgIH07XG5cbiAgICAvLyBDYWxjdWxhdGUgc3R5bGVzIGZvciBlYWNoIHBhdGguXG4gICAgdGhpcy5wcm9ncmVzc0NpcmNsZVBhdGggPSB2YWx1ZXNcbiAgICAgIC5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBpc1N1Y2Nlc3NQZXJjZW50ID0gdmFsdWVzLmxlbmd0aCA9PT0gMiAmJiBpbmRleCA9PT0gMDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdHJva2U6IHRoaXMuaXNHcmFkaWVudCAmJiAhaXNTdWNjZXNzUGVyY2VudCA/IGB1cmwoI2dyYWRpZW50LSR7dGhpcy5ncmFkaWVudElkfSlgIDogbnVsbCxcbiAgICAgICAgICBzdHJva2VQYXRoU3R5bGU6IHtcbiAgICAgICAgICAgIHN0cm9rZTogIXRoaXMuaXNHcmFkaWVudCA/IChpc1N1Y2Nlc3NQZXJjZW50ID8gc3RhdHVzQ29sb3JNYXAuZ2V0KCdzdWNjZXNzJykgOiAodGhpcy5uelN0cm9rZUNvbG9yIGFzIHN0cmluZykpIDogbnVsbCxcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICdzdHJva2UtZGFzaG9mZnNldCAuM3MgZWFzZSAwcywgc3Ryb2tlLWRhc2hhcnJheSAuM3MgZWFzZSAwcywgc3Ryb2tlIC4zcywgc3Ryb2tlLXdpZHRoIC4wNnMgZWFzZSAuM3MnLFxuICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5OiBgJHsoKHZhbHVlIHx8IDApIC8gMTAwKSAqIChsZW4gLSBnYXBEZWdyZWUpfXB4ICR7bGVufXB4YCxcbiAgICAgICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IGAtJHtnYXBEZWdyZWUgLyAyfXB4YFxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgICAucmV2ZXJzZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTdHJva2VDb2xvcigpOiB2b2lkIHtcbiAgICBjb25zdCBjb2xvciA9IHRoaXMubnpTdHJva2VDb2xvcjtcbiAgICBjb25zdCBpc0dyYWRpZW50ID0gKHRoaXMuaXNHcmFkaWVudCA9ICEhY29sb3IgJiYgdHlwZW9mIGNvbG9yICE9PSAnc3RyaW5nJyk7XG4gICAgaWYgKGlzR3JhZGllbnQgJiYgIXRoaXMuaXNDaXJjbGVTdHlsZSkge1xuICAgICAgdGhpcy5saW5lR3JhZGllbnQgPSBoYW5kbGVMaW5lYXJHcmFkaWVudChjb2xvciBhcyBOelByb2dyZXNzQ29sb3JHcmFkaWVudCk7XG4gICAgfSBlbHNlIGlmIChpc0dyYWRpZW50ICYmIHRoaXMuaXNDaXJjbGVTdHlsZSkge1xuICAgICAgdGhpcy5jaXJjbGVHcmFkaWVudCA9IGhhbmRsZUNpcmNsZUdyYWRpZW50KHRoaXMubnpTdHJva2VDb2xvciBhcyBOelByb2dyZXNzR3JhZGllbnRQcm9ncmVzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGluZUdyYWRpZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuY2lyY2xlR3JhZGllbnQgPSBbXTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==