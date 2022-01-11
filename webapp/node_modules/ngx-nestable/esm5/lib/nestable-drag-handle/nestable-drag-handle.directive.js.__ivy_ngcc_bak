/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { DRAG_START, REGISTER_HANDLE } from '../nestable.constant';
var NestableDragHandleDirective = /** @class */ (function () {
    function NestableDragHandleDirective(_el) {
        this._el = _el;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    NestableDragHandleDirective.prototype.onMouseDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var detail = {
            param: this.ngxNestableDragHandle,
            event: event
        };
        this._el.nativeElement.dispatchEvent(new CustomEvent(DRAG_START, { bubbles: true, detail: detail }));
    };
    /**
     * @return {?}
     */
    NestableDragHandleDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._el.nativeElement.dispatchEvent(new CustomEvent(REGISTER_HANDLE, { bubbles: true, detail: this.ngxNestableDragHandle }));
    };
    NestableDragHandleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngxNestableDragHandle]'
                },] }
    ];
    /** @nocollapse */
    NestableDragHandleDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    NestableDragHandleDirective.propDecorators = {
        ngxNestableDragHandle: [{ type: Input }],
        onMouseDown: [{ type: HostListener, args: ['mousedown', ['$event'],] }]
    };
    return NestableDragHandleDirective;
}());
export { NestableDragHandleDirective };
if (false) {
    /** @type {?} */
    NestableDragHandleDirective.prototype.ngxNestableDragHandle;
    /**
     * @type {?}
     * @private
     */
    NestableDragHandleDirective.prototype._el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdGFibGUtZHJhZy1oYW5kbGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW5lc3RhYmxlLyIsInNvdXJjZXMiOlsibGliL25lc3RhYmxlLWRyYWctaGFuZGxlL25lc3RhYmxlLWRyYWctaGFuZGxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVuRixPQUFPLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRW5FO0lBaUJJLHFDQUFvQixHQUFlO1FBQWYsUUFBRyxHQUFILEdBQUcsQ0FBWTtJQUFHLENBQUM7Ozs7O0lBVmhDLGlEQUFXOzs7O0lBRGxCLFVBQ21CLEtBQUs7O1lBQ2QsTUFBTSxHQUFHO1lBQ1gsS0FBSyxFQUFFLElBQUksQ0FBQyxxQkFBcUI7WUFDakMsS0FBSyxFQUFFLEtBQUs7U0FDZjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FDaEMsSUFBSSxXQUFXLENBQUMsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FDakUsQ0FBQztJQUNOLENBQUM7Ozs7SUFJRCw4Q0FBUTs7O0lBQVI7UUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQ2hDLElBQUksV0FBVyxDQUFDLGVBQWUsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQzFGLENBQUM7SUFDTixDQUFDOztnQkF2QkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSx5QkFBeUI7aUJBQ3RDOzs7O2dCQU5tQixVQUFVOzs7d0NBUXpCLEtBQUs7OEJBRUwsWUFBWSxTQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFrQnpDLGtDQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0FyQlksMkJBQTJCOzs7SUFDcEMsNERBQXNDOzs7OztJQWExQiwwQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEUkFHX1NUQVJULCBSRUdJU1RFUl9IQU5ETEUgfSBmcm9tICcuLi9uZXN0YWJsZS5jb25zdGFudCc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW25neE5lc3RhYmxlRHJhZ0hhbmRsZV0nXG59KVxuZXhwb3J0IGNsYXNzIE5lc3RhYmxlRHJhZ0hhbmRsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KCkgcHVibGljIG5neE5lc3RhYmxlRHJhZ0hhbmRsZTtcblxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGRldGFpbCA9IHtcbiAgICAgICAgICAgIHBhcmFtOiB0aGlzLm5neE5lc3RhYmxlRHJhZ0hhbmRsZSxcbiAgICAgICAgICAgIGV2ZW50OiBldmVudFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoRFJBR19TVEFSVCwgeyBidWJibGVzOiB0cnVlLCBkZXRhaWw6IGRldGFpbCB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsOiBFbGVtZW50UmVmKSB7fVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIG5ldyBDdXN0b21FdmVudChSRUdJU1RFUl9IQU5ETEUsIHsgYnViYmxlczogdHJ1ZSwgZGV0YWlsOiB0aGlzLm5neE5lc3RhYmxlRHJhZ0hhbmRsZSB9KVxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==