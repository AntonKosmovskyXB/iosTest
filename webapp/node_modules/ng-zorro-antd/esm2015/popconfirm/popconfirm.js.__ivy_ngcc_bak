/**
 * @fileoverview added by tsickle
 * Generated from: popconfirm.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, Directive, ElementRef, EventEmitter, Host, Input, Optional, Output, Renderer2, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { zoomBigMotion } from 'ng-zorro-antd/core/animation';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { NzTooltipBaseDirective, NzToolTipComponent } from 'ng-zorro-antd/tooltip';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
export class NzPopconfirmDirective extends NzTooltipBaseDirective {
    /**
     * @param {?} elementRef
     * @param {?} hostView
     * @param {?} resolver
     * @param {?} renderer
     * @param {?=} noAnimation
     */
    constructor(elementRef, hostView, resolver, renderer, noAnimation) {
        super(elementRef, hostView, resolver, renderer, noAnimation);
        this.nzCondition = false;
        this.nzPopconfirmShowArrow = true;
        /**
         * @deprecated 10.0.0. This is deprecated and going to be removed in 10.0.0.
         * Please use a more specific API. Like `nzTooltipTrigger`.
         */
        this.nzTrigger = 'click';
        // tslint:disable-next-line:no-output-rename
        this.specificVisibleChange = new EventEmitter();
        this.nzOnCancel = new EventEmitter();
        this.nzOnConfirm = new EventEmitter();
        this.componentFactory = this.resolver.resolveComponentFactory(NzPopconfirmComponent);
        this.needProxyProperties = [
            'nzOverlayClassName',
            'nzOverlayStyle',
            'nzMouseEnterDelay',
            'nzMouseLeaveDelay',
            'nzVisible',
            'nzOkText',
            'nzOkType',
            'nzCancelText',
            'nzCondition',
            'nzIcon',
            'nzPopconfirmShowArrow'
        ];
    }
    /**
     * @override
     * @protected
     * @return {?}
     */
    createComponent() {
        super.createComponent();
        ((/** @type {?} */ (this.component))).nzOnCancel.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.nzOnCancel.emit();
        }));
        ((/** @type {?} */ (this.component))).nzOnConfirm.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.nzOnConfirm.emit();
        }));
    }
}
NzPopconfirmDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-popconfirm]',
                exportAs: 'nzPopconfirm',
                host: {
                    '[class.ant-popover-open]': 'visible'
                }
            },] }
];
/** @nocollapse */
NzPopconfirmDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: Renderer2 },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzPopconfirmDirective.propDecorators = {
    specificTitle: [{ type: Input, args: ['nzPopconfirmTitle',] }],
    directiveNameTitle: [{ type: Input, args: ['nz-popconfirm',] }],
    specificTrigger: [{ type: Input, args: ['nzPopconfirmTrigger',] }],
    specificPlacement: [{ type: Input, args: ['nzPopconfirmPlacement',] }],
    specificOrigin: [{ type: Input, args: ['nzPopconfirmOrigin',] }],
    specificMouseEnterDelay: [{ type: Input, args: ['nzPopconfirmMouseEnterDelay',] }],
    specificMouseLeaveDelay: [{ type: Input, args: ['nzPopconfirmMouseLeaveDelay',] }],
    specificOverlayClassName: [{ type: Input, args: ['nzPopconfirmOverlayClassName',] }],
    specificOverlayStyle: [{ type: Input, args: ['nzPopconfirmOverlayStyle',] }],
    nzOkText: [{ type: Input }],
    nzOkType: [{ type: Input }],
    nzCancelText: [{ type: Input }],
    nzIcon: [{ type: Input }],
    nzCondition: [{ type: Input }],
    nzPopconfirmShowArrow: [{ type: Input }],
    nzTrigger: [{ type: Input }],
    specificVisible: [{ type: Input, args: ['nzPopconfirmVisible',] }],
    specificVisibleChange: [{ type: Output, args: ['nzPopconfirmVisibleChange',] }],
    nzOnCancel: [{ type: Output }],
    nzOnConfirm: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzPopconfirmDirective.prototype, "nzCondition", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzPopconfirmDirective.prototype, "nzPopconfirmShowArrow", void 0);
if (false) {
    /** @type {?} */
    NzPopconfirmDirective.ngAcceptInputType_nzCondition;
    /** @type {?} */
    NzPopconfirmDirective.ngAcceptInputType_nzPopconfirmShowArrow;
    /** @type {?} */
    NzPopconfirmDirective.prototype.specificTitle;
    /** @type {?} */
    NzPopconfirmDirective.prototype.directiveNameTitle;
    /** @type {?} */
    NzPopconfirmDirective.prototype.specificTrigger;
    /** @type {?} */
    NzPopconfirmDirective.prototype.specificPlacement;
    /** @type {?} */
    NzPopconfirmDirective.prototype.specificOrigin;
    /** @type {?} */
    NzPopconfirmDirective.prototype.specificMouseEnterDelay;
    /** @type {?} */
    NzPopconfirmDirective.prototype.specificMouseLeaveDelay;
    /** @type {?} */
    NzPopconfirmDirective.prototype.specificOverlayClassName;
    /** @type {?} */
    NzPopconfirmDirective.prototype.specificOverlayStyle;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOkText;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOkType;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzCancelText;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzIcon;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzCondition;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzPopconfirmShowArrow;
    /**
     * @deprecated 10.0.0. This is deprecated and going to be removed in 10.0.0.
     * Please use a more specific API. Like `nzTooltipTrigger`.
     * @type {?}
     */
    NzPopconfirmDirective.prototype.nzTrigger;
    /** @type {?} */
    NzPopconfirmDirective.prototype.specificVisible;
    /** @type {?} */
    NzPopconfirmDirective.prototype.specificVisibleChange;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOnCancel;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOnConfirm;
    /**
     * @type {?}
     * @protected
     */
    NzPopconfirmDirective.prototype.componentFactory;
    /**
     * @type {?}
     * @protected
     */
    NzPopconfirmDirective.prototype.needProxyProperties;
}
export class NzPopconfirmComponent extends NzToolTipComponent {
    /**
     * @param {?} cdr
     * @param {?=} noAnimation
     */
    constructor(cdr, noAnimation) {
        super(cdr, noAnimation);
        this.noAnimation = noAnimation;
        this.nzCondition = false;
        this.nzPopconfirmShowArrow = true;
        this.nzOkType = 'primary';
        this.nzOnCancel = new Subject();
        this.nzOnConfirm = new Subject();
        this._trigger = 'click';
        this._prefix = 'ant-popover-placement';
        this._hasBackdrop = true;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
        this.nzOnCancel.complete();
        this.nzOnConfirm.complete();
    }
    /**
     * @override
     * @return {?}
     */
    show() {
        if (!this.nzCondition) {
            super.show();
        }
        else {
            this.onConfirm();
        }
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.nzOnCancel.next();
        super.hide();
    }
    /**
     * @return {?}
     */
    onConfirm() {
        this.nzOnConfirm.next();
        super.hide();
    }
}
NzPopconfirmComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-popconfirm',
                exportAs: 'nzPopconfirmComponent',
                preserveWhitespaces: false,
                animations: [zoomBigMotion],
                template: `
    <ng-template
      #overlay="cdkConnectedOverlay"
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayHasBackdrop]="_hasBackdrop"
      (backdropClick)="hide()"
      (detach)="hide()"
      (positionChange)="onPositionChange($event)"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayOpen]="_visible"
    >
      <div
        class="ant-popover"
        [ngClass]="_classMap"
        [ngStyle]="nzOverlayStyle"
        [@.disabled]="noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@zoomBigMotion]="'active'"
      >
        <div class="ant-popover-content">
          <div class="ant-popover-arrow" *ngIf="nzPopconfirmShowArrow"></div>
          <div class="ant-popover-inner">
            <div>
              <div class="ant-popover-inner-content">
                <div class="ant-popover-message">
                  <ng-container *nzStringTemplateOutlet="nzTitle">
                    <ng-container *nzStringTemplateOutlet="nzIcon; let icon">
                      <i nz-icon [nzType]="icon || 'exclamation-circle'" nzTheme="fill"></i>
                    </ng-container>
                    <div class="ant-popover-message-title">{{ nzTitle }}</div>
                  </ng-container>
                </div>
                <div class="ant-popover-buttons">
                  <button nz-button [nzSize]="'small'" (click)="onCancel()">
                    <ng-container *ngIf="nzCancelText">{{ nzCancelText }}</ng-container>
                    <ng-container *ngIf="!nzCancelText">{{ 'Modal.cancelText' | nzI18n }}</ng-container>
                  </button>
                  <button nz-button [nzSize]="'small'" [nzType]="nzOkType" (click)="onConfirm()">
                    <ng-container *ngIf="nzOkText">{{ nzOkText }}</ng-container>
                    <ng-container *ngIf="!nzOkText">{{ 'Modal.okText' | nzI18n }}</ng-container>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `
            }] }
];
/** @nocollapse */
NzPopconfirmComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
if (false) {
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzCancelText;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzCondition;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzPopconfirmShowArrow;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzIcon;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzOkText;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzOkType;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzOnCancel;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzOnConfirm;
    /**
     * @type {?}
     * @protected
     */
    NzPopconfirmComponent.prototype._trigger;
    /** @type {?} */
    NzPopconfirmComponent.prototype._prefix;
    /** @type {?} */
    NzPopconfirmComponent.prototype._hasBackdrop;
    /** @type {?} */
    NzPopconfirmComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wY29uZmlybS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcG9wY29uZmlybS8iLCJzb3VyY2VzIjpbInBvcGNvbmZpcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFFVCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFFTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFFVCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUd6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLGtCQUFrQixFQUFvQixNQUFNLHVCQUF1QixDQUFDO0FBQ3JHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUzNDLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxzQkFBc0I7Ozs7Ozs7O0lBbUQvRCxZQUNFLFVBQXNCLEVBQ3RCLFFBQTBCLEVBQzFCLFFBQWtDLEVBQ2xDLFFBQW1CLEVBQ0MsV0FBb0M7UUFFeEQsS0FBSyxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQXpDdEMsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsMEJBQXFCLEdBQVksSUFBSSxDQUFDOzs7OztRQU10RCxjQUFTLEdBQXFCLE9BQU8sQ0FBQzs7UUFLRCwwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBVyxD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Q2pDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFVBQVUsRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtEVDthQUNGOzs7O1lBeEtDLGlCQUFpQjtZQW1CVixzQkFBc0IsdUJBc0tRLElBQUksWUFBSSxRQUFROzs7O0lBZnJELDZDQUFzQjs7SUFDdEIsNENBQW9COztJQUNwQixzREFBNkI7O0lBQzdCLHVDQUFvQzs7SUFDcEMseUNBQWtCOztJQUNsQix5Q0FBbUM7O0lBRW5DLDJDQUEwQzs7SUFDMUMsNENBQTJDOzs7OztJQUUzQyx5Q0FBK0M7O0lBRS9DLHdDQUFrQzs7SUFDbEMsNkNBQW9COztJQUVnQiw0Q0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekJ1dHRvblR5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2J1dHRvbic7XG5pbXBvcnQgeyB6b29tQmlnTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE5nU3R5bGVJbnRlcmZhY2UsIE56VFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgTnpUb29sdGlwQmFzZURpcmVjdGl2ZSwgTnpUb29sVGlwQ29tcG9uZW50LCBOelRvb2x0aXBUcmlnZ2VyIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LXBvcGNvbmZpcm1dJyxcbiAgZXhwb3J0QXM6ICduelBvcGNvbmZpcm0nLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtcG9wb3Zlci1vcGVuXSc6ICd2aXNpYmxlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56UG9wY29uZmlybURpcmVjdGl2ZSBleHRlbmRzIE56VG9vbHRpcEJhc2VEaXJlY3RpdmUge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpDb25kaXRpb246IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256UG9wY29uZmlybVNob3dBcnJvdzogQm9vbGVhbklucHV0O1xuXG4gIEBJbnB1dCgnbnpQb3Bjb25maXJtVGl0bGUnKSBzcGVjaWZpY1RpdGxlPzogTnpUU1R5cGU7XG4gIEBJbnB1dCgnbnotcG9wY29uZmlybScpIGRpcmVjdGl2ZU5hbWVUaXRsZT86IE56VFNUeXBlIHwgbnVsbDtcbiAgQElucHV0KCduelBvcGNvbmZpcm1UcmlnZ2VyJykgc3BlY2lmaWNUcmlnZ2VyPzogTnpUb29sdGlwVHJpZ2dlcjtcbiAgQElucHV0KCduelBvcGNvbmZpcm1QbGFjZW1lbnQnKSBzcGVjaWZpY1BsYWNlbWVudD86IHN0cmluZztcbiAgQElucHV0KCduelBvcGNvbmZpcm1PcmlnaW4nKSBzcGVjaWZpY09yaWdpbj86IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICBASW5wdXQoJ256UG9wY29uZmlybU1vdXNlRW50ZXJEZWxheScpIHNwZWNpZmljTW91c2VFbnRlckRlbGF5PzogbnVtYmVyO1xuICBASW5wdXQoJ256UG9wY29uZmlybU1vdXNlTGVhdmVEZWxheScpIHNwZWNpZmljTW91c2VMZWF2ZURlbGF5PzogbnVtYmVyO1xuICBASW5wdXQoJ256UG9wY29uZmlybU92ZXJsYXlDbGFzc05hbWUnKSBzcGVjaWZpY092ZXJsYXlDbGFzc05hbWU/OiBzdHJpbmc7XG4gIEBJbnB1dCgnbnpQb3Bjb25maXJtT3ZlcmxheVN0eWxlJykgc3BlY2lmaWNPdmVybGF5U3R5bGU/OiBOZ1N0eWxlSW50ZXJmYWNlO1xuICBASW5wdXQoKSBuek9rVGV4dD86IHN0cmluZztcbiAgQElucHV0KCkgbnpPa1R5cGU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56Q2FuY2VsVGV4dD86IHN0cmluZztcbiAgQElucHV0KCkgbnpJY29uPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNvbmRpdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpQb3Bjb25maXJtU2hvd0Fycm93OiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgMTAuMC4wLiBUaGlzIGlzIGRlcHJlY2F0ZWQgYW5kIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gMTAuMC4wLlxuICAgKiBQbGVhc2UgdXNlIGEgbW9yZSBzcGVjaWZpYyBBUEkuIExpa2UgYG56VG9vbHRpcFRyaWdnZXJgLlxuICAgKi9cbiAgQElucHV0KCkgbnpUcmlnZ2VyOiBOelRvb2x0aXBUcmlnZ2VyID0gJ2NsaWNrJztcblxuICBASW5wdXQoJ256UG9wY29uZmlybVZpc2libGUnKSBzcGVjaWZpY1Zpc2libGU/OiBib29sZWFuO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1vdXRwdXQtcmVuYW1lXG4gIEBPdXRwdXQoJ256UG9wY29uZmlybVZpc2libGVDaGFuZ2UnKSByZWFkb25seSBzcGVjaWZpY1Zpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQ2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkNvbmZpcm0gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvbXBvbmVudEZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8TnpQb3Bjb25maXJtQ29tcG9uZW50PiA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoXG4gICAgTnpQb3Bjb25maXJtQ29tcG9uZW50XG4gICk7XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IG5lZWRQcm94eVByb3BlcnRpZXMgPSBbXG4gICAgJ256T3ZlcmxheUNsYXNzTmFtZScsXG4gICAgJ256T3ZlcmxheVN0eWxlJyxcbiAgICAnbnpNb3VzZUVudGVyRGVsYXknLFxuICAgICduek1vdXNlTGVhdmVEZWxheScsXG4gICAgJ256VmlzaWJsZScsXG4gICAgJ256T2tUZXh0JyxcbiAgICAnbnpPa1R5cGUnLFxuICAgICduekNhbmNlbFRleHQnLFxuICAgICduekNvbmRpdGlvbicsXG4gICAgJ256SWNvbicsXG4gICAgJ256UG9wY29uZmlybVNob3dBcnJvdydcbiAgXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIGhvc3RWaWV3OiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxuICApIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCBob3N0VmlldywgcmVzb2x2ZXIsIHJlbmRlcmVyLCBub0FuaW1hdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90ZWN0ZWQgY3JlYXRlQ29tcG9uZW50KCk6IHZvaWQge1xuICAgIHN1cGVyLmNyZWF0ZUNvbXBvbmVudCgpO1xuXG4gICAgKHRoaXMuY29tcG9uZW50IGFzIE56UG9wY29uZmlybUNvbXBvbmVudCkubnpPbkNhbmNlbC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubnpPbkNhbmNlbC5lbWl0KCk7XG4gICAgfSk7XG4gICAgKHRoaXMuY29tcG9uZW50IGFzIE56UG9wY29uZmlybUNvbXBvbmVudCkubnpPbkNvbmZpcm0ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLm56T25Db25maXJtLmVtaXQoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotcG9wY29uZmlybScsXG4gIGV4cG9ydEFzOiAnbnpQb3Bjb25maXJtQ29tcG9uZW50JyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGFuaW1hdGlvbnM6IFt6b29tQmlnTW90aW9uXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGVcbiAgICAgICNvdmVybGF5PVwiY2RrQ29ubmVjdGVkT3ZlcmxheVwiXG4gICAgICBjZGtDb25uZWN0ZWRPdmVybGF5XG4gICAgICBuekNvbm5lY3RlZE92ZXJsYXlcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cIm9yaWdpblwiXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheUhhc0JhY2tkcm9wXT1cIl9oYXNCYWNrZHJvcFwiXG4gICAgICAoYmFja2Ryb3BDbGljayk9XCJoaWRlKClcIlxuICAgICAgKGRldGFjaCk9XCJoaWRlKClcIlxuICAgICAgKHBvc2l0aW9uQ2hhbmdlKT1cIm9uUG9zaXRpb25DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJfcG9zaXRpb25zXCJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3Blbl09XCJfdmlzaWJsZVwiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImFudC1wb3BvdmVyXCJcbiAgICAgICAgW25nQ2xhc3NdPVwiX2NsYXNzTWFwXCJcbiAgICAgICAgW25nU3R5bGVdPVwibnpPdmVybGF5U3R5bGVcIlxuICAgICAgICBbQC5kaXNhYmxlZF09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXG4gICAgICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcbiAgICAgICAgW0B6b29tQmlnTW90aW9uXT1cIidhY3RpdmUnXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC1wb3BvdmVyLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXBvcG92ZXItYXJyb3dcIiAqbmdJZj1cIm56UG9wY29uZmlybVNob3dBcnJvd1wiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcG9wb3Zlci1pbm5lclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1wb3BvdmVyLWlubmVyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXBvcG92ZXItbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56VGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56SWNvbjsgbGV0IGljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBuei1pY29uIFtuelR5cGVdPVwiaWNvbiB8fCAnZXhjbGFtYXRpb24tY2lyY2xlJ1wiIG56VGhlbWU9XCJmaWxsXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1wb3BvdmVyLW1lc3NhZ2UtdGl0bGVcIj57eyBuelRpdGxlIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXBvcG92ZXItYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBuei1idXR0b24gW256U2l6ZV09XCInc21hbGwnXCIgKGNsaWNrKT1cIm9uQ2FuY2VsKClcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56Q2FuY2VsVGV4dFwiPnt7IG56Q2FuY2VsVGV4dCB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIW56Q2FuY2VsVGV4dFwiPnt7ICdNb2RhbC5jYW5jZWxUZXh0JyB8IG56STE4biB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG56LWJ1dHRvbiBbbnpTaXplXT1cIidzbWFsbCdcIiBbbnpUeXBlXT1cIm56T2tUeXBlXCIgKGNsaWNrKT1cIm9uQ29uZmlybSgpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuek9rVGV4dFwiPnt7IG56T2tUZXh0IH19PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhbnpPa1RleHRcIj57eyAnTW9kYWwub2tUZXh0JyB8IG56STE4biB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOelBvcGNvbmZpcm1Db21wb25lbnQgZXh0ZW5kcyBOelRvb2xUaXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBuekNhbmNlbFRleHQ/OiBzdHJpbmc7XG4gIG56Q29uZGl0aW9uID0gZmFsc2U7XG4gIG56UG9wY29uZmlybVNob3dBcnJvdyA9IHRydWU7XG4gIG56SWNvbj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBuek9rVGV4dD86IHN0cmluZztcbiAgbnpPa1R5cGU6IE56QnV0dG9uVHlwZSA9ICdwcmltYXJ5JztcblxuICByZWFkb25seSBuek9uQ2FuY2VsID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcmVhZG9ubHkgbnpPbkNvbmZpcm0gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIHByb3RlY3RlZCBfdHJpZ2dlcjogTnpUb29sdGlwVHJpZ2dlciA9ICdjbGljayc7XG5cbiAgX3ByZWZpeCA9ICdhbnQtcG9wb3Zlci1wbGFjZW1lbnQnO1xuICBfaGFzQmFja2Ryb3AgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSkge1xuICAgIHN1cGVyKGNkciwgbm9BbmltYXRpb24pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcblxuICAgIHRoaXMubnpPbkNhbmNlbC5jb21wbGV0ZSgpO1xuICAgIHRoaXMubnpPbkNvbmZpcm0uY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHNob3coKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm56Q29uZGl0aW9uKSB7XG4gICAgICBzdXBlci5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25Db25maXJtKCk7XG4gICAgfVxuICB9XG5cbiAgb25DYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5uek9uQ2FuY2VsLm5leHQoKTtcbiAgICBzdXBlci5oaWRlKCk7XG4gIH1cblxuICBvbkNvbmZpcm0oKTogdm9pZCB7XG4gICAgdGhpcy5uek9uQ29uZmlybS5uZXh0KCk7XG4gICAgc3VwZXIuaGlkZSgpO1xuICB9XG59XG4iXX0=