import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MsdaNavigationWithDropdownComponent} from './msda-navigation-with-dropdown/msda-navigation-with-dropdown.component';


// FIXME these work perfectly, it's a tslint problem which makes them red underlined
import {MsdaDropdownLibModule} from 'msda-dropdown-lib';
import {MyTestModule} from 'my-test';



@NgModule({
  declarations: [
    AppComponent,
    MsdaNavigationWithDropdownComponent
  ],
  imports: [
    BrowserModule,

    MyTestModule,
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
