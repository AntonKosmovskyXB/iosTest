/**
 * @fileoverview added by tsickle
 * Generated from: tree.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
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
const NZ_CONFIG_COMPONENT_NAME = 'tree';
export class NzTreeComponent extends NzTreeBase {
    // Handle emit event end
    /**
     * @param {?} nzTreeService
     * @param {?} nzConfigService
     * @param {?} cdr
     * @param {?=} noAnimation
     */
    constructor(nzTreeService, nzConfigService, cdr, noAnimation) {
        super(nzTreeService);
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.nzShowIcon = false;
        this.nzHideUnMatched = false;
        this.nzBlockNode = false;
        this.nzExpandAll = false;
        this.nzSelectMode = false;
        this.nzCheckStrictly = false;
        this.nzShowExpand = true;
        this.nzShowLine = false;
        this.nzCheckable = false;
        this.nzAsyncData = false;
        this.nzDraggable = false;
        this.nzMultiple = false;
        this.nzVirtualItemSize = 28;
        this.nzVirtualMaxBufferPx = 500;
        this.nzVirtualMinBufferPx = 28;
        this.nzVirtualHeight = null;
        this.nzData = [];
        this.nzExpandedKeys = [];
        this.nzSelectedKeys = [];
        this.nzCheckedKeys = [];
        this.nzFlattenNodes = [];
        this.beforeInit = true;
        this.nzExpandedKeysChange = new EventEmitter();
        this.nzSelectedKeysChange = new EventEmitter();
        this.nzCheckedKeysChange = new EventEmitter();
        this.nzSearchValueChange = new EventEmitter();
        this.nzClick = new EventEmitter();
        this.nzDblClick = new EventEmitter();
        this.nzContextMenu = new EventEmitter();
        this.nzCheckBoxChange = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
        this.nzOnDragStart = new EventEmitter();
        this.nzOnDragEnter = new EventEmitter();
        this.nzOnDragOver = new EventEmitter();
        this.nzOnDragLeave = new EventEmitter();
        this.nzOnDrop = new EventEmitter();
        this.nzOnDragEnd = new EventEmitter();
        this.HIDDEN_STYLE = {
            width: 0,
            height: 0,
            display: 'flex',
            overflow: 'hidden',
            opacity: 0,
            border: 0,
            padding: 0,
            margin: 0
        };
        this.destroy$ = new Subject();
        this.onChange = (/**
         * @return {?}
         */
        () => null);
        this.onTouched = (/**
         * @return {?}
         */
        () => null);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.handleNzData(value);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Render all properties of nzTree
     * @param {?} changes
     * @return {?}
     */
    renderTreeProperties(changes) {
        /** @type {?} */
        let useDefaultExpandedKeys = false;
        /** @type {?} */
        let expandAll = false;
        const { nzData, nzExpandedKeys, nzSelectedKeys, nzCheckedKeys, nzCheckStrictly, nzExpandAll, nzMultiple, nzSearchValue } = changes;
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
        const currentExpandedKeys = this.getExpandedNodeList().map((/**
         * @param {?} v
         * @return {?}
         */
        v => v.key));
        /** @type {?} */
        const newExpandedKeys = useDefaultExpandedKeys ? expandAll || this.nzExpandedKeys : currentExpandedKeys;
        this.handleFlattenNodes(this.nzTreeService.rootNodes, newExpandedKeys);
    }
    /**
     * @param {?} _
     * @param {?} node
     * @return {?}
     */
    trackByFlattenNode(_, node) {
        return node.key;
    }
    // Deal with properties
    /**
     * nzData
     * @param {?} value
     * @return {?}
     */
    handleNzData(value) {
        if (Array.isArray(value)) {
            /** @type {?} */
            const data = this.coerceTreeNodes(value);
            this.nzTreeService.initTree(data);
        }
    }
    /**
     * @param {?} data
     * @param {?=} expandKeys
     * @return {?}
     */
    handleFlattenNodes(data, expandKeys = []) {
        this.nzTreeService.flattenTreeData(data, expandKeys);
    }
    /**
     * @param {?} keys
     * @return {?}
     */
    handleCheckedKeys(keys) {
        this.nzTreeService.conductCheck(keys, this.nzCheckStrictly);
    }
    /**
     * @param {?=} keys
     * @return {?}
     */
    handleExpandedKeys(keys = []) {
        this.nzTreeService.conductExpandedKeys(keys);
    }
    /**
     * @param {?} keys
     * @param {?} isMulti
     * @return {?}
     */
    handleSelectedKeys(keys, isMulti) {
        this.nzTreeService.conductSelectedKeys(keys, isMulti);
    }
    /**
     * @param {?} value
     * @param {?=} searchFunc
     * @return {?}
     */
    handleSearchValue(value, searchFunc) {
        /** @type {?} */
        const dataList = flattenTreeData(this.nzTreeService.rootNodes, true).map((/**
         * @param {?} v
         * @return {?}
         */
        v => v.data));
        /** @type {?} */
        const checkIfMatched = (/**
         * @param {?} node
         * @return {?}
         */
        (node) => {
            if (searchFunc) {
                return searchFunc(node.origin);
            }
            return !value || !node.title.toLowerCase().includes(value.toLowerCase()) ? false : true;
        });
        dataList.forEach((/**
         * @param {?} v
         * @return {?}
         */
        v => {
            v.isMatched = checkIfMatched(v);
            v.canHide = !v.isMatched;
            if (!v.isMatched) {
                v.setExpanded(false);
                this.nzTreeService.setExpandedNodeList(v);
            }
            else {
                // expand
                this.nzTreeService.expandNodeAllParentBySearch(v);
            }
            this.nzTreeService.setMatchedNodeList(v);
        }));
    }
    /**
     * Handle emit event
     * @param {?} event
     * handle each event
     * @return {?}
     */
    eventTriggerChanged(event) {
        /** @type {?} */
        const node = (/** @type {?} */ (event.node));
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
                const eventNext = this.nzTreeService.formatEvent('check', node, (/** @type {?} */ (event.event)));
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
                const selectedNode = this.nzTreeService.getSelectedNode();
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
    }
    /**
     * Click expand icon
     * @return {?}
     */
    renderTree() {
        this.handleFlattenNodes(this.nzTreeService.rootNodes, this.getExpandedNodeList().map((/**
         * @param {?} v
         * @return {?}
         */
        v => v.key)));
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.nzTreeService.flattenNodes$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.nzFlattenNodes = data;
            this.cdr.markForCheck();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.renderTreeProperties(changes);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.beforeInit = false;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tree',
                exportAs: 'nzTree',
                animations: [treeCollapseMotion],
                template: `
    <div role="tree">
      <input [ngStyle]="HIDDEN_STYLE" />
    </div>
    <div [class.ant-select-tree-list]="nzSelectMode" [class.ant-tree-list]="nzSelectMode">
      <div>
        <cdk-virtual-scroll-viewport
          *ngIf="nzVirtualHeight"
          [class.ant-select-tree-list-holder-inner]="nzSelectMode"
          [class.ant-tree-list-holder-inner]="nzSelectMode"
          [itemSize]="nzVirtualItemSize"
          [minBufferPx]="nzVirtualMinBufferPx"
          [maxBufferPx]="nzVirtualMaxBufferPx"
          [style.height]="nzVirtualHeight"
        >
          <ng-container *cdkVirtualFor="let node of nzFlattenNodes; trackBy: trackByFlattenNode">
            <ng-template [ngTemplateOutlet]="nodeTemplate" [ngTemplateOutletContext]="{ $implicit: node }"></ng-template>
          </ng-container>
        </cdk-virtual-scroll-viewport>

        <div
          *ngIf="!nzVirtualHeight"
          [class.ant-select-tree-list-holder-inner]="nzSelectMode"
          [class.ant-tree-list-holder-inner]="nzSelectMode"
          [@.disabled]="beforeInit || noAnimation?.nzNoAnimation"
          [nzNoAnimation]="noAnimation?.nzNoAnimation"
          [@treeCollapseMotion]="nzFlattenNodes.length"
        >
          <ng-container *ngFor="let node of nzFlattenNodes; trackBy: trackByFlattenNode">
            <ng-template [ngTemplateOutlet]="nodeTemplate" [ngTemplateOutletContext]="{ $implicit: node }"></ng-template>
          </ng-container>
        </div>
      </div>
    </div>
    <ng-template #nodeTemplate let-treeNode>
      <nz-tree-node
        [icon]="treeNode.icon"
        [title]="treeNode.title"
        [isLoading]="treeNode.isLoading"
        [isSelected]="treeNode.isSelected"
        [isDisabled]="treeNode.isDisabled"
        [isMatched]="treeNode.isMatched"
        [isExpanded]="treeNode.isExpanded"
        [isLeaf]="treeNode.isLeaf"
        [isStart]="treeNode.isStart"
        [isEnd]="treeNode.isEnd"
        [isChecked]="treeNode.isChecked"
        [isHalfChecked]="treeNode.isHalfChecked"
        [isDisableCheckbox]="treeNode.isDisableCheckbox"
        [isSelectable]="treeNode.isSelectable"
        [canHide]="treeNode.canHide"
        [nzTreeNode]="treeNode"
        [nzSelectMode]="nzSelectMode"
        [nzShowLine]="nzShowLine"
        [nzExpandedIcon]="nzExpandedIcon"
        [nzDraggable]="nzDraggable"
        [nzCheckable]="nzCheckable"
        [nzShowExpand]="nzShowExpand"
        [nzAsyncData]="nzAsyncData"
        [nzSearchValue]="nzSearchValue"
        [nzHideUnMatched]="nzHideUnMatched"
        [nzBeforeDrop]="nzBeforeDrop"
        [nzShowIcon]="nzShowIcon"
        [nzTreeTemplate]="nzTreeTemplate || nzTreeTemplateChild"
        (nzExpandChange)="eventTriggerChanged($event)"
        (nzClick)="eventTriggerChanged($event)"
        (nzDblClick)="eventTriggerChanged($event)"
        (nzContextMenu)="eventTriggerChanged($event)"
        (nzCheckBoxChange)="eventTriggerChanged($event)"
        (nzOnDragStart)="eventTriggerChanged($event)"
        (nzOnDragEnter)="eventTriggerChanged($event)"
        (nzOnDragOver)="eventTriggerChanged($event)"
        (nzOnDragLeave)="eventTriggerChanged($event)"
        (nzOnDragEnd)="eventTriggerChanged($event)"
        (nzOnDrop)="eventTriggerChanged($event)"
      >
      </nz-tree-node>
    </ng-template>
  `,
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
                        () => NzTreeComponent)),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-select-tree]': `nzSelectMode`,
                    '[class.ant-select-tree-show-line]': `nzSelectMode && nzShowLine`,
                    '[class.ant-select-tree-icon-hide]': `nzSelectMode && !nzShowIcon`,
                    '[class.ant-select-tree-block-node]': `nzSelectMode && nzBlockNode`,
                    '[class.ant-tree]': `!nzSelectMode`,
                    '[class.ant-tree-show-line]': `!nzSelectMode && nzShowLine`,
                    '[class.ant-tree-icon-hide]': `!nzSelectMode && !nzShowIcon`,
                    '[class.ant-tree-block-node]': `!nzSelectMode && nzBlockNode`,
                    '[class.draggable-tree]': `nzDraggable`
                }
            }] }
];
/** @nocollapse */
NzTreeComponent.ctorParameters = () => [
    { type: NzTreeBaseService },
    { type: NzConfigService },
    { type: ChangeDetectorRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RyZWUvIiwic291cmNlcyI6WyJ0cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbEUsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFFTixRQUFRLEVBQ1IsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN6RSxPQUFPLEVBQ0wsZUFBZSxFQUdmLFVBQVUsRUFDVixpQkFBaUIsRUFDakIsNkJBQTZCLEVBSTlCLE1BQU0seUJBQXlCLENBQUM7QUFFakMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0FBRS9DLE1BQU0sVUFBVSxvQkFBb0IsQ0FBQyxrQkFBcUMsRUFBRSxXQUEwQjtJQUNwRyxPQUFPLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMs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LHdDQUF5RTs7SUFDekUsMkNBQTRFOztJQUM1RSx5Q0FBMEU7O0lBQzFFLHdDQUF5RTs7SUFDekUsd0NBQXlFOztJQUN6RSx1Q0FBd0U7O0lBQ3hFLHdDQUF5RTs7SUFDekUsbUNBQW9FOztJQUNwRSxzQ0FBdUU7O0lBRXZFLHVDQVNFOztJQUVGLG1DQUF5Qjs7SUFFekIsbUNBQXFEOztJQUNyRCxvQ0FBbUM7O0lBeU1qQywwQ0FBdUM7Ozs7O0lBQ3ZDLDhCQUE4Qjs7SUFDOUIsc0NBQStEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNraXBTZWxmLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgdHJlZUNvbGxhcHNlTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbm8tYW5pbWF0aW9uJztcbmltcG9ydCB7XG4gIGZsYXR0ZW5UcmVlRGF0YSxcbiAgTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQsXG4gIE56Rm9ybWF0RW1pdEV2ZW50LFxuICBOelRyZWVCYXNlLFxuICBOelRyZWVCYXNlU2VydmljZSxcbiAgTnpUcmVlSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4sXG4gIE56VHJlZU5vZGUsXG4gIE56VHJlZU5vZGVLZXksXG4gIE56VHJlZU5vZGVPcHRpb25zXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90cmVlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE56VHJlZVNlcnZpY2UgfSBmcm9tICcuL3RyZWUuc2VydmljZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBOelRyZWVTZXJ2aWNlRmFjdG9yeShoaWdoZXJPcmRlclNlcnZpY2U6IE56VHJlZUJhc2VTZXJ2aWNlLCB0cmVlU2VydmljZTogTnpUcmVlU2VydmljZSk6IE56VHJlZUJhc2VTZXJ2aWNlIHtcbiAgcmV0dXJuIGhpZ2hlck9yZGVyU2VydmljZSA/IGhpZ2hlck9yZGVyU2VydmljZSA6IHRyZWVTZXJ2aWNlO1xufVxuXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAndHJlZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXRyZWUnLFxuICBleHBvcnRBczogJ256VHJlZScsXG4gIGFuaW1hdGlvbnM6IFt0cmVlQ29sbGFwc2VNb3Rpb25dLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgcm9sZT1cInRyZWVcIj5cbiAgICAgIDxpbnB1dCBbbmdTdHlsZV09XCJISURERU5fU1RZTEVcIiAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgW2NsYXNzLmFudC1zZWxlY3QtdHJlZS1saXN0XT1cIm56U2VsZWN0TW9kZVwiIFtjbGFzcy5hbnQtdHJlZS1saXN0XT1cIm56U2VsZWN0TW9kZVwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydFxuICAgICAgICAgICpuZ0lmPVwibnpWaXJ0dWFsSGVpZ2h0XCJcbiAgICAgICAgICBbY2xhc3MuYW50LXNlbGVjdC10cmVlLWxpc3QtaG9sZGVyLWlubmVyXT1cIm56U2VsZWN0TW9kZVwiXG4gICAgICAgICAgW2NsYXNzLmFudC10cmVlLWxpc3QtaG9sZGVyLWlubmVyXT1cIm56U2VsZWN0TW9kZVwiXG4gICAgICAgICAgW2l0ZW1TaXplXT1cIm56VmlydHVhbEl0ZW1TaXplXCJcbiAgICAgICAgICBbbWluQnVmZmVyUHhdPVwibnpWaXJ0dWFsTWluQnVmZmVyUHhcIlxuICAgICAgICAgIFttYXhCdWZmZXJQeF09XCJuelZpcnR1YWxNYXhCdWZmZXJQeFwiXG4gICAgICAgICAgW3N0eWxlLmhlaWdodF09XCJuelZpcnR1YWxIZWlnaHRcIlxuICAgICAgICA+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqY2RrVmlydHVhbEZvcj1cImxldCBub2RlIG9mIG56RmxhdHRlbk5vZGVzOyB0cmFja0J5OiB0cmFja0J5RmxhdHRlbk5vZGVcIj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJub2RlVGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IG5vZGUgfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0PlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAqbmdJZj1cIiFuelZpcnR1YWxIZWlnaHRcIlxuICAgICAgICAgIFtjbGFzcy5hbnQtc2VsZWN0LXRyZWUtbGlzdC1ob2xkZXItaW5uZXJdPVwibnpTZWxlY3RNb2RlXCJcbiAgICAgICAgICBbY2xhc3MuYW50LXRyZWUtbGlzdC1ob2xkZXItaW5uZXJdPVwibnpTZWxlY3RNb2RlXCJcbiAgICAgICAgICBbQC5kaXNhYmxlZF09XCJiZWZvcmVJbml0IHx8IG5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcbiAgICAgICAgICBbbnpOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXG4gICAgICAgICAgW0B0cmVlQ29sbGFwc2VNb3Rpb25dPVwibnpGbGF0dGVuTm9kZXMubGVuZ3RoXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG5vZGUgb2YgbnpGbGF0dGVuTm9kZXM7IHRyYWNrQnk6IHRyYWNrQnlGbGF0dGVuTm9kZVwiPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm5vZGVUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogbm9kZSB9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8bmctdGVtcGxhdGUgI25vZGVUZW1wbGF0ZSBsZXQtdHJlZU5vZGU+XG4gICAgICA8bnotdHJlZS1ub2RlXG4gICAgICAgIFtpY29uXT1cInRyZWVOb2RlLmljb25cIlxuICAgICAgICBbdGl0bGVdPVwidHJlZU5vZGUudGl0bGVcIlxuICAgICAgICBbaXNMb2FkaW5nXT1cInRyZWVOb2RlLmlzTG9hZGluZ1wiXG4gICAgICAgIFtpc1NlbGVjdGVkXT1cInRyZWVOb2RlLmlzU2VsZWN0ZWRcIlxuICAgICAgICBbaXNEaXNhYmxlZF09XCJ0cmVlTm9kZS5pc0Rpc2FibGVkXCJcbiAgICAgICAgW2lzTWF0Y2hlZF09XCJ0cmVlTm9kZS5pc01hdGNoZWRcIlxuICAgICAgICBbaXNFeHBhbmRlZF09XCJ0cmVlTm9kZS5pc0V4cGFuZGVkXCJcbiAgICAgICAgW2lzTGVhZl09XCJ0cmVlTm9kZS5pc0xlYWZcIlxuICAgICAgICBbaXNTdGFydF09XCJ0cmVlTm9kZS5pc1N0YXJ0XCJcbiAgICAgICAgW2lzRW5kXT1cInRyZWVOb2RlLmlzRW5kXCJcbiAgICAgICAgW2lzQ2hlY2tlZF09XCJ0cmVlTm9kZS5pc0NoZWNrZWRcIlxuICAgICAgICBbaXNIYWxmQ2hlY2tlZF09XCJ0cmVlTm9kZS5pc0hhbGZDaGVja2VkXCJcbiAgICAgICAgW2lzRGlzYWJsZUNoZWNrYm94XT1cInRyZWVOb2RlLmlzRGlzYWJsZUNoZWNrYm94XCJcbiAgICAgICAgW2lzU2VsZWN0YWJsZV09XCJ0cmVlTm9kZS5pc1NlbGVjdGFibGVcIlxuICAgICAgICBbY2FuSGlkZV09XCJ0cmVlTm9kZS5jYW5IaWRlXCJcbiAgICAgICAgW256VHJlZU5vZGVdPVwidHJlZU5vZGVcIlxuICAgICAgICBbbnpTZWxlY3RNb2RlXT1cIm56U2VsZWN0TW9kZVwiXG4gICAgICAgIFtuelNob3dMaW5lXT1cIm56U2hvd0xpbmVcIlxuICAgICAgICBbbnpFeHBhbmRlZEljb25dPVwibnpFeHBhbmRlZEljb25cIlxuICAgICAgICBbbnpEcmFnZ2FibGVdPVwibnpEcmFnZ2FibGVcIlxuICAgICAgICBbbnpDaGVja2FibGVdPVwibnpDaGVja2FibGVcIlxuICAgICAgICBbbnpTaG93RXhwYW5kXT1cIm56U2hvd0V4cGFuZFwiXG4gICAgICAgIFtuekFzeW5jRGF0YV09XCJuekFzeW5jRGF0YVwiXG4gICAgICAgIFtuelNlYXJjaFZhbHVlXT1cIm56U2VhcmNoVmFsdWVcIlxuICAgICAgICBbbnpIaWRlVW5NYXRjaGVkXT1cIm56SGlkZVVuTWF0Y2hlZFwiXG4gICAgICAgIFtuekJlZm9yZURyb3BdPVwibnpCZWZvcmVEcm9wXCJcbiAgICAgICAgW256U2hvd0ljb25dPVwibnpTaG93SWNvblwiXG4gICAgICAgIFtuelRyZWVUZW1wbGF0ZV09XCJuelRyZWVUZW1wbGF0ZSB8fCBuelRyZWVUZW1wbGF0ZUNoaWxkXCJcbiAgICAgICAgKG56RXhwYW5kQ2hhbmdlKT1cImV2ZW50VHJpZ2dlckNoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgIChuekNsaWNrKT1cImV2ZW50VHJpZ2dlckNoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgIChuekRibENsaWNrKT1cImV2ZW50VHJpZ2dlckNoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgIChuekNvbnRleHRNZW51KT1cImV2ZW50VHJpZ2dlckNoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgIChuekNoZWNrQm94Q2hhbmdlKT1cImV2ZW50VHJpZ2dlckNoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgIChuek9uRHJhZ1N0YXJ0KT1cImV2ZW50VHJpZ2dlckNoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgIChuek9uRHJhZ0VudGVyKT1cImV2ZW50VHJpZ2dlckNoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgIChuek9uRHJhZ092ZXIpPVwiZXZlbnRUcmlnZ2VyQ2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgICAgKG56T25EcmFnTGVhdmUpPVwiZXZlbnRUcmlnZ2VyQ2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgICAgKG56T25EcmFnRW5kKT1cImV2ZW50VHJpZ2dlckNoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgIChuek9uRHJvcCk9XCJldmVudFRyaWdnZXJDaGFuZ2VkKCRldmVudClcIlxuICAgICAgPlxuICAgICAgPC9uei10cmVlLW5vZGU+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIE56VHJlZVNlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogTnpUcmVlQmFzZVNlcnZpY2UsXG4gICAgICB1c2VGYWN0b3J5OiBOelRyZWVTZXJ2aWNlRmFjdG9yeSxcbiAgICAgIGRlcHM6IFtbbmV3IFNraXBTZWxmKCksIG5ldyBPcHRpb25hbCgpLCBOelRyZWVIaWdoZXJPcmRlclNlcnZpY2VUb2tlbl0sIE56VHJlZVNlcnZpY2VdXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56VHJlZUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXNlbGVjdC10cmVlXSc6IGBuelNlbGVjdE1vZGVgLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC10cmVlLXNob3ctbGluZV0nOiBgbnpTZWxlY3RNb2RlICYmIG56U2hvd0xpbmVgLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC10cmVlLWljb24taGlkZV0nOiBgbnpTZWxlY3RNb2RlICYmICFuelNob3dJY29uYCxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtdHJlZS1ibG9jay1ub2RlXSc6IGBuelNlbGVjdE1vZGUgJiYgbnpCbG9ja05vZGVgLFxuICAgICdbY2xhc3MuYW50LXRyZWVdJzogYCFuelNlbGVjdE1vZGVgLFxuICAgICdbY2xhc3MuYW50LXRyZWUtc2hvdy1saW5lXSc6IGAhbnpTZWxlY3RNb2RlICYmIG56U2hvd0xpbmVgLFxuICAgICdbY2xhc3MuYW50LXRyZWUtaWNvbi1oaWRlXSc6IGAhbnpTZWxlY3RNb2RlICYmICFuelNob3dJY29uYCxcbiAgICAnW2NsYXNzLmFudC10cmVlLWJsb2NrLW5vZGVdJzogYCFuelNlbGVjdE1vZGUgJiYgbnpCbG9ja05vZGVgLFxuICAgICdbY2xhc3MuZHJhZ2dhYmxlLXRyZWVdJzogYG56RHJhZ2dhYmxlYFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56VHJlZUNvbXBvbmVudCBleHRlbmRzIE56VHJlZUJhc2UgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNob3dJY29uOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekhpZGVVbk1hdGNoZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256QmxvY2tOb2RlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekV4cGFuZEFsbDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTZWxlY3RNb2RlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekNoZWNrU3RyaWN0bHk6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2hvd0V4cGFuZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTaG93TGluZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpDaGVja2FibGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256QXN5bmNEYXRhOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekRyYWdnYWJsZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpNdWx0aXBsZTogQm9vbGVhbklucHV0O1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIG56U2hvd0ljb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgbnpIaWRlVW5NYXRjaGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIG56QmxvY2tOb2RlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekV4cGFuZEFsbCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTZWxlY3RNb2RlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNoZWNrU3RyaWN0bHkgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0V4cGFuZDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dMaW5lID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNoZWNrYWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBc3luY0RhdGEgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RHJhZ2dhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek11bHRpcGxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56RXhwYW5kZWRJY29uPzogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGU7IG9yaWdpbjogTnpUcmVlTm9kZU9wdGlvbnMgfT47XG4gIEBJbnB1dCgpIG56VmlydHVhbEl0ZW1TaXplID0gMjg7XG4gIEBJbnB1dCgpIG56VmlydHVhbE1heEJ1ZmZlclB4ID0gNTAwO1xuICBASW5wdXQoKSBuelZpcnR1YWxNaW5CdWZmZXJQeCA9IDI4O1xuICBASW5wdXQoKSBuelZpcnR1YWxIZWlnaHQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuelRyZWVUZW1wbGF0ZT86IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlOyBvcmlnaW46IE56VHJlZU5vZGVPcHRpb25zIH0+O1xuICBASW5wdXQoKSBuekJlZm9yZURyb3A/OiAoY29uZmlybTogTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQpID0+IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIEBJbnB1dCgpIG56RGF0YTogTnpUcmVlTm9kZU9wdGlvbnNbXSB8IE56VHJlZU5vZGVbXSA9IFtdO1xuICBASW5wdXQoKSBuekV4cGFuZGVkS2V5czogTnpUcmVlTm9kZUtleVtdID0gW107XG4gIEBJbnB1dCgpIG56U2VsZWN0ZWRLZXlzOiBOelRyZWVOb2RlS2V5W10gPSBbXTtcbiAgQElucHV0KCkgbnpDaGVja2VkS2V5czogTnpUcmVlTm9kZUtleVtdID0gW107XG4gIEBJbnB1dCgpIG56U2VhcmNoVmFsdWU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56U2VhcmNoRnVuYz86IChub2RlOiBOelRyZWVOb2RlT3B0aW9ucykgPT4gYm9vbGVhbjtcbiAgQENvbnRlbnRDaGlsZCgnbnpUcmVlVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBuelRyZWVUZW1wbGF0ZUNoaWxkITogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGU7IG9yaWdpbjogTnpUcmVlTm9kZU9wdGlvbnMgfT47XG4gIEBWaWV3Q2hpbGQoQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0LCB7IHJlYWQ6IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCB9KSBjZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQhOiBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQ7XG4gIG56RmxhdHRlbk5vZGVzOiBOelRyZWVOb2RlW10gPSBbXTtcbiAgYmVmb3JlSW5pdCA9IHRydWU7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RXhwYW5kZWRLZXlzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VsZWN0ZWRLZXlzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hlY2tlZEtleXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWFyY2hWYWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RGJsQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDb250ZXh0TWVudSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNoZWNrQm94Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RXhwYW5kQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25EcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdFbnRlciA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJhZ092ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdMZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJhZ0VuZCA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG5cbiAgSElEREVOX1NUWUxFID0ge1xuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIG9wYWNpdHk6IDAsXG4gICAgYm9yZGVyOiAwLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgbWFyZ2luOiAwXG4gIH07XG5cbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIG9uQ2hhbmdlOiAodmFsdWU6IE56VHJlZU5vZGVbXSkgPT4gdm9pZCA9ICgpID0+IG51bGw7XG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogTnpUcmVlTm9kZVtdKTogdm9pZCB7XG4gICAgdGhpcy5oYW5kbGVOekRhdGEodmFsdWUpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IE56VHJlZU5vZGVbXSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgYWxsIHByb3BlcnRpZXMgb2YgbnpUcmVlXG4gICAqIEBwYXJhbSBjaGFuZ2VzOiBhbGwgY2hhbmdlcyBmcm9tIEBJbnB1dFxuICAgKi9cbiAgcmVuZGVyVHJlZVByb3BlcnRpZXMoY2hhbmdlczogeyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSk6IHZvaWQge1xuICAgIGxldCB1c2VEZWZhdWx0RXhwYW5kZWRLZXlzID0gZmFsc2U7XG4gICAgbGV0IGV4cGFuZEFsbCA9IGZhbHNlO1xuICAgIGNvbnN0IHsgbnpEYXRhLCBuekV4cGFuZGVkS2V5cywgbnpTZWxlY3RlZEtleXMsIG56Q2hlY2tlZEtleXMsIG56Q2hlY2tTdHJpY3RseSwgbnpFeHBhbmRBbGwsIG56TXVsdGlwbGUsIG56U2VhcmNoVmFsdWUgfSA9IGNoYW5nZXM7XG5cbiAgICBpZiAobnpFeHBhbmRBbGwpIHtcbiAgICAgIHVzZURlZmF1bHRFeHBhbmRlZEtleXMgPSB0cnVlO1xuICAgICAgZXhwYW5kQWxsID0gdGhpcy5uekV4cGFuZEFsbDtcbiAgICB9XG5cbiAgICBpZiAobnpNdWx0aXBsZSkge1xuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzTXVsdGlwbGUgPSB0aGlzLm56TXVsdGlwbGU7XG4gICAgfVxuXG4gICAgaWYgKG56Q2hlY2tTdHJpY3RseSkge1xuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzQ2hlY2tTdHJpY3RseSA9IHRoaXMubnpDaGVja1N0cmljdGx5O1xuICAgIH1cblxuICAgIGlmIChuekRhdGEpIHtcbiAgICAgIHRoaXMuaGFuZGxlTnpEYXRhKHRoaXMubnpEYXRhKTtcbiAgICB9XG5cbiAgICBpZiAobnpDaGVja2VkS2V5cykge1xuICAgICAgdGhpcy5oYW5kbGVDaGVja2VkS2V5cyh0aGlzLm56Q2hlY2tlZEtleXMpO1xuICAgIH1cblxuICAgIGlmIChuekNoZWNrU3RyaWN0bHkpIHtcbiAgICAgIHRoaXMuaGFuZGxlQ2hlY2tlZEtleXMobnVsbCk7XG4gICAgfVxuXG4gICAgaWYgKG56RXhwYW5kZWRLZXlzIHx8IG56RXhwYW5kQWxsKSB7XG4gICAgICB1c2VEZWZhdWx0RXhwYW5kZWRLZXlzID0gdHJ1ZTtcbiAgICAgIHRoaXMuaGFuZGxlRXhwYW5kZWRLZXlzKGV4cGFuZEFsbCB8fCB0aGlzLm56RXhwYW5kZWRLZXlzKTtcbiAgICB9XG5cbiAgICBpZiAobnpTZWxlY3RlZEtleXMpIHtcbiAgICAgIHRoaXMuaGFuZGxlU2VsZWN0ZWRLZXlzKHRoaXMubnpTZWxlY3RlZEtleXMsIHRoaXMubnpNdWx0aXBsZSk7XG4gICAgfVxuXG4gICAgaWYgKG56U2VhcmNoVmFsdWUpIHtcbiAgICAgIGlmICghKG56U2VhcmNoVmFsdWUuZmlyc3RDaGFuZ2UgJiYgIXRoaXMubnpTZWFyY2hWYWx1ZSkpIHtcbiAgICAgICAgdXNlRGVmYXVsdEV4cGFuZGVkS2V5cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhbmRsZVNlYXJjaFZhbHVlKG56U2VhcmNoVmFsdWUuY3VycmVudFZhbHVlLCB0aGlzLm56U2VhcmNoRnVuYyk7XG4gICAgICAgIHRoaXMubnpTZWFyY2hWYWx1ZUNoYW5nZS5lbWl0KHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnc2VhcmNoJywgbnVsbCwgbnVsbCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGZsYXR0ZW4gZGF0YVxuICAgIGNvbnN0IGN1cnJlbnRFeHBhbmRlZEtleXMgPSB0aGlzLmdldEV4cGFuZGVkTm9kZUxpc3QoKS5tYXAodiA9PiB2LmtleSk7XG4gICAgY29uc3QgbmV3RXhwYW5kZWRLZXlzID0gdXNlRGVmYXVsdEV4cGFuZGVkS2V5cyA/IGV4cGFuZEFsbCB8fCB0aGlzLm56RXhwYW5kZWRLZXlzIDogY3VycmVudEV4cGFuZGVkS2V5cztcbiAgICB0aGlzLmhhbmRsZUZsYXR0ZW5Ob2Rlcyh0aGlzLm56VHJlZVNlcnZpY2Uucm9vdE5vZGVzLCBuZXdFeHBhbmRlZEtleXMpO1xuICB9XG5cbiAgdHJhY2tCeUZsYXR0ZW5Ob2RlKF86IG51bWJlciwgbm9kZTogTnpUcmVlTm9kZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5vZGUua2V5O1xuICB9XG4gIC8vIERlYWwgd2l0aCBwcm9wZXJ0aWVzXG4gIC8qKlxuICAgKiBuekRhdGFcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqL1xuICBoYW5kbGVOekRhdGEodmFsdWU6IE56U2FmZUFueVtdKTogdm9pZCB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5jb2VyY2VUcmVlTm9kZXModmFsdWUpO1xuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmluaXRUcmVlKGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUZsYXR0ZW5Ob2RlcyhkYXRhOiBOelRyZWVOb2RlW10sIGV4cGFuZEtleXM6IE56VHJlZU5vZGVLZXlbXSB8IHRydWUgPSBbXSk6IHZvaWQge1xuICAgIHRoaXMubnpUcmVlU2VydmljZS5mbGF0dGVuVHJlZURhdGEoZGF0YSwgZXhwYW5kS2V5cyk7XG4gIH1cblxuICBoYW5kbGVDaGVja2VkS2V5cyhrZXlzOiBOelRyZWVOb2RlS2V5W10gfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNvbmR1Y3RDaGVjayhrZXlzLCB0aGlzLm56Q2hlY2tTdHJpY3RseSk7XG4gIH1cblxuICBoYW5kbGVFeHBhbmRlZEtleXMoa2V5czogTnpUcmVlTm9kZUtleVtdIHwgdHJ1ZSA9IFtdKTogdm9pZCB7XG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNvbmR1Y3RFeHBhbmRlZEtleXMoa2V5cyk7XG4gIH1cblxuICBoYW5kbGVTZWxlY3RlZEtleXMoa2V5czogTnpUcmVlTm9kZUtleVtdLCBpc011bHRpOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNvbmR1Y3RTZWxlY3RlZEtleXMoa2V5cywgaXNNdWx0aSk7XG4gIH1cblxuICBoYW5kbGVTZWFyY2hWYWx1ZSh2YWx1ZTogc3RyaW5nLCBzZWFyY2hGdW5jPzogKG5vZGU6IE56VHJlZU5vZGVPcHRpb25zKSA9PiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgZGF0YUxpc3QgPSBmbGF0dGVuVHJlZURhdGEodGhpcy5uelRyZWVTZXJ2aWNlLnJvb3ROb2RlcywgdHJ1ZSkubWFwKHYgPT4gdi5kYXRhKTtcbiAgICBjb25zdCBjaGVja0lmTWF0Y2hlZCA9IChub2RlOiBOelRyZWVOb2RlKTogYm9vbGVhbiA9PiB7XG4gICAgICBpZiAoc2VhcmNoRnVuYykge1xuICAgICAgICByZXR1cm4gc2VhcmNoRnVuYyhub2RlLm9yaWdpbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gIXZhbHVlIHx8ICFub2RlLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUudG9Mb3dlckNhc2UoKSkgPyBmYWxzZSA6IHRydWU7XG4gICAgfTtcbiAgICBkYXRhTGlzdC5mb3JFYWNoKHYgPT4ge1xuICAgICAgdi5pc01hdGNoZWQgPSBjaGVja0lmTWF0Y2hlZCh2KTtcbiAgICAgIHYuY2FuSGlkZSA9ICF2LmlzTWF0Y2hlZDtcbiAgICAgIGlmICghdi5pc01hdGNoZWQpIHtcbiAgICAgICAgdi5zZXRFeHBhbmRlZChmYWxzZSk7XG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5zZXRFeHBhbmRlZE5vZGVMaXN0KHYpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZXhwYW5kXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5leHBhbmROb2RlQWxsUGFyZW50QnlTZWFyY2godik7XG4gICAgICB9XG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2V0TWF0Y2hlZE5vZGVMaXN0KHYpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBlbWl0IGV2ZW50XG4gICAqIEBwYXJhbSBldmVudFxuICAgKiBoYW5kbGUgZWFjaCBldmVudFxuICAgKi9cbiAgZXZlbnRUcmlnZ2VyQ2hhbmdlZChldmVudDogTnpGb3JtYXRFbWl0RXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBub2RlID0gZXZlbnQubm9kZSE7XG4gICAgc3dpdGNoIChldmVudC5ldmVudE5hbWUpIHtcbiAgICAgIGNhc2UgJ2V4cGFuZCc6XG4gICAgICAgIHRoaXMucmVuZGVyVHJlZSgpO1xuICAgICAgICB0aGlzLm56RXhwYW5kQ2hhbmdlLmVtaXQoZXZlbnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NsaWNrJzpcbiAgICAgICAgdGhpcy5uekNsaWNrLmVtaXQoZXZlbnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RibGNsaWNrJzpcbiAgICAgICAgdGhpcy5uekRibENsaWNrLmVtaXQoZXZlbnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NvbnRleHRtZW51JzpcbiAgICAgICAgdGhpcy5uekNvbnRleHRNZW51LmVtaXQoZXZlbnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NoZWNrJzpcbiAgICAgICAgLy8gUmVuZGVyIGNoZWNrZWQgc3RhdGUgd2l0aCBub2RlcycgcHJvcGVydHkgYGlzQ2hlY2tlZGBcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNldENoZWNrZWROb2RlTGlzdChub2RlKTtcbiAgICAgICAgaWYgKCF0aGlzLm56Q2hlY2tTdHJpY3RseSkge1xuICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jb25kdWN0KG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENhdXNlIGNoZWNrIG1ldGhvZCB3aWxsIHJlcmVuZGVyIGxpc3QsIHNvIHdlIG5lZWQgcmVjb3ZlciBpdCBhbmQgbmV4dCB0aGUgbmV3IGV2ZW50IHRvIHVzZXJcbiAgICAgICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdjaGVjaycsIG5vZGUsIGV2ZW50LmV2ZW50ISk7XG4gICAgICAgIHRoaXMubnpDaGVja0JveENoYW5nZS5lbWl0KGV2ZW50TmV4dCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZHJhZ3N0YXJ0JzpcbiAgICAgICAgLy8gaWYgbm9kZSBpcyBleHBhbmRlZFxuICAgICAgICBpZiAobm9kZS5pc0V4cGFuZGVkKSB7XG4gICAgICAgICAgbm9kZS5zZXRFeHBhbmRlZCghbm9kZS5pc0V4cGFuZGVkKTtcbiAgICAgICAgICB0aGlzLnJlbmRlclRyZWUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm56T25EcmFnU3RhcnQuZW1pdChldmVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZHJhZ2VudGVyJzpcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWROb2RlID0gdGhpcy5uelRyZWVTZXJ2aWNlLmdldFNlbGVjdGVkTm9kZSgpO1xuICAgICAgICBpZiAoc2VsZWN0ZWROb2RlICYmIHNlbGVjdGVkTm9kZS5rZXkgIT09IG5vZGUua2V5ICYmICFub2RlLmlzRXhwYW5kZWQgJiYgIW5vZGUuaXNMZWFmKSB7XG4gICAgICAgICAgbm9kZS5zZXRFeHBhbmRlZCh0cnVlKTtcbiAgICAgICAgICB0aGlzLnJlbmRlclRyZWUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm56T25EcmFnRW50ZXIuZW1pdChldmVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZHJhZ292ZXInOlxuICAgICAgICB0aGlzLm56T25EcmFnT3Zlci5lbWl0KGV2ZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkcmFnbGVhdmUnOlxuICAgICAgICB0aGlzLm56T25EcmFnTGVhdmUuZW1pdChldmVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZHJhZ2VuZCc6XG4gICAgICAgIHRoaXMubnpPbkRyYWdFbmQuZW1pdChldmVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZHJvcCc6XG4gICAgICAgIHRoaXMucmVuZGVyVHJlZSgpO1xuICAgICAgICB0aGlzLm56T25Ecm9wLmVtaXQoZXZlbnQpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xpY2sgZXhwYW5kIGljb25cbiAgICovXG4gIHJlbmRlclRyZWUoKTogdm9pZCB7XG4gICAgdGhpcy5oYW5kbGVGbGF0dGVuTm9kZXMoXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2Uucm9vdE5vZGVzLFxuICAgICAgdGhpcy5nZXRFeHBhbmRlZE5vZGVMaXN0KCkubWFwKHYgPT4gdi5rZXkpXG4gICAgKTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICAvLyBIYW5kbGUgZW1pdCBldmVudCBlbmRcblxuICBjb25zdHJ1Y3RvcihcbiAgICBuelRyZWVTZXJ2aWNlOiBOelRyZWVCYXNlU2VydmljZSxcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxuICApIHtcbiAgICBzdXBlcihuelRyZWVTZXJ2aWNlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubnpUcmVlU2VydmljZS5mbGF0dGVuTm9kZXMkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLm56RmxhdHRlbk5vZGVzID0gZGF0YTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyVHJlZVByb3BlcnRpZXMoY2hhbmdlcyk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5iZWZvcmVJbml0ID0gZmFsc2U7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==