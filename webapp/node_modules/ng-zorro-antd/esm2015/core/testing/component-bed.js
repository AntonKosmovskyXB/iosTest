/**
 * @fileoverview added by tsickle
 * Generated from: component-bed.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export function createComponentBed(component, options = {
    providers: [],
    declarations: [],
    imports: []
}) {
    const { imports, declarations, providers } = options;
    /** @type {?} */
    const config = {
        imports: [NoopAnimationsModule, CommonModule, ...(imports || [])],
        declarations: [component, ...(declarations || [])],
        schemas: [NO_ERRORS_SCHEMA],
        providers: providers || []
    };
    /** @type {?} */
    const bed = TestBed.configureTestingModule(config);
    /** @type {?} */
    const fixture = TestBed.createComponent(component);
    fixture.detectChanges();
    return {
        bed,
        fixture,
        nativeElement: fixture.nativeElement,
        debugElement: fixture.debugElement,
        component: fixture.componentInstance
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWJlZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS90ZXN0aW5nLyIsInNvdXJjZXMiOlsiY29tcG9uZW50LWJlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQTBCLGdCQUFnQixFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBb0IsT0FBTyxFQUFpQixNQUFNLHVCQUF1QixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7OztBQUc1RSxrQ0FNQzs7O0lBTEMsMkJBQW1COztJQUNuQiwrQkFBNkI7O0lBQzdCLHFDQUEyQjs7SUFDM0Isb0NBQTJCOztJQUMzQixpQ0FBYTs7Ozs7Ozs7QUFFZixNQUFNLFVBQVUsa0JBQWtCLENBQ2hDLFNBQWtCLEVBQ2xCLFVBQStCO0lBQzdCLFNBQVMsRUFBRSxFQUFFO0lBQ2IsWUFBWSxFQUFFLEVBQUU7SUFDaEIsT0FBTyxFQUFFLEVBQUU7Q0FDWjtVQUVLLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsR0FBRyxPQUFPOztVQUM5QyxNQUFNLEdBQUc7UUFDYixPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxZQUFZLEVBQUUsR0FBRyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNqRSxZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLFlBQVksSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNsRCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUMzQixTQUFTLEVBQUUsU0FBUyxJQUFJLEVBQUU7S0FDM0I7O1VBQ0ssR0FBRyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUM7O1VBQzVDLE9BQU8sR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFJLFNBQVMsQ0FBQztJQUNyRCxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDeEIsT0FBTztRQUNMLEdBQUc7UUFDSCxPQUFPO1FBQ1AsYUFBYSxFQUFFLE9BQU8sQ0FBQyxhQUFhO1FBQ3BDLFlBQVksRUFBRSxPQUFPLENBQUMsWUFBWTtRQUNsQyxTQUFTLEVBQUUsT0FBTyxDQUFDLGlCQUFpQjtLQUNyQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEZWJ1Z0VsZW1lbnQsIE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRGaXh0dXJlLCBUZXN0QmVkLCBUZXN0QmVkU3RhdGljIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IE5vb3BBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcblxudHlwZSBDb21wb25lbnRCZWRPcHRpb25zID0gUGljazxOZ01vZHVsZSwgJ3Byb3ZpZGVycycgfCAnZGVjbGFyYXRpb25zJyB8ICdpbXBvcnRzJz47XG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudEJlZDxUPiB7XG4gIGJlZDogVGVzdEJlZFN0YXRpYztcbiAgZml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTxUPjtcbiAgbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIGRlYnVnRWxlbWVudDogRGVidWdFbGVtZW50O1xuICBjb21wb25lbnQ6IFQ7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50QmVkPFQ+KFxuICBjb21wb25lbnQ6IFR5cGU8VD4sXG4gIG9wdGlvbnM6IENvbXBvbmVudEJlZE9wdGlvbnMgPSB7XG4gICAgcHJvdmlkZXJzOiBbXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtdLFxuICAgIGltcG9ydHM6IFtdXG4gIH1cbik6IENvbXBvbmVudEJlZDxUPiB7XG4gIGNvbnN0IHsgaW1wb3J0cywgZGVjbGFyYXRpb25zLCBwcm92aWRlcnMgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICBpbXBvcnRzOiBbTm9vcEFuaW1hdGlvbnNNb2R1bGUsIENvbW1vbk1vZHVsZSwgLi4uKGltcG9ydHMgfHwgW10pXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtjb21wb25lbnQsIC4uLihkZWNsYXJhdGlvbnMgfHwgW10pXSxcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG4gICAgcHJvdmlkZXJzOiBwcm92aWRlcnMgfHwgW11cbiAgfTtcbiAgY29uc3QgYmVkID0gVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKGNvbmZpZyk7XG4gIGNvbnN0IGZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudDxUPihjb21wb25lbnQpO1xuICBmaXh0dXJlLmRldGVjdENoYW5nZXMoKTtcbiAgcmV0dXJuIHtcbiAgICBiZWQsXG4gICAgZml4dHVyZSxcbiAgICBuYXRpdmVFbGVtZW50OiBmaXh0dXJlLm5hdGl2ZUVsZW1lbnQsXG4gICAgZGVidWdFbGVtZW50OiBmaXh0dXJlLmRlYnVnRWxlbWVudCxcbiAgICBjb21wb25lbnQ6IGZpeHR1cmUuY29tcG9uZW50SW5zdGFuY2VcbiAgfTtcbn1cbiJdfQ==