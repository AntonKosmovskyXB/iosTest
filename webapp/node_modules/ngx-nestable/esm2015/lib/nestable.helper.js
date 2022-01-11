/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const _traverseChildren = (/**
 * @param {?} tree
 * @param {?} callback
 * @param {?=} parent
 * @return {?}
 */
(tree, callback, parent = null) => {
    for (let i = 0; i < tree.length; i++) {
        /** @type {?} */
        const item = tree[i];
        if (typeof item === 'undefined') {
            continue;
        }
        /** @type {?} */
        const callbackResult = callback(item, parent);
        if (callbackResult) {
            break;
        }
        if (item.children) {
            _traverseChildren(item.children, callback, item);
        }
    }
});
/** @type {?} */
export const _insertAfter = (/**
 * @param {?} newNode
 * @param {?} referenceNode
 * @return {?}
 */
(newNode, referenceNode) => {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
});
/** @type {?} */
export const _replace = (/**
 * @param {?} newNode
 * @param {?} referenceNode
 * @return {?}
 */
(newNode, referenceNode) => {
    referenceNode.parentNode.replaceChild(newNode, referenceNode);
});
/** @type {?} */
export const _replaceTargetWithElements = (/**
 * @param {?} target
 * @param {?} elements
 * @return {?}
 */
(target, elements) => {
    /** @type {?} */
    let i = elements.length;
    if (target.parentNode) {
        while (i--) {
            target.parentNode.insertBefore(elements[i], target);
        }
        /// remove the target.
        target.parentNode.removeChild(target);
    }
});
/** @type {?} */
export const _getParents = (/**
 * @param {?} el
 * @param {?=} parentSelector
 * @return {?}
 */
(el, parentSelector = document.body) => {
    /** @type {?} */
    const parents = [];
    /** @type {?} */
    let parentNode = el.parentNode;
    while (parentNode !== parentSelector) {
        /** @type {?} */
        const o = parentNode;
        if (!parentNode) {
            break;
        }
        if (parentNode.tagName === parentSelector.tagName) {
            parents.push(o);
        }
        parentNode = o.parentNode;
    }
    parents.push(parentSelector); // Push that parentSelector you wanted to stop at
    return parents;
});
/** @type {?} */
export const _closest = (/**
 * @param {?} el
 * @param {?} selector
 * @return {?}
 */
(el, selector) => {
    /** @type {?} */
    let matchesFn;
    // find vendor prefix
    ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some((/**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        if (typeof document.body[fn] === 'function') {
            matchesFn = fn;
            return true;
        }
        return false;
    }));
    /** @type {?} */
    let parent;
    // traverse parents
    while (el) {
        parent = el.parentElement;
        if (parent === null) {
            break;
        }
        /** @type {?} */
        const matches = parent[matchesFn](selector);
        if (parent && matches) {
            return parent;
        }
        el = parent;
    }
    return null;
});
/** @type {?} */
export const _offset = (/**
 * @param {?} elem
 * @return {?}
 */
(elem) => {
    /** @type {?} */
    let box = { top: 0, left: 0 };
    // BlackBerry 5, iOS 3 (original iPhone)
    if (typeof elem.getBoundingClientRect !== undefined) {
        box = elem.getBoundingClientRect();
    }
    return {
        top: box.top + (window.pageYOffset || elem.scrollTop) - (elem.clientTop || 0),
        left: box.left + (window.pageXOffset || elem.scrollLeft) - (elem.clientLeft || 0)
    };
});
/** @type {?} */
export const _findObjectInTree = (/**
 * @param {?} array
 * @param {?} id
 * @return {?}
 */
(array, id) => {
    /** @type {?} */
    let result = null;
    _traverseChildren(array, (/**
     * @param {?} item
     * @return {?}
     */
    item => {
        if (item['$$id'] === Number.parseInt(id)) {
            result = item;
            return true;
        }
    }));
    return result;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdGFibGUuaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW5lc3RhYmxlLyIsInNvdXJjZXMiOlsibGliL25lc3RhYmxlLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztBQUFHLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEdBQUcsSUFBSSxFQUFFLEVBQUU7SUFDL0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2NBQzVCLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLElBQUksT0FBTyxJQUFJLEtBQUssV0FBVyxFQUFFO1lBQzdCLFNBQVM7U0FDWjs7Y0FDSyxjQUFjLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUM7UUFFN0MsSUFBSSxjQUFjLEVBQUU7WUFDaEIsTUFBTTtTQUNUO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDcEQ7S0FDSjtBQUNMLENBQUMsQ0FBQTs7QUFFRCxNQUFNLE9BQU8sWUFBWTs7Ozs7QUFBRyxDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsRUFBRTtJQUNuRCxhQUFhLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzlFLENBQUMsQ0FBQTs7QUFFRCxNQUFNLE9BQU8sUUFBUTs7Ozs7QUFBRyxDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsRUFBRTtJQUMvQyxhQUFhLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDbEUsQ0FBQyxDQUFBOztBQUVELE1BQU0sT0FBTywwQkFBMEI7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QUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7S0FDcEYsQ0FBQztBQUNOLENBQUMsQ0FBQTs7QUFFRCxNQUFNLE9BQU8saUJBQWlCOzs7OztBQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFOztRQUN2QyxNQUFNLEdBQUcsSUFBSTtJQUVqQixpQkFBaUIsQ0FBQyxLQUFLOzs7O0lBQUUsSUFBSSxDQUFDLEVBQUU7UUFDNUIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUN0QyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ2QsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNMLENBQUMsRUFBQyxDQUFDO0lBRUgsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IF90cmF2ZXJzZUNoaWxkcmVuID0gKHRyZWUsIGNhbGxiYWNrLCBwYXJlbnQgPSBudWxsKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0cmVlW2ldO1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYWxsYmFja1Jlc3VsdCA9IGNhbGxiYWNrKGl0ZW0sIHBhcmVudCk7XG5cbiAgICAgICAgaWYgKGNhbGxiYWNrUmVzdWx0KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBfdHJhdmVyc2VDaGlsZHJlbihpdGVtLmNoaWxkcmVuLCBjYWxsYmFjaywgaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgX2luc2VydEFmdGVyID0gKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUpID0+IHtcbiAgICByZWZlcmVuY2VOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUubmV4dFNpYmxpbmcpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9yZXBsYWNlID0gKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUpID0+IHtcbiAgICByZWZlcmVuY2VOb2RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9yZXBsYWNlVGFyZ2V0V2l0aEVsZW1lbnRzID0gKHRhcmdldCwgZWxlbWVudHMpID0+IHtcbiAgICBsZXQgaSA9IGVsZW1lbnRzLmxlbmd0aDtcblxuICAgIGlmICh0YXJnZXQucGFyZW50Tm9kZSkge1xuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICB0YXJnZXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudHNbaV0sIHRhcmdldCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLy8gcmVtb3ZlIHRoZSB0YXJnZXQuXG4gICAgICAgIHRhcmdldC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhcmdldCk7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IF9nZXRQYXJlbnRzID0gKGVsLCBwYXJlbnRTZWxlY3RvciA9IGRvY3VtZW50LmJvZHkpID0+IHtcblxuICAgIGNvbnN0IHBhcmVudHMgPSBbXTtcbiAgICBsZXQgcGFyZW50Tm9kZSA9IGVsLnBhcmVudE5vZGU7XG5cbiAgICB3aGlsZSAocGFyZW50Tm9kZSAhPT0gcGFyZW50U2VsZWN0b3IpIHtcbiAgICAgICAgY29uc3QgbyA9IHBhcmVudE5vZGU7XG4gICAgICAgIGlmICghcGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmVudE5vZGUudGFnTmFtZSA9PT0gcGFyZW50U2VsZWN0b3IudGFnTmFtZSkge1xuICAgICAgICAgICAgcGFyZW50cy5wdXNoKG8pO1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudE5vZGUgPSBvLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHBhcmVudHMucHVzaChwYXJlbnRTZWxlY3Rvcik7IC8vIFB1c2ggdGhhdCBwYXJlbnRTZWxlY3RvciB5b3Ugd2FudGVkIHRvIHN0b3AgYXRcblxuICAgIHJldHVybiBwYXJlbnRzO1xufTtcblxuZXhwb3J0IGNvbnN0IF9jbG9zZXN0ID0gKGVsLCBzZWxlY3RvcikgPT4ge1xuICAgIGxldCBtYXRjaGVzRm47XG5cbiAgICAvLyBmaW5kIHZlbmRvciBwcmVmaXhcbiAgICBbJ21hdGNoZXMnLCAnd2Via2l0TWF0Y2hlc1NlbGVjdG9yJywgJ21vek1hdGNoZXNTZWxlY3RvcicsICdtc01hdGNoZXNTZWxlY3RvcicsICdvTWF0Y2hlc1NlbGVjdG9yJ10uc29tZShmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudC5ib2R5W2ZuXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgbWF0Y2hlc0ZuID0gZm47XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBsZXQgcGFyZW50O1xuXG4gICAgLy8gdHJhdmVyc2UgcGFyZW50c1xuICAgIHdoaWxlIChlbCkge1xuICAgICAgICBwYXJlbnQgPSBlbC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBpZiAocGFyZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtYXRjaGVzID0gcGFyZW50W21hdGNoZXNGbl0oc2VsZWN0b3IpO1xuICAgICAgICBpZiAocGFyZW50ICYmIG1hdGNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWwgPSBwYXJlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgX29mZnNldCA9IChlbGVtKSA9PiB7XG4gICAgbGV0IGJveCA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XG5cbiAgICAvLyBCbGFja0JlcnJ5IDUsIGlPUyAzIChvcmlnaW5hbCBpUGhvbmUpXG4gICAgaWYgKHR5cGVvZiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiBib3gudG9wICsgKHdpbmRvdy5wYWdlWU9mZnNldCB8fCBlbGVtLnNjcm9sbFRvcCkgLSAoZWxlbS5jbGllbnRUb3AgfHwgMCksXG4gICAgICAgIGxlZnQ6IGJveC5sZWZ0ICsgKHdpbmRvdy5wYWdlWE9mZnNldCB8fCBlbGVtLnNjcm9sbExlZnQpIC0gKGVsZW0uY2xpZW50TGVmdCB8fCAwKVxuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgX2ZpbmRPYmplY3RJblRyZWUgPSAoYXJyYXksIGlkKSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG5cbiAgICBfdHJhdmVyc2VDaGlsZHJlbihhcnJheSwgaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtWyckJGlkJ10gPT09IE51bWJlci5wYXJzZUludChpZCkpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGl0ZW07XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG4iXX0=