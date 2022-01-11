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
let gradientIdSeed = 0;
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'progress';
/** @type {?} */
const statusIconNameMap = new Map([
    ['success', 'check'],
    ['exception', 'close']
]);
/** @type {?} */
const statusColorMap = new Map([
    ['normal', '#108ee9'],
    ['exception', '#ff5500'],
    ['success', '#87d068']
]);
/** @type {?} */
const defaultFormatter = (/**
 * @param {?} p
 * @return {?}
 */
(p) => `${p}%`);
const ɵ0 = defaultFormatter;
export class NzProgressComponent {
    /**
     * @param {?} nzConfigService
     */
    constructor(nzConfigService) {
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
        (index) => `${index}`);
        this.cachedStatus = 'normal';
        this.inferredStatus = 'normal';
        this.destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    get formatter() {
        return this.nzFormat || defaultFormatter;
    }
    /**
     * @return {?}
     */
    get status() {
        return this.nzStatus || this.inferredStatus;
    }
    /**
     * @return {?}
     */
    get strokeWidth() {
        return this.nzStrokeWidth || (this.nzType === 'line' && this.nzSize !== 'small' ? 8 : 6);
    }
    /**
     * @return {?}
     */
    get isCircleStyle() {
        return this.nzType === 'circle' || this.nzType === 'dashboard';
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzSteps, nzGapPosition, nzStrokeLinecap, nzStrokeColor, nzGapDegree, nzType, nzStatus, nzPercent, nzSuccessPercent } = changes;
        if (nzStatus) {
            this.cachedStatus = this.nzStatus || this.cachedStatus;
        }
        if (nzPercent || nzSuccessPercent) {
            /** @type {?} */
            const fillAll = parseInt(this.nzPercent.toString(), 10) >= 100;
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.updateIcon();
            this.setStrokeColor();
            this.getCirclePaths();
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
     * @private
     * @return {?}
     */
    updateIcon() {
        /** @type {?} */
        const ret = statusIconNameMap.get(this.status);
        this.icon = ret ? ret + (this.isCircleStyle ? '-o' : '-circle-fill') : '';
    }
    /**
     * Calculate step render configs.
     * @private
     * @return {?}
     */
    getSteps() {
        /** @type {?} */
        const current = Math.floor((/** @type {?} */ (this.nzSteps)) * (this.nzPercent / 100));
        /** @type {?} */
        const stepWidth = this.nzSize === 'small' ? 2 : 14;
        for (let i = 0; i < (/** @type {?} */ (this.nzSteps)); i++) {
            /** @type {?} */
            let color;
            if (i <= current - 1) {
                color = this.nzStrokeColor;
            }
            /** @type {?} */
            const stepStyle = {
                backgroundColor: `${color}`,
                width: `${stepWidth}px`,
                height: `${this.strokeWidth}px`
            };
            this.steps.push(stepStyle);
        }
    }
    /**
     * Calculate paths when the type is circle or dashboard.
     * @private
     * @return {?}
     */
    getCirclePaths() {
        if (!this.isCircleStyle) {
            return;
        }
        /** @type {?} */
        const values = isNotNil(this.nzSuccessPercent) ? [(/** @type {?} */ (this.nzSuccessPercent)), this.nzPercent] : [this.nzPercent];
        // Calculate shared styles.
        /** @type {?} */
        const radius = 50 - this.strokeWidth / 2;
        /** @type {?} */
        const gapPosition = this.nzGapPosition || (this.nzType === 'circle' ? 'top' : 'bottom');
        /** @type {?} */
        const len = Math.PI * 2 * radius;
        /** @type {?} */
        const gapDegree = this.nzGapDegree || (this.nzType === 'circle' ? 0 : 75);
        /** @type {?} */
        let beginPositionX = 0;
        /** @type {?} */
        let beginPositionY = -radius;
        /** @type {?} */
        let endPositionX = 0;
        /** @type {?} */
        let endPositionY = radius * -2;
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
        this.pathString = `M 50,50 m ${beginPositionX},${beginPositionY}
       a ${radius},${radius} 0 1 1 ${endPositionX},${-endPositionY}
       a ${radius},${radius} 0 1 1 ${-endPositionX},${endPositionY}`;
        this.trailPathStyle = {
            strokeDasharray: `${len - gapDegree}px ${len}px`,
            strokeDashoffset: `-${gapDegree / 2}px`,
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
        };
        // Calculate styles for each path.
        this.progressCirclePath = values
            .map((/**
         * @param {?} value
         * @param {?} index
         * @return {?}
         */
        (value, index) => {
            /** @type {?} */
            const isSuccessPercent = values.length === 2 && index === 0;
            return {
                stroke: this.isGradient && !isSuccessPercent ? `url(#gradient-${this.gradientId})` : null,
                strokePathStyle: {
                    stroke: !this.isGradient ? (isSuccessPercent ? statusColorMap.get('success') : ((/** @type {?} */ (this.nzStrokeColor)))) : null,
                    transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s',
                    strokeDasharray: `${((value || 0) / 100) * (len - gapDegree)}px ${len}px`,
                    strokeDashoffset: `-${gapDegree / 2}px`
                }
            };
        }))
            .reverse();
    }
    /**
     * @private
     * @return {?}
     */
    setStrokeColor() {
        /** @type {?} */
        const color = this.nzStrokeColor;
        /** @type {?} */
        const isGradient = (this.isGradient = !!color && typeof color !== 'string');
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
    }
}
NzProgressComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-progress',
                exportAs: 'nzProgress',
                preserveWhitespaces: false,
                template: `
    <ng-template #progressInfoTemplate>
      <span class="ant-progress-text" *ngIf="nzShowInfo">
        <ng-container *ngIf="(status === 'exception' || status === 'success') && !nzFormat; else formatTemplate">
          <i nz-icon [nzType]="icon"></i>
        </ng-container>
        <ng-template #formatTemplate>
          <ng-container *nzStringTemplateOutlet="formatter; context: { $implicit: nzPercent }; let formatter">
            {{ formatter(nzPercent) }}
          </ng-container>
        </ng-template>
      </span>
    </ng-template>

    <div
      [ngClass]="'ant-progress ant-progress-status-' + status"
      [class.ant-progress-line]="nzType == 'line'"
      [class.ant-progress-small]="nzSize == 'small'"
      [class.ant-progress-show-info]="nzShowInfo"
      [class.ant-progress-circle]="isCircleStyle"
      [class.ant-progress-steps]="isSteps"
    >
      <!-- line progress -->
      <div *ngIf="nzType === 'line'">
        <ng-container *ngIf="!isSteps">
          <div class="ant-progress-outer" *ngIf="!isSteps">
            <div class="ant-progress-inner">
              <div
                class="ant-progress-bg"
                [style.width.%]="nzPercent"
                [style.border-radius]="nzStrokeLinecap === 'round' ? '100px' : '0'"
                [style.background]="!isGradient ? nzStrokeColor : null"
                [style.background-image]="isGradient ? lineGradient : null"
                [style.height.px]="strokeWidth"
              ></div>
              <div
                *ngIf="nzSuccessPercent || nzSuccessPercent === 0"
                class="ant-progress-success-bg"
                [style.width.%]="nzSuccessPercent"
                [style.border-radius]="nzStrokeLinecap === 'round' ? '100px' : '0'"
                [style.height.px]="strokeWidth"
              ></div>
            </div>
          </div>
          <ng-template [ngTemplateOutlet]="progressInfoTemplate"></ng-template>
        </ng-container>
        <!-- Step style progress -->
        <div class="ant-progress-steps-outer" *ngIf="isSteps">
          <div *ngFor="let step of steps; let i = index" class="ant-progress-steps-item" [ngStyle]="step"></div>
          <ng-template [ngTemplateOutlet]="progressInfoTemplate"></ng-template>
        </div>
      </div>

      <!-- circle / dashboard progress -->
      <div
        [style.width.px]="this.nzWidth"
        [style.height.px]="this.nzWidth"
        [style.fontSize.px]="this.nzWidth * 0.15 + 6"
        class="ant-progress-inner"
        [class.ant-progress-circle-gradient]="isGradient"
        *ngIf="isCircleStyle"
      >
        <svg class="ant-progress-circle " viewBox="0 0 100 100">
          <defs *ngIf="isGradient">
            <linearGradient [id]="'gradient-' + gradientId" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop *ngFor="let i of circleGradient" [attr.offset]="i.offset" [attr.stop-color]="i.color"></stop>
            </linearGradient>
          </defs>
          <path
            class="ant-progress-circle-trail"
            stroke="#f3f3f3"
            fill-opacity="0"
            [attr.stroke-width]="strokeWidth"
            [attr.d]="pathString"
            [ngStyle]="trailPathStyle"
          ></path>
          <path
            *ngFor="let p of progressCirclePath; trackBy: trackByFn"
            class="ant-progress-circle-path"
            fill-opacity="0"
            [attr.d]="pathString"
            [attr.stroke-linecap]="nzStrokeLinecap"
            [attr.stroke]="p.stroke"
            [attr.stroke-width]="nzPercent ? strokeWidth : 0"
            [ngStyle]="p.strokePathStyle"
          ></path>
        </svg>
        <ng-template [ngTemplateOutlet]="progressInfoTemplate"></ng-template>
      </div>
    </div>
  `
            }] }
];
/** @nocollapse */
NzProgressComponent.ctorParameters = () => [
    { type: NzConfigService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9wcm9ncmVzcy8iLCJzb3VyY2VzIjpbInByb2dyZXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQStDLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFJLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWMzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxTQUFTLENBQUM7O0lBRWpFLGNBQWMsR0FBRyxDQUFDOztNQUVoQix3QkFBd0IsR0FBRyxVQUFVOztNQUNyQyxpQkFBaUIsR0FBRyxJQUFJLEdBQUcsQ0FBQztJQUNoQyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUM7SUFDcEIsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDO0NBQ3ZCLENBQUM7O01BQ0ksY0FBYyxHQUFHLElBQUksR0FBRyxDQUFDO0lBQzdCLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQztJQUNyQixDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUM7SUFDeEIsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDO0NBQ3ZCLENBQUM7O01BQ0ksZ0JBQWdCOzs7O0FBQXdCLENBQUMsQ0FBUyxFQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFBOztBQW9HNUUsTUFBTSxPQUFPLG1CQUFtQjs7OztJQXFFOUIsWUFBbUIsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFl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IFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgTmdTdHlsZUludGVyZmFjZSwgTnVtYmVySW5wdXQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIsIGlzTm90TmlsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBOelByb2dyZXNzQ2lyY2xlUGF0aCxcbiAgTnpQcm9ncmVzc0NvbG9yR3JhZGllbnQsXG4gIE56UHJvZ3Jlc3NGb3JtYXR0ZXIsXG4gIE56UHJvZ3Jlc3NHYXBQb3NpdGlvblR5cGUsXG4gIE56UHJvZ3Jlc3NHcmFkaWVudFByb2dyZXNzLFxuICBOelByb2dyZXNzU3RhdHVzVHlwZSxcbiAgTnpQcm9ncmVzc1N0ZXBJdGVtLFxuICBOelByb2dyZXNzU3Ryb2tlQ29sb3JUeXBlLFxuICBOelByb2dyZXNzU3Ryb2tlTGluZWNhcFR5cGUsXG4gIE56UHJvZ3Jlc3NUeXBlVHlwZVxufSBmcm9tICcuL3R5cGluZ3MnO1xuaW1wb3J0IHsgaGFuZGxlQ2lyY2xlR3JhZGllbnQsIGhhbmRsZUxpbmVhckdyYWRpZW50IH0gZnJvbSAnLi91dGlscyc7XG5cbmxldCBncmFkaWVudElkU2VlZCA9IDA7XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdwcm9ncmVzcyc7XG5jb25zdCBzdGF0dXNJY29uTmFtZU1hcCA9IG5ldyBNYXAoW1xuICBbJ3N1Y2Nlc3MnLCAnY2hlY2snXSxcbiAgWydleGNlcHRpb24nLCAnY2xvc2UnXVxuXSk7XG5jb25zdCBzdGF0dXNDb2xvck1hcCA9IG5ldyBNYXAoW1xuICBbJ25vcm1hbCcsICcjMTA4ZWU5J10sXG4gIFsnZXhjZXB0aW9uJywgJyNmZjU1MDAnXSxcbiAgWydzdWNjZXNzJywgJyM4N2QwNjgnXVxuXSk7XG5jb25zdCBkZWZhdWx0Rm9ybWF0dGVyOiBOelByb2dyZXNzRm9ybWF0dGVyID0gKHA6IG51bWJlcik6IHN0cmluZyA9PiBgJHtwfSVgO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotcHJvZ3Jlc3MnLFxuICBleHBvcnRBczogJ256UHJvZ3Jlc3MnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI3Byb2dyZXNzSW5mb1RlbXBsYXRlPlxuICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtcHJvZ3Jlc3MtdGV4dFwiICpuZ0lmPVwibnpTaG93SW5mb1wiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiKHN0YXR1cyA9PT0gJ2V4Y2VwdGlvbicgfHwgc3RhdHVzID09PSAnc3VjY2VzcycpICYmICFuekZvcm1hdDsgZWxzZSBmb3JtYXRUZW1wbGF0ZVwiPlxuICAgICAgICAgIDxpIG56LWljb24gW256VHlwZV09XCJpY29uXCI+PC9pPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNmb3JtYXRUZW1wbGF0ZT5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiZm9ybWF0dGVyOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogbnpQZXJjZW50IH07IGxldCBmb3JtYXR0ZXJcIj5cbiAgICAgICAgICAgIHt7IGZvcm1hdHRlcihuelBlcmNlbnQpIH19XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDxkaXZcbiAgICAgIFtuZ0NsYXNzXT1cIidhbnQtcHJvZ3Jlc3MgYW50LXByb2dyZXNzLXN0YXR1cy0nICsgc3RhdHVzXCJcbiAgICAgIFtjbGFzcy5hbnQtcHJvZ3Jlc3MtbGluZV09XCJuelR5cGUgPT0gJ2xpbmUnXCJcbiAgICAgIFtjbGFzcy5hbnQtcHJvZ3Jlc3Mtc21hbGxdPVwibnpTaXplID09ICdzbWFsbCdcIlxuICAgICAgW2NsYXNzLmFudC1wcm9ncmVzcy1zaG93LWluZm9dPVwibnpTaG93SW5mb1wiXG4gICAgICBbY2xhc3MuYW50LXByb2dyZXNzLWNpcmNsZV09XCJpc0NpcmNsZVN0eWxlXCJcbiAgICAgIFtjbGFzcy5hbnQtcHJvZ3Jlc3Mtc3RlcHNdPVwiaXNTdGVwc1wiXG4gICAgPlxuICAgICAgPCEtLSBsaW5lIHByb2dyZXNzIC0tPlxuICAgICAgPGRpdiAqbmdJZj1cIm56VHlwZSA9PT0gJ2xpbmUnXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNTdGVwc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcHJvZ3Jlc3Mtb3V0ZXJcIiAqbmdJZj1cIiFpc1N0ZXBzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXByb2dyZXNzLWlubmVyXCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz1cImFudC1wcm9ncmVzcy1iZ1wiXG4gICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoLiVdPVwibnpQZXJjZW50XCJcbiAgICAgICAgICAgICAgICBbc3R5bGUuYm9yZGVyLXJhZGl1c109XCJuelN0cm9rZUxpbmVjYXAgPT09ICdyb3VuZCcgPyAnMTAwcHgnIDogJzAnXCJcbiAgICAgICAgICAgICAgICBbc3R5bGUuYmFja2dyb3VuZF09XCIhaXNHcmFkaWVudCA/IG56U3Ryb2tlQ29sb3IgOiBudWxsXCJcbiAgICAgICAgICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1pbWFnZV09XCJpc0dyYWRpZW50ID8gbGluZUdyYWRpZW50IDogbnVsbFwiXG4gICAgICAgICAgICAgICAgW3N0eWxlLmhlaWdodC5weF09XCJzdHJva2VXaWR0aFwiXG4gICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICpuZ0lmPVwibnpTdWNjZXNzUGVyY2VudCB8fCBuelN1Y2Nlc3NQZXJjZW50ID09PSAwXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImFudC1wcm9ncmVzcy1zdWNjZXNzLWJnXCJcbiAgICAgICAgICAgICAgICBbc3R5bGUud2lkdGguJV09XCJuelN1Y2Nlc3NQZXJjZW50XCJcbiAgICAgICAgICAgICAgICBbc3R5bGUuYm9yZGVyLXJhZGl1c109XCJuelN0cm9rZUxpbmVjYXAgPT09ICdyb3VuZCcgPyAnMTAwcHgnIDogJzAnXCJcbiAgICAgICAgICAgICAgICBbc3R5bGUuaGVpZ2h0LnB4XT1cInN0cm9rZVdpZHRoXCJcbiAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInByb2dyZXNzSW5mb1RlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwhLS0gU3RlcCBzdHlsZSBwcm9ncmVzcyAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC1wcm9ncmVzcy1zdGVwcy1vdXRlclwiICpuZ0lmPVwiaXNTdGVwc1wiPlxuICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IHN0ZXAgb2Ygc3RlcHM7IGxldCBpID0gaW5kZXhcIiBjbGFzcz1cImFudC1wcm9ncmVzcy1zdGVwcy1pdGVtXCIgW25nU3R5bGVdPVwic3RlcFwiPjwvZGl2PlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJwcm9ncmVzc0luZm9UZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDwhLS0gY2lyY2xlIC8gZGFzaGJvYXJkIHByb2dyZXNzIC0tPlxuICAgICAgPGRpdlxuICAgICAgICBbc3R5bGUud2lkdGgucHhdPVwidGhpcy5ueldpZHRoXCJcbiAgICAgICAgW3N0eWxlLmhlaWdodC5weF09XCJ0aGlzLm56V2lkdGhcIlxuICAgICAgICBbc3R5bGUuZm9udFNpemUucHhdPVwidGhpcy5ueldpZHRoICogMC4xNSArIDZcIlxuICAgICAgICBjbGFzcz1cImFudC1wcm9ncmVzcy1pbm5lclwiXG4gICAgICAgIFtjbGFzcy5hbnQtcHJvZ3Jlc3MtY2lyY2xlLWdyYWRpZW50XT1cImlzR3JhZGllbnRcIlxuICAgICAgICAqbmdJZj1cImlzQ2lyY2xlU3R5bGVcIlxuICAgICAgPlxuICAgICAgICA8c3ZnIGNsYXNzPVwiYW50LXByb2dyZXNzLWNpcmNsZSBcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIj5cbiAgICAgICAgICA8ZGVmcyAqbmdJZj1cImlzR3JhZGllbnRcIj5cbiAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBbaWRdPVwiJ2dyYWRpZW50LScgKyBncmFkaWVudElkXCIgeDE9XCIxMDAlXCIgeTE9XCIwJVwiIHgyPVwiMCVcIiB5Mj1cIjAlXCI+XG4gICAgICAgICAgICAgIDxzdG9wICpuZ0Zvcj1cImxldCBpIG9mIGNpcmNsZUdyYWRpZW50XCIgW2F0dHIub2Zmc2V0XT1cImkub2Zmc2V0XCIgW2F0dHIuc3RvcC1jb2xvcl09XCJpLmNvbG9yXCI+PC9zdG9wPlxuICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGNsYXNzPVwiYW50LXByb2dyZXNzLWNpcmNsZS10cmFpbFwiXG4gICAgICAgICAgICBzdHJva2U9XCIjZjNmM2YzXCJcbiAgICAgICAgICAgIGZpbGwtb3BhY2l0eT1cIjBcIlxuICAgICAgICAgICAgW2F0dHIuc3Ryb2tlLXdpZHRoXT1cInN0cm9rZVdpZHRoXCJcbiAgICAgICAgICAgIFthdHRyLmRdPVwicGF0aFN0cmluZ1wiXG4gICAgICAgICAgICBbbmdTdHlsZV09XCJ0cmFpbFBhdGhTdHlsZVwiXG4gICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IHAgb2YgcHJvZ3Jlc3NDaXJjbGVQYXRoOyB0cmFja0J5OiB0cmFja0J5Rm5cIlxuICAgICAgICAgICAgY2xhc3M9XCJhbnQtcHJvZ3Jlc3MtY2lyY2xlLXBhdGhcIlxuICAgICAgICAgICAgZmlsbC1vcGFjaXR5PVwiMFwiXG4gICAgICAgICAgICBbYXR0ci5kXT1cInBhdGhTdHJpbmdcIlxuICAgICAgICAgICAgW2F0dHIuc3Ryb2tlLWxpbmVjYXBdPVwibnpTdHJva2VMaW5lY2FwXCJcbiAgICAgICAgICAgIFthdHRyLnN0cm9rZV09XCJwLnN0cm9rZVwiXG4gICAgICAgICAgICBbYXR0ci5zdHJva2Utd2lkdGhdPVwibnpQZXJjZW50ID8gc3Ryb2tlV2lkdGggOiAwXCJcbiAgICAgICAgICAgIFtuZ1N0eWxlXT1cInAuc3Ryb2tlUGF0aFN0eWxlXCJcbiAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInByb2dyZXNzSW5mb1RlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE56UHJvZ3Jlc3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U3VjY2Vzc1BlcmNlbnQ6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpQZXJjZW50OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U3Ryb2tlV2lkdGg6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpHYXBEZWdyZWU6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTdGVwczogTnVtYmVySW5wdXQ7XG5cbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBuelNob3dJbmZvOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgbnpXaWR0aCA9IDEzMjtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBuelN0cm9rZUNvbG9yPzogTnpQcm9ncmVzc1N0cm9rZUNvbG9yVHlwZSA9IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBuelNpemU6ICdkZWZhdWx0JyB8ICdzbWFsbCcgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIG56Rm9ybWF0PzogTnpQcm9ncmVzc0Zvcm1hdHRlcjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpTdWNjZXNzUGVyY2VudD86IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpQZXJjZW50OiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIEBJbnB1dE51bWJlcigpIG56U3Ryb2tlV2lkdGg/OiBudW1iZXIgPSB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgQElucHV0TnVtYmVyKCkgbnpHYXBEZWdyZWU/OiBudW1iZXIgPSB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIG56U3RhdHVzPzogTnpQcm9ncmVzc1N0YXR1c1R5cGU7XG4gIEBJbnB1dCgpIG56VHlwZTogTnpQcm9ncmVzc1R5cGVUeXBlID0gJ2xpbmUnO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIG56R2FwUG9zaXRpb246IE56UHJvZ3Jlc3NHYXBQb3NpdGlvblR5cGUgPSAndG9wJztcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBuelN0cm9rZUxpbmVjYXA6IE56UHJvZ3Jlc3NTdHJva2VMaW5lY2FwVHlwZSA9ICdyb3VuZCc7XG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpTdGVwcz86IG51bWJlcjtcblxuICBzdGVwczogTnpQcm9ncmVzc1N0ZXBJdGVtW10gPSBbXTtcblxuICAvKiogR3JhZGllbnQgc3R5bGUgd2hlbiBgbnpUeXBlYCBpcyBgbGluZWAuICovXG4gIGxpbmVHcmFkaWVudDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqIElmIHVzZXIgdXNlcyBncmFkaWVudCBjb2xvci4gKi9cbiAgaXNHcmFkaWVudCA9IGZhbHNlO1xuXG4gIC8qKiBJZiB0aGUgbGluZWFyIHByb2dyZXNzIGlzIGEgc3RlcCBwcm9ncmVzcy4gKi9cbiAgaXNTdGVwcyA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBFYWNoIHByb2dyZXNzIHdob3NlIGBuelR5cGVgIGlzIGNpcmNsZSBvciBkYXNoYm9hcmQgc2hvdWxkIGhhdmUgdW5pcXVlIGlkIHRvXG4gICAqIGRlZmluZSBgPGxpbmVhckdyYWRpZW50PmAuXG4gICAqL1xuICBncmFkaWVudElkID0gZ3JhZGllbnRJZFNlZWQrKztcblxuICAvKiogUGF0aHMgdG8gcmVuZGVyZWQgaW4gdGhlIHRlbXBsYXRlLiAqL1xuICBwcm9ncmVzc0NpcmNsZVBhdGg6IE56UHJvZ3Jlc3NDaXJjbGVQYXRoW10gPSBbXTtcbiAgY2lyY2xlR3JhZGllbnQ/OiBBcnJheTx7IG9mZnNldDogc3RyaW5nOyBjb2xvcjogc3RyaW5nIH0+O1xuICB0cmFpbFBhdGhTdHlsZTogTmdTdHlsZUludGVyZmFjZSB8IG51bGwgPSBudWxsO1xuICBwYXRoU3RyaW5nPzogc3RyaW5nO1xuICBpY29uITogc3RyaW5nO1xuXG4gIHRyYWNrQnlGbiA9IChpbmRleDogbnVtYmVyKSA9PiBgJHtpbmRleH1gO1xuXG4gIGdldCBmb3JtYXR0ZXIoKTogTnpQcm9ncmVzc0Zvcm1hdHRlciB7XG4gICAgcmV0dXJuIHRoaXMubnpGb3JtYXQgfHwgZGVmYXVsdEZvcm1hdHRlcjtcbiAgfVxuXG4gIGdldCBzdGF0dXMoKTogTnpQcm9ncmVzc1N0YXR1c1R5cGUge1xuICAgIHJldHVybiB0aGlzLm56U3RhdHVzIHx8IHRoaXMuaW5mZXJyZWRTdGF0dXM7XG4gIH1cblxuICBnZXQgc3Ryb2tlV2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5uelN0cm9rZVdpZHRoIHx8ICh0aGlzLm56VHlwZSA9PT0gJ2xpbmUnICYmIHRoaXMubnpTaXplICE9PSAnc21hbGwnID8gOCA6IDYpO1xuICB9XG5cbiAgZ2V0IGlzQ2lyY2xlU3R5bGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpUeXBlID09PSAnY2lyY2xlJyB8fCB0aGlzLm56VHlwZSA9PT0gJ2Rhc2hib2FyZCc7XG4gIH1cblxuICBwcml2YXRlIGNhY2hlZFN0YXR1czogTnpQcm9ncmVzc1N0YXR1c1R5cGUgPSAnbm9ybWFsJztcbiAgcHJpdmF0ZSBpbmZlcnJlZFN0YXR1czogTnpQcm9ncmVzc1N0YXR1c1R5cGUgPSAnbm9ybWFsJztcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG56U3RlcHMsIG56R2FwUG9zaXRpb24sIG56U3Ryb2tlTGluZWNhcCwgbnpTdHJva2VDb2xvciwgbnpHYXBEZWdyZWUsIG56VHlwZSwgbnpTdGF0dXMsIG56UGVyY2VudCwgbnpTdWNjZXNzUGVyY2VudCB9ID0gY2hhbmdlcztcblxuICAgIGlmIChuelN0YXR1cykge1xuICAgICAgdGhpcy5jYWNoZWRTdGF0dXMgPSB0aGlzLm56U3RhdHVzIHx8IHRoaXMuY2FjaGVkU3RhdHVzO1xuICAgIH1cblxuICAgIGlmIChuelBlcmNlbnQgfHwgbnpTdWNjZXNzUGVyY2VudCkge1xuICAgICAgY29uc3QgZmlsbEFsbCA9IHBhcnNlSW50KHRoaXMubnpQZXJjZW50LnRvU3RyaW5nKCksIDEwKSA+PSAxMDA7XG4gICAgICBpZiAoZmlsbEFsbCkge1xuICAgICAgICBpZiAoKGlzTm90TmlsKHRoaXMubnpTdWNjZXNzUGVyY2VudCkgJiYgdGhpcy5uelN1Y2Nlc3NQZXJjZW50ISA+PSAxMDApIHx8IHRoaXMubnpTdWNjZXNzUGVyY2VudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5pbmZlcnJlZFN0YXR1cyA9ICdzdWNjZXNzJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbmZlcnJlZFN0YXR1cyA9IHRoaXMuY2FjaGVkU3RhdHVzO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuelN0YXR1cyB8fCBuelBlcmNlbnQgfHwgbnpTdWNjZXNzUGVyY2VudCkge1xuICAgICAgdGhpcy51cGRhdGVJY29uKCk7XG4gICAgfVxuXG4gICAgaWYgKG56U3Ryb2tlQ29sb3IpIHtcbiAgICAgIHRoaXMuc2V0U3Ryb2tlQ29sb3IoKTtcbiAgICB9XG5cbiAgICBpZiAobnpHYXBQb3NpdGlvbiB8fCBuelN0cm9rZUxpbmVjYXAgfHwgbnpHYXBEZWdyZWUgfHwgbnpUeXBlIHx8IG56UGVyY2VudCB8fCBuelN0cm9rZUNvbG9yKSB7XG4gICAgICB0aGlzLmdldENpcmNsZVBhdGhzKCk7XG4gICAgfVxuXG4gICAgaWYgKG56U3RlcHMpIHtcbiAgICAgIHRoaXMuaXNTdGVwcyA9IGlzTm90TmlsKG56U3RlcHMuY3VycmVudFZhbHVlKTtcbiAgICAgIHRoaXMuZ2V0U3RlcHMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm56Q29uZmlnU2VydmljZVxuICAgICAgLmdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZUljb24oKTtcbiAgICAgICAgdGhpcy5zZXRTdHJva2VDb2xvcigpO1xuICAgICAgICB0aGlzLmdldENpcmNsZVBhdGhzKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlSWNvbigpOiB2b2lkIHtcbiAgICBjb25zdCByZXQgPSBzdGF0dXNJY29uTmFtZU1hcC5nZXQodGhpcy5zdGF0dXMpO1xuICAgIHRoaXMuaWNvbiA9IHJldCA/IHJldCArICh0aGlzLmlzQ2lyY2xlU3R5bGUgPyAnLW8nIDogJy1jaXJjbGUtZmlsbCcpIDogJyc7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIHN0ZXAgcmVuZGVyIGNvbmZpZ3MuXG4gICAqL1xuICBwcml2YXRlIGdldFN0ZXBzKCk6IHZvaWQge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBNYXRoLmZsb29yKHRoaXMubnpTdGVwcyEgKiAodGhpcy5uelBlcmNlbnQgLyAxMDApKTtcbiAgICBjb25zdCBzdGVwV2lkdGggPSB0aGlzLm56U2l6ZSA9PT0gJ3NtYWxsJyA/IDIgOiAxNDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uelN0ZXBzITsgaSsrKSB7XG4gICAgICBsZXQgY29sb3I7XG4gICAgICBpZiAoaSA8PSBjdXJyZW50IC0gMSkge1xuICAgICAgICBjb2xvciA9IHRoaXMubnpTdHJva2VDb2xvcjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0ZXBTdHlsZSA9IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHtjb2xvcn1gLFxuICAgICAgICB3aWR0aDogYCR7c3RlcFdpZHRofXB4YCxcbiAgICAgICAgaGVpZ2h0OiBgJHt0aGlzLnN0cm9rZVdpZHRofXB4YFxuICAgICAgfTtcbiAgICAgIHRoaXMuc3RlcHMucHVzaChzdGVwU3R5bGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgcGF0aHMgd2hlbiB0aGUgdHlwZSBpcyBjaXJjbGUgb3IgZGFzaGJvYXJkLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRDaXJjbGVQYXRocygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNDaXJjbGVTdHlsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlcyA9IGlzTm90TmlsKHRoaXMubnpTdWNjZXNzUGVyY2VudCkgPyBbdGhpcy5uelN1Y2Nlc3NQZXJjZW50ISwgdGhpcy5uelBlcmNlbnRdIDogW3RoaXMubnpQZXJjZW50XTtcblxuICAgIC8vIENhbGN1bGF0ZSBzaGFyZWQgc3R5bGVzLlxuICAgIGNvbnN0IHJhZGl1cyA9IDUwIC0gdGhpcy5zdHJva2VXaWR0aCAvIDI7XG4gICAgY29uc3QgZ2FwUG9zaXRpb24gPSB0aGlzLm56R2FwUG9zaXRpb24gfHwgKHRoaXMubnpUeXBlID09PSAnY2lyY2xlJyA/ICd0b3AnIDogJ2JvdHRvbScpO1xuICAgIGNvbnN0IGxlbiA9IE1hdGguUEkgKiAyICogcmFkaXVzO1xuICAgIGNvbnN0IGdhcERlZ3JlZSA9IHRoaXMubnpHYXBEZWdyZWUgfHwgKHRoaXMubnpUeXBlID09PSAnY2lyY2xlJyA/IDAgOiA3NSk7XG5cbiAgICBsZXQgYmVnaW5Qb3NpdGlvblggPSAwO1xuICAgIGxldCBiZWdpblBvc2l0aW9uWSA9IC1yYWRpdXM7XG4gICAgbGV0IGVuZFBvc2l0aW9uWCA9IDA7XG4gICAgbGV0IGVuZFBvc2l0aW9uWSA9IHJhZGl1cyAqIC0yO1xuXG4gICAgc3dpdGNoIChnYXBQb3NpdGlvbikge1xuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIGJlZ2luUG9zaXRpb25YID0gLXJhZGl1cztcbiAgICAgICAgYmVnaW5Qb3NpdGlvblkgPSAwO1xuICAgICAgICBlbmRQb3NpdGlvblggPSByYWRpdXMgKiAyO1xuICAgICAgICBlbmRQb3NpdGlvblkgPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgYmVnaW5Qb3NpdGlvblggPSByYWRpdXM7XG4gICAgICAgIGJlZ2luUG9zaXRpb25ZID0gMDtcbiAgICAgICAgZW5kUG9zaXRpb25YID0gcmFkaXVzICogLTI7XG4gICAgICAgIGVuZFBvc2l0aW9uWSA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgYmVnaW5Qb3NpdGlvblkgPSByYWRpdXM7XG4gICAgICAgIGVuZFBvc2l0aW9uWSA9IHJhZGl1cyAqIDI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG5cbiAgICB0aGlzLnBhdGhTdHJpbmcgPSBgTSA1MCw1MCBtICR7YmVnaW5Qb3NpdGlvblh9LCR7YmVnaW5Qb3NpdGlvbll9XG4gICAgICAgYSAke3JhZGl1c30sJHtyYWRpdXN9IDAgMSAxICR7ZW5kUG9zaXRpb25YfSwkey1lbmRQb3NpdGlvbll9XG4gICAgICAgYSAke3JhZGl1c30sJHtyYWRpdXN9IDAgMSAxICR7LWVuZFBvc2l0aW9uWH0sJHtlbmRQb3NpdGlvbll9YDtcblxuICAgIHRoaXMudHJhaWxQYXRoU3R5bGUgPSB7XG4gICAgICBzdHJva2VEYXNoYXJyYXk6IGAke2xlbiAtIGdhcERlZ3JlZX1weCAke2xlbn1weGAsXG4gICAgICBzdHJva2VEYXNob2Zmc2V0OiBgLSR7Z2FwRGVncmVlIC8gMn1weGAsXG4gICAgICB0cmFuc2l0aW9uOiAnc3Ryb2tlLWRhc2hvZmZzZXQgLjNzIGVhc2UgMHMsIHN0cm9rZS1kYXNoYXJyYXkgLjNzIGVhc2UgMHMsIHN0cm9rZSAuM3MnXG4gICAgfTtcblxuICAgIC8vIENhbGN1bGF0ZSBzdHlsZXMgZm9yIGVhY2ggcGF0aC5cbiAgICB0aGlzLnByb2dyZXNzQ2lyY2xlUGF0aCA9IHZhbHVlc1xuICAgICAgLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGlzU3VjY2Vzc1BlcmNlbnQgPSB2YWx1ZXMubGVuZ3RoID09PSAyICYmIGluZGV4ID09PSAwO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0cm9rZTogdGhpcy5pc0dyYWRpZW50ICYmICFpc1N1Y2Nlc3NQZXJjZW50ID8gYHVybCgjZ3JhZGllbnQtJHt0aGlzLmdyYWRpZW50SWR9KWAgOiBudWxsLFxuICAgICAgICAgIHN0cm9rZVBhdGhTdHlsZToge1xuICAgICAgICAgICAgc3Ryb2tlOiAhdGhpcy5pc0dyYWRpZW50ID8gKGlzU3VjY2Vzc1BlcmNlbnQgPyBzdGF0dXNDb2xvck1hcC5nZXQoJ3N1Y2Nlc3MnKSA6ICh0aGlzLm56U3Ryb2tlQ29sb3IgYXMgc3RyaW5nKSkgOiBudWxsLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJ3N0cm9rZS1kYXNob2Zmc2V0IC4zcyBlYXNlIDBzLCBzdHJva2UtZGFzaGFycmF5IC4zcyBlYXNlIDBzLCBzdHJva2UgLjNzLCBzdHJva2Utd2lkdGggLjA2cyBlYXNlIC4zcycsXG4gICAgICAgICAgICBzdHJva2VEYXNoYXJyYXk6IGAkeygodmFsdWUgfHwgMCkgLyAxMDApICogKGxlbiAtIGdhcERlZ3JlZSl9cHggJHtsZW59cHhgLFxuICAgICAgICAgICAgc3Ryb2tlRGFzaG9mZnNldDogYC0ke2dhcERlZ3JlZSAvIDJ9cHhgXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICAgIC5yZXZlcnNlKCk7XG4gIH1cblxuICBwcml2YXRlIHNldFN0cm9rZUNvbG9yKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5uelN0cm9rZUNvbG9yO1xuICAgIGNvbnN0IGlzR3JhZGllbnQgPSAodGhpcy5pc0dyYWRpZW50ID0gISFjb2xvciAmJiB0eXBlb2YgY29sb3IgIT09ICdzdHJpbmcnKTtcbiAgICBpZiAoaXNHcmFkaWVudCAmJiAhdGhpcy5pc0NpcmNsZVN0eWxlKSB7XG4gICAgICB0aGlzLmxpbmVHcmFkaWVudCA9IGhhbmRsZUxpbmVhckdyYWRpZW50KGNvbG9yIGFzIE56UHJvZ3Jlc3NDb2xvckdyYWRpZW50KTtcbiAgICB9IGVsc2UgaWYgKGlzR3JhZGllbnQgJiYgdGhpcy5pc0NpcmNsZVN0eWxlKSB7XG4gICAgICB0aGlzLmNpcmNsZUdyYWRpZW50ID0gaGFuZGxlQ2lyY2xlR3JhZGllbnQodGhpcy5uelN0cm9rZUNvbG9yIGFzIE56UHJvZ3Jlc3NHcmFkaWVudFByb2dyZXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5saW5lR3JhZGllbnQgPSBudWxsO1xuICAgICAgdGhpcy5jaXJjbGVHcmFkaWVudCA9IFtdO1xuICAgIH1cbiAgfVxufVxuIl19