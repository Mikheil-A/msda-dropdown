import {Component, Input, OnInit} from '@angular/core';



@Component({
  selector: 'app-msda-dropdown',
  templateUrl: './msda-dropdown.component.html',
  styleUrls: ['./msda-dropdown.component.scss']
})
export class MsdaDropdownComponent implements OnInit {

  @Input() public data;


  constructor() {
  }

  ngOnInit() {
  }

}
