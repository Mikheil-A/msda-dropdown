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
  @ViewChildren('sectionElRef') sectionElRefs: QueryList<any>;

  @ViewChild('popoverElRef', {static: true}) popoverElRef: ElementRef;
  @ViewChild('headerElRef', {static: true}) headerElRef: ElementRef;
  @ViewChild('arrowElRef', {static: true}) arrowElRef: ElementRef;
  @ViewChild('contentElRef', {static: true}) contentElRef: ElementRef;
  @ViewChild('backgroundElRef', {static: true}) backgroundElRef: ElementRef;

  popoverLeft;


  // navigation = [
  //   {name: 'navitem1', dropdownContent: 'dropdown content 1'},
  //   {name: 'navitem2', dropdownContent: 'dropdown content 2'},
  //   {name: 'navitem3', dropdownContent: 'dropdown content 3'}
  // ];

  @Input() public navigationData;


  initializeVariables() {

    this.popoverLeft = this.popoverElRef.nativeElement.getBoundingClientRect()['x'];
  }


  showSection(section, index) {
    let activeSectionHeight;
    let activeSectionWidth;

    this.popoverElRef.nativeElement.classList.add('open');
    this.sectionElRefs.forEach(el => el.nativeElement.classList.remove('active'));
    this.sectionElRefs.forEach((el, i) => {
      if (index === i) {
        el.nativeElement.classList.add('active');

        activeSectionHeight = el.nativeElement.offsetHeight;
        activeSectionWidth = el.nativeElement.offsetWidth;
      }
    });



    console.log(dimensions[section], dimensions['products']);


    // this.sectionElRefs[index].nativeElement.classList.add('active');

    // Position arrow
    this.arrowElRef.nativeElement['style'].transform = `translateX(${dimensions[section].arrowX}px)rotate(45deg)`;

    // Resize and position background
    this.backgroundElRef.nativeElement['style'].transform = `
    translateX(${dimensions[section].x}px)
    scaleX(${dimensions[section].width / dimensions['products'].width})
    scaleY(${dimensions[section].height / dimensions['products'].height})
  `;

    // this.backgroundElRef.nativeElement.style.height = activeSectionHeight + 'px';
    // this.backgroundElRef.nativeElement.style.width = activeSectionWidth + 'px';


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


    this.headerElRef.nativeElement.addEventListener('mouseleave', () => {
      this.popoverElRef.nativeElement.classList.remove('open');
    });

  }

}
