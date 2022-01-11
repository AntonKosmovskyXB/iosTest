/**
 * @fileoverview added by tsickle
 * Generated from: notification-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __extends, __read, __spread } from "tslib";
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
var NZ_CONFIG_COMPONENT_NAME = 'notification';
/** @type {?} */
var NZ_NOTIFICATION_DEFAULT_CONFIG = {
    nzTop: '24px',
    nzBottom: '24px',
    nzPlacement: 'topRight',
    nzDuration: 4500,
    nzMaxStack: 7,
    nzPauseOnHover: true,
    nzAnimate: true
};
var NzNotificationContainerComponent = /** @class */ (function (_super) {
    __extends(NzNotificationContainerComponent, _super);
    function NzNotificationContainerComponent(cdr, nzConfigService) {
        var _this = _super.call(this, cdr, nzConfigService) || this;
        // initialized by parent class constructor
        _this.instances = [];
        _this.topLeftInstances = [];
        _this.topRightInstances = [];
        _this.bottomLeftInstances = [];
        _this.bottomRightInstances = [];
        return _this;
    }
    /**
     * @param {?} notification
     * @return {?}
     */
    NzNotificationContainerComponent.prototype.create = /**
     * @param {?} notification
     * @return {?}
     */
    function (notification) {
        /** @type {?} */
        var noti = this.onCreate(notification);
        /** @type {?} */
        var key = noti.options.nzKey;
        /** @type {?} */
        var notificationWithSameKey = this.instances.find((/**
         * @param {?} msg
         * @return {?}
         */
        function (msg) { return msg.options.nzKey === ((/** @type {?} */ (notification.options))).nzKey; }));
        if (key && notificationWithSameKey) {
            this.replaceNotification(notificationWithSameKey, noti);
        }
        else {
            if (this.instances.length >= this.config.nzMaxStack) {
                this.instances = this.instances.slice(1);
            }
            this.instances = __spread(this.instances, [noti]);
        }
        this.readyInstances();
        return noti;
    };
    /**
     * @protected
     * @param {?} instance
     * @return {?}
     */
    NzNotificationContainerComponent.prototype.onCreate = /**
     * @protected
     * @param {?} instance
     * @return {?}
     */
    function (instance) {
        instance.options = this.mergeOptions(instance.options);
        instance.onClose = new Subject();
        instance.onClick = new Subject();
        return (/** @type {?} */ (instance));
    };
    /**
     * @protected
     * @return {?}
     */
    NzNotificationContainerComponent.prototype.subscribeConfigChange = /**
     * @protected
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
        function () { return _this.updateConfig(); }));
    };
    /**
     * @protected
     * @return {?}
     */
    NzNotificationContainerComponent.prototype.updateConfig = /**
     * @protected
     * @return {?}
     */
    function () {
        this.config = __assign(__assign(__assign({}, NZ_NOTIFICATION_DEFAULT_CONFIG), this.config), this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME));
        this.top = toCssPixel((/** @type {?} */ (this.config.nzTop)));
        this.bottom = toCssPixel((/** @type {?} */ (this.config.nzBottom)));
        this.cdr.markForCheck();
    };
    /**
     * @private
     * @param {?} old
     * @param {?} _new
     * @return {?}
     */
    NzNotificationContainerComponent.prototype.replaceNotification = /**
     * @private
     * @param {?} old
     * @param {?} _new
     * @return {?}
     */
    function (old, _new) {
        old.title = _new.title;
        old.content = _new.content;
        old.template = _new.template;
        old.type = _new.type;
        old.options = _new.options;
    };
    /**
     * @protected
     * @return {?}
     */
    NzNotificationContainerComponent.prototype.readyInstances = /**
     * @protected
     * @return {?}
     */
    function () {
        this.topLeftInstances = this.instances.filter((/**
         * @param {?} m
         * @return {?}
         */
        function (m) { return m.options.nzPlacement === 'topLeft'; }));
        this.topRightInstances = this.instances.filter((/**
         * @param {?} m
         * @return {?}
         */
        function (m) { return m.options.nzPlacement === 'topRight' || !m.options.nzPlacement; }));
        this.bottomLeftInstances = this.instances.filter((/**
         * @param {?} m
         * @return {?}
         */
        function (m) { return m.options.nzPlacement === 'bottomLeft'; }));
        this.bottomRightInstances = this.instances.filter((/**
         * @param {?} m
         * @return {?}
         */
        function (m) { return m.options.nzPlacement === 'bottomRight'; }));
        this.cdr.detectChanges();
    };
    /**
     * @protected
     * @param {?=} options
     * @return {?}
     */
    NzNotificationContainerComponent.prototype.mergeOptions = /**
     * @protected
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        var nzPosition = (options !== null && options !== void 0 ? options : {}).nzPosition;
        if (nzPosition) {
            warnDeprecation('`nzPosition` of NzNotificationDataOptions is deprecated and would be removed in 10.0.0. Use `nzPlacement` instead.');
        }
        var _a = this.config, nzDuration = _a.nzDuration, nzAnimate = _a.nzAnimate, nzPauseOnHover = _a.nzPauseOnHover, nzPlacement = _a.nzPlacement;
        return __assign({ nzDuration: nzDuration, nzAnimate: nzAnimate, nzPauseOnHover: nzPauseOnHover, nzPlacement: nzPlacement || nzPosition }, options);
    };
    NzNotificationContainerComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-notification-container',
                    exportAs: 'nzNotificationContainer',
                    preserveWhitespaces: false,
                    template: "\n    <div class=\"ant-notification ant-notification-topLeft\" [style.top]=\"top\" [style.left]=\"'0px'\">\n      <nz-notification\n        *ngFor=\"let instance of topLeftInstances\"\n        [instance]=\"instance\"\n        [placement]=\"config.nzPlacement\"\n        (destroyed)=\"remove($event.id, $event.userAction)\"\n      ></nz-notification>\n    </div>\n    <div class=\"ant-notification ant-notification-topRight\" [style.top]=\"top\" [style.right]=\"'0px'\">\n      <nz-notification\n        *ngFor=\"let instance of topRightInstances\"\n        [instance]=\"instance\"\n        [placement]=\"config.nzPlacement\"\n        (destroyed)=\"remove($event.id, $event.userAction)\"\n      ></nz-notification>\n    </div>\n    <div class=\"ant-notification ant-notification-bottomLeft\" [style.bottom]=\"bottom\" [style.left]=\"'0px'\">\n      <nz-notification\n        *ngFor=\"let instance of bottomLeftInstances\"\n        [instance]=\"instance\"\n        [placement]=\"config.nzPlacement\"\n        (destroyed)=\"remove($event.id, $event.userAction)\"\n      ></nz-notification>\n    </div>\n    <div class=\"ant-notification ant-notification-bottomRight\" [style.bottom]=\"bottom\" [style.right]=\"'0px'\">\n      <nz-notification\n        *ngFor=\"let instance of bottomRightInstances\"\n        [instance]=\"instance\"\n        [placement]=\"config.nzPlacement\"\n        (destroyed)=\"remove($event.id, $event.userAction)\"\n      ></nz-notification>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    NzNotificationContainerComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzConfigService }
    ]; };
    return NzNotificationContainerComponent;
}(NzMNContainerComponent));
export { NzNotificationContainerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL25vdGlmaWNhdGlvbi8iLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBc0IsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFJckMsd0JBQXdCLEdBQUcsY0FBYzs7SUFFekMsOEJBQThCLEdBQWlDO0lBQ25FLEtBQUssRUFBRSxNQUFNO0lBQ2IsUUFBUSxFQUFFLE1BQU07SUFDaEIsV0FBVyxFQUFFLFVBQVU7SUFDdkIsVUFBVSxFQUFFLElBQUk7SUFDaEIsVUFBVSxFQUFFLENBQUM7SUFDYixjQUFjLEVBQUUsSUFBSTtJQUNwQixTQUFTLEVBQUUsSUFBSTtDQUNoQjtBQUVEO0lBeUNzRCxvREFBc0I7SUFVMUUsMENBQVksR0FBc0IsRUFBRSxlQUFnQztRQUFwRSxZQUNFLGtCQUFNLEdBQUcsRUFBRSxlQUFlLENBQUMsU0FDNUI7O1FBUkQsZUFBUyxHQUF3QyxFQUFFLENBQUM7UUFDcEQsc0JBQWdCLEdBQXdDLEVBQUUsQ0FBQztRQUMzRCx1QkFBaUIsR0FBd0MsRUFBRSxDQUFDO1FBQzVE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QUFFLFNBQVMsV0FBQSxFQUFFLGNBQWMsZ0JBQUEsRUFBRSxXQUFXLEVBQUUsV0FBVyxJQUFJLFVBQVUsSUFBSyxPQUFPLEVBQUc7SUFDdkcsQ0FBQzs7Z0JBaElGLFNBQVMsU0FBQztvQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLFFBQVEsRUFBRSx3OENBaUNUO2lCQUNGOzs7O2dCQS9EaUMsaUJBQWlCO2dCQUN0QixlQUFlOztJQXVKNUMsdUNBQUM7Q0FBQSxBQWpJRCxDQXlDc0Qsc0JBQXNCLEdBd0YzRTtTQXhGWSxnQ0FBZ0M7OztJQUMzQyxrREFBdUI7O0lBQ3ZCLCtDQUFvQjs7SUFDcEIsa0RBQXNDOztJQUN0QyxxREFBb0Q7O0lBQ3BELDREQUEyRDs7SUFDM0QsNkRBQTREOztJQUM1RCwrREFBOEQ7O0lBQzlELGdFQUErRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ29uZmlnLCBOekNvbmZpZ1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IHdhcm5EZXByZWNhdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9sb2dnZXInO1xuaW1wb3J0IHsgdG9Dc3NQaXhlbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcblxuaW1wb3J0IHsgTnpNTkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVzc2FnZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE56Tm90aWZpY2F0aW9uRGF0YSwgTnpOb3RpZmljYXRpb25EYXRhT3B0aW9ucyB9IGZyb20gJy4vdHlwaW5ncyc7XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdub3RpZmljYXRpb24nO1xuXG5jb25zdCBOWl9OT1RJRklDQVRJT05fREVGQVVMVF9DT05GSUc6IFJlcXVpcmVkPE5vdGlmaWNhdGlvbkNvbmZpZz4gPSB7XG4gIG56VG9wOiAnMjRweCcsXG4gIG56Qm90dG9tOiAnMjRweCcsXG4gIG56UGxhY2VtZW50OiAndG9wUmlnaHQnLFxuICBuekR1cmF0aW9uOiA0NTAwLFxuICBuek1heFN0YWNrOiA3LFxuICBuelBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgbnpBbmltYXRlOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotbm90aWZpY2F0aW9uLWNvbnRhaW5lcicsXG4gIGV4cG9ydEFzOiAnbnpOb3RpZmljYXRpb25Db250YWluZXInLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYW50LW5vdGlmaWNhdGlvbiBhbnQtbm90aWZpY2F0aW9uLXRvcExlZnRcIiBbc3R5bGUudG9wXT1cInRvcFwiIFtzdHlsZS5sZWZ0XT1cIicwcHgnXCI+XG4gICAgICA8bnotbm90aWZpY2F0aW9uXG4gICAgICAgICpuZ0Zvcj1cImxldCBpbnN0YW5jZSBvZiB0b3BMZWZ0SW5zdGFuY2VzXCJcbiAgICAgICAgW2luc3RhbmNlXT1cImluc3RhbmNlXCJcbiAgICAgICAgW3BsYWNlbWVudF09XCJjb25maWcubnpQbGFjZW1lbnRcIlxuICAgICAgICAoZGVzdHJveWVkKT1cInJlbW92ZSgkZXZlbnQuaWQsICRldmVudC51c2VyQWN0aW9uKVwiXG4gICAgICA+PC9uei1ub3RpZmljYXRpb24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImFudC1ub3RpZmljYXRpb24gYW50LW5vdGlmaWNhdGlvbi10b3BSaWdodFwiIFtzdHlsZS50b3BdPVwidG9wXCIgW3N0eWxlLnJpZ2h0XT1cIicwcHgnXCI+XG4gICAgICA8bnotbm90aWZpY2F0aW9uXG4gICAgICAgICpuZ0Zvcj1cImxldCBpbnN0YW5jZSBvZiB0b3BSaWdodEluc3RhbmNlc1wiXG4gICAgICAgIFtpbnN0YW5jZV09XCJpbnN0YW5jZVwiXG4gICAgICAgIFtwbGFjZW1lbnRdPVwiY29uZmlnLm56UGxhY2VtZW50XCJcbiAgICAgICAgKGRlc3Ryb3llZCk9XCJyZW1vdmUoJGV2ZW50LmlkLCAkZXZlbnQudXNlckFjdGlvbilcIlxuICAgICAgPjwvbnotbm90aWZpY2F0aW9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhbnQtbm90aWZpY2F0aW9uIGFudC1ub3RpZmljYXRpb24tYm90dG9tTGVmdFwiIFtzdHlsZS5ib3R0b21dPVwiYm90dG9tXCIgW3N0eWxlLmxlZnRdPVwiJzBweCdcIj5cbiAgICAgIDxuei1ub3RpZmljYXRpb25cbiAgICAgICAgKm5nRm9yPVwibGV0IGluc3RhbmNlIG9mIGJvdHRvbUxlZnRJbnN0YW5jZXNcIlxuICAgICAgICBbaW5zdGFuY2VdPVwiaW5zdGFuY2VcIlxuICAgICAgICBbcGxhY2VtZW50XT1cImNvbmZpZy5uelBsYWNlbWVudFwiXG4gICAgICAgIChkZXN0cm95ZWQpPVwicmVtb3ZlKCRldmVudC5pZCwgJGV2ZW50LnVzZXJBY3Rpb24pXCJcbiAgICAgID48L256LW5vdGlmaWNhdGlvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYW50LW5vdGlmaWNhdGlvbiBhbnQtbm90aWZpY2F0aW9uLWJvdHRvbVJpZ2h0XCIgW3N0eWxlLmJvdHRvbV09XCJib3R0b21cIiBbc3R5bGUucmlnaHRdPVwiJzBweCdcIj5cbiAgICAgIDxuei1ub3RpZmljYXRpb25cbiAgICAgICAgKm5nRm9yPVwibGV0IGluc3RhbmNlIG9mIGJvdHRvbVJpZ2h0SW5zdGFuY2VzXCJcbiAgICAgICAgW2luc3RhbmNlXT1cImluc3RhbmNlXCJcbiAgICAgICAgW3BsYWNlbWVudF09XCJjb25maWcubnpQbGFjZW1lbnRcIlxuICAgICAgICAoZGVzdHJveWVkKT1cInJlbW92ZSgkZXZlbnQuaWQsICRldmVudC51c2VyQWN0aW9uKVwiXG4gICAgICA+PC9uei1ub3RpZmljYXRpb24+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTnpOb3RpZmljYXRpb25Db250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBOek1OQ29udGFpbmVyQ29tcG9uZW50IHtcbiAgYm90dG9tPzogc3RyaW5nIHwgbnVsbDtcbiAgdG9wPzogc3RyaW5nIHwgbnVsbDtcbiAgY29uZmlnITogUmVxdWlyZWQ8Tm90aWZpY2F0aW9uQ29uZmlnPjsgLy8gaW5pdGlhbGl6ZWQgYnkgcGFyZW50IGNsYXNzIGNvbnN0cnVjdG9yXG4gIGluc3RhbmNlczogQXJyYXk8UmVxdWlyZWQ8TnpOb3RpZmljYXRpb25EYXRhPj4gPSBbXTtcbiAgdG9wTGVmdEluc3RhbmNlczogQXJyYXk8UmVxdWlyZWQ8TnpOb3RpZmljYXRpb25EYXRhPj4gPSBbXTtcbiAgdG9wUmlnaHRJbnN0YW5jZXM6IEFycmF5PFJlcXVpcmVkPE56Tm90aWZpY2F0aW9uRGF0YT4+ID0gW107XG4gIGJvdHRvbUxlZnRJbnN0YW5jZXM6IEFycmF5PFJlcXVpcmVkPE56Tm90aWZpY2F0aW9uRGF0YT4+ID0gW107XG4gIGJvdHRvbVJpZ2h0SW5zdGFuY2VzOiBBcnJheTxSZXF1aXJlZDxOek5vdGlmaWNhdGlvbkRhdGE+PiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlKSB7XG4gICAgc3VwZXIoY2RyLCBuekNvbmZpZ1NlcnZpY2UpO1xuICB9XG5cbiAgY3JlYXRlKG5vdGlmaWNhdGlvbjogTnpOb3RpZmljYXRpb25EYXRhKTogUmVxdWlyZWQ8TnpOb3RpZmljYXRpb25EYXRhPiB7XG4gICAgY29uc3Qgbm90aSA9IHRoaXMub25DcmVhdGUobm90aWZpY2F0aW9uKTtcbiAgICBjb25zdCBrZXkgPSBub3RpLm9wdGlvbnMubnpLZXk7XG4gICAgY29uc3Qgbm90aWZpY2F0aW9uV2l0aFNhbWVLZXkgPSB0aGlzLmluc3RhbmNlcy5maW5kKFxuICAgICAgbXNnID0+IG1zZy5vcHRpb25zLm56S2V5ID09PSAobm90aWZpY2F0aW9uLm9wdGlvbnMgYXMgUmVxdWlyZWQ8TnpOb3RpZmljYXRpb25EYXRhT3B0aW9ucz4pLm56S2V5XG4gICAgKTtcbiAgICBpZiAoa2V5ICYmIG5vdGlmaWNhdGlvbldpdGhTYW1lS2V5KSB7XG4gICAgICB0aGlzLnJlcGxhY2VOb3RpZmljYXRpb24obm90aWZpY2F0aW9uV2l0aFNhbWVLZXksIG5vdGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5pbnN0YW5jZXMubGVuZ3RoID49IHRoaXMuY29uZmlnLm56TWF4U3RhY2spIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZXMgPSB0aGlzLmluc3RhbmNlcy5zbGljZSgxKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaW5zdGFuY2VzID0gWy4uLnRoaXMuaW5zdGFuY2VzLCBub3RpXTtcbiAgICB9XG5cbiAgICB0aGlzLnJlYWR5SW5zdGFuY2VzKCk7XG5cbiAgICByZXR1cm4gbm90aTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvbkNyZWF0ZShpbnN0YW5jZTogTnpOb3RpZmljYXRpb25EYXRhKTogUmVxdWlyZWQ8TnpOb3RpZmljYXRpb25EYXRhPiB7XG4gICAgaW5zdGFuY2Uub3B0aW9ucyA9IHRoaXMubWVyZ2VPcHRpb25zKGluc3RhbmNlLm9wdGlvbnMpO1xuICAgIGluc3RhbmNlLm9uQ2xvc2UgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAgIGluc3RhbmNlLm9uQ2xpY2sgPSBuZXcgU3ViamVjdDxNb3VzZUV2ZW50PigpO1xuICAgIHJldHVybiBpbnN0YW5jZSBhcyBSZXF1aXJlZDxOek5vdGlmaWNhdGlvbkRhdGE+O1xuICB9XG5cbiAgcHJvdGVjdGVkIHN1YnNjcmliZUNvbmZpZ0NoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLm56Q29uZmlnU2VydmljZVxuICAgICAgLmdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVDb25maWcoKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlQ29uZmlnKCk6IHZvaWQge1xuICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgLi4uTlpfTk9USUZJQ0FUSU9OX0RFRkFVTFRfQ09ORklHLFxuICAgICAgLi4udGhpcy5jb25maWcsXG4gICAgICAuLi50aGlzLm56Q29uZmlnU2VydmljZS5nZXRDb25maWdGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKVxuICAgIH07XG5cbiAgICB0aGlzLnRvcCA9IHRvQ3NzUGl4ZWwodGhpcy5jb25maWcubnpUb3AhKTtcbiAgICB0aGlzLmJvdHRvbSA9IHRvQ3NzUGl4ZWwodGhpcy5jb25maWcubnpCb3R0b20hKTtcblxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXBsYWNlTm90aWZpY2F0aW9uKG9sZDogTnpOb3RpZmljYXRpb25EYXRhLCBfbmV3OiBOek5vdGlmaWNhdGlvbkRhdGEpOiB2b2lkIHtcbiAgICBvbGQudGl0bGUgPSBfbmV3LnRpdGxlO1xuICAgIG9sZC5jb250ZW50ID0gX25ldy5jb250ZW50O1xuICAgIG9sZC50ZW1wbGF0ZSA9IF9uZXcudGVtcGxhdGU7XG4gICAgb2xkLnR5cGUgPSBfbmV3LnR5cGU7XG4gICAgb2xkLm9wdGlvbnMgPSBfbmV3Lm9wdGlvbnM7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVhZHlJbnN0YW5jZXMoKTogdm9pZCB7XG4gICAgdGhpcy50b3BMZWZ0SW5zdGFuY2VzID0gdGhpcy5pbnN0YW5jZXMuZmlsdGVyKG0gPT4gbS5vcHRpb25zLm56UGxhY2VtZW50ID09PSAndG9wTGVmdCcpO1xuICAgIHRoaXMudG9wUmlnaHRJbnN0YW5jZXMgPSB0aGlzLmluc3RhbmNlcy5maWx0ZXIobSA9PiBtLm9wdGlvbnMubnpQbGFjZW1lbnQgPT09ICd0b3BSaWdodCcgfHwgIW0ub3B0aW9ucy5uelBsYWNlbWVudCk7XG4gICAgdGhpcy5ib3R0b21MZWZ0SW5zdGFuY2VzID0gdGhpcy5pbnN0YW5jZXMuZmlsdGVyKG0gPT4gbS5vcHRpb25zLm56UGxhY2VtZW50ID09PSAnYm90dG9tTGVmdCcpO1xuICAgIHRoaXMuYm90dG9tUmlnaHRJbnN0YW5jZXMgPSB0aGlzLmluc3RhbmNlcy5maWx0ZXIobSA9PiBtLm9wdGlvbnMubnpQbGFjZW1lbnQgPT09ICdib3R0b21SaWdodCcpO1xuXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG1lcmdlT3B0aW9ucyhvcHRpb25zPzogTnpOb3RpZmljYXRpb25EYXRhT3B0aW9ucyk6IE56Tm90aWZpY2F0aW9uRGF0YU9wdGlvbnMge1xuICAgIGNvbnN0IHsgbnpQb3NpdGlvbiB9ID0gb3B0aW9ucyA/PyB7fTtcblxuICAgIGlmIChuelBvc2l0aW9uKSB7XG4gICAgICB3YXJuRGVwcmVjYXRpb24oJ2BuelBvc2l0aW9uYCBvZiBOek5vdGlmaWNhdGlvbkRhdGFPcHRpb25zIGlzIGRlcHJlY2F0ZWQgYW5kIHdvdWxkIGJlIHJlbW92ZWQgaW4gMTAuMC4wLiBVc2UgYG56UGxhY2VtZW50YCBpbnN0ZWFkLicpO1xuICAgIH1cblxuICAgIGNvbnN0IHsgbnpEdXJhdGlvbiwgbnpBbmltYXRlLCBuelBhdXNlT25Ib3ZlciwgbnpQbGFjZW1lbnQgfSA9IHRoaXMuY29uZmlnO1xuICAgIHJldHVybiB7IG56RHVyYXRpb24sIG56QW5pbWF0ZSwgbnpQYXVzZU9uSG92ZXIsIG56UGxhY2VtZW50OiBuelBsYWNlbWVudCB8fCBuelBvc2l0aW9uLCAuLi5vcHRpb25zIH07XG4gIH1cbn1cbiJdfQ==