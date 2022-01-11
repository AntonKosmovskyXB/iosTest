/**
 * @fileoverview added by tsickle
 * Generated from: typography.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, Output, Renderer2, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { cancelRequestAnimationFrame, reqAnimFrame } from 'ng-zorro-antd/core/polyfill';
import { NzResizeService } from 'ng-zorro-antd/core/services';
import { InputBoolean, InputNumber, isStyleSupport, measure } from 'ng-zorro-antd/core/util';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzTextCopyComponent } from './text-copy.component';
import { NzTextEditComponent } from './text-edit.component';
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'typography';
/** @type {?} */
const EXPAND_ELEMENT_CLASSNAME = 'ant-typography-expand';
export class NzTypographyComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} host
     * @param {?} cdr
     * @param {?} viewContainerRef
     * @param {?} renderer
     * @param {?} platform
     * @param {?} i18n
     * @param {?} document
     * @param {?} resizeService
     */
    constructor(nzConfigService, host, cdr, viewContainerRef, renderer, platform, i18n, document, resizeService) {
        this.nzConfigService = nzConfigService;
        this.host = host;
        this.cdr = cdr;
        this.viewContainerRef = viewContainerRef;
        this.renderer = renderer;
        this.platform = platform;
        this.i18n = i18n;
        this.resizeService = resizeService;
        this.nzCopyable = false;
        this.nzEditable = false;
        this.nzDisabled = false;
        this.nzExpandable = false;
        this.nzEllipsis = false;
        this.nzEllipsisRows = 1;
        this.nzContentChange = new EventEmitter();
        this.nzCopy = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
        // This is not a two-way binding output with {@link nzEllipsis}
        this.nzOnEllipsis = new EventEmitter();
        this.expandableBtnElementCache = null;
        this.editing = false;
        this.cssEllipsis = false;
        this.isEllipsis = true;
        this.expanded = false;
        this.ellipsisStr = '...';
        this.viewInit = false;
        this.rfaId = -1;
        this.destroy$ = new Subject();
        this.windowResizeSubscription = Subscription.EMPTY;
        this.document = document;
    }
    /**
     * @return {?}
     */
    get hasEllipsisObservers() {
        return this.nzOnEllipsis.observers.length > 0;
    }
    /**
     * @return {?}
     */
    get canCssEllipsis() {
        return this.nzEllipsis && this.cssEllipsis && !this.expanded && !this.hasEllipsisObservers;
    }
    /**
     * @return {?}
     */
    get copyText() {
        return (/** @type {?} */ ((typeof this.nzCopyText === 'string' ? this.nzCopyText : this.nzContent)));
    }
    /**
     * @param {?} text
     * @return {?}
     */
    onTextCopy(text) {
        this.nzCopy.emit(text);
    }
    /**
     * @return {?}
     */
    onStartEditing() {
        this.editing = true;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    onEndEditing(text) {
        this.editing = false;
        this.nzContentChange.emit(text);
        if (this.nzContent === text) {
            this.renderOnNextFrame();
        }
    }
    /**
     * @return {?}
     */
    onExpand() {
        this.isEllipsis = false;
        this.expanded = true;
        this.nzExpandChange.emit();
        this.nzOnEllipsis.emit(false);
    }
    /**
     * @return {?}
     */
    canUseCSSEllipsis() {
        if (this.nzEditable || this.nzCopyable || this.nzExpandable || this.nzSuffix) {
            return false;
        }
        // make sure {@link nzOnEllipsis} works, will force use JS to calculations
        if (this.hasEllipsisObservers) {
            return false;
        }
        if (this.nzEllipsisRows === 1) {
            return isStyleSupport('textOverflow');
        }
        else {
            return isStyleSupport('webkitLineClamp');
        }
    }
    /**
     * @return {?}
     */
    renderOnNextFrame() {
        cancelRequestAnimationFrame(this.rfaId);
        if (!this.viewInit || !this.nzEllipsis || this.nzEllipsisRows < 0 || this.expanded || !this.platform.isBrowser) {
            return;
        }
        this.rfaId = reqAnimFrame((/**
         * @return {?}
         */
        () => {
            this.syncEllipsis();
        }));
    }
    /**
     * @return {?}
     */
    getOriginContentViewRef() {
        /** @type {?} */
        const viewRef = this.viewContainerRef.createEmbeddedView((/** @type {?} */ (this.contentTemplate)), {
            content: (/** @type {?} */ (this.nzContent))
        });
        viewRef.detectChanges();
        return {
            viewRef,
            removeView: (/**
             * @return {?}
             */
            () => {
                this.viewContainerRef.remove(this.viewContainerRef.indexOf(viewRef));
            })
        };
    }
    /**
     * @return {?}
     */
    syncEllipsis() {
        if (this.cssEllipsis) {
            return;
        }
        const { viewRef, removeView } = this.getOriginContentViewRef();
        /** @type {?} */
        const fixedNodes = [this.textCopyRef, this.textEditRef].filter((/**
         * @param {?} e
         * @return {?}
         */
        e => e && e.nativeElement)).map((/**
         * @param {?} e
         * @return {?}
         */
        e => (/** @type {?} */ (e)).nativeElement));
        /** @type {?} */
        const expandableBtnElement = this.getExpandableBtnElement();
        if (expandableBtnElement) {
            fixedNodes.push(expandableBtnElement);
        }
        const { contentNodes, text, ellipsis } = measure(this.host.nativeElement, this.nzEllipsisRows, viewRef.rootNodes, fixedNodes, this.ellipsisStr, this.nzSuffix);
        removeView();
        this.ellipsisText = text;
        if (ellipsis !== this.isEllipsis) {
            this.isEllipsis = ellipsis;
            this.nzOnEllipsis.emit(ellipsis);
        }
        /** @type {?} */
        const ellipsisContainerNativeElement = (/** @type {?} */ (this.ellipsisContainer)).nativeElement;
        while (ellipsisContainerNativeElement.firstChild) {
            this.renderer.removeChild(ellipsisContainerNativeElement, ellipsisContainerNativeElement.firstChild);
        }
        contentNodes.forEach((/**
         * @param {?} n
         * @return {?}
         */
        n => {
            this.renderer.appendChild(ellipsisContainerNativeElement, n.cloneNode(true));
        }));
        this.cdr.markForCheck();
    }
    // Need to create the element for calculation size before view init
    /**
     * @private
     * @return {?}
     */
    getExpandableBtnElement() {
        if (this.nzExpandable) {
            /** @type {?} */
            const expandText = this.locale ? this.locale.expand : '';
            /** @type {?} */
            const cache = this.expandableBtnElementCache;
            if (!cache || cache.innerText === expandText) {
                /** @type {?} */
                const el = this.document.createElement('a');
                el.className = EXPAND_ELEMENT_CLASSNAME;
                el.innerText = expandText;
                this.expandableBtnElementCache = el;
            }
            return this.expandableBtnElementCache;
        }
        else {
            this.expandableBtnElementCache = null;
            return null;
        }
    }
    /**
     * @private
     * @return {?}
     */
    renderAndSubscribeWindowResize() {
        if (this.platform.isBrowser) {
            this.windowResizeSubscription.unsubscribe();
            this.cssEllipsis = this.canUseCSSEllipsis();
            this.renderOnNextFrame();
            this.windowResizeSubscription = this.resizeService
                .subscribe()
                .pipe(takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            () => this.renderOnNextFrame()));
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getLocaleData('Text');
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.viewInit = true;
        this.renderAndSubscribeWindowResize();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzCopyable, nzEditable, nzExpandable, nzEllipsis, nzContent, nzEllipsisRows, nzSuffix } = changes;
        if (nzCopyable || nzEditable || nzExpandable || nzEllipsis || nzContent || nzEllipsisRows || nzSuffix) {
            if (this.nzEllipsis) {
                if (this.expanded) {
                    this.windowResizeSubscription.unsubscribe();
                }
                else {
                    this.renderAndSubscribeWindowResize();
                }
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.expandableBtnElementCache = null;
        this.windowResizeSubscription.unsubscribe();
    }
}
NzTypographyComponent.decorators = [
    { type: Component, args: [{
                selector: `
  nz-typography,
  [nz-typography],
  p[nz-paragraph],
  span[nz-text],
  h1[nz-title], h2[nz-title], h3[nz-title], h4[nz-title]
  `,
                exportAs: 'nzTypography',
                template: `
    <ng-template #contentTemplate let-content="content">
      <ng-content *ngIf="!content"></ng-content>
      {{ content }}
    </ng-template>
    <ng-container *ngIf="!editing">
      <ng-container
        *ngIf="
          expanded || (!nzExpandable && nzEllipsisRows === 1 && !hasEllipsisObservers) || canCssEllipsis || (nzSuffix && expanded);
          else jsEllipsis
        "
      >
        <ng-template [ngTemplateOutlet]="contentTemplate" [ngTemplateOutletContext]="{ content: nzContent }"></ng-template>
        <ng-container *ngIf="nzSuffix">{{ nzSuffix }}</ng-container>
      </ng-container>
      <ng-template #jsEllipsis>
        <span #ellipsisContainer></span>
        <ng-container *ngIf="isEllipsis">{{ ellipsisStr }}</ng-container>
        <ng-container *ngIf="nzSuffix">{{ nzSuffix }}</ng-container>
        <a #expandable *ngIf="nzExpandable && isEllipsis" class="ant-typography-expand" (click)="onExpand()">{{ locale?.expand }}</a>
      </ng-template>
    </ng-container>

    <nz-text-edit *ngIf="nzEditable" [text]="nzContent" (endEditing)="onEndEditing($event)" (startEditing)="onStartEditing()">
    </nz-text-edit>

    <nz-text-copy *ngIf="nzCopyable && !editing" [text]="copyText" (textCopy)="onTextCopy($event)"></nz-text-copy>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                host: {
                    '[class.ant-typography]': '!editing',
                    '[class.ant-typography-edit-content]': 'editing',
                    '[class.ant-typography-secondary]': 'nzType === "secondary"',
                    '[class.ant-typography-warning]': 'nzType === "warning"',
                    '[class.ant-typography-danger]': 'nzType === "danger"',
                    '[class.ant-typography-disabled]': 'nzDisabled',
                    '[class.ant-typography-ellipsis]': 'nzEllipsis && !expanded',
                    '[class.ant-typography-ellipsis-single-line]': 'canCssEllipsis && nzEllipsisRows === 1',
                    '[class.ant-typography-ellipsis-multiple-line]': 'canCssEllipsis && nzEllipsisRows > 1',
                    '[style.-webkit-line-clamp]': '(canCssEllipsis && nzEllipsisRows > 1) ? nzEllipsisRows : null'
                }
            }] }
];
/** @nocollapse */
NzTypographyComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: ViewContainerRef },
    { type: Renderer2 },
    { type: Platform },
    { type: NzI18nService },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: NzResizeService }
];
NzTypographyComponent.propDecorators = {
    nzCopyable: [{ type: Input }],
    nzEditable: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzExpandable: [{ type: Input }],
    nzEllipsis: [{ type: Input }],
    nzContent: [{ type: Input }],
    nzEllipsisRows: [{ type: Input }],
    nzType: [{ type: Input }],
    nzCopyText: [{ type: Input }],
    nzSuffix: [{ type: Input }],
    nzContentChange: [{ type: Output }],
    nzCopy: [{ type: Output }],
    nzExpandChange: [{ type: Output }],
    nzOnEllipsis: [{ type: Output }],
    textEditRef: [{ type: ViewChild, args: [NzTextEditComponent, { static: false },] }],
    textCopyRef: [{ type: ViewChild, args: [NzTextCopyComponent, { static: false },] }],
    ellipsisContainer: [{ type: ViewChild, args: ['ellipsisContainer', { static: false },] }],
    expandableBtn: [{ type: ViewChild, args: ['expandable', { static: false },] }],
    contentTemplate: [{ type: ViewChild, args: ['contentTemplate', { static: false },] }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzCopyable", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzEditable", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzExpandable", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzEllipsis", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME), InputNumber(),
    __metadata("design:type", Number)
], NzTypographyComponent.prototype, "nzEllipsisRows", void 0);
if (false) {
    /** @type {?} */
    NzTypographyComponent.ngAcceptInputType_nzCopyable;
    /** @type {?} */
    NzTypographyComponent.ngAcceptInputType_nzEditable;
    /** @type {?} */
    NzTypographyComponent.ngAcceptInputType_nzDisabled;
    /** @type {?} */
    NzTypographyComponent.ngAcceptInputType_nzExpandable;
    /** @type {?} */
    NzTypographyComponent.ngAcceptInputType_nzEllipsis;
    /** @type {?} */
    NzTypographyComponent.ngAcceptInputType_nzEllipsisRows;
    /** @type {?} */
    NzTypographyComponent.prototype.nzCopyable;
    /** @type {?} */
    NzTypographyComponent.prototype.nzEditable;
    /** @type {?} */
    NzTypographyComponent.prototype.nzDisabled;
    /** @type {?} */
    NzTypographyComponent.prototype.nzExpandable;
    /** @type {?} */
    NzTypographyComponent.prototype.nzEllipsis;
    /** @type {?} */
    NzTypographyComponent.prototype.nzContent;
    /** @type {?} */
    NzTypographyComponent.prototype.nzEllipsisRows;
    /** @type {?} */
    NzTypographyComponent.prototype.nzType;
    /** @type {?} */
    NzTypographyComponent.prototype.nzCopyText;
    /** @type {?} */
    NzTypographyComponent.prototype.nzSuffix;
    /** @type {?} */
    NzTypographyComponent.prototype.nzContentChange;
    /** @type {?} */
    NzTypographyComponent.prototype.nzCopy;
    /** @type {?} */
    NzTypographyComponent.prototype.nzExpandChange;
    /** @type {?} */
    NzTypographyComponent.prototype.nzOnEllipsis;
    /** @type {?} */
    NzTypographyComponent.prototype.textEditRef;
    /** @type {?} */
    NzTypographyComponent.prototype.textCopyRef;
    /** @type {?} */
    NzTypographyComponent.prototype.ellipsisContainer;
    /** @type {?} */
    NzTypographyComponent.prototype.expandableBtn;
    /** @type {?} */
    NzTypographyComponent.prototype.contentTemplate;
    /** @type {?} */
    NzTypographyComponent.prototype.locale;
    /** @type {?} */
    NzTypographyComponent.prototype.document;
    /** @type {?} */
    NzTypographyComponent.prototype.expandableBtnElementCache;
    /** @type {?} */
    NzTypographyComponent.prototype.editing;
    /** @type {?} */
    NzTypographyComponent.prototype.ellipsisText;
    /** @type {?} */
    NzTypographyComponent.prototype.cssEllipsis;
    /** @type {?} */
    NzTypographyComponent.prototype.isEllipsis;
    /** @type {?} */
    NzTypographyComponent.prototype.expanded;
    /** @type {?} */
    NzTypographyComponent.prototype.ellipsisStr;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.viewInit;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.rfaId;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.windowResizeSubscription;
    /** @type {?} */
    NzTypographyComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.host;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    NzTypographyComponent.prototype.resizeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwb2dyYXBoeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3R5cG9ncmFwaHkvIiwic291cmNlcyI6WyJ0eXBvZ3JhcGh5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUVWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEVBRVQsV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFN0YsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxhQUFhLEVBQXVCLE1BQU0sb0JBQW9CLENBQUM7QUFFeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O01BRXRELHdCQUF3QixHQUFHLFlBQVk7O01BQ3ZDLHdCQUF3QixHQUFHLHVCQUF1QjtBQXVEeEQsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7Ozs7Ozs7O0lBd0RoQyxZQUNTLGVBQWdDLEVBQy9CLElBQTZCLEVBQzdCLEdBQXNCLEVBQ3RCLGdCQUFrQyxFQUNsQyxRQUFtQixFQUNuQixRQUFrQixFQUNsQixJQUFtQixFQUNULFFBQW1CLEVBQzdCLGFBQThCO1FBUi9CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvQixTQUFJLEdBQUosSUFBSSxDQUF5QjtRQUM3QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixTQUFJLEdBQUosSUFBSSxDQUFlO1FBRW5CLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQXpEZixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRWtCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBSXRFLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUM3QyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNwQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7O1FBRTFDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQVU5RCw4QkFBeUIsR0FBdUIsSUFBSSxDQUFDO1FBQ3JELFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFaEIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsZUFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBVVosYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixVQUFLLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDbkIsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDekIsNkJBQXdCLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztRQWdCcEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQzs7OztJQTVCRCxJQUFJLG9CQUFvQjtRQUN0QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7OztJQUVELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7SUFDN0YsQ0FBQzs7OztJQU1ELElBQUksUUFBUTtRQUNWLE9BQU8sbUJBQUEsQ0FBQyxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQztJQUNuRixDQUFDOzs7OztJQWdCRCxVQUFVLENBQUMsSUFBWTtRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQVk7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtZQUMzQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzVFLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCwwRUFBMEU7UUFDMUUsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDN0IsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxDQUFDLEVBQUU7WUFDN0IsT0FBTyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDdkM7YUFBTTtZQUNMLE9BQU8sY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDMUM7SUFDSCxDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2YsMkJBQTJCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDOUcsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZOzs7UUFBQyxHQUFHLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELHVCQUF1Qjs7Y0FDZixPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFzQixtQkFBQSxJQUFJLENBQUMsZUFBZSxFQUFDLEVBQUU7WUFDbkcsT0FBTyxFQUFFLG1CQUFBLElBQUksQ0FBQyxTQUFTLEVBQUM7U0FDekIsQ0FBQztRQUNGLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QixPQUFPO1lBQ0wsT0FBTztZQUNQLFVBQVU7OztZQUFFLEdBQUcsRUFBRTtnQkFDZixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN2RSxDQUFDLENBQUE7U0FDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFlBQVk7UUFDVixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsT0FBTztTQUNSO2NBQ0ssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixFQUFFOztjQUN4RCxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBQyxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLG1CQUFBLENBQUMsRUFBQyxDQUFDLGFBQWEsRUFBQzs7Y0FDOUcsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixFQUFFO1FBQzNELElBQUksb0JBQW9CLEVBQUU7WUFDeEIsVUFBVSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQ3ZDO2NBQ0ssRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLE9BQU8sQ0FDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQ3ZCLElBQUksQ0FBQyxjQUFjLEVBQ25CLE9BQU8sQ0FBQyxTQUFTLEVBQ2pCLFVBQVUsRUFDVixJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsUUFBUSxDQUNkO1FBRUQsVUFBVSxFQUFFLENBQUM7UUFFYixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLFFBQVEsS0FBSyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2xDOztjQUNLLDhCQUE4QixHQUFHLG1CQUFBLElBQUksQ0FBQyxpQkFBaUIsRUFBQyxDQUFDLGFBQWE7UUFDNUUsT0FBTyw4QkFBOEIsQ0FBQyxVQUFVLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsOEJBQThCLEVBQUUsOEJBQThCLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDdEc7UUFDRCxZQUFZLENBQUMsT0FBTzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLDhCQUE4QixFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMvRSxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7O0lBR08sdUJBQXVCO1FBQzdCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTs7a0JBQ2YsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFOztrQkFDbEQsS0FBSyxHQUFHLElBQUksQ0FBQyx5QkFBeUI7WUFDNUMsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLFVBQVUsRUFBRTs7c0JBQ3RDLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7Z0JBQzNDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsd0JBQXdCLENBQUM7Z0JBQ3hDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO2dCQUMxQixJQUFJLENBQUMseUJBQXlCLEdBQUcsRUFBRSxDQUFDO2FBQ3JDO1lBQ0QsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUM7U0FDdkM7YUFBTTtZQUNMLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUM7WUFDdEMsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7Ozs7O0lBRU8sOEJBQThCO1FBQ3BDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDM0IsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDNUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxhQUFhO2lCQUMvQyxTQUFTLEVBQUU7aUJBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQzlCLFNBQVM7OztZQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ25FLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7Y0FDMUIsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsR0FBRyxPQUFPO1FBQ3pHLElBQUksVUFBVSxJQUFJLFVBQVUsSUFBSSxZQUFZLElBQUksVUFBVSxJQUFJLFNBQVMsSUFBSSxjQUFjLElBQUksUUFBUSxFQUFFO1lBQ3JHLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbkIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNqQixJQUFJLENBQUMsd0JBQXdCLENBQUMsV0FBVyxFQUFFLENBQUM7aUJBQzdDO3FCQUFNO29CQUNMLElBQUksQ0FBQyw4QkFBOEIsRUFBRSxDQUFDO2lCQUN2QzthQUNGO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDO1FBQ3RDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5QyxDQUFDOzs7WUF4UkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRTs7Ozs7O0dBTVQ7Z0JBQ0QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkJUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsSUFBSSxFQUFFO29CQUNKLHdCQUF3QixFQUFFLFVBQVU7b0JBQ3BDLHFDQUFxQyxFQUFFLFNBQVM7b0JBQ2hELGtDQUFrQyxFQUFFLHdCQUF3QjtvQkFDNUQsZ0NBQWdDLEVBQUUsc0JBQXNCO29CQUN4RCwrQkFBK0IsRUFBRSxxQkFBcUI7b0JBQ3RELGlDQUFpQyxFQUFFLFlBQVk7b0JBQy9DLGlDQUFpQyxFQUFFLHlCQUF5QjtvQkFDNUQsNkNBQTZDLEVBQUUsd0NBQXdDO29CQUN2RiwrQ0FBK0MsRUFBRSxzQ0FBc0M7b0JBQ3ZGLDRCQUE0QixFQUFFLGdFQUFnRTtpQkFDL0Y7YUFDRjs7OztZQXJFUSxlQUFlO1lBaEJ0QixVQUFVO1lBRlYsaUJBQWlCO1lBZWpCLGdCQUFnQjtZQUpoQixTQUFTO1lBaEJGLFFBQVE7WUFnQ1IsYUFBYTs0Q0E2SGpCLE1BQU0sU0FBQyxRQUFRO1lBcElYLGVBQWU7Ozt5QkE0RXJCLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzZCQUNMLEtBQUs7cUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7OEJBQ0wsTUFBTTtxQkFDTixNQUFNOzZCQUNOLE1BQU07MkJBRU4sTUFBTTswQkFFTixTQUFTLFNBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzBCQUNoRCxTQUFTLFNBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2dDQUNoRCxTQUFTLFNBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzRCQUNoRCxTQUFTLFNBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs4QkFDekMsU0FBUyxTQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7QUFwQnRCO0lBQWYsWUFBWSxFQUFFOzt5REFBb0I7QUFDbkI7SUFBZixZQUFZLEVBQUU7O3lEQUFvQjtBQUNuQjtJQUFmLFlBQVksRUFBRTs7eURBQW9CO0FBQ25CO0lBQWYsWUFBWSxFQUFFOzsyREFBc0I7QUFDckI7SUFBZixZQUFZLEVBQUU7O3lEQUFvQjtBQUVrQjtJQUFwRCxVQUFVLENBQUMsd0JBQXdCLENBQUMsRUFBRSxXQUFXLEVBQUU7OzZEQUE0Qjs7O0lBYnpGLG1EQUFrRDs7SUFDbEQsbURBQWtEOztJQUNsRCxtREFBa0Q7O0lBQ2xELHFEQUFvRDs7SUFDcEQsbURBQWtEOztJQUNsRCx1REFBcUQ7O0lBRXJELDJDQUE0Qzs7SUFDNUMsMkNBQTRDOztJQUM1QywyQ0FBNEM7O0lBQzVDLDZDQUE4Qzs7SUFDOUMsMkNBQTRDOztJQUM1QywwQ0FBNEI7O0lBQzVCLCtDQUF5Rjs7SUFDekYsdUNBQWdFOztJQUNoRSwyQ0FBd0M7O0lBQ3hDLHlDQUFzQzs7SUFDdEMsZ0RBQWdFOztJQUNoRSx1Q0FBdUQ7O0lBQ3ZELCtDQUE2RDs7SUFFN0QsNkNBQThEOztJQUU5RCw0Q0FBcUY7O0lBQ3JGLDRDQUFxRjs7SUFDckYsa0RBQW1HOztJQUNuRyw4Q0FBd0Y7O0lBQ3hGLGdEQUFvRzs7SUFFcEcsdUNBQTZCOztJQUM3Qix5Q0FBbUI7O0lBQ25CLDBEQUFxRDs7SUFDckQsd0NBQWdCOztJQUNoQiw2Q0FBaUM7O0lBQ2pDLDRDQUE2Qjs7SUFDN0IsMkNBQTJCOztJQUMzQix5Q0FBMEI7O0lBQzFCLDRDQUFvQjs7Ozs7SUFVcEIseUNBQXlCOzs7OztJQUN6QixzQ0FBMkI7Ozs7O0lBQzNCLHlDQUFpQzs7Ozs7SUFDakMseURBQXNEOztJQU1wRCxnREFBdUM7Ozs7O0lBQ3ZDLHFDQUFxQzs7Ozs7SUFDckMsb0NBQThCOzs7OztJQUM5QixpREFBMEM7Ozs7O0lBQzFDLHlDQUEyQjs7Ozs7SUFDM0IseUNBQTBCOzs7OztJQUMxQixxQ0FBMkI7Ozs7O0lBRTNCLDhDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBjYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUsIHJlcUFuaW1GcmFtZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9wb2x5ZmlsbCc7XG5pbXBvcnQgeyBOelJlc2l6ZVNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvc2VydmljZXMnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOdW1iZXJJbnB1dCwgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIGlzU3R5bGVTdXBwb3J0LCBtZWFzdXJlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuXG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTnpJMThuU2VydmljZSwgTnpUZXh0STE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5cbmltcG9ydCB7IE56VGV4dENvcHlDb21wb25lbnQgfSBmcm9tICcuL3RleHQtY29weS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpUZXh0RWRpdENvbXBvbmVudCB9IGZyb20gJy4vdGV4dC1lZGl0LmNvbXBvbmVudCc7XG5cbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICd0eXBvZ3JhcGh5JztcbmNvbnN0IEVYUEFORF9FTEVNRU5UX0NMQVNTTkFNRSA9ICdhbnQtdHlwb2dyYXBoeS1leHBhbmQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IGBcbiAgbnotdHlwb2dyYXBoeSxcbiAgW256LXR5cG9ncmFwaHldLFxuICBwW256LXBhcmFncmFwaF0sXG4gIHNwYW5bbnotdGV4dF0sXG4gIGgxW256LXRpdGxlXSwgaDJbbnotdGl0bGVdLCBoM1tuei10aXRsZV0sIGg0W256LXRpdGxlXVxuICBgLFxuICBleHBvcnRBczogJ256VHlwb2dyYXBoeScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNjb250ZW50VGVtcGxhdGUgbGV0LWNvbnRlbnQ9XCJjb250ZW50XCI+XG4gICAgICA8bmctY29udGVudCAqbmdJZj1cIiFjb250ZW50XCI+PC9uZy1jb250ZW50PlxuICAgICAge3sgY29udGVudCB9fVxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFlZGl0aW5nXCI+XG4gICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgZXhwYW5kZWQgfHwgKCFuekV4cGFuZGFibGUgJiYgbnpFbGxpcHNpc1Jvd3MgPT09IDEgJiYgIWhhc0VsbGlwc2lzT2JzZXJ2ZXJzKSB8fCBjYW5Dc3NFbGxpcHNpcyB8fCAobnpTdWZmaXggJiYgZXhwYW5kZWQpO1xuICAgICAgICAgIGVsc2UganNFbGxpcHNpc1xuICAgICAgICBcIlxuICAgICAgPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudFRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgY29udGVudDogbnpDb250ZW50IH1cIj48L25nLXRlbXBsYXRlPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpTdWZmaXhcIj57eyBuelN1ZmZpeCB9fTwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctdGVtcGxhdGUgI2pzRWxsaXBzaXM+XG4gICAgICAgIDxzcGFuICNlbGxpcHNpc0NvbnRhaW5lcj48L3NwYW4+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0VsbGlwc2lzXCI+e3sgZWxsaXBzaXNTdHIgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56U3VmZml4XCI+e3sgbnpTdWZmaXggfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPGEgI2V4cGFuZGFibGUgKm5nSWY9XCJuekV4cGFuZGFibGUgJiYgaXNFbGxpcHNpc1wiIGNsYXNzPVwiYW50LXR5cG9ncmFwaHktZXhwYW5kXCIgKGNsaWNrKT1cIm9uRXhwYW5kKClcIj57eyBsb2NhbGU/LmV4cGFuZCB9fTwvYT5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8bnotdGV4dC1lZGl0ICpuZ0lmPVwibnpFZGl0YWJsZVwiIFt0ZXh0XT1cIm56Q29udGVudFwiIChlbmRFZGl0aW5nKT1cIm9uRW5kRWRpdGluZygkZXZlbnQpXCIgKHN0YXJ0RWRpdGluZyk9XCJvblN0YXJ0RWRpdGluZygpXCI+XG4gICAgPC9uei10ZXh0LWVkaXQ+XG5cbiAgICA8bnotdGV4dC1jb3B5ICpuZ0lmPVwibnpDb3B5YWJsZSAmJiAhZWRpdGluZ1wiIFt0ZXh0XT1cImNvcHlUZXh0XCIgKHRleHRDb3B5KT1cIm9uVGV4dENvcHkoJGV2ZW50KVwiPjwvbnotdGV4dC1jb3B5PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC10eXBvZ3JhcGh5XSc6ICchZWRpdGluZycsXG4gICAgJ1tjbGFzcy5hbnQtdHlwb2dyYXBoeS1lZGl0LWNvbnRlbnRdJzogJ2VkaXRpbmcnLFxuICAgICdbY2xhc3MuYW50LXR5cG9ncmFwaHktc2Vjb25kYXJ5XSc6ICduelR5cGUgPT09IFwic2Vjb25kYXJ5XCInLFxuICAgICdbY2xhc3MuYW50LXR5cG9ncmFwaHktd2FybmluZ10nOiAnbnpUeXBlID09PSBcIndhcm5pbmdcIicsXG4gICAgJ1tjbGFzcy5hbnQtdHlwb2dyYXBoeS1kYW5nZXJdJzogJ256VHlwZSA9PT0gXCJkYW5nZXJcIicsXG4gICAgJ1tjbGFzcy5hbnQtdHlwb2dyYXBoeS1kaXNhYmxlZF0nOiAnbnpEaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5hbnQtdHlwb2dyYXBoeS1lbGxpcHNpc10nOiAnbnpFbGxpcHNpcyAmJiAhZXhwYW5kZWQnLFxuICAgICdbY2xhc3MuYW50LXR5cG9ncmFwaHktZWxsaXBzaXMtc2luZ2xlLWxpbmVdJzogJ2NhbkNzc0VsbGlwc2lzICYmIG56RWxsaXBzaXNSb3dzID09PSAxJyxcbiAgICAnW2NsYXNzLmFudC10eXBvZ3JhcGh5LWVsbGlwc2lzLW11bHRpcGxlLWxpbmVdJzogJ2NhbkNzc0VsbGlwc2lzICYmIG56RWxsaXBzaXNSb3dzID4gMScsXG4gICAgJ1tzdHlsZS4td2Via2l0LWxpbmUtY2xhbXBdJzogJyhjYW5Dc3NFbGxpcHNpcyAmJiBuekVsbGlwc2lzUm93cyA+IDEpID8gbnpFbGxpcHNpc1Jvd3MgOiBudWxsJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56VHlwb2dyYXBoeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpDb3B5YWJsZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpFZGl0YWJsZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpEaXNhYmxlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpFeHBhbmRhYmxlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekVsbGlwc2lzOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekVsbGlwc2lzUm93czogTnVtYmVySW5wdXQ7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q29weWFibGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RWRpdGFibGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RXhwYW5kYWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpFbGxpcHNpcyA9IGZhbHNlO1xuICBASW5wdXQoKSBuekNvbnRlbnQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgQElucHV0TnVtYmVyKCkgbnpFbGxpcHNpc1Jvd3M6IG51bWJlciA9IDE7XG4gIEBJbnB1dCgpIG56VHlwZTogJ3NlY29uZGFyeScgfCAnd2FybmluZycgfCAnZGFuZ2VyJyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgbnpDb3B5VGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSBuelN1ZmZpeDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDb250ZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNvcHkgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RXhwYW5kQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICAvLyBUaGlzIGlzIG5vdCBhIHR3by13YXkgYmluZGluZyBvdXRwdXQgd2l0aCB7QGxpbmsgbnpFbGxpcHNpc31cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25FbGxpcHNpcyA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBAVmlld0NoaWxkKE56VGV4dEVkaXRDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KSB0ZXh0RWRpdFJlZj86IE56VGV4dEVkaXRDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoTnpUZXh0Q29weUNvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIHRleHRDb3B5UmVmPzogTnpUZXh0Q29weUNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgnZWxsaXBzaXNDb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgZWxsaXBzaXNDb250YWluZXI/OiBFbGVtZW50UmVmPEhUTUxTcGFuRWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ2V4cGFuZGFibGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgZXhwYW5kYWJsZUJ0bj86IEVsZW1lbnRSZWY8SFRNTFNwYW5FbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnY29udGVudFRlbXBsYXRlJywgeyBzdGF0aWM6IGZhbHNlIH0pIGNvbnRlbnRUZW1wbGF0ZT86IFRlbXBsYXRlUmVmPHsgY29udGVudDogc3RyaW5nIH0+O1xuXG4gIGxvY2FsZSE6IE56VGV4dEkxOG5JbnRlcmZhY2U7XG4gIGRvY3VtZW50OiBEb2N1bWVudDtcbiAgZXhwYW5kYWJsZUJ0bkVsZW1lbnRDYWNoZTogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgZWRpdGluZyA9IGZhbHNlO1xuICBlbGxpcHNpc1RleHQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY3NzRWxsaXBzaXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXNFbGxpcHNpczogYm9vbGVhbiA9IHRydWU7XG4gIGV4cGFuZGVkOiBib29sZWFuID0gZmFsc2U7XG4gIGVsbGlwc2lzU3RyID0gJy4uLic7XG5cbiAgZ2V0IGhhc0VsbGlwc2lzT2JzZXJ2ZXJzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56T25FbGxpcHNpcy5vYnNlcnZlcnMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIGdldCBjYW5Dc3NFbGxpcHNpcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uekVsbGlwc2lzICYmIHRoaXMuY3NzRWxsaXBzaXMgJiYgIXRoaXMuZXhwYW5kZWQgJiYgIXRoaXMuaGFzRWxsaXBzaXNPYnNlcnZlcnM7XG4gIH1cblxuICBwcml2YXRlIHZpZXdJbml0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmZhSWQ6IG51bWJlciA9IC0xO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSB3aW5kb3dSZXNpemVTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIGdldCBjb3B5VGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAodHlwZW9mIHRoaXMubnpDb3B5VGV4dCA9PT0gJ3N0cmluZycgPyB0aGlzLm56Q29weVRleHQgOiB0aGlzLm56Q29udGVudCkhO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgaG9zdDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIGRvY3VtZW50OiBOelNhZmVBbnksXG4gICAgcHJpdmF0ZSByZXNpemVTZXJ2aWNlOiBOelJlc2l6ZVNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5kb2N1bWVudCA9IGRvY3VtZW50O1xuICB9XG5cbiAgb25UZXh0Q29weSh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm56Q29weS5lbWl0KHRleHQpO1xuICB9XG5cbiAgb25TdGFydEVkaXRpbmcoKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0aW5nID0gdHJ1ZTtcbiAgfVxuXG4gIG9uRW5kRWRpdGluZyh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm56Q29udGVudENoYW5nZS5lbWl0KHRleHQpO1xuICAgIGlmICh0aGlzLm56Q29udGVudCA9PT0gdGV4dCkge1xuICAgICAgdGhpcy5yZW5kZXJPbk5leHRGcmFtZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uRXhwYW5kKCk6IHZvaWQge1xuICAgIHRoaXMuaXNFbGxpcHNpcyA9IGZhbHNlO1xuICAgIHRoaXMuZXhwYW5kZWQgPSB0cnVlO1xuICAgIHRoaXMubnpFeHBhbmRDaGFuZ2UuZW1pdCgpO1xuICAgIHRoaXMubnpPbkVsbGlwc2lzLmVtaXQoZmFsc2UpO1xuICB9XG5cbiAgY2FuVXNlQ1NTRWxsaXBzaXMoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMubnpFZGl0YWJsZSB8fCB0aGlzLm56Q29weWFibGUgfHwgdGhpcy5uekV4cGFuZGFibGUgfHwgdGhpcy5uelN1ZmZpeCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBtYWtlIHN1cmUge0BsaW5rIG56T25FbGxpcHNpc30gd29ya3MsIHdpbGwgZm9yY2UgdXNlIEpTIHRvIGNhbGN1bGF0aW9uc1xuICAgIGlmICh0aGlzLmhhc0VsbGlwc2lzT2JzZXJ2ZXJzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLm56RWxsaXBzaXNSb3dzID09PSAxKSB7XG4gICAgICByZXR1cm4gaXNTdHlsZVN1cHBvcnQoJ3RleHRPdmVyZmxvdycpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaXNTdHlsZVN1cHBvcnQoJ3dlYmtpdExpbmVDbGFtcCcpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlck9uTmV4dEZyYW1lKCk6IHZvaWQge1xuICAgIGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJmYUlkKTtcbiAgICBpZiAoIXRoaXMudmlld0luaXQgfHwgIXRoaXMubnpFbGxpcHNpcyB8fCB0aGlzLm56RWxsaXBzaXNSb3dzIDwgMCB8fCB0aGlzLmV4cGFuZGVkIHx8ICF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnJmYUlkID0gcmVxQW5pbUZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuc3luY0VsbGlwc2lzKCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRPcmlnaW5Db250ZW50Vmlld1JlZigpOiB7IHZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjx7IGNvbnRlbnQ6IHN0cmluZyB9PjsgcmVtb3ZlVmlldygpOiB2b2lkIH0ge1xuICAgIGNvbnN0IHZpZXdSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlRW1iZWRkZWRWaWV3PHsgY29udGVudDogc3RyaW5nIH0+KHRoaXMuY29udGVudFRlbXBsYXRlISwge1xuICAgICAgY29udGVudDogdGhpcy5uekNvbnRlbnQhXG4gICAgfSk7XG4gICAgdmlld1JlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZpZXdSZWYsXG4gICAgICByZW1vdmVWaWV3OiAoKSA9PiB7XG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5yZW1vdmUodGhpcy52aWV3Q29udGFpbmVyUmVmLmluZGV4T2Yodmlld1JlZikpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBzeW5jRWxsaXBzaXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY3NzRWxsaXBzaXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyB2aWV3UmVmLCByZW1vdmVWaWV3IH0gPSB0aGlzLmdldE9yaWdpbkNvbnRlbnRWaWV3UmVmKCk7XG4gICAgY29uc3QgZml4ZWROb2RlcyA9IFt0aGlzLnRleHRDb3B5UmVmLCB0aGlzLnRleHRFZGl0UmVmXS5maWx0ZXIoZSA9PiBlICYmIGUubmF0aXZlRWxlbWVudCkubWFwKGUgPT4gZSEubmF0aXZlRWxlbWVudCk7XG4gICAgY29uc3QgZXhwYW5kYWJsZUJ0bkVsZW1lbnQgPSB0aGlzLmdldEV4cGFuZGFibGVCdG5FbGVtZW50KCk7XG4gICAgaWYgKGV4cGFuZGFibGVCdG5FbGVtZW50KSB7XG4gICAgICBmaXhlZE5vZGVzLnB1c2goZXhwYW5kYWJsZUJ0bkVsZW1lbnQpO1xuICAgIH1cbiAgICBjb25zdCB7IGNvbnRlbnROb2RlcywgdGV4dCwgZWxsaXBzaXMgfSA9IG1lYXN1cmUoXG4gICAgICB0aGlzLmhvc3QubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMubnpFbGxpcHNpc1Jvd3MsXG4gICAgICB2aWV3UmVmLnJvb3ROb2RlcyxcbiAgICAgIGZpeGVkTm9kZXMsXG4gICAgICB0aGlzLmVsbGlwc2lzU3RyLFxuICAgICAgdGhpcy5uelN1ZmZpeFxuICAgICk7XG5cbiAgICByZW1vdmVWaWV3KCk7XG5cbiAgICB0aGlzLmVsbGlwc2lzVGV4dCA9IHRleHQ7XG4gICAgaWYgKGVsbGlwc2lzICE9PSB0aGlzLmlzRWxsaXBzaXMpIHtcbiAgICAgIHRoaXMuaXNFbGxpcHNpcyA9IGVsbGlwc2lzO1xuICAgICAgdGhpcy5uek9uRWxsaXBzaXMuZW1pdChlbGxpcHNpcyk7XG4gICAgfVxuICAgIGNvbnN0IGVsbGlwc2lzQ29udGFpbmVyTmF0aXZlRWxlbWVudCA9IHRoaXMuZWxsaXBzaXNDb250YWluZXIhLm5hdGl2ZUVsZW1lbnQ7XG4gICAgd2hpbGUgKGVsbGlwc2lzQ29udGFpbmVyTmF0aXZlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKGVsbGlwc2lzQ29udGFpbmVyTmF0aXZlRWxlbWVudCwgZWxsaXBzaXNDb250YWluZXJOYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBjb250ZW50Tm9kZXMuZm9yRWFjaChuID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoZWxsaXBzaXNDb250YWluZXJOYXRpdmVFbGVtZW50LCBuLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgfSk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvLyBOZWVkIHRvIGNyZWF0ZSB0aGUgZWxlbWVudCBmb3IgY2FsY3VsYXRpb24gc2l6ZSBiZWZvcmUgdmlldyBpbml0XG4gIHByaXZhdGUgZ2V0RXhwYW5kYWJsZUJ0bkVsZW1lbnQoKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgICBpZiAodGhpcy5uekV4cGFuZGFibGUpIHtcbiAgICAgIGNvbnN0IGV4cGFuZFRleHQgPSB0aGlzLmxvY2FsZSA/IHRoaXMubG9jYWxlLmV4cGFuZCA6ICcnO1xuICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmV4cGFuZGFibGVCdG5FbGVtZW50Q2FjaGU7XG4gICAgICBpZiAoIWNhY2hlIHx8IGNhY2hlLmlubmVyVGV4dCA9PT0gZXhwYW5kVGV4dCkge1xuICAgICAgICBjb25zdCBlbCA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBlbC5jbGFzc05hbWUgPSBFWFBBTkRfRUxFTUVOVF9DTEFTU05BTUU7XG4gICAgICAgIGVsLmlubmVyVGV4dCA9IGV4cGFuZFRleHQ7XG4gICAgICAgIHRoaXMuZXhwYW5kYWJsZUJ0bkVsZW1lbnRDYWNoZSA9IGVsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuZXhwYW5kYWJsZUJ0bkVsZW1lbnRDYWNoZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5leHBhbmRhYmxlQnRuRWxlbWVudENhY2hlID0gbnVsbDtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyQW5kU3Vic2NyaWJlV2luZG93UmVzaXplKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy53aW5kb3dSZXNpemVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuY3NzRWxsaXBzaXMgPSB0aGlzLmNhblVzZUNTU0VsbGlwc2lzKCk7XG4gICAgICB0aGlzLnJlbmRlck9uTmV4dEZyYW1lKCk7XG4gICAgICB0aGlzLndpbmRvd1Jlc2l6ZVN1YnNjcmlwdGlvbiA9IHRoaXMucmVzaXplU2VydmljZVxuICAgICAgICAuc3Vic2NyaWJlKClcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVuZGVyT25OZXh0RnJhbWUoKSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ1RleHQnKTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudmlld0luaXQgPSB0cnVlO1xuICAgIHRoaXMucmVuZGVyQW5kU3Vic2NyaWJlV2luZG93UmVzaXplKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuekNvcHlhYmxlLCBuekVkaXRhYmxlLCBuekV4cGFuZGFibGUsIG56RWxsaXBzaXMsIG56Q29udGVudCwgbnpFbGxpcHNpc1Jvd3MsIG56U3VmZml4IH0gPSBjaGFuZ2VzO1xuICAgIGlmIChuekNvcHlhYmxlIHx8IG56RWRpdGFibGUgfHwgbnpFeHBhbmRhYmxlIHx8IG56RWxsaXBzaXMgfHwgbnpDb250ZW50IHx8IG56RWxsaXBzaXNSb3dzIHx8IG56U3VmZml4KSB7XG4gICAgICBpZiAodGhpcy5uekVsbGlwc2lzKSB7XG4gICAgICAgIGlmICh0aGlzLmV4cGFuZGVkKSB7XG4gICAgICAgICAgdGhpcy53aW5kb3dSZXNpemVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbmRlckFuZFN1YnNjcmliZVdpbmRvd1Jlc2l6ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuZXhwYW5kYWJsZUJ0bkVsZW1lbnRDYWNoZSA9IG51bGw7XG4gICAgdGhpcy53aW5kb3dSZXNpemVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19