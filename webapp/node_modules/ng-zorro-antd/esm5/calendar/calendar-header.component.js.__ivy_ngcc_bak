/**
 * @fileoverview added by tsickle
 * Generated from: calendar-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core/time';
import { DateHelperService, NzI18nService as I18n } from 'ng-zorro-antd/i18n';
var NzCalendarHeaderComponent = /** @class */ (function () {
    function NzCalendarHeaderComponent(i18n, dateHelper) {
        this.i18n = i18n;
        this.dateHelper = dateHelper;
        this.mode = 'month';
        this.fullscreen = true;
        this.activeDate = new CandyDate();
        this.modeChange = new EventEmitter();
        this.yearChange = new EventEmitter();
        this.monthChange = new EventEmitter();
        // @Output() readonly valueChange: EventEmitter<CandyDate> = new EventEmitter();
        this.yearOffset = 10;
        this.yearTotal = 20;
        this.years = [];
        this.months = [];
    }
    Object.defineProperty(NzCalendarHeaderComponent.prototype, "activeYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeDate.getYear();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarHeaderComponent.prototype, "activeMonth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeDate.getMonth();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarHeaderComponent.prototype, "size", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fullscreen ? 'default' : 'small';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarHeaderComponent.prototype, "yearTypeText", {
        get: /**
         * @return {?}
         */
        function () {
            return this.i18n.getLocale().Calendar.lang.year;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarHeaderComponent.prototype, "monthTypeText", {
        get: /**
         * @return {?}
         */
        function () {
            return this.i18n.getLocale().Calendar.lang.month;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCalendarHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setUpYears();
        this.setUpMonths();
    };
    /**
     * @param {?} year
     * @return {?}
     */
    NzCalendarHeaderComponent.prototype.updateYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.yearChange.emit(year);
        this.setUpYears(year);
    };
    /**
     * @private
     * @param {?=} year
     * @return {?}
     */
    NzCalendarHeaderComponent.prototype.setUpYears = /**
     * @private
     * @param {?=} year
     * @return {?}
     */
    function (year) {
        /** @type {?} */
        var start = (year || this.activeYear) - this.yearOffset;
        /** @type {?} */
        var end = start + this.yearTotal;
        this.years = [];
        for (var i = start; i < end; i++) {
            this.years.push({ label: "" + i, value: i });
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCalendarHeaderComponent.prototype.setUpMonths = /**
     * @private
     * @return {?}
     */
    function () {
        this.months = [];
        for (var i = 0; i < 12; i++) {
            /** @type {?} */
            var dateInMonth = this.activeDate.setMonth(i);
            /** @type {?} */
            var monthText = this.dateHelper.format(dateInMonth.nativeDate, 'MMM');
            this.months.push({ label: monthText, value: i });
        }
    };
    NzCalendarHeaderComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'nz-calendar-header',
                    exportAs: 'nzCalendarHeader',
                    template: "\n    <div class=\"ant-picker-calendar-header\">\n      <nz-select\n        class=\"ant-picker-calendar-year-select\"\n        [nzSize]=\"size\"\n        [nzDropdownMatchSelectWidth]=\"false\"\n        [ngModel]=\"activeYear\"\n        (ngModelChange)=\"updateYear($event)\"\n      >\n        <nz-option *ngFor=\"let year of years\" [nzLabel]=\"year.label\" [nzValue]=\"year.value\"></nz-option>\n      </nz-select>\n\n      <nz-select\n        *ngIf=\"mode === 'month'\"\n        class=\"ant-picker-calendar-month-select\"\n        [nzSize]=\"size\"\n        [nzDropdownMatchSelectWidth]=\"false\"\n        [ngModel]=\"activeMonth\"\n        (ngModelChange)=\"monthChange.emit($event)\"\n      >\n        <nz-option *ngFor=\"let month of months\" [nzLabel]=\"month.label\" [nzValue]=\"month.value\"></nz-option>\n      </nz-select>\n\n      <nz-radio-group class=\"ant-picker-calendar-mode-switch\" [(ngModel)]=\"mode\" (ngModelChange)=\"modeChange.emit($event)\" [nzSize]=\"size\">\n        <label nz-radio-button nzValue=\"month\">{{ monthTypeText }}</label>\n        <label nz-radio-button nzValue=\"year\">{{ yearTypeText }}</label>\n      </nz-radio-group>\n    </div>\n  ",
                    host: {
                        '[style.display]': "'block'",
                        '[class.ant-fullcalendar-header]': "true"
                    }
                }] }
    ];
    /** @nocollapse */
    NzCalendarHeaderComponent.ctorParameters = function () { return [
        { type: I18n },
        { type: DateHelperService }
    ]; };
    NzCalendarHeaderComponent.propDecorators = {
        mode: [{ type: Input }],
        fullscreen: [{ type: Input }],
        activeDate: [{ type: Input }],
        modeChange: [{ type: Output }],
        yearChange: [{ type: Output }],
        monthChange: [{ type: Output }]
    };
    return NzCalendarHeaderComponent;
}());
export { NzCalendarHeaderComponent };
if (false) {
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.mode;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.fullscreen;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.activeDate;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.modeChange;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.yearChange;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.monthChange;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.yearOffset;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.yearTotal;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.years;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.months;
    /**
     * @type {?}
     * @private
     */
    NzCalendarHeaderComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    NzCalendarHeaderComponent.prototype.dateHelper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2FsZW5kYXIvIiwic291cmNlcyI6WyJjYWxlbmRhci1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0gsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxhQUFhLElBQUksSUFBSSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHOUU7SUEwRUUsbUNBQW9CLElBQVUsRUFBVSxVQUE2QjtRQUFqRCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFsQzVELFNBQUksR0FBcUIsT0FBTyxDQUFDO1FBQ2pDLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsZUFBVSxHQUFjLElBQUksU0FBUyxFQUFFLENBQUM7UUFFOUIsZUFBVSxHQUFtQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hFLGVBQVUsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN0RCxnQkFBVyxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDOztRQUcxRSxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsVUFBSyxHQUE0QyxFQUFFLENBQUM7UUFDcEQsV0FBTSxHQUE0QyxFQUFFLENBQUM7SUFzQm1CLENBQUM7SUFwQnpFLHNCQUFJLGlEQUFVOzs7O1FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxrREFBVzs7OztRQUFmO1lBQ0Us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OztJQUVqRCwrQ0FBbUY7O0lBQ25GLCtDQUF5RTs7SUFDekUsZ0RBQTBFOztJQUcxRSwrQ0FBd0I7O0lBQ3hCLDhDQUF1Qjs7SUFDdkIsMENBQW9EOztJQUNwRCwyQ0FBcUQ7Ozs7O0lBc0J6Qyx5Q0FBa0I7Ozs7O0lBQUUsK0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdGltZSc7XG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSwgTnpJMThuU2VydmljZSBhcyBJMThuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcbmltcG9ydCB7IE56U2VsZWN0U2l6ZVR5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3NlbGVjdCc7XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6ICduei1jYWxlbmRhci1oZWFkZXInLFxuICBleHBvcnRBczogJ256Q2FsZW5kYXJIZWFkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJhbnQtcGlja2VyLWNhbGVuZGFyLWhlYWRlclwiPlxuICAgICAgPG56LXNlbGVjdFxuICAgICAgICBjbGFzcz1cImFudC1waWNrZXItY2FsZW5kYXIteWVhci1zZWxlY3RcIlxuICAgICAgICBbbnpTaXplXT1cInNpemVcIlxuICAgICAgICBbbnpEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGhdPVwiZmFsc2VcIlxuICAgICAgICBbbmdNb2RlbF09XCJhY3RpdmVZZWFyXCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwidXBkYXRlWWVhcigkZXZlbnQpXCJcbiAgICAgID5cbiAgICAgICAgPG56LW9wdGlvbiAqbmdGb3I9XCJsZXQgeWVhciBvZiB5ZWFyc1wiIFtuekxhYmVsXT1cInllYXIubGFiZWxcIiBbbnpWYWx1ZV09XCJ5ZWFyLnZhbHVlXCI+PC9uei1vcHRpb24+XG4gICAgICA8L256LXNlbGVjdD5cblxuICAgICAgPG56LXNlbGVjdFxuICAgICAgICAqbmdJZj1cIm1vZGUgPT09ICdtb250aCdcIlxuICAgICAgICBjbGFzcz1cImFudC1waWNrZXItY2FsZW5kYXItbW9udGgtc2VsZWN0XCJcbiAgICAgICAgW256U2l6ZV09XCJzaXplXCJcbiAgICAgICAgW256RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXT1cImZhbHNlXCJcbiAgICAgICAgW25nTW9kZWxdPVwiYWN0aXZlTW9udGhcIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJtb250aENoYW5nZS5lbWl0KCRldmVudClcIlxuICAgICAgPlxuICAgICAgICA8bnotb3B0aW9uICpuZ0Zvcj1cImxldCBtb250aCBvZiBtb250aHNcIiBbbnpMYWJlbF09XCJtb250aC5sYWJlbFwiIFtuelZhbHVlXT1cIm1vbnRoLnZhbHVlXCI+PC9uei1vcHRpb24+XG4gICAgICA8L256LXNlbGVjdD5cblxuICAgICAgPG56LXJhZGlvLWdyb3VwIGNsYXNzPVwiYW50LXBpY2tlci1jYWxlbmRhci1tb2RlLXN3aXRjaFwiIFsobmdNb2RlbCldPVwibW9kZVwiIChuZ01vZGVsQ2hhbmdlKT1cIm1vZGVDaGFuZ2UuZW1pdCgkZXZlbnQpXCIgW256U2l6ZV09XCJzaXplXCI+XG4gICAgICAgIDxsYWJlbCBuei1yYWRpby1idXR0b24gbnpWYWx1ZT1cIm1vbnRoXCI+e3sgbW9udGhUeXBlVGV4dCB9fTwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBuei1yYWRpby1idXR0b24gbnpWYWx1ZT1cInllYXJcIj57eyB5ZWFyVHlwZVRleHQgfX08L2xhYmVsPlxuICAgICAgPC9uei1yYWRpby1ncm91cD5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuZGlzcGxheV0nOiBgJ2Jsb2NrJ2AsXG4gICAgJ1tjbGFzcy5hbnQtZnVsbGNhbGVuZGFyLWhlYWRlcl0nOiBgdHJ1ZWBcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekNhbGVuZGFySGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbW9kZTogJ21vbnRoJyB8ICd5ZWFyJyA9ICdtb250aCc7XG4gIEBJbnB1dCgpIGZ1bGxzY3JlZW46IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBhY3RpdmVEYXRlOiBDYW5keURhdGUgPSBuZXcgQ2FuZHlEYXRlKCk7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG1vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjwnbW9udGgnIHwgJ3llYXInPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHllYXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbW9udGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvLyBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHllYXJPZmZzZXQ6IG51bWJlciA9IDEwO1xuICB5ZWFyVG90YWw6IG51bWJlciA9IDIwO1xuICB5ZWFyczogQXJyYXk8eyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIH0+ID0gW107XG4gIG1vbnRoczogQXJyYXk8eyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIH0+ID0gW107XG5cbiAgZ2V0IGFjdGl2ZVllYXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVEYXRlLmdldFllYXIoKTtcbiAgfVxuXG4gIGdldCBhY3RpdmVNb250aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZURhdGUuZ2V0TW9udGgoKTtcbiAgfVxuXG4gIGdldCBzaXplKCk6IE56U2VsZWN0U2l6ZVR5cGUge1xuICAgIHJldHVybiB0aGlzLmZ1bGxzY3JlZW4gPyAnZGVmYXVsdCcgOiAnc21hbGwnO1xuICB9XG5cbiAgZ2V0IHllYXJUeXBlVGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmkxOG4uZ2V0TG9jYWxlKCkuQ2FsZW5kYXIubGFuZy55ZWFyO1xuICB9XG5cbiAgZ2V0IG1vbnRoVHlwZVRleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pMThuLmdldExvY2FsZSgpLkNhbGVuZGFyLmxhbmcubW9udGg7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IEkxOG4sIHByaXZhdGUgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRVcFllYXJzKCk7XG4gICAgdGhpcy5zZXRVcE1vbnRocygpO1xuICB9XG5cbiAgdXBkYXRlWWVhcih5ZWFyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnllYXJDaGFuZ2UuZW1pdCh5ZWFyKTtcbiAgICB0aGlzLnNldFVwWWVhcnMoeWVhcik7XG4gIH1cblxuICBwcml2YXRlIHNldFVwWWVhcnMoeWVhcj86IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHN0YXJ0ID0gKHllYXIgfHwgdGhpcy5hY3RpdmVZZWFyKSAtIHRoaXMueWVhck9mZnNldDtcbiAgICBjb25zdCBlbmQgPSBzdGFydCArIHRoaXMueWVhclRvdGFsO1xuXG4gICAgdGhpcy55ZWFycyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICB0aGlzLnllYXJzLnB1c2goeyBsYWJlbDogYCR7aX1gLCB2YWx1ZTogaSB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFVwTW9udGhzKCk6IHZvaWQge1xuICAgIHRoaXMubW9udGhzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgIGNvbnN0IGRhdGVJbk1vbnRoID0gdGhpcy5hY3RpdmVEYXRlLnNldE1vbnRoKGkpO1xuICAgICAgY29uc3QgbW9udGhUZXh0ID0gdGhpcy5kYXRlSGVscGVyLmZvcm1hdChkYXRlSW5Nb250aC5uYXRpdmVEYXRlLCAnTU1NJyk7XG4gICAgICB0aGlzLm1vbnRocy5wdXNoKHsgbGFiZWw6IG1vbnRoVGV4dCwgdmFsdWU6IGkgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=