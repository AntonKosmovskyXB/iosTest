/**
 * @fileoverview added by tsickle
 * Generated from: convert-tokens.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { warnDeprecation } from 'ng-zorro-antd/core/logger';
/**
 * @record
 */
function TokensMap() { }
/** @type {?} */
var tokensMap = {
    M: 'L',
    Mo: 'Mo',
    MM: 'LL',
    MMM: 'LLL',
    MMMM: 'LLLL',
    Q: 'q',
    Qo: 'qo',
    D: 'd',
    Do: 'do',
    DD: 'dd',
    DDD: 'D',
    DDDo: 'Do',
    DDDD: 'DDD',
    d: 'i',
    do: 'io',
    dd: 'iiiiii',
    ddd: 'iii',
    dddd: 'iiii',
    A: 'a',
    a: 'a',
    aa: 'aaaa',
    E: 'i',
    W: 'I',
    Wo: 'Io',
    WW: 'II',
    YY: 'yy',
    YYYY: 'yyyy',
    GG: 'RR',
    GGGG: 'RRRR',
    H: 'H',
    HH: 'HH',
    h: 'h',
    hh: 'hh',
    m: 'm',
    mm: 'mm',
    s: 's',
    ss: 'ss',
    S: 'S',
    SS: 'SS',
    SSS: 'SSS',
    Z: 'xxx',
    ZZ: 'xx',
    X: 't',
    x: 'T'
};
/** @type {?} */
var v1tokens = Object.keys(tokensMap).sort().reverse();
// tslint:disable-next-line:prefer-template
/** @type {?} */
var tokensRegExp = new RegExp('(\\[[^\\[]*\\])|(\\\\)?' + '(' + v1tokens.join('|') + '|.)', 'g');
/**
 * @record
 */
function TokensBuffer() { }
if (false) {
    /** @type {?} */
    TokensBuffer.prototype.formatBuffer;
    /** @type {?} */
    TokensBuffer.prototype.textBuffer;
}
/**
 * @param {?} format
 * @return {?}
 */
export function convertTokens(format) {
    warnDeprecation("'NZ_DATE_FNS_COMPATIBLE' will be removed in 10.0.0, please update to date-fns v2 format.");
    /** @type {?} */
    var tokensCaptures = format.match(tokensRegExp);
    if (tokensCaptures) {
        return tokensCaptures
            .reduce((/**
         * @param {?} acc
         * @param {?} tokenString
         * @param {?} index
         * @return {?}
         */
        function (acc, tokenString, index) {
            /** @type {?} */
            var v2token = tokensMap[tokenString];
            if (!v2token) {
                /** @type {?} */
                var escapedCaptures = tokenString.match(/^\[(.+)\]$/);
                if (escapedCaptures) {
                    acc.textBuffer.push(escapedCaptures[1]);
                }
                else {
                    acc.textBuffer.push(tokenString);
                }
            }
            /** @type {?} */
            var endOfString = index === tokensCaptures.length - 1;
            if (acc.textBuffer.length && (v2token || endOfString)) {
                acc.formatBuffer.push("'" + acc.textBuffer.join('') + "'");
                acc.textBuffer = [];
            }
            if (v2token) {
                acc.formatBuffer.push(v2token);
            }
            return acc;
        }), (/** @type {?} */ ({ formatBuffer: [], textBuffer: [] })))
            .formatBuffer.join('');
    }
    else {
        return format;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydC10b2tlbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2kxOG4vIiwic291cmNlcyI6WyJjb252ZXJ0LXRva2Vucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFJNUQsd0JBRUM7O0lBRUssU0FBUyxHQUFjO0lBQzNCLENBQUMsRUFBRSxHQUFHO0lBQ04sRUFBRSxFQUFFLElBQUk7SUFDUixFQUFFLEVBQUUsSUFBSTtJQUNSLEdBQUcsRUFBRSxLQUFLO0lBQ1YsSUFBSSxFQUFFLE1BQU07SUFDWixDQUFDLEVBQUUsR0FBRztJQUNOLEVBQUUsRUFBRSxJQUFJO0lBQ1IsQ0FBQyxFQUFFLEdBQUc7SUFDTixFQUFFLEVBQUUsSUFBSTtJQUNSLEVBQUUsRUFBRSxJQUFJO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixJQUFJLEVBQUUsSUFBSTtJQUNWLElBQUksRUFBRSxLQUFLO0lBQ1gsQ0FBQyxFQUFFLEdBQUc7SUFDTixFQUFFLEVBQUUsSUFBSTtJQUNSLEVBQUUsRUFBRSxRQUFRO0lBQ1osR0FBRyxFQUFFLEtBQUs7SUFDVixJQUFJLEVBQUUsTUFBTTtJQUNaLENBQUMsRUFBRSxHQUFHO0lBQ04sQ0FBQyxFQUFFLEdBQUc7SUFDTixFQUFFLEVBQUUsTUFBTTtJQUNWLENBQUMsRUFBRSxHQUFHO0lBQ04sQ0FBQyxFQUFFLEdBQUc7SUFDTixFQUFFLEVBQUUsSUFBSTtJQUNSLEVBQUUsRUFBRSxJQUFJO0lBQ1IsRUFBRSxFQUFFLElBQUk7SUFDUixJQUFJLEVBQUUsTUFBTTtJQUNaLEVBQUUsRUFBRSxJQUFJO0lBQ1IsSUFBSSxFQUFFLE1BQU07SUFDWixDQUFDLEVBQUUsR0FBRztJQUNOLEVBQUUsRUFBRSxJQUFJO0lBQ1IsQ0FBQyxFQUFFLEdBQUc7SUFDTixFQUFFLEVBQUUsSUFBSTtJQUNSLENBQUMsRUFBRSxHQUFHO0lBQ04sRUFBRSxFQUFFLElBQUk7SUFDUixDQUFDLEVBQUUsR0FBRztJQUNOLEVBQUUsRUFBRSxJQUFJO0lBQ1IsQ0FBQyxFQUFFLEdBQUc7SUFDTixFQUFFLEVBQUUsSUFBSTtJQUNSLEdBQUcsRUFBRSxLQUFLO0lBQ1YsQ0FBQyxFQUFFLEtBQUs7SUFDUixFQUFFLEVBQUUsSUFBSTtJQUNSLENBQUMsRUFBRSxHQUFHO0lBQ04sQ0FBQyxFQUFFLEdBQUc7Q0FDUDs7SUFFSyxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7OztJQUdsRCxZQUFZLEdBQUcsSUFBSSxNQUFNLENBQUMseUJBQXlCLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxFQUFFLEdBQUcsQ0FBQzs7OztBQUVsRywyQkFHQzs7O0lBRkMsb0NBQXVCOztJQUN2QixrQ0FBcUI7Ozs7OztBQUd2QixNQUFNLFVBQVUsYUFBYSxDQUFDLE1BQWM7SUFDMUMsZUFBZSxDQUFDLDBGQUEwRixDQUFDLENBQUM7O1FBQ3RHLGNBQWMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztJQUNqRCxJQUFJLGNBQWMsRUFBRTtRQUNsQixPQUFPLGNBQWM7YUFDbEIsTUFBTTs7Ozs7O1FBQ0wsVUFBQyxHQUFHLEVBQUUsV0FBVyxFQUFFLEtBQUs7O2dCQUNoQixPQUFPLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQztZQUV0QyxJQUFJLENBQUMsT0FBTyxFQUFFOztvQkFDTixlQUFlLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZELElBQUksZUFBZSxFQUFFO29CQUNuQixHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDekM7cUJBQU07b0JBQ0wsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQ2xDO2FBQ0Y7O2dCQUVLLFdBQVcsR0FBRyxLQUFLLEtBQUssY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQ3ZELElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxPQUFPLElBQUksV0FBVyxDQUFDLEVBQUU7Z0JBQ3JELEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQUcsQ0FBQyxDQUFDO2dCQUN0RCxHQUFHLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQzthQUNyQjtZQUVELElBQUksT0FBTyxFQUFFO2dCQUNYLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2hDO1lBRUQsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLEdBQ0QsbUJBQUEsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsRUFBZ0IsQ0FDckQ7YUFDQSxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQzFCO1NBQU07UUFDTCxPQUFPLE1BQU0sQ0FBQztLQUNmO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5pbXBvcnQgeyB3YXJuRGVwcmVjYXRpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbG9nZ2VyJztcblxuLy8gQ29tcGF0aWJsZSBmb3IgZGF0ZS1mbnMgdjEgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMtdXBncmFkZS9ibG9iL21hc3Rlci9zcmMvdjIvY29udmVydFRva2Vucy9pbmRleC50c1xuXG5pbnRlcmZhY2UgVG9rZW5zTWFwIHtcbiAgW3YxdG9rZW46IHN0cmluZ106IHN0cmluZztcbn1cblxuY29uc3QgdG9rZW5zTWFwOiBUb2tlbnNNYXAgPSB7XG4gIE06ICdMJyxcbiAgTW86ICdNbycsXG4gIE1NOiAnTEwnLFxuICBNTU06ICdMTEwnLFxuICBNTU1NOiAnTExMTCcsXG4gIFE6ICdxJyxcbiAgUW86ICdxbycsXG4gIEQ6ICdkJyxcbiAgRG86ICdkbycsXG4gIEREOiAnZGQnLFxuICBEREQ6ICdEJyxcbiAgREREbzogJ0RvJyxcbiAgRERERDogJ0RERCcsXG4gIGQ6ICdpJyxcbiAgZG86ICdpbycsXG4gIGRkOiAnaWlpaWlpJyxcbiAgZGRkOiAnaWlpJyxcbiAgZGRkZDogJ2lpaWknLFxuICBBOiAnYScsXG4gIGE6ICdhJyxcbiAgYWE6ICdhYWFhJyxcbiAgRTogJ2knLFxuICBXOiAnSScsXG4gIFdvOiAnSW8nLFxuICBXVzogJ0lJJyxcbiAgWVk6ICd5eScsXG4gIFlZWVk6ICd5eXl5JyxcbiAgR0c6ICdSUicsXG4gIEdHR0c6ICdSUlJSJyxcbiAgSDogJ0gnLFxuICBISDogJ0hIJyxcbiAgaDogJ2gnLFxuICBoaDogJ2hoJyxcbiAgbTogJ20nLFxuICBtbTogJ21tJyxcbiAgczogJ3MnLFxuICBzczogJ3NzJyxcbiAgUzogJ1MnLFxuICBTUzogJ1NTJyxcbiAgU1NTOiAnU1NTJyxcbiAgWjogJ3h4eCcsXG4gIFpaOiAneHgnLFxuICBYOiAndCcsXG4gIHg6ICdUJ1xufTtcblxuY29uc3QgdjF0b2tlbnMgPSBPYmplY3Qua2V5cyh0b2tlbnNNYXApLnNvcnQoKS5yZXZlcnNlKCk7XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItdGVtcGxhdGVcbmNvbnN0IHRva2Vuc1JlZ0V4cCA9IG5ldyBSZWdFeHAoJyhcXFxcW1teXFxcXFtdKlxcXFxdKXwoXFxcXFxcXFwpPycgKyAnKCcgKyB2MXRva2Vucy5qb2luKCd8JykgKyAnfC4pJywgJ2cnKTtcblxuaW50ZXJmYWNlIFRva2Vuc0J1ZmZlciB7XG4gIGZvcm1hdEJ1ZmZlcjogc3RyaW5nW107XG4gIHRleHRCdWZmZXI6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRva2Vucyhmb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHdhcm5EZXByZWNhdGlvbihgJ05aX0RBVEVfRk5TX0NPTVBBVElCTEUnIHdpbGwgYmUgcmVtb3ZlZCBpbiAxMC4wLjAsIHBsZWFzZSB1cGRhdGUgdG8gZGF0ZS1mbnMgdjIgZm9ybWF0LmApO1xuICBjb25zdCB0b2tlbnNDYXB0dXJlcyA9IGZvcm1hdC5tYXRjaCh0b2tlbnNSZWdFeHApO1xuICBpZiAodG9rZW5zQ2FwdHVyZXMpIHtcbiAgICByZXR1cm4gdG9rZW5zQ2FwdHVyZXNcbiAgICAgIC5yZWR1Y2UoXG4gICAgICAgIChhY2MsIHRva2VuU3RyaW5nLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHYydG9rZW4gPSB0b2tlbnNNYXBbdG9rZW5TdHJpbmddO1xuXG4gICAgICAgICAgaWYgKCF2MnRva2VuKSB7XG4gICAgICAgICAgICBjb25zdCBlc2NhcGVkQ2FwdHVyZXMgPSB0b2tlblN0cmluZy5tYXRjaCgvXlxcWyguKylcXF0kLyk7XG4gICAgICAgICAgICBpZiAoZXNjYXBlZENhcHR1cmVzKSB7XG4gICAgICAgICAgICAgIGFjYy50ZXh0QnVmZmVyLnB1c2goZXNjYXBlZENhcHR1cmVzWzFdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFjYy50ZXh0QnVmZmVyLnB1c2godG9rZW5TdHJpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGVuZE9mU3RyaW5nID0gaW5kZXggPT09IHRva2Vuc0NhcHR1cmVzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgaWYgKGFjYy50ZXh0QnVmZmVyLmxlbmd0aCAmJiAodjJ0b2tlbiB8fCBlbmRPZlN0cmluZykpIHtcbiAgICAgICAgICAgIGFjYy5mb3JtYXRCdWZmZXIucHVzaChgJyR7YWNjLnRleHRCdWZmZXIuam9pbignJyl9J2ApO1xuICAgICAgICAgICAgYWNjLnRleHRCdWZmZXIgPSBbXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodjJ0b2tlbikge1xuICAgICAgICAgICAgYWNjLmZvcm1hdEJ1ZmZlci5wdXNoKHYydG9rZW4pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sXG4gICAgICAgIHsgZm9ybWF0QnVmZmVyOiBbXSwgdGV4dEJ1ZmZlcjogW10gfSBhcyBUb2tlbnNCdWZmZXJcbiAgICAgIClcbiAgICAgIC5mb3JtYXRCdWZmZXIuam9pbignJyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfVxufVxuIl19