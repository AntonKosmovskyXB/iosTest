/**
 * @fileoverview added by tsickle
 * Generated from: nz-tree-base.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { NzTreeNode } from './nz-tree-base-node';
export class NzTreeBase {
    /**
     * @param {?} nzTreeService
     */
    constructor(nzTreeService) {
        this.nzTreeService = nzTreeService;
    }
    /**
     * Coerces a value({\@link any[]}) to a TreeNodes({\@link NzTreeNode[]})
     * @param {?} value
     * @return {?}
     */
    coerceTreeNodes(value) {
        /** @type {?} */
        let nodes = [];
        if (!this.nzTreeService.isArrayOfNzTreeNode(value)) {
            // has not been new NzTreeNode
            nodes = value.map((/**
             * @param {?} item
             * @return {?}
             */
            item => new NzTreeNode(item, null, this.nzTreeService)));
        }
        else {
            nodes = value.map((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                item.service = this.nzTreeService;
                return item;
            }));
        }
        return nodes;
    }
    /**
     * Get all nodes({\@link NzTreeNode})
     * @return {?}
     */
    getTreeNodes() {
        return this.nzTreeService.rootNodes;
    }
    /**
     * Get {\@link NzTreeNode} with key
     * @param {?} key
     * @return {?}
     */
    getTreeNodeByKey(key) {
        // flat tree nodes
        /** @type {?} */
        const nodes = [];
        /** @type {?} */
        const getNode = (/**
         * @param {?} node
         * @return {?}
         */
        (node) => {
            nodes.push(node);
            node.getChildren().forEach((/**
             * @param {?} n
             * @return {?}
             */
            n => {
                getNode(n);
            }));
        });
        this.getTreeNodes().forEach((/**
         * @param {?} n
         * @return {?}
         */
        n => {
            getNode(n);
        }));
        return nodes.find((/**
         * @param {?} n
         * @return {?}
         */
        n => n.key === key)) || null;
    }
    /**
     * Get checked nodes(merged)
     * @return {?}
     */
    getCheckedNodeList() {
        return this.nzTreeService.getCheckedNodeList();
    }
    /**
     * Get selected nodes
     * @return {?}
     */
    getSelectedNodeList() {
        return this.nzTreeService.getSelectedNodeList();
    }
    /**
     * Get half checked nodes
     * @return {?}
     */
    getHalfCheckedNodeList() {
        return this.nzTreeService.getHalfCheckedNodeList();
    }
    /**
     * Get expanded nodes
     * @return {?}
     */
    getExpandedNodeList() {
        return this.nzTreeService.getExpandedNodeList();
    }
    /**
     * Get matched nodes(if nzSearchValue is not null)
     * @return {?}
     */
    getMatchedNodeList() {
        return this.nzTreeService.getMatchedNodeList();
    }
}
if (false) {
    /** @type {?} */
    NzTreeBase.prototype.nzTreeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1iYXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlL3RyZWUvIiwic291cmNlcyI6WyJuei10cmVlLWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR2pELE1BQU0sT0FBTyxVQUFVOzs7O0lBQ3JCLFlBQW1CLGFBQWdDO1FBQWhDLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtJQUFHLENBQUM7Ozs7OztJQUt2RCxlQUFlLENBQUMsS0FBa0I7O1lBQzVCLEtBQUssR0FBaUIsRUFBRTtRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNsRCw4QkFBOEI7WUFDOUIsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBQyxDQUFDO1NBQzNFO2FBQU07WUFDTCxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLElBQWdCLEVBQUUsRUFBRTtnQkFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO2dCQUNsQyxPQUFPLElBQUksQ0FBQztZQUNkLENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7O0lBS0QsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7SUFDdEMsQ0FBQzs7Ozs7O0lBS0QsZ0JBQWdCLENBQUMsR0FBVzs7O2NBRXBCLEtBQUssR0FBaUIsRUFBRTs7Y0FDeEIsT0FBTzs7OztRQUFHLENBQUMsSUFBZ0IsRUFBUSxFQUFFO1lBQ3pDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLENBQUMsRUFBRTtnQkFDN0IsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLENBQUE7UUFDRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsT0FBTzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzlCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNiLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUMsSUFBSTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUMsSUFBSSxJQUFJLENBQUM7SUFDaEQsQ0FBQzs7Ozs7SUFLRCxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFLRCxtQkFBbUI7UUFDakIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFLRCxzQkFBc0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFLRCxtQkFBbUI7UUFDakIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFLRCxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDakQsQ0FBQztDQUNGOzs7SUE5RWEsbUNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56VHJlZU5vZGUgfSBmcm9tICcuL256LXRyZWUtYmFzZS1ub2RlJztcbmltcG9ydCB7IE56VHJlZUJhc2VTZXJ2aWNlIH0gZnJvbSAnLi9uei10cmVlLWJhc2Uuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBOelRyZWVCYXNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIG56VHJlZVNlcnZpY2U6IE56VHJlZUJhc2VTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiBDb2VyY2VzIGEgdmFsdWUoe0BsaW5rIGFueVtdfSkgdG8gYSBUcmVlTm9kZXMoe0BsaW5rIE56VHJlZU5vZGVbXX0pXG4gICAqL1xuICBjb2VyY2VUcmVlTm9kZXModmFsdWU6IE56U2FmZUFueVtdKTogTnpUcmVlTm9kZVtdIHtcbiAgICBsZXQgbm9kZXM6IE56VHJlZU5vZGVbXSA9IFtdO1xuICAgIGlmICghdGhpcy5uelRyZWVTZXJ2aWNlLmlzQXJyYXlPZk56VHJlZU5vZGUodmFsdWUpKSB7XG4gICAgICAvLyBoYXMgbm90IGJlZW4gbmV3IE56VHJlZU5vZGVcbiAgICAgIG5vZGVzID0gdmFsdWUubWFwKGl0ZW0gPT4gbmV3IE56VHJlZU5vZGUoaXRlbSwgbnVsbCwgdGhpcy5uelRyZWVTZXJ2aWNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGVzID0gdmFsdWUubWFwKChpdGVtOiBOelRyZWVOb2RlKSA9PiB7XG4gICAgICAgIGl0ZW0uc2VydmljZSA9IHRoaXMubnpUcmVlU2VydmljZTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgbm9kZXMoe0BsaW5rIE56VHJlZU5vZGV9KVxuICAgKi9cbiAgZ2V0VHJlZU5vZGVzKCk6IE56VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5yb290Tm9kZXM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHtAbGluayBOelRyZWVOb2RlfSB3aXRoIGtleVxuICAgKi9cbiAgZ2V0VHJlZU5vZGVCeUtleShrZXk6IHN0cmluZyk6IE56VHJlZU5vZGUgfCBudWxsIHtcbiAgICAvLyBmbGF0IHRyZWUgbm9kZXNcbiAgICBjb25zdCBub2RlczogTnpUcmVlTm9kZVtdID0gW107XG4gICAgY29uc3QgZ2V0Tm9kZSA9IChub2RlOiBOelRyZWVOb2RlKTogdm9pZCA9PiB7XG4gICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgbm9kZS5nZXRDaGlsZHJlbigpLmZvckVhY2gobiA9PiB7XG4gICAgICAgIGdldE5vZGUobik7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMuZ2V0VHJlZU5vZGVzKCkuZm9yRWFjaChuID0+IHtcbiAgICAgIGdldE5vZGUobik7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5vZGVzLmZpbmQobiA9PiBuLmtleSA9PT0ga2V5KSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjaGVja2VkIG5vZGVzKG1lcmdlZClcbiAgICovXG4gIGdldENoZWNrZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0Q2hlY2tlZE5vZGVMaXN0KCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNlbGVjdGVkIG5vZGVzXG4gICAqL1xuICBnZXRTZWxlY3RlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5nZXRTZWxlY3RlZE5vZGVMaXN0KCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGhhbGYgY2hlY2tlZCBub2Rlc1xuICAgKi9cbiAgZ2V0SGFsZkNoZWNrZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0SGFsZkNoZWNrZWROb2RlTGlzdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBleHBhbmRlZCBub2Rlc1xuICAgKi9cbiAgZ2V0RXhwYW5kZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0RXhwYW5kZWROb2RlTGlzdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBtYXRjaGVkIG5vZGVzKGlmIG56U2VhcmNoVmFsdWUgaXMgbm90IG51bGwpXG4gICAqL1xuICBnZXRNYXRjaGVkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLmdldE1hdGNoZWROb2RlTGlzdCgpO1xuICB9XG59XG4iXX0=