/**
 * @fileoverview added by tsickle
 * Generated from: tree.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __extends, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, forwardRef, Host, Input, Optional, Output, SkipSelf, TemplateRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { treeCollapseMotion } from 'ng-zorro-antd/core/animation';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { flattenTreeData, NzTreeBase, NzTreeBaseService, NzTreeHigherOrderServiceToken } from 'ng-zorro-antd/core/tree';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzTreeService } from './tree.service';
/**
 * @param {?} higherOrderService
 * @param {?} treeService
 * @return {?}
 */
export function NzTreeServiceFactory(higherOrderService, treeService) {
    return higherOrderService ? higherOrderService : treeService;
}
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'tree';
var NzTreeComponent = /** @class */ (function (_super) {
    __extends(NzTreeComponent, _super);
    // Handle emit event end
    function NzTreeComponent(nzTreeService, nzConfigService, cdr, noAnimation) {
        var _this = _super.call(this, nzTreeService) || this;
        _this.nzConfigService = nzConfigService;
        _this.cdr = cdr;
        _this.noAnimation = noAnimation;
        _this.nzShowIcon = false;
        _this.nzHideUnMatched = false;
        _this.nzBlockNode = false;
        _this.nzExpandAll = false;
        _this.nzSelectMode = false;
        _this.nzCheckStrictly = false;
        _this.nzShowExpand = true;
        _this.nzShowLine = false;
        _this.nzCheckable = false;
        _this.nzAsyncData = false;
        _this.nzDraggable = false;
        _this.nzMultiple = false;
        _this.nzVirtualItemSize = 28;
        _this.nzVirtualMaxBufferPx = 500;
        _this.nzVirtualMinBufferPx = 28;
        _this.nzVirtualHeight = null;
        _this.nzData = [];
        _this.nzExpandedKeys = [];
        _this.nzSelectedKeys = [];
        _this.nzCheckedKeys = [];
        _this.nzFlattenNodes = [];
        _this.beforeInit = true;
        _this.nzExpandedKeysChange = new EventEmitter();
        _this.nzSelectedKeysChange = new EventEmitter();
        _this.nzCheckedKeysChange = new EventEmitter();
        _this.nzSearchValueChange = new EventEmitter();
        _this.nzClick = new EventEmitter();
        _this.nzDblClick = new EventEmitter();
        _this.nzContextMenu = new EventEmitter();
        _this.nzCheckBoxChange = new EventEmitter();
        _this.nzExpandChange = new EventEmitter();
        _this.nzOnDragStart = new EventEmitter();
        _this.nzOnDragEnter = new EventEmitter();
        _this.nzOnDragOver = new EventEmitter();
        _this.nzOnDragLeave = new EventEmitter();
        _this.nzOnDrop = new EventEmitter();
        _this.nzOnDragEnd = new EventEmitter();
        _this.HIDDEN_STYLE = {
            width: 0,
            height: 0,
            display: 'flex',
            overflow: 'hidden',
            opacity: 0,
            border: 0,
            padding: 0,
            margin: 0
        };
        _this.destroy$ = new Subject();
        _this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        _this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NzTreeComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.handleNzData(value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTreeComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTreeComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * Render all properties of nzTree
     * @param changes: all changes from @Input
     */
    /**
     * Render all properties of nzTree
     * @param {?} changes
     * @return {?}
     */
    NzTreeComponent.prototype.renderTreeProperties = /**
     * Render all properties of nzTree
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var useDefaultExpandedKeys = false;
        /** @type {?} */
        var expandAll = false;
        var nzData = changes.nzData, nzExpandedKeys = changes.nzExpandedKeys, nzSelectedKeys = changes.nzSelectedKeys, nzCheckedKeys = changes.nzCheckedKeys, nzCheckStrictly = changes.nzCheckStrictly, nzExpandAll = changes.nzExpandAll, nzMultiple = changes.nzMultiple, nzSearchValue = changes.nzSearchValue;
        if (nzExpandAll) {
            useDefaultExpandedKeys = true;
            expandAll = this.nzExpandAll;
        }
        if (nzMultiple) {
            this.nzTreeService.isMultiple = this.nzMultiple;
        }
        if (nzCheckStrictly) {
            this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
        }
        if (nzData) {
            this.handleNzData(this.nzData);
        }
        if (nzCheckedKeys) {
            this.handleCheckedKeys(this.nzCheckedKeys);
        }
        if (nzCheckStrictly) {
            this.handleCheckedKeys(null);
        }
        if (nzExpandedKeys || nzExpandAll) {
            useDefaultExpandedKeys = true;
            this.handleExpandedKeys(expandAll || this.nzExpandedKeys);
        }
        if (nzSelectedKeys) {
            this.handleSelectedKeys(this.nzSelectedKeys, this.nzMultiple);
        }
        if (nzSearchValue) {
            if (!(nzSearchValue.firstChange && !this.nzSearchValue)) {
                useDefaultExpandedKeys = false;
                this.handleSearchValue(nzSearchValue.currentValue, this.nzSearchFunc);
                this.nzSearchValueChange.emit(this.nzTreeService.formatEvent('search', null, null));
            }
        }
        // flatten data
        /** @type {?} */
        var currentExpandedKeys = this.getExpandedNodeList().map((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return v.key; }));
        /** @type {?} */
        var newExpandedKeys = useDefaultExpandedKeys ? expandAll || this.nzExpandedKeys : currentExpandedKeys;
        this.handleFlattenNodes(this.nzTreeService.rootNodes, newExpandedKeys);
    };
    /**
     * @param {?} _
     * @param {?} node
     * @return {?}
     */
    NzTreeComponent.prototype.trackByFlattenNode = /**
     * @param {?} _
     * @param {?} node
     * @return {?}
     */
    function (_, node) {
        return node.key;
    };
    // Deal with properties
    /**
     * nzData
     * @param value
     */
    // Deal with properties
    /**
     * nzData
     * @param {?} value
     * @return {?}
     */
    NzTreeComponent.prototype.handleNzData = 
    // Deal with properties
    /**
     * nzData
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (Array.isArray(value)) {
            /** @type {?} */
            var data = this.coerceTreeNodes(value);
            this.nzTreeService.initTree(data);
        }
    };
    /**
     * @param {?} data
     * @param {?=} expandKeys
     * @return {?}
     */
    NzTreeComponent.prototype.handleFlattenNodes = /**
     * @param {?} data
     * @param {?=} expandKeys
     * @return {?}
     */
    function (data, expandKeys) {
        if (expandKeys === void 0) { expandKeys = []; }
        this.nzTreeService.flattenTreeData(data, expandKeys);
    };
    /**
     * @param {?} keys
     * @return {?}
     */
    NzTreeComponent.prototype.handleCheckedKeys = /**
     * @param {?} keys
     * @return {?}
     */
    function (keys) {
        this.nzTreeService.conductCheck(keys, this.nzCheckStrictly);
    };
    /**
     * @param {?=} keys
     * @return {?}
     */
    NzTreeComponent.prototype.handleExpandedKeys = /**
     * @param {?=} keys
     * @return {?}
     */
    function (keys) {
        if (keys === void 0) { keys = []; }
        this.nzTreeService.conductExpandedKeys(keys);
    };
    /**
     * @param {?} keys
     * @param {?} isMulti
     * @return {?}
     */
    NzTreeComponent.prototype.handleSelectedKeys = /**
     * @param {?} keys
     * @param {?} isMulti
     * @return {?}
     */
    function (keys, isMulti) {
        this.nzTreeService.conductSelectedKeys(keys, isMulti);
    };
    /**
     * @param {?} value
     * @param {?=} searchFunc
     * @return {?}
     */
    NzTreeComponent.prototype.handleSearchValue = /**
     * @param {?} value
     * @param {?=} searchFunc
     * @return {?}
     */
    function (value, searchFunc) {
        var _this = this;
        /** @type {?} */
        var dataList = flattenTreeData(this.nzTreeService.rootNodes, true).map((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return v.data; }));
        /** @type {?} */
        var checkIfMatched = (/**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            if (searchFunc) {
                return searchFunc(node.origin);
            }
            return !value || !node.title.toLowerCase().includes(value.toLowerCase()) ? false : true;
        });
        dataList.forEach((/**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            v.isMatched = checkIfMatched(v);
            v.canHide = !v.isMatched;
            if (!v.isMatched) {
                v.setExpanded(false);
                _this.nzTreeService.setExpandedNodeList(v);
            }
            else {
                // expand
                _this.nzTreeService.expandNodeAllParentBySearch(v);
            }
            _this.nzTreeService.setMatchedNodeList(v);
        }));
    };
    /**
     * Handle emit event
     * @param event
     * handle each event
     */
    /**
     * Handle emit event
     * @param {?} event
     * handle each event
     * @return {?}
     */
    NzTreeComponent.prototype.eventTriggerChanged = /**
     * Handle emit event
     * @param {?} event
     * handle each event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var node = (/** @type {?} */ (event.node));
        switch (event.eventName) {
            case 'expand':
                this.renderTree();
                this.nzExpandChange.emit(event);
                break;
            case 'click':
                this.nzClick.emit(event);
                break;
            case 'dblclick':
                this.nzDblClick.emit(event);
                break;
            case 'contextmenu':
                this.nzContextMenu.emit(event);
                break;
            case 'check':
                // Render checked state with nodes' property `isChecked`
                this.nzTreeService.setCheckedNodeList(node);
                if (!this.nzCheckStrictly) {
                    this.nzTreeService.conduct(node);
                }
                // Cause check method will rerender list, so we need recover it and next the new event to user
                /** @type {?} */
                var eventNext = this.nzTreeService.formatEvent('check', node, (/** @type {?} */ (event.event)));
                this.nzCheckBoxChange.emit(eventNext);
                break;
            case 'dragstart':
                // if node is expanded
                if (node.isExpanded) {
                    node.setExpanded(!node.isExpanded);
                    this.renderTree();
                }
                this.nzOnDragStart.emit(event);
                break;
            case 'dragenter':
                /** @type {?} */
                var selectedNode = this.nzTreeService.getSelectedNode();
                if (selectedNode && selectedNode.key !== node.key && !node.isExpanded && !node.isLeaf) {
                    node.setExpanded(true);
                    this.renderTree();
                }
                this.nzOnDragEnter.emit(event);
                break;
            case 'dragover':
                this.nzOnDragOver.emit(event);
                break;
            case 'dragleave':
                this.nzOnDragLeave.emit(event);
                break;
            case 'dragend':
                this.nzOnDragEnd.emit(event);
                break;
            case 'drop':
                this.renderTree();
                this.nzOnDrop.emit(event);
                break;
        }
    };
    /**
     * Click expand icon
     */
    /**
     * Click expand icon
     * @return {?}
     */
    NzTreeComponent.prototype.renderTree = /**
     * Click expand icon
     * @return {?}
     */
    function () {
        this.handleFlattenNodes(this.nzTreeService.rootNodes, this.getExpandedNodeList().map((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return v.key; })));
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzTreeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzTreeService.flattenNodes$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.nzFlattenNodes = data;
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTreeComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.renderTreeProperties(changes);
    };
    /**
     * @return {?}
     */
    NzTreeComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.beforeInit = false;
    };
    /**
     * @return {?}
     */
    NzTreeComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzTreeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-tree',
                    exportAs: 'nzTree',
                    animations: [treeCollapseMotion],
                    template: "\n    <div role=\"tree\">\n      <input [ngStyle]=\"HIDDEN_STYLE\" />\n    </div>\n    <div [class.ant-select-tree-list]=\"nzSelectMode\" [class.ant-tree-list]=\"nzSelectMode\">\n      <div>\n        <cdk-virtual-scroll-viewport\n          *ngIf=\"nzVirtualHeight\"\n          [class.ant-select-tree-list-holder-inner]=\"nzSelectMode\"\n          [class.ant-tree-list-holder-inner]=\"nzSelectMode\"\n          [itemSize]=\"nzVirtualItemSize\"\n          [minBufferPx]=\"nzVirtualMinBufferPx\"\n          [maxBufferPx]=\"nzVirtualMaxBufferPx\"\n          [style.height]=\"nzVirtualHeight\"\n        >\n          <ng-container *cdkVirtualFor=\"let node of nzFlattenNodes; trackBy: trackByFlattenNode\">\n            <ng-template [ngTemplateOutlet]=\"nodeTemplate\" [ngTemplateOutletContext]=\"{ $implicit: node }\"></ng-template>\n          </ng-container>\n        </cdk-virtual-scroll-viewport>\n\n        <div\n          *ngIf=\"!nzVirtualHeight\"\n          [class.ant-select-tree-list-holder-inner]=\"nzSelectMode\"\n          [class.ant-tree-list-holder-inner]=\"nzSelectMode\"\n          [@.disabled]=\"beforeInit || noAnimation?.nzNoAnimation\"\n          [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n          [@treeCollapseMotion]=\"nzFlattenNodes.length\"\n        >\n          <ng-container *ngFor=\"let node of nzFlattenNodes; trackBy: trackByFlattenNode\">\n            <ng-template [ngTemplateOutlet]=\"nodeTemplate\" [ngTemplateOutletContext]=\"{ $implicit: node }\"></ng-template>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n    <ng-template #nodeTemplate let-treeNode>\n      <nz-tree-node\n        [icon]=\"treeNode.icon\"\n        [title]=\"treeNode.title\"\n        [isLoading]=\"treeNode.isLoading\"\n        [isSelected]=\"treeNode.isSelected\"\n        [isDisabled]=\"treeNode.isDisabled\"\n        [isMatched]=\"treeNode.isMatched\"\n        [isExpanded]=\"treeNode.isExpanded\"\n        [isLeaf]=\"treeNode.isLeaf\"\n        [isStart]=\"treeNode.isStart\"\n        [isEnd]=\"treeNode.isEnd\"\n        [isChecked]=\"treeNode.isChecked\"\n        [isHalfChecked]=\"treeNode.isHalfChecked\"\n        [isDisableCheckbox]=\"treeNode.isDisableCheckbox\"\n        [isSelectable]=\"treeNode.isSelectable\"\n        [canHide]=\"treeNode.canHide\"\n        [nzTreeNode]=\"treeNode\"\n        [nzSelectMode]=\"nzSelectMode\"\n        [nzShowLine]=\"nzShowLine\"\n        [nzExpandedIcon]=\"nzExpandedIcon\"\n        [nzDraggable]=\"nzDraggable\"\n        [nzCheckable]=\"nzCheckable\"\n        [nzShowExpand]=\"nzShowExpand\"\n        [nzAsyncData]=\"nzAsyncData\"\n        [nzSearchValue]=\"nzSearchValue\"\n        [nzHideUnMatched]=\"nzHideUnMatched\"\n        [nzBeforeDrop]=\"nzBeforeDrop\"\n        [nzShowIcon]=\"nzShowIcon\"\n        [nzTreeTemplate]=\"nzTreeTemplate || nzTreeTemplateChild\"\n        (nzExpandChange)=\"eventTriggerChanged($event)\"\n        (nzClick)=\"eventTriggerChanged($event)\"\n        (nzDblClick)=\"eventTriggerChanged($event)\"\n        (nzContextMenu)=\"eventTriggerChanged($event)\"\n        (nzCheckBoxChange)=\"eventTriggerChanged($event)\"\n        (nzOnDragStart)=\"eventTriggerChanged($event)\"\n        (nzOnDragEnter)=\"eventTriggerChanged($event)\"\n        (nzOnDragOver)=\"eventTriggerChanged($event)\"\n        (nzOnDragLeave)=\"eventTriggerChanged($event)\"\n        (nzOnDragEnd)=\"eventTriggerChanged($event)\"\n        (nzOnDrop)=\"eventTriggerChanged($event)\"\n      >\n      </nz-tree-node>\n    </ng-template>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        NzTreeService,
                        {
                            provide: NzTreeBaseService,
                            useFactory: NzTreeServiceFactory,
                            deps: [[new SkipSelf(), new Optional(), NzTreeHigherOrderServiceToken], NzTreeService]
                        },
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzTreeComponent; })),
                            multi: true
                        }
                    ],
                    host: {
                        '[class.ant-select-tree]': "nzSelectMode",
                        '[class.ant-select-tree-show-line]': "nzSelectMode && nzShowLine",
                        '[class.ant-select-tree-icon-hide]': "nzSelectMode && !nzShowIcon",
                        '[class.ant-select-tree-block-node]': "nzSelectMode && nzBlockNode",
                        '[class.ant-tree]': "!nzSelectMode",
                        '[class.ant-tree-show-line]': "!nzSelectMode && nzShowLine",
                        '[class.ant-tree-icon-hide]': "!nzSelectMode && !nzShowIcon",
                        '[class.ant-tree-block-node]': "!nzSelectMode && nzBlockNode",
                        '[class.draggable-tree]': "nzDraggable"
                    }
                }] }
    ];
    /** @nocollapse */
    NzTreeComponent.ctorParameters = function () { return [
        { type: NzTreeBaseService },
        { type: NzConfigService },
        { type: ChangeDetectorRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzTreeComponent.propDecorators = {
        nzShowIcon: [{ type: Input }],
        nzHideUnMatched: [{ type: Input }],
        nzBlockNode: [{ type: Input }],
        nzExpandAll: [{ type: Input }],
        nzSelectMode: [{ type: Input }],
        nzCheckStrictly: [{ type: Input }],
        nzShowExpand: [{ type: Input }],
        nzShowLine: [{ type: Input }],
        nzCheckable: [{ type: Input }],
        nzAsyncData: [{ type: Input }],
        nzDraggable: [{ type: Input }],
        nzMultiple: [{ type: Input }],
        nzExpandedIcon: [{ type: Input }],
        nzVirtualItemSize: [{ type: Input }],
        nzVirtualMaxBufferPx: [{ type: Input }],
        nzVirtualMinBufferPx: [{ type: Input }],
        nzVirtualHeight: [{ type: Input }],
        nzTreeTemplate: [{ type: Input }],
        nzBeforeDrop: [{ type: Input }],
        nzData: [{ type: Input }],
        nzExpandedKeys: [{ type: Input }],
        nzSelectedKeys: [{ type: Input }],
        nzCheckedKeys: [{ type: Input }],
        nzSearchValue: [{ type: Input }],
        nzSearchFunc: [{ type: Input }],
        nzTreeTemplateChild: [{ type: ContentChild, args: ['nzTreeTemplate', { static: true },] }],
        cdkVirtualScrollViewport: [{ type: ViewChild, args: [CdkVirtualScrollViewport, { read: CdkVirtualScrollViewport },] }],
        nzExpandedKeysChange: [{ type: Output }],
        nzSelectedKeysChange: [{ type: Output }],
        nzCheckedKeysChange: [{ type: Output }],
        nzSearchValueChange: [{ type: Output }],
        nzClick: [{ type: Output }],
        nzDblClick: [{ type: Output }],
        nzContextMenu: [{ type: Output }],
        nzCheckBoxChange: [{ type: Output }],
        nzExpandChange: [{ type: Output }],
        nzOnDragStart: [{ type: Output }],
        nzOnDragEnter: [{ type: Output }],
        nzOnDragOver: [{ type: Output }],
        nzOnDragLeave: [{ type: Output }],
        nzOnDrop: [{ type: Output }],
        nzOnDragEnd: [{ type: Output }]
    };
    __decorate([
        InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", Boolean)
    ], NzTreeComponent.prototype, "nzShowIcon", void 0);
    __decorate([
        InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", Boolean)
    ], NzTreeComponent.prototype, "nzHideUnMatched", void 0);
    __decorate([
        InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", Boolean)
    ], NzTreeComponent.prototype, "nzBlockNode", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzExpandAll", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzSelectMode", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzCheckStrictly", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTreeComponent.prototype, "nzShowExpand", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzShowLine", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzCheckable", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzAsyncData", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTreeComponent.prototype, "nzDraggable", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeComponent.prototype, "nzMultiple", void 0);
    return NzTreeComponent;
}(NzTreeBase));
export { NzTreeComponent };
if (false) {
    /** @type {?} */
    NzTreeComponent.ngAcceptInputType_nzShowIcon;
    /** @type {?} */
    NzTreeComponent.ngAcceptInputType_nzHideUnMatched;
    /** @type {?} */
    NzTreeComponent.ngAcceptInputType_nzBlockNode;
    /** @type {?} */
    NzTreeComponent.ngAcceptInputType_nzExpandAll;
    /** @type {?} */
    NzTreeComponent.ngAcceptInputType_nzSelectMode;
    /** @type {?} */
    NzTreeComponent.ngAcceptInputType_nzCheckStrictly;
    /** @type {?} */
    NzTreeComponent.ngAcceptInputType_nzShowExpand;
    /** @type {?} */
    NzTreeComponent.ngAcceptInputType_nzShowLine;
    /** @type {?} */
    NzTreeComponent.ngAcceptInputType_nzCheckable;
    /** @type {?} */
    NzTreeComponent.ngAcceptInputType_nzAsyncData;
    /** @type {?} */
    NzTreeComponent.ngAcceptInputType_nzDraggable;
    /** @type {?} */
    NzTreeComponent.ngAcceptInputType_nzMultiple;
    /** @type {?} */
    NzTreeComponent.prototype.nzShowIcon;
    /** @type {?} */
    NzTreeComponent.prototype.nzHideUnMatched;
    /** @type {?} */
    NzTreeComponent.prototype.nzBlockNode;
    /** @type {?} */
    NzTreeComponent.prototype.nzExpandAll;
    /** @type {?} */
    NzTreeComponent.prototype.nzSelectMode;
    /** @type {?} */
    NzTreeComponent.prototype.nzCheckStrictly;
    /** @type {?} */
    NzTreeComponent.prototype.nzShowExpand;
    /** @type {?} */
    NzTreeComponent.prototype.nzShowLine;
    /** @type {?} */
    NzTreeComponent.prototype.nzCheckable;
    /** @type {?} */
    NzTreeComponent.prototype.nzAsyncData;
    /** @type {?} */
    NzTreeComponent.prototype.nzDraggable;
    /** @type {?} */
    NzTreeComponent.prototype.nzMultiple;
    /** @type {?} */
    NzTreeComponent.prototype.nzExpandedIcon;
    /** @type {?} */
    NzTreeComponent.prototype.nzVirtualItemSize;
    /** @type {?} */
    NzTreeComponent.prototype.nzVirtualMaxBufferPx;
    /** @type {?} */
    NzTreeComponent.prototype.nzVirtualMinBufferPx;
    /** @type {?} */
    NzTreeComponent.prototype.nzVirtualHeight;
    /** @type {?} */
    NzTreeComponent.prototype.nzTreeTemplate;
    /** @type {?} */
    NzTreeComponent.prototype.nzBeforeDrop;
    /** @type {?} */
    NzTreeComponent.prototype.nzData;
    /** @type {?} */
    NzTreeComponent.prototype.nzExpandedKeys;
    /** @type {?} */
    NzTreeComponent.prototype.nzSelectedKeys;
    /** @type {?} */
    NzTreeComponent.prototype.nzCheckedKeys;
    /** @type {?} */
    NzTreeComponent.prototype.nzSearchValue;
    /** @type {?} */
    NzTreeComponent.prototype.nzSearchFunc;
    /** @type {?} */
    NzTreeComponent.prototype.nzTreeTemplateChild;
    /** @type {?} */
    NzTreeComponent.prototype.cdkVirtualScrollViewport;
    /** @type {?} */
    NzTreeComponent.prototype.nzFlattenNodes;
    /** @type {?} */
    NzTreeComponent.prototype.beforeInit;
    /** @type {?} */
    NzTreeComponent.prototype.nzExpandedKeysChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzSelectedKeysChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzCheckedKeysChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzSearchValueChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzClick;
    /** @type {?} */
    NzTreeComponent.prototype.nzDblClick;
    /** @type {?} */
    NzTreeComponent.prototype.nzContextMenu;
    /** @type {?} */
    NzTreeComponent.prototype.nzCheckBoxChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzExpandChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragStart;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragEnter;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragOver;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragLeave;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDrop;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragEnd;
    /** @type {?} */
    NzTreeComponent.prototype.HIDDEN_STYLE;
    /** @type {?} */
    NzTreeComponent.prototype.destroy$;
    /** @type {?} */
    NzTreeComponent.prototype.onChange;
    /** @type {?} */
    NzTreeComponent.prototype.onTouched;
    /** @type {?} */
    NzTreeComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzTreeComponent.prototype.cdr;
    /** @type {?} */
    NzTreeComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RyZWUvIiwic291cmNlcyI6WyJ0cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbEUsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFFTixRQUFRLEVBQ1IsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN6RSxPQUFPLEVBQ0wsZUFBZSxFQUdmLFVBQVUsRUFDVixpQkFBaUIsRUFDakIsNkJBQTZCLEVBSTlCLE1BQU0seUJBQXlCLENBQUM7QUFFakMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0FBRS9DLE1BQU0sVUFBVSxvQkFBb0IsQ0FBQyxrQkFBcUMsRUFBRSxXQUEwQjtJQUNwRyxPQUFPLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMs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K0NBQW9DOztJQUNwQywrQ0FBbUM7O0lBQ25DLDBDQUErQzs7SUFDL0MseUNBQTRGOztJQUM1Rix1Q0FBa0Y7O0lBQ2xGLGlDQUF5RDs7SUFDekQseUNBQThDOztJQUM5Qyx5Q0FBOEM7O0lBQzlDLHdDQUE2Qzs7SUFDN0Msd0NBQWdDOztJQUNoQyx1Q0FBNkQ7O0lBQzdELDhDQUEwSTs7SUFDMUksbURBQTZIOztJQUM3SCx5Q0FBa0M7O0lBQ2xDLHFDQUFrQjs7SUFFbEIsK0NBQStGOztJQUMvRiwrQ0FBK0Y7O0lBQy9GLDhDQUE4Rjs7SUFDOUYsOENBQStFOztJQUMvRSxrQ0FBbUU7O0lBQ25FLHFDQUFzRTs7SUFDdEUsd0NBQXlFOztJQUN6RSwyQ0FBNEU7O0lBQzVFLHlDQUEwRTs7SUFDMUUsd0NBQXlFOztJQUN6RSx3Q0FBeUU7O0lBQ3pFLHVDQUF3RTs7SUFDeEUsd0NBQXlFOztJQUN6RSxtQ0FBb0U7O0lBQ3BFLHNDQUF1RTs7SUFFdkUsdUNBU0U7O0lBRUYsbUNBQXlCOztJQUV6QixtQ0FBcUQ7O0lBQ3JELG9DQUFtQzs7SUF5TWpDLDBDQUF1Qzs7Ozs7SUFDdkMsOEJBQThCOztJQUM5QixzQ0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2tpcFNlbGYsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyB0cmVlQ29sbGFwc2VNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvYW5pbWF0aW9uJztcbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9uby1hbmltYXRpb24nO1xuaW1wb3J0IHtcbiAgZmxhdHRlblRyZWVEYXRhLFxuICBOekZvcm1hdEJlZm9yZURyb3BFdmVudCxcbiAgTnpGb3JtYXRFbWl0RXZlbnQsXG4gIE56VHJlZUJhc2UsXG4gIE56VHJlZUJhc2VTZXJ2aWNlLFxuICBOelRyZWVIaWdoZXJPcmRlclNlcnZpY2VUb2tlbixcbiAgTnpUcmVlTm9kZSxcbiAgTnpUcmVlTm9kZUtleSxcbiAgTnpUcmVlTm9kZU9wdGlvbnNcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3RyZWUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnpUcmVlU2VydmljZSB9IGZyb20gJy4vdHJlZS5zZXJ2aWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIE56VHJlZVNlcnZpY2VGYWN0b3J5KGhpZ2hlck9yZGVyU2VydmljZTogTnpUcmVlQmFzZVNlcnZpY2UsIHRyZWVTZXJ2aWNlOiBOelRyZWVTZXJ2aWNlKTogTnpUcmVlQmFzZVNlcnZpY2Uge1xuICByZXR1cm4gaGlnaGVyT3JkZXJTZXJ2aWNlID8gaGlnaGVyT3JkZXJTZXJ2aWNlIDogdHJlZVNlcnZpY2U7XG59XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICd0cmVlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotdHJlZScsXG4gIGV4cG9ydEFzOiAnbnpUcmVlJyxcbiAgYW5pbWF0aW9uczogW3RyZWVDb2xsYXBzZU1vdGlvbl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiByb2xlPVwidHJlZVwiPlxuICAgICAgPGlucHV0IFtuZ1N0eWxlXT1cIkhJRERFTl9TVFlMRVwiIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBbY2xhc3MuYW50LXNlbGVjdC10cmVlLWxpc3RdPVwibnpTZWxlY3RNb2RlXCIgW2NsYXNzLmFudC10cmVlLWxpc3RdPVwibnpTZWxlY3RNb2RlXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8Y2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0XG4gICAgICAgICAgKm5nSWY9XCJuelZpcnR1YWxIZWlnaHRcIlxuICAgICAgICAgIFtjbGFzcy5hbnQtc2VsZWN0LXRyZWUtbGlzdC1ob2xkZXItaW5uZXJdPVwibnpTZWxlY3RNb2RlXCJcbiAgICAgICAgICBbY2xhc3MuYW50LXRyZWUtbGlzdC1ob2xkZXItaW5uZXJdPVwibnpTZWxlY3RNb2RlXCJcbiAgICAgICAgICBbaXRlbVNpemVdPVwibnpWaXJ0dWFsSXRlbVNpemVcIlxuICAgICAgICAgIFttaW5CdWZmZXJQeF09XCJuelZpcnR1YWxNaW5CdWZmZXJQeFwiXG4gICAgICAgICAgW21heEJ1ZmZlclB4XT1cIm56VmlydHVhbE1heEJ1ZmZlclB4XCJcbiAgICAgICAgICBbc3R5bGUuaGVpZ2h0XT1cIm56VmlydHVhbEhlaWdodFwiXG4gICAgICAgID5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpjZGtWaXJ0dWFsRm9yPVwibGV0IG5vZGUgb2YgbnpGbGF0dGVuTm9kZXM7IHRyYWNrQnk6IHRyYWNrQnlGbGF0dGVuTm9kZVwiPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm5vZGVUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogbm9kZSB9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQ+XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgICpuZ0lmPVwiIW56VmlydHVhbEhlaWdodFwiXG4gICAgICAgICAgW2NsYXNzLmFudC1zZWxlY3QtdHJlZS1saXN0LWhvbGRlci1pbm5lcl09XCJuelNlbGVjdE1vZGVcIlxuICAgICAgICAgIFtjbGFzcy5hbnQtdHJlZS1saXN0LWhvbGRlci1pbm5lcl09XCJuelNlbGVjdE1vZGVcIlxuICAgICAgICAgIFtALmRpc2FibGVkXT1cImJlZm9yZUluaXQgfHwgbm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxuICAgICAgICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcbiAgICAgICAgICBbQHRyZWVDb2xsYXBzZU1vdGlvbl09XCJuekZsYXR0ZW5Ob2Rlcy5sZW5ndGhcIlxuICAgICAgICA+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbm9kZSBvZiBuekZsYXR0ZW5Ob2RlczsgdHJhY2tCeTogdHJhY2tCeUZsYXR0ZW5Ob2RlXCI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwibm9kZVRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBub2RlIH1cIj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxuZy10ZW1wbGF0ZSAjbm9kZVRlbXBsYXRlIGxldC10cmVlTm9kZT5cbiAgICAgIDxuei10cmVlLW5vZGVcbiAgICAgICAgW2ljb25dPVwidHJlZU5vZGUuaWNvblwiXG4gICAgICAgIFt0aXRsZV09XCJ0cmVlTm9kZS50aXRsZVwiXG4gICAgICAgIFtpc0xvYWRpbmddPVwidHJlZU5vZGUuaXNMb2FkaW5nXCJcbiAgICAgICAgW2lzU2VsZWN0ZWRdPVwidHJlZU5vZGUuaXNTZWxlY3RlZFwiXG4gICAgICAgIFtpc0Rpc2FibGVkXT1cInRyZWVOb2RlLmlzRGlzYWJsZWRcIlxuICAgICAgICBbaXNNYXRjaGVkXT1cInRyZWVOb2RlLmlzTWF0Y2hlZFwiXG4gICAgICAgIFtpc0V4cGFuZGVkXT1cInRyZWVOb2RlLmlzRXhwYW5kZWRcIlxuICAgICAgICBbaXNMZWFmXT1cInRyZWVOb2RlLmlzTGVhZlwiXG4gICAgICAgIFtpc1N0YXJ0XT1cInRyZWVOb2RlLmlzU3RhcnRcIlxuICAgICAgICBbaXNFbmRdPVwidHJlZU5vZGUuaXNFbmRcIlxuICAgICAgICBbaXNDaGVja2VkXT1cInRyZWVOb2RlLmlzQ2hlY2tlZFwiXG4gICAgICAgIFtpc0hhbGZDaGVja2VkXT1cInRyZWVOb2RlLmlzSGFsZkNoZWNrZWRcIlxuICAgICAgICBbaXNEaXNhYmxlQ2hlY2tib3hdPVwidHJlZU5vZGUuaXNEaXNhYmxlQ2hlY2tib3hcIlxuICAgICAgICBbaXNTZWxlY3RhYmxlXT1cInRyZWVOb2RlLmlzU2VsZWN0YWJsZVwiXG4gICAgICAgIFtjYW5IaWRlXT1cInRyZWVOb2RlLmNhbkhpZGVcIlxuICAgICAgICBbbnpUcmVlTm9kZV09XCJ0cmVlTm9kZVwiXG4gICAgICAgIFtuelNlbGVjdE1vZGVdPVwibnpTZWxlY3RNb2RlXCJcbiAgICAgICAgW256U2hvd0xpbmVdPVwibnpTaG93TGluZVwiXG4gICAgICAgIFtuekV4cGFuZGVkSWNvbl09XCJuekV4cGFuZGVkSWNvblwiXG4gICAgICAgIFtuekRyYWdnYWJsZV09XCJuekRyYWdnYWJsZVwiXG4gICAgICAgIFtuekNoZWNrYWJsZV09XCJuekNoZWNrYWJsZVwiXG4gICAgICAgIFtuelNob3dFeHBhbmRdPVwibnpTaG93RXhwYW5kXCJcbiAgICAgICAgW256QXN5bmNEYXRhXT1cIm56QXN5bmNEYXRhXCJcbiAgICAgICAgW256U2VhcmNoVmFsdWVdPVwibnpTZWFyY2hWYWx1ZVwiXG4gICAgICAgIFtuekhpZGVVbk1hdGNoZWRdPVwibnpIaWRlVW5NYXRjaGVkXCJcbiAgICAgICAgW256QmVmb3JlRHJvcF09XCJuekJlZm9yZURyb3BcIlxuICAgICAgICBbbnpTaG93SWNvbl09XCJuelNob3dJY29uXCJcbiAgICAgICAgW256VHJlZVRlbXBsYXRlXT1cIm56VHJlZVRlbXBsYXRlIHx8IG56VHJlZVRlbXBsYXRlQ2hpbGRcIlxuICAgICAgICAobnpFeHBhbmRDaGFuZ2UpPVwiZXZlbnRUcmlnZ2VyQ2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgICAgKG56Q2xpY2spPVwiZXZlbnRUcmlnZ2VyQ2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgICAgKG56RGJsQ2xpY2spPVwiZXZlbnRUcmlnZ2VyQ2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgICAgKG56Q29udGV4dE1lbnUpPVwiZXZlbnRUcmlnZ2VyQ2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgICAgKG56Q2hlY2tCb3hDaGFuZ2UpPVwiZXZlbnRUcmlnZ2VyQ2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgICAgKG56T25EcmFnU3RhcnQpPVwiZXZlbnRUcmlnZ2VyQ2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgICAgKG56T25EcmFnRW50ZXIpPVwiZXZlbnRUcmlnZ2VyQ2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgICAgKG56T25EcmFnT3Zlcik9XCJldmVudFRyaWdnZXJDaGFuZ2VkKCRldmVudClcIlxuICAgICAgICAobnpPbkRyYWdMZWF2ZSk9XCJldmVudFRyaWdnZXJDaGFuZ2VkKCRldmVudClcIlxuICAgICAgICAobnpPbkRyYWdFbmQpPVwiZXZlbnRUcmlnZ2VyQ2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgICAgKG56T25Ecm9wKT1cImV2ZW50VHJpZ2dlckNoYW5nZWQoJGV2ZW50KVwiXG4gICAgICA+XG4gICAgICA8L256LXRyZWUtbm9kZT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTnpUcmVlU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOelRyZWVCYXNlU2VydmljZSxcbiAgICAgIHVzZUZhY3Rvcnk6IE56VHJlZVNlcnZpY2VGYWN0b3J5LFxuICAgICAgZGVwczogW1tuZXcgU2tpcFNlbGYoKSwgbmV3IE9wdGlvbmFsKCksIE56VHJlZUhpZ2hlck9yZGVyU2VydmljZVRva2VuXSwgTnpUcmVlU2VydmljZV1cbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpUcmVlQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXRyZWVdJzogYG56U2VsZWN0TW9kZWAsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXRyZWUtc2hvdy1saW5lXSc6IGBuelNlbGVjdE1vZGUgJiYgbnpTaG93TGluZWAsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXRyZWUtaWNvbi1oaWRlXSc6IGBuelNlbGVjdE1vZGUgJiYgIW56U2hvd0ljb25gLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC10cmVlLWJsb2NrLW5vZGVdJzogYG56U2VsZWN0TW9kZSAmJiBuekJsb2NrTm9kZWAsXG4gICAgJ1tjbGFzcy5hbnQtdHJlZV0nOiBgIW56U2VsZWN0TW9kZWAsXG4gICAgJ1tjbGFzcy5hbnQtdHJlZS1zaG93LWxpbmVdJzogYCFuelNlbGVjdE1vZGUgJiYgbnpTaG93TGluZWAsXG4gICAgJ1tjbGFzcy5hbnQtdHJlZS1pY29uLWhpZGVdJzogYCFuelNlbGVjdE1vZGUgJiYgIW56U2hvd0ljb25gLFxuICAgICdbY2xhc3MuYW50LXRyZWUtYmxvY2stbm9kZV0nOiBgIW56U2VsZWN0TW9kZSAmJiBuekJsb2NrTm9kZWAsXG4gICAgJ1tjbGFzcy5kcmFnZ2FibGUtdHJlZV0nOiBgbnpEcmFnZ2FibGVgXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpUcmVlQ29tcG9uZW50IGV4dGVuZHMgTnpUcmVlQmFzZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2hvd0ljb246IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256SGlkZVVuTWF0Y2hlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpCbG9ja05vZGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RXhwYW5kQWxsOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNlbGVjdE1vZGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256Q2hlY2tTdHJpY3RseTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTaG93RXhwYW5kOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNob3dMaW5lOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekNoZWNrYWJsZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpBc3luY0RhdGE6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RHJhZ2dhYmxlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uek11bHRpcGxlOiBCb29sZWFuSW5wdXQ7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgbnpTaG93SWNvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBuekhpZGVVbk1hdGNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgbnpCbG9ja05vZGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RXhwYW5kQWxsID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNlbGVjdE1vZGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2hlY2tTdHJpY3RseSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93RXhwYW5kOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0xpbmUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2hlY2thYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFzeW5jRGF0YSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEcmFnZ2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TXVsdGlwbGUgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpFeHBhbmRlZEljb24/OiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZTsgb3JpZ2luOiBOelRyZWVOb2RlT3B0aW9ucyB9PjtcbiAgQElucHV0KCkgbnpWaXJ0dWFsSXRlbVNpemUgPSAyODtcbiAgQElucHV0KCkgbnpWaXJ0dWFsTWF4QnVmZmVyUHggPSA1MDA7XG4gIEBJbnB1dCgpIG56VmlydHVhbE1pbkJ1ZmZlclB4ID0gMjg7XG4gIEBJbnB1dCgpIG56VmlydHVhbEhlaWdodDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56VHJlZVRlbXBsYXRlPzogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGU7IG9yaWdpbjogTnpUcmVlTm9kZU9wdGlvbnMgfT47XG4gIEBJbnB1dCgpIG56QmVmb3JlRHJvcD86IChjb25maXJtOiBOekZvcm1hdEJlZm9yZURyb3BFdmVudCkgPT4gT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgQElucHV0KCkgbnpEYXRhOiBOelRyZWVOb2RlT3B0aW9uc1tdIHwgTnpUcmVlTm9kZVtdID0gW107XG4gIEBJbnB1dCgpIG56RXhwYW5kZWRLZXlzOiBOelRyZWVOb2RlS2V5W10gPSBbXTtcbiAgQElucHV0KCkgbnpTZWxlY3RlZEtleXM6IE56VHJlZU5vZGVLZXlbXSA9IFtdO1xuICBASW5wdXQoKSBuekNoZWNrZWRLZXlzOiBOelRyZWVOb2RlS2V5W10gPSBbXTtcbiAgQElucHV0KCkgbnpTZWFyY2hWYWx1ZT86IHN0cmluZztcbiAgQElucHV0KCkgbnpTZWFyY2hGdW5jPzogKG5vZGU6IE56VHJlZU5vZGVPcHRpb25zKSA9PiBib29sZWFuO1xuICBAQ29udGVudENoaWxkKCduelRyZWVUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIG56VHJlZVRlbXBsYXRlQ2hpbGQhOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZTsgb3JpZ2luOiBOelRyZWVOb2RlT3B0aW9ucyB9PjtcbiAgQFZpZXdDaGlsZChDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQsIHsgcmVhZDogQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0IH0pIGNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCE6IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydDtcbiAgbnpGbGF0dGVuTm9kZXM6IE56VHJlZU5vZGVbXSA9IFtdO1xuICBiZWZvcmVJbml0ID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpFeHBhbmRlZEtleXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWxlY3RlZEtleXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGVja2VkS2V5c0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZ1tdPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlYXJjaFZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpEYmxDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNvbnRleHRNZW51ID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hlY2tCb3hDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpFeHBhbmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJhZ0VudGVyID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25EcmFnT3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJhZ0xlYXZlID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25Ecm9wID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25EcmFnRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcblxuICBISURERU5fU1RZTEUgPSB7XG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgb3BhY2l0eTogMCxcbiAgICBib3JkZXI6IDAsXG4gICAgcGFkZGluZzogMCxcbiAgICBtYXJnaW46IDBcbiAgfTtcblxuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgb25DaGFuZ2U6ICh2YWx1ZTogTnpUcmVlTm9kZVtdKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcblxuICB3cml0ZVZhbHVlKHZhbHVlOiBOelRyZWVOb2RlW10pOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZU56RGF0YSh2YWx1ZSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogTnpUcmVlTm9kZVtdKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBhbGwgcHJvcGVydGllcyBvZiBuelRyZWVcbiAgICogQHBhcmFtIGNoYW5nZXM6IGFsbCBjaGFuZ2VzIGZyb20gQElucHV0XG4gICAqL1xuICByZW5kZXJUcmVlUHJvcGVydGllcyhjaGFuZ2VzOiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KTogdm9pZCB7XG4gICAgbGV0IHVzZURlZmF1bHRFeHBhbmRlZEtleXMgPSBmYWxzZTtcbiAgICBsZXQgZXhwYW5kQWxsID0gZmFsc2U7XG4gICAgY29uc3QgeyBuekRhdGEsIG56RXhwYW5kZWRLZXlzLCBuelNlbGVjdGVkS2V5cywgbnpDaGVja2VkS2V5cywgbnpDaGVja1N0cmljdGx5LCBuekV4cGFuZEFsbCwgbnpNdWx0aXBsZSwgbnpTZWFyY2hWYWx1ZSB9ID0gY2hhbmdlcztcblxuICAgIGlmIChuekV4cGFuZEFsbCkge1xuICAgICAgdXNlRGVmYXVsdEV4cGFuZGVkS2V5cyA9IHRydWU7XG4gICAgICBleHBhbmRBbGwgPSB0aGlzLm56RXhwYW5kQWxsO1xuICAgIH1cblxuICAgIGlmIChuek11bHRpcGxlKSB7XG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaXNNdWx0aXBsZSA9IHRoaXMubnpNdWx0aXBsZTtcbiAgICB9XG5cbiAgICBpZiAobnpDaGVja1N0cmljdGx5KSB7XG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaXNDaGVja1N0cmljdGx5ID0gdGhpcy5uekNoZWNrU3RyaWN0bHk7XG4gICAgfVxuXG4gICAgaWYgKG56RGF0YSkge1xuICAgICAgdGhpcy5oYW5kbGVOekRhdGEodGhpcy5uekRhdGEpO1xuICAgIH1cblxuICAgIGlmIChuekNoZWNrZWRLZXlzKSB7XG4gICAgICB0aGlzLmhhbmRsZUNoZWNrZWRLZXlzKHRoaXMubnpDaGVja2VkS2V5cyk7XG4gICAgfVxuXG4gICAgaWYgKG56Q2hlY2tTdHJpY3RseSkge1xuICAgICAgdGhpcy5oYW5kbGVDaGVja2VkS2V5cyhudWxsKTtcbiAgICB9XG5cbiAgICBpZiAobnpFeHBhbmRlZEtleXMgfHwgbnpFeHBhbmRBbGwpIHtcbiAgICAgIHVzZURlZmF1bHRFeHBhbmRlZEtleXMgPSB0cnVlO1xuICAgICAgdGhpcy5oYW5kbGVFeHBhbmRlZEtleXMoZXhwYW5kQWxsIHx8IHRoaXMubnpFeHBhbmRlZEtleXMpO1xuICAgIH1cblxuICAgIGlmIChuelNlbGVjdGVkS2V5cykge1xuICAgICAgdGhpcy5oYW5kbGVTZWxlY3RlZEtleXModGhpcy5uelNlbGVjdGVkS2V5cywgdGhpcy5uek11bHRpcGxlKTtcbiAgICB9XG5cbiAgICBpZiAobnpTZWFyY2hWYWx1ZSkge1xuICAgICAgaWYgKCEobnpTZWFyY2hWYWx1ZS5maXJzdENoYW5nZSAmJiAhdGhpcy5uelNlYXJjaFZhbHVlKSkge1xuICAgICAgICB1c2VEZWZhdWx0RXhwYW5kZWRLZXlzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFuZGxlU2VhcmNoVmFsdWUobnpTZWFyY2hWYWx1ZS5jdXJyZW50VmFsdWUsIHRoaXMubnpTZWFyY2hGdW5jKTtcbiAgICAgICAgdGhpcy5uelNlYXJjaFZhbHVlQ2hhbmdlLmVtaXQodGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdzZWFyY2gnLCBudWxsLCBudWxsKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZmxhdHRlbiBkYXRhXG4gICAgY29uc3QgY3VycmVudEV4cGFuZGVkS2V5cyA9IHRoaXMuZ2V0RXhwYW5kZWROb2RlTGlzdCgpLm1hcCh2ID0+IHYua2V5KTtcbiAgICBjb25zdCBuZXdFeHBhbmRlZEtleXMgPSB1c2VEZWZhdWx0RXhwYW5kZWRLZXlzID8gZXhwYW5kQWxsIHx8IHRoaXMubnpFeHBhbmRlZEtleXMgOiBjdXJyZW50RXhwYW5kZWRLZXlzO1xuICAgIHRoaXMuaGFuZGxlRmxhdHRlbk5vZGVzKHRoaXMubnpUcmVlU2VydmljZS5yb290Tm9kZXMsIG5ld0V4cGFuZGVkS2V5cyk7XG4gIH1cblxuICB0cmFja0J5RmxhdHRlbk5vZGUoXzogbnVtYmVyLCBub2RlOiBOelRyZWVOb2RlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbm9kZS5rZXk7XG4gIH1cbiAgLy8gRGVhbCB3aXRoIHByb3BlcnRpZXNcbiAgLyoqXG4gICAqIG56RGF0YVxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICovXG4gIGhhbmRsZU56RGF0YSh2YWx1ZTogTnpTYWZlQW55W10pOiB2b2lkIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvZXJjZVRyZWVOb2Rlcyh2YWx1ZSk7XG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaW5pdFRyZWUoZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRmxhdHRlbk5vZGVzKGRhdGE6IE56VHJlZU5vZGVbXSwgZXhwYW5kS2V5czogTnpUcmVlTm9kZUtleVtdIHwgdHJ1ZSA9IFtdKTogdm9pZCB7XG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlLmZsYXR0ZW5UcmVlRGF0YShkYXRhLCBleHBhbmRLZXlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoZWNrZWRLZXlzKGtleXM6IE56VHJlZU5vZGVLZXlbXSB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLm56VHJlZVNlcnZpY2UuY29uZHVjdENoZWNrKGtleXMsIHRoaXMubnpDaGVja1N0cmljdGx5KTtcbiAgfVxuXG4gIGhhbmRsZUV4cGFuZGVkS2V5cyhrZXlzOiBOelRyZWVOb2RlS2V5W10gfCB0cnVlID0gW10pOiB2b2lkIHtcbiAgICB0aGlzLm56VHJlZVNlcnZpY2UuY29uZHVjdEV4cGFuZGVkS2V5cyhrZXlzKTtcbiAgfVxuXG4gIGhhbmRsZVNlbGVjdGVkS2V5cyhrZXlzOiBOelRyZWVOb2RlS2V5W10sIGlzTXVsdGk6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm56VHJlZVNlcnZpY2UuY29uZHVjdFNlbGVjdGVkS2V5cyhrZXlzLCBpc011bHRpKTtcbiAgfVxuXG4gIGhhbmRsZVNlYXJjaFZhbHVlKHZhbHVlOiBzdHJpbmcsIHNlYXJjaEZ1bmM/OiAobm9kZTogTnpUcmVlTm9kZU9wdGlvbnMpID0+IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBkYXRhTGlzdCA9IGZsYXR0ZW5UcmVlRGF0YSh0aGlzLm56VHJlZVNlcnZpY2Uucm9vdE5vZGVzLCB0cnVlKS5tYXAodiA9PiB2LmRhdGEpO1xuICAgIGNvbnN0IGNoZWNrSWZNYXRjaGVkID0gKG5vZGU6IE56VHJlZU5vZGUpOiBib29sZWFuID0+IHtcbiAgICAgIGlmIChzZWFyY2hGdW5jKSB7XG4gICAgICAgIHJldHVybiBzZWFyY2hGdW5jKG5vZGUub3JpZ2luKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAhdmFsdWUgfHwgIW5vZGUudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh2YWx1ZS50b0xvd2VyQ2FzZSgpKSA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9O1xuICAgIGRhdGFMaXN0LmZvckVhY2godiA9PiB7XG4gICAgICB2LmlzTWF0Y2hlZCA9IGNoZWNrSWZNYXRjaGVkKHYpO1xuICAgICAgdi5jYW5IaWRlID0gIXYuaXNNYXRjaGVkO1xuICAgICAgaWYgKCF2LmlzTWF0Y2hlZCkge1xuICAgICAgICB2LnNldEV4cGFuZGVkKGZhbHNlKTtcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNldEV4cGFuZGVkTm9kZUxpc3Qodik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBleHBhbmRcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmV4cGFuZE5vZGVBbGxQYXJlbnRCeVNlYXJjaCh2KTtcbiAgICAgIH1cbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5zZXRNYXRjaGVkTm9kZUxpc3Qodik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGVtaXQgZXZlbnRcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqIGhhbmRsZSBlYWNoIGV2ZW50XG4gICAqL1xuICBldmVudFRyaWdnZXJDaGFuZ2VkKGV2ZW50OiBOekZvcm1hdEVtaXRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IG5vZGUgPSBldmVudC5ub2RlITtcbiAgICBzd2l0Y2ggKGV2ZW50LmV2ZW50TmFtZSkge1xuICAgICAgY2FzZSAnZXhwYW5kJzpcbiAgICAgICAgdGhpcy5yZW5kZXJUcmVlKCk7XG4gICAgICAgIHRoaXMubnpFeHBhbmRDaGFuZ2UuZW1pdChldmVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2xpY2snOlxuICAgICAgICB0aGlzLm56Q2xpY2suZW1pdChldmVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGJsY2xpY2snOlxuICAgICAgICB0aGlzLm56RGJsQ2xpY2suZW1pdChldmVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY29udGV4dG1lbnUnOlxuICAgICAgICB0aGlzLm56Q29udGV4dE1lbnUuZW1pdChldmVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2hlY2snOlxuICAgICAgICAvLyBSZW5kZXIgY2hlY2tlZCBzdGF0ZSB3aXRoIG5vZGVzJyBwcm9wZXJ0eSBgaXNDaGVja2VkYFxuICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2V0Q2hlY2tlZE5vZGVMaXN0KG5vZGUpO1xuICAgICAgICBpZiAoIXRoaXMubnpDaGVja1N0cmljdGx5KSB7XG4gICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNvbmR1Y3Qobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2F1c2UgY2hlY2sgbWV0aG9kIHdpbGwgcmVyZW5kZXIgbGlzdCwgc28gd2UgbmVlZCByZWNvdmVyIGl0IGFuZCBuZXh0IHRoZSBuZXcgZXZlbnQgdG8gdXNlclxuICAgICAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2NoZWNrJywgbm9kZSwgZXZlbnQuZXZlbnQhKTtcbiAgICAgICAgdGhpcy5uekNoZWNrQm94Q2hhbmdlLmVtaXQoZXZlbnROZXh0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkcmFnc3RhcnQnOlxuICAgICAgICAvLyBpZiBub2RlIGlzIGV4cGFuZGVkXG4gICAgICAgIGlmIChub2RlLmlzRXhwYW5kZWQpIHtcbiAgICAgICAgICBub2RlLnNldEV4cGFuZGVkKCFub2RlLmlzRXhwYW5kZWQpO1xuICAgICAgICAgIHRoaXMucmVuZGVyVHJlZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubnpPbkRyYWdTdGFydC5lbWl0KGV2ZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkcmFnZW50ZXInOlxuICAgICAgICBjb25zdCBzZWxlY3RlZE5vZGUgPSB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0U2VsZWN0ZWROb2RlKCk7XG4gICAgICAgIGlmIChzZWxlY3RlZE5vZGUgJiYgc2VsZWN0ZWROb2RlLmtleSAhPT0gbm9kZS5rZXkgJiYgIW5vZGUuaXNFeHBhbmRlZCAmJiAhbm9kZS5pc0xlYWYpIHtcbiAgICAgICAgICBub2RlLnNldEV4cGFuZGVkKHRydWUpO1xuICAgICAgICAgIHRoaXMucmVuZGVyVHJlZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubnpPbkRyYWdFbnRlci5lbWl0KGV2ZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkcmFnb3Zlcic6XG4gICAgICAgIHRoaXMubnpPbkRyYWdPdmVyLmVtaXQoZXZlbnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RyYWdsZWF2ZSc6XG4gICAgICAgIHRoaXMubnpPbkRyYWdMZWF2ZS5lbWl0KGV2ZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkcmFnZW5kJzpcbiAgICAgICAgdGhpcy5uek9uRHJhZ0VuZC5lbWl0KGV2ZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkcm9wJzpcbiAgICAgICAgdGhpcy5yZW5kZXJUcmVlKCk7XG4gICAgICAgIHRoaXMubnpPbkRyb3AuZW1pdChldmVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGljayBleHBhbmQgaWNvblxuICAgKi9cbiAgcmVuZGVyVHJlZSgpOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZUZsYXR0ZW5Ob2RlcyhcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5yb290Tm9kZXMsXG4gICAgICB0aGlzLmdldEV4cGFuZGVkTm9kZUxpc3QoKS5tYXAodiA9PiB2LmtleSlcbiAgICApO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIC8vIEhhbmRsZSBlbWl0IGV2ZW50IGVuZFxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG56VHJlZVNlcnZpY2U6IE56VHJlZUJhc2VTZXJ2aWNlLFxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXG4gICkge1xuICAgIHN1cGVyKG56VHJlZVNlcnZpY2UpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlLmZsYXR0ZW5Ob2RlcyQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIHRoaXMubnpGbGF0dGVuTm9kZXMgPSBkYXRhO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJUcmVlUHJvcGVydGllcyhjaGFuZ2VzKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmJlZm9yZUluaXQgPSBmYWxzZTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19