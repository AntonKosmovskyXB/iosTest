/**
 * @fileoverview added by tsickle
 * Generated from: popover.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, Directive, ElementRef, EventEmitter, Host, Input, Optional, Output, Renderer2, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { zoomBigMotion } from 'ng-zorro-antd/core/animation';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { isTooltipEmpty, NzTooltipBaseDirective, NzToolTipComponent } from 'ng-zorro-antd/tooltip';
var NzPopoverDirective = /** @class */ (function (_super) {
    __extends(NzPopoverDirective, _super);
    function NzPopoverDirective(elementRef, hostView, resolver, renderer, noAnimation) {
        var _this = _super.call(this, elementRef, hostView, resolver, renderer, noAnimation) || this;
        _this.noAnimation = noAnimation;
        // tslint:disable-next-line:no-output-rename
        _this.specificVisibleChange = new EventEmitter();
        _this.componentFactory = _this.resolver.resolveComponentFactory(NzPopoverComponent);
        return _this;
    }
    NzPopoverDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-popover]',
                    exportAs: 'nzPopover',
                    host: {
                        '[class.ant-popover-open]': 'visible'
                    }
                },] }
    ];
    /** @nocollapse */
    NzPopoverDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: Renderer2 },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzPopoverDirective.propDecorators = {
        specificTitle: [{ type: Input, args: ['nzPopoverTitle',] }],
        specificContent: [{ type: Input, args: ['nzPopoverContent',] }],
        directiveNameTitle: [{ type: Input, args: ['nz-popover',] }],
        specificTrigger: [{ type: Input, args: ['nzPopoverTrigger',] }],
        specificPlacement: [{ type: Input, args: ['nzPopoverPlacement',] }],
        specificOrigin: [{ type: Input, args: ['nzPopoverOrigin',] }],
        specificVisible: [{ type: Input, args: ['nzPopoverVisible',] }],
        specificMouseEnterDelay: [{ type: Input, args: ['nzPopoverMouseEnterDelay',] }],
        specificMouseLeaveDelay: [{ type: Input, args: ['nzPopoverMouseLeaveDelay',] }],
        specificOverlayClassName: [{ type: Input, args: ['nzPopoverOverlayClassName',] }],
        specificOverlayStyle: [{ type: Input, args: ['nzPopoverOverlayStyle',] }],
        specificVisibleChange: [{ type: Output, args: ['nzPopoverVisibleChange',] }]
    };
    return NzPopoverDirective;
}(NzTooltipBaseDirective));
export { NzPopoverDirective };
if (false) {
    /** @type {?} */
    NzPopoverDirective.prototype.specificTitle;
    /** @type {?} */
    NzPopoverDirective.prototype.specificContent;
    /** @type {?} */
    NzPopoverDirective.prototype.directiveNameTitle;
    /** @type {?} */
    NzPopoverDirective.prototype.specificTrigger;
    /** @type {?} */
    NzPopoverDirective.prototype.specificPlacement;
    /** @type {?} */
    NzPopoverDirective.prototype.specificOrigin;
    /** @type {?} */
    NzPopoverDirective.prototype.specificVisible;
    /** @type {?} */
    NzPopoverDirective.prototype.specificMouseEnterDelay;
    /** @type {?} */
    NzPopoverDirective.prototype.specificMouseLeaveDelay;
    /** @type {?} */
    NzPopoverDirective.prototype.specificOverlayClassName;
    /** @type {?} */
    NzPopoverDirective.prototype.specificOverlayStyle;
    /** @type {?} */
    NzPopoverDirective.prototype.specificVisibleChange;
    /** @type {?} */
    NzPopoverDirective.prototype.componentFactory;
    /** @type {?} */
    NzPopoverDirective.prototype.noAnimation;
}
var NzPopoverComponent = /** @class */ (function (_super) {
    __extends(NzPopoverComponent, _super);
    function NzPopoverComponent(cdr, noAnimation) {
        var _this = _super.call(this, cdr, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this._prefix = 'ant-popover-placement';
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    NzPopoverComponent.prototype.isEmpty = /**
     * @protected
     * @return {?}
     */
    function () {
        return isTooltipEmpty(this.nzTitle) && isTooltipEmpty(this.nzContent);
    };
    NzPopoverComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-popover',
                    exportAs: 'nzPopoverComponent',
                    animations: [zoomBigMotion],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    template: "\n    <ng-template\n      #overlay=\"cdkConnectedOverlay\"\n      cdkConnectedOverlay\n      nzConnectedOverlay\n      [cdkConnectedOverlayOrigin]=\"origin\"\n      [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\n      (backdropClick)=\"hide()\"\n      (detach)=\"hide()\"\n      (positionChange)=\"onPositionChange($event)\"\n      [cdkConnectedOverlayPositions]=\"_positions\"\n      [cdkConnectedOverlayOpen]=\"_visible\"\n    >\n      <div\n        class=\"ant-popover\"\n        [ngClass]=\"_classMap\"\n        [ngStyle]=\"nzOverlayStyle\"\n        [@.disabled]=\"noAnimation?.nzNoAnimation\"\n        [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n        [@zoomBigMotion]=\"'active'\"\n      >\n        <div class=\"ant-popover-content\">\n          <div class=\"ant-popover-arrow\"></div>\n          <div class=\"ant-popover-inner\" role=\"tooltip\">\n            <div>\n              <div class=\"ant-popover-title\" *ngIf=\"nzTitle\">\n                <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n              </div>\n              <div class=\"ant-popover-inner-content\">\n                <ng-container *nzStringTemplateOutlet=\"nzContent\">{{ nzContent }}</ng-container>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  "
                }] }
    ];
    /** @nocollapse */
    NzPopoverComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    return NzPopoverComponent;
}(NzToolTipComponent));
export { NzPopoverComponent };
if (false) {
    /** @type {?} */
    NzPopoverComponent.prototype._prefix;
    /** @type {?} */
    NzPopoverComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvcG9wb3Zlci8iLCJzb3VyY2VzIjpbInBvcG92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFFVCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUd6RSxPQUFPLEVBQUUsY0FBYyxFQUFFLHNCQUFzQixFQUFFLGtCQUFrQixFQUFvQixNQUFNLHVCQUF1QixDQUFDO0FBRXJIO0lBT3dDLHNDQUFzQjtJQWtCNUQsNEJBQ0UsVUFBc0IsRUFDdEIsUUFBMEIsRUFDMUIsUUFBa0MsRUFDbEMsUUFBbUIsRUFDUSxXQUFvQztRQUxqRSxZQU9FLGtCQUFNLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUMsU0FDN0Q7UUFINEIsaUJBQVcsR0FBWCxXQUFXLENBQXlCOztRQVR0QiwyQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRS9GLHNCQUFnQixHQUF5QyxLQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLGtCQUFrQixDQUFDLENBQUM7O0lBVW5ILENBQUM7O2dCQWpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSxXQUFXO29CQUNyQixJQUFJLEVBQUU7d0JBQ0osMEJBQTBCLEVBQUUsU0FBUztxQkFDdEM7aUJBQ0Y7Ozs7Z0JBdEJDLFVBQVU7Z0JBT1YsZ0JBQWdCO2dCQVRoQix3QkFBd0I7Z0JBUXhCLFNBQVM7Z0JBS0Ysc0JBQXNCLHVCQW1DMUIsSUFBSSxZQUFJLFFBQVE7OztnQ0F0QmxCLEtBQUssU0FBQyxnQkFBZ0I7a0NBQ3RCLEtBQUssU0FBQyxrQkFBa0I7cUNBQ3hCLEtBQUssU0FBQyxZQUFZO2tDQUNsQixLQUFLLFNBQUMsa0JBQWtCO29DQUN4QixLQUFLLFNBQUMsb0JBQW9CO2lDQUMxQixLQUFLLFNBQUMsaUJBQWlCO2tDQUN2QixLQUFLLFNBQUMsa0JBQWtCOzBDQUN4QixLQUFLLFNBQUMsMEJBQTBCOzBDQUNoQyxLQUFLLFNBQUMsMEJBQTBCOzJDQUNoQyxLQUFLLFNBQUMsMkJBQTJCO3VDQUNqQyxLQUFLLFNBQUMsdUJBQXVCO3dDQUc3QixNQUFNLFNBQUMsd0JBQXdCOztJQWFsQyx5QkFBQztDQUFBLEFBbENELENBT3dDLHNCQUFzQixHQTJCN0Q7U0EzQlksa0JBQWtCOzs7SUFDN0IsMkNBQWtEOztJQUNsRCw2Q0FBc0Q7O0lBQ3RELGdEQUEwRDs7SUFDMUQsNkNBQThEOztJQUM5RCwrQ0FBd0Q7O0lBQ3hELDRDQUFtRTs7SUFDbkUsNkNBQXFEOztJQUNyRCxxREFBb0U7O0lBQ3BFLHFEQUFvRTs7SUFDcEUsc0RBQXNFOztJQUN0RSxrREFBd0U7O0lBR3hFLG1EQUErRjs7SUFFL0YsOENBQW1IOztJQU9qSCx5Q0FBK0Q7O0FBTW5FO0lBNkN3QyxzQ0FBa0I7SUFHeEQsNEJBQVksR0FBc0IsRUFBNkIsV0FBb0M7UUFBbkcsWUFDRSxrQkFBTSxHQUFHLEVBQUUsV0FBVyxDQUFDLFNBQ3hCO1FBRjhELGlCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUZuRyxhQUFPLEdBQUcsdUJBQXVCLENBQUM7O0lBSWxDLENBQUM7Ozs7O0lBRVMsb0NBQU87Ozs7SUFBakI7UUFDRSxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4RSxDQUFDOztnQkF0REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixVQUFVLEVBQUUsQ0FBQyxhQUFhLENBQUM7b0JBQzNCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsUUFBUSxFQUFFLDR6Q0FvQ1Q7aUJBQ0Y7Ozs7Z0JBckdDLGlCQUFpQjtnQkFnQlYsc0JBQXNCLHVCQXlGUSxJQUFJLFlBQUksUUFBUTs7SUFPdkQseUJBQUM7Q0FBQSxBQXZERCxDQTZDd0Msa0JBQWtCLEdBVXpEO1NBVlksa0JBQWtCOzs7SUFDN0IscUNBQWtDOztJQUVFLHlDQUErRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb21wb25lbnRGYWN0b3J5LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHpvb21CaWdNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvYW5pbWF0aW9uJztcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbm8tYW5pbWF0aW9uJztcbmltcG9ydCB7IE5nU3R5bGVJbnRlcmZhY2UsIE56VFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgaXNUb29sdGlwRW1wdHksIE56VG9vbHRpcEJhc2VEaXJlY3RpdmUsIE56VG9vbFRpcENvbXBvbmVudCwgTnpUb29sdGlwVHJpZ2dlciB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuei1wb3BvdmVyXScsXG4gIGV4cG9ydEFzOiAnbnpQb3BvdmVyJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXBvcG92ZXItb3Blbl0nOiAndmlzaWJsZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelBvcG92ZXJEaXJlY3RpdmUgZXh0ZW5kcyBOelRvb2x0aXBCYXNlRGlyZWN0aXZlIHtcbiAgQElucHV0KCduelBvcG92ZXJUaXRsZScpIHNwZWNpZmljVGl0bGU/OiBOelRTVHlwZTtcbiAgQElucHV0KCduelBvcG92ZXJDb250ZW50Jykgc3BlY2lmaWNDb250ZW50PzogTnpUU1R5cGU7XG4gIEBJbnB1dCgnbnotcG9wb3ZlcicpIGRpcmVjdGl2ZU5hbWVUaXRsZT86IE56VFNUeXBlIHwgbnVsbDtcbiAgQElucHV0KCduelBvcG92ZXJUcmlnZ2VyJykgc3BlY2lmaWNUcmlnZ2VyPzogTnpUb29sdGlwVHJpZ2dlcjtcbiAgQElucHV0KCduelBvcG92ZXJQbGFjZW1lbnQnKSBzcGVjaWZpY1BsYWNlbWVudD86IHN0cmluZztcbiAgQElucHV0KCduelBvcG92ZXJPcmlnaW4nKSBzcGVjaWZpY09yaWdpbj86IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICBASW5wdXQoJ256UG9wb3ZlclZpc2libGUnKSBzcGVjaWZpY1Zpc2libGU/OiBib29sZWFuO1xuICBASW5wdXQoJ256UG9wb3Zlck1vdXNlRW50ZXJEZWxheScpIHNwZWNpZmljTW91c2VFbnRlckRlbGF5PzogbnVtYmVyO1xuICBASW5wdXQoJ256UG9wb3Zlck1vdXNlTGVhdmVEZWxheScpIHNwZWNpZmljTW91c2VMZWF2ZURlbGF5PzogbnVtYmVyO1xuICBASW5wdXQoJ256UG9wb3Zlck92ZXJsYXlDbGFzc05hbWUnKSBzcGVjaWZpY092ZXJsYXlDbGFzc05hbWU/OiBzdHJpbmc7XG4gIEBJbnB1dCgnbnpQb3BvdmVyT3ZlcmxheVN0eWxlJykgc3BlY2lmaWNPdmVybGF5U3R5bGU/OiBOZ1N0eWxlSW50ZXJmYWNlO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1vdXRwdXQtcmVuYW1lXG4gIEBPdXRwdXQoJ256UG9wb3ZlclZpc2libGVDaGFuZ2UnKSByZWFkb25seSBzcGVjaWZpY1Zpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY29tcG9uZW50RmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxOelBvcG92ZXJDb21wb25lbnQ+ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShOelBvcG92ZXJDb21wb25lbnQpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgaG9zdFZpZXc6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxuICApIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCBob3N0VmlldywgcmVzb2x2ZXIsIHJlbmRlcmVyLCBub0FuaW1hdGlvbik7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotcG9wb3ZlcicsXG4gIGV4cG9ydEFzOiAnbnpQb3BvdmVyQ29tcG9uZW50JyxcbiAgYW5pbWF0aW9uczogW3pvb21CaWdNb3Rpb25dLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICAjb3ZlcmxheT1cImNka0Nvbm5lY3RlZE92ZXJsYXlcIlxuICAgICAgY2RrQ29ubmVjdGVkT3ZlcmxheVxuICAgICAgbnpDb25uZWN0ZWRPdmVybGF5XG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJvcmlnaW5cIlxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlIYXNCYWNrZHJvcF09XCJfaGFzQmFja2Ryb3BcIlxuICAgICAgKGJhY2tkcm9wQ2xpY2spPVwiaGlkZSgpXCJcbiAgICAgIChkZXRhY2gpPVwiaGlkZSgpXCJcbiAgICAgIChwb3NpdGlvbkNoYW5nZSk9XCJvblBvc2l0aW9uQ2hhbmdlKCRldmVudClcIlxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnNdPVwiX3Bvc2l0aW9uc1wiXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwiX3Zpc2libGVcIlxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJhbnQtcG9wb3ZlclwiXG4gICAgICAgIFtuZ0NsYXNzXT1cIl9jbGFzc01hcFwiXG4gICAgICAgIFtuZ1N0eWxlXT1cIm56T3ZlcmxheVN0eWxlXCJcbiAgICAgICAgW0AuZGlzYWJsZWRdPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxuICAgICAgICBbbnpOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXG4gICAgICAgIFtAem9vbUJpZ01vdGlvbl09XCInYWN0aXZlJ1wiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcG9wb3Zlci1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1wb3BvdmVyLWFycm93XCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1wb3BvdmVyLWlubmVyXCIgcm9sZT1cInRvb2x0aXBcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcG9wb3Zlci10aXRsZVwiICpuZ0lmPVwibnpUaXRsZVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuelRpdGxlXCI+e3sgbnpUaXRsZSB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1wb3BvdmVyLWlubmVyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpDb250ZW50XCI+e3sgbnpDb250ZW50IH19PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOelBvcG92ZXJDb21wb25lbnQgZXh0ZW5kcyBOelRvb2xUaXBDb21wb25lbnQge1xuICBfcHJlZml4ID0gJ2FudC1wb3BvdmVyLXBsYWNlbWVudCc7XG5cbiAgY29uc3RydWN0b3IoY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlKSB7XG4gICAgc3VwZXIoY2RyLCBub0FuaW1hdGlvbik7XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNFbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNUb29sdGlwRW1wdHkodGhpcy5uelRpdGxlKSAmJiBpc1Rvb2x0aXBFbXB0eSh0aGlzLm56Q29udGVudCk7XG4gIH1cbn1cbiJdfQ==