/**
 * @fileoverview added by tsickle
 * Generated from: transfer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { InputBoolean, toArray } from 'ng-zorro-antd/core/util';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzTransferListComponent } from './transfer-list.component';
export class NzTransferComponent {
    // #endregion
    /**
     * @param {?} cdr
     * @param {?} i18n
     */
    constructor(cdr, i18n) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.unsubscribe$ = new Subject();
        this.leftFilter = '';
        this.rightFilter = '';
        // #region fields
        this.nzDisabled = false;
        this.nzDataSource = [];
        this.nzTitles = ['', ''];
        this.nzOperations = [];
        this.nzListStyle = {};
        this.nzShowSelectAll = true;
        this.nzCanMove = (/**
         * @param {?} arg
         * @return {?}
         */
        (arg) => of(arg.list));
        this.nzRenderList = null;
        this.nzRender = null;
        this.nzFooter = null;
        this.nzShowSearch = false;
        this.nzTargetKeys = [];
        this.nzSelectedKeys = [];
        // events
        this.nzChange = new EventEmitter();
        this.nzSearchChange = new EventEmitter();
        this.nzSelectChange = new EventEmitter();
        // #endregion
        // #region process data
        // left
        this.leftDataSource = [];
        // right
        this.rightDataSource = [];
        this.handleLeftSelectAll = (/**
         * @param {?} checked
         * @return {?}
         */
        (checked) => this.handleSelect('left', checked));
        this.handleRightSelectAll = (/**
         * @param {?} checked
         * @return {?}
         */
        (checked) => this.handleSelect('right', checked));
        this.handleLeftSelect = (/**
         * @param {?} item
         * @return {?}
         */
        (item) => this.handleSelect('left', !!item.checked, item));
        this.handleRightSelect = (/**
         * @param {?} item
         * @return {?}
         */
        (item) => this.handleSelect('right', !!item.checked, item));
        // #endregion
        // #region operation
        this.leftActive = false;
        this.rightActive = false;
        this.moveToLeft = (/**
         * @return {?}
         */
        () => this.moveTo('left'));
        this.moveToRight = (/**
         * @return {?}
         */
        () => this.moveTo('right'));
    }
    /**
     * @private
     * @return {?}
     */
    splitDataSource() {
        this.leftDataSource = [];
        this.rightDataSource = [];
        this.nzDataSource.forEach((/**
         * @param {?} record
         * @return {?}
         */
        record => {
            if (record.direction === 'right') {
                record.direction = 'right';
                this.rightDataSource.push(record);
            }
            else {
                record.direction = 'left';
                this.leftDataSource.push(record);
            }
        }));
    }
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    getCheckedData(direction) {
        return this[direction === 'left' ? 'leftDataSource' : 'rightDataSource'].filter((/**
         * @param {?} w
         * @return {?}
         */
        w => w.checked));
    }
    /**
     * @param {?} direction
     * @param {?} checked
     * @param {?=} item
     * @return {?}
     */
    handleSelect(direction, checked, item) {
        /** @type {?} */
        const list = this.getCheckedData(direction);
        this.updateOperationStatus(direction, list.length);
        this.nzSelectChange.emit({ direction, checked, list, item });
    }
    /**
     * @param {?} ret
     * @return {?}
     */
    handleFilterChange(ret) {
        this.nzSearchChange.emit(ret);
    }
    /**
     * @private
     * @param {?} direction
     * @param {?=} count
     * @return {?}
     */
    updateOperationStatus(direction, count) {
        this[direction === 'right' ? 'leftActive' : 'rightActive'] =
            (typeof count === 'undefined' ? this.getCheckedData(direction).filter((/**
             * @param {?} w
             * @return {?}
             */
            w => !w.disabled)).length : count) > 0;
    }
    /**
     * @param {?} direction
     * @return {?}
     */
    moveTo(direction) {
        /** @type {?} */
        const oppositeDirection = direction === 'left' ? 'right' : 'left';
        this.updateOperationStatus(oppositeDirection, 0);
        /** @type {?} */
        const datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
        /** @type {?} */
        const moveList = datasource.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.checked === true && !item.disabled));
        this.nzCanMove({ direction, list: moveList }).subscribe((/**
         * @param {?} newMoveList
         * @return {?}
         */
        newMoveList => this.truthMoveTo(direction, newMoveList.filter((/**
         * @param {?} i
         * @return {?}
         */
        i => !!i)))), (/**
         * @return {?}
         */
        () => moveList.forEach((/**
         * @param {?} i
         * @return {?}
         */
        i => (i.checked = false)))));
    }
    /**
     * @private
     * @param {?} direction
     * @param {?} list
     * @return {?}
     */
    truthMoveTo(direction, list) {
        /** @type {?} */
        const oppositeDirection = direction === 'left' ? 'right' : 'left';
        /** @type {?} */
        const datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
        /** @type {?} */
        const targetDatasource = direction === 'left' ? this.leftDataSource : this.rightDataSource;
        for (const item of list) {
            item.checked = false;
            item.hide = false;
            item.direction = direction;
            datasource.splice(datasource.indexOf(item), 1);
        }
        targetDatasource.splice(0, 0, ...list);
        this.updateOperationStatus(oppositeDirection);
        this.nzChange.emit({
            from: oppositeDirection,
            to: direction,
            list
        });
        this.markForCheckAllList();
    }
    /**
     * @private
     * @return {?}
     */
    markForCheckAllList() {
        if (!this.lists) {
            return;
        }
        this.lists.forEach((/**
         * @param {?} i
         * @return {?}
         */
        i => i.markForCheck()));
    }
    /**
     * @private
     * @return {?}
     */
    handleNzTargetKeys() {
        /** @type {?} */
        const keys = toArray(this.nzTargetKeys);
        /** @type {?} */
        const hasOwnKey = (/**
         * @param {?} e
         * @return {?}
         */
        (e) => e.hasOwnProperty('key'));
        this.leftDataSource.forEach((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            if (hasOwnKey(e) && keys.indexOf(e.key) !== -1 && !e.disabled) {
                e.checked = true;
            }
        }));
        this.moveToRight();
    }
    /**
     * @private
     * @return {?}
     */
    handleNzSelectedKeys() {
        /** @type {?} */
        const keys = toArray(this.nzSelectedKeys);
        this.nzDataSource.forEach((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            if (keys.indexOf(e.key) !== -1) {
                e.checked = true;
            }
        }));
        /** @type {?} */
        const term = (/**
         * @param {?} ld
         * @return {?}
         */
        (ld) => ld.disabled === false && ld.checked === true);
        this.rightActive = this.leftDataSource.some(term);
        this.leftActive = this.rightDataSource.some(term);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getLocaleData('Transfer');
            this.markForCheckAllList();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzDataSource) {
            this.splitDataSource();
            this.updateOperationStatus('left');
            this.updateOperationStatus('right');
            this.cdr.detectChanges();
            this.markForCheckAllList();
        }
        if (changes.nzTargetKeys) {
            this.handleNzTargetKeys();
        }
        if (changes.nzSelectedKeys) {
            this.handleNzSelectedKeys();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
NzTransferComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-transfer',
                exportAs: 'nzTransfer',
                preserveWhitespaces: false,
                template: `
    <nz-transfer-list
      class="ant-transfer-list"
      [ngStyle]="nzListStyle"
      data-direction="left"
      direction="left"
      [titleText]="nzTitles[0]"
      [showSelectAll]="nzShowSelectAll"
      [dataSource]="leftDataSource"
      [filter]="leftFilter"
      [filterOption]="nzFilterOption"
      (filterChange)="handleFilterChange($event)"
      [renderList]="nzRenderList && nzRenderList[0]"
      [render]="nzRender"
      [disabled]="nzDisabled"
      [showSearch]="nzShowSearch"
      [searchPlaceholder]="nzSearchPlaceholder || locale?.searchPlaceholder"
      [notFoundContent]="nzNotFoundContent"
      [itemUnit]="nzItemUnit || locale?.itemUnit"
      [itemsUnit]="nzItemsUnit || locale?.itemsUnit"
      [footer]="nzFooter"
      (handleSelect)="handleLeftSelect($event)"
      (handleSelectAll)="handleLeftSelectAll($event)"
    >
    </nz-transfer-list>
    <div class="ant-transfer-operation">
      <button nz-button (click)="moveToLeft()" [disabled]="nzDisabled || !leftActive" [nzType]="'primary'" [nzSize]="'small'">
        <i nz-icon nzType="left"></i><span *ngIf="nzOperations[1]">{{ nzOperations[1] }}</span>
      </button>
      <button nz-button (click)="moveToRight()" [disabled]="nzDisabled || !rightActive" [nzType]="'primary'" [nzSize]="'small'">
        <i nz-icon nzType="right"></i><span *ngIf="nzOperations[0]">{{ nzOperations[0] }}</span>
      </button>
    </div>
    <nz-transfer-list
      class="ant-transfer-list"
      [ngStyle]="nzListStyle"
      data-direction="right"
      direction="right"
      [titleText]="nzTitles[1]"
      [showSelectAll]="nzShowSelectAll"
      [dataSource]="rightDataSource"
      [filter]="rightFilter"
      [filterOption]="nzFilterOption"
      (filterChange)="handleFilterChange($event)"
      [renderList]="nzRenderList && nzRenderList[1]"
      [render]="nzRender"
      [disabled]="nzDisabled"
      [showSearch]="nzShowSearch"
      [searchPlaceholder]="nzSearchPlaceholder || locale?.searchPlaceholder"
      [notFoundContent]="nzNotFoundContent"
      [itemUnit]="nzItemUnit || locale?.itemUnit"
      [itemsUnit]="nzItemsUnit || locale?.itemsUnit"
      [footer]="nzFooter"
      (handleSelect)="handleRightSelect($event)"
      (handleSelectAll)="handleRightSelectAll($event)"
    >
    </nz-transfer-list>
  `,
                host: {
                    '[class.ant-transfer]': `true`,
                    '[class.ant-transfer-disabled]': `nzDisabled`,
                    '[class.ant-transfer-customize-list]': `nzRenderList`
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NzTransferComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzI18nService }
];
NzTransferComponent.propDecorators = {
    lists: [{ type: ViewChildren, args: [NzTransferListComponent,] }],
    nzDisabled: [{ type: Input }],
    nzDataSource: [{ type: Input }],
    nzTitles: [{ type: Input }],
    nzOperations: [{ type: Input }],
    nzListStyle: [{ type: Input }],
    nzShowSelectAll: [{ type: Input }],
    nzItemUnit: [{ type: Input }],
    nzItemsUnit: [{ type: Input }],
    nzCanMove: [{ type: Input }],
    nzRenderList: [{ type: Input }],
    nzRender: [{ type: Input }],
    nzFooter: [{ type: Input }],
    nzShowSearch: [{ type: Input }],
    nzFilterOption: [{ type: Input }],
    nzSearchPlaceholder: [{ type: Input }],
    nzNotFoundContent: [{ type: Input }],
    nzTargetKeys: [{ type: Input }],
    nzSelectedKeys: [{ type: Input }],
    nzChange: [{ type: Output }],
    nzSearchChange: [{ type: Output }],
    nzSelectChange: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTransferComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTransferComponent.prototype, "nzShowSelectAll", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTransferComponent.prototype, "nzShowSearch", void 0);
if (false) {
    /** @type {?} */
    NzTransferComponent.ngAcceptInputType_nzDisabled;
    /** @type {?} */
    NzTransferComponent.ngAcceptInputType_nzShowSelectAll;
    /** @type {?} */
    NzTransferComponent.ngAcceptInputType_nzShowSearch;
    /**
     * @type {?}
     * @private
     */
    NzTransferComponent.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    NzTransferComponent.prototype.lists;
    /** @type {?} */
    NzTransferComponent.prototype.locale;
    /** @type {?} */
    NzTransferComponent.prototype.leftFilter;
    /** @type {?} */
    NzTransferComponent.prototype.rightFilter;
    /** @type {?} */
    NzTransferComponent.prototype.nzDisabled;
    /** @type {?} */
    NzTransferComponent.prototype.nzDataSource;
    /** @type {?} */
    NzTransferComponent.prototype.nzTitles;
    /** @type {?} */
    NzTransferComponent.prototype.nzOperations;
    /** @type {?} */
    NzTransferComponent.prototype.nzListStyle;
    /** @type {?} */
    NzTransferComponent.prototype.nzShowSelectAll;
    /** @type {?} */
    NzTransferComponent.prototype.nzItemUnit;
    /** @type {?} */
    NzTransferComponent.prototype.nzItemsUnit;
    /** @type {?} */
    NzTransferComponent.prototype.nzCanMove;
    /** @type {?} */
    NzTransferComponent.prototype.nzRenderList;
    /** @type {?} */
    NzTransferComponent.prototype.nzRender;
    /** @type {?} */
    NzTransferComponent.prototype.nzFooter;
    /** @type {?} */
    NzTransferComponent.prototype.nzShowSearch;
    /** @type {?} */
    NzTransferComponent.prototype.nzFilterOption;
    /** @type {?} */
    NzTransferComponent.prototype.nzSearchPlaceholder;
    /** @type {?} */
    NzTransferComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzTransferComponent.prototype.nzTargetKeys;
    /** @type {?} */
    NzTransferComponent.prototype.nzSelectedKeys;
    /** @type {?} */
    NzTransferComponent.prototype.nzChange;
    /** @type {?} */
    NzTransferComponent.prototype.nzSearchChange;
    /** @type {?} */
    NzTransferComponent.prototype.nzSelectChange;
    /** @type {?} */
    NzTransferComponent.prototype.leftDataSource;
    /** @type {?} */
    NzTransferComponent.prototype.rightDataSource;
    /** @type {?} */
    NzTransferComponent.prototype.handleLeftSelectAll;
    /** @type {?} */
    NzTransferComponent.prototype.handleRightSelectAll;
    /** @type {?} */
    NzTransferComponent.prototype.handleLeftSelect;
    /** @type {?} */
    NzTransferComponent.prototype.handleRightSelect;
    /** @type {?} */
    NzTransferComponent.prototype.leftActive;
    /** @type {?} */
    NzTransferComponent.prototype.rightActive;
    /** @type {?} */
    NzTransferComponent.prototype.moveToLeft;
    /** @type {?} */
    NzTransferComponent.prototype.moveToRight;
    /**
     * @type {?}
     * @private
     */
    NzTransferComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTransferComponent.prototype.i18n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90cmFuc2Zlci8iLCJzb3VyY2VzIjpbInRyYW5zZmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUNOLFNBQVMsRUFHVCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGFBQWEsRUFBMkIsTUFBTSxvQkFBb0IsQ0FBQztBQUU1RSxPQUFPLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUF3RXBFLE1BQU0sT0FBTyxtQkFBbUI7Ozs7OztJQXVJOUIsWUFBb0IsR0FBc0IsRUFBVSxJQUFtQjtRQUFuRCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQWU7UUFsSS9ELGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUszQyxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsRUFBRSxDQUFDOztRQUlRLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkMsaUJBQVksR0FBbUIsRUFBRSxDQUFDO1FBQ2xDLGFBQVEsR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM5QixpQkFBWSxHQUFhLEVBQUUsQ0FBQztRQUM1QixnQkFBVyxHQUFxQixFQUFFLENBQUM7UUFDbkIsb0JBQWUsR0FBRyxJQUFJ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bkI7SUFBZixZQUFZLEVBQUU7OzREQUF3QjtBQU92QjtJQUFmLFlBQVksRUFBRTs7eURBQXNCOzs7SUExQjlDLGlEQUFrRDs7SUFDbEQsc0RBQXVEOztJQUN2RCxtREFBb0Q7Ozs7O0lBRXBELDJDQUEyQzs7Ozs7SUFDM0Msb0NBQ21EOztJQUNuRCxxQ0FBaUM7O0lBRWpDLHlDQUFnQjs7SUFDaEIsMENBQWlCOztJQUlqQix5Q0FBNEM7O0lBQzVDLDJDQUEyQzs7SUFDM0MsdUNBQXVDOztJQUN2QywyQ0FBcUM7O0lBQ3JDLDBDQUE0Qzs7SUFDNUMsOENBQWdEOztJQUNoRCx5Q0FBNkI7O0lBQzdCLDBDQUE4Qjs7SUFDOUIsd0NBQWtIOztJQUNsSCwyQ0FBMEU7O0lBQzFFLHVDQUF3RDs7SUFDeEQsdUNBQXdEOztJQUN4RCwyQ0FBOEM7O0lBQzlDLDZDQUE4RTs7SUFDOUUsa0RBQXNDOztJQUN0QyxnREFBb0M7O0lBQ3BDLDJDQUFxQzs7SUFDckMsNkNBQXVDOztJQUd2Qyx1Q0FBaUU7O0lBQ2pFLDZDQUE2RTs7SUFDN0UsNkNBQTZFOztJQU83RSw2Q0FBb0M7O0lBR3BDLDhDQUFxQzs7SUFvQnJDLGtEQUErRTs7SUFDL0UsbURBQWlGOztJQUVqRiwrQ0FBMkY7O0lBQzNGLGdEQUE2Rjs7SUFnQjdGLHlDQUFtQjs7SUFDbkIsMENBQW9COztJQU9wQix5Q0FBdUM7O0lBQ3ZDLDBDQUF5Qzs7Ozs7SUF1QzdCLGtDQUE4Qjs7Ozs7SUFBRSxtQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGRyZW4sXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOZ1N0eWxlSW50ZXJmYWNlLCBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCB0b0FycmF5IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSwgTnpUcmFuc2ZlckkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBUcmFuc2ZlckNhbk1vdmUsIFRyYW5zZmVyQ2hhbmdlLCBUcmFuc2ZlckRpcmVjdGlvbiwgVHJhbnNmZXJJdGVtLCBUcmFuc2ZlclNlYXJjaENoYW5nZSwgVHJhbnNmZXJTZWxlY3RDaGFuZ2UgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBOelRyYW5zZmVyTGlzdENvbXBvbmVudCB9IGZyb20gJy4vdHJhbnNmZXItbGlzdC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei10cmFuc2ZlcicsXG4gIGV4cG9ydEFzOiAnbnpUcmFuc2ZlcicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuei10cmFuc2Zlci1saXN0XG4gICAgICBjbGFzcz1cImFudC10cmFuc2Zlci1saXN0XCJcbiAgICAgIFtuZ1N0eWxlXT1cIm56TGlzdFN0eWxlXCJcbiAgICAgIGRhdGEtZGlyZWN0aW9uPVwibGVmdFwiXG4gICAgICBkaXJlY3Rpb249XCJsZWZ0XCJcbiAgICAgIFt0aXRsZVRleHRdPVwibnpUaXRsZXNbMF1cIlxuICAgICAgW3Nob3dTZWxlY3RBbGxdPVwibnpTaG93U2VsZWN0QWxsXCJcbiAgICAgIFtkYXRhU291cmNlXT1cImxlZnREYXRhU291cmNlXCJcbiAgICAgIFtmaWx0ZXJdPVwibGVmdEZpbHRlclwiXG4gICAgICBbZmlsdGVyT3B0aW9uXT1cIm56RmlsdGVyT3B0aW9uXCJcbiAgICAgIChmaWx0ZXJDaGFuZ2UpPVwiaGFuZGxlRmlsdGVyQ2hhbmdlKCRldmVudClcIlxuICAgICAgW3JlbmRlckxpc3RdPVwibnpSZW5kZXJMaXN0ICYmIG56UmVuZGVyTGlzdFswXVwiXG4gICAgICBbcmVuZGVyXT1cIm56UmVuZGVyXCJcbiAgICAgIFtkaXNhYmxlZF09XCJuekRpc2FibGVkXCJcbiAgICAgIFtzaG93U2VhcmNoXT1cIm56U2hvd1NlYXJjaFwiXG4gICAgICBbc2VhcmNoUGxhY2Vob2xkZXJdPVwibnpTZWFyY2hQbGFjZWhvbGRlciB8fCBsb2NhbGU/LnNlYXJjaFBsYWNlaG9sZGVyXCJcbiAgICAgIFtub3RGb3VuZENvbnRlbnRdPVwibnpOb3RGb3VuZENvbnRlbnRcIlxuICAgICAgW2l0ZW1Vbml0XT1cIm56SXRlbVVuaXQgfHwgbG9jYWxlPy5pdGVtVW5pdFwiXG4gICAgICBbaXRlbXNVbml0XT1cIm56SXRlbXNVbml0IHx8IGxvY2FsZT8uaXRlbXNVbml0XCJcbiAgICAgIFtmb290ZXJdPVwibnpGb290ZXJcIlxuICAgICAgKGhhbmRsZVNlbGVjdCk9XCJoYW5kbGVMZWZ0U2VsZWN0KCRldmVudClcIlxuICAgICAgKGhhbmRsZVNlbGVjdEFsbCk9XCJoYW5kbGVMZWZ0U2VsZWN0QWxsKCRldmVudClcIlxuICAgID5cbiAgICA8L256LXRyYW5zZmVyLWxpc3Q+XG4gICAgPGRpdiBjbGFzcz1cImFudC10cmFuc2Zlci1vcGVyYXRpb25cIj5cbiAgICAgIDxidXR0b24gbnotYnV0dG9uIChjbGljayk9XCJtb3ZlVG9MZWZ0KClcIiBbZGlzYWJsZWRdPVwibnpEaXNhYmxlZCB8fCAhbGVmdEFjdGl2ZVwiIFtuelR5cGVdPVwiJ3ByaW1hcnknXCIgW256U2l6ZV09XCInc21hbGwnXCI+XG4gICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwibGVmdFwiPjwvaT48c3BhbiAqbmdJZj1cIm56T3BlcmF0aW9uc1sxXVwiPnt7IG56T3BlcmF0aW9uc1sxXSB9fTwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBuei1idXR0b24gKGNsaWNrKT1cIm1vdmVUb1JpZ2h0KClcIiBbZGlzYWJsZWRdPVwibnpEaXNhYmxlZCB8fCAhcmlnaHRBY3RpdmVcIiBbbnpUeXBlXT1cIidwcmltYXJ5J1wiIFtuelNpemVdPVwiJ3NtYWxsJ1wiPlxuICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cInJpZ2h0XCI+PC9pPjxzcGFuICpuZ0lmPVwibnpPcGVyYXRpb25zWzBdXCI+e3sgbnpPcGVyYXRpb25zWzBdIH19PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPG56LXRyYW5zZmVyLWxpc3RcbiAgICAgIGNsYXNzPVwiYW50LXRyYW5zZmVyLWxpc3RcIlxuICAgICAgW25nU3R5bGVdPVwibnpMaXN0U3R5bGVcIlxuICAgICAgZGF0YS1kaXJlY3Rpb249XCJyaWdodFwiXG4gICAgICBkaXJlY3Rpb249XCJyaWdodFwiXG4gICAgICBbdGl0bGVUZXh0XT1cIm56VGl0bGVzWzFdXCJcbiAgICAgIFtzaG93U2VsZWN0QWxsXT1cIm56U2hvd1NlbGVjdEFsbFwiXG4gICAgICBbZGF0YVNvdXJjZV09XCJyaWdodERhdGFTb3VyY2VcIlxuICAgICAgW2ZpbHRlcl09XCJyaWdodEZpbHRlclwiXG4gICAgICBbZmlsdGVyT3B0aW9uXT1cIm56RmlsdGVyT3B0aW9uXCJcbiAgICAgIChmaWx0ZXJDaGFuZ2UpPVwiaGFuZGxlRmlsdGVyQ2hhbmdlKCRldmVudClcIlxuICAgICAgW3JlbmRlckxpc3RdPVwibnpSZW5kZXJMaXN0ICYmIG56UmVuZGVyTGlzdFsxXVwiXG4gICAgICBbcmVuZGVyXT1cIm56UmVuZGVyXCJcbiAgICAgIFtkaXNhYmxlZF09XCJuekRpc2FibGVkXCJcbiAgICAgIFtzaG93U2VhcmNoXT1cIm56U2hvd1NlYXJjaFwiXG4gICAgICBbc2VhcmNoUGxhY2Vob2xkZXJdPVwibnpTZWFyY2hQbGFjZWhvbGRlciB8fCBsb2NhbGU/LnNlYXJjaFBsYWNlaG9sZGVyXCJcbiAgICAgIFtub3RGb3VuZENvbnRlbnRdPVwibnpOb3RGb3VuZENvbnRlbnRcIlxuICAgICAgW2l0ZW1Vbml0XT1cIm56SXRlbVVuaXQgfHwgbG9jYWxlPy5pdGVtVW5pdFwiXG4gICAgICBbaXRlbXNVbml0XT1cIm56SXRlbXNVbml0IHx8IGxvY2FsZT8uaXRlbXNVbml0XCJcbiAgICAgIFtmb290ZXJdPVwibnpGb290ZXJcIlxuICAgICAgKGhhbmRsZVNlbGVjdCk9XCJoYW5kbGVSaWdodFNlbGVjdCgkZXZlbnQpXCJcbiAgICAgIChoYW5kbGVTZWxlY3RBbGwpPVwiaGFuZGxlUmlnaHRTZWxlY3RBbGwoJGV2ZW50KVwiXG4gICAgPlxuICAgIDwvbnotdHJhbnNmZXItbGlzdD5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXRyYW5zZmVyXSc6IGB0cnVlYCxcbiAgICAnW2NsYXNzLmFudC10cmFuc2Zlci1kaXNhYmxlZF0nOiBgbnpEaXNhYmxlZGAsXG4gICAgJ1tjbGFzcy5hbnQtdHJhbnNmZXItY3VzdG9taXplLWxpc3RdJzogYG56UmVuZGVyTGlzdGBcbiAgfSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTnpUcmFuc2ZlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpEaXNhYmxlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTaG93U2VsZWN0QWxsOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNob3dTZWFyY2g6IEJvb2xlYW5JbnB1dDtcblxuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIEBWaWV3Q2hpbGRyZW4oTnpUcmFuc2Zlckxpc3RDb21wb25lbnQpXG4gIHByaXZhdGUgbGlzdHMhOiBRdWVyeUxpc3Q8TnpUcmFuc2Zlckxpc3RDb21wb25lbnQ+O1xuICBsb2NhbGUhOiBOelRyYW5zZmVySTE4bkludGVyZmFjZTtcblxuICBsZWZ0RmlsdGVyID0gJyc7XG4gIHJpZ2h0RmlsdGVyID0gJyc7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBuekRhdGFTb3VyY2U6IFRyYW5zZmVySXRlbVtdID0gW107XG4gIEBJbnB1dCgpIG56VGl0bGVzOiBzdHJpbmdbXSA9IFsnJywgJyddO1xuICBASW5wdXQoKSBuek9wZXJhdGlvbnM6IHN0cmluZ1tdID0gW107XG4gIEBJbnB1dCgpIG56TGlzdFN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlID0ge307XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dTZWxlY3RBbGwgPSB0cnVlO1xuICBASW5wdXQoKSBuekl0ZW1Vbml0Pzogc3RyaW5nO1xuICBASW5wdXQoKSBuekl0ZW1zVW5pdD86IHN0cmluZztcbiAgQElucHV0KCkgbnpDYW5Nb3ZlOiAoYXJnOiBUcmFuc2ZlckNhbk1vdmUpID0+IE9ic2VydmFibGU8VHJhbnNmZXJJdGVtW10+ID0gKGFyZzogVHJhbnNmZXJDYW5Nb3ZlKSA9PiBvZihhcmcubGlzdCk7XG4gIEBJbnB1dCgpIG56UmVuZGVyTGlzdDogQXJyYXk8VGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGw+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56UmVuZGVyOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56Rm9vdGVyOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dTZWFyY2ggPSBmYWxzZTtcbiAgQElucHV0KCkgbnpGaWx0ZXJPcHRpb24/OiAoaW5wdXRWYWx1ZTogc3RyaW5nLCBpdGVtOiBUcmFuc2Zlckl0ZW0pID0+IGJvb2xlYW47XG4gIEBJbnB1dCgpIG56U2VhcmNoUGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56Tm90Rm91bmRDb250ZW50Pzogc3RyaW5nO1xuICBASW5wdXQoKSBuelRhcmdldEtleXM6IHN0cmluZ1tdID0gW107XG4gIEBJbnB1dCgpIG56U2VsZWN0ZWRLZXlzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIC8vIGV2ZW50c1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFRyYW5zZmVyQ2hhbmdlPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWFyY2hDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFRyYW5zZmVyU2VhcmNoQ2hhbmdlPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWxlY3RDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFRyYW5zZmVyU2VsZWN0Q2hhbmdlPigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHByb2Nlc3MgZGF0YVxuXG4gIC8vIGxlZnRcbiAgbGVmdERhdGFTb3VyY2U6IFRyYW5zZmVySXRlbVtdID0gW107XG5cbiAgLy8gcmlnaHRcbiAgcmlnaHREYXRhU291cmNlOiBUcmFuc2Zlckl0ZW1bXSA9IFtdO1xuXG4gIHByaXZhdGUgc3BsaXREYXRhU291cmNlKCk6IHZvaWQge1xuICAgIHRoaXMubGVmdERhdGFTb3VyY2UgPSBbXTtcbiAgICB0aGlzLnJpZ2h0RGF0YVNvdXJjZSA9IFtdO1xuICAgIHRoaXMubnpEYXRhU291cmNlLmZvckVhY2gocmVjb3JkID0+IHtcbiAgICAgIGlmIChyZWNvcmQuZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgIHJlY29yZC5kaXJlY3Rpb24gPSAncmlnaHQnO1xuICAgICAgICB0aGlzLnJpZ2h0RGF0YVNvdXJjZS5wdXNoKHJlY29yZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWNvcmQuZGlyZWN0aW9uID0gJ2xlZnQnO1xuICAgICAgICB0aGlzLmxlZnREYXRhU291cmNlLnB1c2gocmVjb3JkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2hlY2tlZERhdGEoZGlyZWN0aW9uOiBUcmFuc2ZlckRpcmVjdGlvbik6IFRyYW5zZmVySXRlbVtdIHtcbiAgICByZXR1cm4gdGhpc1tkaXJlY3Rpb24gPT09ICdsZWZ0JyA/ICdsZWZ0RGF0YVNvdXJjZScgOiAncmlnaHREYXRhU291cmNlJ10uZmlsdGVyKHcgPT4gdy5jaGVja2VkKTtcbiAgfVxuXG4gIGhhbmRsZUxlZnRTZWxlY3RBbGwgPSAoY2hlY2tlZDogYm9vbGVhbikgPT4gdGhpcy5oYW5kbGVTZWxlY3QoJ2xlZnQnLCBjaGVja2VkKTtcbiAgaGFuZGxlUmlnaHRTZWxlY3RBbGwgPSAoY2hlY2tlZDogYm9vbGVhbikgPT4gdGhpcy5oYW5kbGVTZWxlY3QoJ3JpZ2h0JywgY2hlY2tlZCk7XG5cbiAgaGFuZGxlTGVmdFNlbGVjdCA9IChpdGVtOiBUcmFuc2Zlckl0ZW0pID0+IHRoaXMuaGFuZGxlU2VsZWN0KCdsZWZ0JywgISFpdGVtLmNoZWNrZWQsIGl0ZW0pO1xuICBoYW5kbGVSaWdodFNlbGVjdCA9IChpdGVtOiBUcmFuc2Zlckl0ZW0pID0+IHRoaXMuaGFuZGxlU2VsZWN0KCdyaWdodCcsICEhaXRlbS5jaGVja2VkLCBpdGVtKTtcblxuICBoYW5kbGVTZWxlY3QoZGlyZWN0aW9uOiBUcmFuc2ZlckRpcmVjdGlvbiwgY2hlY2tlZDogYm9vbGVhbiwgaXRlbT86IFRyYW5zZmVySXRlbSk6IHZvaWQge1xuICAgIGNvbnN0IGxpc3QgPSB0aGlzLmdldENoZWNrZWREYXRhKGRpcmVjdGlvbik7XG4gICAgdGhpcy51cGRhdGVPcGVyYXRpb25TdGF0dXMoZGlyZWN0aW9uLCBsaXN0Lmxlbmd0aCk7XG4gICAgdGhpcy5uelNlbGVjdENoYW5nZS5lbWl0KHsgZGlyZWN0aW9uLCBjaGVja2VkLCBsaXN0LCBpdGVtIH0pO1xuICB9XG5cbiAgaGFuZGxlRmlsdGVyQ2hhbmdlKHJldDogeyBkaXJlY3Rpb246IFRyYW5zZmVyRGlyZWN0aW9uOyB2YWx1ZTogc3RyaW5nIH0pOiB2b2lkIHtcbiAgICB0aGlzLm56U2VhcmNoQ2hhbmdlLmVtaXQocmV0KTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIG9wZXJhdGlvblxuXG4gIGxlZnRBY3RpdmUgPSBmYWxzZTtcbiAgcmlnaHRBY3RpdmUgPSBmYWxzZTtcblxuICBwcml2YXRlIHVwZGF0ZU9wZXJhdGlvblN0YXR1cyhkaXJlY3Rpb246IFRyYW5zZmVyRGlyZWN0aW9uLCBjb3VudD86IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXNbZGlyZWN0aW9uID09PSAncmlnaHQnID8gJ2xlZnRBY3RpdmUnIDogJ3JpZ2h0QWN0aXZlJ10gPVxuICAgICAgKHR5cGVvZiBjb3VudCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLmdldENoZWNrZWREYXRhKGRpcmVjdGlvbikuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpLmxlbmd0aCA6IGNvdW50KSA+IDA7XG4gIH1cblxuICBtb3ZlVG9MZWZ0ID0gKCkgPT4gdGhpcy5tb3ZlVG8oJ2xlZnQnKTtcbiAgbW92ZVRvUmlnaHQgPSAoKSA9PiB0aGlzLm1vdmVUbygncmlnaHQnKTtcblxuICBtb3ZlVG8oZGlyZWN0aW9uOiBUcmFuc2ZlckRpcmVjdGlvbik6IHZvaWQge1xuICAgIGNvbnN0IG9wcG9zaXRlRGlyZWN0aW9uID0gZGlyZWN0aW9uID09PSAnbGVmdCcgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgIHRoaXMudXBkYXRlT3BlcmF0aW9uU3RhdHVzKG9wcG9zaXRlRGlyZWN0aW9uLCAwKTtcbiAgICBjb25zdCBkYXRhc291cmNlID0gZGlyZWN0aW9uID09PSAnbGVmdCcgPyB0aGlzLnJpZ2h0RGF0YVNvdXJjZSA6IHRoaXMubGVmdERhdGFTb3VyY2U7XG4gICAgY29uc3QgbW92ZUxpc3QgPSBkYXRhc291cmNlLmZpbHRlcihpdGVtID0+IGl0ZW0uY2hlY2tlZCA9PT0gdHJ1ZSAmJiAhaXRlbS5kaXNhYmxlZCk7XG4gICAgdGhpcy5uekNhbk1vdmUoeyBkaXJlY3Rpb24sIGxpc3Q6IG1vdmVMaXN0IH0pLnN1YnNjcmliZShcbiAgICAgIG5ld01vdmVMaXN0ID0+XG4gICAgICAgIHRoaXMudHJ1dGhNb3ZlVG8oXG4gICAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICAgIG5ld01vdmVMaXN0LmZpbHRlcihpID0+ICEhaSlcbiAgICAgICAgKSxcbiAgICAgICgpID0+IG1vdmVMaXN0LmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHRydXRoTW92ZVRvKGRpcmVjdGlvbjogVHJhbnNmZXJEaXJlY3Rpb24sIGxpc3Q6IFRyYW5zZmVySXRlbVtdKTogdm9pZCB7XG4gICAgY29uc3Qgb3Bwb3NpdGVEaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgY29uc3QgZGF0YXNvdXJjZSA9IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gdGhpcy5yaWdodERhdGFTb3VyY2UgOiB0aGlzLmxlZnREYXRhU291cmNlO1xuICAgIGNvbnN0IHRhcmdldERhdGFzb3VyY2UgPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IHRoaXMubGVmdERhdGFTb3VyY2UgOiB0aGlzLnJpZ2h0RGF0YVNvdXJjZTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgaXRlbS5jaGVja2VkID0gZmFsc2U7XG4gICAgICBpdGVtLmhpZGUgPSBmYWxzZTtcbiAgICAgIGl0ZW0uZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgZGF0YXNvdXJjZS5zcGxpY2UoZGF0YXNvdXJjZS5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgICB9XG4gICAgdGFyZ2V0RGF0YXNvdXJjZS5zcGxpY2UoMCwgMCwgLi4ubGlzdCk7XG4gICAgdGhpcy51cGRhdGVPcGVyYXRpb25TdGF0dXMob3Bwb3NpdGVEaXJlY3Rpb24pO1xuICAgIHRoaXMubnpDaGFuZ2UuZW1pdCh7XG4gICAgICBmcm9tOiBvcHBvc2l0ZURpcmVjdGlvbixcbiAgICAgIHRvOiBkaXJlY3Rpb24sXG4gICAgICBsaXN0XG4gICAgfSk7XG4gICAgdGhpcy5tYXJrRm9yQ2hlY2tBbGxMaXN0KCk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UpIHt9XG5cbiAgcHJpdmF0ZSBtYXJrRm9yQ2hlY2tBbGxMaXN0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5saXN0cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmxpc3RzLmZvckVhY2goaSA9PiBpLm1hcmtGb3JDaGVjaygpKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTnpUYXJnZXRLZXlzKCk6IHZvaWQge1xuICAgIGNvbnN0IGtleXMgPSB0b0FycmF5KHRoaXMubnpUYXJnZXRLZXlzKTtcbiAgICBjb25zdCBoYXNPd25LZXkgPSAoZTogVHJhbnNmZXJJdGVtKSA9PiBlLmhhc093blByb3BlcnR5KCdrZXknKTtcbiAgICB0aGlzLmxlZnREYXRhU291cmNlLmZvckVhY2goZSA9PiB7XG4gICAgICBpZiAoaGFzT3duS2V5KGUpICYmIGtleXMuaW5kZXhPZihlLmtleSkgIT09IC0xICYmICFlLmRpc2FibGVkKSB7XG4gICAgICAgIGUuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5tb3ZlVG9SaWdodCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVOelNlbGVjdGVkS2V5cygpOiB2b2lkIHtcbiAgICBjb25zdCBrZXlzID0gdG9BcnJheSh0aGlzLm56U2VsZWN0ZWRLZXlzKTtcbiAgICB0aGlzLm56RGF0YVNvdXJjZS5mb3JFYWNoKGUgPT4ge1xuICAgICAgaWYgKGtleXMuaW5kZXhPZihlLmtleSkgIT09IC0xKSB7XG4gICAgICAgIGUuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgdGVybSA9IChsZDogVHJhbnNmZXJJdGVtKSA9PiBsZC5kaXNhYmxlZCA9PT0gZmFsc2UgJiYgbGQuY2hlY2tlZCA9PT0gdHJ1ZTtcbiAgICB0aGlzLnJpZ2h0QWN0aXZlID0gdGhpcy5sZWZ0RGF0YVNvdXJjZS5zb21lKHRlcm0pO1xuICAgIHRoaXMubGVmdEFjdGl2ZSA9IHRoaXMucmlnaHREYXRhU291cmNlLnNvbWUodGVybSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ1RyYW5zZmVyJyk7XG4gICAgICB0aGlzLm1hcmtGb3JDaGVja0FsbExpc3QoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uekRhdGFTb3VyY2UpIHtcbiAgICAgIHRoaXMuc3BsaXREYXRhU291cmNlKCk7XG4gICAgICB0aGlzLnVwZGF0ZU9wZXJhdGlvblN0YXR1cygnbGVmdCcpO1xuICAgICAgdGhpcy51cGRhdGVPcGVyYXRpb25TdGF0dXMoJ3JpZ2h0Jyk7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB0aGlzLm1hcmtGb3JDaGVja0FsbExpc3QoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubnpUYXJnZXRLZXlzKSB7XG4gICAgICB0aGlzLmhhbmRsZU56VGFyZ2V0S2V5cygpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5uelNlbGVjdGVkS2V5cykge1xuICAgICAgdGhpcy5oYW5kbGVOelNlbGVjdGVkS2V5cygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=