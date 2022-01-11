/**
 * @fileoverview added by tsickle
 * Generated from: tabset.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __read, __spread } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/** get some code from https://github.com/angular/material2 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Input, Optional, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { PREFIX } from 'ng-zorro-antd/core/logger';
import { InputBoolean, toNumber, wrapIntoObservable } from 'ng-zorro-antd/core/util';
import { merge, Subject, Subscription } from 'rxjs';
import { filter, first, startWith, takeUntil } from 'rxjs/operators';
import { NzTabComponent } from './tab.component';
import { NzTabChangeEvent } from './table.types';
import { NzTabsNavComponent } from './tabs-nav.component';
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'tabs';
var NzTabSetComponent = /** @class */ (function () {
    function NzTabSetComponent(nzConfigService, renderer, elementRef, cdr, router) {
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.router = router;
        this.indexToSelect = 0;
        this.el = this.elementRef.nativeElement;
        this._selectedIndex = null;
        /**
         * Subscription to tabs being added/removed.
         */
        this.tabsSubscription = Subscription.EMPTY;
        /**
         * Subscription to changes in the tab labels.
         */
        this.tabLabelSubscription = Subscription.EMPTY;
        this.destroy$ = new Subject();
        this.tabPositionMode = 'horizontal';
        this.nzShowPagination = true;
        this.nzAnimated = true;
        this.nzHideAll = false;
        this.nzTabPosition = 'top';
        this.nzSize = 'default';
        this.nzTabBarGutter = undefined;
        this.nzTabBarStyle = null;
        this.nzType = 'line';
        this.nzLinkRouter = false;
        this.nzLinkExact = true;
        this.nzCanDeactivate = null;
        this.nzOnNextClick = new EventEmitter();
        this.nzOnPrevClick = new EventEmitter();
        this.nzSelectChange = new EventEmitter(true);
        this.nzSelectedIndexChange = new EventEmitter();
    }
    Object.defineProperty(NzTabSetComponent.prototype, "nzSelectedIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectedIndex;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.indexToSelect = value ? toNumber(value, null) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTabSetComponent.prototype, "inkBarAnimated", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzAnimated === true || ((/** @type {?} */ (this.nzAnimated))).inkBar === true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTabSetComponent.prototype, "tabPaneAnimated", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzAnimated === true || ((/** @type {?} */ (this.nzAnimated))).tabPane === true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTabSetComponent.prototype, "isAnimationDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzAnimated === false || ((/** @type {?} */ (this.nzAnimated))).tabPane === false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    NzTabSetComponent.prototype.setPosition = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.tabContent) {
            if (value === 'bottom') {
                this.renderer.insertBefore(this.el, this.tabContent.nativeElement, (/** @type {?} */ (this.nzTabsNavComponent)).elementRef.nativeElement);
            }
            else {
                this.renderer.insertBefore(this.el, (/** @type {?} */ (this.nzTabsNavComponent)).elementRef.nativeElement, this.tabContent.nativeElement);
            }
        }
    };
    /**
     * @param {?} index
     * @param {?} disabled
     * @return {?}
     */
    NzTabSetComponent.prototype.clickLabel = /**
     * @param {?} index
     * @param {?} disabled
     * @return {?}
     */
    function (index, disabled) {
        var _this = this;
        if (!disabled) {
            if (this.nzSelectedIndex !== null && this.nzSelectedIndex !== index && typeof this.nzCanDeactivate === 'function') {
                /** @type {?} */
                var observable = wrapIntoObservable(this.nzCanDeactivate(this.nzSelectedIndex, index));
                observable.pipe(first(), takeUntil(this.destroy$)).subscribe((/**
                 * @param {?} canChange
                 * @return {?}
                 */
                function (canChange) { return canChange && _this.emitClickEvent(index); }));
            }
            else {
                this.emitClickEvent(index);
            }
        }
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    NzTabSetComponent.prototype.emitClickEvent = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var tabs = this.listOfNzTabComponent.toArray();
        this.nzSelectedIndex = index;
        tabs[index].nzClick.emit();
        this.cdr.markForCheck();
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NzTabSetComponent.prototype.createChangeEvent = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var event = new NzTabChangeEvent();
        event.index = index;
        if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
            event.tab = this.listOfNzTabComponent.toArray()[index];
            this.listOfNzTabComponent.forEach((/**
             * @param {?} item
             * @param {?} i
             * @return {?}
             */
            function (item, i) {
                if (i !== index) {
                    item.nzDeselect.emit();
                }
            }));
            event.tab.nzSelect.emit();
        }
        return event;
    };
    /** Clamps the given index to the bounds of 0 and the tabs length. */
    /**
     * Clamps the given index to the bounds of 0 and the tabs length.
     * @private
     * @param {?} index
     * @return {?}
     */
    NzTabSetComponent.prototype.clampTabIndex = /**
     * Clamps the given index to the bounds of 0 and the tabs length.
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        // Note the `|| 0`, which ensures that values like NaN can't get through
        // and which would otherwise throw the component into an infinite loop
        // (since Math.max(NaN, 0) === NaN).
        return Math.min(this.listOfNzTabComponent.length - 1, Math.max(index || 0, 0));
    };
    /**
     * @private
     * @return {?}
     */
    NzTabSetComponent.prototype.subscribeToTabLabels = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.tabLabelSubscription) {
            this.tabLabelSubscription.unsubscribe();
        }
        this.tabLabelSubscription = merge.apply(void 0, __spread(this.listOfNzTabComponent.map((/**
         * @param {?} tab
         * @return {?}
         */
        function (tab) { return tab.stateChanges; })))).subscribe((/**
         * @return {?}
         */
        function () { return _this.cdr.markForCheck(); }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTabSetComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzTabPosition = changes.nzTabPosition, nzType = changes.nzType;
        if (nzTabPosition) {
            if (this.nzTabPosition === 'top' || this.nzTabPosition === 'bottom') {
                this.tabPositionMode = 'horizontal';
            }
            else {
                this.tabPositionMode = 'vertical';
            }
            this.setPosition(this.nzTabPosition);
        }
        if (nzType) {
            if (this.nzType === 'card') {
                this.nzAnimated = false;
            }
        }
    };
    /**
     * @return {?}
     */
    NzTabSetComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
            // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
            // the amount of tabs changes before the actual change detection runs.
            /** @type {?} */
            var indexToSelect_1 = (this.indexToSelect = this.clampTabIndex(this.indexToSelect));
            // If there is a change in selected index, emit a change event. Should not trigger if
            // the selected index has not yet been initialized.
            if (this._selectedIndex !== indexToSelect_1) {
                /** @type {?} */
                var isFirstRun_1 = this._selectedIndex == null;
                if (!isFirstRun_1) {
                    this.nzSelectChange.emit(this.createChangeEvent(indexToSelect_1));
                }
                // Changing these values after change detection has run
                // since the checked content may contain references to them.
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () {
                    _this.listOfNzTabComponent.forEach((/**
                     * @param {?} tab
                     * @param {?} index
                     * @return {?}
                     */
                    function (tab, index) { return (tab.isActive = index === indexToSelect_1); }));
                    if (!isFirstRun_1) {
                        _this.nzSelectedIndexChange.emit(indexToSelect_1);
                    }
                }));
            }
            // Setup the position for each tab and optionally setup an origin on the next selected tab.
            this.listOfNzTabComponent.forEach((/**
             * @param {?} tab
             * @param {?} index
             * @return {?}
             */
            function (tab, index) {
                tab.position = index - indexToSelect_1;
                // If there is already a selected tab, then set up an origin for the next selected tab
                // if it doesn't have one already.
                if (_this._selectedIndex != null && tab.position === 0 && !tab.origin) {
                    tab.origin = indexToSelect_1 - _this._selectedIndex;
                }
            }));
            if (this._selectedIndex !== indexToSelect_1) {
                this._selectedIndex = indexToSelect_1;
                this.cdr.markForCheck();
            }
        }
    };
    /**
     * @return {?}
     */
    NzTabSetComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscribeToTabLabels();
        this.setPosition(this.nzTabPosition);
        if (this.nzLinkRouter) {
            if (!this.router) {
                throw new Error(PREFIX + " you should import 'RouterModule' if you want to use 'nzLinkRouter'!");
            }
            this.router.events
                .pipe(takeUntil(this.destroy$), filter((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return e instanceof NavigationEnd; })), startWith(true))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.updateRouterActive();
                _this.cdr.markForCheck();
            }));
        }
        // Subscribe to changes in the amount of tabs, in order to be
        // able to re-render the content as new tabs are added or removed.
        this.tabsSubscription = this.listOfNzTabComponent.changes.subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var indexToSelect = _this.clampTabIndex(_this.indexToSelect);
            // Maintain the previously-selected tab if a new tab is added or removed and there is no
            // explicit change that selects a different tab.
            if (indexToSelect === _this._selectedIndex) {
                /** @type {?} */
                var tabs = _this.listOfNzTabComponent.toArray();
                for (var i = 0; i < tabs.length; i++) {
                    if (tabs[i].isActive) {
                        // Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
                        // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                        // adding a tab within the `selectedIndexChange` event.
                        _this.indexToSelect = _this._selectedIndex = i;
                        break;
                    }
                }
            }
            _this.subscribeToTabLabels();
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NzTabSetComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.tabsSubscription.unsubscribe();
        this.tabLabelSubscription.unsubscribe();
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @private
     * @return {?}
     */
    NzTabSetComponent.prototype.updateRouterActive = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.router.navigated) {
            /** @type {?} */
            var index = this.findShouldActiveTabIndex();
            if (index !== this._selectedIndex) {
                this.nzSelectedIndex = index;
                this.nzSelectedIndexChange.emit(index);
            }
            this.nzHideAll = index === -1;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzTabSetComponent.prototype.findShouldActiveTabIndex = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var tabs = this.listOfNzTabComponent.toArray();
        /** @type {?} */
        var isActive = this.isLinkActive(this.router);
        return tabs.findIndex((/**
         * @param {?} tab
         * @return {?}
         */
        function (tab) {
            /** @type {?} */
            var c = tab.linkDirective;
            return c ? isActive(c.routerLink) || isActive(c.routerLinkWithHref) : false;
        }));
    };
    /**
     * @private
     * @param {?} router
     * @return {?}
     */
    NzTabSetComponent.prototype.isLinkActive = /**
     * @private
     * @param {?} router
     * @return {?}
     */
    function (router) {
        var _this = this;
        return (/**
         * @param {?=} link
         * @return {?}
         */
        function (link) { return (link ? router.isActive(link.urlTree, _this.nzLinkExact) : false); });
    };
    NzTabSetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-tabset',
                    exportAs: 'nzTabset',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <ng-container *ngIf=\"listOfNzTabComponent\">\n      <nz-tabs-nav\n        role=\"tablist\"\n        tabindex=\"0\"\n        [nzSize]=\"nzSize\"\n        [nzTabPosition]=\"nzTabPosition\"\n        [nzType]=\"nzType\"\n        [nzShowPagination]=\"nzShowPagination\"\n        [nzPositionMode]=\"tabPositionMode\"\n        [nzAnimated]=\"inkBarAnimated\"\n        [ngStyle]=\"nzTabBarStyle\"\n        [nzHideBar]=\"nzHideAll\"\n        [nzTabBarExtraContent]=\"nzTabBarExtraContent\"\n        [selectedIndex]=\"nzSelectedIndex!\"\n        (nzOnNextClick)=\"nzOnNextClick.emit()\"\n        (nzOnPrevClick)=\"nzOnPrevClick.emit()\"\n      >\n        <div\n          nz-tab-label\n          role=\"tab\"\n          [style.margin-right.px]=\"nzTabBarGutter\"\n          [class.ant-tabs-tab-active]=\"nzSelectedIndex == i && !nzHideAll\"\n          [disabled]=\"tab.nzDisabled\"\n          (click)=\"clickLabel(i, tab.nzDisabled)\"\n          *ngFor=\"let tab of listOfNzTabComponent; let i = index\"\n        >\n          <ng-container *nzStringTemplateOutlet=\"tab.nzTitle || tab.title\">{{ tab.nzTitle }}</ng-container>\n        </div>\n      </nz-tabs-nav>\n      <div\n        #tabContent\n        class=\"ant-tabs-content\"\n        [class.ant-tabs-top-content]=\"nzTabPosition === 'top'\"\n        [class.ant-tabs-bottom-content]=\"nzTabPosition === 'bottom'\"\n        [class.ant-tabs-left-content]=\"nzTabPosition === 'left'\"\n        [class.ant-tabs-right-content]=\"nzTabPosition === 'right'\"\n        [class.ant-tabs-content-animated]=\"tabPaneAnimated\"\n        [class.ant-tabs-card-content]=\"nzType === 'card'\"\n        [class.ant-tabs-content-no-animated]=\"!tabPaneAnimated\"\n        [style.margin-left.%]=\"tabPositionMode === 'horizontal' && tabPaneAnimated && -(nzSelectedIndex || 0) * 100\"\n      >\n        <div\n          nz-tab-body\n          class=\"ant-tabs-tabpane\"\n          *ngFor=\"let tab of listOfNzTabComponent; let i = index\"\n          [active]=\"nzSelectedIndex == i && !nzHideAll\"\n          [forceRender]=\"tab.nzForceRender\"\n          [content]=\"tab.template || tab.content\"\n        ></div>\n      </div>\n    </ng-container>\n  ",
                    host: {
                        '[class.ant-tabs]': "true",
                        '[class.ant-tabs-no-animation]': "isAnimationDisabled",
                        '[class.ant-tabs-line]': "nzType === 'line'",
                        '[class.ant-tabs-card]': "nzType === 'card'",
                        '[class.ant-tabs-top]': "nzTabPosition === 'top'",
                        '[class.ant-tabs-bottom]': "nzTabPosition === 'bottom'",
                        '[class.ant-tabs-left]': "nzTabPosition === 'left'",
                        '[class.ant-tabs-right]': "nzTabPosition === 'right'",
                        '[class.ant-tabs-vertical]': "nzTabPosition === 'left' || nzTabPosition === 'right'",
                        '[class.ant-tabs-large]': "nzSize === 'large'",
                        '[class.ant-tabs-small]': "nzSize === 'small'"
                    }
                }] }
    ];
    /** @nocollapse */
    NzTabSetComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Router, decorators: [{ type: Optional }] }
    ]; };
    NzTabSetComponent.propDecorators = {
        listOfNzTabComponent: [{ type: ContentChildren, args: [NzTabComponent,] }],
        nzTabsNavComponent: [{ type: ViewChild, args: [NzTabsNavComponent, { static: false },] }],
        tabContent: [{ type: ViewChild, args: ['tabContent', { static: false },] }],
        nzTabBarExtraContent: [{ type: Input }],
        nzShowPagination: [{ type: Input }],
        nzAnimated: [{ type: Input }],
        nzHideAll: [{ type: Input }],
        nzTabPosition: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzTabBarGutter: [{ type: Input }],
        nzTabBarStyle: [{ type: Input }],
        nzType: [{ type: Input }],
        nzLinkRouter: [{ type: Input }],
        nzLinkExact: [{ type: Input }],
        nzCanDeactivate: [{ type: Input }],
        nzOnNextClick: [{ type: Output }],
        nzOnPrevClick: [{ type: Output }],
        nzSelectChange: [{ type: Output }],
        nzSelectedIndexChange: [{ type: Output }],
        nzSelectedIndex: [{ type: Input }]
    };
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", Boolean)
    ], NzTabSetComponent.prototype, "nzShowPagination", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", Object)
    ], NzTabSetComponent.prototype, "nzAnimated", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", String)
    ], NzTabSetComponent.prototype, "nzSize", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", Number)
    ], NzTabSetComponent.prototype, "nzTabBarGutter", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", String)
    ], NzTabSetComponent.prototype, "nzType", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTabSetComponent.prototype, "nzLinkRouter", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTabSetComponent.prototype, "nzLinkExact", void 0);
    return NzTabSetComponent;
}());
export { NzTabSetComponent };
if (false) {
    /** @type {?} */
    NzTabSetComponent.ngAcceptInputType_nzLinkRouter;
    /** @type {?} */
    NzTabSetComponent.ngAcceptInputType_nzLinkExact;
    /** @type {?} */
    NzTabSetComponent.ngAcceptInputType_nzSelectedIndex;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.indexToSelect;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype._selectedIndex;
    /**
     * Subscription to tabs being added/removed.
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.tabsSubscription;
    /**
     * Subscription to changes in the tab labels.
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.tabLabelSubscription;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.destroy$;
    /** @type {?} */
    NzTabSetComponent.prototype.tabPositionMode;
    /** @type {?} */
    NzTabSetComponent.prototype.listOfNzTabComponent;
    /** @type {?} */
    NzTabSetComponent.prototype.nzTabsNavComponent;
    /** @type {?} */
    NzTabSetComponent.prototype.tabContent;
    /** @type {?} */
    NzTabSetComponent.prototype.nzTabBarExtraContent;
    /** @type {?} */
    NzTabSetComponent.prototype.nzShowPagination;
    /** @type {?} */
    NzTabSetComponent.prototype.nzAnimated;
    /** @type {?} */
    NzTabSetComponent.prototype.nzHideAll;
    /** @type {?} */
    NzTabSetComponent.prototype.nzTabPosition;
    /** @type {?} */
    NzTabSetComponent.prototype.nzSize;
    /** @type {?} */
    NzTabSetComponent.prototype.nzTabBarGutter;
    /** @type {?} */
    NzTabSetComponent.prototype.nzTabBarStyle;
    /** @type {?} */
    NzTabSetComponent.prototype.nzType;
    /** @type {?} */
    NzTabSetComponent.prototype.nzLinkRouter;
    /** @type {?} */
    NzTabSetComponent.prototype.nzLinkExact;
    /** @type {?} */
    NzTabSetComponent.prototype.nzCanDeactivate;
    /** @type {?} */
    NzTabSetComponent.prototype.nzOnNextClick;
    /** @type {?} */
    NzTabSetComponent.prototype.nzOnPrevClick;
    /** @type {?} */
    NzTabSetComponent.prototype.nzSelectChange;
    /** @type {?} */
    NzTabSetComponent.prototype.nzSelectedIndexChange;
    /** @type {?} */
    NzTabSetComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTabSetComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdGFicy8iLCJzb3VyY2VzIjpbInRhYnNldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBR0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFFVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBa0MsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RixPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXJGLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBdUIsZ0JBQWdCLEVBQXNFLE1BQU0sZUFBZSxDQUFDO0FBQzFJLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztJQUVwRCx3QkFBd0IsR0FBRyxNQUFNO0FBRXZDO0lBNkxFLDJCQUNTLGVBQWdDLEVBQy9CLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ3RCLEdBQXNCLEVBQ1Ys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QUFrRjs7SUFDbEYsK0NBQTBGOztJQUMxRix1Q0FBb0U7O0lBRXBFLGlEQUFrRDs7SUFDbEQsNkNBQWdGOztJQUNoRix1Q0FBZ0c7O0lBQ2hHLHNDQUEyQjs7SUFDM0IsMENBQThDOztJQUM5QyxtQ0FBaUY7O0lBQ2pGLDJDQUFtRjs7SUFDbkYsMENBQWdFOztJQUNoRSxtQ0FBMEU7O0lBRTFFLHlDQUE4Qzs7SUFDOUMsd0NBQTRDOztJQUM1Qyw0Q0FBOEQ7O0lBRTlELDBDQUE0RDs7SUFDNUQsMENBQTREOztJQUM1RCwyQ0FBNkc7O0lBQzdHLGtEQUE0Rjs7SUFrRjFGLDRDQUF1Qzs7Ozs7SUFDdkMscUNBQTJCOzs7OztJQUMzQix1Q0FBOEI7Ozs7O0lBQzlCLGdDQUE4Qjs7Ozs7SUFDOUIsbUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuLyoqIGdldCBzb21lIGNvZGUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIgKi9cblxuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciwgUm91dGVyTGluaywgUm91dGVyTGlua1dpdGhIcmVmIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgUFJFRklYIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2xvZ2dlcic7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE51bWJlcklucHV0LCBOelNpemVMRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgdG9OdW1iZXIsIHdyYXBJbnRvT2JzZXJ2YWJsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcblxuaW1wb3J0IHsgbWVyZ2UsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBmaXJzdCwgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOelRhYkNvbXBvbmVudCB9IGZyb20gJy4vdGFiLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekFuaW1hdGVkSW50ZXJmYWNlLCBOelRhYkNoYW5nZUV2ZW50LCBOelRhYlBvc2l0aW9uLCBOelRhYlBvc2l0aW9uTW9kZSwgTnpUYWJzQ2FuRGVhY3RpdmF0ZUZuLCBOelRhYlR5cGUgfSBmcm9tICcuL3RhYmxlLnR5cGVzJztcbmltcG9ydCB7IE56VGFic05hdkNvbXBvbmVudCB9IGZyb20gJy4vdGFicy1uYXYuY29tcG9uZW50JztcblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ3RhYnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei10YWJzZXQnLFxuICBleHBvcnRBczogJ256VGFic2V0JyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsaXN0T2ZOelRhYkNvbXBvbmVudFwiPlxuICAgICAgPG56LXRhYnMtbmF2XG4gICAgICAgIHJvbGU9XCJ0YWJsaXN0XCJcbiAgICAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgICAgW256U2l6ZV09XCJuelNpemVcIlxuICAgICAgICBbbnpUYWJQb3NpdGlvbl09XCJuelRhYlBvc2l0aW9uXCJcbiAgICAgICAgW256VHlwZV09XCJuelR5cGVcIlxuICAgICAgICBbbnpTaG93UGFnaW5hdGlvbl09XCJuelNob3dQYWdpbmF0aW9uXCJcbiAgICAgICAgW256UG9zaXRpb25Nb2RlXT1cInRhYlBvc2l0aW9uTW9kZVwiXG4gICAgICAgIFtuekFuaW1hdGVkXT1cImlua0JhckFuaW1hdGVkXCJcbiAgICAgICAgW25nU3R5bGVdPVwibnpUYWJCYXJTdHlsZVwiXG4gICAgICAgIFtuekhpZGVCYXJdPVwibnpIaWRlQWxsXCJcbiAgICAgICAgW256VGFiQmFyRXh0cmFDb250ZW50XT1cIm56VGFiQmFyRXh0cmFDb250ZW50XCJcbiAgICAgICAgW3NlbGVjdGVkSW5kZXhdPVwibnpTZWxlY3RlZEluZGV4IVwiXG4gICAgICAgIChuek9uTmV4dENsaWNrKT1cIm56T25OZXh0Q2xpY2suZW1pdCgpXCJcbiAgICAgICAgKG56T25QcmV2Q2xpY2spPVwibnpPblByZXZDbGljay5lbWl0KClcIlxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgbnotdGFiLWxhYmVsXG4gICAgICAgICAgcm9sZT1cInRhYlwiXG4gICAgICAgICAgW3N0eWxlLm1hcmdpbi1yaWdodC5weF09XCJuelRhYkJhckd1dHRlclwiXG4gICAgICAgICAgW2NsYXNzLmFudC10YWJzLXRhYi1hY3RpdmVdPVwibnpTZWxlY3RlZEluZGV4ID09IGkgJiYgIW56SGlkZUFsbFwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cInRhYi5uekRpc2FibGVkXCJcbiAgICAgICAgICAoY2xpY2spPVwiY2xpY2tMYWJlbChpLCB0YWIubnpEaXNhYmxlZClcIlxuICAgICAgICAgICpuZ0Zvcj1cImxldCB0YWIgb2YgbGlzdE9mTnpUYWJDb21wb25lbnQ7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICA+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInRhYi5uelRpdGxlIHx8IHRhYi50aXRsZVwiPnt7IHRhYi5uelRpdGxlIH19PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uei10YWJzLW5hdj5cbiAgICAgIDxkaXZcbiAgICAgICAgI3RhYkNvbnRlbnRcbiAgICAgICAgY2xhc3M9XCJhbnQtdGFicy1jb250ZW50XCJcbiAgICAgICAgW2NsYXNzLmFudC10YWJzLXRvcC1jb250ZW50XT1cIm56VGFiUG9zaXRpb24gPT09ICd0b3AnXCJcbiAgICAgICAgW2NsYXNzLmFudC10YWJzLWJvdHRvbS1jb250ZW50XT1cIm56VGFiUG9zaXRpb24gPT09ICdib3R0b20nXCJcbiAgICAgICAgW2NsYXNzLmFudC10YWJzLWxlZnQtY29udGVudF09XCJuelRhYlBvc2l0aW9uID09PSAnbGVmdCdcIlxuICAgICAgICBbY2xhc3MuYW50LXRhYnMtcmlnaHQtY29udGVudF09XCJuelRhYlBvc2l0aW9uID09PSAncmlnaHQnXCJcbiAgICAgICAgW2NsYXNzLmFudC10YWJzLWNvbnRlbnQtYW5pbWF0ZWRdPVwidGFiUGFuZUFuaW1hdGVkXCJcbiAgICAgICAgW2NsYXNzLmFudC10YWJzLWNhcmQtY29udGVudF09XCJuelR5cGUgPT09ICdjYXJkJ1wiXG4gICAgICAgIFtjbGFzcy5hbnQtdGFicy1jb250ZW50LW5vLWFuaW1hdGVkXT1cIiF0YWJQYW5lQW5pbWF0ZWRcIlxuICAgICAgICBbc3R5bGUubWFyZ2luLWxlZnQuJV09XCJ0YWJQb3NpdGlvbk1vZGUgPT09ICdob3Jpem9udGFsJyAmJiB0YWJQYW5lQW5pbWF0ZWQgJiYgLShuelNlbGVjdGVkSW5kZXggfHwgMCkgKiAxMDBcIlxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgbnotdGFiLWJvZHlcbiAgICAgICAgICBjbGFzcz1cImFudC10YWJzLXRhYnBhbmVcIlxuICAgICAgICAgICpuZ0Zvcj1cImxldCB0YWIgb2YgbGlzdE9mTnpUYWJDb21wb25lbnQ7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgIFthY3RpdmVdPVwibnpTZWxlY3RlZEluZGV4ID09IGkgJiYgIW56SGlkZUFsbFwiXG4gICAgICAgICAgW2ZvcmNlUmVuZGVyXT1cInRhYi5uekZvcmNlUmVuZGVyXCJcbiAgICAgICAgICBbY29udGVudF09XCJ0YWIudGVtcGxhdGUgfHwgdGFiLmNvbnRlbnRcIlxuICAgICAgICA+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXRhYnNdJzogYHRydWVgLFxuICAgICdbY2xhc3MuYW50LXRhYnMtbm8tYW5pbWF0aW9uXSc6IGBpc0FuaW1hdGlvbkRpc2FibGVkYCxcbiAgICAnW2NsYXNzLmFudC10YWJzLWxpbmVdJzogYG56VHlwZSA9PT0gJ2xpbmUnYCxcbiAgICAnW2NsYXNzLmFudC10YWJzLWNhcmRdJzogYG56VHlwZSA9PT0gJ2NhcmQnYCxcbiAgICAnW2NsYXNzLmFudC10YWJzLXRvcF0nOiBgbnpUYWJQb3NpdGlvbiA9PT0gJ3RvcCdgLFxuICAgICdbY2xhc3MuYW50LXRhYnMtYm90dG9tXSc6IGBuelRhYlBvc2l0aW9uID09PSAnYm90dG9tJ2AsXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1sZWZ0XSc6IGBuelRhYlBvc2l0aW9uID09PSAnbGVmdCdgLFxuICAgICdbY2xhc3MuYW50LXRhYnMtcmlnaHRdJzogYG56VGFiUG9zaXRpb24gPT09ICdyaWdodCdgLFxuICAgICdbY2xhc3MuYW50LXRhYnMtdmVydGljYWxdJzogYG56VGFiUG9zaXRpb24gPT09ICdsZWZ0JyB8fCBuelRhYlBvc2l0aW9uID09PSAncmlnaHQnYCxcbiAgICAnW2NsYXNzLmFudC10YWJzLWxhcmdlXSc6IGBuelNpemUgPT09ICdsYXJnZSdgLFxuICAgICdbY2xhc3MuYW50LXRhYnMtc21hbGxdJzogYG56U2l6ZSA9PT0gJ3NtYWxsJ2BcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelRhYlNldENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQsIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256TGlua1JvdXRlcjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpMaW5rRXhhY3Q6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2VsZWN0ZWRJbmRleDogTnVtYmVySW5wdXQ7XG5cbiAgcHJpdmF0ZSBpbmRleFRvU2VsZWN0OiBudW1iZXIgfCBudWxsID0gMDtcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIC8qKiBTdWJzY3JpcHRpb24gdG8gdGFicyBiZWluZyBhZGRlZC9yZW1vdmVkLiAqL1xuICBwcml2YXRlIHRhYnNTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIC8qKiBTdWJzY3JpcHRpb24gdG8gY2hhbmdlcyBpbiB0aGUgdGFiIGxhYmVscy4gKi9cbiAgcHJpdmF0ZSB0YWJMYWJlbFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHRhYlBvc2l0aW9uTW9kZTogTnpUYWJQb3NpdGlvbk1vZGUgPSAnaG9yaXpvbnRhbCc7XG4gIEBDb250ZW50Q2hpbGRyZW4oTnpUYWJDb21wb25lbnQpIGxpc3RPZk56VGFiQ29tcG9uZW50ITogUXVlcnlMaXN0PE56VGFiQ29tcG9uZW50PjtcbiAgQFZpZXdDaGlsZChOelRhYnNOYXZDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KSBuelRhYnNOYXZDb21wb25lbnQ/OiBOelRhYnNOYXZDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ3RhYkNvbnRlbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgdGFiQ29udGVudD86IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KCkgbnpUYWJCYXJFeHRyYUNvbnRlbnQ/OiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBuelNob3dQYWdpbmF0aW9uOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBuekFuaW1hdGVkOiBOekFuaW1hdGVkSW50ZXJmYWNlIHwgYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIG56SGlkZUFsbCA9IGZhbHNlO1xuICBASW5wdXQoKSBuelRhYlBvc2l0aW9uOiBOelRhYlBvc2l0aW9uID0gJ3RvcCc7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgbnpTaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIG56VGFiQmFyR3V0dGVyPzogbnVtYmVyID0gdW5kZWZpbmVkO1xuICBASW5wdXQoKSBuelRhYkJhclN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgbnpUeXBlOiBOelRhYlR5cGUgPSAnbGluZSc7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TGlua1JvdXRlciA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpMaW5rRXhhY3QgPSB0cnVlO1xuICBASW5wdXQoKSBuekNhbkRlYWN0aXZhdGU6IE56VGFic0NhbkRlYWN0aXZhdGVGbiB8IG51bGwgPSBudWxsO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uTmV4dENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPblByZXZDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VsZWN0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8TnpUYWJDaGFuZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE56VGFiQ2hhbmdlRXZlbnQ+KHRydWUpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWxlY3RlZEluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNlbGVjdGVkSW5kZXgodmFsdWU6IG51bWJlciB8IG51bGwpIHtcbiAgICB0aGlzLmluZGV4VG9TZWxlY3QgPSB2YWx1ZSA/IHRvTnVtYmVyKHZhbHVlLCBudWxsKSA6IG51bGw7XG4gIH1cblxuICBnZXQgbnpTZWxlY3RlZEluZGV4KCk6IG51bWJlciB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4O1xuICB9XG5cbiAgZ2V0IGlua0JhckFuaW1hdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56QW5pbWF0ZWQgPT09IHRydWUgfHwgKHRoaXMubnpBbmltYXRlZCBhcyBOekFuaW1hdGVkSW50ZXJmYWNlKS5pbmtCYXIgPT09IHRydWU7XG4gIH1cblxuICBnZXQgdGFiUGFuZUFuaW1hdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56QW5pbWF0ZWQgPT09IHRydWUgfHwgKHRoaXMubnpBbmltYXRlZCBhcyBOekFuaW1hdGVkSW50ZXJmYWNlKS50YWJQYW5lID09PSB0cnVlO1xuICB9XG5cbiAgZ2V0IGlzQW5pbWF0aW9uRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpBbmltYXRlZCA9PT0gZmFsc2UgfHwgKHRoaXMubnpBbmltYXRlZCBhcyBOekFuaW1hdGVkSW50ZXJmYWNlKS50YWJQYW5lID09PSBmYWxzZTtcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHZhbHVlOiBOelRhYlBvc2l0aW9uKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGFiQ29udGVudCkge1xuICAgICAgaWYgKHZhbHVlID09PSAnYm90dG9tJykge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLmVsLCB0aGlzLnRhYkNvbnRlbnQubmF0aXZlRWxlbWVudCwgdGhpcy5uelRhYnNOYXZDb21wb25lbnQhLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLmVsLCB0aGlzLm56VGFic05hdkNvbXBvbmVudCEuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLnRhYkNvbnRlbnQubmF0aXZlRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xpY2tMYWJlbChpbmRleDogbnVtYmVyLCBkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGlmICh0aGlzLm56U2VsZWN0ZWRJbmRleCAhPT0gbnVsbCAmJiB0aGlzLm56U2VsZWN0ZWRJbmRleCAhPT0gaW5kZXggJiYgdHlwZW9mIHRoaXMubnpDYW5EZWFjdGl2YXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG9ic2VydmFibGUgPSB3cmFwSW50b09ic2VydmFibGUodGhpcy5uekNhbkRlYWN0aXZhdGUodGhpcy5uelNlbGVjdGVkSW5kZXgsIGluZGV4KSk7XG4gICAgICAgIG9ic2VydmFibGUucGlwZShmaXJzdCgpLCB0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShjYW5DaGFuZ2UgPT4gY2FuQ2hhbmdlICYmIHRoaXMuZW1pdENsaWNrRXZlbnQoaW5kZXgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZW1pdENsaWNrRXZlbnQoaW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZW1pdENsaWNrRXZlbnQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHRhYnMgPSB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LnRvQXJyYXkoKTtcbiAgICB0aGlzLm56U2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgIHRhYnNbaW5kZXhdLm56Q2xpY2suZW1pdCgpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgY3JlYXRlQ2hhbmdlRXZlbnQoaW5kZXg6IG51bWJlcik6IE56VGFiQ2hhbmdlRXZlbnQge1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IE56VGFiQ2hhbmdlRXZlbnQoKTtcbiAgICBldmVudC5pbmRleCA9IGluZGV4O1xuICAgIGlmICh0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50ICYmIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQubGVuZ3RoKSB7XG4gICAgICBldmVudC50YWIgPSB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LnRvQXJyYXkoKVtpbmRleF07XG4gICAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgaWYgKGkgIT09IGluZGV4KSB7XG4gICAgICAgICAgaXRlbS5uekRlc2VsZWN0LmVtaXQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBldmVudC50YWIubnpTZWxlY3QuZW1pdCgpO1xuICAgIH1cbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cblxuICAvKiogQ2xhbXBzIHRoZSBnaXZlbiBpbmRleCB0byB0aGUgYm91bmRzIG9mIDAgYW5kIHRoZSB0YWJzIGxlbmd0aC4gKi9cbiAgcHJpdmF0ZSBjbGFtcFRhYkluZGV4KGluZGV4OiBudW1iZXIgfCBudWxsKTogbnVtYmVyIHtcbiAgICAvLyBOb3RlIHRoZSBgfHwgMGAsIHdoaWNoIGVuc3VyZXMgdGhhdCB2YWx1ZXMgbGlrZSBOYU4gY2FuJ3QgZ2V0IHRocm91Z2hcbiAgICAvLyBhbmQgd2hpY2ggd291bGQgb3RoZXJ3aXNlIHRocm93IHRoZSBjb21wb25lbnQgaW50byBhbiBpbmZpbml0ZSBsb29wXG4gICAgLy8gKHNpbmNlIE1hdGgubWF4KE5hTiwgMCkgPT09IE5hTikuXG4gICAgcmV0dXJuIE1hdGgubWluKHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQubGVuZ3RoIC0gMSwgTWF0aC5tYXgoaW5kZXggfHwgMCwgMCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVUb1RhYkxhYmVscygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50YWJMYWJlbFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy50YWJMYWJlbFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICB0aGlzLnRhYkxhYmVsU3Vic2NyaXB0aW9uID0gbWVyZ2UoLi4udGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5tYXAodGFiID0+IHRhYi5zdGF0ZUNoYW5nZXMpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jZHIubWFya0ZvckNoZWNrKCkpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG56VGFiUG9zaXRpb24sIG56VHlwZSB9ID0gY2hhbmdlcztcbiAgICBpZiAobnpUYWJQb3NpdGlvbikge1xuICAgICAgaWYgKHRoaXMubnpUYWJQb3NpdGlvbiA9PT0gJ3RvcCcgfHwgdGhpcy5uelRhYlBvc2l0aW9uID09PSAnYm90dG9tJykge1xuICAgICAgICB0aGlzLnRhYlBvc2l0aW9uTW9kZSA9ICdob3Jpem9udGFsJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGFiUG9zaXRpb25Nb2RlID0gJ3ZlcnRpY2FsJztcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5uelRhYlBvc2l0aW9uKTtcbiAgICB9XG4gICAgaWYgKG56VHlwZSkge1xuICAgICAgaWYgKHRoaXMubnpUeXBlID09PSAnY2FyZCcpIHtcbiAgICAgICAgdGhpcy5uekFuaW1hdGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50ICYmIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQubGVuZ3RoKSB7XG4gICAgICAvLyBEb24ndCBjbGFtcCB0aGUgYGluZGV4VG9TZWxlY3RgIGltbWVkaWF0ZWx5IGluIHRoZSBzZXR0ZXIgYmVjYXVzZSBpdCBjYW4gaGFwcGVuIHRoYXRcbiAgICAgIC8vIHRoZSBhbW91bnQgb2YgdGFicyBjaGFuZ2VzIGJlZm9yZSB0aGUgYWN0dWFsIGNoYW5nZSBkZXRlY3Rpb24gcnVucy5cbiAgICAgIGNvbnN0IGluZGV4VG9TZWxlY3QgPSAodGhpcy5pbmRleFRvU2VsZWN0ID0gdGhpcy5jbGFtcFRhYkluZGV4KHRoaXMuaW5kZXhUb1NlbGVjdCkpO1xuICAgICAgLy8gSWYgdGhlcmUgaXMgYSBjaGFuZ2UgaW4gc2VsZWN0ZWQgaW5kZXgsIGVtaXQgYSBjaGFuZ2UgZXZlbnQuIFNob3VsZCBub3QgdHJpZ2dlciBpZlxuICAgICAgLy8gdGhlIHNlbGVjdGVkIGluZGV4IGhhcyBub3QgeWV0IGJlZW4gaW5pdGlhbGl6ZWQuXG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCAhPT0gaW5kZXhUb1NlbGVjdCkge1xuICAgICAgICBjb25zdCBpc0ZpcnN0UnVuID0gdGhpcy5fc2VsZWN0ZWRJbmRleCA9PSBudWxsO1xuICAgICAgICBpZiAoIWlzRmlyc3RSdW4pIHtcbiAgICAgICAgICB0aGlzLm56U2VsZWN0Q2hhbmdlLmVtaXQodGhpcy5jcmVhdGVDaGFuZ2VFdmVudChpbmRleFRvU2VsZWN0KSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGFuZ2luZyB0aGVzZSB2YWx1ZXMgYWZ0ZXIgY2hhbmdlIGRldGVjdGlvbiBoYXMgcnVuXG4gICAgICAgIC8vIHNpbmNlIHRoZSBjaGVja2VkIGNvbnRlbnQgbWF5IGNvbnRhaW4gcmVmZXJlbmNlcyB0byB0aGVtLlxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LmZvckVhY2goKHRhYiwgaW5kZXgpID0+ICh0YWIuaXNBY3RpdmUgPSBpbmRleCA9PT0gaW5kZXhUb1NlbGVjdCkpO1xuXG4gICAgICAgICAgaWYgKCFpc0ZpcnN0UnVuKSB7XG4gICAgICAgICAgICB0aGlzLm56U2VsZWN0ZWRJbmRleENoYW5nZS5lbWl0KGluZGV4VG9TZWxlY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNldHVwIHRoZSBwb3NpdGlvbiBmb3IgZWFjaCB0YWIgYW5kIG9wdGlvbmFsbHkgc2V0dXAgYW4gb3JpZ2luIG9uIHRoZSBuZXh0IHNlbGVjdGVkIHRhYi5cbiAgICAgIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQuZm9yRWFjaCgodGFiOiBOelRhYkNvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICB0YWIucG9zaXRpb24gPSBpbmRleCAtIGluZGV4VG9TZWxlY3Q7XG5cbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlbGVjdGVkIHRhYiwgdGhlbiBzZXQgdXAgYW4gb3JpZ2luIGZvciB0aGUgbmV4dCBzZWxlY3RlZCB0YWJcbiAgICAgICAgLy8gaWYgaXQgZG9lc24ndCBoYXZlIG9uZSBhbHJlYWR5LlxuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCAhPSBudWxsICYmIHRhYi5wb3NpdGlvbiA9PT0gMCAmJiAhdGFiLm9yaWdpbikge1xuICAgICAgICAgIHRhYi5vcmlnaW4gPSBpbmRleFRvU2VsZWN0IC0gdGhpcy5fc2VsZWN0ZWRJbmRleDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9PSBpbmRleFRvU2VsZWN0KSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSBpbmRleFRvU2VsZWN0O1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpYmVUb1RhYkxhYmVscygpO1xuICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5uelRhYlBvc2l0aW9uKTtcblxuICAgIGlmICh0aGlzLm56TGlua1JvdXRlcikge1xuICAgICAgaWYgKCF0aGlzLnJvdXRlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7UFJFRklYfSB5b3Ugc2hvdWxkIGltcG9ydCAnUm91dGVyTW9kdWxlJyBpZiB5b3Ugd2FudCB0byB1c2UgJ256TGlua1JvdXRlcichYCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucm91dGVyLmV2ZW50c1xuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICAgICAgZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLFxuICAgICAgICAgIHN0YXJ0V2l0aCh0cnVlKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMudXBkYXRlUm91dGVyQWN0aXZlKCk7XG4gICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBTdWJzY3JpYmUgdG8gY2hhbmdlcyBpbiB0aGUgYW1vdW50IG9mIHRhYnMsIGluIG9yZGVyIHRvIGJlXG4gICAgLy8gYWJsZSB0byByZS1yZW5kZXIgdGhlIGNvbnRlbnQgYXMgbmV3IHRhYnMgYXJlIGFkZGVkIG9yIHJlbW92ZWQuXG4gICAgdGhpcy50YWJzU3Vic2NyaXB0aW9uID0gdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCBpbmRleFRvU2VsZWN0ID0gdGhpcy5jbGFtcFRhYkluZGV4KHRoaXMuaW5kZXhUb1NlbGVjdCk7XG5cbiAgICAgIC8vIE1haW50YWluIHRoZSBwcmV2aW91c2x5LXNlbGVjdGVkIHRhYiBpZiBhIG5ldyB0YWIgaXMgYWRkZWQgb3IgcmVtb3ZlZCBhbmQgdGhlcmUgaXMgbm9cbiAgICAgIC8vIGV4cGxpY2l0IGNoYW5nZSB0aGF0IHNlbGVjdHMgYSBkaWZmZXJlbnQgdGFiLlxuICAgICAgaWYgKGluZGV4VG9TZWxlY3QgPT09IHRoaXMuX3NlbGVjdGVkSW5kZXgpIHtcbiAgICAgICAgY29uc3QgdGFicyA9IHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQudG9BcnJheSgpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0YWJzW2ldLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICAvLyBBc3NpZ24gYm90aCB0byB0aGUgYF9pbmRleFRvU2VsZWN0YCBhbmQgYF9zZWxlY3RlZEluZGV4YCBzbyB3ZSBkb24ndCBmaXJlIGEgY2hhbmdlZFxuICAgICAgICAgICAgLy8gZXZlbnQsIG90aGVyd2lzZSB0aGUgY29uc3VtZXIgbWF5IGVuZCB1cCBpbiBhbiBpbmZpbml0ZSBsb29wIGluIHNvbWUgZWRnZSBjYXNlcyBsaWtlXG4gICAgICAgICAgICAvLyBhZGRpbmcgYSB0YWIgd2l0aGluIHRoZSBgc2VsZWN0ZWRJbmRleENoYW5nZWAgZXZlbnQuXG4gICAgICAgICAgICB0aGlzLmluZGV4VG9TZWxlY3QgPSB0aGlzLl9zZWxlY3RlZEluZGV4ID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnN1YnNjcmliZVRvVGFiTGFiZWxzKCk7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudGFic1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMudGFiTGFiZWxTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVJvdXRlckFjdGl2ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIubmF2aWdhdGVkKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZFNob3VsZEFjdGl2ZVRhYkluZGV4KCk7XG4gICAgICBpZiAoaW5kZXggIT09IHRoaXMuX3NlbGVjdGVkSW5kZXgpIHtcbiAgICAgICAgdGhpcy5uelNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5uelNlbGVjdGVkSW5kZXhDaGFuZ2UuZW1pdChpbmRleCk7XG4gICAgICB9XG4gICAgICB0aGlzLm56SGlkZUFsbCA9IGluZGV4ID09PSAtMTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpbmRTaG91bGRBY3RpdmVUYWJJbmRleCgpOiBudW1iZXIge1xuICAgIGNvbnN0IHRhYnMgPSB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LnRvQXJyYXkoKTtcbiAgICBjb25zdCBpc0FjdGl2ZSA9IHRoaXMuaXNMaW5rQWN0aXZlKHRoaXMucm91dGVyKTtcblxuICAgIHJldHVybiB0YWJzLmZpbmRJbmRleCh0YWIgPT4ge1xuICAgICAgY29uc3QgYyA9IHRhYi5saW5rRGlyZWN0aXZlO1xuICAgICAgcmV0dXJuIGMgPyBpc0FjdGl2ZShjLnJvdXRlckxpbmspIHx8IGlzQWN0aXZlKGMucm91dGVyTGlua1dpdGhIcmVmKSA6IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0xpbmtBY3RpdmUocm91dGVyOiBSb3V0ZXIpOiAobGluaz86IFJvdXRlckxpbmsgfCBSb3V0ZXJMaW5rV2l0aEhyZWYpID0+IGJvb2xlYW4ge1xuICAgIHJldHVybiAobGluaz86IFJvdXRlckxpbmsgfCBSb3V0ZXJMaW5rV2l0aEhyZWYpID0+IChsaW5rID8gcm91dGVyLmlzQWN0aXZlKGxpbmsudXJsVHJlZSwgdGhpcy5uekxpbmtFeGFjdCkgOiBmYWxzZSk7XG4gIH1cbn1cbiJdfQ==