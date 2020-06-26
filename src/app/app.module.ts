import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Quote1Component } from './components/quote1/quote1.component';
import { Quote2Component } from './components/quote2/quote2.component';
import { Quote3Component } from './components/quote3/quote3.component';
import { Quote4Component } from './components/quote4/quote4.component';

@NgModule({
  declarations: [
    AppComponent,
    Quote1Component,
    Quote2Component,
    Quote3Component,
    Quote4Component
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
