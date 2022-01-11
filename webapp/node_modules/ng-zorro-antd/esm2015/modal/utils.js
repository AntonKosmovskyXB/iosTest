/**
 * @fileoverview added by tsickle
 * Generated from: utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @param {?} config
 * @param {?} defaultOptions
 * @return {?}
 */
export function applyConfigDefaults(config, defaultOptions) {
    return Object.assign(Object.assign({}, defaultOptions), config);
}
/**
 * @template T
 * @param {?} userValue
 * @param {?} configValue
 * @param {?} defaultValue
 * @return {?}
 */
export function getValueWithConfig(userValue, configValue, defaultValue) {
    return typeof userValue === 'undefined' ? (typeof configValue === 'undefined' ? defaultValue : configValue) : userValue;
}
/**
 * Assign the params into the content component instance.
 * @deprecated Should use dependency injection to get the params for user
 * \@breaking-change 10.0.0
 * @template T
 * @param {?} instance
 * @param {?} params
 * @return {?}
 */
export function setContentInstanceParams(instance, params) {
    Object.assign(instance, params);
}
/**
 * @param {?} component
 * @return {?}
 */
export function getConfigFromComponent(component) {
    const { nzMask, nzMaskClosable, nzClosable, nzOkLoading, nzOkDisabled, nzCancelDisabled, nzCancelLoading, nzKeyboard, nzNoAnimation, nzContent, nzComponentParams, nzFooter, nzGetContainer, nzZIndex, nzWidth, nzWrapClassName, nzClassName, nzStyle, nzTitle, nzCloseIcon, nzMaskStyle, nzBodyStyle, nzOkText, nzCancelText, nzOkType, nzIconType, nzModalType, nzOnOk, nzOnCancel, nzAfterOpen, nzAfterClose, nzCloseOnNavigation, nzAutofocus } = component;
    return {
        nzMask,
        nzMaskClosable,
        nzClosable,
        nzOkLoading,
        nzOkDisabled,
        nzCancelDisabled,
        nzCancelLoading,
        nzKeyboard,
        nzNoAnimation,
        nzContent,
        nzComponentParams,
        nzFooter,
        nzGetContainer,
        nzZIndex,
        nzWidth,
        nzWrapClassName,
        nzClassName,
        nzStyle,
        nzTitle,
        nzCloseIcon,
        nzMaskStyle,
        nzBodyStyle,
        nzOkText,
        nzCancelText,
        nzOkType,
        nzIconType,
        nzModalType,
        nzOnOk,
        nzOnCancel,
        nzAfterOpen,
        nzAfterClose,
        nzCloseOnNavigation,
        nzAutofocus
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21vZGFsLyIsInNvdXJjZXMiOlsidXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFRQSxNQUFNLFVBQVUsbUJBQW1CLENBQUMsTUFBb0IsRUFBRSxjQUE0QjtJQUNwRix1Q0FBWSxjQUFjLEdBQUssTUFBTSxFQUFHO0FBQzFDLENBQUM7Ozs7Ozs7O0FBRUQsTUFBTSxVQUFVLGtCQUFrQixDQUFJLFNBQXdCLEVBQUUsV0FBMEIsRUFBRSxZQUFlO0lBQ3pHLE9BQU8sT0FBTyxTQUFTLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sV0FBVyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0FBQzFILENBQUM7Ozs7Ozs7Ozs7QUFPRCxNQUFNLFVBQVUsd0JBQXdCLENBQUksUUFBVyxFQUFFLE1BQThCO0lBQ3JGLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2xDLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLHNCQUFzQixDQUFDLFNBQTJCO1VBQzFELEVBQ0osTUFBTSxFQUNOLGNBQWMsRUFDZCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixnQkFBZ0IsRUFDaEIsZUFBZSxFQUNmLFVBQVUsRUFDVixhQUFhLEVBQ2IsU0FBUyxFQUNULGlCQUFpQixFQUNqQixRQUFRLEVBQ1IsY0FBYyxFQUNkLFFBQVEsRUFDUixPQUFPLEVBQ1AsZUFBZSxFQUNmLFdBQVcsRUFDWCxPQUFPLEVBQ1AsT0FBTyxFQUNQLFdBQVcsRUFDWCxXQUFXLEVBQ1gsV0FBVyxFQUNYLFFBQVEsRUFDUixZQUFZLEVBQ1osUUFBUSxFQUNSLFVBQVUsRUFDVixXQUFXLEVBQ1gsTUFBTSxFQUNOLFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLG1CQUFtQixFQUNuQixXQUFXLEVBQ1osR0FBRyxTQUFTO0lBQ2IsT0FBTztRQUNMLE1BQU07UUFDTixjQUFjO1FBQ2QsVUFBVTtRQUNWLFdBQVc7UUFDWCxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixVQUFVO1FBQ1YsYUFBYTtRQUNiLFNBQVM7UUFDVCxpQkFBaUI7UUFDakIsUUFBUTtRQUNSLGNBQWM7UUFDZCxRQUFRO1FBQ1IsT0FBTztRQUNQLGVBQWU7UUFDZixXQUFXO1FBQ1gsT0FBTztRQUNQLE9BQU87UUFDUCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxRQUFRO1FBQ1IsWUFBWTtRQUNaLFFBQVE7UUFDUixVQUFVO1FBQ1YsV0FBVztRQUNYLE1BQU07UUFDTixVQUFVO1FBQ1YsV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsV0FBVztLQUNaLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgTW9kYWxPcHRpb25zIH0gZnJvbSAnLi9tb2RhbC10eXBlcyc7XG5pbXBvcnQgeyBOek1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC5jb21wb25lbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlDb25maWdEZWZhdWx0cyhjb25maWc6IE1vZGFsT3B0aW9ucywgZGVmYXVsdE9wdGlvbnM6IE1vZGFsT3B0aW9ucyk6IE1vZGFsT3B0aW9ucyB7XG4gIHJldHVybiB7IC4uLmRlZmF1bHRPcHRpb25zLCAuLi5jb25maWcgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlV2l0aENvbmZpZzxUPih1c2VyVmFsdWU6IFQgfCB1bmRlZmluZWQsIGNvbmZpZ1ZhbHVlOiBUIHwgdW5kZWZpbmVkLCBkZWZhdWx0VmFsdWU6IFQpOiBUIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIHR5cGVvZiB1c2VyVmFsdWUgPT09ICd1bmRlZmluZWQnID8gKHR5cGVvZiBjb25maWdWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0VmFsdWUgOiBjb25maWdWYWx1ZSkgOiB1c2VyVmFsdWU7XG59XG5cbi8qKlxuICogQXNzaWduIHRoZSBwYXJhbXMgaW50byB0aGUgY29udGVudCBjb21wb25lbnQgaW5zdGFuY2UuXG4gKiBAZGVwcmVjYXRlZCBTaG91bGQgdXNlIGRlcGVuZGVuY3kgaW5qZWN0aW9uIHRvIGdldCB0aGUgcGFyYW1zIGZvciB1c2VyXG4gKiBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29udGVudEluc3RhbmNlUGFyYW1zPFQ+KGluc3RhbmNlOiBULCBwYXJhbXM6IFBhcnRpYWw8VD4gfCB1bmRlZmluZWQpOiB2b2lkIHtcbiAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZSwgcGFyYW1zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbmZpZ0Zyb21Db21wb25lbnQoY29tcG9uZW50OiBOek1vZGFsQ29tcG9uZW50KTogTW9kYWxPcHRpb25zIHtcbiAgY29uc3Qge1xuICAgIG56TWFzayxcbiAgICBuek1hc2tDbG9zYWJsZSxcbiAgICBuekNsb3NhYmxlLFxuICAgIG56T2tMb2FkaW5nLFxuICAgIG56T2tEaXNhYmxlZCxcbiAgICBuekNhbmNlbERpc2FibGVkLFxuICAgIG56Q2FuY2VsTG9hZGluZyxcbiAgICBuektleWJvYXJkLFxuICAgIG56Tm9BbmltYXRpb24sXG4gICAgbnpDb250ZW50LFxuICAgIG56Q29tcG9uZW50UGFyYW1zLFxuICAgIG56Rm9vdGVyLFxuICAgIG56R2V0Q29udGFpbmVyLFxuICAgIG56WkluZGV4LFxuICAgIG56V2lkdGgsXG4gICAgbnpXcmFwQ2xhc3NOYW1lLFxuICAgIG56Q2xhc3NOYW1lLFxuICAgIG56U3R5bGUsXG4gICAgbnpUaXRsZSxcbiAgICBuekNsb3NlSWNvbixcbiAgICBuek1hc2tTdHlsZSxcbiAgICBuekJvZHlTdHlsZSxcbiAgICBuek9rVGV4dCxcbiAgICBuekNhbmNlbFRleHQsXG4gICAgbnpPa1R5cGUsXG4gICAgbnpJY29uVHlwZSxcbiAgICBuek1vZGFsVHlwZSxcbiAgICBuek9uT2ssXG4gICAgbnpPbkNhbmNlbCxcbiAgICBuekFmdGVyT3BlbixcbiAgICBuekFmdGVyQ2xvc2UsXG4gICAgbnpDbG9zZU9uTmF2aWdhdGlvbixcbiAgICBuekF1dG9mb2N1c1xuICB9ID0gY29tcG9uZW50O1xuICByZXR1cm4ge1xuICAgIG56TWFzayxcbiAgICBuek1hc2tDbG9zYWJsZSxcbiAgICBuekNsb3NhYmxlLFxuICAgIG56T2tMb2FkaW5nLFxuICAgIG56T2tEaXNhYmxlZCxcbiAgICBuekNhbmNlbERpc2FibGVkLFxuICAgIG56Q2FuY2VsTG9hZGluZyxcbiAgICBuektleWJvYXJkLFxuICAgIG56Tm9BbmltYXRpb24sXG4gICAgbnpDb250ZW50LFxuICAgIG56Q29tcG9uZW50UGFyYW1zLFxuICAgIG56Rm9vdGVyLFxuICAgIG56R2V0Q29udGFpbmVyLFxuICAgIG56WkluZGV4LFxuICAgIG56V2lkdGgsXG4gICAgbnpXcmFwQ2xhc3NOYW1lLFxuICAgIG56Q2xhc3NOYW1lLFxuICAgIG56U3R5bGUsXG4gICAgbnpUaXRsZSxcbiAgICBuekNsb3NlSWNvbixcbiAgICBuek1hc2tTdHlsZSxcbiAgICBuekJvZHlTdHlsZSxcbiAgICBuek9rVGV4dCxcbiAgICBuekNhbmNlbFRleHQsXG4gICAgbnpPa1R5cGUsXG4gICAgbnpJY29uVHlwZSxcbiAgICBuek1vZGFsVHlwZSxcbiAgICBuek9uT2ssXG4gICAgbnpPbkNhbmNlbCxcbiAgICBuekFmdGVyT3BlbixcbiAgICBuekFmdGVyQ2xvc2UsXG4gICAgbnpDbG9zZU9uTmF2aWdhdGlvbixcbiAgICBuekF1dG9mb2N1c1xuICB9O1xufVxuIl19