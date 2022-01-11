/**
 * @fileoverview added by tsickle
 * Generated from: col.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Host, Input, Optional, Renderer2 } from '@angular/core';
import { isNotNil } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzRowDirective } from './row.directive';
/**
 * @record
 */
export function EmbeddedProperty() { }
if (false) {
    /** @type {?|undefined} */
    EmbeddedProperty.prototype.span;
    /** @type {?|undefined} */
    EmbeddedProperty.prototype.pull;
    /** @type {?|undefined} */
    EmbeddedProperty.prototype.push;
    /** @type {?|undefined} */
    EmbeddedProperty.prototype.offset;
    /** @type {?|undefined} */
    EmbeddedProperty.prototype.order;
}
export class NzColDirective {
    /**
     * @param {?} elementRef
     * @param {?} nzRowDirective
     * @param {?} renderer
     */
    constructor(elementRef, nzRowDirective, renderer) {
        this.elementRef = elementRef;
        this.nzRowDirective = nzRowDirective;
        this.renderer = renderer;
        this.classMap = {};
        this.destroy$ = new Subject();
        this.hostFlexStyle = null;
        this.nzFlex = null;
        this.nzSpan = null;
        this.nzOrder = null;
        this.nzOffset = null;
        this.nzPush = null;
        this.nzPull = null;
        this.nzXs = null;
        this.nzSm = null;
        this.nzMd = null;
        this.nzLg = null;
        this.nzXl = null;
        this.nzXXl = null;
    }
    /**
     * @return {?}
     */
    setHostClassMap() {
        /** @type {?} */
        const hostClassMap = Object.assign({ ['ant-col']: true, [`ant-col-${this.nzSpan}`]: isNotNil(this.nzSpan), [`ant-col-order-${this.nzOrder}`]: isNotNil(this.nzOrder), [`ant-col-offset-${this.nzOffset}`]: isNotNil(this.nzOffset), [`ant-col-pull-${this.nzPull}`]: isNotNil(this.nzPull), [`ant-col-push-${this.nzPush}`]: isNotNil(this.nzPush) }, this.generateClass());
        for (const i in this.classMap) {
            if (this.classMap.hasOwnProperty(i)) {
                this.renderer.removeClass(this.elementRef.nativeElement, i);
            }
        }
        this.classMap = Object.assign({}, hostClassMap);
        for (const i in this.classMap) {
            if (this.classMap.hasOwnProperty(i) && this.classMap[i]) {
                this.renderer.addClass(this.elementRef.nativeElement, i);
            }
        }
    }
    /**
     * @return {?}
     */
    setHostFlexStyle() {
        this.hostFlexStyle = this.parseFlex(this.nzFlex);
    }
    /**
     * @param {?} flex
     * @return {?}
     */
    parseFlex(flex) {
        if (typeof flex === 'number') {
            return `${flex} ${flex} auto`;
        }
        else if (typeof flex === 'string') {
            if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
                return `0 0 ${flex}`;
            }
        }
        return flex;
    }
    /**
     * @return {?}
     */
    generateClass() {
        /** @type {?} */
        const listOfSizeInputName = ['nzXs', 'nzSm', 'nzMd', 'nzLg', 'nzXl', 'nzXXl'];
        /** @type {?} */
        const listClassMap = {};
        listOfSizeInputName.forEach((/**
         * @param {?} name
         * @return {?}
         */
        name => {
            /** @type {?} */
            const sizeName = name.replace('nz', '').toLowerCase();
            if (isNotNil(this[name])) {
                if (typeof this[name] === 'number' || typeof this[name] === 'string') {
                    listClassMap[`ant-col-${sizeName}-${this[name]}`] = true;
                }
                else {
                    /** @type {?} */
                    const embedded = (/** @type {?} */ (this[name]));
                    /** @type {?} */
                    const prefixArray = ['span', 'pull', 'push', 'offset', 'order'];
                    prefixArray.forEach((/**
                     * @param {?} prefix
                     * @return {?}
                     */
                    prefix => {
                        /** @type {?} */
                        const prefixClass = prefix === 'span' ? '-' : `-${prefix}-`;
                        listClassMap[`ant-col-${sizeName}${prefixClass}${embedded[prefix]}`] = embedded && isNotNil(embedded[prefix]);
                    }));
                }
            }
        }));
        return listClassMap;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setHostClassMap();
        this.setHostFlexStyle();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.setHostClassMap();
        const { nzFlex } = changes;
        if (nzFlex) {
            this.setHostFlexStyle();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.nzRowDirective) {
            this.nzRowDirective.actualGutter$.pipe(takeUntil(this.destroy$)).subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            ([horizontalGutter, verticalGutter]) => {
                /** @type {?} */
                const renderGutter = (/**
                 * @param {?} name
                 * @param {?} gutter
                 * @return {?}
                 */
                (name, gutter) => {
                    /** @type {?} */
                    const nativeElement = this.elementRef.nativeElement;
                    if (gutter !== null) {
                        this.renderer.setStyle(nativeElement, name, `${gutter / 2}px`);
                    }
                });
                renderGutter('padding-left', horizontalGutter);
                renderGutter('padding-right', horizontalGutter);
                renderGutter('padding-top', verticalGutter);
                renderGutter('padding-bottom', verticalGutter);
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzColDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-col],nz-col,nz-form-control,nz-form-label',
                exportAs: 'nzCol',
                host: {
                    '[style.flex]': 'hostFlexStyle'
                }
            },] }
];
/** @nocollapse */
NzColDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
    { type: Renderer2 }
];
NzColDirective.propDecorators = {
    nzFlex: [{ type: Input }],
    nzSpan: [{ type: Input }],
    nzOrder: [{ type: Input }],
    nzOffset: [{ type: Input }],
    nzPush: [{ type: Input }],
    nzPull: [{ type: Input }],
    nzXs: [{ type: Input }],
    nzSm: [{ type: Input }],
    nzMd: [{ type: Input }],
    nzLg: [{ type: Input }],
    nzXl: [{ type: Input }],
    nzXXl: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzColDirective.prototype.classMap;
    /**
     * @type {?}
     * @private
     */
    NzColDirective.prototype.destroy$;
    /** @type {?} */
    NzColDirective.prototype.hostFlexStyle;
    /** @type {?} */
    NzColDirective.prototype.nzFlex;
    /** @type {?} */
    NzColDirective.prototype.nzSpan;
    /** @type {?} */
    NzColDirective.prototype.nzOrder;
    /** @type {?} */
    NzColDirective.prototype.nzOffset;
    /** @type {?} */
    NzColDirective.prototype.nzPush;
    /** @type {?} */
    NzColDirective.prototype.nzPull;
    /** @type {?} */
    NzColDirective.prototype.nzXs;
    /** @type {?} */
    NzColDirective.prototype.nzSm;
    /** @type {?} */
    NzColDirective.prototype.nzMd;
    /** @type {?} */
    NzColDirective.prototype.nzLg;
    /** @type {?} */
    NzColDirective.prototype.nzXl;
    /** @type {?} */
    NzColDirective.prototype.nzXXl;
    /**
     * @type {?}
     * @private
     */
    NzColDirective.prototype.elementRef;
    /** @type {?} */
    NzColDirective.prototype.nzRowDirective;
    /** @type {?} */
    NzColDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZ3JpZC8iLCJzb3VyY2VzIjpbImNvbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFJTCxRQUFRLEVBQ1IsU0FBUyxFQUVWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFFakQsc0NBTUM7OztJQUxDLGdDQUFjOztJQUNkLGdDQUFjOztJQUNkLGdDQUFjOztJQUNkLGtDQUFnQjs7SUFDaEIsaUNBQWU7O0FBVWpCLE1BQU0sT0FBTyxjQUFjOzs7Ozs7SUE0RXpCLFlBQW9CLFVBQXNCLEVBQTZCLGNBQThCLEVBQVMsUUFBbUI7UUFBN0csZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUE2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBM0V6SCxhQUFRLEdBQStCLEVBQUUsQ0FBQztRQUMxQyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNqQyxrQkFBYSxHQUFrQixJQUFJLENBQUM7UUFDM0IsV0FBTSxHQUEyQixJQUFJLENBQUM7UUFDdEMsV0FBTSxHQUEyQixJQUFJLENBQUM7UUFDdEMsWUFBTyxHQUEyQixJQUFJLENBQUM7UUFDdkMsYUFBUSxHQUEyQixJQUFJLENBQUM7UUFDeEMsV0FBTSxHQUEyQixJQUFJLENBQUM7UUFDdEMsV0FBTSxHQUEyQixJQUFJLENBQUM7UUFDdEMsU0FBSSxHQUE4QyxJ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Q0wsS0FBSztxQkFDTCxLQUFLO3FCQUNMLEtBQUs7bUJBQ0wsS0FBSzttQkFDTCxLQUFLO21CQUNMLEtBQUs7bUJBQ0wsS0FBSzttQkFDTCxLQUFLO29CQUNMLEtBQUs7Ozs7Ozs7SUFkTixrQ0FBa0Q7Ozs7O0lBQ2xELGtDQUFpQzs7SUFDakMsdUNBQW9DOztJQUNwQyxnQ0FBK0M7O0lBQy9DLGdDQUErQzs7SUFDL0MsaUNBQWdEOztJQUNoRCxrQ0FBaUQ7O0lBQ2pELGdDQUErQzs7SUFDL0MsZ0NBQStDOztJQUMvQyw4QkFBZ0U7O0lBQ2hFLDhCQUFnRTs7SUFDaEUsOEJBQWdFOztJQUNoRSw4QkFBZ0U7O0lBQ2hFLDhCQUFnRTs7SUFDaEUsK0JBQWlFOzs7OztJQTZEckQsb0NBQThCOztJQUFFLHdDQUF5RDs7SUFBRSxrQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDbGFzc0ludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE56Um93RGlyZWN0aXZlIH0gZnJvbSAnLi9yb3cuZGlyZWN0aXZlJztcblxuZXhwb3J0IGludGVyZmFjZSBFbWJlZGRlZFByb3BlcnR5IHtcbiAgc3Bhbj86IG51bWJlcjtcbiAgcHVsbD86IG51bWJlcjtcbiAgcHVzaD86IG51bWJlcjtcbiAgb2Zmc2V0PzogbnVtYmVyO1xuICBvcmRlcj86IG51bWJlcjtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LWNvbF0sbnotY29sLG56LWZvcm0tY29udHJvbCxuei1mb3JtLWxhYmVsJyxcbiAgZXhwb3J0QXM6ICduekNvbCcsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLmZsZXhdJzogJ2hvc3RGbGV4U3R5bGUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpDb2xEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBjbGFzc01hcDogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIGhvc3RGbGV4U3R5bGU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuekZsZXg6IHN0cmluZyB8IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuelNwYW46IHN0cmluZyB8IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuek9yZGVyOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpPZmZzZXQ6IHN0cmluZyB8IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuelB1c2g6IHN0cmluZyB8IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuelB1bGw6IHN0cmluZyB8IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuelhzOiBzdHJpbmcgfCBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56U206IHN0cmluZyB8IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHkgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpNZDogc3RyaW5nIHwgbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eSB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuekxnOiBzdHJpbmcgfCBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56WGw6IHN0cmluZyB8IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHkgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpYWGw6IHN0cmluZyB8IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHkgfCBudWxsID0gbnVsbDtcblxuICBzZXRIb3N0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgY29uc3QgaG9zdENsYXNzTWFwID0ge1xuICAgICAgWydhbnQtY29sJ106IHRydWUsXG4gICAgICBbYGFudC1jb2wtJHt0aGlzLm56U3Bhbn1gXTogaXNOb3ROaWwodGhpcy5uelNwYW4pLFxuICAgICAgW2BhbnQtY29sLW9yZGVyLSR7dGhpcy5uek9yZGVyfWBdOiBpc05vdE5pbCh0aGlzLm56T3JkZXIpLFxuICAgICAgW2BhbnQtY29sLW9mZnNldC0ke3RoaXMubnpPZmZzZXR9YF06IGlzTm90TmlsKHRoaXMubnpPZmZzZXQpLFxuICAgICAgW2BhbnQtY29sLXB1bGwtJHt0aGlzLm56UHVsbH1gXTogaXNOb3ROaWwodGhpcy5uelB1bGwpLFxuICAgICAgW2BhbnQtY29sLXB1c2gtJHt0aGlzLm56UHVzaH1gXTogaXNOb3ROaWwodGhpcy5uelB1c2gpLFxuICAgICAgLi4udGhpcy5nZW5lcmF0ZUNsYXNzKClcbiAgICB9O1xuICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLmNsYXNzTWFwKSB7XG4gICAgICBpZiAodGhpcy5jbGFzc01hcC5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jbGFzc01hcCA9IHsgLi4uaG9zdENsYXNzTWFwIH07XG4gICAgZm9yIChjb25zdCBpIGluIHRoaXMuY2xhc3NNYXApIHtcbiAgICAgIGlmICh0aGlzLmNsYXNzTWFwLmhhc093blByb3BlcnR5KGkpICYmIHRoaXMuY2xhc3NNYXBbaV0pIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgaSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0SG9zdEZsZXhTdHlsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmhvc3RGbGV4U3R5bGUgPSB0aGlzLnBhcnNlRmxleCh0aGlzLm56RmxleCk7XG4gIH1cblxuICBwYXJzZUZsZXgoZmxleDogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbCk6IHN0cmluZyB8IG51bGwge1xuICAgIGlmICh0eXBlb2YgZmxleCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiBgJHtmbGV4fSAke2ZsZXh9IGF1dG9gO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZsZXggPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoL15cXGQrKFxcLlxcZCspPyhweHxlbXxyZW18JSkkLy50ZXN0KGZsZXgpKSB7XG4gICAgICAgIHJldHVybiBgMCAwICR7ZmxleH1gO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmxleDtcbiAgfVxuXG4gIGdlbmVyYXRlQ2xhc3MoKTogb2JqZWN0IHtcbiAgICBjb25zdCBsaXN0T2ZTaXplSW5wdXROYW1lOiBBcnJheTxrZXlvZiBOekNvbERpcmVjdGl2ZT4gPSBbJ256WHMnLCAnbnpTbScsICduek1kJywgJ256TGcnLCAnbnpYbCcsICduelhYbCddO1xuICAgIGNvbnN0IGxpc3RDbGFzc01hcDogTmdDbGFzc0ludGVyZmFjZSA9IHt9O1xuICAgIGxpc3RPZlNpemVJbnB1dE5hbWUuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIGNvbnN0IHNpemVOYW1lID0gbmFtZS5yZXBsYWNlKCdueicsICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKGlzTm90TmlsKHRoaXNbbmFtZV0pKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpc1tuYW1lXSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHRoaXNbbmFtZV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgbGlzdENsYXNzTWFwW2BhbnQtY29sLSR7c2l6ZU5hbWV9LSR7dGhpc1tuYW1lXX1gXSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZW1iZWRkZWQgPSB0aGlzW25hbWVdIGFzIEVtYmVkZGVkUHJvcGVydHk7XG4gICAgICAgICAgY29uc3QgcHJlZml4QXJyYXk6IEFycmF5PGtleW9mIEVtYmVkZGVkUHJvcGVydHk+ID0gWydzcGFuJywgJ3B1bGwnLCAncHVzaCcsICdvZmZzZXQnLCAnb3JkZXInXTtcbiAgICAgICAgICBwcmVmaXhBcnJheS5mb3JFYWNoKHByZWZpeCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmVmaXhDbGFzcyA9IHByZWZpeCA9PT0gJ3NwYW4nID8gJy0nIDogYC0ke3ByZWZpeH0tYDtcbiAgICAgICAgICAgIGxpc3RDbGFzc01hcFtgYW50LWNvbC0ke3NpemVOYW1lfSR7cHJlZml4Q2xhc3N9JHtlbWJlZGRlZFtwcmVmaXhdfWBdID0gZW1iZWRkZWQgJiYgaXNOb3ROaWwoZW1iZWRkZWRbcHJlZml4XSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbGlzdENsYXNzTWFwO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBAT3B0aW9uYWwoKSBASG9zdCgpIHB1YmxpYyBuelJvd0RpcmVjdGl2ZTogTnpSb3dEaXJlY3RpdmUsIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0SG9zdENsYXNzTWFwKCk7XG4gICAgdGhpcy5zZXRIb3N0RmxleFN0eWxlKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5zZXRIb3N0Q2xhc3NNYXAoKTtcbiAgICBjb25zdCB7IG56RmxleCB9ID0gY2hhbmdlcztcbiAgICBpZiAobnpGbGV4KSB7XG4gICAgICB0aGlzLnNldEhvc3RGbGV4U3R5bGUoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpSb3dEaXJlY3RpdmUpIHtcbiAgICAgIHRoaXMubnpSb3dEaXJlY3RpdmUuYWN0dWFsR3V0dGVyJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChbaG9yaXpvbnRhbEd1dHRlciwgdmVydGljYWxHdXR0ZXJdKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbmRlckd1dHRlciA9IChuYW1lOiBzdHJpbmcsIGd1dHRlcjogbnVtYmVyIHwgbnVsbCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICBpZiAoZ3V0dGVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKG5hdGl2ZUVsZW1lbnQsIG5hbWUsIGAke2d1dHRlciAvIDJ9cHhgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJlbmRlckd1dHRlcigncGFkZGluZy1sZWZ0JywgaG9yaXpvbnRhbEd1dHRlcik7XG4gICAgICAgIHJlbmRlckd1dHRlcigncGFkZGluZy1yaWdodCcsIGhvcml6b250YWxHdXR0ZXIpO1xuICAgICAgICByZW5kZXJHdXR0ZXIoJ3BhZGRpbmctdG9wJywgdmVydGljYWxHdXR0ZXIpO1xuICAgICAgICByZW5kZXJHdXR0ZXIoJ3BhZGRpbmctYm90dG9tJywgdmVydGljYWxHdXR0ZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=