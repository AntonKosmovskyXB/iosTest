/**
 * @fileoverview added by tsickle
 * Generated from: modal-footer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { isPromise } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzModalRef } from './modal-ref';
import { ModalOptions } from './modal-types';
export class NzModalFooterComponent {
    /**
     * @param {?} i18n
     * @param {?} config
     */
    constructor(i18n, config) {
        this.i18n = i18n;
        this.config = config;
        this.buttonsFooter = false;
        this.buttons = [];
        this.cancelTriggered = new EventEmitter();
        this.okTriggered = new EventEmitter();
        this.destroy$ = new Subject();
        if (Array.isArray(config.nzFooter)) {
            this.buttonsFooter = true;
            this.buttons = ((/** @type {?} */ (config.nzFooter))).map(mergeDefaultOption);
        }
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getLocaleData('Modal');
        }));
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.cancelTriggered.emit();
    }
    /**
     * @return {?}
     */
    onOk() {
        this.okTriggered.emit();
    }
    /**
     * Returns the value of the specified key.
     * If it is a function, run and return the return value of the function.
     * @deprecated Not support use function type.
     * \@breaking-change 10.0.0
     * @param {?} options
     * @param {?} prop
     * @return {?}
     */
    getButtonCallableProp(options, prop) {
        /** @type {?} */
        const value = options[prop];
        /** @type {?} */
        const componentInstance = this.modalRef.getContentComponent();
        return typeof value === 'function' ? value.apply(options, componentInstance && [componentInstance]) : value;
    }
    /**
     * Run function based on the type and set its `loading` prop if needed.
     * @deprecated Should be set options' value by the user, not library.
     * \@breaking-change 10.0.0
     * @param {?} options
     * @return {?}
     */
    onButtonClick(options) {
        /** @type {?} */
        const loading = this.getButtonCallableProp(options, 'loading');
        if (!loading) {
            /** @type {?} */
            const result = this.getButtonCallableProp(options, 'onClick');
            if (options.autoLoading && isPromise(result)) {
                options.loading = true;
                result.then((/**
                 * @return {?}
                 */
                () => (options.loading = false))).catch((/**
                 * @return {?}
                 */
                () => (options.loading = false)));
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzModalFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[nz-modal-footer]',
                exportAs: 'NzModalFooterBuiltin',
                template: `
    <ng-container *ngIf="config.nzFooter; else defaultFooterButtons">
      <ng-container *nzStringTemplateOutlet="config.nzFooter">
        <div *ngIf="!buttonsFooter" [innerHTML]="config.nzTitle"></div>
        <ng-container *ngIf="buttonsFooter">
          <button
            *ngFor="let button of buttons"
            nz-button
            (click)="onButtonClick(button)"
            [hidden]="!getButtonCallableProp(button, 'show')"
            [nzLoading]="getButtonCallableProp(button, 'loading')"
            [disabled]="getButtonCallableProp(button, 'disabled')"
            [nzType]="button.type!"
            [nzShape]="button.shape!"
            [nzSize]="button.size!"
            [nzGhost]="button.ghost!"
          >
            {{ button.label }}
          </button>
        </ng-container>
      </ng-container>
    </ng-container>
    <ng-template #defaultFooterButtons>
      <button
        *ngIf="config.nzCancelText !== null"
        [attr.cdkFocusInitial]="config.nzAutofocus === 'cancel' || null"
        nz-button
        (click)="onCancel()"
        [nzLoading]="!!config.nzCancelLoading"
        [disabled]="config.nzCancelDisabled"
      >
        {{ config.nzCancelText || locale.cancelText }}
      </button>
      <button
        *ngIf="config.nzOkText !== null"
        [attr.cdkFocusInitial]="config.nzAutofocus === 'ok' || null"
        nz-button
        [nzType]="config.nzOkType!"
        (click)="onOk()"
        [nzLoading]="!!config.nzOkLoading"
        [disabled]="config.nzOkDisabled"
      >
        {{ config.nzOkText || locale.okText }}
      </button>
    </ng-template>
  `,
                host: {
                    class: 'ant-modal-footer'
                },
                changeDetection: ChangeDetectionStrategy.Default
            }] }
];
/** @nocollapse */
NzModalFooterComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: ModalOptions }
];
NzModalFooterComponent.propDecorators = {
    cancelTriggered: [{ type: Output }],
    okTriggered: [{ type: Output }],
    modalRef: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzModalFooterComponent.prototype.buttonsFooter;
    /** @type {?} */
    NzModalFooterComponent.prototype.buttons;
    /** @type {?} */
    NzModalFooterComponent.prototype.locale;
    /** @type {?} */
    NzModalFooterComponent.prototype.cancelTriggered;
    /** @type {?} */
    NzModalFooterComponent.prototype.okTriggered;
    /** @type {?} */
    NzModalFooterComponent.prototype.modalRef;
    /**
     * @type {?}
     * @private
     */
    NzModalFooterComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzModalFooterComponent.prototype.i18n;
    /** @type {?} */
    NzModalFooterComponent.prototype.config;
}
/**
 * @param {?} options
 * @return {?}
 */
function mergeDefaultOption(options) {
    return Object.assign({ type: null, size: 'default', autoLoading: true, show: true, loading: false, disabled: false }, options);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbW9kYWwvIiwic291cmNlcyI6WyJtb2RhbC1mb290ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0csT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxhQUFhLEVBQXdCLE1BQU0sb0JBQW9CLENBQUM7QUFFekUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN6QyxPQUFPLEVBQXNCLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXdEakUsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFTakMsWUFBb0IsSUFBbUIsRUFBUyxNQUFvQjtRQUFoRCxTQUFJLEdBQUosSUFBSSxDQUFlO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQVJwRSxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixZQUFPLEdBQXlCLEVBQUUsQ0FBQztRQUVoQixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDM0MsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRWxELGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBR3JDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLG1CQUFBLE1B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QUssSUFDWixPQUFPLEVBQ1Y7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUHJvbWlzZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTnpJMThuU2VydmljZSwgTnpNb2RhbEkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuXG5pbXBvcnQgeyBOek1vZGFsUmVmIH0gZnJvbSAnLi9tb2RhbC1yZWYnO1xuaW1wb3J0IHsgTW9kYWxCdXR0b25PcHRpb25zLCBNb2RhbE9wdGlvbnMgfSBmcm9tICcuL21vZGFsLXR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGl2W256LW1vZGFsLWZvb3Rlcl0nLFxuICBleHBvcnRBczogJ056TW9kYWxGb290ZXJCdWlsdGluJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnLm56Rm9vdGVyOyBlbHNlIGRlZmF1bHRGb290ZXJCdXR0b25zXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiY29uZmlnLm56Rm9vdGVyXCI+XG4gICAgICAgIDxkaXYgKm5nSWY9XCIhYnV0dG9uc0Zvb3RlclwiIFtpbm5lckhUTUxdPVwiY29uZmlnLm56VGl0bGVcIj48L2Rpdj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImJ1dHRvbnNGb290ZXJcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgYnV0dG9uIG9mIGJ1dHRvbnNcIlxuICAgICAgICAgICAgbnotYnV0dG9uXG4gICAgICAgICAgICAoY2xpY2spPVwib25CdXR0b25DbGljayhidXR0b24pXCJcbiAgICAgICAgICAgIFtoaWRkZW5dPVwiIWdldEJ1dHRvbkNhbGxhYmxlUHJvcChidXR0b24sICdzaG93JylcIlxuICAgICAgICAgICAgW256TG9hZGluZ109XCJnZXRCdXR0b25DYWxsYWJsZVByb3AoYnV0dG9uLCAnbG9hZGluZycpXCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJnZXRCdXR0b25DYWxsYWJsZVByb3AoYnV0dG9uLCAnZGlzYWJsZWQnKVwiXG4gICAgICAgICAgICBbbnpUeXBlXT1cImJ1dHRvbi50eXBlIVwiXG4gICAgICAgICAgICBbbnpTaGFwZV09XCJidXR0b24uc2hhcGUhXCJcbiAgICAgICAgICAgIFtuelNpemVdPVwiYnV0dG9uLnNpemUhXCJcbiAgICAgICAgICAgIFtuekdob3N0XT1cImJ1dHRvbi5naG9zdCFcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IGJ1dHRvbi5sYWJlbCB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdEZvb3RlckJ1dHRvbnM+XG4gICAgICA8YnV0dG9uXG4gICAgICAgICpuZ0lmPVwiY29uZmlnLm56Q2FuY2VsVGV4dCAhPT0gbnVsbFwiXG4gICAgICAgIFthdHRyLmNka0ZvY3VzSW5pdGlhbF09XCJjb25maWcubnpBdXRvZm9jdXMgPT09ICdjYW5jZWwnIHx8IG51bGxcIlxuICAgICAgICBuei1idXR0b25cbiAgICAgICAgKGNsaWNrKT1cIm9uQ2FuY2VsKClcIlxuICAgICAgICBbbnpMb2FkaW5nXT1cIiEhY29uZmlnLm56Q2FuY2VsTG9hZGluZ1wiXG4gICAgICAgIFtkaXNhYmxlZF09XCJjb25maWcubnpDYW5jZWxEaXNhYmxlZFwiXG4gICAgICA+XG4gICAgICAgIHt7IGNvbmZpZy5uekNhbmNlbFRleHQgfHwgbG9jYWxlLmNhbmNlbFRleHQgfX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvblxuICAgICAgICAqbmdJZj1cImNvbmZpZy5uek9rVGV4dCAhPT0gbnVsbFwiXG4gICAgICAgIFthdHRyLmNka0ZvY3VzSW5pdGlhbF09XCJjb25maWcubnpBdXRvZm9jdXMgPT09ICdvaycgfHwgbnVsbFwiXG4gICAgICAgIG56LWJ1dHRvblxuICAgICAgICBbbnpUeXBlXT1cImNvbmZpZy5uek9rVHlwZSFcIlxuICAgICAgICAoY2xpY2spPVwib25PaygpXCJcbiAgICAgICAgW256TG9hZGluZ109XCIhIWNvbmZpZy5uek9rTG9hZGluZ1wiXG4gICAgICAgIFtkaXNhYmxlZF09XCJjb25maWcubnpPa0Rpc2FibGVkXCJcbiAgICAgID5cbiAgICAgICAge3sgY29uZmlnLm56T2tUZXh0IHx8IGxvY2FsZS5va1RleHQgfX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FudC1tb2RhbC1mb290ZXInXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdFxufSlcbmV4cG9ydCBjbGFzcyBOek1vZGFsRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgYnV0dG9uc0Zvb3RlciA9IGZhbHNlO1xuICBidXR0b25zOiBNb2RhbEJ1dHRvbk9wdGlvbnNbXSA9IFtdO1xuICBsb2NhbGUhOiBOek1vZGFsSTE4bkludGVyZmFjZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNhbmNlbFRyaWdnZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9rVHJpZ2dlcmVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBASW5wdXQoKSBtb2RhbFJlZiE6IE56TW9kYWxSZWY7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSwgcHVibGljIGNvbmZpZzogTW9kYWxPcHRpb25zKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29uZmlnLm56Rm9vdGVyKSkge1xuICAgICAgdGhpcy5idXR0b25zRm9vdGVyID0gdHJ1ZTtcbiAgICAgIHRoaXMuYnV0dG9ucyA9IChjb25maWcubnpGb290ZXIgYXMgTW9kYWxCdXR0b25PcHRpb25zW10pLm1hcChtZXJnZURlZmF1bHRPcHRpb24pO1xuICAgIH1cbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnTW9kYWwnKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuY2FuY2VsVHJpZ2dlcmVkLmVtaXQoKTtcbiAgfVxuXG4gIG9uT2soKTogdm9pZCB7XG4gICAgdGhpcy5va1RyaWdnZXJlZC5lbWl0KCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIHNwZWNpZmllZCBrZXkuXG4gICAqIElmIGl0IGlzIGEgZnVuY3Rpb24sIHJ1biBhbmQgcmV0dXJuIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uLlxuICAgKiBAZGVwcmVjYXRlZCBOb3Qgc3VwcG9ydCB1c2UgZnVuY3Rpb24gdHlwZS5cbiAgICogQGJyZWFraW5nLWNoYW5nZSAxMC4wLjBcbiAgICovXG4gIGdldEJ1dHRvbkNhbGxhYmxlUHJvcChvcHRpb25zOiBNb2RhbEJ1dHRvbk9wdGlvbnMsIHByb3A6IGtleW9mIE1vZGFsQnV0dG9uT3B0aW9ucyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHZhbHVlID0gb3B0aW9uc1twcm9wXTtcbiAgICBjb25zdCBjb21wb25lbnRJbnN0YW5jZSA9IHRoaXMubW9kYWxSZWYuZ2V0Q29udGVudENvbXBvbmVudCgpO1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyB2YWx1ZS5hcHBseShvcHRpb25zLCBjb21wb25lbnRJbnN0YW5jZSAmJiBbY29tcG9uZW50SW5zdGFuY2VdKSA6IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1biBmdW5jdGlvbiBiYXNlZCBvbiB0aGUgdHlwZSBhbmQgc2V0IGl0cyBgbG9hZGluZ2AgcHJvcCBpZiBuZWVkZWQuXG4gICAqIEBkZXByZWNhdGVkIFNob3VsZCBiZSBzZXQgb3B0aW9ucycgdmFsdWUgYnkgdGhlIHVzZXIsIG5vdCBsaWJyYXJ5LlxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMFxuICAgKi9cbiAgb25CdXR0b25DbGljayhvcHRpb25zOiBNb2RhbEJ1dHRvbk9wdGlvbnMpOiB2b2lkIHtcbiAgICBjb25zdCBsb2FkaW5nID0gdGhpcy5nZXRCdXR0b25DYWxsYWJsZVByb3Aob3B0aW9ucywgJ2xvYWRpbmcnKTtcbiAgICBpZiAoIWxvYWRpbmcpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZ2V0QnV0dG9uQ2FsbGFibGVQcm9wKG9wdGlvbnMsICdvbkNsaWNrJyk7XG4gICAgICBpZiAob3B0aW9ucy5hdXRvTG9hZGluZyAmJiBpc1Byb21pc2UocmVzdWx0KSkge1xuICAgICAgICBvcHRpb25zLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICByZXN1bHQudGhlbigoKSA9PiAob3B0aW9ucy5sb2FkaW5nID0gZmFsc2UpKS5jYXRjaCgoKSA9PiAob3B0aW9ucy5sb2FkaW5nID0gZmFsc2UpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VEZWZhdWx0T3B0aW9uKG9wdGlvbnM6IE1vZGFsQnV0dG9uT3B0aW9ucyk6IE1vZGFsQnV0dG9uT3B0aW9ucyB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogbnVsbCxcbiAgICBzaXplOiAnZGVmYXVsdCcsXG4gICAgYXV0b0xvYWRpbmc6IHRydWUsXG4gICAgc2hvdzogdHJ1ZSxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgLi4ub3B0aW9uc1xuICB9O1xufVxuIl19