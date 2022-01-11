/**
 * @fileoverview added by tsickle
 * Generated from: nz-tree-base-util.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @param {?} node
 * @return {?}
 */
export function isCheckDisabled(node) {
    const { isDisabled, isDisableCheckbox } = node;
    return !!(isDisabled || isDisableCheckbox);
}
/**
 * @param {?} needle
 * @param {?} haystack
 * @return {?}
 */
export function isInArray(needle, haystack) {
    return haystack.length > 0 && haystack.indexOf(needle) > -1;
}
/**
 * @param {?} level
 * @param {?} index
 * @return {?}
 */
export function getPosition(level, index) {
    return `${level}-${index}`;
}
/**
 * @param {?} key
 * @param {?} pos
 * @return {?}
 */
export function getKey(key, pos) {
    if (key !== null && key !== undefined) {
        return key;
    }
    return pos;
}
/**
 * Flat nest tree data into flatten list. This is used for virtual list render.
 * @param {?=} treeNodeList Origin data node list
 * @param {?=} expandedKeys
 * need expanded keys, provides `true` means all expanded (used in `rc-tree-select`).
 * @return {?}
 */
export function flattenTreeData(treeNodeList = [], expandedKeys = []) {
    /** @type {?} */
    const expandedKeySet = new Set(expandedKeys === true ? [] : expandedKeys);
    /** @type {?} */
    const flattenList = [];
    /**
     * @param {?} list
     * @param {?=} parent
     * @return {?}
     */
    function dig(list, parent = null) {
        return list.map((/**
         * @param {?} treeNode
         * @param {?} index
         * @return {?}
         */
        (treeNode, index) => {
            /** @type {?} */
            const pos = getPosition(parent ? parent.pos : '0', index);
            /** @type {?} */
            const mergedKey = getKey(treeNode.key, pos);
            treeNode.isStart = [...(parent ? parent.isStart : []), index === 0];
            treeNode.isEnd = [...(parent ? parent.isEnd : []), index === list.length - 1];
            // Add FlattenDataNode into list
            // TODO: only need data here.
            /** @type {?} */
            const flattenNode = {
                parent,
                pos,
                children: [],
                data: treeNode,
                isStart: [...(parent ? parent.isStart : []), index === 0],
                isEnd: [...(parent ? parent.isEnd : []), index === list.length - 1]
            };
            flattenList.push(flattenNode);
            // Loop treeNode children
            if (expandedKeys === true || expandedKeySet.has(mergedKey) || treeNode.isExpanded) {
                flattenNode.children = dig(treeNode.children || [], flattenNode);
            }
            else {
                flattenNode.children = [];
            }
            return flattenNode;
        }));
    }
    dig(treeNodeList);
    return flattenList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1iYXNlLXV0aWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvdHJlZS8iLCJzb3VyY2VzIjpbIm56LXRyZWUtYmFzZS11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFRQSxNQUFNLFVBQVUsZUFBZSxDQUFDLElBQWdCO1VBQ3hDLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsSUFBSTtJQUM5QyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxpQkFBaUIsQ0FBQyxDQUFDO0FBQzdDLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxTQUFTLENBQUMsTUFBaUIsRUFBRSxRQUFxQjtJQUNoRSxPQUFPLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDOUQsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxLQUFzQixFQUFFLEtBQWE7SUFDL0QsT0FBTyxHQUFHLEtBQUssSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUM3QixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsTUFBTSxDQUFDLEdBQWtCLEVBQUUsR0FBVztJQUNwRCxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtRQUNyQyxPQUFPLEdBQUcsQ0FBQztLQUNaO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDOzs7Ozs7OztBQVFELE1BQU0sVUFBVSxlQUFlLENBQUMsZUFBNkIsRUFBRSxFQUFFLGVBQXVDLEVBQUU7O1VBQ2xHLGNBQWMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQzs7VUFDbkUsV0FBVyxHQUFrQixFQUFFOzs7Ozs7SUFFckMsU0FBUyxHQUFHLENBQUMsSUFBa0IsRUFBRSxTQUE2QixJQUFJO1FBQ2hFLE9BQU8sSUFBSSxDQUFDLEdBQUc7Ozs7O1FBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUU7O2tCQUM1QixHQUFHLEdBQVcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQzs7a0JBQzNELFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDM0MsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNwRSxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxLQUFLLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7Ozs7a0JBR3hFLFdBQVcsR0FBZ0I7Z0JBQy9CLE1BQU07Z0JBQ04sR0FBRztnQkFDSCxRQUFRLEVBQUUsRUFBRTtnQkFDWixJQUFJLEVBQUUsUUFBUTtnQkFDZCxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEtBQUssQ0FBQyxDQUFDO2dCQUN6RCxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEtBQUssSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDcEU7WUFFRCxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRTlCLHlCQUF5QjtZQUN6QixJQUFJLFlBQVksS0FBSyxJQUFJLElBQUksY0FBYyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxRQUFRLENBQUMsVUFBVSxFQUFFO2dCQUNqRixXQUFXLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxJQUFJLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQzthQUNsRTtpQkFBTTtnQkFDTCxXQUFXLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQzthQUMzQjtZQUVELE9BQU8sV0FBVyxDQUFDO1FBQ3JCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsQixPQUFPLFdBQVcsQ0FBQztBQUNyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IEZsYXR0ZW5Ob2RlLCBOelRyZWVOb2RlLCBOelRyZWVOb2RlS2V5IH0gZnJvbSAnLi9uei10cmVlLWJhc2Utbm9kZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NoZWNrRGlzYWJsZWQobm9kZTogTnpUcmVlTm9kZSk6IGJvb2xlYW4ge1xuICBjb25zdCB7IGlzRGlzYWJsZWQsIGlzRGlzYWJsZUNoZWNrYm94IH0gPSBub2RlO1xuICByZXR1cm4gISEoaXNEaXNhYmxlZCB8fCBpc0Rpc2FibGVDaGVja2JveCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0luQXJyYXkobmVlZGxlOiBOelNhZmVBbnksIGhheXN0YWNrOiBOelNhZmVBbnlbXSk6IGJvb2xlYW4ge1xuICByZXR1cm4gaGF5c3RhY2subGVuZ3RoID4gMCAmJiBoYXlzdGFjay5pbmRleE9mKG5lZWRsZSkgPiAtMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc2l0aW9uKGxldmVsOiBzdHJpbmcgfCBudW1iZXIsIGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7bGV2ZWx9LSR7aW5kZXh9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEtleShrZXk6IE56VHJlZU5vZGVLZXksIHBvczogc3RyaW5nKTogTnpUcmVlTm9kZUtleSB7XG4gIGlmIChrZXkgIT09IG51bGwgJiYga2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4ga2V5O1xuICB9XG4gIHJldHVybiBwb3M7XG59XG5cbi8qKlxuICogRmxhdCBuZXN0IHRyZWUgZGF0YSBpbnRvIGZsYXR0ZW4gbGlzdC4gVGhpcyBpcyB1c2VkIGZvciB2aXJ0dWFsIGxpc3QgcmVuZGVyLlxuICogQHBhcmFtIHRyZWVOb2RlTGlzdCBPcmlnaW4gZGF0YSBub2RlIGxpc3RcbiAqIEBwYXJhbSBleHBhbmRlZEtleXNcbiAqIG5lZWQgZXhwYW5kZWQga2V5cywgcHJvdmlkZXMgYHRydWVgIG1lYW5zIGFsbCBleHBhbmRlZCAodXNlZCBpbiBgcmMtdHJlZS1zZWxlY3RgKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW5UcmVlRGF0YSh0cmVlTm9kZUxpc3Q6IE56VHJlZU5vZGVbXSA9IFtdLCBleHBhbmRlZEtleXM6IE56VHJlZU5vZGVLZXlbXSB8IHRydWUgPSBbXSk6IEZsYXR0ZW5Ob2RlW10ge1xuICBjb25zdCBleHBhbmRlZEtleVNldCA9IG5ldyBTZXQoZXhwYW5kZWRLZXlzID09PSB0cnVlID8gW10gOiBleHBhbmRlZEtleXMpO1xuICBjb25zdCBmbGF0dGVuTGlzdDogRmxhdHRlbk5vZGVbXSA9IFtdO1xuXG4gIGZ1bmN0aW9uIGRpZyhsaXN0OiBOelRyZWVOb2RlW10sIHBhcmVudDogRmxhdHRlbk5vZGUgfCBudWxsID0gbnVsbCk6IEZsYXR0ZW5Ob2RlW10ge1xuICAgIHJldHVybiBsaXN0Lm1hcCgodHJlZU5vZGUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBwb3M6IHN0cmluZyA9IGdldFBvc2l0aW9uKHBhcmVudCA/IHBhcmVudC5wb3MgOiAnMCcsIGluZGV4KTtcbiAgICAgIGNvbnN0IG1lcmdlZEtleSA9IGdldEtleSh0cmVlTm9kZS5rZXksIHBvcyk7XG4gICAgICB0cmVlTm9kZS5pc1N0YXJ0ID0gWy4uLihwYXJlbnQgPyBwYXJlbnQuaXNTdGFydCA6IFtdKSwgaW5kZXggPT09IDBdO1xuICAgICAgdHJlZU5vZGUuaXNFbmQgPSBbLi4uKHBhcmVudCA/IHBhcmVudC5pc0VuZCA6IFtdKSwgaW5kZXggPT09IGxpc3QubGVuZ3RoIC0gMV07XG4gICAgICAvLyBBZGQgRmxhdHRlbkRhdGFOb2RlIGludG8gbGlzdFxuICAgICAgLy8gVE9ETzogb25seSBuZWVkIGRhdGEgaGVyZS5cbiAgICAgIGNvbnN0IGZsYXR0ZW5Ob2RlOiBGbGF0dGVuTm9kZSA9IHtcbiAgICAgICAgcGFyZW50LFxuICAgICAgICBwb3MsXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgZGF0YTogdHJlZU5vZGUsXG4gICAgICAgIGlzU3RhcnQ6IFsuLi4ocGFyZW50ID8gcGFyZW50LmlzU3RhcnQgOiBbXSksIGluZGV4ID09PSAwXSxcbiAgICAgICAgaXNFbmQ6IFsuLi4ocGFyZW50ID8gcGFyZW50LmlzRW5kIDogW10pLCBpbmRleCA9PT0gbGlzdC5sZW5ndGggLSAxXVxuICAgICAgfTtcblxuICAgICAgZmxhdHRlbkxpc3QucHVzaChmbGF0dGVuTm9kZSk7XG5cbiAgICAgIC8vIExvb3AgdHJlZU5vZGUgY2hpbGRyZW5cbiAgICAgIGlmIChleHBhbmRlZEtleXMgPT09IHRydWUgfHwgZXhwYW5kZWRLZXlTZXQuaGFzKG1lcmdlZEtleSkgfHwgdHJlZU5vZGUuaXNFeHBhbmRlZCkge1xuICAgICAgICBmbGF0dGVuTm9kZS5jaGlsZHJlbiA9IGRpZyh0cmVlTm9kZS5jaGlsZHJlbiB8fCBbXSwgZmxhdHRlbk5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmxhdHRlbk5vZGUuY2hpbGRyZW4gPSBbXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZsYXR0ZW5Ob2RlO1xuICAgIH0pO1xuICB9XG5cbiAgZGlnKHRyZWVOb2RlTGlzdCk7XG4gIHJldHVybiBmbGF0dGVuTGlzdDtcbn1cbiJdfQ==