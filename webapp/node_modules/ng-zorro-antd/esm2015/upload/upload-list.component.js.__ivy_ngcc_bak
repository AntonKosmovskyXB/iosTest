/**
 * @fileoverview added by tsickle
 * Generated from: upload-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { animate, style, transition, trigger } from '@angular/animations';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, NgZone, ViewEncapsulation } from '@angular/core';
/** @type {?} */
const isImageFileType = (/**
 * @param {?} type
 * @return {?}
 */
(type) => !!type && type.indexOf('image/') === 0);
const ɵ0 = isImageFileType;
/** @type {?} */
const MEASURE_SIZE = 200;
/**
 * @record
 */
function UploadListFile() { }
if (false) {
    /** @type {?|undefined} */
    UploadListFile.prototype.isImageUrl;
    /** @type {?|undefined} */
    UploadListFile.prototype.isUploading;
    /** @type {?|undefined} */
    UploadListFile.prototype.iconType;
    /** @type {?|undefined} */
    UploadListFile.prototype.listItemNameCls;
    /** @type {?|undefined} */
    UploadListFile.prototype.showDownload;
}
export class NzUploadListComponent {
    // #endregion
    /**
     * @param {?} cdr
     * @param {?} doc
     * @param {?} ngZone
     * @param {?} platform
     */
    constructor(cdr, doc, ngZone, platform) {
        this.cdr = cdr;
        this.doc = doc;
        this.ngZone = ngZone;
        this.platform = platform;
        this.list = [];
        this.locale = {};
        this.iconRender = null;
    }
    /**
     * @private
     * @return {?}
     */
    get showPic() {
        return this.listType === 'picture' || this.listType === 'picture-card';
    }
    /**
     * @param {?} list
     * @return {?}
     */
    set items(list) {
        this.list = list;
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    genErr(file) {
        if (file.response && typeof file.response === 'string') {
            return file.response;
        }
        return (file.error && file.error.statusText) || this.locale.uploadError;
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    extname(url) {
        /** @type {?} */
        const temp = url.split('/');
        /** @type {?} */
        const filename = temp[temp.length - 1];
        /** @type {?} */
        const filenameWithoutSuffix = filename.split(/#|\?/)[0];
        return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0];
    }
    /**
     * @param {?} file
     * @return {?}
     */
    isImageUrl(file) {
        if (isImageFileType((/** @type {?} */ (file.type)))) {
            return true;
        }
        /** @type {?} */
        const url = (/** @type {?} */ ((file.thumbUrl || file.url || '')));
        if (!url) {
            return false;
        }
        /** @type {?} */
        const extension = this.extname(url);
        if (/^data:image\//.test(url) || /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg)$/i.test(extension)) {
            return true;
        }
        else if (/^data:/.test(url)) {
            // other file types of base64
            return false;
        }
        else if (extension) {
            // other file types which have extension
            return false;
        }
        return true;
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    getIconType(file) {
        if (!this.showPic) {
            return '';
        }
        if (file.isUploading || (!file.thumbUrl && !file.url)) {
            return 'uploading';
        }
        else {
            return 'thumbnail';
        }
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    previewImage(file) {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            if (!isImageFileType(file.type)) {
                resolve('');
                return;
            }
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const canvas = this.doc.createElement('canvas');
                canvas.width = MEASURE_SIZE;
                canvas.height = MEASURE_SIZE;
                canvas.style.cssText = `position: fixed; left: 0; top: 0; width: ${MEASURE_SIZE}px; height: ${MEASURE_SIZE}px; z-index: 9999; display: none;`;
                this.doc.body.appendChild(canvas);
                /** @type {?} */
                const ctx = canvas.getContext('2d');
                /** @type {?} */
                const img = new Image();
                img.onload = (/**
                 * @return {?}
                 */
                () => {
                    const { width, height } = img;
                    /** @type {?} */
                    let drawWidth = MEASURE_SIZE;
                    /** @type {?} */
                    let drawHeight = MEASURE_SIZE;
                    /** @type {?} */
                    let offsetX = 0;
                    /** @type {?} */
                    let offsetY = 0;
                    if (width < height) {
                        drawHeight = height * (MEASURE_SIZE / width);
                        offsetY = -(drawHeight - drawWidth) / 2;
                    }
                    else {
                        drawWidth = width * (MEASURE_SIZE / height);
                        offsetX = -(drawWidth - drawHeight) / 2;
                    }
                    try {
                        (/** @type {?} */ (ctx)).drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
                    }
                    catch (_a) { }
                    /** @type {?} */
                    const dataURL = canvas.toDataURL();
                    this.doc.body.removeChild(canvas);
                    resolve(dataURL);
                });
                img.src = window.URL.createObjectURL(file);
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    genThumb() {
        if (!this.platform.isBrowser) {
            return;
        }
        /** @type {?} */
        const win = (/** @type {?} */ (window));
        if (!this.showPic || typeof document === 'undefined' || typeof win === 'undefined' || !win.FileReader || !win.File) {
            return;
        }
        this.list
            .filter((/**
         * @param {?} file
         * @return {?}
         */
        file => file.originFileObj instanceof File && file.thumbUrl === undefined))
            .forEach((/**
         * @param {?} file
         * @return {?}
         */
        file => {
            file.thumbUrl = '';
            (this.previewFile ? this.previewFile(file).toPromise() : this.previewImage((/** @type {?} */ (file.originFileObj)))).then((/**
             * @param {?} dataUrl
             * @return {?}
             */
            dataUrl => {
                file.thumbUrl = dataUrl;
                this.detectChanges();
            }));
        }));
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    listItemNameCls(file) {
        /** @type {?} */
        const count = [this.showDownload(file), this.icons.showRemoveIcon].filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x)).length;
        return {
            [`ant-upload-list-item-name`]: true,
            [`ant-upload-list-item-name-icon-count-${count}`]: true
        };
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    showDownload(file) {
        return !!(this.icons.showDownloadIcon && file.status === 'done');
    }
    /**
     * @private
     * @return {?}
     */
    fixData() {
        this.list.forEach((/**
         * @param {?} file
         * @return {?}
         */
        file => {
            file.isUploading = file.status === 'uploading';
            file.message = this.genErr(file);
            file.linkProps = typeof file.linkProps === 'string' ? JSON.parse(file.linkProps) : file.linkProps;
            file.isImageUrl = this.previewIsImage ? this.previewIsImage(file) : this.isImageUrl(file);
            file.iconType = this.getIconType(file);
            file.listItemNameCls = this.listItemNameCls(file);
            file.showDownload = this.showDownload(file);
        }));
    }
    /**
     * @param {?} file
     * @param {?} e
     * @return {?}
     */
    handlePreview(file, e) {
        if (!this.onPreview) {
            return;
        }
        e.preventDefault();
        return this.onPreview(file);
    }
    /**
     * @param {?} file
     * @param {?} e
     * @return {?}
     */
    handleRemove(file, e) {
        e.preventDefault();
        if (this.onRemove) {
            this.onRemove(file);
        }
        return;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    handleDownload(file) {
        if (typeof this.onDownload === 'function') {
            this.onDownload(file);
        }
        else if (file.url) {
            window.open(file.url);
        }
    }
    /**
     * @return {?}
     */
    detectChanges() {
        this.fixData();
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.fixData();
        this.genThumb();
    }
}
NzUploadListComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-upload-list',
                exportAs: 'nzUploadList',
                template: "<div\n  *ngFor=\"let file of list\"\n  class=\"ant-upload-list-item ant-upload-list-item-{{\n    file.status\n  }} ant-upload-list-item-list-type-{{ listType }}\"\n  [attr.data-key]=\"file.key\"\n  @itemState\n  nz-tooltip\n  [nzTooltipTitle]=\"file.status === 'error' ? file.message : null\"\n>\n  <ng-template #icon>\n    <ng-container [ngSwitch]=\"file.iconType\">\n      <div\n        *ngSwitchCase=\"'uploading'\"\n        class=\"ant-upload-list-item-thumbnail\"\n        [class.ant-upload-list-item-file]=\"!file.isUploading\"\n      >\n        <ng-template\n          [ngTemplateOutlet]=\"iconNode\"\n          [ngTemplateOutletContext]=\"{ $implicit: file }\"\n        ></ng-template>\n      </div>\n      <a\n        *ngSwitchCase=\"'thumbnail'\"\n        class=\"ant-upload-list-item-thumbnail\"\n        [class.ant-upload-list-item-file]=\"!file.isImageUrl\"\n        target=\"_blank\"\n        rel=\"noopener noreferrer\"\n        [href]=\"file.url || file.thumbUrl\"\n        (click)=\"handlePreview(file, $event)\"\n      >\n        <img\n          *ngIf=\"file.isImageUrl; else noImageThumbTpl\"\n          class=\"ant-upload-list-item-image\"\n          [src]=\"file.thumbUrl || file.url\"\n          [attr.alt]=\"file.name\"\n        />\n      </a>\n      <span *ngSwitchDefault class=\"ant-upload-text-icon\">\n        <ng-template\n          [ngTemplateOutlet]=\"iconNode\"\n          [ngTemplateOutletContext]=\"{ $implicit: file }\"\n        ></ng-template>\n      </span>\n    </ng-container>\n    <ng-template #noImageThumbTpl>\n      <ng-template\n        [ngTemplateOutlet]=\"iconNode\"\n        [ngTemplateOutletContext]=\"{ $implicit: file }\"\n      ></ng-template>\n    </ng-template>\n  </ng-template>\n  <ng-template #iconNode let-file>\n    <ng-container *ngIf=\"!iconRender; else iconRender\">\n      <ng-container [ngSwitch]=\"listType\">\n        <ng-container *ngSwitchCase=\"'picture'\">\n          <ng-container *ngIf=\"file.isUploading; else iconNodeFileIcon\">\n            <i nz-icon nzType=\"loading\"></i>\n          </ng-container>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'picture-card'\">\n          <ng-container *ngIf=\"file.isUploading; else iconNodeFileIcon\">{{\n            locale.uploading\n          }}</ng-container>\n        </ng-container>\n        <i *ngSwitchDefault nz-icon [nzType]=\"file.isUploading ? 'loading' : 'paper-clip'\"></i>\n      </ng-container>\n    </ng-container>\n    <ng-template #iconNodeFileIcon>\n      <i nz-icon [nzType]=\"file.isImageUrl ? 'picture' : 'file'\" nzTheme=\"twotone\"></i>\n    </ng-template>\n  </ng-template>\n  <ng-template #downloadOrDelete>\n    <span\n      *ngIf=\"listType !== 'picture-card'\"\n      class=\"ant-upload-list-item-card-actions {{ listType === 'picture' ? 'picture' : '' }}\"\n    >\n      <a *ngIf=\"file.showDownload\" title=\"{{ locale.downloadFile }}\">\n        <ng-template [ngTemplateOutlet]=\"downloadIcon\"></ng-template>\n      </a>\n      <a *ngIf=\"icons.showRemoveIcon\" title=\"{{ locale.removeFile }}\">\n        <ng-template [ngTemplateOutlet]=\"removeIcon\"></ng-template>\n      </a>\n    </span>\n  </ng-template>\n  <ng-template #preview>\n    <a\n      *ngIf=\"file.url\"\n      target=\"_blank\"\n      rel=\"noopener noreferrer\"\n      [ngClass]=\"file.listItemNameCls!\"\n      [attr.title]=\"file.name\"\n      [href]=\"file.url\"\n      [attr.download]=\"file.linkProps && file.linkProps.download\"\n      (click)=\"handlePreview(file, $event)\"\n      >{{ file.name }}</a\n    >\n    <span\n      *ngIf=\"!file.url\"\n      [ngClass]=\"file.listItemNameCls!\"\n      [attr.title]=\"file.name\"\n      (click)=\"handlePreview(file, $event)\"\n      >{{ file.name }}</span\n    >\n    <ng-template [ngTemplateOutlet]=\"downloadOrDelete\"></ng-template>\n  </ng-template>\n  <ng-template #removeIcon>\n    <i\n      *ngIf=\"icons.showRemoveIcon\"\n      (click)=\"handleRemove(file, $event)\"\n      nz-icon\n      nzType=\"delete\"\n      title=\"{{ locale.removeFile }}\"\n    ></i>\n  </ng-template>\n  <ng-template #downloadIcon>\n    <i\n      *ngIf=\"file.showDownload\"\n      (click)=\"handleDownload(file)\"\n      nz-icon\n      nzType=\"download\"\n      title=\"{{ locale.downloadFile }}\"\n    ></i>\n  </ng-template>\n  <div class=\"ant-upload-list-item-info\">\n    <span>\n      <ng-template [ngTemplateOutlet]=\"icon\"></ng-template>\n      <ng-template [ngTemplateOutlet]=\"preview\"></ng-template>\n    </span>\n  </div>\n  <span\n    *ngIf=\"listType === 'picture-card' && !file.isUploading\"\n    class=\"ant-upload-list-item-actions\"\n  >\n    <a\n      *ngIf=\"icons.showPreviewIcon\"\n      [href]=\"file.url || file.thumbUrl\"\n      target=\"_blank\"\n      rel=\"noopener noreferrer\"\n      title=\"{{ locale.previewFile }}\"\n      [ngStyle]=\"!(file.url || file.thumbUrl) ? { opacity: 0.5, 'pointer-events': 'none' } : null\"\n      (click)=\"handlePreview(file, $event)\"\n    >\n      <i nz-icon nzType=\"eye\"></i>\n    </a>\n    <ng-template [ngTemplateOutlet]=\"downloadIcon\"></ng-template>\n    <ng-template [ngTemplateOutlet]=\"removeIcon\"></ng-template>\n  </span>\n  <div *ngIf=\"file.isUploading\" class=\"ant-upload-list-item-progress\">\n    <nz-progress\n      [nzPercent]=\"file.percent!\"\n      nzType=\"line\"\n      [nzShowInfo]=\"false\"\n      [nzStrokeWidth]=\"2\"\n    ></nz-progress>\n  </div>\n</div>\n",
                animations: [
                    trigger('itemState', [
                        transition(':enter', [style({ height: '0', width: '0', opacity: 0 }), animate(150, style({ height: '*', width: '*', opacity: 1 }))]),
                        transition(':leave', [animate(150, style({ height: '0', width: '0', opacity: 0 }))])
                    ])
                ],
                host: {
                    '[class.ant-upload-list]': `true`,
                    '[class.ant-upload-list-text]': `listType === 'text'`,
                    '[class.ant-upload-list-picture]': `listType === 'picture'`,
                    '[class.ant-upload-list-picture-card]': `listType === 'picture-card'`
                },
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NzUploadListComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: NgZone },
    { type: Platform }
];
NzUploadListComponent.propDecorators = {
    locale: [{ type: Input }],
    listType: [{ type: Input }],
    items: [{ type: Input }],
    icons: [{ type: Input }],
    onPreview: [{ type: Input }],
    onRemove: [{ type: Input }],
    onDownload: [{ type: Input }],
    previewFile: [{ type: Input }],
    previewIsImage: [{ type: Input }],
    iconRender: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzUploadListComponent.prototype.list;
    /** @type {?} */
    NzUploadListComponent.prototype.locale;
    /** @type {?} */
    NzUploadListComponent.prototype.listType;
    /** @type {?} */
    NzUploadListComponent.prototype.icons;
    /** @type {?} */
    NzUploadListComponent.prototype.onPreview;
    /** @type {?} */
    NzUploadListComponent.prototype.onRemove;
    /** @type {?} */
    NzUploadListComponent.prototype.onDownload;
    /** @type {?} */
    NzUploadListComponent.prototype.previewFile;
    /** @type {?} */
    NzUploadListComponent.prototype.previewIsImage;
    /** @type {?} */
    NzUploadListComponent.prototype.iconRender;
    /**
     * @type {?}
     * @private
     */
    NzUploadListComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzUploadListComponent.prototype.doc;
    /**
     * @type {?}
     * @private
     */
    NzUploadListComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzUploadListComponent.prototype.platform;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC91cGxvYWQvIiwic291cmNlcyI6WyJ1cGxvYWQtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7TUFNakIsZUFBZTs7OztBQUFHLENBQUMsSUFBWSxFQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBOzs7TUFFbkYsWUFBWSxHQUFHLEdBQUc7Ozs7QUFJeEIsNkJBTUM7OztJQUxDLG9DQUFxQjs7SUFDckIscUNBQXNCOztJQUN0QixrQ0FBOEI7O0lBQzlCLHlDQUE4Qjs7SUFDOUIsc0NBQXVCOztBQXVCekIsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7Ozs7SUFxTGhDLFlBQ1UsR0FBc0IsRUFDSixHQUFjLEVBQ2hDLE1BQWMsRUFDZCxRQUFrQjtRQUhsQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUNKLFFBQUcsR0FBSCxHQUFHLENBQVc7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVU7UUF4TDVCLFNBQUksR0FBcUIsRUFBRSxDQUFDO1FBTW5CLFdBQU0sR0FBYyxFQUFFLENBQUM7UUFZdkIsZUFBVSxHQUFr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QS9DQyxpQkFBaUI7NENBdU9kLE1BQU0sU0FBQyxRQUFRO1lBbk9sQixNQUFNO1lBUkMsUUFBUTs7O3FCQTJEZCxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFJTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7NkJBQ0wsS0FBSzt5QkFDTCxLQUFLOzs7O0lBbEJOLHFDQUE0Qjs7SUFNNUIsdUNBQWdDOztJQUNoQyx5Q0FBcUM7O0lBS3JDLHNDQUFrQzs7SUFDbEMsMENBQWtEOztJQUNsRCx5Q0FBaUQ7O0lBQ2pELDJDQUFtRDs7SUFDbkQsNENBQWtFOztJQUNsRSwrQ0FBMEQ7O0lBQzFELDJDQUEwRDs7Ozs7SUFtS3hELG9DQUE4Qjs7Ozs7SUFDOUIsb0NBQXdDOzs7OztJQUN4Qyx1Q0FBc0I7Ozs7O0lBQ3RCLHlDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ2xhc3NUeXBlLCBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOelNob3dVcGxvYWRMaXN0LCBOelVwbG9hZEZpbGUsIE56VXBsb2FkTGlzdFR5cGUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbmNvbnN0IGlzSW1hZ2VGaWxlVHlwZSA9ICh0eXBlOiBzdHJpbmcpOiBib29sZWFuID0+ICEhdHlwZSAmJiB0eXBlLmluZGV4T2YoJ2ltYWdlLycpID09PSAwO1xuXG5jb25zdCBNRUFTVVJFX1NJWkUgPSAyMDA7XG5cbnR5cGUgVXBsb2FkTGlzdEljb25UeXBlID0gJycgfCAndXBsb2FkaW5nJyB8ICd0aHVtYm5haWwnO1xuXG5pbnRlcmZhY2UgVXBsb2FkTGlzdEZpbGUgZXh0ZW5kcyBOelVwbG9hZEZpbGUge1xuICBpc0ltYWdlVXJsPzogYm9vbGVhbjtcbiAgaXNVcGxvYWRpbmc/OiBib29sZWFuO1xuICBpY29uVHlwZT86IFVwbG9hZExpc3RJY29uVHlwZTtcbiAgbGlzdEl0ZW1OYW1lQ2xzPzogTmdDbGFzc1R5cGU7XG4gIHNob3dEb3dubG9hZD86IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXVwbG9hZC1saXN0JyxcbiAgZXhwb3J0QXM6ICduelVwbG9hZExpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vdXBsb2FkLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignaXRlbVN0YXRlJywgW1xuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW3N0eWxlKHsgaGVpZ2h0OiAnMCcsIHdpZHRoOiAnMCcsIG9wYWNpdHk6IDAgfSksIGFuaW1hdGUoMTUwLCBzdHlsZSh7IGhlaWdodDogJyonLCB3aWR0aDogJyonLCBvcGFjaXR5OiAxIH0pKV0pLFxuICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgW2FuaW1hdGUoMTUwLCBzdHlsZSh7IGhlaWdodDogJzAnLCB3aWR0aDogJzAnLCBvcGFjaXR5OiAwIH0pKV0pXG4gICAgXSlcbiAgXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXVwbG9hZC1saXN0XSc6IGB0cnVlYCxcbiAgICAnW2NsYXNzLmFudC11cGxvYWQtbGlzdC10ZXh0XSc6IGBsaXN0VHlwZSA9PT0gJ3RleHQnYCxcbiAgICAnW2NsYXNzLmFudC11cGxvYWQtbGlzdC1waWN0dXJlXSc6IGBsaXN0VHlwZSA9PT0gJ3BpY3R1cmUnYCxcbiAgICAnW2NsYXNzLmFudC11cGxvYWQtbGlzdC1waWN0dXJlLWNhcmRdJzogYGxpc3RUeXBlID09PSAncGljdHVyZS1jYXJkJ2BcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE56VXBsb2FkTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIGxpc3Q6IFVwbG9hZExpc3RGaWxlW10gPSBbXTtcblxuICBwcml2YXRlIGdldCBzaG93UGljKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmxpc3RUeXBlID09PSAncGljdHVyZScgfHwgdGhpcy5saXN0VHlwZSA9PT0gJ3BpY3R1cmUtY2FyZCc7XG4gIH1cblxuICBASW5wdXQoKSBsb2NhbGU6IE56U2FmZUFueSA9IHt9O1xuICBASW5wdXQoKSBsaXN0VHlwZSE6IE56VXBsb2FkTGlzdFR5cGU7XG4gIEBJbnB1dCgpXG4gIHNldCBpdGVtcyhsaXN0OiBOelVwbG9hZEZpbGVbXSkge1xuICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gIH1cbiAgQElucHV0KCkgaWNvbnMhOiBOelNob3dVcGxvYWRMaXN0O1xuICBASW5wdXQoKSBvblByZXZpZXc/OiAoZmlsZTogTnpVcGxvYWRGaWxlKSA9PiB2b2lkO1xuICBASW5wdXQoKSBvblJlbW92ZSE6IChmaWxlOiBOelVwbG9hZEZpbGUpID0+IHZvaWQ7XG4gIEBJbnB1dCgpIG9uRG93bmxvYWQ/OiAoZmlsZTogTnpVcGxvYWRGaWxlKSA9PiB2b2lkO1xuICBASW5wdXQoKSBwcmV2aWV3RmlsZT86IChmaWxlOiBOelVwbG9hZEZpbGUpID0+IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgQElucHV0KCkgcHJldmlld0lzSW1hZ2U/OiAoZmlsZTogTnpVcGxvYWRGaWxlKSA9PiBib29sZWFuO1xuICBASW5wdXQoKSBpY29uUmVuZGVyOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG5cbiAgcHJpdmF0ZSBnZW5FcnIoZmlsZTogTnpVcGxvYWRGaWxlKTogc3RyaW5nIHtcbiAgICBpZiAoZmlsZS5yZXNwb25zZSAmJiB0eXBlb2YgZmlsZS5yZXNwb25zZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBmaWxlLnJlc3BvbnNlO1xuICAgIH1cbiAgICByZXR1cm4gKGZpbGUuZXJyb3IgJiYgZmlsZS5lcnJvci5zdGF0dXNUZXh0KSB8fCB0aGlzLmxvY2FsZS51cGxvYWRFcnJvcjtcbiAgfVxuXG4gIHByaXZhdGUgZXh0bmFtZSh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgdGVtcCA9IHVybC5zcGxpdCgnLycpO1xuICAgIGNvbnN0IGZpbGVuYW1lID0gdGVtcFt0ZW1wLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGZpbGVuYW1lV2l0aG91dFN1ZmZpeCA9IGZpbGVuYW1lLnNwbGl0KC8jfFxcPy8pWzBdO1xuICAgIHJldHVybiAoL1xcLlteLi9cXFxcXSokLy5leGVjKGZpbGVuYW1lV2l0aG91dFN1ZmZpeCkgfHwgWycnXSlbMF07XG4gIH1cblxuICBpc0ltYWdlVXJsKGZpbGU6IE56VXBsb2FkRmlsZSk6IGJvb2xlYW4ge1xuICAgIGlmIChpc0ltYWdlRmlsZVR5cGUoZmlsZS50eXBlISkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCB1cmw6IHN0cmluZyA9IChmaWxlLnRodW1iVXJsIHx8IGZpbGUudXJsIHx8ICcnKSBhcyBzdHJpbmc7XG4gICAgaWYgKCF1cmwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgZXh0ZW5zaW9uID0gdGhpcy5leHRuYW1lKHVybCk7XG4gICAgaWYgKC9eZGF0YTppbWFnZVxcLy8udGVzdCh1cmwpIHx8IC8od2VicHxzdmd8cG5nfGdpZnxqcGd8anBlZ3xqZmlmfGJtcHxkcGcpJC9pLnRlc3QoZXh0ZW5zaW9uKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICgvXmRhdGE6Ly50ZXN0KHVybCkpIHtcbiAgICAgIC8vIG90aGVyIGZpbGUgdHlwZXMgb2YgYmFzZTY0XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChleHRlbnNpb24pIHtcbiAgICAgIC8vIG90aGVyIGZpbGUgdHlwZXMgd2hpY2ggaGF2ZSBleHRlbnNpb25cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGdldEljb25UeXBlKGZpbGU6IFVwbG9hZExpc3RGaWxlKTogVXBsb2FkTGlzdEljb25UeXBlIHtcbiAgICBpZiAoIXRoaXMuc2hvd1BpYykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBpZiAoZmlsZS5pc1VwbG9hZGluZyB8fCAoIWZpbGUudGh1bWJVcmwgJiYgIWZpbGUudXJsKSkge1xuICAgICAgcmV0dXJuICd1cGxvYWRpbmcnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ3RodW1ibmFpbCc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwcmV2aWV3SW1hZ2UoZmlsZTogRmlsZSB8IEJsb2IpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmICghaXNJbWFnZUZpbGVUeXBlKGZpbGUudHlwZSkpIHtcbiAgICAgICAgcmVzb2x2ZSgnJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IE1FQVNVUkVfU0laRTtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IE1FQVNVUkVfU0laRTtcbiAgICAgICAgY2FudmFzLnN0eWxlLmNzc1RleHQgPSBgcG9zaXRpb246IGZpeGVkOyBsZWZ0OiAwOyB0b3A6IDA7IHdpZHRoOiAke01FQVNVUkVfU0laRX1weDsgaGVpZ2h0OiAke01FQVNVUkVfU0laRX1weDsgei1pbmRleDogOTk5OTsgZGlzcGxheTogbm9uZTtgO1xuICAgICAgICB0aGlzLmRvYy5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGltZztcblxuICAgICAgICAgIGxldCBkcmF3V2lkdGggPSBNRUFTVVJFX1NJWkU7XG4gICAgICAgICAgbGV0IGRyYXdIZWlnaHQgPSBNRUFTVVJFX1NJWkU7XG4gICAgICAgICAgbGV0IG9mZnNldFggPSAwO1xuICAgICAgICAgIGxldCBvZmZzZXRZID0gMDtcblxuICAgICAgICAgIGlmICh3aWR0aCA8IGhlaWdodCkge1xuICAgICAgICAgICAgZHJhd0hlaWdodCA9IGhlaWdodCAqIChNRUFTVVJFX1NJWkUgLyB3aWR0aCk7XG4gICAgICAgICAgICBvZmZzZXRZID0gLShkcmF3SGVpZ2h0IC0gZHJhd1dpZHRoKSAvIDI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRyYXdXaWR0aCA9IHdpZHRoICogKE1FQVNVUkVfU0laRSAvIGhlaWdodCk7XG4gICAgICAgICAgICBvZmZzZXRYID0gLShkcmF3V2lkdGggLSBkcmF3SGVpZ2h0KSAvIDI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGN0eCEuZHJhd0ltYWdlKGltZywgb2Zmc2V0WCwgb2Zmc2V0WSwgZHJhd1dpZHRoLCBkcmF3SGVpZ2h0KTtcbiAgICAgICAgICB9IGNhdGNoIHt9XG4gICAgICAgICAgY29uc3QgZGF0YVVSTCA9IGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICAgICAgICB0aGlzLmRvYy5ib2R5LnJlbW92ZUNoaWxkKGNhbnZhcyk7XG5cbiAgICAgICAgICByZXNvbHZlKGRhdGFVUkwpO1xuICAgICAgICB9O1xuICAgICAgICBpbWcuc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuVGh1bWIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHdpbiA9IHdpbmRvdyBhcyBOelNhZmVBbnk7XG4gICAgaWYgKCF0aGlzLnNob3dQaWMgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luID09PSAndW5kZWZpbmVkJyB8fCAhd2luLkZpbGVSZWFkZXIgfHwgIXdpbi5GaWxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubGlzdFxuICAgICAgLmZpbHRlcihmaWxlID0+IGZpbGUub3JpZ2luRmlsZU9iaiBpbnN0YW5jZW9mIEZpbGUgJiYgZmlsZS50aHVtYlVybCA9PT0gdW5kZWZpbmVkKVxuICAgICAgLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICAgIGZpbGUudGh1bWJVcmwgPSAnJztcbiAgICAgICAgKHRoaXMucHJldmlld0ZpbGUgPyB0aGlzLnByZXZpZXdGaWxlKGZpbGUpLnRvUHJvbWlzZSgpIDogdGhpcy5wcmV2aWV3SW1hZ2UoZmlsZS5vcmlnaW5GaWxlT2JqISkpLnRoZW4oZGF0YVVybCA9PiB7XG4gICAgICAgICAgZmlsZS50aHVtYlVybCA9IGRhdGFVcmw7XG4gICAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGxpc3RJdGVtTmFtZUNscyhmaWxlOiBOelVwbG9hZEZpbGUpOiBOZ0NsYXNzVHlwZSB7XG4gICAgY29uc3QgY291bnQgPSBbdGhpcy5zaG93RG93bmxvYWQoZmlsZSksIHRoaXMuaWNvbnMuc2hvd1JlbW92ZUljb25dLmZpbHRlcih4ID0+IHgpLmxlbmd0aDtcbiAgICByZXR1cm4ge1xuICAgICAgW2BhbnQtdXBsb2FkLWxpc3QtaXRlbS1uYW1lYF06IHRydWUsXG4gICAgICBbYGFudC11cGxvYWQtbGlzdC1pdGVtLW5hbWUtaWNvbi1jb3VudC0ke2NvdW50fWBdOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgc2hvd0Rvd25sb2FkKGZpbGU6IE56VXBsb2FkRmlsZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhISh0aGlzLmljb25zLnNob3dEb3dubG9hZEljb24gJiYgZmlsZS5zdGF0dXMgPT09ICdkb25lJyk7XG4gIH1cblxuICBwcml2YXRlIGZpeERhdGEoKTogdm9pZCB7XG4gICAgdGhpcy5saXN0LmZvckVhY2goZmlsZSA9PiB7XG4gICAgICBmaWxlLmlzVXBsb2FkaW5nID0gZmlsZS5zdGF0dXMgPT09ICd1cGxvYWRpbmcnO1xuICAgICAgZmlsZS5tZXNzYWdlID0gdGhpcy5nZW5FcnIoZmlsZSk7XG4gICAgICBmaWxlLmxpbmtQcm9wcyA9IHR5cGVvZiBmaWxlLmxpbmtQcm9wcyA9PT0gJ3N0cmluZycgPyBKU09OLnBhcnNlKGZpbGUubGlua1Byb3BzKSA6IGZpbGUubGlua1Byb3BzO1xuICAgICAgZmlsZS5pc0ltYWdlVXJsID0gdGhpcy5wcmV2aWV3SXNJbWFnZSA/IHRoaXMucHJldmlld0lzSW1hZ2UoZmlsZSkgOiB0aGlzLmlzSW1hZ2VVcmwoZmlsZSk7XG4gICAgICBmaWxlLmljb25UeXBlID0gdGhpcy5nZXRJY29uVHlwZShmaWxlKTtcbiAgICAgIGZpbGUubGlzdEl0ZW1OYW1lQ2xzID0gdGhpcy5saXN0SXRlbU5hbWVDbHMoZmlsZSk7XG4gICAgICBmaWxlLnNob3dEb3dubG9hZCA9IHRoaXMuc2hvd0Rvd25sb2FkKGZpbGUpO1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlUHJldmlldyhmaWxlOiBOelVwbG9hZEZpbGUsIGU6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm9uUHJldmlldykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByZXR1cm4gdGhpcy5vblByZXZpZXcoZmlsZSk7XG4gIH1cblxuICBoYW5kbGVSZW1vdmUoZmlsZTogTnpVcGxvYWRGaWxlLCBlOiBFdmVudCk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5vblJlbW92ZSkge1xuICAgICAgdGhpcy5vblJlbW92ZShmaWxlKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaGFuZGxlRG93bmxvYWQoZmlsZTogTnpVcGxvYWRGaWxlKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm9uRG93bmxvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMub25Eb3dubG9hZChmaWxlKTtcbiAgICB9IGVsc2UgaWYgKGZpbGUudXJsKSB7XG4gICAgICB3aW5kb3cub3BlbihmaWxlLnVybCk7XG4gICAgfVxuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogTnpTYWZlQW55LFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm1cbiAgKSB7fVxuXG4gIGRldGVjdENoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5maXhEYXRhKCk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5maXhEYXRhKCk7XG4gICAgdGhpcy5nZW5UaHVtYigpO1xuICB9XG59XG4iXX0=