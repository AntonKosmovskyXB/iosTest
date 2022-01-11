/**
 * @fileoverview added by tsickle
 * Generated from: src/addon/filter.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
/**
 * @record
 */
function NzThItemInterface() { }
if (false) {
    /** @type {?} */
    NzThItemInterface.prototype.text;
    /** @type {?} */
    NzThItemInterface.prototype.value;
    /** @type {?} */
    NzThItemInterface.prototype.checked;
}
export class NzTableFilterComponent {
    /**
     * @param {?} cdr
     * @param {?} i18n
     */
    constructor(cdr, i18n) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.contentTemplate = null;
        this.customFilter = false;
        this.extraTemplate = null;
        this.filterMultiple = true;
        this.listOfFilter = [];
        this.filterChange = new EventEmitter();
        this.destroy$ = new Subject();
        this.isChanged = false;
        this.isChecked = false;
        this.isVisible = false;
        this.listOfParsedFilter = [];
    }
    /**
     * @param {?} _
     * @param {?} item
     * @return {?}
     */
    trackByValue(_, item) {
        return item.value;
    }
    /**
     * @param {?} filter
     * @return {?}
     */
    check(filter) {
        this.isChanged = true;
        if (this.filterMultiple) {
            this.listOfParsedFilter = this.listOfParsedFilter.map((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                if (item === filter) {
                    return Object.assign(Object.assign({}, item), { checked: !filter.checked });
                }
                else {
                    return item;
                }
            }));
            filter.checked = !filter.checked;
        }
        else {
            this.listOfParsedFilter = this.listOfParsedFilter.map((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                return Object.assign(Object.assign({}, item), { checked: item === filter });
            }));
        }
        this.isChecked = this.getCheckedStatus(this.listOfParsedFilter);
    }
    /**
     * @return {?}
     */
    confirm() {
        this.isVisible = false;
        this.emitFilterData();
    }
    /**
     * @return {?}
     */
    reset() {
        this.isChanged = true;
        this.isVisible = false;
        this.listOfParsedFilter = this.parseListOfFilter(this.listOfFilter, true);
        this.isChecked = this.getCheckedStatus(this.listOfParsedFilter);
        this.emitFilterData();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onVisibleChange(value) {
        this.isVisible = value;
        if (!value) {
            this.emitFilterData();
        }
    }
    /**
     * @return {?}
     */
    emitFilterData() {
        if (this.isChanged) {
            /** @type {?} */
            const listOfChecked = this.listOfParsedFilter.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item.checked)).map((/**
             * @param {?} item
             * @return {?}
             */
            item => item.value));
            if (this.filterMultiple) {
                this.filterChange.emit(listOfChecked);
            }
            else {
                this.filterChange.emit(listOfChecked.length > 0 ? listOfChecked[0] : null);
            }
            this.isChanged = false;
        }
    }
    /**
     * @param {?} listOfFilter
     * @param {?=} reset
     * @return {?}
     */
    parseListOfFilter(listOfFilter, reset) {
        return listOfFilter.map((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            /** @type {?} */
            const checked = reset ? false : !!item.byDefault;
            return { text: item.text, value: item.value, checked };
        }));
    }
    /**
     * @param {?} listOfParsedFilter
     * @return {?}
     */
    getCheckedStatus(listOfParsedFilter) {
        return listOfParsedFilter.some((/**
         * @param {?} item
         * @return {?}
         */
        item => item.checked));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getLocaleData('Table');
            this.cdr.markForCheck();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { listOfFilter } = changes;
        if (listOfFilter && this.listOfFilter && this.listOfFilter.length) {
            this.listOfParsedFilter = this.parseListOfFilter(this.listOfFilter);
            this.isChecked = this.getCheckedStatus(this.listOfParsedFilter);
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
NzTableFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-table-filter',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <span class="ant-table-filter-column-title">
      <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
    </span>
    <ng-container *ngIf="!customFilter; else extraTemplate">
      <nz-filter-trigger
        [nzVisible]="isVisible"
        [nzActive]="isChecked"
        [nzDropdownMenu]="filterMenu"
        (nzVisibleChange)="onVisibleChange($event)"
      >
        <i nz-icon nzType="filter" nzTheme="fill"></i>
      </nz-filter-trigger>
      <nz-dropdown-menu #filterMenu="nzDropdownMenu">
        <div class="ant-table-filter-dropdown">
          <ul nz-menu>
            <li nz-menu-item [nzSelected]="f.checked" *ngFor="let f of listOfParsedFilter; trackBy: trackByValue" (click)="check(f)">
              <label nz-radio *ngIf="!filterMultiple" [ngModel]="f.checked" (ngModelChange)="check(f)"></label>
              <label nz-checkbox *ngIf="filterMultiple" [ngModel]="f.checked" (ngModelChange)="check(f)"></label>
              <span>{{ f.text }}</span>
            </li>
          </ul>
          <div class="ant-table-filter-dropdown-btns">
            <button nz-button nzType="link" nzSize="small" (click)="reset()" [disabled]="!isChecked">{{ locale.filterReset }}</button>
            <button nz-button nzType="primary" nzSize="small" (click)="confirm()">{{ locale.filterConfirm }}</button>
          </div>
        </div>
      </nz-dropdown-menu>
    </ng-container>
  `,
                host: {
                    '[class.ant-table-filter-column]': 'true'
                }
            }] }
];
/** @nocollapse */
NzTableFilterComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzI18nService }
];
NzTableFilterComponent.propDecorators = {
    contentTemplate: [{ type: Input }],
    customFilter: [{ type: Input }],
    extraTemplate: [{ type: Input }],
    filterMultiple: [{ type: Input }],
    listOfFilter: [{ type: Input }],
    filterChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NzTableFilterComponent.prototype.contentTemplate;
    /** @type {?} */
    NzTableFilterComponent.prototype.customFilter;
    /** @type {?} */
    NzTableFilterComponent.prototype.extraTemplate;
    /** @type {?} */
    NzTableFilterComponent.prototype.filterMultiple;
    /** @type {?} */
    NzTableFilterComponent.prototype.listOfFilter;
    /** @type {?} */
    NzTableFilterComponent.prototype.filterChange;
    /**
     * @type {?}
     * @private
     */
    NzTableFilterComponent.prototype.destroy$;
    /** @type {?} */
    NzTableFilterComponent.prototype.locale;
    /** @type {?} */
    NzTableFilterComponent.prototype.isChanged;
    /** @type {?} */
    NzTableFilterComponent.prototype.isChecked;
    /** @type {?} */
    NzTableFilterComponent.prototype.isVisible;
    /** @type {?} */
    NzTableFilterComponent.prototype.listOfParsedFilter;
    /**
     * @type {?}
     * @private
     */
    NzTableFilterComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTableFilterComponent.prototype.i18n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdGFibGUvIiwic291cmNlcyI6WyJzcmMvYWRkb24vZmlsdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBR04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxhQUFhLEVBQXdCLE1BQU0sb0JBQW9CLENBQUM7QUFDekUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFHM0MsZ0NBSUM7OztJQUhDLGlDQUFhOztJQUNiLGtDQUFpQjs7SUFDakIsb0NBQWlCOztBQTBDbkIsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFnRmpDLFlBQW9CLEdBQXNCLEVBQVUsSUFBbUI7UUFBbkQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFlO1FBL0U5RCxvQkFBZSxHQUFrQyxJQUFJLENBQUM7UUFDdEQsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsa0JBQWEsR0FBa0MsSUFBSSxDQUFDO1FBQ3BELG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLGlCQUFZLEdBQXNCLEVBQUUsQ0FBQztRQUMzQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUEyQixDQUFDO1FBQ3RFLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRWpDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLHVCQUFrQixHQUF3QixFQUFFLENBQUM7SUFvRTZCLENBQUM7Ozs7OztJ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QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQTFJRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkJUO2dCQUNELElBQUksRUFBRTtvQkFDSixpQ0FBaUMsRUFBRSxNQUFNO2lCQUMxQzthQUNGOzs7O1lBOURDLGlCQUFpQjtZQWFWLGFBQWE7Ozs4QkFtRG5CLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxLQUFLOzZCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxNQUFNOzs7O0lBTFAsaURBQStEOztJQUMvRCw4Q0FBOEI7O0lBQzlCLCtDQUE2RDs7SUFDN0QsZ0RBQStCOztJQUMvQiw4Q0FBOEM7O0lBQzlDLDhDQUE4RTs7Ozs7SUFDOUUsMENBQWlDOztJQUNqQyx3Q0FBOEI7O0lBQzlCLDJDQUFrQjs7SUFDbEIsMkNBQWtCOztJQUNsQiwyQ0FBa0I7O0lBQ2xCLG9EQUE2Qzs7Ozs7SUFvRWpDLHFDQUE4Qjs7Ozs7SUFBRSxzQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSwgTnpUYWJsZUkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnpUYWJsZUZpbHRlckxpc3QgfSBmcm9tICcuLi90YWJsZS50eXBlcyc7XG5cbmludGVyZmFjZSBOelRoSXRlbUludGVyZmFjZSB7XG4gIHRleHQ6IHN0cmluZztcbiAgdmFsdWU6IE56U2FmZUFueTtcbiAgY2hlY2tlZDogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotdGFibGUtZmlsdGVyJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzcGFuIGNsYXNzPVwiYW50LXRhYmxlLWZpbHRlci1jb2x1bW4tdGl0bGVcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50VGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxuICAgIDwvc3Bhbj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWN1c3RvbUZpbHRlcjsgZWxzZSBleHRyYVRlbXBsYXRlXCI+XG4gICAgICA8bnotZmlsdGVyLXRyaWdnZXJcbiAgICAgICAgW256VmlzaWJsZV09XCJpc1Zpc2libGVcIlxuICAgICAgICBbbnpBY3RpdmVdPVwiaXNDaGVja2VkXCJcbiAgICAgICAgW256RHJvcGRvd25NZW51XT1cImZpbHRlck1lbnVcIlxuICAgICAgICAobnpWaXNpYmxlQ2hhbmdlKT1cIm9uVmlzaWJsZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgID5cbiAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJmaWx0ZXJcIiBuelRoZW1lPVwiZmlsbFwiPjwvaT5cbiAgICAgIDwvbnotZmlsdGVyLXRyaWdnZXI+XG4gICAgICA8bnotZHJvcGRvd24tbWVudSAjZmlsdGVyTWVudT1cIm56RHJvcGRvd25NZW51XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtdGFibGUtZmlsdGVyLWRyb3Bkb3duXCI+XG4gICAgICAgICAgPHVsIG56LW1lbnU+XG4gICAgICAgICAgICA8bGkgbnotbWVudS1pdGVtIFtuelNlbGVjdGVkXT1cImYuY2hlY2tlZFwiICpuZ0Zvcj1cImxldCBmIG9mIGxpc3RPZlBhcnNlZEZpbHRlcjsgdHJhY2tCeTogdHJhY2tCeVZhbHVlXCIgKGNsaWNrKT1cImNoZWNrKGYpXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBuei1yYWRpbyAqbmdJZj1cIiFmaWx0ZXJNdWx0aXBsZVwiIFtuZ01vZGVsXT1cImYuY2hlY2tlZFwiIChuZ01vZGVsQ2hhbmdlKT1cImNoZWNrKGYpXCI+PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGxhYmVsIG56LWNoZWNrYm94ICpuZ0lmPVwiZmlsdGVyTXVsdGlwbGVcIiBbbmdNb2RlbF09XCJmLmNoZWNrZWRcIiAobmdNb2RlbENoYW5nZSk9XCJjaGVjayhmKVwiPjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxzcGFuPnt7IGYudGV4dCB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXRhYmxlLWZpbHRlci1kcm9wZG93bi1idG5zXCI+XG4gICAgICAgICAgICA8YnV0dG9uIG56LWJ1dHRvbiBuelR5cGU9XCJsaW5rXCIgbnpTaXplPVwic21hbGxcIiAoY2xpY2spPVwicmVzZXQoKVwiIFtkaXNhYmxlZF09XCIhaXNDaGVja2VkXCI+e3sgbG9jYWxlLmZpbHRlclJlc2V0IH19PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG56LWJ1dHRvbiBuelR5cGU9XCJwcmltYXJ5XCIgbnpTaXplPVwic21hbGxcIiAoY2xpY2spPVwiY29uZmlybSgpXCI+e3sgbG9jYWxlLmZpbHRlckNvbmZpcm0gfX08L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L256LWRyb3Bkb3duLW1lbnU+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC10YWJsZS1maWx0ZXItY29sdW1uXSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56VGFibGVGaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgQElucHV0KCkgY29udGVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGN1c3RvbUZpbHRlciA9IGZhbHNlO1xuICBASW5wdXQoKSBleHRyYVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGZpbHRlck11bHRpcGxlID0gdHJ1ZTtcbiAgQElucHV0KCkgbGlzdE9mRmlsdGVyOiBOelRhYmxlRmlsdGVyTGlzdCA9IFtdO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZmlsdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOelNhZmVBbnlbXSB8IE56U2FmZUFueT4oKTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIGxvY2FsZSE6IE56VGFibGVJMThuSW50ZXJmYWNlO1xuICBpc0NoYW5nZWQgPSBmYWxzZTtcbiAgaXNDaGVja2VkID0gZmFsc2U7XG4gIGlzVmlzaWJsZSA9IGZhbHNlO1xuICBsaXN0T2ZQYXJzZWRGaWx0ZXI6IE56VGhJdGVtSW50ZXJmYWNlW10gPSBbXTtcblxuICB0cmFja0J5VmFsdWUoXzogbnVtYmVyLCBpdGVtOiBOelRoSXRlbUludGVyZmFjZSk6IE56U2FmZUFueSB7XG4gICAgcmV0dXJuIGl0ZW0udmFsdWU7XG4gIH1cblxuICBjaGVjayhmaWx0ZXI6IE56VGhJdGVtSW50ZXJmYWNlKTogdm9pZCB7XG4gICAgdGhpcy5pc0NoYW5nZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLmZpbHRlck11bHRpcGxlKSB7XG4gICAgICB0aGlzLmxpc3RPZlBhcnNlZEZpbHRlciA9IHRoaXMubGlzdE9mUGFyc2VkRmlsdGVyLm1hcChpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0gPT09IGZpbHRlcikge1xuICAgICAgICAgIHJldHVybiB7IC4uLml0ZW0sIGNoZWNrZWQ6ICFmaWx0ZXIuY2hlY2tlZCB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGZpbHRlci5jaGVja2VkID0gIWZpbHRlci5jaGVja2VkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxpc3RPZlBhcnNlZEZpbHRlciA9IHRoaXMubGlzdE9mUGFyc2VkRmlsdGVyLm1hcChpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgY2hlY2tlZDogaXRlbSA9PT0gZmlsdGVyIH07XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5pc0NoZWNrZWQgPSB0aGlzLmdldENoZWNrZWRTdGF0dXModGhpcy5saXN0T2ZQYXJzZWRGaWx0ZXIpO1xuICB9XG5cbiAgY29uZmlybSgpOiB2b2lkIHtcbiAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuZW1pdEZpbHRlckRhdGEoKTtcbiAgfVxuXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMubGlzdE9mUGFyc2VkRmlsdGVyID0gdGhpcy5wYXJzZUxpc3RPZkZpbHRlcih0aGlzLmxpc3RPZkZpbHRlciwgdHJ1ZSk7XG4gICAgdGhpcy5pc0NoZWNrZWQgPSB0aGlzLmdldENoZWNrZWRTdGF0dXModGhpcy5saXN0T2ZQYXJzZWRGaWx0ZXIpO1xuICAgIHRoaXMuZW1pdEZpbHRlckRhdGEoKTtcbiAgfVxuXG4gIG9uVmlzaWJsZUNoYW5nZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaXNWaXNpYmxlID0gdmFsdWU7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhpcy5lbWl0RmlsdGVyRGF0YSgpO1xuICAgIH1cbiAgfVxuXG4gIGVtaXRGaWx0ZXJEYXRhKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzQ2hhbmdlZCkge1xuICAgICAgY29uc3QgbGlzdE9mQ2hlY2tlZCA9IHRoaXMubGlzdE9mUGFyc2VkRmlsdGVyLmZpbHRlcihpdGVtID0+IGl0ZW0uY2hlY2tlZCkubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZSk7XG4gICAgICBpZiAodGhpcy5maWx0ZXJNdWx0aXBsZSkge1xuICAgICAgICB0aGlzLmZpbHRlckNoYW5nZS5lbWl0KGxpc3RPZkNoZWNrZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5maWx0ZXJDaGFuZ2UuZW1pdChsaXN0T2ZDaGVja2VkLmxlbmd0aCA+IDAgPyBsaXN0T2ZDaGVja2VkWzBdIDogbnVsbCk7XG4gICAgICB9XG4gICAgICB0aGlzLmlzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHBhcnNlTGlzdE9mRmlsdGVyKGxpc3RPZkZpbHRlcjogTnpUYWJsZUZpbHRlckxpc3QsIHJlc2V0PzogYm9vbGVhbik6IE56VGhJdGVtSW50ZXJmYWNlW10ge1xuICAgIHJldHVybiBsaXN0T2ZGaWx0ZXIubWFwKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgY2hlY2tlZCA9IHJlc2V0ID8gZmFsc2UgOiAhIWl0ZW0uYnlEZWZhdWx0O1xuICAgICAgcmV0dXJuIHsgdGV4dDogaXRlbS50ZXh0LCB2YWx1ZTogaXRlbS52YWx1ZSwgY2hlY2tlZCB9O1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0Q2hlY2tlZFN0YXR1cyhsaXN0T2ZQYXJzZWRGaWx0ZXI6IE56VGhJdGVtSW50ZXJmYWNlW10pOiBib29sZWFuIHtcbiAgICByZXR1cm4gbGlzdE9mUGFyc2VkRmlsdGVyLnNvbWUoaXRlbSA9PiBpdGVtLmNoZWNrZWQpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ1RhYmxlJyk7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IGxpc3RPZkZpbHRlciB9ID0gY2hhbmdlcztcbiAgICBpZiAobGlzdE9mRmlsdGVyICYmIHRoaXMubGlzdE9mRmlsdGVyICYmIHRoaXMubGlzdE9mRmlsdGVyLmxlbmd0aCkge1xuICAgICAgdGhpcy5saXN0T2ZQYXJzZWRGaWx0ZXIgPSB0aGlzLnBhcnNlTGlzdE9mRmlsdGVyKHRoaXMubGlzdE9mRmlsdGVyKTtcbiAgICAgIHRoaXMuaXNDaGVja2VkID0gdGhpcy5nZXRDaGVja2VkU3RhdHVzKHRoaXMubGlzdE9mUGFyc2VkRmlsdGVyKTtcbiAgICB9XG4gIH1cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=