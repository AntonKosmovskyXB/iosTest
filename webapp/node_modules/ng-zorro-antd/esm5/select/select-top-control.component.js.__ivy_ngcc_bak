/**
 * @fileoverview added by tsickle
 * Generated from: select-top-control.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __read, __spread } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BACKSPACE } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, Component, EventEmitter, Host, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { zoomMotion } from 'ng-zorro-antd/core/animation';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { NzSelectSearchComponent } from './select-search.component';
var NzSelectTopControlComponent = /** @class */ (function () {
    function NzSelectTopControlComponent(noAnimation) {
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
    NzSelectTopControlComponent.prototype.onHostClick = /**
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this.openChange.next(!this.open);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.onHostKeydown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var inputValue = ((/** @type {?} */ (e.target))).value;
        if (e.keyCode === BACKSPACE && this.mode !== 'default' && !inputValue && this.listOfTopItem.length > 0) {
            e.preventDefault();
            this.onDeleteItem(this.listOfTopItem[this.listOfTopItem.length - 1]);
        }
    };
    /**
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.updateTemplateVariable = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isSelectedValueEmpty = this.listOfTopItem.length === 0;
        this.isShowPlaceholder = isSelectedValueEmpty && !this.isComposing && !this.inputValue;
        this.isShowSingleLabel = !isSelectedValueEmpty && !this.isComposing && !this.inputValue;
    };
    /**
     * @param {?} isComposing
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.isComposingChange = /**
     * @param {?} isComposing
     * @return {?}
     */
    function (isComposing) {
        this.isComposing = isComposing;
        this.updateTemplateVariable();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.onInputValueChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value !== this.inputValue) {
            this.inputValue = value;
            this.updateTemplateVariable();
            this.inputValueChange.emit(value);
            this.tokenSeparate(value, this.tokenSeparators);
        }
    };
    /**
     * @param {?} inputValue
     * @param {?} tokenSeparators
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.tokenSeparate = /**
     * @param {?} inputValue
     * @param {?} tokenSeparators
     * @return {?}
     */
    function (inputValue, tokenSeparators) {
        /** @type {?} */
        var includesSeparators = (/**
         * @param {?} str
         * @param {?} separators
         * @return {?}
         */
        function (str, separators) {
            // tslint:disable-next-line:prefer-for-of
            for (var i = 0; i < separators.length; ++i) {
                if (str.lastIndexOf(separators[i]) > 0) {
                    return true;
                }
            }
            return false;
        });
        /** @type {?} */
        var splitBySeparators = (/**
         * @param {?} str
         * @param {?} separators
         * @return {?}
         */
        function (str, separators) {
            /** @type {?} */
            var reg = new RegExp("[" + separators.join() + "]");
            /** @type {?} */
            var array = ((/** @type {?} */ (str))).split(reg).filter((/**
             * @param {?} token
             * @return {?}
             */
            function (token) { return token; }));
            return __spread(new Set(array));
        });
        if (inputValue &&
            inputValue.length &&
            tokenSeparators.length &&
            this.mode !== 'default' &&
            includesSeparators(inputValue, tokenSeparators)) {
            /** @type {?} */
            var listOfLabel = splitBySeparators(inputValue, tokenSeparators);
            this.tokenize.next(listOfLabel);
        }
    };
    /**
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.clearInputValue = /**
     * @return {?}
     */
    function () {
        if (this.nzSelectSearchComponent) {
            this.nzSelectSearchComponent.clearInputValue();
        }
    };
    /**
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.focus = /**
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
    NzSelectTopControlComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        if (this.nzSelectSearchComponent) {
            this.nzSelectSearchComponent.blur();
        }
    };
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.trackValue = /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    function (_index, option) {
        return option.nzValue;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.onDeleteItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!this.disabled && !item.nzDisabled) {
            this.deleteItem.next(item);
        }
    };
    /**
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.onAnimationEnd = /**
     * @return {?}
     */
    function () {
        this.animationEnd.next();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSelectTopControlComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        var listOfTopItem = changes.listOfTopItem, maxTagCount = changes.maxTagCount, customTemplate = changes.customTemplate, maxTagPlaceholder = changes.maxTagPlaceholder;
        if (listOfTopItem) {
            this.updateTemplateVariable();
        }
        if (listOfTopItem || maxTagCount || customTemplate || maxTagPlaceholder) {
            /** @type {?} */
            var listOfSlicedItem = this.listOfTopItem.slice(0, this.maxTagCount).map((/**
             * @param {?} o
             * @return {?}
             */
            function (o) {
                return {
                    nzLabel: o.nzLabel,
                    nzValue: o.nzValue,
                    nzDisabled: o.nzDisabled,
                    contentTemplateOutlet: _this.customTemplate,
                    contentTemplateOutletContext: o
                };
            }));
            if (this.listOfTopItem.length > this.maxTagCount) {
                /** @type {?} */
                var exceededLabel = "+ " + (this.listOfTopItem.length - this.maxTagCount) + " ...";
                /** @type {?} */
                var listOfSelectedValue = this.listOfTopItem.map((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.nzValue; }));
                /** @type {?} */
                var exceededItem = {
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
    };
    NzSelectTopControlComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-select-top-control',
                    exportAs: 'nzSelectTopControl',
                    preserveWhitespaces: false,
                    animations: [zoomMotion],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "\n    <!--single mode-->\n    <ng-container [ngSwitch]=\"mode\">\n      <ng-container *ngSwitchCase=\"'default'\">\n        <nz-select-item\n          *ngIf=\"isShowSingleLabel\"\n          [deletable]=\"false\"\n          [disabled]=\"false\"\n          [removeIcon]=\"removeIcon\"\n          [label]=\"listOfTopItem[0].nzLabel\"\n          [contentTemplateOutlet]=\"customTemplate\"\n          [contentTemplateOutletContext]=\"listOfTopItem[0]\"\n        ></nz-select-item>\n        <nz-select-search\n          [disabled]=\"disabled\"\n          [value]=\"inputValue!\"\n          [showInput]=\"open && showSearch\"\n          [mirrorSync]=\"false\"\n          [autofocus]=\"autofocus\"\n          [focusTrigger]=\"open\"\n          (isComposingChange)=\"isComposingChange($event)\"\n          (valueChange)=\"onInputValueChange($event)\"\n        ></nz-select-search>\n      </ng-container>\n      <ng-container *ngSwitchDefault>\n        <!--multiple or tags mode-->\n        <nz-select-item\n          *ngFor=\"let item of listOfSlicedItem; trackBy: trackValue\"\n          [@zoomMotion]\n          [@.disabled]=\"noAnimation?.nzNoAnimation\"\n          [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n          [removeIcon]=\"removeIcon\"\n          [label]=\"item.nzLabel\"\n          [disabled]=\"item.nzDisabled || disabled\"\n          [contentTemplateOutlet]=\"item.contentTemplateOutlet\"\n          [deletable]=\"true\"\n          [contentTemplateOutletContext]=\"item.contentTemplateOutletContext\"\n          (@zoomMotion.done)=\"onAnimationEnd()\"\n          (delete)=\"onDeleteItem(item.contentTemplateOutletContext)\"\n        >\n        </nz-select-item>\n        <nz-select-search\n          [disabled]=\"disabled\"\n          [value]=\"inputValue!\"\n          [autofocus]=\"autofocus\"\n          [showInput]=\"true\"\n          [mirrorSync]=\"true\"\n          [focusTrigger]=\"open\"\n          (isComposingChange)=\"isComposingChange($event)\"\n          (valueChange)=\"onInputValueChange($event)\"\n        ></nz-select-search>\n      </ng-container>\n    </ng-container>\n    <nz-select-placeholder *ngIf=\"isShowPlaceholder\" [placeholder]=\"placeHolder\"></nz-select-placeholder>\n  ",
                    host: {
                        '[class.ant-select-selector]': 'true',
                        '(click)': 'onHostClick()',
                        '(keydown)': 'onHostKeydown($event)'
                    }
                }] }
    ];
    /** @nocollapse */
    NzSelectTopControlComponent.ctorParameters = function () { return [
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
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
    return NzSelectTopControlComponent;
}());
export { NzSelectTopControlComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2VsZWN0LyIsInNvdXJjZXMiOlsic2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2xELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUVMLFFBQVEsRUFDUixNQUFNLEVBR04sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFekUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHcEU7SUEwTEUscUNBQXVDLFdBQW9DO1FBQXBDLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQXJIbEUsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixnQkFBVyxHQUEyQyxJQUFJLENBQUM7UUFDM0QsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLGdCQUFXLEdBQVcsUUFBUSxDQUFDO1FBQy9CLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixTQUFJLEdBQXFCLFNBQVMsQ0FBQztRQUNuQyxtQkFBYyxHQUE2RCxJQUFJLENBQUM7UUFDaEYsc0JBQWlCLEdBQW1ELElBQUksQ0FBQztRQUN6RSxlQUFVLEdBQWtDLElBQUksQ0FBQztRQUNqRCxrQkFBYSxHQUE0QixFQUFFLENBQUM7UUFDNUMsb0JBQWUsR0FBYSxFQUFFLENBQUM7UUFDckIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7UUFDeEMscUJB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QUNMLEtBQUs7a0NBQ0wsS0FBSzsyQkFDTCxNQUFNO21DQUNOLE1BQU07K0JBQ04sTUFBTTs2QkFDTixNQUFNOzZCQUNOLE1BQU07MENBQ04sU0FBUyxTQUFDLHVCQUF1Qjs7SUFvSXBDLGtDQUFDO0NBQUEsQUExTkQsSUEwTkM7U0F0SlksMkJBQTJCOzs7SUFDdEMsaURBQTRCOztJQUM1QixrREFBb0U7O0lBQ3BFLDJDQUFzQjs7SUFDdEIsa0RBQXdDOztJQUN4QyxnREFBMkI7O0lBQzNCLCtDQUEwQjs7SUFDMUIsMkNBQTRDOztJQUM1QyxxREFBeUY7O0lBQ3pGLHdEQUFrRjs7SUFDbEYsaURBQTBEOztJQUMxRCxvREFBcUQ7O0lBQ3JELHNEQUF3Qzs7SUFDeEMsK0NBQTJEOztJQUMzRCx1REFBaUU7O0lBQ2pFLG1EQUEyRDs7SUFDM0QsaURBQTBFOztJQUMxRSxpREFBNEQ7O0lBQzVELDhEQUFzRjs7SUFDdEYsdURBQW9EOztJQUNwRCx3REFBeUI7O0lBQ3pCLHdEQUEwQjs7SUFDMUIsa0RBQW9COztJQUNwQixpREFBaUM7O0lBK0ZyQixrREFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBCQUNLU1BBQ0UgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHpvb21Nb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvYW5pbWF0aW9uJztcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbm8tYW5pbWF0aW9uJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOelNlbGVjdFNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0LXNlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpTZWxlY3RJdGVtSW50ZXJmYWNlLCBOelNlbGVjdE1vZGVUeXBlLCBOelNlbGVjdFRvcENvbnRyb2xJdGVtVHlwZSB9IGZyb20gJy4vc2VsZWN0LnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotc2VsZWN0LXRvcC1jb250cm9sJyxcbiAgZXhwb3J0QXM6ICduelNlbGVjdFRvcENvbnRyb2wnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgYW5pbWF0aW9uczogW3pvb21Nb3Rpb25dLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8IS0tc2luZ2xlIG1vZGUtLT5cbiAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJtb2RlXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInZGVmYXVsdCdcIj5cbiAgICAgICAgPG56LXNlbGVjdC1pdGVtXG4gICAgICAgICAgKm5nSWY9XCJpc1Nob3dTaW5nbGVMYWJlbFwiXG4gICAgICAgICAgW2RlbGV0YWJsZV09XCJmYWxzZVwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImZhbHNlXCJcbiAgICAgICAgICBbcmVtb3ZlSWNvbl09XCJyZW1vdmVJY29uXCJcbiAgICAgICAgICBbbGFiZWxdPVwibGlzdE9mVG9wSXRlbVswXS5uekxhYmVsXCJcbiAgICAgICAgICBbY29udGVudFRlbXBsYXRlT3V0bGV0XT1cImN1c3RvbVRlbXBsYXRlXCJcbiAgICAgICAgICBbY29udGVudFRlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJsaXN0T2ZUb3BJdGVtWzBdXCJcbiAgICAgICAgPjwvbnotc2VsZWN0LWl0ZW0+XG4gICAgICAgIDxuei1zZWxlY3Qtc2VhcmNoXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICBbdmFsdWVdPVwiaW5wdXRWYWx1ZSFcIlxuICAgICAgICAgIFtzaG93SW5wdXRdPVwib3BlbiAmJiBzaG93U2VhcmNoXCJcbiAgICAgICAgICBbbWlycm9yU3luY109XCJmYWxzZVwiXG4gICAgICAgICAgW2F1dG9mb2N1c109XCJhdXRvZm9jdXNcIlxuICAgICAgICAgIFtmb2N1c1RyaWdnZXJdPVwib3BlblwiXG4gICAgICAgICAgKGlzQ29tcG9zaW5nQ2hhbmdlKT1cImlzQ29tcG9zaW5nQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAgICh2YWx1ZUNoYW5nZSk9XCJvbklucHV0VmFsdWVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgID48L256LXNlbGVjdC1zZWFyY2g+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdD5cbiAgICAgICAgPCEtLW11bHRpcGxlIG9yIHRhZ3MgbW9kZS0tPlxuICAgICAgICA8bnotc2VsZWN0LWl0ZW1cbiAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBsaXN0T2ZTbGljZWRJdGVtOyB0cmFja0J5OiB0cmFja1ZhbHVlXCJcbiAgICAgICAgICBbQHpvb21Nb3Rpb25dXG4gICAgICAgICAgW0AuZGlzYWJsZWRdPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxuICAgICAgICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcbiAgICAgICAgICBbcmVtb3ZlSWNvbl09XCJyZW1vdmVJY29uXCJcbiAgICAgICAgICBbbGFiZWxdPVwiaXRlbS5uekxhYmVsXCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiaXRlbS5uekRpc2FibGVkIHx8IGRpc2FibGVkXCJcbiAgICAgICAgICBbY29udGVudFRlbXBsYXRlT3V0bGV0XT1cIml0ZW0uY29udGVudFRlbXBsYXRlT3V0bGV0XCJcbiAgICAgICAgICBbZGVsZXRhYmxlXT1cInRydWVcIlxuICAgICAgICAgIFtjb250ZW50VGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIml0ZW0uY29udGVudFRlbXBsYXRlT3V0bGV0Q29udGV4dFwiXG4gICAgICAgICAgKEB6b29tTW90aW9uLmRvbmUpPVwib25BbmltYXRpb25FbmQoKVwiXG4gICAgICAgICAgKGRlbGV0ZSk9XCJvbkRlbGV0ZUl0ZW0oaXRlbS5jb250ZW50VGVtcGxhdGVPdXRsZXRDb250ZXh0KVwiXG4gICAgICAgID5cbiAgICAgICAgPC9uei1zZWxlY3QtaXRlbT5cbiAgICAgICAgPG56LXNlbGVjdC1zZWFyY2hcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgIFt2YWx1ZV09XCJpbnB1dFZhbHVlIVwiXG4gICAgICAgICAgW2F1dG9mb2N1c109XCJhdXRvZm9jdXNcIlxuICAgICAgICAgIFtzaG93SW5wdXRdPVwidHJ1ZVwiXG4gICAgICAgICAgW21pcnJvclN5bmNdPVwidHJ1ZVwiXG4gICAgICAgICAgW2ZvY3VzVHJpZ2dlcl09XCJvcGVuXCJcbiAgICAgICAgICAoaXNDb21wb3NpbmdDaGFuZ2UpPVwiaXNDb21wb3NpbmdDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgKHZhbHVlQ2hhbmdlKT1cIm9uSW5wdXRWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgPjwvbnotc2VsZWN0LXNlYXJjaD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuei1zZWxlY3QtcGxhY2Vob2xkZXIgKm5nSWY9XCJpc1Nob3dQbGFjZWhvbGRlclwiIFtwbGFjZWhvbGRlcl09XCJwbGFjZUhvbGRlclwiPjwvbnotc2VsZWN0LXBsYWNlaG9sZGVyPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXNlbGVjdG9yXSc6ICd0cnVlJyxcbiAgICAnKGNsaWNrKSc6ICdvbkhvc3RDbGljaygpJyxcbiAgICAnKGtleWRvd24pJzogJ29uSG9zdEtleWRvd24oJGV2ZW50KSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBzaG93U2VhcmNoID0gZmFsc2U7XG4gIEBJbnB1dCgpIHBsYWNlSG9sZGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG9wZW4gPSBmYWxzZTtcbiAgQElucHV0KCkgbWF4VGFnQ291bnQ6IG51bWJlciA9IEluZmluaXR5O1xuICBASW5wdXQoKSBhdXRvZm9jdXMgPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbW9kZTogTnpTZWxlY3RNb2RlVHlwZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelNlbGVjdEl0ZW1JbnRlcmZhY2UgfT4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbWF4VGFnUGxhY2Vob2xkZXI6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelNhZmVBbnlbXSB9PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSByZW1vdmVJY29uOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGxpc3RPZlRvcEl0ZW06IE56U2VsZWN0SXRlbUludGVyZmFjZVtdID0gW107XG4gIEBJbnB1dCgpIHRva2VuU2VwYXJhdG9yczogc3RyaW5nW10gPSBbXTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHRva2VuaXplID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGlucHV0VmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGFuaW1hdGlvbkVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGRlbGV0ZUl0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPE56U2VsZWN0SXRlbUludGVyZmFjZT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBWaWV3Q2hpbGQoTnpTZWxlY3RTZWFyY2hDb21wb25lbnQpIG56U2VsZWN0U2VhcmNoQ29tcG9uZW50ITogTnpTZWxlY3RTZWFyY2hDb21wb25lbnQ7XG4gIGxpc3RPZlNsaWNlZEl0ZW06IE56U2VsZWN0VG9wQ29udHJvbEl0ZW1UeXBlW10gPSBbXTtcbiAgaXNTaG93UGxhY2Vob2xkZXIgPSB0cnVlO1xuICBpc1Nob3dTaW5nbGVMYWJlbCA9IGZhbHNlO1xuICBpc0NvbXBvc2luZyA9IGZhbHNlO1xuICBpbnB1dFZhbHVlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICBvbkhvc3RDbGljaygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMub3BlbkNoYW5nZS5uZXh0KCF0aGlzLm9wZW4pO1xuICAgIH1cbiAgfVxuXG4gIG9uSG9zdEtleWRvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPSAoZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gQkFDS1NQQUNFICYmIHRoaXMubW9kZSAhPT0gJ2RlZmF1bHQnICYmICFpbnB1dFZhbHVlICYmIHRoaXMubGlzdE9mVG9wSXRlbS5sZW5ndGggPiAwKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLm9uRGVsZXRlSXRlbSh0aGlzLmxpc3RPZlRvcEl0ZW1bdGhpcy5saXN0T2ZUb3BJdGVtLmxlbmd0aCAtIDFdKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVUZW1wbGF0ZVZhcmlhYmxlKCk6IHZvaWQge1xuICAgIGNvbnN0IGlzU2VsZWN0ZWRWYWx1ZUVtcHR5ID0gdGhpcy5saXN0T2ZUb3BJdGVtLmxlbmd0aCA9PT0gMDtcbiAgICB0aGlzLmlzU2hvd1BsYWNlaG9sZGVyID0gaXNTZWxlY3RlZFZhbHVlRW1wdHkgJiYgIXRoaXMuaXNDb21wb3NpbmcgJiYgIXRoaXMuaW5wdXRWYWx1ZTtcbiAgICB0aGlzLmlzU2hvd1NpbmdsZUxhYmVsID0gIWlzU2VsZWN0ZWRWYWx1ZUVtcHR5ICYmICF0aGlzLmlzQ29tcG9zaW5nICYmICF0aGlzLmlucHV0VmFsdWU7XG4gIH1cblxuICBpc0NvbXBvc2luZ0NoYW5nZShpc0NvbXBvc2luZzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaXNDb21wb3NpbmcgPSBpc0NvbXBvc2luZztcbiAgICB0aGlzLnVwZGF0ZVRlbXBsYXRlVmFyaWFibGUoKTtcbiAgfVxuXG4gIG9uSW5wdXRWYWx1ZUNoYW5nZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLmlucHV0VmFsdWUpIHtcbiAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy51cGRhdGVUZW1wbGF0ZVZhcmlhYmxlKCk7XG4gICAgICB0aGlzLmlucHV0VmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgICB0aGlzLnRva2VuU2VwYXJhdGUodmFsdWUsIHRoaXMudG9rZW5TZXBhcmF0b3JzKTtcbiAgICB9XG4gIH1cblxuICB0b2tlblNlcGFyYXRlKGlucHV0VmFsdWU6IHN0cmluZywgdG9rZW5TZXBhcmF0b3JzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIGNvbnN0IGluY2x1ZGVzU2VwYXJhdG9ycyA9IChzdHI6IHN0cmluZyB8IHN0cmluZ1tdLCBzZXBhcmF0b3JzOiBzdHJpbmdbXSk6IGJvb2xlYW4gPT4ge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1mb3Itb2ZcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VwYXJhdG9ycy5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAoc3RyLmxhc3RJbmRleE9mKHNlcGFyYXRvcnNbaV0pID4gMCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBjb25zdCBzcGxpdEJ5U2VwYXJhdG9ycyA9IChzdHI6IHN0cmluZyB8IHN0cmluZ1tdLCBzZXBhcmF0b3JzOiBzdHJpbmdbXSk6IHN0cmluZ1tdID0+IHtcbiAgICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoYFske3NlcGFyYXRvcnMuam9pbigpfV1gKTtcbiAgICAgIGNvbnN0IGFycmF5ID0gKHN0ciBhcyBzdHJpbmcpLnNwbGl0KHJlZykuZmlsdGVyKHRva2VuID0+IHRva2VuKTtcbiAgICAgIHJldHVybiBbLi4ubmV3IFNldChhcnJheSldO1xuICAgIH07XG4gICAgaWYgKFxuICAgICAgaW5wdXRWYWx1ZSAmJlxuICAgICAgaW5wdXRWYWx1ZS5sZW5ndGggJiZcbiAgICAgIHRva2VuU2VwYXJhdG9ycy5sZW5ndGggJiZcbiAgICAgIHRoaXMubW9kZSAhPT0gJ2RlZmF1bHQnICYmXG4gICAgICBpbmNsdWRlc1NlcGFyYXRvcnMoaW5wdXRWYWx1ZSwgdG9rZW5TZXBhcmF0b3JzKVxuICAgICkge1xuICAgICAgY29uc3QgbGlzdE9mTGFiZWwgPSBzcGxpdEJ5U2VwYXJhdG9ycyhpbnB1dFZhbHVlLCB0b2tlblNlcGFyYXRvcnMpO1xuICAgICAgdGhpcy50b2tlbml6ZS5uZXh0KGxpc3RPZkxhYmVsKTtcbiAgICB9XG4gIH1cblxuICBjbGVhcklucHV0VmFsdWUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpTZWxlY3RTZWFyY2hDb21wb25lbnQpIHtcbiAgICAgIHRoaXMubnpTZWxlY3RTZWFyY2hDb21wb25lbnQuY2xlYXJJbnB1dFZhbHVlKCk7XG4gICAgfVxuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpTZWxlY3RTZWFyY2hDb21wb25lbnQpIHtcbiAgICAgIHRoaXMubnpTZWxlY3RTZWFyY2hDb21wb25lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBibHVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56U2VsZWN0U2VhcmNoQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLm56U2VsZWN0U2VhcmNoQ29tcG9uZW50LmJsdXIoKTtcbiAgICB9XG4gIH1cblxuICB0cmFja1ZhbHVlKF9pbmRleDogbnVtYmVyLCBvcHRpb246IE56U2VsZWN0VG9wQ29udHJvbEl0ZW1UeXBlKTogTnpTYWZlQW55IHtcbiAgICByZXR1cm4gb3B0aW9uLm56VmFsdWU7XG4gIH1cblxuICBvbkRlbGV0ZUl0ZW0oaXRlbTogTnpTZWxlY3RJdGVtSW50ZXJmYWNlKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICFpdGVtLm56RGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZGVsZXRlSXRlbS5uZXh0KGl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIG9uQW5pbWF0aW9uRW5kKCk6IHZvaWQge1xuICAgIHRoaXMuYW5pbWF0aW9uRW5kLm5leHQoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBsaXN0T2ZUb3BJdGVtLCBtYXhUYWdDb3VudCwgY3VzdG9tVGVtcGxhdGUsIG1heFRhZ1BsYWNlaG9sZGVyIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChsaXN0T2ZUb3BJdGVtKSB7XG4gICAgICB0aGlzLnVwZGF0ZVRlbXBsYXRlVmFyaWFibGUoKTtcbiAgICB9XG4gICAgaWYgKGxpc3RPZlRvcEl0ZW0gfHwgbWF4VGFnQ291bnQgfHwgY3VzdG9tVGVtcGxhdGUgfHwgbWF4VGFnUGxhY2Vob2xkZXIpIHtcbiAgICAgIGNvbnN0IGxpc3RPZlNsaWNlZEl0ZW06IE56U2VsZWN0VG9wQ29udHJvbEl0ZW1UeXBlW10gPSB0aGlzLmxpc3RPZlRvcEl0ZW0uc2xpY2UoMCwgdGhpcy5tYXhUYWdDb3VudCkubWFwKG8gPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG56TGFiZWw6IG8ubnpMYWJlbCxcbiAgICAgICAgICBuelZhbHVlOiBvLm56VmFsdWUsXG4gICAgICAgICAgbnpEaXNhYmxlZDogby5uekRpc2FibGVkLFxuICAgICAgICAgIGNvbnRlbnRUZW1wbGF0ZU91dGxldDogdGhpcy5jdXN0b21UZW1wbGF0ZSxcbiAgICAgICAgICBjb250ZW50VGVtcGxhdGVPdXRsZXRDb250ZXh0OiBvXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmxpc3RPZlRvcEl0ZW0ubGVuZ3RoID4gdGhpcy5tYXhUYWdDb3VudCkge1xuICAgICAgICBjb25zdCBleGNlZWRlZExhYmVsID0gYCsgJHt0aGlzLmxpc3RPZlRvcEl0ZW0ubGVuZ3RoIC0gdGhpcy5tYXhUYWdDb3VudH0gLi4uYDtcbiAgICAgICAgY29uc3QgbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IHRoaXMubGlzdE9mVG9wSXRlbS5tYXAoaXRlbSA9PiBpdGVtLm56VmFsdWUpO1xuICAgICAgICBjb25zdCBleGNlZWRlZEl0ZW0gPSB7XG4gICAgICAgICAgbnpMYWJlbDogZXhjZWVkZWRMYWJlbCxcbiAgICAgICAgICBuelZhbHVlOiAnJCRfX256X2V4Y2VlZGVkX2l0ZW0nLFxuICAgICAgICAgIG56RGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgY29udGVudFRlbXBsYXRlT3V0bGV0OiB0aGlzLm1heFRhZ1BsYWNlaG9sZGVyLFxuICAgICAgICAgIGNvbnRlbnRUZW1wbGF0ZU91dGxldENvbnRleHQ6IGxpc3RPZlNlbGVjdGVkVmFsdWUuc2xpY2UodGhpcy5tYXhUYWdDb3VudClcbiAgICAgICAgfTtcbiAgICAgICAgbGlzdE9mU2xpY2VkSXRlbS5wdXNoKGV4Y2VlZGVkSXRlbSk7XG4gICAgICB9XG4gICAgICB0aGlzLmxpc3RPZlNsaWNlZEl0ZW0gPSBsaXN0T2ZTbGljZWRJdGVtO1xuICAgIH1cbiAgfVxufVxuIl19