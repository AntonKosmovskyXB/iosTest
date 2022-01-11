/**
 * @fileoverview added by tsickle
 * Generated from: transition-patch.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
/**
 * hack the bug
 * angular router change with unexpected transition trigger after calling applicationRef.attachView
 * https://github.com/angular/angular/issues/34718
 */
var NzTransitionPatchDirective = /** @class */ (function () {
    function NzTransitionPatchDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.hidden = null;
        this.renderer.setAttribute(this.elementRef.nativeElement, 'hidden', '');
    }
    /**
     * @return {?}
     */
    NzTransitionPatchDirective.prototype.setHiddenAttribute = /**
     * @return {?}
     */
    function () {
        if (this.hidden === true) {
            this.renderer.setAttribute(this.elementRef.nativeElement, 'hidden', '');
        }
        else if (this.hidden === false || this.hidden === null) {
            this.renderer.removeAttribute(this.elementRef.nativeElement, 'hidden');
        }
        else if (typeof this.hidden === 'string') {
            this.renderer.setAttribute(this.elementRef.nativeElement, 'hidden', this.hidden);
        }
    };
    /**
     * @return {?}
     */
    NzTransitionPatchDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setHiddenAttribute();
    };
    /**
     * @return {?}
     */
    NzTransitionPatchDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.setHiddenAttribute();
    };
    NzTransitionPatchDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-button],nz-button-group,[nz-icon],[nz-menu-item],[nz-submenu],nz-select-top-control,nz-select-placeholder'
                },] }
    ];
    /** @nocollapse */
    NzTransitionPatchDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzTransitionPatchDirective.propDecorators = {
        hidden: [{ type: Input }]
    };
    return NzTransitionPatchDirective;
}());
export { NzTransitionPatchDirective };
if (false) {
    /** @type {?} */
    NzTransitionPatchDirective.prototype.hidden;
    /**
     * @type {?}
     * @private
     */
    NzTransitionPatchDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzTransitionPatchDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNpdGlvbi1wYXRjaC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvdHJhbnNpdGlvbi1wYXRjaC8iLCJzb3VyY2VzIjpbInRyYW5zaXRpb24tcGF0Y2guZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWEsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFRbEc7SUFlRSxvQ0FBb0IsVUFBc0IsRUFBVSxRQUFtQjtRQUFuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVg5RCxXQUFNLEdBQWMsSUFBSSxDQUFDO1FBWWhDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxRSxDQUFDOzs7O0lBWkQsdURBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUN6RTthQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDeEU7YUFBTSxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNsRjtJQUNILENBQUM7Ozs7SUFNRCxnREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsb0RBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Z0JBekJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsK0dBQStHO2lCQUMxSDs7OztnQkFWa0MsVUFBVTtnQkFBb0IsU0FBUzs7O3lCQVl2RSxLQUFLOztJQXNCUixpQ0FBQztDQUFBLEFBMUJELElBMEJDO1NBdkJZLDBCQUEwQjs7O0lBQ3JDLDRDQUFrQzs7Ozs7SUFXdEIsZ0RBQThCOzs7OztJQUFFLDhDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG4vKipcbiAqIGhhY2sgdGhlIGJ1Z1xuICogYW5ndWxhciByb3V0ZXIgY2hhbmdlIHdpdGggdW5leHBlY3RlZCB0cmFuc2l0aW9uIHRyaWdnZXIgYWZ0ZXIgY2FsbGluZyBhcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3XG4gKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8zNDcxOFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnotYnV0dG9uXSxuei1idXR0b24tZ3JvdXAsW256LWljb25dLFtuei1tZW51LWl0ZW1dLFtuei1zdWJtZW51XSxuei1zZWxlY3QtdG9wLWNvbnRyb2wsbnotc2VsZWN0LXBsYWNlaG9sZGVyJ1xufSlcbmV4cG9ydCBjbGFzcyBOelRyYW5zaXRpb25QYXRjaERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGhpZGRlbjogTnpTYWZlQW55ID0gbnVsbDtcbiAgc2V0SGlkZGVuQXR0cmlidXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmhpZGRlbiA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdoaWRkZW4nLCAnJyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmhpZGRlbiA9PT0gZmFsc2UgfHwgdGhpcy5oaWRkZW4gPT09IG51bGwpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaGlkZGVuJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5oaWRkZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2hpZGRlbicsIHRoaXMuaGlkZGVuKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaGlkZGVuJywgJycpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRIaWRkZW5BdHRyaWJ1dGUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldEhpZGRlbkF0dHJpYnV0ZSgpO1xuICB9XG59XG4iXX0=