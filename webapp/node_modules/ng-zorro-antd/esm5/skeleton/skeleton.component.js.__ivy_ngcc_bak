/**
 * @fileoverview added by tsickle
 * Generated from: skeleton.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __read, __spread } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { toCssPixel } from 'ng-zorro-antd/core/util';
var NzSkeletonComponent = /** @class */ (function () {
    function NzSkeletonComponent(cdr, renderer, elementRef) {
        this.cdr = cdr;
        this.nzActive = false;
        this.nzLoading = true;
        this.nzTitle = true;
        this.nzAvatar = false;
        this.nzParagraph = true;
        this.rowsList = [];
        this.widthList = [];
        renderer.addClass(elementRef.nativeElement, 'ant-skeleton');
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    NzSkeletonComponent.prototype.toCSSUnit = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        return toCssPixel(value);
    };
    /**
     * @private
     * @return {?}
     */
    NzSkeletonComponent.prototype.getTitleProps = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var hasAvatar = !!this.nzAvatar;
        /** @type {?} */
        var hasParagraph = !!this.nzParagraph;
        /** @type {?} */
        var width = '';
        if (!hasAvatar && hasParagraph) {
            width = '38%';
        }
        else if (hasAvatar && hasParagraph) {
            width = '50%';
        }
        return __assign({ width: width }, this.getProps(this.nzTitle));
    };
    /**
     * @private
     * @return {?}
     */
    NzSkeletonComponent.prototype.getAvatarProps = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var shape = !!this.nzTitle && !this.nzParagraph ? 'square' : 'circle';
        /** @type {?} */
        var size = 'large';
        return __assign({ shape: shape, size: size }, this.getProps(this.nzAvatar));
    };
    /**
     * @private
     * @return {?}
     */
    NzSkeletonComponent.prototype.getParagraphProps = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var hasAvatar = !!this.nzAvatar;
        /** @type {?} */
        var hasTitle = !!this.nzTitle;
        /** @type {?} */
        var basicProps = {};
        // Width
        if (!hasAvatar || !hasTitle) {
            basicProps.width = '61%';
        }
        // Rows
        if (!hasAvatar && hasTitle) {
            basicProps.rows = 3;
        }
        else {
            basicProps.rows = 2;
        }
        return __assign(__assign({}, basicProps), this.getProps(this.nzParagraph));
    };
    /**
     * @private
     * @template T
     * @param {?} prop
     * @return {?}
     */
    NzSkeletonComponent.prototype.getProps = /**
     * @private
     * @template T
     * @param {?} prop
     * @return {?}
     */
    function (prop) {
        return prop && typeof prop === 'object' ? prop : {};
    };
    /**
     * @private
     * @return {?}
     */
    NzSkeletonComponent.prototype.getWidthList = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this.paragraph, width = _a.width, rows = _a.rows;
        /** @type {?} */
        var widthList = [];
        if (width && Array.isArray(width)) {
            widthList = width;
        }
        else if (width && !Array.isArray(width)) {
            widthList = [];
            widthList[(/** @type {?} */ (rows)) - 1] = width;
        }
        return widthList;
    };
    /**
     * @private
     * @return {?}
     */
    NzSkeletonComponent.prototype.updateProps = /**
     * @private
     * @return {?}
     */
    function () {
        this.title = this.getTitleProps();
        this.avatar = this.getAvatarProps();
        this.paragraph = this.getParagraphProps();
        this.rowsList = __spread(Array(this.paragraph.rows));
        this.widthList = this.getWidthList();
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzSkeletonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateProps();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSkeletonComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzTitle || changes.nzAvatar || changes.nzParagraph) {
            this.updateProps();
        }
    };
    NzSkeletonComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-skeleton',
                    exportAs: 'nzSkeleton',
                    host: {
                        '[class.ant-skeleton-with-avatar]': '!!nzAvatar',
                        '[class.ant-skeleton-active]': 'nzActive'
                    },
                    template: "\n    <ng-container *ngIf=\"nzLoading\">\n      <div class=\"ant-skeleton-header\" *ngIf=\"!!nzAvatar\">\n        <nz-skeleton-element nzType=\"avatar\" [nzSize]=\"avatar.size\" [nzShape]=\"avatar.shape\"></nz-skeleton-element>\n      </div>\n      <div class=\"ant-skeleton-content\">\n        <h3 *ngIf=\"!!nzTitle\" class=\"ant-skeleton-title\" [style.width]=\"toCSSUnit(title.width)\"></h3>\n        <ul *ngIf=\"!!nzParagraph\" class=\"ant-skeleton-paragraph\">\n          <li *ngFor=\"let row of rowsList; let i = index\" [style.width]=\"toCSSUnit(widthList[i])\"></li>\n        </ul>\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"!nzLoading\">\n      <ng-content></ng-content>\n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    NzSkeletonComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    NzSkeletonComponent.propDecorators = {
        nzActive: [{ type: Input }],
        nzLoading: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzAvatar: [{ type: Input }],
        nzParagraph: [{ type: Input }]
    };
    return NzSkeletonComponent;
}());
export { NzSkeletonComponent };
if (false) {
    /** @type {?} */
    NzSkeletonComponent.prototype.nzActive;
    /** @type {?} */
    NzSkeletonComponent.prototype.nzLoading;
    /** @type {?} */
    NzSkeletonComponent.prototype.nzTitle;
    /** @type {?} */
    NzSkeletonComponent.prototype.nzAvatar;
    /** @type {?} */
    NzSkeletonComponent.prototype.nzParagraph;
    /** @type {?} */
    NzSkeletonComponent.prototype.title;
    /** @type {?} */
    NzSkeletonComponent.prototype.avatar;
    /** @type {?} */
    NzSkeletonComponent.prototype.paragraph;
    /** @type {?} */
    NzSkeletonComponent.prototype.rowsList;
    /** @type {?} */
    NzSkeletonComponent.prototype.widthList;
    /**
     * @type {?}
     * @private
     */
    NzSkeletonComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tlbGV0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9za2VsZXRvbi8iLCJzb3VyY2VzIjpbInNrZWxldG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBR0wsU0FBUyxFQUVULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHckQ7SUF1Q0UsNkJBQW9CLEdBQXNCLEVBQUUsUUFBbUIsRUFBRSxVQUFzQjtRQUFuRSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQVpqQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsWUFBTyxHQUE4QixJQUFJLENBQUM7UUFDMUMsYUFBUSxHQUErQixLQUFLLENBQUM7UUFDN0MsZ0JBQVcsR0FBa0MsSUFBSSxDQUFDO1FBSzNELGFBQVEsR0FBYSxFQUFFLENBQUM7UUFDeEIsY0FBUyxHQUEyQixFQUFFLENBQUM7UUFHckMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7O0lBRUQsdUNBQVM7Ozs7SUFBVCxVQUFVLEtBQTJCO1FBQTNCLHNCQUFBLEVBQUEsVUFBMkI7UUFDbkMsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFTywyQ0FBYTs7OztJQUFyQjs7WUFDUSxTQUFTLEdBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFROztZQUNwQyxZQUFZLEdBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXOztZQUM1QyxLQUFLLEdBQUcsRUFBRTtRQUNkLElBQUksQ0FBQyxTQUFTLElBQUksWUFBWSxFQUFFO1lBQzlCLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDZjthQUFNLElBQUksU0FBUyxJQUFJLFlBQVksRUFBRTtZQUNwQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ2Y7UUFDRCxrQkFBUyxLQUFLLE9BQUEsSUFBSyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRztJQUNuRCxDQUFDOzs7OztJQUVPLDRDQUFjOzs7O0lBQXRCOztZQUNRLEtBQUssR0FBMEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVE7O1lBQ3hGLElBQUksR0FBeUIsT0FBTztRQUMxQyxrQkFBUyxLQUFLLE9BQUEsRUFBRSxJQUFJLE1BQUEsSUFBSyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRztJQUMxRCxDQUFDOzs7OztJQUVPLCtDQUFpQjs7OztJQUF6Qjs7WUFDUSxTQUFTLEdBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFROztZQUNwQyxRQUFRLEdBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPOztZQUNsQyxVQUFVLEdBQXdCLEVBQUU7UUFDMUMsUUFBUTtRQUNSLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDM0IsVUFBVSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDMUI7UUFDRCxPQUFPO1FBQ1AsSUFBSSxDQUFDLFNBQVMsSUFBSSxRQUFRLEVBQUU7WUFDMUIsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7U0FDckI7YUFBTTtZQUNMLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1NBQ3JCO1FBQ0QsNkJBQVksVUFBVSxHQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFHO0lBQy9ELENBQUM7Ozs7Ozs7SUFFTyxzQ0FBUTs7Ozs7O0lBQWhCLFVBQW9CLElBQTZCO1FBQy9DLE9BQU8sSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdEQsQ0FBQzs7Ozs7SUFFTywwQ0FBWTs7OztJQUFwQjtRQUNRLElBQUEsbUJBQWdDLEVBQTlCLGdCQUFLLEVBQUUsY0FBdUI7O1lBQ2xDLFNBQVMsR0FBMkIsRUFBRTtRQUMxQyxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDbkI7YUFBTSxJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUNmLFNBQVMsQ0FBQyxtQkFBQSxJQUFJLEVBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDOUI7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVPLHlDQUFXOzs7O0lBQW5CO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxZQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsc0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQseUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUU7WUFDOUQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7Z0JBbkhGLFNBQVMsU0FBQztvQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsWUFBWTtvQkFDdEIsSUFBSSxFQUFFO3dCQUNKLGtDQUFrQyxFQUFFLFlBQVk7d0JBQ2hELDZCQUE2QixFQUFFLFVBQVU7cUJBQzFDO29CQUNELFFBQVEsRUFBRSxxdEJBZVQ7aUJBQ0Y7Ozs7Z0JBdkNDLGlCQUFpQjtnQkFNakIsU0FBUztnQkFKVCxVQUFVOzs7MkJBdUNULEtBQUs7NEJBQ0wsS0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSzs7SUFxRlIsMEJBQUM7Q0FBQSxBQXBIRCxJQW9IQztTQTFGWSxtQkFBbUI7OztJQUM5Qix1Q0FBMEI7O0lBQzFCLHdDQUEwQjs7SUFDMUIsc0NBQW1EOztJQUNuRCx1Q0FBc0Q7O0lBQ3RELDBDQUEyRDs7SUFFM0Qsb0NBQXdCOztJQUN4QixxQ0FBMEI7O0lBQzFCLHdDQUFnQzs7SUFDaEMsdUNBQXdCOztJQUN4Qix3Q0FBdUM7Ozs7O0lBRTNCLGtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHRvQ3NzUGl4ZWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBOelNrZWxldG9uQXZhdGFyLCBOelNrZWxldG9uQXZhdGFyU2hhcGUsIE56U2tlbGV0b25BdmF0YXJTaXplLCBOelNrZWxldG9uUGFyYWdyYXBoLCBOelNrZWxldG9uVGl0bGUgfSBmcm9tICcuL3NrZWxldG9uLnR5cGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotc2tlbGV0b24nLFxuICBleHBvcnRBczogJ256U2tlbGV0b24nLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtc2tlbGV0b24td2l0aC1hdmF0YXJdJzogJyEhbnpBdmF0YXInLFxuICAgICdbY2xhc3MuYW50LXNrZWxldG9uLWFjdGl2ZV0nOiAnbnpBY3RpdmUnXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56TG9hZGluZ1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImFudC1za2VsZXRvbi1oZWFkZXJcIiAqbmdJZj1cIiEhbnpBdmF0YXJcIj5cbiAgICAgICAgPG56LXNrZWxldG9uLWVsZW1lbnQgbnpUeXBlPVwiYXZhdGFyXCIgW256U2l6ZV09XCJhdmF0YXIuc2l6ZVwiIFtuelNoYXBlXT1cImF2YXRhci5zaGFwZVwiPjwvbnotc2tlbGV0b24tZWxlbWVudD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImFudC1za2VsZXRvbi1jb250ZW50XCI+XG4gICAgICAgIDxoMyAqbmdJZj1cIiEhbnpUaXRsZVwiIGNsYXNzPVwiYW50LXNrZWxldG9uLXRpdGxlXCIgW3N0eWxlLndpZHRoXT1cInRvQ1NTVW5pdCh0aXRsZS53aWR0aClcIj48L2gzPlxuICAgICAgICA8dWwgKm5nSWY9XCIhIW56UGFyYWdyYXBoXCIgY2xhc3M9XCJhbnQtc2tlbGV0b24tcGFyYWdyYXBoXCI+XG4gICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCByb3cgb2Ygcm93c0xpc3Q7IGxldCBpID0gaW5kZXhcIiBbc3R5bGUud2lkdGhdPVwidG9DU1NVbml0KHdpZHRoTGlzdFtpXSlcIj48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFuekxvYWRpbmdcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOelNrZWxldG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBuekFjdGl2ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBuekxvYWRpbmcgPSB0cnVlO1xuICBASW5wdXQoKSBuelRpdGxlOiBOelNrZWxldG9uVGl0bGUgfCBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgbnpBdmF0YXI6IE56U2tlbGV0b25BdmF0YXIgfCBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56UGFyYWdyYXBoOiBOelNrZWxldG9uUGFyYWdyYXBoIHwgYm9vbGVhbiA9IHRydWU7XG5cbiAgdGl0bGUhOiBOelNrZWxldG9uVGl0bGU7XG4gIGF2YXRhciE6IE56U2tlbGV0b25BdmF0YXI7XG4gIHBhcmFncmFwaCE6IE56U2tlbGV0b25QYXJhZ3JhcGg7XG4gIHJvd3NMaXN0OiBudW1iZXJbXSA9IFtdO1xuICB3aWR0aExpc3Q6IEFycmF5PG51bWJlciB8IHN0cmluZz4gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtc2tlbGV0b24nKTtcbiAgfVxuXG4gIHRvQ1NTVW5pdCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nID0gJycpOiBzdHJpbmcge1xuICAgIHJldHVybiB0b0Nzc1BpeGVsKHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGl0bGVQcm9wcygpOiBOelNrZWxldG9uVGl0bGUge1xuICAgIGNvbnN0IGhhc0F2YXRhcjogYm9vbGVhbiA9ICEhdGhpcy5uekF2YXRhcjtcbiAgICBjb25zdCBoYXNQYXJhZ3JhcGg6IGJvb2xlYW4gPSAhIXRoaXMubnpQYXJhZ3JhcGg7XG4gICAgbGV0IHdpZHRoID0gJyc7XG4gICAgaWYgKCFoYXNBdmF0YXIgJiYgaGFzUGFyYWdyYXBoKSB7XG4gICAgICB3aWR0aCA9ICczOCUnO1xuICAgIH0gZWxzZSBpZiAoaGFzQXZhdGFyICYmIGhhc1BhcmFncmFwaCkge1xuICAgICAgd2lkdGggPSAnNTAlJztcbiAgICB9XG4gICAgcmV0dXJuIHsgd2lkdGgsIC4uLnRoaXMuZ2V0UHJvcHModGhpcy5uelRpdGxlKSB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRBdmF0YXJQcm9wcygpOiBOelNrZWxldG9uQXZhdGFyIHtcbiAgICBjb25zdCBzaGFwZTogTnpTa2VsZXRvbkF2YXRhclNoYXBlID0gISF0aGlzLm56VGl0bGUgJiYgIXRoaXMubnpQYXJhZ3JhcGggPyAnc3F1YXJlJyA6ICdjaXJjbGUnO1xuICAgIGNvbnN0IHNpemU6IE56U2tlbGV0b25BdmF0YXJTaXplID0gJ2xhcmdlJztcbiAgICByZXR1cm4geyBzaGFwZSwgc2l6ZSwgLi4udGhpcy5nZXRQcm9wcyh0aGlzLm56QXZhdGFyKSB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQYXJhZ3JhcGhQcm9wcygpOiBOelNrZWxldG9uUGFyYWdyYXBoIHtcbiAgICBjb25zdCBoYXNBdmF0YXI6IGJvb2xlYW4gPSAhIXRoaXMubnpBdmF0YXI7XG4gICAgY29uc3QgaGFzVGl0bGU6IGJvb2xlYW4gPSAhIXRoaXMubnpUaXRsZTtcbiAgICBjb25zdCBiYXNpY1Byb3BzOiBOelNrZWxldG9uUGFyYWdyYXBoID0ge307XG4gICAgLy8gV2lkdGhcbiAgICBpZiAoIWhhc0F2YXRhciB8fCAhaGFzVGl0bGUpIHtcbiAgICAgIGJhc2ljUHJvcHMud2lkdGggPSAnNjElJztcbiAgICB9XG4gICAgLy8gUm93c1xuICAgIGlmICghaGFzQXZhdGFyICYmIGhhc1RpdGxlKSB7XG4gICAgICBiYXNpY1Byb3BzLnJvd3MgPSAzO1xuICAgIH0gZWxzZSB7XG4gICAgICBiYXNpY1Byb3BzLnJvd3MgPSAyO1xuICAgIH1cbiAgICByZXR1cm4geyAuLi5iYXNpY1Byb3BzLCAuLi50aGlzLmdldFByb3BzKHRoaXMubnpQYXJhZ3JhcGgpIH07XG4gIH1cblxuICBwcml2YXRlIGdldFByb3BzPFQ+KHByb3A6IFQgfCBib29sZWFuIHwgdW5kZWZpbmVkKTogVCB8IHt9IHtcbiAgICByZXR1cm4gcHJvcCAmJiB0eXBlb2YgcHJvcCA9PT0gJ29iamVjdCcgPyBwcm9wIDoge307XG4gIH1cblxuICBwcml2YXRlIGdldFdpZHRoTGlzdCgpOiBBcnJheTxudW1iZXIgfCBzdHJpbmc+IHtcbiAgICBjb25zdCB7IHdpZHRoLCByb3dzIH0gPSB0aGlzLnBhcmFncmFwaDtcbiAgICBsZXQgd2lkdGhMaXN0OiBBcnJheTxzdHJpbmcgfCBudW1iZXI+ID0gW107XG4gICAgaWYgKHdpZHRoICYmIEFycmF5LmlzQXJyYXkod2lkdGgpKSB7XG4gICAgICB3aWR0aExpc3QgPSB3aWR0aDtcbiAgICB9IGVsc2UgaWYgKHdpZHRoICYmICFBcnJheS5pc0FycmF5KHdpZHRoKSkge1xuICAgICAgd2lkdGhMaXN0ID0gW107XG4gICAgICB3aWR0aExpc3Rbcm93cyEgLSAxXSA9IHdpZHRoO1xuICAgIH1cbiAgICByZXR1cm4gd2lkdGhMaXN0O1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVQcm9wcygpOiB2b2lkIHtcbiAgICB0aGlzLnRpdGxlID0gdGhpcy5nZXRUaXRsZVByb3BzKCk7XG4gICAgdGhpcy5hdmF0YXIgPSB0aGlzLmdldEF2YXRhclByb3BzKCk7XG4gICAgdGhpcy5wYXJhZ3JhcGggPSB0aGlzLmdldFBhcmFncmFwaFByb3BzKCk7XG4gICAgdGhpcy5yb3dzTGlzdCA9IFsuLi5BcnJheSh0aGlzLnBhcmFncmFwaC5yb3dzKV07XG4gICAgdGhpcy53aWR0aExpc3QgPSB0aGlzLmdldFdpZHRoTGlzdCgpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVQcm9wcygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56VGl0bGUgfHwgY2hhbmdlcy5uekF2YXRhciB8fCBjaGFuZ2VzLm56UGFyYWdyYXBoKSB7XG4gICAgICB0aGlzLnVwZGF0ZVByb3BzKCk7XG4gICAgfVxuICB9XG59XG4iXX0=