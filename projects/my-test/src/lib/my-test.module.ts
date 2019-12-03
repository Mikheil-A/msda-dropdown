import { NgModule } from '@angular/core';
import { MyTestComponent } from './my-test.component';
import { PosterComponent } from './poster/poster.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [MyTestComponent, PosterComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [MyTestComponent, PosterComponent]
})
export class MyTestModule { }
