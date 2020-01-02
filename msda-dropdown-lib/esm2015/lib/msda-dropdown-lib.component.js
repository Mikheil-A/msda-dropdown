/**
 * @fileoverview added by tsickle
 * Generated from: lib/msda-dropdown-lib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
export class MsdaDropdownLibComponent {
    constructor() {
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
    showSection(index) {
        this.popoverElRef.nativeElement.classList.add('open');
        this.sectionElRefs.forEach((/**
         * @param {?} el
         * @return {?}
         */
        el => el.nativeElement.classList.remove('active')));
        this.sectionElRefs.forEach((/**
         * @param {?} el
         * @param {?} i
         * @return {?}
         */
        (el, i) => {
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
        this.arrowElRef.nativeElement['style'].transform = `translateX(${this.dimensions[index]['arrowX']}px)rotate(45deg)`;
        // Resize and position background
        this.backgroundElRef.nativeElement['style'].transform = `
      translateX(${this.dimensions[index].x}px)
      scaleX(${this.dimensions[index].width / this.dimensions[0].width})
      scaleY(${this.dimensions[index].height / this.dimensions[0].height})
    `;
        this.backgroundElRef.nativeElement.style.height = this.dimensions[index].height + 'px';
        // this.backgroundElRef.nativeElement.style.width = this.dimensions[index].width + 'px';
        // Resize and position content
        this.contentElRef.nativeElement.style.width = this.dimensions[index].width + 'px';
        this.contentElRef.nativeElement.style.height = this.dimensions[index].height + 'px';
        this.contentElRef.nativeElement.style.transform = `translateX(${this.dimensions[index].x}px)`;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.navigationData.forEach((/**
         * @param {?} navItem
         * @param {?} i
         * @return {?}
         */
        (navItem, i) => {
            /** @type {?} */
            let numberOfProducts = 0;
            navItem.dropdownData.forEach((/**
             * @param {?} dropdownItem
             * @return {?}
             */
            dropdownItem => {
                numberOfProducts += dropdownItem.products.length;
            }));
            console.log(i, numberOfProducts);
            this.dimensions[i]['height'] = numberOfProducts * 50 + 250;
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.popoverLeft = this.popoverElRef.nativeElement.getBoundingClientRect().x;
        this.navItemRefs.forEach((/**
         * @param {?} navItem
         * @param {?} i
         * @return {?}
         */
        (navItem, i) => {
            /** @type {?} */
            const rect = navItem.nativeElement.getBoundingClientRect();
            this.dimensions[i]['arrowX'] = rect.left + (rect.width / 2) - this.popoverLeft;
        }));
        // Set initial arrow position
        this.arrowElRef.nativeElement['style'].transform = `translateX(${this.dimensions[0]['arrowX']}px)rotate(45deg)`;
        this.headerElRef.nativeElement.addEventListener('mouseleave', (/**
         * @return {?}
         */
        () => {
            this.popoverElRef.nativeElement.classList.remove('open');
        }));
    }
}
MsdaDropdownLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-msda-dropdown-lib',
                template: "<header #headerElRef>\r\n\r\n  <section>\r\n    <nav class=\"nav\">\r\n      <button *ngFor=\"let navItem of navigationData; let i = index\" class=\"nav-link\" #navItemRef\r\n              (mouseenter)=\"showSection(i)\">\r\n        {{navItem.itemName}}\r\n      </button>\r\n    </nav>\r\n  </section>\r\n\r\n  <div class=\"popover\" #popoverElRef>\r\n    <div class=\"content\" #contentElRef>\r\n\r\n      <section *ngFor=\"let navItem of navigationData\" class=\"section\" #sectionElRef>\r\n\r\n        <div *ngFor=\"let dropdownInfo of navItem.dropdownData\">\r\n          <h1 class=\"headline\">{{dropdownInfo.headline}}</h1>\r\n\r\n          <a href=\"#\" *ngFor=\"let product of dropdownInfo.products\" class=\"product\">\r\n            <img [src]=\"product.iconUrl\" class=\"product-icon\">\r\n            <div class=\"description\">\r\n              <h2>{{product.title}}</h2>\r\n              <span>{{product.description}}</span>\r\n            </div>\r\n          </a>\r\n        </div>\r\n\r\n      </section>\r\n\r\n    </div>\r\n\r\n    <div class=\"background\" #backgroundElRef></div>\r\n    <div class=\"arrow\" #arrowElRef></div>\r\n  </div>\r\n\r\n</header>\r\n\r\n\r\n<!--<h1>this is a test</h1>-->\r\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600);*{box-sizing:border-box;font-family:\"Open Sans\",sans-serif}body{font-family:\"Open Sans\",sans-serif;background-color:#4553ff;padding:20px}.nav{display:flex;flex-direction:row}.nav-link{height:50px;padding:0 25px;line-height:50px;border:0;font-size:16px;color:#fff;background:0 0;font-weight:500;-webkit-font-smoothing:antialiased;transition:opacity .2s}.nav-link:hover{opacity:.5}.popover{position:absolute;left:0;right:0;opacity:0;transform-origin:center -20px;transform:rotateX(-15deg);transition:transform .3s,opacity .3s;display:inline-block}.popover.open{opacity:1;transform:rotateX(0)}.arrow{position:absolute;top:-6px;left:0;width:12px;height:12px;margin-left:-6px;background:#fff;box-shadow:-3px -3px 5px rgba(80,90,120,.05);border-radius:4px 0 0;transform:rotate(45deg);transition:transform .3s,opacity .3s;will-change:transform}.background{position:absolute;top:0;left:0;width:490px;background:#fff;border-radius:6px;box-shadow:0 50px 100px -20px rgba(50,50,93,.25),0 30px 60px -30px rgba(0,0,0,.3);transform-origin:0 0;transition:transform .3s,opacity .3s}.content{position:absolute;overflow:visible;z-index:1;top:0;left:0;transition:transform .3s,opacity .3s}.section{position:absolute;opacity:0;transition:opacity .2s;overflow:hidden}.section .headline{text-transform:uppercase;font-size:14px;font-weight:600;margin-bottom:24px;color:#32325d}.section a.product{display:flex;flex-direction:row;align-items:flex-start;margin:0 0 20px;cursor:pointer;text-decoration:none}.section a.product:last-child{margin:0}.section a.product img.product-icon{margin-right:10px}.section a.product .description{display:flex;flex-direction:column}.section a.product .description h2{font-size:17px;margin:0 0 7px;color:#32325d}.section a.product .description span{color:#6b7c93;font-size:14px}.section.active{opacity:1}"]
            }] }
];
/** @nocollapse */
MsdaDropdownLibComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXNkYS1kcm9wZG93bi1saWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXNkYS1kcm9wZG93bi1saWIvIiwic291cmNlcyI6WyJsaWIvbXNkYS1kcm9wZG93bi1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBcUIsU0FBUyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFRakksTUFBTSxPQUFPLHdCQUF3QjtJQWtFbkM7O1FBbERBLGVBQVUsR0FBRztZQUNYLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUM7WUFDL0IsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBQztZQUNqQyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFDO1NBQ2xDLENBQUM7SUErQ0YsQ0FBQzs7Ozs7SUF6Q0QsV0FBVyxDQUFDLEtBQUs7UUFDZixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTzs7OztRQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFDLENBQUM7UUFFOUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPOzs7OztRQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBRW5DLGdFQUFnRTtZQUNoRSw4REFBOEQ7WUFDOUQsNEVBQTRFO1lBRTVFLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtnQkFD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b3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgUXVlcnlMaXN0LCBWaWV3Q2hpbGQsIFZpZXdDaGlsZHJlbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW1zZGEtZHJvcGRvd24tbGliJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21zZGEtZHJvcGRvd24tbGliLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbXNkYS1kcm9wZG93bi1saWIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNc2RhRHJvcGRvd25MaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyAge1xuXG5cbiAgQFZpZXdDaGlsZHJlbignbmF2SXRlbVJlZicpIG5hdkl0ZW1SZWZzOiBRdWVyeUxpc3Q8YW55PjtcbiAgQFZpZXdDaGlsZHJlbignc2VjdGlvbkVsUmVmJykgc2VjdGlvbkVsUmVmczogUXVlcnlMaXN0PGFueT47XG5cbiAgQFZpZXdDaGlsZCgncG9wb3ZlckVsUmVmJywge3N0YXRpYzogdHJ1ZX0pIHBvcG92ZXJFbFJlZjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnaGVhZGVyRWxSZWYnLCB7c3RhdGljOiB0cnVlfSkgaGVhZGVyRWxSZWY6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2Fycm93RWxSZWYnLCB7c3RhdGljOiB0cnVlfSkgYXJyb3dFbFJlZjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnY29udGVudEVsUmVmJywge3N0YXRpYzogdHJ1ZX0pIGNvbnRlbnRFbFJlZjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnYmFja2dyb3VuZEVsUmVmJywge3N0YXRpYzogdHJ1ZX0pIGJhY2tncm91bmRFbFJlZjogRWxlbWVudFJlZjtcblxuICBwb3BvdmVyTGVmdDtcblxuXG4gIC8vIFRPRE86IGdlbmVyYXRlIG9uIHRoZSBmbHlcbiAgZGltZW5zaW9ucyA9IFtcbiAgICB7d2lkdGg6IDQ5MCwgaGVpZ2h0OiAyODAsIHg6IDB9LFxuICAgIHt3aWR0aDogMzkwLCBoZWlnaHQ6IDI2NiwgeDogMTAwfSxcbiAgICB7d2lkdGg6IDI2MCwgaGVpZ2h0OiAyOTYsIHg6IDIwMH1cbiAgXTtcblxuXG4gIEBJbnB1dCgpIHB1YmxpYyBuYXZpZ2F0aW9uRGF0YTtcblxuXG4gIHNob3dTZWN0aW9uKGluZGV4KSB7XG4gICAgdGhpcy5wb3BvdmVyRWxSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG4gICAgdGhpcy5zZWN0aW9uRWxSZWZzLmZvckVhY2goZWwgPT4gZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG5cbiAgICB0aGlzLnNlY3Rpb25FbFJlZnMuZm9yRWFjaCgoZWwsIGkpID0+IHtcblxuICAgICAgLy8gdGhpcy5kaW1lbnNpb25zW2ldWydoZWlnaHQnXSA9IGVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgLy8gdGhpcy5kaW1lbnNpb25zW2ldWyd3aWR0aCddID0gZWwubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgIC8vIHRoaXMuZGltZW5zaW9uc1tpbmRleF1bJ3gnXSA9IGVsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueDtcblxuICAgICAgaWYgKGluZGV4ID09PSBpKSB7XG4gICAgICAgIGVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICAgICAgLy8gZWwubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAvLyAgIHRoaXMucG9wb3ZlckVsUmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgICAvLyB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgLy8gUG9zaXRpb24gYXJyb3dcbiAgICB0aGlzLmFycm93RWxSZWYubmF0aXZlRWxlbWVudFsnc3R5bGUnXS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3RoaXMuZGltZW5zaW9uc1tpbmRleF1bJ2Fycm93WCddfXB4KXJvdGF0ZSg0NWRlZylgO1xuXG4gICAgLy8gUmVzaXplIGFuZCBwb3NpdGlvbiBiYWNrZ3JvdW5kXG4gICAgdGhpcy5iYWNrZ3JvdW5kRWxSZWYubmF0aXZlRWxlbWVudFsnc3R5bGUnXS50cmFuc2Zvcm0gPSBgXG4gICAgICB0cmFuc2xhdGVYKCR7dGhpcy5kaW1lbnNpb25zW2luZGV4XS54fXB4KVxuICAgICAgc2NhbGVYKCR7dGhpcy5kaW1lbnNpb25zW2luZGV4XS53aWR0aCAvIHRoaXMuZGltZW5zaW9uc1swXS53aWR0aH0pXG4gICAgICBzY2FsZVkoJHt0aGlzLmRpbWVuc2lvbnNbaW5kZXhdLmhlaWdodCAvIHRoaXMuZGltZW5zaW9uc1swXS5oZWlnaHR9KVxuICAgIGA7XG5cbiAgICB0aGlzLmJhY2tncm91bmRFbFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuZGltZW5zaW9uc1tpbmRleF0uaGVpZ2h0ICsgJ3B4JztcbiAgICAvLyB0aGlzLmJhY2tncm91bmRFbFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gdGhpcy5kaW1lbnNpb25zW2luZGV4XS53aWR0aCArICdweCc7XG5cbiAgICAvLyBSZXNpemUgYW5kIHBvc2l0aW9uIGNvbnRlbnRcbiAgICB0aGlzLmNvbnRlbnRFbFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gdGhpcy5kaW1lbnNpb25zW2luZGV4XS53aWR0aCArICdweCc7XG4gICAgdGhpcy5jb250ZW50RWxSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLmRpbWVuc2lvbnNbaW5kZXhdLmhlaWdodCArICdweCc7XG4gICAgdGhpcy5jb250ZW50RWxSZWYubmF0aXZlRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3RoaXMuZGltZW5zaW9uc1tpbmRleF0ueH1weClgO1xuICB9XG5cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5uYXZpZ2F0aW9uRGF0YS5mb3JFYWNoKChuYXZJdGVtLCBpKSA9PiB7XG4gICAgICBsZXQgbnVtYmVyT2ZQcm9kdWN0cyA9IDA7XG4gICAgICBuYXZJdGVtLmRyb3Bkb3duRGF0YS5mb3JFYWNoKGRyb3Bkb3duSXRlbSA9PiB7XG4gICAgICAgIG51bWJlck9mUHJvZHVjdHMgKz0gZHJvcGRvd25JdGVtLnByb2R1Y3RzLmxlbmd0aDtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zb2xlLmxvZyhpLCBudW1iZXJPZlByb2R1Y3RzKTtcbiAgICAgIHRoaXMuZGltZW5zaW9uc1tpXVsnaGVpZ2h0J10gPSBudW1iZXJPZlByb2R1Y3RzICogNTAgKyAyNTA7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5wb3BvdmVyTGVmdCA9IHRoaXMucG9wb3ZlckVsUmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueDtcblxuICAgIHRoaXMubmF2SXRlbVJlZnMuZm9yRWFjaCgobmF2SXRlbSwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVjdCA9IG5hdkl0ZW0ubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHRoaXMuZGltZW5zaW9uc1tpXVsnYXJyb3dYJ10gPSByZWN0LmxlZnQgKyAocmVjdC53aWR0aCAvIDIpIC0gdGhpcy5wb3BvdmVyTGVmdDtcbiAgICB9KTtcblxuICAgIC8vIFNldCBpbml0aWFsIGFycm93IHBvc2l0aW9uXG4gICAgdGhpcy5hcnJvd0VsUmVmLm5hdGl2ZUVsZW1lbnRbJ3N0eWxlJ10udHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0aGlzLmRpbWVuc2lvbnNbMF1bJ2Fycm93WCddfXB4KXJvdGF0ZSg0NWRlZylgO1xuXG4gICAgdGhpcy5oZWFkZXJFbFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnBvcG92ZXJFbFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=