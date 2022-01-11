/**
 * @fileoverview added by tsickle
 * Generated from: text-edit.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzAutosizeDirective } from 'ng-zorro-antd/input';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
var NzTextEditComponent = /** @class */ (function () {
    function NzTextEditComponent(host, cdr, i18n) {
        this.host = host;
        this.cdr = cdr;
        this.i18n = i18n;
        this.editing = false;
        this.destroy$ = new Subject();
        this.startEditing = new EventEmitter();
        this.endEditing = new EventEmitter();
        this.nativeElement = this.host.nativeElement;
    }
    /**
     * @return {?}
     */
    NzTextEditComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.locale = _this.i18n.getLocaleData('Text');
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NzTextEditComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @return {?}
     */
    NzTextEditComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.beforeText = this.text;
        this.currentText = this.beforeText;
        this.editing = true;
        this.startEditing.emit();
        this.focusAndSetValue();
    };
    /**
     * @return {?}
     */
    NzTextEditComponent.prototype.confirm = /**
     * @return {?}
     */
    function () {
        this.editing = false;
        this.endEditing.emit(this.currentText);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzTextEditComponent.prototype.onInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var target = (/** @type {?} */ (event.target));
        this.currentText = target.value;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzTextEditComponent.prototype.onEnter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        event.preventDefault();
        this.confirm();
    };
    /**
     * @return {?}
     */
    NzTextEditComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.currentText = this.beforeText;
        this.confirm();
    };
    /**
     * @return {?}
     */
    NzTextEditComponent.prototype.focusAndSetValue = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            var _a;
            if ((_a = _this.textarea) === null || _a === void 0 ? void 0 : _a.nativeElement) {
                _this.textarea.nativeElement.focus();
                _this.textarea.nativeElement.value = _this.currentText || '';
                _this.autosizeDirective.resizeToFitContent();
            }
        }));
    };
    NzTextEditComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-text-edit',
                    exportAs: 'nzTextEdit',
                    template: "\n    <button *ngIf=\"!editing\" [nzTooltipTitle]=\"locale?.edit\" nz-tooltip nz-trans-button class=\"ant-typography-edit\" (click)=\"onClick()\">\n      <i nz-icon nzType=\"edit\"></i>\n    </button>\n    <ng-container *ngIf=\"editing\">\n      <textarea\n        #textarea\n        nz-input\n        nzAutosize\n        (input)=\"onInput($event)\"\n        (blur)=\"confirm()\"\n        (keydown.esc)=\"onCancel()\"\n        (keydown.enter)=\"onEnter($event)\"\n      >\n      </textarea>\n      <button nz-trans-button class=\"ant-typography-edit-content-confirm\" (click)=\"confirm()\">\n        <i nz-icon nzType=\"enter\"></i>\n      </button>\n    </ng-container>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    NzTextEditComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: NzI18nService }
    ]; };
    NzTextEditComponent.propDecorators = {
        text: [{ type: Input }],
        startEditing: [{ type: Output }],
        endEditing: [{ type: Output }],
        textarea: [{ type: ViewChild, args: ['textarea', { static: false },] }],
        autosizeDirective: [{ type: ViewChild, args: [NzAutosizeDirective, { static: false },] }]
    };
    return NzTextEditComponent;
}());
export { NzTextEditComponent };
if (false) {
    /** @type {?} */
    NzTextEditComponent.prototype.editing;
    /** @type {?} */
    NzTextEditComponent.prototype.locale;
    /**
     * @type {?}
     * @private
     */
    NzTextEditComponent.prototype.destroy$;
    /** @type {?} */
    NzTextEditComponent.prototype.text;
    /** @type {?} */
    NzTextEditComponent.prototype.startEditing;
    /** @type {?} */
    NzTextEditComponent.prototype.endEditing;
    /** @type {?} */
    NzTextEditComponent.prototype.textarea;
    /** @type {?} */
    NzTextEditComponent.prototype.autosizeDirective;
    /** @type {?} */
    NzTextEditComponent.prototype.beforeText;
    /** @type {?} */
    NzTextEditComponent.prototype.currentText;
    /** @type {?} */
    NzTextEditComponent.prototype.nativeElement;
    /**
     * @type {?}
     * @private
     */
    NzTextEditComponent.prototype.host;
    /**
     * @type {?}
     * @private
     */
    NzTextEditComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTextEditComponent.prototype.i18n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdHlwb2dyYXBoeS8iLCJzb3VyY2VzIjpbInRleHQtZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxhQUFhLEVBQXVCLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFMUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0M7SUF5Q0UsNkJBQW9CLElBQWdCLEVBQVUsR0FBc0IsRUFBVSxJQUFtQjtRQUE3RSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFlO1FBYmpHLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFUixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUdkLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUN4QyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQU0zRCxrQkFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzRELENBQUM7Ozs7SUFFckcsc0NBQVE7OztJQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7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MkQ7O0lBQzNELHVDQUFxRjs7SUFDckYsZ0RBQTJGOztJQUUzRix5Q0FBb0I7O0lBQ3BCLDBDQUFxQjs7SUFDckIsNENBQXdDOzs7OztJQUM1QixtQ0FBd0I7Ozs7O0lBQUUsa0NBQThCOzs7OztJQUFFLG1DQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlLCBOelRleHRJMThuSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcbmltcG9ydCB7IE56QXV0b3NpemVEaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2lucHV0JztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei10ZXh0LWVkaXQnLFxuICBleHBvcnRBczogJ256VGV4dEVkaXQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxidXR0b24gKm5nSWY9XCIhZWRpdGluZ1wiIFtuelRvb2x0aXBUaXRsZV09XCJsb2NhbGU/LmVkaXRcIiBuei10b29sdGlwIG56LXRyYW5zLWJ1dHRvbiBjbGFzcz1cImFudC10eXBvZ3JhcGh5LWVkaXRcIiAoY2xpY2spPVwib25DbGljaygpXCI+XG4gICAgICA8aSBuei1pY29uIG56VHlwZT1cImVkaXRcIj48L2k+XG4gICAgPC9idXR0b24+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVkaXRpbmdcIj5cbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAjdGV4dGFyZWFcbiAgICAgICAgbnotaW5wdXRcbiAgICAgICAgbnpBdXRvc2l6ZVxuICAgICAgICAoaW5wdXQpPVwib25JbnB1dCgkZXZlbnQpXCJcbiAgICAgICAgKGJsdXIpPVwiY29uZmlybSgpXCJcbiAgICAgICAgKGtleWRvd24uZXNjKT1cIm9uQ2FuY2VsKClcIlxuICAgICAgICAoa2V5ZG93bi5lbnRlcik9XCJvbkVudGVyKCRldmVudClcIlxuICAgICAgPlxuICAgICAgPC90ZXh0YXJlYT5cbiAgICAgIDxidXR0b24gbnotdHJhbnMtYnV0dG9uIGNsYXNzPVwiYW50LXR5cG9ncmFwaHktZWRpdC1jb250ZW50LWNvbmZpcm1cIiAoY2xpY2spPVwiY29uZmlybSgpXCI+XG4gICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiZW50ZXJcIj48L2k+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIE56VGV4dEVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGVkaXRpbmcgPSBmYWxzZTtcbiAgbG9jYWxlITogTnpUZXh0STE4bkludGVyZmFjZTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgQElucHV0KCkgdGV4dD86IHN0cmluZztcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHN0YXJ0RWRpdGluZyA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGVuZEVkaXRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQFZpZXdDaGlsZCgndGV4dGFyZWEnLCB7IHN0YXRpYzogZmFsc2UgfSkgdGV4dGFyZWEhOiBFbGVtZW50UmVmPEhUTUxUZXh0QXJlYUVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKE56QXV0b3NpemVEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KSBhdXRvc2l6ZURpcmVjdGl2ZSE6IE56QXV0b3NpemVEaXJlY3RpdmU7XG5cbiAgYmVmb3JlVGV4dD86IHN0cmluZztcbiAgY3VycmVudFRleHQ/OiBzdHJpbmc7XG4gIG5hdGl2ZUVsZW1lbnQgPSB0aGlzLmhvc3QubmF0aXZlRWxlbWVudDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob3N0OiBFbGVtZW50UmVmLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnVGV4dCcpO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuYmVmb3JlVGV4dCA9IHRoaXMudGV4dDtcbiAgICB0aGlzLmN1cnJlbnRUZXh0ID0gdGhpcy5iZWZvcmVUZXh0O1xuICAgIHRoaXMuZWRpdGluZyA9IHRydWU7XG4gICAgdGhpcy5zdGFydEVkaXRpbmcuZW1pdCgpO1xuICAgIHRoaXMuZm9jdXNBbmRTZXRWYWx1ZSgpO1xuICB9XG5cbiAgY29uZmlybSgpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmVuZEVkaXRpbmcuZW1pdCh0aGlzLmN1cnJlbnRUZXh0KTtcbiAgfVxuXG4gIG9uSW5wdXQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gICAgdGhpcy5jdXJyZW50VGV4dCA9IHRhcmdldC52YWx1ZTtcbiAgfVxuXG4gIG9uRW50ZXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmNvbmZpcm0oKTtcbiAgfVxuXG4gIG9uQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuY3VycmVudFRleHQgPSB0aGlzLmJlZm9yZVRleHQ7XG4gICAgdGhpcy5jb25maXJtKCk7XG4gIH1cblxuICBmb2N1c0FuZFNldFZhbHVlKCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMudGV4dGFyZWE/Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy50ZXh0YXJlYS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIHRoaXMudGV4dGFyZWEubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMuY3VycmVudFRleHQgfHwgJyc7XG4gICAgICAgIHRoaXMuYXV0b3NpemVEaXJlY3RpdmUucmVzaXplVG9GaXRDb250ZW50KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==