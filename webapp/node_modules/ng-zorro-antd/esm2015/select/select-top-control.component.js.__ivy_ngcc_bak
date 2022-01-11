/**
 * @fileoverview added by tsickle
 * Generated from: select-top-control.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BACKSPACE } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, Component, EventEmitter, Host, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { zoomMotion } from 'ng-zorro-antd/core/animation';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { NzSelectSearchComponent } from './select-search.component';
export class NzSelectTopControlComponent {
    /**
     * @param {?=} noAnimation
     */
    constructor(noAnimation) {
        this.noAnimation = noAnimation;
        this.showSearch = false;
        this.placeHolder = null;
        this.open = false;
        this.maxTagCount = Infinity;
        this.autofocus = false;
        this.disabled = false;
        this.mode = 'default';
        this.customTemplate = null;
        this.maxTagPlaceholder = null;
        this.removeIcon = null;
        this.listOfTopItem = [];
        this.tokenSeparators = [];
        this.tokenize = new EventEmitter();
        this.inputValueChange = new EventEmitter();
        this.animationEnd = new EventEmitter();
        this.deleteItem = new EventEmitter();
        this.openChange = new EventEmitter();
        this.listOfSlicedItem = [];
        this.isShowPlaceholder = true;
        this.isShowSingleLabel = false;
        this.isComposing = false;
        this.inputValue = null;
    }
    /**
     * @return {?}
     */
    onHostClick() {
        if (!this.disabled) {
            this.openChange.next(!this.open);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onHostKeydown(e) {
        /** @type {?} */
        const inputValue = ((/** @type {?} */ (e.target))).value;
        if (e.keyCode === BACKSPACE && this.mode !== 'default' && !inputValue && this.listOfTopItem.length > 0) {
            e.preventDefault();
            this.onDeleteItem(this.listOfTopItem[this.listOfTopItem.length - 1]);
        }
    }
    /**
     * @return {?}
     */
    updateTemplateVariable() {
        /** @type {?} */
        const isSelectedValueEmpty = this.listOfTopItem.length === 0;
        this.isShowPlaceholder = isSelectedValueEmpty && !this.isComposing && !this.inputValue;
        this.isShowSingleLabel = !isSelectedValueEmpty && !this.isComposing && !this.inputValue;
    }
    /**
     * @param {?} isComposing
     * @return {?}
     */
    isComposingChange(isComposing) {
        this.isComposing = isComposing;
        this.updateTemplateVariable();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onInputValueChange(value) {
        if (value !== this.inputValue) {
            this.inputValue = value;
            this.updateTemplateVariable();
            this.inputValueChange.emit(value);
            this.tokenSeparate(value, this.tokenSeparators);
        }
    }
    /**
     * @param {?} inputValue
     * @param {?} tokenSeparators
     * @return {?}
     */
    tokenSeparate(inputValue, tokenSeparators) {
        /** @type {?} */
        const includesSeparators = (/**
         * @param {?} str
         * @param {?} separators
         * @return {?}
         */
        (str, separators) => {
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < separators.length; ++i) {
                if (str.lastIndexOf(separators[i]) > 0) {
                    return true;
                }
            }
            return false;
        });
        /** @type {?} */
        const splitBySeparators = (/**
         * @param {?} str
         * @param {?} separators
         * @return {?}
         */
        (str, separators) => {
            /** @type {?} */
            const reg = new RegExp(`[${separators.join()}]`);
            /** @type {?} */
            const array = ((/** @type {?} */ (str))).split(reg).filter((/**
             * @param {?} token
             * @return {?}
             */
            token => token));
            return [...new Set(array)];
        });
        if (inputValue &&
            inputValue.length &&
            tokenSeparators.length &&
            this.mode !== 'default' &&
            includesSeparators(inputValue, tokenSeparators)) {
            /** @type {?} */
            const listOfLabel = splitBySeparators(inputValue, tokenSeparators);
            this.tokenize.next(listOfLabel);
        }
    }
    /**
     * @return {?}
     */
    clearInputValue() {
        if (this.nzSelectSearchComponent) {
            this.nzSelectSearchComponent.clearInputValue();
        }
    }
    /**
     * @return {?}
     */
    focus() {
        if (this.nzSelectSearchComponent) {
            this.nzSelectSearchComponent.focus();
        }
    }
    /**
     * @return {?}
     */
    blur() {
        if (this.nzSelectSearchComponent) {
            this.nzSelectSearchComponent.blur();
        }
    }
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    trackValue(_index, option) {
        return option.nzValue;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onDeleteItem(item) {
        if (!this.disabled && !item.nzDisabled) {
            this.deleteItem.next(item);
        }
    }
    /**
     * @return {?}
     */
    onAnimationEnd() {
        this.animationEnd.next();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { listOfTopItem, maxTagCount, customTemplate, maxTagPlaceholder } = changes;
        if (listOfTopItem) {
            this.updateTemplateVariable();
        }
        if (listOfTopItem || maxTagCount || customTemplate || maxTagPlaceholder) {
            /** @type {?} */
            const listOfSlicedItem = this.listOfTopItem.slice(0, this.maxTagCount).map((/**
             * @param {?} o
             * @return {?}
             */
            o => {
                return {
                    nzLabel: o.nzLabel,
                    nzValue: o.nzValue,
                    nzDisabled: o.nzDisabled,
                    contentTemplateOutlet: this.customTemplate,
                    contentTemplateOutletContext: o
                };
            }));
            if (this.listOfTopItem.length > this.maxTagCount) {
                /** @type {?} */
                const exceededLabel = `+ ${this.listOfTopItem.length - this.maxTagCount} ...`;
                /** @type {?} */
                const listOfSelectedValue = this.listOfTopItem.map((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => item.nzValue));
                /** @type {?} */
                const exceededItem = {
                    nzLabel: exceededLabel,
                    nzValue: '$$__nz_exceeded_item',
                    nzDisabled: true,
                    contentTemplateOutlet: this.maxTagPlaceholder,
                    contentTemplateOutletContext: listOfSelectedValue.slice(this.maxTagCount)
                };
                listOfSlicedItem.push(exceededItem);
            }
            this.listOfSlicedItem = listOfSlicedItem;
        }
    }
}
NzSelectTopControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-select-top-control',
                exportAs: 'nzSelectTopControl',
                preserveWhitespaces: false,
                animations: [zoomMotion],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <!--single mode-->
    <ng-container [ngSwitch]="mode">
      <ng-container *ngSwitchCase="'default'">
        <nz-select-item
          *ngIf="isShowSingleLabel"
          [deletable]="false"
          [disabled]="false"
          [removeIcon]="removeIcon"
          [label]="listOfTopItem[0].nzLabel"
          [contentTemplateOutlet]="customTemplate"
          [contentTemplateOutletContext]="listOfTopItem[0]"
        ></nz-select-item>
        <nz-select-search
          [disabled]="disabled"
          [value]="inputValue!"
          [showInput]="open && showSearch"
          [mirrorSync]="false"
          [autofocus]="autofocus"
          [focusTrigger]="open"
          (isComposingChange)="isComposingChange($event)"
          (valueChange)="onInputValueChange($event)"
        ></nz-select-search>
      </ng-container>
      <ng-container *ngSwitchDefault>
        <!--multiple or tags mode-->
        <nz-select-item
          *ngFor="let item of listOfSlicedItem; trackBy: trackValue"
          [@zoomMotion]
          [@.disabled]="noAnimation?.nzNoAnimation"
          [nzNoAnimation]="noAnimation?.nzNoAnimation"
          [removeIcon]="removeIcon"
          [label]="item.nzLabel"
          [disabled]="item.nzDisabled || disabled"
          [contentTemplateOutlet]="item.contentTemplateOutlet"
          [deletable]="true"
          [contentTemplateOutletContext]="item.contentTemplateOutletContext"
          (@zoomMotion.done)="onAnimationEnd()"
          (delete)="onDeleteItem(item.contentTemplateOutletContext)"
        >
        </nz-select-item>
        <nz-select-search
          [disabled]="disabled"
          [value]="inputValue!"
          [autofocus]="autofocus"
          [showInput]="true"
          [mirrorSync]="true"
          [focusTrigger]="open"
          (isComposingChange)="isComposingChange($event)"
          (valueChange)="onInputValueChange($event)"
        ></nz-select-search>
      </ng-container>
    </ng-container>
    <nz-select-placeholder *ngIf="isShowPlaceholder" [placeholder]="placeHolder"></nz-select-placeholder>
  `,
                host: {
                    '[class.ant-select-selector]': 'true',
                    '(click)': 'onHostClick()',
                    '(keydown)': 'onHostKeydown($event)'
                }
            }] }
];
/** @nocollapse */
NzSelectTopControlComponent.ctorParameters = () => [
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzSelectTopControlComponent.propDecorators = {
    showSearch: [{ type: Input }],
    placeHolder: [{ type: Input }],
    open: [{ type: Input }],
    maxTagCount: [{ type: Input }],
    autofocus: [{ type: Input }],
    disabled: [{ type: Input }],
    mode: [{ type: Input }],
    customTemplate: [{ type: Input }],
    maxTagPlaceholder: [{ type: Input }],
    removeIcon: [{ type: Input }],
    listOfTopItem: [{ type: Input }],
    tokenSeparators: [{ type: Input }],
    tokenize: [{ type: Output }],
    inputValueChange: [{ type: Output }],
    animationEnd: [{ type: Output }],
    deleteItem: [{ type: Output }],
    openChange: [{ type: Output }],
    nzSelectSearchComponent: [{ type: ViewChild, args: [NzSelectSearchComponent,] }]
};
if (false) {
    /** @type {?} */
    NzSelectTopControlComponent.prototype.showSearch;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.placeHolder;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.open;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.maxTagCount;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.autofocus;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.disabled;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.mode;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.customTemplate;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.maxTagPlaceholder;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.removeIcon;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.listOfTopItem;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.tokenSeparators;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.tokenize;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.inputValueChange;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.animationEnd;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.deleteItem;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.openChange;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.nzSelectSearchComponent;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.listOfSlicedItem;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.isShowPlaceholder;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.isShowSingleLabel;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.isComposing;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.inputValue;
    /** @type {?} */
    NzSelectTopControlComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2VsZWN0LyIsInNvdXJjZXMiOlsic2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbEQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBRUwsUUFBUSxFQUNSLE1BQU0sRUFHTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUV6RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQXVFcEUsTUFBTSxPQUFPLDJCQUEyQjs7OztJQXNIdEMsWUFBdUMsV0FBb0M7UUFBcEMsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBckhsRSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGdCQUFXLEdBQTJDLElBQUksQ0FBQztRQUMzRCxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsZ0JBQVcsR0FBVyxRQUFRLENBQUM7UUFDL0IsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFNBQUksR0FBcUIsU0FBUyxDQUFDO1FBQ25DLG1CQUFjLEdBQTZELElBQUksQ0FBQztRQUNoRixzQkFBaUIsR0FBbUQsSUFBSSxDQUFDO1FBQ3pFLGVBQVUsR0FBa0MsSUFBSSxDQUFDO1FBQ2pELGtCQUFhLEdBQTRCLEVBQUUsQ0FBQztRQUM1QyxvQkFBZSxHQUFhLEVBQUUsQ0FBQztRQUNyQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVksQ0FBQztRQUN4QyxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzlDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUN4QyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQXlCLENBQUM7UUFDdkQsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFNUQscUJBQWdCLEdBQWlDLEVBQUUsQ0FBQztRQUNwRCxzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDekIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGVBQVUsR0FBa0IsSUFBSSxDQUFDO0lBK0Y2QyxDQUFDOzs7O0lBN0YvRSxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxDQUFnQjs7Y0FDdEIsVUFBVSxHQUFHLENBQUMsbUJBQUEsQ0FBQyxDQUFDLE1BQU0sRUFBb0IsQ0FBQyxDQUFDLEtBQUs7UUFDdkQsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdEcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQzs7OztJQUVELHNCQUFzQjs7Y0FDZCxvQkFBb0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQzVELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxvQkFBb0IsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLG9CQUFvQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDMUYsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxXQUFvQjtRQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLEtBQWE7UUFDOUIsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNqRDtJQUNILENBQUM7Ozs7OztJQUVELGFBQWEsQ0FBQyxVQUFrQixFQUFFLGVBQXlCOztjQUNuRCxrQkFBa0I7Ozs7O1FBQUcsQ0FBQyxHQUFzQixFQUFFLFVBQW9CLEVBQVcsRUFBRTtZQUNuRix5Q0FBeUM7WUFDekMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQzFDLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ3RDLE9BQU8sSUFBSSxDQUFDO2lCQUNiO2FBQ0Y7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsQ0FBQTs7Y0FDSyxpQkFBaUI7Ozs7O1FBQUcsQ0FBQyxHQUFzQixFQUFFLFVBQW9CLEVBQVksRUFBRTs7a0JBQzdFLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDOztrQkFDMUMsS0FBSyxHQUFHLENBQUMsbUJBQUEsR0FBRyxFQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTTs7OztZQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFDO1lBQy9ELE9BQU8sQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFBO1FBQ0QsSUFDRSxVQUFVO1lBQ1YsVUFBVSxDQUFDLE1BQU07WUFDakIsZUFBZSxDQUFDLE1BQU07WUFDdEIsSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTO1lBQ3ZCLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxlQUFlLENBQUMsRUFDL0M7O2tCQUNNLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsZUFBZSxDQUFDO1lBQ2xFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUNoQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDaEQ7SUFDSCxDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQ2hDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0QztJQUNILENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0YsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDaEMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsVUFBVSxDQUFDLE1BQWMsRUFBRSxNQUFrQztRQUMzRCxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsSUFBMkI7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBSUQsV0FBVyxDQUFDLE9BQXNCO2NBQzFCLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxPQUFPO1FBQ2pGLElBQUksYUFBYSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxhQUFhLElBQUksV0FBVyxJQUFJLGNBQWMsSUFBSSxpQkFBaUIsRUFBRTs7a0JBQ2pFLGdCQUFnQixHQUFpQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRTtnQkFDM0csT0FBTztvQkFDTCxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU87b0JBQ2xCLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTztvQkFDbEIsVUFBVSxFQUFFLENBQUMsQ0FBQyxVQUFVO29CQUN4QixxQkFBcUIsRUFBRSxJQUFJLENBQUMsY0FBYztvQkFDMUMsNEJBQTRCLEVBQUUsQ0FBQztpQkFDaEMsQ0FBQztZQUNKLENBQUMsRUFBQztZQUNGLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRTs7c0JBQzFDLGFBQWEsR0FBRyxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLE1BQU07O3NCQUN2RSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUc7Ozs7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDOztzQkFDbEUsWUFBWSxHQUFHO29CQUNuQixPQUFPLEVBQUUsYUFBYTtvQkFDdEIsT0FBTyxFQUFFLHNCQUFzQjtvQkFDL0IsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLHFCQUFxQixFQUFFLElBQUksQ0FBQyxpQkFBaUI7b0JBQzdDLDRCQUE0QixFQUFFLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2lCQUMxRTtnQkFDRCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDckM7WUFDRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7U0FDMUM7SUFDSCxDQUFDOzs7WUF6TkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFVBQVUsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDeEIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNEVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osNkJBQTZCLEVBQUUsTUFBTTtvQkFDckMsU0FBUyxFQUFFLGVBQWU7b0JBQzFCLFdBQVcsRUFBRSx1QkFBdUI7aUJBQ3JDO2FBQ0Y7Ozs7WUF4RVEsc0JBQXNCLHVCQStMaEIsSUFBSSxZQUFJLFFBQVE7Ozt5QkFySDVCLEtBQUs7MEJBQ0wsS0FBSzttQkFDTCxLQUFLOzBCQUNMLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLO21CQUNMLEtBQUs7NkJBQ0wsS0FBSztnQ0FDTCxLQUFLO3lCQUNMLEtBQUs7NEJBQ0wsS0FBSzs4QkFDTCxLQUFLO3VCQUNMLE1BQU07K0JBQ04sTUFBTTsyQkFDTixNQUFNO3lCQUNOLE1BQU07eUJBQ04sTUFBTTtzQ0FDTixTQUFTLFNBQUMsdUJBQXVCOzs7O0lBakJsQyxpREFBNEI7O0lBQzVCLGtEQUFvRTs7SUFDcEUsMkNBQXNCOztJQUN0QixrREFBd0M7O0lBQ3hDLGdEQUEyQjs7SUFDM0IsK0NBQTBCOztJQUMxQiwyQ0FBNEM7O0lBQzVDLHFEQUF5Rjs7SUFDekYsd0RBQWtGOztJQUNsRixpREFBMEQ7O0lBQzFELG9EQUFxRDs7SUFDckQsc0RBQXdDOztJQUN4QywrQ0FBMkQ7O0lBQzNELHVEQUFpRTs7SUFDakUsbURBQTJEOztJQUMzRCxpREFBMEU7O0lBQzFFLGlEQUE0RDs7SUFDNUQsOERBQXNGOztJQUN0Rix1REFBb0Q7O0lBQ3BELHdEQUF5Qjs7SUFDekIsd0RBQTBCOztJQUMxQixrREFBb0I7O0lBQ3BCLGlEQUFpQzs7SUErRnJCLGtEQUErRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEJBQ0tTUEFDRSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgem9vbU1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9uby1hbmltYXRpb24nO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56U2VsZWN0U2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3Qtc2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelNlbGVjdEl0ZW1JbnRlcmZhY2UsIE56U2VsZWN0TW9kZVR5cGUsIE56U2VsZWN0VG9wQ29udHJvbEl0ZW1UeXBlIH0gZnJvbSAnLi9zZWxlY3QudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1zZWxlY3QtdG9wLWNvbnRyb2wnLFxuICBleHBvcnRBczogJ256U2VsZWN0VG9wQ29udHJvbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBhbmltYXRpb25zOiBbem9vbU1vdGlvbl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZTogYFxuICAgIDwhLS1zaW5nbGUgbW9kZS0tPlxuICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cIm1vZGVcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidkZWZhdWx0J1wiPlxuICAgICAgICA8bnotc2VsZWN0LWl0ZW1cbiAgICAgICAgICAqbmdJZj1cImlzU2hvd1NpbmdsZUxhYmVsXCJcbiAgICAgICAgICBbZGVsZXRhYmxlXT1cImZhbHNlXCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiZmFsc2VcIlxuICAgICAgICAgIFtyZW1vdmVJY29uXT1cInJlbW92ZUljb25cIlxuICAgICAgICAgIFtsYWJlbF09XCJsaXN0T2ZUb3BJdGVtWzBdLm56TGFiZWxcIlxuICAgICAgICAgIFtjb250ZW50VGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tVGVtcGxhdGVcIlxuICAgICAgICAgIFtjb250ZW50VGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cImxpc3RPZlRvcEl0ZW1bMF1cIlxuICAgICAgICA+PC9uei1zZWxlY3QtaXRlbT5cbiAgICAgICAgPG56LXNlbGVjdC1zZWFyY2hcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgIFt2YWx1ZV09XCJpbnB1dFZhbHVlIVwiXG4gICAgICAgICAgW3Nob3dJbnB1dF09XCJvcGVuICYmIHNob3dTZWFyY2hcIlxuICAgICAgICAgIFttaXJyb3JTeW5jXT1cImZhbHNlXCJcbiAgICAgICAgICBbYXV0b2ZvY3VzXT1cImF1dG9mb2N1c1wiXG4gICAgICAgICAgW2ZvY3VzVHJpZ2dlcl09XCJvcGVuXCJcbiAgICAgICAgICAoaXNDb21wb3NpbmdDaGFuZ2UpPVwiaXNDb21wb3NpbmdDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgKHZhbHVlQ2hhbmdlKT1cIm9uSW5wdXRWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgPjwvbnotc2VsZWN0LXNlYXJjaD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxuICAgICAgICA8IS0tbXVsdGlwbGUgb3IgdGFncyBtb2RlLS0+XG4gICAgICAgIDxuei1zZWxlY3QtaXRlbVxuICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGxpc3RPZlNsaWNlZEl0ZW07IHRyYWNrQnk6IHRyYWNrVmFsdWVcIlxuICAgICAgICAgIFtAem9vbU1vdGlvbl1cbiAgICAgICAgICBbQC5kaXNhYmxlZF09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXG4gICAgICAgICAgW256Tm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxuICAgICAgICAgIFtyZW1vdmVJY29uXT1cInJlbW92ZUljb25cIlxuICAgICAgICAgIFtsYWJlbF09XCJpdGVtLm56TGFiZWxcIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCJpdGVtLm56RGlzYWJsZWQgfHwgZGlzYWJsZWRcIlxuICAgICAgICAgIFtjb250ZW50VGVtcGxhdGVPdXRsZXRdPVwiaXRlbS5jb250ZW50VGVtcGxhdGVPdXRsZXRcIlxuICAgICAgICAgIFtkZWxldGFibGVdPVwidHJ1ZVwiXG4gICAgICAgICAgW2NvbnRlbnRUZW1wbGF0ZU91dGxldENvbnRleHRdPVwiaXRlbS5jb250ZW50VGVtcGxhdGVPdXRsZXRDb250ZXh0XCJcbiAgICAgICAgICAoQHpvb21Nb3Rpb24uZG9uZSk9XCJvbkFuaW1hdGlvbkVuZCgpXCJcbiAgICAgICAgICAoZGVsZXRlKT1cIm9uRGVsZXRlSXRlbShpdGVtLmNvbnRlbnRUZW1wbGF0ZU91dGxldENvbnRleHQpXCJcbiAgICAgICAgPlxuICAgICAgICA8L256LXNlbGVjdC1pdGVtPlxuICAgICAgICA8bnotc2VsZWN0LXNlYXJjaFxuICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgW3ZhbHVlXT1cImlucHV0VmFsdWUhXCJcbiAgICAgICAgICBbYXV0b2ZvY3VzXT1cImF1dG9mb2N1c1wiXG4gICAgICAgICAgW3Nob3dJbnB1dF09XCJ0cnVlXCJcbiAgICAgICAgICBbbWlycm9yU3luY109XCJ0cnVlXCJcbiAgICAgICAgICBbZm9jdXNUcmlnZ2VyXT1cIm9wZW5cIlxuICAgICAgICAgIChpc0NvbXBvc2luZ0NoYW5nZSk9XCJpc0NvbXBvc2luZ0NoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICAodmFsdWVDaGFuZ2UpPVwib25JbnB1dFZhbHVlQ2hhbmdlKCRldmVudClcIlxuICAgICAgICA+PC9uei1zZWxlY3Qtc2VhcmNoPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG56LXNlbGVjdC1wbGFjZWhvbGRlciAqbmdJZj1cImlzU2hvd1BsYWNlaG9sZGVyXCIgW3BsYWNlaG9sZGVyXT1cInBsYWNlSG9sZGVyXCI+PC9uei1zZWxlY3QtcGxhY2Vob2xkZXI+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtc2VsZWN0b3JdJzogJ3RydWUnLFxuICAgICcoY2xpY2spJzogJ29uSG9zdENsaWNrKCknLFxuICAgICcoa2V5ZG93biknOiAnb25Ib3N0S2V5ZG93bigkZXZlbnQpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHNob3dTZWFyY2ggPSBmYWxzZTtcbiAgQElucHV0KCkgcGxhY2VIb2xkZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgb3BlbiA9IGZhbHNlO1xuICBASW5wdXQoKSBtYXhUYWdDb3VudDogbnVtYmVyID0gSW5maW5pdHk7XG4gIEBJbnB1dCgpIGF1dG9mb2N1cyA9IGZhbHNlO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBtb2RlOiBOelNlbGVjdE1vZGVUeXBlID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56U2VsZWN0SXRlbUludGVyZmFjZSB9PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBtYXhUYWdQbGFjZWhvbGRlcjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56U2FmZUFueVtdIH0+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIHJlbW92ZUljb246IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbGlzdE9mVG9wSXRlbTogTnpTZWxlY3RJdGVtSW50ZXJmYWNlW10gPSBbXTtcbiAgQElucHV0KCkgdG9rZW5TZXBhcmF0b3JzOiBzdHJpbmdbXSA9IFtdO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgdG9rZW5pemUgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgaW5wdXRWYWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgYW5pbWF0aW9uRW5kID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZGVsZXRlSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpTZWxlY3RJdGVtSW50ZXJmYWNlPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgb3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQFZpZXdDaGlsZChOelNlbGVjdFNlYXJjaENvbXBvbmVudCkgbnpTZWxlY3RTZWFyY2hDb21wb25lbnQhOiBOelNlbGVjdFNlYXJjaENvbXBvbmVudDtcbiAgbGlzdE9mU2xpY2VkSXRlbTogTnpTZWxlY3RUb3BDb250cm9sSXRlbVR5cGVbXSA9IFtdO1xuICBpc1Nob3dQbGFjZWhvbGRlciA9IHRydWU7XG4gIGlzU2hvd1NpbmdsZUxhYmVsID0gZmFsc2U7XG4gIGlzQ29tcG9zaW5nID0gZmFsc2U7XG4gIGlucHV0VmFsdWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIG9uSG9zdENsaWNrKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5vcGVuQ2hhbmdlLm5leHQoIXRoaXMub3Blbik7XG4gICAgfVxuICB9XG5cbiAgb25Ib3N0S2V5ZG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IChlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICBpZiAoZS5rZXlDb2RlID09PSBCQUNLU1BBQ0UgJiYgdGhpcy5tb2RlICE9PSAnZGVmYXVsdCcgJiYgIWlucHV0VmFsdWUgJiYgdGhpcy5saXN0T2ZUb3BJdGVtLmxlbmd0aCA+IDApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMub25EZWxldGVJdGVtKHRoaXMubGlzdE9mVG9wSXRlbVt0aGlzLmxpc3RPZlRvcEl0ZW0ubGVuZ3RoIC0gMV0pO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVRlbXBsYXRlVmFyaWFibGUoKTogdm9pZCB7XG4gICAgY29uc3QgaXNTZWxlY3RlZFZhbHVlRW1wdHkgPSB0aGlzLmxpc3RPZlRvcEl0ZW0ubGVuZ3RoID09PSAwO1xuICAgIHRoaXMuaXNTaG93UGxhY2Vob2xkZXIgPSBpc1NlbGVjdGVkVmFsdWVFbXB0eSAmJiAhdGhpcy5pc0NvbXBvc2luZyAmJiAhdGhpcy5pbnB1dFZhbHVlO1xuICAgIHRoaXMuaXNTaG93U2luZ2xlTGFiZWwgPSAhaXNTZWxlY3RlZFZhbHVlRW1wdHkgJiYgIXRoaXMuaXNDb21wb3NpbmcgJiYgIXRoaXMuaW5wdXRWYWx1ZTtcbiAgfVxuXG4gIGlzQ29tcG9zaW5nQ2hhbmdlKGlzQ29tcG9zaW5nOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pc0NvbXBvc2luZyA9IGlzQ29tcG9zaW5nO1xuICAgIHRoaXMudXBkYXRlVGVtcGxhdGVWYXJpYWJsZSgpO1xuICB9XG5cbiAgb25JbnB1dFZhbHVlQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuaW5wdXRWYWx1ZSkge1xuICAgICAgdGhpcy5pbnB1dFZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLnVwZGF0ZVRlbXBsYXRlVmFyaWFibGUoKTtcbiAgICAgIHRoaXMuaW5wdXRWYWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICAgIHRoaXMudG9rZW5TZXBhcmF0ZSh2YWx1ZSwgdGhpcy50b2tlblNlcGFyYXRvcnMpO1xuICAgIH1cbiAgfVxuXG4gIHRva2VuU2VwYXJhdGUoaW5wdXRWYWx1ZTogc3RyaW5nLCB0b2tlblNlcGFyYXRvcnM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgY29uc3QgaW5jbHVkZXNTZXBhcmF0b3JzID0gKHN0cjogc3RyaW5nIHwgc3RyaW5nW10sIHNlcGFyYXRvcnM6IHN0cmluZ1tdKTogYm9vbGVhbiA9PiB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWZvci1vZlxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXBhcmF0b3JzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmIChzdHIubGFzdEluZGV4T2Yoc2VwYXJhdG9yc1tpXSkgPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIGNvbnN0IHNwbGl0QnlTZXBhcmF0b3JzID0gKHN0cjogc3RyaW5nIHwgc3RyaW5nW10sIHNlcGFyYXRvcnM6IHN0cmluZ1tdKTogc3RyaW5nW10gPT4ge1xuICAgICAgY29uc3QgcmVnID0gbmV3IFJlZ0V4cChgWyR7c2VwYXJhdG9ycy5qb2luKCl9XWApO1xuICAgICAgY29uc3QgYXJyYXkgPSAoc3RyIGFzIHN0cmluZykuc3BsaXQocmVnKS5maWx0ZXIodG9rZW4gPT4gdG9rZW4pO1xuICAgICAgcmV0dXJuIFsuLi5uZXcgU2V0KGFycmF5KV07XG4gICAgfTtcbiAgICBpZiAoXG4gICAgICBpbnB1dFZhbHVlICYmXG4gICAgICBpbnB1dFZhbHVlLmxlbmd0aCAmJlxuICAgICAgdG9rZW5TZXBhcmF0b3JzLmxlbmd0aCAmJlxuICAgICAgdGhpcy5tb2RlICE9PSAnZGVmYXVsdCcgJiZcbiAgICAgIGluY2x1ZGVzU2VwYXJhdG9ycyhpbnB1dFZhbHVlLCB0b2tlblNlcGFyYXRvcnMpXG4gICAgKSB7XG4gICAgICBjb25zdCBsaXN0T2ZMYWJlbCA9IHNwbGl0QnlTZXBhcmF0b3JzKGlucHV0VmFsdWUsIHRva2VuU2VwYXJhdG9ycyk7XG4gICAgICB0aGlzLnRva2VuaXplLm5leHQobGlzdE9mTGFiZWwpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFySW5wdXRWYWx1ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelNlbGVjdFNlYXJjaENvbXBvbmVudCkge1xuICAgICAgdGhpcy5uelNlbGVjdFNlYXJjaENvbXBvbmVudC5jbGVhcklucHV0VmFsdWUoKTtcbiAgICB9XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelNlbGVjdFNlYXJjaENvbXBvbmVudCkge1xuICAgICAgdGhpcy5uelNlbGVjdFNlYXJjaENvbXBvbmVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGJsdXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpTZWxlY3RTZWFyY2hDb21wb25lbnQpIHtcbiAgICAgIHRoaXMubnpTZWxlY3RTZWFyY2hDb21wb25lbnQuYmx1cigpO1xuICAgIH1cbiAgfVxuXG4gIHRyYWNrVmFsdWUoX2luZGV4OiBudW1iZXIsIG9wdGlvbjogTnpTZWxlY3RUb3BDb250cm9sSXRlbVR5cGUpOiBOelNhZmVBbnkge1xuICAgIHJldHVybiBvcHRpb24ubnpWYWx1ZTtcbiAgfVxuXG4gIG9uRGVsZXRlSXRlbShpdGVtOiBOelNlbGVjdEl0ZW1JbnRlcmZhY2UpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIWl0ZW0ubnpEaXNhYmxlZCkge1xuICAgICAgdGhpcy5kZWxldGVJdGVtLm5leHQoaXRlbSk7XG4gICAgfVxuICB9XG5cbiAgb25BbmltYXRpb25FbmQoKTogdm9pZCB7XG4gICAgdGhpcy5hbmltYXRpb25FbmQubmV4dCgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IGxpc3RPZlRvcEl0ZW0sIG1heFRhZ0NvdW50LCBjdXN0b21UZW1wbGF0ZSwgbWF4VGFnUGxhY2Vob2xkZXIgfSA9IGNoYW5nZXM7XG4gICAgaWYgKGxpc3RPZlRvcEl0ZW0pIHtcbiAgICAgIHRoaXMudXBkYXRlVGVtcGxhdGVWYXJpYWJsZSgpO1xuICAgIH1cbiAgICBpZiAobGlzdE9mVG9wSXRlbSB8fCBtYXhUYWdDb3VudCB8fCBjdXN0b21UZW1wbGF0ZSB8fCBtYXhUYWdQbGFjZWhvbGRlcikge1xuICAgICAgY29uc3QgbGlzdE9mU2xpY2VkSXRlbTogTnpTZWxlY3RUb3BDb250cm9sSXRlbVR5cGVbXSA9IHRoaXMubGlzdE9mVG9wSXRlbS5zbGljZSgwLCB0aGlzLm1heFRhZ0NvdW50KS5tYXAobyA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbnpMYWJlbDogby5uekxhYmVsLFxuICAgICAgICAgIG56VmFsdWU6IG8ubnpWYWx1ZSxcbiAgICAgICAgICBuekRpc2FibGVkOiBvLm56RGlzYWJsZWQsXG4gICAgICAgICAgY29udGVudFRlbXBsYXRlT3V0bGV0OiB0aGlzLmN1c3RvbVRlbXBsYXRlLFxuICAgICAgICAgIGNvbnRlbnRUZW1wbGF0ZU91dGxldENvbnRleHQ6IG9cbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMubGlzdE9mVG9wSXRlbS5sZW5ndGggPiB0aGlzLm1heFRhZ0NvdW50KSB7XG4gICAgICAgIGNvbnN0IGV4Y2VlZGVkTGFiZWwgPSBgKyAke3RoaXMubGlzdE9mVG9wSXRlbS5sZW5ndGggLSB0aGlzLm1heFRhZ0NvdW50fSAuLi5gO1xuICAgICAgICBjb25zdCBsaXN0T2ZTZWxlY3RlZFZhbHVlID0gdGhpcy5saXN0T2ZUb3BJdGVtLm1hcChpdGVtID0+IGl0ZW0ubnpWYWx1ZSk7XG4gICAgICAgIGNvbnN0IGV4Y2VlZGVkSXRlbSA9IHtcbiAgICAgICAgICBuekxhYmVsOiBleGNlZWRlZExhYmVsLFxuICAgICAgICAgIG56VmFsdWU6ICckJF9fbnpfZXhjZWVkZWRfaXRlbScsXG4gICAgICAgICAgbnpEaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICBjb250ZW50VGVtcGxhdGVPdXRsZXQ6IHRoaXMubWF4VGFnUGxhY2Vob2xkZXIsXG4gICAgICAgICAgY29udGVudFRlbXBsYXRlT3V0bGV0Q29udGV4dDogbGlzdE9mU2VsZWN0ZWRWYWx1ZS5zbGljZSh0aGlzLm1heFRhZ0NvdW50KVxuICAgICAgICB9O1xuICAgICAgICBsaXN0T2ZTbGljZWRJdGVtLnB1c2goZXhjZWVkZWRJdGVtKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubGlzdE9mU2xpY2VkSXRlbSA9IGxpc3RPZlNsaWNlZEl0ZW07XG4gICAgfVxuICB9XG59XG4iXX0=