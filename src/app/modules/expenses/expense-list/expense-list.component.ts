import { Component, OnInit } from '@angular/core';

import { Expense } from '../../../models';
import { ExpensesService } from '../../../services/expenses/expenses.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss'],
})
export class ExpenseListComponent implements OnInit {
  expenses!: Array<Expense>;

  constructor(private expensesService: ExpensesService) {}

  ngOnInit() {
    this.expensesService.filteredExpensesChange.subscribe(
      (filteredExpenses) => {
        this.expenses = filteredExpenses;
      }
    );
  }
}
