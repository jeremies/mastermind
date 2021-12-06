import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PegComponent } from './components/peg/peg.component';
import { RowComponent } from './components/row/row.component';

@NgModule({
  declarations: [
    AppComponent,
    PegComponent,
    RowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
