import { Component, OnInit } from '@angular/core';

import { Item } from '../../../models';
import { ExpensesService } from '../../../services/expenses/expenses.service';

@Component({
  selector: 'app-expense-chart',
  templateUrl: './expense-chart.component.html',
  styleUrls: ['./expense-chart.component.scss'],
})
export class ExpenseChartComponent implements OnInit {
  chartDataPoints: Array<Item> = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  constructor(private expensesService: ExpensesService) {}

  ngOnInit() {
    this.expensesService.filteredExpensesChange.subscribe(
      (filteredExpenses) => {
        this.resetChartDataPoints();
        for (const expense of filteredExpenses) {
          // starting at 0 => January
          const expenseMonth = expense.date.getMonth();
          (this.chartDataPoints[expenseMonth].value as number) +=
            expense.amount;
        }
      }
    );
  }

  resetChartDataPoints() {
    this.chartDataPoints = [
      { label: 'Jan', value: 0 },
      { label: 'Feb', value: 0 },
      { label: 'Mar', value: 0 },
      { label: 'Apr', value: 0 },
      { label: 'May', value: 0 },
      { label: 'Jun', value: 0 },
      { label: 'Jul', value: 0 },
      { label: 'Aug', value: 0 },
      { label: 'Sep', value: 0 },
      { label: 'Oct', value: 0 },
      { label: 'Nov', value: 0 },
      { label: 'Dec', value: 0 },
    ];
  }
}
