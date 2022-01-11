/**
 * @fileoverview added by tsickle
 * Generated from: notification.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { notificationMotion } from 'ng-zorro-antd/core/animation';
import { NzMNComponent } from 'ng-zorro-antd/message';
var NzNotificationComponent = /** @class */ (function (_super) {
    __extends(NzNotificationComponent, _super);
    function NzNotificationComponent(cdr) {
        var _this = _super.call(this, cdr) || this;
        _this.destroyed = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    NzNotificationComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        this.instance.onClick.complete();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzNotificationComponent.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.instance.onClick.next(event);
    };
    /**
     * @return {?}
     */
    NzNotificationComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.destroy(true);
    };
    Object.defineProperty(NzNotificationComponent.prototype, "state", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.instance.state === 'enter') {
                if (this.placement === 'topLeft' || this.placement === 'bottomLeft') {
                    return 'enterLeft';
                }
                else {
                    return 'enterRight';
                }
            }
            else {
                return this.instance.state;
            }
        },
        enumerable: true,
        configurable: true
    });
    NzNotificationComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-notification',
                    exportAs: 'nzNotification',
                    preserveWhitespaces: false,
                    animations: [notificationMotion],
                    template: "\n    <div\n      class=\"ant-notification-notice ant-notification-notice-closable\"\n      [ngStyle]=\"instance.options?.nzStyle || null\"\n      [ngClass]=\"instance.options?.nzClass || ''\"\n      [@notificationMotion]=\"state\"\n      (click)=\"onClick($event)\"\n      (mouseenter)=\"onEnter()\"\n      (mouseleave)=\"onLeave()\"\n    >\n      <div *ngIf=\"!instance.template\" class=\"ant-notification-notice-content\">\n        <div class=\"ant-notification-notice-content\" [ngClass]=\"{ 'ant-notification-notice-with-icon': instance.type !== 'blank' }\">\n          <div [class.ant-notification-notice-with-icon]=\"instance.type !== 'blank'\">\n            <ng-container [ngSwitch]=\"instance.type\">\n              <i\n                *ngSwitchCase=\"'success'\"\n                nz-icon\n                nzType=\"check-circle\"\n                class=\"ant-notification-notice-icon ant-notification-notice-icon-success\"\n              ></i>\n              <i\n                *ngSwitchCase=\"'info'\"\n                nz-icon\n                nzType=\"info-circle\"\n                class=\"ant-notification-notice-icon ant-notification-notice-icon-info\"\n              ></i>\n              <i\n                *ngSwitchCase=\"'warning'\"\n                nz-icon\n                nzType=\"exclamation-circle\"\n                class=\"ant-notification-notice-icon ant-notification-notice-icon-warning\"\n              ></i>\n              <i\n                *ngSwitchCase=\"'error'\"\n                nz-icon\n                nzType=\"close-circle\"\n                class=\"ant-notification-notice-icon ant-notification-notice-icon-error\"\n              ></i>\n            </ng-container>\n            <div class=\"ant-notification-notice-message\" [innerHTML]=\"instance.title\"></div>\n            <div class=\"ant-notification-notice-description\" [innerHTML]=\"instance.content\"></div>\n          </div>\n        </div>\n      </div>\n      <ng-template\n        [ngIf]=\"instance.template\"\n        [ngTemplateOutlet]=\"instance.template!\"\n        [ngTemplateOutletContext]=\"{ $implicit: this, data: instance.options?.nzData }\"\n      >\n      </ng-template>\n      <a tabindex=\"0\" class=\"ant-notification-notice-close\" (click)=\"close()\">\n        <span class=\"ant-notification-notice-close-x\">\n          <ng-container *ngIf=\"instance.options?.nzCloseIcon; else iconTpl\">\n            <ng-container *nzStringTemplateOutlet=\"instance.options?.nzCloseIcon; let closeIcon\">\n              <i nz-icon [nzType]=\"closeIcon\"></i>\n            </ng-container>\n          </ng-container>\n          <ng-template #iconTpl>\n            <i nz-icon nzType=\"close\" class=\"ant-notification-close-icon\"></i>\n          </ng-template>\n        </span>\n      </a>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    NzNotificationComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    NzNotificationComponent.propDecorators = {
        instance: [{ type: Input }],
        placement: [{ type: Input }],
        index: [{ type: Input }],
        destroyed: [{ type: Output }]
    };
    return NzNotificationComponent;
}(NzMNComponent));
export { NzNotificationComponent };
if (false) {
    /** @type {?} */
    NzNotificationComponent.prototype.instance;
    /** @type {?} */
    NzNotificationComponent.prototype.placement;
    /** @type {?} */
    NzNotificationComponent.prototype.index;
    /** @type {?} */
    NzNotificationComponent.prototype.destroyed;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbm90aWZpY2F0aW9uLyIsInNvdXJjZXMiOlsibm90aWZpY2F0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4SCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFJdEQ7SUF1RTZDLDJDQUFhO0lBTXhELGlDQUFZLEdBQXNCO1FBQWxDLFlBQ0Usa0JBQU0sR0FBRyxDQUFDLFNBQ1g7UUFKa0IsZUFBUyxHQUFHLElBQUksWUFBWSxFQUF1QyxDQUFDOztJQUl2RixDQUFDOzs7O0lBRUQsNkNBQVc7OztJQUFYO1FBQ0UsaUJBQU0sV0FBVyxXQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCx5Q0FBTzs7OztJQUFQLFVBQVEsS0FBaUI7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCx1Q0FBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxzQkFBSSwwQ0FBSzs7OztRQUFUO1lBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxPQUFPLEVBQUU7Z0JBQ25DLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxZQUFZLEVBQUU7b0JBQ25FLE9BQU8sV0FBVyxDQUFDO2lCQUNwQjtxQkFBTTtvQkFDTCxPQUFPLFlBQVksQ0FBQztpQkFDckI7YUFDRjtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO2FBQzVCO1FBQ0gsQ0FBQzs7O09BQUE7O2dCQXhHRixTQUFTLFNBQUM7b0JBQ1QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLFVBQVUsRUFBRSxDQUFDLGtCQUFrQixDQUFDO29CQUNoQyxRQUFRLEVBQUUsNHZGQStEVDtpQkFDRjs7OztnQkE1RVEsaUJBQWlCOzs7MkJBOEV2QixLQUFLOzRCQUNMLEtBQUs7d0JBQ0wsS0FBSzs0QkFDTCxNQUFNOztJQThCVCw4QkFBQztDQUFBLEFBekdELENBdUU2QyxhQUFhLEdBa0N6RDtTQWxDWSx1QkFBdUI7OztJQUNsQywyQ0FBaUQ7O0lBQ2pELDRDQUE0Qjs7SUFDNUIsd0NBQXdCOztJQUN4Qiw0Q0FBdUYiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG5vdGlmaWNhdGlvbk1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xuaW1wb3J0IHsgTnpNTkNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVzc2FnZSc7XG5cbmltcG9ydCB7IE56Tm90aWZpY2F0aW9uRGF0YSB9IGZyb20gJy4vdHlwaW5ncyc7XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ256LW5vdGlmaWNhdGlvbicsXG4gIGV4cG9ydEFzOiAnbnpOb3RpZmljYXRpb24nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgYW5pbWF0aW9uczogW25vdGlmaWNhdGlvbk1vdGlvbl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJhbnQtbm90aWZpY2F0aW9uLW5vdGljZSBhbnQtbm90aWZpY2F0aW9uLW5vdGljZS1jbG9zYWJsZVwiXG4gICAgICBbbmdTdHlsZV09XCJpbnN0YW5jZS5vcHRpb25zPy5uelN0eWxlIHx8IG51bGxcIlxuICAgICAgW25nQ2xhc3NdPVwiaW5zdGFuY2Uub3B0aW9ucz8ubnpDbGFzcyB8fCAnJ1wiXG4gICAgICBbQG5vdGlmaWNhdGlvbk1vdGlvbl09XCJzdGF0ZVwiXG4gICAgICAoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCJcbiAgICAgIChtb3VzZWVudGVyKT1cIm9uRW50ZXIoKVwiXG4gICAgICAobW91c2VsZWF2ZSk9XCJvbkxlYXZlKClcIlxuICAgID5cbiAgICAgIDxkaXYgKm5nSWY9XCIhaW5zdGFuY2UudGVtcGxhdGVcIiBjbGFzcz1cImFudC1ub3RpZmljYXRpb24tbm90aWNlLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC1ub3RpZmljYXRpb24tbm90aWNlLWNvbnRlbnRcIiBbbmdDbGFzc109XCJ7ICdhbnQtbm90aWZpY2F0aW9uLW5vdGljZS13aXRoLWljb24nOiBpbnN0YW5jZS50eXBlICE9PSAnYmxhbmsnIH1cIj5cbiAgICAgICAgICA8ZGl2IFtjbGFzcy5hbnQtbm90aWZpY2F0aW9uLW5vdGljZS13aXRoLWljb25dPVwiaW5zdGFuY2UudHlwZSAhPT0gJ2JsYW5rJ1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiaW5zdGFuY2UudHlwZVwiPlxuICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInc3VjY2VzcydcIlxuICAgICAgICAgICAgICAgIG56LWljb25cbiAgICAgICAgICAgICAgICBuelR5cGU9XCJjaGVjay1jaXJjbGVcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYW50LW5vdGlmaWNhdGlvbi1ub3RpY2UtaWNvbiBhbnQtbm90aWZpY2F0aW9uLW5vdGljZS1pY29uLXN1Y2Nlc3NcIlxuICAgICAgICAgICAgICA+PC9pPlxuICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInaW5mbydcIlxuICAgICAgICAgICAgICAgIG56LWljb25cbiAgICAgICAgICAgICAgICBuelR5cGU9XCJpbmZvLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJhbnQtbm90aWZpY2F0aW9uLW5vdGljZS1pY29uIGFudC1ub3RpZmljYXRpb24tbm90aWNlLWljb24taW5mb1wiXG4gICAgICAgICAgICAgID48L2k+XG4gICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIid3YXJuaW5nJ1wiXG4gICAgICAgICAgICAgICAgbnotaWNvblxuICAgICAgICAgICAgICAgIG56VHlwZT1cImV4Y2xhbWF0aW9uLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJhbnQtbm90aWZpY2F0aW9uLW5vdGljZS1pY29uIGFudC1ub3RpZmljYXRpb24tbm90aWNlLWljb24td2FybmluZ1wiXG4gICAgICAgICAgICAgID48L2k+XG4gICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidlcnJvcidcIlxuICAgICAgICAgICAgICAgIG56LWljb25cbiAgICAgICAgICAgICAgICBuelR5cGU9XCJjbG9zZS1jaXJjbGVcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYW50LW5vdGlmaWNhdGlvbi1ub3RpY2UtaWNvbiBhbnQtbm90aWZpY2F0aW9uLW5vdGljZS1pY29uLWVycm9yXCJcbiAgICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1ub3RpZmljYXRpb24tbm90aWNlLW1lc3NhZ2VcIiBbaW5uZXJIVE1MXT1cImluc3RhbmNlLnRpdGxlXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LW5vdGlmaWNhdGlvbi1ub3RpY2UtZGVzY3JpcHRpb25cIiBbaW5uZXJIVE1MXT1cImluc3RhbmNlLmNvbnRlbnRcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgICBbbmdJZl09XCJpbnN0YW5jZS50ZW1wbGF0ZVwiXG4gICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImluc3RhbmNlLnRlbXBsYXRlIVwiXG4gICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogdGhpcywgZGF0YTogaW5zdGFuY2Uub3B0aW9ucz8ubnpEYXRhIH1cIlxuICAgICAgPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxhIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiYW50LW5vdGlmaWNhdGlvbi1ub3RpY2UtY2xvc2VcIiAoY2xpY2spPVwiY2xvc2UoKVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImFudC1ub3RpZmljYXRpb24tbm90aWNlLWNsb3NlLXhcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaW5zdGFuY2Uub3B0aW9ucz8ubnpDbG9zZUljb247IGVsc2UgaWNvblRwbFwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImluc3RhbmNlLm9wdGlvbnM/Lm56Q2xvc2VJY29uOyBsZXQgY2xvc2VJY29uXCI+XG4gICAgICAgICAgICAgIDxpIG56LWljb24gW256VHlwZV09XCJjbG9zZUljb25cIj48L2k+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgI2ljb25UcGw+XG4gICAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImNsb3NlXCIgY2xhc3M9XCJhbnQtbm90aWZpY2F0aW9uLWNsb3NlLWljb25cIj48L2k+XG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE56Tm90aWZpY2F0aW9uQ29tcG9uZW50IGV4dGVuZHMgTnpNTkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGluc3RhbmNlITogUmVxdWlyZWQ8TnpOb3RpZmljYXRpb25EYXRhPjtcbiAgQElucHV0KCkgcGxhY2VtZW50Pzogc3RyaW5nO1xuICBASW5wdXQoKSBpbmRleCE6IG51bWJlcjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGRlc3Ryb3llZCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBpZDogc3RyaW5nOyB1c2VyQWN0aW9uOiBib29sZWFuIH0+KCk7XG5cbiAgY29uc3RydWN0b3IoY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKGNkcik7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICAgIHRoaXMuaW5zdGFuY2Uub25DbGljay5jb21wbGV0ZSgpO1xuICB9XG5cbiAgb25DbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuaW5zdGFuY2Uub25DbGljay5uZXh0KGV2ZW50KTtcbiAgfVxuXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSh0cnVlKTtcbiAgfVxuXG4gIGdldCBzdGF0ZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLmluc3RhbmNlLnN0YXRlID09PSAnZW50ZXInKSB7XG4gICAgICBpZiAodGhpcy5wbGFjZW1lbnQgPT09ICd0b3BMZWZ0JyB8fCB0aGlzLnBsYWNlbWVudCA9PT0gJ2JvdHRvbUxlZnQnKSB7XG4gICAgICAgIHJldHVybiAnZW50ZXJMZWZ0JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnZW50ZXJSaWdodCc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlLnN0YXRlO1xuICAgIH1cbiAgfVxufVxuIl19