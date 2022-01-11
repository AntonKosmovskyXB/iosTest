/**
 * @fileoverview added by tsickle
 * Generated from: modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __rest } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { NzModalFooterDirective } from './modal-footer.directive';
import { NzModalService } from './modal.service';
import { getConfigFromComponent } from './utils';
/**
 * @template T, R
 */
var NzModalComponent = /** @class */ (function () {
    function NzModalComponent(cdr, modal, viewContainerRef) {
        this.cdr = cdr;
        this.modal = modal;
        this.viewContainerRef = viewContainerRef;
        this.nzVisible = false;
        this.nzClosable = true;
        this.nzOkLoading = false;
        this.nzOkDisabled = false;
        this.nzCancelDisabled = false;
        this.nzCancelLoading = false;
        this.nzKeyboard = true;
        this.nzNoAnimation = false;
        this.nzZIndex = 1000;
        this.nzWidth = 520;
        this.nzCloseIcon = 'close';
        this.nzOkType = 'primary';
        this.nzIconType = 'question-circle'; // Confirm Modal ONLY
        // Confirm Modal ONLY
        this.nzModalType = 'default';
        this.nzAutofocus = 'auto';
        // TODO(@hsuanxyz) Input will not be supported
        this.nzOnOk = new EventEmitter();
        // TODO(@hsuanxyz) Input will not be supported
        this.nzOnCancel = new EventEmitter();
        this.nzAfterOpen = new EventEmitter();
        this.nzAfterClose = new EventEmitter();
        this.nzVisibleChange = new EventEmitter();
        this.modalRef = null;
    }
    Object.defineProperty(NzModalComponent.prototype, "modalFooter", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value && value.templateRef) {
                this.setFooterWithTemplate(value.templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalComponent.prototype, "afterOpen", {
        get: /**
         * @return {?}
         */
        function () {
            // Observable alias for nzAfterOpen
            return this.nzAfterOpen.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalComponent.prototype, "afterClose", {
        get: /**
         * @return {?}
         */
        function () {
            // Observable alias for nzAfterClose
            return this.nzAfterClose.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzModalComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        if (!this.nzVisible) {
            this.nzVisible = true;
            this.nzVisibleChange.emit(true);
        }
        if (!this.modalRef) {
            /** @type {?} */
            var config = this.getConfig();
            this.modalRef = this.modal.create(config);
        }
    };
    /**
     * @param {?=} result
     * @return {?}
     */
    NzModalComponent.prototype.close = /**
     * @param {?=} result
     * @return {?}
     */
    function (result) {
        if (this.nzVisible) {
            this.nzVisible = false;
            this.nzVisibleChange.emit(false);
        }
        if (this.modalRef) {
            this.modalRef.close(result);
            this.modalRef = null;
        }
    };
    /**
     * @param {?=} result
     * @return {?}
     */
    NzModalComponent.prototype.destroy = /**
     * @param {?=} result
     * @return {?}
     */
    function (result) {
        this.close(result);
    };
    /**
     * @return {?}
     */
    NzModalComponent.prototype.triggerOk = /**
     * @return {?}
     */
    function () {
        var _a;
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.triggerOk();
    };
    /**
     * @return {?}
     */
    NzModalComponent.prototype.triggerCancel = /**
     * @return {?}
     */
    function () {
        var _a;
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.triggerCancel();
    };
    /**
     * @return {?}
     */
    NzModalComponent.prototype.getContentComponent = /**
     * @return {?}
     */
    function () {
        var _a;
        return (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.getContentComponent();
    };
    /**
     * @return {?}
     */
    NzModalComponent.prototype.getElement = /**
     * @return {?}
     */
    function () {
        var _a;
        return (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.getElement();
    };
    /**
     * @return {?}
     */
    NzModalComponent.prototype.getModalRef = /**
     * @return {?}
     */
    function () {
        return this.modalRef;
    };
    /**
     * @private
     * @param {?} templateRef
     * @return {?}
     */
    NzModalComponent.prototype.setFooterWithTemplate = /**
     * @private
     * @param {?} templateRef
     * @return {?}
     */
    function (templateRef) {
        var _this = this;
        this.nzFooter = templateRef;
        if (this.modalRef) {
            // If modalRef already created, set the footer in next tick
            Promise.resolve().then((/**
             * @return {?}
             */
            function () {
                (/** @type {?} */ (_this.modalRef)).updateConfig({
                    nzFooter: _this.nzFooter
                });
            }));
        }
        this.cdr.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    NzModalComponent.prototype.getConfig = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var componentConfig = getConfigFromComponent(this);
        componentConfig.nzViewContainerRef = this.viewContainerRef;
        if (!this.nzContent) {
            componentConfig.nzContent = this.contentTemplateRef;
        }
        return componentConfig;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzModalComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzVisible = changes.nzVisible, otherChanges = __rest(changes, ["nzVisible"]);
        if (Object.keys(otherChanges).length && this.modalRef) {
            this.modalRef.updateConfig(getConfigFromComponent(this));
        }
        if (nzVisible) {
            if (this.nzVisible) {
                this.open();
            }
            else {
                this.close();
            }
        }
    };
    /**
     * @return {?}
     */
    NzModalComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _a;
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a._finishDialogClose();
    };
    NzModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-modal',
                    exportAs: 'nzModal',
                    template: " <ng-template><ng-content></ng-content></ng-template> ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzModalComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzModalService },
        { type: ViewContainerRef }
    ]; };
    NzModalComponent.propDecorators = {
        nzMask: [{ type: Input }],
        nzMaskClosable: [{ type: Input }],
        nzCloseOnNavigation: [{ type: Input }],
        nzVisible: [{ type: Input }],
        nzClosable: [{ type: Input }],
        nzOkLoading: [{ type: Input }],
        nzOkDisabled: [{ type: Input }],
        nzCancelDisabled: [{ type: Input }],
        nzCancelLoading: [{ type: Input }],
        nzKeyboard: [{ type: Input }],
        nzNoAnimation: [{ type: Input }],
        nzContent: [{ type: Input }],
        nzComponentParams: [{ type: Input }],
        nzFooter: [{ type: Input }],
        nzGetContainer: [{ type: Input }],
        nzZIndex: [{ type: Input }],
        nzWidth: [{ type: Input }],
        nzWrapClassName: [{ type: Input }],
        nzClassName: [{ type: Input }],
        nzStyle: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzCloseIcon: [{ type: Input }],
        nzMaskStyle: [{ type: Input }],
        nzBodyStyle: [{ type: Input }],
        nzOkText: [{ type: Input }],
        nzCancelText: [{ type: Input }],
        nzOkType: [{ type: Input }],
        nzIconType: [{ type: Input }],
        nzModalType: [{ type: Input }],
        nzAutofocus: [{ type: Input }],
        nzOnOk: [{ type: Input }, { type: Output }],
        nzOnCancel: [{ type: Input }, { type: Output }],
        nzAfterOpen: [{ type: Output }],
        nzAfterClose: [{ type: Output }],
        nzVisibleChange: [{ type: Output }],
        contentTemplateRef: [{ type: ViewChild, args: [TemplateRef, { static: true },] }],
        modalFooter: [{ type: ContentChild, args: [NzModalFooterDirective,] }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzMask", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzMaskClosable", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzCloseOnNavigation", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzVisible", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzClosable", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzOkLoading", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzOkDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzCancelDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzCancelLoading", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzKeyboard", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzModalComponent.prototype, "nzNoAnimation", void 0);
    return NzModalComponent;
}());
export { NzModalComponent };
if (false) {
    /** @type {?} */
    NzModalComponent.ngAcceptInputType_nzMask;
    /** @type {?} */
    NzModalComponent.ngAcceptInputType_nzMaskClosable;
    /** @type {?} */
    NzModalComponent.ngAcceptInputType_nzCloseOnNavigation;
    /** @type {?} */
    NzModalComponent.ngAcceptInputType_nzVisible;
    /** @type {?} */
    NzModalComponent.ngAcceptInputType_nzClosable;
    /** @type {?} */
    NzModalComponent.ngAcceptInputType_nzOkLoading;
    /** @type {?} */
    NzModalComponent.ngAcceptInputType_nzOkDisabled;
    /** @type {?} */
    NzModalComponent.ngAcceptInputType_nzCancelDisabled;
    /** @type {?} */
    NzModalComponent.ngAcceptInputType_nzCancelLoading;
    /** @type {?} */
    NzModalComponent.ngAcceptInputType_nzKeyboard;
    /** @type {?} */
    NzModalComponent.ngAcceptInputType_nzNoAnimation;
    /** @type {?} */
    NzModalComponent.prototype.nzMask;
    /** @type {?} */
    NzModalComponent.prototype.nzMaskClosable;
    /** @type {?} */
    NzModalComponent.prototype.nzCloseOnNavigation;
    /** @type {?} */
    NzModalComponent.prototype.nzVisible;
    /** @type {?} */
    NzModalComponent.prototype.nzClosable;
    /** @type {?} */
    NzModalComponent.prototype.nzOkLoading;
    /** @type {?} */
    NzModalComponent.prototype.nzOkDisabled;
    /** @type {?} */
    NzModalComponent.prototype.nzCancelDisabled;
    /** @type {?} */
    NzModalComponent.prototype.nzCancelLoading;
    /** @type {?} */
    NzModalComponent.prototype.nzKeyboard;
    /** @type {?} */
    NzModalComponent.prototype.nzNoAnimation;
    /** @type {?} */
    NzModalComponent.prototype.nzContent;
    /** @type {?} */
    NzModalComponent.prototype.nzComponentParams;
    /** @type {?} */
    NzModalComponent.prototype.nzFooter;
    /** @type {?} */
    NzModalComponent.prototype.nzGetContainer;
    /** @type {?} */
    NzModalComponent.prototype.nzZIndex;
    /** @type {?} */
    NzModalComponent.prototype.nzWidth;
    /** @type {?} */
    NzModalComponent.prototype.nzWrapClassName;
    /** @type {?} */
    NzModalComponent.prototype.nzClassName;
    /** @type {?} */
    NzModalComponent.prototype.nzStyle;
    /** @type {?} */
    NzModalComponent.prototype.nzTitle;
    /** @type {?} */
    NzModalComponent.prototype.nzCloseIcon;
    /** @type {?} */
    NzModalComponent.prototype.nzMaskStyle;
    /** @type {?} */
    NzModalComponent.prototype.nzBodyStyle;
    /** @type {?} */
    NzModalComponent.prototype.nzOkText;
    /** @type {?} */
    NzModalComponent.prototype.nzCancelText;
    /** @type {?} */
    NzModalComponent.prototype.nzOkType;
    /** @type {?} */
    NzModalComponent.prototype.nzIconType;
    /** @type {?} */
    NzModalComponent.prototype.nzModalType;
    /** @type {?} */
    NzModalComponent.prototype.nzAutofocus;
    /** @type {?} */
    NzModalComponent.prototype.nzOnOk;
    /** @type {?} */
    NzModalComponent.prototype.nzOnCancel;
    /** @type {?} */
    NzModalComponent.prototype.nzAfterOpen;
    /** @type {?} */
    NzModalComponent.prototype.nzAfterClose;
    /** @type {?} */
    NzModalComponent.prototype.nzVisibleChange;
    /** @type {?} */
    NzModalComponent.prototype.contentTemplateRef;
    /**
     * @type {?}
     * @private
     */
    NzModalComponent.prototype.modalRef;
    /**
     * @type {?}
     * @private
     */
    NzModalComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzModalComponent.prototype.modal;
    /**
     * @type {?}
     * @private
     */
    NzModalComponent.prototype.viewContainerRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tb2RhbC8iLCJzb3VyY2VzIjpbIm1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTixXQUFXLEVBRVgsU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUl2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHdkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFJbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7OztBQUVqRDtJQW1GRSwwQkFBb0IsR0FBc0IsRUFBVSxLQUFxQixFQUFVLGdCQUFrQztRQUFqRyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQTdENUYsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyxvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUNqQyxlQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBS3RDLGFBQVEsR0FBVyxJQUFJLENBQUM7UUFDeEIsWUFBTyxHQUFvQixHQUFHLENBQUM7UUFLL0IsZ0JBQVcsR0FBK0IsT0FBTyxDQUFDO1FBS2xELGFB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cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBUeXBlLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56QnV0dG9uVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvYnV0dG9uJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTnpNb2RhbEZvb3RlckRpcmVjdGl2ZSB9IGZyb20gJy4vbW9kYWwtZm9vdGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOek1vZGFsTGVnYWN5QVBJIH0gZnJvbSAnLi9tb2RhbC1sZWdhY3ktYXBpJztcbmltcG9ydCB7IE56TW9kYWxSZWYgfSBmcm9tICcuL21vZGFsLXJlZic7XG5pbXBvcnQgeyBNb2RhbEJ1dHRvbk9wdGlvbnMsIE1vZGFsT3B0aW9ucywgTW9kYWxUeXBlcywgT25DbGlja0NhbGxiYWNrLCBTdHlsZU9iamVjdExpa2UgfSBmcm9tICcuL21vZGFsLXR5cGVzJztcbmltcG9ydCB7IE56TW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi9tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7IGdldENvbmZpZ0Zyb21Db21wb25lbnQgfSBmcm9tICcuL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotbW9kYWwnLFxuICBleHBvcnRBczogJ256TW9kYWwnLFxuICB0ZW1wbGF0ZTogYCA8bmctdGVtcGxhdGU+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvbmctdGVtcGxhdGU+IGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE56TW9kYWxDb21wb25lbnQ8VCA9IE56U2FmZUFueSwgUiA9IE56U2FmZUFueT4gaW1wbGVtZW50cyBPbkNoYW5nZXMsIE56TW9kYWxMZWdhY3lBUEk8VCwgUj4sIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uek1hc2s6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256TWFza0Nsb3NhYmxlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekNsb3NlT25OYXZpZ2F0aW9uOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelZpc2libGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256Q2xvc2FibGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256T2tMb2FkaW5nOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uek9rRGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256Q2FuY2VsRGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256Q2FuY2VsTG9hZGluZzogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpLZXlib2FyZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpOb0FuaW1hdGlvbjogQm9vbGVhbklucHV0O1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek1hc2s/OiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpNYXNrQ2xvc2FibGU/OiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDbG9zZU9uTmF2aWdhdGlvbj86IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2xvc2FibGU6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpPa0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56T2tEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDYW5jZWxEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDYW5jZWxMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuektleWJvYXJkOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Tm9BbmltYXRpb24gPSBmYWxzZTtcbiAgQElucHV0KCkgbnpDb250ZW50Pzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+IHwgVHlwZTxUPjtcbiAgQElucHV0KCkgbnpDb21wb25lbnRQYXJhbXM/OiBUO1xuICBASW5wdXQoKSBuekZvb3Rlcj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PiB8IEFycmF5PE1vZGFsQnV0dG9uT3B0aW9uczxUPj4gfCBudWxsO1xuICBASW5wdXQoKSBuekdldENvbnRhaW5lcj86IEhUTUxFbGVtZW50IHwgT3ZlcmxheVJlZiB8ICgoKSA9PiBIVE1MRWxlbWVudCB8IE92ZXJsYXlSZWYpO1xuICBASW5wdXQoKSBuelpJbmRleDogbnVtYmVyID0gMTAwMDtcbiAgQElucHV0KCkgbnpXaWR0aDogbnVtYmVyIHwgc3RyaW5nID0gNTIwO1xuICBASW5wdXQoKSBueldyYXBDbGFzc05hbWU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56Q2xhc3NOYW1lPzogc3RyaW5nO1xuICBASW5wdXQoKSBuelN0eWxlPzogb2JqZWN0O1xuICBASW5wdXQoKSBuelRpdGxlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+O1xuICBASW5wdXQoKSBuekNsb3NlSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gPSAnY2xvc2UnO1xuICBASW5wdXQoKSBuek1hc2tTdHlsZT86IFN0eWxlT2JqZWN0TGlrZTtcbiAgQElucHV0KCkgbnpCb2R5U3R5bGU/OiBTdHlsZU9iamVjdExpa2U7XG4gIEBJbnB1dCgpIG56T2tUZXh0Pzogc3RyaW5nIHwgbnVsbDtcbiAgQElucHV0KCkgbnpDYW5jZWxUZXh0Pzogc3RyaW5nIHwgbnVsbDtcbiAgQElucHV0KCkgbnpPa1R5cGU6IE56QnV0dG9uVHlwZSA9ICdwcmltYXJ5JztcbiAgQElucHV0KCkgbnpJY29uVHlwZTogc3RyaW5nID0gJ3F1ZXN0aW9uLWNpcmNsZSc7IC8vIENvbmZpcm0gTW9kYWwgT05MWVxuICBASW5wdXQoKSBuek1vZGFsVHlwZTogTW9kYWxUeXBlcyA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbnpBdXRvZm9jdXM6ICdvaycgfCAnY2FuY2VsJyB8ICdhdXRvJyB8IG51bGwgPSAnYXV0byc7XG5cbiAgLy8gVE9ETyhAaHN1YW54eXopIElucHV0IHdpbGwgbm90IGJlIHN1cHBvcnRlZFxuICBASW5wdXQoKVxuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgbnpPbk9rOiBFdmVudEVtaXR0ZXI8VD4gfCBPbkNsaWNrQ2FsbGJhY2s8VD4gfCBOelNhZmVBbnkgPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XG5cbiAgLy8gVE9ETyhAaHN1YW54eXopIElucHV0IHdpbGwgbm90IGJlIHN1cHBvcnRlZFxuICBASW5wdXQoKVxuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgbnpPbkNhbmNlbDogRXZlbnRFbWl0dGVyPFQ+IHwgT25DbGlja0NhbGxiYWNrPFQ+IHwgTnpTYWZlQW55ID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekFmdGVyT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56QWZ0ZXJDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8Uj4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56VmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogdHJ1ZSB9KSBjb250ZW50VGVtcGxhdGVSZWYhOiBUZW1wbGF0ZVJlZjx7fT47XG4gIEBDb250ZW50Q2hpbGQoTnpNb2RhbEZvb3RlckRpcmVjdGl2ZSlcbiAgc2V0IG1vZGFsRm9vdGVyKHZhbHVlOiBOek1vZGFsRm9vdGVyRGlyZWN0aXZlKSB7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLnRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLnNldEZvb3RlcldpdGhUZW1wbGF0ZSh2YWx1ZS50ZW1wbGF0ZVJlZik7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgbW9kYWxSZWY6IE56TW9kYWxSZWYgfCBudWxsID0gbnVsbDtcblxuICBnZXQgYWZ0ZXJPcGVuKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIC8vIE9ic2VydmFibGUgYWxpYXMgZm9yIG56QWZ0ZXJPcGVuXG4gICAgcmV0dXJuIHRoaXMubnpBZnRlck9wZW4uYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBnZXQgYWZ0ZXJDbG9zZSgpOiBPYnNlcnZhYmxlPFI+IHtcbiAgICAvLyBPYnNlcnZhYmxlIGFsaWFzIGZvciBuekFmdGVyQ2xvc2VcbiAgICByZXR1cm4gdGhpcy5uekFmdGVyQ2xvc2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbW9kYWw6IE56TW9kYWxTZXJ2aWNlLCBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHt9XG5cbiAgb3BlbigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubnpWaXNpYmxlKSB7XG4gICAgICB0aGlzLm56VmlzaWJsZSA9IHRydWU7XG4gICAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KHRydWUpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5tb2RhbFJlZikge1xuICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5nZXRDb25maWcoKTtcbiAgICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLm1vZGFsLmNyZWF0ZShjb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlKHJlc3VsdD86IFIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelZpc2libGUpIHtcbiAgICAgIHRoaXMubnpWaXNpYmxlID0gZmFsc2U7XG4gICAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tb2RhbFJlZikge1xuICAgICAgdGhpcy5tb2RhbFJlZi5jbG9zZShyZXN1bHQpO1xuICAgICAgdGhpcy5tb2RhbFJlZiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveShyZXN1bHQ/OiBSKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZShyZXN1bHQpO1xuICB9XG5cbiAgdHJpZ2dlck9rKCk6IHZvaWQge1xuICAgIHRoaXMubW9kYWxSZWY/LnRyaWdnZXJPaygpO1xuICB9XG5cbiAgdHJpZ2dlckNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGFsUmVmPy50cmlnZ2VyQ2FuY2VsKCk7XG4gIH1cblxuICBnZXRDb250ZW50Q29tcG9uZW50KCk6IFQgfCB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5tb2RhbFJlZj8uZ2V0Q29udGVudENvbXBvbmVudCgpO1xuICB9XG5cbiAgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudCB8IHZvaWQge1xuICAgIHJldHVybiB0aGlzLm1vZGFsUmVmPy5nZXRFbGVtZW50KCk7XG4gIH1cblxuICBnZXRNb2RhbFJlZigpOiBOek1vZGFsUmVmIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMubW9kYWxSZWY7XG4gIH1cblxuICBwcml2YXRlIHNldEZvb3RlcldpdGhUZW1wbGF0ZSh0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8e30+KTogdm9pZCB7XG4gICAgdGhpcy5uekZvb3RlciA9IHRlbXBsYXRlUmVmO1xuICAgIGlmICh0aGlzLm1vZGFsUmVmKSB7XG4gICAgICAvLyBJZiBtb2RhbFJlZiBhbHJlYWR5IGNyZWF0ZWQsIHNldCB0aGUgZm9vdGVyIGluIG5leHQgdGlja1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMubW9kYWxSZWYhLnVwZGF0ZUNvbmZpZyh7XG4gICAgICAgICAgbnpGb290ZXI6IHRoaXMubnpGb290ZXJcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29uZmlnKCk6IE1vZGFsT3B0aW9ucyB7XG4gICAgY29uc3QgY29tcG9uZW50Q29uZmlnID0gZ2V0Q29uZmlnRnJvbUNvbXBvbmVudCh0aGlzKTtcbiAgICBjb21wb25lbnRDb25maWcubnpWaWV3Q29udGFpbmVyUmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmO1xuICAgIGlmICghdGhpcy5uekNvbnRlbnQpIHtcbiAgICAgIGNvbXBvbmVudENvbmZpZy5uekNvbnRlbnQgPSB0aGlzLmNvbnRlbnRUZW1wbGF0ZVJlZjtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBvbmVudENvbmZpZztcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG56VmlzaWJsZSwgLi4ub3RoZXJDaGFuZ2VzIH0gPSBjaGFuZ2VzO1xuXG4gICAgaWYgKE9iamVjdC5rZXlzKG90aGVyQ2hhbmdlcykubGVuZ3RoICYmIHRoaXMubW9kYWxSZWYpIHtcbiAgICAgIHRoaXMubW9kYWxSZWYudXBkYXRlQ29uZmlnKGdldENvbmZpZ0Zyb21Db21wb25lbnQodGhpcykpO1xuICAgIH1cblxuICAgIGlmIChuelZpc2libGUpIHtcbiAgICAgIGlmICh0aGlzLm56VmlzaWJsZSkge1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGFsUmVmPy5fZmluaXNoRGlhbG9nQ2xvc2UoKTtcbiAgfVxufVxuIl19