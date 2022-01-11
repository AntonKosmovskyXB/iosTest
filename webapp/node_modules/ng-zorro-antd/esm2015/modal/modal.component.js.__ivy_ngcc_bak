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
export class NzModalComponent {
    /**
     * @param {?} cdr
     * @param {?} modal
     * @param {?} viewContainerRef
     */
    constructor(cdr, modal, viewContainerRef) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set modalFooter(value) {
        if (value && value.templateRef) {
            this.setFooterWithTemplate(value.templateRef);
        }
    }
    /**
     * @return {?}
     */
    get afterOpen() {
        // Observable alias for nzAfterOpen
        return this.nzAfterOpen.asObservable();
    }
    /**
     * @return {?}
     */
    get afterClose() {
        // Observable alias for nzAfterClose
        return this.nzAfterClose.asObservable();
    }
    /**
     * @return {?}
     */
    open() {
        if (!this.nzVisible) {
            this.nzVisible = true;
            this.nzVisibleChange.emit(true);
        }
        if (!this.modalRef) {
            /** @type {?} */
            const config = this.getConfig();
            this.modalRef = this.modal.create(config);
        }
    }
    /**
     * @param {?=} result
     * @return {?}
     */
    close(result) {
        if (this.nzVisible) {
            this.nzVisible = false;
            this.nzVisibleChange.emit(false);
        }
        if (this.modalRef) {
            this.modalRef.close(result);
            this.modalRef = null;
        }
    }
    /**
     * @param {?=} result
     * @return {?}
     */
    destroy(result) {
        this.close(result);
    }
    /**
     * @return {?}
     */
    triggerOk() {
        var _a;
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.triggerOk();
    }
    /**
     * @return {?}
     */
    triggerCancel() {
        var _a;
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.triggerCancel();
    }
    /**
     * @return {?}
     */
    getContentComponent() {
        var _a;
        return (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.getContentComponent();
    }
    /**
     * @return {?}
     */
    getElement() {
        var _a;
        return (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.getElement();
    }
    /**
     * @return {?}
     */
    getModalRef() {
        return this.modalRef;
    }
    /**
     * @private
     * @param {?} templateRef
     * @return {?}
     */
    setFooterWithTemplate(templateRef) {
        this.nzFooter = templateRef;
        if (this.modalRef) {
            // If modalRef already created, set the footer in next tick
            Promise.resolve().then((/**
             * @return {?}
             */
            () => {
                (/** @type {?} */ (this.modalRef)).updateConfig({
                    nzFooter: this.nzFooter
                });
            }));
        }
        this.cdr.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    getConfig() {
        /** @type {?} */
        const componentConfig = getConfigFromComponent(this);
        componentConfig.nzViewContainerRef = this.viewContainerRef;
        if (!this.nzContent) {
            componentConfig.nzContent = this.contentTemplateRef;
        }
        return componentConfig;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzVisible } = changes, otherChanges = __rest(changes, ["nzVisible"]);
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        var _a;
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a._finishDialogClose();
    }
}
NzModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-modal',
                exportAs: 'nzModal',
                template: ` <ng-template><ng-content></ng-content></ng-template> `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NzModalComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzModalService },
    { type: ViewContainerRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tb2RhbC8iLCJzb3VyY2VzIjpbIm1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTixXQUFXLEVBRVgsU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUl2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHdkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFJbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7OztBQVFqRCxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7SUE2RTNCLFlBQW9CLEdBQXNCLEVBQVUsS0FBcUIsRUFBVSxnQkFBa0M7UUFBakcsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUE3RDVGLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZUFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFDbEMsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFDakMsZUFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUt0QyxhQUFRLEdBQVcsSUFBSSxDQUFDO1FBQ3hCLFlBQU8sR0FBb0IsR0FBRyxDQUFDO1FBSy9CLGdCQUFXLEdB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O3VEQUF1Qjs7O0lBdEIvQywwQ0FBOEM7O0lBQzlDLGtEQUFzRDs7SUFDdEQsdURBQTJEOztJQUMzRCw2Q0FBaUQ7O0lBQ2pELDhDQUFrRDs7SUFDbEQsK0NBQW1EOztJQUNuRCxnREFBb0Q7O0lBQ3BELG9EQUF3RDs7SUFDeEQsbURBQXVEOztJQUN2RCw4Q0FBa0Q7O0lBQ2xELGlEQUFxRDs7SUFFckQsa0NBQTBDOztJQUMxQywwQ0FBa0Q7O0lBQ2xELCtDQUF1RDs7SUFDdkQscUNBQW9EOztJQUNwRCxzQ0FBb0Q7O0lBQ3BELHVDQUFzRDs7SUFDdEQsd0NBQXVEOztJQUN2RCw0Q0FBMkQ7O0lBQzNELDJDQUEwRDs7SUFDMUQsc0NBQW9EOztJQUNwRCx5Q0FBK0M7O0lBQy9DLHFDQUF3RDs7SUFDeEQsNkNBQStCOztJQUMvQixvQ0FBbUY7O0lBQ25GLDBDQUFzRjs7SUFDdEYsb0NBQWlDOztJQUNqQyxtQ0FBd0M7O0lBQ3hDLDJDQUFrQzs7SUFDbEMsdUNBQThCOztJQUM5QixtQ0FBMEI7O0lBQzFCLG1DQUE0Qzs7SUFDNUMsdUNBQTJEOztJQUMzRCx1Q0FBdUM7O0lBQ3ZDLHVDQUF1Qzs7SUFDdkMsb0NBQWtDOztJQUNsQyx3Q0FBc0M7O0lBQ3RDLG9DQUE0Qzs7SUFDNUMsc0NBQWdEOztJQUNoRCx1Q0FBNkM7O0lBQzdDLHVDQUErRDs7SUFHL0Qsa0NBRTBGOztJQUcxRixzQ0FFOEY7O0lBRTlGLHVDQUEwRDs7SUFDMUQsd0NBQXdEOztJQUN4RCwyQ0FBaUU7O0lBRWpFLDhDQUErRTs7Ozs7SUFPL0Usb0NBQTJDOzs7OztJQVkvQiwrQkFBOEI7Ozs7O0lBQUUsaUNBQTZCOzs7OztJQUFFLDRDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVHlwZSxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekJ1dHRvblR5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2J1dHRvbic7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE56TW9kYWxGb290ZXJEaXJlY3RpdmUgfSBmcm9tICcuL21vZGFsLWZvb3Rlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTnpNb2RhbExlZ2FjeUFQSSB9IGZyb20gJy4vbW9kYWwtbGVnYWN5LWFwaSc7XG5pbXBvcnQgeyBOek1vZGFsUmVmIH0gZnJvbSAnLi9tb2RhbC1yZWYnO1xuaW1wb3J0IHsgTW9kYWxCdXR0b25PcHRpb25zLCBNb2RhbE9wdGlvbnMsIE1vZGFsVHlwZXMsIE9uQ2xpY2tDYWxsYmFjaywgU3R5bGVPYmplY3RMaWtlIH0gZnJvbSAnLi9tb2RhbC10eXBlcyc7XG5pbXBvcnQgeyBOek1vZGFsU2VydmljZSB9IGZyb20gJy4vbW9kYWwuc2VydmljZSc7XG5pbXBvcnQgeyBnZXRDb25maWdGcm9tQ29tcG9uZW50IH0gZnJvbSAnLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LW1vZGFsJyxcbiAgZXhwb3J0QXM6ICduek1vZGFsJyxcbiAgdGVtcGxhdGU6IGAgPG5nLXRlbXBsYXRlPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L25nLXRlbXBsYXRlPiBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOek1vZGFsQ29tcG9uZW50PFQgPSBOelNhZmVBbnksIFIgPSBOelNhZmVBbnk+IGltcGxlbWVudHMgT25DaGFuZ2VzLCBOek1vZGFsTGVnYWN5QVBJPFQsIFI+LCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpNYXNrOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uek1hc2tDbG9zYWJsZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpDbG9zZU9uTmF2aWdhdGlvbjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpWaXNpYmxlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekNsb3NhYmxlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uek9rTG9hZGluZzogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpPa0Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekNhbmNlbERpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekNhbmNlbExvYWRpbmc6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256S2V5Ym9hcmQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256Tm9BbmltYXRpb246IEJvb2xlYW5JbnB1dDtcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpNYXNrPzogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TWFza0Nsb3NhYmxlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2xvc2VPbk5hdmlnYXRpb24/OiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNsb3NhYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56T2tMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek9rRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2FuY2VsRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2FuY2VsTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpLZXlib2FyZDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek5vQW5pbWF0aW9uID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56Q29udGVudD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PiB8IFR5cGU8VD47XG4gIEBJbnB1dCgpIG56Q29tcG9uZW50UGFyYW1zPzogVDtcbiAgQElucHV0KCkgbnpGb290ZXI/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7fT4gfCBBcnJheTxNb2RhbEJ1dHRvbk9wdGlvbnM8VD4+IHwgbnVsbDtcbiAgQElucHV0KCkgbnpHZXRDb250YWluZXI/OiBIVE1MRWxlbWVudCB8IE92ZXJsYXlSZWYgfCAoKCkgPT4gSFRNTEVsZW1lbnQgfCBPdmVybGF5UmVmKTtcbiAgQElucHV0KCkgbnpaSW5kZXg6IG51bWJlciA9IDEwMDA7XG4gIEBJbnB1dCgpIG56V2lkdGg6IG51bWJlciB8IHN0cmluZyA9IDUyMDtcbiAgQElucHV0KCkgbnpXcmFwQ2xhc3NOYW1lPzogc3RyaW5nO1xuICBASW5wdXQoKSBuekNsYXNzTmFtZT86IHN0cmluZztcbiAgQElucHV0KCkgbnpTdHlsZT86IG9iamVjdDtcbiAgQElucHV0KCkgbnpUaXRsZT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PjtcbiAgQElucHV0KCkgbnpDbG9zZUljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+ID0gJ2Nsb3NlJztcbiAgQElucHV0KCkgbnpNYXNrU3R5bGU/OiBTdHlsZU9iamVjdExpa2U7XG4gIEBJbnB1dCgpIG56Qm9keVN0eWxlPzogU3R5bGVPYmplY3RMaWtlO1xuICBASW5wdXQoKSBuek9rVGV4dD86IHN0cmluZyB8IG51bGw7XG4gIEBJbnB1dCgpIG56Q2FuY2VsVGV4dD86IHN0cmluZyB8IG51bGw7XG4gIEBJbnB1dCgpIG56T2tUeXBlOiBOekJ1dHRvblR5cGUgPSAncHJpbWFyeSc7XG4gIEBJbnB1dCgpIG56SWNvblR5cGU6IHN0cmluZyA9ICdxdWVzdGlvbi1jaXJjbGUnOyAvLyBDb25maXJtIE1vZGFsIE9OTFlcbiAgQElucHV0KCkgbnpNb2RhbFR5cGU6IE1vZGFsVHlwZXMgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIG56QXV0b2ZvY3VzOiAnb2snIHwgJ2NhbmNlbCcgfCAnYXV0bycgfCBudWxsID0gJ2F1dG8nO1xuXG4gIC8vIFRPRE8oQGhzdWFueHl6KSBJbnB1dCB3aWxsIG5vdCBiZSBzdXBwb3J0ZWRcbiAgQElucHV0KClcbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IG56T25PazogRXZlbnRFbWl0dGVyPFQ+IHwgT25DbGlja0NhbGxiYWNrPFQ+IHwgTnpTYWZlQW55ID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuXG4gIC8vIFRPRE8oQGhzdWFueHl6KSBJbnB1dCB3aWxsIG5vdCBiZSBzdXBwb3J0ZWRcbiAgQElucHV0KClcbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IG56T25DYW5jZWw6IEV2ZW50RW1pdHRlcjxUPiB8IE9uQ2xpY2tDYWxsYmFjazxUPiB8IE56U2FmZUFueSA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpBZnRlck9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekFmdGVyQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPFI+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IHRydWUgfSkgY29udGVudFRlbXBsYXRlUmVmITogVGVtcGxhdGVSZWY8e30+O1xuICBAQ29udGVudENoaWxkKE56TW9kYWxGb290ZXJEaXJlY3RpdmUpXG4gIHNldCBtb2RhbEZvb3Rlcih2YWx1ZTogTnpNb2RhbEZvb3RlckRpcmVjdGl2ZSkge1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS50ZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5zZXRGb290ZXJXaXRoVGVtcGxhdGUodmFsdWUudGVtcGxhdGVSZWYpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIG1vZGFsUmVmOiBOek1vZGFsUmVmIHwgbnVsbCA9IG51bGw7XG5cbiAgZ2V0IGFmdGVyT3BlbigpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICAvLyBPYnNlcnZhYmxlIGFsaWFzIGZvciBuekFmdGVyT3BlblxuICAgIHJldHVybiB0aGlzLm56QWZ0ZXJPcGVuLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgZ2V0IGFmdGVyQ2xvc2UoKTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgLy8gT2JzZXJ2YWJsZSBhbGlhcyBmb3IgbnpBZnRlckNsb3NlXG4gICAgcmV0dXJuIHRoaXMubnpBZnRlckNsb3NlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIG1vZGFsOiBOek1vZGFsU2VydmljZSwgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxuXG4gIG9wZW4oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm56VmlzaWJsZSkge1xuICAgICAgdGhpcy5uelZpc2libGUgPSB0cnVlO1xuICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMubW9kYWxSZWYpIHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0Q29uZmlnKCk7XG4gICAgICB0aGlzLm1vZGFsUmVmID0gdGhpcy5tb2RhbC5jcmVhdGUoY29uZmlnKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZShyZXN1bHQ/OiBSKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpWaXNpYmxlKSB7XG4gICAgICB0aGlzLm56VmlzaWJsZSA9IGZhbHNlO1xuICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdChmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubW9kYWxSZWYpIHtcbiAgICAgIHRoaXMubW9kYWxSZWYuY2xvc2UocmVzdWx0KTtcbiAgICAgIHRoaXMubW9kYWxSZWYgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3kocmVzdWx0PzogUik6IHZvaWQge1xuICAgIHRoaXMuY2xvc2UocmVzdWx0KTtcbiAgfVxuXG4gIHRyaWdnZXJPaygpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGFsUmVmPy50cmlnZ2VyT2soKTtcbiAgfVxuXG4gIHRyaWdnZXJDYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5tb2RhbFJlZj8udHJpZ2dlckNhbmNlbCgpO1xuICB9XG5cbiAgZ2V0Q29udGVudENvbXBvbmVudCgpOiBUIHwgdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMubW9kYWxSZWY/LmdldENvbnRlbnRDb21wb25lbnQoKTtcbiAgfVxuXG4gIGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQgfCB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5tb2RhbFJlZj8uZ2V0RWxlbWVudCgpO1xuICB9XG5cbiAgZ2V0TW9kYWxSZWYoKTogTnpNb2RhbFJlZiB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLm1vZGFsUmVmO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRGb290ZXJXaXRoVGVtcGxhdGUodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPHt9Pik6IHZvaWQge1xuICAgIHRoaXMubnpGb290ZXIgPSB0ZW1wbGF0ZVJlZjtcbiAgICBpZiAodGhpcy5tb2RhbFJlZikge1xuICAgICAgLy8gSWYgbW9kYWxSZWYgYWxyZWFkeSBjcmVhdGVkLCBzZXQgdGhlIGZvb3RlciBpbiBuZXh0IHRpY2tcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLm1vZGFsUmVmIS51cGRhdGVDb25maWcoe1xuICAgICAgICAgIG56Rm9vdGVyOiB0aGlzLm56Rm9vdGVyXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIGdldENvbmZpZygpOiBNb2RhbE9wdGlvbnMge1xuICAgIGNvbnN0IGNvbXBvbmVudENvbmZpZyA9IGdldENvbmZpZ0Zyb21Db21wb25lbnQodGhpcyk7XG4gICAgY29tcG9uZW50Q29uZmlnLm56Vmlld0NvbnRhaW5lclJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZjtcbiAgICBpZiAoIXRoaXMubnpDb250ZW50KSB7XG4gICAgICBjb21wb25lbnRDb25maWcubnpDb250ZW50ID0gdGhpcy5jb250ZW50VGVtcGxhdGVSZWY7XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnRDb25maWc7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuelZpc2libGUsIC4uLm90aGVyQ2hhbmdlcyB9ID0gY2hhbmdlcztcblxuICAgIGlmIChPYmplY3Qua2V5cyhvdGhlckNoYW5nZXMpLmxlbmd0aCAmJiB0aGlzLm1vZGFsUmVmKSB7XG4gICAgICB0aGlzLm1vZGFsUmVmLnVwZGF0ZUNvbmZpZyhnZXRDb25maWdGcm9tQ29tcG9uZW50KHRoaXMpKTtcbiAgICB9XG5cbiAgICBpZiAobnpWaXNpYmxlKSB7XG4gICAgICBpZiAodGhpcy5uelZpc2libGUpIHtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5tb2RhbFJlZj8uX2ZpbmlzaERpYWxvZ0Nsb3NlKCk7XG4gIH1cbn1cbiJdfQ==