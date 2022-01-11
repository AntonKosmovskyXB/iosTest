/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Clipboard } from '@angular/cdk/clipboard';
import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { NzI18nService, NzTextI18nInterface } from 'ng-zorro-antd/i18n';
export declare class NzTextCopyComponent implements OnInit, OnDestroy {
    private host;
    private cdr;
    private clipboard;
    private i18n;
    copied: boolean;
    copyId: number;
    locale: NzTextI18nInterface;
    nativeElement: any;
    private destroy$;
    text: string;
    readonly textCopy: EventEmitter<string>;
    constructor(host: ElementRef, cdr: ChangeDetectorRef, clipboard: Clipboard, i18n: NzI18nService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onClick(): void;
    onCopied(): void;
}
