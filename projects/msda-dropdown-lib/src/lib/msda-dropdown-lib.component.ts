import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';


@Component({
  selector: 'lib-msda-dropdown-lib',
  templateUrl: './msda-dropdown-lib.component.html',
  styleUrls: ['./msda-dropdown-lib.component.scss']
})
export class MsdaDropdownLibComponent implements OnInit, AfterViewInit, OnChanges  {


  @ViewChildren('navItemRef') navItemRefs: QueryList<any>;
  @ViewChildren('sectionElRef') sectionElRefs: QueryList<any>;

  @ViewChild('popoverElRef', {static: true}) popoverElRef: ElementRef;
  @ViewChild('headerElRef', {static: true}) headerElRef: ElementRef;
  @ViewChild('arrowElRef', {static: true}) arrowElRef: ElementRef;
  @ViewChild('contentElRef', {static: true}) contentElRef: ElementRef;
  @ViewChild('backgroundElRef', {static: true}) backgroundElRef: ElementRef;

  popoverLeft;


  // TODO: generate on the fly
  dimensions = [
    {width: 490, height: 280, x: 0},
    {width: 390, height: 266, x: 100},
    {width: 260, height: 296, x: 200}
  ];


  @Input() public navigationData;


  showSection(index) {
    this.popoverElRef.nativeElement.classList.add('open');
    this.sectionElRefs.forEach(el => el.nativeElement.classList.remove('active'));

    this.sectionElRefs.forEach((el, i) => {

      // this.dimensions[i]['height'] = el.nativeElement.offsetHeight;
      // this.dimensions[i]['width'] = el.nativeElement.offsetWidth;
      // this.dimensions[index]['x'] = el.nativeElement.getBoundingClientRect().x;

      if (index === i) {
        el.nativeElement.classList.add('active');

        // el.nativeElement.addEventListener('mouseleave', () => {
        //   this.popoverElRef.nativeElement.classList.remove('open');
        // });
      }
    });


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


  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.navigationData.forEach((navItem, i) => {
      let numberOfProducts = 0;
      navItem.dropdownData.forEach(dropdownItem => {
        numberOfProducts += dropdownItem.products.length;
      });

      console.log(i, numberOfProducts);
      this.dimensions[i]['height'] = numberOfProducts * 50 + 250;
    });
  }

  ngAfterViewInit() {
    this.popoverLeft = this.popoverElRef.nativeElement.getBoundingClientRect().x;

    this.navItemRefs.forEach((navItem, i) => {
      const rect = navItem.nativeElement.getBoundingClientRect();
      this.dimensions[i]['arrowX'] = rect.left + (rect.width / 2) - this.popoverLeft;
    });

    // Set initial arrow position
    this.arrowElRef.nativeElement['style'].transform = `translateX(${this.dimensions[0]['arrowX']}px)rotate(45deg)`;

    this.headerElRef.nativeElement.addEventListener('mouseleave', () => {
      this.popoverElRef.nativeElement.classList.remove('open');
    });
  }

}
