import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MsdaNavigationWithDropdownComponent} from './msda-navigation-with-dropdown/msda-navigation-with-dropdown.component';


// you need to have this library installed
import {MsdaDropdownLibModule} from 'msda-dropdown-lib';



@NgModule({
  declarations: [
    AppComponent,
    MsdaNavigationWithDropdownComponent
  ],
  imports: [
    BrowserModule,

    MsdaDropdownLibModule
  ],
  providers: [],
  exports: [
    MsdaNavigationWithDropdownComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
