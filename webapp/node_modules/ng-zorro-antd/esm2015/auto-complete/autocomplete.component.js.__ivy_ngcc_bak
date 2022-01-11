/**
 * @fileoverview added by tsickle
 * Generated from: autocomplete.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Host, Input, NgZone, Optional, Output, QueryList, TemplateRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { slideMotion } from 'ng-zorro-antd/core/animation';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { defer, merge, Subscription } from 'rxjs';
import { filter, switchMap, take } from 'rxjs/operators';
import { NzAutocompleteOptionComponent } from './autocomplete-option.component';
/**
 * @record
 */
export function AutocompleteDataSourceItem() { }
if (false) {
    /** @type {?} */
    AutocompleteDataSourceItem.prototype.value;
    /** @type {?} */
    AutocompleteDataSourceItem.prototype.label;
}
export class NzAutocompleteComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} ngZone
     * @param {?=} noAnimation
     */
    constructor(changeDetectorRef, ngZone, noAnimation) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.noAnimation = noAnimation;
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzDefaultActiveFirstOption = true;
        this.nzBackfill = false;
        this.compareWith = (/**
         * @param {?} o1
         * @param {?} o2
         * @return {?}
         */
        (o1, o2) => o1 === o2);
        this.selectionChange = new EventEmitter();
        this.showPanel = true;
        this.isOpen = false;
        this.activeItemIndex = -1;
        this.selectionChangeSubscription = Subscription.EMPTY;
        this.optionMouseEnterSubscription = Subscription.EMPTY;
        this.dataSourceChangeSubscription = Subscription.EMPTY;
        /**
         * Options changes listener
         */
        this.optionSelectionChanges = defer((/**
         * @return {?}
         */
        () => {
            if (this.options) {
                return merge(...this.options.map((/**
                 * @param {?} option
                 * @return {?}
                 */
                option => option.selectionChange)));
            }
            return this.ngZone.onStable.asObservable().pipe(take(1), switchMap((/**
             * @return {?}
             */
            () => this.optionSelectionChanges)));
        }));
        this.optionMouseEnter = defer((/**
         * @return {?}
         */
        () => {
            if (this.options) {
                return merge(...this.options.map((/**
                 * @param {?} option
                 * @return {?}
                 */
                option => option.mouseEntered)));
            }
            return this.ngZone.onStable.asObservable().pipe(take(1), switchMap((/**
             * @return {?}
             */
            () => this.optionMouseEnter)));
        }));
    }
    /**
     * Options accessor, its source may be content or dataSource
     * @return {?}
     */
    get options() {
        // first dataSource
        if (this.nzDataSource) {
            return this.fromDataSourceOptions;
        }
        else {
            return this.fromContentOptions;
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (!this.nzDataSource) {
            this.optionsInit();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.nzDataSource) {
            this.optionsInit();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.dataSourceChangeSubscription.unsubscribe();
        this.selectionChangeSubscription.unsubscribe();
        this.optionMouseEnterSubscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    setVisibility() {
        this.showPanel = !!this.options.length;
        this.changeDetectorRef.markForCheck();
    }
    /**
     * @param {?} index
     * @return {?}
     */
    setActiveItem(index) {
        /** @type {?} */
        const activeItem = this.options.toArray()[index];
        if (activeItem && !activeItem.active) {
            this.activeItem = activeItem;
            this.activeItemIndex = index;
            this.clearSelectedOptions(this.activeItem);
            this.activeItem.setActiveStyles();
            this.changeDetectorRef.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    setNextItemActive() {
        /** @type {?} */
        const nextIndex = this.activeItemIndex + 1 <= this.options.length - 1 ? this.activeItemIndex + 1 : 0;
        this.setActiveItem(nextIndex);
    }
    /**
     * @return {?}
     */
    setPreviousItemActive() {
        /** @type {?} */
        const previousIndex = this.activeItemIndex - 1 < 0 ? this.options.length - 1 : this.activeItemIndex - 1;
        this.setActiveItem(previousIndex);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getOptionIndex(value) {
        return (/** @type {?} */ (this.options.reduce((/**
         * @param {?} result
         * @param {?} current
         * @param {?} index
         * @return {?}
         */
        (result, current, index) => {
            return result === -1 ? (this.compareWith(value, current.nzValue) ? index : -1) : result;
        }), -1)));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getOption(value) {
        return this.options.find((/**
         * @param {?} item
         * @return {?}
         */
        item => this.compareWith(value, item.nzValue))) || null;
    }
    /**
     * @private
     * @return {?}
     */
    optionsInit() {
        this.setVisibility();
        this.subscribeOptionChanges();
        /** @type {?} */
        const changes = this.nzDataSource ? this.fromDataSourceOptions.changes : this.fromContentOptions.changes;
        // async
        this.dataSourceChangeSubscription = changes.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            if (!e.dirty && this.isOpen) {
                setTimeout((/**
                 * @return {?}
                 */
                () => this.setVisibility()));
            }
            this.subscribeOptionChanges();
        }));
    }
    /**
     * Clear the status of options
     * @param {?=} skip
     * @param {?=} deselect
     * @return {?}
     */
    clearSelectedOptions(skip, deselect = false) {
        this.options.forEach((/**
         * @param {?} option
         * @return {?}
         */
        option => {
            if (option !== skip) {
                if (deselect) {
                    option.deselect();
                }
                option.setInactiveStyles();
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    subscribeOptionChanges() {
        this.selectionChangeSubscription.unsubscribe();
        this.selectionChangeSubscription = this.optionSelectionChanges
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.isUserInput)))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            event.source.select();
            event.source.setActiveStyles();
            this.activeItem = event.source;
            this.activeItemIndex = this.getOptionIndex(this.activeItem.nzValue);
            this.clearSelectedOptions(event.source, true);
            this.selectionChange.emit(event.source);
        }));
        this.optionMouseEnterSubscription.unsubscribe();
        this.optionMouseEnterSubscription = this.optionMouseEnter.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            event.setActiveStyles();
            this.activeItem = event;
            this.activeItemIndex = this.getOptionIndex(this.activeItem.nzValue);
            this.clearSelectedOptions(event);
        }));
    }
}
NzAutocompleteComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-autocomplete',
                exportAs: 'nzAutocomplete',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <ng-template>
      <div
        #panel
        class="ant-select-dropdown ant-select-dropdown-placement-bottomLeft"
        [class.ant-select-dropdown-hidden]="!showPanel"
        [ngClass]="nzOverlayClassName"
        [ngStyle]="nzOverlayStyle"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@slideMotion]="'enter'"
        [@.disabled]="noAnimation?.nzNoAnimation"
      >
        <div style="max-height: 256px; overflow-y: auto; overflow-anchor: none;">
          <div style="display: flex; flex-direction: column;">
            <ng-template *ngTemplateOutlet="nzDataSource ? optionsTemplate : contentTemplate"></ng-template>
          </div>
        </div>
      </div>
      <ng-template #contentTemplate>
        <ng-content></ng-content>
      </ng-template>
      <ng-template #optionsTemplate>
        <nz-auto-option
          *ngFor="let option of nzDataSource!"
          [nzValue]="option"
          [nzLabel]="option && $any(option).label ? $any(option).label : $any(option)"
        >
          {{ option && $any(option).label ? $any(option).label : $any(option) }}
        </nz-auto-option>
      </ng-template>
    </ng-template>
  `,
                animations: [slideMotion]
            }] }
];
/** @nocollapse */
NzAutocompleteComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzAutocompleteComponent.propDecorators = {
    nzWidth: [{ type: Input }],
    nzOverlayClassName: [{ type: Input }],
    nzOverlayStyle: [{ type: Input }],
    nzDefaultActiveFirstOption: [{ type: Input }],
    nzBackfill: [{ type: Input }],
    compareWith: [{ type: Input }],
    nzDataSource: [{ type: Input }],
    selectionChange: [{ type: Output }],
    fromContentOptions: [{ type: ContentChildren, args: [NzAutocompleteOptionComponent, { descendants: true },] }],
    fromDataSourceOptions: [{ type: ViewChildren, args: [NzAutocompleteOptionComponent,] }],
    template: [{ type: ViewChild, args: [TemplateRef, { static: false },] }],
    panel: [{ type: ViewChild, args: ['panel', { static: false },] }],
    content: [{ type: ViewChild, args: ['content', { static: false },] }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzAutocompleteComponent.prototype, "nzDefaultActiveFirstOption", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzAutocompleteComponent.prototype, "nzBackfill", void 0);
if (false) {
    /** @type {?} */
    NzAutocompleteComponent.ngAcceptInputType_nzDefaultActiveFirstOption;
    /** @type {?} */
    NzAutocompleteComponent.ngAcceptInputType_nzBackfill;
    /** @type {?} */
    NzAutocompleteComponent.prototype.nzWidth;
    /** @type {?} */
    NzAutocompleteComponent.prototype.nzOverlayClassName;
    /** @type {?} */
    NzAutocompleteComponent.prototype.nzOverlayStyle;
    /** @type {?} */
    NzAutocompleteComponent.prototype.nzDefaultActiveFirstOption;
    /** @type {?} */
    NzAutocompleteComponent.prototype.nzBackfill;
    /** @type {?} */
    NzAutocompleteComponent.prototype.compareWith;
    /** @type {?} */
    NzAutocompleteComponent.prototype.nzDataSource;
    /** @type {?} */
    NzAutocompleteComponent.prototype.selectionChange;
    /** @type {?} */
    NzAutocompleteComponent.prototype.showPanel;
    /** @type {?} */
    NzAutocompleteComponent.prototype.isOpen;
    /** @type {?} */
    NzAutocompleteComponent.prototype.activeItem;
    /**
     * Provided by content
     * @type {?}
     */
    NzAutocompleteComponent.prototype.fromContentOptions;
    /**
     * Provided by dataSource
     * @type {?}
     */
    NzAutocompleteComponent.prototype.fromDataSourceOptions;
    /**
     * cdk-overlay
     * @type {?}
     */
    NzAutocompleteComponent.prototype.template;
    /** @type {?} */
    NzAutocompleteComponent.prototype.panel;
    /** @type {?} */
    NzAutocompleteComponent.prototype.content;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteComponent.prototype.activeItemIndex;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteComponent.prototype.selectionChangeSubscription;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteComponent.prototype.optionMouseEnterSubscription;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteComponent.prototype.dataSourceChangeSubscription;
    /**
     * Options changes listener
     * @type {?}
     */
    NzAutocompleteComponent.prototype.optionSelectionChanges;
    /** @type {?} */
    NzAutocompleteComponent.prototype.optionMouseEnter;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteComponent.prototype.ngZone;
    /** @type {?} */
    NzAutocompleteComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYXV0by1jb21wbGV0ZS8iLCJzb3VyY2VzIjpbImF1dG9jb21wbGV0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBLE9BQU8sRUFHTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUNMLE1BQU0sRUFFTixRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULFlBQVksRUFDWixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekQsT0FBTyxFQUFFLDZCQUE2QixFQUEyQixNQUFNLGlDQUFpQyxDQUFDOzs7O0FBRXpHLGdEQUdDOzs7SUFGQywyQ0FBYzs7SUFDZCwyQ0FBYzs7QUE2Q2hCLE1BQU0sT0FBTyx1QkFBdUI7Ozs7OztJQWlFbEMsWUFDVSxpQkFBb0MsRUFDcEMsTUFBYyxFQUNLLFdBQW9DO1FBRnZELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNLLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQS9EeEQsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQ3hC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bEUscURBQWtEOztJQUVsRCwwQ0FBMEI7O0lBQzFCLHFEQUFpQzs7SUFDakMsaURBQXdEOztJQUN4RCw2REFBMkQ7O0lBQzNELDZDQUE0Qzs7SUFDNUMsOENBQTBEOztJQUMxRCwrQ0FBK0M7O0lBQy9DLGtEQUMwSDs7SUFFMUgsNENBQTBCOztJQUMxQix5Q0FBd0I7O0lBQ3hCLDZDQUEyQzs7Ozs7SUFlM0MscURBQzhEOzs7OztJQUU5RCx3REFBOEc7Ozs7O0lBRzlHLDJDQUFzRTs7SUFDdEUsd0NBQTBEOztJQUMxRCwwQ0FBOEQ7Ozs7O0lBRTlELGtEQUFxQzs7Ozs7SUFDckMsOERBQXlEOzs7OztJQUN6RCwrREFBMEQ7Ozs7O0lBQzFELCtEQUEwRDs7Ozs7SUFFMUQseURBUUc7O0lBQ0gsbURBUUc7Ozs7O0lBR0Qsb0RBQTRDOzs7OztJQUM1Qyx5Q0FBc0I7O0lBQ3RCLDhDQUErRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDaGlsZHJlbixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzbGlkZU1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9uby1hbmltYXRpb24nO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBDb21wYXJlV2l0aCwgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IGRlZmVyLCBtZXJnZSwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQsIE56T3B0aW9uU2VsZWN0aW9uQ2hhbmdlIH0gZnJvbSAnLi9hdXRvY29tcGxldGUtb3B0aW9uLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b2NvbXBsZXRlRGF0YVNvdXJjZUl0ZW0ge1xuICB2YWx1ZTogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBBdXRvY29tcGxldGVEYXRhU291cmNlID0gQXJyYXk8QXV0b2NvbXBsZXRlRGF0YVNvdXJjZUl0ZW0gfCBzdHJpbmcgfCBudW1iZXI+O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1hdXRvY29tcGxldGUnLFxuICBleHBvcnRBczogJ256QXV0b2NvbXBsZXRlJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZT5cbiAgICAgIDxkaXZcbiAgICAgICAgI3BhbmVsXG4gICAgICAgIGNsYXNzPVwiYW50LXNlbGVjdC1kcm9wZG93biBhbnQtc2VsZWN0LWRyb3Bkb3duLXBsYWNlbWVudC1ib3R0b21MZWZ0XCJcbiAgICAgICAgW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24taGlkZGVuXT1cIiFzaG93UGFuZWxcIlxuICAgICAgICBbbmdDbGFzc109XCJuek92ZXJsYXlDbGFzc05hbWVcIlxuICAgICAgICBbbmdTdHlsZV09XCJuek92ZXJsYXlTdHlsZVwiXG4gICAgICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcbiAgICAgICAgW0BzbGlkZU1vdGlvbl09XCInZW50ZXInXCJcbiAgICAgICAgW0AuZGlzYWJsZWRdPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxuICAgICAgPlxuICAgICAgICA8ZGl2IHN0eWxlPVwibWF4LWhlaWdodDogMjU2cHg7IG92ZXJmbG93LXk6IGF1dG87IG92ZXJmbG93LWFuY2hvcjogbm9uZTtcIj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcIj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cIm56RGF0YVNvdXJjZSA/IG9wdGlvbnNUZW1wbGF0ZSA6IGNvbnRlbnRUZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8bmctdGVtcGxhdGUgI2NvbnRlbnRUZW1wbGF0ZT5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjb3B0aW9uc1RlbXBsYXRlPlxuICAgICAgICA8bnotYXV0by1vcHRpb25cbiAgICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG56RGF0YVNvdXJjZSFcIlxuICAgICAgICAgIFtuelZhbHVlXT1cIm9wdGlvblwiXG4gICAgICAgICAgW256TGFiZWxdPVwib3B0aW9uICYmICRhbnkob3B0aW9uKS5sYWJlbCA/ICRhbnkob3B0aW9uKS5sYWJlbCA6ICRhbnkob3B0aW9uKVwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyBvcHRpb24gJiYgJGFueShvcHRpb24pLmxhYmVsID8gJGFueShvcHRpb24pLmxhYmVsIDogJGFueShvcHRpb24pIH19XG4gICAgICAgIDwvbnotYXV0by1vcHRpb24+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbl1cbn0pXG5leHBvcnQgY2xhc3MgTnpBdXRvY29tcGxldGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpEZWZhdWx0QWN0aXZlRmlyc3RPcHRpb246IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256QmFja2ZpbGw6IEJvb2xlYW5JbnB1dDtcblxuICBASW5wdXQoKSBueldpZHRoPzogbnVtYmVyO1xuICBASW5wdXQoKSBuek92ZXJsYXlDbGFzc05hbWUgPSAnJztcbiAgQElucHV0KCkgbnpPdmVybGF5U3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QmFja2ZpbGwgPSBmYWxzZTtcbiAgQElucHV0KCkgY29tcGFyZVdpdGg6IENvbXBhcmVXaXRoID0gKG8xLCBvMikgPT4gbzEgPT09IG8yO1xuICBASW5wdXQoKSBuekRhdGFTb3VyY2U/OiBBdXRvY29tcGxldGVEYXRhU291cmNlO1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgc2VsZWN0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudD4oKTtcblxuICBzaG93UGFuZWw6IGJvb2xlYW4gPSB0cnVlO1xuICBpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgYWN0aXZlSXRlbSE6IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50O1xuXG4gIC8qKlxuICAgKiBPcHRpb25zIGFjY2Vzc29yLCBpdHMgc291cmNlIG1heSBiZSBjb250ZW50IG9yIGRhdGFTb3VyY2VcbiAgICovXG4gIGdldCBvcHRpb25zKCk6IFF1ZXJ5TGlzdDxOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudD4ge1xuICAgIC8vIGZpcnN0IGRhdGFTb3VyY2VcbiAgICBpZiAodGhpcy5uekRhdGFTb3VyY2UpIHtcbiAgICAgIHJldHVybiB0aGlzLmZyb21EYXRhU291cmNlT3B0aW9ucztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZnJvbUNvbnRlbnRPcHRpb25zO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBQcm92aWRlZCBieSBjb250ZW50ICovXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgZnJvbUNvbnRlbnRPcHRpb25zITogUXVlcnlMaXN0PE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50PjtcbiAgLyoqIFByb3ZpZGVkIGJ5IGRhdGFTb3VyY2UgKi9cbiAgQFZpZXdDaGlsZHJlbihOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCkgZnJvbURhdGFTb3VyY2VPcHRpb25zITogUXVlcnlMaXN0PE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50PjtcblxuICAvKiogY2RrLW92ZXJsYXkgKi9cbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IGZhbHNlIH0pIHRlbXBsYXRlPzogVGVtcGxhdGVSZWY8e30+O1xuICBAVmlld0NoaWxkKCdwYW5lbCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwYW5lbD86IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgY29udGVudD86IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBhY3RpdmVJdGVtSW5kZXg6IG51bWJlciA9IC0xO1xuICBwcml2YXRlIHNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSBvcHRpb25Nb3VzZUVudGVyU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIGRhdGFTb3VyY2VDaGFuZ2VTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIC8qKiBPcHRpb25zIGNoYW5nZXMgbGlzdGVuZXIgKi9cbiAgcmVhZG9ubHkgb3B0aW9uU2VsZWN0aW9uQ2hhbmdlczogT2JzZXJ2YWJsZTxOek9wdGlvblNlbGVjdGlvbkNoYW5nZT4gPSBkZWZlcigoKSA9PiB7XG4gICAgaWYgKHRoaXMub3B0aW9ucykge1xuICAgICAgcmV0dXJuIG1lcmdlPE56T3B0aW9uU2VsZWN0aW9uQ2hhbmdlPiguLi50aGlzLm9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0aW9uQ2hhbmdlKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm5nWm9uZS5vblN0YWJsZS5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLm9wdGlvblNlbGVjdGlvbkNoYW5nZXMpXG4gICAgKTtcbiAgfSk7XG4gIHJlYWRvbmx5IG9wdGlvbk1vdXNlRW50ZXI6IE9ic2VydmFibGU8TnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQ+ID0gZGVmZXIoKCkgPT4ge1xuICAgIGlmICh0aGlzLm9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBtZXJnZTxOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudD4oLi4udGhpcy5vcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLm1vdXNlRW50ZXJlZCkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5uZ1pvbmUub25TdGFibGUuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgIHRha2UoMSksXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5vcHRpb25Nb3VzZUVudGVyKVxuICAgICk7XG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXG4gICkge31cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm56RGF0YVNvdXJjZSkge1xuICAgICAgdGhpcy5vcHRpb25zSW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekRhdGFTb3VyY2UpIHtcbiAgICAgIHRoaXMub3B0aW9uc0luaXQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGFTb3VyY2VDaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMub3B0aW9uTW91c2VFbnRlclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgc2V0VmlzaWJpbGl0eSgpOiB2b2lkIHtcbiAgICB0aGlzLnNob3dQYW5lbCA9ICEhdGhpcy5vcHRpb25zLmxlbmd0aDtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgc2V0QWN0aXZlSXRlbShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgYWN0aXZlSXRlbSA9IHRoaXMub3B0aW9ucy50b0FycmF5KClbaW5kZXhdO1xuICAgIGlmIChhY3RpdmVJdGVtICYmICFhY3RpdmVJdGVtLmFjdGl2ZSkge1xuICAgICAgdGhpcy5hY3RpdmVJdGVtID0gYWN0aXZlSXRlbTtcbiAgICAgIHRoaXMuYWN0aXZlSXRlbUluZGV4ID0gaW5kZXg7XG4gICAgICB0aGlzLmNsZWFyU2VsZWN0ZWRPcHRpb25zKHRoaXMuYWN0aXZlSXRlbSk7XG4gICAgICB0aGlzLmFjdGl2ZUl0ZW0uc2V0QWN0aXZlU3R5bGVzKCk7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHNldE5leHRJdGVtQWN0aXZlKCk6IHZvaWQge1xuICAgIGNvbnN0IG5leHRJbmRleCA9IHRoaXMuYWN0aXZlSXRlbUluZGV4ICsgMSA8PSB0aGlzLm9wdGlvbnMubGVuZ3RoIC0gMSA/IHRoaXMuYWN0aXZlSXRlbUluZGV4ICsgMSA6IDA7XG4gICAgdGhpcy5zZXRBY3RpdmVJdGVtKG5leHRJbmRleCk7XG4gIH1cblxuICBzZXRQcmV2aW91c0l0ZW1BY3RpdmUoKTogdm9pZCB7XG4gICAgY29uc3QgcHJldmlvdXNJbmRleCA9IHRoaXMuYWN0aXZlSXRlbUluZGV4IC0gMSA8IDAgPyB0aGlzLm9wdGlvbnMubGVuZ3RoIC0gMSA6IHRoaXMuYWN0aXZlSXRlbUluZGV4IC0gMTtcbiAgICB0aGlzLnNldEFjdGl2ZUl0ZW0ocHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBnZXRPcHRpb25JbmRleCh2YWx1ZTogTnpTYWZlQW55KTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnJlZHVjZSgocmVzdWx0OiBudW1iZXIsIGN1cnJlbnQ6IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICByZXR1cm4gcmVzdWx0ID09PSAtMSA/ICh0aGlzLmNvbXBhcmVXaXRoKHZhbHVlLCBjdXJyZW50Lm56VmFsdWUpID8gaW5kZXggOiAtMSkgOiByZXN1bHQ7XG4gICAgfSwgLTEpITtcbiAgfVxuXG4gIGdldE9wdGlvbih2YWx1ZTogTnpTYWZlQW55KTogTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbmQoaXRlbSA9PiB0aGlzLmNvbXBhcmVXaXRoKHZhbHVlLCBpdGVtLm56VmFsdWUpKSB8fCBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBvcHRpb25zSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFZpc2liaWxpdHkoKTtcbiAgICB0aGlzLnN1YnNjcmliZU9wdGlvbkNoYW5nZXMoKTtcbiAgICBjb25zdCBjaGFuZ2VzID0gdGhpcy5uekRhdGFTb3VyY2UgPyB0aGlzLmZyb21EYXRhU291cmNlT3B0aW9ucy5jaGFuZ2VzIDogdGhpcy5mcm9tQ29udGVudE9wdGlvbnMuY2hhbmdlcztcbiAgICAvLyBhc3luY1xuICAgIHRoaXMuZGF0YVNvdXJjZUNoYW5nZVN1YnNjcmlwdGlvbiA9IGNoYW5nZXMuc3Vic2NyaWJlKGUgPT4ge1xuICAgICAgaWYgKCFlLmRpcnR5ICYmIHRoaXMuaXNPcGVuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRWaXNpYmlsaXR5KCkpO1xuICAgICAgfVxuICAgICAgdGhpcy5zdWJzY3JpYmVPcHRpb25DaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIHN0YXR1cyBvZiBvcHRpb25zXG4gICAqL1xuICBjbGVhclNlbGVjdGVkT3B0aW9ucyhza2lwPzogTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQgfCBudWxsLCBkZXNlbGVjdDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgIGlmIChvcHRpb24gIT09IHNraXApIHtcbiAgICAgICAgaWYgKGRlc2VsZWN0KSB7XG4gICAgICAgICAgb3B0aW9uLmRlc2VsZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9uLnNldEluYWN0aXZlU3R5bGVzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZU9wdGlvbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMub3B0aW9uU2VsZWN0aW9uQ2hhbmdlc1xuICAgICAgLnBpcGUoZmlsdGVyKChldmVudDogTnpPcHRpb25TZWxlY3Rpb25DaGFuZ2UpID0+IGV2ZW50LmlzVXNlcklucHV0KSlcbiAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBOek9wdGlvblNlbGVjdGlvbkNoYW5nZSkgPT4ge1xuICAgICAgICBldmVudC5zb3VyY2Uuc2VsZWN0KCk7XG4gICAgICAgIGV2ZW50LnNvdXJjZS5zZXRBY3RpdmVTdHlsZXMoKTtcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gZXZlbnQuc291cmNlO1xuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW1JbmRleCA9IHRoaXMuZ2V0T3B0aW9uSW5kZXgodGhpcy5hY3RpdmVJdGVtLm56VmFsdWUpO1xuICAgICAgICB0aGlzLmNsZWFyU2VsZWN0ZWRPcHRpb25zKGV2ZW50LnNvdXJjZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoZXZlbnQuc291cmNlKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5vcHRpb25Nb3VzZUVudGVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5vcHRpb25Nb3VzZUVudGVyU3Vic2NyaXB0aW9uID0gdGhpcy5vcHRpb25Nb3VzZUVudGVyLnN1YnNjcmliZSgoZXZlbnQ6IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50KSA9PiB7XG4gICAgICBldmVudC5zZXRBY3RpdmVTdHlsZXMoKTtcbiAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IGV2ZW50O1xuICAgICAgdGhpcy5hY3RpdmVJdGVtSW5kZXggPSB0aGlzLmdldE9wdGlvbkluZGV4KHRoaXMuYWN0aXZlSXRlbS5uelZhbHVlKTtcbiAgICAgIHRoaXMuY2xlYXJTZWxlY3RlZE9wdGlvbnMoZXZlbnQpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=