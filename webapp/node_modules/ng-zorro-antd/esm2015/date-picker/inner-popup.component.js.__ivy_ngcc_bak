/**
 * @fileoverview added by tsickle
 * Generated from: inner-popup.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core/time';
import { PREFIX_CLASS } from './util';
export class InnerPopupComponent {
    constructor() {
        this.panelModeChange = new EventEmitter();
        // TODO: name is not proper
        this.headerChange = new EventEmitter(); // Emitted when user changed the header's value
        // Emitted when user changed the header's value
        this.selectDate = new EventEmitter(); // Emitted when the date is selected by click the date panel
        // Emitted when the date is selected by click the date panel
        this.selectTime = new EventEmitter();
        this.dayHover = new EventEmitter(); // Emitted when hover on a day by mouse enter
        // Emitted when hover on a day by mouse enter
        this.prefixCls = PREFIX_CLASS;
    }
    /**
     * Hide "next" arrow in left panel,
     * hide "prev" arrow in right panel
     * @param {?} direction
     * @param {?} panelMode
     * @return {?}
     */
    enablePrevNext(direction, panelMode) {
        if (!this.showTimePicker &&
            panelMode === this.endPanelMode &&
            ((this.partType === 'left' && direction === 'next') || (this.partType === 'right' && direction === 'prev'))) {
            return false;
        }
        return true;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    onSelectTime(date) {
        this.selectTime.emit(new CandyDate(date));
    }
    // The value real changed to outside
    /**
     * @param {?} date
     * @return {?}
     */
    onSelectDate(date) {
        /** @type {?} */
        const value = date instanceof CandyDate ? date : new CandyDate(date);
        /** @type {?} */
        const timeValue = this.timeOptions && this.timeOptions.nzDefaultOpenValue;
        // Display timeValue when value is null
        if (!this.value && timeValue) {
            value.setHms(timeValue.getHours(), timeValue.getMinutes(), timeValue.getSeconds());
        }
        this.selectDate.emit(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onChooseMonth(value) {
        this.activeDate = this.activeDate.setMonth(value.getMonth());
        if (this.endPanelMode === 'month') {
            this.value = value;
            this.selectDate.emit(value);
        }
        else {
            this.headerChange.emit(value);
            this.panelModeChange.emit(this.endPanelMode);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onChooseYear(value) {
        this.activeDate = this.activeDate.setYear(value.getYear());
        if (this.endPanelMode === 'year') {
            this.value = value;
            this.selectDate.emit(value);
        }
        else {
            this.headerChange.emit(value);
            this.panelModeChange.emit(this.endPanelMode);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onChooseDecade(value) {
        this.activeDate = this.activeDate.setYear(value.getYear());
        if (this.endPanelMode === 'decade') {
            this.value = value;
            this.selectDate.emit(value);
        }
        else {
            this.headerChange.emit(value);
            this.panelModeChange.emit('year');
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.activeDate && !changes.activeDate.currentValue) {
            this.activeDate = new CandyDate();
        }
        // New Antd vesion has merged 'date' ant 'time' to one panel,
        // So there is not 'time' panel
        if (changes.panelMode && changes.panelMode.currentValue === 'time') {
            this.panelMode = 'date';
        }
    }
}
InnerPopupComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'inner-popup',
                exportAs: 'innerPopup',
                template: `
    <div [class.ant-picker-datetime-panel]="showTimePicker">
      <div class="{{ prefixCls }}-{{ panelMode }}-panel">
        <ng-container [ngSwitch]="panelMode">
          <ng-container *ngSwitchCase="'decade'">
            <decade-header
              [(value)]="activeDate"
              [locale]="locale!"
              [showSuperPreBtn]="enablePrevNext('prev', 'decade')"
              [showSuperNextBtn]="enablePrevNext('next', 'decade')"
              [showNextBtn]="false"
              [showPreBtn]="false"
              (panelModeChange)="panelModeChange.emit($event)"
              (valueChange)="headerChange.emit($event)"
            >
            </decade-header>
            <div class="{{ prefixCls }}-body">
              <decade-table
                [showWeek]="showWeek"
                [activeDate]="activeDate"
                [value]="value"
                (valueChange)="onChooseDecade($event)"
                [disabledDate]="disabledDate"
              ></decade-table>
            </div>
          </ng-container>
          <ng-container *ngSwitchCase="'year'">
            <year-header
              [(value)]="activeDate"
              [locale]="locale!"
              [showSuperPreBtn]="enablePrevNext('prev', 'year')"
              [showSuperNextBtn]="enablePrevNext('next', 'year')"
              [showNextBtn]="false"
              [showPreBtn]="false"
              (panelModeChange)="panelModeChange.emit($event)"
              (valueChange)="headerChange.emit($event)"
            >
            </year-header>
            <div class="{{ prefixCls }}-body">
              <year-table
                [showWeek]="showWeek"
                [activeDate]="activeDate"
                [value]="value"
                (valueChange)="onChooseYear($event)"
                [disabledDate]="disabledDate"
              ></year-table>
            </div>
          </ng-container>
          <ng-container *ngSwitchCase="'month'">
            <month-header
              [(value)]="activeDate"
              [locale]="locale!"
              [showNextBtn]="false"
              [showPreBtn]="false"
              (panelModeChange)="panelModeChange.emit($event)"
              (valueChange)="headerChange.emit($event)"
            >
            </month-header>
            <div class="{{ prefixCls }}-body">
              <month-table
                [showWeek]="showWeek"
                [value]="value"
                [activeDate]="activeDate"
                [disabledDate]="disabledDate"
                (valueChange)="onChooseMonth($event)"
              ></month-table>
            </div>
          </ng-container>

          <ng-container *ngSwitchDefault>
            <date-header
              [(value)]="activeDate"
              [locale]="locale!"
              [showSuperPreBtn]="enablePrevNext('prev', 'date')"
              [showSuperNextBtn]="enablePrevNext('next', 'date')"
              [showPreBtn]="enablePrevNext('prev', 'date')"
              [showNextBtn]="enablePrevNext('next', 'date')"
              (panelModeChange)="panelModeChange.emit($event)"
              (valueChange)="headerChange.emit($event)"
            >
            </date-header>
            <div class="{{ prefixCls }}-body">
              <date-table
                [locale]="locale!"
                [showWeek]="showWeek"
                [value]="value"
                [activeDate]="activeDate"
                (valueChange)="onSelectDate($event)"
                [disabledDate]="disabledDate"
                [cellRender]="dateRender"
                [selectedValue]="selectedValue"
                [hoverValue]="hoverValue"
                (dayHover)="dayHover.emit($event)"
              ></date-table>
            </div>
          </ng-container>
        </ng-container>
      </div>
      <ng-container *ngIf="showTimePicker && timeOptions">
        <nz-time-picker-panel
          [nzInDatePicker]="true"
          [ngModel]="value?.nativeDate"
          (ngModelChange)="onSelectTime($event)"
          [format]="$any(timeOptions.nzFormat)"
          [nzHourStep]="$any(timeOptions.nzHourStep)"
          [nzMinuteStep]="$any(timeOptions.nzMinuteStep)"
          [nzSecondStep]="$any(timeOptions.nzSecondStep)"
          [nzDisabledHours]="$any(timeOptions.nzDisabledHours)"
          [nzDisabledMinutes]="$any(timeOptions.nzDisabledMinutes)"
          [nzDisabledSeconds]="$any(timeOptions.nzDisabledSeconds)"
          [nzHideDisabledOptions]="!!timeOptions.nzHideDisabledOptions"
          [nzDefaultOpenValue]="$any(timeOptions.nzDefaultOpenValue)"
          [nzUse12Hours]="!!timeOptions.nzUse12Hours"
          [nzAddOn]="$any(timeOptions.nzAddOn)"
        ></nz-time-picker-panel>
        <!-- use [opened] to trigger time panel \`initPosition()\` -->
      </ng-container>
    </div>
  `
            }] }
];
InnerPopupComponent.propDecorators = {
    activeDate: [{ type: Input }],
    endPanelMode: [{ type: Input }],
    panelMode: [{ type: Input }],
    showWeek: [{ type: Input }],
    locale: [{ type: Input }],
    showTimePicker: [{ type: Input }],
    timeOptions: [{ type: Input }],
    disabledDate: [{ type: Input }],
    dateRender: [{ type: Input }],
    selectedValue: [{ type: Input }],
    hoverValue: [{ type: Input }],
    value: [{ type: Input }],
    partType: [{ type: Input }],
    panelModeChange: [{ type: Output }],
    headerChange: [{ type: Output }],
    selectDate: [{ type: Output }],
    selectTime: [{ type: Output }],
    dayHover: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    InnerPopupComponent.prototype.activeDate;
    /** @type {?} */
    InnerPopupComponent.prototype.endPanelMode;
    /** @type {?} */
    InnerPopupComponent.prototype.panelMode;
    /** @type {?} */
    InnerPopupComponent.prototype.showWeek;
    /** @type {?} */
    InnerPopupComponent.prototype.locale;
    /** @type {?} */
    InnerPopupComponent.prototype.showTimePicker;
    /** @type {?} */
    InnerPopupComponent.prototype.timeOptions;
    /** @type {?} */
    InnerPopupComponent.prototype.disabledDate;
    /** @type {?} */
    InnerPopupComponent.prototype.dateRender;
    /** @type {?} */
    InnerPopupComponent.prototype.selectedValue;
    /** @type {?} */
    InnerPopupComponent.prototype.hoverValue;
    /** @type {?} */
    InnerPopupComponent.prototype.value;
    /** @type {?} */
    InnerPopupComponent.prototype.partType;
    /** @type {?} */
    InnerPopupComponent.prototype.panelModeChange;
    /** @type {?} */
    InnerPopupComponent.prototype.headerChange;
    /** @type {?} */
    InnerPopupComponent.prototype.selectDate;
    /** @type {?} */
    InnerPopupComponent.prototype.selectTime;
    /** @type {?} */
    InnerPopupComponent.prototype.dayHover;
    /** @type {?} */
    InnerPopupComponent.prototype.prefixCls;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItcG9wdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImlubmVyLXBvcHVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFHTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBSXBELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFnSXRDLE1BQU0sT0FBTyxtQkFBbUI7SUE5SGhDO1FBNklxQixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7O1FBR2pELGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQyxDQUFDLCtDQUErQzs7UUFDN0YsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFhLENBQUMsQ0FBQyw0REFBNEQ7O1FBQ3hHLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBQzNDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDLENBQUMsNkNBQTZDOztRQUUxRyxjQUFTLEdBQVcsWUFBWSxDQUFDO0lBK0VuQyxDQUFDOzs7Ozs7OztJQXZFQyxjQUFjLENBQUMsU0FBMEIsRUFBRSxTQUFxQjtRQUM5RCxJQUNFLENBQUMsSUFBSSxDQUFDLGNBQWM7WUFDcEIsU0FBUyxLQUFLLElBQUksQ0FBQyxZQUFZO1lBQy9CLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLE1BQU0sSUFBSSxTQUFTLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLE9BQU8sSUFBSSxTQUFTLEtBQUssTUFBTSxDQUFDLENBQUMsRUFDM0c7WUFDQSxPQUFPLEtBQUssQ0FBQztTQUNk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Q0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdGltZSc7XG5pbXBvcnQgeyBGdW5jdGlvblByb3AgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgRGlzYWJsZWREYXRlRm4sIE56RGF0ZU1vZGUsIFJhbmdlUGFydFR5cGUsIFN1cHBvcnRUaW1lT3B0aW9ucyB9IGZyb20gJy4vc3RhbmRhcmQtdHlwZXMnO1xuaW1wb3J0IHsgUFJFRklYX0NMQVNTIH0gZnJvbSAnLi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnaW5uZXItcG9wdXAnLFxuICBleHBvcnRBczogJ2lubmVyUG9wdXAnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW2NsYXNzLmFudC1waWNrZXItZGF0ZXRpbWUtcGFuZWxdPVwic2hvd1RpbWVQaWNrZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0te3sgcGFuZWxNb2RlIH19LXBhbmVsXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInBhbmVsTW9kZVwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidkZWNhZGUnXCI+XG4gICAgICAgICAgICA8ZGVjYWRlLWhlYWRlclxuICAgICAgICAgICAgICBbKHZhbHVlKV09XCJhY3RpdmVEYXRlXCJcbiAgICAgICAgICAgICAgW2xvY2FsZV09XCJsb2NhbGUhXCJcbiAgICAgICAgICAgICAgW3Nob3dTdXBlclByZUJ0bl09XCJlbmFibGVQcmV2TmV4dCgncHJldicsICdkZWNhZGUnKVwiXG4gICAgICAgICAgICAgIFtzaG93U3VwZXJOZXh0QnRuXT1cImVuYWJsZVByZXZOZXh0KCduZXh0JywgJ2RlY2FkZScpXCJcbiAgICAgICAgICAgICAgW3Nob3dOZXh0QnRuXT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgW3Nob3dQcmVCdG5dPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAocGFuZWxNb2RlQ2hhbmdlKT1cInBhbmVsTW9kZUNoYW5nZS5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgICAodmFsdWVDaGFuZ2UpPVwiaGVhZGVyQ2hhbmdlLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8L2RlY2FkZS1oZWFkZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWJvZHlcIj5cbiAgICAgICAgICAgICAgPGRlY2FkZS10YWJsZVxuICAgICAgICAgICAgICAgIFtzaG93V2Vla109XCJzaG93V2Vla1wiXG4gICAgICAgICAgICAgICAgW2FjdGl2ZURhdGVdPVwiYWN0aXZlRGF0ZVwiXG4gICAgICAgICAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgICAodmFsdWVDaGFuZ2UpPVwib25DaG9vc2VEZWNhZGUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkRGF0ZV09XCJkaXNhYmxlZERhdGVcIlxuICAgICAgICAgICAgICA+PC9kZWNhZGUtdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCIneWVhcidcIj5cbiAgICAgICAgICAgIDx5ZWFyLWhlYWRlclxuICAgICAgICAgICAgICBbKHZhbHVlKV09XCJhY3RpdmVEYXRlXCJcbiAgICAgICAgICAgICAgW2xvY2FsZV09XCJsb2NhbGUhXCJcbiAgICAgICAgICAgICAgW3Nob3dTdXBlclByZUJ0bl09XCJlbmFibGVQcmV2TmV4dCgncHJldicsICd5ZWFyJylcIlxuICAgICAgICAgICAgICBbc2hvd1N1cGVyTmV4dEJ0bl09XCJlbmFibGVQcmV2TmV4dCgnbmV4dCcsICd5ZWFyJylcIlxuICAgICAgICAgICAgICBbc2hvd05leHRCdG5dPVwiZmFsc2VcIlxuICAgICAgICAgICAgICBbc2hvd1ByZUJ0bl09XCJmYWxzZVwiXG4gICAgICAgICAgICAgIChwYW5lbE1vZGVDaGFuZ2UpPVwicGFuZWxNb2RlQ2hhbmdlLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICh2YWx1ZUNoYW5nZSk9XCJoZWFkZXJDaGFuZ2UuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwveWVhci1oZWFkZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWJvZHlcIj5cbiAgICAgICAgICAgICAgPHllYXItdGFibGVcbiAgICAgICAgICAgICAgICBbc2hvd1dlZWtdPVwic2hvd1dlZWtcIlxuICAgICAgICAgICAgICAgIFthY3RpdmVEYXRlXT1cImFjdGl2ZURhdGVcIlxuICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICAgKHZhbHVlQ2hhbmdlKT1cIm9uQ2hvb3NlWWVhcigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWREYXRlXT1cImRpc2FibGVkRGF0ZVwiXG4gICAgICAgICAgICAgID48L3llYXItdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInbW9udGgnXCI+XG4gICAgICAgICAgICA8bW9udGgtaGVhZGVyXG4gICAgICAgICAgICAgIFsodmFsdWUpXT1cImFjdGl2ZURhdGVcIlxuICAgICAgICAgICAgICBbbG9jYWxlXT1cImxvY2FsZSFcIlxuICAgICAgICAgICAgICBbc2hvd05leHRCdG5dPVwiZmFsc2VcIlxuICAgICAgICAgICAgICBbc2hvd1ByZUJ0bl09XCJmYWxzZVwiXG4gICAgICAgICAgICAgIChwYW5lbE1vZGVDaGFuZ2UpPVwicGFuZWxNb2RlQ2hhbmdlLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICh2YWx1ZUNoYW5nZSk9XCJoZWFkZXJDaGFuZ2UuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvbW9udGgtaGVhZGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1ib2R5XCI+XG4gICAgICAgICAgICAgIDxtb250aC10YWJsZVxuICAgICAgICAgICAgICAgIFtzaG93V2Vla109XCJzaG93V2Vla1wiXG4gICAgICAgICAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgICBbYWN0aXZlRGF0ZV09XCJhY3RpdmVEYXRlXCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWREYXRlXT1cImRpc2FibGVkRGF0ZVwiXG4gICAgICAgICAgICAgICAgKHZhbHVlQ2hhbmdlKT1cIm9uQ2hvb3NlTW9udGgoJGV2ZW50KVwiXG4gICAgICAgICAgICAgID48L21vbnRoLXRhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgICAgICAgICA8ZGF0ZS1oZWFkZXJcbiAgICAgICAgICAgICAgWyh2YWx1ZSldPVwiYWN0aXZlRGF0ZVwiXG4gICAgICAgICAgICAgIFtsb2NhbGVdPVwibG9jYWxlIVwiXG4gICAgICAgICAgICAgIFtzaG93U3VwZXJQcmVCdG5dPVwiZW5hYmxlUHJldk5leHQoJ3ByZXYnLCAnZGF0ZScpXCJcbiAgICAgICAgICAgICAgW3Nob3dTdXBlck5leHRCdG5dPVwiZW5hYmxlUHJldk5leHQoJ25leHQnLCAnZGF0ZScpXCJcbiAgICAgICAgICAgICAgW3Nob3dQcmVCdG5dPVwiZW5hYmxlUHJldk5leHQoJ3ByZXYnLCAnZGF0ZScpXCJcbiAgICAgICAgICAgICAgW3Nob3dOZXh0QnRuXT1cImVuYWJsZVByZXZOZXh0KCduZXh0JywgJ2RhdGUnKVwiXG4gICAgICAgICAgICAgIChwYW5lbE1vZGVDaGFuZ2UpPVwicGFuZWxNb2RlQ2hhbmdlLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICh2YWx1ZUNoYW5nZSk9XCJoZWFkZXJDaGFuZ2UuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvZGF0ZS1oZWFkZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWJvZHlcIj5cbiAgICAgICAgICAgICAgPGRhdGUtdGFibGVcbiAgICAgICAgICAgICAgICBbbG9jYWxlXT1cImxvY2FsZSFcIlxuICAgICAgICAgICAgICAgIFtzaG93V2Vla109XCJzaG93V2Vla1wiXG4gICAgICAgICAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgICBbYWN0aXZlRGF0ZV09XCJhY3RpdmVEYXRlXCJcbiAgICAgICAgICAgICAgICAodmFsdWVDaGFuZ2UpPVwib25TZWxlY3REYXRlKCRldmVudClcIlxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZERhdGVdPVwiZGlzYWJsZWREYXRlXCJcbiAgICAgICAgICAgICAgICBbY2VsbFJlbmRlcl09XCJkYXRlUmVuZGVyXCJcbiAgICAgICAgICAgICAgICBbc2VsZWN0ZWRWYWx1ZV09XCJzZWxlY3RlZFZhbHVlXCJcbiAgICAgICAgICAgICAgICBbaG92ZXJWYWx1ZV09XCJob3ZlclZhbHVlXCJcbiAgICAgICAgICAgICAgICAoZGF5SG92ZXIpPVwiZGF5SG92ZXIuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgPjwvZGF0ZS10YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3dUaW1lUGlja2VyICYmIHRpbWVPcHRpb25zXCI+XG4gICAgICAgIDxuei10aW1lLXBpY2tlci1wYW5lbFxuICAgICAgICAgIFtuekluRGF0ZVBpY2tlcl09XCJ0cnVlXCJcbiAgICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZT8ubmF0aXZlRGF0ZVwiXG4gICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25TZWxlY3RUaW1lKCRldmVudClcIlxuICAgICAgICAgIFtmb3JtYXRdPVwiJGFueSh0aW1lT3B0aW9ucy5uekZvcm1hdClcIlxuICAgICAgICAgIFtuekhvdXJTdGVwXT1cIiRhbnkodGltZU9wdGlvbnMubnpIb3VyU3RlcClcIlxuICAgICAgICAgIFtuek1pbnV0ZVN0ZXBdPVwiJGFueSh0aW1lT3B0aW9ucy5uek1pbnV0ZVN0ZXApXCJcbiAgICAgICAgICBbbnpTZWNvbmRTdGVwXT1cIiRhbnkodGltZU9wdGlvbnMubnpTZWNvbmRTdGVwKVwiXG4gICAgICAgICAgW256RGlzYWJsZWRIb3Vyc109XCIkYW55KHRpbWVPcHRpb25zLm56RGlzYWJsZWRIb3VycylcIlxuICAgICAgICAgIFtuekRpc2FibGVkTWludXRlc109XCIkYW55KHRpbWVPcHRpb25zLm56RGlzYWJsZWRNaW51dGVzKVwiXG4gICAgICAgICAgW256RGlzYWJsZWRTZWNvbmRzXT1cIiRhbnkodGltZU9wdGlvbnMubnpEaXNhYmxlZFNlY29uZHMpXCJcbiAgICAgICAgICBbbnpIaWRlRGlzYWJsZWRPcHRpb25zXT1cIiEhdGltZU9wdGlvbnMubnpIaWRlRGlzYWJsZWRPcHRpb25zXCJcbiAgICAgICAgICBbbnpEZWZhdWx0T3BlblZhbHVlXT1cIiRhbnkodGltZU9wdGlvbnMubnpEZWZhdWx0T3BlblZhbHVlKVwiXG4gICAgICAgICAgW256VXNlMTJIb3Vyc109XCIhIXRpbWVPcHRpb25zLm56VXNlMTJIb3Vyc1wiXG4gICAgICAgICAgW256QWRkT25dPVwiJGFueSh0aW1lT3B0aW9ucy5uekFkZE9uKVwiXG4gICAgICAgID48L256LXRpbWUtcGlja2VyLXBhbmVsPlxuICAgICAgICA8IS0tIHVzZSBbb3BlbmVkXSB0byB0cmlnZ2VyIHRpbWUgcGFuZWwgXFxgaW5pdFBvc2l0aW9uKClcXGAgLS0+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBJbm5lclBvcHVwQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgYWN0aXZlRGF0ZSE6IENhbmR5RGF0ZTtcbiAgQElucHV0KCkgZW5kUGFuZWxNb2RlITogTnpEYXRlTW9kZTtcbiAgQElucHV0KCkgcGFuZWxNb2RlITogTnpEYXRlTW9kZTtcbiAgQElucHV0KCkgc2hvd1dlZWshOiBib29sZWFuO1xuICBASW5wdXQoKSBsb2NhbGUhOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcbiAgQElucHV0KCkgc2hvd1RpbWVQaWNrZXIhOiBib29sZWFuO1xuICBASW5wdXQoKSB0aW1lT3B0aW9ucyE6IFN1cHBvcnRUaW1lT3B0aW9ucyB8IG51bGw7XG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZT86IERpc2FibGVkRGF0ZUZuO1xuICBASW5wdXQoKSBkYXRlUmVuZGVyPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8RGF0ZT4gfCBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc+O1xuICBASW5wdXQoKSBzZWxlY3RlZFZhbHVlITogQ2FuZHlEYXRlW107IC8vIFJhbmdlIE9OTFlcbiAgQElucHV0KCkgaG92ZXJWYWx1ZSE6IENhbmR5RGF0ZVtdOyAvLyBSYW5nZSBPTkxZXG4gIEBJbnB1dCgpIHZhbHVlITogQ2FuZHlEYXRlO1xuICBASW5wdXQoKSBwYXJ0VHlwZSE6IFJhbmdlUGFydFR5cGU7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IHBhbmVsTW9kZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpEYXRlTW9kZT4oKTtcblxuICAvLyBUT0RPOiBuYW1lIGlzIG5vdCBwcm9wZXJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGhlYWRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpOyAvLyBFbWl0dGVkIHdoZW4gdXNlciBjaGFuZ2VkIHRoZSBoZWFkZXIncyB2YWx1ZVxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0RGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpOyAvLyBFbWl0dGVkIHdoZW4gdGhlIGRhdGUgaXMgc2VsZWN0ZWQgYnkgY2xpY2sgdGhlIGRhdGUgcGFuZWxcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdFRpbWUgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGRheUhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7IC8vIEVtaXR0ZWQgd2hlbiBob3ZlciBvbiBhIGRheSBieSBtb3VzZSBlbnRlclxuXG4gIHByZWZpeENsczogc3RyaW5nID0gUFJFRklYX0NMQVNTO1xuXG4gIC8qKlxuICAgKiBIaWRlIFwibmV4dFwiIGFycm93IGluIGxlZnQgcGFuZWwsXG4gICAqIGhpZGUgXCJwcmV2XCIgYXJyb3cgaW4gcmlnaHQgcGFuZWxcbiAgICogQHBhcmFtIGRpcmVjdGlvblxuICAgKiBAcGFyYW0gcGFuZWxNb2RlXG4gICAqL1xuICBlbmFibGVQcmV2TmV4dChkaXJlY3Rpb246ICdwcmV2JyB8ICduZXh0JywgcGFuZWxNb2RlOiBOekRhdGVNb2RlKTogYm9vbGVhbiB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMuc2hvd1RpbWVQaWNrZXIgJiZcbiAgICAgIHBhbmVsTW9kZSA9PT0gdGhpcy5lbmRQYW5lbE1vZGUgJiZcbiAgICAgICgodGhpcy5wYXJ0VHlwZSA9PT0gJ2xlZnQnICYmIGRpcmVjdGlvbiA9PT0gJ25leHQnKSB8fCAodGhpcy5wYXJ0VHlwZSA9PT0gJ3JpZ2h0JyAmJiBkaXJlY3Rpb24gPT09ICdwcmV2JykpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgb25TZWxlY3RUaW1lKGRhdGU6IERhdGUpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdFRpbWUuZW1pdChuZXcgQ2FuZHlEYXRlKGRhdGUpKTtcbiAgfVxuXG4gIC8vIFRoZSB2YWx1ZSByZWFsIGNoYW5nZWQgdG8gb3V0c2lkZVxuICBvblNlbGVjdERhdGUoZGF0ZTogQ2FuZHlEYXRlIHwgRGF0ZSk6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlID0gZGF0ZSBpbnN0YW5jZW9mIENhbmR5RGF0ZSA/IGRhdGUgOiBuZXcgQ2FuZHlEYXRlKGRhdGUpO1xuICAgIGNvbnN0IHRpbWVWYWx1ZSA9IHRoaXMudGltZU9wdGlvbnMgJiYgdGhpcy50aW1lT3B0aW9ucy5uekRlZmF1bHRPcGVuVmFsdWU7XG5cbiAgICAvLyBEaXNwbGF5IHRpbWVWYWx1ZSB3aGVuIHZhbHVlIGlzIG51bGxcbiAgICBpZiAoIXRoaXMudmFsdWUgJiYgdGltZVZhbHVlKSB7XG4gICAgICB2YWx1ZS5zZXRIbXModGltZVZhbHVlLmdldEhvdXJzKCksIHRpbWVWYWx1ZS5nZXRNaW51dGVzKCksIHRpbWVWYWx1ZS5nZXRTZWNvbmRzKCkpO1xuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0RGF0ZS5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIG9uQ2hvb3NlTW9udGgodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlRGF0ZSA9IHRoaXMuYWN0aXZlRGF0ZS5zZXRNb250aCh2YWx1ZS5nZXRNb250aCgpKTtcbiAgICBpZiAodGhpcy5lbmRQYW5lbE1vZGUgPT09ICdtb250aCcpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuc2VsZWN0RGF0ZS5lbWl0KHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oZWFkZXJDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgICB0aGlzLnBhbmVsTW9kZUNoYW5nZS5lbWl0KHRoaXMuZW5kUGFuZWxNb2RlKTtcbiAgICB9XG4gIH1cblxuICBvbkNob29zZVllYXIodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlRGF0ZSA9IHRoaXMuYWN0aXZlRGF0ZS5zZXRZZWFyKHZhbHVlLmdldFllYXIoKSk7XG4gICAgaWYgKHRoaXMuZW5kUGFuZWxNb2RlID09PSAneWVhcicpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuc2VsZWN0RGF0ZS5lbWl0KHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oZWFkZXJDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgICB0aGlzLnBhbmVsTW9kZUNoYW5nZS5lbWl0KHRoaXMuZW5kUGFuZWxNb2RlKTtcbiAgICB9XG4gIH1cblxuICBvbkNob29zZURlY2FkZSh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVEYXRlID0gdGhpcy5hY3RpdmVEYXRlLnNldFllYXIodmFsdWUuZ2V0WWVhcigpKTtcbiAgICBpZiAodGhpcy5lbmRQYW5lbE1vZGUgPT09ICdkZWNhZGUnKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLnNlbGVjdERhdGUuZW1pdCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGVhZGVyQ2hhbmdlLmVtaXQodmFsdWUpO1xuICAgICAgdGhpcy5wYW5lbE1vZGVDaGFuZ2UuZW1pdCgneWVhcicpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5hY3RpdmVEYXRlICYmICFjaGFuZ2VzLmFjdGl2ZURhdGUuY3VycmVudFZhbHVlKSB7XG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSBuZXcgQ2FuZHlEYXRlKCk7XG4gICAgfVxuICAgIC8vIE5ldyBBbnRkIHZlc2lvbiBoYXMgbWVyZ2VkICdkYXRlJyBhbnQgJ3RpbWUnIHRvIG9uZSBwYW5lbCxcbiAgICAvLyBTbyB0aGVyZSBpcyBub3QgJ3RpbWUnIHBhbmVsXG4gICAgaWYgKGNoYW5nZXMucGFuZWxNb2RlICYmIGNoYW5nZXMucGFuZWxNb2RlLmN1cnJlbnRWYWx1ZSA9PT0gJ3RpbWUnKSB7XG4gICAgICB0aGlzLnBhbmVsTW9kZSA9ICdkYXRlJztcbiAgICB9XG4gIH1cbn1cbiJdfQ==