/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ComponentFactory, ComponentFactoryResolver, ElementRef, EventEmitter, OnDestroy, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { NzButtonType } from 'ng-zorro-antd/button';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { BooleanInput, NgStyleInterface, NzTSType } from 'ng-zorro-antd/core/types';
import { NzTooltipBaseDirective, NzToolTipComponent, NzTooltipTrigger } from 'ng-zorro-antd/tooltip';
import { Subject } from 'rxjs';
export declare class NzPopconfirmDirective extends NzTooltipBaseDirective {
    static ngAcceptInputType_nzCondition: BooleanInput;
    static ngAcceptInputType_nzPopconfirmShowArrow: BooleanInput;
    specificTitle?: NzTSType;
    directiveNameTitle?: NzTSType | null;
    specificTrigger?: NzTooltipTrigger;
    specificPlacement?: string;
    specificOrigin?: ElementRef<HTMLElement>;
    specificMouseEnterDelay?: number;
    specificMouseLeaveDelay?: number;
    specificOverlayClassName?: string;
    specificOverlayStyle?: NgStyleInterface;
    nzOkText?: string;
    nzOkType?: string;
    nzCancelText?: string;
    nzIcon?: string | TemplateRef<void>;
    nzCondition: boolean;
    nzPopconfirmShowArrow: boolean;
    /**
     * @deprecated 10.0.0. This is deprecated and going to be removed in 10.0.0.
     * Please use a more specific API. Like `nzTooltipTrigger`.
     */
    nzTrigger: NzTooltipTrigger;
    specificVisible?: boolean;
    readonly specificVisibleChange: EventEmitter<boolean>;
    readonly nzOnCancel: EventEmitter<void>;
    readonly nzOnConfirm: EventEmitter<void>;
    protected readonly componentFactory: ComponentFactory<NzPopconfirmComponent>;
    protected readonly needProxyProperties: string[];
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, noAnimation?: NzNoAnimationDirective);
    /**
     * @override
     */
    protected createComponent(): void;
}
export declare class NzPopconfirmComponent extends NzToolTipComponent implements OnDestroy {
    noAnimation?: NzNoAnimationDirective | undefined;
    nzCancelText?: string;
    nzCondition: boolean;
    nzPopconfirmShowArrow: boolean;
    nzIcon?: string | TemplateRef<void>;
    nzOkText?: string;
    nzOkType: NzButtonType;
    readonly nzOnCancel: Subject<void>;
    readonly nzOnConfirm: Subject<void>;
    protected _trigger: NzTooltipTrigger;
    _prefix: string;
    _hasBackdrop: boolean;
    constructor(cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective | undefined);
    ngOnDestroy(): void;
    /**
     * @override
     */
    show(): void;
    onCancel(): void;
    onConfirm(): void;
}
