import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PegComponent } from './components/peg/peg.component';
import { RowComponent } from './components/row/row.component';
import { BoardComponent } from './components/board/board.component';
import { ColorChooserComponent } from './components/color-chooser/color-chooser.component';
import { ScorePegComponent } from './components/score-peg/score-peg.component';
import { ScoresComponent } from './components/scores/scores.component';

@NgModule({
  declarations: [
    AppComponent,
    PegComponent,
    RowComponent,
    BoardComponent,
    ColorChooserComponent,
    ScorePegComponent,
    ScoresComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
