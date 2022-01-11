/**
 * @fileoverview added by tsickle
 * Generated from: component-bed.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __read, __spread } from "tslib";
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
/**
 * @record
 * @template T
 */
export function ComponentBed() { }
if (false) {
    /** @type {?} */
    ComponentBed.prototype.bed;
    /** @type {?} */
    ComponentBed.prototype.fixture;
    /** @type {?} */
    ComponentBed.prototype.nativeElement;
    /** @type {?} */
    ComponentBed.prototype.debugElement;
    /** @type {?} */
    ComponentBed.prototype.component;
}
/**
 * @template T
 * @param {?} component
 * @param {?=} options
 * @return {?}
 */
export function createComponentBed(component, options) {
    if (options === void 0) { options = {
        providers: [],
        declarations: [],
        imports: []
    }; }
    var imports = options.imports, declarations = options.declarations, providers = options.providers;
    /** @type {?} */
    var config = {
        imports: __spread([NoopAnimationsModule, CommonModule], (imports || [])),
        declarations: __spread([component], (declarations || [])),
        schemas: [NO_ERRORS_SCHEMA],
        providers: providers || []
    };
    /** @type {?} */
    var bed = TestBed.configureTestingModule(config);
    /** @type {?} */
    var fixture = TestBed.createComponent(component);
    fixture.detectChanges();
    return {
        bed: bed,
        fixture: fixture,
        nativeElement: fixture.nativeElement,
        debugElement: fixture.debugElement,
        component: fixture.componentInstance
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWJlZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS90ZXN0aW5nLyIsInNvdXJjZXMiOlsiY29tcG9uZW50LWJlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUEwQixnQkFBZ0IsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQW9CLE9BQU8sRUFBaUIsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7QUFHNUUsa0NBTUM7OztJQUxDLDJCQUFtQjs7SUFDbkIsK0JBQTZCOztJQUM3QixxQ0FBMkI7O0lBQzNCLG9DQUEyQjs7SUFDM0IsaUNBQWE7Ozs7Ozs7O0FBRWYsTUFBTSxVQUFVLGtCQUFrQixDQUNoQyxTQUFrQixFQUNsQixPQUlDO0lBSkQsd0JBQUEsRUFBQTtRQUNFLFNBQVMsRUFBRSxFQUFFO1FBQ2IsWUFBWSxFQUFFLEVBQUU7UUFDaEIsT0FBTyxFQUFFLEVBQUU7S0FDWjtJQUVPLElBQUEseUJBQU8sRUFBRSxtQ0FBWSxFQUFFLDZCQUFTOztRQUNsQyxNQUFNLEdBQUc7UUFDYixPQUFPLFlBQUcsb0JBQW9CLEVBQUUsWUFBWSxHQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2pFLFlBQVksWUFBRyxTQUFTLEdBQUssQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDLENBQUM7UUFDbEQsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7UUFDM0IsU0FBUyxFQUFFLFNBQVMsSUFBSSxFQUFFO0tBQzNCOztRQUNLLEdBQUcsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDOztRQUM1QyxPQUFPLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBSSxTQUFTLENBQUM7SUFDckQsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3hCLE9BQU87UUFDTCxHQUFHLEtBQUE7UUFDSCxPQUFPLFNBQUE7UUFDUCxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWE7UUFDcEMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxZQUFZO1FBQ2xDLFNBQVMsRUFBRSxPQUFPLENBQUMsaUJBQWlCO0tBQ3JDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERlYnVnRWxlbWVudCwgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudEZpeHR1cmUsIFRlc3RCZWQsIFRlc3RCZWRTdGF0aWMgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgTm9vcEFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuXG50eXBlIENvbXBvbmVudEJlZE9wdGlvbnMgPSBQaWNrPE5nTW9kdWxlLCAncHJvdmlkZXJzJyB8ICdkZWNsYXJhdGlvbnMnIHwgJ2ltcG9ydHMnPjtcbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50QmVkPFQ+IHtcbiAgYmVkOiBUZXN0QmVkU3RhdGljO1xuICBmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPFQ+O1xuICBuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgZGVidWdFbGVtZW50OiBEZWJ1Z0VsZW1lbnQ7XG4gIGNvbXBvbmVudDogVDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb21wb25lbnRCZWQ8VD4oXG4gIGNvbXBvbmVudDogVHlwZTxUPixcbiAgb3B0aW9uczogQ29tcG9uZW50QmVkT3B0aW9ucyA9IHtcbiAgICBwcm92aWRlcnM6IFtdLFxuICAgIGRlY2xhcmF0aW9uczogW10sXG4gICAgaW1wb3J0czogW11cbiAgfVxuKTogQ29tcG9uZW50QmVkPFQ+IHtcbiAgY29uc3QgeyBpbXBvcnRzLCBkZWNsYXJhdGlvbnMsIHByb3ZpZGVycyB9ID0gb3B0aW9ucztcbiAgY29uc3QgY29uZmlnID0ge1xuICAgIGltcG9ydHM6IFtOb29wQW5pbWF0aW9uc01vZHVsZSwgQ29tbW9uTW9kdWxlLCAuLi4oaW1wb3J0cyB8fCBbXSldLFxuICAgIGRlY2xhcmF0aW9uczogW2NvbXBvbmVudCwgLi4uKGRlY2xhcmF0aW9ucyB8fCBbXSldLFxuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcbiAgICBwcm92aWRlcnM6IHByb3ZpZGVycyB8fCBbXVxuICB9O1xuICBjb25zdCBiZWQgPSBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoY29uZmlnKTtcbiAgY29uc3QgZml4dHVyZSA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50PFQ+KGNvbXBvbmVudCk7XG4gIGZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuICByZXR1cm4ge1xuICAgIGJlZCxcbiAgICBmaXh0dXJlLFxuICAgIG5hdGl2ZUVsZW1lbnQ6IGZpeHR1cmUubmF0aXZlRWxlbWVudCxcbiAgICBkZWJ1Z0VsZW1lbnQ6IGZpeHR1cmUuZGVidWdFbGVtZW50LFxuICAgIGNvbXBvbmVudDogZml4dHVyZS5jb21wb25lbnRJbnN0YW5jZVxuICB9O1xufVxuIl19