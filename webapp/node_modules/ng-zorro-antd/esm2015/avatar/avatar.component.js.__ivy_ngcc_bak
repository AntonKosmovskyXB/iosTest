/**
 * @fileoverview added by tsickle
 * Generated from: avatar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'avatar';
export class NzAvatarComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} elementRef
     * @param {?} cdr
     * @param {?} platform
     */
    constructor(nzConfigService, elementRef, cdr, platform) {
        this.nzConfigService = nzConfigService;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.platform = platform;
        this.nzShape = 'circle';
        this.nzSize = 'default';
        this.nzError = new EventEmitter();
        this.hasText = false;
        this.hasSrc = true;
        this.hasIcon = false;
        this.textStyles = {};
        this.classMap = {};
        this.customSize = null;
        this.el = this.elementRef.nativeElement;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    imgError($event) {
        this.nzError.emit($event);
        if (!$event.defaultPrevented) {
            this.hasSrc = false;
            this.hasIcon = false;
            this.hasText = false;
            if (this.nzIcon) {
                this.hasIcon = true;
            }
            else if (this.nzText) {
                this.hasText = true;
            }
            this.cdr.detectChanges();
            this.setSizeStyle();
            this.notifyCalc();
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.hasText = !this.nzSrc && !!this.nzText;
        this.hasIcon = !this.nzSrc && !!this.nzIcon;
        this.hasSrc = !!this.nzSrc;
        this.setSizeStyle();
        this.notifyCalc();
    }
    /**
     * @private
     * @return {?}
     */
    calcStringSize() {
        if (!this.hasText) {
            return;
        }
        /** @type {?} */
        const childrenWidth = (/** @type {?} */ (this.textEl)).nativeElement.offsetWidth;
        /** @type {?} */
        const avatarWidth = this.el.getBoundingClientRect().width;
        /** @type {?} */
        const scale = avatarWidth - 8 < childrenWidth ? (avatarWidth - 8) / childrenWidth : 1;
        this.textStyles = {
            transform: `scale(${scale}) translateX(-50%)`
        };
        if (this.customSize) {
            Object.assign(this.textStyles, {
                lineHeight: this.customSize
            });
        }
        this.cdr.detectChanges();
    }
    /**
     * @private
     * @return {?}
     */
    notifyCalc() {
        // If use ngAfterViewChecked, always demands more computations, so......
        if (this.platform.isBrowser) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.calcStringSize();
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    setSizeStyle() {
        if (typeof this.nzSize === 'number') {
            this.customSize = `${this.nzSize}px`;
        }
        else {
            this.customSize = null;
        }
        this.cdr.markForCheck();
    }
}
NzAvatarComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-avatar',
                exportAs: 'nzAvatar',
                template: `
    <i nz-icon *ngIf="nzIcon && hasIcon" [nzType]="nzIcon"></i>
    <img *ngIf="nzSrc && hasSrc" [src]="nzSrc" [attr.srcset]="nzSrcSet" [attr.alt]="nzAlt" (error)="imgError($event)" />
    <span class="ant-avatar-string" #textEl [ngStyle]="textStyles" *ngIf="nzText && hasText">{{ nzText }}</span>
  `,
                host: {
                    '[class.ant-avatar]': 'true',
                    '[class.ant-avatar-lg]': `nzSize === 'large'`,
                    '[class.ant-avatar-sm]': `nzSize === 'small'`,
                    '[class.ant-avatar-square]': `nzShape === 'square'`,
                    '[class.ant-avatar-circle]': `nzShape === 'circle'`,
                    '[class.ant-avatar-icon]': `nzIcon`,
                    '[class.ant-avatar-image]': `hasSrc `,
                    '[style.width]': 'customSize',
                    '[style.height]': 'customSize',
                    '[style.line-height]': 'customSize',
                    // nzSize type is number when customSize is true
                    '[style.font-size.px]': '(hasIcon && customSize) ? $any(nzSize) / 2 : null'
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
NzAvatarComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Platform }
];
NzAvatarComponent.propDecorators = {
    nzShape: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzText: [{ type: Input }],
    nzSrc: [{ type: Input }],
    nzSrcSet: [{ type: Input }],
    nzAlt: [{ type: Input }],
    nzIcon: [{ type: Input }],
    nzError: [{ type: Output }],
    textEl: [{ type: ViewChild, args: ['textEl', { static: false },] }]
};
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    __metadata("design:type", String)
], NzAvatarComponent.prototype, "nzShape", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    __metadata("design:type", Object)
], NzAvatarComponent.prototype, "nzSize", void 0);
if (false) {
    /** @type {?} */
    NzAvatarComponent.prototype.nzShape;
    /** @type {?} */
    NzAvatarComponent.prototype.nzSize;
    /** @type {?} */
    NzAvatarComponent.prototype.nzText;
    /** @type {?} */
    NzAvatarComponent.prototype.nzSrc;
    /** @type {?} */
    NzAvatarComponent.prototype.nzSrcSet;
    /** @type {?} */
    NzAvatarComponent.prototype.nzAlt;
    /** @type {?} */
    NzAvatarComponent.prototype.nzIcon;
    /** @type {?} */
    NzAvatarComponent.prototype.nzError;
    /** @type {?} */
    NzAvatarComponent.prototype.hasText;
    /** @type {?} */
    NzAvatarComponent.prototype.hasSrc;
    /** @type {?} */
    NzAvatarComponent.prototype.hasIcon;
    /** @type {?} */
    NzAvatarComponent.prototype.textStyles;
    /** @type {?} */
    NzAvatarComponent.prototype.classMap;
    /** @type {?} */
    NzAvatarComponent.prototype.customSize;
    /** @type {?} */
    NzAvatarComponent.prototype.textEl;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.el;
    /** @type {?} */
    NzAvatarComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzAvatarComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYXZhdGFyLyIsInNvdXJjZXMiOlsiYXZhdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztNQUdsRSx3QkFBd0IsR0FBRyxRQUFRO0FBNEJ6QyxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7O0lBcUI1QixZQUNTLGVBQWdDLEVBQy9CLFVBQXNCLEVBQ3RCLEdBQXNCLEVBQ3RCLFFBQWtCO1FBSG5CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVU7UUF4Qm1CLFlBQU8sR0FBa0IsUUFBUSxDQUFDO1FBQ2xDLFdBQU0sR0FBMkIsU0FBUyxDQUFDO1FBTXZFLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO1FBRXZELFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsV0FBTSxHQUFZLElBQUksQ0FBQztRQUN2QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGVBQVUsR0FBcUIsRUFBRSxDQUFDO1FBQ2xDLGFBQVEsR0FBcUIsRUFBRSxDQUFDO1FBQ2hDLGVBQVUsR0FBa0IsSUFBSSxDQUFDO1FBSXpCLE9BQUUsR0FBZ0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFPckQsQ0FBQzs7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SUFHdEQsNENBQXVDOzs7OztJQUN2Qyx1Q0FBOEI7Ozs7O0lBQzlCLGdDQUE4Qjs7Ozs7SUFDOUIscUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IE5nQ2xhc3NJbnRlcmZhY2UsIE5nU3R5bGVJbnRlcmZhY2UsIE56U2hhcGVTQ1R5cGUsIE56U2l6ZUxEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnYXZhdGFyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotYXZhdGFyJyxcbiAgZXhwb3J0QXM6ICduekF2YXRhcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGkgbnotaWNvbiAqbmdJZj1cIm56SWNvbiAmJiBoYXNJY29uXCIgW256VHlwZV09XCJuekljb25cIj48L2k+XG4gICAgPGltZyAqbmdJZj1cIm56U3JjICYmIGhhc1NyY1wiIFtzcmNdPVwibnpTcmNcIiBbYXR0ci5zcmNzZXRdPVwibnpTcmNTZXRcIiBbYXR0ci5hbHRdPVwibnpBbHRcIiAoZXJyb3IpPVwiaW1nRXJyb3IoJGV2ZW50KVwiIC8+XG4gICAgPHNwYW4gY2xhc3M9XCJhbnQtYXZhdGFyLXN0cmluZ1wiICN0ZXh0RWwgW25nU3R5bGVdPVwidGV4dFN0eWxlc1wiICpuZ0lmPVwibnpUZXh0ICYmIGhhc1RleHRcIj57eyBuelRleHQgfX08L3NwYW4+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1hdmF0YXJdJzogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LWF2YXRhci1sZ10nOiBgbnpTaXplID09PSAnbGFyZ2UnYCxcbiAgICAnW2NsYXNzLmFudC1hdmF0YXItc21dJzogYG56U2l6ZSA9PT0gJ3NtYWxsJ2AsXG4gICAgJ1tjbGFzcy5hbnQtYXZhdGFyLXNxdWFyZV0nOiBgbnpTaGFwZSA9PT0gJ3NxdWFyZSdgLFxuICAgICdbY2xhc3MuYW50LWF2YXRhci1jaXJjbGVdJzogYG56U2hhcGUgPT09ICdjaXJjbGUnYCxcbiAgICAnW2NsYXNzLmFudC1hdmF0YXItaWNvbl0nOiBgbnpJY29uYCxcbiAgICAnW2NsYXNzLmFudC1hdmF0YXItaW1hZ2VdJzogYGhhc1NyYyBgLFxuICAgICdbc3R5bGUud2lkdGhdJzogJ2N1c3RvbVNpemUnLFxuICAgICdbc3R5bGUuaGVpZ2h0XSc6ICdjdXN0b21TaXplJyxcbiAgICAnW3N0eWxlLmxpbmUtaGVpZ2h0XSc6ICdjdXN0b21TaXplJyxcbiAgICAvLyBuelNpemUgdHlwZSBpcyBudW1iZXIgd2hlbiBjdXN0b21TaXplIGlzIHRydWVcbiAgICAnW3N0eWxlLmZvbnQtc2l6ZS5weF0nOiAnKGhhc0ljb24gJiYgY3VzdG9tU2l6ZSkgPyAkYW55KG56U2l6ZSkgLyAyIDogbnVsbCdcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIE56QXZhdGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBuelNoYXBlOiBOelNoYXBlU0NUeXBlID0gJ2NpcmNsZSc7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgbnpTaXplOiBOelNpemVMRFNUeXBlIHwgbnVtYmVyID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBuelRleHQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56U3JjPzogc3RyaW5nO1xuICBASW5wdXQoKSBuelNyY1NldD86IHN0cmluZztcbiAgQElucHV0KCkgbnpBbHQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56SWNvbj86IHN0cmluZztcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuXG4gIGhhc1RleHQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaGFzU3JjOiBib29sZWFuID0gdHJ1ZTtcbiAgaGFzSWNvbjogYm9vbGVhbiA9IGZhbHNlO1xuICB0ZXh0U3R5bGVzOiBOZ1N0eWxlSW50ZXJmYWNlID0ge307XG4gIGNsYXNzTWFwOiBOZ0NsYXNzSW50ZXJmYWNlID0ge307XG4gIGN1c3RvbVNpemU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIEBWaWV3Q2hpbGQoJ3RleHRFbCcsIHsgc3RhdGljOiBmYWxzZSB9KSB0ZXh0RWw/OiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm1cbiAgKSB7fVxuXG4gIGltZ0Vycm9yKCRldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm56RXJyb3IuZW1pdCgkZXZlbnQpO1xuICAgIGlmICghJGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHRoaXMuaGFzU3JjID0gZmFsc2U7XG4gICAgICB0aGlzLmhhc0ljb24gPSBmYWxzZTtcbiAgICAgIHRoaXMuaGFzVGV4dCA9IGZhbHNlO1xuICAgICAgaWYgKHRoaXMubnpJY29uKSB7XG4gICAgICAgIHRoaXMuaGFzSWNvbiA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubnpUZXh0KSB7XG4gICAgICAgIHRoaXMuaGFzVGV4dCA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB0aGlzLnNldFNpemVTdHlsZSgpO1xuICAgICAgdGhpcy5ub3RpZnlDYWxjKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5oYXNUZXh0ID0gIXRoaXMubnpTcmMgJiYgISF0aGlzLm56VGV4dDtcbiAgICB0aGlzLmhhc0ljb24gPSAhdGhpcy5uelNyYyAmJiAhIXRoaXMubnpJY29uO1xuICAgIHRoaXMuaGFzU3JjID0gISF0aGlzLm56U3JjO1xuXG4gICAgdGhpcy5zZXRTaXplU3R5bGUoKTtcbiAgICB0aGlzLm5vdGlmeUNhbGMoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2FsY1N0cmluZ1NpemUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc1RleHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZHJlbldpZHRoID0gdGhpcy50ZXh0RWwhLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgY29uc3QgYXZhdGFyV2lkdGggPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIGNvbnN0IHNjYWxlID0gYXZhdGFyV2lkdGggLSA4IDwgY2hpbGRyZW5XaWR0aCA/IChhdmF0YXJXaWR0aCAtIDgpIC8gY2hpbGRyZW5XaWR0aCA6IDE7XG4gICAgdGhpcy50ZXh0U3R5bGVzID0ge1xuICAgICAgdHJhbnNmb3JtOiBgc2NhbGUoJHtzY2FsZX0pIHRyYW5zbGF0ZVgoLTUwJSlgXG4gICAgfTtcbiAgICBpZiAodGhpcy5jdXN0b21TaXplKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMudGV4dFN0eWxlcywge1xuICAgICAgICBsaW5lSGVpZ2h0OiB0aGlzLmN1c3RvbVNpemVcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIG5vdGlmeUNhbGMoKTogdm9pZCB7XG4gICAgLy8gSWYgdXNlIG5nQWZ0ZXJWaWV3Q2hlY2tlZCwgYWx3YXlzIGRlbWFuZHMgbW9yZSBjb21wdXRhdGlvbnMsIHNvLi4uLi4uXG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5jYWxjU3RyaW5nU2l6ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRTaXplU3R5bGUoKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm56U2l6ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHRoaXMuY3VzdG9tU2l6ZSA9IGAke3RoaXMubnpTaXplfXB4YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXN0b21TaXplID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cbiJdfQ==