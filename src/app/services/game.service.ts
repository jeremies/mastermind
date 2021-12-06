import { Injectable } from '@angular/core';
import { Peg } from '../models/peg.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private rows: Peg[][] = [
    [new Peg(0), new Peg(1), new Peg(2), new Peg(3)],
    [new Peg(2), new Peg(3), new Peg(0), new Peg(1)],
  ];

  getRows() {
    return this.rows.slice();
  }
}
