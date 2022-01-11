/**
 * @fileoverview added by tsickle
 * Generated from: icon.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { DOCUMENT } from '@angular/common';
import { HttpBackend } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional, RendererFactory2, Self } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IconService } from '@ant-design/icons-angular';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { warn } from 'ng-zorro-antd/core/logger';
import { Subject } from 'rxjs';
import { NZ_ICONS_USED_BY_ZORRO } from './icons';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "ng-zorro-antd/core/config";
import * as i3 from "@angular/common/http";
import * as i4 from "@angular/common";
/**
 * @record
 */
export function NzIconfontOption() { }
if (false) {
    /** @type {?} */
    NzIconfontOption.prototype.scriptUrl;
}
/** @type {?} */
export const NZ_ICONS = new InjectionToken('nz_icons');
/** @type {?} */
export const NZ_ICON_DEFAULT_TWOTONE_COLOR = new InjectionToken('nz_icon_default_twotone_color');
/** @type {?} */
export const DEFAULT_TWOTONE_COLOR = '#1890ff';
/**
 * It should be a global singleton, otherwise registered icons could not be found.
 */
export class NzIconService extends IconService {
    /**
     * @param {?} rendererFactory
     * @param {?} sanitizer
     * @param {?} nzConfigService
     * @param {?} handler
     * @param {?} _document
     * @param {?=} icons
     */
    constructor(rendererFactory, sanitizer, nzConfigService, handler, _document, icons) {
        super(rendererFactory, handler, _document, sanitizer);
        this.nzConfigService = nzConfigService;
        this.configUpdated$ = new Subject();
        this.iconfontCache = new Set();
        this.onConfigChange();
        this.addIcon(...NZ_ICONS_USED_BY_ZORRO, ...(icons || []));
        this.configDefaultTwotoneColor();
        this.configDefaultTheme();
    }
    /**
     * @param {?} svg
     * @return {?}
     */
    normalizeSvgElement(svg) {
        if (!svg.getAttribute('viewBox')) {
            this._renderer.setAttribute(svg, 'viewBox', '0 0 1024 1024');
        }
        if (!svg.getAttribute('width') || !svg.getAttribute('height')) {
            this._renderer.setAttribute(svg, 'width', '1em');
            this._renderer.setAttribute(svg, 'height', '1em');
        }
        if (!svg.getAttribute('fill')) {
            this._renderer.setAttribute(svg, 'fill', 'currentColor');
        }
    }
    /**
     * @param {?} opt
     * @return {?}
     */
    fetchFromIconfont(opt) {
        const { scriptUrl } = opt;
        if (this._document && !this.iconfontCache.has(scriptUrl)) {
            /** @type {?} */
            const script = this._renderer.createElement('script');
            this._renderer.setAttribute(script, 'src', scriptUrl);
            this._renderer.setAttribute(script, 'data-namespace', scriptUrl.replace(/^(https?|http):/g, ''));
            this._renderer.appendChild(this._document.body, script);
            this.iconfontCache.add(scriptUrl);
        }
    }
    /**
     * @param {?} type
     * @return {?}
     */
    createIconfontIcon(type) {
        return this._createSVGElementFromString(`<svg><use xlink:href="${type}"></svg>`);
    }
    /**
     * @private
     * @return {?}
     */
    onConfigChange() {
        this.nzConfigService.getConfigChangeEventForComponent('icon').subscribe((/**
         * @return {?}
         */
        () => {
            this.configDefaultTwotoneColor();
            this.configDefaultTheme();
            this.configUpdated$.next();
        }));
    }
    /**
     * @private
     * @return {?}
     */
    configDefaultTheme() {
        /** @type {?} */
        const iconConfig = this.getConfig();
        this.defaultTheme = iconConfig.nzTheme || 'outline';
    }
    /**
     * @private
     * @return {?}
     */
    configDefaultTwotoneColor() {
        /** @type {?} */
        const iconConfig = this.getConfig();
        /** @type {?} */
        const defaultTwotoneColor = iconConfig.nzTwotoneColor || DEFAULT_TWOTONE_COLOR;
        /** @type {?} */
        let primaryColor = DEFAULT_TWOTONE_COLOR;
        if (defaultTwotoneColor) {
            if (defaultTwotoneColor.startsWith('#')) {
                primaryColor = defaultTwotoneColor;
            }
            else {
                warn('Twotone color must be a hex color!');
            }
        }
        this.twoToneColor = { primaryColor };
    }
    /**
     * @private
     * @return {?}
     */
    getConfig() {
        return this.nzConfigService.getConfigForComponent('icon') || {};
    }
}
NzIconService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzIconService.ctorParameters = () => [
    { type: RendererFactory2 },
    { type: DomSanitizer },
    { type: NzConfigService },
    { type: HttpBackend, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NZ_ICONS,] }] }
];
/** @nocollapse */ NzIconService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NzIconService_Factory() { return new NzIconService(i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i1.DomSanitizer), i0.ɵɵinject(i2.NzConfigService), i0.ɵɵinject(i3.HttpBackend, 8), i0.ɵɵinject(i4.DOCUMENT, 8), i0.ɵɵinject(NZ_ICONS, 8)); }, token: NzIconService, providedIn: "root" });
if (false) {
    /** @type {?} */
    NzIconService.prototype.configUpdated$;
    /**
     * @type {?}
     * @private
     */
    NzIconService.prototype.iconfontCache;
    /**
     * @type {?}
     * @protected
     */
    NzIconService.prototype.nzConfigService;
}
/** @type {?} */
export const NZ_ICONS_PATCH = new InjectionToken('nz_icons_patch');
export class NzIconPatchService {
    /**
     * @param {?} extraIcons
     * @param {?} rootIconService
     */
    constructor(extraIcons, rootIconService) {
        this.extraIcons = extraIcons;
        this.rootIconService = rootIconService;
        this.patched = false;
    }
    /**
     * @return {?}
     */
    doPatch() {
        if (this.patched) {
            return;
        }
        this.extraIcons.forEach((/**
         * @param {?} iconDefinition
         * @return {?}
         */
        iconDefinition => this.rootIconService.addIcon(iconDefinition)));
        this.patched = true;
    }
}
NzIconPatchService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NzIconPatchService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Self }, { type: Inject, args: [NZ_ICONS_PATCH,] }] },
    { type: NzIconService }
];
if (false) {
    /** @type {?} */
    NzIconPatchService.prototype.patched;
    /**
     * @type {?}
     * @private
     */
    NzIconPatchService.prototype.extraIcons;
    /**
     * @type {?}
     * @private
     */
    NzIconPatchService.prototype.rootIconService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pY29uLyIsInNvdXJjZXMiOlsiaWNvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBa0IsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEUsT0FBTyxFQUFjLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7Ozs7Ozs7O0FBRWpELHNDQUVDOzs7SUFEQyxxQ0FBa0I7OztBQUdwQixNQUFNLE9BQU8sUUFBUSxHQUFHLElBQUksY0FBYyxDQUFDLFVBQVUsQ0FBQzs7QUFDdEQsTUFBTSxPQUFPLDZCQUE2QixHQUFHLElBQUksY0FBYyxDQUFDLCtCQUErQixDQUFDOztBQUNoRyxNQUFNLE9BQU8scUJBQXFCLEdBQUcsU0FBUzs7OztBQVE5QyxNQUFNLE9BQU8sYUFBYyxTQUFRLFdBQVc7Ozs7Ozs7OztJQWlDNUMsWUFDRSxlQUFpQyxFQUNqQyxTQUF1QixFQUNiLGVBQWdDLEVBQzlCLE9BQW9CLEVBQ0YsU0FBb0IsRUFDcEIsS0FBd0I7UUFFdEQsS0FBSyxDQUFDLGVBQWUsRUFBRSxPQUFP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SSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTzs7OztRQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUMsQ0FBQztRQUN4RixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDOzs7WUFiRixVQUFVOzs7O3dDQUlJLElBQUksWUFBSSxNQUFNLFNBQUMsY0FBYztZQUFpRSxhQUFhOzs7O0lBRnhILHFDQUFnQjs7Ozs7SUFFSix3Q0FBb0U7Ozs7O0lBQUUsNkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cEJhY2tlbmQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBPcHRpb25hbCwgUmVuZGVyZXJGYWN0b3J5MiwgU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBJY29uRGVmaW5pdGlvbiwgSWNvblNlcnZpY2UgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyJztcbmltcG9ydCB7IEljb25Db25maWcsIE56Q29uZmlnU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgd2FybiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9sb2dnZXInO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5aX0lDT05TX1VTRURfQllfWk9SUk8gfSBmcm9tICcuL2ljb25zJztcblxuZXhwb3J0IGludGVyZmFjZSBOekljb25mb250T3B0aW9uIHtcbiAgc2NyaXB0VXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBOWl9JQ09OUyA9IG5ldyBJbmplY3Rpb25Ub2tlbignbnpfaWNvbnMnKTtcbmV4cG9ydCBjb25zdCBOWl9JQ09OX0RFRkFVTFRfVFdPVE9ORV9DT0xPUiA9IG5ldyBJbmplY3Rpb25Ub2tlbignbnpfaWNvbl9kZWZhdWx0X3R3b3RvbmVfY29sb3InKTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX1RXT1RPTkVfQ09MT1IgPSAnIzE4OTBmZic7XG5cbi8qKlxuICogSXQgc2hvdWxkIGJlIGEgZ2xvYmFsIHNpbmdsZXRvbiwgb3RoZXJ3aXNlIHJlZ2lzdGVyZWQgaWNvbnMgY291bGQgbm90IGJlIGZvdW5kLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOekljb25TZXJ2aWNlIGV4dGVuZHMgSWNvblNlcnZpY2Uge1xuICBjb25maWdVcGRhdGVkJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgcHJpdmF0ZSBpY29uZm9udENhY2hlID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgbm9ybWFsaXplU3ZnRWxlbWVudChzdmc6IFNWR0VsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAoIXN2Zy5nZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnKSkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ3ZpZXdCb3gnLCAnMCAwIDEwMjQgMTAyNCcpO1xuICAgIH1cbiAgICBpZiAoIXN2Zy5nZXRBdHRyaWJ1dGUoJ3dpZHRoJykgfHwgIXN2Zy5nZXRBdHRyaWJ1dGUoJ2hlaWdodCcpKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAnd2lkdGgnLCAnMWVtJyk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAnaGVpZ2h0JywgJzFlbScpO1xuICAgIH1cbiAgICBpZiAoIXN2Zy5nZXRBdHRyaWJ1dGUoJ2ZpbGwnKSkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ2ZpbGwnLCAnY3VycmVudENvbG9yJyk7XG4gICAgfVxuICB9XG5cbiAgZmV0Y2hGcm9tSWNvbmZvbnQob3B0OiBOekljb25mb250T3B0aW9uKTogdm9pZCB7XG4gICAgY29uc3QgeyBzY3JpcHRVcmwgfSA9IG9wdDtcbiAgICBpZiAodGhpcy5fZG9jdW1lbnQgJiYgIXRoaXMuaWNvbmZvbnRDYWNoZS5oYXMoc2NyaXB0VXJsKSkge1xuICAgICAgY29uc3Qgc2NyaXB0ID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc2NyaXB0LCAnc3JjJywgc2NyaXB0VXJsKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzY3JpcHQsICdkYXRhLW5hbWVzcGFjZScsIHNjcmlwdFVybC5yZXBsYWNlKC9eKGh0dHBzP3xodHRwKTovZywgJycpKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2RvY3VtZW50LmJvZHksIHNjcmlwdCk7XG4gICAgICB0aGlzLmljb25mb250Q2FjaGUuYWRkKHNjcmlwdFVybCk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlSWNvbmZvbnRJY29uKHR5cGU6IHN0cmluZyk6IFNWR0VsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTVkdFbGVtZW50RnJvbVN0cmluZyhgPHN2Zz48dXNlIHhsaW5rOmhyZWY9XCIke3R5cGV9XCI+PC9zdmc+YCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICAgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJvdGVjdGVkIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIGhhbmRsZXI6IEh0dHBCYWNrZW5kLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIF9kb2N1bWVudDogTnpTYWZlQW55LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfSUNPTlMpIGljb25zPzogSWNvbkRlZmluaXRpb25bXVxuICApIHtcbiAgICBzdXBlcihyZW5kZXJlckZhY3RvcnksIGhhbmRsZXIsIF9kb2N1bWVudCwgc2FuaXRpemVyKTtcblxuICAgIHRoaXMub25Db25maWdDaGFuZ2UoKTtcbiAgICB0aGlzLmFkZEljb24oLi4uTlpfSUNPTlNfVVNFRF9CWV9aT1JSTywgLi4uKGljb25zIHx8IFtdKSk7XG4gICAgdGhpcy5jb25maWdEZWZhdWx0VHdvdG9uZUNvbG9yKCk7XG4gICAgdGhpcy5jb25maWdEZWZhdWx0VGhlbWUoKTtcbiAgfVxuXG4gIHByaXZhdGUgb25Db25maWdDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoJ2ljb24nKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5jb25maWdEZWZhdWx0VHdvdG9uZUNvbG9yKCk7XG4gICAgICB0aGlzLmNvbmZpZ0RlZmF1bHRUaGVtZSgpO1xuICAgICAgdGhpcy5jb25maWdVcGRhdGVkJC5uZXh0KCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ0RlZmF1bHRUaGVtZSgpOiB2b2lkIHtcbiAgICBjb25zdCBpY29uQ29uZmlnID0gdGhpcy5nZXRDb25maWcoKTtcbiAgICB0aGlzLmRlZmF1bHRUaGVtZSA9IGljb25Db25maWcubnpUaGVtZSB8fCAnb3V0bGluZSc7XG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ0RlZmF1bHRUd290b25lQ29sb3IoKTogdm9pZCB7XG4gICAgY29uc3QgaWNvbkNvbmZpZyA9IHRoaXMuZ2V0Q29uZmlnKCk7XG4gICAgY29uc3QgZGVmYXVsdFR3b3RvbmVDb2xvciA9IGljb25Db25maWcubnpUd290b25lQ29sb3IgfHwgREVGQVVMVF9UV09UT05FX0NPTE9SO1xuXG4gICAgbGV0IHByaW1hcnlDb2xvciA9IERFRkFVTFRfVFdPVE9ORV9DT0xPUjtcblxuICAgIGlmIChkZWZhdWx0VHdvdG9uZUNvbG9yKSB7XG4gICAgICBpZiAoZGVmYXVsdFR3b3RvbmVDb2xvci5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgICAgcHJpbWFyeUNvbG9yID0gZGVmYXVsdFR3b3RvbmVDb2xvcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oJ1R3b3RvbmUgY29sb3IgbXVzdCBiZSBhIGhleCBjb2xvciEnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnR3b1RvbmVDb2xvciA9IHsgcHJpbWFyeUNvbG9yIH07XG4gIH1cblxuICBwcml2YXRlIGdldENvbmZpZygpOiBJY29uQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KCdpY29uJykgfHwge307XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE5aX0lDT05TX1BBVENIID0gbmV3IEluamVjdGlvblRva2VuKCduel9pY29uc19wYXRjaCcpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTnpJY29uUGF0Y2hTZXJ2aWNlIHtcbiAgcGF0Y2hlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKEBTZWxmKCkgQEluamVjdChOWl9JQ09OU19QQVRDSCkgcHJpdmF0ZSBleHRyYUljb25zOiBJY29uRGVmaW5pdGlvbltdLCBwcml2YXRlIHJvb3RJY29uU2VydmljZTogTnpJY29uU2VydmljZSkge31cblxuICBkb1BhdGNoKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBhdGNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmV4dHJhSWNvbnMuZm9yRWFjaChpY29uRGVmaW5pdGlvbiA9PiB0aGlzLnJvb3RJY29uU2VydmljZS5hZGRJY29uKGljb25EZWZpbml0aW9uKSk7XG4gICAgdGhpcy5wYXRjaGVkID0gdHJ1ZTtcbiAgfVxufVxuIl19