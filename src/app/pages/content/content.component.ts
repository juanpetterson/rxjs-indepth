import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IOperatorData } from 'src/app/core/models/operator-data';
import { operatorsData } from 'src/assets/data/operators/operators-data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  public operatorType: string;
  public operatorData: IOperatorData;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.operatorType = data.operator;
      this.operatorData = operatorsData[this.operatorType];
    });
  }
}
