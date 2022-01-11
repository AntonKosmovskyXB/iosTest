/**
 * @fileoverview added by tsickle
 * Generated from: slide.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AnimationCurves, AnimationDuration } from './animation-consts';
/** @type {?} */
const ANIMATION_TRANSITION_IN = `${AnimationDuration.BASE} ${AnimationCurves.EASE_OUT_QUINT}`;
/** @type {?} */
const ANIMATION_TRANSITION_OUT = `${AnimationDuration.BASE} ${AnimationCurves.EASE_IN_QUINT}`;
/** @type {?} */
export const slideMotion = trigger('slideMotion', [
    state('void', style({
        opacity: 0,
        transform: 'scaleY(0.8)'
    })),
    state('enter', style({
        opacity: 1,
        transform: 'scaleY(1)'
    })),
    transition('void => *', [animate(ANIMATION_TRANSITION_IN)]),
    transition('* => void', [animate(ANIMATION_TRANSITION_OUT)])
]);
/** @type {?} */
export const slideAlertMotion = trigger('slideAlertMotion', [
    transition(':leave', [
        style({ opacity: 1, transform: 'scaleY(1)', transformOrigin: '0% 0%' }),
        animate(`${AnimationDuration.SLOW} ${AnimationCurves.EASE_IN_OUT_CIRC}`, style({
            opacity: 0,
            transform: 'scaleY(0)',
            transformOrigin: '0% 0%'
        }))
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvYW5pbWF0aW9uLyIsInNvdXJjZXMiOlsic2xpZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLE9BQU8sRUFBNEIsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDM0csT0FBTyxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztNQUVsRSx1QkFBdUIsR0FBRyxHQUFHLGlCQUFpQixDQUFDLElBQUksSUFBSSxlQUFlLENBQUMsY0FBYyxFQUFFOztNQUN2Rix3QkFBd0IsR0FBRyxHQUFHLGlCQUFpQixDQUFDLElBQUksSUFBSSxlQUFlLENBQUMsYUFBYSxFQUFFOztBQUU3RixNQUFNLE9BQU8sV0FBVyxHQUE2QixPQUFPLENBQUMsYUFBYSxFQUFFO0lBQzFFLEtBQUssQ0FDSCxNQUFNLEVBQ04sS0FBSyxDQUFDO1FBQ0osT0FBTyxFQUFFLENBQUM7UUFDVixTQUFTLEVBQUUsYUFBYTtLQUN6QixDQUFDLENBQ0g7SUFDRCxLQUFLLENBQ0gsT0FBTyxFQUNQLEtBQUssQ0FBQztRQUNKLE9BQU8sRUFBRSxDQUFDO1FBQ1YsU0FBUyxFQUFFLFdBQVc7S0FDdkIsQ0FBQyxDQUNIO0lBQ0QsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7SUFDM0QsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7Q0FDN0QsQ0FBQzs7QUFFRixNQUFNLE9BQU8sZ0JBQWdCLEdBQTZCLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRTtJQUNwRixVQUFVLENBQUMsUUFBUSxFQUFFO1FBQ25CLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLENBQUM7UUFDdkUsT0FBTyxDQUNMLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxJQUFJLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxFQUMvRCxLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQztZQUNWLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLGVBQWUsRUFBRSxPQUFPO1NBQ3pCLENBQUMsQ0FDSDtLQUNGLENBQUM7Q0FDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgYW5pbWF0ZSwgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IEFuaW1hdGlvbkN1cnZlcywgQW5pbWF0aW9uRHVyYXRpb24gfSBmcm9tICcuL2FuaW1hdGlvbi1jb25zdHMnO1xuXG5jb25zdCBBTklNQVRJT05fVFJBTlNJVElPTl9JTiA9IGAke0FuaW1hdGlvbkR1cmF0aW9uLkJBU0V9ICR7QW5pbWF0aW9uQ3VydmVzLkVBU0VfT1VUX1FVSU5UfWA7XG5jb25zdCBBTklNQVRJT05fVFJBTlNJVElPTl9PVVQgPSBgJHtBbmltYXRpb25EdXJhdGlvbi5CQVNFfSAke0FuaW1hdGlvbkN1cnZlcy5FQVNFX0lOX1FVSU5UfWA7XG5cbmV4cG9ydCBjb25zdCBzbGlkZU1vdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcignc2xpZGVNb3Rpb24nLCBbXG4gIHN0YXRlKFxuICAgICd2b2lkJyxcbiAgICBzdHlsZSh7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKDAuOCknXG4gICAgfSlcbiAgKSxcbiAgc3RhdGUoXG4gICAgJ2VudGVyJyxcbiAgICBzdHlsZSh7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKDEpJ1xuICAgIH0pXG4gICksXG4gIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFthbmltYXRlKEFOSU1BVElPTl9UUkFOU0lUSU9OX0lOKV0pLFxuICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbYW5pbWF0ZShBTklNQVRJT05fVFJBTlNJVElPTl9PVVQpXSlcbl0pO1xuXG5leHBvcnQgY29uc3Qgc2xpZGVBbGVydE1vdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcignc2xpZGVBbGVydE1vdGlvbicsIFtcbiAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xuICAgIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAnc2NhbGVZKDEpJywgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMCUnIH0pLFxuICAgIGFuaW1hdGUoXG4gICAgICBgJHtBbmltYXRpb25EdXJhdGlvbi5TTE9XfSAke0FuaW1hdGlvbkN1cnZlcy5FQVNFX0lOX09VVF9DSVJDfWAsXG4gICAgICBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgwKScsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xuICAgICAgfSlcbiAgICApXG4gIF0pXG5dKTtcbiJdfQ==