/**
 * @fileoverview added by tsickle
 * Generated from: calendar-footer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core/time';
import { isNonEmptyString, isTemplateRef } from 'ng-zorro-antd/core/util';
import { DateHelperService } from 'ng-zorro-antd/i18n';
import { transCompatFormat } from './lib/util';
import { PREFIX_CLASS } from './util';
var CalendarFooterComponent = /** @class */ (function () {
    function CalendarFooterComponent(dateHelper) {
        this.dateHelper = dateHelper;
        this.showToday = false;
        this.hasTimePicker = false;
        this.isRange = false;
        this.okDisabled = false;
        this.rangeQuickSelector = null;
        this.clickOk = new EventEmitter();
        this.clickToday = new EventEmitter();
        this.prefixCls = PREFIX_CLASS;
        this.isTemplateRef = isTemplateRef;
        this.isNonEmptyString = isNonEmptyString;
        this.isTodayDisabled = false;
        this.todayTitle = '';
        this.now = new CandyDate();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    CalendarFooterComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.disabledDate) {
            this.isTodayDisabled = !!(this.disabledDate && this.disabledDate(this.now.nativeDate));
        }
        if (changes.locale) {
            // NOTE: Compat for DatePipe formatting rules
            /** @type {?} */
            var dateFormat = transCompatFormat(this.locale.dateFormat);
            this.todayTitle = this.dateHelper.format(this.now.nativeDate, dateFormat);
        }
    };
    /**
     * @return {?}
     */
    CalendarFooterComponent.prototype.onClickToday = /**
     * @return {?}
     */
    function () {
        this.clickToday.emit(this.now.clone()); // To prevent the "now" being modified from outside, we use clone
    };
    CalendarFooterComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'calendar-footer',
                    exportAs: 'calendarFooter',
                    template: "\n    <div class=\"{{ prefixCls }}-footer\">\n      <div *ngIf=\"extraFooter\" class=\"{{ prefixCls }}-footer-extra\">\n        <ng-container [ngSwitch]=\"true\">\n          <ng-container *ngSwitchCase=\"isTemplateRef(extraFooter)\">\n            <ng-container *ngTemplateOutlet=\"$any(extraFooter)\"></ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"isNonEmptyString(extraFooter)\">\n            <span [innerHTML]=\"extraFooter\"></span>\n          </ng-container>\n        </ng-container>\n      </div>\n      <a\n        *ngIf=\"showToday && !hasTimePicker\"\n        class=\"{{ prefixCls }}-today-btn {{ isTodayDisabled ? prefixCls + '-today-btn-disabled' : '' }}\"\n        role=\"button\"\n        (click)=\"isTodayDisabled ? null : onClickToday()\"\n        title=\"{{ todayTitle }}\"\n      >\n        {{ locale.today }}\n      </a>\n      <ul *ngIf=\"hasTimePicker || rangeQuickSelector\" class=\"{{ prefixCls }}-ranges\">\n        <ng-container *ngTemplateOutlet=\"rangeQuickSelector\"></ng-container>\n        <li *ngIf=\"hasTimePicker && !isRange\" class=\"{{ prefixCls }}-now\">\n          <a class=\"{{ prefixCls }}-now-btn\" (click)=\"isTodayDisabled ? null : onClickToday()\">\n            {{ locale.now }}\n          </a>\n        </li>\n        <li *ngIf=\"hasTimePicker\" class=\"{{ prefixCls }}-ok\">\n          <button\n            nz-button\n            type=\"button\"\n            nzType=\"primary\"\n            nzSize=\"small\"\n            [disabled]=\"okDisabled\"\n            (click)=\"okDisabled ? null : clickOk.emit()\"\n          >\n            {{ locale.ok }}\n          </button>\n        </li>\n      </ul>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    CalendarFooterComponent.ctorParameters = function () { return [
        { type: DateHelperService }
    ]; };
    CalendarFooterComponent.propDecorators = {
        locale: [{ type: Input }],
        showToday: [{ type: Input }],
        hasTimePicker: [{ type: Input }],
        isRange: [{ type: Input }],
        okDisabled: [{ type: Input }],
        disabledDate: [{ type: Input }],
        extraFooter: [{ type: Input }],
        rangeQuickSelector: [{ type: Input }],
        clickOk: [{ type: Output }],
        clickToday: [{ type: Output }]
    };
    return CalendarFooterComponent;
}());
export { CalendarFooterComponent };
if (false) {
    /** @type {?} */
    CalendarFooterComponent.prototype.locale;
    /** @type {?} */
    CalendarFooterComponent.prototype.showToday;
    /** @type {?} */
    CalendarFooterComponent.prototype.hasTimePicker;
    /** @type {?} */
    CalendarFooterComponent.prototype.isRange;
    /** @type {?} */
    CalendarFooterComponent.prototype.okDisabled;
    /** @type {?} */
    CalendarFooterComponent.prototype.disabledDate;
    /** @type {?} */
    CalendarFooterComponent.prototype.extraFooter;
    /** @type {?} */
    CalendarFooterComponent.prototype.rangeQuickSelector;
    /** @type {?} */
    CalendarFooterComponent.prototype.clickOk;
    /** @type {?} */
    CalendarFooterComponent.prototype.clickToday;
    /** @type {?} */
    CalendarFooterComponent.prototype.prefixCls;
    /** @type {?} */
    CalendarFooterComponent.prototype.isTemplateRef;
    /** @type {?} */
    CalendarFooterComponent.prototype.isNonEmptyString;
    /** @type {?} */
    CalendarFooterComponent.prototype.isTodayDisabled;
    /** @type {?} */
    CalendarFooterComponent.prototype.todayTitle;
    /**
     * @type {?}
     * @private
     */
    CalendarFooterComponent.prototype.now;
    /**
     * @type {?}
     * @private
     */
    CalendarFooterComponent.prototype.dateHelper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJjYWxlbmRhci1mb290ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBMkIsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUV0QztJQXVFRSxpQ0FBb0IsVUFBNkI7UUFBN0IsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFuQnhDLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0Isa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUV6QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBRzVCLHVCQUFrQixHQUFrQyxJQUFJLENBQUM7UUFFL0MsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDbkMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFFOUQsY0FBUyxHQUFXLFlBQVksQ0FBQztRQUNqQyxrQkFBYSxHQUFHLGFBQWEsQ0FBQztRQUM5QixxQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUNwQyxvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUNqQyxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ2hCLFFBQUcsR0FBYyxJQUFJLFNBQVMsRUFBRSxDQUFDO0lBRVcsQ0FBQzs7Ozs7SUFFckQsNkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7U0FDeEY7UUFDRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7OztnQkFFWixVQUFVLEdBQVcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDcEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUMzRTtJQUNILENBQUM7Ozs7SUFFRCw4Q0FBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxpRUFBaUU7SUFDM0csQ0FBQzs7Z0JBdEZGLFNBQVMsU0FBQztvQkFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O29CQUUvQyxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsK3BEQTBDVDtpQkFDRjs7OztnQkFyRFEsaUJBQWlCOzs7eUJBdUR2QixLQUFLOzRCQUNMLEtBQUs7Z0NBQ0wsS0FBSzswQkFDTCxLQUFLOzZCQUVMLEtBQUs7K0JBQ0wsS0FBSzs4QkFDTCxLQUFLO3FDQUNMLEtBQUs7MEJBRUwsTUFBTTs2QkFDTixNQUFNOztJQXlCVCw4QkFBQztDQUFBLEFBdkZELElBdUZDO1NBckNZLHVCQUF1Qjs7O0lBQ2xDLHlDQUEwQzs7SUFDMUMsNENBQW9DOztJQUNwQyxnREFBd0M7O0lBQ3hDLDBDQUFrQzs7SUFFbEMsNkNBQXFDOztJQUNyQywrQ0FBNkM7O0lBQzdDLDhDQUFrRDs7SUFDbEQscURBQWtFOztJQUVsRSwwQ0FBc0Q7O0lBQ3RELDZDQUE4RDs7SUFFOUQsNENBQWlDOztJQUNqQyxnREFBOEI7O0lBQzlCLG1EQUFvQzs7SUFDcEMsa0RBQWlDOztJQUNqQyw2Q0FBd0I7Ozs7O0lBQ3hCLHNDQUF5Qzs7Ozs7SUFFN0IsNkNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90aW1lJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IGlzTm9uRW1wdHlTdHJpbmcsIGlzVGVtcGxhdGVSZWYgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSwgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgdHJhbnNDb21wYXRGb3JtYXQgfSBmcm9tICcuL2xpYi91dGlsJztcbmltcG9ydCB7IFBSRUZJWF9DTEFTUyB9IGZyb20gJy4vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2NhbGVuZGFyLWZvb3RlcicsXG4gIGV4cG9ydEFzOiAnY2FsZW5kYXJGb290ZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tZm9vdGVyXCI+XG4gICAgICA8ZGl2ICpuZ0lmPVwiZXh0cmFGb290ZXJcIiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1mb290ZXItZXh0cmFcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwidHJ1ZVwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzVGVtcGxhdGVSZWYoZXh0cmFGb290ZXIpXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiJGFueShleHRyYUZvb3RlcilcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc05vbkVtcHR5U3RyaW5nKGV4dHJhRm9vdGVyKVwiPlxuICAgICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJleHRyYUZvb3RlclwiPjwvc3Bhbj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxhXG4gICAgICAgICpuZ0lmPVwic2hvd1RvZGF5ICYmICFoYXNUaW1lUGlja2VyXCJcbiAgICAgICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tdG9kYXktYnRuIHt7IGlzVG9kYXlEaXNhYmxlZCA/IHByZWZpeENscyArICctdG9kYXktYnRuLWRpc2FibGVkJyA6ICcnIH19XCJcbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgIChjbGljayk9XCJpc1RvZGF5RGlzYWJsZWQgPyBudWxsIDogb25DbGlja1RvZGF5KClcIlxuICAgICAgICB0aXRsZT1cInt7IHRvZGF5VGl0bGUgfX1cIlxuICAgICAgPlxuICAgICAgICB7eyBsb2NhbGUudG9kYXkgfX1cbiAgICAgIDwvYT5cbiAgICAgIDx1bCAqbmdJZj1cImhhc1RpbWVQaWNrZXIgfHwgcmFuZ2VRdWlja1NlbGVjdG9yXCIgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tcmFuZ2VzXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJyYW5nZVF1aWNrU2VsZWN0b3JcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPGxpICpuZ0lmPVwiaGFzVGltZVBpY2tlciAmJiAhaXNSYW5nZVwiIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LW5vd1wiPlxuICAgICAgICAgIDxhIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LW5vdy1idG5cIiAoY2xpY2spPVwiaXNUb2RheURpc2FibGVkID8gbnVsbCA6IG9uQ2xpY2tUb2RheSgpXCI+XG4gICAgICAgICAgICB7eyBsb2NhbGUubm93IH19XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgKm5nSWY9XCJoYXNUaW1lUGlja2VyXCIgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tb2tcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBuei1idXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgbnpUeXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBuelNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwib2tEaXNhYmxlZFwiXG4gICAgICAgICAgICAoY2xpY2spPVwib2tEaXNhYmxlZCA/IG51bGwgOiBjbGlja09rLmVtaXQoKVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgbG9jYWxlLm9rIH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbG9jYWxlITogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XG4gIEBJbnB1dCgpIHNob3dUb2RheTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBoYXNUaW1lUGlja2VyOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzUmFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSBva0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZT86IChkOiBEYXRlKSA9PiBib29sZWFuO1xuICBASW5wdXQoKSBleHRyYUZvb3Rlcj86IFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nO1xuICBASW5wdXQoKSByYW5nZVF1aWNrU2VsZWN0b3I6IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xpY2tPayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsaWNrVG9kYXkgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcblxuICBwcmVmaXhDbHM6IHN0cmluZyA9IFBSRUZJWF9DTEFTUztcbiAgaXNUZW1wbGF0ZVJlZiA9IGlzVGVtcGxhdGVSZWY7XG4gIGlzTm9uRW1wdHlTdHJpbmcgPSBpc05vbkVtcHR5U3RyaW5nO1xuICBpc1RvZGF5RGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgdG9kYXlUaXRsZTogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgbm93OiBDYW5keURhdGUgPSBuZXcgQ2FuZHlEYXRlKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuZGlzYWJsZWREYXRlKSB7XG4gICAgICB0aGlzLmlzVG9kYXlEaXNhYmxlZCA9ICEhKHRoaXMuZGlzYWJsZWREYXRlICYmIHRoaXMuZGlzYWJsZWREYXRlKHRoaXMubm93Lm5hdGl2ZURhdGUpKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubG9jYWxlKSB7XG4gICAgICAvLyBOT1RFOiBDb21wYXQgZm9yIERhdGVQaXBlIGZvcm1hdHRpbmcgcnVsZXNcbiAgICAgIGNvbnN0IGRhdGVGb3JtYXQ6IHN0cmluZyA9IHRyYW5zQ29tcGF0Rm9ybWF0KHRoaXMubG9jYWxlLmRhdGVGb3JtYXQpO1xuICAgICAgdGhpcy50b2RheVRpdGxlID0gdGhpcy5kYXRlSGVscGVyLmZvcm1hdCh0aGlzLm5vdy5uYXRpdmVEYXRlLCBkYXRlRm9ybWF0KTtcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrVG9kYXkoKTogdm9pZCB7XG4gICAgdGhpcy5jbGlja1RvZGF5LmVtaXQodGhpcy5ub3cuY2xvbmUoKSk7IC8vIFRvIHByZXZlbnQgdGhlIFwibm93XCIgYmVpbmcgbW9kaWZpZWQgZnJvbSBvdXRzaWRlLCB3ZSB1c2UgY2xvbmVcbiAgfVxufVxuIl19