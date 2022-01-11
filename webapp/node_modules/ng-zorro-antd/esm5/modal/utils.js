/**
 * @fileoverview added by tsickle
 * Generated from: utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign } from "tslib";
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
    return __assign(__assign({}, defaultOptions), config);
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
    var nzMask = component.nzMask, nzMaskClosable = component.nzMaskClosable, nzClosable = component.nzClosable, nzOkLoading = component.nzOkLoading, nzOkDisabled = component.nzOkDisabled, nzCancelDisabled = component.nzCancelDisabled, nzCancelLoading = component.nzCancelLoading, nzKeyboard = component.nzKeyboard, nzNoAnimation = component.nzNoAnimation, nzContent = component.nzContent, nzComponentParams = component.nzComponentParams, nzFooter = component.nzFooter, nzGetContainer = component.nzGetContainer, nzZIndex = component.nzZIndex, nzWidth = component.nzWidth, nzWrapClassName = component.nzWrapClassName, nzClassName = component.nzClassName, nzStyle = component.nzStyle, nzTitle = component.nzTitle, nzCloseIcon = component.nzCloseIcon, nzMaskStyle = component.nzMaskStyle, nzBodyStyle = component.nzBodyStyle, nzOkText = component.nzOkText, nzCancelText = component.nzCancelText, nzOkType = component.nzOkType, nzIconType = component.nzIconType, nzModalType = component.nzModalType, nzOnOk = component.nzOnOk, nzOnCancel = component.nzOnCancel, nzAfterOpen = component.nzAfterOpen, nzAfterClose = component.nzAfterClose, nzCloseOnNavigation = component.nzCloseOnNavigation, nzAutofocus = component.nzAutofocus;
    return {
        nzMask: nzMask,
        nzMaskClosable: nzMaskClosable,
        nzClosable: nzClosable,
        nzOkLoading: nzOkLoading,
        nzOkDisabled: nzOkDisabled,
        nzCancelDisabled: nzCancelDisabled,
        nzCancelLoading: nzCancelLoading,
        nzKeyboard: nzKeyboard,
        nzNoAnimation: nzNoAnimation,
        nzContent: nzContent,
        nzComponentParams: nzComponentParams,
        nzFooter: nzFooter,
        nzGetContainer: nzGetContainer,
        nzZIndex: nzZIndex,
        nzWidth: nzWidth,
        nzWrapClassName: nzWrapClassName,
        nzClassName: nzClassName,
        nzStyle: nzStyle,
        nzTitle: nzTitle,
        nzCloseIcon: nzCloseIcon,
        nzMaskStyle: nzMaskStyle,
        nzBodyStyle: nzBodyStyle,
        nzOkText: nzOkText,
        nzCancelText: nzCancelText,
        nzOkType: nzOkType,
        nzIconType: nzIconType,
        nzModalType: nzModalType,
        nzOnOk: nzOnOk,
        nzOnCancel: nzOnCancel,
        nzAfterOpen: nzAfterOpen,
        nzAfterClose: nzAfterClose,
        nzCloseOnNavigation: nzCloseOnNavigation,
        nzAutofocus: nzAutofocus
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21vZGFsLyIsInNvdXJjZXMiOlsidXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBUUEsTUFBTSxVQUFVLG1CQUFtQixDQUFDLE1BQW9CLEVBQUUsY0FBNEI7SUFDcEYsNkJBQVksY0FBYyxHQUFLLE1BQU0sRUFBRztBQUMxQyxDQUFDOzs7Ozs7OztBQUVELE1BQU0sVUFBVSxrQkFBa0IsQ0FBSSxTQUF3QixFQUFFLFdBQTBCLEVBQUUsWUFBZTtJQUN6RyxPQUFPLE9BQU8sU0FBUyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLFdBQVcsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztBQUMxSCxDQUFDOzs7Ozs7Ozs7O0FBT0QsTUFBTSxVQUFVLHdCQUF3QixDQUFJLFFBQVcsRUFBRSxNQUE4QjtJQUNyRixNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNsQyxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxzQkFBc0IsQ0FBQyxTQUEyQjtJQUU5RCxJQUFBLHlCQUFNLEVBQ04seUNBQWMsRUFDZCxpQ0FBVSxFQUNWLG1DQUFXLEVBQ1gscUNBQVksRUFDWiw2Q0FBZ0IsRUFDaEIsMkNBQWUsRUFDZixpQ0FBVSxFQUNWLHVDQUFhLEVBQ2IsK0JBQVMsRUFDVCwrQ0FBaUIsRUFDakIsNkJBQVEsRUFDUix5Q0FBYyxFQUNkLDZCQUFRLEVBQ1IsMkJBQU8sRUFDUCwyQ0FBZSxFQUNmLG1DQUFXLEVBQ1gsMkJBQU8sRUFDUCwyQkFBTyxFQUNQLG1DQUFXLEVBQ1gsbUNBQVcsRUFDWCxtQ0FBVyxFQUNYLDZCQUFRLEVBQ1IscUNBQVksRUFDWiw2QkFBUSxFQUNSLGlDQUFVLEVBQ1YsbUNBQVcsRUFDWCx5QkFBTSxFQUNOLGlDQUFVLEVBQ1YsbUNBQVcsRUFDWCxxQ0FBWSxFQUNaLG1EQUFtQixFQUNuQixtQ0FBVztJQUViLE9BQU87UUFDTCxNQUFNLFFBQUE7UUFDTixjQUFjLGdCQUFBO1FBQ2QsVUFBVSxZQUFBO1FBQ1YsV0FBVyxhQUFBO1FBQ1gsWUFBWSxjQUFBO1FBQ1osZ0JBQWdCLGtCQUFBO1FBQ2hCLGVBQWUsaUJBQUE7UUFDZixVQUFVLFlBQUE7UUFDVixhQUFhLGVBQUE7UUFDYixTQUFTLFdBQUE7UUFDVCxpQkFBaUIsbUJBQUE7UUFDakIsUUFBUSxVQUFBO1FBQ1IsY0FBYyxnQkFBQTtRQUNkLFFBQVEsVUFBQTtRQUNSLE9BQU8sU0FBQTtRQUNQLGVBQWUsaUJBQUE7UUFDZixXQUFXLGFBQUE7UUFDWCxPQUFPLFNBQUE7UUFDUCxPQUFPLFNBQUE7UUFDUCxXQUFXLGFBQUE7UUFDWCxXQUFXLGFBQUE7UUFDWCxXQUFXLGFBQUE7UUFDWCxRQUFRLFVBQUE7UUFDUixZQUFZLGNBQUE7UUFDWixRQUFRLFVBQUE7UUFDUixVQUFVLFlBQUE7UUFDVixXQUFXLGFBQUE7UUFDWCxNQUFNLFFBQUE7UUFDTixVQUFVLFlBQUE7UUFDVixXQUFXLGFBQUE7UUFDWCxZQUFZLGNBQUE7UUFDWixtQkFBbUIscUJBQUE7UUFDbkIsV0FBVyxhQUFBO0tBQ1osQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBNb2RhbE9wdGlvbnMgfSBmcm9tICcuL21vZGFsLXR5cGVzJztcbmltcG9ydCB7IE56TW9kYWxDb21wb25lbnQgfSBmcm9tICcuL21vZGFsLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUNvbmZpZ0RlZmF1bHRzKGNvbmZpZzogTW9kYWxPcHRpb25zLCBkZWZhdWx0T3B0aW9uczogTW9kYWxPcHRpb25zKTogTW9kYWxPcHRpb25zIHtcbiAgcmV0dXJuIHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLmNvbmZpZyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVXaXRoQ29uZmlnPFQ+KHVzZXJWYWx1ZTogVCB8IHVuZGVmaW5lZCwgY29uZmlnVmFsdWU6IFQgfCB1bmRlZmluZWQsIGRlZmF1bHRWYWx1ZTogVCk6IFQgfCB1bmRlZmluZWQge1xuICByZXR1cm4gdHlwZW9mIHVzZXJWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAodHlwZW9mIGNvbmZpZ1ZhbHVlID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRWYWx1ZSA6IGNvbmZpZ1ZhbHVlKSA6IHVzZXJWYWx1ZTtcbn1cblxuLyoqXG4gKiBBc3NpZ24gdGhlIHBhcmFtcyBpbnRvIHRoZSBjb250ZW50IGNvbXBvbmVudCBpbnN0YW5jZS5cbiAqIEBkZXByZWNhdGVkIFNob3VsZCB1c2UgZGVwZW5kZW5jeSBpbmplY3Rpb24gdG8gZ2V0IHRoZSBwYXJhbXMgZm9yIHVzZXJcbiAqIEBicmVha2luZy1jaGFuZ2UgMTAuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb250ZW50SW5zdGFuY2VQYXJhbXM8VD4oaW5zdGFuY2U6IFQsIHBhcmFtczogUGFydGlhbDxUPiB8IHVuZGVmaW5lZCk6IHZvaWQge1xuICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCBwYXJhbXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29uZmlnRnJvbUNvbXBvbmVudChjb21wb25lbnQ6IE56TW9kYWxDb21wb25lbnQpOiBNb2RhbE9wdGlvbnMge1xuICBjb25zdCB7XG4gICAgbnpNYXNrLFxuICAgIG56TWFza0Nsb3NhYmxlLFxuICAgIG56Q2xvc2FibGUsXG4gICAgbnpPa0xvYWRpbmcsXG4gICAgbnpPa0Rpc2FibGVkLFxuICAgIG56Q2FuY2VsRGlzYWJsZWQsXG4gICAgbnpDYW5jZWxMb2FkaW5nLFxuICAgIG56S2V5Ym9hcmQsXG4gICAgbnpOb0FuaW1hdGlvbixcbiAgICBuekNvbnRlbnQsXG4gICAgbnpDb21wb25lbnRQYXJhbXMsXG4gICAgbnpGb290ZXIsXG4gICAgbnpHZXRDb250YWluZXIsXG4gICAgbnpaSW5kZXgsXG4gICAgbnpXaWR0aCxcbiAgICBueldyYXBDbGFzc05hbWUsXG4gICAgbnpDbGFzc05hbWUsXG4gICAgbnpTdHlsZSxcbiAgICBuelRpdGxlLFxuICAgIG56Q2xvc2VJY29uLFxuICAgIG56TWFza1N0eWxlLFxuICAgIG56Qm9keVN0eWxlLFxuICAgIG56T2tUZXh0LFxuICAgIG56Q2FuY2VsVGV4dCxcbiAgICBuek9rVHlwZSxcbiAgICBuekljb25UeXBlLFxuICAgIG56TW9kYWxUeXBlLFxuICAgIG56T25PayxcbiAgICBuek9uQ2FuY2VsLFxuICAgIG56QWZ0ZXJPcGVuLFxuICAgIG56QWZ0ZXJDbG9zZSxcbiAgICBuekNsb3NlT25OYXZpZ2F0aW9uLFxuICAgIG56QXV0b2ZvY3VzXG4gIH0gPSBjb21wb25lbnQ7XG4gIHJldHVybiB7XG4gICAgbnpNYXNrLFxuICAgIG56TWFza0Nsb3NhYmxlLFxuICAgIG56Q2xvc2FibGUsXG4gICAgbnpPa0xvYWRpbmcsXG4gICAgbnpPa0Rpc2FibGVkLFxuICAgIG56Q2FuY2VsRGlzYWJsZWQsXG4gICAgbnpDYW5jZWxMb2FkaW5nLFxuICAgIG56S2V5Ym9hcmQsXG4gICAgbnpOb0FuaW1hdGlvbixcbiAgICBuekNvbnRlbnQsXG4gICAgbnpDb21wb25lbnRQYXJhbXMsXG4gICAgbnpGb290ZXIsXG4gICAgbnpHZXRDb250YWluZXIsXG4gICAgbnpaSW5kZXgsXG4gICAgbnpXaWR0aCxcbiAgICBueldyYXBDbGFzc05hbWUsXG4gICAgbnpDbGFzc05hbWUsXG4gICAgbnpTdHlsZSxcbiAgICBuelRpdGxlLFxuICAgIG56Q2xvc2VJY29uLFxuICAgIG56TWFza1N0eWxlLFxuICAgIG56Qm9keVN0eWxlLFxuICAgIG56T2tUZXh0LFxuICAgIG56Q2FuY2VsVGV4dCxcbiAgICBuek9rVHlwZSxcbiAgICBuekljb25UeXBlLFxuICAgIG56TW9kYWxUeXBlLFxuICAgIG56T25PayxcbiAgICBuek9uQ2FuY2VsLFxuICAgIG56QWZ0ZXJPcGVuLFxuICAgIG56QWZ0ZXJDbG9zZSxcbiAgICBuekNsb3NlT25OYXZpZ2F0aW9uLFxuICAgIG56QXV0b2ZvY3VzXG4gIH07XG59XG4iXX0=