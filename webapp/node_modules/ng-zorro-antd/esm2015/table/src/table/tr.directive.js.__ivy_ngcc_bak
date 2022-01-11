/**
 * @fileoverview added by tsickle
 * Generated from: src/table/tr.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ContentChildren, Directive, Optional, QueryList } from '@angular/core';
import { combineLatest, merge, ReplaySubject, Subject } from 'rxjs';
import { flatMap, map, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { NzCellFixedDirective } from '../cell/cell-fixed.directive';
import { NzThMeasureDirective } from '../cell/th-measure.directive';
import { NzTableStyleService } from '../table-style.service';
export class NzTrDirective {
    /**
     * @param {?} nzTableStyleService
     */
    constructor(nzTableStyleService) {
        this.nzTableStyleService = nzTableStyleService;
        this.destroy$ = new Subject();
        this.listOfFixedColumns$ = new ReplaySubject(1);
        this.listOfColumns$ = new ReplaySubject(1);
        this.listOfFixedColumnsChanges$ = this.listOfFixedColumns$.pipe(switchMap((/**
         * @param {?} list
         * @return {?}
         */
        list => merge(...[this.listOfFixedColumns$, ...list.map((/**
             * @param {?} c
             * @return {?}
             */
            (c) => c.changes$))]).pipe(flatMap((/**
         * @return {?}
         */
        () => this.listOfFixedColumns$))))), takeUntil(this.destroy$));
        this.listOfFixedLeftColumnChanges$ = this.listOfFixedColumnsChanges$.pipe(map((/**
         * @param {?} list
         * @return {?}
         */
        list => list.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.nzLeft !== false)))));
        this.listOfFixedRightColumnChanges$ = this.listOfFixedColumnsChanges$.pipe(map((/**
         * @param {?} list
         * @return {?}
         */
        list => list.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.nzRight !== false)))));
        this.listOfColumnsChanges$ = this.listOfColumns$.pipe(switchMap((/**
         * @param {?} list
         * @return {?}
         */
        list => merge(...[this.listOfColumns$, ...list.map((/**
             * @param {?} c
             * @return {?}
             */
            (c) => c.changes$))]).pipe(flatMap((/**
         * @return {?}
         */
        () => this.listOfColumns$))))), takeUntil(this.destroy$));
        this.isInsideTable = false;
        this.isInsideTable = !!nzTableStyleService;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.nzTableStyleService) {
            this.listOfCellFixedDirective.changes
                .pipe(startWith(this.listOfCellFixedDirective), takeUntil(this.destroy$))
                .subscribe(this.listOfFixedColumns$);
            this.listOfNzThDirective.changes.pipe(startWith(this.listOfNzThDirective), takeUntil(this.destroy$)).subscribe(this.listOfColumns$);
            /** set last left and first right **/
            this.listOfFixedLeftColumnChanges$.subscribe((/**
             * @param {?} listOfFixedLeft
             * @return {?}
             */
            listOfFixedLeft => {
                listOfFixedLeft.forEach((/**
                 * @param {?} cell
                 * @return {?}
                 */
                cell => cell.setIsLastLeft(cell === listOfFixedLeft[listOfFixedLeft.length - 1])));
            }));
            this.listOfFixedRightColumnChanges$.subscribe((/**
             * @param {?} listOfFixedRight
             * @return {?}
             */
            listOfFixedRight => {
                listOfFixedRight.forEach((/**
                 * @param {?} cell
                 * @return {?}
                 */
                cell => cell.setIsFirstRight(cell === listOfFixedRight[0])));
            }));
            /** calculate fixed nzLeft and nzRight **/
            combineLatest([this.nzTableStyleService.listOfListOfThWidth$, this.listOfFixedLeftColumnChanges$]).subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            ([listOfAutoWidth, listOfLeftCell]) => {
                listOfLeftCell.forEach((/**
                 * @param {?} cell
                 * @param {?} index
                 * @return {?}
                 */
                (cell, index) => {
                    if (cell.isAutoLeft) {
                        /** @type {?} */
                        const currentArray = listOfLeftCell.slice(0, index);
                        /** @type {?} */
                        const count = currentArray.reduce((/**
                         * @param {?} pre
                         * @param {?} cur
                         * @return {?}
                         */
                        (pre, cur) => pre + (cur.colspan || cur.colSpan || 1)), 0);
                        /** @type {?} */
                        const width = listOfAutoWidth.slice(0, count).reduce((/**
                         * @param {?} pre
                         * @param {?} cur
                         * @return {?}
                         */
                        (pre, cur) => pre + cur), 0);
                        cell.setAutoLeftWidth(`${width}px`);
                    }
                }));
            }));
            combineLatest([this.nzTableStyleService.listOfListOfThWidth$, this.listOfFixedRightColumnChanges$]).subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            ([listOfAutoWidth, listOfRightCell]) => {
                listOfRightCell.forEach((/**
                 * @param {?} _
                 * @param {?} index
                 * @return {?}
                 */
                (_, index) => {
                    /** @type {?} */
                    const cell = listOfRightCell[listOfRightCell.length - index - 1];
                    if (cell.isAutoRight) {
                        /** @type {?} */
                        const currentArray = listOfRightCell.slice(listOfRightCell.length - index, listOfRightCell.length);
                        /** @type {?} */
                        const count = currentArray.reduce((/**
                         * @param {?} pre
                         * @param {?} cur
                         * @return {?}
                         */
                        (pre, cur) => pre + (cur.colspan || cur.colSpan || 1)), 0);
                        /** @type {?} */
                        const width = listOfAutoWidth
                            .slice(listOfAutoWidth.length - count, listOfAutoWidth.length)
                            .reduce((/**
                         * @param {?} pre
                         * @param {?} cur
                         * @return {?}
                         */
                        (pre, cur) => pre + cur), 0);
                        cell.setAutoRightWidth(`${width}px`);
                    }
                }));
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTrDirective.decorators = [
    { type: Directive, args: [{
                selector: 'tr:not([mat-row]):not([mat-header-row]):not([nz-table-measure-row]):not([nzExpand]):not([nz-table-fixed-row])',
                host: {
                    '[class.ant-table-row]': 'isInsideTable'
                }
            },] }
];
/** @nocollapse */
NzTrDirective.ctorParameters = () => [
    { type: NzTableStyleService, decorators: [{ type: Optional }] }
];
NzTrDirective.propDecorators = {
    listOfNzThDirective: [{ type: ContentChildren, args: [NzThMeasureDirective,] }],
    listOfCellFixedDirective: [{ type: ContentChildren, args: [NzCellFixedDirective,] }]
};
if (false) {
    /** @type {?} */
    NzTrDirective.prototype.listOfNzThDirective;
    /** @type {?} */
    NzTrDirective.prototype.listOfCellFixedDirective;
    /**
     * @type {?}
     * @private
     */
    NzTrDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzTrDirective.prototype.listOfFixedColumns$;
    /**
     * @type {?}
     * @private
     */
    NzTrDirective.prototype.listOfColumns$;
    /** @type {?} */
    NzTrDirective.prototype.listOfFixedColumnsChanges$;
    /** @type {?} */
    NzTrDirective.prototype.listOfFixedLeftColumnChanges$;
    /** @type {?} */
    NzTrDirective.prototype.listOfFixedRightColumnChanges$;
    /** @type {?} */
    NzTrDirective.prototype.listOfColumnsChanges$;
    /** @type {?} */
    NzTrDirective.prototype.isInsideTable;
    /**
     * @type {?}
     * @private
     */
    NzTrDirective.prototype.nzTableStyleService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbInNyYy90YWJsZS90ci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFvQixlQUFlLEVBQUUsU0FBUyxFQUFhLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQWMsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRixPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBUTdELE1BQU0sT0FBTyxhQUFhOzs7O0lBd0J4QixZQUFnQyxtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQXJCaEUsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDL0Isd0JBQW1CLEdBQUcsSUFBSSxhQUFhLENBQXlCLENBQUMsQ0FBQyxDQUFDO1FBQ25FLG1CQUFjLEdBQUcsSUFBSSxhQUFhLENBQXlCLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLCtCQUEwQixHQUF1QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUM1RixTQUFTOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDZixLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHOzs7O1lBQUMsQ0FBQyxDQUF1QixFQUFFLEVBQUUsQ0FB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RSx1Q0FBc0U7O0lBQ3RFLG1EQU9FOztJQUNGLHNEQUE4SDs7SUFDOUgsdURBQWdJOztJQUNoSSw4Q0FLRTs7SUFDRixzQ0FBc0I7Ozs7O0lBRVYsNENBQTREIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ29udGVudENoaWxkcmVuLCBEaXJlY3RpdmUsIE9uRGVzdHJveSwgT3B0aW9uYWwsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgbWVyZ2UsIE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZsYXRNYXAsIG1hcCwgc3RhcnRXaXRoLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE56Q2VsbEZpeGVkRGlyZWN0aXZlIH0gZnJvbSAnLi4vY2VsbC9jZWxsLWZpeGVkLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOelRoTWVhc3VyZURpcmVjdGl2ZSB9IGZyb20gJy4uL2NlbGwvdGgtbWVhc3VyZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTnpUYWJsZVN0eWxlU2VydmljZSB9IGZyb20gJy4uL3RhYmxlLXN0eWxlLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICd0cjpub3QoW21hdC1yb3ddKTpub3QoW21hdC1oZWFkZXItcm93XSk6bm90KFtuei10YWJsZS1tZWFzdXJlLXJvd10pOm5vdChbbnpFeHBhbmRdKTpub3QoW256LXRhYmxlLWZpeGVkLXJvd10pJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXRhYmxlLXJvd10nOiAnaXNJbnNpZGVUYWJsZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelRyRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgQENvbnRlbnRDaGlsZHJlbihOelRoTWVhc3VyZURpcmVjdGl2ZSkgbGlzdE9mTnpUaERpcmVjdGl2ZSE6IFF1ZXJ5TGlzdDxOelRoTWVhc3VyZURpcmVjdGl2ZT47XG4gIEBDb250ZW50Q2hpbGRyZW4oTnpDZWxsRml4ZWREaXJlY3RpdmUpIGxpc3RPZkNlbGxGaXhlZERpcmVjdGl2ZSE6IFF1ZXJ5TGlzdDxOekNlbGxGaXhlZERpcmVjdGl2ZT47XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIGxpc3RPZkZpeGVkQ29sdW1ucyQgPSBuZXcgUmVwbGF5U3ViamVjdDxOekNlbGxGaXhlZERpcmVjdGl2ZVtdPigxKTtcbiAgcHJpdmF0ZSBsaXN0T2ZDb2x1bW5zJCA9IG5ldyBSZXBsYXlTdWJqZWN0PE56VGhNZWFzdXJlRGlyZWN0aXZlW10+KDEpO1xuICBsaXN0T2ZGaXhlZENvbHVtbnNDaGFuZ2VzJDogT2JzZXJ2YWJsZTxOekNlbGxGaXhlZERpcmVjdGl2ZVtdPiA9IHRoaXMubGlzdE9mRml4ZWRDb2x1bW5zJC5waXBlKFxuICAgIHN3aXRjaE1hcChsaXN0ID0+XG4gICAgICBtZXJnZSguLi5bdGhpcy5saXN0T2ZGaXhlZENvbHVtbnMkLCAuLi5saXN0Lm1hcCgoYzogTnpDZWxsRml4ZWREaXJlY3RpdmUpID0+IGMuY2hhbmdlcyQpXSkucGlwZShcbiAgICAgICAgZmxhdE1hcCgoKSA9PiB0aGlzLmxpc3RPZkZpeGVkQ29sdW1ucyQpXG4gICAgICApXG4gICAgKSxcbiAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgKTtcbiAgbGlzdE9mRml4ZWRMZWZ0Q29sdW1uQ2hhbmdlcyQgPSB0aGlzLmxpc3RPZkZpeGVkQ29sdW1uc0NoYW5nZXMkLnBpcGUobWFwKGxpc3QgPT4gbGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLm56TGVmdCAhPT0gZmFsc2UpKSk7XG4gIGxpc3RPZkZpeGVkUmlnaHRDb2x1bW5DaGFuZ2VzJCA9IHRoaXMubGlzdE9mRml4ZWRDb2x1bW5zQ2hhbmdlcyQucGlwZShtYXAobGlzdCA9PiBsaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0ubnpSaWdodCAhPT0gZmFsc2UpKSk7XG4gIGxpc3RPZkNvbHVtbnNDaGFuZ2VzJDogT2JzZXJ2YWJsZTxOelRoTWVhc3VyZURpcmVjdGl2ZVtdPiA9IHRoaXMubGlzdE9mQ29sdW1ucyQucGlwZShcbiAgICBzd2l0Y2hNYXAobGlzdCA9PlxuICAgICAgbWVyZ2UoLi4uW3RoaXMubGlzdE9mQ29sdW1ucyQsIC4uLmxpc3QubWFwKChjOiBOelRoTWVhc3VyZURpcmVjdGl2ZSkgPT4gYy5jaGFuZ2VzJCldKS5waXBlKGZsYXRNYXAoKCkgPT4gdGhpcy5saXN0T2ZDb2x1bW5zJCkpXG4gICAgKSxcbiAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgKTtcbiAgaXNJbnNpZGVUYWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgbnpUYWJsZVN0eWxlU2VydmljZTogTnpUYWJsZVN0eWxlU2VydmljZSkge1xuICAgIHRoaXMuaXNJbnNpZGVUYWJsZSA9ICEhbnpUYWJsZVN0eWxlU2VydmljZTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlKSB7XG4gICAgICB0aGlzLmxpc3RPZkNlbGxGaXhlZERpcmVjdGl2ZS5jaGFuZ2VzXG4gICAgICAgIC5waXBlKHN0YXJ0V2l0aCh0aGlzLmxpc3RPZkNlbGxGaXhlZERpcmVjdGl2ZSksIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgLnN1YnNjcmliZSh0aGlzLmxpc3RPZkZpeGVkQ29sdW1ucyQpO1xuICAgICAgdGhpcy5saXN0T2ZOelRoRGlyZWN0aXZlLmNoYW5nZXMucGlwZShzdGFydFdpdGgodGhpcy5saXN0T2ZOelRoRGlyZWN0aXZlKSwgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUodGhpcy5saXN0T2ZDb2x1bW5zJCk7XG4gICAgICAvKiogc2V0IGxhc3QgbGVmdCBhbmQgZmlyc3QgcmlnaHQgKiovXG4gICAgICB0aGlzLmxpc3RPZkZpeGVkTGVmdENvbHVtbkNoYW5nZXMkLnN1YnNjcmliZShsaXN0T2ZGaXhlZExlZnQgPT4ge1xuICAgICAgICBsaXN0T2ZGaXhlZExlZnQuZm9yRWFjaChjZWxsID0+IGNlbGwuc2V0SXNMYXN0TGVmdChjZWxsID09PSBsaXN0T2ZGaXhlZExlZnRbbGlzdE9mRml4ZWRMZWZ0Lmxlbmd0aCAtIDFdKSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubGlzdE9mRml4ZWRSaWdodENvbHVtbkNoYW5nZXMkLnN1YnNjcmliZShsaXN0T2ZGaXhlZFJpZ2h0ID0+IHtcbiAgICAgICAgbGlzdE9mRml4ZWRSaWdodC5mb3JFYWNoKGNlbGwgPT4gY2VsbC5zZXRJc0ZpcnN0UmlnaHQoY2VsbCA9PT0gbGlzdE9mRml4ZWRSaWdodFswXSkpO1xuICAgICAgfSk7XG4gICAgICAvKiogY2FsY3VsYXRlIGZpeGVkIG56TGVmdCBhbmQgbnpSaWdodCAqKi9cbiAgICAgIGNvbWJpbmVMYXRlc3QoW3RoaXMubnpUYWJsZVN0eWxlU2VydmljZS5saXN0T2ZMaXN0T2ZUaFdpZHRoJCwgdGhpcy5saXN0T2ZGaXhlZExlZnRDb2x1bW5DaGFuZ2VzJF0pLnN1YnNjcmliZShcbiAgICAgICAgKFtsaXN0T2ZBdXRvV2lkdGgsIGxpc3RPZkxlZnRDZWxsXSkgPT4ge1xuICAgICAgICAgIGxpc3RPZkxlZnRDZWxsLmZvckVhY2goKGNlbGwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2VsbC5pc0F1dG9MZWZ0KSB7XG4gICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRBcnJheSA9IGxpc3RPZkxlZnRDZWxsLnNsaWNlKDAsIGluZGV4KTtcbiAgICAgICAgICAgICAgY29uc3QgY291bnQgPSBjdXJyZW50QXJyYXkucmVkdWNlKChwcmUsIGN1cikgPT4gcHJlICsgKGN1ci5jb2xzcGFuIHx8IGN1ci5jb2xTcGFuIHx8IDEpLCAwKTtcbiAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBsaXN0T2ZBdXRvV2lkdGguc2xpY2UoMCwgY291bnQpLnJlZHVjZSgocHJlLCBjdXIpID0+IHByZSArIGN1ciwgMCk7XG4gICAgICAgICAgICAgIGNlbGwuc2V0QXV0b0xlZnRXaWR0aChgJHt3aWR0aH1weGApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICApO1xuICAgICAgY29tYmluZUxhdGVzdChbdGhpcy5uelRhYmxlU3R5bGVTZXJ2aWNlLmxpc3RPZkxpc3RPZlRoV2lkdGgkLCB0aGlzLmxpc3RPZkZpeGVkUmlnaHRDb2x1bW5DaGFuZ2VzJF0pLnN1YnNjcmliZShcbiAgICAgICAgKFtsaXN0T2ZBdXRvV2lkdGgsIGxpc3RPZlJpZ2h0Q2VsbF0pID0+IHtcbiAgICAgICAgICBsaXN0T2ZSaWdodENlbGwuZm9yRWFjaCgoXywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBsaXN0T2ZSaWdodENlbGxbbGlzdE9mUmlnaHRDZWxsLmxlbmd0aCAtIGluZGV4IC0gMV07XG4gICAgICAgICAgICBpZiAoY2VsbC5pc0F1dG9SaWdodCkge1xuICAgICAgICAgICAgICBjb25zdCBjdXJyZW50QXJyYXkgPSBsaXN0T2ZSaWdodENlbGwuc2xpY2UobGlzdE9mUmlnaHRDZWxsLmxlbmd0aCAtIGluZGV4LCBsaXN0T2ZSaWdodENlbGwubGVuZ3RoKTtcbiAgICAgICAgICAgICAgY29uc3QgY291bnQgPSBjdXJyZW50QXJyYXkucmVkdWNlKChwcmUsIGN1cikgPT4gcHJlICsgKGN1ci5jb2xzcGFuIHx8IGN1ci5jb2xTcGFuIHx8IDEpLCAwKTtcbiAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBsaXN0T2ZBdXRvV2lkdGhcbiAgICAgICAgICAgICAgICAuc2xpY2UobGlzdE9mQXV0b1dpZHRoLmxlbmd0aCAtIGNvdW50LCBsaXN0T2ZBdXRvV2lkdGgubGVuZ3RoKVxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKHByZSwgY3VyKSA9PiBwcmUgKyBjdXIsIDApO1xuICAgICAgICAgICAgICBjZWxsLnNldEF1dG9SaWdodFdpZHRoKGAke3dpZHRofXB4YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=