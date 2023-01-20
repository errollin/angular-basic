import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-date',
  templateUrl: './expense-date.component.html',
  styleUrls: ['./expense-date.component.scss'],
})
export class ExpenseDateComponent implements OnInit {
  @Input() date!: Date;

  month!: string;
  day!: string;
  year!: number;

  ngOnInit() {
    this.month = this.date.toLocaleString('en-US', { month: 'long' });
    this.day = this.date.toLocaleString('en-US', { day: '2-digit' });
    this.year = this.date.getFullYear();
  }
}
