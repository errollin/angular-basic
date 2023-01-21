import { Component, Input, OnChanges } from '@angular/core';

import { Item } from '../../../../models';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnChanges {
  @Input() dataPoints!: Array<Item>;

  dataPointValues!: Array<number>;
  totalMaximum!: number;

  ngOnChanges() {
    this.dataPointValues = this.dataPoints.map((dataPoint) => {
      return +dataPoint.value;
    });
    this.totalMaximum = this.dataPointValues.reduce(
      (previousValue, currentValue, currentIndex, array) => {
        return previousValue + currentValue;
      },
      0
    );
  }
}
