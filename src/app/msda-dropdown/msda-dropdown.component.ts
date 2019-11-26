import {Component, Input, OnInit} from '@angular/core';




const sections = ['products', 'developers', 'company'];

// TODO: generate on the fly
const dimensions = {
  products: {width: 490, height: 280, x: 0},
  developers: {width: 390, height: 266, x: 100},
  company: {width: 260, height: 296, x: 200}
};




@Component({
  selector: 'app-msda-dropdown',
  templateUrl: './msda-dropdown.component.html',
  styleUrls: ['./msda-dropdown.component.scss']
})
export class MsdaDropdownComponent implements OnInit {

  sectionEls;
  headerEl;
  navLinkEls;
  popoverEl;
  contentEl;
  arrowEl;
  backgroundEl;

  popoverLeft;


  // navigation = [
  //   {name: 'navitem1', dropdownContent: 'dropdown content 1'},
  //   {name: 'navitem2', dropdownContent: 'dropdown content 2'},
  //   {name: 'navitem3', dropdownContent: 'dropdown content 3'}
  // ];

  // @Input() public data;


  initializeVariables() {
    this.sectionEls = document.querySelectorAll('.section');
    this.headerEl = document.querySelector('.header');
    this.navLinkEls = document.querySelectorAll('.nav-link');
    this.popoverEl = document.querySelector('.popover');
    this.contentEl = document.querySelector('.content');
    this.arrowEl = document.querySelector('.arrow');
    this.backgroundEl = document.querySelector('.background');

    this.popoverLeft = this.popoverEl.getBoundingClientRect()['x'];
  }


  showSection(section) {
    this.popoverEl.classList.add('open');
    this.sectionEls.forEach(el => el.classList.remove('active'));
    document.querySelector(`.section-${section}`).classList.add('active');

    // Position arrow
    this.arrowEl['style'].transform = `translateX(${dimensions[section].arrowX}px)rotate(45deg)`;

    // Resize and position background
    this.backgroundEl['style'].transform = `
    translateX(${dimensions[section].x}px)
    scaleX(${dimensions[section].width / dimensions['products'].width})
    scaleY(${dimensions[section].height / dimensions['products'].height})
  `;

    // this.backgroundEl.style.width = dimensions[section].width + 100 + 'px';
    // this.backgroundEl.style.height = dimensions[section].height + 100 + 'px';

    // Resize and position content
    this.contentEl.style.width = dimensions[section].width + 'px';
    this.contentEl.style.height = dimensions[section].height + 'px';
    console.log('>>>', dimensions[section]);

    this.contentEl.style.transform = `translateX(${dimensions[section].x}px)`;

    // size container? If we remove from CSS and do everything dynamically.
  }


  constructor() {
  }

  ngOnInit() {

    this.initializeVariables();

    console.log(this.navLinkEls);


    this.navLinkEls.forEach((navLink) => {
      const section = navLink.getAttribute('data-nav');
      const rect = navLink.getBoundingClientRect();
      dimensions[section].arrowX = rect.left + (rect.width / 2) - this.popoverLeft;
    });

    // Set initial arrow position
    this.arrowEl['style'].transform = `translateX(${dimensions.products['arrowX']}px)rotate(45deg)`;

    this.navLinkEls.forEach((navLink) => {
      navLink.addEventListener('mouseenter', (event) => {
        const targetPopover = event.target.getAttribute('data-nav');
        this.showSection(targetPopover);
      });
    });

    this.headerEl.addEventListener('mouseleave', () => {
      this.popoverEl.classList.remove('open');
    });

  }

}
