import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Peg } from '../models/peg.model';
import { Score } from '../models/score.model';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  rowsChanged = new Subject<Peg[][]>();
  private rows: Peg[][] = [
    [new Peg(-1), new Peg(-1), new Peg(-1), new Peg(-1)],
  ];
  scoresChanged = new Subject<Score[][]>();
  private scores: Score[][] = [
    [new Score(-1), new Score(-1), new Score(-1), new Score(-1)],
  ];

  colorChooserChanged = new Subject<{ style: object }>();
  private colorChooser = {
    style: {
      display: 'none',
      top: '0px',
      left: '0px',
    },
  };

  currentPegCoordinates = {
    x: -1,
    y: -1,
  };

  secretCode: Number[] = [_.random(3), _.random(3), _.random(3), _.random(3)];

  getRows() {
    return this.rows.slice();
  }

  getLastRow() {
    return this.rows[this.rows.length - 1].slice();
  }

  getScores() {
    return this.scores.slice();
  }

  getLastScore() {
    return this.scores[this.scores.length - 1].slice();
  }

  getColorChooser() {
    return this.colorChooser;
  }

  showColorChooser(targetEl: any, pegCoordinates: { x: number; y: number }) {
    if (pegCoordinates.y !== this.getRows().length - 1) {
      return;
    }

    this.currentPegCoordinates = pegCoordinates;

    let myTop, myLeft;
    const targetRect = targetEl.getBoundingClientRect();
    myTop = window.scrollY + targetRect.top + targetRect.height;
    myLeft = targetRect.right - targetRect.width / 2;

    this.colorChooser = {
      style: {
        display: 'block',
        top: `${myTop}px`,
        left: `${myLeft}px`,
      },
    };
    this.colorChooserChanged.next(this.colorChooser);
  }

  closeColorChooser() {
    this.colorChooser = {
      style: {
        display: 'none',
        top: '0px',
        left: '0px',
      },
    };
    this.colorChooserChanged.next(this.colorChooser);
  }

  changeColor(newColor: number) {
    this.rows[this.currentPegCoordinates.y][
      this.currentPegCoordinates.x
    ] = new Peg(newColor);
    this.rowsChanged.next(this.rows);
    this.closeColorChooser();
  }

  check() {
    this.closeColorChooser();

    let guess = this.getLastRow().map((peg) => peg.color);
    let scoreTotals = this.calculateScore(this.secretCode, guess);
    let score = [];
    for (let i = 0; i < scoreTotals.correctColor; i++) {
      score.push(new Score(0));
    }
    for (let i = 0; i < scoreTotals.correct; i++) {
      score.push(new Score(1));
    }
    while (score.length < 4) {
      score.push(new Score(-1));
    }
    this.scores[this.scores.length - 1] = score;
    this.scoresChanged.next(this.scores);

    if (scoreTotals.correct < 4) {
      this.rows.push([new Peg(-1), new Peg(-1), new Peg(-1), new Peg(-1)]);
      this.rowsChanged.next(this.rows);
      this.scores.push([
        new Score(-1),
        new Score(-1),
        new Score(-1),
        new Score(-1),
      ]);
      this.scoresChanged.next(this.scores);
    }
  }

  calculateScore(secretCode: Number[], guess: Number[]) {
    let perfectMatches = guess.filter((color, i) => color === secretCode[i]);
    let correct = perfectMatches.length;

    let secretCodeCountByColors = _.countBy(secretCode);
    let guessCountByColors = _.countBy(guess);
    let totalColorMatches = 0;
    for (let color in guessCountByColors) {
      let secretCodeCount = secretCodeCountByColors[color] ?? 0;
      totalColorMatches += Math.min(secretCodeCount, guessCountByColors[color]);
    }
    let correctColor = totalColorMatches - correct;

    return { correct, correctColor };
  }
}
