/**
 * @fileoverview added by tsickle
 * Generated from: notification-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { warnDeprecation } from 'ng-zorro-antd/core/logger';
import { toCssPixel } from 'ng-zorro-antd/core/util';
import { NzMNContainerComponent } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'notification';
/** @type {?} */
const NZ_NOTIFICATION_DEFAULT_CONFIG = {
    nzTop: '24px',
    nzBottom: '24px',
    nzPlacement: 'topRight',
    nzDuration: 4500,
    nzMaxStack: 7,
    nzPauseOnHover: true,
    nzAnimate: true
};
export class NzNotificationContainerComponent extends NzMNContainerComponent {
    /**
     * @param {?} cdr
     * @param {?} nzConfigService
     */
    constructor(cdr, nzConfigService) {
        super(cdr, nzConfigService);
        // initialized by parent class constructor
        this.instances = [];
        this.topLeftInstances = [];
        this.topRightInstances = [];
        this.bottomLeftInstances = [];
        this.bottomRightInstances = [];
    }
    /**
     * @param {?} notification
     * @return {?}
     */
    create(notification) {
        /** @type {?} */
        const noti = this.onCreate(notification);
        /** @type {?} */
        const key = noti.options.nzKey;
        /** @type {?} */
        const notificationWithSameKey = this.instances.find((/**
         * @param {?} msg
         * @return {?}
         */
        msg => msg.options.nzKey === ((/** @type {?} */ (notification.options))).nzKey));
        if (key && notificationWithSameKey) {
            this.replaceNotification(notificationWithSameKey, noti);
        }
        else {
            if (this.instances.length >= this.config.nzMaxStack) {
                this.instances = this.instances.slice(1);
            }
            this.instances = [...this.instances, noti];
        }
        this.readyInstances();
        return noti;
    }
    /**
     * @protected
     * @param {?} instance
     * @return {?}
     */
    onCreate(instance) {
        instance.options = this.mergeOptions(instance.options);
        instance.onClose = new Subject();
        instance.onClick = new Subject();
        return (/** @type {?} */ (instance));
    }
    /**
     * @protected
     * @return {?}
     */
    subscribeConfigChange() {
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => this.updateConfig()));
    }
    /**
     * @protected
     * @return {?}
     */
    updateConfig() {
        this.config = Object.assign(Object.assign(Object.assign({}, NZ_NOTIFICATION_DEFAULT_CONFIG), this.config), this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME));
        this.top = toCssPixel((/** @type {?} */ (this.config.nzTop)));
        this.bottom = toCssPixel((/** @type {?} */ (this.config.nzBottom)));
        this.cdr.markForCheck();
    }
    /**
     * @private
     * @param {?} old
     * @param {?} _new
     * @return {?}
     */
    replaceNotification(old, _new) {
        old.title = _new.title;
        old.content = _new.content;
        old.template = _new.template;
        old.type = _new.type;
        old.options = _new.options;
    }
    /**
     * @protected
     * @return {?}
     */
    readyInstances() {
        this.topLeftInstances = this.instances.filter((/**
         * @param {?} m
         * @return {?}
         */
        m => m.options.nzPlacement === 'topLeft'));
        this.topRightInstances = this.instances.filter((/**
         * @param {?} m
         * @return {?}
         */
        m => m.options.nzPlacement === 'topRight' || !m.options.nzPlacement));
        this.bottomLeftInstances = this.instances.filter((/**
         * @param {?} m
         * @return {?}
         */
        m => m.options.nzPlacement === 'bottomLeft'));
        this.bottomRightInstances = this.instances.filter((/**
         * @param {?} m
         * @return {?}
         */
        m => m.options.nzPlacement === 'bottomRight'));
        this.cdr.detectChanges();
    }
    /**
     * @protected
     * @param {?=} options
     * @return {?}
     */
    mergeOptions(options) {
        const { nzPosition } = options !== null && options !== void 0 ? options : {};
        if (nzPosition) {
            warnDeprecation('`nzPosition` of NzNotificationDataOptions is deprecated and would be removed in 10.0.0. Use `nzPlacement` instead.');
        }
        const { nzDuration, nzAnimate, nzPauseOnHover, nzPlacement } = this.config;
        return Object.assign({ nzDuration, nzAnimate, nzPauseOnHover, nzPlacement: nzPlacement || nzPosition }, options);
    }
}
NzNotificationContainerComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-notification-container',
                exportAs: 'nzNotificationContainer',
                preserveWhitespaces: false,
                template: `
    <div class="ant-notification ant-notification-topLeft" [style.top]="top" [style.left]="'0px'">
      <nz-notification
        *ngFor="let instance of topLeftInstances"
        [instance]="instance"
        [placement]="config.nzPlacement"
        (destroyed)="remove($event.id, $event.userAction)"
      ></nz-notification>
    </div>
    <div class="ant-notification ant-notification-topRight" [style.top]="top" [style.right]="'0px'">
      <nz-notification
        *ngFor="let instance of topRightInstances"
        [instance]="instance"
        [placement]="config.nzPlacement"
        (destroyed)="remove($event.id, $event.userAction)"
      ></nz-notification>
    </div>
    <div class="ant-notification ant-notification-bottomLeft" [style.bottom]="bottom" [style.left]="'0px'">
      <nz-notification
        *ngFor="let instance of bottomLeftInstances"
        [instance]="instance"
        [placement]="config.nzPlacement"
        (destroyed)="remove($event.id, $event.userAction)"
      ></nz-notification>
    </div>
    <div class="ant-notification ant-notification-bottomRight" [style.bottom]="bottom" [style.right]="'0px'">
      <nz-notification
        *ngFor="let instance of bottomRightInstances"
        [instance]="instance"
        [placement]="config.nzPlacement"
        (destroyed)="remove($event.id, $event.userAction)"
      ></nz-notification>
    </div>
  `
            }] }
];
/** @nocollapse */
NzNotificationContainerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzConfigService }
];
if (false) {
    /** @type {?} */
    NzNotificationContainerComponent.prototype.bottom;
    /** @type {?} */
    NzNotificationContainerComponent.prototype.top;
    /** @type {?} */
    NzNotificationContainerComponent.prototype.config;
    /** @type {?} */
    NzNotificationContainerComponent.prototype.instances;
    /** @type {?} */
    NzNotificationContainerComponent.prototype.topLeftInstances;
    /** @type {?} */
    NzNotificationContainerComponent.prototype.topRightInstances;
    /** @type {?} */
    NzNotificationContainerComponent.prototype.bottomLeftInstances;
    /** @type {?} */
    NzNotificationContainerComponent.prototype.bottomRightInstances;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL25vdGlmaWNhdGlvbi8iLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFzQixlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXJELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztNQUlyQyx3QkFBd0IsR0FBRyxjQUFjOztNQUV6Qyw4QkFBOEIsR0FBaUM7SUFDbkUsS0FBSyxFQUFFLE1BQU07SUFDYixRQUFRLEVBQUUsTUFBTTtJQUNoQixXQUFXLEVBQUUsVUFBVTtJQUN2QixVQUFVLEVBQUUsSUFBSTtJQUNoQixVQUFVLEVBQUUsQ0FBQztJQUNiLGNBQWMsRUFBRSxJQUFJO0lBQ3BCLFNBQVMsRUFBRSxJQUFJO0NBQ2hCO0FBMkNELE1BQU0sT0FBTyxnQ0FBaUMsU0FBUSxzQkFBc0I7Ozs7O0lBVTFFLFlBQVksR0FBc0IsRUFBRSxlQUFnQztRQUNsRSxLQUFLLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDOztRQVA5QixjQUFTLEdBQXdDLEVBQUUsQ0FBQztRQUNwRCxxQkFBZ0IsR0FBd0MsRUFBRSxDQUFDO1FBQzNELHNCQUFpQixHQUF3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WUFoSUYsU0FBUyxTQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQ1Q7YUFDRjs7OztZQS9EaUMsaUJBQWlCO1lBQ3RCLGVBQWU7Ozs7SUFnRTFDLGtEQUF1Qjs7SUFDdkIsK0NBQW9COztJQUNwQixrREFBc0M7O0lBQ3RDLHFEQUFvRDs7SUFDcEQsNERBQTJEOztJQUMzRCw2REFBNEQ7O0lBQzVELCtEQUE4RDs7SUFDOUQsZ0VBQStEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25Db25maWcsIE56Q29uZmlnU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgd2FybkRlcHJlY2F0aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2xvZ2dlcic7XG5pbXBvcnQgeyB0b0Nzc1BpeGVsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuXG5pbXBvcnQgeyBOek1OQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZXNzYWdlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTnpOb3RpZmljYXRpb25EYXRhLCBOek5vdGlmaWNhdGlvbkRhdGFPcHRpb25zIH0gZnJvbSAnLi90eXBpbmdzJztcblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ25vdGlmaWNhdGlvbic7XG5cbmNvbnN0IE5aX05PVElGSUNBVElPTl9ERUZBVUxUX0NPTkZJRzogUmVxdWlyZWQ8Tm90aWZpY2F0aW9uQ29uZmlnPiA9IHtcbiAgbnpUb3A6ICcyNHB4JyxcbiAgbnpCb3R0b206ICcyNHB4JyxcbiAgbnpQbGFjZW1lbnQ6ICd0b3BSaWdodCcsXG4gIG56RHVyYXRpb246IDQ1MDAsXG4gIG56TWF4U3RhY2s6IDcsXG4gIG56UGF1c2VPbkhvdmVyOiB0cnVlLFxuICBuekFuaW1hdGU6IHRydWVcbn07XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICduei1ub3RpZmljYXRpb24tY29udGFpbmVyJyxcbiAgZXhwb3J0QXM6ICduek5vdGlmaWNhdGlvbkNvbnRhaW5lcicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJhbnQtbm90aWZpY2F0aW9uIGFudC1ub3RpZmljYXRpb24tdG9wTGVmdFwiIFtzdHlsZS50b3BdPVwidG9wXCIgW3N0eWxlLmxlZnRdPVwiJzBweCdcIj5cbiAgICAgIDxuei1ub3RpZmljYXRpb25cbiAgICAgICAgKm5nRm9yPVwibGV0IGluc3RhbmNlIG9mIHRvcExlZnRJbnN0YW5jZXNcIlxuICAgICAgICBbaW5zdGFuY2VdPVwiaW5zdGFuY2VcIlxuICAgICAgICBbcGxhY2VtZW50XT1cImNvbmZpZy5uelBsYWNlbWVudFwiXG4gICAgICAgIChkZXN0cm95ZWQpPVwicmVtb3ZlKCRldmVudC5pZCwgJGV2ZW50LnVzZXJBY3Rpb24pXCJcbiAgICAgID48L256LW5vdGlmaWNhdGlvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYW50LW5vdGlmaWNhdGlvbiBhbnQtbm90aWZpY2F0aW9uLXRvcFJpZ2h0XCIgW3N0eWxlLnRvcF09XCJ0b3BcIiBbc3R5bGUucmlnaHRdPVwiJzBweCdcIj5cbiAgICAgIDxuei1ub3RpZmljYXRpb25cbiAgICAgICAgKm5nRm9yPVwibGV0IGluc3RhbmNlIG9mIHRvcFJpZ2h0SW5zdGFuY2VzXCJcbiAgICAgICAgW2luc3RhbmNlXT1cImluc3RhbmNlXCJcbiAgICAgICAgW3BsYWNlbWVudF09XCJjb25maWcubnpQbGFjZW1lbnRcIlxuICAgICAgICAoZGVzdHJveWVkKT1cInJlbW92ZSgkZXZlbnQuaWQsICRldmVudC51c2VyQWN0aW9uKVwiXG4gICAgICA+PC9uei1ub3RpZmljYXRpb24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImFudC1ub3RpZmljYXRpb24gYW50LW5vdGlmaWNhdGlvbi1ib3R0b21MZWZ0XCIgW3N0eWxlLmJvdHRvbV09XCJib3R0b21cIiBbc3R5bGUubGVmdF09XCInMHB4J1wiPlxuICAgICAgPG56LW5vdGlmaWNhdGlvblxuICAgICAgICAqbmdGb3I9XCJsZXQgaW5zdGFuY2Ugb2YgYm90dG9tTGVmdEluc3RhbmNlc1wiXG4gICAgICAgIFtpbnN0YW5jZV09XCJpbnN0YW5jZVwiXG4gICAgICAgIFtwbGFjZW1lbnRdPVwiY29uZmlnLm56UGxhY2VtZW50XCJcbiAgICAgICAgKGRlc3Ryb3llZCk9XCJyZW1vdmUoJGV2ZW50LmlkLCAkZXZlbnQudXNlckFjdGlvbilcIlxuICAgICAgPjwvbnotbm90aWZpY2F0aW9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhbnQtbm90aWZpY2F0aW9uIGFudC1ub3RpZmljYXRpb24tYm90dG9tUmlnaHRcIiBbc3R5bGUuYm90dG9tXT1cImJvdHRvbVwiIFtzdHlsZS5yaWdodF09XCInMHB4J1wiPlxuICAgICAgPG56LW5vdGlmaWNhdGlvblxuICAgICAgICAqbmdGb3I9XCJsZXQgaW5zdGFuY2Ugb2YgYm90dG9tUmlnaHRJbnN0YW5jZXNcIlxuICAgICAgICBbaW5zdGFuY2VdPVwiaW5zdGFuY2VcIlxuICAgICAgICBbcGxhY2VtZW50XT1cImNvbmZpZy5uelBsYWNlbWVudFwiXG4gICAgICAgIChkZXN0cm95ZWQpPVwicmVtb3ZlKCRldmVudC5pZCwgJGV2ZW50LnVzZXJBY3Rpb24pXCJcbiAgICAgID48L256LW5vdGlmaWNhdGlvbj5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOek5vdGlmaWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIE56TU5Db250YWluZXJDb21wb25lbnQge1xuICBib3R0b20/OiBzdHJpbmcgfCBudWxsO1xuICB0b3A/OiBzdHJpbmcgfCBudWxsO1xuICBjb25maWchOiBSZXF1aXJlZDxOb3RpZmljYXRpb25Db25maWc+OyAvLyBpbml0aWFsaXplZCBieSBwYXJlbnQgY2xhc3MgY29uc3RydWN0b3JcbiAgaW5zdGFuY2VzOiBBcnJheTxSZXF1aXJlZDxOek5vdGlmaWNhdGlvbkRhdGE+PiA9IFtdO1xuICB0b3BMZWZ0SW5zdGFuY2VzOiBBcnJheTxSZXF1aXJlZDxOek5vdGlmaWNhdGlvbkRhdGE+PiA9IFtdO1xuICB0b3BSaWdodEluc3RhbmNlczogQXJyYXk8UmVxdWlyZWQ8TnpOb3RpZmljYXRpb25EYXRhPj4gPSBbXTtcbiAgYm90dG9tTGVmdEluc3RhbmNlczogQXJyYXk8UmVxdWlyZWQ8TnpOb3RpZmljYXRpb25EYXRhPj4gPSBbXTtcbiAgYm90dG9tUmlnaHRJbnN0YW5jZXM6IEFycmF5PFJlcXVpcmVkPE56Tm90aWZpY2F0aW9uRGF0YT4+ID0gW107XG5cbiAgY29uc3RydWN0b3IoY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UpIHtcbiAgICBzdXBlcihjZHIsIG56Q29uZmlnU2VydmljZSk7XG4gIH1cblxuICBjcmVhdGUobm90aWZpY2F0aW9uOiBOek5vdGlmaWNhdGlvbkRhdGEpOiBSZXF1aXJlZDxOek5vdGlmaWNhdGlvbkRhdGE+IHtcbiAgICBjb25zdCBub3RpID0gdGhpcy5vbkNyZWF0ZShub3RpZmljYXRpb24pO1xuICAgIGNvbnN0IGtleSA9IG5vdGkub3B0aW9ucy5uektleTtcbiAgICBjb25zdCBub3RpZmljYXRpb25XaXRoU2FtZUtleSA9IHRoaXMuaW5zdGFuY2VzLmZpbmQoXG4gICAgICBtc2cgPT4gbXNnLm9wdGlvbnMubnpLZXkgPT09IChub3RpZmljYXRpb24ub3B0aW9ucyBhcyBSZXF1aXJlZDxOek5vdGlmaWNhdGlvbkRhdGFPcHRpb25zPikubnpLZXlcbiAgICApO1xuICAgIGlmIChrZXkgJiYgbm90aWZpY2F0aW9uV2l0aFNhbWVLZXkpIHtcbiAgICAgIHRoaXMucmVwbGFjZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb25XaXRoU2FtZUtleSwgbm90aSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmluc3RhbmNlcy5sZW5ndGggPj0gdGhpcy5jb25maWcubnpNYXhTdGFjaykge1xuICAgICAgICB0aGlzLmluc3RhbmNlcyA9IHRoaXMuaW5zdGFuY2VzLnNsaWNlKDEpO1xuICAgICAgfVxuICAgICAgdGhpcy5pbnN0YW5jZXMgPSBbLi4udGhpcy5pbnN0YW5jZXMsIG5vdGldO1xuICAgIH1cblxuICAgIHRoaXMucmVhZHlJbnN0YW5jZXMoKTtcblxuICAgIHJldHVybiBub3RpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uQ3JlYXRlKGluc3RhbmNlOiBOek5vdGlmaWNhdGlvbkRhdGEpOiBSZXF1aXJlZDxOek5vdGlmaWNhdGlvbkRhdGE+IHtcbiAgICBpbnN0YW5jZS5vcHRpb25zID0gdGhpcy5tZXJnZU9wdGlvbnMoaW5zdGFuY2Uub3B0aW9ucyk7XG4gICAgaW5zdGFuY2Uub25DbG9zZSA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgaW5zdGFuY2Uub25DbGljayA9IG5ldyBTdWJqZWN0PE1vdXNlRXZlbnQ+KCk7XG4gICAgcmV0dXJuIGluc3RhbmNlIGFzIFJlcXVpcmVkPE56Tm90aWZpY2F0aW9uRGF0YT47XG4gIH1cblxuICBwcm90ZWN0ZWQgc3Vic2NyaWJlQ29uZmlnQ2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlXG4gICAgICAuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZUNvbmZpZygpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVDb25maWcoKTogdm9pZCB7XG4gICAgdGhpcy5jb25maWcgPSB7XG4gICAgICAuLi5OWl9OT1RJRklDQVRJT05fREVGQVVMVF9DT05GSUcsXG4gICAgICAuLi50aGlzLmNvbmZpZyxcbiAgICAgIC4uLnRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0ZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpXG4gICAgfTtcblxuICAgIHRoaXMudG9wID0gdG9Dc3NQaXhlbCh0aGlzLmNvbmZpZy5uelRvcCEpO1xuICAgIHRoaXMuYm90dG9tID0gdG9Dc3NQaXhlbCh0aGlzLmNvbmZpZy5uekJvdHRvbSEpO1xuXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIHJlcGxhY2VOb3RpZmljYXRpb24ob2xkOiBOek5vdGlmaWNhdGlvbkRhdGEsIF9uZXc6IE56Tm90aWZpY2F0aW9uRGF0YSk6IHZvaWQge1xuICAgIG9sZC50aXRsZSA9IF9uZXcudGl0bGU7XG4gICAgb2xkLmNvbnRlbnQgPSBfbmV3LmNvbnRlbnQ7XG4gICAgb2xkLnRlbXBsYXRlID0gX25ldy50ZW1wbGF0ZTtcbiAgICBvbGQudHlwZSA9IF9uZXcudHlwZTtcbiAgICBvbGQub3B0aW9ucyA9IF9uZXcub3B0aW9ucztcbiAgfVxuXG4gIHByb3RlY3RlZCByZWFkeUluc3RhbmNlcygpOiB2b2lkIHtcbiAgICB0aGlzLnRvcExlZnRJbnN0YW5jZXMgPSB0aGlzLmluc3RhbmNlcy5maWx0ZXIobSA9PiBtLm9wdGlvbnMubnpQbGFjZW1lbnQgPT09ICd0b3BMZWZ0Jyk7XG4gICAgdGhpcy50b3BSaWdodEluc3RhbmNlcyA9IHRoaXMuaW5zdGFuY2VzLmZpbHRlcihtID0+IG0ub3B0aW9ucy5uelBsYWNlbWVudCA9PT0gJ3RvcFJpZ2h0JyB8fCAhbS5vcHRpb25zLm56UGxhY2VtZW50KTtcbiAgICB0aGlzLmJvdHRvbUxlZnRJbnN0YW5jZXMgPSB0aGlzLmluc3RhbmNlcy5maWx0ZXIobSA9PiBtLm9wdGlvbnMubnpQbGFjZW1lbnQgPT09ICdib3R0b21MZWZ0Jyk7XG4gICAgdGhpcy5ib3R0b21SaWdodEluc3RhbmNlcyA9IHRoaXMuaW5zdGFuY2VzLmZpbHRlcihtID0+IG0ub3B0aW9ucy5uelBsYWNlbWVudCA9PT0gJ2JvdHRvbVJpZ2h0Jyk7XG5cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgbWVyZ2VPcHRpb25zKG9wdGlvbnM/OiBOek5vdGlmaWNhdGlvbkRhdGFPcHRpb25zKTogTnpOb3RpZmljYXRpb25EYXRhT3B0aW9ucyB7XG4gICAgY29uc3QgeyBuelBvc2l0aW9uIH0gPSBvcHRpb25zID8/IHt9O1xuXG4gICAgaWYgKG56UG9zaXRpb24pIHtcbiAgICAgIHdhcm5EZXByZWNhdGlvbignYG56UG9zaXRpb25gIG9mIE56Tm90aWZpY2F0aW9uRGF0YU9wdGlvbnMgaXMgZGVwcmVjYXRlZCBhbmQgd291bGQgYmUgcmVtb3ZlZCBpbiAxMC4wLjAuIFVzZSBgbnpQbGFjZW1lbnRgIGluc3RlYWQuJyk7XG4gICAgfVxuXG4gICAgY29uc3QgeyBuekR1cmF0aW9uLCBuekFuaW1hdGUsIG56UGF1c2VPbkhvdmVyLCBuelBsYWNlbWVudCB9ID0gdGhpcy5jb25maWc7XG4gICAgcmV0dXJuIHsgbnpEdXJhdGlvbiwgbnpBbmltYXRlLCBuelBhdXNlT25Ib3ZlciwgbnpQbGFjZW1lbnQ6IG56UGxhY2VtZW50IHx8IG56UG9zaXRpb24sIC4uLm9wdGlvbnMgfTtcbiAgfVxufVxuIl19