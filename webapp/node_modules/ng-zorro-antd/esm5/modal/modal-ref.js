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
var NzModalState = {
    OPEN: 0,
    CLOSING: 1,
    CLOSED: 2,
};
export { NzModalState };
/** @enum {string} */
var NzTriggerAction = {
    CANCEL: "cancel",
    OK: "ok",
};
export { NzTriggerAction };
/**
 * @template T, R
 */
var /**
 * @template T, R
 */
NzModalRef = /** @class */ (function () {
    function NzModalRef(overlayRef, config, containerInstance) {
        var _this = this;
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
        function (event) { return event.phaseName === 'done' && event.toState === 'enter'; })), take(1))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.afterOpen.next();
            _this.afterOpen.complete();
            if (config.nzAfterOpen instanceof EventEmitter) {
                config.nzAfterOpen.emit();
            }
        }));
        containerInstance.animationStateChanged
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.phaseName === 'done' && event.toState === 'exit'; })), take(1))
            .subscribe((/**
         * @return {?}
         */
        function () {
            clearTimeout(_this.closeTimeout);
            _this._finishDialogClose();
        }));
        containerInstance.containerClick.pipe(take(1)).subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var cancelable = !_this.config.nzCancelLoading && !_this.config.nzOkLoading;
            if (cancelable) {
                _this.trigger("cancel" /* CANCEL */);
            }
        }));
        overlayRef
            .keydownEvents()
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return (((/** @type {?} */ (_this.config.nzKeyboard))) &&
                !_this.config.nzCancelLoading &&
                !_this.config.nzOkLoading &&
                event.keyCode === ESCAPE &&
                !hasModifierKey(event));
        })))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.preventDefault();
            _this.trigger("cancel" /* CANCEL */);
        }));
        containerInstance.cancelTriggered.subscribe((/**
         * @return {?}
         */
        function () { return _this.trigger("cancel" /* CANCEL */); }));
        containerInstance.okTriggered.subscribe((/**
         * @return {?}
         */
        function () { return _this.trigger("ok" /* OK */); }));
        overlayRef.detachments().subscribe((/**
         * @return {?}
         */
        function () {
            _this.afterClose.next(_this.result);
            _this.afterClose.complete();
            if (config.nzAfterClose instanceof EventEmitter) {
                config.nzAfterClose.emit(_this.result);
            }
            _this.componentInstance = null;
            _this.overlayRef.dispose();
        }));
    }
    /**
     * @return {?}
     */
    NzModalRef.prototype.getContentComponent = /**
     * @return {?}
     */
    function () {
        return (/** @type {?} */ (this.componentInstance));
    };
    /**
     * @return {?}
     */
    NzModalRef.prototype.getElement = /**
     * @return {?}
     */
    function () {
        return this.containerInstance.getNativeElement();
    };
    /**
     * @param {?=} result
     * @return {?}
     */
    NzModalRef.prototype.destroy = /**
     * @param {?=} result
     * @return {?}
     */
    function (result) {
        this.close(result);
    };
    /**
     * @return {?}
     */
    NzModalRef.prototype.triggerOk = /**
     * @return {?}
     */
    function () {
        this.trigger("ok" /* OK */);
    };
    /**
     * @return {?}
     */
    NzModalRef.prototype.triggerCancel = /**
     * @return {?}
     */
    function () {
        this.trigger("cancel" /* CANCEL */);
    };
    /**
     * Open the modal.
     * @deprecated Opened when create, this method is useless.
     * @breaking-change 10.0.0
     */
    /**
     * Open the modal.
     * @deprecated Opened when create, this method is useless.
     * \@breaking-change 10.0.0
     * @return {?}
     */
    NzModalRef.prototype.open = /**
     * Open the modal.
     * @deprecated Opened when create, this method is useless.
     * \@breaking-change 10.0.0
     * @return {?}
     */
    function () {
        // noop
    };
    /**
     * @param {?=} result
     * @return {?}
     */
    NzModalRef.prototype.close = /**
     * @param {?=} result
     * @return {?}
     */
    function (result) {
        var _this = this;
        this.result = result;
        this.containerInstance.animationStateChanged
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.phaseName === 'start'; })), take(1))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.overlayRef.detachBackdrop();
            _this.closeTimeout = setTimeout((/**
             * @return {?}
             */
            function () {
                _this._finishDialogClose();
            }), event.totalTime + 100);
        }));
        this.containerInstance.startExitAnimation();
        this.state = 1 /* CLOSING */;
    };
    /**
     * @param {?} config
     * @return {?}
     */
    NzModalRef.prototype.updateConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        Object.assign(this.config, config);
        this.containerInstance.bindBackdropStyle();
        this.containerInstance.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzModalRef.prototype.getState = /**
     * @return {?}
     */
    function () {
        return this.state;
    };
    /**
     * @return {?}
     */
    NzModalRef.prototype.getConfig = /**
     * @return {?}
     */
    function () {
        return this.config;
    };
    /**
     * @return {?}
     */
    NzModalRef.prototype.getBackdropElement = /**
     * @return {?}
     */
    function () {
        return this.overlayRef.backdropElement;
    };
    /**
     * @private
     * @param {?} action
     * @return {?}
     */
    NzModalRef.prototype.trigger = /**
     * @private
     * @param {?} action
     * @return {?}
     */
    function (action) {
        var _this = this;
        /** @type {?} */
        var trigger = { ok: this.config.nzOnOk, cancel: this.config.nzOnCancel }[action];
        /** @type {?} */
        var loadingKey = (/** @type {?} */ ({ ok: 'nzOkLoading', cancel: 'nzCancelLoading' }[action]));
        /** @type {?} */
        var loading = this.config[loadingKey];
        if (loading) {
            return;
        }
        if (trigger instanceof EventEmitter) {
            trigger.emit(this.getContentComponent());
        }
        else if (typeof trigger === 'function') {
            /** @type {?} */
            var result = trigger(this.getContentComponent());
            /** @type {?} */
            var caseClose = (/**
             * @param {?} doClose
             * @return {?}
             */
            function (doClose) { return doClose !== false && _this.close((/** @type {?} */ (doClose))); });
            if (isPromise(result)) {
                this.config[loadingKey] = true;
                /** @type {?} */
                var handleThen = (/**
                 * @param {?} doClose
                 * @return {?}
                 */
                function (doClose) {
                    _this.config[loadingKey] = false;
                    _this.closeWhitResult(doClose);
                });
                result.then(handleThen).catch(handleThen);
            }
            else {
                caseClose(result);
            }
        }
    };
    /**
     * @private
     * @param {?} result
     * @return {?}
     */
    NzModalRef.prototype.closeWhitResult = /**
     * @private
     * @param {?} result
     * @return {?}
     */
    function (result) {
        if (result !== false) {
            this.close(result);
        }
    };
    /**
     * @return {?}
     */
    NzModalRef.prototype._finishDialogClose = /**
     * @return {?}
     */
    function () {
        this.state = 2 /* CLOSED */;
        this.overlayRef.dispose();
    };
    return NzModalRef;
}());
/**
 * @template T, R
 */
export { NzModalRef };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtcmVmLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tb2RhbC8iLCJzb3VyY2VzIjpbIm1vZGFsLXJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRS9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFNOUMsSUFBa0IsWUFBWTtJQUM1QixJQUFJLEdBQUE7SUFDSixPQUFPLEdBQUE7SUFDUCxNQUFNLEdBQUE7RUFDUDs7O0FBRUQsSUFBa0IsZUFBZTtJQUMvQixNQUFNLFVBQVc7SUFDakIsRUFBRSxNQUFPO0VBQ1Y7Ozs7O0FBRUQ7Ozs7SUFTRSxvQkFBb0IsVUFBc0IsRUFBVSxNQUFvQixFQUFTLGlCQUFxQztRQUF0SCxpQkE4REM7UUE5RG1CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBQVMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFvQjtRQVJ0SCxzQkFBaUIsR0FBYSxJQUFJLENBQUM7UUFFbkMsVUFBSyxnQkFBbUM7UUFDeEMsZUFBVSxHQUFlLElBQUksT0FBTyxFQUFFLENBQUM7UUFDdkMsY0FBUyxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBS3ZDLGlCQUFpQixDQUFDLHFCQUFxQjthQUNwQyxJQUFJLENBQ0gsTUFBTTs7OztRQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLFNBQVMsS0FBSyxNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxPQUFPLEVBQXZELENBQXVELEVB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NEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuaW1wb3J0IHsgRVNDQVBFLCBoYXNNb2RpZmllcktleSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBCYXNlTW9kYWxDb250YWluZXIgfSBmcm9tICcuL21vZGFsLWNvbnRhaW5lcic7XG5pbXBvcnQgeyBOek1vZGFsTGVnYWN5QVBJIH0gZnJvbSAnLi9tb2RhbC1sZWdhY3ktYXBpJztcbmltcG9ydCB7IE1vZGFsT3B0aW9ucyB9IGZyb20gJy4vbW9kYWwtdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgZW51bSBOek1vZGFsU3RhdGUge1xuICBPUEVOLFxuICBDTE9TSU5HLFxuICBDTE9TRURcbn1cblxuZXhwb3J0IGNvbnN0IGVudW0gTnpUcmlnZ2VyQWN0aW9uIHtcbiAgQ0FOQ0VMID0gJ2NhbmNlbCcsXG4gIE9LID0gJ29rJ1xufVxuXG5leHBvcnQgY2xhc3MgTnpNb2RhbFJlZjxUID0gTnpTYWZlQW55LCBSID0gTnpTYWZlQW55PiBpbXBsZW1lbnRzIE56TW9kYWxMZWdhY3lBUEk8VCwgUj4ge1xuICBjb21wb25lbnRJbnN0YW5jZTogVCB8IG51bGwgPSBudWxsO1xuICByZXN1bHQ/OiBSO1xuICBzdGF0ZTogTnpNb2RhbFN0YXRlID0gTnpNb2RhbFN0YXRlLk9QRU47XG4gIGFmdGVyQ2xvc2U6IFN1YmplY3Q8Uj4gPSBuZXcgU3ViamVjdCgpO1xuICBhZnRlck9wZW46IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByaXZhdGUgY2xvc2VUaW1lb3V0PzogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiwgcHJpdmF0ZSBjb25maWc6IE1vZGFsT3B0aW9ucywgcHVibGljIGNvbnRhaW5lckluc3RhbmNlOiBCYXNlTW9kYWxDb250YWluZXIpIHtcbiAgICBjb250YWluZXJJbnN0YW5jZS5hbmltYXRpb25TdGF0ZUNoYW5nZWRcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoZXZlbnQgPT4gZXZlbnQucGhhc2VOYW1lID09PSAnZG9uZScgJiYgZXZlbnQudG9TdGF0ZSA9PT0gJ2VudGVyJyksXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmFmdGVyT3Blbi5uZXh0KCk7XG4gICAgICAgIHRoaXMuYWZ0ZXJPcGVuLmNvbXBsZXRlKCk7XG4gICAgICAgIGlmIChjb25maWcubnpBZnRlck9wZW4gaW5zdGFuY2VvZiBFdmVudEVtaXR0ZXIpIHtcbiAgICAgICAgICBjb25maWcubnpBZnRlck9wZW4uZW1pdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIGNvbnRhaW5lckluc3RhbmNlLmFuaW1hdGlvblN0YXRlQ2hhbmdlZFxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcihldmVudCA9PiBldmVudC5waGFzZU5hbWUgPT09ICdkb25lJyAmJiBldmVudC50b1N0YXRlID09PSAnZXhpdCcpLFxuICAgICAgICB0YWtlKDEpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xvc2VUaW1lb3V0KTtcbiAgICAgICAgdGhpcy5fZmluaXNoRGlhbG9nQ2xvc2UoKTtcbiAgICAgIH0pO1xuXG4gICAgY29udGFpbmVySW5zdGFuY2UuY29udGFpbmVyQ2xpY2sucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3QgY2FuY2VsYWJsZSA9ICF0aGlzLmNvbmZpZy5uekNhbmNlbExvYWRpbmcgJiYgIXRoaXMuY29uZmlnLm56T2tMb2FkaW5nO1xuICAgICAgaWYgKGNhbmNlbGFibGUpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyKE56VHJpZ2dlckFjdGlvbi5DQU5DRUwpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgb3ZlcmxheVJlZlxuICAgICAgLmtleWRvd25FdmVudHMoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcihldmVudCA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICh0aGlzLmNvbmZpZy5uektleWJvYXJkIGFzIGJvb2xlYW4pICYmXG4gICAgICAgICAgICAhdGhpcy5jb25maWcubnpDYW5jZWxMb2FkaW5nICYmXG4gICAgICAgICAgICAhdGhpcy5jb25maWcubnpPa0xvYWRpbmcgJiZcbiAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IEVTQ0FQRSAmJlxuICAgICAgICAgICAgIWhhc01vZGlmaWVyS2V5KGV2ZW50KVxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyKE56VHJpZ2dlckFjdGlvbi5DQU5DRUwpO1xuICAgICAgfSk7XG5cbiAgICBjb250YWluZXJJbnN0YW5jZS5jYW5jZWxUcmlnZ2VyZWQuc3Vic2NyaWJlKCgpID0+IHRoaXMudHJpZ2dlcihOelRyaWdnZXJBY3Rpb24uQ0FOQ0VMKSk7XG5cbiAgICBjb250YWluZXJJbnN0YW5jZS5va1RyaWdnZXJlZC5zdWJzY3JpYmUoKCkgPT4gdGhpcy50cmlnZ2VyKE56VHJpZ2dlckFjdGlvbi5PSykpO1xuXG4gICAgb3ZlcmxheVJlZi5kZXRhY2htZW50cygpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmFmdGVyQ2xvc2UubmV4dCh0aGlzLnJlc3VsdCk7XG4gICAgICB0aGlzLmFmdGVyQ2xvc2UuY29tcGxldGUoKTtcbiAgICAgIGlmIChjb25maWcubnpBZnRlckNsb3NlIGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKSB7XG4gICAgICAgIGNvbmZpZy5uekFmdGVyQ2xvc2UuZW1pdCh0aGlzLnJlc3VsdCk7XG4gICAgICB9XG4gICAgICB0aGlzLmNvbXBvbmVudEluc3RhbmNlID0gbnVsbDtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRDb250ZW50Q29tcG9uZW50KCk6IFQge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudEluc3RhbmNlIGFzIFQ7XG4gIH1cblxuICBnZXRFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXJJbnN0YW5jZS5nZXROYXRpdmVFbGVtZW50KCk7XG4gIH1cblxuICBkZXN0cm95KHJlc3VsdD86IFIpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlKHJlc3VsdCk7XG4gIH1cblxuICB0cmlnZ2VyT2soKTogdm9pZCB7XG4gICAgdGhpcy50cmlnZ2VyKE56VHJpZ2dlckFjdGlvbi5PSyk7XG4gIH1cblxuICB0cmlnZ2VyQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMudHJpZ2dlcihOelRyaWdnZXJBY3Rpb24uQ0FOQ0VMKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVuIHRoZSBtb2RhbC5cbiAgICogQGRlcHJlY2F0ZWQgT3BlbmVkIHdoZW4gY3JlYXRlLCB0aGlzIG1ldGhvZCBpcyB1c2VsZXNzLlxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMFxuICAgKi9cbiAgb3BlbigpOiB2b2lkIHtcbiAgICAvLyBub29wXG4gIH1cblxuICBjbG9zZShyZXN1bHQ/OiBSKTogdm9pZCB7XG4gICAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG4gICAgdGhpcy5jb250YWluZXJJbnN0YW5jZS5hbmltYXRpb25TdGF0ZUNoYW5nZWRcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoZXZlbnQgPT4gZXZlbnQucGhhc2VOYW1lID09PSAnc3RhcnQnKSxcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICAgIHRoaXMub3ZlcmxheVJlZi5kZXRhY2hCYWNrZHJvcCgpO1xuICAgICAgICB0aGlzLmNsb3NlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2ZpbmlzaERpYWxvZ0Nsb3NlKCk7XG4gICAgICAgIH0sIGV2ZW50LnRvdGFsVGltZSArIDEwMCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuY29udGFpbmVySW5zdGFuY2Uuc3RhcnRFeGl0QW5pbWF0aW9uKCk7XG4gICAgdGhpcy5zdGF0ZSA9IE56TW9kYWxTdGF0ZS5DTE9TSU5HO1xuICB9XG5cbiAgdXBkYXRlQ29uZmlnKGNvbmZpZzogTW9kYWxPcHRpb25zKTogdm9pZCB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvbmZpZywgY29uZmlnKTtcbiAgICB0aGlzLmNvbnRhaW5lckluc3RhbmNlLmJpbmRCYWNrZHJvcFN0eWxlKCk7XG4gICAgdGhpcy5jb250YWluZXJJbnN0YW5jZS5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBnZXRTdGF0ZSgpOiBOek1vZGFsU3RhdGUge1xuICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICB9XG5cbiAgZ2V0Q29uZmlnKCk6IE1vZGFsT3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnO1xuICB9XG5cbiAgZ2V0QmFja2Ryb3BFbGVtZW50KCk6IEhUTUxFbGVtZW50IHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheVJlZi5iYWNrZHJvcEVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIHRyaWdnZXIoYWN0aW9uOiBOelRyaWdnZXJBY3Rpb24pOiB2b2lkIHtcbiAgICBjb25zdCB0cmlnZ2VyID0geyBvazogdGhpcy5jb25maWcubnpPbk9rLCBjYW5jZWw6IHRoaXMuY29uZmlnLm56T25DYW5jZWwgfVthY3Rpb25dO1xuICAgIGNvbnN0IGxvYWRpbmdLZXkgPSB7IG9rOiAnbnpPa0xvYWRpbmcnLCBjYW5jZWw6ICduekNhbmNlbExvYWRpbmcnIH1bYWN0aW9uXSBhcyAnbnpPa0xvYWRpbmcnIHwgJ256Q2FuY2VsTG9hZGluZyc7XG4gICAgY29uc3QgbG9hZGluZyA9IHRoaXMuY29uZmlnW2xvYWRpbmdLZXldO1xuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0cmlnZ2VyIGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKSB7XG4gICAgICB0cmlnZ2VyLmVtaXQodGhpcy5nZXRDb250ZW50Q29tcG9uZW50KCkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRyaWdnZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRyaWdnZXIodGhpcy5nZXRDb250ZW50Q29tcG9uZW50KCkpO1xuICAgICAgY29uc3QgY2FzZUNsb3NlID0gKGRvQ2xvc2U6IGJvb2xlYW4gfCB2b2lkIHwge30pID0+IGRvQ2xvc2UgIT09IGZhbHNlICYmIHRoaXMuY2xvc2UoZG9DbG9zZSBhcyBSKTtcbiAgICAgIGlmIChpc1Byb21pc2UocmVzdWx0KSkge1xuICAgICAgICB0aGlzLmNvbmZpZ1tsb2FkaW5nS2V5XSA9IHRydWU7XG4gICAgICAgIGNvbnN0IGhhbmRsZVRoZW4gPSAoZG9DbG9zZTogYm9vbGVhbiB8IHZvaWQgfCB7fSkgPT4ge1xuICAgICAgICAgIHRoaXMuY29uZmlnW2xvYWRpbmdLZXldID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jbG9zZVdoaXRSZXN1bHQoZG9DbG9zZSk7XG4gICAgICAgIH07XG4gICAgICAgIHJlc3VsdC50aGVuKGhhbmRsZVRoZW4pLmNhdGNoKGhhbmRsZVRoZW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FzZUNsb3NlKHJlc3VsdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbG9zZVdoaXRSZXN1bHQocmVzdWx0OiBOelNhZmVBbnkpOiB2b2lkIHtcbiAgICBpZiAocmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5jbG9zZShyZXN1bHQpO1xuICAgIH1cbiAgfVxuXG4gIF9maW5pc2hEaWFsb2dDbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlID0gTnpNb2RhbFN0YXRlLkNMT1NFRDtcbiAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xuICB9XG59XG4iXX0=