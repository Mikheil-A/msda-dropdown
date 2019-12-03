import {NgModule} from '@angular/core';
import {MsdaDropdownLibComponent} from './msda-dropdown-lib.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [MsdaDropdownLibComponent],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports: [MsdaDropdownLibComponent]
})
export class MsdaDropdownLibModule {
}
