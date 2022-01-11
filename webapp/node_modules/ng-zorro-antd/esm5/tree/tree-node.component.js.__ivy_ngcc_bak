/**
 * @fileoverview added by tsickle
 * Generated from: tree-node.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Host, Input, NgZone, Optional, Output, Renderer2, TemplateRef } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { NzTreeBaseService, NzTreeNode } from 'ng-zorro-antd/core/tree';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
var NzTreeNodeComponent = /** @class */ (function () {
    function NzTreeNodeComponent(nzTreeService, ngZone, renderer, elementRef, cdr, noAnimation) {
        this.nzTreeService = nzTreeService;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        /**
         * for global property
         */
        this.icon = '';
        this.title = '';
        this.isLoading = false;
        this.isSelected = false;
        this.isDisabled = false;
        this.isMatched = false;
        this.nzHideUnMatched = false;
        this.nzNoAnimation = false;
        this.nzSelectMode = false;
        this.nzShowIcon = false;
        this.nzTreeTemplate = null;
        this.nzSearchValue = '';
        this.nzDraggable = false;
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
        /**
         * drag var
         */
        this.destroy$ = new Subject();
        this.dragPos = 2;
        this.dragPosClass = {
            '0': 'drag-over',
            '1': 'drag-over-gap-bottom',
            '-1': 'drag-over-gap-top'
        };
    }
    Object.defineProperty(NzTreeNodeComponent.prototype, "displayStyle", {
        /**
         * default set
         */
        get: /**
         * default set
         * @return {?}
         */
        function () {
            // to hide unmatched nodes
            return this.nzSearchValue && this.nzHideUnMatched && !this.isMatched && !this.isExpanded && this.canHide ? 'none' : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "isSwitcherOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isExpanded && !this.isLeaf;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "isSwitcherClose", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.isExpanded && !this.isLeaf;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    NzTreeNodeComponent.prototype.onMousedown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.nzSelectMode) {
            event.preventDefault();
        }
    };
    /**
     * collapse node
     * @param event
     */
    /**
     * collapse node
     * @param {?} event
     * @return {?}
     */
    NzTreeNodeComponent.prototype.clickExpand = /**
     * collapse node
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        if (!this.isLoading && !this.isLeaf) {
            // set async state
            if (this.nzAsyncData && this.nzTreeNode.children.length === 0 && !this.isExpanded) {
                this.nzTreeNode.isLoading = true;
            }
            this.nzTreeNode.setExpanded(!this.isExpanded);
        }
        this.nzTreeService.setExpandedNodeList(this.nzTreeNode);
        /** @type {?} */
        var eventNext = this.nzTreeService.formatEvent('expand', this.nzTreeNode, event);
        this.nzExpandChange.emit(eventNext);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzTreeNodeComponent.prototype.clickSelect = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        if (this.isSelectable && !this.isDisabled) {
            this.nzTreeNode.isSelected = !this.nzTreeNode.isSelected;
        }
        this.nzTreeService.setSelectedNodeList(this.nzTreeNode);
        /** @type {?} */
        var eventNext = this.nzTreeService.formatEvent('click', this.nzTreeNode, event);
        this.nzClick.emit(eventNext);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzTreeNodeComponent.prototype.dblClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        /** @type {?} */
        var eventNext = this.nzTreeService.formatEvent('dblclick', this.nzTreeNode, event);
        this.nzDblClick.emit(eventNext);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzTreeNodeComponent.prototype.contextMenu = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        /** @type {?} */
        var eventNext = this.nzTreeService.formatEvent('contextmenu', this.nzTreeNode, event);
        this.nzContextMenu.emit(eventNext);
    };
    /**
     * check node
     * @param event
     */
    /**
     * check node
     * @param {?} event
     * @return {?}
     */
    NzTreeNodeComponent.prototype.clickCheckBox = /**
     * check node
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        // return if node is disabled
        if (this.isDisabled || this.isDisableCheckbox) {
            return;
        }
        this.nzTreeNode.isChecked = !this.nzTreeNode.isChecked;
        this.nzTreeNode.isHalfChecked = false;
        this.nzTreeService.setCheckedNodeList(this.nzTreeNode);
        /** @type {?} */
        var eventNext = this.nzTreeService.formatEvent('check', this.nzTreeNode, event);
        this.nzCheckBoxChange.emit(eventNext);
    };
    /**
     * @return {?}
     */
    NzTreeNodeComponent.prototype.clearDragClass = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var dragClass = ['drag-over-gap-top', 'drag-over-gap-bottom', 'drag-over'];
        dragClass.forEach((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            _this.renderer.removeClass(_this.elementRef.nativeElement, e);
        }));
    };
    /**
     * drag event
     * @param e
     */
    /**
     * drag event
     * @param {?} e
     * @return {?}
     */
    NzTreeNodeComponent.prototype.handleDragStart = /**
     * drag event
     * @param {?} e
     * @return {?}
     */
    function (e) {
        try {
            // ie throw error
            // firefox-need-it
            (/** @type {?} */ (e.dataTransfer)).setData('text/plain', (/** @type {?} */ (this.nzTreeNode.key)));
        }
        catch (error) {
            // empty
        }
        this.nzTreeService.setSelectedNode(this.nzTreeNode);
        /** @type {?} */
        var eventNext = this.nzTreeService.formatEvent('dragstart', this.nzTreeNode, e);
        this.nzOnDragStart.emit(eventNext);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTreeNodeComponent.prototype.handleDragEnter = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.preventDefault();
        // reset position
        this.dragPos = 2;
        this.ngZone.run((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var eventNext = _this.nzTreeService.formatEvent('dragenter', _this.nzTreeNode, e);
            _this.nzOnDragEnter.emit(eventNext);
        }));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTreeNodeComponent.prototype.handleDragOver = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        /** @type {?} */
        var dropPosition = this.nzTreeService.calcDropPosition(e);
        if (this.dragPos !== dropPosition) {
            this.clearDragClass();
            this.dragPos = dropPosition;
            // leaf node will pass
            if (!(this.dragPos === 0 && this.isLeaf)) {
                this.renderer.addClass(this.elementRef.nativeElement, this.dragPosClass[this.dragPos]);
            }
        }
        /** @type {?} */
        var eventNext = this.nzTreeService.formatEvent('dragover', this.nzTreeNode, e);
        this.nzOnDragOver.emit(eventNext);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTreeNodeComponent.prototype.handleDragLeave = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        this.clearDragClass();
        /** @type {?} */
        var eventNext = this.nzTreeService.formatEvent('dragleave', this.nzTreeNode, e);
        this.nzOnDragLeave.emit(eventNext);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTreeNodeComponent.prototype.handleDragDrop = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        this.ngZone.run((/**
         * @return {?}
         */
        function () {
            _this.clearDragClass();
            /** @type {?} */
            var node = _this.nzTreeService.getSelectedNode();
            if (!node || (node && node.key === _this.nzTreeNode.key) || (_this.dragPos === 0 && _this.isLeaf)) {
                return;
            }
            // pass if node is leafNo
            /** @type {?} */
            var dropEvent = _this.nzTreeService.formatEvent('drop', _this.nzTreeNode, e);
            /** @type {?} */
            var dragEndEvent = _this.nzTreeService.formatEvent('dragend', _this.nzTreeNode, e);
            if (_this.nzBeforeDrop) {
                _this.nzBeforeDrop({
                    dragNode: (/** @type {?} */ (_this.nzTreeService.getSelectedNode())),
                    node: _this.nzTreeNode,
                    pos: _this.dragPos
                }).subscribe((/**
                 * @param {?} canDrop
                 * @return {?}
                 */
                function (canDrop) {
                    if (canDrop) {
                        _this.nzTreeService.dropAndApply(_this.nzTreeNode, _this.dragPos);
                    }
                    _this.nzOnDrop.emit(dropEvent);
                    _this.nzOnDragEnd.emit(dragEndEvent);
                }));
            }
            else if (_this.nzTreeNode) {
                _this.nzTreeService.dropAndApply(_this.nzTreeNode, _this.dragPos);
                _this.nzOnDrop.emit(dropEvent);
            }
        }));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTreeNodeComponent.prototype.handleDragEnd = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.preventDefault();
        this.ngZone.run((/**
         * @return {?}
         */
        function () {
            // if user do not custom beforeDrop
            if (!_this.nzBeforeDrop) {
                /** @type {?} */
                var eventNext = _this.nzTreeService.formatEvent('dragend', _this.nzTreeNode, e);
                _this.nzOnDragEnd.emit(eventNext);
            }
        }));
    };
    /**
     * Listening to dragging events.
     */
    /**
     * Listening to dragging events.
     * @return {?}
     */
    NzTreeNodeComponent.prototype.handDragEvent = /**
     * Listening to dragging events.
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            if (_this.nzDraggable) {
                /** @type {?} */
                var nativeElement = _this.elementRef.nativeElement;
                _this.destroy$ = new Subject();
                fromEvent(nativeElement, 'dragstart')
                    .pipe(takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.handleDragStart(e); }));
                fromEvent(nativeElement, 'dragenter')
                    .pipe(takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.handleDragEnter(e); }));
                fromEvent(nativeElement, 'dragover')
                    .pipe(takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.handleDragOver(e); }));
                fromEvent(nativeElement, 'dragleave')
                    .pipe(takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.handleDragLeave(e); }));
                fromEvent(nativeElement, 'drop')
                    .pipe(takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.handleDragDrop(e); }));
                fromEvent(nativeElement, 'dragend')
                    .pipe(takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return _this.handleDragEnd(e); }));
            }
            else {
                _this.destroy$.next();
                _this.destroy$.complete();
            }
        }));
    };
    /**
     * @return {?}
     */
    NzTreeNodeComponent.prototype.markForCheck = /**
     * @return {?}
     */
    function () {
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzTreeNodeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.nzTreeNode.component = this;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTreeNodeComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzDraggable = changes.nzDraggable;
        if (nzDraggable) {
            this.handDragEvent();
        }
    };
    /**
     * @return {?}
     */
    NzTreeNodeComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzTreeNodeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-tree-node',
                    exportAs: 'nzTreeNode',
                    template: "\n    <nz-tree-indent [nzTreeLevel]=\"nzTreeNode.level\" [nzSelectMode]=\"nzSelectMode\" [nzIsStart]=\"isStart\" [nzIsEnd]=\"isEnd\"></nz-tree-indent>\n    <nz-tree-node-switcher\n      *ngIf=\"nzShowExpand\"\n      [nzShowExpand]=\"nzShowExpand\"\n      [nzShowLine]=\"nzShowLine\"\n      [nzExpandedIcon]=\"nzExpandedIcon\"\n      [nzSelectMode]=\"nzSelectMode\"\n      [context]=\"nzTreeNode\"\n      [isLeaf]=\"isLeaf\"\n      [isExpanded]=\"isExpanded\"\n      [isLoading]=\"isLoading\"\n      (click)=\"clickExpand($event)\"\n    ></nz-tree-node-switcher>\n    <nz-tree-node-checkbox\n      *ngIf=\"nzCheckable\"\n      (click)=\"clickCheckBox($event)\"\n      [nzSelectMode]=\"nzSelectMode\"\n      [isChecked]=\"isChecked\"\n      [isHalfChecked]=\"isHalfChecked\"\n      [isDisabled]=\"isDisabled\"\n      [isDisableCheckbox]=\"isDisableCheckbox\"\n    ></nz-tree-node-checkbox>\n    <nz-tree-node-title\n      [icon]=\"icon\"\n      [title]=\"title\"\n      [isLoading]=\"isLoading\"\n      [isSelected]=\"isSelected\"\n      [isDisabled]=\"isDisabled\"\n      [isMatched]=\"isMatched\"\n      [isExpanded]=\"isExpanded\"\n      [isLeaf]=\"isLeaf\"\n      [searchValue]=\"nzSearchValue\"\n      [treeTemplate]=\"nzTreeTemplate\"\n      [draggable]=\"nzDraggable\"\n      [showIcon]=\"nzShowIcon\"\n      [selectMode]=\"nzSelectMode\"\n      [context]=\"nzTreeNode\"\n      (dblclick)=\"dblClick($event)\"\n      (click)=\"clickSelect($event)\"\n      (contextmenu)=\"contextMenu($event)\"\n    ></nz-tree-node-title>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    host: {
                        '[class.ant-select-tree-treenode]': "nzSelectMode",
                        '[class.ant-select-tree-treenode-disabled]': "nzSelectMode && isDisabled",
                        '[class.ant-select-tree-treenode-switcher-open]': "nzSelectMode && isSwitcherOpen",
                        '[class.ant-select-tree-treenode-switcher-close]': "nzSelectMode && isSwitcherClose",
                        '[class.ant-select-tree-treenode-checkbox-checked]': "nzSelectMode && isChecked",
                        '[class.ant-select-tree-treenode-checkbox-indeterminate]': "nzSelectMode && isHalfChecked",
                        '[class.ant-select-tree-treenode-selected]': "nzSelectMode && isSelected",
                        '[class.ant-select-tree-treenode-loading]': "nzSelectMode && isLoading",
                        '[class.ant-tree-treenode]': "!nzSelectMode",
                        '[class.ant-tree-treenode-disabled]': "!nzSelectMode && isDisabled",
                        '[class.ant-tree-treenode-switcher-open]': "!nzSelectMode && isSwitcherOpen",
                        '[class.ant-tree-treenode-switcher-close]': "!nzSelectMode && isSwitcherClose",
                        '[class.ant-tree-treenode-checkbox-checked]': "!nzSelectMode && isChecked",
                        '[class.ant-tree-treenode-checkbox-indeterminate]': "!nzSelectMode && isHalfChecked",
                        '[class.ant-tree-treenode-selected]': "!nzSelectMode && isSelected",
                        '[class.ant-tree-treenode-loading]': "!nzSelectMode && isLoading",
                        '[style.display]': 'displayStyle',
                        '(mousedown)': 'onMousedown($event)'
                    }
                }] }
    ];
    /** @nocollapse */
    NzTreeNodeComponent.ctorParameters = function () { return [
        { type: NzTreeBaseService },
        { type: NgZone },
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzTreeNodeComponent.propDecorators = {
        icon: [{ type: Input }],
        title: [{ type: Input }],
        isLoading: [{ type: Input }],
        isSelected: [{ type: Input }],
        isDisabled: [{ type: Input }],
        isMatched: [{ type: Input }],
        isExpanded: [{ type: Input }],
        isLeaf: [{ type: Input }],
        isChecked: [{ type: Input }],
        isHalfChecked: [{ type: Input }],
        isDisableCheckbox: [{ type: Input }],
        isSelectable: [{ type: Input }],
        canHide: [{ type: Input }],
        isStart: [{ type: Input }],
        isEnd: [{ type: Input }],
        nzTreeNode: [{ type: Input }],
        nzShowLine: [{ type: Input }],
        nzShowExpand: [{ type: Input }],
        nzCheckable: [{ type: Input }],
        nzAsyncData: [{ type: Input }],
        nzHideUnMatched: [{ type: Input }],
        nzNoAnimation: [{ type: Input }],
        nzSelectMode: [{ type: Input }],
        nzShowIcon: [{ type: Input }],
        nzExpandedIcon: [{ type: Input }],
        nzTreeTemplate: [{ type: Input }],
        nzBeforeDrop: [{ type: Input }],
        nzSearchValue: [{ type: Input }],
        nzDraggable: [{ type: Input }],
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
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTreeNodeComponent.prototype, "nzShowLine", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTreeNodeComponent.prototype, "nzShowExpand", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTreeNodeComponent.prototype, "nzCheckable", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTreeNodeComponent.prototype, "nzAsyncData", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeNodeComponent.prototype, "nzHideUnMatched", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeNodeComponent.prototype, "nzNoAnimation", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeNodeComponent.prototype, "nzSelectMode", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeNodeComponent.prototype, "nzShowIcon", void 0);
    return NzTreeNodeComponent;
}());
export { NzTreeNodeComponent };
if (false) {
    /** @type {?} */
    NzTreeNodeComponent.ngAcceptInputType_nzShowLine;
    /** @type {?} */
    NzTreeNodeComponent.ngAcceptInputType_nzShowExpand;
    /** @type {?} */
    NzTreeNodeComponent.ngAcceptInputType_nzCheckable;
    /** @type {?} */
    NzTreeNodeComponent.ngAcceptInputType_nzAsyncData;
    /** @type {?} */
    NzTreeNodeComponent.ngAcceptInputType_nzHideUnMatched;
    /** @type {?} */
    NzTreeNodeComponent.ngAcceptInputType_nzNoAnimation;
    /** @type {?} */
    NzTreeNodeComponent.ngAcceptInputType_nzSelectMode;
    /** @type {?} */
    NzTreeNodeComponent.ngAcceptInputType_nzShowIcon;
    /**
     * for global property
     * @type {?}
     */
    NzTreeNodeComponent.prototype.icon;
    /** @type {?} */
    NzTreeNodeComponent.prototype.title;
    /** @type {?} */
    NzTreeNodeComponent.prototype.isLoading;
    /** @type {?} */
    NzTreeNodeComponent.prototype.isSelected;
    /** @type {?} */
    NzTreeNodeComponent.prototype.isDisabled;
    /** @type {?} */
    NzTreeNodeComponent.prototype.isMatched;
    /** @type {?} */
    NzTreeNodeComponent.prototype.isExpanded;
    /** @type {?} */
    NzTreeNodeComponent.prototype.isLeaf;
    /** @type {?} */
    NzTreeNodeComponent.prototype.isChecked;
    /** @type {?} */
    NzTreeNodeComponent.prototype.isHalfChecked;
    /** @type {?} */
    NzTreeNodeComponent.prototype.isDisableCheckbox;
    /** @type {?} */
    NzTreeNodeComponent.prototype.isSelectable;
    /** @type {?} */
    NzTreeNodeComponent.prototype.canHide;
    /** @type {?} */
    NzTreeNodeComponent.prototype.isStart;
    /** @type {?} */
    NzTreeNodeComponent.prototype.isEnd;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzTreeNode;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzShowLine;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzShowExpand;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzCheckable;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzAsyncData;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzHideUnMatched;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzNoAnimation;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzSelectMode;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzShowIcon;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzExpandedIcon;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzTreeTemplate;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzBeforeDrop;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzSearchValue;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzDraggable;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzClick;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzDblClick;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzContextMenu;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzCheckBoxChange;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzExpandChange;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzOnDragStart;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzOnDragEnter;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzOnDragOver;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzOnDragLeave;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzOnDrop;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzOnDragEnd;
    /**
     * drag var
     * @type {?}
     */
    NzTreeNodeComponent.prototype.destroy$;
    /** @type {?} */
    NzTreeNodeComponent.prototype.dragPos;
    /** @type {?} */
    NzTreeNodeComponent.prototype.dragPosClass;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzTreeService;
    /**
     * @type {?}
     * @private
     */
    NzTreeNodeComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzTreeNodeComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTreeNodeComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzTreeNodeComponent.prototype.cdr;
    /** @type {?} */
    NzTreeNodeComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdHJlZS8iLCJzb3VyY2VzIjpbInRyZWUtbm9kZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBQ0wsTUFBTSxFQUlOLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUVULFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUV6RSxPQUFPLEVBQThDLGlCQUFpQixFQUFFLFVBQVUsRUFBcUIsTUFBTSx5QkFBeUIsQ0FBQztBQUV2SSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDO0lBMFZFLDZCQUNTLGFBQWdDLEVBQy9CLE1BQWMsRUFDZCxRQUFtQixFQUNuQixVQUFzQixFQUN0QixHQUFzQixFQUNILFdBQW9DO1FBTHhELGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtRQUMvQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ0gsZ0JBQVcsR0FBWCxXQUFXLENBQXlCOzs7O1FBOVF4RCxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFVLEdBQVksS0FBSyxDQUFDO1FB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O1NBN1NZLG1CQUFtQjs7O0lBQzlCLGlEQUFrRDs7SUFDbEQsbURBQW9EOztJQUNwRCxrREFBbUQ7O0lBQ25ELGtEQUFtRDs7SUFDbkQsc0RBQXVEOztJQUN2RCxvREFBcUQ7O0lBQ3JELG1EQUFvRDs7SUFDcEQsaURBQWtEOzs7OztJQUtsRCxtQ0FBMkI7O0lBQzNCLG9DQUE0Qjs7SUFDNUIsd0NBQW9DOztJQUNwQyx5Q0FBcUM7O0lBQ3JDLHlDQUFxQzs7SUFDckMsd0NBQW9DOztJQUNwQyx5Q0FBOEI7O0lBQzlCLHFDQUEwQjs7SUFDMUIsd0NBQTZCOztJQUM3Qiw0Q0FBaUM7O0lBQ2pDLGdEQUFxQzs7SUFDckMsMkNBQWdDOztJQUNoQyxzQ0FBMkI7O0lBQzNCLHNDQUE2Qjs7SUFDN0Isb0NBQTJCOztJQUMzQix5Q0FBaUM7O0lBQ2pDLHlDQUE4Qzs7SUFDOUMsMkNBQWdEOztJQUNoRCwwQ0FBK0M7O0lBQy9DLDBDQUErQzs7SUFDL0MsOENBQWlEOztJQUNqRCw0Q0FBK0M7O0lBQy9DLDJDQUE4Qzs7SUFDOUMseUNBQTRDOztJQUM1Qyw2Q0FBNEY7O0lBQzVGLDZDQUF5Rzs7SUFDekcsMkNBQWtGOztJQUNsRiw0Q0FBNEI7O0lBQzVCLDBDQUFzQzs7SUFDdEMsc0NBQW1FOztJQUNuRSx5Q0FBc0U7O0lBQ3RFLDRDQUF5RTs7SUFDekUsK0NBQTRFOztJQUM1RSw2Q0FBMEU7O0lBQzFFLDRDQUF5RTs7SUFDekUsNENBQXlFOztJQUN6RSwyQ0FBd0U7O0lBQ3hFLDRDQUF5RTs7SUFDekUsdUNBQW9FOztJQUNwRSwwQ0FBdUU7Ozs7O0lBS3ZFLHVDQUF5Qjs7SUFDekIsc0NBQVk7O0lBQ1osMkNBSUU7O0lBdU5BLDRDQUF1Qzs7Ozs7SUFDdkMscUNBQXNCOzs7OztJQUN0Qix1Q0FBMkI7Ozs7O0lBQzNCLHlDQUE4Qjs7Ozs7SUFDOUIsa0NBQThCOztJQUM5QiwwQ0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZSxcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XG5cbmltcG9ydCB7IE56Rm9ybWF0QmVmb3JlRHJvcEV2ZW50LCBOekZvcm1hdEVtaXRFdmVudCwgTnpUcmVlQmFzZVNlcnZpY2UsIE56VHJlZU5vZGUsIE56VHJlZU5vZGVPcHRpb25zIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3RyZWUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei10cmVlLW5vZGUnLFxuICBleHBvcnRBczogJ256VHJlZU5vZGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuei10cmVlLWluZGVudCBbbnpUcmVlTGV2ZWxdPVwibnpUcmVlTm9kZS5sZXZlbFwiIFtuelNlbGVjdE1vZGVdPVwibnpTZWxlY3RNb2RlXCIgW256SXNTdGFydF09XCJpc1N0YXJ0XCIgW256SXNFbmRdPVwiaXNFbmRcIj48L256LXRyZWUtaW5kZW50PlxuICAgIDxuei10cmVlLW5vZGUtc3dpdGNoZXJcbiAgICAgICpuZ0lmPVwibnpTaG93RXhwYW5kXCJcbiAgICAgIFtuelNob3dFeHBhbmRdPVwibnpTaG93RXhwYW5kXCJcbiAgICAgIFtuelNob3dMaW5lXT1cIm56U2hvd0xpbmVcIlxuICAgICAgW256RXhwYW5kZWRJY29uXT1cIm56RXhwYW5kZWRJY29uXCJcbiAgICAgIFtuelNlbGVjdE1vZGVdPVwibnpTZWxlY3RNb2RlXCJcbiAgICAgIFtjb250ZXh0XT1cIm56VHJlZU5vZGVcIlxuICAgICAgW2lzTGVhZl09XCJpc0xlYWZcIlxuICAgICAgW2lzRXhwYW5kZWRdPVwiaXNFeHBhbmRlZFwiXG4gICAgICBbaXNMb2FkaW5nXT1cImlzTG9hZGluZ1wiXG4gICAgICAoY2xpY2spPVwiY2xpY2tFeHBhbmQoJGV2ZW50KVwiXG4gICAgPjwvbnotdHJlZS1ub2RlLXN3aXRjaGVyPlxuICAgIDxuei10cmVlLW5vZGUtY2hlY2tib3hcbiAgICAgICpuZ0lmPVwibnpDaGVja2FibGVcIlxuICAgICAgKGNsaWNrKT1cImNsaWNrQ2hlY2tCb3goJGV2ZW50KVwiXG4gICAgICBbbnpTZWxlY3RNb2RlXT1cIm56U2VsZWN0TW9kZVwiXG4gICAgICBbaXNDaGVja2VkXT1cImlzQ2hlY2tlZFwiXG4gICAgICBbaXNIYWxmQ2hlY2tlZF09XCJpc0hhbGZDaGVja2VkXCJcbiAgICAgIFtpc0Rpc2FibGVkXT1cImlzRGlzYWJsZWRcIlxuICAgICAgW2lzRGlzYWJsZUNoZWNrYm94XT1cImlzRGlzYWJsZUNoZWNrYm94XCJcbiAgICA+PC9uei10cmVlLW5vZGUtY2hlY2tib3g+XG4gICAgPG56LXRyZWUtbm9kZS10aXRsZVxuICAgICAgW2ljb25dPVwiaWNvblwiXG4gICAgICBbdGl0bGVdPVwidGl0bGVcIlxuICAgICAgW2lzTG9hZGluZ109XCJpc0xvYWRpbmdcIlxuICAgICAgW2lzU2VsZWN0ZWRdPVwiaXNTZWxlY3RlZFwiXG4gICAgICBbaXNEaXNhYmxlZF09XCJpc0Rpc2FibGVkXCJcbiAgICAgIFtpc01hdGNoZWRdPVwiaXNNYXRjaGVkXCJcbiAgICAgIFtpc0V4cGFuZGVkXT1cImlzRXhwYW5kZWRcIlxuICAgICAgW2lzTGVhZl09XCJpc0xlYWZcIlxuICAgICAgW3NlYXJjaFZhbHVlXT1cIm56U2VhcmNoVmFsdWVcIlxuICAgICAgW3RyZWVUZW1wbGF0ZV09XCJuelRyZWVUZW1wbGF0ZVwiXG4gICAgICBbZHJhZ2dhYmxlXT1cIm56RHJhZ2dhYmxlXCJcbiAgICAgIFtzaG93SWNvbl09XCJuelNob3dJY29uXCJcbiAgICAgIFtzZWxlY3RNb2RlXT1cIm56U2VsZWN0TW9kZVwiXG4gICAgICBbY29udGV4dF09XCJuelRyZWVOb2RlXCJcbiAgICAgIChkYmxjbGljayk9XCJkYmxDbGljaygkZXZlbnQpXCJcbiAgICAgIChjbGljayk9XCJjbGlja1NlbGVjdCgkZXZlbnQpXCJcbiAgICAgIChjb250ZXh0bWVudSk9XCJjb250ZXh0TWVudSgkZXZlbnQpXCJcbiAgICA+PC9uei10cmVlLW5vZGUtdGl0bGU+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXNlbGVjdC10cmVlLXRyZWVub2RlXSc6IGBuelNlbGVjdE1vZGVgLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC10cmVlLXRyZWVub2RlLWRpc2FibGVkXSc6IGBuelNlbGVjdE1vZGUgJiYgaXNEaXNhYmxlZGAsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXRyZWUtdHJlZW5vZGUtc3dpdGNoZXItb3Blbl0nOiBgbnpTZWxlY3RNb2RlICYmIGlzU3dpdGNoZXJPcGVuYCxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtdHJlZS10cmVlbm9kZS1zd2l0Y2hlci1jbG9zZV0nOiBgbnpTZWxlY3RNb2RlICYmIGlzU3dpdGNoZXJDbG9zZWAsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXRyZWUtdHJlZW5vZGUtY2hlY2tib3gtY2hlY2tlZF0nOiBgbnpTZWxlY3RNb2RlICYmIGlzQ2hlY2tlZGAsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXRyZWUtdHJlZW5vZGUtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZV0nOiBgbnpTZWxlY3RNb2RlICYmIGlzSGFsZkNoZWNrZWRgLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC10cmVlLXRyZWVub2RlLXNlbGVjdGVkXSc6IGBuelNlbGVjdE1vZGUgJiYgaXNTZWxlY3RlZGAsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXRyZWUtdHJlZW5vZGUtbG9hZGluZ10nOiBgbnpTZWxlY3RNb2RlICYmIGlzTG9hZGluZ2AsXG4gICAgJ1tjbGFzcy5hbnQtdHJlZS10cmVlbm9kZV0nOiBgIW56U2VsZWN0TW9kZWAsXG4gICAgJ1tjbGFzcy5hbnQtdHJlZS10cmVlbm9kZS1kaXNhYmxlZF0nOiBgIW56U2VsZWN0TW9kZSAmJiBpc0Rpc2FibGVkYCxcbiAgICAnW2NsYXNzLmFudC10cmVlLXRyZWVub2RlLXN3aXRjaGVyLW9wZW5dJzogYCFuelNlbGVjdE1vZGUgJiYgaXNTd2l0Y2hlck9wZW5gLFxuICAgICdbY2xhc3MuYW50LXRyZWUtdHJlZW5vZGUtc3dpdGNoZXItY2xvc2VdJzogYCFuelNlbGVjdE1vZGUgJiYgaXNTd2l0Y2hlckNsb3NlYCxcbiAgICAnW2NsYXNzLmFudC10cmVlLXRyZWVub2RlLWNoZWNrYm94LWNoZWNrZWRdJzogYCFuelNlbGVjdE1vZGUgJiYgaXNDaGVja2VkYCxcbiAgICAnW2NsYXNzLmFudC10cmVlLXRyZWVub2RlLWNoZWNrYm94LWluZGV0ZXJtaW5hdGVdJzogYCFuelNlbGVjdE1vZGUgJiYgaXNIYWxmQ2hlY2tlZGAsXG4gICAgJ1tjbGFzcy5hbnQtdHJlZS10cmVlbm9kZS1zZWxlY3RlZF0nOiBgIW56U2VsZWN0TW9kZSAmJiBpc1NlbGVjdGVkYCxcbiAgICAnW2NsYXNzLmFudC10cmVlLXRyZWVub2RlLWxvYWRpbmddJzogYCFuelNlbGVjdE1vZGUgJiYgaXNMb2FkaW5nYCxcbiAgICAnW3N0eWxlLmRpc3BsYXldJzogJ2Rpc3BsYXlTdHlsZScsXG4gICAgJyhtb3VzZWRvd24pJzogJ29uTW91c2Vkb3duKCRldmVudCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpUcmVlTm9kZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTaG93TGluZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTaG93RXhwYW5kOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekNoZWNrYWJsZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpBc3luY0RhdGE6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256SGlkZVVuTWF0Y2hlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpOb0FuaW1hdGlvbjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTZWxlY3RNb2RlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNob3dJY29uOiBCb29sZWFuSW5wdXQ7XG5cbiAgLyoqXG4gICAqIGZvciBnbG9iYWwgcHJvcGVydHlcbiAgICovXG4gIEBJbnB1dCgpIGljb246IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpc1NlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaXNNYXRjaGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzRXhwYW5kZWQhOiBib29sZWFuO1xuICBASW5wdXQoKSBpc0xlYWYhOiBib29sZWFuO1xuICBASW5wdXQoKSBpc0NoZWNrZWQ/OiBib29sZWFuO1xuICBASW5wdXQoKSBpc0hhbGZDaGVja2VkPzogYm9vbGVhbjtcbiAgQElucHV0KCkgaXNEaXNhYmxlQ2hlY2tib3g/OiBib29sZWFuO1xuICBASW5wdXQoKSBpc1NlbGVjdGFibGU/OiBib29sZWFuO1xuICBASW5wdXQoKSBjYW5IaWRlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgaXNTdGFydD86IGJvb2xlYW5bXTtcbiAgQElucHV0KCkgaXNFbmQ/OiBib29sZWFuW107XG4gIEBJbnB1dCgpIG56VHJlZU5vZGUhOiBOelRyZWVOb2RlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93TGluZT86IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dFeHBhbmQ/OiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDaGVja2FibGU/OiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBc3luY0RhdGE/OiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpIaWRlVW5NYXRjaGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek5vQW5pbWF0aW9uID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNlbGVjdE1vZGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0ljb24gPSBmYWxzZTtcbiAgQElucHV0KCkgbnpFeHBhbmRlZEljb24/OiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZTsgb3JpZ2luOiBOelRyZWVOb2RlT3B0aW9ucyB9PjtcbiAgQElucHV0KCkgbnpUcmVlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlOyBvcmlnaW46IE56VHJlZU5vZGVPcHRpb25zIH0+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56QmVmb3JlRHJvcD86IChjb25maXJtOiBOekZvcm1hdEJlZm9yZURyb3BFdmVudCkgPT4gT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgQElucHV0KCkgbnpTZWFyY2hWYWx1ZSA9ICcnO1xuICBASW5wdXQoKSBuekRyYWdnYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekRibENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q29udGV4dE1lbnUgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGVja0JveENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekV4cGFuZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25EcmFnRW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdPdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25EcmFnTGVhdmUgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyb3AgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBkcmFnIHZhclxuICAgKi9cbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuICBkcmFnUG9zID0gMjtcbiAgZHJhZ1Bvc0NsYXNzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge1xuICAgICcwJzogJ2RyYWctb3ZlcicsXG4gICAgJzEnOiAnZHJhZy1vdmVyLWdhcC1ib3R0b20nLFxuICAgICctMSc6ICdkcmFnLW92ZXItZ2FwLXRvcCdcbiAgfTtcblxuICAvKipcbiAgICogZGVmYXVsdCBzZXRcbiAgICovXG4gIGdldCBkaXNwbGF5U3R5bGUoKTogc3RyaW5nIHtcbiAgICAvLyB0byBoaWRlIHVubWF0Y2hlZCBub2Rlc1xuICAgIHJldHVybiB0aGlzLm56U2VhcmNoVmFsdWUgJiYgdGhpcy5uekhpZGVVbk1hdGNoZWQgJiYgIXRoaXMuaXNNYXRjaGVkICYmICF0aGlzLmlzRXhwYW5kZWQgJiYgdGhpcy5jYW5IaWRlID8gJ25vbmUnIDogJyc7XG4gIH1cblxuICBnZXQgaXNTd2l0Y2hlck9wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNFeHBhbmRlZCAmJiAhdGhpcy5pc0xlYWY7XG4gIH1cblxuICBnZXQgaXNTd2l0Y2hlckNsb3NlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5pc0V4cGFuZGVkICYmICF0aGlzLmlzTGVhZjtcbiAgfVxuXG4gIG9uTW91c2Vkb3duKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpTZWxlY3RNb2RlKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBjb2xsYXBzZSBub2RlXG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgY2xpY2tFeHBhbmQoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5pc0xvYWRpbmcgJiYgIXRoaXMuaXNMZWFmKSB7XG4gICAgICAvLyBzZXQgYXN5bmMgc3RhdGVcbiAgICAgIGlmICh0aGlzLm56QXN5bmNEYXRhICYmIHRoaXMubnpUcmVlTm9kZS5jaGlsZHJlbi5sZW5ndGggPT09IDAgJiYgIXRoaXMuaXNFeHBhbmRlZCkge1xuICAgICAgICB0aGlzLm56VHJlZU5vZGUuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMubnpUcmVlTm9kZS5zZXRFeHBhbmRlZCghdGhpcy5pc0V4cGFuZGVkKTtcbiAgICB9XG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNldEV4cGFuZGVkTm9kZUxpc3QodGhpcy5uelRyZWVOb2RlKTtcbiAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2V4cGFuZCcsIHRoaXMubnpUcmVlTm9kZSwgZXZlbnQpO1xuICAgIHRoaXMubnpFeHBhbmRDaGFuZ2UuZW1pdChldmVudE5leHQpO1xuICB9XG5cbiAgY2xpY2tTZWxlY3QoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLmlzU2VsZWN0YWJsZSAmJiAhdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLm56VHJlZU5vZGUuaXNTZWxlY3RlZCA9ICF0aGlzLm56VHJlZU5vZGUuaXNTZWxlY3RlZDtcbiAgICB9XG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNldFNlbGVjdGVkTm9kZUxpc3QodGhpcy5uelRyZWVOb2RlKTtcbiAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2NsaWNrJywgdGhpcy5uelRyZWVOb2RlLCBldmVudCk7XG4gICAgdGhpcy5uekNsaWNrLmVtaXQoZXZlbnROZXh0KTtcbiAgfVxuXG4gIGRibENsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RibGNsaWNrJywgdGhpcy5uelRyZWVOb2RlLCBldmVudCk7XG4gICAgdGhpcy5uekRibENsaWNrLmVtaXQoZXZlbnROZXh0KTtcbiAgfVxuXG4gIGNvbnRleHRNZW51KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2NvbnRleHRtZW51JywgdGhpcy5uelRyZWVOb2RlLCBldmVudCk7XG4gICAgdGhpcy5uekNvbnRleHRNZW51LmVtaXQoZXZlbnROZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjaGVjayBub2RlXG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgY2xpY2tDaGVja0JveChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gcmV0dXJuIGlmIG5vZGUgaXMgZGlzYWJsZWRcbiAgICBpZiAodGhpcy5pc0Rpc2FibGVkIHx8IHRoaXMuaXNEaXNhYmxlQ2hlY2tib3gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5uelRyZWVOb2RlLmlzQ2hlY2tlZCA9ICF0aGlzLm56VHJlZU5vZGUuaXNDaGVja2VkO1xuICAgIHRoaXMubnpUcmVlTm9kZS5pc0hhbGZDaGVja2VkID0gZmFsc2U7XG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNldENoZWNrZWROb2RlTGlzdCh0aGlzLm56VHJlZU5vZGUpO1xuICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnY2hlY2snLCB0aGlzLm56VHJlZU5vZGUsIGV2ZW50KTtcbiAgICB0aGlzLm56Q2hlY2tCb3hDaGFuZ2UuZW1pdChldmVudE5leHQpO1xuICB9XG5cbiAgY2xlYXJEcmFnQ2xhc3MoKTogdm9pZCB7XG4gICAgY29uc3QgZHJhZ0NsYXNzID0gWydkcmFnLW92ZXItZ2FwLXRvcCcsICdkcmFnLW92ZXItZ2FwLWJvdHRvbScsICdkcmFnLW92ZXInXTtcbiAgICBkcmFnQ2xhc3MuZm9yRWFjaChlID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGRyYWcgZXZlbnRcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIGhhbmRsZURyYWdTdGFydChlOiBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgLy8gaWUgdGhyb3cgZXJyb3JcbiAgICAgIC8vIGZpcmVmb3gtbmVlZC1pdFxuICAgICAgZS5kYXRhVHJhbnNmZXIhLnNldERhdGEoJ3RleHQvcGxhaW4nLCB0aGlzLm56VHJlZU5vZGUua2V5ISk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIGVtcHR5XG4gICAgfVxuICAgIHRoaXMubnpUcmVlU2VydmljZS5zZXRTZWxlY3RlZE5vZGUodGhpcy5uelRyZWVOb2RlKTtcbiAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdzdGFydCcsIHRoaXMubnpUcmVlTm9kZSwgZSk7XG4gICAgdGhpcy5uek9uRHJhZ1N0YXJ0LmVtaXQoZXZlbnROZXh0KTtcbiAgfVxuXG4gIGhhbmRsZURyYWdFbnRlcihlOiBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gcmVzZXQgcG9zaXRpb25cbiAgICB0aGlzLmRyYWdQb3MgPSAyO1xuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdlbnRlcicsIHRoaXMubnpUcmVlTm9kZSwgZSk7XG4gICAgICB0aGlzLm56T25EcmFnRW50ZXIuZW1pdChldmVudE5leHQpO1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRHJhZ092ZXIoZTogRHJhZ0V2ZW50KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRyb3BQb3NpdGlvbiA9IHRoaXMubnpUcmVlU2VydmljZS5jYWxjRHJvcFBvc2l0aW9uKGUpO1xuICAgIGlmICh0aGlzLmRyYWdQb3MgIT09IGRyb3BQb3NpdGlvbikge1xuICAgICAgdGhpcy5jbGVhckRyYWdDbGFzcygpO1xuICAgICAgdGhpcy5kcmFnUG9zID0gZHJvcFBvc2l0aW9uO1xuICAgICAgLy8gbGVhZiBub2RlIHdpbGwgcGFzc1xuICAgICAgaWYgKCEodGhpcy5kcmFnUG9zID09PSAwICYmIHRoaXMuaXNMZWFmKSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmRyYWdQb3NDbGFzc1t0aGlzLmRyYWdQb3NdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcmFnb3ZlcicsIHRoaXMubnpUcmVlTm9kZSwgZSk7XG4gICAgdGhpcy5uek9uRHJhZ092ZXIuZW1pdChldmVudE5leHQpO1xuICB9XG5cbiAgaGFuZGxlRHJhZ0xlYXZlKGU6IERyYWdFdmVudCk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmNsZWFyRHJhZ0NsYXNzKCk7XG4gICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcmFnbGVhdmUnLCB0aGlzLm56VHJlZU5vZGUsIGUpO1xuICAgIHRoaXMubnpPbkRyYWdMZWF2ZS5lbWl0KGV2ZW50TmV4dCk7XG4gIH1cblxuICBoYW5kbGVEcmFnRHJvcChlOiBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5jbGVhckRyYWdDbGFzcygpO1xuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMubnpUcmVlU2VydmljZS5nZXRTZWxlY3RlZE5vZGUoKTtcbiAgICAgIGlmICghbm9kZSB8fCAobm9kZSAmJiBub2RlLmtleSA9PT0gdGhpcy5uelRyZWVOb2RlLmtleSkgfHwgKHRoaXMuZHJhZ1BvcyA9PT0gMCAmJiB0aGlzLmlzTGVhZikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gcGFzcyBpZiBub2RlIGlzIGxlYWZOb1xuICAgICAgY29uc3QgZHJvcEV2ZW50ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcm9wJywgdGhpcy5uelRyZWVOb2RlLCBlKTtcbiAgICAgIGNvbnN0IGRyYWdFbmRFdmVudCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ2VuZCcsIHRoaXMubnpUcmVlTm9kZSwgZSk7XG4gICAgICBpZiAodGhpcy5uekJlZm9yZURyb3ApIHtcbiAgICAgICAgdGhpcy5uekJlZm9yZURyb3Aoe1xuICAgICAgICAgIGRyYWdOb2RlOiB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0U2VsZWN0ZWROb2RlKCkhLFxuICAgICAgICAgIG5vZGU6IHRoaXMubnpUcmVlTm9kZSxcbiAgICAgICAgICBwb3M6IHRoaXMuZHJhZ1Bvc1xuICAgICAgICB9KS5zdWJzY3JpYmUoKGNhbkRyb3A6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICBpZiAoY2FuRHJvcCkge1xuICAgICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmRyb3BBbmRBcHBseSh0aGlzLm56VHJlZU5vZGUsIHRoaXMuZHJhZ1Bvcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMubnpPbkRyb3AuZW1pdChkcm9wRXZlbnQpO1xuICAgICAgICAgIHRoaXMubnpPbkRyYWdFbmQuZW1pdChkcmFnRW5kRXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5uelRyZWVOb2RlKSB7XG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5kcm9wQW5kQXBwbHkodGhpcy5uelRyZWVOb2RlLCB0aGlzLmRyYWdQb3MpO1xuICAgICAgICB0aGlzLm56T25Ecm9wLmVtaXQoZHJvcEV2ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZURyYWdFbmQoZTogRHJhZ0V2ZW50KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAvLyBpZiB1c2VyIGRvIG5vdCBjdXN0b20gYmVmb3JlRHJvcFxuICAgICAgaWYgKCF0aGlzLm56QmVmb3JlRHJvcCkge1xuICAgICAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdlbmQnLCB0aGlzLm56VHJlZU5vZGUsIGUpO1xuICAgICAgICB0aGlzLm56T25EcmFnRW5kLmVtaXQoZXZlbnROZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5pbmcgdG8gZHJhZ2dpbmcgZXZlbnRzLlxuICAgKi9cbiAgaGFuZERyYWdFdmVudCgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBpZiAodGhpcy5uekRyYWdnYWJsZSkge1xuICAgICAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuICAgICAgICBmcm9tRXZlbnQ8RHJhZ0V2ZW50PihuYXRpdmVFbGVtZW50LCAnZHJhZ3N0YXJ0JylcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgICAgLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdTdGFydChlKSk7XG4gICAgICAgIGZyb21FdmVudDxEcmFnRXZlbnQ+KG5hdGl2ZUVsZW1lbnQsICdkcmFnZW50ZXInKVxuICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKChlOiBEcmFnRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZ0VudGVyKGUpKTtcbiAgICAgICAgZnJvbUV2ZW50PERyYWdFdmVudD4obmF0aXZlRWxlbWVudCwgJ2RyYWdvdmVyJylcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgICAgLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdPdmVyKGUpKTtcbiAgICAgICAgZnJvbUV2ZW50PERyYWdFdmVudD4obmF0aXZlRWxlbWVudCwgJ2RyYWdsZWF2ZScpXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnTGVhdmUoZSkpO1xuICAgICAgICBmcm9tRXZlbnQ8RHJhZ0V2ZW50PihuYXRpdmVFbGVtZW50LCAnZHJvcCcpXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnRHJvcChlKSk7XG4gICAgICAgIGZyb21FdmVudDxEcmFnRXZlbnQ+KG5hdGl2ZUVsZW1lbnQsICdkcmFnZW5kJylcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgICAgLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdFbmQoZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG1hcmtGb3JDaGVjaygpOiB2b2lkIHtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuelRyZWVTZXJ2aWNlOiBOelRyZWVCYXNlU2VydmljZSxcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uelRyZWVOb2RlLmNvbXBvbmVudCA9IHRoaXM7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KTogdm9pZCB7XG4gICAgY29uc3QgeyBuekRyYWdnYWJsZSB9ID0gY2hhbmdlcztcbiAgICBpZiAobnpEcmFnZ2FibGUpIHtcbiAgICAgIHRoaXMuaGFuZERyYWdFdmVudCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19