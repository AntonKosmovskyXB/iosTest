/**
 * @fileoverview added by tsickle
 * Generated from: pagination-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
var NzPaginationItemComponent = /** @class */ (function () {
    function NzPaginationItemComponent() {
        this.active = false;
        this.index = null;
        this.disabled = false;
        this.type = null;
        this.itemRender = null;
        this.diffIndex = new EventEmitter();
        this.gotoIndex = new EventEmitter();
        this.title = null;
    }
    /**
     * @return {?}
     */
    NzPaginationItemComponent.prototype.clickItem = /**
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            if (this.type === 'page') {
                this.gotoIndex.emit((/** @type {?} */ (this.index)));
            }
            else {
                this.diffIndex.emit(((/** @type {?} */ ({
                    next: 1,
                    prev: -1,
                    prev_5: -5,
                    next_5: 5
                })))[(/** @type {?} */ (this.type))]);
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzPaginationItemComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _a, _b, _c, _d;
        var locale = changes.locale, index = changes.index, type = changes.type;
        if (locale || index || type) {
            this.title = ((/** @type {?} */ ({
                page: "" + this.index,
                next: (_a = this.locale) === null || _a === void 0 ? void 0 : _a.next_page,
                prev: (_b = this.locale) === null || _b === void 0 ? void 0 : _b.prev_page,
                prev_5: (_c = this.locale) === null || _c === void 0 ? void 0 : _c.prev_5,
                next_5: (_d = this.locale) === null || _d === void 0 ? void 0 : _d.next_5
            })))[(/** @type {?} */ (this.type))];
        }
    };
    NzPaginationItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'li[nz-pagination-item]',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <ng-template #renderItemTemplate let-type let-page=\"page\">\n      <ng-container [ngSwitch]=\"type\">\n        <a *ngSwitchCase=\"'page'\">{{ page }}</a>\n        <ng-container *ngSwitchDefault>\n          <a class=\"ant-pagination-item-link\" [ngSwitch]=\"type\">\n            <i nz-icon nzType=\"left\" *ngSwitchCase=\"'prev'\"></i>\n            <i nz-icon nzType=\"right\" *ngSwitchCase=\"'next'\"></i>\n            <div class=\"ant-pagination-item-container\" *ngSwitchDefault>\n              <ng-container [ngSwitch]=\"type\">\n                <i *ngSwitchCase=\"'prev_5'\" nz-icon nzType=\"double-left\" class=\"ant-pagination-item-link-icon\"></i>\n                <i *ngSwitchCase=\"'next_5'\" nz-icon nzType=\"double-right\" class=\"ant-pagination-item-link-icon\"></i>\n              </ng-container>\n              <span class=\"ant-pagination-item-ellipsis\">\u2022\u2022\u2022</span>\n            </div>\n          </a>\n        </ng-container>\n      </ng-container>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"itemRender || renderItemTemplate\"\n      [ngTemplateOutletContext]=\"{ $implicit: type, page: index }\"\n    ></ng-template>\n  ",
                    host: {
                        '[class.ant-pagination-prev]': "type === 'prev'",
                        '[class.ant-pagination-next]': "type === 'next'",
                        '[class.ant-pagination-item]': "type === 'page'",
                        '[class.ant-pagination-jump-prev]': "type === 'prev_5'",
                        '[class.ant-pagination-jump-prev-custom-icon]': "type === 'prev_5'",
                        '[class.ant-pagination-jump-next]': "type === 'next_5'",
                        '[class.ant-pagination-jump-next-custom-icon]': "type === 'next_5'",
                        '[class.ant-pagination-disabled]': 'disabled',
                        '[class.ant-pagination-item-active]]': 'active',
                        '[attr.title]': 'title',
                        '(click)': 'clickItem()'
                    }
                }] }
    ];
    NzPaginationItemComponent.propDecorators = {
        active: [{ type: Input }],
        locale: [{ type: Input }],
        index: [{ type: Input }],
        disabled: [{ type: Input }],
        type: [{ type: Input }],
        itemRender: [{ type: Input }],
        diffIndex: [{ type: Output }],
        gotoIndex: [{ type: Output }]
    };
    return NzPaginationItemComponent;
}());
export { NzPaginationItemComponent };
if (false) {
    /** @type {?} */
    NzPaginationItemComponent.ngAcceptInputType_type;
    /** @type {?} */
    NzPaginationItemComponent.ngAcceptInputType_index;
    /** @type {?} */
    NzPaginationItemComponent.prototype.active;
    /** @type {?} */
    NzPaginationItemComponent.prototype.locale;
    /** @type {?} */
    NzPaginationItemComponent.prototype.index;
    /** @type {?} */
    NzPaginationItemComponent.prototype.disabled;
    /** @type {?} */
    NzPaginationItemComponent.prototype.type;
    /** @type {?} */
    NzPaginationItemComponent.prototype.itemRender;
    /** @type {?} */
    NzPaginationItemComponent.prototype.diffIndex;
    /** @type {?} */
    NzPaginationItemComponent.prototype.gotoIndex;
    /** @type {?} */
    NzPaginationItemComponent.prototype.title;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcGFnaW5hdGlvbi8iLCJzb3VyY2VzIjpbInBhZ2luYXRpb24taXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBR04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBS3ZCO0lBQUE7UUErQ1csV0FBTSxHQUFHLEtBQUssQ0FBQztRQUVmLFVBQUssR0FBa0IsSUFBSSxDQUFDO1FBQzVCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsU0FBSSxHQUF1QyxJQUFJLENBQUM7UUFDaEQsZUFBVSxHQUFvRCxJQUFJLENBQUM7UUFDekQsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDdkMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDMUQsVUFBSyxHQUFrQixJQUFJLENBQUM7SUE2QjlCLENBQUM7Ozs7SUE1QkMsNkNBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQUEsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7YUFDbEM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ2pCLENBQUMsbUJBQUE7b0JBQ0MsSUFBSSxFQUFFLENBQUM7b0JBQ1AsSUFBSSxFQUFFLENBQUMsQ0FBQztvQkFDUixNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUNWLE1BQU0sRUFBRSxDQUFDO2lCQUNWLEVBQWEsQ0FBQyxDQUFDLG1CQUFBLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUM1QixDQUFDO2FBQ0g7U0FDRjtJQUNILENBQUM7Ozs7O0lBQ0QsK0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCOztRQUN4QixJQUFBLHVCQUFNLEVBQUUscUJBQUssRUFBRSxtQkFBSTtRQUMzQixJQUFJLE1BQU0sSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxtQkFBQTtnQkFDWixJQUFJLEVBQUUsS0FBRyxJQUFJLENBQUMsS0FBTztnQkFDckIsSUFBSSxRQUFFLElBQUksQ0FBQyxNQUFNLDBDQUFFLFNBQVM7Z0JBQzVCLElBQUksUUFBRSxJQUFJLENBQUMsTUFBTSwwQ0FBRSxTQUFTO2dCQUM1QixNQUFNLFFBQUUsSUFBSSxDQUFDLE1BQU0sMENBQUUsTUFBTTtnQkFDM0IsTUFBTSxRQUFFLElBQUksQ0FBQyxNQUFNLDBDQUFFLE1BQU07YUFDNUIsRUFBYSxDQUFDLENBQUMsbUJBQUEsSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDOztnQkFuRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsUUFBUSxFQUFFLGdxQ0F1QlQ7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLDZCQUE2QixFQUFFLGlCQUFpQjt3QkFDaEQsNkJBQTZCLEVBQUUsaUJBQWlCO3dCQUNoRCw2QkFBNkIsRUFBRSxpQkFBaUI7d0JBQ2hELGtDQUFrQyxFQUFFLG1CQUFtQjt3QkFDdkQsOENBQThDLEVBQUUsbUJBQW1CO3dCQUNuRSxrQ0FBa0MsRUFBRSxtQkFBbUI7d0JBQ3ZELDhDQUE4QyxFQUFFLG1CQUFtQjt3QkFDbkUsaUNBQWlDLEVBQUUsVUFBVTt3QkFDN0MscUNBQXFDLEVBQUUsUUFBUTt3QkFDL0MsY0FBYyxFQUFFLE9BQU87d0JBQ3ZCLFNBQVMsRUFBRSxhQUFhO3FCQUN6QjtpQkFDRjs7O3lCQUtFLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLEtBQUs7dUJBQ0wsS0FBSzs2QkFDTCxLQUFLOzRCQUNMLE1BQU07NEJBQ04sTUFBTTs7SUE4QlQsZ0NBQUM7Q0FBQSxBQXBGRCxJQW9GQztTQXpDWSx5QkFBeUI7OztJQUNwQyxpREFBOEU7O0lBQzlFLGtEQUEwRDs7SUFFMUQsMkNBQXdCOztJQUN4QiwyQ0FBNEM7O0lBQzVDLDBDQUFxQzs7SUFDckMsNkNBQTBCOztJQUMxQix5Q0FBeUQ7O0lBQ3pELCtDQUE0RTs7SUFDNUUsOENBQTBEOztJQUMxRCw4Q0FBMEQ7O0lBQzFELDBDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpQYWdpbmF0aW9uSTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQgeyBQYWdpbmF0aW9uSXRlbVJlbmRlckNvbnRleHQsIFBhZ2luYXRpb25JdGVtVHlwZSB9IGZyb20gJy4vcGFnaW5hdGlvbi50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpW256LXBhZ2luYXRpb24taXRlbV0nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNyZW5kZXJJdGVtVGVtcGxhdGUgbGV0LXR5cGUgbGV0LXBhZ2U9XCJwYWdlXCI+XG4gICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJ0eXBlXCI+XG4gICAgICAgIDxhICpuZ1N3aXRjaENhc2U9XCIncGFnZSdcIj57eyBwYWdlIH19PC9hPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgICAgICAgPGEgY2xhc3M9XCJhbnQtcGFnaW5hdGlvbi1pdGVtLWxpbmtcIiBbbmdTd2l0Y2hdPVwidHlwZVwiPlxuICAgICAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJsZWZ0XCIgKm5nU3dpdGNoQ2FzZT1cIidwcmV2J1wiPjwvaT5cbiAgICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwicmlnaHRcIiAqbmdTd2l0Y2hDYXNlPVwiJ25leHQnXCI+PC9pPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1wYWdpbmF0aW9uLWl0ZW0tY29udGFpbmVyXCIgKm5nU3dpdGNoRGVmYXVsdD5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwidHlwZVwiPlxuICAgICAgICAgICAgICAgIDxpICpuZ1N3aXRjaENhc2U9XCIncHJldl81J1wiIG56LWljb24gbnpUeXBlPVwiZG91YmxlLWxlZnRcIiBjbGFzcz1cImFudC1wYWdpbmF0aW9uLWl0ZW0tbGluay1pY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgIDxpICpuZ1N3aXRjaENhc2U9XCInbmV4dF81J1wiIG56LWljb24gbnpUeXBlPVwiZG91YmxlLXJpZ2h0XCIgY2xhc3M9XCJhbnQtcGFnaW5hdGlvbi1pdGVtLWxpbmstaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXBhZ2luYXRpb24taXRlbS1lbGxpcHNpc1wiPuKAouKAouKAojwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiaXRlbVJlbmRlciB8fCByZW5kZXJJdGVtVGVtcGxhdGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiB0eXBlLCBwYWdlOiBpbmRleCB9XCJcbiAgICA+PC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXBhZ2luYXRpb24tcHJldl0nOiBgdHlwZSA9PT0gJ3ByZXYnYCxcbiAgICAnW2NsYXNzLmFudC1wYWdpbmF0aW9uLW5leHRdJzogYHR5cGUgPT09ICduZXh0J2AsXG4gICAgJ1tjbGFzcy5hbnQtcGFnaW5hdGlvbi1pdGVtXSc6IGB0eXBlID09PSAncGFnZSdgLFxuICAgICdbY2xhc3MuYW50LXBhZ2luYXRpb24tanVtcC1wcmV2XSc6IGB0eXBlID09PSAncHJldl81J2AsXG4gICAgJ1tjbGFzcy5hbnQtcGFnaW5hdGlvbi1qdW1wLXByZXYtY3VzdG9tLWljb25dJzogYHR5cGUgPT09ICdwcmV2XzUnYCxcbiAgICAnW2NsYXNzLmFudC1wYWdpbmF0aW9uLWp1bXAtbmV4dF0nOiBgdHlwZSA9PT0gJ25leHRfNSdgLFxuICAgICdbY2xhc3MuYW50LXBhZ2luYXRpb24tanVtcC1uZXh0LWN1c3RvbS1pY29uXSc6IGB0eXBlID09PSAnbmV4dF81J2AsXG4gICAgJ1tjbGFzcy5hbnQtcGFnaW5hdGlvbi1kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxuICAgICdbY2xhc3MuYW50LXBhZ2luYXRpb24taXRlbS1hY3RpdmVdXSc6ICdhY3RpdmUnLFxuICAgICdbYXR0ci50aXRsZV0nOiAndGl0bGUnLFxuICAgICcoY2xpY2spJzogJ2NsaWNrSXRlbSgpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56UGFnaW5hdGlvbkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdHlwZTogUGFnaW5hdGlvbkl0ZW1UeXBlIHwgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2luZGV4OiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkO1xuXG4gIEBJbnB1dCgpIGFjdGl2ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBsb2NhbGUhOiBOelBhZ2luYXRpb25JMThuSW50ZXJmYWNlO1xuICBASW5wdXQoKSBpbmRleDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHR5cGU6IFBhZ2luYXRpb25JdGVtVHlwZSB8IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBpdGVtUmVuZGVyOiBUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uSXRlbVJlbmRlckNvbnRleHQ+IHwgbnVsbCA9IG51bGw7XG4gIEBPdXRwdXQoKSByZWFkb25seSBkaWZmSW5kZXggPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGdvdG9JbmRleCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICB0aXRsZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIGNsaWNrSXRlbSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdwYWdlJykge1xuICAgICAgICB0aGlzLmdvdG9JbmRleC5lbWl0KHRoaXMuaW5kZXghKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGlmZkluZGV4LmVtaXQoXG4gICAgICAgICAgKHtcbiAgICAgICAgICAgIG5leHQ6IDEsXG4gICAgICAgICAgICBwcmV2OiAtMSxcbiAgICAgICAgICAgIHByZXZfNTogLTUsXG4gICAgICAgICAgICBuZXh0XzU6IDVcbiAgICAgICAgICB9IGFzIE56U2FmZUFueSlbdGhpcy50eXBlIV1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbG9jYWxlLCBpbmRleCwgdHlwZSB9ID0gY2hhbmdlcztcbiAgICBpZiAobG9jYWxlIHx8IGluZGV4IHx8IHR5cGUpIHtcbiAgICAgIHRoaXMudGl0bGUgPSAoe1xuICAgICAgICBwYWdlOiBgJHt0aGlzLmluZGV4fWAsXG4gICAgICAgIG5leHQ6IHRoaXMubG9jYWxlPy5uZXh0X3BhZ2UsXG4gICAgICAgIHByZXY6IHRoaXMubG9jYWxlPy5wcmV2X3BhZ2UsXG4gICAgICAgIHByZXZfNTogdGhpcy5sb2NhbGU/LnByZXZfNSxcbiAgICAgICAgbmV4dF81OiB0aGlzLmxvY2FsZT8ubmV4dF81XG4gICAgICB9IGFzIE56U2FmZUFueSlbdGhpcy50eXBlIV07XG4gICAgfVxuICB9XG59XG4iXX0=