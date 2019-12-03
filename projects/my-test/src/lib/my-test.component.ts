import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-test',
  template: `
    <p>
      my-test works!
    </p>
  `,
  styles: []
})
export class MyTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
