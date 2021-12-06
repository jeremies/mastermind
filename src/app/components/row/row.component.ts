import { Component, Input, OnInit } from '@angular/core';
import { Peg } from 'src/app/models/peg.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.less'],
})
export class RowComponent implements OnInit {
  @Input() row: Peg[] = [];

  constructor() {}

  ngOnInit(): void {}
}
