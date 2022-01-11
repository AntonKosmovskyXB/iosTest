/**
 * @fileoverview added by tsickle
 * Generated from: result.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
/** @type {?} */
const IconMap = {
    success: 'check-circle',
    error: 'close-circle',
    info: 'exclamation-circle',
    warning: 'warning'
};
/** @type {?} */
const ExceptionStatus = ['404', '500', '403'];
export class NzResultComponent {
    constructor() {
        this.nzStatus = 'info';
        this.isException = false;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setStatusIcon();
    }
    /**
     * @private
     * @return {?}
     */
    setStatusIcon() {
        /** @type {?} */
        const icon = this.nzIcon;
        this.isException = ExceptionStatus.indexOf(this.nzStatus) !== -1;
        this.icon = icon
            ? typeof icon === 'string'
                ? IconMap[(/** @type {?} */ (icon))] || icon
                : icon
            : this.isException
                ? undefined
                : IconMap[(/** @type {?} */ (this.nzStatus))];
    }
}
NzResultComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-result',
                exportAs: 'nzResult',
                template: `
    <div class="ant-result-icon">
      <ng-container *ngIf="!isException; else exceptionTpl">
        <ng-container *ngIf="icon">
          <ng-container *nzStringTemplateOutlet="icon; let icon">
            <i nz-icon [nzType]="icon" nzTheme="fill"></i>
          </ng-container>
        </ng-container>
        <ng-content *ngIf="!icon" select="[nz-result-icon]"></ng-content>
      </ng-container>
    </div>
    <ng-container *ngIf="nzTitle">
      <div class="ant-result-title" *nzStringTemplateOutlet="nzTitle">
        {{ nzTitle }}
      </div>
    </ng-container>
    <ng-content *ngIf="!nzTitle" select="div[nz-result-title]"></ng-content>
    <ng-container *ngIf="nzSubTitle">
      <div class="ant-result-subtitle" *nzStringTemplateOutlet="nzSubTitle">
        {{ nzSubTitle }}
      </div>
    </ng-container>
    <ng-content *ngIf="!nzSubTitle" select="div[nz-result-subtitle]"></ng-content>
    <ng-content select="nz-result-content, [nz-result-content]"></ng-content>
    <div class="ant-result-extra" *ngIf="nzExtra">
      <ng-container *nzStringTemplateOutlet="nzExtra">
        {{ nzExtra }}
      </ng-container>
    </div>
    <ng-content *ngIf="!nzExtra" select="div[nz-result-extra]"></ng-content>

    <ng-template #exceptionTpl>
      <ng-container [ngSwitch]="nzStatus">
        <nz-result-not-found *ngSwitchCase="'404'"></nz-result-not-found>
        <nz-result-server-error *ngSwitchCase="'500'"></nz-result-server-error>
        <nz-result-unauthorized *ngSwitchCase="'403'"></nz-result-unauthorized>
      </ng-container>
    </ng-template>
  `,
                host: {
                    '[class.ant-result]': 'true',
                    '[class.ant-result-success]': `nzStatus === 'success'`,
                    '[class.ant-result-error]': `nzStatus === 'error'`,
                    '[class.ant-result-info]': `nzStatus === 'info'`,
                    '[class.ant-result-warning]': `nzStatus === 'warning'`
                }
            }] }
];
/** @nocollapse */
NzResultComponent.ctorParameters = () => [];
NzResultComponent.propDecorators = {
    nzIcon: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzStatus: [{ type: Input }],
    nzSubTitle: [{ type: Input }],
    nzExtra: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzResultComponent.prototype.nzIcon;
    /** @type {?} */
    NzResultComponent.prototype.nzTitle;
    /** @type {?} */
    NzResultComponent.prototype.nzStatus;
    /** @type {?} */
    NzResultComponent.prototype.nzSubTitle;
    /** @type {?} */
    NzResultComponent.prototype.nzExtra;
    /** @type {?} */
    NzResultComponent.prototype.icon;
    /** @type {?} */
    NzResultComponent.prototype.isException;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcmVzdWx0LyIsInNvdXJjZXMiOlsicmVzdWx0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBMEIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7O01BTS9HLE9BQU8sR0FBRztJQUNkLE9BQU8sRUFBRSxjQUFjO0lBQ3ZCLEtBQUssRUFBRSxjQUFjO0lBQ3JCLElBQUksRUFBRSxvQkFBb0I7SUFDMUIsT0FBTyxFQUFFLFNBQVM7Q0FDbkI7O01BQ0ssZUFBZSxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7QUFzRDdDLE1BQU0sT0FBTyxpQkFBaUI7SUFVNUI7UUFQUyxhQUFRLEdBQXVCLE1BQU0sQ0FBQztRQUsvQyxnQkFBVyxHQUFHLEtBQUssQ0FBQztJQUVMLENBQUM7Ozs7SUFFaEIsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVPLGFBQWE7O2NBQ2IsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNO1FBRXhCLElBQUksQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO1lBQ2QsQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVE7Z0JBQ3hCLENBQUMsQ0FBQyxPQUFPLENBQUMsbUJBQUEsSUFBSSxFQUFvQixDQUFDLElBQUksSUFBSTtnQkFDM0MsQ0FBQyxDQUFDLElBQUk7WUFDUixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVc7Z0JBQ2xCLENBQUMsQ0FBQyxTQUFTO2dCQUNYLENBQUMsQ0FBQyxPQUFPLENBQUMsbUJBQUEsSUFBSSxDQUFDLFFBQVEsRUFBb0IsQ0FBQyxDQUFDO0lBQ2pELENBQUM7OztZQS9FRixTQUFTLFNBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQ1Q7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLG9CQUFvQixFQUFFLE1BQU07b0JBQzVCLDRCQUE0QixFQUFFLHdCQUF3QjtvQkFDdEQsMEJBQTBCLEVBQUUsc0JBQXNCO29CQUNsRCx5QkFBeUIsRUFBRSxxQkFBcUI7b0JBQ2hELDRCQUE0QixFQUFFLHdCQUF3QjtpQkFDdkQ7YUFDRjs7Ozs7cUJBRUUsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSztzQkFDTCxLQUFLOzs7O0lBSk4sbUNBQTZDOztJQUM3QyxvQ0FBOEM7O0lBQzlDLHFDQUErQzs7SUFDL0MsdUNBQWlEOztJQUNqRCxvQ0FBOEM7O0lBRTlDLGlDQUFrQzs7SUFDbEMsd0NBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlIE56UmVzdWx0SWNvblR5cGUgPSAnc3VjY2VzcycgfCAnZXJyb3InIHwgJ2luZm8nIHwgJ3dhcm5pbmcnO1xuZXhwb3J0IHR5cGUgTnpFeGNlcHRpb25TdGF0dXNUeXBlID0gJzQwNCcgfCAnNTAwJyB8ICc0MDMnO1xuZXhwb3J0IHR5cGUgTnpSZXN1bHRTdGF0dXNUeXBlID0gTnpFeGNlcHRpb25TdGF0dXNUeXBlIHwgTnpSZXN1bHRJY29uVHlwZTtcblxuY29uc3QgSWNvbk1hcCA9IHtcbiAgc3VjY2VzczogJ2NoZWNrLWNpcmNsZScsXG4gIGVycm9yOiAnY2xvc2UtY2lyY2xlJyxcbiAgaW5mbzogJ2V4Y2xhbWF0aW9uLWNpcmNsZScsXG4gIHdhcm5pbmc6ICd3YXJuaW5nJ1xufTtcbmNvbnN0IEV4Y2VwdGlvblN0YXR1cyA9IFsnNDA0JywgJzUwMCcsICc0MDMnXTtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ256LXJlc3VsdCcsXG4gIGV4cG9ydEFzOiAnbnpSZXN1bHQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJhbnQtcmVzdWx0LWljb25cIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNFeGNlcHRpb247IGVsc2UgZXhjZXB0aW9uVHBsXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpY29uXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImljb247IGxldCBpY29uXCI+XG4gICAgICAgICAgICA8aSBuei1pY29uIFtuelR5cGVdPVwiaWNvblwiIG56VGhlbWU9XCJmaWxsXCI+PC9pPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhaWNvblwiIHNlbGVjdD1cIltuei1yZXN1bHQtaWNvbl1cIj48L25nLWNvbnRlbnQ+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpUaXRsZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImFudC1yZXN1bHQtdGl0bGVcIiAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56VGl0bGVcIj5cbiAgICAgICAge3sgbnpUaXRsZSB9fVxuICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhbnpUaXRsZVwiIHNlbGVjdD1cImRpdltuei1yZXN1bHQtdGl0bGVdXCI+PC9uZy1jb250ZW50PlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuelN1YlRpdGxlXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LXJlc3VsdC1zdWJ0aXRsZVwiICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpTdWJUaXRsZVwiPlxuICAgICAgICB7eyBuelN1YlRpdGxlIH19XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctY29udGVudCAqbmdJZj1cIiFuelN1YlRpdGxlXCIgc2VsZWN0PVwiZGl2W256LXJlc3VsdC1zdWJ0aXRsZV1cIj48L25nLWNvbnRlbnQ+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibnotcmVzdWx0LWNvbnRlbnQsIFtuei1yZXN1bHQtY29udGVudF1cIj48L25nLWNvbnRlbnQ+XG4gICAgPGRpdiBjbGFzcz1cImFudC1yZXN1bHQtZXh0cmFcIiAqbmdJZj1cIm56RXh0cmFcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuekV4dHJhXCI+XG4gICAgICAgIHt7IG56RXh0cmEgfX1cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiIW56RXh0cmFcIiBzZWxlY3Q9XCJkaXZbbnotcmVzdWx0LWV4dHJhXVwiPjwvbmctY29udGVudD5cblxuICAgIDxuZy10ZW1wbGF0ZSAjZXhjZXB0aW9uVHBsPlxuICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwibnpTdGF0dXNcIj5cbiAgICAgICAgPG56LXJlc3VsdC1ub3QtZm91bmQgKm5nU3dpdGNoQ2FzZT1cIic0MDQnXCI+PC9uei1yZXN1bHQtbm90LWZvdW5kPlxuICAgICAgICA8bnotcmVzdWx0LXNlcnZlci1lcnJvciAqbmdTd2l0Y2hDYXNlPVwiJzUwMCdcIj48L256LXJlc3VsdC1zZXJ2ZXItZXJyb3I+XG4gICAgICAgIDxuei1yZXN1bHQtdW5hdXRob3JpemVkICpuZ1N3aXRjaENhc2U9XCInNDAzJ1wiPjwvbnotcmVzdWx0LXVuYXV0aG9yaXplZD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1yZXN1bHRdJzogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LXJlc3VsdC1zdWNjZXNzXSc6IGBuelN0YXR1cyA9PT0gJ3N1Y2Nlc3MnYCxcbiAgICAnW2NsYXNzLmFudC1yZXN1bHQtZXJyb3JdJzogYG56U3RhdHVzID09PSAnZXJyb3InYCxcbiAgICAnW2NsYXNzLmFudC1yZXN1bHQtaW5mb10nOiBgbnpTdGF0dXMgPT09ICdpbmZvJ2AsXG4gICAgJ1tjbGFzcy5hbnQtcmVzdWx0LXdhcm5pbmddJzogYG56U3RhdHVzID09PSAnd2FybmluZydgXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpSZXN1bHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBuekljb24/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpUaXRsZT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuelN0YXR1czogTnpSZXN1bHRTdGF0dXNUeXBlID0gJ2luZm8nO1xuICBASW5wdXQoKSBuelN1YlRpdGxlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56RXh0cmE/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBpY29uPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIGlzRXhjZXB0aW9uID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0U3RhdHVzSWNvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTdGF0dXNJY29uKCk6IHZvaWQge1xuICAgIGNvbnN0IGljb24gPSB0aGlzLm56SWNvbjtcblxuICAgIHRoaXMuaXNFeGNlcHRpb24gPSBFeGNlcHRpb25TdGF0dXMuaW5kZXhPZih0aGlzLm56U3RhdHVzKSAhPT0gLTE7XG4gICAgdGhpcy5pY29uID0gaWNvblxuICAgICAgPyB0eXBlb2YgaWNvbiA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBJY29uTWFwW2ljb24gYXMgTnpSZXN1bHRJY29uVHlwZV0gfHwgaWNvblxuICAgICAgICA6IGljb25cbiAgICAgIDogdGhpcy5pc0V4Y2VwdGlvblxuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDogSWNvbk1hcFt0aGlzLm56U3RhdHVzIGFzIE56UmVzdWx0SWNvblR5cGVdO1xuICB9XG59XG4iXX0=