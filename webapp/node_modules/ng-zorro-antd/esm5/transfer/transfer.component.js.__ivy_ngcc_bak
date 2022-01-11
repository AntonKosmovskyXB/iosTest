/**
 * @fileoverview added by tsickle
 * Generated from: transfer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __read, __spread, __values } from "tslib";
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
var NzTransferComponent = /** @class */ (function () {
    // #endregion
    function NzTransferComponent(cdr, i18n) {
        var _this = this;
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
        function (arg) { return of(arg.list); });
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
        function (checked) { return _this.handleSelect('left', checked); });
        this.handleRightSelectAll = (/**
         * @param {?} checked
         * @return {?}
         */
        function (checked) { return _this.handleSelect('right', checked); });
        this.handleLeftSelect = (/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this.handleSelect('left', !!item.checked, item); });
        this.handleRightSelect = (/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this.handleSelect('right', !!item.checked, item); });
        // #endregion
        // #region operation
        this.leftActive = false;
        this.rightActive = false;
        this.moveToLeft = (/**
         * @return {?}
         */
        function () { return _this.moveTo('left'); });
        this.moveToRight = (/**
         * @return {?}
         */
        function () { return _this.moveTo('right'); });
    }
    /**
     * @private
     * @return {?}
     */
    NzTransferComponent.prototype.splitDataSource = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.leftDataSource = [];
        this.rightDataSource = [];
        this.nzDataSource.forEach((/**
         * @param {?} record
         * @return {?}
         */
        function (record) {
            if (record.direction === 'right') {
                record.direction = 'right';
                _this.rightDataSource.push(record);
            }
            else {
                record.direction = 'left';
                _this.leftDataSource.push(record);
            }
        }));
    };
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    NzTransferComponent.prototype.getCheckedData = /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        return this[direction === 'left' ? 'leftDataSource' : 'rightDataSource'].filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.checked; }));
    };
    /**
     * @param {?} direction
     * @param {?} checked
     * @param {?=} item
     * @return {?}
     */
    NzTransferComponent.prototype.handleSelect = /**
     * @param {?} direction
     * @param {?} checked
     * @param {?=} item
     * @return {?}
     */
    function (direction, checked, item) {
        /** @type {?} */
        var list = this.getCheckedData(direction);
        this.updateOperationStatus(direction, list.length);
        this.nzSelectChange.emit({ direction: direction, checked: checked, list: list, item: item });
    };
    /**
     * @param {?} ret
     * @return {?}
     */
    NzTransferComponent.prototype.handleFilterChange = /**
     * @param {?} ret
     * @return {?}
     */
    function (ret) {
        this.nzSearchChange.emit(ret);
    };
    /**
     * @private
     * @param {?} direction
     * @param {?=} count
     * @return {?}
     */
    NzTransferComponent.prototype.updateOperationStatus = /**
     * @private
     * @param {?} direction
     * @param {?=} count
     * @return {?}
     */
    function (direction, count) {
        this[direction === 'right' ? 'leftActive' : 'rightActive'] =
            (typeof count === 'undefined' ? this.getCheckedData(direction).filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return !w.disabled; })).length : count) > 0;
    };
    /**
     * @param {?} direction
     * @return {?}
     */
    NzTransferComponent.prototype.moveTo = /**
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        var _this = this;
        /** @type {?} */
        var oppositeDirection = direction === 'left' ? 'right' : 'left';
        this.updateOperationStatus(oppositeDirection, 0);
        /** @type {?} */
        var datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
        /** @type {?} */
        var moveList = datasource.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.checked === true && !item.disabled; }));
        this.nzCanMove({ direction: direction, list: moveList }).subscribe((/**
         * @param {?} newMoveList
         * @return {?}
         */
        function (newMoveList) {
            return _this.truthMoveTo(direction, newMoveList.filter((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return !!i; })));
        }), (/**
         * @return {?}
         */
        function () { return moveList.forEach((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return (i.checked = false); })); }));
    };
    /**
     * @private
     * @param {?} direction
     * @param {?} list
     * @return {?}
     */
    NzTransferComponent.prototype.truthMoveTo = /**
     * @private
     * @param {?} direction
     * @param {?} list
     * @return {?}
     */
    function (direction, list) {
        var e_1, _a;
        /** @type {?} */
        var oppositeDirection = direction === 'left' ? 'right' : 'left';
        /** @type {?} */
        var datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
        /** @type {?} */
        var targetDatasource = direction === 'left' ? this.leftDataSource : this.rightDataSource;
        try {
            for (var list_1 = __values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                var item = list_1_1.value;
                item.checked = false;
                item.hide = false;
                item.direction = direction;
                datasource.splice(datasource.indexOf(item), 1);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        targetDatasource.splice.apply(targetDatasource, __spread([0, 0], list));
        this.updateOperationStatus(oppositeDirection);
        this.nzChange.emit({
            from: oppositeDirection,
            to: direction,
            list: list
        });
        this.markForCheckAllList();
    };
    /**
     * @private
     * @return {?}
     */
    NzTransferComponent.prototype.markForCheckAllList = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.lists) {
            return;
        }
        this.lists.forEach((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return i.markForCheck(); }));
    };
    /**
     * @private
     * @return {?}
     */
    NzTransferComponent.prototype.handleNzTargetKeys = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var keys = toArray(this.nzTargetKeys);
        /** @type {?} */
        var hasOwnKey = (/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.hasOwnProperty('key'); });
        this.leftDataSource.forEach((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (hasOwnKey(e) && keys.indexOf(e.key) !== -1 && !e.disabled) {
                e.checked = true;
            }
        }));
        this.moveToRight();
    };
    /**
     * @private
     * @return {?}
     */
    NzTransferComponent.prototype.handleNzSelectedKeys = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var keys = toArray(this.nzSelectedKeys);
        this.nzDataSource.forEach((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (keys.indexOf(e.key) !== -1) {
                e.checked = true;
            }
        }));
        /** @type {?} */
        var term = (/**
         * @param {?} ld
         * @return {?}
         */
        function (ld) { return ld.disabled === false && ld.checked === true; });
        this.rightActive = this.leftDataSource.some(term);
        this.leftActive = this.rightDataSource.some(term);
    };
    /**
     * @return {?}
     */
    NzTransferComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.locale = _this.i18n.getLocaleData('Transfer');
            _this.markForCheckAllList();
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTransferComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
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
    };
    /**
     * @return {?}
     */
    NzTransferComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    NzTransferComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-transfer',
                    exportAs: 'nzTransfer',
                    preserveWhitespaces: false,
                    template: "\n    <nz-transfer-list\n      class=\"ant-transfer-list\"\n      [ngStyle]=\"nzListStyle\"\n      data-direction=\"left\"\n      direction=\"left\"\n      [titleText]=\"nzTitles[0]\"\n      [showSelectAll]=\"nzShowSelectAll\"\n      [dataSource]=\"leftDataSource\"\n      [filter]=\"leftFilter\"\n      [filterOption]=\"nzFilterOption\"\n      (filterChange)=\"handleFilterChange($event)\"\n      [renderList]=\"nzRenderList && nzRenderList[0]\"\n      [render]=\"nzRender\"\n      [disabled]=\"nzDisabled\"\n      [showSearch]=\"nzShowSearch\"\n      [searchPlaceholder]=\"nzSearchPlaceholder || locale?.searchPlaceholder\"\n      [notFoundContent]=\"nzNotFoundContent\"\n      [itemUnit]=\"nzItemUnit || locale?.itemUnit\"\n      [itemsUnit]=\"nzItemsUnit || locale?.itemsUnit\"\n      [footer]=\"nzFooter\"\n      (handleSelect)=\"handleLeftSelect($event)\"\n      (handleSelectAll)=\"handleLeftSelectAll($event)\"\n    >\n    </nz-transfer-list>\n    <div class=\"ant-transfer-operation\">\n      <button nz-button (click)=\"moveToLeft()\" [disabled]=\"nzDisabled || !leftActive\" [nzType]=\"'primary'\" [nzSize]=\"'small'\">\n        <i nz-icon nzType=\"left\"></i><span *ngIf=\"nzOperations[1]\">{{ nzOperations[1] }}</span>\n      </button>\n      <button nz-button (click)=\"moveToRight()\" [disabled]=\"nzDisabled || !rightActive\" [nzType]=\"'primary'\" [nzSize]=\"'small'\">\n        <i nz-icon nzType=\"right\"></i><span *ngIf=\"nzOperations[0]\">{{ nzOperations[0] }}</span>\n      </button>\n    </div>\n    <nz-transfer-list\n      class=\"ant-transfer-list\"\n      [ngStyle]=\"nzListStyle\"\n      data-direction=\"right\"\n      direction=\"right\"\n      [titleText]=\"nzTitles[1]\"\n      [showSelectAll]=\"nzShowSelectAll\"\n      [dataSource]=\"rightDataSource\"\n      [filter]=\"rightFilter\"\n      [filterOption]=\"nzFilterOption\"\n      (filterChange)=\"handleFilterChange($event)\"\n      [renderList]=\"nzRenderList && nzRenderList[1]\"\n      [render]=\"nzRender\"\n      [disabled]=\"nzDisabled\"\n      [showSearch]=\"nzShowSearch\"\n      [searchPlaceholder]=\"nzSearchPlaceholder || locale?.searchPlaceholder\"\n      [notFoundContent]=\"nzNotFoundContent\"\n      [itemUnit]=\"nzItemUnit || locale?.itemUnit\"\n      [itemsUnit]=\"nzItemsUnit || locale?.itemsUnit\"\n      [footer]=\"nzFooter\"\n      (handleSelect)=\"handleRightSelect($event)\"\n      (handleSelectAll)=\"handleRightSelectAll($event)\"\n    >\n    </nz-transfer-list>\n  ",
                    host: {
                        '[class.ant-transfer]': "true",
                        '[class.ant-transfer-disabled]': "nzDisabled",
                        '[class.ant-transfer-customize-list]': "nzRenderList"
                    },
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzTransferComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzI18nService }
    ]; };
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
    return NzTransferComponent;
}());
export { NzTransferComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90cmFuc2Zlci8iLCJzb3VyY2VzIjpbInRyYW5zZmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUNOLFNBQVMsRUFHVCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGFBQWEsRUFBMkIsTUFBTSxvQkFBb0IsQ0FBQztBQUU1RSxPQUFPLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFcEU7SUEyTUUsYUFBYTtJQUViLDZCQUFvQixHQUFzQixFQUFVLElBQW1CO1FBQXZFLGlCQUEyRTtRQUF2RCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQWU7UUFsSS9ELGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUszQyxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsRUFBRSxDQUFDOztRQUlRLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkMsaUJBQVksR0FBbUIsRUFBRSxDQUFDO1FBQ2xDLGFBQVEsR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM5QixpQkFBWSxHQUFhLEVBQUUsQ0FBQztRQUM1QixnQkFBVyxHQUFxQixFQUFFLENBQUM7UUFDbkIsb0JBQWUsR0FBRyxJQUFJ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QTZGOztJQWdCN0YseUNBQW1COztJQUNuQiwwQ0FBb0I7O0lBT3BCLHlDQUF1Qzs7SUFDdkMsMENBQXlDOzs7OztJQXVDN0Isa0NBQThCOzs7OztJQUFFLG1DQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZHJlbixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE5nU3R5bGVJbnRlcmZhY2UsIE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIHRvQXJyYXkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlLCBOelRyYW5zZmVySTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFRyYW5zZmVyQ2FuTW92ZSwgVHJhbnNmZXJDaGFuZ2UsIFRyYW5zZmVyRGlyZWN0aW9uLCBUcmFuc2Zlckl0ZW0sIFRyYW5zZmVyU2VhcmNoQ2hhbmdlLCBUcmFuc2ZlclNlbGVjdENoYW5nZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IE56VHJhbnNmZXJMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi90cmFuc2Zlci1saXN0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXRyYW5zZmVyJyxcbiAgZXhwb3J0QXM6ICduelRyYW5zZmVyJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG56LXRyYW5zZmVyLWxpc3RcbiAgICAgIGNsYXNzPVwiYW50LXRyYW5zZmVyLWxpc3RcIlxuICAgICAgW25nU3R5bGVdPVwibnpMaXN0U3R5bGVcIlxuICAgICAgZGF0YS1kaXJlY3Rpb249XCJsZWZ0XCJcbiAgICAgIGRpcmVjdGlvbj1cImxlZnRcIlxuICAgICAgW3RpdGxlVGV4dF09XCJuelRpdGxlc1swXVwiXG4gICAgICBbc2hvd1NlbGVjdEFsbF09XCJuelNob3dTZWxlY3RBbGxcIlxuICAgICAgW2RhdGFTb3VyY2VdPVwibGVmdERhdGFTb3VyY2VcIlxuICAgICAgW2ZpbHRlcl09XCJsZWZ0RmlsdGVyXCJcbiAgICAgIFtmaWx0ZXJPcHRpb25dPVwibnpGaWx0ZXJPcHRpb25cIlxuICAgICAgKGZpbHRlckNoYW5nZSk9XCJoYW5kbGVGaWx0ZXJDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICBbcmVuZGVyTGlzdF09XCJuelJlbmRlckxpc3QgJiYgbnpSZW5kZXJMaXN0WzBdXCJcbiAgICAgIFtyZW5kZXJdPVwibnpSZW5kZXJcIlxuICAgICAgW2Rpc2FibGVkXT1cIm56RGlzYWJsZWRcIlxuICAgICAgW3Nob3dTZWFyY2hdPVwibnpTaG93U2VhcmNoXCJcbiAgICAgIFtzZWFyY2hQbGFjZWhvbGRlcl09XCJuelNlYXJjaFBsYWNlaG9sZGVyIHx8IGxvY2FsZT8uc2VhcmNoUGxhY2Vob2xkZXJcIlxuICAgICAgW25vdEZvdW5kQ29udGVudF09XCJuek5vdEZvdW5kQ29udGVudFwiXG4gICAgICBbaXRlbVVuaXRdPVwibnpJdGVtVW5pdCB8fCBsb2NhbGU/Lml0ZW1Vbml0XCJcbiAgICAgIFtpdGVtc1VuaXRdPVwibnpJdGVtc1VuaXQgfHwgbG9jYWxlPy5pdGVtc1VuaXRcIlxuICAgICAgW2Zvb3Rlcl09XCJuekZvb3RlclwiXG4gICAgICAoaGFuZGxlU2VsZWN0KT1cImhhbmRsZUxlZnRTZWxlY3QoJGV2ZW50KVwiXG4gICAgICAoaGFuZGxlU2VsZWN0QWxsKT1cImhhbmRsZUxlZnRTZWxlY3RBbGwoJGV2ZW50KVwiXG4gICAgPlxuICAgIDwvbnotdHJhbnNmZXItbGlzdD5cbiAgICA8ZGl2IGNsYXNzPVwiYW50LXRyYW5zZmVyLW9wZXJhdGlvblwiPlxuICAgICAgPGJ1dHRvbiBuei1idXR0b24gKGNsaWNrKT1cIm1vdmVUb0xlZnQoKVwiIFtkaXNhYmxlZF09XCJuekRpc2FibGVkIHx8ICFsZWZ0QWN0aXZlXCIgW256VHlwZV09XCIncHJpbWFyeSdcIiBbbnpTaXplXT1cIidzbWFsbCdcIj5cbiAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJsZWZ0XCI+PC9pPjxzcGFuICpuZ0lmPVwibnpPcGVyYXRpb25zWzFdXCI+e3sgbnpPcGVyYXRpb25zWzFdIH19PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG56LWJ1dHRvbiAoY2xpY2spPVwibW92ZVRvUmlnaHQoKVwiIFtkaXNhYmxlZF09XCJuekRpc2FibGVkIHx8ICFyaWdodEFjdGl2ZVwiIFtuelR5cGVdPVwiJ3ByaW1hcnknXCIgW256U2l6ZV09XCInc21hbGwnXCI+XG4gICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwicmlnaHRcIj48L2k+PHNwYW4gKm5nSWY9XCJuek9wZXJhdGlvbnNbMF1cIj57eyBuek9wZXJhdGlvbnNbMF0gfX08L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8bnotdHJhbnNmZXItbGlzdFxuICAgICAgY2xhc3M9XCJhbnQtdHJhbnNmZXItbGlzdFwiXG4gICAgICBbbmdTdHlsZV09XCJuekxpc3RTdHlsZVwiXG4gICAgICBkYXRhLWRpcmVjdGlvbj1cInJpZ2h0XCJcbiAgICAgIGRpcmVjdGlvbj1cInJpZ2h0XCJcbiAgICAgIFt0aXRsZVRleHRdPVwibnpUaXRsZXNbMV1cIlxuICAgICAgW3Nob3dTZWxlY3RBbGxdPVwibnpTaG93U2VsZWN0QWxsXCJcbiAgICAgIFtkYXRhU291cmNlXT1cInJpZ2h0RGF0YVNvdXJjZVwiXG4gICAgICBbZmlsdGVyXT1cInJpZ2h0RmlsdGVyXCJcbiAgICAgIFtmaWx0ZXJPcHRpb25dPVwibnpGaWx0ZXJPcHRpb25cIlxuICAgICAgKGZpbHRlckNoYW5nZSk9XCJoYW5kbGVGaWx0ZXJDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICBbcmVuZGVyTGlzdF09XCJuelJlbmRlckxpc3QgJiYgbnpSZW5kZXJMaXN0WzFdXCJcbiAgICAgIFtyZW5kZXJdPVwibnpSZW5kZXJcIlxuICAgICAgW2Rpc2FibGVkXT1cIm56RGlzYWJsZWRcIlxuICAgICAgW3Nob3dTZWFyY2hdPVwibnpTaG93U2VhcmNoXCJcbiAgICAgIFtzZWFyY2hQbGFjZWhvbGRlcl09XCJuelNlYXJjaFBsYWNlaG9sZGVyIHx8IGxvY2FsZT8uc2VhcmNoUGxhY2Vob2xkZXJcIlxuICAgICAgW25vdEZvdW5kQ29udGVudF09XCJuek5vdEZvdW5kQ29udGVudFwiXG4gICAgICBbaXRlbVVuaXRdPVwibnpJdGVtVW5pdCB8fCBsb2NhbGU/Lml0ZW1Vbml0XCJcbiAgICAgIFtpdGVtc1VuaXRdPVwibnpJdGVtc1VuaXQgfHwgbG9jYWxlPy5pdGVtc1VuaXRcIlxuICAgICAgW2Zvb3Rlcl09XCJuekZvb3RlclwiXG4gICAgICAoaGFuZGxlU2VsZWN0KT1cImhhbmRsZVJpZ2h0U2VsZWN0KCRldmVudClcIlxuICAgICAgKGhhbmRsZVNlbGVjdEFsbCk9XCJoYW5kbGVSaWdodFNlbGVjdEFsbCgkZXZlbnQpXCJcbiAgICA+XG4gICAgPC9uei10cmFuc2Zlci1saXN0PlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtdHJhbnNmZXJdJzogYHRydWVgLFxuICAgICdbY2xhc3MuYW50LXRyYW5zZmVyLWRpc2FibGVkXSc6IGBuekRpc2FibGVkYCxcbiAgICAnW2NsYXNzLmFudC10cmFuc2Zlci1jdXN0b21pemUtbGlzdF0nOiBgbnpSZW5kZXJMaXN0YFxuICB9LFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOelRyYW5zZmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekRpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNob3dTZWxlY3RBbGw6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2hvd1NlYXJjaDogQm9vbGVhbklucHV0O1xuXG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgQFZpZXdDaGlsZHJlbihOelRyYW5zZmVyTGlzdENvbXBvbmVudClcbiAgcHJpdmF0ZSBsaXN0cyE6IFF1ZXJ5TGlzdDxOelRyYW5zZmVyTGlzdENvbXBvbmVudD47XG4gIGxvY2FsZSE6IE56VHJhbnNmZXJJMThuSW50ZXJmYWNlO1xuXG4gIGxlZnRGaWx0ZXIgPSAnJztcbiAgcmlnaHRGaWx0ZXIgPSAnJztcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56RGF0YVNvdXJjZTogVHJhbnNmZXJJdGVtW10gPSBbXTtcbiAgQElucHV0KCkgbnpUaXRsZXM6IHN0cmluZ1tdID0gWycnLCAnJ107XG4gIEBJbnB1dCgpIG56T3BlcmF0aW9uczogc3RyaW5nW10gPSBbXTtcbiAgQElucHV0KCkgbnpMaXN0U3R5bGU6IE5nU3R5bGVJbnRlcmZhY2UgPSB7fTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd1NlbGVjdEFsbCA9IHRydWU7XG4gIEBJbnB1dCgpIG56SXRlbVVuaXQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56SXRlbXNVbml0Pzogc3RyaW5nO1xuICBASW5wdXQoKSBuekNhbk1vdmU6IChhcmc6IFRyYW5zZmVyQ2FuTW92ZSkgPT4gT2JzZXJ2YWJsZTxUcmFuc2Zlckl0ZW1bXT4gPSAoYXJnOiBUcmFuc2ZlckNhbk1vdmUpID0+IG9mKGFyZy5saXN0KTtcbiAgQElucHV0KCkgbnpSZW5kZXJMaXN0OiBBcnJheTxUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbD4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpSZW5kZXI6IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpGb290ZXI6IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd1NlYXJjaCA9IGZhbHNlO1xuICBASW5wdXQoKSBuekZpbHRlck9wdGlvbj86IChpbnB1dFZhbHVlOiBzdHJpbmcsIGl0ZW06IFRyYW5zZmVySXRlbSkgPT4gYm9vbGVhbjtcbiAgQElucHV0KCkgbnpTZWFyY2hQbGFjZWhvbGRlcj86IHN0cmluZztcbiAgQElucHV0KCkgbnpOb3RGb3VuZENvbnRlbnQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56VGFyZ2V0S2V5czogc3RyaW5nW10gPSBbXTtcbiAgQElucHV0KCkgbnpTZWxlY3RlZEtleXM6IHN0cmluZ1tdID0gW107XG5cbiAgLy8gZXZlbnRzXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VHJhbnNmZXJDaGFuZ2U+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlYXJjaENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VHJhbnNmZXJTZWFyY2hDaGFuZ2U+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlbGVjdENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VHJhbnNmZXJTZWxlY3RDaGFuZ2U+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gcHJvY2VzcyBkYXRhXG5cbiAgLy8gbGVmdFxuICBsZWZ0RGF0YVNvdXJjZTogVHJhbnNmZXJJdGVtW10gPSBbXTtcblxuICAvLyByaWdodFxuICByaWdodERhdGFTb3VyY2U6IFRyYW5zZmVySXRlbVtdID0gW107XG5cbiAgcHJpdmF0ZSBzcGxpdERhdGFTb3VyY2UoKTogdm9pZCB7XG4gICAgdGhpcy5sZWZ0RGF0YVNvdXJjZSA9IFtdO1xuICAgIHRoaXMucmlnaHREYXRhU291cmNlID0gW107XG4gICAgdGhpcy5uekRhdGFTb3VyY2UuZm9yRWFjaChyZWNvcmQgPT4ge1xuICAgICAgaWYgKHJlY29yZC5kaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgcmVjb3JkLmRpcmVjdGlvbiA9ICdyaWdodCc7XG4gICAgICAgIHRoaXMucmlnaHREYXRhU291cmNlLnB1c2gocmVjb3JkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlY29yZC5kaXJlY3Rpb24gPSAnbGVmdCc7XG4gICAgICAgIHRoaXMubGVmdERhdGFTb3VyY2UucHVzaChyZWNvcmQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDaGVja2VkRGF0YShkaXJlY3Rpb246IFRyYW5zZmVyRGlyZWN0aW9uKTogVHJhbnNmZXJJdGVtW10ge1xuICAgIHJldHVybiB0aGlzW2RpcmVjdGlvbiA9PT0gJ2xlZnQnID8gJ2xlZnREYXRhU291cmNlJyA6ICdyaWdodERhdGFTb3VyY2UnXS5maWx0ZXIodyA9PiB3LmNoZWNrZWQpO1xuICB9XG5cbiAgaGFuZGxlTGVmdFNlbGVjdEFsbCA9IChjaGVja2VkOiBib29sZWFuKSA9PiB0aGlzLmhhbmRsZVNlbGVjdCgnbGVmdCcsIGNoZWNrZWQpO1xuICBoYW5kbGVSaWdodFNlbGVjdEFsbCA9IChjaGVja2VkOiBib29sZWFuKSA9PiB0aGlzLmhhbmRsZVNlbGVjdCgncmlnaHQnLCBjaGVja2VkKTtcblxuICBoYW5kbGVMZWZ0U2VsZWN0ID0gKGl0ZW06IFRyYW5zZmVySXRlbSkgPT4gdGhpcy5oYW5kbGVTZWxlY3QoJ2xlZnQnLCAhIWl0ZW0uY2hlY2tlZCwgaXRlbSk7XG4gIGhhbmRsZVJpZ2h0U2VsZWN0ID0gKGl0ZW06IFRyYW5zZmVySXRlbSkgPT4gdGhpcy5oYW5kbGVTZWxlY3QoJ3JpZ2h0JywgISFpdGVtLmNoZWNrZWQsIGl0ZW0pO1xuXG4gIGhhbmRsZVNlbGVjdChkaXJlY3Rpb246IFRyYW5zZmVyRGlyZWN0aW9uLCBjaGVja2VkOiBib29sZWFuLCBpdGVtPzogVHJhbnNmZXJJdGVtKTogdm9pZCB7XG4gICAgY29uc3QgbGlzdCA9IHRoaXMuZ2V0Q2hlY2tlZERhdGEoZGlyZWN0aW9uKTtcbiAgICB0aGlzLnVwZGF0ZU9wZXJhdGlvblN0YXR1cyhkaXJlY3Rpb24sIGxpc3QubGVuZ3RoKTtcbiAgICB0aGlzLm56U2VsZWN0Q2hhbmdlLmVtaXQoeyBkaXJlY3Rpb24sIGNoZWNrZWQsIGxpc3QsIGl0ZW0gfSk7XG4gIH1cblxuICBoYW5kbGVGaWx0ZXJDaGFuZ2UocmV0OiB7IGRpcmVjdGlvbjogVHJhbnNmZXJEaXJlY3Rpb247IHZhbHVlOiBzdHJpbmcgfSk6IHZvaWQge1xuICAgIHRoaXMubnpTZWFyY2hDaGFuZ2UuZW1pdChyZXQpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gb3BlcmF0aW9uXG5cbiAgbGVmdEFjdGl2ZSA9IGZhbHNlO1xuICByaWdodEFjdGl2ZSA9IGZhbHNlO1xuXG4gIHByaXZhdGUgdXBkYXRlT3BlcmF0aW9uU3RhdHVzKGRpcmVjdGlvbjogVHJhbnNmZXJEaXJlY3Rpb24sIGNvdW50PzogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpc1tkaXJlY3Rpb24gPT09ICdyaWdodCcgPyAnbGVmdEFjdGl2ZScgOiAncmlnaHRBY3RpdmUnXSA9XG4gICAgICAodHlwZW9mIGNvdW50ID09PSAndW5kZWZpbmVkJyA/IHRoaXMuZ2V0Q2hlY2tlZERhdGEoZGlyZWN0aW9uKS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCkubGVuZ3RoIDogY291bnQpID4gMDtcbiAgfVxuXG4gIG1vdmVUb0xlZnQgPSAoKSA9PiB0aGlzLm1vdmVUbygnbGVmdCcpO1xuICBtb3ZlVG9SaWdodCA9ICgpID0+IHRoaXMubW92ZVRvKCdyaWdodCcpO1xuXG4gIG1vdmVUbyhkaXJlY3Rpb246IFRyYW5zZmVyRGlyZWN0aW9uKTogdm9pZCB7XG4gICAgY29uc3Qgb3Bwb3NpdGVEaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgdGhpcy51cGRhdGVPcGVyYXRpb25TdGF0dXMob3Bwb3NpdGVEaXJlY3Rpb24sIDApO1xuICAgIGNvbnN0IGRhdGFzb3VyY2UgPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IHRoaXMucmlnaHREYXRhU291cmNlIDogdGhpcy5sZWZ0RGF0YVNvdXJjZTtcbiAgICBjb25zdCBtb3ZlTGlzdCA9IGRhdGFzb3VyY2UuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jaGVja2VkID09PSB0cnVlICYmICFpdGVtLmRpc2FibGVkKTtcbiAgICB0aGlzLm56Q2FuTW92ZSh7IGRpcmVjdGlvbiwgbGlzdDogbW92ZUxpc3QgfSkuc3Vic2NyaWJlKFxuICAgICAgbmV3TW92ZUxpc3QgPT5cbiAgICAgICAgdGhpcy50cnV0aE1vdmVUbyhcbiAgICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgICAgbmV3TW92ZUxpc3QuZmlsdGVyKGkgPT4gISFpKVxuICAgICAgICApLFxuICAgICAgKCkgPT4gbW92ZUxpc3QuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBmYWxzZSkpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgdHJ1dGhNb3ZlVG8oZGlyZWN0aW9uOiBUcmFuc2ZlckRpcmVjdGlvbiwgbGlzdDogVHJhbnNmZXJJdGVtW10pOiB2b2lkIHtcbiAgICBjb25zdCBvcHBvc2l0ZURpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICBjb25zdCBkYXRhc291cmNlID0gZGlyZWN0aW9uID09PSAnbGVmdCcgPyB0aGlzLnJpZ2h0RGF0YVNvdXJjZSA6IHRoaXMubGVmdERhdGFTb3VyY2U7XG4gICAgY29uc3QgdGFyZ2V0RGF0YXNvdXJjZSA9IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gdGhpcy5sZWZ0RGF0YVNvdXJjZSA6IHRoaXMucmlnaHREYXRhU291cmNlO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgICBpdGVtLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIGl0ZW0uaGlkZSA9IGZhbHNlO1xuICAgICAgaXRlbS5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICBkYXRhc291cmNlLnNwbGljZShkYXRhc291cmNlLmluZGV4T2YoaXRlbSksIDEpO1xuICAgIH1cbiAgICB0YXJnZXREYXRhc291cmNlLnNwbGljZSgwLCAwLCAuLi5saXN0KTtcbiAgICB0aGlzLnVwZGF0ZU9wZXJhdGlvblN0YXR1cyhvcHBvc2l0ZURpcmVjdGlvbik7XG4gICAgdGhpcy5uekNoYW5nZS5lbWl0KHtcbiAgICAgIGZyb206IG9wcG9zaXRlRGlyZWN0aW9uLFxuICAgICAgdG86IGRpcmVjdGlvbixcbiAgICAgIGxpc3RcbiAgICB9KTtcbiAgICB0aGlzLm1hcmtGb3JDaGVja0FsbExpc3QoKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSkge31cblxuICBwcml2YXRlIG1hcmtGb3JDaGVja0FsbExpc3QoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmxpc3RzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubGlzdHMuZm9yRWFjaChpID0+IGkubWFya0ZvckNoZWNrKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVOelRhcmdldEtleXMoKTogdm9pZCB7XG4gICAgY29uc3Qga2V5cyA9IHRvQXJyYXkodGhpcy5uelRhcmdldEtleXMpO1xuICAgIGNvbnN0IGhhc093bktleSA9IChlOiBUcmFuc2Zlckl0ZW0pID0+IGUuaGFzT3duUHJvcGVydHkoJ2tleScpO1xuICAgIHRoaXMubGVmdERhdGFTb3VyY2UuZm9yRWFjaChlID0+IHtcbiAgICAgIGlmIChoYXNPd25LZXkoZSkgJiYga2V5cy5pbmRleE9mKGUua2V5KSAhPT0gLTEgJiYgIWUuZGlzYWJsZWQpIHtcbiAgICAgICAgZS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm1vdmVUb1JpZ2h0KCk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU56U2VsZWN0ZWRLZXlzKCk6IHZvaWQge1xuICAgIGNvbnN0IGtleXMgPSB0b0FycmF5KHRoaXMubnpTZWxlY3RlZEtleXMpO1xuICAgIHRoaXMubnpEYXRhU291cmNlLmZvckVhY2goZSA9PiB7XG4gICAgICBpZiAoa2V5cy5pbmRleE9mKGUua2V5KSAhPT0gLTEpIHtcbiAgICAgICAgZS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCB0ZXJtID0gKGxkOiBUcmFuc2Zlckl0ZW0pID0+IGxkLmRpc2FibGVkID09PSBmYWxzZSAmJiBsZC5jaGVja2VkID09PSB0cnVlO1xuICAgIHRoaXMucmlnaHRBY3RpdmUgPSB0aGlzLmxlZnREYXRhU291cmNlLnNvbWUodGVybSk7XG4gICAgdGhpcy5sZWZ0QWN0aXZlID0gdGhpcy5yaWdodERhdGFTb3VyY2Uuc29tZSh0ZXJtKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnVHJhbnNmZXInKTtcbiAgICAgIHRoaXMubWFya0ZvckNoZWNrQWxsTGlzdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56RGF0YVNvdXJjZSkge1xuICAgICAgdGhpcy5zcGxpdERhdGFTb3VyY2UoKTtcbiAgICAgIHRoaXMudXBkYXRlT3BlcmF0aW9uU3RhdHVzKCdsZWZ0Jyk7XG4gICAgICB0aGlzLnVwZGF0ZU9wZXJhdGlvblN0YXR1cygncmlnaHQnKTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMubWFya0ZvckNoZWNrQWxsTGlzdCgpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5uelRhcmdldEtleXMpIHtcbiAgICAgIHRoaXMuaGFuZGxlTnpUYXJnZXRLZXlzKCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLm56U2VsZWN0ZWRLZXlzKSB7XG4gICAgICB0aGlzLmhhbmRsZU56U2VsZWN0ZWRLZXlzKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==