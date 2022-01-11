/**
 * @fileoverview added by tsickle
 * Generated from: base.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ComponentPortal } from '@angular/cdk/portal';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
/** @type {?} */
let globalCounter = 0;
/**
 * @abstract
 */
export class NzMNService {
    /**
     * @param {?} nzSingletonService
     * @param {?} overlay
     * @param {?} injector
     */
    constructor(nzSingletonService, overlay, injector) {
        this.nzSingletonService = nzSingletonService;
        this.overlay = overlay;
        this.injector = injector;
    }
    /**
     * @param {?=} id
     * @return {?}
     */
    remove(id) {
        if (this.container) {
            if (id) {
                this.container.remove(id);
            }
            else {
                this.container.removeAll();
            }
        }
    }
    /**
     * @protected
     * @return {?}
     */
    getInstanceId() {
        return `${this.componentPrefix}-${globalCounter++}`;
    }
    /**
     * @protected
     * @template T
     * @param {?} ctor
     * @return {?}
     */
    withContainer(ctor) {
        /** @type {?} */
        let containerInstance = this.nzSingletonService.getSingletonWithKey(this.componentPrefix);
        if (containerInstance) {
            return (/** @type {?} */ (containerInstance));
        }
        /** @type {?} */
        const overlayRef = this.overlay.create({
            hasBackdrop: false,
            scrollStrategy: this.overlay.scrollStrategies.noop(),
            positionStrategy: this.overlay.position().global()
        });
        /** @type {?} */
        const componentPortal = new ComponentPortal(ctor, null, this.injector);
        /** @type {?} */
        const componentRef = overlayRef.attach(componentPortal);
        /** @type {?} */
        const overlayPane = overlayRef.overlayElement;
        overlayPane.style.zIndex = '1010';
        if (!containerInstance) {
            this.container = containerInstance = componentRef.instance;
            this.nzSingletonService.registerSingletonWithKey(this.componentPrefix, containerInstance);
        }
        return (/** @type {?} */ (containerInstance));
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    NzMNService.prototype.componentPrefix;
    /**
     * @type {?}
     * @protected
     */
    NzMNService.prototype.container;
    /**
     * @type {?}
     * @protected
     */
    NzMNService.prototype.nzSingletonService;
    /**
     * @type {?}
     * @protected
     */
    NzMNService.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    NzMNService.prototype.injector;
}
/**
 * @abstract
 */
export class NzMNContainerComponent {
    /**
     * @param {?} cdr
     * @param {?} nzConfigService
     */
    constructor(cdr, nzConfigService) {
        this.cdr = cdr;
        this.nzConfigService = nzConfigService;
        this.instances = [];
        this.destroy$ = new Subject();
        this.updateConfig();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscribeConfigChange();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    create(data) {
        /** @type {?} */
        const instance = this.onCreate(data);
        if (this.instances.length >= (/** @type {?} */ (this.config)).nzMaxStack) {
            this.instances = this.instances.slice(1);
        }
        this.instances = [...this.instances, instance];
        this.readyInstances();
        return instance;
    }
    /**
     * @param {?} id
     * @param {?=} userAction
     * @return {?}
     */
    remove(id, userAction = false) {
        this.instances.some((/**
         * @param {?} instance
         * @param {?} index
         * @return {?}
         */
        (instance, index) => {
            if (instance.messageId === id) {
                this.instances.splice(index, 1);
                this.instances = [...this.instances];
                this.onRemove(instance, userAction);
                this.readyInstances();
                return true;
            }
            return false;
        }));
    }
    /**
     * @return {?}
     */
    removeAll() {
        this.instances.forEach((/**
         * @param {?} i
         * @return {?}
         */
        i => this.onRemove(i, false)));
        this.instances = [];
        this.readyInstances();
    }
    /**
     * @protected
     * @param {?} instance
     * @return {?}
     */
    onCreate(instance) {
        instance.options = this.mergeOptions(instance.options);
        instance.onClose = new Subject();
        return (/** @type {?} */ (instance));
    }
    /**
     * @protected
     * @param {?} instance
     * @param {?} userAction
     * @return {?}
     */
    onRemove(instance, userAction) {
        instance.onClose.next(userAction);
        instance.onClose.complete();
    }
    /**
     * @protected
     * @return {?}
     */
    readyInstances() {
        this.cdr.detectChanges();
    }
    /**
     * @protected
     * @param {?=} options
     * @return {?}
     */
    mergeOptions(options) {
        const { nzDuration, nzAnimate, nzPauseOnHover } = (/** @type {?} */ (this.config));
        return Object.assign({ nzDuration, nzAnimate, nzPauseOnHover }, options);
    }
}
if (false) {
    /** @type {?} */
    NzMNContainerComponent.prototype.config;
    /** @type {?} */
    NzMNContainerComponent.prototype.instances;
    /**
     * @type {?}
     * @protected
     */
    NzMNContainerComponent.prototype.destroy$;
    /**
     * @type {?}
     * @protected
     */
    NzMNContainerComponent.prototype.cdr;
    /**
     * @type {?}
     * @protected
     */
    NzMNContainerComponent.prototype.nzConfigService;
    /**
     * @abstract
     * @protected
     * @return {?}
     */
    NzMNContainerComponent.prototype.updateConfig = function () { };
    /**
     * @abstract
     * @protected
     * @return {?}
     */
    NzMNContainerComponent.prototype.subscribeConfigChange = function () { };
}
/**
 * @abstract
 */
export class NzMNComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.destroyed = new EventEmitter();
        this.eraseTimer = null;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.options = (/** @type {?} */ (this.instance.options));
        if (this.options.nzAnimate) {
            this.instance.state = 'enter';
        }
        this.autoClose = this.options.nzDuration > 0;
        if (this.autoClose) {
            this.initErase();
            this.startEraseTimeout();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.autoClose) {
            this.clearEraseTimeout();
        }
    }
    /**
     * @return {?}
     */
    onEnter() {
        if (this.autoClose && this.options.nzPauseOnHover) {
            this.clearEraseTimeout();
            this.updateTTL();
        }
    }
    /**
     * @return {?}
     */
    onLeave() {
        if (this.autoClose && this.options.nzPauseOnHover) {
            this.startEraseTimeout();
        }
    }
    /**
     * @protected
     * @param {?=} userAction
     * @return {?}
     */
    destroy(userAction = false) {
        if (this.options.nzAnimate) {
            this.instance.state = 'leave';
            this.cdr.detectChanges();
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.destroyed.next({ id: this.instance.messageId, userAction: userAction });
            }), 200);
        }
        else {
            this.destroyed.next({ id: this.instance.messageId, userAction: userAction });
        }
    }
    /**
     * @private
     * @return {?}
     */
    initErase() {
        this.eraseTTL = this.options.nzDuration;
        this.eraseTimingStart = Date.now();
    }
    /**
     * @private
     * @return {?}
     */
    updateTTL() {
        if (this.autoClose) {
            this.eraseTTL -= Date.now() - (/** @type {?} */ (this.eraseTimingStart));
        }
    }
    /**
     * @private
     * @return {?}
     */
    startEraseTimeout() {
        if (this.eraseTTL > 0) {
            this.clearEraseTimeout();
            this.eraseTimer = setTimeout((/**
             * @return {?}
             */
            () => this.destroy()), this.eraseTTL);
            this.eraseTimingStart = Date.now();
        }
        else {
            this.destroy();
        }
    }
    /**
     * @private
     * @return {?}
     */
    clearEraseTimeout() {
        if (this.eraseTimer !== null) {
            clearTimeout(this.eraseTimer);
            this.eraseTimer = null;
        }
    }
}
if (false) {
    /** @type {?} */
    NzMNComponent.prototype.instance;
    /** @type {?} */
    NzMNComponent.prototype.index;
    /** @type {?} */
    NzMNComponent.prototype.destroyed;
    /**
     * @type {?}
     * @protected
     */
    NzMNComponent.prototype.options;
    /**
     * @type {?}
     * @protected
     */
    NzMNComponent.prototype.autoClose;
    /**
     * @type {?}
     * @protected
     */
    NzMNComponent.prototype.eraseTimer;
    /**
     * @type {?}
     * @protected
     */
    NzMNComponent.prototype.eraseTimingStart;
    /**
     * @type {?}
     * @protected
     */
    NzMNComponent.prototype.eraseTTL;
    /**
     * @type {?}
     * @protected
     */
    NzMNComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbWVzc2FnZS8iLCJzb3VyY2VzIjpbImJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBcUIsWUFBWSxFQUErQixNQUFNLGVBQWUsQ0FBQztBQUc3RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQUkzQixhQUFhLEdBQUcsQ0FBQzs7OztBQUVyQixNQUFNLE9BQWdCLFdBQVc7Ozs7OztJQUkvQixZQUFzQixrQkFBc0MsRUFBWSxPQUFnQixFQUFVLFFBQWtCO1FBQTlGLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFBWSxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7Ozs7O0lBRXhILE1BQU0sQ0FBQyxFQUFXO1FBQ2hCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLEVBQUUsRUFBRTtnQkFDTixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMzQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQzVCO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVTLGFBQWE7UUFDckIsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLElBQUksYUFBYSxFQUFFLEVBQUUsQ0FBQztJQUN0RCxDQUFDOzs7Ozs7O0lBRVMsYUFBYSxDQUFtQyxJQUFzQjs7WUFDMUUsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDekYsSUFBSSxpQkFBaUIsRUFBRTtZQUNyQixPQUFPLG1CQUFBLGlCQUFpQixFQUFLLENBQUM7U0FDL0I7O2NBRUssVUFBVSxHQUFH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T0FBTyxFQUFFLEdBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDcEM7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQjtJQUNILENBQUM7Ozs7O0lBRU8saUJBQWlCO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUU7WUFDNUIsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUN4QjtJQUNILENBQUM7Q0FDRjs7O0lBdEZDLGlDQUFtQzs7SUFDbkMsOEJBQWU7O0lBRWYsa0NBQTZFOzs7OztJQUU3RSxnQ0FBbUQ7Ozs7O0lBQ25ELGtDQUE4Qjs7Ozs7SUFDOUIsbUNBQTJDOzs7OztJQUMzQyx5Q0FBb0M7Ozs7O0lBQ3BDLGlDQUE0Qjs7Ozs7SUFFaEIsNEJBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSwgT3ZlcmxheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZXNzYWdlQ29uZmlnLCBOekNvbmZpZ1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IE56U2luZ2xldG9uU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE56TWVzc2FnZURhdGEsIE56TWVzc2FnZURhdGFPcHRpb25zIH0gZnJvbSAnLi90eXBpbmdzJztcblxubGV0IGdsb2JhbENvdW50ZXIgPSAwO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTnpNTlNlcnZpY2Uge1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgY29tcG9uZW50UHJlZml4OiBzdHJpbmc7XG4gIHByb3RlY3RlZCBjb250YWluZXI/OiBOek1OQ29udGFpbmVyQ29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBuelNpbmdsZXRvblNlcnZpY2U6IE56U2luZ2xldG9uU2VydmljZSwgcHJvdGVjdGVkIG92ZXJsYXk6IE92ZXJsYXksIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7fVxuXG4gIHJlbW92ZShpZD86IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgaWYgKGlkKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZShpZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVBbGwoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0SW5zdGFuY2VJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLmNvbXBvbmVudFByZWZpeH0tJHtnbG9iYWxDb3VudGVyKyt9YDtcbiAgfVxuXG4gIHByb3RlY3RlZCB3aXRoQ29udGFpbmVyPFQgZXh0ZW5kcyBOek1OQ29udGFpbmVyQ29tcG9uZW50PihjdG9yOiBDb21wb25lbnRUeXBlPFQ+KTogVCB7XG4gICAgbGV0IGNvbnRhaW5lckluc3RhbmNlID0gdGhpcy5uelNpbmdsZXRvblNlcnZpY2UuZ2V0U2luZ2xldG9uV2l0aEtleSh0aGlzLmNvbXBvbmVudFByZWZpeCk7XG4gICAgaWYgKGNvbnRhaW5lckluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gY29udGFpbmVySW5zdGFuY2UgYXMgVDtcbiAgICB9XG5cbiAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh7XG4gICAgICBoYXNCYWNrZHJvcDogZmFsc2UsXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMubm9vcCgpLFxuICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5vdmVybGF5LnBvc2l0aW9uKCkuZ2xvYmFsKClcbiAgICB9KTtcbiAgICBjb25zdCBjb21wb25lbnRQb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKGN0b3IsIG51bGwsIHRoaXMuaW5qZWN0b3IpO1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IG92ZXJsYXlSZWYuYXR0YWNoKGNvbXBvbmVudFBvcnRhbCk7XG4gICAgY29uc3Qgb3ZlcmxheVBhbmUgPSBvdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50O1xuICAgIG92ZXJsYXlQYW5lLnN0eWxlLnpJbmRleCA9ICcxMDEwJztcblxuICAgIGlmICghY29udGFpbmVySW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVySW5zdGFuY2UgPSBjb21wb25lbnRSZWYuaW5zdGFuY2U7XG4gICAgICB0aGlzLm56U2luZ2xldG9uU2VydmljZS5yZWdpc3RlclNpbmdsZXRvbldpdGhLZXkodGhpcy5jb21wb25lbnRQcmVmaXgsIGNvbnRhaW5lckluc3RhbmNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGFpbmVySW5zdGFuY2UgYXMgVDtcbiAgfVxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTnpNTkNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uZmlnPzogUmVxdWlyZWQ8TWVzc2FnZUNvbmZpZz47XG4gIGluc3RhbmNlczogQXJyYXk8UmVxdWlyZWQ8TnpNZXNzYWdlRGF0YT4+ID0gW107XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJvdGVjdGVkIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlKSB7XG4gICAgdGhpcy51cGRhdGVDb25maWcoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaWJlQ29uZmlnQ2hhbmdlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBjcmVhdGUoZGF0YTogTnpNZXNzYWdlRGF0YSk6IFJlcXVpcmVkPE56TWVzc2FnZURhdGE+IHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMub25DcmVhdGUoZGF0YSk7XG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZXMubGVuZ3RoID49IHRoaXMuY29uZmlnIS5uek1heFN0YWNrKSB7XG4gICAgICB0aGlzLmluc3RhbmNlcyA9IHRoaXMuaW5zdGFuY2VzLnNsaWNlKDEpO1xuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2VzID0gWy4uLnRoaXMuaW5zdGFuY2VzLCBpbnN0YW5jZV07XG5cbiAgICB0aGlzLnJlYWR5SW5zdGFuY2VzKCk7XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICByZW1vdmUoaWQ6IHN0cmluZywgdXNlckFjdGlvbjogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5pbnN0YW5jZXMuc29tZSgoaW5zdGFuY2UsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5zdGFuY2UubWVzc2FnZUlkID09PSBpZCkge1xuICAgICAgICB0aGlzLmluc3RhbmNlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLmluc3RhbmNlcyA9IFsuLi50aGlzLmluc3RhbmNlc107XG4gICAgICAgIHRoaXMub25SZW1vdmUoaW5zdGFuY2UsIHVzZXJBY3Rpb24pO1xuICAgICAgICB0aGlzLnJlYWR5SW5zdGFuY2VzKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlQWxsKCk6IHZvaWQge1xuICAgIHRoaXMuaW5zdGFuY2VzLmZvckVhY2goaSA9PiB0aGlzLm9uUmVtb3ZlKGksIGZhbHNlKSk7XG4gICAgdGhpcy5pbnN0YW5jZXMgPSBbXTtcblxuICAgIHRoaXMucmVhZHlJbnN0YW5jZXMoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvbkNyZWF0ZShpbnN0YW5jZTogTnpNZXNzYWdlRGF0YSk6IFJlcXVpcmVkPE56TWVzc2FnZURhdGE+IHtcbiAgICBpbnN0YW5jZS5vcHRpb25zID0gdGhpcy5tZXJnZU9wdGlvbnMoaW5zdGFuY2Uub3B0aW9ucyk7XG4gICAgaW5zdGFuY2Uub25DbG9zZSA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgcmV0dXJuIGluc3RhbmNlIGFzIFJlcXVpcmVkPE56TWVzc2FnZURhdGE+O1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uUmVtb3ZlKGluc3RhbmNlOiBSZXF1aXJlZDxOek1lc3NhZ2VEYXRhPiwgdXNlckFjdGlvbjogYm9vbGVhbik6IHZvaWQge1xuICAgIGluc3RhbmNlLm9uQ2xvc2UubmV4dCh1c2VyQWN0aW9uKTtcbiAgICBpbnN0YW5jZS5vbkNsb3NlLmNvbXBsZXRlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVhZHlJbnN0YW5jZXMoKTogdm9pZCB7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IHVwZGF0ZUNvbmZpZygpOiB2b2lkO1xuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBzdWJzY3JpYmVDb25maWdDaGFuZ2UoKTogdm9pZDtcblxuICBwcm90ZWN0ZWQgbWVyZ2VPcHRpb25zKG9wdGlvbnM/OiBOek1lc3NhZ2VEYXRhT3B0aW9ucyk6IE56TWVzc2FnZURhdGFPcHRpb25zIHtcbiAgICBjb25zdCB7IG56RHVyYXRpb24sIG56QW5pbWF0ZSwgbnpQYXVzZU9uSG92ZXIgfSA9IHRoaXMuY29uZmlnITtcbiAgICByZXR1cm4geyBuekR1cmF0aW9uLCBuekFuaW1hdGUsIG56UGF1c2VPbkhvdmVyLCAuLi5vcHRpb25zIH07XG4gIH1cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE56TU5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGluc3RhbmNlITogUmVxdWlyZWQ8TnpNZXNzYWdlRGF0YT47XG4gIGluZGV4PzogbnVtYmVyO1xuXG4gIHJlYWRvbmx5IGRlc3Ryb3llZCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBpZDogc3RyaW5nOyB1c2VyQWN0aW9uOiBib29sZWFuIH0+KCk7XG5cbiAgcHJvdGVjdGVkIG9wdGlvbnMhOiBSZXF1aXJlZDxOek1lc3NhZ2VEYXRhT3B0aW9ucz47XG4gIHByb3RlY3RlZCBhdXRvQ2xvc2U/OiBib29sZWFuO1xuICBwcm90ZWN0ZWQgZXJhc2VUaW1lcjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIHByb3RlY3RlZCBlcmFzZVRpbWluZ1N0YXJ0PzogbnVtYmVyO1xuICBwcm90ZWN0ZWQgZXJhc2VUVEwhOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5pbnN0YW5jZS5vcHRpb25zIGFzIFJlcXVpcmVkPE56TWVzc2FnZURhdGFPcHRpb25zPjtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMubnpBbmltYXRlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnN0YXRlID0gJ2VudGVyJztcbiAgICB9XG5cbiAgICB0aGlzLmF1dG9DbG9zZSA9IHRoaXMub3B0aW9ucy5uekR1cmF0aW9uID4gMDtcblxuICAgIGlmICh0aGlzLmF1dG9DbG9zZSkge1xuICAgICAgdGhpcy5pbml0RXJhc2UoKTtcbiAgICAgIHRoaXMuc3RhcnRFcmFzZVRpbWVvdXQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hdXRvQ2xvc2UpIHtcbiAgICAgIHRoaXMuY2xlYXJFcmFzZVRpbWVvdXQoKTtcbiAgICB9XG4gIH1cblxuICBvbkVudGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmF1dG9DbG9zZSAmJiB0aGlzLm9wdGlvbnMubnpQYXVzZU9uSG92ZXIpIHtcbiAgICAgIHRoaXMuY2xlYXJFcmFzZVRpbWVvdXQoKTtcbiAgICAgIHRoaXMudXBkYXRlVFRMKCk7XG4gICAgfVxuICB9XG5cbiAgb25MZWF2ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hdXRvQ2xvc2UgJiYgdGhpcy5vcHRpb25zLm56UGF1c2VPbkhvdmVyKSB7XG4gICAgICB0aGlzLnN0YXJ0RXJhc2VUaW1lb3V0KCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGRlc3Ryb3kodXNlckFjdGlvbjogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5uekFuaW1hdGUpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc3RhdGUgPSAnbGVhdmUnO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZGVzdHJveWVkLm5leHQoeyBpZDogdGhpcy5pbnN0YW5jZS5tZXNzYWdlSWQsIHVzZXJBY3Rpb246IHVzZXJBY3Rpb24gfSk7XG4gICAgICB9LCAyMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlc3Ryb3llZC5uZXh0KHsgaWQ6IHRoaXMuaW5zdGFuY2UubWVzc2FnZUlkLCB1c2VyQWN0aW9uOiB1c2VyQWN0aW9uIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5pdEVyYXNlKCk6IHZvaWQge1xuICAgIHRoaXMuZXJhc2VUVEwgPSB0aGlzLm9wdGlvbnMubnpEdXJhdGlvbjtcbiAgICB0aGlzLmVyYXNlVGltaW5nU3RhcnQgPSBEYXRlLm5vdygpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVUVEwoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYXV0b0Nsb3NlKSB7XG4gICAgICB0aGlzLmVyYXNlVFRMIC09IERhdGUubm93KCkgLSB0aGlzLmVyYXNlVGltaW5nU3RhcnQhO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhcnRFcmFzZVRpbWVvdXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZXJhc2VUVEwgPiAwKSB7XG4gICAgICB0aGlzLmNsZWFyRXJhc2VUaW1lb3V0KCk7XG4gICAgICB0aGlzLmVyYXNlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZGVzdHJveSgpLCB0aGlzLmVyYXNlVFRMKTtcbiAgICAgIHRoaXMuZXJhc2VUaW1pbmdTdGFydCA9IERhdGUubm93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJFcmFzZVRpbWVvdXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZXJhc2VUaW1lciAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZXJhc2VUaW1lcik7XG4gICAgICB0aGlzLmVyYXNlVGltZXIgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuIl19