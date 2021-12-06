import { Component, OnInit } from '@angular/core';
import { Peg } from 'src/app/models/peg.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.less'],
})
export class BoardComponent implements OnInit {
  rows: Peg[][] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.rowsChanged.subscribe((rows) => {
      this.rows = rows;
    });
    this.rows = this.gameService.getRows();
  }
}
