/**
 * @fileoverview added by tsickle
 * Generated from: notification.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { notificationMotion } from 'ng-zorro-antd/core/animation';
import { NzMNComponent } from 'ng-zorro-antd/message';
export class NzNotificationComponent extends NzMNComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        super(cdr);
        this.destroyed = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
        this.instance.onClick.complete();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        this.instance.onClick.next(event);
    }
    /**
     * @return {?}
     */
    close() {
        this.destroy(true);
    }
    /**
     * @return {?}
     */
    get state() {
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
    }
}
NzNotificationComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-notification',
                exportAs: 'nzNotification',
                preserveWhitespaces: false,
                animations: [notificationMotion],
                template: `
    <div
      class="ant-notification-notice ant-notification-notice-closable"
      [ngStyle]="instance.options?.nzStyle || null"
      [ngClass]="instance.options?.nzClass || ''"
      [@notificationMotion]="state"
      (click)="onClick($event)"
      (mouseenter)="onEnter()"
      (mouseleave)="onLeave()"
    >
      <div *ngIf="!instance.template" class="ant-notification-notice-content">
        <div class="ant-notification-notice-content" [ngClass]="{ 'ant-notification-notice-with-icon': instance.type !== 'blank' }">
          <div [class.ant-notification-notice-with-icon]="instance.type !== 'blank'">
            <ng-container [ngSwitch]="instance.type">
              <i
                *ngSwitchCase="'success'"
                nz-icon
                nzType="check-circle"
                class="ant-notification-notice-icon ant-notification-notice-icon-success"
              ></i>
              <i
                *ngSwitchCase="'info'"
                nz-icon
                nzType="info-circle"
                class="ant-notification-notice-icon ant-notification-notice-icon-info"
              ></i>
              <i
                *ngSwitchCase="'warning'"
                nz-icon
                nzType="exclamation-circle"
                class="ant-notification-notice-icon ant-notification-notice-icon-warning"
              ></i>
              <i
                *ngSwitchCase="'error'"
                nz-icon
                nzType="close-circle"
                class="ant-notification-notice-icon ant-notification-notice-icon-error"
              ></i>
            </ng-container>
            <div class="ant-notification-notice-message" [innerHTML]="instance.title"></div>
            <div class="ant-notification-notice-description" [innerHTML]="instance.content"></div>
          </div>
        </div>
      </div>
      <ng-template
        [ngIf]="instance.template"
        [ngTemplateOutlet]="instance.template!"
        [ngTemplateOutletContext]="{ $implicit: this, data: instance.options?.nzData }"
      >
      </ng-template>
      <a tabindex="0" class="ant-notification-notice-close" (click)="close()">
        <span class="ant-notification-notice-close-x">
          <ng-container *ngIf="instance.options?.nzCloseIcon; else iconTpl">
            <ng-container *nzStringTemplateOutlet="instance.options?.nzCloseIcon; let closeIcon">
              <i nz-icon [nzType]="closeIcon"></i>
            </ng-container>
          </ng-container>
          <ng-template #iconTpl>
            <i nz-icon nzType="close" class="ant-notification-close-icon"></i>
          </ng-template>
        </span>
      </a>
    </div>
  `
            }] }
];
/** @nocollapse */
NzNotificationComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NzNotificationComponent.propDecorators = {
    instance: [{ type: Input }],
    placement: [{ type: Input }],
    index: [{ type: Input }],
    destroyed: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbm90aWZpY2F0aW9uLyIsInNvdXJjZXMiOlsibm90aWZpY2F0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQTJFdEQsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGFBQWE7Ozs7SUFNeEQsWUFBWSxHQUFzQjtRQUNoQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFITSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQXVDLENBQUM7SUFJdkYsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBaUI7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1AsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxPQUFPLEVBQUU7WUFDbkMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFlBQVksRUFBRTtnQkFDbkUsT0FBTyxXQUFXLENBQUM7YUFDcEI7aUJBQU07Z0JBQ0wsT0FBTyxZQUFZLENBQUM7YUFDckI7U0FDRjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztTQUM1QjtJQUNILENBQUM7OztZQXhHRixTQUFTLFNBQUM7Z0JBQ1QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFVBQVUsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUNoQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQStEVDthQUNGOzs7O1lBNUVRLGlCQUFpQjs7O3VCQThFdkIsS0FBSzt3QkFDTCxLQUFLO29CQUNMLEtBQUs7d0JBQ0wsTUFBTTs7OztJQUhQLDJDQUFpRDs7SUFDakQsNENBQTRCOztJQUM1Qix3Q0FBd0I7O0lBQ3hCLDRDQUF1RiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbm90aWZpY2F0aW9uTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XG5pbXBvcnQgeyBOek1OQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZXNzYWdlJztcblxuaW1wb3J0IHsgTnpOb3RpZmljYXRpb25EYXRhIH0gZnJvbSAnLi90eXBpbmdzJztcblxuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotbm90aWZpY2F0aW9uJyxcbiAgZXhwb3J0QXM6ICduek5vdGlmaWNhdGlvbicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBhbmltYXRpb25zOiBbbm90aWZpY2F0aW9uTW90aW9uXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImFudC1ub3RpZmljYXRpb24tbm90aWNlIGFudC1ub3RpZmljYXRpb24tbm90aWNlLWNsb3NhYmxlXCJcbiAgICAgIFtuZ1N0eWxlXT1cImluc3RhbmNlLm9wdGlvbnM/Lm56U3R5bGUgfHwgbnVsbFwiXG4gICAgICBbbmdDbGFzc109XCJpbnN0YW5jZS5vcHRpb25zPy5uekNsYXNzIHx8ICcnXCJcbiAgICAgIFtAbm90aWZpY2F0aW9uTW90aW9uXT1cInN0YXRlXCJcbiAgICAgIChjbGljayk9XCJvbkNsaWNrKCRldmVudClcIlxuICAgICAgKG1vdXNlZW50ZXIpPVwib25FbnRlcigpXCJcbiAgICAgIChtb3VzZWxlYXZlKT1cIm9uTGVhdmUoKVwiXG4gICAgPlxuICAgICAgPGRpdiAqbmdJZj1cIiFpbnN0YW5jZS50ZW1wbGF0ZVwiIGNsYXNzPVwiYW50LW5vdGlmaWNhdGlvbi1ub3RpY2UtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LW5vdGlmaWNhdGlvbi1ub3RpY2UtY29udGVudFwiIFtuZ0NsYXNzXT1cInsgJ2FudC1ub3RpZmljYXRpb24tbm90aWNlLXdpdGgtaWNvbic6IGluc3RhbmNlLnR5cGUgIT09ICdibGFuaycgfVwiPlxuICAgICAgICAgIDxkaXYgW2NsYXNzLmFudC1ub3RpZmljYXRpb24tbm90aWNlLXdpdGgtaWNvbl09XCJpbnN0YW5jZS50eXBlICE9PSAnYmxhbmsnXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJpbnN0YW5jZS50eXBlXCI+XG4gICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidzdWNjZXNzJ1wiXG4gICAgICAgICAgICAgICAgbnotaWNvblxuICAgICAgICAgICAgICAgIG56VHlwZT1cImNoZWNrLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJhbnQtbm90aWZpY2F0aW9uLW5vdGljZS1pY29uIGFudC1ub3RpZmljYXRpb24tbm90aWNlLWljb24tc3VjY2Vzc1wiXG4gICAgICAgICAgICAgID48L2k+XG4gICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidpbmZvJ1wiXG4gICAgICAgICAgICAgICAgbnotaWNvblxuICAgICAgICAgICAgICAgIG56VHlwZT1cImluZm8tY2lyY2xlXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImFudC1ub3RpZmljYXRpb24tbm90aWNlLWljb24gYW50LW5vdGlmaWNhdGlvbi1ub3RpY2UtaWNvbi1pbmZvXCJcbiAgICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ3dhcm5pbmcnXCJcbiAgICAgICAgICAgICAgICBuei1pY29uXG4gICAgICAgICAgICAgICAgbnpUeXBlPVwiZXhjbGFtYXRpb24tY2lyY2xlXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImFudC1ub3RpZmljYXRpb24tbm90aWNlLWljb24gYW50LW5vdGlmaWNhdGlvbi1ub3RpY2UtaWNvbi13YXJuaW5nXCJcbiAgICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2Vycm9yJ1wiXG4gICAgICAgICAgICAgICAgbnotaWNvblxuICAgICAgICAgICAgICAgIG56VHlwZT1cImNsb3NlLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJhbnQtbm90aWZpY2F0aW9uLW5vdGljZS1pY29uIGFudC1ub3RpZmljYXRpb24tbm90aWNlLWljb24tZXJyb3JcIlxuICAgICAgICAgICAgICA+PC9pPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LW5vdGlmaWNhdGlvbi1ub3RpY2UtbWVzc2FnZVwiIFtpbm5lckhUTUxdPVwiaW5zdGFuY2UudGl0bGVcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtbm90aWZpY2F0aW9uLW5vdGljZS1kZXNjcmlwdGlvblwiIFtpbm5lckhUTUxdPVwiaW5zdGFuY2UuY29udGVudFwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPG5nLXRlbXBsYXRlXG4gICAgICAgIFtuZ0lmXT1cImluc3RhbmNlLnRlbXBsYXRlXCJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiaW5zdGFuY2UudGVtcGxhdGUhXCJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiB0aGlzLCBkYXRhOiBpbnN0YW5jZS5vcHRpb25zPy5uekRhdGEgfVwiXG4gICAgICA+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPGEgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJhbnQtbm90aWZpY2F0aW9uLW5vdGljZS1jbG9zZVwiIChjbGljayk9XCJjbG9zZSgpXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LW5vdGlmaWNhdGlvbi1ub3RpY2UtY2xvc2UteFwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpbnN0YW5jZS5vcHRpb25zPy5uekNsb3NlSWNvbjsgZWxzZSBpY29uVHBsXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiaW5zdGFuY2Uub3B0aW9ucz8ubnpDbG9zZUljb247IGxldCBjbG9zZUljb25cIj5cbiAgICAgICAgICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cImNsb3NlSWNvblwiPjwvaT5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjaWNvblRwbD5cbiAgICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiY2xvc2VcIiBjbGFzcz1cImFudC1ub3RpZmljYXRpb24tY2xvc2UtaWNvblwiPjwvaT5cbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTnpOb3RpZmljYXRpb25Db21wb25lbnQgZXh0ZW5kcyBOek1OQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQElucHV0KCkgaW5zdGFuY2UhOiBSZXF1aXJlZDxOek5vdGlmaWNhdGlvbkRhdGE+O1xuICBASW5wdXQoKSBwbGFjZW1lbnQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGluZGV4ITogbnVtYmVyO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZGVzdHJveWVkID0gbmV3IEV2ZW50RW1pdHRlcjx7IGlkOiBzdHJpbmc7IHVzZXJBY3Rpb246IGJvb2xlYW4gfT4oKTtcblxuICBjb25zdHJ1Y3RvcihjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoY2RyKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbkNsaWNrLmNvbXBsZXRlKCk7XG4gIH1cblxuICBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5pbnN0YW5jZS5vbkNsaWNrLm5leHQoZXZlbnQpO1xuICB9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95KHRydWUpO1xuICB9XG5cbiAgZ2V0IHN0YXRlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2Uuc3RhdGUgPT09ICdlbnRlcicpIHtcbiAgICAgIGlmICh0aGlzLnBsYWNlbWVudCA9PT0gJ3RvcExlZnQnIHx8IHRoaXMucGxhY2VtZW50ID09PSAnYm90dG9tTGVmdCcpIHtcbiAgICAgICAgcmV0dXJuICdlbnRlckxlZnQnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdlbnRlclJpZ2h0JztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2Uuc3RhdGU7XG4gICAgfVxuICB9XG59XG4iXX0=