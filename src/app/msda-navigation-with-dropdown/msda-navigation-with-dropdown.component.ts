import {AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';




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


  // TODO: generate on the fly
  // dimensions = {
  //   products: {width: 490, height: 280, x: 0},
  //   developers: {width: 390, height: 266, x: 100},
  //   company: {width: 260, height: 296, x: 200}
  // };
  dimensions = [
    {width: 490, height: 280, x: 0},
    {width: 390, height: 266, x: 100},
    {width: 260, height: 296, x: 200}
  ];

  allDimentions = [];

  firstSectionHeight;
  firstSectionWidth;
  firstSectionXPosition;

  activeSectionHeight;
  activeSectionWidth;
  activeSectionXPosition;


  // navigation = [
  //   {name: 'navitem1', dropdownContent: 'dropdown content 1'},
  //   {name: 'navitem2', dropdownContent: 'dropdown content 2'},
  //   {name: 'navitem3', dropdownContent: 'dropdown content 3'}
  // ];

  @Input() public navigationData;



  showSection(section, index) {
    this.popoverElRef.nativeElement.classList.add('open');
    this.sectionElRefs.forEach(el => el.nativeElement.classList.remove('active'));
    this.sectionElRefs.forEach((el, i) => {
      // if (i === 0) {
      //   // console.log('========', el.nativeElement.getBoundingClientRect());
      //   this.firstSectionHeight = el.nativeElement.getBoundingClientRect().height;
      //   this.firstSectionWidth = el.nativeElement.getBoundingClientRect().width;
      //   this.firstSectionXPosition = el.nativeElement.getBoundingClientRect().x;
      // }

      // console.log('el!!!!!!!1', el.nativeElement.getBoundingClientRect());
      // this.dimensions[index]['height'] = el.nativeElement.getBoundingClientRect().height;
      // this.dimensions[index]['width'] = el.nativeElement.getBoundingClientRect().width;
      // this.dimensions[index]['x'] = el.nativeElement.getBoundingClientRect().x;
      console.log(this.dimensions);

      if (index === i) {
        el.nativeElement.classList.add('active');

        // activeSectionHeight = el.nativeElement.offsetHeight;
        // this.activeSectionHeight = el.nativeElement.getBoundingClientRect().height;
        // activeSectionWidth = el.nativeElement.offsetWidth;
        // this.activeSectionWidth = el.nativeElement.getBoundingClientRect().width;
        // this.activeSectionXPosition = el.nativeElement.getBoundingClientRect().x;

        // console.log('active element:', el.nativeElement.getBoundingClientRect());

      }
    });



    // console.log(dimensions[section], dimensions['products']);


    // this.sectionElRefs[index].nativeElement.classList.add('active');

    // Position arrow
    // this.arrowElRef.nativeElement['style'].transform = `translateX(${this.dimensions[section].arrowX}px)rotate(45deg)`;
    this.arrowElRef.nativeElement['style'].transform = `translateX(${this.dimensions[index]['arrowX']}px)rotate(45deg)`;

    // Resize and position background
    // this.backgroundElRef.nativeElement['style'].transform = `
    //   translateX(${this.dimensions[section].x}px)
    //   scaleX(${this.dimensions[section].width / this.dimensions['products'].width})
    //   scaleY(${this.dimensions[section].height / this.dimensions['products'].height})
    // `;
    // this.backgroundElRef.nativeElement['style'].transform = `
    //   translateX(${this.dimensions[index].x}px)
    //   scaleX(${this.dimensions[index].width / this.dimensions['products'].width})
    //   scaleY(${this.dimensions[index].height / this.dimensions['products'].height})
    // `;
    this.backgroundElRef.nativeElement['style'].transform = `
      translateX(${this.dimensions[index].x}px)
      scaleX(${this.dimensions[index].width / this.dimensions[0].width})
      scaleY(${this.dimensions[index].height / this.dimensions[0].height})
    `;
    // this.backgroundElRef.nativeElement['style'].transform = `
    //   translateX(${this.activeSectionXPosition}px)
    //   scaleX(${this.activeSectionWidth / this.firstSectionWidth})
    //   scaleY(${this.activeSectionHeight / this.firstSectionHeight})
    // `;
    // this.backgroundElRef.nativeElement.style.height = this.dimensions[index].height + 'px';
    // this.backgroundElRef.nativeElement.style.width = this.dimensions[index].width + 'px';


    this.backgroundElRef.nativeElement.style.backgroundColor = 'red';

    // Resize and position content
    // this.contentElRef.nativeElement.style.width = this.dimensions[section].width + 'px';
    this.contentElRef.nativeElement.style.width = this.dimensions[index].width + 'px';
    // this.contentElRef.nativeElement.style.width = this.activeSectionWidth + 'px';
    // this.contentElRef.nativeElement.style.height = this.dimensions[section].height + 'px';
    this.contentElRef.nativeElement.style.height = this.dimensions[index].height + 'px';
    // this.contentElRef.nativeElement.style.height = this.activeSectionHeight + 'px';
    // this.contentElRef.nativeElement.style.transform = `translateX(${this.dimensions[section].x}px)`;
    this.contentElRef.nativeElement.style.transform = `translateX(${this.dimensions[index].x}px)`;
    // this.contentElRef.nativeElement.style.transform = `translateX(${this.activeSectionXPosition}px)`;

    // size container? If we remove from CSS and do everything dynamically.
  }



  constructor() {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.popoverLeft = this.popoverElRef.nativeElement.getBoundingClientRect()['x'];



    this.navItemRefs.forEach((navItem, i) => {
      const section = navItem.nativeElement.innerText;
      const rect = navItem.nativeElement.getBoundingClientRect();

      // dimensions[section].arrowX = rect.left + (rect.width / 2) - this.popoverLeft;
      // this.dimensions[section].arrowX = rect.left + (rect.width / 2) - this.popoverLeft;
      this.dimensions[i]['arrowX'] = rect.left + (rect.width / 2) - this.popoverLeft;
    });



    // Set initial arrow position
    // this.arrowElRef.nativeElement['style'].transform = `translateX(${this.dimensions.products['arrowX']}px)rotate(45deg)`;
    this.arrowElRef.nativeElement['style'].transform = `translateX(${this.dimensions[0]['arrowX']}px)rotate(45deg)`;


    this.headerElRef.nativeElement.addEventListener('mouseleave', () => {
      this.popoverElRef.nativeElement.classList.remove('open');
    });

  }

}
