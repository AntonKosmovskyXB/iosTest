/**
 * @fileoverview added by tsickle
 * Generated from: select.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { DOWN_ARROW, ENTER, ESCAPE, SPACE, TAB, UP_ARROW } from '@angular/cdk/keycodes';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, forwardRef, Host, Input, Optional, Output, QueryList, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { slideMotion } from 'ng-zorro-antd/core/animation';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { BehaviorSubject, combineLatest, merge, Subject } from 'rxjs';
import { startWith, switchMap, takeUntil } from 'rxjs/operators';
import { NzOptionGroupComponent } from './option-group.component';
import { NzOptionComponent } from './option.component';
import { NzSelectTopControlComponent } from './select-top-control.component';
/** @type {?} */
const defaultFilterOption = (/**
 * @param {?} searchValue
 * @param {?} item
 * @return {?}
 */
(searchValue, item) => {
    if (item && item.nzLabel) {
        return item.nzLabel.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    }
    else {
        return false;
    }
});
const ɵ0 = defaultFilterOption;
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'select';
export class NzSelectComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} cdr
     * @param {?} elementRef
     * @param {?} platform
     * @param {?} focusMonitor
     * @param {?=} noAnimation
     */
    constructor(nzConfigService, cdr, elementRef, platform, focusMonitor, noAnimation) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.platform = platform;
        this.focusMonitor = focusMonitor;
        this.noAnimation = noAnimation;
        this.nzSize = 'default';
        this.nzOptionHeightPx = 32;
        this.nzOptionOverflowSize = 8;
        this.nzDropdownClassName = null;
        this.nzDropdownMatchSelectWidth = true;
        this.nzDropdownStyle = null;
        this.nzNotFoundContent = undefined;
        this.nzPlaceHolder = null;
        this.nzMaxTagCount = Infinity;
        this.nzDropdownRender = null;
        this.nzCustomTemplate = null;
        this.nzSuffixIcon = null;
        this.nzClearIcon = null;
        this.nzRemoveIcon = null;
        this.nzMenuItemSelectedIcon = null;
        this.nzShowArrow = true;
        this.nzTokenSeparators = [];
        this.nzMaxTagPlaceholder = null;
        this.nzMaxMultipleCount = Infinity;
        this.nzMode = 'default';
        this.nzFilterOption = defaultFilterOption;
        this.compareWith = (/**
         * @param {?} o1
         * @param {?} o2
         * @return {?}
         */
        (o1, o2) => o1 === o2);
        this.nzAllowClear = false;
        this.nzBorderless = false;
        this.nzShowSearch = false;
        this.nzLoading = false;
        this.nzAutoFocus = false;
        this.nzAutoClearSearchValue = true;
        this.nzServerSearch = false;
        this.nzDisabled = false;
        this.nzOpen = false;
        this.nzOptions = [];
        this.nzOnSearch = new EventEmitter();
        this.nzScrollToBottom = new EventEmitter();
        this.nzOpenChange = new EventEmitter();
        this.nzBlur = new EventEmitter();
        this.nzFocus = new EventEmitter();
        this.listOfValue$ = new BehaviorSubject([]);
        this.listOfTemplateItem$ = new BehaviorSubject([]);
        this.listOfTagAndTemplateItem = [];
        this.searchValue = '';
        this.isReactiveDriven = false;
        this.destroy$ = new Subject();
        this.onChange = (/**
         * @return {?}
         */
        () => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
        this.dropDownPosition = 'bottom';
        this.triggerWidth = null;
        this.listOfContainerItem = [];
        this.listOfTopItem = [];
        this.activatedValue = null;
        this.listOfValue = [];
        this.focused = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    generateTagItem(value) {
        return {
            nzValue: value,
            nzLabel: value,
            type: 'item'
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onItemClick(value) {
        this.activatedValue = value;
        if (this.nzMode === 'default') {
            if (this.listOfValue.length === 0 || !this.compareWith(this.listOfValue[0], value)) {
                this.updateListOfValue([value]);
            }
            this.setOpenState(false);
        }
        else {
            /** @type {?} */
            const targetIndex = this.listOfValue.findIndex((/**
             * @param {?} o
             * @return {?}
             */
            o => this.compareWith(o, value)));
            if (targetIndex !== -1) {
                /** @type {?} */
                const listOfValueAfterRemoved = this.listOfValue.filter((/**
                 * @param {?} _
                 * @param {?} i
                 * @return {?}
                 */
                (_, i) => i !== targetIndex));
                this.updateListOfValue(listOfValueAfterRemoved);
            }
            else if (this.listOfValue.length < this.nzMaxMultipleCount) {
                /** @type {?} */
                const listOfValueAfterAdded = [...this.listOfValue, value];
                this.updateListOfValue(listOfValueAfterAdded);
            }
            this.focus();
            if (this.nzAutoClearSearchValue) {
                this.clearInput();
            }
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onItemDelete(item) {
        /** @type {?} */
        const listOfSelectedValue = this.listOfValue.filter((/**
         * @param {?} v
         * @return {?}
         */
        v => !this.compareWith(v, item.nzValue)));
        this.updateListOfValue(listOfSelectedValue);
        this.clearInput();
    }
    /**
     * @return {?}
     */
    updateListOfContainerItem() {
        /** @type {?} */
        let listOfContainerItem = this.listOfTagAndTemplateItem
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        item => !item.nzHide))
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (!this.nzServerSearch && this.searchValue) {
                return this.nzFilterOption(this.searchValue, item);
            }
            else {
                return true;
            }
        }));
        if (this.nzMode === 'tags' && this.searchValue) {
            /** @type {?} */
            const matchedItem = this.listOfTagAndTemplateItem.find((/**
             * @param {?} item
             * @return {?}
             */
            item => item.nzLabel === this.searchValue));
            if (!matchedItem) {
                /** @type {?} */
                const tagItem = this.generateTagItem(this.searchValue);
                listOfContainerItem = [tagItem, ...listOfContainerItem];
                this.activatedValue = tagItem.nzValue;
            }
            else {
                this.activatedValue = matchedItem.nzValue;
            }
        }
        if (this.listOfValue.length !== 0 &&
            listOfContainerItem.findIndex((/**
             * @param {?} item
             * @return {?}
             */
            item => this.compareWith(item.nzValue, this.activatedValue))) === -1) {
            /** @type {?} */
            const activatedItem = listOfContainerItem.find((/**
             * @param {?} item
             * @return {?}
             */
            item => this.compareWith(item.nzValue, this.listOfValue[0]))) || listOfContainerItem[0];
            this.activatedValue = (activatedItem && activatedItem.nzValue) || null;
        }
        /** @type {?} */
        let listOfGroupLabel = [];
        if (this.isReactiveDriven) {
            listOfGroupLabel = [...new Set(this.nzOptions.filter((/**
                 * @param {?} o
                 * @return {?}
                 */
                o => o.groupLabel)).map((/**
                 * @param {?} o
                 * @return {?}
                 */
                o => (/** @type {?} */ (o.groupLabel)))))];
        }
        else {
            if (this.listOfNzOptionGroupComponent) {
                listOfGroupLabel = this.listOfNzOptionGroupComponent.map((/**
                 * @param {?} o
                 * @return {?}
                 */
                o => o.nzLabel));
            }
        }
        /** insert group item **/
        listOfGroupLabel.forEach((/**
         * @param {?} label
         * @return {?}
         */
        label => {
            /** @type {?} */
            const index = listOfContainerItem.findIndex((/**
             * @param {?} item
             * @return {?}
             */
            item => label === item.groupLabel));
            if (index > -1) {
                /** @type {?} */
                const groupItem = (/** @type {?} */ ({ groupLabel: label, type: 'group', key: label }));
                listOfContainerItem.splice(index, 0, groupItem);
            }
        }));
        this.listOfContainerItem = [...listOfContainerItem];
        this.updateCdkConnectedOverlayPositions();
    }
    /**
     * @return {?}
     */
    clearInput() {
        this.nzSelectTopControlComponent.clearInputValue();
    }
    /**
     * @param {?} listOfValue
     * @return {?}
     */
    updateListOfValue(listOfValue) {
        /** @type {?} */
        const covertListToModel = (/**
         * @param {?} list
         * @param {?} mode
         * @return {?}
         */
        (list, mode) => {
            if (mode === 'default') {
                if (list.length > 0) {
                    return list[0];
                }
                else {
                    return null;
                }
            }
            else {
                return list;
            }
        });
        /** @type {?} */
        const model = covertListToModel(listOfValue, this.nzMode);
        if (this.value !== model) {
            this.listOfValue = listOfValue;
            this.listOfValue$.next(listOfValue);
            this.value = model;
            this.onChange(this.value);
        }
    }
    /**
     * @param {?} listOfLabel
     * @return {?}
     */
    onTokenSeparate(listOfLabel) {
        /** @type {?} */
        const listOfMatchedValue = this.listOfTagAndTemplateItem
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        item => listOfLabel.findIndex((/**
         * @param {?} label
         * @return {?}
         */
        label => label === item.nzLabel)) !== -1))
            .map((/**
         * @param {?} item
         * @return {?}
         */
        item => item.nzValue))
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        item => this.listOfValue.findIndex((/**
         * @param {?} v
         * @return {?}
         */
        v => this.compareWith(v, item))) === -1));
        if (this.nzMode === 'multiple') {
            this.updateListOfValue([...this.listOfValue, ...listOfMatchedValue]);
        }
        else if (this.nzMode === 'tags') {
            /** @type {?} */
            const listOfUnMatchedLabel = listOfLabel.filter((/**
             * @param {?} label
             * @return {?}
             */
            label => this.listOfTagAndTemplateItem.findIndex((/**
             * @param {?} item
             * @return {?}
             */
            item => item.nzLabel === label)) === -1));
            this.updateListOfValue([...this.listOfValue, ...listOfMatchedValue, ...listOfUnMatchedLabel]);
        }
        this.clearInput();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        if (this.nzDisabled) {
            return;
        }
        /** @type {?} */
        const listOfFilteredOptionNotDisabled = this.listOfContainerItem.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.type === 'item')).filter((/**
         * @param {?} item
         * @return {?}
         */
        item => !item.nzDisabled));
        /** @type {?} */
        const activatedIndex = listOfFilteredOptionNotDisabled.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        item => this.compareWith(item.nzValue, this.activatedValue)));
        switch (e.keyCode) {
            case UP_ARROW:
                e.preventDefault();
                if (this.nzOpen) {
                    /** @type {?} */
                    const preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionNotDisabled.length - 1;
                    this.activatedValue = listOfFilteredOptionNotDisabled[preIndex].nzValue;
                }
                break;
            case DOWN_ARROW:
                e.preventDefault();
                if (this.nzOpen) {
                    /** @type {?} */
                    const nextIndex = activatedIndex < listOfFilteredOptionNotDisabled.length - 1 ? activatedIndex + 1 : 0;
                    this.activatedValue = listOfFilteredOptionNotDisabled[nextIndex].nzValue;
                }
                else {
                    this.setOpenState(true);
                }
                break;
            case ENTER:
                e.preventDefault();
                if (this.nzOpen) {
                    if (this.activatedValue) {
                        this.onItemClick(this.activatedValue);
                    }
                }
                else {
                    this.setOpenState(true);
                }
                break;
            case SPACE:
                if (!this.nzOpen) {
                    this.setOpenState(true);
                    e.preventDefault();
                }
                break;
            case TAB:
                this.setOpenState(false);
                break;
            case ESCAPE:
                this.setOpenState(false);
                break;
            default:
                if (!this.nzOpen) {
                    this.setOpenState(true);
                }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setOpenState(value) {
        if (this.nzOpen !== value) {
            this.nzOpen = value;
            this.nzOpenChange.emit(value);
            this.onOpenChange();
            this.cdr.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    onOpenChange() {
        this.updateCdkConnectedOverlayStatus();
        this.clearInput();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onInputValueChange(value) {
        this.searchValue = value;
        this.updateListOfContainerItem();
        this.nzOnSearch.emit(value);
        this.updateCdkConnectedOverlayPositions();
    }
    /**
     * @return {?}
     */
    onClearSelection() {
        this.updateListOfValue([]);
    }
    /**
     * @return {?}
     */
    focus() {
        this.nzSelectTopControlComponent.focus();
    }
    /**
     * @return {?}
     */
    blur() {
        this.nzSelectTopControlComponent.blur();
    }
    /**
     * @param {?} position
     * @return {?}
     */
    onPositionChange(position) {
        this.dropDownPosition = position.connectionPair.originY;
    }
    /**
     * @return {?}
     */
    updateCdkConnectedOverlayStatus() {
        if (this.platform.isBrowser && this.originElement.nativeElement) {
            this.triggerWidth = this.originElement.nativeElement.getBoundingClientRect().width;
        }
    }
    /**
     * @return {?}
     */
    updateCdkConnectedOverlayPositions() {
        if (this.cdkConnectedOverlay.overlayRef) {
            this.cdkConnectedOverlay.overlayRef.updatePosition();
        }
    }
    /**
     * @param {?} modelValue
     * @return {?}
     */
    writeValue(modelValue) {
        /** https://github.com/angular/angular/issues/14988 **/
        if (this.value !== modelValue) {
            this.value = modelValue;
            /** @type {?} */
            const covertModelToList = (/**
             * @param {?} model
             * @param {?} mode
             * @return {?}
             */
            (model, mode) => {
                if (model === null || model === undefined) {
                    return [];
                }
                else if (mode === 'default') {
                    return [model];
                }
                else {
                    return model;
                }
            });
            /** @type {?} */
            const listOfValue = covertModelToList(modelValue, this.nzMode);
            this.listOfValue = listOfValue;
            this.listOfValue$.next(listOfValue);
            this.cdr.markForCheck();
        }
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
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
        this.nzDisabled = disabled;
        if (disabled) {
            this.setOpenState(false);
        }
        this.cdr.markForCheck();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzOpen, nzDisabled, nzOptions } = changes;
        if (nzOpen) {
            this.onOpenChange();
        }
        if (nzDisabled && this.nzDisabled) {
            this.setOpenState(false);
        }
        if (nzOptions) {
            this.isReactiveDriven = true;
            /** @type {?} */
            const listOfOptions = this.nzOptions || [];
            /** @type {?} */
            const listOfTransformedItem = listOfOptions.map((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                return {
                    template: item.label instanceof TemplateRef ? item.label : null,
                    nzLabel: typeof item.label === 'string' ? item.label : null,
                    nzValue: item.value,
                    nzDisabled: item.disabled || false,
                    nzHide: item.hide || false,
                    nzCustomContent: item.label instanceof TemplateRef,
                    groupLabel: item.groupLabel || null,
                    type: 'item',
                    key: item.value
                };
            }));
            this.listOfTemplateItem$.next(listOfTransformedItem);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.focusMonitor
            .monitor(this.elementRef, true)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        focusOrigin => {
            if (!focusOrigin) {
                this.focused = false;
                this.cdr.markForCheck();
                this.nzBlur.emit();
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => {
                    this.onTouched();
                }));
            }
            else {
                this.focused = true;
                this.cdr.markForCheck();
                this.nzFocus.emit();
            }
        }));
        combineLatest([this.listOfValue$, this.listOfTemplateItem$])
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ([listOfSelectedValue, listOfTemplateItem]) => {
            /** @type {?} */
            const listOfTagItem = listOfSelectedValue
                .filter((/**
             * @return {?}
             */
            () => this.nzMode === 'tags'))
                .filter((/**
             * @param {?} value
             * @return {?}
             */
            value => listOfTemplateItem.findIndex((/**
             * @param {?} o
             * @return {?}
             */
            o => this.compareWith(o.nzValue, value))) === -1))
                .map((/**
             * @param {?} value
             * @return {?}
             */
            value => this.listOfTopItem.find((/**
             * @param {?} o
             * @return {?}
             */
            o => this.compareWith(o.nzValue, value))) || this.generateTagItem(value)));
            this.listOfTagAndTemplateItem = [...listOfTemplateItem, ...listOfTagItem];
            this.listOfTopItem = this.listOfValue
                .map((/**
             * @param {?} v
             * @return {?}
             */
            v => (/** @type {?} */ ([...this.listOfTagAndTemplateItem, ...this.listOfTopItem].find((/**
             * @param {?} item
             * @return {?}
             */
            item => this.compareWith(v, item.nzValue)))))))
                .filter((/**
             * @param {?} item
             * @return {?}
             */
            item => !!item));
            this.updateListOfContainerItem();
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.updateCdkConnectedOverlayStatus();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (!this.isReactiveDriven) {
            merge(this.listOfNzOptionGroupComponent.changes, this.listOfNzOptionComponent.changes)
                .pipe(startWith(true), switchMap((/**
             * @return {?}
             */
            () => merge(...[
                this.listOfNzOptionComponent.changes,
                this.listOfNzOptionGroupComponent.changes,
                ...this.listOfNzOptionComponent.map((/**
                 * @param {?} option
                 * @return {?}
                 */
                option => option.changes)),
                ...this.listOfNzOptionGroupComponent.map((/**
                 * @param {?} option
                 * @return {?}
                 */
                option => option.changes))
            ]).pipe(startWith(true)))), takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const listOfOptionInterface = this.listOfNzOptionComponent.toArray().map((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => {
                    const { template, nzLabel, nzValue, nzDisabled, nzHide, nzCustomContent, groupLabel } = item;
                    return { template, nzLabel, nzValue, nzDisabled, nzHide, nzCustomContent, groupLabel, type: 'item', key: nzValue };
                }));
                this.listOfTemplateItem$.next(listOfOptionInterface);
                this.cdr.markForCheck();
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-select',
                exportAs: 'nzSelect',
                preserveWhitespaces: false,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => NzSelectComponent)),
                        multi: true
                    }
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                animations: [slideMotion],
                template: `
    <nz-select-top-control
      cdkOverlayOrigin
      #origin="cdkOverlayOrigin"
      [open]="nzOpen"
      [disabled]="nzDisabled"
      [mode]="nzMode"
      [@.disabled]="noAnimation?.nzNoAnimation"
      [nzNoAnimation]="noAnimation?.nzNoAnimation"
      [maxTagPlaceholder]="nzMaxTagPlaceholder"
      [removeIcon]="nzRemoveIcon"
      [placeHolder]="nzPlaceHolder"
      [maxTagCount]="nzMaxTagCount"
      [customTemplate]="nzCustomTemplate"
      [tokenSeparators]="nzTokenSeparators"
      [showSearch]="nzShowSearch"
      [autofocus]="nzAutoFocus"
      [listOfTopItem]="listOfTopItem"
      (inputValueChange)="onInputValueChange($event)"
      (tokenize)="onTokenSeparate($event)"
      (animationEnd)="updateCdkConnectedOverlayPositions()"
      (deleteItem)="onItemDelete($event)"
      (keydown)="onKeyDown($event)"
      (openChange)="setOpenState($event)"
    ></nz-select-top-control>
    <nz-select-clear
      *ngIf="nzAllowClear && !nzDisabled && listOfValue.length"
      [clearIcon]="nzClearIcon"
      (clear)="onClearSelection()"
    ></nz-select-clear>
    <nz-select-arrow
      *ngIf="nzShowArrow && nzMode === 'default'"
      [loading]="nzLoading"
      [search]="nzOpen && nzShowSearch"
      [suffixIcon]="nzSuffixIcon"
    ></nz-select-arrow>
    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="true"
      [cdkConnectedOverlayMinWidth]="$any(nzDropdownMatchSelectWidth ? null : triggerWidth)"
      [cdkConnectedOverlayWidth]="$any(nzDropdownMatchSelectWidth ? triggerWidth : null)"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayTransformOriginOn]="'.ant-select-dropdown'"
      [cdkConnectedOverlayPanelClass]="nzDropdownClassName!"
      (backdropClick)="setOpenState(false)"
      (detach)="setOpenState(false)"
      (positionChange)="onPositionChange($event)"
      [cdkConnectedOverlayOpen]="nzOpen"
    >
      <nz-option-container
        [ngStyle]="nzDropdownStyle"
        [itemSize]="nzOptionHeightPx"
        [maxItemLength]="nzOptionOverflowSize"
        [matchWidth]="nzDropdownMatchSelectWidth"
        [class.ant-select-dropdown-placement-bottomLeft]="dropDownPosition === 'bottom'"
        [class.ant-select-dropdown-placement-topLeft]="dropDownPosition === 'top'"
        [@slideMotion]="'enter'"
        [@.disabled]="noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [listOfContainerItem]="listOfContainerItem"
        [menuItemSelectedIcon]="nzMenuItemSelectedIcon"
        [notFoundContent]="nzNotFoundContent"
        [activatedValue]="activatedValue"
        [listOfSelectedValue]="listOfValue"
        [dropdownRender]="nzDropdownRender"
        [compareWith]="compareWith"
        [mode]="nzMode"
        (keydown)="onKeyDown($event)"
        (itemClick)="onItemClick($event)"
        (scrollToBottom)="nzScrollToBottom.emit()"
      ></nz-option-container>
    </ng-template>
  `,
                host: {
                    '[class.ant-select]': 'true',
                    '[class.ant-select-lg]': 'nzSize === "large"',
                    '[class.ant-select-sm]': 'nzSize === "small"',
                    '[class.ant-select-show-arrow]': `nzShowArrow && nzMode === 'default'`,
                    '[class.ant-select-disabled]': 'nzDisabled',
                    '[class.ant-select-show-search]': `nzShowSearch || nzMode !== 'default'`,
                    '[class.ant-select-allow-clear]': 'nzAllowClear',
                    '[class.ant-select-borderless]': 'nzBorderless',
                    '[class.ant-select-open]': 'nzOpen',
                    '[class.ant-select-focused]': 'nzOpen || focused',
                    '[class.ant-select-single]': `nzMode === 'default'`,
                    '[class.ant-select-multiple]': `nzMode !== 'default'`
                }
            }] }
];
/** @nocollapse */
NzSelectComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Platform },
    { type: FocusMonitor },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzSelectComponent.propDecorators = {
    nzSize: [{ type: Input }],
    nzOptionHeightPx: [{ type: Input }],
    nzOptionOverflowSize: [{ type: Input }],
    nzDropdownClassName: [{ type: Input }],
    nzDropdownMatchSelectWidth: [{ type: Input }],
    nzDropdownStyle: [{ type: Input }],
    nzNotFoundContent: [{ type: Input }],
    nzPlaceHolder: [{ type: Input }],
    nzMaxTagCount: [{ type: Input }],
    nzDropdownRender: [{ type: Input }],
    nzCustomTemplate: [{ type: Input }],
    nzSuffixIcon: [{ type: Input }],
    nzClearIcon: [{ type: Input }],
    nzRemoveIcon: [{ type: Input }],
    nzMenuItemSelectedIcon: [{ type: Input }],
    nzShowArrow: [{ type: Input }],
    nzTokenSeparators: [{ type: Input }],
    nzMaxTagPlaceholder: [{ type: Input }],
    nzMaxMultipleCount: [{ type: Input }],
    nzMode: [{ type: Input }],
    nzFilterOption: [{ type: Input }],
    compareWith: [{ type: Input }],
    nzAllowClear: [{ type: Input }],
    nzBorderless: [{ type: Input }],
    nzShowSearch: [{ type: Input }],
    nzLoading: [{ type: Input }],
    nzAutoFocus: [{ type: Input }],
    nzAutoClearSearchValue: [{ type: Input }],
    nzServerSearch: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzOpen: [{ type: Input }],
    nzOptions: [{ type: Input }],
    nzOnSearch: [{ type: Output }],
    nzScrollToBottom: [{ type: Output }],
    nzOpenChange: [{ type: Output }],
    nzBlur: [{ type: Output }],
    nzFocus: [{ type: Output }],
    originElement: [{ type: ViewChild, args: [CdkOverlayOrigin, { static: true, read: ElementRef },] }],
    cdkConnectedOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay, { static: true },] }],
    nzSelectTopControlComponent: [{ type: ViewChild, args: [NzSelectTopControlComponent, { static: true },] }],
    listOfNzOptionComponent: [{ type: ContentChildren, args: [NzOptionComponent, { descendants: true },] }],
    listOfNzOptionGroupComponent: [{ type: ContentChildren, args: [NzOptionGroupComponent, { descendants: true },] }],
    nzOptionGroupComponentElement: [{ type: ViewChild, args: [NzOptionGroupComponent, { static: true, read: ElementRef },] }],
    nzSelectTopControlComponentElement: [{ type: ViewChild, args: [NzSelectTopControlComponent, { static: true, read: ElementRef },] }]
};
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    __metadata("design:type", Object)
], NzSelectComponent.prototype, "nzSuffixIcon", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSelectComponent.prototype, "nzAllowClear", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME), InputBoolean(),
    __metadata("design:type", Object)
], NzSelectComponent.prototype, "nzBorderless", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSelectComponent.prototype, "nzShowSearch", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSelectComponent.prototype, "nzLoading", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSelectComponent.prototype, "nzAutoFocus", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSelectComponent.prototype, "nzAutoClearSearchValue", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSelectComponent.prototype, "nzServerSearch", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSelectComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSelectComponent.prototype, "nzOpen", void 0);
if (false) {
    /** @type {?} */
    NzSelectComponent.ngAcceptInputType_nzAllowClear;
    /** @type {?} */
    NzSelectComponent.ngAcceptInputType_nzBorderless;
    /** @type {?} */
    NzSelectComponent.ngAcceptInputType_nzShowSearch;
    /** @type {?} */
    NzSelectComponent.ngAcceptInputType_nzLoading;
    /** @type {?} */
    NzSelectComponent.ngAcceptInputType_nzAutoFocus;
    /** @type {?} */
    NzSelectComponent.ngAcceptInputType_nzAutoClearSearchValue;
    /** @type {?} */
    NzSelectComponent.ngAcceptInputType_nzServerSearch;
    /** @type {?} */
    NzSelectComponent.ngAcceptInputType_nzDisabled;
    /** @type {?} */
    NzSelectComponent.ngAcceptInputType_nzOpen;
    /** @type {?} */
    NzSelectComponent.prototype.nzSize;
    /** @type {?} */
    NzSelectComponent.prototype.nzOptionHeightPx;
    /** @type {?} */
    NzSelectComponent.prototype.nzOptionOverflowSize;
    /** @type {?} */
    NzSelectComponent.prototype.nzDropdownClassName;
    /** @type {?} */
    NzSelectComponent.prototype.nzDropdownMatchSelectWidth;
    /** @type {?} */
    NzSelectComponent.prototype.nzDropdownStyle;
    /** @type {?} */
    NzSelectComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzSelectComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzSelectComponent.prototype.nzMaxTagCount;
    /** @type {?} */
    NzSelectComponent.prototype.nzDropdownRender;
    /** @type {?} */
    NzSelectComponent.prototype.nzCustomTemplate;
    /** @type {?} */
    NzSelectComponent.prototype.nzSuffixIcon;
    /** @type {?} */
    NzSelectComponent.prototype.nzClearIcon;
    /** @type {?} */
    NzSelectComponent.prototype.nzRemoveIcon;
    /** @type {?} */
    NzSelectComponent.prototype.nzMenuItemSelectedIcon;
    /** @type {?} */
    NzSelectComponent.prototype.nzShowArrow;
    /** @type {?} */
    NzSelectComponent.prototype.nzTokenSeparators;
    /** @type {?} */
    NzSelectComponent.prototype.nzMaxTagPlaceholder;
    /** @type {?} */
    NzSelectComponent.prototype.nzMaxMultipleCount;
    /** @type {?} */
    NzSelectComponent.prototype.nzMode;
    /** @type {?} */
    NzSelectComponent.prototype.nzFilterOption;
    /** @type {?} */
    NzSelectComponent.prototype.compareWith;
    /** @type {?} */
    NzSelectComponent.prototype.nzAllowClear;
    /** @type {?} */
    NzSelectComponent.prototype.nzBorderless;
    /** @type {?} */
    NzSelectComponent.prototype.nzShowSearch;
    /** @type {?} */
    NzSelectComponent.prototype.nzLoading;
    /** @type {?} */
    NzSelectComponent.prototype.nzAutoFocus;
    /** @type {?} */
    NzSelectComponent.prototype.nzAutoClearSearchValue;
    /** @type {?} */
    NzSelectComponent.prototype.nzServerSearch;
    /** @type {?} */
    NzSelectComponent.prototype.nzDisabled;
    /** @type {?} */
    NzSelectComponent.prototype.nzOpen;
    /** @type {?} */
    NzSelectComponent.prototype.nzOptions;
    /** @type {?} */
    NzSelectComponent.prototype.nzOnSearch;
    /** @type {?} */
    NzSelectComponent.prototype.nzScrollToBottom;
    /** @type {?} */
    NzSelectComponent.prototype.nzOpenChange;
    /** @type {?} */
    NzSelectComponent.prototype.nzBlur;
    /** @type {?} */
    NzSelectComponent.prototype.nzFocus;
    /** @type {?} */
    NzSelectComponent.prototype.originElement;
    /** @type {?} */
    NzSelectComponent.prototype.cdkConnectedOverlay;
    /** @type {?} */
    NzSelectComponent.prototype.nzSelectTopControlComponent;
    /** @type {?} */
    NzSelectComponent.prototype.listOfNzOptionComponent;
    /** @type {?} */
    NzSelectComponent.prototype.listOfNzOptionGroupComponent;
    /** @type {?} */
    NzSelectComponent.prototype.nzOptionGroupComponentElement;
    /** @type {?} */
    NzSelectComponent.prototype.nzSelectTopControlComponentElement;
    /**
     * @type {?}
     * @private
     */
    NzSelectComponent.prototype.listOfValue$;
    /**
     * @type {?}
     * @private
     */
    NzSelectComponent.prototype.listOfTemplateItem$;
    /**
     * @type {?}
     * @private
     */
    NzSelectComponent.prototype.listOfTagAndTemplateItem;
    /**
     * @type {?}
     * @private
     */
    NzSelectComponent.prototype.searchValue;
    /**
     * @type {?}
     * @private
     */
    NzSelectComponent.prototype.isReactiveDriven;
    /**
     * @type {?}
     * @private
     */
    NzSelectComponent.prototype.value;
    /**
     * @type {?}
     * @private
     */
    NzSelectComponent.prototype.destroy$;
    /** @type {?} */
    NzSelectComponent.prototype.onChange;
    /** @type {?} */
    NzSelectComponent.prototype.onTouched;
    /** @type {?} */
    NzSelectComponent.prototype.dropDownPosition;
    /** @type {?} */
    NzSelectComponent.prototype.triggerWidth;
    /** @type {?} */
    NzSelectComponent.prototype.listOfContainerItem;
    /** @type {?} */
    NzSelectComponent.prototype.listOfTopItem;
    /** @type {?} */
    NzSelectComponent.prototype.activatedValue;
    /** @type {?} */
    NzSelectComponent.prototype.listOfValue;
    /** @type {?} */
    NzSelectComponent.prototype.focused;
    /** @type {?} */
    NzSelectComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzSelectComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzSelectComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzSelectComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzSelectComponent.prototype.focusMonitor;
    /** @type {?} */
    NzSelectComponent.prototype.noAnimation;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2VsZWN0LyIsInNvdXJjZXMiOlsic2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBa0MsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUVULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUV6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RSxPQUFPLEVBQUUsU0FBUyxF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QUFrRTs7SUFDbEUsd0NBQThHOztJQUM5Ryx5Q0FBOEM7O0lBQzlDLHlDQUE2Rjs7SUFDN0YseUNBQThDOztJQUM5QyxzQ0FBMkM7O0lBQzNDLHdDQUE2Qzs7SUFDN0MsbURBQXVEOztJQUN2RCwyQ0FBZ0Q7O0lBQ2hELHVDQUE0Qzs7SUFDNUMsbUNBQXdDOztJQUN4QyxzQ0FBbUQ7O0lBQ25ELHVDQUEyRDs7SUFDM0QsNkNBQStEOztJQUMvRCx5Q0FBOEQ7O0lBQzlELG1DQUFxRDs7SUFDckQsb0NBQXNEOztJQUN0RCwwQ0FBNEY7O0lBQzVGLGdEQUE0Rjs7SUFDNUYsd0RBQW9IOztJQUNwSCxvREFBa0g7O0lBQ2xILHlEQUFpSTs7SUFDakksMERBQWtIOztJQUNsSCwrREFBNEg7Ozs7O0lBQzVILHlDQUE0RDs7Ozs7SUFDNUQsZ0RBQStFOzs7OztJQUMvRSxxREFBK0Q7Ozs7O0lBQy9ELHdDQUFpQzs7Ozs7SUFDakMsNkNBQWlDOzs7OztJQUNqQyxrQ0FBdUM7Ozs7O0lBQ3ZDLHFDQUFpQzs7SUFDakMscUNBQWtDOztJQUNsQyxzQ0FBb0M7O0lBQ3BDLDZDQUF5RDs7SUFDekQseUNBQW1DOztJQUNuQyxnREFBa0Q7O0lBQ2xELDBDQUE0Qzs7SUFDNUMsMkNBQXdDOztJQUN4Qyx3Q0FBOEI7O0lBQzlCLG9DQUFnQjs7SUFxT2QsNENBQXVDOzs7OztJQUN2QyxnQ0FBOEI7Ozs7O0lBQzlCLHVDQUE4Qjs7Ozs7SUFDOUIscUNBQTBCOzs7OztJQUMxQix5Q0FBa0M7O0lBQ2xDLHdDQUErRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IERPV05fQVJST1csIEVOVEVSLCBFU0NBUEUsIFNQQUNFLCBUQUIsIFVQX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7IENka0Nvbm5lY3RlZE92ZXJsYXksIENka092ZXJsYXlPcmlnaW4sIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBzbGlkZU1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE56U2FmZUFueSwgT25DaGFuZ2VUeXBlLCBPblRvdWNoZWRUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCwgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN0YXJ0V2l0aCwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOek9wdGlvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9vcHRpb24tZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IE56T3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9vcHRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IE56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekZpbHRlck9wdGlvblR5cGUsIE56U2VsZWN0SXRlbUludGVyZmFjZSwgTnpTZWxlY3RNb2RlVHlwZSwgTnpTZWxlY3RPcHRpb25JbnRlcmZhY2UgfSBmcm9tICcuL3NlbGVjdC50eXBlcyc7XG5cbmNvbnN0IGRlZmF1bHRGaWx0ZXJPcHRpb246IE56RmlsdGVyT3B0aW9uVHlwZSA9IChzZWFyY2hWYWx1ZTogc3RyaW5nLCBpdGVtOiBOelNlbGVjdEl0ZW1JbnRlcmZhY2UpOiBib29sZWFuID0+IHtcbiAgaWYgKGl0ZW0gJiYgaXRlbS5uekxhYmVsKSB7XG4gICAgcmV0dXJuIGl0ZW0ubnpMYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdzZWxlY3QnO1xuXG5leHBvcnQgdHlwZSBOelNlbGVjdFNpemVUeXBlID0gJ2xhcmdlJyB8ICdkZWZhdWx0JyB8ICdzbWFsbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXNlbGVjdCcsXG4gIGV4cG9ydEFzOiAnbnpTZWxlY3QnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOelNlbGVjdENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG56LXNlbGVjdC10b3AtY29udHJvbFxuICAgICAgY2RrT3ZlcmxheU9yaWdpblxuICAgICAgI29yaWdpbj1cImNka092ZXJsYXlPcmlnaW5cIlxuICAgICAgW29wZW5dPVwibnpPcGVuXCJcbiAgICAgIFtkaXNhYmxlZF09XCJuekRpc2FibGVkXCJcbiAgICAgIFttb2RlXT1cIm56TW9kZVwiXG4gICAgICBbQC5kaXNhYmxlZF09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXG4gICAgICBbbnpOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXG4gICAgICBbbWF4VGFnUGxhY2Vob2xkZXJdPVwibnpNYXhUYWdQbGFjZWhvbGRlclwiXG4gICAgICBbcmVtb3ZlSWNvbl09XCJuelJlbW92ZUljb25cIlxuICAgICAgW3BsYWNlSG9sZGVyXT1cIm56UGxhY2VIb2xkZXJcIlxuICAgICAgW21heFRhZ0NvdW50XT1cIm56TWF4VGFnQ291bnRcIlxuICAgICAgW2N1c3RvbVRlbXBsYXRlXT1cIm56Q3VzdG9tVGVtcGxhdGVcIlxuICAgICAgW3Rva2VuU2VwYXJhdG9yc109XCJuelRva2VuU2VwYXJhdG9yc1wiXG4gICAgICBbc2hvd1NlYXJjaF09XCJuelNob3dTZWFyY2hcIlxuICAgICAgW2F1dG9mb2N1c109XCJuekF1dG9Gb2N1c1wiXG4gICAgICBbbGlzdE9mVG9wSXRlbV09XCJsaXN0T2ZUb3BJdGVtXCJcbiAgICAgIChpbnB1dFZhbHVlQ2hhbmdlKT1cIm9uSW5wdXRWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICh0b2tlbml6ZSk9XCJvblRva2VuU2VwYXJhdGUoJGV2ZW50KVwiXG4gICAgICAoYW5pbWF0aW9uRW5kKT1cInVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnMoKVwiXG4gICAgICAoZGVsZXRlSXRlbSk9XCJvbkl0ZW1EZWxldGUoJGV2ZW50KVwiXG4gICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXG4gICAgICAob3BlbkNoYW5nZSk9XCJzZXRPcGVuU3RhdGUoJGV2ZW50KVwiXG4gICAgPjwvbnotc2VsZWN0LXRvcC1jb250cm9sPlxuICAgIDxuei1zZWxlY3QtY2xlYXJcbiAgICAgICpuZ0lmPVwibnpBbGxvd0NsZWFyICYmICFuekRpc2FibGVkICYmIGxpc3RPZlZhbHVlLmxlbmd0aFwiXG4gICAgICBbY2xlYXJJY29uXT1cIm56Q2xlYXJJY29uXCJcbiAgICAgIChjbGVhcik9XCJvbkNsZWFyU2VsZWN0aW9uKClcIlxuICAgID48L256LXNlbGVjdC1jbGVhcj5cbiAgICA8bnotc2VsZWN0LWFycm93XG4gICAgICAqbmdJZj1cIm56U2hvd0Fycm93ICYmIG56TW9kZSA9PT0gJ2RlZmF1bHQnXCJcbiAgICAgIFtsb2FkaW5nXT1cIm56TG9hZGluZ1wiXG4gICAgICBbc2VhcmNoXT1cIm56T3BlbiAmJiBuelNob3dTZWFyY2hcIlxuICAgICAgW3N1ZmZpeEljb25dPVwibnpTdWZmaXhJY29uXCJcbiAgICA+PC9uei1zZWxlY3QtYXJyb3c+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBjZGtDb25uZWN0ZWRPdmVybGF5XG4gICAgICBuekNvbm5lY3RlZE92ZXJsYXlcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5SGFzQmFja2Ryb3BdPVwidHJ1ZVwiXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU1pbldpZHRoXT1cIiRhbnkobnpEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGggPyBudWxsIDogdHJpZ2dlcldpZHRoKVwiXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVdpZHRoXT1cIiRhbnkobnpEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGggPyB0cmlnZ2VyV2lkdGggOiBudWxsKVwiXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJvcmlnaW5cIlxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlUcmFuc2Zvcm1PcmlnaW5Pbl09XCInLmFudC1zZWxlY3QtZHJvcGRvd24nXCJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5UGFuZWxDbGFzc109XCJuekRyb3Bkb3duQ2xhc3NOYW1lIVwiXG4gICAgICAoYmFja2Ryb3BDbGljayk9XCJzZXRPcGVuU3RhdGUoZmFsc2UpXCJcbiAgICAgIChkZXRhY2gpPVwic2V0T3BlblN0YXRlKGZhbHNlKVwiXG4gICAgICAocG9zaXRpb25DaGFuZ2UpPVwib25Qb3NpdGlvbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3Blbl09XCJuek9wZW5cIlxuICAgID5cbiAgICAgIDxuei1vcHRpb24tY29udGFpbmVyXG4gICAgICAgIFtuZ1N0eWxlXT1cIm56RHJvcGRvd25TdHlsZVwiXG4gICAgICAgIFtpdGVtU2l6ZV09XCJuek9wdGlvbkhlaWdodFB4XCJcbiAgICAgICAgW21heEl0ZW1MZW5ndGhdPVwibnpPcHRpb25PdmVyZmxvd1NpemVcIlxuICAgICAgICBbbWF0Y2hXaWR0aF09XCJuekRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aFwiXG4gICAgICAgIFtjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLXBsYWNlbWVudC1ib3R0b21MZWZ0XT1cImRyb3BEb3duUG9zaXRpb24gPT09ICdib3R0b20nXCJcbiAgICAgICAgW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tcGxhY2VtZW50LXRvcExlZnRdPVwiZHJvcERvd25Qb3NpdGlvbiA9PT0gJ3RvcCdcIlxuICAgICAgICBbQHNsaWRlTW90aW9uXT1cIidlbnRlcidcIlxuICAgICAgICBbQC5kaXNhYmxlZF09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXG4gICAgICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcbiAgICAgICAgW2xpc3RPZkNvbnRhaW5lckl0ZW1dPVwibGlzdE9mQ29udGFpbmVySXRlbVwiXG4gICAgICAgIFttZW51SXRlbVNlbGVjdGVkSWNvbl09XCJuek1lbnVJdGVtU2VsZWN0ZWRJY29uXCJcbiAgICAgICAgW25vdEZvdW5kQ29udGVudF09XCJuek5vdEZvdW5kQ29udGVudFwiXG4gICAgICAgIFthY3RpdmF0ZWRWYWx1ZV09XCJhY3RpdmF0ZWRWYWx1ZVwiXG4gICAgICAgIFtsaXN0T2ZTZWxlY3RlZFZhbHVlXT1cImxpc3RPZlZhbHVlXCJcbiAgICAgICAgW2Ryb3Bkb3duUmVuZGVyXT1cIm56RHJvcGRvd25SZW5kZXJcIlxuICAgICAgICBbY29tcGFyZVdpdGhdPVwiY29tcGFyZVdpdGhcIlxuICAgICAgICBbbW9kZV09XCJuek1vZGVcIlxuICAgICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXG4gICAgICAgIChpdGVtQ2xpY2spPVwib25JdGVtQ2xpY2soJGV2ZW50KVwiXG4gICAgICAgIChzY3JvbGxUb0JvdHRvbSk9XCJuelNjcm9sbFRvQm90dG9tLmVtaXQoKVwiXG4gICAgICA+PC9uei1vcHRpb24tY29udGFpbmVyPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1zZWxlY3RdJzogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1sZ10nOiAnbnpTaXplID09PSBcImxhcmdlXCInLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1zbV0nOiAnbnpTaXplID09PSBcInNtYWxsXCInLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1zaG93LWFycm93XSc6IGBuelNob3dBcnJvdyAmJiBuek1vZGUgPT09ICdkZWZhdWx0J2AsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRpc2FibGVkXSc6ICduekRpc2FibGVkJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtc2hvdy1zZWFyY2hdJzogYG56U2hvd1NlYXJjaCB8fCBuek1vZGUgIT09ICdkZWZhdWx0J2AsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWFsbG93LWNsZWFyXSc6ICduekFsbG93Q2xlYXInLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1ib3JkZXJsZXNzXSc6ICduekJvcmRlcmxlc3MnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1vcGVuXSc6ICduek9wZW4nLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1mb2N1c2VkXSc6ICduek9wZW4gfHwgZm9jdXNlZCcsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXNpbmdsZV0nOiBgbnpNb2RlID09PSAnZGVmYXVsdCdgLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1tdWx0aXBsZV0nOiBgbnpNb2RlICE9PSAnZGVmYXVsdCdgXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekFsbG93Q2xlYXI6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256Qm9yZGVybGVzczogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTaG93U2VhcmNoOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekxvYWRpbmc6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256QXV0b0ZvY3VzOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekF1dG9DbGVhclNlYXJjaFZhbHVlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNlcnZlclNlYXJjaDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpEaXNhYmxlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpPcGVuOiBCb29sZWFuSW5wdXQ7XG5cbiAgQElucHV0KCkgbnpTaXplOiBOelNlbGVjdFNpemVUeXBlID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBuek9wdGlvbkhlaWdodFB4ID0gMzI7XG4gIEBJbnB1dCgpIG56T3B0aW9uT3ZlcmZsb3dTaXplID0gODtcbiAgQElucHV0KCkgbnpEcm9wZG93bkNsYXNzTmFtZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoID0gdHJ1ZTtcbiAgQElucHV0KCkgbnpEcm9wZG93blN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56Tm90Rm91bmRDb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICBASW5wdXQoKSBuelBsYWNlSG9sZGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56TWF4VGFnQ291bnQgPSBJbmZpbml0eTtcbiAgQElucHV0KCkgbnpEcm9wZG93blJlbmRlcjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuekN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpTZWxlY3RJdGVtSW50ZXJmYWNlIH0+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpXG4gIEBXaXRoQ29uZmlnPFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBzdHJpbmcgfCBudWxsPihOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpXG4gIG56U3VmZml4SWNvbjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuekNsZWFySWNvbjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuelJlbW92ZUljb246IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpNZW51SXRlbVNlbGVjdGVkSWNvbjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuelNob3dBcnJvdyA9IHRydWU7XG4gIEBJbnB1dCgpIG56VG9rZW5TZXBhcmF0b3JzOiBzdHJpbmdbXSA9IFtdO1xuICBASW5wdXQoKSBuek1heFRhZ1BsYWNlaG9sZGVyOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpTYWZlQW55W10gfT4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpNYXhNdWx0aXBsZUNvdW50ID0gSW5maW5pdHk7XG4gIEBJbnB1dCgpIG56TW9kZTogTnpTZWxlY3RNb2RlVHlwZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbnpGaWx0ZXJPcHRpb246IE56RmlsdGVyT3B0aW9uVHlwZSA9IGRlZmF1bHRGaWx0ZXJPcHRpb247XG4gIEBJbnB1dCgpIGNvbXBhcmVXaXRoOiAobzE6IE56U2FmZUFueSwgbzI6IE56U2FmZUFueSkgPT4gYm9vbGVhbiA9IChvMTogTnpTYWZlQW55LCBvMjogTnpTYWZlQW55KSA9PiBvMSA9PT0gbzI7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFsbG93Q2xlYXIgPSBmYWxzZTtcbiAgQElucHV0KCkgQFdpdGhDb25maWc8Ym9vbGVhbj4oTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBASW5wdXRCb29sZWFuKCkgbnpCb3JkZXJsZXNzID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dTZWFyY2ggPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBdXRvRm9jdXMgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXV0b0NsZWFyU2VhcmNoVmFsdWUgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTZXJ2ZXJTZWFyY2ggPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56T3BlbiA9IGZhbHNlO1xuICBASW5wdXQoKSBuek9wdGlvbnM6IE56U2VsZWN0T3B0aW9uSW50ZXJmYWNlW10gPSBbXTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25TZWFyY2ggPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2Nyb2xsVG9Cb3R0b20gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAVmlld0NoaWxkKENka092ZXJsYXlPcmlnaW4sIHsgc3RhdGljOiB0cnVlLCByZWFkOiBFbGVtZW50UmVmIH0pIG9yaWdpbkVsZW1lbnQhOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKENka0Nvbm5lY3RlZE92ZXJsYXksIHsgc3RhdGljOiB0cnVlIH0pIGNka0Nvbm5lY3RlZE92ZXJsYXkhOiBDZGtDb25uZWN0ZWRPdmVybGF5O1xuICBAVmlld0NoaWxkKE56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUgfSkgbnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50ITogTnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50O1xuICBAQ29udGVudENoaWxkcmVuKE56T3B0aW9uQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGxpc3RPZk56T3B0aW9uQ29tcG9uZW50ITogUXVlcnlMaXN0PE56T3B0aW9uQ29tcG9uZW50PjtcbiAgQENvbnRlbnRDaGlsZHJlbihOek9wdGlvbkdyb3VwQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQhOiBRdWVyeUxpc3Q8TnpPcHRpb25Hcm91cENvbXBvbmVudD47XG4gIEBWaWV3Q2hpbGQoTnpPcHRpb25Hcm91cENvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUsIHJlYWQ6IEVsZW1lbnRSZWYgfSkgbnpPcHRpb25Hcm91cENvbXBvbmVudEVsZW1lbnQhOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKE56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUsIHJlYWQ6IEVsZW1lbnRSZWYgfSkgbnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50RWxlbWVudCE6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgbGlzdE9mVmFsdWUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxOelNhZmVBbnlbXT4oW10pO1xuICBwcml2YXRlIGxpc3RPZlRlbXBsYXRlSXRlbSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE56U2VsZWN0SXRlbUludGVyZmFjZVtdPihbXSk7XG4gIHByaXZhdGUgbGlzdE9mVGFnQW5kVGVtcGxhdGVJdGVtOiBOelNlbGVjdEl0ZW1JbnRlcmZhY2VbXSA9IFtdO1xuICBwcml2YXRlIHNlYXJjaFZhbHVlOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBpc1JlYWN0aXZlRHJpdmVuID0gZmFsc2U7XG4gIHByaXZhdGUgdmFsdWU6IE56U2FmZUFueSB8IE56U2FmZUFueVtdO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcbiAgb25DaGFuZ2U6IE9uQ2hhbmdlVHlwZSA9ICgpID0+IHt9O1xuICBvblRvdWNoZWQ6IE9uVG91Y2hlZFR5cGUgPSAoKSA9PiB7fTtcbiAgZHJvcERvd25Qb3NpdGlvbjogJ3RvcCcgfCAnY2VudGVyJyB8ICdib3R0b20nID0gJ2JvdHRvbSc7XG4gIHRyaWdnZXJXaWR0aDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIGxpc3RPZkNvbnRhaW5lckl0ZW06IE56U2VsZWN0SXRlbUludGVyZmFjZVtdID0gW107XG4gIGxpc3RPZlRvcEl0ZW06IE56U2VsZWN0SXRlbUludGVyZmFjZVtdID0gW107XG4gIGFjdGl2YXRlZFZhbHVlOiBOelNhZmVBbnkgfCBudWxsID0gbnVsbDtcbiAgbGlzdE9mVmFsdWU6IE56U2FmZUFueVtdID0gW107XG4gIGZvY3VzZWQgPSBmYWxzZTtcblxuICBnZW5lcmF0ZVRhZ0l0ZW0odmFsdWU6IHN0cmluZyk6IE56U2VsZWN0SXRlbUludGVyZmFjZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG56VmFsdWU6IHZhbHVlLFxuICAgICAgbnpMYWJlbDogdmFsdWUsXG4gICAgICB0eXBlOiAnaXRlbSdcbiAgICB9O1xuICB9XG5cbiAgb25JdGVtQ2xpY2sodmFsdWU6IE56U2FmZUFueSk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZhdGVkVmFsdWUgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5uek1vZGUgPT09ICdkZWZhdWx0Jykge1xuICAgICAgaWYgKHRoaXMubGlzdE9mVmFsdWUubGVuZ3RoID09PSAwIHx8ICF0aGlzLmNvbXBhcmVXaXRoKHRoaXMubGlzdE9mVmFsdWVbMF0sIHZhbHVlKSkge1xuICAgICAgICB0aGlzLnVwZGF0ZUxpc3RPZlZhbHVlKFt2YWx1ZV0pO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRPcGVuU3RhdGUoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IHRoaXMubGlzdE9mVmFsdWUuZmluZEluZGV4KG8gPT4gdGhpcy5jb21wYXJlV2l0aChvLCB2YWx1ZSkpO1xuICAgICAgaWYgKHRhcmdldEluZGV4ICE9PSAtMSkge1xuICAgICAgICBjb25zdCBsaXN0T2ZWYWx1ZUFmdGVyUmVtb3ZlZCA9IHRoaXMubGlzdE9mVmFsdWUuZmlsdGVyKChfLCBpKSA9PiBpICE9PSB0YXJnZXRJbmRleCk7XG4gICAgICAgIHRoaXMudXBkYXRlTGlzdE9mVmFsdWUobGlzdE9mVmFsdWVBZnRlclJlbW92ZWQpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmxpc3RPZlZhbHVlLmxlbmd0aCA8IHRoaXMubnpNYXhNdWx0aXBsZUNvdW50KSB7XG4gICAgICAgIGNvbnN0IGxpc3RPZlZhbHVlQWZ0ZXJBZGRlZCA9IFsuLi50aGlzLmxpc3RPZlZhbHVlLCB2YWx1ZV07XG4gICAgICAgIHRoaXMudXBkYXRlTGlzdE9mVmFsdWUobGlzdE9mVmFsdWVBZnRlckFkZGVkKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgIGlmICh0aGlzLm56QXV0b0NsZWFyU2VhcmNoVmFsdWUpIHtcbiAgICAgICAgdGhpcy5jbGVhcklucHV0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25JdGVtRGVsZXRlKGl0ZW06IE56U2VsZWN0SXRlbUludGVyZmFjZSk6IHZvaWQge1xuICAgIGNvbnN0IGxpc3RPZlNlbGVjdGVkVmFsdWUgPSB0aGlzLmxpc3RPZlZhbHVlLmZpbHRlcih2ID0+ICF0aGlzLmNvbXBhcmVXaXRoKHYsIGl0ZW0ubnpWYWx1ZSkpO1xuICAgIHRoaXMudXBkYXRlTGlzdE9mVmFsdWUobGlzdE9mU2VsZWN0ZWRWYWx1ZSk7XG4gICAgdGhpcy5jbGVhcklucHV0KCk7XG4gIH1cblxuICB1cGRhdGVMaXN0T2ZDb250YWluZXJJdGVtKCk6IHZvaWQge1xuICAgIGxldCBsaXN0T2ZDb250YWluZXJJdGVtID0gdGhpcy5saXN0T2ZUYWdBbmRUZW1wbGF0ZUl0ZW1cbiAgICAgIC5maWx0ZXIoaXRlbSA9PiAhaXRlbS5uekhpZGUpXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoIXRoaXMubnpTZXJ2ZXJTZWFyY2ggJiYgdGhpcy5zZWFyY2hWYWx1ZSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLm56RmlsdGVyT3B0aW9uKHRoaXMuc2VhcmNoVmFsdWUsIGl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICBpZiAodGhpcy5uek1vZGUgPT09ICd0YWdzJyAmJiB0aGlzLnNlYXJjaFZhbHVlKSB7XG4gICAgICBjb25zdCBtYXRjaGVkSXRlbSA9IHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVJdGVtLmZpbmQoaXRlbSA9PiBpdGVtLm56TGFiZWwgPT09IHRoaXMuc2VhcmNoVmFsdWUpO1xuICAgICAgaWYgKCFtYXRjaGVkSXRlbSkge1xuICAgICAgICBjb25zdCB0YWdJdGVtID0gdGhpcy5nZW5lcmF0ZVRhZ0l0ZW0odGhpcy5zZWFyY2hWYWx1ZSk7XG4gICAgICAgIGxpc3RPZkNvbnRhaW5lckl0ZW0gPSBbdGFnSXRlbSwgLi4ubGlzdE9mQ29udGFpbmVySXRlbV07XG4gICAgICAgIHRoaXMuYWN0aXZhdGVkVmFsdWUgPSB0YWdJdGVtLm56VmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFjdGl2YXRlZFZhbHVlID0gbWF0Y2hlZEl0ZW0ubnpWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKFxuICAgICAgdGhpcy5saXN0T2ZWYWx1ZS5sZW5ndGggIT09IDAgJiZcbiAgICAgIGxpc3RPZkNvbnRhaW5lckl0ZW0uZmluZEluZGV4KGl0ZW0gPT4gdGhpcy5jb21wYXJlV2l0aChpdGVtLm56VmFsdWUsIHRoaXMuYWN0aXZhdGVkVmFsdWUpKSA9PT0gLTFcbiAgICApIHtcbiAgICAgIGNvbnN0IGFjdGl2YXRlZEl0ZW0gPSBsaXN0T2ZDb250YWluZXJJdGVtLmZpbmQoaXRlbSA9PiB0aGlzLmNvbXBhcmVXaXRoKGl0ZW0ubnpWYWx1ZSwgdGhpcy5saXN0T2ZWYWx1ZVswXSkpIHx8IGxpc3RPZkNvbnRhaW5lckl0ZW1bMF07XG4gICAgICB0aGlzLmFjdGl2YXRlZFZhbHVlID0gKGFjdGl2YXRlZEl0ZW0gJiYgYWN0aXZhdGVkSXRlbS5uelZhbHVlKSB8fCBudWxsO1xuICAgIH1cbiAgICBsZXQgbGlzdE9mR3JvdXBMYWJlbDogQXJyYXk8c3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGw+ID0gW107XG4gICAgaWYgKHRoaXMuaXNSZWFjdGl2ZURyaXZlbikge1xuICAgICAgbGlzdE9mR3JvdXBMYWJlbCA9IFsuLi5uZXcgU2V0KHRoaXMubnpPcHRpb25zLmZpbHRlcihvID0+IG8uZ3JvdXBMYWJlbCkubWFwKG8gPT4gby5ncm91cExhYmVsISkpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMubGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudCkge1xuICAgICAgICBsaXN0T2ZHcm91cExhYmVsID0gdGhpcy5saXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50Lm1hcChvID0+IG8ubnpMYWJlbCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKiBpbnNlcnQgZ3JvdXAgaXRlbSAqKi9cbiAgICBsaXN0T2ZHcm91cExhYmVsLmZvckVhY2gobGFiZWwgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBsaXN0T2ZDb250YWluZXJJdGVtLmZpbmRJbmRleChpdGVtID0+IGxhYmVsID09PSBpdGVtLmdyb3VwTGFiZWwpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgY29uc3QgZ3JvdXBJdGVtID0geyBncm91cExhYmVsOiBsYWJlbCwgdHlwZTogJ2dyb3VwJywga2V5OiBsYWJlbCB9IGFzIE56U2VsZWN0SXRlbUludGVyZmFjZTtcbiAgICAgICAgbGlzdE9mQ29udGFpbmVySXRlbS5zcGxpY2UoaW5kZXgsIDAsIGdyb3VwSXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5saXN0T2ZDb250YWluZXJJdGVtID0gWy4uLmxpc3RPZkNvbnRhaW5lckl0ZW1dO1xuICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9ucygpO1xuICB9XG5cbiAgY2xlYXJJbnB1dCgpOiB2b2lkIHtcbiAgICB0aGlzLm56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5jbGVhcklucHV0VmFsdWUoKTtcbiAgfVxuXG4gIHVwZGF0ZUxpc3RPZlZhbHVlKGxpc3RPZlZhbHVlOiBOelNhZmVBbnlbXSk6IHZvaWQge1xuICAgIGNvbnN0IGNvdmVydExpc3RUb01vZGVsID0gKGxpc3Q6IE56U2FmZUFueVtdLCBtb2RlOiBOelNlbGVjdE1vZGVUeXBlKTogTnpTYWZlQW55W10gfCBOelNhZmVBbnkgPT4ge1xuICAgICAgaWYgKG1vZGUgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICBpZiAobGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3RbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsaXN0O1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgbW9kZWwgPSBjb3ZlcnRMaXN0VG9Nb2RlbChsaXN0T2ZWYWx1ZSwgdGhpcy5uek1vZGUpO1xuICAgIGlmICh0aGlzLnZhbHVlICE9PSBtb2RlbCkge1xuICAgICAgdGhpcy5saXN0T2ZWYWx1ZSA9IGxpc3RPZlZhbHVlO1xuICAgICAgdGhpcy5saXN0T2ZWYWx1ZSQubmV4dChsaXN0T2ZWYWx1ZSk7XG4gICAgICB0aGlzLnZhbHVlID0gbW9kZWw7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uVG9rZW5TZXBhcmF0ZShsaXN0T2ZMYWJlbDogc3RyaW5nW10pOiB2b2lkIHtcbiAgICBjb25zdCBsaXN0T2ZNYXRjaGVkVmFsdWUgPSB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlSXRlbVxuICAgICAgLmZpbHRlcihpdGVtID0+IGxpc3RPZkxhYmVsLmZpbmRJbmRleChsYWJlbCA9PiBsYWJlbCA9PT0gaXRlbS5uekxhYmVsKSAhPT0gLTEpXG4gICAgICAubWFwKGl0ZW0gPT4gaXRlbS5uelZhbHVlKVxuICAgICAgLmZpbHRlcihpdGVtID0+IHRoaXMubGlzdE9mVmFsdWUuZmluZEluZGV4KHYgPT4gdGhpcy5jb21wYXJlV2l0aCh2LCBpdGVtKSkgPT09IC0xKTtcbiAgICBpZiAodGhpcy5uek1vZGUgPT09ICdtdWx0aXBsZScpIHtcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mVmFsdWUoWy4uLnRoaXMubGlzdE9mVmFsdWUsIC4uLmxpc3RPZk1hdGNoZWRWYWx1ZV0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uek1vZGUgPT09ICd0YWdzJykge1xuICAgICAgY29uc3QgbGlzdE9mVW5NYXRjaGVkTGFiZWwgPSBsaXN0T2ZMYWJlbC5maWx0ZXIoXG4gICAgICAgIGxhYmVsID0+IHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVJdGVtLmZpbmRJbmRleChpdGVtID0+IGl0ZW0ubnpMYWJlbCA9PT0gbGFiZWwpID09PSAtMVxuICAgICAgKTtcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mVmFsdWUoWy4uLnRoaXMubGlzdE9mVmFsdWUsIC4uLmxpc3RPZk1hdGNoZWRWYWx1ZSwgLi4ubGlzdE9mVW5NYXRjaGVkTGFiZWxdKTtcbiAgICB9XG4gICAgdGhpcy5jbGVhcklucHV0KCk7XG4gIH1cblxuICBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbGlzdE9mRmlsdGVyZWRPcHRpb25Ob3REaXNhYmxlZCA9IHRoaXMubGlzdE9mQ29udGFpbmVySXRlbS5maWx0ZXIoaXRlbSA9PiBpdGVtLnR5cGUgPT09ICdpdGVtJykuZmlsdGVyKGl0ZW0gPT4gIWl0ZW0ubnpEaXNhYmxlZCk7XG4gICAgY29uc3QgYWN0aXZhdGVkSW5kZXggPSBsaXN0T2ZGaWx0ZXJlZE9wdGlvbk5vdERpc2FibGVkLmZpbmRJbmRleChpdGVtID0+IHRoaXMuY29tcGFyZVdpdGgoaXRlbS5uelZhbHVlLCB0aGlzLmFjdGl2YXRlZFZhbHVlKSk7XG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgIGNhc2UgVVBfQVJST1c6XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMubnpPcGVuKSB7XG4gICAgICAgICAgY29uc3QgcHJlSW5kZXggPSBhY3RpdmF0ZWRJbmRleCA+IDAgPyBhY3RpdmF0ZWRJbmRleCAtIDEgOiBsaXN0T2ZGaWx0ZXJlZE9wdGlvbk5vdERpc2FibGVkLmxlbmd0aCAtIDE7XG4gICAgICAgICAgdGhpcy5hY3RpdmF0ZWRWYWx1ZSA9IGxpc3RPZkZpbHRlcmVkT3B0aW9uTm90RGlzYWJsZWRbcHJlSW5kZXhdLm56VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERPV05fQVJST1c6XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMubnpPcGVuKSB7XG4gICAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gYWN0aXZhdGVkSW5kZXggPCBsaXN0T2ZGaWx0ZXJlZE9wdGlvbk5vdERpc2FibGVkLmxlbmd0aCAtIDEgPyBhY3RpdmF0ZWRJbmRleCArIDEgOiAwO1xuICAgICAgICAgIHRoaXMuYWN0aXZhdGVkVmFsdWUgPSBsaXN0T2ZGaWx0ZXJlZE9wdGlvbk5vdERpc2FibGVkW25leHRJbmRleF0ubnpWYWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRU5URVI6XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMubnpPcGVuKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZhdGVkVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMub25JdGVtQ2xpY2sodGhpcy5hY3RpdmF0ZWRWYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTUEFDRTpcbiAgICAgICAgaWYgKCF0aGlzLm56T3Blbikge1xuICAgICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKHRydWUpO1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVEFCOlxuICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZShmYWxzZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFU0NBUEU6XG4gICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoIXRoaXMubnpPcGVuKSB7XG4gICAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRPcGVuU3RhdGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uek9wZW4gIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLm56T3BlbiA9IHZhbHVlO1xuICAgICAgdGhpcy5uek9wZW5DaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgICB0aGlzLm9uT3BlbkNoYW5nZSgpO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgb25PcGVuQ2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpO1xuICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICB9XG5cbiAgb25JbnB1dFZhbHVlQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVMaXN0T2ZDb250YWluZXJJdGVtKCk7XG4gICAgdGhpcy5uek9uU2VhcmNoLmVtaXQodmFsdWUpO1xuICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9ucygpO1xuICB9XG5cbiAgb25DbGVhclNlbGVjdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUxpc3RPZlZhbHVlKFtdKTtcbiAgfVxuXG4gIGZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMubnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmZvY3VzKCk7XG4gIH1cblxuICBibHVyKCk6IHZvaWQge1xuICAgIHRoaXMubnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmJsdXIoKTtcbiAgfVxuXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xuICAgIHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblk7XG4gIH1cblxuICB1cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3NlciAmJiB0aGlzLm9yaWdpbkVsZW1lbnQubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy50cmlnZ2VyV2lkdGggPSB0aGlzLm9yaWdpbkVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwcml2YXRlIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxuICApIHt9XG5cbiAgd3JpdGVWYWx1ZShtb2RlbFZhbHVlOiBOelNhZmVBbnkgfCBOelNhZmVBbnlbXSk6IHZvaWQge1xuICAgIC8qKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xNDk4OCAqKi9cbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gbW9kZWxWYWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IG1vZGVsVmFsdWU7XG4gICAgICBjb25zdCBjb3ZlcnRNb2RlbFRvTGlzdCA9IChtb2RlbDogTnpTYWZlQW55W10gfCBOelNhZmVBbnksIG1vZGU6IE56U2VsZWN0TW9kZVR5cGUpOiBOelNhZmVBbnlbXSA9PiB7XG4gICAgICAgIGlmIChtb2RlbCA9PT0gbnVsbCB8fCBtb2RlbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgIHJldHVybiBbbW9kZWxdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBtb2RlbDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IGxpc3RPZlZhbHVlID0gY292ZXJ0TW9kZWxUb0xpc3QobW9kZWxWYWx1ZSwgdGhpcy5uek1vZGUpO1xuICAgICAgdGhpcy5saXN0T2ZWYWx1ZSA9IGxpc3RPZlZhbHVlO1xuICAgICAgdGhpcy5saXN0T2ZWYWx1ZSQubmV4dChsaXN0T2ZWYWx1ZSk7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBPbkNoYW5nZVR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogT25Ub3VjaGVkVHlwZSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uekRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICB0aGlzLnNldE9wZW5TdGF0ZShmYWxzZSk7XG4gICAgfVxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpPcGVuLCBuekRpc2FibGVkLCBuek9wdGlvbnMgfSA9IGNoYW5nZXM7XG4gICAgaWYgKG56T3Blbikge1xuICAgICAgdGhpcy5vbk9wZW5DaGFuZ2UoKTtcbiAgICB9XG4gICAgaWYgKG56RGlzYWJsZWQgJiYgdGhpcy5uekRpc2FibGVkKSB7XG4gICAgICB0aGlzLnNldE9wZW5TdGF0ZShmYWxzZSk7XG4gICAgfVxuICAgIGlmIChuek9wdGlvbnMpIHtcbiAgICAgIHRoaXMuaXNSZWFjdGl2ZURyaXZlbiA9IHRydWU7XG4gICAgICBjb25zdCBsaXN0T2ZPcHRpb25zID0gdGhpcy5uek9wdGlvbnMgfHwgW107XG4gICAgICBjb25zdCBsaXN0T2ZUcmFuc2Zvcm1lZEl0ZW0gPSBsaXN0T2ZPcHRpb25zLm1hcChpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0ZW1wbGF0ZTogaXRlbS5sYWJlbCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmID8gaXRlbS5sYWJlbCA6IG51bGwsXG4gICAgICAgICAgbnpMYWJlbDogdHlwZW9mIGl0ZW0ubGFiZWwgPT09ICdzdHJpbmcnID8gaXRlbS5sYWJlbCA6IG51bGwsXG4gICAgICAgICAgbnpWYWx1ZTogaXRlbS52YWx1ZSxcbiAgICAgICAgICBuekRpc2FibGVkOiBpdGVtLmRpc2FibGVkIHx8IGZhbHNlLFxuICAgICAgICAgIG56SGlkZTogaXRlbS5oaWRlIHx8IGZhbHNlLFxuICAgICAgICAgIG56Q3VzdG9tQ29udGVudDogaXRlbS5sYWJlbCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmLFxuICAgICAgICAgIGdyb3VwTGFiZWw6IGl0ZW0uZ3JvdXBMYWJlbCB8fCBudWxsLFxuICAgICAgICAgIHR5cGU6ICdpdGVtJyxcbiAgICAgICAgICBrZXk6IGl0ZW0udmFsdWVcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5saXN0T2ZUZW1wbGF0ZUl0ZW0kLm5leHQobGlzdE9mVHJhbnNmb3JtZWRJdGVtKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzTW9uaXRvclxuICAgICAgLm1vbml0b3IodGhpcy5lbGVtZW50UmVmLCB0cnVlKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZShmb2N1c09yaWdpbiA9PiB7XG4gICAgICAgIGlmICghZm9jdXNPcmlnaW4pIHtcbiAgICAgICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICB0aGlzLm56Qmx1ci5lbWl0KCk7XG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgdGhpcy5uekZvY3VzLmVtaXQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgY29tYmluZUxhdGVzdChbdGhpcy5saXN0T2ZWYWx1ZSQsIHRoaXMubGlzdE9mVGVtcGxhdGVJdGVtJF0pXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKChbbGlzdE9mU2VsZWN0ZWRWYWx1ZSwgbGlzdE9mVGVtcGxhdGVJdGVtXSkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0T2ZUYWdJdGVtID0gbGlzdE9mU2VsZWN0ZWRWYWx1ZVxuICAgICAgICAgIC5maWx0ZXIoKCkgPT4gdGhpcy5uek1vZGUgPT09ICd0YWdzJylcbiAgICAgICAgICAuZmlsdGVyKHZhbHVlID0+IGxpc3RPZlRlbXBsYXRlSXRlbS5maW5kSW5kZXgobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8ubnpWYWx1ZSwgdmFsdWUpKSA9PT0gLTEpXG4gICAgICAgICAgLm1hcCh2YWx1ZSA9PiB0aGlzLmxpc3RPZlRvcEl0ZW0uZmluZChvID0+IHRoaXMuY29tcGFyZVdpdGgoby5uelZhbHVlLCB2YWx1ZSkpIHx8IHRoaXMuZ2VuZXJhdGVUYWdJdGVtKHZhbHVlKSk7XG4gICAgICAgIHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVJdGVtID0gWy4uLmxpc3RPZlRlbXBsYXRlSXRlbSwgLi4ubGlzdE9mVGFnSXRlbV07XG4gICAgICAgIHRoaXMubGlzdE9mVG9wSXRlbSA9IHRoaXMubGlzdE9mVmFsdWVcbiAgICAgICAgICAubWFwKHYgPT4gWy4uLnRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVJdGVtLCAuLi50aGlzLmxpc3RPZlRvcEl0ZW1dLmZpbmQoaXRlbSA9PiB0aGlzLmNvbXBhcmVXaXRoKHYsIGl0ZW0ubnpWYWx1ZSkpISlcbiAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gISFpdGVtKTtcbiAgICAgICAgdGhpcy51cGRhdGVMaXN0T2ZDb250YWluZXJJdGVtKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNSZWFjdGl2ZURyaXZlbikge1xuICAgICAgbWVyZ2UodGhpcy5saXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50LmNoYW5nZXMsIHRoaXMubGlzdE9mTnpPcHRpb25Db21wb25lbnQuY2hhbmdlcylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc3RhcnRXaXRoKHRydWUpLFxuICAgICAgICAgIHN3aXRjaE1hcCgoKSA9PlxuICAgICAgICAgICAgbWVyZ2UoXG4gICAgICAgICAgICAgIC4uLltcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LmNoYW5nZXMsXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50LmNoYW5nZXMsXG4gICAgICAgICAgICAgICAgLi4udGhpcy5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5tYXAob3B0aW9uID0+IG9wdGlvbi5jaGFuZ2VzKSxcbiAgICAgICAgICAgICAgICAuLi50aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQubWFwKG9wdGlvbiA9PiBvcHRpb24uY2hhbmdlcylcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKS5waXBlKHN0YXJ0V2l0aCh0cnVlKSlcbiAgICAgICAgICApLFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxpc3RPZk9wdGlvbkludGVyZmFjZSA9IHRoaXMubGlzdE9mTnpPcHRpb25Db21wb25lbnQudG9BcnJheSgpLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgdGVtcGxhdGUsIG56TGFiZWwsIG56VmFsdWUsIG56RGlzYWJsZWQsIG56SGlkZSwgbnpDdXN0b21Db250ZW50LCBncm91cExhYmVsIH0gPSBpdGVtO1xuICAgICAgICAgICAgcmV0dXJuIHsgdGVtcGxhdGUsIG56TGFiZWwsIG56VmFsdWUsIG56RGlzYWJsZWQsIG56SGlkZSwgbnpDdXN0b21Db250ZW50LCBncm91cExhYmVsLCB0eXBlOiAnaXRlbScsIGtleTogbnpWYWx1ZSB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMubGlzdE9mVGVtcGxhdGVJdGVtJC5uZXh0KGxpc3RPZk9wdGlvbkludGVyZmFjZSk7XG4gICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19