/**
 * @fileoverview added by tsickle
 * Generated from: code-editor.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
const NZ_CONFIG_COMPONENT_NAME = 'codeEditor';
/**
 * @param {?=} fn
 * @return {?}
 */
function tryTriggerFunc(fn) {
    return (/**
     * @param {...?} args
     * @return {?}
     */
    (...args) => {
        if (fn) {
            fn(...args);
        }
    });
}
export class NzCodeEditorService {
    /**
     * @param {?} nzConfigService
     * @param {?} _document
     * @param {?=} config
     */
    constructor(nzConfigService, _document, config) {
        this.nzConfigService = nzConfigService;
        this.firstEditorInitialized = false;
        this.loaded$ = new Subject();
        this.loadingStatus = NzCodeEditorLoadingStatus.UNLOAD;
        this.option$ = new BehaviorSubject(this.option);
        /** @type {?} */
        const globalConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME);
        if (config) {
            warnDeprecation(`'NZ_CODE_EDITOR_CONFIG' is deprecated and will be removed in next minor version. Please use 'NzConfigService' instead.`);
        }
        this.document = _document;
        this.config = Object.assign(Object.assign({}, config), globalConfig);
        this.option = this.config.defaultEditorOption || {};
        this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME).subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const newGlobalConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME);
            if (newGlobalConfig) {
                this._updateDefaultOption(newGlobalConfig.defaultEditorOption);
            }
        }));
    }
    /**
     * @param {?} option
     * @return {?}
     */
    updateDefaultOption(option) {
        warnDeprecation(`'updateDefaultOption' is deprecated and will be removed in next minor version. Please use 'set' of 'NzConfigService' instead.`);
        this._updateDefaultOption(option);
    }
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    _updateDefaultOption(option) {
        this.option = Object.assign(Object.assign({}, this.option), option);
        this.option$.next(this.option);
        if (option.theme) {
            monaco.editor.setTheme(option.theme);
        }
    }
    /**
     * @return {?}
     */
    requestToInit() {
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
        () => this.onInit())), map((/**
         * @return {?}
         */
        () => this.getLatestOption())));
    }
    /**
     * @private
     * @return {?}
     */
    loadMonacoScript() {
        if (this.config.useStaticLoading) {
            this.onLoad();
            return;
        }
        if (this.loadingStatus === NzCodeEditorLoadingStatus.LOADING) {
            return;
        }
        this.loadingStatus = NzCodeEditorLoadingStatus.LOADING;
        /** @type {?} */
        const assetsRoot = this.config.assetsRoot;
        /** @type {?} */
        const vs = assetsRoot ? `${assetsRoot}/vs` : 'assets/vs';
        /** @type {?} */
        const windowAsAny = (/** @type {?} */ (window));
        /** @type {?} */
        const loadScript = this.document.createElement('script');
        loadScript.type = 'text/javascript';
        loadScript.src = `${vs}/loader.js`;
        loadScript.onload = (/**
         * @return {?}
         */
        () => {
            windowAsAny.require.config({
                paths: { vs }
            });
            windowAsAny.require(['vs/editor/editor.main'], (/**
             * @return {?}
             */
            () => {
                this.onLoad();
            }));
        });
        loadScript.onerror = (/**
         * @return {?}
         */
        () => {
            throw new Error(`${PREFIX} cannot load assets of monaco editor from source "${vs}".`);
        });
        this.document.documentElement.appendChild(loadScript);
    }
    /**
     * @private
     * @return {?}
     */
    onLoad() {
        this.loadingStatus = NzCodeEditorLoadingStatus.LOADED;
        this.loaded$.next(true);
        this.loaded$.complete();
        tryTriggerFunc(this.config.onLoad)();
    }
    /**
     * @private
     * @return {?}
     */
    onInit() {
        if (!this.firstEditorInitialized) {
            this.firstEditorInitialized = true;
            tryTriggerFunc(this.config.onFirstEditorInit)();
        }
        tryTriggerFunc(this.config.onInit)();
    }
    /**
     * @private
     * @return {?}
     */
    getLatestOption() {
        return Object.assign({}, this.option);
    }
}
NzCodeEditorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzCodeEditorService.ctorParameters = () => [
    { type: NzConfigService },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [NZ_CODE_EDITOR_CONFIG,] }, { type: Optional }] }
];
/** @nocollapse */ NzCodeEditorService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NzCodeEditorService_Factory() { return new NzCodeEditorService(i0.ɵɵinject(i1.NzConfigService), i0.ɵɵinject(i2.DOCUMENT), i0.ɵɵinject(i3.NZ_CODE_EDITOR_CONFIG, 8)); }, token: NzCodeEditorService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS1lZGl0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29kZS1lZGl0b3IvIiwic291cmNlcyI6WyJjb2RlLWVkaXRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTFFLE9BQU8sRUFBRSxlQUFlLEVBQWMsRUFBRSxJQUFJLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEYsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQXVCLHFCQUFxQixFQUFzQix5QkFBeUIsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7Ozs7O01BSWhILHdCQUF3QixHQUFHLFlBQVk7Ozs7O0FBRTdDLFNBQVMsY0FBYyxDQUFDLEVBQXdDO0lBQzlEOzs7O0lBQU8sQ0FBQyxHQUFHLElBQWlCLEVBQUUsRUFBRTtRQUM5QixJQUFJLEVBQUUsRUFBRTtZQUNOLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ2I7SUFDSCxDQUFDLEVBQUM7QUFDSixDQUFDO0FBS0QsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBVTlCLFlBQ21CLGVBQWdDLEVBQy9CLFNBQW9CLEVBQ0ssTUFBMkI7UUFGckQsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBVDNDLDJCQUFzQixHQUFHLEtBQUssQ0FBQztRQUMvQixZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUNq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LE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRU8sTUFBTTtRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDaEMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztZQUNuQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUM7U0FDakQ7UUFFRCxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRU8sZUFBZTtRQUNyQix5QkFBWSxJQUFJLENBQUMsTUFBTSxFQUFHO0lBQzVCLENBQUM7OztZQXBJRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFyQlEsZUFBZTs0Q0FrQ25CLE1BQU0sU0FBQyxRQUFROzRDQUNmLE1BQU0sU0FBQyxxQkFBcUIsY0FBRyxRQUFROzs7Ozs7OztJQVoxQyx1Q0FBMkI7Ozs7O0lBQzNCLHFEQUF1Qzs7Ozs7SUFDdkMsc0NBQXlDOzs7OztJQUN6Qyw0Q0FBeUQ7Ozs7O0lBQ3pELHFDQUFvQzs7Ozs7SUFDcEMscUNBQW1DOztJQUVuQyxzQ0FBZ0U7Ozs7O0lBRzlELDhDQUFpRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgUFJFRklYLCB3YXJuLCB3YXJuRGVwcmVjYXRpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbG9nZ2VyJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mIGFzIG9ic2VydmFibGVPZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBKb2luZWRFZGl0b3JPcHRpb25zLCBOWl9DT0RFX0VESVRPUl9DT05GSUcsIE56Q29kZUVkaXRvckNvbmZpZywgTnpDb2RlRWRpdG9yTG9hZGluZ1N0YXR1cyB9IGZyb20gJy4vdHlwaW5ncyc7XG5cbmRlY2xhcmUgY29uc3QgbW9uYWNvOiBOelNhZmVBbnk7XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdjb2RlRWRpdG9yJztcblxuZnVuY3Rpb24gdHJ5VHJpZ2dlckZ1bmMoZm4/OiAoLi4uYXJnczogTnpTYWZlQW55W10pID0+IE56U2FmZUFueSk6ICguLi5hcmdzOiBOelNhZmVBbnkpID0+IHZvaWQge1xuICByZXR1cm4gKC4uLmFyZ3M6IE56U2FmZUFueVtdKSA9PiB7XG4gICAgaWYgKGZuKSB7XG4gICAgICBmbiguLi5hcmdzKTtcbiAgICB9XG4gIH07XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE56Q29kZUVkaXRvclNlcnZpY2Uge1xuICBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudDtcbiAgcHJpdmF0ZSBmaXJzdEVkaXRvckluaXRpYWxpemVkID0gZmFsc2U7XG4gIHByaXZhdGUgbG9hZGVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgbG9hZGluZ1N0YXR1cyA9IE56Q29kZUVkaXRvckxvYWRpbmdTdGF0dXMuVU5MT0FEO1xuICBwcml2YXRlIG9wdGlvbjogSm9pbmVkRWRpdG9yT3B0aW9ucztcbiAgcHJpdmF0ZSBjb25maWc6IE56Q29kZUVkaXRvckNvbmZpZztcblxuICBvcHRpb24kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxKb2luZWRFZGl0b3JPcHRpb25zPih0aGlzLm9wdGlvbik7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBfZG9jdW1lbnQ6IE56U2FmZUFueSxcbiAgICBASW5qZWN0KE5aX0NPREVfRURJVE9SX0NPTkZJRykgQE9wdGlvbmFsKCkgY29uZmlnPzogTnpDb2RlRWRpdG9yQ29uZmlnXG4gICkge1xuICAgIGNvbnN0IGdsb2JhbENvbmZpZyA9IHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0ZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpO1xuXG4gICAgaWYgKGNvbmZpZykge1xuICAgICAgd2FybkRlcHJlY2F0aW9uKFxuICAgICAgICBgJ05aX0NPREVfRURJVE9SX0NPTkZJRycgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIG5leHQgbWlub3IgdmVyc2lvbi4gUGxlYXNlIHVzZSAnTnpDb25maWdTZXJ2aWNlJyBpbnN0ZWFkLmBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5kb2N1bWVudCA9IF9kb2N1bWVudDtcbiAgICB0aGlzLmNvbmZpZyA9IHsgLi4uY29uZmlnLCAuLi5nbG9iYWxDb25maWcgfTtcbiAgICB0aGlzLm9wdGlvbiA9IHRoaXMuY29uZmlnLmRlZmF1bHRFZGl0b3JPcHRpb24gfHwge307XG5cbiAgICB0aGlzLm56Q29uZmlnU2VydmljZS5nZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCBuZXdHbG9iYWxDb25maWcgPSB0aGlzLm56Q29uZmlnU2VydmljZS5nZXRDb25maWdGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKTtcbiAgICAgIGlmIChuZXdHbG9iYWxDb25maWcpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlRGVmYXVsdE9wdGlvbihuZXdHbG9iYWxDb25maWcuZGVmYXVsdEVkaXRvck9wdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVEZWZhdWx0T3B0aW9uKG9wdGlvbjogSm9pbmVkRWRpdG9yT3B0aW9ucyk6IHZvaWQge1xuICAgIHdhcm5EZXByZWNhdGlvbihcbiAgICAgIGAndXBkYXRlRGVmYXVsdE9wdGlvbicgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIG5leHQgbWlub3IgdmVyc2lvbi4gUGxlYXNlIHVzZSAnc2V0JyBvZiAnTnpDb25maWdTZXJ2aWNlJyBpbnN0ZWFkLmBcbiAgICApO1xuXG4gICAgdGhpcy5fdXBkYXRlRGVmYXVsdE9wdGlvbihvcHRpb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlRGVmYXVsdE9wdGlvbihvcHRpb246IEpvaW5lZEVkaXRvck9wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLm9wdGlvbiA9IHsgLi4udGhpcy5vcHRpb24sIC4uLm9wdGlvbiB9O1xuICAgIHRoaXMub3B0aW9uJC5uZXh0KHRoaXMub3B0aW9uKTtcblxuICAgIGlmIChvcHRpb24udGhlbWUpIHtcbiAgICAgIG1vbmFjby5lZGl0b3Iuc2V0VGhlbWUob3B0aW9uLnRoZW1lKTtcbiAgICB9XG4gIH1cblxuICByZXF1ZXN0VG9Jbml0KCk6IE9ic2VydmFibGU8Sm9pbmVkRWRpdG9yT3B0aW9ucz4ge1xuICAgIGlmICh0aGlzLmxvYWRpbmdTdGF0dXMgPT09IE56Q29kZUVkaXRvckxvYWRpbmdTdGF0dXMuTE9BREVEKSB7XG4gICAgICB0aGlzLm9uSW5pdCgpO1xuICAgICAgcmV0dXJuIG9ic2VydmFibGVPZih0aGlzLmdldExhdGVzdE9wdGlvbigpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sb2FkaW5nU3RhdHVzID09PSBOekNvZGVFZGl0b3JMb2FkaW5nU3RhdHVzLlVOTE9BRCkge1xuICAgICAgaWYgKHRoaXMuY29uZmlnLnVzZVN0YXRpY0xvYWRpbmcgJiYgdHlwZW9mIG1vbmFjbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAnWW91IGNob29zZSB0byB1c2Ugc3RhdGljIGxvYWRpbmcgYnV0IGl0IHNlZW1zIHRoYXQgeW91IGZvcmdldCAnICtcbiAgICAgICAgICAgICd0byBjb25maWcgd2VicGFjayBwbHVnaW4gY29ycmVjdGx5LiBQbGVhc2UgcmVmZXIgdG8gb3VyIG9mZmljaWFsIHdlYnNpdGUnICtcbiAgICAgICAgICAgICdmb3IgbW9yZSBkZXRhaWxzIGFib3V0IHN0YXRpYyBsb2FkaW5nLidcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9hZE1vbmFjb1NjcmlwdCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmxvYWRlZCQuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgIHRhcCgoKSA9PiB0aGlzLm9uSW5pdCgpKSxcbiAgICAgIG1hcCgoKSA9PiB0aGlzLmdldExhdGVzdE9wdGlvbigpKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRNb25hY29TY3JpcHQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29uZmlnLnVzZVN0YXRpY0xvYWRpbmcpIHtcbiAgICAgIHRoaXMub25Mb2FkKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubG9hZGluZ1N0YXR1cyA9PT0gTnpDb2RlRWRpdG9yTG9hZGluZ1N0YXR1cy5MT0FESU5HKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5sb2FkaW5nU3RhdHVzID0gTnpDb2RlRWRpdG9yTG9hZGluZ1N0YXR1cy5MT0FESU5HO1xuXG4gICAgY29uc3QgYXNzZXRzUm9vdCA9IHRoaXMuY29uZmlnLmFzc2V0c1Jvb3Q7XG4gICAgY29uc3QgdnMgPSBhc3NldHNSb290ID8gYCR7YXNzZXRzUm9vdH0vdnNgIDogJ2Fzc2V0cy92cyc7XG4gICAgY29uc3Qgd2luZG93QXNBbnkgPSB3aW5kb3cgYXMgTnpTYWZlQW55O1xuICAgIGNvbnN0IGxvYWRTY3JpcHQgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG4gICAgbG9hZFNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgbG9hZFNjcmlwdC5zcmMgPSBgJHt2c30vbG9hZGVyLmpzYDtcbiAgICBsb2FkU2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHdpbmRvd0FzQW55LnJlcXVpcmUuY29uZmlnKHtcbiAgICAgICAgcGF0aHM6IHsgdnMgfVxuICAgICAgfSk7XG4gICAgICB3aW5kb3dBc0FueS5yZXF1aXJlKFsndnMvZWRpdG9yL2VkaXRvci5tYWluJ10sICgpID0+IHtcbiAgICAgICAgdGhpcy5vbkxvYWQoKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgbG9hZFNjcmlwdC5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke1BSRUZJWH0gY2Fubm90IGxvYWQgYXNzZXRzIG9mIG1vbmFjbyBlZGl0b3IgZnJvbSBzb3VyY2UgXCIke3ZzfVwiLmApO1xuICAgIH07XG5cbiAgICB0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChsb2FkU2NyaXB0KTtcbiAgfVxuXG4gIHByaXZhdGUgb25Mb2FkKCk6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZ1N0YXR1cyA9IE56Q29kZUVkaXRvckxvYWRpbmdTdGF0dXMuTE9BREVEO1xuICAgIHRoaXMubG9hZGVkJC5uZXh0KHRydWUpO1xuICAgIHRoaXMubG9hZGVkJC5jb21wbGV0ZSgpO1xuXG4gICAgdHJ5VHJpZ2dlckZ1bmModGhpcy5jb25maWcub25Mb2FkKSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmZpcnN0RWRpdG9ySW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuZmlyc3RFZGl0b3JJbml0aWFsaXplZCA9IHRydWU7XG4gICAgICB0cnlUcmlnZ2VyRnVuYyh0aGlzLmNvbmZpZy5vbkZpcnN0RWRpdG9ySW5pdCkoKTtcbiAgICB9XG5cbiAgICB0cnlUcmlnZ2VyRnVuYyh0aGlzLmNvbmZpZy5vbkluaXQpKCk7XG4gIH1cblxuICBwcml2YXRlIGdldExhdGVzdE9wdGlvbigpOiBKb2luZWRFZGl0b3JPcHRpb25zIHtcbiAgICByZXR1cm4geyAuLi50aGlzLm9wdGlvbiB9O1xuICB9XG59XG4iXX0=