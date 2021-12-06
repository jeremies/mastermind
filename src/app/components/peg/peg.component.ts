import { Component, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants';
import { Peg } from 'src/app/models/peg.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-peg',
  templateUrl: './peg.component.html',
  styleUrls: ['./peg.component.less'],
})
export class PegComponent implements OnInit {
  @Input() peg!: Peg;
  @Input() index!: number;
  @Input() rowIndex!: number;
  backgroundColor!: string;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.backgroundColor = Constants.colorScheme[this.peg.color];
  }

  onClick(event: Event) {
    this.gameService.showColorChooser(event.target, {
      x: this.index,
      y: this.rowIndex,
    });
  }
}
