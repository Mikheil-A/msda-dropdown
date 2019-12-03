import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {MsdaDropdownLibModule} from 'msda-dropdown-lib';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MsdaDropdownLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
