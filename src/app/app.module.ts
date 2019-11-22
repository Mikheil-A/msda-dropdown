import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MsdaDropdownComponent } from './msda-dropdown/msda-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    MsdaDropdownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
