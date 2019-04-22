import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DxFormModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
