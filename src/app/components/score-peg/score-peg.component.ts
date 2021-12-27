import { Component, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants';
import { Score } from 'src/app/models/score.model';

@Component({
  selector: 'app-score-peg',
  templateUrl: './score-peg.component.html',
  styleUrls: ['./score-peg.component.less'],
})
export class ScorePegComponent implements OnInit {
  @Input() score!: Score;
  backgroundColor!: string;

  constructor() {}

  ngOnInit(): void {
    this.backgroundColor = Constants.scoreColorScheme[this.score.score];
  }
}
