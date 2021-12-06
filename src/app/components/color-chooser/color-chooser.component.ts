import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-color-chooser',
  templateUrl: './color-chooser.component.html',
  styleUrls: ['./color-chooser.component.less'],
})
export class ColorChooserComponent implements OnInit {
  style = {};

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.colorChooserChanged.subscribe((colorChooser) => {
      this.style = colorChooser.style;
    });
    this.style = this.gameService.getColorChooser().style;
  }

  colorClick(newColor: number) {
    this.gameService.changeColor(newColor);
  }
}
