import {AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';




// TODO: generate on the fly
const dimensions = {
  products: {width: 490, height: 280, x: 0},
  developers: {width: 390, height: 266, x: 100},
  company: {width: 260, height: 296, x: 200}
};




@Component({
  selector: 'app-msda-navigation-with-dropdown',
  templateUrl: './msda-navigation-with-dropdown.component.html',
  styleUrls: ['./msda-navigation-with-dropdown.component.scss']
})
export class MsdaNavigationWithDropdownComponent implements OnInit, AfterViewInit {

  @ViewChildren('navItemRef') navItemRefs: QueryList<any>;

  @ViewChild('popoverElRef', {static: true}) popoverElRef: ElementRef;
  @ViewChild('headerElRef', {static: true}) headerElRef: ElementRef;
  @ViewChild('arrowElRef', {static: true}) arrowElRef: ElementRef;
  @ViewChild('contentElRef', {static: true}) contentElRef: ElementRef;
  @ViewChild('backgroundElRef', {static: true}) backgroundElRef: ElementRef;

  sectionEls;
  popoverLeft;


  // navigation = [
  //   {name: 'navitem1', dropdownContent: 'dropdown content 1'},
  //   {name: 'navitem2', dropdownContent: 'dropdown content 2'},
  //   {name: 'navitem3', dropdownContent: 'dropdown content 3'}
  // ];

  @Input() public navigationData;


  initializeVariables() {
    this.sectionEls = document.querySelectorAll('.section');

    this.popoverLeft = this.popoverElRef.nativeElement.getBoundingClientRect()['x'];
  }


  showSection(section) {
    console.log(222222, section);
    this.popoverElRef.nativeElement.classList.add('open');
    this.sectionEls.forEach(el => el.classList.remove('active'));
    document.querySelector(`.section-${section}`).classList.add('active');

    // Position arrow
    this.arrowElRef.nativeElement['style'].transform = `translateX(${dimensions[section].arrowX}px)rotate(45deg)`;

    // Resize and position background
    this.backgroundElRef.nativeElement['style'].transform = `
    translateX(${dimensions[section].x}px)
    scaleX(${dimensions[section].width / dimensions['products'].width})
    scaleY(${dimensions[section].height / dimensions['products'].height})
  `;

    // this.backgroundEl.style.width = dimensions[section].width + 100 + 'px';
    // this.backgroundEl.style.height = dimensions[section].height + 100 + 'px';

    // Resize and position content
    this.contentElRef.nativeElement.style.width = dimensions[section].width + 'px';
    this.contentElRef.nativeElement.style.height = dimensions[section].height + 'px';

    this.contentElRef.nativeElement.style.transform = `translateX(${dimensions[section].x}px)`;

    // size container? If we remove from CSS and do everything dynamically.
  }




  constructor() {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {

    this.initializeVariables();



    this.navItemRefs.forEach(navItem => {
      const section = navItem.nativeElement.innerText;
      const rect = navItem.nativeElement.getBoundingClientRect();
      dimensions[section].arrowX = rect.left + (rect.width / 2) - this.popoverLeft;
    });



    // Set initial arrow position
    this.arrowElRef.nativeElement['style'].transform = `translateX(${dimensions.products['arrowX']}px)rotate(45deg)`;


    this.navItemRefs.forEach((navItem, index) => {
      navItem.nativeElement.addEventListener('mouseenter', (event) => {
        const targetPopover = event.target.innerText;
        console.log(event);
        this.showSection(targetPopover);
      });
    });


    this.headerElRef.nativeElement.addEventListener('mouseleave', () => {
      this.popoverElRef.nativeElement.classList.remove('open');
    });

  }

}
