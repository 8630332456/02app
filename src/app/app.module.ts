import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlighterDirective } from './Highlighterdirective/highlighterdirective.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighlighterDirective,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
