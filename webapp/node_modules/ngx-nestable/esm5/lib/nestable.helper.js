/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var _traverseChildren = (/**
 * @param {?} tree
 * @param {?} callback
 * @param {?=} parent
 * @return {?}
 */
function (tree, callback, parent) {
    if (parent === void 0) { parent = null; }
    for (var i = 0; i < tree.length; i++) {
        /** @type {?} */
        var item = tree[i];
        if (typeof item === 'undefined') {
            continue;
        }
        /** @type {?} */
        var callbackResult = callback(item, parent);
        if (callbackResult) {
            break;
        }
        if (item.children) {
            _traverseChildren(item.children, callback, item);
        }
    }
});
/** @type {?} */
export var _insertAfter = (/**
 * @param {?} newNode
 * @param {?} referenceNode
 * @return {?}
 */
function (newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
});
/** @type {?} */
export var _replace = (/**
 * @param {?} newNode
 * @param {?} referenceNode
 * @return {?}
 */
function (newNode, referenceNode) {
    referenceNode.parentNode.replaceChild(newNode, referenceNode);
});
/** @type {?} */
export var _replaceTargetWithElements = (/**
 * @param {?} target
 * @param {?} elements
 * @return {?}
 */
function (target, elements) {
    /** @type {?} */
    var i = elements.length;
    if (target.parentNode) {
        while (i--) {
            target.parentNode.insertBefore(elements[i], target);
        }
        /// remove the target.
        target.parentNode.removeChild(target);
    }
});
/** @type {?} */
export var _getParents = (/**
 * @param {?} el
 * @param {?=} parentSelector
 * @return {?}
 */
function (el, parentSelector) {
    if (parentSelector === void 0) { parentSelector = document.body; }
    /** @type {?} */
    var parents = [];
    /** @type {?} */
    var parentNode = el.parentNode;
    while (parentNode !== parentSelector) {
        /** @type {?} */
        var o = parentNode;
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
export var _closest = (/**
 * @param {?} el
 * @param {?} selector
 * @return {?}
 */
function (el, selector) {
    /** @type {?} */
    var matchesFn;
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
    var parent;
    // traverse parents
    while (el) {
        parent = el.parentElement;
        if (parent === null) {
            break;
        }
        /** @type {?} */
        var matches = parent[matchesFn](selector);
        if (parent && matches) {
            return parent;
        }
        el = parent;
    }
    return null;
});
/** @type {?} */
export var _offset = (/**
 * @param {?} elem
 * @return {?}
 */
function (elem) {
    /** @type {?} */
    var box = { top: 0, left: 0 };
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
export var _findObjectInTree = (/**
 * @param {?} array
 * @param {?} id
 * @return {?}
 */
function (array, id) {
    /** @type {?} */
    var result = null;
    _traverseChildren(array, (/**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item['$$id'] === Number.parseInt(id)) {
            result = item;
            return true;
        }
    }));
    return result;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdGFibGUuaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW5lc3RhYmxlLyIsInNvdXJjZXMiOlsibGliL25lc3RhYmxlLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU0sS0FBTyxpQkFBaUI7Ozs7OztBQUFHLFVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFhO0lBQWIsdUJBQUEsRUFBQSxhQUFhO0lBQzNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztZQUM1QixJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwQixJQUFJLE9BQU8sSUFBSSxLQUFLLFdBQVcsRUFBRTtZQUM3QixTQUFTO1NBQ1o7O1lBQ0ssY0FBYyxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO1FBRTdDLElBQUksY0FBYyxFQUFFO1lBQ2hCLE1BQU07U0FDVDtRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3BEO0tBQ0o7QUFDTCxDQUFDLENBQUE7O0FBRUQsTUFBTSxLQUFPLFlBQVk7Ozs7O0FBQUcsVUFBQyxPQUFPLEVBQUUsYUFBYTtJQUMvQyxhQUFhLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzlFLENBQUMsQ0FBQTs7QUFFRCxNQUFNLEtBQU8sUUFBUTs7Ozs7QUFBRyxVQUFDLE9BQU8sRUFBRSxhQUFhO0lBQzNDLGFBQWEsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQztBQUNsRSxDQUFDLENBQUE7O0FBRUQsTUFBTSxLQUFPLDBCQUEwQjs7Ozs7QUFBRyxVQUFDLE1BQU0s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SUFBSSxDQUFDLENBQUM7S0FDcEYsQ0FBQztBQUNOLENBQUMsQ0FBQTs7QUFFRCxNQUFNLEtBQU8saUJBQWlCOzs7OztBQUFHLFVBQUMsS0FBSyxFQUFFLEVBQUU7O1FBQ25DLE1BQU0sR0FBRyxJQUFJO0lBRWpCLGlCQUFpQixDQUFDLEtBQUs7Ozs7SUFBRSxVQUFBLElBQUk7UUFDekIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUN0QyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ2QsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNMLENBQUMsRUFBQyxDQUFDO0lBRUgsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IF90cmF2ZXJzZUNoaWxkcmVuID0gKHRyZWUsIGNhbGxiYWNrLCBwYXJlbnQgPSBudWxsKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0cmVlW2ldO1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYWxsYmFja1Jlc3VsdCA9IGNhbGxiYWNrKGl0ZW0sIHBhcmVudCk7XG5cbiAgICAgICAgaWYgKGNhbGxiYWNrUmVzdWx0KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBfdHJhdmVyc2VDaGlsZHJlbihpdGVtLmNoaWxkcmVuLCBjYWxsYmFjaywgaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgX2luc2VydEFmdGVyID0gKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUpID0+IHtcbiAgICByZWZlcmVuY2VOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUubmV4dFNpYmxpbmcpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9yZXBsYWNlID0gKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUpID0+IHtcbiAgICByZWZlcmVuY2VOb2RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IF9yZXBsYWNlVGFyZ2V0V2l0aEVsZW1lbnRzID0gKHRhcmdldCwgZWxlbWVudHMpID0+IHtcbiAgICBsZXQgaSA9IGVsZW1lbnRzLmxlbmd0aDtcblxuICAgIGlmICh0YXJnZXQucGFyZW50Tm9kZSkge1xuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICB0YXJnZXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudHNbaV0sIHRhcmdldCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLy8gcmVtb3ZlIHRoZSB0YXJnZXQuXG4gICAgICAgIHRhcmdldC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhcmdldCk7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IF9nZXRQYXJlbnRzID0gKGVsLCBwYXJlbnRTZWxlY3RvciA9IGRvY3VtZW50LmJvZHkpID0+IHtcblxuICAgIGNvbnN0IHBhcmVudHMgPSBbXTtcbiAgICBsZXQgcGFyZW50Tm9kZSA9IGVsLnBhcmVudE5vZGU7XG5cbiAgICB3aGlsZSAocGFyZW50Tm9kZSAhPT0gcGFyZW50U2VsZWN0b3IpIHtcbiAgICAgICAgY29uc3QgbyA9IHBhcmVudE5vZGU7XG4gICAgICAgIGlmICghcGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmVudE5vZGUudGFnTmFtZSA9PT0gcGFyZW50U2VsZWN0b3IudGFnTmFtZSkge1xuICAgICAgICAgICAgcGFyZW50cy5wdXNoKG8pO1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudE5vZGUgPSBvLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHBhcmVudHMucHVzaChwYXJlbnRTZWxlY3Rvcik7IC8vIFB1c2ggdGhhdCBwYXJlbnRTZWxlY3RvciB5b3Ugd2FudGVkIHRvIHN0b3AgYXRcblxuICAgIHJldHVybiBwYXJlbnRzO1xufTtcblxuZXhwb3J0IGNvbnN0IF9jbG9zZXN0ID0gKGVsLCBzZWxlY3RvcikgPT4ge1xuICAgIGxldCBtYXRjaGVzRm47XG5cbiAgICAvLyBmaW5kIHZlbmRvciBwcmVmaXhcbiAgICBbJ21hdGNoZXMnLCAnd2Via2l0TWF0Y2hlc1NlbGVjdG9yJywgJ21vek1hdGNoZXNTZWxlY3RvcicsICdtc01hdGNoZXNTZWxlY3RvcicsICdvTWF0Y2hlc1NlbGVjdG9yJ10uc29tZShmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudC5ib2R5W2ZuXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgbWF0Y2hlc0ZuID0gZm47XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBsZXQgcGFyZW50O1xuXG4gICAgLy8gdHJhdmVyc2UgcGFyZW50c1xuICAgIHdoaWxlIChlbCkge1xuICAgICAgICBwYXJlbnQgPSBlbC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBpZiAocGFyZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtYXRjaGVzID0gcGFyZW50W21hdGNoZXNGbl0oc2VsZWN0b3IpO1xuICAgICAgICBpZiAocGFyZW50ICYmIG1hdGNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWwgPSBwYXJlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgX29mZnNldCA9IChlbGVtKSA9PiB7XG4gICAgbGV0IGJveCA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XG5cbiAgICAvLyBCbGFja0JlcnJ5IDUsIGlPUyAzIChvcmlnaW5hbCBpUGhvbmUpXG4gICAgaWYgKHR5cGVvZiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiBib3gudG9wICsgKHdpbmRvdy5wYWdlWU9mZnNldCB8fCBlbGVtLnNjcm9sbFRvcCkgLSAoZWxlbS5jbGllbnRUb3AgfHwgMCksXG4gICAgICAgIGxlZnQ6IGJveC5sZWZ0ICsgKHdpbmRvdy5wYWdlWE9mZnNldCB8fCBlbGVtLnNjcm9sbExlZnQpIC0gKGVsZW0uY2xpZW50TGVmdCB8fCAwKVxuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgX2ZpbmRPYmplY3RJblRyZWUgPSAoYXJyYXksIGlkKSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG5cbiAgICBfdHJhdmVyc2VDaGlsZHJlbihhcnJheSwgaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtWyckJGlkJ10gPT09IE51bWJlci5wYXJzZUludChpZCkpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGl0ZW07XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG4iXX0=