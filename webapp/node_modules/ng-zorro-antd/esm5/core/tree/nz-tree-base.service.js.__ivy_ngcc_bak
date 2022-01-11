/**
 * @fileoverview added by tsickle
 * Generated from: nz-tree-base.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __values } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NzTreeNode } from './nz-tree-base-node';
import { flattenTreeData, isCheckDisabled, isInArray } from './nz-tree-base-util';
var NzTreeBaseService = /** @class */ (function () {
    function NzTreeBaseService() {
        this.DRAG_SIDE_RANGE = 0.25;
        this.DRAG_MIN_GAP = 2;
        this.isCheckStrictly = false;
        this.isMultiple = false;
        this.rootNodes = [];
        this.flattenNodes$ = new BehaviorSubject([]);
        this.selectedNodeList = [];
        this.expandedNodeList = [];
        this.checkedNodeList = [];
        this.halfCheckedNodeList = [];
        this.matchedNodeList = [];
    }
    /**
     * reset tree nodes will clear default node list
     */
    /**
     * reset tree nodes will clear default node list
     * @param {?} nzNodes
     * @return {?}
     */
    NzTreeBaseService.prototype.initTree = /**
     * reset tree nodes will clear default node list
     * @param {?} nzNodes
     * @return {?}
     */
    function (nzNodes) {
        this.rootNodes = nzNodes;
        this.expandedNodeList = [];
        this.selectedNodeList = [];
        this.halfCheckedNodeList = [];
        this.checkedNodeList = [];
        this.matchedNodeList = [];
    };
    /**
     * @param {?} nzNodes
     * @param {?=} expandedKeys
     * @return {?}
     */
    NzTreeBaseService.prototype.flattenTreeData = /**
     * @param {?} nzNodes
     * @param {?=} expandedKeys
     * @return {?}
     */
    function (nzNodes, expandedKeys) {
        if (expandedKeys === void 0) { expandedKeys = []; }
        this.flattenNodes$.next(flattenTreeData(nzNodes, expandedKeys).map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.data; })));
    };
    /**
     * @return {?}
     */
    NzTreeBaseService.prototype.getSelectedNode = /**
     * @return {?}
     */
    function () {
        return this.selectedNode;
    };
    /**
     * get some list
     */
    /**
     * get some list
     * @return {?}
     */
    NzTreeBaseService.prototype.getSelectedNodeList = /**
     * get some list
     * @return {?}
     */
    function () {
        return this.conductNodeState('select');
    };
    /**
     * return checked nodes
     */
    /**
     * return checked nodes
     * @return {?}
     */
    NzTreeBaseService.prototype.getCheckedNodeList = /**
     * return checked nodes
     * @return {?}
     */
    function () {
        return this.conductNodeState('check');
    };
    /**
     * @return {?}
     */
    NzTreeBaseService.prototype.getHalfCheckedNodeList = /**
     * @return {?}
     */
    function () {
        return this.conductNodeState('halfCheck');
    };
    /**
     * return expanded nodes
     */
    /**
     * return expanded nodes
     * @return {?}
     */
    NzTreeBaseService.prototype.getExpandedNodeList = /**
     * return expanded nodes
     * @return {?}
     */
    function () {
        return this.conductNodeState('expand');
    };
    /**
     * return search matched nodes
     */
    /**
     * return search matched nodes
     * @return {?}
     */
    NzTreeBaseService.prototype.getMatchedNodeList = /**
     * return search matched nodes
     * @return {?}
     */
    function () {
        return this.conductNodeState('match');
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTreeBaseService.prototype.isArrayOfNzTreeNode = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.every((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item instanceof NzTreeNode; }));
    };
    /**
     * set drag node
     */
    /**
     * set drag node
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.setSelectedNode = /**
     * set drag node
     * @param {?} node
     * @return {?}
     */
    function (node) {
        this.selectedNode = node;
    };
    /**
     * set node selected status
     */
    /**
     * set node selected status
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.setNodeActive = /**
     * set node selected status
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (!this.isMultiple && node.isSelected) {
            this.selectedNodeList.forEach((/**
             * @param {?} n
             * @return {?}
             */
            function (n) {
                if (node.key !== n.key) {
                    // reset other nodes
                    n.isSelected = false;
                }
            }));
            // single mode: remove pre node
            this.selectedNodeList = [];
        }
        this.setSelectedNodeList(node, this.isMultiple);
    };
    /**
     * add or remove node to selectedNodeList
     */
    /**
     * add or remove node to selectedNodeList
     * @param {?} node
     * @param {?=} isMultiple
     * @return {?}
     */
    NzTreeBaseService.prototype.setSelectedNodeList = /**
     * add or remove node to selectedNodeList
     * @param {?} node
     * @param {?=} isMultiple
     * @return {?}
     */
    function (node, isMultiple) {
        if (isMultiple === void 0) { isMultiple = false; }
        /** @type {?} */
        var index = this.getIndexOfArray(this.selectedNodeList, node.key);
        if (isMultiple) {
            if (node.isSelected && index === -1) {
                this.selectedNodeList.push(node);
            }
        }
        else {
            if (node.isSelected && index === -1) {
                this.selectedNodeList = [node];
            }
        }
        if (!node.isSelected) {
            this.selectedNodeList = this.selectedNodeList.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return n.key !== node.key; }));
        }
    };
    /**
     * merge checked nodes
     */
    /**
     * merge checked nodes
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.setHalfCheckedNodeList = /**
     * merge checked nodes
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var index = this.getIndexOfArray(this.halfCheckedNodeList, node.key);
        if (node.isHalfChecked && index === -1) {
            this.halfCheckedNodeList.push(node);
        }
        else if (!node.isHalfChecked && index > -1) {
            this.halfCheckedNodeList = this.halfCheckedNodeList.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return node.key !== n.key; }));
        }
    };
    /**
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.setCheckedNodeList = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var index = this.getIndexOfArray(this.checkedNodeList, node.key);
        if (node.isChecked && index === -1) {
            this.checkedNodeList.push(node);
        }
        else if (!node.isChecked && index > -1) {
            this.checkedNodeList = this.checkedNodeList.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return node.key !== n.key; }));
        }
    };
    /**
     * conduct checked/selected/expanded keys
     */
    /**
     * conduct checked/selected/expanded keys
     * @param {?=} type
     * @return {?}
     */
    NzTreeBaseService.prototype.conductNodeState = /**
     * conduct checked/selected/expanded keys
     * @param {?=} type
     * @return {?}
     */
    function (type) {
        var _this = this;
        if (type === void 0) { type = 'check'; }
        /** @type {?} */
        var resultNodesList = [];
        switch (type) {
            case 'select':
                resultNodesList = this.selectedNodeList;
                break;
            case 'expand':
                resultNodesList = this.expandedNodeList;
                break;
            case 'match':
                resultNodesList = this.matchedNodeList;
                break;
            case 'check':
                resultNodesList = this.checkedNodeList;
                /** @type {?} */
                var isIgnore_1 = (/**
                 * @param {?} node
                 * @return {?}
                 */
                function (node) {
                    /** @type {?} */
                    var parentNode = node.getParentNode();
                    if (parentNode) {
                        if (_this.checkedNodeList.findIndex((/**
                         * @param {?} n
                         * @return {?}
                         */
                        function (n) { return n.key === parentNode.key; })) > -1) {
                            return true;
                        }
                        else {
                            return isIgnore_1(parentNode);
                        }
                    }
                    return false;
                });
                // merge checked
                if (!this.isCheckStrictly) {
                    resultNodesList = this.checkedNodeList.filter((/**
                     * @param {?} n
                     * @return {?}
                     */
                    function (n) { return !isIgnore_1(n); }));
                }
                break;
            case 'halfCheck':
                if (!this.isCheckStrictly) {
                    resultNodesList = this.halfCheckedNodeList;
                }
                break;
        }
        return resultNodesList;
    };
    /**
     * set expanded nodes
     */
    /**
     * set expanded nodes
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.setExpandedNodeList = /**
     * set expanded nodes
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (node.isLeaf) {
            return;
        }
        /** @type {?} */
        var index = this.getIndexOfArray(this.expandedNodeList, node.key);
        if (node.isExpanded && index === -1) {
            this.expandedNodeList.push(node);
        }
        else if (!node.isExpanded && index > -1) {
            this.expandedNodeList.splice(index, 1);
        }
    };
    /**
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.setMatchedNodeList = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var index = this.getIndexOfArray(this.matchedNodeList, node.key);
        if (node.isMatched && index === -1) {
            this.matchedNodeList.push(node);
        }
        else if (!node.isMatched && index > -1) {
            this.matchedNodeList.splice(index, 1);
        }
    };
    /**
     * check state
     * @param isCheckStrictly
     */
    /**
     * check state
     * @param {?=} isCheckStrictly
     * @return {?}
     */
    NzTreeBaseService.prototype.refreshCheckState = /**
     * check state
     * @param {?=} isCheckStrictly
     * @return {?}
     */
    function (isCheckStrictly) {
        var _this = this;
        if (isCheckStrictly === void 0) { isCheckStrictly = false; }
        if (isCheckStrictly) {
            return;
        }
        this.checkedNodeList.forEach((/**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            _this.conduct(node, isCheckStrictly);
        }));
    };
    // reset other node checked state based current node
    // reset other node checked state based current node
    /**
     * @param {?} node
     * @param {?=} isCheckStrictly
     * @return {?}
     */
    NzTreeBaseService.prototype.conduct = 
    // reset other node checked state based current node
    /**
     * @param {?} node
     * @param {?=} isCheckStrictly
     * @return {?}
     */
    function (node, isCheckStrictly) {
        if (isCheckStrictly === void 0) { isCheckStrictly = false; }
        /** @type {?} */
        var isChecked = node.isChecked;
        if (node && !isCheckStrictly) {
            this.conductUp(node);
            this.conductDown(node, isChecked);
        }
    };
    /**
     * 1、children half checked
     * 2、children all checked, parent checked
     * 3、no children checked
     */
    /**
     * 1、children half checked
     * 2、children all checked, parent checked
     * 3、no children checked
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.conductUp = /**
     * 1、children half checked
     * 2、children all checked, parent checked
     * 3、no children checked
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var parentNode = node.getParentNode();
        if (parentNode) {
            if (!isCheckDisabled(parentNode)) {
                if (parentNode.children.every((/**
                 * @param {?} child
                 * @return {?}
                 */
                function (child) { return isCheckDisabled(child) || (!child.isHalfChecked && child.isChecked); }))) {
                    parentNode.isChecked = true;
                    parentNode.isHalfChecked = false;
                }
                else if (parentNode.children.some((/**
                 * @param {?} child
                 * @return {?}
                 */
                function (child) { return child.isHalfChecked || child.isChecked; }))) {
                    parentNode.isChecked = false;
                    parentNode.isHalfChecked = true;
                }
                else {
                    parentNode.isChecked = false;
                    parentNode.isHalfChecked = false;
                }
            }
            this.setCheckedNodeList(parentNode);
            this.setHalfCheckedNodeList(parentNode);
            this.conductUp(parentNode);
        }
    };
    /**
     * reset child check state
     */
    /**
     * reset child check state
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    NzTreeBaseService.prototype.conductDown = /**
     * reset child check state
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    function (node, value) {
        var _this = this;
        if (!isCheckDisabled(node)) {
            node.isChecked = value;
            node.isHalfChecked = false;
            this.setCheckedNodeList(node);
            this.setHalfCheckedNodeList(node);
            node.children.forEach((/**
             * @param {?} n
             * @return {?}
             */
            function (n) {
                _this.conductDown(n, value);
            }));
        }
    };
    /**
     * flush after delete node
     */
    /**
     * flush after delete node
     * @param {?} nodes
     * @return {?}
     */
    NzTreeBaseService.prototype.afterRemove = /**
     * flush after delete node
     * @param {?} nodes
     * @return {?}
     */
    function (nodes) {
        var _this = this;
        // to reset selectedNodeList & expandedNodeList
        /** @type {?} */
        var loopNode = (/**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            // remove selected node
            _this.selectedNodeList = _this.selectedNodeList.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return n.key !== node.key; }));
            // remove expanded node
            _this.expandedNodeList = _this.expandedNodeList.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return n.key !== node.key; }));
            // remove checked node
            _this.checkedNodeList = _this.checkedNodeList.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return n.key !== node.key; }));
            if (node.children) {
                node.children.forEach((/**
                 * @param {?} child
                 * @return {?}
                 */
                function (child) {
                    loopNode(child);
                }));
            }
        });
        nodes.forEach((/**
         * @param {?} n
         * @return {?}
         */
        function (n) {
            loopNode(n);
        }));
        this.refreshCheckState(this.isCheckStrictly);
    };
    /**
     * drag event
     */
    /**
     * drag event
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.refreshDragNode = /**
     * drag event
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var _this = this;
        if (node.children.length === 0) {
            // until root
            this.conductUp(node);
        }
        else {
            node.children.forEach((/**
             * @param {?} child
             * @return {?}
             */
            function (child) {
                _this.refreshDragNode(child);
            }));
        }
    };
    // reset node level
    // reset node level
    /**
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.resetNodeLevel = 
    // reset node level
    /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var e_1, _a;
        /** @type {?} */
        var parentNode = node.getParentNode();
        if (parentNode) {
            node.level = parentNode.level + 1;
        }
        else {
            node.level = 0;
        }
        try {
            for (var _b = __values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                this.resetNodeLevel(child);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzTreeBaseService.prototype.calcDropPosition = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var clientY = event.clientY;
        // to fix firefox undefined
        var _a = event.srcElement
            ? ((/** @type {?} */ (event.srcElement))).getBoundingClientRect()
            : ((/** @type {?} */ (event.target))).getBoundingClientRect(), top = _a.top, bottom = _a.bottom, height = _a.height;
        /** @type {?} */
        var des = Math.max(height * this.DRAG_SIDE_RANGE, this.DRAG_MIN_GAP);
        if (clientY <= top + des) {
            return -1;
        }
        else if (clientY >= bottom - des) {
            return 1;
        }
        return 0;
    };
    /**
     * drop
     * 0: inner -1: pre 1: next
     */
    /**
     * drop
     * 0: inner -1: pre 1: next
     * @param {?} targetNode
     * @param {?=} dragPos
     * @return {?}
     */
    NzTreeBaseService.prototype.dropAndApply = /**
     * drop
     * 0: inner -1: pre 1: next
     * @param {?} targetNode
     * @param {?=} dragPos
     * @return {?}
     */
    function (targetNode, dragPos) {
        var _this = this;
        if (dragPos === void 0) { dragPos = -1; }
        if (!targetNode || dragPos > 1) {
            return;
        }
        /** @type {?} */
        var treeService = targetNode.treeService;
        /** @type {?} */
        var targetParent = targetNode.getParentNode();
        /** @type {?} */
        var isSelectedRootNode = this.selectedNode.getParentNode();
        // remove the dragNode
        if (isSelectedRootNode) {
            isSelectedRootNode.children = isSelectedRootNode.children.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return n.key !== _this.selectedNode.key; }));
        }
        else {
            this.rootNodes = this.rootNodes.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return n.key !== _this.selectedNode.key; }));
        }
        switch (dragPos) {
            case 0:
                targetNode.addChildren([this.selectedNode]);
                this.resetNodeLevel(targetNode);
                break;
            case -1:
            case 1:
                /** @type {?} */
                var tIndex = dragPos === 1 ? 1 : 0;
                if (targetParent) {
                    targetParent.addChildren([this.selectedNode], targetParent.children.indexOf(targetNode) + tIndex);
                    /** @type {?} */
                    var parentNode = this.selectedNode.getParentNode();
                    if (parentNode) {
                        this.resetNodeLevel(parentNode);
                    }
                }
                else {
                    /** @type {?} */
                    var targetIndex = this.rootNodes.indexOf(targetNode) + tIndex;
                    // Insert root node.
                    this.rootNodes.splice(targetIndex, 0, this.selectedNode);
                    this.rootNodes[targetIndex].parentNode = null;
                    this.resetNodeLevel(this.rootNodes[targetIndex]);
                }
                break;
        }
        // flush all nodes
        this.rootNodes.forEach((/**
         * @param {?} child
         * @return {?}
         */
        function (child) {
            if (!child.treeService) {
                child.service = treeService;
            }
            _this.refreshDragNode(child);
        }));
    };
    /**
     * emit Structure
     * eventName
     * node
     * event: MouseEvent / DragEvent
     * dragNode
     */
    /**
     * emit Structure
     * eventName
     * node
     * event: MouseEvent / DragEvent
     * dragNode
     * @param {?} eventName
     * @param {?} node
     * @param {?} event
     * @return {?}
     */
    NzTreeBaseService.prototype.formatEvent = /**
     * emit Structure
     * eventName
     * node
     * event: MouseEvent / DragEvent
     * dragNode
     * @param {?} eventName
     * @param {?} node
     * @param {?} event
     * @return {?}
     */
    function (eventName, node, event) {
        /** @type {?} */
        var emitStructure = {
            eventName: eventName,
            node: node,
            event: event
        };
        switch (eventName) {
            case 'dragstart':
            case 'dragenter':
            case 'dragover':
            case 'dragleave':
            case 'drop':
            case 'dragend':
                Object.assign(emitStructure, { dragNode: this.getSelectedNode() });
                break;
            case 'click':
            case 'dblclick':
                Object.assign(emitStructure, { selectedKeys: this.selectedNodeList });
                Object.assign(emitStructure, { nodes: this.selectedNodeList });
                Object.assign(emitStructure, { keys: this.selectedNodeList.map((/**
                     * @param {?} n
                     * @return {?}
                     */
                    function (n) { return n.key; })) });
                break;
            case 'check':
                /** @type {?} */
                var checkedNodeList = this.getCheckedNodeList();
                Object.assign(emitStructure, { checkedKeys: checkedNodeList });
                Object.assign(emitStructure, { nodes: checkedNodeList });
                Object.assign(emitStructure, { keys: checkedNodeList.map((/**
                     * @param {?} n
                     * @return {?}
                     */
                    function (n) { return n.key; })) });
                break;
            case 'search':
                Object.assign(emitStructure, { matchedKeys: this.getMatchedNodeList() });
                Object.assign(emitStructure, { nodes: this.getMatchedNodeList() });
                Object.assign(emitStructure, { keys: this.getMatchedNodeList().map((/**
                     * @param {?} n
                     * @return {?}
                     */
                    function (n) { return n.key; })) });
                break;
            case 'expand':
                Object.assign(emitStructure, { nodes: this.expandedNodeList });
                Object.assign(emitStructure, { keys: this.expandedNodeList.map((/**
                     * @param {?} n
                     * @return {?}
                     */
                    function (n) { return n.key; })) });
                break;
        }
        return emitStructure;
    };
    /**
     * New functions for flatten nodes
     */
    /**
     * New functions for flatten nodes
     * @param {?} list
     * @param {?} key
     * @return {?}
     */
    NzTreeBaseService.prototype.getIndexOfArray = /**
     * New functions for flatten nodes
     * @param {?} list
     * @param {?} key
     * @return {?}
     */
    function (list, key) {
        return list.findIndex((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return v.key === key; }));
    };
    /**
     * Render by nzCheckedKeys
     * When keys equals null, just render with checkStrictly
     * @param keys
     * @param checkStrictly
     */
    /**
     * Render by nzCheckedKeys
     * When keys equals null, just render with checkStrictly
     * @param {?} keys
     * @param {?} checkStrictly
     * @return {?}
     */
    NzTreeBaseService.prototype.conductCheck = /**
     * Render by nzCheckedKeys
     * When keys equals null, just render with checkStrictly
     * @param {?} keys
     * @param {?} checkStrictly
     * @return {?}
     */
    function (keys, checkStrictly) {
        this.checkedNodeList = [];
        this.halfCheckedNodeList = [];
        /** @type {?} */
        var calc = (/**
         * @param {?} nodes
         * @return {?}
         */
        function (nodes) {
            nodes.forEach((/**
             * @param {?} node
             * @return {?}
             */
            function (node) {
                if (keys === null) {
                    // render tree if no default checked keys found
                    node.isChecked = !!node.origin.checked;
                }
                else {
                    if (isInArray(node.key, keys || [])) {
                        node.isChecked = true;
                        node.isHalfChecked = false;
                    }
                    else {
                        node.isChecked = false;
                        node.isHalfChecked = false;
                    }
                }
                if (node.children.length > 0) {
                    calc(node.children);
                }
            }));
        });
        calc(this.rootNodes);
        this.refreshCheckState(checkStrictly);
    };
    /**
     * @param {?=} keys
     * @return {?}
     */
    NzTreeBaseService.prototype.conductExpandedKeys = /**
     * @param {?=} keys
     * @return {?}
     */
    function (keys) {
        var _this = this;
        if (keys === void 0) { keys = []; }
        /** @type {?} */
        var expandedKeySet = new Set(keys === true ? [] : keys);
        this.expandedNodeList = [];
        /** @type {?} */
        var calc = (/**
         * @param {?} nodes
         * @return {?}
         */
        function (nodes) {
            nodes.forEach((/**
             * @param {?} node
             * @return {?}
             */
            function (node) {
                node.setExpanded(keys === true || expandedKeySet.has(node.key) || node.isExpanded === true);
                if (node.isExpanded) {
                    _this.setExpandedNodeList(node);
                }
                if (node.children.length > 0) {
                    calc(node.children);
                }
            }));
        });
        calc(this.rootNodes);
    };
    /**
     * @param {?} keys
     * @param {?} isMulti
     * @return {?}
     */
    NzTreeBaseService.prototype.conductSelectedKeys = /**
     * @param {?} keys
     * @param {?} isMulti
     * @return {?}
     */
    function (keys, isMulti) {
        var _this = this;
        this.selectedNodeList.forEach((/**
         * @param {?} node
         * @return {?}
         */
        function (node) { return (node.isSelected = false); }));
        this.selectedNodeList = [];
        /** @type {?} */
        var calc = (/**
         * @param {?} nodes
         * @return {?}
         */
        function (nodes) {
            return nodes.every((/**
             * @param {?} node
             * @return {?}
             */
            function (node) {
                if (isInArray(node.key, keys)) {
                    node.isSelected = true;
                    _this.setSelectedNodeList(node);
                    if (!isMulti) {
                        // if not support multi select
                        return false;
                    }
                }
                else {
                    node.isSelected = false;
                }
                if (node.children.length > 0) {
                    // Recursion
                    return calc(node.children);
                }
                return true;
            }));
        });
        calc(this.rootNodes);
    };
    /**
     * Expand parent nodes by child node
     * @param node
     */
    /**
     * Expand parent nodes by child node
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.expandNodeAllParentBySearch = /**
     * Expand parent nodes by child node
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var _this = this;
        /** @type {?} */
        var calc = (/**
         * @param {?} n
         * @return {?}
         */
        function (n) {
            if (n) {
                n.canHide = false;
                n.setExpanded(true);
                _this.setExpandedNodeList(n);
                if (n.getParentNode()) {
                    return calc(n.getParentNode());
                }
            }
        });
        calc(node.getParentNode());
    };
    NzTreeBaseService.decorators = [
        { type: Injectable }
    ];
    return NzTreeBaseService;
}());
export { NzTreeBaseService };
if (false) {
    /** @type {?} */
    NzTreeBaseService.prototype.DRAG_SIDE_RANGE;
    /** @type {?} */
    NzTreeBaseService.prototype.DRAG_MIN_GAP;
    /** @type {?} */
    NzTreeBaseService.prototype.isCheckStrictly;
    /** @type {?} */
    NzTreeBaseService.prototype.isMultiple;
    /** @type {?} */
    NzTreeBaseService.prototype.selectedNode;
    /** @type {?} */
    NzTreeBaseService.prototype.rootNodes;
    /** @type {?} */
    NzTreeBaseService.prototype.flattenNodes$;
    /** @type {?} */
    NzTreeBaseService.prototype.selectedNodeList;
    /** @type {?} */
    NzTreeBaseService.prototype.expandedNodeList;
    /** @type {?} */
    NzTreeBaseService.prototype.checkedNodeList;
    /** @type {?} */
    NzTreeBaseService.prototype.halfCheckedNodeList;
    /** @type {?} */
    NzTreeBaseService.prototype.matchedNodeList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1iYXNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvdHJlZS8iLCJzb3VyY2VzIjpbIm56LXRyZWUtYmFzZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLFVBQVUsRUFBaUIsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUdsRjtJQUFBO1FBRUUsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFFakIsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFDakMsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUU1QixjQUFTLEdBQWlCLEVBQUUsQ0FBQztRQUM3QixrQkFBYSxHQUFHLElBQUksZUFBZSxDQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELHFCQUFnQixHQUFpQixFQUFFLENBQUM7UUFDcEMscUJBQWdCLEdBQWlCLEVBQUUsQ0FBQztRQUNwQyxvQkFBZSxHQUFpQixFQUFFLENBQUM7UUFDbkMsd0JBQW1CLEdBQWlCLEVBQUUsQ0FBQztRQUN2QyxvQkFBZSxHQUFpQixFQUFFLENBQUM7SUFrZ0JyQyxDQUFDO0lBaGdCQzs7T0FFRzs7Ozs7O0lBQ0gsb0NBQVE7Ozs7O0lBQVIsVUFBUyxPQUFxQjtRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUN6QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztRQUM5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QTRCLElBQWdCO1FBQTVDLGlCQVlDOztZQVhPLElBQUk7Ozs7UUFBRyxVQUFDLENBQW9CO1lBQ2hDLElBQUksQ0FBQyxFQUFFO2dCQUNMLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUNsQixDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQixLQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFO29CQUNyQixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztpQkFDaEM7YUFDRjtRQUNILENBQUMsQ0FBQTtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUM3QixDQUFDOztnQkEvZ0JGLFVBQVU7O0lBZ2hCWCx3QkFBQztDQUFBLEFBaGhCRCxJQWdoQkM7U0EvZ0JZLGlCQUFpQjs7O0lBQzVCLDRDQUF1Qjs7SUFDdkIseUNBQWlCOztJQUVqQiw0Q0FBaUM7O0lBQ2pDLHVDQUE0Qjs7SUFDNUIseUNBQTBCOztJQUMxQixzQ0FBNkI7O0lBQzdCLDBDQUFzRDs7SUFDdEQsNkNBQW9DOztJQUNwQyw2Q0FBb0M7O0lBQ3BDLDRDQUFtQzs7SUFDbkMsZ0RBQXVDOztJQUN2Qyw0Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE56VHJlZU5vZGUsIE56VHJlZU5vZGVLZXkgfSBmcm9tICcuL256LXRyZWUtYmFzZS1ub2RlJztcbmltcG9ydCB7IGZsYXR0ZW5UcmVlRGF0YSwgaXNDaGVja0Rpc2FibGVkLCBpc0luQXJyYXkgfSBmcm9tICcuL256LXRyZWUtYmFzZS11dGlsJztcbmltcG9ydCB7IE56Rm9ybWF0RW1pdEV2ZW50IH0gZnJvbSAnLi9uei10cmVlLWJhc2UuZGVmaW5pdGlvbnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTnpUcmVlQmFzZVNlcnZpY2Uge1xuICBEUkFHX1NJREVfUkFOR0UgPSAwLjI1O1xuICBEUkFHX01JTl9HQVAgPSAyO1xuXG4gIGlzQ2hlY2tTdHJpY3RseTogYm9vbGVhbiA9IGZhbHNlO1xuICBpc011bHRpcGxlOiBib29sZWFuID0gZmFsc2U7XG4gIHNlbGVjdGVkTm9kZSE6IE56VHJlZU5vZGU7XG4gIHJvb3ROb2RlczogTnpUcmVlTm9kZVtdID0gW107XG4gIGZsYXR0ZW5Ob2RlcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE56VHJlZU5vZGVbXT4oW10pO1xuICBzZWxlY3RlZE5vZGVMaXN0OiBOelRyZWVOb2RlW10gPSBbXTtcbiAgZXhwYW5kZWROb2RlTGlzdDogTnpUcmVlTm9kZVtdID0gW107XG4gIGNoZWNrZWROb2RlTGlzdDogTnpUcmVlTm9kZVtdID0gW107XG4gIGhhbGZDaGVja2VkTm9kZUxpc3Q6IE56VHJlZU5vZGVbXSA9IFtdO1xuICBtYXRjaGVkTm9kZUxpc3Q6IE56VHJlZU5vZGVbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiByZXNldCB0cmVlIG5vZGVzIHdpbGwgY2xlYXIgZGVmYXVsdCBub2RlIGxpc3RcbiAgICovXG4gIGluaXRUcmVlKG56Tm9kZXM6IE56VHJlZU5vZGVbXSk6IHZvaWQge1xuICAgIHRoaXMucm9vdE5vZGVzID0gbnpOb2RlcztcbiAgICB0aGlzLmV4cGFuZGVkTm9kZUxpc3QgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkTm9kZUxpc3QgPSBbXTtcbiAgICB0aGlzLmhhbGZDaGVja2VkTm9kZUxpc3QgPSBbXTtcbiAgICB0aGlzLmNoZWNrZWROb2RlTGlzdCA9IFtdO1xuICAgIHRoaXMubWF0Y2hlZE5vZGVMaXN0ID0gW107XG4gIH1cblxuICBmbGF0dGVuVHJlZURhdGEobnpOb2RlczogTnpUcmVlTm9kZVtdLCBleHBhbmRlZEtleXM6IE56VHJlZU5vZGVLZXlbXSB8IHRydWUgPSBbXSk6IHZvaWQge1xuICAgIHRoaXMuZmxhdHRlbk5vZGVzJC5uZXh0KGZsYXR0ZW5UcmVlRGF0YShuek5vZGVzLCBleHBhbmRlZEtleXMpLm1hcChpdGVtID0+IGl0ZW0uZGF0YSkpO1xuICB9XG5cbiAgZ2V0U2VsZWN0ZWROb2RlKCk6IE56VHJlZU5vZGUgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZE5vZGU7XG4gIH1cblxuICAvKipcbiAgICogZ2V0IHNvbWUgbGlzdFxuICAgKi9cbiAgZ2V0U2VsZWN0ZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLmNvbmR1Y3ROb2RlU3RhdGUoJ3NlbGVjdCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybiBjaGVja2VkIG5vZGVzXG4gICAqL1xuICBnZXRDaGVja2VkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5jb25kdWN0Tm9kZVN0YXRlKCdjaGVjaycpO1xuICB9XG5cbiAgZ2V0SGFsZkNoZWNrZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLmNvbmR1Y3ROb2RlU3RhdGUoJ2hhbGZDaGVjaycpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybiBleHBhbmRlZCBub2Rlc1xuICAgKi9cbiAgZ2V0RXhwYW5kZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLmNvbmR1Y3ROb2RlU3RhdGUoJ2V4cGFuZCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybiBzZWFyY2ggbWF0Y2hlZCBub2Rlc1xuICAgKi9cbiAgZ2V0TWF0Y2hlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZHVjdE5vZGVTdGF0ZSgnbWF0Y2gnKTtcbiAgfVxuXG4gIGlzQXJyYXlPZk56VHJlZU5vZGUodmFsdWU6IE56U2FmZUFueVtdKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGl0ZW0gPT4gaXRlbSBpbnN0YW5jZW9mIE56VHJlZU5vZGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldCBkcmFnIG5vZGVcbiAgICovXG4gIHNldFNlbGVjdGVkTm9kZShub2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZE5vZGUgPSBub2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldCBub2RlIHNlbGVjdGVkIHN0YXR1c1xuICAgKi9cbiAgc2V0Tm9kZUFjdGl2ZShub2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzTXVsdGlwbGUgJiYgbm9kZS5pc1NlbGVjdGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZUxpc3QuZm9yRWFjaChuID0+IHtcbiAgICAgICAgaWYgKG5vZGUua2V5ICE9PSBuLmtleSkge1xuICAgICAgICAgIC8vIHJlc2V0IG90aGVyIG5vZGVzXG4gICAgICAgICAgbi5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gc2luZ2xlIG1vZGU6IHJlbW92ZSBwcmUgbm9kZVxuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVMaXN0ID0gW107XG4gICAgfVxuICAgIHRoaXMuc2V0U2VsZWN0ZWROb2RlTGlzdChub2RlLCB0aGlzLmlzTXVsdGlwbGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIGFkZCBvciByZW1vdmUgbm9kZSB0byBzZWxlY3RlZE5vZGVMaXN0XG4gICAqL1xuICBzZXRTZWxlY3RlZE5vZGVMaXN0KG5vZGU6IE56VHJlZU5vZGUsIGlzTXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRJbmRleE9mQXJyYXkodGhpcy5zZWxlY3RlZE5vZGVMaXN0LCBub2RlLmtleSk7XG4gICAgaWYgKGlzTXVsdGlwbGUpIHtcbiAgICAgIGlmIChub2RlLmlzU2VsZWN0ZWQgJiYgaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWROb2RlTGlzdC5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobm9kZS5pc1NlbGVjdGVkICYmIGluZGV4ID09PSAtMSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkTm9kZUxpc3QgPSBbbm9kZV07XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghbm9kZS5pc1NlbGVjdGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZUxpc3QgPSB0aGlzLnNlbGVjdGVkTm9kZUxpc3QuZmlsdGVyKG4gPT4gbi5rZXkgIT09IG5vZGUua2V5KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogbWVyZ2UgY2hlY2tlZCBub2Rlc1xuICAgKi9cbiAgc2V0SGFsZkNoZWNrZWROb2RlTGlzdChub2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEluZGV4T2ZBcnJheSh0aGlzLmhhbGZDaGVja2VkTm9kZUxpc3QsIG5vZGUua2V5KTtcbiAgICBpZiAobm9kZS5pc0hhbGZDaGVja2VkICYmIGluZGV4ID09PSAtMSkge1xuICAgICAgdGhpcy5oYWxmQ2hlY2tlZE5vZGVMaXN0LnB1c2gobm9kZSk7XG4gICAgfSBlbHNlIGlmICghbm9kZS5pc0hhbGZDaGVja2VkICYmIGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuaGFsZkNoZWNrZWROb2RlTGlzdCA9IHRoaXMuaGFsZkNoZWNrZWROb2RlTGlzdC5maWx0ZXIobiA9PiBub2RlLmtleSAhPT0gbi5rZXkpO1xuICAgIH1cbiAgfVxuXG4gIHNldENoZWNrZWROb2RlTGlzdChub2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEluZGV4T2ZBcnJheSh0aGlzLmNoZWNrZWROb2RlTGlzdCwgbm9kZS5rZXkpO1xuICAgIGlmIChub2RlLmlzQ2hlY2tlZCAmJiBpbmRleCA9PT0gLTEpIHtcbiAgICAgIHRoaXMuY2hlY2tlZE5vZGVMaXN0LnB1c2gobm9kZSk7XG4gICAgfSBlbHNlIGlmICghbm9kZS5pc0NoZWNrZWQgJiYgaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5jaGVja2VkTm9kZUxpc3QgPSB0aGlzLmNoZWNrZWROb2RlTGlzdC5maWx0ZXIobiA9PiBub2RlLmtleSAhPT0gbi5rZXkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBjb25kdWN0IGNoZWNrZWQvc2VsZWN0ZWQvZXhwYW5kZWQga2V5c1xuICAgKi9cbiAgY29uZHVjdE5vZGVTdGF0ZSh0eXBlOiBzdHJpbmcgPSAnY2hlY2snKTogTnpUcmVlTm9kZVtdIHtcbiAgICBsZXQgcmVzdWx0Tm9kZXNMaXN0OiBOelRyZWVOb2RlW10gPSBbXTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgIHJlc3VsdE5vZGVzTGlzdCA9IHRoaXMuc2VsZWN0ZWROb2RlTGlzdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdleHBhbmQnOlxuICAgICAgICByZXN1bHROb2Rlc0xpc3QgPSB0aGlzLmV4cGFuZGVkTm9kZUxpc3Q7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbWF0Y2gnOlxuICAgICAgICByZXN1bHROb2Rlc0xpc3QgPSB0aGlzLm1hdGNoZWROb2RlTGlzdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjaGVjayc6XG4gICAgICAgIHJlc3VsdE5vZGVzTGlzdCA9IHRoaXMuY2hlY2tlZE5vZGVMaXN0O1xuICAgICAgICBjb25zdCBpc0lnbm9yZSA9IChub2RlOiBOelRyZWVOb2RlKTogYm9vbGVhbiA9PiB7XG4gICAgICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IG5vZGUuZ2V0UGFyZW50Tm9kZSgpO1xuICAgICAgICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja2VkTm9kZUxpc3QuZmluZEluZGV4KG4gPT4gbi5rZXkgPT09IHBhcmVudE5vZGUua2V5KSA+IC0xKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGlzSWdub3JlKHBhcmVudE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIC8vIG1lcmdlIGNoZWNrZWRcbiAgICAgICAgaWYgKCF0aGlzLmlzQ2hlY2tTdHJpY3RseSkge1xuICAgICAgICAgIHJlc3VsdE5vZGVzTGlzdCA9IHRoaXMuY2hlY2tlZE5vZGVMaXN0LmZpbHRlcihuID0+ICFpc0lnbm9yZShuKSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdoYWxmQ2hlY2snOlxuICAgICAgICBpZiAoIXRoaXMuaXNDaGVja1N0cmljdGx5KSB7XG4gICAgICAgICAgcmVzdWx0Tm9kZXNMaXN0ID0gdGhpcy5oYWxmQ2hlY2tlZE5vZGVMaXN0O1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0Tm9kZXNMaXN0O1xuICB9XG5cbiAgLyoqXG4gICAqIHNldCBleHBhbmRlZCBub2Rlc1xuICAgKi9cbiAgc2V0RXhwYW5kZWROb2RlTGlzdChub2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XG4gICAgaWYgKG5vZGUuaXNMZWFmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRJbmRleE9mQXJyYXkodGhpcy5leHBhbmRlZE5vZGVMaXN0LCBub2RlLmtleSk7XG4gICAgaWYgKG5vZGUuaXNFeHBhbmRlZCAmJiBpbmRleCA9PT0gLTEpIHtcbiAgICAgIHRoaXMuZXhwYW5kZWROb2RlTGlzdC5wdXNoKG5vZGUpO1xuICAgIH0gZWxzZSBpZiAoIW5vZGUuaXNFeHBhbmRlZCAmJiBpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLmV4cGFuZGVkTm9kZUxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cblxuICBzZXRNYXRjaGVkTm9kZUxpc3Qobm9kZTogTnpUcmVlTm9kZSk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRJbmRleE9mQXJyYXkodGhpcy5tYXRjaGVkTm9kZUxpc3QsIG5vZGUua2V5KTtcbiAgICBpZiAobm9kZS5pc01hdGNoZWQgJiYgaW5kZXggPT09IC0xKSB7XG4gICAgICB0aGlzLm1hdGNoZWROb2RlTGlzdC5wdXNoKG5vZGUpO1xuICAgIH0gZWxzZSBpZiAoIW5vZGUuaXNNYXRjaGVkICYmIGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMubWF0Y2hlZE5vZGVMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGNoZWNrIHN0YXRlXG4gICAqIEBwYXJhbSBpc0NoZWNrU3RyaWN0bHlcbiAgICovXG4gIHJlZnJlc2hDaGVja1N0YXRlKGlzQ2hlY2tTdHJpY3RseTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgaWYgKGlzQ2hlY2tTdHJpY3RseSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNoZWNrZWROb2RlTGlzdC5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgdGhpcy5jb25kdWN0KG5vZGUsIGlzQ2hlY2tTdHJpY3RseSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyByZXNldCBvdGhlciBub2RlIGNoZWNrZWQgc3RhdGUgYmFzZWQgY3VycmVudCBub2RlXG4gIGNvbmR1Y3Qobm9kZTogTnpUcmVlTm9kZSwgaXNDaGVja1N0cmljdGx5OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBjb25zdCBpc0NoZWNrZWQgPSBub2RlLmlzQ2hlY2tlZDtcbiAgICBpZiAobm9kZSAmJiAhaXNDaGVja1N0cmljdGx5KSB7XG4gICAgICB0aGlzLmNvbmR1Y3RVcChub2RlKTtcbiAgICAgIHRoaXMuY29uZHVjdERvd24obm9kZSwgaXNDaGVja2VkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogMeOAgWNoaWxkcmVuIGhhbGYgY2hlY2tlZFxuICAgKiAy44CBY2hpbGRyZW4gYWxsIGNoZWNrZWQsIHBhcmVudCBjaGVja2VkXG4gICAqIDPjgIFubyBjaGlsZHJlbiBjaGVja2VkXG4gICAqL1xuICBjb25kdWN0VXAobm9kZTogTnpUcmVlTm9kZSk6IHZvaWQge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBub2RlLmdldFBhcmVudE5vZGUoKTtcbiAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgaWYgKCFpc0NoZWNrRGlzYWJsZWQocGFyZW50Tm9kZSkpIHtcbiAgICAgICAgaWYgKHBhcmVudE5vZGUuY2hpbGRyZW4uZXZlcnkoY2hpbGQgPT4gaXNDaGVja0Rpc2FibGVkKGNoaWxkKSB8fCAoIWNoaWxkLmlzSGFsZkNoZWNrZWQgJiYgY2hpbGQuaXNDaGVja2VkKSkpIHtcbiAgICAgICAgICBwYXJlbnROb2RlLmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgcGFyZW50Tm9kZS5pc0hhbGZDaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAocGFyZW50Tm9kZS5jaGlsZHJlbi5zb21lKGNoaWxkID0+IGNoaWxkLmlzSGFsZkNoZWNrZWQgfHwgY2hpbGQuaXNDaGVja2VkKSkge1xuICAgICAgICAgIHBhcmVudE5vZGUuaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgcGFyZW50Tm9kZS5pc0hhbGZDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJlbnROb2RlLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgIHBhcmVudE5vZGUuaXNIYWxmQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnNldENoZWNrZWROb2RlTGlzdChwYXJlbnROb2RlKTtcbiAgICAgIHRoaXMuc2V0SGFsZkNoZWNrZWROb2RlTGlzdChwYXJlbnROb2RlKTtcbiAgICAgIHRoaXMuY29uZHVjdFVwKHBhcmVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiByZXNldCBjaGlsZCBjaGVjayBzdGF0ZVxuICAgKi9cbiAgY29uZHVjdERvd24obm9kZTogTnpUcmVlTm9kZSwgdmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIWlzQ2hlY2tEaXNhYmxlZChub2RlKSkge1xuICAgICAgbm9kZS5pc0NoZWNrZWQgPSB2YWx1ZTtcbiAgICAgIG5vZGUuaXNIYWxmQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5zZXRDaGVja2VkTm9kZUxpc3Qobm9kZSk7XG4gICAgICB0aGlzLnNldEhhbGZDaGVja2VkTm9kZUxpc3Qobm9kZSk7XG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2gobiA9PiB7XG4gICAgICAgIHRoaXMuY29uZHVjdERvd24obiwgdmFsdWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGZsdXNoIGFmdGVyIGRlbGV0ZSBub2RlXG4gICAqL1xuICBhZnRlclJlbW92ZShub2RlczogTnpUcmVlTm9kZVtdKTogdm9pZCB7XG4gICAgLy8gdG8gcmVzZXQgc2VsZWN0ZWROb2RlTGlzdCAmIGV4cGFuZGVkTm9kZUxpc3RcbiAgICBjb25zdCBsb29wTm9kZSA9IChub2RlOiBOelRyZWVOb2RlKSA9PiB7XG4gICAgICAvLyByZW1vdmUgc2VsZWN0ZWQgbm9kZVxuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVMaXN0ID0gdGhpcy5zZWxlY3RlZE5vZGVMaXN0LmZpbHRlcihuID0+IG4ua2V5ICE9PSBub2RlLmtleSk7XG4gICAgICAvLyByZW1vdmUgZXhwYW5kZWQgbm9kZVxuICAgICAgdGhpcy5leHBhbmRlZE5vZGVMaXN0ID0gdGhpcy5leHBhbmRlZE5vZGVMaXN0LmZpbHRlcihuID0+IG4ua2V5ICE9PSBub2RlLmtleSk7XG4gICAgICAvLyByZW1vdmUgY2hlY2tlZCBub2RlXG4gICAgICB0aGlzLmNoZWNrZWROb2RlTGlzdCA9IHRoaXMuY2hlY2tlZE5vZGVMaXN0LmZpbHRlcihuID0+IG4ua2V5ICE9PSBub2RlLmtleSk7XG4gICAgICBpZiAobm9kZS5jaGlsZHJlbikge1xuICAgICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgIGxvb3BOb2RlKGNoaWxkKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBub2Rlcy5mb3JFYWNoKG4gPT4ge1xuICAgICAgbG9vcE5vZGUobik7XG4gICAgfSk7XG4gICAgdGhpcy5yZWZyZXNoQ2hlY2tTdGF0ZSh0aGlzLmlzQ2hlY2tTdHJpY3RseSk7XG4gIH1cblxuICAvKipcbiAgICogZHJhZyBldmVudFxuICAgKi9cbiAgcmVmcmVzaERyYWdOb2RlKG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkIHtcbiAgICBpZiAobm9kZS5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIHVudGlsIHJvb3RcbiAgICAgIHRoaXMuY29uZHVjdFVwKG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICB0aGlzLnJlZnJlc2hEcmFnTm9kZShjaGlsZCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyByZXNldCBub2RlIGxldmVsXG4gIHJlc2V0Tm9kZUxldmVsKG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gbm9kZS5nZXRQYXJlbnROb2RlKCk7XG4gICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgIG5vZGUubGV2ZWwgPSBwYXJlbnROb2RlLmxldmVsICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZS5sZXZlbCA9IDA7XG4gICAgfVxuICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuICAgICAgdGhpcy5yZXNldE5vZGVMZXZlbChjaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgY2FsY0Ryb3BQb3NpdGlvbihldmVudDogRHJhZ0V2ZW50KTogbnVtYmVyIHtcbiAgICBjb25zdCB7IGNsaWVudFkgfSA9IGV2ZW50O1xuICAgIC8vIHRvIGZpeCBmaXJlZm94IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdG9wLCBib3R0b20sIGhlaWdodCB9ID0gZXZlbnQuc3JjRWxlbWVudFxuICAgICAgPyAoZXZlbnQuc3JjRWxlbWVudCBhcyBFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgOiAoZXZlbnQudGFyZ2V0IGFzIEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGRlcyA9IE1hdGgubWF4KGhlaWdodCAqIHRoaXMuRFJBR19TSURFX1JBTkdFLCB0aGlzLkRSQUdfTUlOX0dBUCk7XG5cbiAgICBpZiAoY2xpZW50WSA8PSB0b3AgKyBkZXMpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9IGVsc2UgaWYgKGNsaWVudFkgPj0gYm90dG9tIC0gZGVzKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBkcm9wXG4gICAqIDA6IGlubmVyIC0xOiBwcmUgMTogbmV4dFxuICAgKi9cbiAgZHJvcEFuZEFwcGx5KHRhcmdldE5vZGU6IE56VHJlZU5vZGUsIGRyYWdQb3M6IG51bWJlciA9IC0xKTogdm9pZCB7XG4gICAgaWYgKCF0YXJnZXROb2RlIHx8IGRyYWdQb3MgPiAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRyZWVTZXJ2aWNlID0gdGFyZ2V0Tm9kZS50cmVlU2VydmljZTtcbiAgICBjb25zdCB0YXJnZXRQYXJlbnQgPSB0YXJnZXROb2RlLmdldFBhcmVudE5vZGUoKTtcbiAgICBjb25zdCBpc1NlbGVjdGVkUm9vdE5vZGUgPSB0aGlzLnNlbGVjdGVkTm9kZS5nZXRQYXJlbnROb2RlKCk7XG4gICAgLy8gcmVtb3ZlIHRoZSBkcmFnTm9kZVxuICAgIGlmIChpc1NlbGVjdGVkUm9vdE5vZGUpIHtcbiAgICAgIGlzU2VsZWN0ZWRSb290Tm9kZS5jaGlsZHJlbiA9IGlzU2VsZWN0ZWRSb290Tm9kZS5jaGlsZHJlbi5maWx0ZXIobiA9PiBuLmtleSAhPT0gdGhpcy5zZWxlY3RlZE5vZGUua2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb290Tm9kZXMgPSB0aGlzLnJvb3ROb2Rlcy5maWx0ZXIobiA9PiBuLmtleSAhPT0gdGhpcy5zZWxlY3RlZE5vZGUua2V5KTtcbiAgICB9XG4gICAgc3dpdGNoIChkcmFnUG9zKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHRhcmdldE5vZGUuYWRkQ2hpbGRyZW4oW3RoaXMuc2VsZWN0ZWROb2RlXSk7XG4gICAgICAgIHRoaXMucmVzZXROb2RlTGV2ZWwodGFyZ2V0Tm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAtMTpcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgY29uc3QgdEluZGV4ID0gZHJhZ1BvcyA9PT0gMSA/IDEgOiAwO1xuICAgICAgICBpZiAodGFyZ2V0UGFyZW50KSB7XG4gICAgICAgICAgdGFyZ2V0UGFyZW50LmFkZENoaWxkcmVuKFt0aGlzLnNlbGVjdGVkTm9kZV0sIHRhcmdldFBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRhcmdldE5vZGUpICsgdEluZGV4KTtcbiAgICAgICAgICBjb25zdCBwYXJlbnROb2RlID0gdGhpcy5zZWxlY3RlZE5vZGUuZ2V0UGFyZW50Tm9kZSgpO1xuICAgICAgICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0Tm9kZUxldmVsKHBhcmVudE5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB0YXJnZXRJbmRleCA9IHRoaXMucm9vdE5vZGVzLmluZGV4T2YodGFyZ2V0Tm9kZSkgKyB0SW5kZXg7XG4gICAgICAgICAgLy8gSW5zZXJ0IHJvb3Qgbm9kZS5cbiAgICAgICAgICB0aGlzLnJvb3ROb2Rlcy5zcGxpY2UodGFyZ2V0SW5kZXgsIDAsIHRoaXMuc2VsZWN0ZWROb2RlKTtcbiAgICAgICAgICB0aGlzLnJvb3ROb2Rlc1t0YXJnZXRJbmRleF0ucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgICAgdGhpcy5yZXNldE5vZGVMZXZlbCh0aGlzLnJvb3ROb2Rlc1t0YXJnZXRJbmRleF0pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBmbHVzaCBhbGwgbm9kZXNcbiAgICB0aGlzLnJvb3ROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgIGlmICghY2hpbGQudHJlZVNlcnZpY2UpIHtcbiAgICAgICAgY2hpbGQuc2VydmljZSA9IHRyZWVTZXJ2aWNlO1xuICAgICAgfVxuICAgICAgdGhpcy5yZWZyZXNoRHJhZ05vZGUoY2hpbGQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGVtaXQgU3RydWN0dXJlXG4gICAqIGV2ZW50TmFtZVxuICAgKiBub2RlXG4gICAqIGV2ZW50OiBNb3VzZUV2ZW50IC8gRHJhZ0V2ZW50XG4gICAqIGRyYWdOb2RlXG4gICAqL1xuICBmb3JtYXRFdmVudChldmVudE5hbWU6IHN0cmluZywgbm9kZTogTnpUcmVlTm9kZSB8IG51bGwsIGV2ZW50OiBNb3VzZUV2ZW50IHwgRHJhZ0V2ZW50IHwgbnVsbCk6IE56Rm9ybWF0RW1pdEV2ZW50IHtcbiAgICBjb25zdCBlbWl0U3RydWN0dXJlOiBOekZvcm1hdEVtaXRFdmVudCA9IHtcbiAgICAgIGV2ZW50TmFtZTogZXZlbnROYW1lLFxuICAgICAgbm9kZTogbm9kZSxcbiAgICAgIGV2ZW50OiBldmVudFxuICAgIH07XG4gICAgc3dpdGNoIChldmVudE5hbWUpIHtcbiAgICAgIGNhc2UgJ2RyYWdzdGFydCc6XG4gICAgICBjYXNlICdkcmFnZW50ZXInOlxuICAgICAgY2FzZSAnZHJhZ292ZXInOlxuICAgICAgY2FzZSAnZHJhZ2xlYXZlJzpcbiAgICAgIGNhc2UgJ2Ryb3AnOlxuICAgICAgY2FzZSAnZHJhZ2VuZCc6XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1pdFN0cnVjdHVyZSwgeyBkcmFnTm9kZTogdGhpcy5nZXRTZWxlY3RlZE5vZGUoKSB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjbGljayc6XG4gICAgICBjYXNlICdkYmxjbGljayc6XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1pdFN0cnVjdHVyZSwgeyBzZWxlY3RlZEtleXM6IHRoaXMuc2VsZWN0ZWROb2RlTGlzdCB9KTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7IG5vZGVzOiB0aGlzLnNlbGVjdGVkTm9kZUxpc3QgfSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1pdFN0cnVjdHVyZSwgeyBrZXlzOiB0aGlzLnNlbGVjdGVkTm9kZUxpc3QubWFwKG4gPT4gbi5rZXkpIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NoZWNrJzpcbiAgICAgICAgY29uc3QgY2hlY2tlZE5vZGVMaXN0ID0gdGhpcy5nZXRDaGVja2VkTm9kZUxpc3QoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7IGNoZWNrZWRLZXlzOiBjaGVja2VkTm9kZUxpc3QgfSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1pdFN0cnVjdHVyZSwgeyBub2RlczogY2hlY2tlZE5vZGVMaXN0IH0pO1xuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsga2V5czogY2hlY2tlZE5vZGVMaXN0Lm1hcChuID0+IG4ua2V5KSB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzZWFyY2gnOlxuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgbWF0Y2hlZEtleXM6IHRoaXMuZ2V0TWF0Y2hlZE5vZGVMaXN0KCkgfSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1pdFN0cnVjdHVyZSwgeyBub2RlczogdGhpcy5nZXRNYXRjaGVkTm9kZUxpc3QoKSB9KTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7IGtleXM6IHRoaXMuZ2V0TWF0Y2hlZE5vZGVMaXN0KCkubWFwKG4gPT4gbi5rZXkpIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2V4cGFuZCc6XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1pdFN0cnVjdHVyZSwgeyBub2RlczogdGhpcy5leHBhbmRlZE5vZGVMaXN0IH0pO1xuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsga2V5czogdGhpcy5leHBhbmRlZE5vZGVMaXN0Lm1hcChuID0+IG4ua2V5KSB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBlbWl0U3RydWN0dXJlO1xuICB9XG5cbiAgLyoqXG4gICAqIE5ldyBmdW5jdGlvbnMgZm9yIGZsYXR0ZW4gbm9kZXNcbiAgICovXG5cbiAgZ2V0SW5kZXhPZkFycmF5KGxpc3Q6IE56VHJlZU5vZGVbXSwga2V5OiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiBsaXN0LmZpbmRJbmRleCh2ID0+IHYua2V5ID09PSBrZXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBieSBuekNoZWNrZWRLZXlzXG4gICAqIFdoZW4ga2V5cyBlcXVhbHMgbnVsbCwganVzdCByZW5kZXIgd2l0aCBjaGVja1N0cmljdGx5XG4gICAqIEBwYXJhbSBrZXlzXG4gICAqIEBwYXJhbSBjaGVja1N0cmljdGx5XG4gICAqL1xuICBjb25kdWN0Q2hlY2soa2V5czogTnpUcmVlTm9kZUtleVtdIHwgbnVsbCwgY2hlY2tTdHJpY3RseTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tlZE5vZGVMaXN0ID0gW107XG4gICAgdGhpcy5oYWxmQ2hlY2tlZE5vZGVMaXN0ID0gW107XG4gICAgY29uc3QgY2FsYyA9IChub2RlczogTnpUcmVlTm9kZVtdKSA9PiB7XG4gICAgICBub2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICBpZiAoa2V5cyA9PT0gbnVsbCkge1xuICAgICAgICAgIC8vIHJlbmRlciB0cmVlIGlmIG5vIGRlZmF1bHQgY2hlY2tlZCBrZXlzIGZvdW5kXG4gICAgICAgICAgbm9kZS5pc0NoZWNrZWQgPSAhIW5vZGUub3JpZ2luLmNoZWNrZWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGlzSW5BcnJheShub2RlLmtleSwga2V5cyB8fCBbXSkpIHtcbiAgICAgICAgICAgIG5vZGUuaXNDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIG5vZGUuaXNIYWxmQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgbm9kZS5pc0hhbGZDaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjYWxjKG5vZGUuY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGNhbGModGhpcy5yb290Tm9kZXMpO1xuICAgIHRoaXMucmVmcmVzaENoZWNrU3RhdGUoY2hlY2tTdHJpY3RseSk7XG4gIH1cblxuICBjb25kdWN0RXhwYW5kZWRLZXlzKGtleXM6IE56VHJlZU5vZGVLZXlbXSB8IHRydWUgPSBbXSk6IHZvaWQge1xuICAgIGNvbnN0IGV4cGFuZGVkS2V5U2V0ID0gbmV3IFNldChrZXlzID09PSB0cnVlID8gW10gOiBrZXlzKTtcbiAgICB0aGlzLmV4cGFuZGVkTm9kZUxpc3QgPSBbXTtcbiAgICBjb25zdCBjYWxjID0gKG5vZGVzOiBOelRyZWVOb2RlW10pID0+IHtcbiAgICAgIG5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIG5vZGUuc2V0RXhwYW5kZWQoa2V5cyA9PT0gdHJ1ZSB8fCBleHBhbmRlZEtleVNldC5oYXMobm9kZS5rZXkpIHx8IG5vZGUuaXNFeHBhbmRlZCA9PT0gdHJ1ZSk7XG4gICAgICAgIGlmIChub2RlLmlzRXhwYW5kZWQpIHtcbiAgICAgICAgICB0aGlzLnNldEV4cGFuZGVkTm9kZUxpc3Qobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNhbGMobm9kZS5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgY2FsYyh0aGlzLnJvb3ROb2Rlcyk7XG4gIH1cblxuICBjb25kdWN0U2VsZWN0ZWRLZXlzKGtleXM6IE56VHJlZU5vZGVLZXlbXSwgaXNNdWx0aTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWROb2RlTGlzdC5mb3JFYWNoKG5vZGUgPT4gKG5vZGUuaXNTZWxlY3RlZCA9IGZhbHNlKSk7XG4gICAgdGhpcy5zZWxlY3RlZE5vZGVMaXN0ID0gW107XG4gICAgY29uc3QgY2FsYyA9IChub2RlczogTnpUcmVlTm9kZVtdKTogYm9vbGVhbiA9PiB7XG4gICAgICByZXR1cm4gbm9kZXMuZXZlcnkobm9kZSA9PiB7XG4gICAgICAgIGlmIChpc0luQXJyYXkobm9kZS5rZXksIGtleXMpKSB7XG4gICAgICAgICAgbm9kZS5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnNldFNlbGVjdGVkTm9kZUxpc3Qobm9kZSk7XG4gICAgICAgICAgaWYgKCFpc011bHRpKSB7XG4gICAgICAgICAgICAvLyBpZiBub3Qgc3VwcG9ydCBtdWx0aSBzZWxlY3RcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZS5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIC8vIFJlY3Vyc2lvblxuICAgICAgICAgIHJldHVybiBjYWxjKG5vZGUuY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBjYWxjKHRoaXMucm9vdE5vZGVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBhbmQgcGFyZW50IG5vZGVzIGJ5IGNoaWxkIG5vZGVcbiAgICogQHBhcmFtIG5vZGVcbiAgICovXG4gIGV4cGFuZE5vZGVBbGxQYXJlbnRCeVNlYXJjaChub2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XG4gICAgY29uc3QgY2FsYyA9IChuOiBOelRyZWVOb2RlIHwgbnVsbCk6IHZvaWQgPT4ge1xuICAgICAgaWYgKG4pIHtcbiAgICAgICAgbi5jYW5IaWRlID0gZmFsc2U7XG4gICAgICAgIG4uc2V0RXhwYW5kZWQodHJ1ZSk7XG4gICAgICAgIHRoaXMuc2V0RXhwYW5kZWROb2RlTGlzdChuKTtcbiAgICAgICAgaWYgKG4uZ2V0UGFyZW50Tm9kZSgpKSB7XG4gICAgICAgICAgcmV0dXJuIGNhbGMobi5nZXRQYXJlbnROb2RlKCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBjYWxjKG5vZGUuZ2V0UGFyZW50Tm9kZSgpKTtcbiAgfVxufVxuIl19