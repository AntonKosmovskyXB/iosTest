/**
 * @fileoverview added by tsickle
 * Generated from: dropdown.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __read, __spread } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ESCAPE, hasModifierKey } from '@angular/cdk/keycodes';
import { Overlay } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { TemplatePortal } from '@angular/cdk/portal';
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { POSITION_MAP } from 'ng-zorro-antd/core/overlay';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { BehaviorSubject, combineLatest, EMPTY, fromEvent, merge, Subject } from 'rxjs';
import { auditTime, distinctUntilChanged, filter, map, mapTo, switchMap, takeUntil } from 'rxjs/operators';
/** @type {?} */
var listOfPositions = [POSITION_MAP.bottomLeft, POSITION_MAP.bottomRight, POSITION_MAP.topRight, POSITION_MAP.topLeft];
var NzDropDownDirective = /** @class */ (function () {
    function NzDropDownDirective(elementRef, overlay, renderer, viewContainerRef, platform) {
        this.elementRef = elementRef;
        this.overlay = overlay;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.platform = platform;
        this.overlayRef = null;
        this.destroy$ = new Subject();
        this.positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(this.elementRef.nativeElement)
            .withLockedPosition()
            .withTransformOriginOn('.ant-dropdown');
        this.inputVisible$ = new BehaviorSubject(false);
        this.nzTrigger$ = new BehaviorSubject('hover');
        this.overlayClose$ = new Subject();
        this.nzDropdownMenu = null;
        this.nzTrigger = 'hover';
        this.nzMatchWidthElement = null;
        this.nzBackdrop = true;
        this.nzClickHide = true;
        this.nzDisabled = false;
        this.nzVisible = false;
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzPlacement = 'bottomLeft';
        this.nzVisibleChange = new EventEmitter();
    }
    /**
     * @template T
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    NzDropDownDirective.prototype.setDropdownMenuValue = /**
     * @template T
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        if (this.nzDropdownMenu) {
            this.nzDropdownMenu.setValue(key, value);
        }
    };
    /**
     * @return {?}
     */
    NzDropDownDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    NzDropDownDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.nzDropdownMenu) {
            /** @type {?} */
            var nativeElement_1 = this.elementRef.nativeElement;
            /**
             * host mouse state *
             * @type {?}
             */
            var hostMouseState$ = merge(fromEvent(nativeElement_1, 'mouseenter').pipe(mapTo(true)), fromEvent(nativeElement_1, 'mouseleave').pipe(mapTo(false)));
            /**
             * menu mouse state *
             * @type {?}
             */
            var menuMouseState$ = this.nzDropdownMenu.mouseState$;
            /**
             * merged mouse state *
             * @type {?}
             */
            var mergedMouseState$_1 = merge(menuMouseState$, hostMouseState$);
            /**
             * host click state *
             * @type {?}
             */
            var hostClickState$_1 = fromEvent(nativeElement_1, 'click').pipe(mapTo(true));
            /**
             * visible state switch by nzTrigger *
             * @type {?}
             */
            var visibleStateByTrigger$ = this.nzTrigger$.pipe(switchMap((/**
             * @param {?} trigger
             * @return {?}
             */
            function (trigger) {
                if (trigger === 'hover') {
                    return mergedMouseState$_1;
                }
                else if (trigger === 'click') {
                    return hostClickState$_1;
                }
                else {
                    return EMPTY;
                }
            })));
            /** @type {?} */
            var descendantMenuItemClick$ = this.nzDropdownMenu.descendantMenuItemClick$.pipe(filter((/**
             * @return {?}
             */
            function () { return _this.nzClickHide; })), mapTo(false));
            /** @type {?} */
            var domTriggerVisible$ = merge(visibleStateByTrigger$, descendantMenuItemClick$, this.overlayClose$).pipe(filter((/**
             * @return {?}
             */
            function () { return !_this.nzDisabled; })));
            /** @type {?} */
            var visible$ = merge(this.inputVisible$, domTriggerVisible$);
            combineLatest([visible$, this.nzDropdownMenu.isChildSubMenuOpen$])
                .pipe(map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), visible = _b[0], sub = _b[1];
                return visible || sub;
            })), auditTime(150), distinctUntilChanged(), filter((/**
             * @return {?}
             */
            function () { return _this.platform.isBrowser; })), takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} visible
             * @return {?}
             */
            function (visible) {
                /** @type {?} */
                var element = _this.nzMatchWidthElement ? _this.nzMatchWidthElement.nativeElement : nativeElement_1;
                /** @type {?} */
                var triggerWidth = element.getBoundingClientRect().width;
                if (_this.nzVisible !== visible) {
                    _this.nzVisibleChange.emit(visible);
                }
                _this.nzVisible = visible;
                if (visible) {
                    /** set up overlayRef **/
                    if (!_this.overlayRef) {
                        /** new overlay **/
                        _this.overlayRef = _this.overlay.create({
                            positionStrategy: _this.positionStrategy,
                            minWidth: triggerWidth,
                            disposeOnNavigation: true,
                            hasBackdrop: _this.nzTrigger === 'click',
                            backdropClass: _this.nzBackdrop ? undefined : 'nz-overlay-transparent-backdrop',
                            scrollStrategy: _this.overlay.scrollStrategies.reposition()
                        });
                        merge(_this.overlayRef.backdropClick(), _this.overlayRef.detachments(), _this.overlayRef.keydownEvents().pipe(filter((/**
                         * @param {?} e
                         * @return {?}
                         */
                        function (e) { return e.keyCode === ESCAPE && !hasModifierKey(e); }))))
                            .pipe(mapTo(false), takeUntil(_this.destroy$))
                            .subscribe(_this.overlayClose$);
                    }
                    else {
                        /**
                         * update overlay config *
                         * @type {?}
                         */
                        var overlayConfig = _this.overlayRef.getConfig();
                        overlayConfig.minWidth = triggerWidth;
                        overlayConfig.hasBackdrop = _this.nzTrigger === 'click';
                    }
                    /** open dropdown with animation **/
                    _this.positionStrategy.withPositions(__spread([POSITION_MAP[_this.nzPlacement]], listOfPositions));
                    /** reset portal if needed **/
                    if (!_this.portal || _this.portal.templateRef !== (/** @type {?} */ (_this.nzDropdownMenu)).templateRef) {
                        _this.portal = new TemplatePortal((/** @type {?} */ (_this.nzDropdownMenu)).templateRef, _this.viewContainerRef);
                    }
                    _this.overlayRef.attach(_this.portal);
                }
                else {
                    /** detach overlayRef if needed **/
                    if (_this.overlayRef) {
                        _this.overlayRef.detach();
                    }
                }
            }));
        }
    };
    /**
     * @return {?}
     */
    NzDropDownDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzDropDownDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzVisible = changes.nzVisible, nzDisabled = changes.nzDisabled, nzOverlayClassName = changes.nzOverlayClassName, nzOverlayStyle = changes.nzOverlayStyle, nzTrigger = changes.nzTrigger;
        if (nzTrigger) {
            this.nzTrigger$.next(this.nzTrigger);
        }
        if (nzVisible) {
            this.inputVisible$.next(this.nzVisible);
        }
        if (nzDisabled) {
            /** @type {?} */
            var nativeElement = this.elementRef.nativeElement;
            if (this.nzDisabled) {
                this.renderer.setAttribute(nativeElement, 'disabled', '');
                this.inputVisible$.next(false);
            }
            else {
                this.renderer.removeAttribute(nativeElement, 'disabled');
            }
        }
        if (nzOverlayClassName) {
            this.setDropdownMenuValue('nzOverlayClassName', this.nzOverlayClassName);
        }
        if (nzOverlayStyle) {
            this.setDropdownMenuValue('nzOverlayStyle', this.nzOverlayStyle);
        }
    };
    NzDropDownDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-dropdown]',
                    exportAs: 'nzDropdown',
                    host: {
                        '[class.ant-dropdown-trigger]': 'true'
                    }
                },] }
    ];
    /** @nocollapse */
    NzDropDownDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Overlay },
        { type: Renderer2 },
        { type: ViewContainerRef },
        { type: Platform }
    ]; };
    NzDropDownDirective.propDecorators = {
        nzDropdownMenu: [{ type: Input }],
        nzTrigger: [{ type: Input }],
        nzMatchWidthElement: [{ type: Input }],
        nzBackdrop: [{ type: Input }],
        nzClickHide: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzVisible: [{ type: Input }],
        nzOverlayClassName: [{ type: Input }],
        nzOverlayStyle: [{ type: Input }],
        nzPlacement: [{ type: Input }],
        nzVisibleChange: [{ type: Output }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzDropDownDirective.prototype, "nzBackdrop", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzDropDownDirective.prototype, "nzClickHide", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzDropDownDirective.prototype, "nzDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzDropDownDirective.prototype, "nzVisible", void 0);
    return NzDropDownDirective;
}());
export { NzDropDownDirective };
if (false) {
    /** @type {?} */
    NzDropDownDirective.ngAcceptInputType_nzBackdrop;
    /** @type {?} */
    NzDropDownDirective.ngAcceptInputType_nzClickHide;
    /** @type {?} */
    NzDropDownDirective.ngAcceptInputType_nzDisabled;
    /** @type {?} */
    NzDropDownDirective.ngAcceptInputType_nzVisible;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.portal;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.overlayRef;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.positionStrategy;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.inputVisible$;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.nzTrigger$;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.overlayClose$;
    /** @type {?} */
    NzDropDownDirective.prototype.nzDropdownMenu;
    /** @type {?} */
    NzDropDownDirective.prototype.nzTrigger;
    /** @type {?} */
    NzDropDownDirective.prototype.nzMatchWidthElement;
    /** @type {?} */
    NzDropDownDirective.prototype.nzBackdrop;
    /** @type {?} */
    NzDropDownDirective.prototype.nzClickHide;
    /** @type {?} */
    NzDropDownDirective.prototype.nzDisabled;
    /** @type {?} */
    NzDropDownDirective.prototype.nzVisible;
    /** @type {?} */
    NzDropDownDirective.prototype.nzOverlayClassName;
    /** @type {?} */
    NzDropDownDirective.prototype.nzOverlayStyle;
    /** @type {?} */
    NzDropDownDirective.prototype.nzPlacement;
    /** @type {?} */
    NzDropDownDirective.prototype.nzVisibleChange;
    /** @type {?} */
    NzDropDownDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    NzDropDownDirective.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kcm9wZG93bi8iLCJzb3VyY2VzIjpbImRyb3Bkb3duLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEVBRVQsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxTQUFTLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztJQUdyRyxlQUFlLEdBQUcsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDO0FBRXhIO0lBMENFLDZCQUNTLFVBQXNCLEVBQ3JCLE9BQWdCLEVBQ2hCLFFBQW1CLEVBQ25CLGdCQUFrQyxFQUNsQyxRQUFrQjtR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UTs7O2lDQWlEZCxLQUFLOzRCQUNMLEtBQUs7c0NBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7NkJBQ0wsS0FBSzs0QkFDTCxLQUFLO3FDQUNMLEtBQUs7aUNBQ0wsS0FBSzs4QkFDTCxLQUFLO2tDQUNMLE1BQU07O0lBUGtCO1FBQWYsWUFBWSxFQUFFOzsyREFBbUI7SUFDbEI7UUFBZixZQUFZLEVBQUU7OzREQUFvQjtJQUNuQjtRQUFmLFlBQVksRUFBRTs7MkRBQW9CO0lBQ25CO1FBQWYsWUFBWSxFQUFFOzswREFBbUI7SUFrSjdDLDBCQUFDO0NBQUEsQUFoTEQsSUFnTEM7U0F6S1ksbUJBQW1COzs7SUFDOUIsaURBQWtEOztJQUNsRCxrREFBbUQ7O0lBQ25ELGlEQUFrRDs7SUFDbEQsZ0RBQWlEOzs7OztJQUVqRCxxQ0FBZ0M7Ozs7O0lBQ2hDLHlDQUE2Qzs7Ozs7SUFDN0MsdUNBQWlDOzs7OztJQUNqQywrQ0FJMEM7Ozs7O0lBQzFDLDRDQUE0RDs7Ozs7SUFDNUQseUNBQXFFOzs7OztJQUNyRSw0Q0FBK0M7O0lBQy9DLDZDQUErRDs7SUFDL0Qsd0NBQWdEOztJQUNoRCxrREFBdUQ7O0lBQ3ZELHlDQUEyQzs7SUFDM0MsMENBQTRDOztJQUM1Qyx5Q0FBNEM7O0lBQzVDLHdDQUEyQzs7SUFDM0MsaURBQXlDOztJQUN6Qyw2Q0FBOEM7O0lBQzlDLDBDQUFxRDs7SUFDckQsOENBQStFOztJQVM3RSx5Q0FBNkI7Ozs7O0lBQzdCLHNDQUF3Qjs7Ozs7SUFDeEIsdUNBQTJCOzs7OztJQUMzQiwrQ0FBMEM7Ozs7O0lBQzFDLHVDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEVTQ0FQRSwgaGFzTW9kaWZpZXJLZXkgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUE9TSVRJT05fTUFQIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL292ZXJsYXknO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbmRleGFibGVPYmplY3QgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCBFTVBUWSwgZnJvbUV2ZW50LCBtZXJnZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgYXVkaXRUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIG1hcFRvLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE56RHJvcGRvd25NZW51Q29tcG9uZW50LCBOelBsYWNlbWVudFR5cGUgfSBmcm9tICcuL2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50JztcblxuY29uc3QgbGlzdE9mUG9zaXRpb25zID0gW1BPU0lUSU9OX01BUC5ib3R0b21MZWZ0LCBQT1NJVElPTl9NQVAuYm90dG9tUmlnaHQsIFBPU0lUSU9OX01BUC50b3BSaWdodCwgUE9TSVRJT05fTUFQLnRvcExlZnRdO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnotZHJvcGRvd25dJyxcbiAgZXhwb3J0QXM6ICduekRyb3Bkb3duJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LWRyb3Bkb3duLXRyaWdnZXJdJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpEcm9wRG93bkRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBPbkluaXQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpCYWNrZHJvcDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpDbGlja0hpZGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256VmlzaWJsZTogQm9vbGVhbklucHV0O1xuXG4gIHByaXZhdGUgcG9ydGFsPzogVGVtcGxhdGVQb3J0YWw7XG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5XG4gICAgLnBvc2l0aW9uKClcbiAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudClcbiAgICAud2l0aExvY2tlZFBvc2l0aW9uKClcbiAgICAud2l0aFRyYW5zZm9ybU9yaWdpbk9uKCcuYW50LWRyb3Bkb3duJyk7XG4gIHByaXZhdGUgaW5wdXRWaXNpYmxlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICBwcml2YXRlIG56VHJpZ2dlciQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PCdjbGljaycgfCAnaG92ZXInPignaG92ZXInKTtcbiAgcHJpdmF0ZSBvdmVybGF5Q2xvc2UkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgQElucHV0KCkgbnpEcm9wZG93bk1lbnU6IE56RHJvcGRvd25NZW51Q29tcG9uZW50IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56VHJpZ2dlcjogJ2NsaWNrJyB8ICdob3ZlcicgPSAnaG92ZXInO1xuICBASW5wdXQoKSBuek1hdGNoV2lkdGhFbGVtZW50OiBFbGVtZW50UmVmIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekJhY2tkcm9wID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2xpY2tIaWRlID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56VmlzaWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBuek92ZXJsYXlDbGFzc05hbWU6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBuek92ZXJsYXlTdHlsZTogSW5kZXhhYmxlT2JqZWN0ID0ge307XG4gIEBJbnB1dCgpIG56UGxhY2VtZW50OiBOelBsYWNlbWVudFR5cGUgPSAnYm90dG9tTGVmdCc7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBzZXREcm9wZG93bk1lbnVWYWx1ZTxUIGV4dGVuZHMga2V5b2YgTnpEcm9wZG93bk1lbnVDb21wb25lbnQ+KGtleTogVCwgdmFsdWU6IE56RHJvcGRvd25NZW51Q29tcG9uZW50W1RdKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpEcm9wZG93bk1lbnUpIHtcbiAgICAgIHRoaXMubnpEcm9wZG93bk1lbnUuc2V0VmFsdWUoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm1cbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpEcm9wZG93bk1lbnUpIHtcbiAgICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAvKiogaG9zdCBtb3VzZSBzdGF0ZSAqKi9cbiAgICAgIGNvbnN0IGhvc3RNb3VzZVN0YXRlJCA9IG1lcmdlKFxuICAgICAgICBmcm9tRXZlbnQobmF0aXZlRWxlbWVudCwgJ21vdXNlZW50ZXInKS5waXBlKG1hcFRvKHRydWUpKSxcbiAgICAgICAgZnJvbUV2ZW50KG5hdGl2ZUVsZW1lbnQsICdtb3VzZWxlYXZlJykucGlwZShtYXBUbyhmYWxzZSkpXG4gICAgICApO1xuICAgICAgLyoqIG1lbnUgbW91c2Ugc3RhdGUgKiovXG4gICAgICBjb25zdCBtZW51TW91c2VTdGF0ZSQgPSB0aGlzLm56RHJvcGRvd25NZW51Lm1vdXNlU3RhdGUkO1xuICAgICAgLyoqIG1lcmdlZCBtb3VzZSBzdGF0ZSAqKi9cbiAgICAgIGNvbnN0IG1lcmdlZE1vdXNlU3RhdGUkID0gbWVyZ2UobWVudU1vdXNlU3RhdGUkLCBob3N0TW91c2VTdGF0ZSQpO1xuICAgICAgLyoqIGhvc3QgY2xpY2sgc3RhdGUgKiovXG4gICAgICBjb25zdCBob3N0Q2xpY2tTdGF0ZSQgPSBmcm9tRXZlbnQobmF0aXZlRWxlbWVudCwgJ2NsaWNrJykucGlwZShtYXBUbyh0cnVlKSk7XG4gICAgICAvKiogdmlzaWJsZSBzdGF0ZSBzd2l0Y2ggYnkgbnpUcmlnZ2VyICoqL1xuICAgICAgY29uc3QgdmlzaWJsZVN0YXRlQnlUcmlnZ2VyJCA9IHRoaXMubnpUcmlnZ2VyJC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAodHJpZ2dlciA9PiB7XG4gICAgICAgICAgaWYgKHRyaWdnZXIgPT09ICdob3ZlcicpIHtcbiAgICAgICAgICAgIHJldHVybiBtZXJnZWRNb3VzZVN0YXRlJDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAgIHJldHVybiBob3N0Q2xpY2tTdGF0ZSQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBFTVBUWTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgY29uc3QgZGVzY2VuZGFudE1lbnVJdGVtQ2xpY2skID0gdGhpcy5uekRyb3Bkb3duTWVudS5kZXNjZW5kYW50TWVudUl0ZW1DbGljayQucGlwZShcbiAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMubnpDbGlja0hpZGUpLFxuICAgICAgICBtYXBUbyhmYWxzZSlcbiAgICAgICk7XG4gICAgICBjb25zdCBkb21UcmlnZ2VyVmlzaWJsZSQgPSBtZXJnZSh2aXNpYmxlU3RhdGVCeVRyaWdnZXIkLCBkZXNjZW5kYW50TWVudUl0ZW1DbGljayQsIHRoaXMub3ZlcmxheUNsb3NlJCkucGlwZShcbiAgICAgICAgZmlsdGVyKCgpID0+ICF0aGlzLm56RGlzYWJsZWQpXG4gICAgICApO1xuICAgICAgY29uc3QgdmlzaWJsZSQgPSBtZXJnZSh0aGlzLmlucHV0VmlzaWJsZSQsIGRvbVRyaWdnZXJWaXNpYmxlJCk7XG4gICAgICBjb21iaW5lTGF0ZXN0KFt2aXNpYmxlJCwgdGhpcy5uekRyb3Bkb3duTWVudS5pc0NoaWxkU3ViTWVudU9wZW4kXSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChbdmlzaWJsZSwgc3ViXSkgPT4gdmlzaWJsZSB8fCBzdWIpLFxuICAgICAgICAgIGF1ZGl0VGltZSgxNTApLFxuICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSxcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCh2aXNpYmxlOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubnpNYXRjaFdpZHRoRWxlbWVudCA/IHRoaXMubnpNYXRjaFdpZHRoRWxlbWVudC5uYXRpdmVFbGVtZW50IDogbmF0aXZlRWxlbWVudDtcbiAgICAgICAgICBjb25zdCB0cmlnZ2VyV2lkdGggPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICAgIGlmICh0aGlzLm56VmlzaWJsZSAhPT0gdmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5uelZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICAgICAgICAvKiogc2V0IHVwIG92ZXJsYXlSZWYgKiovXG4gICAgICAgICAgICBpZiAoIXRoaXMub3ZlcmxheVJlZikge1xuICAgICAgICAgICAgICAvKiogbmV3IG92ZXJsYXkgKiovXG4gICAgICAgICAgICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMucG9zaXRpb25TdHJhdGVneSxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogdHJpZ2dlcldpZHRoLFxuICAgICAgICAgICAgICAgIGRpc3Bvc2VPbk5hdmlnYXRpb246IHRydWUsXG4gICAgICAgICAgICAgICAgaGFzQmFja2Ryb3A6IHRoaXMubnpUcmlnZ2VyID09PSAnY2xpY2snLFxuICAgICAgICAgICAgICAgIGJhY2tkcm9wQ2xhc3M6IHRoaXMubnpCYWNrZHJvcCA/IHVuZGVmaW5lZCA6ICduei1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wJyxcbiAgICAgICAgICAgICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbigpXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBtZXJnZShcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLFxuICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheVJlZi5kZXRhY2htZW50cygpLFxuICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheVJlZi5rZXlkb3duRXZlbnRzKCkucGlwZShmaWx0ZXIoZSA9PiBlLmtleUNvZGUgPT09IEVTQ0FQRSAmJiAhaGFzTW9kaWZpZXJLZXkoZSkpKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLnBpcGUobWFwVG8oZmFsc2UpLCB0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSh0aGlzLm92ZXJsYXlDbG9zZSQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLyoqIHVwZGF0ZSBvdmVybGF5IGNvbmZpZyAqKi9cbiAgICAgICAgICAgICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IHRoaXMub3ZlcmxheVJlZi5nZXRDb25maWcoKTtcbiAgICAgICAgICAgICAgb3ZlcmxheUNvbmZpZy5taW5XaWR0aCA9IHRyaWdnZXJXaWR0aDtcbiAgICAgICAgICAgICAgb3ZlcmxheUNvbmZpZy5oYXNCYWNrZHJvcCA9IHRoaXMubnpUcmlnZ2VyID09PSAnY2xpY2snO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqIG9wZW4gZHJvcGRvd24gd2l0aCBhbmltYXRpb24gKiovXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kud2l0aFBvc2l0aW9ucyhbUE9TSVRJT05fTUFQW3RoaXMubnpQbGFjZW1lbnRdLCAuLi5saXN0T2ZQb3NpdGlvbnNdKTtcbiAgICAgICAgICAgIC8qKiByZXNldCBwb3J0YWwgaWYgbmVlZGVkICoqL1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBvcnRhbCB8fCB0aGlzLnBvcnRhbC50ZW1wbGF0ZVJlZiAhPT0gdGhpcy5uekRyb3Bkb3duTWVudSEudGVtcGxhdGVSZWYpIHtcbiAgICAgICAgICAgICAgdGhpcy5wb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy5uekRyb3Bkb3duTWVudSEudGVtcGxhdGVSZWYsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXlSZWYuYXR0YWNoKHRoaXMucG9ydGFsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLyoqIGRldGFjaCBvdmVybGF5UmVmIGlmIG5lZWRlZCAqKi9cbiAgICAgICAgICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgICAgICAgICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG56VmlzaWJsZSwgbnpEaXNhYmxlZCwgbnpPdmVybGF5Q2xhc3NOYW1lLCBuek92ZXJsYXlTdHlsZSwgbnpUcmlnZ2VyIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChuelRyaWdnZXIpIHtcbiAgICAgIHRoaXMubnpUcmlnZ2VyJC5uZXh0KHRoaXMubnpUcmlnZ2VyKTtcbiAgICB9XG4gICAgaWYgKG56VmlzaWJsZSkge1xuICAgICAgdGhpcy5pbnB1dFZpc2libGUkLm5leHQodGhpcy5uelZpc2libGUpO1xuICAgIH1cbiAgICBpZiAobnpEaXNhYmxlZCkge1xuICAgICAgY29uc3QgbmF0aXZlRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgaWYgKHRoaXMubnpEaXNhYmxlZCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCAnJyk7XG4gICAgICAgIHRoaXMuaW5wdXRWaXNpYmxlJC5uZXh0KGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobnpPdmVybGF5Q2xhc3NOYW1lKSB7XG4gICAgICB0aGlzLnNldERyb3Bkb3duTWVudVZhbHVlKCduek92ZXJsYXlDbGFzc05hbWUnLCB0aGlzLm56T3ZlcmxheUNsYXNzTmFtZSk7XG4gICAgfVxuICAgIGlmIChuek92ZXJsYXlTdHlsZSkge1xuICAgICAgdGhpcy5zZXREcm9wZG93bk1lbnVWYWx1ZSgnbnpPdmVybGF5U3R5bGUnLCB0aGlzLm56T3ZlcmxheVN0eWxlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==