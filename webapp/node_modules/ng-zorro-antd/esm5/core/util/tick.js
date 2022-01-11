/**
 * @fileoverview added by tsickle
 * Generated from: tick.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
/**
 * @return {?}
 */
export function inNextTick() {
    /** @type {?} */
    var timer = new Subject();
    Promise.resolve().then((/**
     * @return {?}
     */
    function () { return timer.next(); }));
    return timer.pipe(take(1));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGljay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS91dGlsLyIsInNvdXJjZXMiOlsidGljay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUV0QyxNQUFNLFVBQVUsVUFBVTs7UUFDbEIsS0FBSyxHQUFHLElBQUksT0FBTyxFQUFRO0lBQ2pDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJOzs7SUFBQyxjQUFNLE9BQUEsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFaLENBQVksRUFBQyxDQUFDO0lBQzNDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluTmV4dFRpY2soKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gIGNvbnN0IHRpbWVyID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aW1lci5uZXh0KCkpO1xuICByZXR1cm4gdGltZXIucGlwZSh0YWtlKDEpKTtcbn1cbiJdfQ==