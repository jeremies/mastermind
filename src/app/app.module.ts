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
import { HomeComponent } from './pages/home/home.component';
import { PlayGameComponent } from './pages/play-game/play-game.component';

@NgModule({
  declarations: [
    AppComponent,
    PegComponent,
    RowComponent,
    BoardComponent,
    ColorChooserComponent,
    ScorePegComponent,
    ScoresComponent,
    HomeComponent,
    PlayGameComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
