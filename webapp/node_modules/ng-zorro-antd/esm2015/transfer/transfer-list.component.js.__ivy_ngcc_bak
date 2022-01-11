/**
 * @fileoverview added by tsickle
 * Generated from: transfer-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
export class NzTransferListComponent {
    // #endregion
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        // #region fields
        this.direction = 'left';
        this.titleText = '';
        this.showSelectAll = true;
        this.dataSource = [];
        this.itemUnit = '';
        this.itemsUnit = '';
        this.filter = '';
        this.renderList = null;
        this.render = null;
        this.footer = null;
        // events
        this.handleSelectAll = new EventEmitter();
        this.handleSelect = new EventEmitter();
        this.filterChange = new EventEmitter();
        this.stat = {
            checkAll: false,
            checkHalf: false,
            checkCount: 0,
            shownCount: 0
        };
        this.onItemSelect = (/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            if (this.disabled || item.disabled) {
                return;
            }
            item.checked = !item.checked;
            this.updateCheckStatus();
            this.handleSelect.emit(item);
        });
        this.onItemSelectAll = (/**
         * @param {?} status
         * @return {?}
         */
        (status) => {
            this.dataSource.forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                if (!item.disabled && !item.hide) {
                    item.checked = status;
                }
            }));
            this.updateCheckStatus();
            this.handleSelectAll.emit(status);
        });
    }
    /**
     * @private
     * @return {?}
     */
    updateCheckStatus() {
        /** @type {?} */
        const validCount = this.dataSource.filter((/**
         * @param {?} w
         * @return {?}
         */
        w => !w.disabled)).length;
        this.stat.checkCount = this.dataSource.filter((/**
         * @param {?} w
         * @return {?}
         */
        w => w.checked && !w.disabled)).length;
        this.stat.shownCount = this.dataSource.filter((/**
         * @param {?} w
         * @return {?}
         */
        w => !w.hide)).length;
        this.stat.checkAll = validCount > 0 && validCount === this.stat.checkCount;
        this.stat.checkHalf = this.stat.checkCount > 0 && !this.stat.checkAll;
    }
    // #endregion
    // #region search
    /**
     * @param {?} value
     * @return {?}
     */
    handleFilter(value) {
        this.filter = value;
        this.dataSource.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            item.hide = value.length > 0 && !this.matchFilter(value, item);
        }));
        this.stat.shownCount = this.dataSource.filter((/**
         * @param {?} w
         * @return {?}
         */
        w => !w.hide)).length;
        this.filterChange.emit({ direction: this.direction, value });
    }
    /**
     * @return {?}
     */
    handleClear() {
        this.handleFilter('');
    }
    /**
     * @private
     * @param {?} text
     * @param {?} item
     * @return {?}
     */
    matchFilter(text, item) {
        if (this.filterOption) {
            return this.filterOption(text, item);
        }
        return item.title.includes(text);
    }
    /**
     * @return {?}
     */
    markForCheck() {
        this.updateCheckStatus();
        this.cdr.markForCheck();
    }
}
NzTransferListComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-transfer-list',
                exportAs: 'nzTransferList',
                preserveWhitespaces: false,
                template: `
    <ng-template #defaultRenderList>
      <ul *ngIf="stat.shownCount > 0" class="ant-transfer-list-content">
        <div class="LazyLoad" *ngFor="let item of dataSource">
          <li
            *ngIf="!item.hide"
            (click)="onItemSelect(item)"
            class="ant-transfer-list-content-item"
            [ngClass]="{ 'ant-transfer-list-content-item-disabled': disabled || item.disabled }"
          >
            <label
              nz-checkbox
              [nzChecked]="item.checked"
              (nzCheckedChange)="onItemSelect(item)"
              (click)="$event.stopPropagation()"
              [nzDisabled]="disabled || item.disabled"
            >
              <ng-container *ngIf="!render; else renderContainer">{{ item.title }}</ng-container>
              <ng-template #renderContainer [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: item }"></ng-template>
            </label>
          </li>
        </div>
      </ul>
      <div *ngIf="stat.shownCount === 0" class="ant-transfer-list-body-not-found">
        <nz-embed-empty [nzComponentName]="'transfer'" [specificContent]="notFoundContent"></nz-embed-empty>
      </div>
    </ng-template>
    <div class="ant-transfer-list-header">
      <label
        *ngIf="showSelectAll"
        nz-checkbox
        [nzChecked]="stat.checkAll"
        (nzCheckedChange)="onItemSelectAll($event)"
        [nzIndeterminate]="stat.checkHalf"
        [nzDisabled]="stat.shownCount == 0 || disabled"
      >
      </label>
      <span class="ant-transfer-list-header-selected">
        <span
          >{{ (stat.checkCount > 0 ? stat.checkCount + '/' : '') + stat.shownCount }}
          {{ dataSource.length > 1 ? itemsUnit : itemUnit }}</span
        >
        <span *ngIf="titleText" class="ant-transfer-list-header-title">{{ titleText }}</span>
      </span>
    </div>
    <div
      class="{{ showSearch ? 'ant-transfer-list-body ant-transfer-list-body-with-search' : 'ant-transfer-list-body' }}"
      [ngClass]="{ 'ant-transfer__nodata': stat.shownCount === 0 }"
    >
      <div *ngIf="showSearch" class="ant-transfer-list-body-search-wrapper">
        <div
          nz-transfer-search
          (valueChanged)="handleFilter($event)"
          (valueClear)="handleClear()"
          [placeholder]="searchPlaceholder"
          [disabled]="disabled"
          [value]="filter"
        ></div>
      </div>
      <ng-container *ngIf="renderList; else defaultRenderList">
        <div class="ant-transfer-list-body-customize-wrapper">
          <ng-container
            *ngTemplateOutlet="
              renderList;
              context: {
                $implicit: dataSource,
                direction: direction,
                disabled: disabled,
                onItemSelectAll: onItemSelectAll,
                onItemSelect: onItemSelect,
                stat: stat
              }
            "
          ></ng-container>
        </div>
      </ng-container>
    </div>
    <div *ngIf="footer" class="ant-transfer-list-footer">
      <ng-template [ngTemplateOutlet]="footer" [ngTemplateOutletContext]="{ $implicit: direction }"></ng-template>
    </div>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.ant-transfer-list]': 'true',
                    '[class.ant-transfer-list-with-footer]': '!!footer'
                }
            }] }
];
/** @nocollapse */
NzTransferListComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NzTransferListComponent.propDecorators = {
    direction: [{ type: Input }],
    titleText: [{ type: Input }],
    showSelectAll: [{ type: Input }],
    dataSource: [{ type: Input }],
    itemUnit: [{ type: Input }],
    itemsUnit: [{ type: Input }],
    filter: [{ type: Input }],
    disabled: [{ type: Input }],
    showSearch: [{ type: Input }],
    searchPlaceholder: [{ type: Input }],
    notFoundContent: [{ type: Input }],
    filterOption: [{ type: Input }],
    renderList: [{ type: Input }],
    render: [{ type: Input }],
    footer: [{ type: Input }],
    handleSelectAll: [{ type: Output }],
    handleSelect: [{ type: Output }],
    filterChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NzTransferListComponent.prototype.direction;
    /** @type {?} */
    NzTransferListComponent.prototype.titleText;
    /** @type {?} */
    NzTransferListComponent.prototype.showSelectAll;
    /** @type {?} */
    NzTransferListComponent.prototype.dataSource;
    /** @type {?} */
    NzTransferListComponent.prototype.itemUnit;
    /** @type {?} */
    NzTransferListComponent.prototype.itemsUnit;
    /** @type {?} */
    NzTransferListComponent.prototype.filter;
    /** @type {?} */
    NzTransferListComponent.prototype.disabled;
    /** @type {?} */
    NzTransferListComponent.prototype.showSearch;
    /** @type {?} */
    NzTransferListComponent.prototype.searchPlaceholder;
    /** @type {?} */
    NzTransferListComponent.prototype.notFoundContent;
    /** @type {?} */
    NzTransferListComponent.prototype.filterOption;
    /** @type {?} */
    NzTransferListComponent.prototype.renderList;
    /** @type {?} */
    NzTransferListComponent.prototype.render;
    /** @type {?} */
    NzTransferListComponent.prototype.footer;
    /** @type {?} */
    NzTransferListComponent.prototype.handleSelectAll;
    /** @type {?} */
    NzTransferListComponent.prototype.handleSelect;
    /** @type {?} */
    NzTransferListComponent.prototype.filterChange;
    /** @type {?} */
    NzTransferListComponent.prototype.stat;
    /** @type {?} */
    NzTransferListComponent.prototype.onItemSelect;
    /** @type {?} */
    NzTransferListComponent.prototype.onItemSelectAll;
    /**
     * @type {?}
     * @private
     */
    NzTransferListComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RyYW5zZmVyLyIsInNvdXJjZXMiOlsidHJhbnNmZXItbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUVOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQWdHdkIsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7SUF3RmxDLFlBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1COztRQXJGakMsY0FBUyxHQUFzQixNQUFNLENBQUM7UUFDdEMsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBRXJCLGVBQVUsR0FBbUIsRUFBRSxDQUFDO1FBRWhDLGFBQVEsR0FBdUIsRUFBRSxDQUFDO1FBQ2xDLGNBQVMsR0FBdUIsRUFBRSxDQUFDO1FBQ25DLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFPWixlQUFVLEdBQTZCLElBQUksQ0FBQztRQUM1QyxXQUFNLEdBQTZCLElBQUksQ0FBQztRQUN4QyxXQUFNLEdBQTZCLElBQUksQ0FBQzs7UUFHOUIsb0JBQWUsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNyRSxpQkFBWSxHQUErQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlELGlCQUFZLEdBQWtFLElBQUksWUFBWSxFQUFFLENBQUM7UUFFcEgsU0FBSSxHQUFHO1lBQ0wsUUFBUSxFQUFFLEtBQUs7WUFDZixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUsQ0FBQztZQUNiLFVBQVUsRUFBRSxDQUFDO1NBQ2QsQ0FBQztRQUVGLGlCQUFZOzs7O1FBQUcsQ0FBQyxJQUFrQixFQUFFLEVBQUU7WUFDcEMsSUFBSSxJQUFJLENBQUMs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QUU1RSw2Q0FBcUQ7O0lBQ3JELHlDQUFpRDs7SUFDakQseUNBQWlEOztJQUdqRCxrREFBd0Y7O0lBQ3hGLCtDQUFpRjs7SUFDakYsK0NBQW9IOztJQUVwSCx1Q0FLRTs7SUFFRiwrQ0FPRTs7SUFFRixrREFTRTs7Ozs7SUFvQ1Usc0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUcmFuc2ZlckRpcmVjdGlvbiwgVHJhbnNmZXJJdGVtIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei10cmFuc2Zlci1saXN0JyxcbiAgZXhwb3J0QXM6ICduelRyYW5zZmVyTGlzdCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFJlbmRlckxpc3Q+XG4gICAgICA8dWwgKm5nSWY9XCJzdGF0LnNob3duQ291bnQgPiAwXCIgY2xhc3M9XCJhbnQtdHJhbnNmZXItbGlzdC1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJMYXp5TG9hZFwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGFTb3VyY2VcIj5cbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgICpuZ0lmPVwiIWl0ZW0uaGlkZVwiXG4gICAgICAgICAgICAoY2xpY2spPVwib25JdGVtU2VsZWN0KGl0ZW0pXCJcbiAgICAgICAgICAgIGNsYXNzPVwiYW50LXRyYW5zZmVyLWxpc3QtY29udGVudC1pdGVtXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsgJ2FudC10cmFuc2Zlci1saXN0LWNvbnRlbnQtaXRlbS1kaXNhYmxlZCc6IGRpc2FibGVkIHx8IGl0ZW0uZGlzYWJsZWQgfVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgIG56LWNoZWNrYm94XG4gICAgICAgICAgICAgIFtuekNoZWNrZWRdPVwiaXRlbS5jaGVja2VkXCJcbiAgICAgICAgICAgICAgKG56Q2hlY2tlZENoYW5nZSk9XCJvbkl0ZW1TZWxlY3QoaXRlbSlcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCJcbiAgICAgICAgICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWQgfHwgaXRlbS5kaXNhYmxlZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhcmVuZGVyOyBlbHNlIHJlbmRlckNvbnRhaW5lclwiPnt7IGl0ZW0udGl0bGUgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNyZW5kZXJDb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwicmVuZGVyXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpdGVtIH1cIj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdWw+XG4gICAgICA8ZGl2ICpuZ0lmPVwic3RhdC5zaG93bkNvdW50ID09PSAwXCIgY2xhc3M9XCJhbnQtdHJhbnNmZXItbGlzdC1ib2R5LW5vdC1mb3VuZFwiPlxuICAgICAgICA8bnotZW1iZWQtZW1wdHkgW256Q29tcG9uZW50TmFtZV09XCIndHJhbnNmZXInXCIgW3NwZWNpZmljQ29udGVudF09XCJub3RGb3VuZENvbnRlbnRcIj48L256LWVtYmVkLWVtcHR5PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiYW50LXRyYW5zZmVyLWxpc3QtaGVhZGVyXCI+XG4gICAgICA8bGFiZWxcbiAgICAgICAgKm5nSWY9XCJzaG93U2VsZWN0QWxsXCJcbiAgICAgICAgbnotY2hlY2tib3hcbiAgICAgICAgW256Q2hlY2tlZF09XCJzdGF0LmNoZWNrQWxsXCJcbiAgICAgICAgKG56Q2hlY2tlZENoYW5nZSk9XCJvbkl0ZW1TZWxlY3RBbGwoJGV2ZW50KVwiXG4gICAgICAgIFtuekluZGV0ZXJtaW5hdGVdPVwic3RhdC5jaGVja0hhbGZcIlxuICAgICAgICBbbnpEaXNhYmxlZF09XCJzdGF0LnNob3duQ291bnQgPT0gMCB8fCBkaXNhYmxlZFwiXG4gICAgICA+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtdHJhbnNmZXItbGlzdC1oZWFkZXItc2VsZWN0ZWRcIj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICA+e3sgKHN0YXQuY2hlY2tDb3VudCA+IDAgPyBzdGF0LmNoZWNrQ291bnQgKyAnLycgOiAnJykgKyBzdGF0LnNob3duQ291bnQgfX1cbiAgICAgICAgICB7eyBkYXRhU291cmNlLmxlbmd0aCA+IDEgPyBpdGVtc1VuaXQgOiBpdGVtVW5pdCB9fTwvc3BhblxuICAgICAgICA+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwidGl0bGVUZXh0XCIgY2xhc3M9XCJhbnQtdHJhbnNmZXItbGlzdC1oZWFkZXItdGl0bGVcIj57eyB0aXRsZVRleHQgfX08L3NwYW4+XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJ7eyBzaG93U2VhcmNoID8gJ2FudC10cmFuc2Zlci1saXN0LWJvZHkgYW50LXRyYW5zZmVyLWxpc3QtYm9keS13aXRoLXNlYXJjaCcgOiAnYW50LXRyYW5zZmVyLWxpc3QtYm9keScgfX1cIlxuICAgICAgW25nQ2xhc3NdPVwieyAnYW50LXRyYW5zZmVyX19ub2RhdGEnOiBzdGF0LnNob3duQ291bnQgPT09IDAgfVwiXG4gICAgPlxuICAgICAgPGRpdiAqbmdJZj1cInNob3dTZWFyY2hcIiBjbGFzcz1cImFudC10cmFuc2Zlci1saXN0LWJvZHktc2VhcmNoLXdyYXBwZXJcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIG56LXRyYW5zZmVyLXNlYXJjaFxuICAgICAgICAgICh2YWx1ZUNoYW5nZWQpPVwiaGFuZGxlRmlsdGVyKCRldmVudClcIlxuICAgICAgICAgICh2YWx1ZUNsZWFyKT1cImhhbmRsZUNsZWFyKClcIlxuICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJzZWFyY2hQbGFjZWhvbGRlclwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICBbdmFsdWVdPVwiZmlsdGVyXCJcbiAgICAgICAgPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicmVuZGVyTGlzdDsgZWxzZSBkZWZhdWx0UmVuZGVyTGlzdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXRyYW5zZmVyLWxpc3QtYm9keS1jdXN0b21pemUtd3JhcHBlclwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwiXG4gICAgICAgICAgICAgIHJlbmRlckxpc3Q7XG4gICAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICAkaW1wbGljaXQ6IGRhdGFTb3VyY2UsXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICAgICAgICAgIG9uSXRlbVNlbGVjdEFsbDogb25JdGVtU2VsZWN0QWxsLFxuICAgICAgICAgICAgICAgIG9uSXRlbVNlbGVjdDogb25JdGVtU2VsZWN0LFxuICAgICAgICAgICAgICAgIHN0YXQ6IHN0YXRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXCJcbiAgICAgICAgICA+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiAqbmdJZj1cImZvb3RlclwiIGNsYXNzPVwiYW50LXRyYW5zZmVyLWxpc3QtZm9vdGVyXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiZm9vdGVyXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBkaXJlY3Rpb24gfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtdHJhbnNmZXItbGlzdF0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hbnQtdHJhbnNmZXItbGlzdC13aXRoLWZvb3Rlcl0nOiAnISFmb290ZXInXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpUcmFuc2Zlckxpc3RDb21wb25lbnQge1xuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIGRpcmVjdGlvbjogVHJhbnNmZXJEaXJlY3Rpb24gPSAnbGVmdCc7XG4gIEBJbnB1dCgpIHRpdGxlVGV4dCA9ICcnO1xuICBASW5wdXQoKSBzaG93U2VsZWN0QWxsID0gdHJ1ZTtcblxuICBASW5wdXQoKSBkYXRhU291cmNlOiBUcmFuc2Zlckl0ZW1bXSA9IFtdO1xuXG4gIEBJbnB1dCgpIGl0ZW1Vbml0OiBzdHJpbmcgfCB1bmRlZmluZWQgPSAnJztcbiAgQElucHV0KCkgaXRlbXNVbml0OiBzdHJpbmcgfCB1bmRlZmluZWQgPSAnJztcbiAgQElucHV0KCkgZmlsdGVyID0gJyc7XG4gIEBJbnB1dCgpIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgQElucHV0KCkgc2hvd1NlYXJjaD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNlYXJjaFBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICBASW5wdXQoKSBub3RGb3VuZENvbnRlbnQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZpbHRlck9wdGlvbj86IChpbnB1dFZhbHVlOiBzdHJpbmcsIGl0ZW06IFRyYW5zZmVySXRlbSkgPT4gYm9vbGVhbjtcblxuICBASW5wdXQoKSByZW5kZXJMaXN0OiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSByZW5kZXI6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGZvb3RlcjogVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcblxuICAvLyBldmVudHNcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGhhbmRsZVNlbGVjdEFsbDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgaGFuZGxlU2VsZWN0OiBFdmVudEVtaXR0ZXI8VHJhbnNmZXJJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGZpbHRlckNoYW5nZTogRXZlbnRFbWl0dGVyPHsgZGlyZWN0aW9uOiBUcmFuc2ZlckRpcmVjdGlvbjsgdmFsdWU6IHN0cmluZyB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBzdGF0ID0ge1xuICAgIGNoZWNrQWxsOiBmYWxzZSxcbiAgICBjaGVja0hhbGY6IGZhbHNlLFxuICAgIGNoZWNrQ291bnQ6IDAsXG4gICAgc2hvd25Db3VudDogMFxuICB9O1xuXG4gIG9uSXRlbVNlbGVjdCA9IChpdGVtOiBUcmFuc2Zlckl0ZW0pID0+IHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCBpdGVtLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGl0ZW0uY2hlY2tlZCA9ICFpdGVtLmNoZWNrZWQ7XG4gICAgdGhpcy51cGRhdGVDaGVja1N0YXR1cygpO1xuICAgIHRoaXMuaGFuZGxlU2VsZWN0LmVtaXQoaXRlbSk7XG4gIH07XG5cbiAgb25JdGVtU2VsZWN0QWxsID0gKHN0YXR1czogYm9vbGVhbikgPT4ge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKCFpdGVtLmRpc2FibGVkICYmICFpdGVtLmhpZGUpIHtcbiAgICAgICAgaXRlbS5jaGVja2VkID0gc3RhdHVzO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy51cGRhdGVDaGVja1N0YXR1cygpO1xuICAgIHRoaXMuaGFuZGxlU2VsZWN0QWxsLmVtaXQoc3RhdHVzKTtcbiAgfTtcblxuICBwcml2YXRlIHVwZGF0ZUNoZWNrU3RhdHVzKCk6IHZvaWQge1xuICAgIGNvbnN0IHZhbGlkQ291bnQgPSB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpLmxlbmd0aDtcbiAgICB0aGlzLnN0YXQuY2hlY2tDb3VudCA9IHRoaXMuZGF0YVNvdXJjZS5maWx0ZXIodyA9PiB3LmNoZWNrZWQgJiYgIXcuZGlzYWJsZWQpLmxlbmd0aDtcbiAgICB0aGlzLnN0YXQuc2hvd25Db3VudCA9IHRoaXMuZGF0YVNvdXJjZS5maWx0ZXIodyA9PiAhdy5oaWRlKS5sZW5ndGg7XG4gICAgdGhpcy5zdGF0LmNoZWNrQWxsID0gdmFsaWRDb3VudCA+IDAgJiYgdmFsaWRDb3VudCA9PT0gdGhpcy5zdGF0LmNoZWNrQ291bnQ7XG4gICAgdGhpcy5zdGF0LmNoZWNrSGFsZiA9IHRoaXMuc3RhdC5jaGVja0NvdW50ID4gMCAmJiAhdGhpcy5zdGF0LmNoZWNrQWxsO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gc2VhcmNoXG5cbiAgaGFuZGxlRmlsdGVyKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmZpbHRlciA9IHZhbHVlO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbS5oaWRlID0gdmFsdWUubGVuZ3RoID4gMCAmJiAhdGhpcy5tYXRjaEZpbHRlcih2YWx1ZSwgaXRlbSk7XG4gICAgfSk7XG4gICAgdGhpcy5zdGF0LnNob3duQ291bnQgPSB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyKHcgPT4gIXcuaGlkZSkubGVuZ3RoO1xuICAgIHRoaXMuZmlsdGVyQ2hhbmdlLmVtaXQoeyBkaXJlY3Rpb246IHRoaXMuZGlyZWN0aW9uLCB2YWx1ZSB9KTtcbiAgfVxuXG4gIGhhbmRsZUNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMuaGFuZGxlRmlsdGVyKCcnKTtcbiAgfVxuXG4gIHByaXZhdGUgbWF0Y2hGaWx0ZXIodGV4dDogc3RyaW5nLCBpdGVtOiBUcmFuc2Zlckl0ZW0pOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5maWx0ZXJPcHRpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlck9wdGlvbih0ZXh0LCBpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZW0udGl0bGUuaW5jbHVkZXModGV4dCk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG1hcmtGb3JDaGVjaygpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUNoZWNrU3RhdHVzKCk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cbiJdfQ==