/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
export { ModalOptions } from './modal-types';
export { NzModalService } from './modal.service';
export { NzModalRef } from './modal-ref';
export { ZOOM_CLASS_NAME_MAP, FADE_CLASS_NAME_MAP, MODAL_MASK_CLASS_NAME, NZ_CONFIG_COMPONENT_NAME } from './modal-config';
export { NzModalComponent } from './modal.component';
export { NzModalFooterDirective } from './modal-footer.directive';
export { NzModalModule } from './modal.module';
export { NzModalConfirmContainerComponent } from './modal-confirm-container.component';
export { NzModalContainerComponent } from './modal-container.component';
export { throwNzModalContentAlreadyAttachedError, BaseModalContainer } from './modal-container';
export { NzModalCloseComponent } from './modal-close.component';
export { NzModalTitleComponent } from './modal-title.component';
export { NzModalLegacyAPI } from './modal-legacy-api';
export {} from './modal-types';
export { nzModalAnimations } from './modal-animations';
export { NzModalFooterComponent } from './modal-footer.component';
export { applyConfigDefaults, getValueWithConfig, setContentInstanceParams, getConfigFromComponent } from './utils';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbW9kYWwvIiwic291cmNlcyI6WyJwdWJsaWMtYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLDZCQUFjLGVBQWUsQ0FBQztBQUM5QiwrQkFBYyxpQkFBaUIsQ0FBQztBQUNoQywyQkFBYyxhQUFhLENBQUM7QUFDNUIsMEdBQWMsZ0JBQWdCLENBQUM7QUFDL0IsaUNBQWMsbUJBQW1CLENBQUM7QUFDbEMsdUNBQWMsMEJBQTBCLENBQUM7QUFDekMsOEJBQWMsZ0JBQWdCLENBQUM7QUFDL0IsaURBQWMscUNBQXFDLENBQUM7QUFDcEQsMENBQWMsNkJBQTZCLENBQUM7QUFDNUMsNEVBQWMsbUJBQW1CLENBQUM7QUFDbEMsc0NBQWMseUJBQXlCLENBQUM7QUFDeEMsc0NBQWMseUJBQXlCLENBQUM7QUFDeEMsaUNBQWMsb0JBQW9CLENBQUM7QUFDbkMsZUFBYyxlQUFlLENBQUM7QUFDOUIsa0NBQWMsb0JBQW9CLENBQUM7QUFDbkMsdUNBQWMsMEJBQTBCLENBQUM7QUFDekMsMEdBQWMsU0FBUyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuZXhwb3J0ICogZnJvbSAnLi9tb2RhbC10eXBlcyc7XG5leHBvcnQgKiBmcm9tICcuL21vZGFsLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9tb2RhbC1yZWYnO1xuZXhwb3J0ICogZnJvbSAnLi9tb2RhbC1jb25maWcnO1xuZXhwb3J0ICogZnJvbSAnLi9tb2RhbC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9tb2RhbC1mb290ZXIuZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vbW9kYWwubW9kdWxlJztcbmV4cG9ydCAqIGZyb20gJy4vbW9kYWwtY29uZmlybS1jb250YWluZXIuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL21vZGFsLWNvbnRhaW5lcic7XG5leHBvcnQgKiBmcm9tICcuL21vZGFsLWNsb3NlLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL21vZGFsLXRpdGxlLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL21vZGFsLWxlZ2FjeS1hcGknO1xuZXhwb3J0ICogZnJvbSAnLi9tb2RhbC10eXBlcyc7XG5leHBvcnQgKiBmcm9tICcuL21vZGFsLWFuaW1hdGlvbnMnO1xuZXhwb3J0ICogZnJvbSAnLi9tb2RhbC1mb290ZXIuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xuIl19