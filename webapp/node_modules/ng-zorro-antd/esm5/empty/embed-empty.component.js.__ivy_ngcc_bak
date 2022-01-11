/**
 * @fileoverview added by tsickle
 * Generated from: embed-empty.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ComponentPortal, PortalInjector, TemplatePortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector, Input, TemplateRef, Type, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NZ_EMPTY_COMPONENT_NAME } from './config';
/**
 * @param {?} componentName
 * @return {?}
 */
function getEmptySize(componentName) {
    switch (componentName) {
        case 'table':
        case 'list':
            return 'normal';
        case 'select':
        case 'tree-select':
        case 'cascader':
        case 'transfer':
            return 'small';
        default:
            return '';
    }
}
var NzEmbedEmptyComponent = /** @class */ (function () {
    function NzEmbedEmptyComponent(configService, viewContainerRef, cdr, injector) {
        this.configService = configService;
        this.viewContainerRef = viewContainerRef;
        this.cdr = cdr;
        this.injector = injector;
        this.contentType = 'string';
        this.size = '';
        this.destroy$ = new Subject();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NzEmbedEmptyComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzComponentName) {
            this.size = getEmptySize(changes.nzComponentName.currentValue);
        }
        if (changes.specificContent && !changes.specificContent.isFirstChange()) {
            this.content = changes.specificContent.currentValue;
            this.renderEmpty();
        }
    };
    /**
     * @return {?}
     */
    NzEmbedEmptyComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.subscribeDefaultEmptyContentChange();
    };
    /**
     * @return {?}
     */
    NzEmbedEmptyComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @private
     * @return {?}
     */
    NzEmbedEmptyComponent.prototype.renderEmpty = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var content = this.content;
        if (typeof content === 'string') {
            this.contentType = 'string';
        }
        else if (content instanceof TemplateRef) {
            /** @type {?} */
            var context = (/** @type {?} */ ({ $implicit: this.nzComponentName }));
            this.contentType = 'template';
            this.contentPortal = new TemplatePortal(content, this.viewContainerRef, context);
        }
        else if (content instanceof Type) {
            /** @type {?} */
            var context = new WeakMap([[NZ_EMPTY_COMPONENT_NAME, this.nzComponentName]]);
            /** @type {?} */
            var injector = new PortalInjector(this.injector, context);
            this.contentType = 'component';
            this.contentPortal = new ComponentPortal(content, this.viewContainerRef, injector);
        }
        else {
            this.contentType = 'string';
            this.contentPortal = undefined;
        }
        this.cdr.detectChanges();
    };
    /**
     * @private
     * @return {?}
     */
    NzEmbedEmptyComponent.prototype.subscribeDefaultEmptyContentChange = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.configService
            .getConfigChangeEventForComponent('empty')
            .pipe(startWith(true), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.content = _this.specificContent || _this.getUserDefaultEmptyContent();
            _this.renderEmpty();
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzEmbedEmptyComponent.prototype.getUserDefaultEmptyContent = /**
     * @private
     * @return {?}
     */
    function () {
        return (this.configService.getConfigForComponent('empty') || {}).nzDefaultEmptyContent;
    };
    NzEmbedEmptyComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-embed-empty',
                    exportAs: 'nzEmbedEmpty',
                    template: "\n    <ng-container *ngIf=\"!content && specificContent !== null\" [ngSwitch]=\"size\">\n      <nz-empty *ngSwitchCase=\"'normal'\" class=\"ant-empty-normal\" [nzNotFoundImage]=\"'simple'\"></nz-empty>\n      <nz-empty *ngSwitchCase=\"'small'\" class=\"ant-empty-small\" [nzNotFoundImage]=\"'simple'\"></nz-empty>\n      <nz-empty *ngSwitchDefault></nz-empty>\n    </ng-container>\n    <ng-container *ngIf=\"content\">\n      <ng-template *ngIf=\"contentType !== 'string'\" [cdkPortalOutlet]=\"contentPortal\"></ng-template>\n      <ng-container *ngIf=\"contentType === 'string'\">\n        {{ content }}\n      </ng-container>\n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    NzEmbedEmptyComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: ViewContainerRef },
        { type: ChangeDetectorRef },
        { type: Injector }
    ]; };
    NzEmbedEmptyComponent.propDecorators = {
        nzComponentName: [{ type: Input }],
        specificContent: [{ type: Input }]
    };
    return NzEmbedEmptyComponent;
}());
export { NzEmbedEmptyComponent };
if (false) {
    /** @type {?} */
    NzEmbedEmptyComponent.prototype.nzComponentName;
    /** @type {?} */
    NzEmbedEmptyComponent.prototype.specificContent;
    /** @type {?} */
    NzEmbedEmptyComponent.prototype.content;
    /** @type {?} */
    NzEmbedEmptyComponent.prototype.contentType;
    /** @type {?} */
    NzEmbedEmptyComponent.prototype.contentPortal;
    /** @type {?} */
    NzEmbedEmptyComponent.prototype.size;
    /**
     * @type {?}
     * @private
     */
    NzEmbedEmptyComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzEmbedEmptyComponent.prototype.configService;
    /**
     * @type {?}
     * @private
     */
    NzEmbedEmptyComponent.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    NzEmbedEmptyComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzEmbedEmptyComponent.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1iZWQtZW1wdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9lbXB0eS8iLCJzb3VyY2VzIjpbImVtYmVkLWVtcHR5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsZUFBZSxFQUFVLGNBQWMsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsUUFBUSxFQUNSLEtBQUssRUFLTCxXQUFXLEVBQ1gsSUFBSSxFQUNKLGdCQUFnQixFQUNoQixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsdUJBQXVCLEVBQXFDLE1BQU0sVUFBVSxDQUFDOzs7OztBQUV0RixTQUFTLFlBQVksQ0FBQyxhQUFxQjtJQUN6QyxRQUFRLGFBQWEsRUFBRTtRQUNyQixLQUFLLE9BQU8sQ0FBQztRQUNiLEtBQUssTUFBTTtZQUNULE9BQU8sUUFBUSxDQUFDO1FBQ2xCLEtBQUssUUFBUSxDQUFDO1FBQ2QsS0FBSyxhQUFhLENBQUM7UUFDbkIsS0FBSyxVQUFVLENBQUM7UUFDaEIsS0FBSyxVQUFVO1lBQ2IsT0FBTyxPQUFPLENBQUM7UUFDakI7WUFDRSxPQUFPLEVBQUUsQ0FBQztLQUNiO0FBQ0gsQ0FBQztBQUlEO0lBOEJFLCtCQUNVLGFBQThCLEVBQzlCLGdCQUFrQyxFQUNsQyxHQUFzQixFQUN0QixRQUFrQjtRQUhsQixrQkFBYSxHQUFiLGFBQWEsQ0FBaUI7UUFDOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFr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SSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQztJQUN6RixDQUFDOztnQkEzRkYsU0FBUyxTQUFDO29CQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSw4b0JBWVQ7aUJBQ0Y7Ozs7Z0JBdENRLGVBQWU7Z0JBUHRCLGdCQUFnQjtnQkFWaEIsaUJBQWlCO2dCQUVqQixRQUFROzs7a0NBdURQLEtBQUs7a0NBQ0wsS0FBSzs7SUF1RVIsNEJBQUM7Q0FBQSxBQTVGRCxJQTRGQztTQXpFWSxxQkFBcUI7OztJQUNoQyxnREFBa0M7O0lBQ2xDLGdEQUFnRDs7SUFFaEQsd0NBQStCOztJQUMvQiw0Q0FBMkM7O0lBQzNDLDhDQUFrQzs7SUFDbEMscUNBQXVCOzs7OztJQUV2Qix5Q0FBdUM7Ozs7O0lBR3JDLDhDQUFzQzs7Ozs7SUFDdEMsaURBQTBDOzs7OztJQUMxQyxvQ0FBOEI7Ozs7O0lBQzlCLHlDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCwgUG9ydGFsLCBQb3J0YWxJbmplY3RvciwgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBUeXBlLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBOWl9FTVBUWV9DT01QT05FTlRfTkFNRSwgTnpFbXB0eUN1c3RvbUNvbnRlbnQsIE56RW1wdHlTaXplIH0gZnJvbSAnLi9jb25maWcnO1xuXG5mdW5jdGlvbiBnZXRFbXB0eVNpemUoY29tcG9uZW50TmFtZTogc3RyaW5nKTogTnpFbXB0eVNpemUge1xuICBzd2l0Y2ggKGNvbXBvbmVudE5hbWUpIHtcbiAgICBjYXNlICd0YWJsZSc6XG4gICAgY2FzZSAnbGlzdCc6XG4gICAgICByZXR1cm4gJ25vcm1hbCc7XG4gICAgY2FzZSAnc2VsZWN0JzpcbiAgICBjYXNlICd0cmVlLXNlbGVjdCc6XG4gICAgY2FzZSAnY2FzY2FkZXInOlxuICAgIGNhc2UgJ3RyYW5zZmVyJzpcbiAgICAgIHJldHVybiAnc21hbGwnO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxudHlwZSBOekVtcHR5Q29udGVudFR5cGUgPSAnY29tcG9uZW50JyB8ICd0ZW1wbGF0ZScgfCAnc3RyaW5nJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ256LWVtYmVkLWVtcHR5JyxcbiAgZXhwb3J0QXM6ICduekVtYmVkRW1wdHknLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhY29udGVudCAmJiBzcGVjaWZpY0NvbnRlbnQgIT09IG51bGxcIiBbbmdTd2l0Y2hdPVwic2l6ZVwiPlxuICAgICAgPG56LWVtcHR5ICpuZ1N3aXRjaENhc2U9XCInbm9ybWFsJ1wiIGNsYXNzPVwiYW50LWVtcHR5LW5vcm1hbFwiIFtuek5vdEZvdW5kSW1hZ2VdPVwiJ3NpbXBsZSdcIj48L256LWVtcHR5PlxuICAgICAgPG56LWVtcHR5ICpuZ1N3aXRjaENhc2U9XCInc21hbGwnXCIgY2xhc3M9XCJhbnQtZW1wdHktc21hbGxcIiBbbnpOb3RGb3VuZEltYWdlXT1cIidzaW1wbGUnXCI+PC9uei1lbXB0eT5cbiAgICAgIDxuei1lbXB0eSAqbmdTd2l0Y2hEZWZhdWx0PjwvbnotZW1wdHk+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRlbnRcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSAqbmdJZj1cImNvbnRlbnRUeXBlICE9PSAnc3RyaW5nJ1wiIFtjZGtQb3J0YWxPdXRsZXRdPVwiY29udGVudFBvcnRhbFwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udGVudFR5cGUgPT09ICdzdHJpbmcnXCI+XG4gICAgICAgIHt7IGNvbnRlbnQgfX1cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE56RW1iZWRFbXB0eUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBuekNvbXBvbmVudE5hbWU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNwZWNpZmljQ29udGVudD86IE56RW1wdHlDdXN0b21Db250ZW50O1xuXG4gIGNvbnRlbnQ/OiBOekVtcHR5Q3VzdG9tQ29udGVudDtcbiAgY29udGVudFR5cGU6IE56RW1wdHlDb250ZW50VHlwZSA9ICdzdHJpbmcnO1xuICBjb250ZW50UG9ydGFsPzogUG9ydGFsPE56U2FmZUFueT47XG4gIHNpemU6IE56RW1wdHlTaXplID0gJyc7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvclxuICApIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56Q29tcG9uZW50TmFtZSkge1xuICAgICAgdGhpcy5zaXplID0gZ2V0RW1wdHlTaXplKGNoYW5nZXMubnpDb21wb25lbnROYW1lLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuc3BlY2lmaWNDb250ZW50ICYmICFjaGFuZ2VzLnNwZWNpZmljQ29udGVudC5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMuY29udGVudCA9IGNoYW5nZXMuc3BlY2lmaWNDb250ZW50LmN1cnJlbnRWYWx1ZTtcbiAgICAgIHRoaXMucmVuZGVyRW1wdHkoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmliZURlZmF1bHRFbXB0eUNvbnRlbnRDaGFuZ2UoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyRW1wdHkoKTogdm9pZCB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuY29udGVudDtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuY29udGVudFR5cGUgPSAnc3RyaW5nJztcbiAgICB9IGVsc2UgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgY29uc3QgY29udGV4dCA9IHsgJGltcGxpY2l0OiB0aGlzLm56Q29tcG9uZW50TmFtZSB9IGFzIE56U2FmZUFueTtcbiAgICAgIHRoaXMuY29udGVudFR5cGUgPSAndGVtcGxhdGUnO1xuICAgICAgdGhpcy5jb250ZW50UG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKGNvbnRlbnQsIHRoaXMudmlld0NvbnRhaW5lclJlZiwgY29udGV4dCk7XG4gICAgfSBlbHNlIGlmIChjb250ZW50IGluc3RhbmNlb2YgVHlwZSkge1xuICAgICAgY29uc3QgY29udGV4dCA9IG5ldyBXZWFrTWFwKFtbTlpfRU1QVFlfQ09NUE9ORU5UX05BTUUsIHRoaXMubnpDb21wb25lbnROYW1lXV0pO1xuICAgICAgY29uc3QgaW5qZWN0b3IgPSBuZXcgUG9ydGFsSW5qZWN0b3IodGhpcy5pbmplY3RvciwgY29udGV4dCk7XG4gICAgICB0aGlzLmNvbnRlbnRUeXBlID0gJ2NvbXBvbmVudCc7XG4gICAgICB0aGlzLmNvbnRlbnRQb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKGNvbnRlbnQsIHRoaXMudmlld0NvbnRhaW5lclJlZiwgaW5qZWN0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRlbnRUeXBlID0gJ3N0cmluZyc7XG4gICAgICB0aGlzLmNvbnRlbnRQb3J0YWwgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVEZWZhdWx0RW1wdHlDb250ZW50Q2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMuY29uZmlnU2VydmljZVxuICAgICAgLmdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KCdlbXB0eScpXG4gICAgICAucGlwZShzdGFydFdpdGgodHJ1ZSksIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLnNwZWNpZmljQ29udGVudCB8fCB0aGlzLmdldFVzZXJEZWZhdWx0RW1wdHlDb250ZW50KCk7XG4gICAgICAgIHRoaXMucmVuZGVyRW1wdHkoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRVc2VyRGVmYXVsdEVtcHR5Q29udGVudCgpOiBUeXBlPE56U2FmZUFueT4gfCBUZW1wbGF0ZVJlZjxzdHJpbmc+IHwgc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gKHRoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWdGb3JDb21wb25lbnQoJ2VtcHR5JykgfHwge30pLm56RGVmYXVsdEVtcHR5Q29udGVudDtcbiAgfVxufVxuIl19