/**
 * @fileoverview added by tsickle
 * Generated from: modal-footer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign } from "tslib";
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
var NzModalFooterComponent = /** @class */ (function () {
    function NzModalFooterComponent(i18n, config) {
        var _this = this;
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
        function () {
            _this.locale = _this.i18n.getLocaleData('Modal');
        }));
    }
    /**
     * @return {?}
     */
    NzModalFooterComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.cancelTriggered.emit();
    };
    /**
     * @return {?}
     */
    NzModalFooterComponent.prototype.onOk = /**
     * @return {?}
     */
    function () {
        this.okTriggered.emit();
    };
    /**
     * Returns the value of the specified key.
     * If it is a function, run and return the return value of the function.
     * @deprecated Not support use function type.
     * @breaking-change 10.0.0
     */
    /**
     * Returns the value of the specified key.
     * If it is a function, run and return the return value of the function.
     * @deprecated Not support use function type.
     * \@breaking-change 10.0.0
     * @param {?} options
     * @param {?} prop
     * @return {?}
     */
    NzModalFooterComponent.prototype.getButtonCallableProp = /**
     * Returns the value of the specified key.
     * If it is a function, run and return the return value of the function.
     * @deprecated Not support use function type.
     * \@breaking-change 10.0.0
     * @param {?} options
     * @param {?} prop
     * @return {?}
     */
    function (options, prop) {
        /** @type {?} */
        var value = options[prop];
        /** @type {?} */
        var componentInstance = this.modalRef.getContentComponent();
        return typeof value === 'function' ? value.apply(options, componentInstance && [componentInstance]) : value;
    };
    /**
     * Run function based on the type and set its `loading` prop if needed.
     * @deprecated Should be set options' value by the user, not library.
     * @breaking-change 10.0.0
     */
    /**
     * Run function based on the type and set its `loading` prop if needed.
     * @deprecated Should be set options' value by the user, not library.
     * \@breaking-change 10.0.0
     * @param {?} options
     * @return {?}
     */
    NzModalFooterComponent.prototype.onButtonClick = /**
     * Run function based on the type and set its `loading` prop if needed.
     * @deprecated Should be set options' value by the user, not library.
     * \@breaking-change 10.0.0
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var loading = this.getButtonCallableProp(options, 'loading');
        if (!loading) {
            /** @type {?} */
            var result = this.getButtonCallableProp(options, 'onClick');
            if (options.autoLoading && isPromise(result)) {
                options.loading = true;
                result.then((/**
                 * @return {?}
                 */
                function () { return (options.loading = false); })).catch((/**
                 * @return {?}
                 */
                function () { return (options.loading = false); }));
            }
        }
    };
    /**
     * @return {?}
     */
    NzModalFooterComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzModalFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[nz-modal-footer]',
                    exportAs: 'NzModalFooterBuiltin',
                    template: "\n    <ng-container *ngIf=\"config.nzFooter; else defaultFooterButtons\">\n      <ng-container *nzStringTemplateOutlet=\"config.nzFooter\">\n        <div *ngIf=\"!buttonsFooter\" [innerHTML]=\"config.nzTitle\"></div>\n        <ng-container *ngIf=\"buttonsFooter\">\n          <button\n            *ngFor=\"let button of buttons\"\n            nz-button\n            (click)=\"onButtonClick(button)\"\n            [hidden]=\"!getButtonCallableProp(button, 'show')\"\n            [nzLoading]=\"getButtonCallableProp(button, 'loading')\"\n            [disabled]=\"getButtonCallableProp(button, 'disabled')\"\n            [nzType]=\"button.type!\"\n            [nzShape]=\"button.shape!\"\n            [nzSize]=\"button.size!\"\n            [nzGhost]=\"button.ghost!\"\n          >\n            {{ button.label }}\n          </button>\n        </ng-container>\n      </ng-container>\n    </ng-container>\n    <ng-template #defaultFooterButtons>\n      <button\n        *ngIf=\"config.nzCancelText !== null\"\n        [attr.cdkFocusInitial]=\"config.nzAutofocus === 'cancel' || null\"\n        nz-button\n        (click)=\"onCancel()\"\n        [nzLoading]=\"!!config.nzCancelLoading\"\n        [disabled]=\"config.nzCancelDisabled\"\n      >\n        {{ config.nzCancelText || locale.cancelText }}\n      </button>\n      <button\n        *ngIf=\"config.nzOkText !== null\"\n        [attr.cdkFocusInitial]=\"config.nzAutofocus === 'ok' || null\"\n        nz-button\n        [nzType]=\"config.nzOkType!\"\n        (click)=\"onOk()\"\n        [nzLoading]=\"!!config.nzOkLoading\"\n        [disabled]=\"config.nzOkDisabled\"\n      >\n        {{ config.nzOkText || locale.okText }}\n      </button>\n    </ng-template>\n  ",
                    host: {
                        class: 'ant-modal-footer'
                    },
                    changeDetection: ChangeDetectionStrategy.Default
                }] }
    ];
    /** @nocollapse */
    NzModalFooterComponent.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: ModalOptions }
    ]; };
    NzModalFooterComponent.propDecorators = {
        cancelTriggered: [{ type: Output }],
        okTriggered: [{ type: Output }],
        modalRef: [{ type: Input }]
    };
    return NzModalFooterComponent;
}());
export { NzModalFooterComponent };
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
    return __assign({ type: null, size: 'default', autoLoading: true, show: true, loading: false, disabled: false }, options);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbW9kYWwvIiwic291cmNlcyI6WyJtb2RhbC1mb290ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUF3QixNQUFNLG9CQUFvQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDekMsT0FBTyxFQUFzQixZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakU7SUErREUsZ0NBQW9CLElBQW1CLEVBQVMsTUFBb0I7UUFBcEUsaUJBUUM7UUFSbUIsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQWM7UUFScEUsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsWUFBTyxHQUF5QixFQUFFLENBQUM7UUFFaEIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQzNDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUVsRCxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUdyQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxtQkFBQSxNQUFNLENBQUMs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RUFDZixXQUFXLEVBQUUsSUFBSSxFQUNqQixJQUFJLEVBQUUsSUFBSSxFQUNWLE9BQU8sRUFBRSxLQUFLLEVBQ2QsUUFBUSxFQUFFLEtBQUssSUFDWixPQUFPLEVBQ1Y7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUHJvbWlzZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTnpJMThuU2VydmljZSwgTnpNb2RhbEkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuXG5pbXBvcnQgeyBOek1vZGFsUmVmIH0gZnJvbSAnLi9tb2RhbC1yZWYnO1xuaW1wb3J0IHsgTW9kYWxCdXR0b25PcHRpb25zLCBNb2RhbE9wdGlvbnMgfSBmcm9tICcuL21vZGFsLXR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGl2W256LW1vZGFsLWZvb3Rlcl0nLFxuICBleHBvcnRBczogJ056TW9kYWxGb290ZXJCdWlsdGluJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnLm56Rm9vdGVyOyBlbHNlIGRlZmF1bHRGb290ZXJCdXR0b25zXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiY29uZmlnLm56Rm9vdGVyXCI+XG4gICAgICAgIDxkaXYgKm5nSWY9XCIhYnV0dG9uc0Zvb3RlclwiIFtpbm5lckhUTUxdPVwiY29uZmlnLm56VGl0bGVcIj48L2Rpdj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImJ1dHRvbnNGb290ZXJcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgYnV0dG9uIG9mIGJ1dHRvbnNcIlxuICAgICAgICAgICAgbnotYnV0dG9uXG4gICAgICAgICAgICAoY2xpY2spPVwib25CdXR0b25DbGljayhidXR0b24pXCJcbiAgICAgICAgICAgIFtoaWRkZW5dPVwiIWdldEJ1dHRvbkNhbGxhYmxlUHJvcChidXR0b24sICdzaG93JylcIlxuICAgICAgICAgICAgW256TG9hZGluZ109XCJnZXRCdXR0b25DYWxsYWJsZVByb3AoYnV0dG9uLCAnbG9hZGluZycpXCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJnZXRCdXR0b25DYWxsYWJsZVByb3AoYnV0dG9uLCAnZGlzYWJsZWQnKVwiXG4gICAgICAgICAgICBbbnpUeXBlXT1cImJ1dHRvbi50eXBlIVwiXG4gICAgICAgICAgICBbbnpTaGFwZV09XCJidXR0b24uc2hhcGUhXCJcbiAgICAgICAgICAgIFtuelNpemVdPVwiYnV0dG9uLnNpemUhXCJcbiAgICAgICAgICAgIFtuekdob3N0XT1cImJ1dHRvbi5naG9zdCFcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IGJ1dHRvbi5sYWJlbCB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdEZvb3RlckJ1dHRvbnM+XG4gICAgICA8YnV0dG9uXG4gICAgICAgICpuZ0lmPVwiY29uZmlnLm56Q2FuY2VsVGV4dCAhPT0gbnVsbFwiXG4gICAgICAgIFthdHRyLmNka0ZvY3VzSW5pdGlhbF09XCJjb25maWcubnpBdXRvZm9jdXMgPT09ICdjYW5jZWwnIHx8IG51bGxcIlxuICAgICAgICBuei1idXR0b25cbiAgICAgICAgKGNsaWNrKT1cIm9uQ2FuY2VsKClcIlxuICAgICAgICBbbnpMb2FkaW5nXT1cIiEhY29uZmlnLm56Q2FuY2VsTG9hZGluZ1wiXG4gICAgICAgIFtkaXNhYmxlZF09XCJjb25maWcubnpDYW5jZWxEaXNhYmxlZFwiXG4gICAgICA+XG4gICAgICAgIHt7IGNvbmZpZy5uekNhbmNlbFRleHQgfHwgbG9jYWxlLmNhbmNlbFRleHQgfX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvblxuICAgICAgICAqbmdJZj1cImNvbmZpZy5uek9rVGV4dCAhPT0gbnVsbFwiXG4gICAgICAgIFthdHRyLmNka0ZvY3VzSW5pdGlhbF09XCJjb25maWcubnpBdXRvZm9jdXMgPT09ICdvaycgfHwgbnVsbFwiXG4gICAgICAgIG56LWJ1dHRvblxuICAgICAgICBbbnpUeXBlXT1cImNvbmZpZy5uek9rVHlwZSFcIlxuICAgICAgICAoY2xpY2spPVwib25PaygpXCJcbiAgICAgICAgW256TG9hZGluZ109XCIhIWNvbmZpZy5uek9rTG9hZGluZ1wiXG4gICAgICAgIFtkaXNhYmxlZF09XCJjb25maWcubnpPa0Rpc2FibGVkXCJcbiAgICAgID5cbiAgICAgICAge3sgY29uZmlnLm56T2tUZXh0IHx8IGxvY2FsZS5va1RleHQgfX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FudC1tb2RhbC1mb290ZXInXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdFxufSlcbmV4cG9ydCBjbGFzcyBOek1vZGFsRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgYnV0dG9uc0Zvb3RlciA9IGZhbHNlO1xuICBidXR0b25zOiBNb2RhbEJ1dHRvbk9wdGlvbnNbXSA9IFtdO1xuICBsb2NhbGUhOiBOek1vZGFsSTE4bkludGVyZmFjZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNhbmNlbFRyaWdnZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9rVHJpZ2dlcmVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBASW5wdXQoKSBtb2RhbFJlZiE6IE56TW9kYWxSZWY7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSwgcHVibGljIGNvbmZpZzogTW9kYWxPcHRpb25zKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29uZmlnLm56Rm9vdGVyKSkge1xuICAgICAgdGhpcy5idXR0b25zRm9vdGVyID0gdHJ1ZTtcbiAgICAgIHRoaXMuYnV0dG9ucyA9IChjb25maWcubnpGb290ZXIgYXMgTW9kYWxCdXR0b25PcHRpb25zW10pLm1hcChtZXJnZURlZmF1bHRPcHRpb24pO1xuICAgIH1cbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnTW9kYWwnKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuY2FuY2VsVHJpZ2dlcmVkLmVtaXQoKTtcbiAgfVxuXG4gIG9uT2soKTogdm9pZCB7XG4gICAgdGhpcy5va1RyaWdnZXJlZC5lbWl0KCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIHNwZWNpZmllZCBrZXkuXG4gICAqIElmIGl0IGlzIGEgZnVuY3Rpb24sIHJ1biBhbmQgcmV0dXJuIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uLlxuICAgKiBAZGVwcmVjYXRlZCBOb3Qgc3VwcG9ydCB1c2UgZnVuY3Rpb24gdHlwZS5cbiAgICogQGJyZWFraW5nLWNoYW5nZSAxMC4wLjBcbiAgICovXG4gIGdldEJ1dHRvbkNhbGxhYmxlUHJvcChvcHRpb25zOiBNb2RhbEJ1dHRvbk9wdGlvbnMsIHByb3A6IGtleW9mIE1vZGFsQnV0dG9uT3B0aW9ucyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHZhbHVlID0gb3B0aW9uc1twcm9wXTtcbiAgICBjb25zdCBjb21wb25lbnRJbnN0YW5jZSA9IHRoaXMubW9kYWxSZWYuZ2V0Q29udGVudENvbXBvbmVudCgpO1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyB2YWx1ZS5hcHBseShvcHRpb25zLCBjb21wb25lbnRJbnN0YW5jZSAmJiBbY29tcG9uZW50SW5zdGFuY2VdKSA6IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1biBmdW5jdGlvbiBiYXNlZCBvbiB0aGUgdHlwZSBhbmQgc2V0IGl0cyBgbG9hZGluZ2AgcHJvcCBpZiBuZWVkZWQuXG4gICAqIEBkZXByZWNhdGVkIFNob3VsZCBiZSBzZXQgb3B0aW9ucycgdmFsdWUgYnkgdGhlIHVzZXIsIG5vdCBsaWJyYXJ5LlxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMFxuICAgKi9cbiAgb25CdXR0b25DbGljayhvcHRpb25zOiBNb2RhbEJ1dHRvbk9wdGlvbnMpOiB2b2lkIHtcbiAgICBjb25zdCBsb2FkaW5nID0gdGhpcy5nZXRCdXR0b25DYWxsYWJsZVByb3Aob3B0aW9ucywgJ2xvYWRpbmcnKTtcbiAgICBpZiAoIWxvYWRpbmcpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZ2V0QnV0dG9uQ2FsbGFibGVQcm9wKG9wdGlvbnMsICdvbkNsaWNrJyk7XG4gICAgICBpZiAob3B0aW9ucy5hdXRvTG9hZGluZyAmJiBpc1Byb21pc2UocmVzdWx0KSkge1xuICAgICAgICBvcHRpb25zLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICByZXN1bHQudGhlbigoKSA9PiAob3B0aW9ucy5sb2FkaW5nID0gZmFsc2UpKS5jYXRjaCgoKSA9PiAob3B0aW9ucy5sb2FkaW5nID0gZmFsc2UpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VEZWZhdWx0T3B0aW9uKG9wdGlvbnM6IE1vZGFsQnV0dG9uT3B0aW9ucyk6IE1vZGFsQnV0dG9uT3B0aW9ucyB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogbnVsbCxcbiAgICBzaXplOiAnZGVmYXVsdCcsXG4gICAgYXV0b0xvYWRpbmc6IHRydWUsXG4gICAgc2hvdzogdHJ1ZSxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgLi4ub3B0aW9uc1xuICB9O1xufVxuIl19