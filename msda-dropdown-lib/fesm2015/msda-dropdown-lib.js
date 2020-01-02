import { Injectable, ɵɵdefineInjectable, Component, ViewChildren, ViewChild, Input, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/msda-dropdown-lib.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MsdaDropdownLibService {
    constructor() { }
}
MsdaDropdownLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MsdaDropdownLibService.ctorParameters = () => [];
/** @nocollapse */ MsdaDropdownLibService.ngInjectableDef = ɵɵdefineInjectable({ factory: function MsdaDropdownLibService_Factory() { return new MsdaDropdownLibService(); }, token: MsdaDropdownLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/msda-dropdown-lib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MsdaDropdownLibComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/msda-dropdown-lib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MsdaDropdownLibModule {
}
MsdaDropdownLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MsdaDropdownLibComponent],
                imports: [
                    HttpClientModule,
                    CommonModule
                ],
                exports: [MsdaDropdownLibComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: msda-dropdown-lib.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MsdaDropdownLibComponent, MsdaDropdownLibModule, MsdaDropdownLibService };
//# sourceMappingURL=msda-dropdown-lib.js.map
