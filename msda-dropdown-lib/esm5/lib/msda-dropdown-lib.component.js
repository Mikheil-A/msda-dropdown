/**
 * @fileoverview added by tsickle
 * Generated from: lib/msda-dropdown-lib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
var MsdaDropdownLibComponent = /** @class */ (function () {
    function MsdaDropdownLibComponent() {
        // TODO: generate on the fly
        this.dimensions = [
            { width: 490, height: 280, x: 0 },
            { width: 390, height: 266, x: 100 },
            { width: 260, height: 296, x: 200 }
        ];
    }
    /**
     * @param {?} index
     * @return {?}
     */
    MsdaDropdownLibComponent.prototype.showSection = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.popoverElRef.nativeElement.classList.add('open');
        this.sectionElRefs.forEach((/**
         * @param {?} el
         * @return {?}
         */
        function (el) { return el.nativeElement.classList.remove('active'); }));
        this.sectionElRefs.forEach((/**
         * @param {?} el
         * @param {?} i
         * @return {?}
         */
        function (el, i) {
            // this.dimensions[i]['height'] = el.nativeElement.offsetHeight;
            // this.dimensions[i]['width'] = el.nativeElement.offsetWidth;
            // this.dimensions[index]['x'] = el.nativeElement.getBoundingClientRect().x;
            if (index === i) {
                el.nativeElement.classList.add('active');
                // el.nativeElement.addEventListener('mouseleave', () => {
                //   this.popoverElRef.nativeElement.classList.remove('open');
                // });
            }
        }));
        // Position arrow
        this.arrowElRef.nativeElement['style'].transform = "translateX(" + this.dimensions[index]['arrowX'] + "px)rotate(45deg)";
        // Resize and position background
        this.backgroundElRef.nativeElement['style'].transform = "\n      translateX(" + this.dimensions[index].x + "px)\n      scaleX(" + this.dimensions[index].width / this.dimensions[0].width + ")\n      scaleY(" + this.dimensions[index].height / this.dimensions[0].height + ")\n    ";
        this.backgroundElRef.nativeElement.style.height = this.dimensions[index].height + 'px';
        // this.backgroundElRef.nativeElement.style.width = this.dimensions[index].width + 'px';
        // Resize and position content
        this.contentElRef.nativeElement.style.width = this.dimensions[index].width + 'px';
        this.contentElRef.nativeElement.style.height = this.dimensions[index].height + 'px';
        this.contentElRef.nativeElement.style.transform = "translateX(" + this.dimensions[index].x + "px)";
    };
    /**
     * @return {?}
     */
    MsdaDropdownLibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    MsdaDropdownLibComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.navigationData.forEach((/**
         * @param {?} navItem
         * @param {?} i
         * @return {?}
         */
        function (navItem, i) {
            /** @type {?} */
            var numberOfProducts = 0;
            navItem.dropdownData.forEach((/**
             * @param {?} dropdownItem
             * @return {?}
             */
            function (dropdownItem) {
                numberOfProducts += dropdownItem.products.length;
            }));
            console.log(i, numberOfProducts);
            _this.dimensions[i]['height'] = numberOfProducts * 50 + 250;
        }));
    };
    /**
     * @return {?}
     */
    MsdaDropdownLibComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.popoverLeft = this.popoverElRef.nativeElement.getBoundingClientRect().x;
        this.navItemRefs.forEach((/**
         * @param {?} navItem
         * @param {?} i
         * @return {?}
         */
        function (navItem, i) {
            /** @type {?} */
            var rect = navItem.nativeElement.getBoundingClientRect();
            _this.dimensions[i]['arrowX'] = rect.left + (rect.width / 2) - _this.popoverLeft;
        }));
        // Set initial arrow position
        this.arrowElRef.nativeElement['style'].transform = "translateX(" + this.dimensions[0]['arrowX'] + "px)rotate(45deg)";
        this.headerElRef.nativeElement.addEventListener('mouseleave', (/**
         * @return {?}
         */
        function () {
            _this.popoverElRef.nativeElement.classList.remove('open');
        }));
    };
    MsdaDropdownLibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-msda-dropdown-lib',
                    template: "<header #headerElRef>\r\n\r\n  <section>\r\n    <nav class=\"nav\">\r\n      <button *ngFor=\"let navItem of navigationData; let i = index\" class=\"nav-link\" #navItemRef\r\n              (mouseenter)=\"showSection(i)\">\r\n        {{navItem.itemName}}\r\n      </button>\r\n    </nav>\r\n  </section>\r\n\r\n  <div class=\"popover\" #popoverElRef>\r\n    <div class=\"content\" #contentElRef>\r\n\r\n      <section *ngFor=\"let navItem of navigationData\" class=\"section\" #sectionElRef>\r\n\r\n        <div *ngFor=\"let dropdownInfo of navItem.dropdownData\">\r\n          <h1 class=\"headline\">{{dropdownInfo.headline}}</h1>\r\n\r\n          <a href=\"#\" *ngFor=\"let product of dropdownInfo.products\" class=\"product\">\r\n            <img [src]=\"product.iconUrl\" class=\"product-icon\">\r\n            <div class=\"description\">\r\n              <h2>{{product.title}}</h2>\r\n              <span>{{product.description}}</span>\r\n            </div>\r\n          </a>\r\n        </div>\r\n\r\n      </section>\r\n\r\n    </div>\r\n\r\n    <div class=\"background\" #backgroundElRef></div>\r\n    <div class=\"arrow\" #arrowElRef></div>\r\n  </div>\r\n\r\n</header>\r\n\r\n\r\n<!--<h1>this is a test</h1>-->\r\n",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600);*{box-sizing:border-box;font-family:\"Open Sans\",sans-serif}body{font-family:\"Open Sans\",sans-serif;background-color:#4553ff;padding:20px}.nav{display:flex;flex-direction:row}.nav-link{height:50px;padding:0 25px;line-height:50px;border:0;font-size:16px;color:#fff;background:0 0;font-weight:500;-webkit-font-smoothing:antialiased;transition:opacity .2s}.nav-link:hover{opacity:.5}.popover{position:absolute;left:0;right:0;opacity:0;transform-origin:center -20px;transform:rotateX(-15deg);transition:transform .3s,opacity .3s;display:inline-block}.popover.open{opacity:1;transform:rotateX(0)}.arrow{position:absolute;top:-6px;left:0;width:12px;height:12px;margin-left:-6px;background:#fff;box-shadow:-3px -3px 5px rgba(80,90,120,.05);border-radius:4px 0 0;transform:rotate(45deg);transition:transform .3s,opacity .3s;will-change:transform}.background{position:absolute;top:0;left:0;width:490px;background:#fff;border-radius:6px;box-shadow:0 50px 100px -20px rgba(50,50,93,.25),0 30px 60px -30px rgba(0,0,0,.3);transform-origin:0 0;transition:transform .3s,opacity .3s}.content{position:absolute;overflow:visible;z-index:1;top:0;left:0;transition:transform .3s,opacity .3s}.section{position:absolute;opacity:0;transition:opacity .2s;overflow:hidden}.section .headline{text-transform:uppercase;font-size:14px;font-weight:600;margin-bottom:24px;color:#32325d}.section a.product{display:flex;flex-direction:row;align-items:flex-start;margin:0 0 20px;cursor:pointer;text-decoration:none}.section a.product:last-child{margin:0}.section a.product img.product-icon{margin-right:10px}.section a.product .description{display:flex;flex-direction:column}.section a.product .description h2{font-size:17px;margin:0 0 7px;color:#32325d}.section a.product .description span{color:#6b7c93;font-size:14px}.section.active{opacity:1}"]
                }] }
    ];
    /** @nocollapse */
    MsdaDropdownLibComponent.ctorParameters = function () { return []; };
    MsdaDropdownLibComponent.propDecorators = {
        navItemRefs: [{ type: ViewChildren, args: ['navItemRef',] }],
        sectionElRefs: [{ type: ViewChildren, args: ['sectionElRef',] }],
        popoverElRef: [{ type: ViewChild, args: ['popoverElRef', { static: true },] }],
        headerElRef: [{ type: ViewChild, args: ['headerElRef', { static: true },] }],
        arrowElRef: [{ type: ViewChild, args: ['arrowElRef', { static: true },] }],
        contentElRef: [{ type: ViewChild, args: ['contentElRef', { static: true },] }],
        backgroundElRef: [{ type: ViewChild, args: ['backgroundElRef', { static: true },] }],
        navigationData: [{ type: Input }]
    };
    return MsdaDropdownLibComponent;
}());
export { MsdaDropdownLibComponent };
if (false) {
    /** @type {?} */
    MsdaDropdownLibComponent.prototype.navItemRefs;
    /** @type {?} */
    MsdaDropdownLibComponent.prototype.sectionElRefs;
    /** @type {?} */
    MsdaDropdownLibComponent.prototype.popoverElRef;
    /** @type {?} */
    MsdaDropdownLibComponent.prototype.headerElRef;
    /** @type {?} */
    MsdaDropdownLibComponent.prototype.arrowElRef;
    /** @type {?} */
    MsdaDropdownLibComponent.prototype.contentElRef;
    /** @type {?} */
    MsdaDropdownLibComponent.prototype.backgroundElRef;
    /** @type {?} */
    MsdaDropdownLibComponent.prototype.popoverLeft;
    /** @type {?} */
    MsdaDropdownLibComponent.prototype.dimensions;
    /** @type {?} */
    MsdaDropdownLibComponent.prototype.navigationData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXNkYS1kcm9wZG93bi1saWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXNkYS1kcm9wZG93bi1saWIvIiwic291cmNlcyI6WyJsaWIvbXNkYS1kcm9wZG93bi1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBcUIsU0FBUyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHakk7SUF1RUU7O1FBbERBLGVBQVUsR0FBRztZQUNYLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUM7WUFDL0IsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBQztZQUNqQyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFDO1NBQ2xDLENBQUM7SUErQ0YsQ0FBQzs7Ozs7SUF6Q0QsOENBQVc7Ozs7SUFBWCxVQUFZLEtBQUs7UUFDZixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUEzQyxDQUEyQyxFQUFDLENBQUM7UUFFOUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPOzs7OztRQUFDLFVBQUMsRUFBRSxFQUFFLENBQUM7WUFFL0IsZ0VBQWdFO1lBQ2hFLDhEQUE4RDtZQUM5RCw0RUFBNEU7WUFFNUUsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO2dCQUNmLEVBQUUs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QUFZOztJQUlaLDhDQUlFOztJQUdGLGtEQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFF1ZXJ5TGlzdCwgVmlld0NoaWxkLCBWaWV3Q2hpbGRyZW59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1tc2RhLWRyb3Bkb3duLWxpYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9tc2RhLWRyb3Bkb3duLWxpYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21zZGEtZHJvcGRvd24tbGliLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTXNkYURyb3Bkb3duTGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMgIHtcblxuXG4gIEBWaWV3Q2hpbGRyZW4oJ25hdkl0ZW1SZWYnKSBuYXZJdGVtUmVmczogUXVlcnlMaXN0PGFueT47XG4gIEBWaWV3Q2hpbGRyZW4oJ3NlY3Rpb25FbFJlZicpIHNlY3Rpb25FbFJlZnM6IFF1ZXJ5TGlzdDxhbnk+O1xuXG4gIEBWaWV3Q2hpbGQoJ3BvcG92ZXJFbFJlZicsIHtzdGF0aWM6IHRydWV9KSBwb3BvdmVyRWxSZWY6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2hlYWRlckVsUmVmJywge3N0YXRpYzogdHJ1ZX0pIGhlYWRlckVsUmVmOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdhcnJvd0VsUmVmJywge3N0YXRpYzogdHJ1ZX0pIGFycm93RWxSZWY6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRFbFJlZicsIHtzdGF0aWM6IHRydWV9KSBjb250ZW50RWxSZWY6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2JhY2tncm91bmRFbFJlZicsIHtzdGF0aWM6IHRydWV9KSBiYWNrZ3JvdW5kRWxSZWY6IEVsZW1lbnRSZWY7XG5cbiAgcG9wb3ZlckxlZnQ7XG5cblxuICAvLyBUT0RPOiBnZW5lcmF0ZSBvbiB0aGUgZmx5XG4gIGRpbWVuc2lvbnMgPSBbXG4gICAge3dpZHRoOiA0OTAsIGhlaWdodDogMjgwLCB4OiAwfSxcbiAgICB7d2lkdGg6IDM5MCwgaGVpZ2h0OiAyNjYsIHg6IDEwMH0sXG4gICAge3dpZHRoOiAyNjAsIGhlaWdodDogMjk2LCB4OiAyMDB9XG4gIF07XG5cblxuICBASW5wdXQoKSBwdWJsaWMgbmF2aWdhdGlvbkRhdGE7XG5cblxuICBzaG93U2VjdGlvbihpbmRleCkge1xuICAgIHRoaXMucG9wb3ZlckVsUmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICAgIHRoaXMuc2VjdGlvbkVsUmVmcy5mb3JFYWNoKGVsID0+IGVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuXG4gICAgdGhpcy5zZWN0aW9uRWxSZWZzLmZvckVhY2goKGVsLCBpKSA9PiB7XG5cbiAgICAgIC8vIHRoaXMuZGltZW5zaW9uc1tpXVsnaGVpZ2h0J10gPSBlbC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgIC8vIHRoaXMuZGltZW5zaW9uc1tpXVsnd2lkdGgnXSA9IGVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAvLyB0aGlzLmRpbWVuc2lvbnNbaW5kZXhdWyd4J10gPSBlbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLng7XG5cbiAgICAgIGlmIChpbmRleCA9PT0gaSkge1xuICAgICAgICBlbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgICAgIC8vIGVsLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgLy8gICB0aGlzLnBvcG92ZXJFbFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgICAgLy8gfSk7XG4gICAgICB9XG4gICAgfSk7XG5cblxuICAgIC8vIFBvc2l0aW9uIGFycm93XG4gICAgdGhpcy5hcnJvd0VsUmVmLm5hdGl2ZUVsZW1lbnRbJ3N0eWxlJ10udHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0aGlzLmRpbWVuc2lvbnNbaW5kZXhdWydhcnJvd1gnXX1weClyb3RhdGUoNDVkZWcpYDtcblxuICAgIC8vIFJlc2l6ZSBhbmQgcG9zaXRpb24gYmFja2dyb3VuZFxuICAgIHRoaXMuYmFja2dyb3VuZEVsUmVmLm5hdGl2ZUVsZW1lbnRbJ3N0eWxlJ10udHJhbnNmb3JtID0gYFxuICAgICAgdHJhbnNsYXRlWCgke3RoaXMuZGltZW5zaW9uc1tpbmRleF0ueH1weClcbiAgICAgIHNjYWxlWCgke3RoaXMuZGltZW5zaW9uc1tpbmRleF0ud2lkdGggLyB0aGlzLmRpbWVuc2lvbnNbMF0ud2lkdGh9KVxuICAgICAgc2NhbGVZKCR7dGhpcy5kaW1lbnNpb25zW2luZGV4XS5oZWlnaHQgLyB0aGlzLmRpbWVuc2lvbnNbMF0uaGVpZ2h0fSlcbiAgICBgO1xuXG4gICAgdGhpcy5iYWNrZ3JvdW5kRWxSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLmRpbWVuc2lvbnNbaW5kZXhdLmhlaWdodCArICdweCc7XG4gICAgLy8gdGhpcy5iYWNrZ3JvdW5kRWxSZWYubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IHRoaXMuZGltZW5zaW9uc1tpbmRleF0ud2lkdGggKyAncHgnO1xuXG4gICAgLy8gUmVzaXplIGFuZCBwb3NpdGlvbiBjb250ZW50XG4gICAgdGhpcy5jb250ZW50RWxSZWYubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IHRoaXMuZGltZW5zaW9uc1tpbmRleF0ud2lkdGggKyAncHgnO1xuICAgIHRoaXMuY29udGVudEVsUmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5kaW1lbnNpb25zW2luZGV4XS5oZWlnaHQgKyAncHgnO1xuICAgIHRoaXMuY29udGVudEVsUmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0aGlzLmRpbWVuc2lvbnNbaW5kZXhdLnh9cHgpYDtcbiAgfVxuXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMubmF2aWdhdGlvbkRhdGEuZm9yRWFjaCgobmF2SXRlbSwgaSkgPT4ge1xuICAgICAgbGV0IG51bWJlck9mUHJvZHVjdHMgPSAwO1xuICAgICAgbmF2SXRlbS5kcm9wZG93bkRhdGEuZm9yRWFjaChkcm9wZG93bkl0ZW0gPT4ge1xuICAgICAgICBudW1iZXJPZlByb2R1Y3RzICs9IGRyb3Bkb3duSXRlbS5wcm9kdWN0cy5sZW5ndGg7XG4gICAgICB9KTtcblxuICAgICAgY29uc29sZS5sb2coaSwgbnVtYmVyT2ZQcm9kdWN0cyk7XG4gICAgICB0aGlzLmRpbWVuc2lvbnNbaV1bJ2hlaWdodCddID0gbnVtYmVyT2ZQcm9kdWN0cyAqIDUwICsgMjUwO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucG9wb3ZlckxlZnQgPSB0aGlzLnBvcG92ZXJFbFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLng7XG5cbiAgICB0aGlzLm5hdkl0ZW1SZWZzLmZvckVhY2goKG5hdkl0ZW0sIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlY3QgPSBuYXZJdGVtLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB0aGlzLmRpbWVuc2lvbnNbaV1bJ2Fycm93WCddID0gcmVjdC5sZWZ0ICsgKHJlY3Qud2lkdGggLyAyKSAtIHRoaXMucG9wb3ZlckxlZnQ7XG4gICAgfSk7XG5cbiAgICAvLyBTZXQgaW5pdGlhbCBhcnJvdyBwb3NpdGlvblxuICAgIHRoaXMuYXJyb3dFbFJlZi5uYXRpdmVFbGVtZW50WydzdHlsZSddLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dGhpcy5kaW1lbnNpb25zWzBdWydhcnJvd1gnXX1weClyb3RhdGUoNDVkZWcpYDtcblxuICAgIHRoaXMuaGVhZGVyRWxSZWYubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgdGhpcy5wb3BvdmVyRWxSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgfSk7XG4gIH1cblxufVxuIl19