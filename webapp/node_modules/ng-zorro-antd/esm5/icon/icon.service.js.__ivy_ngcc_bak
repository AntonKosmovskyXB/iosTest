/**
 * @fileoverview added by tsickle
 * Generated from: icon.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends, __read, __spread } from "tslib";
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
export var NZ_ICONS = new InjectionToken('nz_icons');
/** @type {?} */
export var NZ_ICON_DEFAULT_TWOTONE_COLOR = new InjectionToken('nz_icon_default_twotone_color');
/** @type {?} */
export var DEFAULT_TWOTONE_COLOR = '#1890ff';
/**
 * It should be a global singleton, otherwise registered icons could not be found.
 */
var NzIconService = /** @class */ (function (_super) {
    __extends(NzIconService, _super);
    function NzIconService(rendererFactory, sanitizer, nzConfigService, handler, _document, icons) {
        var _this = _super.call(this, rendererFactory, handler, _document, sanitizer) || this;
        _this.nzConfigService = nzConfigService;
        _this.configUpdated$ = new Subject();
        _this.iconfontCache = new Set();
        _this.onConfigChange();
        _this.addIcon.apply(_this, __spread(NZ_ICONS_USED_BY_ZORRO, (icons || [])));
        _this.configDefaultTwotoneColor();
        _this.configDefaultTheme();
        return _this;
    }
    /**
     * @param {?} svg
     * @return {?}
     */
    NzIconService.prototype.normalizeSvgElement = /**
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
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
    };
    /**
     * @param {?} opt
     * @return {?}
     */
    NzIconService.prototype.fetchFromIconfont = /**
     * @param {?} opt
     * @return {?}
     */
    function (opt) {
        var scriptUrl = opt.scriptUrl;
        if (this._document && !this.iconfontCache.has(scriptUrl)) {
            /** @type {?} */
            var script = this._renderer.createElement('script');
            this._renderer.setAttribute(script, 'src', scriptUrl);
            this._renderer.setAttribute(script, 'data-namespace', scriptUrl.replace(/^(https?|http):/g, ''));
            this._renderer.appendChild(this._document.body, script);
            this.iconfontCache.add(scriptUrl);
        }
    };
    /**
     * @param {?} type
     * @return {?}
     */
    NzIconService.prototype.createIconfontIcon = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this._createSVGElementFromString("<svg><use xlink:href=\"" + type + "\"></svg>");
    };
    /**
     * @private
     * @return {?}
     */
    NzIconService.prototype.onConfigChange = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzConfigService.getConfigChangeEventForComponent('icon').subscribe((/**
         * @return {?}
         */
        function () {
            _this.configDefaultTwotoneColor();
            _this.configDefaultTheme();
            _this.configUpdated$.next();
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzIconService.prototype.configDefaultTheme = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var iconConfig = this.getConfig();
        this.defaultTheme = iconConfig.nzTheme || 'outline';
    };
    /**
     * @private
     * @return {?}
     */
    NzIconService.prototype.configDefaultTwotoneColor = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var iconConfig = this.getConfig();
        /** @type {?} */
        var defaultTwotoneColor = iconConfig.nzTwotoneColor || DEFAULT_TWOTONE_COLOR;
        /** @type {?} */
        var primaryColor = DEFAULT_TWOTONE_COLOR;
        if (defaultTwotoneColor) {
            if (defaultTwotoneColor.startsWith('#')) {
                primaryColor = defaultTwotoneColor;
            }
            else {
                warn('Twotone color must be a hex color!');
            }
        }
        this.twoToneColor = { primaryColor: primaryColor };
    };
    /**
     * @private
     * @return {?}
     */
    NzIconService.prototype.getConfig = /**
     * @private
     * @return {?}
     */
    function () {
        return this.nzConfigService.getConfigForComponent('icon') || {};
    };
    NzIconService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzIconService.ctorParameters = function () { return [
        { type: RendererFactory2 },
        { type: DomSanitizer },
        { type: NzConfigService },
        { type: HttpBackend, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NZ_ICONS,] }] }
    ]; };
    /** @nocollapse */ NzIconService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NzIconService_Factory() { return new NzIconService(i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i1.DomSanitizer), i0.ɵɵinject(i2.NzConfigService), i0.ɵɵinject(i3.HttpBackend, 8), i0.ɵɵinject(i4.DOCUMENT, 8), i0.ɵɵinject(NZ_ICONS, 8)); }, token: NzIconService, providedIn: "root" });
    return NzIconService;
}(IconService));
export { NzIconService };
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
export var NZ_ICONS_PATCH = new InjectionToken('nz_icons_patch');
var NzIconPatchService = /** @class */ (function () {
    function NzIconPatchService(extraIcons, rootIconService) {
        this.extraIcons = extraIcons;
        this.rootIconService = rootIconService;
        this.patched = false;
    }
    /**
     * @return {?}
     */
    NzIconPatchService.prototype.doPatch = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.patched) {
            return;
        }
        this.extraIcons.forEach((/**
         * @param {?} iconDefinition
         * @return {?}
         */
        function (iconDefinition) { return _this.rootIconService.addIcon(iconDefinition); }));
        this.patched = true;
    };
    NzIconPatchService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NzIconPatchService.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Self }, { type: Inject, args: [NZ_ICONS_PATCH,] }] },
        { type: NzIconService }
    ]; };
    return NzIconPatchService;
}());
export { NzIconPatchService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pY29uLyIsInNvdXJjZXMiOlsiaWNvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQWtCLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hFLE9BQU8sRUFBYyxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxTQUFTLENBQUM7Ozs7Ozs7OztBQUVqRCxzQ0FFQzs7O0lBREMscUNBQWtCOzs7QUFHcEIsTUFBTSxLQUFPLFFBQVEsR0FBRyxJQUFJLGNBQWMsQ0FBQyxVQUFVLENBQUM7O0FBQ3RELE1BQU0sS0FBTyw2QkFBNkIsR0FBRyxJQUFJLGNBQWMsQ0FBQywrQkFBK0IsQ0FBQzs7QUFDaEcsTUFBTSxLQUFPLHFCQUFxQixHQUFHLFNBQVM7Ozs7QUFLOUM7SUFHbUMsaUNBQVc7SUFpQzVDLHVCQUNFLGVBQWlDLEVBQ2pDLFNBQXVCLEVBQ2IsZUFBZ0MsRUFDOUIsT0FBb0IsRUFDRixTQUFvQixFQUNwQixLQUF3QjtRQU54RCxZQVFFLGtCQUFNLGVBQWUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNB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QWUsQ0FBZTtRQUZ4SCxZQUFPLEdBQUcsS0FBSyxDQUFDO0lBRTJHLENBQUM7Ozs7SUFFNUgsb0NBQU87OztJQUFQO1FBQUEsaUJBT0M7UUFOQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBNUMsQ0FBNEMsRUFBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7O2dCQWJGLFVBQVU7Ozs7NENBSUksSUFBSSxZQUFJLE1BQU0sU0FBQyxjQUFjO2dCQUFpRSxhQUFhOztJQVUxSCx5QkFBQztDQUFBLEFBZEQsSUFjQztTQWJZLGtCQUFrQjs7O0lBQzdCLHFDQUFnQjs7Ozs7SUFFSix3Q0FBb0U7Ozs7O0lBQUUsNkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cEJhY2tlbmQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBPcHRpb25hbCwgUmVuZGVyZXJGYWN0b3J5MiwgU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBJY29uRGVmaW5pdGlvbiwgSWNvblNlcnZpY2UgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyJztcbmltcG9ydCB7IEljb25Db25maWcsIE56Q29uZmlnU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgd2FybiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9sb2dnZXInO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5aX0lDT05TX1VTRURfQllfWk9SUk8gfSBmcm9tICcuL2ljb25zJztcblxuZXhwb3J0IGludGVyZmFjZSBOekljb25mb250T3B0aW9uIHtcbiAgc2NyaXB0VXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBOWl9JQ09OUyA9IG5ldyBJbmplY3Rpb25Ub2tlbignbnpfaWNvbnMnKTtcbmV4cG9ydCBjb25zdCBOWl9JQ09OX0RFRkFVTFRfVFdPVE9ORV9DT0xPUiA9IG5ldyBJbmplY3Rpb25Ub2tlbignbnpfaWNvbl9kZWZhdWx0X3R3b3RvbmVfY29sb3InKTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX1RXT1RPTkVfQ09MT1IgPSAnIzE4OTBmZic7XG5cbi8qKlxuICogSXQgc2hvdWxkIGJlIGEgZ2xvYmFsIHNpbmdsZXRvbiwgb3RoZXJ3aXNlIHJlZ2lzdGVyZWQgaWNvbnMgY291bGQgbm90IGJlIGZvdW5kLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOekljb25TZXJ2aWNlIGV4dGVuZHMgSWNvblNlcnZpY2Uge1xuICBjb25maWdVcGRhdGVkJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgcHJpdmF0ZSBpY29uZm9udENhY2hlID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgbm9ybWFsaXplU3ZnRWxlbWVudChzdmc6IFNWR0VsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAoIXN2Zy5nZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnKSkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ3ZpZXdCb3gnLCAnMCAwIDEwMjQgMTAyNCcpO1xuICAgIH1cbiAgICBpZiAoIXN2Zy5nZXRBdHRyaWJ1dGUoJ3dpZHRoJykgfHwgIXN2Zy5nZXRBdHRyaWJ1dGUoJ2hlaWdodCcpKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAnd2lkdGgnLCAnMWVtJyk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAnaGVpZ2h0JywgJzFlbScpO1xuICAgIH1cbiAgICBpZiAoIXN2Zy5nZXRBdHRyaWJ1dGUoJ2ZpbGwnKSkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ2ZpbGwnLCAnY3VycmVudENvbG9yJyk7XG4gICAgfVxuICB9XG5cbiAgZmV0Y2hGcm9tSWNvbmZvbnQob3B0OiBOekljb25mb250T3B0aW9uKTogdm9pZCB7XG4gICAgY29uc3QgeyBzY3JpcHRVcmwgfSA9IG9wdDtcbiAgICBpZiAodGhpcy5fZG9jdW1lbnQgJiYgIXRoaXMuaWNvbmZvbnRDYWNoZS5oYXMoc2NyaXB0VXJsKSkge1xuICAgICAgY29uc3Qgc2NyaXB0ID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc2NyaXB0LCAnc3JjJywgc2NyaXB0VXJsKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzY3JpcHQsICdkYXRhLW5hbWVzcGFjZScsIHNjcmlwdFVybC5yZXBsYWNlKC9eKGh0dHBzP3xodHRwKTovZywgJycpKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2RvY3VtZW50LmJvZHksIHNjcmlwdCk7XG4gICAgICB0aGlzLmljb25mb250Q2FjaGUuYWRkKHNjcmlwdFVybCk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlSWNvbmZvbnRJY29uKHR5cGU6IHN0cmluZyk6IFNWR0VsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTVkdFbGVtZW50RnJvbVN0cmluZyhgPHN2Zz48dXNlIHhsaW5rOmhyZWY9XCIke3R5cGV9XCI+PC9zdmc+YCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICAgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJvdGVjdGVkIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIGhhbmRsZXI6IEh0dHBCYWNrZW5kLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIF9kb2N1bWVudDogTnpTYWZlQW55LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfSUNPTlMpIGljb25zPzogSWNvbkRlZmluaXRpb25bXVxuICApIHtcbiAgICBzdXBlcihyZW5kZXJlckZhY3RvcnksIGhhbmRsZXIsIF9kb2N1bWVudCwgc2FuaXRpemVyKTtcblxuICAgIHRoaXMub25Db25maWdDaGFuZ2UoKTtcbiAgICB0aGlzLmFkZEljb24oLi4uTlpfSUNPTlNfVVNFRF9CWV9aT1JSTywgLi4uKGljb25zIHx8IFtdKSk7XG4gICAgdGhpcy5jb25maWdEZWZhdWx0VHdvdG9uZUNvbG9yKCk7XG4gICAgdGhpcy5jb25maWdEZWZhdWx0VGhlbWUoKTtcbiAgfVxuXG4gIHByaXZhdGUgb25Db25maWdDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoJ2ljb24nKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5jb25maWdEZWZhdWx0VHdvdG9uZUNvbG9yKCk7XG4gICAgICB0aGlzLmNvbmZpZ0RlZmF1bHRUaGVtZSgpO1xuICAgICAgdGhpcy5jb25maWdVcGRhdGVkJC5uZXh0KCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ0RlZmF1bHRUaGVtZSgpOiB2b2lkIHtcbiAgICBjb25zdCBpY29uQ29uZmlnID0gdGhpcy5nZXRDb25maWcoKTtcbiAgICB0aGlzLmRlZmF1bHRUaGVtZSA9IGljb25Db25maWcubnpUaGVtZSB8fCAnb3V0bGluZSc7XG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ0RlZmF1bHRUd290b25lQ29sb3IoKTogdm9pZCB7XG4gICAgY29uc3QgaWNvbkNvbmZpZyA9IHRoaXMuZ2V0Q29uZmlnKCk7XG4gICAgY29uc3QgZGVmYXVsdFR3b3RvbmVDb2xvciA9IGljb25Db25maWcubnpUd290b25lQ29sb3IgfHwgREVGQVVMVF9UV09UT05FX0NPTE9SO1xuXG4gICAgbGV0IHByaW1hcnlDb2xvciA9IERFRkFVTFRfVFdPVE9ORV9DT0xPUjtcblxuICAgIGlmIChkZWZhdWx0VHdvdG9uZUNvbG9yKSB7XG4gICAgICBpZiAoZGVmYXVsdFR3b3RvbmVDb2xvci5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgICAgcHJpbWFyeUNvbG9yID0gZGVmYXVsdFR3b3RvbmVDb2xvcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oJ1R3b3RvbmUgY29sb3IgbXVzdCBiZSBhIGhleCBjb2xvciEnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnR3b1RvbmVDb2xvciA9IHsgcHJpbWFyeUNvbG9yIH07XG4gIH1cblxuICBwcml2YXRlIGdldENvbmZpZygpOiBJY29uQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KCdpY29uJykgfHwge307XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE5aX0lDT05TX1BBVENIID0gbmV3IEluamVjdGlvblRva2VuKCduel9pY29uc19wYXRjaCcpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTnpJY29uUGF0Y2hTZXJ2aWNlIHtcbiAgcGF0Y2hlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKEBTZWxmKCkgQEluamVjdChOWl9JQ09OU19QQVRDSCkgcHJpdmF0ZSBleHRyYUljb25zOiBJY29uRGVmaW5pdGlvbltdLCBwcml2YXRlIHJvb3RJY29uU2VydmljZTogTnpJY29uU2VydmljZSkge31cblxuICBkb1BhdGNoKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBhdGNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmV4dHJhSWNvbnMuZm9yRWFjaChpY29uRGVmaW5pdGlvbiA9PiB0aGlzLnJvb3RJY29uU2VydmljZS5hZGRJY29uKGljb25EZWZpbml0aW9uKSk7XG4gICAgdGhpcy5wYXRjaGVkID0gdHJ1ZTtcbiAgfVxufVxuIl19