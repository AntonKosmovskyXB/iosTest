/**
 * @fileoverview added by tsickle
 * Generated from: code-editor.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __read, __spread } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { PREFIX, warn, warnDeprecation } from 'ng-zorro-antd/core/logger';
import { BehaviorSubject, of as observableOf, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { NZ_CODE_EDITOR_CONFIG, NzCodeEditorLoadingStatus } from './typings';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/config";
import * as i2 from "@angular/common";
import * as i3 from "./typings";
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'codeEditor';
/**
 * @param {?=} fn
 * @return {?}
 */
function tryTriggerFunc(fn) {
    return (/**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (fn) {
            fn.apply(void 0, __spread(args));
        }
    });
}
var NzCodeEditorService = /** @class */ (function () {
    function NzCodeEditorService(nzConfigService, _document, config) {
        var _this = this;
        this.nzConfigService = nzConfigService;
        this.firstEditorInitialized = false;
        this.loaded$ = new Subject();
        this.loadingStatus = NzCodeEditorLoadingStatus.UNLOAD;
        this.option$ = new BehaviorSubject(this.option);
        /** @type {?} */
        var globalConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME);
        if (config) {
            warnDeprecation("'NZ_CODE_EDITOR_CONFIG' is deprecated and will be removed in next minor version. Please use 'NzConfigService' instead.");
        }
        this.document = _document;
        this.config = __assign(__assign({}, config), globalConfig);
        this.option = this.config.defaultEditorOption || {};
        this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME).subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var newGlobalConfig = _this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME);
            if (newGlobalConfig) {
                _this._updateDefaultOption(newGlobalConfig.defaultEditorOption);
            }
        }));
    }
    /**
     * @param {?} option
     * @return {?}
     */
    NzCodeEditorService.prototype.updateDefaultOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        warnDeprecation("'updateDefaultOption' is deprecated and will be removed in next minor version. Please use 'set' of 'NzConfigService' instead.");
        this._updateDefaultOption(option);
    };
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    NzCodeEditorService.prototype._updateDefaultOption = /**
     * @private
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.option = __assign(__assign({}, this.option), option);
        this.option$.next(this.option);
        if (option.theme) {
            monaco.editor.setTheme(option.theme);
        }
    };
    /**
     * @return {?}
     */
    NzCodeEditorService.prototype.requestToInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.loadingStatus === NzCodeEditorLoadingStatus.LOADED) {
            this.onInit();
            return observableOf(this.getLatestOption());
        }
        if (this.loadingStatus === NzCodeEditorLoadingStatus.UNLOAD) {
            if (this.config.useStaticLoading && typeof monaco === 'undefined') {
                warn('You choose to use static loading but it seems that you forget ' +
                    'to config webpack plugin correctly. Please refer to our official website' +
                    'for more details about static loading.');
            }
            else {
                this.loadMonacoScript();
            }
        }
        return this.loaded$.asObservable().pipe(tap((/**
         * @return {?}
         */
        function () { return _this.onInit(); })), map((/**
         * @return {?}
         */
        function () { return _this.getLatestOption(); })));
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorService.prototype.loadMonacoScript = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.config.useStaticLoading) {
            this.onLoad();
            return;
        }
        if (this.loadingStatus === NzCodeEditorLoadingStatus.LOADING) {
            return;
        }
        this.loadingStatus = NzCodeEditorLoadingStatus.LOADING;
        /** @type {?} */
        var assetsRoot = this.config.assetsRoot;
        /** @type {?} */
        var vs = assetsRoot ? assetsRoot + "/vs" : 'assets/vs';
        /** @type {?} */
        var windowAsAny = (/** @type {?} */ (window));
        /** @type {?} */
        var loadScript = this.document.createElement('script');
        loadScript.type = 'text/javascript';
        loadScript.src = vs + "/loader.js";
        loadScript.onload = (/**
         * @return {?}
         */
        function () {
            windowAsAny.require.config({
                paths: { vs: vs }
            });
            windowAsAny.require(['vs/editor/editor.main'], (/**
             * @return {?}
             */
            function () {
                _this.onLoad();
            }));
        });
        loadScript.onerror = (/**
         * @return {?}
         */
        function () {
            throw new Error(PREFIX + " cannot load assets of monaco editor from source \"" + vs + "\".");
        });
        this.document.documentElement.appendChild(loadScript);
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorService.prototype.onLoad = /**
     * @private
     * @return {?}
     */
    function () {
        this.loadingStatus = NzCodeEditorLoadingStatus.LOADED;
        this.loaded$.next(true);
        this.loaded$.complete();
        tryTriggerFunc(this.config.onLoad)();
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorService.prototype.onInit = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.firstEditorInitialized) {
            this.firstEditorInitialized = true;
            tryTriggerFunc(this.config.onFirstEditorInit)();
        }
        tryTriggerFunc(this.config.onInit)();
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorService.prototype.getLatestOption = /**
     * @private
     * @return {?}
     */
    function () {
        return __assign({}, this.option);
    };
    NzCodeEditorService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzCodeEditorService.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [NZ_CODE_EDITOR_CONFIG,] }, { type: Optional }] }
    ]; };
    /** @nocollapse */ NzCodeEditorService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NzCodeEditorService_Factory() { return new NzCodeEditorService(i0.ɵɵinject(i1.NzConfigService), i0.ɵɵinject(i2.DOCUMENT), i0.ɵɵinject(i3.NZ_CODE_EDITOR_CONFIG, 8)); }, token: NzCodeEditorService, providedIn: "root" });
    return NzCodeEditorService;
}());
export { NzCodeEditorService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorService.prototype.document;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorService.prototype.firstEditorInitialized;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorService.prototype.loaded$;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorService.prototype.loadingStatus;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorService.prototype.option;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorService.prototype.config;
    /** @type {?} */
    NzCodeEditorService.prototype.option$;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorService.prototype.nzConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS1lZGl0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29kZS1lZGl0b3IvIiwic291cmNlcyI6WyJjb2RlLWVkaXRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUxRSxPQUFPLEVBQUUsZUFBZSxFQUFjLEVBQUUsSUFBSSxZQUFZLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUF1QixxQkFBcUIsRUFBc0IseUJBQXlCLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7OztJQUloSCx3QkFBd0IsR0FBRyxZQUFZOzs7OztBQUU3QyxTQUFTLGNBQWMsQ0FBQyxFQUF3QztJQUM5RDs7OztJQUFPO1FBQUMsY0FBb0I7YUFBcEIsVUFBb0IsRUFBcEIscUJBQW9CLEVBQXBCLElBQW9CO1lBQXBCLHlCQUFvQjs7UUFDMUIsSUFBSSxFQUFFLEVBQUU7WUFDTixFQUFFLHdCQUFJLElBQUksR0FBRTtTQUNiO0lBQ0gsQ0FBQyxFQUFDO0FBQ0osQ0FBQztBQUVEO0lBYUUsNkJBQ21CLGVBQWdDLEVBQy9CLFNBQW9CLEVBQ0ssTUFBMkI7UUFIeEUsaUJBdUJDO1FBdEJrQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFUM0MsMkJBQXNCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLFlBQU8sR0FBRyxJQUFJ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QUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV4QixjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRU8sb0NBQU07Ozs7SUFBZDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDaEMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztZQUNuQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUM7U0FDakQ7UUFFRCxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRU8sNkNBQWU7Ozs7SUFBdkI7UUFDRSxvQkFBWSxJQUFJLENBQUMsTUFBTSxFQUFHO0lBQzVCLENBQUM7O2dCQXBJRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQXJCUSxlQUFlO2dEQWtDbkIsTUFBTSxTQUFDLFFBQVE7Z0RBQ2YsTUFBTSxTQUFDLHFCQUFxQixjQUFHLFFBQVE7Ozs4QkExQzVDO0NBK0pDLEFBcklELElBcUlDO1NBbElZLG1CQUFtQjs7Ozs7O0lBQzlCLHVDQUEyQjs7Ozs7SUFDM0IscURBQXVDOzs7OztJQUN2QyxzQ0FBeUM7Ozs7O0lBQ3pDLDRDQUF5RDs7Ozs7SUFDekQscUNBQW9DOzs7OztJQUNwQyxxQ0FBbUM7O0lBRW5DLHNDQUFnRTs7Ozs7SUFHOUQsOENBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBQUkVGSVgsIHdhcm4sIHdhcm5EZXByZWNhdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9sb2dnZXInO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2YgYXMgb2JzZXJ2YWJsZU9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEpvaW5lZEVkaXRvck9wdGlvbnMsIE5aX0NPREVfRURJVE9SX0NPTkZJRywgTnpDb2RlRWRpdG9yQ29uZmlnLCBOekNvZGVFZGl0b3JMb2FkaW5nU3RhdHVzIH0gZnJvbSAnLi90eXBpbmdzJztcblxuZGVjbGFyZSBjb25zdCBtb25hY286IE56U2FmZUFueTtcblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2NvZGVFZGl0b3InO1xuXG5mdW5jdGlvbiB0cnlUcmlnZ2VyRnVuYyhmbj86ICguLi5hcmdzOiBOelNhZmVBbnlbXSkgPT4gTnpTYWZlQW55KTogKC4uLmFyZ3M6IE56U2FmZUFueSkgPT4gdm9pZCB7XG4gIHJldHVybiAoLi4uYXJnczogTnpTYWZlQW55W10pID0+IHtcbiAgICBpZiAoZm4pIHtcbiAgICAgIGZuKC4uLmFyZ3MpO1xuICAgIH1cbiAgfTtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTnpDb2RlRWRpdG9yU2VydmljZSB7XG4gIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50O1xuICBwcml2YXRlIGZpcnN0RWRpdG9ySW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBsb2FkZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgcHJpdmF0ZSBsb2FkaW5nU3RhdHVzID0gTnpDb2RlRWRpdG9yTG9hZGluZ1N0YXR1cy5VTkxPQUQ7XG4gIHByaXZhdGUgb3B0aW9uOiBKb2luZWRFZGl0b3JPcHRpb25zO1xuICBwcml2YXRlIGNvbmZpZzogTnpDb2RlRWRpdG9yQ29uZmlnO1xuXG4gIG9wdGlvbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEpvaW5lZEVkaXRvck9wdGlvbnM+KHRoaXMub3B0aW9uKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIF9kb2N1bWVudDogTnpTYWZlQW55LFxuICAgIEBJbmplY3QoTlpfQ09ERV9FRElUT1JfQ09ORklHKSBAT3B0aW9uYWwoKSBjb25maWc/OiBOekNvZGVFZGl0b3JDb25maWdcbiAgKSB7XG4gICAgY29uc3QgZ2xvYmFsQ29uZmlnID0gdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSk7XG5cbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICB3YXJuRGVwcmVjYXRpb24oXG4gICAgICAgIGAnTlpfQ09ERV9FRElUT1JfQ09ORklHJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gbmV4dCBtaW5vciB2ZXJzaW9uLiBQbGVhc2UgdXNlICdOekNvbmZpZ1NlcnZpY2UnIGluc3RlYWQuYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLmRvY3VtZW50ID0gX2RvY3VtZW50O1xuICAgIHRoaXMuY29uZmlnID0geyAuLi5jb25maWcsIC4uLmdsb2JhbENvbmZpZyB9O1xuICAgIHRoaXMub3B0aW9uID0gdGhpcy5jb25maWcuZGVmYXVsdEVkaXRvck9wdGlvbiB8fCB7fTtcblxuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGNvbnN0IG5ld0dsb2JhbENvbmZpZyA9IHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0ZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpO1xuICAgICAgaWYgKG5ld0dsb2JhbENvbmZpZykge1xuICAgICAgICB0aGlzLl91cGRhdGVEZWZhdWx0T3B0aW9uKG5ld0dsb2JhbENvbmZpZy5kZWZhdWx0RWRpdG9yT3B0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZURlZmF1bHRPcHRpb24ob3B0aW9uOiBKb2luZWRFZGl0b3JPcHRpb25zKTogdm9pZCB7XG4gICAgd2FybkRlcHJlY2F0aW9uKFxuICAgICAgYCd1cGRhdGVEZWZhdWx0T3B0aW9uJyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gbmV4dCBtaW5vciB2ZXJzaW9uLiBQbGVhc2UgdXNlICdzZXQnIG9mICdOekNvbmZpZ1NlcnZpY2UnIGluc3RlYWQuYFxuICAgICk7XG5cbiAgICB0aGlzLl91cGRhdGVEZWZhdWx0T3B0aW9uKG9wdGlvbik7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVEZWZhdWx0T3B0aW9uKG9wdGlvbjogSm9pbmVkRWRpdG9yT3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMub3B0aW9uID0geyAuLi50aGlzLm9wdGlvbiwgLi4ub3B0aW9uIH07XG4gICAgdGhpcy5vcHRpb24kLm5leHQodGhpcy5vcHRpb24pO1xuXG4gICAgaWYgKG9wdGlvbi50aGVtZSkge1xuICAgICAgbW9uYWNvLmVkaXRvci5zZXRUaGVtZShvcHRpb24udGhlbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJlcXVlc3RUb0luaXQoKTogT2JzZXJ2YWJsZTxKb2luZWRFZGl0b3JPcHRpb25zPiB7XG4gICAgaWYgKHRoaXMubG9hZGluZ1N0YXR1cyA9PT0gTnpDb2RlRWRpdG9yTG9hZGluZ1N0YXR1cy5MT0FERUQpIHtcbiAgICAgIHRoaXMub25Jbml0KCk7XG4gICAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKHRoaXMuZ2V0TGF0ZXN0T3B0aW9uKCkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxvYWRpbmdTdGF0dXMgPT09IE56Q29kZUVkaXRvckxvYWRpbmdTdGF0dXMuVU5MT0FEKSB7XG4gICAgICBpZiAodGhpcy5jb25maWcudXNlU3RhdGljTG9hZGluZyAmJiB0eXBlb2YgbW9uYWNvID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdZb3UgY2hvb3NlIHRvIHVzZSBzdGF0aWMgbG9hZGluZyBidXQgaXQgc2VlbXMgdGhhdCB5b3UgZm9yZ2V0ICcgK1xuICAgICAgICAgICAgJ3RvIGNvbmZpZyB3ZWJwYWNrIHBsdWdpbiBjb3JyZWN0bHkuIFBsZWFzZSByZWZlciB0byBvdXIgb2ZmaWNpYWwgd2Vic2l0ZScgK1xuICAgICAgICAgICAgJ2ZvciBtb3JlIGRldGFpbHMgYWJvdXQgc3RhdGljIGxvYWRpbmcuJ1xuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sb2FkTW9uYWNvU2NyaXB0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubG9hZGVkJC5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgdGFwKCgpID0+IHRoaXMub25Jbml0KCkpLFxuICAgICAgbWFwKCgpID0+IHRoaXMuZ2V0TGF0ZXN0T3B0aW9uKCkpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZE1vbmFjb1NjcmlwdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb25maWcudXNlU3RhdGljTG9hZGluZykge1xuICAgICAgdGhpcy5vbkxvYWQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sb2FkaW5nU3RhdHVzID09PSBOekNvZGVFZGl0b3JMb2FkaW5nU3RhdHVzLkxPQURJTkcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmxvYWRpbmdTdGF0dXMgPSBOekNvZGVFZGl0b3JMb2FkaW5nU3RhdHVzLkxPQURJTkc7XG5cbiAgICBjb25zdCBhc3NldHNSb290ID0gdGhpcy5jb25maWcuYXNzZXRzUm9vdDtcbiAgICBjb25zdCB2cyA9IGFzc2V0c1Jvb3QgPyBgJHthc3NldHNSb290fS92c2AgOiAnYXNzZXRzL3ZzJztcbiAgICBjb25zdCB3aW5kb3dBc0FueSA9IHdpbmRvdyBhcyBOelNhZmVBbnk7XG4gICAgY29uc3QgbG9hZFNjcmlwdCA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cbiAgICBsb2FkU2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICBsb2FkU2NyaXB0LnNyYyA9IGAke3ZzfS9sb2FkZXIuanNgO1xuICAgIGxvYWRTY3JpcHQub25sb2FkID0gKCkgPT4ge1xuICAgICAgd2luZG93QXNBbnkucmVxdWlyZS5jb25maWcoe1xuICAgICAgICBwYXRoczogeyB2cyB9XG4gICAgICB9KTtcbiAgICAgIHdpbmRvd0FzQW55LnJlcXVpcmUoWyd2cy9lZGl0b3IvZWRpdG9yLm1haW4nXSwgKCkgPT4ge1xuICAgICAgICB0aGlzLm9uTG9hZCgpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBsb2FkU2NyaXB0Lm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7UFJFRklYfSBjYW5ub3QgbG9hZCBhc3NldHMgb2YgbW9uYWNvIGVkaXRvciBmcm9tIHNvdXJjZSBcIiR7dnN9XCIuYCk7XG4gICAgfTtcblxuICAgIHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGxvYWRTY3JpcHQpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkxvYWQoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkaW5nU3RhdHVzID0gTnpDb2RlRWRpdG9yTG9hZGluZ1N0YXR1cy5MT0FERUQ7XG4gICAgdGhpcy5sb2FkZWQkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5sb2FkZWQkLmNvbXBsZXRlKCk7XG5cbiAgICB0cnlUcmlnZ2VyRnVuYyh0aGlzLmNvbmZpZy5vbkxvYWQpKCk7XG4gIH1cblxuICBwcml2YXRlIG9uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZmlyc3RFZGl0b3JJbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5maXJzdEVkaXRvckluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgIHRyeVRyaWdnZXJGdW5jKHRoaXMuY29uZmlnLm9uRmlyc3RFZGl0b3JJbml0KSgpO1xuICAgIH1cblxuICAgIHRyeVRyaWdnZXJGdW5jKHRoaXMuY29uZmlnLm9uSW5pdCkoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TGF0ZXN0T3B0aW9uKCk6IEpvaW5lZEVkaXRvck9wdGlvbnMge1xuICAgIHJldHVybiB7IC4uLnRoaXMub3B0aW9uIH07XG4gIH1cbn1cbiJdfQ==