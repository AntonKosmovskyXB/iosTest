/**
 * @fileoverview added by tsickle
 * Generated from: calendar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, forwardRef, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CandyDate } from 'ng-zorro-antd/core/time';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { NzDateCellDirective as DateCell, NzDateFullCellDirective as DateFullCell, NzMonthCellDirective as MonthCell, NzMonthFullCellDirective as MonthFullCell } from './calendar-cells';
export class NzCalendarComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.activeDate = new CandyDate();
        this.prefixCls = 'ant-picker-calendar';
        this.onChangeFn = (/**
         * @return {?}
         */
        () => { });
        this.onTouchFn = (/**
         * @return {?}
         */
        () => { });
        this.nzMode = 'month';
        this.nzModeChange = new EventEmitter();
        this.nzPanelChange = new EventEmitter();
        this.nzSelectChange = new EventEmitter();
        this.nzValueChange = new EventEmitter();
        this.nzFullscreen = true;
    }
    /**
     * @return {?}
     */
    get dateCell() {
        return (/** @type {?} */ ((this.nzDateCell || this.nzDateCellChild)));
    }
    /**
     * @return {?}
     */
    get dateFullCell() {
        return (/** @type {?} */ ((this.nzDateFullCell || this.nzDateFullCellChild)));
    }
    /**
     * @return {?}
     */
    get monthCell() {
        return (/** @type {?} */ ((this.nzMonthCell || this.nzMonthCellChild)));
    }
    /**
     * @return {?}
     */
    get monthFullCell() {
        return (/** @type {?} */ ((this.nzMonthFullCell || this.nzMonthFullCellChild)));
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    onModeChange(mode) {
        this.nzModeChange.emit(mode);
        this.nzPanelChange.emit({ date: this.activeDate.nativeDate, mode });
    }
    /**
     * @param {?} year
     * @return {?}
     */
    onYearSelect(year) {
        /** @type {?} */
        const date = this.activeDate.setYear(year);
        this.updateDate(date);
    }
    /**
     * @param {?} month
     * @return {?}
     */
    onMonthSelect(month) {
        /** @type {?} */
        const date = this.activeDate.setMonth(month);
        this.updateDate(date);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    onDateSelect(date) {
        // Only activeDate is enough in calendar
        // this.value = date;
        this.updateDate(date);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.updateDate(new CandyDate((/** @type {?} */ (value))), false);
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchFn = fn;
    }
    /**
     * @private
     * @param {?} date
     * @param {?=} touched
     * @return {?}
     */
    updateDate(date, touched = true) {
        this.activeDate = date;
        if (touched) {
            this.onChangeFn(date.nativeDate);
            this.onTouchFn();
            this.nzSelectChange.emit(date.nativeDate);
            this.nzValueChange.emit(date.nativeDate);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzValue) {
            this.updateDate(new CandyDate(this.nzValue), false);
        }
    }
}
NzCalendarComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-calendar',
                exportAs: 'nzCalendar',
                template: `
    <nz-calendar-header
      [fullscreen]="nzFullscreen"
      [activeDate]="activeDate"
      [(mode)]="nzMode"
      (modeChange)="onModeChange($event)"
      (yearChange)="onYearSelect($event)"
      (monthChange)="onMonthSelect($event)"
    >
    </nz-calendar-header>

    <div class="ant-picker-panel">
      <div class="ant-picker-{{ nzMode === 'month' ? 'date' : 'month' }}-panel">
        <div class="ant-picker-body">
          <ng-container *ngIf="nzMode === 'month'; then monthModeTable; else yearModeTable"></ng-container>
        </div>
      </div>
    </div>
    <ng-template #monthModeTable>
      <!--  TODO(@wenqi73) [cellRender] [fullCellRender] -->
      <date-table
        [prefixCls]="prefixCls"
        [value]="activeDate"
        [activeDate]="activeDate"
        [cellRender]="$any(dateCell)"
        [fullCellRender]="$any(dateFullCell)"
        [disabledDate]="nzDisabledDate"
        (valueChange)="onDateSelect($event)"
      ></date-table>
    </ng-template>

    <!--  TODO(@wenqi73) [cellRender] [fullCellRender] -->
    <ng-template #yearModeTable>
      <month-table
        [prefixCls]="prefixCls"
        [value]="activeDate"
        [activeDate]="activeDate"
        [cellRender]="$any(monthCell)"
        [fullCellRender]="$any(monthFullCell)"
        (valueChange)="onDateSelect($event)"
      ></month-table>
    </ng-template>
  `,
                host: {
                    '[class.ant-picker-calendar]': 'true',
                    '[class.ant-picker-calendar-full]': 'nzFullscreen',
                    '[class.ant-picker-calendar-mini]': '!nzFullscreen'
                },
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => NzCalendarComponent)), multi: true }]
            }] }
];
/** @nocollapse */
NzCalendarComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NzCalendarComponent.propDecorators = {
    nzMode: [{ type: Input }],
    nzValue: [{ type: Input }],
    nzDisabledDate: [{ type: Input }],
    nzModeChange: [{ type: Output }],
    nzPanelChange: [{ type: Output }],
    nzSelectChange: [{ type: Output }],
    nzValueChange: [{ type: Output }],
    nzDateCell: [{ type: Input }],
    nzDateCellChild: [{ type: ContentChild, args: [DateCell, { static: false, read: TemplateRef },] }],
    nzDateFullCell: [{ type: Input }],
    nzDateFullCellChild: [{ type: ContentChild, args: [DateFullCell, { static: false, read: TemplateRef },] }],
    nzMonthCell: [{ type: Input }],
    nzMonthCellChild: [{ type: ContentChild, args: [MonthCell, { static: false, read: TemplateRef },] }],
    nzMonthFullCell: [{ type: Input }],
    nzMonthFullCellChild: [{ type: ContentChild, args: [MonthFullCell, { static: false, read: TemplateRef },] }],
    nzFullscreen: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzCalendarComponent.prototype, "nzFullscreen", void 0);
if (false) {
    /** @type {?} */
    NzCalendarComponent.ngAcceptInputType_nzFullscreen;
    /** @type {?} */
    NzCalendarComponent.prototype.activeDate;
    /** @type {?} */
    NzCalendarComponent.prototype.prefixCls;
    /**
     * @type {?}
     * @private
     */
    NzCalendarComponent.prototype.onChangeFn;
    /**
     * @type {?}
     * @private
     */
    NzCalendarComponent.prototype.onTouchFn;
    /** @type {?} */
    NzCalendarComponent.prototype.nzMode;
    /** @type {?} */
    NzCalendarComponent.prototype.nzValue;
    /** @type {?} */
    NzCalendarComponent.prototype.nzDisabledDate;
    /** @type {?} */
    NzCalendarComponent.prototype.nzModeChange;
    /** @type {?} */
    NzCalendarComponent.prototype.nzPanelChange;
    /** @type {?} */
    NzCalendarComponent.prototype.nzSelectChange;
    /** @type {?} */
    NzCalendarComponent.prototype.nzValueChange;
    /**
     * Cannot use \@Input and \@ContentChild on one variable
     * because { static: false } will make \@Input property get delayed
     *
     * @type {?}
     */
    NzCalendarComponent.prototype.nzDateCell;
    /** @type {?} */
    NzCalendarComponent.prototype.nzDateCellChild;
    /** @type {?} */
    NzCalendarComponent.prototype.nzDateFullCell;
    /** @type {?} */
    NzCalendarComponent.prototype.nzDateFullCellChild;
    /** @type {?} */
    NzCalendarComponent.prototype.nzMonthCell;
    /** @type {?} */
    NzCalendarComponent.prototype.nzMonthCellChild;
    /** @type {?} */
    NzCalendarComponent.prototype.nzMonthFullCell;
    /** @type {?} */
    NzCalendarComponent.prototype.nzMonthFullCellChild;
    /** @type {?} */
    NzCalendarComponent.prototype.nzFullscreen;
    /**
     * @type {?}
     * @private
     */
    NzCalendarComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYWxlbmRhci8iLCJzb3VyY2VzIjpbImNhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFFTCxNQUFNLEVBRU4sV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXBELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQ0wsbUJBQW1CLElBQUksUUFBUSxFQUMvQix1QkFBdUIsSUFBSSxZQUFZLEVBQ3ZDLG9CQUFvQixJQUFJLFNBQVMsRUFDakMsd0JBQXdCLElBQUksYUFBYSxFQUMxQyxNQUFNLGtCQUFrQixDQUFDO0FBNEQxQixNQUFNLE9BQU8sbUJBQW1COzs7O0lBZ0Q5QixZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQTdDMUMsZUFBVSxHQUFjLElBQUksU0FBUyxFQUFFLENBQUM7UUFDeEMsY0FBUyxHQUFXLHFCQUFxQixDQUFDO1FBRWxDLGVBQVU7OztRQUF5QixHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQUM7UUFDNUMsY0FBUzs7O1FBQWUsR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUFDO1FBRWhDLFdBQU0sR0FBbUIsT0FBTyxDQUFDO1FBSXZCLGlCQUFZLEdBQWlDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEUsa0JBQWEsR0FBdUQsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2RixtQkFBYyxHQUF1QixJ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QW1CO0lBQWYsWUFBWSxFQUFFOzt5REFBOEI7OztJQTdDdEQsbURBQW9EOztJQUVwRCx5Q0FBd0M7O0lBQ3hDLHdDQUEwQzs7Ozs7SUFFMUMseUNBQW9EOzs7OztJQUNwRCx3Q0FBeUM7O0lBRXpDLHFDQUEwQzs7SUFDMUMsc0NBQXdCOztJQUN4Qiw2Q0FBa0Q7O0lBRWxELDJDQUFtRjs7SUFDbkYsNENBQTBHOztJQUMxRyw2Q0FBMkU7O0lBQzNFLDRDQUEwRTs7Ozs7OztJQU0xRSx5Q0FBNkM7O0lBQzdDLDhDQUF1Rzs7SUFLdkcsNkNBQWlEOztJQUNqRCxrREFBK0c7O0lBSy9HLDBDQUE4Qzs7SUFDOUMsK0NBQXlHOztJQUt6Ryw4Q0FBa0Q7O0lBQ2xELG1EQUFpSDs7SUFLakgsMkNBQXNEOzs7OztJQUUxQyxrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdGltZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHtcbiAgTnpEYXRlQ2VsbERpcmVjdGl2ZSBhcyBEYXRlQ2VsbCxcbiAgTnpEYXRlRnVsbENlbGxEaXJlY3RpdmUgYXMgRGF0ZUZ1bGxDZWxsLFxuICBOek1vbnRoQ2VsbERpcmVjdGl2ZSBhcyBNb250aENlbGwsXG4gIE56TW9udGhGdWxsQ2VsbERpcmVjdGl2ZSBhcyBNb250aEZ1bGxDZWxsXG59IGZyb20gJy4vY2FsZW5kYXItY2VsbHMnO1xuXG5leHBvcnQgdHlwZSBOekNhbGVuZGFyTW9kZSA9ICdtb250aCcgfCAneWVhcic7XG50eXBlIE56Q2FsZW5kYXJEYXRlVGVtcGxhdGUgPSBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRGF0ZSB9PjtcblxuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzZWxlY3RvcjogJ256LWNhbGVuZGFyJyxcbiAgZXhwb3J0QXM6ICduekNhbGVuZGFyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bnotY2FsZW5kYXItaGVhZGVyXG4gICAgICBbZnVsbHNjcmVlbl09XCJuekZ1bGxzY3JlZW5cIlxuICAgICAgW2FjdGl2ZURhdGVdPVwiYWN0aXZlRGF0ZVwiXG4gICAgICBbKG1vZGUpXT1cIm56TW9kZVwiXG4gICAgICAobW9kZUNoYW5nZSk9XCJvbk1vZGVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAoeWVhckNoYW5nZSk9XCJvblllYXJTZWxlY3QoJGV2ZW50KVwiXG4gICAgICAobW9udGhDaGFuZ2UpPVwib25Nb250aFNlbGVjdCgkZXZlbnQpXCJcbiAgICA+XG4gICAgPC9uei1jYWxlbmRhci1oZWFkZXI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiYW50LXBpY2tlci1wYW5lbFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImFudC1waWNrZXIte3sgbnpNb2RlID09PSAnbW9udGgnID8gJ2RhdGUnIDogJ21vbnRoJyB9fS1wYW5lbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXBpY2tlci1ib2R5XCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56TW9kZSA9PT0gJ21vbnRoJzsgdGhlbiBtb250aE1vZGVUYWJsZTsgZWxzZSB5ZWFyTW9kZVRhYmxlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPG5nLXRlbXBsYXRlICNtb250aE1vZGVUYWJsZT5cbiAgICAgIDwhLS0gIFRPRE8oQHdlbnFpNzMpIFtjZWxsUmVuZGVyXSBbZnVsbENlbGxSZW5kZXJdIC0tPlxuICAgICAgPGRhdGUtdGFibGVcbiAgICAgICAgW3ByZWZpeENsc109XCJwcmVmaXhDbHNcIlxuICAgICAgICBbdmFsdWVdPVwiYWN0aXZlRGF0ZVwiXG4gICAgICAgIFthY3RpdmVEYXRlXT1cImFjdGl2ZURhdGVcIlxuICAgICAgICBbY2VsbFJlbmRlcl09XCIkYW55KGRhdGVDZWxsKVwiXG4gICAgICAgIFtmdWxsQ2VsbFJlbmRlcl09XCIkYW55KGRhdGVGdWxsQ2VsbClcIlxuICAgICAgICBbZGlzYWJsZWREYXRlXT1cIm56RGlzYWJsZWREYXRlXCJcbiAgICAgICAgKHZhbHVlQ2hhbmdlKT1cIm9uRGF0ZVNlbGVjdCgkZXZlbnQpXCJcbiAgICAgID48L2RhdGUtdGFibGU+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDwhLS0gIFRPRE8oQHdlbnFpNzMpIFtjZWxsUmVuZGVyXSBbZnVsbENlbGxSZW5kZXJdIC0tPlxuICAgIDxuZy10ZW1wbGF0ZSAjeWVhck1vZGVUYWJsZT5cbiAgICAgIDxtb250aC10YWJsZVxuICAgICAgICBbcHJlZml4Q2xzXT1cInByZWZpeENsc1wiXG4gICAgICAgIFt2YWx1ZV09XCJhY3RpdmVEYXRlXCJcbiAgICAgICAgW2FjdGl2ZURhdGVdPVwiYWN0aXZlRGF0ZVwiXG4gICAgICAgIFtjZWxsUmVuZGVyXT1cIiRhbnkobW9udGhDZWxsKVwiXG4gICAgICAgIFtmdWxsQ2VsbFJlbmRlcl09XCIkYW55KG1vbnRoRnVsbENlbGwpXCJcbiAgICAgICAgKHZhbHVlQ2hhbmdlKT1cIm9uRGF0ZVNlbGVjdCgkZXZlbnQpXCJcbiAgICAgID48L21vbnRoLXRhYmxlPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1waWNrZXItY2FsZW5kYXJdJzogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LXBpY2tlci1jYWxlbmRhci1mdWxsXSc6ICduekZ1bGxzY3JlZW4nLFxuICAgICdbY2xhc3MuYW50LXBpY2tlci1jYWxlbmRhci1taW5pXSc6ICchbnpGdWxsc2NyZWVuJ1xuICB9LFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOekNhbGVuZGFyQ29tcG9uZW50KSwgbXVsdGk6IHRydWUgfV1cbn0pXG5leHBvcnQgY2xhc3MgTnpDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXMge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpGdWxsc2NyZWVuOiBCb29sZWFuSW5wdXQ7XG5cbiAgYWN0aXZlRGF0ZTogQ2FuZHlEYXRlID0gbmV3IENhbmR5RGF0ZSgpO1xuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtcGlja2VyLWNhbGVuZGFyJztcblxuICBwcml2YXRlIG9uQ2hhbmdlRm46IChkYXRlOiBEYXRlKSA9PiB2b2lkID0gKCkgPT4ge307XG4gIHByaXZhdGUgb25Ub3VjaEZuOiAoKSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgQElucHV0KCkgbnpNb2RlOiBOekNhbGVuZGFyTW9kZSA9ICdtb250aCc7XG4gIEBJbnB1dCgpIG56VmFsdWU/OiBEYXRlO1xuICBASW5wdXQoKSBuekRpc2FibGVkRGF0ZT86IChkYXRlOiBEYXRlKSA9PiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek1vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxOekNhbGVuZGFyTW9kZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelBhbmVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBkYXRlOiBEYXRlOyBtb2RlOiBOekNhbGVuZGFyTW9kZSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VsZWN0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIENhbm5vdCB1c2UgQElucHV0IGFuZCBAQ29udGVudENoaWxkIG9uIG9uZSB2YXJpYWJsZVxuICAgKiBiZWNhdXNlIHsgc3RhdGljOiBmYWxzZSB9IHdpbGwgbWFrZSBASW5wdXQgcHJvcGVydHkgZ2V0IGRlbGF5ZWRcbiAgICoqL1xuICBASW5wdXQoKSBuekRhdGVDZWxsPzogTnpDYWxlbmRhckRhdGVUZW1wbGF0ZTtcbiAgQENvbnRlbnRDaGlsZChEYXRlQ2VsbCwgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBUZW1wbGF0ZVJlZiB9KSBuekRhdGVDZWxsQ2hpbGQ/OiBOekNhbGVuZGFyRGF0ZVRlbXBsYXRlO1xuICBnZXQgZGF0ZUNlbGwoKTogTnpDYWxlbmRhckRhdGVUZW1wbGF0ZSB7XG4gICAgcmV0dXJuICh0aGlzLm56RGF0ZUNlbGwgfHwgdGhpcy5uekRhdGVDZWxsQ2hpbGQpITtcbiAgfVxuXG4gIEBJbnB1dCgpIG56RGF0ZUZ1bGxDZWxsPzogTnpDYWxlbmRhckRhdGVUZW1wbGF0ZTtcbiAgQENvbnRlbnRDaGlsZChEYXRlRnVsbENlbGwsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogVGVtcGxhdGVSZWYgfSkgbnpEYXRlRnVsbENlbGxDaGlsZD86IE56Q2FsZW5kYXJEYXRlVGVtcGxhdGU7XG4gIGdldCBkYXRlRnVsbENlbGwoKTogTnpDYWxlbmRhckRhdGVUZW1wbGF0ZSB7XG4gICAgcmV0dXJuICh0aGlzLm56RGF0ZUZ1bGxDZWxsIHx8IHRoaXMubnpEYXRlRnVsbENlbGxDaGlsZCkhO1xuICB9XG5cbiAgQElucHV0KCkgbnpNb250aENlbGw/OiBOekNhbGVuZGFyRGF0ZVRlbXBsYXRlO1xuICBAQ29udGVudENoaWxkKE1vbnRoQ2VsbCwgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBUZW1wbGF0ZVJlZiB9KSBuek1vbnRoQ2VsbENoaWxkPzogTnpDYWxlbmRhckRhdGVUZW1wbGF0ZTtcbiAgZ2V0IG1vbnRoQ2VsbCgpOiBOekNhbGVuZGFyRGF0ZVRlbXBsYXRlIHtcbiAgICByZXR1cm4gKHRoaXMubnpNb250aENlbGwgfHwgdGhpcy5uek1vbnRoQ2VsbENoaWxkKSE7XG4gIH1cblxuICBASW5wdXQoKSBuek1vbnRoRnVsbENlbGw/OiBOekNhbGVuZGFyRGF0ZVRlbXBsYXRlO1xuICBAQ29udGVudENoaWxkKE1vbnRoRnVsbENlbGwsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogVGVtcGxhdGVSZWYgfSkgbnpNb250aEZ1bGxDZWxsQ2hpbGQ/OiBOekNhbGVuZGFyRGF0ZVRlbXBsYXRlO1xuICBnZXQgbW9udGhGdWxsQ2VsbCgpOiBOekNhbGVuZGFyRGF0ZVRlbXBsYXRlIHtcbiAgICByZXR1cm4gKHRoaXMubnpNb250aEZ1bGxDZWxsIHx8IHRoaXMubnpNb250aEZ1bGxDZWxsQ2hpbGQpITtcbiAgfVxuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekZ1bGxzY3JlZW46IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBvbk1vZGVDaGFuZ2UobW9kZTogTnpDYWxlbmRhck1vZGUpOiB2b2lkIHtcbiAgICB0aGlzLm56TW9kZUNoYW5nZS5lbWl0KG1vZGUpO1xuICAgIHRoaXMubnpQYW5lbENoYW5nZS5lbWl0KHsgZGF0ZTogdGhpcy5hY3RpdmVEYXRlLm5hdGl2ZURhdGUsIG1vZGUgfSk7XG4gIH1cblxuICBvblllYXJTZWxlY3QoeWVhcjogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuYWN0aXZlRGF0ZS5zZXRZZWFyKHllYXIpO1xuICAgIHRoaXMudXBkYXRlRGF0ZShkYXRlKTtcbiAgfVxuXG4gIG9uTW9udGhTZWxlY3QobW9udGg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmFjdGl2ZURhdGUuc2V0TW9udGgobW9udGgpO1xuICAgIHRoaXMudXBkYXRlRGF0ZShkYXRlKTtcbiAgfVxuXG4gIG9uRGF0ZVNlbGVjdChkYXRlOiBDYW5keURhdGUpOiB2b2lkIHtcbiAgICAvLyBPbmx5IGFjdGl2ZURhdGUgaXMgZW5vdWdoIGluIGNhbGVuZGFyXG4gICAgLy8gdGhpcy52YWx1ZSA9IGRhdGU7XG4gICAgdGhpcy51cGRhdGVEYXRlKGRhdGUpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZURhdGUobmV3IENhbmR5RGF0ZSh2YWx1ZSBhcyBEYXRlKSwgZmFsc2UpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKGRhdGU6IERhdGUpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlRm4gPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoRm4gPSBmbjtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlRGF0ZShkYXRlOiBDYW5keURhdGUsIHRvdWNoZWQ6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVEYXRlID0gZGF0ZTtcblxuICAgIGlmICh0b3VjaGVkKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlRm4oZGF0ZS5uYXRpdmVEYXRlKTtcbiAgICAgIHRoaXMub25Ub3VjaEZuKCk7XG4gICAgICB0aGlzLm56U2VsZWN0Q2hhbmdlLmVtaXQoZGF0ZS5uYXRpdmVEYXRlKTtcbiAgICAgIHRoaXMubnpWYWx1ZUNoYW5nZS5lbWl0KGRhdGUubmF0aXZlRGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56VmFsdWUpIHtcbiAgICAgIHRoaXMudXBkYXRlRGF0ZShuZXcgQ2FuZHlEYXRlKHRoaXMubnpWYWx1ZSksIGZhbHNlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==