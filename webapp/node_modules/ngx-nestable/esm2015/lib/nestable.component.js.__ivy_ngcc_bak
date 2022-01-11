/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import * as helper from './nestable.helper';
import { defaultSettings, DRAG_START, EXPAND_COLLAPSE, mouse, REGISTER_HANDLE } from './nestable.constant';
/** @type {?} */
const PX = 'px';
const ɵ0 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    const el = document.createElement('div');
    /** @type {?} */
    const docEl = document.documentElement;
    if (!('pointerEvents' in el.style)) {
        return false;
    }
    el.style.pointerEvents = 'auto';
    el.style.pointerEvents = 'x';
    docEl.appendChild(el);
    /** @type {?} */
    const supports = window.getComputedStyle &&
        window.getComputedStyle(el, '').pointerEvents === 'auto';
    docEl.removeChild(el);
    return !!supports;
};
/** @type {?} */
const hasPointerEvents = ((ɵ0))();
export class NestableComponent {
    /**
     * @param {?} ref
     * @param {?} renderer
     * @param {?} el
     * @param {?} zone
     */
    constructor(ref, renderer, el, zone) {
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
    /**
     * @return {?}
     */
    get list() {
        return this._list;
    }
    /**
     * @param {?} list
     * @return {?}
     */
    set list(list) {
        this._list = list;
        this._generateItemIds();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // set/extend default options
        this._componentActive = true;
        /** @type {?} */
        const optionKeys = Object.keys(defaultSettings);
        for (const key of optionKeys) {
            if (typeof this.options[key] === 'undefined') {
                this.options[key] = defaultSettings[key];
            }
        }
        this._generateItemIds();
        this._generateItemExpanded();
        this._createHandleListener();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @private
     * @return {?}
     */
    _generateItemIds() {
        helper._traverseChildren(this._list, (/**
         * @param {?} item
         * @return {?}
         */
        item => {
            item['$$id'] = this._itemId++;
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _generateItemExpanded() {
        helper._traverseChildren(this._list, (/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (typeof item.expanded === 'undefined') {
                item['$$expanded'] = true;
            }
            else {
                item['$$expanded'] = item.expanded;
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _createHandleListener() {
        this.renderer.listen(this.el.nativeElement, REGISTER_HANDLE, (/**
         * @return {?}
         */
        () => {
            this._registerHandleDirective = true;
        }));
        this.renderer.listen(this.el.nativeElement, DRAG_START, (/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.dragStart(data.detail.event, data.detail.param.item, data.detail.param.parentList);
        }));
        this.renderer.listen(this.el.nativeElement, EXPAND_COLLAPSE, (/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.disclosure.emit({
                item: data.detail.item,
                expanded: data.detail.item['$$expanded']
            });
        }));
    }
    /**
     * @private
     * @param {?} event
     * @param {?} dragItem
     * @return {?}
     */
    _createDragClone(event, dragItem) {
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
    }
    /**
     * @private
     * @param {?} event
     * @param {?} dragItem
     * @return {?}
     */
    _createPlaceholder(event, dragItem) {
        this._placeholder = document.createElement('div');
        this._placeholder.classList.add(this.options.placeClass);
        helper._insertAfter(this._placeholder, dragItem);
        dragItem.parentNode.removeChild(dragItem);
        this.dragEl.appendChild(dragItem);
        this.dragRootEl = dragItem;
    }
    /**
     * Sets depth proerties (relative and drag)
     * @private
     * @return {?}
     */
    _calculateDepth() {
        // total depth of dragging item
        /** @type {?} */
        let depth;
        /** @type {?} */
        const items = this.dragEl.querySelectorAll(this.options.itemNodeName);
        for (let i = 0; i < items.length; i++) {
            depth = helper._getParents(items[i], this.dragEl).length;
            if (depth > this.dragDepth) {
                this.dragDepth = depth;
            }
        }
        // depth relative to root
        this.relativeDepth = helper._getParents(this._placeholder, this.el.nativeElement.querySelector(this.options.listNodeName)).length;
    }
    /**
     * @private
     * @param {?} event
     * @param {?} dragItem
     * @return {?}
     */
    _mouseStart(event, dragItem) {
        this._mouse.offsetX = event.pageX - helper._offset(dragItem).left;
        this._mouse.offsetY = event.pageY - helper._offset(dragItem).top;
        this._mouse.startX = this._mouse.lastX = event.pageX;
        this._mouse.startY = this._mouse.lastY = event.pageY;
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    _mouseUpdate(event) {
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
    }
    /**
     * @private
     * @return {?}
     */
    _showMasks() {
        /** @type {?} */
        const masks = this.el.nativeElement.getElementsByClassName('nestable-item-mask');
        for (let i = 0; i < masks.length; i++) {
            masks[i].style.display = 'block';
        }
    }
    /**
     * @private
     * @return {?}
     */
    _hideMasks() {
        /** @type {?} */
        const masks = this.el.nativeElement.getElementsByClassName('nestable-item-mask');
        for (let i = 0; i < masks.length; i++) {
            masks[i].style.display = 'none';
        }
    }
    /**
     * calc mouse traverse distance on axis
     * @private
     * @param {?} m - mouse
     * @return {?}
     */
    _calcMouseDistance(m) {
        m.distAxX += Math.abs(m.distX);
        if (m.dirX !== 0 && m.dirX !== m.lastDirX) {
            m.distAxX = 0;
        }
        m.distAxY += Math.abs(m.distY);
        if (m.dirY !== 0 && m.dirY !== m.lastDirY) {
            m.distAxY = 0;
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    _move(event) {
        /** @type {?} */
        let depth;
        /** @type {?} */
        let list;
        /** @type {?} */
        const dragRect = this.dragEl.getBoundingClientRect();
        this.renderer.setStyle(this.dragEl, 'left', event.pageX - this._mouse.offsetX + PX);
        this.renderer.setStyle(this.dragEl, 'top', event.pageY - this._mouse.offsetY + PX);
        this._mouseUpdate(event);
        // axis mouse is now moving on
        /** @type {?} */
        const newAx = Math.abs(this._mouse.distX) > Math.abs(this._mouse.distY) ? 1 : 0;
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
        const pointEl = document.elementFromPoint(event.pageX - document.body.scrollLeft, event.pageY - (window.pageYOffset || document.documentElement.scrollTop));
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
            const previous = this._placeholder.previousElementSibling;
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
                        list = previous.querySelector(`:scope > ${this.options.listNodeName}`);
                        list.appendChild(this._placeholder);
                    }
                }
            }
            // decrease horizontal level
            if (this._mouse.distX < 0) {
                // we can't decrease a level if an item preceeds the current one
                /** @type {?} */
                const next = document.querySelector(`.${this.options.placeClass} + ${this.options.itemNodeName}`);
                /** @type {?} */
                const parentElement = this._placeholder.parentElement;
                if (!next && parentElement) {
                    /** @type {?} */
                    const closestItem = helper._closest(this._placeholder, this.options.itemNodeName);
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
        const pointElRoot = helper._closest(this.pointEl, `.${this.options.rootClass}`);
        /** @type {?} */
        const isNewRoot = pointElRoot
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
            const before = event.pageY <
                helper._offset(this.pointEl).top + this.pointEl.clientHeight / 2;
            /** @type {?} */
            const placeholderParent = this._placeholder.parentNode;
            // get point element depth
            /** @type {?} */
            let pointRelativeDepth;
            pointRelativeDepth = helper._getParents(this.pointEl, this.el.nativeElement.querySelector(this.options.listNodeName)).length;
            if (this.options.fixedDepth) {
                if (pointRelativeDepth === this.relativeDepth - 1) {
                    /** @type {?} */
                    const childList = this.pointEl.querySelector(this.options.listNodeName);
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
    }
    /**
     * @return {?}
     */
    reset() {
        /** @type {?} */
        const keys = Object.keys(this._mouse);
        for (const key of keys) {
            this._mouse[key] = 0;
        }
        this._itemId = 0;
        this.moving = false;
        this.dragEl = null;
        this.dragRootEl = null;
        this.dragDepth = 0;
        this.relativeDepth = 0;
        this.hasNewRoot = false;
        this.pointEl = null;
    }
    /**
     * @param {?} event
     * @param {?} item
     * @param {?} parentList
     * @return {?}
     */
    dragStartFromItem(event, item, parentList) {
        if (!this._registerHandleDirective) {
            this.dragStart(event, item, parentList);
        }
    }
    /**
     * @private
     * @param {?} event
     * @param {?} item
     * @param {?} parentList
     * @return {?}
     */
    dragStart(event, item, parentList) {
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
            const dragItem = helper._closest(event.target, this.options.itemNodeName);
            if (dragItem === null) {
                return;
            }
            this._parentDragId = Number.parseInt(dragItem.parentElement.parentElement.id);
            /** @type {?} */
            const dragRect = dragItem.getBoundingClientRect();
            this._showMasks();
            this._createDragClone(event, dragItem);
            this.renderer.setStyle(this.dragEl, 'width', dragRect.width + PX);
            this._createPlaceholder(event, dragItem);
            this.renderer.setStyle(this._placeholder, 'height', dragRect.height + PX);
            this._calculateDepth();
            this.drag.emit({
                originalEvent: event,
                item
            });
            this._cancelMouseup = this.renderer.listen(document, 'mouseup', this.dragStop.bind(this));
            this._cancelMousemove = this.renderer.listen(document, 'mousemove', this.dragMove.bind(this));
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragStop(event) {
        this._cancelMouseup();
        this._cancelMousemove();
        this._hideMasks();
        if (this.dragEl) {
            /** @type {?} */
            const draggedId = Number.parseInt(this.dragEl.firstElementChild.id);
            /** @type {?} */
            let placeholderContainer = helper._closest(this._placeholder, this.options.itemNodeName);
            /** @type {?} */
            let changedElementPosition = this._dragIndex !==
                Array.prototype.indexOf.call(this._placeholder.parentElement.children, this._placeholder);
            /** @type {?} */
            const index = Array.prototype.indexOf.call(this._placeholder.parentElement.children, this._placeholder);
            if ((this._dragIndex === index) && (this._oldListLength === this.list.length)) {
                changedElementPosition = true;
            }
            // placeholder in root
            if (placeholderContainer === null) {
                this.list.splice(Array.prototype.indexOf.call(this._placeholder.parentElement.children, this._placeholder), 0, Object.assign({}, this.dragModel));
            }
            else {
                // palceholder nested
                placeholderContainer = helper._findObjectInTree(this.list, Number.parseInt(placeholderContainer.id));
                if (!placeholderContainer.children) {
                    placeholderContainer.children = [];
                    placeholderContainer.children.push(Object.assign({}, this.dragModel));
                }
                else {
                    placeholderContainer.children.splice(Array.prototype.indexOf.call(this._placeholder.parentElement.children, this._placeholder), 0, Object.assign({}, this.dragModel));
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
                changedElementPosition
            });
            this.ref.reattach();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragMove(event) {
        if (this.dragEl) {
            event.preventDefault();
            if (event.originalEvent) {
                event = event.originalEvent;
            }
            this._move(event.type.indexOf('mouse') === 0 ? event : event.touches[0]);
        }
    }
    /**
     * @return {?}
     */
    expandAll() {
        helper._traverseChildren(this._list, (/**
         * @param {?} item
         * @return {?}
         */
        item => {
            item['$$expanded'] = true;
        }));
        this.ref.markForCheck();
    }
    /**
     * @return {?}
     */
    collapseAll() {
        helper._traverseChildren(this._list, (/**
         * @param {?} item
         * @return {?}
         */
        item => {
            item['$$expanded'] = false;
        }));
        this.ref.markForCheck();
    }
}
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
NestableComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: ElementRef },
    { type: NgZone }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW5lc3RhYmxlLyIsInNvdXJjZXMiOlsibGliL25lc3RhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFHTixNQUFNLEVBQ04sU0FBUyxFQUNULGdCQUFnQixFQUNoQixpQkFBaUIsRUFDcEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxLQUFLLE1BQU0sTUFBTSxtQkFBbUIsQ0FBQztBQUU1QyxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztNQUVyRyxFQUFFLEdBQUcsSUFBSTs7OztBQUNXOztVQUNoQixFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7O1VBQ3BDLEtBQUssR0FBRyxRQUFRLENBQUMsZUFBZTtJQUVwQyxJQUFJLENBQUMsQ0FBQyxlQUFlLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2hDLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBRUQsRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO0lBQ2hDLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztJQUM3QixLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDOztVQUNoQixRQUFRLEdBQ1YsTUFBTSxDQUFDLGdCQUFnQjtRQUN2QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLGFBQWEsS0FBSyxNQUFNO0lBQzVELEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEIsT0FBTyxDQUFD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akMsbUNBQTBDOzs7OztJQUMxQyxrQ0FBbUI7Ozs7O0lBRW5CLDZDQUFtQzs7Ozs7SUFDbkMsMkNBQWlDOzs7OztJQUNqQyx5Q0FBcUI7Ozs7O0lBQ3JCLG9DQUFvQjs7Ozs7SUFDcEIscURBQXlDOzs7OztJQUN6Qyx1Q0FBbUI7Ozs7O0lBQ25CLDBDQUFzQjs7Ozs7SUFDdEIsMkNBQTRCOzs7OztJQUd4QixnQ0FBOEI7Ozs7O0lBQzlCLHFDQUEyQjs7Ozs7SUFDM0IsK0JBQXNCOzs7OztJQUN0QixpQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBJbnB1dCxcbiAgICBOZ1pvbmUsXG4gICAgT25EZXN0cm95LFxuICAgIE9uSW5pdCxcbiAgICBPdXRwdXQsXG4gICAgUmVuZGVyZXIyLFxuICAgIFZpZXdDb250YWluZXJSZWYsXG4gICAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCAqIGFzIGhlbHBlciBmcm9tICcuL25lc3RhYmxlLmhlbHBlcic7XG5cbmltcG9ydCB7IGRlZmF1bHRTZXR0aW5ncywgRFJBR19TVEFSVCwgRVhQQU5EX0NPTExBUFNFLCBtb3VzZSwgUkVHSVNURVJfSEFORExFIH0gZnJvbSAnLi9uZXN0YWJsZS5jb25zdGFudCc7XG5cbmNvbnN0IFBYID0gJ3B4JztcbmNvbnN0IGhhc1BvaW50ZXJFdmVudHMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgIGRvY0VsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgaWYgKCEoJ3BvaW50ZXJFdmVudHMnIGluIGVsLnN0eWxlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZWwuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcbiAgICBlbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ3gnO1xuICAgIGRvY0VsLmFwcGVuZENoaWxkKGVsKTtcbiAgICBjb25zdCBzdXBwb3J0cyA9XG4gICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlICYmXG4gICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCAnJykucG9pbnRlckV2ZW50cyA9PT0gJ2F1dG8nO1xuICAgIGRvY0VsLnJlbW92ZUNoaWxkKGVsKTtcbiAgICByZXR1cm4gISFzdXBwb3J0cztcbn0pKCk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LW5lc3RhYmxlJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmVzdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL25lc3RhYmxlLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOZXN0YWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBAT3V0cHV0KCkgcHVibGljIGxpc3RDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIHB1YmxpYyBkcm9wID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgZHJhZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIGRpc2Nsb3N1cmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBASW5wdXQoKSBwdWJsaWMgdGVtcGxhdGU6IFZpZXdDb250YWluZXJSZWY7XG4gICAgQElucHV0KCkgcHVibGljIG9wdGlvbnMgPSBkZWZhdWx0U2V0dGluZ3M7XG4gICAgQElucHV0KCkgcHVibGljIGRpc2FibGVEcmFnID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgbGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3Q7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBsaXN0KGxpc3QpIHtcbiAgICAgICAgdGhpcy5fbGlzdCA9IGxpc3Q7XG4gICAgICAgIHRoaXMuX2dlbmVyYXRlSXRlbUlkcygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkcmFnUm9vdEVsID0gbnVsbDtcbiAgICBwdWJsaWMgZHJhZ0VsID0gbnVsbDtcbiAgICBwdWJsaWMgZHJhZ01vZGVsID0gbnVsbDtcbiAgICBwdWJsaWMgbW92aW5nID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBEcmFnZ2VkIGVsZW1lbnQgY29udGFpbnMgY2hpbGRyZW4sIGFuZCB0aG9zZSBjaGlsZHJlbiBjb250YWluIG90aGVyIGNoaWxkcmVuIGFuZCBzbyBvbi4uLlxuICAgICAqIFRoaXMgcHJvcGVydHkgZ2l2ZXMgeW91IHRoZSBudW1iZXIgb2YgZ2VuZXJhdGlvbnMgY29udGFpbmVkIHdpdGhpbiB0aGUgZHJhZ2dpbmcgaXRlbS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZHJhZ0RlcHRoID0gMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZXB0aCBvZiBkcmFnZ2luZyBpdGVtIHJlbGF0aXZlIHRvIGVsZW1lbnQgcm9vdCAobmd4LW5lc3RhYmxlKVxuICAgICAqL1xuICAgIHB1YmxpYyByZWxhdGl2ZURlcHRoID0gMDtcblxuICAgIHB1YmxpYyBoYXNOZXdSb290ID0gZmFsc2U7XG4gICAgcHVibGljIHBvaW50RWwgPSBudWxsO1xuICAgIHB1YmxpYyBpdGVtcyA9IFtdO1xuXG4gICAgcHJpdmF0ZSBfY29tcG9uZW50QWN0aXZlID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfbW91c2UgPSBPYmplY3QuYXNzaWduKHt9LCBtb3VzZSk7XG4gICAgcHJpdmF0ZSBfbGlzdCA9IFtdO1xuICAgIC8vIHByaXZhdGUgX29wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0U2V0dGluZ3MpIGFzIE5lc3RhYmxlU2V0dGluZ3M7XG4gICAgcHJpdmF0ZSBfY2FuY2VsTW91c2Vtb3ZlOiBGdW5jdGlvbjtcbiAgICBwcml2YXRlIF9jYW5jZWxNb3VzZXVwOiBGdW5jdGlvbjtcbiAgICBwcml2YXRlIF9wbGFjZWhvbGRlcjtcbiAgICBwcml2YXRlIF9pdGVtSWQgPSAwO1xuICAgIHByaXZhdGUgX3JlZ2lzdGVySGFuZGxlRGlyZWN0aXZlID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfZHJhZ0luZGV4O1xuICAgIHByaXZhdGUgX3BhcmVudERyYWdJZDtcbiAgICBwcml2YXRlIF9vbGRMaXN0TGVuZ3RoOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgICAgIHByaXZhdGUgem9uZTogTmdab25lXG4gICAgKSB7fVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIHNldC9leHRlbmQgZGVmYXVsdCBvcHRpb25zXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudEFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNvbnN0IG9wdGlvbktleXMgPSBPYmplY3Qua2V5cyhkZWZhdWx0U2V0dGluZ3MpO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBvcHRpb25LZXlzKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9uc1trZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc1trZXldID0gZGVmYXVsdFNldHRpbmdzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9nZW5lcmF0ZUl0ZW1JZHMoKTtcbiAgICAgICAgdGhpcy5fZ2VuZXJhdGVJdGVtRXhwYW5kZWQoKTtcbiAgICAgICAgdGhpcy5fY3JlYXRlSGFuZGxlTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHt9XG5cbiAgICBwcml2YXRlIF9nZW5lcmF0ZUl0ZW1JZHMoKSB7XG4gICAgICAgIGhlbHBlci5fdHJhdmVyc2VDaGlsZHJlbih0aGlzLl9saXN0LCBpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW1bJyQkaWQnXSA9IHRoaXMuX2l0ZW1JZCsrO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZW5lcmF0ZUl0ZW1FeHBhbmRlZCgpIHtcbiAgICAgICAgaGVscGVyLl90cmF2ZXJzZUNoaWxkcmVuKHRoaXMuX2xpc3QsIGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpdGVtLmV4cGFuZGVkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGl0ZW1bJyQkZXhwYW5kZWQnXSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW1bJyQkZXhwYW5kZWQnXSA9IGl0ZW0uZXhwYW5kZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NyZWF0ZUhhbmRsZUxpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIFJFR0lTVEVSX0hBTkRMRSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fcmVnaXN0ZXJIYW5kbGVEaXJlY3RpdmUgPSB0cnVlO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIERSQUdfU1RBUlQsIGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5kcmFnU3RhcnQoXG4gICAgICAgICAgICAgICAgZGF0YS5kZXRhaWwuZXZlbnQsXG4gICAgICAgICAgICAgICAgZGF0YS5kZXRhaWwucGFyYW0uaXRlbSxcbiAgICAgICAgICAgICAgICBkYXRhLmRldGFpbC5wYXJhbS5wYXJlbnRMaXN0XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIEVYUEFORF9DT0xMQVBTRSwgZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpc2Nsb3N1cmUuZW1pdCh7XG4gICAgICAgICAgICAgICAgaXRlbTogZGF0YS5kZXRhaWwuaXRlbSxcbiAgICAgICAgICAgICAgICBleHBhbmRlZDogZGF0YS5kZXRhaWwuaXRlbVsnJCRleHBhbmRlZCddXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY3JlYXRlRHJhZ0Nsb25lKGV2ZW50LCBkcmFnSXRlbSkge1xuICAgICAgICB0aGlzLl9tb3VzZVN0YXJ0KGV2ZW50LCBkcmFnSXRlbSk7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9yZWdpc3RlckhhbmRsZURpcmVjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5fbW91c2Uub2Zmc2V0WSA9IGRyYWdJdGVtLm5leHRFbGVtZW50U2libGluZ1xuICAgICAgICAgICAgICAgID8gZHJhZ0l0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmNsaWVudEhlaWdodCAvIDJcbiAgICAgICAgICAgICAgICA6IGRyYWdJdGVtLmNsaWVudEhlaWdodCAvIDI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjcmVhdGUgZHJhZyBjbG9uZVxuICAgICAgICB0aGlzLmRyYWdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy5vcHRpb25zLmxpc3ROb2RlTmFtZSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kcmFnRWwpO1xuXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5kcmFnRWwsIHRoaXMub3B0aW9ucy5kcmFnQ2xhc3MpO1xuXG4gICAgICAgIC8vIGFkZCBkcmFnIGNsb25lIHRvIGJvZHkgYW5kIHNldCBjc3NcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgIHRoaXMuZHJhZ0VsLFxuICAgICAgICAgICAgJ2xlZnQnLFxuICAgICAgICAgICAgZXZlbnQucGFnZVggLSB0aGlzLl9tb3VzZS5vZmZzZXRYICsgUFhcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgIHRoaXMuZHJhZ0VsLFxuICAgICAgICAgICAgJ3RvcCcsXG4gICAgICAgICAgICBldmVudC5wYWdlWSAtIHRoaXMuX21vdXNlLm9mZnNldFkgKyBQWFxuICAgICAgICApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZHJhZ0VsLCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmRyYWdFbCwgJ3otaW5kZXgnLCA5OTk5KTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmRyYWdFbCwgJ3BvaW50ZXItZXZlbnRzJywgJ25vbmUnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jcmVhdGVQbGFjZWhvbGRlcihldmVudCwgZHJhZ0l0ZW0pIHtcbiAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZCh0aGlzLm9wdGlvbnMucGxhY2VDbGFzcyk7XG4gICAgICAgIGhlbHBlci5faW5zZXJ0QWZ0ZXIodGhpcy5fcGxhY2Vob2xkZXIsIGRyYWdJdGVtKTtcbiAgICAgICAgZHJhZ0l0ZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkcmFnSXRlbSk7XG4gICAgICAgIHRoaXMuZHJhZ0VsLmFwcGVuZENoaWxkKGRyYWdJdGVtKTtcbiAgICAgICAgdGhpcy5kcmFnUm9vdEVsID0gZHJhZ0l0ZW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyBkZXB0aCBwcm9lcnRpZXMgKHJlbGF0aXZlIGFuZCBkcmFnKVxuICAgICAqL1xuICAgIHByaXZhdGUgX2NhbGN1bGF0ZURlcHRoKCkge1xuICAgICAgICAvLyB0b3RhbCBkZXB0aCBvZiBkcmFnZ2luZyBpdGVtXG4gICAgICAgIGxldCBkZXB0aDtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLmRyYWdFbC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMub3B0aW9ucy5pdGVtTm9kZU5hbWUpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkZXB0aCA9IGhlbHBlci5fZ2V0UGFyZW50cyhpdGVtc1tpXSwgdGhpcy5kcmFnRWwpLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChkZXB0aCA+IHRoaXMuZHJhZ0RlcHRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnRGVwdGggPSBkZXB0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRlcHRoIHJlbGF0aXZlIHRvIHJvb3RcbiAgICAgICAgdGhpcy5yZWxhdGl2ZURlcHRoID0gaGVscGVyLl9nZXRQYXJlbnRzKFxuICAgICAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIsXG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMubGlzdE5vZGVOYW1lKVxuICAgICAgICApLmxlbmd0aDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9tb3VzZVN0YXJ0KGV2ZW50LCBkcmFnSXRlbSkge1xuICAgICAgICB0aGlzLl9tb3VzZS5vZmZzZXRYID0gZXZlbnQucGFnZVggLSBoZWxwZXIuX29mZnNldChkcmFnSXRlbSkubGVmdDtcbiAgICAgICAgdGhpcy5fbW91c2Uub2Zmc2V0WSA9IGV2ZW50LnBhZ2VZIC0gaGVscGVyLl9vZmZzZXQoZHJhZ0l0ZW0pLnRvcDtcbiAgICAgICAgdGhpcy5fbW91c2Uuc3RhcnRYID0gdGhpcy5fbW91c2UubGFzdFggPSBldmVudC5wYWdlWDtcbiAgICAgICAgdGhpcy5fbW91c2Uuc3RhcnRZID0gdGhpcy5fbW91c2UubGFzdFkgPSBldmVudC5wYWdlWTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9tb3VzZVVwZGF0ZShldmVudCkge1xuICAgICAgICAvLyBtb3VzZSBwb3NpdGlvbiBsYXN0IGV2ZW50c1xuICAgICAgICB0aGlzLl9tb3VzZS5sYXN0WCA9IHRoaXMuX21vdXNlLm5vd1g7XG4gICAgICAgIHRoaXMuX21vdXNlLmxhc3RZID0gdGhpcy5fbW91c2Uubm93WTtcbiAgICAgICAgLy8gbW91c2UgcG9zaXRpb24gdGhpcyBldmVudHNcbiAgICAgICAgdGhpcy5fbW91c2Uubm93WCA9IGV2ZW50LnBhZ2VYO1xuICAgICAgICB0aGlzLl9tb3VzZS5ub3dZID0gZXZlbnQucGFnZVk7XG4gICAgICAgIC8vIGRpc3RhbmNlIG1vdXNlIG1vdmVkIGJldHdlZW4gZXZlbnRzXG4gICAgICAgIHRoaXMuX21vdXNlLmRpc3RYID0gdGhpcy5fbW91c2Uubm93WCAtIHRoaXMuX21vdXNlLmxhc3RYO1xuICAgICAgICB0aGlzLl9tb3VzZS5kaXN0WSA9IHRoaXMuX21vdXNlLm5vd1kgLSB0aGlzLl9tb3VzZS5sYXN0WTtcbiAgICAgICAgLy8gZGlyZWN0aW9uIG1vdXNlIHdhcyBtb3ZpbmdcbiAgICAgICAgdGhpcy5fbW91c2UubGFzdERpclggPSB0aGlzLl9tb3VzZS5kaXJYO1xuICAgICAgICB0aGlzLl9tb3VzZS5sYXN0RGlyWSA9IHRoaXMuX21vdXNlLmRpclk7XG4gICAgICAgIC8vIGRpcmVjdGlvbiBtb3VzZSBpcyBub3cgbW92aW5nIChvbiBib3RoIGF4aXMpXG4gICAgICAgIHRoaXMuX21vdXNlLmRpclggPVxuICAgICAgICAgICAgdGhpcy5fbW91c2UuZGlzdFggPT09IDAgPyAwIDogdGhpcy5fbW91c2UuZGlzdFggPiAwID8gMSA6IC0xO1xuICAgICAgICB0aGlzLl9tb3VzZS5kaXJZID1cbiAgICAgICAgICAgIHRoaXMuX21vdXNlLmRpc3RZID09PSAwID8gMCA6IHRoaXMuX21vdXNlLmRpc3RZID4gMCA/IDEgOiAtMTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zaG93TWFza3MoKSB7XG4gICAgICAgIGNvbnN0IG1hc2tzID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAgICAgICAnbmVzdGFibGUtaXRlbS1tYXNrJ1xuICAgICAgICApO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBtYXNrc1tpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2hpZGVNYXNrcygpIHtcbiAgICAgICAgY29uc3QgbWFza3MgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICAgICAgICduZXN0YWJsZS1pdGVtLW1hc2snXG4gICAgICAgICk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG1hc2tzW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjYWxjIG1vdXNlIHRyYXZlcnNlIGRpc3RhbmNlIG9uIGF4aXNcbiAgICAgKiBAcGFyYW0gbSAtIG1vdXNlXG4gICAgICovXG4gICAgcHJpdmF0ZSBfY2FsY01vdXNlRGlzdGFuY2UobSkge1xuICAgICAgICBtLmRpc3RBeFggKz0gTWF0aC5hYnMobS5kaXN0WCk7XG4gICAgICAgIGlmIChtLmRpclggIT09IDAgJiYgbS5kaXJYICE9PSBtLmxhc3REaXJYKSB7XG4gICAgICAgICAgICBtLmRpc3RBeFggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbS5kaXN0QXhZICs9IE1hdGguYWJzKG0uZGlzdFkpO1xuICAgICAgICBpZiAobS5kaXJZICE9PSAwICYmIG0uZGlyWSAhPT0gbS5sYXN0RGlyWSkge1xuICAgICAgICAgICAgbS5kaXN0QXhZID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX21vdmUoZXZlbnQpIHtcbiAgICAgICAgbGV0IGRlcHRoLCBsaXN0O1xuXG4gICAgICAgIGNvbnN0IGRyYWdSZWN0ID0gdGhpcy5kcmFnRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgICB0aGlzLmRyYWdFbCxcbiAgICAgICAgICAgICdsZWZ0JyxcbiAgICAgICAgICAgIGV2ZW50LnBhZ2VYIC0gdGhpcy5fbW91c2Uub2Zmc2V0WCArIFBYXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgICB0aGlzLmRyYWdFbCxcbiAgICAgICAgICAgICd0b3AnLFxuICAgICAgICAgICAgZXZlbnQucGFnZVkgLSB0aGlzLl9tb3VzZS5vZmZzZXRZICsgUFhcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLl9tb3VzZVVwZGF0ZShldmVudCk7XG5cbiAgICAgICAgLy8gYXhpcyBtb3VzZSBpcyBub3cgbW92aW5nIG9uXG4gICAgICAgIGNvbnN0IG5ld0F4ID1cbiAgICAgICAgICAgIE1hdGguYWJzKHRoaXMuX21vdXNlLmRpc3RYKSA+IE1hdGguYWJzKHRoaXMuX21vdXNlLmRpc3RZKSA/IDEgOiAwO1xuXG4gICAgICAgIC8vIGRvIG5vdGhpbmcgb24gZmlyc3QgbW92ZVxuICAgICAgICBpZiAoIXRoaXMuX21vdXNlLm1vdmluZykge1xuICAgICAgICAgICAgdGhpcy5fbW91c2UuZGlyQXggPSBuZXdBeDtcbiAgICAgICAgICAgIHRoaXMuX21vdXNlLm1vdmluZyA9IDE7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjYWxjIGRpc3RhbmNlIG1vdmVkIG9uIHRoaXMgYXhpcyAoYW5kIGRpcmVjdGlvbilcbiAgICAgICAgaWYgKHRoaXMuX21vdXNlLmRpckF4ICE9PSBuZXdBeCkge1xuICAgICAgICAgICAgdGhpcy5fbW91c2UuZGlzdEF4WCA9IDA7XG4gICAgICAgICAgICB0aGlzLl9tb3VzZS5kaXN0QXhZID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbGNNb3VzZURpc3RhbmNlKHRoaXMuX21vdXNlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tb3VzZS5kaXJBeCA9IG5ld0F4O1xuXG4gICAgICAgIC8vIGZpbmQgbGlzdCBpdGVtIHVuZGVyIGN1cnNvclxuICAgICAgICBpZiAoIWhhc1BvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ0VsLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBvaW50RWwgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KFxuICAgICAgICAgICAgZXZlbnQucGFnZVggLSBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQsXG4gICAgICAgICAgICBldmVudC5wYWdlWSAtICh3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcClcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoIWhhc1BvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ0VsLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBwb2ludEVsICYmXG4gICAgICAgICAgICAocG9pbnRFbC5jbGFzc0xpc3QuY29udGFpbnMoJ25lc3RhYmxlLWl0ZW0tbWFzaycpIHx8XG4gICAgICAgICAgICAgICAgcG9pbnRFbC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5vcHRpb25zLnBsYWNlQ2xhc3MpKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMucG9pbnRFbCA9IHBvaW50RWwucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIG1vdmUgaG9yaXpvbnRhbFxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXRoaXMub3B0aW9ucy5maXhlZERlcHRoICYmXG4gICAgICAgICAgICB0aGlzLl9tb3VzZS5kaXJBeCAmJlxuICAgICAgICAgICAgdGhpcy5fbW91c2UuZGlzdEF4WCA+PSB0aGlzLm9wdGlvbnMudGhyZXNob2xkXG4gICAgICAgICkge1xuICAgICAgICAgICAgLy8gcmVzZXQgbW92ZSBkaXN0YW5jZSBvbiB4LWF4aXMgZm9yIG5ldyBwaGFzZVxuICAgICAgICAgICAgdGhpcy5fbW91c2UuZGlzdEF4WCA9IDA7XG4gICAgICAgICAgICBjb25zdCBwcmV2aW91cyA9IHRoaXMuX3BsYWNlaG9sZGVyLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cbiAgICAgICAgICAgIC8vIGluY3JlYXNlIGhvcml6b250YWwgbGV2ZWwgaWYgcHJldmlvdXMgc2libGluZyBleGlzdHMsIGlzIG5vdCBjb2xsYXBzZWQsIGFuZCBjYW4gaGF2ZSBjaGlsZHJlblxuICAgICAgICAgICAgaWYgKHRoaXMuX21vdXNlLmRpc3RYID4gMCAmJiBwcmV2aW91cykge1xuICAgICAgICAgICAgICAgIGxpc3QgPSBwcmV2aW91cy5xdWVyeVNlbGVjdG9yQWxsKHRoaXMub3B0aW9ucy5saXN0Tm9kZU5hbWUpO1xuICAgICAgICAgICAgICAgIGxpc3QgPSBsaXN0W2xpc3QubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBkZXB0aCBsaW1pdCBoYXMgcmVhY2hlZFxuICAgICAgICAgICAgICAgIGRlcHRoID0gaGVscGVyLl9nZXRQYXJlbnRzKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGFjZWhvbGRlcixcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLmxpc3ROb2RlTmFtZSlcbiAgICAgICAgICAgICAgICApLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIGlmIChkZXB0aCArIHRoaXMuZHJhZ0RlcHRoIDw9IHRoaXMub3B0aW9ucy5tYXhEZXB0aCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjcmVhdGUgbmV3IHN1Yi1sZXZlbCBpZiBvbmUgZG9lc24ndCBleGlzdFxuICAgICAgICAgICAgICAgICAgICBpZiAoIWxpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMub3B0aW9ucy5saXN0Tm9kZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5zdHlsZS5wYWRkaW5nTGVmdCA9IHRoaXMub3B0aW9ucy50aHJlc2hvbGQgKyBQWDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQodGhpcy5fcGxhY2Vob2xkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXMuYXBwZW5kQ2hpbGQobGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNldFBhcmVudChwcmV2aW91cyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlbHNlIGFwcGVuZCB0byBuZXh0IGxldmVsIHVwXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ID0gcHJldmlvdXMucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgOnNjb3BlID4gJHsgdGhpcy5vcHRpb25zLmxpc3ROb2RlTmFtZSB9YFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQodGhpcy5fcGxhY2Vob2xkZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZGVjcmVhc2UgaG9yaXpvbnRhbCBsZXZlbFxuICAgICAgICAgICAgaWYgKHRoaXMuX21vdXNlLmRpc3RYIDwgMCkge1xuICAgICAgICAgICAgICAgIC8vIHdlIGNhbid0IGRlY3JlYXNlIGEgbGV2ZWwgaWYgYW4gaXRlbSBwcmVjZWVkcyB0aGUgY3VycmVudCBvbmVcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgYC4keyB0aGlzLm9wdGlvbnMucGxhY2VDbGFzcyB9ICsgJHsgdGhpcy5vcHRpb25zLml0ZW1Ob2RlTmFtZSB9YFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50RWxlbWVudCA9IHRoaXMuX3BsYWNlaG9sZGVyLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgaWYgKCFuZXh0ICYmIHBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xvc2VzdEl0ZW0gPSBoZWxwZXIuX2Nsb3Nlc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGFjZWhvbGRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pdGVtTm9kZU5hbWVcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xvc2VzdEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5fcGxhY2Vob2xkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyLl9pbnNlcnRBZnRlcih0aGlzLl9wbGFjZWhvbGRlciwgY2xvc2VzdEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwb2ludEVsLmNsYXNzTGlzdC5jb250YWlucygnbmVzdGFibGUtaXRlbS1tYXNrJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZpbmQgcm9vdCBsaXN0IG9mIGl0ZW0gdW5kZXIgY3Vyc29yXG4gICAgICAgIGNvbnN0IHBvaW50RWxSb290ID0gaGVscGVyLl9jbG9zZXN0KFxuICAgICAgICAgICAgdGhpcy5wb2ludEVsLFxuICAgICAgICAgICAgYC4keyB0aGlzLm9wdGlvbnMucm9vdENsYXNzIH1gXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgaXNOZXdSb290ID0gcG9pbnRFbFJvb3RcbiAgICAgICAgICAgICAgICA/IHRoaXMuZHJhZ1Jvb3RFbC5kYXRhc2V0WyduZXN0YWJsZS1pZCddICE9PVxuICAgICAgICAgICAgICAgIHBvaW50RWxSb290LmRhdGFzZXRbJ25lc3RhYmxlLWlkJ11cbiAgICAgICAgICAgICAgICA6IGZhbHNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBtb3ZlIHZlcnRpY2FsXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoIXRoaXMuX21vdXNlLmRpckF4IHx8IGlzTmV3Um9vdCkge1xuICAgICAgICAgICAgLy8gY2hlY2sgaWYgZ3JvdXBzIG1hdGNoIGlmIGRyYWdnaW5nIG92ZXIgbmV3IHJvb3RcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBpc05ld1Jvb3QgJiZcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZ3JvdXAgIT09IHBvaW50RWxSb290LmRhdGFzZXRbJ25lc3RhYmxlLWdyb3VwJ11cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY2hlY2sgZGVwdGggbGltaXRcbiAgICAgICAgICAgIGRlcHRoID1cbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdEZXB0aCAtXG4gICAgICAgICAgICAgICAgMSArXG4gICAgICAgICAgICAgICAgaGVscGVyLl9nZXRQYXJlbnRzKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvaW50RWwsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5saXN0Tm9kZU5hbWUpXG4gICAgICAgICAgICAgICAgKS5sZW5ndGg7XG5cbiAgICAgICAgICAgIGlmIChkZXB0aCA+IHRoaXMub3B0aW9ucy5tYXhEZXB0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYmVmb3JlID1cbiAgICAgICAgICAgICAgICBldmVudC5wYWdlWSA8XG4gICAgICAgICAgICAgICAgaGVscGVyLl9vZmZzZXQodGhpcy5wb2ludEVsKS50b3AgKyB0aGlzLnBvaW50RWwuY2xpZW50SGVpZ2h0IC8gMjtcbiAgICAgICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyUGFyZW50ID0gdGhpcy5fcGxhY2Vob2xkZXIucGFyZW50Tm9kZTtcblxuICAgICAgICAgICAgLy8gZ2V0IHBvaW50IGVsZW1lbnQgZGVwdGhcbiAgICAgICAgICAgIGxldCBwb2ludFJlbGF0aXZlRGVwdGg7XG4gICAgICAgICAgICBwb2ludFJlbGF0aXZlRGVwdGggPSBoZWxwZXIuX2dldFBhcmVudHMoXG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludEVsLFxuICAgICAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5saXN0Tm9kZU5hbWUpXG4gICAgICAgICAgICApLmxlbmd0aDtcblxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5maXhlZERlcHRoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBvaW50UmVsYXRpdmVEZXB0aCA9PT0gdGhpcy5yZWxhdGl2ZURlcHRoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZExpc3QgPSB0aGlzLnBvaW50RWwucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5saXN0Tm9kZU5hbWVcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjaGlsZExpc3QuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3QuYXBwZW5kQ2hpbGQodGhpcy5fcGxhY2Vob2xkZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwb2ludFJlbGF0aXZlRGVwdGggPT09IHRoaXMucmVsYXRpdmVEZXB0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmVmb3JlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvaW50RWwucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb2ludEVsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyLl9pbnNlcnRBZnRlcih0aGlzLl9wbGFjZWhvbGRlciwgdGhpcy5wb2ludEVsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb2ludEVsLnBhcmVudEVsZW1lbnQuY2hpbGRyZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb2ludEVsXG4gICAgICAgICAgICAgICAgICAgICAgICApID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb2ludEVsLnBhcmVudEVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlci5faW5zZXJ0QWZ0ZXIodGhpcy5fcGxhY2Vob2xkZXIsIHRoaXMucG9pbnRFbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJlZm9yZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9pbnRFbC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9pbnRFbFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhlbHBlci5faW5zZXJ0QWZ0ZXIodGhpcy5fcGxhY2Vob2xkZXIsIHRoaXMucG9pbnRFbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLl9tb3VzZSk7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgIHRoaXMuX21vdXNlW2tleV0gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faXRlbUlkID0gMDtcbiAgICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kcmFnRWwgPSBudWxsO1xuICAgICAgICB0aGlzLmRyYWdSb290RWwgPSBudWxsO1xuICAgICAgICB0aGlzLmRyYWdEZXB0aCA9IDA7XG4gICAgICAgIHRoaXMucmVsYXRpdmVEZXB0aCA9IDA7XG4gICAgICAgIHRoaXMuaGFzTmV3Um9vdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvaW50RWwgPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBkcmFnU3RhcnRGcm9tSXRlbShldmVudCwgaXRlbSwgcGFyZW50TGlzdCkge1xuICAgICAgICBpZiAoIXRoaXMuX3JlZ2lzdGVySGFuZGxlRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmRyYWdTdGFydChldmVudCwgaXRlbSwgcGFyZW50TGlzdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGRyYWdTdGFydChldmVudCwgaXRlbSwgcGFyZW50TGlzdCkge1xuXG4gICAgICAgIHRoaXMuX29sZExpc3RMZW5ndGggPSB0aGlzLmxpc3QubGVuZ3RoO1xuXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmRpc2FibGVEcmFnKSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQgPSBldmVudC5vcmlnaW5hbEV2ZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBhbGxvdyBvbmx5IGZpcnN0IG1vdXNlIGJ1dHRvblxuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUuaW5kZXhPZignbW91c2UnKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5idXR0b24gIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucmVmLmRldGFjaCgpO1xuICAgICAgICAgICAgdGhpcy5fZHJhZ0luZGV4ID0gcGFyZW50TGlzdC5pbmRleE9mKGl0ZW0pO1xuICAgICAgICAgICAgdGhpcy5kcmFnTW9kZWwgPSBwYXJlbnRMaXN0LnNwbGljZShwYXJlbnRMaXN0LmluZGV4T2YoaXRlbSksIDEpWzBdO1xuXG4gICAgICAgICAgICBjb25zdCBkcmFnSXRlbSA9IGhlbHBlci5fY2xvc2VzdChldmVudC50YXJnZXQsIHRoaXMub3B0aW9ucy5pdGVtTm9kZU5hbWUpO1xuICAgICAgICAgICAgaWYgKGRyYWdJdGVtID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcGFyZW50RHJhZ0lkID0gTnVtYmVyLnBhcnNlSW50KFxuICAgICAgICAgICAgICAgIGRyYWdJdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgZHJhZ1JlY3QgPSBkcmFnSXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgICAgdGhpcy5fc2hvd01hc2tzKCk7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVEcmFnQ2xvbmUoZXZlbnQsIGRyYWdJdGVtKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5kcmFnRWwsICd3aWR0aCcsIGRyYWdSZWN0LndpZHRoICsgUFgpO1xuXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVQbGFjZWhvbGRlcihldmVudCwgZHJhZ0l0ZW0pO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9wbGFjZWhvbGRlciwgJ2hlaWdodCcsIGRyYWdSZWN0LmhlaWdodCArIFBYKTtcblxuICAgICAgICAgICAgdGhpcy5fY2FsY3VsYXRlRGVwdGgoKTtcbiAgICAgICAgICAgIHRoaXMuZHJhZy5lbWl0KHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5fY2FuY2VsTW91c2V1cCA9IHRoaXMucmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LFxuICAgICAgICAgICAgICAgICdtb3VzZXVwJyxcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdTdG9wLmJpbmQodGhpcylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLl9jYW5jZWxNb3VzZW1vdmUgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgICAgICAgICBkb2N1bWVudCxcbiAgICAgICAgICAgICAgICAnbW91c2Vtb3ZlJyxcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdNb3ZlLmJpbmQodGhpcylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZHJhZ1N0b3AoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5fY2FuY2VsTW91c2V1cCgpO1xuICAgICAgICB0aGlzLl9jYW5jZWxNb3VzZW1vdmUoKTtcbiAgICAgICAgdGhpcy5faGlkZU1hc2tzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZHJhZ0VsKSB7XG4gICAgICAgICAgICBjb25zdCBkcmFnZ2VkSWQgPSBOdW1iZXIucGFyc2VJbnQodGhpcy5kcmFnRWwuZmlyc3RFbGVtZW50Q2hpbGQuaWQpO1xuICAgICAgICAgICAgbGV0IHBsYWNlaG9sZGVyQ29udGFpbmVyID0gaGVscGVyLl9jbG9zZXN0KFxuICAgICAgICAgICAgICAgIHRoaXMuX3BsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pdGVtTm9kZU5hbWVcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGxldCBjaGFuZ2VkRWxlbWVudFBvc2l0aW9uID1cbiAgICAgICAgICAgICAgICB0aGlzLl9kcmFnSW5kZXggIT09XG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIucGFyZW50RWxlbWVudC5jaGlsZHJlbixcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwodGhpcy5fcGxhY2Vob2xkZXIucGFyZW50RWxlbWVudC5jaGlsZHJlbiwgdGhpcy5fcGxhY2Vob2xkZXIpO1xuXG4gICAgICAgICAgICBpZiAoKHRoaXMuX2RyYWdJbmRleCA9PT0gaW5kZXgpICYmICh0aGlzLl9vbGRMaXN0TGVuZ3RoID09PSB0aGlzLmxpc3QubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIGNoYW5nZWRFbGVtZW50UG9zaXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBwbGFjZWhvbGRlciBpbiByb290XG4gICAgICAgICAgICBpZiAocGxhY2Vob2xkZXJDb250YWluZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3Quc3BsaWNlKFxuICAgICAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIucGFyZW50RWxlbWVudC5jaGlsZHJlbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgIHsgLi4udGhpcy5kcmFnTW9kZWwgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHBhbGNlaG9sZGVyIG5lc3RlZFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyQ29udGFpbmVyID0gaGVscGVyLl9maW5kT2JqZWN0SW5UcmVlKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3QsXG4gICAgICAgICAgICAgICAgICAgIE51bWJlci5wYXJzZUludChwbGFjZWhvbGRlckNvbnRhaW5lci5pZClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmICghcGxhY2Vob2xkZXJDb250YWluZXIuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJDb250YWluZXIuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJDb250YWluZXIuY2hpbGRyZW4ucHVzaCh7IC4uLnRoaXMuZHJhZ01vZGVsIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyQ29udGFpbmVyLmNoaWxkcmVuLnNwbGljZShcbiAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIucGFyZW50RWxlbWVudC5jaGlsZHJlbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGFjZWhvbGRlclxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IC4uLnRoaXMuZHJhZ01vZGVsIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSB0aGlzLl9kcmFnSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlZEVsZW1lbnRQb3NpdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWNoYW5nZWRFbGVtZW50UG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlZEVsZW1lbnRQb3NpdGlvbiA9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlckNvbnRhaW5lclsnJCRpZCddICE9PSB0aGlzLl9wYXJlbnREcmFnSWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9wbGFjZWhvbGRlci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuX3BsYWNlaG9sZGVyKTtcbiAgICAgICAgICAgIHRoaXMuZHJhZ0VsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5kcmFnRWwpO1xuICAgICAgICAgICAgdGhpcy5kcmFnRWwucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG5cbiAgICAgICAgICAgIHRoaXMubGlzdENoYW5nZS5lbWl0KHRoaXMubGlzdCk7XG4gICAgICAgICAgICB0aGlzLmRyb3AuZW1pdCh7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb246IHBsYWNlaG9sZGVyQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgIGl0ZW06IHRoaXMuZHJhZ01vZGVsLFxuICAgICAgICAgICAgICAgIGNoYW5nZWRFbGVtZW50UG9zaXRpb25cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5yZWYucmVhdHRhY2goKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkcmFnTW92ZShldmVudCkge1xuICAgICAgICBpZiAodGhpcy5kcmFnRWwpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQgPSBldmVudC5vcmlnaW5hbEV2ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fbW92ZShldmVudC50eXBlLmluZGV4T2YoJ21vdXNlJykgPT09IDAgPyBldmVudCA6IGV2ZW50LnRvdWNoZXNbMF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGV4cGFuZEFsbCgpIHtcbiAgICAgICAgaGVscGVyLl90cmF2ZXJzZUNoaWxkcmVuKHRoaXMuX2xpc3QsIGl0ZW0gPT4ge1xuICAgICAgICAgICAgaXRlbVsnJCRleHBhbmRlZCddID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb2xsYXBzZUFsbCgpIHtcbiAgICAgICAgaGVscGVyLl90cmF2ZXJzZUNoaWxkcmVuKHRoaXMuX2xpc3QsIGl0ZW0gPT4ge1xuICAgICAgICAgICAgaXRlbVsnJCRleHBhbmRlZCddID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG59XG4iXX0=