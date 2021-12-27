import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ScorePegComponent } from '../components/score-peg/score-peg.component';
import { Peg } from '../models/peg.model';
import { Score } from '../models/score.model';

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

  getRows() {
    return this.rows.slice();
  }

  getScores() {
    return this.scores.slice();
  }

  getColorChooser() {
    return this.colorChooser;
  }

  showColorChooser(targetEl: any, pegCoordinates: { x: number; y: number }) {
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
    let secretCode = [0, 1, 2, 3];
    let correct = this.rows[this.rows.length - 1].every(
      (peg, i) => peg.color === secretCode[i]
    );
    if (!correct) {
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
}
