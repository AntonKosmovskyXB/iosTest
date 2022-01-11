/**
 * @fileoverview added by tsickle
 * Generated from: code-editor.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __decorate, __metadata, __read } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, forwardRef, Input, NgZone, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { warn } from 'ng-zorro-antd/core/logger';
import { inNextTick, InputBoolean } from 'ng-zorro-antd/core/util';
import { BehaviorSubject, combineLatest, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, takeUntil } from 'rxjs/operators';
import { NzCodeEditorService } from './code-editor.service';
var NzCodeEditorComponent = /** @class */ (function () {
    function NzCodeEditorComponent(nzCodeEditorService, ngZone, elementRef) {
        this.nzCodeEditorService = nzCodeEditorService;
        this.ngZone = ngZone;
        this.nzEditorMode = 'normal';
        this.nzOriginalText = '';
        this.nzLoading = false;
        this.nzFullControl = false;
        this.nzEditorInitialized = new EventEmitter();
        this.editorOptionCached = {};
        this.destroy$ = new Subject();
        this.resize$ = new Subject();
        this.editorOption$ = new BehaviorSubject({});
        this.value = '';
        this.modelSet = false;
        this.onChange = (/**
         * @param {?} _value
         * @return {?}
         */
        function (_value) { });
        this.onTouch = (/**
         * @return {?}
         */
        function () { });
        this.el = elementRef.nativeElement;
    }
    Object.defineProperty(NzCodeEditorComponent.prototype, "nzEditorOption", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.editorOption$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initialize a monaco editor instance.
     */
    /**
     * Initialize a monaco editor instance.
     * @return {?}
     */
    NzCodeEditorComponent.prototype.ngAfterViewInit = /**
     * Initialize a monaco editor instance.
     * @return {?}
     */
    function () {
        var _this = this;
        this.nzCodeEditorService.requestToInit().subscribe((/**
         * @param {?} option
         * @return {?}
         */
        function (option) { return _this.setup(option); }));
    };
    /**
     * @return {?}
     */
    NzCodeEditorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.editorInstance) {
            this.editorInstance.dispose();
        }
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzCodeEditorComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.setValue();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCodeEditorComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCodeEditorComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouch = fn;
    };
    /**
     * @return {?}
     */
    NzCodeEditorComponent.prototype.layout = /**
     * @return {?}
     */
    function () {
        this.resize$.next();
    };
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    NzCodeEditorComponent.prototype.setup = /**
     * @private
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        inNextTick().subscribe((/**
         * @return {?}
         */
        function () {
            _this.editorOptionCached = option;
            _this.registerOptionChanges();
            _this.initMonacoEditorInstance();
            _this.registerResizeChange();
            _this.setValue();
            if (!_this.nzFullControl) {
                _this.setValueEmitter();
            }
            _this.nzEditorInitialized.emit(_this.editorInstance);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorComponent.prototype.registerOptionChanges = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        combineLatest([this.editorOption$, this.nzCodeEditorService.option$])
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), selfOpt = _b[0], defaultOpt = _b[1];
            _this.editorOptionCached = __assign(__assign(__assign({}, _this.editorOptionCached), defaultOpt), selfOpt);
            _this.updateOptionToMonaco();
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorComponent.prototype.initMonacoEditorInstance = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.editorInstance =
                _this.nzEditorMode === 'normal'
                    ? monaco.editor.create(_this.el, __assign({}, _this.editorOptionCached))
                    : monaco.editor.createDiffEditor(_this.el, __assign({}, ((/** @type {?} */ (_this.editorOptionCached)))));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorComponent.prototype.registerResizeChange = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            fromEvent(window, 'resize')
                .pipe(debounceTime(300), takeUntil(_this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.layout();
            }));
            _this.resize$
                .pipe(takeUntil(_this.destroy$), filter((/**
             * @return {?}
             */
            function () { return !!_this.editorInstance; })), map((/**
             * @return {?}
             */
            function () { return ({
                width: _this.el.clientWidth,
                height: _this.el.clientHeight
            }); })), distinctUntilChanged((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return a.width === b.width && a.height === b.height; })), debounceTime(50))
                .subscribe((/**
             * @return {?}
             */
            function () {
                (/** @type {?} */ (_this.editorInstance)).layout();
            }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorComponent.prototype.setValue = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.editorInstance) {
            return;
        }
        if (this.nzFullControl && this.value) {
            warn("should not set value when you are using full control mode! It would result in ambiguous data flow!");
            return;
        }
        if (this.nzEditorMode === 'normal') {
            if (this.modelSet) {
                ((/** @type {?} */ (this.editorInstance.getModel()))).setValue(this.value);
            }
            else {
                ((/** @type {?} */ (this.editorInstance))).setModel(monaco.editor.createModel(this.value, ((/** @type {?} */ (this.editorOptionCached))).language));
                this.modelSet = true;
            }
        }
        else {
            if (this.modelSet) {
                /** @type {?} */
                var model = (/** @type {?} */ (((/** @type {?} */ (this.editorInstance))).getModel()));
                model.modified.setValue(this.value);
                model.original.setValue(this.nzOriginalText);
            }
            else {
                /** @type {?} */
                var language = ((/** @type {?} */ (this.editorOptionCached))).language;
                ((/** @type {?} */ (this.editorInstance))).setModel({
                    original: monaco.editor.createModel(this.nzOriginalText, language),
                    modified: monaco.editor.createModel(this.value, language)
                });
                this.modelSet = true;
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorComponent.prototype.setValueEmitter = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var model = (/** @type {?} */ ((this.nzEditorMode === 'normal'
            ? ((/** @type {?} */ (this.editorInstance))).getModel()
            : (/** @type {?} */ (((/** @type {?} */ (this.editorInstance))).getModel())).modified)));
        model.onDidChangeContent((/**
         * @return {?}
         */
        function () {
            _this.emitValue(model.getValue());
        }));
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    NzCodeEditorComponent.prototype.emitValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.onChange(value);
    };
    /**
     * @private
     * @return {?}
     */
    NzCodeEditorComponent.prototype.updateOptionToMonaco = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.editorInstance) {
            this.editorInstance.updateOptions(__assign({}, this.editorOptionCached));
        }
    };
    NzCodeEditorComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-code-editor',
                    exportAs: 'nzCodeEditor',
                    template: "\n    <div class=\"ant-code-editor-loading\" *ngIf=\"nzLoading\">\n      <nz-spin></nz-spin>\n    </div>\n\n    <div class=\"ant-code-editor-toolkit\" *ngIf=\"nzToolkit\">\n      <ng-template [ngTemplateOutlet]=\"nzToolkit\"></ng-template>\n    </div>\n  ",
                    host: {
                        '[class.ant-code-editor]': 'true'
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzCodeEditorComponent; })),
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    NzCodeEditorComponent.ctorParameters = function () { return [
        { type: NzCodeEditorService },
        { type: NgZone },
        { type: ElementRef }
    ]; };
    NzCodeEditorComponent.propDecorators = {
        nzEditorMode: [{ type: Input }],
        nzOriginalText: [{ type: Input }],
        nzLoading: [{ type: Input }],
        nzFullControl: [{ type: Input }],
        nzToolkit: [{ type: Input }],
        nzEditorOption: [{ type: Input }],
        nzEditorInitialized: [{ type: Output }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzCodeEditorComponent.prototype, "nzLoading", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzCodeEditorComponent.prototype, "nzFullControl", void 0);
    return NzCodeEditorComponent;
}());
export { NzCodeEditorComponent };
if (false) {
    /** @type {?} */
    NzCodeEditorComponent.ngAcceptInputType_nzLoading;
    /** @type {?} */
    NzCodeEditorComponent.ngAcceptInputType_nzFullControl;
    /** @type {?} */
    NzCodeEditorComponent.prototype.nzEditorMode;
    /** @type {?} */
    NzCodeEditorComponent.prototype.nzOriginalText;
    /** @type {?} */
    NzCodeEditorComponent.prototype.nzLoading;
    /** @type {?} */
    NzCodeEditorComponent.prototype.nzFullControl;
    /** @type {?} */
    NzCodeEditorComponent.prototype.nzToolkit;
    /** @type {?} */
    NzCodeEditorComponent.prototype.nzEditorInitialized;
    /** @type {?} */
    NzCodeEditorComponent.prototype.editorOptionCached;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.resize$;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.editorOption$;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.editorInstance;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.value;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.modelSet;
    /** @type {?} */
    NzCodeEditorComponent.prototype.onChange;
    /** @type {?} */
    NzCodeEditorComponent.prototype.onTouch;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.nzCodeEditorService;
    /**
     * @type {?}
     * @private
     */
    NzCodeEditorComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb2RlLWVkaXRvci8iLCJzb3VyY2VzIjpbImNvZGUtZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFFTixNQUFNLEVBQ04sV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUduRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQVE1RDtJQW1ERSwrQkFBb0IsbUJBQXdDLEVBQVUsTUFBYyxFQUFFLFVBQXNCO1FBQXhGLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBdEIzRSxpQkFBWSxHQUFpQixRQUFRLENBQUM7UUFDdEMsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDSixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBTzVCLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFpRCxDQUFDO1FBRTNH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OzRCQUNMLEtBQUs7aUNBRUwsS0FBSztzQ0FJTCxNQUFNOztJQVJrQjtRQUFmLFlBQVksRUFBRTs7NERBQW1CO0lBQ2xCO1FBQWYsWUFBWSxFQUFFOztnRUFBdUI7SUFvTGpELDRCQUFDO0NBQUEsQUFwTkQsSUFvTkM7U0EzTFkscUJBQXFCOzs7SUFDaEMsa0RBQWlEOztJQUNqRCxzREFBcUQ7O0lBRXJELDZDQUErQzs7SUFDL0MsK0NBQTZCOztJQUM3QiwwQ0FBMkM7O0lBQzNDLDhDQUErQzs7SUFDL0MsMENBQXVDOztJQU12QyxvREFBMkc7O0lBRTNHLG1EQUE2Qzs7Ozs7SUFFN0MsbUNBQWlDOzs7OztJQUNqQyx5Q0FBdUM7Ozs7O0lBQ3ZDLHdDQUFzQzs7Ozs7SUFDdEMsOENBQXFFOzs7OztJQUNyRSwrQ0FBdUU7Ozs7O0lBQ3ZFLHNDQUFtQjs7Ozs7SUFDbkIseUNBQXlCOztJQW1DekIseUNBQWdEOztJQUVoRCx3Q0FBa0M7Ozs7O0lBbkN0QixvREFBZ0Q7Ozs7O0lBQUUsdUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBJbXBvcnQgdHlwZXMgZnJvbSBtb25hY28gZWRpdG9yLlxuaW1wb3J0IHsgZWRpdG9yIH0gZnJvbSAnbW9uYWNvLWVkaXRvcic7XG5pbXBvcnQgeyB3YXJuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2xvZ2dlcic7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE56U2FmZUFueSwgT25DaGFuZ2VUeXBlLCBPblRvdWNoZWRUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IGluTmV4dFRpY2ssIElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCwgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOekNvZGVFZGl0b3JTZXJ2aWNlIH0gZnJvbSAnLi9jb2RlLWVkaXRvci5zZXJ2aWNlJztcbmltcG9ydCB7IERpZmZFZGl0b3JPcHRpb25zLCBFZGl0b3JPcHRpb25zLCBKb2luZWRFZGl0b3JPcHRpb25zLCBOekVkaXRvck1vZGUgfSBmcm9tICcuL3R5cGluZ3MnO1xuaW1wb3J0IElUZXh0TW9kZWwgPSBlZGl0b3IuSVRleHRNb2RlbDtcbmltcG9ydCBJU3RhbmRhbG9uZUNvZGVFZGl0b3IgPSBlZGl0b3IuSVN0YW5kYWxvbmVDb2RlRWRpdG9yO1xuaW1wb3J0IElTdGFuZGFsb25lRGlmZkVkaXRvciA9IGVkaXRvci5JU3RhbmRhbG9uZURpZmZFZGl0b3I7XG5cbmRlY2xhcmUgY29uc3QgbW9uYWNvOiBOelNhZmVBbnk7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICduei1jb2RlLWVkaXRvcicsXG4gIGV4cG9ydEFzOiAnbnpDb2RlRWRpdG9yJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYW50LWNvZGUtZWRpdG9yLWxvYWRpbmdcIiAqbmdJZj1cIm56TG9hZGluZ1wiPlxuICAgICAgPG56LXNwaW4+PC9uei1zcGluPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImFudC1jb2RlLWVkaXRvci10b29sa2l0XCIgKm5nSWY9XCJuelRvb2xraXRcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJuelRvb2xraXRcIj48L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtY29kZS1lZGl0b3JdJzogJ3RydWUnXG4gIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpDb2RlRWRpdG9yQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56Q29kZUVkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekxvYWRpbmc6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RnVsbENvbnRyb2w6IEJvb2xlYW5JbnB1dDtcblxuICBASW5wdXQoKSBuekVkaXRvck1vZGU6IE56RWRpdG9yTW9kZSA9ICdub3JtYWwnO1xuICBASW5wdXQoKSBuek9yaWdpbmFsVGV4dCA9ICcnO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpMb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekZ1bGxDb250cm9sID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56VG9vbGtpdD86IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpIHNldCBuekVkaXRvck9wdGlvbih2YWx1ZTogSm9pbmVkRWRpdG9yT3B0aW9ucykge1xuICAgIHRoaXMuZWRpdG9yT3B0aW9uJC5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekVkaXRvckluaXRpYWxpemVkID0gbmV3IEV2ZW50RW1pdHRlcjxJU3RhbmRhbG9uZUNvZGVFZGl0b3IgfCBJU3RhbmRhbG9uZURpZmZFZGl0b3I+KCk7XG5cbiAgZWRpdG9yT3B0aW9uQ2FjaGVkOiBKb2luZWRFZGl0b3JPcHRpb25zID0ge307XG5cbiAgcHJpdmF0ZSByZWFkb25seSBlbDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIHJlc2l6ZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIGVkaXRvck9wdGlvbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEpvaW5lZEVkaXRvck9wdGlvbnM+KHt9KTtcbiAgcHJpdmF0ZSBlZGl0b3JJbnN0YW5jZT86IElTdGFuZGFsb25lQ29kZUVkaXRvciB8IElTdGFuZGFsb25lRGlmZkVkaXRvcjtcbiAgcHJpdmF0ZSB2YWx1ZSA9ICcnO1xuICBwcml2YXRlIG1vZGVsU2V0ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuekNvZGVFZGl0b3JTZXJ2aWNlOiBOekNvZGVFZGl0b3JTZXJ2aWNlLCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5lbCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGEgbW9uYWNvIGVkaXRvciBpbnN0YW5jZS5cbiAgICovXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm56Q29kZUVkaXRvclNlcnZpY2UucmVxdWVzdFRvSW5pdCgpLnN1YnNjcmliZShvcHRpb24gPT4gdGhpcy5zZXR1cChvcHRpb24pKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmVkaXRvckluc3RhbmNlKSB7XG4gICAgICB0aGlzLmVkaXRvckluc3RhbmNlLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5zZXRWYWx1ZSgpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogT25DaGFuZ2VUeXBlKTogTnpTYWZlQW55IHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogT25Ub3VjaGVkVHlwZSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaCA9IGZuO1xuICB9XG5cbiAgb25DaGFuZ2U6IE9uQ2hhbmdlVHlwZSA9IChfdmFsdWU6IHN0cmluZykgPT4ge307XG5cbiAgb25Ub3VjaDogT25Ub3VjaGVkVHlwZSA9ICgpID0+IHt9O1xuXG4gIGxheW91dCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2l6ZSQubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cChvcHRpb246IEpvaW5lZEVkaXRvck9wdGlvbnMpOiB2b2lkIHtcbiAgICBpbk5leHRUaWNrKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZWRpdG9yT3B0aW9uQ2FjaGVkID0gb3B0aW9uO1xuICAgICAgdGhpcy5yZWdpc3Rlck9wdGlvbkNoYW5nZXMoKTtcbiAgICAgIHRoaXMuaW5pdE1vbmFjb0VkaXRvckluc3RhbmNlKCk7XG4gICAgICB0aGlzLnJlZ2lzdGVyUmVzaXplQ2hhbmdlKCk7XG4gICAgICB0aGlzLnNldFZhbHVlKCk7XG5cbiAgICAgIGlmICghdGhpcy5uekZ1bGxDb250cm9sKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWVFbWl0dGVyKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubnpFZGl0b3JJbml0aWFsaXplZC5lbWl0KHRoaXMuZWRpdG9ySW5zdGFuY2UpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZWdpc3Rlck9wdGlvbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgY29tYmluZUxhdGVzdChbdGhpcy5lZGl0b3JPcHRpb24kLCB0aGlzLm56Q29kZUVkaXRvclNlcnZpY2Uub3B0aW9uJF0pXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKChbc2VsZk9wdCwgZGVmYXVsdE9wdF0pID0+IHtcbiAgICAgICAgdGhpcy5lZGl0b3JPcHRpb25DYWNoZWQgPSB7XG4gICAgICAgICAgLi4udGhpcy5lZGl0b3JPcHRpb25DYWNoZWQsXG4gICAgICAgICAgLi4uZGVmYXVsdE9wdCxcbiAgICAgICAgICAuLi5zZWxmT3B0XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudXBkYXRlT3B0aW9uVG9Nb25hY28oKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0TW9uYWNvRWRpdG9ySW5zdGFuY2UoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5lZGl0b3JJbnN0YW5jZSA9XG4gICAgICAgIHRoaXMubnpFZGl0b3JNb2RlID09PSAnbm9ybWFsJ1xuICAgICAgICAgID8gbW9uYWNvLmVkaXRvci5jcmVhdGUodGhpcy5lbCwgeyAuLi50aGlzLmVkaXRvck9wdGlvbkNhY2hlZCB9KVxuICAgICAgICAgIDogbW9uYWNvLmVkaXRvci5jcmVhdGVEaWZmRWRpdG9yKHRoaXMuZWwsIHtcbiAgICAgICAgICAgICAgLi4uKHRoaXMuZWRpdG9yT3B0aW9uQ2FjaGVkIGFzIERpZmZFZGl0b3JPcHRpb25zKVxuICAgICAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlZ2lzdGVyUmVzaXplQ2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxuICAgICAgICAucGlwZShkZWJvdW5jZVRpbWUoMzAwKSwgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmxheW91dCgpO1xuICAgICAgICB9KTtcblxuICAgICAgdGhpcy5yZXNpemUkXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgICBmaWx0ZXIoKCkgPT4gISF0aGlzLmVkaXRvckluc3RhbmNlKSxcbiAgICAgICAgICBtYXAoKCkgPT4gKHtcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLmVsLmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmVsLmNsaWVudEhlaWdodFxuICAgICAgICAgIH0pKSxcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgoYSwgYikgPT4gYS53aWR0aCA9PT0gYi53aWR0aCAmJiBhLmhlaWdodCA9PT0gYi5oZWlnaHQpLFxuICAgICAgICAgIGRlYm91bmNlVGltZSg1MClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmVkaXRvckluc3RhbmNlIS5sYXlvdXQoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldFZhbHVlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5lZGl0b3JJbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm56RnVsbENvbnRyb2wgJiYgdGhpcy52YWx1ZSkge1xuICAgICAgd2Fybihgc2hvdWxkIG5vdCBzZXQgdmFsdWUgd2hlbiB5b3UgYXJlIHVzaW5nIGZ1bGwgY29udHJvbCBtb2RlISBJdCB3b3VsZCByZXN1bHQgaW4gYW1iaWd1b3VzIGRhdGEgZmxvdyFgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5uekVkaXRvck1vZGUgPT09ICdub3JtYWwnKSB7XG4gICAgICBpZiAodGhpcy5tb2RlbFNldCkge1xuICAgICAgICAodGhpcy5lZGl0b3JJbnN0YW5jZS5nZXRNb2RlbCgpIGFzIElUZXh0TW9kZWwpLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKHRoaXMuZWRpdG9ySW5zdGFuY2UgYXMgSVN0YW5kYWxvbmVDb2RlRWRpdG9yKS5zZXRNb2RlbChcbiAgICAgICAgICBtb25hY28uZWRpdG9yLmNyZWF0ZU1vZGVsKHRoaXMudmFsdWUsICh0aGlzLmVkaXRvck9wdGlvbkNhY2hlZCBhcyBFZGl0b3JPcHRpb25zKS5sYW5ndWFnZSlcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5tb2RlbFNldCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm1vZGVsU2V0KSB7XG4gICAgICAgIGNvbnN0IG1vZGVsID0gKHRoaXMuZWRpdG9ySW5zdGFuY2UgYXMgSVN0YW5kYWxvbmVEaWZmRWRpdG9yKS5nZXRNb2RlbCgpITtcbiAgICAgICAgbW9kZWwubW9kaWZpZWQuc2V0VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgIG1vZGVsLm9yaWdpbmFsLnNldFZhbHVlKHRoaXMubnpPcmlnaW5hbFRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbGFuZ3VhZ2UgPSAodGhpcy5lZGl0b3JPcHRpb25DYWNoZWQgYXMgRWRpdG9yT3B0aW9ucykubGFuZ3VhZ2U7XG4gICAgICAgICh0aGlzLmVkaXRvckluc3RhbmNlIGFzIElTdGFuZGFsb25lRGlmZkVkaXRvcikuc2V0TW9kZWwoe1xuICAgICAgICAgIG9yaWdpbmFsOiBtb25hY28uZWRpdG9yLmNyZWF0ZU1vZGVsKHRoaXMubnpPcmlnaW5hbFRleHQsIGxhbmd1YWdlKSxcbiAgICAgICAgICBtb2RpZmllZDogbW9uYWNvLmVkaXRvci5jcmVhdGVNb2RlbCh0aGlzLnZhbHVlLCBsYW5ndWFnZSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubW9kZWxTZXQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0VmFsdWVFbWl0dGVyKCk6IHZvaWQge1xuICAgIGNvbnN0IG1vZGVsID0gKHRoaXMubnpFZGl0b3JNb2RlID09PSAnbm9ybWFsJ1xuICAgICAgPyAodGhpcy5lZGl0b3JJbnN0YW5jZSBhcyBJU3RhbmRhbG9uZUNvZGVFZGl0b3IpLmdldE1vZGVsKClcbiAgICAgIDogKHRoaXMuZWRpdG9ySW5zdGFuY2UgYXMgSVN0YW5kYWxvbmVEaWZmRWRpdG9yKS5nZXRNb2RlbCgpIS5tb2RpZmllZCkgYXMgSVRleHRNb2RlbDtcblxuICAgIG1vZGVsLm9uRGlkQ2hhbmdlQ29udGVudCgoKSA9PiB7XG4gICAgICB0aGlzLmVtaXRWYWx1ZShtb2RlbC5nZXRWYWx1ZSgpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZW1pdFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZU9wdGlvblRvTW9uYWNvKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmVkaXRvckluc3RhbmNlKSB7XG4gICAgICB0aGlzLmVkaXRvckluc3RhbmNlLnVwZGF0ZU9wdGlvbnMoeyAuLi50aGlzLmVkaXRvck9wdGlvbkNhY2hlZCB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==