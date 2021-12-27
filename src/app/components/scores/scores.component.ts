import { Component, Input, OnInit } from '@angular/core';
import { Score } from 'src/app/models/score.model';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.less'],
})
export class ScoresComponent implements OnInit {
  @Input() scores!: Score[];
  constructor() {}

  ngOnInit(): void {}
}
