import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.scss'],
})
export class ChartBarComponent implements OnInit {
  @Input() label!: string;
  @Input() value!: number;
  @Input() maxValue!: number;

  barFillHeight = '0%';

  ngOnInit() {
    setTimeout(() => {
      if (this.maxValue > 0) {
        this.barFillHeight = `${Math.round(
          (this.value / this.maxValue) * 100
        )}%`;
      }
    }, 300);
  }
}
