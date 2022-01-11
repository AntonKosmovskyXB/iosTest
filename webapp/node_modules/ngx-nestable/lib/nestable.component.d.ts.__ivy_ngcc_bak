import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
export declare class NestableComponent implements OnInit, OnDestroy {
    private ref;
    private renderer;
    private el;
    private zone;
    listChange: EventEmitter<any>;
    drop: EventEmitter<any>;
    drag: EventEmitter<any>;
    disclosure: EventEmitter<any>;
    template: ViewContainerRef;
    options: import("./nestable.models").NestableSettings;
    disableDrag: boolean;
    list: any[];
    dragRootEl: any;
    dragEl: any;
    dragModel: any;
    moving: boolean;
    /**
     * Dragged element contains children, and those children contain other children and so on...
     * This property gives you the number of generations contained within the dragging item.
     */
    dragDepth: number;
    /**
     * The depth of dragging item relative to element root (ngx-nestable)
     */
    relativeDepth: number;
    hasNewRoot: boolean;
    pointEl: any;
    items: any[];
    private _componentActive;
    private _mouse;
    private _list;
    private _cancelMousemove;
    private _cancelMouseup;
    private _placeholder;
    private _itemId;
    private _registerHandleDirective;
    private _dragIndex;
    private _parentDragId;
    private _oldListLength;
    constructor(ref: ChangeDetectorRef, renderer: Renderer2, el: ElementRef, zone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private _generateItemIds;
    private _generateItemExpanded;
    private _createHandleListener;
    private _createDragClone;
    private _createPlaceholder;
    /**
     * Sets depth proerties (relative and drag)
     */
    private _calculateDepth;
    private _mouseStart;
    private _mouseUpdate;
    private _showMasks;
    private _hideMasks;
    /**
     * calc mouse traverse distance on axis
     * @param m - mouse
     */
    private _calcMouseDistance;
    private _move;
    reset(): void;
    dragStartFromItem(event: any, item: any, parentList: any): void;
    private dragStart;
    dragStop(event: any): void;
    dragMove(event: any): void;
    expandAll(): void;
    collapseAll(): void;
}
