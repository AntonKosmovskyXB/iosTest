/**
 * @fileoverview added by tsickle
 * Generated from: tree-select.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __extends, __metadata, __read, __spread } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BACKSPACE } from '@angular/cdk/keycodes';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, ContentChild, ElementRef, EventEmitter, forwardRef, Host, Injector, Input, Optional, Output, Renderer2, Self, TemplateRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { slideMotion, zoomMotion } from 'ng-zorro-antd/core/animation';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { NzTreeBase, NzTreeHigherOrderServiceToken } from 'ng-zorro-antd/core/tree';
import { InputBoolean, isNotNil } from 'ng-zorro-antd/core/util';
import { NzSelectSearchComponent } from 'ng-zorro-antd/select';
import { NzTreeComponent } from 'ng-zorro-antd/tree';
import { merge, of as observableOf } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { NzTreeSelectService } from './tree-select.service';
/**
 * @param {?} injector
 * @return {?}
 */
export function higherOrderServiceFactory(injector) {
    return injector.get(NzTreeSelectService);
}
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'treeSelect';
/** @type {?} */
var TREE_SELECT_DEFAULT_CLASS = 'ant-select-dropdown ant-select-tree-dropdown';
var NzTreeSelectComponent = /** @class */ (function (_super) {
    __extends(NzTreeSelectComponent, _super);
    function NzTreeSelectComponent(nzTreeService, nzConfigService, renderer, cdr, elementRef, noAnimation) {
        var _this = _super.call(this, nzTreeService) || this;
        _this.nzConfigService = nzConfigService;
        _this.renderer = renderer;
        _this.cdr = cdr;
        _this.elementRef = elementRef;
        _this.noAnimation = noAnimation;
        _this.nzAllowClear = true;
        _this.nzShowExpand = true;
        _this.nzShowLine = false;
        _this.nzDropdownMatchSelectWidth = true;
        _this.nzCheckable = false;
        _this.nzHideUnMatched = false;
        _this.nzShowIcon = false;
        _this.nzShowSearch = false;
        _this.nzDisabled = false;
        _this.nzAsyncData = false;
        _this.nzMultiple = false;
        _this.nzDefaultExpandAll = false;
        _this.nzCheckStrictly = false;
        _this.nzNodes = [];
        _this.nzOpen = false;
        _this.nzSize = 'default';
        _this.nzPlaceHolder = '';
        _this.nzDropdownStyle = null;
        _this.nzDisplayWith = (/**
         * @param {?} node
         * @return {?}
         */
        function (node) { return node.title; });
        _this.nzMaxTagPlaceholder = null;
        _this.nzOpenChange = new EventEmitter();
        _this.nzCleared = new EventEmitter();
        _this.nzRemoved = new EventEmitter();
        _this.nzExpandChange = new EventEmitter();
        _this.nzTreeClick = new EventEmitter();
        _this.nzTreeCheckBoxChange = new EventEmitter();
        _this.dropdownClassName = TREE_SELECT_DEFAULT_CLASS;
        _this.isComposing = false;
        _this.isDestroy = true;
        _this.isNotFound = false;
        _this.inputValue = '';
        _this.dropDownPosition = 'bottom';
        _this.selectedNodes = [];
        _this.expandedKeys = [];
        _this.value = [];
        _this.onChange = (/**
         * @param {?} _value
         * @return {?}
         */
        function (_value) { });
        _this.onTouched = (/**
         * @return {?}
         */
        function () { });
        _this.renderer.addClass(_this.elementRef.nativeElement, 'ant-select');
        _this.renderer.addClass(_this.elementRef.nativeElement, 'ant-tree-select');
        return _this;
    }
    Object.defineProperty(NzTreeSelectComponent.prototype, "nzExpandedKeys", {
        get: /**
         * @return {?}
         */
        function () {
            return this.expandedKeys;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.expandedKeys = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeSelectComponent.prototype, "treeTemplate", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzTreeTemplate || this.nzTreeTemplateChild;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeSelectComponent.prototype, "placeHolderDisplay", {
        get: /**
         * @return {?}
         */
        function () {
            return this.inputValue || this.isComposing || this.selectedNodes.length ? 'none' : 'block';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeSelectComponent.prototype, "isMultiple", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzMultiple || this.nzCheckable;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.isDestroy = false;
        this.selectionChangeSubscription = this.subscribeSelectionChange();
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.isDestroy = true;
        this.closeDropDown();
        this.selectionChangeSubscription.unsubscribe();
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzTreeSelectComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.closeDropDown();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTreeSelectComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzNodes = changes.nzNodes, nzDropdownClassName = changes.nzDropdownClassName;
        if (nzNodes) {
            this.updateSelectedNodes(true);
        }
        if (nzDropdownClassName) {
            /** @type {?} */
            var className = this.nzDropdownClassName && this.nzDropdownClassName.trim();
            this.dropdownClassName = className ? TREE_SELECT_DEFAULT_CLASS + " " + className : TREE_SELECT_DEFAULT_CLASS;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTreeSelectComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (isNotNil(value)) {
            if (this.isMultiple && Array.isArray(value)) {
                this.value = value;
            }
            else {
                this.value = [(/** @type {?} */ (value))];
            }
            this.updateSelectedNodes(true);
        }
        else {
            this.value = [];
            this.selectedNodes.forEach((/**
             * @param {?} node
             * @return {?}
             */
            function (node) {
                _this.removeSelected(node, false);
            }));
            this.selectedNodes = [];
        }
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTreeSelectComponent.prototype.registerOnChange = /**
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
    NzTreeSelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.trigger = /**
     * @return {?}
     */
    function () {
        if (this.nzDisabled || (!this.nzDisabled && this.nzOpen)) {
            this.closeDropDown();
        }
        else {
            this.openDropdown();
            if (this.nzShowSearch || this.isMultiple) {
                this.focusOnInput();
            }
        }
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.openDropdown = /**
     * @return {?}
     */
    function () {
        if (!this.nzDisabled) {
            this.nzOpen = true;
            this.nzOpenChange.emit(this.nzOpen);
            this.updateCdkConnectedOverlayStatus();
        }
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.closeDropDown = /**
     * @return {?}
     */
    function () {
        this.onTouched();
        this.nzOpen = false;
        this.inputValue = '';
        this.nzOpenChange.emit(this.nzOpen);
        this.cdr.markForCheck();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTreeSelectComponent.prototype.onKeyDownInput = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var keyCode = e.keyCode;
        /** @type {?} */
        var eventTarget = (/** @type {?} */ (e.target));
        if (this.isMultiple && !eventTarget.value && keyCode === BACKSPACE) {
            e.preventDefault();
            if (this.selectedNodes.length) {
                /** @type {?} */
                var removeNode = this.selectedNodes[this.selectedNodes.length - 1];
                this.removeSelected(removeNode);
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTreeSelectComponent.prototype.onExpandedKeysChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.nzExpandChange.emit(value);
        this.expandedKeys = __spread((/** @type {?} */ (value.keys)));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTreeSelectComponent.prototype.setInputValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.inputValue = value;
        this.updatePosition();
    };
    /**
     * @param {?} node
     * @param {?=} emit
     * @return {?}
     */
    NzTreeSelectComponent.prototype.removeSelected = /**
     * @param {?} node
     * @param {?=} emit
     * @return {?}
     */
    function (node, emit) {
        if (emit === void 0) { emit = true; }
        node.isSelected = false;
        node.isChecked = false;
        if (this.nzCheckable) {
            this.nzTreeService.conduct(node, this.nzCheckStrictly);
        }
        else {
            this.nzTreeService.setSelectedNodeList(node, this.nzMultiple);
        }
        if (emit) {
            this.nzRemoved.emit(node);
        }
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.focusOnInput = /**
     * @return {?}
     */
    function () {
        if (this.nzSelectSearchComponent) {
            this.nzSelectSearchComponent.focus();
        }
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.subscribeSelectionChange = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return merge(this.nzTreeClick.pipe(tap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var node = (/** @type {?} */ (event.node));
            if (_this.nzCheckable && !node.isDisabled && !node.isDisableCheckbox) {
                node.isChecked = !node.isChecked;
                node.isHalfChecked = false;
                if (!_this.nzCheckStrictly) {
                    _this.nzTreeService.conduct(node);
                }
            }
            if (_this.nzCheckable) {
                node.isSelected = false;
            }
        })), filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var node = (/** @type {?} */ (event.node));
            return _this.nzCheckable ? !node.isDisabled && !node.isDisableCheckbox : !node.isDisabled && node.isSelectable;
        }))), this.nzCheckable ? this.nzTreeCheckBoxChange : observableOf(), this.nzCleared, this.nzRemoved).subscribe((/**
         * @return {?}
         */
        function () {
            _this.updateSelectedNodes();
            /** @type {?} */
            var value = _this.selectedNodes.map((/**
             * @param {?} node
             * @return {?}
             */
            function (node) { return (/** @type {?} */ (node.key)); }));
            _this.value = __spread(value);
            if (_this.nzShowSearch || _this.isMultiple) {
                _this.inputValue = '';
                _this.isNotFound = false;
            }
            if (_this.isMultiple) {
                _this.onChange(value);
                _this.focusOnInput();
                _this.updatePosition();
            }
            else {
                _this.closeDropDown();
                _this.onChange(value.length ? value[0] : null);
            }
        }));
    };
    /**
     * @param {?=} init
     * @return {?}
     */
    NzTreeSelectComponent.prototype.updateSelectedNodes = /**
     * @param {?=} init
     * @return {?}
     */
    function (init) {
        if (init === void 0) { init = false; }
        if (init) {
            /** @type {?} */
            var nodes = this.coerceTreeNodes(this.nzNodes);
            this.nzTreeService.isMultiple = this.isMultiple;
            this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
            this.nzTreeService.initTree(nodes);
            if (this.nzCheckable) {
                this.nzTreeService.conductCheck(this.value, this.nzCheckStrictly);
            }
            else {
                this.nzTreeService.conductSelectedKeys(this.value, this.isMultiple);
            }
        }
        this.selectedNodes = __spread((this.nzCheckable ? this.getCheckedNodeList() : this.getSelectedNodeList()));
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.updatePosition = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.cdkConnectedOverlay && _this.cdkConnectedOverlay.overlayRef) {
                _this.cdkConnectedOverlay.overlayRef.updatePosition();
            }
        }));
    };
    /**
     * @param {?} position
     * @return {?}
     */
    NzTreeSelectComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.dropDownPosition = position.connectionPair.originY;
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.onClearSelection = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.selectedNodes.forEach((/**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            _this.removeSelected(node, false);
        }));
        this.nzCleared.emit();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NzTreeSelectComponent.prototype.setSearchValues = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        Promise.resolve().then((/**
         * @return {?}
         */
        function () {
            _this.isNotFound = (_this.nzShowSearch || _this.isMultiple) && !!_this.inputValue && (/** @type {?} */ ($event.matchedKeys)).length === 0;
        }));
    };
    /**
     * @return {?}
     */
    NzTreeSelectComponent.prototype.updateCdkConnectedOverlayStatus = /**
     * @return {?}
     */
    function () {
        this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
    };
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    NzTreeSelectComponent.prototype.trackValue = /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    function (_index, option) {
        return (/** @type {?} */ (option.key));
    };
    NzTreeSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-tree-select',
                    exportAs: 'nzTreeSelect',
                    animations: [slideMotion, zoomMotion],
                    template: "\n    <ng-template\n      cdkConnectedOverlay\n      nzConnectedOverlay\n      [cdkConnectedOverlayOrigin]=\"cdkOverlayOrigin\"\n      [cdkConnectedOverlayOpen]=\"nzOpen\"\n      [cdkConnectedOverlayHasBackdrop]=\"true\"\n      [cdkConnectedOverlayTransformOriginOn]=\"'.ant-select-tree-dropdown'\"\n      [cdkConnectedOverlayMinWidth]=\"$any(nzDropdownMatchSelectWidth ? null : triggerWidth)\"\n      [cdkConnectedOverlayWidth]=\"$any(nzDropdownMatchSelectWidth ? triggerWidth : null)\"\n      (backdropClick)=\"closeDropDown()\"\n      (detach)=\"closeDropDown()\"\n      (positionChange)=\"onPositionChange($event)\"\n    >\n      <div\n        [@slideMotion]=\"'enter'\"\n        [ngClass]=\"dropdownClassName\"\n        [@.disabled]=\"noAnimation?.nzNoAnimation\"\n        [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n        [class.ant-select-dropdown-placement-bottomLeft]=\"dropDownPosition === 'bottom'\"\n        [class.ant-select-dropdown-placement-topLeft]=\"dropDownPosition === 'top'\"\n        [ngStyle]=\"nzDropdownStyle\"\n      >\n        <nz-tree\n          #treeRef\n          [hidden]=\"isNotFound\"\n          nzNoAnimation\n          nzSelectMode\n          [nzData]=\"nzNodes\"\n          [nzMultiple]=\"nzMultiple\"\n          [nzSearchValue]=\"inputValue\"\n          [nzHideUnMatched]=\"nzHideUnMatched\"\n          [nzShowIcon]=\"nzShowIcon\"\n          [nzCheckable]=\"nzCheckable\"\n          [nzAsyncData]=\"nzAsyncData\"\n          [nzShowExpand]=\"nzShowExpand\"\n          [nzShowLine]=\"nzShowLine\"\n          [nzExpandedIcon]=\"nzExpandedIcon\"\n          [nzExpandAll]=\"nzDefaultExpandAll\"\n          [nzExpandedKeys]=\"expandedKeys\"\n          [nzCheckedKeys]=\"nzCheckable ? value : []\"\n          [nzSelectedKeys]=\"!nzCheckable ? value : []\"\n          [nzTreeTemplate]=\"treeTemplate\"\n          [nzCheckStrictly]=\"nzCheckStrictly\"\n          (nzExpandChange)=\"onExpandedKeysChange($event)\"\n          (nzClick)=\"nzTreeClick.emit($event)\"\n          (nzCheckedKeysChange)=\"updateSelectedNodes()\"\n          (nzSelectedKeysChange)=\"updateSelectedNodes()\"\n          (nzCheckBoxChange)=\"nzTreeCheckBoxChange.emit($event)\"\n          (nzSearchValueChange)=\"setSearchValues($event)\"\n        >\n        </nz-tree>\n        <span *ngIf=\"nzNodes.length === 0 || isNotFound\" class=\"ant-select-not-found\">\n          <nz-embed-empty [nzComponentName]=\"'tree-select'\" [specificContent]=\"nzNotFoundContent\"></nz-embed-empty>\n        </span>\n      </div>\n    </ng-template>\n\n    <div cdkOverlayOrigin class=\"ant-select-selector\">\n      <ng-container *ngIf=\"isMultiple\">\n        <nz-select-item\n          *ngFor=\"let node of selectedNodes | slice: 0:nzMaxTagCount; trackBy: trackValue\"\n          [@zoomMotion]\n          [@.disabled]=\"noAnimation?.nzNoAnimation\"\n          [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n          [deletable]=\"true\"\n          [disabled]=\"node.isDisabled || nzDisabled\"\n          [label]=\"nzDisplayWith(node)\"\n          (@zoomMotion.done)=\"updatePosition()\"\n          (delete)=\"removeSelected(node, true)\"\n        ></nz-select-item>\n\n        <nz-select-item\n          *ngIf=\"selectedNodes.length > nzMaxTagCount\"\n          [@zoomMotion]\n          (@zoomMotion.done)=\"updatePosition()\"\n          [@.disabled]=\"noAnimation?.nzNoAnimation\"\n          [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n          [contentTemplateOutlet]=\"nzMaxTagPlaceholder\"\n          [contentTemplateOutletContext]=\"selectedNodes | slice: nzMaxTagCount\"\n          [deletable]=\"false\"\n          [disabled]=\"false\"\n          [label]=\"'+ ' + (selectedNodes.length - nzMaxTagCount) + ' ...'\"\n        ></nz-select-item>\n      </ng-container>\n\n      <nz-select-search\n        *ngIf=\"nzShowSearch\"\n        (keydown)=\"onKeyDownInput($event)\"\n        (isComposingChange)=\"isComposing = $event\"\n        (valueChange)=\"setInputValue($event)\"\n        [value]=\"inputValue\"\n        [mirrorSync]=\"isMultiple\"\n        [disabled]=\"nzDisabled\"\n        [showInput]=\"nzOpen\"\n      >\n      </nz-select-search>\n\n      <nz-select-placeholder\n        *ngIf=\"nzPlaceHolder && selectedNodes.length === 0\"\n        [placeholder]=\"nzPlaceHolder\"\n        [style.display]=\"placeHolderDisplay\"\n      >\n      </nz-select-placeholder>\n\n      <nz-select-item\n        *ngIf=\"!isMultiple && selectedNodes.length === 1\"\n        [deletable]=\"false\"\n        [disabled]=\"false\"\n        [label]=\"nzDisplayWith(selectedNodes[0])\"\n      ></nz-select-item>\n\n      <nz-select-arrow *ngIf=\"!isMultiple\"></nz-select-arrow>\n\n      <nz-select-clear *ngIf=\"nzAllowClear\" (clear)=\"onClearSelection()\"></nz-select-clear>\n    </div>\n  ",
                    providers: [
                        NzTreeSelectService,
                        {
                            provide: NzTreeHigherOrderServiceToken,
                            useFactory: higherOrderServiceFactory,
                            deps: [[new Self(), Injector]]
                        },
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzTreeSelectComponent; })),
                            multi: true
                        }
                    ],
                    host: {
                        '[class.ant-select-lg]': 'nzSize==="large"',
                        '[class.ant-select-sm]': 'nzSize==="small"',
                        '[class.ant-select-enabled]': '!nzDisabled',
                        '[class.ant-select-disabled]': 'nzDisabled',
                        '[class.ant-select-single]': '!isMultiple',
                        '[class.ant-select-show-arrow]': '!isMultiple',
                        '[class.ant-select-show-search]': '!isMultiple',
                        '[class.ant-select-multiple]': 'isMultiple',
                        '[class.ant-select-allow-clear]': 'nzAllowClear',
                        '[class.ant-select-open]': 'nzOpen',
                        '(click)': 'trigger()'
                    }
                }] }
    ];
    /** @nocollapse */
    NzTreeSelectComponent.ctorParameters = function () { return [
        { type: NzTreeSelectService },
        { type: NzConfigService },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzTreeSelectComponent.propDecorators = {
        nzAllowClear: [{ type: Input }],
        nzShowExpand: [{ type: Input }],
        nzShowLine: [{ type: Input }],
        nzDropdownMatchSelectWidth: [{ type: Input }],
        nzCheckable: [{ type: Input }],
        nzHideUnMatched: [{ type: Input }],
        nzShowIcon: [{ type: Input }],
        nzShowSearch: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzAsyncData: [{ type: Input }],
        nzMultiple: [{ type: Input }],
        nzDefaultExpandAll: [{ type: Input }],
        nzCheckStrictly: [{ type: Input }],
        nzExpandedIcon: [{ type: Input }],
        nzNotFoundContent: [{ type: Input }],
        nzNodes: [{ type: Input }],
        nzOpen: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        nzDropdownStyle: [{ type: Input }],
        nzDropdownClassName: [{ type: Input }],
        nzExpandedKeys: [{ type: Input }],
        nzDisplayWith: [{ type: Input }],
        nzMaxTagCount: [{ type: Input }],
        nzMaxTagPlaceholder: [{ type: Input }],
        nzOpenChange: [{ type: Output }],
        nzCleared: [{ type: Output }],
        nzRemoved: [{ type: Output }],
        nzExpandChange: [{ type: Output }],
        nzTreeClick: [{ type: Output }],
        nzTreeCheckBoxChange: [{ type: Output }],
        nzSelectSearchComponent: [{ type: ViewChild, args: [NzSelectSearchComponent, { static: false },] }],
        treeRef: [{ type: ViewChild, args: ['treeRef', { static: false },] }],
        cdkOverlayOrigin: [{ type: ViewChild, args: [CdkOverlayOrigin, { static: true },] }],
        cdkConnectedOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay, { static: false },] }],
        nzTreeTemplate: [{ type: Input }],
        nzTreeTemplateChild: [{ type: ContentChild, args: ['nzTreeTemplate', { static: true },] }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTreeSelectComponent.prototype, "nzAllowClear", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTreeSelectComponent.prototype, "nzShowExpand", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTreeSelectComponent.prototype, "nzShowLine", void 0);
    __decorate([
        InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", Boolean)
    ], NzTreeSelectComponent.prototype, "nzDropdownMatchSelectWidth", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTreeSelectComponent.prototype, "nzCheckable", void 0);
    __decorate([
        InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", Boolean)
    ], NzTreeSelectComponent.prototype, "nzHideUnMatched", void 0);
    __decorate([
        InputBoolean(), WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", Boolean)
    ], NzTreeSelectComponent.prototype, "nzShowIcon", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzTreeSelectComponent.prototype, "nzShowSearch", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeSelectComponent.prototype, "nzDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeSelectComponent.prototype, "nzAsyncData", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeSelectComponent.prototype, "nzMultiple", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeSelectComponent.prototype, "nzDefaultExpandAll", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTreeSelectComponent.prototype, "nzCheckStrictly", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", String)
    ], NzTreeSelectComponent.prototype, "nzSize", void 0);
    return NzTreeSelectComponent;
}(NzTreeBase));
export { NzTreeSelectComponent };
if (false) {
    /** @type {?} */
    NzTreeSelectComponent.ngAcceptInputType_nzAllowClear;
    /** @type {?} */
    NzTreeSelectComponent.ngAcceptInputType_nzShowExpand;
    /** @type {?} */
    NzTreeSelectComponent.ngAcceptInputType_nzShowLine;
    /** @type {?} */
    NzTreeSelectComponent.ngAcceptInputType_nzDropdownMatchSelectWidth;
    /** @type {?} */
    NzTreeSelectComponent.ngAcceptInputType_nzCheckable;
    /** @type {?} */
    NzTreeSelectComponent.ngAcceptInputType_nzHideUnMatched;
    /** @type {?} */
    NzTreeSelectComponent.ngAcceptInputType_nzShowIcon;
    /** @type {?} */
    NzTreeSelectComponent.ngAcceptInputType_nzShowSearch;
    /** @type {?} */
    NzTreeSelectComponent.ngAcceptInputType_nzDisabled;
    /** @type {?} */
    NzTreeSelectComponent.ngAcceptInputType_nzAsyncData;
    /** @type {?} */
    NzTreeSelectComponent.ngAcceptInputType_nzMultiple;
    /** @type {?} */
    NzTreeSelectComponent.ngAcceptInputType_nzDefaultExpandAll;
    /** @type {?} */
    NzTreeSelectComponent.ngAcceptInputType_nzCheckStrictly;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzAllowClear;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzShowExpand;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzShowLine;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDropdownMatchSelectWidth;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzCheckable;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzHideUnMatched;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzShowIcon;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzShowSearch;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDisabled;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzAsyncData;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzMultiple;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDefaultExpandAll;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzCheckStrictly;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzExpandedIcon;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzNodes;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzOpen;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzSize;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDropdownStyle;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDropdownClassName;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDisplayWith;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzMaxTagCount;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzMaxTagPlaceholder;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzOpenChange;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzCleared;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzRemoved;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzExpandChange;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzTreeClick;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzTreeCheckBoxChange;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzSelectSearchComponent;
    /** @type {?} */
    NzTreeSelectComponent.prototype.treeRef;
    /** @type {?} */
    NzTreeSelectComponent.prototype.cdkOverlayOrigin;
    /** @type {?} */
    NzTreeSelectComponent.prototype.cdkConnectedOverlay;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzTreeTemplate;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzTreeTemplateChild;
    /** @type {?} */
    NzTreeSelectComponent.prototype.dropdownClassName;
    /** @type {?} */
    NzTreeSelectComponent.prototype.triggerWidth;
    /** @type {?} */
    NzTreeSelectComponent.prototype.isComposing;
    /** @type {?} */
    NzTreeSelectComponent.prototype.isDestroy;
    /** @type {?} */
    NzTreeSelectComponent.prototype.isNotFound;
    /** @type {?} */
    NzTreeSelectComponent.prototype.inputValue;
    /** @type {?} */
    NzTreeSelectComponent.prototype.dropDownPosition;
    /** @type {?} */
    NzTreeSelectComponent.prototype.selectionChangeSubscription;
    /** @type {?} */
    NzTreeSelectComponent.prototype.selectedNodes;
    /** @type {?} */
    NzTreeSelectComponent.prototype.expandedKeys;
    /** @type {?} */
    NzTreeSelectComponent.prototype.value;
    /** @type {?} */
    NzTreeSelectComponent.prototype.onChange;
    /** @type {?} */
    NzTreeSelectComponent.prototype.onTouched;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzTreeSelectComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTreeSelectComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTreeSelectComponent.prototype.elementRef;
    /** @type {?} */
    NzTreeSelectComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90cmVlLXNlbGVjdC8iLCJzb3VyY2VzIjpbInRyZWUtc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBa0MsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RyxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsSUFBSSxFQUNKLFFBQVEsRUFDUixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsSUFBSSxFQUVKLFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUV6RSxPQUFPLEVBRUwsVUFBVSxFQUVWLDZCQUE2QixFQUc5QixNQUFNLHlCQUF5QixDQUFDO0FBRWpDLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDakUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJELE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFFNUQsTUFBTSxVQUFVLHlCQUF5QixDQUFDLFFBQWtCO0lBQzFELE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQzNDLENBQUM7O0lBRUssd0JBQXdCLEdBQUcsWUFBWTs7SUFDdkMseUJBQXlCLEdBQUcsOENBQThDO0FBRWhGO0lBb0oyQyx5Q0FBVTtJQXdGbkQsK0JBQ0UsYUFBa0MsRUFDM0IsZUFBZ0MsRUFDL0IsUUFBbUIsRUFDbkIsR0FBc0IsRUFDdEIsVUFBc0IsRUFDSCxXQUFvQztRQU5qRSxZQVFFLGtCQUFNLGFBQWEsQ0FBQyxTQUdyQjtRQVRRLHFCQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvQixjQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFNBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ0gsaUJBQVcsR0FBWCxXQUFXLENBQXlCO1FBL0V4QyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUNVLGdDQUEwQixHQUFZLElBQUksQ0FBQztRQUNqRixpQkFBVyxHQUFZLEtBQUssQ0FBQztRQUNTLHFCQUFlLEdBQVksS0FBSyxDQUFDO1FBQ2pDLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBQ2xFLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGlCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLHdCQUFrQixHQUFHLEtBQUssQ0FBQztRQUMzQixxQkFBZSxHQUFHLEtBQUssQ0FBQztRQUd4QyxhQUFPLEdBQTBDLEVBQUUsQ0FBQztRQUNwRCxZQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3VCLFlBQU0sR0FBa0IsU0FBUyxDQUFDO1FBQ3hFLG1CQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLHFCQUFlLEdBQTRCLElBQUksQ0FBQztRQVVoRCxtQkFBYTs7OztRQUE2QyxVQUFDLElBQWdCLElBQUssT0FBQSxJQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsRUFBQztRQUUzRix5QkFBbUIsR0FBb0QsSUFBSSxDQUFDO1FBQ2xFLGtCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUMzQyxlQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNyQyxlQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUMzQyxvQkFBYyxHQUFHLElBQUksWUFBWSxFQUFxQixDQUFDO1FBQ3ZELGlCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFDcEQsMEJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFhaEYsdUJBQWlCLEdBQUcseUJBQXlCLENBQUM7UUFFOUMsaUJBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixnQkFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixnQkFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixzQkFBZ0IsR0FBZ0MsUUFBUSxDQUFDO1FBRXpELG1CQUFhLEdBQWlCLEVBQUUsQ0FBQztRQUNqQyxrQkFBWSxHQUFhLEVBQUUsQ0FBQztRQUM1QixXQUFLLEdBQWEsRUFBRSxDQUFDO1FBRXJCLGNBQVE7Ozs7UUFBaUIsVUFBQSxNQUFNLElBQUssQ0FBQyxFQUFDO1FBQ3RDLGVBQVM7OztRQUFrQixjQUFPLENBQUMsRUFBQztRQW1CbEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDcEUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsQ0FBQzs7SUFDM0UsQ0FBQztJQS9ERCxzQkFDSSxpREFBYzs7OztRQUdsQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDOzs7OztRQU5ELFVBQ21CLEtBQWU7WUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFzQkQsc0JBQUksK0NBQVk7Ozs7UUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQ3pELENBQUM7OztPQUFBO0lBaUJELHNCQUFJLHFEQUFrQjs7OztRQUF0QjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUM3RixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDZDQUFVOzs7O1FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM3QyxDQUFDOzs7T0FBQTs7OztJQWVELHdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQywyQkFBMkIsR0FBRyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNyRSxDQUFDOzs7O0lBRUQsMkNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUVELGdEQUFnQjs7OztJQUFoQixVQUFpQixVQUFtQjtRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCwyQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDeEIsSUFBQSx5QkFBTyxFQUFFLGlEQUFtQjtRQUNwQyxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQztRQUNELElBQUksbUJBQW1CLEVBQUU7O2dCQUNqQixTQUFTLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUU7WUFDN0UsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUkseUJBQXlCLFNBQUksU0FBVyxDQUFDLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQztTQUM5RztJQUNILENBQUM7Ozs7O0lBRUQsMENBQVU7Ozs7SUFBVixVQUFXLEtBQXdCO1FBQW5DLGlCQWdCQztRQWZDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25CLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUNwQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsbUJBQUEsS0FBSyxFQUFVLENBQUMsQ0FBQzthQUNoQztZQUNELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQzthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxJQUFJO2dCQUM3QixLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNuQyxDQUFDLEVBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELGdEQUFnQjs7OztJQUFoQixVQUFpQixFQUF5QztRQUN4RCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELGlEQUFpQjs7OztJQUFqQixVQUFrQixFQUFjO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCx1Q0FBTzs7O0lBQVA7UUFDRSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3hELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUN4QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDckI7U0FDRjtJQUNILENBQUM7Ozs7SUFFRCw0Q0FBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLCtCQUErQixFQUFFLENBQUM7U0FDeEM7SUFDSCxDQUFDOzs7O0lBRUQsNkNBQWE7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsOENBQWM7Ozs7SUFBZCxVQUFlLENBQWdCOztZQUN2QixPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU87O1lBQ25CLFdBQVcsR0FBRyxtQkFBQSxDQUFDLENBQUMsTUFBTSxFQUFvQjtRQUNoRCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxJQUFJLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDbEUsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25CLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7O29CQUN2QixVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ3BFLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDakM7U0FDRjtJQUNILENBQUM7Ozs7O0lBRUQsb0RBQW9COzs7O0lBQXBCLFVBQXFCLEtBQXdCO1FBQzNDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLFlBQU8sbUJBQUEsS0FBSyxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFRCw2Q0FBYTs7OztJQUFiLFVBQWMsS0FBYTtRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7O0lBRUQsOENBQWM7Ozs7O0lBQWQsVUFBZSxJQUFnQixFQUFFLElBQW9CO1FBQXBCLHFCQUFBLEVBQUEsV0FBb0I7UUFDbkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDeEQ7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMvRDtRQUVELElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7O0lBRUQsNENBQVk7OztJQUFaO1FBQ0UsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDaEMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQzs7OztJQUVELHdEQUF3Qjs7O0lBQXhCO1FBQUEsaUJBeUNDO1FBeENDLE9BQU8sS0FBSyxDQUNWLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUNuQixHQUFHOzs7O1FBQUMsVUFBQyxLQUF3Qjs7Z0JBQ3JCLElBQUksR0FBRyxtQkFBQSxLQUFLLENBQUMsSUFBSSxFQUFDO1lBQ3hCLElBQUksS0FBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ25FLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztnQkFDM0IsSUFBSSxDQUFDLEtBQUksQ0FBQyxlQUFlLEVBQUU7b0JBQ3pCLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNsQzthQUNGO1lBQ0QsSUFBSSxLQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzthQUN6QjtRQUNILENBQUMsRUFBQyxFQUNGLE1BQU07Ozs7UUFBQyxVQUFDLEtBQXdCOztnQkFDeEIsSUFBSSxHQUFHLG1CQUFBLEtBQUssQ0FBQyxJQUFJLEVBQUM7WUFDeEIsT0FBTyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ2hILENBQUMsRUFBQyxDQUNILEVBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFDN0QsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsU0FBUyxDQUNmLENBQUMsU0FBUzs7O1FBQUM7WUFDVixLQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzs7Z0JBQ3JCLEtBQUssR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFBLElBQUksV0FBSSxtQkFBQSxJQUFJLENBQUMsR0FBRyxFQUFDLEdBQUEsRUFBQztZQUN2RCxLQUFJLENBQUMsS0FBSyxZQUFPLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLElBQUksS0FBSSxDQUFDLFlBQVksSUFBSSxLQUFJLENBQUMsVUFBVSxFQUFFO2dCQUN4QyxLQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztnQkFDckIsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7YUFDekI7WUFDRCxJQUFJLEtBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ25CLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDcEIsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3ZCO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDckIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQy9DO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELG1EQUFtQjs7OztJQUFuQixVQUFvQixJQUFxQjtRQUFyQixxQkFBQSxFQUFBLFlBQXFCO1FBQ3ZDLElBQUksSUFBSSxFQUFFOztnQkFDRixLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUMxRCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ25FO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDckU7U0FDRjtRQUVELElBQUksQ0FBQyxhQUFhLFlBQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hHLENBQUM7Ozs7SUFFRCw4Q0FBYzs7O0lBQWQ7UUFBQSxpQkFNQztRQUxDLFVBQVU7OztRQUFDO1lBQ1QsSUFBSSxLQUFJLENBQUMsbUJBQW1CLElBQUksS0FBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsRUFBRTtnQkFDbkUsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN0RDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxnREFBZ0I7Ozs7SUFBaEIsVUFBaUIsUUFBd0M7UUFDdkQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO0lBQzFELENBQUM7Ozs7SUFFRCxnREFBZ0I7OztJQUFoQjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxJQUFJO1lBQzdCLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25DLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELCtDQUFlOzs7O0lBQWYsVUFBZ0IsTUFBeUI7UUFBekMsaUJBSUM7UUFIQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSTs7O1FBQUM7WUFDckIsS0FBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEtBQUksQ0FBQyxZQUFZLElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFJLENBQUMsVUFBVSxJQUFJLG1CQUFBLE1BQU0sQ0FBQyxXQUFXLEVBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1FBQ3BILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELCtEQUErQjs7O0lBQS9CO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEtBQUssQ0FBQztJQUNuRyxDQUFDOzs7Ozs7SUFFRCwwQ0FBVTs7Ozs7SUFBVixVQUFXLE1BQWMsRUFBRSxNQUFrQjtRQUMzQyxPQUFPLG1CQUFBLE1BQU0sQ0FBQyxHQUFHLEVBQUMsQ0FBQztJQUNyQixDQUFDOztnQkE3Y0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxjQUFjO29CQUN4QixVQUFVLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDO29CQUNyQyxRQUFRLEVBQUUsaXJKQW9IVDtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsbUJBQW1CO3dCQUNuQjs0QkFDRSxPQUFPLEVBQUUsNkJBQTZCOzRCQUN0QyxVQUFVLEVBQUUseUJBQXlCOzRCQUNyQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7eUJBQy9CO3dCQUNEOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLHFCQUFxQixFQUFyQixDQUFxQixFQUFDOzRCQUNwRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osdUJBQXVCLEVBQUUsa0JBQWtCO3dCQUMzQyx1QkFBdUIsRUFBRSxrQkFBa0I7d0JBQzNDLDRCQUE0QixFQUFFLGFBQWE7d0JBQzNDLDZCQUE2QixFQUFFLFlBQVk7d0JBQzNDLDJCQUEyQixFQUFFLGFBQWE7d0JBQzFDLCtCQUErQixFQUFFLGFBQWE7d0JBQzlDLGdDQUFnQyxFQUFFLGFBQWE7d0JBQy9DLDZCQUE2QixFQUFFLFlBQVk7d0JBQzNDLGdDQUFnQyxFQUFFLGNBQWM7d0JBQ2hELHlCQUF5QixFQUFFLFFBQVE7d0JBQ25DLFNBQVMsRUFBRSxXQUFXO3FCQUN2QjtpQkFDRjs7OztnQkE1SlEsbUJBQW1CO2dCQW5CbkIsZUFBZTtnQkFSdEIsU0FBUztnQkFkVCxpQkFBaUI7Z0JBR2pCLFVBQVU7Z0JBb0JILHNCQUFzQix1QkE2UTFCLElBQUksWUFBSSxRQUFROzs7K0JBL0VsQixLQUFLOytCQUNMLEtBQUs7NkJBQ0wsS0FBSzs2Q0FDTCxLQUFLOzhCQUNMLEtBQUs7a0NBQ0wsS0FBSzs2QkFDTCxLQUFLOytCQUNMLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLOzZCQUNMLEtBQUs7cUNBQ0wsS0FBSztrQ0FDTCxLQUFLO2lDQUNMLEtBQUs7b0NBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSztnQ0FDTCxLQUFLO2tDQUNMLEtBQUs7c0NBQ0wsS0FBSztpQ0FDTCxLQUFLO2dDQVFMLEtBQUs7Z0NBQ0wsS0FBSztzQ0FDTCxLQUFLOytCQUNMLE1BQU07NEJBQ04sTUFBTTs0QkFDTixNQUFNO2lDQUNOLE1BQU07OEJBQ04sTUFBTTt1Q0FDTixNQUFNOzBDQUVOLFNBQVMsU0FBQyx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7MEJBQ3BELFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO21DQUN0QyxTQUFTLFNBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3NDQUM1QyxTQUFTLFNBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2lDQUVoRCxLQUFLO3NDQUNMLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0lBN0N2QjtRQUFmLFlBQVksRUFBRTs7K0RBQThCO0lBQzdCO1FBQWYsWUFBWSxFQUFFOzsrREFBOEI7SUFDN0I7UUFBZixZQUFZLEVBQUU7OzZEQUE2QjtJQUNVO1FBQXJELFlBQVksRUFBRSxFQUFFLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQzs7NkVBQTRDO0lBQ2pGO1FBQWYsWUFBWSxFQUFFOzs4REFBOEI7SUFDUztRQUFyRCxZQUFZLEVBQUUsRUFBRSxVQUFVLENBQUMsd0JBQXdCLENBQUM7O2tFQUFrQztJQUNqQztRQUFyRCxZQUFZLEVBQUUsRUFBRSxVQUFVLENBQUMsd0JBQXdCLENBQUM7OzZEQUE2QjtJQUNsRTtRQUFmLFlBQVksRUFBRTs7K0RBQStCO0lBQzlCO1FBQWYsWUFBWSxFQUFFOzs2REFBb0I7SUFDbkI7UUFBZixZQUFZLEVBQUU7OzhEQUFxQjtJQUNwQjtRQUFmLFlBQVksRUFBRTs7NkRBQW9CO0lBQ25CO1FBQWYsWUFBWSxFQUFFOztxRUFBNEI7SUFDM0I7UUFBZixZQUFZLEVBQUU7O2tFQUF5QjtJQUtGO1FBQXJDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQzs7eURBQW1DO0lBMFJuRiw0QkFBQztDQUFBLEFBOWNELENBb0oyQyxVQUFVLEdBMFRwRDtTQTFUWSxxQkFBcUI7OztJQUNoQyxxREFBb0Q7O0lBQ3BELHFEQUFvRDs7SUFDcEQsbURBQWtEOztJQUNsRCxtRUFBa0U7O0lBQ2xFLG9EQUFtRDs7SUFDbkQsd0RBQXVEOztJQUN2RCxtREFBa0Q7O0lBQ2xELHFEQUFvRDs7SUFDcEQsbURBQWtEOztJQUNsRCxvREFBbUQ7O0lBQ25ELG1EQUFrRDs7SUFDbEQsMkRBQTBEOztJQUMxRCx3REFBdUQ7O0lBRXZELDZDQUFzRDs7SUFDdEQsNkNBQXNEOztJQUN0RCwyQ0FBcUQ7O0lBQ3JELDJEQUEwRzs7SUFDMUcsNENBQXNEOztJQUN0RCxnREFBZ0c7O0lBQ2hHLDJDQUEyRjs7SUFDM0YsNkNBQXVEOztJQUN2RCwyQ0FBNEM7O0lBQzVDLDRDQUE2Qzs7SUFDN0MsMkNBQTRDOztJQUM1QyxtREFBb0Q7O0lBQ3BELGdEQUFpRDs7SUFDakQsK0NBQTRGOztJQUM1RixrREFBb0M7O0lBQ3BDLHdDQUE2RDs7SUFDN0QsdUNBQXdCOztJQUN4Qix1Q0FBaUY7O0lBQ2pGLDhDQUE0Qjs7SUFDNUIsZ0RBQXlEOztJQUN6RCxvREFBc0M7O0lBU3RDLDhDQUFvRzs7SUFDcEcsOENBQWdDOztJQUNoQyxvREFBcUY7O0lBQ3JGLDZDQUE4RDs7SUFDOUQsMENBQXdEOztJQUN4RCwwQ0FBOEQ7O0lBQzlELCtDQUEwRTs7SUFDMUUsNENBQXVFOztJQUN2RSxxREFBZ0Y7O0lBRWhGLHdEQUF5Rzs7SUFDekcsd0NBQW1FOztJQUNuRSxpREFBbUY7O0lBQ25GLG9EQUE2Rjs7SUFFN0YsK0NBQTRGOztJQUM1RixvREFBMEk7O0lBSzFJLGtEQUE4Qzs7SUFDOUMsNkNBQXNCOztJQUN0Qiw0Q0FBb0I7O0lBQ3BCLDBDQUFpQjs7SUFDakIsMkNBQW1COztJQUNuQiwyQ0FBZ0I7O0lBQ2hCLGlEQUF5RDs7SUFDekQsNERBQTJDOztJQUMzQyw4Q0FBaUM7O0lBQ2pDLDZDQUE0Qjs7SUFDNUIsc0NBQXFCOztJQUVyQix5Q0FBc0M7O0lBQ3RDLDBDQUFvQzs7SUFZbEMsZ0RBQXVDOzs7OztJQUN2Qyx5Q0FBMkI7Ozs7O0lBQzNCLG9DQUE4Qjs7Ozs7SUFDOUIsMkNBQThCOztJQUM5Qiw0Q0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBCQUNLU1BBQ0UgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgQ2RrQ29ubmVjdGVkT3ZlcmxheSwgQ2RrT3ZlcmxheU9yaWdpbiwgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3QsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTZWxmLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgc2xpZGVNb3Rpb24sIHpvb21Nb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvYW5pbWF0aW9uJztcbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9uby1hbmltYXRpb24nO1xuXG5pbXBvcnQge1xuICBOekZvcm1hdEVtaXRFdmVudCxcbiAgTnpUcmVlQmFzZSxcbiAgTnpUcmVlQmFzZVNlcnZpY2UsXG4gIE56VHJlZUhpZ2hlck9yZGVyU2VydmljZVRva2VuLFxuICBOelRyZWVOb2RlLFxuICBOelRyZWVOb2RlT3B0aW9uc1xufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHJlZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE5nU3R5bGVJbnRlcmZhY2UsIE56U2l6ZUxEU1R5cGUsIE9uQ2hhbmdlVHlwZSwgT25Ub3VjaGVkVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIGlzTm90TmlsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgTnpTZWxlY3RTZWFyY2hDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3NlbGVjdCc7XG5pbXBvcnQgeyBOelRyZWVDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3RyZWUnO1xuXG5pbXBvcnQgeyBtZXJnZSwgb2YgYXMgb2JzZXJ2YWJsZU9mLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOelRyZWVTZWxlY3RTZXJ2aWNlIH0gZnJvbSAnLi90cmVlLXNlbGVjdC5zZXJ2aWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGhpZ2hlck9yZGVyU2VydmljZUZhY3RvcnkoaW5qZWN0b3I6IEluamVjdG9yKTogTnpUcmVlQmFzZVNlcnZpY2Uge1xuICByZXR1cm4gaW5qZWN0b3IuZ2V0KE56VHJlZVNlbGVjdFNlcnZpY2UpO1xufVxuXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAndHJlZVNlbGVjdCc7XG5jb25zdCBUUkVFX1NFTEVDVF9ERUZBVUxUX0NMQVNTID0gJ2FudC1zZWxlY3QtZHJvcGRvd24gYW50LXNlbGVjdC10cmVlLWRyb3Bkb3duJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotdHJlZS1zZWxlY3QnLFxuICBleHBvcnRBczogJ256VHJlZVNlbGVjdCcsXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbiwgem9vbU1vdGlvbl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBjZGtDb25uZWN0ZWRPdmVybGF5XG4gICAgICBuekNvbm5lY3RlZE92ZXJsYXlcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cImNka092ZXJsYXlPcmlnaW5cIlxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cIm56T3BlblwiXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheUhhc0JhY2tkcm9wXT1cInRydWVcIlxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlUcmFuc2Zvcm1PcmlnaW5Pbl09XCInLmFudC1zZWxlY3QtdHJlZS1kcm9wZG93bidcIlxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlNaW5XaWR0aF09XCIkYW55KG56RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoID8gbnVsbCA6IHRyaWdnZXJXaWR0aClcIlxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlXaWR0aF09XCIkYW55KG56RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoID8gdHJpZ2dlcldpZHRoIDogbnVsbClcIlxuICAgICAgKGJhY2tkcm9wQ2xpY2spPVwiY2xvc2VEcm9wRG93bigpXCJcbiAgICAgIChkZXRhY2gpPVwiY2xvc2VEcm9wRG93bigpXCJcbiAgICAgIChwb3NpdGlvbkNoYW5nZSk9XCJvblBvc2l0aW9uQ2hhbmdlKCRldmVudClcIlxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgW0BzbGlkZU1vdGlvbl09XCInZW50ZXInXCJcbiAgICAgICAgW25nQ2xhc3NdPVwiZHJvcGRvd25DbGFzc05hbWVcIlxuICAgICAgICBbQC5kaXNhYmxlZF09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXG4gICAgICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcbiAgICAgICAgW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tcGxhY2VtZW50LWJvdHRvbUxlZnRdPVwiZHJvcERvd25Qb3NpdGlvbiA9PT0gJ2JvdHRvbSdcIlxuICAgICAgICBbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1wbGFjZW1lbnQtdG9wTGVmdF09XCJkcm9wRG93blBvc2l0aW9uID09PSAndG9wJ1wiXG4gICAgICAgIFtuZ1N0eWxlXT1cIm56RHJvcGRvd25TdHlsZVwiXG4gICAgICA+XG4gICAgICAgIDxuei10cmVlXG4gICAgICAgICAgI3RyZWVSZWZcbiAgICAgICAgICBbaGlkZGVuXT1cImlzTm90Rm91bmRcIlxuICAgICAgICAgIG56Tm9BbmltYXRpb25cbiAgICAgICAgICBuelNlbGVjdE1vZGVcbiAgICAgICAgICBbbnpEYXRhXT1cIm56Tm9kZXNcIlxuICAgICAgICAgIFtuek11bHRpcGxlXT1cIm56TXVsdGlwbGVcIlxuICAgICAgICAgIFtuelNlYXJjaFZhbHVlXT1cImlucHV0VmFsdWVcIlxuICAgICAgICAgIFtuekhpZGVVbk1hdGNoZWRdPVwibnpIaWRlVW5NYXRjaGVkXCJcbiAgICAgICAgICBbbnpTaG93SWNvbl09XCJuelNob3dJY29uXCJcbiAgICAgICAgICBbbnpDaGVja2FibGVdPVwibnpDaGVja2FibGVcIlxuICAgICAgICAgIFtuekFzeW5jRGF0YV09XCJuekFzeW5jRGF0YVwiXG4gICAgICAgICAgW256U2hvd0V4cGFuZF09XCJuelNob3dFeHBhbmRcIlxuICAgICAgICAgIFtuelNob3dMaW5lXT1cIm56U2hvd0xpbmVcIlxuICAgICAgICAgIFtuekV4cGFuZGVkSWNvbl09XCJuekV4cGFuZGVkSWNvblwiXG4gICAgICAgICAgW256RXhwYW5kQWxsXT1cIm56RGVmYXVsdEV4cGFuZEFsbFwiXG4gICAgICAgICAgW256RXhwYW5kZWRLZXlzXT1cImV4cGFuZGVkS2V5c1wiXG4gICAgICAgICAgW256Q2hlY2tlZEtleXNdPVwibnpDaGVja2FibGUgPyB2YWx1ZSA6IFtdXCJcbiAgICAgICAgICBbbnpTZWxlY3RlZEtleXNdPVwiIW56Q2hlY2thYmxlID8gdmFsdWUgOiBbXVwiXG4gICAgICAgICAgW256VHJlZVRlbXBsYXRlXT1cInRyZWVUZW1wbGF0ZVwiXG4gICAgICAgICAgW256Q2hlY2tTdHJpY3RseV09XCJuekNoZWNrU3RyaWN0bHlcIlxuICAgICAgICAgIChuekV4cGFuZENoYW5nZSk9XCJvbkV4cGFuZGVkS2V5c0NoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICAobnpDbGljayk9XCJuelRyZWVDbGljay5lbWl0KCRldmVudClcIlxuICAgICAgICAgIChuekNoZWNrZWRLZXlzQ2hhbmdlKT1cInVwZGF0ZVNlbGVjdGVkTm9kZXMoKVwiXG4gICAgICAgICAgKG56U2VsZWN0ZWRLZXlzQ2hhbmdlKT1cInVwZGF0ZVNlbGVjdGVkTm9kZXMoKVwiXG4gICAgICAgICAgKG56Q2hlY2tCb3hDaGFuZ2UpPVwibnpUcmVlQ2hlY2tCb3hDaGFuZ2UuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAobnpTZWFyY2hWYWx1ZUNoYW5nZSk9XCJzZXRTZWFyY2hWYWx1ZXMoJGV2ZW50KVwiXG4gICAgICAgID5cbiAgICAgICAgPC9uei10cmVlPlxuICAgICAgICA8c3BhbiAqbmdJZj1cIm56Tm9kZXMubGVuZ3RoID09PSAwIHx8IGlzTm90Rm91bmRcIiBjbGFzcz1cImFudC1zZWxlY3Qtbm90LWZvdW5kXCI+XG4gICAgICAgICAgPG56LWVtYmVkLWVtcHR5IFtuekNvbXBvbmVudE5hbWVdPVwiJ3RyZWUtc2VsZWN0J1wiIFtzcGVjaWZpY0NvbnRlbnRdPVwibnpOb3RGb3VuZENvbnRlbnRcIj48L256LWVtYmVkLWVtcHR5PlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPGRpdiBjZGtPdmVybGF5T3JpZ2luIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3RvclwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzTXVsdGlwbGVcIj5cbiAgICAgICAgPG56LXNlbGVjdC1pdGVtXG4gICAgICAgICAgKm5nRm9yPVwibGV0IG5vZGUgb2Ygc2VsZWN0ZWROb2RlcyB8IHNsaWNlOiAwOm56TWF4VGFnQ291bnQ7IHRyYWNrQnk6IHRyYWNrVmFsdWVcIlxuICAgICAgICAgIFtAem9vbU1vdGlvbl1cbiAgICAgICAgICBbQC5kaXNhYmxlZF09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXG4gICAgICAgICAgW256Tm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxuICAgICAgICAgIFtkZWxldGFibGVdPVwidHJ1ZVwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cIm5vZGUuaXNEaXNhYmxlZCB8fCBuekRpc2FibGVkXCJcbiAgICAgICAgICBbbGFiZWxdPVwibnpEaXNwbGF5V2l0aChub2RlKVwiXG4gICAgICAgICAgKEB6b29tTW90aW9uLmRvbmUpPVwidXBkYXRlUG9zaXRpb24oKVwiXG4gICAgICAgICAgKGRlbGV0ZSk9XCJyZW1vdmVTZWxlY3RlZChub2RlLCB0cnVlKVwiXG4gICAgICAgID48L256LXNlbGVjdC1pdGVtPlxuXG4gICAgICAgIDxuei1zZWxlY3QtaXRlbVxuICAgICAgICAgICpuZ0lmPVwic2VsZWN0ZWROb2Rlcy5sZW5ndGggPiBuek1heFRhZ0NvdW50XCJcbiAgICAgICAgICBbQHpvb21Nb3Rpb25dXG4gICAgICAgICAgKEB6b29tTW90aW9uLmRvbmUpPVwidXBkYXRlUG9zaXRpb24oKVwiXG4gICAgICAgICAgW0AuZGlzYWJsZWRdPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxuICAgICAgICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcbiAgICAgICAgICBbY29udGVudFRlbXBsYXRlT3V0bGV0XT1cIm56TWF4VGFnUGxhY2Vob2xkZXJcIlxuICAgICAgICAgIFtjb250ZW50VGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInNlbGVjdGVkTm9kZXMgfCBzbGljZTogbnpNYXhUYWdDb3VudFwiXG4gICAgICAgICAgW2RlbGV0YWJsZV09XCJmYWxzZVwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImZhbHNlXCJcbiAgICAgICAgICBbbGFiZWxdPVwiJysgJyArIChzZWxlY3RlZE5vZGVzLmxlbmd0aCAtIG56TWF4VGFnQ291bnQpICsgJyAuLi4nXCJcbiAgICAgICAgPjwvbnotc2VsZWN0LWl0ZW0+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgPG56LXNlbGVjdC1zZWFyY2hcbiAgICAgICAgKm5nSWY9XCJuelNob3dTZWFyY2hcIlxuICAgICAgICAoa2V5ZG93bik9XCJvbktleURvd25JbnB1dCgkZXZlbnQpXCJcbiAgICAgICAgKGlzQ29tcG9zaW5nQ2hhbmdlKT1cImlzQ29tcG9zaW5nID0gJGV2ZW50XCJcbiAgICAgICAgKHZhbHVlQ2hhbmdlKT1cInNldElucHV0VmFsdWUoJGV2ZW50KVwiXG4gICAgICAgIFt2YWx1ZV09XCJpbnB1dFZhbHVlXCJcbiAgICAgICAgW21pcnJvclN5bmNdPVwiaXNNdWx0aXBsZVwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJuekRpc2FibGVkXCJcbiAgICAgICAgW3Nob3dJbnB1dF09XCJuek9wZW5cIlxuICAgICAgPlxuICAgICAgPC9uei1zZWxlY3Qtc2VhcmNoPlxuXG4gICAgICA8bnotc2VsZWN0LXBsYWNlaG9sZGVyXG4gICAgICAgICpuZ0lmPVwibnpQbGFjZUhvbGRlciAmJiBzZWxlY3RlZE5vZGVzLmxlbmd0aCA9PT0gMFwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJuelBsYWNlSG9sZGVyXCJcbiAgICAgICAgW3N0eWxlLmRpc3BsYXldPVwicGxhY2VIb2xkZXJEaXNwbGF5XCJcbiAgICAgID5cbiAgICAgIDwvbnotc2VsZWN0LXBsYWNlaG9sZGVyPlxuXG4gICAgICA8bnotc2VsZWN0LWl0ZW1cbiAgICAgICAgKm5nSWY9XCIhaXNNdWx0aXBsZSAmJiBzZWxlY3RlZE5vZGVzLmxlbmd0aCA9PT0gMVwiXG4gICAgICAgIFtkZWxldGFibGVdPVwiZmFsc2VcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiZmFsc2VcIlxuICAgICAgICBbbGFiZWxdPVwibnpEaXNwbGF5V2l0aChzZWxlY3RlZE5vZGVzWzBdKVwiXG4gICAgICA+PC9uei1zZWxlY3QtaXRlbT5cblxuICAgICAgPG56LXNlbGVjdC1hcnJvdyAqbmdJZj1cIiFpc011bHRpcGxlXCI+PC9uei1zZWxlY3QtYXJyb3c+XG5cbiAgICAgIDxuei1zZWxlY3QtY2xlYXIgKm5nSWY9XCJuekFsbG93Q2xlYXJcIiAoY2xlYXIpPVwib25DbGVhclNlbGVjdGlvbigpXCI+PC9uei1zZWxlY3QtY2xlYXI+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHByb3ZpZGVyczogW1xuICAgIE56VHJlZVNlbGVjdFNlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogTnpUcmVlSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4sXG4gICAgICB1c2VGYWN0b3J5OiBoaWdoZXJPcmRlclNlcnZpY2VGYWN0b3J5LFxuICAgICAgZGVwczogW1tuZXcgU2VsZigpLCBJbmplY3Rvcl1dXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56VHJlZVNlbGVjdENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXNlbGVjdC1sZ10nOiAnbnpTaXplPT09XCJsYXJnZVwiJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtc21dJzogJ256U2l6ZT09PVwic21hbGxcIicsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWVuYWJsZWRdJzogJyFuekRpc2FibGVkJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZGlzYWJsZWRdJzogJ256RGlzYWJsZWQnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1zaW5nbGVdJzogJyFpc011bHRpcGxlJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtc2hvdy1hcnJvd10nOiAnIWlzTXVsdGlwbGUnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1zaG93LXNlYXJjaF0nOiAnIWlzTXVsdGlwbGUnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1tdWx0aXBsZV0nOiAnaXNNdWx0aXBsZScsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWFsbG93LWNsZWFyXSc6ICduekFsbG93Q2xlYXInLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1vcGVuXSc6ICduek9wZW4nLFxuICAgICcoY2xpY2spJzogJ3RyaWdnZXIoKSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelRyZWVTZWxlY3RDb21wb25lbnQgZXh0ZW5kcyBOelRyZWVCYXNlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpBbGxvd0NsZWFyOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNob3dFeHBhbmQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2hvd0xpbmU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekNoZWNrYWJsZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpIaWRlVW5NYXRjaGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNob3dJY29uOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNob3dTZWFyY2g6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256QXN5bmNEYXRhOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uek11bHRpcGxlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekRlZmF1bHRFeHBhbmRBbGw6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256Q2hlY2tTdHJpY3RseTogQm9vbGVhbklucHV0O1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFsbG93Q2xlYXI6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93RXhwYW5kOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0xpbmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgbnpEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDaGVja2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgbnpIaWRlVW5NYXRjaGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIG56U2hvd0ljb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd1NlYXJjaDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBc3luY0RhdGEgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TXVsdGlwbGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGVmYXVsdEV4cGFuZEFsbCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDaGVja1N0cmljdGx5ID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56RXhwYW5kZWRJY29uPzogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGU7IG9yaWdpbjogTnpUcmVlTm9kZU9wdGlvbnMgfT47XG4gIEBJbnB1dCgpIG56Tm90Rm91bmRDb250ZW50Pzogc3RyaW5nO1xuICBASW5wdXQoKSBuek5vZGVzOiBBcnJheTxOelRyZWVOb2RlIHwgTnpUcmVlTm9kZU9wdGlvbnM+ID0gW107XG4gIEBJbnB1dCgpIG56T3BlbiA9IGZhbHNlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIG56U2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlciA9ICcnO1xuICBASW5wdXQoKSBuekRyb3Bkb3duU3R5bGU6IE5nU3R5bGVJbnRlcmZhY2UgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpEcm9wZG93bkNsYXNzTmFtZT86IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IG56RXhwYW5kZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuZXhwYW5kZWRLZXlzID0gdmFsdWU7XG4gIH1cbiAgZ2V0IG56RXhwYW5kZWRLZXlzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5leHBhbmRlZEtleXM7XG4gIH1cblxuICBASW5wdXQoKSBuekRpc3BsYXlXaXRoOiAobm9kZTogTnpUcmVlTm9kZSkgPT4gc3RyaW5nIHwgdW5kZWZpbmVkID0gKG5vZGU6IE56VHJlZU5vZGUpID0+IG5vZGUudGl0bGU7XG4gIEBJbnB1dCgpIG56TWF4VGFnQ291bnQhOiBudW1iZXI7XG4gIEBJbnB1dCgpIG56TWF4VGFnUGxhY2Vob2xkZXI6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlW10gfT4gfCBudWxsID0gbnVsbDtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xlYXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56UmVtb3ZlZCA9IG5ldyBFdmVudEVtaXR0ZXI8TnpUcmVlTm9kZT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RXhwYW5kQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56VHJlZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56VHJlZUNoZWNrQm94Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcblxuICBAVmlld0NoaWxkKE56U2VsZWN0U2VhcmNoQ29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSkgbnpTZWxlY3RTZWFyY2hDb21wb25lbnQhOiBOelNlbGVjdFNlYXJjaENvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgndHJlZVJlZicsIHsgc3RhdGljOiBmYWxzZSB9KSB0cmVlUmVmITogTnpUcmVlQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKENka092ZXJsYXlPcmlnaW4sIHsgc3RhdGljOiB0cnVlIH0pIGNka092ZXJsYXlPcmlnaW4hOiBDZGtPdmVybGF5T3JpZ2luO1xuICBAVmlld0NoaWxkKENka0Nvbm5lY3RlZE92ZXJsYXksIHsgc3RhdGljOiBmYWxzZSB9KSBjZGtDb25uZWN0ZWRPdmVybGF5ITogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcblxuICBASW5wdXQoKSBuelRyZWVUZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlOyBvcmlnaW46IE56VHJlZU5vZGVPcHRpb25zIH0+O1xuICBAQ29udGVudENoaWxkKCduelRyZWVUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIG56VHJlZVRlbXBsYXRlQ2hpbGQhOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZTsgb3JpZ2luOiBOelRyZWVOb2RlT3B0aW9ucyB9PjtcbiAgZ2V0IHRyZWVUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZTsgb3JpZ2luOiBOelRyZWVOb2RlT3B0aW9ucyB9PiB7XG4gICAgcmV0dXJuIHRoaXMubnpUcmVlVGVtcGxhdGUgfHwgdGhpcy5uelRyZWVUZW1wbGF0ZUNoaWxkO1xuICB9XG5cbiAgZHJvcGRvd25DbGFzc05hbWUgPSBUUkVFX1NFTEVDVF9ERUZBVUxUX0NMQVNTO1xuICB0cmlnZ2VyV2lkdGg/OiBudW1iZXI7XG4gIGlzQ29tcG9zaW5nID0gZmFsc2U7XG4gIGlzRGVzdHJveSA9IHRydWU7XG4gIGlzTm90Rm91bmQgPSBmYWxzZTtcbiAgaW5wdXRWYWx1ZSA9ICcnO1xuICBkcm9wRG93blBvc2l0aW9uOiAndG9wJyB8ICdjZW50ZXInIHwgJ2JvdHRvbScgPSAnYm90dG9tJztcbiAgc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uITogU3Vic2NyaXB0aW9uO1xuICBzZWxlY3RlZE5vZGVzOiBOelRyZWVOb2RlW10gPSBbXTtcbiAgZXhwYW5kZWRLZXlzOiBzdHJpbmdbXSA9IFtdO1xuICB2YWx1ZTogc3RyaW5nW10gPSBbXTtcblxuICBvbkNoYW5nZTogT25DaGFuZ2VUeXBlID0gX3ZhbHVlID0+IHt9O1xuICBvblRvdWNoZWQ6IE9uVG91Y2hlZFR5cGUgPSAoKSA9PiB7fTtcblxuICBnZXQgcGxhY2VIb2xkZXJEaXNwbGF5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nIHx8IHRoaXMuc2VsZWN0ZWROb2Rlcy5sZW5ndGggPyAnbm9uZScgOiAnYmxvY2snO1xuICB9XG5cbiAgZ2V0IGlzTXVsdGlwbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpNdWx0aXBsZSB8fCB0aGlzLm56Q2hlY2thYmxlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgbnpUcmVlU2VydmljZTogTnpUcmVlU2VsZWN0U2VydmljZSxcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXG4gICkge1xuICAgIHN1cGVyKG56VHJlZVNlcnZpY2UpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtc2VsZWN0Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC10cmVlLXNlbGVjdCcpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc0Rlc3Ryb3kgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlU2VsZWN0aW9uQ2hhbmdlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmlzRGVzdHJveSA9IHRydWU7XG4gICAgdGhpcy5jbG9zZURyb3BEb3duKCk7XG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy5jbG9zZURyb3BEb3duKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuek5vZGVzLCBuekRyb3Bkb3duQ2xhc3NOYW1lIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChuek5vZGVzKSB7XG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkTm9kZXModHJ1ZSk7XG4gICAgfVxuICAgIGlmIChuekRyb3Bkb3duQ2xhc3NOYW1lKSB7XG4gICAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLm56RHJvcGRvd25DbGFzc05hbWUgJiYgdGhpcy5uekRyb3Bkb3duQ2xhc3NOYW1lLnRyaW0oKTtcbiAgICAgIHRoaXMuZHJvcGRvd25DbGFzc05hbWUgPSBjbGFzc05hbWUgPyBgJHtUUkVFX1NFTEVDVF9ERUZBVUxUX0NMQVNTfSAke2NsYXNzTmFtZX1gIDogVFJFRV9TRUxFQ1RfREVGQVVMVF9DTEFTUztcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmdbXSB8IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGUgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IFt2YWx1ZSBhcyBzdHJpbmddO1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZE5vZGVzKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gW107XG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZChub2RlLCBmYWxzZSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2RlcyA9IFtdO1xuICAgIH1cbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBzdHJpbmdbXSB8IHN0cmluZyB8IG51bGwpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICB0cmlnZ2VyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQgfHwgKCF0aGlzLm56RGlzYWJsZWQgJiYgdGhpcy5uek9wZW4pKSB7XG4gICAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuRHJvcGRvd24oKTtcbiAgICAgIGlmICh0aGlzLm56U2hvd1NlYXJjaCB8fCB0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgICAgdGhpcy5mb2N1c09uSW5wdXQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvcGVuRHJvcGRvd24oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHRoaXMubnpPcGVuID0gdHJ1ZTtcbiAgICAgIHRoaXMubnpPcGVuQ2hhbmdlLmVtaXQodGhpcy5uek9wZW4pO1xuICAgICAgdGhpcy51cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VEcm9wRG93bigpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgIHRoaXMubnpPcGVuID0gZmFsc2U7XG4gICAgdGhpcy5pbnB1dFZhbHVlID0gJyc7XG4gICAgdGhpcy5uek9wZW5DaGFuZ2UuZW1pdCh0aGlzLm56T3Blbik7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBvbktleURvd25JbnB1dChlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3Qga2V5Q29kZSA9IGUua2V5Q29kZTtcbiAgICBjb25zdCBldmVudFRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSAmJiAhZXZlbnRUYXJnZXQudmFsdWUgJiYga2V5Q29kZSA9PT0gQkFDS1NQQUNFKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCByZW1vdmVOb2RlID0gdGhpcy5zZWxlY3RlZE5vZGVzW3RoaXMuc2VsZWN0ZWROb2Rlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZChyZW1vdmVOb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkV4cGFuZGVkS2V5c0NoYW5nZSh2YWx1ZTogTnpGb3JtYXRFbWl0RXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm56RXhwYW5kQ2hhbmdlLmVtaXQodmFsdWUpO1xuICAgIHRoaXMuZXhwYW5kZWRLZXlzID0gWy4uLnZhbHVlLmtleXMhXTtcbiAgfVxuXG4gIHNldElucHV0VmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgfVxuXG4gIHJlbW92ZVNlbGVjdGVkKG5vZGU6IE56VHJlZU5vZGUsIGVtaXQ6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgbm9kZS5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgbm9kZS5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5uekNoZWNrYWJsZSkge1xuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNvbmR1Y3Qobm9kZSwgdGhpcy5uekNoZWNrU3RyaWN0bHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2V0U2VsZWN0ZWROb2RlTGlzdChub2RlLCB0aGlzLm56TXVsdGlwbGUpO1xuICAgIH1cblxuICAgIGlmIChlbWl0KSB7XG4gICAgICB0aGlzLm56UmVtb3ZlZC5lbWl0KG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzT25JbnB1dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelNlbGVjdFNlYXJjaENvbXBvbmVudCkge1xuICAgICAgdGhpcy5uelNlbGVjdFNlYXJjaENvbXBvbmVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHN1YnNjcmliZVNlbGVjdGlvbkNoYW5nZSgpOiBTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiBtZXJnZShcbiAgICAgIHRoaXMubnpUcmVlQ2xpY2sucGlwZShcbiAgICAgICAgdGFwKChldmVudDogTnpGb3JtYXRFbWl0RXZlbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBub2RlID0gZXZlbnQubm9kZSE7XG4gICAgICAgICAgaWYgKHRoaXMubnpDaGVja2FibGUgJiYgIW5vZGUuaXNEaXNhYmxlZCAmJiAhbm9kZS5pc0Rpc2FibGVDaGVja2JveCkge1xuICAgICAgICAgICAgbm9kZS5pc0NoZWNrZWQgPSAhbm9kZS5pc0NoZWNrZWQ7XG4gICAgICAgICAgICBub2RlLmlzSGFsZkNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICghdGhpcy5uekNoZWNrU3RyaWN0bHkpIHtcbiAgICAgICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNvbmR1Y3Qobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLm56Q2hlY2thYmxlKSB7XG4gICAgICAgICAgICBub2RlLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBmaWx0ZXIoKGV2ZW50OiBOekZvcm1hdEVtaXRFdmVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5vZGUgPSBldmVudC5ub2RlITtcbiAgICAgICAgICByZXR1cm4gdGhpcy5uekNoZWNrYWJsZSA/ICFub2RlLmlzRGlzYWJsZWQgJiYgIW5vZGUuaXNEaXNhYmxlQ2hlY2tib3ggOiAhbm9kZS5pc0Rpc2FibGVkICYmIG5vZGUuaXNTZWxlY3RhYmxlO1xuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIHRoaXMubnpDaGVja2FibGUgPyB0aGlzLm56VHJlZUNoZWNrQm94Q2hhbmdlIDogb2JzZXJ2YWJsZU9mKCksXG4gICAgICB0aGlzLm56Q2xlYXJlZCxcbiAgICAgIHRoaXMubnpSZW1vdmVkXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZE5vZGVzKCk7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2VsZWN0ZWROb2Rlcy5tYXAobm9kZSA9PiBub2RlLmtleSEpO1xuICAgICAgdGhpcy52YWx1ZSA9IFsuLi52YWx1ZV07XG4gICAgICBpZiAodGhpcy5uelNob3dTZWFyY2ggfHwgdGhpcy5pc011bHRpcGxlKSB7XG4gICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLmlzTm90Rm91bmQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuZm9jdXNPbklucHV0KCk7XG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlLmxlbmd0aCA/IHZhbHVlWzBdIDogbnVsbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVTZWxlY3RlZE5vZGVzKGluaXQ6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGlmIChpbml0KSB7XG4gICAgICBjb25zdCBub2RlcyA9IHRoaXMuY29lcmNlVHJlZU5vZGVzKHRoaXMubnpOb2Rlcyk7XG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaXNNdWx0aXBsZSA9IHRoaXMuaXNNdWx0aXBsZTtcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pc0NoZWNrU3RyaWN0bHkgPSB0aGlzLm56Q2hlY2tTdHJpY3RseTtcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pbml0VHJlZShub2Rlcyk7XG4gICAgICBpZiAodGhpcy5uekNoZWNrYWJsZSkge1xuICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY29uZHVjdENoZWNrKHRoaXMudmFsdWUsIHRoaXMubnpDaGVja1N0cmljdGx5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jb25kdWN0U2VsZWN0ZWRLZXlzKHRoaXMudmFsdWUsIHRoaXMuaXNNdWx0aXBsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RlZE5vZGVzID0gWy4uLih0aGlzLm56Q2hlY2thYmxlID8gdGhpcy5nZXRDaGVja2VkTm9kZUxpc3QoKSA6IHRoaXMuZ2V0U2VsZWN0ZWROb2RlTGlzdCgpKV07XG4gIH1cblxuICB1cGRhdGVQb3NpdGlvbigpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkgJiYgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYpIHtcbiAgICAgICAgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xuICAgIHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblk7XG4gIH1cblxuICBvbkNsZWFyU2VsZWN0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZChub2RlLCBmYWxzZSk7XG4gICAgfSk7XG4gICAgdGhpcy5uekNsZWFyZWQuZW1pdCgpO1xuICB9XG5cbiAgc2V0U2VhcmNoVmFsdWVzKCRldmVudDogTnpGb3JtYXRFbWl0RXZlbnQpOiB2b2lkIHtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuaXNOb3RGb3VuZCA9ICh0aGlzLm56U2hvd1NlYXJjaCB8fCB0aGlzLmlzTXVsdGlwbGUpICYmICEhdGhpcy5pbnB1dFZhbHVlICYmICRldmVudC5tYXRjaGVkS2V5cyEubGVuZ3RoID09PSAwO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpOiB2b2lkIHtcbiAgICB0aGlzLnRyaWdnZXJXaWR0aCA9IHRoaXMuY2RrT3ZlcmxheU9yaWdpbi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gIH1cblxuICB0cmFja1ZhbHVlKF9pbmRleDogbnVtYmVyLCBvcHRpb246IE56VHJlZU5vZGUpOiBzdHJpbmcge1xuICAgIHJldHVybiBvcHRpb24ua2V5ITtcbiAgfVxufVxuIl19