/**
 * @fileoverview added by tsickle
 * Generated from: skeleton.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { toCssPixel } from 'ng-zorro-antd/core/util';
export class NzSkeletonComponent {
    /**
     * @param {?} cdr
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(cdr, renderer, elementRef) {
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
    toCSSUnit(value = '') {
        return toCssPixel(value);
    }
    /**
     * @private
     * @return {?}
     */
    getTitleProps() {
        /** @type {?} */
        const hasAvatar = !!this.nzAvatar;
        /** @type {?} */
        const hasParagraph = !!this.nzParagraph;
        /** @type {?} */
        let width = '';
        if (!hasAvatar && hasParagraph) {
            width = '38%';
        }
        else if (hasAvatar && hasParagraph) {
            width = '50%';
        }
        return Object.assign({ width }, this.getProps(this.nzTitle));
    }
    /**
     * @private
     * @return {?}
     */
    getAvatarProps() {
        /** @type {?} */
        const shape = !!this.nzTitle && !this.nzParagraph ? 'square' : 'circle';
        /** @type {?} */
        const size = 'large';
        return Object.assign({ shape, size }, this.getProps(this.nzAvatar));
    }
    /**
     * @private
     * @return {?}
     */
    getParagraphProps() {
        /** @type {?} */
        const hasAvatar = !!this.nzAvatar;
        /** @type {?} */
        const hasTitle = !!this.nzTitle;
        /** @type {?} */
        const basicProps = {};
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
        return Object.assign(Object.assign({}, basicProps), this.getProps(this.nzParagraph));
    }
    /**
     * @private
     * @template T
     * @param {?} prop
     * @return {?}
     */
    getProps(prop) {
        return prop && typeof prop === 'object' ? prop : {};
    }
    /**
     * @private
     * @return {?}
     */
    getWidthList() {
        const { width, rows } = this.paragraph;
        /** @type {?} */
        let widthList = [];
        if (width && Array.isArray(width)) {
            widthList = width;
        }
        else if (width && !Array.isArray(width)) {
            widthList = [];
            widthList[(/** @type {?} */ (rows)) - 1] = width;
        }
        return widthList;
    }
    /**
     * @private
     * @return {?}
     */
    updateProps() {
        this.title = this.getTitleProps();
        this.avatar = this.getAvatarProps();
        this.paragraph = this.getParagraphProps();
        this.rowsList = [...Array(this.paragraph.rows)];
        this.widthList = this.getWidthList();
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateProps();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzTitle || changes.nzAvatar || changes.nzParagraph) {
            this.updateProps();
        }
    }
}
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
                template: `
    <ng-container *ngIf="nzLoading">
      <div class="ant-skeleton-header" *ngIf="!!nzAvatar">
        <nz-skeleton-element nzType="avatar" [nzSize]="avatar.size" [nzShape]="avatar.shape"></nz-skeleton-element>
      </div>
      <div class="ant-skeleton-content">
        <h3 *ngIf="!!nzTitle" class="ant-skeleton-title" [style.width]="toCSSUnit(title.width)"></h3>
        <ul *ngIf="!!nzParagraph" class="ant-skeleton-paragraph">
          <li *ngFor="let row of rowsList; let i = index" [style.width]="toCSSUnit(widthList[i])"></li>
        </ul>
      </div>
    </ng-container>
    <ng-container *ngIf="!nzLoading">
      <ng-content></ng-content>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
NzSkeletonComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: ElementRef }
];
NzSkeletonComponent.propDecorators = {
    nzActive: [{ type: Input }],
    nzLoading: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzAvatar: [{ type: Input }],
    nzParagraph: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tlbGV0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9za2VsZXRvbi8iLCJzb3VyY2VzIjpbInNrZWxldG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEVBRVQsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQTZCckQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBYTlCLFlBQW9CLEdBQXNCLEVBQUUsUUFBbUIsRUFBRSxVQUFzQjtRQUFuRSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQVpqQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsWUFBTyxHQUE4QixJQUFJLENBQUM7UUFDMUMsYUFBUSxHQUErQixLQUFLLENBQUM7UUFDN0MsZ0JBQVcsR0FBa0MsSUFBSSxDQUFDO1FBSzNELGFBQVEsR0FBYSxFQUFFLENBQUM7UUFDeEIsY0FBUyxHQUEyQixFQUFFLENBQUM7UUFHckMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLFFBQXlCLEVBQUU7UUFDbkMsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFTyxhQUFhOztjQUNiLFNBQVMsR0FBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVE7O2NBQ3BDLFlBQVksR0FBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVc7O1lBQzVDLEtBQUssR0FBRyxFQUFFO1FBQ2QsSUFBSSxDQUFDLFNBQVMsSUFBSSxZQUFZLEVBQUU7WUFDOUIs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QyxXQUFXLEVBQUU7WUFDOUQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7O1lBbkhGLFNBQVMsU0FBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsSUFBSSxFQUFFO29CQUNKLGtDQUFrQyxFQUFFLFlBQVk7b0JBQ2hELDZCQUE2QixFQUFFLFVBQVU7aUJBQzFDO2dCQUNELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0dBZVQ7YUFDRjs7OztZQXZDQyxpQkFBaUI7WUFNakIsU0FBUztZQUpULFVBQVU7Ozt1QkF1Q1QsS0FBSzt3QkFDTCxLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLOzs7O0lBSk4sdUNBQTBCOztJQUMxQix3Q0FBMEI7O0lBQzFCLHNDQUFtRDs7SUFDbkQsdUNBQXNEOztJQUN0RCwwQ0FBMkQ7O0lBRTNELG9DQUF3Qjs7SUFDeEIscUNBQTBCOztJQUMxQix3Q0FBZ0M7O0lBQ2hDLHVDQUF3Qjs7SUFDeEIsd0NBQXVDOzs7OztJQUUzQixrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyB0b0Nzc1BpeGVsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgTnpTa2VsZXRvbkF2YXRhciwgTnpTa2VsZXRvbkF2YXRhclNoYXBlLCBOelNrZWxldG9uQXZhdGFyU2l6ZSwgTnpTa2VsZXRvblBhcmFncmFwaCwgTnpTa2VsZXRvblRpdGxlIH0gZnJvbSAnLi9za2VsZXRvbi50eXBlJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ256LXNrZWxldG9uJyxcbiAgZXhwb3J0QXM6ICduelNrZWxldG9uJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXNrZWxldG9uLXdpdGgtYXZhdGFyXSc6ICchIW56QXZhdGFyJyxcbiAgICAnW2NsYXNzLmFudC1za2VsZXRvbi1hY3RpdmVdJzogJ256QWN0aXZlJ1xuICB9LFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuekxvYWRpbmdcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtc2tlbGV0b24taGVhZGVyXCIgKm5nSWY9XCIhIW56QXZhdGFyXCI+XG4gICAgICAgIDxuei1za2VsZXRvbi1lbGVtZW50IG56VHlwZT1cImF2YXRhclwiIFtuelNpemVdPVwiYXZhdGFyLnNpemVcIiBbbnpTaGFwZV09XCJhdmF0YXIuc2hhcGVcIj48L256LXNrZWxldG9uLWVsZW1lbnQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtc2tlbGV0b24tY29udGVudFwiPlxuICAgICAgICA8aDMgKm5nSWY9XCIhIW56VGl0bGVcIiBjbGFzcz1cImFudC1za2VsZXRvbi10aXRsZVwiIFtzdHlsZS53aWR0aF09XCJ0b0NTU1VuaXQodGl0bGUud2lkdGgpXCI+PC9oMz5cbiAgICAgICAgPHVsICpuZ0lmPVwiISFuelBhcmFncmFwaFwiIGNsYXNzPVwiYW50LXNrZWxldG9uLXBhcmFncmFwaFwiPlxuICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgcm93IG9mIHJvd3NMaXN0OyBsZXQgaSA9IGluZGV4XCIgW3N0eWxlLndpZHRoXT1cInRvQ1NTVW5pdCh3aWR0aExpc3RbaV0pXCI+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhbnpMb2FkaW5nXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTnpTa2VsZXRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbnpBY3RpdmUgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpMb2FkaW5nID0gdHJ1ZTtcbiAgQElucHV0KCkgbnpUaXRsZTogTnpTa2VsZXRvblRpdGxlIHwgYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIG56QXZhdGFyOiBOelNrZWxldG9uQXZhdGFyIHwgYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBuelBhcmFncmFwaDogTnpTa2VsZXRvblBhcmFncmFwaCB8IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHRpdGxlITogTnpTa2VsZXRvblRpdGxlO1xuICBhdmF0YXIhOiBOelNrZWxldG9uQXZhdGFyO1xuICBwYXJhZ3JhcGghOiBOelNrZWxldG9uUGFyYWdyYXBoO1xuICByb3dzTGlzdDogbnVtYmVyW10gPSBbXTtcbiAgd2lkdGhMaXN0OiBBcnJheTxudW1iZXIgfCBzdHJpbmc+ID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXNrZWxldG9uJyk7XG4gIH1cblxuICB0b0NTU1VuaXQodmFsdWU6IG51bWJlciB8IHN0cmluZyA9ICcnKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdG9Dc3NQaXhlbCh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIGdldFRpdGxlUHJvcHMoKTogTnpTa2VsZXRvblRpdGxlIHtcbiAgICBjb25zdCBoYXNBdmF0YXI6IGJvb2xlYW4gPSAhIXRoaXMubnpBdmF0YXI7XG4gICAgY29uc3QgaGFzUGFyYWdyYXBoOiBib29sZWFuID0gISF0aGlzLm56UGFyYWdyYXBoO1xuICAgIGxldCB3aWR0aCA9ICcnO1xuICAgIGlmICghaGFzQXZhdGFyICYmIGhhc1BhcmFncmFwaCkge1xuICAgICAgd2lkdGggPSAnMzglJztcbiAgICB9IGVsc2UgaWYgKGhhc0F2YXRhciAmJiBoYXNQYXJhZ3JhcGgpIHtcbiAgICAgIHdpZHRoID0gJzUwJSc7XG4gICAgfVxuICAgIHJldHVybiB7IHdpZHRoLCAuLi50aGlzLmdldFByb3BzKHRoaXMubnpUaXRsZSkgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QXZhdGFyUHJvcHMoKTogTnpTa2VsZXRvbkF2YXRhciB7XG4gICAgY29uc3Qgc2hhcGU6IE56U2tlbGV0b25BdmF0YXJTaGFwZSA9ICEhdGhpcy5uelRpdGxlICYmICF0aGlzLm56UGFyYWdyYXBoID8gJ3NxdWFyZScgOiAnY2lyY2xlJztcbiAgICBjb25zdCBzaXplOiBOelNrZWxldG9uQXZhdGFyU2l6ZSA9ICdsYXJnZSc7XG4gICAgcmV0dXJuIHsgc2hhcGUsIHNpemUsIC4uLnRoaXMuZ2V0UHJvcHModGhpcy5uekF2YXRhcikgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGFyYWdyYXBoUHJvcHMoKTogTnpTa2VsZXRvblBhcmFncmFwaCB7XG4gICAgY29uc3QgaGFzQXZhdGFyOiBib29sZWFuID0gISF0aGlzLm56QXZhdGFyO1xuICAgIGNvbnN0IGhhc1RpdGxlOiBib29sZWFuID0gISF0aGlzLm56VGl0bGU7XG4gICAgY29uc3QgYmFzaWNQcm9wczogTnpTa2VsZXRvblBhcmFncmFwaCA9IHt9O1xuICAgIC8vIFdpZHRoXG4gICAgaWYgKCFoYXNBdmF0YXIgfHwgIWhhc1RpdGxlKSB7XG4gICAgICBiYXNpY1Byb3BzLndpZHRoID0gJzYxJSc7XG4gICAgfVxuICAgIC8vIFJvd3NcbiAgICBpZiAoIWhhc0F2YXRhciAmJiBoYXNUaXRsZSkge1xuICAgICAgYmFzaWNQcm9wcy5yb3dzID0gMztcbiAgICB9IGVsc2Uge1xuICAgICAgYmFzaWNQcm9wcy5yb3dzID0gMjtcbiAgICB9XG4gICAgcmV0dXJuIHsgLi4uYmFzaWNQcm9wcywgLi4udGhpcy5nZXRQcm9wcyh0aGlzLm56UGFyYWdyYXBoKSB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQcm9wczxUPihwcm9wOiBUIHwgYm9vbGVhbiB8IHVuZGVmaW5lZCk6IFQgfCB7fSB7XG4gICAgcmV0dXJuIHByb3AgJiYgdHlwZW9mIHByb3AgPT09ICdvYmplY3QnID8gcHJvcCA6IHt9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRXaWR0aExpc3QoKTogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiB7XG4gICAgY29uc3QgeyB3aWR0aCwgcm93cyB9ID0gdGhpcy5wYXJhZ3JhcGg7XG4gICAgbGV0IHdpZHRoTGlzdDogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPiA9IFtdO1xuICAgIGlmICh3aWR0aCAmJiBBcnJheS5pc0FycmF5KHdpZHRoKSkge1xuICAgICAgd2lkdGhMaXN0ID0gd2lkdGg7XG4gICAgfSBlbHNlIGlmICh3aWR0aCAmJiAhQXJyYXkuaXNBcnJheSh3aWR0aCkpIHtcbiAgICAgIHdpZHRoTGlzdCA9IFtdO1xuICAgICAgd2lkdGhMaXN0W3Jvd3MhIC0gMV0gPSB3aWR0aDtcbiAgICB9XG4gICAgcmV0dXJuIHdpZHRoTGlzdDtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUHJvcHMoKTogdm9pZCB7XG4gICAgdGhpcy50aXRsZSA9IHRoaXMuZ2V0VGl0bGVQcm9wcygpO1xuICAgIHRoaXMuYXZhdGFyID0gdGhpcy5nZXRBdmF0YXJQcm9wcygpO1xuICAgIHRoaXMucGFyYWdyYXBoID0gdGhpcy5nZXRQYXJhZ3JhcGhQcm9wcygpO1xuICAgIHRoaXMucm93c0xpc3QgPSBbLi4uQXJyYXkodGhpcy5wYXJhZ3JhcGgucm93cyldO1xuICAgIHRoaXMud2lkdGhMaXN0ID0gdGhpcy5nZXRXaWR0aExpc3QoKTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlUHJvcHMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uelRpdGxlIHx8IGNoYW5nZXMubnpBdmF0YXIgfHwgY2hhbmdlcy5uelBhcmFncmFwaCkge1xuICAgICAgdGhpcy51cGRhdGVQcm9wcygpO1xuICAgIH1cbiAgfVxufVxuIl19