import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MsdaNavigationWithDropdownComponent } from './msda-navigation-with-dropdown/msda-navigation-with-dropdown.component';


@NgModule({
  declarations: [
    AppComponent,
    MsdaNavigationWithDropdownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
