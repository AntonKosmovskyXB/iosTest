/**
 * @fileoverview added by tsickle
 * Generated from: utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __rest } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @param {?} percent
 * @return {?}
 */
function stripPercentToNumber(percent) {
    return +percent.replace('%', '');
}
/** @type {?} */
export var sortGradient = (/**
 * @param {?} gradients
 * @return {?}
 */
function (gradients) {
    /** @type {?} */
    var tempArr = [];
    Object.keys(gradients).forEach((/**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var value = gradients[key];
        /** @type {?} */
        var formatKey = stripPercentToNumber(key);
        if (!isNaN(formatKey)) {
            tempArr.push({
                key: formatKey,
                value: value
            });
        }
    }));
    tempArr = tempArr.sort((/**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) { return a.key - b.key; }));
    return tempArr;
});
/** @type {?} */
export var handleCircleGradient = (/**
 * @param {?} strokeColor
 * @return {?}
 */
function (strokeColor) {
    return sortGradient(strokeColor).map((/**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var key = _a.key, value = _a.value;
        return ({ offset: key + "%", color: value });
    }));
});
/** @type {?} */
export var handleLinearGradient = (/**
 * @param {?} strokeColor
 * @return {?}
 */
function (strokeColor) {
    var _a = strokeColor.from, from = _a === void 0 ? '#1890ff' : _a, _b = strokeColor.to, to = _b === void 0 ? '#1890ff' : _b, _c = strokeColor.direction, direction = _c === void 0 ? 'to right' : _c, rest = __rest(strokeColor, ["from", "to", "direction"]);
    if (Object.keys(rest).length !== 0) {
        /** @type {?} */
        var sortedGradients = sortGradient((/** @type {?} */ (rest)))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var key = _a.key, value = _a.value;
            return value + " " + key + "%";
        }))
            .join(', ');
        return "linear-gradient(" + direction + ", " + sortedGradients + ")";
    }
    return "linear-gradient(" + direction + ", " + from + ", " + to + ")";
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Byb2dyZXNzLyIsInNvdXJjZXMiOlsidXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFPQSxTQUFTLG9CQUFvQixDQUFDLE9BQWU7SUFDM0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ25DLENBQUM7O0FBRUQsTUFBTSxLQUFPLFlBQVk7Ozs7QUFBRyxVQUFDLFNBQXFDOztRQUM1RCxPQUFPLEdBQTBDLEVBQUU7SUFFdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPOzs7O0lBQUMsVUFBQSxHQUFHOztZQUMxQixLQUFLLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQzs7WUFDdEIsU0FBUyxHQUFHLG9CQUFvQixDQUFDLEdBQUcsQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ1gsR0FBRyxFQUFFLFNBQVM7Z0JBQ2QsS0FBSyxPQUFBO2FBQ04sQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDLEVBQUMsQ0FBQztJQUVILE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSTs7Ozs7SUFBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQWIsQ0FBYSxFQUFDLENBQUM7SUFDaEQsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyxDQUFBOztBQUVELE1BQU0sS0FBTyxvQkFBb0I7Ozs7QUFBRyxVQUFDLFdBQXVDO0lBQzFFLE9BQU8sWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUc7Ozs7SUFBQyxVQUFDLEVBQWM7WUFBWixZQUFHLEVBQUUsZ0JBQUs7UUFBTyxPQUFBLENBQUMsRUFBRSxNQUFNLEVBQUssR0FBRyxNQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQXJDLENBQXFDLEVBQUMsQ0FBQztBQUNsRyxDQUFDLENBQUE7O0FBRUQsTUFBTSxLQUFPLG9CQUFvQjs7OztBQUFHLFVBQUMsV0FBb0M7SUFDL0QsSUFBQSxxQkFBZ0IsRUFBaEIscUNBQWdCLEVBQUUsbUJBQWMsRUFBZCxtQ0FBYyxFQUFFLDBCQUFzQixFQUF0QiwyQ0FBc0IsRUFBRSx1REFBTztJQUN6RSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTs7WUFDNUIsZUFBZSxHQUFHLFlBQVksQ0FBQyxtQkFBQSxJQUFJLEVBQThCLENBQUM7YUFDckUsR0FBRzs7OztRQUFDLFVBQUMsRUFBYztnQkFBWixZQUFHLEVBQUUsZ0JBQUs7WUFBTyxPQUFHLEtBQUssU0FBSSxHQUFHLE1BQUc7UUFBbEIsQ0FBa0IsRUFBQzthQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2IsT0FBTyxxQkFBbUIsU0FBUyxVQUFLLGVBQWUsTUFBRyxDQUFDO0tBQzVEO0lBQ0QsT0FBTyxxQkFBbUIsU0FBUyxVQUFLLElBQUksVUFBSyxFQUFFLE1BQUcsQ0FBQztBQUN6RCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBOelByb2dyZXNzQ29sb3JHcmFkaWVudCwgTnpQcm9ncmVzc0dyYWRpZW50UHJvZ3Jlc3MgfSBmcm9tICcuL3R5cGluZ3MnO1xuXG5mdW5jdGlvbiBzdHJpcFBlcmNlbnRUb051bWJlcihwZXJjZW50OiBzdHJpbmcpOiBudW1iZXIge1xuICByZXR1cm4gK3BlcmNlbnQucmVwbGFjZSgnJScsICcnKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNvcnRHcmFkaWVudCA9IChncmFkaWVudHM6IE56UHJvZ3Jlc3NHcmFkaWVudFByb2dyZXNzKSA9PiB7XG4gIGxldCB0ZW1wQXJyOiBBcnJheTx7IGtleTogbnVtYmVyOyB2YWx1ZTogc3RyaW5nIH0+ID0gW107XG5cbiAgT2JqZWN0LmtleXMoZ3JhZGllbnRzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBncmFkaWVudHNba2V5XTtcbiAgICBjb25zdCBmb3JtYXRLZXkgPSBzdHJpcFBlcmNlbnRUb051bWJlcihrZXkpO1xuICAgIGlmICghaXNOYU4oZm9ybWF0S2V5KSkge1xuICAgICAgdGVtcEFyci5wdXNoKHtcbiAgICAgICAga2V5OiBmb3JtYXRLZXksXG4gICAgICAgIHZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHRlbXBBcnIgPSB0ZW1wQXJyLnNvcnQoKGEsIGIpID0+IGEua2V5IC0gYi5rZXkpO1xuICByZXR1cm4gdGVtcEFycjtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVDaXJjbGVHcmFkaWVudCA9IChzdHJva2VDb2xvcjogTnpQcm9ncmVzc0dyYWRpZW50UHJvZ3Jlc3MpOiBBcnJheTx7IG9mZnNldDogc3RyaW5nOyBjb2xvcjogc3RyaW5nIH0+ID0+IHtcbiAgcmV0dXJuIHNvcnRHcmFkaWVudChzdHJva2VDb2xvcikubWFwKCh7IGtleSwgdmFsdWUgfSkgPT4gKHsgb2Zmc2V0OiBgJHtrZXl9JWAsIGNvbG9yOiB2YWx1ZSB9KSk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlTGluZWFyR3JhZGllbnQgPSAoc3Ryb2tlQ29sb3I6IE56UHJvZ3Jlc3NDb2xvckdyYWRpZW50KSA9PiB7XG4gIGNvbnN0IHsgZnJvbSA9ICcjMTg5MGZmJywgdG8gPSAnIzE4OTBmZicsIGRpcmVjdGlvbiA9ICd0byByaWdodCcsIC4uLnJlc3QgfSA9IHN0cm9rZUNvbG9yO1xuICBpZiAoT2JqZWN0LmtleXMocmVzdCkubGVuZ3RoICE9PSAwKSB7XG4gICAgY29uc3Qgc29ydGVkR3JhZGllbnRzID0gc29ydEdyYWRpZW50KHJlc3QgYXMgTnpQcm9ncmVzc0dyYWRpZW50UHJvZ3Jlc3MpXG4gICAgICAubWFwKCh7IGtleSwgdmFsdWUgfSkgPT4gYCR7dmFsdWV9ICR7a2V5fSVgKVxuICAgICAgLmpvaW4oJywgJyk7XG4gICAgcmV0dXJuIGBsaW5lYXItZ3JhZGllbnQoJHtkaXJlY3Rpb259LCAke3NvcnRlZEdyYWRpZW50c30pYDtcbiAgfVxuICByZXR1cm4gYGxpbmVhci1ncmFkaWVudCgke2RpcmVjdGlvbn0sICR7ZnJvbX0sICR7dG99KWA7XG59O1xuIl19