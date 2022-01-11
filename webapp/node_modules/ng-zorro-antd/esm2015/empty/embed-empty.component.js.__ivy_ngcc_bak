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
export class NzEmbedEmptyComponent {
    /**
     * @param {?} configService
     * @param {?} viewContainerRef
     * @param {?} cdr
     * @param {?} injector
     */
    constructor(configService, viewContainerRef, cdr, injector) {
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
    ngOnChanges(changes) {
        if (changes.nzComponentName) {
            this.size = getEmptySize(changes.nzComponentName.currentValue);
        }
        if (changes.specificContent && !changes.specificContent.isFirstChange()) {
            this.content = changes.specificContent.currentValue;
            this.renderEmpty();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscribeDefaultEmptyContentChange();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @private
     * @return {?}
     */
    renderEmpty() {
        /** @type {?} */
        const content = this.content;
        if (typeof content === 'string') {
            this.contentType = 'string';
        }
        else if (content instanceof TemplateRef) {
            /** @type {?} */
            const context = (/** @type {?} */ ({ $implicit: this.nzComponentName }));
            this.contentType = 'template';
            this.contentPortal = new TemplatePortal(content, this.viewContainerRef, context);
        }
        else if (content instanceof Type) {
            /** @type {?} */
            const context = new WeakMap([[NZ_EMPTY_COMPONENT_NAME, this.nzComponentName]]);
            /** @type {?} */
            const injector = new PortalInjector(this.injector, context);
            this.contentType = 'component';
            this.contentPortal = new ComponentPortal(content, this.viewContainerRef, injector);
        }
        else {
            this.contentType = 'string';
            this.contentPortal = undefined;
        }
        this.cdr.detectChanges();
    }
    /**
     * @private
     * @return {?}
     */
    subscribeDefaultEmptyContentChange() {
        this.configService
            .getConfigChangeEventForComponent('empty')
            .pipe(startWith(true), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.content = this.specificContent || this.getUserDefaultEmptyContent();
            this.renderEmpty();
        }));
    }
    /**
     * @private
     * @return {?}
     */
    getUserDefaultEmptyContent() {
        return (this.configService.getConfigForComponent('empty') || {}).nzDefaultEmptyContent;
    }
}
NzEmbedEmptyComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-embed-empty',
                exportAs: 'nzEmbedEmpty',
                template: `
    <ng-container *ngIf="!content && specificContent !== null" [ngSwitch]="size">
      <nz-empty *ngSwitchCase="'normal'" class="ant-empty-normal" [nzNotFoundImage]="'simple'"></nz-empty>
      <nz-empty *ngSwitchCase="'small'" class="ant-empty-small" [nzNotFoundImage]="'simple'"></nz-empty>
      <nz-empty *ngSwitchDefault></nz-empty>
    </ng-container>
    <ng-container *ngIf="content">
      <ng-template *ngIf="contentType !== 'string'" [cdkPortalOutlet]="contentPortal"></ng-template>
      <ng-container *ngIf="contentType === 'string'">
        {{ content }}
      </ng-container>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
NzEmbedEmptyComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ViewContainerRef },
    { type: ChangeDetectorRef },
    { type: Injector }
];
NzEmbedEmptyComponent.propDecorators = {
    nzComponentName: [{ type: Input }],
    specificContent: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1iZWQtZW1wdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9lbXB0eS8iLCJzb3VyY2VzIjpbImVtYmVkLWVtcHR5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsZUFBZSxFQUFVLGNBQWMsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsUUFBUSxFQUNSLEtBQUssRUFLTCxXQUFXLEVBQ1gsSUFBSSxFQUNKLGdCQUFnQixFQUNoQixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsdUJBQXVCLEVBQXFDLE1BQU0sVUFBVSxDQUFDOzs7OztBQUV0RixTQUFTLFlBQVksQ0FBQyxhQUFxQjtJQUN6QyxRQUFRLGFBQWEsRUFBRTtRQUNyQixLQUFLLE9BQU8sQ0FBQztRQUNiLEtBQUssTUFBTTtZQUNULE9BQU8sUUFBUSxDQUFDO1FBQ2xCLEtBQUssUUFBUSxDQUFDO1FBQ2QsS0FBSyxhQUFhLENBQUM7UUFDbkIsS0FBSyxVQUFVLENBQUM7UUFDaEIsS0FBSyxVQUFVO1lBQ2IsT0FBTyxPQUFPLENBQUM7UUFDakI7WUFDRSxPQUFPLEVBQUUsQ0FBQztLQUNiO0FBQ0gsQ0FBQztBQXVCRCxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7O0lBV2hDLFlBQ1UsYUFBOEIsRUFDOUIsZ0JBQWtDLEVBQ2xDLEdBQXNCLEVBQ3RCLFFBQWtCO1FBSGxCLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQUM5Qixx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T0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMscUJBQXFCLENBQUM7SUFDekYsQ0FBQzs7O1lBM0ZGLFNBQVMsU0FBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztHQVlUO2FBQ0Y7Ozs7WUF0Q1EsZUFBZTtZQVB0QixnQkFBZ0I7WUFWaEIsaUJBQWlCO1lBRWpCLFFBQVE7Ozs4QkF1RFAsS0FBSzs4QkFDTCxLQUFLOzs7O0lBRE4sZ0RBQWtDOztJQUNsQyxnREFBZ0Q7O0lBRWhELHdDQUErQjs7SUFDL0IsNENBQTJDOztJQUMzQyw4Q0FBa0M7O0lBQ2xDLHFDQUF1Qjs7Ozs7SUFFdkIseUNBQXVDOzs7OztJQUdyQyw4Q0FBc0M7Ozs7O0lBQ3RDLGlEQUEwQzs7Ozs7SUFDMUMsb0NBQThCOzs7OztJQUM5Qix5Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwsIFBvcnRhbCwgUG9ydGFsSW5qZWN0b3IsIFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVHlwZSxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgTlpfRU1QVFlfQ09NUE9ORU5UX05BTUUsIE56RW1wdHlDdXN0b21Db250ZW50LCBOekVtcHR5U2l6ZSB9IGZyb20gJy4vY29uZmlnJztcblxuZnVuY3Rpb24gZ2V0RW1wdHlTaXplKGNvbXBvbmVudE5hbWU6IHN0cmluZyk6IE56RW1wdHlTaXplIHtcbiAgc3dpdGNoIChjb21wb25lbnROYW1lKSB7XG4gICAgY2FzZSAndGFibGUnOlxuICAgIGNhc2UgJ2xpc3QnOlxuICAgICAgcmV0dXJuICdub3JtYWwnO1xuICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgY2FzZSAndHJlZS1zZWxlY3QnOlxuICAgIGNhc2UgJ2Nhc2NhZGVyJzpcbiAgICBjYXNlICd0cmFuc2Zlcic6XG4gICAgICByZXR1cm4gJ3NtYWxsJztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59XG5cbnR5cGUgTnpFbXB0eUNvbnRlbnRUeXBlID0gJ2NvbXBvbmVudCcgfCAndGVtcGxhdGUnIHwgJ3N0cmluZyc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICduei1lbWJlZC1lbXB0eScsXG4gIGV4cG9ydEFzOiAnbnpFbWJlZEVtcHR5JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNvbnRlbnQgJiYgc3BlY2lmaWNDb250ZW50ICE9PSBudWxsXCIgW25nU3dpdGNoXT1cInNpemVcIj5cbiAgICAgIDxuei1lbXB0eSAqbmdTd2l0Y2hDYXNlPVwiJ25vcm1hbCdcIiBjbGFzcz1cImFudC1lbXB0eS1ub3JtYWxcIiBbbnpOb3RGb3VuZEltYWdlXT1cIidzaW1wbGUnXCI+PC9uei1lbXB0eT5cbiAgICAgIDxuei1lbXB0eSAqbmdTd2l0Y2hDYXNlPVwiJ3NtYWxsJ1wiIGNsYXNzPVwiYW50LWVtcHR5LXNtYWxsXCIgW256Tm90Rm91bmRJbWFnZV09XCInc2ltcGxlJ1wiPjwvbnotZW1wdHk+XG4gICAgICA8bnotZW1wdHkgKm5nU3dpdGNoRGVmYXVsdD48L256LWVtcHR5PlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250ZW50XCI+XG4gICAgICA8bmctdGVtcGxhdGUgKm5nSWY9XCJjb250ZW50VHlwZSAhPT0gJ3N0cmluZydcIiBbY2RrUG9ydGFsT3V0bGV0XT1cImNvbnRlbnRQb3J0YWxcIj48L25nLXRlbXBsYXRlPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRlbnRUeXBlID09PSAnc3RyaW5nJ1wiPlxuICAgICAgICB7eyBjb250ZW50IH19XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOekVtYmVkRW1wdHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgbnpDb21wb25lbnROYW1lPzogc3RyaW5nO1xuICBASW5wdXQoKSBzcGVjaWZpY0NvbnRlbnQ/OiBOekVtcHR5Q3VzdG9tQ29udGVudDtcblxuICBjb250ZW50PzogTnpFbXB0eUN1c3RvbUNvbnRlbnQ7XG4gIGNvbnRlbnRUeXBlOiBOekVtcHR5Q29udGVudFR5cGUgPSAnc3RyaW5nJztcbiAgY29udGVudFBvcnRhbD86IFBvcnRhbDxOelNhZmVBbnk+O1xuICBzaXplOiBOekVtcHR5U2l6ZSA9ICcnO1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uekNvbXBvbmVudE5hbWUpIHtcbiAgICAgIHRoaXMuc2l6ZSA9IGdldEVtcHR5U2l6ZShjaGFuZ2VzLm56Q29tcG9uZW50TmFtZS5jdXJyZW50VmFsdWUpO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLnNwZWNpZmljQ29udGVudCAmJiAhY2hhbmdlcy5zcGVjaWZpY0NvbnRlbnQuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLmNvbnRlbnQgPSBjaGFuZ2VzLnNwZWNpZmljQ29udGVudC5jdXJyZW50VmFsdWU7XG4gICAgICB0aGlzLnJlbmRlckVtcHR5KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpYmVEZWZhdWx0RW1wdHlDb250ZW50Q2hhbmdlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckVtcHR5KCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQ7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLmNvbnRlbnRUeXBlID0gJ3N0cmluZyc7XG4gICAgfSBlbHNlIGlmIChjb250ZW50IGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB7ICRpbXBsaWNpdDogdGhpcy5uekNvbXBvbmVudE5hbWUgfSBhcyBOelNhZmVBbnk7XG4gICAgICB0aGlzLmNvbnRlbnRUeXBlID0gJ3RlbXBsYXRlJztcbiAgICAgIHRoaXMuY29udGVudFBvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbChjb250ZW50LCB0aGlzLnZpZXdDb250YWluZXJSZWYsIGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAoY29udGVudCBpbnN0YW5jZW9mIFR5cGUpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgV2Vha01hcChbW05aX0VNUFRZX0NPTVBPTkVOVF9OQU1FLCB0aGlzLm56Q29tcG9uZW50TmFtZV1dKTtcbiAgICAgIGNvbnN0IGluamVjdG9yID0gbmV3IFBvcnRhbEluamVjdG9yKHRoaXMuaW5qZWN0b3IsIGNvbnRleHQpO1xuICAgICAgdGhpcy5jb250ZW50VHlwZSA9ICdjb21wb25lbnQnO1xuICAgICAgdGhpcy5jb250ZW50UG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChjb250ZW50LCB0aGlzLnZpZXdDb250YWluZXJSZWYsIGluamVjdG9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250ZW50VHlwZSA9ICdzdHJpbmcnO1xuICAgICAgdGhpcy5jb250ZW50UG9ydGFsID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlRGVmYXVsdEVtcHR5Q29udGVudENoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpZ1NlcnZpY2VcbiAgICAgIC5nZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudCgnZW1wdHknKVxuICAgICAgLnBpcGUoc3RhcnRXaXRoKHRydWUpLCB0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy5zcGVjaWZpY0NvbnRlbnQgfHwgdGhpcy5nZXRVc2VyRGVmYXVsdEVtcHR5Q29udGVudCgpO1xuICAgICAgICB0aGlzLnJlbmRlckVtcHR5KCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VXNlckRlZmF1bHRFbXB0eUNvbnRlbnQoKTogVHlwZTxOelNhZmVBbnk+IHwgVGVtcGxhdGVSZWY8c3RyaW5nPiB8IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuICh0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KCdlbXB0eScpIHx8IHt9KS5uekRlZmF1bHRFbXB0eUNvbnRlbnQ7XG4gIH1cbn1cbiJdfQ==