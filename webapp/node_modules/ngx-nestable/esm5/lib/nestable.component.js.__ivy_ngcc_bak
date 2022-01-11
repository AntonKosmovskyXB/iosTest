/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import * as helper from './nestable.helper';
import { defaultSettings, DRAG_START, EXPAND_COLLAPSE, mouse, REGISTER_HANDLE } from './nestable.constant';
/** @type {?} */
var PX = 'px';
var ɵ0 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    var el = document.createElement('div');
    /** @type {?} */
    var docEl = document.documentElement;
    if (!('pointerEvents' in el.style)) {
        return false;
    }
    el.style.pointerEvents = 'auto';
    el.style.pointerEvents = 'x';
    docEl.appendChild(el);
    /** @type {?} */
    var supports = window.getComputedStyle &&
        window.getComputedStyle(el, '').pointerEvents === 'auto';
    docEl.removeChild(el);
    return !!supports;
};
/** @type {?} */
var hasPointerEvents = ((ɵ0))();
var NestableComponent = /** @class */ (function () {
    function NestableComponent(ref, renderer, el, zone) {
        this.ref = ref;
        this.renderer = renderer;
        this.el = el;
        this.zone = zone;
        this.listChange = new EventEmitter();
        this.drop = new EventEmitter();
        this.drag = new EventEmitter();
        this.disclosure = new EventEmitter();
        this.options = defaultSettings;
        this.disableDrag = false;
        this.dragRootEl = null;
        this.dragEl = null;
        this.dragModel = null;
        this.moving = false;
        /**
         * Dragged element contains children, and those children contain other children and so on...
         * This property gives you the number of generations contained within the dragging item.
         */
        this.dragDepth = 0;
        /**
         * The depth of dragging item relative to element root (ngx-nestable)
         */
        this.relativeDepth = 0;
        this.hasNewRoot = false;
        this.pointEl = null;
        this.items = [];
        this._componentActive = false;
        this._mouse = Object.assign({}, mouse);
        this._list = [];
        this._itemId = 0;
        this._registerHandleDirective = false;
    }
    Object.defineProperty(NestableComponent.prototype, "list", {
        get: /**
         * @return {?}
         */
        function () {
            return this._list;
        },
        set: /**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            this._list = list;
            this._generateItemIds();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NestableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        // set/extend default options
        this._componentActive = true;
        /** @type {?} */
        var optionKeys = Object.keys(defaultSettings);
        try {
            for (var optionKeys_1 = tslib_1.__values(optionKeys), optionKeys_1_1 = optionKeys_1.next(); !optionKeys_1_1.done; optionKeys_1_1 = optionKeys_1.next()) {
                var key = optionKeys_1_1.value;
                if (typeof this.options[key] === 'undefined') {
                    this.options[key] = defaultSettings[key];
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (optionKeys_1_1 && !optionKeys_1_1.done && (_a = optionKeys_1.return)) _a.call(optionKeys_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this._generateItemIds();
        this._generateItemExpanded();
        this._createHandleListener();
    };
    /**
     * @return {?}
     */
    NestableComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @private
     * @return {?}
     */
    NestableComponent.prototype._generateItemIds = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        helper._traverseChildren(this._list, (/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            item['$$id'] = _this._itemId++;
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NestableComponent.prototype._generateItemExpanded = /**
     * @private
     * @return {?}
     */
    function () {
        helper._traverseChildren(this._list, (/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (typeof item.expanded === 'undefined') {
                item['$$expanded'] = true;
            }
            else {
                item['$$expanded'] = item.expanded;
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NestableComponent.prototype._createHandleListener = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.renderer.listen(this.el.nativeElement, REGISTER_HANDLE, (/**
         * @return {?}
         */
        function () {
            _this._registerHandleDirective = true;
        }));
        this.renderer.listen(this.el.nativeElement, DRAG_START, (/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.dragStart(data.detail.event, data.detail.param.item, data.detail.param.parentList);
        }));
        this.renderer.listen(this.el.nativeElement, EXPAND_COLLAPSE, (/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.disclosure.emit({
                item: data.detail.item,
                expanded: data.detail.item['$$expanded']
            });
        }));
    };
    /**
     * @private
     * @param {?} event
     * @param {?} dragItem
     * @return {?}
     */
    NestableComponent.prototype._createDragClone = /**
     * @private
     * @param {?} event
     * @param {?} dragItem
     * @return {?}
     */
    function (event, dragItem) {
        this._mouseStart(event, dragItem);
        if (!this._registerHandleDirective) {
            this._mouse.offsetY = dragItem.nextElementSibling
                ? dragItem.nextElementSibling.clientHeight / 2
                : dragItem.clientHeight / 2;
        }
        // create drag clone
        this.dragEl = document.createElement(this.options.listNodeName);
        document.body.appendChild(this.dragEl);
        this.renderer.addClass(this.dragEl, this.options.dragClass);
        // add drag clone to body and set css
        this.renderer.setStyle(this.dragEl, 'left', event.pageX - this._mouse.offsetX + PX);
        this.renderer.setStyle(this.dragEl, 'top', event.pageY - this._mouse.offsetY + PX);
        this.renderer.setStyle(this.dragEl, 'position', 'absolute');
        this.renderer.setStyle(this.dragEl, 'z-index', 9999);
        this.renderer.setStyle(this.dragEl, 'pointer-events', 'none');
    };
    /**
     * @private
     * @param {?} event
     * @param {?} dragItem
     * @return {?}
     */
    NestableComponent.prototype._createPlaceholder = /**
     * @private
     * @param {?} event
     * @param {?} dragItem
     * @return {?}
     */
    function (event, dragItem) {
        this._placeholder = document.createElement('div');
        this._placeholder.classList.add(this.options.placeClass);
        helper._insertAfter(this._placeholder, dragItem);
        dragItem.parentNode.removeChild(dragItem);
        this.dragEl.appendChild(dragItem);
        this.dragRootEl = dragItem;
    };
    /**
     * Sets depth proerties (relative and drag)
     */
    /**
     * Sets depth proerties (relative and drag)
     * @private
     * @return {?}
     */
    NestableComponent.prototype._calculateDepth = /**
     * Sets depth proerties (relative and drag)
     * @private
     * @return {?}
     */
    function () {
        // total depth of dragging item
        /** @type {?} */
        var depth;
        /** @type {?} */
        var items = this.dragEl.querySelectorAll(this.options.itemNodeName);
        for (var i = 0; i < items.length; i++) {
            depth = helper._getParents(items[i], this.dragEl).length;
            if (depth > this.dragDepth) {
                this.dragDepth = depth;
            }
        }
        // depth relative to root
        this.relativeDepth = helper._getParents(this._placeholder, this.el.nativeElement.querySelector(this.options.listNodeName)).length;
    };
    /**
     * @private
     * @param {?} event
     * @param {?} dragItem
     * @return {?}
     */
    NestableComponent.prototype._mouseStart = /**
     * @private
     * @param {?} event
     * @param {?} dragItem
     * @return {?}
     */
    function (event, dragItem) {
        this._mouse.offsetX = event.pageX - helper._offset(dragItem).left;
        this._mouse.offsetY = event.pageY - helper._offset(dragItem).top;
        this._mouse.startX = this._mouse.lastX = event.pageX;
        this._mouse.startY = this._mouse.lastY = event.pageY;
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    NestableComponent.prototype._mouseUpdate = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // mouse position last events
        this._mouse.lastX = this._mouse.nowX;
        this._mouse.lastY = this._mouse.nowY;
        // mouse position this events
        this._mouse.nowX = event.pageX;
        this._mouse.nowY = event.pageY;
        // distance mouse moved between events
        this._mouse.distX = this._mouse.nowX - this._mouse.lastX;
        this._mouse.distY = this._mouse.nowY - this._mouse.lastY;
        // direction mouse was moving
        this._mouse.lastDirX = this._mouse.dirX;
        this._mouse.lastDirY = this._mouse.dirY;
        // direction mouse is now moving (on both axis)
        this._mouse.dirX =
            this._mouse.distX === 0 ? 0 : this._mouse.distX > 0 ? 1 : -1;
        this._mouse.dirY =
            this._mouse.distY === 0 ? 0 : this._mouse.distY > 0 ? 1 : -1;
    };
    /**
     * @private
     * @return {?}
     */
    NestableComponent.prototype._showMasks = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var masks = this.el.nativeElement.getElementsByClassName('nestable-item-mask');
        for (var i = 0; i < masks.length; i++) {
            masks[i].style.display = 'block';
        }
    };
    /**
     * @private
     * @return {?}
     */
    NestableComponent.prototype._hideMasks = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var masks = this.el.nativeElement.getElementsByClassName('nestable-item-mask');
        for (var i = 0; i < masks.length; i++) {
            masks[i].style.display = 'none';
        }
    };
    /**
     * calc mouse traverse distance on axis
     * @param m - mouse
     */
    /**
     * calc mouse traverse distance on axis
     * @private
     * @param {?} m - mouse
     * @return {?}
     */
    NestableComponent.prototype._calcMouseDistance = /**
     * calc mouse traverse distance on axis
     * @private
     * @param {?} m - mouse
     * @return {?}
     */
    function (m) {
        m.distAxX += Math.abs(m.distX);
        if (m.dirX !== 0 && m.dirX !== m.lastDirX) {
            m.distAxX = 0;
        }
        m.distAxY += Math.abs(m.distY);
        if (m.dirY !== 0 && m.dirY !== m.lastDirY) {
            m.distAxY = 0;
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    NestableComponent.prototype._move = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var depth;
        /** @type {?} */
        var list;
        /** @type {?} */
        var dragRect = this.dragEl.getBoundingClientRect();
        this.renderer.setStyle(this.dragEl, 'left', event.pageX - this._mouse.offsetX + PX);
        this.renderer.setStyle(this.dragEl, 'top', event.pageY - this._mouse.offsetY + PX);
        this._mouseUpdate(event);
        // axis mouse is now moving on
        /** @type {?} */
        var newAx = Math.abs(this._mouse.distX) > Math.abs(this._mouse.distY) ? 1 : 0;
        // do nothing on first move
        if (!this._mouse.moving) {
            this._mouse.dirAx = newAx;
            this._mouse.moving = 1;
            return;
        }
        // calc distance moved on this axis (and direction)
        if (this._mouse.dirAx !== newAx) {
            this._mouse.distAxX = 0;
            this._mouse.distAxY = 0;
        }
        else {
            this._calcMouseDistance(this._mouse);
        }
        this._mouse.dirAx = newAx;
        // find list item under cursor
        if (!hasPointerEvents) {
            this.dragEl.style.visibility = 'hidden';
        }
        /** @type {?} */
        var pointEl = document.elementFromPoint(event.pageX - document.body.scrollLeft, event.pageY - (window.pageYOffset || document.documentElement.scrollTop));
        if (!hasPointerEvents) {
            this.dragEl.style.visibility = 'visible';
        }
        if (pointEl &&
            (pointEl.classList.contains('nestable-item-mask') ||
                pointEl.classList.contains(this.options.placeClass))) {
            this.pointEl = pointEl.parentElement.parentElement;
        }
        else {
            return;
        }
        /**
         * move horizontal
         */
        if (!this.options.fixedDepth &&
            this._mouse.dirAx &&
            this._mouse.distAxX >= this.options.threshold) {
            // reset move distance on x-axis for new phase
            this._mouse.distAxX = 0;
            /** @type {?} */
            var previous = this._placeholder.previousElementSibling;
            // increase horizontal level if previous sibling exists, is not collapsed, and can have children
            if (this._mouse.distX > 0 && previous) {
                list = previous.querySelectorAll(this.options.listNodeName);
                list = list[list.length - 1];
                // check if depth limit has reached
                depth = helper._getParents(this._placeholder, this.el.nativeElement.querySelector(this.options.listNodeName)).length;
                if (depth + this.dragDepth <= this.options.maxDepth) {
                    // create new sub-level if one doesn't exist
                    if (!list) {
                        list = document.createElement(this.options.listNodeName);
                        list.style.paddingLeft = this.options.threshold + PX;
                        list.appendChild(this._placeholder);
                        previous.appendChild(list);
                        // this.setParent(previous);
                    }
                    else {
                        // else append to next level up
                        list = previous.querySelector(":scope > " + this.options.listNodeName);
                        list.appendChild(this._placeholder);
                    }
                }
            }
            // decrease horizontal level
            if (this._mouse.distX < 0) {
                // we can't decrease a level if an item preceeds the current one
                /** @type {?} */
                var next = document.querySelector("." + this.options.placeClass + " + " + this.options.itemNodeName);
                /** @type {?} */
                var parentElement = this._placeholder.parentElement;
                if (!next && parentElement) {
                    /** @type {?} */
                    var closestItem = helper._closest(this._placeholder, this.options.itemNodeName);
                    if (closestItem) {
                        parentElement.removeChild(this._placeholder);
                        helper._insertAfter(this._placeholder, closestItem);
                    }
                }
            }
        }
        if (!pointEl.classList.contains('nestable-item-mask')) {
            return;
        }
        // find root list of item under cursor
        /** @type {?} */
        var pointElRoot = helper._closest(this.pointEl, "." + this.options.rootClass);
        /** @type {?} */
        var isNewRoot = pointElRoot
            ? this.dragRootEl.dataset['nestable-id'] !==
                pointElRoot.dataset['nestable-id']
            : false;
        /**
         * move vertical
         */
        if (!this._mouse.dirAx || isNewRoot) {
            // check if groups match if dragging over new root
            if (isNewRoot &&
                this.options.group !== pointElRoot.dataset['nestable-group']) {
                return;
            }
            // check depth limit
            depth =
                this.dragDepth -
                    1 +
                    helper._getParents(this.pointEl, this.el.nativeElement.querySelector(this.options.listNodeName)).length;
            if (depth > this.options.maxDepth) {
                return;
            }
            /** @type {?} */
            var before = event.pageY <
                helper._offset(this.pointEl).top + this.pointEl.clientHeight / 2;
            /** @type {?} */
            var placeholderParent = this._placeholder.parentNode;
            // get point element depth
            /** @type {?} */
            var pointRelativeDepth = void 0;
            pointRelativeDepth = helper._getParents(this.pointEl, this.el.nativeElement.querySelector(this.options.listNodeName)).length;
            if (this.options.fixedDepth) {
                if (pointRelativeDepth === this.relativeDepth - 1) {
                    /** @type {?} */
                    var childList = this.pointEl.querySelector(this.options.listNodeName);
                    if (!childList.children.length) {
                        childList.appendChild(this._placeholder);
                    }
                }
                else if (pointRelativeDepth === this.relativeDepth) {
                    if (before) {
                        this.pointEl.parentElement.insertBefore(this._placeholder, this.pointEl);
                    }
                    else {
                        helper._insertAfter(this._placeholder, this.pointEl);
                    }
                    if (Array.prototype.indexOf.call(this.pointEl.parentElement.children, this.pointEl) ===
                        this.pointEl.parentElement.children.length - 1) {
                        helper._insertAfter(this._placeholder, this.pointEl);
                    }
                }
            }
            else if (before) {
                this.pointEl.parentElement.insertBefore(this._placeholder, this.pointEl);
            }
            else {
                helper._insertAfter(this._placeholder, this.pointEl);
            }
        }
    };
    /**
     * @return {?}
     */
    NestableComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        var e_2, _a;
        /** @type {?} */
        var keys = Object.keys(this._mouse);
        try {
            for (var keys_1 = tslib_1.__values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                var key = keys_1_1.value;
                this._mouse[key] = 0;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this._itemId = 0;
        this.moving = false;
        this.dragEl = null;
        this.dragRootEl = null;
        this.dragDepth = 0;
        this.relativeDepth = 0;
        this.hasNewRoot = false;
        this.pointEl = null;
    };
    /**
     * @param {?} event
     * @param {?} item
     * @param {?} parentList
     * @return {?}
     */
    NestableComponent.prototype.dragStartFromItem = /**
     * @param {?} event
     * @param {?} item
     * @param {?} parentList
     * @return {?}
     */
    function (event, item, parentList) {
        if (!this._registerHandleDirective) {
            this.dragStart(event, item, parentList);
        }
    };
    /**
     * @private
     * @param {?} event
     * @param {?} item
     * @param {?} parentList
     * @return {?}
     */
    NestableComponent.prototype.dragStart = /**
     * @private
     * @param {?} event
     * @param {?} item
     * @param {?} parentList
     * @return {?}
     */
    function (event, item, parentList) {
        this._oldListLength = this.list.length;
        if (!this.options.disableDrag) {
            event.stopPropagation();
            event.preventDefault();
            if (event.originalEvent) {
                event = event.originalEvent;
            }
            // allow only first mouse button
            if (event.type.indexOf('mouse') === 0) {
                if (event.button !== 0) {
                    return;
                }
            }
            else {
                if (event.touches.length !== 1) {
                    return;
                }
            }
            this.ref.detach();
            this._dragIndex = parentList.indexOf(item);
            this.dragModel = parentList.splice(parentList.indexOf(item), 1)[0];
            /** @type {?} */
            var dragItem = helper._closest(event.target, this.options.itemNodeName);
            if (dragItem === null) {
                return;
            }
            this._parentDragId = Number.parseInt(dragItem.parentElement.parentElement.id);
            /** @type {?} */
            var dragRect = dragItem.getBoundingClientRect();
            this._showMasks();
            this._createDragClone(event, dragItem);
            this.renderer.setStyle(this.dragEl, 'width', dragRect.width + PX);
            this._createPlaceholder(event, dragItem);
            this.renderer.setStyle(this._placeholder, 'height', dragRect.height + PX);
            this._calculateDepth();
            this.drag.emit({
                originalEvent: event,
                item: item
            });
            this._cancelMouseup = this.renderer.listen(document, 'mouseup', this.dragStop.bind(this));
            this._cancelMousemove = this.renderer.listen(document, 'mousemove', this.dragMove.bind(this));
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NestableComponent.prototype.dragStop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._cancelMouseup();
        this._cancelMousemove();
        this._hideMasks();
        if (this.dragEl) {
            /** @type {?} */
            var draggedId = Number.parseInt(this.dragEl.firstElementChild.id);
            /** @type {?} */
            var placeholderContainer = helper._closest(this._placeholder, this.options.itemNodeName);
            /** @type {?} */
            var changedElementPosition = this._dragIndex !==
                Array.prototype.indexOf.call(this._placeholder.parentElement.children, this._placeholder);
            /** @type {?} */
            var index = Array.prototype.indexOf.call(this._placeholder.parentElement.children, this._placeholder);
            if ((this._dragIndex === index) && (this._oldListLength === this.list.length)) {
                changedElementPosition = true;
            }
            // placeholder in root
            if (placeholderContainer === null) {
                this.list.splice(Array.prototype.indexOf.call(this._placeholder.parentElement.children, this._placeholder), 0, tslib_1.__assign({}, this.dragModel));
            }
            else {
                // palceholder nested
                placeholderContainer = helper._findObjectInTree(this.list, Number.parseInt(placeholderContainer.id));
                if (!placeholderContainer.children) {
                    placeholderContainer.children = [];
                    placeholderContainer.children.push(tslib_1.__assign({}, this.dragModel));
                }
                else {
                    placeholderContainer.children.splice(Array.prototype.indexOf.call(this._placeholder.parentElement.children, this._placeholder), 0, tslib_1.__assign({}, this.dragModel));
                }
                if (index === this._dragIndex) {
                    changedElementPosition = false;
                }
                if (!changedElementPosition) {
                    changedElementPosition =
                        placeholderContainer['$$id'] !== this._parentDragId;
                }
            }
            this._placeholder.parentElement.removeChild(this._placeholder);
            this.dragEl.parentNode.removeChild(this.dragEl);
            this.dragEl.remove();
            this.reset();
            this.listChange.emit(this.list);
            this.drop.emit({
                originalEvent: event,
                destination: placeholderContainer,
                item: this.dragModel,
                changedElementPosition: changedElementPosition
            });
            this.ref.reattach();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NestableComponent.prototype.dragMove = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.dragEl) {
            event.preventDefault();
            if (event.originalEvent) {
                event = event.originalEvent;
            }
            this._move(event.type.indexOf('mouse') === 0 ? event : event.touches[0]);
        }
    };
    /**
     * @return {?}
     */
    NestableComponent.prototype.expandAll = /**
     * @return {?}
     */
    function () {
        helper._traverseChildren(this._list, (/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            item['$$expanded'] = true;
        }));
        this.ref.markForCheck();
    };
    /**
     * @return {?}
     */
    NestableComponent.prototype.collapseAll = /**
     * @return {?}
     */
    function () {
        helper._traverseChildren(this._list, (/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            item['$$expanded'] = false;
        }));
        this.ref.markForCheck();
    };
    NestableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-nestable',
                    template: "<ng-container *ngTemplateOutlet=\"nestableList; context:{nestable: list, depth: 0}\">\n</ng-container>\n\n<ng-template #nestableList let-nestable=\"nestable\" let-depth=\"depth\">\n    <ul [style.padding-left.px]=\"depth ? options.threshold : 0\"\n        [class]=\"options.listClass\">\n        <li [class]=\"options.itemClass\" [id]=\"item.$$id\" *ngFor=\"let item of nestable\">\n\n            <ng-container *ngTemplateOutlet=\"nestableItem; context:{nestable: nestable, item: item, depth: depth}\">\n            </ng-container>\n\n            <ng-container *ngIf=\"item.children && item.$$expanded\">\n                <ng-container *ngTemplateOutlet=\"nestableList; context:{nestable: item.children, depth: depth + 1}\">\n                </ng-container>\n            </ng-container>\n\n            <ul [class]=\"options.listClass\" [style.padding-left.px]=\"options.threshold\"></ul>\n        </li>\n    </ul>\n</ng-template>\n\n<ng-template #nestableItem let-parentList=\"nestable\" let-item=\"item\" let-depth=\"depth\">\n    <div class=\"nestable-item-container mat-list-item\" (mousedown)=\"dragStartFromItem($event, item, parentList)\">\n        <ng-container\n            *ngTemplateOutlet=\"template; context:{$implicit: {item: item, parentList: parentList}, depth: depth}\">\n        </ng-container>\n\n        <div class=\"nestable-item-mask\"></div>\n    </div>\n</ng-template>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto);ul .dd-placeholder{margin:5px 0;padding:0;min-height:30px;background:#f2fbff;border:1px dashed #b6bcbf;box-sizing:border-box}ul li .nestable-item-mask{display:none;position:absolute;top:0;bottom:0;right:0;left:0;z-index:9998}ul li .nestable-expand-button{display:block;position:relative;cursor:pointer;float:left;width:25px;height:14px;padding:0;white-space:nowrap;overflow:hidden;border:0;background:0 0;font-size:18px;line-height:1;text-align:center;font-weight:700;outline:0}ul li .nestable-item-container{position:relative;display:flex;flex-direction:row;align-items:center;color:rgba(0,0,0,.87);min-height:32px;font-size:16px;font-family:Roboto,sans-serif;cursor:pointer;outline:0;margin-bottom:2px;padding-left:8px}ul li .nestable-item-container:hover{background:rgba(0,0,0,.04)}ol,ul{list-style:none}"]
                }] }
    ];
    /** @nocollapse */
    NestableComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    NestableComponent.propDecorators = {
        listChange: [{ type: Output }],
        drop: [{ type: Output }],
        drag: [{ type: Output }],
        disclosure: [{ type: Output }],
        template: [{ type: Input }],
        options: [{ type: Input }],
        disableDrag: [{ type: Input }],
        list: [{ type: Input }]
    };
    return NestableComponent;
}());
export { NestableComponent };
if (false) {
    /** @type {?} */
    NestableComponent.prototype.listChange;
    /** @type {?} */
    NestableComponent.prototype.drop;
    /** @type {?} */
    NestableComponent.prototype.drag;
    /** @type {?} */
    NestableComponent.prototype.disclosure;
    /** @type {?} */
    NestableComponent.prototype.template;
    /** @type {?} */
    NestableComponent.prototype.options;
    /** @type {?} */
    NestableComponent.prototype.disableDrag;
    /** @type {?} */
    NestableComponent.prototype.dragRootEl;
    /** @type {?} */
    NestableComponent.prototype.dragEl;
    /** @type {?} */
    NestableComponent.prototype.dragModel;
    /** @type {?} */
    NestableComponent.prototype.moving;
    /**
     * Dragged element contains children, and those children contain other children and so on...
     * This property gives you the number of generations contained within the dragging item.
     * @type {?}
     */
    NestableComponent.prototype.dragDepth;
    /**
     * The depth of dragging item relative to element root (ngx-nestable)
     * @type {?}
     */
    NestableComponent.prototype.relativeDepth;
    /** @type {?} */
    NestableComponent.prototype.hasNewRoot;
    /** @type {?} */
    NestableComponent.prototype.pointEl;
    /** @type {?} */
    NestableComponent.prototype.items;
    /**
     * @type {?}
     * @private
     */
    NestableComponent.prototype._componentActive;
    /**
     * @type {?}
     * @private
     */
    NestableComponent.prototype._mouse;
    /**
     * @type {?}
     * @private
     */
    NestableComponent.prototype._list;
    /**
     * @type {?}
     * @private
     */
    NestableComponent.prototype._cancelMousemove;
    /**
     * @type {?}
     * @private
     */
    NestableComponent.prototype._cancelMouseup;
    /**
     * @type {?}
     * @private
     */
    NestableComponent.prototype._placeholder;
    /**
     * @type {?}
     * @private
     */
    NestableComponent.prototype._itemId;
    /**
     * @type {?}
     * @private
     */
    NestableComponent.prototype._registerHandleDirective;
    /**
     * @type {?}
     * @private
     */
    NestableComponent.prototype._dragIndex;
    /**
     * @type {?}
     * @private
     */
    NestableComponent.prototype._parentDragId;
    /**
     * @type {?}
     * @private
     */
    NestableComponent.prototype._oldListLength;
    /**
     * @type {?}
     * @private
     */
    NestableComponent.prototype.ref;
    /**
     * @type {?}
     * @private
     */
    NestableComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NestableComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NestableComponent.prototype.zone;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW5lc3RhYmxlLyIsInNvdXJjZXMiOlsibGliL25lc3RhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBR04sTUFBTSxFQUNOLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ3BCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sS0FBSyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFFNUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7SUFFckcsRUFBRSxHQUFHLElBQUk7Ozs7QUFDVzs7UUFDaEIsRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDOztRQUNwQyxLQUFLLEdBQUcsUUFBUSxDQUFDLGVBQWU7SUFFcEMsSUFBSSxDQUFDLENBQUMsZUFBZSxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNoQyxPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUVELEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztJQUNoQyxFQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7SUFDN0IsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7UUFDaEIsUUFBUSxHQUNWLE1BQU0sQ0FBQyxnQkFBZ0I7UUFDdkIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxhQUFhLEtBQUssTUFBTTtJQUM1RCxLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3RCLE9BQU8sQ0FB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LE1BQU07MkJBRU4sS0FBSzswQkFDTCxLQUFLOzhCQUNMLEtBQUs7dUJBRUwsS0FBSzs7SUFrbkJWLHdCQUFDO0NBQUEsQUFub0JELElBbW9CQztTQTVuQlksaUJBQWlCOzs7SUFDMUIsdUNBQWlEOztJQUNqRCxpQ0FBMkM7O0lBQzNDLGlDQUEyQzs7SUFDM0MsdUNBQWlEOztJQUVqRCxxQ0FBMkM7O0lBQzNDLG9DQUEwQzs7SUFDMUMsd0NBQW9DOztJQVlwQyx1Q0FBeUI7O0lBQ3pCLG1DQUFxQjs7SUFDckIsc0NBQXdCOztJQUN4QixtQ0FBc0I7Ozs7OztJQU10QixzQ0FBcUI7Ozs7O0lBS3JCLDBDQUF5Qjs7SUFFekIsdUNBQTBCOztJQUMxQixvQ0FBc0I7O0lBQ3RCLGtDQUFrQjs7Ozs7SUFFbEIsNkNBQWlDOzs7OztJQUNqQyxtQ0FBMEM7Ozs7O0lBQzFDLGtDQUFtQjs7Ozs7SUFFbkIsNkNBQW1DOzs7OztJQUNuQywyQ0FBaUM7Ozs7O0lBQ2pDLHlDQUFxQjs7Ozs7SUFDckIsb0NBQW9COzs7OztJQUNwQixxREFBeUM7Ozs7O0lBQ3pDLHVDQUFtQjs7Ozs7SUFDbkIsMENBQXNCOzs7OztJQUN0QiwyQ0FBNEI7Ozs7O0lBR3hCLGdDQUE4Qjs7Ozs7SUFDOUIscUNBQTJCOzs7OztJQUMzQiwrQkFBc0I7Ozs7O0lBQ3RCLGlDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIElucHV0LFxuICAgIE5nWm9uZSxcbiAgICBPbkRlc3Ryb3ksXG4gICAgT25Jbml0LFxuICAgIE91dHB1dCxcbiAgICBSZW5kZXJlcjIsXG4gICAgVmlld0NvbnRhaW5lclJlZixcbiAgICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0ICogYXMgaGVscGVyIGZyb20gJy4vbmVzdGFibGUuaGVscGVyJztcblxuaW1wb3J0IHsgZGVmYXVsdFNldHRpbmdzLCBEUkFHX1NUQVJULCBFWFBBTkRfQ09MTEFQU0UsIG1vdXNlLCBSRUdJU1RFUl9IQU5ETEUgfSBmcm9tICcuL25lc3RhYmxlLmNvbnN0YW50JztcblxuY29uc3QgUFggPSAncHgnO1xuY29uc3QgaGFzUG9pbnRlckV2ZW50cyA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgZG9jRWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICBpZiAoISgncG9pbnRlckV2ZW50cycgaW4gZWwuc3R5bGUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBlbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xuICAgIGVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAneCc7XG4gICAgZG9jRWwuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIGNvbnN0IHN1cHBvcnRzID1cbiAgICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUgJiZcbiAgICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwsICcnKS5wb2ludGVyRXZlbnRzID09PSAnYXV0byc7XG4gICAgZG9jRWwucmVtb3ZlQ2hpbGQoZWwpO1xuICAgIHJldHVybiAhIXN1cHBvcnRzO1xufSkoKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ3gtbmVzdGFibGUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9uZXN0YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbmVzdGFibGUuY29tcG9uZW50LnNjc3MnXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE5lc3RhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgbGlzdENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIGRyb3AgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBkcmFnID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgZGlzY2xvc3VyZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBJbnB1dCgpIHB1YmxpYyB0ZW1wbGF0ZTogVmlld0NvbnRhaW5lclJlZjtcbiAgICBASW5wdXQoKSBwdWJsaWMgb3B0aW9ucyA9IGRlZmF1bHRTZXR0aW5ncztcbiAgICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZURyYWcgPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBsaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGlzdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGxpc3QobGlzdCkge1xuICAgICAgICB0aGlzLl9saXN0ID0gbGlzdDtcbiAgICAgICAgdGhpcy5fZ2VuZXJhdGVJdGVtSWRzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGRyYWdSb290RWwgPSBudWxsO1xuICAgIHB1YmxpYyBkcmFnRWwgPSBudWxsO1xuICAgIHB1YmxpYyBkcmFnTW9kZWwgPSBudWxsO1xuICAgIHB1YmxpYyBtb3ZpbmcgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIERyYWdnZWQgZWxlbWVudCBjb250YWlucyBjaGlsZHJlbiwgYW5kIHRob3NlIGNoaWxkcmVuIGNvbnRhaW4gb3RoZXIgY2hpbGRyZW4gYW5kIHNvIG9uLi4uXG4gICAgICogVGhpcyBwcm9wZXJ0eSBnaXZlcyB5b3UgdGhlIG51bWJlciBvZiBnZW5lcmF0aW9ucyBjb250YWluZWQgd2l0aGluIHRoZSBkcmFnZ2luZyBpdGVtLlxuICAgICAqL1xuICAgIHB1YmxpYyBkcmFnRGVwdGggPSAwO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRlcHRoIG9mIGRyYWdnaW5nIGl0ZW0gcmVsYXRpdmUgdG8gZWxlbWVudCByb290IChuZ3gtbmVzdGFibGUpXG4gICAgICovXG4gICAgcHVibGljIHJlbGF0aXZlRGVwdGggPSAwO1xuXG4gICAgcHVibGljIGhhc05ld1Jvb3QgPSBmYWxzZTtcbiAgICBwdWJsaWMgcG9pbnRFbCA9IG51bGw7XG4gICAgcHVibGljIGl0ZW1zID0gW107XG5cbiAgICBwcml2YXRlIF9jb21wb25lbnRBY3RpdmUgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9tb3VzZSA9IE9iamVjdC5hc3NpZ24oe30sIG1vdXNlKTtcbiAgICBwcml2YXRlIF9saXN0ID0gW107XG4gICAgLy8gcHJpdmF0ZSBfb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRTZXR0aW5ncykgYXMgTmVzdGFibGVTZXR0aW5ncztcbiAgICBwcml2YXRlIF9jYW5jZWxNb3VzZW1vdmU6IEZ1bmN0aW9uO1xuICAgIHByaXZhdGUgX2NhbmNlbE1vdXNldXA6IEZ1bmN0aW9uO1xuICAgIHByaXZhdGUgX3BsYWNlaG9sZGVyO1xuICAgIHByaXZhdGUgX2l0ZW1JZCA9IDA7XG4gICAgcHJpdmF0ZSBfcmVnaXN0ZXJIYW5kbGVEaXJlY3RpdmUgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9kcmFnSW5kZXg7XG4gICAgcHJpdmF0ZSBfcGFyZW50RHJhZ0lkO1xuICAgIHByaXZhdGUgX29sZExpc3RMZW5ndGg6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmVcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gc2V0L2V4dGVuZCBkZWZhdWx0IG9wdGlvbnNcbiAgICAgICAgdGhpcy5fY29tcG9uZW50QWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgb3B0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGRlZmF1bHRTZXR0aW5ncyk7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIG9wdGlvbktleXMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zW2tleV0gPSBkZWZhdWx0U2V0dGluZ3Nba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2dlbmVyYXRlSXRlbUlkcygpO1xuICAgICAgICB0aGlzLl9nZW5lcmF0ZUl0ZW1FeHBhbmRlZCgpO1xuICAgICAgICB0aGlzLl9jcmVhdGVIYW5kbGVMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge31cblxuICAgIHByaXZhdGUgX2dlbmVyYXRlSXRlbUlkcygpIHtcbiAgICAgICAgaGVscGVyLl90cmF2ZXJzZUNoaWxkcmVuKHRoaXMuX2xpc3QsIGl0ZW0gPT4ge1xuICAgICAgICAgICAgaXRlbVsnJCRpZCddID0gdGhpcy5faXRlbUlkKys7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dlbmVyYXRlSXRlbUV4cGFuZGVkKCkge1xuICAgICAgICBoZWxwZXIuX3RyYXZlcnNlQ2hpbGRyZW4odGhpcy5fbGlzdCwgaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGl0ZW0uZXhwYW5kZWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgaXRlbVsnJCRleHBhbmRlZCddID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbVsnJCRleHBhbmRlZCddID0gaXRlbS5leHBhbmRlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY3JlYXRlSGFuZGxlTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgUkVHSVNURVJfSEFORExFLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9yZWdpc3RlckhhbmRsZURpcmVjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgRFJBR19TVEFSVCwgZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRyYWdTdGFydChcbiAgICAgICAgICAgICAgICBkYXRhLmRldGFpbC5ldmVudCxcbiAgICAgICAgICAgICAgICBkYXRhLmRldGFpbC5wYXJhbS5pdGVtLFxuICAgICAgICAgICAgICAgIGRhdGEuZGV0YWlsLnBhcmFtLnBhcmVudExpc3RcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgRVhQQU5EX0NPTExBUFNFLCBkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlzY2xvc3VyZS5lbWl0KHtcbiAgICAgICAgICAgICAgICBpdGVtOiBkYXRhLmRldGFpbC5pdGVtLFxuICAgICAgICAgICAgICAgIGV4cGFuZGVkOiBkYXRhLmRldGFpbC5pdGVtWyckJGV4cGFuZGVkJ11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jcmVhdGVEcmFnQ2xvbmUoZXZlbnQsIGRyYWdJdGVtKSB7XG4gICAgICAgIHRoaXMuX21vdXNlU3RhcnQoZXZlbnQsIGRyYWdJdGVtKTtcblxuICAgICAgICBpZiAoIXRoaXMuX3JlZ2lzdGVySGFuZGxlRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLl9tb3VzZS5vZmZzZXRZID0gZHJhZ0l0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nXG4gICAgICAgICAgICAgICAgPyBkcmFnSXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuY2xpZW50SGVpZ2h0IC8gMlxuICAgICAgICAgICAgICAgIDogZHJhZ0l0ZW0uY2xpZW50SGVpZ2h0IC8gMjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNyZWF0ZSBkcmFnIGNsb25lXG4gICAgICAgIHRoaXMuZHJhZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLm9wdGlvbnMubGlzdE5vZGVOYW1lKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRyYWdFbCk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRyYWdFbCwgdGhpcy5vcHRpb25zLmRyYWdDbGFzcyk7XG5cbiAgICAgICAgLy8gYWRkIGRyYWcgY2xvbmUgdG8gYm9keSBhbmQgc2V0IGNzc1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgdGhpcy5kcmFnRWwsXG4gICAgICAgICAgICAnbGVmdCcsXG4gICAgICAgICAgICBldmVudC5wYWdlWCAtIHRoaXMuX21vdXNlLm9mZnNldFggKyBQWFxuICAgICAgICApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgdGhpcy5kcmFnRWwsXG4gICAgICAgICAgICAndG9wJyxcbiAgICAgICAgICAgIGV2ZW50LnBhZ2VZIC0gdGhpcy5fbW91c2Uub2Zmc2V0WSArIFBYXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5kcmFnRWwsICdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZHJhZ0VsLCAnei1pbmRleCcsIDk5OTkpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZHJhZ0VsLCAncG9pbnRlci1ldmVudHMnLCAnbm9uZScpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NyZWF0ZVBsYWNlaG9sZGVyKGV2ZW50LCBkcmFnSXRlbSkge1xuICAgICAgICB0aGlzLl9wbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLl9wbGFjZWhvbGRlci5jbGFzc0xpc3QuYWRkKHRoaXMub3B0aW9ucy5wbGFjZUNsYXNzKTtcbiAgICAgICAgaGVscGVyLl9pbnNlcnRBZnRlcih0aGlzLl9wbGFjZWhvbGRlciwgZHJhZ0l0ZW0pO1xuICAgICAgICBkcmFnSXRlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRyYWdJdGVtKTtcbiAgICAgICAgdGhpcy5kcmFnRWwuYXBwZW5kQ2hpbGQoZHJhZ0l0ZW0pO1xuICAgICAgICB0aGlzLmRyYWdSb290RWwgPSBkcmFnSXRlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGRlcHRoIHByb2VydGllcyAocmVsYXRpdmUgYW5kIGRyYWcpXG4gICAgICovXG4gICAgcHJpdmF0ZSBfY2FsY3VsYXRlRGVwdGgoKSB7XG4gICAgICAgIC8vIHRvdGFsIGRlcHRoIG9mIGRyYWdnaW5nIGl0ZW1cbiAgICAgICAgbGV0IGRlcHRoO1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuZHJhZ0VsLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5vcHRpb25zLml0ZW1Ob2RlTmFtZSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRlcHRoID0gaGVscGVyLl9nZXRQYXJlbnRzKGl0ZW1zW2ldLCB0aGlzLmRyYWdFbCkubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGRlcHRoID4gdGhpcy5kcmFnRGVwdGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdEZXB0aCA9IGRlcHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZGVwdGggcmVsYXRpdmUgdG8gcm9vdFxuICAgICAgICB0aGlzLnJlbGF0aXZlRGVwdGggPSBoZWxwZXIuX2dldFBhcmVudHMoXG4gICAgICAgICAgICB0aGlzLl9wbGFjZWhvbGRlcixcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5saXN0Tm9kZU5hbWUpXG4gICAgICAgICkubGVuZ3RoO1xuICAgIH1cblxuICAgIHByaXZhdGUgX21vdXNlU3RhcnQoZXZlbnQsIGRyYWdJdGVtKSB7XG4gICAgICAgIHRoaXMuX21vdXNlLm9mZnNldFggPSBldmVudC5wYWdlWCAtIGhlbHBlci5fb2Zmc2V0KGRyYWdJdGVtKS5sZWZ0O1xuICAgICAgICB0aGlzLl9tb3VzZS5vZmZzZXRZID0gZXZlbnQucGFnZVkgLSBoZWxwZXIuX29mZnNldChkcmFnSXRlbSkudG9wO1xuICAgICAgICB0aGlzLl9tb3VzZS5zdGFydFggPSB0aGlzLl9tb3VzZS5sYXN0WCA9IGV2ZW50LnBhZ2VYO1xuICAgICAgICB0aGlzLl9tb3VzZS5zdGFydFkgPSB0aGlzLl9tb3VzZS5sYXN0WSA9IGV2ZW50LnBhZ2VZO1xuICAgIH1cblxuICAgIHByaXZhdGUgX21vdXNlVXBkYXRlKGV2ZW50KSB7XG4gICAgICAgIC8vIG1vdXNlIHBvc2l0aW9uIGxhc3QgZXZlbnRzXG4gICAgICAgIHRoaXMuX21vdXNlLmxhc3RYID0gdGhpcy5fbW91c2Uubm93WDtcbiAgICAgICAgdGhpcy5fbW91c2UubGFzdFkgPSB0aGlzLl9tb3VzZS5ub3dZO1xuICAgICAgICAvLyBtb3VzZSBwb3NpdGlvbiB0aGlzIGV2ZW50c1xuICAgICAgICB0aGlzLl9tb3VzZS5ub3dYID0gZXZlbnQucGFnZVg7XG4gICAgICAgIHRoaXMuX21vdXNlLm5vd1kgPSBldmVudC5wYWdlWTtcbiAgICAgICAgLy8gZGlzdGFuY2UgbW91c2UgbW92ZWQgYmV0d2VlbiBldmVudHNcbiAgICAgICAgdGhpcy5fbW91c2UuZGlzdFggPSB0aGlzLl9tb3VzZS5ub3dYIC0gdGhpcy5fbW91c2UubGFzdFg7XG4gICAgICAgIHRoaXMuX21vdXNlLmRpc3RZID0gdGhpcy5fbW91c2Uubm93WSAtIHRoaXMuX21vdXNlLmxhc3RZO1xuICAgICAgICAvLyBkaXJlY3Rpb24gbW91c2Ugd2FzIG1vdmluZ1xuICAgICAgICB0aGlzLl9tb3VzZS5sYXN0RGlyWCA9IHRoaXMuX21vdXNlLmRpclg7XG4gICAgICAgIHRoaXMuX21vdXNlLmxhc3REaXJZID0gdGhpcy5fbW91c2UuZGlyWTtcbiAgICAgICAgLy8gZGlyZWN0aW9uIG1vdXNlIGlzIG5vdyBtb3ZpbmcgKG9uIGJvdGggYXhpcylcbiAgICAgICAgdGhpcy5fbW91c2UuZGlyWCA9XG4gICAgICAgICAgICB0aGlzLl9tb3VzZS5kaXN0WCA9PT0gMCA/IDAgOiB0aGlzLl9tb3VzZS5kaXN0WCA+IDAgPyAxIDogLTE7XG4gICAgICAgIHRoaXMuX21vdXNlLmRpclkgPVxuICAgICAgICAgICAgdGhpcy5fbW91c2UuZGlzdFkgPT09IDAgPyAwIDogdGhpcy5fbW91c2UuZGlzdFkgPiAwID8gMSA6IC0xO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3Nob3dNYXNrcygpIHtcbiAgICAgICAgY29uc3QgbWFza3MgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICAgICAgICduZXN0YWJsZS1pdGVtLW1hc2snXG4gICAgICAgICk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG1hc2tzW2ldLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGlkZU1hc2tzKCkge1xuICAgICAgICBjb25zdCBtYXNrcyA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgICAgICAgJ25lc3RhYmxlLWl0ZW0tbWFzaydcbiAgICAgICAgKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbWFza3NbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNhbGMgbW91c2UgdHJhdmVyc2UgZGlzdGFuY2Ugb24gYXhpc1xuICAgICAqIEBwYXJhbSBtIC0gbW91c2VcbiAgICAgKi9cbiAgICBwcml2YXRlIF9jYWxjTW91c2VEaXN0YW5jZShtKSB7XG4gICAgICAgIG0uZGlzdEF4WCArPSBNYXRoLmFicyhtLmRpc3RYKTtcbiAgICAgICAgaWYgKG0uZGlyWCAhPT0gMCAmJiBtLmRpclggIT09IG0ubGFzdERpclgpIHtcbiAgICAgICAgICAgIG0uZGlzdEF4WCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBtLmRpc3RBeFkgKz0gTWF0aC5hYnMobS5kaXN0WSk7XG4gICAgICAgIGlmIChtLmRpclkgIT09IDAgJiYgbS5kaXJZICE9PSBtLmxhc3REaXJZKSB7XG4gICAgICAgICAgICBtLmRpc3RBeFkgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbW92ZShldmVudCkge1xuICAgICAgICBsZXQgZGVwdGgsIGxpc3Q7XG5cbiAgICAgICAgY29uc3QgZHJhZ1JlY3QgPSB0aGlzLmRyYWdFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgIHRoaXMuZHJhZ0VsLFxuICAgICAgICAgICAgJ2xlZnQnLFxuICAgICAgICAgICAgZXZlbnQucGFnZVggLSB0aGlzLl9tb3VzZS5vZmZzZXRYICsgUFhcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgIHRoaXMuZHJhZ0VsLFxuICAgICAgICAgICAgJ3RvcCcsXG4gICAgICAgICAgICBldmVudC5wYWdlWSAtIHRoaXMuX21vdXNlLm9mZnNldFkgKyBQWFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuX21vdXNlVXBkYXRlKGV2ZW50KTtcblxuICAgICAgICAvLyBheGlzIG1vdXNlIGlzIG5vdyBtb3Zpbmcgb25cbiAgICAgICAgY29uc3QgbmV3QXggPVxuICAgICAgICAgICAgTWF0aC5hYnModGhpcy5fbW91c2UuZGlzdFgpID4gTWF0aC5hYnModGhpcy5fbW91c2UuZGlzdFkpID8gMSA6IDA7XG5cbiAgICAgICAgLy8gZG8gbm90aGluZyBvbiBmaXJzdCBtb3ZlXG4gICAgICAgIGlmICghdGhpcy5fbW91c2UubW92aW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9tb3VzZS5kaXJBeCA9IG5ld0F4O1xuICAgICAgICAgICAgdGhpcy5fbW91c2UubW92aW5nID0gMTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNhbGMgZGlzdGFuY2UgbW92ZWQgb24gdGhpcyBheGlzIChhbmQgZGlyZWN0aW9uKVxuICAgICAgICBpZiAodGhpcy5fbW91c2UuZGlyQXggIT09IG5ld0F4KSB7XG4gICAgICAgICAgICB0aGlzLl9tb3VzZS5kaXN0QXhYID0gMDtcbiAgICAgICAgICAgIHRoaXMuX21vdXNlLmRpc3RBeFkgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fY2FsY01vdXNlRGlzdGFuY2UodGhpcy5fbW91c2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21vdXNlLmRpckF4ID0gbmV3QXg7XG5cbiAgICAgICAgLy8gZmluZCBsaXN0IGl0ZW0gdW5kZXIgY3Vyc29yXG4gICAgICAgIGlmICghaGFzUG9pbnRlckV2ZW50cykge1xuICAgICAgICAgICAgdGhpcy5kcmFnRWwuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcG9pbnRFbCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoXG4gICAgICAgICAgICBldmVudC5wYWdlWCAtIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgIGV2ZW50LnBhZ2VZIC0gKHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKVxuICAgICAgICApO1xuXG4gICAgICAgIGlmICghaGFzUG9pbnRlckV2ZW50cykge1xuICAgICAgICAgICAgdGhpcy5kcmFnRWwuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHBvaW50RWwgJiZcbiAgICAgICAgICAgIChwb2ludEVsLmNsYXNzTGlzdC5jb250YWlucygnbmVzdGFibGUtaXRlbS1tYXNrJykgfHxcbiAgICAgICAgICAgICAgICBwb2ludEVsLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLm9wdGlvbnMucGxhY2VDbGFzcykpXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5wb2ludEVsID0gcG9pbnRFbC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogbW92ZSBob3Jpem9udGFsXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhdGhpcy5vcHRpb25zLmZpeGVkRGVwdGggJiZcbiAgICAgICAgICAgIHRoaXMuX21vdXNlLmRpckF4ICYmXG4gICAgICAgICAgICB0aGlzLl9tb3VzZS5kaXN0QXhYID49IHRoaXMub3B0aW9ucy50aHJlc2hvbGRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyByZXNldCBtb3ZlIGRpc3RhbmNlIG9uIHgtYXhpcyBmb3IgbmV3IHBoYXNlXG4gICAgICAgICAgICB0aGlzLl9tb3VzZS5kaXN0QXhYID0gMDtcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzID0gdGhpcy5fcGxhY2Vob2xkZXIucHJldmlvdXNFbGVtZW50U2libGluZztcblxuICAgICAgICAgICAgLy8gaW5jcmVhc2UgaG9yaXpvbnRhbCBsZXZlbCBpZiBwcmV2aW91cyBzaWJsaW5nIGV4aXN0cywgaXMgbm90IGNvbGxhcHNlZCwgYW5kIGNhbiBoYXZlIGNoaWxkcmVuXG4gICAgICAgICAgICBpZiAodGhpcy5fbW91c2UuZGlzdFggPiAwICYmIHByZXZpb3VzKSB7XG4gICAgICAgICAgICAgICAgbGlzdCA9IHByZXZpb3VzLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5vcHRpb25zLmxpc3ROb2RlTmFtZSk7XG4gICAgICAgICAgICAgICAgbGlzdCA9IGxpc3RbbGlzdC5sZW5ndGggLSAxXTtcblxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGRlcHRoIGxpbWl0IGhhcyByZWFjaGVkXG4gICAgICAgICAgICAgICAgZGVwdGggPSBoZWxwZXIuX2dldFBhcmVudHMoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMubGlzdE5vZGVOYW1lKVxuICAgICAgICAgICAgICAgICkubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRlcHRoICsgdGhpcy5kcmFnRGVwdGggPD0gdGhpcy5vcHRpb25zLm1heERlcHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBuZXcgc3ViLWxldmVsIGlmIG9uZSBkb2Vzbid0IGV4aXN0XG4gICAgICAgICAgICAgICAgICAgIGlmICghbGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy5vcHRpb25zLmxpc3ROb2RlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LnN0eWxlLnBhZGRpbmdMZWZ0ID0gdGhpcy5vcHRpb25zLnRocmVzaG9sZCArIFBYO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZCh0aGlzLl9wbGFjZWhvbGRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91cy5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2V0UGFyZW50KHByZXZpb3VzKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVsc2UgYXBwZW5kIHRvIG5leHQgbGV2ZWwgdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QgPSBwcmV2aW91cy5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA6c2NvcGUgPiAkeyB0aGlzLm9wdGlvbnMubGlzdE5vZGVOYW1lIH1gXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZCh0aGlzLl9wbGFjZWhvbGRlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkZWNyZWFzZSBob3Jpem9udGFsIGxldmVsXG4gICAgICAgICAgICBpZiAodGhpcy5fbW91c2UuZGlzdFggPCAwKSB7XG4gICAgICAgICAgICAgICAgLy8gd2UgY2FuJ3QgZGVjcmVhc2UgYSBsZXZlbCBpZiBhbiBpdGVtIHByZWNlZWRzIHRoZSBjdXJyZW50IG9uZVxuICAgICAgICAgICAgICAgIGNvbnN0IG5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBgLiR7IHRoaXMub3B0aW9ucy5wbGFjZUNsYXNzIH0gKyAkeyB0aGlzLm9wdGlvbnMuaXRlbU5vZGVOYW1lIH1gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gdGhpcy5fcGxhY2Vob2xkZXIucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICBpZiAoIW5leHQgJiYgcGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbG9zZXN0SXRlbSA9IGhlbHBlci5fY2xvc2VzdChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLml0ZW1Ob2RlTmFtZVxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjbG9zZXN0SXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLl9wbGFjZWhvbGRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXIuX2luc2VydEFmdGVyKHRoaXMuX3BsYWNlaG9sZGVyLCBjbG9zZXN0SXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBvaW50RWwuY2xhc3NMaXN0LmNvbnRhaW5zKCduZXN0YWJsZS1pdGVtLW1hc2snKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmluZCByb290IGxpc3Qgb2YgaXRlbSB1bmRlciBjdXJzb3JcbiAgICAgICAgY29uc3QgcG9pbnRFbFJvb3QgPSBoZWxwZXIuX2Nsb3Nlc3QoXG4gICAgICAgICAgICB0aGlzLnBvaW50RWwsXG4gICAgICAgICAgICBgLiR7IHRoaXMub3B0aW9ucy5yb290Q2xhc3MgfWBcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBpc05ld1Jvb3QgPSBwb2ludEVsUm9vdFxuICAgICAgICAgICAgICAgID8gdGhpcy5kcmFnUm9vdEVsLmRhdGFzZXRbJ25lc3RhYmxlLWlkJ10gIT09XG4gICAgICAgICAgICAgICAgcG9pbnRFbFJvb3QuZGF0YXNldFsnbmVzdGFibGUtaWQnXVxuICAgICAgICAgICAgICAgIDogZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIG1vdmUgdmVydGljYWxcbiAgICAgICAgICovXG4gICAgICAgIGlmICghdGhpcy5fbW91c2UuZGlyQXggfHwgaXNOZXdSb290KSB7XG4gICAgICAgICAgICAvLyBjaGVjayBpZiBncm91cHMgbWF0Y2ggaWYgZHJhZ2dpbmcgb3ZlciBuZXcgcm9vdFxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGlzTmV3Um9vdCAmJlxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5ncm91cCAhPT0gcG9pbnRFbFJvb3QuZGF0YXNldFsnbmVzdGFibGUtZ3JvdXAnXVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjaGVjayBkZXB0aCBsaW1pdFxuICAgICAgICAgICAgZGVwdGggPVxuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ0RlcHRoIC1cbiAgICAgICAgICAgICAgICAxICtcbiAgICAgICAgICAgICAgICBoZWxwZXIuX2dldFBhcmVudHMoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9pbnRFbCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLmxpc3ROb2RlTmFtZSlcbiAgICAgICAgICAgICAgICApLmxlbmd0aDtcblxuICAgICAgICAgICAgaWYgKGRlcHRoID4gdGhpcy5vcHRpb25zLm1heERlcHRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBiZWZvcmUgPVxuICAgICAgICAgICAgICAgIGV2ZW50LnBhZ2VZIDxcbiAgICAgICAgICAgICAgICBoZWxwZXIuX29mZnNldCh0aGlzLnBvaW50RWwpLnRvcCArIHRoaXMucG9pbnRFbC5jbGllbnRIZWlnaHQgLyAyO1xuICAgICAgICAgICAgY29uc3QgcGxhY2Vob2xkZXJQYXJlbnQgPSB0aGlzLl9wbGFjZWhvbGRlci5wYXJlbnROb2RlO1xuXG4gICAgICAgICAgICAvLyBnZXQgcG9pbnQgZWxlbWVudCBkZXB0aFxuICAgICAgICAgICAgbGV0IHBvaW50UmVsYXRpdmVEZXB0aDtcbiAgICAgICAgICAgIHBvaW50UmVsYXRpdmVEZXB0aCA9IGhlbHBlci5fZ2V0UGFyZW50cyhcbiAgICAgICAgICAgICAgICB0aGlzLnBvaW50RWwsXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLmxpc3ROb2RlTmFtZSlcbiAgICAgICAgICAgICkubGVuZ3RoO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmZpeGVkRGVwdGgpIHtcbiAgICAgICAgICAgICAgICBpZiAocG9pbnRSZWxhdGl2ZURlcHRoID09PSB0aGlzLnJlbGF0aXZlRGVwdGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkTGlzdCA9IHRoaXMucG9pbnRFbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmxpc3ROb2RlTmFtZVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNoaWxkTGlzdC5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdC5hcHBlbmRDaGlsZCh0aGlzLl9wbGFjZWhvbGRlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBvaW50UmVsYXRpdmVEZXB0aCA9PT0gdGhpcy5yZWxhdGl2ZURlcHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiZWZvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9pbnRFbC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGFjZWhvbGRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvaW50RWxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXIuX2luc2VydEFmdGVyKHRoaXMuX3BsYWNlaG9sZGVyLCB0aGlzLnBvaW50RWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvaW50RWwucGFyZW50RWxlbWVudC5jaGlsZHJlbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvaW50RWxcbiAgICAgICAgICAgICAgICAgICAgICAgICkgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvaW50RWwucGFyZW50RWxlbWVudC5jaGlsZHJlbi5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyLl9pbnNlcnRBZnRlcih0aGlzLl9wbGFjZWhvbGRlciwgdGhpcy5wb2ludEVsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYmVmb3JlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludEVsLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGFjZWhvbGRlcixcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb2ludEVsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGVscGVyLl9pbnNlcnRBZnRlcih0aGlzLl9wbGFjZWhvbGRlciwgdGhpcy5wb2ludEVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyByZXNldCgpIHtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuX21vdXNlKTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgdGhpcy5fbW91c2Vba2V5XSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pdGVtSWQgPSAwO1xuICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRyYWdFbCA9IG51bGw7XG4gICAgICAgIHRoaXMuZHJhZ1Jvb3RFbCA9IG51bGw7XG4gICAgICAgIHRoaXMuZHJhZ0RlcHRoID0gMDtcbiAgICAgICAgdGhpcy5yZWxhdGl2ZURlcHRoID0gMDtcbiAgICAgICAgdGhpcy5oYXNOZXdSb290ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucG9pbnRFbCA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGRyYWdTdGFydEZyb21JdGVtKGV2ZW50LCBpdGVtLCBwYXJlbnRMaXN0KSB7XG4gICAgICAgIGlmICghdGhpcy5fcmVnaXN0ZXJIYW5kbGVEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ1N0YXJ0KGV2ZW50LCBpdGVtLCBwYXJlbnRMaXN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZHJhZ1N0YXJ0KGV2ZW50LCBpdGVtLCBwYXJlbnRMaXN0KSB7XG5cbiAgICAgICAgdGhpcy5fb2xkTGlzdExlbmd0aCA9IHRoaXMubGlzdC5sZW5ndGg7XG5cbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuZGlzYWJsZURyYWcpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBldmVudCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFsbG93IG9ubHkgZmlyc3QgbW91c2UgYnV0dG9uXG4gICAgICAgICAgICBpZiAoZXZlbnQudHlwZS5pbmRleE9mKCdtb3VzZScpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5yZWYuZGV0YWNoKCk7XG4gICAgICAgICAgICB0aGlzLl9kcmFnSW5kZXggPSBwYXJlbnRMaXN0LmluZGV4T2YoaXRlbSk7XG4gICAgICAgICAgICB0aGlzLmRyYWdNb2RlbCA9IHBhcmVudExpc3Quc3BsaWNlKHBhcmVudExpc3QuaW5kZXhPZihpdGVtKSwgMSlbMF07XG5cbiAgICAgICAgICAgIGNvbnN0IGRyYWdJdGVtID0gaGVscGVyLl9jbG9zZXN0KGV2ZW50LnRhcmdldCwgdGhpcy5vcHRpb25zLml0ZW1Ob2RlTmFtZSk7XG4gICAgICAgICAgICBpZiAoZHJhZ0l0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9wYXJlbnREcmFnSWQgPSBOdW1iZXIucGFyc2VJbnQoXG4gICAgICAgICAgICAgICAgZHJhZ0l0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCBkcmFnUmVjdCA9IGRyYWdJdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICB0aGlzLl9zaG93TWFza3MoKTtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZURyYWdDbG9uZShldmVudCwgZHJhZ0l0ZW0pO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmRyYWdFbCwgJ3dpZHRoJywgZHJhZ1JlY3Qud2lkdGggKyBQWCk7XG5cbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZVBsYWNlaG9sZGVyKGV2ZW50LCBkcmFnSXRlbSk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuX3BsYWNlaG9sZGVyLCAnaGVpZ2h0JywgZHJhZ1JlY3QuaGVpZ2h0ICsgUFgpO1xuXG4gICAgICAgICAgICB0aGlzLl9jYWxjdWxhdGVEZXB0aCgpO1xuICAgICAgICAgICAgdGhpcy5kcmFnLmVtaXQoe1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLl9jYW5jZWxNb3VzZXVwID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQsXG4gICAgICAgICAgICAgICAgJ21vdXNldXAnLFxuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ1N0b3AuYmluZCh0aGlzKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuX2NhbmNlbE1vdXNlbW92ZSA9IHRoaXMucmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LFxuICAgICAgICAgICAgICAgICdtb3VzZW1vdmUnLFxuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ01vdmUuYmluZCh0aGlzKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkcmFnU3RvcChldmVudCkge1xuICAgICAgICB0aGlzLl9jYW5jZWxNb3VzZXVwKCk7XG4gICAgICAgIHRoaXMuX2NhbmNlbE1vdXNlbW92ZSgpO1xuICAgICAgICB0aGlzLl9oaWRlTWFza3MoKTtcblxuICAgICAgICBpZiAodGhpcy5kcmFnRWwpIHtcbiAgICAgICAgICAgIGNvbnN0IGRyYWdnZWRJZCA9IE51bWJlci5wYXJzZUludCh0aGlzLmRyYWdFbC5maXJzdEVsZW1lbnRDaGlsZC5pZCk7XG4gICAgICAgICAgICBsZXQgcGxhY2Vob2xkZXJDb250YWluZXIgPSBoZWxwZXIuX2Nsb3Nlc3QoXG4gICAgICAgICAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLml0ZW1Ob2RlTmFtZVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbGV0IGNoYW5nZWRFbGVtZW50UG9zaXRpb24gPVxuICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdJbmRleCAhPT1cbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGFjZWhvbGRlci5wYXJlbnRFbGVtZW50LmNoaWxkcmVuLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGFjZWhvbGRlclxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbCh0aGlzLl9wbGFjZWhvbGRlci5wYXJlbnRFbGVtZW50LmNoaWxkcmVuLCB0aGlzLl9wbGFjZWhvbGRlcik7XG5cbiAgICAgICAgICAgIGlmICgodGhpcy5fZHJhZ0luZGV4ID09PSBpbmRleCkgJiYgKHRoaXMuX29sZExpc3RMZW5ndGggPT09IHRoaXMubGlzdC5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZEVsZW1lbnRQb3NpdGlvbiA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHBsYWNlaG9sZGVyIGluIHJvb3RcbiAgICAgICAgICAgIGlmIChwbGFjZWhvbGRlckNvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdC5zcGxpY2UoXG4gICAgICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGFjZWhvbGRlci5wYXJlbnRFbGVtZW50LmNoaWxkcmVuLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgeyAuLi50aGlzLmRyYWdNb2RlbCB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gcGFsY2Vob2xkZXIgbmVzdGVkXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJDb250YWluZXIgPSBoZWxwZXIuX2ZpbmRPYmplY3RJblRyZWUoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdCxcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyLnBhcnNlSW50KHBsYWNlaG9sZGVyQ29udGFpbmVyLmlkKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKCFwbGFjZWhvbGRlckNvbnRhaW5lci5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlckNvbnRhaW5lci5jaGlsZHJlbiA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlckNvbnRhaW5lci5jaGlsZHJlbi5wdXNoKHsgLi4udGhpcy5kcmFnTW9kZWwgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJDb250YWluZXIuY2hpbGRyZW4uc3BsaWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGFjZWhvbGRlci5wYXJlbnRFbGVtZW50LmNoaWxkcmVuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgLi4udGhpcy5kcmFnTW9kZWwgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IHRoaXMuX2RyYWdJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkRWxlbWVudFBvc2l0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghY2hhbmdlZEVsZW1lbnRQb3NpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkRWxlbWVudFBvc2l0aW9uID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyQ29udGFpbmVyWyckJGlkJ10gIT09IHRoaXMuX3BhcmVudERyYWdJZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3BsYWNlaG9sZGVyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5fcGxhY2Vob2xkZXIpO1xuICAgICAgICAgICAgdGhpcy5kcmFnRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmRyYWdFbCk7XG4gICAgICAgICAgICB0aGlzLmRyYWdFbC5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcblxuICAgICAgICAgICAgdGhpcy5saXN0Q2hhbmdlLmVtaXQodGhpcy5saXN0KTtcbiAgICAgICAgICAgIHRoaXMuZHJvcC5lbWl0KHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogcGxhY2Vob2xkZXJDb250YWluZXIsXG4gICAgICAgICAgICAgICAgaXRlbTogdGhpcy5kcmFnTW9kZWwsXG4gICAgICAgICAgICAgICAgY2hhbmdlZEVsZW1lbnRQb3NpdGlvblxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnJlZi5yZWF0dGFjaCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGRyYWdNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRyYWdFbCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBldmVudCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9tb3ZlKGV2ZW50LnR5cGUuaW5kZXhPZignbW91c2UnKSA9PT0gMCA/IGV2ZW50IDogZXZlbnQudG91Y2hlc1swXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZXhwYW5kQWxsKCkge1xuICAgICAgICBoZWxwZXIuX3RyYXZlcnNlQ2hpbGRyZW4odGhpcy5fbGlzdCwgaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtWyckJGV4cGFuZGVkJ10gPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbGxhcHNlQWxsKCkge1xuICAgICAgICBoZWxwZXIuX3RyYXZlcnNlQ2hpbGRyZW4odGhpcy5fbGlzdCwgaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtWyckJGV4cGFuZGVkJ10gPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbn1cbiJdfQ==