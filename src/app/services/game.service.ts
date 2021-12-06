import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Peg } from '../models/peg.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  rowsChanged = new Subject<Peg[][]>();
  private rows: Peg[][] = [
    [new Peg(0), new Peg(1), new Peg(2), new Peg(3)],
    [new Peg(2), new Peg(3), new Peg(0), new Peg(1)],
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
}
