/**
 * @fileoverview added by tsickle
 * Generated from: form-label.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Optional, Renderer2, SkipSelf, ViewEncapsulation } from '@angular/core';
import { InputBoolean, toBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { NzFormDirective } from './form.directive';
export class NzFormLabelComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} cdr
     * @param {?} nzFormDirective
     */
    constructor(elementRef, renderer, cdr, nzFormDirective) {
        this.cdr = cdr;
        this.nzFormDirective = nzFormDirective;
        this.nzRequired = false;
        this.noColon = 'default';
        this.destroy$ = new Subject();
        renderer.addClass(elementRef.nativeElement, 'ant-form-item-label');
        if (this.nzFormDirective) {
            this.nzFormDirective
                .getInputObservable('nzNoColon')
                .pipe(filter((/**
             * @return {?}
             */
            () => this.noColon === 'default')), takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            () => this.cdr.markForCheck()));
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzNoColon(value) {
        this.noColon = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzNoColon() {
        var _a;
        return this.noColon !== 'default' ? this.noColon : (_a = this.nzFormDirective) === null || _a === void 0 ? void 0 : _a.nzNoColon;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzFormLabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-form-label',
                exportAs: 'nzFormLabel',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <label [attr.for]="nzFor" [class.ant-form-item-no-colon]="nzNoColon" [class.ant-form-item-required]="nzRequired">
      <ng-content></ng-content>
    </label>
  `
            }] }
];
/** @nocollapse */
NzFormLabelComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: NzFormDirective, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
NzFormLabelComponent.propDecorators = {
    nzFor: [{ type: Input }],
    nzRequired: [{ type: Input }],
    nzNoColon: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzFormLabelComponent.prototype, "nzRequired", void 0);
if (false) {
    /** @type {?} */
    NzFormLabelComponent.ngAcceptInputType_nzRequired;
    /** @type {?} */
    NzFormLabelComponent.ngAcceptInputType_nzNoColon;
    /** @type {?} */
    NzFormLabelComponent.prototype.nzFor;
    /** @type {?} */
    NzFormLabelComponent.prototype.nzRequired;
    /** @type {?} */
    NzFormLabelComponent.prototype.noColon;
    /**
     * @type {?}
     * @private
     */
    NzFormLabelComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzFormLabelComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzFormLabelComponent.prototype.nzFormDirective;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1sYWJlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Zvcm0vIiwic291cmNlcyI6WyJmb3JtLWxhYmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRUwsUUFBUSxFQUNSLFNBQVMsRUFDVCxRQUFRLEVBQ1IsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQWNuRCxNQUFNLE9BQU8sb0JBQW9COzs7Ozs7O0lBa0IvQixZQUNFLFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ1gsR0FBc0IsRUFDRSxlQUFnQztRQUR4RCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUNFLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQWpCekMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQVM1QyxZQUFPLEdBQXdCLFNBQVMsQ0FBQztRQUVqQyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQVEvQixRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUVuRSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGVBQWU7aUJBQ2pCLGtCQUFrQixDQUFDLFdBQVcsQ0FBQztpQkFDL0IsSUFBSSxDQUNILE1BQU07OztZQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFDLEVBQ3hDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3pCO2lCQUNBLFNBQVM7OztZQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEVBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7Ozs7O0lBN0JELElBQ0ksU0FBUyxDQUFDLEtBQWM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7OztJQUNELElBQUksU0FBUzs7UUFDWCxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBQyxJQUFJLENBQUMsZUFBZSwwQ0FBRSxTQUFTLENBQUM7SUFDckYsQ0FBQzs7OztJQXlCRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQXBERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7OztHQUlUO2FBQ0Y7Ozs7WUExQkMsVUFBVTtZQUlWLFNBQVM7WUFOVCxpQkFBaUI7WUFlVixlQUFlLHVCQW9DbkIsUUFBUSxZQUFJLFFBQVE7OztvQkFsQnRCLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLOztBQURtQjtJQUFmLFlBQVksRUFBRTs7d0RBQW9COzs7SUFKNUMsa0RBQWtEOztJQUNsRCxpREFBaUQ7O0lBRWpELHFDQUF3Qjs7SUFDeEIsMENBQTRDOztJQVM1Qyx1Q0FBeUM7Ozs7O0lBRXpDLHdDQUFpQzs7Ozs7SUFLL0IsbUNBQThCOzs7OztJQUM5QiwrQ0FBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgU2tpcFNlbGYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCB0b0Jvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE56Rm9ybURpcmVjdGl2ZSB9IGZyb20gJy4vZm9ybS5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1mb3JtLWxhYmVsJyxcbiAgZXhwb3J0QXM6ICduekZvcm1MYWJlbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bGFiZWwgW2F0dHIuZm9yXT1cIm56Rm9yXCIgW2NsYXNzLmFudC1mb3JtLWl0ZW0tbm8tY29sb25dPVwibnpOb0NvbG9uXCIgW2NsYXNzLmFudC1mb3JtLWl0ZW0tcmVxdWlyZWRdPVwibnpSZXF1aXJlZFwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvbGFiZWw+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTnpGb3JtTGFiZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpSZXF1aXJlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpOb0NvbG9uOiBCb29sZWFuSW5wdXQ7XG5cbiAgQElucHV0KCkgbnpGb3I/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelJlcXVpcmVkID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHNldCBuek5vQ29sb24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm5vQ29sb24gPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG4gIGdldCBuek5vQ29sb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubm9Db2xvbiAhPT0gJ2RlZmF1bHQnID8gdGhpcy5ub0NvbG9uIDogdGhpcy5uekZvcm1EaXJlY3RpdmU/Lm56Tm9Db2xvbjtcbiAgfVxuXG4gIG5vQ29sb246IGJvb2xlYW4gfCAnZGVmYXVsdCcgPSAnZGVmYXVsdCc7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwcml2YXRlIG56Rm9ybURpcmVjdGl2ZTogTnpGb3JtRGlyZWN0aXZlXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1mb3JtLWl0ZW0tbGFiZWwnKTtcblxuICAgIGlmICh0aGlzLm56Rm9ybURpcmVjdGl2ZSkge1xuICAgICAgdGhpcy5uekZvcm1EaXJlY3RpdmVcbiAgICAgICAgLmdldElucHV0T2JzZXJ2YWJsZSgnbnpOb0NvbG9uJylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMubm9Db2xvbiA9PT0gJ2RlZmF1bHQnKSxcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==