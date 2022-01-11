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
const tokensMap = {
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
const v1tokens = Object.keys(tokensMap).sort().reverse();
// tslint:disable-next-line:prefer-template
/** @type {?} */
const tokensRegExp = new RegExp('(\\[[^\\[]*\\])|(\\\\)?' + '(' + v1tokens.join('|') + '|.)', 'g');
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
    warnDeprecation(`'NZ_DATE_FNS_COMPATIBLE' will be removed in 10.0.0, please update to date-fns v2 format.`);
    /** @type {?} */
    const tokensCaptures = format.match(tokensRegExp);
    if (tokensCaptures) {
        return tokensCaptures
            .reduce((/**
         * @param {?} acc
         * @param {?} tokenString
         * @param {?} index
         * @return {?}
         */
        (acc, tokenString, index) => {
            /** @type {?} */
            const v2token = tokensMap[tokenString];
            if (!v2token) {
                /** @type {?} */
                const escapedCaptures = tokenString.match(/^\[(.+)\]$/);
                if (escapedCaptures) {
                    acc.textBuffer.push(escapedCaptures[1]);
                }
                else {
                    acc.textBuffer.push(tokenString);
                }
            }
            /** @type {?} */
            const endOfString = index === tokensCaptures.length - 1;
            if (acc.textBuffer.length && (v2token || endOfString)) {
                acc.formatBuffer.push(`'${acc.textBuffer.join('')}'`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydC10b2tlbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2kxOG4vIiwic291cmNlcyI6WyJjb252ZXJ0LXRva2Vucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFJNUQsd0JBRUM7O01BRUssU0FBUyxHQUFjO0lBQzNCLENBQUMsRUFBRSxHQUFHO0lBQ04sRUFBRSxFQUFFLElBQUk7SUFDUixFQUFFLEVBQUUsSUFBSTtJQUNSLEdBQUcsRUFBRSxLQUFLO0lBQ1YsSUFBSSxFQUFFLE1BQU07SUFDWixDQUFDLEVBQUUsR0FBRztJQUNOLEVBQUUsRUFBRSxJQUFJO0lBQ1IsQ0FBQyxFQUFFLEdBQUc7SUFDTixFQUFFLEVBQUUsSUFBSTtJQUNSLEVBQUUsRUFBRSxJQUFJO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixJQUFJLEVBQUUsSUFBSTtJQUNWLElBQUksRUFBRSxLQUFLO0lBQ1gsQ0FBQyxFQUFFLEdBQUc7SUFDTixFQUFFLEVBQUUsSUFBSTtJQUNSLEVBQUUsRUFBRSxRQUFRO0lBQ1osR0FBRyxFQUFFLEtBQUs7SUFDVixJQUFJLEVBQUUsTUFBTTtJQUNaLENBQUMsRUFBRSxHQUFHO0lBQ04sQ0FBQyxFQUFFLEdBQUc7SUFDTixFQUFFLEVBQUUsTUFBTTtJQUNWLENBQUMsRUFBRSxHQUFHO0lBQ04sQ0FBQyxFQUFFLEdBQUc7SUFDTixFQUFFLEVBQUUsSUFBSTtJQUNSLEVBQUUsRUFBRSxJQUFJO0lBQ1IsRUFBRSxFQUFFLElBQUk7SUFDUixJQUFJLEVBQUUsTUFBTTtJQUNaLEVBQUUsRUFBRSxJQUFJO0lBQ1IsSUFBSSxFQUFFLE1BQU07SUFDWixDQUFDLEVBQUUsR0FBRztJQUNOLEVBQUUsRUFBRSxJQUFJO0lBQ1IsQ0FBQyxFQUFFLEdBQUc7SUFDTixFQUFFLEVBQUUsSUFBSTtJQUNSLENBQUMsRUFBRSxHQUFHO0lBQ04sRUFBRSxFQUFFLElBQUk7SUFDUixDQUFDLEVBQUUsR0FBRztJQUNOLEVBQUUsRUFBRSxJQUFJO0lBQ1IsQ0FBQyxFQUFFLEdBQUc7SUFDTixFQUFFLEVBQUUsSUFBSTtJQUNSLEdBQUcsRUFBRSxLQUFLO0lBQ1YsQ0FBQyxFQUFFLEtBQUs7SUFDUixFQUFFLEVBQUUsSUFBSTtJQUNSLENBQUMsRUFBRSxHQUFHO0lBQ04sQ0FBQyxFQUFFLEdBQUc7Q0FDUDs7TUFFSyxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7OztNQUdsRCxZQUFZLEdBQUcsSUFBSSxNQUFNLENBQUMseUJBQXlCLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxFQUFFLEdBQUcsQ0FBQzs7OztBQUVsRywyQkFHQzs7O0lBRkMsb0NBQXVCOztJQUN2QixrQ0FBcUI7Ozs7OztBQUd2QixNQUFNLFVBQVUsYUFBYSxDQUFDLE1BQWM7SUFDMUMsZUFBZSxDQUFDLDBGQUEwRixDQUFDLENBQUM7O1VBQ3RHLGNBQWMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztJQUNqRCxJQUFJLGNBQWMsRUFBRTtRQUNsQixPQUFPLGNBQWM7YUFDbEIsTUFBTTs7Ozs7O1FBQ0wsQ0FBQyxHQUFHLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFOztrQkFDcEIsT0FBTyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUM7WUFFdEMsSUFBSSxDQUFDLE9BQU8sRUFBRTs7c0JBQ04sZUFBZSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO2dCQUN2RCxJQUFJLGVBQWUsRUFBRTtvQkFDbkIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3pDO3FCQUFNO29CQUNMLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUNsQzthQUNGOztrQkFFSyxXQUFXLEdBQUcsS0FBSyxLQUFLLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUN2RCxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxJQUFJLFdBQVcsQ0FBQyxFQUFFO2dCQUNyRCxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEQsR0FBRyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7YUFDckI7WUFFRCxJQUFJLE9BQU8sRUFBRTtnQkFDWCxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNoQztZQUVELE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQyxHQUNELG1CQUFBLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQWdCLENBQ3JEO2FBQ0EsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUMxQjtTQUFNO1FBQ0wsT0FBTyxNQUFNLENBQUM7S0FDZjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuaW1wb3J0IHsgd2FybkRlcHJlY2F0aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2xvZ2dlcic7XG5cbi8vIENvbXBhdGlibGUgZm9yIGRhdGUtZm5zIHYxIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zLXVwZ3JhZGUvYmxvYi9tYXN0ZXIvc3JjL3YyL2NvbnZlcnRUb2tlbnMvaW5kZXgudHNcblxuaW50ZXJmYWNlIFRva2Vuc01hcCB7XG4gIFt2MXRva2VuOiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbmNvbnN0IHRva2Vuc01hcDogVG9rZW5zTWFwID0ge1xuICBNOiAnTCcsXG4gIE1vOiAnTW8nLFxuICBNTTogJ0xMJyxcbiAgTU1NOiAnTExMJyxcbiAgTU1NTTogJ0xMTEwnLFxuICBROiAncScsXG4gIFFvOiAncW8nLFxuICBEOiAnZCcsXG4gIERvOiAnZG8nLFxuICBERDogJ2RkJyxcbiAgREREOiAnRCcsXG4gIERERG86ICdEbycsXG4gIEREREQ6ICdEREQnLFxuICBkOiAnaScsXG4gIGRvOiAnaW8nLFxuICBkZDogJ2lpaWlpaScsXG4gIGRkZDogJ2lpaScsXG4gIGRkZGQ6ICdpaWlpJyxcbiAgQTogJ2EnLFxuICBhOiAnYScsXG4gIGFhOiAnYWFhYScsXG4gIEU6ICdpJyxcbiAgVzogJ0knLFxuICBXbzogJ0lvJyxcbiAgV1c6ICdJSScsXG4gIFlZOiAneXknLFxuICBZWVlZOiAneXl5eScsXG4gIEdHOiAnUlInLFxuICBHR0dHOiAnUlJSUicsXG4gIEg6ICdIJyxcbiAgSEg6ICdISCcsXG4gIGg6ICdoJyxcbiAgaGg6ICdoaCcsXG4gIG06ICdtJyxcbiAgbW06ICdtbScsXG4gIHM6ICdzJyxcbiAgc3M6ICdzcycsXG4gIFM6ICdTJyxcbiAgU1M6ICdTUycsXG4gIFNTUzogJ1NTUycsXG4gIFo6ICd4eHgnLFxuICBaWjogJ3h4JyxcbiAgWDogJ3QnLFxuICB4OiAnVCdcbn07XG5cbmNvbnN0IHYxdG9rZW5zID0gT2JqZWN0LmtleXModG9rZW5zTWFwKS5zb3J0KCkucmV2ZXJzZSgpO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLXRlbXBsYXRlXG5jb25zdCB0b2tlbnNSZWdFeHAgPSBuZXcgUmVnRXhwKCcoXFxcXFtbXlxcXFxbXSpcXFxcXSl8KFxcXFxcXFxcKT8nICsgJygnICsgdjF0b2tlbnMuam9pbignfCcpICsgJ3wuKScsICdnJyk7XG5cbmludGVyZmFjZSBUb2tlbnNCdWZmZXIge1xuICBmb3JtYXRCdWZmZXI6IHN0cmluZ1tdO1xuICB0ZXh0QnVmZmVyOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb2tlbnMoZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xuICB3YXJuRGVwcmVjYXRpb24oYCdOWl9EQVRFX0ZOU19DT01QQVRJQkxFJyB3aWxsIGJlIHJlbW92ZWQgaW4gMTAuMC4wLCBwbGVhc2UgdXBkYXRlIHRvIGRhdGUtZm5zIHYyIGZvcm1hdC5gKTtcbiAgY29uc3QgdG9rZW5zQ2FwdHVyZXMgPSBmb3JtYXQubWF0Y2godG9rZW5zUmVnRXhwKTtcbiAgaWYgKHRva2Vuc0NhcHR1cmVzKSB7XG4gICAgcmV0dXJuIHRva2Vuc0NhcHR1cmVzXG4gICAgICAucmVkdWNlKFxuICAgICAgICAoYWNjLCB0b2tlblN0cmluZywgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB2MnRva2VuID0gdG9rZW5zTWFwW3Rva2VuU3RyaW5nXTtcblxuICAgICAgICAgIGlmICghdjJ0b2tlbikge1xuICAgICAgICAgICAgY29uc3QgZXNjYXBlZENhcHR1cmVzID0gdG9rZW5TdHJpbmcubWF0Y2goL15cXFsoLispXFxdJC8pO1xuICAgICAgICAgICAgaWYgKGVzY2FwZWRDYXB0dXJlcykge1xuICAgICAgICAgICAgICBhY2MudGV4dEJ1ZmZlci5wdXNoKGVzY2FwZWRDYXB0dXJlc1sxXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhY2MudGV4dEJ1ZmZlci5wdXNoKHRva2VuU3RyaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBlbmRPZlN0cmluZyA9IGluZGV4ID09PSB0b2tlbnNDYXB0dXJlcy5sZW5ndGggLSAxO1xuICAgICAgICAgIGlmIChhY2MudGV4dEJ1ZmZlci5sZW5ndGggJiYgKHYydG9rZW4gfHwgZW5kT2ZTdHJpbmcpKSB7XG4gICAgICAgICAgICBhY2MuZm9ybWF0QnVmZmVyLnB1c2goYCcke2FjYy50ZXh0QnVmZmVyLmpvaW4oJycpfSdgKTtcbiAgICAgICAgICAgIGFjYy50ZXh0QnVmZmVyID0gW107XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHYydG9rZW4pIHtcbiAgICAgICAgICAgIGFjYy5mb3JtYXRCdWZmZXIucHVzaCh2MnRva2VuKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LFxuICAgICAgICB7IGZvcm1hdEJ1ZmZlcjogW10sIHRleHRCdWZmZXI6IFtdIH0gYXMgVG9rZW5zQnVmZmVyXG4gICAgICApXG4gICAgICAuZm9ybWF0QnVmZmVyLmpvaW4oJycpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH1cbn1cbiJdfQ==