import { Component, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/Constants';
import { Peg } from 'src/app/models/peg.model';

@Component({
  selector: 'app-peg',
  templateUrl: './peg.component.html',
  styleUrls: ['./peg.component.less'],
})
export class PegComponent implements OnInit {
  @Input() peg!: Peg;
  backgroundColor!: string;

  constructor() {}

  ngOnInit(): void {
    this.backgroundColor = Constants.colorScheme[this.peg.color];
  }
}
