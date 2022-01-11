/**
 * @fileoverview added by tsickle
 * Generated from: move.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { animate, style, transition, trigger } from '@angular/animations';
import { AnimationDuration } from './animation-consts';
/** @type {?} */
export var moveUpMotion = trigger('moveUpMotion', [
    transition('* => enter', [
        style({
            transformOrigin: '0 0',
            transform: 'translateY(-100%)',
            opacity: 0
        }),
        animate("" + AnimationDuration.BASE, style({
            transformOrigin: '0 0',
            transform: 'translateY(0%)',
            opacity: 1
        }))
    ]),
    transition('* => leave', [
        style({
            transformOrigin: '0 0',
            transform: 'translateY(0%)',
            opacity: 1
        }),
        animate("" + AnimationDuration.BASE, style({
            transformOrigin: '0 0',
            transform: 'translateY(-100%)',
            opacity: 0
        }))
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24vIiwic291cmNlcyI6WyJtb3ZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxPQUFPLEVBQTRCLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBRXZELE1BQU0sS0FBTyxZQUFZLEdBQTZCLE9BQU8sQ0FBQyxjQUFjLEVBQUU7SUFDNUUsVUFBVSxDQUFDLFlBQVksRUFBRTtRQUN2QixLQUFLLENBQUM7WUFDSixlQUFlLEVBQUUsS0FBSztZQUN0QixTQUFTLEVBQUUsbUJBQW1CO1lBQzlCLE9BQU8sRUFBRSxDQUFDO1NBQ1gsQ0FBQztRQUNGLE9BQU8sQ0FDTCxLQUFHLGlCQUFpQixDQUFDLElBQU0sRUFDM0IsS0FBSyxDQUFDO1lBQ0osZUFBZSxFQUFFLEtBQUs7WUFDdEIsU0FBUyxFQUFFLGdCQUFnQjtZQUMzQixPQUFPLEVBQUUsQ0FBQztTQUNYLENBQUMsQ0FDSDtLQUNGLENBQUM7SUFDRixVQUFVLENBQUMsWUFBWSxFQUFFO1FBQ3ZCLEtBQUssQ0FBQztZQUNKLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLFNBQVMsRUFBRSxnQkFBZ0I7WUFDM0IsT0FBTyxFQUFFLENBQUM7U0FDWCxDQUFDO1FBQ0YsT0FBTyxDQUNMLEtBQUcsaUJBQWlCLENBQUMsSUFBTSxFQUMzQixLQUFLLENBQUM7WUFDSixlQUFlLEVBQUUsS0FBSztZQUN0QixTQUFTLEVBQUUsbUJBQW1CO1lBQzlCLE9BQU8sRUFBRSxDQUFDO1NBQ1gsQ0FBQyxDQUNIO0tBQ0YsQ0FBQztDQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBhbmltYXRlLCBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBBbmltYXRpb25EdXJhdGlvbiB9IGZyb20gJy4vYW5pbWF0aW9uLWNvbnN0cyc7XG5cbmV4cG9ydCBjb25zdCBtb3ZlVXBNb3Rpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ21vdmVVcE1vdGlvbicsIFtcbiAgdHJhbnNpdGlvbignKiA9PiBlbnRlcicsIFtcbiAgICBzdHlsZSh7XG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwIDAnLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMTAwJSknLFxuICAgICAgb3BhY2l0eTogMFxuICAgIH0pLFxuICAgIGFuaW1hdGUoXG4gICAgICBgJHtBbmltYXRpb25EdXJhdGlvbi5CQVNFfWAsXG4gICAgICBzdHlsZSh7XG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAgMCcsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCUpJyxcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfSlcbiAgICApXG4gIF0pLFxuICB0cmFuc2l0aW9uKCcqID0+IGxlYXZlJywgW1xuICAgIHN0eWxlKHtcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAgMCcsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDAlKScsXG4gICAgICBvcGFjaXR5OiAxXG4gICAgfSksXG4gICAgYW5pbWF0ZShcbiAgICAgIGAke0FuaW1hdGlvbkR1cmF0aW9uLkJBU0V9YCxcbiAgICAgIHN0eWxlKHtcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCAwJyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMTAwJSknLFxuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9KVxuICAgIClcbiAgXSlcbl0pO1xuIl19