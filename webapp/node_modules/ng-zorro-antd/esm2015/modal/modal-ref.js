/**
 * @fileoverview added by tsickle
 * Generated from: modal-ref.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ESCAPE, hasModifierKey } from '@angular/cdk/keycodes';
import { EventEmitter } from '@angular/core';
import { isPromise } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { filter, take } from 'rxjs/operators';
/** @enum {number} */
const NzModalState = {
    OPEN: 0,
    CLOSING: 1,
    CLOSED: 2,
};
export { NzModalState };
/** @enum {string} */
const NzTriggerAction = {
    CANCEL: "cancel",
    OK: "ok",
};
export { NzTriggerAction };
/**
 * @template T, R
 */
export class NzModalRef {
    /**
     * @param {?} overlayRef
     * @param {?} config
     * @param {?} containerInstance
     */
    constructor(overlayRef, config, containerInstance) {
        this.overlayRef = overlayRef;
        this.config = config;
        this.containerInstance = containerInstance;
        this.componentInstance = null;
        this.state = 0 /* OPEN */;
        this.afterClose = new Subject();
        this.afterOpen = new Subject();
        containerInstance.animationStateChanged
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => event.phaseName === 'done' && event.toState === 'enter')), take(1))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.afterOpen.next();
            this.afterOpen.complete();
            if (config.nzAfterOpen instanceof EventEmitter) {
                config.nzAfterOpen.emit();
            }
        }));
        containerInstance.animationStateChanged
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => event.phaseName === 'done' && event.toState === 'exit')), take(1))
            .subscribe((/**
         * @return {?}
         */
        () => {
            clearTimeout(this.closeTimeout);
            this._finishDialogClose();
        }));
        containerInstance.containerClick.pipe(take(1)).subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const cancelable = !this.config.nzCancelLoading && !this.config.nzOkLoading;
            if (cancelable) {
                this.trigger("cancel" /* CANCEL */);
            }
        }));
        overlayRef
            .keydownEvents()
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            return (((/** @type {?} */ (this.config.nzKeyboard))) &&
                !this.config.nzCancelLoading &&
                !this.config.nzOkLoading &&
                event.keyCode === ESCAPE &&
                !hasModifierKey(event));
        })))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            event.preventDefault();
            this.trigger("cancel" /* CANCEL */);
        }));
        containerInstance.cancelTriggered.subscribe((/**
         * @return {?}
         */
        () => this.trigger("cancel" /* CANCEL */)));
        containerInstance.okTriggered.subscribe((/**
         * @return {?}
         */
        () => this.trigger("ok" /* OK */)));
        overlayRef.detachments().subscribe((/**
         * @return {?}
         */
        () => {
            this.afterClose.next(this.result);
            this.afterClose.complete();
            if (config.nzAfterClose instanceof EventEmitter) {
                config.nzAfterClose.emit(this.result);
            }
            this.componentInstance = null;
            this.overlayRef.dispose();
        }));
    }
    /**
     * @return {?}
     */
    getContentComponent() {
        return (/** @type {?} */ (this.componentInstance));
    }
    /**
     * @return {?}
     */
    getElement() {
        return this.containerInstance.getNativeElement();
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
        this.trigger("ok" /* OK */);
    }
    /**
     * @return {?}
     */
    triggerCancel() {
        this.trigger("cancel" /* CANCEL */);
    }
    /**
     * Open the modal.
     * @deprecated Opened when create, this method is useless.
     * \@breaking-change 10.0.0
     * @return {?}
     */
    open() {
        // noop
    }
    /**
     * @param {?=} result
     * @return {?}
     */
    close(result) {
        this.result = result;
        this.containerInstance.animationStateChanged
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => event.phaseName === 'start')), take(1))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.overlayRef.detachBackdrop();
            this.closeTimeout = setTimeout((/**
             * @return {?}
             */
            () => {
                this._finishDialogClose();
            }), event.totalTime + 100);
        }));
        this.containerInstance.startExitAnimation();
        this.state = 1 /* CLOSING */;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    updateConfig(config) {
        Object.assign(this.config, config);
        this.containerInstance.bindBackdropStyle();
        this.containerInstance.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    getState() {
        return this.state;
    }
    /**
     * @return {?}
     */
    getConfig() {
        return this.config;
    }
    /**
     * @return {?}
     */
    getBackdropElement() {
        return this.overlayRef.backdropElement;
    }
    /**
     * @private
     * @param {?} action
     * @return {?}
     */
    trigger(action) {
        /** @type {?} */
        const trigger = { ok: this.config.nzOnOk, cancel: this.config.nzOnCancel }[action];
        /** @type {?} */
        const loadingKey = (/** @type {?} */ ({ ok: 'nzOkLoading', cancel: 'nzCancelLoading' }[action]));
        /** @type {?} */
        const loading = this.config[loadingKey];
        if (loading) {
            return;
        }
        if (trigger instanceof EventEmitter) {
            trigger.emit(this.getContentComponent());
        }
        else if (typeof trigger === 'function') {
            /** @type {?} */
            const result = trigger(this.getContentComponent());
            /** @type {?} */
            const caseClose = (/**
             * @param {?} doClose
             * @return {?}
             */
            (doClose) => doClose !== false && this.close((/** @type {?} */ (doClose))));
            if (isPromise(result)) {
                this.config[loadingKey] = true;
                /** @type {?} */
                const handleThen = (/**
                 * @param {?} doClose
                 * @return {?}
                 */
                (doClose) => {
                    this.config[loadingKey] = false;
                    this.closeWhitResult(doClose);
                });
                result.then(handleThen).catch(handleThen);
            }
            else {
                caseClose(result);
            }
        }
    }
    /**
     * @private
     * @param {?} result
     * @return {?}
     */
    closeWhitResult(result) {
        if (result !== false) {
            this.close(result);
        }
    }
    /**
     * @return {?}
     */
    _finishDialogClose() {
        this.state = 2 /* CLOSED */;
        this.overlayRef.dispose();
    }
}
if (false) {
    /** @type {?} */
    NzModalRef.prototype.componentInstance;
    /** @type {?} */
    NzModalRef.prototype.result;
    /** @type {?} */
    NzModalRef.prototype.state;
    /** @type {?} */
    NzModalRef.prototype.afterClose;
    /** @type {?} */
    NzModalRef.prototype.afterOpen;
    /**
     * @type {?}
     * @private
     */
    NzModalRef.prototype.closeTimeout;
    /**
     * @type {?}
     * @private
     */
    NzModalRef.prototype.overlayRef;
    /**
     * @type {?}
     * @private
     */
    NzModalRef.prototype.config;
    /** @type {?} */
    NzModalRef.prototype.containerInstance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtcmVmLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tb2RhbC8iLCJzb3VyY2VzIjpbIm1vZGFsLXJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRS9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFNOUMsTUFBa0IsWUFBWTtJQUM1QixJQUFJLEdBQUE7SUFDSixPQUFPLEdBQUE7SUFDUCxNQUFNLEdBQUE7RUFDUDs7O0FBRUQsTUFBa0IsZUFBZTtJQUMvQixNQUFNLFVBQVc7SUFDakIsRUFBRSxNQUFPO0VBQ1Y7Ozs7O0FBRUQsTUFBTSxPQUFPLFVBQVU7Ozs7OztJQVNyQixZQUFvQixVQUFzQixFQUFVLE1BQW9CLEVBQVMsaUJBQXFDO1FBQWxHLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBQVMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFvQjtRQVJ0SCxzQkFBaUIsR0FBYSxJQUFJLENBQUM7UUFFbkMsVUFBSyxnQkFBbUM7UUFDeEMsZUFBVSxHQUFlLElBQUksT0FBTyxFQUFFLENBQUM7UUFDdkMsY0FBUyxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBS3ZDLGlCQUFpQixDQUFDLHFCQUFxQjthQUNwQyxJQUFJLENBQ0gsTUFBTTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsS0FBSyxNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxPQUFPLEVBQUMsRUFDeEUs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Q0FBQyxDQUFBO1lBQ2pHLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQzs7c0JBQ3pCLFVBQVU7Ozs7Z0JBQUcsQ0FBQyxPQUE0QixFQUFFLEVBQUU7b0JBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSyxDQUFDO29CQUNoQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNoQyxDQUFDLENBQUE7Z0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDM0M7aUJBQU07Z0JBQ0wsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ25CO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7SUFFTyxlQUFlLENBQUMsTUFBaUI7UUFDdkMsSUFBSSxNQUFNLEtBQUssS0FBSyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxLQUFLLGlCQUFzQixDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDNUIsQ0FBQztDQUNGOzs7SUE1S0MsdUNBQW1DOztJQUNuQyw0QkFBVzs7SUFDWCwyQkFBd0M7O0lBQ3hDLGdDQUF1Qzs7SUFDdkMsK0JBQXlDOzs7OztJQUV6QyxrQ0FBOEI7Ozs7O0lBRWxCLGdDQUE4Qjs7Ozs7SUFBRSw0QkFBNEI7O0lBQUUsdUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbmltcG9ydCB7IEVTQ0FQRSwgaGFzTW9kaWZpZXJLZXkgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IGlzUHJvbWlzZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQmFzZU1vZGFsQ29udGFpbmVyIH0gZnJvbSAnLi9tb2RhbC1jb250YWluZXInO1xuaW1wb3J0IHsgTnpNb2RhbExlZ2FjeUFQSSB9IGZyb20gJy4vbW9kYWwtbGVnYWN5LWFwaSc7XG5pbXBvcnQgeyBNb2RhbE9wdGlvbnMgfSBmcm9tICcuL21vZGFsLXR5cGVzJztcblxuZXhwb3J0IGNvbnN0IGVudW0gTnpNb2RhbFN0YXRlIHtcbiAgT1BFTixcbiAgQ0xPU0lORyxcbiAgQ0xPU0VEXG59XG5cbmV4cG9ydCBjb25zdCBlbnVtIE56VHJpZ2dlckFjdGlvbiB7XG4gIENBTkNFTCA9ICdjYW5jZWwnLFxuICBPSyA9ICdvaydcbn1cblxuZXhwb3J0IGNsYXNzIE56TW9kYWxSZWY8VCA9IE56U2FmZUFueSwgUiA9IE56U2FmZUFueT4gaW1wbGVtZW50cyBOek1vZGFsTGVnYWN5QVBJPFQsIFI+IHtcbiAgY29tcG9uZW50SW5zdGFuY2U6IFQgfCBudWxsID0gbnVsbDtcbiAgcmVzdWx0PzogUjtcbiAgc3RhdGU6IE56TW9kYWxTdGF0ZSA9IE56TW9kYWxTdGF0ZS5PUEVOO1xuICBhZnRlckNsb3NlOiBTdWJqZWN0PFI+ID0gbmV3IFN1YmplY3QoKTtcbiAgYWZ0ZXJPcGVuOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwcml2YXRlIGNsb3NlVGltZW91dD86IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYsIHByaXZhdGUgY29uZmlnOiBNb2RhbE9wdGlvbnMsIHB1YmxpYyBjb250YWluZXJJbnN0YW5jZTogQmFzZU1vZGFsQ29udGFpbmVyKSB7XG4gICAgY29udGFpbmVySW5zdGFuY2UuYW5pbWF0aW9uU3RhdGVDaGFuZ2VkXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKGV2ZW50ID0+IGV2ZW50LnBoYXNlTmFtZSA9PT0gJ2RvbmUnICYmIGV2ZW50LnRvU3RhdGUgPT09ICdlbnRlcicpLFxuICAgICAgICB0YWtlKDEpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5hZnRlck9wZW4ubmV4dCgpO1xuICAgICAgICB0aGlzLmFmdGVyT3Blbi5jb21wbGV0ZSgpO1xuICAgICAgICBpZiAoY29uZmlnLm56QWZ0ZXJPcGVuIGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKSB7XG4gICAgICAgICAgY29uZmlnLm56QWZ0ZXJPcGVuLmVtaXQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICBjb250YWluZXJJbnN0YW5jZS5hbmltYXRpb25TdGF0ZUNoYW5nZWRcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoZXZlbnQgPT4gZXZlbnQucGhhc2VOYW1lID09PSAnZG9uZScgJiYgZXZlbnQudG9TdGF0ZSA9PT0gJ2V4aXQnKSxcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsb3NlVGltZW91dCk7XG4gICAgICAgIHRoaXMuX2ZpbmlzaERpYWxvZ0Nsb3NlKCk7XG4gICAgICB9KTtcblxuICAgIGNvbnRhaW5lckluc3RhbmNlLmNvbnRhaW5lckNsaWNrLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGNvbnN0IGNhbmNlbGFibGUgPSAhdGhpcy5jb25maWcubnpDYW5jZWxMb2FkaW5nICYmICF0aGlzLmNvbmZpZy5uek9rTG9hZGluZztcbiAgICAgIGlmIChjYW5jZWxhYmxlKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlcihOelRyaWdnZXJBY3Rpb24uQ0FOQ0VMKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG92ZXJsYXlSZWZcbiAgICAgIC5rZXlkb3duRXZlbnRzKClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoZXZlbnQgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAodGhpcy5jb25maWcubnpLZXlib2FyZCBhcyBib29sZWFuKSAmJlxuICAgICAgICAgICAgIXRoaXMuY29uZmlnLm56Q2FuY2VsTG9hZGluZyAmJlxuICAgICAgICAgICAgIXRoaXMuY29uZmlnLm56T2tMb2FkaW5nICYmXG4gICAgICAgICAgICBldmVudC5rZXlDb2RlID09PSBFU0NBUEUgJiZcbiAgICAgICAgICAgICFoYXNNb2RpZmllcktleShldmVudClcbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudHJpZ2dlcihOelRyaWdnZXJBY3Rpb24uQ0FOQ0VMKTtcbiAgICAgIH0pO1xuXG4gICAgY29udGFpbmVySW5zdGFuY2UuY2FuY2VsVHJpZ2dlcmVkLnN1YnNjcmliZSgoKSA9PiB0aGlzLnRyaWdnZXIoTnpUcmlnZ2VyQWN0aW9uLkNBTkNFTCkpO1xuXG4gICAgY29udGFpbmVySW5zdGFuY2Uub2tUcmlnZ2VyZWQuc3Vic2NyaWJlKCgpID0+IHRoaXMudHJpZ2dlcihOelRyaWdnZXJBY3Rpb24uT0spKTtcblxuICAgIG92ZXJsYXlSZWYuZGV0YWNobWVudHMoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5hZnRlckNsb3NlLm5leHQodGhpcy5yZXN1bHQpO1xuICAgICAgdGhpcy5hZnRlckNsb3NlLmNvbXBsZXRlKCk7XG4gICAgICBpZiAoY29uZmlnLm56QWZ0ZXJDbG9zZSBpbnN0YW5jZW9mIEV2ZW50RW1pdHRlcikge1xuICAgICAgICBjb25maWcubnpBZnRlckNsb3NlLmVtaXQodGhpcy5yZXN1bHQpO1xuICAgICAgfVxuICAgICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZSA9IG51bGw7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0Q29udGVudENvbXBvbmVudCgpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRJbnN0YW5jZSBhcyBUO1xuICB9XG5cbiAgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVySW5zdGFuY2UuZ2V0TmF0aXZlRWxlbWVudCgpO1xuICB9XG5cbiAgZGVzdHJveShyZXN1bHQ/OiBSKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZShyZXN1bHQpO1xuICB9XG5cbiAgdHJpZ2dlck9rKCk6IHZvaWQge1xuICAgIHRoaXMudHJpZ2dlcihOelRyaWdnZXJBY3Rpb24uT0spO1xuICB9XG5cbiAgdHJpZ2dlckNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLnRyaWdnZXIoTnpUcmlnZ2VyQWN0aW9uLkNBTkNFTCk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbiB0aGUgbW9kYWwuXG4gICAqIEBkZXByZWNhdGVkIE9wZW5lZCB3aGVuIGNyZWF0ZSwgdGhpcyBtZXRob2QgaXMgdXNlbGVzcy5cbiAgICogQGJyZWFraW5nLWNoYW5nZSAxMC4wLjBcbiAgICovXG4gIG9wZW4oKTogdm9pZCB7XG4gICAgLy8gbm9vcFxuICB9XG5cbiAgY2xvc2UocmVzdWx0PzogUik6IHZvaWQge1xuICAgIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xuICAgIHRoaXMuY29udGFpbmVySW5zdGFuY2UuYW5pbWF0aW9uU3RhdGVDaGFuZ2VkXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKGV2ZW50ID0+IGV2ZW50LnBoYXNlTmFtZSA9PT0gJ3N0YXJ0JyksXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoQmFja2Ryb3AoKTtcbiAgICAgICAgdGhpcy5jbG9zZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9maW5pc2hEaWFsb2dDbG9zZSgpO1xuICAgICAgICB9LCBldmVudC50b3RhbFRpbWUgKyAxMDApO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmNvbnRhaW5lckluc3RhbmNlLnN0YXJ0RXhpdEFuaW1hdGlvbigpO1xuICAgIHRoaXMuc3RhdGUgPSBOek1vZGFsU3RhdGUuQ0xPU0lORztcbiAgfVxuXG4gIHVwZGF0ZUNvbmZpZyhjb25maWc6IE1vZGFsT3B0aW9ucyk6IHZvaWQge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5jb25maWcsIGNvbmZpZyk7XG4gICAgdGhpcy5jb250YWluZXJJbnN0YW5jZS5iaW5kQmFja2Ryb3BTdHlsZSgpO1xuICAgIHRoaXMuY29udGFpbmVySW5zdGFuY2UuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZ2V0U3RhdGUoKTogTnpNb2RhbFN0YXRlIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgfVxuXG4gIGdldENvbmZpZygpOiBNb2RhbE9wdGlvbnMge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZztcbiAgfVxuXG4gIGdldEJhY2tkcm9wRWxlbWVudCgpOiBIVE1MRWxlbWVudCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLm92ZXJsYXlSZWYuYmFja2Ryb3BFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSB0cmlnZ2VyKGFjdGlvbjogTnpUcmlnZ2VyQWN0aW9uKTogdm9pZCB7XG4gICAgY29uc3QgdHJpZ2dlciA9IHsgb2s6IHRoaXMuY29uZmlnLm56T25PaywgY2FuY2VsOiB0aGlzLmNvbmZpZy5uek9uQ2FuY2VsIH1bYWN0aW9uXTtcbiAgICBjb25zdCBsb2FkaW5nS2V5ID0geyBvazogJ256T2tMb2FkaW5nJywgY2FuY2VsOiAnbnpDYW5jZWxMb2FkaW5nJyB9W2FjdGlvbl0gYXMgJ256T2tMb2FkaW5nJyB8ICduekNhbmNlbExvYWRpbmcnO1xuICAgIGNvbnN0IGxvYWRpbmcgPSB0aGlzLmNvbmZpZ1tsb2FkaW5nS2V5XTtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHJpZ2dlciBpbnN0YW5jZW9mIEV2ZW50RW1pdHRlcikge1xuICAgICAgdHJpZ2dlci5lbWl0KHRoaXMuZ2V0Q29udGVudENvbXBvbmVudCgpKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0cmlnZ2VyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSB0cmlnZ2VyKHRoaXMuZ2V0Q29udGVudENvbXBvbmVudCgpKTtcbiAgICAgIGNvbnN0IGNhc2VDbG9zZSA9IChkb0Nsb3NlOiBib29sZWFuIHwgdm9pZCB8IHt9KSA9PiBkb0Nsb3NlICE9PSBmYWxzZSAmJiB0aGlzLmNsb3NlKGRvQ2xvc2UgYXMgUik7XG4gICAgICBpZiAoaXNQcm9taXNlKHJlc3VsdCkpIHtcbiAgICAgICAgdGhpcy5jb25maWdbbG9hZGluZ0tleV0gPSB0cnVlO1xuICAgICAgICBjb25zdCBoYW5kbGVUaGVuID0gKGRvQ2xvc2U6IGJvb2xlYW4gfCB2b2lkIHwge30pID0+IHtcbiAgICAgICAgICB0aGlzLmNvbmZpZ1tsb2FkaW5nS2V5XSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuY2xvc2VXaGl0UmVzdWx0KGRvQ2xvc2UpO1xuICAgICAgICB9O1xuICAgICAgICByZXN1bHQudGhlbihoYW5kbGVUaGVuKS5jYXRjaChoYW5kbGVUaGVuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhc2VDbG9zZShyZXN1bHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xvc2VXaGl0UmVzdWx0KHJlc3VsdDogTnpTYWZlQW55KTogdm9pZCB7XG4gICAgaWYgKHJlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuY2xvc2UocmVzdWx0KTtcbiAgICB9XG4gIH1cblxuICBfZmluaXNoRGlhbG9nQ2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZSA9IE56TW9kYWxTdGF0ZS5DTE9TRUQ7XG4gICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgfVxufVxuIl19